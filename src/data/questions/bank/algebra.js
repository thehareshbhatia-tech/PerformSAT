export const algebraBank = [
  // === SLOPE FROM POINTS (5 questions) ===
  {
    id: "bank-alg-001",
    domain: "algebra",
    skills: ["slope-from-points"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The table shows the height, in centimeters, of a bamboo plant on two days. The height increased at a constant rate. What was the rate of change, in centimeters per day, of the height?",
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
    question: "What is the slope of the line shown in the $xy$-plane?",
    diagram: { type: "linearGraph", params: { slope: 3, yIntercept: 2, xRange: [0, 8], yRange: [0, 24], xTickInterval: 2, yTickInterval: 4, gridInterval: 2, showPoints: [[2, 8], [6, 20]] } },
    choices: [
      // distractor: reads the y-intercept of the line, 2, as its slope
      { id: "A", text: "$2$" },
      { id: "B", text: "$3$" },
      // distractor: uses the change in x, 6 - 2 = 4, by itself as the slope
      { id: "C", text: "$4$" },
      // distractor: uses the change in y, 20 - 8 = 12, without dividing by the change in x
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The line passes through the grid points $(2, 8)$ and $(6, 20)$, so the slope is $\\frac{20 - 8}{6 - 2} = 3$.\n\n**The Full Solution:**\nStep 1: Read two points that sit exactly on the line at grid intersections: $(2, 8)$ and $(6, 20)$.\nStep 2: Slope is the change in $y$ divided by the change in $x$: $\\frac{20 - 8}{6 - 2} = \\frac{12}{4}$.\nStep 3: So the slope is $3$. Check: the $y$-intercept would be $8 - 3(2) = 2$, and the line does cross the $y$-axis at $(0, 2)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports the $y$-intercept, the $y$-value where the line crosses the $y$-axis, instead of the slope.\n* Choice C ($4$): reports the change in $x$, $6 - 2$, instead of the ratio.\n* Choice D ($12$): reports the change in $y$, $20 - 8$, without dividing by the change in $x$.\n\n**Test Day Takeaway:** Pick two points that sit exactly on grid intersections, then divide the change in $y$ by the change in $x$.",
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
    question: "A shipping company charges a flat fee plus a fixed amount per kilogram. It costs \\$19.50 to ship a $3$-kilogram package and \\$34.50 to ship a $9$-kilogram package. What is the charge per kilogram, in dollars?",
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
    question: "The table shows the volume of propane, in gallons, in a tank on two days. The volume decreased at a constant rate. At what rate, in gallons per day, did the volume decrease?",
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
    question: "The table shows the water level, in centimeters, of a river at two times after a measurement began. The water level changed at a constant rate. What was the rate of change, in centimeters per hour, of the water level?",
    questionTable: { headers: ["Time (minutes)", "Water level (cm)"], rows: [["40", "184"], ["190", "154"]] },
    choices: [
      // distractor: reports the change in water level without dividing by the elapsed time
      { id: "A", text: "$-30$" },
      // distractor: reads 150 minutes as 1.5 hours instead of 2.5 hours
      { id: "B", text: "$-20$" },
      { id: "C", text: "$-12$" },
      // distractor: gives the rate in centimeters per minute instead of per hour
      { id: "D", text: "$-0.2$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Average Rate Over Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The level fell $184 - 154 = 30$ centimeters in $190 - 40 = 150$ minutes, which is $2.5$ hours, so the rate is $\\frac{-30}{2.5} = -12$ centimeters per hour.\n\n**The Full Solution:**\nStep 1: Change in water level $= 154 - 184 = -30$ centimeters; change in time $= 190 - 40 = 150$ minutes.\nStep 2: Convert the time to hours: $150$ minutes $= \\frac{150}{60} = 2.5$ hours.\nStep 3: Rate $= \\frac{-30}{2.5} = -12$ centimeters per hour. Check: at $-12$ centimeters per hour, $2.5$ hours lowers the level by $12(2.5) = 30$ centimeters, from $184$ to $154$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-30$): stops at the change in water level and never divides by the elapsed time.\n* Choice B ($-20$): reads $150$ minutes as $1.5$ hours; $150$ minutes is $2$ hours and $30$ minutes, or $2.5$ hours.\n* Choice D ($-0.2$): divides by $150$ minutes, which gives the rate per minute, not per hour.\n\n**Test Day Takeaway:** When the table and the question use different units, convert before dividing: here minutes must become hours because the question asks for centimeters per hour.",
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
    question: "A tank contains $48$ liters of water. Water is added at a rate of $1.5$ liters per minute. Which equation gives the volume $V$, in liters, of water in the tank after $m$ minutes?",
    choices: [
      // distractor: treats the volume as decreasing by 1.5 liters per minute
      { id: "A", text: "$V = 48 - 1.5m$" },
      // distractor: swaps the rate and the starting volume
      { id: "B", text: "$V = 48m + 1.5$" },
      // distractor: subtracts the starting volume instead of adding it
      { id: "C", text: "$V = 1.5m - 48$" },
      { id: "D", text: "$V = 1.5m + 48$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Linear Model (Identify Slope and Intercept)**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Start with $48$ liters and add $1.5$ liters for each of the $m$ minutes: $V = 1.5m + 48$.\n\n**The Full Solution:**\nStep 1: A quantity that starts at a fixed value and changes by a constant amount each minute is linear: $V = (\\text{rate})m + (\\text{starting value})$.\nStep 2: The rate is $1.5$ liters per minute and the starting value (at $m = 0$) is $48$ liters, so $V = 1.5m + 48$.\nStep 3: Check: at $m = 0$, $V = 48$, the starting volume; after $10$ minutes, $V = 1.5(10) + 48 = 63$, which is $15$ liters more ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($V = 48 - 1.5m$): models a tank that loses $1.5$ liters each minute, but water is being added.\n* Choice B ($V = 48m + 1.5$): swaps the rate and the starting value, so the volume would grow by $48$ liters every minute.\n* Choice C ($V = 1.5m - 48$): subtracts the starting volume, giving $V = -48$ at $m = 0$.\n\n**Test Day Takeaway:** In $y = mx + b$, the per-unit rate multiplies the variable and the starting amount stands alone; test $x = 0$ to confirm the intercept matches the situation.",
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
    question: "A pottery studio charges a one-time fee of \\$45 plus \\$12 per session. Which equation gives the total cost $C$, in dollars, for $s$ sessions?",
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
    explanation: "**SAT Pattern: Linear Cost Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** One-time fee $45$, plus $12$ per session for $s$ sessions: $C = 12s + 45$.\n\n**The Full Solution:**\nStep 1: A fixed fee plus a constant charge per session is a linear cost: $C = (\\text{cost per session})s + (\\text{fixed fee})$.\nStep 2: The cost per session is $12$ and the fixed fee is $45$, so $C = 12s + 45$.\nStep 3: Check: with $s = 0$, $C = 45$, the fee alone; with $s = 3$, $C = 36 + 45 = 81$, which is $45$ plus three sessions at $12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($C = 12s - 45$): subtracts the one-time fee, giving a negative cost for $0$ sessions.\n* Choice B ($C = 45s + 12$): swaps the two numbers, charging $45$ per session and a $12$ fee.\n* Choice D ($C = 57s$): adds $45 + 12$ and charges it every session, as if the one-time fee recurred.\n\n**Test Day Takeaway:** A one-time fee is the $y$-intercept and a per-unit charge is the slope; a fee that is paid once never multiplies the variable.",
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
    question: "For the linear function $f$, $f(0) = 9$ and $f(6) = 33$. Which equation defines $f$?",
    choices: [
      // distractor: flips the sign of the $y$-intercept, so the graph would cross the $y$-axis at $-9$
      { id: "A", text: "$f(x) = 4x - 9$" },
      { id: "B", text: "$f(x) = 4x + 9$" },
      // distractor: uses $\frac{33}{6}$ as the slope, ignoring that the line starts at $9$ rather than at $0$
      { id: "C", text: "$f(x) = \\frac{11}{2}x + 9$" },
      // distractor: swaps the slope and the $y$-intercept
      { id: "D", text: "$f(x) = 9x + 4$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Slope-Intercept Form Identification**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $f(0) = 9$ makes the $y$-intercept $9$, and the output rises $33 - 9 = 24$ over a run of $6$, so the slope is $4$ and $f(x) = 4x + 9$.\n\n**The Full Solution:**\nStep 1: A linear function has the form $f(x) = mx + b$. Since $f(0) = b$, the given value $f(0) = 9$ means $b = 9$.\nStep 2: Substitute the second value: $f(6) = 6m + 9 = 33$, so $6m = 24$ and $m = 4$.\nStep 3: Therefore $f(x) = 4x + 9$. Check: $f(0) = 9$ and $f(6) = 4(6) + 9 = 33$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(x) = 4x - 9$): has the correct slope but negates the intercept, so $f(0) = -9$.\n* Choice C ($f(x) = \\frac{11}{2}x + 9$): uses $\\frac{33}{6}$ as the slope, as if the graph passed through the origin, and then adds the $9$ anyway.\n* Choice D ($f(x) = 9x + 4$): reverses the roles of the slope and the $y$-intercept.\n\n**Test Day Takeaway:** $f(0)$ is the constant term with no work; spend the effort on the slope, then check the second given value.",
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
    question: "$r(t) = 2{,}400 - 85t$\nThe function $r$ estimates the volume of fuel, in liters, remaining in a generator's tank $t$ hours after the generator is started. What is the best interpretation of $85$ in this context?",
    choices: [
      // distractor: confuses the rate 85 with the starting volume, which is 2,400
      { id: "A", text: "The tank contains an estimated $85$ liters of fuel when the generator is started." },
      // distractor: treats the rate as the time until the tank is empty, which is 2,400/85, about 28 hours
      { id: "B", text: "The generator can run for an estimated $85$ hours before the tank is empty." },
      // distractor: inverts the rate, reading liters per hour as hours per liter
      { id: "C", text: "The estimated volume of fuel in the tank decreases by $1$ liter every $85$ hours." },
      { id: "D", text: "The estimated volume of fuel in the tank decreases by $85$ liters each hour." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** In $r(t) = 2{,}400 - 85t$, the coefficient of $t$ is the rate of change: each hour, the estimated volume of fuel drops by $85$ liters.\n\n**The Full Solution:**\nStep 1: The function has the linear form $r(t) = b + mt$ with $b = 2{,}400$ and $m = -85$. The constant term is the estimated volume at $t = 0$.\nStep 2: The slope $m = -85$ is the change in $r(t)$ for each increase of $1$ in $t$: the estimated volume decreases by $85$ liters for each hour the generator runs.\nStep 3: Check: $r(1) = 2{,}400 - 85 = 2{,}315$ and $r(2) = 2{,}230$, a drop of $85$ liters for each additional hour ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: describes the starting volume, but that is $r(0) = 2{,}400$ liters, not $85$.\n* Choice B: the time until the tank is empty is the solution of $r(t) = 0$, which is $\\frac{2{,}400}{85} \\approx 28$ hours, not $85$.\n* Choice C: inverts the rate; $85$ is liters per hour, not hours per liter.\n\n**Test Day Takeaway:** In $y = b + mx$, the number multiplying the variable is the change in the output for each one-unit increase in the input, and its sign gives the direction.",
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
    question: "$6x - 15y = 45$\nThe given equation relates the variables $x$ and $y$. Which equation correctly expresses $y$ in terms of $x$?",
    choices: [
      // distractor: divides $-6x$ by $15$ instead of by $-15$, leaving the slope negative
      { id: "A", text: "$y = -\\frac{2}{5}x - 3$" },
      { id: "B", text: "$y = \\frac{2}{5}x - 3$" },
      // distractor: divides $45$ by $-15$ as if the quotient were $+3$
      { id: "C", text: "$y = \\frac{2}{5}x + 3$" },
      // distractor: inverts the coefficient ratio, using $\frac{15}{6}$ for the slope
      { id: "D", text: "$y = \\frac{5}{2}x - 3$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Standard to Slope-Intercept**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Solving $6x - 15y = 45$ for $y$ divides everything by $-15$, giving $y = \\frac{2}{5}x - 3$.\n\n**The Full Solution:**\n\nStep 1: Move the $x$-term: $-15y = -6x + 45$.\n\nStep 2: Divide every term by $-15$: $y = \\frac{-6}{-15}x + \\frac{45}{-15}$.\n\nStep 3: Simplify: $y = \\frac{2}{5}x - 3$. Check $(5, -1)$: $6(5) - 15(-1) = 45$, and $\\frac{2}{5}(5) - 3 = -1$.\n\n**Why the wrong answers are tempting:**\n\n* Choice A ($y = -\\frac{2}{5}x - 3$): divides the $x$-term by $15$ but the constant by $-15$, so the slope keeps a stray negative.\n\n* Choice C ($y = \\frac{2}{5}x + 3$): gets the slope right but treats $\\frac{45}{-15}$ as $+3$.\n\n* Choice D ($y = \\frac{5}{2}x - 3$): uses $\\frac{15}{6}$ for the slope, flipping the ratio of the coefficients.\n\n**Test Day Takeaway:** Divide every term by the same signed number; the constant is where a dropped negative usually shows up.",
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
    question: "A snowbank was $90$ centimeters tall at the start of an observation and $60$ centimeters tall $150$ minutes later. The height of the snowbank decreased at a constant rate. How many hours after the start of the observation was the height of the snowbank $0$ centimeters?",
    choices: [
      // distractor: treats the 30-centimeter drop as happening in 1 hour instead of 2.5 hours (90 / 30)
      { id: "A", text: "$3$" },
      // distractor: divides the second height, 60, by the rate, which measures from the second observation instead of the start
      { id: "B", text: "$5$" },
      { id: "C", text: "$7.5$" },
      // distractor: finds the 7.5 hours from the start and then adds the 2.5 hours that have already passed
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear Model to Find Zero Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The height fell $30$ centimeters in $150$ minutes, or $2.5$ hours, which is $12$ centimeters per hour. Melting all $90$ centimeters takes $\\frac{90}{12} = 7.5$ hours.\n\n**The Full Solution:**\nStep 1: Change in height $= 90 - 60 = 30$ centimeters over $150$ minutes $= 2.5$ hours, so the rate is $\\frac{30}{2.5} = 12$ centimeters per hour.\nStep 2: The height $t$ hours after the start is $h = 90 - 12t$.\nStep 3: Set $h = 0$: $12t = 90$, so $t = 7.5$. Check: after $2.5$ hours the height is $90 - 12(2.5) = 60$ centimeters, matching the second measurement, and $90 - 12(7.5) = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): uses $30$ centimeters per hour, forgetting that the $30$-centimeter drop took $2.5$ hours: $\\frac{90}{30} = 3$.\n* Choice B ($5$): computes $\\frac{60}{12} = 5$, which is the time after the second measurement, not after the start.\n* Choice D ($10$): finds the correct $7.5$ hours from the start and then adds the $2.5$ hours a second time.\n\n**Test Day Takeaway:** For a \"when does it reach zero\" question, find the rate with consistent units, write height $=$ start $-$ rate $\\times$ time, and measure the time from the starting point the question names.",
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
    question: "The table shows the total number of downloads of an app on two days after its release. The total increased at a constant rate. If this rate continues, on which day will the total number of downloads first exceed $20{,}000$?",
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
    question: "A club printed $c$ color programs that cost \\$0.60 each and $80$ black-and-white programs that cost \\$0.25 each. The club spent a total of \\$56 on these programs. Which equation represents this situation?",
    choices: [
      // distractor: swaps the two prices
      { id: "A", text: "$0.25c + 0.60(80) = 56$" },
      // distractor: uses c for both kinds of programs instead of 80 for the black-and-white programs
      { id: "B", text: "$0.60c + 0.25c = 56$" },
      { id: "C", text: "$0.60c + 0.25(80) = 56$" },
      // distractor: adds the number of black-and-white programs instead of their cost
      { id: "D", text: "$0.60c + 80 = 56$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Word Problem to Equation Setup**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The color programs cost $0.60c$ dollars and the $80$ black-and-white programs cost $0.25(80)$ dollars, and together they cost $56$ dollars.\n\n**The Full Solution:**\nStep 1: Cost of the color programs: $c$ programs at \\$0.60 each is $0.60c$ dollars.\nStep 2: Cost of the black-and-white programs: $80$ programs at \\$0.25 each is $0.25(80)$ dollars.\nStep 3: The total is \\$56, so $0.60c + 0.25(80) = 56$. Check: this gives $0.60c + 20 = 56$, so $c = 60$, and $60(0.60) + 80(0.25) = 36 + 20 = 56$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.25c + 0.60(80) = 56$): attaches each price to the wrong kind of program.\n* Choice B ($0.60c + 0.25c = 56$): multiplies the black-and-white price by $c$, but $c$ counts only the color programs.\n* Choice D ($0.60c + 80 = 56$): adds the number of black-and-white programs, $80$, instead of their cost, $0.25(80)$.\n\n**Test Day Takeaway:** Build a cost equation one item at a time: (price) $\\times$ (number of that item), then add the parts and set the sum equal to the total.",
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
    question: "A gardener paid \\$68 for a garden plot that costs \\$32 and $b$ bags of compost that cost \\$4 each. Which equation represents this situation?",
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
    question: "Orchard A has $640$ trees and adds $40$ trees each week. Orchard B has $1{,}000$ trees and removes $20$ trees each week. After how many weeks will the two orchards have the same number of trees?",
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
    explanation: "**SAT Pattern: Set Two Linear Models Equal**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The gap of $1{,}000 - 640 = 360$ trees closes at $40 + 20 = 60$ trees per week, so it closes in $\\frac{360}{60} = 6$ weeks.\n\n**The Full Solution:**\nStep 1: Let $w$ be the number of weeks. Orchard A: $640 + 40w$. Orchard B: $1{,}000 - 20w$ (removing trees is a negative rate).\nStep 2: Set them equal: $640 + 40w = 1{,}000 - 20w$. Add $20w$ to both sides and subtract $640$: $60w = 360$, so $w = 6$.\nStep 3: Check: after $6$ weeks orchard A has $640 + 240 = 880$ trees and orchard B has $1{,}000 - 120 = 880$ trees. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): solves $640 + 40w = 1{,}000$, ignoring that orchard B is shrinking.\n* Choice C ($18$): writes orchard B as $1{,}000 + 20w$, a sign error, and gets $20w = 360$.\n* Choice D ($60$): reports the combined closing rate, $40 + 20$, instead of solving for the time.\n\n**Test Day Takeaway:** When one quantity grows and another shrinks, their gap closes at the sum of the two rates; the time is the initial gap divided by that sum.",
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
    question: "A crew has paved $850$ meters of a road and paves $125$ more meters each hour. How many more hours will it take for the paved length to reach a total of $2{,}600$ meters?",
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
    question: "A deck can hold at most $3{,}600$ kilograms. It holds $14$ planters of $85$ kilograms each. What is the maximum number of $140$-kilogram benches that can be added to the deck?",
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
    question: "Plan A for renting an office costs $d$ dollars plus \\$180 per month. Plan B costs \\$225 per month. Renting for $12$ months under plan A costs the same as renting for $10$ months under plan B. What is the value of $d$?",
    choices: [
      { id: "A", text: "$90$" },
      // distractor: uses 10 months for both plans: 225(10) - 180(10)
      { id: "B", text: "$450$" },
      // distractor: uses 12 months for both plans: 225(12) - 180(12)
      { id: "C", text: "$540$" },
      // distractor: swaps the two durations: d + 180(10) = 225(12)
      { id: "D", text: "$900$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Break-Even Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Plan B for $10$ months costs $225(10) = 2{,}250$ dollars, and plan A for $12$ months costs $d + 180(12) = d + 2{,}160$ dollars. Setting the totals equal gives $d = 2{,}250 - 2{,}160 = 90$.\n\n**The Full Solution:**\nStep 1: Build each total with its own number of months. Plan A for $12$ months: $d + 180(12) = d + 2{,}160$. Plan B for $10$ months: $225(10) = 2{,}250$.\nStep 2: The two totals are equal: $d + 2{,}160 = 2{,}250$. Subtract $2{,}160$ from both sides: $d = 90$.\nStep 3: Check: $90 + 180(12) = 90 + 2{,}160 = 2{,}250$, and $225(10) = 2{,}250$, so the two totals match ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($450$): uses $10$ months for both plans, computing $225(10) - 180(10)$, and ignores that plan A runs for $12$ months.\n* Choice C ($540$): uses $12$ months for both plans, computing $225(12) - 180(12)$.\n* Choice D ($900$): swaps the two durations, solving $d + 180(10) = 225(12)$ instead.\n\n**Test Day Takeaway:** To find an unknown fixed charge, set the two totals equal, but build each total with its own duration; the fixed charge is what remains after the monthly charges are subtracted.",
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
    question: "The table shows values of $x$ and $y$, where $y$ is a linear function of $x$. Which equation represents this relationship?",
    questionTable: { headers: ["x", "y"], rows: [["10", "260"], ["20", "460"], ["30", "660"]] },
    choices: [
      // distractor: uses the first y-value in the table, 260, as the y-intercept
      { id: "A", text: "$y = 20x + 260$" },
      // distractor: divides 260 by 10 and assumes a proportional relationship
      { id: "B", text: "$y = 26x$" },
      // distractor: swaps the slope and the y-intercept
      { id: "C", text: "$y = 60x + 20$" },
      { id: "D", text: "$y = 20x + 60$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Linear Equation from Table**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Each increase of $10$ in $x$ adds $200$ to $y$, so the slope is $20$. Then $260 = 20(10) + b$ gives $b = 60$, and $y = 20x + 60$.\n\n**The Full Solution:**\nStep 1: Slope from two rows: $\\frac{460 - 260}{20 - 10} = \\frac{200}{10} = 20$.\nStep 2: Find the $y$-intercept with $y = 20x + b$ and the row $(10, 260)$: $260 = 200 + b$, so $b = 60$.\nStep 3: The equation is $y = 20x + 60$. Check the third row: $20(30) + 60 = 660$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = 20x + 260$): has the right slope but takes the first $y$-value as the $y$-intercept, even though it goes with $x = 10$, not $x = 0$.\n* Choice B ($y = 26x$): divides $260$ by $10$ and assumes a proportional relationship; it fails the second row, since $26(20) = 520$, not $460$.\n* Choice C ($y = 60x + 20$): swaps the slope and the $y$-intercept.\n\n**Test Day Takeaway:** The $y$-intercept is the value of $y$ when $x = 0$; when the table does not include $0$, back it out by substituting one row into $y = mx + b$, then confirm with another row.",
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
    question: "The function $B$ gives the balance, in dollars, of a savings account after $w$ equal weekly deposits. The table shows three values of $w$ and their corresponding values of $B(w)$. Which equation defines $B$?",
    questionTable: { headers: ["w", "B(w)"], rows: [["0", "250"], ["1", "285"], ["2", "320"]] },
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
    question: "The table shows three values of $x$ and their corresponding values of $f(x)$ for the linear function $f$. The function is defined by $f(x) = ax + b$, where $a$ and $b$ are constants. What is the value of $b$?",
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
    question: "The table shows the percent $p$ of a phone's battery charge remaining $t$ minutes after the phone was unplugged. The relationship between $t$ and $p$ is linear. Which equation represents this relationship?",
    questionTable: { headers: ["t (minutes)", "p (percent)"], rows: [["2", "88"], ["6", "76"], ["10", "64"]] },
    choices: [
      // distractor: uses the first row's charge, 88, as the intercept
      { id: "A", text: "$p = -3t + 88$" },
      { id: "B", text: "$p = -3t + 94$" },
      // distractor: assumes the battery was at 100 percent at t = 0 without computing the intercept
      { id: "C", text: "$p = -3t + 100$" },
      // distractor: drops the negative sign on the slope
      { id: "D", text: "$p = 3t + 94$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Linear Function from Table (Negative Slope)**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The charge drops $12$ percentage points every $4$ minutes, a slope of $-3$. Then $88 = -3(2) + b$ gives $b = 94$, so $p = -3t + 94$.\n\n**The Full Solution:**\nStep 1: Slope: $\\frac{76 - 88}{6 - 2} = \\frac{-12}{4} = -3$ percent per minute. The negative sign reflects a falling charge.\nStep 2: Substitute $(2, 88)$ into $p = -3t + b$: $88 = -6 + b$, so $b = 94$.\nStep 3: The equation is $p = -3t + 94$. Check $t = 10$: $-3(10) + 94 = 64$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($p = -3t + 88$): uses the charge at $t = 2$ as the intercept, but the intercept is the charge at $t = 0$.\n* Choice C ($p = -3t + 100$): assumes the battery was full when the phone was unplugged; the table implies it was at $94$ percent.\n* Choice D ($p = 3t + 94$): drops the negative sign, describing a charge that increases.\n\n**Test Day Takeaway:** A decreasing table means a negative slope; carry that sign into the intercept calculation, because $b = y - mx$ changes when $m$ is negative.",
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
    question: "The function $f$ is defined by $f(x) = 12x^{2} + 5$. What is the value of $f(3)$?",
    choices: [
      // distractor: never squares, computing 12(3) + 5
      { id: "A", text: "$41$" },
      // distractor: evaluates 12x^2 correctly but forgets to add 5
      { id: "B", text: "$108$" },
      { id: "C", text: "$113$" },
      // distractor: squares 12x instead of x, computing 36^2 + 5
      { id: "D", text: "$1{,}301$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Direct Function Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Square first: $3^{2} = 9$, then $12(9) + 5 = 113$.\n\n**The Full Solution:**\nStep 1: Substitute $3$ for $x$ in $f(x) = 12x^{2} + 5$: $f(3) = 12(3)^{2} + 5$.\nStep 2: The exponent applies to $x$ only, so $12(3)^{2} = 12(9) = 108$.\nStep 3: Add the constant: $108 + 5 = 113$. Check: $f(3) - f(0) = 113 - 5 = 108 = 12 \\cdot 9$, twelve times the square of the input ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($41$): never squares, computing $12(3) + 5$.\n* Choice B ($108$): evaluates $12x^{2}$ correctly but drops the constant $5$.\n* Choice D ($1{,}301$): squares $12x$ instead of $x$, computing $36^{2} + 5$.\n\n**Test Day Takeaway:** In $ax^{2} + b$ the exponent applies only to $x$, so square the input before multiplying by the coefficient.",
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
    question: "$g(x) = -5x + 12$\nWhat is the value of $g(-4)$?",
    correctAnswer: "32",
    explanation: "**SAT Pattern: Function Evaluation with Negatives**\n\n**The correct answer is $32$.**\n\n**The Fast Way (~15s):** $g(-4) = -5(-4) + 12 = 20 + 12 = 32$.\n\n**The Full Solution:**\nStep 1: Substitute $-4$ for $x$, keeping it in parentheses: $g(-4) = -5(-4) + 12$.\nStep 2: Multiply the two negatives: $-5(-4) = 20$.\nStep 3: Add the constant: $20 + 12 = 32$. Check: $g(0) = 12$, and each step of $1$ to the left raises $g$ by $5$, so $4$ steps to the left gives $12 + 4(5) = 32$ ✓\n\n**Common Mistakes:** Treating $-5(-4)$ as $-20$ gives $-20 + 12 = -8$. Substituting $4$ instead of $-4$ gives the same wrong value, $-8$. Subtracting the constant gives $20 - 12 = 8$.\n\n**Test Day Takeaway:** Put a negative input in parentheses before substituting; a negative times a negative is positive.",
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
    question: "$C(n) = 10n + 11$\nThe function $C$ gives the cost, in dollars, of renting a kayak for $n$ hours. If a kayak rental cost \\$71, for how many hours was the kayak rented?",
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
    explanation: "**SAT Pattern: Solve for Function Input**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Set the output equal to $71$: $10n + 11 = 71$, so $10n = 60$ and $n = 6$.\n\n**The Full Solution:**\nStep 1: The total cost is the output of $C$, so the condition is $C(n) = 71$, or $10n + 11 = 71$.\nStep 2: Subtract $11$ from both sides: $10n = 60$. Divide by $10$: $n = 6$.\nStep 3: Check: $C(6) = 10(6) + 11 = 71$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($7.1$): divides $71$ by $10$ without first removing the fixed $11$ dollars.\n* Choice C ($8.2$): adds $11$ to $71$ instead of subtracting it, then divides by $10$.\n* Choice D ($60$): stops at $10n = 60$ and reports the right-hand side instead of $n$.\n\n**Test Day Takeaway:** A cost of \\$71 fixes the OUTPUT; set the rule equal to it and undo the operations in reverse order (subtract the constant, then divide by the rate).",
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
    question: "$h(x) = 2x^{2} + kx$\nIn the given function, $k$ is a constant. If $h(3) = 24$, what is the value of $h(5)$?",
    correctAnswer: "60",
    explanation: "**SAT Pattern: Function Evaluation (Quadratic)**\n\n**The correct answer is $60$.**\n\n**The Fast Way (~20s):** $h(3) = 18 + 3k = 24$ gives $k = 2$, so $h(5) = 2(25) + 2(5) = 60$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 3$: $h(3) = 2(3)^{2} + 3k = 18 + 3k$.\nStep 2: Set this equal to $24$: $18 + 3k = 24$, so $3k = 6$ and $k = 2$. The function is $h(x) = 2x^{2} + 2x$.\nStep 3: Evaluate at $x = 5$: $h(5) = 2(25) + 2(5) = 50 + 10 = 60$. Check: with $k = 2$, $h(3) = 18 + 6 = 24$ ✓\n\n**Common Mistakes:**\n* $35$: finds $k = 2$ but drops the coefficient $2$ when evaluating at $5$: $25 + 10 = 35$.\n* $90$: solves $3k = 24$, dropping the $18$, so $k = 8$ and $h(5) = 50 + 40 = 90$.\n* $2$: stops after finding the constant $k$ instead of evaluating $h(5)$.\n\n**Test Day Takeaway:** When a function has an unknown constant, use the given point to find the constant first, then evaluate the function at the new input.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "direct-evaluation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-027",
    domain: "algebra",
    skills: ["function-notation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The functions $f$ and $g$ are defined by $f(x) = 7x - 3$ and $g(x) = kx + 12$, where $k$ is a constant. The graphs of $y = f(x)$ and $y = g(x)$ in the $xy$-plane intersect at the point $(a, 32)$. What is the value of $k$?",
    choices: [
      // distractor: makes a sign error when moving 12, solving 5k = 12 - 32
      { id: "A", text: "$-4$" },
      { id: "B", text: "$4$" },
      // distractor: reports the x-coordinate a of the intersection point instead of k
      { id: "C", text: "$5$" },
      // distractor: finds 5k = 20 and stops before dividing by 5
      { id: "D", text: "$20$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The point $(a, 32)$ is on the graph of $f$, so $7a - 3 = 32$ and $a = 5$. It is also on the graph of $g$, so $5k + 12 = 32$ and $k = 4$.\n\n**The Full Solution:**\nStep 1: Because $(a, 32)$ lies on the graph of $y = f(x)$, $f(a) = 32$: $7a - 3 = 32$, so $7a = 35$ and $a = 5$.\nStep 2: The same point $(5, 32)$ lies on the graph of $y = g(x)$, so $g(5) = 32$: $5k + 12 = 32$.\nStep 3: Subtract $12$: $5k = 20$, so $k = 4$. Check: $f(5) = 35 - 3 = 32$ and $g(5) = 4(5) + 12 = 32$, so both graphs pass through $(5, 32)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): subtracts in the wrong order, $5k = 12 - 32 = -20$.\n* Choice C ($5$): finds the $x$-coordinate $a = 5$ and reports it as the answer.\n* Choice D ($20$): reaches $5k = 20$ but does not divide by $5$.\n\n**Test Day Takeaway:** An intersection point lies on both graphs. Use the function you know completely to find the missing coordinate, then substitute the point into the other function.",
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
    question: "The graph of line $p$ is shown in the $xy$-plane. Line $q$ is parallel to line $p$. What is the slope of line $q$?",
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
    explanation: "**SAT Pattern: Parallel Slope Identification**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** The graph passes through $(0, -3)$ and $(2, 1)$; between them the line rises $4$ over a run of $2$, so line $p$ has slope $2$. Parallel lines have equal slopes, so line $q$ also has slope $2$.\n\n**The Full Solution:**\nStep 1: Slope of $p$: $\\frac{1 - (-3)}{2 - 0} = \\frac{4}{2} = 2$.\nStep 2: Two distinct lines in the $xy$-plane are parallel exactly when their slopes are equal, so the slope of $q$ equals the slope of $p$.\nStep 3: The slope of $q$ is $2$. Check on the graph: moving right $1$ unit from the $y$-intercept $(0, -3)$ raises the line $2$ units to $(1, -1)$, consistent with slope $2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): reverses the sign of the slope, which would describe a line falling from left to right, unlike $p$.\n* Choice B ($-\\frac{1}{2}$): gives the negative reciprocal, the slope of a line PERPENDICULAR to $p$, not parallel.\n* Choice C ($\\frac{1}{2}$): inverts the ratio, using run over rise.\n\n**Test Day Takeaway:** Parallel means the same slope, full stop; only perpendicular involves flipping and negating.",
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
    question: "Points $A(-4, 6)$ and $B(2, -3)$ are shown in the $xy$-plane. Line $\\ell$ is parallel to line $AB$. What is the slope of line $\\ell$?",
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
    explanation: "**SAT Pattern: Parallel Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Slope of $AB = \\frac{-3 - 6}{2 - (-4)} = \\frac{-9}{6} = -\\frac{3}{2}$, and line $\\ell$, which is parallel to $AB$, has that same slope.\n\n**The Full Solution:**\nStep 1: Slope of $AB$: $\\frac{y_B - y_A}{x_B - x_A} = \\frac{-3 - 6}{2 - (-4)} = \\frac{-9}{6}$.\nStep 2: Simplify: $-\\frac{9}{6} = -\\frac{3}{2}$. The negative sign matches the plot: $B$ is lower and to the right of $A$.\nStep 3: Parallel lines have equal slopes, so line $\\ell$ has slope $-\\frac{3}{2}$. Check: from $A(-4, 6)$, moving right $6$ and down $9$ lands on $(2, -3) = B$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{2}{3}$): inverts the ratio, dividing the run by the rise.\n* Choice C ($\\frac{2}{3}$): gives the negative reciprocal, which is the slope of a line perpendicular to $AB$.\n* Choice D ($\\frac{3}{2}$): drops the negative sign even though the line falls from left to right.\n\n**Test Day Takeaway:** Read the direction from the picture before computing: a line falling left-to-right must have a negative slope, which instantly eliminates half the choices.",
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
    question: "$9x - ky = 45$\nIn the given equation, $k$ is a constant. In the $xy$-plane, the graph of the given equation is a line parallel to the graph of $y = \\frac{3}{4}x - 1$. What is the value of $k$?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: Slope from Standard Form**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~25s):** Solving $9x - ky = 45$ for $y$ gives slope $\\frac{9}{k}$. Setting $\\frac{9}{k} = \\frac{3}{4}$ gives $k = 12$.\n\n**The Full Solution:**\n\nStep 1: The line $y = \\frac{3}{4}x - 1$ has slope $\\frac{3}{4}$, and parallel lines have equal slopes, so the graph of $9x - ky = 45$ must also have slope $\\frac{3}{4}$.\n\nStep 2: Rearrange $9x - ky = 45$: $-ky = -9x + 45$, so $y = \\frac{9}{k}x - \\frac{45}{k}$ and the slope is $\\frac{9}{k}$.\n\nStep 3: Solve $\\frac{9}{k} = \\frac{3}{4}$ by cross multiplying: $3k = 36$, so $k = 12$. Check: $9x - 12y = 45$ becomes $y = \\frac{3}{4}x - \\frac{15}{4}$, slope $\\frac{3}{4}$ and a different intercept, so the lines are parallel ✓\n\n**Common Mistakes:** Using the perpendicular slope $-\\frac{4}{3}$ in place of the parallel slope and reporting $k = -\\frac{27}{4}$; forgetting that the coefficient is $-k$ and reporting $k = -12$; setting $\\frac{9}{k}$ equal to $\\frac{4}{3}$ and reporting $k = \\frac{27}{4}$.\n\n**Test Day Takeaway:** For $Ax + By = C$ the slope is $-\\frac{A}{B}$; solve for $y$ once and the sign takes care of itself.",
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
    question: "Line $k$ is defined by $y = -\\frac{2}{3}x + 4$. Line $j$ is parallel to line $k$ in the $xy$-plane and passes through the origin. If the point $(6, d)$ lies on line $j$, what is the value of $d$?",
    choices: [
      // distractor: flips the slope to -3/2 instead of keeping -2/3: -3/2(6) = -9
      { id: "A", text: "$-9$" },
      { id: "B", text: "$-4$" },
      // distractor: evaluates line k instead of line j at x = 6: -4 + 4 = 0
      { id: "C", text: "$0$" },
      // distractor: drops the negative sign of the slope: 2/3(6) = 4
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Line $j$ has slope $-\\frac{2}{3}$ and passes through the origin, so it is $y = -\\frac{2}{3}x$, and $d = -\\frac{2}{3}(6) = -4$.\n\n**The Full Solution:**\nStep 1: Parallel lines have equal slopes, so line $j$ has slope $-\\frac{2}{3}$.\nStep 2: Line $j$ passes through the origin, so its $y$-intercept is $0$ and its equation is $y = -\\frac{2}{3}x$.\nStep 3: Substitute $x = 6$: $d = -\\frac{2}{3}(6) = -4$. Check: the slope from $(0, 0)$ to $(6, -4)$ is $\\frac{-4}{6} = -\\frac{2}{3}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): flips the slope to $-\\frac{3}{2}$, which is neither the parallel nor the perpendicular slope: $-\\frac{3}{2}(6) = -9$.\n* Choice C ($0$): evaluates line $k$ instead of line $j$: $-\\frac{2}{3}(6) + 4 = 0$; line $j$ has $y$-intercept $0$, not $4$.\n* Choice D ($4$): drops the negative sign of the slope: $\\frac{2}{3}(6) = 4$.\n\n**Test Day Takeaway:** A parallel line keeps the slope and changes only the intercept; a line through the origin has intercept $0$, so $y = mx$.",
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
    question: "In the $xy$-plane, the graphs of $9x - 4y = 26$ and $kx + 6y = 5$, where $k$ is a constant, are parallel lines. What is the value of $k$?",
    choices: [
      { id: "A", text: "$-\\frac{27}{2}$" },
      // distractor: uses $\frac{4}{9}$, the reciprocal of the first line's slope, giving $-\frac{k}{6} = \frac{4}{9}$ and $k = -\frac{8}{3}$
      { id: "B", text: "$-\\frac{8}{3}$" },
      // distractor: uses the negative reciprocal $-\frac{4}{9}$, which is the perpendicular slope, giving $k = \frac{8}{3}$
      { id: "C", text: "$\\frac{8}{3}$" },
      // distractor: sets $-\frac{k}{6} = -\frac{9}{4}$, negating the first line's slope, giving $k = \frac{27}{2}$
      { id: "D", text: "$\\frac{27}{2}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Parallel from Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Solving each equation for $y$ gives slopes $\\frac{9}{4}$ and $-\\frac{k}{6}$; parallel lines have equal slopes, so $-\\frac{k}{6} = \\frac{9}{4}$ and $k = -\\frac{27}{2}$.\n\n**The Full Solution:**\nStep 1: Rewrite $9x - 4y = 26$ as $y = \\frac{9}{4}x - \\frac{13}{2}$, so the first line has slope $\\frac{9}{4}$.\nStep 2: Rewrite $kx + 6y = 5$ as $y = -\\frac{k}{6}x + \\frac{5}{6}$, so the second line has slope $-\\frac{k}{6}$.\nStep 3: Parallel lines have equal slopes, so $-\\frac{k}{6} = \\frac{9}{4}$ and $k = -\\frac{27}{2}$; the $y$-intercepts $-\\frac{13}{2}$ and $\\frac{5}{6}$ differ, so the lines are distinct. Check: $-\\frac{1}{6}\\left(-\\frac{27}{2}\\right) = \\frac{27}{12} = \\frac{9}{4}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{8}{3}$): uses $\\frac{4}{9}$, the reciprocal of the first line's slope, so $-\\frac{k}{6} = \\frac{4}{9}$ and $k = -\\frac{8}{3}$.\n* Choice C ($\\frac{8}{3}$): uses the negative reciprocal $-\\frac{4}{9}$, which is the slope of a perpendicular line, giving $k = \\frac{8}{3}$.\n* Choice D ($\\frac{27}{2}$): sets $-\\frac{k}{6} = -\\frac{9}{4}$, negating the first line's slope, giving $k = \\frac{27}{2}$.\n\n**Test Day Takeaway:** Convert both standard-form equations to $y = mx + b$ first; the coefficient of $y$ carries a sign that is easy to lose.",
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
    question: "Line $\\ell$ in the $xy$-plane passes through the points $(2, 7)$ and $(-4, 10)$. Line $p$ is parallel to line $\\ell$, and the $y$-intercept of line $p$ is $(0, 3)$. Which equation defines line $p$?",
    choices: [
      // distractor: divides the change in x by the change in y, inverting the slope
      { id: "A", text: "$y = -2x + 3$" },
      { id: "B", text: "$y = -\\frac{1}{2}x + 3$" },
      // distractor: is line $\ell$ itself, using the y-intercept of $\ell$ instead of the given one
      { id: "C", text: "$y = -\\frac{1}{2}x + 8$" },
      // distractor: drops the negative sign when computing the slope
      { id: "D", text: "$y = \\frac{1}{2}x + 3$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Parallel with Specified Intercept**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Line $\\ell$ has slope $\\frac{10 - 7}{-4 - 2} = -\\frac{1}{2}$; line $p$ copies that slope and uses the intercept $3$, so $y = -\\frac{1}{2}x + 3$.\n\n**The Full Solution:**\nStep 1: Find the slope of line $\\ell$: $\\frac{10 - 7}{-4 - 2} = \\frac{3}{-6} = -\\frac{1}{2}$.\nStep 2: Parallel lines have equal slopes, so line $p$ also has slope $-\\frac{1}{2}$, and its $y$-intercept $(0, 3)$ gives $b = 3$.\nStep 3: Line $p$ is $y = -\\frac{1}{2}x + 3$. Check: line $\\ell$ is $y = -\\frac{1}{2}x + 8$ (since $7 = -1 + 8$), which has the same slope and a different intercept, so the lines are parallel and distinct ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -2x + 3$): divides the change in $x$ by the change in $y$, getting $\\frac{-6}{3} = -2$ instead of $-\\frac{1}{2}$.\n* Choice C ($y = -\\frac{1}{2}x + 8$): is line $\\ell$ itself: it has the right slope but the $y$-intercept of $\\ell$, not the required $3$.\n* Choice D ($y = \\frac{1}{2}x + 3$): drops the negative sign: $y$ rises from $7$ to $10$ while $x$ falls from $2$ to $-4$, so the slope must be negative.\n\n**Test Day Takeaway:** For a parallel line, compute the slope from the two points, keep it, and attach the new intercept; the original line's intercept is a ready-made trap.",
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
    question: "In the $xy$-plane, line $s$ is perpendicular to line $r$. The slope of line $r$ is $-6$. What is the slope of line $s$?",
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
    question: "The graph of line $j$ is shown. Line $k$ is perpendicular to line $j$. What is the slope of line $k$?",
    diagram: { type: "linearGraph", params: { slope: 1.3333333, yIntercept: 0, xRange: [-6, 6], yRange: [-6, 6], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[-3, -4], [3, 4]], label: "j" } },
    choices: [
      // distractor: negates line $j$'s slope without inverting it
      { id: "A", text: "$-\\frac{4}{3}$" },
      { id: "B", text: "$-\\frac{3}{4}$" },
      // distractor: inverts line $j$'s slope without negating it
      { id: "C", text: "$\\frac{3}{4}$" },
      // distractor: repeats line $j$'s own slope
      { id: "D", text: "$\\frac{4}{3}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Perpendicular Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Line $j$ has slope $\\frac{4}{3}$, so line $k$ has slope $-\\frac{3}{4}$.\n\n**The Full Solution:**\nStep 1: The plotted points are $(-3, -4)$ and $(3, 4)$, so line $j$ has slope $\\frac{4 - (-4)}{3 - (-3)} = \\frac{8}{6} = \\frac{4}{3}$.\nStep 2: A perpendicular line has the negative reciprocal slope.\nStep 3: Flipping $\\frac{4}{3}$ gives $\\frac{3}{4}$, and negating gives $-\\frac{3}{4}$. Check: $\\frac{4}{3}\\left(-\\frac{3}{4}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{4}{3}$): negates line $j$'s slope without inverting it\n* Choice C ($\\frac{3}{4}$): inverts line $j$'s slope without negating it\n* Choice D ($\\frac{4}{3}$): repeats line $j$'s own slope\n\n**Test Day Takeaway:** Read both plotted points off the grid, reduce the slope, then flip and negate.",
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
    question: "Line $p$ in the $xy$-plane passes through the points $(6, 19)$ and $(14, 9)$. Line $q$ is perpendicular to line $p$. What is the slope of line $q$?",
    correctAnswer: "0.8",
    explanation: "**SAT Pattern: Perpendicular Slope as Decimal**\n\n**The correct answer is $0.8$.**\n\n**The Fast Way (~25s):** Line $p$ has slope $\\frac{9 - 19}{14 - 6} = -\\frac{5}{4}$, so line $q$ has slope $\\frac{4}{5}$, which is $0.8$.\n\n**The Full Solution:**\nStep 1: Find the slope of line $p$: $\\frac{9 - 19}{14 - 6} = \\frac{-10}{8} = -\\frac{5}{4}$.\nStep 2: A perpendicular line has the negative reciprocal slope: flip $-\\frac{5}{4}$ to $-\\frac{4}{5}$ and change the sign to get $\\frac{4}{5}$.\nStep 3: As a decimal, $\\frac{4}{5} = 0.8$ (either form is accepted). Check: $-\\frac{5}{4} \\times \\frac{4}{5} = -1$ ✓\n\n**Common Mistakes:**\n* $-1.25$: the slope of line $p$ itself, not of the perpendicular line.\n* $-0.8$: inverts the slope but keeps the negative sign.\n* $1.25$: divides the change in $x$ by the change in $y$, getting $-0.8$ for line $p$ and then $1.25$ for line $q$.\n\n**Test Day Takeaway:** Find the slope as a fraction, take the negative reciprocal, and convert to a decimal only at the end.",
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
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$y = \\frac{2}{5}x - 6$\nIn the $xy$-plane, line $t$ is perpendicular to the graph of the given equation. What is the slope of line $t$?",
    choices: [
      { id: "A", text: "$-\\frac{5}{2}$" },
      // distractor: changes the sign of the slope but does not take the reciprocal
      { id: "B", text: "$-\\frac{2}{5}$" },
      // distractor: uses the slope of the given line, which gives a parallel line
      { id: "C", text: "$\\frac{2}{5}$" },
      // distractor: takes the reciprocal of the slope but does not change its sign
      { id: "D", text: "$\\frac{5}{2}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The given line has slope $\\frac{2}{5}$, so a perpendicular line has slope $-\\frac{5}{2}$, the negative reciprocal.\n\n**The Full Solution:**\nStep 1: The equation $y = \\frac{2}{5}x - 6$ is in slope-intercept form, so the slope of the given line is $\\frac{2}{5}$.\nStep 2: Perpendicular lines have slopes whose product is $-1$, so the slope of line $t$ is the negative reciprocal of $\\frac{2}{5}$.\nStep 3: The negative reciprocal of $\\frac{2}{5}$ is $-\\frac{5}{2}$. Check: $\\frac{2}{5}\\left(-\\frac{5}{2}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{2}{5}$): changes the sign but keeps the fraction; the product $\\frac{2}{5}\\left(-\\frac{2}{5}\\right) = -\\frac{4}{25}$, not $-1$.\n* Choice C ($\\frac{2}{5}$): is the slope of the given line itself, which would make line $t$ parallel to it.\n* Choice D ($\\frac{5}{2}$): flips the fraction but keeps the positive sign; the product is $1$, not $-1$.\n\n**Test Day Takeaway:** For a perpendicular line, do both moves: flip the fraction and change the sign. The $y$-intercept, $-6$, plays no part.",
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
    question: "Line $\\ell$ is defined by $\\frac{1}{4}x + \\frac{1}{6}y = 3$. Line $m$ is perpendicular to line $\\ell$ in the $xy$-plane. What is the slope of line $m$?",
    choices: [
      // distractor: gives the slope of line l instead of the perpendicular slope
      { id: "A", text: "$-\\frac{3}{2}$" },
      // distractor: takes the reciprocal of the slope of line l but does not change its sign
      { id: "B", text: "$-\\frac{2}{3}$" },
      { id: "C", text: "$\\frac{2}{3}$" },
      // distractor: divides the coefficients in the wrong order, getting -2/3 for line l, then takes its negative reciprocal
      { id: "D", text: "$\\frac{3}{2}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Perpendicular from Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Multiply by $12$: $3x + 2y = 36$, so $y = -\\frac{3}{2}x + 18$. Line $\\ell$ has slope $-\\frac{3}{2}$, and line $m$ has slope $\\frac{2}{3}$.\n\n**The Full Solution:**\nStep 1: Clear the fractions by multiplying both sides by $12$: $3x + 2y = 36$.\nStep 2: Solve for $y$: $2y = -3x + 36$, so $y = -\\frac{3}{2}x + 18$. The slope of line $\\ell$ is $-\\frac{3}{2}$.\nStep 3: A perpendicular line has the negative reciprocal slope: $\\frac{2}{3}$. Check: $\\left(-\\frac{3}{2}\\right)\\left(\\frac{2}{3}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{3}{2}$): is the slope of line $\\ell$ itself, not of a line perpendicular to it.\n* Choice B ($-\\frac{2}{3}$): flips the fraction but keeps the negative sign; the product $\\left(-\\frac{3}{2}\\right)\\left(-\\frac{2}{3}\\right) = 1$, not $-1$.\n* Choice D ($\\frac{3}{2}$): divides the coefficients in the wrong order, $-\\frac{1/6}{1/4} = -\\frac{2}{3}$, for the slope of $\\ell$, then takes its negative reciprocal.\n\n**Test Day Takeaway:** With fraction coefficients, clear the fractions first and then solve for $y$; for $Ax + By = C$ the slope is $-\\frac{A}{B}$, never $-\\frac{B}{A}$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "perpendicular-line-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-039",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "hard",
    type: "fill-in",
    question: "$5x + 2y = c$\nIn the given equation, $c$ is a constant. In the $xy$-plane, line $p$ is perpendicular to the graph of the given equation. What is the slope of line $p$?",
    correctAnswer: "2/5",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $\\frac{2}{5}$.** Equivalent answers such as $0.4$ are also correct.\n\n**The Fast Way (~15s):** Solving for $y$ gives $y = -\\frac{5}{2}x + \\frac{c}{2}$, so the given line has slope $-\\frac{5}{2}$ for every value of $c$, and line $p$ has slope $\\frac{2}{5}$.\n\n**The Full Solution:**\nStep 1: Solve $5x + 2y = c$ for $y$: $2y = -5x + c$, so $y = -\\frac{5}{2}x + \\frac{c}{2}$.\nStep 2: The slope of the given line is $-\\frac{5}{2}$; the constant $c$ changes only the $y$-intercept.\nStep 3: A perpendicular line has the negative reciprocal slope: $\\frac{2}{5}$. Check: $\\left(-\\frac{5}{2}\\right)\\left(\\frac{2}{5}\\right) = -1$ ✓\n\n**Common Mistakes:**\n* $-\\frac{5}{2}$: gives the slope of the given line instead of the perpendicular slope.\n* $-\\frac{2}{5}$: flips the fraction but does not change the sign.\n* $\\frac{5}{2}$: reads the slope of $5x + 2y = c$ as $\\frac{5}{2}$, dropping the negative sign, and then changes only the sign.\n\n**Test Day Takeaway:** An unknown constant on the right side of $Ax + By = c$ never changes the slope, $-\\frac{A}{B}$, so the perpendicular slope is $\\frac{B}{A}$.",
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
    question: "$y = 4x + 7$\n$y = 4x - 2$\nHow many solutions does the given system of equations have?",
    choices: [
      { id: "A", text: "Zero" },
      // distractor: assumes any two different lines must cross somewhere
      { id: "B", text: "Exactly one" },
      // distractor: treats two lines as able to cross at two separate points
      { id: "C", text: "Exactly two" },
      // distractor: reads the equal slopes as meaning the two graphs are the same line
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Classify System (Parallel Lines)**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Both lines have slope $4$ but different $y$-intercepts, $7$ and $-2$, so they are parallel and never meet: zero solutions.\n\n**The Full Solution:**\nStep 1: Both equations are in slope-intercept form. The slopes are both $4$.\nStep 2: The $y$-intercepts are $7$ and $-2$, which are different, so the graphs are two distinct parallel lines.\nStep 3: Parallel lines never intersect, so the system has no solution. Check: setting $4x + 7 = 4x - 2$ gives $7 = -2$, which is never true ✓\n\n**Why the wrong answers are tempting:**\n* Choice B (Exactly one): assumes any two different lines must cross somewhere, which fails for parallel lines.\n* Choice C (Exactly two): two different lines can meet at most once, so two solutions is impossible.\n* Choice D (Infinitely many): reads the equal slopes as meaning the lines are the same, but the $y$-intercepts differ.\n\n**Test Day Takeaway:** Same slope and different $y$-intercepts means parallel lines and no solution; same slope and same $y$-intercept means the same line and infinitely many solutions.",
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
    question: "The graph of line $n$ is shown in the $xy$-plane. Line $m$ is defined by $2x + y = 9$. At how many points do line $m$ and line $n$ intersect?",
    diagram: { type: "linearGraph", params: { slope: 3, yIntercept: -4, xRange: [-2, 6], yRange: [-10, 14], xTickInterval: 2, yTickInterval: 4, gridInterval: 2, showPoints: [[0, -4], [2, 2]], label: "n" } },
    choices: [
      // distractor: reads slopes of opposite sign as meaning the lines never meet
      { id: "A", text: "None" },
      { id: "B", text: "Exactly one" },
      // distractor: treats two straight lines as able to cross twice
      { id: "C", text: "Exactly two" },
      // distractor: concludes the two lines coincide
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Classify System (Different Slopes)**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Line $n$ rises $3$ per unit and line $m$ has slope $-2$; different slopes means the lines cross exactly once.\n\n**The Full Solution:**\nStep 1: Read line $n$ from the graph: it passes through $(0, -4)$ and $(2, 2)$, so its slope is $\\frac{2 - (-4)}{2 - 0} = 3$.\nStep 2: Rewrite line $m$ as $y = -2x + 9$, so its slope is $-2$.\nStep 3: Because $3 \\ne -2$, the lines are not parallel and meet at exactly one point. Check: $3x - 4 = -2x + 9$ gives $5x = 13$, a single value of $x$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (None): reads slopes of opposite sign as meaning the lines head away from each other and never meet.\n* Choice C (Exactly two): treats two straight lines as able to cross more than once.\n* Choice D (Infinitely many): would require the two lines to be the same line, which the different slopes rule out.\n\n**Test Day Takeaway:** Compare slopes first: different slopes always give exactly one intersection, whatever the intercepts are.",
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
    question: "$12x - 30y = 42$\n$2x + cy = d$\nIn the given system of equations, $c$ and $d$ are constants. The system has infinitely many solutions. What is the value of $c + d$?",
    choices: [
      // distractor: scales the constant by the wrong sign, keeping c = -5 but taking d = -7
      { id: "A", text: "$-12$" },
      { id: "B", text: "$2$" },
      // distractor: drops the negative on c, using c = 5 and d = 7
      { id: "C", text: "$12$" },
      // distractor: divides the x- and y-coefficients by 6 but not the constant, using c = -5 and d = 42
      { id: "D", text: "$37$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Parameter for Identical Equations**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Dividing $12x - 30y = 42$ by $6$ gives $2x - 5y = 7$, so $c = -5$, $d = 7$, and $c + d = 2$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has infinitely many solutions when one equation is a nonzero multiple of the other.\nStep 2: The second equation starts with $2x$, so divide the first equation by $6$: $12x - 30y = 42$ becomes $2x - 5y = 7$.\nStep 3: Matching term by term gives $c = -5$ and $d = 7$, so $c + d = 2$. Check: $6(2x - 5y) = 12x - 30y$ and $6(7) = 42$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): keeps $c = -5$ but gives the constant the wrong sign, $d = -7$, so $c + d = -12$.\n* Choice C ($12$): drops the negative sign on the $y$-coefficient, using $c = 5$ and $d = 7$.\n* Choice D ($37$): divides the $x$- and $y$-coefficients by $6$ but not the constant, using $c = -5$ and $d = 42$.\n\n**Test Day Takeaway:** Scale the whole equation by the factor that matches the $x$-coefficients, then read the other two terms off directly.",
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
    question: "$ax + 4y = 7$\n$6x - 8y = c$\nIn the given system of equations, $a$ and $c$ are constants. For which of the following values of $a$ and $c$ does the system have no solution?",
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
    question: "A school orchestra bought $v$ violin strings for $\\$9$ each and $c$ cello strings for $\\$14$ each. It bought $26$ strings for a total of $\\$289$. Which system of equations represents this situation?",
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
    explanation: "**SAT Pattern: System Setup (Count + Cost)**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Count equation: $v + c = 26$. Cost equation: $9v + 14c = 289$.\n\n**The Full Solution:**\nStep 1: The number of strings is the sum of the two counts: $v + c = 26$.\nStep 2: The cost is price times count for each type, added: $9v + 14c = 289$.\nStep 3: Check that the system has a sensible solution: from $v = 26 - c$, $9(26 - c) + 14c = 289 \\Rightarrow 234 + 5c = 289 \\Rightarrow c = 11$ and $v = 15$; $15 + 11 = 26$ and $135 + 154 = 289$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($v + c = 289$ and $9v + 14c = 26$): swaps the two totals, putting the dollar amount with the counts.\n* Choice C ($v + c = 26$ and $14v + 9c = 289$): pairs each price with the wrong string type.\n* Choice D ($v - c = 26$ and $9v + 14c = 289$): subtracts the counts, but the $26$ strings are all the strings together, so the counts are added.\n\n**Test Day Takeaway:** Count-and-cost stories always produce one plain-sum equation for the counts and one price-weighted equation for the money; match each total to its own equation.",
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
    question: "An aquarium sold $a$ adult tickets for $\\$14$ each and $c$ child tickets for $\\$9$ each. It sold $3$ times as many child tickets as adult tickets, for a total of $\\$2{,}460$. Which system of equations represents this situation?",
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
    explanation: "**SAT Pattern: Ticket Sales System**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** \"$3$ times as many child tickets as adult tickets\" is $c = 3a$. Revenue: $14a + 9c = 2{,}460$.\n\n**The Full Solution:**\nStep 1: Translate the comparison: the child count equals $3$ times the adult count, so $c = 3a$ (not $a = 3c$).\nStep 2: Revenue is price times count for each type: $14a + 9c = 2{,}460$.\nStep 3: Check by solving: substitute $c = 3a$ to get $14a + 27a = 41a = 2{,}460$, so $a = 60$ and $c = 180$; indeed $180 = 3(60)$ and $840 + 1{,}620 = 2{,}460$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($a = 3c$ and $14a + 9c = 2{,}460$): reverses the ratio, making adult tickets triple the child tickets.\n* Choice B ($c = 3a$ and $9a + 14c = 2{,}460$): attaches the child price to the adult count and vice versa.\n* Choice C ($a + c = 3$ and $14a + 9c = 2{,}460$): turns \"3 times\" into a total of $3$ tickets, which cannot produce $\\$2{,}460$.\n\n**Test Day Takeaway:** \"$X$ was $k$ times $Y$\" translates to $X = kY$: the multiplier attaches to the quantity being compared TO, and the larger quantity stands alone.",
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
    question: "A $60\\%$ gold alloy and a $90\\%$ gold alloy are melted together to make $45$ grams of an $80\\%$ gold alloy. If $x$ grams of the $60\\%$ alloy and $y$ grams of the $90\\%$ alloy are used, which system of equations represents this situation?",
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
    question: "A café bought $x$ kilograms of coffee beans that cost $\\$18$ per kilogram and $y$ kilograms of coffee beans that cost $\\$12$ per kilogram. It bought $40$ kilograms of beans for a total of $\\$630$. Which system of equations represents this situation?",
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
    explanation: "**SAT Pattern: Two-Variable Word Problem (Weight + Cost)**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Mass: $x + y = 40$. Cost: $18x + 12y = 630$.\n\n**The Full Solution:**\nStep 1: The total mass is the sum of the two masses: $x + y = 40$.\nStep 2: Cost is price per kilogram times kilograms for each type, added: $18x + 12y = 630$.\nStep 3: Check by solving: $18x + 12(40 - x) = 630 \\Rightarrow 6x + 480 = 630 \\Rightarrow x = 25$, $y = 15$; $25 + 15 = 40$ and $450 + 180 = 630$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x + y = 40$ and $12x + 18y = 630$): pairs each price with the wrong kind of bean.\n* Choice B ($x + y = 630$ and $18x + 12y = 40$): swaps the kilogram total with the dollar total.\n* Choice C ($x + y = 40$ and $\\frac{x}{18} + \\frac{y}{12} = 630$): divides mass by price; dollars are price TIMES mass.\n\n**Test Day Takeaway:** Units guide the setup: kilograms add to kilograms, and (dollars per kilogram) times kilograms adds to dollars.",
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
    question: "$y = 3x - 5$\n$4x + 2y = 40$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x$?",
    choices: [
      // distractor: distributes the 2 with the wrong sign, writing 10x + 10 = 40
      { id: "A", text: "$3$" },
      // distractor: multiplies only 3x by 2, writing 4x + 6x - 5 = 40
      { id: "B", text: "$4.5$" },
      { id: "C", text: "$5$" },
      // distractor: gives the value of y instead of x
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Substitution Method**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Substitute $3x - 5$ for $y$: $4x + 2(3x - 5) = 40$, so $10x - 10 = 40$ and $x = 5$.\n\n**The Full Solution:**\nStep 1: The first equation gives $y$ in terms of $x$, so substitute $3x - 5$ for $y$ in the second equation: $4x + 2(3x - 5) = 40$.\nStep 2: Distribute the $2$ and combine like terms: $4x + 6x - 10 = 40$, so $10x - 10 = 40$.\nStep 3: Add $10$ and divide by $10$: $x = 5$. Check: $y = 3(5) - 5 = 10$, and $4(5) + 2(10) = 20 + 20 = 40$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): distributes the $2$ with the wrong sign, writing $10x + 10 = 40$, so $x = 3$.\n* Choice B ($4.5$): multiplies only $3x$ by $2$, writing $4x + 6x - 5 = 40$, so $10x = 45$.\n* Choice D ($10$): is the value of $y$, not $x$.\n\n**Test Day Takeaway:** When one equation is already solved for a variable, substitute the whole expression in parentheses and distribute to every term.",
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
    question: "The table shows the depth of water, in centimeters, in two tanks at three times. The depth in each tank changes at a constant rate. After how many hours will the two tanks have the same depth?",
    questionTable: { headers: ["Time (hours)", "Tank A depth (cm)", "Tank B depth (cm)"], rows: [["0", "6", "30"], ["1", "10", "28"], ["2", "14", "26"]] },
    choices: [
      // distractor: uses the hour-1 gap 28 - 10 = 18 instead of the 24 cm starting gap: 18 / 6 = 3
      { id: "A", text: "$3$" },
      { id: "B", text: "$4$" },
      // distractor: divides the 24 cm gap by Tank A's rate of 4 alone, ignoring that Tank B is falling
      { id: "C", text: "$6$" },
      // distractor: divides the 24 cm gap by Tank B's rate of 2 alone, ignoring that Tank A is rising
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: System Equal to y on Both Sides**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Tank A gains $4$ cm per hour and Tank B loses $2$ cm per hour, so the $24$ cm gap closes at $6$ cm per hour: $24 \\div 6 = 4$ hours.\n\n**The Full Solution:**\nStep 1: Write each depth as a function of $t$, the time in hours. Tank A rises from $6$ to $10$ to $14$, so $y = 6 + 4t$. Tank B falls from $30$ to $28$ to $26$, so $y = 30 - 2t$.\nStep 2: Both expressions equal the same depth $y$, so set them equal: $6 + 4t = 30 - 2t$.\nStep 3: Add $2t$ to both sides and subtract $6$: $6t = 24$, so $t = 4$. Check: at $t = 4$, Tank A is $6 + 4(4) = 22$ cm and Tank B is $30 - 2(4) = 22$ cm. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): uses the hour-$1$ gap $28 - 10 = 18$ instead of the starting gap, giving $18 \\div 6 = 3$.\n* Choice C ($6$): divides the $24$ cm gap by Tank A's rate of $4$ alone, as if Tank B held steady.\n* Choice D ($12$): divides the $24$ cm gap by Tank B's rate of $2$ alone, as if Tank A held steady.\n\n**Test Day Takeaway:** When two quantities are each given as $y = $ an expression in the same variable, set the expressions equal; the gap closes at the SUM of the two rates when one rises and the other falls.",
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
    question: "$x = 4y - 3$\n$2x + 5y = 33$\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
    correctAnswer: "3",
    explanation: "**SAT Pattern: Substitution (x in terms of y)**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~20s):** Substitute $4y - 3$ for $x$: $2(4y - 3) + 5y = 33$, so $13y = 39$ and $y = 3$.\n\n**The Full Solution:**\nStep 1: The first equation gives $x$ in terms of $y$, so substitute $4y - 3$ for $x$ in the second equation: $2(4y - 3) + 5y = 33$.\nStep 2: Distribute and combine like terms: $8y - 6 + 5y = 33$, so $13y - 6 = 33$ and $13y = 39$.\nStep 3: Divide by $13$: $y = 3$. Check: $x = 4(3) - 3 = 9$, and $2(9) + 5(3) = 18 + 15 = 33$ ✓\n\n**Common Mistakes:**\n* $9$: the value of $x$, not $y$.\n* $4$: substitutes without the factor $2$, solving $4y - 3 + 5y = 33$.\n* $\\frac{36}{13}$: multiplies only $4y$ by $2$, solving $8y - 3 + 5y = 33$.\n\n**Test Day Takeaway:** Substitute the whole expression in parentheses, distribute to both of its terms, and answer for the variable the question names.",
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
    question: "A pool sells adult passes for $\\$6$ each and child passes for $\\$4$ each. A group bought $11$ passes for a total of $\\$54$. How many adult passes did the group buy?",
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
    question: "$y = \\frac{3}{4}x - 2$\n$5x - 8y = 4$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x$?",
    choices: [
      // distractor: distributes -8 over -2 as -16 instead of +16
      { id: "A", text: "$-20$" },
      // distractor: distributes the -8 to the x-term only, writing -8(3/4 x - 2) as -6x - 2
      { id: "B", text: "$-6$" },
      // distractor: gives the value of y instead of x
      { id: "C", text: "$7$" },
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Substitution with Fraction**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Substituting gives $5x - 8\\left(\\frac{3}{4}x - 2\\right) = 5x - 6x + 16 = 4$, so $-x = -12$ and $x = 12$.\n\n**The Full Solution:**\nStep 1: Substitute $\\frac{3}{4}x - 2$ for $y$ in the second equation: $5x - 8\\left(\\frac{3}{4}x - 2\\right) = 4$.\nStep 2: Distribute the $-8$ to both terms: $-8 \\cdot \\frac{3}{4}x = -6x$ and $-8 \\cdot (-2) = 16$, so $5x - 6x + 16 = 4$, or $-x + 16 = 4$.\nStep 3: Subtract $16$ and divide by $-1$: $x = 12$. Check: $y = \\frac{3}{4}(12) - 2 = 7$, and $5(12) - 8(7) = 60 - 56 = 4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-20$): multiplies $-8$ by $-2$ to get $-16$, solving $-x - 16 = 4$.\n* Choice B ($-6$): distributes the $-8$ to the $x$-term only, writing $-6x - 2$, and solves $5x - 6x - 2 = 4$.\n* Choice C ($7$): is the value of $y$, not $x$.\n\n**Test Day Takeaway:** The fraction cancels cleanly once it is multiplied by the coefficient in front of $y$; the sign of that coefficient must reach the constant term too.",
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
    question: "$x = 5y - 8$\n$2x + 7y = 69$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x + y$?",
    correctAnswer: "22",
    explanation: "**SAT Pattern: Substitution then Sum**\n\n**The correct answer is $22$.**\n\n**The Fast Way (~40s):** Substituting gives $17y = 85$, so $y = 5$, $x = 17$, and $x + y = 22$.\n\n**The Full Solution:**\nStep 1: Substitute $5y - 8$ for $x$ in the second equation: $2(5y - 8) + 7y = 69$.\nStep 2: Distribute and combine like terms: $10y - 16 + 7y = 69$, so $17y = 85$ and $y = 5$.\nStep 3: Back-substitute: $x = 5(5) - 8 = 17$, so $x + y = 17 + 5 = 22$. Check: $2(17) + 7(5) = 34 + 35 = 69$ ✓\n\n**Common Mistakes:**\n* $5$: stops at $y$ without finding $x$.\n* $17$: reports $x$ alone instead of the sum.\n* $12$: computes $x - y$ instead of $x + y$.\n\n**Test Day Takeaway:** Solve for one variable, go back for the other, and then reread the question: it asks for a combination, not a single value.",
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
    question: "$4x - 3y = 17$\n$2x + 3y = 13$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x$?",
    choices: [
      // distractor: adds the left sides but subtracts the right sides, getting 6x = 4
      { id: "A", text: "$\\frac{2}{3}$" },
      // distractor: gives the value of y instead of x
      { id: "B", text: "$1$" },
      { id: "C", text: "$5$" },
      // distractor: reports the sum 6x = 30 without dividing by 6
      { id: "D", text: "$30$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Elimination by Addition**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The $y$-terms are opposites, so adding the equations gives $6x = 30$ and $x = 5$.\n\n**The Full Solution:**\nStep 1: The $y$-coefficients, $-3$ and $3$, are opposites, so adding the two equations eliminates $y$.\nStep 2: Add the left sides and the right sides: $(4x - 3y) + (2x + 3y) = 17 + 13$, which gives $6x = 30$.\nStep 3: Divide by $6$: $x = 5$. Check: $2(5) + 3y = 13$ gives $y = 1$, and $4(5) - 3(1) = 20 - 3 = 17$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{2}{3}$): adds the left sides but subtracts the right sides, writing $6x = 17 - 13 = 4$.\n* Choice B ($1$): is the value of $y$, not $x$.\n* Choice D ($30$): stops at $6x = 30$ and reports the right side without dividing by $6$.\n\n**Test Day Takeaway:** When a variable's coefficients are opposites, add the equations; whatever you do to the left sides, do the same to the right sides.",
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
    question: "$x + 4y = 31$\n$x - y = 6$\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Solving a System by Elimination**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** Subtracting the second equation from the first eliminates $x$: $5y = 25$, so $y = 5$.\n\n**The Full Solution:**\nStep 1: Both equations have the term $x$, so subtracting the second equation from the first eliminates $x$.\nStep 2: $(x + 4y) - (x - y) = 31 - 6$, which gives $4y + y = 25$, or $5y = 25$.\nStep 3: Divide by $5$: $y = 5$. Check: $x = 6 + 5 = 11$, and $11 + 4(5) = 31$ ✓\n\n**Common Mistakes:**\n* $11$: the value of $x$, not $y$.\n* $\\frac{25}{3}$: subtracts $-y$ as if it were $+y$, getting $3y = 25$.\n* $\\frac{37}{3}$: adds the equations instead, getting $2x + 3y = 37$, and then drops the $x$-term.\n\n**Test Day Takeaway:** Subtracting an equation subtracts every term, so $4y - (-y)$ is $5y$; watch the sign on the variable you keep.",
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
    question: "The table shows the number of small boxes and large boxes in two shipments and the total weight of each shipment. All small boxes have the same weight, and all large boxes have the same weight. What is the weight, in kilograms, of one large box?",
    questionTable: { headers: ["Shipment", "Small boxes", "Large boxes", "Total weight (kg)"], rows: [["1", "4", "2", "44"], ["2", "4", "6", "92"]] },
    choices: [
      // distractor: reports the weight of one small box
      { id: "A", text: "$5$" },
      // distractor: divides the 48-kilogram gap by the 6 large boxes in shipment 2 rather than by the 4 extra ones
      { id: "B", text: "$8$" },
      { id: "C", text: "$12$" },
      // distractor: reports the difference between the two shipment totals without dividing
      { id: "D", text: "$48$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Elimination by Subtraction**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Both shipments have $4$ small boxes, so the $48$-kilogram difference comes from $4$ extra large boxes: $48 \\div 4 = 12$.\n\n**The Full Solution:**\nStep 1: Let $s$ be the weight of a small box and $L$ the weight of a large box, in kilograms: $4s + 2L = 44$ and $4s + 6L = 92$.\nStep 2: The $4s$ terms match, so subtracting the first equation from the second gives $4L = 48$.\nStep 3: Then $L = 12$. Check: $4s + 24 = 44$ gives $s = 5$, and $4(5) + 6(12) = 20 + 72 = 92$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): is the weight of one small box, not one large box.\n* Choice B ($8$): divides the $48$-kilogram difference by the $6$ large boxes in shipment $2$ instead of by the $4$ extra ones.\n* Choice D ($48$): is the difference between the two shipment totals, before dividing by $4$.\n\n**Test Day Takeaway:** When one column of a table repeats, subtract those two rows; the repeated quantity drops out without any scaling.",
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
    question: "$3x + 5y = 41$\n$3x + ky = -8$\nIn the given system of equations, $k$ is a constant. If the solution to the system is $(x, 7)$, what is the value of $k$?",
    choices: [
      // distractor: divides -14 by 2 instead of by 7
      { id: "A", text: "$-7$" },
      { id: "B", text: "$-2$" },
      // distractor: drops the negative sign after dividing
      { id: "C", text: "$2$" },
      // distractor: reports the given y-value instead of k
      { id: "D", text: "$7$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Elimination (Subtract to Cancel x)**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Subtracting the equations cancels $3x$: $(5 - k)(7) = 41 - (-8) = 49$, so $5 - k = 7$ and $k = -2$.\n\n**The Full Solution:**\nStep 1: Both equations contain $3x$, so subtracting the second equation from the first cancels $x$: $(5 - k)y = 41 - (-8) = 49$.\nStep 2: Substitute $y = 7$: $7(5 - k) = 49$, so $5 - k = 7$.\nStep 3: Then $k = -2$. Check: from the first equation $3x + 35 = 41$, so $x = 2$, and $3(2) + (-2)(7) = 6 - 14 = -8$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): finds $7k = -14$ but divides $-14$ by $2$ instead of by $7$.\n* Choice C ($2$): drops the negative sign after dividing $-14$ by $7$.\n* Choice D ($7$): reports the given value of $y$ rather than the constant $k$.\n\n**Test Day Takeaway:** Matching $x$-coefficients mean the two equations differ only in the $y$-term and the constant, so subtracting them removes $x$ without solving for it.",
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
    question: "$7x - 3y = 23$\n$5x + 6y = 49$\nIf $(x, y)$ is the solution to the given system of equations, what is the value of $2x + y$?",
    choices: [
      // distractor: computes x + y instead of 2x + y
      { id: "A", text: "$9$" },
      // distractor: computes x + 2y, doubling the wrong variable
      { id: "B", text: "$13$" },
      { id: "C", text: "$14$" },
      // distractor: computes 2x + 2y
      { id: "D", text: "$18$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Elimination with Scaling**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** Doubling the first equation gives $14x - 6y = 46$; adding the second gives $19x = 95$, so $x = 5$, $y = 4$, and $2x + y = 14$.\n\n**The Full Solution:**\nStep 1: Scale the first equation by $2$ so the $y$-terms become opposites: $14x - 6y = 46$, alongside $5x + 6y = 49$.\nStep 2: Add them: $19x = 95$, so $x = 5$.\nStep 3: Substitute back: $7(5) - 3y = 23$ gives $3y = 12$ and $y = 4$, so $2x + y = 2(5) + 4 = 14$. Check: $5(5) + 6(4) = 25 + 24 = 49$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): computes $x + y$ instead of $2x + y$.\n* Choice B ($13$): computes $x + 2y$, doubling the wrong variable.\n* Choice D ($18$): doubles both values, computing $2x + 2y$.\n\n**Test Day Takeaway:** Scale one equation until a pair of coefficients are opposites, then read the question again — it often asks for a combination, not a single variable.",
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
    question: "A library bought $50$ books. Each paperback cost $\\$6$, each hardcover cost $\\$11$, and the books cost a total of $\\$370$. How many more paperbacks than hardcovers did the library buy?",
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
    explanation: "**SAT Pattern: System Word Problem (Mixed Prices)**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** If all $50$ were paperbacks the cost would be $\\$300$; the extra $\\$70$ comes from hardcovers at $\\$5$ more each, so there are $14$ hardcovers and $36$ paperbacks. The difference is $36 - 14 = 22$.\n\n**The Full Solution:**\nStep 1: Let $p$ and $h$ be the numbers of paperbacks and hardcovers: $p + h = 50$ and $6p + 11h = 370$.\nStep 2: Multiply the first equation by $6$ and subtract from the second: $(6p + 11h) - (6p + 6h) = 370 - 300$, so $5h = 70$ and $h = 14$. Then $p = 36$.\nStep 3: The question asks for the difference: $p - h = 36 - 14 = 22$. Check: $6(36) + 11(14) = 216 + 154 = 370$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): is the number of hardcovers; the question asks how many MORE paperbacks there were.\n* Choice C ($36$): is the number of paperbacks, again not the difference.\n* Choice D ($50$): is the total, which was given.\n\n**Test Day Takeaway:** Solve the system, then reread the question: \"how many more\" is a difference of the two unknowns, and both individual counts appear as traps.",
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
    question: "The graphs of two linear equations are shown in the $xy$-plane. What is the solution $(x, y)$ to the system of these two equations?",
    diagram: { type: "twoLineGraph", params: { intersection: { x: 4, y: 10 }, slope1: 0.5, slope2: 1.5, xRange: [-2, 10], yRange: [-2, 16], showIntersection: false, xTickInterval: 2, yTickInterval: 2, gridInterval: 1 } },
    choices: [
      // distractor: names a point on the steeper line only, not a point on both lines
      { id: "A", text: "$(2, 7)$" },
      { id: "B", text: "$(4, 10)$" },
      // distractor: names a point on the less steep line only, not a point on both lines
      { id: "C", text: "$(8, 12)$" },
      // distractor: reverses the coordinates of the intersection point
      { id: "D", text: "$(10, 4)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Intersection as Solution**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The solution to a system is the point on both graphs, which is the intersection point $(4, 10)$.\n\n**The Full Solution:**\nStep 1: A solution $(x, y)$ must satisfy both equations, so it must lie on both lines.\nStep 2: The lines intersect at one point; reading the grid, it is at $x = 4$ and $y = 10$.\nStep 3: Check both lines at $x = 4$: the less steep line rises $1$ unit for every $2$ units from $(0, 8)$, reaching $8 + 2 = 10$; the steeper line rises $3$ units for every $2$ units from $(0, 4)$, reaching $4 + 6 = 10$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(2, 7)$): lies on the steeper line only; the less steep line has $y = 9$ at $x = 2$.\n* Choice C ($(8, 12)$): lies on the less steep line only; the steeper line has $y = 16$ at $x = 8$.\n* Choice D ($(10, 4)$): reverses the coordinates of the intersection point.\n\n**Test Day Takeaway:** The solution to a graphed system is the intersection point, written as $(x, y)$ in that order.",
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
    question: "$4x - 6y = 9$\n$-6x + 9y = 5$\nHow many solutions does the given system of equations have?",
    choices: [
      { id: "A", text: "Zero" },
      // distractor: assumes the opposite signs on the coefficients mean the slopes differ
      { id: "B", text: "Exactly one" },
      // distractor: forgets that two distinct lines can meet at most once
      { id: "C", text: "Exactly two" },
      // distractor: sees that the x- and y-coefficients are proportional but never compares the constants
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Classify System (Parallel Lines)**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Multiplying the first equation by $-\\frac{3}{2}$ gives $-6x + 9y = -\\frac{27}{2}$. The left side matches the second equation but the constant does not, so the lines are parallel and distinct: no solution.\n\n**The Full Solution:**\nStep 1: Write each equation in slope-intercept form: $4x - 6y = 9$ becomes $y = \\frac{2}{3}x - \\frac{3}{2}$, and $-6x + 9y = 5$ becomes $y = \\frac{2}{3}x + \\frac{5}{9}$.\nStep 2: Both lines have slope $\\frac{2}{3}$, so they are either the same line or parallel.\nStep 3: The $y$-intercepts differ, $-\\frac{3}{2} \\ne \\frac{5}{9}$, so the lines are parallel and never meet. Check: scaling the first equation by $-\\frac{3}{2}$ reproduces $-6x + 9y$ but gives the constant $-\\frac{27}{2}$, not $5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B (exactly one): assumes the opposite signs on the coefficients make the slopes different; both slopes are $\\frac{2}{3}$.\n* Choice C (exactly two): two different lines can cross at most once, so a linear system never has exactly two solutions.\n* Choice D (infinitely many): notices that $-6$ and $9$ are $-\\frac{3}{2}$ times $4$ and $-6$ but skips the constants, which are not in that ratio.\n\n**Test Day Takeaway:** For $Ax + By = C$ and $Dx + Ey = F$, compare $\\frac{A}{D}$, $\\frac{B}{E}$, and $\\frac{C}{F}$: matching coefficient ratios with a different constant ratio means zero solutions.",
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
    question: "The graph of the linear function $f$ is shown in the $xy$-plane. The function $g$ is defined by $g(x) = -2x + 13$. The graphs of $y = f(x)$ and $y = g(x)$ intersect at the point $(a, b)$. What is the value of $b$?",
    diagram: { type: "linearGraph", params: { slope: 1, yIntercept: 4, xRange: [0, 10], yRange: [0, 16], xTickInterval: 2, yTickInterval: 4, gridInterval: 2, showPoints: [[0, 4], [4, 8]], label: "f" } },
    choices: [
      // distractor: moves -2x to the left without changing its sign, solving -x = 9 to get x = -9 and y = -5
      { id: "A", text: "$-5$" },
      // distractor: reports the x-coordinate a = 3 instead of the y-coordinate
      { id: "B", text: "$3$" },
      { id: "C", text: "$7$" },
      // distractor: forgets to divide by 3, taking x = 9 and then y = 9 + 4 = 13
      { id: "D", text: "$13$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Find Intersection by Setting Equal**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The graph passes through $(0, 4)$ and $(4, 8)$, so $f(x) = x + 4$. Setting $x + 4 = -2x + 13$ gives $x = 3$, and then $b = 3 + 4 = 7$.\n\n**The Full Solution:**\nStep 1: Read $f$ from the graph: it crosses the $y$-axis at $4$ and rises $4$ units over $4$ units, so its slope is $1$ and $f(x) = x + 4$.\nStep 2: At an intersection point the two functions have the same output, so set them equal: $x + 4 = -2x + 13$, which gives $3x = 9$ and $x = 3$.\nStep 3: Substitute into either function: $b = f(3) = 3 + 4 = 7$. Check: $g(3) = -2(3) + 13 = 7$ as well ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): moves $-2x$ to the left side without changing its sign, getting $-x = 9$, so $x = -9$ and $y = -9 + 4 = -5$. That point is on $f$ but not on $g$.\n* Choice B ($3$): stops at the $x$-coordinate. The question asks for $b$, the $y$-coordinate.\n* Choice D ($13$): reaches $3x = 9$ but uses $x = 9$, then computes $9 + 4 = 13$.\n\n**Test Day Takeaway:** An intersection point is where the two outputs are equal: set the expressions equal, solve for $x$, then substitute back to get the $y$-coordinate the question asks for.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "graphing-intersection",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-063",
    domain: "algebra",
    skills: ["tangent-lines", "discriminant-analysis"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The parabola shown is the graph of $y = x^{2} + 4x + 7$ in the $xy$-plane. The line $y = -2x + c$, where $c$ is a constant, and the parabola have exactly one point in common. What is the value of $c$?",
    diagram: { type: "quadraticVertex", params: { vertex: [-2, 3], a: 1, showPoints: [[-4, 7], [0, 7]], showVertex: true } },
    choices: [
      { id: "A", text: "$-2$" },
      // distractor: makes a sign error with c, writing x^2 + 6x + 7 + c = 0, whose discriminant 36 - 4(7 + c) = 0 gives c = 2
      { id: "B", text: "$2$" },
      // distractor: ignores the line's x-term and uses x^2 + 4x + 7 - c = 0, whose discriminant 16 - 4(7 - c) = 0 gives c = 3
      { id: "C", text: "$3$" },
      // distractor: gives the y-intercept of the parabola, 7
      { id: "D", text: "$7$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Setting $x^{2} + 4x + 7 = -2x + c$ gives $x^{2} + 6x + (7 - c) = 0$. One point in common means the discriminant is $0$: $36 - 4(7 - c) = 0$, so $c = -2$.\n\n**The Full Solution:**\nStep 1: A common point satisfies both equations, so $x^{2} + 4x + 7 = -2x + c$, or $x^{2} + 6x + (7 - c) = 0$.\nStep 2: The line and the parabola meet exactly once when this quadratic has exactly one real solution, which happens when its discriminant is $0$: $6^{2} - 4(1)(7 - c) = 0$.\nStep 3: Then $36 - 28 + 4c = 0$, so $8 + 4c = 0$ and $c = -2$. Check: with $c = -2$, the equation is $x^{2} + 6x + 9 = (x + 3)^{2} = 0$, so $x = -3$ only, and both equations give $y = 4$ at $x = -3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): writes the constant term as $7 + c$, so $36 - 4(7 + c) = 0$ gives $c = 2$.\n* Choice C ($3$): leaves out the line's $-2x$ and uses $x^{2} + 4x + 7 - c = 0$, whose discriminant $16 - 4(7 - c) = 0$ gives $c = 3$.\n* Choice D ($7$): reads the $y$-intercept of the parabola from its equation, which does not make the line touch the parabola.\n\n**Test Day Takeaway:** A line meets a parabola exactly once when the combined quadratic has a discriminant of $0$; move every term to one side before finding $b^{2} - 4ac$.",
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
    question: "The graph of one equation in a system of two linear equations is shown in the $xy$-plane. The system has infinitely many solutions. Which equation could be the second equation in the system?",
    diagram: { type: "linearGraph", params: { slope: 2, yIntercept: 4, xRange: [-2, 10], yRange: [-4, 24], xTickInterval: 2, yTickInterval: 4, gridInterval: 2, showPoints: [[0, 4], [4, 12]] } },
    choices: [
      // distractor: keeps the slope but uses the wrong y-intercept, which gives a parallel line and no solution
      { id: "A", text: "$y = 2x - 4$" },
      // distractor: doubles the slope and intercept on the right side without doubling y
      { id: "B", text: "$y = 4x + 8$" },
      // distractor: doubles y and the x-term but not the constant, so the line has y-intercept 2
      { id: "C", text: "$2y = 4x + 4$" },
      { id: "D", text: "$3y = 6x + 12$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Identify Identical-Lines System**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The graph passes through $(0, 4)$ and $(4, 12)$, so it is $y = 2x + 4$. Dividing choice D by $3$ gives $y = 2x + 4$, the same line.\n\n**The Full Solution:**\nStep 1: Read the line from the graph: its $y$-intercept is $4$ and it rises $8$ units over $4$ units, so its slope is $2$ and its equation is $y = 2x + 4$.\nStep 2: A system has infinitely many solutions when both equations describe the same line, so the second equation must simplify to $y = 2x + 4$.\nStep 3: Divide each side of $3y = 6x + 12$ by $3$: $y = 2x + 4$. Check: the point $(4, 12)$ satisfies it, since $3(12) = 36$ and $6(4) + 12 = 36$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = 2x - 4$): has the right slope but a different $y$-intercept, so it is parallel to the graphed line and the system would have no solution.\n* Choice B ($y = 4x + 8$): doubles the right side without doubling $y$, which changes the slope to $4$.\n* Choice C ($2y = 4x + 4$): doubles $y$ and $2x$ but not the constant; it simplifies to $y = 2x + 2$.\n\n**Test Day Takeaway:** Two equations name the same line only when one is a constant multiple of the other, every term included. Simplify each choice to slope-intercept form and compare.",
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
    question: "$bx - 10y = 14$\n$9x - 15y = 21$\nIn the given system of equations, $b$ is a constant. For what value of $b$ does the system have infinitely many solutions?",
    choices: [
      // distractor: drops the negative sign when matching the y-coefficients, using a ratio of -2/3
      { id: "A", text: "$-6$" },
      { id: "B", text: "$6$" },
      // distractor: copies the x-coefficient of the second equation
      { id: "C", text: "$9$" },
      // distractor: inverts the scale factor, multiplying 9 by 15/10 instead of 10/15
      { id: "D", text: "$13.5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Parameter for Proportional Equations**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The first equation's $y$-coefficient and constant are $\\frac{2}{3}$ of the second's ($-10 = \\frac{2}{3}(-15)$ and $14 = \\frac{2}{3}(21)$), so $b = \\frac{2}{3}(9) = 6$.\n\n**The Full Solution:**\nStep 1: The system has infinitely many solutions only when the first equation is a constant multiple of the second.\nStep 2: Find the multiplier from the terms that are known: $\\frac{-10}{-15} = \\frac{2}{3}$ and $\\frac{14}{21} = \\frac{2}{3}$, so the multiplier is $\\frac{2}{3}$.\nStep 3: Apply it to the $x$-coefficient: $b = \\frac{2}{3}(9) = 6$. Check: $\\frac{2}{3}(9x - 15y) = 6x - 10y$ and $\\frac{2}{3}(21) = 14$, so the two equations are the same line ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): loses the sign when comparing $-10$ with $-15$, using a multiplier of $-\\frac{2}{3}$.\n* Choice C ($9$): makes the $x$-coefficients equal, but the $y$-coefficients $-10$ and $-15$ are not equal, so the equations would not match.\n* Choice D ($13.5$): uses the multiplier upside down, computing $\\frac{15}{10}(9) = 13.5$.\n\n**Test Day Takeaway:** For infinitely many solutions, find the scale factor from two coefficients you know, confirm it on the constant, then apply it to the unknown coefficient.",
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
    question: "$\\frac{3}{4}x - \\frac{1}{2}y = 5$\n$9x + cy = 60$\nIn the given system of equations, $c$ is a constant. If the system has infinitely many solutions, what is the value of $c$?",
    choices: [
      { id: "A", text: "$-6$" },
      // distractor: multiplies -1/2 by the x-coefficient 9 instead of by the scale factor 12
      { id: "B", text: "$-\\frac{9}{2}$" },
      // distractor: divides -1/2 by the scale factor 12 instead of multiplying
      { id: "C", text: "$-\\frac{1}{24}$" },
      // distractor: drops the negative sign on the y-coefficient
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Find c for Infinite Solutions**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The second equation must be $12$ times the first, since $\\frac{9}{3/4} = 12$ and $\\frac{60}{5} = 12$. So $c = 12\\left(-\\frac{1}{2}\\right) = -6$.\n\n**The Full Solution:**\nStep 1: For infinitely many solutions, the second equation must be a constant multiple of the first.\nStep 2: Find the multiplier: $9 \\div \\frac{3}{4} = 12$, and the constants agree, since $5 \\cdot 12 = 60$.\nStep 3: Apply it to the $y$-coefficient: $c = 12\\left(-\\frac{1}{2}\\right) = -6$. Check: $12\\left(\\frac{3}{4}x - \\frac{1}{2}y\\right) = 9x - 6y$ and $12(5) = 60$, so the equations match ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{9}{2}$): multiplies $-\\frac{1}{2}$ by $9$, the $x$-coefficient, instead of by the multiplier $12$.\n* Choice C ($-\\frac{1}{24}$): divides $-\\frac{1}{2}$ by $12$ instead of multiplying, scaling in the wrong direction.\n* Choice D ($6$): finds the right size but drops the negative sign of $-\\frac{1}{2}y$.\n\n**Test Day Takeaway:** Fractions do not change the method: find the single multiplier that turns one equation into the other, check it on the constants, and carry every sign through.",
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
    question: "$4x - 10y = 26$\n$6x - 15y = k$\nIn the given system of equations, $k$ is a constant. If the system has infinitely many solutions, what is the value of $k$?",
    correctAnswer: "39",
    explanation: "**SAT Pattern: Find Constant for Identical Equations**\n\n**The correct answer is $39$.**\n\n**The Fast Way (~15s):** The second equation's coefficients are $\\frac{3}{2}$ times the first's ($6 = \\frac{3}{2} \\cdot 4$ and $-15 = \\frac{3}{2} \\cdot (-10)$), so $k = \\frac{3}{2}(26) = 39$.\n\n**The Full Solution:**\nStep 1: The system has infinitely many solutions when the second equation is a constant multiple of the first.\nStep 2: Find the multiplier from the $x$- and $y$-coefficients: $\\frac{6}{4} = \\frac{3}{2}$ and $\\frac{-15}{-10} = \\frac{3}{2}$.\nStep 3: Apply it to the constant: $k = \\frac{3}{2}(26) = 39$. Check: $\\frac{3}{2}(4x - 10y) = 6x - 15y$ and $\\frac{3}{2}(26) = 39$, so both equations describe the same line ✓\n\n**Common Mistakes:**\n* $26$: copies the constant from the first equation without scaling it.\n* $\\frac{52}{3}$: uses the multiplier upside down, computing $\\frac{2}{3}(26)$.\n\n**Test Day Takeaway:** Infinitely many solutions means one equation is a multiple of the other, constant included. Get the multiplier from the coefficients and apply it to the constant.",
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
    question: "The function $f$ is defined by $f(x) = 5x - 9$. What is the value of $f(4)$?",
    choices: [
      // distractor: subtracts before multiplying, computing 5(4 - 9)
      { id: "A", text: "$-25$" },
      // distractor: treats 4 as the output and solves 5x - 9 = 4
      { id: "B", text: "$\\frac{13}{5}$" },
      { id: "C", text: "$11$" },
      // distractor: adds 9 instead of subtracting it
      { id: "D", text: "$29$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Basic Function Notation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Substitute $4$ for $x$: $f(4) = 5(4) - 9 = 20 - 9 = 11$.\n\n**The Full Solution:**\nStep 1: The notation $f(4)$ means the output of $f$ when the input $x$ is $4$.\nStep 2: Substitute: $f(4) = 5(4) - 9$.\nStep 3: Multiply, then subtract: $20 - 9 = 11$. Check: $11 + 9 = 20 = 5 \\cdot 4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-25$): subtracts first, computing $5(4 - 9) = 5(-5)$, which ignores the order of operations.\n* Choice B ($\\frac{13}{5}$): treats $4$ as the output, solving $5x - 9 = 4$. That answers \"for what $x$ is $f(x) = 4$?\", a different question.\n* Choice D ($29$): adds $9$ instead of subtracting it.\n\n**Test Day Takeaway:** $f(\\text{number})$ asks for an output: replace every $x$ with the number, then simplify. Solving $f(x) = \\text{number}$ is the reverse question.",
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
    question: "$h(t) = 168 - 14t$\nThe function $h$ is defined by the given equation. For what value of $t$ does $h(t) = 0$?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: Find x-intercept (Zero of Function)**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~10s):** Set $168 - 14t = 0$, so $14t = 168$ and $t = 12$.\n\n**The Full Solution:**\nStep 1: Replace $h(t)$ with $0$: $168 - 14t = 0$.\nStep 2: Add $14t$ to both sides: $14t = 168$.\nStep 3: Divide by $14$: $t = 12$. Check: $h(12) = 168 - 14(12) = 168 - 168 = 0$ ✓\n\n**Common Mistakes:**\n* $-12$: moves $168$ across the equals sign without changing its sign, getting $14t = -168$.\n* $168$: reports $h(0)$, the output when $t = 0$, instead of the input that makes the output $0$.\n* $154$: subtracts $14$ from $168$ instead of dividing.\n\n**Test Day Takeaway:** \"For what value of $t$ does $h(t) = 0$?\" asks for an input. Set the expression equal to $0$ and solve; then substitute back to confirm.",
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
    question: "A shop's monthly profit $P$, in dollars, from repairing bicycles is given by $P(r) = 42r - 3{,}150$, where $r$ is the number of bicycles repaired. What is the least number of bicycles the shop must repair in a month to avoid a loss?",
    choices: [
      // distractor: reports the profit per bicycle instead of solving for r
      { id: "A", text: "$42$" },
      { id: "B", text: "$75$" },
      // distractor: assumes the profit must be strictly positive, but a profit of exactly 0 is not a loss
      { id: "C", text: "$76$" },
      // distractor: subtracts 42 from 3,150 instead of dividing
      { id: "D", text: "$3{,}108$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Break-Even from Profit Function**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Avoiding a loss means $P(r) \\ge 0$: $42r \\ge 3{,}150$, so $r \\ge 75$. The least number is $75$.\n\n**The Full Solution:**\nStep 1: A loss is a negative profit, so the shop avoids a loss when $42r - 3{,}150 \\ge 0$.\nStep 2: Add $3{,}150$ and divide by $42$: $r \\ge \\frac{3{,}150}{42} = 75$.\nStep 3: Since $75$ is a whole number, it is the least number of bicycles that works. Check: $P(75) = 42(75) - 3{,}150 = 0$, and $P(74) = -42 < 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($42$): reports the profit from each bicycle, the coefficient of $r$, instead of solving for $r$.\n* Choice C ($76$): requires a strictly positive profit, but $P(75) = 0$ is not a loss, so $75$ already works.\n* Choice D ($3{,}108$): subtracts $42$ from $3{,}150$ instead of dividing.\n\n**Test Day Takeaway:** Break-even is where profit equals $0$. Solve $P(r) = 0$, then read the wording (\"avoid a loss\" versus \"make a profit\") to decide whether the boundary value counts.",
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
    question: "$g(x) = 5x + k$\nIn the given function, $k$ is a constant, and $g(3) = 26$. If $g(a) = 51$, what is the value of $a$?",
    choices: [
      // distractor: reuses the input 3 from g(3) = 26
      { id: "A", text: "$3$" },
      { id: "B", text: "$8$" },
      // distractor: ignores k and solves 5a = 51
      { id: "C", text: "$10.2$" },
      // distractor: stops after finding k = 11
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** From $g(3) = 26$: $15 + k = 26$, so $k = 11$. Then $5a + 11 = 51$ gives $a = 8$.\n\n**The Full Solution:**\nStep 1: Use the known input-output pair to find $k$: $g(3) = 5(3) + k = 26$, so $k = 11$ and $g(x) = 5x + 11$.\nStep 2: Set the output equal to $51$: $5a + 11 = 51$.\nStep 3: Solve: $5a = 40$, so $a = 8$. Check: $g(8) = 5(8) + 11 = 51$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reuses the input from $g(3) = 26$, which gives the output $26$, not $51$.\n* Choice C ($10.2$): ignores the constant and solves $5a = 51$.\n* Choice D ($11$): finds $k = 11$ and stops before solving for $a$.\n\n**Test Day Takeaway:** When a function has an unknown constant, use the given input-output pair to pin the constant down first, then solve for the input the question asks about.",
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
    question: "For the linear function $f$, $f(4) - f(-2) = -18$. The function $g$ is defined by $g(x) = f(x) - 10$. What is the slope of the graph of $y = g(x)$ in the $xy$-plane?",
    choices: [
      // distractor: uses the change in output as the slope without dividing by the change in input
      { id: "A", text: "$-18$" },
      // distractor: divides by 4 - 2 = 2 instead of 4 - (-2) = 6
      { id: "B", text: "$-9$" },
      // distractor: subtracts 10 from the change in output before dividing, as if the shift changed the slope
      { id: "C", text: "$-\\frac{14}{3}$" },
      { id: "D", text: "$-3$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Slope from Function Difference**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The slope of $f$ is $\\frac{-18}{4 - (-2)} = -3$, and subtracting $10$ only moves the graph down, so the slope of $g$ is also $-3$.\n\n**The Full Solution:**\nStep 1: For a linear function, slope $= \\frac{f(4) - f(-2)}{4 - (-2)} = \\frac{-18}{6} = -3$.\nStep 2: Write $f(x) = -3x + b$ for some constant $b$. Then $g(x) = f(x) - 10 = -3x + (b - 10)$.\nStep 3: The coefficient of $x$ is still $-3$, so the slope of the graph of $y = g(x)$ is $-3$. Check: $g(4) - g(-2) = [f(4) - 10] - [f(-2) - 10] = -18$, and $\\frac{-18}{6} = -3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-18$): treats the change in output as the slope and never divides by the change in $x$.\n* Choice B ($-9$): computes the change in $x$ as $4 - 2 = 2$, dropping the negative sign on $-2$.\n* Choice C ($-\\frac{14}{3}$): subtracts $10$ from $-18$ before dividing, but a vertical shift changes every output by the same amount and leaves the slope unchanged.\n\n**Test Day Takeaway:** Adding or subtracting a constant from a function translates its graph up or down; the slope stays the same.",
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
    skills: ["function-evaluation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $g$ is defined by $g(x) = \\frac{2x}{x - 9}$. What is the value of $g(12)$?",
    choices: [
      // distractor: subtracts in the wrong order in the denominator, 9 - 12 = -3
      { id: "A", text: "$-8$" },
      // distractor: reports the value of the denominator, 12 - 9
      { id: "B", text: "$3$" },
      { id: "C", text: "$8$" },
      // distractor: reports the value of the numerator, 2(12), without dividing
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $g(12) = \\frac{2(12)}{12 - 9} = \\frac{24}{3} = 8$.\n\n**The Full Solution:**\nStep 1: Substitute $12$ for $x$ in the numerator: $2(12) = 24$.\nStep 2: Substitute $12$ for $x$ in the denominator: $12 - 9 = 3$.\nStep 3: Divide: $g(12) = \\frac{24}{3} = 8$. Check: $8 \\times 3 = 24$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): computes the denominator as $9 - 12 = -3$ instead of $12 - 9 = 3$.\n* Choice B ($3$): stops at the value of the denominator.\n* Choice D ($24$): evaluates the numerator and forgets to divide by the denominator.\n\n**Test Day Takeaway:** To evaluate a fraction-defined function, substitute the input into the numerator and the denominator separately, then divide.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "domain-restriction",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-074",
    domain: "algebra",
    skills: ["function-notation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$v(t) = \\frac{120}{3t - 24}$\nFor what value of $t$ does $v(t) = 10$?",
    choices: [
      // distractor: subtracts 24 instead of adding it, solving 3t = 12 - 24
      { id: "A", text: "$-4$" },
      // distractor: drops the -24, solving 3t = 12
      { id: "B", text: "$4$" },
      { id: "C", text: "$12$" },
      // distractor: drops the coefficient 3, solving t - 24 = 12
      { id: "D", text: "$36$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $\\frac{120}{3t - 24} = 10$ means $3t - 24 = 12$, so $3t = 36$ and $t = 12$.\n\n**The Full Solution:**\nStep 1: Set the function equal to $10$: $\\frac{120}{3t - 24} = 10$.\nStep 2: Multiply both sides by $3t - 24$ and divide by $10$: $3t - 24 = 12$.\nStep 3: Add $24$ and divide by $3$: $3t = 36$, so $t = 12$. Check: $v(12) = \\frac{120}{36 - 24} = \\frac{120}{12} = 10$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): moves $24$ to the other side with the wrong sign, $3t = 12 - 24 = -12$.\n* Choice B ($4$): ignores the $-24$ and solves $3t = 12$.\n* Choice D ($36$): ignores the coefficient $3$ and solves $t - 24 = 12$.\n\n**Test Day Takeaway:** When a fraction equals a number, the denominator equals the numerator divided by that number; then solve the resulting linear equation.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "domain-restriction",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-075",
    domain: "algebra",
    skills: ["function-evaluation", "roots-from-factors"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$f(x) = x^{2} - 9x + k$\nIn the given function, $k$ is a constant. One $x$-intercept of the graph of $f$ is $(4, 0)$. What is the $x$-coordinate of the other $x$-intercept?",
    choices: [
      // distractor: uses the product of the zeros with the wrong sign, 4r = -20
      { id: "A", text: "$-5$" },
      { id: "B", text: "$5$" },
      // distractor: reports the coefficient 9 instead of finding the second zero
      { id: "C", text: "$9$" },
      // distractor: reports the value of k instead of the second zero
      { id: "D", text: "$20$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Recover Parameter from Known Root, then Evaluate**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $f(4) = 16 - 36 + k = 0$ gives $k = 20$, and $x^{2} - 9x + 20 = (x - 4)(x - 5)$, so the other $x$-intercept is at $x = 5$.\n\n**The Full Solution:**\nStep 1: Since $(4, 0)$ is on the graph, $f(4) = 0$: $4^{2} - 9(4) + k = 0$, so $16 - 36 + k = 0$ and $k = 20$.\nStep 2: The function is $f(x) = x^{2} - 9x + 20$. Factor: $x^{2} - 9x + 20 = (x - 4)(x - 5)$.\nStep 3: The zeros are $x = 4$ and $x = 5$, so the other $x$-intercept is $(5, 0)$. Check: $f(5) = 25 - 45 + 20 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): takes the product of the zeros as $-20$ instead of $20$, so $4r = -20$ and $r = -5$; the constant term $20$ is the product itself.\n* Choice C ($9$): reports the opposite of the coefficient of $x$, which is the sum of the zeros, not the other zero.\n* Choice D ($20$): finds $k = 20$ and stops; $20$ is the product of the zeros.\n\n**Test Day Takeaway:** A known $x$-intercept gives a point to substitute: use it to find the constant, then factor to get the other zero.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "domain-restriction",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-076",
    domain: "algebra",
    skills: ["radical-equations"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$f(x) = \\sqrt{x + 6}$\nThe function $f$ is defined by the given equation. For what value of $x$ does $f(x) = x$?",
    choices: [
      // distractor: takes the root -3 from factoring x^2 - x - 6 with the signs reversed, (x + 3)(x - 2)
      { id: "A", text: "$-3$" },
      // distractor: keeps the extraneous solution from squaring without checking it in the original equation
      { id: "B", text: "$-2$" },
      // distractor: takes the root 2 from the same sign error in factoring, (x + 3)(x - 2)
      { id: "C", text: "$2$" },
      { id: "D", text: "$3$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Radical Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Squaring $\\sqrt{x + 6} = x$ gives $x^{2} - x - 6 = 0$, so $x = 3$ or $x = -2$. Only $x = 3$ checks, because $\\sqrt{4} = 2$, not $-2$.\n\n**The Full Solution:**\nStep 1: Set $f(x) = x$: $\\sqrt{x + 6} = x$. Square both sides: $x + 6 = x^{2}$.\nStep 2: Rearrange and factor: $x^{2} - x - 6 = 0$, so $(x - 3)(x + 2) = 0$ and $x = 3$ or $x = -2$.\nStep 3: Check each value in the original equation. For $x = 3$: $\\sqrt{9} = 3$ ✓. For $x = -2$: $\\sqrt{4} = 2 \\neq -2$, so $-2$ is extraneous. The only value is $x = 3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): comes from factoring $x^{2} - x - 6$ as $(x + 3)(x - 2)$, which expands to $x^{2} + x - 6$.\n* Choice B ($-2$): is a solution of the squared equation, but a square root is never negative, so $\\sqrt{4} = 2$ does not equal $-2$.\n* Choice C ($2$): comes from the same sign error in factoring, $(x + 3)(x - 2)$.\n\n**Test Day Takeaway:** Squaring both sides of an equation can create extra solutions; substitute every candidate back into the original equation with the square root.",
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
    skills: ["function-transformations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Selected values of the function $f$ are shown in the table. If $g(x) = f(x - 3) + 4$, what is the value of $g(5)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["2", "3"], ["3", "8"], ["4", "1"], ["5", "9"]] } },
    choices: [
      // distractor: finds f(2) = 3 but forgets to add 4
      { id: "A", text: "$3$" },
      { id: "B", text: "$7$" },
      // distractor: reads f(x - 3) as f(x) - 3, giving 9 - 3 + 4
      { id: "C", text: "$10$" },
      // distractor: uses f(5) instead of f(2), giving 9 + 4
      { id: "D", text: "$13$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $g(5) = f(5 - 3) + 4 = f(2) + 4$, and the table shows $f(2) = 3$, so $g(5) = 7$.\n\n**The Full Solution:**\nStep 1: Substitute $5$ for $x$ in the definition of $g$: $g(5) = f(5 - 3) + 4 = f(2) + 4$.\nStep 2: In the row where $x = 2$, the table shows $f(2) = 3$.\nStep 3: Add: $g(5) = 3 + 4 = 7$. Check: the input to $f$ is $5 - 3 = 2$, not $5$, and $3 + 4 = 7$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): finds $f(2) = 3$ and stops before adding $4$.\n* Choice C ($10$): treats $f(x - 3)$ as $f(x) - 3$, computing $f(5) - 3 + 4 = 9 - 3 + 4$.\n* Choice D ($13$): uses $f(5) = 9$ instead of $f(2)$, ignoring the $-3$ inside the parentheses.\n\n**Test Day Takeaway:** In $f(x - 3)$, the $-3$ changes the input before you look up $f$; work out the input first, then read the table.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-078",
    domain: "algebra",
    skills: ["function-transformations"],
    difficulty: "medium",
    type: "fill-in",
    question: "$f(x) = x^{2} - c$\nIn the given function, $c$ is a constant. The function $g$ is defined by $g(x) = f(x - 3)$. If $g(8) = 21$, what is the value of $c$?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~20s):** $g(8) = f(5) = 25 - c$, and $25 - c = 21$ gives $c = 4$.\n\n**The Full Solution:**\nStep 1: Substitute $8$ for $x$ in the definition of $g$: $g(8) = f(8 - 3) = f(5)$.\nStep 2: Evaluate $f(5)$: $f(5) = 5^{2} - c = 25 - c$.\nStep 3: Set $25 - c = 21$, so $c = 4$. Check: with $c = 4$, $g(8) = f(5) = 25 - 4 = 21$ ✓\n\n**Common Mistakes:**\n* $43$: evaluates $f(8) = 64 - c$ instead of $f(5)$, ignoring the $-3$ inside $g$.\n* $-4$: subtracts in the wrong order, $c = 21 - 25$.\n* $40$: treats $f(x - 3)$ as $f(x) - 3$, so $64 - c - 3 = 21$.\n\n**Test Day Takeaway:** When one function is defined in terms of another, find the input to the inner function first, then evaluate.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-079",
    domain: "algebra",
    skills: ["function-transformations"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = x^{2} - 3$. The function $g$ is defined by $g(x) = f(x + 2)$. Which expression is equivalent to $g(x)$?",
    choices: [
      // distractor: adds 2 to the output, computing f(x) + 2 instead of f(x + 2)
      { id: "A", text: "$x^{2} - 1$" },
      // distractor: squares x + 2 as x^2 + 4, dropping the middle term 4x
      { id: "B", text: "$x^{2} + 1$" },
      { id: "C", text: "$x^{2} + 4x + 1$" },
      // distractor: adds 3 instead of subtracting it after expanding (x + 2)^2
      { id: "D", text: "$x^{2} + 4x + 7$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Replace $x$ with $x + 2$: $g(x) = (x + 2)^{2} - 3 = x^{2} + 4x + 4 - 3 = x^{2} + 4x + 1$.\n\n**The Full Solution:**\nStep 1: $g(x) = f(x + 2)$ means every $x$ in $f(x) = x^{2} - 3$ is replaced with $x + 2$: $g(x) = (x + 2)^{2} - 3$.\nStep 2: Expand the square: $(x + 2)^{2} = x^{2} + 4x + 4$.\nStep 3: Subtract $3$: $g(x) = x^{2} + 4x + 1$. Check at $x = 1$: $g(1) = f(3) = 9 - 3 = 6$, and $1 + 4 + 1 = 6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^{2} - 1$): computes $f(x) + 2$, which adds $2$ to the output instead of to the input.\n* Choice B ($x^{2} + 1$): squares $x + 2$ as $x^{2} + 4$, losing the middle term $4x$.\n* Choice D ($x^{2} + 4x + 7$): expands correctly but adds $3$ instead of subtracting it.\n\n**Test Day Takeaway:** For $f(x + k)$, substitute the whole expression $x + k$ for $x$, and remember $(x + k)^{2}$ has a middle term $2kx$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-080",
    domain: "algebra",
    skills: ["exponential-growth-decay"],
    difficulty: "hard",
    type: "fill-in",
    question: "$f(x) = 5(2)^{x}$\nFor the given function $f$, $f(a) = 40$ and $f(b) = 640$. What is the value of $b - a$?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~20s):** $\\frac{f(b)}{f(a)} = \\frac{640}{40} = 16$, and $\\frac{5(2)^{b}}{5(2)^{a}} = 2^{b - a}$, so $2^{b - a} = 16 = 2^{4}$ and $b - a = 4$.\n\n**The Full Solution:**\nStep 1: Solve $f(a) = 40$: $5(2)^{a} = 40$, so $2^{a} = 8 = 2^{3}$ and $a = 3$.\nStep 2: Solve $f(b) = 640$: $5(2)^{b} = 640$, so $2^{b} = 128 = 2^{7}$ and $b = 7$.\nStep 3: Subtract: $b - a = 7 - 3 = 4$. Check: $f(3) = 5(8) = 40$ and $f(7) = 5(128) = 640$ ✓\n\n**Common Mistakes:**\n* $600$: subtracts the outputs, $640 - 40$, instead of the inputs.\n* $16$: finds the ratio of the outputs, $\\frac{640}{40} = 16$, but does not rewrite $16$ as a power of $2$.\n* $7$: finds $b = 7$ and reports it without subtracting $a$.\n\n**Test Day Takeaway:** For an exponential function, equal steps in the input multiply the output by equal factors: divide the two outputs, then write the quotient as a power of the base.",
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
    question: "The graph of the function $f$, shown in the $xy$-plane, is a translation of the graph of $y = x^{2}$. Which equation defines $f$?",
    diagram: { type: "quadraticVertex", params: { vertex: [3, 0], a: 1, showPoints: [[1, 4], [5, 4]], showVertex: true } },
    choices: [
      // distractor: treats the shift as vertical and moves the graph down 3
      { id: "A", text: "$f(x) = x^{2} - 3$" },
      // distractor: treats the shift as vertical and moves the graph up 3
      { id: "B", text: "$f(x) = x^{2} + 3$" },
      { id: "C", text: "$f(x) = (x - 3)^{2}$" },
      // distractor: uses + 3 inside the parentheses, which shifts the graph left
      { id: "D", text: "$f(x) = (x + 3)^{2}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The vertex moved from $(0, 0)$ to $(3, 0)$, a shift of $3$ units right, so $f(x) = (x - 3)^{2}$.\n\n**The Full Solution:**\nStep 1: The graph of $y = x^{2}$ has its vertex at $(0, 0)$. The graph shown has its vertex at $(3, 0)$ and the same shape.\nStep 2: Moving a graph $3$ units right replaces $x$ with $x - 3$.\nStep 3: So $f(x) = (x - 3)^{2}$. Check: $f(3) = 0$, matching the vertex, and $f(5) = 2^{2} = 4$, matching the point $(5, 4)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^{2} - 3$): moves the graph down $3$, putting the vertex at $(0, -3)$.\n* Choice B ($x^{2} + 3$): moves the graph up $3$, putting the vertex at $(0, 3)$.\n* Choice D ($(x + 3)^{2}$): uses the wrong sign inside; this vertex is at $(-3, 0)$.\n\n**Test Day Takeaway:** A shift right by $h$ is $f(x - h)$: the sign inside is the opposite of the direction you might guess. Check the vertex by substituting it.",
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
    question: "The quadratic function $f$ is graphed in the $xy$-plane, as shown. Shifting this graph up $6$ units gives the graph of the function $g$. Which equation defines $g$?",
    diagram: { type: "quadraticVertex", params: { vertex: [-2, 1], a: 1, showPoints: [[-4, 5], [0, 5]], showVertex: true } },
    choices: [
      // distractor: translates the graph down 6 units instead of up
      { id: "A", text: "$g(x) = (x + 2)^{2} - 5$" },
      { id: "B", text: "$g(x) = (x + 2)^{2} + 7$" },
      // distractor: translates the graph 6 units to the right instead of up
      { id: "C", text: "$g(x) = (x - 4)^{2} + 1$" },
      // distractor: translates the graph 6 units to the left instead of up
      { id: "D", text: "$g(x) = (x + 8)^{2} + 1$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The graph has vertex $(-2, 1)$ and passes through $(0, 5)$, so $f(x) = (x + 2)^{2} + 1$. Shifting up $6$ units adds $6$ to every output: $g(x) = (x + 2)^{2} + 7$.\n\n**The Full Solution:**\nStep 1: From the graph, the vertex is $(-2, 1)$ and the parabola passes through $(-4, 5)$ and $(0, 5)$. With $f(x) = a(x + 2)^{2} + 1$, the point $(0, 5)$ gives $4a + 1 = 5$, so $a = 1$ and $f(x) = (x + 2)^{2} + 1$.\nStep 2: A shift up $6$ units adds $6$ to each output, so $g(x) = f(x) + 6$.\nStep 3: $g(x) = (x + 2)^{2} + 1 + 6 = (x + 2)^{2} + 7$. Check: the vertex of $g$ is $(-2, 7)$, which is $6$ units above $(-2, 1)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x + 2)^{2} - 5$): subtracts $6$, which moves the graph down instead of up.\n* Choice C ($(x - 4)^{2} + 1$): changes the input, which moves the graph $6$ units to the right.\n* Choice D ($(x + 8)^{2} + 1$): changes the input the other way, which moves the graph $6$ units to the left.\n\n**Test Day Takeaway:** A vertical shift changes the output: add to move up, subtract to move down. Changing the number inside the parentheses moves the graph left or right instead.",
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
    question: "The function $h$ is defined by $h(x) = f(x + 3) - 5$, where the graph of the function $f$ is shown. What are the coordinates of the vertex of the graph of $h$?",
    diagram: { type: "quadraticVertex", params: { vertex: [-1, 2], a: 1, showPoints: [[-3, 6], [1, 6]], showVertex: true } },
    choices: [
      { id: "A", text: "$(-4, -3)$" },
      // distractor: shifts up 5 instead of down 5
      { id: "B", text: "$(-4, 7)$" },
      // distractor: shifts right 3 instead of left 3
      { id: "C", text: "$(2, -3)$" },
      // distractor: shifts right instead of left and up instead of down
      { id: "D", text: "$(2, 7)$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Vertex from Transformations**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The vertex of $f$ is $(-1, 2)$. The graph of $h(x) = f(x + 3) - 5$ is that graph moved $3$ left and $5$ down, so the new vertex is $(-4, -3)$.\n\n**The Full Solution:**\nStep 1: From the graph, the vertex of $y = f(x)$ is $(-1, 2)$.\nStep 2: Replacing $x$ with $x + 3$ shifts the graph $3$ units left, and subtracting $5$ shifts it $5$ units down.\nStep 3: Apply both shifts to the vertex: $(-1 - 3, 2 - 5) = (-4, -3)$. Check: $h(-4) = f(-1) - 5 = 2 - 5 = -3$, the lowest output, since $f(-1)$ is the minimum of $f$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($(-4, 7)$): reads $-5$ as a shift up.\n* Choice C ($(2, -3)$): reads $x + 3$ as a shift to the right.\n* Choice D ($(2, 7)$): reverses both shifts, moving the vertex right $3$ and up $5$.\n\n**Test Day Takeaway:** Inside the parentheses, the shift goes opposite to the sign ($x + 3$ means left $3$); outside, it goes with the sign ($-5$ means down $5$). Move the vertex and you have moved the graph.",
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
    question: "The graph of the linear function $f$ is shown in the $xy$-plane. The function $g$ is defined by $g(x) = f(x) - 6$. What is the $y$-coordinate of the $y$-intercept of the graph of $y = g(x)$?",
    diagram: { type: "linearGraph", params: { slope: -0.5, yIntercept: 4, xRange: [-6, 8], yRange: [-4, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 4], [4, 2], [8, 0]], label: "y = f(x)" } },
    choices: [
      // distractor: reports the shift alone, ignoring the original y-intercept of 4
      { id: "A", text: "$-6$" },
      { id: "B", text: "$-2$" },
      // distractor: subtracts in the wrong order, computing 6 - 4 = 2
      { id: "C", text: "$2$" },
      // distractor: shifts up 6 instead of down
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: y-Intercept After Vertical Shift**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The graph of $f$ crosses the $y$-axis at $4$, so $g(0) = f(0) - 6 = 4 - 6 = -2$.\n\n**The Full Solution:**\nStep 1: Read the $y$-intercept of $f$ from the graph: the line crosses the $y$-axis at $(0, 4)$, so $f(0) = 4$.\nStep 2: The $y$-intercept of $g$ is at $x = 0$: $g(0) = f(0) - 6$.\nStep 3: Substitute: $g(0) = 4 - 6 = -2$. Check: $f(x) = -\\frac{1}{2}x + 4$ from the points $(0, 4)$ and $(4, 2)$, so $g(x) = -\\frac{1}{2}x - 2$, whose $y$-intercept is $(0, -2)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): reports the shift by itself and ignores the starting $y$-intercept of $4$.\n* Choice C ($2$): subtracts in the wrong order, computing $6 - 4$ instead of $4 - 6$.\n* Choice D ($10$): adds $6$ instead of subtracting it.\n\n**Test Day Takeaway:** Subtracting a constant outside the function moves every point down by that constant, including the $y$-intercept: new intercept = old intercept minus the shift.",
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
    question: "$f(x) = 4x - 7$\nThe graph of $y = g(x)$ in the $xy$-plane is the result of translating the graph of $y = f(x)$ $3$ units to the left and $5$ units up. Which equation defines $g$?",
    choices: [
      // distractor: translates 3 units to the right instead of the left, using f(x - 3) + 5
      { id: "A", text: "$g(x) = 4x - 14$" },
      // distractor: applies only the translation up 5 units and ignores the shift to the left
      { id: "B", text: "$g(x) = 4x - 2$" },
      // distractor: translates 5 units down instead of up, using f(x + 3) - 5
      { id: "C", text: "$g(x) = 4x$" },
      { id: "D", text: "$g(x) = 4x + 10$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Identify Multiple Transformations**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Left $3$ and up $5$ means $g(x) = f(x + 3) + 5 = 4(x + 3) - 7 + 5 = 4x + 10$.\n\n**The Full Solution:**\nStep 1: A translation $3$ units to the left replaces $x$ with $x + 3$, and a translation $5$ units up adds $5$ to the output: $g(x) = f(x + 3) + 5$.\nStep 2: Substitute: $f(x + 3) = 4(x + 3) - 7 = 4x + 12 - 7 = 4x + 5$.\nStep 3: Add $5$: $g(x) = 4x + 10$. Check: the point $(2, 1)$ is on the graph of $f$; moving it left $3$ and up $5$ gives $(-1, 6)$, and $g(-1) = -4 + 10 = 6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4x - 14$): uses $f(x - 3) + 5$, which shifts the graph to the right instead of the left.\n* Choice B ($4x - 2$): adds $5$ to $f(x)$ but leaves out the shift to the left.\n* Choice C ($4x$): uses $f(x + 3) - 5$, which shifts the graph down instead of up.\n\n**Test Day Takeaway:** Moving a graph left $h$ units replaces $x$ with $x + h$; moving it up $k$ units adds $k$ to the output. Check the result with one point.",
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
    question: "Line $k$ is shown in the $xy$-plane. Which equation defines line $k$?",
    diagram: { type: "linearGraph", params: { slope: 1.5, yIntercept: 0, xRange: [-6, 8], yRange: [-6, 10], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 0], [4, 6]], label: "k" } },
    choices: [
      { id: "A", text: "$y = \\frac{3}{2}x$" },
      // distractor: divides run by rise, inverting the slope
      { id: "B", text: "$y = \\frac{2}{3}x$" },
      // distractor: adds the x-coordinate of the marked point as a y-intercept
      { id: "C", text: "$y = \\frac{3}{2}x + 4$" },
      // distractor: uses the y-coordinate of the marked point as the slope
      { id: "D", text: "$y = 6x$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Line Through Origin**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The line passes through $(0, 0)$ and $(4, 6)$, so its slope is $\\frac{6}{4} = \\frac{3}{2}$ and its $y$-intercept is $0$: $y = \\frac{3}{2}x$.\n\n**The Full Solution:**\nStep 1: Read two points on the line from the graph: $(0, 0)$ and $(4, 6)$.\nStep 2: Slope $= \\frac{6 - 0}{4 - 0} = \\frac{3}{2}$, and since the line passes through the origin, the $y$-intercept is $0$.\nStep 3: So the line is $y = \\frac{3}{2}x$. Check: $\\frac{3}{2}(4) = 6$, so $(4, 6)$ is on the line ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = \\frac{2}{3}x$): divides the run by the rise, inverting the slope.\n* Choice C ($y = \\frac{3}{2}x + 4$): has the right slope but adds a $y$-intercept, though the line passes through the origin.\n* Choice D ($y = 6x$): uses the $y$-coordinate $6$ as the slope without dividing by the run of $4$.\n\n**Test Day Takeaway:** A line through the origin is $y = mx$. Read one other clear point $(a, b)$ from the graph and the slope is $\\frac{b}{a}$.",
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
    question: "The table shows three values of $x$ and their corresponding values of $f(x)$ for the linear function $f$. Which equation defines $f$?",
    diagram: { type: "table", params: { xHeader: "x", yHeader: "f(x)", rows: [["0", "-3"], ["5", "7"], ["10", "17"]] } },
    choices: [
      { id: "A", text: "$f(x) = 2x - 3$" },
      // distractor: divides the change in x by the change in f(x), inverting the slope
      { id: "B", text: "$f(x) = \\frac{1}{2}x - 3$" },
      // distractor: uses the second row's output, 7, as the y-intercept
      { id: "C", text: "$f(x) = 2x + 7$" },
      // distractor: swaps the roles of the slope and the y-intercept
      { id: "D", text: "$f(x) = -3x + 2$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Linear Function from Two Points (y-Intercept Given)**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The row $x = 0$ gives the $y$-intercept, $-3$. From $x = 0$ to $x = 5$, $f(x)$ rises $10$, so the slope is $2$: $f(x) = 2x - 3$.\n\n**The Full Solution:**\nStep 1: The row with $x = 0$ shows $f(0) = -3$, so the $y$-intercept is $-3$.\nStep 2: Slope from the first two rows: $\\frac{7 - (-3)}{5 - 0} = \\frac{10}{5} = 2$.\nStep 3: So $f(x) = 2x - 3$. Check with the third row: $f(10) = 2(10) - 3 = 17$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{1}{2}x - 3$): divides the change in $x$ by the change in $f(x)$, which inverts the slope.\n* Choice C ($2x + 7$): has the right slope but uses $7$, the output at $x = 5$, as the $y$-intercept.\n* Choice D ($-3x + 2$): swaps the slope and the $y$-intercept.\n\n**Test Day Takeaway:** If a table includes $x = 0$, that row gives the $y$-intercept for free; get the slope from any two rows and use the third row as a check.",
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
    question: "The table shows the temperature, in degrees Celsius, of a metal rod $t$ minutes after it was removed from an oven, for two values of $t$. The temperature decreased at a constant rate. What was the temperature, in degrees Celsius, of the rod at $t = 16$?",
    diagram: { type: "dataTable", params: { headers: ["Time (minutes)", "Temperature (°C)"], rows: [["4", "62"], ["10", "47"]] } },
    correctAnswer: "32",
    explanation: "**SAT Pattern: Linear Extrapolation**\n\n**The correct answer is $32$.**\n\n**The Fast Way (~15s):** The temperature fell $62 - 47 = 15$ degrees in $6$ minutes. From $t = 10$ to $t = 16$ is another $6$ minutes, so it fell another $15$: $47 - 15 = 32$.\n\n**The Full Solution:**\nStep 1: Rate of change from the two rows: $\\frac{47 - 62}{10 - 4} = \\frac{-15}{6} = -2.5$ degrees per minute.\nStep 2: From $t = 10$ to $t = 16$ is $6$ minutes, so the temperature changes by $-2.5(6) = -15$ degrees.\nStep 3: Temperature at $t = 16$: $47 - 15 = 32$. Check with the full model $T = 62 - 2.5(t - 4)$: $62 - 2.5(12) = 32$ ✓\n\n**Common Mistakes:**\n* $22$: treats $62$ as the temperature at $t = 0$ and computes $62 - 2.5(16)$.\n* $62$: adds the change instead of subtracting it, getting $47 + 15$.\n* $7$: starts from $47$ but steps $16$ minutes instead of $6$, computing $47 - 2.5(16)$.\n\n**Test Day Takeaway:** Find the rate from the two given rows, then step from the nearest known row by the exact time gap, keeping the sign of the rate.",
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
    question: "The two points shown in the $xy$-plane lie on line $\\ell$. What is the $y$-coordinate of the $y$-intercept of line $\\ell$?",
    diagram: { type: "coordinatePoints", params: { points: [[-6, 13], [9, 3]], xMin: -8, xMax: 11, yMin: -4, yMax: 15 } },
    choices: [
      // distractor: reports the y-coordinate of the right-hand point, (9, 3)
      { id: "A", text: "$3$" },
      { id: "B", text: "$9$" },
      // distractor: reports the y-coordinate of the left-hand point, (-6, 13)
      { id: "C", text: "$13$" },
      // distractor: gets the slope's sign wrong, using +2/3, and moves up from (-6, 13)
      { id: "D", text: "$17$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Find y-Intercept from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The points are $(-6, 13)$ and $(9, 3)$, so the slope is $\\frac{3 - 13}{9 - (-6)} = -\\frac{2}{3}$. Moving $6$ units right from $(-6, 13)$ lowers $y$ by $4$: the $y$-intercept is $9$.\n\n**The Full Solution:**\nStep 1: Read the points from the graph: $(-6, 13)$ and $(9, 3)$.\nStep 2: Slope: $\\frac{3 - 13}{9 - (-6)} = \\frac{-10}{15} = -\\frac{2}{3}$.\nStep 3: From $(-6, 13)$ to $x = 0$ is $6$ units right, so $y$ changes by $-\\frac{2}{3}(6) = -4$: $13 - 4 = 9$. Check from the other point: $x = 9$ to $x = 0$ is $9$ units left, so $y$ changes by $+6$: $3 + 6 = 9$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the $y$-coordinate of the point $(9, 3)$, which is not on the $y$-axis.\n* Choice C ($13$): reports the $y$-coordinate of the point $(-6, 13)$, which is also not on the $y$-axis.\n* Choice D ($17$): uses a slope of $+\\frac{2}{3}$, so moving right from $(-6, 13)$ adds $4$ instead of subtracting it.\n\n**Test Day Takeaway:** To find a $y$-intercept from two points, compute the slope, then walk from either point to $x = 0$. Doing it from both points is a built-in check.",
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
    question: "A candle burns at a constant rate. The table shows the height $h$, in centimeters, of the candle $t$ hours after it was lit, for two values of $t$. What was the height of the candle, in centimeters, when it was lit?",
    questionTable: { headers: ["Time (hours)", "Height (cm)"], rows: [["2", "21.5"], ["5", "17"]] },
    choices: [
      // distractor: steps forward from t = 2 instead of back, computing 21.5 - 2(1.5)
      { id: "A", text: "$18.5$" },
      // distractor: steps back only one hour from t = 2, computing 21.5 + 1.5
      { id: "B", text: "$23$" },
      { id: "C", text: "$24.5$" },
      // distractor: steps back 3 hours from t = 2, using the gap between the rows as the distance to t = 0
      { id: "D", text: "$26$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear Extrapolation Back to t = 0**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The height drops $4.5$ cm in $3$ hours, or $1.5$ cm per hour. Going back $2$ hours from $t = 2$ adds $3$ cm: $21.5 + 3 = 24.5$.\n\n**The Full Solution:**\nStep 1: Rate from the two rows: $\\frac{17 - 21.5}{5 - 2} = \\frac{-4.5}{3} = -1.5$ centimeters per hour.\nStep 2: The candle was lit at $t = 0$, which is $2$ hours before $t = 2$, so the height then was $1.5(2) = 3$ centimeters greater.\nStep 3: Height when lit: $21.5 + 3 = 24.5$ centimeters. Check with the model $h = 24.5 - 1.5t$: at $t = 5$, $24.5 - 7.5 = 17$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($18.5$): steps forward from $t = 2$ instead of back, subtracting $3$ instead of adding it.\n* Choice B ($23$): steps back only $1$ hour from $t = 2$.\n* Choice D ($26$): steps back $3$ hours, the gap between the two rows, instead of the $2$ hours from $t = 2$ to $t = 0$.\n\n**Test Day Takeaway:** The starting value of a linear model is its value at $t = 0$. Find the rate, then walk back from the nearest known row by exactly the right number of time units.",
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
    question: "A bakery charges \\$3 per cupcake plus a \\$5 box fee for each order. An order of $c$ cupcakes costs \\$41. What is the cost, in dollars, of an order of $c + 4$ cupcakes?",
    choices: [
      // distractor: adds the 4 extra cupcakes as 4 dollars, 41 + 4 = 45
      { id: "A", text: "$45$" },
      { id: "B", text: "$53$" },
      // distractor: charges the 5-dollar box fee a second time, 53 + 5 = 58
      { id: "C", text: "$58$" },
      // distractor: uses the 5-dollar box fee as the price per cupcake, 41 + 4(5) = 61
      { id: "D", text: "$61$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Four more cupcakes add $4 \\cdot 3 = 12$ dollars, and the box fee does not change, so the cost is $41 + 12 = 53$.\n\n**The Full Solution:**\nStep 1: The cost of $c$ cupcakes is $3c + 5$, so $3c + 5 = 41$. Then $3c = 36$ and $c = 12$.\nStep 2: An order of $c + 4 = 16$ cupcakes costs $3(16) + 5 = 48 + 5 = 53$ dollars.\nStep 3: Check without solving for $c$: $3(c + 4) + 5 = (3c + 5) + 12 = 41 + 12 = 53$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($45$): adds the $4$ extra cupcakes as $4$ dollars instead of $4 \\cdot 3 = 12$ dollars.\n* Choice C ($58$): charges the $\\$5$ box fee a second time; the order still has one box fee, so the cost is $53$, not $53 + 5$.\n* Choice D ($61$): uses the $\\$5$ box fee as the price of a cupcake, computing $41 + 4(5) = 61$.\n\n**Test Day Takeaway:** When a cost is a rate times a count plus a fixed fee, a change in the count changes only the rate part; multiply the change by the rate and leave the fee alone.",
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
    question: "Jordan bought $n$ notebooks for \\$4 each and one backpack for \\$15, spending a total of \\$47. How much would Jordan have spent, in dollars, if he had bought $3$ fewer notebooks?",
    choices: [
      // distractor: removes the 15-dollar backpack instead of three notebooks, 47 - 15 = 32
      { id: "A", text: "$32$" },
      { id: "B", text: "$35$" },
      // distractor: subtracts the count 3 as 3 dollars, 47 - 3 = 44
      { id: "C", text: "$44$" },
      // distractor: adds the cost of 3 notebooks instead of subtracting it, 47 + 12 = 59
      { id: "D", text: "$59$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Three fewer notebooks cost $3 \\cdot 4 = 12$ dollars less, so Jordan would have spent $47 - 12 = 35$ dollars.\n\n**The Full Solution:**\nStep 1: The total is $4n + 15 = 47$, so $4n = 32$ and $n = 8$ notebooks.\nStep 2: With $3$ fewer notebooks, Jordan buys $n - 3 = 5$ notebooks and spends $4(5) + 15 = 20 + 15 = 35$ dollars.\nStep 3: Check without solving for $n$: $4(n - 3) + 15 = (4n + 15) - 12 = 47 - 12 = 35$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($32$): takes away the $\\$15$ backpack instead of the $3$ notebooks, computing $47 - 15 = 32$.\n* Choice C ($44$): subtracts the $3$ notebooks as $3$ dollars instead of $3 \\cdot 4 = 12$ dollars.\n* Choice D ($59$): adds the cost of $3$ notebooks, $47 + 12 = 59$, although Jordan buys fewer notebooks, not more.\n\n**Test Day Takeaway:** Fewer items means the total drops by the number of items removed times the price of each; the one-time cost stays in the total.",
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
    question: "$5m - 8 = 27$\nWhat is the value of $10m + 3$?",
    choices: [
      // distractor: finds 5m = 35 and adds 3 without doubling to get 10m
      { id: "A", text: "$38$" },
      // distractor: subtracts 8 instead of adding it, so 5m = 19 and 10m + 3 = 41
      { id: "B", text: "$41$" },
      // distractor: doubles the given value 27 and adds 3, treating 10m + 3 as 2(5m - 8) + 3
      { id: "C", text: "$57$" },
      { id: "D", text: "$73$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Adding $8$ gives $5m = 35$, so $10m = 70$ and $10m + 3 = 73$.\n\n**The Full Solution:**\nStep 1: Add $8$ to both sides of the given equation: $5m = 35$.\nStep 2: Multiply both sides by $2$: $10m = 70$.\nStep 3: Add $3$: $10m + 3 = 73$. Check: $m = 7$ gives $5(7) - 8 = 27$ and $10(7) + 3 = 73$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($38$): stops at $5m = 35$ and adds $3$, never doubling $5m$ to get $10m$.\n* Choice B ($41$): subtracts $8$ from $27$ instead of adding it, getting $5m = 19$, so $10m + 3 = 38 + 3 = 41$.\n* Choice C ($57$): doubles $27$ and adds $3$. But $2(5m - 8) = 10m - 16$, not $10m$, so $2(27) + 3 = 57$ is the value of $10m - 13$.\n\n**Test Day Takeaway:** To find a new expression in $m$, isolate the matching multiple of $m$ first ($5m = 35$), then scale and shift it to the target.",
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
    question: "If $\\frac{4x}{9} = \\frac{8}{3}$, what is the value of $x + 7$?",
    choices: [
      // distractor: solves for x and stops, reporting x = 6 instead of x + 7
      { id: "A", text: "$6$" },
      // distractor: drops both denominators, solving 4x = 8 to get x = 2, so x + 7 = 9
      { id: "B", text: "$9$" },
      { id: "C", text: "$13$" },
      // distractor: multiplies by 9 to get 4x = 24 but never divides by 4, using x = 24
      { id: "D", text: "$31$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Multiplying both sides by $9$ gives $4x = 24$, so $x = 6$ and $x + 7 = 13$.\n\n**The Full Solution:**\nStep 1: Multiply both sides by $9$: $4x = \\frac{8}{3} \\cdot 9 = 24$.\nStep 2: Divide both sides by $4$: $x = 6$.\nStep 3: Add $7$: $x + 7 = 13$. Check: $\\frac{4(6)}{9} = \\frac{24}{9} = \\frac{8}{3}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): solves for $x$ correctly but reports $x = 6$; the question asks for $x + 7$.\n* Choice B ($9$): ignores both denominators and solves $4x = 8$, which gives $x = 2$ and $x + 7 = 9$.\n* Choice D ($31$): clears the $9$ to get $4x = 24$ but then treats $24$ as the value of $x$, giving $24 + 7 = 31$.\n\n**Test Day Takeaway:** Clear fractions by multiplying both sides by a denominator, finish isolating the variable, and then build the expression the question actually asks for.",
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
    question: "The function $f$ is defined by $f(x) = 5x + 2$. If $f(n) = 27$, what is the value of $5n - 8$?",
    choices: [
      // distractor: solves for n and reports n = 5 instead of 5n - 8
      { id: "A", text: "$5$" },
      { id: "B", text: "$17$" },
      // distractor: subtracts 8 from f(n) = 27 without first removing the +2, 27 - 8 = 19
      { id: "C", text: "$19$" },
      // distractor: finds 5n = 25 and stops before subtracting 8
      { id: "D", text: "$25$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** From $5n + 2 = 27$, $5n = 25$, so $5n - 8 = 25 - 8 = 17$.\n\n**The Full Solution:**\nStep 1: Since $f(n) = 5n + 2$, the condition $f(n) = 27$ means $5n + 2 = 27$.\nStep 2: Subtract $2$: $5n = 25$.\nStep 3: Subtract $8$: $5n - 8 = 17$. Check: $n = 5$, and $5(5) - 8 = 17$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): solves for $n$ and reports $n = 5$; the question asks for $5n - 8$.\n* Choice C ($19$): subtracts $8$ from $27$ directly. That treats $f(n)$ as $5n$, but $f(n) = 5n + 2$, so $27 - 8$ is the value of $5n - 6$.\n* Choice D ($25$): finds $5n = 25$ and stops before subtracting $8$.\n\n**Test Day Takeaway:** When the target expression shares the term $5n$ with the function, solve for $5n$ and adjust; finding $n$ itself is optional.",
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
    question: "$4(k + 2) + 3k = 30$\nWhat is the value of $14k + 5$?",
    choices: [
      // distractor: finds 7k = 22 and adds 5 without doubling to 14k
      { id: "A", text: "$27$" },
      { id: "B", text: "$49$" },
      // distractor: distributes 4(k + 2) as 4k + 2, so 7k = 28 and 14k + 5 = 61
      { id: "C", text: "$61$" },
      // distractor: doubles the right side and adds 5, treating 14k + 5 as 2(30) + 5 without removing the constant 8
      { id: "D", text: "$65$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The left side simplifies to $7k + 8$, so $7k = 22$, $14k = 44$, and $14k + 5 = 49$.\n\n**The Full Solution:**\nStep 1: Distribute and combine like terms: $4k + 8 + 3k = 30$, so $7k + 8 = 30$.\nStep 2: Subtract $8$: $7k = 22$. Multiply by $2$: $14k = 44$.\nStep 3: Add $5$: $14k + 5 = 49$. Check: $k = \\frac{22}{7}$ gives $4\\left(\\frac{22}{7} + 2\\right) + 3\\left(\\frac{22}{7}\\right) = \\frac{144}{7} + \\frac{66}{7} = 30$ and $14\\left(\\frac{22}{7}\\right) + 5 = 44 + 5 = 49$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($27$): stops at $7k = 22$ and adds $5$, never doubling $7k$ to get $14k$.\n* Choice C ($61$): distributes $4(k + 2)$ as $4k + 2$, so $7k + 2 = 30$, $7k = 28$, and $14k + 5 = 61$.\n* Choice D ($65$): doubles $30$ and adds $5$, but $2(7k + 8) = 14k + 16$, so $65$ is the value of $14k + 21$, not $14k + 5$.\n\n**Test Day Takeaway:** Simplify first, then solve for the multiple of $k$ you need ($7k = 22$, so $14k = 44$); you never have to work with the fraction $k = \\frac{22}{7}$.",
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
    question: "Printing a booklet costs \\$0.60 per page plus a \\$5 binding fee. A booklet with $n$ pages costs \\$23 to print. What is the cost, in dollars, to print a booklet with $n + 15$ pages?",
    choices: [
      { id: "A", text: "$32$" },
      // distractor: charges the 5-dollar binding fee a second time, 32 + 5 = 37
      { id: "B", text: "$37$" },
      // distractor: adds the 15 extra pages as 15 dollars, 23 + 15 = 38
      { id: "C", text: "$38$" },
      // distractor: uses the 5-dollar binding fee as the price per page, 23 + 15(5) = 98
      { id: "D", text: "$98$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Fifteen more pages add $15(0.60) = 9$ dollars, and the binding fee does not change, so the cost is $23 + 9 = 32$.\n\n**The Full Solution:**\nStep 1: The cost of an $n$-page booklet is $0.60n + 5$, so $0.60n + 5 = 23$. Then $0.60n = 18$ and $n = 30$ pages.\nStep 2: A booklet with $n + 15 = 45$ pages costs $0.60(45) + 5 = 27 + 5 = 32$ dollars.\nStep 3: Check without solving for $n$: $0.60(n + 15) + 5 = (0.60n + 5) + 9 = 23 + 9 = 32$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($37$): charges the $\\$5$ binding fee twice; the booklet is bound once, so the cost is $32$, not $32 + 5$.\n* Choice C ($38$): adds the $15$ pages as $15$ dollars instead of $15(0.60) = 9$ dollars.\n* Choice D ($98$): uses the $\\$5$ binding fee as the price of a page, computing $23 + 15(5) = 98$.\n\n**Test Day Takeaway:** Adding pages changes only the per-page part of the cost: multiply the extra pages by the price per page and add that to the old total.",
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
    question: "$\\frac{5 - 2x}{3} = -7$\nWhat is the value of $6x - 15$?",
    choices: [
      // distractor: treats 6x - 15 as 3(5 - 2x) instead of -3(5 - 2x), getting 3(-21) = -63
      { id: "A", text: "$-63$" },
      // distractor: drops the denominator, using 5 - 2x = -7, so x = 6 and 6x - 15 = 21
      { id: "B", text: "$21$" },
      // distractor: gets 5 - 2x = -21 but subtracts 5 from 21 instead of adding, so 2x = 16 and x = 8
      { id: "C", text: "$33$" },
      { id: "D", text: "$63$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Notice $6x - 15 = -3(5 - 2x)$. Since $5 - 2x = 3(-7) = -21$, the value is $-3(-21) = 63$.\n\n**The Full Solution:**\nStep 1: Multiply both sides by $3$: $5 - 2x = -21$.\nStep 2: Rewrite the target: $6x - 15 = -3(5 - 2x)$.\nStep 3: Substitute: $-3(-21) = 63$. Check by solving: $2x = 26$, so $x = 13$, $\\frac{5 - 26}{3} = -7$, and $6(13) - 15 = 63$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-63$): uses $3(5 - 2x)$ in place of $6x - 15$; the factor is $-3$, because $-3(5 - 2x) = 6x - 15$.\n* Choice B ($21$): forgets to multiply $-7$ by $3$, using $5 - 2x = -7$, which gives $x = 6$ and $6(6) - 15 = 21$.\n* Choice C ($33$): reaches $5 - 2x = -21$ but slips on the sign, getting $2x = 16$ and $x = 8$, so $6(8) - 15 = 33$.\n\n**Test Day Takeaway:** Look for the target expression as a multiple of the given one; when the signs are flipped, the multiplier is negative.",
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
    question: "$3(x - 4) + 7 = 25$\nWhat value of $x$ is the solution to the given equation?",
    correctAnswer: "10",
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~15s):** Distributing gives $3x - 12 + 7 = 25$, so $3x - 5 = 25$, $3x = 30$, and $x = 10$.\n\n**The Full Solution:**\nStep 1: Distribute the $3$: $3x - 12 + 7 = 25$.\nStep 2: Combine the constants: $3x - 5 = 25$, so $3x = 30$.\nStep 3: Divide by $3$: $x = 10$. Check: $3(10 - 4) + 7 = 18 + 7 = 25$ ✓\n\n**Common Mistakes:** Multiplying only the $x$ by $3$ gives $3x - 4 + 7 = 25$ and $x = \\frac{22}{3}$; adding $7$ to $25$ instead of subtracting it gives $3x = 44$; stopping at $3x = 30$ and entering $30$.\n\n**Test Day Takeaway:** Distribute to every term inside the parentheses, combine the constants, and only then isolate $x$.",
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
    question: "$5x + 2(x - 3) = 29$\nWhat is the solution to the given equation?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** The left side is $7x - 6$, so $7x = 35$ and $x = 5$.\n\n**The Full Solution:**\nStep 1: Distribute the $2$: $5x + 2x - 6 = 29$.\nStep 2: Combine like terms: $7x - 6 = 29$, so $7x = 35$.\nStep 3: Divide by $7$: $x = 5$. Check: $5(5) + 2(5 - 3) = 25 + 4 = 29$ ✓\n\n**Common Mistakes:** Writing $2(x - 3)$ as $2x - 3$ gives $7x = 32$ and a non-integer answer; subtracting $6$ from $29$ instead of adding it gives $7x = 23$; adding $5x$ and $2$ before distributing, as $7(x - 3) = 29$.\n\n**Test Day Takeaway:** Clear the parentheses first, then combine every $x$-term into one before solving.",
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
    question: "$2(x + k) = 7x - 9$\nIn the given equation, $k$ is a constant. The solution to the equation is $x = 5$. What is the value of $k$?",
    choices: [
      { id: "A", text: "$8$" },
      // distractor: finds 5 + k = 13 and reports 13 as k
      { id: "B", text: "$13$" },
      // distractor: multiplies only the x by 2, solving 10 + k = 26
      { id: "C", text: "$16$" },
      // distractor: evaluates the right side as 35 + 9 = 44, so 10 + 2k = 44
      { id: "D", text: "$17$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Substituting $x = 5$ gives $2(5 + k) = 26$, so $5 + k = 13$ and $k = 8$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 5$ into both sides: $2(5 + k) = 7(5) - 9 = 26$.\nStep 2: Divide both sides by $2$: $5 + k = 13$.\nStep 3: Subtract $5$: $k = 8$. Check: $2(5 + 8) = 26$ and $7(5) - 9 = 26$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($13$): reaches $5 + k = 13$ and reports $13$, which is the value of $x + k$, not $k$.\n* Choice C ($16$): multiplies only the $x$ by $2$, writing $10 + k = 26$ and getting $k = 16$.\n* Choice D ($17$): evaluates $7(5) - 9$ as $44$ instead of $26$, so $10 + 2k = 44$ and $k = 17$.\n\n**Test Day Takeaway:** When a solution is given, substitute it first; the equation then has only the constant left to solve for.",
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
    question: "$\\frac{2}{3}(x - 6) = \\frac{x}{2} + 1$\nWhat value of $x$ satisfies the given equation?",
    correctAnswer: "30",
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~25s):** Multiplying both sides by $6$ gives $4(x - 6) = 3x + 6$, so $4x - 24 = 3x + 6$ and $x = 30$.\n\n**The Full Solution:**\nStep 1: Multiply both sides by $6$, the least common denominator: $4(x - 6) = 3x + 6$.\nStep 2: Distribute: $4x - 24 = 3x + 6$.\nStep 3: Subtract $3x$ and add $24$: $x = 30$. Check: $\\frac{2}{3}(24) = 16$ and $\\frac{30}{2} + 1 = 16$ ✓\n\n**Common Mistakes:** Multiplying the fractions by $6$ but leaving the $1$ alone gives $4x - 24 = 3x + 1$ and $x = 25$; applying $\\frac{2}{3}$ only to the $x$ gives $\\frac{2}{3}x - 6$, which leads to $x = 42$; multiplying by $3$ instead of $6$ leaves a fraction behind and invites arithmetic slips.\n\n**Test Day Takeaway:** Multiply every term on both sides by the least common denominator, including the whole-number terms, before distributing.",
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
    question: "$\\frac{x + 4}{3} + \\frac{x - 2}{6} = 7$\nWhat is the solution to the given equation?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~20s):** Multiplying by $6$ gives $2(x + 4) + (x - 2) = 42$, so $3x + 6 = 42$ and $x = 12$.\n\n**The Full Solution:**\nStep 1: Multiply both sides by $6$: $2(x + 4) + (x - 2) = 42$.\nStep 2: Distribute and combine like terms: $2x + 8 + x - 2 = 42$, so $3x + 6 = 42$.\nStep 3: Subtract $6$ and divide by $3$: $x = 12$. Check: $\\frac{16}{3} + \\frac{10}{6} = \\frac{16}{3} + \\frac{5}{3} = \\frac{21}{3} = 7$ ✓\n\n**Common Mistakes:** Leaving the right side as $7$ after multiplying the left side by $6$ gives $3x + 6 = 7$; writing $2(x + 4)$ as $2x + 4$ gives $3x + 2 = 42$ and $x = \\frac{40}{3}$; adding the fractions by adding the denominators, $\\frac{2x + 2}{9} = 7$, gives $x = 30.5$.\n\n**Test Day Takeaway:** Clear every denominator at once by multiplying both sides by the least common denominator, and multiply each whole numerator, not just its first term.",
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
    question: "$7x - 2(x - 9) = 3x + 30$\nWhat value of $x$ is the solution to the given equation?",
    choices: [
      // distractor: adds 3x to the left side instead of subtracting it, so 8x + 18 = 30
      { id: "A", text: "$1.5$" },
      { id: "B", text: "$6$" },
      // distractor: multiplies only the x by -2, writing 5x - 9 = 3x + 30
      { id: "C", text: "$19.5$" },
      // distractor: distributes -2(x - 9) as -2x - 18, so 5x - 18 = 3x + 30
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The left side is $7x - 2x + 18 = 5x + 18$, so $5x + 18 = 3x + 30$, $2x = 12$, and $x = 6$.\n\n**The Full Solution:**\nStep 1: Distribute the $-2$: $7x - 2x + 18 = 3x + 30$, since $(-2)(-9) = 18$.\nStep 2: Combine like terms: $5x + 18 = 3x + 30$. Subtract $3x$ and $18$ from both sides: $2x = 12$.\nStep 3: Divide by $2$: $x = 6$. Check: $7(6) - 2(6 - 9) = 42 + 6 = 48$ and $3(6) + 30 = 48$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.5$): moves $3x$ to the left by adding it, getting $8x + 18 = 30$ and $x = 1.5$.\n* Choice C ($19.5$): multiplies only the $x$ by $-2$, writing $7x - 2x - 9 = 3x + 30$, so $2x = 39$ and $x = 19.5$.\n* Choice D ($24$): distributes $-2(x - 9)$ as $-2x - 18$, missing that a negative times a negative is positive, so $2x = 48$ and $x = 24$.\n\n**Test Day Takeaway:** When a negative number multiplies a difference, distribute the sign to both terms: $-2(x - 9) = -2x + 18$.",
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
    question: "A park has $120$ trees, and each tree is an oak, a maple, or a birch. There are $3$ times as many maples as oaks, and the number of birches is $6$ less than twice the number of oaks. How many maples are in the park?",
    choices: [
      // distractor: solves for the number of oaks and reports 21
      { id: "A", text: "$21$" },
      // distractor: reports the number of birches, 2(21) - 6 = 36
      { id: "B", text: "$36$" },
      // distractor: reads "6 less than" as 6 more, so 6x + 6 = 120 and x = 19
      { id: "C", text: "$57$" },
      { id: "D", text: "$63$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** With $x$ oaks, the total is $x + 3x + (2x - 6) = 6x - 6 = 120$, so $x = 21$ and there are $3(21) = 63$ maples.\n\n**The Full Solution:**\nStep 1: Let $x$ be the number of oaks. Then there are $3x$ maples and $2x - 6$ birches.\nStep 2: The total is $x + 3x + (2x - 6) = 120$, so $6x - 6 = 120$, $6x = 126$, and $x = 21$.\nStep 3: The number of maples is $3x = 63$. Check: $21 + 63 + 36 = 120$, and $36 = 2(21) - 6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($21$): solves the equation and reports $x = 21$, the number of oaks, not maples.\n* Choice B ($36$): reports the number of birches, $2(21) - 6 = 36$.\n* Choice C ($57$): writes the birches as $2x + 6$, so $6x + 6 = 120$, $x = 19$, and $3(19) = 57$.\n\n**Test Day Takeaway:** Write every group in terms of one variable, solve for that variable, and then compute the group the question asks for.",
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
    question: "$\\frac{k(x + 1)}{3} - 2x = 4k - 22$\nIn the given equation, $k$ is a constant. If $x = 8$ is a solution to the equation, what is the value of $k$?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~30s):** Substituting $x = 8$ gives $\\frac{9k}{3} - 16 = 4k - 22$, so $3k - 16 = 4k - 22$ and $k = 6$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 8$: $\\frac{k(8 + 1)}{3} - 2(8) = 4k - 22$, which is $\\frac{9k}{3} - 16 = 4k - 22$.\nStep 2: Simplify: $3k - 16 = 4k - 22$.\nStep 3: Subtract $3k$ and add $22$: $6 = k$. Check: $\\frac{6(9)}{3} - 16 = 18 - 16 = 2$ and $4(6) - 22 = 2$ ✓\n\n**Common Mistakes:** Writing $k(x + 1)$ as $kx + 1$ gives $\\frac{8k + 1}{3} - 16 = 4k - 22$ and a non-integer $k$; moving $-22$ across with the wrong sign gives $k = -38$; solving $3k - 16 = 4k - 22$ as $-k = 6$ and reporting $-6$.\n\n**Test Day Takeaway:** With a given solution, substitute it first; the equation becomes a linear equation in the constant, which you solve the usual way.",
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
    question: "A line in the $xy$-plane has a slope of $3$ and passes through the point $(2, 11)$. The $y$-intercept of the line is $(0, b)$. What is the value of $b$?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Line from Two Points**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** Moving from $x = 2$ back to $x = 0$ lowers $y$ by $2 \\cdot 3 = 6$, so $b = 11 - 6 = 5$.\n\n**The Full Solution:**\nStep 1: The line can be written as $y = 3x + b$.\nStep 2: Substitute the point $(2, 11)$: $11 = 3(2) + b = 6 + b$.\nStep 3: Subtract $6$: $b = 5$. Check: $y = 3x + 5$ gives $3(2) + 5 = 11$ at $x = 2$ ✓\n\n**Common Mistakes:** Subtracting the slope from the $y$-coordinate, $11 - 3 = 8$, forgets to multiply the slope by $x = 2$; adding instead of subtracting gives $11 + 6 = 17$.\n\n**Test Day Takeaway:** Plug the known point into $y = mx + b$ and solve for $b$; the $y$-intercept is where $x = 0$.",
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
    question: "What is the slope of the line shown in the $xy$-plane?",
    diagram: { type: "linearLine", params: { points: [[-3, -4], [3, 8]], xRange: [-6, 6], yRange: [-8, 10] } },
    correctAnswer: "2",
    explanation: "**SAT Pattern: Line from Two Points**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~20s):** The line passes through the marked points $(-3, -4)$ and $(3, 8)$; it rises $12$ over a run of $6$, so the slope is $\\frac{12}{6} = 2$.\n\n**The Full Solution:**\nStep 1: Read two points on the line from the grid: the marked points $(-3, -4)$ and $(3, 8)$.\nStep 2: Slope is the change in $y$ divided by the change in $x$: $\\frac{8 - (-4)}{3 - (-3)} = \\frac{12}{6}$.\nStep 3: That is $2$. Check: from $x = -3$ to $x = 0$ the line rises from $-4$ to $2$, a rise of $6$ over a run of $3$, which is also $2$ ✓\n\n**Common Mistakes:** Dividing the run by the rise gives $\\frac{6}{12} = 0.5$, the reciprocal of the slope. Subtracting the coordinates in opposite orders, as in $\\frac{8 - (-4)}{-3 - 3}$, gives $-2$, the wrong sign for a line that rises from left to right.\n\n**Test Day Takeaway:** Pick two points where the line crosses grid intersections exactly, subtract coordinates in the same order on top and bottom, and confirm the sign against the direction of the line.",
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
    question: "Water is drained from a tank at a constant rate. After $2$ minutes, the tank holds $210$ gallons of water, and after $5$ minutes, it holds $150$ gallons. How many gallons of water does the tank hold after $8$ minutes?",
    correctAnswer: "90",
    explanation: "**SAT Pattern: Line from Two Points**\n\n**The correct answer is $90$.**\n\n**The Fast Way (~20s):** The tank loses $210 - 150 = 60$ gallons in $3$ minutes, or $20$ gallons per minute, so $3$ minutes later it holds $150 - 60 = 90$ gallons.\n\n**The Full Solution:**\nStep 1: Treat the data as two points $(2, 210)$ and $(5, 150)$, with $x$ in minutes and $y$ in gallons. The slope is $\\frac{150 - 210}{5 - 2} = \\frac{-60}{3} = -20$.\nStep 2: Write the line: $y = -20x + b$ with $210 = -20(2) + b$, so $b = 250$ and $y = -20x + 250$.\nStep 3: Evaluate at $x = 8$: $y = -160 + 250 = 90$. Check: at $x = 5$, $-100 + 250 = 150$ ✓\n\n**Common Mistakes:** Dividing the $60$-gallon drop by $2$ minutes instead of $3$ gives a rate of $30$ per minute and $150 - 90 = 60$; reporting the starting amount, $250$, which is the $y$-intercept; using the full $8$ minutes from the $150$-gallon reading gives $150 - 160 = -10$.\n\n**Test Day Takeaway:** For a constant rate, find the change per unit from two data points, then step from the nearest known point to the one you need.",
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
    question: "For the linear function $f$, the table shows three values of $x$ and their corresponding values of $f(x)$. What is the value of $f(12)$?",
    diagram: { type: "table", params: { xHeader: "x", yHeader: "f(x)", rows: [[2, 11], [5, 20], [9, 32]] } },
    correctAnswer: "41",
    explanation: "**SAT Pattern: Line from Two Points**\n\n**The correct answer is $41$.**\n\n**The Fast Way (~30s):** From $(2, 11)$ to $(5, 20)$, $f(x)$ rises $9$ as $x$ rises $3$, so the slope is $3$; from $x = 9$ to $x = 12$ is $3$ more units, giving $32 + 3(3) = 41$.\n\n**The Full Solution:**\nStep 1: Use two rows as points: $(2, 11)$ and $(5, 20)$. The slope is $\\frac{20 - 11}{5 - 2} = \\frac{9}{3} = 3$.\nStep 2: Find the constant: $f(x) = 3x + b$ with $f(2) = 11$ gives $6 + b = 11$, so $b = 5$ and $f(x) = 3x + 5$.\nStep 3: Evaluate: $f(12) = 3(12) + 5 = 41$. Check: $f(9) = 27 + 5 = 32$, matching the third row ✓\n\n**Common Mistakes:** Using $32 - 11 = 21$ as the slope ignores that the $x$-values differ by $7$, not $1$. Adding a single step of $3$ to $f(9)$ gives $35$, which is $f(10)$, because $12$ is three units past $9$, not one.\n\n**Test Day Takeaway:** Get the slope from any two rows, then use one row to pin the constant before evaluating anywhere else.",
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
    question: "Line $k$ in the $xy$-plane has a slope of $-3$ and passes through the point $(2, 9)$. The $x$-intercept of line $k$ is $(a, 0)$. What is the value of $a$?",
    choices: [
      // distractor: makes a sign error solving 0 = -3a + 15, getting a = -5
      { id: "A", text: "$-5$" },
      // distractor: finds the y-intercept as 9 - 6 = 3 instead of 9 + 6, so the line is y = -3x + 3
      { id: "B", text: "$1$" },
      { id: "C", text: "$5$" },
      // distractor: reports the y-intercept, 15, instead of the x-intercept
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The line is $y = -3x + 15$, so setting $y = 0$ gives $3a = 15$ and $a = 5$.\n\n**The Full Solution:**\nStep 1: Find the $y$-intercept: $9 = -3(2) + b$, so $b = 15$ and line $k$ is $y = -3x + 15$.\nStep 2: At the $x$-intercept, $y = 0$: $0 = -3a + 15$.\nStep 3: Solve: $3a = 15$, so $a = 5$. Check: the slope from $(2, 9)$ to $(5, 0)$ is $\\frac{0 - 9}{5 - 2} = -3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): moves $-3a$ across without changing its sign, getting $-3a = 15$ and $a = -5$.\n* Choice B ($1$): computes $b$ as $9 - 6 = 3$, missing that $9 = -6 + b$ means $b = 15$; the line $y = -3x + 3$ then crosses the $x$-axis at $1$.\n* Choice D ($15$): reports $15$, the $y$-intercept of line $k$, instead of the $x$-intercept.\n\n**Test Day Takeaway:** Build $y = mx + b$ from the slope and the point, then set $y = 0$ for the $x$-intercept; set $x = 0$ only for the $y$-intercept.",
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
    question: "Line $p$ in the $xy$-plane passes through the points $(3, -2)$ and $(5, 6)$. Which equation defines line $p$?",
    choices: [
      { id: "A", text: "$y = 4x - 14$" },
      // distractor: forgets to multiply the slope by x = 3, computing b = -2 - 3
      { id: "B", text: "$y = 4x - 5$" },
      // distractor: uses the y-coordinate of the first point, -2, as the y-intercept
      { id: "C", text: "$y = 4x - 2$" },
      // distractor: adds 12 to -2 instead of subtracting, getting b = 10
      { id: "D", text: "$y = 4x + 10$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The slope is $\\frac{6 - (-2)}{5 - 3} = 4$, and $-2 = 4(3) + b$ gives $b = -14$, so $y = 4x - 14$.\n\n**The Full Solution:**\nStep 1: Slope $= \\frac{6 - (-2)}{5 - 3} = \\frac{8}{2} = 4$, so line $p$ can be written $y = 4x + b$.\nStep 2: Substitute the point $(3, -2)$: $-2 = 4(3) + b = 12 + b$, so $b = -14$.\nStep 3: Line $p$ is $y = 4x - 14$. Check with the other point: $4(5) - 14 = 6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = 4x - 5$): computes $b = -2 - 3$, forgetting to multiply the slope by the $x$-coordinate.\n* Choice C ($y = 4x - 2$): uses the $y$-coordinate of $(3, -2)$ as the $y$-intercept, but that point has $x = 3$, not $x = 0$.\n* Choice D ($y = 4x + 10$): adds $12$ to $-2$ instead of subtracting it from $-2$.\n\n**Test Day Takeaway:** Find the slope from the two points, then solve for $b$ with one point and check with the other.",
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
    question: "In the $xy$-plane, line $j$ passes through the points $(-3, 8)$ and $(1, -4)$. The point $(a, a + 7)$ lies on line $j$. What is the value of $a$?",
    correctAnswer: "-2",
    explanation: "**SAT Pattern: Line from Two Points**\n\n**The correct answer is $-2$.**\n\n**The Fast Way (~30s):** Line $j$ has slope $\\frac{-4 - 8}{1 - (-3)} = -3$ and equation $y = -3x - 1$. Then $a + 7 = -3a - 1$, so $4a = -8$ and $a = -2$.\n\n**The Full Solution:**\nStep 1: Slope of line $j$: $\\frac{-4 - 8}{1 - (-3)} = \\frac{-12}{4} = -3$.\nStep 2: Use $(1, -4)$: $-4 = -3(1) + b$, so $b = -1$ and line $j$ is $y = -3x - 1$.\nStep 3: The point $(a, a + 7)$ is on the line, so $a + 7 = -3a - 1$. Then $4a = -8$ and $a = -2$. Check: the point is $(-2, 5)$, and $-3(-2) - 1 = 5$ ✓\n\n**Common Mistakes:**\n* $-5$: uses a slope of $3$ instead of $-3$, so the line is $y = 3x + 17$ and $a + 7 = 3a + 17$.\n* $0$: computes the slope as run over rise, $-\\frac{1}{3}$, so the line is $y = -\\frac{1}{3}x + 7$.\n* $5$: finds the point $(-2, 5)$ and reports its $y$-coordinate, $a + 7$, instead of $a$.\n\n**Test Day Takeaway:** When a point's coordinates are written in terms of one unknown, write the line's equation first, then substitute both coordinates and solve.",
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
    question: "For the linear function $h$, the table shows two values of $x$ and their corresponding values of $h(x)$. What is the value of $h(12) - h(1)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "h(x)"], rows: [["-3", "14"], ["5", "-2"]] } },
    choices: [
      // distractor: uses 12 + 1 = 13 as the change in x instead of 12 - 1 = 11, computing -2(13)
      { id: "A", text: "$-26$" },
      { id: "B", text: "$-22$" },
      // distractor: reports the change in x, 12 - 1 = 11, without multiplying by the slope
      { id: "C", text: "$11$" },
      // distractor: drops the negative sign on the slope, computing 2(11)
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
    question: "$x + y = 41$\n$x - y = 9$\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
    correctAnswer: "16",
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $16$.**\n\n**The Fast Way (~15s):** Subtracting the second equation from the first eliminates $x$: $2y = 32$, so $y = 16$.\n\n**The Full Solution:**\nStep 1: The $x$-terms have the same coefficient, so subtracting the equations removes $x$.\nStep 2: Subtract the second equation from the first: $(x + y) - (x - y) = 41 - 9$, which gives $2y = 32$.\nStep 3: Divide by $2$: $y = 16$. Check: $x = 41 - 16 = 25$, and $25 - 16 = 9$ ✓\n\n**Common Mistakes:** Adding the equations gives $2x = 50$ and the value of $x$, $25$, not $y$; subtracting in the other order gives $-2y = -32$, and dropping a sign there leads to $-16$; stopping at $2y = 32$ and entering $32$.\n\n**Test Day Takeaway:** Add the equations when a variable's coefficients are opposites, subtract when they match, and then answer for the variable the question names.",
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
    question: "$5x + 2y = 32$\n$5x - 2y = 8$\nThe values of $x$ and $y$ satisfy the given system of equations. What is the value of $x$?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~15s):** Adding the equations cancels $y$: $10x = 40$, so $x = 4$.\n\n**The Full Solution:**\nStep 1: The $y$-terms are $2y$ and $-2y$, which are opposites, so adding the equations removes $y$.\nStep 2: Add: $(5x + 2y) + (5x - 2y) = 32 + 8$, which gives $10x = 40$.\nStep 3: Divide by $10$: $x = 4$. Check: $5(4) + 2y = 32$ gives $y = 6$, and $5(4) - 2(6) = 8$ ✓\n\n**Common Mistakes:** Subtracting the equations eliminates $x$ instead and gives $4y = 24$, so $y = 6$, the wrong variable; dividing $40$ by $5$ instead of $10$ gives $8$; stopping at $10x = 40$ and entering $40$.\n\n**Test Day Takeaway:** Opposite coefficients cancel when you add; check which variable is left before you divide.",
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
    question: "The table shows the number of truck loads and tanker loads of water delivered to a farm's storage tanks in March and April, and the total volume delivered each month. Each truck load has the same volume, and each tanker load has the same volume. What is the volume, in kiloliters, of one truck load?",
    questionTable: { headers: ["Month", "Truck loads", "Tanker loads", "Total volume (kL)"], rows: [["March", "4", "3", "121"], ["April", "6", "5", "191"]] },
    choices: [
      { id: "A", text: "$16$" },
      // distractor: reports the tanker-load volume 19 instead of the truck-load volume
      { id: "B", text: "$19$" },
      // distractor: adds the two load volumes, 16 + 19 = 35
      { id: "C", text: "$35$" },
      // distractor: solves for the tanker-load volume first, then stops at 4x = 64 (x = truck-load volume) without dividing by the 4 truck loads
      { id: "D", text: "$64$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice A is correct.**\n\n**The Fast Way (~50s):** With $4x + 3y = 121$ and $6x + 5y = 191$, tripling the first and doubling the second gives $12x + 9y = 363$ and $12x + 10y = 382$; subtracting leaves $y = 19$, so $4x = 121 - 57 = 64$ and $x = 16$.\n\n**The Full Solution:**\nStep 1: Let $x$ be the volume of one truck load and $y$ the volume of one tanker load. The table gives $4x + 3y = 121$ and $6x + 5y = 191$.\nStep 2: Make the $x$-coefficients match. Multiply the first equation by $3$: $12x + 9y = 363$. Multiply the second by $2$: $12x + 10y = 382$.\nStep 3: Subtract: $y = 382 - 363 = 19$. Substitute back: $4x + 3(19) = 121$, so $4x = 64$ and $x = 16$. Check the April row: $6(16) + 5(19) = 96 + 95 = 191$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($19$): solves the system correctly but reports $y$, the tanker-load volume, instead of the truck-load volume the question asks for.\n* Choice C ($35$): adds the two load volumes, $16 + 19 = 35$, as if the question asked for a combined size.\n* Choice D ($64$): stops at $4x = 64$ and reports that product without dividing by the $4$ truck loads.\n\n**Test Day Takeaway:** Scale both equations to a common coefficient before subtracting, and reread the question to see which of the two solved values it wants.",
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
    question: "At a school play, $3$ adult tickets and $4$ student tickets cost \\$38, and $5$ adult tickets and $2$ student tickets cost \\$40. What is the price, in dollars, of one student ticket?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~30s):** Doubling the second purchase gives $10a + 4s = 80$; subtracting $3a + 4s = 38$ leaves $7a = 42$, so $a = 6$ and $4s = 38 - 18 = 20$, making $s = 5$.\n\n**The Full Solution:**\nStep 1: Let $a$ be the price of an adult ticket and $s$ the price of a student ticket, in dollars: $3a + 4s = 38$ and $5a + 2s = 40$.\nStep 2: Multiply the second equation by $2$: $10a + 4s = 80$. Subtract the first equation: $7a = 42$, so $a = 6$.\nStep 3: Substitute into $3a + 4s = 38$: $18 + 4s = 38$, so $4s = 20$ and $s = 5$. Check: $5(6) + 2(5) = 30 + 10 = 40$ ✓\n\n**Common Mistakes:** Reporting $6$, the adult price, instead of the student price; stopping at $4s = 20$ and entering $20$; doubling only the left side of $5a + 2s = 40$, which gives $10a + 4s = 40$ and a negative price.\n\n**Test Day Takeaway:** Scale one equation so a variable's coefficients match, subtract, and then substitute back to get the variable the question asks for.",
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
    question: "The table shows the number of wide risers and narrow risers in two setups for a choir, and the total width of each setup. All wide risers have the same width, and all narrow risers have the same width. What is the width, in inches, of one narrow riser?",
    questionTable: { headers: ["Setup", "Wide risers", "Narrow risers", "Total width (in.)"], rows: [["Concert", "3", "4", "246"], ["Recital", "5", "2", "270"]] },
    choices: [
      { id: "A", text: "$30$" },
      // distractor: reports the wide-riser width 42 instead of the narrow-riser width
      { id: "B", text: "$42$" },
      // distractor: stops at 2n = 60 without dividing by the 2 narrow risers
      { id: "C", text: "$60$" },
      // distractor: adds the two widths, 42 + 30 = 72
      { id: "D", text: "$72$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice A is correct.**\n\n**The Fast Way (~50s):** Doubling the recital row gives $10w + 4n = 540$; subtracting the concert row leaves $7w = 294$, so $w = 42$ and $2n = 270 - 210 = 60$, making $n = 30$.\n\n**The Full Solution:**\nStep 1: Let $w$ be the width of one wide riser and $n$ the width of one narrow riser. The table gives $3w + 4n = 246$ and $5w + 2n = 270$.\nStep 2: Match the $n$-coefficients by doubling the recital equation: $10w + 4n = 540$. Subtracting the concert equation gives $7w = 294$, so $w = 42$.\nStep 3: Substitute back into $5w + 2n = 270$: $210 + 2n = 270$, so $2n = 60$ and $n = 30$. Check the concert row: $3(42) + 4(30) = 126 + 120 = 246$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($42$): solves the system correctly but reports the wide-riser width instead of the narrow one.\n* Choice C ($60$): stops at $2n = 60$ and reports the combined width of the two narrow risers.\n* Choice D ($72$): adds the two solved widths, $42 + 30 = 72$, instead of reporting just the narrow one.\n\n**Test Day Takeaway:** Scale one equation to match a coefficient, subtract, then substitute back, and read the last line of the question before choosing between the two values you now have.",
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
    question: "The table shows the number of day crews and night crews a town used to patch potholes in each of two weeks, and the total number of potholes patched. Crews of the same type each patched the same number of potholes per week. How many potholes did one day crew patch per week?",
    questionTable: { headers: ["Week", "Day crews", "Night crews", "Potholes patched"], rows: [["Week 1", "6", "2", "196"], ["Week 2", "4", "5", "259"]] },
    choices: [
      { id: "A", text: "$21$" },
      // distractor: reports the night-crew total 35 instead of the day-crew total
      { id: "B", text: "$35$" },
      // distractor: adds the two solved rates, 21 + 35 = 56
      { id: "C", text: "$56$" },
      // distractor: stops at 6d = 126 without dividing by the 6 day crews
      { id: "D", text: "$126$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice A is correct.**\n\n**The Fast Way (~55s):** Scaling Week 1 by $5$ and Week 2 by $2$ gives $30d + 10n = 980$ and $8d + 10n = 518$; subtracting leaves $22d = 462$, so $d = 21$.\n\n**The Full Solution:**\nStep 1: Let $d$ be the potholes one day crew patches and $n$ the potholes one night crew patches. The table gives $6d + 2n = 196$ and $4d + 5n = 259$.\nStep 2: Match the $n$-coefficients at $10$: multiply Week 1 by $5$ to get $30d + 10n = 980$, and Week 2 by $2$ to get $8d + 10n = 518$.\nStep 3: Subtract: $22d = 462$, so $d = 21$. Check by finding $n$: $6(21) + 2n = 196$ gives $2n = 70$ and $n = 35$, and $4(21) + 5(35) = 84 + 175 = 259$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($35$): solves the system correctly but reports the night-crew count instead of the day-crew count.\n* Choice C ($56$): adds the two solved rates, $21 + 35 = 56$, as if the question asked for a combined weekly total.\n* Choice D ($126$): stops at $6d = 126$ and reports the six crews' combined output instead of one crew's.\n\n**Test Day Takeaway:** Pick the variable whose coefficients reach a common multiple fastest, eliminate it, and then finish by naming the quantity the question asked for.",
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
    question: "$9x + 4y = 20$\n$5x + 8y = 6$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x - y$?",
    correctAnswer: "7/2",
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $\\frac{7}{2}$.** Note that 7/2 and 3.5 are examples of ways to enter a correct answer.\n\n**The Fast Way (~30s):** Subtracting the second equation from the first gives $4x - 4y = 14$, so $x - y = \\frac{14}{4} = \\frac{7}{2}$.\n\n**The Full Solution:**\nStep 1: The question asks for $x - y$, not for $x$ and $y$ separately. The $x$-coefficients differ by $9 - 5 = 4$ and the $y$-coefficients differ by $4 - 8 = -4$, so subtracting the equations produces a multiple of $x - y$.\nStep 2: Subtract the second equation from the first: $(9x + 4y) - (5x + 8y) = 20 - 6$, which gives $4x - 4y = 14$.\nStep 3: Divide both sides by $4$: $x - y = \\frac{7}{2}$. Check: solving the system fully gives $x = \\frac{34}{13}$ and $y = -\\frac{23}{26}$, and $\\frac{68}{26} + \\frac{23}{26} = \\frac{91}{26} = \\frac{7}{2}$ ✓\n\n**Common Mistakes:**\n* $14$: stops at $4x - 4y = 14$ without dividing by $4$.\n* $\\frac{13}{2}$: subtracts the left sides but adds the constants, getting $4x - 4y = 26$.\n* $\\frac{34}{13}$: solves the whole system and reports $x$ alone instead of $x - y$.\n\n**Test Day Takeaway:** When a system asks for a combination such as $x - y$, try adding or subtracting the equations as given before solving; the combination often appears in one step while $x$ and $y$ themselves are messy fractions.",
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
    question: "$3x + 4y = 2$\n$5x + ky = 16$\nIn the given system of equations, $k$ is a constant. The solution to the system is $(x, y)$, where $x - y = 3$. What is the value of $k$?",
    choices: [
      { id: "A", text: "$-6$" },
      // distractor: reports y = -1, the second coordinate of the solution, instead of k
      { id: "B", text: "$-1$" },
      // distractor: reports x = 2, the first coordinate of the solution, instead of k
      { id: "C", text: "$2$" },
      // distractor: substitutes y = 1 instead of y = -1, solving 10 + k = 16 to get k = 6
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice A is correct.**\n\n**The Fast Way (~50s):** Multiplying $x - y = 3$ by $4$ and adding it to $3x + 4y = 2$ gives $7x = 14$, so $x = 2$ and $y = -1$; then $5(2) + k(-1) = 16$ gives $k = -6$.\n\n**The Full Solution:**\nStep 1: The first equation and the condition $x - y = 3$ contain no unknown constant, so use them to find the solution. Multiply the condition by $4$: $4x - 4y = 12$.\nStep 2: Add this to $3x + 4y = 2$ to eliminate $y$: $7x = 14$, so $x = 2$, and $y = x - 3 = -1$.\nStep 3: Substitute into the second equation: $5(2) + k(-1) = 16$, so $10 - k = 16$ and $k = -6$. Check: $3(2) + 4(-1) = 2$, $5(2) + (-6)(-1) = 16$, and $2 - (-1) = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-1$): reports $y$, the second coordinate of the solution, instead of the constant $k$.\n* Choice C ($2$): reports $x$, the first coordinate of the solution, instead of $k$.\n* Choice D ($6$): substitutes $y = 1$ instead of $y = -1$, solving $10 + k = 16$; the sign of $y$ flips the sign of the answer.\n\n**Test Day Takeaway:** When one equation holds an unknown constant, find $x$ and $y$ from the equations that do not contain it, then substitute that solution into the equation with the constant.",
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
    question: "$3x - y = 5$\n$6x - 2y = 10$\nHow many solutions does the given system of equations have?",
    choices: [
      // distractor: sees the larger coefficients and calls the lines parallel without checking that the constant 5 also doubles to 10
      { id: "A", text: "Zero" },
      // distractor: assumes two equations that look different must have graphs that cross exactly once
      { id: "B", text: "Exactly one" },
      // distractor: two distinct lines meet at most once, so a linear system never has exactly two solutions
      { id: "C", text: "Exactly two" },
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Multiplying $3x - y = 5$ by $2$ gives $6x - 2y = 10$, the second equation, so both equations describe the same line.\n\n**The Full Solution:**\nStep 1: Compare the coefficients: $\\frac{6}{3} = 2$ and $\\frac{-2}{-1} = 2$.\nStep 2: Compare the constants: $\\frac{10}{5} = 2$, the same multiplier.\nStep 3: The second equation is $2$ times the first, so the two equations have the same graph and every point on it is a solution: infinitely many. Check with $(2, 1)$: $3(2) - 1 = 5$ and $6(2) - 2(1) = 10$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): parallel lines need different constants after scaling, but $5$ doubles to exactly $10$, so the lines coincide.\n* Choice B (Exactly one): two equations can look different and still be multiples of each other.\n* Choice C (Exactly two): two lines meet in zero points, one point, or every point, so a linear system never has exactly two solutions.\n\n**Test Day Takeaway:** Two linear equations have infinitely many solutions when one is a constant multiple of the other, constant term included; check all three numbers before deciding.",
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
    question: "$3x - 2y = 5$\n$12x - 8y = c$\nFor what value of $c$ does the given system of equations have infinitely many solutions?",
    correctAnswer: "20",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~15s):** $12x - 8y$ is $4$ times $3x - 2y$, so $c = 4(5) = 20$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has infinitely many solutions when one equation is a multiple of the other, constant included.\nStep 2: Compare the coefficients: $12 = 4(3)$ and $-8 = 4(-2)$, so the second equation must be the first multiplied by $4$.\nStep 3: Then $c = 4(5) = 20$. Check: dividing $12x - 8y = 20$ by $4$ gives $3x - 2y = 5$ ✓\n\n**Common Mistakes:**\n* $5$: assumes equivalent equations keep the same constant.\n* $\\frac{5}{4}$: divides the constant by $4$ instead of multiplying it.\n* $15$: multiplies the constant by $3$, the $x$-coefficient, instead of by the factor $4$.\n\n**Test Day Takeaway:** Infinitely many solutions means one equation is the other times a single factor; read the factor from the coefficients and apply it to the constant.",
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
    question: "The table shows three values of $x$ and their corresponding values of $y$ for line $\\ell$. The system of equations consisting of the equation of line $\\ell$ and $kx - 4y = 20$, where $k$ is a constant, has no solution. What is the value of $k$?",
    questionTable: { headers: ["$x$", "$y$"], rows: [["$1$", "$7$"], ["$3$", "$13$"], ["$5$", "$19$"]] },
    choices: [
      // distractor: keeps the minus sign of -4y with the slope, solving k / (-4) = 3 to get -12
      { id: "A", text: "$-12$" },
      // distractor: reports the slope 3 of line l instead of the coefficient k that produces it
      { id: "B", text: "$3$" },
      // distractor: reports the y-intercept 4 of line l instead of k
      { id: "C", text: "$4$" },
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** Line $\\ell$ has slope $\\frac{13 - 7}{3 - 1} = 3$, and $kx - 4y = 20$ has slope $\\frac{k}{4}$; parallel lines need $\\frac{k}{4} = 3$, so $k = 12$.\n\n**The Full Solution:**\nStep 1: From the table, $y$ rises by $6$ each time $x$ rises by $2$, so line $\\ell$ has slope $3$. Since $(1, 7)$ is on the line, $7 = 3(1) + b$ gives $b = 4$, so line $\\ell$ is $y = 3x + 4$.\nStep 2: Solve $kx - 4y = 20$ for $y$: $y = \\frac{k}{4}x - 5$, so its slope is $\\frac{k}{4}$ and its $y$-intercept is $-5$.\nStep 3: No solution means the lines are parallel and distinct: $\\frac{k}{4} = 3$ gives $k = 12$, and the $y$-intercepts $4$ and $-5$ differ. Check: $12x - 4y = 20$ is $y = 3x - 5$, which never meets $y = 3x + 4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): keeps the minus sign of $-4y$ when finding the slope; solving for $y$ divides by $-4$, which makes the slope $\\frac{k}{4}$, not $-\\frac{k}{4}$.\n* Choice B ($3$): reports the slope of line $\\ell$ rather than the coefficient $k$ that gives the second line that slope.\n* Choice C ($4$): reports the $y$-intercept of line $\\ell$, which plays no role in making the lines parallel.\n\n**Test Day Takeaway:** For no solution, write both lines in slope-intercept form, set the slopes equal, and confirm the intercepts differ.",
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
    question: "$4x - 10y = 9$\n$ax + 15y = 2$\nIn the given system of equations, $a$ is a constant. For what value of $a$ does the system have no solution?",
    correctAnswer: "-6",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**The correct answer is $-6$.**\n\n**The Fast Way (~30s):** No solution requires proportional $x$- and $y$-coefficients: $\\frac{a}{4} = \\frac{15}{-10}$, so $a = -6$.\n\n**The Full Solution:**\nStep 1: The system has no solution when the two lines are parallel and distinct, which happens when the $x$- and $y$-coefficients are in the same ratio but the constants are not.\nStep 2: The $y$-coefficients have ratio $\\frac{15}{-10} = -\\frac{3}{2}$, so $\\frac{a}{4} = -\\frac{3}{2}$ and $a = -6$.\nStep 3: Check the constants: multiplying the first equation by $-\\frac{3}{2}$ gives $-6x + 15y = -\\frac{27}{2}$, and $-\\frac{27}{2} \\ne 2$, so the lines are parallel and distinct ✓\n\n**Common Mistakes:**\n* $6$: drops the negative sign of $-10y$, solving $\\frac{a}{4} = \\frac{15}{10}$.\n* $-\\frac{8}{3}$: pairs the coefficients the wrong way, solving $\\frac{a}{4} = \\frac{-10}{15}$.\n* $\\frac{8}{9}$: matches the constants, solving $\\frac{a}{4} = \\frac{2}{9}$, instead of matching the $y$-coefficients.\n\n**Test Day Takeaway:** No solution means equal coefficient ratios with a different constant ratio; find the constant from the $y$-coefficients, then confirm the constants do not follow the same ratio.",
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
    question: "The graph of one equation in a system of two linear equations is shown. The system has no solution. Which equation could be the second equation in this system?",
    diagram: { type: "linearGraph", params: { slope: -0.6666667, yIntercept: 6, xRange: [-3, 9], yRange: [-2, 10], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 6], [3, 4]] } },
    choices: [
      // distractor: doubles the graphed equation exactly, so the two graphs coincide and the system has infinitely many solutions
      { id: "A", text: "$4x + 6y = 36$" },
      { id: "B", text: "$4x + 6y = 30$" },
      // distractor: flips the sign of the y-term, giving slope 2/3, so the lines cross once
      { id: "C", text: "$4x - 6y = 30$" },
      // distractor: swaps the x- and y-coefficients, giving slope -3/2, so the lines cross once
      { id: "D", text: "$6x + 4y = 30$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The line passes through $(0, 6)$ and $(3, 4)$, so it is $2x + 3y = 18$; the second line must keep the coefficients in the ratio $2 : 3$ with a different constant, and $4x + 6y = 30$ does.\n\n**The Full Solution:**\nStep 1: The graph passes through $(0, 6)$ and $(3, 4)$, so its slope is $\\frac{4 - 6}{3 - 0} = -\\frac{2}{3}$ and its $y$-intercept is $6$: $y = -\\frac{2}{3}x + 6$, or $2x + 3y = 18$.\nStep 2: No solution means the second line is parallel to this one, with slope $-\\frac{2}{3}$, and has a different $y$-intercept. Choice B, $4x + 6y = 30$, is $y = -\\frac{2}{3}x + 5$.\nStep 3: Same slope, different intercept, so the lines never meet. Check: dividing $4x + 6y = 30$ by $2$ gives $2x + 3y = 15$, which has the same left side as $2x + 3y = 18$ but a different constant ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4x + 6y = 36$): is $2x + 3y = 18$ multiplied by $2$, so it is the same line and the system has infinitely many solutions.\n* Choice C ($4x - 6y = 30$): has slope $\\frac{2}{3}$, so its graph crosses the graphed line once.\n* Choice D ($6x + 4y = 30$): has slope $-\\frac{3}{2}$, so its graph also crosses the graphed line once.\n\n**Test Day Takeaway:** Read the line's equation from two clear points, then look for a choice with the same coefficient ratio and a constant that is not the same multiple.",
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
    question: "$mx + 7y = n$\n$6x + 21y = 45$\nIn the given system of equations, $m$ and $n$ are constants. The system has infinitely many solutions. What is the value of $m + n$?",
    correctAnswer: "17",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**The correct answer is $17$.**\n\n**The Fast Way (~30s):** $21 = 3(7)$, so the second equation is $3$ times the first: $3m = 6$ and $3n = 45$, giving $m = 2$, $n = 15$, and $m + n = 17$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the two equations are multiples of each other, so every coefficient and the constant scale by one factor.\nStep 2: The $y$-coefficients give the factor: $21 \\div 7 = 3$. So $3m = 6$ and $3n = 45$.\nStep 3: Then $m = 2$ and $n = 15$, so $m + n = 17$. Check: multiplying $2x + 7y = 15$ by $3$ gives $6x + 21y = 45$ ✓\n\n**Common Mistakes:**\n* $153$: multiplies by $3$ instead of dividing, taking $m = 18$ and $n = 135$.\n* $47$: finds $m = 2$ but keeps $n = 45$, as if the constant did not scale.\n* $2$: finds $m = 2$ and stops, reporting $m$ instead of $m + n$.\n\n**Test Day Takeaway:** In a system with infinitely many solutions, find the scale factor from the one pair of matching coefficients you know, then divide or multiply every other term by it.",
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
    question: "$\\frac{3}{4}x - \\frac{1}{2}y = 2$\n$ax + by = 16$\nIn the given system of equations, $a$ and $b$ are constants. If the system has infinitely many solutions, what is the value of $a + b$?",
    choices: [
      // distractor: computes b - a = -4 - 6 = -10 instead of a + b
      { id: "A", text: "$-10$" },
      // distractor: clears the fractions by multiplying by 4, taking a = 3 and b = -2 without matching the constant 16
      { id: "B", text: "$1$" },
      { id: "C", text: "$2$" },
      // distractor: drops the minus sign on b, adding 6 + 4
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** The constants fix the multiplier: $16 \\div 2 = 8$, so $a = 8 \\cdot \\frac{3}{4} = 6$, $b = 8 \\cdot \\left(-\\frac{1}{2}\\right) = -4$, and $a + b = 2$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the second equation is the first multiplied by a single number, constant included.\nStep 2: The constants are $2$ and $16$, so that number is $16 \\div 2 = 8$.\nStep 3: Then $a = 8 \\cdot \\frac{3}{4} = 6$ and $b = 8 \\cdot \\left(-\\frac{1}{2}\\right) = -4$, so $a + b = 2$. Check: dividing $6x - 4y = 16$ by $8$ gives $\\frac{3}{4}x - \\frac{1}{2}y = 2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-10$): computes $b - a = -4 - 6$ instead of $a + b$.\n* Choice B ($1$): clears the fractions by multiplying by $4$, giving $3x - 2y = 8$, and takes $a = 3$ and $b = -2$; the constant $8$ does not match $16$, so that factor is wrong.\n* Choice D ($10$): drops the minus sign on $b$ and adds $6 + 4$.\n\n**Test Day Takeaway:** When the unknowns are coefficients, use the term you can compare, here the constants, to find the scale factor; clearing fractions is not the same as matching the other equation.",
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
    question: "$3x - ay = 6$\n$ax - 12y = 12$\nIn the given system of equations, $a$ is a constant. If the system has no solution, what is the value of $a$?",
    correctAnswer: "-6",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**The correct answer is $-6$.**\n\n**The Fast Way (~60s):** Proportional coefficients need $\\frac{3}{a} = \\frac{-a}{-12}$, so $a^{2} = 36$; $a = 6$ makes the second equation exactly twice the first, so the no-solution value is $a = -6$.\n\n**The Full Solution:**\nStep 1: No solution requires the $x$- and $y$-coefficients to be proportional while the constants are not. Setting $\\frac{3}{a} = \\frac{-a}{-12}$ gives $a^{2} = 36$, so $a = 6$ or $a = -6$.\nStep 2: Test $a = 6$: the equations are $3x - 6y = 6$ and $6x - 12y = 12$. The second is exactly twice the first, so the system has infinitely many solutions, not zero.\nStep 3: Test $a = -6$: the equations are $3x + 6y = 6$ and $-6x - 12y = 12$. Multiplying the first by $-2$ gives $-6x - 12y = -12$, the same left side with constant $-12 \\ne 12$, so the lines are parallel and distinct ✓\n\n**Common Mistakes:**\n* $6$: takes the positive root of $a^{2} = 36$ without testing it; that value makes the equations equivalent, giving infinitely many solutions.\n* $36$: reports $a^{2}$ instead of $a$.\n* $2$: matches the constants, $\\frac{6}{12} = \\frac{1}{2}$, and solves $\\frac{3}{a} = \\frac{1}{2}$ as if constants decided the slope.\n\n**Test Day Takeaway:** When the constant appears in two coefficients, the ratio condition can have two roots; test each one, because one root may give the same line instead of parallel lines.",
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
    question: "The graph shows the total cost $y$, in dollars, of renting a bike for $x$ hours. What is the total cost, in dollars, of renting a bike for $6$ hours?",
    diagram: { type: "linearGraph", params: { slope: 3, yIntercept: 2, xRange: [0, 8], yRange: [0, 28], xTickInterval: 2, yTickInterval: 4, gridInterval: 2, showPoints: [[0, 2], [2, 8]] } },
    choices: [
      // distractor: reports the cost at x = 0 instead of the cost at x = 6
      { id: "A", text: "$2$" },
      // distractor: reports the number of hours, 6, instead of the cost
      { id: "B", text: "$6$" },
      // distractor: reads the cost at x = 4 instead of x = 6
      { id: "C", text: "$14$" },
      { id: "D", text: "$20$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The line passes through $(0, 2)$ and $(2, 8)$, so the cost rises $3$ dollars per hour; at $x = 6$ the cost is $2 + 3(6) = 20$.\n\n**The Full Solution:**\nStep 1: Read two points from the graph: $(0, 2)$ and $(2, 8)$. The slope is $\\frac{8 - 2}{2 - 0} = 3$.\nStep 2: So the line is $y = 3x + 2$.\nStep 3: At $x = 6$: $y = 3(6) + 2 = 20$. Check: on the graph, the point above $x = 6$ is level with $20$ on the $y$-axis ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports the cost at $x = 0$, where the line starts, instead of the cost at $x = 6$.\n* Choice B ($6$): reports the number of hours given in the question rather than the cost.\n* Choice C ($14$): reads the line at $x = 4$ instead of $x = 6$.\n\n**Test Day Takeaway:** To evaluate from a graph, find the input on the $x$-axis and read the height of the line there; if the point is hard to read, write the line's equation from two clear points.",
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
    question: "In the $xy$-plane, the graph of $y = h(x)$ is shown, where $h$ is a linear function. What is the value of $h(4)$?",
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
    question: "The table shows four values of $x$ and their corresponding values of $f(x)$ for the linear function $f$. What is the value of $f(12)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["0", "9"], ["2", "21"], ["4", "33"], ["6", "45"]] } },
    choices: [
      // distractor: adds 9 to f(6), extending the table by one row instead of six units of x
      { id: "A", text: "$54$" },
      // distractor: multiplies the rate 6 by 12 and drops the starting value 9
      { id: "B", text: "$72$" },
      { id: "C", text: "$81$" },
      // distractor: doubles f(6), treating f as proportional
      { id: "D", text: "$90$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $f(x)$ rises $12$ for every $2$ in $x$, so $f(x) = 6x + 9$ and $f(12) = 6(12) + 9 = 81$.\n\n**The Full Solution:**\nStep 1: From the table, each increase of $2$ in $x$ raises $f(x)$ by $12$, so the slope is $6$. Since $f(0) = 9$, the $y$-intercept is $9$.\nStep 2: So $f(x) = 6x + 9$.\nStep 3: Evaluate: $f(12) = 6(12) + 9 = 72 + 9 = 81$. Check: $f(6) = 45$, and six more units of $x$ add $6(6) = 36$, giving $45 + 36 = 81$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($54$): adds $9$ to $f(6) = 45$, as if going from $x = 6$ to $x = 12$ were one step of the table.\n* Choice B ($72$): computes $6(12)$ and leaves out the starting value $9$.\n* Choice D ($90$): doubles $f(6) = 45$; a linear function with a nonzero intercept is not proportional, so doubling $x$ does not double $f(x)$.\n\n**Test Day Takeaway:** From a table, find the slope from any two rows and the intercept from the $x = 0$ row, then evaluate the rule; do not double or extend the table by eye.",
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
    question: "The function $f$ is defined by $f(x) = \\frac{5x + 7}{3}$. If $f(a) = 19$, what is the value of $a$?",
    correctAnswer: "10",
    explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~25s):** Set $\\frac{5a + 7}{3} = 19$: then $5a + 7 = 57$, $5a = 50$, and $a = 10$.\n\n**The Full Solution:**\nStep 1: $f(a) = 19$ means the output is $19$ when the input is $a$: $\\frac{5a + 7}{3} = 19$.\nStep 2: Multiply both sides by $3$: $5a + 7 = 57$, so $5a = 50$.\nStep 3: Divide by $5$: $a = 10$. Check: $f(10) = \\frac{5(10) + 7}{3} = \\frac{57}{3} = 19$ ✓\n\n**Common Mistakes:**\n* $34$: computes $f(19) = \\frac{102}{3}$ instead of solving $f(a) = 19$.\n* $\\frac{12}{5}$: sets $5a + 7 = 19$, forgetting to multiply by the denominator $3$.\n* $\\frac{64}{5}$: multiplies by $3$ but adds $7$ instead of subtracting it, getting $5a = 64$.\n\n**Test Day Takeaway:** When the output is given and the input is unknown, set the rule equal to the output and solve; evaluating the function at the given number answers a different question.",
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
    question: "The function $N(t) = 62 - 4t$ gives the number of available spaces in a parking garage $t$ hours after 7 a.m. on a weekday. Which of the following is the best interpretation of $N(9) = 26$?",
    choices: [
      // distractor: swaps the input and the output
      { id: "A", text: "$26$ hours after 7 a.m., $9$ parking spaces are available." },
      // distractor: reads the output as the change in spaces rather than the count
      { id: "B", text: "The number of available spaces drops by $26$ during the first nine hours." },
      // distractor: reads N(9) as the value at t = 0
      { id: "C", text: "At 7 a.m., $26$ parking spaces are available." },
      { id: "D", text: "Nine hours after 7 a.m., $26$ parking spaces are available." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** In $N(t)$ the input $t$ is hours after 7 a.m. and the output is the number of spaces, so $N(9) = 26$ means $26$ spaces nine hours in.\n\n**The Full Solution:**\nStep 1: The model names its variables: $t$ counts hours after 7 a.m., and $N(t)$ counts available spaces.\nStep 2: In the statement $N(9) = 26$, the $9$ sits in the input slot and the $26$ is the output.\nStep 3: So nine hours after 7 a.m. there are $26$ spaces available. Check: $N(9) = 62 - 4(9) = 62 - 36 = 26$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$ spaces at $26$ hours): swaps the input and the output.\n* Choice B (a drop of $26$): reads the output as the change in spaces; the actual drop over nine hours is $62 - 26 = 36$.\n* Choice C ($26$ spaces at 7 a.m.): reads $N(9)$ as the value at $t = 0$, which is $62$.\n\n**Test Day Takeaway:** In $N(a) = b$, the number inside the parentheses is always the input and the number after the equals sign is always the output.",
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
    question: "For the linear function $g$, the table shows three values of $x$ and their corresponding values of $g(x)$. For what value of $x$ is $g(x) = 62$?",
    questionTable: { headers: ["$x$", "$g(x)$"], rows: [["$2$", "$11$"], ["$5$", "$20$"], ["$8$", "$29$"]] },
    correctAnswer: "19",
    explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $19$.**\n\n**The Fast Way (~35s):** $g$ rises $9$ for every $3$ in $x$, so $g(x) = 3x + 5$; then $3x + 5 = 62$ gives $x = 19$.\n\n**The Full Solution:**\nStep 1: From the table, an increase of $3$ in $x$ raises $g(x)$ by $9$, so the slope is $3$. Using $(2, 11)$: $11 = 3(2) + b$, so $b = 5$ and $g(x) = 3x + 5$.\nStep 2: Set the output equal to $62$: $3x + 5 = 62$, so $3x = 57$.\nStep 3: Divide by $3$: $x = 19$. Check: $g(19) = 3(19) + 5 = 57 + 5 = 62$ ✓\n\n**Common Mistakes:**\n* $191$: evaluates $g(62) = 3(62) + 5$ instead of solving $g(x) = 62$.\n* $57$: stops at $3x = 57$ without dividing by $3$.\n* $\\frac{62}{3}$: leaves out the intercept and solves $3x = 62$.\n\n**Test Day Takeaway:** A table of a linear function gives the slope from any two rows; write the rule, then decide whether the question gives the input or the output.",
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
    question: "The function $f$ is defined by $f(x) = \\frac{x}{3} + k$, where $k$ is a constant. If $f(k) = 8$, what is the value of $f(3k)$?",
    choices: [
      // distractor: reports the constant k = 6 instead of evaluating f at 3k
      { id: "A", text: "$6$" },
      { id: "B", text: "$12$" },
      // distractor: triples the output, treating f(3k) as 3f(k) = 3(8) = 24
      { id: "C", text: "$24$" },
      // distractor: drops the +k when solving f(k) = 8, getting k = 24, then computes f(72) = 24 + 24 = 48
      { id: "D", text: "$48$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** $f(k) = \\frac{k}{3} + k = \\frac{4k}{3} = 8$, so $k = 6$; then $f(18) = 6 + 6 = 12$.\n\n**The Full Solution:**\nStep 1: Substitute $k$ for $x$: $f(k) = \\frac{k}{3} + k = \\frac{4k}{3}$, and this equals $8$.\nStep 2: Solve: $4k = 24$, so $k = 6$, and $f(x) = \\frac{x}{3} + 6$.\nStep 3: Evaluate at $3k = 18$: $f(18) = \\frac{18}{3} + 6 = 12$. Check: $f(6) = 2 + 6 = 8$, matching $f(k) = 8$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): stops after finding $k$ and never evaluates $f(3k)$.\n* Choice C ($24$): treats $f(3k)$ as $3f(k)$; tripling the input of a function with a constant term does not triple the output.\n* Choice D ($48$): drops the $+k$ when solving $f(k) = 8$, getting $\\frac{k}{3} = 8$ and $k = 24$, then evaluates $f(72) = 24 + 24$.\n\n**Test Day Takeaway:** When a constant appears both in the rule and in the input, substitute it everywhere $x$ appears, solve for the constant, and only then evaluate the requested input.",
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
    question: "For the linear function $f$, $f(0) = 40$ and $f(9) - f(4) = 35$. What is the value of $f(20)$?",
    correctAnswer: "180",
    explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $180$.**\n\n**The Fast Way (~40s):** Five units of $x$ change $f$ by $35$, so the slope is $7$; then $f(20) = 40 + 7(20) = 180$.\n\n**The Full Solution:**\nStep 1: Write $f(x) = mx + 40$, since $f(0) = 40$ is the $y$-intercept.\nStep 2: Then $f(9) - f(4) = (9m + 40) - (4m + 40) = 5m$, so $5m = 35$ and $m = 7$.\nStep 3: Evaluate: $f(20) = 7(20) + 40 = 180$. Check: $f(9) = 103$ and $f(4) = 68$, and $103 - 68 = 35$ ✓\n\n**Common Mistakes:**\n* $140$: finds the slope $7$ but leaves out the intercept, computing $7(20)$.\n* $740$: treats $35$ as the slope, computing $35(20) + 40$.\n* $\\frac{1060}{9}$: divides $35$ by $9$ instead of by $9 - 4 = 5$, using a slope of $\\frac{35}{9}$.\n\n**Test Day Takeaway:** A difference of two outputs of a linear function equals the slope times the difference of the inputs; divide by the gap in $x$, not by either input alone.",
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
    question: "The graph shows the depth $y$, in inches, of the water in a bathtub $x$ minutes after the tub began draining. What is the best interpretation of the slope of the graph in this context?",
    diagram: { type: "linearGraph", params: { slope: -2, yIntercept: 12, xRange: [0, 7], yRange: [0, 14], xTickInterval: 1, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 12], [6, 0]] } },
    choices: [
      // distractor: uses the y-intercept (12) as the rate
      { id: "A", text: "The depth of the water decreases by $12$ inches each minute." },
      { id: "B", text: "The depth of the water decreases by $2$ inches each minute." },
      // distractor: reads the slope as the starting depth
      { id: "C", text: "The depth of the water was $2$ inches when the tub began draining." },
      // distractor: uses the x-intercept (6 minutes) as the rate
      { id: "D", text: "The depth of the water decreases by $6$ inches each minute." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The line drops from $(0, 12)$ to $(6, 0)$: a fall of $12$ inches over $6$ minutes, so the slope is $-2$, a decrease of $2$ inches each minute.\n\n**The Full Solution:**\nStep 1: Slope $= \\frac{\\text{change in } y}{\\text{change in } x} = \\frac{0 - 12}{6 - 0} = -2$.\nStep 2: The slope's units are the units of $y$ per unit of $x$: inches per minute. The negative sign means the depth is decreasing.\nStep 3: So each minute, the depth of the water decreases by $2$ inches. Check on the graph: moving right $1$ unit moves the line down $2$ units ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: uses $12$, the starting depth (the $y$-intercept), as if it were the rate.\n* Choice C: describes the slope's number $2$ as a starting depth; the starting depth is $12$ inches.\n* Choice D: uses $6$, the number of minutes until the tub is empty (the $x$-intercept), as the rate.\n\n**Test Day Takeaway:** Slope is the change in $y$ for each one-unit increase in $x$; name the units of each axis and then describe the slope as that many $y$-units for each one unit of $x$.",
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
    question: "The function $C(k) = 0.12k + 18$ gives the monthly cost, in dollars, of electricity for an apartment that uses $k$ kilowatt-hours of electricity in a month. What is the best interpretation of $0.12$ in this context?",
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
    question: "The table shows the volume $V$, in cubic meters, of water in a reservoir $d$ days after a gate was opened. There is a linear relationship between $d$ and $V$. By how many cubic meters does the volume of water decrease each day?",
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
    question: "The graph shows the total cost $y$, in hundreds of dollars, of renting a hall for $x$ hours. By how many dollars does the total cost increase for each additional hour?",
    diagram: { type: "linearGraph", params: { slope: 2, yIntercept: 6, xRange: [0, 12], yRange: [0, 32], xTickInterval: 2, yTickInterval: 4, gridInterval: 2, showPoints: [[0, 6], [4, 14]] } },
    choices: [
      // distractor: reads the slope 2 from the graph but ignores that y is in hundreds of dollars
      { id: "A", text: "$2$" },
      { id: "B", text: "$200$" },
      // distractor: uses the y-intercept, a 600-dollar starting cost, as the hourly rate
      { id: "C", text: "$600$" },
      // distractor: reports the total cost for 1 hour, 6 + 2 = 8 hundred dollars, instead of the increase per hour
      { id: "D", text: "$800$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The line rises $2$ units of $y$ for each hour, and each unit of $y$ is $\\$100$, so the cost increases by $2(100) = 200$ dollars per hour.\n\n**The Full Solution:**\nStep 1: Read two points from the graph: $(0, 6)$ and $(4, 14)$. The slope is $\\frac{14 - 6}{4 - 0} = 2$.\nStep 2: The slope means $y$ increases by $2$ for each additional hour, and $y$ is measured in hundreds of dollars.\nStep 3: Convert: $2$ hundred dollars is $200$ dollars per hour. Check: from $x = 0$ to $x = 10$ the graph rises from $6$ to $26$, or from $\\$600$ to $\\$2{,}600$, which is $\\$2{,}000$ over $10$ hours ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reads the slope correctly but forgets that $y$ is measured in hundreds of dollars.\n* Choice C ($600$): uses the $y$-intercept, the cost at $0$ hours, as the hourly rate.\n* Choice D ($800$): reports the total cost of renting for $1$ hour, $6 + 2 = 8$ hundred dollars, rather than the increase per hour.\n\n**Test Day Takeaway:** Before answering a slope question, check the axis units; a slope of $2$ on an axis measured in hundreds means $200$.",
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
    question: "The function $M(w) = 6 + 31.5w$ gives the estimated mass, in grams, of a young rat $w$ weeks after birth. According to the model, by how many grams does the estimated mass increase each day?",
    choices: [
      { id: "A", text: "$4.5$" },
      // distractor: uses the constant 6, the estimated mass at birth, as the rate
      { id: "B", text: "$6$" },
      // distractor: reports the weekly increase 31.5 without converting weeks to days
      { id: "C", text: "$31.5$" },
      // distractor: computes M(1) = 37.5, the estimated mass after one week, instead of a rate
      { id: "D", text: "$37.5$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The slope $31.5$ is grams per week, and a week has $7$ days, so the mass increases by $\\frac{31.5}{7} = 4.5$ grams each day.\n\n**The Full Solution:**\nStep 1: In $M(w) = 6 + 31.5w$, the coefficient of $w$ is the slope: the estimated mass increases by $31.5$ grams for each week.\nStep 2: The question asks for the increase each day, and $1$ week $= 7$ days.\nStep 3: Divide: $\\frac{31.5}{7} = 4.5$ grams per day. Check: $7(4.5) = 31.5$ grams per week ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): uses the constant term, the estimated mass at birth, as if it were the rate.\n* Choice C ($31.5$): reports the increase per week without converting to days.\n* Choice D ($37.5$): computes $M(1) = 6 + 31.5$, the estimated mass after one week, which is an amount, not a rate.\n\n**Test Day Takeaway:** The slope carries the units of the input; when the question asks about a different unit of time, convert the slope before answering.",
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
    question: "The graph shows a linear model of the population $y$, in thousands, of a town $x$ years after 2010. Which of the following is the best interpretation of the slope of the graph?",
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
    explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** From $(0, 24)$ to $(5, 34)$ the line rises $10$ over $5$ years: slope $2$. But $y$ is in thousands, so the population grows by $2 \\times 1{,}000 = 2{,}000$ people per year.\n\n**The Full Solution:**\nStep 1: Slope $= \\frac{34 - 24}{5 - 0} = 2$, in units of \"thousands of people per year.\"\nStep 2: Convert the units: $2$ thousand people per year is $2{,}000$ people per year.\nStep 3: Check: over $10$ years the model predicts $24 + 2(10) = 44$ thousand, an increase of $20{,}000$ people, which is $2{,}000$ per year. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: reads the slope as $2$ people, ignoring that the $y$-axis is measured in thousands.\n* Choice C: uses the slope's number as a starting population; the 2010 population is the intercept, $24{,}000$.\n* Choice D: uses the intercept, $24$ thousand, as though it were the yearly change.\n\n**Test Day Takeaway:** Read the axis label before interpreting a slope. \"In thousands\" multiplies every $y$-value, including the slope, by $1{,}000$.",
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
    question: "The function $V(t) = 25{,}000 - 2{,}000t$ gives the estimated value, in dollars, of a machine $t$ years after it was purchased. Each year, the estimated value decreases by $p\\%$ of the purchase price. What is the value of $p$?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~15s):** The yearly decrease is $2{,}000$ dollars and the purchase price is $V(0) = 25{,}000$ dollars, so $p = \\frac{2{,}000}{25{,}000} \\times 100 = 8$.\n\n**The Full Solution:**\nStep 1: The purchase price is $V(0) = 25{,}000$ dollars. The slope $-2{,}000$ means the value drops $2{,}000$ dollars each year.\nStep 2: Write the yearly drop as a fraction of the purchase price: $\\frac{2{,}000}{25{,}000} = 0.08$.\nStep 3: Convert to a percent: $0.08 \\times 100 = 8$. Check: $8\\%$ of $25{,}000$ is $0.08 \\times 25{,}000 = 2{,}000$ ✓\n\n**Common Mistakes:**\n* $2000$: enters the dollar decrease each year, not the percent.\n* $0.08$: enters the decimal fraction instead of the number $p$ in $p\\%$.\n* $12.5$: divides the other way, $25{,}000 \\div 2{,}000$.\n\n**Test Day Takeaway:** The slope is the yearly change and the intercept is the starting value; divide the slope's size by the starting value to get the percent of the starting value.",
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
    question: "The graphs of $y = 2x - 1$ and $y = -x + 8$ are shown in the $xy$-plane. If $(x, y)$ is the solution to the system of these two equations, what is the value of $y$?",
    diagram: { type: "twoLineGraph", params: { intersection: { x: 3, y: 5 }, slope1: 2, slope2: -1, xRange: [-1, 6], yRange: [-4, 12], showIntersection: false, xTickInterval: 2, yTickInterval: 2, gridInterval: 1 } },
    choices: [
      // distractor: reports the x-coordinate 3 of the intersection point instead of y
      { id: "A", text: "$3$" },
      { id: "B", text: "$5$" },
      // distractor: reports the y-intercept 8 of the second line
      { id: "C", text: "$8$" },
      // distractor: moves -x to the left side without changing its sign, solving x = 9, then y = 2(9) - 1 = 17
      { id: "D", text: "$17$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Set $2x - 1 = -x + 8$: $3x = 9$, so $x = 3$ and $y = 2(3) - 1 = 5$.\n\n**The Full Solution:**\nStep 1: Both equations give $y$, so substitute the first into the second: $2x - 1 = -x + 8$.\nStep 2: Add $x$ and $1$ to both sides: $3x = 9$, so $x = 3$.\nStep 3: Substitute back: $y = 2(3) - 1 = 5$. Check: $-3 + 8 = 5$, and the graphs cross at $(3, 5)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports $x$, the first coordinate of the solution, instead of $y$.\n* Choice C ($8$): reports the $y$-intercept of $y = -x + 8$, where that line meets the $y$-axis, not the other line.\n* Choice D ($17$): moves $-x$ to the left side without changing its sign, getting $2x - x = 8 + 1$, so $x = 9$ and $y = 2(9) - 1 = 17$.\n\n**Test Day Takeaway:** The solution of a system is the intersection point; answer with the coordinate the question asks for, and confirm it on the graph.",
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
    question: "If $y = 5x$ and $x + y = 42$, what is the value of $y$?",
    correctAnswer: "35",
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $35$.**\n\n**The Fast Way (~15s):** Substitute $5x$ for $y$: $x + 5x = 42$, so $6x = 42$, $x = 7$, and $y = 35$.\n\n**The Full Solution:**\nStep 1: Replace $y$ in the second equation with $5x$: $x + 5x = 42$.\nStep 2: Combine like terms: $6x = 42$, so $x = 7$.\nStep 3: Then $y = 5(7) = 35$. Check: $7 + 35 = 42$ ✓\n\n**Common Mistakes:**\n* $7$: reports $x$ instead of $y$.\n* $8.4$: solves $5x = 42$, leaving out the $x$ term, and reports that value.\n* $210$: multiplies $42$ by $5$ instead of solving the system.\n\n**Test Day Takeaway:** After solving for one variable, reread the question and substitute back if it asks for the other.",
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
    question: "$x = 3y - 7$\n$2x + 5y = 30$\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
    choices: [
      // distractor: changes the sign of the 7 when substituting, writing 2(3y + 7) + 5y = 30 and getting 11y = 16
      { id: "A", text: "$\\frac{16}{11}$" },
      // distractor: multiplies only 3y by 2, writing 6y - 7 + 5y = 30 and getting 11y = 37
      { id: "B", text: "$\\frac{37}{11}$" },
      { id: "C", text: "$4$" },
      // distractor: reports x = 5, the other coordinate of the solution, instead of y
      { id: "D", text: "$5$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Substitute $3y - 7$ for $x$: $2(3y - 7) + 5y = 30$, so $11y - 14 = 30$ and $y = 4$.\n\n**The Full Solution:**\nStep 1: Replace $x$ in the second equation with $3y - 7$: $2(3y - 7) + 5y = 30$.\nStep 2: Distribute and combine: $6y - 14 + 5y = 30$, so $11y = 44$.\nStep 3: Divide: $y = 4$, and then $x = 3(4) - 7 = 5$. Check: $2(5) + 5(4) = 10 + 20 = 30$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{16}{11}$): changes the sign of the $7$ during substitution, writing $2(3y + 7) + 5y = 30$, which gives $11y = 16$.\n* Choice B ($\\frac{37}{11}$): distributes the $2$ to $3y$ only, writing $6y - 7 + 5y = 30$, which gives $11y = 37$.\n* Choice D ($5$): finds $x = 5$ and reports it instead of $y$.\n\n**Test Day Takeaway:** Put the substituted expression in parentheses so the coefficient multiplies every term, then answer for the variable the question names.",
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
    question: "A ferry charges $\\$9$ for each adult ticket and $\\$5$ for each child ticket. A group of $14$ people paid a total of $\\$102$ for tickets. How many children were in the group?",
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
    question: "The equations $w = 90 - 4t$ and $w = 6t + 20$ give the number of gallons of water in tank A and in tank B, respectively, $t$ minutes after noon. Which statement is the best interpretation of the solution to this system?",
    choices: [
      { id: "A", text: "After $7$ minutes, each tank holds $62$ gallons of water." },
      // distractor: adds the constants instead of subtracting them, solving 10t = 110 to get t = 11, and then w = 6(11) + 20 = 86
      { id: "B", text: "After $11$ minutes, each tank holds $86$ gallons of water." },
      // distractor: reads the shared value 62 as a combined total rather than the amount in each tank
      { id: "C", text: "After $7$ minutes, the two tanks together hold $62$ gallons of water." },
      // distractor: swaps the coordinates, reading the amount of water as the number of minutes
      { id: "D", text: "After $62$ minutes, each tank holds $7$ gallons of water." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** Setting $90 - 4t = 6t + 20$ gives $t = 7$ and $w = 62$: after $7$ minutes, the two tanks hold the same amount, $62$ gallons each.\n\n**The Full Solution:**\nStep 1: Both equations give $w$, so set them equal: $90 - 4t = 6t + 20$.\nStep 2: Solve: $70 = 10t$, so $t = 7$, and $w = 90 - 4(7) = 62$.\nStep 3: The solution $(7, 62)$ is the time at which both equations give the same amount of water: after $7$ minutes, each tank holds $62$ gallons. Check: $6(7) + 20 = 62$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: adds $20$ to $90$ instead of subtracting, solving $10t = 110$ to get $t = 11$, and then $w = 6(11) + 20 = 86$.\n* Choice C: finds the correct numbers but reads $62$ as the two tanks' combined amount; each equation gives the amount in one tank.\n* Choice D: swaps the coordinates, treating $62$ as the time and $7$ as the amount.\n\n**Test Day Takeaway:** The solution of a system built from two models is the input at which both models give the same output; state it with the units of each variable.",
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
    question: "$y = 3x - 4$\n$2x + 5y = 48$\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~30s):** Substitute $3x - 4$ for $y$: $2x + 5(3x - 4) = 48$, so $17x = 68$ and $x = 4$. Then $y = 3(4) - 4 = 8$.\n\n**The Full Solution:**\nStep 1: The first equation already gives $y$ in terms of $x$, so substitute $3x - 4$ for $y$ in the second equation: $2x + 5(3x - 4) = 48$.\nStep 2: Distribute and combine like terms: $2x + 15x - 20 = 48$, so $17x = 68$ and $x = 4$.\nStep 3: Substitute $x = 4$ into the first equation: $y = 3(4) - 4 = 8$. Check: $2(4) + 5(8) = 8 + 40 = 48$ ✓\n\n**Common Mistakes:**\n* $4$: stops after finding $x$ and enters it, but the question asks for $y$.\n* $12$: finds both values and enters their sum, $x + y$.\n* Distributing $5(3x - 4)$ as $15x - 4$ gives $17x = 52$, which has no whole-number solution and fails the check in the second equation.\n\n**Test Day Takeaway:** When one equation is already solved for a variable, substitute it whole, distribute carefully, and finish by answering for the variable the question names.",
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
    question: "$y = ax - 10$\n$2x + 3y = 25$\nIn the given system of equations, $a$ is a constant. The system has a solution $(x, y)$ such that $x = y$. What is the value of $a$?",
    choices: [
      // distractor: solves 5 = 5a - 10 as 5a = 5 - 10 = -5, moving the -10 with the wrong sign
      { id: "A", text: "$-1$" },
      { id: "B", text: "$3$" },
      // distractor: reports the shared coordinate 5 instead of the constant a
      { id: "C", text: "$5$" },
      // distractor: stops at 5a = 15 and reports 15 without dividing by 5
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Since $x = y$, the second equation becomes $2x + 3x = 25$, so $x = y = 5$; then $5 = 5a - 10$ gives $a = 3$.\n\n**The Full Solution:**\nStep 1: Substitute $x$ for $y$ in the equation with no unknown constant: $2x + 3x = 25$.\nStep 2: Combine like terms and divide: $5x = 25$, so $x = 5$, and therefore $y = 5$.\nStep 3: Substitute $(5, 5)$ into the first equation: $5 = a(5) - 10$, so $5a = 15$ and $a = 3$. Check: $y = 3(5) - 10 = 5$ and $2(5) + 3(5) = 25$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1$): moves the $-10$ across with the wrong sign, solving $5a = 5 - 10 = -5$.\n* Choice C ($5$): reports the shared coordinate $x = y = 5$ instead of the constant $a$.\n* Choice D ($15$): stops at $5a = 15$ and reports that product without dividing by $5$.\n\n**Test Day Takeaway:** A condition such as $x = y$ is itself an equation. Use it in the equation that has no unknown constant first, then let the constant fall out of the other equation.",
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
    question: "On Saturday, a bakery sold a total of $327$ muffins and scones. The number of muffins sold was $18$ fewer than $4$ times the number of scones sold. How many muffins did the bakery sell on Saturday?",
    correctAnswer: "258",
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $258$.**\n\n**The Fast Way (~40s):** With $s$ scones, the muffins are $4s - 18$, so $s + (4s - 18) = 327$, giving $5s = 345$, $s = 69$, and $4(69) - 18 = 258$ muffins.\n\n**The Full Solution:**\nStep 1: Let $m$ be the number of muffins and $s$ the number of scones. \"$18$ fewer than $4$ times the number of scones\" gives $m = 4s - 18$, and the total gives $m + s = 327$.\nStep 2: Substitute $4s - 18$ for $m$ in the second equation: $4s - 18 + s = 327$, so $5s = 345$ and $s = 69$.\nStep 3: Substitute back: $m = 4(69) - 18 = 276 - 18 = 258$. Check: $258 + 69 = 327$, and $258$ is $18$ fewer than $4(69) = 276$ ✓\n\n**Common Mistakes:**\n* $69$: solves for the number of scones and stops, but the question asks for muffins.\n* Writing \"$18$ fewer\" as $4s + 18$ gives $5s = 309$, which has no whole-number solution, a sign the translation is wrong.\n* $276$: finds $4s = 276$ and forgets to subtract the $18$.\n\n**Test Day Takeaway:** Translate \"$18$ fewer than $4$ times\" as $4s - 18$, substitute it into the total, and answer for the quantity the question actually names.",
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
    question: "The table shows three values of $x$ and their corresponding values of $y$ for a line in the $xy$-plane. The equation of this line and the equation $y = kx + 7$, where $k$ is a constant, form a system of equations that has no solution. What is the value of $k$?",
    questionTable: { headers: ["$x$", "$y$"], rows: [["$0$", "$2$"], ["$1$", "$8$"], ["$2$", "$14$"]] },
    choices: [
      // distractor: copies the $y$-intercept of the line in the table instead of its slope
      { id: "A", text: "$2$" },
      { id: "B", text: "$6$" },
      // distractor: copies the $y$-intercept $7$ of the second equation
      { id: "C", text: "$7$" },
      // distractor: uses the change in $y$ from $x = 0$ to $x = 2$ without dividing by the change in $x$
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** In the table, $y$ rises by $6$ each time $x$ rises by $1$, so the line has slope $6$. No solution means parallel lines, so $k = 6$.\n\n**The Full Solution:**\nStep 1: Find the slope of the line from two rows: $\\frac{8 - 2}{1 - 0} = 6$. The row $(0, 2)$ gives the $y$-intercept, so the line is $y = 6x + 2$.\nStep 2: A system of two linear equations has no solution when the lines are parallel and distinct: the same slope with different $y$-intercepts.\nStep 3: The intercepts $2$ and $7$ already differ, so the slopes must match: $k = 6$. Check: $6x + 2 = 6x + 7$ reduces to $2 = 7$, which is false, so the system has no solution ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): copies the $y$-intercept of the line in the table instead of its slope.\n* Choice C ($7$): copies the $y$-intercept of the second equation.\n* Choice D ($12$): uses the change in $y$ from $x = 0$ to $x = 2$ without dividing by the change in $x$.\n\n**Test Day Takeaway:** For a line given by a table, slope is the change in $y$ divided by the change in $x$; no solution then means matching that slope.",
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
    question: "The graph of line $j$ is shown. A system of two linear equations consists of the equation of line $j$ and the equation $y = kx - 5$, where $k$ is a constant. If the system has no solution, what is the value of $k$?",
    diagram: { type: "linearGraph", params: { slope: 3, yIntercept: 1, xRange: [-4, 4], yRange: [-6, 10], xTickInterval: 1, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 1], [2, 7]], label: "j" } },
    correctAnswer: "3",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~10s):** No solution means the second line is parallel to line $j$. From the marked points $(0, 1)$ and $(2, 7)$, line $j$ has slope $\\frac{7 - 1}{2 - 0} = 3$, so $k = 3$.\n\n**The Full Solution:**\nStep 1: Read the slope of line $j$ from two marked points: $\\frac{7 - 1}{2 - 0} = 3$. Its $y$-intercept is $1$, so line $j$ is $y = 3x + 1$.\nStep 2: Two lines give a system with no solution exactly when they are parallel with different $y$-intercepts. The intercepts $1$ and $-5$ differ, so only the slopes must match.\nStep 3: Therefore $k = 3$. Check: $3x - 5 = 3x + 1$ reduces to $-5 = 1$, which is false, so the lines never meet ✓\n\n**Common Mistakes:**\n* $1$: enters the $y$-intercept of line $j$ instead of its slope.\n* $-\\frac{1}{3}$: uses the perpendicular slope, confusing \"no solution\" with \"perpendicular.\"\n* $-5$: copies the $y$-intercept of the second equation.\n\n**Test Day Takeaway:** Read the slope from two lattice points on the graph; for a system with no solution, the second line must have that same slope and a different intercept.",
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
    question: "Line $\\ell$ is shown in the $xy$-plane. The equation of line $\\ell$ and the equation $2x + by = 7$, where $b$ is a constant, form a system of two linear equations. For what value of $b$ does the system have no solution?",
    diagram: { type: "linearGraph", params: { slope: -0.5, yIntercept: 4, xRange: [-4, 10], yRange: [-2, 8], gridInterval: 1, xTickInterval: 2, yTickInterval: 2, label: "ℓ" } },
    choices: [
      // distractor: drops the negative sign, solving 2/b = -1/2 to get b = -4
      { id: "A", text: "$-4$" },
      // distractor: uses the reciprocal slope, setting -2/b = -2 to get b = 1
      { id: "B", text: "$1$" },
      // distractor: copies the y-coefficient 2 of x + 2y = 8 without scaling by 2
      { id: "C", text: "$2$" },
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Line $\\ell$ has slope $-\\frac{1}{2}$. The line $2x + by = 7$ has slope $-\\frac{2}{b}$, and $-\\frac{2}{b} = -\\frac{1}{2}$ gives $b = 4$.\n\n**The Full Solution:**\nStep 1: From the graph, line $\\ell$ crosses the $y$-axis at $(0, 4)$ and falls $1$ unit for every $2$ units to the right, so its slope is $-\\frac{1}{2}$ and its equation is $y = -\\frac{1}{2}x + 4$, or $x + 2y = 8$.\nStep 2: Solve $2x + by = 7$ for $y$: $y = -\\frac{2}{b}x + \\frac{7}{b}$. No solution requires equal slopes, so $-\\frac{2}{b} = -\\frac{1}{2}$, which gives $b = 4$.\nStep 3: Check the intercepts: with $b = 4$ the second line is $y = -\\frac{1}{2}x + \\frac{7}{4}$, whose $y$-intercept $\\frac{7}{4}$ is not $4$, so the lines are parallel and distinct ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): drops the negative sign when setting the slopes equal, solving $\\frac{2}{b} = -\\frac{1}{2}$.\n* Choice B ($1$): uses the reciprocal slope, setting $-\\frac{2}{b} = -2$.\n* Choice C ($2$): copies the $y$-coefficient of $x + 2y = 8$ without scaling it to match the $x$-coefficient $2$.\n\n**Test Day Takeaway:** Put both lines in slope form before comparing; matching coefficients only works after the $x$-coefficients have been scaled to agree.",
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
    question: "$3x + 5y = 24$\n$9x + ky = 40$\nIn the given system of equations, $k$ is a constant. If the system has no solution, what is the value of $k$?",
    correctAnswer: "15",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~20s):** The $x$-coefficient of the second equation is $3$ times the first, so no solution needs $k = 3(5) = 15$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has no solution when the coefficients of $x$ and $y$ are proportional but the constants are not.\nStep 2: The $x$-coefficients are $3$ and $9$, a ratio of $3$. For the $y$-coefficients to have the same ratio, $k = 3(5) = 15$.\nStep 3: Check the constants: $3(24) = 72$, not $40$, so the lines $9x + 15y = 72$ and $9x + 15y = 40$ are parallel and distinct ✓\n\n**Common Mistakes:**\n* $5$: makes the $y$-coefficients equal without scaling, even though the $x$-coefficients $3$ and $9$ differ.\n* $\\frac{25}{3}$: scales by the ratio of the constants, $\\frac{40}{24} = \\frac{5}{3}$, instead of the ratio of the $x$-coefficients.\n* $\\frac{5}{3}$: divides $5$ by $3$ instead of multiplying.\n\n**Test Day Takeaway:** For no solution, scale the whole left side of one equation to match the other; the constants must then disagree.",
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
    question: "The table shows three values of $x$ and their corresponding values of $y$ for line $h$ in the $xy$-plane. Line $h$ and the graph of $kx - 3y = 8$, where $k$ is a constant, have no points in common. What is the value of $k$?",
    questionTable: { headers: ["$x$", "$y$"], rows: [["$-2$", "$-5$"], ["$1$", "$4$"], ["$4$", "$13$"]] },
    choices: [
      // distractor: sign error dividing by -3, taking the slope as -k/3 and solving -k/3 = 3
      { id: "A", text: "$-9$" },
      // distractor: uses line h's y-intercept 1 instead of its slope
      { id: "B", text: "$1$" },
      // distractor: sets k equal to the slope 3 without dividing by the y-coefficient -3
      { id: "C", text: "$3$" },
      { id: "D", text: "$9$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Line $h$ has slope $\\frac{4 - (-5)}{1 - (-2)} = 3$. The graph of $kx - 3y = 8$ has slope $\\frac{k}{3}$, so $\\frac{k}{3} = 3$ and $k = 9$.\n\n**The Full Solution:**\nStep 1: From the table, $y$ increases by $9$ each time $x$ increases by $3$, so the slope of line $h$ is $3$; with $(1, 4)$, the equation is $y = 3x + 1$.\nStep 2: Solve $kx - 3y = 8$ for $y$: $-3y = -kx + 8$, so $y = \\frac{k}{3}x - \\frac{8}{3}$. Lines with no points in common are parallel, so $\\frac{k}{3} = 3$ and $k = 9$.\nStep 3: Check: with $k = 9$ the line is $y = 3x - \\frac{8}{3}$, whose $y$-intercept differs from $1$, so the lines are parallel and distinct ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): makes a sign error when dividing by $-3$, writing the slope as $-\\frac{k}{3}$.\n* Choice B ($1$): uses the $y$-intercept of line $h$ instead of its slope.\n* Choice C ($3$): sets $k$ equal to the slope $3$ without accounting for the $-3$ coefficient of $y$.\n\n**Test Day Takeaway:** Rewrite a standard-form equation as $y = mx + b$ before matching slopes; the coefficient on $y$ changes the slope.",
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
    question: "$ax - 6y = 5$\n$2x - 3y = 11$\nIn the given system of equations, $a$ is a constant. For what value of $a$ does the system have no solution?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~20s):** The $y$-coefficient $-6$ is $2$ times $-3$, so no solution needs $a = 2(2) = 4$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has no solution when the $x$- and $y$-coefficients are in the same ratio but the constants are not.\nStep 2: Compare the $y$-coefficients: $\\frac{-6}{-3} = 2$. The $x$-coefficients must have the same ratio, so $\\frac{a}{2} = 2$ and $a = 4$.\nStep 3: Check the constants: $2(11) = 22$, not $5$, so $4x - 6y = 5$ and $4x - 6y = 22$ are parallel and distinct ✓\n\n**Common Mistakes:**\n* $2$: makes the $x$-coefficients equal without scaling by $2$.\n* $1$: inverts the ratio, solving $\\frac{a}{2} = \\frac{-3}{-6}$.\n* $-4$: drops a negative sign when comparing $-6$ and $-3$.\n\n**Test Day Takeaway:** Find the scale factor from the coefficients you know, apply it to the unknown coefficient, and then confirm the constants do not follow the same scale.",
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
    question: "Line $r$ is shown in the $xy$-plane. The graph of which of the following equations never intersects line $r$?",
    diagram: { type: "linearGraph", params: { slope: 2, yIntercept: -1, xRange: [-4, 4], yRange: [-6, 8], xTickInterval: 1, yTickInterval: 2, gridInterval: 1, showPoints: [[0, -1], [2, 3]], label: "r" } },
    choices: [
      // distractor: has slope -2, flipping the sign of line r's slope, so the lines intersect
      { id: "A", text: "$2x + y = 4$" },
      // distractor: is a multiple of line r's own equation y = 2x - 1, so it is the same line and intersects r everywhere
      { id: "B", text: "$4x - 2y = 2$" },
      { id: "C", text: "$6x - 3y = -12$" },
      // distractor: has slope 1/2, the reciprocal of 2, so the lines intersect
      { id: "D", text: "$x - 2y = 4$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Line $r$ is $y = 2x - 1$. Choice C rewrites as $y = 2x + 4$: the same slope with a different intercept, so the lines never meet.\n\n**The Full Solution:**\nStep 1: From the marked points $(0, -1)$ and $(2, 3)$, line $r$ has slope $\\frac{3 - (-1)}{2 - 0} = 2$ and $y$-intercept $-1$, so its equation is $y = 2x - 1$.\nStep 2: Rewrite each choice as $y = mx + b$: A gives $y = -2x + 4$; B gives $y = 2x - 1$; C gives $-3y = -6x - 12$, so $y = 2x + 4$; D gives $y = \\frac{1}{2}x - 2$.\nStep 3: Two lines never intersect only if they are parallel and distinct: the same slope with a different $y$-intercept, which only Choice C has. Check: $2x - 1 = 2x + 4$ reduces to $-1 = 4$, which is false ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2x + y = 4$): has slope $-2$; the sign of the slope is flipped, so the lines intersect.\n* Choice B ($4x - 2y = 2$): is line $r$ itself, so its graph meets line $r$ at every point.\n* Choice D ($x - 2y = 4$): has slope $\\frac{1}{2}$, the reciprocal of the correct slope, so the lines intersect.\n\n**Test Day Takeaway:** Convert standard-form choices to slope-intercept form before comparing; a choice that is a multiple of the graphed line's equation is the same line, which intersects it everywhere rather than never.",
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
    question: "$2y = mx + 3$\n$4x - 10y = 25$\nIn the given system of equations, $m$ is a constant. The system has no solution. What is the value of $m$?",
    correctAnswer: "4/5",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $\\frac{4}{5}$.**\n\n**The Fast Way (~45s):** The second line has slope $\\frac{4}{10} = \\frac{2}{5}$; the first has slope $\\frac{m}{2}$. Setting $\\frac{m}{2} = \\frac{2}{5}$ gives $m = \\frac{4}{5}$.\n\n**The Full Solution:**\nStep 1: Write both equations in slope-intercept form. The first is $y = \\frac{m}{2}x + \\frac{3}{2}$. The second gives $-10y = -4x + 25$, so $y = \\frac{2}{5}x - \\frac{5}{2}$.\nStep 2: A system with no solution has parallel, distinct lines, so the slopes are equal: $\\frac{m}{2} = \\frac{2}{5}$, which gives $m = \\frac{4}{5}$.\nStep 3: Check the intercepts: $\\frac{3}{2} \\ne -\\frac{5}{2}$, so the lines are distinct and never meet ✓ (The answer may also be entered as $0.8$.)\n\n**Common Mistakes:**\n* $\\frac{2}{5}$: sets $m$ equal to the slope without dividing the first equation by $2$.\n* $-\\frac{4}{5}$: makes a sign error when dividing $-4x$ by $-10$.\n* $5$: inverts the slope of the second line, using $\\frac{10}{4}$, and then doubles it.\n\n**Test Day Takeaway:** When the $y$-term has a coefficient, divide it out before reading the slope; the constant you solve for is usually the coefficient, not the slope itself.",
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
    question: "Line $\\ell$ is shown in the $xy$-plane. What is the slope of line $\\ell$?",
    diagram: { type: "linearGraph", params: { slope: -2, yIntercept: 30, xRange: [0, 12], yRange: [0, 32], xTickInterval: 2, yTickInterval: 4, gridInterval: 2, showPoints: [[2, 26], [10, 10]], label: "ℓ" } },
    choices: [
      { id: "A", text: "$-2$" },
      // distractor: divides the run by the rise, giving 8/(-16) = -1/2
      { id: "B", text: "$-\\frac{1}{2}$" },
      // distractor: drops the negative sign although the line falls
      { id: "C", text: "$2$" },
      // distractor: reports the y-intercept 30 instead of the slope
      { id: "D", text: "$30$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The line passes through $(2, 26)$ and $(10, 10)$, so the slope is $\\frac{10 - 26}{10 - 2} = -2$.\n\n**The Full Solution:**\nStep 1: Read two marked points on the line: $(2, 26)$ and $(10, 10)$.\nStep 2: Compute rise over run: $\\frac{10 - 26}{10 - 2} = \\frac{-16}{8}$.\nStep 3: The slope is $-2$, and the line falls from left to right, so a negative slope fits. Check: from $(10, 10)$ back to the $y$-axis is $10$ units, and $10 + 2(10) = 30$, where the line meets the $y$-axis ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{1}{2}$): divides the run by the rise instead of the rise by the run.\n* Choice C ($2$): has the right size but the wrong sign for a line that falls.\n* Choice D ($30$): reports the $y$-intercept instead of the slope.\n\n**Test Day Takeaway:** Check the sign against the picture before you finish: a falling line must have a negative slope.",
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
    question: "A line in the $xy$-plane passes through the points $(2, 7)$ and $(8, -11)$. What is the slope of the line?",
    correctAnswer: "-3",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**The correct answer is $-3$.**\n\n**The Fast Way (~15s):** Slope $= \\frac{-11 - 7}{8 - 2} = \\frac{-18}{6} = -3$.\n\n**The Full Solution:**\nStep 1: Use the slope formula $m = \\frac{y_2 - y_1}{x_2 - x_1}$ with $(2, 7)$ and $(8, -11)$.\nStep 2: The change in $y$ is $-11 - 7 = -18$, and the change in $x$ is $8 - 2 = 6$.\nStep 3: Divide: $m = \\frac{-18}{6} = -3$. Check: starting at $(2, 7)$ and moving $6$ units right at slope $-3$ gives $7 - 18 = -11$ ✓\n\n**Common Mistakes:**\n* $-\\frac{1}{3}$: divides the change in $x$ by the change in $y$.\n* $3$: computes $-11 - 7$ as $18$ and loses the negative sign.\n* $-\\frac{2}{3}$: computes the change in $y$ as $-11 + 7 = -4$ instead of $-11 - 7 = -18$.\n\n**Test Day Takeaway:** Subtract the coordinates in the same order on the top and bottom of the slope formula, and expect a negative slope when $y$ falls as $x$ rises.",
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
    question: "The values of the linear function $f$ at $x = 4$ and $x = 10$ are $23$ and $38$, respectively. What is the slope of the graph of $f$?",
    choices: [
      // distractor: inverts the slope, computing (10 - 4)/(38 - 23) = 2/5
      { id: "A", text: "$\\frac{2}{5}$" },
      // distractor: divides the change in f(x) by 10 instead of by the change in x, 10 - 4
      { id: "B", text: "$\\frac{3}{2}$" },
      { id: "C", text: "$\\frac{5}{2}$" },
      // distractor: adds the outputs, computing (38 + 23)/6 = 61/6
      { id: "D", text: "$\\frac{61}{6}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The graph contains $(4, 23)$ and $(10, 38)$, so the slope is $\\frac{38 - 23}{10 - 4} = \\frac{15}{6} = \\frac{5}{2}$.\n\n**The Full Solution:**\nStep 1: Each function value gives a point on the graph: $f(4) = 23$ means $(4, 23)$, and $f(10) = 38$ means $(10, 38)$.\nStep 2: Apply the slope formula: $\\frac{38 - 23}{10 - 4} = \\frac{15}{6}$.\nStep 3: Simplify: $\\frac{15}{6} = \\frac{5}{2}$. Check: $23 + \\frac{5}{2}(6) = 23 + 15 = 38$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{2}{5}$): divides the change in $x$ by the change in $f(x)$.\n* Choice B ($\\frac{3}{2}$): divides the change in $f(x)$ by $10$, the second $x$-value, instead of the change in $x$.\n* Choice D ($\\frac{61}{6}$): adds the two outputs, $\\frac{38 + 23}{6}$, instead of subtracting them.\n\n**Test Day Takeaway:** Translate function values into points first: $f(a) = b$ is the point $(a, b)$, and the slope comes from the differences of those points.",
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
    question: "Line $\\ell$ in the $xy$-plane passes through the two points shown. What is the slope of a line that is perpendicular to line $\\ell$?",
    diagram: { type: "coordinatePoints", params: { points: [[-1, -5], [5, 3]], xMin: -4, xMax: 8, yMin: -8, yMax: 6 } },
    correctAnswer: "-3/4",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**The correct answer is $-\\frac{3}{4}$.**\n\n**The Fast Way (~20s):** The points $(-1, -5)$ and $(5, 3)$ give line $\\ell$ a slope of $\\frac{8}{6} = \\frac{4}{3}$. A perpendicular line has the negative reciprocal slope, $-\\frac{3}{4}$.\n\n**The Full Solution:**\nStep 1: Read the two plotted points: $(-1, -5)$ and $(5, 3)$.\nStep 2: The slope of line $\\ell$ is $\\frac{3 - (-5)}{5 - (-1)} = \\frac{8}{6} = \\frac{4}{3}$.\nStep 3: Perpendicular lines have slopes that are negative reciprocals, so a line perpendicular to line $\\ell$ has slope $-\\frac{3}{4}$. Check: $\\left(\\frac{4}{3}\\right)\\left(-\\frac{3}{4}\\right) = -1$ ✓ (The answer may also be entered as $-0.75$.)\n\n**Common Mistakes:**\n* $\\frac{4}{3}$: reports the slope of line $\\ell$ itself.\n* $\\frac{3}{4}$: takes the reciprocal but does not change the sign.\n* $-\\frac{4}{3}$: changes the sign but does not take the reciprocal.\n\n**Test Day Takeaway:** Find the slope from the two points first, then take its negative reciprocal for the perpendicular line.",
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
    question: "Line $\\ell$ is shown in the $xy$-plane. Which of the following could be the coordinates of a point on line $\\ell$?",
    diagram: { type: "linearGraph", params: { slope: 0.6666667, yIntercept: 1, xRange: [0, 14], yRange: [0, 12], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 1], [6, 5]] } },
    choices: [
      { id: "A", text: "$(12, 9)$" },
      // distractor: uses the slope 2/3 but omits the y-intercept of 1
      { id: "B", text: "$(12, 8)$" },
      // distractor: inverts the slope to 3/2, giving (3/2)(12) + 1 = 19
      { id: "C", text: "$(12, 19)$" },
      // distractor: reverses the coordinates of the correct point
      { id: "D", text: "$(8, 12)$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The line passes through $(0, 1)$ and $(6, 5)$, so $y = \\frac{2}{3}x + 1$. At $x = 12$, $y = 9$.\n\n**The Full Solution:**\nStep 1: Read two marked points on the line: $(0, 1)$ and $(6, 5)$.\nStep 2: The slope is $\\frac{5 - 1}{6 - 0} = \\frac{2}{3}$, and the $y$-intercept is $1$, so line $\\ell$ is $y = \\frac{2}{3}x + 1$.\nStep 3: Test $x = 12$: $\\frac{2}{3}(12) + 1 = 8 + 1 = 9$, so $(12, 9)$ lies on line $\\ell$. Check with the slope: from $(6, 5)$, moving $6$ right raises $y$ by $4$, to $(12, 9)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($(12, 8)$): applies the slope to $x = 12$ but forgets to add the $y$-intercept of $1$.\n* Choice C ($(12, 19)$): uses $\\frac{3}{2}$ for the slope, dividing the run by the rise.\n* Choice D ($(8, 12)$): swaps the two coordinates of the correct point.\n\n**Test Day Takeaway:** Build the line's equation from two clear points on the graph, then test each choice in it rather than estimating from the picture.",
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
    question: "A linear model estimates that the population of a town was $8{,}600$ in $2006$ and $6{,}200$ in $2014$. According to the model, by how many people does the town's population decrease each year?",
    correctAnswer: "300",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**The correct answer is $300$.**\n\n**The Fast Way (~20s):** The population fell by $8{,}600 - 6{,}200 = 2{,}400$ over $2014 - 2006 = 8$ years, which is $\\frac{2{,}400}{8} = 300$ people per year.\n\n**The Full Solution:**\nStep 1: Treat the two estimates as points $(2006, 8{,}600)$ and $(2014, 6{,}200)$ on the line.\nStep 2: The slope is $\\frac{6{,}200 - 8{,}600}{2014 - 2006} = \\frac{-2{,}400}{8} = -300$ people per year.\nStep 3: A slope of $-300$ means the population decreases by $300$ people each year. Check: $8{,}600 - 8(300) = 6{,}200$ ✓\n\n**Common Mistakes:**\n* $-300$: enters the slope itself, but the question asks by how many people the population decreases, a positive amount.\n* $2400$: reports the total decrease over the $8$ years instead of the decrease per year.\n* $266.7$: divides by $9$, counting the years from $2006$ to $2014$ inclusively.\n\n**Test Day Takeaway:** The rate of a linear model is the slope between two data points; match the sign to the wording of the question.",
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
    question: "For the linear function $g$, $g(4) = 11$, and the value of $g(x)$ decreases by $4$ for every increase of $3$ in the value of $x$. If $g(t) = -5$, what is the value of $t$?",
    correctAnswer: "16",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**The correct answer is $16$.**\n\n**The Fast Way (~35s):** The output must fall $11 - (-5) = 16$, which is $4$ steps of $4$; each step adds $3$ to $x$, so $t = 4 + 4(3) = 16$.\n\n**The Full Solution:**\nStep 1: The slope of $g$ is $-\\frac{4}{3}$, and $g(4) = 11$ gives the point $(4, 11)$.\nStep 2: Use the slope between $(4, 11)$ and $(t, -5)$: $\\frac{-5 - 11}{t - 4} = -\\frac{4}{3}$, so $\\frac{-16}{t - 4} = -\\frac{4}{3}$.\nStep 3: Cross-multiply: $-4(t - 4) = -48$, so $t - 4 = 12$ and $t = 16$. Check: $g(16) = 11 - \\frac{4}{3}(12) = 11 - 16 = -5$ ✓\n\n**Common Mistakes:**\n* $12$: finds the change in $x$, $12$, and forgets to add it to the starting input $4$.\n* $-8$: moves the input in the wrong direction, computing $4 - 12$, as if a decreasing function needed a smaller input to decrease.\n* $\\frac{76}{3}$: uses the slope $-\\frac{3}{4}$, swapping the change in $x$ and the change in $y$.\n\n**Test Day Takeaway:** Turn \"decreases by $4$ for every increase of $3$\" into the slope $-\\frac{4}{3}$, then use the slope between the known point and the unknown one.",
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
    question: "$6x + 15 = 75$\nWhat value of $x$ is the solution to the given equation?",
    choices: [
      { id: "A", text: "$10$" },
      // distractor: adds 15 instead of subtracting, solving 6x = 90
      { id: "B", text: "$15$" },
      // distractor: stops at 6x = 60 and reports 60
      { id: "C", text: "$60$" },
      // distractor: computes 75 + 15 = 90 and does not divide by 6
      { id: "D", text: "$90$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Subtract $15$ to get $6x = 60$, then divide by $6$: $x = 10$.\n\n**The Full Solution:**\nStep 1: Subtract $15$ from both sides: $6x = 75 - 15 = 60$.\nStep 2: Divide both sides by $6$: $x = \\frac{60}{6}$.\nStep 3: So $x = 10$. Check: $6(10) + 15 = 60 + 15 = 75$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($15$): adds $15$ instead of subtracting it, solving $6x = 90$.\n* Choice C ($60$): stops at $6x = 60$ and reports $6x$ instead of $x$.\n* Choice D ($90$): adds $15$ to $75$ and stops without dividing by $6$.\n\n**Test Day Takeaway:** Undo the addition first, then the multiplication, and plug the answer back in to check.",
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
    question: "If $4x + 7 = 39$, what is the value of $x$?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~10s):** $4x = 39 - 7 = 32$, so $x = 8$.\n\n**The Full Solution:**\nStep 1: Subtract $7$ from both sides: $4x = 32$.\nStep 2: Divide both sides by $4$: $x = \\frac{32}{4}$.\nStep 3: So $x = 8$. Check: $4(8) + 7 = 32 + 7 = 39$ ✓\n\n**Common Mistakes:**\n* $32$: stops at $4x = 32$ and enters the value of $4x$.\n* $11.5$: adds $7$ instead of subtracting, solving $4x = 46$.\n* $2.75$: divides first and forgets to divide the $7$, solving $x + 7 = 9.75$.\n\n**Test Day Takeaway:** In a two-step equation, undo the constant before the coefficient, and make sure the value you enter is $x$ itself.",
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
    question: "$\\frac{x}{5} - 7 = 2$\nWhat is the solution to the given equation?",
    choices: [
      // distractor: subtracts 7 instead of adding it, so x/5 = -5 and x = -25
      { id: "A", text: "$-25$" },
      // distractor: divides 9 by 5 instead of multiplying
      { id: "B", text: "$\\frac{9}{5}$" },
      // distractor: stops at x/5 = 9 and reports 9
      { id: "C", text: "$9$" },
      { id: "D", text: "$45$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Add $7$: $\\frac{x}{5} = 9$. Multiply by $5$: $x = 45$.\n\n**The Full Solution:**\nStep 1: Add $7$ to both sides: $\\frac{x}{5} = 2 + 7 = 9$.\nStep 2: Multiply both sides by $5$: $x = 9(5)$.\nStep 3: So $x = 45$. Check: $\\frac{45}{5} - 7 = 9 - 7 = 2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-25$): subtracts $7$ instead of adding it, getting $\\frac{x}{5} = -5$.\n* Choice B ($\\frac{9}{5}$): divides $9$ by $5$ instead of multiplying, undoing the division with another division.\n* Choice C ($9$): stops at $\\frac{x}{5} = 9$ and reports the value of $\\frac{x}{5}$.\n\n**Test Day Takeaway:** Undo each operation with its inverse: subtraction with addition, division with multiplication.",
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
    question: "$7x - 4 = 2x + k$\nIn the given equation, $k$ is a constant. If $x = 9$ is a solution to the equation, what is the value of $k$?",
    correctAnswer: "41",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**The correct answer is $41$.**\n\n**The Fast Way (~15s):** Substitute $x = 9$: $63 - 4 = 18 + k$, so $59 = 18 + k$ and $k = 41$.\n\n**The Full Solution:**\nStep 1: A solution makes the equation true, so substitute $9$ for $x$: $7(9) - 4 = 2(9) + k$.\nStep 2: Simplify each side: $59 = 18 + k$.\nStep 3: Subtract $18$: $k = 41$. Check: with $k = 41$, $7x - 4 = 2x + 41$ gives $5x = 45$, so $x = 9$ ✓\n\n**Common Mistakes:**\n* $59$: evaluates the left side and forgets to subtract $2(9)$.\n* $45$: drops the $-4$, computing $63 - 18$.\n* $77$: adds $18$ instead of subtracting it.\n\n**Test Day Takeaway:** When a value of $x$ is given as a solution, substitute it first; the equation then has only the constant left to solve for.",
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
    question: "Maya paid \\$130 to rent a guitar from a store that charges a one-time fee of \\$25 plus \\$7 per week. How much, in dollars, would she have paid if she had rented the guitar for $4$ more weeks?",
    choices: [
      // distractor: computes 7(19) = 133 for the weekly charges and omits the 25-dollar fee
      { id: "A", text: "$133$" },
      // distractor: adds 4 dollars for 4 weeks instead of 7 dollars per week
      { id: "B", text: "$134$" },
      { id: "C", text: "$158$" },
      // distractor: adds the 25-dollar fee a second time, 158 + 25 = 183
      { id: "D", text: "$183$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The fee is paid once, so $4$ more weeks adds only $4(7) = 28$ dollars: $130 + 28 = 158$.\n\n**The Full Solution:**\nStep 1: Let $w$ be the number of weeks Maya rented the guitar. Then $25 + 7w = 130$.\nStep 2: Subtract $25$ and divide by $7$: $7w = 105$, so $w = 15$ weeks.\nStep 3: With $4$ more weeks, she would have paid $25 + 7(19) = 25 + 133 = 158$ dollars. Check: $158 - 130 = 28 = 4(7)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($133$): finds the weekly charges for $19$ weeks but leaves out the \\$25 fee.\n* Choice B ($134$): adds \\$4 for the $4$ weeks instead of \\$7 per week.\n* Choice D ($183$): adds the \\$25 fee a second time to the correct total.\n\n**Test Day Takeaway:** In a \"fixed fee plus rate\" situation, a change in the number of units changes only the rate part of the total.",
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
    question: "$\\frac{3x - 4}{5} = 7$\nWhat value of $x$ is the solution to the given equation?",
    correctAnswer: "13",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~15s):** Multiply by $5$: $3x - 4 = 35$. Then $3x = 39$ and $x = 13$.\n\n**The Full Solution:**\nStep 1: Multiply both sides by $5$ to clear the fraction: $3x - 4 = 35$.\nStep 2: Add $4$ to both sides: $3x = 39$.\nStep 3: Divide by $3$: $x = 13$. Check: $\\frac{3(13) - 4}{5} = \\frac{35}{5} = 7$ ✓\n\n**Common Mistakes:**\n* $\\frac{11}{3}$: forgets to multiply by $5$, solving $3x - 4 = 7$.\n* $\\frac{31}{3}$: subtracts $4$ instead of adding it, solving $3x = 31$.\n* $39$: stops at $3x = 39$ and enters the value of $3x$.\n\n**Test Day Takeaway:** Clear the fraction by multiplying the whole equation by the denominator, then finish as a two-step equation.",
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
    question: "$\\frac{2}{3}x - 7 = 9$\nWhat is the value of $2x - 21$?",
    choices: [
      // distractor: subtracts 7 instead of adding, so (2/3)x = 2, x = 3, and 2(3) - 21 = -15
      { id: "A", text: "$-15$" },
      // distractor: stops at (2/3)x = 16 and reports 16
      { id: "B", text: "$16$" },
      // distractor: reports x = 24 instead of the value of 2x - 21
      { id: "C", text: "$24$" },
      { id: "D", text: "$27$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Multiply the whole equation by $3$: $2x - 21 = 27$. That is exactly the expression asked for.\n\n**The Full Solution:**\nStep 1: Multiply both sides of $\\frac{2}{3}x - 7 = 9$ by $3$: $2x - 21 = 27$.\nStep 2: The left side is exactly $2x - 21$, so its value is $27$.\nStep 3: Check by solving: $\\frac{2}{3}x = 16$, so $x = 24$, and $2(24) - 21 = 48 - 21 = 27$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-15$): subtracts $7$ instead of adding it, getting $\\frac{2}{3}x = 2$, $x = 3$, and $2(3) - 21 = -15$.\n* Choice B ($16$): stops at $\\frac{2}{3}x = 16$ and reports that value.\n* Choice C ($24$): solves for $x$ correctly but reports $x$ instead of $2x - 21$.\n\n**Test Day Takeaway:** When the question asks for an expression, look for a single multiplication that turns the given equation into that expression before solving for $x$.",
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
    question: "$5(2x + c) - 7 = 10x + 13$\nIn the given equation, $c$ is a constant. For what value of $c$ does the equation have infinitely many solutions?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~25s):** Distribute: $10x + 5c - 7 = 10x + 13$. The $x$-terms already match, so the constants must too: $5c - 7 = 13$, giving $c = 4$.\n\n**The Full Solution:**\nStep 1: Distribute the $5$: $10x + 5c - 7 = 10x + 13$.\nStep 2: The equation has infinitely many solutions only if both sides are identical. The $x$-coefficients are both $10$, so set the constant terms equal: $5c - 7 = 13$.\nStep 3: Solve: $5c = 20$, so $c = 4$. Check: $5(2x + 4) - 7 = 10x + 20 - 7 = 10x + 13$, identical to the right side ✓\n\n**Common Mistakes:**\n* $20$: distributes the $5$ only to $2x$, writing $10x + c - 7$, so $c - 7 = 13$.\n* $1.2$: moves the $-7$ to the right side without changing its sign, getting $5c = 6$.\n* $-4$: makes a sign error, solving $5c = -20$.\n\n**Test Day Takeaway:** Infinitely many solutions means the two sides are the same expression; once the $x$-terms match, set the constants equal.",
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
    question: "Line $j$ passes through the point $(0, 4)$ and is perpendicular to the line $y = 2x - 3$ in the $xy$-plane. Which equation defines line $j$?",
    choices: [
      // distractor: negates the slope 2 without taking the reciprocal
      { id: "A", text: "$y = -2x + 4$" },
      { id: "B", text: "$y = -\\frac{1}{2}x + 4$" },
      // distractor: takes the reciprocal 1/2 without changing the sign
      { id: "C", text: "$y = \\frac{1}{2}x + 4$" },
      // distractor: keeps the slope 2, which gives a parallel line
      { id: "D", text: "$y = 2x + 4$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The perpendicular slope is the negative reciprocal of $2$, which is $-\\frac{1}{2}$, and the $y$-intercept is $4$: $y = -\\frac{1}{2}x + 4$.\n\n**The Full Solution:**\nStep 1: The line $y = 2x - 3$ has slope $2$. Perpendicular slopes multiply to $-1$, so line $j$ has slope $-\\frac{1}{2}$.\nStep 2: Line $j$ passes through $(0, 4)$, a point on the $y$-axis, so its $y$-intercept is $4$.\nStep 3: In slope-intercept form, line $j$ is $y = -\\frac{1}{2}x + 4$. Check: $2 \\cdot \\left(-\\frac{1}{2}\\right) = -1$, and at $x = 0$, $y = 4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -2x + 4$): negates the slope but does not take the reciprocal.\n* Choice C ($y = \\frac{1}{2}x + 4$): takes the reciprocal but does not change the sign.\n* Choice D ($y = 2x + 4$): uses the same slope, which makes the lines parallel, not perpendicular.\n\n**Test Day Takeaway:** A perpendicular slope needs both moves: flip the fraction and change the sign.",
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
    question: "Line $p$ is defined by $y = \\frac{5}{4}x - 3$. Line $r$ is perpendicular to line $p$ in the $xy$-plane. What is the slope of line $r$?",
    correctAnswer: "-4/5",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $-\\frac{4}{5}$.**\n\n**The Fast Way (~10s):** Line $p$ has slope $\\frac{5}{4}$; the negative reciprocal is $-\\frac{4}{5}$.\n\n**The Full Solution:**\nStep 1: The equation of line $p$ is in slope-intercept form, so its slope is $\\frac{5}{4}$.\nStep 2: Perpendicular lines have slopes whose product is $-1$, so the slope of line $r$ is the negative reciprocal of $\\frac{5}{4}$.\nStep 3: That slope is $-\\frac{4}{5}$. Check: $\\frac{5}{4} \\cdot \\left(-\\frac{4}{5}\\right) = -1$ ✓ (The answer may also be entered as $-0.8$.)\n\n**Common Mistakes:**\n* $\\frac{4}{5}$: takes the reciprocal but forgets to change the sign.\n* $-\\frac{5}{4}$: changes the sign but forgets to take the reciprocal.\n* $\\frac{5}{4}$: gives the slope of line $p$, which would make line $r$ parallel.\n\n**Test Day Takeaway:** For a perpendicular slope, flip the fraction and change its sign; check that the two slopes multiply to $-1$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-line-through-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-179",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Line $p$ is shown in the $xy$-plane. Line $q$ is perpendicular to line $p$. Which of the following could be an equation of line $q$?",
    diagram: { type: "linearGraph", params: { slope: -0.5, yIntercept: 3, xRange: [-6, 6], yRange: [-4, 6], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 3], [2, 2]], label: "p" } },
    choices: [
      // distractor: takes the reciprocal of line $p$'s slope but keeps the negative sign, giving slope $-2$
      { id: "A", text: "$y = -2x + 3$" },
      // distractor: uses the slope of line $p$ itself, which gives a line parallel to line $p$
      { id: "B", text: "$y = -\\frac{1}{2}x - 4$" },
      // distractor: changes the sign of line $p$'s slope but does not take the reciprocal
      { id: "C", text: "$y = \\frac{1}{2}x + 3$" },
      { id: "D", text: "$y = 2x - 4$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Line $p$ falls $1$ unit for every $2$ units to the right, so its slope is $-\\frac{1}{2}$. A perpendicular line has slope $2$, and only choice D has slope $2$.\n\n**The Full Solution:**\nStep 1: Read two points on line $p$ from the graph: $(0, 3)$ and $(2, 2)$. The slope of line $p$ is $\\frac{2 - 3}{2 - 0} = -\\frac{1}{2}$.\nStep 2: Perpendicular lines have slopes that are negative reciprocals, so the slope of line $q$ is $2$.\nStep 3: Any line with slope $2$ could be line $q$, whatever its $y$-intercept. In $y = 2x - 4$ the slope is $2$. Check: $\\left(-\\frac{1}{2}\\right)(2) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -2x + 3$): takes the reciprocal of line $p$'s slope but keeps the negative sign, giving slope $-2$\n* Choice B ($y = -\\frac{1}{2}x - 4$): uses the slope of line $p$ itself, which gives a line parallel to line $p$\n* Choice C ($y = \\frac{1}{2}x + 3$): changes the sign of line $p$'s slope but does not take the reciprocal\n\n**Test Day Takeaway:** Only the slope decides whether two lines are perpendicular; the $y$-intercept can be anything.",
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
    question: "In the $xy$-plane, the graph of $3x + 5y = 45$ is perpendicular to the graph of $y = cx - 2$, where $c$ is a constant. What is the value of $c$?",
    correctAnswer: "5/3",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $\\frac{5}{3}$.**\n\n**The Fast Way (~25s):** Solving $3x + 5y = 45$ for $y$ gives $y = -\\frac{3}{5}x + 9$, so its slope is $-\\frac{3}{5}$. The perpendicular slope is $\\frac{5}{3}$, so $c = \\frac{5}{3}$.\n\n**The Full Solution:**\nStep 1: Rewrite $3x + 5y = 45$ in slope-intercept form: $5y = -3x + 45$, so $y = -\\frac{3}{5}x + 9$. Its slope is $-\\frac{3}{5}$.\nStep 2: The graph of $y = cx - 2$ has slope $c$. Perpendicular lines have slopes that are negative reciprocals, so $c$ is the negative reciprocal of $-\\frac{3}{5}$.\nStep 3: So $c = \\frac{5}{3}$. Check: $\\left(-\\frac{3}{5}\\right)\\left(\\frac{5}{3}\\right) = -1$ ✓ (The answer may also be entered as $1.666$ or $1.667$.)\n\n**Common Mistakes:**\n* $-\\frac{3}{5}$: uses the slope of $3x + 5y = 45$ itself, which would make the lines parallel.\n* $\\frac{3}{5}$: changes the sign of $-\\frac{3}{5}$ but does not take the reciprocal.\n* $-\\frac{5}{3}$: takes the reciprocal of $-\\frac{3}{5}$ but keeps the negative sign.\n\n**Test Day Takeaway:** For a line in the form $Ax + By = C$, the slope is $-\\frac{A}{B}$; a perpendicular line has the negative reciprocal of that slope.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-line-through-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-181",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Line $d$ is shown in the $xy$-plane. Line $p$ is defined by $y = mx + 6$, where $m$ is a constant. If line $p$ is perpendicular to line $d$, what is the value of $m$?",
    diagram: { type: "linearGraph", params: { slope: 3, yIntercept: -2, xRange: [-4, 6], yRange: [-6, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, -2], [2, 4]], label: "d" } },
    choices: [
      // distractor: changes the sign of line $d$'s slope but does not take the reciprocal
      { id: "A", text: "$-3$" },
      { id: "B", text: "$-\\frac{1}{3}$" },
      // distractor: takes the reciprocal of line $d$'s slope but does not change the sign
      { id: "C", text: "$\\frac{1}{3}$" },
      // distractor: uses the slope of line $d$ itself, which would make the lines parallel
      { id: "D", text: "$3$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Line $d$ rises $6$ units for every $2$ units to the right, so its slope is $3$. Line $p$ must have the negative reciprocal slope, $-\\frac{1}{3}$.\n\n**The Full Solution:**\nStep 1: Read two points on line $d$ from the graph: $(0, -2)$ and $(2, 4)$. The slope of line $d$ is $\\frac{4 - (-2)}{2 - 0} = 3$.\nStep 2: Line $p$, $y = mx + 6$, has slope $m$. Perpendicular lines have slopes that are negative reciprocals.\nStep 3: So $m = -\\frac{1}{3}$. Check: $(3)\\left(-\\frac{1}{3}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): changes the sign of line $d$'s slope but does not take the reciprocal\n* Choice C ($\\frac{1}{3}$): takes the reciprocal of line $d$'s slope but does not change the sign\n* Choice D ($3$): uses the slope of line $d$ itself, which would make the lines parallel\n\n**Test Day Takeaway:** In $y = mx + b$, the constant $m$ is the slope; for a perpendicular line, flip the other slope and change its sign.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-line-through-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-182",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "medium",
    type: "fill-in",
    question: "$y = \\frac{4}{5}x + 6$\nIn the $xy$-plane, line $k$ is perpendicular to the graph of the given equation. What is the slope of line $k$?",
    correctAnswer: "-5/4",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $-\\frac{5}{4}$.**\n\n**The Fast Way (~15s):** The given line has slope $\\frac{4}{5}$. Flip the fraction and change the sign: the slope of line $k$ is $-\\frac{5}{4}$.\n\n**The Full Solution:**\nStep 1: The given equation is in slope-intercept form, so its slope is the coefficient of $x$: $\\frac{4}{5}$.\nStep 2: Perpendicular lines have slopes that are negative reciprocals.\nStep 3: The negative reciprocal of $\\frac{4}{5}$ is $-\\frac{5}{4}$. Check: $\\left(\\frac{4}{5}\\right)\\left(-\\frac{5}{4}\\right) = -1$ ✓ (The answer may also be entered as $-1.25$.)\n\n**Common Mistakes:**\n* $\\frac{4}{5}$: uses the slope of the given line, which would make the lines parallel.\n* $\\frac{5}{4}$: takes the reciprocal but does not change the sign.\n* $-\\frac{4}{5}$: changes the sign but does not take the reciprocal.\n\n**Test Day Takeaway:** A perpendicular slope needs both moves: take the reciprocal and change the sign.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-line-through-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-183",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$4x - 9y = 36$\nIn the $xy$-plane, line $v$ is perpendicular to the graph of the given equation. Which of the following could be an equation of line $v$?",
    choices: [
      // distractor: keeps the same coefficients, which gives slope $\frac{4}{9}$, a line parallel to the given one
      { id: "A", text: "$4x - 9y = 12$" },
      // distractor: changes only the sign of the $y$-term, which gives slope $-\frac{4}{9}$ (sign changed but not the reciprocal)
      { id: "B", text: "$4x + 9y = 12$" },
      // distractor: swaps the coefficients but keeps the minus sign, which gives slope $\frac{9}{4}$ (reciprocal but no sign change)
      { id: "C", text: "$9x - 4y = 12$" },
      { id: "D", text: "$9x + 4y = 12$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The given line has slope $\\frac{4}{9}$, so line $v$ needs slope $-\\frac{9}{4}$. Solving $9x + 4y = 12$ for $y$ gives $y = -\\frac{9}{4}x + 3$.\n\n**The Full Solution:**\nStep 1: Solve the given equation for $y$: $-9y = -4x + 36$, so $y = \\frac{4}{9}x - 4$. Its slope is $\\frac{4}{9}$.\nStep 2: Perpendicular lines have slopes that are negative reciprocals, so line $v$ has slope $-\\frac{9}{4}$.\nStep 3: Find the slope of each choice with $-\\frac{A}{B}$: A gives $\\frac{4}{9}$, B gives $-\\frac{4}{9}$, C gives $\\frac{9}{4}$, and D gives $-\\frac{9}{4}$. Only D matches. Check: $\\left(\\frac{4}{9}\\right)\\left(-\\frac{9}{4}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4x - 9y = 12$): keeps the same coefficients, which gives slope $\\frac{4}{9}$, a line parallel to the given one\n* Choice B ($4x + 9y = 12$): changes only the sign of the $y$-term, which gives slope $-\\frac{4}{9}$ (sign changed but not the reciprocal)\n* Choice C ($9x - 4y = 12$): swaps the coefficients but keeps the minus sign, which gives slope $\\frac{9}{4}$ (reciprocal but no sign change)\n\n**Test Day Takeaway:** Convert every equation to a slope before comparing; for $Ax + By = C$ the slope is $-\\frac{A}{B}$.",
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
    question: "In the $xy$-plane, line $b$ is perpendicular to the graph of $10y - 4x = 9$. What is the slope of line $b$?",
    correctAnswer: "-5/2",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $-\\frac{5}{2}$.**\n\n**The Fast Way (~25s):** Solving $10y - 4x = 9$ for $y$ gives $y = \\frac{2}{5}x + \\frac{9}{10}$, so its slope is $\\frac{2}{5}$. Line $b$ has the negative reciprocal slope, $-\\frac{5}{2}$.\n\n**The Full Solution:**\nStep 1: Solve the given equation for $y$: $10y = 4x + 9$, so $y = \\frac{4}{10}x + \\frac{9}{10} = \\frac{2}{5}x + \\frac{9}{10}$.\nStep 2: The slope of the given line is $\\frac{2}{5}$. Perpendicular lines have slopes that are negative reciprocals.\nStep 3: So the slope of line $b$ is $-\\frac{5}{2}$. Check: $\\left(\\frac{2}{5}\\right)\\left(-\\frac{5}{2}\\right) = -1$ ✓ (The answer may also be entered as $-2.5$.)\n\n**Common Mistakes:**\n* $\\frac{5}{2}$: makes a sign error solving for $y$, getting slope $-\\frac{2}{5}$, then takes the negative reciprocal of that.\n* $\\frac{2}{5}$: reports the slope of the given line instead of the perpendicular slope.\n* $-\\frac{2}{5}$: changes the sign of $\\frac{2}{5}$ but does not take the reciprocal.\n\n**Test Day Takeaway:** When $y$ comes first in the equation, solve for $y$ before reading the slope, then take the negative reciprocal.",
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
    question: "$47n = 611$\nWhat value of $n$ is the solution to the given equation?",
    choices: [
      { id: "A", text: "$13$" },
      // distractor: subtracts 47 from 611 instead of dividing
      { id: "B", text: "$564$" },
      // distractor: adds 47 to 611 instead of dividing
      { id: "C", text: "$658$" },
      // distractor: multiplies 611 by 47 instead of dividing
      { id: "D", text: "$28{,}717$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Divide both sides by $47$: $n = \\frac{611}{47} = 13$.\n\n**The Full Solution:**\nStep 1: The variable $n$ is multiplied by $47$, so undo the multiplication by dividing.\nStep 2: Divide each side of $47n = 611$ by $47$: $n = \\frac{611}{47}$.\nStep 3: Simplify: $n = 13$. Check: $47(13) = 611$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($564$): subtracts $47$ from $611$, treating $47n$ as $n + 47$.\n* Choice C ($658$): adds $47$ to $611$, undoing an operation the equation does not contain.\n* Choice D ($28{,}717$): multiplies $611$ by $47$ instead of dividing.\n\n**Test Day Takeaway:** A number written next to a variable means multiplication; undo it by dividing both sides by that number, and check by multiplying back.",
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
    question: "$\\frac{m}{6} = 21$\nWhat is the solution to the given equation?",
    correctAnswer: "126",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**The correct answer is 126.**\n\n**The Fast Way (~10s):** Multiply both sides by $6$: $m = 6(21) = 126$.\n\n**The Full Solution:**\nStep 1: The variable $m$ is divided by $6$, so undo the division by multiplying.\nStep 2: Multiply each side of $\\frac{m}{6} = 21$ by $6$: $m = 21 \\cdot 6$.\nStep 3: Simplify: $m = 126$. Check: $\\frac{126}{6} = 21$ ✓\n\n**Common Mistakes:**\n* $3.5$: divides $21$ by $6$ instead of multiplying.\n* $27$: adds $6$ to $21$.\n* $15$: subtracts $6$ from $21$.\n\n**Test Day Takeaway:** Undo division by multiplying both sides by the divisor; the solution of $\\frac{m}{a} = b$ is always larger than $b$ when $a > 1$ and $b > 0$.",
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
    question: "A roll contained $b$ meters of fabric. After $38$ meters were cut from the roll, $145$ meters of fabric remained. Which equation represents this situation?",
    choices: [
      { id: "A", text: "$b - 38 = 145$" },
      // distractor: adds the 38 meters that were cut instead of subtracting them
      { id: "B", text: "$b + 38 = 145$" },
      // distractor: subtracts in the wrong order, taking the full roll away from the 38 meters cut
      { id: "C", text: "$38 - b = 145$" },
      // distractor: multiplies the two quantities instead of subtracting the cut length
      { id: "D", text: "$38b = 145$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Starting amount minus the amount cut equals the amount left: $b - 38 = 145$.\n\n**The Full Solution:**\nStep 1: The roll starts with $b$ meters of fabric.\nStep 2: Cutting $38$ meters removes fabric, so the amount left is $b - 38$.\nStep 3: The amount left is $145$ meters, so $b - 38 = 145$. Check: solving gives $b = 183$, and $183 - 38 = 145$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($b + 38 = 145$): adds the cut length, which would describe fabric being added to the roll.\n* Choice C ($38 - b = 145$): reverses the subtraction; since $b$ is more than $38$, the left side would be negative.\n* Choice D ($38b = 145$): multiplies the quantities, which has no meaning for cutting a length from a roll.\n\n**Test Day Takeaway:** Translate the situation in the order it happens: start, change, result. Then test your equation with the solution it produces.",
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
    question: "$y + 59 = 23$\nWhat is the value of $y$?",
    correctAnswer: "-36",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**The correct answer is -36.**\n\n**The Fast Way (~10s):** Subtract $59$ from both sides: $y = 23 - 59 = -36$.\n\n**The Full Solution:**\nStep 1: The variable $y$ has $59$ added to it, so undo the addition by subtracting $59$.\nStep 2: Subtract $59$ from each side: $y = 23 - 59$.\nStep 3: Since $59$ is greater than $23$, the result is negative: $y = -36$. Check: $-36 + 59 = 23$ ✓\n\n**Common Mistakes:**\n* $36$: subtracts the smaller number from the larger one and drops the negative sign.\n* $82$: adds $59$ to $23$ instead of subtracting.\n\n**Test Day Takeaway:** When the number subtracted is larger than the number it is subtracted from, the answer is negative; check the sign by substituting back.",
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
    question: "$\\frac{n}{k} = 24$\nIn the given equation, $k$ is a constant. If $n = 84$, what is the value of $k$?",
    choices: [
      // distractor: divides 24 by 84 instead of 84 by 24, inverting the value of k
      { id: "A", text: "$\\frac{2}{7}$" },
      { id: "B", text: "$\\frac{7}{2}$" },
      // distractor: subtracts 24 from 84 instead of dividing
      { id: "C", text: "$60$" },
      // distractor: multiplies 84 by 24, which would solve k/84 = 24 instead of 84/k = 24
      { id: "D", text: "$2{,}016$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Substitute $n = 84$: $\\frac{84}{k} = 24$, so $k = \\frac{84}{24} = \\frac{7}{2}$.\n\n**The Full Solution:**\nStep 1: Substitute $84$ for $n$: $\\frac{84}{k} = 24$.\nStep 2: Multiply each side by $k$: $84 = 24k$.\nStep 3: Divide each side by $24$: $k = \\frac{84}{24} = \\frac{7}{2}$. Check: $84 \\div \\frac{7}{2} = 84 \\cdot \\frac{2}{7} = 24$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{2}{7}$): divides $24$ by $84$, inverting the quotient; $\\frac{84}{2/7} = 294$, not $24$.\n* Choice C ($60$): subtracts $24$ from $84$ instead of dividing.\n* Choice D ($2{,}016$): multiplies $84$ by $24$, which would solve $\\frac{k}{84} = 24$, not $\\frac{84}{k} = 24$.\n\n**Test Day Takeaway:** When the unknown is in the denominator, multiply it across first ($84 = 24k$); then the equation is a one-step multiplication.",
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
    question: "For a concert, $\\frac{2}{3}$ of the seats in a theater were filled. If $54$ seats were filled, how many seats does the theater have?",
    correctAnswer: "81",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**The correct answer is 81.**\n\n**The Fast Way (~20s):** If $s$ is the number of seats, $\\frac{2}{3}s = 54$, so $s = 54 \\cdot \\frac{3}{2} = 81$.\n\n**The Full Solution:**\nStep 1: Let $s$ be the total number of seats. Two-thirds of them were filled, so $\\frac{2}{3}s = 54$.\nStep 2: Multiply each side by $\\frac{3}{2}$, the reciprocal of $\\frac{2}{3}$: $s = 54 \\cdot \\frac{3}{2}$.\nStep 3: Simplify: $s = 81$. Check: $\\frac{2}{3}(81) = 54$ ✓\n\n**Common Mistakes:**\n* $36$: multiplies $54$ by $\\frac{2}{3}$ instead of dividing by it.\n* $27$: finds one-third of the theater, $\\frac{54}{2}$, and stops before multiplying by $3$.\n* $162$: multiplies $54$ by $3$ but forgets to divide by $2$.\n\n**Test Day Takeaway:** A fraction of an unknown total gives $\\frac{a}{b}x = N$; multiply by the reciprocal, and the total must be larger than the part.",
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
    question: "$w + 26 = c$\nIn the given equation, $c$ is a constant. If $w = -9$ is the solution to the given equation, what is the value of $c$?",
    choices: [
      // distractor: subtracts 26 from -9 instead of adding
      { id: "A", text: "$-35$" },
      { id: "B", text: "$17$" },
      // distractor: drops the negative sign on w and adds 9 + 26
      { id: "C", text: "$35$" },
      // distractor: multiplies -9 by -26
      { id: "D", text: "$234$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Substitute $w = -9$: $c = -9 + 26 = 17$.\n\n**The Full Solution:**\nStep 1: A solution makes the equation true, so substitute $-9$ for $w$.\nStep 2: $c = -9 + 26$.\nStep 3: $c = 17$. Check: the equation $w + 26 = 17$ has solution $w = 17 - 26 = -9$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-35$): subtracts $26$ instead of adding it, computing $-9 - 26$.\n* Choice C ($35$): treats $w$ as $9$ instead of $-9$, computing $9 + 26$.\n* Choice D ($234$): multiplies $-9$ by $-26$ instead of adding.\n\n**Test Day Takeaway:** When a solution is given and a constant is unknown, substitute the solution and evaluate; keep the sign of a negative input in parentheses.",
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
    question: "In the equations $-3x = a$ and $-3x = a + 12$, $a$ is a constant. If $x = p$ is the solution to the first equation and $x = q$ is the solution to the second equation, what is the value of $p - q$?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**The correct answer is 4.**\n\n**The Fast Way (~30s):** $p = -\\frac{a}{3}$ and $q = -\\frac{a + 12}{3}$, so $p - q = \\frac{-a + a + 12}{3} = 4$.\n\n**The Full Solution:**\nStep 1: Divide each side of $-3x = a$ by $-3$: $p = -\\frac{a}{3}$.\nStep 2: Divide each side of $-3x = a + 12$ by $-3$: $q = -\\frac{a + 12}{3} = -\\frac{a}{3} - 4$.\nStep 3: Subtract: $p - q = -\\frac{a}{3} - \\left(-\\frac{a}{3} - 4\\right) = 4$. Check with $a = 6$: $p = -2$ and $q = \\frac{18}{-3} = -6$, so $p - q = 4$ ✓\n\n**Common Mistakes:**\n* $-4$: divides by $3$ instead of $-3$, or computes $q - p$ instead of $p - q$.\n* $12$: subtracts the right sides, $a$ and $a + 12$, without dividing by $-3$.\n* $-12$: subtracts the right sides in the wrong order and never divides.\n\n**Test Day Takeaway:** Solve each equation in terms of the constant, then combine; when a constant cancels, the answer is the same for every value of it, so a quick test value confirms it.",
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
    question: "$x = 2y + 5$\n$3x - y = 35$\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
    choices: [
      { id: "A", text: "$4$" },
      // distractor: distributes the 3 only to 2y, writing 6y + 5 - y = 35, so 5y = 30
      { id: "B", text: "$6$" },
      // distractor: adds 15 to 35 instead of subtracting it, so 5y = 50
      { id: "C", text: "$10$" },
      // distractor: solves correctly but reports x = 13 instead of y
      { id: "D", text: "$13$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Substitute $2y + 5$ for $x$: $3(2y + 5) - y = 35$, so $5y + 15 = 35$ and $y = 4$.\n\n**The Full Solution:**\nStep 1: The first equation gives $x$ in terms of $y$, so substitute $2y + 5$ for $x$ in the second equation: $3(2y + 5) - y = 35$.\nStep 2: Distribute and combine like terms: $6y + 15 - y = 35$, so $5y + 15 = 35$.\nStep 3: Subtract $15$ and divide by $5$: $y = 4$, and then $x = 2(4) + 5 = 13$. Check: $3(13) - 4 = 35$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): distributes the $3$ only to $2y$, writing $6y + 5 - y = 35$, so $5y = 30$.\n* Choice C ($10$): adds $15$ to $35$ instead of subtracting it, so $5y = 50$.\n* Choice D ($13$): this is the value of $x$, not $y$.\n\n**Test Day Takeaway:** When one equation is already solved for a variable, substitute the whole expression in parentheses, distribute to every term, and answer the variable the question asks for.",
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
    question: "$y = 2x$\n$x + y = 27$\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
    correctAnswer: "18",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**The correct answer is 18.**\n\n**The Fast Way (~15s):** Substitute $2x$ for $y$: $3x = 27$, so $x = 9$ and $y = 18$.\n\n**The Full Solution:**\nStep 1: Substitute $2x$ for $y$ in the second equation: $x + 2x = 27$.\nStep 2: Combine like terms: $3x = 27$, so $x = 9$.\nStep 3: Then $y = 2(9) = 18$. Check: $9 + 18 = 27$ and $18 = 2(9)$ ✓\n\n**Common Mistakes:**\n* $9$: reports the value of $x$ instead of $y$.\n* $13.5$: divides $27$ by $2$, treating the two values as equal halves.\n* $54$: substitutes $27$ for $x$ in $y = 2x$.\n\n**Test Day Takeaway:** Substitute, solve for the first variable, then plug back in; finish by checking which variable the question asks for.",
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
    question: "$y = 4x - 7$\n$3x + cy = 59$\nIn the given system of equations, $c$ is a constant. If the system has the solution $(3, y)$, what is the value of $c$?",
    choices: [
      // distractor: reports the x-coordinate of the solution, 3, as c
      { id: "A", text: "$3$" },
      // distractor: stops after finding y = 5 and reports it as c
      { id: "B", text: "$5$" },
      { id: "C", text: "$10$" },
      // distractor: finds cy = 59 - 9 = 50 but does not divide by y = 5
      { id: "D", text: "$50$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** With $x = 3$, the first equation gives $y = 5$; then $9 + 5c = 59$, so $c = 10$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 3$ into the first equation: $y = 4(3) - 7 = 5$, so the solution is $(3, 5)$.\nStep 2: Substitute $(3, 5)$ into the second equation: $3(3) + c(5) = 59$, so $9 + 5c = 59$.\nStep 3: Subtract $9$ and divide by $5$: $c = 10$. Check: $3(3) + 10(5) = 59$ and $4(3) - 7 = 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the $x$-coordinate of the solution.\n* Choice B ($5$): stops after finding $y = 5$.\n* Choice D ($50$): finds $5c = 50$ but does not divide by $5$.\n\n**Test Day Takeaway:** A solution point satisfies both equations; use the equation without the constant to finish the point, then substitute the point into the other equation.",
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
    question: "A shelf holds $86$ books, each of which is either a hardcover or a paperback. There are $14$ more paperbacks than hardcovers on the shelf. How many hardcovers are on the shelf?",
    correctAnswer: "36",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**The correct answer is 36.**\n\n**The Fast Way (~25s):** With $h$ hardcovers there are $h + 14$ paperbacks, so $2h + 14 = 86$ and $h = 36$.\n\n**The Full Solution:**\nStep 1: Let $h$ be the number of hardcovers and $p$ the number of paperbacks: $h + p = 86$ and $p = h + 14$.\nStep 2: Substitute $h + 14$ for $p$: $h + (h + 14) = 86$, so $2h + 14 = 86$.\nStep 3: Subtract $14$ and divide by $2$: $h = 36$. Check: $p = 50$, $36 + 50 = 86$, and $50 - 36 = 14$ ✓\n\n**Common Mistakes:**\n* $50$: reports the number of paperbacks instead of hardcovers.\n* $43$: splits $86$ evenly and ignores the difference of $14$.\n* $72$: subtracts $14$ from $86$ but does not divide by $2$.\n\n**Test Day Takeaway:** Write the \"more than\" statement as one variable plus the difference, substitute it into the total, and answer for the variable the question names.",
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
    question: "$y = \\frac{1}{2}x + 4$\n$y = 2x - 2$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x + y$?",
    choices: [
      // distractor: finds x = 4 and stops without adding y
      { id: "A", text: "$4$" },
      // distractor: finds y = 6 and stops without adding x
      { id: "B", text: "$6$" },
      { id: "C", text: "$10$" },
      // distractor: multiplies x and y instead of adding them
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Set the right sides equal: $\\frac{1}{2}x + 4 = 2x - 2$, so $\\frac{3}{2}x = 6$, $x = 4$, $y = 6$, and $x + y = 10$.\n\n**The Full Solution:**\nStep 1: Both equations give $y$, so substitute: $\\frac{1}{2}x + 4 = 2x - 2$.\nStep 2: Subtract $\\frac{1}{2}x$ and add $2$ to each side: $6 = \\frac{3}{2}x$, so $x = 4$.\nStep 3: Then $y = 2(4) - 2 = 6$, and $x + y = 10$. Check: $\\frac{1}{2}(4) + 4 = 6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): is the value of $x$ alone.\n* Choice B ($6$): is the value of $y$ alone.\n* Choice D ($24$): multiplies $x$ and $y$ instead of adding them.\n\n**Test Day Takeaway:** When two equations both start with $y =$, set the right sides equal; then reread the question, since it may ask for a combination of $x$ and $y$.",
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
    question: "$y = 3x + 2$\n$4x - y = 6$\nIf $(x, y)$ is the solution to the given system of equations, what is the value of $y$?",
    correctAnswer: "26",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**The correct answer is 26.**\n\n**The Fast Way (~25s):** Substitute: $4x - (3x + 2) = 6$, so $x - 2 = 6$, $x = 8$, and $y = 3(8) + 2 = 26$.\n\n**The Full Solution:**\nStep 1: Substitute $3x + 2$ for $y$ in the second equation: $4x - (3x + 2) = 6$.\nStep 2: Distribute the negative sign: $4x - 3x - 2 = 6$, so $x = 8$.\nStep 3: Substitute back: $y = 3(8) + 2 = 26$. Check: $4(8) - 26 = 6$ ✓\n\n**Common Mistakes:**\n* $8$: reports the value of $x$ instead of $y$.\n* $14$: subtracts only the $3x$, writing $4x - 3x + 2 = 6$, so $x = 4$ and $y = 14$.\n* $34$: adds $x$ and $y$.\n\n**Test Day Takeaway:** Put the substituted expression in parentheses so a minus sign in front of it reaches every term.",
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
    question: "$y = -2x + c$\n$4x - y = 10$\nIn the given system of equations, $c$ is a constant. The solution $(x, y)$ to the system satisfies $x + y = 10$. What is the value of $c$?",
    choices: [
      // distractor: finds the point (4, 6) but computes c = y - 2x = -2 instead of c = y + 2x
      { id: "A", text: "$-2$" },
      // distractor: stops after finding x = 4
      { id: "B", text: "$4$" },
      // distractor: stops after finding y = 6
      { id: "C", text: "$6$" },
      { id: "D", text: "$14$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** From $4x - y = 10$, $y = 4x - 10$; with $x + y = 10$, $5x - 10 = 10$, so $(x, y) = (4, 6)$ and $c = y + 2x = 14$.\n\n**The Full Solution:**\nStep 1: The second equation does not involve $c$, so rewrite it as $y = 4x - 10$ and substitute into $x + y = 10$: $x + 4x - 10 = 10$.\nStep 2: Solve: $5x = 20$, so $x = 4$ and $y = 4(4) - 10 = 6$.\nStep 3: Substitute $(4, 6)$ into the first equation: $6 = -2(4) + c$, so $c = 14$. Check: $4(4) - 6 = 10$, $-2(4) + 14 = 6$, and $4 + 6 = 10$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): finds the point $(4, 6)$ but solves $6 = -2(4) + c$ as $c = 6 - 8$.\n* Choice B ($4$): is the value of $x$, not $c$.\n* Choice C ($6$): is the value of $y$, not $c$.\n\n**Test Day Takeaway:** Pair the extra condition with the equation that has no unknown constant to find the point, then substitute the point to get the constant.",
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
    question: "$y = 3x - k$\n$2x + y = k + 22$\nIn the given system of equations, $k$ is a constant. If the system has a solution $(6, y)$, what is the value of $k$?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**The correct answer is 4.**\n\n**The Fast Way (~40s):** With $x = 6$, $y = 18 - k$; then $12 + 18 - k = k + 22$, so $8 = 2k$ and $k = 4$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 6$ into the first equation: $y = 18 - k$.\nStep 2: Substitute $x = 6$ and $y = 18 - k$ into the second equation: $12 + 18 - k = k + 22$, so $30 - k = k + 22$.\nStep 3: Add $k$ and subtract $22$ from each side: $8 = 2k$, so $k = 4$. Check: $y = 18 - 4 = 14$, and $2(6) + 14 = 26 = 4 + 22$ ✓\n\n**Common Mistakes:**\n* $8$: stops at $2k = 8$ without dividing by $2$.\n* $14$: reports the value of $y$ instead of $k$.\n* $-4$: moves $k$ to the wrong side, writing $30 - 22 = -2k$.\n\n**Test Day Takeaway:** When a constant appears in both equations, substitute the known coordinate everywhere, keep the constant as a letter, and solve the one equation that remains.",
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
    question: "The graph shows the amount of fuel $y$, in gallons, in a generator's tank $x$ hours after the generator is started. What is the best interpretation of the slope of the graph in this context?",
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
    question: "$T = 9.5m + 20$\nThe given equation models the temperature $T$, in degrees Celsius, of an oven $m$ minutes after it is turned on. By how many degrees Celsius does the temperature increase each minute?",
    correctAnswer: "9.5",
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is 9.5.**\n\n**The Fast Way (~10s):** The coefficient of $m$ is the change in $T$ per minute: $9.5$ degrees Celsius.\n\n**The Full Solution:**\nStep 1: The equation $T = 9.5m + 20$ is linear in $m$, so its slope is the rate of change of $T$ per minute.\nStep 2: The slope is the coefficient of $m$, which is $9.5$.\nStep 3: So the temperature increases by $9.5$ degrees Celsius each minute. Check: at $m = 2$, $T = 39$, and at $m = 3$, $T = 48.5$, an increase of $9.5$ ✓\n\n**Common Mistakes:**\n* $20$: gives the temperature at $m = 0$, the constant term, instead of the rate.\n* $29.5$: gives the temperature after $1$ minute, $9.5 + 20$, instead of the change.\n\n**Test Day Takeaway:** In a linear model $y = mx + b$, the coefficient of the input is the change per one unit of input, and the constant is the starting value.",
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
    question: "The scatterplot shows the number of milkweed patches, $x$, and the number of monarch butterflies counted, $y$, at each of $10$ sites. A line of best fit for the data is $y = 4.5x + 12$. What is the best interpretation of $4.5$ in this context?",
    diagram: { type: "scatterplot", params: { points: [[1, 18], [2, 19], [3, 27], [4, 28], [5, 36], [6, 37], [7, 45], [8, 46], [10, 58], [12, 66]], xMin: 0, xMax: 12, yMin: 0, yMax: 70, xGridStep: 1, yGridStep: 5, xLabelStep: 2, yLabelStep: 10, xLabel: "Milkweed patches", yLabel: "Monarch butterflies counted", bestFitLine: { slope: 4.5, intercept: 12 } } },
    choices: [
      { id: "A", text: "The estimated number of monarch butterflies increases by $4.5$ for each additional milkweed patch." },
      // distractor: uses the constant $12$, the value at $x = 0$, as the rate of change
      { id: "B", text: "The estimated number of monarch butterflies increases by $12$ for each additional milkweed patch." },
      // distractor: reverses the roles of $x$ and $y$, describing patches per butterfly
      { id: "C", text: "The estimated number of milkweed patches increases by $4.5$ for each additional monarch butterfly." },
      // distractor: reads the slope $4.5$ as the starting value instead of the rate
      { id: "D", text: "The estimated number of monarch butterflies at a site with no milkweed patches is $4.5$." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** In $y = 4.5x + 12$, the coefficient $4.5$ is the change in $y$ per one-unit change in $x$: monarchs per additional milkweed patch.\n\n**The Full Solution:**\n\nStep 1: Identify the variables from the scatterplot: $x$ is the number of milkweed patches and $y$ is the number of monarch butterflies counted.\n\nStep 2: In slope-intercept form, the slope is the rate of change of $y$ with respect to $x$, so $4.5$ counts butterflies per patch.\n\nStep 3: Check the direction: at $x = 4$ the model gives $30$ and at $x = 5$ it gives $34.5$, an increase of $4.5$ ✓\n\n**Why the wrong answers are tempting:**\n\n* Choice B: uses $12$, the model's value at $x = 0$, as if it were the rate.\n\n* Choice C: states the rate with the variables swapped, which would be patches per butterfly.\n\n* Choice D: treats the slope as the value of $y$ when $x = 0$, which is $12$, not $4.5$.\n\n**Test Day Takeaway:** The slope answers the question how much does $y$ change per one unit of $x$, and the units of the answer must be $y$-units per $x$-unit.",
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
    question: "The scatterplot shows the fuel efficiency $y$, in miles per gallon, of a van and the cargo load $x$, in hundreds of pounds, for $10$ trips. A line of best fit is $y = -0.6x + 24$. According to the line of best fit, by how many miles per gallon does the predicted fuel efficiency decrease for each increase of $500$ pounds in cargo load?",
    diagram: { type: "scatterplot", params: { points: [[1, 23.9], [2, 22.4], [3, 22.6], [4, 21.1], [5, 22], [6, 20.3], [7, 20.6], [8, 18.9], [9, 19.5], [10, 17.6]], xMin: 0, xMax: 10, yMin: 16, yMax: 26, xGridStep: 1, yGridStep: 1, xLabelStep: 2, yLabelStep: 2, xLabel: "Cargo load (hundreds of pounds)", yLabel: "Fuel efficiency (mpg)", bestFitLine: { slope: -0.6, intercept: 24 } } },
    correctAnswer: "3",
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is 3.**\n\n**The Fast Way (~25s):** $500$ pounds is $5$ units of $x$, and each unit lowers the prediction by $0.6$: $5(0.6) = 3$ miles per gallon.\n\n**The Full Solution:**\nStep 1: The slope $-0.6$ means the predicted fuel efficiency falls $0.6$ mile per gallon for each increase of $1$ in $x$, that is, each $100$ pounds.\nStep 2: An increase of $500$ pounds is an increase of $5$ in $x$.\nStep 3: The predicted decrease is $5(0.6) = 3$ miles per gallon. Check: at $x = 2$ the line gives $22.8$ and at $x = 7$ it gives $19.8$, a decrease of $3$ ✓\n\n**Common Mistakes:**\n* $0.6$: gives the decrease for $100$ pounds, one unit of $x$, instead of $500$ pounds.\n* $300$: multiplies $0.6$ by $500$, treating $x$ as pounds rather than hundreds of pounds.\n* $21$: gives the predicted fuel efficiency at $x = 5$, $24 - 3$, instead of the change.\n\n**Test Day Takeaway:** Check the units of $x$ before using a slope; when $x$ is in hundreds, convert the change in the input to those units first.",
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
    question: "The table shows the height $h$, in centimeters, of a bamboo shoot $d$ days after it was first measured. The relationship between $d$ and $h$ is linear. What is the best interpretation of the slope of the graph of this relationship in the $dh$-plane?",
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
    question: "The table shows three values of $g$ and their corresponding values of $C$, where $C$ is the monthly cost, in dollars, of a phone plan when $g$ gigabytes of data are used. The relationship between $g$ and $C$ is linear. By how many dollars does the monthly cost increase for each additional gigabyte of data used?",
    diagram: { type: "dataTable", params: { headers: ["g (gigabytes)", "C (dollars)"], rows: [["4", "31"], ["10", "52"], ["16", "73"]] } },
    correctAnswer: "3.5",
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is 3.5.**\n\n**The Fast Way (~20s):** From $g = 4$ to $g = 10$, the cost rises $52 - 31 = 21$ dollars over $6$ gigabytes: $\\frac{21}{6} = 3.5$ dollars per gigabyte.\n\n**The Full Solution:**\nStep 1: The cost per additional gigabyte is the slope, $\\frac{\\text{change in } C}{\\text{change in } g}$.\nStep 2: Using the first two rows: $\\frac{52 - 31}{10 - 4} = \\frac{21}{6} = 3.5$.\nStep 3: So the monthly cost increases by $3.5$ dollars per gigabyte. Check with the last two rows: $\\frac{73 - 52}{16 - 10} = \\frac{21}{6} = 3.5$ ✓\n\n**Common Mistakes:**\n* $21$: reports the change in cost between two rows without dividing by the $6$-gigabyte change.\n* $7.75$: divides a single cost by its data amount, $\\frac{31}{4}$, which includes the fixed part of the cost.\n* $17$: finds the monthly cost when $g = 0$, the intercept, instead of the rate.\n\n**Test Day Takeaway:** A rate from a table is a difference over a difference; dividing one row's output by its input mixes in the fixed starting amount.",
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
    question: "The scatterplot shows the average April snowpack depth $y$, in centimeters, at a mountain station, where $x$ is the number of decades since $1900$. A line of best fit for the data is $y = -2.4x + 78$. What is the best interpretation of the slope of this line?",
    diagram: { type: "scatterplot", params: { points: [[0, 80], [1, 74], [2, 74], [3, 71], [4, 69], [5, 65], [6, 64], [7, 62], [8, 58], [9, 57], [10, 55]], xMin: 0, xMax: 11, yMin: 40, yMax: 85, xGridStep: 1, yGridStep: 5, xLabelStep: 2, yLabelStep: 10, xLabel: "Decades since 1900", yLabel: "April snowpack depth (cm)", bestFitLine: { slope: -2.4, intercept: 78 } } },
    choices: [
      // distractor: reads the rate as per year even though one unit of $x$ is a decade
      { id: "A", text: "Each year, the estimated April snowpack depth decreases by $2.4$ centimeters." },
      // distractor: drops the negative sign, reversing the direction of the trend
      { id: "B", text: "Each decade, the estimated April snowpack depth increases by $2.4$ centimeters." },
      // distractor: multiplies the slope by $10$ while still labeling the result per decade
      { id: "C", text: "Each decade, the estimated April snowpack depth decreases by $24$ centimeters." },
      { id: "D", text: "Each decade, the estimated April snowpack depth decreases by $2.4$ centimeters." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** One unit of $x$ is one decade, so the slope $-2.4$ means the estimated depth falls $2.4$ centimeters per decade.\n\n**The Full Solution:**\n\nStep 1: Read the units from the stem: $x$ counts decades since $1900$ and $y$ is April snowpack depth in centimeters.\n\nStep 2: The slope of $y = -2.4x + 78$ is the change in $y$ per one-unit change in $x$, that is, per decade.\n\nStep 3: The sign is negative, so the depth decreases. Check: at $x = 2$ the model gives $73.2$ and at $x = 3$ it gives $70.8$, a drop of $2.4$.\n\n**Why the wrong answers are tempting:**\n\n* Choice A: attaches the rate to a year, but a one-unit step in $x$ spans ten years, so the yearly drop would be $0.24$ centimeter.\n\n* Choice B: keeps the size $2.4$ but reverses the direction, ignoring the negative slope.\n\n* Choice C: multiplies the slope by $10$, as if converting decades to years, but still reports the result as a per-decade change.\n\n**Test Day Takeaway:** Read what one unit of $x$ stands for before interpreting a slope; a rescaled input silently rescales the rate.",
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
    question: "The graph shows the temperature $y$, in degrees Celsius, of a liquid $x$ minutes after it was placed in a cooling bath. If the temperature continues to decrease at the same rate, by how many degrees Celsius will it decrease in one hour?",
    diagram: { type: "linearGraph", params: { slope: -0.25, yIntercept: 22, xRange: [0, 40], yRange: [0, 24], gridInterval: 2, xTickInterval: 4, yTickInterval: 2, highlightPoints: [[0, 22], [16, 18]] } },
    correctAnswer: "15",
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is 15.**\n\n**The Fast Way (~30s):** From $(0, 22)$ to $(16, 18)$ the temperature drops $4$ degrees in $16$ minutes, which is $0.25$ degree per minute. In $60$ minutes that is $0.25(60) = 15$ degrees.\n\n**The Full Solution:**\nStep 1: The slope of the graph is $\\dfrac{18 - 22}{16 - 0} = \\dfrac{-4}{16} = -0.25$ degree Celsius per minute.\nStep 2: One hour is $60$ minutes, so the decrease in one hour is $0.25 \\times 60 = 15$ degrees Celsius.\nStep 3: Check with the line: at $x = 0$ the temperature is $22$, and at $x = 60$ it would be $22 - 0.25(60) = 7$, a decrease of $22 - 7 = 15$ ✓\n\n**Common Mistakes:**\n* $0.25$: gives the rate per minute and ignores the change to hours.\n* $4$: gives the drop between the two marked points, which span only $16$ minutes.\n* $7$: gives the temperature after one hour instead of the decrease.\n\n**Test Day Takeaway:** Compute the slope in the graph's units first, then convert to the units the question names. A rate per minute becomes a change per hour by multiplying by $60$.",
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
    question: "$y = 6 - \\frac{3}{4}x$\nWhat is the slope of the graph of the given equation in the $xy$-plane?",
    choices: [
      { id: "A", text: "$-\\frac{3}{4}$" },
      // distractor: drops the negative sign in front of 3/4 x
      { id: "B", text: "$\\frac{3}{4}$" },
      // distractor: reads the constant term, which is the y-intercept, as the slope
      { id: "C", text: "$6$" },
      // distractor: gives the x-coordinate of the x-intercept, 6 divided by 3/4
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Rewrite as $y = -\\frac{3}{4}x + 6$; the coefficient of $x$ is the slope, $-\\frac{3}{4}$.\n\n**The Full Solution:**\nStep 1: Reorder the terms into slope-intercept form, $y = mx + b$: $y = -\\frac{3}{4}x + 6$.\nStep 2: The slope $m$ is the coefficient of $x$, including its sign: $m = -\\frac{3}{4}$.\nStep 3: The constant $6$ is the $y$-intercept, not the slope. Check: the points $(0, 6)$ and $(4, 3)$ are on the graph, and $\\frac{3 - 6}{4 - 0} = -\\frac{3}{4}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{3}{4}$): drops the minus sign in front of $\\frac{3}{4}x$.\n* Choice C ($6$): is the first number written, but it is the $y$-intercept.\n* Choice D ($8$): is the $x$-coordinate of the $x$-intercept, where $6 - \\frac{3}{4}x = 0$.\n\n**Test Day Takeaway:** The slope is the coefficient of $x$ wherever the term appears; take the sign in front of it with the coefficient.",
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
    question: "$g(x) = \\frac{5}{2}x - 14$\nThe graph of $y = g(x)$ in the $xy$-plane has a $y$-intercept at $(0, b)$. What is the value of $b$?",
    correctAnswer: "-14",
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**The correct answer is -14.**\n\n**The Fast Way (~10s):** In slope-intercept form, the constant term is the $y$-coordinate of the $y$-intercept: $b = -14$.\n\n**The Full Solution:**\nStep 1: The $y$-intercept is the point where $x = 0$.\nStep 2: Evaluate $g(0) = \\frac{5}{2}(0) - 14 = -14$.\nStep 3: So the $y$-intercept is $(0, -14)$ and $b = -14$. Check: in $y = mx + b$ form, $g(x) = \\frac{5}{2}x + (-14)$, so the constant is $-14$ ✓\n\n**Common Mistakes:**\n* $14$: drops the minus sign in front of $14$.\n* $\\frac{5}{2}$: gives the slope instead of the $y$-intercept.\n* $\\frac{28}{5}$: finds the $x$-intercept, where $\\frac{5}{2}x - 14 = 0$, instead of the $y$-intercept.\n\n**Test Day Takeaway:** The $y$-intercept is the value of the function at $x = 0$; in $y = mx + b$ it is the constant term, sign included.",
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
    question: "The function $f$ is defined by $f(x) = kx + 9$, where $k$ is a constant. If $f(4) = 1$, what is the value of $f(10)$?",
    choices: [
      { id: "A", text: "$-11$" },
      // distractor: reports $k$ instead of $f(10)$
      { id: "B", text: "$-2$" },
      // distractor: solves $9 - 4k = 1$, getting $k = 2$, then evaluates $2(10) + 9$
      { id: "C", text: "$29$" },
      // distractor: solves $4k = 1 + 9$, getting $k = 2.5$, then evaluates $2.5(10) + 9$
      { id: "D", text: "$34$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** From $4k + 9 = 1$, $k = -2$, so $f(10) = -2(10) + 9 = -11$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 4$: $f(4) = 4k + 9$, and this equals $1$.\nStep 2: Solve $4k + 9 = 1$: $4k = -8$, so $k = -2$ and $f(x) = -2x + 9$.\nStep 3: Evaluate $f(10) = -2(10) + 9 = -11$. Check: $f(4) = -8 + 9 = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-2$): this is the value of $k$, the slope, not the value of $f(10)$.\n* Choice C ($29$): writes $9 - 4k = 1$, getting $k = 2$, then evaluates $2(10) + 9 = 29$.\n* Choice D ($34$): adds $9$ to the wrong side, solving $4k = 1 + 9$ to get $k = 2.5$, then evaluates $2.5(10) + 9 = 34$.\n\n**Test Day Takeaway:** Use the given point to find the constant, then answer the question actually asked; the constant itself is a common trap choice.",
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
    question: "The function $g$ is defined by $g(x) = -\\frac{3}{4}x + 17$. For what value of $x$ is $g(x) = 5$?",
    correctAnswer: "16",
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**The correct answer is 16.**\n\n**The Fast Way (~20s):** Set $-\\frac{3}{4}x + 17 = 5$, so $-\\frac{3}{4}x = -12$ and $x = 16$.\n\n**The Full Solution:**\nStep 1: Set the function equal to $5$: $-\\frac{3}{4}x + 17 = 5$.\nStep 2: Subtract $17$ from both sides: $-\\frac{3}{4}x = -12$.\nStep 3: Multiply both sides by $-\\frac{4}{3}$: $x = 16$. Check: $g(16) = -12 + 17 = 5$ ✓\n\n**Common Mistakes:**\n* $-16$: drops the negative sign on the slope, solving $\\frac{3}{4}x = -12$.\n* $-29.33$: adds $17$ to $5$ instead of subtracting it, solving $-\\frac{3}{4}x = 22$.\n* $5$: repeats the output value instead of finding the input $x$.\n\n**Test Day Takeaway:** \"For what value of $x$\" asks for an input: set the function equal to the output and solve.",
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
      // distractor: inverts the slope, dividing run by rise
      { id: "A", text: "$f(x) = -\\dfrac{1}{2}x + 4$" },
      { id: "B", text: "$f(x) = -2x + 4$" },
      // distractor: drops the sign on a line that falls from left to right
      { id: "C", text: "$f(x) = 2x + 4$" },
      // distractor: swaps the slope and the y-intercept
      { id: "D", text: "$f(x) = 4x - 2$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The line crosses the $y$-axis at $(0, 4)$ and falls $6$ units over $3$ units to $(3, -2)$, so $f(x) = -2x + 4$.\n\n**The Full Solution:**\nStep 1: The graph crosses the $y$-axis at $(0, 4)$, so the $y$-intercept is $4$.\nStep 2: Using the marked points $(0, 4)$ and $(3, -2)$, the slope is $\\frac{-2 - 4}{3 - 0} = -2$.\nStep 3: In slope-intercept form, $f(x) = -2x + 4$. Check: $f(3) = -6 + 4 = -2$, which matches the second marked point ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(x) = -\\dfrac{1}{2}x + 4$): divides the run by the rise, inverting the slope.\n* Choice C ($f(x) = 2x + 4$): keeps the steepness but drops the sign, even though the graph falls from left to right.\n* Choice D ($f(x) = 4x - 2$): swaps the two numbers, using the $y$-intercept as the slope.\n\n**Test Day Takeaway:** Read the $y$-intercept where the graph crosses the $y$-axis, then use a second clear point for the slope; a falling line needs a negative slope.",
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
    question: "$y = mx + 3$\nIn the given equation, $m$ is a constant. If $y = 21$ when $x = -6$, what is the value of $m$?",
    correctAnswer: "-3",
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**The correct answer is -3.**\n\n**The Fast Way (~15s):** Substitute: $21 = -6m + 3$, so $-6m = 18$ and $m = -3$.\n\n**The Full Solution:**\nStep 1: Substitute $x = -6$ and $y = 21$ into the equation: $21 = m(-6) + 3$.\nStep 2: Subtract $3$ from both sides: $18 = -6m$.\nStep 3: Divide by $-6$: $m = -3$. Check: $-3(-6) + 3 = 18 + 3 = 21$ ✓\n\n**Common Mistakes:**\n* $3$: drops the negative sign when dividing $18$ by $-6$.\n* $-3.5$: ignores the $+3$ and divides $21$ by $-6$.\n* $-\\frac{1}{3}$: divides in the wrong order, computing $\\frac{-6}{18}$.\n\n**Test Day Takeaway:** Substitute the given pair, isolate the term with the constant, and divide; check the result in the original equation.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reading-slope-intercept-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-215",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The graph of line $t$ is shown. If line $v$ is perpendicular to line $t$, which of the following is the slope of line $v$?",
    diagram: { type: "linearGraph", params: { slope: 0.75, yIntercept: -3, xRange: [-4, 8], yRange: [-6, 6], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, -3], [4, 0]], label: "t" } },
    choices: [
      { id: "A", text: "$-\\frac{4}{3}$" },
      // distractor: changes the sign of line $t$'s slope but does not take the reciprocal
      { id: "B", text: "$-\\frac{3}{4}$" },
      // distractor: reports the slope of line $t$ itself
      { id: "C", text: "$\\frac{3}{4}$" },
      // distractor: takes the reciprocal of line $t$'s slope but does not change the sign
      { id: "D", text: "$\\frac{4}{3}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Line $t$ passes through $(0, -3)$ and $(4, 0)$, so its slope is $\\frac{3}{4}$. Flip the fraction and change the sign: the perpendicular slope is $-\\frac{4}{3}$.\n\n**The Full Solution:**\nStep 1: Read two points on line $t$ from the graph: $(0, -3)$ and $(4, 0)$.\nStep 2: The slope of line $t$ is $\\frac{0 - (-3)}{4 - 0} = \\frac{3}{4}$.\nStep 3: Perpendicular lines have slopes that are negative reciprocals, so the slope of line $v$ is $-\\frac{4}{3}$. Check: $\\left(\\frac{3}{4}\\right)\\left(-\\frac{4}{3}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{3}{4}$): changes the sign of $\\frac{3}{4}$ but does not take the reciprocal.\n* Choice C ($\\frac{3}{4}$): reports the slope of line $t$ itself.\n* Choice D ($\\frac{4}{3}$): takes the reciprocal of $\\frac{3}{4}$ but keeps the positive sign.\n\n**Test Day Takeaway:** A perpendicular slope needs both moves: flip the fraction and change the sign.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-from-rearranged-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-216",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, line $u$ is defined by $y = \\frac{1}{2}x + 3$, and line $v$ is defined by $4x + ky = 5$, where $k$ is a constant. If lines $u$ and $v$ are perpendicular, what is the value of $k$?",
    choices: [
      // distractor: sets $-\frac{4}{k}$ equal to $\frac{1}{2}$, which makes the lines parallel
      { id: "A", text: "$-8$" },
      // distractor: sets $-\frac{4}{k}$ equal to $2$, dropping the negative sign of the perpendicular slope
      { id: "B", text: "$-2$" },
      { id: "C", text: "$2$" },
      // distractor: sets $-\frac{4}{k}$ equal to $-\frac{1}{2}$, changing the sign of line $u$'s slope without taking the reciprocal
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Line $u$ has slope $\\frac{1}{2}$, so line $v$ needs slope $-2$. Line $v$ has slope $-\\frac{4}{k}$, and $-\\frac{4}{k} = -2$ gives $k = 2$.\n\n**The Full Solution:**\nStep 1: Line $u$ is in slope-intercept form, so its slope is $\\frac{1}{2}$. A line perpendicular to it has slope $-2$, the negative reciprocal.\nStep 2: Solve $4x + ky = 5$ for $y$: $ky = -4x + 5$, so $y = -\\frac{4}{k}x + \\frac{5}{k}$. The slope of line $v$ is $-\\frac{4}{k}$.\nStep 3: Set the slopes equal: $-\\frac{4}{k} = -2$, so $4 = 2k$ and $k = 2$. Check: line $v$ is $4x + 2y = 5$, or $y = -2x + \\frac{5}{2}$, and $\\left(\\frac{1}{2}\\right)(-2) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): sets $-\\frac{4}{k}$ equal to $\\frac{1}{2}$, which makes the lines parallel\n* Choice B ($-2$): sets $-\\frac{4}{k}$ equal to $2$, dropping the negative sign of the perpendicular slope\n* Choice D ($8$): sets $-\\frac{4}{k}$ equal to $-\\frac{1}{2}$, changing the sign of line $u$'s slope without taking the reciprocal\n\n**Test Day Takeaway:** Write the slope of the line with the constant as an expression, then set it equal to the negative reciprocal of the other slope.",
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
    question: "Line $k$ is defined by $y = \\frac{4}{9}x + 3$. Which equation defines a line that is perpendicular to line $k$ in the $xy$-plane?",
    choices: [
      { id: "A", text: "$y = -\\frac{9}{4}x + 3$" },
      // distractor: negates the slope without inverting it
      { id: "B", text: "$y = -\\frac{4}{9}x + 3$" },
      // distractor: inverts the slope without negating it
      { id: "C", text: "$y = \\frac{9}{4}x + 3$" },
      // distractor: keeps line $k$'s slope, which gives a parallel line
      { id: "D", text: "$y = \\frac{4}{9}x - 3$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The perpendicular slope is the negative reciprocal of $\\frac{4}{9}$, which is $-\\frac{9}{4}$; only choice A has it.\n\n**The Full Solution:**\nStep 1: Line $k$ is in slope-intercept form, so its slope is $\\frac{4}{9}$.\nStep 2: A perpendicular line has the negative reciprocal slope: $-\\frac{9}{4}$.\nStep 3: Choice A, $y = -\\frac{9}{4}x + 3$, is the only equation with slope $-\\frac{9}{4}$. Check: $\\frac{4}{9} \\cdot \\left(-\\frac{9}{4}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = -\\frac{4}{9}x + 3$): changes the sign but does not invert, so the product of the slopes is $-\\frac{16}{81}$, not $-1$.\n* Choice C ($y = \\frac{9}{4}x + 3$): inverts but does not change the sign, so the product of the slopes is $1$.\n* Choice D ($y = \\frac{4}{9}x - 3$): has the same slope as line $k$, so it is parallel to line $k$.\n\n**Test Day Takeaway:** For perpendicular lines, flip the slope and change its sign; the $y$-intercept does not matter.",
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
    question: "Line $p$ has a slope of $-\\frac{5}{6}$. Line $r$ is perpendicular to line $p$. What is the slope of line $r$?",
    correctAnswer: "6/5",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $\\frac{6}{5}$.**\n\n**The Fast Way (~10s):** Flip $-\\frac{5}{6}$ and change its sign: $\\frac{6}{5}$.\n\n**The Full Solution:**\nStep 1: Line $p$ has slope $-\\frac{5}{6}$.\nStep 2: A line perpendicular to it has the negative reciprocal slope.\nStep 3: Flipping gives $-\\frac{6}{5}$, and changing the sign gives $\\frac{6}{5}$. Check: $-\\frac{5}{6} \\cdot \\frac{6}{5} = -1$ ✓\n\n**Common Mistakes:**\n* $-\\frac{6}{5}$: flips the fraction but keeps the negative sign.\n* $\\frac{5}{6}$: changes the sign but does not flip the fraction.\n* $-\\frac{5}{6}$: copies line $p$'s slope, which describes a parallel line.\n\n**Test Day Takeaway:** Check a perpendicular slope by multiplying: the product of the two slopes must be exactly $-1$.",
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
    question: "The graph of line $r$ is shown in the $xy$-plane. Line $s$ is perpendicular to line $r$ and has a $y$-intercept of $(0, -2)$. Which equation defines line $s$?",
    diagram: { type: "linearGraph", params: { slope: -0.3333333, yIntercept: 2, xRange: [-6, 6], yRange: [-4, 6], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 2], [3, 1]], label: "r" } },
    choices: [
      // distractor: takes the reciprocal of line $r$'s slope but keeps the negative sign
      { id: "A", text: "$y = -3x - 2$" },
      // distractor: uses the slope of line $r$ itself, which gives a line parallel to line $r$
      { id: "B", text: "$y = -\\frac{1}{3}x - 2$" },
      { id: "C", text: "$y = 3x - 2$" },
      // distractor: uses the correct slope but takes the $y$-intercept of line $r$ instead of $(0, -2)$
      { id: "D", text: "$y = 3x + 2$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Perpendicular Line Through a Point**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Line $r$ falls $1$ unit for every $3$ units to the right, so its slope is $-\\frac{1}{3}$. Line $s$ has slope $3$ and $y$-intercept $-2$: $y = 3x - 2$.\n\n**The Full Solution:**\nStep 1: Read two points on line $r$ from the graph: $(0, 2)$ and $(3, 1)$. The slope of line $r$ is $\\frac{1 - 2}{3 - 0} = -\\frac{1}{3}$.\nStep 2: Perpendicular lines have slopes that are negative reciprocals, so line $s$ has slope $3$.\nStep 3: Line $s$ has $y$-intercept $(0, -2)$, so in slope-intercept form it is $y = 3x - 2$. Check: $\\left(-\\frac{1}{3}\\right)(3) = -1$, and $3(0) - 2 = -2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -3x - 2$): takes the reciprocal of line $r$'s slope but keeps the negative sign\n* Choice B ($y = -\\frac{1}{3}x - 2$): uses the slope of line $r$ itself, which gives a line parallel to line $r$\n* Choice D ($y = 3x + 2$): uses the correct slope but takes the $y$-intercept of line $r$ instead of $(0, -2)$\n\n**Test Day Takeaway:** With a slope and a $y$-intercept in hand, write $y = mx + b$ directly.",
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
    question: "$8x + 6y = 45$\nLine $k$ is perpendicular to the graph of the given equation in the $xy$-plane. What is the slope of line $k$?",
    correctAnswer: "3/4",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $\\frac{3}{4}$.**\n\n**The Fast Way (~20s):** The given line has slope $-\\frac{8}{6} = -\\frac{4}{3}$, so line $k$ has slope $\\frac{3}{4}$.\n\n**The Full Solution:**\nStep 1: Solve for $y$: $6y = -8x + 45$, so $y = -\\frac{4}{3}x + \\frac{15}{2}$.\nStep 2: The graph of the given equation has slope $-\\frac{4}{3}$.\nStep 3: Line $k$ has the negative reciprocal slope, $\\frac{3}{4}$. Check: $-\\frac{4}{3} \\cdot \\frac{3}{4} = -1$ ✓\n\n**Common Mistakes:**\n* $-\\frac{3}{4}$: flips the slope but keeps the negative sign.\n* $\\frac{4}{3}$: changes the sign but does not flip the fraction.\n* $-\\frac{4}{3}$: reports the slope of the given line instead of line $k$.\n\n**Test Day Takeaway:** For $Ax + By = C$, the slope is $-\\frac{A}{B}$; take that first, then the negative reciprocal.",
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
    question: "In the $xy$-plane, the graph of $7x - 3y = 24$ is perpendicular to line $q$. What is the slope of line $q$?",
    choices: [
      // distractor: negates the given line's slope without inverting it
      { id: "A", text: "$-\\frac{7}{3}$" },
      { id: "B", text: "$-\\frac{3}{7}$" },
      // distractor: inverts the given line's slope without negating it
      { id: "C", text: "$\\frac{3}{7}$" },
      // distractor: reports the slope of the given line
      { id: "D", text: "$\\frac{7}{3}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The given line has slope $\\frac{7}{3}$, so line $q$ has slope $-\\frac{3}{7}$.\n\n**The Full Solution:**\nStep 1: Solve for $y$: $-3y = -7x + 24$, so $y = \\frac{7}{3}x - 8$.\nStep 2: The graph of the given equation has slope $\\frac{7}{3}$.\nStep 3: Line $q$ has the negative reciprocal slope, $-\\frac{3}{7}$. Check: $\\frac{7}{3} \\cdot \\left(-\\frac{3}{7}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{7}{3}$): changes the sign of $\\frac{7}{3}$ but does not flip it.\n* Choice C ($\\frac{3}{7}$): flips $\\frac{7}{3}$ but does not change its sign.\n* Choice D ($\\frac{7}{3}$): is the slope of the given line itself, which would make the lines parallel.\n\n**Test Day Takeaway:** Rewrite a standard-form equation as $y = mx + b$ before reading the slope; a negative $y$-coefficient flips the sign.",
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
    question: "In the $xy$-plane, line $v$ passes through the origin and is perpendicular to the line $y = -\\frac{4}{9}x + 2$. If the point $(8, b)$ lies on line $v$, what is the value of $b$?",
    correctAnswer: "18",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is 18.**\n\n**The Fast Way (~20s):** Line $v$ has slope $\\frac{9}{4}$ and passes through the origin, so $b = \\frac{9}{4}(8) = 18$.\n\n**The Full Solution:**\nStep 1: The given line has slope $-\\frac{4}{9}$, so line $v$ has slope $\\frac{9}{4}$.\nStep 2: Line $v$ passes through the origin, so its equation is $y = \\frac{9}{4}x$.\nStep 3: Substitute $x = 8$: $b = \\frac{9}{4}(8) = 18$. Check: the slope from $(0, 0)$ to $(8, 18)$ is $\\frac{18}{8} = \\frac{9}{4}$, and $-\\frac{4}{9} \\cdot \\frac{9}{4} = -1$ ✓\n\n**Common Mistakes:**\n* $-18$: uses slope $-\\frac{9}{4}$, flipping the slope without changing its sign.\n* $\\frac{32}{9}$: uses slope $\\frac{4}{9}$, changing the sign without flipping.\n* $20$: adds the $y$-intercept $2$ of the given line, but line $v$ passes through the origin, so its intercept is $0$.\n\n**Test Day Takeaway:** A line through the origin is $y = mx$; once you have the perpendicular slope, plug in the $x$-value.",
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
    question: "In the $xy$-plane, line $m$ has a slope of $\\frac{k - 3}{4}$ and line $n$ has a slope of $\\frac{8}{k}$, where $k$ is a nonzero constant. If lines $m$ and $n$ are perpendicular, what is the value of $k$?",
    choices: [
      // distractor: multiplies only the $k$ by $8$, solving $8k - 3 = -4k$, so $12k = 3$
      { id: "A", text: "$\\frac{1}{4}$" },
      // distractor: divides in the wrong order at the last step, reporting $\frac{12}{24}$ instead of $\frac{24}{12}$
      { id: "B", text: "$\\frac{1}{2}$" },
      { id: "C", text: "$2$" },
      // distractor: sets the product of the slopes equal to $1$ instead of $-1$, solving $8k - 24 = 4k$
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Perpendicular slopes multiply to $-1$: $\\frac{8(k - 3)}{4k} = -1$, so $8k - 24 = -4k$ and $k = 2$.\n\n**The Full Solution:**\nStep 1: Set the product of the slopes equal to $-1$: $\\frac{k - 3}{4} \\cdot \\frac{8}{k} = -1$.\nStep 2: Multiply both sides by $4k$: $8(k - 3) = -4k$, so $8k - 24 = -4k$.\nStep 3: Then $12k = 24$ and $k = 2$. Check: the slopes are $\\frac{2 - 3}{4} = -\\frac{1}{4}$ and $\\frac{8}{2} = 4$, and $\\left(-\\frac{1}{4}\\right)(4) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{4}$): distributes the $8$ to $k$ only, writing $8k - 3 = -4k$, so $12k = 3$.\n* Choice B ($\\frac{1}{2}$): reaches $12k = 24$ but divides in the wrong order, reporting $\\frac{12}{24}$.\n* Choice D ($6$): sets the product of the slopes equal to $1$ instead of $-1$, giving $8k - 24 = 4k$.\n\n**Test Day Takeaway:** When slopes contain a constant, write the perpendicular condition as a product equal to $-1$, clear the fractions, and check the final slopes.",
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
    question: "$ax + 15y = 40$\nIn the given equation, $a$ is a constant. In the $xy$-plane, the graph of the given equation is perpendicular to the graph of $6x - 10y = 7$. What is the value of $a$?",
    correctAnswer: "25",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~35s):** The graph of $6x - 10y = 7$ has slope $\\frac{6}{10} = \\frac{3}{5}$, so the given line needs slope $-\\frac{5}{3}$. Its slope is $-\\frac{a}{15}$, and $-\\frac{a}{15} = -\\frac{5}{3}$ gives $a = 25$.\n\n**The Full Solution:**\nStep 1: Solve $6x - 10y = 7$ for $y$: $-10y = -6x + 7$, so $y = \\frac{3}{5}x - \\frac{7}{10}$. Its slope is $\\frac{3}{5}$.\nStep 2: A line perpendicular to it has slope $-\\frac{5}{3}$. Solving $ax + 15y = 40$ for $y$ gives $y = -\\frac{a}{15}x + \\frac{8}{3}$, so its slope is $-\\frac{a}{15}$.\nStep 3: Set the slopes equal: $-\\frac{a}{15} = -\\frac{5}{3}$, so $a = 15 \\cdot \\frac{5}{3} = 25$. Check: $25x + 15y = 40$ has slope $-\\frac{25}{15} = -\\frac{5}{3}$, and $\\left(\\frac{3}{5}\\right)\\left(-\\frac{5}{3}\\right) = -1$ ✓\n\n**Common Mistakes:**\n* $-25$: drops the negative sign in the slope $-\\frac{a}{15}$, setting $\\frac{a}{15} = -\\frac{5}{3}$.\n* $-9$: sets $-\\frac{a}{15}$ equal to $\\frac{3}{5}$, which makes the lines parallel.\n* $9$: sets $-\\frac{a}{15}$ equal to $-\\frac{3}{5}$, changing the sign without taking the reciprocal.\n\n**Test Day Takeaway:** Write each slope in the form $-\\frac{A}{B}$, then make one the negative reciprocal of the other.",
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
    question: "The graph of line $t$ is shown in the $xy$-plane. Line $w$ is parallel to line $t$ and passes through the point $(0, -5)$. Which equation defines line $w$?",
    diagram: { type: "linearGraph", params: { slope: -2, yIntercept: 4, xRange: [-4, 6], yRange: [-6, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 4], [3, -2]], label: "t" } },
    choices: [
      { id: "A", text: "$y = -2x - 5$" },
      // distractor: gives the equation of line $t$ itself instead of a line through $(0, -5)$
      { id: "B", text: "$y = -2x + 4$" },
      // distractor: uses the perpendicular slope $\frac{1}{2}$ instead of the same slope
      { id: "C", text: "$y = \\frac{1}{2}x - 5$" },
      // distractor: changes the sign of the slope
      { id: "D", text: "$y = 2x - 5$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Line $t$ has slope $-2$, so line $w$ does too. The point $(0, -5)$ is its $y$-intercept: $y = -2x - 5$.\n\n**The Full Solution:**\nStep 1: Read two points on line $t$ from the graph: $(0, 4)$ and $(3, -2)$. The slope is $\\frac{-2 - 4}{3 - 0} = -2$.\nStep 2: Parallel lines have the same slope, so line $w$ has slope $-2$.\nStep 3: The point $(0, -5)$ is on the $y$-axis, so it is the $y$-intercept of line $w$: $y = -2x - 5$. Check: $-2(0) - 5 = -5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = -2x + 4$): gives the equation of line $t$ itself instead of a line through $(0, -5)$\n* Choice C ($y = \\frac{1}{2}x - 5$): uses the perpendicular slope $\\frac{1}{2}$ instead of the same slope\n* Choice D ($y = 2x - 5$): changes the sign of the slope\n\n**Test Day Takeaway:** A parallel line keeps the slope; a point with $x$-coordinate $0$ gives the $y$-intercept directly.",
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
    question: "In the $xy$-plane, line $j$ is parallel to the graph of $y = 6x - 1$. Line $j$ passes through the points $(0, 0)$ and $(2, d)$. What is the value of $d$?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~10s):** Line $j$ has slope $6$ and passes through the origin, so its equation is $y = 6x$. At $x = 2$, $d = 6(2) = 12$.\n\n**The Full Solution:**\nStep 1: Parallel lines have the same slope, so line $j$ has slope $6$.\nStep 2: Line $j$ passes through $(0, 0)$, so its $y$-intercept is $0$ and its equation is $y = 6x$.\nStep 3: Substitute $x = 2$: $d = 6(2) = 12$. Check: the slope from $(0, 0)$ to $(2, 12)$ is $\\frac{12}{2} = 6$ ✓\n\n**Common Mistakes:**\n* $11$: uses the equation $y = 6x - 1$ itself instead of the parallel line through the origin.\n* $3$: divides $6$ by $2$ instead of multiplying.\n* $-\\frac{1}{3}$: uses the perpendicular slope $-\\frac{1}{6}$ instead of the same slope.\n\n**Test Day Takeaway:** A line through the origin with slope $m$ is $y = mx$; parallel lines share the slope.",
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
    question: "Line $k$ is shown in the $xy$-plane. Line $w$ passes through the point $(0, 5)$ and does not intersect line $k$. Which of the following points lies on line $w$?",
    diagram: { type: "linearGraph", params: { slope: 3, yIntercept: -7, xRange: [-4, 6], yRange: [-8, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[2, -1], [4, 5]], label: "k" } },
    choices: [
      // distractor: uses slope $-3$, changing the sign of line $k$'s slope
      { id: "A", text: "$(3, -4)$" },
      // distractor: gives a point on line $k$, $y = 3x - 7$, instead of on line $w$
      { id: "B", text: "$(3, 2)$" },
      // distractor: uses the perpendicular slope $-\frac{1}{3}$ instead of the same slope
      { id: "C", text: "$(3, 4)$" },
      { id: "D", text: "$(3, 14)$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Lines that never intersect are parallel, so line $w$ has the same slope as line $k$, which is $3$. With $y$-intercept $5$, line $w$ is $y = 3x + 5$, and at $x = 3$, $y = 14$.\n\n**The Full Solution:**\nStep 1: Read two points on line $k$ from the graph: $(2, -1)$ and $(4, 5)$. The slope is $\\frac{5 - (-1)}{4 - 2} = 3$.\nStep 2: Two distinct lines that do not intersect are parallel, so line $w$ also has slope $3$. It passes through $(0, 5)$, so its equation is $y = 3x + 5$.\nStep 3: Each choice has $x = 3$, and $3(3) + 5 = 14$, so $(3, 14)$ lies on line $w$. Check: the slope from $(0, 5)$ to $(3, 14)$ is $\\frac{9}{3} = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(3, -4)$): uses slope $-3$, changing the sign of line $k$'s slope\n* Choice B ($(3, 2)$): gives a point on line $k$, $y = 3x - 7$, instead of on line $w$\n* Choice C ($(3, 4)$): uses the perpendicular slope $-\\frac{1}{3}$ instead of the same slope\n\n**Test Day Takeaway:** \"Does not intersect\" means parallel: copy the slope, then use the given point.",
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
    question: "$6x + 3y = 15$\nIn the $xy$-plane, line $w$ is parallel to the graph of the given equation and passes through the points $(0, 9)$ and $(2, c)$. What is the value of $c$?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~20s):** The given equation is $y = -2x + 5$, so line $w$ has slope $-2$ and $y$-intercept $9$: $y = -2x + 9$. At $x = 2$, $c = -4 + 9 = 5$.\n\n**The Full Solution:**\nStep 1: Solve the given equation for $y$: $3y = -6x + 15$, so $y = -2x + 5$. Its slope is $-2$.\nStep 2: Parallel lines have the same slope, so line $w$ has slope $-2$. It passes through $(0, 9)$, so its equation is $y = -2x + 9$.\nStep 3: Substitute $x = 2$: $c = -2(2) + 9 = 5$. Check: the slope from $(0, 9)$ to $(2, 5)$ is $\\frac{5 - 9}{2 - 0} = -2$ ✓\n\n**Common Mistakes:**\n* $13$: uses slope $2$ instead of $-2$, missing the sign when solving for $y$.\n* $8$: uses slope $-\\frac{1}{2}$, the reciprocal of $-2$, giving $9 - 1 = 8$.\n* $1$: substitutes $x = 2$ into the given line $y = -2x + 5$ instead of line $w$.\n\n**Test Day Takeaway:** Rewrite a standard-form equation as $y = mx + b$ to read its slope; a parallel line keeps that slope.",
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
    question: "The graph of line $g$ is shown in the $xy$-plane. Line $h$ is parallel to line $g$ and passes through the point $(0, -4)$. What is the $x$-coordinate of the $x$-intercept of line $h$?",
    diagram: { type: "linearGraph", params: { slope: 2, yIntercept: -3, xRange: [-5, 5], yRange: [-8, 6], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, -3], [2, 1]], label: "g" } },
    choices: [
      // distractor: uses the perpendicular slope $-\frac{1}{2}$, so $-\frac{1}{2}x - 4 = 0$ gives $x = -8$
      { id: "A", text: "$-8$" },
      // distractor: makes a sign error solving $2x - 4 = 0$
      { id: "B", text: "$-2$" },
      // distractor: gives the $x$-intercept of line $g$ instead of line $h$
      { id: "C", text: "$\\frac{3}{2}$" },
      { id: "D", text: "$2$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Line $g$ has slope $2$, so line $h$ is $y = 2x - 4$. Setting $y = 0$ gives $x = 2$.\n\n**The Full Solution:**\nStep 1: Read two points on line $g$ from the graph: $(0, -3)$ and $(2, 1)$. The slope is $\\frac{1 - (-3)}{2 - 0} = 2$.\nStep 2: Parallel lines have the same slope, and $(0, -4)$ is the $y$-intercept of line $h$, so line $h$ is $y = 2x - 4$.\nStep 3: At the $x$-intercept, $y = 0$: $2x - 4 = 0$, so $x = 2$. Check: $2(2) - 4 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): uses the perpendicular slope $-\\frac{1}{2}$, so $-\\frac{1}{2}x - 4 = 0$ gives $x = -8$\n* Choice B ($-2$): makes a sign error solving $2x - 4 = 0$\n* Choice C ($\\frac{3}{2}$): gives the $x$-intercept of line $g$ instead of line $h$\n\n**Test Day Takeaway:** Find the parallel line's equation from the slope and the $y$-intercept, then set $y = 0$.",
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
    question: "In the $xy$-plane, the line passing through the points $(2, -5)$ and $(6, 1)$ is parallel to the graph of $y = \\frac{c}{4}x + 9$, where $c$ is a constant. What is the value of $c$?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**The correct answer is 6.**\n\n**The Fast Way (~20s):** The slope through the points is $\\frac{6}{4} = \\frac{3}{2}$, so $\\frac{c}{4} = \\frac{3}{2}$ and $c = 6$.\n\n**The Full Solution:**\nStep 1: The slope through $(2, -5)$ and $(6, 1)$ is $\\frac{1 - (-5)}{6 - 2} = \\frac{6}{4} = \\frac{3}{2}$.\nStep 2: Parallel lines have equal slopes, so $\\frac{c}{4} = \\frac{3}{2}$.\nStep 3: Multiply both sides by $4$: $c = 6$. Check: $\\frac{6}{4} = \\frac{3}{2}$ ✓\n\n**Common Mistakes:**\n* $\\frac{3}{2}$: stops at the slope instead of solving $\\frac{c}{4} = \\frac{3}{2}$ for $c$.\n* $\\frac{8}{3}$: divides the run by the rise, getting a slope of $\\frac{2}{3}$.\n* $-6$: subtracts the coordinates in mixed order, $\\frac{1 - (-5)}{2 - 6} = -\\frac{3}{2}$.\n\n**Test Day Takeaway:** Compute the slope from the two points, set it equal to the slope expression, and solve for the constant.",
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
    question: "In the $xy$-plane, a line that does not intersect the graph of $3x + 7y = 21$ passes through the points $(t, 4)$ and $(t + 14, s)$, where $t$ and $s$ are constants. What is the value of $s$?",
    correctAnswer: "-2",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**The correct answer is -2.**\n\n**The Fast Way (~35s):** The line is parallel to $3x + 7y = 21$, so its slope is $-\\frac{3}{7}$; over a run of $14$, $y$ changes by $-6$, so $s = 4 - 6 = -2$.\n\n**The Full Solution:**\nStep 1: The given equation has slope $-\\frac{3}{7}$, and a line that does not intersect it is parallel, so it also has slope $-\\frac{3}{7}$.\nStep 2: The run between the points is $(t + 14) - t = 14$, so the rise is $-\\frac{3}{7}(14) = -6$.\nStep 3: Then $s = 4 + (-6) = -2$. Check: $\\frac{-2 - 4}{14} = -\\frac{6}{14} = -\\frac{3}{7}$ ✓\n\n**Common Mistakes:**\n* $10$: uses slope $\\frac{3}{7}$ instead of $-\\frac{3}{7}$, so $s = 4 + 6$.\n* $-6$: stops at the change in $y$ instead of adding it to the starting value $4$.\n* No answer: trying to find $t$ first, but $t$ cancels in the run, so its value is never needed.\n\n**Test Day Takeaway:** When a point's coordinate is an unknown constant, work with the run and the rise; the unknown often cancels.",
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
    question: "$7(3m + 8) = 21m + c$\nIn the given equation, $c$ is a constant. If the equation has infinitely many solutions, what is the value of $c$?",
    choices: [
      // distractor: adds $7$ and $8$ instead of multiplying them
      { id: "A", text: "$15$" },
      // distractor: multiplies the two numbers inside the parentheses, $3 \cdot 8$
      { id: "B", text: "$24$" },
      { id: "C", text: "$56$" },
      // distractor: multiplies $8$ by the distributed coefficient $21$ instead of by $7$
      { id: "D", text: "$168$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Distributing gives $21m + 56$, so the two sides match exactly when $c = 56$.\n\n**The Full Solution:**\nStep 1: Distribute the left side: $7(3m + 8) = 21m + 56$.\nStep 2: An equation in one variable has infinitely many solutions when both sides are the same expression, so $21m + 56$ must equal $21m + c$.\nStep 3: The $m$-terms already match, so the constants must match: $c = 56$. Check: with $c = 56$, both sides are $21m + 56$, true for every $m$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): adds $7$ and $8$ instead of multiplying them.\n* Choice B ($24$): multiplies the two numbers inside the parentheses, $3 \\cdot 8$.\n* Choice D ($168$): multiplies $8$ by $21$, the distributed coefficient, instead of by $7$.\n\n**Test Day Takeaway:** Infinitely many solutions means the two sides are identical: distribute, then match the constant terms.",
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
    question: "$8(6t - 5) = pt - 40$\nThe given equation is true for all values of $t$, where $p$ is a constant. What is the value of $p$?",
    correctAnswer: "48",
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**The correct answer is 48.**\n\n**The Fast Way (~10s):** Distributing gives $48t - 40$, so $p = 48$.\n\n**The Full Solution:**\nStep 1: Distribute the left side: $8(6t - 5) = 48t - 40$.\nStep 2: The equation is true for all $t$, so $48t - 40$ and $pt - 40$ must be the same expression.\nStep 3: Match the coefficients of $t$: $p = 48$. Check: $48t - 40 = 48t - 40$ for every $t$ ✓\n\n**Common Mistakes:**\n* $6$: copies the coefficient inside the parentheses without multiplying it by $8$.\n* $14$: adds $8$ and $6$ instead of multiplying them.\n* $-40$: reports the constant term, which already matches, instead of the coefficient of $t$.\n\n**Test Day Takeaway:** \"True for all values\" means the two sides are identical; distribute and match coefficients term by term.",
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
    question: "The expression $n(4w + 3) - 2w$ is equivalent to $30w + 24$, where $n$ is a constant. What is the value of $n$?",
    choices: [
      // distractor: adds $2w$ instead of subtracting it, solving $4n + 2 = 30$
      { id: "A", text: "$7$" },
      // distractor: ignores the $-2w$ term, solving $4n = 30$
      { id: "B", text: "$7.5$" },
      { id: "C", text: "$8$" },
      // distractor: subtracts $3$ from $24$ instead of dividing $24$ by $3$
      { id: "D", text: "$21$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The constant terms give $3n = 24$, so $n = 8$; the $w$-terms confirm it, since $4(8) - 2 = 30$.\n\n**The Full Solution:**\nStep 1: Distribute: $n(4w + 3) - 2w = 4nw + 3n - 2w = (4n - 2)w + 3n$.\nStep 2: Equivalent expressions have equal coefficients, so $4n - 2 = 30$ and $3n = 24$.\nStep 3: From $3n = 24$, $n = 8$. Check: $4(8) - 2 = 30$, so $8(4w + 3) - 2w = 32w + 24 - 2w = 30w + 24$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): adds the $2w$ instead of subtracting it, solving $4n + 2 = 30$.\n* Choice B ($7.5$): ignores the $-2w$ term and solves $4n = 30$; then the constant term would be $22.5$, not $24$.\n* Choice D ($21$): subtracts $3$ from $24$ instead of dividing $24$ by $3$.\n\n**Test Day Takeaway:** Match the cleanest pair of coefficients first, often the constants, and use the other pair as a check.",
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
    question: "$4(3v + 7) + 5v = av + 28$\nIn the given equation, $a$ is a constant. If the equation has infinitely many solutions, what is the value of $a$?",
    correctAnswer: "17",
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**The correct answer is 17.**\n\n**The Fast Way (~15s):** The left side simplifies to $17v + 28$, so $a = 17$.\n\n**The Full Solution:**\nStep 1: Distribute: $4(3v + 7) + 5v = 12v + 28 + 5v$.\nStep 2: Combine like terms: $17v + 28$.\nStep 3: Infinitely many solutions means $17v + 28$ and $av + 28$ are the same expression, so $a = 17$. Check: $4(3v + 7) + 5v = 17v + 28$ for every $v$; at $v = 1$, both sides equal $45$ ✓\n\n**Common Mistakes:**\n* $12$: distributes correctly but forgets the $5v$ outside the parentheses.\n* $9$: adds $4$ and $5$ and treats $3v$ as a single $v$.\n* $28$: reports the constant term instead of the coefficient of $v$.\n\n**Test Day Takeaway:** Simplify the side with parentheses completely, including terms outside them, before matching coefficients.",
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
    question: "$k(2r + 9) = 14r + c$\nIn the given equation, $k$ and $c$ are constants. The equation has infinitely many solutions. What is the value of $c$?",
    choices: [
      // distractor: copies the $9$ inside the parentheses without multiplying by $k$
      { id: "A", text: "$9$" },
      // distractor: multiplies the two numbers inside the parentheses, $2 \cdot 9$
      { id: "B", text: "$18$" },
      { id: "C", text: "$63$" },
      // distractor: multiplies $9$ by $14$, the distributed coefficient, instead of by $k$
      { id: "D", text: "$126$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Matching the $r$-terms gives $2k = 14$, so $k = 7$, and then $c = 9k = 63$.\n\n**The Full Solution:**\nStep 1: Distribute the left side: $2kr + 9k$.\nStep 2: Infinitely many solutions means the two sides are identical, so $2k = 14$ and $9k = c$. From $2k = 14$, $k = 7$.\nStep 3: Then $c = 9(7) = 63$. Check: $7(2r + 9) = 14r + 63$ for every $r$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): copies the $9$ inside the parentheses without multiplying by $k$.\n* Choice B ($18$): multiplies the two numbers inside the parentheses, $2 \\cdot 9$.\n* Choice D ($126$): multiplies $9$ by $14$, the coefficient on the right side, instead of by $k = 7$.\n\n**Test Day Takeaway:** When two constants are unknown, use the matched pair you can solve directly, then substitute into the other pair.",
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
    question: "$a(s + 6) + 3s = 11s + 48$\nIn the given equation, $a$ is a constant. If the equation is true for all values of $s$, what is the value of $a$?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**The correct answer is 8.**\n\n**The Fast Way (~15s):** The constants give $6a = 48$, so $a = 8$; the $s$-terms agree, since $8 + 3 = 11$.\n\n**The Full Solution:**\nStep 1: Distribute: $a(s + 6) + 3s = as + 6a + 3s = (a + 3)s + 6a$.\nStep 2: For the equation to hold for all $s$, the coefficients must match: $a + 3 = 11$ and $6a = 48$.\nStep 3: Both give $a = 8$. Check: $8(s + 6) + 3s = 11s + 48$ ✓\n\n**Common Mistakes:**\n* $11$: reads the coefficient $11$ off the right side and ignores the $3s$ on the left.\n* $14$: adds $3$ to $11$ instead of subtracting it.\n* $6$: reports the number inside the parentheses rather than the multiplier $a$.\n\n**Test Day Takeaway:** Collect every term with the variable before matching; a term outside the parentheses changes the coefficient.",
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
    question: "$(4x + a)(x + b) = 4x^{2} + 23x + 15$\nThe given equation is true for all values of $x$, where $a$ and $b$ are positive integers. What is the value of $a$?",
    choices: [
      // distractor: uses only $ab = 15$ and picks $a = 1$, $b = 15$ without checking the $x$-coefficient
      { id: "A", text: "$1$" },
      { id: "B", text: "$3$" },
      // distractor: multiplies the wrong pair for the middle term, solving $4a + b = 23$, which gives $a = 5$ and $b = 3$
      { id: "C", text: "$5$" },
      // distractor: uses only $ab = 15$ and picks $a = 15$, $b = 1$ without checking the $x$-coefficient
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Matching Coefficients with Integer Constraints**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** Expanding gives $4x^{2} + (4b + a)x + ab$, so $ab = 15$ and $4b + a = 23$; of the positive integer pairs, only $a = 3$, $b = 5$ works.\n\n**The Full Solution:**\nStep 1: Expand the left side: $(4x + a)(x + b) = 4x^{2} + 4bx + ax + ab = 4x^{2} + (4b + a)x + ab$.\nStep 2: Match coefficients: $4b + a = 23$ and $ab = 15$. The positive integer pairs with $ab = 15$ are $(a, b) = (1, 15), (3, 5), (5, 3), (15, 1)$, giving $4b + a = 61, 23, 17, 19$.\nStep 3: Only $(a, b) = (3, 5)$ gives $23$, so $a = 3$. Check: $(4x + 3)(x + 5) = 4x^{2} + 20x + 3x + 15 = 4x^{2} + 23x + 15$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): uses only $ab = 15$ with $a = 1$ and $b = 15$; the middle coefficient would be $61$.\n* Choice C ($5$): pairs the $4$ with $a$ instead of $b$, solving $4a + b = 23$; but $(4x + 5)(x + 3) = 4x^{2} + 17x + 15$.\n* Choice D ($15$): uses only $ab = 15$ with $a = 15$ and $b = 1$; the middle coefficient would be $19$.\n\n**Test Day Takeaway:** With integer constraints, list the factor pairs of the constant term and test each one against the middle coefficient.",
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
    question: "$4(ct - 3) - 5t = 19t + d$\nIn the given equation, $c$ and $d$ are constants. If the equation has infinitely many solutions, what is the value of $c + d$?",
    correctAnswer: "-6",
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**The correct answer is -6.**\n\n**The Fast Way (~30s):** The left side is $(4c - 5)t - 12$, so $4c - 5 = 19$ gives $c = 6$, $d = -12$, and $c + d = -6$.\n\n**The Full Solution:**\nStep 1: Distribute and collect: $4(ct - 3) - 5t = 4ct - 12 - 5t = (4c - 5)t - 12$.\nStep 2: Infinitely many solutions means the sides are identical: $4c - 5 = 19$ and $d = -12$. So $4c = 24$ and $c = 6$.\nStep 3: Then $c + d = 6 + (-12) = -6$. Check: $4(6t - 3) - 5t = 24t - 12 - 5t = 19t - 12$ ✓\n\n**Common Mistakes:**\n* $6$: stops at $c$ and never adds $d$.\n* $18$: adds $c = 6$ to $12$ instead of to $-12$, losing the sign of the constant.\n* $3$: treats the $-3$ inside the parentheses as $d$ without distributing the $4$, then adds it to $c = 6$.\n\n**Test Day Takeaway:** Distribute every factor before matching; a constant inside parentheses gets multiplied too.",
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
    question: "$y = -5x + 8$\n$y = cx - 3$\nIn the given system of equations, $c$ is a constant. If the system has no solution, what is the value of $c$?",
    choices: [
      { id: "A", text: "$-5$" },
      // distractor: reads the constant term of the second equation
      { id: "B", text: "$-3$" },
      // distractor: drops the sign on the slope of the first equation
      { id: "C", text: "$5$" },
      // distractor: reports the $y$-intercept of the first equation
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** No solution means parallel, distinct lines: the slopes must match, so $c = -5$.\n\n**The Full Solution:**\nStep 1: Both equations are in slope-intercept form, with slopes $-5$ and $c$ and $y$-intercepts $8$ and $-3$.\nStep 2: A system of two linear equations has no solution when the lines are parallel and distinct: equal slopes, different intercepts.\nStep 3: Set $c = -5$; the intercepts $8$ and $-3$ already differ. Check: $-5x + 8 = -5x - 3$ simplifies to $8 = -3$, which is never true ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-3$): reads the constant term of the second equation, which is an intercept, not a slope.\n* Choice C ($5$): drops the sign on the slope $-5$; slopes $-5$ and $5$ give lines that intersect.\n* Choice D ($8$): reports the $y$-intercept of the first equation.\n\n**Test Day Takeaway:** No solution means same slope and different intercepts; in slope-intercept form, match the $x$-coefficients.",
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
    question: "$y = 7x - 2$\n$y = kx + 5$\nIn the given system of equations, $k$ is a constant. For what value of $k$ does the system have no solution?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~10s):** No solution means the lines are parallel and distinct: the same slope with different $y$-intercepts. So $k = 7$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has no solution when the lines are parallel and distinct.\nStep 2: Both equations are in slope-intercept form. The first line has slope $7$ and $y$-intercept $-2$; the second has slope $k$ and $y$-intercept $5$.\nStep 3: The $y$-intercepts already differ, so the slopes must match: $k = 7$. Check: $7x - 2 = 7x + 5$ reduces to $-2 = 5$, which is false, so the system has no solution ✓\n\n**Common Mistakes:**\n* $5$: copies the $y$-intercept of the second equation.\n* $-7$: changes the sign of the slope.\n* $-\\frac{1}{7}$: uses the perpendicular slope, which gives exactly one solution.\n\n**Test Day Takeaway:** Two lines in $y = mx + b$ form with different $y$-intercepts have no solution exactly when their slopes are equal.",
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
    question: "Line $c$ is shown in the $xy$-plane. The graph of $kx + 2y = 18$, where $k$ is a constant, has no point in common with line $c$. What is the value of $k$?",
    diagram: { type: "linearGraph", params: { slope: 2.5, yIntercept: -1, xRange: [-4, 4], yRange: [-6, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, -1], [2, 4]], label: "c" } },
    choices: [
      { id: "A", text: "$-5$" },
      // distractor: divides the slope by $2$ instead of multiplying, solving $-\frac{k}{2} = \frac{5}{2}$ as $k = -\frac{5}{2} \div 2$
      { id: "B", text: "$-\\frac{5}{4}$" },
      // distractor: reports the slope of line $c$ instead of solving for $k$
      { id: "C", text: "$\\frac{5}{2}$" },
      // distractor: drops the negative sign when solving $-\frac{k}{2} = \frac{5}{2}$
      { id: "D", text: "$5$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Line $c$ has slope $\\frac{5}{2}$, and $kx + 2y = 18$ has slope $-\\frac{k}{2}$, so $-\\frac{k}{2} = \\frac{5}{2}$ and $k = -5$.\n\n**The Full Solution:**\nStep 1: Line $c$ passes through $(0, -1)$ and $(2, 4)$, so its slope is $\\frac{4 - (-1)}{2 - 0} = \\frac{5}{2}$.\nStep 2: Solve $kx + 2y = 18$ for $y$: $y = -\\frac{k}{2}x + 9$, so its slope is $-\\frac{k}{2}$ and its $y$-intercept is $9$.\nStep 3: Lines with no point in common are parallel and distinct, so $-\\frac{k}{2} = \\frac{5}{2}$, which gives $k = -5$; the $y$-intercepts $9$ and $-1$ differ, so the lines are distinct. Check: $-\\frac{-5}{2} = \\frac{5}{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{5}{4}$): divides the slope by $2$ instead of multiplying, solving $-\\frac{k}{2} = \\frac{5}{2}$ as $k = -\\frac{5}{2} \\div 2$\n* Choice C ($\\frac{5}{2}$): reports the slope of line $c$ instead of solving for $k$\n* Choice D ($5$): drops the negative sign when solving $-\\frac{k}{2} = \\frac{5}{2}$\n\n**Test Day Takeaway:** Solve the given equation for $y$ before comparing slopes; the sign in front of $k$ is where most errors happen.",
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
    question: "$\\frac{2}{3}x - \\frac{1}{2}y = 7$\n$ax - 15y = 4$\nIn the given system of equations, $a$ is a constant. The system has no solution. What is the value of $a$?",
    correctAnswer: "20",
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**The correct answer is 20.**\n\n**The Fast Way (~30s):** Multiplying the first equation by $30$ makes its $y$-term $-15y$ and its $x$-term $20x$, so $a = 20$.\n\n**The Full Solution:**\nStep 1: Multiply $\\frac{2}{3}x - \\frac{1}{2}y = 7$ by $30$ so that its coefficient of $y$ matches the second equation: $20x - 15y = 210$.\nStep 2: The system has no solution only if the lines are parallel and distinct, so the coefficients of $x$ must also match: $a = 20$.\nStep 3: With $a = 20$ the second equation is $20x - 15y = 4$, and $4 \\neq 210$, so the lines are distinct. Check: both lines have slope $\\frac{20}{15} = \\frac{4}{3}$ ✓\n\n**Common Mistakes:**\n* $10$: treats $\\frac{2}{3}$ as the slope of the first line; its slope is $\\frac{2/3}{1/2} = \\frac{4}{3}$.\n* $-20$: loses the sign when dividing by $-15$.\n* $11.25$: uses the reciprocal slope $\\frac{3}{4}$, giving $a = \\frac{45}{4}$.\n\n**Test Day Takeaway:** Clear the fractions by scaling one equation so a pair of coefficients matches; then the other pair must match too.",
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
    question: "The table shows three points on line $\\ell$ in the $xy$-plane. Line $m$ is the graph of $5x + ny = 14$, where $n$ is a constant, and lines $\\ell$ and $m$ do not intersect. What is the value of $n$?",
    diagram: { type: "dataTable", params: { headers: ["x", "y"], rows: [["0", "6"], ["4", "1"], ["8", "-4"]] } },
    choices: [
      // distractor: keeps a stray negative sign, solving $-\frac{5}{n} = \frac{5}{4}$
      { id: "A", text: "$-4$" },
      { id: "B", text: "$4$" },
      // distractor: copies the coefficient of $x$ in $5x + ny = 14$
      { id: "C", text: "$5$" },
      // distractor: multiplies $5$ by $4$ instead of matching $\frac{5}{n}$ to $\frac{5}{4}$
      { id: "D", text: "$20$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The table gives slope $-\\frac{5}{4}$, and $5x + ny = 14$ has slope $-\\frac{5}{n}$, so $n = 4$.\n\n**The Full Solution:**\nStep 1: From $(0, 6)$ to $(4, 1)$, $y$ drops $5$ while $x$ increases by $4$, so line $\\ell$ has slope $-\\frac{5}{4}$ and $y$-intercept $6$.\nStep 2: Solve $5x + ny = 14$ for $y$: $y = -\\frac{5}{n}x + \\frac{14}{n}$, so line $m$ has slope $-\\frac{5}{n}$.\nStep 3: Lines that do not intersect are parallel, so $-\\frac{5}{n} = -\\frac{5}{4}$ and $n = 4$; line $m$ then has $y$-intercept $\\frac{14}{4} = 3.5 \\neq 6$, so the lines are distinct. Check: $\\frac{-4 - 6}{8 - 0} = -\\frac{5}{4}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): keeps a stray negative sign, solving $-\\frac{5}{n} = \\frac{5}{4}$\n* Choice C ($5$): copies the coefficient of $x$ in $5x + ny = 14$\n* Choice D ($20$): multiplies $5$ by $4$ instead of matching $\\frac{5}{n}$ to $\\frac{5}{4}$\n\n**Test Day Takeaway:** Read the slope from any two rows of the table, then match it to the slope $-\\frac{A}{B}$ of $Ax + By = C$.",
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
    question: "$y = \\frac{5}{8}x - 3$\n$15x - hy = 40$\nIn the given system of equations, $h$ is a constant. If the system has no solution, what is the value of $h$?",
    correctAnswer: "24",
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**The correct answer is 24.**\n\n**The Fast Way (~25s):** The second equation has slope $\\frac{15}{h}$, and $\\frac{15}{h} = \\frac{5}{8}$ gives $h = 24$.\n\n**The Full Solution:**\nStep 1: The first line has slope $\\frac{5}{8}$ and $y$-intercept $-3$.\nStep 2: Solve $15x - hy = 40$ for $y$: $hy = 15x - 40$, so $y = \\frac{15}{h}x - \\frac{40}{h}$.\nStep 3: No solution means parallel, distinct lines, so $\\frac{15}{h} = \\frac{5}{8}$ and $h = 24$; the second $y$-intercept is $-\\frac{40}{24} = -\\frac{5}{3} \\neq -3$. Check: $\\frac{15}{24} = \\frac{5}{8}$ ✓\n\n**Common Mistakes:**\n* $-24$: loses one of the two sign changes when dividing by $-h$.\n* $9.375$: multiplies $15 \\cdot \\frac{5}{8}$ instead of solving $\\frac{15}{h} = \\frac{5}{8}$.\n* $8$: copies the denominator of $\\frac{5}{8}$ without using the $15$.\n\n**Test Day Takeaway:** Dividing by a negative coefficient of $y$ flips two signs at once; write that step out rather than doing it mentally.",
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
    question: "Line $\\ell$ is shown in the $xy$-plane. One equation in a system of two linear equations is the equation of line $\\ell$. The system has no solution. Which equation could be the second equation in this system?",
    diagram: { type: "linearGraph", params: { slope: 1.3333333, yIntercept: -2, xRange: [-6, 6], yRange: [-6, 6], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, -2], [3, 2]], label: "ℓ" } },
    choices: [
      // distractor: swaps the coefficients, giving slope $\frac{3}{4}$, so this line crosses line $\ell$ once
      { id: "A", text: "$6x - 8y = 30$" },
      // distractor: is line $\ell$ itself, so the system has infinitely many solutions instead of none
      { id: "B", text: "$8x - 6y = 12$" },
      { id: "C", text: "$8x - 6y = 30$" },
      // distractor: flips the sign of the $y$-coefficient, giving slope $-\frac{4}{3}$, so this line crosses line $\ell$ once
      { id: "D", text: "$8x + 6y = 30$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Line $\\ell$ is $8x - 6y = 12$; only $8x - 6y = 30$ keeps the same coefficients with a different constant.\n\n**The Full Solution:**\nStep 1: Line $\\ell$ passes through $(0, -2)$ and $(3, 2)$, so its slope is $\\frac{4}{3}$ and its equation is $y = \\frac{4}{3}x - 2$, or $4x - 3y = 6$. Doubled, this is $8x - 6y = 12$.\nStep 2: A system of two linear equations has no solution when the second line has the same slope as line $\\ell$ but a different $y$-intercept.\nStep 3: Choice C, $8x - 6y = 30$, gives $y = \\frac{4}{3}x - 5$: same slope, $y$-intercept $-5$ instead of $-2$. Check: subtracting $8x - 6y = 12$ from $8x - 6y = 30$ leaves $0 = 18$, which is never true ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6x - 8y = 30$): swaps the coefficients, giving slope $\\frac{3}{4}$, so this line crosses line $\\ell$ once\n* Choice B ($8x - 6y = 12$): is line $\\ell$ itself, so the system has infinitely many solutions instead of none\n* Choice D ($8x + 6y = 30$): flips the sign of the $y$-coefficient, giving slope $-\\frac{4}{3}$, so this line crosses line $\\ell$ once\n\n**Test Day Takeaway:** For no solution, match the coefficients and then make sure the constant does not match; matching all three gives infinitely many solutions.",
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
    question: "$6x - 9y = 3y + 24$\n$rx + 8y = 15$\nIn the given system of equations, $r$ is a constant. If the system has no solution, what is the value of $r$?",
    correctAnswer: "-4",
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**The correct answer is -4.**\n\n**The Fast Way (~35s):** The first equation simplifies to $6x - 12y = 24$, so $\\frac{r}{6} = \\frac{8}{-12}$ and $r = -4$.\n\n**The Full Solution:**\nStep 1: Subtract $3y$ from both sides of the first equation: $6x - 12y = 24$, or $y = \\frac{1}{2}x - 2$.\nStep 2: Solve $rx + 8y = 15$ for $y$: $y = -\\frac{r}{8}x + \\frac{15}{8}$.\nStep 3: No solution means parallel, distinct lines, so $-\\frac{r}{8} = \\frac{1}{2}$ and $r = -4$; the $y$-intercepts $\\frac{15}{8}$ and $-2$ differ. Check: with $r = -4$, the second equation is $-4x + 8y = 15$, and $-\\frac{2}{3}(6x - 12y) = -4x + 8y$ while $-\\frac{2}{3}(24) = -16 \\neq 15$ ✓\n\n**Common Mistakes:**\n* $-\\frac{16}{3}$: uses $-9$ as the coefficient of $y$ without moving the $3y$ term, so the slope comes out $\\frac{2}{3}$ instead of $\\frac{1}{2}$.\n* $4$: drops the negative sign when solving $-\\frac{r}{8} = \\frac{1}{2}$.\n* $-16$: sets $-\\frac{r}{8}$ equal to the reciprocal slope, $2$.\n\n**Test Day Takeaway:** Collect every $x$- and $y$-term on one side before comparing coefficients; a $y$-term hiding on the right side changes the slope.",
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
    question: "A shipment of $48$ boxes contains only small boxes and large boxes. There are $12$ more small boxes than large boxes. How many large boxes are in the shipment?",
    choices: [
      // distractor: reports the difference of $12$ as if it were a count
      { id: "A", text: "$12$" },
      { id: "B", text: "$18$" },
      // distractor: splits $48$ in half and ignores the $12$-box difference
      { id: "C", text: "$24$" },
      // distractor: reports the number of small boxes instead of large boxes
      { id: "D", text: "$30$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Remove the $12$ extra small boxes: the remaining $36$ boxes split evenly, so there are $18$ large boxes.\n\n**The Full Solution:**\nStep 1: Let $L$ be the number of large boxes and $S$ the number of small boxes. Then $S + L = 48$ and $S = L + 12$.\nStep 2: Substitute: $(L + 12) + L = 48$, so $2L + 12 = 48$ and $L = 18$.\nStep 3: Then $S = 30$. Check: $30 + 18 = 48$ and $30 - 18 = 12$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): reports the difference of $12$ as if it were a count\n* Choice C ($24$): splits $48$ in half and ignores the $12$-box difference\n* Choice D ($30$): reports the number of small boxes instead of large boxes\n\n**Test Day Takeaway:** Translate \"$12$ more than\" into $S = L + 12$, substitute into the total, and reread the question before choosing which count to report.",
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
    question: "A rope that is $54$ centimeters long is cut into two pieces. The longer piece is $5$ times as long as the shorter piece. How long, in centimeters, is the longer piece?",
    correctAnswer: "45",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**The correct answer is 45.**\n\n**The Fast Way (~10s):** The pieces are in a $5:1$ ratio, so the rope is $6$ equal parts of $9$ centimeters, and the longer piece is $5(9) = 45$ centimeters.\n\n**The Full Solution:**\nStep 1: Let $s$ be the length of the shorter piece and $\\ell$ the length of the longer piece, in centimeters. Then $s + \\ell = 54$ and $\\ell = 5s$.\nStep 2: Substitute: $s + 5s = 54$, so $6s = 54$ and $s = 9$.\nStep 3: The longer piece is $\\ell = 5(9) = 45$. Check: $9 + 45 = 54$ and $45 = 5(9)$ ✓\n\n**Common Mistakes:**\n* $9$: reports the length of the shorter piece.\n* $10.8$: divides $54$ by $5$ instead of by $6$, forgetting that the total is $6$ equal parts.\n* $49$: subtracts $5$ from $54$ as if the pieces differed by $5$ centimeters.\n\n**Test Day Takeaway:** \"One is $k$ times the other\" splits a total into $k + 1$ equal parts.",
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
    question: "The table shows the mass of each of two types of tile. A crate contains $30$ of these tiles, and the total mass of the tiles is $38{,}400$ grams. How many rectangular tiles are in the crate?",
    diagram: { type: "dataTable", params: { headers: ["Tile type", "Mass (grams)"], rows: [["Square", "1,000"], ["Rectangular", "1,600"]] } },
    choices: [
      { id: "A", text: "$14$" },
      // distractor: splits the $30$ tiles evenly and never uses the mass
      { id: "B", text: "$15$" },
      // distractor: reports the number of square tiles instead of rectangular tiles
      { id: "C", text: "$16$" },
      // distractor: divides $38{,}400$ by $1{,}600$ as if every tile were rectangular
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** If all $30$ tiles were square the mass would be $30{,}000$ grams; each rectangular tile adds $600$ grams, and $8{,}400 \\div 600 = 14$.\n\n**The Full Solution:**\nStep 1: Let $s$ be the number of square tiles and $r$ the number of rectangular tiles. Then $s + r = 30$ and $1{,}000s + 1{,}600r = 38{,}400$.\nStep 2: Substitute $s = 30 - r$: $1{,}000(30 - r) + 1{,}600r = 38{,}400$, so $30{,}000 + 600r = 38{,}400$ and $r = 14$.\nStep 3: Then $s = 16$. Check: $1{,}000(16) + 1{,}600(14) = 16{,}000 + 22{,}400 = 38{,}400$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($15$): splits the $30$ tiles evenly and never uses the mass\n* Choice C ($16$): reports the number of square tiles instead of rectangular tiles\n* Choice D ($24$): divides $38{,}400$ by $1{,}600$ as if every tile were rectangular\n\n**Test Day Takeaway:** Pair a count equation with a total equation, substitute, and report the quantity the question names.",
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
    question: "The table shows the price of each of two sizes of flask. A laboratory paid a total of \\$252 for $20$ of these flasks. How many $500$-milliliter flasks did the laboratory buy?",
    diagram: { type: "dataTable", params: { headers: ["Flask size", "Price per flask (dollars)"], rows: [["250 milliliters", "9"], ["500 milliliters", "15"]] } },
    correctAnswer: "12",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**The correct answer is 12.**\n\n**The Fast Way (~20s):** Twenty flasks at \\$9 would cost \\$180; each larger flask adds \\$6, and $(252 - 180) \\div 6 = 12$.\n\n**The Full Solution:**\nStep 1: Let $s$ be the number of $250$-milliliter flasks and $\\ell$ the number of $500$-milliliter flasks. Then $s + \\ell = 20$ and $9s + 15\\ell = 252$.\nStep 2: Substitute $s = 20 - \\ell$: $9(20 - \\ell) + 15\\ell = 252$, so $180 + 6\\ell = 252$ and $\\ell = 12$.\nStep 3: Then $s = 8$. Check: $9(8) + 15(12) = 72 + 180 = 252$ ✓\n\n**Common Mistakes:**\n* $8$: the number of $250$-milliliter flasks, not $500$-milliliter flasks.\n* $10$: splits the $20$ flasks evenly and never uses the total price.\n* $16.8$: divides $252$ by $15$, as if every flask were the larger size.\n\n**Test Day Takeaway:** Read the two prices from the table into a cost equation, pair it with the count equation, and substitute.",
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
    question: "The table shows the number of grams of protein in one serving of each of two foods. A meal consists of $8$ servings of these foods and contains $44$ grams of protein. How many servings of rice are in the meal?",
    diagram: { type: "dataTable", params: { headers: ["Food", "Protein per serving (grams)"], rows: [["Lentils", "10"], ["Rice", "4"]] } },
    choices: [
      // distractor: reports the number of servings of lentils instead of rice
      { id: "A", text: "$2$" },
      { id: "B", text: "$6$" },
      // distractor: reports the total number of servings
      { id: "C", text: "$8$" },
      // distractor: divides $44$ by $4$ as if the whole meal were rice
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Eight servings of lentils would give $80$ grams; each swap to rice removes $6$ grams, and $(80 - 44) \\div 6 = 6$.\n\n**The Full Solution:**\nStep 1: Let $\\ell$ be the number of servings of lentils and $r$ the number of servings of rice. Then $\\ell + r = 8$ and $10\\ell + 4r = 44$.\nStep 2: Substitute $\\ell = 8 - r$: $10(8 - r) + 4r = 44$, so $80 - 6r = 44$ and $r = 6$.\nStep 3: Then $\\ell = 2$. Check: $10(2) + 4(6) = 20 + 24 = 44$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports the number of servings of lentils instead of rice\n* Choice C ($8$): reports the total number of servings\n* Choice D ($11$): divides $44$ by $4$ as if the whole meal were rice\n\n**Test Day Takeaway:** Two facts, two equations: one for the count and one for the total. Solve, then report the food the question names.",
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
    question: "A $900$-gram bag contains only walnuts and pecans. The mass of the walnuts is $60$ grams more than twice the mass of the pecans. What is the mass, in grams, of the pecans in the bag?",
    correctAnswer: "280",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**The correct answer is 280.**\n\n**The Fast Way (~20s):** With $p$ grams of pecans, $(2p + 60) + p = 900$, so $3p = 840$ and $p = 280$.\n\n**The Full Solution:**\nStep 1: Let $w$ be the mass of the walnuts and $p$ the mass of the pecans, in grams. Then $w + p = 900$ and $w = 2p + 60$.\nStep 2: Substitute: $(2p + 60) + p = 900$, so $3p + 60 = 900$.\nStep 3: Subtract $60$ and divide by $3$: $p = 280$. Check: $w = 2(280) + 60 = 620$, and $620 + 280 = 900$ ✓\n\n**Common Mistakes:**\n* $260$: writes \"$60$ more than twice\" as $2(p + 60)$, which gives $3p + 120 = 900$.\n* $620$: reports the mass of the walnuts.\n* $300$: divides $900$ by $3$ without removing the extra $60$ grams.\n\n**Test Day Takeaway:** \"$60$ more than twice $p$\" is $2p + 60$; build the expression in that order before substituting.",
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
    question: "The table shows the printing rate of each of two printers. Printer A ran for $a$ minutes and printer B ran for $b$ minutes, for a total of $50$ minutes. Together they printed $1{,}832$ pages. What is the value of $b - a$?",
    diagram: { type: "dataTable", params: { headers: ["Printer", "Rate (pages per minute)"], rows: [["A", "28"], ["B", "44"]] } },
    choices: [
      { id: "A", text: "$4$" },
      // distractor: reports the value of $a$ instead of $b - a$
      { id: "B", text: "$23$" },
      // distractor: reports the value of $b$ instead of $b - a$
      { id: "C", text: "$27$" },
      // distractor: adds the two times instead of subtracting them
      { id: "D", text: "$50$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** At $28$ pages per minute for all $50$ minutes the printers would make $1{,}400$ pages; each minute of B adds $16$, and $432 \\div 16 = 27$, so $b - a = 27 - 23 = 4$.\n\n**The Full Solution:**\nStep 1: The two facts give $a + b = 50$ and $28a + 44b = 1{,}832$.\nStep 2: Substitute $a = 50 - b$: $28(50 - b) + 44b = 1{,}832$, so $1{,}400 + 16b = 1{,}832$ and $b = 27$; then $a = 23$.\nStep 3: So $b - a = 27 - 23 = 4$. Check: $28(23) + 44(27) = 644 + 1{,}188 = 1{,}832$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($23$): reports the value of $a$ instead of $b - a$\n* Choice C ($27$): reports the value of $b$ instead of $b - a$\n* Choice D ($50$): adds the two times instead of subtracting them\n\n**Test Day Takeaway:** Solving the system is only the first step; the last line of the question says which combination of the variables to report.",
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
    question: "The table shows the volume of each of two sizes of container. A shelf holds $2$ more large containers than small containers, and the total volume of these containers is $138$ liters. How many containers are on the shelf?",
    diagram: { type: "dataTable", params: { headers: ["Container size", "Volume (liters)"], rows: [["Small", "7"], ["Large", "12"]] } },
    correctAnswer: "14",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**The correct answer is 14.**\n\n**The Fast Way (~30s):** With $x$ small containers there are $x + 2$ large ones, so $7x + 12(x + 2) = 138$, $19x = 114$, $x = 6$, and the total is $6 + 8 = 14$.\n\n**The Full Solution:**\nStep 1: Let $x$ be the number of small containers and $y$ the number of large containers. Then $y = x + 2$ and $7x + 12y = 138$.\nStep 2: Substitute: $7x + 12(x + 2) = 138$, so $19x + 24 = 138$, $19x = 114$, and $x = 6$; then $y = 8$.\nStep 3: The shelf holds $x + y = 6 + 8 = 14$ containers. Check: $7(6) + 12(8) = 42 + 96 = 138$ ✓\n\n**Common Mistakes:**\n* $6$ or $8$: stops after finding one of the two counts instead of adding them.\n* Reversing the comparison: writing $x = y + 2$ gives $19y + 14 = 138$, so $y = \\frac{124}{19}$, which is not a whole number of containers.\n\n**Test Day Takeaway:** When one condition compares the two counts, substitute it directly, then reread the question for the quantity it asks for.",
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
    question: "$3x + y = 20$\n$x + y = 8$\nThe solution to the given system of equations is $(x, y)$. What is the value of $2x$?",
    choices: [
      // distractor: finds $y$ instead of $2x$
      { id: "A", text: "$2$" },
      // distractor: finds $x$ but does not double it
      { id: "B", text: "$6$" },
      { id: "C", text: "$12$" },
      // distractor: adds the two equations, which gives $4x + 2y = 28$
      { id: "D", text: "$28$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Subtract the second equation from the first: $(3x + y) - (x + y) = 20 - 8$, so $2x = 12$.\n\n**The Full Solution:**\nStep 1: Notice that the two equations have the same $y$-term, so subtracting them leaves only $x$-terms.\nStep 2: Subtract: $(3x + y) - (x + y) = 2x$, and $20 - 8 = 12$.\nStep 3: So $2x = 12$. Check: $x = 6$ and $y = 8 - 6 = 2$, and $3(6) + 2 = 20$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): finds $y$ instead of $2x$.\n* Choice B ($6$): finds $x$ but does not double it.\n* Choice D ($28$): adds the two equations, which gives $4x + 2y = 28$.\n\n**Test Day Takeaway:** Before solving for $x$ and $y$, see whether adding or subtracting the equations produces the expression the question asks for.",
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
    question: "$3x + 2y = 31$\n$2x + 3y = 24$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x + y$?",
    correctAnswer: "11",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**The correct answer is 11.**\n\n**The Fast Way (~15s):** Adding the equations gives $5x + 5y = 55$, so $x + y = 11$.\n\n**The Full Solution:**\nStep 1: Add the two equations: $(3x + 2y) + (2x + 3y) = 31 + 24$.\nStep 2: This gives $5x + 5y = 55$.\nStep 3: Divide both sides by $5$: $x + y = 11$. Check: solving gives $x = 9$ and $y = 2$, and $9 + 2 = 11$ ✓\n\n**Common Mistakes:**\n* $55$: stops at $5x + 5y = 55$ without dividing by $5$.\n* $7$: subtracts the equations, which gives $x - y = 7$.\n* $9$: solves for $x$ and reports it instead of $x + y$.\n\n**Test Day Takeaway:** When the coefficients are swapped between the two equations, adding them gives a multiple of $x + y$.",
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
    question: "$4x + 7y = c$\n$6x + 3y = 24$\nIn the given system of equations, $c$ is a constant. If $x + y = 6$, what is the value of $c$?",
    choices: [
      // distractor: copies the constant of the second equation
      { id: "A", text: "$24$" },
      { id: "B", text: "$36$" },
      // distractor: finds $10(x + y) = 60$ but does not subtract the $24$ from the second equation
      { id: "C", text: "$60$" },
      // distractor: adds $24$ to $60$ instead of subtracting it
      { id: "D", text: "$84$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Adding the equations gives $10x + 10y = c + 24$, and $10(6) = 60$, so $c = 36$.\n\n**The Full Solution:**\nStep 1: Add the two equations: $(4x + 7y) + (6x + 3y) = c + 24$, so $10x + 10y = c + 24$.\nStep 2: Since $x + y = 6$, the left side is $10(6) = 60$, so $60 = c + 24$.\nStep 3: Subtract $24$: $c = 36$. Check: $6x + 3y = 24$ and $x + y = 6$ give $x = 2$ and $y = 4$, and $4(2) + 7(4) = 8 + 28 = 36$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): copies the constant of the second equation\n* Choice C ($60$): finds $10(x + y) = 60$ but does not subtract the $24$ from the second equation\n* Choice D ($84$): adds $24$ to $60$ instead of subtracting it\n\n**Test Day Takeaway:** If the question gives $x + y$, look for a sum of the equations whose coefficients are all equal.",
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
    question: "$9m - 4n = 70$\n$7m - 5n = 45$\nThe solution to the given system of equations is $(m, n)$. What is the value of $2m + n$?",
    correctAnswer: "25",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**The correct answer is 25.**\n\n**The Fast Way (~15s):** Subtract the second equation from the first: $(9m - 4n) - (7m - 5n) = 2m + n$, and $70 - 45 = 25$.\n\n**The Full Solution:**\nStep 1: Compare the target $2m + n$ with the equations: $9 - 7 = 2$ and $-4 - (-5) = 1$, so the difference of the equations is $2m + n$.\nStep 2: Subtract: $(9m - 4n) - (7m - 5n) = 70 - 45$.\nStep 3: So $2m + n = 25$. Check: solving gives $m = 10$ and $n = 5$, and $2(10) + 5 = 25$ ✓\n\n**Common Mistakes:**\n* $-25$: subtracts the first equation from the second, which gives $-2m - n = -25$, and does not change the sign.\n* $10$: solves for $m$ and reports it instead of $2m + n$.\n* $115$: adds the constants, $70 + 45$, instead of subtracting.\n\n**Test Day Takeaway:** Subtracting a negative term adds it; write $-4n - (-5n) = n$ before trusting the shortcut.",
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
    question: "$3x + 4y = 23$\n$x - 2y = 1$\nThe ordered pair $(x, y)$ satisfies the given system of equations. What is the value of $4x + 2y$?",
    choices: [
      // distractor: solves the system and reports $x + y$
      { id: "A", text: "$7$" },
      // distractor: finds $2x + y$, half of the requested expression
      { id: "B", text: "$12$" },
      // distractor: subtracts the equations, which gives $2x + 6y = 22$
      { id: "C", text: "$22$" },
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Adding the equations gives $4x + 2y = 24$ in one step.\n\n**The Full Solution:**\nStep 1: The target $4x + 2y$ has $x$-coefficient $3 + 1 = 4$ and $y$-coefficient $4 + (-2) = 2$, so it is the sum of the equations.\nStep 2: Add: $(3x + 4y) + (x - 2y) = 23 + 1$.\nStep 3: So $4x + 2y = 24$. Check: solving gives $x = 5$ and $y = 2$, and $4(5) + 2(2) = 24$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): solves the system and reports $x + y$\n* Choice B ($12$): finds $2x + y$, half of the requested expression\n* Choice C ($22$): subtracts the equations, which gives $2x + 6y = 22$\n\n**Test Day Takeaway:** Add the coefficients of each variable across the equations; if they match the target, the answer is the sum of the constants.",
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
    question: "$8x + 5y = 62$\n$4x + 7y = 58$\nThe ordered pair $(x, y)$ is a solution to the given system of equations. What is the value of $2x - y$?",
    correctAnswer: "2",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**The correct answer is 2.**\n\n**The Fast Way (~15s):** Subtracting the second equation from the first gives $4x - 2y = 4$, so $2x - y = 2$.\n\n**The Full Solution:**\nStep 1: Subtract the second equation from the first: $(8x + 5y) - (4x + 7y) = 62 - 58$.\nStep 2: This gives $4x - 2y = 4$.\nStep 3: Divide both sides by $2$: $2x - y = 2$. Check: solving gives $x = 4$ and $y = 6$, and $2(4) - 6 = 2$ ✓\n\n**Common Mistakes:**\n* $4$: stops at $4x - 2y = 4$ without dividing by $2$.\n* $-2$: subtracts in the other order and keeps the sign, finding $-2x + y$.\n* $10$: adds the equations, which gives $12x + 12y = 120$, and reports $x + y$.\n\n**Test Day Takeaway:** When the target's coefficients are a fraction of a sum or difference of the equations, form that combination and then divide.",
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
    question: "$2x - 3y = a$\n$4x + y = b$\nIn the given system of equations, $a$ and $b$ are constants. Which expression is equal to $10y - 2x$?",
    choices: [
      // distractor: subtracts in the wrong order, which gives $2x - 10y$
      { id: "A", text: "$3a - b$" },
      { id: "B", text: "$b - 3a$" },
      // distractor: subtracts without scaling the first equation, which gives $2x + 4y$
      { id: "C", text: "$b - a$" },
      // distractor: adds the equations, which gives $6x - 2y$
      { id: "D", text: "$a + b$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** Multiply the first equation by $-3$ and add the second: $-6x + 9y + 4x + y = -2x + 10y$, so $10y - 2x = b - 3a$.\n\n**The Full Solution:**\nStep 1: Look for numbers $p$ and $q$ with $p(2x - 3y) + q(4x + y) = -2x + 10y$: this needs $2p + 4q = -2$ and $-3p + q = 10$.\nStep 2: From the second condition $q = 10 + 3p$; then $2p + 40 + 12p = -2$, so $p = -3$ and $q = 1$.\nStep 3: So $10y - 2x = -3a + b = b - 3a$. Check: $(4x + y) - 3(2x - 3y) = 4x + y - 6x + 9y = -2x + 10y$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3a - b$): subtracts in the wrong order, which gives $2x - 10y$\n* Choice C ($b - a$): subtracts without scaling the first equation, which gives $2x + 4y$\n* Choice D ($a + b$): adds the equations, which gives $6x - 2y$\n\n**Test Day Takeaway:** When no single sum or difference matches, find the multiplier for one equation that makes the coefficients line up, and check by expanding.",
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
    question: "$\\frac{x}{2} + \\frac{y}{3} = 3$\n$\\frac{x}{3} + \\frac{y}{2} = 7$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x + y$?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**The correct answer is 12.**\n\n**The Fast Way (~30s):** Adding the equations gives $\\frac{5}{6}x + \\frac{5}{6}y = 10$, so $x + y = 10 \\cdot \\frac{6}{5} = 12$.\n\n**The Full Solution:**\nStep 1: Add the two equations: $\\left(\\frac{1}{2} + \\frac{1}{3}\\right)x + \\left(\\frac{1}{3} + \\frac{1}{2}\\right)y = 3 + 7$.\nStep 2: Since $\\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6}$, this is $\\frac{5}{6}(x + y) = 10$.\nStep 3: Multiply both sides by $\\frac{6}{5}$: $x + y = 12$. Check: solving gives $x = -6$ and $y = 18$; $\\frac{-6}{2} + \\frac{18}{3} = -3 + 6 = 3$ and $\\frac{-6}{3} + \\frac{18}{2} = -2 + 9 = 7$ ✓\n\n**Common Mistakes:**\n* $10$: adds the equations but forgets that the coefficients of $x + y$ are $\\frac{5}{6}$, not $1$.\n* $8.333$: multiplies $10$ by $\\frac{5}{6}$ instead of dividing by it.\n* $18$: solves for $y$ and reports it instead of $x + y$.\n\n**Test Day Takeaway:** Swapped coefficients still mean \"add the equations,\" even when they are fractions; then divide by the shared coefficient.",
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
    question: "$2x + 5y = 14$\n$6x + 15y = 42$\nHow many solutions does the given system of equations have?",
    choices: [
      // distractor: treats the different-looking equations as parallel lines that never meet
      { id: "A", text: "Zero" },
      // distractor: assumes two different-looking equations must cross at a single point
      { id: "B", text: "Exactly one" },
      // distractor: counts intersections as if the graphs were curves; two lines that are not the same meet at most once
      { id: "C", text: "Exactly two" },
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** The second equation is $3$ times the first, so both equations have the same graph and every point on it is a solution.\n\n**The Full Solution:**\nStep 1: Compare the coefficients: $\\frac{6}{2} = 3$, $\\frac{15}{5} = 3$, and $\\frac{42}{14} = 3$.\nStep 2: Since every term of the second equation is $3$ times the matching term of the first, the two equations describe the same line.\nStep 3: Every point on that line satisfies both equations, so the system has infinitely many solutions. Check: $(7, 0)$ gives $2(7) + 5(0) = 14$ and $6(7) + 15(0) = 42$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): treats the different-looking equations as parallel lines that never meet\n* Choice B (Exactly one): assumes two different-looking equations must cross at a single point\n* Choice C (Exactly two): counts intersections as if the graphs were curves; two lines that are not the same meet at most once\n\n**Test Day Takeaway:** Before solving a linear system, test whether one equation is a multiple of the other, constant included.",
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
    question: "$3x + 8y = 46$\n$9x + cy = 138$\nIn the given system of equations, $c$ is a constant. For what value of $c$ does the system have infinitely many solutions?",
    correctAnswer: "24",
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**The correct answer is 24.**\n\n**The Fast Way (~15s):** The second equation is $3$ times the first ($9 = 3 \\cdot 3$ and $138 = 3 \\cdot 46$), so $c = 3 \\cdot 8 = 24$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the two equations describe the same line, so one must be a multiple of the other.\nStep 2: Since $\\frac{9}{3} = 3$ and $\\frac{138}{46} = 3$, the second equation is $3$ times the first.\nStep 3: So $c = 3(8) = 24$. Check: $3(3x + 8y) = 9x + 24y$ and $3(46) = 138$ ✓\n\n**Common Mistakes:**\n* $8$: copies the coefficient of $y$ from the first equation without scaling it.\n* $11$: adds $3$ to $8$ instead of multiplying.\n* $\\frac{8}{3}$: divides by the factor $3$ instead of multiplying.\n\n**Test Day Takeaway:** Find the factor from a pair of terms you know, then apply it to the unknown coefficient.",
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
    question: "Line $n$ is shown in the $xy$-plane. A system of two linear equations consists of the equation of line $n$ and $9x + 6y = d$, where $d$ is a constant. If the system has infinitely many solutions, what is the value of $d$?",
    diagram: { type: "linearGraph", params: { slope: -1.5, yIntercept: 4, xRange: [-4, 6], yRange: [-4, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 4], [2, 1]], label: "n" } },
    choices: [
      // distractor: reports the $y$-intercept of line $n$ without multiplying by the coefficient $6$
      { id: "A", text: "$4$" },
      // distractor: copies the coefficient of $y$ in the equation
      { id: "B", text: "$6$" },
      { id: "C", text: "$24$" },
      // distractor: multiplies the $y$-intercept by $9$, the coefficient of $x$, instead of by $6$
      { id: "D", text: "$36$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Line $n$ passes through $(0, 4)$, so $9(0) + 6(4) = d$ and $d = 24$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the graph of $9x + 6y = d$ is line $n$ itself, so every point on line $n$ satisfies $9x + 6y = d$.\nStep 2: The point $(0, 4)$ is on line $n$: $9(0) + 6(4) = d$, so $d = 24$.\nStep 3: Confirm with a second point. Check: $(2, 1)$ is on line $n$, and $9(2) + 6(1) = 18 + 6 = 24$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): reports the $y$-intercept of line $n$ without multiplying by the coefficient $6$\n* Choice B ($6$): copies the coefficient of $y$ in the equation\n* Choice D ($36$): multiplies the $y$-intercept by $9$, the coefficient of $x$, instead of by $6$\n\n**Test Day Takeaway:** When a system has infinitely many solutions, both equations describe the same line; substitute a point you can read exactly from the graph.",
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
    question: "$12x = 20y + 36$\n$3x - 5y = c$\nThe given system of equations has infinitely many solutions, and $c$ is a constant. What is the value of $c$?",
    correctAnswer: "9",
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**The correct answer is 9.**\n\n**The Fast Way (~20s):** Rewrite the first equation as $12x - 20y = 36$; dividing by $4$ gives $3x - 5y = 9$, so $c = 9$.\n\n**The Full Solution:**\nStep 1: Subtract $20y$ from both sides of the first equation: $12x - 20y = 36$.\nStep 2: Infinitely many solutions means the two equations describe the same line. Since $\\frac{12}{3} = 4$ and $\\frac{-20}{-5} = 4$, the first equation is $4$ times the second.\nStep 3: So $36 = 4c$ and $c = 9$. Check: $4(3x - 5y) = 12x - 20y$ and $4(9) = 36$ ✓\n\n**Common Mistakes:**\n* $-9$: moves $20y$ to the left side but also changes the sign of $36$.\n* $36$: copies the constant without dividing by the factor $4$.\n* $4$: reports the factor between the equations instead of the constant.\n\n**Test Day Takeaway:** Put both equations in the same form before comparing them; only then do the coefficient ratios mean anything.",
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
    question: "The table shows three values of $x$ and their corresponding values of $y$. There is a linear relationship between $x$ and $y$. A system of two linear equations consists of the equation for this relationship and $6x - 3y = c$, where $c$ is a constant. If the system has infinitely many solutions, what is the value of $c$?",
    diagram: { type: "dataTable", params: { headers: ["x", "y"], rows: [["1", "4"], ["3", "8"], ["5", "12"]] } },
    choices: [
      { id: "A", text: "$-6$" },
      // distractor: uses the constant of $2x - y = -2$ before scaling to match the coefficients $6$ and $-3$
      { id: "B", text: "$-2$" },
      // distractor: uses the $y$-intercept of the line as the constant
      { id: "C", text: "$2$" },
      // distractor: drops the sign: $6(1) - 3(4) = -6$, not $6$
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Every table point must satisfy $6x - 3y = c$, so $c = 6(1) - 3(4) = -6$.\n\n**The Full Solution:**\nStep 1: From the table, $y$ increases by $4$ when $x$ increases by $2$, so the slope is $2$ and the equation is $y = 2x + 2$, or $2x - y = -2$.\nStep 2: Infinitely many solutions means $6x - 3y = c$ is the same line. Multiplying $2x - y = -2$ by $3$ gives $6x - 3y = -6$.\nStep 3: So $c = -6$. Check: $(3, 8)$ gives $6(3) - 3(8) = 18 - 24 = -6$ and $(5, 12)$ gives $30 - 36 = -6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-2$): uses the constant of $2x - y = -2$ before scaling to match the coefficients $6$ and $-3$\n* Choice C ($2$): uses the $y$-intercept of the line as the constant\n* Choice D ($6$): drops the sign: $6(1) - 3(4) = -6$, not $6$\n\n**Test Day Takeaway:** Any point on the line can serve as a check: substitute it into $6x - 3y$ and the result is $c$.",
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
    question: "$4x + 7y = 26$\n$10x + ky = 65$\nIn the given system of equations, $k$ is a constant. The system has infinitely many solutions. What is the value of $k$?",
    correctAnswer: "17.5",
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**The correct answer is 17.5.**\n\n**The Fast Way (~20s):** The second equation is $\\frac{5}{2}$ times the first ($10 = \\frac{5}{2} \\cdot 4$ and $65 = \\frac{5}{2} \\cdot 26$), so $k = \\frac{5}{2} \\cdot 7 = 17.5$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the two equations describe the same line, so one is a multiple of the other.\nStep 2: The factor is $\\frac{10}{4} = \\frac{5}{2}$, and the constants agree: $\\frac{65}{26} = \\frac{5}{2}$.\nStep 3: So $k = \\frac{5}{2}(7) = 17.5$. Check: $\\frac{5}{2}(4x + 7y) = 10x + 17.5y$ and $\\frac{5}{2}(26) = 65$ ✓\n\n**Common Mistakes:**\n* $2.8$: divides $7$ by $\\frac{5}{2}$ instead of multiplying.\n* $7$: copies the coefficient of $y$ from the first equation.\n* $13$: adds the difference $10 - 4 = 6$ to $7$, treating the equations as differing by a constant rather than a factor.\n\n**Test Day Takeaway:** Equivalent equations differ by a multiplying factor, which need not be a whole number; $17.5$ (or $\\frac{35}{2}$) is a valid answer.",
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
    question: "The graph of a line in the $xy$-plane is shown. The line is the graph of $8x + by = c$, where $b$ and $c$ are constants. What is the value of $b + c$?",
    diagram: { type: "linearGraph", params: { slope: -0.4, yIntercept: 8, xRange: [0, 22], yRange: [0, 10], xTickInterval: 4, yTickInterval: 2, gridInterval: 2, showPoints: [[0, 8], [20, 0]] } },
    choices: [
      // distractor: adds $b = 5$ and $c = 40$ from $2x + 5y = 40$ without scaling to match $8x$
      { id: "A", text: "$45$" },
      // distractor: scales the $y$-coefficient to $20$ but leaves the constant at $40$
      { id: "B", text: "$60$" },
      // distractor: scales the constant to $160$ but leaves the $y$-coefficient at $5$
      { id: "C", text: "$165$" },
      { id: "D", text: "$180$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The line has intercepts $(20, 0)$ and $(0, 8)$, so $c = 8(20) = 160$ and $b = \\frac{160}{8} = 20$; $b + c = 180$.\n\n**The Full Solution:**\nStep 1: The line crosses the $x$-axis at $(20, 0)$ and the $y$-axis at $(0, 8)$.\nStep 2: Substitute $(20, 0)$ into $8x + by = c$: $c = 8(20) = 160$. Substitute $(0, 8)$: $8b = 160$, so $b = 20$.\nStep 3: So $b + c = 20 + 160 = 180$. Check: $8x + 20y = 160$ is $4$ times $2x + 5y = 40$, which passes through both intercepts ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($45$): adds $b = 5$ and $c = 40$ from $2x + 5y = 40$ without scaling to match $8x$\n* Choice B ($60$): scales the $y$-coefficient to $20$ but leaves the constant at $40$\n* Choice C ($165$): scales the constant to $160$ but leaves the $y$-coefficient at $5$\n\n**Test Day Takeaway:** When a given form must match a graphed line, substitute the intercepts; every term of the equation is then fixed.",
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
    question: "$5x - 2y = 14$\n$px + qy = 42$\nIn the given system of equations, $p$ and $q$ are constants. If the system has infinitely many solutions, what is the value of $p - q$?",
    correctAnswer: "21",
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**The correct answer is $21$.**\n\n**The Fast Way (~30s):** The constant grows from $14$ to $42$, a factor of $3$, so $p = 3(5) = 15$ and $q = 3(-2) = -6$, and $p - q = 21$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has infinitely many solutions only when one equation is a nonzero multiple of the other, so $px + qy = 42$ must be $r(5x - 2y) = 14r$ for some $r$.\nStep 2: Compare the constants: $14r = 42$, so $r = 3$.\nStep 3: Then $p = 5(3) = 15$ and $q = -2(3) = -6$, so $p - q = 15 - (-6) = 21$. Check: $15x - 6y = 42$ is $3$ times $5x - 2y = 14$, so both equations describe the same line ✓\n\n**Common Mistakes:** Dropping the sign of $q$ and computing $15 - 6 = 9$; scaling $p$ but leaving $q$ at $-2$ and reporting $15 - (-2) = 17$; using the factor $\\frac{14}{42} = \\frac{1}{3}$ instead of $3$ and reporting $\\frac{7}{3}$.\n\n**Test Day Takeaway:** Infinitely many solutions means the second equation is the first one multiplied through; find the multiplier from the constants and carry its sign into every coefficient.",
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
    question: "$f(x) = (x - 7)^{2} + 4$\nWhich expression is equivalent to $f(x)$?",
    choices: [
      // distractor: squares each term separately, writing (x - 7)^2 as x^2 + 49 and losing the middle term
      { id: "A", text: "$x^{2} + 53$" },
      // distractor: forgets to double the cross term, writing -7x instead of -14x
      { id: "B", text: "$x^{2} - 7x + 53$" },
      { id: "C", text: "$x^{2} - 14x + 53$" },
      // distractor: flips the sign of the middle term, expanding (x - 7)^2 as x^2 + 14x + 49
      { id: "D", text: "$x^{2} + 14x + 53$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $(x - 7)^{2} = x^{2} - 14x + 49$, and $49 + 4 = 53$, so $f(x) = x^{2} - 14x + 53$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x - 7)^{2} = x^{2} - 2(7)x + 7^{2} = x^{2} - 14x + 49$.\nStep 2: Add the $4$: $x^{2} - 14x + 49 + 4$.\nStep 3: Combine the constants: $f(x) = x^{2} - 14x + 53$. Check at $x = 1$: $(1 - 7)^{2} + 4 = 40$ and $1 - 14 + 53 = 40$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^{2} + 53$): squares each term separately, as if $(x - 7)^{2}$ were $x^{2} + 49$; the middle term $-14x$ disappears.\n* Choice B ($x^{2} - 7x + 53$): writes the cross term once instead of twice, giving $-7x$ instead of $-14x$.\n* Choice D ($x^{2} + 14x + 53$): drops the minus sign, expanding $(x - 7)^{2}$ as though it were $(x + 7)^{2}$.\n\n**Test Day Takeaway:** $(x - h)^{2} = x^{2} - 2hx + h^{2}$: the middle term is twice $h$ and carries the sign inside the parentheses.",
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
    question: "$3(x - 4)^{2} + 11$\nThe given expression can be rewritten as $3x^{2} - 24x + c$, where $c$ is a constant. What is the value of $c$?",
    correctAnswer: "59",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is $59$.**\n\n**The Fast Way (~20s):** The constant term of $3(x - 4)^{2}$ is $3 \\cdot 16 = 48$, so $c = 48 + 11 = 59$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x - 4)^{2} = x^{2} - 8x + 16$.\nStep 2: Multiply by $3$: $3x^{2} - 24x + 48$.\nStep 3: Add $11$: $3x^{2} - 24x + 59$, so $c = 59$. Check with $x = 0$: $3(0 - 4)^{2} + 11 = 48 + 11 = 59$ ✓\n\n**Common Mistakes:**\n* $27$: squares $-4$ but forgets the factor $3$, getting $16 + 11 = 27$.\n* $48$: expands $3(x - 4)^{2}$ correctly but leaves out the $+ 11$.\n* $155$: squares $3 \\cdot 4 = 12$ instead of multiplying $3$ by $4^{2}$, getting $144 + 11$.\n\n**Test Day Takeaway:** The constant term of a vertex-form expression is its value at $x = 0$: plug in $0$ instead of expanding everything.",
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
    question: "$h(x) = -2(x - 5)^{2} + 90$\nThe function $h$ can be written in the form $h(x) = ax^{2} + bx + c$, where $a$, $b$, and $c$ are constants. What are the values of $b$ and $c$?",
    choices: [
      // distractor: keeps the sign of -10x after multiplying by -2, giving b = -20
      { id: "A", text: "$b = -20$ and $c = 40$" },
      // distractor: drops the +90 after distributing, leaving c = -50
      { id: "B", text: "$b = 20$ and $c = -50$" },
      { id: "C", text: "$b = 20$ and $c = 40$" },
      // distractor: treats -2(25) as +50, giving c = 50 + 90 = 140
      { id: "D", text: "$b = 20$ and $c = 140$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $-2(x^{2} - 10x + 25) + 90 = -2x^{2} + 20x - 50 + 90$, so $b = 20$ and $c = 40$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x - 5)^{2} = x^{2} - 10x + 25$.\nStep 2: Multiply every term by $-2$: $-2x^{2} + 20x - 50$.\nStep 3: Add $90$: $h(x) = -2x^{2} + 20x + 40$, so $b = 20$ and $c = 40$. Check at $x = 1$: $-2(16) + 90 = 58$ and $-2 + 20 + 40 = 58$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($b = -20$ and $c = 40$): multiplies $-10x$ by $-2$ but keeps the negative sign; the product of two negatives is positive.\n* Choice B ($b = 20$ and $c = -50$): distributes correctly but forgets to add the $90$.\n* Choice D ($b = 20$ and $c = 140$): treats $-2(25)$ as $+50$, so the constant becomes $50 + 90$.\n\n**Test Day Takeaway:** A negative factor in front of the square flips the sign of every term inside, including the constant $h^{2}$.",
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
    question: "$f(x) = -5(x - 9)^{2} + 400$\nWhen $f(x)$ is written in the form $ax^{2} + bx + c$, where $a$, $b$, and $c$ are constants, what is the value of $b + c$?",
    correctAnswer: "85",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is $85$.**\n\n**The Fast Way (~30s):** $b = -5(-18) = 90$ and $c = -5(81) + 400 = -5$, so $b + c = 85$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x - 9)^{2} = x^{2} - 18x + 81$.\nStep 2: Multiply by $-5$: $-5x^{2} + 90x - 405$.\nStep 3: Add $400$: $f(x) = -5x^{2} + 90x - 5$, so $b + c = 90 + (-5) = 85$. Check: $a + b + c = f(1) = -5(64) + 400 = 80$, and $-5 + 90 - 5 = 80$ ✓\n\n**Common Mistakes:** Answering $-95$ keeps $b$ negative ($-90$) after multiplying by $-5$; answering $409$ forgets to multiply the $81$ by $-5$, using $c = 400 - 81 = 319$; answering $895$ treats $-5(81)$ as $+405$.\n\n**Test Day Takeaway:** Distribute the leading coefficient to all three terms of the square before adding the outside constant, and track each sign.",
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
    question: "$f(x) = a(x - 2)^{2} - 3$\nIn the given function, $a$ is a constant. The graph of $y = f(x)$ is shown and passes through the point $(0, 5)$. Which expression is equivalent to $f(x)$?",
    diagram: { type: "quadraticVertex", params: { vertex: [2, -3], a: 2, showPoints: [[0, 5]], showVertex: true } },
    choices: [
      // distractor: never uses the point (0, 5) and takes a = 1
      { id: "A", text: "$x^{2} - 4x + 1$" },
      // distractor: finds a = 2 but expands 2(x - 2)^2 as 2x^2 - 8x, dropping the constant 8
      { id: "B", text: "$2x^{2} - 8x - 3$" },
      { id: "C", text: "$2x^{2} - 8x + 5$" },
      // distractor: finds a = 2 but expands (x - 2)^2 as x^2 - 2x + 4
      { id: "D", text: "$2x^{2} - 4x + 5$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Substituting $(0, 5)$ gives $4a - 3 = 5$, so $a = 2$; then $2(x - 2)^{2} - 3 = 2x^{2} - 8x + 5$.\n\n**The Full Solution:**\nStep 1: The point $(0, 5)$ is on the graph, so $a(0 - 2)^{2} - 3 = 5$, which gives $4a = 8$ and $a = 2$.\nStep 2: Expand: $2(x - 2)^{2} = 2(x^{2} - 4x + 4) = 2x^{2} - 8x + 8$.\nStep 3: Subtract $3$: $f(x) = 2x^{2} - 8x + 5$. Check: at $x = 0$ the expression is $5$, matching the point $(0, 5)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^{2} - 4x + 1$): this is $(x - 2)^{2} - 3$, which treats $a$ as $1$ and never uses the point $(0, 5)$.\n* Choice B ($2x^{2} - 8x - 3$): drops the $8$ that comes from $2 \\cdot 4$ when the square is expanded.\n* Choice D ($2x^{2} - 4x + 5$): expands $(x - 2)^{2}$ as $x^{2} - 2x + 4$, missing the doubled middle term.\n\n**Test Day Takeaway:** Use the given point to find the constant first, then expand; checking the expression at that point catches expansion slips.",
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
    question: "$f(x) = 5(x - 6)^{2} + k$\nIn the given function, $k$ is a constant. The function can also be written as $f(x) = 5x^{2} - 60x + 187$. What is the value of $k$?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~20s):** The constant term of $5(x - 6)^{2}$ is $5(36) = 180$, so $180 + k = 187$ and $k = 7$.\n\n**The Full Solution:**\nStep 1: Expand the square: $5(x - 6)^{2} = 5(x^{2} - 12x + 36) = 5x^{2} - 60x + 180$.\nStep 2: So $f(x) = 5x^{2} - 60x + 180 + k$. Match its constant term to the given form: $180 + k = 187$.\nStep 3: Subtract $180$: $k = 7$. Check: $5(x - 6)^{2} + 7 = 5x^{2} - 60x + 187$, and the $x$-terms $-60x$ already agree ✓\n\n**Common Mistakes:** Answering $151$ subtracts $36$ instead of $5(36)$; answering $367$ adds $180$ to $187$ instead of subtracting; answering $187$ copies the constant term without removing the $180$ that comes from the square.\n\n**Test Day Takeaway:** When two forms of the same quadratic are given, match the constant terms after multiplying $h^{2}$ by the leading coefficient.",
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
    question: "The graph of $y = g(x)$ is shown. The vertex of the graph is $(-3, 2)$, and the graph passes through the point $(-1, -6)$. If $g(x) = px^{2} + qx + r$, where $p$, $q$, and $r$ are constants, what is the value of $p + q + r$?",
    diagram: { type: "quadraticVertex", params: { vertex: [-3, 2], a: -2, showPoints: [[-1, -6]], showVertex: true } },
    choices: [
      // distractor: drops the +2 from the vertex form, so r = -18 and the sum is -32
      { id: "A", text: "$-32$" },
      { id: "B", text: "$-30$" },
      // distractor: reports r alone instead of p + q + r
      { id: "C", text: "$-16$" },
      // distractor: gets a = 2 from a sign error, giving 2x^2 + 12x + 20 and a sum of 34
      { id: "D", text: "$34$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $p + q + r = g(1)$. With $g(x) = a(x + 3)^{2} + 2$, the point gives $4a + 2 = -6$, so $a = -2$ and $g(1) = -2(16) + 2 = -30$.\n\n**The Full Solution:**\nStep 1: Vertex form: $g(x) = a(x + 3)^{2} + 2$. Substitute $(-1, -6)$: $a(2)^{2} + 2 = -6$, so $a = -2$.\nStep 2: Expand: $-2(x^{2} + 6x + 9) + 2 = -2x^{2} - 12x - 16$, so $p = -2$, $q = -12$, and $r = -16$.\nStep 3: Add: $p + q + r = -2 - 12 - 16 = -30$. Check: $g(1) = -2(1 + 3)^{2} + 2 = -30$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-32$): drops the $+2$ from the vertex form, so $r = -18$.\n* Choice C ($-16$): reports $r$ alone instead of the sum of the three coefficients.\n* Choice D ($34$): solves $4a + 2 = -6$ with a sign error to get $a = 2$; the graph opens downward, so $a$ must be negative.\n\n**Test Day Takeaway:** The sum of the coefficients of a polynomial is its value at $x = 1$; once $a$ is known, evaluate the vertex form at $1$.",
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
    question: "$f(x) = 3x^{2} + bx + 131$\nIn the given function, $b$ is a constant. The function $f$ reaches its minimum value when $x = 5$. What is the minimum value of $f(x)$?",
    correctAnswer: "56",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is $56$.**\n\n**The Fast Way (~25s):** In vertex form $f(x) = 3(x - 5)^{2} + k$, whose constant term is $3(25) + k = 75 + k$. Matching $131$ gives $k = 56$, the minimum.\n\n**The Full Solution:**\nStep 1: A minimum at $x = 5$ and leading coefficient $3$ mean $f(x) = 3(x - 5)^{2} + k$, where $k$ is the minimum value.\nStep 2: Expand: $3(x^{2} - 10x + 25) + k = 3x^{2} - 30x + 75 + k$, so $b = -30$.\nStep 3: Match the constant terms: $75 + k = 131$, so $k = 56$. Check: $f(5) = 3(25) - 30(5) + 131 = 75 - 150 + 131 = 56$ ✓\n\n**Common Mistakes:** Answering $-30$ reports $b$ instead of the minimum; answering $106$ forgets the leading coefficient and subtracts $25$ from $131$; answering $131$ reads the constant term as the minimum, which is the value at $x = 0$, not at the vertex.\n\n**Test Day Takeaway:** Write the vertex form with the known $h$ and leading coefficient, expand, and match one coefficient to find the missing constant.",
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
    question: "The linear function $f$ has the values shown in the table. How many solutions does the equation $f(x) = 2x - 5$ have?",
    questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$-1$", "$-7$"], ["$0$", "$-5$"], ["$4$", "$3$"]] },
    choices: [
      // distractor: sees the x-terms cancel and reads that as a contradiction, though the constants also match
      { id: "A", text: "Zero" },
      // distractor: assumes every linear equation in one variable has exactly one solution
      { id: "B", text: "Exactly one" },
      // distractor: counts the three rows of the table as the complete set of solutions
      { id: "C", text: "Exactly three" },
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** From the table, $f(0) = -5$ and $f$ rises $2$ when $x$ rises $1$, so $f(x) = 2x - 5$. Both sides are the same expression, so every $x$ works.\n\n**The Full Solution:**\nStep 1: The slope of $f$ is $\\frac{-5 - (-7)}{0 - (-1)} = 2$, and $f(0) = -5$, so $f(x) = 2x - 5$.\nStep 2: The equation becomes $2x - 5 = 2x - 5$; subtracting $2x$ leaves $-5 = -5$, which is always true.\nStep 3: So every value of $x$ is a solution. Check with the third row: $f(4) = 3$ and $2(4) - 5 = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): the $x$-terms cancel, but what is left, $-5 = -5$, is true rather than false.\n* Choice B (Exactly one): most linear equations have one solution, but only when the $x$-coefficients differ.\n* Choice C (Exactly three): the three rows are only samples; the two sides agree at every $x$, not just the ones listed.\n\n**Test Day Takeaway:** If the $x$-terms cancel, look at what remains: a true statement means infinitely many solutions, a false one means none.",
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
    question: "$6(x + 2) = 6x + 9$\nHow many solutions does the given equation have?",
    correctAnswer: "0",
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**The correct answer is $0$.**\n\n**The Fast Way (~10s):** The left side is $6x + 12$. It has the same $x$-term as $6x + 9$ but a different constant, so the two sides are never equal.\n\n**The Full Solution:**\nStep 1: Distribute: $6x + 12 = 6x + 9$.\nStep 2: Subtract $6x$ from both sides: $12 = 9$.\nStep 3: That statement is false for every value of $x$, so the equation has $0$ solutions. Check at $x = 0$: $6(2) = 12$ and $6(0) + 9 = 9$, which differ, and the gap of $3$ is the same at every $x$ ✓\n\n**Common Mistakes:** Answering $1$ assumes every linear equation has exactly one solution; concluding infinitely many solutions (which cannot be entered) reads the cancelling $x$-terms as an identity without checking that $12 \\neq 9$.\n\n**Test Day Takeaway:** Same $x$-coefficient on both sides: equal constants mean infinitely many solutions, different constants mean none.",
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
    question: "For the linear functions $f$ and $g$, the table shows three values of $x$ and their corresponding values of $f(x)$ and $g(x)$. For how many values of $x$ is $f(x) = g(x)$?",
    questionTable: { headers: ["$x$", "$f(x)$", "$g(x)$"], rows: [["$1$", "$25$", "$29$"], ["$2$", "$35$", "$37$"], ["$5$", "$65$", "$61$"]] },
    choices: [
      // distractor: sees that no row of the table has equal values and concludes the functions are never equal
      { id: "A", text: "Zero" },
      { id: "B", text: "Exactly one" },
      // distractor: reads the gap shrinking from 4 to 2 and then flipping to -4 as two crossings, though two lines can cross only once
      { id: "C", text: "Exactly two" },
      // distractor: assumes two increasing linear functions must be the same line, though their slopes are 10 and 8
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $f$ rises $10$ per unit and $g$ rises $8$ per unit. Lines with different slopes meet exactly once.\n\n**The Full Solution:**\nStep 1: From the rows at $x = 1$ and $x = 2$, $f$ has slope $10$ and $g$ has slope $8$, so $f(x) = 10x + 15$ and $g(x) = 8x + 21$.\nStep 2: Set them equal: $10x + 15 = 8x + 21$, so $2x = 6$.\nStep 3: The single solution is $x = 3$, so the functions are equal for exactly one value of $x$. Check: $f(3) = 45$ and $g(3) = 45$, and the row at $x = 5$ fits both rules, $10(5) + 15 = 65$ and $8(5) + 21 = 61$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): none of the three listed rows match, but the functions are equal at $x = 3$, which is not in the table.\n* Choice C (Exactly two): $g(x) - f(x)$ goes from $4$ to $2$ to $-4$, but that difference is itself linear, so it passes through $0$ only once.\n* Choice D (Infinitely many): both functions increase, but at different rates, so they are not the same line.\n\n**Test Day Takeaway:** For two linear functions, compare slopes first: different slopes mean exactly one solution, equal slopes mean zero or infinitely many.",
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
    question: "$3(5x + 4) = kx + 35$\nIn the given equation, $k$ is a constant. If the equation has no solution, what is the value of $k$?",
    correctAnswer: "15",
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~15s):** The left side is $15x + 12$. With $k = 15$ the $x$-terms cancel and leave $12 = 35$, which is false.\n\n**The Full Solution:**\nStep 1: Distribute: $15x + 12 = kx + 35$.\nStep 2: A linear equation has no solution when the $x$-coefficients are equal and the constants are not; here the constants, $12$ and $35$, already differ.\nStep 3: So $k = 15$. Check: $15x + 12 = 15x + 35$ reduces to $12 = 35$, which is never true ✓\n\n**Common Mistakes:** Answering $5$ forgets to distribute the $3$ to the $5x$; answering $3$ uses the factor outside the parentheses; answering $12$ copies the constant term of the left side instead of its $x$-coefficient.\n\n**Test Day Takeaway:** For no solution, make the variable terms match and the constants differ; for infinitely many, make both match.",
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
    question: "For the linear function $g$, the table shows three values of $x$ and their corresponding values of $g(x)$. In the equation $6(2x + k) = g(x)$, $k$ is a constant. If the equation has infinitely many solutions, what is the value of $k$?",
    questionTable: { headers: ["$x$", "$g(x)$"], rows: [["$1$", "$-18$"], ["$3$", "$6$"], ["$6$", "$42$"]] },
    choices: [
      // distractor: subtracts 6 from -30 instead of dividing by 6, giving -36
      { id: "A", text: "$-36$" },
      // distractor: sets k equal to the constant -30 of g without dividing by the 6 that multiplies k
      { id: "B", text: "$-30$" },
      { id: "C", text: "$-5$" },
      // distractor: divides -30 by 6 but drops the negative sign
      { id: "D", text: "$5$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Identity / Contradiction — Match Coefficients**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The table gives $g(x) = 12x - 30$. Since $6(2x + k) = 12x + 6k$, matching constants gives $6k = -30$, so $k = -5$.\n\n**The Full Solution:**\nStep 1: From the table, $g$ rises $24$ as $x$ rises $2$, so its slope is $12$; then $g(1) = 12 + b = -18$ gives $b = -30$, and $g(x) = 12x - 30$.\nStep 2: Expand the left side: $6(2x + k) = 12x + 6k$. For infinitely many solutions both sides must be the same expression; the $x$-coefficients already match ($12$), so the constants must too: $6k = -30$.\nStep 3: Divide by $6$: $k = -5$. Check: $6(2x - 5) = 12x - 30$, and at $x = 6$ this gives $72 - 30 = 42$, matching the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-36$): subtracts the $6$ from $-30$ instead of dividing by it.\n* Choice B ($-30$): sets $k$ equal to the constant of $g$ without undoing the multiplication by $6$.\n* Choice D ($5$): divides correctly but drops the negative sign.\n\n**Test Day Takeaway:** Distribute first, then match coefficients and constants separately; a constant inside parentheses is still multiplied by the factor outside.",
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
    question: "$6(x + 2) - 4x = 2x + a$\nIn the given equation, $a$ is a constant. For what value of $a$ does the equation have infinitely many solutions?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~15s):** The left side simplifies to $6x + 12 - 4x = 2x + 12$, so $a = 12$ makes the two sides identical.\n\n**The Full Solution:**\nStep 1: Distribute and combine like terms on the left: $6x + 12 - 4x = 2x + 12$.\nStep 2: The equation is $2x + 12 = 2x + a$. The $x$-terms already match, so the equation has infinitely many solutions only when the constants match too.\nStep 3: So $a = 12$. Check: $2x + 12 = 2x + 12$ is true for every $x$; at $x = 1$, $6(3) - 4 = 14$ and $2 + 12 = 14$ ✓\n\n**Common Mistakes:** Answering $2$ distributes the $6$ only to the $x$, writing $6x + 2 - 4x$; answering $8$ computes $6(2) - 4$, subtracting the $4$ from the constant instead of from the $x$-term; answering $6$ uses the factor outside the parentheses.\n\n**Test Day Takeaway:** Simplify each side completely before comparing; then infinitely many solutions means the simplified sides are the same expression.",
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
    question: "The table shows selected values of the linear function $f$. In the equation $f(x) = 7x + b$, $b$ is a constant. If this equation has no solution, which of the following CANNOT be the value of $b$?",
    questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$2$", "$-1$"], ["$4$", "$13$"], ["$7$", "$34$"]] },
    choices: [
      // distractor: uses the change in f(x), 14, as the slope without dividing by the change in x, 2, so finds the intercept -1 - 14(2) = -29
      { id: "A", text: "$-29$" },
      { id: "B", text: "$-15$" },
      // distractor: reads f(2) = -1 as the y-intercept of f
      { id: "C", text: "$-1$" },
      // distractor: reasons that b cannot equal the slope 7, mixing up the coefficient with the constant
      { id: "D", text: "$7$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The table gives $f(x) = 7x - 15$. With $b = -15$ the equation is an identity (infinitely many solutions), so $-15$ is the one value $b$ cannot be.\n\n**The Full Solution:**\nStep 1: The slope of $f$ is $\\frac{13 - (-1)}{4 - 2} = 7$, and $f(2) = 7(2) + c = -1$ gives $c = -15$, so $f(x) = 7x - 15$.\nStep 2: The equation $7x - 15 = 7x + b$ reduces to $-15 = b$ after subtracting $7x$. If $b \\neq -15$, that statement is false and there is no solution.\nStep 3: If $b = -15$, the statement is true for every $x$, so the equation has infinitely many solutions, not none. So $b$ cannot be $-15$. Check: $f(7) = 7(7) - 15 = 34$, matching the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-29$): uses $14$, the change in $f(x)$, as the slope without dividing by the change in $x$, which gives an intercept of $-1 - 14(2) = -29$; with the true slope $7$, $b = -29$ does give no solution.\n* Choice C ($-1$): treats $f(2) = -1$ as the $y$-intercept; $b = -1$ leaves $-15 = -1$, which is false, so it does give no solution.\n* Choice D ($7$): confuses the constant $b$ with the slope $7$; $b = 7$ leaves $-15 = 7$, so it also gives no solution.\n\n**Test Day Takeaway:** With equal slopes, every constant except one gives no solution; the one excluded value is the constant that makes the two sides identical.",
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
    question: "$m(2x + 5) - 3x = (m + 2)x + 25$\nIn the given equation, $m$ is a constant. If the equation has infinitely many solutions, what is the value of $m$?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~30s):** The left side is $(2m - 3)x + 5m$. Matching $x$-coefficients gives $2m - 3 = m + 2$, so $m = 5$, and then the constants agree: $5(5) = 25$.\n\n**The Full Solution:**\nStep 1: Distribute and collect on the left: $2mx + 5m - 3x = (2m - 3)x + 5m$.\nStep 2: For infinitely many solutions, the coefficients of $x$ must match and the constants must match: $2m - 3 = m + 2$ and $5m = 25$.\nStep 3: The first gives $m = 5$ and the second gives $m = 5$, so both conditions hold. Check: with $m = 5$ the left side is $10x + 25 - 3x = 7x + 25$ and the right side is $7x + 25$ ✓\n\n**Common Mistakes:** Answering $2$ drops the $-3x$ and solves $2m = m + 2$, which leaves the constants $10$ and $25$ unequal; answering $-1$ adds the $3x$ instead of subtracting it and solves $2m + 3 = m + 2$; answering $25$ reports the constant $5m$ instead of $m$.\n\n**Test Day Takeaway:** An identity needs two matches, the $x$-coefficients and the constants; solve with one and confirm with the other.",
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
    question: "$|x - 14| = 9$\nWhat are the solutions to the given equation?",
    choices: [
      // distractor: solves |x| = 9, ignoring the 14 inside the bars
      { id: "A", text: "$-9$ and $9$" },
      // distractor: finds 14 - 9 = 5 but pairs it with 14 instead of 14 + 9
      { id: "B", text: "$5$ and $14$" },
      { id: "C", text: "$5$ and $23$" },
      // distractor: finds 14 + 9 = 23 but pairs it with 14 instead of 14 - 9
      { id: "D", text: "$14$ and $23$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The solutions are the two numbers $9$ away from $14$: $5$ and $23$.\n\n**The Full Solution:**\nStep 1: $|x - 14| = 9$ means $x - 14 = 9$ or $x - 14 = -9$.\nStep 2: The first case gives $x = 23$.\nStep 3: The second case gives $x = 5$. Check: $|23 - 14| = 9$ and $|5 - 14| = |-9| = 9$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$ and $9$): solves $|x| = 9$, ignoring the $14$ inside the bars.\n* Choice B ($5$ and $14$): finds $14 - 9$ but keeps $14$ itself as the second solution; $|14 - 14| = 0$, not $9$.\n* Choice D ($14$ and $23$): finds $14 + 9$ but keeps $14$ as the other solution.\n\n**Test Day Takeaway:** $|x - c| = d$ has the two solutions $c - d$ and $c + d$, equally spaced on either side of $c$.",
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
    question: "$|x + 6| = 15$\nWhat is the positive solution to the given equation?",
    correctAnswer: "9",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~10s):** $x + 6 = 15$ gives $x = 9$; the other case, $x + 6 = -15$, gives the negative solution $-21$.\n\n**The Full Solution:**\nStep 1: $|x + 6| = 15$ means $x + 6 = 15$ or $x + 6 = -15$.\nStep 2: The cases give $x = 9$ and $x = -21$.\nStep 3: The positive solution is $9$. Check: $|9 + 6| = 15$ ✓\n\n**Common Mistakes:** Answering $21$ treats the inside as $x - 6$; answering $15$ drops the $6$; answering $-21$ reports the negative solution.\n\n**Test Day Takeaway:** Split the absolute value into its two cases, solve both, then pick the one the question asks for.",
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
    question: "$|2x - 9| = 15$\nWhat is the negative solution to the given equation?",
    choices: [
      // distractor: subtracts 9 instead of adding it in the negative case: 2x = -15 - 9
      { id: "A", text: "$-12$" },
      { id: "B", text: "$-3$" },
      // distractor: drops the negative sign when dividing -6 by 2
      { id: "C", text: "$3$" },
      // distractor: gives the positive solution, from 2x - 9 = 15
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The negative solution comes from $2x - 9 = -15$, so $2x = -6$ and $x = -3$.\n\n**The Full Solution:**\nStep 1: An absolute value equal to $15$ means $2x - 9 = 15$ or $2x - 9 = -15$.\nStep 2: Solve each: $2x = 24$ gives $x = 12$, and $2x = -6$ gives $x = -3$.\nStep 3: The negative solution is $-3$. Check: $|2(-3) - 9| = |-15| = 15$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): subtracts $9$ instead of adding it in the negative case, so $2x = -24$.\n* Choice C ($3$): loses the negative sign when dividing $-6$ by $2$.\n* Choice D ($12$): is the positive solution, from $2x - 9 = 15$.\n\n**Test Day Takeaway:** Split $|\\text{expression}| = c$ into expression $= c$ and expression $= -c$, then read which solution the question asks for.",
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
    question: "$|4x - 26| = m$\nIn the given equation, $m$ is a positive constant. One solution to the equation is $x = 3$. What is the other solution?",
    correctAnswer: "10",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~20s):** At $x = 3$, $m = |12 - 26| = 14$. The other case is $4x - 26 = 14$, so $x = 10$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 3$: $m = |4(3) - 26| = |-14| = 14$.\nStep 2: The equation is $|4x - 26| = 14$, so $4x - 26 = 14$ or $4x - 26 = -14$. The second case gives $x = 3$, the solution already known.\nStep 3: The first case gives $4x = 40$, so $x = 10$. Check: $|4(10) - 26| = |14| = 14$ ✓\n\n**Common Mistakes:** Answering $14$ reports $m$ instead of the second solution; answering $-3$ assumes the solutions are opposites, which is true only for $|x| = m$; answering $6.5$ solves $4x - 26 = 0$, which locates the vertex of the graph rather than a second solution.\n\n**Test Day Takeaway:** Use the known solution to find the constant first; the other solution comes from the other sign.",
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
    question: "$f(x) = |x - 3| + 2$\nThe graph of $y = f(x)$ is shown. How many solutions does the equation $f(x) = 2$ have?",
    diagram: { type: "absoluteValue", params: { vertex: [3, 2], slope: 1 } },
    choices: [
      // distractor: assumes the line y = 2 misses the graph, though it touches the vertex (3, 2)
      { id: "A", text: "Zero" },
      { id: "B", text: "Exactly one" },
      // distractor: applies the usual two-case split without noticing that |x - 3| = 0 has a single case
      { id: "C", text: "Exactly two" },
      // distractor: confuses one touching point with the line overlapping the graph
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $|x - 3| + 2 = 2$ gives $|x - 3| = 0$, which holds only at $x = 3$.\n\n**The Full Solution:**\nStep 1: Isolate the absolute value: $|x - 3| + 2 = 2$ gives $|x - 3| = 0$.\nStep 2: An absolute value is $0$ only when the inside is $0$: $x - 3 = 0$, so $x = 3$.\nStep 3: So the equation has exactly one solution. Check on the graph: the line $y = 2$ touches the graph only at its vertex, $(3, 2)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): would be right if the value were below the vertex, such as $f(x) = 1$; here $y = 2$ meets the vertex.\n* Choice C (Exactly two): the usual two-case split, but $x - 3 = 0$ and $x - 3 = -0$ are the same equation.\n* Choice D (Infinitely many): the line $y = 2$ shares one point with the graph, not a segment.\n\n**Test Day Takeaway:** After isolating the absolute value, compare the other side with $0$: negative means no solutions, zero means one, positive means two.",
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
    question: "$|x - a| = 11$\nIn the given equation, $a$ is a positive constant. The solutions to the equation are $-3$ and $b$. What is the value of $a + b$?",
    correctAnswer: "27",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**The correct answer is $27$.**\n\n**The Fast Way (~25s):** Since $a > 0$, $-3$ must be the smaller solution $a - 11$, so $a = 8$; the other solution is $8 + 11 = 19$, and $8 + 19 = 27$.\n\n**The Full Solution:**\nStep 1: The solutions of $|x - a| = 11$ are $a - 11$ and $a + 11$.\nStep 2: If $a + 11 = -3$, then $a = -14$, which is not positive; so $a - 11 = -3$ and $a = 8$.\nStep 3: Then $b = a + 11 = 19$, and $a + b = 8 + 19 = 27$. Check: $|-3 - 8| = 11$ and $|19 - 8| = 11$ ✓\n\n**Common Mistakes:** Answering $8$ stops at $a$; answering $19$ stops at $b$; answering $5$ adds $a$ to the given solution $-3$ instead of to $b$.\n\n**Test Day Takeaway:** The two solutions of $|x - a| = d$ sit $d$ on either side of $a$, so $a$ is their midpoint and they are $2d$ apart.",
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
    question: "$|ax + b| = 20$\nIn the given equation, $a$ and $b$ are constants, and $a > 0$. The solutions to the equation are $-7$ and $3$. What is the value of $ab$?",
    choices: [
      // distractor: stops after finding a = 4
      { id: "A", text: "$4$" },
      // distractor: stops after finding b = 8
      { id: "B", text: "$8$" },
      // distractor: adds a and b instead of multiplying them
      { id: "C", text: "$12$" },
      { id: "D", text: "$32$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** Since $a > 0$, $ax + b$ is $20$ at $x = 3$ and $-20$ at $x = -7$. A change of $40$ over $10$ units gives $a = 4$, then $b = 20 - 12 = 8$, and $ab = 32$.\n\n**The Full Solution:**\nStep 1: With $a > 0$, $ax + b$ increases with $x$, so the larger solution gives $+20$ and the smaller gives $-20$: $3a + b = 20$ and $-7a + b = -20$.\nStep 2: Subtract the second equation from the first: $10a = 40$, so $a = 4$.\nStep 3: Substitute: $12 + b = 20$, so $b = 8$ and $ab = 32$. Check: $|4(3) + 8| = 20$ and $|4(-7) + 8| = |-20| = 20$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): this is $a$, found in Step 2, not the product.\n* Choice B ($8$): this is $b$, found in Step 3, not the product.\n* Choice C ($12$): adds $a + b$ instead of multiplying.\n\n**Test Day Takeaway:** Each solution of $|ax + b| = d$ makes the inside equal $d$ or $-d$; the sign of $a$ tells which solution gets which.",
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
    question: "$|3x - 21| = p$\nIn the given equation, $p$ is a positive constant. The two solutions to the equation differ by $9$. What is the value of $p$?",
    correctAnswer: "13.5",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**The correct answer is $13.5$.**\n\n**The Fast Way (~30s):** The solutions are $\\frac{21 \\pm p}{3}$, which differ by $\\frac{2p}{3}$. Setting $\\frac{2p}{3} = 9$ gives $p = 13.5$.\n\n**The Full Solution:**\nStep 1: $|3x - 21| = p$ means $3x - 21 = p$ or $3x - 21 = -p$, so $x = \\frac{21 + p}{3}$ or $x = \\frac{21 - p}{3}$.\nStep 2: Their difference is $\\frac{21 + p}{3} - \\frac{21 - p}{3} = \\frac{2p}{3}$.\nStep 3: Set $\\frac{2p}{3} = 9$: $2p = 27$, so $p = 13.5$. Check: the solutions are $\\frac{34.5}{3} = 11.5$ and $\\frac{7.5}{3} = 2.5$, which differ by $9$ ✓\n\n**Common Mistakes:** Answering $4.5$ treats the solutions as $7 \\pm p$ without dividing by $3$, so $2p = 9$; answering $27$ forgets that the two solutions are $2\\left(\\frac{p}{3}\\right)$ apart and sets $\\frac{p}{3} = 9$; answering $3$ divides $9$ by $3$ and stops.\n\n**Test Day Takeaway:** For $|kx - c| = p$ the solutions are $\\frac{c \\pm p}{k}$, so they are $\\frac{2p}{k}$ apart; the coefficient $k$ shrinks the gap.",
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
    question: "$7x + 9 = 4x + 30$\nWhat value of $x$ is the solution to the given equation?",
    choices: [
      // distractor: divides 21 by 7, the left-hand coefficient, instead of by the difference 3
      { id: "A", text: "$3$" },
      { id: "B", text: "$7$" },
      // distractor: adds the constants and divides, computing (30 + 9)/3 = 13
      { id: "C", text: "$13$" },
      // distractor: stops at 3x = 21 and reports 21
      { id: "D", text: "$21$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Move $4x$ left and $9$ right: $3x = 21$, so $x = 7$.\n\n**The Full Solution:**\nStep 1: Subtract $4x$ from both sides: $3x + 9 = 30$.\nStep 2: Subtract $9$ from both sides: $3x = 21$.\nStep 3: Divide by $3$: $x = 7$. Check: $7(7) + 9 = 58$ and $4(7) + 30 = 58$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): divides $21$ by $7$, the original left-hand coefficient, instead of by the difference of the coefficients.\n* Choice C ($13$): adds the constants instead of subtracting, computing $\\frac{30 + 9}{3}$.\n* Choice D ($21$): reports $3x$ and never divides by $3$.\n\n**Test Day Takeaway:** After collecting the variable terms on one side, the divisor is the difference of the two coefficients.",
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
    question: "If $9x + 6 = 5x + 26$, what is the value of $x$?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** $9x - 5x = 26 - 6$, so $4x = 20$ and $x = 5$.\n\n**The Full Solution:**\nStep 1: Subtract $5x$ from both sides: $4x + 6 = 26$.\nStep 2: Subtract $6$ from both sides: $4x = 20$.\nStep 3: Divide by $4$: $x = 5$. Check: $9(5) + 6 = 51$ and $5(5) + 26 = 51$ ✓\n\n**Common Mistakes:** Answering $8$ adds the constants, computing $\\frac{26 + 6}{4}$; answering $20$ stops at $4x = 20$; answering $\\frac{20}{9}$ divides by $9$ instead of by the difference $4$.\n\n**Test Day Takeaway:** Collect the $x$-terms on one side and the constants on the other, changing the sign of each term you move.",
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
    question: "The graphs of $y = 2x - 3$ and $y = -x + 9$ are shown in the $xy$-plane. What value of $x$ is the solution to the equation $2x - 3 = -x + 9$?",
    diagram: { type: "twoLineGraph", params: { intersection: { x: 4, y: 5 }, slope1: 2, slope2: -1, xRange: [-2, 10], yRange: [-4, 10], showIntersection: false, xTickInterval: 2, yTickInterval: 2, gridInterval: 1 } },
    choices: [
      // distractor: moves the constants to the wrong side, getting 3x = -12
      { id: "A", text: "$-4$" },
      // distractor: computes 9 - 3 = 6 instead of 9 + 3, getting 3x = 6
      { id: "B", text: "$2$" },
      { id: "C", text: "$4$" },
      // distractor: reports the y-coordinate of the intersection point instead of the x-coordinate
      { id: "D", text: "$5$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Add $x$ and $3$ to both sides: $3x = 12$, so $x = 4$, where the two lines cross.\n\n**The Full Solution:**\nStep 1: Add $x$ to both sides: $3x - 3 = 9$.\nStep 2: Add $3$ to both sides: $3x = 12$, so $x = 4$.\nStep 3: The solution is the $x$-coordinate of the point where the graphs intersect. Check: $2(4) - 3 = 5$ and $-4 + 9 = 5$, so the lines meet at $(4, 5)$, as the graph shows ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): moves the constants to the wrong side, getting $3x = -12$.\n* Choice B ($2$): computes $9 - 3 = 6$ instead of $9 + 3 = 12$ when moving the $-3$.\n* Choice D ($5$): reads the $y$-coordinate of the intersection point instead of the $x$-coordinate.\n\n**Test Day Takeaway:** The solution of $f(x) = g(x)$ is the $x$-coordinate of the point where the graphs of $y = f(x)$ and $y = g(x)$ cross.",
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
    question: "$9(x - 4) = 7x + q$\nIn the given equation, $q$ is a constant. If $x = 30$ is the solution to the equation, what is the value of $q$?",
    correctAnswer: "24",
    explanation: "**SAT Pattern: Parameter Inference from a Linear Equation**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~20s):** Substitute $x = 30$: $9(26) = 210 + q$, so $234 = 210 + q$ and $q = 24$.\n\n**The Full Solution:**\nStep 1: A solution makes the equation true, so substitute $x = 30$: $9(30 - 4) = 7(30) + q$.\nStep 2: Evaluate each side: $9(26) = 234$ and $7(30) = 210$, so $234 = 210 + q$.\nStep 3: Subtract $210$: $q = 24$. Check: with $q = 24$, $9x - 36 = 7x + 24$ gives $2x = 60$, so $x = 30$ ✓\n\n**Common Mistakes:** Answering $60$ computes $9(30) - 210$, forgetting to subtract the $4$ first; answering $-24$ subtracts in the wrong order, $210 - 234$; answering $234$ stops after evaluating the left side.\n\n**Test Day Takeaway:** When the solution is given, substitute it and solve for the constant; the equation becomes ordinary arithmetic.",
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
    question: "If $8x - 13 = mx + 11$ and $x = 6$, what is the value of $m$?",
    choices: [
      { id: "A", text: "$4$" },
      // distractor: reports the given value x = 6 instead of m
      { id: "B", text: "$6$" },
      // distractor: copies the coefficient 8 from the left side, as if the two sides needed matching coefficients
      { id: "C", text: "$8$" },
      // distractor: finds 6m = 24 and stops without dividing by 6
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** At $x = 6$ the left side is $48 - 13 = 35$, so $6m + 11 = 35$, $6m = 24$, and $m = 4$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 6$: $8(6) - 13 = 6m + 11$.\nStep 2: Simplify the left side: $35 = 6m + 11$, so $6m = 24$.\nStep 3: Divide by $6$: $m = 4$. Check: $8(6) - 13 = 35$ and $4(6) + 11 = 35$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): reports the given value of $x$ instead of $m$.\n* Choice C ($8$): copies the coefficient from the left side; matching coefficients would make the equation have no solution, not the solution $x = 6$.\n* Choice D ($24$): stops at $6m = 24$ without dividing by $6$.\n\n**Test Day Takeaway:** A known value of $x$ turns an equation with a constant into arithmetic: substitute, simplify, and solve for the constant.",
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
    question: "$7(x - 3) = 4x + 15$\nWhat value of $x$ is the solution to the given equation?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~20s):** Distributing gives $7x - 21 = 4x + 15$, so $3x = 36$ and $x = 12$.\n\n**The Full Solution:**\nStep 1: Distribute the $7$: $7x - 21 = 4x + 15$.\nStep 2: Subtract $4x$ from both sides and add $21$ to both sides: $3x = 36$.\nStep 3: Divide by $3$: $x = 12$. Check: $7(12 - 3) = 63$ and $4(12) + 15 = 63$ ✓\n\n**Common Mistakes:** Multiplying only the $x$ by $7$ gives $7x - 3 = 4x + 15$ and $x = 6$. Moving the $-21$ to the right side without changing its sign gives $3x = -6$ and $x = -2$.\n\n**Test Day Takeaway:** Distribute to every term inside the parentheses, then collect the variable terms on one side before dividing.",
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
    question: "$\\frac{10x + 35}{5} - \\frac{k}{3} = 2x + 4$\nIn the given equation, $k$ is a constant. If the equation has infinitely many solutions, what is the value of $k$?",
    choices: [
      // distractor: finds k/3 = 3 and reports 3 without multiplying by 3
      { id: "A", text: "$3$" },
      { id: "B", text: "$9$" },
      // distractor: ignores the 4 on the right side and solves k/3 = 7
      { id: "C", text: "$21$" },
      // distractor: adds the constants, k/3 = 7 + 4, instead of subtracting
      { id: "D", text: "$33$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Polynomial Identity with Rational Expressions**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The left side is $2x + 7 - \\frac{k}{3}$; for infinitely many solutions $7 - \\frac{k}{3} = 4$, so $k = 9$.\n\n**The Full Solution:**\nStep 1: Simplify the fraction: $\\frac{10x + 35}{5} = 2x + 7$, so the equation is $2x + 7 - \\frac{k}{3} = 2x + 4$.\nStep 2: The $x$-terms already match, so the equation has infinitely many solutions only when the constants match: $7 - \\frac{k}{3} = 4$.\nStep 3: Then $\\frac{k}{3} = 3$, so $k = 9$. Check: $2x + 7 - 3 = 2x + 4$ for every $x$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): stops at $\\frac{k}{3} = 3$ and forgets to multiply by $3$.\n* Choice C ($21$): ignores the $4$ on the right side and solves $\\frac{k}{3} = 7$.\n* Choice D ($33$): adds the constants, $\\frac{k}{3} = 7 + 4$, instead of subtracting.\n\n**Test Day Takeaway:** A linear equation has infinitely many solutions when both sides simplify to the same expression: match the $x$-coefficients and the constants.",
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
    question: "$9x - 4b = 5x + 2b$\nIn the given equation, $b$ is a constant. If the solution to the given equation is $b + 5$, what is the value of $b$?",
    correctAnswer: "10",
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~45s):** Solving for $x$ gives $4x = 6b$, so $x = \\frac{3b}{2}$. Setting $\\frac{3b}{2} = b + 5$ gives $\\frac{b}{2} = 5$, so $b = 10$.\n\n**The Full Solution:**\nStep 1: Collect the $x$ terms on the left and the $b$ terms on the right: $9x - 5x = 2b + 4b$, so $4x = 6b$.\nStep 2: Divide by $4$: the solution is $x = \\frac{3b}{2}$.\nStep 3: The solution equals $b + 5$, so $\\frac{3b}{2} = b + 5$. Subtract $b$: $\\frac{b}{2} = 5$, so $b = 10$. Check: with $b = 10$ the equation is $9x - 40 = 5x + 20$, so $4x = 60$ and $x = 15$, which is $10 + 5$ ✓\n\n**Common Mistakes:** Reporting $15$, the solution of the equation, instead of $b$. Moving $-4b$ to the right side without changing its sign gives $4x = -2b$, so $x = -\\frac{b}{2}$ and $b = -\\frac{10}{3}$.\n\n**Test Day Takeaway:** Solve for the variable in terms of the constant first; the extra condition then gives a one-variable equation in the constant.",
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
    question: "If $6x + 18 = 54$, what is the value of $x + 3$?",
    choices: [
      // distractor: gives the value of x, 6, instead of x + 3
      { id: "A", text: "$6$" },
      { id: "B", text: "$9$" },
      // distractor: divides 54 by 6 to get 9, treats 9 as the value of x, and adds 3
      { id: "C", text: "$12$" },
      // distractor: gives the value of 6x, 54 - 18 = 36
      { id: "D", text: "$36$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Shifted-Output Linear**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $6x + 18 = 6(x + 3)$, so $6(x + 3) = 54$ and $x + 3 = 9$.\n\n**The Full Solution:**\nStep 1: Factor $6$ out of the left side: $6x + 18 = 6(x + 3)$.\nStep 2: The equation becomes $6(x + 3) = 54$.\nStep 3: Divide both sides by $6$: $x + 3 = 9$. Check: $x = 6$, and $6(6) + 18 = 54$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: ($6$): this is the value of $x$; the question asks for $x + 3$.\n* Choice C: ($12$): divides $54$ by $6$, treats the $9$ as $x$, and then adds $3$.\n* Choice D: ($36$): this is the value of $6x$, since $54 - 18 = 36$.\n\n**Test Day Takeaway:** When a question asks for an expression, look for that expression inside the equation before solving for $x$.",
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
    question: "$4(3x - 7) = 20$\nWhat is the solution to the given equation?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~15s):** Divide both sides by $4$: $3x - 7 = 5$, so $3x = 12$ and $x = 4$.\n\n**The Full Solution:**\nStep 1: Distribute the $4$: $12x - 28 = 20$.\nStep 2: Add $28$ to both sides: $12x = 48$.\nStep 3: Divide by $12$: $x = 4$. Check: $4(3(4) - 7) = 4(5) = 20$ ✓\n\n**Common Mistakes:** Multiplying only the $3x$ by $4$ gives $12x - 7 = 20$ and $x = \\frac{9}{4}$. Subtracting $28$ instead of adding it gives $12x = -8$ and $x = -\\frac{2}{3}$.\n\n**Test Day Takeaway:** Distribute to both terms in the parentheses, or divide the whole equation by the outside factor first.",
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
    question: "$5(2x - c) + 3x = 41$\nIn the given equation, $c$ is a constant. If $x = 7$ is the solution to the given equation, what is the value of $c$?",
    choices: [
      // distractor: distributes the 5 but writes +5c instead of -5c, solving 70 + 5c + 21 = 41
      { id: "A", text: "$-10$" },
      // distractor: drops the 3x term, solving 5(14 - c) = 41
      { id: "B", text: "$5.8$" },
      { id: "C", text: "$10$" },
      // distractor: multiplies only the 2x by 5, solving 70 - c + 21 = 41
      { id: "D", text: "$50$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Solve for a Parameter Given a Solution**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Substitute $x = 7$: $5(14 - c) + 21 = 41$, so $5(14 - c) = 20$, $14 - c = 4$, and $c = 10$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 7$: $5(2(7) - c) + 3(7) = 41$, or $5(14 - c) + 21 = 41$.\nStep 2: Subtract $21$: $5(14 - c) = 20$. Divide by $5$: $14 - c = 4$.\nStep 3: Solve: $c = 10$. Check: $5(14 - 10) + 21 = 20 + 21 = 41$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: ($-10$): distributes the $5$ but writes $+5c$ instead of $-5c$, so $70 + 5c + 21 = 41$.\n* Choice B: ($5.8$): drops the $3x$ term and solves $5(14 - c) = 41$.\n* Choice D: ($50$): multiplies only the $2x$ by $5$, solving $70 - c + 21 = 41$.\n\n**Test Day Takeaway:** A known solution turns the equation into one about the constant: substitute first, then solve for the constant as usual.",
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
    question: "$-3(4 - 2x) + 7 = 25$\nWhat value of $x$ satisfies the given equation?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~20s):** Distributing gives $-12 + 6x + 7 = 25$, so $6x - 5 = 25$, $6x = 30$, and $x = 5$.\n\n**The Full Solution:**\nStep 1: Distribute the $-3$: $-3(4) = -12$ and $-3(-2x) = 6x$, so $-12 + 6x + 7 = 25$.\nStep 2: Combine the constants: $6x - 5 = 25$, so $6x = 30$.\nStep 3: Divide by $6$: $x = 5$. Check: $-3(4 - 10) + 7 = 18 + 7 = 25$ ✓\n\n**Common Mistakes:** Distributing $-3$ as $-12 - 6x$ gives $-6x - 5 = 25$ and $x = -5$. Adding $7$ to $25$ instead of subtracting it gives $-3(4 - 2x) = 32$ and $x = \\frac{22}{3}$.\n\n**Test Day Takeaway:** A negative factor outside the parentheses changes the sign of every term inside; write each product out before combining.",
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
    question: "$a(3x - 4) = 12x + 20$\nIn the given equation, $a$ is a constant. If the equation has no solution, what is the value of $a$?",
    choices: [
      // distractor: makes the constant terms equal, -4a = 20, which leaves 3a = -15, not 12, so the equation has exactly one solution
      { id: "A", text: "$-5$" },
      { id: "B", text: "$4$" },
      // distractor: solves -4a = 20 with a sign error
      { id: "C", text: "$5$" },
      // distractor: sets a equal to the coefficient 12 without dividing by 3
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Linear Equation with Distribution (Solution-Count Condition)**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** No solution means equal $x$-coefficients and unequal constants: $3a = 12$, so $a = 4$.\n\n**The Full Solution:**\nStep 1: Distribute: $3ax - 4a = 12x + 20$.\nStep 2: A linear equation has no solution when the $x$-coefficients match but the constants do not, so $3a = 12$ and $a = 4$.\nStep 3: Check the constants: with $a = 4$ the equation is $12x - 16 = 12x + 20$, which reduces to $-16 = 20$, never true ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: ($-5$): makes the constant terms equal, $-4a = 20$; then the left side is $-15x + 20$ and the equation has exactly one solution.\n* Choice C: ($5$): tries to match the constants, $-4a = 20$, and drops the negative sign.\n* Choice D: ($12$): sets $a$ equal to $12$ without dividing by the $3$ inside the parentheses.\n\n**Test Day Takeaway:** No solution: same slope, different constants. Infinitely many: same slope and same constants.",
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
    question: "If $\\frac{3}{4}(8x - 12) = 2x + 15$, what is the value of $x$?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~25s):** $\\frac{3}{4}(8x - 12) = 6x - 9$, so $6x - 9 = 2x + 15$, $4x = 24$, and $x = 6$.\n\n**The Full Solution:**\nStep 1: Distribute $\\frac{3}{4}$: $\\frac{3}{4}(8x) = 6x$ and $\\frac{3}{4}(12) = 9$, so the left side is $6x - 9$.\nStep 2: Subtract $2x$ and add $9$: $4x = 24$.\nStep 3: Divide by $4$: $x = 6$. Check: $\\frac{3}{4}(48 - 12) = 27$ and $2(6) + 15 = 27$ ✓\n\n**Common Mistakes:** Multiplying only the $8x$ by $\\frac{3}{4}$ gives $6x - 12 = 2x + 15$ and $x = \\frac{27}{4}$. Moving the $-9$ without changing its sign gives $4x = 6$ and $x = 1.5$.\n\n**Test Day Takeaway:** A fraction outside the parentheses multiplies every term inside; distribute it to both terms before collecting like terms.",
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
    question: "$5(3y - 2p) = 3(y + 4)$\nIn the given equation, $p$ is a constant. Which expression represents the solution to the given equation in terms of $p$?",
    choices: [
      // distractor: multiplies only the 3y by 5, writing 15y - 2p = 3y + 12
      { id: "A", text: "$\\frac{p + 6}{6}$" },
      // distractor: moves the 12 to the other side as -12, getting 12y = 10p - 12
      { id: "B", text: "$\\frac{5p - 6}{6}$" },
      // distractor: adds 3y to the left side instead of subtracting it, getting 18y = 10p + 12
      { id: "C", text: "$\\frac{5p + 6}{9}$" },
      { id: "D", text: "$\\frac{5p + 6}{6}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** $15y - 10p = 3y + 12$, so $12y = 10p + 12$ and $y = \\frac{10p + 12}{12} = \\frac{5p + 6}{6}$.\n\n**The Full Solution:**\nStep 1: Distribute on each side: $15y - 10p = 3y + 12$.\nStep 2: Subtract $3y$ from both sides and add $10p$ to both sides: $12y = 10p + 12$.\nStep 3: Divide by $12$ and reduce by $2$: $y = \\frac{10p + 12}{12} = \\frac{5p + 6}{6}$. Check with $p = 6$: the equation is $5(3y - 12) = 3(y + 4)$, so $15y - 60 = 3y + 12$ and $y = 6$, and $\\frac{5(6) + 6}{6} = 6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: ($\\frac{p + 6}{6}$): multiplies only the $3y$ by $5$, which gives $15y - 2p = 3y + 12$.\n* Choice B: ($\\frac{5p - 6}{6}$): moves the $12$ across the equals sign as $-12$, which gives $12y = 10p - 12$.\n* Choice C: ($\\frac{5p + 6}{9}$): adds $3y$ to the left side instead of subtracting it, which gives $18y = 10p + 12$.\n\n**Test Day Takeaway:** Treat the constant like a number: distribute, collect the $y$ terms on one side, and reduce numerator and denominator by the same factor.",
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
    question: "$\\frac{2}{3}(9x - 12) - \\frac{1}{4}(8x + 20) = 5x - 26$\nWhat value of $x$ is the solution to the given equation?",
    correctAnswer: "13",
    explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~45s):** The left side simplifies to $(6x - 8) - (2x + 5) = 4x - 13$, so $4x - 13 = 5x - 26$ and $x = 13$.\n\n**The Full Solution:**\nStep 1: Distribute each fraction: $\\frac{2}{3}(9x - 12) = 6x - 8$ and $\\frac{1}{4}(8x + 20) = 2x + 5$.\nStep 2: Subtract the second product: $(6x - 8) - (2x + 5) = 4x - 13$, so the equation is $4x - 13 = 5x - 26$.\nStep 3: Subtract $4x$ and add $26$: $x = 13$. Check: $\\frac{2}{3}(105) - \\frac{1}{4}(124) = 70 - 31 = 39$ and $5(13) - 26 = 39$ ✓\n\n**Common Mistakes:** Subtracting only the $2x$ of the second product, $6x - 8 - 2x + 5 = 4x - 3$, gives $4x - 3 = 5x - 26$ and $x = 23$. Moving $5x$ to the left side without changing its sign gives $9x - 13 = -26$ and $x = -\\frac{13}{9}$.\n\n**Test Day Takeaway:** Simplify each product completely, then put the subtracted product in parentheses so its sign reaches both terms.",
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
    question: "The table shows the length, in meters, of each of the three sections of a walking path. The total length of the path is $96$ meters. What is the value of $x$?",
    questionTable: { headers: ["Section", "Length (meters)"], rows: [["North", "$4x + 9$"], ["Middle", "$6x - 3$"], ["South", "$2x + 6$"]] },
    choices: [
      // distractor: subtracts the combined constant 12 twice, solving 12x = 72
      { id: "A", text: "$6$" },
      { id: "B", text: "$7$" },
      // distractor: ignores the constants entirely and solves 12x = 96
      { id: "C", text: "$8$" },
      // distractor: adds the constants to the total instead of subtracting, solving 12x = 108
      { id: "D", text: "$9$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Combining Like Terms — Solve for the Variable**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The three lengths add to $12x + 12$; setting $12x + 12 = 96$ gives $x = 7$.\n\n**The Full Solution:**\nStep 1: Add the three expressions: $(4x + 9) + (6x - 3) + (2x + 6)$.\nStep 2: Combine like terms: $4x + 6x + 2x = 12x$ and $9 - 3 + 6 = 12$, so the path is $12x + 12$ meters long.\nStep 3: Set $12x + 12 = 96$: $12x = 84$ and $x = 7$. Check: the sections measure $37$, $39$, and $20$ meters, and $37 + 39 + 20 = 96$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: ($6$): subtracts the constant $12$ a second time, solving $12x = 96 - 24$.\n* Choice C: ($8$): drops the constants entirely and solves $12x = 96$.\n* Choice D: ($9$): adds the constants to the total instead of subtracting them, solving $12x = 108$.\n\n**Test Day Takeaway:** Collect the whole expression first, then move its constant to the other side once, before dividing by the coefficient.",
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
    question: "$(8x + 13) + (3x - 5)$\nThe given expression is equivalent to $11x + b$, where $b$ is a constant. What is the value of $b$?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Combining Like Terms**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~10s):** The constants combine to $13 - 5 = 8$, so $b = 8$.\n\n**The Full Solution:**\nStep 1: Group the $x$ terms and the constants: $(8x + 3x) + (13 - 5)$.\nStep 2: Combine: $11x + 8$.\nStep 3: Match with $11x + b$: $b = 8$. Check with $x = 1$: $(8 + 13) + (3 - 5) = 19$ and $11 + 8 = 19$ ✓\n\n**Common Mistakes:** Adding $5$ instead of subtracting it gives $18$. Reporting the coefficient $11$ answers for the $x$ term, not the constant.\n\n**Test Day Takeaway:** Combine like terms in two groups, variable terms and constants, and carry each sign with its number.",
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
    question: "$4(3x - 5) + k(x + 2) = 19x - 6$\nIn the given equation, $k$ is a constant. If the equation has infinitely many solutions, what is the value of $k$?",
    choices: [
      { id: "A", text: "$7$" },
      // distractor: does not distribute the 4, so the x-coefficient on the left is 3 + k and 3 + k = 19
      { id: "B", text: "$16$" },
      // distractor: sets k equal to 19, ignoring the 12x from the first product
      { id: "C", text: "$19$" },
      // distractor: adds 12 to 19 instead of subtracting it
      { id: "D", text: "$31$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Combining Like Terms**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The left side is $(12 + k)x + (2k - 20)$; matching the $x$-coefficients gives $12 + k = 19$, so $k = 7$.\n\n**The Full Solution:**\nStep 1: Distribute: $12x - 20 + kx + 2k = (12 + k)x + (2k - 20)$.\nStep 2: The equation has infinitely many solutions, so the $x$-coefficients match: $12 + k = 19$.\nStep 3: Solve: $k = 7$. Check the constants: $2(7) - 20 = -6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($16$): leaves the $4$ undistributed, so the $x$-coefficient on the left is $3 + k$ and $3 + k = 19$.\n* Choice C ($19$): sets $k$ equal to $19$, ignoring the $12x$ that the first product contributes.\n* Choice D ($31$): adds $12$ to $19$ instead of subtracting it.\n\n**Test Day Takeaway:** A linear equation with infinitely many solutions has matching coefficients on both sides; solve with one pair and check with the other.",
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
    question: "$(11x - 6) - (4x + 15) = 21$\nWhat is the solution to the given equation?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Combining Like Terms**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~20s):** The left side is $7x - 21$, so $7x - 21 = 21$, $7x = 42$, and $x = 6$.\n\n**The Full Solution:**\nStep 1: Distribute the subtraction: $11x - 6 - 4x - 15$.\nStep 2: Combine like terms: $7x - 21 = 21$, so $7x = 42$.\nStep 3: Divide by $7$: $x = 6$. Check: $(66 - 6) - (24 + 15) = 60 - 39 = 21$ ✓\n\n**Common Mistakes:** Subtracting only the $4x$, so the left side becomes $7x + 9$, gives $7x = 12$ and $x = \\frac{12}{7}$. Adding $4x$ instead of subtracting it gives $15x - 21 = 21$ and $x = 2.8$.\n\n**Test Day Takeaway:** A minus sign in front of parentheses changes the sign of every term inside.",
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
    question: "$6(3x + 8) - c = 18x + 13$\nIn the given equation, $c$ is a constant. If the equation has infinitely many solutions, what is the value of $c$?",
    choices: [
      // distractor: solves 48 - c = 13 as c = 13 - 48
      { id: "A", text: "$-35$" },
      // distractor: multiplies only the 3x by 6, solving 8 - c = 13
      { id: "B", text: "$-5$" },
      { id: "C", text: "$35$" },
      // distractor: adds 13 to 48 instead of subtracting
      { id: "D", text: "$61$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Parameter Inference (Identity)**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The left side is $18x + (48 - c)$, so $48 - c = 13$ and $c = 35$.\n\n**The Full Solution:**\nStep 1: Distribute: $18x + 48 - c = 18x + 13$.\nStep 2: The $x$-coefficients already match, so the equation has infinitely many solutions exactly when the constants match: $48 - c = 13$.\nStep 3: Solve: $c = 35$. Check: $18x + 48 - 35 = 18x + 13$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: ($-35$): solves $48 - c = 13$ as $c = 13 - 48$.\n* Choice B: ($-5$): multiplies only the $3x$ by $6$, so the constants give $8 - c = 13$.\n* Choice D: ($61$): adds $13$ to $48$ instead of subtracting.\n\n**Test Day Takeaway:** Infinitely many solutions means both sides are the same expression; match the constants once the $x$ terms agree.",
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
    question: "$4(2x - 3) + 3(x + 5) - (6x - 2)$\nIf the given expression is rewritten in the form $ax + b$, where $a$ and $b$ are constants, what is the value of $a + b$?",
    correctAnswer: "10",
    explanation: "**SAT Pattern: Combining Like Terms**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~30s):** The $x$ terms give $8x + 3x - 6x = 5x$ and the constants give $-12 + 15 + 2 = 5$, so $a + b = 10$.\n\n**The Full Solution:**\nStep 1: Distribute each product: $8x - 12 + 3x + 15 - 6x + 2$.\nStep 2: Combine: $(8 + 3 - 6)x + (-12 + 15 + 2) = 5x + 5$, so $a = 5$ and $b = 5$.\nStep 3: Add: $a + b = 10$. Check with $x = 1$: $4(-1) + 3(6) - (4) = 10$ and $5(1) + 5 = 10$ ✓\n\n**Common Mistakes:** Subtracting the $2$ instead of adding it gives $5x + 1$ and a sum of $6$. Leaving the $4$ undistributed on the $-3$ gives $5x + 14$ and a sum of $19$.\n\n**Test Day Takeaway:** Distribute every factor, including the minus sign before the last parentheses, then combine $x$ terms and constants separately.",
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
    question: "$3(2x + a) - (bx - 4) = 2x + 22$\nIn the given equation, $a$ and $b$ are constants. If the equation has infinitely many solutions, what is the value of $ab$?",
    choices: [
      // distractor: subtracts the bx term as +bx, so 6 + b = 2 and b = -4
      { id: "A", text: "$-24$" },
      // distractor: finds a = 6 and b = 4 but adds them instead of multiplying
      { id: "B", text: "$10$" },
      { id: "C", text: "$24$" },
      // distractor: multiplies only the 2x by 3, so a + 4 = 22 and a = 18
      { id: "D", text: "$72$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Polynomial Identity with Two Parameters**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** The left side is $(6 - b)x + (3a + 4)$, so $6 - b = 2$ and $3a + 4 = 22$, giving $b = 4$, $a = 6$, and $ab = 24$.\n\n**The Full Solution:**\nStep 1: Distribute: $6x + 3a - bx + 4 = (6 - b)x + (3a + 4)$.\nStep 2: Match the $x$-coefficients: $6 - b = 2$, so $b = 4$. Match the constants: $3a + 4 = 22$, so $a = 6$.\nStep 3: Multiply: $ab = 6 \\cdot 4 = 24$. Check: $3(2x + 6) - (4x - 4) = 6x + 18 - 4x + 4 = 2x + 22$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-24$): subtracts the $bx$ term as $+bx$, so $6 + b = 2$ and $b = -4$.\n* Choice B ($10$): finds $a = 6$ and $b = 4$ correctly but adds them instead of multiplying.\n* Choice D ($72$): multiplies only the $2x$ by $3$, so the constants give $a + 4 = 22$ and $a = 18$.\n\n**Test Day Takeaway:** With two unknown constants, one coefficient match gives one constant and the other match gives the second; answer the quantity the question names.",
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
    question: "If $4(2x - 5) + 9 = 3 - 2(2x - 5)$, what is the value of $2x - 5$?",
    correctAnswer: "-1",
    explanation: "**SAT Pattern: Combining Like Terms**\n\n**The correct answer is $-1$.**\n\n**The Fast Way (~30s):** Treat $2x - 5$ as one quantity $u$: $4u + 9 = 3 - 2u$, so $6u = -6$ and $u = -1$.\n\n**The Full Solution:**\nStep 1: Let $u = 2x - 5$. The equation becomes $4u + 9 = 3 - 2u$.\nStep 2: Add $2u$ to both sides and subtract $9$: $6u = -6$.\nStep 3: So $u = -1$, which means $2x - 5 = -1$. Check: $4(-1) + 9 = 5$ and $3 - 2(-1) = 5$ ✓\n\n**Common Mistakes:**\n* $2$: solves for $x$ ($2x - 5 = -1$ gives $x = 2$) and reports $x$ instead of $2x - 5$.\n* $-3$: moves $-2u$ to the left side as $-2u$, getting $2u = -6$.\n* $1$: drops the negative sign at the last step, $6u = -6$.\n\n**Test Day Takeaway:** When the same expression appears on both sides, combine it as a single unit; the question often asks for that expression, not $x$.",
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
    question: "The graph of $y = f(x)$ is shown in the $xy$-plane. For what value of $x$ is $f(x) = 12$?",
    diagram: { type: "linearGraph", params: { slope: 2, yIntercept: 2, xRange: [0, 10], yRange: [0, 24], xTickInterval: 2, yTickInterval: 4, gridInterval: 2, showPoints: [[0, 2], [4, 10]] } },
    choices: [
      // distractor: reports the y-intercept, the value of f(0)
      { id: "A", text: "$2$" },
      { id: "B", text: "$5$" },
      // distractor: solves 2x = 12, ignoring the y-intercept of 2
      { id: "C", text: "$6$" },
      // distractor: repeats the output 12 instead of giving the input
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The line is at a height of $12$ directly above $x = 5$.\n\n**The Full Solution:**\nStep 1: Read the line: it passes through $(0, 2)$ and $(4, 10)$, so its slope is $\\frac{10 - 2}{4 - 0} = 2$ and $f(x) = 2x + 2$.\nStep 2: Set the output to $12$: $2x + 2 = 12$, so $2x = 10$.\nStep 3: Then $x = 5$. Check: $f(5) = 2(5) + 2 = 12$, and the line passes through $(5, 12)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: ($2$): reports the $y$-intercept, the value of $f(0)$.\n* Choice C: ($6$): solves $2x = 12$, leaving out the $y$-intercept of $2$.\n* Choice D: ($12$): repeats the given output instead of the input that produces it.\n\n**Test Day Takeaway:** When the output is given, go across to the line and then down to the $x$-axis; the answer is an input, not a height.",
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
    question: "$g(x) = 7x - 9$\nThe function $g$ is defined by the given equation. For what value of $x$ does $g(x) = 40$?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~15s):** $7x - 9 = 40$, so $7x = 49$ and $x = 7$.\n\n**The Full Solution:**\nStep 1: Set the function equal to the output: $7x - 9 = 40$.\nStep 2: Add $9$ to both sides: $7x = 49$.\nStep 3: Divide by $7$: $x = 7$. Check: $g(7) = 49 - 9 = 40$ ✓\n\n**Common Mistakes:** Subtracting $9$ instead of adding it gives $7x = 31$ and $x = \\frac{31}{7}$. Evaluating $g(40) = 271$ uses $40$ as the input instead of the output.\n\n**Test Day Takeaway:** $g(x) = 40$ gives the output; set the rule equal to $40$ and solve for the input.",
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
    question: "For the linear function $g$, the table shows three values of $x$ and their corresponding values of $g(x)$. What is the value of $x$ when $g(x) = -7$?",
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
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Slope from the table: $\\dfrac{5 - 11}{2 - (-1)} = \\dfrac{-6}{3} = -2$, so $g(x) = -2x + 9$. Then $-2x + 9 = -7$ gives $-2x = -16$ and $x = 8$.\n\n**The Full Solution:**\nStep 1: Recover the rule. Between $(-1, 11)$ and $(2, 5)$ the slope is $\\dfrac{5 - 11}{2 - (-1)} = -2$. Using $(2, 5)$: $5 = -2(2) + b$, so $b = 9$ and $g(x) = -2x + 9$.\nStep 2: Confirm with the third row: $g(5) = -10 + 9 = -1$, as the table shows.\nStep 3: Set the output to $-7$: $-2x + 9 = -7$, so $-2x = -16$ and $x = 8$. Check: $g(8) = -2(8) + 9 = -16 + 9 = -7$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): solves $-2x + 9 = 7$, dropping the negative sign on the target output.\n* Choice B ($7$): reports the size of the given output as if it were the input.\n* Choice D ($23$): substitutes $x = -7$ and evaluates $g(-7) = 23$, reversing input and output.\n\n**Test Day Takeaway:** From a table of a linear function, get the slope from any two rows, the intercept from one row, then solve the rule for the input that produces the target output.",
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
    question: "The table shows the balance, in dollars, on a prepaid transit card after $n$ rides. The balance decreases by the same amount for each ride. After how many rides will the balance be \\$12?",
    diagram: { type: "dataTable", params: { headers: ["Rides, n", "Balance (dollars)"], rows: [["4", "62.00"], ["10", "47.00"], ["16", "32.00"]] } },
    correctAnswer: "24",
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~25s):** Each $6$ rides drop the balance by $\\$15$, so each ride costs $\\$2.50$. From $\\$32$ at $16$ rides, another $\\$20$ must come off: $20 \\div 2.50 = 8$ more rides, so $n = 24$.\n\n**The Full Solution:**\nStep 1: Find the rate. From $n = 4$ to $n = 10$ the balance falls from $62$ to $47$, a drop of $15$ over $6$ rides, so the rate is $-2.50$ dollars per ride. The rows $10 \\to 16$ confirm it: $47 - 32 = 15$.\nStep 2: Write the model. Starting balance: $62 + 4(2.50) = 72$, so $B(n) = 72 - 2.5n$.\nStep 3: Solve $72 - 2.5n = 12$: $2.5n = 60$, so $n = 24$. Check: $B(24) = 72 - 2.5(24) = 72 - 60 = 12$ ✓\n\n**Common Mistakes:** Dividing $15$ by $4$ instead of by $6$ (the ride gap between rows is $6$, not the row number); solving $2.5n = 72$ and answering $28.8$, which is when the balance hits $0$, not $12$; or reading $12$ as a number of rides.\n\n**Test Day Takeaway:** Table rows are rarely one unit apart; compute the rate as change in output divided by change in input, then solve the model for the requested output.",
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
    question: "The table shows several inputs $x$ and the matching outputs $f(x)$ of the linear function $f$. For what value of $x$ does $f(x) = 61$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["1", "9"], ["3", "17"], ["5", "25"], ["7", "33"]] } },
    choices: [
      // distractor: reports the largest input shown in the table
      { id: "A", text: "$7$" },
      // distractor: adds one more step of 2 past x = 7, where f(9) = 41 rather than 61
      { id: "B", text: "$9$" },
      { id: "C", text: "$14$" },
      // distractor: solves 4x = 61, ignoring the constant 5
      { id: "D", text: "$15.25$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The outputs rise $8$ for every $2$ in $x$, so $f(x) = 4x + 5$; setting $4x + 5 = 61$ gives $x = 14$.\n\n**The Full Solution:**\nStep 1: Two rows give the slope: $\\frac{17 - 9}{3 - 1} = \\frac{8}{2} = 4$.\nStep 2: Find the constant from $(1, 9)$: $9 = 4(1) + b$, so $b = 5$ and $f(x) = 4x + 5$.\nStep 3: Solve $4x + 5 = 61$: $4x = 56$, so $x = 14$. Check: $f(7) = 4(7) + 5 = 33$ matches the last row, and $f(14) = 56 + 5 = 61$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): reports the last input in the table instead of extending the pattern.\n* Choice B ($9$): adds one more step of $2$, but $f(9) = 41$, still short of $61$.\n* Choice D ($15.25$): solves $4x = 61$, dropping the constant $5$.\n\n**Test Day Takeaway:** Build the linear rule from the table before extending it; stepping row by row is slower and easy to stop at the wrong place.",
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
    question: "$f(x) = ax + 30$\nIn the given equation, $a$ is a constant, and $f(5) = 10$. For what value of $x$ does $f(x) = -26$?",
    choices: [
      // distractor: solves 5a + 30 = 10 with a sign error, using a = 4
      { id: "A", text: "$-14$" },
      // distractor: moves the 30 to the right side without changing its sign, solving -4x = -26 + 30
      { id: "B", text: "$-1$" },
      // distractor: drops the constant 30, solving -4x = -26
      { id: "C", text: "$6.5$" },
      { id: "D", text: "$14$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** $5a + 30 = 10$ gives $a = -4$; then $-4x + 30 = -26$ gives $-4x = -56$ and $x = 14$.\n\n**The Full Solution:**\nStep 1: Use $f(5) = 10$: $5a + 30 = 10$, so $5a = -20$ and $a = -4$. The function is $f(x) = -4x + 30$.\nStep 2: Set the output to $-26$: $-4x + 30 = -26$, so $-4x = -56$.\nStep 3: Divide by $-4$: $x = 14$. Check: $f(14) = -56 + 30 = -26$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: ($-14$): takes $a = 4$ instead of $-4$, then solves $4x + 30 = -26$.\n* Choice B: ($-1$): moves the $30$ to the right side without changing its sign, solving $-4x = -26 + 30 = 4$.\n* Choice C: ($6.5$): drops the constant $30$ and solves $-4x = -26$.\n\n**Test Day Takeaway:** Use the given point to find the missing constant first; only then solve for the input that gives the new output.",
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
    question: "The graph of the linear function $f$ is shown in the $xy$-plane. If $f(a) + f(a + 1) = 10$, what is the value of $a$?",
    diagram: { type: "linearGraph", params: { slope: 2, yIntercept: -8, xRange: [-2, 10], yRange: [-10, 12], xTickInterval: 2, yTickInterval: 4, gridInterval: 2, showPoints: [[0, -8], [4, 0]] } },
    correctAnswer: "6",
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~45s):** From the graph $f(x) = 2x - 8$, so $f(a) + f(a + 1) = 4a - 14$; setting that equal to $10$ gives $a = 6$.\n\n**The Full Solution:**\nStep 1: The line passes through $(0, -8)$ and $(4, 0)$, so its slope is $2$ and $f(x) = 2x - 8$.\nStep 2: Then $f(a) = 2a - 8$ and $f(a + 1) = 2(a + 1) - 8 = 2a - 6$, so the sum is $4a - 14$.\nStep 3: Solve $4a - 14 = 10$: $4a = 24$, so $a = 6$. Check: $f(6) = 4$ and $f(7) = 6$, and $4 + 6 = 10$ ✓\n\n**Common Mistakes:** Reading $f(a) + f(a + 1)$ as $f(2a + 1)$ gives $4a - 6 = 10$ and $a = 4$. Writing $f(a + 1)$ as $2a - 8$, without the extra slope step, gives $4a - 16 = 10$ and $a = 6.5$. Solving $2a - 8 = 10$ for one term only gives $a = 9$.\n\n**Test Day Takeaway:** Get the function's rule from the graph first; then a sum of two outputs is ordinary algebra in one unknown.",
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
    question: "A music school charges a \\$35 registration fee plus \\$20 for each lesson. Which equation represents the total cost $C$, in dollars, for $n$ lessons?",
    choices: [
      // distractor: swaps the roles of the two amounts, charging the registration fee for each lesson
      { id: "A", text: "$C = 35n + 20$" },
      { id: "B", text: "$C = 20n + 35$" },
      // distractor: adds the fee to the lesson price and charges the sum for every lesson
      { id: "C", text: "$C = 55n$" },
      // distractor: multiplies the registration fee by the lesson price as well
      { id: "D", text: "$C = 20(n + 35)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The cost is $20$ dollars per lesson times $n$, plus the one-time $35$: $C = 20n + 35$.\n\n**The Full Solution:**\nStep 1: The lesson charge grows with the number of lessons: $20n$ dollars for $n$ lessons.\nStep 2: The registration fee is paid once: $35$ dollars, added a single time.\nStep 3: Total: $C = 20n + 35$. Check with $n = 2$: $35 + 20 + 20 = 75$ and $20(2) + 35 = 75$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: ($C = 35n + 20$): swaps the two amounts, as if the $\\$35$ were charged for each lesson.\n* Choice C: ($C = 55n$): adds the fee to the lesson price and charges $\\$55$ for every lesson.\n* Choice D: ($C = 20(n + 35)$): multiplies the registration fee by $20$ along with the lessons, giving $20n + 700$.\n\n**Test Day Takeaway:** In a cost equation, the per-unit amount multiplies the variable and the one-time fee is added once.",
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
    question: "Renting a moving truck costs \\$90 plus \\$45 for each hour the truck is used. What is the total cost, in dollars, of renting the truck for $6$ hours?",
    correctAnswer: "360",
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**The correct answer is $360$.**\n\n**The Fast Way (~15s):** $90 + 45(6) = 90 + 270 = 360$.\n\n**The Full Solution:**\nStep 1: The hourly charge for $6$ hours is $45(6) = 270$ dollars.\nStep 2: The flat charge of $90$ dollars is added once.\nStep 3: Total: $90 + 270 = 360$. Check: $360 - 90 = 270$, and $270 \\div 45 = 6$ hours ✓\n\n**Common Mistakes:** Leaving out the flat \\$90 gives $270$. Adding the two amounts before multiplying, $(90 + 45)(6)$, gives $810$.\n\n**Test Day Takeaway:** Multiply the hourly rate by the number of hours, then add the flat amount once.",
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
    question: "The table shows the total cost, in dollars, of renting a kayak for $1$, $2$, and $3$ hours. The total cost is a fixed fee plus a constant hourly rate. If a rental cost \\$62, for how many hours was the kayak rented?",
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
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Each extra hour adds $\\$8$ ($22 \\to 30 \\to 38$), so the fixed fee is $22 - 8 = 14$. Then $14 + 8h = 62$ gives $8h = 48$ and $h = 6$.\n\n**The Full Solution:**\nStep 1: The hourly rate is the change in cost per hour: $30 - 22 = 8$ and $38 - 30 = 8$, so the rate is $\\$8$ per hour.\nStep 2: The fixed fee is what remains after removing one hour's charge from the $1$-hour cost: $22 - 8 = 14$. The model is $C = 14 + 8h$.\nStep 3: Solve $14 + 8h = 62$: $8h = 48$, so $h = 6$. Check: $14 + 8(6) = 14 + 48 = 62$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): treats the $2$-hour total $\\$30$ as the fixed fee and computes $(62 - 30) \\div 8$.\n* Choice B ($5$): treats the $1$-hour total $\\$22$ as the fixed fee; the fee is the cost at zero hours, which is $\\$14$.\n* Choice D ($8$): divides $62$ by $8$ to get $7.75$ and rounds up, ignoring the fixed fee entirely.\n\n**Test Day Takeaway:** In a cost table, the fixed fee is the value at zero units, one step below the first row, not the first row itself.",
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
    question: "A tutoring center charges \\$45 for the first hour of a session and \\$30 for each additional hour. A session cost \\$165. How many hours long was the session?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~25s):** After the first hour, $165 - 45 = 120$ dollars remain, which is $120 \\div 30 = 4$ additional hours, so the session lasted $5$ hours.\n\n**The Full Solution:**\nStep 1: Let $h$ be the number of hours. The first hour costs $45$ dollars and the other $h - 1$ hours cost $30$ dollars each: $45 + 30(h - 1) = 165$.\nStep 2: Subtract $45$: $30(h - 1) = 120$, so $h - 1 = 4$.\nStep 3: Add $1$: $h = 5$. Check: $45 + 30(4) = 45 + 120 = 165$ ✓\n\n**Common Mistakes:** Writing $45 + 30h = 165$ treats every hour as additional and gives $4$, the number of additional hours. Dividing $165$ by $30$ ignores the higher first-hour charge and gives $5.5$.\n\n**Test Day Takeaway:** When the first unit is priced differently, the per-unit rate applies to one fewer unit than the total.",
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
    question: "The table shows the fare $F$, in dollars, for a shuttle ride of $n$ miles. The fare is a fixed charge plus a constant charge per mile. Which equation represents this relationship?",
    diagram: { type: "dataTable", params: { headers: ["Distance (miles)", "Fare (dollars)"], rows: [["2", "9.50"], ["5", "17.00"], ["8", "24.50"]] } },
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
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Rate: $\\dfrac{17.00 - 9.50}{5 - 2} = \\dfrac{7.50}{3} = 2.50$ per mile. Fixed charge: $9.50 - 2(2.50) = 4.50$. So $F = 2.50n + 4.50$.\n\n**The Full Solution:**\nStep 1: The per-mile charge is the slope. From $2$ to $5$ miles the fare rises $7.50$, so the rate is $7.50 \\div 3 = 2.50$ dollars per mile. The $5 \\to 8$ rows agree: $24.50 - 17.00 = 7.50$.\nStep 2: The fixed charge is the fare at $0$ miles: $9.50-2(2.50)=4.50$.\nStep 3: Assemble the equation: $F = 2.50n + 4.50$.\nCheck: $n = 8$ gives $2.50(8) + 4.50 = 24.50$, matching the table. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($F = 2.50n + 9.50$): uses the $2$-mile fare as the fixed charge; the intercept is the fare at zero miles, not at the first row.\n* Choice C ($F = 4.50n + 2.50$): finds both numbers but swaps them, charging $\\$4.50$ per mile.\n* Choice D ($F = 4.75n$): divides $9.50$ by $2$ and assumes the fare is proportional; the table's rows are not multiples of one another.\n\n**Test Day Takeaway:** Build a linear cost equation from a table in two moves: slope from two rows, then intercept by backing the slope out of one row.",
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
    question: "A climbing gym charges a one-time fee of $\\$100$ plus $\\$50$ per class. The total amount Jordan paid for $n$ classes was $\\$250$ more than the total amount Sam paid for $8$ classes. What is the value of $n$?",
    choices: [
      // distractor: divides the difference 250 by 50 and stops, ignoring Sam's 8 classes
      { id: "A", text: "$5$" },
      // distractor: includes the one-time fee for Jordan but not for Sam: 100 + 50n = 400 + 250
      { id: "B", text: "$11$" },
      { id: "C", text: "$13$" },
      // distractor: includes the one-time fee for Sam but not for Jordan: 50n = 100 + 400 + 250
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Both totals include the same $\\$100$ fee, so Jordan's classes cost $\\$250$ more than Sam's: $50n = 400 + 250$, and $n = 13$.\n\n**The Full Solution:**\nStep 1: Write each total: Jordan paid $100 + 50n$ dollars and Sam paid $100 + 50(8) = 500$ dollars.\nStep 2: Jordan paid $\\$250$ more: $100 + 50n = 500 + 250 = 750$.\nStep 3: Solve: $50n = 650$, so $n = 13$. Check: $100 + 50(13) = 750$, which is $250$ more than $500$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): divides the difference, $250 \\div 50$, which is how many more classes Jordan took, not how many Jordan took.\n* Choice B ($11$): includes the one-time fee in Jordan's total but leaves it out of Sam's: $100 + 50n = 400 + 250$.\n* Choice D ($15$): includes the one-time fee in Sam's total but leaves it out of Jordan's: $50n = 750$.\n\n**Test Day Takeaway:** Write a full expression for each total before comparing them; a charge that appears in both totals cancels.",
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
    question: "An engraver charges a fixed fee plus a constant amount per trophy. An order of $18$ trophies costs $\\$386$, and an order of $30$ trophies costs $\\$590$. What is the cost, in dollars, of an order of $1$ trophy?",
    correctAnswer: "97",
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**The correct answer is $97$.**\n\n**The Fast Way (~35s):** Twelve more trophies cost $590 - 386 = 204$ more dollars, so each trophy costs $204 \\div 12 = 17$. The fixed fee is $386 - 18(17) = 80$, and one trophy costs $80 + 17 = 97$.\n\n**The Full Solution:**\nStep 1: Let an order of $n$ trophies cost $an + b$ dollars, where $a$ is the cost per trophy and $b$ is the fixed fee. Then $18a + b = 386$ and $30a + b = 590$.\nStep 2: Subtract the first equation from the second: $12a = 204$, so $a = 17$. Then $b = 386 - 18(17) = 386 - 306 = 80$.\nStep 3: An order of $1$ trophy costs $17(1) + 80 = 97$ dollars. Check: $17(30) + 80 = 510 + 80 = 590$ ✓\n\n**Common Mistakes:** Reporting the fixed fee, $80$, or the cost per trophy, $17$, instead of their sum; or dividing $386$ by $18$ (about $21.44$) as if the cost were proportional to the number of trophies.\n\n**Test Day Takeaway:** Subtracting the two orders cancels the fixed fee and leaves the per-item cost; an order of one item still pays the whole fixed fee.",
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
    question: "A greenhouse has $132$ seedlings: tomato, pepper, and cucumber. There are twice as many pepper seedlings as tomato seedlings and $12$ more cucumber seedlings than tomato seedlings. How many pepper seedlings are there?",
    choices: [
      // distractor: reports the number of tomato seedlings, t = 30
      { id: "A", text: "$30$" },
      // distractor: reports the number of cucumber seedlings, 30 + 12 = 42
      { id: "B", text: "$42$" },
      { id: "C", text: "$60$" },
      // distractor: drops the 12 extra cucumber seedlings: 4t = 132 gives t = 33 and 2t = 66
      { id: "D", text: "$66$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** With $t$ tomato seedlings, the total is $t + 2t + (t + 12) = 132$, so $4t = 120$, $t = 30$, and there are $2(30) = 60$ pepper seedlings.\n\n**The Full Solution:**\nStep 1: Let $t$ be the number of tomato seedlings. Then there are $2t$ pepper seedlings and $t + 12$ cucumber seedlings.\nStep 2: The three counts add to $132$: $t + 2t + t + 12 = 132$, so $4t + 12 = 132$ and $4t = 120$.\nStep 3: $t = 30$, so there are $2t = 60$ pepper seedlings. Check: $30 + 60 + 42 = 132$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($30$): solves for $t$ correctly but reports the tomato seedlings.\n* Choice B ($42$): reports the cucumber seedlings, $30 + 12$.\n* Choice D ($66$): leaves out the $12$, solving $4t = 132$ to get $t = 33$ and then doubling.\n\n**Test Day Takeaway:** Write every group in terms of one variable, solve, and then reread the question; the variable is often not the quantity asked for.",
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
    question: "A warehouse shipped $285$ small, medium, and large boxes. It shipped $4$ times as many medium boxes as small boxes and $15$ fewer large boxes than small boxes. How many large boxes did it ship?",
    correctAnswer: "35",
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**The correct answer is $35$.**\n\n**The Fast Way (~25s):** With $s$ small boxes, $s + 4s + (s - 15) = 285$, so $6s = 300$ and $s = 50$. The warehouse shipped $50 - 15 = 35$ large boxes.\n\n**The Full Solution:**\nStep 1: Let $s$ be the number of small boxes. Then $4s$ medium boxes and $s - 15$ large boxes were shipped.\nStep 2: The three counts add to $285$: $s + 4s + s - 15 = 285$, so $6s - 15 = 285$ and $6s = 300$.\nStep 3: $s = 50$, so the number of large boxes is $50 - 15 = 35$. Check: $50 + 200 + 35 = 285$ ✓\n\n**Common Mistakes:** Reporting $50$, the number of small boxes; subtracting $15$ from $285$ instead of adding it, which gives $6s = 270$, $s = 45$, and $30$ large boxes; or reporting $200$, the number of medium boxes.\n\n**Test Day Takeaway:** \"Fewer than\" subtracts inside the expression for that group; moving it across the equal sign turns it into an addition.",
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
    question: "A ferry carried $90$ cars, bicycles, and vans. There were $5$ times as many bicycles as cars and $8$ fewer vans than cars. How many vans did the ferry carry?",
    choices: [
      { id: "A", text: "$6$" },
      // distractor: reports the number of cars, c = 14
      { id: "B", text: "$14$" },
      // distractor: finds c = 14 but adds 8 instead of subtracting it for the vans
      { id: "C", text: "$22$" },
      // distractor: reports the number of bicycles, 5(14) = 70
      { id: "D", text: "$70$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** With $c$ cars, $c + 5c + (c - 8) = 90$, so $7c = 98$ and $c = 14$. The ferry carried $14 - 8 = 6$ vans.\n\n**The Full Solution:**\nStep 1: Let $c$ be the number of cars. Then there were $5c$ bicycles and $c - 8$ vans.\nStep 2: The total is $90$: $c + 5c + c - 8 = 90$, so $7c - 8 = 90$ and $7c = 98$.\nStep 3: $c = 14$, so the number of vans is $14 - 8 = 6$. Check: $14 + 70 + 6 = 90$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($14$): solves for $c$ and stops; $14$ is the number of cars.\n* Choice C ($22$): finds $c = 14$ but adds $8$ for the vans instead of subtracting it.\n* Choice D ($70$): reports the number of bicycles, $5(14)$.\n\n**Test Day Takeaway:** After solving for the variable, translate back to the group the question names; here that is one more subtraction.",
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
    question: "Three numbers have a sum of $152$. The second number is $3$ times the first number, $x$, and the third number is $8$ less than $x$. What is the value of $x$?",
    correctAnswer: "32",
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**The correct answer is $32$.**\n\n**The Fast Way (~20s):** The sum is $x + 3x + (x - 8) = 5x - 8 = 152$, so $5x = 160$ and $x = 32$.\n\n**The Full Solution:**\nStep 1: The three numbers are $x$, $3x$, and $x - 8$.\nStep 2: Their sum is $152$: $x + 3x + x - 8 = 152$, so $5x - 8 = 152$.\nStep 3: Add $8$ to each side and divide by $5$: $5x = 160$, so $x = 32$. Check: $32 + 96 + 24 = 152$ ✓\n\n**Common Mistakes:** Subtracting $8$ from $152$ instead of adding it, which gives $5x = 144$ and $x = 28.8$; counting only $4x$ by forgetting the third number contains $x$, which gives $x = 40$; or reporting $96$, the second number.\n\n**Test Day Takeaway:** \"$8$ less than $x$\" is $x - 8$; collect all the $x$ terms first, then undo the constant.",
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
    question: "A library has $900$ books, magazines, and DVDs. The number of magazines is one-fourth the number of books, and there are $60$ more DVDs than magazines. How many DVDs does the library have?",
    choices: [
      // distractor: reports the number of magazines, 560/4 = 140
      { id: "A", text: "$140$" },
      // distractor: drops the 60 extra DVDs: 1.5b = 900 gives b = 600 and 150 DVDs
      { id: "B", text: "$150$" },
      { id: "C", text: "$200$" },
      // distractor: reports the number of books, b = 560
      { id: "D", text: "$560$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** With $b$ books, there are $\\frac{b}{4}$ magazines and $\\frac{b}{4} + 60$ DVDs, so $\\frac{3b}{2} + 60 = 900$, $b = 560$, and the library has $140 + 60 = 200$ DVDs.\n\n**The Full Solution:**\nStep 1: Let $b$ be the number of books. Then there are $\\frac{b}{4}$ magazines and $\\frac{b}{4} + 60$ DVDs.\nStep 2: The total is $900$: $b + \\frac{b}{4} + \\frac{b}{4} + 60 = 900$, so $\\frac{3}{2}b = 840$ and $b = 560$.\nStep 3: There are $\\frac{560}{4} = 140$ magazines, so there are $140 + 60 = 200$ DVDs. Check: $560 + 140 + 200 = 900$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($140$): reports the number of magazines.\n* Choice B ($150$): leaves out the $60$, solving $\\frac{3}{2}b = 900$ to get $b = 600$ and $150$ DVDs.\n* Choice D ($560$): reports the number of books, the variable solved for.\n\n**Test Day Takeaway:** When one group is defined through another (\"$60$ more than the magazines\"), build it from that group's expression, not from the variable directly.",
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
    question: "A stadium sold $1{,}500$ premium, standard, and discount tickets. It sold $5$ times as many standard tickets as premium tickets and $40$ fewer discount tickets than standard tickets. How many discount tickets did it sell?",
    choices: [
      // distractor: reports the number of premium tickets, p = 140
      { id: "A", text: "$140$" },
      // distractor: makes the discount tickets 40 fewer than the premium tickets: 7p - 40 = 1500 gives p = 220 and 180 discount tickets
      { id: "B", text: "$180$" },
      { id: "C", text: "$660$" },
      // distractor: reports the number of standard tickets, 5(140) = 700
      { id: "D", text: "$700$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** With $p$ premium tickets, standard is $5p$ and discount is $5p - 40$, so $11p - 40 = 1{,}500$, $p = 140$, and discount is $700 - 40 = 660$.\n\n**The Full Solution:**\nStep 1: Let $p$ be the number of premium tickets. Then $5p$ standard tickets were sold, and the discount tickets, $40$ fewer than the standard tickets, number $5p - 40$.\nStep 2: The total is $1{,}500$: $p + 5p + (5p - 40) = 1{,}500$, so $11p = 1{,}540$ and $p = 140$.\nStep 3: The stadium sold $5(140) - 40 = 660$ discount tickets. Check: $140 + 700 + 660 = 1{,}500$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($140$): reports $p$, the number of premium tickets.\n* Choice B ($180$): compares the discount tickets with the premium tickets instead of the standard tickets, giving $7p - 40 = 1{,}500$, $p = 220$, and $220 - 40 = 180$.\n* Choice D ($700$): reports the number of standard tickets.\n\n**Test Day Takeaway:** Check which group each comparison refers to; \"$40$ fewer than standard\" is built from $5p$, not from $p$.",
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
    question: "A marching band's $128$ members play woodwind, brass, or percussion. There are $3$ times as many brass players as woodwind players and $12$ fewer percussion players than brass players. How many percussion players are there?",
    correctAnswer: "48",
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**The correct answer is $48$.**\n\n**The Fast Way (~30s):** With $w$ woodwind players, brass is $3w$ and percussion is $3w - 12$, so $7w - 12 = 128$, $w = 20$, and percussion is $60 - 12 = 48$.\n\n**The Full Solution:**\nStep 1: Let $w$ be the number of woodwind players. Then there are $3w$ brass players and $3w - 12$ percussion players.\nStep 2: The total is $128$: $w + 3w + (3w - 12) = 128$, so $7w = 140$ and $w = 20$.\nStep 3: The number of percussion players is $3(20) - 12 = 48$. Check: $20 + 60 + 48 = 128$ ✓\n\n**Common Mistakes:** Making percussion $12$ fewer than woodwind, which gives $5w - 12 = 128$, $w = 28$, and $16$; reporting $w = 20$ or the $60$ brass players; or adding the $12$, which gives $7w + 12 = 128$ and a non-whole number of players.\n\n**Test Day Takeaway:** A group compared with another group (percussion with brass) is built from that group's expression, $3w$, before the equation is written.",
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
    question: "The table shows Priya's hourly wage for each of two shifts at her job. Last month she worked $34$ hours on these shifts, $w$ of them on the weekday shift, and earned $\\$526$. What is the value of $w$?",
    diagram: { type: "dataTable", params: { headers: ["Shift", "Hourly wage (dollars)"], rows: [["Weekday", "13"], ["Weekend", "19"]] } },
    choices: [
      // distractor: reported the weekend hours instead of the weekday hours
      { id: "A", text: "$14$" },
      // distractor: assumed the 34 hours were split evenly
      { id: "B", text: "$17$" },
      { id: "C", text: "$20$" },
      // distractor: divided 526 by 13 (about 40.5) and rounded, as if every hour paid the weekday wage
      { id: "D", text: "$40$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** If all $34$ hours were weekend hours she would earn $19(34) = 646$. Each hour moved to the weekday shift lowers that by $6$; the actual shortfall is $646 - 526 = 120$, so $120 \\div 6 = 20$ weekday hours.\n\n**The Full Solution:**\nStep 1: The weekday hours are $w$; then the weekend hours are $34 - w$.\nStep 2: Earnings: $13w + 19(34 - w) = 526$. Distribute: $13w + 646 - 19w = 526$, so $-6w = -120$.\nStep 3: Divide by $-6$: $w = 20$. Check: $13(20) + 19(14) = 260 + 266 = 526$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): solves correctly but reports $34 - w$, the WEEKEND hours.\n* Choice B ($17$): splits the $34$ hours in half; that would earn $13(17) + 19(17) = 544$, not $526$.\n* Choice D ($40$): divides $526$ by $13$, about $40.5$, as if every hour paid the weekday wage; that even exceeds the $34$ hours worked.\n\n**Test Day Takeaway:** With two rates and a fixed total count, write the second quantity as (total minus the first) so there is only one unknown.",
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
    question: "The total amount paid to rent a storage locker is a one-time deposit plus a constant monthly rate. The table shows the total amount $f(m)$, in dollars, paid for $m$ months. Which equation defines $f$?",
    diagram: { type: "dataTable", params: { headers: ["m", "f(m)"], rows: [["1", "65"], ["2", "100"], ["3", "135"]] } },
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
    question: "A courier charges a $\\$6$ pickup fee plus $\\$1.20$ per pound for a package, and an extra $\\$0.30$ per pound for rural delivery. The function $f$ gives the charge, in dollars, for the rural delivery of a $p$-pound package. Which equation defines $f$?",
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
    explanation: "**SAT Pattern: Linear Cost Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Both per-pound charges combine: $1.20+0.30=1.50$ per pound. The flat fee stays $6$. So $f(p) = 1.50p + 6$.\n\n**The Full Solution:**\nStep 1: Identify what scales with weight: the base $\\$1.20$ per pound and the rural $\\$0.30$ per pound. Together they are $1.50p$.\nStep 2: Identify what is paid once: the $\\$6$ pickup fee.\nStep 3: Add: $f(p) = 1.50p + 6$.\nCheck: a $10$-pound rural package costs $6 + 12 + 3 = 21$, and $1.50(10) + 6 = 21$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(p) = 1.20p + 6$): is the non-rural charge; it drops the surcharge.\n* Choice B ($f(p) = 1.20p + 6.30$): adds the $\\$0.30$ to the flat fee, charging the surcharge once instead of per pound.\n* Choice D ($f(p) = 1.50p + 6.30$): applies the surcharge per pound AND again as a flat amount.\n\n**Test Day Takeaway:** Sort every charge by its unit before writing the function: \"per pound\" amounts add into the coefficient, one-time amounts add into the constant.",
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
    question: "A utility charges $\\$0.11$ per kilowatt-hour for the first $500$ kilowatt-hours used in a month and $\\$r$ per kilowatt-hour after that. The function $C$ gives the monthly charge, in dollars, for $k$ kilowatt-hours, where $k > 500$. Which equation defines $C$?",
    choices: [
      // distractor: omits the 55-dollar charge for the first 500 kilowatt-hours
      { id: "A", text: "$C(k)=r(k-500)$" },
      // distractor: applies the rate r to all k kilowatt-hours and still adds the full 55 dollars, double-charging the first 500
      { id: "B", text: "$C(k)=rk+55$" },
      // distractor: charges 0.11 dollar on every kilowatt-hour instead of only on the first 500
      { id: "C", text: "$C(k)=0.11k+r(k-500)$" },
      { id: "D", text: "$C(k)=rk+55-500r$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Linear Cost Model**\n\n**Choice D is correct.** The first $500$ kilowatt-hours cost $0.11(500)=\\$55$, and the remaining $k-500$ cost $r$ each, so $C(k)=55+r(k-500)=rk+55-500r$.\n\n**The Fast Way (~45s):** Fixed first tier $\\$55$, then $r$ per kilowatt-hour beyond $500$: $55+r(k-500)$, which expands to $rk+55-500r$.\n\n**The Full Solution:**\n\nStep 1: The first tier is a fixed amount because $k>500$: $0.11(500)=55$ dollars.\n\nStep 2: The kilowatt-hours billed at rate $r$ are the ones past the first $500$, namely $k-500$, contributing $r(k-500)$ dollars.\n\nStep 3: Add the two tiers: $C(k)=55+r(k-500)$. Expanding gives $C(k)=rk+55-500r$. Check: at $k=500$ this returns $500r+55-500r=55$, the first-tier charge exactly.\n\n**Why the wrong answers are tempting:**\n\n* Choice A: bills only the overage and drops the $\\$55$ every month already includes.\n* Choice B: charges $r$ on all $k$ kilowatt-hours and still adds $\\$55$, billing the first $500$ twice.\n* Choice C: applies $\\$0.11$ to every kilowatt-hour rather than only to the first $500$.\n\n**Test Day Takeaway:** In a two-tier model the second rate applies only to the excess, so subtract the tier boundary from the input before multiplying.",
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
    question: "The total cost $C(n)$, in dollars, of ordering $n$ boxes of printer paper from a supplier is a linear function of $n$. The table shows three values of $n$ and their corresponding values of $C(n)$. What is the value of $C(20)$?",
    diagram: { type: "dataTable", params: { headers: ["n", "C(n)"], rows: [["4", "118"], ["7", "178"], ["11", "258"]] } },
    choices: [
      // distractor: uses only the per-box cost: 20(20) = 400, dropping the fixed 38
      { id: "A", text: "$400$" },
      { id: "B", text: "$438$" },
      // distractor: assumes the cost is proportional to the first row, 118/4 = 29.5 per box, so 29.5(20) = 590
      { id: "C", text: "$590$" },
      // distractor: swaps the slope and the intercept: 38(20) + 20 = 780
      { id: "D", text: "$780$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Linear Cost Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** From $n = 4$ to $n = 7$ the cost rises $60$, so each box adds $20$. Then $C(n) = 20n + 38$ (since $118 - 80 = 38$), and $C(20) = 400 + 38 = 438$.\n\n**The Full Solution:**\nStep 1: The slope is $\\frac{178 - 118}{7 - 4} = \\frac{60}{3} = 20$; the rows $n = 7$ and $n = 11$ agree: $\\frac{258 - 178}{4} = 20$.\nStep 2: The intercept is $118 - 20(4) = 38$, so $C(n) = 20n + 38$.\nStep 3: $C(20) = 20(20) + 38 = 438$. Check: $C(11) = 220 + 38 = 258$, matching the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($400$): multiplies $20$ boxes by the $\\$20$ rate and drops the fixed $\\$38$.\n* Choice C ($590$): treats the cost as proportional, using $118 \\div 4 = 29.5$ dollars per box.\n* Choice D ($780$): swaps the slope and the intercept, computing $38(20) + 20$.\n\n**Test Day Takeaway:** Build the function from two rows before evaluating it; a single row's total divided by its count is not the rate unless the intercept is $0$.",
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
    question: "A restaurant paid $\\$6{,}300$ for a freezer and $\\$420$ to install it. The freezer saves the restaurant $\\$525$ per month. Which equation represents this situation, where $f(m)$ is the amount, in dollars, of the total cost not yet recovered after $m$ months?",
    choices: [
      // distractor: subtracts in the wrong order, giving savings minus cost (negative until the cost is recovered)
      { id: "A", text: "$f(m) = 525m - 6{,}720$" },
      // distractor: subtracts the installation fee from the price instead of adding it: 6,300 - 420 = 5,880
      { id: "B", text: "$f(m) = 5{,}880 - 525m$" },
      // distractor: leaves out the 420-dollar installation fee
      { id: "C", text: "$f(m) = 6{,}300 - 525m$" },
      { id: "D", text: "$f(m) = 6{,}720 - 525m$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Linear Cost Model**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The total cost is $6{,}300 + 420 = 6{,}720$ dollars, and each month recovers $525$ of it, so $f(m) = 6{,}720 - 525m$.\n\n**The Full Solution:**\nStep 1: The amount to recover at $m = 0$ is the price plus the installation fee: $6{,}300 + 420 = 6{,}720$.\nStep 2: Each month the savings recover $\\$525$, so after $m$ months $525m$ has been recovered.\nStep 3: The amount not yet recovered is $f(m) = 6{,}720 - 525m$. Check: after $12$ months, $6{,}720 - 6{,}300 = 420$, the installation fee still to recover ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(m) = 525m - 6{,}720$): reverses the subtraction, so the amount still owed would be negative at the start.\n* Choice B ($f(m) = 5{,}880 - 525m$): subtracts the $\\$420$ fee from the price instead of adding it.\n* Choice C ($f(m) = 6{,}300 - 525m$): leaves out the installation fee, which is also part of the cost.\n\n**Test Day Takeaway:** The starting value is everything paid up front; the rate is what each month takes away from it.",
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
    question: "A robotics club is buying the two types of motors shown in the table. The club has $\\$1{,}260$ to spend and must buy at least $120$ motors to receive a team discount. What is the greatest number of high-torque motors the club can buy?",
    diagram: { type: "dataTable", params: { headers: ["Motor type", "Cost per motor (dollars)"], rows: [["Standard", "8"], ["High-torque", "15"]] } },
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
    question: "$45t + 28f \\le 1{,}800$\nThe given inequality represents the weight limit, in pounds, of an elevator carrying $t$ large crates and $f$ small crates. If $f = 20$, what is the greatest possible value of $t$?",
    correctAnswer: "27",
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**The correct answer is $27$.**\n\n**The Fast Way (~20s):** With $f = 20$, $45t \\le 1{,}800 - 560 = 1{,}240$, so $t \\le 27.56$. A number of crates is a whole number, so $t = 27$.\n\n**The Full Solution:**\nStep 1: Substitute $f = 20$: $45t + 28(20) \\le 1{,}800$, so $45t + 560 \\le 1{,}800$.\nStep 2: Subtract $560$ from each side: $45t \\le 1{,}240$, so $t \\le \\frac{1{,}240}{45} \\approx 27.56$.\nStep 3: $t$ counts crates, so the greatest possible value is $27$. Check: $45(27) + 560 = 1{,}775 \\le 1{,}800$, while $45(28) + 560 = 1{,}820 > 1{,}800$ ✓\n\n**Common Mistakes:** Rounding $27.56$ up to $28$, which breaks the inequality; ignoring the small crates and computing $1{,}800 \\div 45 = 40$; or multiplying $28$ by $f$ incorrectly before subtracting.\n\n**Test Day Takeaway:** When the variable counts objects, solve the inequality and then round down to the greatest whole number that still satisfies it.",
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
    question: "$3r + 9p \\le 960$\nThe given inequality represents a florist's budget for buying $r$ roses and $p$ peonies. If $r = 120$, what is the greatest possible value of $p$?",
    correctAnswer: "66",
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**The correct answer is $66$.**\n\n**The Fast Way (~20s):** With $r = 120$, $9p \\le 960 - 360 = 600$, so $p \\le 66.67$. The florist buys whole peonies, so $p = 66$.\n\n**The Full Solution:**\nStep 1: Substitute $r = 120$: $3(120) + 9p \\le 960$, so $360 + 9p \\le 960$.\nStep 2: Subtract $360$ from each side: $9p \\le 600$, so $p \\le \\frac{600}{9} \\approx 66.67$.\nStep 3: $p$ counts peonies, so the greatest possible value is $66$. Check: $360 + 9(66) = 954 \\le 960$, while $360 + 9(67) = 963 > 960$ ✓\n\n**Common Mistakes:** Rounding $66.67$ up to $67$, which exceeds the budget; ignoring the roses and computing $960 \\div 9 \\approx 106$; or dividing $960 - 120$ by $9$, subtracting the number of roses instead of their cost.\n\n**Test Day Takeaway:** Substitute the known count, isolate the other variable, and round down, since a budget can never be exceeded.",
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
    question: "A clinic is ordering the two types of thermometers shown in the table. The clinic has $\\$1{,}440$ to spend and must order at least $150$ thermometers to receive a discount. Which of the following is the maximum number of infrared thermometers the clinic can order?",
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
    question: "The table shows the price of each of two types of soccer balls. A youth league has $\\$2{,}250$ to spend on balls and must buy at least $250$ of them to get a bulk rate. Which of the following is the maximum number of match balls the league can buy?",
    diagram: { type: "dataTable", params: { headers: ["Ball type", "Price per ball (dollars)"], rows: [["Training", "7"], ["Match", "16"]] } },
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
    question: "A dental office is ordering toothbrush kits of the two types shown in the table. The office has $\\$690$ to spend and must order at least $90$ kits to qualify for free delivery. Which of the following is the maximum number of electric kits the office can order?",
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
    question: "A summer camp has $\\$1{,}640$ to spend on life jackets and must buy at least $160$ of them. The table shows the price of each type of life jacket. What is the greatest number of adult life jackets the camp can buy?",
    diagram: { type: "dataTable", params: { headers: ["Life jacket type", "Price each (dollars)"], rows: [["Youth", "8.50"], ["Adult", "16.00"]] } },
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
    question: "$7x - 4 \\le 31$\nWhich of the following is the solution set of the given inequality?",
    choices: [
      { id: "A", text: "$x \\le 5$" },
      // distractor: reverses the inequality sign, which is needed only when dividing by a negative number
      { id: "B", text: "$x \\ge 5$" },
      // distractor: divides only the 7x term by 7, getting x - 4 <= 31/7 and x <= 59/7
      { id: "C", text: "$x \\le \\frac{59}{7}$" },
      // distractor: adds 4 but never divides by 7
      { id: "D", text: "$x \\le 35$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Add $4$: $7x \\le 35$. Divide by $7$: $x \\le 5$.\n\n**The Full Solution:**\nStep 1: Add $4$ to each side: $7x - 4 + 4 \\le 31 + 4$, so $7x \\le 35$.\nStep 2: Divide each side by the positive number $7$, which keeps the direction of the inequality: $x \\le 5$.\nStep 3: The solution set is $x \\le 5$. Check: $x = 5$ gives $35 - 4 = 31 \\le 31$, and $x = 6$ gives $38 > 31$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($x \\ge 5$): flips the sign, which happens only when multiplying or dividing by a negative number.\n* Choice C ($x \\le \\frac{59}{7}$): divides only the $7x$ term by $7$, getting $x - 4 \\le \\frac{31}{7}$.\n* Choice D ($x \\le 35$): adds $4$ but never divides by $7$.\n\n**Test Day Takeaway:** Solve an inequality exactly like an equation, and reverse the sign only when you multiply or divide by a negative number.",
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
    question: "$-6x + 5 \\ge 47$\nWhich of the following describes all solutions to the given inequality?",
    choices: [
      // distractor: adds 5 instead of subtracting it: -6x >= 52 gives x <= -26/3
      { id: "A", text: "$x \\le -\\frac{26}{3}$" },
      { id: "B", text: "$x \\le -7$" },
      // distractor: divides by -6 without reversing the inequality sign
      { id: "C", text: "$x \\ge -7$" },
      // distractor: reverses the sign but drops the negative sign of the quotient, 42/(-6) = -7
      { id: "D", text: "$x \\le 7$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Subtract $5$: $-6x \\ge 42$. Divide by $-6$ and reverse the sign: $x \\le -7$.\n\n**The Full Solution:**\nStep 1: Subtract $5$ from each side: $-6x \\ge 42$.\nStep 2: Divide each side by $-6$. Dividing by a negative number reverses the inequality: $x \\le \\frac{42}{-6}$.\nStep 3: So $x \\le -7$. Check: $x = -7$ gives $42 + 5 = 47 \\ge 47$, and $x = 0$ gives $5$, which is not at least $47$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x \\le -\\frac{26}{3}$): adds $5$ to $47$ instead of subtracting it, giving $-6x \\ge 52$.\n* Choice C ($x \\ge -7$): divides by $-6$ but keeps the original direction of the sign.\n* Choice D ($x \\le 7$): reverses the sign but loses the negative in $\\frac{42}{-6}$.\n\n**Test Day Takeaway:** Dividing by a negative does two things at once: the quotient changes sign and the inequality reverses.",
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
    question: "$4(x - 5) < x + 13$\nWhich of the following describes all solutions to the given inequality?",
    choices: [
      // distractor: distributes only to x, writing 4x - 5 < x + 13, so 3x < 18
      { id: "A", text: "$x < 6$" },
      { id: "B", text: "$x < 11$" },
      // distractor: reverses the inequality sign after dividing by the positive number 3
      { id: "C", text: "$x > 11$" },
      // distractor: reaches 3x < 33 but never divides by 3
      { id: "D", text: "$x < 33$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Distribute: $4x - 20 < x + 13$. Collect terms: $3x < 33$, so $x < 11$.\n\n**The Full Solution:**\nStep 1: Distribute the $4$: $4x - 20 < x + 13$.\nStep 2: Subtract $x$ from each side and add $20$ to each side: $3x < 33$.\nStep 3: Divide by the positive number $3$: $x < 11$. Check: $x = 10$ gives $4(5) = 20 < 23$, and $x = 11$ gives $24 < 24$, which is false ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x < 6$): multiplies only the $x$ by $4$, writing $4x - 5 < x + 13$ and $3x < 18$.\n* Choice C ($x > 11$): reverses the sign even though $3$ is positive.\n* Choice D ($x < 33$): stops at $3x < 33$ without dividing by $3$.\n\n**Test Day Takeaway:** Distribute to every term in the parentheses, then solve; the sign reverses only for a negative multiplier or divisor.",
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
    question: "$5x + k > 38$\nIn the given inequality, $k$ is a constant. The solution set of the inequality is $x > 6$. What is the value of $k$?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~20s):** The boundary $x = 6$ makes the two sides equal: $5(6) + k = 38$, so $k = 8$.\n\n**The Full Solution:**\nStep 1: Solve for $x$: $5x > 38 - k$, so $x > \\frac{38 - k}{5}$.\nStep 2: This must be the same as $x > 6$, so $\\frac{38 - k}{5} = 6$.\nStep 3: Then $38 - k = 30$, so $k = 8$. Check: $5x + 8 > 38$ gives $5x > 30$, or $x > 6$ ✓\n\n**Common Mistakes:** Setting $5x + k = 38$ with $x = 7$, the least integer solution, which gives $k = 3$; computing $38 - 6 = 32$ without multiplying $6$ by $5$; or adding instead of subtracting, which gives $k = 68$.\n\n**Test Day Takeaway:** For a solution set like $x > 6$, the boundary value $6$ turns the inequality into an equation that you can solve for the constant.",
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
    question: "$46 - 7x \\leq 4$\nWhich of the following describes all solutions to the given inequality?",
    choices: [
      // distractor: divides -42 by positive 7 instead of -7 and keeps the direction, getting x <= -6
      { id: "A", text: "$x \\leq -6$" },
      // distractor: divides by -7 correctly but does not reverse the inequality symbol
      { id: "B", text: "$x \\leq 6$" },
      { id: "C", text: "$x \\geq 6$" },
      // distractor: stops at -7x <= -42 and reads off 42 without dividing by 7
      { id: "D", text: "$x \\geq 42$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Subtracting $46$ gives $-7x \\leq -42$, and dividing by $-7$ reverses the symbol: $x \\geq 6$.\n\n**The Full Solution:**\nStep 1: Subtract $46$ from both sides: $-7x \\leq 4 - 46$, or $-7x \\leq -42$.\nStep 2: Divide both sides by $-7$. Dividing by a negative number reverses the direction of the inequality.\nStep 3: $x \\geq \\frac{-42}{-7} = 6$. Check: $x = 7$ gives $46 - 49 = -3$, and $-3 \\leq 4$ is true, while $x = 5$ gives $46 - 35 = 11$, and $11 \\leq 4$ is false ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x \\leq -6$): divides $-42$ by $7$ instead of $-7$ and keeps the symbol. Testing $x = -6$ gives $46 + 42 = 88$, which is not at most $4$.\n* Choice B ($x \\leq 6$): gets the boundary right but forgets to reverse the symbol after dividing by $-7$.\n* Choice D ($x \\geq 42$): stops at $-7x \\leq -42$ and reports $42$ without dividing by the coefficient.\n\n**Test Day Takeaway:** Isolate the $x$-term first, then divide; the direction flips only at the step where you divide by a negative number.",
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
    question: "$3x + 2k \\geq 5k - 12$\nIn the given inequality, $k$ is a constant. Which inequality is equivalent to the given inequality?",
    choices: [
      // distractor: divides only the k-term by 3 and leaves the -12 undivided
      { id: "A", text: "$x \\geq k - 12$" },
      { id: "B", text: "$x \\geq k - 4$" },
      // distractor: reverses the inequality symbol even though it divides by positive 3
      { id: "C", text: "$x \\leq k - 4$" },
      // distractor: subtracts 2k correctly but never divides both sides by 3
      { id: "D", text: "$x \\geq 3k - 12$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Subtracting $2k$ gives $3x \\geq 3k - 12$, and dividing every term by $3$ gives $x \\geq k - 4$.\n\n**The Full Solution:**\nStep 1: Subtract $2k$ from both sides: $3x \\geq 5k - 2k - 12$, or $3x \\geq 3k - 12$.\nStep 2: Divide both sides by $3$. The divisor is positive, so the symbol stays $\\geq$, and both terms on the right are divided: $x \\geq \\frac{3k}{3} - \\frac{12}{3}$.\nStep 3: Simplify: $x \\geq k - 4$. Check with $k = 5$: the given inequality becomes $3x + 10 \\geq 13$, so $x \\geq 1$, and $k - 4 = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x \\geq k - 12$): divides $3k$ by $3$ but leaves $-12$ alone; every term on the right must be divided.\n* Choice C ($x \\leq k - 4$): reverses the symbol, which happens only when dividing or multiplying by a negative number.\n* Choice D ($x \\geq 3k - 12$): stops at $3x \\geq 3k - 12$ and treats it as a statement about $x$.\n\n**Test Day Takeaway:** With a constant in the inequality, solve exactly as you would with numbers: move the $k$-terms together, then divide every term by the coefficient of $x$.",
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
    question: "$7 - 2x > 4x - 30$\nIf $x$ is an integer that satisfies the given inequality, what is the greatest possible value of $2x + 5$?",
    choices: [
      // distractor: reports the greatest integer value of x instead of the value of 2x + 5
      { id: "A", text: "$6$" },
      // distractor: evaluates 2x at x = 6 but leaves off the + 5
      { id: "B", text: "$12$" },
      { id: "C", text: "$17$" },
      // distractor: rounds 37/6 up to 7 and evaluates 2(7) + 5, but x = 7 does not satisfy the strict inequality
      { id: "D", text: "$19$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Collecting terms gives $37 > 6x$, so $x < \\frac{37}{6} \\approx 6.17$; the greatest integer is $6$, and $2(6) + 5 = 17$.\n\n**The Full Solution:**\nStep 1: Add $2x$ and $30$ to both sides: $7 + 30 > 4x + 2x$, or $37 > 6x$.\nStep 2: Divide by $6$: $x < \\frac{37}{6} \\approx 6.17$. The greatest integer less than $6.17$ is $6$.\nStep 3: The expression $2x + 5$ increases as $x$ increases, so its greatest value comes at $x = 6$: $2(6) + 5 = 17$. Check: at $x = 6$, $7 - 12 = -5$ and $24 - 30 = -6$, and $-5 > -6$ is true; at $x = 7$, $-7 > -2$ is false ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): finds the greatest value of $x$ and stops before evaluating $2x + 5$.\n* Choice B ($12$): computes $2x$ at $x = 6$ but omits the $+ 5$.\n* Choice D ($19$): rounds $\\frac{37}{6}$ up to $7$. The inequality requires $x < 6.17$, so $x = 7$ is not allowed.\n\n**Test Day Takeaway:** After solving, round in the direction the inequality allows, then reread the question: the bound on $x$ is not always the quantity being asked for.",
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
    question: "$ax - 11 < 2x + 13$\nIn the given inequality, $a$ is a constant. The solution to the inequality is $x > -8$. What is the value of $a$?",
    correctAnswer: "-1",
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**The correct answer is -1.**\n\n**The Fast Way (~45s):** The inequality becomes $(a - 2)x < 24$; a solution of the form $x > -8$ means the symbol flipped, so $a - 2 = \\frac{24}{-8} = -3$ and $a = -1$.\n\n**The Full Solution:**\nStep 1: Collect the $x$-terms on the left and the constants on the right: $ax - 2x < 13 + 11$, or $(a - 2)x < 24$.\nStep 2: The solution $x > -8$ has the opposite symbol, so dividing by $a - 2$ reversed the direction. That happens only when $a - 2$ is negative, and then $x > \\frac{24}{a - 2}$.\nStep 3: Match the boundaries: $\\frac{24}{a - 2} = -8$, so $a - 2 = -3$ and $a = -1$. Check: $-x - 11 < 2x + 13$ gives $-3x < 24$, so $x > -8$ ✓\n\n**Common Mistakes:**\n* $5$: solves $\\frac{24}{a - 2} = 8$, dropping the negative sign on $-8$; with $a = 5$ the solution would be $x < 8$.\n* $-3$: reports the coefficient $a - 2$ instead of $a$.\n* $-5$: moves $2x$ to the left as $+2x$, solving $\\frac{24}{a + 2} = -8$.\n\n**Test Day Takeaway:** When the solution's symbol points the opposite way from the original inequality, the coefficient of $x$ must be negative; use that to find the constant.",
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
    question: "The shaded region shown represents the solutions to a system of two linear inequalities. Which ordered pair $(x, y)$ is a solution to the system?",
    diagram: { type: "twoLineGraph", params: { intersection: { x: 1, y: 4 }, slope1: 1, slope2: -2, shadeRegion: "below-both", showIntersection: false, xRange: [-6, 6], yRange: [-4, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1 } },
    choices: [
      // distractor: is below the falling line but above the rising line y = x + 3, where y = 1 at x = -2
      { id: "A", text: "$(-2, 4)$" },
      { id: "B", text: "$(2, 0)$" },
      // distractor: is below the falling line but above the rising line y = x + 3, where y = 3 at x = 0
      { id: "C", text: "$(0, 5)$" },
      // distractor: lies below the rising line but above the falling line, so it is outside the shaded region
      { id: "D", text: "$(3, 2)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Only $(2, 0)$ falls in the shaded region, which lies below both boundary lines.\n\n**The Full Solution:**\nStep 1: A point is a solution to the system only if it lies in the shaded region, which is on or below both lines. From the graph, the rising line is $y = x + 3$ and the falling line is $y = -2x + 6$; they meet at $(1, 4)$.\nStep 2: Test $(2, 0)$: the rising line is at $y = 5$ when $x = 2$ and the falling line is at $y = 2$, and $0$ is below both, so $(2, 0)$ is in the shaded region.\nStep 3: Check the others: $(-2, 4)$ is above the rising line, where $y = 1$; $(0, 5)$ is above the rising line, where $y = 3$; and $(3, 2)$ is above the falling line, where $y = 0$. Only $(2, 0)$ works ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-2, 4)$): is below the falling line, but at $x = -2$ the rising line is at $y = 1$, and $4$ is above it.\n* Choice C ($(0, 5)$): is below the falling line, but at $x = 0$ the rising line is at $y = 3$, and $5$ is above it.\n* Choice D ($(3, 2)$): is below the rising line, but at $x = 3$ the falling line is at $y = 0$, and $2$ is above it.\n\n**Test Day Takeaway:** A solution to a system of inequalities must satisfy every inequality; a point that is on the correct side of only one boundary is not in the shaded region.",
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
    question: "A school's supply order contains $p$ pencils and $e$ erasers. It has at least $30$ items in all and no more than $12$ erasers. Which of the following systems of inequalities represents this situation?",
    choices: [
      { id: "A", text: "$p + e \\geq 30$ and $e \\leq 12$" },
      // distractor: reads at least 30 as an upper bound, reversing the first inequality
      { id: "B", text: "$p + e \\leq 30$ and $e \\leq 12$" },
      // distractor: reads no more than 12 as a lower bound, reversing the second inequality
      { id: "C", text: "$p + e \\geq 30$ and $e \\geq 12$" },
      // distractor: reverses both inequalities
      { id: "D", text: "$p + e \\leq 30$ and $e \\geq 12$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** \"At least $30$\" items in all is $p + e \\geq 30$, and \"no more than $12$\" erasers is $e \\leq 12$.\n\n**The Full Solution:**\nStep 1: The total number of items in the order is $p + e$.\nStep 2: \"At least $30$\" means the total can be $30$ or more: $p + e \\geq 30$.\nStep 3: \"No more than $12$\" applies to the erasers alone and means $12$ or fewer: $e \\leq 12$. Check: an order of $25$ pencils and $8$ erasers has $33 \\geq 30$ items and $8 \\leq 12$ erasers, so it fits the situation and satisfies both inequalities ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: treats \"at least $30$\" as a ceiling, which would reject an order of $40$ items.\n* Choice C: treats \"no more than $12$\" as a floor, which would accept an order with $20$ erasers.\n* Choice D: reverses both phrases at once.\n\n**Test Day Takeaway:** \"At least\" means $\\geq$ and \"no more than\" means $\\leq$; attach each phrase to the exact quantity it describes.",
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
    question: "The shaded region shown represents the solutions to which of the following systems of inequalities?",
    diagram: { type: "twoLineGraph", params: { intersection: { x: 3, y: 3 }, slope1: 2, slope2: -1, xRange: [-1, 7], yRange: [-6, 12], shadeRegion: "below-both", showIntersection: false, xTickInterval: 2, yTickInterval: 2, gridInterval: 1 } },
    choices: [
      { id: "A", text: "$y \\leq 2x - 3$ and $y \\leq -x + 6$" },
      // distractor: uses the wrong side of the rising line; the shading is below it, not above it
      { id: "B", text: "$y \\geq 2x - 3$ and $y \\leq -x + 6$" },
      // distractor: uses the wrong side of the falling line; the shading is below it, not above it
      { id: "C", text: "$y \\leq 2x - 3$ and $y \\geq -x + 6$" },
      // distractor: reads both slopes with the wrong sign, swapping the rising and falling lines
      { id: "D", text: "$y \\leq -2x - 3$ and $y \\leq x + 6$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** The boundaries are $y = 2x - 3$ (rising) and $y = -x + 6$ (falling), and the shading lies below both, so both symbols are $\\leq$.\n\n**The Full Solution:**\nStep 1: Read the rising line: it crosses the $y$-axis at $-3$ and passes through $(3, 3)$, so its slope is $\\frac{3 - (-3)}{3 - 0} = 2$ and its equation is $y = 2x - 3$.\nStep 2: Read the falling line: it crosses the $y$-axis at $6$ and passes through $(3, 3)$, so its slope is $\\frac{3 - 6}{3 - 0} = -1$ and its equation is $y = -x + 6$.\nStep 3: The shaded region lies below both lines, so the system is $y \\leq 2x - 3$ and $y \\leq -x + 6$. Check with the shaded point $(4, 1)$: $1 \\leq 5$ and $1 \\leq 2$ are both true ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: describes points above the rising line, but the shading is below it; $(4, 1)$ fails $1 \\geq 5$.\n* Choice C: describes points above the falling line, but the shading is below it; $(4, 1)$ fails $1 \\geq 2$.\n* Choice D: gives the rising line a negative slope and the falling line a positive slope.\n\n**Test Day Takeaway:** Match a graph to a system in two passes: first write each boundary line from its intercept and slope, then decide each symbol from which side is shaded.",
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
    question: "$y \\geq -3x + 21$\n$y \\leq x + 3$\nThe ordered pair $(k, 6)$ satisfies the given system of inequalities. What is the least possible value of $k$?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**The correct answer is 5.**\n\n**The Fast Way (~30s):** Substituting $y = 6$ gives $6 \\geq -3k + 21$, so $k \\geq 5$, and $6 \\leq k + 3$, so $k \\geq 3$; both must hold, so the least possible value is $5$.\n\n**The Full Solution:**\nStep 1: Substitute $x = k$ and $y = 6$ into the first inequality: $6 \\geq -3k + 21$, so $3k \\geq 15$ and $k \\geq 5$.\nStep 2: Substitute into the second inequality: $6 \\leq k + 3$, so $k \\geq 3$.\nStep 3: The pair must satisfy both inequalities, so $k \\geq 5$ and $k \\geq 3$, which together mean $k \\geq 5$. The least possible value is $5$. Check: $(5, 6)$ gives $6 \\geq -15 + 21 = 6$ and $6 \\leq 5 + 3 = 8$ ✓\n\n**Common Mistakes:**\n* $3$: uses only the second inequality; $(3, 6)$ fails the first, since $-9 + 21 = 12$ and $6 \\geq 12$ is false.\n* $15$: stops at $3k \\geq 15$ without dividing by $3$.\n\n**Test Day Takeaway:** For a point to satisfy a system, every inequality must hold; when two conditions both give a lower bound, the larger bound wins.",
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
    question: "A gardener has $120$ square feet of space for $t$ tomato plants and $p$ pepper plants. Each tomato plant needs $4$ square feet, and each pepper plant needs $2$ square feet. The gardener wants to plant at least $40$ plants. Which of the following systems of inequalities represents this situation?",
    choices: [
      // distractor: reverses both inequalities, treating the space as a minimum and the plant count as a maximum
      { id: "A", text: "$4t + 2p \\geq 120$ and $t + p \\leq 40$" },
      // distractor: attaches 2 square feet to the tomato plants and 4 square feet to the pepper plants
      { id: "B", text: "$2t + 4p \\leq 120$ and $t + p \\geq 40$" },
      // distractor: reads at least 40 plants as at most 40 plants
      { id: "C", text: "$4t + 2p \\leq 120$ and $t + p \\leq 40$" },
      { id: "D", text: "$4t + 2p \\leq 120$ and $t + p \\geq 40$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Space used, $4t + 2p$, can be at most $120$, and the number of plants, $t + p$, must be at least $40$.\n\n**The Full Solution:**\nStep 1: The tomato plants use $4t$ square feet and the pepper plants use $2p$ square feet, so the space used is $4t + 2p$. Only $120$ square feet are available: $4t + 2p \\leq 120$.\nStep 2: The number of plants is $t + p$, and the gardener wants at least $40$: $t + p \\geq 40$.\nStep 3: The system is $4t + 2p \\leq 120$ and $t + p \\geq 40$, which is choice D. Check: $t = 10$ and $p = 35$ uses $40 + 70 = 110 \\leq 120$ square feet for $45 \\geq 40$ plants ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: reverses both symbols, so it would require at least $120$ square feet of planting and at most $40$ plants.\n* Choice B: swaps the space needs, giving each tomato plant $2$ square feet and each pepper plant $4$.\n* Choice C: gets the space correct but turns \"at least $40$ plants\" into a maximum.\n\n**Test Day Takeaway:** Build each inequality from units: square feet per plant times plants gives square feet, which is compared with the space available; the plant count is compared with the plant goal.",
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
    question: "$y \\leq 3x - 2$\n$y \\leq 3x + 4$\nWhich of the following describes the solutions to the given system of inequalities in the $xy$-plane?",
    choices: [
      { id: "A", text: "All points on or below the line $y = 3x - 2$" },
      // distractor: keeps the looser condition; points between the lines satisfy it but fail y <= 3x - 2
      { id: "B", text: "All points on or below the line $y = 3x + 4$" },
      // distractor: reads two less-than-or-equal conditions as a band between the parallel lines
      { id: "C", text: "All points on or between the lines $y = 3x - 2$ and $y = 3x + 4$" },
      // distractor: treats the inequalities like equations, where parallel lines would mean no solution
      { id: "D", text: "No points, because the two boundary lines are parallel" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The lines are parallel, and $3x - 2$ is always less than $3x + 4$, so any point on or below $y = 3x - 2$ is automatically below $y = 3x + 4$.\n\n**The Full Solution:**\nStep 1: Both boundary lines have slope $3$, so they are parallel, and $y = 3x + 4$ is always $6$ units above $y = 3x - 2$.\nStep 2: A solution must be on or below both lines. Being on or below the lower line, $y = 3x - 2$, already puts a point below the upper line, so the second inequality adds no restriction.\nStep 3: The solutions are all points on or below $y = 3x - 2$. Check: $(0, -2)$ gives $-2 \\leq -2$ and $-2 \\leq 4$, both true, while $(0, 1)$, between the lines, fails $1 \\leq -2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: points such as $(0, 1)$ are on or below $y = 3x + 4$ but fail $y \\leq 3x - 2$.\n* Choice C: a band between the lines would be $3x - 2 \\leq y \\leq 3x + 4$, but here both symbols point the same way.\n* Choice D: parallel lines never intersect, but inequalities describe regions, and these two regions overlap.\n\n**Test Day Takeaway:** When two inequalities point the same way and their boundaries are parallel, the stricter one describes the whole solution set.",
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
    question: "The shaded region shown represents the solutions to a system of two linear inequalities. One of the inequalities is $2y + kx \\leq 8$, where $k$ is a constant. What is the value of $k$?",
    diagram: { type: "twoLineGraph", params: { intersection: { x: 2, y: 2 }, slope1: 2, slope2: -1, shadeRegion: "below-both", showIntersection: false, xRange: [-4, 8], yRange: [-6, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1 } },
    choices: [
      // distractor: solves -k/2 = -1 with a sign error, getting k = -2
      { id: "A", text: "$-2$" },
      // distractor: uses the slope of the boundary line, -1, as the value of k
      { id: "B", text: "$-1$" },
      // distractor: forgets to divide by 2 when solving for y, matching -k to the slope -1
      { id: "C", text: "$1$" },
      { id: "D", text: "$2$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Solving $2y + kx = 8$ for $y$ gives $y = -\\frac{k}{2}x + 4$, a line with $y$-intercept $4$. The boundary through $(0, 4)$ has slope $-1$, so $-\\frac{k}{2} = -1$ and $k = 2$.\n\n**The Full Solution:**\nStep 1: Solve the boundary equation $2y + kx = 8$ for $y$: $y = -\\frac{k}{2}x + 4$. Its $y$-intercept is $(0, 4)$.\nStep 2: The boundary line that crosses the $y$-axis at $(0, 4)$ also passes through $(2, 2)$, so its slope is $\\frac{2 - 4}{2 - 0} = -1$.\nStep 3: Match the slopes: $-\\frac{k}{2} = -1$, so $k = 2$. Check: the point $(2, 2)$ gives $2(2) + 2(2) = 8$, so it is on the boundary, and the shaded point $(2, 0)$ gives $2(0) + 2(2) = 4 \\leq 8$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): solves $-\\frac{k}{2} = -1$ with a sign error.\n* Choice B ($-1$): uses the slope of the boundary line as $k$ instead of solving $-\\frac{k}{2} = -1$.\n* Choice C ($1$): forgets to divide by $2$ when solving for $y$, so it matches $-k$ to the slope $-1$.\n\n**Test Day Takeaway:** To match a boundary line to an inequality in standard form, first solve for $y$; the $y$-intercept tells you which line it is, and the slope gives the constant.",
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
    question: "$4x + 7y \\leq 216$\n$y \\geq 2x$\nIf the ordered pair $(x, y)$ satisfies the given system of inequalities, what is the greatest possible value of $x$?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**The correct answer is 12.**\n\n**The Fast Way (~50s):** To make $x$ as large as possible, use the least $y$ allowed, $y = 2x$: then $4x + 14x \\leq 216$, so $x \\leq 12$.\n\n**The Full Solution:**\nStep 1: The second inequality says $y \\geq 2x$, so $7y \\geq 14x$. Then $4x + 14x \\leq 4x + 7y \\leq 216$.\nStep 2: Therefore $18x \\leq 216$, and $x \\leq 12$ for every solution of the system.\nStep 3: The value $x = 12$ is possible: with $y = 24$, $4(12) + 7(24) = 48 + 168 = 216$, and $24 \\geq 2(12)$. So the greatest possible value of $x$ is $12$ ✓\n\n**Common Mistakes:**\n* $54$: ignores $y \\geq 2x$ and sets $y = 0$ in the first inequality, but $(54, 0)$ fails $0 \\geq 108$.\n* $24$: reports the value of $y$ at the corner point instead of $x$.\n* $28.8$: reads $y \\geq 2x$ as $x = 2y$, solving $4(2y) + 7y = 216$ for $y = 14.4$ and doubling it.\n\n**Test Day Takeaway:** The greatest value of one variable in a system of inequalities occurs at a corner of the region, where the other variable is pushed to its own limit.",
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
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The graph of line $k$ is shown in the $xy$-plane. Which of the following is the slope of a line that is perpendicular to line $k$?",
    diagram: { type: "linearGraph", params: { slope: 3, yIntercept: -2, xRange: [-2, 6], yRange: [-4, 10], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[1, 1], [3, 7]], label: "k" } },
    choices: [
      // distractor: changes the sign of line k's slope but does not take the reciprocal
      { id: "A", text: "$-3$" },
      { id: "B", text: "$-\\frac{1}{3}$" },
      // distractor: takes the reciprocal of line k's slope but does not change the sign
      { id: "C", text: "$\\frac{1}{3}$" },
      // distractor: gives the slope of line k itself
      { id: "D", text: "$3$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Line $k$ passes through $(1, 1)$ and $(3, 7)$, so its slope is $\\frac{6}{2} = 3$. A perpendicular line has slope $-\\frac{1}{3}$.\n\n**The Full Solution:**\nStep 1: Read two points on line $k$: $(1, 1)$ and $(3, 7)$.\nStep 2: Slope of line $k$: $\\frac{7 - 1}{3 - 1} = \\frac{6}{2} = 3$.\nStep 3: Perpendicular lines have slopes that are negative reciprocals, so a line perpendicular to line $k$ has slope $-\\frac{1}{3}$. Check: $3 \\cdot \\left(-\\frac{1}{3}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): changes the sign of line $k$'s slope but does not take the reciprocal.\n* Choice C ($\\frac{1}{3}$): takes the reciprocal but does not change the sign.\n* Choice D ($3$): is the slope of line $k$, which would make the lines parallel.\n\n**Test Day Takeaway:** For a perpendicular line, find the original slope, then flip it and change its sign.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-374",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Line $p$ passes through the origin and the point shown in the $xy$-plane. Line $q$ is parallel to line $p$ and passes through the point $(0, 3)$. Which equation defines line $q$?",
    diagram: { type: "coordinatePoints", params: { points: [[-3, 6]], xMin: -6, xMax: 4, yMin: -2, yMax: 8 } },
    choices: [
      // distractor: gives line p, which passes through the origin, not (0, 3)
      { id: "A", text: "$y = -2x$" },
      { id: "B", text: "$y = -2x + 3$" },
      // distractor: uses the negative reciprocal of line p's slope, which gives a perpendicular line
      { id: "C", text: "$y = \\frac{1}{2}x + 3$" },
      // distractor: drops the negative sign from the slope
      { id: "D", text: "$y = 2x + 3$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** From $(0, 0)$ to $(-3, 6)$ the slope is $\\frac{6}{-3} = -2$. Line $q$ has the same slope and $y$-intercept $3$, so $y = -2x + 3$.\n\n**The Full Solution:**\nStep 1: Read the point from the graph: $(-3, 6)$. Line $p$ also passes through $(0, 0)$.\nStep 2: Slope of line $p$: $\\frac{6 - 0}{-3 - 0} = -2$. Parallel lines have equal slopes, so line $q$ has slope $-2$.\nStep 3: Line $q$ passes through $(0, 3)$, so its $y$-intercept is $3$ and its equation is $y = -2x + 3$. Check: at $x = 0$, $y = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -2x$): is line $p$ itself, which passes through the origin, not $(0, 3)$.\n* Choice C ($y = \\frac{1}{2}x + 3$): uses the negative reciprocal of the slope, which gives a perpendicular line.\n* Choice D ($y = 2x + 3$): drops the negative sign; the point $(-3, 6)$ is to the left of the $y$-axis and above the $x$-axis, so the slope is negative.\n\n**Test Day Takeaway:** A parallel line keeps the slope; the point $(0, b)$ it passes through gives its $y$-intercept.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-375",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The two points shown in the $xy$-plane lie on line $k$. Line $j$ is parallel to line $k$ and has a $y$-intercept of $(0, 4)$. Which equation defines line $j$?",
    diagram: { type: "coordinatePoints", params: { points: [[-3, 5], [3, 1]], xMin: -5, xMax: 5, yMin: -2, yMax: 7 } },
    choices: [
      // distractor: divides the change in x by the change in y, getting a slope of -3/2
      { id: "A", text: "$y = -\\frac{3}{2}x + 4$" },
      // distractor: gives line k itself, which does not pass through (0, 4)
      { id: "B", text: "$y = -\\frac{2}{3}x + 3$" },
      { id: "C", text: "$y = -\\frac{2}{3}x + 4$" },
      // distractor: uses the negative reciprocal of line k's slope, which gives a perpendicular line
      { id: "D", text: "$y = \\frac{3}{2}x + 4$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Line $k$ has slope $\\frac{1 - 5}{3 - (-3)} = -\\frac{2}{3}$. Line $j$ has the same slope and $y$-intercept $4$: $y = -\\frac{2}{3}x + 4$.\n\n**The Full Solution:**\nStep 1: Read the points: $(-3, 5)$ and $(3, 1)$.\nStep 2: Slope of line $k$: $\\frac{1 - 5}{3 - (-3)} = \\frac{-4}{6} = -\\frac{2}{3}$. Parallel lines have equal slopes, so line $j$ also has slope $-\\frac{2}{3}$.\nStep 3: Line $j$ has $y$-intercept $(0, 4)$, so its equation is $y = -\\frac{2}{3}x + 4$. Check: line $k$ is $y = -\\frac{2}{3}x + 3$, a different line with the same slope ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\frac{3}{2}x + 4$): divides the change in $x$ by the change in $y$.\n* Choice B ($y = -\\frac{2}{3}x + 3$): is line $k$ itself, which does not pass through $(0, 4)$.\n* Choice D ($y = \\frac{3}{2}x + 4$): uses the negative reciprocal of the slope, which gives a perpendicular line.\n\n**Test Day Takeaway:** Parallel lines share a slope; the $y$-intercept fixes which of those lines you want.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-376",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "medium",
    type: "fill-in",
    question: "Line $k$ contains the two points shown. Line $j$ is parallel to line $k$, and both the origin and the point $(9, b)$ lie on line $j$. What is the value of $b$?",
    diagram: { type: "coordinatePoints", params: { points: [[1, -2], [4, 2]], xMin: -2, xMax: 6, yMin: -4, yMax: 4 } },
    correctAnswer: "12",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~30s):** Line $k$ has slope $\\frac{2 - (-2)}{4 - 1} = \\frac{4}{3}$, so line $j$ is $y = \\frac{4}{3}x$ and $b = \\frac{4}{3}(9) = 12$.\n\n**The Full Solution:**\nStep 1: Read the points: $(1, -2)$ and $(4, 2)$.\nStep 2: Slope of line $k$: $\\frac{2 - (-2)}{4 - 1} = \\frac{4}{3}$. Line $j$ is parallel, so it also has slope $\\frac{4}{3}$.\nStep 3: Line $j$ passes through the origin, so its equation is $y = \\frac{4}{3}x$. At $x = 9$: $b = \\frac{4}{3}(9) = 12$. Check: $\\frac{12 - 0}{9 - 0} = \\frac{4}{3}$ ✓\n\n**Common Mistakes:**\n* $\\frac{26}{3}$: uses line $k$ itself, $y = \\frac{4}{3}x - \\frac{10}{3}$, which does not pass through the origin.\n* $\\frac{27}{4}$: inverts the slope to $\\frac{3}{4}$.\n* $36$: uses the rise, $4$, as the slope.\n\n**Test Day Takeaway:** A line through the origin is $y = mx$; a parallel line gives you $m$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-377",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Line $j$ passes through the two points shown in the $xy$-plane. Line $k$ is perpendicular to line $j$. What is the slope of line $k$?",
    diagram: { type: "coordinatePoints", params: { points: [[1, -3], [6, 4]], xMin: -2, xMax: 8, yMin: -5, yMax: 6 } },
    choices: [
      // distractor: changes the sign of line j's slope but does not take the reciprocal
      { id: "A", text: "$-\\frac{7}{5}$" },
      { id: "B", text: "$-\\frac{5}{7}$" },
      // distractor: takes the reciprocal of line j's slope but does not change the sign
      { id: "C", text: "$\\frac{5}{7}$" },
      // distractor: gives the slope of line j itself
      { id: "D", text: "$\\frac{7}{5}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Line $j$ has slope $\\frac{4 - (-3)}{6 - 1} = \\frac{7}{5}$, so a perpendicular line has slope $-\\frac{5}{7}$.\n\n**The Full Solution:**\nStep 1: Read the points: $(1, -3)$ and $(6, 4)$.\nStep 2: Slope of line $j$: $\\frac{4 - (-3)}{6 - 1} = \\frac{7}{5}$.\nStep 3: Perpendicular slopes are negative reciprocals, so line $k$ has slope $-\\frac{5}{7}$. Check: $\\frac{7}{5} \\cdot \\left(-\\frac{5}{7}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{7}{5}$): changes the sign of line $j$'s slope but does not take the reciprocal.\n* Choice C ($\\frac{5}{7}$): takes the reciprocal but does not change the sign.\n* Choice D ($\\frac{7}{5}$): is the slope of line $j$, which would make the lines parallel.\n\n**Test Day Takeaway:** The slope of a perpendicular line is the negative reciprocal: flip the fraction and change the sign.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-378",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Line $p$ passes through the two points shown in the $xy$-plane. Line $q$ is parallel to line $p$ and passes through the origin. Which equation defines line $q$?",
    diagram: { type: "coordinatePoints", params: { points: [[1, 2], [5, 5]], xMin: -2, xMax: 8, yMin: -2, yMax: 8 } },
    choices: [
      // distractor: uses the perpendicular slope instead of the same slope
      { id: "A", text: "$y = -\\frac{4}{3}x$" },
      { id: "B", text: "$y = \\frac{3}{4}x$" },
      // distractor: gives the equation of line p, which does not pass through the origin
      { id: "C", text: "$y = \\frac{3}{4}x + \\frac{5}{4}$" },
      // distractor: divides the run by the rise
      { id: "D", text: "$y = \\frac{4}{3}x$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Line $p$ has slope $\\frac{5 - 2}{5 - 1} = \\frac{3}{4}$; a parallel line through the origin is $y = \\frac{3}{4}x$.\n\n**The Full Solution:**\nStep 1: Read the points: $(1, 2)$ and $(5, 5)$.\nStep 2: Slope of line $p$: $\\frac{5 - 2}{5 - 1} = \\frac{3}{4}$. Parallel lines have equal slopes, so line $q$ also has slope $\\frac{3}{4}$.\nStep 3: Line $q$ passes through $(0, 0)$, so its $y$-intercept is $0$: $y = \\frac{3}{4}x$. Check: line $p$ is $y = \\frac{3}{4}x + \\frac{5}{4}$, a different line with the same slope ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\frac{4}{3}x$): uses the negative reciprocal, which gives a perpendicular line.\n* Choice C ($y = \\frac{3}{4}x + \\frac{5}{4}$): is the equation of line $p$ itself, which does not pass through the origin.\n* Choice D ($y = \\frac{4}{3}x$): divides the run by the rise.\n\n**Test Day Takeaway:** Parallel lines share a slope; the point the new line passes through fixes its intercept.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-379",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Line $p$ passes through the two points shown in the $xy$-plane. The graph of $4x + ky = 9$, where $k$ is a constant, is parallel to line $p$. What is the value of $k$?",
    diagram: { type: "coordinatePoints", params: { points: [[-4, 3], [6, 7]], xMin: -6, xMax: 8, yMin: -2, yMax: 10 } },
    choices: [
      { id: "A", text: "$-10$" },
      // distractor: takes the slope of 4x + ky = 9 to be -k/4 instead of -4/k
      { id: "B", text: "$-\\frac{8}{5}$" },
      // distractor: takes the slope of 4x + ky = 9 to be k/4, inverting it and dropping the sign
      { id: "C", text: "$\\frac{8}{5}$" },
      // distractor: drops the negative sign: solves 4/k = 2/5
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Parallel Lines and Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** Line $p$ has slope $\\frac{7 - 3}{6 - (-4)} = \\frac{2}{5}$. The graph of $4x + ky = 9$ has slope $-\\frac{4}{k}$, so $-\\frac{4}{k} = \\frac{2}{5}$ and $k = -10$.\n\n**The Full Solution:**\nStep 1: Read the points: $(-4, 3)$ and $(6, 7)$. Slope of line $p$: $\\frac{7 - 3}{6 - (-4)} = \\frac{4}{10} = \\frac{2}{5}$.\nStep 2: Solve $4x + ky = 9$ for $y$: $y = -\\frac{4}{k}x + \\frac{9}{k}$, so its slope is $-\\frac{4}{k}$.\nStep 3: Parallel lines have equal slopes: $-\\frac{4}{k} = \\frac{2}{5}$, so $2k = -20$ and $k = -10$. Check: $4x - 10y = 9$ gives $y = \\frac{2}{5}x - \\frac{9}{10}$, slope $\\frac{2}{5}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{8}{5}$): treats the slope of $4x + ky = 9$ as $-\\frac{k}{4}$, so $-\\frac{k}{4} = \\frac{2}{5}$.\n* Choice C ($\\frac{8}{5}$): treats the slope as $\\frac{k}{4}$, inverting it and dropping the sign.\n* Choice D ($10$): drops the negative sign and solves $\\frac{4}{k} = \\frac{2}{5}$.\n\n**Test Day Takeaway:** The slope of $Ax + By = C$ is $-\\frac{A}{B}$; set it equal to the slope you read from the graph.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-380",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "hard",
    type: "fill-in",
    question: "Line $\\ell$ in the $xy$-plane is parallel to the graph of $3x + 4y = 48$ and passes through the points $(0, 0)$ and $(12, d)$. What is the value of $d$?",
    correctAnswer: "-9",
    explanation: "**SAT Pattern: Parallel Lines and Standard Form**\n\n**The correct answer is $-9$.**\n\n**The Fast Way (~30s):** The slope of $3x + 4y = 48$ is $-\\frac{3}{4}$, so line $\\ell$ is $y = -\\frac{3}{4}x$ and $d = -\\frac{3}{4}(12) = -9$.\n\n**The Full Solution:**\nStep 1: Solve $3x + 4y = 48$ for $y$: $y = -\\frac{3}{4}x + 12$. Its slope is $-\\frac{3}{4}$.\nStep 2: Line $\\ell$ is parallel, so it also has slope $-\\frac{3}{4}$. It passes through $(0, 0)$, so its equation is $y = -\\frac{3}{4}x$.\nStep 3: At $x = 12$: $d = -\\frac{3}{4}(12) = -9$. Check: $\\frac{-9 - 0}{12 - 0} = -\\frac{3}{4}$ ✓\n\n**Common Mistakes:**\n* $9$: drops the negative sign of the slope.\n* $-16$: inverts the slope to $-\\frac{4}{3}$.\n* $3$: substitutes $(12, d)$ into $3x + 4y = 48$ itself, but line $\\ell$ is a different line through the origin.\n\n**Test Day Takeaway:** A parallel line shares only the slope; a line through the origin is $y = mx$.",
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
    skills: ["writing-parallel-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A line passes through the origin and the point shown in the $xy$-plane. What is the slope of a line that is parallel to this line?",
    diagram: { type: "coordinatePoints", params: { points: [[4, 6]], xMin: -4, xMax: 6, yMin: -4, yMax: 8 } },
    choices: [
      // distractor: changes the sign of the slope
      { id: "A", text: "$-\\frac{3}{2}$" },
      // distractor: uses the negative reciprocal, which is the slope of a perpendicular line
      { id: "B", text: "$-\\frac{2}{3}$" },
      // distractor: divides the change in x by the change in y
      { id: "C", text: "$\\frac{2}{3}$" },
      { id: "D", text: "$\\frac{3}{2}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** From $(0, 0)$ to $(4, 6)$ the slope is $\\frac{6}{4} = \\frac{3}{2}$, and a parallel line has the same slope.\n\n**The Full Solution:**\nStep 1: Read the point from the graph: $(4, 6)$. The line also passes through the origin, $(0, 0)$.\nStep 2: Slope of the line: $\\frac{6 - 0}{4 - 0} = \\frac{6}{4} = \\frac{3}{2}$.\nStep 3: Parallel lines have equal slopes, so the parallel line has slope $\\frac{3}{2}$. Check: moving right $2$ and up $3$ from the origin reaches $(2, 3)$, and doing it again reaches $(4, 6)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{3}{2}$): changes the sign of the slope, but the line rises from left to right.\n* Choice B ($-\\frac{2}{3}$): is the negative reciprocal, the slope of a perpendicular line.\n* Choice C ($\\frac{2}{3}$): divides the change in $x$ by the change in $y$.\n\n**Test Day Takeaway:** Parallel lines have the same slope; perpendicular lines have negative reciprocal slopes.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "midpoint-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-382",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Line $k$ is shown in the $xy$-plane. Line $j$ is parallel to line $k$ and passes through the origin. Which equation defines line $j$?",
    diagram: { type: "linearGraph", params: { slope: -2, yIntercept: 4, xRange: [-4, 6], yRange: [-4, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 4], [2, 0]], label: "k" } },
    choices: [
      { id: "A", text: "$y = -2x$" },
      // distractor: gives line k itself, which does not pass through the origin
      { id: "B", text: "$y = -2x + 4$" },
      // distractor: uses the negative reciprocal of line k's slope, which gives a perpendicular line
      { id: "C", text: "$y = \\frac{1}{2}x$" },
      // distractor: drops the negative sign from the slope
      { id: "D", text: "$y = 2x$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Line $k$ passes through $(0, 4)$ and $(2, 0)$, so its slope is $-2$. A parallel line through the origin is $y = -2x$.\n\n**The Full Solution:**\nStep 1: Read two points on line $k$: $(0, 4)$ and $(2, 0)$.\nStep 2: Slope of line $k$: $\\frac{0 - 4}{2 - 0} = -2$. Line $j$ is parallel, so it also has slope $-2$.\nStep 3: Line $j$ passes through $(0, 0)$, so its $y$-intercept is $0$: $y = -2x$. Check: line $k$ is $y = -2x + 4$, a different line with the same slope ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = -2x + 4$): is line $k$ itself, which does not pass through the origin.\n* Choice C ($y = \\frac{1}{2}x$): uses the negative reciprocal, which gives a perpendicular line.\n* Choice D ($y = 2x$): drops the negative sign; line $k$ falls from left to right.\n\n**Test Day Takeaway:** A line through the origin has the form $y = mx$; a parallel line supplies $m$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "midpoint-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-383",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The two points shown in the $xy$-plane lie on line $r$. Line $s$ is perpendicular to line $r$. What is the slope of line $s$?",
    diagram: { type: "coordinatePoints", params: { points: [[-6, -2], [4, 6]], xMin: -8, xMax: 6, yMin: -4, yMax: 8 } },
    choices: [
      { id: "A", text: "$-\\frac{5}{4}$" },
      // distractor: changes the sign of line r's slope but does not take the reciprocal
      { id: "B", text: "$-\\frac{4}{5}$" },
      // distractor: gives the slope of line r itself
      { id: "C", text: "$\\frac{4}{5}$" },
      // distractor: takes the reciprocal of line r's slope but does not change the sign
      { id: "D", text: "$\\frac{5}{4}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Line $r$ has slope $\\frac{6 - (-2)}{4 - (-6)} = \\frac{8}{10} = \\frac{4}{5}$, so a perpendicular line has slope $-\\frac{5}{4}$.\n\n**The Full Solution:**\nStep 1: Read the points: $(-6, -2)$ and $(4, 6)$.\nStep 2: Slope of line $r$: $\\frac{6 - (-2)}{4 - (-6)} = \\frac{8}{10} = \\frac{4}{5}$.\nStep 3: Perpendicular slopes are negative reciprocals, so line $s$ has slope $-\\frac{5}{4}$. Check: $\\frac{4}{5} \\cdot \\left(-\\frac{5}{4}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{4}{5}$): changes the sign but does not take the reciprocal.\n* Choice C ($\\frac{4}{5}$): is the slope of line $r$, which would make the lines parallel.\n* Choice D ($\\frac{5}{4}$): takes the reciprocal but does not change the sign.\n\n**Test Day Takeaway:** Subtracting a negative coordinate adds; get the slope right first, then flip it and change its sign.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "midpoint-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-384",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "medium",
    type: "fill-in",
    question: "The table shows the coordinates of two points on line $\\ell$ in the $xy$-plane. Line $m$ is perpendicular to line $\\ell$. What is the slope of line $m$?",
    questionTable: { headers: ["$x$", "$y$"], rows: [["$3$", "$-2$"], ["$11$", "$4$"]] },
    correctAnswer: "-4/3",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $-\\frac{4}{3}$ (or $-1.333$).**\n\n**The Fast Way (~30s):** Line $\\ell$ has slope $\\frac{4 - (-2)}{11 - 3} = \\frac{6}{8} = \\frac{3}{4}$, so line $m$ has slope $-\\frac{4}{3}$.\n\n**The Full Solution:**\nStep 1: The table gives two points on line $\\ell$: $(3, -2)$ and $(11, 4)$.\nStep 2: Slope of line $\\ell$: $\\frac{4 - (-2)}{11 - 3} = \\frac{6}{8} = \\frac{3}{4}$.\nStep 3: Perpendicular slopes are negative reciprocals, so line $m$ has slope $-\\frac{4}{3}$. Check: $\\frac{3}{4} \\cdot \\left(-\\frac{4}{3}\\right) = -1$ ✓\n\n**Common Mistakes:**\n* $\\frac{3}{4}$: gives the slope of line $\\ell$ itself.\n* $\\frac{4}{3}$: takes the reciprocal but does not change the sign.\n* $-4$: subtracts $4 - 2$ instead of $4 - (-2)$, getting a slope of $\\frac{1}{4}$ for line $\\ell$.\n\n**Test Day Takeaway:** Find the slope from the two rows first, then take the negative reciprocal.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "midpoint-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-385",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table shows the coordinates of two points on line $p$ in the $xy$-plane. Line $k$ is parallel to line $p$ and passes through the point $(0, 4)$. Which equation defines line $k$?",
    questionTable: { headers: ["$x$", "$y$"], rows: [["$-2$", "$9$"], ["$4$", "$-3$"]] },
    choices: [
      { id: "A", text: "$y = -2x + 4$" },
      // distractor: gives line p itself, which does not pass through (0, 4)
      { id: "B", text: "$y = -2x + 5$" },
      // distractor: uses the negative reciprocal of line p's slope, which gives a perpendicular line
      { id: "C", text: "$y = \\frac{1}{2}x + 4$" },
      // distractor: drops the negative sign from the slope
      { id: "D", text: "$y = 2x + 4$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Line $p$ has slope $\\frac{-3 - 9}{4 - (-2)} = -2$. Line $k$ has the same slope and $y$-intercept $4$: $y = -2x + 4$.\n\n**The Full Solution:**\nStep 1: The table gives two points on line $p$: $(-2, 9)$ and $(4, -3)$.\nStep 2: Slope of line $p$: $\\frac{-3 - 9}{4 - (-2)} = \\frac{-12}{6} = -2$. Parallel lines have equal slopes, so line $k$ has slope $-2$.\nStep 3: Line $k$ passes through $(0, 4)$, so its equation is $y = -2x + 4$. Check: line $p$ is $y = -2x + 5$, a different line with the same slope ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = -2x + 5$): is line $p$ itself, which does not pass through $(0, 4)$.\n* Choice C ($y = \\frac{1}{2}x + 4$): uses the negative reciprocal, which gives a perpendicular line.\n* Choice D ($y = 2x + 4$): drops the negative sign; $y$ decreases as $x$ increases in the table.\n\n**Test Day Takeaway:** Get the slope from the two rows; a parallel line keeps it, and the point $(0, b)$ gives the new intercept.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "midpoint-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-386",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Line $t$ passes through the two points shown in the $xy$-plane. Line $s$ is parallel to line $t$ and passes through the origin. The point $(a, 3)$ lies on line $s$. What is the value of $a$?",
    diagram: { type: "coordinatePoints", params: { points: [[-4, 8], [2, 5]], xMin: -6, xMax: 6, yMin: -2, yMax: 12 } },
    choices: [
      { id: "A", text: "$-6$" },
      // distractor: inverts the slope to -2, solving 3 = -2a
      { id: "B", text: "$-\\frac{3}{2}$" },
      // distractor: inverts the slope and drops its sign, solving 3 = 2a
      { id: "C", text: "$\\frac{3}{2}$" },
      // distractor: uses line t itself, y = -(1/2)x + 6, instead of the line through the origin
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Line $t$ has slope $\\frac{5 - 8}{2 - (-4)} = -\\frac{1}{2}$, so line $s$ is $y = -\\frac{1}{2}x$. Then $3 = -\\frac{1}{2}a$, so $a = -6$.\n\n**The Full Solution:**\nStep 1: Read the points: $(-4, 8)$ and $(2, 5)$. Slope of line $t$: $\\frac{5 - 8}{2 - (-4)} = \\frac{-3}{6} = -\\frac{1}{2}$.\nStep 2: Line $s$ is parallel to line $t$ and passes through the origin, so its equation is $y = -\\frac{1}{2}x$.\nStep 3: Substitute $(a, 3)$: $3 = -\\frac{1}{2}a$, so $a = -6$. Check: $-\\frac{1}{2}(-6) = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{3}{2}$): inverts the slope to $-2$ and solves $3 = -2a$.\n* Choice C ($\\frac{3}{2}$): inverts the slope and drops its sign, solving $3 = 2a$.\n* Choice D ($6$): uses line $t$ itself, $y = -\\frac{1}{2}x + 6$, which does not pass through the origin.\n\n**Test Day Takeaway:** A parallel line through the origin is $y = mx$ with the same $m$; substitute the given coordinate and solve.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "midpoint-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-387",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, line $k$ is perpendicular to the graph of $6x - 4y = 7$. What is the slope of line $k$?",
    choices: [
      // distractor: changes the sign of the graph's slope but does not take the reciprocal
      { id: "A", text: "$-\\frac{3}{2}$" },
      { id: "B", text: "$-\\frac{2}{3}$" },
      // distractor: takes the reciprocal of the graph's slope but does not change the sign
      { id: "C", text: "$\\frac{2}{3}$" },
      // distractor: gives the slope of the graph of 6x - 4y = 7 itself
      { id: "D", text: "$\\frac{3}{2}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Solving $6x - 4y = 7$ for $y$ gives $y = \\frac{3}{2}x - \\frac{7}{4}$, slope $\\frac{3}{2}$. A perpendicular line has slope $-\\frac{2}{3}$.\n\n**The Full Solution:**\nStep 1: Subtract $6x$ from both sides: $-4y = -6x + 7$.\nStep 2: Divide by $-4$: $y = \\frac{3}{2}x - \\frac{7}{4}$, so the graph has slope $\\frac{3}{2}$.\nStep 3: Perpendicular slopes are negative reciprocals, so line $k$ has slope $-\\frac{2}{3}$. Check: $\\frac{3}{2} \\cdot \\left(-\\frac{2}{3}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{3}{2}$): changes the sign of the slope but does not take the reciprocal.\n* Choice C ($\\frac{2}{3}$): takes the reciprocal but does not change the sign.\n* Choice D ($\\frac{3}{2}$): is the slope of the given graph, which would make the lines parallel.\n\n**Test Day Takeaway:** Solve a standard-form equation for $y$ before reading its slope; dividing by a negative coefficient flips the signs.",
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
    question: "In the $xy$-plane, line $k$ passes through the points $(-7, 20)$ and $(13, -4)$. The point $(3, a)$ also lies on line $k$. What is the value of $a$?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**The correct answer is 8.**\n\n**The Fast Way (~30s):** The $x$-coordinate $3$ is the midpoint of $-7$ and $13$, so $(3, a)$ is the midpoint of the two given points, and $a = \\frac{20 + (-4)}{2} = 8$.\n\n**The Full Solution:**\nStep 1: The midpoint of $(-7, 20)$ and $(13, -4)$ is $\\left(\\frac{-7 + 13}{2}, \\frac{20 + (-4)}{2}\\right) = (3, 8)$.\nStep 2: The midpoint of two points on a line also lies on that line, and it is the only point of line $k$ with $x$-coordinate $3$, so $a = 8$.\nStep 3: Confirm with the slope: $\\frac{-4 - 20}{13 - (-7)} = -\\frac{6}{5}$, so $a = 20 - \\frac{6}{5}(3 - (-7)) = 20 - 12 = 8$. Check: from $(3, 8)$ to $(13, -4)$ the slope is $\\frac{-12}{10} = -\\frac{6}{5}$ ✓\n\n**Common Mistakes:**\n* $12$: subtracts the $y$-coordinates instead of adding them, computing $\\frac{20 - (-4)}{2}$.\n* $32$: uses a slope of $\\frac{6}{5}$ instead of $-\\frac{6}{5}$, computing $20 + 12$.\n\n**Test Day Takeaway:** When the given $x$-value is exactly halfway between two points on a line, the $y$-value is halfway too: average the $y$-coordinates.",
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
    question: "An elevator can carry at most $1{,}500$ kilograms. A person who weighs $90$ kilograms will ride the elevator with $n$ boxes that each weigh $55$ kilograms. What is the greatest possible value of $n$?",
    choices: [
      { id: "A", text: "$25$" },
      // distractor: rounds 25.6 up to 26, which would put the load over 1,500 kilograms
      { id: "B", text: "$26$" },
      // distractor: leaves out the person's weight and divides 1,500 by 55
      { id: "C", text: "$27$" },
      // distractor: leaves out the person's weight and rounds 27.3 up
      { id: "D", text: "$28$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The load is $90 + 55n \\leq 1{,}500$, so $55n \\leq 1{,}410$ and $n \\leq 25.6$; the greatest whole number of boxes is $25$.\n\n**The Full Solution:**\nStep 1: The total weight is the person plus the boxes: $90 + 55n$. It can be at most $1{,}500$: $90 + 55n \\leq 1{,}500$.\nStep 2: Subtract $90$: $55n \\leq 1{,}410$. Divide by $55$: $n \\leq 25.6$ (to the nearest tenth).\nStep 3: The number of boxes must be a whole number at most $25.6$, so the greatest value is $25$. Check: $90 + 55(25) = 1{,}465 \\leq 1{,}500$, but $90 + 55(26) = 1{,}520 > 1{,}500$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($26$): rounds $25.6$ to the nearest whole number; $26$ boxes bring the load to $1{,}520$ kilograms.\n* Choice C ($27$): ignores the person, solving $55n \\leq 1{,}500$ for $n \\leq 27.3$.\n* Choice D ($28$): ignores the person and also rounds $27.3$ up.\n\n**Test Day Takeaway:** With a maximum, round down to a whole number even when the decimal is above one half; check the next integer to confirm it breaks the limit.",
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
    question: "A landscaper will plant $t$ trees and $s$ shrubs in at most $12$ hours. Each tree takes $1.5$ hours to plant, and each shrub takes $0.25$ hour. There must be at least $3$ times as many shrubs as trees. Which of the following systems of inequalities represents this situation?",
    choices: [
      // distractor: reverses the ratio condition, writing 3s >= t instead of s >= 3t
      { id: "A", text: "$6t + s \\leq 48$ and $3s \\geq t$" },
      { id: "B", text: "$6t + s \\leq 48$ and $s \\geq 3t$" },
      // distractor: reads at most 12 hours as at least, reversing the time inequality
      { id: "C", text: "$6t + s \\geq 48$ and $s \\geq 3t$" },
      // distractor: attaches the tree time to the shrubs, writing t + 6s instead of 6t + s
      { id: "D", text: "$t + 6s \\leq 48$ and $s \\geq 3t$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** Time is $1.5t + 0.25s \\leq 12$, which is $6t + s \\leq 48$ after multiplying by $4$, and \"at least $3$ times as many shrubs as trees\" is $s \\geq 3t$.\n\n**The Full Solution:**\nStep 1: Planting time is $1.5t + 0.25s$ hours, and it can be at most $12$: $1.5t + 0.25s \\leq 12$. Multiply every term by $4$ to clear the decimals: $6t + s \\leq 48$.\nStep 2: \"At least $3$ times as many shrubs as trees\" means the shrub count is at least $3$ times the tree count: $s \\geq 3t$.\nStep 3: The system is $6t + s \\leq 48$ and $s \\geq 3t$, which is choice B. Check: $t = 4$ and $s = 12$ takes $6 + 3 = 9$ hours and has $12 \\geq 12$ shrubs, and it satisfies $24 + 12 = 36 \\leq 48$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: writes $3s \\geq t$, which says there are at least one-third as many shrubs as trees.\n* Choice C: reverses the time limit; \"at most $12$ hours\" is an upper bound.\n* Choice D: gives the shrubs the larger time coefficient, but each tree takes longer to plant.\n\n**Test Day Takeaway:** When the choices have no decimals, scale your inequality by the same factor before matching; and for \"$a$ is at least $3$ times $b$,\" the $3$ multiplies $b$.",
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
    question: "The graph of the linear function $g$ is shown in the $xy$-plane. What is the value of $g(4)$?",
    diagram: { type: "linearGraph", params: { slope: -0.5, yIntercept: 5, xRange: [-2, 12], yRange: [-2, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1 } },
    choices: [
      // distractor: finds the x-value where g(x) = 4 instead of the output at x = 4
      { id: "A", text: "$2$" },
      { id: "B", text: "$3$" },
      // distractor: reads the y-intercept, g(0) = 5, instead of g(4)
      { id: "C", text: "$5$" },
      // distractor: reads the x-intercept, 10, instead of g(4)
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Go to $x = 4$ on the $x$-axis and read up to the line: the point there is $(4, 3)$, so $g(4) = 3$.\n\n**The Full Solution:**\nStep 1: $g(4)$ is the $y$-coordinate of the point on the graph whose $x$-coordinate is $4$.\nStep 2: Move up from $x = 4$ to the line; the line passes through the grid point $(4, 3)$.\nStep 3: So $g(4) = 3$. Check: the line passes through $(0, 5)$ and $(10, 0)$, so its slope is $-\\frac{1}{2}$ and $g(x) = -\\frac{1}{2}x + 5$; then $g(4) = -2 + 5 = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): this is the value of $x$ for which $g(x) = 4$, which swaps the input and the output.\n* Choice C ($5$): this is $g(0)$, the $y$-intercept, not the value at $x = 4$.\n* Choice D ($10$): this is the $x$-intercept, where $g(x) = 0$.\n\n**Test Day Takeaway:** $g(a)$ is an output: find $a$ on the $x$-axis and read the $y$-coordinate of the graph there.",
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
    question: "$g(x) = f(x) + 6$\nThe function $f$ is linear, and three of its values are shown in the table. What is the value of $g(10)$?",
    questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$-2$", "$16$"], ["$1$", "$7$"], ["$4$", "$-2$"]] },
    choices: [
      // distractor: subtracts 6 instead of adding it, computing -20 - 6 = -26
      { id: "A", text: "$-26$" },
      // distractor: finds f(10) = -20 correctly but forgets to add 6
      { id: "B", text: "$-20$" },
      { id: "C", text: "$-14$" },
      // distractor: reads f(-2) = 16 as the y-intercept, using f(x) = -3x + 16, so g(10) = -14 + 6 = -8
      { id: "D", text: "$-8$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Each step of $3$ in $x$ lowers $f(x)$ by $9$, so the slope is $-3$ and $f(x) = -3x + 10$. Then $f(10) = -20$ and $g(10) = -20 + 6 = -14$.\n\n**The Full Solution:**\nStep 1: Find the slope of $f$ from two rows of the table: $\\frac{7 - 16}{1 - (-2)} = \\frac{-9}{3} = -3$.\nStep 2: Use the point $(1, 7)$: $7 = -3(1) + b$, so $b = 10$ and $f(x) = -3x + 10$.\nStep 3: Evaluate $f(10) = -3(10) + 10 = -20$.\nStep 4: Since $g(x) = f(x) + 6$, $g(10) = -20 + 6 = -14$. Check: $f(4) = -3(4) + 10 = -2$, matching the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-26$): subtracts $6$ from $f(10)$ instead of adding it.\n* Choice B ($-20$): this is $f(10)$; the $+6$ in the definition of $g$ was left off.\n* Choice D ($-8$): treats $f(-2) = 16$ as the $y$-intercept, giving $f(x) = -3x + 16$ and $g(10) = -14 + 6$.\n\n**Test Day Takeaway:** When $g(x) = f(x) + k$, find the value of $f$ first, then add $k$; a table of a linear function gives you its slope and intercept.",
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
    question: "$3(2x + 5) = 6x + 14$\nHow many solutions does the given equation have?",
    choices: [
      // distractor: assumes every linear equation has exactly one solution without simplifying
      { id: "A", text: "Exactly one solution" },
      // distractor: confuses the linear equation with a quadratic, which can have two solutions
      { id: "B", text: "Exactly two solutions" },
      // distractor: sees 6x on both sides and stops without comparing the constants 15 and 14
      { id: "C", text: "Infinitely many solutions" },
      { id: "D", text: "No solution" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The left side is $6x + 15$; $6x + 15 = 6x + 14$ reduces to $15 = 14$, which is false, so there is no solution.\n\n**The Full Solution:**\nStep 1: Distribute on the left side: $3(2x + 5) = 6x + 15$.\nStep 2: The equation becomes $6x + 15 = 6x + 14$. Subtracting $6x$ from each side gives $15 = 14$.\nStep 3: That statement is false for every value of $x$, so the equation has no solution. Check: at $x = 0$ the sides are $15$ and $14$, and at $x = 1$ they are $21$ and $20$; the left side is always $1$ greater ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Exactly one solution): a linear equation usually has one solution, but here the $x$-terms cancel completely.\n* Choice B (Exactly two solutions): two solutions are possible for some quadratic equations, not for a linear equation.\n* Choice C (Infinitely many solutions): the $x$-coefficients match, but the constants $15$ and $14$ do not, so the sides are never equal.\n\n**Test Day Takeaway:** When the $x$-terms match on both sides, compare the constants: equal constants mean infinitely many solutions, different constants mean no solution.",
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
    question: "$6(3x - 4) + 11 = 18x + c$\nIn the given equation, $c$ is a constant. For what value of $c$ does the equation have infinitely many solutions?",
    choices: [
      // distractor: treats +11 as -11 when combining the constants, computing -24 - 11 = -35
      { id: "A", text: "$-35$" },
      { id: "B", text: "$-13$" },
      // distractor: multiplies only 3x by 6, computing -4 + 11 = 7
      { id: "C", text: "$7$" },
      // distractor: drops the negative sign on -24, computing 24 + 11 = 35
      { id: "D", text: "$35$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The left side simplifies to $18x - 24 + 11 = 18x - 13$, so the sides are identical when $c = -13$.\n\n**The Full Solution:**\nStep 1: Distribute the $6$: $6(3x - 4) = 18x - 24$.\nStep 2: Combine the constants on the left: $18x - 24 + 11 = 18x - 13$.\nStep 3: The equation $18x - 13 = 18x + c$ is true for every $x$ exactly when $c = -13$. Check: at $x = 1$ the left side is $6(-1) + 11 = 5$ and the right side is $18 - 13 = 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-35$): combines the constants as $-24 - 11$, losing the plus sign on $11$.\n* Choice C ($7$): multiplies only $3x$ by $6$, so the constant becomes $-4 + 11 = 7$.\n* Choice D ($35$): drops the negative sign on $-24$ and adds $24 + 11$.\n\n**Test Day Takeaway:** An equation has infinitely many solutions only when both sides simplify to exactly the same expression.",
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
    question: "Line $k$ is shown in the $xy$-plane. Which equation defines line $k$?",
    diagram: { type: "linearGraph", params: { slope: 1.5, yIntercept: 4, xRange: [-6, 6], yRange: [-4, 10], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[-2, 1], [2, 7]], label: "k" } },
    choices: [
      // distractor: reads the rise as a fall and gives the slope the wrong sign
      { id: "A", text: "$y = -\\frac{3}{2}x + 4$" },
      // distractor: divides the run by the rise, inverting the slope
      { id: "B", text: "$y = \\frac{2}{3}x + 4$" },
      // distractor: uses the y-coordinate of the point (-2, 1) as the y-intercept
      { id: "C", text: "$y = \\frac{3}{2}x + 1$" },
      { id: "D", text: "$y = \\frac{3}{2}x + 4$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** From $(-2, 1)$ to $(2, 7)$ the line rises $6$ over a run of $4$, so the slope is $\\frac{3}{2}$, and it crosses the $y$-axis at $4$: $y = \\frac{3}{2}x + 4$.\n\n**The Full Solution:**\nStep 1: The marked points are $(-2, 1)$ and $(2, 7)$, so the slope is $\\frac{7 - 1}{2 - (-2)} = \\frac{6}{4} = \\frac{3}{2}$.\nStep 2: The line crosses the $y$-axis at $(0, 4)$, so the $y$-intercept is $4$.\nStep 3: Line $k$ is $y = \\frac{3}{2}x + 4$. Check: $\\frac{3}{2}(-2) + 4 = 1$ and $\\frac{3}{2}(2) + 4 = 7$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\frac{3}{2}x + 4$): the line rises from left to right, so its slope is positive.\n* Choice B ($y = \\frac{2}{3}x + 4$): divides the run by the rise, which inverts the slope.\n* Choice C ($y = \\frac{3}{2}x + 1$): uses the $y$-coordinate of $(-2, 1)$ as the $y$-intercept; the intercept is where $x = 0$.\n\n**Test Day Takeaway:** Slope is rise over run between two points; the $y$-intercept is read where the line crosses the $y$-axis, at $x = 0$.",
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
    question: "For the linear function $h$, the table shows two values of $x$ and their corresponding values of $h(x)$. What is the value of $h(9)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "h(x)"], rows: [["1", "4"], ["5", "16"]] } },
    choices: [
      // distractor: adds 4 to h(5) because x increases by 4, using a rate of 1 instead of 3
      { id: "A", text: "$20$" },
      // distractor: uses the rate 3 but drops the constant, computing 3(9) = 27
      { id: "B", text: "$27$" },
      { id: "C", text: "$28$" },
      // distractor: treats h as proportional to x from the point (1, 4), computing 4(9) = 36
      { id: "D", text: "$36$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The rate is $\\frac{16 - 4}{5 - 1} = 3$, and $x = 9$ is $4$ more than $5$, so $h(9) = 16 + 3(4) = 28$.\n\n**The Full Solution:**\nStep 1: The rate of change of $h$ is $\\frac{16 - 4}{5 - 1} = \\frac{12}{4} = 3$.\nStep 2: Using $h(1) = 4$: $h(x) = 4 + 3(x - 1) = 3x + 1$.\nStep 3: Then $h(9) = 3(9) + 1 = 28$. Check: $h(5) = 3(5) + 1 = 16$, which matches the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): adds $4$ to $h(5)$ because $x$ increases by $4$, using a rate of $1$ instead of $3$.\n* Choice B ($27$): uses the correct rate but leaves off the constant term, computing $3(9)$.\n* Choice D ($36$): assumes $h$ is proportional to $x$ because $h(1) = 4$, computing $4(9)$; the graph of $h$ does not pass through the origin.\n\n**Test Day Takeaway:** For a linear function, find the rate from two points, then step from a known point to the new input.",
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
    question: "$9x - 6 = 5x + 30$\nWhat is the solution to the given equation?",
    choices: [
      // distractor: moves both constants to the wrong side with the wrong signs, getting 4x = -36
      { id: "A", text: "$-9$" },
      // distractor: moves -6 to the right side without changing its sign, getting 4x = 24
      { id: "B", text: "$6$" },
      { id: "C", text: "$9$" },
      // distractor: stops at 4x = 36 without dividing by 4
      { id: "D", text: "$36$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Subtract $5x$ and add $6$: $4x = 36$, so $x = 9$.\n\n**The Full Solution:**\nStep 1: Subtract $5x$ from each side: $4x - 6 = 30$.\nStep 2: Add $6$ to each side: $4x = 36$.\nStep 3: Divide by $4$: $x = 9$. Check: $9(9) - 6 = 75$ and $5(9) + 30 = 75$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): writes $4x = -30 - 6$, changing the signs of both constants when moving them.\n* Choice B ($6$): moves $-6$ to the right side as $-6$, getting $4x = 24$.\n* Choice D ($36$): this is the value of $4x$, not $x$.\n\n**Test Day Takeaway:** Collect the $x$-terms on one side and the constants on the other, changing the sign of each term you move.",
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
    question: "If $3n + 52 = 7n + 12$, what is the value of $n$?",
    choices: [
      // distractor: adds 3n to 7n instead of subtracting, getting 10n = 40
      { id: "A", text: "$4$" },
      { id: "B", text: "$10$" },
      // distractor: adds 12 to 52 instead of subtracting, getting 4n = 64
      { id: "C", text: "$16$" },
      // distractor: stops at 4n = 40 without dividing by 4
      { id: "D", text: "$40$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Subtract $3n$ and $12$ from each side: $40 = 4n$, so $n = 10$.\n\n**The Full Solution:**\nStep 1: Subtract $3n$ from each side: $52 = 4n + 12$.\nStep 2: Subtract $12$ from each side: $40 = 4n$.\nStep 3: Divide by $4$: $n = 10$. Check: $3(10) + 52 = 82$ and $7(10) + 12 = 82$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): adds $3n$ to $7n$, getting $10n = 40$.\n* Choice C ($16$): adds $12$ to $52$ instead of subtracting, getting $4n = 64$.\n* Choice D ($40$): this is the value of $4n$, not $n$.\n\n**Test Day Takeaway:** Move the smaller $n$-term to the side with the larger one so the coefficient stays positive, then isolate $n$.",
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
    question: "$(x - 6)(x + 2) = x^{2} + bx - 12$\nIn the given equation, $b$ is a constant. If the equation is true for all values of $x$, what is the value of $b$?",
    choices: [
      // distractor: uses the product (-6)(2) = -12, which is the constant term, not the x-coefficient
      { id: "A", text: "$-12$" },
      // distractor: adds -6 and -2, losing the plus sign on 2
      { id: "B", text: "$-8$" },
      { id: "C", text: "$-4$" },
      // distractor: computes 6 - 2, reversing both signs
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The $x$-coefficient of $(x - 6)(x + 2)$ is $-6 + 2 = -4$.\n\n**The Full Solution:**\nStep 1: Expand the left side: $(x - 6)(x + 2) = x^{2} + 2x - 6x - 12$.\nStep 2: Combine like terms: $x^{2} - 4x - 12$.\nStep 3: Matching the $x$-coefficients gives $b = -4$. Check: at $x = 1$ the left side is $(-5)(3) = -15$ and the right side is $1 - 4 - 12 = -15$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): this is the product of $-6$ and $2$, the constant term, not the coefficient of $x$.\n* Choice B ($-8$): adds $-6$ and $-2$, dropping the plus sign on $2$.\n* Choice D ($4$): reverses the signs, computing $6 - 2$.\n\n**Test Day Takeaway:** In $(x + p)(x + q)$, the $x$-coefficient is $p + q$ and the constant is $pq$; keep the signs attached.",
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
    question: "$(x + a)(x - 5) = x^{2} + 3x + c$\nIn the given equation, $a$ and $c$ are constants. The equation is true for all values of $x$. What is the value of $c$?",
    choices: [
      { id: "A", text: "$-40$" },
      // distractor: multiplies the x-coefficient 3 by -5 instead of finding a first
      { id: "B", text: "$-15$" },
      // distractor: stops at a = 8 and reports a instead of c
      { id: "C", text: "$8$" },
      // distractor: loses the negative sign, computing (8)(5) = 40
      { id: "D", text: "$40$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The $x$-coefficient gives $a - 5 = 3$, so $a = 8$, and the constant is $c = 8(-5) = -40$.\n\n**The Full Solution:**\nStep 1: Expand the left side: $(x + a)(x - 5) = x^{2} + (a - 5)x - 5a$.\nStep 2: Match the $x$-coefficients: $a - 5 = 3$, so $a = 8$.\nStep 3: Match the constants: $c = -5a = -5(8) = -40$. Check: $(x + 8)(x - 5) = x^{2} + 3x - 40$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-15$): multiplies the $x$-coefficient $3$ by $-5$ instead of using it to find $a$.\n* Choice C ($8$): this is the value of $a$, not $c$.\n* Choice D ($40$): multiplies $8$ by $5$ instead of by $-5$.\n\n**Test Day Takeaway:** Expand once, then match coefficients one degree at a time; the $x$-term usually unlocks the unknown inside the parentheses.",
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
    question: "$3(5x - 2) - 5x = 6x + 22$\nWhat value of $x$ is the solution to the given equation?",
    choices: [
      // distractor: adds 5x instead of subtracting it, getting 14x = 28
      { id: "A", text: "$2$" },
      // distractor: moves -6 to the right side without changing its sign, getting 4x = 16
      { id: "B", text: "$4$" },
      // distractor: multiplies only 5x by 3, getting 10x - 2 = 6x + 22
      { id: "C", text: "$6$" },
      { id: "D", text: "$7$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The left side is $15x - 6 - 5x = 10x - 6$; then $10x - 6 = 6x + 22$ gives $4x = 28$, so $x = 7$.\n\n**The Full Solution:**\nStep 1: Distribute the $3$: $15x - 6 - 5x = 6x + 22$, which simplifies to $10x - 6 = 6x + 22$.\nStep 2: Subtract $6x$ and add $6$ to each side: $4x = 28$.\nStep 3: Divide by $4$: $x = 7$. Check: $3(35 - 2) - 35 = 99 - 35 = 64$ and $6(7) + 22 = 64$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): adds $5x$ instead of subtracting it, getting $20x - 6 = 6x + 22$ and $14x = 28$.\n* Choice B ($4$): moves $-6$ to the right side as $-6$, getting $4x = 16$.\n* Choice C ($6$): multiplies only $5x$ by $3$, getting $10x - 2 = 6x + 22$ and $4x = 24$.\n\n**Test Day Takeaway:** Distribute to every term inside the parentheses and combine like terms on each side before moving anything across the equal sign.",
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
    question: "$\\frac{2x + 9}{3} = x - 4$\nWhat value of $x$ satisfies the given equation?",
    choices: [
      // distractor: reaches -x = -21 and drops one negative sign, reporting x = -21
      { id: "A", text: "$-21$" },
      // distractor: multiplies only x by 3 on the right side, getting 2x + 9 = 3x - 4
      { id: "B", text: "$13$" },
      { id: "C", text: "$21$" },
      // distractor: divides only 2x by 3, getting (2/3)x + 9 = x - 4
      { id: "D", text: "$39$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Multiply both sides by $3$: $2x + 9 = 3x - 12$, so $x = 21$.\n\n**The Full Solution:**\nStep 1: Multiply both sides by $3$: $2x + 9 = 3(x - 4) = 3x - 12$.\nStep 2: Subtract $2x$ from each side and add $12$ to each side: $21 = x$.\nStep 3: So $x = 21$. Check: $\\frac{2(21) + 9}{3} = \\frac{51}{3} = 17$ and $21 - 4 = 17$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-21$): subtracts $3x$ and $9$ correctly to reach $-x = -21$, then drops one negative sign and reports $x = -21$.\n* Choice B ($13$): multiplies only $x$ by $3$ on the right side, getting $2x + 9 = 3x - 4$.\n* Choice D ($39$): divides only $2x$ by $3$, treating the left side as $\\frac{2}{3}x + 9$.\n\n**Test Day Takeaway:** Clear a fraction by multiplying every term on both sides, and put parentheses around a multi-term side before you distribute.",
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
    question: "In the $xy$-plane, line $k$ has the equation $y = -\\frac{4}{7}x + 3$. Line $j$ is perpendicular to line $k$. What is the slope of line $j$?",
    choices: [
      // distractor: takes the reciprocal but keeps the negative sign
      { id: "A", text: "$-\\frac{7}{4}$" },
      // distractor: gives the slope of line k, which is the slope of a parallel line
      { id: "B", text: "$-\\frac{4}{7}$" },
      // distractor: changes the sign but does not take the reciprocal
      { id: "C", text: "$\\frac{4}{7}$" },
      { id: "D", text: "$\\frac{7}{4}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The slope of line $k$ is $-\\frac{4}{7}$; its negative reciprocal is $\\frac{7}{4}$.\n\n**The Full Solution:**\nStep 1: Line $k$ is in slope-intercept form, so its slope is $-\\frac{4}{7}$.\nStep 2: Perpendicular lines have slopes whose product is $-1$, so the slope of line $j$ is the negative reciprocal of $-\\frac{4}{7}$.\nStep 3: Flip the fraction and change the sign: $\\frac{7}{4}$. Check: $-\\frac{4}{7} \\cdot \\frac{7}{4} = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{7}{4}$): takes the reciprocal but keeps the negative sign; the product with $-\\frac{4}{7}$ is $1$, not $-1$.\n* Choice B ($-\\frac{4}{7}$): this is the slope of line $k$ itself, so a line with this slope would be parallel.\n* Choice C ($\\frac{4}{7}$): changes the sign without taking the reciprocal.\n\n**Test Day Takeaway:** A perpendicular slope needs both moves: flip the fraction and change the sign.",
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
    question: "Line $m$ is graphed in the $xy$-plane. Which of the following is the slope of a line perpendicular to line $m$?",
    diagram: { type: "linearGraph", params: { slope: 3, yIntercept: -1, xRange: [-4, 4], yRange: [-6, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, -1], [2, 5]], label: "m" } },
    choices: [
      // distractor: changes the sign of 3 but does not take the reciprocal
      { id: "A", text: "$-3$" },
      { id: "B", text: "$-\\frac{1}{3}$" },
      // distractor: takes the reciprocal of 3 but does not change the sign
      { id: "C", text: "$\\frac{1}{3}$" },
      // distractor: gives the slope of line m, which is the slope of a parallel line
      { id: "D", text: "$3$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Line $m$ rises $6$ units over a run of $2$, so its slope is $3$; the negative reciprocal is $-\\frac{1}{3}$.\n\n**The Full Solution:**\nStep 1: Line $m$ passes through the marked points $(0, -1)$ and $(2, 5)$.\nStep 2: Its slope is $\\frac{5 - (-1)}{2 - 0} = \\frac{6}{2} = 3$.\nStep 3: The slope of a perpendicular line is the negative reciprocal: $-\\frac{1}{3}$. Check: $3 \\cdot \\left(-\\frac{1}{3}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): changes the sign without taking the reciprocal; the product with $3$ is $-9$, not $-1$.\n* Choice C ($\\frac{1}{3}$): takes the reciprocal but keeps the positive sign.\n* Choice D ($3$): this is the slope of line $m$, so a line with this slope would be parallel to it.\n\n**Test Day Takeaway:** Read the slope from two marked points first, then flip the fraction and change the sign.",
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
    question: "$y = 9 - \\frac{2}{3}x$\nWhat is the $y$-coordinate of the $y$-intercept of the graph of the given equation in the $xy$-plane?",
    choices: [
      // distractor: gives the constant the sign of the x-term when rewriting the equation
      { id: "A", text: "$-9$" },
      // distractor: reports the slope, the coefficient of x, instead of the y-intercept
      { id: "B", text: "$-\\frac{2}{3}$" },
      { id: "C", text: "$9$" },
      // distractor: finds the x-intercept, where y = 0, instead of the y-intercept
      { id: "D", text: "$\\frac{27}{2}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** At $x = 0$ the equation gives $y = 9$.\n\n**The Full Solution:**\nStep 1: The $y$-intercept is where the graph crosses the $y$-axis, which is where $x = 0$.\nStep 2: Substitute $x = 0$: $y = 9 - \\frac{2}{3}(0) = 9$.\nStep 3: So the $y$-intercept is $(0, 9)$, and its $y$-coordinate is $9$. Check: rewriting the equation as $y = -\\frac{2}{3}x + 9$ shows $b = 9$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): rewrites the equation as $y = -\\frac{2}{3}x - 9$, giving the constant the sign of the $x$-term.\n* Choice B ($-\\frac{2}{3}$): this is the slope, the coefficient of $x$.\n* Choice D ($\\frac{27}{2}$): this is the $x$-intercept, found by setting $y = 0$.\n\n**Test Day Takeaway:** The terms of $y = mx + b$ can appear in either order; the $y$-intercept is always the value of $y$ when $x = 0$.",
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
    question: "The equation $h = 2.5w + 18$ gives the height $h$, in centimeters, of a plant $w$ weeks after it was first measured. What is the best interpretation of $2.5$ in this context?",
    choices: [
      // distractor: treats the slope as the starting height, which is the role of 18
      { id: "A", text: "The plant was $2.5$ centimeters tall when it was first measured." },
      // distractor: treats 2.5 as an input value of w and 18 as the matching output
      { id: "B", text: "The plant was $18$ centimeters tall after $2.5$ weeks." },
      { id: "C", text: "The plant's height increased by $2.5$ centimeters each week." },
      // distractor: attaches the constant 18 to the rate as a number of weeks
      { id: "D", text: "The plant's height increased by $2.5$ centimeters every $18$ weeks." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $2.5$ is the coefficient of $w$, so it is the change in height for each additional week.\n\n**The Full Solution:**\nStep 1: In $h = 2.5w + 18$, the coefficient $2.5$ multiplies the number of weeks $w$.\nStep 2: Each time $w$ increases by $1$, $h$ increases by $2.5$, so $2.5$ is the growth, in centimeters, per week.\nStep 3: The constant $18$ is the height when $w = 0$, the height when the plant was first measured. Check: $h(1) - h(0) = 20.5 - 18 = 2.5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (The plant was $2.5$ centimeters tall…): the starting height is the value of $h$ when $w = 0$, which is $18$, not $2.5$.\n* Choice B (The plant was $18$ centimeters tall after $2.5$ weeks.): after $2.5$ weeks the height is $2.5(2.5) + 18 = 24.25$ centimeters; $18$ is the starting height.\n* Choice D (…every $18$ weeks.): the growth of $2.5$ centimeters happens each week; $18$ is a height, not a number of weeks.\n\n**Test Day Takeaway:** In a linear model, the coefficient of the input is the change per one unit of the input; the constant is the value when the input is $0$.",
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
    question: "$|x + 4| = 9$\nWhat are the solutions to the given equation?",
    choices: [
      { id: "A", text: "$-13$ and $5$" },
      // distractor: solves |x| = 9 and ignores the + 4 inside the bars
      { id: "B", text: "$-9$ and $9$" },
      // distractor: subtracts 4 from -9 and 9 with the sign reversed, solving x - 4 = 9 and x - 4 = -9
      { id: "C", text: "$-5$ and $13$" },
      // distractor: solves only x + 4 = 9 and drops the negative case
      { id: "D", text: "$5$ only" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $x + 4 = 9$ gives $x = 5$, and $x + 4 = -9$ gives $x = -13$.\n\n**The Full Solution:**\nStep 1: An absolute value equals $9$ when the expression inside is $9$ or $-9$.\nStep 2: Case 1: $x + 4 = 9$, so $x = 5$. Case 2: $x + 4 = -9$, so $x = -13$.\nStep 3: The solutions are $-13$ and $5$. Check: $|5 + 4| = 9$ and $|-13 + 4| = |-9| = 9$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-9$ and $9$): these solve $|x| = 9$; the $+4$ inside the bars shifts both solutions.\n* Choice C ($-5$ and $13$): these solve $|x - 4| = 9$, which has the opposite shift.\n* Choice D ($5$ only): solves only the positive case and misses $x + 4 = -9$.\n\n**Test Day Takeaway:** Split an absolute value equation into two cases, positive and negative, and solve both.",
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
    question: "$|3x - 12| = 15$\nWhat is the sum of the solutions to the given equation?",
    choices: [
      // distractor: finds the x-value where 3x - 12 = 0 instead of adding the two solutions
      { id: "A", text: "$4$" },
      { id: "B", text: "$8$" },
      // distractor: solves only 3x - 12 = 15 and reports that single solution
      { id: "C", text: "$9$" },
      // distractor: writes the negative case as 3x + 12 = 15, getting 9 and 1
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The solutions are $9$ and $-1$, so their sum is $8$.\n\n**The Full Solution:**\nStep 1: Case 1: $3x - 12 = 15$, so $3x = 27$ and $x = 9$.\nStep 2: Case 2: $3x - 12 = -15$, so $3x = -3$ and $x = -1$.\nStep 3: The sum is $9 + (-1) = 8$. Check: $|27 - 12| = 15$ and $|-3 - 12| = 15$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): this is where $3x - 12 = 0$, the midpoint of the two solutions, not their sum.\n* Choice C ($9$): this is only the solution from the positive case.\n* Choice D ($10$): rewrites the negative case as $3x + 12 = 15$ instead of $3x - 12 = -15$, getting $x = 1$.\n\n**Test Day Takeaway:** The two solutions of $|ax - b| = c$ sit symmetrically around $\\frac{b}{a}$, so their sum is $\\frac{2b}{a}$; solve both cases to be sure.",
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
    question: "$3|x + 2| = 21$\nWhich value is a solution to the given equation?",
    choices: [
      // distractor: solves x + 2 = -7 as x = -7 + 2 = -5, adding 2 instead of subtracting it
      { id: "A", text: "$-5$" },
      { id: "B", text: "$5$" },
      // distractor: stops at |x + 2| = 7 and reports 7
      { id: "C", text: "$7$" },
      // distractor: subtracts 2 from 21 without first dividing by 3
      { id: "D", text: "$19$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Divide by $3$: $|x + 2| = 7$, so $x + 2 = 7$ or $x + 2 = -7$, giving $x = 5$ or $x = -9$. Only $5$ is a choice.\n\n**The Full Solution:**\nStep 1: Divide both sides by $3$: $|x + 2| = 7$.\nStep 2: The expression inside the bars is $7$ or $-7$: $x + 2 = 7$ gives $x = 5$, and $x + 2 = -7$ gives $x = -9$.\nStep 3: Of these, only $5$ appears among the choices. Check: $3|5 + 2| = 3(7) = 21$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): solves $x + 2 = -7$ by adding $2$ instead of subtracting it; $3|-5 + 2| = 9$.\n* Choice C ($7$): stops at $|x + 2| = 7$ and reports the value of the absolute value, not $x$.\n* Choice D ($19$): subtracts $2$ from $21$ before dividing by $3$; $3|19 + 2| = 63$.\n\n**Test Day Takeaway:** Isolate the absolute value first, then split it into the positive and negative cases.",
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
    question: "$2|x + 3| - 5 = 13$\nWhat is the positive solution to the given equation?",
    choices: [
      // distractor: subtracts 5 instead of adding it, getting 2|x + 3| = 8
      { id: "A", text: "$1$" },
      { id: "B", text: "$6$" },
      // distractor: reports the absolute value of the negative solution, -12
      { id: "C", text: "$12$" },
      // distractor: forgets to divide by 2, solving |x + 3| = 18
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $2|x + 3| = 18$, so $|x + 3| = 9$; then $x = 6$ or $x = -12$, and the positive solution is $6$.\n\n**The Full Solution:**\nStep 1: Add $5$ to each side: $2|x + 3| = 18$. Divide by $2$: $|x + 3| = 9$.\nStep 2: Then $x + 3 = 9$ or $x + 3 = -9$, so $x = 6$ or $x = -12$.\nStep 3: The positive solution is $6$. Check: $2|6 + 3| - 5 = 2(9) - 5 = 13$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): subtracts $5$ from $13$ instead of adding, getting $|x + 3| = 4$ and $x = 1$.\n* Choice C ($12$): drops the negative sign from the other solution, $-12$, which is not positive.\n* Choice D ($15$): skips dividing by $2$, solving $|x + 3| = 18$.\n\n**Test Day Takeaway:** Isolate the absolute value completely, undoing the constant and then the coefficient, before splitting into cases.",
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
    question: "If $|2x - 7| = 13$ and $x < 0$, what is the value of $x$?",
    choices: [
      // distractor: subtracts 7 instead of adding it in the negative case, getting 2x = -20
      { id: "A", text: "$-10$" },
      { id: "B", text: "$-3$" },
      // distractor: drops the negative sign from the solution -3
      { id: "C", text: "$3$" },
      // distractor: solves only the positive case and ignores the condition x < 0
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The negative case $2x - 7 = -13$ gives $2x = -6$, so $x = -3$.\n\n**The Full Solution:**\nStep 1: The equation gives $2x - 7 = 13$ or $2x - 7 = -13$.\nStep 2: The first case gives $x = 10$ and the second gives $2x = -6$, so $x = -3$.\nStep 3: Only $-3$ satisfies $x < 0$. Check: $|2(-3) - 7| = |-13| = 13$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-10$): subtracts $7$ in the negative case, getting $2x = -20$.\n* Choice C ($3$): this is the opposite of the solution $-3$; $|2(3) - 7| = 1$, not $13$.\n* Choice D ($10$): this solves the positive case, but $10$ is not less than $0$.\n\n**Test Day Takeaway:** When a condition such as $x < 0$ is given, solve both cases and then keep only the solution that meets the condition.",
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
    question: "$|2x - 9| = k$\nIn the given equation, $k$ is a positive constant. What is the sum of the solutions to the given equation?",
    choices: [
      // distractor: treats the two solutions as opposites, as for |x| = k, so they appear to cancel to 0
      { id: "A", text: "$0$" },
      // distractor: finds the average of the two solutions instead of their sum
      { id: "B", text: "$\\frac{9}{2}$" },
      { id: "C", text: "$9$" },
      // distractor: adds the two values of 2x, (9 + k) + (9 - k), without dividing by 2
      { id: "D", text: "$18$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The solutions are $\\frac{9 + k}{2}$ and $\\frac{9 - k}{2}$; the $k$ terms cancel when they are added, so the sum is $\\frac{18}{2} = 9$.\n\n**The Full Solution:**\nStep 1: Since $k > 0$, the equation splits into $2x - 9 = k$ and $2x - 9 = -k$.\nStep 2: Solve each: $x = \\frac{9 + k}{2}$ and $x = \\frac{9 - k}{2}$.\nStep 3: Add: $\\frac{9 + k}{2} + \\frac{9 - k}{2} = \\frac{18}{2} = 9$. Check with $k = 3$: $|2x - 9| = 3$ gives $x = 6$ and $x = 3$, and $6 + 3 = 9$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): treats the solutions as opposites, as for $|x| = k$, but here they are centered at $\\frac{9}{2}$, not at $0$.\n* Choice B ($\\frac{9}{2}$): is the average of the two solutions (the center), not their sum.\n* Choice D ($18$): adds the two values of $2x$, $(9 + k) + (9 - k)$, and forgets to divide by $2$.\n\n**Test Day Takeaway:** The two solutions of an absolute value equation sit the same distance on either side of the center, so their sum does not depend on that distance.",
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
    question: "$x = 3y - 7$\n$2x + y = 28$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x$?",
    choices: [
      // distractor: writes 2(3y - 7) as 6y + 14, getting y = 2 and x = -1
      { id: "A", text: "$-1$" },
      // distractor: reports the value of y instead of x
      { id: "B", text: "$6$" },
      // distractor: multiplies only 3y by 2, getting 7y - 7 = 28, y = 5, and x = 8
      { id: "C", text: "$8$" },
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Substitute: $2(3y - 7) + y = 28$ gives $7y = 42$, so $y = 6$ and $x = 3(6) - 7 = 11$.\n\n**The Full Solution:**\nStep 1: Substitute $3y - 7$ for $x$ in the second equation: $2(3y - 7) + y = 28$.\nStep 2: Simplify: $6y - 14 + y = 28$, so $7y = 42$ and $y = 6$.\nStep 3: Then $x = 3(6) - 7 = 11$. Check: $2(11) + 6 = 28$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1$): distributes $2(3y - 7)$ as $6y + 14$, getting $y = 2$ and $x = -1$.\n* Choice B ($6$): this is the value of $y$, not $x$.\n* Choice C ($8$): multiplies only $3y$ by $2$, getting $7y - 7 = 28$, so $y = 5$ and $x = 8$.\n\n**Test Day Takeaway:** After substituting an expression, put it in parentheses so the coefficient multiplies every term.",
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
    question: "$y = 4x + 3$\n$y = 7x - 9$\nIf $(x, y)$ is the solution to the given system of equations, what is the value of $y$?",
    choices: [
      // distractor: makes a sign error, getting -3x = 12 and x = -4
      { id: "A", text: "$-13$" },
      // distractor: reports the value of x instead of y
      { id: "B", text: "$4$" },
      { id: "C", text: "$19$" },
      // distractor: substitutes x = 4 into 7x and drops the -9
      { id: "D", text: "$28$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Set $4x + 3 = 7x - 9$: $12 = 3x$, so $x = 4$ and $y = 4(4) + 3 = 19$.\n\n**The Full Solution:**\nStep 1: Both equations give $y$, so set them equal: $4x + 3 = 7x - 9$.\nStep 2: Subtract $4x$ and add $9$: $12 = 3x$, so $x = 4$.\nStep 3: Then $y = 4(4) + 3 = 19$. Check: $7(4) - 9 = 19$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-13$): writes $-3x = 12$ instead of $-3x = -12$, getting $x = -4$ and $y = -13$.\n* Choice B ($4$): this is the value of $x$, not $y$.\n* Choice D ($28$): computes $7(4)$ and leaves off the $-9$.\n\n**Test Day Takeaway:** When both equations are solved for $y$, set the right sides equal, then substitute back to get $y$.",
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
    question: "$y = 3x - 7$\n$5x - 2y = 9$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x + y$?",
    choices: [
      // distractor: reports the value of x instead of x + y
      { id: "A", text: "$5$" },
      // distractor: reports the value of y instead of x + y
      { id: "B", text: "$8$" },
      { id: "C", text: "$13$" },
      // distractor: multiplies x and y instead of adding them
      { id: "D", text: "$40$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Substitute: $5x - 2(3x - 7) = 9$ gives $-x + 14 = 9$, so $x = 5$, $y = 8$, and $x + y = 13$.\n\n**The Full Solution:**\nStep 1: Substitute $3x - 7$ for $y$: $5x - 2(3x - 7) = 9$, which is $5x - 6x + 14 = 9$.\nStep 2: Then $-x + 14 = 9$, so $x = 5$, and $y = 3(5) - 7 = 8$.\nStep 3: So $x + y = 5 + 8 = 13$. Check: $5(5) - 2(8) = 25 - 16 = 9$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): this is the value of $x$ alone.\n* Choice B ($8$): this is the value of $y$ alone.\n* Choice D ($40$): this is $xy$, not $x + y$.\n\n**Test Day Takeaway:** Distribute a negative coefficient to every term of the substituted expression, and answer the quantity the question asks for.",
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
    question: "$y = \\frac{1}{2}x + 4$\n$3x - 4y = 2$\nIf $(x, y)$ is the solution to the given system of equations, what is the value of $y$?",
    choices: [
      // distractor: distributes -4 as -2x + 16, getting x = -14 and y = -3
      { id: "A", text: "$-3$" },
      // distractor: multiplies only (1/2)x by 4, getting x - 4 = 2, x = 6, and y = 7
      { id: "B", text: "$7$" },
      { id: "C", text: "$13$" },
      // distractor: reports the value of x instead of y
      { id: "D", text: "$18$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Substitute: $3x - 4(\\frac{1}{2}x + 4) = 2$ gives $x - 16 = 2$, so $x = 18$ and $y = 13$.\n\n**The Full Solution:**\nStep 1: Substitute $\\frac{1}{2}x + 4$ for $y$: $3x - 4\\left(\\frac{1}{2}x + 4\\right) = 2$.\nStep 2: Distribute: $3x - 2x - 16 = 2$, so $x = 18$.\nStep 3: Then $y = \\frac{1}{2}(18) + 4 = 13$. Check: $3(18) - 4(13) = 54 - 52 = 2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): distributes $-4$ as $-2x + 16$, getting $x = -14$ and $y = -3$.\n* Choice B ($7$): multiplies only $\\frac{1}{2}x$ by $4$, getting $x - 4 = 2$, so $x = 6$ and $y = 7$.\n* Choice D ($18$): this is the value of $x$, not $y$.\n\n**Test Day Takeaway:** Multiply every term of a substituted expression by the coefficient in front of it, including the constant, and keep the sign.",
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
    question: "Lena spent \\$70 on pens that cost \\$2 each and notebooks that cost \\$5 each. She bought $7$ more pens than notebooks. How many notebooks did Lena buy?",
    choices: [
      { id: "A", text: "$8$" },
      // distractor: writes the pen cost as 2n + 7 instead of 2(n + 7), getting 7n = 63
      { id: "B", text: "$9$" },
      // distractor: reports the number of pens instead of notebooks
      { id: "C", text: "$15$" },
      // distractor: reports the total number of items bought
      { id: "D", text: "$23$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** With $n$ notebooks, $2(n + 7) + 5n = 70$, so $7n = 56$ and $n = 8$.\n\n**The Full Solution:**\nStep 1: Let $n$ be the number of notebooks; then she bought $n + 7$ pens.\nStep 2: The total cost gives $2(n + 7) + 5n = 70$, so $7n + 14 = 70$ and $7n = 56$.\nStep 3: So $n = 8$ notebooks. Check: $15$ pens cost \\$30 and $8$ notebooks cost \\$40, for a total of \\$70 ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): multiplies only $n$ by $2$, writing the pen cost as $2n + 7$, which gives $7n = 63$.\n* Choice C ($15$): this is the number of pens, $8 + 7$.\n* Choice D ($23$): this is the total number of items, $8 + 15$.\n\n**Test Day Takeaway:** Write one quantity in terms of the other, substitute it into the total equation, and check which quantity the question asks for.",
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
    question: "The line shown in the $xy$-plane is the graph of one equation in a system of two linear equations. The other equation in the system is $3x + 2y = 18$. If $(x, y)$ is the solution to the system, what is the value of $x + y$?",
    diagram: { type: "linearGraph", params: { slope: 0.5, yIntercept: 1, xRange: [-6, 10], yRange: [-4, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1 } },
    choices: [
      // distractor: reports the value of y, not x + y
      { id: "A", text: "$3$" },
      // distractor: reports the value of x, not x + y
      { id: "B", text: "$4$" },
      // distractor: reads the slope of the line shown as -1/2, solving 3x + 2(-x/2 + 1) = 18 to get (8, -3)
      { id: "C", text: "$5$" },
      { id: "D", text: "$7$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice D is correct.**\n\n**The Fast Way (~50s):** The line shown is $y = \\frac{1}{2}x + 1$; substituting into $3x + 2y = 18$ gives $4x + 2 = 18$, so $x = 4$, $y = 3$, and $x + y = 7$.\n\n**The Full Solution:**\nStep 1: The line shown crosses the $y$-axis at $(0, 1)$ and rises $1$ unit for every $2$ units to the right, so its equation is $y = \\frac{1}{2}x + 1$.\nStep 2: Substitute into the other equation: $3x + 2\\left(\\frac{1}{2}x + 1\\right) = 18$, so $4x + 2 = 18$ and $x = 4$.\nStep 3: Then $y = \\frac{1}{2}(4) + 1 = 3$, so $x + y = 4 + 3 = 7$. Check: $3(4) + 2(3) = 18$, and the line passes through $(4, 3)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): is the value of $y$, not $x + y$.\n* Choice B ($4$): is the value of $x$, not $x + y$.\n* Choice C ($5$): reads the slope as $-\\frac{1}{2}$, so $3x + 2\\left(-\\frac{1}{2}x + 1\\right) = 18$ gives $(8, -3)$ and a sum of $5$.\n\n**Test Day Takeaway:** Turn a graphed line into an equation (intercept and slope), substitute it into the other equation, and answer the exact quantity the question asks for.",
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
    question: "Line $p$ is shown in the $xy$-plane. Line $q$ is the graph of $y = mx - 4$, where $m$ is a constant. The system of equations for lines $p$ and $q$ has no solution. What is the value of $m$?",
    diagram: { type: "linearGraph", params: { slope: -2, yIntercept: 6, xRange: [-2, 6], yRange: [-6, 10], gridInterval: 1, xTickInterval: 2, yTickInterval: 2, label: "p" } },
    choices: [
      { id: "A", text: "$-2$" },
      // distractor: takes the reciprocal of the slope of line p
      { id: "B", text: "$-\\frac{1}{2}$" },
      // distractor: uses the negative reciprocal, which gives a perpendicular line
      { id: "C", text: "$\\frac{1}{2}$" },
      // distractor: reads the slope of line p with the wrong sign
      { id: "D", text: "$2$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** No solution means parallel lines; line $p$ falls $2$ units for each unit to the right, so $m = -2$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has no solution when the lines are parallel and distinct, so line $q$ must have the same slope as line $p$.\nStep 2: Line $p$ passes through $(0, 6)$ and $(3, 0)$, so its slope is $\\frac{0 - 6}{3 - 0} = -2$.\nStep 3: So $m = -2$. Check: line $p$ is $y = -2x + 6$ and line $q$ is $y = -2x - 4$; same slope, different $y$-intercepts, so they never meet ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{1}{2}$): divides the run by the rise, inverting the slope of line $p$.\n* Choice C ($\\frac{1}{2}$): is the negative reciprocal of $-2$, the slope of a perpendicular line, which would intersect line $p$.\n* Choice D ($2$): line $p$ falls from left to right, so its slope is negative.\n\n**Test Day Takeaway:** No solution means the lines are parallel: same slope, different $y$-intercepts.",
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
    question: "The table shows three pairs of values of $x$ and $y$ that satisfy a linear equation. A system made of this equation and one other linear equation has no solution. Which of the following could be the other equation?",
    questionTable: { headers: ["$x$", "$y$"], rows: [["$0$", "$5$"], ["$1$", "$3$"], ["$4$", "$-3$"]] },
    choices: [
      // distractor: keeps the y-intercept but changes the slope, so the lines intersect at (0, 5)
      { id: "A", text: "$y = -5x + 5$" },
      { id: "B", text: "$y = -2x - 4$" },
      // distractor: gives the same line as the table, so the system would have infinitely many solutions
      { id: "C", text: "$y = -2x + 5$" },
      // distractor: changes the sign of the slope, which gives a line that crosses the first one
      { id: "D", text: "$y = 2x + 5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The table's line is $y = -2x + 5$; a parallel line with a different $y$-intercept, such as $y = -2x - 4$, gives no solution.\n\n**The Full Solution:**\nStep 1: From the table, $y$ decreases by $2$ when $x$ increases by $1$, so the slope is $-2$, and $y = 5$ when $x = 0$. The first equation is $y = -2x + 5$.\nStep 2: A system has no solution when the lines have the same slope and different $y$-intercepts.\nStep 3: Only $y = -2x - 4$ has slope $-2$ and a $y$-intercept other than $5$. Check: $-2x + 5 = -2x - 4$ reduces to $5 = -4$, which is false ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -5x + 5$): has a different slope, so the lines intersect at $(0, 5)$.\n* Choice C ($y = -2x + 5$): is the same line as the table's, which gives infinitely many solutions.\n* Choice D ($y = 2x + 5$): has the opposite slope, so it crosses the first line at $(0, 5)$.\n\n**Test Day Takeaway:** For no solution, match the slope and change the $y$-intercept; matching both gives infinitely many solutions.",
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
    question: "$6x + ky = 15$\nIn the given equation, $k$ is a constant. In the $xy$-plane, the graph of the given equation has no points in common with line $j$, shown. What is the value of $k$?",
    diagram: { type: "linearGraph", params: { slope: -2, yIntercept: 1, xRange: [-6, 6], yRange: [-8, 10], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[-3, 7], [3, -5]], label: "j" } },
    choices: [
      // distractor: solves 6/k = -2, losing the minus sign that comes from moving 6x to the other side
      { id: "A", text: "$-3$" },
      // distractor: reports the y-intercept of line j instead of the constant k
      { id: "B", text: "$1$" },
      { id: "C", text: "$3$" },
      // distractor: multiplies 6 by 2 instead of dividing 6 by 2
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Line $j$ has slope $\\frac{-5 - 7}{3 - (-3)} = -2$, and the given line has slope $-\\frac{6}{k}$, so $-\\frac{6}{k} = -2$ and $k = 3$.\n\n**The Full Solution:**\nStep 1: Line $j$ passes through $(-3, 7)$ and $(3, -5)$, so it has slope $\\frac{-5 - 7}{3 - (-3)} = \\frac{-12}{6} = -2$ and equation $y = -2x + 1$.\nStep 2: Solve the given equation for $y$: $ky = -6x + 15$, so $y = -\\frac{6}{k}x + \\frac{15}{k}$.\nStep 3: Lines with no points in common are parallel and distinct, so $-\\frac{6}{k} = -2$, which gives $k = 3$. Check: $6x + 3y = 15$ becomes $y = -2x + 5$, which has slope $-2$ and $y$-intercept $5 \\neq 1$, so it never meets line $j$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): solves $\\frac{6}{k} = -2$, dropping the minus sign produced by moving $6x$ to the other side.\n* Choice B ($1$): is the $y$-intercept of line $j$, not the constant $k$.\n* Choice D ($12$): multiplies $6$ by $2$ instead of dividing $6$ by $2$.\n\n**Test Day Takeaway:** Two lines with no points in common have equal slopes and different intercepts; read the slope from the graph, then match it to $-\\frac{A}{B}$ for the equation in standard form.",
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
    question: "$ax - 6y = 30$\nIn the given equation, $a$ is a constant. A system of two linear equations consists of the given equation and the equation of line $g$, shown. If the system has no solution, what is the value of $a$?",
    diagram: { type: "linearGraph", params: { slope: 0.3333333333333333, yIntercept: -2, xRange: [-6, 12], yRange: [-6, 4], gridInterval: 1, xTickInterval: 3, yTickInterval: 2, label: "g" } },
    choices: [
      // distractor: solves -6y = -ax + 30 as y = -(a/6)x - 5, losing a sign, so -(a/6) = 1/3
      { id: "A", text: "$-2$" },
      // distractor: sets a equal to the slope of line g without accounting for the coefficient -6 on y
      { id: "B", text: "$\\frac{1}{3}$" },
      { id: "C", text: "$2$" },
      // distractor: uses the reciprocal of the slope, solving a/6 = 3
      { id: "D", text: "$18$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Line $g$ has slope $\\frac{1}{3}$, and the given line has slope $\\frac{a}{6}$, so $\\frac{a}{6} = \\frac{1}{3}$ and $a = 2$.\n\n**The Full Solution:**\nStep 1: Line $g$ passes through $(0, -2)$ and $(6, 0)$, so its slope is $\\frac{0 - (-2)}{6 - 0} = \\frac{1}{3}$ and its $y$-intercept is $(0, -2)$.\nStep 2: Solve the given equation for $y$: $-6y = -ax + 30$, so $y = \\frac{a}{6}x - 5$.\nStep 3: No solution means the lines are parallel and distinct, so $\\frac{a}{6} = \\frac{1}{3}$ and $a = 2$. Check: $2x - 6y = 30$ becomes $y = \\frac{1}{3}x - 5$, the same slope as line $g$ with a different $y$-intercept ($-5 \\neq -2$) ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): loses a sign when dividing by $-6$, writing the slope as $-\\frac{a}{6}$.\n* Choice B ($\\frac{1}{3}$): sets $a$ equal to the slope of line $g$, ignoring the coefficient $-6$ on $y$.\n* Choice D ($18$): uses the reciprocal of the slope, solving $\\frac{a}{6} = 3$.\n\n**Test Day Takeaway:** For no solution, rewrite each line in slope-intercept form, set the slopes equal, and confirm the intercepts differ.",
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
    question: "The table shows three values of $x$ and their corresponding values of $y$ for line $n$ in the $xy$-plane. The graph of $y - 5 = k(x - 2)$, where $k$ is a constant, has no points in common with line $n$. What is the value of $k$?",
    questionTable: { headers: ["$x$", "$y$"], rows: [["$2$", "$1$"], ["$5$", "$7$"], ["$8$", "$13$"]] },
    choices: [
      // distractor: divides the change in x by the change in y (3/6), inverting the slope
      { id: "A", text: "$\\frac{1}{2}$" },
      { id: "B", text: "$2$" },
      // distractor: reports the change in x between consecutive rows of the table
      { id: "C", text: "$3$" },
      // distractor: reports the change in y between consecutive rows without dividing by the change in x
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Line $n$ has slope $\\frac{7 - 1}{5 - 2} = 2$, and the graph of $y - 5 = k(x - 2)$ has slope $k$, so $k = 2$.\n\n**The Full Solution:**\nStep 1: From the table, $y$ increases by $6$ each time $x$ increases by $3$, so line $n$ has slope $\\frac{6}{3} = 2$ and equation $y = 2x - 3$.\nStep 2: The equation $y - 5 = k(x - 2)$ is in point-slope form: its graph has slope $k$ and passes through $(2, 5)$.\nStep 3: Lines with no points in common are parallel, so $k = 2$. They are distinct, because line $n$ contains $(2, 1)$, not $(2, 5)$. Check: $y - 5 = 2(x - 2)$ gives $y = 2x + 1$, which has the same slope as $y = 2x - 3$ and a different $y$-intercept ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{2}$): divides the change in $x$ by the change in $y$, which inverts the slope.\n* Choice C ($3$): is the change in $x$ between consecutive rows, not the slope.\n* Choice D ($6$): is the change in $y$ between consecutive rows, not divided by the change in $x$.\n\n**Test Day Takeaway:** In point-slope form $y - y_1 = k(x - x_1)$, the constant $k$ is the slope; parallel lines share a slope.",
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
    question: "$6x - 8y = c$\nIn the given equation, $c$ is a constant. A system of two linear equations consists of the given equation and the equation of line $\\ell$, shown. If the system has no solution, which of the following CANNOT be the value of $c$?",
    diagram: { type: "linearGraph", params: { slope: 0.75, yIntercept: 1, xRange: [-8, 8], yRange: [-6, 8], gridInterval: 1, xTickInterval: 2, yTickInterval: 2, label: "ℓ" } },
    choices: [
      { id: "A", text: "$-8$" },
      // distractor: writes line l as 3x - 4y = -4 and forgets to double the constant along with the coefficients; c = -4 gives a parallel, distinct line, so it is possible
      { id: "B", text: "$-4$" },
      // distractor: doubles the constant of 3x - 4y = -4 but drops its sign; c = 4 gives a parallel, distinct line, so it is possible
      { id: "C", text: "$4$" },
      // distractor: reads the y-intercept as -1 instead of 1; c = 8 gives a parallel, distinct line, so it is possible
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** Line $\\ell$ is $y = \\frac{3}{4}x + 1$, which is equivalent to $6x - 8y = -8$. Every value of $c$ gives a line parallel to $\\ell$, but $c = -8$ gives line $\\ell$ itself, so that system has infinitely many solutions, not zero.\n\n**The Full Solution:**\nStep 1: Line $\\ell$ passes through $(0, 1)$ and $(4, 4)$, so its slope is $\\frac{3}{4}$ and its equation is $y = \\frac{3}{4}x + 1$. Multiplying by $8$ and rearranging gives $6x - 8y = -8$.\nStep 2: Solving the given equation for $y$ gives $y = \\frac{3}{4}x - \\frac{c}{8}$. Its slope is $\\frac{3}{4}$ for every value of $c$, so its graph is always parallel to line $\\ell$ or is line $\\ell$.\nStep 3: The two lines coincide when $-\\frac{c}{8} = 1$, that is, when $c = -8$. Then the system has infinitely many solutions, so $c$ cannot be $-8$. Check: $c = 8$ gives $y = \\frac{3}{4}x - 1$, a parallel line with a different $y$-intercept, so that system has no solution, as do $c = -4$ and $c = 4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-4$): comes from writing line $\\ell$ as $3x - 4y = -4$ and not doubling the constant. With $c = -4$ the line is $y = \\frac{3}{4}x + \\frac{1}{2}$, parallel and distinct, so the system has no solution.\n* Choice C ($4$): doubles the coefficients but drops the sign of the constant. With $c = 4$ the line is $y = \\frac{3}{4}x - \\frac{1}{2}$, parallel and distinct.\n* Choice D ($8$): reads the $y$-intercept of line $\\ell$ as $-1$. With $c = 8$ the line is $y = \\frac{3}{4}x - 1$, parallel and distinct.\n\n**Test Day Takeaway:** Equal slopes alone do not guarantee no solution: if the intercepts also match, the two equations describe the same line and the system has infinitely many solutions.",
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
    question: "The table shows the number of visitors to a museum on one day. What is the value of $a$?",
    questionTable: { headers: ["Part of day", "Visitors"], rows: [["Before noon", "$a$"], ["After noon", "$258$"], ["Total", "$741$"]] },
    choices: [
      // distractor: reports the number of visitors after noon
      { id: "A", text: "$258$" },
      { id: "B", text: "$483$" },
      // distractor: reports the total for the day
      { id: "C", text: "$741$" },
      // distractor: adds 258 and 741 instead of subtracting
      { id: "D", text: "$999$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The two parts add to the total, so $a + 258 = 741$ and $a = 741 - 258 = 483$.\n\n**The Full Solution:**\nStep 1: The visitors before noon and after noon make up the day's total, so $a + 258 = 741$.\nStep 2: Subtract $258$ from each side: $a = 741 - 258$.\nStep 3: Compute: $a = 483$. Check: $483 + 258 = 741$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($258$): is the number of visitors after noon, not before noon.\n* Choice C ($741$): is the total for the day, not the part before noon.\n* Choice D ($999$): adds $258$ to $741$ instead of subtracting it.\n\n**Test Day Takeaway:** When a table gives parts and a total, write part + part = total and undo the addition with one subtraction.",
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
    question: "$\\frac{c}{24} = 35$\nWhat value of $c$ is the solution to the given equation?",
    choices: [
      // distractor: divides 35 by 24 instead of multiplying
      { id: "A", text: "$\\frac{35}{24}$" },
      // distractor: subtracts 24 from 35 instead of multiplying
      { id: "B", text: "$11$" },
      // distractor: adds 24 to 35 instead of multiplying
      { id: "C", text: "$59$" },
      { id: "D", text: "$840$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Multiply each side by $24$: $c = 35(24) = 840$.\n\n**The Full Solution:**\nStep 1: The variable $c$ is divided by $24$, so undo the division by multiplying each side by $24$.\nStep 2: This gives $c = 35 \\cdot 24$.\nStep 3: Compute: $c = 840$. Check: $\\frac{840}{24} = 35$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{35}{24}$): divides $35$ by $24$, which repeats the division instead of undoing it.\n* Choice B ($11$): subtracts $24$ from $35$, treating the division as a subtraction.\n* Choice C ($59$): adds $24$ to $35$, treating the division as a subtraction to undo.\n\n**Test Day Takeaway:** Undo the operation applied to the variable with its inverse: division by $24$ is undone by multiplication by $24$.",
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
    question: "If $9t = 153$, what is the value of $3t$?",
    choices: [
      // distractor: finds the value of t, not 3t
      { id: "A", text: "$17$" },
      { id: "B", text: "$51$" },
      // distractor: subtracts 9 from 153 instead of dividing
      { id: "C", text: "$144$" },
      // distractor: multiplies 153 by 3 instead of dividing by 3
      { id: "D", text: "$459$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Since $3t$ is one-third of $9t$, divide both sides by $3$: $3t = \\frac{153}{3} = 51$.\n\n**The Full Solution:**\nStep 1: Notice that $9t = 3(3t)$, so the given equation says $3(3t) = 153$.\nStep 2: Divide each side by $3$: $3t = \\frac{153}{3}$.\nStep 3: Compute: $3t = 51$. Check: $t = \\frac{153}{9} = 17$, and $3(17) = 51$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($17$): is the value of $t$; the question asks for $3t$.\n* Choice C ($144$): subtracts $9$ from $153$ instead of dividing.\n* Choice D ($459$): multiplies $153$ by $3$ instead of dividing by $3$.\n\n**Test Day Takeaway:** Read what the question asks for; when it asks for a multiple of the variable, one division can get you there directly.",
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
    question: "$p - 36 = 144$\nWhat is the solution to the given equation?",
    choices: [
      // distractor: divides 144 by 36 instead of adding
      { id: "A", text: "$4$" },
      // distractor: subtracts 36 from 144 instead of adding
      { id: "B", text: "$108$" },
      { id: "C", text: "$180$" },
      // distractor: multiplies 144 by 36 instead of adding
      { id: "D", text: "$5{,}184$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Add $36$ to each side: $p = 144 + 36 = 180$.\n\n**The Full Solution:**\nStep 1: The equation subtracts $36$ from $p$, so undo it by adding $36$ to each side.\nStep 2: This gives $p = 144 + 36$.\nStep 3: Compute: $p = 180$. Check: $180 - 36 = 144$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): divides $144$ by $36$, using the wrong inverse operation.\n* Choice B ($108$): subtracts $36$ again instead of adding it back.\n* Choice D ($5{,}184$): multiplies $144$ by $36$, using the wrong inverse operation.\n\n**Test Day Takeaway:** Subtraction is undone by addition; a quick substitution check catches a reversed operation.",
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
    question: "$-6x = 96$\nWhat value of $x$ satisfies the given equation?",
    choices: [
      // distractor: multiplies 96 by -6 instead of dividing
      { id: "A", text: "$-576$" },
      { id: "B", text: "$-16$" },
      // distractor: divides by 6 instead of -6, dropping the negative sign
      { id: "C", text: "$16$" },
      // distractor: treats -6x as x - 6 and adds 6 to 96
      { id: "D", text: "$102$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Divide each side by $-6$: $x = \\frac{96}{-6} = -16$.\n\n**The Full Solution:**\nStep 1: The variable $x$ is multiplied by $-6$, so divide each side by $-6$.\nStep 2: This gives $x = \\frac{96}{-6}$.\nStep 3: A positive number divided by a negative number is negative, so $x = -16$. Check: $-6(-16) = 96$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-576$): multiplies $96$ by $-6$ instead of dividing.\n* Choice C ($16$): divides by $6$ instead of $-6$, dropping the negative sign.\n* Choice D ($102$): reads $-6x$ as $x - 6$ and adds $6$ to $96$.\n\n**Test Day Takeaway:** Divide by the whole coefficient, sign included, and check the sign of the result.",
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
    question: "$kx = -84$\nIn the given equation, $k$ is a constant. If the solution to the given equation is $x = 12$, what is the value of $k$?",
    choices: [
      // distractor: subtracts 12 from -84 instead of dividing
      { id: "A", text: "$-96$" },
      // distractor: adds 12 to -84 instead of dividing
      { id: "B", text: "$-72$" },
      { id: "C", text: "$-7$" },
      // distractor: divides 84 by 12 and drops the negative sign
      { id: "D", text: "$7$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Substitute $x = 12$: $12k = -84$, so $k = \\frac{-84}{12} = -7$.\n\n**The Full Solution:**\nStep 1: Since $x = 12$ is the solution, substitute $12$ for $x$: $12k = -84$.\nStep 2: Divide each side by $12$: $k = \\frac{-84}{12}$.\nStep 3: Compute: $k = -7$. Check: $-7(12) = -84$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-96$): subtracts $12$ from $-84$ instead of dividing.\n* Choice B ($-72$): adds $12$ to $-84$ instead of dividing.\n* Choice D ($7$): divides correctly but drops the negative sign of $-84$.\n\n**Test Day Takeaway:** When the solution is given and a constant is unknown, substitute the solution and solve for the constant.",
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
    question: "Line $p$ is shown in the $xy$-plane. Which equation defines a line that is parallel to line $p$ and passes through the point $(0, 4)$?",
    diagram: { type: "linearGraph", params: { slope: 2, yIntercept: -1, xRange: [-4, 4], yRange: [-6, 8], xTickInterval: 1, yTickInterval: 2, gridInterval: 1, showPoints: [[0, -1], [2, 3]], label: "p" } },
    choices: [
      { id: "A", text: "$y = 2x + 4$" },
      // distractor: gives the equation of line p itself, which does not pass through (0, 4)
      { id: "B", text: "$y = 2x - 1$" },
      // distractor: changes the sign of the slope
      { id: "C", text: "$y = -2x + 4$" },
      // distractor: uses the negative reciprocal of the slope, which gives a perpendicular line
      { id: "D", text: "$y = -\\frac{1}{2}x + 4$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Parallel Line through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Line $p$ rises $4$ for every $2$ to the right, so its slope is $2$. A parallel line through $(0, 4)$ is $y = 2x + 4$.\n\n**The Full Solution:**\nStep 1: Line $p$ passes through $(0, -1)$ and $(2, 3)$, so its slope is $\\frac{3 - (-1)}{2 - 0} = 2$.\nStep 2: A parallel line has the same slope, $2$. Because it passes through $(0, 4)$, its $y$-intercept is $4$.\nStep 3: So the line is $y = 2x + 4$. Check: at $x = 0$, $y = 4$, and its slope matches line $p$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = 2x - 1$): is line $p$ itself, which crosses the $y$-axis at $-1$, not $4$.\n* Choice C ($y = -2x + 4$): changes the sign of the slope.\n* Choice D ($y = -\\frac{1}{2}x + 4$): uses the negative reciprocal of the slope, which gives a perpendicular line.\n\n**Test Day Takeaway:** Parallel lines share a slope; the given point then fixes the intercept.",
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
    question: "Line $p$ in the $xy$-plane has a $y$-intercept of $(0, 6)$ and is parallel to the line $y = \\frac{1}{2}x - 8$. Which equation defines line $p$?",
    choices: [
      // distractor: uses the negative reciprocal slope -2, which gives a perpendicular line
      { id: "A", text: "$y = -2x + 6$" },
      // distractor: copies the given equation, keeping its y-intercept -8 instead of using (0, 6)
      { id: "B", text: "$y = \\frac{1}{2}x - 8$" },
      { id: "C", text: "$y = \\frac{1}{2}x + 6$" },
      // distractor: takes the reciprocal of the slope, 2, which is not parallel to the given line
      { id: "D", text: "$y = 2x + 6$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Parallel Line through a Point**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Line $p$ keeps the slope $\\frac{1}{2}$, and its $y$-intercept is $6$, so line $p$ is $y = \\frac{1}{2}x + 6$.\n\n**The Full Solution:**\nStep 1: Parallel lines have equal slopes, and $y = \\frac{1}{2}x - 8$ has slope $\\frac{1}{2}$, so line $p$ has slope $\\frac{1}{2}$.\nStep 2: The $y$-intercept of line $p$ is $(0, 6)$, so $b = 6$.\nStep 3: So line $p$ is defined by $y = \\frac{1}{2}x + 6$. Check: $\\frac{1}{2}(0) + 6 = 6$, and the slope matches the given line's slope ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -2x + 6$): uses the negative reciprocal slope, which gives a line perpendicular to the given line.\n* Choice B ($y = \\frac{1}{2}x - 8$): is the given line itself; it has the right slope but passes through $(0, -8)$, not $(0, 6)$.\n* Choice D ($y = 2x + 6$): passes through $(0, 6)$ but flips the slope to $2$, so it is not parallel to the given line.\n\n**Test Day Takeaway:** A parallel line copies the slope; the new $y$-intercept goes in place of the old one.",
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
    question: "Line $z$ is parallel to line $u$, shown, and passes through the point $(0, 4)$. If the point $(6, d)$ lies on line $z$, what is the value of $d$?",
    diagram: { type: "linearGraph", params: { slope: 0.5, yIntercept: -3, xRange: [-6, 6], yRange: [-6, 6], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, -3], [4, -1]], label: "u" } },
    choices: [
      // distractor: uses the y-intercept of line u, -3, instead of 4, computing -3 + 3
      { id: "A", text: "$0$" },
      // distractor: uses slope -1/2, getting 4 - 3
      { id: "B", text: "$1$" },
      { id: "C", text: "$7$" },
      // distractor: inverts the slope to 2, getting 4 + 12
      { id: "D", text: "$16$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Parallel Line through a Point**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Line $u$ has slope $\\frac{1}{2}$, so line $z$ is $y = \\frac{1}{2}x + 4$, and $d = \\frac{1}{2}(6) + 4 = 7$.\n\n**The Full Solution:**\nStep 1: Line $u$ passes through $(0, -3)$ and $(4, -1)$, so its slope is $\\frac{-1 - (-3)}{4 - 0} = \\frac{1}{2}$.\nStep 2: Line $z$ is parallel to line $u$, so it also has slope $\\frac{1}{2}$, and its $y$-intercept is $(0, 4)$: $y = \\frac{1}{2}x + 4$.\nStep 3: Substitute $x = 6$: $d = \\frac{1}{2}(6) + 4 = 7$. Check: the slope from $(0, 4)$ to $(6, 7)$ is $\\frac{7 - 4}{6 - 0} = \\frac{1}{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): starts from the $y$-intercept of line $u$, $-3$, so it finds the point on line $u$, not line $z$.\n* Choice B ($1$): reads the slope as $-\\frac{1}{2}$, so $y$ falls by $3$ instead of rising.\n* Choice D ($16$): inverts the slope to $2$, computing $4 + 2(6)$.\n\n**Test Day Takeaway:** Read the slope from the graph, keep it for the parallel line, and use the new line's own $y$-intercept.",
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
    question: "In the $xy$-plane, line $\\ell$ is parallel to the graph of $2x + 5y = 30$ and passes through the points $(a, 7)$ and $(0, 3)$. What is the value of $a$?",
    choices: [
      { id: "A", text: "$-10$" },
      // distractor: uses the reciprocal slope -5/2, solving 4/a = -5/2
      { id: "B", text: "$-\\frac{8}{5}$" },
      // distractor: uses the reciprocal slope and drops its sign, solving 4/a = 5/2
      { id: "C", text: "$\\frac{8}{5}$" },
      // distractor: drops the negative sign of the slope, solving 4/a = 2/5
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Parallel Line through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The given line has slope $-\\frac{2}{5}$, so $\\frac{7 - 3}{a - 0} = -\\frac{2}{5}$, which gives $\\frac{4}{a} = -\\frac{2}{5}$ and $a = -10$.\n\n**The Full Solution:**\nStep 1: Solve $2x + 5y = 30$ for $y$: $y = -\\frac{2}{5}x + 6$, so its slope is $-\\frac{2}{5}$.\nStep 2: Line $\\ell$ is parallel, so the slope between $(0, 3)$ and $(a, 7)$ is also $-\\frac{2}{5}$: $\\frac{7 - 3}{a - 0} = -\\frac{2}{5}$.\nStep 3: Then $\\frac{4}{a} = -\\frac{2}{5}$, so $-2a = 20$ and $a = -10$. Check: $\\frac{7 - 3}{-10 - 0} = \\frac{4}{-10} = -\\frac{2}{5}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{8}{5}$): uses the reciprocal slope $-\\frac{5}{2}$.\n* Choice C ($\\frac{8}{5}$): uses the reciprocal slope and also drops its sign.\n* Choice D ($10$): drops the negative sign of the slope, using $\\frac{2}{5}$.\n\n**Test Day Takeaway:** For $Ax + By = C$, the slope is $-\\frac{A}{B}$; set the slope between the two points equal to it.",
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
    question: "Line $t$ is shown in the $xy$-plane. Line $u$ is parallel to line $t$ and passes through the point $(0, 0)$. If the point $(8, c)$ lies on line $u$, what is the value of $c$?",
    diagram: { type: "linearGraph", params: { slope: 0.75, yIntercept: 1, xRange: [-4, 8], yRange: [-4, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 1], [4, 4]], label: "t" } },
    choices: [
      // distractor: uses slope -3/4, getting -6
      { id: "A", text: "$-6$" },
      { id: "B", text: "$6$" },
      // distractor: finds the y-value on line t at x = 8, (3/4)(8) + 1, instead of on line u
      { id: "C", text: "$7$" },
      // distractor: inverts the slope to 4/3, getting (4/3)(8)
      { id: "D", text: "$\\frac{32}{3}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Parallel Line through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Line $t$ has slope $\\frac{3}{4}$, so line $u$ is $y = \\frac{3}{4}x$, and $c = \\frac{3}{4}(8) = 6$.\n\n**The Full Solution:**\nStep 1: Line $t$ passes through $(0, 1)$ and $(4, 4)$, so its slope is $\\frac{4 - 1}{4 - 0} = \\frac{3}{4}$.\nStep 2: Line $u$ is parallel to line $t$ and passes through the origin, so it is $y = \\frac{3}{4}x$.\nStep 3: Substitute $x = 8$: $c = \\frac{3}{4}(8) = 6$. Check: the slope from $(0, 0)$ to $(8, 6)$ is $\\frac{6}{8} = \\frac{3}{4}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): uses slope $-\\frac{3}{4}$ instead of $\\frac{3}{4}$.\n* Choice C ($7$): adds line $t$'s $y$-intercept, $1$, so it finds the point on line $t$, not line $u$.\n* Choice D ($\\frac{32}{3}$): inverts the slope to $\\frac{4}{3}$.\n\n**Test Day Takeaway:** A line through the origin has no constant term: once you have the slope, $y$ is just the slope times $x$.",
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
    question: "$9x - 6y = 4$\nIn the $xy$-plane, line $\\ell$ passes through the point $(0, 0)$ and is parallel to the graph of the given equation. If line $\\ell$ also passes through the point $(4, d)$, what is the value of $d$?",
    choices: [
      // distractor: drops the sign when solving for y, using slope -3/2, getting -6
      { id: "A", text: "$-6$" },
      // distractor: inverts the slope to 2/3, getting (2/3)(4)
      { id: "B", text: "$\\frac{8}{3}$" },
      // distractor: finds the point on the graph of the given equation at x = 4, solving 36 - 6y = 4, instead of on line l
      { id: "C", text: "$\\frac{16}{3}$" },
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Parallel Line through a Point**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The given line has slope $\\frac{9}{6} = \\frac{3}{2}$, so line $\\ell$ is $y = \\frac{3}{2}x$, and $d = \\frac{3}{2}(4) = 6$.\n\n**The Full Solution:**\nStep 1: Solve the given equation for $y$: $-6y = -9x + 4$, so $y = \\frac{3}{2}x - \\frac{2}{3}$, which has slope $\\frac{3}{2}$.\nStep 2: Line $\\ell$ is parallel to this graph and passes through the origin, so line $\\ell$ is $y = \\frac{3}{2}x$.\nStep 3: Substitute $x = 4$: $d = \\frac{3}{2}(4) = 6$. Check: the slope from $(0, 0)$ to $(4, 6)$ is $\\frac{6}{4} = \\frac{3}{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): loses the negative signs when solving for $y$ and uses slope $-\\frac{3}{2}$.\n* Choice B ($\\frac{8}{3}$): inverts the slope to $\\frac{2}{3}$.\n* Choice C ($\\frac{16}{3}$): finds the point with $x = 4$ on the graph of the given equation, $9(4) - 6y = 4$, which is not line $\\ell$.\n\n**Test Day Takeaway:** For a line given in standard form, solve for $y$ to read the slope; a parallel line through the origin is just that slope times $x$.",
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
    question: "The system consisting of the equation of line $q$, shown, and a second linear equation has no solution. Which of the following could be the second equation?",
    diagram: { type: "linearGraph", params: { slope: 3, yIntercept: -4, xRange: [-4, 4], yRange: [-8, 6], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, -4], [2, 2]], label: "q" } },
    choices: [
      { id: "A", text: "$y = 3x + 5$" },
      // distractor: is line q itself, so the system would have infinitely many solutions
      { id: "B", text: "$y = 3x - 4$" },
      // distractor: changes the sign of the slope, so the lines intersect at one point
      { id: "C", text: "$y = -3x + 5$" },
      // distractor: uses the reciprocal of the slope, so the lines intersect at one point
      { id: "D", text: "$y = \\frac{1}{3}x + 5$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Parallel Lines No Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Line $q$ has slope $3$ and $y$-intercept $-4$. A system with no solution needs a parallel, distinct line: slope $3$ and a different intercept, as in $y = 3x + 5$.\n\n**The Full Solution:**\nStep 1: Line $q$ passes through $(0, -4)$ and $(2, 2)$, so its slope is $\\frac{2 - (-4)}{2 - 0} = 3$ and its equation is $y = 3x - 4$.\nStep 2: A system of two linear equations has no solution when the lines are parallel and distinct: equal slopes, different $y$-intercepts.\nStep 3: Only $y = 3x + 5$ has slope $3$ and a $y$-intercept other than $-4$. Check: setting $3x - 4 = 3x + 5$ gives $-4 = 5$, which is false, so there is no solution ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = 3x - 4$): is line $q$ itself, so every point on the line is a solution.\n* Choice C ($y = -3x + 5$): changes the sign of the slope, so the lines cross at one point.\n* Choice D ($y = \\frac{1}{3}x + 5$): uses the reciprocal of the slope, so the lines cross at one point.\n\n**Test Day Takeaway:** No solution means same slope, different intercept; the same line gives infinitely many solutions instead.",
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
    question: "$y = mx + 9$\nIn the given equation, $m$ is a constant. In the $xy$-plane, the graph of the given equation does not intersect line $g$, shown. What is the value of $m$?",
    diagram: { type: "linearGraph", params: { slope: -0.5, yIntercept: -3, xRange: [-6, 6], yRange: [-8, 4], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, -3], [4, -5]], label: "g" } },
    choices: [
      // distractor: divides the run by the rise, inverting the slope
      { id: "A", text: "$-2$" },
      { id: "B", text: "$-\\frac{1}{2}$" },
      // distractor: reads the slope as positive even though line g falls from left to right
      { id: "C", text: "$\\frac{1}{2}$" },
      // distractor: uses the negative reciprocal slope, which gives a perpendicular line
      { id: "D", text: "$2$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Parallel Lines No Solution**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Line $g$ falls $2$ for every $4$ to the right, so its slope is $-\\frac{1}{2}$; a line that never meets it must have $m = -\\frac{1}{2}$.\n\n**The Full Solution:**\nStep 1: Line $g$ passes through $(0, -3)$ and $(4, -5)$, so its slope is $\\frac{-5 - (-3)}{4 - 0} = -\\frac{1}{2}$.\nStep 2: Two lines that do not intersect are parallel, so the slope $m$ must equal $-\\frac{1}{2}$.\nStep 3: The lines are distinct because $y = -\\frac{1}{2}x + 9$ has $y$-intercept $9$, while line $g$ has $y$-intercept $-3$. Check: $-\\frac{1}{2}x + 9 = -\\frac{1}{2}x - 3$ gives $9 = -3$, which is false ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): divides the run by the rise, which inverts the slope.\n* Choice C ($\\frac{1}{2}$): reads the slope as positive, but line $g$ falls from left to right.\n* Choice D ($2$): is the negative reciprocal of $-\\frac{1}{2}$, the slope of a perpendicular line.\n\n**Test Day Takeaway:** Lines in the $xy$-plane that never meet are parallel; read the slope from the graph, including its sign.",
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
    question: "In the $xy$-plane, the graphs of the linear functions $f$ and $g$ pass through the points shown in the table. How many solutions does the system of equations $y = f(x)$ and $y = g(x)$ have?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)", "g(x)"], rows: [["0", "-1", "2"], ["2", "3", "6"], ["4", "7", "10"]] } },
    choices: [
      { id: "A", text: "Zero" },
      // distractor: assumes two different linear functions always intersect once, without comparing slopes
      { id: "B", text: "Exactly one" },
      // distractor: counts the two rows where both outputs increase by 4, confusing table rows with solutions
      { id: "C", text: "Exactly two" },
      // distractor: notices that f and g increase at the same rate and concludes they are the same line, ignoring the different values at x = 0
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Parallel Lines No Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Both functions increase by $4$ for every increase of $2$ in $x$, so both have slope $2$, but $f(0) = -1$ and $g(0) = 2$. Parallel, distinct lines never meet.\n\n**The Full Solution:**\nStep 1: From the table, $f(x) = 2x - 1$: the slope is $\\frac{3 - (-1)}{2 - 0} = 2$ and $f(0) = -1$.\nStep 2: Likewise $g(x) = 2x + 2$: the slope is $\\frac{6 - 2}{2 - 0} = 2$ and $g(0) = 2$.\nStep 3: The graphs have the same slope and different $y$-intercepts, so they are parallel and distinct, and the system has zero solutions. Check: $2x - 1 = 2x + 2$ gives $-1 = 2$, which is false ✓\n\n**Why the wrong answers are tempting:**\n* Choice B (Exactly one): assumes two different lines always cross once, without comparing the slopes.\n* Choice C (Exactly two): two distinct lines can never meet in exactly two points.\n* Choice D (Infinitely many): sees the equal rates of change but ignores that $g(x)$ is always $3$ more than $f(x)$.\n\n**Test Day Takeaway:** Compare slopes first and intercepts second: equal slopes with different intercepts means zero solutions.",
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
    question: "The table shows the charge, in dollars, at one supplier for an order of $x$ crates, where the charge is a linear function of $x$. A second supplier charges $mx + 240$ dollars for $x$ crates, where $m$ is a constant. If the two charges are never equal, what is the value of $m$?",
    diagram: { type: "dataTable", params: { headers: ["Crates ordered", "Charge (dollars)"], rows: [["4", "260"], ["8", "380"], ["12", "500"]] } },
    choices: [
      { id: "A", text: "$30$" },
      // distractor: divides the charge for 4 crates by 4, ignoring the fixed part of the charge
      { id: "B", text: "$65$" },
      // distractor: uses the change in charge between rows, 120, without dividing by the change of 4 crates
      { id: "C", text: "$120$" },
      // distractor: uses the fixed charge of the first supplier instead of its rate
      { id: "D", text: "$140$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Parallel Lines No Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The first supplier's charge rises $120$ dollars for every $4$ crates, so its rate is $30$ dollars per crate. Charges that are never equal must rise at the same rate, so $m = 30$.\n\n**The Full Solution:**\nStep 1: From the table, each increase of $4$ crates adds $380 - 260 = 120$ dollars, so the rate is $\\frac{120}{4} = 30$ dollars per crate.\nStep 2: The first supplier's charge is $30x + b$ with $260 = 30(4) + b$, so $b = 140$ and the charge is $30x + 140$.\nStep 3: Setting $30x + 140 = mx + 240$ has no solution only when the rates are equal and the fixed amounts differ, so $m = 30$. Check: $30x + 140 = 30x + 240$ gives $140 = 240$, which is false ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($65$): divides $260$ by $4$, which ignores the fixed $140$-dollar part of the first supplier's charge.\n* Choice C ($120$): is the change in charge for $4$ more crates, not the change per crate.\n* Choice D ($140$): is the first supplier's fixed charge, not its rate per crate.\n\n**Test Day Takeaway:** Two linear models are never equal when they have the same rate of change and different starting values.",
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
    question: "$4x + 6y = 9$\n$10x + ky = 7$\nIn the given system of equations, $k$ is a constant. If the system has no solution, what is the value of $k$?",
    choices: [
      // distractor: inverts the ratio, solving 10/4 = 6/k
      { id: "A", text: "$2.4$" },
      // distractor: copies the y-coefficient of the first equation even though the x-coefficients are not equal
      { id: "B", text: "$6$" },
      // distractor: adds the difference of the x-coefficients (10 - 4 = 6) to 6 instead of scaling by 10/4
      { id: "C", text: "$12$" },
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Parallel Lines No Solution**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** No solution requires proportional $x$- and $y$-coefficients: $\\frac{4}{10} = \\frac{6}{k}$, so $k = 15$.\n\n**The Full Solution:**\nStep 1: The system has no solution when the lines are parallel and distinct, which happens when the coefficients of $x$ and $y$ are in the same ratio but the constants are not.\nStep 2: Set the ratios equal: $\\frac{4}{10} = \\frac{6}{k}$, so $4k = 60$.\nStep 3: Divide: $k = 15$. Check: multiplying the first equation by $\\frac{5}{2}$ gives $10x + 15y = 22.5$, which has the same coefficients as $10x + 15y = 7$ but a different constant, so the system has no solution ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2.4$): inverts one ratio, solving $\\frac{10}{4} = \\frac{6}{k}$.\n* Choice B ($6$): copies the $y$-coefficient, which would work only if the $x$-coefficients were also equal.\n* Choice C ($12$): adds the difference $10 - 4 = 6$ to the $y$-coefficient instead of multiplying by $\\frac{10}{4}$.\n\n**Test Day Takeaway:** For no solution, scale the coefficients, not add to them: the $x$- and $y$-coefficients must share one ratio, and the constants must not.",
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
    question: "$4x - ny = 10$\n$nx - 25y = 6$\nIn the given system of equations, $n$ is a positive constant. For what value of $n$ does the system have no solution?",
    choices: [
      // distractor: also makes the coefficients proportional, but n must be positive
      { id: "A", text: "$-10$" },
      { id: "B", text: "$10$" },
      // distractor: adds 4 and 25 instead of setting up a proportion
      { id: "C", text: "$29$" },
      // distractor: stops at n^2 = 100 and reports n^2 instead of n
      { id: "D", text: "$100$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Parallel Lines No Solution**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Proportional coefficients require $\\frac{4}{n} = \\frac{-n}{-25}$, so $n^{2} = 100$; the positive value is $n = 10$.\n\n**The Full Solution:**\nStep 1: The system has no solution when the coefficients of $x$ and $y$ are in the same ratio but the constants are not: $\\frac{4}{n} = \\frac{-n}{-25} = \\frac{n}{25}$.\nStep 2: Cross-multiply: $n^{2} = 100$, so $n = 10$ or $n = -10$. Since $n$ is positive, $n = 10$.\nStep 3: Confirm the constants are not in the same ratio. Check: with $n = 10$ the equations are $4x - 10y = 10$ and $10x - 25y = 6$; the coefficient ratio is $\\frac{4}{10} = \\frac{2}{5}$, but $\\frac{10}{6} \\neq \\frac{2}{5}$, so the lines are parallel and distinct ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-10$): also satisfies $n^{2} = 100$, but the problem states $n$ is positive.\n* Choice C ($29$): adds $4$ and $25$ instead of setting up a proportion.\n* Choice D ($100$): is $n^{2}$, not $n$.\n\n**Test Day Takeaway:** When the constant appears in two places, the coefficient ratio becomes a quadratic; use the stated condition (here, positive) to pick the root.",
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
    question: "A system of two linear equations has infinitely many solutions. One of the equations is represented by the line shown in the $xy$-plane. Which of the following could be the other equation?",
    diagram: { type: "linearGraph", params: { slope: -1.5, yIntercept: 9, xRange: [0, 8], yRange: [0, 10], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 9], [6, 0]] } },
    choices: [
      { id: "A", text: "$6x + 4y = 36$" },
      // distractor: doubles the coefficients of 3x + 2y = 18 but not the constant, giving a parallel line
      { id: "B", text: "$6x + 4y = 18$" },
      // distractor: reads the slope as positive and writes 3x - 2y = 18
      { id: "C", text: "$3x - 2y = 18$" },
      // distractor: matches the x-intercept (6, 0) but not the y-intercept (0, 9)
      { id: "D", text: "$9x + 2y = 54$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Same Line Infinitely Many Solutions**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The line has intercepts $(6, 0)$ and $(0, 9)$, so it is $3x + 2y = 18$. Doubling every term gives $6x + 4y = 36$, the same line.\n\n**The Full Solution:**\nStep 1: The line passes through $(0, 9)$ and $(6, 0)$, so its slope is $\\frac{0 - 9}{6 - 0} = -\\frac{3}{2}$ and its equation is $y = -\\frac{3}{2}x + 9$, or $3x + 2y = 18$.\nStep 2: Infinitely many solutions means the other equation describes the same line, so it must be a nonzero multiple of $3x + 2y = 18$, constant included.\nStep 3: Multiplying every term by $2$ gives $6x + 4y = 36$. Check: $(0, 9)$ gives $4(9) = 36$ and $(6, 0)$ gives $6(6) = 36$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($6x + 4y = 18$): doubles the coefficients but not the constant, which gives a parallel line and no solution.\n* Choice C ($3x - 2y = 18$): reads the slope as positive, but the line falls from left to right.\n* Choice D ($9x + 2y = 54$): passes through $(6, 0)$ but crosses the $y$-axis at $27$, not $9$.\n\n**Test Day Takeaway:** Two equations describe the same line only when one is a multiple of the other, every term included.",
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
    question: "For the linear functions $f$ and $g$, the table shows three values of $x$ and their corresponding values of $f(x)$ and $g(x)$. At how many points do the graphs of $y = f(x)$ and $y = g(x)$ intersect in the $xy$-plane?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)", "g(x)"], rows: [["-1", "1", "1"], ["0", "4", "4"], ["1", "7", "7"]] } },
    choices: [
      // distractor: assumes two differently named functions must have different graphs
      { id: "A", text: "Zero" },
      // distractor: notices only the shared point (0, 4), the y-intercept
      { id: "B", text: "Exactly one" },
      // distractor: counts only two of the three matching rows
      { id: "C", text: "Exactly two" },
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Same Line Infinitely Many Solutions**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The two functions have the same output at three values of $x$, and a line is determined by two points, so $f$ and $g$ have the same graph.\n\n**The Full Solution:**\nStep 1: From the table, $f$ has slope $\\frac{4 - 1}{0 - (-1)} = 3$ and $f(0) = 4$, so $f(x) = 3x + 4$.\nStep 2: The values of $g$ are the same at every listed $x$, so $g(x) = 3x + 4$ as well.\nStep 3: The graphs are the same line, so they share every point and intersect at infinitely many points. Check: $3x + 4 = 3x + 4$ is true for every $x$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): assumes two differently named functions must have different graphs.\n* Choice B (Exactly one): sees only the shared $y$-intercept $(0, 4)$.\n* Choice C (Exactly two): two lines that share two points share every point.\n\n**Test Day Takeaway:** Two linear functions that agree at two inputs are the same function, so their graphs coincide.",
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
    question: "$kx + 9y = 36$\nIn the given equation, $k$ is a constant. The system consisting of the given equation and the equation of the line shown has infinitely many solutions. What is the value of $k$?",
    diagram: { type: "linearGraph", params: { slope: -0.6666667, yIntercept: 4, xRange: [0, 8], yRange: [0, 6], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 4], [6, 0]] } },
    choices: [
      // distractor: writes the line as 2x + 3y = 12 and copies the x-coefficient without scaling by 3
      { id: "A", text: "$2$" },
      // distractor: reports the scale factor 3 instead of the scaled coefficient
      { id: "B", text: "$3$" },
      // distractor: reports the y-intercept of the line
      { id: "C", text: "$4$" },
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Same Line Infinitely Many Solutions**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The given equation must describe the line shown, so it contains $(6, 0)$: $6k = 36$ and $k = 6$.\n\n**The Full Solution:**\nStep 1: The line passes through $(0, 4)$ and $(6, 0)$, so its equation is $2x + 3y = 12$.\nStep 2: Infinitely many solutions means $kx + 9y = 36$ is the same line. Since $9 = 3 \\cdot 3$ and $36 = 3 \\cdot 12$, the equation must be $3(2x + 3y = 12)$, or $6x + 9y = 36$.\nStep 3: So $k = 6$. Check: $(6, 0)$ gives $6(6) + 9(0) = 36$ and $(0, 4)$ gives $9(4) = 36$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): copies the $x$-coefficient of $2x + 3y = 12$ without multiplying by $3$.\n* Choice B ($3$): is the scale factor between the equations, not the coefficient $k$.\n* Choice C ($4$): is the $y$-intercept of the line.\n\n**Test Day Takeaway:** For infinitely many solutions, every term of one equation is the same multiple of the other; an intercept read from the graph gives the constant fastest.",
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
    question: "$6x - 9y = 21$\nWhich equation, together with the given equation, forms a system of linear equations that has infinitely many solutions?",
    choices: [
      // distractor: divides the coefficients by 3 but not the constant
      { id: "A", text: "$2x - 3y = 21$" },
      // distractor: multiplies the coefficients by -2/3 but the constant by 2/3
      { id: "B", text: "$-4x + 6y = 14$" },
      // distractor: multiplies the coefficients by 2/3 but the constant by -2/3
      { id: "C", text: "$4x - 6y = -14$" },
      { id: "D", text: "$-4x + 6y = -14$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Same Line Infinitely Many Solutions**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Multiplying every term of $6x - 9y = 21$ by $-\\frac{2}{3}$ gives $-4x + 6y = -14$, the same line.\n\n**The Full Solution:**\nStep 1: A system has infinitely many solutions when both equations describe the same line, so one equation must be a nonzero multiple of the other, constant included.\nStep 2: The choices have $x$-coefficient $\\pm 4$ or $2$. Multiplying $6x - 9y = 21$ by $-\\frac{2}{3}$ gives $-4x + 6y = -14$.\nStep 3: Only choice D matches every term. Check: multiplying $-4x + 6y = -14$ by $-\\frac{3}{2}$ returns $6x - 9y = 21$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2x - 3y = 21$): divides the coefficients by $3$ but leaves the constant, giving a parallel line.\n* Choice B ($-4x + 6y = 14$): scales the coefficients by $-\\frac{2}{3}$ but the constant by $\\frac{2}{3}$, giving a parallel line.\n* Choice C ($4x - 6y = -14$): scales the coefficients by $\\frac{2}{3}$ but the constant by $-\\frac{2}{3}$, giving a parallel line.\n\n**Test Day Takeaway:** Check the constant with the same multiplier as the coefficients; a mismatch there turns infinitely many solutions into none.",
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
    question: "The table shows four values of $x$ and their corresponding values of $y$ for a linear relationship. A system of two linear equations consists of $ax + 12y = 180$, where $a$ is a constant, and the equation of this relationship. If the system has infinitely many solutions, what is the value of $a$?",
    diagram: { type: "dataTable", params: { headers: ["x", "y"], rows: [["0", "15"], ["4", "12"], ["8", "9"], ["12", "6"]] } },
    choices: [
      // distractor: reports the absolute value of the slope, 3/4, instead of the coefficient a
      { id: "A", text: "$0.75$" },
      // distractor: reports the drop in y between consecutive rows
      { id: "B", text: "$3$" },
      { id: "C", text: "$9$" },
      // distractor: substitutes (4, 12) and stops at 4a = 36 without dividing by 4
      { id: "D", text: "$36$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Same Line Infinitely Many Solutions**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The relationship is $y = -\\frac{3}{4}x + 15$. Multiplying by $12$ gives $9x + 12y = 180$, so $a = 9$.\n\n**The Full Solution:**\nStep 1: From the table, $y$ decreases by $3$ each time $x$ increases by $4$, so the slope is $-\\frac{3}{4}$ and the $y$-intercept is $15$: $y = -\\frac{3}{4}x + 15$.\nStep 2: Infinitely many solutions means $ax + 12y = 180$ is the same line. Multiply $y = -\\frac{3}{4}x + 15$ by $12$: $12y = -9x + 180$, or $9x + 12y = 180$.\nStep 3: So $a = 9$. Check: $(8, 9)$ gives $9(8) + 12(9) = 72 + 108 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.75$): is the absolute value of the slope, not the coefficient $a$.\n* Choice B ($3$): is the drop in $y$ between consecutive rows.\n* Choice D ($36$): substitutes $(4, 12)$ to get $4a + 144 = 180$, then stops at $4a = 36$.\n\n**Test Day Takeaway:** Infinitely many solutions means the same line: every point in the table must satisfy the equation, so substituting one point gives the constant.",
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
    question: "$3x + ky = 21$\n$kx + 12y = c$\nIn the given system of equations, $k$ is a positive constant and $c$ is a constant. If the system has infinitely many solutions, what is the value of $c$?",
    choices: [
      // distractor: reports the value of k instead of c
      { id: "A", text: "$6$" },
      // distractor: copies the constant 21 without scaling it
      { id: "B", text: "$21$" },
      { id: "C", text: "$42$" },
      // distractor: multiplies 21 by k = 6 instead of by the scale factor 2
      { id: "D", text: "$126$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Same Line Infinitely Many Solutions**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Proportional coefficients require $\\frac{3}{k} = \\frac{k}{12}$, so $k = 6$. The second equation is then $2$ times the first, so $c = 2(21) = 42$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the second equation is a multiple of the first, so $\\frac{3}{k} = \\frac{k}{12} = \\frac{21}{c}$.\nStep 2: From $\\frac{3}{k} = \\frac{k}{12}$, $k^{2} = 36$, and since $k$ is positive, $k = 6$. The scale factor from the first equation to the second is $\\frac{6}{3} = 2$.\nStep 3: The constants must scale the same way: $c = 2(21) = 42$. Check: the equations are $3x + 6y = 21$ and $6x + 12y = 42$, and doubling the first gives the second ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): is the value of $k$, not $c$.\n* Choice B ($21$): copies the first constant without scaling it.\n* Choice D ($126$): multiplies $21$ by $k = 6$ instead of by the scale factor $2$.\n\n**Test Day Takeaway:** For infinitely many solutions, find the one scale factor that turns the first equation into the second, then apply it to every term, constant included.",
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
    question: "The function $d(t) = 12t + 30$ gives the depth, in centimeters, of water in a tank $t$ minutes after a pump is turned on. What is the best interpretation of $12$ in this context?",
    choices: [
      // distractor: describes the constant term 30, the depth at t = 0
      { id: "A", text: "The depth of the water, in centimeters, when the pump is turned on" },
      // distractor: the depth after 1 minute is d(1) = 42, not 12
      { id: "B", text: "The depth of the water, in centimeters, $1$ minute after the pump is turned on" },
      // distractor: the depth is already 30 centimeters at t = 0; 12 is a rate in centimeters per minute, not a time
      { id: "C", text: "The number of minutes it takes the depth of the water to reach $30$ centimeters" },
      { id: "D", text: "The increase in the depth of the water, in centimeters, each minute" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** In $d(t) = 12t + 30$, the coefficient of $t$ is the rate: the depth increases by $12$ centimeters each minute.\n\n**The Full Solution:**\nStep 1: The function is linear in $t$, so $12$ is the slope and $30$ is the value at $t = 0$.\nStep 2: The slope is the change in depth per unit change in time: each additional minute adds $12$ centimeters of depth.\nStep 3: Check: $d(0) = 30$ and $d(1) = 42$; the difference $42 - 30 = 12$ is the increase in one minute ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: describes the constant term $30$, the depth at $t = 0$.\n* Choice B: the depth after $1$ minute is $d(1) = 42$, not $12$.\n* Choice C: the depth is already $30$ centimeters at $t = 0$; $12$ is a rate, not a time.\n\n**Test Day Takeaway:** In a linear model, the coefficient of the input variable is the change in output for each one-unit increase in the input; the constant is the starting value.",
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
    question: "The equation $m = 1.2v + 85$ gives the total mass $m$, in grams, of a beaker that contains $v$ milliliters of a salt solution. What is the best interpretation of $1.2$ in this context?",
    choices: [
      // distractor: describes the constant 85, the mass when v = 0
      { id: "A", text: "The mass, in grams, of the empty beaker" },
      { id: "B", text: "The mass, in grams, of each milliliter of solution" },
      // distractor: 1.2 has units of grams per milliliter, not milliliters
      { id: "C", text: "The volume, in milliliters, of solution that has a mass of $85$ grams" },
      // distractor: the total mass with 1 milliliter of solution is 1.2(1) + 85 = 86.2 grams, not 1.2
      { id: "D", text: "The total mass, in grams, of the beaker when it contains $1$ milliliter of solution" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The coefficient of $v$ is the rate: each milliliter of solution adds $1.2$ grams to the total mass.\n\n**The Full Solution:**\nStep 1: The equation is linear in $v$, so $1.2$ is the slope and $85$ is the mass when $v = 0$, the empty beaker.\nStep 2: The slope is the change in mass per milliliter of solution, so each milliliter has a mass of $1.2$ grams.\nStep 3: Check: with $v = 10$, $m = 97$, and with $v = 11$, $m = 98.2$; the difference is $1.2$ grams for $1$ more milliliter ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: describes the constant $85$, the mass when $v = 0$.\n* Choice C: $1.2$ is measured in grams per milliliter, not in milliliters.\n* Choice D: with $1$ milliliter of solution, the total mass is $1.2(1) + 85 = 86.2$ grams, not $1.2$.\n\n**Test Day Takeaway:** Attach units to each number in a linear model: the coefficient of the input carries output units per input unit, which identifies it as a rate.",
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
    question: "The function $A(t) = 12.5 - 0.4t$ gives the estimated area, in thousands of square kilometers, of an ice sheet $t$ years after 2000. Which of the following is the best interpretation of $0.4$ in this context?",
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
    question: "The table shows the volume $V$, in liters, of fuel in a generator's tank $t$ hours after the generator was started. The relationship between $t$ and $V$ is linear. What is the best interpretation of the slope of the line that models this relationship?",
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
    question: "The function $T(m) = 92 - 1.5m$ gives the temperature, in degrees Celsius, of a liquid $m$ minutes after it is removed from a heat source. What is the best interpretation of $1.5$ in this context?",
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
    question: "The altitude of a hot-air balloon is a linear function of the time since launch. The altitude was $950$ feet after $3$ minutes and $1{,}250$ feet after $8$ minutes. What is the best interpretation of the slope of the graph of this function?",
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
    question: "Line $n$ is shown in the $xy$-plane. The points $(-4, -1)$ and $(4, 5)$ lie on line $n$. What is the slope of line $n$?",
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
    question: "The points $(-3, 7)$ and $(3, -2)$ are shown in the $xy$-plane. What is the slope of the line that passes through these two points?",
    diagram: { type: "coordinatePoints", params: { points: [[-3, 7], [3, -2]], xMin: -5, xMax: 5, yMin: -4, yMax: 9 } },
    choices: [
      { id: "A", text: "$-\\frac{3}{2}$" },
      // distractor: inverts the ratio, putting the run 6 over the rise -9.
      { id: "B", text: "$-\\frac{2}{3}$" },
      // distractor: is the negative reciprocal, the slope of a line perpendicular to this line.
      { id: "C", text: "$\\frac{2}{3}$" },
      // distractor: drops the negative sign even though the line falls from left to right.
      { id: "D", text: "$\\frac{3}{2}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~8s):** Rise $= -2 - 7 = -9$, run $= 3 - (-3) = 6$; slope $= \\frac{-9}{6} = -\\frac{3}{2}$.\n\n**The Full Solution:**\nStep 1: Use $(x_1, y_1) = (-3, 7)$ and $(x_2, y_2) = (3, -2)$ in $\\frac{y_2 - y_1}{x_2 - x_1}$.\nStep 2: $\\frac{-2 - 7}{3 - (-3)} = \\frac{-9}{6} = -\\frac{3}{2}$.\nStep 3: Check: $(3, -2)$ is to the right of and below $(-3, 7)$, so the slope must be negative; from $(-3, 7)$, moving right $6$ and down $9$ lands on $(3, -2)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{2}{3}$): inverts the ratio, putting the run $6$ over the rise $-9$.\n* Choice C ($\\frac{2}{3}$): is the negative reciprocal, the slope of a line perpendicular to this line.\n* Choice D ($\\frac{3}{2}$): drops the negative sign even though the line falls from left to right.\n\n**Test Day Takeaway:** Glance at the plot first: a line falling left to right has a negative slope, which eliminates half the choices before any arithmetic.",
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
    question: "The table shows the total number of fish that had passed a counter on a river at three times after sunrise. The total increased at a constant rate. How many fish passed the counter per hour?",
    questionTable: { headers: ["Minutes after sunrise", "Total number of fish"], rows: [["$15$", "$46$"], ["$30$", "$64$"], ["$45$", "$82$"]] },
    choices: [
      // distractor: stops at the per-minute rate, $1.2$, instead of converting to fish per hour
      { id: "A", text: "$1.2$" },
      // distractor: reports the change in the total from minute $15$ to minute $45$, $82 - 46$, which is not a rate
      { id: "B", text: "$36$" },
      // distractor: multiplies the per-minute rate by $45$, the last time in the table, instead of by $60$
      { id: "C", text: "$54$" },
      { id: "D", text: "$72$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** From minute $15$ to minute $45$ the total rises by $82 - 46 = 36$ fish in $30$ minutes, which is $1.2$ fish per minute, or $1.2(60) = 72$ fish per hour.\n\n**The Full Solution:**\nStep 1: Read two rows of the table as ordered pairs (minutes, fish): $(15, 46)$ and $(45, 82)$.\nStep 2: The constant rate is the slope: $\\frac{82 - 46}{45 - 15} = \\frac{36}{30} = 1.2$ fish per minute.\nStep 3: Convert to an hourly rate: $1.2(60) = 72$ fish per hour. Check with the middle row: $1.2(30 - 15) = 18$, and $46 + 18 = 64$, matching the table. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.2$): stops at the per-minute rate, $1.2$, instead of converting to fish per hour\n* Choice B ($36$): reports the change in the total from minute $15$ to minute $45$, $82 - 46$, which is not a rate\n* Choice C ($54$): multiplies the per-minute rate by $45$, the last time in the table, instead of by $60$\n\n**Test Day Takeaway:** Compute the rate in the units the table uses, then convert once at the end to the units the question asks for.",
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
    question: "Line $\\ell$ passes through the points $(-3, 5)$ and $(4, 5)$, as shown. What is the slope of line $\\ell$?",
    diagram: { type: "coordinatePoints", params: { points: [[-3, 5], [4, 5]], xMin: -5, xMax: 6, yMin: -2, yMax: 8 } },
    choices: [
      { id: "A", text: "$0$" },
      // distractor: adds the y-coordinates instead of subtracting them, computing (5 + 5)/(4 - (-3)) = 10/7
      { id: "B", text: "$\\frac{10}{7}$" },
      // distractor: reports the shared y-coordinate instead of the slope
      { id: "C", text: "$5$" },
      // distractor: reports the run 4 - (-3) = 7 instead of rise over run
      { id: "D", text: "$7$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Both points have $y = 5$, so the line is horizontal: the rise is $0$ and the slope is $0$.\n\n**The Full Solution:**\nStep 1: Slope $= \\frac{5 - 5}{4 - (-3)} = \\frac{0}{7}$.\nStep 2: A fraction with numerator $0$ and a nonzero denominator equals $0$, so the slope is $0$.\nStep 3: Check: the two points are at the same height, so the line through them is $y = 5$, which has slope $0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{10}{7}$): adds the $y$-coordinates instead of subtracting them, computing $\\frac{5 + 5}{4 - (-3)}$.\n* Choice C ($5$): reports the shared $y$-coordinate instead of the slope.\n* Choice D ($7$): reports the run $4 - (-3) = 7$ instead of rise over run.\n\n**Test Day Takeaway:** When two points share a $y$-coordinate, the rise is $0$, so the slope is $0$.",
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
    question: "For the linear function $h$, $h(2) = c$ and $h(8) = 5c$, where $c$ is a positive constant. What is the slope of the graph of $y = h(x)$ in the $xy$-plane?",
    choices: [
      // distractor: inverts rise and run, dividing the input gap by the output gap
      { id: "A", text: "$\\frac{3}{2c}$" },
      // distractor: divides by $8$ instead of by the input gap $8 - 2 = 6$
      { id: "B", text: "$\\frac{c}{2}$" },
      { id: "C", text: "$\\frac{2c}{3}$" },
      // distractor: adds the outputs, using $5c + c = 6c$ over a run of $6$
      { id: "D", text: "$c$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The outputs rise by $5c - c = 4c$ while the inputs rise by $6$, so the slope is $\\frac{4c}{6} = \\frac{2c}{3}$.\n\n**The Full Solution:**\nStep 1: The graph of $y = h(x)$ passes through $(2, c)$ and $(8, 5c)$.\nStep 2: Slope is $\\frac{5c - c}{8 - 2} = \\frac{4c}{6}$.\nStep 3: Reduce: $\\frac{4c}{6} = \\frac{2c}{3}$. Check with $c = 3$: the points are $(2, 3)$ and $(8, 15)$, and $\\frac{15 - 3}{8 - 2} = 2 = \\frac{2(3)}{3}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{2c}$): reverses the ratio, dividing the run by the rise.\n* Choice B ($\\frac{c}{2}$): divides $4c$ by $8$, using the ending input rather than the change in input.\n* Choice D ($c$): adds the two outputs instead of subtracting, giving $\\frac{6c}{6}$.\n\n**Test Day Takeaway:** A symbolic slope follows the same rule as a numeric one; subtract both coordinates, then reduce.",
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
    question: "$5x + 3y = 71$\n$3x + 5y = 65$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x + y$?",
    choices: [
      // distractor: subtracts the equations, which gives $2x - 2y = 6$, and reports $x - y = 3$
      { id: "A", text: "$3$" },
      // distractor: solves the whole system and reports $x = 10$ alone
      { id: "B", text: "$10$" },
      { id: "C", text: "$17$" },
      // distractor: adds the equations to get $8x + 8y = 136$ and stops without dividing by $8$
      { id: "D", text: "$136$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Add the equations: $8x + 8y = 136$, so $x + y = 17$.\n\n**The Full Solution:**\nStep 1: The coefficients are mirrored, so adding the equations makes the $x$- and $y$-coefficients equal: $(5x + 3y) + (3x + 5y) = 71 + 65$.\nStep 2: Combine like terms: $8x + 8y = 136$.\nStep 3: Divide each side by $8$: $x + y = 17$. Check with the actual solution $x = 10$, $y = 7$: $5(10) + 3(7) = 71$ and $3(10) + 5(7) = 65$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): subtracts the equations, which gives $2x - 2y = 6$, and reports $x - y = 3$\n* Choice B ($10$): solves the whole system and reports $x = 10$ alone\n* Choice D ($136$): adds the equations to get $8x + 8y = 136$ and stops without dividing by $8$\n\n**Test Day Takeaway:** When the coefficients in a system are mirrored, add the equations to get a multiple of $x + y$; divide by that multiple before answering.",
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
    question: "$7x + 4y = 39$\n$6x + 5y = 35$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x - y$?",
    choices: [
      // distractor: subtracts the first equation from the second, getting -x + y = -4, and reports y - x
      { id: "A", text: "$-4$" },
      { id: "B", text: "$4$" },
      // distractor: solves the whole system and reports x = 5
      { id: "C", text: "$5$" },
      // distractor: finds x + y = 6 instead of x - y
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Subtract the second equation from the first: $(7x - 6x) + (4y - 5y) = 39 - 35$, which is $x - y = 4$.\n\n**The Full Solution:**\nStep 1: Line up the equations and subtract the second from the first, term by term.\nStep 2: The $x$-terms give $7x - 6x = x$, the $y$-terms give $4y - 5y = -y$, and the constants give $39 - 35 = 4$.\nStep 3: So $x - y = 4$. Check: the solution is $(5, 1)$, since $7(5) + 4(1) = 39$ and $6(5) + 5(1) = 35$, and $5 - 1 = 4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): subtracts the first equation from the second, which gives $y - x = -4$, then reports that value.\n* Choice C ($5$): solves the system fully and reports $x$, not $x - y$.\n* Choice D ($6$): finds $x + y = 5 + 1$ instead of $x - y$.\n\n**Test Day Takeaway:** Before solving a system, check whether adding or subtracting the equations produces the exact combination the question asks for.",
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
    question: "$3x + 4y = 30$\n$4x + 3y = 33$\nIf $(x, y)$ is the solution to the given system of equations, what is the value of $5x + 2y$?",
    choices: [
      // distractor: solves the system and reports $x = 6$ alone
      { id: "A", text: "$6$" },
      // distractor: adds the equations and divides by $7$, which gives $x + y = 9$, not $5x + 2y$
      { id: "B", text: "$9$" },
      { id: "C", text: "$36$" },
      // distractor: doubles the second equation to get $8x + 6y = 66$ but never subtracts the first equation
      { id: "D", text: "$66$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $5x + 2y = 2(4x + 3y) - (3x + 4y) = 2(33) - 30 = 36$.\n\n**The Full Solution:**\nStep 1: Look for multiples of the two left sides that produce $5x + 2y$: doubling the second gives $8x + 6y = 66$.\nStep 2: Subtract the first equation: $(8x + 6y) - (3x + 4y) = 66 - 30$, so $5x + 2y = 36$.\nStep 3: Check by solving: adding the equations gives $x + y = 9$ and subtracting gives $x - y = 3$, so $x = 6$ and $y = 3$; then $5(6) + 2(3) = 36$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): solves the system and reports $x = 6$ alone\n* Choice B ($9$): adds the equations and divides by $7$, which gives $x + y = 9$, not $5x + 2y$\n* Choice D ($66$): doubles the second equation to get $8x + 6y = 66$ but never subtracts the first equation\n\n**Test Day Takeaway:** The target expression is often a simple combination of the given equations, such as twice one minus the other; find it before solving for $x$ and $y$.",
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
    question: "$4x + 3y = 97$\n$6x + 7y = 173$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x + 2y$?",
    choices: [
      // distractor: solves the system and reports $x = 16$
      { id: "A", text: "$16$" },
      // distractor: solves the system and reports $x + y = 16 + 11 = 27$
      { id: "B", text: "$27$" },
      { id: "C", text: "$38$" },
      // distractor: subtracts the equations to get $2x + 4y = 76$ and stops without dividing by $2$
      { id: "D", text: "$76$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Subtract the first equation from the second: $2x + 4y = 76$, so $x + 2y = 38$.\n\n**The Full Solution:**\nStep 1: Subtract the first equation from the second: $(6x + 7y) - (4x + 3y) = 173 - 97$.\nStep 2: Simplify: $2x + 4y = 76$.\nStep 3: Divide by $2$: $x + 2y = 38$. Check with the solution $x = 16$, $y = 11$: $4(16) + 3(11) = 97$, $6(16) + 7(11) = 173$, and $16 + 2(11) = 38$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($16$): solves the system and reports $x = 16$\n* Choice B ($27$): solves the system and reports $x + y = 16 + 11 = 27$\n* Choice D ($76$): subtracts the equations to get $2x + 4y = 76$ and stops without dividing by $2$\n\n**Test Day Takeaway:** Before solving a system, compare the target expression with the sum and the difference of the equations; one of them is often a multiple of it.",
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
    question: "$4x + 3y = 37$\n$2x + 5y = 41$\nThe solution to the given system of equations is $(x, y)$. What is the value of $10x + 11y$?",
    choices: [
      // distractor: adds the equations once each, which gives $6x + 8y = 78$, not $10x + 11y$
      { id: "A", text: "$78$" },
      { id: "B", text: "$115$" },
      // distractor: doubles the second equation instead of the first, which gives $8x + 13y = 119$
      { id: "C", text: "$119$" },
      // distractor: doubles both equations, which gives $12x + 16y = 156$
      { id: "D", text: "$156$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $10x + 11y = 2(4x + 3y) + (2x + 5y) = 2(37) + 41 = 115$.\n\n**The Full Solution:**\nStep 1: Write $10x + 11y = p(4x + 3y) + q(2x + 5y)$. Matching coefficients gives $4p + 2q = 10$ and $3p + 5q = 11$.\nStep 2: Solve: $p = 2$ and $q = 1$, since $4(2) + 2(1) = 10$ and $3(2) + 5(1) = 11$. So $10x + 11y = 2(37) + 41 = 115$.\nStep 3: Check by solving: doubling the second equation and subtracting the first gives $7y = 45$, so $y = \\frac{45}{7}$ and $x = \\frac{31}{7}$; then $10\\left(\\frac{31}{7}\\right) + 11\\left(\\frac{45}{7}\\right) = \\frac{310 + 495}{7} = 115$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($78$): adds the equations once each, which gives $6x + 8y = 78$, not $10x + 11y$\n* Choice C ($119$): doubles the second equation instead of the first, which gives $8x + 13y = 119$\n* Choice D ($156$): doubles both equations, which gives $12x + 16y = 156$\n\n**Test Day Takeaway:** When $x$ and $y$ come out as messy fractions, the question is asking for a combination: find the multipliers that build the target expression from the equations.",
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
    question: "$\\frac{x}{3} + \\frac{y}{2} = 1$\n$\\frac{x}{2} + \\frac{y}{3} = 4$\nIf $(x, y)$ satisfies the given system of equations, what is the value of $x + y$?",
    choices: [
      // distractor: adds the right sides, 1 + 4, without accounting for the fractional coefficients
      { id: "A", text: "$5$" },
      { id: "B", text: "$6$" },
      // distractor: solves the system and reports x = 12
      { id: "C", text: "$12$" },
      // distractor: clears the fractions, adds to get 5x + 5y = 30, and stops before dividing by 5
      { id: "D", text: "$30$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Adding the equations gives $\\frac{5}{6}x + \\frac{5}{6}y = 5$, so $\\frac{5}{6}(x + y) = 5$ and $x + y = 6$.\n\n**The Full Solution:**\nStep 1: Multiply each equation by $6$ to clear the fractions: $2x + 3y = 6$ and $3x + 2y = 24$.\nStep 2: Add the two equations: $5x + 5y = 30$.\nStep 3: Divide by $5$: $x + y = 6$. Check: the solution is $(12, -6)$, since $\\frac{12}{3} + \\frac{-6}{2} = 4 - 3 = 1$ and $\\frac{12}{2} + \\frac{-6}{3} = 6 - 2 = 4$, and $12 + (-6) = 6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): adds the right sides, $1 + 4$, as if the coefficients of $x + y$ were $1$.\n* Choice C ($12$): solves the system and reports $x$, not $x + y$.\n* Choice D ($30$): stops at $5x + 5y = 30$ without dividing by $5$.\n\n**Test Day Takeaway:** When the coefficients of $x$ and $y$ trade places between the equations, add them: the sum isolates a multiple of $x + y$.",
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
    question: "$3x - 7y = 5$\n$9x - 21y = k$\nIn the given system of equations, $k$ is a constant. If the system has infinitely many solutions, what is the value of $k$?",
    choices: [
      // distractor: divides $5$ by $3$ instead of multiplying
      { id: "A", text: "$\\frac{5}{3}$" },
      // distractor: keeps the constant $5$ while the coefficients are tripled, which describes a parallel line and no solution
      { id: "B", text: "$5$" },
      { id: "C", text: "$15$" },
      // distractor: multiplies $5$ by $9$, the new $x$-coefficient, instead of by the factor $3$
      { id: "D", text: "$45$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The second equation's coefficients are $3$ times the first's, so $k = 3(5) = 15$.\n\n**The Full Solution:**\nStep 1: Compare coefficients: $9 = 3(3)$ and $-21 = 3(-7)$, so the left side of the second equation is $3$ times the left side of the first.\nStep 2: A system has infinitely many solutions when one equation is a multiple of the other, so the constant must also be multiplied by $3$: $k = 3(5) = 15$.\nStep 3: Check: dividing $9x - 21y = 15$ by $3$ gives $3x - 7y = 5$, the same equation. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{5}{3}$): divides $5$ by $3$ instead of multiplying\n* Choice B ($5$): keeps the constant $5$ while the coefficients are tripled, which describes a parallel line and no solution\n* Choice D ($45$): multiplies $5$ by $9$, the new $x$-coefficient, instead of by the factor $3$\n\n**Test Day Takeaway:** Find the factor that turns one equation's coefficients into the other's, then apply that same factor to the constant.",
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
    question: "The table shows three values of $x$ and their corresponding values of $y$ for line $\\ell$ in the $xy$-plane. Line $m$ is the graph of $-6x + 15y = -24$. How many solutions does the system consisting of the equations of lines $\\ell$ and $m$ have?",
    questionTable: { headers: ["$x$", "$y$"], rows: [["$2$", "$-1$"], ["$7$", "$1$"], ["$12$", "$3$"]] },
    choices: [
      { id: "A", text: "Zero" },
      // distractor: assumes two different-looking equations always have different slopes
      { id: "B", text: "Exactly one" },
      // distractor: treats the system as if two lines could meet at exactly two points
      { id: "C", text: "Exactly two" },
      // distractor: sees that the slopes match and assumes the lines coincide without checking a point
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** Line $\\ell$ has slope $\\frac{1 - (-1)}{7 - 2} = \\frac{2}{5}$, and line $m$, $y = \\frac{2}{5}x - \\frac{8}{5}$, has the same slope; but $(2, -1)$ is not on $m$, so the lines are parallel and distinct.\n\n**The Full Solution:**\nStep 1: From the table, the slope of line $\\ell$ is $\\frac{1 - (-1)}{7 - 2} = \\frac{2}{5}$, and line $\\ell$ passes through $(2, -1)$.\nStep 2: Solve $-6x + 15y = -24$ for $y$: $15y = 6x - 24$, so $y = \\frac{2}{5}x - \\frac{8}{5}$. Line $m$ also has slope $\\frac{2}{5}$.\nStep 3: Test the table point $(2, -1)$ in line $m$: $-6(2) + 15(-1) = -27$, not $-24$. Parallel lines with no common point never meet, so the system has zero solutions. Check: line $\\ell$ is $y = \\frac{2}{5}x - \\frac{9}{5}$, whose $y$-intercept differs from line $m$'s $-\\frac{8}{5}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B (Exactly one): assumes two different-looking equations must have different slopes, without comparing them.\n* Choice C (Exactly two): two distinct lines can never meet in exactly two points.\n* Choice D (Infinitely many): notices the matching slopes and assumes the lines are the same without checking a point.\n\n**Test Day Takeaway:** Equal slopes mean zero or infinitely many solutions; test one point to decide which.",
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
    question: "The table shows three values of $x$ and their corresponding values of $y$. Each pair $(x, y)$ satisfies a linear equation. Which equation, together with this linear equation, forms a system with infinitely many solutions?",
    questionTable: { headers: ["$x$", "$y$"], rows: [["$2$", "$1$"], ["$5$", "$7$"], ["$8$", "$13$"]] },
    choices: [
      // distractor: puts the tripled coefficient on the wrong variable, which gives slope $\frac{1}{2}$ instead of $2$
      { id: "A", text: "$3x - 6y = 9$" },
      // distractor: matches the slope but not the constant, so the graphs are parallel and never meet
      { id: "B", text: "$6x - 3y = 3$" },
      { id: "C", text: "$6x - 3y = 9$" },
      // distractor: flips the sign of the $y$-term, which gives slope $-2$, so the graphs cross exactly once
      { id: "D", text: "$6x + 3y = 9$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The pairs give $y = 2x - 3$, or $2x - y = 3$; multiplying by $3$ gives $6x - 3y = 9$.\n\n**The Full Solution:**\nStep 1: Find the slope from two rows: $\\frac{7 - 1}{5 - 2} = 2$. Then $1 = 2(2) + b$ gives $b = -3$, so the equation is $y = 2x - 3$, or $2x - y = 3$.\nStep 2: A second equation gives infinitely many solutions only if it is a nonzero multiple of $2x - y = 3$. Multiplying by $3$ gives $6x - 3y = 9$.\nStep 3: Check: every row satisfies $6x - 3y = 9$: $6(2) - 3(1) = 9$, $6(5) - 3(7) = 9$, and $6(8) - 3(13) = 9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x - 6y = 9$): puts the tripled coefficient on the wrong variable, which gives slope $\\frac{1}{2}$ instead of $2$\n* Choice B ($6x - 3y = 3$): matches the slope but not the constant, so the graphs are parallel and never meet\n* Choice D ($6x + 3y = 9$): flips the sign of the $y$-term, which gives slope $-2$, so the graphs cross exactly once\n\n**Test Day Takeaway:** Write the equation from the table first, then look for the choice that is the same equation multiplied through by one number, constant included.",
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
    question: "The table shows three values of $x$ and their corresponding values of $y$. Each pair $(x, y)$ satisfies a linear equation. A second linear equation is $10x + 5y = c$, where $c$ is a constant. Which statement about the system of these two equations is true?",
    questionTable: { headers: ["$x$", "$y$"], rows: [["$0$", "$15$"], ["$3$", "$9$"], ["$6$", "$3$"]] },
    choices: [
      // distractor: is false at $c = 75$, where the second equation is $5$ times the first and the graphs coincide
      { id: "A", text: "The system has no solution for every value of $c$." },
      // distractor: at $c = 75$ the two graphs are the same line, so the system has infinitely many solutions, not one
      { id: "B", text: "The system has exactly one solution when $c = 75$." },
      { id: "C", text: "The system has infinitely many solutions when $c = 75$." },
      // distractor: any $c$ other than $75$ makes the lines parallel and distinct, so the system then has no solution
      { id: "D", text: "The system has infinitely many solutions for every value of $c$." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The pairs give $2x + y = 15$; multiplying by $5$ gives $10x + 5y = 75$, so $c = 75$ makes the equations the same.\n\n**The Full Solution:**\nStep 1: Find the equation from the table: the slope is $\\frac{9 - 15}{3 - 0} = -2$ and the $y$-intercept is $15$, so $y = -2x + 15$, or $2x + y = 15$.\nStep 2: Multiply by $5$: $10x + 5y = 75$. The left side matches $10x + 5y$ exactly, so the two lines have the same slope for every $c$.\nStep 3: If $c = 75$ the equations are the same line (infinitely many solutions); if $c \\neq 75$ the lines are parallel and distinct (no solution). Check: $(6, 3)$ gives $10(6) + 5(3) = 75$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (The system has no solution for every value of $c$.): is false at $c = 75$, where the second equation is $5$ times the first and the graphs coincide\n* Choice B (The system has exactly one solution when $c = 75$.): at $c = 75$ the two graphs are the same line, so the system has infinitely many solutions, not one\n* Choice D (The system has infinitely many solutions for every value of $c$.): any $c$ other than $75$ makes the lines parallel and distinct, so the system then has no solution\n\n**Test Day Takeaway:** When the left sides of two linear equations are multiples of each other, the constant alone decides between no solution and infinitely many.",
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
    question: "The table shows three points that lie on a line in the $xy$-plane. This line is the graph of $6x + cy = 36$, where $c$ is a constant. What is the value of $c$?",
    questionTable: { headers: ["$x$", "$y$"], rows: [["$0$", "$4$"], ["$3$", "$2$"], ["$6$", "$0$"]] },
    choices: [
      // distractor: treats the slope as $\frac{2}{3}$ instead of $-\frac{2}{3}$, which gives $6x - 9y$
      { id: "A", text: "$-9$" },
      // distractor: stops at $2x + 3y = 12$ and keeps the $y$-coefficient $3$ without multiplying it by $3$
      { id: "B", text: "$3$" },
      // distractor: reports the $y$-intercept, $4$, instead of the coefficient $c$
      { id: "C", text: "$4$" },
      { id: "D", text: "$9$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The point $(0, 4)$ must satisfy $6x + cy = 36$, so $4c = 36$ and $c = 9$.\n\n**The Full Solution:**\nStep 1: Substitute the point $(0, 4)$ into $6x + cy = 36$: $6(0) + 4c = 36$.\nStep 2: Solve: $c = 9$, so the equation is $6x + 9y = 36$, which is $3$ times $2x + 3y = 12$.\nStep 3: Check the other two points: $6(3) + 9(2) = 36$ and $6(6) + 9(0) = 36$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): treats the slope as $\\frac{2}{3}$ instead of $-\\frac{2}{3}$, which gives $6x - 9y$\n* Choice B ($3$): stops at $2x + 3y = 12$ and keeps the $y$-coefficient $3$ without multiplying it by $3$\n* Choice C ($4$): reports the $y$-intercept, $4$, instead of the coefficient $c$\n\n**Test Day Takeaway:** Any point on the line satisfies its equation; a point with $x = 0$ isolates the unknown $y$-coefficient in one step.",
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
    question: "$tx + 6y = 9$\n$8x + (t + 2)y = 12$\nIn the given system of equations, $t$ is a constant. For what value of $t$ does the system have infinitely many solutions?",
    choices: [
      // distractor: solves $t(t + 2) = 48$ but keeps $t = -8$, where the coefficients scale by $-1$ while the constants do not, so the system has no solution
      { id: "A", text: "$-8$" },
      // distractor: sets $t + 2 = 6$, assuming the $y$-coefficients must be equal rather than proportional
      { id: "B", text: "$4$" },
      { id: "C", text: "$6$" },
      // distractor: sets $t = 8$, assuming the $x$-coefficients must be equal rather than proportional
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The constants give the factor $\\frac{12}{9} = \\frac{4}{3}$, so $8 = \\frac{4}{3}t$ and $t = 6$; then $t + 2 = 8 = \\frac{4}{3}(6)$.\n\n**The Full Solution:**\nStep 1: For infinitely many solutions, the second equation must be the first multiplied by one number. The constants fix that number: $\\frac{12}{9} = \\frac{4}{3}$.\nStep 2: Apply it to the $x$-coefficients: $8 = \\frac{4}{3}t$, so $t = 6$.\nStep 3: Check the $y$-coefficients: $\\frac{4}{3}(6) = 8 = 6 + 2$. With $t = 6$ the equations are $6x + 6y = 9$ and $8x + 8y = 12$, both equivalent to $2x + 2y = 3$. (The value $t = -8$ also makes the coefficients proportional, but the constants then fail, so that system has no solution.) $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): solves $t(t + 2) = 48$ but keeps $t = -8$, where the coefficients scale by $-1$ while the constants do not, so the system has no solution\n* Choice B ($4$): sets $t + 2 = 6$, assuming the $y$-coefficients must be equal rather than proportional\n* Choice D ($8$): sets $t = 8$, assuming the $x$-coefficients must be equal rather than proportional\n\n**Test Day Takeaway:** For infinitely many solutions, every part of one equation, constant included, must be the same multiple of the other; use the constants to find that multiple.",
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
    question: "$3x + y = 47$\n$3x + 4y = 80$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x$?",
    choices: [
      // distractor: solves the system correctly but reports $y = 11$ instead of $x$
      { id: "A", text: "$11$" },
      { id: "B", text: "$12$" },
      // distractor: adds the two values, $12 + 11 = 23$
      { id: "C", text: "$23$" },
      // distractor: stops at $3x = 36$ without dividing by $3$
      { id: "D", text: "$36$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: System of Equations (Elimination)**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Subtracting the equations gives $3y = 33$, so $y = 11$; then $3x = 47 - 11 = 36$ and $x = 12$.\n\n**The Full Solution:**\nStep 1: The $x$-terms are identical, so subtract the first equation from the second: $3y = 33$.\nStep 2: Solve: $y = 11$. Substitute into the first equation: $3x + 11 = 47$, so $3x = 36$ and $x = 12$.\nStep 3: Check in the second equation: $3(12) + 4(11) = 36 + 44 = 80$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($11$): solves the system correctly but reports $y = 11$ instead of $x$\n* Choice C ($23$): adds the two values, $12 + 11 = 23$\n* Choice D ($36$): stops at $3x = 36$ without dividing by $3$\n\n**Test Day Takeaway:** When two equations share an identical term, subtract them at once; then make sure you report the variable the question asks for.",
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
    question: "A set of $2$ notebooks and $3$ binders costs \\$8.60, and a set of $2$ notebooks and $5$ binders costs \\$11.80. What is the price, in dollars, of one binder?",
    choices: [
      { id: "A", text: "$1.60$" },
      // distractor: solves the system but reports the price of one notebook, \$1.90
      { id: "B", text: "$1.90$" },
      // distractor: stops at the cost of the $2$ extra binders, \$3.20, without dividing by $2$
      { id: "C", text: "$3.20$" },
      // distractor: adds the prices of one notebook and one binder, \$1.90 + \$1.60 = \$3.50
      { id: "D", text: "$3.50$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: System of Equations (Elimination)**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The second purchase has $2$ more binders and costs \\$3.20 more than the first, so one binder costs \\$1.60.\n\n**The Full Solution:**\nStep 1: Let $n$ be the price of a notebook and $b$ the price of a binder, in dollars: $2n + 3b = 8.60$ and $2n + 5b = 11.80$.\nStep 2: Subtract the first equation from the second: $2b = 3.20$, so $b = 1.60$.\nStep 3: Check: $2n + 3(1.60) = 8.60$ gives $n = 1.90$, and $2(1.90) + 5(1.60) = 3.80 + 8.00 = 11.80$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($1.90$): solves the system but reports the price of one notebook, \\$1.90\n* Choice C ($3.20$): stops at the cost of the $2$ extra binders, \\$3.20, without dividing by $2$\n* Choice D ($3.50$): adds the prices of one notebook and one binder, \\$1.90 + \\$1.60 = \\$3.50\n\n**Test Day Takeaway:** When two purchases differ in only one item, the difference in cost belongs entirely to that item.",
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
    question: "$4x + 3y = 213$\n$4x + 5y = 275$\nIf $(x, y)$ is the solution to the given system of equations, what is the value of $x + y$?",
    choices: [
      // distractor: reports $x = 30$ alone
      { id: "A", text: "$30$" },
      // distractor: reports $y = 31$ alone
      { id: "B", text: "$31$" },
      { id: "C", text: "$61$" },
      // distractor: stops at $2y = 62$ from subtracting the equations
      { id: "D", text: "$62$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System of Equations (Elimination)**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Subtracting gives $2y = 62$, so $y = 31$; then $4x = 213 - 93 = 120$, so $x = 30$ and $x + y = 61$.\n\n**The Full Solution:**\nStep 1: The $x$-terms match, so subtract the first equation from the second: $2y = 62$, and $y = 31$.\nStep 2: Substitute into the first equation: $4x + 3(31) = 213$, so $4x = 120$ and $x = 30$.\nStep 3: Add: $x + y = 30 + 31 = 61$. Check in the second equation: $4(30) + 5(31) = 120 + 155 = 275$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($30$): reports $x = 30$ alone\n* Choice B ($31$): reports $y = 31$ alone\n* Choice D ($62$): stops at $2y = 62$ from subtracting the equations\n\n**Test Day Takeaway:** Finish the question that was asked: after finding both variables, combine them as the final sentence requires.",
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
    question: "$7x + 4y = 218$\n$5x + 6y = 184$\nIf $(x, y)$ is the solution to the given system of equations, what is the value of $x$?",
    choices: [
      // distractor: solves the system but reports $y = 9$ instead of $x$
      { id: "A", text: "$9$" },
      // distractor: subtracts the equations without scaling, which gives $2x - 2y = 34$, and reports $x - y = 17$
      { id: "B", text: "$17$" },
      { id: "C", text: "$26$" },
      // distractor: adds the two values, $26 + 9 = 35$
      { id: "D", text: "$35$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System of Equations (Elimination)**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Multiply the first equation by $3$ and the second by $2$, then subtract: $11x = 286$, so $x = 26$.\n\n**The Full Solution:**\nStep 1: Make the $y$-coefficients match: $3(7x + 4y) = 3(218)$ gives $21x + 12y = 654$, and $2(5x + 6y) = 2(184)$ gives $10x + 12y = 368$.\nStep 2: Subtract: $11x = 286$, so $x = 26$.\nStep 3: Find $y$ to check: $7(26) + 4y = 218$ gives $4y = 36$, so $y = 9$; then $5(26) + 6(9) = 130 + 54 = 184$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): solves the system but reports $y = 9$ instead of $x$\n* Choice B ($17$): subtracts the equations without scaling, which gives $2x - 2y = 34$, and reports $x - y = 17$\n* Choice D ($35$): adds the two values, $26 + 9 = 35$\n\n**Test Day Takeaway:** Scale both equations to a common coefficient before eliminating; subtracting unscaled equations gives a true equation, but not the variable you need.",
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
    question: "$3x + 4y = 26$\n$9x + ky = 68$\nIn the given system of equations, $k$ is a constant. The solution to the system is $(x, y)$, where $x = 2$. What is the value of $k$?",
    choices: [
      // distractor: reports the given value $x = 2$ instead of $k$
      { id: "A", text: "$2$" },
      // distractor: reports $y = 5$, the other coordinate of the solution
      { id: "B", text: "$5$" },
      { id: "C", text: "$10$" },
      // distractor: stops at $5k = 50$ without dividing by $5$
      { id: "D", text: "$50$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System of Equations (Elimination)**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** From the first equation, $6 + 4y = 26$, so $y = 5$; then $18 + 5k = 68$, so $k = 10$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 2$ into the first equation: $3(2) + 4y = 26$, so $4y = 20$ and $y = 5$.\nStep 2: Substitute $x = 2$ and $y = 5$ into the second equation: $9(2) + 5k = 68$, so $5k = 50$.\nStep 3: Solve: $k = 10$. Check: $9(2) + 10(5) = 18 + 50 = 68$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports the given value $x = 2$ instead of $k$\n* Choice B ($5$): reports $y = 5$, the other coordinate of the solution\n* Choice D ($50$): stops at $5k = 50$ without dividing by $5$\n\n**Test Day Takeaway:** Use the equation with no unknown constant to finish the solution point, then substitute the whole point into the other equation.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-equations-elimination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-478",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$3x - 5y = 11$\n$ax + 15y = b$\nFor constants $a$ and $b$, the given system of equations has infinitely many solutions. What is the value of $a + b$?",
    choices: [
      { id: "A", text: "$-42$" },
      // distractor: multiplies the y-coefficient and constant by -3 but uses a = 9, getting 9 + (-33)
      { id: "B", text: "$-24$" },
      // distractor: uses a = -9 but forgets to negate the constant, getting -9 + 33
      { id: "C", text: "$24$" },
      // distractor: multiplies the first equation by 3 instead of -3, getting 9 + 33
      { id: "D", text: "$42$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Same Line Infinitely Many Solutions**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The $y$-coefficient changes from $-5$ to $15$, a factor of $-3$, so the second equation must be $-3$ times the first: $a = -9$, $b = -33$, and $a + b = -42$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the equations describe the same line, so the second equation is a constant multiple of the first.\nStep 2: The $y$-coefficients give the multiplier: $\\frac{15}{-5} = -3$. Multiplying the first equation by $-3$ gives $-9x + 15y = -33$.\nStep 3: Match terms: $a = -9$ and $b = -33$, so $a + b = -42$. Check: adding $3$ times the first equation to the second leaves $0 = 0$, so every solution of one equation solves the other ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-24$): keeps $b = -33$ but takes $a = 9$, missing the sign on the multiplier for the $x$-term.\n* Choice C ($24$): takes $a = -9$ but forgets to negate the constant, using $b = 33$.\n* Choice D ($42$): multiplies the first equation by $3$ instead of $-3$.\n\n**Test Day Takeaway:** For infinitely many solutions, find the one multiplier that turns the first equation into the second, and apply it to every term, the constant included.",
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
    question: "$y = x + 9$\n$x + y = 41$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x$?",
    choices: [
      // distractor: reports the constant $9$ from the first equation
      { id: "A", text: "$9$" },
      { id: "B", text: "$16$" },
      // distractor: solves the system but reports $y = 25$ instead of $x$
      { id: "C", text: "$25$" },
      // distractor: stops at $2x = 32$ without dividing by $2$
      { id: "D", text: "$32$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: System of Equations (Substitution)**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Substitute $x + 9$ for $y$: $2x + 9 = 41$, so $2x = 32$ and $x = 16$.\n\n**The Full Solution:**\nStep 1: The first equation gives $y$ in terms of $x$. Substitute $x + 9$ for $y$ in the second equation: $x + (x + 9) = 41$.\nStep 2: Combine like terms: $2x + 9 = 41$, so $2x = 32$.\nStep 3: Divide by $2$: $x = 16$. Check: $y = 16 + 9 = 25$, and $16 + 25 = 41$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): reports the constant $9$ from the first equation\n* Choice C ($25$): solves the system but reports $y = 25$ instead of $x$\n* Choice D ($32$): stops at $2x = 32$ without dividing by $2$\n\n**Test Day Takeaway:** When one equation is already solved for a variable, substitute that expression directly into the other equation.",
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
    question: "A school's band and choir have $85$ students in all, and the band has $4$ times as many students as the choir. How many students are in the band?",
    choices: [
      // distractor: solves for the choir, $17$ students, instead of the band
      { id: "A", text: "$17$" },
      // distractor: doubles the choir instead of multiplying by $4$, $2(17) = 34$
      { id: "B", text: "$34$" },
      { id: "C", text: "$68$" },
      // distractor: reports the total of $85$ students rather than the band alone
      { id: "D", text: "$85$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System of Equations (Substitution)**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** With $c$ students in the choir, $4c + c = 85$, so $c = 17$ and the band has $4(17) = 68$ students.\n\n**The Full Solution:**\nStep 1: Let $b$ be the number of students in the band and $c$ the number in the choir: $b + c = 85$ and $b = 4c$.\nStep 2: Substitute $4c$ for $b$: $4c + c = 85$, so $5c = 85$ and $c = 17$.\nStep 3: Find the band: $b = 4(17) = 68$. Check: $68 + 17 = 85$, and $68 = 4(17)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($17$): solves for the choir, $17$ students, instead of the band\n* Choice B ($34$): doubles the choir instead of multiplying by $4$, $2(17) = 34$\n* Choice D ($85$): reports the total of $85$ students rather than the band alone\n\n**Test Day Takeaway:** Substitute the \"times as many\" equation into the total, then reread the question to see which group it asks about.",
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
    question: "$y = 4x - n$\n$2x + y = 30$\nIn the given system of equations, $n$ is a constant. The solution to the system is $(x, 14)$. What is the value of $n$?",
    choices: [
      // distractor: reports x = 8 instead of n
      { id: "A", text: "$8$" },
      // distractor: reports the given y-value 14 instead of n
      { id: "B", text: "$14$" },
      { id: "C", text: "$18$" },
      // distractor: solves 14 = 32 - n as n = 14 + 32
      { id: "D", text: "$46$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System of Equations (Substitution)**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** With $y = 14$, the second equation gives $2x = 16$, so $x = 8$; then $14 = 4(8) - n$ gives $n = 18$.\n\n**The Full Solution:**\nStep 1: Substitute $y = 14$ into the equation without the constant: $2x + 14 = 30$.\nStep 2: Solve for $x$: $2x = 16$, so $x = 8$.\nStep 3: Substitute both coordinates into $y = 4x - n$: $14 = 32 - n$, so $n = 18$. Check: $4(8) - 18 = 14$ and $2(8) + 14 = 30$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): reports $x = 8$, the coordinate found along the way, instead of the constant.\n* Choice B ($14$): reports the $y$-value that the question supplied.\n* Choice D ($46$): turns $14 = 32 - n$ into $n = 14 + 32$, adding where the equation calls for subtracting.\n\n**Test Day Takeaway:** When one coordinate is given, substitute it into the equation that has no unknown constant first; the constant then follows from the other equation.",
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
    question: "$x = 4y - 7$\n$3x + 2y = 21$\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
    choices: [
      // distractor: substitutes 4y + 7 instead of 4y - 7
      { id: "A", text: "$0$" },
      // distractor: distributes the 3 to 4y but not to -7
      { id: "B", text: "$2$" },
      { id: "C", text: "$3$" },
      // distractor: reports x instead of y
      { id: "D", text: "$5$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System of Equations (Substitution)**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Substitute: $3(4y - 7) + 2y = 21$, so $14y - 21 = 21$ and $y = 3$.\n\n**The Full Solution:**\nStep 1: Replace $x$ in the second equation with $4y - 7$: $3(4y - 7) + 2y = 21$.\nStep 2: Distribute and combine like terms: $12y - 21 + 2y = 21$, so $14y = 42$.\nStep 3: Divide: $y = 3$. Check: $x = 4(3) - 7 = 5$, and $3(5) + 2(3) = 15 + 6 = 21$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): substitutes $4y + 7$ instead of $4y - 7$, so $12y + 21 + 2y = 21$ and $y = 0$.\n* Choice B ($2$): multiplies only the $4y$ by $3$, writing $12y - 7 + 2y = 21$, so $14y = 28$ and $y = 2$.\n* Choice D ($5$): is the value of $x$, not $y$.\n\n**Test Day Takeaway:** When one equation is already solved for a variable, substitute the whole expression in parentheses so the coefficient multiplies every term.",
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
    question: "$y = 5 - 2x$\n$3x - 4y = 13$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x$?",
    choices: [
      // distractor: gets -8x instead of +8x when distributing -4 over -2x
      { id: "A", text: "$-6.6$" },
      // distractor: reports y instead of x
      { id: "B", text: "$-1$" },
      { id: "C", text: "$3$" },
      // distractor: distributes -4 to the 5 but not to the -2x
      { id: "D", text: "$33$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System of Equations (Substitution)**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Substitute: $3x - 4(5 - 2x) = 13$, so $11x - 20 = 13$ and $x = 3$.\n\n**The Full Solution:**\nStep 1: Replace $y$ in the second equation with $5 - 2x$: $3x - 4(5 - 2x) = 13$.\nStep 2: Distribute the $-4$ to both terms: $3x - 20 + 8x = 13$, so $11x = 33$.\nStep 3: Divide: $x = 3$. Check: $y = 5 - 2(3) = -1$, and $3(3) - 4(-1) = 9 + 4 = 13$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6.6$): multiplies $-4$ by $-2x$ and gets $-8x$, so $3x - 20 - 8x = 13$ and $x = -6.6$.\n* Choice B ($-1$): is the value of $y$, not $x$.\n* Choice D ($33$): multiplies only the $5$ by $-4$, writing $3x - 20 - 2x = 13$, so $x = 33$.\n\n**Test Day Takeaway:** A negative coefficient in front of a substituted expression multiplies every term inside, and negative times negative is positive.",
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
    question: "$x = 3y - 4$\n$\\frac{x}{2} + \\frac{y}{4} = 5$\nThe solution to the given system of equations is $(x, y)$. What is the value of $xy$?",
    choices: [
      // distractor: reports y instead of xy
      { id: "A", text: "$4$" },
      // distractor: reports x instead of xy
      { id: "B", text: "$8$" },
      // distractor: adds x and y instead of multiplying
      { id: "C", text: "$12$" },
      { id: "D", text: "$32$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: System of Equations (Substitution)**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** Multiply the second equation by $4$ to get $2x + y = 20$; substituting gives $2(3y - 4) + y = 20$, so $y = 4$, $x = 8$, and $xy = 32$.\n\n**The Full Solution:**\nStep 1: Clear the fractions by multiplying the second equation by $4$: $2x + y = 20$.\nStep 2: Substitute $x = 3y - 4$: $2(3y - 4) + y = 20$, so $7y - 8 = 20$, $7y = 28$, and $y = 4$.\nStep 3: Then $x = 3(4) - 4 = 8$, so $xy = 8(4) = 32$. Check: $\\frac{8}{2} + \\frac{4}{4} = 4 + 1 = 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): is the value of $y$ alone, the first value the substitution produces.\n* Choice B ($8$): is the value of $x$ alone.\n* Choice C ($12$): adds the two values, $8 + 4 = 12$, instead of multiplying them.\n\n**Test Day Takeaway:** Clear fractions first, then substitute; and before choosing, reread whether the question wants $x$, $y$, or an expression in both.",
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
    question: "A pottery studio sold $84$ mugs and bowls at a craft fair for a total of \\$1,224. The table shows the price of each item. How many bowls did the studio sell?",
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
    question: "Ana and Ben read a total of $41$ books this year. Ana read $13$ more books than Ben. How many books did Ana read?",
    choices: [
      // distractor: reports Ben's count instead of Ana's
      { id: "A", text: "$14$" },
      { id: "B", text: "$27$" },
      // distractor: computes 41 - 13 without splitting between the two readers
      { id: "C", text: "$28$" },
      // distractor: adds 41 and 13 and forgets to divide by 2
      { id: "D", text: "$54$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Adding $a + b = 41$ and $a - b = 13$ gives $2a = 54$, so $a = 27$.\n\n**The Full Solution:**\nStep 1: Let $a$ and $b$ be the numbers of books Ana and Ben read. Then $a + b = 41$ and $a = b + 13$.\nStep 2: Substitute $a = b + 13$ into the first equation: $(b + 13) + b = 41$, so $2b = 28$ and $b = 14$.\nStep 3: Then $a = 14 + 13 = 27$. Check: $27 + 14 = 41$ and $27 - 14 = 13$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): is the number of books Ben read, the other unknown.\n* Choice C ($28$): subtracts the difference from the total, $41 - 13 = 28$, without splitting the rest between the two readers.\n* Choice D ($54$): adds the total and the difference, $41 + 13 = 54$, and stops before dividing by $2$.\n\n**Test Day Takeaway:** A total and a difference give two equations; solve for the variable the question names, not the first one that turns up.",
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
    question: "A ferry sold $250$ tickets for one crossing for a total of \\$3,700. The table shows the price of each type of ticket. How many walk-on tickets were sold?",
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
    question: "A shipment consists of $60$ crates, each of which is either small or large. The table shows the mass of each type of crate. If the total mass of the shipment is $1{,}375$ kilograms, how many large crates are in the shipment?",
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
    question: "A school bought $x$ notebooks at \\$2 each and $y$ binders at \\$5 each, for a total of $150$ items and \\$510. Which system of equations represents this situation?",
    choices: [
      // distractor: swaps the two prices
      { id: "A", text: "$x + y = 150$ and $5x + 2y = 510$" },
      // distractor: swaps the item total and the dollar total
      { id: "B", text: "$x + y = 510$ and $2x + 5y = 150$" },
      // distractor: charges every item the sum of the two prices
      { id: "C", text: "$x + y = 150$ and $7(x + y) = 510$" },
      { id: "D", text: "$x + y = 150$ and $2x + 5y = 510$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Count: $x + y = 150$. Cost: $2$ dollars per notebook and $5$ dollars per binder give $2x + 5y = 510$.\n\n**The Full Solution:**\nStep 1: The school bought $150$ notebooks and binders in all, so $x + y = 150$.\nStep 2: The notebooks cost $2x$ dollars and the binders cost $5y$ dollars, so $2x + 5y = 510$.\nStep 3: The system is $x + y = 150$ and $2x + 5y = 510$, choice D. Check: its solution, $x = 80$ and $y = 70$, gives $80 + 70 = 150$ items and $2(80) + 5(70) = 160 + 350 = 510$ dollars ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x + y = 150$ and $5x + 2y = 510$): attaches each price to the wrong item, charging \\$5 per notebook and \\$2 per binder.\n* Choice B ($x + y = 510$ and $2x + 5y = 150$): swaps the two totals, setting the item count equal to the dollar amount.\n* Choice C ($x + y = 150$ and $7(x + y) = 510$): charges every item the combined price of a notebook and a binder, $2 + 5 = 7$ dollars.\n\n**Test Day Takeaway:** Write one equation for the count and one for the money, and pair each price with the variable for that item.",
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
    question: "A florist sold small and large bouquets at a market for a total of \\$880. The table shows the price of each size. The florist sold $5$ more than twice as many small bouquets as large bouquets. How many large bouquets did the florist sell?",
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
    question: "$6x + 15 = 63$\nWhat value of $x$ is the solution to the given equation?",
    choices: [
      { id: "A", text: "$8$" },
      // distractor: adds 15 instead of subtracting it
      { id: "B", text: "$13$" },
      // distractor: subtracts 6 instead of dividing by 6
      { id: "C", text: "$42$" },
      // distractor: reports 6x instead of x
      { id: "D", text: "$48$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Subtract $15$: $6x = 48$. Divide by $6$: $x = 8$.\n\n**The Full Solution:**\nStep 1: Subtract $15$ from both sides: $6x = 48$.\nStep 2: Divide both sides by $6$: $x = 8$.\nStep 3: The solution is $8$. Check: $6(8) + 15 = 48 + 15 = 63$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($13$): adds $15$ to both sides instead of subtracting it, so $6x = 78$ and $x = 13$.\n* Choice C ($42$): subtracts $6$ from $48$ instead of dividing by $6$.\n* Choice D ($48$): stops at $6x = 48$ and reports the value of $6x$.\n\n**Test Day Takeaway:** Undo the addition first, then the multiplication, and finish by dividing; the value of $6x$ is not the value of $x$.",
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
    question: "A gym charges a one-time fee of \\$45 plus \\$30 for each month of membership. Jada paid the gym a total of \\$285. For how many months of membership did Jada pay?",
    choices: [
      { id: "A", text: "$8$" },
      // distractor: ignores the one-time fee
      { id: "B", text: "$9.5$" },
      // distractor: adds the fee instead of subtracting it
      { id: "C", text: "$11$" },
      // distractor: reports the dollars paid for months instead of the number of months
      { id: "D", text: "$240$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Remove the fee: $285 - 45 = 240$. Divide by the monthly charge: $240 \\div 30 = 8$.\n\n**The Full Solution:**\nStep 1: Let $m$ be the number of months. The total paid is $45 + 30m = 285$.\nStep 2: Subtract $45$ from both sides: $30m = 240$.\nStep 3: Divide by $30$: $m = 8$. Check: $45 + 30(8) = 45 + 240 = 285$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($9.5$): divides the total by the monthly charge, $285 \\div 30 = 9.5$, ignoring the one-time fee.\n* Choice C ($11$): adds the fee to the total instead of subtracting it, $(285 + 45) \\div 30 = 11$.\n* Choice D ($240$): is the amount Jada paid for the months, $285 - 45 = 240$ dollars, not the number of months.\n\n**Test Day Takeaway:** A one-time fee plus a charge per unit is a two-step equation: subtract the fee, then divide by the rate.",
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
    question: "$11 - 4x = 39$\nWhat is the solution to the given equation?",
    choices: [
      // distractor: adds 11 instead of subtracting it
      { id: "A", text: "$-12.5$" },
      { id: "B", text: "$-7$" },
      // distractor: divides by 4 instead of -4
      { id: "C", text: "$7$" },
      // distractor: reports the right side of -4x = 28
      { id: "D", text: "$28$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Subtract $11$: $-4x = 28$. Divide by $-4$: $x = -7$.\n\n**The Full Solution:**\nStep 1: Subtract $11$ from both sides: $-4x = 28$.\nStep 2: Divide both sides by $-4$: $x = \\frac{28}{-4} = -7$.\nStep 3: The solution is $-7$. Check: $11 - 4(-7) = 11 + 28 = 39$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12.5$): adds $11$ to both sides instead of subtracting it, so $-4x = 50$ and $x = -12.5$.\n* Choice C ($7$): divides $28$ by $4$ instead of by $-4$, dropping the negative sign.\n* Choice D ($28$): stops at $-4x = 28$ and reports $28$.\n\n**Test Day Takeaway:** Keep the sign with the coefficient: in $11 - 4x$, the coefficient of $x$ is $-4$, so the last step divides by $-4$.",
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
    question: "If $\\frac{2x}{3} + 7 = 19$, what is the value of $x$?",
    choices: [
      // distractor: multiplies by 2/3 instead of by 3/2
      { id: "A", text: "$8$" },
      // distractor: reports the value of 2x/3
      { id: "B", text: "$12$" },
      { id: "C", text: "$18$" },
      // distractor: adds 7 instead of subtracting it
      { id: "D", text: "$39$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Subtract $7$: $\\frac{2x}{3} = 12$. Multiply by $\\frac{3}{2}$: $x = 18$.\n\n**The Full Solution:**\nStep 1: Subtract $7$ from both sides: $\\frac{2x}{3} = 12$.\nStep 2: Multiply both sides by $\\frac{3}{2}$: $x = 12 \\cdot \\frac{3}{2}$.\nStep 3: So $x = 18$. Check: $\\frac{2(18)}{3} + 7 = 12 + 7 = 19$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): multiplies $12$ by $\\frac{2}{3}$ instead of by its reciprocal, $\\frac{3}{2}$.\n* Choice B ($12$): stops at $\\frac{2x}{3} = 12$ and reports $12$.\n* Choice D ($39$): adds $7$ instead of subtracting it, so $\\frac{2x}{3} = 26$ and $x = 39$.\n\n**Test Day Takeaway:** To undo a coefficient of $\\frac{2}{3}$, multiply by $\\frac{3}{2}$, its reciprocal.",
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
    question: "If $3x + 15 = 36$, what is the value of $x + 5$?",
    choices: [
      // distractor: reports x instead of x + 5
      { id: "A", text: "$7$" },
      { id: "B", text: "$12$" },
      // distractor: divides 36 by 3 and adds 5, ignoring the 15
      { id: "C", text: "$17$" },
      // distractor: reports 3x instead of x + 5
      { id: "D", text: "$21$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Factor the left side: $3(x + 5) = 36$, so $x + 5 = 12$.\n\n**The Full Solution:**\nStep 1: Factor $3$ out of the left side: $3x + 15 = 3(x + 5)$, so $3(x + 5) = 36$.\nStep 2: Divide both sides by $3$: $x + 5 = 12$.\nStep 3: The value of $x + 5$ is $12$. Check: $x = 7$, and $3(7) + 15 = 21 + 15 = 36$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): is the value of $x$; the question asks for $x + 5$.\n* Choice C ($17$): divides $36$ by $3$ and then adds $5$, ignoring the $15$ on the left side.\n* Choice D ($21$): is the value of $3x$, found after subtracting $15$.\n\n**Test Day Takeaway:** When the question asks for an expression, look for it inside the equation; factoring can give it in one step.",
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
    question: "$7x - 4 = 3x + k$\nIn the given equation, $k$ is a constant. The solution to the equation is $x = 6$. What is the value of $k$?",
    choices: [
      // distractor: subtracts in the wrong order, 18 - 38
      { id: "A", text: "$-20$" },
      { id: "B", text: "$20$" },
      // distractor: drops the -4 on the left side
      { id: "C", text: "$24$" },
      // distractor: adds 18 to 38 instead of subtracting
      { id: "D", text: "$56$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Substitute $x = 6$: $42 - 4 = 18 + k$, so $38 = 18 + k$ and $k = 20$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 6$ into the equation: $7(6) - 4 = 3(6) + k$.\nStep 2: Simplify both sides: $38 = 18 + k$.\nStep 3: Subtract $18$: $k = 20$. Check: $7x - 4 = 3x + 20$ gives $4x = 24$, so $x = 6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-20$): subtracts in the wrong order, computing $18 - 38 = -20$.\n* Choice C ($24$): drops the $-4$, computing $7(6) - 3(6) = 24$.\n* Choice D ($56$): adds $3(6)$ to $38$ instead of subtracting it.\n\n**Test Day Takeaway:** When the solution is given and a constant is unknown, substitute the solution and solve the resulting equation for the constant.",
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
    question: "Which expression is equivalent to $(x - 4)^{2} + 7$?",
    choices: [
      // distractor: squares each term and drops the middle term
      { id: "A", text: "$x^{2} + 23$" },
      // distractor: forgets to double the middle term
      { id: "B", text: "$x^{2} - 4x + 23$" },
      // distractor: writes (-4)^2 as -16
      { id: "C", text: "$x^{2} - 8x - 9$" },
      { id: "D", text: "$x^{2} - 8x + 23$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** $(x - 4)^2 = x^2 - 8x + 16$, and adding $7$ gives $x^2 - 8x + 23$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x - 4)^2 = x^2 - 2(4)x + 4^2 = x^2 - 8x + 16$.\nStep 2: Add $7$: $x^2 - 8x + 16 + 7$.\nStep 3: Combine the constants: $x^2 - 8x + 23$. Check: at $x = 1$, $(1 - 4)^2 + 7 = 16$ and $1 - 8 + 23 = 16$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^{2} + 23$): squares each term separately, writing $(x - 4)^2$ as $x^2 + 16$ and losing the middle term.\n* Choice B ($x^{2} - 4x + 23$): uses $-4x$ as the middle term instead of $2(x)(-4) = -8x$.\n* Choice C ($x^{2} - 8x - 9$): writes the constant of $(x - 4)^2$ as $-16$ instead of $(-4)^2 = 16$.\n\n**Test Day Takeaway:** $(x - a)^2 = x^2 - 2ax + a^2$: the middle term is doubled and the constant is positive.",
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
    question: "Which expression is equivalent to $(x + 5)^{2} - 9$?",
    choices: [
      // distractor: forgets to double the middle term, writing 5x instead of 10x
      { id: "A", text: "$x^{2} + 5x + 16$" },
      // distractor: expands (x + 5)^2 as x^2 + 10x and drops the 25
      { id: "B", text: "$x^{2} + 10x - 9$" },
      { id: "C", text: "$x^{2} + 10x + 16$" },
      // distractor: adds 9 to 25 instead of subtracting it
      { id: "D", text: "$x^{2} + 10x + 34$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $(x + 5)^{2} = x^{2} + 10x + 25$, and $25 - 9 = 16$, so the expression is $x^{2} + 10x + 16$.\n\n**The Full Solution:**\nStep 1: Square the binomial: $(x + 5)^{2} = x^{2} + 2(5)x + 5^{2} = x^{2} + 10x + 25$.\nStep 2: Subtract $9$ from the constant term: $x^{2} + 10x + 25 - 9$.\nStep 3: Combine: $x^{2} + 10x + 16$. Check with $x = 1$: $(1 + 5)^{2} - 9 = 27$ and $1 + 10 + 16 = 27$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^{2} + 5x + 16$): forgets to double the middle term, writing $5x$ instead of $2(5)x = 10x$.\n* Choice B ($x^{2} + 10x - 9$): expands $(x + 5)^{2}$ as $x^{2} + 10x$ and drops the $25$.\n* Choice D ($x^{2} + 10x + 34$): adds $9$ to $25$ instead of subtracting it.\n\n**Test Day Takeaway:** $(x + h)^{2}$ always produces three terms, $x^{2} + 2hx + h^{2}$; write all three before combining constants.",
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
    question: "$3(x - 4)^{2} - 20$\nThe given expression can be rewritten in the form $ax^{2} + bx + c$, where $a$, $b$, and $c$ are constants. What is the value of $c$?",
    choices: [
      // distractor: uses 16 - 20, forgetting to multiply 16 by 3
      { id: "A", text: "$-4$" },
      { id: "B", text: "$28$" },
      // distractor: adds 20 to 48 instead of subtracting
      { id: "C", text: "$68$" },
      // distractor: squares the 3 along with the binomial: 144 - 20
      { id: "D", text: "$124$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The constant term is the value of the expression at $x = 0$: $3(0 - 4)^{2} - 20 = 48 - 20 = 28$.\n\n**The Full Solution:**\nStep 1: Square the binomial: $(x - 4)^{2} = x^{2} - 8x + 16$.\nStep 2: Multiply every term by $3$: $3x^{2} - 24x + 48$.\nStep 3: Subtract $20$: $3x^{2} - 24x + 28$, so $c = 28$. Check with $x = 1$: $3(1 - 4)^{2} - 20 = 7$ and $3 - 24 + 28 = 7$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): uses $16 - 20$, forgetting to multiply the $16$ by $3$.\n* Choice C ($68$): adds $20$ to $48$ instead of subtracting it.\n* Choice D ($124$): squares the $3$ along with the binomial, computing $(3 \\cdot 4)^{2} - 20 = 144 - 20$.\n\n**Test Day Takeaway:** In $a(x - h)^{2} + k$, the constant term of the expanded form is $ah^{2} + k$; the outside factor multiplies $h^{2}$ but is not itself squared.",
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
    question: "$a(x + 7)^{2} - 3$\nIn the given expression, $a$ is a nonzero constant. The expression is equivalent to $ax^{2} + bx + c$, where $b$ and $c$ are constants. Which expression is equal to $b$?",
    choices: [
      // distractor: doubles 7 but gives the middle term a negative sign, as if the binomial were x - 7
      { id: "A", text: "$-14a$" },
      // distractor: uses 7 only once and flips its sign
      { id: "B", text: "$-7a$" },
      // distractor: forgets to double: the middle term of (x + 7)^2 is 14x, not 7x
      { id: "C", text: "$7a$" },
      { id: "D", text: "$14a$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** $(x + 7)^{2} = x^{2} + 14x + 49$, so multiplying by $a$ makes the $x$-coefficient $14a$.\n\n**The Full Solution:**\nStep 1: Square the binomial: $(x + 7)^{2} = x^{2} + 14x + 49$.\nStep 2: Multiply each term by $a$: $ax^{2} + 14ax + 49a$.\nStep 3: Subtract $3$: $ax^{2} + 14ax + (49a - 3)$. Matching $x$-terms gives $b = 14a$. Check with $a = 1$ and $x = 1$: $(1 + 7)^{2} - 3 = 61$ and $1 + 14 + 46 = 61$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-14a$): doubles correctly but gives the middle term a negative sign, as if the binomial were $x - 7$.\n* Choice B ($-7a$): uses the $7$ only once and also flips its sign.\n* Choice C ($7a$): forgets that the middle term of a square is $2(7)x$, not $7x$.\n\n**Test Day Takeaway:** In $a(x + h)^{2} + k$, the $x$-coefficient is $2ah$, with the same sign as the $h$ inside the parentheses.",
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
    question: "In the $xy$-plane, the graph of $y = 2x^{2} + bx + c$, where $b$ and $c$ are constants, has its vertex at $(4, -9)$. What is the value of $c$?",
    choices: [
      // distractor: reports the y-coordinate of the vertex, which is the constant only in vertex form
      { id: "A", text: "$-9$" },
      // distractor: uses 16 - 9, forgetting to multiply 16 by 2
      { id: "B", text: "$7$" },
      { id: "C", text: "$23$" },
      // distractor: adds 9 to 32 instead of subtracting it
      { id: "D", text: "$41$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The parabola is $y = 2(x - 4)^{2} - 9$, and its constant term is $2(16) - 9 = 23$.\n\n**The Full Solution:**\nStep 1: A parabola with leading coefficient $2$ and vertex $(4, -9)$ has equation $y = 2(x - 4)^{2} - 9$.\nStep 2: Expand: $2(x^{2} - 8x + 16) - 9 = 2x^{2} - 16x + 32 - 9$.\nStep 3: Combine: $y = 2x^{2} - 16x + 23$, so $c = 23$. Check: the vertex is at $x = -\\frac{-16}{2(2)} = 4$, and $2(16) - 16(4) + 23 = -9$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): reports the $y$-coordinate of the vertex, which is the constant only in vertex form.\n* Choice B ($7$): uses $16 - 9$, forgetting to multiply the $16$ by the leading coefficient $2$.\n* Choice D ($41$): adds $9$ to $32$ instead of subtracting it.\n\n**Test Day Takeaway:** Write the vertex form first, $y = a(x - h)^{2} + k$, then expand; the constant term $c$ is $ah^{2} + k$, not $k$.",
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
    question: "$3(x - c)^{2} - 11 = 3x^{2} - 30x + d$\nIn the given equation, $c$ and $d$ are constants, and the equation is true for all values of $x$. What is the value of $d$?",
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
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The left side expands to $3x^{2} - 6cx + 3c^{2} - 11$. Matching $x$-terms, $-6c = -30$, so $c = 5$; then $d = 3(25) - 11 = 64$.\n\n**The Full Solution:**\nStep 1: Expand the left side: $3(x^{2} - 2cx + c^{2}) - 11 = 3x^{2} - 6cx + 3c^{2} - 11$.\nStep 2: The equation holds for all $x$, so the coefficients match. The $x$-terms give $-6c = -30$, so $c = 5$.\nStep 3: The constant terms give $d = 3c^{2} - 11 = 3(25) - 11 = 64$. Check: $3(x - 5)^{2} - 11 = 3x^{2} - 30x + 75 - 11 = 3x^{2} - 30x + 64$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): this is the value of $c$, not $d$.\n* Choice B ($14$): uses $c^{2} - 11 = 25 - 11$, forgetting that the $3$ multiplies $c^{2}$.\n* Choice D ($86$): adds $11$ to $75$ instead of subtracting it.\n\n**Test Day Takeaway:** \"True for all values of $x$\" means the two sides are the same polynomial: match the $x$-coefficients to find the shift, then match the constants.",
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
    question: "The graph of the linear function $f$ is shown. The graph of $y = f(x) + k$, where $k$ is a constant, has an $x$-intercept at $(-4, 0)$. What is the value of $k$?",
    diagram: { type: "linearGraph", params: { slope: 1.5, yIntercept: -3, xRange: [-6, 6], yRange: [-12, 6], xTickInterval: 2, yTickInterval: 3, gridInterval: 1, showPoints: [[0, -3], [2, 0], [4, 3]], label: "y = f(x)" } },
    choices: [
      // distractor: reports f(-4) = -9 instead of the constant that cancels it
      { id: "A", text: "$-9$" },
      // distractor: reads -4 as 4, finds f(4) = 3, and negates it
      { id: "B", text: "$-3$" },
      // distractor: uses the opposite of the y-intercept of f instead of the opposite of f(-4)
      { id: "C", text: "$3$" },
      { id: "D", text: "$9$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vertical Shift of a Line — $x$-intercept**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The new graph is zero at $x = -4$, so $f(-4) + k = 0$. The line through $(0, -3)$ and $(2, 0)$ gives $f(-4) = -9$, so $k = 9$.\n\n**The Full Solution:**\nStep 1: The graph passes through $(0, -3)$ and $(2, 0)$, so its slope is $\\frac{0 - (-3)}{2 - 0} = \\frac{3}{2}$ and $f(x) = \\frac{3}{2}x - 3$.\nStep 2: Evaluate at $x = -4$: $f(-4) = \\frac{3}{2}(-4) - 3 = -9$.\nStep 3: The point $(-4, 0)$ lies on $y = f(x) + k$, so $0 = -9 + k$ and $k = 9$. Check: $\\frac{3}{2}(-4) - 3 + 9 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): reports $f(-4)$ itself instead of the constant that cancels it.\n* Choice B ($-3$): reads $-4$ as $4$, finds $f(4) = 3$ on the graph, and negates it.\n* Choice C ($3$): uses the opposite of the $y$-intercept of $f$ instead of the value of $f$ at $x = -4$.\n\n**Test Day Takeaway:** For $y = f(x) + k$ to cross the $x$-axis at $x = r$, the shift must be the opposite of $f(r)$: $k = -f(r)$.",
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
    question: "$6x - 4y = 10$\n$9x - 6y = 15$\nFor each real number $r$, which of the following points lies on the graph of each equation in the $xy$-plane for the given system?",
    choices: [
      // distractor: solves for y correctly but swaps the coordinates
      { id: "A", text: "$\\left(\\frac{3r - 5}{2}, r\\right)$" },
      // distractor: divides by 2 instead of -2 when isolating y, so every sign on the right flips
      { id: "B", text: "$\\left(r, \\frac{5 - 3r}{2}\\right)$" },
      { id: "C", text: "$\\left(r, \\frac{3r - 5}{2}\\right)$" },
      // distractor: changes the sign of the constant when isolating y
      { id: "D", text: "$\\left(r, \\frac{3r + 5}{2}\\right)$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Same Line — Infinitely Many Solutions (Parametric)**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Both equations reduce to $3x - 2y = 5$, so every solution satisfies $y = \\frac{3x - 5}{2}$. Setting $x = r$ gives the point $\\left(r, \\frac{3r - 5}{2}\\right)$.\n\n**The Full Solution:**\nStep 1: Divide the first equation by $2$ and the second by $3$: both become $3x - 2y = 5$, so the two graphs are the same line and every point on it solves the system.\nStep 2: Solve for $y$: $2y = 3x - 5$, so $y = \\frac{3x - 5}{2}$.\nStep 3: Let $x = r$; then $y = \\frac{3r - 5}{2}$, giving $\\left(r, \\frac{3r - 5}{2}\\right)$. Check with $r = 3$: the point $(3, 2)$ gives $6(3) - 4(2) = 10$ and $9(3) - 6(2) = 15$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\left(\\frac{3r - 5}{2}, r\\right)$): solves for $y$ correctly but then swaps the coordinates, putting the expression in the $x$-position.\n* Choice B ($\\left(r, \\frac{5 - 3r}{2}\\right)$): writes $-2y = 5 - 3x$ but then divides by $2$ instead of $-2$, so every sign on the right is flipped.\n* Choice D ($\\left(r, \\frac{3r + 5}{2}\\right)$): changes the sign of the constant when isolating $y$.\n\n**Test Day Takeaway:** When the two equations are multiples of one line, every solution has the form $(r, y(r))$; solve one equation for $y$, substitute $r$, and test one value of $r$ in both equations.",
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
    question: "$wx + 2y = 11$\n$wx - 8y = 7$\nIn the given pair of equations, $w$ is a positive constant. The graphs of these equations in the $xy$-plane are perpendicular lines. What is the value of $w$?",
    choices: [
      // distractor: the other root of w^2 = 16; it ignores the condition that w is positive
      { id: "A", text: "$-4$" },
      // distractor: sets the slopes equal, the condition for parallel lines
      { id: "B", text: "$0$" },
      { id: "C", text: "$4$" },
      // distractor: stops at w^2 = 16 and reports the square instead of w
      { id: "D", text: "$16$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Perpendicular Slopes (Standard Form)**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The slopes are $-\\frac{w}{2}$ and $\\frac{w}{8}$. Perpendicular slopes multiply to $-1$: $-\\frac{w^{2}}{16} = -1$, so $w^{2} = 16$ and the positive value is $w = 4$.\n\n**The Full Solution:**\nStep 1: Solve each equation for $y$: $y = -\\frac{w}{2}x + \\frac{11}{2}$ and $y = \\frac{w}{8}x - \\frac{7}{8}$. The slopes are $-\\frac{w}{2}$ and $\\frac{w}{8}$.\nStep 2: Perpendicular lines have slopes whose product is $-1$: $\\left(-\\frac{w}{2}\\right)\\left(\\frac{w}{8}\\right) = -\\frac{w^{2}}{16} = -1$, so $w^{2} = 16$.\nStep 3: Then $w = 4$ or $w = -4$, and $w$ is positive, so $w = 4$. Check: the slopes are $-2$ and $\\frac{1}{2}$, and $(-2)\\left(\\frac{1}{2}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): also makes the lines perpendicular, but the question says $w$ is positive.\n* Choice B ($0$): sets the slopes equal, $-\\frac{w}{2} = \\frac{w}{8}$, which is the condition for parallel lines.\n* Choice D ($16$): stops at $w^{2} = 16$ and reports $w^{2}$ instead of $w$.\n\n**Test Day Takeaway:** For $Ax + By = C$, the slope is $-\\frac{A}{B}$; set the product of the two slopes equal to $-1$ and use any stated sign condition to pick the root.",
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
    question: "$\\frac{2}{3}x + \\frac{1}{4}y = 6 - \\frac{1}{4}y$\n$px + 3y = 5$\nIn the given system of equations, $p$ is a constant. For what value of $p$ does the system have no solution?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: No Solution Parameter (Two-Equation System)**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~40s):** Collect the $y$-terms first: $\\frac{2}{3}x + \\frac{1}{2}y = 6$. Multiplying by $6$ gives $4x + 3y = 36$, which has the same $y$-coefficient as $px + 3y = 5$, so $p = 4$.\n\n**The Full Solution:**\nStep 1: Add $\\frac{1}{4}y$ to both sides of the first equation: $\\frac{2}{3}x + \\frac{1}{2}y = 6$.\nStep 2: Multiply by $6$ to clear fractions: $4x + 3y = 36$. A system of two linear equations has no solution when the lines are parallel and distinct, so the $x$- and $y$-coefficients must be proportional while the constants are not.\nStep 3: The $y$-coefficients are already equal ($3$ and $3$), so the $x$-coefficients must be equal too: $p = 4$. Check: the system is $4x + 3y = 36$ and $4x + 3y = 5$; the left sides are identical but $36 \\neq 5$, so no ordered pair satisfies both ✓\n\n**Common Mistakes:**\n* $8$: never combines the two $\\frac{1}{4}y$ terms, so it scales $\\frac{1}{4}y$ up to $3y$ by a factor of $12$ and gets $p = 12\\left(\\frac{2}{3}\\right) = 8$.\n* $\\frac{1}{9}$: uses the reciprocal scale factor, $\\frac{1}{6}$, so $p = \\frac{1}{6}\\left(\\frac{2}{3}\\right)$.\n* $\\frac{2}{3}$: assumes the $x$-coefficients must simply be equal without rescaling the first equation.\n\n**Test Day Takeaway:** Put both equations in the form $Ax + By = C$ before comparing coefficients; a variable that appears on both sides of an equation has to be collected first.",
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
    question: "The table shows three values of $x$ and their corresponding values of $f(x)$ for the linear function $f$. In the equation $f(x) = kx - 2$, $k$ is a constant. If the equation has no solution, what is the value of $k$?",
    questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$1$", "$11$"], ["$3$", "$19$"], ["$6$", "$31$"]] },
    choices: [
      { id: "A", text: "$4$" },
      // distractor: uses the y-intercept of f, 7, instead of the slope
      { id: "B", text: "$7$" },
      // distractor: takes the change from 11 to 19 as the slope without dividing by the change in x
      { id: "C", text: "$8$" },
      // distractor: uses f(1) = 11 as the slope
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: No-Solution Condition (Single Linear Equation)**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** From the table, $f(x) = 4x + 7$. The equation $4x + 7 = kx - 2$ has no solution exactly when the $x$-terms cancel and leave $7 = -2$, so $k = 4$.\n\n**The Full Solution:**\nStep 1: Find the slope of $f$: $\\frac{19 - 11}{3 - 1} = \\frac{8}{2} = 4$. Then $11 = 4(1) + b$ gives $b = 7$, so $f(x) = 4x + 7$. The third row agrees: $4(6) + 7 = 31$.\nStep 2: Write the equation: $4x + 7 = kx - 2$, or $(4 - k)x = -9$.\nStep 3: If $k \\neq 4$, the equation has the solution $x = \\frac{-9}{4 - k}$. If $k = 4$, it becomes $0 = -9$, which is false for every $x$. So $k = 4$. Check: $4x + 7 = 4x - 2$ simplifies to $7 = -2$, so no value of $x$ works ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($7$): uses the $y$-intercept of $f$ instead of its slope.\n* Choice C ($8$): takes the change in $f(x)$ from $11$ to $19$ as the slope without dividing by the change in $x$, which is $2$.\n* Choice D ($11$): uses the first value in the table, $f(1)$, as the slope.\n\n**Test Day Takeaway:** A linear equation $mx + b = kx + c$ has no solution when the slopes match ($k = m$) and the constants differ.",
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
    question: "The table shows three values of $x$ and their corresponding values of $g(x)$, where $g(x) = \\frac{f(x)}{x + 2}$ and $f$ is a linear function. Which equation defines $f$?",
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
    question: "The function $f$ is defined by $f(x) = a\\sqrt{x - b}$, where $a$ and $b$ are constants. In the $xy$-plane, the graph of $y = f(x)$ has an $x$-intercept at $(-6, 0)$, and $f(10)$ is negative. Which of the following must be true?",
    choices: [
      { id: "A", text: "$a < 0$ and $b < 0$" },
      // distractor: sets x + b = 0 instead of x - b = 0, reading the intercept as b = 6
      { id: "B", text: "$a < 0$ and $b > 0$" },
      // distractor: finds b correctly but assumes the function is always positive, ignoring the sign of a
      { id: "C", text: "$a > 0$ and $b < 0$" },
      // distractor: reads b as 6 and ignores that f(10) < 0 forces a to be negative
      { id: "D", text: "$a > 0$ and $b > 0$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Square Root Function — Sign Reasoning**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** The radical is zero where $x = b$, so the $x$-intercept $(-6, 0)$ gives $b = -6 < 0$. Then $f(10) = a\\sqrt{16} = 4a$, which is negative only if $a < 0$.\n\n**The Full Solution:**\nStep 1: $f(x) = 0$ only when $\\sqrt{x - b} = 0$ (a nonzero $a$ cannot make the product zero), which happens at $x = b$. The graph's $x$-intercept is at $x = -6$, so $b = -6$, and $b < 0$.\nStep 2: Evaluate at $x = 10$: $f(10) = a\\sqrt{10 - (-6)} = a\\sqrt{16} = 4a$.\nStep 3: A square root is never negative, so the sign of $f(10)$ is the sign of $a$. Since $f(10)$ is negative, $a < 0$. Check with $a = -1$: $f(x) = -\\sqrt{x + 6}$ gives $f(-6) = 0$ and $f(10) = -4$, matching both conditions ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($a < 0$ and $b > 0$): sets $x + b = 0$ in place of $x - b = 0$, reading the intercept as $b = 6$.\n* Choice C ($a > 0$ and $b < 0$): finds $b$ correctly but assumes a square root function is always positive, ignoring the sign of $a$.\n* Choice D ($a > 0$ and $b > 0$): makes both errors, reading $b$ as $6$ and ignoring that $f(10) < 0$ forces $a$ to be negative.\n\n**Test Day Takeaway:** For $f(x) = a\\sqrt{x - b}$, the graph starts at $x = b$, and because the radical is never negative, every output has the sign of $a$.",
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
    question: "The linear function $f$ is defined by $f(x) = ax + b$, where $a$ and $b$ are nonzero constants. If $f(9) = 3f(1)$, which of the following must be true?",
    choices: [
      // distractor: subtracts in the wrong order, turning 6a = 2b into -6a = 2b
      { id: "A", text: "$b = -3a$" },
      // distractor: drops the +b from f(9), solving 9a = 3a + 3b
      { id: "B", text: "$b = 2a$" },
      { id: "C", text: "$b = 3a$" },
      // distractor: multiplies only b by 3, solving 9a + b = a + 3b
      { id: "D", text: "$b = 4a$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Solve for a Linear Parameter from a Conditional Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** $9a + b = 3(a + b) = 3a + 3b$, so $6a = 2b$ and $b = 3a$.\n\n**The Full Solution:**\nStep 1: Write the two outputs: $f(9) = 9a + b$ and $f(1) = a + b$.\nStep 2: Substitute into the condition: $9a + b = 3(a + b)$, so $9a + b = 3a + 3b$.\nStep 3: Subtract $3a$ and $b$ from both sides: $6a = 2b$, so $b = 3a$. Check with $a = 1$, $b = 3$: $f(9) = 12$ and $3f(1) = 3(4) = 12$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($b = -3a$): subtracts in the wrong order, turning $6a = 2b$ into $-6a = 2b$.\n* Choice B ($b = 2a$): drops the $+b$ from $f(9)$, solving $9a = 3a + 3b$.\n* Choice D ($b = 4a$): multiplies only the $b$ by $3$, solving $9a + b = a + 3b$.\n\n**Test Day Takeaway:** Turn a condition on function values into an equation in the constants: substitute each input, distribute fully, and collect like terms.",
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
    question: "$y = x^{2} + 2x + 11$\n$y = 6x + k$\nIn the given system of equations, $k$ is a constant. If the graphs of the equations intersect at exactly one point in the $xy$-plane, what is the value of $k$?",
    choices: [
      // distractor: reports x = 2, the single solution, instead of k
      { id: "A", text: "$2$" },
      { id: "B", text: "$7$" },
      // distractor: never moves 6x to the left, solving 4 - 4(11 - k) = 0
      { id: "C", text: "$10$" },
      // distractor: flips the sign of the -4ac term, solving 16 + 4(11 - k) = 0
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Tangent Line — Discriminant Equals Zero**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** Setting the right sides equal gives $x^{2} - 4x + (11 - k) = 0$. Exactly one intersection point means the discriminant is zero: $16 - 4(11 - k) = 0$, so $k = 7$.\n\n**The Full Solution:**\nStep 1: Substitute: $x^{2} + 2x + 11 = 6x + k$, so $x^{2} - 4x + (11 - k) = 0$.\nStep 2: The graphs meet at exactly one point when this quadratic has exactly one real root, which happens when its discriminant is zero: $(-4)^{2} - 4(1)(11 - k) = 0$.\nStep 3: Solve: $16 - 44 + 4k = 0$, so $4k = 28$ and $k = 7$. Check: with $k = 7$ the equation is $x^{2} - 4x + 4 = (x - 2)^{2} = 0$, which has the single root $x = 2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): this is the $x$-coordinate of the single solution, not the value of $k$.\n* Choice C ($10$): forgets to move $6x$ to the left side, using $x^{2} + 2x + (11 - k) = 0$ and solving $4 - 4(11 - k) = 0$.\n* Choice D ($15$): flips the sign of the $-4ac$ term, solving $16 + 4(11 - k) = 0$.\n\n**Test Day Takeaway:** A line meets a parabola at exactly one point when the combined quadratic, with everything on one side, has discriminant $0$.",
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
    question: "The number $a$ is $30\\%$ less than the number $b$. The number $c$ is $25\\%$ greater than $a$. If $c = 1{,}050$, what is the value of $b$?",
    correctAnswer: "1200",
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**The correct answer is $1200$.**\n\n**The Fast Way (~35s):** Chain the multipliers: $c = 1.25a = 1.25(0.70b) = 0.875b$, so $b = \\frac{1050}{0.875} = 1200$.\n\n**The Full Solution:**\nStep 1: Write each relationship as a multiplier: $30\\%$ less than $b$ means $a = 0.70b$, and $25\\%$ greater than $a$ means $c = 1.25a$.\nStep 2: Substitute to connect $c$ to $b$: $c = 1.25(0.70b) = 0.875b$.\nStep 3: Solve $0.875b = 1050$: $b = 1200$. Check: $0.70(1200) = 840$, and $1.25(840) = 1050$ ✓\n\n**Common Mistakes:**\n* $1500$: applies only the $30\\%$ step, computing $\\frac{1050}{0.70}$.\n* $918.75$: multiplies $1050$ by $0.875$ instead of dividing by it.\n* $1105.26$: combines the changes as a single $5\\%$ decrease, computing $\\frac{1050}{0.95}$.\n\n**Test Day Takeaway:** Successive percent changes multiply; turn each one into a multiplier before you combine them.",
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
    question: "$6x - 9y = 4$\n$ax - 15y = 11$\nIn the given system of equations, $a$ is a constant. If the system has no solution, what is the value of $a$?",
    choices: [
      // distractor: drops a negative sign, solving a/6 = -15/9 to get -10
      { id: "A", text: "$-10$" },
      // distractor: reduces 15/9 to 5/3 and reports the numerator 5 as a
      { id: "B", text: "$5$" },
      // distractor: copies the first equation's x-coefficient, assuming the coefficients must be equal
      { id: "C", text: "$6$" },
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: System With No Solution**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** No solution means the $x$- and $y$-coefficients are proportional: $\\frac{a}{6} = \\frac{-15}{-9} = \\frac{5}{3}$, so $a = 10$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has no solution when its lines are parallel and distinct: the coefficients of $x$ and $y$ are in the same ratio, but the constants are not.\nStep 2: The $y$-coefficients have ratio $\\frac{-15}{-9} = \\frac{5}{3}$, so the $x$-coefficients need $\\frac{a}{6} = \\frac{5}{3}$, giving $a = 10$.\nStep 3: The constants have ratio $\\frac{11}{4}$, which is not $\\frac{5}{3}$, so the lines are distinct. Check: $\\frac{5}{3}$ times the first equation is $10x - 15y = \\frac{20}{3}$, which has the same left side as $10x - 15y = 11$ but a different constant, so no ordered pair satisfies both ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-10$): drops a negative sign, using $\\frac{a}{6} = \\frac{-15}{9}$.\n* Choice B ($5$): reduces $\\frac{15}{9}$ to $\\frac{5}{3}$ and reports the numerator instead of multiplying by $6$.\n* Choice C ($6$): copies the first equation's $x$-coefficient, assuming the coefficients must be equal rather than proportional.\n\n**Test Day Takeaway:** For no solution, scale one equation so its $x$- and $y$-coefficients match the other's; the constants must then disagree.",
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
    question: "The table shows four values of $x$ and their corresponding values of $y$. In the $xy$-plane, the points $(x, y)$ from the table all lie on line $\\ell$. What is the slope of line $\\ell$?",
    diagram: { type: "dataTable", params: { headers: ["x", "y"], rows: [["-2", "11"], ["2", "8"], ["6", "5"], ["14", "-1"]] } },
    correctAnswer: "-0.75",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**The correct answer is $-0.75$.**\n\n**The Fast Way (~25s):** From $x = -2$ to $x = 2$, $y$ falls from $11$ to $8$, so the slope is $\\frac{-3}{4} = -0.75$.\n\n**The Full Solution:**\nStep 1: Use two rows of the table as points: $(-2, 11)$ and $(2, 8)$.\nStep 2: The slope is $\\frac{8 - 11}{2 - (-2)} = \\frac{-3}{4}$.\nStep 3: So the slope is $-\\frac{3}{4} = -0.75$. Check with two other rows, $(6, 5)$ and $(14, -1)$: $\\frac{-1 - 5}{14 - 6} = \\frac{-6}{8} = -0.75$ ✓\n\n**Common Mistakes:**\n* $0.75$: drops the negative sign, though $y$ decreases as $x$ increases.\n* $-3$: uses the change in $y$ between consecutive rows without dividing by the change in $x$.\n* $-1.33$: divides the change in $x$ by the change in $y$.\n\n**Test Day Takeaway:** Slope is change in $y$ over change in $x$; the $x$-values in a table are not always evenly spaced, so compute both changes from the same two rows.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "parameterized-table-slope",
    sourceRef: "pilot-m5-spr-negative-slope",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-08-13"
  }
];
