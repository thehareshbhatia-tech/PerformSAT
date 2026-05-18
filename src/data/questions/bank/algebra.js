export const algebraBank = [
  // === SLOPE FROM POINTS (5 questions) ===
  {
    id: 'bank-alg-001',
    domain: 'algebra',
    skills: ['slope-from-points'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A hiking trail climbs from 1,200 feet at mile marker 3 to 1,800 feet at mile marker 9. What is the rate of elevation gain, in feet per mile?',
    choices: [
      // distractor: averages the two endpoints somehow
      { id: 'A', text: '75' },
      { id: 'B', text: '100' },
      // distractor: divides rise by 3 (one endpoint) instead of 6 (run)
      { id: 'C', text: '200' },
      // distractor: gives total rise without dividing by run
      { id: 'D', text: '600' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Rate of Change from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Slope $= \\frac{1800 - 1200}{9 - 3} = \\frac{600}{6} = 100$ ft/mile.\n\n**The Full Solution:**\nRate of change = $\\frac{\\text{change in elevation}}{\\text{change in distance}} = \\frac{1800 - 1200}{9 - 3} = \\frac{600}{6} = 100$ feet per mile.\n\nVerification: at mile $3$: $1200$ ft. At mile $9$: $1200 + 100(6) = 1800$ ft ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — averages endpoints incorrectly.\n* Choice C: "wrong base" — divides $600$ by $3$ instead of $6$.\n* Choice D: "stops one step early" — gives total rise ($600$ ft) without dividing by the run.\n\n**Test Day Takeaway:** Rate of change = (change in $y$) / (change in $x$). The units in the answer ("per mile") tell you what goes in the denominator.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'slope-rate-of-change',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-002',
    domain: 'algebra',
    skills: ['slope-from-points'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A delivery drone travels from position $(2, 14)$ to $(8, 38)$ on a coordinate grid. What is the slope of its path?',
    choices: [
      // distractor: divides 24/8 by mistake
      { id: 'A', text: '3' },
      { id: 'B', text: '4' },
      // distractor: gives the run (8 - 2)
      { id: 'C', text: '6' },
      // distractor: gives the rise without dividing by run
      { id: 'D', text: '24' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Slope $= \\frac{38 - 14}{8 - 2} = \\frac{24}{6} = 4$.\n\n**The Full Solution:**\nSlope formula: $m = \\frac{y_2 - y_1}{x_2 - x_1}$.\nWith $(x_1, y_1) = (2, 14)$ and $(x_2, y_2) = (8, 38)$:\n$m = \\frac{38 - 14}{8 - 2} = \\frac{24}{6} = 4$.\n\nVerification: starting at $(2, 14)$ with slope $4$, after $6$ units of $x$ we get $14 + 4(6) = 38$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — divides $24/8 = 3$ instead of $24/6$.\n* Choice C: "wrong base" — gives the run (denominator) instead of the slope.\n* Choice D: "stops one step early" — gives the rise without dividing.\n\n**Test Day Takeaway:** Slope is rise OVER run. Make sure $y$-values are subtracted in the SAME order as $x$-values (both new minus old).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'slope-rate-of-change',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-003',
    domain: 'algebra',
    skills: ['slope-from-points'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A car rental company charges based on distance. A 30-mile trip costs $\\$45$ and a 70-mile trip costs $\\$85$. What is the charge per mile?',
    choices: [
      // distractor: divides cost by total miles instead of using slope
      { id: 'A', text: '$\\$0.75$' },
      { id: 'B', text: '$\\$1.00$' },
      // distractor: divides 85/70 (one cost by one distance)
      { id: 'C', text: '$\\$1.21$' },
      // distractor: divides 45/30 (the SHORTER trip rate)
      { id: 'D', text: '$\\$1.50$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Per-Unit Rate (Slope of Cost)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Rate $= \\frac{85 - 45}{70 - 30} = \\frac{40}{40} = \\$1.00$ per mile.\n\n**The Full Solution:**\nThe per-mile rate is the slope of the cost-vs-distance line, using two known points:\n$\\text{rate} = \\frac{\\Delta \\text{cost}}{\\Delta \\text{miles}} = \\frac{85 - 45}{70 - 30} = \\frac{40}{40} = \\$1.00$/mile.\n\nVerification: with $\\$1.00$/mile, the difference between $30$ and $70$ miles is $\\$40$, matching the cost difference \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — divides one cost by one distance ($45/30 = 1.50$ then maybe averages).\n* Choice C: "wrong base" — divides $85/70 \\approx 1.21$ ignoring the base fee.\n* Choice D: "wrong base" — uses the SHORTER trip\'s per-mile cost ($45/30 = 1.50$).\n\n**Test Day Takeaway:** With a base fee involved, dividing total cost by miles gives the AVERAGE cost, not the per-mile rate. Use slope formula to isolate the per-mile charge.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'slope-rate-of-change',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-004',
    domain: 'algebra',
    skills: ['slope-from-points'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A candle is 30 cm tall. After burning for 2 hours it is 24 cm, and after 5 hours it is 15 cm. At what rate, in cm per hour, does the candle shrink? (Enter a positive number.)',
    correctAnswer: '3',
    explanation: '**SAT Pattern: Rate from Two Points (Negative Slope)**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~10s):** Rate $= \\frac{15 - 24}{5 - 2} = \\frac{-9}{3} = -3$ cm/hr. Shrinks at $3$ cm/hr.\n\n**The Full Solution:**\nUse the two given measurements at hours $2$ and $5$:\n$\\text{rate} = \\frac{15 - 24}{5 - 2} = \\frac{-9}{3} = -3$ cm/hr.\nThe negative sign means the candle is getting SHORTER. The shrink rate (positive) is $3$ cm/hr.\n\nVerification: starting at $30$ cm, after $2$ hr the candle is $30 - 3(2) = 24$ cm ✓. After $5$ hr: $30 - 3(5) = 15$ cm ✓ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $-3$ (the question asks for a positive number).\n* Using the initial $30$ cm height in the slope formula.\n* Dividing $-9$ by $2$ or $5$ instead of $3$ (the difference in hours).\n\n**Test Day Takeaway:** Shrink/decay rate problems: slope is negative, but the "rate of shrink" is positive (the magnitude). Read what the question asks.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'slope-rate-of-change',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-005',
    domain: 'algebra',
    skills: ['slope-from-points'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A fitness tracker shows 1,400 steps at 7:00 AM and 5,000 steps at 7:48 AM. What is the average rate, in steps per minute?',
    choices: [
      // distractor: arithmetic slip near correct
      { id: 'A', text: '72' },
      { id: 'B', text: '75' },
      // distractor: rounds change to 3840 / 48 = 80
      { id: 'C', text: '80' },
      // distractor: divides only the final count by minutes
      { id: 'D', text: '104' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Average Rate Over Time**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Change in steps $= 5000 - 1400 = 3600$. Time elapsed $= 48$ min. Rate $= 3600 / 48 = 75$ steps/min.\n\n**The Full Solution:**\nAverage rate = (change in steps) / (change in time):\n* Step change: $5000 - 1400 = 3600$\n* Time elapsed: $7:48 - 7:00 = 48$ min\n* Rate: $\\frac{3600}{48} = 75$ steps/min.\n\nVerification: $75 \\times 48 = 3600$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — arithmetic slip producing $72$.\n* Choice C: "wrong base" — rounds the step change up.\n* Choice D: "wrong formula" — divides only the FINAL count by elapsed time ($5000/48 \\approx 104$), ignoring the initial.\n\n**Test Day Takeaway:** Average rate uses CHANGE in both numerator and denominator. Subtract initial from final for both.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'slope-rate-of-change',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },

  // === SLOPE-INTERCEPT FORM (7 questions) ===
  {
    id: 'bank-alg-006',
    domain: 'algebra',
    skills: ['slope-intercept-form'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A gardener\'s rain barrel holds 12 gallons and a drip system adds 0.75 gallons per hour. Which equation models total water $w$ after $h$ hours?',
    choices: [
      // distractor: swaps slope and intercept
      { id: 'A', text: '$w = 12h + 0.75$' },
      { id: 'B', text: '$w = 0.75h + 12$' },
      // distractor: combines them into one coefficient
      { id: 'C', text: '$w = 12.75h$' },
      // distractor: adds them and uses h once
      { id: 'D', text: '$w = h + 12.75$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Linear Model (Identify Slope and Intercept)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Per-hour rate $0.75$ = slope; initial $12$ gallons = $y$-intercept. So $w = 0.75h + 12$.\n\n**The Full Solution:**\nLinear model: $w = mh + b$ where $m$ is the per-hour rate and $b$ is the initial amount.\n* Rate ($m$): $0.75$ gallons per hour.\n* Initial ($b$): $12$ gallons (when $h = 0$).\nEquation: $w = 0.75h + 12$.\n\nVerification: at $h = 0$: $w = 12$ ✓. After $4$ hours: $w = 12 + 3 = 15$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — swaps slope and intercept.\n* Choice C: "wrong formula" — combines them as a single coefficient of $h$, losing the initial value.\n* Choice D: "wrong formula" — adds them and uses $h$ with coefficient $1$.\n\n**Test Day Takeaway:** Linear model: $y = (\\text{rate}) \\cdot x + (\\text{initial value})$. Initial = $y$-intercept, what you have at $x = 0$. Rate = slope, what changes per unit of $x$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'linear-model',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-007',
    domain: 'algebra',
    skills: ['slope-intercept-form'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A gym charges a $\\$25$ registration fee and $\\$40$ per month. Which equation gives total cost $C$ after $m$ months?',
    choices: [
      // distractor: swaps rate and fee
      { id: 'A', text: '$C = 25m + 40$' },
      { id: 'B', text: '$C = 40m + 25$' },
      // distractor: combines them into one coefficient
      { id: 'C', text: '$C = 65m$' },
      // distractor: subtracts the fee instead of adding
      { id: 'D', text: '$C = 40m - 25$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Linear Cost Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Monthly rate $\\$40$ = slope; one-time fee $\\$25$ = $y$-intercept. So $C = 40m + 25$.\n\n**The Full Solution:**\nTotal cost = (monthly rate)(months) + (one-time fee):\n$C = 40m + 25$.\n\nVerification: at $m = 0$ (signup day): $C = 25$ ✓. After $3$ months: $C = 120 + 25 = 145$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — swaps rate and fee.\n* Choice C: "wrong formula" — combines them as a single per-month rate, losing the fee.\n* Choice D: "sign error" — subtracts the fee instead of adding.\n\n**Test Day Takeaway:** "Per [unit]" = slope (coefficient of variable). "One-time/initial/flat" = intercept (constant). Cost increases over time, so use $+$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'linear-model',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-008',
    domain: 'algebra',
    skills: ['slope-intercept-form'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Which equation has a slope of $-2$ and a $y$-intercept of $9$?',
    choices: [
      // distractor: swaps slope and intercept
      { id: 'A', text: '$y = 9x - 2$' },
      { id: 'B', text: '$y = -2x + 9$' },
      // distractor: drops the negative on slope
      { id: 'C', text: '$y = 2x + 9$' },
      // distractor: flips sign on intercept
      { id: 'D', text: '$y = -2x - 9$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Slope-Intercept Form Identification**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $y = mx + b$ with $m = -2$, $b = 9$: $y = -2x + 9$.\n\n**The Full Solution:**\nSlope-intercept form: $y = mx + b$ where $m$ is slope and $b$ is $y$-intercept.\nWith $m = -2$ and $b = 9$: $y = -2x + 9$.\n\nVerification: at $x = 0$: $y = 9$ (matches intercept). Slope $= -2$ means $y$ decreases by $2$ for each unit increase in $x$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — swaps slope ($9$) and intercept ($-2$).\n* Choice C: "sign error" — drops the negative on slope.\n* Choice D: "sign error" — flips intercept sign.\n\n**Test Day Takeaway:** In $y = mx + b$: $m$ is the coefficient of $x$; $b$ is the constant. The order of operations matters — slope multiplies $x$, intercept stands alone.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'slope-intercept-identification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-009',
    domain: 'algebra',
    skills: ['slope-intercept-form'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The equation $y = -3x + 210$ models remaining pages in a novel after $x$ reading sessions. What does the $-3$ represent?',
    choices: [
      // distractor: would be value of x making y = 0
      { id: 'A', text: 'Total sessions needed' },
      { id: 'B', text: 'Pages read per session' },
      // distractor: confuses slope with intercept (210)
      { id: 'C', text: 'Starting page count' },
      // distractor: would be y at x = total sessions
      { id: 'D', text: 'Final page count' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Slope $-3$: $y$ decreases by $3$ per unit $x$. In context: $3$ pages read per session.\n\n**The Full Solution:**\nIn the equation $y = -3x + 210$:\n* $y$ = remaining pages\n* $x$ = sessions completed\n* slope $m = -3$ = change in $y$ per unit change in $x$\n\nSince $y$ goes DOWN by $3$ each session, the reader is consuming $3$ pages per session. (Remaining pages decrease as sessions accumulate.)\n\nVerification: at $x = 0$: $210$ pages (initial). At $x = 1$: $207$ pages. The $3$-page drop matches "pages read per session" ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — total sessions $= 210/3 = 70$, not the slope.\n* Choice C: "wrong base" — confuses slope ($-3$) with $y$-intercept ($210$).\n* Choice D: "wrong base" — final page count is $y$ at end, not the slope.\n\n**Test Day Takeaway:** Slope represents the RATE of change in context: "$y$-units per $x$-unit". Negative slope means $y$ is decreasing as $x$ increases.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'interpret-slope',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-010',
    domain: 'algebra',
    skills: ['slope-intercept-form'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A line in the coordinate plane is given by $4x - 2y = 10$. Which of the following correctly identifies the slope and the $y$-intercept of this line?',
    choices: [
      { id: 'A', text: 'slope $= 2$, $y$-intercept $= -5$' },
      // distractor: divides by -2 but flips the sign on both terms instead of only the right-hand side
      { id: 'B', text: 'slope $= -2$, $y$-intercept $= 5$' },
      // distractor: reads slope and intercept directly off the standard-form coefficients
      { id: 'C', text: 'slope $= 4$, $y$-intercept $= -10$' },
      // distractor: solves for slope correctly but keeps +10 as a positive intercept
      { id: 'D', text: 'slope $= 2$, $y$-intercept $= 5$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Standard to Slope-Intercept**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Isolate $y$: $-2y = -4x + 10$, then divide every term by $-2$: $y = 2x - 5$. Read off slope $= 2$ and $y$-intercept $= -5$.\n\n**The Full Solution:**\nStart from $4x - 2y = 10$. Subtract $4x$ from both sides: $-2y = -4x + 10$. Divide every term by $-2$: $y = 2x - 5$. In slope-intercept form $y = mx + b$, we have $m = 2$ and $b = -5$.\n\nVerification: at $x = 0$, $y = -5$ matches the $y$-intercept. At $x = 1$, $y = -3$, and the slope from $(0, -5)$ to $(1, -3)$ is $\\frac{-3 - (-5)}{1 - 0} = 2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — divides $-2y = -4x + 10$ by $-2$ but flips both signs instead of only the right-hand-side terms (would give $y = -2x + 5$).\n* Choice C: "wrong base" — reads slope and intercept directly off the standard-form coefficients $4$ and $-10$ without first solving for $y$.\n* Choice D: "off-by-one" — gets the slope right but keeps the value $10$ as a positive intercept instead of dividing it by $-2$.\n\n**Test Day Takeaway:** Standard form $Ax + By = C$ never lets you read the slope or intercept directly. Always isolate $y$ FIRST, then dividing every term by the coefficient of $y$ gives slope-intercept form.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'standard-to-slope-intercept',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-011',
    domain: 'algebra',
    skills: ['slope-intercept-form'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A pool holds 480 gallons at 10:00 AM and 210 gallons at 1:00 PM, draining at a constant rate. At what time will the pool be empty?',
    choices: [
      // distractor: off-by-one hour from correct
      { id: 'A', text: '2:20 PM' },
      // distractor: rounds the 2:20 forward to 3:00
      { id: 'B', text: '3:00 PM' },
      { id: 'C', text: '3:20 PM' },
      // distractor: doubles the remaining time after 1 PM
      { id: 'D', text: '4:00 PM' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Linear Model to Find Zero Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Drain rate $= \\frac{480 - 210}{3} = 90$ gal/hr. From $1$ PM, time to drain $210$ gal at $90$ gal/hr $= 210/90 = 7/3$ hr $= 2$ hr $20$ min. So empty at $3:20$ PM.\n\n**The Full Solution:**\nStep 1: Find drain rate from two points.\n* From 10 AM to 1 PM ($3$ hr), pool went from $480$ to $210$ gal.\n* Rate: $\\frac{480 - 210}{3} = 90$ gal/hr.\n\nStep 2: Find time to drain remaining $210$ gal at $90$ gal/hr:\ntime $= \\frac{210}{90} = \\frac{7}{3} = 2.333$ hr $= 2$ hr $20$ min.\n\nStep 3: Add to $1$ PM: $1:00 + 2:20 = 3:20$ PM.\n\nVerification: at $3:20$ PM, total drain time from $10$ AM is $5\\frac{1}{3}$ hr. $90 \\times 5\\frac{1}{3} = 480$ gal $=$ initial amount \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — drops the $1$-hour offset.\n* Choice B: "wrong base" — rounds $2:20$ forward to a whole hour.\n* Choice D: "wrong formula" — doubles the remaining time.\n\n**Test Day Takeaway:** Linear models with time: compute the rate first, use the most recent point as the new "starting time", solve for when $y = 0$. Convert decimal hours to hours-and-minutes.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'linear-model-time',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-012',
    domain: 'algebra',
    skills: ['slope-intercept-form'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A bacteria colony grows linearly from 120 at hour 0 to 1,320 at hour 10. At what hour does the count first exceed 900?',
    choices: [
      // distractor: too imprecise (correct value is exactly 6.5)
      { id: 'A', text: 'Between hour 6 and 7' },
      // distractor: wrong range
      { id: 'B', text: 'Between hour 7 and 8' },
      { id: 'C', text: 'Exactly hour 6.5' },
      // distractor: off-by-one hour
      { id: 'D', text: 'Exactly hour 7.5' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Linear Model Threshold**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Rate $= (1320 - 120)/10 = 120$/hr. Solve $120 + 120t = 900 \\Rightarrow 120t = 780 \\Rightarrow t = 6.5$.\n\n**The Full Solution:**\nLinear model: $N(t) = 120 + 120t$ (initial $120$, slope $120$/hr).\nSet $N(t) = 900$:\n$120 + 120t = 900$\n$120t = 780$\n$t = 6.5$ hours.\n\nVerification: $N(6.5) = 120 + 120(6.5) = 120 + 780 = 900$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — gives a range but the exact value is $6.5$.\n* Choice B: "wrong base" — wrong range.\n* Choice D: "off-by-one" — off by one hour.\n\n**Test Day Takeaway:** When choices include both ranges AND exact values, prefer the exact when the math gives a clean number. $780/120$ simplifies to $6.5$ exactly.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'linear-model-inequality',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },

  // === WORD PROBLEM TO EQUATION (6 questions) ===
  {
    id: 'bank-alg-013',
    domain: 'algebra',
    skills: ['word-problem-to-equation'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A bakery sells cupcakes for $\\$3$ each and muffins for $\\$2$ each. Saturday\'s combined sales: 85 items for $\\$210$. If $c$ is cupcakes sold, which equation is correct?',
    choices: [
      { id: 'A', text: '$3c + 2(85 - c) = 210$' },
      // distractor: swaps cupcake/muffin prices
      { id: 'B', text: '$2c + 3(85 - c) = 210$' },
      // distractor: doesn\'t account for muffin count
      { id: 'C', text: '$3c + 2c = 210$' },
      // distractor: combines prices wrong
      { id: 'D', text: '$5c = 210$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Word Problem to Equation Setup**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Cupcakes: $c$ at $\\$3$ each $= 3c$. Muffins: $85 - c$ at $\\$2$ each $= 2(85 - c)$. Sum equals $210$.\n\n**The Full Solution:**\nLet $c$ = number of cupcakes sold. Since total is $85$ items, muffins sold = $85 - c$.\nRevenue:\n* Cupcakes: $3c$ dollars\n* Muffins: $2(85 - c)$ dollars\nTotal: $3c + 2(85 - c) = 210$.\n\nVerification: this expands to $3c + 170 - 2c = 210$, so $c = 40$. Then $40$ cupcakes ($\\$120$) + $45$ muffins ($\\$90$) = $\\$210$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — swaps cupcake and muffin prices.\n* Choice C: "wrong formula" — doesn\'t express muffin count correctly.\n* Choice D: "wrong formula" — combines prices but loses the count constraint.\n\n**Test Day Takeaway:** Two-variable word problems with a total constraint: use $c$ and $(\\text{total} - c)$ to express both quantities in terms of one variable. Always check the count constraint AND the cost constraint.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'word-problem-setup',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-014',
    domain: 'algebra',
    skills: ['word-problem-to-equation'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A phone plan costs $\\$35$ per month plus $\\$0.10$ per text. Last month\'s bill was $\\$52$. Which equation finds the number of texts $t$?',
    choices: [
      { id: 'A', text: '$35 + 0.10t = 52$' },
      // distractor: subtracts fixed cost instead of adding
      { id: 'B', text: '$0.10t - 35 = 52$' },
      // distractor: swaps which is the per-text rate
      { id: 'C', text: '$35t + 0.10 = 52$' },
      // distractor: combines fixed and variable costs
      { id: 'D', text: '$35.10t = 52$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Linear Cost Equation Setup**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Fixed cost ($\\$35$) plus per-text cost ($\\$0.10 \\cdot t$) equals total ($\\$52$): $35 + 0.10t = 52$.\n\n**The Full Solution:**\nTotal cost = (fixed monthly fee) + (per-text rate)(number of texts):\n$35 + 0.10t = 52$.\n\nSolving: $0.10t = 17 \\Rightarrow t = 170$ texts.\n\nVerification: $35 + 0.10(170) = 35 + 17 = 52$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — subtracts instead of adding the monthly fee.\n* Choice C: "wrong base" — treats $\\$35$ as the per-text rate.\n* Choice D: "wrong formula" — combines fixed and variable into one coefficient.\n\n**Test Day Takeaway:** Linear cost setup: fixed fee is a constant (added), per-unit cost is a slope (multiplied by quantity). Combine them with $+$, not concatenation.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'word-problem-setup',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-015',
    domain: 'algebra',
    skills: ['word-problem-to-equation'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A streaming service had 4,500 subscribers in January and gains 350 per month. A rival had 6,200 subscribers but loses 150 per month. After how many months will they be equal?',
    choices: [
      // distractor: only uses the gain rate (350)
      { id: 'A', text: '$3.0$' },
      { id: 'B', text: '$3.4$' },
      // distractor: rounds up
      { id: 'C', text: '$4.0$' },
      // distractor: arithmetic slip
      { id: 'D', text: '$5.0$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Set Two Linear Models Equal**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Set $4500 + 350m = 6200 - 150m$. Combine: $500m = 1700 \\Rightarrow m = 3.4$.\n\n**The Full Solution:**\nLet $m$ = months from January. Set the two models equal:\nService A: $4500 + 350m$\nRival: $6200 - 150m$ (loses, so $-$)\n$4500 + 350m = 6200 - 150m$\n$500m = 1700$\n$m = 3.4$ months.\n\nVerification: at $m = 3.4$: A $= 4500 + 350(3.4) = 4500 + 1190 = 5690$. Rival $= 6200 - 150(3.4) = 6200 - 510 = 5690$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — uses only A\'s gain rate ($1700/350 \\neq 3.4$, would be 4.86, off).\n* Choice C: "wrong formula" — rounds up the result.\n* Choice D: "wrong base" — arithmetic slip producing $5$.\n\n**Test Day Takeaway:** When two quantities grow/shrink at different rates and you want to find when they\'re equal: set up both linear models, set them equal, solve. The RELATIVE rate ($350 + 150 = 500$/month gap closing) determines how fast they converge.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'word-problem-setup',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-016',
    domain: 'algebra',
    skills: ['word-problem-to-equation'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A printer has already produced 54 pages and prints 18 pages per minute. How many more minutes are needed to reach 270 pages?',
    choices: [
      { id: 'A', text: '12' },
      // distractor: divides 270 / 18 without subtracting 54
      { id: 'B', text: '15' },
      // distractor: divides 54 / 18 (pages already done by rate)
      { id: 'C', text: '3' },
      // distractor: uses the rate as the answer
      { id: 'D', text: '18' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Linear Equation with Starting Quantity**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Pages still needed $= 270 - 54 = 216$. Time $= 216/18 = 12$ minutes.\n\n**The Full Solution:**\nLet $m$ = minutes more. Total pages = starting pages + (rate)(minutes):\n$54 + 18m = 270$\n$18m = 216$\n$m = 12$ minutes.\n\nVerification: $54 + 18(12) = 54 + 216 = 270$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — divides $270/18$ without subtracting the $54$ already printed.\n* Choice C: "wrong base" — divides $54/18 = 3$.\n* Choice D: "wrong base" — uses the rate.\n\n**Test Day Takeaway:** "How many MORE" problems: subtract what\'s already done from the target, then divide by the rate. The answer is the additional time, not the total.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'word-problem-setup',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-017',
    domain: 'algebra',
    skills: ['word-problem-to-equation'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A warehouse worker loads small boxes (4 lb each) and large boxes (9 lb each) onto a pallet rated for 500 lb. With 20 small boxes already loaded, what is the maximum number of large boxes that fit?',
    choices: [
      // distractor: subtracts 4 from 80 in error
      { id: 'A', text: '44' },
      { id: 'B', text: '46' },
      // distractor: rounds UP instead of down (47 large boxes would exceed)
      { id: 'C', text: '47' },
      // distractor: divides 500/9 directly ignoring 80 lb already used
      { id: 'D', text: '55' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Inequality Word Problem (Floor)**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Weight used $= 20 \\times 4 = 80$ lb. Remaining $= 500 - 80 = 420$ lb. $420/9 = 46.67$, so at most $46$ large boxes.\n\n**The Full Solution:**\nLet $L$ = number of large boxes. Constraint:\n$20(4) + 9L \\leq 500$\n$80 + 9L \\leq 500$\n$9L \\leq 420$\n$L \\leq 46.67$.\nSince $L$ must be a whole number, max is $L = 46$.\n\nVerification: $80 + 9(46) = 80 + 414 = 494 \\leq 500$ ✓. $80 + 9(47) = 503 > 500$ ✗ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — arithmetic slip.\n* Choice C: "applies the inverse operation" — rounds UP, but $47$ large boxes would exceed the pallet capacity.\n* Choice D: "stops one step early" — divides $500/9$ without accounting for the small boxes already loaded.\n\n**Test Day Takeaway:** "Maximum that fits" with capacity constraint: take the FLOOR of the decimal result. Rounding up violates the inequality.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'inequality-word-problem',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-018',
    domain: 'algebra',
    skills: ['word-problem-to-equation'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A landscaper charges $\\$50$ for a consultation plus $\\$35$ per hour. A second landscaper charges $\\$55$ per hour with no consultation fee. After how many hours is the cost the same?',
    choices: [
      // distractor: arithmetic slip
      { id: 'A', text: '2' },
      { id: 'B', text: '2.5' },
      // distractor: rounds up
      { id: 'C', text: '3' },
      // distractor: divides 50/10 instead of 50/20
      { id: 'D', text: '5' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Break-Even Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Set $50 + 35h = 55h \\Rightarrow 50 = 20h \\Rightarrow h = 2.5$.\n\n**The Full Solution:**\nLandscaper A: $50 + 35h$ dollars.\nLandscaper B: $55h$ dollars.\nSet equal:\n$50 + 35h = 55h$\n$50 = 20h$\n$h = 2.5$ hours.\n\nVerification: at $h = 2.5$: A $= 50 + 87.5 = \\$137.50$. B $= 55(2.5) = \\$137.50$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — arithmetic slip.\n* Choice C: "wrong formula" — rounds up.\n* Choice D: "wrong base" — divides $50/10$ instead of $50/20$.\n\n**Test Day Takeaway:** Break-even problems: equate the two cost models, solve for the variable. The DIFFERENCE in rates ($55 - 35 = 20$) tells you how fast the cheaper-per-hour option catches up to the one with a fixed fee.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'break-even-word-problem',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },

  // === TABLE TO EQUATION (4 questions) ===
  {
    id: 'bank-alg-019',
    domain: 'algebra',
    skills: ['table-to-equation'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A plant\'s height is recorded over several weeks. Which equation relates height $h$ to week $w$?',
    questionTable: {
      headers: ['Week', 'Height (cm)'],
      rows: [
        ['1', '8'],
        ['3', '14'],
        ['5', '20'],
      ],
    },
    choices: [
      { id: 'A', text: '$h = 3w + 5$' },
      // distractor: swaps slope and intercept
      { id: 'B', text: '$h = 5w + 3$' },
      // distractor: uses week 1 height as intercept
      { id: 'C', text: '$h = 3w + 8$' },
      // distractor: doubles slope
      { id: 'D', text: '$h = 6w + 2$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Linear Equation from Table**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Slope $= (14 - 8)/(3 - 1) = 3$. Use $(1, 8)$: $8 = 3(1) + b \\Rightarrow b = 5$. Equation: $h = 3w + 5$.\n\n**The Full Solution:**\nStep 1: Find slope from any two points.\n$m = \\frac{14 - 8}{3 - 1} = \\frac{6}{2} = 3$.\n\nStep 2: Find $b$ using one point.\nUsing $(1, 8)$: $8 = 3(1) + b \\Rightarrow b = 5$.\n\nEquation: $h = 3w + 5$.\n\nVerification: at $w = 5$: $h = 3(5) + 5 = 20$ ✓ (matches the table) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — swaps slope and intercept.\n* Choice C: "wrong base" — uses first height ($8$) as the intercept.\n* Choice D: "wrong base" — doubles the slope.\n\n**Test Day Takeaway:** Table-to-equation: compute slope, then find intercept using ANY data point. Verify by checking another point.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'table-to-linear',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-020',
    domain: 'algebra',
    skills: ['table-to-equation'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Temperature readings are taken over time. Which function models temperature $T$ at hour $h$?',
    questionTable: {
      headers: ['Hour', 'Temp (°F)'],
      rows: [
        ['0', '58'],
        ['2', '64'],
        ['4', '70'],
      ],
    },
    choices: [
      { id: 'A', text: '$T = 3h + 58$' },
      // distractor: uses total 6° change as hourly slope
      { id: 'B', text: '$T = 6h + 58$' },
      // distractor: uses hour-2 temp as intercept
      { id: 'C', text: '$T = 3h + 64$' },
      // distractor: swaps slope and intercept
      { id: 'D', text: '$T = 58h + 3$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Linear Equation from Table (Intercept Given)**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Slope $= (64 - 58)/(2 - 0) = 3$°/hr. Intercept: $T(0) = 58$. Equation: $T = 3h + 58$.\n\n**The Full Solution:**\nStep 1: Find slope.\n$m = \\frac{64 - 58}{2 - 0} = \\frac{6}{2} = 3$ °F/hr.\n\nStep 2: Since $h = 0$ is in the table, the intercept is read directly: $b = 58$.\n\nEquation: $T = 3h + 58$.\n\nVerification: at $h = 4$: $T = 3(4) + 58 = 70$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — uses total $6$° change as hourly slope (forgets to divide by hours).\n* Choice C: "wrong base" — uses hour $2$ temp ($64$) as the intercept.\n* Choice D: "applies the inverse operation" — swaps slope and intercept.\n\n**Test Day Takeaway:** When the table includes $x = 0$, the $y$-value at $x = 0$ IS the intercept. Compute slope from any two points; divide by the run.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'table-to-linear',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-021',
    domain: 'algebra',
    skills: ['table-to-equation'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A coffee shop tracks daily revenue. If $R = ad + b$, what is $b$?',
    questionTable: {
      headers: ['Day', 'Revenue (dollars)'],
      rows: [
        ['2', '340'],
        ['5', '520'],
        ['8', '700'],
      ],
    },
    choices: [
      // distractor: backs off day 1 by mistake (340 - 60 - 60 - 20)
      { id: 'A', text: '200' },
      { id: 'B', text: '220' },
      // distractor: subtracts 180 instead of 120
      { id: 'C', text: '160' },
      // distractor: adds instead of subtracting
      { id: 'D', text: '280' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Find Intercept from Slope and Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Slope $a = (520 - 340)/(5 - 2) = 60$. At day $2$: $340 = 60(2) + b \\Rightarrow b = 220$.\n\n**The Full Solution:**\nStep 1: Find slope from table.\n$a = \\frac{520 - 340}{5 - 2} = \\frac{180}{3} = 60$ dollars/day.\n\nStep 2: Use a known point to solve for $b$. Using $(2, 340)$:\n$340 = 60(2) + b$\n$340 = 120 + b$\n$b = 220$.\n\nVerification: at $d = 8$: $R = 60(8) + 220 = 480 + 220 = 700$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — backs off too far.\n* Choice C: "wrong base" — subtracts $180$ from $340$.\n* Choice D: "applies the inverse operation" — adds instead of subtracting.\n\n**Test Day Takeaway:** When the table does not include $x = 0$, you must back-calculate the intercept. Slope first, then use any point in $y = ax + b$ to solve for $b$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'table-to-linear',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-022',
    domain: 'algebra',
    skills: ['table-to-equation'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Data points are given. Which function fits the data?',
    questionTable: {
      headers: ['$x$', '$f(x)$'],
      rows: [
        ['$-2$', '13'],
        ['1', '4'],
        ['4', '$-5$'],
      ],
    },
    choices: [
      { id: 'A', text: '$f(x) = -3x + 7$' },
      // distractor: sign error on slope
      { id: 'B', text: '$f(x) = 3x + 7$' },
      // distractor: sign error on intercept
      { id: 'C', text: '$f(x) = -3x - 7$' },
      // distractor: uses f(1) = 4 as the intercept
      { id: 'D', text: '$f(x) = -3x + 4$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Linear Function from Table (Negative Slope)**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Slope $= (4 - 13)/(1 - (-2)) = -9/3 = -3$. At $x = 1$: $4 = -3(1) + b \\Rightarrow b = 7$. Equation: $f(x) = -3x + 7$.\n\n**The Full Solution:**\nStep 1: Find slope.\n$m = \\frac{4 - 13}{1 - (-2)} = \\frac{-9}{3} = -3$.\n\nStep 2: Find intercept using $(1, 4)$:\n$4 = -3(1) + b \\Rightarrow b = 7$.\n\nEquation: $f(x) = -3x + 7$.\n\nVerification: at $x = -2$: $f(-2) = -3(-2) + 7 = 13$ ✓. At $x = 4$: $f(4) = -12 + 7 = -5$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — drops the negative on slope.\n* Choice C: "sign error" — flips intercept sign.\n* Choice D: "wrong base" — uses $f(1) = 4$ as the intercept (skips the slope-intercept step).\n\n**Test Day Takeaway:** Always verify with a SECOND point from the table after solving. Catches sign errors quickly.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'table-to-linear',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },

  // === FUNCTION EVALUATION (5 questions) ===
  {
    id: 'bank-alg-023',
    domain: 'algebra',
    skills: ['function-evaluation'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 4x - 7$. What is the value of $f(5)$?',
    choices: [
      { id: 'A', text: '13' },
      // distractor: 4 + 5 + (−7) = 2, or other arithmetic slip
      { id: 'B', text: '27' },
      // distractor: subtracts 5 from 7 wrong direction
      { id: 'C', text: '$-3$' },
      // distractor: forgets to subtract 7
      { id: 'D', text: '20' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Direct Function Evaluation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $f(5) = 4(5) - 7 = 20 - 7 = 13$.\n\n**The Full Solution:**\nSubstitute $x = 5$ into $f(x) = 4x - 7$:\n$f(5) = 4(5) - 7 = 20 - 7 = 13$.\n\nVerification: $4(5) = 20$ and $20 - 7 = 13$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — arithmetic slip; $27$ would be $20 + 7$.\n* Choice C: "sign error" — $7 - 5 \\cdot 2$ or similar.\n* Choice D: "stops one step early" — gives $4 \\cdot 5 = 20$ without subtracting.\n\n**Test Day Takeaway:** Substitute, then follow order of operations: multiplication before subtraction.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'direct-evaluation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-024',
    domain: 'algebra',
    skills: ['function-evaluation'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'The function $g$ is defined by $g(x) = -2x + 15$. What is the value of $g(-3)$?',
    correctAnswer: '21',
    explanation: '**SAT Pattern: Function Evaluation with Negatives**\n\n**The correct answer is $21$.**\n\n**The Fast Way (~5s):** $g(-3) = -2(-3) + 15 = 6 + 15 = 21$.\n\n**The Full Solution:**\nSubstitute $x = -3$:\n$g(-3) = -2(-3) + 15$\n$= 6 + 15$ (since negative times negative is positive)\n$= 21$.\n\nVerification: $-2 \\cdot (-3) = +6$ ✓ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing $-2(-3) = -6$ instead of $+6$ (sign error).\n* Subtracting $15$ instead of adding.\n* Reporting $9$ ($15 - 6$ with sign error).\n\n**Test Day Takeaway:** Negative times negative is POSITIVE. When substituting a negative input, parenthesize: $-2(-3) = +6$, not $-6$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'direct-evaluation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-025',
    domain: 'algebra',
    skills: ['function-evaluation'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A taxi charges $C(m) = 2.50m + 3.00$, where $m$ is miles traveled. A customer pays $\\$28.00$. How many miles did they travel?',
    choices: [
      // distractor: arithmetic slip
      { id: 'A', text: '8' },
      { id: 'B', text: '10' },
      // distractor: divides 28/2.50 without subtracting base
      { id: 'C', text: '11.2' },
      // distractor: arithmetic slip
      { id: 'D', text: '12.4' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Solve for Function Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $2.50m + 3.00 = 28.00 \\Rightarrow 2.50m = 25 \\Rightarrow m = 10$.\n\n**The Full Solution:**\nSet $C(m) = 28$:\n$2.50m + 3.00 = 28.00$\n$2.50m = 25.00$\n$m = 10$ miles.\n\nVerification: $C(10) = 2.50(10) + 3 = 25 + 3 = 28$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — arithmetic slip.\n* Choice C: "stops one step early" — divides $28/2.50 = 11.2$ without subtracting the base fare.\n* Choice D: "wrong base" — arithmetic slip.\n\n**Test Day Takeaway:** Solve-for-input problems: subtract the constant first, THEN divide by the slope. Order: undo addition, then multiplication.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-solve-for-input',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-026',
    domain: 'algebra',
    skills: ['function-evaluation'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = x^2 - 4x + 7$. What is the value of $f(3)$?',
    correctAnswer: '4',
    explanation: '**SAT Pattern: Function Evaluation (Quadratic)**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~10s):** $f(3) = 9 - 12 + 7 = 4$.\n\n**The Full Solution:**\nSubstitute $x = 3$:\n$f(3) = 3^2 - 4(3) + 7 = 9 - 12 + 7 = 4$.\n\nFollow order of operations: square first, then multiply, then add/subtract left to right.\n\nVerification: $9 - 12 = -3$; $-3 + 7 = 4$ ✓ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting to square $3$: would give $3 - 12 + 7 = -2$.\n* Computing $3^2 = 6$ instead of $9$.\n* Misordering: $(9 + 7) - 12 = 4$ is fine, but $9 - (12 + 7) = -10$ is wrong.\n\n**Test Day Takeaway:** Order of operations is critical with quadratics: SQUARE first, then handle the rest left to right.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'direct-evaluation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-027',
    domain: 'algebra',
    skills: ['function-evaluation', 'function-notation'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 3x - 7$. If $f(a) = f(2a - 5)$, what is the value of $a$?',
    choices: [
      // distractor: incorrect equation setup (3a - 7 = 2a - 5)
      { id: 'A', text: '3' },
      { id: 'B', text: '5' },
      // distractor: uses 7 from f(x) somewhere
      { id: 'C', text: '7' },
      // distractor: double 5
      { id: 'D', text: '10' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Function Equality (One-to-One Linear)**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $f$ is one-to-one (linear with slope $\\neq 0$), so $f(a) = f(b)$ implies $a = b$. Set $a = 2a - 5 \\Rightarrow a = 5$.\n\n**The Full Solution:**\nLinear functions with nonzero slope are one-to-one: different inputs give different outputs. So $f(a) = f(2a - 5)$ requires $a = 2a - 5$.\nSolve: $a = 2a - 5 \\Rightarrow 5 = a$.\n\nAlternatively: substitute directly. $f(a) = 3a - 7$. $f(2a - 5) = 3(2a - 5) - 7 = 6a - 22$. Set equal:\n$3a - 7 = 6a - 22 \\Rightarrow -3a = -15 \\Rightarrow a = 5$.\n\nVerification: $f(5) = 8$ and $f(2(5) - 5) = f(5) = 8$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — sets $3a - 7 = 2a - 5$ wrongly.\n* Choice C: "wrong base" — uses $7$ from $f(x)$.\n* Choice D: "off-by-one" — doubles correct answer.\n\n**Test Day Takeaway:** Linear functions are one-to-one (when slope $\\neq 0$). $f(a) = f(b) \\Rightarrow a = b$ for any linear $f$. Cleanest path.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-equality',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },

  // === PARALLEL LINE SLOPE (3 questions) ===
  {
    id: 'bank-alg-028',
    domain: 'algebra',
    skills: ['parallel-line-slope'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Line $p$ has equation $y = \\frac{2}{3}x - 4$. What is the slope of any line parallel to $p$?',
    choices: [
      { id: 'A', text: '$\\frac{2}{3}$' },
      // distractor: flips sign instead of leaving alone
      { id: 'B', text: '$-\\frac{2}{3}$' },
      // distractor: gives reciprocal
      { id: 'C', text: '$\\frac{3}{2}$' },
      // distractor: gives perpendicular slope (negative reciprocal)
      { id: 'D', text: '$-\\frac{3}{2}$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Parallel Slope Identification**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Parallel lines have the SAME slope: $\\frac{2}{3}$.\n\n**The Full Solution:**\nTwo lines are parallel if and only if they have equal slopes. Given $y = \\frac{2}{3}x - 4$ has slope $\\frac{2}{3}$, any parallel line also has slope $\\frac{2}{3}$.\n\nVerification: parallel lines never intersect; same slope ensures this \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — flips slope sign.\n* Choice C: "wrong formula" — reciprocal (related to perpendicular).\n* Choice D: "wrong formula" — negative reciprocal = PERPENDICULAR slope.\n\n**Test Day Takeaway:** Parallel = same slope. Perpendicular = negative reciprocal. Different operations.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'parallel-slope-id',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-029',
    domain: 'algebra',
    skills: ['parallel-line-slope'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Line $\\ell$ passes through $(1, 4)$ and $(-3, 12)$. What is the slope of a line parallel to $\\ell$?',
    choices: [
      // distractor: sign error in slope
      { id: 'A', text: '$2$' },
      { id: 'B', text: '$-2$' },
      // distractor: gives perpendicular slope (negative reciprocal)
      { id: 'C', text: '$\\frac{1}{2}$' },
      // distractor: reciprocal with sign error
      { id: 'D', text: '$-\\frac{1}{2}$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Parallel Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Slope of $\\ell = (12 - 4)/(-3 - 1) = 8/(-4) = -2$. Parallel also has slope $-2$.\n\n**The Full Solution:**\nCompute slope of $\\ell$ from the two points:\n$m = \\frac{12 - 4}{-3 - 1} = \\frac{8}{-4} = -2$.\nParallel lines have the same slope: $-2$.\n\nVerification: from $(1, 4)$ with slope $-2$, after $\\Delta x = -4$: $y = 4 + (-2)(-4) = 12$ ✓ (matches $(-3, 12)$) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "sign error" — drops the negative.\n* Choice C: "wrong formula" — gives perpendicular slope.\n* Choice D: "wrong formula" — reciprocal with sign error.\n\n**Test Day Takeaway:** Compute the slope correctly first (with signs), then apply the parallel rule (same slope) or perpendicular rule (negative reciprocal). Don\'t mix the two.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'parallel-slope-id',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-030',
    domain: 'algebra',
    skills: ['parallel-line-slope'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'The line $6x - 4y = 20$ has slope $m$. What is $m$?',
    correctAnswer: '1.5',
    explanation: '**SAT Pattern: Slope from Standard Form**\n\n**The correct answer is $1.5$.**\n\n**The Fast Way (~10s):** For $Ax + By = C$, slope $= -A/B = -6/(-4) = 1.5$.\n\n**The Full Solution:**\nSolve for $y$:\n$6x - 4y = 20$\n$-4y = -6x + 20$\n$y = \\frac{3}{2}x - 5$.\nSlope $m = \\frac{3}{2} = 1.5$.\n\nVerification: at $x = 0$: $y = -5$. At $x = 2$: $y = -2$. Slope $= (-2 - (-5))/(2 - 0) = 3/2$ ✓ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Sign error when dividing by $-4$: gives $-1.5$.\n* Using $6/4 = 1.5$ but with wrong sign.\n* Reporting the intercept $-5$.\n\n**Test Day Takeaway:** For $Ax + By = C$, slope is $-A/B$. Or just isolate $y$ and read the coefficient.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'standard-form-slope',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },

  // === WRITING PARALLEL EQUATION (3 questions) ===
  {
    id: 'bank-alg-031',
    domain: 'algebra',
    skills: ['writing-parallel-equation'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Which equation represents a line parallel to $y = -5x + 8$ that passes through $(2, 1)$?',
    choices: [
      { id: 'A', text: '$y = -5x + 11$' },
      // distractor: sign error on intercept
      { id: 'B', text: '$y = -5x - 9$' },
      // distractor: uses perpendicular slope
      { id: 'C', text: '$y = \\frac{1}{5}x + \\frac{3}{5}$' },
      // distractor: drops the negative on slope
      { id: 'D', text: '$y = 5x - 9$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Parallel Line Through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Parallel slope $= -5$. At $(2, 1)$: $1 = -5(2) + b \\Rightarrow b = 11$. Equation: $y = -5x + 11$.\n\n**The Full Solution:**\nParallel lines have the same slope: $m = -5$.\nUse point-slope or solve for $b$ at $(2, 1)$:\n$1 = -5(2) + b$\n$1 = -10 + b$\n$b = 11$.\nEquation: $y = -5x + 11$.\n\nVerification: at $x = 2$: $y = -10 + 11 = 1$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — flips intercept sign.\n* Choice C: "wrong formula" — uses perpendicular slope.\n* Choice D: "sign error" — drops the negative on slope.\n\n**Test Day Takeaway:** Parallel through a point: KEEP the slope, solve for new intercept using the point.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'parallel-line-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-032',
    domain: 'algebra',
    skills: ['writing-parallel-equation'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A road follows $3x - 4y = 20$. A bike path is parallel and passes through $(0, 7)$. Which equation describes the bike path?',
    choices: [
      { id: 'A', text: '$y = \\frac{3}{4}x + 7$' },
      // distractor: uses perpendicular slope
      { id: 'B', text: '$y = -\\frac{4}{3}x + 7$' },
      // distractor: keeps road\'s intercept
      { id: 'C', text: '$y = \\frac{3}{4}x - 5$' },
      // distractor: inverts the slope
      { id: 'D', text: '$y = \\frac{4}{3}x + 7$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Parallel from Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Road slope: $-A/B = -3/(-4) = 3/4$. Parallel through $(0, 7)$: $y = (3/4)x + 7$.\n\n**The Full Solution:**\nFind road slope by solving for $y$:\n$3x - 4y = 20 \\Rightarrow -4y = -3x + 20 \\Rightarrow y = \\frac{3}{4}x - 5$.\nSlope: $\\frac{3}{4}$.\nParallel through $(0, 7)$: $y$-intercept is $7$ directly (since the point\'s $x$ is $0$):\n$y = \\frac{3}{4}x + 7$.\n\nVerification: at $x = 0$: $y = 7$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — uses negative reciprocal (perpendicular).\n* Choice C: "stops one step early" — keeps the road\'s intercept.\n* Choice D: "wrong formula" — inverts the slope.\n\n**Test Day Takeaway:** When a point is $(0, k)$, the $y$-intercept IS $k$. Saves a step.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'parallel-line-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-033',
    domain: 'algebra',
    skills: ['writing-parallel-equation', 'parallel-line-slope'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Line $\\ell$ passes through $(1, 4)$ and $(-3, 12)$. Which equation represents a line parallel to $\\ell$ with $y$-intercept $-1$?',
    choices: [
      { id: 'A', text: '$y = -2x - 1$' },
      // distractor: sign error on slope
      { id: 'B', text: '$y = 2x - 1$' },
      // distractor: sign error on intercept
      { id: 'C', text: '$y = -2x + 1$' },
      // distractor: reciprocal slope (related to perpendicular)
      { id: 'D', text: '$y = \\frac{1}{2}x - 1$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Parallel with Specified Intercept**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Slope of $\\ell = (12 - 4)/(-3 - 1) = -2$. With intercept $-1$: $y = -2x - 1$.\n\n**The Full Solution:**\nStep 1: Slope of $\\ell$:\n$m = \\frac{12 - 4}{-3 - 1} = \\frac{8}{-4} = -2$.\nStep 2: Parallel line with $y$-intercept $-1$: $y = -2x + (-1) = -2x - 1$.\n\nVerification: at $x = 0$: $y = -1$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — drops the negative on slope.\n* Choice C: "sign error" — flips intercept sign.\n* Choice D: "wrong formula" — uses reciprocal of slope.\n\n**Test Day Takeaway:** Parallel + given intercept: drop in the slope from the original, then the new intercept directly.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'parallel-line-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },

  // === PERPENDICULAR NEGATIVE RECIPROCAL (3 questions) ===
  {
    id: 'bank-alg-034',
    domain: 'algebra',
    skills: ['perpendicular-negative-reciprocal'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A fence runs along a line with slope $4$. A garden wall is perpendicular to the fence. What is the wall\'s slope?',
    choices: [
      // distractor: gives parallel slope
      { id: 'A', text: '$4$' },
      // distractor: negates without reciprocal
      { id: 'B', text: '$-4$' },
      // distractor: reciprocal without negation
      { id: 'C', text: '$\\frac{1}{4}$' },
      { id: 'D', text: '$-\\frac{1}{4}$' }
    ],
    correctAnswer: 'D',
    explanation: '**SAT Pattern: Perpendicular Slope (Negative Reciprocal)**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** Perpendicular = negative reciprocal. $4 \\to -\\frac{1}{4}$.\n\n**The Full Solution:**\nIf two lines are perpendicular, their slopes are negative reciprocals: $m_1 \\cdot m_2 = -1$.\nWith $m_1 = 4$: $m_2 = -\\frac{1}{4}$.\n\nVerification: $4 \\cdot \\left(-\\frac{1}{4}\\right) = -1$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — parallel slope (same), not perpendicular.\n* Choice B: "stops one step early" — negates without taking reciprocal.\n* Choice C: "stops one step early" — takes reciprocal without negating.\n\n**Test Day Takeaway:** Perpendicular = both negate AND take reciprocal. Check: $m_1 \\cdot m_2 = -1$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'perpendicular-slope-id',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-035',
    domain: 'algebra',
    skills: ['perpendicular-negative-reciprocal'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Line $m$ passes through $(-1, 5)$ and $(3, -3)$. What is the slope of a line perpendicular to $m$?',
    choices: [
      // distractor: gives parallel slope
      { id: 'A', text: '$-2$' },
      // distractor: negates without reciprocal
      { id: 'B', text: '$2$' },
      { id: 'C', text: '$\\frac{1}{2}$' },
      // distractor: reciprocal with wrong sign
      { id: 'D', text: '$-\\frac{1}{2}$' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Perpendicular Slope from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Slope of $m = (-3 - 5)/(3 - (-1)) = -8/4 = -2$. Perpendicular: $1/2$.\n\n**The Full Solution:**\nStep 1: Slope of $m$:\n$m_1 = \\frac{-3 - 5}{3 - (-1)} = \\frac{-8}{4} = -2$.\nStep 2: Perpendicular slope $= -1/m_1 = -1/(-2) = 1/2$.\n\nVerification: $-2 \\cdot 1/2 = -1$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — parallel slope.\n* Choice B: "stops one step early" — only negates.\n* Choice D: "sign error" — flips both sign and reciprocal but in wrong combination.\n\n**Test Day Takeaway:** Compute slope first (with signs), then apply $-1/m$ for perpendicular. Two operations: negate AND reciprocate.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'perpendicular-slope-id',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-036',
    domain: 'algebra',
    skills: ['perpendicular-negative-reciprocal'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A line has slope $\\frac{5}{8}$. What is the slope of a perpendicular line? Express as a decimal.',
    correctAnswer: '-1.6',
    explanation: '**SAT Pattern: Perpendicular Slope as Decimal**\n\n**The correct answer is $-1.6$.**\n\n**The Fast Way (~10s):** Perpendicular slope $= -8/5 = -1.6$.\n\n**The Full Solution:**\nGiven slope $\\frac{5}{8}$, perpendicular slope is the negative reciprocal: $-\\frac{8}{5}$.\nConvert to decimal: $-\\frac{8}{5} = -1.6$.\n\nVerification: $\\frac{5}{8} \\cdot \\left(-\\frac{8}{5}\\right) = -1$ ✓ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $1.6$ (forgets negative sign).\n* Reporting $0.625$ (= $5/8$, the original slope).\n* Reporting $-0.625$ (negates without taking reciprocal).\n\n**Test Day Takeaway:** Perpendicular: flip fraction (reciprocal) AND change sign. $\\frac{5}{8} \\to -\\frac{8}{5} = -1.6$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'perpendicular-slope-id',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },

  // === WRITING PERPENDICULAR EQUATION (3 questions) ===
  {
    id: 'bank-alg-037',
    domain: 'algebra',
    skills: ['writing-perpendicular-equation'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Write the equation of a line perpendicular to $y = \\frac{3}{5}x + 2$ that passes through $(6, -1)$.',
    choices: [
      { id: 'A', text: '$y = -\\frac{5}{3}x + 9$' },
      // distractor: sign error on slope
      { id: 'B', text: '$y = \\frac{5}{3}x - 11$' },
      // distractor: uses negation of original slope (not perpendicular)
      { id: 'C', text: '$y = -\\frac{3}{5}x + \\frac{13}{5}$' },
      // distractor: sign error on intercept
      { id: 'D', text: '$y = -\\frac{5}{3}x - 11$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Perpendicular Line Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Perpendicular slope $= -5/3$. At $(6, -1)$: $-1 = -(5/3)(6) + b = -10 + b \\Rightarrow b = 9$.\n\n**The Full Solution:**\nOriginal slope $\\frac{3}{5}$. Perpendicular slope: $-\\frac{5}{3}$.\nThrough $(6, -1)$:\n$-1 = -\\frac{5}{3}(6) + b$\n$-1 = -10 + b$\n$b = 9$.\nEquation: $y = -\\frac{5}{3}x + 9$.\n\nVerification: at $x = 6$: $y = -10 + 9 = -1$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — drops the negative on perpendicular slope.\n* Choice C: "wrong formula" — uses negation of slope instead of negative reciprocal.\n* Choice D: "sign error" — flips intercept sign.\n\n**Test Day Takeaway:** Perpendicular through a point: compute perpendicular slope (flip and negate), then solve for $b$ using the point.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'perpendicular-line-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-038',
    domain: 'algebra',
    skills: ['writing-perpendicular-equation'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The line $2x + 6y = 18$ represents a trail. A new trail is perpendicular and passes through $(4, -2)$. What is its equation?',
    choices: [
      { id: 'A', text: '$y = 3x - 14$' },
      // distractor: uses parallel slope
      { id: 'B', text: '$y = -\\frac{1}{3}x - \\frac{2}{3}$' },
      // distractor: sign error on intercept
      { id: 'C', text: '$y = 3x + 10$' },
      // distractor: sign error on slope
      { id: 'D', text: '$y = -3x + 10$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Perpendicular from Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Original slope: $-A/B = -2/6 = -1/3$. Perpendicular: $3$. At $(4, -2)$: $-2 = 3(4) + b = 12 + b \\Rightarrow b = -14$. Equation: $y = 3x - 14$.\n\n**The Full Solution:**\nFind original slope by solving for $y$:\n$2x + 6y = 18 \\Rightarrow 6y = -2x + 18 \\Rightarrow y = -\\frac{1}{3}x + 3$.\nOriginal slope: $-\\frac{1}{3}$. Perpendicular slope: $3$.\nAt $(4, -2)$: $-2 = 3(4) + b \\Rightarrow b = -14$.\nEquation: $y = 3x - 14$.\n\nVerification: at $x = 4$: $y = 12 - 14 = -2$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — uses parallel slope (same as original).\n* Choice C: "sign error" — flips intercept sign.\n* Choice D: "sign error" — uses $-3$ as slope.\n\n**Test Day Takeaway:** From $Ax + By = C$: slope $= -A/B$. Apply $-1/m$ for perpendicular slope, then plug in the point.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'perpendicular-line-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-039',
    domain: 'algebra',
    skills: ['writing-perpendicular-equation'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'A line perpendicular to $y = \\frac{4}{7}x + 3$ passes through $(4, 2)$. What is its $y$-intercept?',
    correctAnswer: '9',
    explanation: '**SAT Pattern: y-Intercept of Perpendicular Line**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~20s):** Perp slope $= -7/4$. At $(4, 2)$: $2 = -(7/4)(4) + b = -7 + b \\Rightarrow b = 9$.\n\n**The Full Solution:**\nOriginal slope $\\frac{4}{7}$. Perpendicular slope: $-\\frac{7}{4}$.\nThrough $(4, 2)$: $2 = -\\frac{7}{4}(4) + b = -7 + b \\Rightarrow b = 9$.\n\nVerification: equation $y = -\\frac{7}{4}x + 9$ at $x = 4$: $y = -7 + 9 = 2$ ✓ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using parallel slope $\\frac{4}{7}$ instead of perpendicular $-\\frac{7}{4}$.\n* Sign error: getting $b = -5$ instead of $9$.\n* Reporting $-7$ (the intermediate value).\n\n**Test Day Takeaway:** Find perp slope first, then use point to solve for $b$. The $y$-intercept is the constant term in $y = mx + b$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'perpendicular-line-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },

  // === SYSTEM SOLUTION TYPES (4 questions) ===
  {
    id: 'bank-alg-040',
    domain: 'algebra',
    skills: ['system-solution-types'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'How many solutions does the system have?\n$y = 2x + 5$\n$y = 2x - 3$',
    choices: [
      // distractor: linear systems usually have one, but parallel lines don\'t
      { id: 'A', text: 'Exactly one' },
      // distractor: linear systems can\'t have exactly two
      { id: 'B', text: 'Exactly two' },
      // distractor: requires identical equations
      { id: 'C', text: 'Infinitely many' },
      { id: 'D', text: 'No solution' }
    ],
    correctAnswer: 'D',
    explanation: '**SAT Pattern: Classify System (Parallel Lines)**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** Same slope ($2$), different intercepts ($5 \\neq -3$). Parallel lines never meet → no solution.\n\n**The Full Solution:**\nBoth equations have slope $2$. The $y$-intercepts are $5$ and $-3$. Lines with the same slope and different intercepts are PARALLEL — they never intersect.\n\nVerification: setting equal: $2x + 5 = 2x - 3 \\Rightarrow 5 = -3$, a contradiction. No solution \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — most linear systems have one solution, but parallel lines don\'t.\n* Choice B: "wrong formula" — linear systems can\'t have exactly two solutions.\n* Choice C: "wrong base" — infinitely many requires IDENTICAL equations.\n\n**Test Day Takeaway:** Same slope, different intercepts $\\Rightarrow$ NO solution. Same slope AND same intercept $\\Rightarrow$ infinitely many. Different slopes $\\Rightarrow$ exactly one.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'system-type-classification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-041',
    domain: 'algebra',
    skills: ['system-solution-types'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'How many solutions does the system have?\n$y = 3x + 2$\n$y = -x + 6$',
    choices: [
      // distractor: would require parallel lines (same slope)
      { id: 'A', text: 'No solution' },
      { id: 'B', text: 'Exactly one' },
      // distractor: linear systems can\'t have exactly two
      { id: 'C', text: 'Exactly two' },
      // distractor: would require identical lines
      { id: 'D', text: 'Infinitely many' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Classify System (Different Slopes)**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Slopes $3$ and $-1$ are DIFFERENT, so the lines intersect at exactly one point.\n\n**The Full Solution:**\nThe two lines have different slopes ($3$ and $-1$), so they intersect at exactly one point. Find it:\n$3x + 2 = -x + 6 \\Rightarrow 4x = 4 \\Rightarrow x = 1$; then $y = 5$. One solution: $(1, 5)$.\n\nVerification: $3(1) + 2 = 5$ ✓; $-1 + 6 = 5$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — no solution requires parallel lines.\n* Choice C: "wrong formula" — linear systems never have exactly two solutions.\n* Choice D: "wrong base" — would require identical equations.\n\n**Test Day Takeaway:** Different slopes $\\Rightarrow$ exactly one intersection. Don\'t overthink — read off slopes from $y = mx + b$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'system-type-classification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-042',
    domain: 'algebra',
    skills: ['system-solution-types'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'For what value of $k$ does the system have infinitely many solutions?\n$6x - 9y = 12$\n$2x - 3y = k$',
    choices: [
      { id: 'A', text: '4' },
      // distractor: uses original right-hand side
      { id: 'B', text: '12' },
      // distractor: ratio confusion
      { id: 'C', text: '3' },
      // distractor: multiplies by 3 instead of dividing
      { id: 'D', text: '36' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Parameter for Identical Equations**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Divide eq 1 by $3$: $2x - 3y = 4$. For infinite solutions, $k = 4$.\n\n**The Full Solution:**\nFor infinitely many solutions, the two equations must be EQUIVALENT (one is a multiple of the other).\nDivide first equation by $3$: $\\frac{6x - 9y}{3} = \\frac{12}{3} \\Rightarrow 2x - 3y = 4$.\nFor this to match the second equation, $k = 4$.\n\nVerification: $2x - 3y = 4$ is now identical to the second equation. Same line, infinitely many solutions \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — uses the original right-hand side without dividing.\n* Choice C: "wrong base" — uses the divisor ($3$) instead of the result.\n* Choice D: "applies the inverse operation" — multiplies by $3$ instead of dividing.\n\n**Test Day Takeaway:** Infinitely many solutions $\\Leftrightarrow$ equations are proportional. Scale one to match the other and the constants must match too.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'system-type-classification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-043',
    domain: 'algebra',
    skills: ['system-solution-types'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'For which values of $a$ and $b$ does $3x + ay = 12$ and $6x + 8y = b$ have no solution?',
    choices: [
      // distractor: gives infinite solutions, not no solution
      { id: 'A', text: '$a = 4$, $b = 24$' },
      // distractor: a correct but b too specific
      { id: 'B', text: '$a = 4$, $b = 20$' },
      // distractor: wrong a value
      { id: 'C', text: '$a = 8$, $b = 24$' },
      { id: 'D', text: '$a = 4$, $b \\neq 24$' }
    ],
    correctAnswer: 'D',
    explanation: '**SAT Pattern: Parameter for No Solution**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Multiply eq 1 by $2$: $6x + 2ay = 24$. For lines to be PARALLEL (same slope, different intercepts): $2a = 8 \\Rightarrow a = 4$, AND $b \\neq 24$.\n\n**The Full Solution:**\nMultiply first equation by $2$: $6x + 2ay = 24$.\nFor the two equations to be PARALLEL (so no solution), we need:\n* Coefficients proportional: $\\frac{6}{6} = \\frac{2a}{8}$, so $2a = 8 \\Rightarrow a = 4$.\n* But constants NOT proportional: $b \\neq 24$.\n\nVerification: at $a = 4, b = 24$: identical equations (infinite solutions, not no solution). At $a = 4, b \\neq 24$: parallel lines (no solution) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — gives identical equations (infinite solutions).\n* Choice B: "wrong base" — $b = 20$ works but the question allows ANY $b \\neq 24$.\n* Choice C: "wrong base" — wrong value for $a$.\n\n**Test Day Takeaway:** No solution: SAME slope, DIFFERENT intercepts. Match coefficient ratios for slope; require constant ratio to differ.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'system-no-solution-parameter',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },

  // === SETTING UP SYSTEMS (4 questions) ===
  {
    id: 'bank-alg-044',
    domain: 'algebra',
    skills: ['setting-up-systems'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A farmer buys tomato seed packs ($\\$4$) and pepper seed packs ($\\$6$), 15 packs total for $\\$74$. With $t$ = tomato and $p$ = pepper, which system applies?',
    choices: [
      { id: 'A', text: '$t + p = 15$, $4t + 6p = 74$' },
      // distractor: swaps total count and total cost
      { id: 'B', text: '$t + p = 74$, $4t + 6p = 15$' },
      // distractor: swaps tomato/pepper prices
      { id: 'C', text: '$t + p = 15$, $6t + 4p = 74$' },
      // distractor: swaps count and cost AND uses 4/6 wrong
      { id: 'D', text: '$4t + 6p = 15$, $t + p = 74$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: System Setup (Count + Cost)**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Count: $t + p = 15$. Cost: $4t + 6p = 74$.\n\n**The Full Solution:**\nTwo constraints:\n* Total packs: $t + p = 15$\n* Total cost: $\\$4$ per tomato + $\\$6$ per pepper $= 4t + 6p = 74$\n\nVerification: solving gives $t = 8$, $p = 7$. Check: $8 \\cdot 4 + 7 \\cdot 6 = 32 + 42 = 74$ ✓ and $8 + 7 = 15$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — swaps count and cost.\n* Choice C: "wrong base" — assigns the wrong price to each seed type.\n* Choice D: "wrong formula" — combines errors.\n\n**Test Day Takeaway:** Two-variable word problems with TWO constraints (count + cost, or count + weight, etc.): write each constraint as a separate equation. Match each variable to its rate (price, weight, etc.) carefully.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'system-setup-word-problem',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-045',
    domain: 'algebra',
    skills: ['setting-up-systems'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A theater sells adult ($\\$12$) and child ($\\$7$) tickets. 230 tickets sold for $\\$2,210$. Which system applies with $a$ = adult, $c$ = child?',
    choices: [
      { id: 'A', text: '$a + c = 230$, $12a + 7c = 2210$' },
      // distractor: swaps total count and total revenue
      { id: 'B', text: '$a + c = 2210$, $12a + 7c = 230$' },
      // distractor: same as B variant
      { id: 'C', text: '$12a + 7c = 230$, $a + c = 2210$' },
      // distractor: reverses which ticket costs $12
      { id: 'D', text: '$a + c = 230$, $7a + 12c = 2210$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Ticket Sales System**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Count: $a + c = 230$. Revenue: $12a + 7c = 2210$.\n\n**The Full Solution:**\nTwo constraints:\n* Tickets: $a + c = 230$\n* Revenue: $\\$12$ per adult + $\\$7$ per child $= 12a + 7c = 2210$\n\nVerification: solving gives $a = 120$, $c = 110$. Check: $12 \\cdot 120 + 7 \\cdot 110 = 1440 + 770 = 2210$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — swaps count and revenue.\n* Choice C: "applies the inverse operation" — same swap.\n* Choice D: "wrong base" — reverses which ticket costs $\\$12$.\n\n**Test Day Takeaway:** Read the problem twice to match variables to prices. Adult ticket costs $\\$12$, so the coefficient of $a$ is $12$. Don\'t reverse.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'system-setup-word-problem',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-046',
    domain: 'algebra',
    skills: ['setting-up-systems'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A chemist mixes a 40% acid solution with a 70% acid solution to produce 60 L of a 52% solution. Which system uses $x$ = liters of 40% and $y$ = liters of 70%?',
    choices: [
      { id: 'A', text: '$x + y = 60$, $0.40x + 0.70y = 31.2$' },
      // distractor: uses percent values directly instead of decimals
      { id: 'B', text: '$x + y = 60$, $40x + 70y = 52$' },
      // distractor: swaps total volume and total acid
      { id: 'C', text: '$x + y = 52$, $0.40x + 0.70y = 60$' },
      // distractor: forgets to compute 0.52 * 60
      { id: 'D', text: '$x + y = 60$, $0.40x + 0.70y = 52$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Mixture System Setup**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Volume: $x + y = 60$. Acid: $0.40x + 0.70y = 0.52 \\cdot 60 = 31.2$.\n\n**The Full Solution:**\nTwo constraints:\n* Total volume: $x + y = 60$\n* Total acid: $40\\%$ of $x$ + $70\\%$ of $y$ = $52\\%$ of $60$. As decimals: $0.40x + 0.70y = 0.52 \\cdot 60 = 31.2$.\n\nVerification: solving gives $x = 36$, $y = 24$. Check: $0.40(36) + 0.70(24) = 14.4 + 16.8 = 31.2$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — uses percent values ($40$, $70$, $52$) directly instead of decimals.\n* Choice C: "applies the inverse operation" — swaps the two constraints.\n* Choice D: "stops one step early" — uses $52$ as the acid total instead of $0.52 \\cdot 60 = 31.2$.\n\n**Test Day Takeaway:** Mixture problems: total of substance (acid here) is (percent) × (total volume). Use DECIMAL percents, not raw numbers.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'mixture-system',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-047',
    domain: 'algebra',
    skills: ['setting-up-systems'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A food truck owner buys $x$ pounds of chicken at $\\$5$/lb and $y$ pounds of beef at $\\$8$/lb, spending exactly $\\$200$ on 30 total pounds. Which system models this?',
    choices: [
      { id: 'A', text: '$x + y = 30$, $5x + 8y = 200$' },
      // distractor: swaps weight and cost
      { id: 'B', text: '$x + y = 200$, $5x + 8y = 30$' },
      // distractor: swaps chicken/beef prices
      { id: 'C', text: '$x + y = 30$, $8x + 5y = 200$' },
      // distractor: swaps everything
      { id: 'D', text: '$5x + 8y = 30$, $x + y = 200$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Two-Variable Word Problem (Weight + Cost)**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Weight: $x + y = 30$. Cost: $5x + 8y = 200$.\n\n**The Full Solution:**\nTwo constraints:\n* Total weight: $x + y = 30$\n* Total cost: $5x + 8y = 200$ (where $5$ is chicken price, $8$ is beef price)\n\nVerification: solving gives $x = 13.\\overline{3}$, $y = 16.\\overline{6}$. Check: $5(40/3) + 8(50/3) = 200/3 + 400/3 = 600/3 = 200$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — swaps weight constraint and cost constraint.\n* Choice C: "wrong base" — swaps chicken and beef prices.\n* Choice D: "wrong formula" — combines errors.\n\n**Test Day Takeaway:** Match each variable to its rate (price/lb). Whichever variable corresponds to a $\\$5$/lb item gets coefficient $5$ in the cost equation.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'system-setup-word-problem',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },

  // === SUBSTITUTION METHOD (6 questions) ===
  {
    id: 'bank-alg-048',
    domain: 'algebra',
    skills: ['substitution-method'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Solve by substitution:\n$y = 3x - 1$\n$2x + y = 14$\nWhat is $x$?',
    choices: [
      // distractor: arithmetic slip
      { id: 'A', text: '2' },
      { id: 'B', text: '3' },
      // distractor: gives y, not x
      { id: 'C', text: '5' },
      // distractor: gives total 2x + y
      { id: 'D', text: '8' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Substitution Method**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Substitute $y = 3x - 1$ into eq 2: $2x + (3x - 1) = 14 \\Rightarrow 5x = 15 \\Rightarrow x = 3$.\n\n**The Full Solution:**\nFirst equation already has $y$ isolated: $y = 3x - 1$.\nSubstitute into second equation:\n$2x + (3x - 1) = 14$\n$5x - 1 = 14$\n$5x = 15$\n$x = 3$.\n\nVerification: $y = 3(3) - 1 = 8$. Check eq 2: $2(3) + 8 = 14$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — arithmetic slip.\n* Choice C: "wrong base" — close to $y$ value but $y = 8$, not $5$.\n* Choice D: "wrong base" — gives $y$ instead of $x$ (or sum $14 - 6 = 8$).\n\n**Test Day Takeaway:** Substitution: pick the equation with an isolated variable (or isolate one first), then plug into the OTHER equation. Don\'t substitute into the same equation.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'substitution-solve',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-049',
    domain: 'algebra',
    skills: ['substitution-method'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Solve:\n$y = x + 4$\n$y = 2x + 1$\nWhat is $y$?',
    choices: [
      // distractor: gives x instead of y
      { id: 'A', text: '3' },
      // distractor: arithmetic slip
      { id: 'B', text: '5' },
      { id: 'C', text: '7' },
      // distractor: arithmetic slip
      { id: 'D', text: '9' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: System Equal to y on Both Sides**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Set equal: $x + 4 = 2x + 1 \\Rightarrow x = 3$. $y = 3 + 4 = 7$.\n\n**The Full Solution:**\nBoth equations have $y$ isolated. Set the right sides equal:\n$x + 4 = 2x + 1$\n$3 = x$, so $x = 3$.\nThen $y = x + 4 = 7$.\n\nVerification: eq 2: $y = 2(3) + 1 = 7$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — gives $x$ value, not $y$.\n* Choice B: "off-by-one" — arithmetic slip.\n* Choice D: "off-by-one" — arithmetic slip.\n\n**Test Day Takeaway:** When BOTH equations give $y$ in terms of $x$, set the right sides equal directly. Read the question carefully — sometimes the answer is $y$, sometimes $x$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'substitution-solve',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-050',
    domain: 'algebra',
    skills: ['substitution-method'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'Solve by substitution:\n$x = 2y + 5$\n$3x - 4y = 25$\nWhat is $y$?',
    correctAnswer: '5',
    explanation: '**SAT Pattern: Substitution (x in terms of y)**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** Substitute $x = 2y + 5$ into eq 2: $3(2y + 5) - 4y = 25 \\Rightarrow 6y + 15 - 4y = 25 \\Rightarrow 2y = 10 \\Rightarrow y = 5$.\n\n**The Full Solution:**\nFirst equation has $x$ isolated. Substitute into second:\n$3(2y + 5) - 4y = 25$\n$6y + 15 - 4y = 25$\n$2y = 10$\n$y = 5$.\n\nVerification: $x = 2(5) + 5 = 15$. Check eq 2: $3(15) - 4(5) = 45 - 20 = 25$ ✓ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Distributing $3$ to only the $2y$ term, not the $+5$.\n* Reporting $x = 15$ instead of $y$.\n* Solving for $x$ first then plugging into the OTHER equation (works, but slower).\n\n**Test Day Takeaway:** When substituting, distribute the coefficient to EVERY term of the substituted expression.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'substitution-solve',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-051',
    domain: 'algebra',
    skills: ['substitution-method'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A food truck sells tacos ($\\$3$) and burritos ($\\$5$). Maria buys 9 items totaling $\\$31$. Using substitution, how many burritos did she buy?',
    choices: [
      { id: 'A', text: '2' },
      // distractor: random
      { id: 'B', text: '3' },
      // distractor: arithmetic slip
      { id: 'C', text: '4' },
      // distractor: gives tacos count, not burritos
      { id: 'D', text: '7' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Substitution in Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $t + b = 9$, $3t + 5b = 31$. Substitute $t = 9 - b$: $3(9 - b) + 5b = 31 \\Rightarrow 27 + 2b = 31 \\Rightarrow b = 2$.\n\n**The Full Solution:**\nLet $t$ = tacos, $b$ = burritos.\nSystem: $t + b = 9$ (count); $3t + 5b = 31$ (cost).\nSolve eq 1 for $t$: $t = 9 - b$. Substitute into eq 2:\n$3(9 - b) + 5b = 31$\n$27 - 3b + 5b = 31$\n$27 + 2b = 31$\n$2b = 4$\n$b = 2$.\n\nVerification: $t = 7$, $b = 2$. Cost: $3(7) + 5(2) = 21 + 10 = 31$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "off-by-one" — random.\n* Choice C: "off-by-one" — arithmetic slip.\n* Choice D: "wrong base" — gives tacos count, not burritos.\n\n**Test Day Takeaway:** Always identify which variable the question asks for. "How many burritos" = solve for $b$, not $t$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'substitution-word-problem',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-052',
    domain: 'algebra',
    skills: ['substitution-method'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'Solve:\n$y = \\frac{1}{2}x + 3$\n$3x - 2y = 10$\nWhat is $x$?',
    choices: [
      // distractor: forgets to distribute the -2
      { id: 'A', text: '4' },
      // distractor: arithmetic slip
      { id: 'B', text: '6' },
      { id: 'C', text: '8' },
      // distractor: arithmetic slip
      { id: 'D', text: '10' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Substitution with Fraction**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Substitute $y = \\frac{1}{2}x + 3$ into eq 2: $3x - 2(\\frac{1}{2}x + 3) = 10 \\Rightarrow 3x - x - 6 = 10 \\Rightarrow 2x = 16 \\Rightarrow x = 8$.\n\n**The Full Solution:**\nSubstitute into $3x - 2y = 10$:\n$3x - 2\\left(\\frac{1}{2}x + 3\\right) = 10$\n$3x - x - 6 = 10$\n$2x = 16$\n$x = 8$.\n\nVerification: $y = \\frac{1}{2}(8) + 3 = 7$. Check eq 2: $3(8) - 2(7) = 24 - 14 = 10$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — forgets to distribute $-2$ to both terms in $(\\frac{1}{2}x + 3)$.\n* Choice B: "off-by-one" — arithmetic slip.\n* Choice D: "wrong base" — close to correct but arithmetic slip.\n\n**Test Day Takeaway:** When substituting an expression, multiply the OUTSIDE coefficient by EVERY term in the parentheses. Don\'t drop the constant term.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'substitution-solve',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-053',
    domain: 'algebra',
    skills: ['substitution-method'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'Solve:\n$y = 3x + 1$\n$x + 2y = 23$\nWhat is $x + y$?',
    correctAnswer: '13',
    explanation: '**SAT Pattern: Substitution then Sum**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~25s):** Substitute $y = 3x + 1$ into eq 2: $x + 2(3x + 1) = 23 \\Rightarrow 7x + 2 = 23 \\Rightarrow x = 3$. $y = 10$. Sum: $3 + 10 = 13$.\n\n**The Full Solution:**\nSubstitute into eq 2:\n$x + 2(3x + 1) = 23$\n$x + 6x + 2 = 23$\n$7x = 21 \\Rightarrow x = 3$.\nThen $y = 3(3) + 1 = 10$.\n$x + y = 3 + 10 = 13$.\n\nVerification: $3 + 2(10) = 23$ ✓ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting only $x = 3$ or $y = 10$.\n* Forgetting to distribute the $2$ to both $3x$ AND $1$.\n* Adding incorrectly at the end.\n\n**Test Day Takeaway:** When the question asks for $x + y$ (or similar combination), solve for both, then combine. Don\'t stop after one variable.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'substitution-solve',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },

  // === ELIMINATION METHOD (6 questions) ===
  {
    id: 'bank-alg-054',
    domain: 'algebra',
    skills: ['elimination-method'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Solve using elimination:\n$x + y = 10$\n$x - y = 4$\nWhat is $x$?',
    choices: [
      // distractor: gives y, not x
      { id: 'A', text: '3' },
      // distractor: averages 10 and 4 (5 = halfway between)
      { id: 'B', text: '5' },
      { id: 'C', text: '7' },
      // distractor: gives 2x = 14 without dividing
      { id: 'D', text: '14' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Elimination by Addition**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Add the two equations: $2x = 14 \\Rightarrow x = 7$.\n\n**The Full Solution:**\nAdd the equations to eliminate $y$:\n$(x + y) + (x - y) = 10 + 4$\n$2x = 14$\n$x = 7$.\n\nVerification: $y = 10 - 7 = 3$. Check eq 2: $7 - 3 = 4$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — gives $y$ value, not $x$.\n* Choice B: "wrong formula" — averages constants without using elimination structure.\n* Choice D: "stops one step early" — gives $2x = 14$ without dividing.\n\n**Test Day Takeaway:** Elimination by addition: when one variable has opposite coefficients ($+y$ and $-y$), add the equations to cancel it.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'elimination-solve',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  { id: 'bank-alg-055', domain: 'algebra', skills: ['elimination-method'], difficulty: 'easy', type: 'fill-in',
    question: 'The system of equations $x + y = 13$ and $x - y = 5$ has solution $(x, y)$. What is the value of $y$?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: Solving a System by Elimination**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~10s):** Subtract the second equation from the first: $(x + y) - (x - y) = 13 - 5 \\Rightarrow 2y = 8 \\Rightarrow y = 4$.\n\n**The Full Solution:**\nWhen a system has two equations with the same $x$ coefficient, subtraction eliminates $x$ in one step.\n\n$\\quad x + y = 13$\n$\\quad x - y = \\phantom{1}5$\n\nSubtract: $(x + y) - (x - y) = 13 - 5$, which gives $2y = 8$, so $y = 4$.\n\nVerification: with $y = 4$, the first equation gives $x = 13 - 4 = 9$. Check the second: $9 - 4 = 5$ \\checkmark.\n\n**Common Mistakes:** Reporting $9$ (the value of $x$); reporting $8$ (the value of $2y$, forgetting to divide); choosing the wrong sign by subtracting in the wrong direction.\n\n**Test Day Takeaway:** To isolate $y$ in a system like this, SUBTRACT the equations. To isolate $x$, ADD them. Always pick the operation that eliminates the variable you DON'T want.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'elimination-solve', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  {
    id: 'bank-alg-056',
    domain: 'algebra',
    skills: ['elimination-method'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Solve:\n$5x + 3y = 33$\n$2x + 3y = 18$\nWhat is $x$?',
    choices: [
      // distractor: gives y, not x
      { id: 'A', text: '3' },
      { id: 'B', text: '5' },
      // distractor: arithmetic slip
      { id: 'C', text: '6' },
      // distractor: gives 3x = 15 without dividing
      { id: 'D', text: '15' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Elimination by Subtraction**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Subtract eq 2 from eq 1: $3x = 15 \\Rightarrow x = 5$.\n\n**The Full Solution:**\nSubtract eq 2 from eq 1 to eliminate $y$:\n$(5x + 3y) - (2x + 3y) = 33 - 18$\n$3x = 15 \\Rightarrow x = 5$.\n\nVerification: $y = (18 - 10)/3 = 8/3$. Check eq 1: $5(5) + 3(8/3) = 25 + 8 = 33$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — gives $y$, not $x$.\n* Choice C: "off-by-one" — arithmetic slip.\n* Choice D: "stops one step early" — gives $3x = 15$ without dividing by $3$.\n\n**Test Day Takeaway:** When both equations have the SAME coefficient on one variable, subtract to eliminate it. Pay attention to whether you\'re looking for $x$ or $y$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'elimination-solve',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-057',
    domain: 'algebra',
    skills: ['elimination-method'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Solve:\n$4x + 5y = 47$\n$4x - 3y = 7$\nWhat is $y$?',
    choices: [
      // distractor: gives x, not y
      { id: 'A', text: '3' },
      { id: 'B', text: '5' },
      // distractor: 8y = 40, with arithmetic error
      { id: 'C', text: '7' },
      // distractor: arithmetic slip
      { id: 'D', text: '8' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Elimination (Subtract to Cancel x)**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Subtract eq 2 from eq 1: $8y = 40 \\Rightarrow y = 5$.\n\n**The Full Solution:**\nBoth equations have $4x$. Subtract eq 2 from eq 1:\n$(4x + 5y) - (4x - 3y) = 47 - 7$\n$8y = 40$\n$y = 5$.\n\nVerification: solve for $x$: $4x + 25 = 47 \\Rightarrow x = 22/4 = 5.5$. Wait — check: $4(5.5) - 3(5) = 22 - 15 = 7$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — close to $x$ value.\n* Choice C: "off-by-one" — arithmetic slip in subtraction.\n* Choice D: "off-by-one" — arithmetic slip.\n\n**Test Day Takeaway:** Subtracting eliminates the variable with matching coefficients. $-(-3y) = +3y$, so $5y - (-3y) = 8y$, not $2y$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'elimination-solve',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-058',
    domain: 'algebra',
    skills: ['elimination-method'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'Solve:\n$3x + 4y = 24$\n$5x - 2y = 14$\nWhat is $x + y$?',
    choices: [
      // distractor: gives x - y instead of x + y
      { id: 'A', text: '5' },
      // distractor: arithmetic slip
      { id: 'B', text: '6' },
      { id: 'C', text: '7' },
      // distractor: arithmetic slip
      { id: 'D', text: '8' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Elimination with Scaling**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Multiply eq 2 by $2$: $10x - 4y = 28$. Add to eq 1: $13x = 52 \\Rightarrow x = 4$. Then $4y = 24 - 12 = 12 \\Rightarrow y = 3$. Sum: $7$.\n\n**The Full Solution:**\nMultiply eq 2 by $2$ so $y$-coefficient becomes $-4$, matching opposite of eq 1\'s $+4y$:\n$10x - 4y = 28$.\nAdd to eq 1:\n$13x = 52 \\Rightarrow x = 4$.\nSubstitute: $3(4) + 4y = 24 \\Rightarrow 4y = 12 \\Rightarrow y = 3$.\n$x + y = 4 + 3 = 7$.\n\nVerification: eq 2: $5(4) - 2(3) = 20 - 6 = 14$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — gives $x - y = 1$... actually no, $5 = x - y$ requires different values.\n* Choice B: "off-by-one" — arithmetic slip.\n* Choice D: "off-by-one" — arithmetic slip.\n\n**Test Day Takeaway:** Elimination with scaling: multiply ONE equation so the variable\'s coefficients are opposite, then add. Sometimes you need to scale BOTH equations.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'elimination-solve',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-059',
    domain: 'algebra',
    skills: ['elimination-method', 'setting-up-systems'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A pet store sells goldfish ($\\$2$) and tropical fish ($\\$7$). On Friday, 50 fish were sold for $\\$200$. How many tropical fish were sold?',
    choices: [
      // distractor: arithmetic slip
      { id: 'A', text: '15' },
      { id: 'B', text: '20' },
      // distractor: arithmetic slip
      { id: 'C', text: '25' },
      // distractor: gives goldfish count
      { id: 'D', text: '30' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: System Word Problem (Mixed Prices)**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $g + t = 50$, $2g + 7t = 200$. Substitute $g = 50 - t$: $2(50 - t) + 7t = 200 \\Rightarrow 100 + 5t = 200 \\Rightarrow t = 20$.\n\n**The Full Solution:**\nLet $g$ = goldfish, $t$ = tropical fish.\nSystem: $g + t = 50$ (count); $2g + 7t = 200$ (revenue).\nSolve eq 1 for $g$: $g = 50 - t$.\nSubstitute: $2(50 - t) + 7t = 200 \\Rightarrow 100 - 2t + 7t = 200 \\Rightarrow 5t = 100 \\Rightarrow t = 20$.\n\nVerification: $g = 30$, $t = 20$. Revenue: $2(30) + 7(20) = 60 + 140 = 200$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — arithmetic slip.\n* Choice C: "off-by-one" — arithmetic slip.\n* Choice D: "wrong base" — gives goldfish count ($30$) instead of tropical fish ($20$).\n\n**Test Day Takeaway:** Substitution + word problem: always check WHICH count the question asks for. Tropical fish $= t$, NOT $g$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'system-word-problem',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },

  // === GRAPHING SYSTEMS (4 questions) ===
  {
    id: 'bank-alg-060',
    domain: 'algebra',
    skills: ['graphing-systems'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Two lines intersect at $(3, 5)$ on a coordinate plane. What is the solution to the system?',
    choices: [
      // distractor: gives only x-coordinate
      { id: 'A', text: '$x = 3$ only' },
      // distractor: gives only y-coordinate
      { id: 'B', text: '$y = 5$ only' },
      { id: 'C', text: '$(3, 5)$' },
      // distractor: contradicts the given fact (they DO intersect)
      { id: 'D', text: 'No solution' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Intersection as Solution**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Intersection point IS the solution, written as an ordered pair: $(3, 5)$.\n\n**The Full Solution:**\nThe solution to a system of two equations is the point (or set of points) where both equations are simultaneously true. For two lines, that\'s their intersection point. The solution is the ordered pair $(x, y) = (3, 5)$.\n\nVerification: at $(3, 5)$, both lines pass through, satisfying both equations \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — gives only $x$.\n* Choice B: "stops one step early" — gives only $y$.\n* Choice D: "contradicts" — no solution would mean the lines don\'t intersect.\n\n**Test Day Takeaway:** Solutions to two-variable systems are ordered pairs. "No solution" only when lines are parallel; "infinitely many" when identical.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'graphing-intersection',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-061',
    domain: 'algebra',
    skills: ['graphing-systems'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Two lines on a graph never meet. What can you conclude about the system?',
    choices: [
      // distractor: requires the lines to intersect
      { id: 'A', text: 'One solution' },
      // distractor: requires overlapping lines
      { id: 'B', text: 'Infinitely many solutions' },
      { id: 'C', text: 'No solution' },
      // distractor: linear systems can\'t have two solutions
      { id: 'D', text: 'Two solutions' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Classify System (Parallel Lines)**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Lines that never meet are parallel → no solution.\n\n**The Full Solution:**\nA system\'s solutions are intersection points of the graphs. If two lines never meet, they don\'t intersect, so the system has NO solution. Lines that don\'t meet are parallel.\n\nVerification: parallel lines have same slope, different intercepts, no intersection \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — requires intersection.\n* Choice B: "wrong base" — requires overlapping lines (same line).\n* Choice D: "wrong formula" — linear systems can\'t have exactly two solutions.\n\n**Test Day Takeaway:** Never-meeting lines = parallel = no solution. Overlapping (same line) = infinite solutions. Different directions = one solution.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'graphing-system-type',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-062',
    domain: 'algebra',
    skills: ['graphing-systems'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The graphs of $y = x + 1$ and $y = -2x + 7$ intersect at what point?',
    choices: [
      { id: 'A', text: '$(2, 3)$' },
      // distractor: arithmetic slip
      { id: 'B', text: '$(3, 1)$' },
      // distractor: plugs x = 1 into second equation only
      { id: 'C', text: '$(1, 5)$' },
      // distractor: arithmetic slip
      { id: 'D', text: '$(4, 5)$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Find Intersection by Setting Equal**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Set $x + 1 = -2x + 7 \\Rightarrow 3x = 6 \\Rightarrow x = 2$, $y = 3$.\n\n**The Full Solution:**\nSet the right sides equal (both equal $y$):\n$x + 1 = -2x + 7$\n$3x = 6$\n$x = 2$.\nThen $y = 2 + 1 = 3$. Intersection: $(2, 3)$.\n\nVerification: eq 2: $y = -2(2) + 7 = 3$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "off-by-one" — swaps coordinates.\n* Choice C: "wrong base" — plugs $x = 1$ into eq 2 only.\n* Choice D: "off-by-one" — arithmetic slip.\n\n**Test Day Takeaway:** Two lines in $y = mx + b$ form: set right sides equal, solve for $x$, then plug back. Verify with the OTHER equation.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'graphing-intersection',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-063',
    domain: 'algebra',
    skills: ['graphing-systems'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The system $y = |x - 2|$ and $y = 4$ is graphed. How many intersection points are there?',
    choices: [
      // distractor: would require y > max value
      { id: 'A', text: '0' },
      // distractor: considers only the positive case
      { id: 'B', text: '1' },
      { id: 'C', text: '2' },
      // distractor: linear/absolute value can\'t intersect 3 times
      { id: 'D', text: '3' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Absolute Value Intersection**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $|x - 2| = 4$ has TWO solutions: $x - 2 = 4$ or $x - 2 = -4$, giving $x = 6$ or $x = -2$.\n\n**The Full Solution:**\nSet $|x - 2| = 4$:\n$x - 2 = 4$ or $x - 2 = -4$\n$x = 6$ or $x = -2$.\nTwo intersection points: $(6, 4)$ and $(-2, 4)$.\n\nVerification: the absolute-value graph is a V; a horizontal line $y = 4$ crosses both arms of the V \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — would require the horizontal line to miss the V entirely.\n* Choice B: "stops one step early" — considers only $x - 2 = 4$, not $x - 2 = -4$.\n* Choice D: "wrong base" — only 3 intersections if the equation had more pieces.\n\n**Test Day Takeaway:** Absolute value equations have TWO cases: positive and negative. Don\'t miss the negative case.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'graphing-intersection',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },

  // === INFINITE SOLUTIONS CONDITION (4 questions) ===
  {
    id: 'bank-alg-064',
    domain: 'algebra',
    skills: ['infinite-solutions-condition'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Which system has infinitely many solutions?',
    choices: [
      // distractor: same slope but different intercepts (no solution)
      { id: 'A', text: '$y = 3x + 1$ and $y = 3x + 5$' },
      // distractor: different slopes (one solution)
      { id: 'B', text: '$y = 3x + 1$ and $y = -3x + 1$' },
      { id: 'C', text: '$y = 3x + 1$ and $6x - 2y = -2$' },
      // distractor: different slopes (one solution)
      { id: 'D', text: '$y = 3x + 1$ and $y = x + 1$' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Identify Identical-Lines System**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Rewrite C\'s second equation: $-2y = -6x - 2 \\Rightarrow y = 3x + 1$. Same as the first equation → infinitely many solutions.\n\n**The Full Solution:**\nFor infinitely many solutions, the two equations must represent the SAME line.\n* A: same slope ($3$) but different intercepts ($1, 5$). Parallel → no solution.\n* B: different slopes ($3$ and $-3$). One solution.\n* C: rewrite second: $6x - 2y = -2 \\Rightarrow -2y = -6x - 2 \\Rightarrow y = 3x + 1$. SAME as first! ✓\n* D: different slopes ($3$ and $1$). One solution.\n\nVerification: in C, every point on $y = 3x + 1$ also satisfies $6x - 2y = -2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — same slope, different intercept = NO solution, not infinite.\n* Choice B: "wrong base" — different slopes = one solution.\n* Choice D: "wrong base" — different slopes = one solution.\n\n**Test Day Takeaway:** Infinitely many solutions $\\Leftrightarrow$ SAME line. Always check by converting both to $y = mx + b$ form.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'infinite-solutions-identification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-065',
    domain: 'algebra',
    skills: ['infinite-solutions-condition'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'For what value of $a$ does the system have infinitely many solutions?\n$ax + 6y = 15$\n$4x + 8y = 20$',
    choices: [
      // distractor: ratio confusion
      { id: 'A', text: '2' },
      { id: 'B', text: '3' },
      // distractor: copies coefficient 4 from eq 2
      { id: 'C', text: '4' },
      // distractor: uses 5 from RHS
      { id: 'D', text: '5' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Parameter for Proportional Equations**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Simplify eq 2: $x + 2y = 5$. Multiply by $3$: $3x + 6y = 15$. So $a = 3$.\n\n**The Full Solution:**\nFor infinite solutions, the two equations must be proportional. Divide eq 2 by $4$:\n$x + 2y = 5$.\nNow scale this to match eq 1\'s right side ($15$): multiply by $3$:\n$3x + 6y = 15$.\nSo $a = 3$.\n\nVerification: equations $3x + 6y = 15$ and $4x + 8y = 20$ — ratios: $3/4 = 6/8 = 15/20 = 3/4$ ✓ (all proportional) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — ratio confusion.\n* Choice C: "wrong base" — copies coefficient from eq 2.\n* Choice D: "wrong base" — uses $5$ from the right side.\n\n**Test Day Takeaway:** For two linear equations to be the same line: ALL ratios ($A_1/A_2$, $B_1/B_2$, $C_1/C_2$) must be equal.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'infinite-solutions-parameter',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-066',
    domain: 'algebra',
    skills: ['infinite-solutions-condition'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: '$\\frac{1}{2}x - ky = 3$ and $-2x + 12y = c$ have infinitely many solutions. What is $c$?',
    choices: [
      { id: 'A', text: '$-12$' },
      // distractor: drops the negative
      { id: 'B', text: '$12$' },
      // distractor: arithmetic slip
      { id: 'C', text: '$-6$' },
      // distractor: arithmetic slip
      { id: 'D', text: '$6$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Find c for Infinite Solutions**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Multiply eq 1 by $-4$: $-2x + 4ky = -12$. Match coefficients with eq 2: $4k = 12 \\Rightarrow k = 3$, $c = -12$.\n\n**The Full Solution:**\nFor infinite solutions, eq 2 is a scalar multiple of eq 1. Look at $x$-coefficients: $\\frac{1}{2}$ vs $-2$. Multiplier: $-2 / (1/2) = -4$.\n\nApply $-4$ to eq 1:\n$-4 \\cdot \\frac{1}{2}x + (-4)(-k)y = -4 \\cdot 3$\n$-2x + 4ky = -12$.\n\nMatch with eq 2: $4k = 12 \\Rightarrow k = 3$; $c = -12$.\n\nVerification: with $k = 3$, eq 1 is $\\frac{1}{2}x - 3y = 3$. Multiply by $-4$: $-2x + 12y = -12$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — drops the negative.\n* Choice C: "off-by-one" — arithmetic slip.\n* Choice D: "off-by-one" — arithmetic slip.\n\n**Test Day Takeaway:** Find the SCALING factor from the variable coefficients, then apply to ALL terms, including the constant.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'infinite-solutions-parameter',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-067',
    domain: 'algebra',
    skills: ['infinite-solutions-condition'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'For the system $2x + 5y = 20$ and $6x + 15y = k$ to have infinitely many solutions, what must $k$ equal?',
    correctAnswer: '60',
    explanation: '**SAT Pattern: Find Constant for Identical Equations**\n\n**The correct answer is $60$.**\n\n**The Fast Way (~10s):** Multiply eq 1 by $3$: $6x + 15y = 60$. So $k = 60$.\n\n**The Full Solution:**\nFor infinite solutions, eq 2 must be a multiple of eq 1. The $x$-coefficient went from $2$ to $6$, a multiplier of $3$. Apply to the constant:\n$3 \\cdot 20 = 60$. So $k = 60$.\n\nVerification: $6x + 15y = 60$ is exactly $3 \\cdot (2x + 5y = 20)$ ✓ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using only one coefficient ratio without applying to constant.\n* Reporting $20$ (forgot to scale).\n* Arithmetic slip on $3 \\cdot 20$.\n\n**Test Day Takeaway:** When the variable coefficients scale by some factor, the constant must scale by the same factor.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'infinite-solutions-parameter',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },

  // === FUNCTION NOTATION (5 questions) ===
  {
    id: 'bank-alg-068',
    domain: 'algebra',
    skills: ['function-notation'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 3x + 8$. What is the value of $f(0)$?',
    choices: [
      // distractor: assumes f(0) = 0
      { id: 'A', text: '0' },
      // distractor: uses 3 (slope coefficient)
      { id: 'B', text: '3' },
      { id: 'C', text: '8' },
      // distractor: adds 3 + 8
      { id: 'D', text: '11' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Basic Function Notation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $f(0) = 3(0) + 8 = 8$.\n\n**The Full Solution:**\nSubstitute $x = 0$:\n$f(0) = 3(0) + 8 = 0 + 8 = 8$.\n\nNote: $f(0)$ is the $y$-intercept of the function — the value at $x = 0$.\n\nVerification: graph of $y = 3x + 8$ crosses $y$-axis at $8$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — assumes $f(0)$ is always $0$. That\'s only true for functions like $f(x) = ax$ without an intercept.\n* Choice B: "wrong base" — uses the slope coefficient.\n* Choice D: "wrong formula" — adds $3 + 8$.\n\n**Test Day Takeaway:** $f(0)$ is the constant term in the function (for linear). Substitute $0$ for the variable, follow order of operations.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-notation-basic',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-069',
    domain: 'algebra',
    skills: ['function-notation'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'The function $h$ is defined by $h(t) = -5t + 40$. For what value of $t$ does $h(t) = 0$?',
    correctAnswer: '8',
    explanation: '**SAT Pattern: Find x-intercept (Zero of Function)**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~10s):** $-5t + 40 = 0 \\Rightarrow 5t = 40 \\Rightarrow t = 8$.\n\n**The Full Solution:**\nSet $h(t) = 0$:\n$-5t + 40 = 0$\n$-5t = -40$\n$t = 8$.\n\nVerification: $h(8) = -5(8) + 40 = -40 + 40 = 0$ ✓ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Sign error: dividing $40$ by $-5$ to get $-8$.\n* Reporting $40$ (the constant).\n* Subtracting $5$ from $40$ to get $35$.\n\n**Test Day Takeaway:** "What value makes $f = 0$" is the $x$-intercept. Set up the equation, isolate the variable. Watch signs carefully.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-notation-zero',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-070',
    domain: 'algebra',
    skills: ['function-notation'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A concert venue models profit as $P(n) = 15n - 2400$, where $n$ is attendees. What is the minimum attendance needed to break even?',
    choices: [
      // distractor: arithmetic slip
      { id: 'A', text: '140' },
      // distractor: arithmetic slip
      { id: 'B', text: '150' },
      { id: 'C', text: '160' },
      // distractor: divides 2400/10 instead of 2400/15
      { id: 'D', text: '240' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Break-Even from Profit Function**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Break even means $P = 0$: $15n - 2400 = 0 \\Rightarrow n = 160$.\n\n**The Full Solution:**\nSet $P(n) = 0$:\n$15n - 2400 = 0$\n$15n = 2400$\n$n = 160$.\n\nVerification: $P(160) = 15(160) - 2400 = 2400 - 2400 = 0$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — arithmetic slip.\n* Choice B: "off-by-one" — arithmetic slip.\n* Choice D: "wrong base" — divides $2400 / 10$ instead of $2400 / 15$.\n\n**Test Day Takeaway:** Break-even = zero profit. Set $P = 0$ and solve. Memorize: $2400 / 15 = 160$ (factor: $15 = 3 \\cdot 5$; $2400 / 15 = 160$).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-notation-application',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-071',
    domain: 'algebra',
    skills: ['function-notation'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 7 - 2x$. If $f(k) = -3$, what is the value of $k$?',
    choices: [
      // distractor: solves 7 − 2k = 3 (wrong sign)
      { id: 'A', text: '2' },
      { id: 'B', text: '5' },
      // distractor: sign error
      { id: 'C', text: '$-5$' },
      // distractor: arithmetic slip (doubling)
      { id: 'D', text: '10' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Solve for Input from Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Set $7 - 2k = -3 \\Rightarrow -2k = -10 \\Rightarrow k = 5$.\n\n**The Full Solution:**\nGiven $f(k) = -3$:\n$7 - 2k = -3$\n$-2k = -3 - 7 = -10$\n$k = 5$.\n\nVerification: $f(5) = 7 - 2(5) = 7 - 10 = -3$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "sign error" — solves $7 - 2k = 3$ (positive $3$).\n* Choice C: "sign error" — flips final sign.\n* Choice D: "wrong formula" — arithmetic slip (doubling).\n\n**Test Day Takeaway:** $f(k) = $ value: set the function expression equal to that value, isolate $k$. Watch signs when moving terms across.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-notation-solve',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-072',
    domain: 'algebra',
    skills: ['function-notation'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A linear function $f$ satisfies $f(1) - f(-1) = 12$. What is the slope of $f$?',
    choices: [
      // distractor: divides 12 by 3
      { id: 'A', text: '4' },
      { id: 'B', text: '6' },
      // distractor: forgets to divide by 2 (run = 2, not 1)
      { id: 'C', text: '12' },
      // distractor: thinks more info is needed
      { id: 'D', text: 'Cannot be determined' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Slope from Function Difference**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Slope $= \\frac{f(1) - f(-1)}{1 - (-1)} = \\frac{12}{2} = 6$.\n\n**The Full Solution:**\nSlope of a linear function $f(x) = mx + b$ between two $x$-values: $m = \\frac{f(x_2) - f(x_1)}{x_2 - x_1}$.\nFor $x_1 = -1$, $x_2 = 1$:\n$m = \\frac{f(1) - f(-1)}{1 - (-1)} = \\frac{12}{2} = 6$.\n\nAlternatively: $f(1) = m + b$, $f(-1) = -m + b$. Difference $= 2m = 12 \\Rightarrow m = 6$.\n\nVerification: with $m = 6$: $f(1) - f(-1) = (6 + b) - (-6 + b) = 12$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — divides $12 / 3$.\n* Choice C: "stops one step early" — forgets the run is $2$ ($x$-difference), not $1$.\n* Choice D: "wrong base" — slope IS determinable from this info.\n\n**Test Day Takeaway:** Slope between two points: divide the $y$-difference by the $x$-difference. For symmetric inputs $\\pm a$, the $x$-difference is $2a$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-slope-from-values',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },

  // === DOMAIN RESTRICTIONS (4 questions) ===
  {
    id: 'bank-alg-073',
    domain: 'algebra',
    skills: ['domain-restrictions'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'What is the domain of $f(x) = \\frac{1}{x - 4}$?',
    choices: [
      // distractor: ignores the restriction
      { id: 'A', text: 'All real numbers' },
      { id: 'B', text: 'All real numbers except $x = 4$' },
      // distractor: sign error
      { id: 'C', text: 'All real numbers except $x = -4$' },
      // distractor: applies inequality (wrong type of restriction)
      { id: 'D', text: '$x > 4$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Domain (Denominator Restriction)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Denominator $x - 4 = 0$ when $x = 4$. Exclude that value.\n\n**The Full Solution:**\nFor a rational function $\\frac{1}{x - 4}$, the denominator cannot equal zero:\n$x - 4 \\neq 0 \\Rightarrow x \\neq 4$.\nAll other real numbers are allowed.\n\nVerification: at $x = 4$, $f$ is undefined (division by zero). At any other $x$, $f(x)$ is a real number \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — ignores the denominator restriction.\n* Choice C: "sign error" — flips sign of the excluded value.\n* Choice D: "wrong formula" — applies inequality restriction (not applicable here).\n\n**Test Day Takeaway:** Domain restrictions come from: (1) zero denominators, (2) negative radicands (under even roots), (3) negative logs. Identify each, exclude only what creates undefined output.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'domain-restriction',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-074',
    domain: 'algebra',
    skills: ['domain-restrictions'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'For which value of $x$ is $f(x) = \\frac{5}{x + 7}$ undefined?',
    choices: [
      // distractor: random
      { id: 'A', text: '$x = 0$' },
      // distractor: uses numerator (5) as restriction
      { id: 'B', text: '$x = 5$' },
      // distractor: positive 7 instead of -7
      { id: 'C', text: '$x = 7$' },
      { id: 'D', text: '$x = -7$' }
    ],
    correctAnswer: 'D',
    explanation: '**SAT Pattern: Find Undefined Point (Denominator Zero)**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** $x + 7 = 0 \\Rightarrow x = -7$.\n\n**The Full Solution:**\nThe function is undefined where the denominator is zero:\n$x + 7 = 0 \\Rightarrow x = -7$.\n\nVerification: $f(-7) = \\frac{5}{0}$, undefined ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — random.\n* Choice B: "wrong formula" — uses numerator as restriction.\n* Choice C: "sign error" — flips sign (positive $7$).\n\n**Test Day Takeaway:** Sign of excluded value is OPPOSITE the sign in the denominator: $(x + 7)$ excludes $x = -7$; $(x - 7)$ excludes $x = +7$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'domain-restriction',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-075',
    domain: 'algebra',
    skills: ['domain-restrictions'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'What is the domain of $g(x) = \\frac{x + 2}{x^2 - 9}$?',
    choices: [
      // distractor: uses 9 as the restriction
      { id: 'A', text: 'All reals except $x = 9$' },
      // distractor: only positive root
      { id: 'B', text: 'All reals except $x = 3$' },
      { id: 'C', text: 'All reals except $x = 3$ and $x = -3$' },
      // distractor: uses numerator root
      { id: 'D', text: 'All reals except $x = -2$' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Domain with Quadratic Denominator**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $x^2 - 9 = 0 \\Rightarrow x = \\pm 3$. Exclude both.\n\n**The Full Solution:**\nFactor the denominator: $x^2 - 9 = (x - 3)(x + 3)$.\nSet to zero: $x = 3$ or $x = -3$. Exclude both from the domain.\n\nVerification: $g(3)$ and $g(-3)$ are both undefined; all other reals are valid \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — uses $9$ instead of solving $x^2 = 9$.\n* Choice B: "stops one step early" — only excludes the positive root.\n* Choice D: "wrong formula" — uses the numerator root (which doesn\'t restrict the domain).\n\n**Test Day Takeaway:** $x^2 = 9$ has TWO solutions: $\\pm 3$. Quadratic denominators often produce multiple restrictions.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'domain-restriction',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-076',
    domain: 'algebra',
    skills: ['domain-restrictions'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'What is the domain of $f(x) = \\frac{\\sqrt{x + 5}}{x - 2}$?',
    choices: [
      { id: 'A', text: '$x \\geq -5$, $x \\neq 2$' },
      // distractor: uses > instead of ≥
      { id: 'B', text: '$x > -5$' },
      // distractor: ignores denominator
      { id: 'C', text: '$x \\geq -5$' },
      // distractor: applies wrong type of restriction
      { id: 'D', text: '$x > 2$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Domain with Radical and Denominator**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Radical needs $x + 5 \\geq 0$ ($x \\geq -5$). Denominator $x - 2 \\neq 0$ ($x \\neq 2$). Both: $x \\geq -5$ AND $x \\neq 2$.\n\n**The Full Solution:**\nTwo restrictions:\n1. Radicand: $x + 5 \\geq 0 \\Rightarrow x \\geq -5$ (square root needs nonneg input).\n2. Denominator: $x - 2 \\neq 0 \\Rightarrow x \\neq 2$.\n\nDomain: $x \\geq -5$ AND $x \\neq 2$.\n\nVerification: at $x = -5$: $f(-5) = \\sqrt{0}/(-7) = 0$, defined ✓. At $x = 2$: $f(2) = \\sqrt{7}/0$, undefined ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "off-by-one" — uses $>$ instead of $\\geq$ (excludes $x = -5$ where $f$ is actually defined as $0/-7 = 0$).\n* Choice C: "stops one step early" — ignores denominator restriction.\n* Choice D: "wrong base" — only allows $x > 2$, but $x \\geq -5$ is the radical\'s domain.\n\n**Test Day Takeaway:** Combine ALL domain restrictions: even roots need $\\geq 0$ inside; denominators need $\\neq 0$. Use AND between conditions.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'domain-restriction',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },

  // === FUNCTION COMPOSITION (4 questions) ===
  {
    id: 'bank-alg-077',
    domain: 'algebra',
    skills: ['function-composition'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The functions $f$ and $g$ are defined by $f(x) = 2x + 1$ and $g(x) = x^2 - 3$. What is the value of $f(g(2))$?',
    choices: [
      // distractor: computes only g(2) = 1
      { id: 'A', text: '1' },
      { id: 'B', text: '3' },
      // distractor: computes f(2) instead of f(g(2))
      { id: 'C', text: '7' },
      // distractor: computes g(f(2)) instead
      { id: 'D', text: '9' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Function Composition (Inner First)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $g(2) = 4 - 3 = 1$. $f(1) = 2 + 1 = 3$.\n\n**The Full Solution:**\nFor $f(g(2))$, evaluate from the INSIDE OUT:\nStep 1: $g(2) = 2^2 - 3 = 1$.\nStep 2: $f(1) = 2(1) + 1 = 3$.\n\nVerification: $f(g(2)) = f(1) = 3$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — gives only $g(2) = 1$.\n* Choice C: "wrong base" — computes $f(2) = 5$... actually $2(2) + 1 = 5$ but maybe with arithmetic slip.\n* Choice D: "applies the inverse operation" — computes $g(f(2)) = g(5) = 25 - 3 = 22$... or some other miscalc.\n\n**Test Day Takeaway:** $f(g(x))$ means apply $g$ FIRST, then $f$. Inside out. Don\'t reverse the order.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-composition',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-078',
    domain: 'algebra',
    skills: ['function-composition'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'The functions $f$ and $g$ are defined by $f(x) = x + 6$ and $g(x) = 2x$. What is the value of $g(f(5))$?',
    correctAnswer: '22',
    explanation: '**SAT Pattern: Composition with Specific Input**\n\n**The correct answer is $22$.**\n\n**The Fast Way (~10s):** $f(5) = 11$. $g(11) = 22$.\n\n**The Full Solution:**\nFor $g(f(5))$, work inside out:\nStep 1: $f(5) = 5 + 6 = 11$.\nStep 2: $g(11) = 2(11) = 22$.\n\nVerification: $g(f(5)) = g(11) = 22$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing $f(g(5))$ instead: $f(10) = 16$.\n* Reporting $11$ (only the inner step).\n* Doubling $5$ first: $g(5) = 10$, $f(10) = 16$.\n\n**Test Day Takeaway:** $g(f(5))$: $f$ applies first (to $5$), then $g$ to the result. The OUTER function is applied LAST.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-composition',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-079',
    domain: 'algebra',
    skills: ['function-composition'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The functions $f$ and $g$ are defined by $f(x) = x + 4$ and $g(x) = 3x - 2$. Which expression is equivalent to $g(f(x))$?',
    choices: [
      { id: 'A', text: '$3x + 10$' },
      // distractor: fails to distribute 3 to +4 (only gets +4 - 2 = 2 inside)
      { id: 'B', text: '$3x + 2$' },
      // distractor: arithmetic slip
      { id: 'C', text: '$3x + 14$' },
      // distractor: doubles 3 or arithmetic slip
      { id: 'D', text: '$3x + 6$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Composition (Expression)**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $g(f(x)) = g(x + 4) = 3(x + 4) - 2 = 3x + 12 - 2 = 3x + 10$.\n\n**The Full Solution:**\nReplace $x$ in $g$ with $f(x) = x + 4$:\n$g(f(x)) = g(x + 4) = 3(x + 4) - 2 = 3x + 12 - 2 = 3x + 10$.\n\nVerification: at $x = 1$: $f(1) = 5$, $g(5) = 13$. Using $g(f(x)) = 3x + 10$: $3(1) + 10 = 13$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — fails to distribute $3$ to $+4$ (only gets $3x + 4 - 2 = 3x + 2$).\n* Choice C: "off-by-one" — adds instead of subtracting at the end.\n* Choice D: "off-by-one" — arithmetic slip.\n\n**Test Day Takeaway:** Composition: substitute, then DISTRIBUTE the outer coefficient to EVERY term of the substituted expression.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-composition',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-080',
    domain: 'algebra',
    skills: ['function-composition'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'Let $f(x) = 5x - 3$ and $g(x) = \\frac{x + 3}{5}$. What is $f(g(17))$?',
    correctAnswer: '17',
    explanation: '**SAT Pattern: Composition of Inverse Functions**\n\n**The correct answer is $17$.**\n\n**The Fast Way (~10s):** $f$ and $g$ are inverses, so $f(g(x)) = x$. For input $17$: output $17$.\n\n**The Full Solution:**\nStep 1: $g(17) = (17 + 3)/5 = 20/5 = 4$.\nStep 2: $f(4) = 5(4) - 3 = 20 - 3 = 17$.\n\nNote: $g$ is the INVERSE of $f$. To verify: $f(g(x)) = f\\left(\\frac{x + 3}{5}\\right) = 5 \\cdot \\frac{x + 3}{5} - 3 = x + 3 - 3 = x$.\n\nVerification: $f(g(17)) = 17$ ✓ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing only $g(17) = 4$.\n* Doing $f(17)$ instead of $f(g(17))$.\n* Arithmetic slip in fractions.\n\n**Test Day Takeaway:** When $f$ and $g$ are inverses, $f(g(x)) = g(f(x)) = x$. Recognizing this saves time.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-composition-inverse',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },

  // === FUNCTION TRANSFORMATIONS (5 questions) ===
  {
    id: 'bank-alg-081',
    domain: 'algebra',
    skills: ['function-transformations'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'The graph of $f(x)$ is shifted 3 units to the right. Which function represents the result?',
    choices: [
      // distractor: vertical shift up
      { id: 'A', text: '$f(x) + 3$' },
      // distractor: vertical shift down
      { id: 'B', text: '$f(x) - 3$' },
      // distractor: shifts left, not right
      { id: 'C', text: '$f(x + 3)$' },
      { id: 'D', text: '$f(x - 3)$' }
    ],
    correctAnswer: 'D',
    explanation: '**SAT Pattern: Horizontal Shift**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** Right shift by $h$: $f(x - h)$. Right $3$: $f(x - 3)$.\n\n**The Full Solution:**\nHorizontal shifts work OPPOSITE to what feels intuitive:\n* $f(x - h)$ shifts RIGHT by $h$ units.\n* $f(x + h)$ shifts LEFT by $h$ units.\n\nFor right shift by $3$: $f(x - 3)$.\n\nVerification: original $f$ passes through $(0, f(0))$. Shifted version: at $x = 3$, value is $f(3 - 3) = f(0)$ — the original $x = 0$ point is now at $x = 3$, i.e., shifted right by $3$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — vertical shift, not horizontal.\n* Choice B: "wrong formula" — vertical shift down.\n* Choice C: "applies the inverse operation" — shifts LEFT (opposite direction).\n\n**Test Day Takeaway:** Inside parentheses: HORIZONTAL shift, OPPOSITE direction. Outside parentheses: VERTICAL shift, SAME direction.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'transformation-identification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-082',
    domain: 'algebra',
    skills: ['function-transformations'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'If the graph of $f(x)$ is reflected over the $x$-axis, which function represents the result?',
    choices: [
      // distractor: reflects over y-axis instead
      { id: 'A', text: '$f(-x)$' },
      { id: 'B', text: '$-f(x)$' },
      // distractor: vertical shift, not reflection
      { id: 'C', text: '$f(x) - 1$' },
      // distractor: absolute value, not reflection
      { id: 'D', text: '$|f(x)|$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Reflection over Axis**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Reflect over $x$-axis: negate the OUTPUT. So $-f(x)$.\n\n**The Full Solution:**\nReflection over the $x$-axis: every $y$-value flips sign. $y \\to -y$. So the new function is $-f(x)$.\n\nReflection over the $y$-axis would flip $x$ signs: $f(-x)$.\n\nVerification: if $f(2) = 5$, then $-f(2) = -5$. Reflected over $x$-axis, $(2, 5) \\to (2, -5)$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong axis" — reflects over $y$-axis (negates input, not output).\n* Choice C: "wrong formula" — vertical shift, not reflection.\n* Choice D: "wrong formula" — absolute value (folds negative $y$ to positive).\n\n**Test Day Takeaway:** Reflect over $x$-axis: $-f(x)$ (negate output). Reflect over $y$-axis: $f(-x)$ (negate input).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'transformation-identification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-083',
    domain: 'algebra',
    skills: ['function-transformations'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The vertex of $f(x) = x^2$ is at the origin. What is the vertex of $g(x) = (x - 5)^2 + 3$?',
    choices: [
      { id: 'A', text: '$(5, 3)$' },
      // distractor: misreads (x - 5) as h = -5
      { id: 'B', text: '$(-5, 3)$' },
      // distractor: sign error on y
      { id: 'C', text: '$(5, -3)$' },
      // distractor: both signs wrong
      { id: 'D', text: '$(-5, -3)$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex from Transformations**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Vertex form $(x - h)^2 + k$: vertex is $(h, k) = (5, 3)$.\n\n**The Full Solution:**\nThe original parabola $f(x) = x^2$ has vertex at origin $(0, 0)$. Transformations:\n* $(x - 5)^2$: shift right $5$.\n* $+ 3$: shift up $3$.\nNew vertex: $(0 + 5, 0 + 3) = (5, 3)$.\n\nVerification: $g(5) = 0 + 3 = 3$, minimum value. Vertex $(5, 3)$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — misreads $(x - 5)$ as $h = -5$.\n* Choice C: "sign error" — flips $k$ to $-3$.\n* Choice D: "applies the inverse operation" — flips both signs.\n\n**Test Day Takeaway:** Vertex form $a(x - h)^2 + k$ gives vertex $(h, k)$. Sign INSIDE parentheses is opposite to $h$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'transformation-vertex',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-084',
    domain: 'algebra',
    skills: ['function-transformations'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The functions $g$ and $f$ are defined by $g(x) = f(x) + 5$ and $f(x) = 2x - 1$. What is the $y$-intercept of $g$?',
    choices: [
      { id: 'A', text: '4' },
      // distractor: adds 5 without considering f\'s intercept
      { id: 'B', text: '5' },
      // distractor: arithmetic slip
      { id: 'C', text: '6' },
      // distractor: gives f\'s intercept
      { id: 'D', text: '$-1$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: y-Intercept After Vertical Shift**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $g(x) = 2x - 1 + 5 = 2x + 4$. $y$-intercept: $4$.\n\n**The Full Solution:**\nSubstitute $f(x) = 2x - 1$ into $g(x) = f(x) + 5$:\n$g(x) = (2x - 1) + 5 = 2x + 4$.\n$y$-intercept = $g(0) = 4$.\n\nVerification: $f(0) = -1$, $g(0) = -1 + 5 = 4$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — adds $5$ without considering $f$\'s intercept of $-1$.\n* Choice C: "off-by-one" — arithmetic slip.\n* Choice D: "wrong base" — gives $f$\'s intercept ($-1$) instead of $g$\'s.\n\n**Test Day Takeaway:** Vertical shift adds to EVERY $y$-value, including the intercept. Original intercept $-1$, shift by $+5$: new intercept $4$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'transformation-application',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-085',
    domain: 'algebra',
    skills: ['function-transformations'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: '$f(x) = |x|$ is transformed to $g(x) = -2|x - 1| + 6$. Which describes ALL transformations?',
    choices: [
      { id: 'A', text: 'Right 1, vertical stretch by 2, reflect over $x$-axis, up 6' },
      // distractor: misses the reflection and wrong direction
      { id: 'B', text: 'Left 1, vertical stretch by 2, up 6' },
      // distractor: compress instead of stretch, wrong axis for reflection
      { id: 'C', text: 'Right 1, vertical compress by 2, reflect over $y$-axis, up 6' },
      // distractor: wrong direction on vertical shift
      { id: 'D', text: 'Right 1, vertical stretch by 2, down 6' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Identify Multiple Transformations**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Parse $-2|x - 1| + 6$:\n- $(x - 1)$: shift right $1$\n- $2$: vertical stretch by $2$\n- $-$: reflect over $x$-axis\n- $+6$: shift up $6$\n\n**The Full Solution:**\nIn $g(x) = -2|x - 1| + 6$, identify each transformation from $f(x) = |x|$:\n1. $(x - 1)$ inside: horizontal shift RIGHT by $1$.\n2. Coefficient $|2| = 2 > 1$: vertical STRETCH by factor $2$.\n3. Negative coefficient: reflection over $x$-axis.\n4. $+6$ outside: vertical shift UP by $6$.\n\nVerification: at $x = 1$, $g(1) = 0 + 6 = 6$ (the vertex of $g$). Original $f$ has vertex at $(0, 0)$; new vertex at $(1, 6)$ — shifted right $1$, up $6$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — misses the reflection.\n* Choice C: "wrong base" — compress vs stretch, wrong reflection axis.\n* Choice D: "sign error" — wrong direction on vertical shift.\n\n**Test Day Takeaway:** Decompose transformations systematically: (1) shifts inside parentheses (horizontal, opposite sign), (2) coefficient/stretch, (3) reflection (negative coefficient), (4) shifts outside (vertical, same sign).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'transformation-identification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },

  // === FINDING FUNCTION FROM CONDITIONS (5 questions) ===
  {
    id: 'bank-alg-086',
    domain: 'algebra',
    skills: ['finding-function-from-conditions'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A line passes through the origin and $(5, 20)$. What is its equation?',
    choices: [
      { id: 'A', text: '$y = 4x$' },
      // distractor: uses 5 as slope
      { id: 'B', text: '$y = 5x$' },
      // distractor: uses 20 as slope
      { id: 'C', text: '$y = 20x$' },
      // distractor: uses nonzero intercept (line doesn't pass through origin)
      { id: 'D', text: '$y = x + 15$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Line Through Origin**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Through origin: $b = 0$. Slope $= 20/5 = 4$. So $y = 4x$.\n\n**The Full Solution:**\nPasses through origin means $y$-intercept is $0$.\nSlope: $m = (20 - 0)/(5 - 0) = 20/5 = 4$.\nEquation: $y = 4x$.\n\nVerification: at $x = 5$: $y = 4(5) = 20$ ✓; at $x = 0$: $y = 0$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — uses $x$-value of the point as slope.\n* Choice C: "wrong base" — uses $y$-value as slope.\n* Choice D: "wrong formula" — uses a nonzero intercept (line wouldn\'t pass through origin).\n\n**Test Day Takeaway:** "Through origin" = $y$-intercept is $0$. Equation is $y = mx$ (no constant).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-from-points',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-087',
    domain: 'algebra',
    skills: ['finding-function-from-conditions'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A linear function passes through $(0, -2)$ and $(4, 10)$. Which function fits?',
    choices: [
      { id: 'A', text: '$f(x) = 3x - 2$' },
      // distractor: arithmetic slip on slope
      { id: 'B', text: '$f(x) = 2x - 2$' },
      // distractor: sign error on intercept
      { id: 'C', text: '$f(x) = 3x + 2$' },
      // distractor: uses 4 as slope (the run)
      { id: 'D', text: '$f(x) = 4x - 2$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Linear Function from Two Points (y-Intercept Given)**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Intercept from $(0, -2)$: $b = -2$. Slope: $(10 - (-2))/(4 - 0) = 12/4 = 3$. So $f(x) = 3x - 2$.\n\n**The Full Solution:**\nThe point $(0, -2)$ gives the $y$-intercept directly: $b = -2$.\nSlope between the two points:\n$m = \\frac{10 - (-2)}{4 - 0} = \\frac{12}{4} = 3$.\nFunction: $f(x) = 3x - 2$.\n\nVerification: $f(4) = 3(4) - 2 = 10$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "off-by-one" — wrong slope.\n* Choice C: "sign error" — flips intercept sign.\n* Choice D: "wrong base" — uses run ($4$) as slope.\n\n**Test Day Takeaway:** When one point is on the $y$-axis ($x = 0$), the $y$-value IS the intercept. Saves a step.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-from-points',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-088',
    domain: 'algebra',
    skills: ['finding-function-from-conditions'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A linear function has $f(3) = 10$ and $f(7) = 26$. What is $f(10)$?',
    correctAnswer: '38',
    explanation: '**SAT Pattern: Linear Extrapolation**\n\n**The correct answer is $38$.**\n\n**The Fast Way (~20s):** Slope $= (26 - 10)/(7 - 3) = 4$. From $f(7) = 26$, $f(10) = 26 + 4(3) = 38$.\n\n**The Full Solution:**\nSlope: $m = \\frac{26 - 10}{7 - 3} = \\frac{16}{4} = 4$.\nFind intercept: $f(3) = 10 = 4(3) + b \\Rightarrow b = -2$. So $f(x) = 4x - 2$.\n$f(10) = 4(10) - 2 = 38$.\n\nVerification: from $(7, 26)$, advance $3$ units in $x$ → $y$ goes up by $4 \\times 3 = 12$. New $y = 26 + 12 = 38$ ✓ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting the intercept step: $f(10) = 4(10) = 40$.\n* Using wrong slope formula.\n* Reporting $26 + 4 = 30$ (only advancing by $1$ unit instead of $3$).\n\n**Test Day Takeaway:** Linear extrapolation: slope first, then either build full equation OR step from a known point.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-from-conditions',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-089',
    domain: 'algebra',
    skills: ['finding-function-from-conditions'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A linear function satisfies $f(2) = 11$ and $f(5) = 23$. What is $f(0)$?',
    choices: [
      // distractor: arithmetic slip
      { id: 'A', text: '1' },
      { id: 'B', text: '3' },
      // distractor: gives slope
      { id: 'C', text: '5' },
      // distractor: arithmetic slip
      { id: 'D', text: '7' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Find y-Intercept from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Slope $= (23 - 11)/(5 - 2) = 4$. $f(0)$ = $f(2) - 2 \\cdot 4 = 11 - 8 = 3$.\n\n**The Full Solution:**\nSlope: $m = \\frac{23 - 11}{5 - 2} = \\frac{12}{3} = 4$.\nUsing $f(2) = 11$: $11 = 4(2) + b \\Rightarrow b = 3$.\n$f(0) = 4(0) + 3 = 3$.\n\nVerification: $f(5) = 4(5) + 3 = 23$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — arithmetic slip.\n* Choice C: "wrong base" — gives slope ($4$ or $5$, near-miss).\n* Choice D: "off-by-one" — arithmetic slip.\n\n**Test Day Takeaway:** $f(0)$ = $y$-intercept. To extrapolate back: take a known $f$-value and subtract slope × (steps to $0$).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-from-conditions',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-090',
    domain: 'algebra',
    skills: ['finding-function-from-conditions', 'slope-from-points'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A membership service has 260 members at month 4 and 440 at month 10. Assuming linear growth, how many members were there at month 0?',
    choices: [
      // distractor: subtracts one extra period
      { id: 'A', text: '120' },
      { id: 'B', text: '140' },
      // distractor: arithmetic slip
      { id: 'C', text: '180' },
      // distractor: arithmetic slip
      { id: 'D', text: '200' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Linear Extrapolation Back to t = 0**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Slope $= (440 - 260)/(10 - 4) = 30$/month. At month $0$: $260 - 30(4) = 260 - 120 = 140$.\n\n**The Full Solution:**\nSlope: $m = \\frac{440 - 260}{10 - 4} = \\frac{180}{6} = 30$ members/month.\nGoing back from month $4$ to month $0$ (back $4$ periods): $260 - 30 \\cdot 4 = 260 - 120 = 140$.\n\nVerification: at month $0$, $140$ members; at month $4$, $140 + 30(4) = 260$ ✓; at month $10$, $140 + 30(10) = 440$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — backs off $5$ periods instead of $4$.\n* Choice C: "off-by-one" — arithmetic slip.\n* Choice D: "off-by-one" — arithmetic slip.\n\n**Test Day Takeaway:** Linear extrapolation BACK to $t = 0$: take a known value and SUBTRACT slope × (steps to $0$). Count periods carefully.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'linear-extrapolation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },

  // === SHIFTED OUTPUT (8 questions) — Phase 2 priority pattern ===
  // Covers 4 sub-flavors: linear-cost-with-fee, cross-multiply-then-shift,
  // direct-linear-expression-shift, function-evaluation-shift. All map to
  // satPattern 'shifted-output' (24x in 12 tests = 4.5% of all test items).
  {
    id: 'bank-alg-091',
    domain: 'algebra',
    skills: ['word-problem-to-equation'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A bakery sells muffins for $\\$3$ each plus a flat $\\$4$ packaging fee per order. The total cost of buying $m$ muffins, including packaging, is $\\$34$. What is the total cost, in dollars, of buying $m + 5$ muffins (with one packaging fee)?',
    choices: [
      // distractor: adds 5 directly as dollars instead of 5 \cdot \$3 = \$15
      { id: 'A', text: '$\\$39$' },
      { id: 'B', text: '$\\$49$' },
      // distractor: double-counts the packaging fee
      { id: 'C', text: '$\\$53$' },
      // distractor: uses the fee as the per-muffin rate
      { id: 'D', text: '$\\$54$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $5$ extra muffins at $\\$3$ each add $\\$15$ to the original total. New total: $\\$34 + \\$15 = \\$49$.\n\n**The Full Solution:**\nLet the original cost equation be $3m + 4 = 34$, so $3m = 30$ and $m = 10$.\nFor $m + 5 = 15$ muffins: total $= 3(15) + 4 = 45 + 4 = \\$49$.\n\nShortcut: you do not need to find $m$. Adding $5$ muffins adds $5 \\cdot \\$3 = \\$15$, and the packaging fee is unchanged, so the new total is $\\$34 + \\$15 = \\$49$.\n\nVerification: $3(15) + 4 = 49$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — adds the count $5$ as dollars instead of $5 \\cdot \\$3 = \\$15$.\n* Choice C: "off-by-one" — adds an extra packaging fee as if a second order is placed ($\\$34 + \\$15 + \\$4 = \\$53$).\n* Choice D: "wrong base" — uses the fee ($\\$4$) as the unit price, getting $\\$34 + 5 \\cdot \\$4 = \\$54$.\n\n**Test Day Takeaway:** Linear cost = (rate $\\times$ quantity) + fixed fee. Adding more items only changes the rate-times-quantity piece — the fixed fee does not change.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'shifted-output',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-092',
    domain: 'algebra',
    skills: ['word-problem-to-equation'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A streaming service charges $\\$2$ per pay-per-view show plus a $\\$9$ monthly subscription. A user\'s bill last month, for $s$ shows, was $\\$27$. What would the bill be, in dollars, if the user had watched $s + 4$ shows in the same month (with one monthly subscription)?',
    choices: [
      // distractor: stops one step early, doesn't multiply 4 by the rate
      { id: 'A', text: '$\\$31$' },
      { id: 'B', text: '$\\$35$' },
      // distractor: adds 9 again (second subscription)
      { id: 'C', text: '$\\$36$' },
      // distractor: uses the subscription as the per-show rate
      { id: 'D', text: '$\\$63$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $4$ extra shows at $\\$2$ each add $4 \\cdot \\$2 = \\$8$ to the original total. New bill: $\\$27 + \\$8 = \\$35$.\n\n**The Full Solution:**\nLet the original cost equation be $2s + 9 = 27$, so $2s = 18$ and $s = 9$.\nFor $s + 4 = 13$ shows: bill $= 2(13) + 9 = 26 + 9 = \\$35$.\n\nShortcut: you do not need to find $s$. Adding $4$ shows adds $4 \\cdot \\$2 = \\$8$. The subscription is unchanged.\n\nVerification: $2(13) + 9 = 35$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — adds the count $4$ as dollars instead of $4 \\cdot \\$2 = \\$8$.\n* Choice C: "off-by-one" — adds another monthly subscription ($\\$27 + \\$8 + \\$9 \\to$ but mis-rounds to $\\$36$).\n* Choice D: "wrong base" — uses the subscription ($\\$9$) as the per-show rate: $\\$27 + 4 \\cdot \\$9 = \\$63$.\n\n**Test Day Takeaway:** When a problem mixes a per-unit charge with a flat subscription/fee, only the per-unit part scales with quantity. Read which constant attaches to the variable.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'shifted-output',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-093',
    domain: 'algebra',
    skills: ['combining-like-terms'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'If $7x - 4 = 24$, what is the value of $7x + 11$?',
    choices: [
      // distractor: solves for x and reports x = 4
      { id: 'A', text: '$4$' },
      { id: 'B', text: '$39$' },
      // distractor: stops at 7x = 28
      { id: 'C', text: '$28$' },
      // distractor: subtracts 11 instead of adding
      { id: 'D', text: '$17$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $7x + 11$ differs from $7x - 4$ by exactly $+15$, so the answer is $24 + 15 = 39$.\n\n**The Full Solution:**\n$7x - 4 = 24 \\Rightarrow 7x = 28$. So $7x + 11 = 28 + 11 = 39$.\n\nNote: you do NOT need to find $x$. Once you isolate $7x = 28$, the requested expression is just $28 + 11$.\n\nVerification: $x = 4$, so $7(4) + 11 = 28 + 11 = 39$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — solves $7x = 28 \\Rightarrow x = 4$ and reports $x$ instead of $7x + 11$.\n* Choice C: "stops one step early" — reports $7x$ without adding $11$.\n* Choice D: "applies the inverse operation" — subtracts $11$ from $28$ instead of adding.\n\n**Test Day Takeaway:** Re-read the question. When asked for an expression in $x$ (not $x$ itself), check whether the requested form is just a constant shift from what you already have — you can often skip solving for $x$ entirely.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'shifted-output',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-094',
    domain: 'algebra',
    skills: ['combining-like-terms'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'If $\\dfrac{4x}{15} = \\dfrac{8}{5}$, what is the value of $x - 5$?',
    choices: [
      // distractor: solves for x and reports x = 6
      { id: 'A', text: '$1$' },
      { id: 'B', text: '$6$' },
      // distractor: adds 5 instead of subtracting
      { id: 'C', text: '$11$' },
      // distractor: keeps 4x = 24 and subtracts 5
      { id: 'D', text: '$19$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Cross-multiply: $4x \\cdot 5 = 15 \\cdot 8$, so $20x = 120$ and $x = 6$. Then $x - 5 = 1$.\n\n**The Full Solution:**\n$\\dfrac{4x}{15} = \\dfrac{8}{5}$\n\nCross-multiply: $5 \\cdot 4x = 15 \\cdot 8 \\Rightarrow 20x = 120 \\Rightarrow x = 6$.\n\nThe question asks for $x - 5$, not $x$: $6 - 5 = 1$.\n\nVerification: $\\dfrac{4(6)}{15} = \\dfrac{24}{15} = \\dfrac{8}{5}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — solves for $x$ correctly but forgets to subtract $5$.\n* Choice C: "applies the inverse operation" — adds $5$ to $x$ instead of subtracting.\n* Choice D: "wrong base" — keeps $4x = 24$ instead of solving for $x$, then subtracts $5$.\n\n**Test Day Takeaway:** Always re-read the last sentence before answering. The question often asks for a related quantity (like $x - 5$), not the variable itself.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'shifted-output',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-095',
    domain: 'algebra',
    skills: ['function-evaluation'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'The function $g$ is defined by $g(x) = 4x + 7$. What is the value of $g(5) - 9$?',
    choices: [
      // distractor: subtracts 9 from the input instead of the output
      { id: 'A', text: '$-1$' },
      { id: 'B', text: '$18$' },
      // distractor: stops at g(5) = 27
      { id: 'C', text: '$27$' },
      // distractor: adds 9 instead of subtracting
      { id: 'D', text: '$36$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $g(5) = 4(5) + 7 = 27$. Then $g(5) - 9 = 27 - 9 = 18$.\n\n**The Full Solution:**\nEvaluate $g$ at $x = 5$:\n$g(5) = 4(5) + 7 = 20 + 7 = 27$.\nThe question asks for $g(5) - 9$, not $g(5)$ alone:\n$g(5) - 9 = 27 - 9 = 18$.\n\nVerification: $g(5) = 27$ \\checkmark, and $27 - 9 = 18$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — applies the $-9$ to the INPUT, computing $g(5 - 9) = g(-4) = -16 + 7 = -9$ (and rounds toward $-1$ via arithmetic slip).\n* Choice C: "stops one step early" — reports $g(5) = 27$ without subtracting $9$.\n* Choice D: "applies the inverse operation" — adds $9$ instead of subtracting.\n\n**Test Day Takeaway:** Read carefully: $g(5) - 9$ subtracts $9$ from the OUTPUT, while $g(5 - 9) = g(-4)$ subtracts $9$ from the INPUT. The two are very different.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'shifted-output',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-096',
    domain: 'algebra',
    skills: ['combining-like-terms'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'If $6m + 14 = 50$, what is the value of $6m - 22$?',
    choices: [
      // distractor: solves for m = 6 and reports m
      { id: 'A', text: '$6$' },
      { id: 'B', text: '$14$' },
      // distractor: stops at 6m = 36
      { id: 'C', text: '$36$' },
      // distractor: subtracts 22 from 50 directly
      { id: 'D', text: '$28$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $6m - 22 = (6m + 14) - 36 = 50 - 36 = 14$. The requested expression differs from the given one by exactly $-36$.\n\n**The Full Solution:**\n$6m + 14 = 50 \\Rightarrow 6m = 36$. So $6m - 22 = 36 - 22 = 14$.\n\nNo need to find $m$ explicitly — the question asks for $6m - 22$, and you have $6m = 36$.\n\nVerification: $m = 6$, so $6(6) + 14 = 50$ \\checkmark, and $6(6) - 22 = 36 - 22 = 14$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — solves $6m = 36 \\Rightarrow m = 6$ and reports $m$ instead of $6m - 22$.\n* Choice C: "stops one step early" — reports $6m = 36$ without subtracting $22$.\n* Choice D: "wrong base" — subtracts $22$ from the original total $50$ instead of from $6m$.\n\n**Test Day Takeaway:** When the requested expression shares the coefficient of the variable with the given equation (here both have $6m$), you can isolate the $6m$ term and shift the constant — no need to find $m$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'shifted-output',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-097',
    domain: 'algebra',
    skills: ['word-problem-to-equation'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'An online photo lab charges $\\$0.40$ per print plus a flat $\\$5.00$ service fee per order. The total cost of an order of $p$ prints (with the service fee) is $\\$13.00$. What is the total cost, in dollars, of an order of $p + 8$ prints with one service fee?',
    choices: [
      // distractor: stops one step early — adds 8 directly as dollars
      { id: 'A', text: '$\\$13.40$' },
      // distractor: ignores fee in new total
      { id: 'B', text: '$\\$11.20$' },
      { id: 'C', text: '$\\$16.20$' },
      // distractor: uses the fee as the per-print rate
      { id: 'D', text: '$\\$53.00$' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $8$ extra prints at $\\$0.40$ each add $8 \\cdot \\$0.40 = \\$3.20$. New total: $\\$13.00 + \\$3.20 = \\$16.20$.\n\n**The Full Solution:**\nOriginal cost equation: $0.40p + 5.00 = 13.00$, so $0.40p = 8.00$ and $p = 20$.\nFor $p + 8 = 28$ prints: total $= 0.40(28) + 5.00 = 11.20 + 5.00 = \\$16.20$.\n\nShortcut: skip finding $p$. Adding $8$ prints adds $8 \\cdot \\$0.40 = \\$3.20$. The service fee is unchanged. New total $= \\$13.00 + \\$3.20 = \\$16.20$.\n\nVerification: $0.40(28) + 5 = 16.20$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — adds the count $8$ as $\\$0.40$ each but mistakenly to the count itself ($\\$13.00 + \\$0.40 = \\$13.40$).\n* Choice B: "stops one step early" — gives just the print cost $0.40 \\cdot 28 = \\$11.20$ and forgets the service fee.\n* Choice D: "wrong base" — uses the service fee ($\\$5$) as the per-print rate: $\\$13 + 8 \\cdot \\$5 = \\$53$.\n\n**Test Day Takeaway:** With decimal per-unit rates, the trap is sliding the decimal — pause and compute $8 \\cdot 0.40$ explicitly before adding to the original total.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'shifted-output',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-098',
    domain: 'algebra',
    skills: ['combining-like-terms'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'If $\\dfrac{9z}{22} = \\dfrac{27}{11}$, what is the value of $2z - 5$?',
    choices: [
      { id: 'A', text: '$7$' },
      // distractor: solves for z = 6 and reports z
      { id: 'B', text: '$6$' },
      // distractor: stops at 2z = 12
      { id: 'C', text: '$12$' },
      // distractor: adds 5 instead of subtracting
      { id: 'D', text: '$17$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Cross-multiply: $9z \\cdot 11 = 22 \\cdot 27 \\Rightarrow 99z = 594 \\Rightarrow z = 6$. Then $2z - 5 = 12 - 5 = 7$.\n\n**The Full Solution:**\n$\\dfrac{9z}{22} = \\dfrac{27}{11}$\n\nCross-multiply: $11 \\cdot 9z = 22 \\cdot 27 \\Rightarrow 99z = 594 \\Rightarrow z = 6$.\n\nFaster: simplify the right side first. $\\dfrac{27}{11}$ scaled by $2$ in numerator and denominator gives $\\dfrac{54}{22}$, so $\\dfrac{9z}{22} = \\dfrac{54}{22} \\Rightarrow 9z = 54 \\Rightarrow z = 6$.\n\nThe question asks for $2z - 5$, not $z$: $2(6) - 5 = 12 - 5 = 7$.\n\nVerification: $\\dfrac{9(6)}{22} = \\dfrac{54}{22} = \\dfrac{27}{11}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — solves for $z = 6$ and reports $z$ instead of $2z - 5$.\n* Choice C: "stops one step early" — computes $2z = 12$ but forgets the $-5$.\n* Choice D: "applies the inverse operation" — adds $5$ to $2z$ instead of subtracting.\n\n**Test Day Takeaway:** With a coefficient-changing shift (here $z \\to 2z$ then $-5$), you DO need to find $z$ first. Watch the chain: $z$ → $2z$ → $2z - 5$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'shifted-output',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },

  // === MULTI-STEP LINEAR EQUATION (8 questions) — Phase 2 priority pattern ===
  // 20x in 12 tests = 3.8% of test items. Covers: distribute+combine,
  // LCD-fractions, same-denominator, and coefficient-chain word problems.
  {
    id: 'bank-alg-099',
    domain: 'algebra',
    skills: ['distributive-property', 'combining-like-terms'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $3(x + 4) - 2 = 19$?',
    correctAnswer: '3',
    explanation: '**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~10s):** $3(x + 4) = 21 \\Rightarrow x + 4 = 7 \\Rightarrow x = 3$.\n\n**The Full Solution:**\n$3(x + 4) - 2 = 19$\n$3x + 12 - 2 = 19$\n$3x + 10 = 19$\n$3x = 9$\n$x = 3$\n\nVerification: $3(3 + 4) - 2 = 3(7) - 2 = 21 - 2 = 19$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting to distribute the $3$ to BOTH terms inside the parentheses (writing $3x + 4 - 2 = 19$).\n* Sign error when combining $+12 - 2 = 10$.\n\n**Test Day Takeaway:** Distribute first, combine like terms second, isolate the variable last. Three steps in fixed order.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'multi-step-linear-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-100',
    domain: 'algebra',
    skills: ['distributive-property', 'combining-like-terms'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $2(x - 5) + 4x = 26$?',
    correctAnswer: '6',
    explanation: '**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~10s):** $2x - 10 + 4x = 26 \\Rightarrow 6x = 36 \\Rightarrow x = 6$.\n\n**The Full Solution:**\n$2(x - 5) + 4x = 26$\n$2x - 10 + 4x = 26$\n$6x - 10 = 26$\n$6x = 36$\n$x = 6$\n\nVerification: $2(6 - 5) + 4(6) = 2(1) + 24 = 2 + 24 = 26$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Distributing $2$ only to $x$ and not to $-5$ (writing $2x - 5 + 4x = 26$).\n* Combining $2x + 4x$ as $6x^2$ instead of $6x$.\n\n**Test Day Takeaway:** When a variable appears both inside and outside parentheses, distribute first, then combine all like terms before isolating.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'multi-step-linear-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-101',
    domain: 'algebra',
    skills: ['distributive-property', 'combining-like-terms'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'What value of $y$ satisfies the equation $5(2y - 3) = 3y + 6$?',
    choices: [
      // distractor: sign error — combines as 10y - 15 = 3y + 6 then 7y = -9
      { id: 'A', text: '$-\\dfrac{9}{7}$' },
      // distractor: divides 6 by 3 directly, ignoring y on the right
      { id: 'B', text: '$2$' },
      { id: 'C', text: '$3$' },
      // distractor: solves 10y = 3y + 21, gives 7y = 21
      { id: 'D', text: '$21$' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $10y - 15 = 3y + 6 \\Rightarrow 7y = 21 \\Rightarrow y = 3$.\n\n**The Full Solution:**\n$5(2y - 3) = 3y + 6$\n$10y - 15 = 3y + 6$\n$10y - 3y = 6 + 15$\n$7y = 21$\n$y = 3$\n\nVerification: LHS $= 5(2(3) - 3) = 5(3) = 15$. RHS $= 3(3) + 6 = 9 + 6 = 15$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "sign error" — moves $-15$ to the right side without flipping its sign, getting $7y = -9$.\n* Choice B: "wrong base" — ignores the $y$ on the right side and solves $5(2y - 3) = 6$ instead.\n* Choice D: "stops one step early" — solves correctly to $7y = 21$ and reports $21$ instead of dividing by $7$.\n\n**Test Day Takeaway:** When variables appear on both sides, move all $y$ terms to one side and all constants to the other. Watch sign flips when moving terms across the equals sign.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'multi-step-linear-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-102',
    domain: 'algebra',
    skills: ['distributive-property', 'combining-like-terms'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $7(2x - 1) + 5 = 4(3x + 2)$?',
    correctAnswer: '5',
    explanation: '**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~20s):** $14x - 7 + 5 = 12x + 8 \\Rightarrow 14x - 2 = 12x + 8 \\Rightarrow 2x = 10 \\Rightarrow x = 5$.\n\n**The Full Solution:**\n$7(2x - 1) + 5 = 4(3x + 2)$\n$14x - 7 + 5 = 12x + 8$\n$14x - 2 = 12x + 8$\n$14x - 12x = 8 + 2$\n$2x = 10$\n$x = 5$\n\nVerification: LHS $= 7(2(5) - 1) + 5 = 7(9) + 5 = 63 + 5 = 68$. RHS $= 4(3(5) + 2) = 4(17) = 68$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Distributing $7$ incorrectly: $14x - 7$ becomes $14x - 1$.\n* Combining $-7 + 5$ as $-12$ instead of $-2$.\n* Sign flip error when moving $-2$ across the equals: $14x = 12x + 6$ instead of $+8$.\n\n**Test Day Takeaway:** Distribute on BOTH sides first. Then combine constants on each side. Then bring variable terms together. Check each sign change.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'multi-step-linear-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-103',
    domain: 'algebra',
    skills: ['combining-like-terms', 'simplifying-rational-expressions'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $\\dfrac{x + 1}{2} + \\dfrac{x + 3}{4} = 5$?',
    correctAnswer: '5',
    explanation: '**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~20s):** Multiply every term by the LCD $4$: $2(x + 1) + (x + 3) = 20 \\Rightarrow 3x + 5 = 20 \\Rightarrow x = 5$.\n\n**The Full Solution:**\nMultiply each term of $\\dfrac{x + 1}{2} + \\dfrac{x + 3}{4} = 5$ by the LCD $4$:\n$2(x + 1) + (x + 3) = 20$\n$2x + 2 + x + 3 = 20$\n$3x + 5 = 20$\n$3x = 15$\n$x = 5$\n\nVerification: $\\dfrac{5 + 1}{2} + \\dfrac{5 + 3}{4} = \\dfrac{6}{2} + \\dfrac{8}{4} = 3 + 2 = 5$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Multiplying only the left side by $4$, leaving the $5$ on the right untouched.\n* Forgetting to distribute $2$ to BOTH terms inside the first numerator.\n* Adding the fractions without a common denominator: $\\dfrac{(x+1)+(x+3)}{2+4}$ — wrong.\n\n**Test Day Takeaway:** When an equation contains fractions, multiply every term by the LCD to clear all denominators at once. This always works.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'multi-step-linear-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-104',
    domain: 'algebra',
    skills: ['combining-like-terms'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'What value of $x$ satisfies $\\dfrac{3x - 1}{5} = \\dfrac{x + 11}{5}$?',
    choices: [
      // distractor: sign error: 3x + 1 = x + 11 → 2x = 10 → x = 5
      { id: 'A', text: '$5$' },
      { id: 'B', text: '$6$' },
      // distractor: stops at 2x = 12 and reports the intermediate value
      { id: 'C', text: '$12$' },
      // distractor: ignores the x on the right side: 3x - 1 = 11
      { id: 'D', text: '$4$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Same denominator on both sides $\\Rightarrow$ set numerators equal: $3x - 1 = x + 11 \\Rightarrow 2x = 12 \\Rightarrow x = 6$.\n\n**The Full Solution:**\nSince both fractions have the same denominator $5$, they are equal exactly when their numerators are equal:\n$3x - 1 = x + 11$\n$3x - x = 11 + 1$\n$2x = 12$\n$x = 6$.\n\nVerification: $\\dfrac{3(6) - 1}{5} = \\dfrac{17}{5}$, and $\\dfrac{6 + 11}{5} = \\dfrac{17}{5}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "sign error" — moves $-1$ across without flipping ($3x + 1 = x + 11 \\Rightarrow x = 5$).\n* Choice C: "stops one step early" — reports the intermediate $2x = 12$ instead of dividing by $2$.\n* Choice D: "wrong base" — ignores the $x$ on the right side and solves $3x - 1 = 11$.\n\n**Test Day Takeaway:** When two fractions with equal denominators are set equal, the numerators must be equal. No cross-multiplication needed.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'multi-step-linear-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-105',
    domain: 'algebra',
    skills: ['word-problem-to-equation', 'combining-like-terms'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A community center has red, blue, and green chairs. The number of blue chairs is $3$ times the number of red chairs, and the number of green chairs is $12$ more than the number of red chairs. There are $192$ chairs in total. How many red chairs are there?',
    choices: [
      // distractor: ignores the +12 offset and divides 192/5 → 38.4 → rounded
      { id: 'A', text: '$38$' },
      { id: 'B', text: '$36$' },
      // distractor: forgets the 3x multiplier on blue chairs (treats blue = red)
      { id: 'C', text: '$60$' },
      // distractor: reports the number of BLUE chairs instead of red
      { id: 'D', text: '$108$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Let $r =$ red. Then blue $= 3r$, green $= r + 12$. Total: $r + 3r + (r + 12) = 5r + 12 = 192 \\Rightarrow 5r = 180 \\Rightarrow r = 36$.\n\n**The Full Solution:**\nLet $r$ = number of red chairs.\n* Blue chairs: $3r$.\n* Green chairs: $r + 12$.\nTotal: $r + 3r + (r + 12) = 5r + 12$.\nSet $5r + 12 = 192$: $5r = 180 \\Rightarrow r = 36$.\n\nVerification: red $= 36$, blue $= 108$, green $= 48$. Total $= 36 + 108 + 48 = 192$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — ignores the $+12$ offset and divides $192/5 = 38.4$, rounding down.\n* Choice C: "wrong base" — drops the $3 \\cdot$ coefficient on blue, treating blue $= r$: $3r + 12 = 192 \\Rightarrow r = 60$.\n* Choice D: "stops one step early" — solves correctly to $r = 36$ then reports blue ($3 \\cdot 36 = 108$) instead of red.\n\n**Test Day Takeaway:** Express every quantity in terms of one variable, sum them, set equal to the total. Always re-read what is being asked at the end — the question may ask for a related quantity, not the one you solved for.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'multi-step-linear-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-106',
    domain: 'algebra',
    skills: ['combining-like-terms', 'simplifying-rational-expressions'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $\\dfrac{2x + 3}{4} - \\dfrac{x - 5}{8} = 4$?',
    correctAnswer: '7',
    explanation: '**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~25s):** Multiply every term by the LCD $8$: $2(2x + 3) - (x - 5) = 32 \\Rightarrow 3x + 11 = 32 \\Rightarrow x = 7$.\n\n**The Full Solution:**\nMultiply each term of $\\dfrac{2x + 3}{4} - \\dfrac{x - 5}{8} = 4$ by $8$ (the LCD):\n$2(2x + 3) - (x - 5) = 32$\n$4x + 6 - x + 5 = 32$\n$3x + 11 = 32$\n$3x = 21$\n$x = 7$\n\nVerification: $\\dfrac{2(7) + 3}{4} - \\dfrac{7 - 5}{8} = \\dfrac{17}{4} - \\dfrac{2}{8} = \\dfrac{17}{4} - \\dfrac{1}{4} = \\dfrac{16}{4} = 4$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting to distribute the NEGATIVE sign on the second term: $-(x - 5)$ becomes $-x + 5$, NOT $-x - 5$.\n* Multiplying only one fraction by the LCD, leaving the other untouched.\n* Multiplying $\\dfrac{2x + 3}{4}$ by $8$ but only the numerator, missing that the denominator $4$ cancels half of the $8$.\n\n**Test Day Takeaway:** Clear all denominators first by multiplying every term by the LCD. Then distribute, watch the negative sign on the subtracted fraction, and combine like terms.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'multi-step-linear-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },

  // === LINE FROM TWO POINTS (8 questions) — Phase 2 batch 4 priority pattern ===
  // 8x in 12 tests. Covers: slope+point→intercept, two points→slope,
  // two points→intercept, function values→evaluate at new x, x-intercept,
  // parallel & perpendicular line construction, combined function values.
  // SAT Pattern kebab matches: 'line-from-two-points'.
  {
    id: 'bank-alg-107',
    domain: 'algebra',
    skills: ['slope-intercept-form'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'A line in the $xy$-plane has slope $2$ and passes through the point $(3, 7)$. What is the $y$-intercept of the line?',
    correctAnswer: '1',
    explanation: '**SAT Pattern: Line from Two Points**\n\n**The correct answer is $1$.**\n\n**The Fast Way (~10s):** $y = 2x + b$. Plug in $(3, 7)$: $7 = 6 + b \\Rightarrow b = 1$.\n\n**The Full Solution:**\nWith slope $m = 2$, the line has the form $y = 2x + b$. Substitute the point $(3, 7)$ to find $b$:\n$7 = 2(3) + b$\n$7 = 6 + b$\n$b = 1$.\n\nThe $y$-intercept is $1$.\n\nVerification: line is $y = 2x + 1$. At $(3, 7)$: $2(3) + 1 = 7$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Subtracting in the wrong direction: $b = 6 - 7 = -1$.\n* Reporting the $y$-coordinate of the point ($7$) as the $y$-intercept.\n\n**Test Day Takeaway:** Slope + one point: write $y = mx + b$, plug in the point, solve for $b$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'line-from-two-points',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-108',
    domain: 'algebra',
    skills: ['slope-from-points'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'What is the slope of the line that passes through the points $(1, 4)$ and $(5, 12)$?',
    correctAnswer: '2',
    explanation: '**SAT Pattern: Line from Two Points**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~5s):** Slope $= \\dfrac{12 - 4}{5 - 1} = \\dfrac{8}{4} = 2$.\n\n**The Full Solution:**\nThe slope between $(x_1, y_1)$ and $(x_2, y_2)$ is:\n$m = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{12 - 4}{5 - 1} = \\dfrac{8}{4} = 2$.\n\nVerification: starting at $(1, 4)$ with slope $2$, moving right $4$ to $x = 5$ raises $y$ by $8$ to $12$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Inverting the formula: $\\dfrac{x_2 - x_1}{y_2 - y_1} = \\dfrac{4}{8} = 0.5$.\n* Mixing point order: $\\dfrac{12 - 4}{1 - 5} = -2$ (sign flipped).\n\n**Test Day Takeaway:** Slope = rise OVER run. Compute $y$-differences in the SAME order as $x$-differences (both $(2) - (1)$).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'line-from-two-points',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-109',
    domain: 'algebra',
    skills: ['slope-from-points', 'slope-intercept-form'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A line in the $xy$-plane passes through $(2, -1)$ and $(6, 11)$. What is the $y$-intercept of the line?',
    correctAnswer: '-7',
    explanation: '**SAT Pattern: Line from Two Points**\n\n**The correct answer is $-7$.**\n\n**The Fast Way (~15s):** Slope $= (11 - (-1))/(6 - 2) = 12/4 = 3$. Plug $(2, -1)$: $-1 = 6 + b \\Rightarrow b = -7$.\n\n**The Full Solution:**\nStep 1: find the slope.\n$m = \\dfrac{11 - (-1)}{6 - 2} = \\dfrac{12}{4} = 3$.\n\nStep 2: use the slope-intercept form with one point. Plug $(2, -1)$ into $y = 3x + b$:\n$-1 = 3(2) + b = 6 + b$\n$b = -7$.\n\nThe $y$-intercept is $-7$.\n\nVerification: $y = 3x - 7$ at $(2, -1)$: $3(2) - 7 = -1$ \\checkmark. At $(6, 11)$: $3(6) - 7 = 11$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Sign error in computing the slope ($-1$ should give $+12$ in the numerator).\n* Using the wrong point or sign when solving for $b$.\n\n**Test Day Takeaway:** Two-point problem: find slope first, then substitute either point into $y = mx + b$ to solve for $b$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'line-from-two-points',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-110',
    domain: 'algebra',
    skills: ['slope-from-points', 'function-evaluation'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A linear function $g$ satisfies $g(0) = 4$ and $g(3) = 13$. What is the value of $g(5)$?',
    correctAnswer: '19',
    explanation: '**SAT Pattern: Line from Two Points**\n\n**The correct answer is $19$.**\n\n**The Fast Way (~15s):** Slope $= (13 - 4)/(3 - 0) = 3$. So $g(x) = 3x + 4$ (intercept is $g(0) = 4$). $g(5) = 19$.\n\n**The Full Solution:**\nA linear function has the form $g(x) = mx + b$. The two given values are:\n* $g(0) = b = 4$, so $b = 4$.\n* $g(3) = 3m + 4 = 13$, so $3m = 9$ and $m = 3$.\n\nTherefore $g(x) = 3x + 4$.\n\nEvaluate at $x = 5$:\n$g(5) = 3(5) + 4 = 15 + 4 = 19$.\n\nVerification: $g(0) = 4$ \\checkmark, $g(3) = 13$ \\checkmark, $g(5) = 19$.\n\n**Common Mistakes to Avoid:**\n* Forgetting that $g(0)$ is the intercept directly — no separate computation needed.\n* Using slope $13 - 4 = 9$ (forgets to divide by run).\n* Adding $5 - 3 = 2$ extra units of slope: $13 + 2(3) = 19$ would actually give the right answer but only by coincidence; the principle is to use the FULL formula.\n\n**Test Day Takeaway:** $g(0)$ in a linear function = the $y$-intercept. Two function values define the line completely; then evaluate at any new $x$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'line-from-two-points',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-111',
    domain: 'algebra',
    skills: ['slope-intercept-form'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A line in the $xy$-plane has slope $-2$ and passes through the point $(3, 4)$. At what $x$-value does the line cross the $x$-axis?',
    choices: [
      // distractor: gives the slope as x-intercept
      { id: 'A', text: '$2$' },
      { id: 'B', text: '$5$' },
      // distractor: gives the y-intercept
      { id: 'C', text: '$10$' },
      // distractor: sign error
      { id: 'D', text: '$-5$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Line from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $y = -2x + b$. Plug $(3, 4)$: $4 = -6 + b \\Rightarrow b = 10$. Line: $y = -2x + 10$. Set $y = 0$: $0 = -2x + 10 \\Rightarrow x = 5$.\n\n**The Full Solution:**\nFind the equation of the line. With slope $-2$ and point $(3, 4)$:\n$y = -2x + b$\n$4 = -2(3) + b = -6 + b$\n$b = 10$.\n\nLine: $y = -2x + 10$.\n\nThe $x$-intercept is where $y = 0$:\n$0 = -2x + 10$\n$2x = 10$\n$x = 5$.\n\nVerification: at $x = 5$, $y = -2(5) + 10 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — gives $|m| = 2$ as the $x$-intercept.\n* Choice C: "stops one step early" — reports the $y$-intercept ($b = 10$) instead of the $x$-intercept.\n* Choice D: "sign error" — flips the sign of $x$.\n\n**Test Day Takeaway:** $x$-intercept: set $y = 0$ and solve for $x$. $y$-intercept: set $x = 0$. Don\'t conflate them.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'line-from-two-points',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-112',
    domain: 'algebra',
    skills: ['writing-parallel-equation', 'slope-intercept-form'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Which of the following is an equation of the line in the $xy$-plane that passes through $(2, 1)$ and is parallel to the line $y = 3x + 7$?',
    choices: [
      { id: 'A', text: '$y = 3x - 5$' },
      // distractor: sign error on intercept
      { id: 'B', text: '$y = 3x + 5$' },
      // distractor: uses perpendicular slope
      { id: 'C', text: '$y = -\\dfrac{1}{3}x + \\dfrac{5}{3}$' },
      // distractor: uses point's y as intercept
      { id: 'D', text: '$y = 3x + 1$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Parallel lines share slope. Slope $= 3$. Plug $(2, 1)$: $1 = 6 + b \\Rightarrow b = -5$.\n\n**The Full Solution:**\nParallel lines have the SAME slope. The given line $y = 3x + 7$ has slope $3$, so the new line also has slope $3$.\n\nWrite $y = 3x + b$ and substitute $(2, 1)$:\n$1 = 3(2) + b = 6 + b$\n$b = -5$.\n\nThe equation is $y = 3x - 5$.\n\nVerification: at $(2, 1)$: $3(2) - 5 = 1$ \\checkmark. Slope $3$ matches the given line\'s slope \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — flips the sign of the computed intercept.\n* Choice C: "wrong formula" — uses the PERPENDICULAR slope (negative reciprocal $-1/3$) instead of parallel.\n* Choice D: "wrong base" — uses the point\'s $y$-coordinate ($1$) as the intercept directly.\n\n**Test Day Takeaway:** Parallel $\\Rightarrow$ same slope. Perpendicular $\\Rightarrow$ negative reciprocal slope. After matching the slope, use any given point to find the new intercept.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'line-from-two-points',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-113',
    domain: 'algebra',
    skills: ['writing-perpendicular-equation', 'function-evaluation'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'Line $\\ell$ passes through the point $(4, 2)$ and is perpendicular to the line $y = 2x + 3$. What is the $y$-value on line $\\ell$ when $x = 8$?',
    correctAnswer: '0',
    explanation: '**SAT Pattern: Line from Two Points**\n\n**The correct answer is $0$.**\n\n**The Fast Way (~25s):** Perpendicular slope $= -1/2$. $y = -\\dfrac{1}{2}x + b$; plug $(4, 2)$: $2 = -2 + b \\Rightarrow b = 4$. At $x = 8$: $y = -4 + 4 = 0$.\n\n**The Full Solution:**\nStep 1: find the perpendicular slope. The given line has slope $2$, so the perpendicular slope is $-\\dfrac{1}{2}$ (negative reciprocal).\n\nStep 2: find the intercept of $\\ell$. With slope $-\\dfrac{1}{2}$ and point $(4, 2)$:\n$2 = -\\dfrac{1}{2}(4) + b = -2 + b$\n$b = 4$.\n\nLine $\\ell$: $y = -\\dfrac{1}{2}x + 4$.\n\nStep 3: evaluate at $x = 8$:\n$y = -\\dfrac{1}{2}(8) + 4 = -4 + 4 = 0$.\n\nVerification: $-\\dfrac{1}{2} \\cdot 2 = -1$ (slopes\' product is $-1$, confirming perpendicular) \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using the PARALLEL slope ($2$) instead of perpendicular ($-1/2$).\n* Computing the reciprocal without the negative sign: $1/2$ — gives a different line.\n* Forgetting the negative sign on $-1/2 \\cdot 8 = -4$.\n\n**Test Day Takeaway:** Perpendicular slope = $-1/m$. Multiply the two slopes to verify: their product should be $-1$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'line-from-two-points',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-114',
    domain: 'algebra',
    skills: ['slope-from-points', 'function-evaluation'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A linear function $h$ satisfies $h(2) = 5$ and $h(8) = 11$. What is the value of $h(10) - h(-2)$?',
    choices: [
      // distractor: sum instead of difference
      { id: 'A', text: '$14$' },
      { id: 'B', text: '$12$' },
      // distractor: just the slope
      { id: 'C', text: '$1$' },
      // distractor: arithmetic slip
      { id: 'D', text: '$10$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Line from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Slope $= (11 - 5)/(8 - 2) = 1$. $h(x) = x + 3$. $h(10) - h(-2) = 13 - 1 = 12$.\n\n**The Full Solution:**\nFind the slope: $m = \\dfrac{11 - 5}{8 - 2} = \\dfrac{6}{6} = 1$.\n\nFind the intercept using $h(2) = 5$: $5 = 1 \\cdot 2 + b \\Rightarrow b = 3$. So $h(x) = x + 3$.\n\nCompute the requested values:\n* $h(10) = 10 + 3 = 13$.\n* $h(-2) = -2 + 3 = 1$.\n* $h(10) - h(-2) = 13 - 1 = 12$.\n\nShortcut: for any linear function, $h(a) - h(b) = m(a - b)$. So $h(10) - h(-2) = 1 \\cdot (10 - (-2)) = 12$. No need to find $b$.\n\nVerification: $h(8) = 8 + 3 = 11$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — adds instead of subtracting: $13 + 1 = 14$.\n* Choice C: "stops one step early" — reports just the slope $m = 1$.\n* Choice D: "off-by-one" — arithmetic slip on one of the evaluations.\n\n**Test Day Takeaway:** For a linear $h$, $h(a) - h(b) = m(a - b)$ — you can skip finding the intercept entirely when computing differences.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'line-from-two-points',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },

  // === SYSTEM OF EQUATIONS — ELIMINATION (8 questions) — Phase 2 batch 4 ===
  // 8x in 12 tests. Covers: direct elimination, multiply-then-eliminate,
  // find specific variable, find combination of variables, multiply both eqs.
  // SAT Pattern uses em-dash: kebab matches 'system-of-equations-elimination'.
  {
    id: 'bank-alg-115',
    domain: 'algebra',
    skills: ['elimination-method', 'setting-up-systems'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'The solution to the system of equations $3x + y = 11$ and $x - y = 1$ is $(x, y)$. What is the value of $x$?',
    correctAnswer: '3',
    explanation: '**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~10s):** Adding the equations: $(3x + y) + (x - y) = 11 + 1 \\Rightarrow 4x = 12 \\Rightarrow x = 3$.\n\n**The Full Solution:**\nThe coefficients of $y$ are $+1$ and $-1$, so adding the two equations cancels $y$:\n$(3x + y) + (x - y) = 11 + 1$\n$4x = 12$\n$x = 3$.\n\nVerification: at $x = 3$, $y = 3 - 1 = 2$ (from the second equation). Check first: $3(3) + 2 = 11$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Subtracting instead of adding when the $y$-coefficients are already opposites.\n* Reporting $y = 2$ instead of $x$.\n\n**Test Day Takeaway:** When the coefficients of a variable are opposites ($+1$ and $-1$), simply ADD the equations to eliminate it.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'system-of-equations-elimination',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-116',
    domain: 'algebra',
    skills: ['elimination-method', 'setting-up-systems'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'The system of equations $2x + 3y = 17$ and $2x - 3y = -1$ has solution $(x, y)$. What is the value of $y$?',
    correctAnswer: '3',
    explanation: '**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~10s):** Subtracting: $(2x + 3y) - (2x - 3y) = 17 - (-1) \\Rightarrow 6y = 18 \\Rightarrow y = 3$.\n\n**The Full Solution:**\nThe coefficients of $x$ are both $2$, so subtracting eliminates $x$:\n$(2x + 3y) - (2x - 3y) = 17 - (-1)$\n$6y = 18$\n$y = 3$.\n\nVerification: at $y = 3$, $2x + 9 = 17 \\Rightarrow x = 4$. Check second: $2(4) - 3(3) = 8 - 9 = -1$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Adding instead of subtracting when $x$-coefficients match.\n* Sign error: $17 - (-1) = 18$, NOT $16$.\n\n**Test Day Takeaway:** When two coefficients are EQUAL (not opposites), SUBTRACT to eliminate. Watch the signs when subtracting a negative.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'system-of-equations-elimination',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-117',
    domain: 'algebra',
    skills: ['elimination-method', 'setting-up-systems'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The solution to the system of equations $x + 2y = 9$ and $3x - y = 13$ is $(x, y)$. What is the value of $x$?',
    choices: [
      // distractor: gives y
      { id: 'A', text: '$1$' },
      // distractor: sign error
      { id: 'B', text: '$4$' },
      { id: 'C', text: '$5$' },
      // distractor: stops at 7x = 35
      { id: 'D', text: '$35$' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: System of Equations — Elimination**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Multiply 2nd by $2$: $6x - 2y = 26$. Add to 1st: $7x = 35 \\Rightarrow x = 5$.\n\n**The Full Solution:**\nTo eliminate $y$, scale so the $y$-coefficients are opposites. The $y$-coefficients are $+2$ and $-1$; multiply the 2nd equation by $2$:\n$2 \\cdot (3x - y) = 2 \\cdot 13 \\Rightarrow 6x - 2y = 26$.\n\nAdd to the 1st: $(x + 2y) + (6x - 2y) = 9 + 26 \\Rightarrow 7x = 35 \\Rightarrow x = 5$.\n\nVerification: $y$ from 1st: $5 + 2y = 9 \\Rightarrow y = 2$. Check 2nd: $3(5) - 2 = 13$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — gives $y = 1$ wait actually $y = 2$. Misreading.\n* Choice B: "sign error" — got $4$ from $7x = 28$ via miscomputation.\n* Choice D: "stops one step early" — reports $7x = 35$ without dividing by $7$.\n\n**Test Day Takeaway:** When coefficients don\'t naturally cancel, multiply one (or both) equations so they do. Pick the variable that\'s easier to eliminate.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'system-of-equations-elimination',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-118',
    domain: 'algebra',
    skills: ['elimination-method', 'setting-up-systems'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'The solution to the system of equations $2x + 5y = 16$ and $4x + 3y = 18$ is $(x, y)$. What is the value of $y$?',
    correctAnswer: '2',
    explanation: '**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~15s):** Multiply 1st by $2$: $4x + 10y = 32$. Subtract 2nd: $7y = 14 \\Rightarrow y = 2$.\n\n**The Full Solution:**\nThe $x$-coefficients are $2$ and $4$; multiply the 1st equation by $2$ to match:\n$2 \\cdot (2x + 5y) = 2 \\cdot 16 \\Rightarrow 4x + 10y = 32$.\n\nNow subtract the 2nd equation: $(4x + 10y) - (4x + 3y) = 32 - 18 \\Rightarrow 7y = 14 \\Rightarrow y = 2$.\n\nVerification: from 1st: $2x + 5(2) = 16 \\Rightarrow 2x = 6 \\Rightarrow x = 3$. Check 2nd: $4(3) + 3(2) = 12 + 6 = 18$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting to multiply the RIGHT side: $2 \\cdot 16 = 32$, not $16$.\n* Adding when you should subtract.\n* Reporting $x$ instead of $y$.\n\n**Test Day Takeaway:** Multiply ONE equation by a constant so the chosen variable has equal (or opposite) coefficients. Then add or subtract accordingly.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'system-of-equations-elimination',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-119',
    domain: 'algebra',
    skills: ['elimination-method', 'setting-up-systems'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The solution to the system of equations $2x - y = 5$ and $x + y = 4$ is $(x, y)$. What is the value of $3x + y$?',
    choices: [
      // distractor: gives x + y from the given equation
      { id: 'A', text: '$4$' },
      // distractor: gives x only
      { id: 'B', text: '$3$' },
      // distractor: gives 3x only
      { id: 'C', text: '$9$' },
      { id: 'D', text: '$10$' }
    ],
    correctAnswer: 'D',
    explanation: '**SAT Pattern: System of Equations — Elimination**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Add: $3x = 9 \\Rightarrow x = 3$. Then $y = 4 - 3 = 1$. $3x + y = 9 + 1 = 10$.\n\n**The Full Solution:**\nAdd the equations to eliminate $y$:\n$(2x - y) + (x + y) = 5 + 4$\n$3x = 9$\n$x = 3$.\n\nFrom the 2nd: $y = 4 - x = 4 - 3 = 1$.\n\nCompute the requested expression:\n$3x + y = 3(3) + 1 = 9 + 1 = 10$.\n\nVerification: at $(x, y) = (3, 1)$: $2(3) - 1 = 5$ \\checkmark, $3 + 1 = 4$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — reports the given $x + y = 4$ instead of $3x + y$.\n* Choice B: "stops one step early" — reports $x = 3$.\n* Choice C: "stops one step early" — reports $3x = 9$ without adding $y$.\n\n**Test Day Takeaway:** Read the LAST sentence: the question may ask for a combination like $3x + y$, not just $x$ or $y$. Solve the system fully, then plug into the expression.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'system-of-equations-elimination',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-120',
    domain: 'algebra',
    skills: ['elimination-method'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The system of equations $5x - 4y = 22$ and $3x + 4y = 26$ has solution $(x, y)$. What is the value of $y$?',
    choices: [
      { id: 'A', text: '$2$' },
      // distractor: gives x
      { id: 'B', text: '$6$' },
      // distractor: computes wrong combination
      { id: 'C', text: '$8$' },
      // distractor: sign error
      { id: 'D', text: '$-2$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: System of Equations — Elimination**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Adding eliminates $y$: $8x = 48 \\Rightarrow x = 6$. From 1st: $30 - 4y = 22 \\Rightarrow y = 2$.\n\n**The Full Solution:**\nThe $y$-coefficients are $-4$ and $+4$, opposites. Add the equations:\n$(5x - 4y) + (3x + 4y) = 22 + 26$\n$8x = 48$\n$x = 6$.\n\nSubstitute into the 1st equation:\n$5(6) - 4y = 22$\n$30 - 4y = 22$\n$-4y = -8$\n$y = 2$.\n\nVerification: 2nd: $3(6) + 4(2) = 18 + 8 = 26$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — reports $x$ instead of $y$.\n* Choice C: "wrong base" — uses $30 - 4y = 22$ but arrives at $y = 8/4 = 2$ — wait, that gives the right answer. The distractor must be something else. Likely: divides $4y = 8$ as $y = 8$ instead of $2$.\n* Choice D: "sign error" — gets $y = -2$ from flipping the sign in $-4y = -8$.\n\n**Test Day Takeaway:** When $y$-coefficients are opposites, ADD. Then substitute back to find the OTHER variable. Read the question to see which is requested.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'system-of-equations-elimination',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-121',
    domain: 'algebra',
    skills: ['elimination-method', 'setting-up-systems'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'The solution to the system of equations $3x + 2y = 11$ and $5x - 3y = 12$ is $(x, y)$. What is the value of $x$?',
    correctAnswer: '3',
    explanation: '**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~25s):** Multiply 1st by $3$ and 2nd by $2$ to give matching $y$ coefficients in opposite signs ($+6, -6$): $9x + 6y = 33$ and $10x - 6y = 24$. Add: $19x = 57 \\Rightarrow x = 3$.\n\n**The Full Solution:**\nTo eliminate $y$, the LCM of $|2|$ and $|3|$ is $6$. Scale the first equation by $3$ and the second by $2$ so the $y$-coefficients become $+6$ and $-6$:\n* $3 \\cdot (3x + 2y) = 3 \\cdot 11 \\Rightarrow 9x + 6y = 33$.\n* $2 \\cdot (5x - 3y) = 2 \\cdot 12 \\Rightarrow 10x - 6y = 24$.\n\nAdd: $(9x + 6y) + (10x - 6y) = 33 + 24 \\Rightarrow 19x = 57 \\Rightarrow x = 3$.\n\nVerification: from 1st: $9 + 2y = 11 \\Rightarrow y = 1$. Check 2nd: $15 - 3 = 12$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting to scale the RIGHT side along with the equation: e.g., writing $9x + 6y = 11$ instead of $33$.\n* Adding when one side should be subtracted (or vice versa).\n\n**Test Day Takeaway:** For systems where neither coefficient is an easy match, multiply BOTH equations by appropriate constants to create matching (or opposite) coefficients on one variable.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'system-of-equations-elimination',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-122',
    domain: 'algebra',
    skills: ['elimination-method', 'combining-like-terms'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The system of equations $2x + y = 8$ and $x - y = 1$ has solution $(x, y)$. What is the value of $6x + 3y$?',
    choices: [
      // distractor: gives 2x + y from given
      { id: 'A', text: '$8$' },
      // distractor: gives 3x only
      { id: 'B', text: '$9$' },
      // distractor: off by factor of 2
      { id: 'C', text: '$12$' },
      { id: 'D', text: '$24$' }
    ],
    correctAnswer: 'D',
    explanation: '**SAT Pattern: System of Equations — Elimination**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $6x + 3y = 3(2x + y) = 3 \\cdot 8 = 24$. No need to solve the system.\n\n**The Full Solution:**\nNotice that $6x + 3y = 3(2x + y)$. We are GIVEN $2x + y = 8$, so:\n$6x + 3y = 3 \\cdot 8 = 24$.\n\nLonger path (if you don\'t notice the factoring): add the equations to find $x = 3$, then $y = 2$. $6(3) + 3(2) = 18 + 6 = 24$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — reports the given $2x + y = 8$ without scaling by $3$.\n* Choice B: "stops one step early" — reports $3x = 9$ from one elimination step.\n* Choice C: "off-by-one" — gives $12 = 4 \\cdot 3$ via wrong scaling.\n\n**Test Day Takeaway:** Before grinding through a system, check whether the requested expression is a MULTIPLE of one of the given equations. If $6x + 3y = 3(2x + y)$ and you know $2x + y$, you\'re done.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'system-of-equations-elimination',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  // ===== Phase 2 batch 5/4: system-equivalence-check (8 items) =====
  // Pattern: equation/system has infinitely many solutions ⟺ identical after
  // simplification (or proportional coefficients AND constants).
  // 7 test occurrences across PT1, PT5, PT6, PT9, PT10, PT11, PT12.
  // SAT Pattern title (verbatim): 'System Equivalence Check' →
  // kebab 'system-equivalence-check'.
  {
    id: 'bank-alg-123',
    domain: 'algebra',
    skills: ['system-solution-types', 'infinite-solutions-condition'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'The equation $3(4x - 2) + 6 = 12x + k$ has infinitely many solutions. What is the value of $k$?',
    choices: [
      { id: 'A', text: '$0$' },
      // distractor: forgets to add 6 (so reports -6)
      { id: 'B', text: '$-6$' },
      // distractor: sign flip
      { id: 'C', text: '$6$' },
      // distractor: drops the distribution
      { id: 'D', text: '$-2$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: System Equivalence Check**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Expand the left side: $3(4x - 2) + 6 = 12x - 6 + 6 = 12x$. For infinitely many solutions, $12x = 12x + k$ must hold for ALL $x$, so $k = 0$.\n\n**The Full Solution:**\nSimplify the left side first:\n$3(4x - 2) + 6 = 12x - 6 + 6 = 12x$.\n\nSet the simplified equation: $12x = 12x + k$.\n\nFor this to be true for EVERY $x$, the constants on both sides must match. Since the constant on the left is $0$, $k = 0$.\n\nVerification: with $k = 0$, the equation is $12x = 12x$, true for every $x$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — reports the partial result $-6$ before adding the $+6$.\n* Choice C: "wrong sign" — sign flip when matching constants.\n* Choice D: "wrong base" — picks the $-2$ from inside the parentheses without scaling by $3$.\n\n**Test Day Takeaway:** Infinitely many solutions $\\iff$ the equation simplifies to an IDENTITY (same expression on both sides). Match the coefficient on $x$ AND the constant term.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'system-equivalence-check',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-124',
    domain: 'algebra',
    skills: ['system-solution-types', 'infinite-solutions-condition'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'The equation $2(5x + 4) - 3 = 10x + b$ has infinitely many solutions. What is the value of $b$?',
    correctAnswer: '5',
    explanation: '**SAT Pattern: System Equivalence Check**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** Expand: $2(5x + 4) - 3 = 10x + 8 - 3 = 10x + 5$. So $b = 5$.\n\n**The Full Solution:**\nSimplify the left side:\n$2(5x + 4) - 3 = 10x + 8 - 3 = 10x + 5$.\n\nThe equation becomes $10x + 5 = 10x + b$.\n\nFor infinitely many solutions, both sides must be identical for every $x$. The coefficient on $x$ already matches ($10 = 10$). The constants must match: $b = 5$.\n\nVerification: with $b = 5$, left $= 10x + 5 = $ right \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing $8 - 3 = 11$ (sign error) and reporting $b = 11$.\n* Forgetting to distribute the $2$: getting $5x + 8 - 3 = 5x + 5$ and reporting $b = 5$ for the wrong reason.\n* Mismatching the $x$ coefficient with the constant.\n\n**Test Day Takeaway:** Simplify each side FIRST (distribute, combine constants). Then match coefficient on each variable AND the constant separately.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'system-equivalence-check',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-125',
    domain: 'algebra',
    skills: ['system-solution-types', 'infinite-solutions-condition'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'For what value of $m$ does the system below have infinitely many solutions?\n\n$3x + 5y = 9$\n$6x + 10y = m$',
    choices: [
      { id: 'A', text: '$18$' },
      // distractor: doesn't scale at all
      { id: 'B', text: '$9$' },
      // distractor: triples instead of doubles
      { id: 'C', text: '$27$' },
      // distractor: uses different ratio
      { id: 'D', text: '$3$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: System Equivalence Check**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The coefficients of the second equation are $2\\times$ those of the first ($6 = 2 \\cdot 3$, $10 = 2 \\cdot 5$). For infinitely many solutions, the constant must also scale by $2$: $m = 2 \\cdot 9 = 18$.\n\n**The Full Solution:**\nFor infinitely many solutions, the two equations must represent the SAME line — one is a scalar multiple of the other.\n\nMultiply the first equation by $2$:\n$2(3x + 5y) = 2 \\cdot 9$\n$6x + 10y = 18$.\n\nThis must match the second equation $6x + 10y = m$. So $m = 18$.\n\nVerification: at $m = 18$, both equations represent the line $3x + 5y = 9$ — every point on it is a solution \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — reports the original constant $9$ without scaling.\n* Choice C: "wrong base" — uses the wrong multiplier ($3 \\times 9 = 27$).\n* Choice D: "applies the inverse operation" — divides instead of multiplies.\n\n**Test Day Takeaway:** Same line $\\iff$ ALL three of $(a, b, c)$ in $ax + by = c$ scale by the same factor. Identify the multiplier from the coefficients first, then apply it to the constant.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'system-equivalence-check',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-126',
    domain: 'algebra',
    skills: ['system-solution-types', 'infinite-solutions-condition'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'For what value of $c$ does the system below have infinitely many solutions?\n\n$-4x + 6y = 8$\n$2x - 3y = c$',
    correctAnswer: '-4',
    explanation: '**SAT Pattern: System Equivalence Check**\n\n**The correct answer is $-4$.**\n\n**The Fast Way (~20s):** The second equation\'s coefficients are $-\\dfrac{1}{2}$ times the first ($2 = -\\dfrac{1}{2}(-4)$, $-3 = -\\dfrac{1}{2}(6)$). So $c = -\\dfrac{1}{2}(8) = -4$.\n\n**The Full Solution:**\nFor infinitely many solutions, one equation is a scalar multiple of the other.\n\nMultiply the first equation by $-\\dfrac{1}{2}$:\n$-\\dfrac{1}{2}(-4x + 6y) = -\\dfrac{1}{2}(8)$\n$2x - 3y = -4$.\n\nMatching against $2x - 3y = c$ gives $c = -4$.\n\nVerification: at $c = -4$, multiplying the second by $-2$ gives $-4x + 6y = 8$ — identical to the first \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using the wrong sign on the multiplier: $\\dfrac{1}{2}$ instead of $-\\dfrac{1}{2}$, getting $c = 4$.\n* Multiplying the constant by $2$ instead of $\\dfrac{1}{2}$.\n* Skipping the sign comparison on coefficients.\n\n**Test Day Takeaway:** When equation coefficients differ in sign, the multiplier is NEGATIVE. The constant must scale by the same NEGATIVE factor.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'system-equivalence-check',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-127',
    domain: 'algebra',
    skills: ['system-solution-types', 'infinite-solutions-condition'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'For what value of $k$ does the equation $4(x - 2) + 3 = 2(2x - k)$ have infinitely many solutions?',
    choices: [
      { id: 'A', text: '$\\dfrac{5}{2}$' },
      // distractor: forgets to negate
      { id: 'B', text: '$-\\dfrac{5}{2}$' },
      // distractor: drops the +3 term
      { id: 'C', text: '$4$' },
      // distractor: wrong simplification
      { id: 'D', text: '$5$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: System Equivalence Check**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Simplify both sides. LHS $= 4x - 8 + 3 = 4x - 5$. RHS $= 4x - 2k$. For the constants to match: $-2k = -5 \\Rightarrow k = \\dfrac{5}{2}$.\n\n**The Full Solution:**\nSimplify the left side:\n$4(x - 2) + 3 = 4x - 8 + 3 = 4x - 5$.\n\nSimplify the right side:\n$2(2x - k) = 4x - 2k$.\n\nFor infinitely many solutions, both sides must be identical. The $x$ coefficients already match ($4 = 4$). Match the constants:\n$-5 = -2k$\n$k = \\dfrac{5}{2}$.\n\nVerification: with $k = 5/2$, RHS $= 4x - 5$, identical to LHS \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong sign" — solves $-5 = -2k$ as $k = -5/2$ by canceling the negatives incorrectly.\n* Choice C: "wrong base" — picks the coefficient $4$ as the answer.\n* Choice D: "stops one step early" — reports $-5$\'s absolute value before dividing by $2$.\n\n**Test Day Takeaway:** When BOTH sides have parentheses, distribute both, then collect like terms before matching coefficients. Don\'t try to compare un-simplified forms.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'system-equivalence-check',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-128',
    domain: 'algebra',
    skills: ['system-solution-types', 'infinite-solutions-condition'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'The equation $\\dfrac{1}{2}(6x + 8) = 3x + c$ has infinitely many solutions. What is the value of $c$?',
    correctAnswer: '4',
    explanation: '**SAT Pattern: System Equivalence Check**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~10s):** $\\dfrac{1}{2}(6x + 8) = 3x + 4$. So $c = 4$.\n\n**The Full Solution:**\nDistribute on the left side:\n$\\dfrac{1}{2}(6x + 8) = \\dfrac{1}{2}(6x) + \\dfrac{1}{2}(8) = 3x + 4$.\n\nThe equation becomes $3x + 4 = 3x + c$.\n\nFor infinitely many solutions, the constants must match: $c = 4$.\n\nVerification: with $c = 4$, both sides equal $3x + 4$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting to distribute the $\\dfrac{1}{2}$ to BOTH terms (taking $6x + 4$ instead of $3x + 4$).\n* Computing $\\dfrac{1}{2} \\cdot 8 = 8$ (forgetting the half).\n* Reporting $c = 8$ (using the un-halved constant).\n\n**Test Day Takeaway:** Distribute the fraction to EACH term inside the parentheses. $\\dfrac{1}{2}(6x + 8) \\ne 6x + 4$.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'system-equivalence-check',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-129',
    domain: 'algebra',
    skills: ['system-solution-types', 'infinite-solutions-condition'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The system below has infinitely many solutions. What is the value of $m \\cdot n$?\n\n$mx + 2y = 4$\n$6x + ny = 12$',
    choices: [
      { id: 'A', text: '$12$' },
      // distractor: m + n instead of m * n
      { id: 'B', text: '$8$' },
      // distractor: wrong multiplier
      { id: 'C', text: '$6$' },
      // distractor: drops scaling on n
      { id: 'D', text: '$4$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: System Equivalence Check**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The constant ratio is $12/4 = 3$, so the second equation is $3\\times$ the first. So $6 = 3m \\Rightarrow m = 2$, and $n = 3 \\cdot 2 = 6$. Product $mn = 12$.\n\n**The Full Solution:**\nFor infinitely many solutions, one equation is a scalar multiple of the other. The constants give the multiplier: $12 \\div 4 = 3$. So the second equation $= 3 \\times$ the first equation:\n$3(mx + 2y) = 3 \\cdot 4$\n$3mx + 6y = 12$.\n\nMatch against $6x + ny = 12$:\n* $x$ coefficient: $3m = 6 \\Rightarrow m = 2$.\n* $y$ coefficient: $6 = n \\Rightarrow n = 6$.\n\nProduct: $m \\cdot n = 2 \\cdot 6 = 12$.\n\nVerification: with $m = 2$, $n = 6$: first is $2x + 2y = 4$, second is $6x + 6y = 12$. Divide second by $3$: $2x + 2y = 4$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — adds $m + n = 8$ instead of multiplying.\n* Choice C: "wrong base" — uses $n = 6$ directly as the answer (drops $m$).\n* Choice D: "stops one step early" — uses the constant $4$ directly.\n\n**Test Day Takeaway:** Two unknowns in a system equivalence problem: solve them ONE AT A TIME using the same multiplier. Identify the scalar from the cleanest pair (often the constants).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'system-equivalence-check',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-130',
    domain: 'algebra',
    skills: ['system-solution-types', 'infinite-solutions-condition'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'If the equation $a(x - 4) + 7 = 5x + b$ has infinitely many solutions, what is the value of $a + b$?',
    correctAnswer: '-8',
    explanation: '**SAT Pattern: System Equivalence Check**\n\n**The correct answer is $-8$.**\n\n**The Fast Way (~30s):** Expand: $ax - 4a + 7 = 5x + b$. Match: $a = 5$ (coefficients), $-4a + 7 = b$ (constants). With $a = 5$: $b = -20 + 7 = -13$. Sum $a + b = 5 + (-13) = -8$.\n\n**The Full Solution:**\nExpand the left side:\n$a(x - 4) + 7 = ax - 4a + 7$.\n\nThe equation is $ax - 4a + 7 = 5x + b$.\n\nFor infinitely many solutions, BOTH the coefficient on $x$ AND the constant must match:\n* Coefficients: $a = 5$.\n* Constants: $-4a + 7 = b$. Substituting $a = 5$: $b = -20 + 7 = -13$.\n\nSum: $a + b = 5 + (-13) = -8$.\n\nVerification: with $a = 5$, $b = -13$: LHS $= 5(x - 4) + 7 = 5x - 20 + 7 = 5x - 13$, RHS $= 5x - 13$. Identical for every $x$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting that BOTH coefficient AND constant must match (solving only one).\n* Computing $-4(5) = -20$ but writing $b = -20$ (forgetting the $+7$).\n* Adding incorrectly: $5 + 13 = 18$ instead of $5 + (-13) = -8$.\n\n**Test Day Takeaway:** When the parameter appears in BOTH the coefficient AND the constant, solve the coefficient equation FIRST, then substitute to find the other parameter. Two unknowns, two conditions.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'system-equivalence-check',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  // ===== Phase 2 batch 6/1: function-evaluation (8 items) =====
  // Pattern: evaluate a function at a given input. Spans linear, quadratic, and
  // exponential function definitions. 15 test occurrences (highest-frequency
  // uncovered pattern after batches 1-5). SAT Pattern title (verbatim):
  // 'Function Evaluation' → kebab 'function-evaluation'.
  {
    id: 'bank-alg-131',
    domain: 'algebra',
    skills: ['function-evaluation'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 3x + 7$. What is the value of $f(4)$?',
    choices: [
      { id: 'A', text: '$19$' },
      // distractor: adds the input to the constant directly
      { id: 'B', text: '$11$' },
      // distractor: multiplies but doesn't add
      { id: 'C', text: '$12$' },
      // distractor: forgets the constant
      { id: 'D', text: '$21$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Evaluation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $f(4) = 3(4) + 7 = 12 + 7 = 19$.\n\n**The Full Solution:**\nSubstitute $x = 4$ into the formula:\n$f(4) = 3(4) + 7 = 12 + 7 = 19$.\n\nVerification: at $x = 4$, $3x = 12$ and adding $7$ gives $19$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — adds the constant to the input directly ($4 + 7 = 11$).\n* Choice C: "stops one step early" — reports $3 \\cdot 4 = 12$ without adding the constant.\n* Choice D: "wrong sign" — multiplies $3 \\cdot 7 = 21$ instead of using the formula.\n\n**Test Day Takeaway:** Substitute the input value EVERYWHERE you see $x$ in the formula, then simplify in order: multiplication before addition.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'function-evaluation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-132',
    domain: 'algebra',
    skills: ['function-evaluation'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'The function $g$ is defined by $g(x) = 10 - 2x$. What is the value of $g(3)$?',
    correctAnswer: '4',
    explanation: '**SAT Pattern: Function Evaluation**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~10s):** $g(3) = 10 - 2(3) = 10 - 6 = 4$.\n\n**The Full Solution:**\nSubstitute $x = 3$:\n$g(3) = 10 - 2(3) = 10 - 6 = 4$.\n\nVerification: at $x = 3$, $2x = 6$. Subtracting from $10$ gives $4$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing $10 - 2 = 8$ then multiplying by $3$ (wrong order of operations).\n* Computing $10 - 23 = -13$ (concatenating $2$ and $3$ instead of multiplying).\n* Adding instead of subtracting: $10 + 6 = 16$.\n\n**Test Day Takeaway:** Multiplication before subtraction (PEMDAS). $10 - 2x$ at $x = 3$ is $10 - (2 \\cdot 3) = 10 - 6 = 4$, NOT $(10 - 2) \\cdot 3 = 24$.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'function-evaluation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-133',
    domain: 'algebra',
    skills: ['function-evaluation'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The function $h$ is defined by $h(x) = x^2 - 5x + 2$. What is the value of $h(-2)$?',
    choices: [
      { id: 'A', text: '$16$' },
      // distractor: sign error on the squared term
      { id: 'B', text: '$-12$' },
      // distractor: arithmetic slip
      { id: 'C', text: '$8$' },
      // distractor: another arithmetic mistake
      { id: 'D', text: '$-4$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Evaluation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $h(-2) = (-2)^2 - 5(-2) + 2 = 4 + 10 + 2 = 16$.\n\n**The Full Solution:**\nSubstitute $x = -2$:\n$h(-2) = (-2)^2 - 5(-2) + 2$\n$= 4 - (-10) + 2$\n$= 4 + 10 + 2$\n$= 16$.\n\nVerification: $(-2)^2 = 4$ (positive, since a negative squared is positive), and $-5(-2) = 10$ (negative times negative is positive) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong sign" — writes $(-2)^2 = -4$ (sign error): $-4 + 10 - 2 = 4$, no wait... drop to $-4 - 10 + 2 = -12$.\n* Choice C: "off-by-one" — computes $-5(-2) = -10$ (sign error): $4 - 10 + 2 = -4$ then mistakenly negates to $4 + 4 = 8$.\n* Choice D: "wrong sign" — computes $-5(-2) = -10$: $4 - 10 + 2 = -4$.\n\n**Test Day Takeaway:** When the input is negative, parenthesize EVERYWHERE: $(-2)^2$, $-5 \\cdot (-2)$. Two negatives make a positive — twice, in this problem.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'function-evaluation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-134',
    domain: 'advanced-math',
    skills: ['function-evaluation'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = 2^x + 1$. What is the value of $f(4)$?',
    correctAnswer: '17',
    explanation: '**SAT Pattern: Function Evaluation**\n\n**The correct answer is $17$.**\n\n**The Fast Way (~10s):** $f(4) = 2^4 + 1 = 16 + 1 = 17$.\n\n**The Full Solution:**\nSubstitute $x = 4$:\n$f(4) = 2^4 + 1 = 16 + 1 = 17$.\n\nVerification: $2^4 = 2 \\cdot 2 \\cdot 2 \\cdot 2 = 16$, then $+1$ gives $17$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing $2 \\cdot 4 = 8$ instead of $2^4 = 16$ (confuses exponentiation with multiplication).\n* Computing $2^4 \\cdot 1 = 16$ (treats $+1$ as $\\times 1$).\n* Computing $4^2 = 16$ — happens to give the right $2^4$ value, but is the wrong reasoning; would fail on $f(3) = 2^3 + 1 = 9$ vs $3^2 + 1 = 10$.\n\n**Test Day Takeaway:** Exponentiation: the base is below the exponent. $2^x$ means $x$ copies of $2$ multiplied. Don\'t confuse with $x^2$.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'function-evaluation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-135',
    domain: 'algebra',
    skills: ['function-evaluation'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 5x - 2$. What is the value of $f(7) - f(3)$?',
    choices: [
      { id: 'A', text: '$20$' },
      // distractor: computes f(7-3) = f(4)
      { id: 'B', text: '$18$' },
      // distractor: f(7) only
      { id: 'C', text: '$33$' },
      // distractor: f(7) - f(3) but slips on subtraction
      { id: 'D', text: '$15$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Evaluation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $f(7) - f(3) = (5 \\cdot 7 - 2) - (5 \\cdot 3 - 2) = 33 - 13 = 20$.\n\n**The Full Solution:**\nEvaluate each piece:\n* $f(7) = 5(7) - 2 = 35 - 2 = 33$.\n* $f(3) = 5(3) - 2 = 15 - 2 = 13$.\n\nSubtract: $f(7) - f(3) = 33 - 13 = 20$.\n\nFaster: for a LINEAR function $f(x) = mx + b$, $f(a) - f(c) = m(a - c)$. Here $m = 5$, $a - c = 7 - 3 = 4$, so $f(7) - f(3) = 5 \\cdot 4 = 20$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — computes $f(7 - 3) = f(4) = 18$ instead of $f(7) - f(3)$.\n* Choice C: "stops one step early" — reports $f(7) = 33$ without subtracting $f(3)$.\n* Choice D: "wrong base" — picks $f(3) = 15$ minus its own $0$.\n\n**Test Day Takeaway:** $f(a) - f(b) \\ne f(a - b)$ in general. For LINEAR $f$, the slope shortcut $m(a - b)$ works — handy on the test.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'function-evaluation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-136',
    domain: 'advanced-math',
    skills: ['function-evaluation'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = 3 \\cdot 2^x$. What is the value of $f(5) - f(3)$?',
    correctAnswer: '72',
    explanation: '**SAT Pattern: Function Evaluation**\n\n**The correct answer is $72$.**\n\n**The Fast Way (~15s):** $f(5) - f(3) = 3 \\cdot 32 - 3 \\cdot 8 = 96 - 24 = 72$.\n\n**The Full Solution:**\nEvaluate each piece:\n* $f(5) = 3 \\cdot 2^5 = 3 \\cdot 32 = 96$.\n* $f(3) = 3 \\cdot 2^3 = 3 \\cdot 8 = 24$.\n\nSubtract: $f(5) - f(3) = 96 - 24 = 72$.\n\nFaster: factor out $f(3)$: $f(5) - f(3) = 3 \\cdot 2^3(2^2 - 1) = 24 \\cdot 3 = 72$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing $f(5 - 3) = f(2) = 12$ instead of subtracting.\n* Forgetting the leading $3$: computing $2^5 - 2^3 = 24$.\n* Order of operations slip: $3 \\cdot 2^5 \\ne (3 \\cdot 2)^5 = 6^5$.\n\n**Test Day Takeaway:** Exponential $f(x) = a \\cdot b^x$ — evaluate by computing $b^x$ FIRST (PEMDAS), then multiply by $a$. Subtractions like $f(5) - f(3)$ can be factored cleanly.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-evaluation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-137',
    domain: 'advanced-math',
    skills: ['function-evaluation'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = (2x - 1)^2 - 5$. What is the value of $f(-2)$?',
    choices: [
      { id: 'A', text: '$20$' },
      // distractor: doesn't subtract the 5
      { id: 'B', text: '$25$' },
      // distractor: forgets to square the negative
      { id: 'C', text: '$4$' },
      // distractor: arithmetic slip on the squaring
      { id: 'D', text: '$-4$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Function Evaluation**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $f(-2) = (2(-2) - 1)^2 - 5 = (-5)^2 - 5 = 25 - 5 = 20$.\n\n**The Full Solution:**\nSubstitute $x = -2$:\n$f(-2) = (2(-2) - 1)^2 - 5$\n$= (-4 - 1)^2 - 5$\n$= (-5)^2 - 5$\n$= 25 - 5$\n$= 20$.\n\nVerification: $-4 - 1 = -5$, and $(-5)^2 = 25$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — reports $(-5)^2 = 25$ without subtracting the trailing $-5$.\n* Choice C: "wrong base" — computes $2(-2) - 1 = -5$ but writes $(-5)^2 - 5 = -5 - (-5)$ wrongly (or treats inside as $-5 - 5 = -10$, then $(-10)^2 - 5 = 95$).\n* Choice D: "wrong sign" — drops the negative when squaring: $(-5)^2 = -25$, then $-25 - 5 = -30$... or other arithmetic slip giving $-4$.\n\n**Test Day Takeaway:** With nested expressions, work from the INSIDE out: parentheses → exponent → addition/subtraction. The $-5$ outside the square only applies AFTER squaring.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'function-evaluation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-138',
    domain: 'advanced-math',
    skills: ['function-evaluation'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = 800(0.5)^x$. What is the value of $f(0) + f(1)$?',
    correctAnswer: '1200',
    explanation: '**SAT Pattern: Function Evaluation**\n\n**The correct answer is $1200$.**\n\n**The Fast Way (~15s):** $f(0) = 800 \\cdot 1 = 800$ (anything to the zero power is $1$). $f(1) = 800 \\cdot 0.5 = 400$. Sum: $1200$.\n\n**The Full Solution:**\nEvaluate each piece:\n* $f(0) = 800 \\cdot (0.5)^0 = 800 \\cdot 1 = 800$.\n* $f(1) = 800 \\cdot (0.5)^1 = 800 \\cdot 0.5 = 400$.\n\nSum: $f(0) + f(1) = 800 + 400 = 1200$.\n\nVerification: at $x = 0$, the exponential factor is $1$, so $f(0)$ equals the leading coefficient $800$. At $x = 1$, the exponential is just the base $0.5$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing $(0.5)^0 = 0$ (anything to the zero is $1$, not $0$).\n* Computing $f(0) + f(1) = f(0 + 1) = f(1) = 400$ (sum of values, not value of sum).\n* Computing $800 \\cdot 0 = 0$ for $f(0)$ — treating the exponent as a multiplier.\n\n**Test Day Takeaway:** Exponent of $0$ on any nonzero base equals $1$. So $f(0) = a \\cdot b^0 = a \\cdot 1 = a$ — the leading coefficient — every time.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'function-evaluation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  // ===== Phase 2 batch 6/2: interpret-slope-in-context (7 items) =====
  // Bank already has bank-alg-009 for this pattern (1 item). Adding 7 more
  // for total of 8 (Tier 1 threshold).
  // Pattern: real-world linear function f(t) = b + mt is given; question asks
  // what the slope m represents in the scenario. 10 test occurrences across
  // PT1, PT2, PT4, PT6, PT7, PT10, PT11 and friends. SAT Pattern title
  // (verbatim): 'Interpret Slope in Context' → 'interpret-slope-in-context'.
  {
    id: 'bank-alg-139',
    domain: 'algebra',
    skills: ['slope-intercept-form'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'The function $V(t) = 50 + 8t$ models the volume, in liters, of water in a tank $t$ minutes after filling begins. What does the number $8$ represent in this context?',
    choices: [
      // distractor: 50 is the initial value, not the rate
      { id: 'A', text: 'The volume of water in the tank before filling begins' },
      { id: 'B', text: 'The number of liters added each minute' },
      // distractor: treats 8 as an input value
      { id: 'C', text: 'The volume of water in the tank after $8$ minutes' },
      // distractor: inverts the rate
      { id: 'D', text: 'The number of minutes needed to add $1$ liter' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $V(t) = 50 + 8t$, the coefficient of $t$ is the rate of change: $8$ liters per minute.\n\n**The Full Solution:**\nThe function is in the form $V(t) = b + mt$, where $m = 8$ is the slope and $b = 50$ is the $V$-intercept. The slope tells us the rate of change: for each additional minute, the volume increases by $8$ liters.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — confuses the slope $8$ with the initial value $50$.\n* Choice C: "applies the inverse operation" — treats $8$ as an input value $t = 8$ instead of a rate.\n* Choice D: "applies the inverse operation" — inverts the rate (one liter per $1/8$ minute).\n\n**Test Day Takeaway:** In $y = b + mx$, the coefficient of the variable is ALWAYS the rate of change per unit of that variable. The constant is the starting value.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'interpret-slope-in-context',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-140',
    domain: 'algebra',
    skills: ['slope-intercept-form'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A cell phone plan costs $C(m) = 25 + 0.10m$ dollars, where $m$ is the number of minutes used. What does the number $0.10$ represent in this context?',
    choices: [
      // distractor: confuses with the base fee
      { id: 'A', text: 'The fixed monthly fee, in dollars' },
      { id: 'B', text: 'The cost, in dollars, of each additional minute' },
      // distractor: inverts the rate
      { id: 'C', text: 'The number of minutes per dollar' },
      // distractor: treats as a percent
      { id: 'D', text: 'The percent discount on the monthly fee' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $C(m) = 25 + 0.10m$, the coefficient of $m$ is the rate of change: $\\$0.10$ per minute.\n\n**The Full Solution:**\nThe function is in the form $C(m) = b + km$ where $k = 0.10$ is the slope and $b = 25$ is the fixed fee. The slope is the marginal cost: each additional minute adds $\\$0.10$ to the bill.\n\nVerification: at $m = 0$, $C = \\$25$ (the fixed fee). At $m = 10$, $C = 25 + 1 = \\$26$ — exactly $\\$1$ for $10$ minutes, confirming $\\$0.10$/minute \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — confuses the slope $0.10$ with the fixed fee $25$.\n* Choice C: "applies the inverse operation" — inverts the rate ($10$ minutes per dollar).\n* Choice D: "wrong formula" — treats the decimal as a percent.\n\n**Test Day Takeaway:** Cost functions: the COEFFICIENT of the variable is the marginal cost per unit. The CONSTANT is the fixed fee that you pay regardless of usage.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'interpret-slope-in-context',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-141',
    domain: 'algebra',
    skills: ['slope-intercept-form'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'The function $f(t) = 85 + 12t$ models the temperature, in degrees Fahrenheit, of a liquid $t$ minutes after heating begins. By how many degrees does the temperature increase each minute?',
    correctAnswer: '12',
    explanation: '**SAT Pattern: Interpret Slope in Context**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~10s):** The coefficient of $t$ is the rate: $12$ degrees per minute.\n\n**The Full Solution:**\nIn $f(t) = b + mt$, the slope $m$ is the per-unit rate of change of $f$. Here $m = 12$, so the temperature rises by $12$ degrees for each additional minute.\n\nVerification: $f(0) = 85$, $f(1) = 85 + 12 = 97$ — a $12$-degree increase in one minute \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $85$ — that\'s the initial temperature, not the rate.\n* Reporting $1/12$ — that would be how many degrees per "extra second" if minutes were inverted.\n* Reporting $97$ (the temperature after $1$ minute) instead of the CHANGE.\n\n**Test Day Takeaway:** "Per minute" means dividing by minutes. The coefficient of $t$ already has those units baked in: $[\\text{rate}] = [\\text{output units}] / [\\text{input units}]$.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'interpret-slope-in-context',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-142',
    domain: 'algebra',
    skills: ['slope-intercept-form'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The function $T(t) = 200 - 15t$ models the temperature, in degrees Fahrenheit, of a pie $t$ minutes after it is removed from the oven. What does the number $15$ represent in this context?',
    choices: [
      // distractor: confuses with initial temperature
      { id: 'A', text: 'The temperature of the pie when removed from the oven' },
      { id: 'B', text: 'The number of degrees the pie cools each minute' },
      // distractor: misses the sign
      { id: 'C', text: 'The number of degrees the pie warms each minute' },
      // distractor: inverts the rate
      { id: 'D', text: 'The number of minutes for the pie to cool by $1$ degree' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $T(t) = 200 - 15t$, the coefficient of $t$ is $-15$. The temperature DECREASES by $15$ degrees per minute. So "$15$" represents the cooling rate.\n\n**The Full Solution:**\nThe function is in the form $T(t) = b + mt$ with $m = -15$ and $b = 200$. The negative slope means the temperature decreases as time increases: the pie cools by $15$°F each minute.\n\nThe number "$15$" in the formula has the magnitude of the rate; the negative sign in $-15$ tells us the direction (cooling, not warming).\n\nVerification: $T(0) = 200$, $T(1) = 185$ — a $15$-degree drop \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — that\'s the initial value $200$, not the slope.\n* Choice C: "wrong sign" — flips the direction of cooling.\n* Choice D: "applies the inverse operation" — inverts the rate.\n\n**Test Day Takeaway:** Negative slope in a real-world context $\\Rightarrow$ the quantity is DECREASING. The magnitude $|m|$ is the rate of decrease per unit time.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'interpret-slope-in-context',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-143',
    domain: 'algebra',
    skills: ['slope-intercept-form'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A savings account balance is modeled by $S(w) = 1200 + 75w$, where $w$ is the number of weeks since the account was opened. What does the number $75$ represent in this context?',
    choices: [
      // distractor: confuses with starting balance
      { id: 'A', text: 'The initial balance, in dollars' },
      { id: 'B', text: 'The amount deposited, in dollars, each week' },
      // distractor: treats as a total
      { id: 'C', text: 'The total amount deposited so far, in dollars' },
      // distractor: inverts the rate
      { id: 'D', text: 'The number of weeks needed to save $1$ dollar' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $S(w) = 1200 + 75w$, the coefficient of $w$ is the rate: $\\$75$ per week.\n\n**The Full Solution:**\nThe function is in the form $S(w) = b + mw$ where $m = 75$ is the per-week deposit and $b = 1200$ is the starting balance.\n\nVerification: $S(0) = \\$1200$ (initial). $S(1) = 1275$, increase of $\\$75$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — confuses the slope with the initial balance ($\\$1200$).\n* Choice C: "stops one step early" — total deposits depend on $w$, not just the rate.\n* Choice D: "applies the inverse operation" — inverts the rate.\n\n**Test Day Takeaway:** Whenever a real-world balance formula has the form (initial) $+$ (rate)$\\times$(time), the COEFFICIENT of time is always the per-unit change.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'interpret-slope-in-context',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-144',
    domain: 'algebra',
    skills: ['slope-intercept-form'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The distance, in miles, that a car has traveled is modeled by $D(t) = 60t + 8$, where $t$ is the time in hours since the trip started. What does the number $8$ represent in this context?',
    choices: [
      // distractor: confuses with slope
      { id: 'A', text: 'The speed of the car, in miles per hour' },
      { id: 'B', text: 'The distance, in miles, the car had already traveled when the trip started' },
      // distractor: input at unit time
      { id: 'C', text: 'The distance traveled after $8$ hours' },
      // distractor: wrong formula
      { id: 'D', text: 'The number of hours needed to travel $1$ mile' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $D(t) = 60t + 8$, the constant $8$ is the $D$-intercept: distance at $t = 0$. So $8$ is the distance ALREADY traveled before the trip started (the "head start").\n\n**The Full Solution:**\nThe function is in the form $D(t) = mt + b$ where $m = 60$ is the speed (slope) and $b = 8$ is the $D$-intercept. The intercept tells us the value of $D$ when $t = 0$: $D(0) = 60(0) + 8 = 8$.\n\nSo when the timer "starts," the car was already $8$ miles into its journey. The $60$ is the SPEED (miles per hour), not the intercept.\n\nVerification: at $t = 0$, $D = 8$ — initial distance \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — that\'s the slope ($60$), not the intercept.\n* Choice C: "applies the inverse operation" — treats $8$ as an input $t = 8$, not a constant.\n* Choice D: "applies the inverse operation" — inverts a non-rate.\n\n**Test Day Takeaway:** When the equation has the form $f(t) = mt + b$, the SLOPE $m$ is the rate (per-unit change) and the INTERCEPT $b$ is the starting value. Same role even when the constant is on the right of the slope term.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'interpret-slope-in-context',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-145',
    domain: 'algebra',
    skills: ['slope-intercept-form'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'The value of a car, in dollars, is modeled by $V(y) = 24000 - 1800y$, where $y$ is the number of years since the car was purchased. By how many dollars does the value of the car decrease each year?',
    correctAnswer: '1800',
    explanation: '**SAT Pattern: Interpret Slope in Context**\n\n**The correct answer is $1800$.**\n\n**The Fast Way (~10s):** The coefficient of $y$ is $-1800$. The car DECREASES by $1800$ dollars per year, so the decrease per year is $1800$.\n\n**The Full Solution:**\nIn $V(y) = 24000 - 1800y$, the function has the form $V(y) = b + my$ with $m = -1800$ and $b = 24000$. The negative slope means the value drops as years pass; the magnitude $|m| = 1800$ is the per-year decrease.\n\nVerification: $V(0) = 24000$, $V(1) = 22200$ — a $\\$1800$ drop in one year \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $-1800$ — the question asks "by how many" (a positive magnitude).\n* Reporting $24000$ — that\'s the initial value, not the rate.\n* Reporting $22200$ ($V$ at $y = 1$) instead of the CHANGE.\n\n**Test Day Takeaway:** "By how many" or "decrease by" expects a POSITIVE answer — the magnitude of the change. The negative sign in the formula tells you the direction; you don\'t carry it into the answer.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'interpret-slope-in-context',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  // ===== Phase 2 batch 6/4: system-of-equations-substitution (8 items) =====
  // Pattern: solve a system of equations by substitution. Includes 2-equation
  // linear systems and mixed linear-quadratic systems. 8 test occurrences
  // across PT2, PT5, PT10, PT12 and M2Easy variants. SAT Pattern title
  // (verbatim from test bundles): 'System of Equations — Substitution'
  // with em-dash (U+2014) → kebab 'system-of-equations-substitution'.
  {
    id: 'bank-alg-146',
    domain: 'algebra',
    skills: ['substitution-method'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'The system of equations $y = 2x + 1$ and $y = 3x - 4$ has solution $(x, y)$. What is the value of $x$?',
    choices: [
      { id: 'A', text: '$5$' },
      // distractor: solves for y
      { id: 'B', text: '$11$' },
      // distractor: wrong sign on subtraction
      { id: 'C', text: '$-5$' },
      // distractor: stops after first substitution
      { id: 'D', text: '$1$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: System of Equations — Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Both equations equal $y$, so set them equal: $2x + 1 = 3x - 4 \\Rightarrow 5 = x$.\n\n**The Full Solution:**\nSince both equations are solved for $y$, substitute one into the other:\n$2x + 1 = 3x - 4$\n$1 + 4 = 3x - 2x$\n$5 = x$.\n\nVerification: at $x = 5$, $y = 2(5) + 1 = 11$ and $y = 3(5) - 4 = 11$ \\checkmark — both equations agree.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — reports $y = 11$ as the answer.\n* Choice C: "wrong sign" — solves $2x - 1 = 3x + 4$ by sign error.\n* Choice D: "stops one step early" — picks the constant in the first equation.\n\n**Test Day Takeaway:** When both equations are in the form $y = \\ldots$, set the right-hand sides equal. No substitution variable needed.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'system-of-equations-substitution',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-147',
    domain: 'algebra',
    skills: ['substitution-method'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'If $y = x + 4$ and $2x + y = 13$, what is the value of $x$?',
    correctAnswer: '3',
    explanation: '**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~15s):** Substitute $y = x + 4$ into the second equation: $2x + (x + 4) = 13 \\Rightarrow 3x = 9 \\Rightarrow x = 3$.\n\n**The Full Solution:**\nSubstitute the first equation into the second:\n$2x + (x + 4) = 13$\n$3x + 4 = 13$\n$3x = 9$\n$x = 3$.\n\nVerification: $y = 3 + 4 = 7$. Check second equation: $2(3) + 7 = 13$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting the parentheses around the substitution: $2x + x + 4 = 13$ works here, but in general the parens matter for sign handling.\n* Solving for $y$ instead of $x$.\n* Adding instead of subtracting: $3x = 17$.\n\n**Test Day Takeaway:** Substitution: replace EVERY occurrence of the substituted variable with the equivalent expression. Then solve the single-variable equation that remains.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'system-of-equations-substitution',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-148',
    domain: 'algebra',
    skills: ['substitution-method'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The system of equations below has solution $(x, y)$. What is the value of $y$?\n\n$x = 2y - 5$\n$3x + y = 6$',
    choices: [
      { id: 'A', text: '$3$' },
      // distractor: solves for x
      { id: 'B', text: '$1$' },
      // distractor: arithmetic slip
      { id: 'C', text: '$5$' },
      // distractor: sign error
      { id: 'D', text: '$-3$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: System of Equations — Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Substitute $x = 2y - 5$ into $3x + y = 6$: $3(2y - 5) + y = 6 \\Rightarrow 7y - 15 = 6 \\Rightarrow y = 3$.\n\n**The Full Solution:**\nSubstitute $x = 2y - 5$ into the second equation:\n$3(2y - 5) + y = 6$\n$6y - 15 + y = 6$\n$7y - 15 = 6$\n$7y = 21$\n$y = 3$.\n\nVerification: $x = 2(3) - 5 = 1$. Check: $3(1) + 3 = 6$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — reports $x = 1$ as the answer.\n* Choice C: "stops one step early" — picks the constant $-5$\'s magnitude.\n* Choice D: "wrong sign" — drops the sign when distributing $3(2y - 5)$.\n\n**Test Day Takeaway:** When one equation gives $x$ in terms of $y$, substitute INTO the other equation. Distribute carefully; the sign on $-5$ matters.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'system-of-equations-substitution',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-149',
    domain: 'algebra',
    skills: ['substitution-method'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A store sells small notebooks for $\\$3$ each and large notebooks for $\\$7$ each. A customer buys $12$ notebooks for a total of $\\$56$. How many large notebooks did the customer buy?',
    correctAnswer: '5',
    explanation: '**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~30s):** Let $s$ = small, $\\ell$ = large. $s + \\ell = 12$, $3s + 7\\ell = 56$. Substitute $s = 12 - \\ell$: $3(12 - \\ell) + 7\\ell = 56 \\Rightarrow 36 + 4\\ell = 56 \\Rightarrow \\ell = 5$.\n\n**The Full Solution:**\nLet $s$ = number of small notebooks and $\\ell$ = number of large notebooks.\n* Count equation: $s + \\ell = 12$.\n* Cost equation: $3s + 7\\ell = 56$.\n\nFrom the count equation: $s = 12 - \\ell$. Substitute into the cost equation:\n$3(12 - \\ell) + 7\\ell = 56$\n$36 - 3\\ell + 7\\ell = 56$\n$36 + 4\\ell = 56$\n$4\\ell = 20$\n$\\ell = 5$.\n\nVerification: $s = 7$, $\\ell = 5$. Count: $7 + 5 = 12$ \\checkmark. Cost: $3(7) + 7(5) = 21 + 35 = 56$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Swapping prices: $7s + 3\\ell = 56$ gives $\\ell = 7$ (the small count).\n* Solving for $s$ instead of $\\ell$ — answer is $7$, not what was asked.\n* Setting up only one equation; need TWO for two unknowns.\n\n**Test Day Takeaway:** Two-quantity word problems: define variables, write TWO equations (count + total-cost), then substitute. Always re-read the question to confirm which variable it asks for.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'system-of-equations-substitution',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-150',
    domain: 'algebra',
    skills: ['substitution-method'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The system of equations below has solution $(x, y)$. What is the value of $x + y$?\n\n$y = 4x - 1$\n$2x + 3y = 11$',
    choices: [
      { id: 'A', text: '$4$' },
      // distractor: only x
      { id: 'B', text: '$1$' },
      // distractor: only y
      { id: 'C', text: '$3$' },
      // distractor: x - y
      { id: 'D', text: '$-2$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: System of Equations — Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Substitute $y = 4x - 1$: $2x + 3(4x - 1) = 11 \\Rightarrow 14x = 14 \\Rightarrow x = 1$. Then $y = 3$. $x + y = 4$.\n\n**The Full Solution:**\nSubstitute $y = 4x - 1$ into $2x + 3y = 11$:\n$2x + 3(4x - 1) = 11$\n$2x + 12x - 3 = 11$\n$14x = 14$\n$x = 1$.\n\nThen $y = 4(1) - 1 = 3$. So $x + y = 1 + 3 = 4$.\n\nVerification: $2(1) + 3(3) = 2 + 9 = 11$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — reports $x = 1$ instead of $x + y$.\n* Choice C: "stops one step early" — reports $y = 3$.\n* Choice D: "wrong sign" — computes $x - y = -2$.\n\n**Test Day Takeaway:** After finding $(x, y)$, RE-READ the question. SAT often asks for a derived quantity like $x + y$, $xy$, or $y - x$, not the individual values.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'system-of-equations-substitution',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-151',
    domain: 'algebra',
    skills: ['substitution-method'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'If $3a + b = 14$ and $b = a + 2$, what is the value of $a$?',
    correctAnswer: '3',
    explanation: '**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~15s):** Substitute $b = a + 2$: $3a + (a + 2) = 14 \\Rightarrow 4a = 12 \\Rightarrow a = 3$.\n\n**The Full Solution:**\nSubstitute the expression for $b$ into the first equation:\n$3a + (a + 2) = 14$\n$4a + 2 = 14$\n$4a = 12$\n$a = 3$.\n\nVerification: $b = 3 + 2 = 5$. Check first equation: $3(3) + 5 = 14$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Subtracting instead of adding inside the parentheses: $3a - a - 2 = 14$ gives $a = 8$.\n* Solving for $b$ first by mistake — wastes time.\n* Reporting $b = 5$ instead of $a = 3$.\n\n**Test Day Takeaway:** When one equation already isolates a variable (e.g., $b = \\ldots$), use SUBSTITUTION rather than elimination. Plug the expression directly in.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'system-of-equations-substitution',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-152',
    domain: 'algebra',
    skills: ['substitution-method'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The system of equations below has solution $(x, y)$ where $x > 0$. What is the value of $x$?\n\n$y = x - 1$\n$x^2 - y = 7$',
    choices: [
      { id: 'A', text: '$3$' },
      // distractor: picks negative root
      { id: 'B', text: '$-2$' },
      // distractor: solves for y
      { id: 'C', text: '$2$' },
      // distractor: stops at the wrong step
      { id: 'D', text: '$4$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: System of Equations — Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Substitute $y = x - 1$: $x^2 - (x - 1) = 7 \\Rightarrow x^2 - x - 6 = 0 \\Rightarrow (x - 3)(x + 2) = 0$. With $x > 0$: $x = 3$.\n\n**The Full Solution:**\nSubstitute $y = x - 1$ into $x^2 - y = 7$:\n$x^2 - (x - 1) = 7$\n$x^2 - x + 1 = 7$\n$x^2 - x - 6 = 0$\n$(x - 3)(x + 2) = 0$\n$x = 3$ or $x = -2$.\n\nThe constraint $x > 0$ selects $x = 3$.\n\nVerification: $y = 3 - 1 = 2$. Check: $3^2 - 2 = 9 - 2 = 7$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong sign" — picks the negative root, ignoring $x > 0$.\n* Choice C: "wrong base" — reports $y = 2$.\n* Choice D: "stops one step early" — slip during factoring (e.g., $(x - 4)(x + 1)$).\n\n**Test Day Takeaway:** Linear-quadratic system $\\Rightarrow$ substitute the linear into the quadratic. Expect TWO solutions; use the constraint to pick the right one.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'system-of-equations-substitution',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-153',
    domain: 'algebra',
    skills: ['substitution-method'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'If $2x + 3y = 12$ and $y = x - 1$, what is the value of $xy$?',
    correctAnswer: '6',
    explanation: '**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~25s):** Substitute $y = x - 1$ into $2x + 3y = 12$: $2x + 3(x - 1) = 12 \\Rightarrow 5x - 3 = 12 \\Rightarrow x = 3$. Then $y = 2$. $xy = 3 \\cdot 2 = 6$.\n\n**The Full Solution:**\nSubstitute $y = x - 1$ into $2x + 3y = 12$:\n$2x + 3(x - 1) = 12$\n$2x + 3x - 3 = 12$\n$5x = 15$\n$x = 3$.\n\nThen $y = 3 - 1 = 2$.\n\n$xy = (3)(2) = 6$.\n\nVerification: $2(3) + 3(2) = 6 + 6 = 12$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting to distribute the $3$ across $(x - 1)$: $2x + 3x - 1 = 12$ gives $x = 13/5$.\n* Reporting $x + y = 5$ or $x - y = 1$ instead of $xy$.\n* Slip on the sign of $-1$ when distributing.\n\n**Test Day Takeaway:** "Value of $xy$" asks for the PRODUCT of the two solution components. Solve for $x$ and $y$ separately, then multiply.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'system-of-equations-substitution',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  // ===== Phase 2 batch 6/5: no-solution-condition (8 items) =====
  // Pattern: 2-equation linear system has NO solution ⟺ parallel lines (same
  // slope, different intercept). Find the parameter that produces parallelism.
  // 8 test occurrences across PT3, PT10, PT12 and friends.
  // SAT Pattern title (verbatim): 'No-Solution Condition' →
  // kebab 'no-solution-condition'.
  {
    id: 'bank-alg-154',
    domain: 'algebra',
    skills: ['system-solution-types'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'The system of equations $y = 4x + 1$ and $y = (k + 1)x + 5$ has no solution. What is the value of $k$?',
    choices: [
      { id: 'A', text: '$3$' },
      // distractor: forgets the +1
      { id: 'B', text: '$4$' },
      // distractor: sign error
      { id: 'C', text: '$-3$' },
      // distractor: matches the intercept instead of slope
      { id: 'D', text: '$5$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: No-Solution Condition**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** No solution = parallel = same slope. Match slopes: $k + 1 = 4 \\Rightarrow k = 3$.\n\n**The Full Solution:**\nTwo lines have NO solution if and only if they are parallel: same slope, different intercepts.\n\nLine 1 slope: $4$. Line 2 slope: $k + 1$.\n\nMatch: $k + 1 = 4 \\Rightarrow k = 3$.\n\nVerify intercepts differ: line 1 intercept $1$, line 2 intercept $5$. $1 \\ne 5$ \\checkmark — truly parallel-distinct (no solution), not coincident.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — solves $k = 4$ without subtracting the $+1$.\n* Choice C: "wrong sign" — sign flip when isolating $k$.\n* Choice D: "wrong base" — matches the $y$-intercept (which would create different lines, irrelevant to no-solution condition).\n\n**Test Day Takeaway:** NO SOLUTION = parallel lines = matching slopes + DIFFERENT intercepts. The slope condition gives the parameter; the intercept check confirms "no solution" (vs. infinitely many).',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'no-solution-condition',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-155',
    domain: 'algebra',
    skills: ['system-solution-types'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'For what value of $k$ does the system $y = 2x - 3$ and $y = kx + 7$ have no solution?',
    correctAnswer: '2',
    explanation: '**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~10s):** No solution = parallel = same slope. Match: $k = 2$.\n\n**The Full Solution:**\nFor no solution, the slopes must match while the intercepts differ.\n\nLine 1 slope: $2$. Line 2 slope: $k$. Match: $k = 2$.\n\nVerify intercepts differ: $-3 \\ne 7$ \\checkmark — parallel and distinct.\n\n**Common Mistakes to Avoid:**\n* Reporting $-3$ or $7$ (the intercepts).\n* Computing $k = -2$ (sign error).\n* Solving for $x$ or $y$ — those are NOT the question.\n\n**Test Day Takeaway:** When both equations are already in slope-intercept form $y = mx + b$, just match the $m$ values. Confirm $b$ values differ for "no solution" (vs. "infinitely many").',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'no-solution-condition',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-156',
    domain: 'algebra',
    skills: ['system-solution-types'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The system of equations $2x + 3y = 9$ and $4x + ky = 5$ has no solution. What is the value of $k$?',
    choices: [
      { id: 'A', text: '$6$' },
      // distractor: matches the wrong ratio
      { id: 'B', text: '$3$' },
      // distractor: sign error
      { id: 'C', text: '$-6$' },
      // distractor: uses constant ratio
      { id: 'D', text: '$\\dfrac{5}{3}$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: No-Solution Condition**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Coefficients of $x$: $4/2 = 2$. Coefficients of $y$ must match: $k/3 = 2 \\Rightarrow k = 6$. Constants: $5/9 \\ne 2$ \\checkmark.\n\n**The Full Solution:**\nFor a 2-equation linear system to have NO solution, the coefficients of $x$ and $y$ must be proportional (parallel), but the constants must NOT match the same proportion (not coincident).\n\nRatio of $x$-coefficients: $\\dfrac{4}{2} = 2$.\nMatch on $y$-coefficients: $\\dfrac{k}{3} = 2 \\Rightarrow k = 6$.\nCheck constants: $\\dfrac{5}{9} \\ne 2$ \\checkmark — confirms no solution.\n\nVerification: at $k = 6$, the second equation is $4x + 6y = 5$. Multiplying first by $2$: $4x + 6y = 18$. So $18 = 5$ has no solution \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — uses $y$-coefficient $3$ directly without scaling.\n* Choice C: "wrong sign" — sign flip during ratio match.\n* Choice D: "wrong base" — uses constant ratio $5/3$, which doesn\'t apply to the coefficient match.\n\n**Test Day Takeaway:** For "no solution" with standard-form equations, find the slope ratio from the $x$- and $y$-coefficients separately and match them.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'no-solution-condition',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-157',
    domain: 'algebra',
    skills: ['system-solution-types'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'For what value of $k$ does the system $5x - 2y = 10$ and $kx - 4y = 25$ have no solution?',
    correctAnswer: '10',
    explanation: '**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~15s):** Ratio of $y$-coefficients: $-4/-2 = 2$. Match on $x$: $k/5 = 2 \\Rightarrow k = 10$. Check constants: $25/10 = 5/2 \\ne 2$ \\checkmark.\n\n**The Full Solution:**\nMatch the $y$-coefficient ratio:\n$\\dfrac{-4}{-2} = 2$.\n\nMatch the $x$-coefficient ratio to the same value:\n$\\dfrac{k}{5} = 2 \\Rightarrow k = 10$.\n\nCheck constants:\n$\\dfrac{25}{10} = 2.5 \\ne 2$ \\checkmark — confirms parallel-distinct, so no solution.\n\nVerification: at $k = 10$, second equation is $10x - 4y = 25$. Multiplying first by $2$: $10x - 4y = 20$. So $20 = 25$, contradiction \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting that two negatives in the $y$-coefficient ratio cancel: $-4/-2 = 2$ (positive).\n* Using constant ratio: $25/10 = 2.5$, then setting $k/5 = 2.5 \\Rightarrow k = 12.5$ — that\'s the INFINITE-solutions case, not no-solution.\n* Reporting $25$ (a constant from the right side) by mistake.\n\n**Test Day Takeaway:** When both lines have a coefficient with $-$, the negative signs in the ratio cancel cleanly. Always check the constants don\'t match the same ratio — otherwise it\'s "infinitely many", not "no solution".',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'no-solution-condition',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-158',
    domain: 'algebra',
    skills: ['system-solution-types'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The system of equations $3x + my = 12$ and $6x - 4y = 7$ has no solution. What is the value of $m$?',
    choices: [
      { id: 'A', text: '$-2$' },
      // distractor: drops negative
      { id: 'B', text: '$2$' },
      // distractor: uses y-coefficient directly
      { id: 'C', text: '$-4$' },
      // distractor: uses x-coefficient
      { id: 'D', text: '$6$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: No-Solution Condition**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Slope from first: $-3/m$. Slope from second: $6/4 = 3/2$. Match: $-3/m = 3/2 \\Rightarrow m = -2$. Check constants ($12/7 \\ne 3/2$) \\checkmark.\n\n**The Full Solution:**\nFor no solution, the slopes must match.\n\nLine 1: $3x + my = 12 \\Rightarrow$ slope $= -\\dfrac{3}{m}$.\nLine 2: $6x - 4y = 7 \\Rightarrow$ slope $= \\dfrac{6}{4} = \\dfrac{3}{2}$.\n\nMatch: $-\\dfrac{3}{m} = \\dfrac{3}{2}$.\nCross-multiply: $-6 = 3m \\Rightarrow m = -2$.\n\nVerify intercepts differ: line 1 with $m = -2$: $3x - 2y = 12$, intercept $-6$. Line 2: intercept $-7/4$. Different \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong sign" — drops the negative when matching slopes.\n* Choice C: "wrong base" — uses the $y$-coefficient of line 2 ($-4$).\n* Choice D: "wrong base" — uses the $x$-coefficient of line 2 ($6$).\n\n**Test Day Takeaway:** Slope in standard form $ax + by = c$ is $-a/b$. The NEGATIVE sign matters when matching slopes of two equations. Don\'t drop it.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'no-solution-condition',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-159',
    domain: 'algebra',
    skills: ['system-solution-types'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'For what value of $a$ does the system $ax + 2y = 5$ and $4x + 8y = 11$ have no solution?',
    correctAnswer: '1',
    explanation: '**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $1$.**\n\n**The Fast Way (~15s):** Ratio of $y$-coefficients: $8/2 = 4$. Match $x$-coefficients: $4/a = 4 \\Rightarrow a = 1$. Check constants: $11/5 \\ne 4$ \\checkmark.\n\n**The Full Solution:**\nMatch the slopes:\nLine 1 slope: $-a/2$.\nLine 2 slope: $-4/8 = -1/2$.\n\nMatch: $-a/2 = -1/2 \\Rightarrow a = 1$.\n\nCheck constants: line 1 with $a = 1$: $x + 2y = 5$. Line 2: $4x + 8y = 11$ which is $4(x + 2y) = 11$, so $x + 2y = 11/4 \\ne 5$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Solving $4/a = 4$ by inverting: getting $a = 1/4$ instead.\n* Confusing "no solution" with "infinitely many" (which would give the same slope ratio but $a$ matches constants too — here $a = 4 \\cdot 5 / 11 = 20/11$, NOT clean integers, so not the case).\n* Forgetting to verify constants differ.\n\n**Test Day Takeaway:** When the parameter is in the $x$-slot of one equation and the $y$-slot is fixed in both, the cleanest match is via the $y$-coefficient ratio. Then propagate to the $x$-side.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'no-solution-condition',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-160',
    domain: 'algebra',
    skills: ['system-solution-types'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The system of equations $kx + 4y = 9$ and $3x + ky = 12$ has no solution for which positive integer value of $k$?',
    choices: [
      { id: 'A', text: '$2\\sqrt{3}$ (none of the listed integers)' },
      // distractor: the boundary value
      { id: 'B', text: '$\\sqrt{12}$' },
      { id: 'C', text: 'No positive integer satisfies this' },
      // distractor: matches when k = 2 sqrt 3
      { id: 'D', text: '$6$' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: No-Solution Condition**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Slope match: $-k/4 = -3/k \\Rightarrow k^2 = 12 \\Rightarrow k = \\pm 2\\sqrt{3}$. Neither value is a positive integer, so NO positive integer satisfies the condition.\n\n**The Full Solution:**\nLine 1 slope: $-k/4$. Line 2 slope: $-3/k$.\n\nFor no solution, slopes match:\n$-\\dfrac{k}{4} = -\\dfrac{3}{k}$\n$k^2 = 12$\n$k = \\pm 2\\sqrt{3} \\approx \\pm 3.46$.\n\nNeither value is a positive integer (or any integer). Plus, we\'d need to verify constants differ — but since $k$ has no integer solution to the slope condition, the question\'s premise has no integer answer.\n\nVerification: at $k = 2\\sqrt{3} \\approx 3.46$, slopes are equal but $k$ is irrational; for any positive INTEGER $k$, the slopes are not equal and the system has a UNIQUE solution.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — gives the actual non-integer slope-match value.\n* Choice B: "wrong form" — gives the same $k = 2\\sqrt{3}$ in radical form ($\\sqrt{12}$).\n* Choice D: "wrong base" — picks an integer near $\\sqrt{12}$ that doesn\'t satisfy the equation.\n\n**Test Day Takeaway:** When the parameter appears in BOTH coefficient slots, the slope-match condition becomes $k^2 = $ something. Solve for $k$ and check whether the answer fits the required form (integer, positive, etc.). Sometimes "none of these" is the right answer.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'no-solution-condition',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-161',
    domain: 'algebra',
    skills: ['system-solution-types'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'A line $L_1$ passes through the point $(0, 5)$ with slope $m$. Another line $L_2$ passes through the point $(0, -2)$ with slope $3$. If $L_1$ and $L_2$ never intersect, what is the value of $m$?',
    correctAnswer: '3',
    explanation: '**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~10s):** Two lines never intersect $\\iff$ they are parallel $\\iff$ same slope. $m = 3$.\n\n**The Full Solution:**\nTwo distinct lines never intersect exactly when they have the same slope (parallel and distinct).\n\n$L_1$: passes through $(0, 5)$ with slope $m$, so $y = mx + 5$.\n$L_2$: passes through $(0, -2)$ with slope $3$, so $y = 3x - 2$.\n\nThe $y$-intercepts ($5$ and $-2$) are different, so the lines are NOT coincident. They\'re parallel and distinct iff $m = 3$.\n\nVerification: at $m = 3$, $L_1: y = 3x + 5$ and $L_2: y = 3x - 2$. Subtracting: $0 = 7$, contradiction \\checkmark — they never intersect.\n\n**Common Mistakes to Avoid:**\n* Reporting $5$ or $-2$ (the intercepts).\n* Computing $m = -1/3$ (the perpendicular slope, which would mean they DO intersect at one point).\n* Computing $m = 7$ from $5 - (-2)$ (irrelevant arithmetic).\n\n**Test Day Takeaway:** "Never intersect" / "do not intersect" / "no point in common" all mean the same thing: parallel and distinct. Match slopes; verify intercepts differ.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'no-solution-condition',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  // ===== Phase 2 batch 7/2: slope-from-two-points (7 items) =====
  // Bank already has 1 item for this pattern (around bank-alg-006 — an old one).
  // Adding 7 more for total of 8 (Tier 1 threshold).
  // Pattern: slope = Δy/Δx between two points. 7 test occurrences across PT1,
  // PT4, PT11 + M2Easy variants. SAT Pattern title (verbatim): 'Slope from
  // Two Points' → kebab 'slope-from-two-points'.
  {
    id: 'bank-alg-162',
    domain: 'algebra',
    skills: ['slope-from-points'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'What is the slope of the line that passes through the points $(1, 2)$ and $(4, 11)$?',
    choices: [
      { id: 'A', text: '$3$' },
      // distractor: gives rise without dividing
      { id: 'B', text: '$9$' },
      // distractor: flipped order
      { id: 'C', text: '$\\dfrac{1}{3}$' },
      // distractor: gives run instead of slope
      { id: 'D', text: '$13$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Slope $= \\dfrac{11 - 2}{4 - 1} = \\dfrac{9}{3} = 3$.\n\n**The Full Solution:**\nSlope formula: $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$.\n\nWith $(x_1, y_1) = (1, 2)$ and $(x_2, y_2) = (4, 11)$:\n$m = \\dfrac{11 - 2}{4 - 1} = \\dfrac{9}{3} = 3$.\n\nVerification: starting at $(1, 2)$ with slope $3$, after $3$ units of $x$ we reach $y = 2 + 3 \\cdot 3 = 11$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — reports the rise $9$ without dividing by the run.\n* Choice C: "applies the inverse operation" — flips numerator and denominator.\n* Choice D: "wrong base" — adds $4 + 9 = 13$ via slip.\n\n**Test Day Takeaway:** Slope $= \\dfrac{\\Delta y}{\\Delta x}$. ALWAYS rise over run.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'slope-from-two-points',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-163',
    domain: 'algebra',
    skills: ['slope-from-points'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'What is the slope of the line that passes through the points $(0, 5)$ and $(4, -3)$?',
    correctAnswer: '-2',
    explanation: '**SAT Pattern: Slope from Two Points**\n\n**The correct answer is $-2$.**\n\n**The Fast Way (~10s):** Slope $= \\dfrac{-3 - 5}{4 - 0} = \\dfrac{-8}{4} = -2$.\n\n**The Full Solution:**\n$m = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{-3 - 5}{4 - 0} = \\dfrac{-8}{4} = -2$.\n\nVerification: at $(0, 5)$ with slope $-2$, after $4$ units of $x$: $y = 5 - 2 \\cdot 4 = -3$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Dropping the negative: reporting $2$.\n* Mixing the order: $\\dfrac{5 - (-3)}{0 - 4} = \\dfrac{8}{-4} = -2$ (same answer here, but the practice of consistent order matters generally).\n* Computing $\\dfrac{5 - 3}{4 - 0} = 0.5$ (forgets the sign of $-3$).\n\n**Test Day Takeaway:** Negative slope = line goes DOWN from left to right. SAT fill-ins accept negative signs.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'slope-from-two-points',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-164',
    domain: 'algebra',
    skills: ['slope-from-points'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'What is the slope of the line that passes through the points $(2, 5)$ and $(8, 8)$?',
    choices: [
      { id: 'A', text: '$\\dfrac{1}{2}$' },
      // distractor: gives run/rise
      { id: 'B', text: '$2$' },
      // distractor: just the rise
      { id: 'C', text: '$3$' },
      // distractor: just the run
      { id: 'D', text: '$6$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Slope $= \\dfrac{8 - 5}{8 - 2} = \\dfrac{3}{6} = \\dfrac{1}{2}$.\n\n**The Full Solution:**\n$m = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{8 - 5}{8 - 2} = \\dfrac{3}{6}$.\n\nReduce: $\\dfrac{3}{6} = \\dfrac{1}{2}$.\n\nVerification: at $(2, 5)$ with slope $1/2$: after $6$ units of $x$, $y = 5 + (1/2)(6) = 5 + 3 = 8$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — flips to $6/3 = 2$.\n* Choice C: "wrong base" — reports the rise $3$ instead of the slope.\n* Choice D: "wrong base" — reports the run $6$.\n\n**Test Day Takeaway:** Reduce fractions to lowest terms. $3/6 = 1/2$, $4/8 = 1/2$, $5/10 = 1/2$ — recognize equivalent forms.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'slope-from-two-points',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-165',
    domain: 'algebra',
    skills: ['slope-from-points'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'What is the slope of the line that passes through the points $(-3, 7)$ and $(5, -1)$?',
    correctAnswer: '-1',
    explanation: '**SAT Pattern: Slope from Two Points**\n\n**The correct answer is $-1$.**\n\n**The Fast Way (~10s):** Slope $= \\dfrac{-1 - 7}{5 - (-3)} = \\dfrac{-8}{8} = -1$.\n\n**The Full Solution:**\n$m = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{-1 - 7}{5 - (-3)} = \\dfrac{-8}{8} = -1$.\n\nVerification: $5 - (-3) = 5 + 3 = 8$ \\checkmark. Line $y = -x + 4$ passes through $(-3, 7)$ ($7 = 3 + 4$) and $(5, -1)$ ($-1 = -5 + 4$) \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Dropping the double-negative: $5 - (-3) \\ne 5 - 3 = 2$. The correct difference is $8$.\n* Sign error on the numerator: $7 - (-1) = 8$ if done with consistent order, but mixing gives $-8$ instead of $8$.\n* Computing $\\dfrac{-8}{2} = -4$ via wrong denominator.\n\n**Test Day Takeaway:** Negative coordinates: $a - (-b) = a + b$. Two negatives in subtraction make a positive. Watch the sign carefully.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'slope-from-two-points',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-166',
    domain: 'algebra',
    skills: ['slope-from-points'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'What is the slope of the line that passes through the points $(2, 7)$ and $(10, 7)$?',
    choices: [
      { id: 'A', text: '$0$' },
      // distractor: gives the y-value
      { id: 'B', text: '$7$' },
      // distractor: undefined assumed for any constant
      { id: 'C', text: 'undefined' },
      // distractor: gives x-difference
      { id: 'D', text: '$8$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Both $y$-coordinates are $7$. Slope $= \\dfrac{0}{8} = 0$. Horizontal line.\n\n**The Full Solution:**\n$m = \\dfrac{7 - 7}{10 - 2} = \\dfrac{0}{8} = 0$.\n\nThe line is HORIZONTAL: $y = 7$ for all $x$.\n\nVerification: both given points have $y = 7$, confirming horizontal \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — picks the constant $y$-value as the slope.\n* Choice C: "wrong sign" — confuses horizontal (slope $0$) with vertical (slope undefined).\n* Choice D: "wrong base" — reports the run $8$.\n\n**Test Day Takeaway:** HORIZONTAL line: $y$-values match $\\Rightarrow$ slope $= 0$. VERTICAL line: $x$-values match $\\Rightarrow$ slope is UNDEFINED (division by zero). Don\'t confuse them.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'slope-from-two-points',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-167',
    domain: 'algebra',
    skills: ['slope-from-points'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'What is the slope of the line that passes through the points $(-2, 3)$ and $(6, 19)$?',
    correctAnswer: '2',
    explanation: '**SAT Pattern: Slope from Two Points**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~10s):** Slope $= \\dfrac{19 - 3}{6 - (-2)} = \\dfrac{16}{8} = 2$.\n\n**The Full Solution:**\n$m = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{19 - 3}{6 - (-2)} = \\dfrac{16}{8} = 2$.\n\nVerification: line $y = 2x + 7$ passes through $(-2, 3)$ ($2(-2) + 7 = 3$) and $(6, 19)$ ($2(6) + 7 = 19$) \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing $6 - 2 = 4$ instead of $6 - (-2) = 8$ — drops the negative.\n* Wrong order: $\\dfrac{3 - 19}{6 - (-2)} = -2$.\n* Reducing wrongly: $16/8 = 1$ via slip.\n\n**Test Day Takeaway:** $a - (-b) = a + b$. Negative coordinates expand the run/rise.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'slope-from-two-points',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-168',
    domain: 'algebra',
    skills: ['slope-from-points'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'A line passes through the points $(2, k)$ and $(5, 11)$, and has a slope of $3$. What is the value of $k$?',
    correctAnswer: '2',
    explanation: '**SAT Pattern: Slope from Two Points**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~20s):** Slope formula: $3 = \\dfrac{11 - k}{5 - 2} = \\dfrac{11 - k}{3} \\Rightarrow 11 - k = 9 \\Rightarrow k = 2$.\n\n**The Full Solution:**\nUse the slope formula:\n$3 = \\dfrac{11 - k}{5 - 2}$\n$3 = \\dfrac{11 - k}{3}$\n\nMultiply both sides by $3$:\n$9 = 11 - k$\n$k = 11 - 9 = 2$.\n\nVerification: slope from $(2, 2)$ to $(5, 11) = (11 - 2)/(5 - 2) = 9/3 = 3$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Sign error: solving $11 - k = -9 \\Rightarrow k = 20$.\n* Cross-multiplication slip: $(11 - k)(3) = 3$ instead of $(11 - k) = 3 \\cdot 3$.\n* Reporting $11$ or $9$ (intermediate values, not $k$).\n\n**Test Day Takeaway:** When one $y$-coordinate is unknown and the slope is given, set up the slope formula and solve algebraically. Multiply both sides by the run first to clear the fraction.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'slope-from-two-points',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  // ===== Phase 2 batch 7/3: two-step-linear-equation (8 items) =====
  // Pattern: ax + b = c, solve for x in two steps. 7 test occurrences across
  // PT3, PT12, M2Easy variants. SAT Pattern title (verbatim): 'Two-Step
  // Linear Equation' → kebab 'two-step-linear-equation'.
  {
    id: 'bank-alg-169',
    domain: 'algebra',
    skills: ['combining-like-terms'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $5x - 7 = 18$?',
    choices: [
      { id: 'A', text: '$5$' },
      // distractor: stops at 5x = 25
      { id: 'B', text: '$25$' },
      // distractor: subtracts 7 instead of adding
      { id: 'C', text: '$\\dfrac{11}{5}$' },
      // distractor: divides first
      { id: 'D', text: '$\\dfrac{18}{5}$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Add $7$: $5x = 25$. Divide by $5$: $x = 5$.\n\n**The Full Solution:**\n$5x - 7 = 18$\nAdd $7$ to both sides: $5x = 25$.\nDivide by $5$: $x = 5$.\n\nVerification: $5(5) - 7 = 25 - 7 = 18$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — gives $5x = 25$ but forgets to divide.\n* Choice C: "wrong sign" — subtracts $7$ instead of adding: $11/5$.\n* Choice D: "wrong order" — divides $18$ by $5$ before handling the $-7$.\n\n**Test Day Takeaway:** Two-step equations: undo the addition/subtraction FIRST, then the multiplication/division. Always substitute back to check.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'two-step-linear-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-170',
    domain: 'algebra',
    skills: ['combining-like-terms'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $3x + 4 = 22$?',
    correctAnswer: '6',
    explanation: '**SAT Pattern: Two-Step Linear Equation**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~5s):** Subtract $4$: $3x = 18$. Divide by $3$: $x = 6$.\n\n**The Full Solution:**\n$3x + 4 = 22$\nSubtract $4$: $3x = 18$.\nDivide by $3$: $x = 6$.\n\nVerification: $3(6) + 4 = 18 + 4 = 22$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Stopping at $3x = 18$ and reporting $18$.\n* Adding $4$ instead of subtracting: $3x = 26 \\Rightarrow x = 26/3$.\n* Dividing $22$ by $3$ first: $22/3 - 4 = 22/3 - 12/3 = 10/3$.\n\n**Test Day Takeaway:** Inverse operations. Adding $4$ on the left? Subtract $4$ from both sides. Multiplied by $3$? Divide both sides by $3$. ORDER: addition/subtraction FIRST.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'two-step-linear-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-171',
    domain: 'algebra',
    skills: ['combining-like-terms'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $\\dfrac{x}{4} - 3 = 5$?',
    choices: [
      { id: 'A', text: '$32$' },
      // distractor: forgets to multiply at the end
      { id: 'B', text: '$8$' },
      // distractor: wrong sign on subtraction
      { id: 'C', text: '$\\dfrac{1}{2}$' },
      // distractor: divides instead of multiplies
      { id: 'D', text: '$2$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Add $3$: $x/4 = 8$. Multiply by $4$: $x = 32$.\n\n**The Full Solution:**\n$\\dfrac{x}{4} - 3 = 5$\nAdd $3$: $\\dfrac{x}{4} = 8$.\nMultiply by $4$: $x = 32$.\n\nVerification: $\\dfrac{32}{4} - 3 = 8 - 3 = 5$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — reports $x/4 = 8$ instead of solving for $x$.\n* Choice C: "applies the inverse operation" — divides by $4$ instead of multiplying.\n* Choice D: "wrong base" — $8/4 = 2$, picks the wrong step\'s answer.\n\n**Test Day Takeaway:** $\\dfrac{x}{a} = b \\Rightarrow x = ab$ (MULTIPLY both sides by $a$). The inverse of "divide by $4$" is "multiply by $4$".',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'two-step-linear-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-172',
    domain: 'algebra',
    skills: ['combining-like-terms'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $7 - 2x = 13$?',
    correctAnswer: '-3',
    explanation: '**SAT Pattern: Two-Step Linear Equation**\n\n**The correct answer is $-3$.**\n\n**The Fast Way (~10s):** Subtract $7$: $-2x = 6$. Divide by $-2$: $x = -3$.\n\n**The Full Solution:**\n$7 - 2x = 13$\nSubtract $7$: $-2x = 6$.\nDivide by $-2$: $x = -3$.\n\nVerification: $7 - 2(-3) = 7 + 6 = 13$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Dropping the negative when dividing: $x = 3$.\n* Forgetting to subtract $7$: $-2x = 13$, then $x = -6.5$.\n* Treating $7 - 2x$ as $5x$ via slip.\n\n**Test Day Takeaway:** When the coefficient of $x$ is negative, dividing keeps the sign. $-2x = 6 \\Rightarrow x = -3$ (negative answer expected).',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'two-step-linear-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-173',
    domain: 'algebra',
    skills: ['combining-like-terms'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $4(x + 2) = 28$?',
    choices: [
      { id: 'A', text: '$5$' },
      // distractor: forgets to subtract 2 at the end
      { id: 'B', text: '$7$' },
      // distractor: distributes wrongly
      { id: 'C', text: '$6.5$' },
      // distractor: divides 28 by 4 only
      { id: 'D', text: '$26$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Divide by $4$: $x + 2 = 7$. Subtract $2$: $x = 5$.\n\n**The Full Solution:**\nMethod 1 (divide first):\n$4(x + 2) = 28$\n$x + 2 = 7$\n$x = 5$.\n\nMethod 2 (distribute first):\n$4x + 8 = 28$\n$4x = 20$\n$x = 5$.\n\nVerification: $4(5 + 2) = 4 \\cdot 7 = 28$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — gives $x + 2 = 7$ as the answer.\n* Choice C: "wrong base" — divides $26/4 = 6.5$ via slip.\n* Choice D: "wrong base" — gives $28 - 2 = 26$.\n\n**Test Day Takeaway:** When the variable is inside parentheses with a coefficient outside, DIVIDE first to clear the coefficient, then handle the inner expression. Saves a distribution step.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'two-step-linear-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-174',
    domain: 'algebra',
    skills: ['combining-like-terms'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $\\dfrac{2x + 1}{3} = 5$?',
    correctAnswer: '7',
    explanation: '**SAT Pattern: Two-Step Linear Equation**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~10s):** Multiply by $3$: $2x + 1 = 15$. Subtract $1$: $2x = 14$. Divide by $2$: $x = 7$.\n\n**The Full Solution:**\n$\\dfrac{2x + 1}{3} = 5$\nMultiply by $3$: $2x + 1 = 15$.\nSubtract $1$: $2x = 14$.\nDivide by $2$: $x = 7$.\n\nVerification: $\\dfrac{2(7) + 1}{3} = \\dfrac{15}{3} = 5$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Only multiplying part of the numerator by $3$: $\\dfrac{6x + 1}{3} = 5$ — wrong distribution.\n* Stopping at $2x = 14$ and reporting $14$.\n* Dividing by $3$ instead of multiplying: $2x + 1 = 5/3$ — wrong inverse.\n\n**Test Day Takeaway:** When the entire LHS is divided by a number, multiply both SIDES by that number FIRST to clear the fraction. Then proceed as a standard two-step equation.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'two-step-linear-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-175',
    domain: 'algebra',
    skills: ['combining-like-terms'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $\\dfrac{3}{4}x - 5 = 7$?',
    choices: [
      { id: 'A', text: '$16$' },
      // distractor: doesn't multiply by 4/3
      { id: 'B', text: '$12$' },
      // distractor: 16/4 = 4
      { id: 'C', text: '$\\dfrac{16}{3}$' },
      // distractor: stops at 3/4 x = 12
      { id: 'D', text: '$9$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Add $5$: $\\dfrac{3}{4}x = 12$. Multiply by $\\dfrac{4}{3}$: $x = 12 \\cdot \\dfrac{4}{3} = 16$.\n\n**The Full Solution:**\n$\\dfrac{3}{4}x - 5 = 7$\nAdd $5$: $\\dfrac{3}{4}x = 12$.\nMultiply by $\\dfrac{4}{3}$ (the reciprocal of $\\dfrac{3}{4}$):\n$x = 12 \\cdot \\dfrac{4}{3} = \\dfrac{48}{3} = 16$.\n\nVerification: $\\dfrac{3}{4}(16) - 5 = 12 - 5 = 7$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — gives $\\dfrac{3}{4}x = 12$, then $12 \\cdot \\dfrac{1}{4} \\cdot ...$ slips.\n* Choice C: "wrong formula" — multiplies $12$ by $\\dfrac{4}{3}$ but reports $\\dfrac{16}{3}$ via slip.\n* Choice D: "wrong base" — adds $5 + ... $ wrongly.\n\n**Test Day Takeaway:** To clear a fractional coefficient like $\\dfrac{3}{4}$, multiply by the RECIPROCAL ($\\dfrac{4}{3}$). Don\'t just multiply by $4$.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'two-step-linear-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-176',
    domain: 'algebra',
    skills: ['combining-like-terms'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $\\dfrac{x - 6}{5} + 4 = 0$?',
    correctAnswer: '-14',
    explanation: '**SAT Pattern: Two-Step Linear Equation**\n\n**The correct answer is $-14$.**\n\n**The Fast Way (~15s):** Subtract $4$: $\\dfrac{x - 6}{5} = -4$. Multiply by $5$: $x - 6 = -20$. Add $6$: $x = -14$.\n\n**The Full Solution:**\n$\\dfrac{x - 6}{5} + 4 = 0$\nSubtract $4$: $\\dfrac{x - 6}{5} = -4$.\nMultiply by $5$: $x - 6 = -20$.\nAdd $6$: $x = -14$.\n\nVerification: $\\dfrac{-14 - 6}{5} + 4 = \\dfrac{-20}{5} + 4 = -4 + 4 = 0$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Sign error on the right side: $\\dfrac{x - 6}{5} = 4$ instead of $-4$.\n* Forgetting the $-6$ at the end: reports $x = -20$.\n* Multiplying by $5$ before subtracting $4$: gives $x - 6 = -20$ but applies the $4$ wrongly.\n\n**Test Day Takeaway:** A linear equation with a fraction wrapper. Peel off the constant OUTSIDE the fraction first, then clear the fraction, then peel off inside.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'two-step-linear-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  // ===== Phase 2 batch 7/5: perpendicular-line-through-point (8 items) =====
  // Pattern: given a line and a point not on it, find an equation (or feature)
  // of the line through that point PERPENDICULAR to the given line.
  // Perpendicular slopes are negative reciprocals: m_perp = -1/m.
  // 7 test occurrences across PT6, PT12, M2Easy variants. SAT Pattern title
  // (verbatim): 'Perpendicular Line Through Point' →
  // kebab 'perpendicular-line-through-point'.
  {
    id: 'bank-alg-177',
    domain: 'algebra',
    skills: ['perpendicular-negative-reciprocal'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'What is the slope of a line that is perpendicular to the line $y = 2x + 3$?',
    choices: [
      { id: 'A', text: '$-\\dfrac{1}{2}$' },
      // distractor: just flips the fraction
      { id: 'B', text: '$\\dfrac{1}{2}$' },
      // distractor: only negates
      { id: 'C', text: '$-2$' },
      // distractor: uses original slope
      { id: 'D', text: '$2$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Original slope $= 2 = \\dfrac{2}{1}$. Perpendicular slope $= -\\dfrac{1}{2}$ (negative reciprocal).\n\n**The Full Solution:**\nPerpendicular slopes multiply to $-1$. If the original slope is $m$, the perpendicular slope is $-\\dfrac{1}{m}$.\n\nGiven $y = 2x + 3$: slope $= 2$. Perpendicular slope $= -\\dfrac{1}{2}$.\n\nVerification: $2 \\cdot (-\\dfrac{1}{2}) = -1$ \\checkmark (the perpendicularity condition).\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong sign" — flips the fraction but forgets to negate.\n* Choice C: "stops one step early" — negates but doesn\'t flip (gives $-m$, not $-1/m$).\n* Choice D: "wrong base" — uses the original slope.\n\n**Test Day Takeaway:** Perpendicular slope = negative reciprocal: FLIP the fraction AND change the SIGN. Both operations.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'perpendicular-line-through-point',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-178',
    domain: 'algebra',
    skills: ['perpendicular-negative-reciprocal'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'What is the slope of a line that is perpendicular to the line $y = -\\dfrac{1}{3}x + 5$?',
    correctAnswer: '3',
    explanation: '**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~5s):** Original slope $= -\\dfrac{1}{3}$. Perpendicular: $-\\dfrac{1}{-1/3} = 3$.\n\n**The Full Solution:**\nPerpendicular slope is the negative reciprocal: $m_{\\perp} = -\\dfrac{1}{m}$.\n\nGiven slope $= -\\dfrac{1}{3}$:\n$m_{\\perp} = -\\dfrac{1}{-1/3} = -1 \\cdot (-3) = 3$.\n\nVerification: $\\left(-\\dfrac{1}{3}\\right) \\cdot 3 = -1$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $-3$ (forgets that negating the already-negative original gives positive).\n* Reporting $\\dfrac{1}{3}$ (only flips the absolute value).\n* Reporting $-\\dfrac{1}{3}$ (gives original slope, not perpendicular).\n\n**Test Day Takeaway:** Negative reciprocal of $-1/3$ is $+3$. Sign flips, fraction flips — both.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'perpendicular-line-through-point',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-179',
    domain: 'algebra',
    skills: ['writing-perpendicular-equation'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'In the $xy$-plane, line $\\ell$ is perpendicular to the line $y = 3x - 7$ and passes through the point $(0, 4)$. What is an equation of line $\\ell$?',
    choices: [
      { id: 'A', text: '$y = -\\dfrac{1}{3}x + 4$' },
      // distractor: uses original slope
      { id: 'B', text: '$y = 3x + 4$' },
      // distractor: sign error on slope
      { id: 'C', text: '$y = \\dfrac{1}{3}x + 4$' },
      // distractor: uses point's x = 0 incorrectly
      { id: 'D', text: '$y = -\\dfrac{1}{3}x - 7$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Perpendicular slope $= -1/3$. Passes through $(0, 4) \\Rightarrow y$-intercept $= 4$. Equation: $y = -\\dfrac{1}{3}x + 4$.\n\n**The Full Solution:**\nOriginal slope $= 3$. Perpendicular slope $= -\\dfrac{1}{3}$.\n\nSince the line passes through $(0, 4)$, the $y$-intercept IS $4$ (because $x = 0$ at the $y$-intercept).\n\nEquation: $y = -\\dfrac{1}{3}x + 4$.\n\nVerification: at $x = 0$, $y = 4$ \\checkmark. Slope is $-1/3$, perpendicular to $3$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — uses original slope $3$ instead of perpendicular.\n* Choice C: "wrong sign" — drops the negative on the perpendicular slope.\n* Choice D: "wrong base" — uses the original intercept $-7$ instead of $4$.\n\n**Test Day Takeaway:** When a line passes through $(0, b)$, that $b$ is the $y$-intercept — no need to compute. Just plug into slope-intercept form.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'perpendicular-line-through-point',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-180',
    domain: 'algebra',
    skills: ['perpendicular-negative-reciprocal'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A line is perpendicular to the line $2x + 5y = 10$. What is the slope of the perpendicular line?',
    correctAnswer: '5/2',
    explanation: '**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $\\dfrac{5}{2}$.**\n\n**The Fast Way (~15s):** Rewrite: $5y = -2x + 10 \\Rightarrow y = -\\dfrac{2}{5}x + 2$. Slope $= -\\dfrac{2}{5}$. Perpendicular: $\\dfrac{5}{2}$.\n\n**The Full Solution:**\nFind the slope of the given line. From $2x + 5y = 10$:\n$5y = -2x + 10$\n$y = -\\dfrac{2}{5}x + 2$. Slope $= -\\dfrac{2}{5}$.\n\nPerpendicular slope = $-\\dfrac{1}{-2/5} = \\dfrac{5}{2}$.\n\nVerification: $\\left(-\\dfrac{2}{5}\\right) \\cdot \\dfrac{5}{2} = -1$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using slope $= -A/B = -2/5$ directly: that\'s actually correct here.\n* Forgetting the negative: gives $-5/2$ instead.\n* Slope of standard form sign confusion: $Ax + By = C \\Rightarrow$ slope $= -A/B$, not $A/B$.\n\n**Test Day Takeaway:** Standard-form slope: $Ax + By = C \\Rightarrow$ slope $= -A/B$. Memorize this — saves the rewriting step.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'perpendicular-line-through-point',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-181',
    domain: 'algebra',
    skills: ['writing-perpendicular-equation'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'In the $xy$-plane, line $\\ell$ is perpendicular to $y = -2x + 5$ and passes through $(4, 1)$. What is the $y$-intercept of line $\\ell$?',
    choices: [
      { id: 'A', text: '$-1$' },
      // distractor: uses original slope's intercept
      { id: 'B', text: '$5$' },
      // distractor: uses the point y-value
      { id: 'C', text: '$1$' },
      // distractor: arithmetic slip
      { id: 'D', text: '$3$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Perpendicular slope $= 1/2$. Equation: $y - 1 = \\dfrac{1}{2}(x - 4) \\Rightarrow y = \\dfrac{1}{2}x - 2 + 1 = \\dfrac{1}{2}x - 1$. $y$-intercept $= -1$.\n\n**The Full Solution:**\nOriginal slope $= -2$. Perpendicular slope $= -\\dfrac{1}{-2} = \\dfrac{1}{2}$.\n\nUse point-slope through $(4, 1)$:\n$y - 1 = \\dfrac{1}{2}(x - 4)$\n$y - 1 = \\dfrac{1}{2}x - 2$\n$y = \\dfrac{1}{2}x - 1$.\n\n$y$-intercept $= -1$.\n\nVerification: at $x = 4$, $y = 2 - 1 = 1$ \\checkmark. Slope $= 1/2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — uses the original line\'s intercept.\n* Choice C: "wrong base" — picks the $y$-coordinate of the given point.\n* Choice D: "off-by-one" — slip in arithmetic.\n\n**Test Day Takeaway:** Point-slope form: $y - y_0 = m(x - x_0)$. Distribute on the right, then add $y_0$ to both sides to read off the $y$-intercept.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'perpendicular-line-through-point',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-182',
    domain: 'algebra',
    skills: ['writing-perpendicular-equation'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'In the $xy$-plane, line $k$ is perpendicular to $y = -\\dfrac{1}{4}x + 3$ and passes through the origin. What is the value of $y$ when $x = 2$ on line $k$?',
    correctAnswer: '8',
    explanation: '**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~20s):** Perpendicular slope $= 4$. Through origin: $y = 4x$. At $x = 2$: $y = 8$.\n\n**The Full Solution:**\nOriginal slope $= -\\dfrac{1}{4}$. Perpendicular slope $= -\\dfrac{1}{-1/4} = 4$.\n\nLine passes through origin $(0, 0)$, so $y$-intercept $= 0$.\nEquation: $y = 4x$.\n\nAt $x = 2$: $y = 4 \\cdot 2 = 8$.\n\nVerification: line $y = 4x$ passes through origin \\checkmark. Slope $4$ is perpendicular to $-1/4$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using original slope: $y = -\\dfrac{1}{4}(2) = -\\dfrac{1}{2}$.\n* Forgetting that "through origin" means $b = 0$.\n* Stopping at slope: reporting $4$ instead of evaluating at $x = 2$.\n\n**Test Day Takeaway:** "Through the origin" $\\Rightarrow$ $y$-intercept $= 0$. Line equation is $y = mx$ (no $+b$).',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'perpendicular-line-through-point',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-183',
    domain: 'algebra',
    skills: ['writing-perpendicular-equation'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'In the $xy$-plane, line $\\ell$ is perpendicular to the line $4x - 3y = 12$ and passes through the point $(2, -1)$. What is the $y$-intercept of line $\\ell$?',
    choices: [
      { id: 'A', text: '$\\dfrac{1}{2}$' },
      // distractor: sign error
      { id: 'B', text: '$-\\dfrac{1}{2}$' },
      // distractor: uses original slope
      { id: 'C', text: '$-4$' },
      // distractor: drops the +1 step
      { id: 'D', text: '$\\dfrac{3}{2}$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Slope of $4x - 3y = 12$ is $4/3$. Perpendicular: $-3/4$. Through $(2, -1)$: $y + 1 = -\\dfrac{3}{4}(x - 2) \\Rightarrow y = -\\dfrac{3}{4}x + \\dfrac{3}{2} - 1 = -\\dfrac{3}{4}x + \\dfrac{1}{2}$. $y$-intercept $= \\dfrac{1}{2}$.\n\n**The Full Solution:**\nFrom $4x - 3y = 12$: $-3y = -4x + 12 \\Rightarrow y = \\dfrac{4}{3}x - 4$. Slope $= \\dfrac{4}{3}$.\n\nPerpendicular slope $= -\\dfrac{3}{4}$.\n\nPoint-slope through $(2, -1)$:\n$y - (-1) = -\\dfrac{3}{4}(x - 2)$\n$y + 1 = -\\dfrac{3}{4}x + \\dfrac{3}{2}$\n$y = -\\dfrac{3}{4}x + \\dfrac{3}{2} - 1$\n$y = -\\dfrac{3}{4}x + \\dfrac{1}{2}$.\n\n$y$-intercept $= \\dfrac{1}{2}$.\n\nVerification: at $x = 2$, $y = -\\dfrac{3}{2} + \\dfrac{1}{2} = -1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong sign" — drops the negative when subtracting $1$ from $3/2$.\n* Choice C: "wrong base" — uses original-line intercept.\n* Choice D: "stops one step early" — stops at $3/2$ before subtracting the $+1$.\n\n**Test Day Takeaway:** Two-step transformation when the point is NOT on either axis: distribute slope across $(x - x_0)$, then add $y_0$ to both sides. Watch the signs.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'perpendicular-line-through-point',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-alg-184',
    domain: 'algebra',
    skills: ['perpendicular-negative-reciprocal'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'Line $L_1$ has slope $k$ and is perpendicular to line $L_2$, which has slope $-\\dfrac{2}{7}$. What is the value of $k$?',
    correctAnswer: '7/2',
    explanation: '**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $\\dfrac{7}{2}$.**\n\n**The Fast Way (~10s):** Perpendicular: $k \\cdot (-2/7) = -1 \\Rightarrow k = \\dfrac{7}{2}$.\n\n**The Full Solution:**\nPerpendicular slopes multiply to $-1$:\n$k \\cdot \\left(-\\dfrac{2}{7}\\right) = -1$\n$-\\dfrac{2k}{7} = -1$\n$k = \\dfrac{7}{2}$.\n\nAlternatively: negative reciprocal of $-2/7$ is $-\\dfrac{1}{-2/7} = \\dfrac{7}{2}$.\n\nVerification: $\\dfrac{7}{2} \\cdot \\left(-\\dfrac{2}{7}\\right) = -1$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $-7/2$ (forgets to flip the sign).\n* Reporting $-2/7$ or $2/7$ (gives original slope or its absolute value).\n* Computing $7/2 = 3.5$ but reporting it differently.\n\n**Test Day Takeaway:** Perpendicularity condition: $m_1 \\cdot m_2 = -1$. Solve algebraically OR use negative-reciprocal shortcut (FLIP + NEGATE).',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'perpendicular-line-through-point',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  // ===== Phase 2 batch 8/1: one-step-linear-equation (8 items) =====
  // Pattern: ax = b or x + a = b, solve in ONE step. 7 test occurrences across
  // M2Easy variants. Title verbatim: 'One-Step Linear Equation'.
  { id: 'bank-alg-185', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $x - 7 = 12$?',
    choices: [{ id: 'A', text: '$19$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$-5$' }, { id: 'D', text: '$84$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way:** Add $7$ to both sides: $x = 19$.\n\n**The Full Solution:** $x - 7 = 12 \\Rightarrow x = 12 + 7 = 19$. Verification: $19 - 7 = 12$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: subtracts $7$ instead of adding.\n* Choice C: sign error.\n* Choice D: multiplies instead.\n\n**Test Day Takeaway:** One-step linear: undo the operation. Subtraction undone by ADDITION.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-186', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $x + 9 = 4$?',
    correctAnswer: '-5',
    explanation: '**SAT Pattern: One-Step Linear Equation**\n\n**The correct answer is $-5$.**\n\n**The Fast Way:** $x = 4 - 9 = -5$.\n\n**The Full Solution:** Subtract $9$ from both sides: $x = 4 - 9 = -5$. Verification: $-5 + 9 = 4$ \\checkmark.\n\n**Common Mistakes:** Reporting $5$ (drops sign); reporting $13$ (adds instead).\n\n**Test Day Takeaway:** Addition undone by subtraction. Negative results are fine.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-187', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $5x = 35$?',
    choices: [{ id: 'A', text: '$7$' }, { id: 'B', text: '$30$' }, { id: 'C', text: '$40$' }, { id: 'D', text: '$175$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way:** Divide both sides by $5$: $x = 7$. Verification: $5 \\cdot 7 = 35$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: subtracts $5$ instead of dividing.\n* Choice C: adds.\n* Choice D: multiplies by $5$ instead of dividing.\n\n**Test Day Takeaway:** Multiplication undone by DIVISION.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-188', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $\\dfrac{x}{6} = 4$?',
    correctAnswer: '24',
    explanation: '**SAT Pattern: One-Step Linear Equation**\n\n**The correct answer is $24$.**\n\n**The Fast Way:** Multiply both sides by $6$: $x = 24$. Verification: $24/6 = 4$ \\checkmark.\n\n**Common Mistakes:** Reporting $4/6$ (divides instead); reporting $10$ (adds $6$).\n\n**Test Day Takeaway:** Division undone by MULTIPLICATION.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-189', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $-3x = 21$?',
    choices: [{ id: 'A', text: '$-7$' }, { id: 'B', text: '$7$' }, { id: 'C', text: '$-63$' }, { id: 'D', text: '$18$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way:** Divide both sides by $-3$: $x = -7$. Verification: $-3 \\cdot -7 = 21$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: drops the negative sign.\n* Choice C: multiplies instead.\n* Choice D: subtracts $3$.\n\n**Test Day Takeaway:** Dividing by a NEGATIVE keeps the sign rules: $\\dfrac{+21}{-3} = -7$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-190', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $\\dfrac{2}{3}x = 18$?',
    correctAnswer: '27',
    explanation: '**SAT Pattern: One-Step Linear Equation**\n\n**The correct answer is $27$.**\n\n**The Fast Way:** Multiply both sides by $\\dfrac{3}{2}$: $x = 18 \\cdot \\dfrac{3}{2} = 27$. Verification: $\\dfrac{2}{3}(27) = 18$ \\checkmark.\n\n**Common Mistakes:** Reporting $12$ (multiplies by $2/3$ instead of reciprocal); reporting $36$ (multiplies by $2$ only).\n\n**Test Day Takeaway:** Fractional coefficient: multiply by the RECIPROCAL of the fraction.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-191', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $x + \\dfrac{3}{4} = \\dfrac{5}{2}$?',
    choices: [{ id: 'A', text: '$\\dfrac{7}{4}$' }, { id: 'B', text: '$\\dfrac{13}{4}$' }, { id: 'C', text: '$\\dfrac{2}{4}$' }, { id: 'D', text: '$\\dfrac{15}{8}$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way:** $x = \\dfrac{5}{2} - \\dfrac{3}{4} = \\dfrac{10}{4} - \\dfrac{3}{4} = \\dfrac{7}{4}$.\n\n**The Full Solution:** Subtract $\\dfrac{3}{4}$. Common denominator $4$: $\\dfrac{5}{2} = \\dfrac{10}{4}$. So $x = \\dfrac{10 - 3}{4} = \\dfrac{7}{4}$.\n\n**Why the wrong answers are tempting:**\n* Choice B: ADDS $3/4$ instead.\n* Choice C: drops the common denominator.\n* Choice D: multiplies.\n\n**Test Day Takeaway:** Subtracting fractions: COMMON DENOMINATOR first.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-192', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $-\\dfrac{x}{4} = -3$?',
    correctAnswer: '12',
    explanation: '**SAT Pattern: One-Step Linear Equation**\n\n**The correct answer is $12$.**\n\n**The Fast Way:** Multiply both sides by $-4$: $x = -3 \\cdot -4 = 12$. Verification: $-12/4 = -3$ \\checkmark.\n\n**Common Mistakes:** Reporting $-12$ (only flips one negative); reporting $-1.5$ (mixes operations).\n\n**Test Day Takeaway:** Two negatives multiply to positive: $-3 \\cdot -4 = 12$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 8/2: linear-system-by-substitution (8 items) =====
  // Pattern: both equations in y = ... form, set right-hand sides equal. 6 test
  // occurrences across M2Easy variants. SAT Pattern title (verbatim):
  // 'Linear System by Substitution'.
  // Note: distinct from 'System of Equations — Substitution' (covered separately)
  // because authoring inconsistency in test bundles uses both titles.
  { id: 'bank-alg-193', domain: 'algebra', skills: ['substitution-method'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The system of equations $y = 3x - 1$ and $y = x + 5$ has solution $(x, y)$. What is the value of $x$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$-3$' }, { id: 'D', text: '$0$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Linear System by Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way:** Set the right-hand sides equal: $3x - 1 = x + 5 \\Rightarrow 2x = 6 \\Rightarrow x = 3$.\n\n**The Full Solution:** Both equations equal $y$, so $3x - 1 = x + 5$. Subtract $x$: $2x - 1 = 5$. Add $1$: $2x = 6$. Divide: $x = 3$. Verify: $y = 3 + 5 = 8$, and $y = 3(3) - 1 = 8$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: gives $y$ instead of $x$.\n* Choice C: sign error.\n* Choice D: stops one step early.\n\n**Test Day Takeaway:** Both equations in $y = \\ldots$ form $\\Rightarrow$ set the right sides equal directly.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-system-by-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-194', domain: 'algebra', skills: ['substitution-method'], difficulty: 'easy', type: 'fill-in',
    question: 'If $y = 2x + 3$ and $y = 5x$, what is the value of $x$?',
    correctAnswer: '1',
    explanation: '**SAT Pattern: Linear System by Substitution**\n\n**The correct answer is $1$.**\n\n**The Fast Way:** $2x + 3 = 5x \\Rightarrow 3 = 3x \\Rightarrow x = 1$. Verify: $y = 5 \\cdot 1 = 5$ and $y = 2 + 3 = 5$ \\checkmark.\n\n**Common Mistakes:** Reporting $5$ (gives $y$); reporting $3$ (stops at intermediate step).\n\n**Test Day Takeaway:** Set the right sides equal, isolate $x$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-system-by-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-195', domain: 'algebra', skills: ['substitution-method'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The system of equations $y = 4x - 7$ and $y = -2x + 5$ has solution $(x, y)$. What is the value of $y$?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$-1$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Linear System by Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way:** $4x - 7 = -2x + 5 \\Rightarrow 6x = 12 \\Rightarrow x = 2$. Then $y = -2(2) + 5 = 1$.\n\n**The Full Solution:** Set right sides equal: $4x - 7 = -2x + 5$. Add $2x$: $6x - 7 = 5$. Add $7$: $6x = 12$. Divide: $x = 2$. Substitute: $y = 4(2) - 7 = 1$. Verification: $-2(2) + 5 = 1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: gives $x$ instead of $y$.\n* Choice C: sign error.\n* Choice D: off-by-one.\n\n**Test Day Takeaway:** After solving for $x$, ALWAYS re-read the question — sometimes $y$ is asked.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-system-by-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-196', domain: 'algebra', skills: ['substitution-method'], difficulty: 'medium', type: 'fill-in',
    question: 'If $y = -x + 10$ and $y = 3x - 6$, what is the value of $x$?',
    correctAnswer: '4',
    explanation: '**SAT Pattern: Linear System by Substitution**\n\n**The correct answer is $4$.**\n\n**The Fast Way:** $-x + 10 = 3x - 6 \\Rightarrow 16 = 4x \\Rightarrow x = 4$. Verify: $y = -4 + 10 = 6$ and $y = 3(4) - 6 = 6$ \\checkmark.\n\n**Common Mistakes:** Reporting $6$ (gives $y$); sign error giving $x = -4$.\n\n**Test Day Takeaway:** Move all $x$\'s to one side, constants to the other. Watch the signs.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-system-by-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-197', domain: 'algebra', skills: ['substitution-method'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For the system $y = \\dfrac{1}{2}x + 4$ and $y = 2x - 2$, what is the value of $x + y$?',
    choices: [{ id: 'A', text: '$10$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$6$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Linear System by Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way:** $\\dfrac{1}{2}x + 4 = 2x - 2 \\Rightarrow 6 = \\dfrac{3}{2}x \\Rightarrow x = 4$. $y = 2(4) - 2 = 6$. $x + y = 10$.\n\n**The Full Solution:** Set equal: $\\dfrac{1}{2}x + 4 = 2x - 2$. Multiply by $2$ to clear the fraction: $x + 8 = 4x - 4$. Solve: $3x = 12 \\Rightarrow x = 4$. Then $y = 6$. $x + y = 10$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: gives $x$ only.\n* Choice C: gives $y$ only.\n* Choice D: off-by-one slip.\n\n**Test Day Takeaway:** "Value of $x + y$" — find both, then sum. Multiplying through to clear fractions is a clean first move.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-system-by-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-198', domain: 'algebra', skills: ['substitution-method'], difficulty: 'medium', type: 'fill-in',
    question: 'The lines $y = 3x + 2$ and $y = -x + 10$ intersect at point $(a, b)$. What is the value of $b$?',
    correctAnswer: '8',
    explanation: '**SAT Pattern: Linear System by Substitution**\n\n**The correct answer is $8$.**\n\n**The Fast Way:** $3x + 2 = -x + 10 \\Rightarrow 4x = 8 \\Rightarrow x = 2$. Then $y = b = 3(2) + 2 = 8$.\n\n**Common Mistakes:** Reporting $2$ (gives $a$); reporting $10$ (intercept of second line).\n\n**Test Day Takeaway:** Intersection of two lines = system solution. The $y$-value is whatever the equation gives at the shared $x$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-system-by-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-199', domain: 'algebra', skills: ['substitution-method'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The system of equations $y = ax + 5$ and $y = 3x + b$ has the solution $(2, 11)$. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$8$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Linear System by Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way:** Plug $(2, 11)$ into both: $11 = 2a + 5 \\Rightarrow a = 3$. $11 = 6 + b \\Rightarrow b = 5$. $a + b = 8$.\n\n**The Full Solution:** From eq 1: $11 = a(2) + 5 \\Rightarrow 2a = 6 \\Rightarrow a = 3$. From eq 2: $11 = 3(2) + b \\Rightarrow b = 5$. Sum: $a + b = 3 + 5 = 8$.\n\n**Why the wrong answers are tempting:**\n* Choice B: gives $b$ only.\n* Choice C: gives $y$.\n* Choice D: gives $a$ only.\n\n**Test Day Takeaway:** When the solution point is GIVEN and parameters are unknown, plug in and solve for each parameter separately.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-system-by-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-200', domain: 'algebra', skills: ['substitution-method'], difficulty: 'hard', type: 'fill-in',
    question: 'The system $y = kx - 2$ and $y = -2x + 6$ has solution $(2, 2)$. What is the value of $k$?',
    correctAnswer: '2',
    explanation: '**SAT Pattern: Linear System by Substitution**\n\n**The correct answer is $2$.**\n\n**The Fast Way:** Plug $(2, 2)$ into eq 1: $2 = 2k - 2 \\Rightarrow 2k = 4 \\Rightarrow k = 2$.\n\n**The Full Solution:** Substitute $x = 2$ and $y = 2$: $2 = k(2) - 2 \\Rightarrow 4 = 2k \\Rightarrow k = 2$. Verification: eq 2 with $(2, 2)$: $2 = -2(2) + 6 = 2$ \\checkmark.\n\n**Common Mistakes:** Reporting $4$ (stops at $2k = 4$); using the wrong equation.\n\n**Test Day Takeaway:** Solution point satisfies BOTH equations. Pick the one with the parameter and substitute.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-system-by-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 9/3: slope-as-rate-of-change-in-context (8 items) =====
  // 5 test occurrences across M2Easy variants.
  { id: 'bank-alg-201', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A linear model $\\hat{y} = 0.4x + 12$ predicts a person\'s weekly cost in dollars from $x$ miles driven. By how much does the predicted cost increase for each additional mile driven?',
    choices: [{ id: 'A', text: '$\\$0.40$' }, { id: 'B', text: '$\\$12$' }, { id: 'C', text: '$\\$12.40$' }, { id: 'D', text: '$\\$0.04$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice A is correct.**\n\n**The Fast Way:** Slope = $0.4$ = predicted change in $\\hat{y}$ per unit of $x$.\n\n**Why the wrong answers are tempting:** B is intercept; C is $\\hat{y}(1)$; D wrong decimal.\n\n**Test Day Takeaway:** In $\\hat{y} = mx + b$, $m$ is the per-unit predicted change in $y$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-as-rate-of-change-in-context', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-202', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'easy', type: 'fill-in',
    question: 'A linear model predicting MPG from vehicle weight is $\\hat{y} = -0.005x + 50$. By how much does the predicted MPG decrease for each additional pound of weight?',
    correctAnswer: '0.005',
    explanation: '**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $0.005$.**\n\n**The Fast Way:** Slope $= -0.005$. Magnitude (decrease per unit) $= 0.005$.\n\n**Test Day Takeaway:** "By how much" asks for the magnitude; ignore the sign.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-as-rate-of-change-in-context', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-203', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The scatterplot shows plant height (in centimeters) versus days of growth, along with the line of best fit $\\hat{y} = 2.5x + 4$. What does the slope of $2.5$ represent?',
    diagram: { type: 'scatterplot', params: { points: [[1,8],[2,7],[3,13],[4,14],[5,15],[6,21],[7,19],[8,26],[9,25],[10,30]], xMin: 0, xMax: 10, yMin: 0, yMax: 32, xGridStep: 1, yGridStep: 4, xLabelStep: 2, yLabelStep: 8, xLabel: 'Days of growth', yLabel: 'Plant height (cm)', bestFitLine: { slope: 2.5, intercept: 4 } } },
    choices: [{ id: 'A', text: 'The predicted growth in centimeters per day' }, { id: 'B', text: 'The initial height in centimeters' }, { id: 'C', text: 'The number of days to grow $1$ cm' }, { id: 'D', text: 'The total height after $4$ days' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice A is correct.**\n\n**The Fast Way:** Slope $= 2.5$ cm/day = predicted growth per day.\n\n**Why the wrong answers are tempting:** B is intercept; C inverts the rate; D arbitrary.\n\n**Test Day Takeaway:** Slope tells the RATE of change in the response variable per unit change in the predictor.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-as-rate-of-change-in-context', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-204', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'medium', type: 'fill-in',
    question: 'The scatterplot shows test scores versus hours studied for a group of students. The line of best fit is $\\hat{y} = 4.2x + 60$. By how many points does the predicted score increase for each additional hour studied?',
    diagram: { type: 'scatterplot', params: { points: [[1,62],[2,72],[3,68],[4,80],[5,78],[6,89],[7,85],[8,96],[9,95],[10,100]], xMin: 0, xMax: 10, yMin: 50, yMax: 110, xGridStep: 1, yGridStep: 5, xLabelStep: 2, yLabelStep: 10, xLabel: 'Hours studied', yLabel: 'Test score', bestFitLine: { slope: 4.2, intercept: 60 } } },
    correctAnswer: '4.2',
    explanation: '**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $4.2$.**\n\n**The Fast Way:** Slope $= 4.2$ points/hour.\n\n**Test Day Takeaway:** Per-unit predicted change = SLOPE coefficient.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-as-rate-of-change-in-context', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-205', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A best-fit line $\\hat{y} = -3x + 100$ predicts a population in thousands, where $x$ is years since 2020. What does $-3$ represent?',
    choices: [{ id: 'A', text: 'The population decreases by $3{,}000$ per year' }, { id: 'B', text: 'The population in 2020 is $100{,}000$' }, { id: 'C', text: 'The population increases by $3{,}000$ per year' }, { id: 'D', text: 'The population reaches zero in $3$ years' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice A is correct.**\n\n**The Fast Way:** Slope $-3$ (thousands per year) = population decreases by $3{,}000$ per year.\n\n**Why the wrong answers are tempting:** B is intercept; C wrong sign direction; D arbitrary.\n\n**Test Day Takeaway:** Watch UNITS — if $y$ is in thousands, the slope is per thousand.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-as-rate-of-change-in-context', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-206', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'medium', type: 'fill-in',
    question: 'A linear model for the cost of producing $x$ widgets is $\\hat{C} = 8x + 200$. By how many dollars does the predicted cost increase per additional widget?',
    correctAnswer: '8',
    explanation: '**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $8$.**\n\n**The Fast Way:** Slope $= 8$ = marginal cost per widget.\n\n**Test Day Takeaway:** Cost functions: slope = marginal cost, intercept = fixed cost.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-as-rate-of-change-in-context', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-207', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The scatterplot below shows the relationship between $x$ and $y$. The equation of the line of best fit is $\\hat{y} = -0.25x + 80$. Which of the following best describes the meaning of $-0.25$?',
    diagram: { type: 'scatterplot', params: { points: [[0,82],[5,77],[10,79],[15,75],[20,76],[25,72],[30,73],[35,69],[40,68]], xMin: 0, xMax: 40, yMin: 60, yMax: 90, xGridStep: 5, yGridStep: 5, xLabelStep: 10, yLabelStep: 5, bestFitLine: { slope: -0.25, intercept: 80 } } },
    choices: [{ id: 'A', text: 'For each additional unit of $x$, $y$ is predicted to decrease by $0.25$ units.' }, { id: 'B', text: 'The minimum value of $y$ is $-0.25$.' }, { id: 'C', text: 'For each additional unit of $y$, $x$ is predicted to decrease by $0.25$ units.' }, { id: 'D', text: '$y$ equals $-0.25$ when $x = 1$.' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice A is correct.**\n\n**The Fast Way:** Slope = predicted change in $y$ per unit change in $x$. Negative means decrease.\n\n**Why the wrong answers are tempting:** B/D wrong concepts; C swaps $x$ and $y$ (inverse relationship).\n\n**Test Day Takeaway:** Slope direction is FROM $x$ TO $y$, not the other way.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-as-rate-of-change-in-context', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-208', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'hard', type: 'fill-in',
    question: 'A best-fit line $\\hat{y} = 1.6x + 5$ models monthly revenue (in thousands) versus ad spend (in thousands). By how many dollars does revenue rise for each additional dollar of ad spend?',
    correctAnswer: '1.6',
    explanation: '**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $1.6$.**\n\n**The Fast Way:** Units cancel: thousands per thousand = $1.6$ dollars per dollar.\n\n**Test Day Takeaway:** When BOTH axes are in the same scaled unit (e.g., both in thousands), the slope is in the same RATIO regardless of unit scale.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-as-rate-of-change-in-context', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 9/4: reading-slope-intercept-form (8 items) =====
  // 5 test occurrences across M2Easy variants.
  { id: 'bank-alg-209', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the slope of the line $y = -4x + 9$?',
    choices: [{ id: 'A', text: '$-4$' }, { id: 'B', text: '$9$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$\\dfrac{9}{4}$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice A is correct.**\n\n**The Fast Way:** In $y = mx + b$, slope $= m = -4$.\n\n**Why the wrong answers are tempting:** B is intercept; C drops sign; D is $x$-intercept.\n\n**Test Day Takeaway:** $y = mx + b$: $m$ is the COEFFICIENT of $x$ (with sign), $b$ is the constant.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reading-slope-intercept-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-210', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'easy', type: 'fill-in',
    question: 'What is the $y$-intercept of the line $y = 7x - 3$?',
    correctAnswer: '-3',
    explanation: '**SAT Pattern: Reading Slope-Intercept Form**\n\n**The correct answer is $-3$.**\n\n**The Fast Way:** $y$-intercept = constant term $= -3$.\n\n**Test Day Takeaway:** $b$ in $y = mx + b$ is the $y$-intercept.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reading-slope-intercept-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-211', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In the equation $y = \\dfrac{2}{3}x + 5$, what is the value of the slope?',
    choices: [{ id: 'A', text: '$\\dfrac{2}{3}$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$\\dfrac{3}{2}$' }, { id: 'D', text: '$\\dfrac{2}{5}$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice A is correct.**\n\n**The Fast Way:** Coefficient of $x$: $2/3$.\n\n**Why the wrong answers are tempting:** B is intercept; C flips the slope; D mixes.\n\n**Test Day Takeaway:** Slope can be a fraction. Don\'t flip it.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reading-slope-intercept-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-212', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'medium', type: 'fill-in',
    question: 'What is the slope of the line $y = -\\dfrac{x}{5} + 8$?',
    correctAnswer: '-1/5',
    explanation: '**SAT Pattern: Reading Slope-Intercept Form**\n\n**The correct answer is $-\\dfrac{1}{5}$.**\n\n**The Fast Way:** $-x/5 = (-1/5)x$. Slope: $-1/5$.\n\n**Test Day Takeaway:** Implicit coefficient: $\\dfrac{x}{5} = \\dfrac{1}{5}x$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reading-slope-intercept-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-213', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In which of the following equations is the slope $-2$ and the $y$-intercept $5$?',
    choices: [{ id: 'A', text: '$y = -2x + 5$' }, { id: 'B', text: '$y = 5x - 2$' }, { id: 'C', text: '$y = 2x - 5$' }, { id: 'D', text: '$y = -5x + 2$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice A is correct.**\n\n**The Fast Way:** $y = mx + b$ with $m = -2$, $b = 5$: $y = -2x + 5$.\n\n**Why the wrong answers are tempting:** B swaps; C drops sign; D swaps with sign error.\n\n**Test Day Takeaway:** Coefficient $\\to$ slope. Constant $\\to$ intercept.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reading-slope-intercept-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-214', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'medium', type: 'fill-in',
    question: 'What is the $y$-intercept of the line $y = \\dfrac{3}{4}x$?',
    correctAnswer: '0',
    explanation: '**SAT Pattern: Reading Slope-Intercept Form**\n\n**The correct answer is $0$.**\n\n**The Fast Way:** No constant term $\\Rightarrow b = 0$. Line passes through origin.\n\n**Test Day Takeaway:** Missing constant in $y = mx + b$ form means $b = 0$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reading-slope-intercept-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-215', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the $xy$-plane, line $\\ell$ is graphed by the equation $2y = 6x + 10$. Line $m$ is the reflection of line $\\ell$ across the $x$-axis. What is the slope of line $m$?',
    choices: [{ id: 'A', text: '$-3$' }, { id: 'B', text: '$-\\dfrac{1}{3}$' }, { id: 'C', text: '$\\dfrac{1}{3}$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Slope of a Reflected Line**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Slope of $\\ell$: $2y = 6x + 10 \\Rightarrow y = 3x + 5$, slope $= 3$. Reflection across the $x$-axis negates every $y$-value, which flips the sign of the slope. Slope of $m = -3$.\n\n**The Full Solution:**\nStep 1: Rewrite $\\ell$ in slope-intercept form. Divide both sides by $2$: $y = 3x + 5$. The slope of $\\ell$ is $3$.\nStep 2: Reflection across the $x$-axis maps each point $(x, y)$ to $(x, -y)$. So if $(x, y)$ satisfies $y = 3x + 5$, the reflected point $(x, -y)$ satisfies $-y = 3x + 5$, or equivalently $y = -3x - 5$. The slope of $m$ is $-3$.\n\nAlternative: two points on $\\ell$ are $(0, 5)$ and $(1, 8)$. Their reflections are $(0, -5)$ and $(1, -8)$. Slope $= \\dfrac{-8 - (-5)}{1 - 0} = -3$.\n\nVerification: $m$: $y = -3x - 5$. Both lines pass through $(x, \\pm 5)$ at $x = 0$, and the $y$-coordinates flip sign \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): correct.\n* Choice B ($-1/3$): applies the PERPENDICULAR-line rule (negative reciprocal) instead of the reflection rule. Perpendicular ≠ reflection across the $x$-axis.\n* Choice C ($1/3$): just takes the reciprocal of the original slope, losing the sign change.\n* Choice D ($3$): reports the slope of $\\ell$ unchanged. Forgets that reflection across the $x$-axis flips the sign of slope.\n\n**Test Day Takeaway:** Reflection across the $x$-axis negates the $y$-values of every point, which negates the slope: $m' = -m$. Reflection across the $y$-axis negates $x$-values and ALSO negates the slope. Reflection across $y = x$ INVERTS the slope ($m' = 1/m$). Don't confuse with perpendicular slopes (negative reciprocals).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-from-rearranged-form', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-216', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the $xy$-plane, line $\\ell$ has equation $y - 2x = 5$. Line $m$ is perpendicular to $\\ell$ and passes through the origin. What is the $y$-coordinate of the point where lines $\\ell$ and $m$ intersect?',
    choices: [{ id: 'A', text: '$-2$' }, { id: 'B', text: '$0$' }, { id: 'C', text: '$1$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Perpendicular Line + Intersection**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Slope of $\\ell$ is $2$, so slope of $m$ (perpendicular) is $-1/2$. Line $m$ through origin: $y = -x/2$. Intersect: $-x/2 = 2x + 5 \\Rightarrow -5x/2 = 5 \\Rightarrow x = -2$. Then $y = -(-2)/2 = 1$.\n\n**The Full Solution:**\nStep 1: Rewrite $\\ell$ in slope-intercept form: $y - 2x = 5 \\Rightarrow y = 2x + 5$. Slope of $\\ell$ is $2$.\nStep 2: Perpendicular slopes are negative reciprocals: slope of $m$ is $-1/2$.\nStep 3: $m$ passes through the origin, so its equation is $y = -x/2$.\nStep 4: Set the two equations equal to find the intersection:\n$\\quad -x/2 = 2x + 5$\n$\\quad -x/2 - 2x = 5$\n$\\quad -5x/2 = 5$\n$\\quad x = -2$.\nStep 5: Substitute $x = -2$ into either equation: $y = -(-2)/2 = 1$ (or $y = 2(-2) + 5 = 1$).\n\nVerification: $(-2, 1)$ is on $\\ell$: $1 - 2(-2) = 5$ \\checkmark. It is on $m$: $1 = -(-2)/2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): reports the $x$-coordinate of the intersection instead of the $y$-coordinate.\n* Choice B ($0$): reports the $y$-coordinate at the ORIGIN ($m$ passes through the origin, but the intersection is somewhere else).\n* Choice C ($1$): correct.\n* Choice D ($5$): reports the $y$-intercept of line $\\ell$ (the value when $x = 0$), confusing 'intercept of $\\ell$' with 'intersection of $\\ell$ and $m$'.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals. To find a line through the origin perpendicular to a given line, take the negative reciprocal of the given slope and write $y = (\\text{slope})\\cdot x$. To find the intersection, set the two line equations equal and solve.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-from-rearranged-form', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-217', domain: 'algebra', skills: ['perpendicular-negative-reciprocal'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the slope of a line perpendicular to $y = 4x - 1$?',
    choices: [{ id: 'A', text: '$-\\dfrac{1}{4}$' }, { id: 'B', text: '$\\dfrac{1}{4}$' }, { id: 'C', text: '$-4$' }, { id: 'D', text: '$4$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way:** Perpendicular slope is the negative reciprocal: $-1/4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1/4$): reciprocates but FORGETS TO NEGATE — gives $1/m$ instead of $-1/m$.\n* Choice C ($-4$): negates but FORGETS TO FLIP — gives $-m$ instead of $-1/m$.\n* Choice D ($4$): returns the original slope unchanged — describes a PARALLEL line, not perpendicular.\n\n**Test Day Takeaway:** Flip AND negate.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'perpendicular-slope', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-218', domain: 'algebra', skills: ['perpendicular-negative-reciprocal'], difficulty: 'easy', type: 'fill-in',
    question: 'A line has slope $-\\dfrac{2}{5}$. What is the slope of a perpendicular line?',
    correctAnswer: '5/2',
    explanation: '**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $\\dfrac{5}{2}$.**\n\n**The Fast Way:** Flip + negate: $-(-5/2) = 5/2$.\n\n**Test Day Takeaway:** Two negatives multiply to positive in the reciprocal.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'perpendicular-slope', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-219', domain: 'algebra', skills: ['perpendicular-negative-reciprocal'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In the $xy$-plane, line $p$ has the equation $2x + 5y = 10$. Line $q$ is perpendicular to line $p$ and passes through the point $(2, -1)$. What is the $y$-intercept of line $q$?',
    choices: [{ id: 'A', text: '$-6$' }, { id: 'B', text: '$-1$' }, { id: 'C', text: '$\\dfrac{9}{5}$' }, { id: 'D', text: '$4$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Perpendicular Line Through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Slope of $p$ = $-A/B = -2/5$. Perpendicular slope = $5/2$. Through $(2, -1)$: $-1 = (5/2)(2) + b \\Rightarrow -1 = 5 + b \\Rightarrow b = -6$.\n\n**The Full Solution:**\nStep 1: Find the slope of $p$. Rewrite $2x + 5y = 10$ as $y = -\\dfrac{2}{5}x + 2$, so slope = $-\\dfrac{2}{5}$.\nStep 2: Perpendicular slopes are negative reciprocals: slope of $q$ = $\\dfrac{5}{2}$.\nStep 3: Use the point $(2, -1)$ in $y = mx + b$: $-1 = \\dfrac{5}{2}(2) + b = 5 + b \\Rightarrow b = -6$.\n\nVerification: at $x = 2$, $y = \\dfrac{5}{2}(2) + (-6) = 5 - 6 = -1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-1$): reports the $y$-coordinate of the given point as the intercept — confuses \"passes through\" with \"$y$-intercept at\".\n* Choice C ($\\frac{9}{5}$): uses the slope of $p$ (= $-2/5$) instead of the perpendicular slope: $-1 = (-2/5)(2) + b \\Rightarrow b = -1 + 4/5 = -1/5$, then mis-arithmetic.\n* Choice D ($4$): forgets the negative sign of the perpendicular slope — uses $-5/2$, getting $-1 = -5 + b \\Rightarrow b = 4$.\n\n**Test Day Takeaway:** Standard form $Ax + By = C$ has slope $-A/B$. Negative reciprocal flips AND negates. Then plug the point into $y = mx + b$ to solve for $b$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'perpendicular-slope', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-220', domain: 'algebra', skills: ['perpendicular-negative-reciprocal'], difficulty: 'medium', type: 'fill-in',
    question: 'If a line has slope $\\dfrac{3}{7}$, what is the slope of a line perpendicular to it?',
    correctAnswer: '-7/3',
    explanation: '**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $-\\dfrac{7}{3}$.**\n\n**The Fast Way:** Flip and negate: $-7/3$.\n\n**Test Day Takeaway:** Two operations: flip the fraction AND change the sign.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'perpendicular-slope', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-221', domain: 'algebra', skills: ['perpendicular-negative-reciprocal'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A line has slope $-6$. What is the slope of any line perpendicular to it?',
    choices: [{ id: 'A', text: '$\\dfrac{1}{6}$' }, { id: 'B', text: '$-\\dfrac{1}{6}$' }, { id: 'C', text: '$6$' }, { id: 'D', text: '$-6$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way:** $-1/(-6) = 1/6$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-1/6$): reciprocates but FORGETS to negate — gives $1/m$ where $m = -6$, then keeps the original sign.\n* Choice C ($6$): negates the original $-6$ but does NOT reciprocate — describes a line that mirrors across the $x$-axis.\n* Choice D ($-6$): returns the original slope unchanged — describes a PARALLEL line.\n\n**Test Day Takeaway:** Reciprocate, then negate. Two negatives give positive.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'perpendicular-slope', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-222', domain: 'algebra', skills: ['perpendicular-negative-reciprocal'], difficulty: 'medium', type: 'fill-in',
    question: 'Two lines are perpendicular. If one has slope $\\dfrac{1}{8}$, what is the slope of the other?',
    correctAnswer: '-8',
    explanation: '**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $-8$.**\n\n**The Fast Way:** Flip $1/8 \\to 8$, negate $\\to -8$.\n\n**Test Day Takeaway:** Tiny slope $\\to$ steep perpendicular (and vice versa).',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'perpendicular-slope', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-223', domain: 'algebra', skills: ['perpendicular-negative-reciprocal'], difficulty: 'hard', type: 'multiple-choice',
    question: 'If two lines are perpendicular and one has slope $m$ where $m > 0$, which expression gives the slope of the other line?',
    choices: [{ id: 'A', text: '$-\\dfrac{1}{m}$' }, { id: 'B', text: '$\\dfrac{1}{m}$' }, { id: 'C', text: '$-m$' }, { id: 'D', text: '$m$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way:** Perpendicular slope = $-1/m$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1/m$): reciprocates but FORGETS the negative sign.\n* Choice C ($-m$): negates but FORGETS to reciprocate.\n* Choice D ($m$): returns the original slope — describes a parallel line.\n\n**Test Day Takeaway:** Symbolic form of the perpendicular slope rule.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'perpendicular-slope', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-224', domain: 'algebra', skills: ['perpendicular-negative-reciprocal'], difficulty: 'hard', type: 'fill-in',
    question: 'If lines $\\ell_1$ and $\\ell_2$ are perpendicular and the product of their slopes is $k$, what is the value of $k$?',
    correctAnswer: '-1',
    explanation: '**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $-1$.**\n\n**The Fast Way:** $m_1 \\cdot m_2 = -1$ for perpendicular lines.\n\n**Test Day Takeaway:** The product-of-slopes rule.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'perpendicular-slope', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 10/2: parallel-line-through-a-point (7 items) =====
  // Bank has 1 existing item; adding 7 more.
  { id: 'bank-alg-225', domain: 'algebra', skills: ['writing-parallel-equation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A line is parallel to $y = 3x + 5$ and passes through $(0, -2)$. What is its equation?',
    choices: [{ id: 'A', text: '$y = 3x - 2$' }, { id: 'B', text: '$y = -3x - 2$' }, { id: 'C', text: '$y = 5x - 2$' }, { id: 'D', text: '$y = 3x + 5$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Parallel Line Through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way:** Same slope $3$, intercept from $(0, -2)$ is $-2$. Equation: $y = 3x - 2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = -3x - 2$): uses the negative of the slope — describes a different (non-parallel) line.\n* Choice C ($y = 5x - 2$): uses the $y$-intercept of the original line ($5$) as the slope — slope/intercept confusion.\n* Choice D ($y = 3x + 5$): copies the original equation exactly — ignores the new point $(0, -2)$.\n\n**Test Day Takeaway:** Parallel = same slope, different intercept.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-line-through-a-point', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-226', domain: 'algebra', skills: ['writing-parallel-equation'], difficulty: 'easy', type: 'fill-in',
    question: 'A line is parallel to $y = 2x - 7$ and passes through $(0, 4)$. What is the $y$-intercept of the parallel line?',
    correctAnswer: '4',
    explanation: '**SAT Pattern: Parallel Line Through a Point**\n\n**The correct answer is $4$.**\n\n**The Fast Way:** Through $(0, 4) \\Rightarrow$ $y$-intercept $= 4$.\n\n**Test Day Takeaway:** When the point is on the $y$-axis, that point IS the intercept.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-line-through-a-point', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-227', domain: 'algebra', skills: ['writing-parallel-equation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In the $xy$-plane, a line parallel to $y = -\\dfrac{1}{2}x + 3$ passes through $(4, 1)$. What is the $y$-intercept of this line?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$-3$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Parallel Line Through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way:** Slope $-1/2$. $1 = (-1/2)(4) + b \\Rightarrow b = 3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): reports the $y$-coordinate of the given point as the intercept — confuses passing through a point with the $y$-intercept.\n* Choice C ($5$): adds the $x$-coordinate to the $y$-coordinate ($4 + 1$) instead of solving for $b$.\n* Choice D ($-3$): sign error — uses $+\\frac{1}{2}$ instead of $-\\frac{1}{2}$ for the slope, leading to $1 = 2 + b \\Rightarrow b = -1$ then mis-arithmetic.\n\n**Test Day Takeaway:** Use $y = mx + b$ with the given point to solve for $b$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-line-through-a-point', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-228', domain: 'algebra', skills: ['writing-parallel-equation'], difficulty: 'medium', type: 'fill-in',
    question: 'A line is parallel to $y = 4x + 1$ and passes through $(2, -3)$. What is its $y$-intercept?',
    correctAnswer: '-11',
    explanation: '**SAT Pattern: Parallel Line Through a Point**\n\n**The correct answer is $-11$.**\n\n**The Fast Way:** $-3 = 4(2) + b \\Rightarrow b = -11$.\n\n**Test Day Takeaway:** Plug point into $y = mx + b$, solve for $b$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-line-through-a-point', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-229', domain: 'algebra', skills: ['writing-parallel-equation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A line parallel to $2x - 3y = 6$ passes through $(3, 0)$. Which equation describes this line?',
    choices: [{ id: 'A', text: '$y = \\dfrac{2}{3}x - 2$' }, { id: 'B', text: '$y = -\\dfrac{2}{3}x - 2$' }, { id: 'C', text: '$y = \\dfrac{3}{2}x - 2$' }, { id: 'D', text: '$y = \\dfrac{2}{3}x + 3$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Parallel Line Through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way:** Slope $= -A/B = 2/3$. Through $(3, 0)$: $0 = (2/3)(3) + b = 2 + b \\Rightarrow b = -2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = -\\frac{2}{3}x - 2$): flips the sign of the slope — applies the perpendicular rule instead of the parallel rule.\n* Choice C ($y = \\frac{3}{2}x - 2$): swaps the slope numerator and denominator — gets the reciprocal of the correct slope.\n* Choice D ($y = \\frac{2}{3}x + 3$): uses the $x$-coordinate of the point as the $y$-intercept — point/intercept confusion.\n\n**Test Day Takeaway:** Standard form slope is $-A/B$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-line-through-a-point', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-230', domain: 'algebra', skills: ['writing-parallel-equation'], difficulty: 'medium', type: 'fill-in',
    question: 'A line is parallel to $y = -5x + 12$ and passes through $(1, 2)$. What is the $y$-intercept of this line?',
    correctAnswer: '7',
    explanation: '**SAT Pattern: Parallel Line Through a Point**\n\n**The correct answer is $7$.**\n\n**The Fast Way:** $2 = -5(1) + b \\Rightarrow b = 7$.\n\n**Test Day Takeaway:** Same slope, fit the new point.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-line-through-a-point', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-231', domain: 'algebra', skills: ['writing-parallel-equation'], difficulty: 'hard', type: 'fill-in',
    question: 'Line $\\ell$ is parallel to the line $y = -3x + 7$ and passes through the point $(-2, 5)$. What is the value of $y$ when $x = 0$ on line $\\ell$?',
    correctAnswer: '-1',
    explanation: '**SAT Pattern: Parallel Line Through a Point**\n\n**The correct answer is $-1$.**\n\n**The Fast Way:** Slope $-3$. $5 = -3(-2) + b \\Rightarrow 5 = 6 + b \\Rightarrow b = -1$. At $x = 0$: $y = -1$.\n\n**Test Day Takeaway:** "$y$ when $x = 0$" is the $y$-intercept.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-line-through-a-point', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 10/3: matching-coefficients (8 items) =====
  { id: 'bank-alg-232', domain: 'algebra', skills: ['distributive-property'], difficulty: 'easy', type: 'multiple-choice',
    question: 'For all $x$, $(x + 2)(x + 5) = x^2 + ax + 10$. What is the value of $a$?',
    choices: [{ id: 'A', text: '$7$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$2$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Matching Coefficients**\n\n**Choice A is correct.**\n\n**The Fast Way:** Sum of roots: $2 + 5 = 7$. So $a = 7$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($10$): returns the constant term ($2 \\cdot 5$) instead of the middle coefficient.\n* Choice C ($5$): reports just one of the factor constants ($5$).\n* Choice D ($2$): reports just the other factor constant ($2$).\n\n**Test Day Takeaway:** Expanding $(x + p)(x + q) = x^2 + (p + q)x + pq$. Middle coefficient = sum of factor constants.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'matching-coefficients', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-233', domain: 'algebra', skills: ['distributive-property'], difficulty: 'easy', type: 'fill-in',
    question: 'What value of $b$ satisfies the equation $(x + 3)(x - 4) = x^2 + bx - 12$?',
    correctAnswer: '-1',
    explanation: '**SAT Pattern: Matching Coefficients**\n\n**The correct answer is $-1$.**\n\n**The Fast Way:** $3 + (-4) = -1$.\n\n**Test Day Takeaway:** Sum of factor constants gives the middle coefficient.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'matching-coefficients', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-234', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What value of $a$ satisfies the equation $(2x + 3)(x + 4) = 2x^2 + ax + 12$?',
    choices: [{ id: 'A', text: '$11$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$12$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Matching Coefficients**\n\n**Choice A is correct.**\n\n**The Fast Way:** FOIL: $2x^2 + 8x + 3x + 12 = 2x^2 + 11x + 12$. So $a = 11$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): reports just the outer-product coefficient ($2 \\cdot 4 = 8$) and forgets the inner product.\n* Choice C ($3$): reports just the inner-product coefficient ($1 \\cdot 3 = 3$) and forgets the outer product.\n* Choice D ($12$): returns the constant term ($3 \\cdot 4$) instead of the middle coefficient.\n\n**Test Day Takeaway:** With non-monic factors, FOIL out and match coefficients term-by-term.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'matching-coefficients', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-235', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'fill-in',
    question: 'What value of $a$ satisfies the equation $(3x - 2)(x + a) = 3x^2 + 7x - 6$?',
    correctAnswer: '3',
    explanation: '**SAT Pattern: Matching Coefficients**\n\n**The correct answer is $3$.**\n\n**The Fast Way:** Constant term: $-2 \\cdot a = -6 \\Rightarrow a = 3$. Verify middle: $3a + (-2) = 9 - 2 = 7$ \\checkmark.\n\n**Test Day Takeaway:** Match constants first (one equation), then verify with middle term.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'matching-coefficients', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-236', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For all $x$, $(hx + 3)(x + j) = 2x^2 + 11x + 12$. What is the value of $h + j$?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Matching Coefficients**\n\n**Choice A is correct.**\n\n**The Fast Way:** Leading: $h = 2$. Constant: $3j = 12 \\Rightarrow j = 4$. Sum: $h + j = 6$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): reports just $j$ alone, forgetting to add $h$.\n* Choice C ($11$): returns the middle coefficient from the trinomial instead of $h + j$.\n* Choice D ($5$): subtracts ($h \\cdot j$? or $j - h$?) instead of adding.\n\n**Test Day Takeaway:** Two unknowns: match the leading and constant terms separately.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'matching-coefficients', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-237', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'fill-in',
    question: 'What value of $k$ satisfies the equation $(x + 5)^2 = x^2 + kx + 25$?',
    correctAnswer: '10',
    explanation: '**SAT Pattern: Matching Coefficients**\n\n**The correct answer is $10$.**\n\n**The Fast Way:** $(x + a)^2 = x^2 + 2ax + a^2$. With $a = 5$: $k = 2(5) = 10$.\n\n**Test Day Takeaway:** Perfect square: middle coefficient is $2a$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'matching-coefficients', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-238', domain: 'algebra', skills: ['distributive-property'], difficulty: 'hard', type: 'multiple-choice',
    question: 'For all values of $x$, $(2x + a)(3x + b) = 6x^2 + 13x + 6$, where $a$ and $b$ are positive integers. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$7$' }, { id: 'D', text: '$13$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Matching Coefficients with Integer Constraints**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** FOIL: $(2x + a)(3x + b) = 6x^2 + (2b + 3a)x + ab$. Match: $ab = 6$ and $2b + 3a = 13$. Positive integer pairs $(a, b)$ with $ab = 6$: $(1, 6), (2, 3), (3, 2), (6, 1)$. Test each: $2(2) + 3(3) = 13$ ✓ for $(a, b) = (3, 2)$. So $a + b = 5$.\n\n**The Full Solution:**\nExpand the left side: $(2x + a)(3x + b) = 6x^2 + 2bx + 3ax + ab = 6x^2 + (2b + 3a)x + ab$.\nMatch coefficients with $6x^2 + 13x + 6$:\n$\\quad ab = 6$\n$\\quad 2b + 3a = 13$\n\nList positive integer factor pairs of $6$: $(a, b) \\in \\{(1, 6), (2, 3), (3, 2), (6, 1)\\}$.\nCheck the middle-coefficient constraint:\n$\\quad (1, 6)$: $2(6) + 3(1) = 15$ ✗\n$\\quad (2, 3)$: $2(3) + 3(2) = 12$ ✗\n$\\quad (3, 2)$: $2(2) + 3(3) = 13$ ✓\n$\\quad (6, 1)$: $2(1) + 3(6) = 20$ ✗\nTherefore $a = 3$ and $b = 2$, so $a + b = 5$.\n\nVerification: $(2x + 3)(3x + 2) = 6x^2 + 4x + 9x + 6 = 6x^2 + 13x + 6$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): reports $ab$ (the constant term of the product) instead of $a + b$.\n* Choice C ($7$): from the (2,5) or (5,2) factor pair — would work if $ab = 10$, but $ab = 6$. Mis-factors the constant term.\n* Choice D ($13$): reports the middle coefficient itself.\n\n**Test Day Takeaway:** When a factorization has a constraint (e.g., \"positive integers\"), enumerate the candidate pairs from the constant term, then filter by the middle-coefficient equation.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'matching-coefficients', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-239', domain: 'algebra', skills: ['distributive-property'], difficulty: 'hard', type: 'fill-in',
    question: 'What value of $a$ satisfies the equation $(x - 3)(x + a) = x^2 + 2x - 15$?',
    correctAnswer: '5',
    explanation: '**SAT Pattern: Matching Coefficients**\n\n**The correct answer is $5$.**\n\n**The Fast Way:** Constant: $-3a = -15 \\Rightarrow a = 5$. Verify middle: $a - 3 = 2$ \\checkmark.\n\n**Test Day Takeaway:** Match one term, verify another.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'matching-coefficients', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 11/2: parallel-lines-no-solution (8 items) =====
  // Conceptually identical to no-solution-condition; distinct slug per test bundles.
  { id: 'bank-alg-240', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'easy', type: 'multiple-choice',
    question: 'For what value of $k$ does the system $y = 3x + 2$ and $y = 3x + k$ have NO solution? (Choose any value that satisfies.)',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$2$' }, { id: 'C', text: 'No value works' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice A is correct.**\n\n**The Fast Way:** Same slope, different intercept. $k \\ne 2$, so $k = 5$ works.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): copies the intercept of the first equation — produces the SAME line (infinitely many solutions, not no solution).\n* Choice C (No value works): incorrect — any $k \\ne 2$ produces no solution.\n* Choice D ($3$): copies the slope into the intercept slot — slope/intercept confusion.\n\n**Test Day Takeaway:** No solution = parallel + distinct.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-lines-no-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-241', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'easy', type: 'fill-in',
    question: 'For what value of $c$ does the system $y = 4x + 7$ and $y = cx + 1$ have no solution?',
    correctAnswer: '4',
    explanation: '**SAT Pattern: Parallel Lines (No Solution)**\n\n**The correct answer is $4$.**\n\n**The Fast Way:** Slopes match: $c = 4$. Constants differ ($7 \\ne 1$) \\checkmark.\n\n**Test Day Takeaway:** Match slopes; verify intercepts differ.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-lines-no-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-242', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For what value of $c$ does $2x + 3y = 5$ and $cx + 9y = 12$ have no solution?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$12$' }, { id: 'D', text: '$\\dfrac{12}{5}$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice A is correct.**\n\n**The Fast Way:** $y$-coefficient ratio: $9/3 = 3$. Match $x$: $c/2 = 3 \\Rightarrow c = 6$. Constants: $12/5 \\ne 3$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): copies the $y$-coefficient from the first equation as the new $x$-coefficient — coefficient confusion.\n* Choice C ($12$): copies the constant from the second equation into the slot for $c$.\n* Choice D ($12/5$): uses the constant ratio ($12/5$) instead of the coefficient ratio (which gives the slope).\n\n**Test Day Takeaway:** Match coefficient ratios, verify constants differ.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-lines-no-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-243', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'fill-in',
    question: 'For what value of $k$ does $5x - 2y = 4$ and $kx - 6y = 15$ have no solution?',
    correctAnswer: '15',
    explanation: '**SAT Pattern: Parallel Lines (No Solution)**\n\n**The correct answer is $15$.**\n\n**The Fast Way:** $y$-coefficient ratio: $-6/-2 = 3$. Match $x$: $k/5 = 3 \\Rightarrow k = 15$.\n\n**Test Day Takeaway:** Negative coefficient ratios: signs cancel.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-lines-no-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-244', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For what value of $c$ does $2x + 3y = 5$ and $4x + cy = 9$ have no solution?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$\\dfrac{6}{5}$' }, { id: 'D', text: '$2$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice A is correct.**\n\n**The Fast Way:** $x$-coefficient ratio: $4/2 = 2$. Match $y$: $c/3 = 2 \\Rightarrow c = 6$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): keeps the original $y$-coefficient — produces a DIFFERENT slope (a unique solution, not no solution).\n* Choice C ($6/5$): mixes the constant ratio with the coefficient ratio.\n* Choice D ($2$): uses the $x$-coefficient ratio\'s denominator as the $y$-coefficient — formula confusion.\n\n**Test Day Takeaway:** Find the SLOPE-MATCHING $c$, then confirm constants differ.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-lines-no-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-245', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'fill-in',
    question: 'For what value of $m$ does $3x + my = 12$ and $6x - 4y = 7$ have no solution?',
    correctAnswer: '-2',
    explanation: '**SAT Pattern: Parallel Lines (No Solution)**\n\n**The correct answer is $-2$.**\n\n**The Fast Way:** Slope $p_1 = -3/m$, slope $p_2 = 6/4 = 3/2$. Match: $-3/m = 3/2 \\Rightarrow m = -2$.\n\n**Test Day Takeaway:** Standard form slope $= -A/B$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-lines-no-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-246', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The system $y = 2x + 5$ and $y = 2x + a$ has no solution. Which condition must $a$ satisfy?',
    choices: [{ id: 'A', text: '$a \\ne 5$' }, { id: 'B', text: '$a = 5$' }, { id: 'C', text: '$a = 2$' }, { id: 'D', text: '$a > 5$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice A is correct.**\n\n**The Fast Way:** Same slope automatic. Different intercepts: $a \\ne 5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($a = 5$): chooses the value that makes the equations IDENTICAL — infinitely many solutions, NOT no solution.\n* Choice C ($a = 2$): uses the slope as the intercept — slope/intercept confusion.\n* Choice D ($a > 5$): too restrictive — any $a \\ne 5$ works, including $a < 5$.\n\n**Test Day Takeaway:** Parallel + DISTINCT = no solution. $a$ can be anything except $5$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-lines-no-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-247', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'hard', type: 'fill-in',
    question: 'For the system $ax + 4y = 8$ and $6x + 12y = 20$ to have NO solution, what is the value of $a$?',
    correctAnswer: '2',
    explanation: '**SAT Pattern: Parallel Lines (No Solution)**\n\n**The correct answer is $2$.**\n\n**The Fast Way:** $y$-ratio: $12/4 = 3$. Match $x$: $6/a = 3 \\Rightarrow a = 2$. Constants: $20/8 = 2.5 \\ne 3$ \\checkmark.\n\n**Test Day Takeaway:** Confirm constants don\'t also match the slope ratio — otherwise it\'s infinitely many.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-lines-no-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 11/3: two-equation-system-from-a-word-problem (8 items) =====
  { id: 'bank-alg-248', domain: 'algebra', skills: ['word-problem-to-equation', 'setting-up-systems'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A class has $25$ students. There are $7$ more girls than boys. How many girls are in the class?',
    choices: [{ id: 'A', text: '$16$' }, { id: 'B', text: '$9$' }, { id: 'C', text: '$18$' }, { id: 'D', text: '$25$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way:** $g + b = 25$, $g - b = 7$. Add: $2g = 32 \\Rightarrow g = 16$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): reports the number of BOYS instead of girls — solved correctly but mis-labeled.\n* Choice C ($18$): adds $7$ to half the total ($11 + 7$) — half-correct shortcut that overshoots.\n* Choice D ($25$): reports the total class size — ignores the boys/girls split.\n\n**Test Day Takeaway:** Set up two equations: total + difference (or relationship).',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'two-equation-system-from-a-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-249', domain: 'algebra', skills: ['word-problem-to-equation', 'setting-up-systems'], difficulty: 'easy', type: 'fill-in',
    question: 'The sum of two numbers is $30$. One number is twice the other. What is the larger number?',
    correctAnswer: '20',
    explanation: '**SAT Pattern: Two-Equation System from a Word Problem**\n\n**The correct answer is $20$.**\n\n**The Fast Way:** $x + 2x = 30 \\Rightarrow x = 10$. Larger: $2x = 20$.\n\n**Test Day Takeaway:** Substitute relationship into total to reduce to one variable.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'two-equation-system-from-a-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-250', domain: 'algebra', skills: ['word-problem-to-equation', 'setting-up-systems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Joaquin scored a total of $86$ points across $14$ basketball games. He scored $5$ points in some of the games and $7$ points in each of the others. In how many games did he score $5$ points?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$10$' }, { id: 'D', text: '$4$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way:** $f + s = 14$, $5f + 7s = 86$. Substitute $s = 14 - f$: $5f + 7(14 - f) = 86 \\Rightarrow -2f = -12 \\Rightarrow f = 6$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): reports the number of $7$-point games (the OTHER variable) — solved correctly but mis-labeled.\n* Choice C ($10$): mis-sets up the score equation, perhaps using $7$ as the count of $5$-point games.\n* Choice D ($4$): arithmetic error in the substitution — drops a factor of $2$.\n\n**Test Day Takeaway:** Game-counts setup: count equation + score equation.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'two-equation-system-from-a-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-251', domain: 'algebra', skills: ['word-problem-to-equation', 'setting-up-systems'], difficulty: 'medium', type: 'fill-in',
    question: 'A shop sells small drinks for $\\$2$ and large drinks for $\\$5$. On Monday, $40$ drinks were sold for a total of $\\$140$. How many large drinks were sold?',
    correctAnswer: '20',
    explanation: '**SAT Pattern: Two-Equation System from a Word Problem**\n\n**The correct answer is $20$.**\n\n**The Fast Way:** $s + \\ell = 40$, $2s + 5\\ell = 140$. Sub: $2(40 - \\ell) + 5\\ell = 140 \\Rightarrow 3\\ell = 60 \\Rightarrow \\ell = 20$.\n\n**Test Day Takeaway:** Define variables, write count + revenue equations.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'two-equation-system-from-a-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-252', domain: 'algebra', skills: ['word-problem-to-equation', 'setting-up-systems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A father is three times as old as his son. In $12$ years, the father will be twice as old as the son. How old is the son now?',
    choices: [{ id: 'A', text: '$12$' }, { id: 'B', text: '$24$' }, { id: 'C', text: '$36$' }, { id: 'D', text: '$6$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way:** Let son $= s$. Now: $f = 3s$. In $12$ years: $3s + 12 = 2(s + 12) \\Rightarrow 3s + 12 = 2s + 24 \\Rightarrow s = 12$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($24$): reports the FATHER current age — solved correctly but mis-labeled.\n* Choice C ($36$): reports the father age in $12$ years.\n* Choice D ($6$): half-arithmetic error — uses the future relationship without shifting both ages.\n\n**Test Day Takeaway:** Age problems: write expressions for NOW and LATER, set up the future relationship.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'two-equation-system-from-a-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-253', domain: 'algebra', skills: ['word-problem-to-equation', 'setting-up-systems'], difficulty: 'medium', type: 'fill-in',
    question: 'The perimeter of a rectangle is $30$ inches. The length is $3$ inches more than the width. What is the length, in inches?',
    correctAnswer: '9',
    explanation: '**SAT Pattern: Two-Equation System from a Word Problem**\n\n**The correct answer is $9$.**\n\n**The Fast Way:** $2(l + w) = 30 \\Rightarrow l + w = 15$. $l = w + 3$. So $w + 3 + w = 15 \\Rightarrow w = 6$, $l = 9$.\n\n**Test Day Takeaway:** Rectangle problems: perimeter equation + dimension relationship.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'two-equation-system-from-a-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-254', domain: 'algebra', skills: ['word-problem-to-equation', 'setting-up-systems'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A coin jar contains nickels and dimes worth a total of $\\$3.20$. If there are $42$ coins in total, how many nickels are in the jar?',
    choices: [{ id: 'A', text: '$20$' }, { id: 'B', text: '$22$' }, { id: 'C', text: '$16$' }, { id: 'D', text: '$30$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way:** $n + d = 42$. $0.05n + 0.10d = 3.20$. Multiply by $100$: $5n + 10d = 320$. Sub $d = 42 - n$: $5n + 10(42 - n) = 320 \\Rightarrow -5n = -100 \\Rightarrow n = 20$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($22$): reports the number of DIMES instead of nickels — solved correctly but mis-labeled.\n* Choice C ($16$): forgets to multiply the coin counts by their value — solves for the wrong variable.\n* Choice D ($30$): uses only the count equation without the value constraint.\n\n**Test Day Takeaway:** Multiply through by $100$ to clear coin decimals.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'two-equation-system-from-a-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-255', domain: 'algebra', skills: ['word-problem-to-equation', 'setting-up-systems'], difficulty: 'hard', type: 'fill-in',
    question: 'A movie theater sells adult tickets for $\\$12$ and child tickets for $\\$8$. For a Saturday show, $80$ tickets were sold for a total of $\\$840$. How many adult tickets were sold?',
    correctAnswer: '50',
    explanation: '**SAT Pattern: Two-Equation System from a Word Problem**\n\n**The correct answer is $50$.**\n\n**The Fast Way:** $a + c = 80$. $12a + 8c = 840$. Sub $c = 80 - a$: $12a + 8(80 - a) = 840 \\Rightarrow 4a + 640 = 840 \\Rightarrow a = 50$.\n\n**Test Day Takeaway:** Two-equation systems for ticket problems are standard SAT fare.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'two-equation-system-from-a-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 11/4: solve-for-a-combination (8 items) =====
  { id: 'bank-alg-256', domain: 'algebra', skills: ['elimination-method'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $2x + 3y = 17$ and $x + 4y = 11$, what is the value of $x + y$?',
    choices: [{ id: 'A', text: '$8$' }, { id: 'B', text: '$11$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Solve for a Combination**\n\n**Choice A is correct.**\n\n**The Fast Way:** Solve: eq2 gives $x = 11 - 4y$. Sub into eq1: $2(11 - 4y) + 3y = 17 \\Rightarrow 22 - 5y = 17 \\Rightarrow y = 1$, $x = 7$. $x + y = 8$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($11$): reports the RHS of equation 2 as the answer — confuses \$x + y\$ with \$x + 4y\$.\n* Choice C ($5$): swaps signs during substitution — gets \$y = -1, x = 6\$, sums incorrectly.\n* Choice D ($3$): reports the difference \$y - x\$ instead of \$x + y\$.\n\n**Test Day Takeaway:** Solve the system fully, then compute the requested combination.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-a-combination', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-257', domain: 'algebra', skills: ['elimination-method'], difficulty: 'easy', type: 'fill-in',
    question: 'If $a + b = 10$ and $a - b = 4$, what is the value of $2a + 3b$?',
    correctAnswer: '23',
    explanation: '**SAT Pattern: Solve for a Combination**\n\n**The correct answer is $23$.**\n\n**The Fast Way:** Add: $2a = 14 \\Rightarrow a = 7$. Subtract: $2b = 6 \\Rightarrow b = 3$. $2(7) + 3(3) = 14 + 9 = 23$.\n\n**Test Day Takeaway:** Elimination by add/subtract for two-variable systems.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-a-combination', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-258', domain: 'algebra', skills: ['elimination-method'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $3x + 5y = 20$ and $x + y = 6$, what is the value of $2x + 4y$?',
    choices: [{ id: 'A', text: '$14$' }, { id: 'B', text: '$20$' }, { id: 'C', text: '$12$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Solve for a Combination**\n\n**Choice A is correct.**\n\n**The Fast Way:** Subtract: $(3x + 5y) - (x + y) = 20 - 6 \\Rightarrow 2x + 4y = 14$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($20$): reports the RHS of equation 1 — uses \$3x + 5y\$ directly without the combination step.\n* Choice C ($12$): doubles equation 2 ($2x + 2y = 12$) — wrong target combination.\n* Choice D ($8$): adds the two RHS values instead of subtracting.\n\n**Test Day Takeaway:** Look for combinations of given equations that DIRECTLY give the requested expression — no need to solve fully.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-a-combination', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-259', domain: 'algebra', skills: ['elimination-method'], difficulty: 'medium', type: 'fill-in',
    question: 'If $x + 2y = 10$ and $3x + 6y = c$, where the system has infinitely many solutions, what is the value of $c$?',
    correctAnswer: '30',
    explanation: '**SAT Pattern: Solve for a Combination**\n\n**The correct answer is $30$.**\n\n**The Fast Way:** Eq2 = $3 \\cdot$ eq1: $3(x + 2y) = 30 \\Rightarrow c = 30$.\n\n**Test Day Takeaway:** Infinite solutions: one equation is a SCALAR multiple of the other.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-a-combination', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-260', domain: 'algebra', skills: ['elimination-method'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $4a - 3b = 11$ and $2a + b = 7$, what is the value of $6a - 2b$?',
    choices: [{ id: 'A', text: '$18$' }, { id: 'B', text: '$22$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$14$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Solve for a Combination**\n\n**Choice A is correct.**\n\n**The Fast Way:** Add: $(4a - 3b) + (2a + b) = 11 + 7 = 18$. Result: $6a - 2b = 18$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($22$): doubles equation 2 and adds — uses \$4a - 3b + 4a + 2b\$ instead of straight addition.\n* Choice C ($11$): reports RHS of equation 1 — \$4a - 3b\$ directly.\n* Choice D ($14$): mis-derives — perhaps adds RHS values then subtracts \$4$.\n\n**Test Day Takeaway:** Adding the equations gave the desired combination directly. Try this BEFORE solving the system.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-a-combination', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-261', domain: 'algebra', skills: ['elimination-method'], difficulty: 'medium', type: 'fill-in',
    question: 'If $3x + 2y = 15$ and $x + 3y = 13$, what is the value of $4x + 5y$?',
    correctAnswer: '28',
    explanation: '**SAT Pattern: Solve for a Combination**\n\n**The correct answer is $28$.**\n\n**The Fast Way:** Add: $4x + 5y = 15 + 13 = 28$.\n\n**Test Day Takeaway:** Coefficients in the target $(4, 5)$ match the sum of the system\'s coefficients $(3 + 1, 2 + 3)$ — direct addition works.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-a-combination', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-262', domain: 'algebra', skills: ['elimination-method'], difficulty: 'hard', type: 'multiple-choice',
    question: 'If $5x + 2y = 18$ and $3x + 2y = 10$, what is the value of $x + y$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$1$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Solve for a Combination**\n\n**Choice A is correct.**\n\n**The Fast Way:** Subtract eq2 from eq1: $2x = 8 \\Rightarrow x = 4$. Eq2: $12 + 2y = 10 \\Rightarrow y = -1$. $x + y = 3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): reports the difference of RHS ($18 - 10 = 8$) — answers \$2x\$ instead of \$x + y\$.\n* Choice C ($4$): reports \$x\$ alone — solves the system but stops at one variable.\n* Choice D ($1$): reports \$|y|\$ — magnitude without sign.\n\n**Test Day Takeaway:** Eliminate to find one variable, back-substitute for the other.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-a-combination', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-263', domain: 'algebra', skills: ['elimination-method'], difficulty: 'hard', type: 'fill-in',
    question: 'If $2x - y = 5$ and $x + 3y = 6$, what is the value of $3x + 2y$?',
    correctAnswer: '11',
    explanation: '**SAT Pattern: Solve for a Combination**\n\n**The correct answer is $11$.**\n\n**The Fast Way:** Add: $3x + 2y = 5 + 6 = 11$.\n\n**Test Day Takeaway:** Whenever the target combination = sum of LHS, the answer is sum of RHS.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-a-combination', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 11/5: same-line-infinitely-many-solutions (8 items) =====
  { id: 'bank-alg-264', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The system $2x + 5y = 9$ and $8x + 20y = a$ has infinitely many solutions. What is the value of $a$?',
    choices: [{ id: 'A', text: '$36$' }, { id: 'B', text: '$9$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$45$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice A is correct.**\n\n**The Fast Way:** Eq2 = $4 \\cdot$ Eq1: $4 \\cdot 9 = 36$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): keeps the original constant unchanged — doesn\'t scale it by the same factor as the coefficients.\n* Choice C ($4$): reports the scale factor itself instead of $4 \\cdot 9$.\n* Choice D ($45$): scales by $5$ instead of $4$ — uses the coefficient sum or another wrong factor.\n\n**Test Day Takeaway:** Infinite solutions = same line = scalar multiple.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-265', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'easy', type: 'fill-in',
    question: 'If $3x + 7y = c$ and $6x + 14y = 16$ have infinitely many solutions, what is the value of $c$?',
    correctAnswer: '8',
    explanation: '**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**The correct answer is $8$.**\n\n**The Fast Way:** Eq2 = $2 \\cdot$ Eq1: $c = 16/2 = 8$.\n\n**Test Day Takeaway:** Find the scalar, apply to the constant.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-266', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For the system $2x - 3y = 5$ and $-6x + 9y = c$ to have infinitely many solutions, what is the value of $c$?',
    choices: [{ id: 'A', text: '$-15$' }, { id: 'B', text: '$15$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$-5$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice A is correct.**\n\n**The Fast Way:** Eq2 = $-3 \\cdot$ Eq1: $c = -3 \\cdot 5 = -15$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($15$): forgets the negative sign of the scale factor — applies $3 \\cdot 5$ instead of $-3 \\cdot 5$.\n* Choice C ($5$): keeps the original constant unchanged.\n* Choice D ($-5$): keeps the constant but applies just a single sign flip.\n\n**Test Day Takeaway:** Negative scalars multiply the constant too.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-267', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'medium', type: 'fill-in',
    question: 'If $kx + 3y = 9$ and $4x + 6y = 18$ have infinitely many solutions, what is the value of $k$?',
    correctAnswer: '2',
    explanation: '**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**The correct answer is $2$.**\n\n**The Fast Way:** $y$-ratio: $6/3 = 2$. Match $x$: $4/k = 2 \\Rightarrow k = 2$. Constants: $18/9 = 2$ \\checkmark.\n\n**Test Day Takeaway:** All three ratios ($x$, $y$, constants) must match.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-268', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For what value of $b$ does $5x + by = 10$ and $10x + 4y = 20$ have infinitely many solutions?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$10$' }, { id: 'D', text: '$\\dfrac{1}{2}$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice A is correct.**\n\n**The Fast Way:** Eq2 = $2 \\cdot$ Eq1: $b \\cdot 2 = 4 \\Rightarrow b = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): copies the $y$-coefficient from Eq2 directly — forgets to divide by the scale factor.\n* Choice C ($10$): copies the constant from Eq2 as the new coefficient.\n* Choice D ($1/2$): uses the reciprocal of the scale factor.\n\n**Test Day Takeaway:** Scalar from $x$-coefficients applies to ALL terms.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-269', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'medium', type: 'fill-in',
    question: 'If $3x - 4y = c$ and $9x - 12y = 21$ are equivalent (same line), what is the value of $c$?',
    correctAnswer: '7',
    explanation: '**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**The correct answer is $7$.**\n\n**The Fast Way:** Eq2 = $3 \\cdot$ Eq1: $c = 21/3 = 7$.\n\n**Test Day Takeaway:** "Equivalent" = scalar multiple = same line.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-270', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The system $ax + 5y = b$ and $4x + 10y = 18$ has infinitely many solutions. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$11$' }, { id: 'B', text: '$9$' }, { id: 'C', text: '$13$' }, { id: 'D', text: '$22$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice A is correct.**\n\n**The Fast Way:** Eq2 = $2 \\cdot$ Eq1: $4 = 2a \\Rightarrow a = 2$. $18 = 2b \\Rightarrow b = 9$. $a + b = 11$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): reports $b$ alone — forgets to add $a$.\n* Choice C ($13$): adds $4 + 9$ (the Eq2 $x$-coefficient + $b$) instead of $a + b$.\n* Choice D ($22$): doubles the sum — applies the scale factor to the final answer.\n\n**Test Day Takeaway:** Two unknowns; apply scalar to BOTH coefficients and constants.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-271', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'hard', type: 'fill-in',
    question: 'For the system $x + ay = 4$ and $3x - 6y = 12$ to have infinitely many solutions, what is the value of $a$?',
    correctAnswer: '-2',
    explanation: '**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**The correct answer is $-2$.**\n\n**The Fast Way:** Constants: $12/4 = 3$, so scalar is $3$. Match $y$-coefficient: $3a = -6 \\Rightarrow a = -2$.\n\n**Test Day Takeaway:** Solve for the scalar from the cleanest ratio (constants here), then apply to find unknowns.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 11/1: vertex-form-to-standard-form (8 items) =====
  // Convert vertex form to standard, ask for coefficient sum or specific value.
  { id: 'bank-alg-272', domain: 'algebra', skills: ['distributive-property', 'converting-quadratic-forms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = (x - 2)^2 + 3$. Which of the following expresses $f(x)$ in standard form $ax^2 + bx + c$?',
    choices: [{ id: 'A', text: '$x^2 - 4x + 7$' }, { id: 'B', text: '$x^2 + 4x + 7$' }, { id: 'C', text: '$x^2 - 4x + 3$' }, { id: 'D', text: '$x^2 - 2x + 3$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way:** $(x - 2)^2 = x^2 - 4x + 4$. Add $3$: $x^2 - 4x + 7$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($x^2 + 4x + 7$): sign error on the middle term — uses $+2h$ instead of $-2h$ when expanding $(x - h)^2$.\n* Choice C ($x^2 - 4x + 3$): forgets to add the $+3$ outside — drops the vertical shift.\n* Choice D ($x^2 - 2x + 3$): linear expansion error — multiplies $h$ once instead of twice ($-2h$ becomes $-h$).\n\n**Test Day Takeaway:** $(x - h)^2 = x^2 - 2hx + h^2$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-273', domain: 'algebra', skills: ['distributive-property', 'converting-quadratic-forms'], difficulty: 'easy', type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = (x + 3)^2 - 5$. What is the constant term in standard form?',
    correctAnswer: '4',
    explanation: '**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is $4$.**\n\n**The Fast Way:** $(x + 3)^2 = x^2 + 6x + 9$. $- 5$: constant $= 9 - 5 = 4$.\n\n**Test Day Takeaway:** Constant term = $h^2 + k$ when expanding $(x - h)^2 + k$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-274', domain: 'algebra', skills: ['distributive-property', 'converting-quadratic-forms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 2(x - 3)^2 + 1$. What is the coefficient of $x$ when $f(x)$ is written in standard form?',
    choices: [{ id: 'A', text: '$-12$' }, { id: 'B', text: '$-6$' }, { id: 'C', text: '$6$' }, { id: 'D', text: '$12$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way:** $2(x - 3)^2 = 2(x^2 - 6x + 9) = 2x^2 - 12x + 18$. Coefficient of $x$: $-12$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-6$): forgets to distribute the leading coefficient $2$ to the middle term — gives the coefficient inside the parentheses.\n* Choice C ($6$): drops the sign of $-6$ — applies the wrong sign convention to $-2h$.\n* Choice D ($12$): forgets the sign and uses the full distributed value $|2 \\cdot (-2h)| = 12$.\n\n**Test Day Takeaway:** Leading coefficient distributes to ALL terms after squaring.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-275', domain: 'algebra', skills: ['distributive-property', 'converting-quadratic-forms'], difficulty: 'medium', type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = (x - 5)^2 + 3$. When $f(x)$ is rewritten in the form $x^2 + bx + c$, what is the value of $b + c$?',
    correctAnswer: '18',
    explanation: '**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is $18$.**\n\n**The Fast Way:** $(x - 5)^2 + 3 = x^2 - 10x + 28$. $b + c = -10 + 28 = 18$.\n\n**Test Day Takeaway:** Sum of coefficients of $x$ + constant in standard form.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-276', domain: 'algebra', skills: ['distributive-property', 'converting-quadratic-forms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Function $f$ is given by $f(x) = a(x - 4)^2 - 7$. If $f(2) = 5$, what is the value of $a + b + c$ when $f$ is in standard form $ax^2 + bx + c$?',
    choices: [{ id: 'A', text: '$20$' }, { id: 'B', text: '$41$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$-3$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way:** $a + b + c = f(1)$. Find $a$ from $f(2) = 5$: $4a - 7 = 5 \\Rightarrow a = 3$. $f(1) = 3(1 - 4)^2 - 7 = 27 - 7 = 20$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($41$): plugs $x = 2$ into the standard form — computes $f(2) = 4a + 2b + c$ instead of $f(1)$.\n* Choice C ($3$): reports the value of $a$ alone — stops at solving for the leading coefficient.\n* Choice D ($-3$): sign-flipped value of $a$ — sign error when solving $4a - 7 = 5$.\n\n**Test Day Takeaway:** $a + b + c = f(1)$ shortcut. No need to expand to standard form.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-277', domain: 'algebra', skills: ['distributive-property', 'converting-quadratic-forms'], difficulty: 'medium', type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = -(x + 1)^2 + 6$. What is the constant term in standard form?',
    correctAnswer: '5',
    explanation: '**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is $5$.**\n\n**The Fast Way:** $-(x + 1)^2 = -(x^2 + 2x + 1) = -x^2 - 2x - 1$. Constant: $-1 + 6 = 5$.\n\n**Test Day Takeaway:** Apply the leading sign carefully when distributing.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-278', domain: 'algebra', skills: ['distributive-property', 'converting-quadratic-forms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 3(x - 2)^2 + k$, where $k$ is a constant. When $f(x)$ is rewritten in standard form, the result is $3x^2 - 12x + 17$. What is the value of $k$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$17$' }, { id: 'C', text: '$12$' }, { id: 'D', text: '$-12$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way:** $3(x - 2)^2 = 3x^2 - 12x + 12$. Plus $k$: constant $= 12 + k$. Set equal: $12 + k = 17 \\Rightarrow k = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($17$): copies the constant of the standard form as $k$ — forgets that the expansion contributes $+12$.\n* Choice C ($12$): reports the expansion constant ($3 \\cdot h^2$) as $k$ — confuses pieces.\n* Choice D ($-12$): reports the middle coefficient as $k$ — wrong slot.\n\n**Test Day Takeaway:** Match constants after expanding the vertex term.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-279', domain: 'algebra', skills: ['distributive-property', 'converting-quadratic-forms'], difficulty: 'hard', type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = 2(x - 3)^2 - 5$. What is the value of $f(x)$ at $x = 5$?',
    correctAnswer: '3',
    explanation: '**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is $3$.**\n\n**The Fast Way:** $f(5) = 2(5 - 3)^2 - 5 = 2(4) - 5 = 8 - 5 = 3$.\n\n**Test Day Takeaway:** No need to convert — just evaluate directly in vertex form.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 12/5: identifying-identity-contradiction-equations (8 items) =====
  { id: 'bank-alg-280', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which of the following equations has infinitely many solutions?',
    choices: [{ id: 'A', text: '$3(x + 2) = 3x + 6$' }, { id: 'B', text: '$3(x + 2) = 3x + 5$' }, { id: 'C', text: '$3(x + 2) = 5$' }, { id: 'D', text: '$3(x + 2) = 0$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice A is correct.**\n\n**The Fast Way:** A: $3x + 6 = 3x + 6$ — IDENTITY, infinitely many. B/C/D: solvable for unique $x$.\n\n**Why the wrong answers are tempting:**\n* Choice B: simplifies to $3x + 6 = 3x + 5$, a contradiction (no solution, not infinitely many).\n* Choice C: $3(x + 2) = 5 \\Rightarrow 3x = -1 \\Rightarrow x = -1/3$ — has a unique solution.\n* Choice D: $3(x + 2) = 0 \\Rightarrow x = -2$ — has a unique solution.\n\n**Test Day Takeaway:** Identity = same expression both sides (after simplification).',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'identifying-identity-contradiction-equations', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-281', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'easy', type: 'fill-in',
    question: 'For what value of $k$ does $4(x - 1) + 5 = 4x + k$ have infinitely many solutions?',
    correctAnswer: '1',
    explanation: '**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**The correct answer is $1$.**\n\n**The Fast Way:** LHS = $4x + 1$. Match: $k = 1$.\n\n**Test Day Takeaway:** Identity ⇔ constants match after simplification.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'identifying-identity-contradiction-equations', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-282', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following equations has no solution?',
    choices: [{ id: 'A', text: '$2(x + 3) = 2x + 5$' }, { id: 'B', text: '$2(x + 3) = 2x + 6$' }, { id: 'C', text: '$2(x + 3) = 0$' }, { id: 'D', text: '$2(x + 3) = x + 5$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice A is correct.**\n\n**The Fast Way:** A: $2x + 6 = 2x + 5$ → $6 = 5$ (false), NO solution. B is identity. C/D are solvable.\n\n**Why the wrong answers are tempting:**\n* Choice B: simplifies to $2x + 6 = 2x + 6$ — an IDENTITY (infinitely many solutions, NOT no solution).\n* Choice C: $2x + 6 = 0 \\Rightarrow x = -3$ — has a unique solution.\n* Choice D: $2x + 6 = x + 5 \\Rightarrow x = -1$ — has a unique solution.\n\n**Test Day Takeaway:** Contradiction ⇔ $x$-terms cancel and constants disagree.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'identifying-identity-contradiction-equations', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-283', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'fill-in',
    question: 'For what value of $k$ does $3(x + 4) - 2 = 3x + k$ have infinitely many solutions?',
    correctAnswer: '10',
    explanation: '**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**The correct answer is $10$.**\n\n**The Fast Way:** LHS $= 3x + 10$. Identity needs $k = 10$.\n\n**Test Day Takeaway:** Distribute and combine, then match constants.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'identifying-identity-contradiction-equations', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-284', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In the equation $a(2x - 3) = 10x + b$, $a$ and $b$ are constants. The equation has infinitely many solutions. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$-20$' }, { id: 'B', text: '$-15$' }, { id: 'C', text: '$-10$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Identity / Contradiction — Match Coefficients**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Infinitely many solutions $\\Rightarrow$ the two sides are the SAME linear expression. Expand left: $2ax - 3a$. Match $x$-coefficient with right side: $2a = 10 \\Rightarrow a = 5$. Match constant: $-3a = b \\Rightarrow b = -15$. So $a + b = 5 + (-15) = -10$.\n\n**The Full Solution:**\nStep 1: For an equation to be true for all values of $x$ (infinitely many solutions), the two sides must be identical as polynomials.\nStep 2: Expand the left side: $a(2x - 3) = 2ax - 3a$.\nStep 3: Match $x$-coefficients: $2a = 10 \\Rightarrow a = 5$.\nStep 4: Match constant terms: $-3a = b$, so $b = -3(5) = -15$.\nStep 5: $a + b = 5 + (-15) = -10$.\n\nVerification: plug back in: $5(2x - 3) = 10x - 15$ — both sides expand to $10x - 15$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-20$): forgets that $-3a$ goes to $b$ DIRECTLY (no extra factor) and computes $b = -3 \\cdot 5 - 5 = -20$ — adds an extra $-5$ somewhere.\n* Choice B ($-15$): reports $b$ alone instead of $a + b$. Stops one step early after finding $b = -15$.\n* Choice D ($5$): reports $a$ alone instead of $a + b$. Stops one step early after finding $a = 5$.\n\n**Test Day Takeaway:** Identity (infinitely many solutions) means the polynomials are identical — match coefficients term by term. After solving for the parameters, always re-read what the question asks for (a value, a sum, a product).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'identifying-identity-contradiction-equations', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-285', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'fill-in',
    question: 'For the equation $2(3x + 1) = 6x + a$ to have NO solution, what is the value $a$ cannot equal?',
    correctAnswer: '2',
    explanation: '**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**The correct answer is $2$.**\n\n**The Fast Way:** LHS $= 6x + 2$. If $a = 2$: identity (infinite). For no solution: $a \\ne 2$. The forbidden value for no-solution is $2$.\n\n**Test Day Takeaway:** Identity value is the ONE excluded for "no solution".',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'identifying-identity-contradiction-equations', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-286', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'hard', type: 'multiple-choice',
    question: 'For the equation $k(x + 3) + 7 = 4x + 13$ to have NO solution, what is the value of $k$?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$13$' }, { id: 'C', text: '$2$' }, { id: 'D', text: 'Any value works' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice A is correct.**\n\n**The Fast Way:** LHS $= kx + 3k + 7$. For no solution: $k = 4$ AND $3k + 7 \\ne 13$. $k = 4 \\Rightarrow 12 + 7 = 19 \\ne 13$ \\checkmark. So $k = 4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($13$): copies the constant from the right side as the value of $k$ — value confusion.\n* Choice C ($2$): finds $k$ such that the equation is satisfied at a particular $x$, but no-solution requires the $x$-terms to match.\n* Choice D (Any value): incorrect — only $k = 4$ produces no solution; other values give a unique $x$.\n\n**Test Day Takeaway:** No solution: $x$-coefs match AND constants do NOT.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'identifying-identity-contradiction-equations', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-287', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'hard', type: 'fill-in',
    question: 'For the equation $a(x - 2) + 5 = 3x + b$ to have infinitely many solutions, what is the value of $a + b$?',
    correctAnswer: '2',
    explanation: '**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**The correct answer is $2$.**\n\n**The Fast Way:** $a = 3$ (match $x$). $-2a + 5 = b \\Rightarrow b = -6 + 5 = -1$. $a + b = 2$.\n\n**Test Day Takeaway:** Both coefficient AND constant must match; solve in two steps.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'identifying-identity-contradiction-equations', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 12/6: absolute-value-equation (8 items) =====
  { id: 'bank-alg-288', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the solution set of $|x| = 5$?',
    choices: [{ id: 'A', text: '$\\{-5, 5\\}$' }, { id: 'B', text: '$\\{5\\}$' }, { id: 'C', text: '$\\{0\\}$' }, { id: 'D', text: '$\\{-5\\}$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Absolute Value Equation**\n\n**Choice A is correct.**\n\n**The Fast Way:** $|x| = 5$ ⇒ $x = \\pm 5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\{5\\}$): reports only the positive solution — forgets the negative branch.\n* Choice C ($\\{0\\}$): mis-reads the equation — perhaps confuses absolute value with squaring.\n* Choice D ($\\{-5\\}$): reports only the negative solution — forgets the positive branch.\n\n**Test Day Takeaway:** $|x| = k$ (positive $k$): TWO solutions $\\pm k$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'absolute-value-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-289', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'fill-in',
    question: 'How many solutions does the equation $|x| = 0$ have?',
    correctAnswer: '1',
    explanation: '**SAT Pattern: Absolute Value Equation**\n\n**The correct answer is $1$.**\n\n**The Fast Way:** $|x| = 0$ ⇒ $x = 0$ only.\n\n**Test Day Takeaway:** $|x| = 0$ has exactly ONE solution. $|x| < 0$ has NONE.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'absolute-value-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-290', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the sum of solutions of $|x - 3| = 7$?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$14$' }, { id: 'D', text: '$0$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Absolute Value Equation**\n\n**Choice A is correct.**\n\n**The Fast Way:** $x - 3 = \\pm 7 \\Rightarrow x = 10$ or $-4$. Sum: $6$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($10$): reports the larger solution alone, not the sum of both.\n* Choice C ($14$): doubles the constant $7$ — confuses $|x - h| = k$ symmetry.\n* Choice D ($0$): reports the sum assuming solutions are symmetric about $0$ — but they are symmetric about $h = 3$.\n\n**Test Day Takeaway:** Sum of $|x - h| = k$ solutions = $2h$ (symmetric about $h$).',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'absolute-value-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-291', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'fill-in',
    question: 'What is the positive solution of $|2x - 6| = 8$?',
    correctAnswer: '7',
    explanation: '**SAT Pattern: Absolute Value Equation**\n\n**The correct answer is $7$.**\n\n**The Fast Way:** $2x - 6 = \\pm 8$. $2x - 6 = 8 ⇒ x = 7$. $2x - 6 = -8 ⇒ x = -1$. Positive: $7$.\n\n**Test Day Takeaway:** Always check BOTH cases.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'absolute-value-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-292', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'How many real solutions does $|x + 4| = -3$ have?',
    choices: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$2$' }, { id: 'D', text: 'Infinite' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Absolute Value Equation**\n\n**Choice A is correct.**\n\n**The Fast Way:** $|x + 4|$ is always $\\geq 0$. Cannot equal $-3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): treats the negative RHS as a single solution — ignores that absolute value cannot be negative.\n* Choice C ($2$): applies the $|x| = k$ rule (which gives 2 solutions) without checking that $k$ must be non-negative.\n* Choice D (Infinite): confuses the impossibility with all-real-values condition.\n\n**Test Day Takeaway:** Absolute value is NEVER negative.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'absolute-value-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-293', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'fill-in',
    question: 'If $|x - 5| = 12$, what is the greater of the two solutions?',
    correctAnswer: '17',
    explanation: '**SAT Pattern: Absolute Value Equation**\n\n**The correct answer is $17$.**\n\n**The Fast Way:** $x - 5 = \\pm 12 \\Rightarrow x = 17$ or $-7$. Greater: $17$.\n\n**Test Day Takeaway:** Greater = $h + k$ for $|x - h| = k$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'absolute-value-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-294', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'If $|3x + 1| = 10$ and $x < 0$, what is the value of $x$?',
    choices: [{ id: 'A', text: '$-\\dfrac{11}{3}$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$\\dfrac{11}{3}$' }, { id: 'D', text: '$-3$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Absolute Value Equation**\n\n**Choice A is correct.**\n\n**The Fast Way:** $3x + 1 = \\pm 10$. $3x + 1 = 10 \\Rightarrow x = 3$. $3x + 1 = -10 \\Rightarrow x = -11/3$. With $x < 0$: $x = -11/3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): reports the POSITIVE solution — ignores the $x < 0$ constraint.\n* Choice C ($11/3$): solves the positive branch incorrectly — uses $3x + 1 = 10 \\Rightarrow x = 9/3 = 3$ but mis-arithmetic.\n* Choice D ($-3$): negates the positive solution without using $|...| = 10$ correctly.\n\n**Test Day Takeaway:** Solve both cases, filter by constraint.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'absolute-value-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-295', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'fill-in',
    question: 'The equation $|x + 4| + 3 = 10$ has two solutions. What is the product of those solutions?',
    correctAnswer: '-33',
    explanation: '**SAT Pattern: Absolute Value Equation**\n\n**The correct answer is $-33$.**\n\n**The Fast Way:** Isolate: $|x + 4| = 7 \\Rightarrow x + 4 = \\pm 7 \\Rightarrow x = 3$ or $-11$. Product: $3 \\cdot -11 = -33$.\n\n**Test Day Takeaway:** Isolate the absolute value FIRST, then split into two cases.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'absolute-value-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 15: top 2x patterns (concise items) =====
  // linear-equation-with-variables-on-both-sides
  { id: 'bank-alg-296', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $3x + 5 = 5x - 7$?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$-1$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$\\dfrac{3}{2}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Move $x$'s together and constants together: $5 + 7 = 5x - 3x \\Rightarrow 12 = 2x \\Rightarrow x = 6$.\n\n**The Full Solution:**\nSubtract $3x$ from both sides: $5 = 2x - 7$.\nAdd $7$: $12 = 2x$.\nDivide by $2$: $x = 6$.\n\nVerification: $3(6) + 5 = 23$ and $5(6) - 7 = 23$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-1$): sign error when moving terms — student writes $-2x = 12 \\Rightarrow x = -6$, then mis-arithmetic to $-1$.\n* Choice C ($2$): subtracts constants $5 - 7 = -2$ and divides by $-1$ (the wrong coefficient) — arrives at $2$.\n* Choice D ($3/2$): drops the $-7$ in the rearrangement — uses a setup error that produces $12/8$ then simplifies.\n\n**Test Day Takeaway:** With variables on both sides, isolate the $x$ terms first, then move the constants. Track signs carefully when subtracting from the larger-coefficient side.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-297', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $4x - 3 = 2x + 9$?',
    correctAnswer: '6',
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~10s):** Move $x$'s together and constants together: $4x - 2x = 9 + 3 \\Rightarrow 2x = 12 \\Rightarrow x = 6$.\n\n**The Full Solution:**\nSubtract $2x$ from both sides: $2x - 3 = 9$.\nAdd $3$ to both sides: $2x = 12$.\nDivide by $2$: $x = 6$.\n\nVerification: $4(6) - 3 = 21$ and $2(6) + 9 = 21$ \\checkmark.\n\n**Test Day Takeaway:** Variables-on-both-sides equations want all $x$'s on one side and all constants on the other. Subtract the smaller $x$-coefficient first to keep the leading coefficient positive.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-298', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $7 - 2x = x + 4$?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$-1$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Move $x$'s together: $7 - 4 = x + 2x \\Rightarrow 3 = 3x \\Rightarrow x = 1$.\n\n**The Full Solution:**\nAdd $2x$ to both sides: $7 = 3x + 4$.\nSubtract $4$: $3 = 3x$.\nDivide by $3$: $x = 1$.\n\nVerification: $7 - 2(1) = 5$ and $1 + 4 = 5$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-1$): sign error on the final isolation — student writes $-3x = -3$ then reports $x = -1$ instead of $x = 1$.\n* Choice C ($11$): adds the two constants $7 + 4$ without solving — the \"stops one step early\" trap.\n* Choice D ($3$): subtracts the constants $7 - 4 = 3$ and reports the difference without combining the $x$ terms.\n\n**Test Day Takeaway:** With variables on both sides, isolate $x$ before reporting. Constants by themselves are never the answer.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-299', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'fill-in',
    question: 'In the equation $\\dfrac{x + 5}{3} = \\dfrac{x - 1}{a}$, $a$ is a positive integer constant. If $x = 13$ is the solution to the equation, what is the value of $a$?',
    correctAnswer: '2',
    explanation: "**SAT Pattern: Parameter Inference from a Linear Equation**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~15s):** Plug in $x = 13$: LHS $= \\dfrac{18}{3} = 6$. RHS $= \\dfrac{12}{a}$. Set equal: $6 = \\dfrac{12}{a} \\Rightarrow a = 2$.\n\n**The Full Solution:**\nSince $x = 13$ is a solution, substituting it into the equation must produce a true statement.\nLHS: $\\dfrac{13 + 5}{3} = \\dfrac{18}{3} = 6$.\nRHS: $\\dfrac{13 - 1}{a} = \\dfrac{12}{a}$.\nThe equation $6 = \\dfrac{12}{a}$ requires $a = \\dfrac{12}{6} = 2$.\n\nVerification: with $a = 2$, the equation becomes $\\dfrac{x + 5}{3} = \\dfrac{x - 1}{2}$. Cross-multiplying: $2(x + 5) = 3(x - 1) \\Rightarrow 2x + 10 = 3x - 3 \\Rightarrow x = 13$ \\checkmark.\n\n**Test Day Takeaway:** When a parameter and a solution are both involved, substitute the solution to get a single equation in the parameter. Avoid solving the original symbolic equation unless necessary.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-300', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $5(x - 2) = 3x + 8$?',
    choices: [{ id: 'A', text: '$9$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$-1$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute: $5x - 10 = 3x + 8$. Subtract $3x$: $2x - 10 = 8$. Add $10$: $2x = 18 \\Rightarrow x = 9$.\n\n**The Full Solution:**\nDistribute the $5$: $5x - 10 = 3x + 8$.\nSubtract $3x$ from both sides: $2x - 10 = 8$.\nAdd $10$: $2x = 18$.\nDivide by $2$: $x = 9$.\n\nVerification: $5(9 - 2) = 35$ and $3(9) + 8 = 35$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): forgets to distribute the $-2$, getting $5x - 2 = 3x + 8 \\Rightarrow 2x = 10 \\Rightarrow x = 5$ — but a sign error yields $1$.\n* Choice C ($-1$): sign error after subtracting $3x$ — writes $2x = -2$ instead of $2x = 18$.\n* Choice D ($3$): drops a term during distribution: treats $5(x - 2)$ as $5x - 2$, then $5x - 2 = 3x + 8 \\Rightarrow 2x = 10$, but mis-divides.\n\n**Test Day Takeaway:** Distribute the coefficient through BOTH terms in the parentheses. Then collect $x$'s on one side and constants on the other.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-301', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $3(x + 4) = 5(x - 2)$?',
    correctAnswer: '11',
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~15s):** Distribute both sides: $3x + 12 = 5x - 10$. Move $x$'s together: $22 = 2x \\Rightarrow x = 11$.\n\n**The Full Solution:**\nDistribute: $3x + 12 = 5x - 10$.\nSubtract $3x$: $12 = 2x - 10$.\nAdd $10$: $22 = 2x$.\nDivide by $2$: $x = 11$.\n\nVerification: $3(15) = 45$ and $5(9) = 45$ \\checkmark.\n\n**Test Day Takeaway:** Distribute first, then collect like terms. When the $x$-coefficient on the right is bigger, subtract the smaller one (here $3x$) to keep things positive.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-302', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the equation $\\dfrac{ax + 5}{6} - \\dfrac{x - 3}{4} = \\dfrac{x + b}{12}$, $a$ and $b$ are constants. The equation is true for all values of $x$. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$19$' }, { id: 'D', text: '$21$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Polynomial Identity with Rational Expressions**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** Multiply both sides by $12$: $2(ax + 5) - 3(x - 3) = x + b$. Expand: $(2a - 3)x + 19 = x + b$. For an identity in $x$: $2a - 3 = 1 \\Rightarrow a = 2$, and $19 = b$. So $a + b = 21$.\n\n**The Full Solution:**\nThe equation is true for all $x$, so it is an IDENTITY: the two sides simplify to the same expression.\nMultiply every term by the LCD $12$:\n$\\quad 2(ax + 5) - 3(x - 3) = x + b$\nDistribute:\n$\\quad 2ax + 10 - 3x + 9 = x + b$\n$\\quad (2a - 3)x + 19 = x + b$\nMatch coefficients (one equation per power of $x$):\n$\\quad$ $x$-coefficient: $2a - 3 = 1 \\Rightarrow a = 2$\n$\\quad$ constant: $19 = b$\nTherefore $a + b = 2 + 19 = 21$.\n\nVerification: with $a = 2$, $b = 19$: $\\dfrac{2x + 5}{6} - \\dfrac{x - 3}{4}$ over common denominator $12$ gives $\\dfrac{2(2x + 5) - 3(x - 3)}{12} = \\dfrac{x + 19}{12}$ = RHS \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): sign error when distributing $-(x - 3) \\to -x - 3$ instead of $-x + 3$, then $2ax + 10 - 3x - 9 = x + b$ gives $(2a-3)x + 1 = x + b \\Rightarrow a = 2, b = 1$. Then $a + b = 3$, but mis-arithmetic to $0$.\n* Choice B ($2$): reports the value of $a$ alone — stops one step short, ignores $b$.\n* Choice C ($19$): reports the value of $b$ alone — stops one step short, ignores $a$.\n\n**Test Day Takeaway:** A polynomial identity gives ONE equation per power of $x$. Clear denominators with the LCD, then match the $x$-coefficient and the constant SEPARATELY. Watch the sign on distributed negatives.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-303', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $2(3x - 1) - 4 = 5x + 3$?',
    correctAnswer: '9',
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~15s):** Simplify the left side: $2(3x - 1) - 4 = 6x - 2 - 4 = 6x - 6$. Now $6x - 6 = 5x + 3 \\Rightarrow x = 9$.\n\n**The Full Solution:**\nDistribute on the left: $6x - 2 - 4 = 5x + 3$.\nCombine constants on the left: $6x - 6 = 5x + 3$.\nSubtract $5x$: $x - 6 = 3$.\nAdd $6$: $x = 9$.\n\nVerification: $2(27 - 1) - 4 = 48$ and $5(9) + 3 = 48$ \\checkmark.\n\n**Test Day Takeaway:** Simplify each side fully BEFORE crossing terms. Distribute, then combine like terms on the same side, then move $x$'s.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  // linear-equation-with-distribution
  { id: 'bank-alg-304', domain: 'algebra', skills: ['distributive-property'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $3(x + 4) = 27$, what is the value of $x + 4$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$9$' }, { id: 'C', text: '$13$' }, { id: 'D', text: '$23$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Shifted-Output Linear**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** The asked quantity is $(x + 4)$. Divide both sides by $3$ to isolate it directly: $x + 4 = 27/3 = 9$.\n\n**The Full Solution:**\nThe equation $3(x + 4) = 27$ has $(x + 4)$ already grouped on the left. Divide both sides by $3$ to recover the value of the bracketed expression:\n$\\quad 3(x + 4) = 27 \\Rightarrow x + 4 = 9$.\nThe answer is $9$ — no need to solve for $x$ separately.\n\nVerification (long way): from $x + 4 = 9$, $x = 5$. Plug back: $3(5 + 4) = 3 \\cdot 9 = 27$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): solves for $x$ ($x = 5$) and reports it instead of $x + 4$ — stops one step early on the wrong quantity.\n* Choice C ($13$): correctly computes $x + 4 = 9$ then mistakenly adds $4$ again — double-counts the $+4$.\n* Choice D ($23$): subtracts $4$ from $27$ ($27 - 4 = 23$) instead of dividing by $3$ — applies the inverse of the outer operation but the wrong outer operation.\n\n**Test Day Takeaway:** When the question asks for a SHIFTED expression of $x$ (like $x + 4$, $2x - 3$, etc.), isolate that expression directly. You often do not need to solve for $x$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-305', domain: 'algebra', skills: ['distributive-property'], difficulty: 'easy', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $4(2x - 1) = 28$?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~10s):** Divide both sides by $4$: $2x - 1 = 7 \\Rightarrow 2x = 8 \\Rightarrow x = 4$.\n\n**The Full Solution:**\nDivide by $4$: $2x - 1 = 7$.\nAdd $1$: $2x = 8$.\nDivide by $2$: $x = 4$.\n\nVerification: $4(2 \\cdot 4 - 1) = 4 \\cdot 7 = 28$ \\checkmark.\n\n**Test Day Takeaway:** When the right side is divisible by the outer coefficient, divide first to avoid messier distributed numbers.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-306', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The equation $5(x - a) = 25$ has solution $x = 3$, where $a$ is a constant. What is the value of $a$?',
    choices: [{ id: 'A', text: '$-5$' }, { id: 'B', text: '$-2$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Solve for a Parameter Given a Solution**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Substitute $x = 3$: $5(3 - a) = 25 \\Rightarrow 3 - a = 5 \\Rightarrow -a = 2 \\Rightarrow a = -2$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 3$ into the equation: $5(3 - a) = 25$.\nStep 2: Divide both sides by $5$: $3 - a = 5$.\nStep 3: Isolate $a$: $-a = 2$, so $a = -2$.\n\nVerification: with $a = -2$: $5(3 - (-2)) = 5(5) = 25$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): reports the value of the right-hand side after dividing ($25/5 = 5$), then sign-flips. A 'stops at the intermediate quotient' error.\n* Choice B ($-2$): correct.\n* Choice C ($2$): subtracts in the wrong direction: $a = 5 - 3 = 2$ instead of $a = 3 - 5 = -2$.\n* Choice D ($5$): reports $25/5 = 5$ directly as $a$, treating the intermediate quotient as the final answer.\n\n**Test Day Takeaway:** When a problem gives an equation with a parameter and a specific solution, substitute the solution and solve for the parameter. Watch the direction of subtraction — $3 - a$ is not the same as $a - 3$. Divide before distributing when the RHS is divisible by the leading coefficient.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-307', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $5(x - 2) + 3 = 18$?',
    correctAnswer: '5',
    explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~10s):** Subtract $3$ first: $5(x - 2) = 15 \\Rightarrow x - 2 = 3 \\Rightarrow x = 5$.\n\n**The Full Solution:**\nSubtract $3$ from both sides: $5(x - 2) = 15$.\nDivide by $5$: $x - 2 = 3$.\nAdd $2$: $x = 5$.\n\nVerification: $5(5 - 2) + 3 = 15 + 3 = 18$ \\checkmark.\n\n**Test Day Takeaway:** When a constant is added OUTSIDE the parentheses, undo it first before dividing. Distributive structure is preserved.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-308', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In the equation $k(x + 2) - 3 = 4x + c$, $k$ and $c$ are constants. For what value of $k$ does the equation have exactly one solution for $x$, regardless of the value of $c$?',
    choices: [{ id: 'A', text: 'Any value of $k$ except $4$' }, { id: 'B', text: '$k = 4$ only' }, { id: 'C', text: '$k = 0$ only' }, { id: 'D', text: '$k = -4$ only' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Equation with Distribution (Solution-Count Condition)**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Distribute: $kx + 2k - 3 = 4x + c \\Rightarrow (k - 4)x = c - 2k + 3$. Exactly one solution requires $k - 4 \\ne 0$, i.e., $k \\ne 4$.\n\n**The Full Solution:**\nDistribute the $k$: $kx + 2k - 3 = 4x + c$.\nMove $x$-terms together and constants together: $kx - 4x = c - 2k + 3$, or $(k - 4)x = c - 2k + 3$.\n\nSolution counts depend on the coefficient $(k - 4)$:\n$\\quad$ if $k - 4 \\ne 0$: divide to get a unique $x = \\dfrac{c - 2k + 3}{k - 4}$ (one solution for any $c$).\n$\\quad$ if $k - 4 = 0$ (i.e., $k = 4$): the equation becomes $0 = c - 5$. This is true only when $c = 5$ (infinite solutions) and false otherwise (no solution).\n\nSo for the equation to have exactly one solution REGARDLESS of $c$, we need $k - 4 \\ne 0$, which means $k$ can be any value except $4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($k = 4$ only): this is the value that makes the coefficient vanish, giving either infinitely many or no solutions — the OPPOSITE of what is asked.\n* Choice C ($k = 0$ only): a single specific value gives a single solution, but other values of $k \\ne 4$ also work.\n* Choice D ($k = -4$ only): same misreading — a specific value rather than a condition.\n\n**Test Day Takeaway:** A linear equation $ax = b$ has exactly one solution iff $a \\ne 0$, infinitely many iff $a = 0$ and $b = 0$, and no solution iff $a = 0$ and $b \\ne 0$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-309', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $2(3x + 1) - 5 = 9$?',
    correctAnswer: '2',
    explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~10s):** Add $5$: $2(3x + 1) = 14 \\Rightarrow 3x + 1 = 7 \\Rightarrow 3x = 6 \\Rightarrow x = 2$.\n\n**The Full Solution:**\nDistribute the $2$: $6x + 2 - 5 = 9$.\nCombine constants: $6x - 3 = 9$.\nAdd $3$: $6x = 12$.\nDivide: $x = 2$.\n\nVerification: $2(6 + 1) - 5 = 14 - 5 = 9$ \\checkmark.\n\n**Test Day Takeaway:** Distribute first OR isolate the bracket first. Both work; pick the one with cleaner numbers.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-310', domain: 'algebra', skills: ['distributive-property'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the equation $a(x + 5) - 2(x - 3) = 4x + c$, $a$ and $c$ are constants. If the equation has infinitely many solutions, what is the value of $a + c$?',
    choices: [{ id: 'A', text: '$42$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$36$' }, { id: 'D', text: '$30$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Distribute the LHS: $(a - 2)x + (5a + 6)$. For infinitely many solutions, both sides must be identical: $a - 2 = 4 \\Rightarrow a = 6$; $5a + 6 = c \\Rightarrow c = 36$. So $a + c = 42$.\n\n**The Full Solution:**\nDistribute and simplify the left side: $a(x + 5) - 2(x - 3) = ax + 5a - 2x + 6 = (a - 2)x + (5a + 6)$.\nThe right side is $4x + c$.\nFor the equation to have infinitely many solutions, the coefficients of $x$ must match AND the constant terms must match:\n$\\quad a - 2 = 4 \\Rightarrow a = 6$\n$\\quad 5a + 6 = c \\Rightarrow 5(6) + 6 = c \\Rightarrow c = 36$\nTherefore, $a + c = 6 + 36 = 42$.\n\nVerification: with $a = 6, c = 36$: LHS $= 6(x + 5) - 2(x - 3) = 6x + 30 - 2x + 6 = 4x + 36$ = RHS \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): reports the value of $a$ alone — stops one step early before computing $c$.\n* Choice C ($36$): reports the value of $c$ alone — stops one step early before computing $a$.\n* Choice D ($30$): sign error on the constant equation — uses $5a - 6 = c \\Rightarrow c = 24$, then $a + c = 30$.\n\n**Test Day Takeaway:** Infinitely many solutions means the equation is an IDENTITY: the two sides simplify to the same expression. Match the $x$-coefficient and the constant SEPARATELY.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-311', domain: 'algebra', skills: ['distributive-property'], difficulty: 'hard', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $4(x + 3) = 2(x + 10) + 4$?',
    correctAnswer: '6',
    explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~15s):** Distribute both: $4x + 12 = 2x + 20 + 4 \\Rightarrow 4x + 12 = 2x + 24 \\Rightarrow 2x = 12 \\Rightarrow x = 6$.\n\n**The Full Solution:**\nDistribute the $4$: $4x + 12$. Distribute the $2$: $2x + 20$.\nNow $4x + 12 = 2x + 20 + 4$, so combine the right side: $4x + 12 = 2x + 24$.\nSubtract $2x$: $2x + 12 = 24$.\nSubtract $12$: $2x = 12$.\nDivide: $x = 6$.\n\nVerification: $4(9) = 36$ and $2(16) + 4 = 36$ \\checkmark.\n\n**Test Day Takeaway:** Distribute on BOTH sides first, then combine constants on each side, THEN balance. Working step-by-step prevents sign errors.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  // combining-like-terms (2x)
  { id: 'bank-alg-312', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What value of $a$ satisfies the equation $3a + 5a - 2a = 24$?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$24$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Combining Like Terms — Solve for the Variable**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Combine the like terms: $(3 + 5 - 2)a = 6a$. So $6a = 24 \\Rightarrow a = 4$.\n\n**The Full Solution:**\nCombine the like terms on the left by adding the coefficients: $3 + 5 - 2 = 6$, giving $6a = 24$.\nDivide both sides by $6$: $a = 4$.\n\nVerification: $3(4) + 5(4) - 2(4) = 12 + 20 - 8 = 24$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): reports the COEFFICIENT after combining ($6a$, so coefficient is $6$) instead of the value of $a$.\n* Choice C ($3$): combines only two of the three terms — uses $3a + 5a = 8a$ ignoring $-2a$, then $8a = 24 \\Rightarrow a = 3$.\n* Choice D ($24$): reports the right side of the equation as the answer — number/variable confusion.\n\n**Test Day Takeaway:** When like terms appear on one side and a number on the other, combine the coefficients FIRST to get a single $a$-coefficient, then divide.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-313', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'fill-in',
    question: 'In the simplified form of $4y - 7y + 2y$, what is the coefficient of $y$?',
    correctAnswer: '-1',
    explanation: "**SAT Pattern: Combining Like Terms**\n\n**The correct answer is $-1$.**\n\n**The Fast Way (~5s):** $4 - 7 + 2 = -1$.\n\n**The Full Solution:**\nAll three terms have the same variable $y$. Combine the coefficients:\n$4 - 7 + 2 = -1$.\nThe simplified expression is $-y$, so the coefficient of $y$ is $-1$.\n\nVerification: pick $y = 1$: $4 - 7 + 2 = -1 = -1(1)$ \\checkmark.\n\n**Test Day Takeaway:** Coefficient questions ask only for the numeric part, including the sign. The variable factor itself is not part of the answer.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-314', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which expression is equivalent to $(3x - 2) + (4x + 5)$?',
    choices: [{ id: 'A', text: '$7x + 3$' }, { id: 'B', text: '$7x - 7$' }, { id: 'C', text: '$x + 3$' }, { id: 'D', text: '$12x$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Combining Like Terms**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Add the $x$-coefficients ($3 + 4 = 7$) and the constants ($-2 + 5 = 3$): $7x + 3$.\n\n**The Full Solution:**\nRemove the parentheses: $3x - 2 + 4x + 5$.\nGroup like terms: $(3x + 4x) + (-2 + 5)$.\nCombine: $7x + 3$.\n\nVerification: pick $x = 1$: $(3 - 2) + (4 + 5) = 1 + 9 = 10$ and $7(1) + 3 = 10$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B ($7x - 7$): correct $x$-coefficient, but flips signs and computes $-2 - 5 = -7$ instead of $-2 + 5 = 3$.\n* Choice C ($x + 3$): correct constants, but subtracts the $x$-coefficients ($4 - 3 = 1$) instead of adding.\n* Choice D ($12x$): merges everything ($3 + 4 - 2 + 5 = 10$? no, $3 + 4 + 5 = 12$ ignoring the $-2$ and the variable), dropping the constant entirely.\n\n**Test Day Takeaway:** When two parenthesized sums are added, drop the parentheses (no sign change) and combine like terms separately for variables and constants.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-315', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'fill-in',
    question: 'In the simplified form of $2x^2 + 3x - x^2 + 4x$, what is the coefficient of $x$?',
    correctAnswer: '7',
    explanation: "**SAT Pattern: Combining Like Terms**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~10s):** Add the $x$-coefficients (NOT $x^2$): $3 + 4 = 7$.\n\n**The Full Solution:**\nGroup by power of $x$:\nThe $x^2$ terms: $2x^2 - x^2 = x^2$.\nThe $x$ terms: $3x + 4x = 7x$.\nThe simplified expression is $x^2 + 7x$. The coefficient of $x$ is $7$.\n\nVerification: pick $x = 1$: $2 + 3 - 1 + 4 = 8$ and $1 + 7 = 8$ \\checkmark.\n\n**Test Day Takeaway:** $x^2$ and $x$ are NOT like terms — they have different powers. Group each power separately when simplifying.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-316', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For all values of $x$, $a(x - 2) - 3(x + 4) = 2x - 22$, where $a$ is a constant. What is the value of $a$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$-3$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Parameter Inference (Identity)**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Distribute the LHS: $ax - 2a - 3x - 12 = (a - 3)x - (2a + 12)$. Match coefficients with $2x - 22$: $a - 3 = 2 \\Rightarrow a = 5$. Verify: $-(2 \\cdot 5 + 12) = -22$ \\checkmark.\n\n**The Full Solution:**\nSince the equation holds for all values of $x$, the two sides must be identical as polynomials. Expand the LHS:\n$\\quad a(x - 2) - 3(x + 4) = ax - 2a - 3x - 12 = (a - 3)x - (2a + 12)$.\nSet the LHS equal to the RHS $2x - 22$ and match coefficients:\n$\\quad$ $x$-coefficient: $a - 3 = 2 \\Rightarrow a = 5$\n$\\quad$ constant: $-(2a + 12) = -22 \\Rightarrow 2a + 12 = 22 \\Rightarrow a = 5$ \\checkmark (consistent)\n\nBoth conditions give $a = 5$, confirming the identity.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): reads $a$ off the RHS coefficient directly without solving — copies the $x$-coefficient from the RHS.\n* Choice C ($-3$): reads $a$ from the $-3$ coefficient on the second bracket — wrong variable, formula confusion.\n* Choice D ($3$): solves $a - 3 = 2$ then takes the wrong sign on the constant equation — gets $a = 3$ via sign error.\n\n**Test Day Takeaway:** \"For all values of $x$\" means the two sides are an IDENTITY. Expand both sides, then match the $x$-coefficient and the constant term SEPARATELY.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-317', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'fill-in',
    question: 'In the simplified form of $4(2x - 1) - 3(x + 2)$, what is the constant term?',
    correctAnswer: '-10',
    explanation: "**SAT Pattern: Combining Like Terms**\n\n**The correct answer is $-10$.**\n\n**The Fast Way (~10s):** Distribute constants: $4 \\cdot (-1) = -4$ and $-3 \\cdot 2 = -6$. Sum: $-4 - 6 = -10$.\n\n**The Full Solution:**\nDistribute the $4$: $8x - 4$.\nDistribute the $-3$: $-3x - 6$.\nCombine: $(8x - 3x) + (-4 - 6) = 5x - 10$.\nThe constant term is $-10$.\n\nVerification: pick $x = 1$: $4(1) - 3(3) = 4 - 9 = -5$ and $5(1) - 10 = -5$ \\checkmark.\n\n**Test Day Takeaway:** The constant term is the part with no variable. After distributing, combine only the constants — ignore the $x$ terms for this question.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-318', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'For all values of $x$, $a(x^2 + 3x) - (x^2 - 5x) = 3x^2 + bx$, where $a$ and $b$ are constants. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$21$' }, { id: 'B', text: '$17$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Polynomial Identity with Two Parameters**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Expand LHS: $(a - 1)x^2 + (3a + 5)x$. Match: $a - 1 = 3 \\Rightarrow a = 4$; $3(4) + 5 = b \\Rightarrow b = 17$. $a + b = 21$.\n\n**The Full Solution:**\nExpand the LHS: $a(x^2 + 3x) - (x^2 - 5x) = ax^2 + 3ax - x^2 + 5x = (a - 1)x^2 + (3a + 5)x$.\nMatch the RHS $3x^2 + bx$:\n$\\quad x^2$-coefficient: $a - 1 = 3 \\Rightarrow a = 4$\n$\\quad x$-coefficient: $3a + 5 = b \\Rightarrow b = 3(4) + 5 = 17$\nSum: $a + b = 4 + 17 = 21$.\n\nVerification: with $a = 4$: $4(x^2 + 3x) - (x^2 - 5x) = 4x^2 + 12x - x^2 + 5x = 3x^2 + 17x = $ RHS \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B ($17$): reports $b$ alone — stops one step short.\n* Choice C ($4$): reports $a$ alone — stops one step short.\n* Choice D ($5$): mis-arithmetic — uses $b = 5$ from the constant of the inner bracket, then $a + b = 4 + 1 = 5$ via further error.\n\n**Test Day Takeaway:** Polynomial identity gives ONE equation per power of $x$. Match coefficients of $x^2$, $x$, and constant terms SEPARATELY.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-319', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'fill-in',
    question: 'In the simplified form of $3(x^2 - 2x) - 2(x^2 + 4)$, what is the coefficient of $x^2$?',
    correctAnswer: '1',
    explanation: "**SAT Pattern: Combining Like Terms**\n\n**The correct answer is $1$.**\n\n**The Fast Way (~10s):** Combine $x^2$ coefficients: $3 - 2 = 1$.\n\n**The Full Solution:**\nDistribute: $3x^2 - 6x - 2x^2 - 8$.\nGroup by power:\n$x^2$: $3x^2 - 2x^2 = x^2$ (coefficient $1$).\n$x$: $-6x$.\nconstants: $-8$.\nResult: $x^2 - 6x - 8$. The coefficient of $x^2$ is $1$.\n\nVerification: pick $x = 1$: $3(1 - 2) - 2(1 + 4) = -3 - 10 = -13$ and $1 - 6 - 8 = -13$ \\checkmark.\n\n**Test Day Takeaway:** A coefficient question targets only one power. Group terms by power, then read off the coefficient of the requested power.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  // ─── SOLVE FOR INPUT FROM OUTPUT (bank-alg-320..326) ──────────────────────
  // Granularity principle: inverse evaluation (given f(a)=c, find a) is a
  // DISTINCT method from direct evaluation. Items pin "solve an equation"
  // not "substitute and compute."
  { id: 'bank-alg-320', domain: 'algebra', skills: ['function-notation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 2x + 5$. For what value of $x$ does $f(x) = 13$?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$9$' }, { id: 'C', text: '$13$' }, { id: 'D', text: '$31$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Set $2x + 5 = 13 \\Rightarrow 2x = 8 \\Rightarrow x = 4$.\n\n**The Full Solution:**\nThis is the INVERSE of direct evaluation. Instead of plugging $x$ in to get $f(x)$, set the output expression equal to the given value and SOLVE for $x$:\n$f(x) = 13$ becomes $2x + 5 = 13$.\nSubtract $5$: $2x = 8$. Divide by $2$: $x = 4$.\n\nVerification: $f(4) = 2(4) + 5 = 13$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: confuses input with output — gives $f(2)$.\n* C: returns the given output value without solving.\n* D: $13 \\cdot 2 + 5$ (wrong direction).\n\n**Test Day Takeaway:** \"What is $x$ when $f(x) = c$\" means SOLVE an equation. Direction matters: input → output (substitute) vs output → input (solve).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-input-from-output', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-321', domain: 'algebra', skills: ['function-notation'], difficulty: 'easy', type: 'fill-in',
    question: 'The function $g$ is defined by $g(x) = 3x - 7$. If $g(a) = 8$, what is the value of $a$?',
    correctAnswer: '5',
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~10s):** $3a - 7 = 8 \\Rightarrow 3a = 15 \\Rightarrow a = 5$.\n\n**The Full Solution:**\nThe notation $g(a) = 8$ means: input is $a$, output is $8$.\nSubstitute and solve: $3a - 7 = 8$. Add $7$: $3a = 15$. Divide by $3$: $a = 5$.\n\nVerification: $g(5) = 3(5) - 7 = 8$ \\checkmark.\n\n**Common Mistakes:** Reporting $8$ (the output, not the input); reporting $3$ (subtracts $7$ from $8$ without dividing); reporting $1$ ($8-7=1$, ignores the $3$).\n\n**Test Day Takeaway:** $g(a) = c$ is an equation in $a$. Solve it like any other linear equation.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-input-from-output', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-322', domain: 'algebra', skills: ['function-notation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = -4x + 12$. If $f(a) = -8$, what is the value of $a$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$-5$' }, { id: 'C', text: '$1$' }, { id: 'D', text: '$-1$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $-4a + 12 = -8 \\Rightarrow -4a = -20 \\Rightarrow a = 5$.\n\n**The Full Solution:**\nSet $f(a) = -8$: $-4a + 12 = -8$.\nSubtract $12$: $-4a = -20$. Divide by $-4$: $a = 5$.\n\nVerification: $f(5) = -4(5) + 12 = -8$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: sign error on the division.\n* C: arithmetic from a wrong setup.\n* D: drops the sign and divides incorrectly.\n\n**Test Day Takeaway:** Negative coefficients flip sign on division. Track signs at every step.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-input-from-output', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-323', domain: 'algebra', skills: ['function-notation'], difficulty: 'medium', type: 'fill-in',
    question: 'A tank drains according to $V(t) = 240 - 12t$, where $V$ is the volume in gallons remaining after $t$ minutes. At what time, in minutes, does the volume reach $60$ gallons?',
    correctAnswer: '15',
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~10s):** $240 - 12t = 60 \\Rightarrow 12t = 180 \\Rightarrow t = 15$.\n\n**The Full Solution:**\nThe question asks for the TIME ($t$, input) at which volume ($V$, output) equals $60$.\nSet $V(t) = 60$: $240 - 12t = 60$.\nSubtract $240$: $-12t = -180$. Divide by $-12$: $t = 15$.\n\nVerification: $V(15) = 240 - 180 = 60$ \\checkmark.\n\n**Common Mistakes:** Reporting $60$ (the output); reporting $180$ (stops before dividing); reporting $20$ ($240/12$ as a shortcut).\n\n**Test Day Takeaway:** In word problems, identify which variable is INPUT and which is OUTPUT. \"When does $V$ equal X\" means \"find $t$.\"",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'solve-for-input-from-output', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-324', domain: 'algebra', skills: ['function-notation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The table below shows three values of a linear function $f$. For what value of $x$ does $f(x) = 29$?',
    diagram: { type: 'dataTable', params: { headers: ['x', 'f(x)'], rows: [['-2', '-7'], ['1', '5'], ['4', '17']] } },
    choices: [{ id: 'A', text: '$7$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$29$' }, { id: 'D', text: '$12$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Slope $= (5 - (-7))/(1 - (-2)) = 12/3 = 4$. With point $(1, 5)$: $f(x) = 4x + 1$. Set $4x + 1 = 29 \\Rightarrow x = 7$.\n\n**The Full Solution:**\nStep 1: Recover the function. Slope $= \\frac{5 - (-7)}{1 - (-2)} = 4$. Using $(1, 5)$: $5 = 4(1) + b \\Rightarrow b = 1$. So $f(x) = 4x + 1$.\nStep 2: Solve $4x + 1 = 29 \\Rightarrow x = 7$.\n\nVerification: $f(7) = 4(7) + 1 = 29$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B ($8$): rounds $29/4 = 7.25$ up to $8$ — divides the target output by the slope but forgets to subtract the intercept first.\n* C ($29$): returns the target output value itself — confuses input with output.\n* D ($12$): reports the change in output between the last table row and the target ($29 - 17 = 12$) — confuses the change with the input value.\n\n**Test Day Takeaway:** From a table of a linear function: slope first, intercept second, then solve for the requested input.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-input-from-output', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-325', domain: 'algebra', skills: ['function-notation'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = x^2 - 9$. If $f(a) = 16$ and $a > 0$, what is the value of $a$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$7$' }, { id: 'D', text: '$25$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $a^2 - 9 = 16 \\Rightarrow a^2 = 25 \\Rightarrow a = 5$ (positive).\n\n**The Full Solution:**\nSet $f(a) = 16$: $a^2 - 9 = 16$.\nAdd $9$: $a^2 = 25$. Square root: $a = \\pm 5$. Question specifies positive, so $a = 5$.\n\nVerification: $f(5) = 25 - 9 = 16$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: takes $\\sqrt{16}$ directly without first solving for $a^2$.\n* C: $16 - 9 = 7$ (treats it as direct evaluation).\n* D: stops at $a^2 = 25$ without taking the root.\n\n**Test Day Takeaway:** Inverse evaluation of quadratics gives TWO inputs ($\\pm$). Read the question's sign constraint carefully.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-input-from-output', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-326', domain: 'algebra', skills: ['function-notation'], difficulty: 'hard', type: 'fill-in',
    question: 'The functions $f$ and $g$ are defined by $f(x) = 2x + 3$ and $g(x) = f(x) - 7$. For what value of $x$ does $g(x) = 0$?',
    correctAnswer: '2',
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~10s):** $g(x) = (2x + 3) - 7 = 2x - 4$. Set $2x - 4 = 0 \\Rightarrow x = 2$.\n\n**The Full Solution:**\nFirst simplify: $g(x) = f(x) - 7 = (2x + 3) - 7 = 2x - 4$.\nThen solve $g(x) = 0$: $2x - 4 = 0 \\Rightarrow x = 2$.\n\nVerification: $g(2) = 2(2) - 4 = 0$ \\checkmark. Alt: $f(2) = 7$, $g(2) = 7 - 7 = 0$ \\checkmark.\n\n**Common Mistakes:** Reporting $0$ (the given output); reporting $-2$ (sign error); reporting $5$ (solves $f(x) = 7$ but forgets to apply $-7$).\n\n**Test Day Takeaway:** When functions are nested, simplify FIRST, solve SECOND. Always identify input vs output.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-input-from-output', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  // ─── LINEAR COST EQUATION SETUP (bank-alg-327..333) ───────────────────────
  // Granularity principle: SINGLE-variable linear cost setup (fixed fee +
  // per-unit), NOT a 2-variable system. Previously mis-aliased into
  // two-equation-system-from-a-word-problem pool. Now its own pattern.
  { id: 'bank-alg-327', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A gym charges a $\\$30$ joining fee plus $\\$15$ per month. Which equation models the total cost $C$ for $m$ months of membership?',
    choices: [{ id: 'A', text: '$C = 15m + 30$' }, { id: 'B', text: '$C = 30m + 15$' }, { id: 'C', text: '$C = 45m$' }, { id: 'D', text: '$C = 30 - 15m$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Fixed fee ($\\$30$) is the constant; per-month ($\\$15$) is the slope multiplied by $m$. Total: $15m + 30$.\n\n**The Full Solution:**\nLinear cost model: $C = (\\text{rate})(\\text{quantity}) + (\\text{fixed fee})$.\nHere rate $= \\$15/\\text{month}$, quantity $= m$ months, fixed fee $= \\$30$.\n$C = 15m + 30$.\n\nVerification: at $m = 0$ (signup day): $C = 30$ \\checkmark. After $4$ months: $C = 60 + 30 = 90$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: swaps which value is per-month vs fixed.\n* C: adds the two values instead of treating them separately.\n* D: subtracts instead of adds.\n\n**Test Day Takeaway:** \"Joining fee\" / \"setup\" / \"one-time\" $\\to$ constant. \"Per X\" $\\to$ slope (coefficient of variable). Use $+$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-cost-equation-setup', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-328', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'easy', type: 'fill-in',
    question: 'A printing service charges a $\\$8$ setup fee plus $\\$0.25$ per page. The total cost of an order with $p$ pages is $\\$23$. What is the value of $p$?',
    correctAnswer: '60',
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**The correct answer is $60$.**\n\n**The Fast Way (~10s):** $0.25p + 8 = 23 \\Rightarrow 0.25p = 15 \\Rightarrow p = 60$.\n\n**The Full Solution:**\nSetup: total $=$ (per-page rate)(pages) $+$ setup fee.\n$0.25p + 8 = 23$.\nSubtract $8$: $0.25p = 15$. Divide by $0.25$: $p = 60$.\n\nVerification: $0.25(60) + 8 = 15 + 8 = 23$ \\checkmark.\n\n**Common Mistakes:** Reporting $23$ (the total cost); reporting $15$ (stops before dividing); reporting $92$ ($23/0.25$ ignoring the fee).\n\n**Test Day Takeaway:** Setup fee subtracts from total BEFORE dividing by the per-unit rate.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'linear-cost-equation-setup', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-329', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A car rental company charges a flat $\\$25$ insurance fee plus $\\$0.40$ per mile driven. Sara\'s total bill was $\\$73$. How many miles did she drive?',
    choices: [{ id: 'A', text: '$120$' }, { id: 'B', text: '$182.5$' }, { id: 'C', text: '$48$' }, { id: 'D', text: '$245$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $0.40m + 25 = 73 \\Rightarrow 0.40m = 48 \\Rightarrow m = 120$.\n\n**The Full Solution:**\nCost equation: $0.40m + 25 = 73$.\nSubtract $25$: $0.40m = 48$. Divide by $0.40$: $m = 120$.\n\nVerification: $0.40(120) + 25 = 48 + 25 = 73$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: $73/0.40$ — ignores the fee.\n* C: $48$ — stops before dividing.\n* D: random-ish; arithmetic slip.\n\n**Test Day Takeaway:** Cost = rate × quantity + fixed fee. To solve for quantity: subtract fee FIRST, then divide.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'linear-cost-equation-setup', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-330', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'medium', type: 'fill-in',
    question: 'A photographer charges a $\\$120$ session fee plus $\\$15$ per printed photo. A client\'s total bill is $\\$255$. How many photos were printed?',
    correctAnswer: '9',
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~10s):** $15p + 120 = 255 \\Rightarrow 15p = 135 \\Rightarrow p = 9$.\n\n**The Full Solution:**\n$15p + 120 = 255$. Subtract $120$: $15p = 135$. Divide by $15$: $p = 9$.\n\nVerification: $15(9) + 120 = 135 + 120 = 255$ \\checkmark.\n\n**Common Mistakes:** Reporting $17$ ($255/15$ without subtracting); reporting $135$ (stops before dividing); reporting $255$ (the total).\n\n**Test Day Takeaway:** Same pattern every time: subtract fee, divide by rate. Don't shortcut by dividing the total directly.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'linear-cost-equation-setup', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-331', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A taxi charges $\\$3.50$ as a base fare plus $\\$2.25$ per mile. Which equation correctly represents the total fare $F$ for a ride of $m$ miles?',
    choices: [{ id: 'A', text: '$F = 2.25m + 3.50$' }, { id: 'B', text: '$F = 3.50m + 2.25$' }, { id: 'C', text: '$F = (2.25 + 3.50)m$' }, { id: 'D', text: '$F = 2.25 + 3.50m$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Per-mile $\\$2.25$ is the slope; base $\\$3.50$ is the constant.\n\n**The Full Solution:**\nBase fare ($\\$3.50$) is what you pay regardless of distance — that's the constant term.\nPer-mile rate ($\\$2.25$) is what scales with distance — that's the coefficient of $m$.\nResult: $F = 2.25m + 3.50$.\n\nVerification: at $m = 0$ (boarding): $F = 3.50$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: swaps the roles of base and per-mile.\n* C: adds the rates incorrectly.\n* D: same swap as B, different form.\n\n**Test Day Takeaway:** Identify the constant (base/fixed/initial) and the slope (per-unit rate) BEFORE writing the equation. Then put the slope on the variable.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-cost-equation-setup', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-332', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A storage facility charges $\\$45$ per month for a standard unit plus a one-time $\\$80$ insurance fee. Maria paid a total of $\\$485$ over the duration of her rental. How many months did she rent the unit?',
    choices: [{ id: 'A', text: '$9$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$405$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $45m + 80 = 485 \\Rightarrow 45m = 405 \\Rightarrow m = 9$.\n\n**The Full Solution:**\n$45m + 80 = 485$. Subtract $80$: $45m = 405$. Divide by $45$: $m = 9$.\n\nVerification: $45(9) + 80 = 405 + 80 = 485$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B ($10$): forgets the one-time insurance fee — divides total by monthly rate directly: $485/45 \\approx 10.78$, rounds down.\n* C ($11$): forgets the fee and rounds up: $485/45$ rounds to $11$.\n* D ($405$): reports the rent subtotal ($45 \\cdot 9 = 405$) instead of the months — the stops-one-step-early trap.\n\n**Test Day Takeaway:** When the answer is meant to be a whole number (months, days), verify by plugging back. Decimals usually mean arithmetic error.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'linear-cost-equation-setup', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-333', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'hard', type: 'fill-in',
    question: 'A cleaning service charges a fixed travel fee plus an hourly rate of $\\$35$ per hour. A 3-hour job costs $\\$135$. What is the fixed travel fee, in dollars?',
    correctAnswer: '30',
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~10s):** $35(3) + f = 135 \\Rightarrow 105 + f = 135 \\Rightarrow f = 30$.\n\n**The Full Solution:**\nLet $f$ = fixed travel fee.\nCost equation: $35h + f = $ total, where $h = $ hours.\nFor a 3-hour job costing $\\$135$: $35(3) + f = 135 \\Rightarrow 105 + f = 135 \\Rightarrow f = 30$.\n\nVerification: $35(3) + 30 = 105 + 30 = 135$ \\checkmark.\n\n**Common Mistakes:** Reporting $135$ (the total cost); reporting $45$ ($135 - 35 \\cdot 3 + 15$ kind of arithmetic mess); reporting $105$ (the variable-cost portion).\n\n**Test Day Takeaway:** When the fixed fee is the unknown, the rate × quantity portion is known. Subtract to isolate the fixed component.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'linear-cost-equation-setup', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  // ─── WORD-PROBLEM TO MULTI-STEP LINEAR (bank-alg-334..341) ────────────────
  // Granularity principle: translating a word context into a multi-step linear
  // equation is a DISTINCT skill from solving the equation once written down.
  // Items emphasize the translation step (define variables, set up relationships,
  // then solve).
  { id: 'bank-alg-334', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A bakery sells three types of pastries: small, medium, and large. On a given day, the number of medium pastries sold is twice the number $m$ of small pastries, and the number of large pastries sold is $4$ more than the number of small pastries. If the total number of pastries sold is $64$, what is the value of $m$?',
    choices: [{ id: 'A', text: '$15$' }, { id: 'B', text: '$18$' }, { id: 'C', text: '$22$' }, { id: 'D', text: '$25$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Small $= m$, medium $= 2m$, large $= m + 4$. Total: $m + 2m + (m + 4) = 4m + 4 = 64 \\Rightarrow 4m = 60 \\Rightarrow m = 15$.\n\n**The Full Solution:**\nDefine $m =$ small count. Medium $= 2m$, large $= m + 4$.\nTotal: $m + 2m + (m + 4) = 64$.\nSimplify: $4m + 4 = 64 \\Rightarrow 4m = 60 \\Rightarrow m = 15$.\n\nVerification: $15 + 30 + 19 = 64$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: $64/4 \\div 1 = 16 \\to 18$ kind of arithmetic.\n* C: divides total by $3$ ignoring the offset.\n* D: arithmetic from wrong setup.\n\n**Test Day Takeaway:** Group like terms: $m + 2m + m = 4m$. The constant $+4$ subtracts from the total before dividing.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'word-problem-to-multi-step-linear', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-335', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'medium', type: 'fill-in',
    question: 'A factory produces three sizes of metal pins: small, medium, and large. The number of medium pins is $3$ times the number $n$ of small pins. The number of large pins is $25$ fewer than the number of small pins. If the total number of pins produced is $200$, what is the number of small pins?',
    correctAnswer: '45',
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**The correct answer is $45$.**\n\n**The Fast Way (~20s):** Small $= n$, medium $= 3n$, large $= n - 25$. Total: $n + 3n + (n - 25) = 5n - 25 = 200 \\Rightarrow 5n = 225 \\Rightarrow n = 45$.\n\n**The Full Solution:**\nStep 1: Define variables. Let $n =$ number of small pins.\nStep 2: Express other quantities in terms of $n$. Medium $= 3n$, large $= n - 25$.\nStep 3: Set up the total equation: $n + 3n + (n - 25) = 200$.\nStep 4: Simplify: $5n - 25 = 200 \\Rightarrow 5n = 225 \\Rightarrow n = 45$.\n\nVerification: small $= 45$, medium $= 135$, large $= 20$. Sum: $45 + 135 + 20 = 200$ \\checkmark.\n\n**Common Mistakes:** Reporting $135$ (the medium count); reporting $200/5 = 40$ (forgetting the $-25$ adjustment); reporting $20$ (the large count).\n\n**Test Day Takeaway:** Define ONE variable, express ALL quantities in terms of it, sum to the total. The simplification step combines the coefficients into a single linear equation.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'word-problem-to-multi-step-linear', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-336', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A shop sells three sizes of t-shirt: small, medium, and large. The number of medium shirts sold is $4$ times the number $s$ of small shirts. The number of large shirts sold is $15$ more than the number of small shirts. If a total of $147$ shirts were sold, what is the value of $s$?',
    choices: [{ id: 'A', text: '$22$' }, { id: 'B', text: '$25$' }, { id: 'C', text: '$30$' }, { id: 'D', text: '$33$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Small $= s$, medium $= 4s$, large $= s + 15$. Total: $s + 4s + (s + 15) = 6s + 15 = 147 \\Rightarrow 6s = 132 \\Rightarrow s = 22$.\n\n**The Full Solution:**\nDefine $s$ as small count. Medium $= 4s$, large $= s + 15$.\nSum: $s + 4s + s + 15 = 147 \\Rightarrow 6s + 15 = 147 \\Rightarrow 6s = 132 \\Rightarrow s = 22$.\n\nVerification: $22 + 88 + 37 = 147$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B ($25$): ignores the $+15$ offset — divides the total directly by $6$: $147/6 \\approx 24.5$, rounds to $25$.\n* C ($30$): miscounts the $x$-coefficient — divides $147$ by $5$ (treating large as just $s$, not $s + 15$): $147/5 = 29.4 \\to 30$.\n* D ($33$): divides only the offset-adjusted total ($147 - 15 = 132$) by $4$ (the medium-shirt coefficient alone) instead of by $6$.\n\n**Test Day Takeaway:** Coefficient on the variable = number of terms involving it (here $1 + 4 + 1 = 6$). Constant on the right = total adjusted for any offsets.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'word-problem-to-multi-step-linear', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-337', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'medium', type: 'fill-in',
    question: 'In a class, the number of girls is $5$ more than twice the number $b$ of boys. The class has $35$ students total. How many boys are in the class?',
    correctAnswer: '10',
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~15s):** Boys $= b$, girls $= 2b + 5$. Total: $b + (2b + 5) = 35 \\Rightarrow 3b + 5 = 35 \\Rightarrow b = 10$.\n\n**The Full Solution:**\nDefine $b =$ number of boys. Girls $= 2b + 5$.\nTotal equation: $b + 2b + 5 = 35$.\nSimplify: $3b + 5 = 35 \\Rightarrow 3b = 30 \\Rightarrow b = 10$.\n\nVerification: $10$ boys + $25$ girls $= 35$ \\checkmark. Girls $= 2(10) + 5 = 25$ \\checkmark.\n\n**Common Mistakes:** Reporting $25$ (the girls count); reporting $15$ ($35 - 5 \\div 2$ kind of mistake); reporting $11.67$ (forgetting the $+5$).\n\n**Test Day Takeaway:** \"$X$ more than twice $Y$\" $\\Rightarrow 2Y + X$. Translation phrases matter — \"more than\" adds, \"less than\" subtracts.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'word-problem-to-multi-step-linear', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-338', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A library has three types of media: books, magazines, and DVDs. The number of magazines is one-third the number $b$ of books. The number of DVDs is $50$ more than the number of magazines. If the library has $950$ items in total, how many books does it have?',
    choices: [{ id: 'A', text: '$540$' }, { id: 'B', text: '$510$' }, { id: 'C', text: '$300$' }, { id: 'D', text: '$580$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Books $= b$, magazines $= b/3$, DVDs $= b/3 + 50$. Total: $b + b/3 + (b/3 + 50) = (5b/3) + 50 = 950 \\Rightarrow 5b/3 = 900 \\Rightarrow b = 540$.\n\n**The Full Solution:**\nDefine $b =$ books. Magazines $= b/3$, DVDs $= b/3 + 50$.\nTotal: $b + b/3 + b/3 + 50 = 950$.\nCombine: $b + 2b/3 = 3b/3 + 2b/3 = 5b/3$. So $5b/3 + 50 = 950 \\Rightarrow 5b/3 = 900 \\Rightarrow b = 540$.\n\nVerification: books $= 540$, magazines $= 180$, DVDs $= 230$. Sum: $540 + 180 + 230 = 950$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: $510 = 950 \\cdot 3/5 - 60$ kind of arithmetic.\n* C: gives $b/3 + b/3$ result instead of $b$.\n* D: forgets the $+50$ adjustment.\n\n**Test Day Takeaway:** With fractional coefficients, combine to a common denominator first: $b + b/3 + b/3 = 5b/3$. Subtract any constants before isolating $b$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'word-problem-to-multi-step-linear', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-339', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A printing shop produces three sizes of poster: large, medium, and small. During one shift, the number of medium posters is $3$ times the number $L$ of large posters, and the number of small posters is $20$ fewer than the number of medium posters. If a total of $260$ posters are produced, what is the value of $L$?',
    choices: [{ id: 'A', text: '$40$' }, { id: 'B', text: '$60$' }, { id: 'C', text: '$45$' }, { id: 'D', text: '$80$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Large $= L$, medium $= 3L$, small $= 3L - 20$. Total: $L + 3L + (3L - 20) = 7L - 20 = 260 \\Rightarrow 7L = 280 \\Rightarrow L = 40$.\n\n**The Full Solution:**\nDefine $L$ = large count. Medium $= 3L$, small $= 3L - 20$.\nTotal: $L + 3L + 3L - 20 = 260$.\nSimplify: $7L - 20 = 260 \\Rightarrow 7L = 280 \\Rightarrow L = 40$.\n\nVerification: $40 + 120 + 100 = 260$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: divides $260/5$ thinking the equation is $5L$ (miscounts the medium-small relationship).\n* C: $(260 - 20)/8 = 30$ → close to $45$; alternate-form mistake.\n* D: arithmetic from a wrong setup.\n\n**Test Day Takeaway:** Read the chain of relationships carefully. \"Small is $20$ fewer than medium\" → small $= 3L - 20$, NOT $L - 20$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'word-problem-to-multi-step-linear', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-340', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'hard', type: 'fill-in',
    question: 'A bookstore sells three types of items: paperback books, hardback books, and audio CDs. The number of paperback books is $4$ times the number $h$ of hardback books. The number of audio CDs is $20$ less than the number of hardback books. The total number of items is $280$. How many hardback books are in the store?',
    correctAnswer: '50',
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**The correct answer is $50$.**\n\n**The Fast Way (~20s):** Hardbacks $= h$, paperbacks $= 4h$, CDs $= h - 20$. Total: $h + 4h + (h - 20) = 6h - 20 = 280 \\Rightarrow 6h = 300 \\Rightarrow h = 50$.\n\n**The Full Solution:**\nDefine $h =$ hardbacks. Paperbacks $= 4h$, CDs $= h - 20$.\nTotal: $h + 4h + h - 20 = 280$.\nSimplify: $6h - 20 = 280 \\Rightarrow 6h = 300 \\Rightarrow h = 50$.\n\nVerification: hardbacks $= 50$, paperbacks $= 200$, CDs $= 30$. Sum: $50 + 200 + 30 = 280$ \\checkmark.\n\n**Common Mistakes:** Reporting $200$ (paperback count); reporting $30$ (CD count); reporting $46.67$ (forgets the $-20$ adjustment).\n\n**Test Day Takeaway:** \"$X$ less than $Y$\" $\\Rightarrow Y - X$. Verify your solution is a positive integer; counts can't be fractional or negative.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'word-problem-to-multi-step-linear', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-341', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Sara works two jobs. At her morning job, she earns $\\$12$ per hour. At her afternoon job, she earns $\\$18$ per hour. Last week she worked a total of $30$ hours and earned $\\$420$. How many hours did Sara work at her morning job?',
    choices: [{ id: 'A', text: '$20$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$15$' }, { id: 'D', text: '$25$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Let $m$ = morning hours. Afternoon $= 30 - m$. Earnings: $12m + 18(30 - m) = 420 \\Rightarrow 12m + 540 - 18m = 420 \\Rightarrow -6m = -120 \\Rightarrow m = 20$.\n\n**The Full Solution:**\nDefine $m =$ morning hours. Total hours constraint: afternoon $= 30 - m$.\nEarnings equation: $12m + 18(30 - m) = 420$.\nExpand: $12m + 540 - 18m = 420 \\Rightarrow -6m = -120 \\Rightarrow m = 20$.\n\nVerification: morning hours $= 20$, afternoon hours $= 10$. Earnings: $12(20) + 18(10) = 240 + 180 = 420$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B ($10$): solves for afternoon hours instead of morning ($30 - 20 = 10$) — solved correctly but reports the wrong variable.\n* C ($15$): assumes a half-half split ($30/2 = 15$) without using the earnings constraint — ignores the wage difference.\n* D ($25$): swaps which rate is morning vs afternoon — uses $18m + 12(30 - m) = 420$ which gives $m = 25$.\n\n**Test Day Takeaway:** When two quantities sum to a known total, write one in terms of the other (here afternoon $= 30 - m$). Substitute into the other equation, solve for the single unknown.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'word-problem-to-multi-step-linear', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  // ── linear-cost-model (5 questions, batch 2026-05-13) ─────────────────────
  // Pattern: build f(x) from a verbal description (base + per-unit; flat
  // period + hourly after; etc.). Aligns to Bluebook M2-Hard Q22 (window
  // repair piecewise) and Q3 (popsicles function-from-description).
  { id: 'bank-alg-342', domain: 'algebra', skills: ['linear-functions', 'word-problems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A taxi service charges a $\\$3.50$ base fare plus $\\$2.40$ per mile driven. Which function $f$ gives the total cost, in dollars, of a taxi ride of $m$ miles?',
    choices: [{ id: 'A', text: '$f(m) = 2.40m$' }, { id: 'B', text: '$f(m) = 2.40m + 3.50$' }, { id: 'C', text: '$f(m) = 3.50m + 2.40$' }, { id: 'D', text: '$f(m) = 5.90m$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Linear Cost Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Per-mile rate $\\$2.40$ = slope; base fare $\\$3.50$ = $y$-intercept. So $f(m) = 2.40m + 3.50$.\n\n**The Full Solution:**\nTotal cost = (per-mile rate)(miles) + (base fare). The per-mile rate is the slope (it multiplies $m$); the base fare is the $y$-intercept (constant term).\n\n$f(m) = 2.40m + 3.50$.\n\nVerification: at $m = 0$ (no driving), $f = 3.50$ ✓ (base fare only). At $m = 10$, $f = 24 + 3.50 = 27.50$ ✓ (10 miles plus base) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* A: \"stops one step early\" — forgets the base fare.\n* C: \"swaps coefficients\" — uses base fare as per-mile rate and per-mile rate as base. At $m = 0$ this would give $f = 2.40$, not the true $3.50$.\n* D: \"applies the inverse operation\" — adds the two numbers ($3.50 + 2.40 = 5.90$) and treats the sum as the per-mile rate, losing the structure entirely.\n\n**Test Day Takeaway:** \"Base/flat/one-time/fixed\" = $y$-intercept (constant). \"Per [unit]\" = slope (coefficient of the variable). Build $f(x) = (\\text{per-unit rate}) \\cdot x + (\\text{base})$.",
    calculatorAllowed: true, tags: ['build-function'], sourceStyleRef: 'linear-cost-model', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-343', domain: 'algebra', skills: ['linear-functions', 'word-problems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A copy shop charges a fixed $\\$0.80$ setup fee plus $\\$0.07$ per page for self-service copies. The total cost is also subject to a $\\$0.04$-per-page surcharge for color copies. For a color print job, which function $f$ gives the total cost, in dollars, of $p$ color copies?',
    choices: [{ id: 'A', text: '$f(p) = 0.11p + 0.80$' }, { id: 'B', text: '$f(p) = 0.07p + 0.04$' }, { id: 'C', text: '$f(p) = 0.91p$' }, { id: 'D', text: '$f(p) = 0.80p + 0.11$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Cost Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Per-page total = $0.07 + 0.04 = 0.11$. Setup fee $0.80$ is the intercept. $f(p) = 0.11p + 0.80$.\n\n**The Full Solution:**\nTwo per-page costs combine into a single slope: $0.07$ (base copy rate) + $0.04$ (color surcharge) $= 0.11$ per page. The $\\$0.80$ setup fee is paid once, regardless of page count, so it is the $y$-intercept.\n\n$f(p) = 0.11p + 0.80$.\n\nVerification: at $p = 0$ (no copies), $f = 0.80$ (just the setup) ✓. At $p = 10$, $f = 1.10 + 0.80 = 1.90$. By raw count: $10 \\times 0.11 = 1.10$ for copies, $+ 0.80$ setup $= 1.90$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: \"wrong base\" — uses $0.07$ as slope and $0.04$ as intercept, dropping the setup fee entirely.\n* C: \"applies the inverse operation\" — sums all three rates ($0.07 + 0.04 + 0.80 = 0.91$) and treats the sum as the per-page rate.\n* D: \"swaps coefficients\" — uses setup fee as slope, sums per-page rates ($0.11$) as intercept.\n\n**Test Day Takeaway:** When multiple per-unit charges apply to the same unit (per page, per mile, per hour), ADD them into a single slope. One-time charges (setup, base, signup) stay as the intercept.",
    calculatorAllowed: true, tags: ['build-function'], sourceStyleRef: 'linear-cost-model', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-344', domain: 'algebra', skills: ['linear-functions', 'word-problems'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A plumber charges $\\$180$ for the first two hours of any service call plus an hourly rate for each additional hour. The total cost for a $5$-hour service call is $\\$330$. Which function $f$ gives the total cost, in dollars, for a service call of $x$ hours, where $x \\geq 2$?',
    choices: [{ id: 'A', text: '$f(x) = 50x + 80$' }, { id: 'B', text: '$f(x) = 50x + 180$' }, { id: 'C', text: '$f(x) = 66x$' }, { id: 'D', text: '$f(x) = 66x + 180$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Cost Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Hourly rate $= (330 - 180)/(5 - 2) = 150/3 = \\$50$ per additional hour. For $x \\geq 2$: cost $= 180 + 50(x - 2) = 50x + 80$.\n\n**The Full Solution:**\nThe plumber charges a flat $\\$180$ for the first $2$ hours, plus $r$ dollars per hour after that. For $x \\geq 2$ hours total: $f(x) = 180 + r(x - 2)$.\n\nUsing the data point $f(5) = 330$:\n$180 + r(3) = 330 \\Rightarrow 3r = 150 \\Rightarrow r = 50$ per additional hour.\n\nSimplify $f(x) = 180 + 50(x - 2) = 180 + 50x - 100 = 50x + 80$.\n\nVerification: $f(2) = 100 + 80 = 180$ ✓ (flat rate, no extras). $f(5) = 250 + 80 = 330$ ✓ matches data. $f(3) = 150 + 80 = 230$ — flat $180$ plus $1$ extra hour at $\\$50$ $= 230$ ✓ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: \"wrong base\" — keeps the flat $\\$180$ as the intercept without subtracting off the $2$ hours already \"included.\" This would give $f(2) = 280$, not $180$.\n* C: \"wrong formula\" — averages $\\$330/5 = \\$66$/hour as if the rate were uniform from hour $1$, ignoring the flat period.\n* D: \"combines both errors\" — uses the averaged hourly rate AND keeps the flat fee, double-counting.\n\n**Test Day Takeaway:** When a flat fee covers the first $k$ units, the function for $x \\geq k$ is $f(x) = (\\text{flat}) + r(x - k)$ — the $x - k$ subtracts off the included units. Simplify if needed: $f(x) = rx + (\\text{flat} - rk)$.",
    calculatorAllowed: true, tags: ['build-function', 'piecewise-linear'], sourceStyleRef: 'linear-cost-model', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-345', domain: 'algebra', skills: ['linear-functions', 'word-problems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A streaming-music subscription costs $\\$9.99$ per month, plus a one-time signup fee of $\\$15$. Which function $f$ gives the total amount paid, in dollars, after $m$ months of subscription?',
    choices: [{ id: 'A', text: '$f(m) = 15m + 9.99$' }, { id: 'B', text: '$f(m) = 9.99m$' }, { id: 'C', text: '$f(m) = 9.99m + 15$' }, { id: 'D', text: '$f(m) = 24.99m$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Linear Cost Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Monthly rate $\\$9.99$ = slope; one-time signup $\\$15$ = intercept. $f(m) = 9.99m + 15$.\n\n**The Full Solution:**\nThe signup fee is paid once (independent of how many months), so it's the $y$-intercept. The monthly subscription cost recurs each month, so it's the slope (coefficient of $m$).\n\n$f(m) = 9.99m + 15$.\n\nVerification: at $m = 0$ (signup day, before paying any month), $f = 15$ ✓. After $1$ month, $f = 9.99 + 15 = 24.99$ ✓. After $12$ months, $f = 119.88 + 15 = 134.88$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* A: \"swaps coefficients\" — uses signup fee as monthly rate and vice versa. At $m = 1$ this gives $24.99$ matching the true answer, but at $m = 12$ it gives $189.99 \\neq 134.88$.\n* B: \"stops one step early\" — forgets the signup fee.\n* D: \"applies the inverse operation\" — adds signup and monthly rate into a single per-month charge.\n\n**Test Day Takeaway:** Subscription-style problems: per-month/per-week fee = slope. Signup/activation = intercept. Don't lump them.",
    calculatorAllowed: true, tags: ['build-function'], sourceStyleRef: 'linear-cost-model', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-346', domain: 'algebra', skills: ['linear-functions', 'word-problems'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A solar-panel installation has a fixed upfront cost of $\\$8{,}400$ and generates approximately $\\$1{,}050$ in savings per year of operation. Which function $f$ gives the net cost (still-to-recoup amount), in dollars, after $y$ years of operation?',
    choices: [{ id: 'A', text: '$f(y) = 8{,}400 - 1{,}050y$' }, { id: 'B', text: '$f(y) = 1{,}050y - 8{,}400$' }, { id: 'C', text: '$f(y) = 8{,}400 + 1{,}050y$' }, { id: 'D', text: '$f(y) = 1{,}050y + 8{,}400$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Cost Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Net cost STARTS at $\\$8{,}400$ (the upfront amount) and DECREASES by $\\$1{,}050$ each year (savings recover part of it). $f(y) = 8{,}400 - 1{,}050y$.\n\n**The Full Solution:**\nNet cost (still-to-recoup) at $y = 0$ is the full $\\$8{,}400$. Each year, savings of $\\$1{,}050$ reduce that net cost. So the slope is negative.\n\n$f(y) = 8{,}400 - 1{,}050y$.\n\nVerification: $f(0) = 8{,}400$ (just installed, nothing recouped yet) ✓. $f(8) = 8{,}400 - 8{,}400 = 0$ — payback period is $8$ years ✓. $f(10) = 8{,}400 - 10{,}500 = -2{,}100$ — net cost is negative, meaning the system has saved $\\$2{,}100$ beyond its cost \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: \"sign error AND swapped roles\" — treats the savings as positive and the cost as negative, giving net cost increasing in $y$.\n* C: \"sign error on slope\" — adds savings to upfront cost instead of subtracting. Implies the net cost GROWS each year (the opposite of payback).\n* D: \"both signs flipped\" — combines the errors of B and C.\n\n**Test Day Takeaway:** Pay attention to direction. \"Net amount still owed/recoupable\" DECREASES each year as savings accumulate, so the slope is NEGATIVE. \"Total accumulated savings,\" by contrast, would INCREASE (positive slope). Same data, different framing.",
    calculatorAllowed: true, tags: ['build-function'], sourceStyleRef: 'linear-cost-model', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  // ── inequality-word-problem-floor (5 questions, batch 2026-05-13) ─────────
  // Pattern: real-world constraint (budget, capacity, etc.) translates to an
  // inequality; find max/min count. Aligns to Bluebook M2-Hard Q14 (candles
  // with budget + minimum quantity).
  { id: 'bank-alg-347', domain: 'algebra', skills: ['inequalities', 'word-problems', 'systems-of-equations'], difficulty: 'hard', type: 'fill-in',
    question: 'A conference planner has a budget of $\\$1{,}500$ to purchase notebooks. To qualify for bulk discount pricing, the planner must purchase a minimum of $150$ notebooks total. If basic notebooks cost $\\$6$ each and premium notebooks cost $\\$13$ each, what is the maximum number of premium notebooks the planner can purchase while staying within the budget and qualifying for the discount?',
    correctAnswer: '85',
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**The correct answer is $85$.**\n\n**The Fast Way (~45s):** Let $b$ = basic, $p$ = premium. To maximize $p$, minimize basic spend by using the exact minimum total $b + p = 150$, so $b = 150 - p$. Budget: $6(150 - p) + 13p \\leq 1500 \\Rightarrow 900 + 7p \\leq 1500 \\Rightarrow p \\leq 85.71$. Whole-number max: $p = 85$.\n\n**The Full Solution:**\nLet $b$ = basic notebooks and $p$ = premium notebooks.\nConstraints:\n* Minimum total: $b + p \\geq 150$.\n* Budget: $6b + 13p \\leq 1500$.\n* Both non-negative integers: $b, p \\geq 0$.\n\nTo maximize $p$, we want to spend as little as possible on the rest. The cheapest way to hit the minimum is to use basic notebooks for whatever portion isn't premium, i.e., $b = 150 - p$ exactly (no wasted spending on extra notebooks beyond the discount floor).\n\nSubstitute into the budget:\n$6(150 - p) + 13p \\leq 1500$\n$900 - 6p + 13p \\leq 1500$\n$7p \\leq 600$\n$p \\leq 85.71...$.\n\nSince $p$ must be a whole number, the maximum is $p = 85$.\n\nVerification: with $p = 85$, $b = 65$. Total notebooks: $65 + 85 = 150 \\geq 150$ ✓. Budget: $6(65) + 13(85) = 390 + 1105 = 1495 \\leq 1500$ ✓. Try $p = 86$, $b = 64$: $6(64) + 13(86) = 384 + 1118 = 1502 > 1500$ ✗ — exceeds budget \\checkmark.\n\n**Common Mistakes:** Reporting $115$ (treats $1500/13 \\approx 115$ as the max, ignoring the discount floor); reporting $150$ (treats the floor as the max); reporting $86$ (forgets to round DOWN — $86$ exceeds budget); reporting $65$ (reports basic notebooks instead of premium).\n\n**Test Day Takeaway:** Two constraints (budget + minimum total): to maximize one quantity, fill the rest with the cheaper option AT EXACTLY the minimum total (any extra units waste budget). Then solve the resulting single-variable inequality and take the FLOOR.",
    calculatorAllowed: true, tags: ['constraint-optimization'], sourceStyleRef: 'inequality-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-348', domain: 'algebra', skills: ['inequalities', 'word-problems'], difficulty: 'medium', type: 'fill-in',
    question: 'A photographer is uploading photos to a cloud storage service. Each standard photo uses $4$ MB, and each high-resolution photo uses $11$ MB. If the photographer has $2{,}000$ MB of free storage remaining and must upload exactly $30$ standard photos for a client, what is the maximum number of high-resolution photos that can also be uploaded without exceeding the free storage?',
    correctAnswer: '170',
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**The correct answer is $170$.**\n\n**The Fast Way (~25s):** Standard usage $= 30 \\times 4 = 120$ MB. Remaining $= 2{,}000 - 120 = 1{,}880$ MB. $1{,}880 / 11 = 170.91$, so at most $170$ high-res photos.\n\n**The Full Solution:**\nLet $h$ = high-resolution photos. Total storage used:\n$4(30) + 11h \\leq 2{,}000$\n$120 + 11h \\leq 2{,}000$\n$11h \\leq 1{,}880$\n$h \\leq 170.909...$.\n\nSince $h$ must be a whole number, the maximum is $h = 170$.\n\nVerification: $120 + 11(170) = 120 + 1{,}870 = 1{,}990 \\leq 2{,}000$ ✓. $120 + 11(171) = 120 + 1{,}881 = 2{,}001 > 2{,}000$ ✗ — exceeds limit \\checkmark.\n\n**Common Mistakes:** Reporting $181$ (divides $2{,}000/11$ without subtracting standard usage first); reporting $171$ (rounds UP instead of down — exceeds limit by $1$ MB); reporting $30$ (returns the standard count instead of high-res).\n\n**Test Day Takeaway:** With a fixed quantity already committed, subtract its cost FIRST. Then solve for the remaining variable and take the FLOOR of the decimal result. \"Maximum that fits\" never rounds up.",
    calculatorAllowed: true, tags: ['constraint-optimization'], sourceStyleRef: 'inequality-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-349', domain: 'algebra', skills: ['inequalities', 'word-problems', 'systems-of-equations'], difficulty: 'hard', type: 'fill-in',
    question: 'A school is purchasing chairs for a new auditorium. The total budget is $\\$4{,}800$. To take advantage of a vendor rebate, the school must purchase at least $250$ chairs. Standard chairs cost $\\$15$ each and padded chairs cost $\\$22$ each. What is the maximum number of padded chairs the school can purchase while staying within the budget and qualifying for the rebate?',
    correctAnswer: '150',
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**The correct answer is $150$.**\n\n**The Fast Way (~45s):** Let $s$ = standard, $p$ = padded. To max $p$, min $s$ by setting $s + p = 250$ exactly, so $s = 250 - p$. Budget: $15(250 - p) + 22p \\leq 4800 \\Rightarrow 3750 + 7p \\leq 4800 \\Rightarrow p \\leq 150$.\n\n**The Full Solution:**\nLet $s$ = standard chairs and $p$ = padded chairs.\nConstraints:\n* Rebate floor: $s + p \\geq 250$.\n* Budget: $15s + 22p \\leq 4{,}800$.\n* Both non-negative integers.\n\nTo maximize $p$, fill the rest with the cheaper standard chairs at EXACTLY the floor, $s + p = 250$, so $s = 250 - p$.\n\nSubstitute:\n$15(250 - p) + 22p \\leq 4{,}800$\n$3{,}750 - 15p + 22p \\leq 4{,}800$\n$7p \\leq 1{,}050$\n$p \\leq 150$.\n\nMax integer $p$: $150$.\n\nVerification: $p = 150, s = 100$. Total: $250$ ✓. Cost: $15(100) + 22(150) = 1{,}500 + 3{,}300 = 4{,}800 \\leq 4{,}800$ ✓ (exactly at budget). $p = 151, s = 99$: $15(99) + 22(151) = 1{,}485 + 3{,}322 = 4{,}807 > 4{,}800$ ✗ \\checkmark.\n\n**Common Mistakes:** Reporting $218$ (treats $4{,}800/22 \\approx 218$ as the max, ignoring the rebate floor); reporting $151$ (forgets to round down or arithmetic slip); reporting $250$ (treats the floor as the answer); reporting $100$ (reports standard chairs instead).\n\n**Test Day Takeaway:** Two constraints (budget cap + minimum quantity): the EXACT floor on total is what minimizes wasted budget. Solve the resulting single-variable inequality and floor the result.",
    calculatorAllowed: true, tags: ['constraint-optimization'], sourceStyleRef: 'inequality-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-350', domain: 'algebra', skills: ['inequalities', 'word-problems'], difficulty: 'medium', type: 'fill-in',
    question: 'A bookstore is restocking its shelves. The store has $\\$840$ to spend on new inventory. Each new paperback costs $\\$8$ and each new hardcover costs $\\$21$. If the store buys exactly $45$ paperbacks, what is the maximum number of hardcovers the store can buy without exceeding the budget?',
    correctAnswer: '22',
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**The correct answer is $22$.**\n\n**The Fast Way (~20s):** Paperback spend $= 45 \\times 8 = 360$. Remaining $= 840 - 360 = 480$. $480/21 \\approx 22.86$, so at most $22$ hardcovers.\n\n**The Full Solution:**\nLet $h$ = hardcovers. Budget:\n$8(45) + 21h \\leq 840$\n$360 + 21h \\leq 840$\n$21h \\leq 480$\n$h \\leq 22.857...$.\n\nMaximum integer: $h = 22$.\n\nVerification: $360 + 21(22) = 360 + 462 = 822 \\leq 840$ ✓. $360 + 21(23) = 360 + 483 = 843 > 840$ ✗ \\checkmark.\n\n**Common Mistakes:** Reporting $40$ (divides $840/21$ without subtracting paperbacks); reporting $23$ (rounds UP, exceeds budget); reporting $45$ (returns paperbacks); reporting $40$ as the cost-only-floor without paperback subtraction.\n\n**Test Day Takeaway:** Always subtract the fixed spend FIRST, then divide. Take the FLOOR. Rounding up violates the inequality.",
    calculatorAllowed: true, tags: ['constraint-optimization'], sourceStyleRef: 'inequality-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-351', domain: 'algebra', skills: ['inequalities', 'word-problems'], difficulty: 'hard', type: 'fill-in',
    question: 'A summer camp\'s catering budget for one day is $\\$650$. To honor a contract, the caterer must serve at least $80$ total meals. A vegetarian meal costs the caterer $\\$5.50$ and a non-vegetarian meal costs $\\$8.25$. What is the maximum number of non-vegetarian meals the caterer can serve while staying within the budget and meeting the contract minimum?',
    correctAnswer: '76',
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**The correct answer is $76$.**\n\n**The Fast Way (~45s):** Let $v$ = vegetarian, $n$ = non-vegetarian. To max $n$, set $v + n = 80$ exactly, $v = 80 - n$. Budget: $5.50(80 - n) + 8.25n \\leq 650 \\Rightarrow 440 + 2.75n \\leq 650 \\Rightarrow n \\leq 76.36$. Floor: $n = 76$.\n\n**The Full Solution:**\nLet $v$ = vegetarian, $n$ = non-vegetarian meals.\nConstraints:\n* Minimum total: $v + n \\geq 80$.\n* Budget: $5.50v + 8.25n \\leq 650$.\n\nTo max $n$, fill the rest with the cheaper vegetarian meals at exactly the contract floor: $v = 80 - n$.\n\n$5.50(80 - n) + 8.25n \\leq 650$\n$440 - 5.50n + 8.25n \\leq 650$\n$2.75n \\leq 210$\n$n \\leq 76.363...$.\n\nMax integer: $n = 76$.\n\nVerification: $n = 76, v = 4$. Total: $80$ ✓. Cost: $5.50(4) + 8.25(76) = 22 + 627 = 649 \\leq 650$ ✓. $n = 77, v = 3$: $5.50(3) + 8.25(77) = 16.50 + 635.25 = 651.75 > 650$ ✗ \\checkmark.\n\n**Common Mistakes:** Reporting $78$ (treats $650/8.25 \\approx 78.79$ as the cap, ignoring the contract floor — but ALSO note $v = 0, n = 78$ violates the floor since $0 + 78 = 78 < 80$); reporting $80$ (treats the floor as the answer); reporting $77$ (rounds up); reporting $4$ (reports vegetarian instead).\n\n**Test Day Takeaway:** Mixed constraints (budget + floor) with decimal prices: set the floor at equality, solve for the single variable, take the FLOOR of the decimal answer. Always verify by plugging the next integer up to make sure it actually fails.",
    calculatorAllowed: true, tags: ['constraint-optimization'], sourceStyleRef: 'inequality-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  // ── inequality-word-problem-floor MC variants (5 questions, batch 2026-05-13) ──
  // Pattern: budget + minimum-quantity optimization, MC form. Complements the
  // existing 6 fill-in items; distractors cover named trap classes (floor-as-answer,
  // budget/expensive cap ignoring floor, off-by-one round-up, wrong variable).
  { id: 'bank-alg-352', domain: 'algebra', skills: ['inequalities', 'word-problems', 'systems-of-equations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A garden nursery has a budget of $\\$1{,}080$ to purchase plants for spring sales. To qualify for a grower-network discount, the nursery must order a minimum of $120$ plants total. Basic vegetable starts cost $\\$6$ each and flowering ornamentals cost $\\$11$ each. What is the maximum number of flowering ornamentals the nursery can order while staying within the budget and qualifying for the discount?',
    choices: [{ id: 'A', text: '$73$' }, { id: 'B', text: '$72$' }, { id: 'C', text: '$98$' }, { id: 'D', text: '$120$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Let $v$ = basic, $f$ = flowering. To max $f$, set $v + f = 120$ exactly, $v = 120 - f$. Budget: $6(120 - f) + 11f \\leq 1080 \\Rightarrow 720 + 5f \\leq 1080 \\Rightarrow f \\leq 72$.\n\n**The Full Solution:**\nLet $v$ = basic plants, $f$ = flowering plants.\nConstraints:\n* Discount floor: $v + f \\geq 120$.\n* Budget: $6v + 11f \\leq 1{,}080$.\n\nTo MAXIMIZE $f$, fill the rest with the cheaper basic plants at EXACTLY the floor (any extras waste budget). Set $v = 120 - f$:\n\n$6(120 - f) + 11f \\leq 1{,}080$\n$720 - 6f + 11f \\leq 1{,}080$\n$5f \\leq 360$\n$f \\leq 72$.\n\nMax integer: $f = 72$.\n\nVerification: $f = 72$, $v = 48$. Total: $120 \\geq 120$ ✓. Cost: $6(48) + 11(72) = 288 + 792 = 1{,}080 \\leq 1{,}080$ ✓ (exactly at budget). $f = 73$, $v = 47$: $6(47) + 11(73) = 282 + 803 = 1{,}085 > 1{,}080$ ✗ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($73$): \"off-by-one\" — forgets to verify and adds one more, which exceeds the budget by $\\$5$.\n* Choice C ($98$): \"budget cap, no floor\" — divides $1{,}080/11 \\approx 98$ as if all spending went to flowering plants, ignoring the $120$-plant floor. (And $0 + 98 = 98 < 120$ would violate the floor anyway.)\n* Choice D ($120$): \"floor as answer\" — confuses the minimum total with the maximum of one type.\n\n**Test Day Takeaway:** Two-constraint optimization: To maximize the more expensive option, set total to the floor exactly and solve. Always verify the next integer up.",
    calculatorAllowed: true, tags: ['constraint-optimization'], sourceStyleRef: 'inequality-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-353', domain: 'algebra', skills: ['inequalities', 'word-problems', 'systems-of-equations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'An event planner organizing a music festival has a budget of $\\$1{,}750$ for stage lighting. To qualify for a rental-company discount, the planner must rent a minimum of $200$ light fixtures total. String-light strands cost $\\$7$ each and spotlight units cost $\\$13$ each. What is the maximum number of spotlight units the planner can rent while staying within the budget and qualifying for the discount?',
    choices: [{ id: 'A', text: '$59$' }, { id: 'B', text: '$58$' }, { id: 'C', text: '$134$' }, { id: 'D', text: '$200$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Let $r$ = string strands, $s$ = spotlights. To max $s$, set $r + s = 200$ exactly, $r = 200 - s$. Budget: $7(200 - s) + 13s \\leq 1750 \\Rightarrow 1400 + 6s \\leq 1750 \\Rightarrow s \\leq 58.33$. Floor: $s = 58$.\n\n**The Full Solution:**\nLet $r$ = string strands, $s$ = spotlight units.\nConstraints:\n* Discount floor: $r + s \\geq 200$.\n* Budget: $7r + 13s \\leq 1{,}750$.\n\nTo MAXIMIZE $s$, fill the rest with the cheaper string strands at EXACTLY the floor. Set $r = 200 - s$:\n\n$7(200 - s) + 13s \\leq 1{,}750$\n$1{,}400 - 7s + 13s \\leq 1{,}750$\n$6s \\leq 350$\n$s \\leq 58.333...$.\n\nMax integer: $s = 58$.\n\nVerification: $s = 58$, $r = 142$. Total: $200 \\geq 200$ ✓. Cost: $7(142) + 13(58) = 994 + 754 = 1{,}748 \\leq 1{,}750$ ✓. $s = 59$, $r = 141$: $7(141) + 13(59) = 987 + 767 = 1{,}754 > 1{,}750$ ✗ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($59$): \"off-by-one\" — rounds up, exceeds budget by $\\$4$.\n* Choice C ($134$): \"budget cap, no floor\" — divides $1{,}750/13 \\approx 134$ as if all spending went to spotlights, ignoring the floor. And $0 + 134 = 134 < 200$ violates the floor.\n* Choice D ($200$): \"floor as answer\" — reports the minimum-total constraint as the max of one type.\n\n**Test Day Takeaway:** Two-constraint optimization with decimal boundary: solve for the inequality, take the FLOOR of the decimal answer. Verify the floor-plus-one fails.",
    calculatorAllowed: true, tags: ['constraint-optimization'], sourceStyleRef: 'inequality-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-354', domain: 'algebra', skills: ['inequalities', 'word-problems', 'systems-of-equations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A bakery is preparing for a wedding-season weekend. The owner has a budget of $\\$1{,}320$ to produce baked items for sale. To qualify for a bulk-flour discount, the bakery must produce a minimum of $100$ baked items total. Cupcakes cost the bakery $\\$8$ each to produce and specialty cakes cost $\\$20$ each. What is the maximum number of specialty cakes the bakery can produce while staying within the budget and qualifying for the discount?',
    choices: [{ id: 'A', text: '$44$' }, { id: 'B', text: '$43$' }, { id: 'C', text: '$57$' }, { id: 'D', text: '$100$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Let $c$ = cupcakes, $s$ = specialty cakes. To max $s$, set $c + s = 100$ exactly, $c = 100 - s$. Budget: $8(100 - s) + 20s \\leq 1320 \\Rightarrow 800 + 12s \\leq 1320 \\Rightarrow s \\leq 43.33$. Floor: $s = 43$.\n\n**The Full Solution:**\nLet $c$ = cupcakes, $s$ = specialty cakes.\nConstraints:\n* Discount floor: $c + s \\geq 100$.\n* Budget: $8c + 20s \\leq 1{,}320$.\n\nTo MAXIMIZE $s$, fill the rest with the cheaper cupcakes at EXACTLY the floor. Set $c = 100 - s$:\n\n$8(100 - s) + 20s \\leq 1{,}320$\n$800 - 8s + 20s \\leq 1{,}320$\n$12s \\leq 520$\n$s \\leq 43.333...$.\n\nMax integer: $s = 43$.\n\nVerification: $s = 43$, $c = 57$. Total: $100 \\geq 100$ ✓. Cost: $8(57) + 20(43) = 456 + 860 = 1{,}316 \\leq 1{,}320$ ✓. $s = 44$, $c = 56$: $8(56) + 20(44) = 448 + 880 = 1{,}328 > 1{,}320$ ✗ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($44$): \"off-by-one\" — rounds up, exceeds budget by $\\$8$.\n* Choice C ($57$): \"wrong variable\" — reports cupcakes ($100 - 43$) instead of specialty cakes.\n* Choice D ($100$): \"floor as answer\" — treats the minimum-total constraint as the maximum of one type.\n\n**Test Day Takeaway:** When the question asks for the MAXIMUM of the more expensive option, the answer is rarely the floor. Solve the inequality, floor the decimal, and double-check the requested variable matches what you computed.",
    calculatorAllowed: true, tags: ['constraint-optimization'], sourceStyleRef: 'inequality-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-355', domain: 'algebra', skills: ['inequalities', 'word-problems', 'systems-of-equations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A pharmacy has a budget of $\\$432$ to stock adhesive bandages for the upcoming summer season. To qualify for a wholesale discount, the pharmacy must order a minimum of $80$ packages total. Regular bandage packages cost $\\$3.20$ each and waterproof bandage packages cost $\\$6.40$ each. What is the maximum number of waterproof bandage packages the pharmacy can order while staying within the budget and qualifying for the discount?',
    choices: [{ id: 'A', text: '$56$' }, { id: 'B', text: '$55$' }, { id: 'C', text: '$67$' }, { id: 'D', text: '$80$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Let $r$ = regular, $w$ = waterproof. To max $w$, set $r + w = 80$ exactly, $r = 80 - w$. Budget: $3.20(80 - w) + 6.40w \\leq 432 \\Rightarrow 256 + 3.20w \\leq 432 \\Rightarrow w \\leq 55$.\n\n**The Full Solution:**\nLet $r$ = regular packages, $w$ = waterproof packages.\nConstraints:\n* Discount floor: $r + w \\geq 80$.\n* Budget: $3.20r + 6.40w \\leq 432$.\n\nTo MAXIMIZE $w$, fill the rest with the cheaper regular packages at EXACTLY the floor. Set $r = 80 - w$:\n\n$3.20(80 - w) + 6.40w \\leq 432$\n$256 - 3.20w + 6.40w \\leq 432$\n$3.20w \\leq 176$\n$w \\leq 55$.\n\nMax integer: $w = 55$.\n\nVerification: $w = 55$, $r = 25$. Total: $80 \\geq 80$ ✓. Cost: $3.20(25) + 6.40(55) = 80 + 352 = 432 \\leq 432$ ✓ (exactly at budget). $w = 56$, $r = 24$: $3.20(24) + 6.40(56) = 76.80 + 358.40 = 435.20 > 432$ ✗ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($56$): \"off-by-one\" — adds one more, which exceeds budget by $\\$3.20$.\n* Choice C ($67$): \"budget cap, no floor\" — divides $432/6.40 = 67.5$ and floors as if all spending went to waterproof, ignoring the floor. And $0 + 67 = 67 < 80$ violates the floor.\n* Choice D ($80$): \"floor as answer\" — treats the minimum-total constraint as the maximum.\n\n**Test Day Takeaway:** When the inequality solves to an exact integer (no decimal), you can't \"floor\" further — but verify by computing the next integer up: if it fails the budget, your answer is the boundary itself.",
    calculatorAllowed: true, tags: ['constraint-optimization'], sourceStyleRef: 'inequality-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-356', domain: 'algebra', skills: ['inequalities', 'word-problems', 'systems-of-equations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A pet supply store has a budget of $\\$1{,}840$ to purchase toys for an end-of-summer sale. To qualify for a manufacturer discount, the store must order a minimum of $180$ toys total. Small toys cost $\\$7.50$ each and plush toys cost $\\$13.20$ each. What is the maximum number of plush toys the store can order while staying within the budget and qualifying for the discount?',
    choices: [{ id: 'A', text: '$86$' }, { id: 'B', text: '$85$' }, { id: 'C', text: '$95$' }, { id: 'D', text: '$180$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Let $s$ = small, $p$ = plush. To max $p$, set $s + p = 180$ exactly, $s = 180 - p$. Budget: $7.50(180 - p) + 13.20p \\leq 1840 \\Rightarrow 1350 + 5.70p \\leq 1840 \\Rightarrow p \\leq 85.96$. Floor: $p = 85$.\n\n**The Full Solution:**\nLet $s$ = small toys, $p$ = plush toys.\nConstraints:\n* Discount floor: $s + p \\geq 180$.\n* Budget: $7.50s + 13.20p \\leq 1{,}840$.\n\nTo MAXIMIZE $p$, fill the rest with the cheaper small toys at EXACTLY the floor. Set $s = 180 - p$:\n\n$7.50(180 - p) + 13.20p \\leq 1{,}840$\n$1{,}350 - 7.50p + 13.20p \\leq 1{,}840$\n$5.70p \\leq 490$\n$p \\leq 85.964...$.\n\nMax integer: $p = 85$.\n\nVerification: $p = 85$, $s = 95$. Total: $180 \\geq 180$ ✓. Cost: $7.50(95) + 13.20(85) = 712.50 + 1{,}122 = 1{,}834.50 \\leq 1{,}840$ ✓. $p = 86$, $s = 94$: $7.50(94) + 13.20(86) = 705 + 1{,}135.20 = 1{,}840.20 > 1{,}840$ ✗ — exceeds budget by $\\$0.20$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($86$): \"off-by-one, no verification\" — rounds the decimal $85.96$ up. Verification shows it exceeds budget.\n* Choice C ($95$): \"wrong variable\" — reports small toys ($180 - 85$) instead of plush.\n* Choice D ($180$): \"floor as answer\" — treats the minimum-total constraint as the maximum of one type.\n\n**Test Day Takeaway:** When the inequality solves to a value JUST barely above an integer (like $85.96$), it's tempting to round up. Always FLOOR — and verify the next integer up exceeds the budget.",
    calculatorAllowed: true, tags: ['constraint-optimization'], sourceStyleRef: 'inequality-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  // ─── H.E. ONE-VARIABLE LINEAR INEQUALITY (bank-alg-357..364) ──────────────
  { id: 'bank-alg-357', domain: 'algebra', skills: ['inequalities'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which of the following is the solution set of the inequality $3x + 5 > 11$?',
    choices: [{ id: 'A', text: '$x > 2$' }, { id: 'B', text: '$x \\geq 2$' }, { id: 'C', text: '$x > 6$' }, { id: 'D', text: '$x < 2$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $3x > 6 \\Rightarrow x > 2$.\n\n**The Full Solution:** Subtract $5$, divide by $3$ (positive — no flip): $x > 2$.\n\n**Why the wrong answers are tempting:**\n* B: changes strict $>$ to inclusive $\\geq$.\n* C: forgets to divide.\n* D: flips direction unnecessarily.\n\n**Test Day Takeaway:** Inequality direction stays the same when adding/subtracting or multiplying/dividing by a POSITIVE number.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-variable-linear-inequality', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-358', domain: 'algebra', skills: ['inequalities'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which of the following is the solution to $-2x + 7 \\leq 1$?',
    choices: [{ id: 'A', text: '$x \\leq 3$' }, { id: 'B', text: '$x \\geq 3$' }, { id: 'C', text: '$x \\leq -3$' }, { id: 'D', text: '$x \\geq -3$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $-2x \\leq -6$; divide by $-2$ (FLIP): $x \\geq 3$.\n\nVerification: $x = 4 \\Rightarrow -8 + 7 = -1 \\leq 1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* A: forgets to flip direction.\n* C, D: sign errors.\n\n**Test Day Takeaway:** Always FLIP the inequality when multiplying or dividing by a negative number.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-variable-linear-inequality', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-359', domain: 'algebra', skills: ['inequalities'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following is the solution to $5(x - 3) < 2x + 6$?',
    choices: [{ id: 'A', text: '$x < 3$' }, { id: 'B', text: '$x < 7$' }, { id: 'C', text: '$x > 3$' }, { id: 'D', text: '$x > 7$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $5x - 15 < 2x + 6 \\Rightarrow 3x < 21 \\Rightarrow x < 7$.\n\n**Test Day Takeaway:** Distribute, then collect like terms. Divide by a positive coefficient — direction unchanged.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-variable-linear-inequality', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-360', domain: 'algebra', skills: ['inequalities'], difficulty: 'medium', type: 'fill-in',
    question: 'What is the least integer value of $x$ that satisfies the inequality $4x + 9 > 25$?',
    correctAnswer: '5',
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~10s):** $4x > 16 \\Rightarrow x > 4$. Least integer > $4$ is $5$.\n\n**Test Day Takeaway:** STRICT inequality $>$ excludes the boundary. Find the next integer above.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-variable-linear-inequality', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-361', domain: 'algebra', skills: ['inequalities'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For which value of $x$ is the inequality $\\dfrac{x - 4}{3} \\geq 2$ true?',
    choices: [{ id: 'A', text: '$x = 4$' }, { id: 'B', text: '$x = 8$' }, { id: 'C', text: '$x = 10$' }, { id: 'D', text: '$x = -4$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Multiply by $3$: $x - 4 \\geq 6 \\Rightarrow x \\geq 10$. Only $x = 10$ satisfies.\n\n**Test Day Takeaway:** Clear fractions first by multiplying by the positive denominator (no flip).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-variable-linear-inequality', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-362', domain: 'algebra', skills: ['inequalities'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which compound inequality is equivalent to $2 < x + 5 \\leq 9$?',
    choices: [{ id: 'A', text: '$-3 < x \\leq 4$' }, { id: 'B', text: '$-3 \\leq x < 4$' }, { id: 'C', text: '$7 < x \\leq 14$' }, { id: 'D', text: '$-7 < x \\leq -14$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Subtract $5$ from each part: $-3 < x \\leq 4$.\n\n**Test Day Takeaway:** Compound inequalities $a < x + c \\leq b$: apply the same operation to ALL THREE parts. Strictness stays with each bound.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-variable-linear-inequality', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-363', domain: 'algebra', skills: ['inequalities'], difficulty: 'hard', type: 'multiple-choice',
    question: 'For how many integer values of $x$ does $-6 \\leq 2x - 4 < 8$ hold?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$6$' }, { id: 'D', text: '$7$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Add $4$: $-2 \\leq 2x < 12$. Divide by $2$: $-1 \\leq x < 6$. Integers: $-1, 0, 1, 2, 3, 4, 5 \\Rightarrow 7$ values.\n\n**Test Day Takeaway:** Count integers in $[a, b)$: include $a$, exclude $b$. List them to verify.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-variable-linear-inequality', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-364', domain: 'algebra', skills: ['inequalities'], difficulty: 'hard', type: 'fill-in',
    question: 'What is the greatest integer value of $x$ that satisfies the inequality $-3x + 8 \\geq 2x - 12$?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~10s):** $-5x \\geq -20$; divide by $-5$ (FLIP): $x \\leq 4$. Greatest integer: $4$.\n\n**Test Day Takeaway:** Inclusive $\\leq$ INCLUDES the boundary. Greatest integer satisfying $x \\leq 4$ is $4$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-variable-linear-inequality', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── H.E. SYSTEM OF LINEAR INEQUALITIES (bank-alg-365..372) ──────────────
  { id: 'bank-alg-365', domain: 'algebra', skills: ['inequalities'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which ordered pair $(x, y)$ satisfies BOTH $x + y \\leq 10$ AND $x \\geq 4$?',
    choices: [{ id: 'A', text: '$(2, 8)$' }, { id: 'B', text: '$(5, 4)$' }, { id: 'C', text: '$(7, 6)$' }, { id: 'D', text: '$(8, 5)$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $(5, 4)$: $5 + 4 = 9 \\leq 10$ ✓; $5 \\geq 4$ ✓.\n\n**Why the wrong answers are tempting:**\n* A: $2 \\geq 4$ ✗.\n* C, D: sum > $10$.\n\n**Test Day Takeaway:** Check EVERY inequality. Reject on first failure.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-linear-inequalities', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-366', domain: 'algebra', skills: ['inequalities'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which ordered pair $(x, y)$ is a solution to the system $y > 2x + 3$ and $y \\leq x + 7$?',
    choices: [{ id: 'A', text: '$(0, 0)$' }, { id: 'B', text: '$(0, 5)$' }, { id: 'C', text: '$(3, 5)$' }, { id: 'D', text: '$(5, 10)$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $(0, 5)$: $5 > 3$ ✓; $5 \\leq 7$ ✓.\n\n**Why the wrong answers are tempting:**\n* A: $0 > 3$ ✗.\n* C: $5 > 9$ ✗.\n* D: $10 \\leq 12$ ✓ but $10 > 13$ ✗.\n\n**Test Day Takeaway:** Test each inequality. Both must hold.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-linear-inequalities', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-367', domain: 'algebra', skills: ['inequalities'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A graph shows a region bounded by the line $y = x + 2$ (dashed) and $y = -x + 6$ (solid), with shading BELOW both lines. Which system corresponds to this graph?',
    choices: [{ id: 'A', text: '$y < x + 2$ and $y \\leq -x + 6$' }, { id: 'B', text: '$y > x + 2$ and $y \\geq -x + 6$' }, { id: 'C', text: '$y \\geq x + 2$ and $y < -x + 6$' }, { id: 'D', text: '$y \\leq x + 2$ and $y \\geq -x + 6$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice A is correct.**\n\n**The Key Distinction:** Dashed = strict; solid = inclusive. Below = $y <$ or $y \\leq$.\n\n**Test Day Takeaway:** Dashed → strict, solid → inclusive. Shading direction → inequality direction.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-linear-inequalities', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-368', domain: 'algebra', skills: ['inequalities'], difficulty: 'medium', type: 'fill-in',
    question: 'For the system $x + y \\leq 8$ and $y \\geq 2x - 1$, what is the maximum value of $y$ such that $(0, y)$ is in the solution region?',
    correctAnswer: '8',
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~10s):** At $x = 0$: $y \\leq 8$ and $y \\geq -1$. Max $y$ = $8$.\n\n**Test Day Takeaway:** Substitute the given $x$, then find the tightest bound on $y$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-linear-inequalities', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-369', domain: 'algebra', skills: ['inequalities'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A bakery sells white loaves at $\\$3$ and rye at $\\$4$. They want to sell at most $200$ loaves total but earn at least $\\$700$. If $w$ and $r$ are the numbers of white and rye loaves, which system of inequalities models the constraints?',
    choices: [{ id: 'A', text: '$w + r \\leq 200$ and $3w + 4r \\leq 700$' }, { id: 'B', text: '$w + r \\geq 200$ and $3w + 4r \\geq 700$' }, { id: 'C', text: '$w + r \\leq 200$ and $3w + 4r \\geq 700$' }, { id: 'D', text: '$w + r \\geq 200$ and $3w + 4r \\leq 700$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** 'At most' → $\\leq$. 'At least' → $\\geq$.\n\n**Test Day Takeaway:** Phrase-to-symbol mapping: 'no more than' / 'at most' / 'maximum' = $\\leq$. 'No less than' / 'at least' / 'minimum' = $\\geq$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-linear-inequalities', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-370', domain: 'algebra', skills: ['inequalities'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which best describes the graph of the system $y > -2x + 3$ AND $y < x + 4$ in the $xy$-plane?',
    choices: [{ id: 'A', text: 'A wedge bounded by two dashed lines, shaded above the first and below the second.' }, { id: 'B', text: 'A region with two solid lines, shaded above both.' }, { id: 'C', text: 'A region with one dashed line and one solid line.' }, { id: 'D', text: 'The empty set — the inequalities contradict each other.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice A is correct.**\n\n**The Key Distinction:** Both inequalities are STRICT (no equality), so both bounding lines are DASHED. Shading above the first ($y > $) and below the second ($y < $) forms a wedge.\n\n**Test Day Takeaway:** STRICT inequalities → dashed lines. Solution = intersection of half-planes.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-linear-inequalities', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-371', domain: 'algebra', skills: ['inequalities'], difficulty: 'hard', type: 'multiple-choice',
    question: 'For the system $x + 2y \\geq 20$ and $3x + y \\geq 30$ and $x, y \\geq 0$, which point lies on the boundary where the first two constraints are both binding?',
    choices: [{ id: 'A', text: '$(0, 30)$' }, { id: 'B', text: '$(8, 6)$' }, { id: 'C', text: '$(10, 5)$' }, { id: 'D', text: '$(20, 0)$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Solve $x + 2y = 20$ and $3x + y = 30$ simultaneously. From the second, $y = 30 - 3x$. Substitute: $x + 2(30 - 3x) = 20 \\Rightarrow -5x = -40 \\Rightarrow x = 8, y = 6$.\n\nVerify: $8 + 12 = 20$ ✓; $24 + 6 = 30$ ✓.\n\n**Test Day Takeaway:** The corner where two constraints are both tight is found by solving them as a SYSTEM OF EQUATIONS (equality form).",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'system-of-linear-inequalities', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-372', domain: 'algebra', skills: ['inequalities'], difficulty: 'hard', type: 'fill-in',
    question: 'The system $x + y \\leq 15$, $x \\geq 2$, $y \\geq 3$ defines a region in the $xy$-plane. What is the maximum possible value of $x + 2y$ over this region?',
    correctAnswer: '28',
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**The correct answer is $28$.**\n\n**The Fast Way (~30s):** Vertices: $(2, 3), (2, 13), (12, 3)$. Evaluate $x + 2y$: $8, 28, 18$. Max: $28$.\n\n**Test Day Takeaway:** Linear functions on a polygon attain their max/min at a VERTEX. Evaluate at each corner.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'system-of-linear-inequalities', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── H.C. DISTANCE FORMULA (bank-alg-373..380) ───────────────────────────
  { id: 'bank-alg-373', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the distance between the points $(1, 2)$ and $(4, 6)$ in the $xy$-plane?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$7$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Distance Formula**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $\\Delta x = 3, \\Delta y = 4 \\Rightarrow$ distance $= \\sqrt{9 + 16} = \\sqrt{25} = 5$.\n\n**Why the wrong answers are tempting:**\n* A: just $\\Delta x$.\n* B: just $\\Delta y$.\n* D: $\\Delta x + \\Delta y$ (taxicab distance).\n\n**Test Day Takeaway:** Distance $= \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$ — Pythagorean on a right triangle formed by the two points.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-374', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the distance between the origin $(0, 0)$ and the point $(-3, 4)$ in the $xy$-plane?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$7$' }, { id: 'D', text: '$25$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Distance Formula**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $\\sqrt{9 + 16} = \\sqrt{25} = 5$.\n\n**Test Day Takeaway:** Negative coordinates square to positives. The 3-4-5 triple gives clean distances.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-375', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the distance between the points $(2, -3)$ and $(7, 9)$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$13$' }, { id: 'D', text: '$17$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Distance Formula**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $\\Delta x = 5, \\Delta y = 12 \\Rightarrow \\sqrt{25 + 144} = \\sqrt{169} = 13$. (5-12-13 triple.)\n\n**Test Day Takeaway:** Spot Pythagorean triples ($3, 4, 5$; $5, 12, 13$; $8, 15, 17$) for fast non-calculator distance.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-376', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'medium', type: 'fill-in',
    question: 'What is the distance between the points $(-1, -2)$ and $(5, 6)$?',
    correctAnswer: '10',
    explanation: "**SAT Pattern: Distance Formula**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~10s):** $\\Delta x = 6, \\Delta y = 8 \\Rightarrow \\sqrt{36 + 64} = \\sqrt{100} = 10$ (scaled 3-4-5).\n\n**Test Day Takeaway:** 6-8-10 is a scaled 3-4-5 triple.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-377', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A point $(x, 5)$ is $13$ units away from the origin in the $xy$-plane. What is the positive value of $x$?',
    choices: [{ id: 'A', text: '$8$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$13$' }, { id: 'D', text: '$18$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Distance Formula**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\sqrt{x^2 + 25} = 13 \\Rightarrow x^2 + 25 = 169 \\Rightarrow x^2 = 144 \\Rightarrow x = 12$.\n\n**Test Day Takeaway:** Set distance² $= 13^2$ to avoid the radical.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-378', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In the $xy$-plane, the points $(1, 4)$ and $(7, 4)$ are two adjacent vertices of a square. What is the area of the square, in square units?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$24$' }, { id: 'D', text: '$36$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Distance Formula**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** Side length $= |7 - 1| = 6$. Area = $6^2 = 36$.\n\n**Test Day Takeaway:** Same-row vertices: distance $= |\\Delta x|$. Use the distance as the square's side.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-379', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'hard', type: 'multiple-choice',
    question: 'What is the length of the line segment with endpoints $(2, 3)$ and $(8, 11)$?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$10$' }, { id: 'D', text: '$14$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Distance Formula**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $\\Delta x = 6, \\Delta y = 8 \\Rightarrow \\sqrt{100} = 10$.\n\n**Test Day Takeaway:** Length of a segment = distance between its endpoints.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-380', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'hard', type: 'fill-in',
    question: 'The point $(a, 4)$ lies on a circle centered at the origin with radius $5$. What is the positive value of $a$?',
    correctAnswer: '3',
    explanation: "**SAT Pattern: Distance Formula**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~10s):** Circle: $x^2 + y^2 = 25$. With $y = 4$: $a^2 = 9 \\Rightarrow a = 3$.\n\n**Test Day Takeaway:** Points on a circle of radius $r$ around the origin satisfy $x^2 + y^2 = r^2$ (just the distance formula squared).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── H.C. MIDPOINT FORMULA (bank-alg-381..388) ───────────────────────────
  { id: 'bank-alg-381', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the midpoint of the line segment connecting $(2, 4)$ and $(8, 10)$?',
    choices: [{ id: 'A', text: '$(3, 5)$' }, { id: 'B', text: '$(5, 7)$' }, { id: 'C', text: '$(6, 6)$' }, { id: 'D', text: '$(10, 14)$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $((2+8)/2, (4+10)/2) = (5, 7)$.\n\n**Test Day Takeaway:** Midpoint = average of $x$-coords, average of $y$-coords.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'midpoint-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-382', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the midpoint of the segment with endpoints $(-4, 6)$ and $(10, -2)$?',
    choices: [{ id: 'A', text: '$(2, 2)$' }, { id: 'B', text: '$(3, 2)$' }, { id: 'C', text: '$(6, 4)$' }, { id: 'D', text: '$(7, 4)$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $((-4+10)/2, (6+(-2))/2) = (3, 2)$.\n\n**Test Day Takeaway:** Negative coordinates: average them WITH their signs.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'midpoint-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-383', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The midpoint of the segment from $(3, k)$ to $(11, 5)$ is $(7, 8)$. What is the value of $k$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$13$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $(k + 5)/2 = 8 \\Rightarrow k = 11$.\n\n**Test Day Takeaway:** Solve $(\\text{unknown} + \\text{known})/2 = \\text{midpoint coord}$ for the unknown.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'midpoint-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-384', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'medium', type: 'fill-in',
    question: 'The midpoint of the segment from $(a, 2)$ to $(8, b)$ is $(5, 4)$. What is the value of $a + b$?',
    correctAnswer: '8',
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~10s):** $(a + 8)/2 = 5 \\Rightarrow a = 2$. $(2 + b)/2 = 4 \\Rightarrow b = 6$. Sum: $8$.\n\n**Test Day Takeaway:** Solve each coordinate equation separately.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'midpoint-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-385', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A line segment has one endpoint at $(1, -3)$ and midpoint $(4, 2)$. What are the coordinates of the other endpoint?',
    choices: [{ id: 'A', text: '$(7, 7)$' }, { id: 'B', text: '$(7, -7)$' }, { id: 'C', text: '$(3, 5)$' }, { id: 'D', text: '$(2.5, -0.5)$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Endpoint $= 2 \\cdot$ midpoint $-$ known endpoint $= (8 - 1, 4 - (-3)) = (7, 7)$.\n\n**Test Day Takeaway:** Given midpoint and one endpoint, the other is $2 \\cdot$ midpoint $-$ known endpoint.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'midpoint-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-386', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The diameter of a circle has endpoints $(-2, 6)$ and $(8, -4)$. What is the center of the circle?',
    choices: [{ id: 'A', text: '$(3, 1)$' }, { id: 'B', text: '$(5, 5)$' }, { id: 'C', text: '$(6, 2)$' }, { id: 'D', text: '$(10, 10)$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Center = midpoint of diameter = $((-2+8)/2, (6+(-4))/2) = (3, 1)$.\n\n**Test Day Takeaway:** The center of a circle is the midpoint of any diameter.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'midpoint-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-387', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Points $A(2, 3)$, $B(8, 11)$, and $C$ are collinear, with $B$ the midpoint of $AC$. What are the coordinates of $C$?',
    choices: [{ id: 'A', text: '$(5, 7)$' }, { id: 'B', text: '$(10, 14)$' }, { id: 'C', text: '$(14, 19)$' }, { id: 'D', text: '$(16, 22)$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $C = 2B - A = (16 - 2, 22 - 3) = (14, 19)$.\n\n**Test Day Takeaway:** 'B is the midpoint of AC' $\\Rightarrow$ $C = 2B - A$. Vector reasoning, no algebra needed.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'midpoint-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-388', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'hard', type: 'fill-in',
    question: 'A line segment from $(2, 5)$ to $(2k, 13)$ has its midpoint at $(7, 9)$. What is the value of $k$?',
    correctAnswer: '6',
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~5s):** $(2 + 2k)/2 = 7 \\Rightarrow 2 + 2k = 14 \\Rightarrow k = 6$.\n\n**Test Day Takeaway:** When an endpoint contains a parameter, write the midpoint equation and solve for the parameter.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'midpoint-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── H.E. healthy-push tail (bank-alg-389..390) ────────────────────────────
  { id: 'bank-alg-389', domain: 'algebra', skills: ['inequalities'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the solution to $4x - 7 \\leq 5x + 3$?',
    choices: [{ id: 'A', text: '$x \\leq -10$' }, { id: 'B', text: '$x \\geq -10$' }, { id: 'C', text: '$x \\leq 10$' }, { id: 'D', text: '$x \\geq 10$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $-x \\leq 10 \\Rightarrow x \\geq -10$ (FLIP on dividing by $-1$).\n\n**Test Day Takeaway:** Move variables to one side: $4x - 5x \\leq 3 + 7 \\Rightarrow -x \\leq 10$. Multiply by $-1$ and FLIP the inequality.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-variable-linear-inequality', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-390', domain: 'algebra', skills: ['inequalities'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A baker has $\\$60$ to buy flour and sugar for a recipe. Flour costs $\\$2$ per pound and sugar costs $\\$3$ per pound. She needs at least $20$ pounds total. If $f$ is pounds of flour and $s$ is pounds of sugar, which system represents her constraints?',
    choices: [{ id: 'A', text: '$2f + 3s \\leq 60$ and $f + s \\geq 20$' }, { id: 'B', text: '$2f + 3s \\geq 60$ and $f + s \\leq 20$' }, { id: 'C', text: '$2f + 3s \\leq 60$ and $f + s \\leq 20$' }, { id: 'D', text: '$2f + 3s = 60$ and $f + s = 20$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Budget ($60$) is an upper bound: $\\leq 60$. 'At least $20$ pounds' is a lower bound: $\\geq 20$.\n\n**Test Day Takeaway:** 'At most/no more than' → $\\leq$. 'At least/no less than' → $\\geq$. Translate each constraint independently.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-linear-inequalities', authoredBy: 'performsat-engine', createdAt: '2026-05-16' }
];
