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
    explanation: "**SAT Pattern: Rate of Change from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Rate $= \\frac{1800 - 1200}{9 - 3} = \\frac{600}{6} = 100$ feet per mile.\n\n**The Full Solution:**\nStep 1: Rate of change is the change in elevation over the change in distance.\nStep 2: $\\frac{1800 - 1200}{9 - 3} = \\frac{600}{6} = 100$ feet per mile.\nStep 3: Check: starting at $1{,}200$ ft, mile $9$ gives $1{,}200 + 100 \\cdot 6 = 1{,}800$ ft. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($75$): divides the rise $600$ by $8$ instead of the run $6$.\n* Choice C ($200$): divides $600$ by $3$ (a mile marker) instead of by the run of $6$ miles.\n* Choice D ($600$): reports the total rise without dividing by the run.\n\n**Test Day Takeaway:** Rate of change is change in $y$ over change in $x$. The units in the answer (\"per mile\") tell you what belongs in the denominator.",
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
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Slope $= \\frac{38 - 14}{8 - 2} = \\frac{24}{6} = 4$.\n\n**The Full Solution:**\nStep 1: Use $m = \\frac{y_2 - y_1}{x_2 - x_1}$ with $(2, 14)$ and $(8, 38)$.\nStep 2: $m = \\frac{38 - 14}{8 - 2} = \\frac{24}{6} = 4$.\nStep 3: Check: from $(2, 14)$, moving $6$ in $x$ gives $14 + 4 \\cdot 6 = 38$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): divides the rise $24$ by $8$ instead of by the run $6$.\n* Choice C ($6$): reports the run (the denominator) instead of the slope.\n* Choice D ($24$): reports the rise without dividing by the run.\n\n**Test Day Takeaway:** Slope is rise over run. Subtract the $y$-values and $x$-values in the same order (both new minus old).",
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
    explanation: "**SAT Pattern: Per-Unit Rate (Slope of Cost)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Per-mile rate $= \\frac{85 - 45}{70 - 30} = \\frac{40}{40} = \\$1.00$ per mile.\n\n**The Full Solution:**\nStep 1: The per-mile charge is the slope of the cost-vs-distance line.\nStep 2: $\\text{rate} = \\frac{85 - 45}{70 - 30} = \\frac{40}{40} = \\$1.00$ per mile.\nStep 3: Check: $40$ extra miles at $\\$1.00$ each is $\\$40$, which matches the cost jump from $\\$45$ to $\\$85$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$0.75$): an arithmetic slip on the rate; the difference quotient is exactly $\\frac{40}{40}$.\n* Choice C ($\\$1.21$): divides $\\frac{85}{70}$, treating the total cost as if it had no base fee.\n* Choice D ($\\$1.50$): divides the shorter trip's total cost by its miles ($\\frac{45}{30}$), which mixes in the base fee.\n\n**Test Day Takeaway:** When a base fee is present, dividing total cost by miles gives an average, not the per-mile rate. Use the slope between two points to isolate the true rate.",
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
    explanation: "**SAT Pattern: Rate from Two Points (Negative Slope)**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~10s):** Rate $= \\frac{15 - 24}{5 - 2} = \\frac{-9}{3} = -3$ cm/hr. The candle shrinks at $3$ cm/hr.\n\n**The Full Solution:**\nStep 1: Use the two timed measurements: $24$ cm at hour $2$ and $15$ cm at hour $5$.\nStep 2: $\\frac{15 - 24}{5 - 2} = \\frac{-9}{3} = -3$ cm/hr; the negative sign means the height is decreasing.\nStep 3: The shrink rate is the magnitude, $3$ cm/hr. Check: $30 - 3 \\cdot 2 = 24$ and $30 - 3 \\cdot 5 = 15$. $\\checkmark$\n\n**Common Mistakes:** Reporting $-3$ when the question asks for a positive number; using the initial $30$ cm in the slope formula; dividing $-9$ by $2$ or $5$ instead of by the $3$-hour difference.\n\n**Test Day Takeaway:** For shrink or decay, the slope is negative but the \"rate of shrink\" is its positive magnitude. Read exactly what the question asks for.",
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
    explanation: "**SAT Pattern: Average Rate Over Time**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Steps gained $= 5000 - 1400 = 3600$ over $48$ minutes, so rate $= \\frac{3600}{48} = 75$ steps per minute.\n\n**The Full Solution:**\nStep 1: Change in steps: $5000 - 1400 = 3600$.\nStep 2: Change in time: $7{:}48 - 7{:}00 = 48$ minutes.\nStep 3: Average rate: $\\frac{3600}{48} = 75$ steps per minute. Check: $75 \\times 48 = 3600$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($72$): an arithmetic slip on $\\frac{3600}{48}$.\n* Choice C ($80$): rounds or miscounts the step change before dividing.\n* Choice D ($104$): divides only the final count by the time ($\\frac{5000}{48}$), ignoring the initial $1{,}400$.\n\n**Test Day Takeaway:** Average rate uses the change in both the numerator and the denominator: final minus initial, top and bottom.",
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
    explanation: "**SAT Pattern: Linear Model (Identify Slope and Intercept)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The per-hour rate $0.75$ is the slope and the starting $12$ gallons is the $y$-intercept, so $w = 0.75h + 12$.\n\n**The Full Solution:**\nStep 1: A linear model has the form $w = mh + b$, where $m$ is the per-hour rate and $b$ is the initial amount.\nStep 2: Here $m = 0.75$ gallons per hour and $b = 12$ gallons (the amount at $h = 0$).\nStep 3: So $w = 0.75h + 12$. Check: at $h = 0$, $w = 12$; after $4$ hours, $w = 12 + 0.75 \\cdot 4 = 15$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($w = 12h + 0.75$): swaps the slope and intercept.\n* Choice C ($w = 12.75h$): adds the two numbers into one coefficient of $h$, losing the fixed starting amount.\n* Choice D ($w = h + 12.75$): adds the numbers and uses a slope of $1$ on $h$.\n\n**Test Day Takeaway:** In a linear model, the rate is the slope (coefficient of the variable) and the initial value is the $y$-intercept (the value at $0$).",
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
    explanation: "**SAT Pattern: Linear Cost Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The $\\$40$ monthly rate is the slope and the $\\$25$ one-time fee is the $y$-intercept, so $C = 40m + 25$.\n\n**The Full Solution:**\nStep 1: Total cost is the monthly rate times months, plus the one-time fee.\nStep 2: $C = 40m + 25$.\nStep 3: Check: at $m = 0$, $C = 25$ (signup day); after $3$ months, $C = 40 \\cdot 3 + 25 = 145$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($C = 25m + 40$): swaps the monthly rate and the one-time fee.\n* Choice C ($C = 65m$): merges the two into one per-month rate, losing the fixed fee.\n* Choice D ($C = 40m - 25$): subtracts the fee instead of adding it.\n\n**Test Day Takeaway:** \"Per [unit]\" is the slope (coefficient of the variable); \"one-time\" or \"flat\" is the intercept (the constant). A growing cost uses a plus sign.",
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
    explanation: "**SAT Pattern: Slope-Intercept Form Identification**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $y = mx + b$ with $m = -2$ and $b = 9$ gives $y = -2x + 9$.\n\n**The Full Solution:**\nStep 1: Slope-intercept form is $y = mx + b$, where $m$ is the slope and $b$ is the $y$-intercept.\nStep 2: Substitute $m = -2$ and $b = 9$ to get $y = -2x + 9$.\nStep 3: Check: at $x = 0$, $y = 9$ (the intercept); each unit increase in $x$ drops $y$ by $2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = 9x - 2$): swaps the slope and the intercept.\n* Choice C ($y = 2x + 9$): drops the negative sign on the slope.\n* Choice D ($y = -2x - 9$): flips the sign of the intercept.\n\n**Test Day Takeaway:** In $y = mx + b$, the slope multiplies $x$ and the intercept stands alone as the constant.",
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
    explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** A slope of $-3$ means $y$ (remaining pages) drops by $3$ each session, so $3$ pages are read per session.\n\n**The Full Solution:**\nStep 1: In $y = -3x + 210$, $y$ is remaining pages, $x$ is sessions, and the slope $-3$ is the change in $y$ per session.\nStep 2: Remaining pages fall by $3$ every session, which is the same as reading $3$ pages per session.\nStep 3: Check: at $x = 0$, $210$ pages remain; at $x = 1$, $207$ remain — a $3$-page drop. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (total sessions needed): that would be $\\frac{210}{3} = 70$, not the slope.\n* Choice C (starting page count): that is the $y$-intercept $210$, not the slope.\n* Choice D (final page count): that is $y$ at the end, not the rate of change.\n\n**Test Day Takeaway:** Slope is the rate of change in context — \"$y$-units per $x$-unit.\" A negative slope means $y$ decreases as $x$ increases.",
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
    explanation: "**SAT Pattern: Standard to Slope-Intercept**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Isolate $y$: $-2y = -4x + 10$, then divide every term by $-2$ to get $y = 2x - 5$, so slope $= 2$ and $y$-intercept $= -5$.\n\n**The Full Solution:**\nStep 1: Start from $4x - 2y = 10$ and subtract $4x$: $-2y = -4x + 10$.\nStep 2: Divide every term by $-2$: $y = 2x - 5$.\nStep 3: In $y = mx + b$, $m = 2$ and $b = -5$. Check: at $x = 0$, $y = -5$; at $x = 1$, $y = -3$, so the slope is $\\frac{-3 - (-5)}{1 - 0} = 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (slope $-2$, intercept $5$): flips the signs on the $x$-term and constant instead of dividing each by $-2$.\n* Choice C (slope $4$, intercept $-10$): reads the coefficients straight off standard form without solving for $y$.\n* Choice D (slope $2$, intercept $5$): gets the slope right but keeps $10$ as a positive intercept instead of dividing by $-2$.\n\n**Test Day Takeaway:** Standard form $Ax + By = C$ never lets you read slope or intercept directly — isolate $y$ first, dividing every term by the coefficient of $y$.",
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
    explanation: "**SAT Pattern: Linear Model to Find Zero Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Drain rate $= \\frac{480 - 210}{3} = 90$ gal/hr. From $1$ PM, $210$ gallons take $\\frac{210}{90} = \\frac{7}{3}$ hr $= 2$ hr $20$ min, so the pool is empty at $3{:}20$ PM.\n\n**The Full Solution:**\nStep 1: From $10$ AM to $1$ PM ($3$ hours) the pool drops from $480$ to $210$ gallons, a rate of $\\frac{480 - 210}{3} = 90$ gal/hr.\nStep 2: From $1$ PM, the remaining $210$ gallons take $\\frac{210}{90} = \\frac{7}{3}$ hr $= 2$ hr $20$ min.\nStep 3: $1{:}00 + 2{:}20 = 3{:}20$ PM. Check: total drain time from $10$ AM is $5\\frac{1}{3}$ hr, and $90 \\times 5\\frac{1}{3} = 480$ gallons. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2{:}20$ PM): drops the $1$-hour gap and adds $2{:}20$ to $12$ PM-style reasoning.\n* Choice B ($3{:}00$ PM): rounds $2$ hr $20$ min down to a whole $2$ hours.\n* Choice D ($4{:}00$ PM): rounds the remaining time up to $3$ hours.\n\n**Test Day Takeaway:** For draining models, find the rate first, anchor at the most recent known point, then solve for when the amount hits $0$ — and convert decimal hours into hours and minutes.",
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
    explanation: "**SAT Pattern: Linear Model Threshold**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Rate $= \\frac{1320 - 120}{10} = 120$ per hour. Solve $120 + 120t = 900 \\Rightarrow 120t = 780 \\Rightarrow t = 6.5$.\n\n**The Full Solution:**\nStep 1: The model is $N(t) = 120 + 120t$ (initial $120$, slope $120$ per hour).\nStep 2: Set $N(t) = 900$: $120 + 120t = 900$, so $120t = 780$ and $t = 6.5$ hours.\nStep 3: Check: $N(6.5) = 120 + 120 \\cdot 6.5 = 120 + 780 = 900$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (between hour $6$ and $7$): correct bracket, but the exact value $6.5$ is available, so the precise answer wins.\n* Choice B (between hour $7$ and $8$): wrong bracket — the crossing happens before hour $7$.\n* Choice D (exactly hour $7.5$): off by one hour from the true crossing of $6.5$.\n\n**Test Day Takeaway:** When choices offer both ranges and exact values, prefer the exact value when the algebra gives a clean number. Here $\\frac{780}{120} = 6.5$ exactly.",
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
    explanation: "**SAT Pattern: Word Problem to Equation Setup**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** With $c$ cupcakes at $\\$3$, the rest of the 85 items are muffins: $85-c$ at $\\$2$. Total revenue is $3c+2(85-c)=210$.\n\n**The Full Solution:**\nStep 1: Let $c$ be the number of cupcakes. Since 85 items sold in all, muffins $=85-c$.\nStep 2: Cupcake revenue is $3c$; muffin revenue is $2(85-c)$.\nStep 3: Their sum is the $\\$210$ total: $3c+2(85-c)=210$. (Solving gives $c=40$, and $40$ cupcakes plus $45$ muffins is $\\$120+\\$90=\\$210$. $\\checkmark$)\n\n**Why the wrong answers are tempting:**\n* Choice B: swaps the prices, charging $\\$2$ for cupcakes and $\\$3$ for muffins.\n* Choice C: writes $2c$ for muffins, so both terms are counts of $c$ and the 85-item total is never used.\n* Choice D: combines the prices into $5c$, ignoring that there are two different items.\n\n**Test Day Takeaway:** When two quantities share a known total, write the second as $(\\text{total}-c)$ so the whole problem runs on one variable, then attach each price to its own count.",
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
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Fixed fee plus per-text charge equals the bill: $35+0.10t=52$.\n\n**The Full Solution:**\nStep 1: The $\\$35$ monthly fee is a constant — it does not depend on $t$.\nStep 2: Texts cost $\\$0.10$ each, so $t$ texts cost $0.10t$.\nStep 3: Fee plus texting charge equals the total bill: $35+0.10t=52$. (Solving gives $0.10t=17$, so $t=170$. $\\checkmark$)\n\n**Why the wrong answers are tempting:**\n* Choice B: subtracts the fee instead of adding it, as if the $\\$35$ were a discount.\n* Choice C: treats $\\$35$ as the per-text rate and $\\$0.10$ as the fixed fee — the roles are reversed.\n* Choice D: glues the fee and rate into a single $\\$35.10$ coefficient, double-counting the fixed cost on every text.\n\n**Test Day Takeaway:** In a linear cost, the fixed fee is added once and the per-unit rate multiplies the quantity. Join them with $+$, never by merging into one coefficient.",
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
    explanation: "**SAT Pattern: Set Two Linear Models Equal**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Set the two subscriber counts equal: $4500+350m=6200-150m$. The $m$ terms combine to $500m=1700$, so $m=3.4$ months.\n\n**The Full Solution:**\nStep 1: Let $m$ be months after January. The growing service has $4500+350m$; the shrinking rival has $6200-150m$ (losing, so subtract).\nStep 2: Equate them: $4500+350m=6200-150m$.\nStep 3: Collect terms: $350m+150m=6200-4500$, so $500m=1700$ and $m=3.4$. (Check: $4500+350(3.4)=5690$ and $6200-150(3.4)=5690$. $\\checkmark$)\n\n**Why the wrong answers are tempting:**\n* Choice A ($3.0$): closes the gap with only the gaining rate and ignores that the rival's decline also narrows it, then rounds to a whole month — both moves understate the true rate.\n* Choice C ($4.0$): rounds $3.4$ up to a whole month for no reason; the question allows a decimal.\n* Choice D ($5.0$): an arithmetic slip on the $1700\\div 500$ division.\n\n**Test Day Takeaway:** When one quantity climbs and another falls, they meet at the combined rate: add the two monthly rates ($350+150=500$) to see how fast the gap closes.",
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
    explanation: "**SAT Pattern: Linear Equation with Starting Quantity**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Pages still needed $=270-54=216$. At 18 pages per minute, that is $\\frac{216}{18}=12$ minutes.\n\n**The Full Solution:**\nStep 1: Let $m$ be the extra minutes. Total pages equal the head start plus the rate times time: $54+18m=270$.\nStep 2: Subtract the head start: $18m=216$.\nStep 3: Divide by the rate: $m=\\frac{216}{18}=12$ minutes. (Check: $54+18(12)=54+216=270$. $\\checkmark$)\n\n**Why the wrong answers are tempting:**\n* Choice B ($15$): divides $\\frac{270}{18}$ without subtracting the 54 pages already printed.\n* Choice C ($3$): divides the head start by the rate, $\\frac{54}{18}$, instead of the remaining pages.\n* Choice D ($18$): reports the rate itself rather than a time.\n\n**Test Day Takeaway:** For \"how many more\" questions, subtract what is already done from the target first, then divide by the rate — the answer is the additional time, not the total.",
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
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The 20 small boxes use $20\\times 4=80$ lb, leaving $500-80=420$ lb. Then $\\frac{420}{9}\\approx 46.67$, so at most $46$ large boxes fit.\n\n**The Full Solution:**\nStep 1: Let $L$ be the number of large boxes. Total weight cannot exceed 500: $20(4)+9L\\le 500$.\nStep 2: Simplify: $80+9L\\le 500$, so $9L\\le 420$ and $L\\le 46.67$.\nStep 3: $L$ must be a whole number, so round down: $L=46$. (Check: $80+9(46)=494\\le 500$, but $80+9(47)=503>500$. $\\checkmark$)\n\n**Why the wrong answers are tempting:**\n* Choice A ($44$): an arithmetic slip in the division or subtraction, landing two short.\n* Choice C ($47$): rounds $46.67$ up, but that 47th box pushes the load to 503 lb and breaks the limit.\n* Choice D ($55$): computes $\\frac{500}{9}$ and ignores the 80 lb of small boxes already on the pallet.\n\n**Test Day Takeaway:** A \"maximum that fits\" capacity problem ends with the floor of the decimal. Rounding up violates the $\\le$ constraint.",
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
    explanation: "**SAT Pattern: Break-Even Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Set $50+35h=55h$. The $h$ terms give $50=20h$, so $h=2.5$ hours.\n\n**The Full Solution:**\nStep 1: Landscaper A costs $50+35h$; Landscaper B costs $55h$.\nStep 2: Set the costs equal: $50+35h=55h$.\nStep 3: Subtract $35h$: $50=20h$, so $h=\\frac{50}{20}=2.5$ hours. (Check: A $=50+35(2.5)=\\$137.50$ and B $=55(2.5)=\\$137.50$. $\\checkmark$)\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): an arithmetic slip, dividing 50 by a rate gap that is too large.\n* Choice C ($3$): rounds $2.5$ up to a whole hour, which the question does not require.\n* Choice D ($5$): divides $\\frac{50}{10}$ with a rate gap of 10 instead of the true $55-35=20$.\n\n**Test Day Takeaway:** Two cost models break even where they are equal. The difference in hourly rates ($55-35=20$) is how fast the no-fee option erases the fixed consultation fee.",
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
    explanation: "**SAT Pattern: Linear Equation from Table**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** From the table the height rises 3 per week (slope $=\\frac{14-8}{3-1}=3$), and at week 1 the height is 8, so $b=8-3=5$. The equation is $h=3w+5$.\n\n**The Full Solution:**\nStep 1: Find the slope from two points: $m=\\frac{14-8}{3-1}=\\frac{6}{2}=3$.\nStep 2: Plug a point into $h=3w+b$. Using $(1,8)$: $8=3(1)+b$, so $b=5$.\nStep 3: The equation is $h=3w+5$. (Check another point, $(3,14)$: $3(3)+5=14$. $\\checkmark$)\n\n**Why the wrong answers are tempting:**\n* Choice B: swaps slope and intercept, writing $h=5w+3$.\n* Choice C: keeps the right slope but uses the week-1 height of 8 as the intercept.\n* Choice D: doubles the slope to 6 and guesses a 2 intercept.\n\n**Test Day Takeaway:** For table-to-equation, compute the slope from any two rows, then back out the intercept by substituting one point into $y=mx+b$, and confirm with a second row.",
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
    explanation: "**SAT Pattern: Linear Equation from Table (Intercept Given)**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The temperature climbs 3 per hour (slope $=\\frac{64-58}{2-0}=3$), and at hour 0 it reads 58, so $T=3h+58$.\n\n**The Full Solution:**\nStep 1: Find the slope from two rows: $m=\\frac{64-58}{2-0}=\\frac{6}{2}=3$ degrees per hour.\nStep 2: The table includes $h=0$, so the intercept is read straight off: $b=58$.\nStep 3: The equation is $T=3h+58$. (Check at $h=4$: $3(4)+58=70$. $\\checkmark$)\n\n**Why the wrong answers are tempting:**\n* Choice B: uses the total 6-degree change as the slope, forgetting to divide by the 2 hours.\n* Choice C: takes the hour-2 reading of 64 as the intercept instead of the hour-0 reading.\n* Choice D: swaps slope and intercept, writing $T=58h+3$.\n\n**Test Day Takeaway:** When a table includes $x=0$, that row's $y$-value is the intercept directly — no back-solving needed. Still divide the rise by the run to get the slope.",
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
    explanation: "**SAT Pattern: Find Intercept from Slope and Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Slope $a=\\frac{520-340}{5-2}=60$. Substitute $(2,340)$ into $R=ad+b$: $340=60(2)+b$, so $b=220$.\n\n**The Full Solution:**\nStep 1: Find the slope from two rows: $a=\\frac{520-340}{5-2}=\\frac{180}{3}=60$ dollars per day.\nStep 2: Use a known point to solve for $b$. With $(2,340)$: $340=60(2)+b=120+b$.\nStep 3: So $b=340-120=220$. (Check at day 5: $60(5)+220=520$. $\\checkmark$)\n\n**Why the wrong answers are tempting:**\n* Choice A ($200$): subtracts a bit too much, as if the slope were 70.\n* Choice C ($160$): subtracts the full 180 rise from 340 instead of $60\\times 2$.\n* Choice D ($280$): adds $120$ to $340$ instead of subtracting it.\n\n**Test Day Takeaway:** When the table skips $x=0$, find the slope first, then substitute any row into $y=ax+b$ and solve for $b$ — subtract the slope-times-$x$ product, do not add it.",
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
    explanation: "**SAT Pattern: Linear Function from Table (Negative Slope)**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Slope $=\\frac{4-13}{1-(-2)}=\\frac{-9}{3}=-3$. At $x=1$, $4=-3(1)+b$ gives $b=7$, so $f(x)=-3x+7$.\n\n**The Full Solution:**\nStep 1: Find the slope: $m=\\frac{4-13}{1-(-2)}=\\frac{-9}{3}=-3$.\nStep 2: Solve for the intercept with $(1,4)$: $4=-3(1)+b$, so $b=7$.\nStep 3: The function is $f(x)=-3x+7$. (Check $(-2,13)$: $-3(-2)+7=13$. $\\checkmark$)\n\n**Why the wrong answers are tempting:**\n* Choice B: drops the negative sign on the slope, writing $f(x)=3x+7$.\n* Choice C: flips the intercept sign to $-7$.\n* Choice D: uses $f(1)=4$ as the intercept, skipping the slope-intercept step.\n\n**Test Day Takeaway:** As $x$ increases the output falls, so the slope is negative — watch the sign on $\\frac{\\Delta y}{\\Delta x}$, then verify with a second row to catch a stray sign error.",
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
    explanation: "**SAT Pattern: Direct Function Evaluation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $f(5)=4(5)-7=20-7=13$.\n\n**The Full Solution:**\nStep 1: Substitute $x=5$ into $f(x)=4x-7$.\nStep 2: Multiply first: $4(5)=20$.\nStep 3: Subtract: $20-7=13$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($27$): adds 7 instead of subtracting, giving $20+7$.\n* Choice C ($-3$): subtracts in the wrong order, computing $5-4\\cdot 2$ or a similar sign mix-up.\n* Choice D ($20$): stops after $4\\cdot 5$ and forgets to subtract the 7.\n\n**Test Day Takeaway:** Substitute the input, then follow order of operations — multiply before you subtract.",
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
    explanation: "**SAT Pattern: Function Evaluation with Negatives**\n\n**The correct answer is $21$.**\n\n**The Fast Way (~5s):** $g(-3)=-2(-3)+15=6+15=21$.\n\n**The Full Solution:**\nStep 1: Substitute $x=-3$ into $g(x)=-2x+15$.\nStep 2: A negative times a negative is positive: $-2(-3)=+6$.\nStep 3: Add: $6+15=21$.\n\n**Common Mistakes:** Treating $-2(-3)$ as $-6$ and reporting $9$; subtracting 15 instead of adding it.\n\n**Test Day Takeaway:** A negative times a negative is positive. When you plug in a negative input, wrap it in parentheses so $-2(-3)=+6$, not $-6$.",
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
    explanation: "**SAT Pattern: Solve for Function Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The fare is $C(m)=2.50m+3.00$. Set it equal to the payment and peel off the base fare first: $2.50m+3.00=28.00 \\Rightarrow 2.50m=25.00 \\Rightarrow m=10$.\n\n**The Full Solution:**\nStep 1: The customer paid $\\$28.00$, so $C(m)=28.00$, which gives $2.50m+3.00=28.00$.\nStep 2: Subtract the flat base fare: $2.50m=25.00$.\nStep 3: Divide by the per-mile rate: $m=\\frac{25.00}{2.50}=10$ miles.\nCheck: $C(10)=2.50(10)+3.00=25.00+3.00=28.00$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): an arithmetic slip on $\\frac{25}{2.50}$; the clean division is $10$, not $8$.\n* Choice C ($11.2$): divided the full $\\$28.00$ by $2.50$ without first removing the $\\$3.00$ base fare.\n* Choice D ($12.4$): used the wrong base or mis-divided; no valid order of operations lands here.\n\n**Test Day Takeaway:** To solve for a function's input, undo the operations in reverse: subtract the constant first, then divide by the coefficient.",
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
    explanation: "**SAT Pattern: Function Evaluation (Quadratic)**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~10s):** Substitute $x=3$ into $f(x)=x^2-4x+7$: $f(3)=9-12+7=4$.\n\n**The Full Solution:**\nStep 1: Replace every $x$ with $3$: $f(3)=3^2-4(3)+7$.\nStep 2: Square first: $3^2=9$, and $4(3)=12$, so $f(3)=9-12+7$.\nStep 3: Work left to right: $9-12=-3$, then $-3+7=4$.\n\n**Common Mistakes:** Computing $3^2=6$ instead of $9$; grouping wrong as $9-(12+7)=-10$ instead of going left to right.\n\n**Test Day Takeaway:** When evaluating a quadratic, square the input first, then handle the rest left to right.",
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
    explanation: "**SAT Pattern: Function Equality (One-to-One Linear)**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** A line with nonzero slope is one-to-one, so $f(a)=f(2a-5)$ forces the inputs to match: $a=2a-5 \\Rightarrow a=5$.\n\n**The Full Solution:**\nStep 1: $f(x)=3x-7$ has slope $3\\neq 0$, so different inputs always give different outputs. Equal outputs mean equal inputs.\nStep 2: Set the inputs equal: $a=2a-5$.\nStep 3: Solve: $5=a$, so $a=5$.\nCheck (the long way): $f(a)=3a-7$ and $f(2a-5)=3(2a-5)-7=6a-22$. Then $3a-7=6a-22 \\Rightarrow -3a=-15 \\Rightarrow a=5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): set the input equal to a piece of the formula rather than to the other input.\n* Choice C ($7$): grabbed the constant $7$ from $f(x)=3x-7$ instead of solving.\n* Choice D ($10$): doubled the correct value of $5$.\n\n**Test Day Takeaway:** For any linear function with nonzero slope, $f(a)=f(b)$ means $a=b$ — set the inputs equal and skip the algebra.",
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
    explanation: "**SAT Pattern: Parallel Slope Identification**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Parallel lines share the same slope. Line $p$ has slope $\\frac{2}{3}$, so any parallel line also has slope $\\frac{2}{3}$.\n\n**The Full Solution:**\nStep 1: $y=\\frac{2}{3}x-4$ is in slope-intercept form, so the slope is the coefficient of $x$: $\\frac{2}{3}$.\nStep 2: Parallel lines never intersect, which happens exactly when their slopes are equal. The parallel slope is $\\frac{2}{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{2}{3}$): flipped the sign for no reason — parallel keeps the slope as-is.\n* Choice C ($\\frac{3}{2}$): took the reciprocal, which is not the parallel rule.\n* Choice D ($-\\frac{3}{2}$): used the negative reciprocal — that is the perpendicular slope.\n\n**Test Day Takeaway:** Parallel means same slope; perpendicular means negative reciprocal. Keep the two rules separate.",
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
    explanation: "**SAT Pattern: Parallel Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Slope of $\\ell=\\frac{12-4}{-3-1}=\\frac{8}{-4}=-2$. A parallel line has the same slope, $-2$.\n\n**The Full Solution:**\nStep 1: Apply the slope formula to $(1,4)$ and $(-3,12)$: $m=\\frac{12-4}{-3-1}$.\nStep 2: Simplify: $m=\\frac{8}{-4}=-2$.\nStep 3: Parallel lines share that slope, so the answer is $-2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): dropped the negative sign from $\\frac{8}{-4}$.\n* Choice C ($\\frac{1}{2}$): used the positive reciprocal, which has nothing to do with parallel lines.\n* Choice D ($-\\frac{1}{2}$): used the negative reciprocal — that is the perpendicular slope.\n\n**Test Day Takeaway:** Compute the slope with its sign first, then apply the parallel rule (same slope). Don't let the perpendicular reflex flip or invert it.",
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
    explanation: "**SAT Pattern: Slope from Standard Form**\n\n**The correct answer is $1.5$.**\n\n**The Fast Way (~10s):** For $Ax+By=C$, the slope is $-\\frac{A}{B}$. Here $-\\frac{6}{-4}=\\frac{3}{2}=1.5$.\n\n**The Full Solution:**\nStep 1: Isolate $y$ in $6x-4y=20$: $-4y=-6x+20$.\nStep 2: Divide every term by $-4$: $y=\\frac{3}{2}x-5$.\nStep 3: Read the slope off the coefficient of $x$: $m=\\frac{3}{2}=1.5$.\n\n**Common Mistakes:** Reporting $-1.5$ by mishandling the sign when dividing by $-4$; reporting $-5$, which is the $y$-intercept, not the slope.\n\n**Test Day Takeaway:** From $Ax+By=C$, the slope is $-\\frac{A}{B}$ — or just solve for $y$ and read the coefficient.",
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
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Keep the slope $-5$ and find the new intercept at $(2,1)$: $1=-5(2)+b \\Rightarrow b=11$. So $y=-5x+11$.\n\n**The Full Solution:**\nStep 1: Parallel lines share a slope, so the new line has slope $-5$.\nStep 2: Plug $(2,1)$ into $y=-5x+b$: $1=-5(2)+b=-10+b$.\nStep 3: Solve: $b=11$, giving $y=-5x+11$.\nCheck: at $x=2$, $y=-5(2)+11=1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($y=-5x-9$): correct slope but wrong intercept arithmetic.\n* Choice C ($y=\\frac{1}{5}x+\\frac{3}{5}$): used the perpendicular (negative reciprocal) slope instead of the parallel slope.\n* Choice D ($y=5x-9$): dropped the negative sign on the slope.\n\n**Test Day Takeaway:** For a parallel line through a point, keep the original slope and solve for the new intercept using that point.",
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
    explanation: "**SAT Pattern: Parallel from Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Road slope $=-\\frac{A}{B}=-\\frac{3}{-4}=\\frac{3}{4}$. The point $(0,7)$ is the intercept itself, so the path is $y=\\frac{3}{4}x+7$.\n\n**The Full Solution:**\nStep 1: Find the road's slope by solving $3x-4y=20$ for $y$: $-4y=-3x+20 \\Rightarrow y=\\frac{3}{4}x-5$. Slope is $\\frac{3}{4}$.\nStep 2: The bike path is parallel, so it also has slope $\\frac{3}{4}$.\nStep 3: It passes through $(0,7)$, and since $x=0$ there, $7$ is the $y$-intercept directly: $y=\\frac{3}{4}x+7$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($y=-\\frac{4}{3}x+7$): used the negative reciprocal — that is the perpendicular slope.\n* Choice C ($y=\\frac{3}{4}x-5$): kept the road's own intercept $-5$ instead of using $(0,7)$.\n* Choice D ($y=\\frac{4}{3}x+7$): inverted the slope instead of keeping $\\frac{3}{4}$.\n\n**Test Day Takeaway:** A point of the form $(0,k)$ is the $y$-intercept, so you can write the equation in one step once you have the slope.",
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
    explanation: "**SAT Pattern: Parallel with Specified Intercept**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Slope of $\\ell=\\frac{12-4}{-3-1}=-2$. With $y$-intercept $-1$: $y=-2x-1$.\n\n**The Full Solution:**\nStep 1: Find the slope of $\\ell$ through $(1,4)$ and $(-3,12)$: $m=\\frac{12-4}{-3-1}=\\frac{8}{-4}=-2$.\nStep 2: A parallel line keeps that slope, and the given $y$-intercept is $-1$.\nStep 3: Assemble slope-intercept form: $y=-2x+(-1)=-2x-1$.\nCheck: at $x=0$, $y=-1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($y=2x-1$): dropped the negative sign on the slope.\n* Choice C ($y=-2x+1$): flipped the sign of the intercept from $-1$ to $+1$.\n* Choice D ($y=\\frac{1}{2}x-1$): used the reciprocal of the slope instead of the slope itself.\n\n**Test Day Takeaway:** When a parallel line's intercept is handed to you, just copy the original slope and drop in the new intercept.",
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
    explanation: "**SAT Pattern: Perpendicular Slope (Negative Reciprocal)**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** Perpendicular slope is the negative reciprocal. Flip $4$ to $\\frac{1}{4}$ and negate: $-\\frac{1}{4}$.\n\n**The Full Solution:**\nStep 1: Perpendicular slopes multiply to $-1$: $m_1\\cdot m_2=-1$.\nStep 2: With $m_1=4$, solve $4\\cdot m_2=-1$, so $m_2=-\\frac{1}{4}$.\nCheck: $4\\cdot\\left(-\\frac{1}{4}\\right)=-1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): that is the parallel (same) slope, not the perpendicular one.\n* Choice B ($-4$): only negated — forgot to take the reciprocal.\n* Choice C ($\\frac{1}{4}$): only took the reciprocal — forgot the negative sign.\n\n**Test Day Takeaway:** Perpendicular means do both moves: flip the fraction and change the sign. Verify with $m_1\\cdot m_2=-1$.",
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
    explanation: "**SAT Pattern: Perpendicular Slope from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Slope of $m=\\frac{-3-5}{3-(-1)}=\\frac{-8}{4}=-2$. Negative reciprocal: $\\frac{1}{2}$.\n\n**The Full Solution:**\nStep 1: Find the slope of line $m$ through $(-1,5)$ and $(3,-3)$: $m_1=\\frac{-3-5}{3-(-1)}=\\frac{-8}{4}=-2$.\nStep 2: A perpendicular slope is $-\\frac{1}{m_1}=-\\frac{1}{-2}=\\frac{1}{2}$.\nCheck: $-2\\cdot\\frac{1}{2}=-1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): that is the slope of $m$ itself (the parallel slope), not the perpendicular one.\n* Choice B ($2$): only negated $m_1$ — forgot the reciprocal.\n* Choice D ($-\\frac{1}{2}$): took the reciprocal but kept the wrong sign; the product would be $+1$, not $-1$.\n\n**Test Day Takeaway:** Compute the slope with its sign first, then apply $-\\frac{1}{m}$ — both negate and reciprocate.",
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
    explanation: "**SAT Pattern: Perpendicular Slope as Decimal**\n\n**The correct answer is $-1.6$.**\n\n**The Fast Way (~10s):** Negative reciprocal of $\\frac{5}{8}$ is $-\\frac{8}{5}=-1.6$.\n\n**The Full Solution:**\nStep 1: Flip $\\frac{5}{8}$ to get the reciprocal $\\frac{8}{5}$.\nStep 2: Negate it for the perpendicular slope: $-\\frac{8}{5}$.\nStep 3: Convert to a decimal: $-\\frac{8}{5}=-1.6$.\nCheck: $\\frac{5}{8}\\cdot\\left(-\\frac{8}{5}\\right)=-1$. $\\checkmark$\n\n**Common Mistakes:** Reporting $1.6$ by forgetting the negative sign; reporting $0.625$ (that is $\\frac{5}{8}$, the original slope); reporting $-0.625$ by negating without flipping.\n\n**Test Day Takeaway:** For a perpendicular slope, flip the fraction and change the sign — then convert to a decimal if the grid-in demands it.",
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
    explanation: "**SAT Pattern: Perpendicular Line Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The perpendicular slope is the negative reciprocal of $\\frac{3}{5}$, which is $-\\frac{5}{3}$. Plug in $(6, -1)$: $-1 = -\\frac{5}{3}(6) + b = -10 + b$, so $b = 9$. That gives $y = -\\frac{5}{3}x + 9$, choice A.\n\n**The Full Solution:**\nStep 1: The given line has slope $\\frac{3}{5}$. A perpendicular line has slope $-\\frac{5}{3}$ (flip and negate).\nStep 2: Use the point $(6, -1)$: $-1 = -\\frac{5}{3}(6) + b$.\nStep 3: Simplify: $-1 = -10 + b \\Rightarrow b = 9$.\nStep 4: The equation is $y = -\\frac{5}{3}x + 9$. Check at $x = 6$: $y = -10 + 9 = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = \\frac{5}{3}x - 11$): kept the slope positive instead of negating it.\n* Choice C ($y = -\\frac{3}{5}x + \\frac{13}{5}$): negated the original slope instead of taking the negative reciprocal.\n* Choice D ($y = -\\frac{5}{3}x - 11$): used the right slope but botched the intercept arithmetic.\n\n**Test Day Takeaway:** Perpendicular slope is the negative reciprocal: flip the fraction and switch the sign. Then substitute the point to solve for $b$.",
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
    explanation: "**SAT Pattern: Perpendicular from Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** For $Ax + By = C$, the slope is $-\\frac{A}{B} = -\\frac{2}{6} = -\\frac{1}{3}$, so the perpendicular slope is $3$. At $(4, -2)$: $-2 = 3(4) + b \\Rightarrow b = -14$, giving $y = 3x - 14$, choice A.\n\n**The Full Solution:**\nStep 1: Find the original slope by solving for $y$: $2x + 6y = 18 \\Rightarrow 6y = -2x + 18 \\Rightarrow y = -\\frac{1}{3}x + 3$. Slope is $-\\frac{1}{3}$.\nStep 2: The perpendicular slope is the negative reciprocal of $-\\frac{1}{3}$, which is $3$.\nStep 3: Use $(4, -2)$: $-2 = 3(4) + b \\Rightarrow -2 = 12 + b \\Rightarrow b = -14$.\nStep 4: The equation is $y = 3x - 14$. Check at $x = 4$: $y = 12 - 14 = -2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = -\\frac{1}{3}x - \\frac{2}{3}$): used the original (parallel) slope instead of the perpendicular one.\n* Choice C ($y = 3x + 10$): correct slope but flipped the sign of the intercept.\n* Choice D ($y = -3x + 10$): negated the original slope instead of using the negative reciprocal.\n\n**Test Day Takeaway:** From $Ax + By = C$, slope $= -\\frac{A}{B}$. Take the negative reciprocal for the perpendicular slope, then plug in the point.",
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
    explanation: "**SAT Pattern: y-Intercept of Perpendicular Line**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~20s):** The perpendicular slope is $-\\frac{7}{4}$. At $(4, 2)$: $2 = -\\frac{7}{4}(4) + b = -7 + b$, so $b = 9$.\n\n**The Full Solution:**\nStep 1: The given line has slope $\\frac{4}{7}$, so the perpendicular slope is $-\\frac{7}{4}$ (flip and negate).\nStep 2: Use the point $(4, 2)$: $2 = -\\frac{7}{4}(4) + b = -7 + b$.\nStep 3: Solve: $b = 9$. The equation is $y = -\\frac{7}{4}x + 9$. Check at $x = 4$: $y = -7 + 9 = 2$. $\\checkmark$\n\n**Common Mistakes:** Using the parallel slope $\\frac{4}{7}$ instead of the perpendicular $-\\frac{7}{4}$; reporting $-7$ (the intermediate term) instead of the intercept $9$; sign-slipping to $b = -5$.\n\n**Test Day Takeaway:** The $y$-intercept is the constant $b$ in $y = mx + b$. Find the perpendicular slope first, then substitute the point to solve for $b$.",
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
    explanation: "**SAT Pattern: Classify System (Parallel Lines)**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** Both lines have slope $2$ but different intercepts ($5 \\neq -3$). Parallel lines never meet, so there is no solution, choice D.\n\n**The Full Solution:**\nStep 1: Read the slopes from $y = mx + b$. Both equations have slope $2$.\nStep 2: The $y$-intercepts are $5$ and $-3$, which differ.\nStep 3: Same slope with different intercepts means the lines are parallel and never intersect. Setting them equal confirms it: $2x + 5 = 2x - 3 \\Rightarrow 5 = -3$, a contradiction. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (Exactly one): the default for most systems, but parallel lines never cross.\n* Choice B (Exactly two): two distinct lines can intersect at most once, never twice.\n* Choice C (Infinitely many): that requires the two equations to be identical, not just parallel.\n\n**Test Day Takeaway:** Same slope, different intercepts $\\Rightarrow$ no solution. Same slope and same intercept $\\Rightarrow$ infinitely many. Different slopes $\\Rightarrow$ exactly one.",
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
    explanation: "**SAT Pattern: Classify System (Different Slopes)**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** The slopes are $3$ and $-1$ — different — so the lines cross at exactly one point, choice B.\n\n**The Full Solution:**\nStep 1: Read the slopes from $y = mx + b$: $3$ and $-1$.\nStep 2: Different slopes guarantee the lines intersect exactly once.\nStep 3: Confirm by solving: $3x + 2 = -x + 6 \\Rightarrow 4x = 4 \\Rightarrow x = 1$, then $y = 5$. The single solution is $(1, 5)$. Check: $3(1) + 2 = 5$ and $-1 + 6 = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (No solution): requires parallel lines (equal slopes).\n* Choice C (Exactly two): a pair of lines can meet at most once.\n* Choice D (Infinitely many): requires identical equations.\n\n**Test Day Takeaway:** Different slopes $\\Rightarrow$ exactly one intersection. Read the slopes straight off $y = mx + b$ and don't overthink it.",
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
    explanation: "**SAT Pattern: Parameter for Identical Equations**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Divide the first equation by $3$: $6x - 9y = 12$ becomes $2x - 3y = 4$. To match the second equation exactly, $k = 4$, choice A.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the two equations describe the same line — one is a scalar multiple of the other.\nStep 2: Divide the first equation by $3$: $\\frac{6x - 9y}{3} = \\frac{12}{3} \\Rightarrow 2x - 3y = 4$.\nStep 3: This matches the second equation, $2x - 3y = k$, only when $k = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): used the original right-hand side without dividing by $3$.\n* Choice C ($3$): used the divisor itself instead of the resulting constant.\n* Choice D ($36$): multiplied by $3$ instead of dividing.\n\n**Test Day Takeaway:** Infinitely many solutions $\\Leftrightarrow$ the equations are proportional. Scale one to match the other, and the constants must match too.",
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
      // distractor: scaled the y-coefficient the wrong way (8·2 instead of 8/2)
      { id: 'B', text: '$a = 16$, $b \\neq 24$' },
      // distractor: wrong a value
      { id: 'C', text: '$a = 8$, $b = 24$' },
      { id: 'D', text: '$a = 4$, $b \\neq 24$' }
    ],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Parameter for No Solution**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Scale the first equation by $2$: $6x + 2ay = 24$. For parallel lines (no solution), the variable coefficients must match while the constants differ: $2a = 8 \\Rightarrow a = 4$, and $b \\neq 24$, choice D.\n\n**The Full Solution:**\nStep 1: No solution means the lines are parallel — proportional coefficients on $x$ and $y$, but a constant that breaks the proportion.\nStep 2: Multiply the first equation by $2$ to align the $x$-terms: $6x + 2ay = 24$.\nStep 3: Match the $y$-coefficients with $6x + 8y = b$: $2a = 8 \\Rightarrow a = 4$.\nStep 4: For no solution, the constants must differ: $b \\neq 24$. (If $b = 24$, the equations are identical and there are infinitely many solutions.) $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($a = 4$, $b = 24$): identical equations, which gives infinitely many solutions, not none.\n* Choice B ($a = 16$, $b \\neq 24$): multiplies the $y$-coefficient by $2$ instead of dividing — with $a = 16$ the slopes differ, so the lines cross exactly once.\n* Choice C ($a = 8$, $b = 24$): wrong value of $a$; this does not make the lines parallel.\n\n**Test Day Takeaway:** No solution means same slope, different intercept. Match the coefficient ratios to force the slope, then require the constant ratio to differ.",
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
    explanation: "**SAT Pattern: System Setup (Count + Cost)**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Count gives $t + p = 15$; cost gives $4t + 6p = 74$, choice A.\n\n**The Full Solution:**\nStep 1: There are two constraints. Total packs: $t + p = 15$.\nStep 2: Total cost: tomatoes at $\\$4$ each plus peppers at $\\$6$ each equals $\\$74$, so $4t + 6p = 74$.\nStep 3: Solving gives $t = 8$, $p = 7$. Check: $4(8) + 6(7) = 32 + 42 = 74$ and $8 + 7 = 15$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: swapped the count total ($15$) and the cost total ($74$) between the two equations.\n* Choice C: assigned the wrong price to each seed type ($6t + 4p$ instead of $4t + 6p$).\n* Choice D: combines both errors.\n\n**Test Day Takeaway:** With two constraints (a count and a cost), write each as its own equation, and pair every variable with its matching rate.",
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
    explanation: "**SAT Pattern: Ticket Sales System**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Count gives $a + c = 230$; revenue gives $12a + 7c = 2210$, choice A.\n\n**The Full Solution:**\nStep 1: Two constraints. Total tickets: $a + c = 230$.\nStep 2: Total revenue: adults at $\\$12$ each plus children at $\\$7$ each equals $\\$2{,}210$, so $12a + 7c = 2210$.\nStep 3: Solving gives $a = 120$, $c = 110$. Check: $12(120) + 7(110) = 1440 + 770 = 2210$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: swapped the count total ($230$) and the revenue total ($2210$).\n* Choice C: same swap, just written in the other order.\n* Choice D: reversed the prices, charging adults $\\$7$ and children $\\$12$.\n\n**Test Day Takeaway:** Match each variable to its price. The adult ticket costs $\\$12$, so the coefficient of $a$ must be $12$ — don't reverse it.",
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
    explanation: "**SAT Pattern: Mixture System Setup**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Volume gives $x + y = 60$; acid gives $0.40x + 0.70y = 0.52 \\cdot 60 = 31.2$, choice A.\n\n**The Full Solution:**\nStep 1: Two constraints. Total volume: $x + y = 60$.\nStep 2: Total acid: $40\\%$ of $x$ plus $70\\%$ of $y$ equals $52\\%$ of the $60$-L mixture. As decimals, $0.40x + 0.70y = 0.52 \\cdot 60 = 31.2$.\nStep 3: Solving gives $x = 36$, $y = 24$. Check: $0.40(36) + 0.70(24) = 14.4 + 16.8 = 31.2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: used the raw percent values ($40$, $70$, $52$) instead of decimals.\n* Choice C: swapped the two constraints, using $60$ as the acid total and $52$ as the volume.\n* Choice D: used $52$ as the acid amount instead of computing $0.52 \\cdot 60 = 31.2$.\n\n**Test Day Takeaway:** In mixture problems, the amount of the substance equals (decimal percent) $\\times$ (total volume). Always convert percents to decimals, and scale the final concentration by the total.",
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
    explanation: "**SAT Pattern: Two-Variable Word Problem (Weight + Cost)**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Weight gives $x + y = 30$; cost gives $5x + 8y = 200$, choice A.\n\n**The Full Solution:**\nStep 1: Two constraints. Total weight: $x + y = 30$.\nStep 2: Total cost: chicken at $\\$5$/lb plus beef at $\\$8$/lb equals $\\$200$, so $5x + 8y = 200$.\nStep 3: Solving gives $x = \\frac{40}{3}$, $y = \\frac{50}{3}$. Check: $5 \\cdot \\frac{40}{3} + 8 \\cdot \\frac{50}{3} = \\frac{200}{3} + \\frac{400}{3} = \\frac{600}{3} = 200$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: swapped the weight total ($30$) and the cost total ($200$).\n* Choice C: reversed the prices, charging chicken $\\$8$/lb and beef $\\$5$/lb.\n* Choice D: combines both errors.\n\n**Test Day Takeaway:** Pair each variable with its rate. The $\\$5$/lb item gets coefficient $5$ in the cost equation; the count equation just sums the pounds.",
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
    explanation: "**SAT Pattern: Substitution Method**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The first equation already gives $y = 3x - 1$. Substitute into the second: $2x + (3x - 1) = 14 \\Rightarrow 5x = 15 \\Rightarrow x = 3$, choice B.\n\n**The Full Solution:**\nStep 1: The first equation has $y$ isolated: $y = 3x - 1$.\nStep 2: Substitute into the second equation: $2x + (3x - 1) = 14$.\nStep 3: Combine and solve: $5x - 1 = 14 \\Rightarrow 5x = 15 \\Rightarrow x = 3$.\nStep 4: Back-substitute: $y = 3(3) - 1 = 8$. Check the second equation: $2(3) + 8 = 14$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): an arithmetic slip while solving for $x$.\n* Choice C ($5$): off from both the correct $x = 3$ and $y = 8$.\n* Choice D ($8$): this is the value of $y$, not $x$ — read the question's target.\n\n**Test Day Takeaway:** Substitute the isolated variable into the OTHER equation, never back into the one it came from. Then solve, and confirm you answered for the requested variable.",
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
    explanation: "**SAT Pattern: System Equal to y on Both Sides**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Both equations already give $y$, so set the right sides equal: $x + 4 = 2x + 1 \\Rightarrow x = 3$. Then $y = 3 + 4 = 7$.\n\n**The Full Solution:**\nStep 1: Each equation has $y$ isolated, so the two expressions for $y$ must be equal: $x + 4 = 2x + 1$.\nStep 2: Solve for $x$: subtract $x$ from both sides to get $4 = x + 1$, so $x = 3$.\nStep 3: The question asks for $y$, not $x$. Substitute back: $y = 3 + 4 = 7$. Check the other equation: $2(3) + 1 = 7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): this is the value of $x$ — the solution stops one step early instead of finding $y$.\n* Choice B ($5$): an arithmetic slip when computing $y$.\n* Choice D ($9$): an arithmetic slip when computing $y$.\n\n**Test Day Takeaway:** When both equations give $y$ in terms of $x$, set the right sides equal in one move. Then read carefully whether the question wants $x$ or $y$.",
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
    explanation: "**SAT Pattern: Substitution (x in terms of y)**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** The first equation already gives $x = 2y + 5$, so drop it into the second: $3(2y + 5) - 4y = 25 \\Rightarrow 6y + 15 - 4y = 25 \\Rightarrow 2y = 10 \\Rightarrow y = 5$.\n\n**The Full Solution:**\nStep 1: The first equation isolates $x$, so substitute $x = 2y + 5$ into $3x - 4y = 25$.\nStep 2: $3(2y + 5) - 4y = 25$. Distribute the $3$ to both terms: $6y + 15 - 4y = 25$.\nStep 3: Combine and solve: $2y + 15 = 25 \\Rightarrow 2y = 10 \\Rightarrow y = 5$.\nStep 4: Check by finding $x = 2(5) + 5 = 15$, then $3(15) - 4(5) = 45 - 20 = 25$. $\\checkmark$\n\n**Common Mistakes:** Distributing the $3$ to only the $2y$ and forgetting the $+5$; reporting $x = 15$ instead of $y$.\n\n**Test Day Takeaway:** When substituting an expression, distribute the outside coefficient to every term inside the parentheses.",
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
    explanation: "**SAT Pattern: Substitution in Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Let $t$ be tacos and $b$ be burritos. Then $t + b = 9$ and $3t + 5b = 31$. Substitute $t = 9 - b$: $3(9 - b) + 5b = 31 \\Rightarrow 27 + 2b = 31 \\Rightarrow b = 2$.\n\n**The Full Solution:**\nStep 1: Translate. Count equation: $t + b = 9$. Cost equation: $3t + 5b = 31$.\nStep 2: Solve the count equation for $t$: $t = 9 - b$.\nStep 3: Substitute into the cost equation: $3(9 - b) + 5b = 31 \\Rightarrow 27 - 3b + 5b = 31 \\Rightarrow 27 + 2b = 31$.\nStep 4: Solve: $2b = 4 \\Rightarrow b = 2$. Check: $t = 7$, and $3(7) + 5(2) = 21 + 10 = 31$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): an arithmetic slip somewhere in the substitution.\n* Choice C ($4$): the value of $2b$, forgetting to divide by $2$.\n* Choice D ($7$): the number of tacos, not burritos — answers the wrong variable.\n\n**Test Day Takeaway:** In a price-and-count word problem, pin down which variable the question asks for before you report a number. \"How many burritos\" means solve for $b$.",
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
    explanation: "**SAT Pattern: Substitution with Fraction**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Substitute $y = \\frac{1}{2}x + 3$ into the second equation: $3x - 2\\left(\\frac{1}{2}x + 3\\right) = 10 \\Rightarrow 3x - x - 6 = 10 \\Rightarrow 2x = 16 \\Rightarrow x = 8$.\n\n**The Full Solution:**\nStep 1: The first equation gives $y$, so substitute it into $3x - 2y = 10$: $3x - 2\\left(\\frac{1}{2}x + 3\\right) = 10$.\nStep 2: Distribute the $-2$ to both terms. Note $-2 \\cdot \\frac{1}{2}x = -x$ and $-2 \\cdot 3 = -6$, so $3x - x - 6 = 10$.\nStep 3: Combine and solve: $2x - 6 = 10 \\Rightarrow 2x = 16 \\Rightarrow x = 8$.\nStep 4: Check: $y = \\frac{1}{2}(8) + 3 = 7$, and $3(8) - 2(7) = 24 - 14 = 10$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): distributing the $-2$ to only the $\\frac{1}{2}x$ and dropping the $-6$.\n* Choice B ($6$): an arithmetic slip while combining terms.\n* Choice D ($10$): an arithmetic slip in the final division.\n\n**Test Day Takeaway:** When distributing into parentheses that contain a fraction, multiply every term — the constant included. The $-2$ hits both $\\frac{1}{2}x$ and $3$.",
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
    explanation: "**SAT Pattern: Substitution then Sum**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~25s):** Substitute $y = 3x + 1$ into the second equation: $x + 2(3x + 1) = 23 \\Rightarrow 7x + 2 = 23 \\Rightarrow x = 3$. Then $y = 10$, so $x + y = 13$.\n\n**The Full Solution:**\nStep 1: The first equation gives $y$, so substitute into $x + 2y = 23$: $x + 2(3x + 1) = 23$.\nStep 2: Distribute the $2$ to both terms: $x + 6x + 2 = 23 \\Rightarrow 7x + 2 = 23$.\nStep 3: Solve: $7x = 21 \\Rightarrow x = 3$.\nStep 4: Find $y = 3(3) + 1 = 10$, then $x + y = 3 + 10 = 13$. Check: $3 + 2(10) = 23$. $\\checkmark$\n\n**Common Mistakes:** Reporting only $x = 3$ or only $y = 10$; distributing the $2$ to the $3x$ but not the $1$.\n\n**Test Day Takeaway:** When a question asks for $x + y$, finish both variables and combine — don't stop after solving for one.",
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
    explanation: "**SAT Pattern: Elimination by Addition**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The $y$ terms are $+y$ and $-y$, so add the equations: $2x = 14 \\Rightarrow x = 7$.\n\n**The Full Solution:**\nStep 1: The variable $y$ has opposite coefficients, so adding the equations cancels it: $(x + y) + (x - y) = 10 + 4$.\nStep 2: This gives $2x = 14$, so $x = 7$.\nStep 3: Check: $y = 10 - 7 = 3$, and $7 - 3 = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): the value of $y$, not the requested $x$.\n* Choice B ($5$): averaging the two constants instead of using elimination.\n* Choice D ($14$): the value of $2x$, forgetting to divide by $2$.\n\n**Test Day Takeaway:** When one variable appears as $+y$ and $-y$, add the equations to cancel it in a single step.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'elimination-solve',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  { id: 'bank-alg-055', domain: 'algebra', skills: ['elimination-method'], difficulty: 'easy', type: 'fill-in',
    question: 'The system of equations $x + y = 13$ and $x - y = 5$ has solution $(x, y)$. What is the value of $y$?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: Solving a System by Elimination**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~10s):** Both equations start with $x$, so subtract the second from the first: $(x + y) - (x - y) = 13 - 5 \\Rightarrow 2y = 8 \\Rightarrow y = 4$.\n\n**The Full Solution:**\nStep 1: The $x$ coefficients match, so subtraction eliminates $x$: $(x + y) - (x - y) = 13 - 5$.\nStep 2: The left side becomes $2y$ and the right side becomes $8$, so $2y = 8 \\Rightarrow y = 4$.\nStep 3: Check: $x = 13 - 4 = 9$, and $9 - 4 = 5$. $\\checkmark$\n\n**Common Mistakes:** Reporting $9$ (the value of $x$); reporting $8$ (the value of $2y$, forgetting to divide); subtracting in the wrong direction and flipping the sign.\n\n**Test Day Takeaway:** To isolate $y$ in a system with matching $x$ coefficients, subtract the equations. To isolate $x$, add them — always pick the operation that kills the variable you don't want.",
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
    explanation: "**SAT Pattern: Elimination by Subtraction**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Both equations share $3y$, so subtract the second from the first: $3x = 15 \\Rightarrow x = 5$.\n\n**The Full Solution:**\nStep 1: The $y$ coefficients are identical ($+3y$ in both), so subtraction eliminates $y$: $(5x + 3y) - (2x + 3y) = 33 - 18$.\nStep 2: This gives $3x = 15$, so $x = 5$.\nStep 3: Check by finding $y$: $5(5) + 3y = 33 \\Rightarrow 3y = 8 \\Rightarrow y = \\frac{8}{3}$, and $2(5) + 3 \\cdot \\frac{8}{3} = 10 + 8 = 18$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): close to the $y$ value, not the requested $x$.\n* Choice C ($6$): an arithmetic slip during subtraction.\n* Choice D ($15$): the value of $3x$, forgetting to divide by $3$.\n\n**Test Day Takeaway:** When both equations carry the same coefficient on one variable, subtract to eliminate it — then confirm you've solved for the variable the question asks about.",
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
    explanation: "**SAT Pattern: Elimination (Subtract to Cancel x)**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Both equations open with $4x$, so subtract the second from the first: $(5y) - (-3y) = 8y$ and $47 - 7 = 40$, giving $8y = 40 \\Rightarrow y = 5$.\n\n**The Full Solution:**\nStep 1: The $x$ coefficients are both $4$, so subtraction cancels $x$: $(4x + 5y) - (4x - 3y) = 47 - 7$.\nStep 2: Watch the signs on $y$: $5y - (-3y) = 8y$, and $47 - 7 = 40$, so $8y = 40$.\nStep 3: Solve: $y = 5$.\nStep 4: Check: $4x + 5(5) = 47 \\Rightarrow 4x = 22 \\Rightarrow x = 5.5$, and $4(5.5) - 3(5) = 22 - 15 = 7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): a slip near the $x$ value, not the requested $y$.\n* Choice C ($7$): treating $5y - (-3y)$ as $2y$ and getting $2y = 40$.\n* Choice D ($8$): an arithmetic slip in the subtraction.\n\n**Test Day Takeaway:** Subtracting a negative flips its sign: $5y - (-3y) = 8y$, not $2y$. Track the sign carefully when one equation has a negative coefficient.",
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
    explanation: "**SAT Pattern: Elimination with Scaling**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Multiply the second equation by $2$ to get $10x - 4y = 28$, so the $y$ terms are $+4y$ and $-4y$. Add to the first: $13x = 52 \\Rightarrow x = 4$, then $4y = 12 \\Rightarrow y = 3$, so $x + y = 7$.\n\n**The Full Solution:**\nStep 1: The $y$ coefficients are $+4$ and $-2$. Multiply the second equation by $2$ so its $y$ coefficient becomes $-4$, the opposite of $+4$: $10x - 4y = 28$.\nStep 2: Add to the first equation: $(3x + 4y) + (10x - 4y) = 24 + 28 \\Rightarrow 13x = 52 \\Rightarrow x = 4$.\nStep 3: Substitute back: $3(4) + 4y = 24 \\Rightarrow 4y = 12 \\Rightarrow y = 3$.\nStep 4: Combine: $x + y = 4 + 3 = 7$. Check the second equation: $5(4) - 2(3) = 20 - 6 = 14$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): a setup or scaling slip that lands on the wrong pair of values.\n* Choice B ($6$): an arithmetic slip while back-substituting for $y$.\n* Choice D ($8$): an arithmetic slip when adding $x + y$.\n\n**Test Day Takeaway:** When no coefficients match, scale one equation so a variable's coefficients become opposites, then add. Sometimes you must scale both equations.",
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
    explanation: "**SAT Pattern: System Word Problem (Mixed Prices)**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Let $g$ be goldfish and $t$ be tropical fish. Then $g + t = 50$ and $2g + 7t = 200$. Substitute $g = 50 - t$: $2(50 - t) + 7t = 200 \\Rightarrow 100 + 5t = 200 \\Rightarrow t = 20$.\n\n**The Full Solution:**\nStep 1: Translate. Count equation: $g + t = 50$. Revenue equation: $2g + 7t = 200$.\nStep 2: Solve the count equation for $g$: $g = 50 - t$.\nStep 3: Substitute into the revenue equation: $2(50 - t) + 7t = 200 \\Rightarrow 100 - 2t + 7t = 200 \\Rightarrow 100 + 5t = 200$.\nStep 4: Solve: $5t = 100 \\Rightarrow t = 20$. Check: $g = 30$, and $2(30) + 7(20) = 60 + 140 = 200$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): an arithmetic slip in the substitution.\n* Choice C ($25$): an arithmetic slip in the substitution.\n* Choice D ($30$): the number of goldfish, not tropical fish — answers the wrong variable.\n\n**Test Day Takeaway:** In a mixed-price system, confirm which count the question wants. Tropical fish is $t$, not $g$.",
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
    explanation: "**SAT Pattern: Intersection as Solution**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** The solution to a system is the point where the graphs meet, written as an ordered pair: $(3, 5)$.\n\n**The Full Solution:**\nStep 1: The solution to a system is every point that satisfies both equations at once. For two lines, that's the single point where they cross.\nStep 2: The lines intersect at $(3, 5)$, so that ordered pair is the solution — both $x = 3$ and $y = 5$ together.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = 3$ only): gives just the $x$-coordinate, dropping half the solution.\n* Choice B ($y = 5$ only): gives just the $y$-coordinate, dropping half the solution.\n* Choice D (No solution): \"no solution\" describes parallel lines that never meet — but these lines do intersect.\n\n**Test Day Takeaway:** A solution to a two-variable system is an ordered pair $(x, y)$. Lines that cross have one solution; parallel lines have none; identical lines have infinitely many.",
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
    explanation: "**SAT Pattern: Classify System (Parallel Lines)**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** A solution to a system is a point where the graphs meet. Lines that never meet share no point, so the system has no solution.\n\n**The Full Solution:**\nStep 1: The solutions of a system are the intersection points of its graphs.\nStep 2: If two lines never meet, they have no intersection point, so there is nothing that satisfies both equations at once.\nStep 3: Two distinct lines that never meet are parallel: same slope, different $y$-intercept. That confirms no solution.\n\n**Why the wrong answers are tempting:**\n* Choice A (one solution): that needs the lines to cross at exactly one point — but they never meet.\n* Choice B (infinitely many solutions): that needs the two equations to be the same line, so every point is shared.\n* Choice D (two solutions): two straight lines can cross at most once, so a linear system can never have exactly two solutions.\n\n**Test Day Takeaway:** Parallel lines never meet, so the system has no solution. Same line means infinitely many; lines crossing once means exactly one.",
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
    explanation: "**SAT Pattern: Find Intersection by Setting Equal**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Both equations equal $y$, so set them equal: $x + 1 = -2x + 7 \\Rightarrow 3x = 6 \\Rightarrow x = 2$, then $y = 2 + 1 = 3$, giving $(2, 3)$.\n\n**The Full Solution:**\nStep 1: At the intersection, both lines share the same $y$, so set the right sides equal: $x + 1 = -2x + 7$.\nStep 2: Collect $x$: $3x = 6$, so $x = 2$.\nStep 3: Substitute back into the first line: $y = 2 + 1 = 3$. The intersection is $(2, 3)$.\nStep 4: Check in the second line: $y = -2(2) + 7 = 3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B $(3, 1)$: swaps the coordinates of the answer.\n* Choice C $(1, 5)$: an unverified guess that fails both equations once checked.\n* Choice D $(4, 5)$: an arithmetic slip when solving for $x$.\n\n**Test Day Takeaway:** To intersect two lines in $y = mx + b$ form, set the right sides equal, solve for $x$, then plug back. Confirm with the other equation.",
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
    explanation: "**SAT Pattern: Absolute Value Intersection**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $|x - 2| = 4$ splits into two cases, $x - 2 = 4$ and $x - 2 = -4$, giving $x = 6$ and $x = -2$ — two intersection points.\n\n**The Full Solution:**\nStep 1: Set the two graphs equal: $|x - 2| = 4$.\nStep 2: An absolute value equal to a positive number has two cases: $x - 2 = 4$ or $x - 2 = -4$.\nStep 3: Solve each: $x = 6$ or $x = -2$. The intersection points are $(6, 4)$ and $(-2, 4)$.\nStep 4: Picture it: $y = |x - 2|$ is a V, and the horizontal line $y = 4$ slices through both arms. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (0): this happens only when the horizontal line sits below the vertex and misses the V; here $4 > 0$, so it crosses.\n* Choice B (1): catches only the case $x - 2 = 4$ and forgets the negative case.\n* Choice D (3): a V meets a horizontal line in at most two points, never three.\n\n**Test Day Takeaway:** An absolute value equal to a positive number always yields two cases. Solve both — the negative branch is the one students drop.",
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
    explanation: "**SAT Pattern: Identify Identical-Lines System**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Rewrite C's second equation: $6x - 2y = -2 \\Rightarrow y = 3x + 1$, identical to the first equation — so it has infinitely many solutions.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the two equations are the same line.\nStep 2: Check C's second equation: $6x - 2y = -2 \\Rightarrow -2y = -6x - 2 \\Rightarrow y = 3x + 1$, exactly the first equation.\nStep 3: Since both equations describe $y = 3x + 1$, every point on that line satisfies both. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: $y = 3x + 1$ and $y = 3x + 5$ share a slope but differ in intercept — parallel, so no solution, not infinite.\n* Choice B: slopes $3$ and $-3$ differ, so the lines cross once — one solution.\n* Choice D: slopes $3$ and $1$ differ, so again one solution.\n\n**Test Day Takeaway:** Infinitely many solutions means one identical line. Convert both equations to $y = mx + b$ and confirm the slope and intercept match.",
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
    explanation: "**SAT Pattern: Parameter for Proportional Equations**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Simplify equation 2 to $x + 2y = 5$, then scale by $3$ to match equation 1's constant: $3x + 6y = 15$. The coefficient of $x$ is $3$, so $a = 3$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the two equations are proportional — one is a multiple of the other.\nStep 2: Divide equation 2 ($4x + 8y = 20$) by $4$: $x + 2y = 5$.\nStep 3: To match equation 1's right side of $15$, multiply by $3$: $3x + 6y = 15$.\nStep 4: Compare with $ax + 6y = 15$. The $y$-coefficient ($6$) and constant ($15$) already match, and $a = 3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (2): the $y$-coefficient of the simplified equation, not the $x$-coefficient asked for.\n* Choice C (4): copies the $x$-coefficient straight from equation 2 without scaling.\n* Choice D (5): grabs the constant $5$ from the simplified equation.\n\n**Test Day Takeaway:** For two equations to be the same line, all three ratios — $x$, $y$, and constant — must be equal. Build the proportional copy, then read off the parameter.",
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
    explanation: "**SAT Pattern: Find c for Infinite Solutions**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Scale equation 1 by $-4$ (since $-2 \\div \\frac{1}{2} = -4$): $-2x + 4ky = -12$. Matching $-2x + 12y = c$ gives $4k = 12$, so $k = 3$ and $c = -12$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means equation 2 is a scalar multiple of equation 1.\nStep 2: Find the multiplier from the $x$-coefficients: $-2 \\div \\frac{1}{2} = -4$.\nStep 3: Multiply every term of equation 1 by $-4$: $-4 \\cdot \\frac{1}{2}x - 4 \\cdot (-k)y = -4 \\cdot 3$, which is $-2x + 4ky = -12$.\nStep 4: Match against $-2x + 12y = c$: the $y$-terms give $4k = 12$, so $k = 3$, and the constant gives $c = -12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): drops the negative sign on the scaled constant.\n* Choice C ($-6$): an arithmetic slip, as if multiplying $3$ by $-2$ instead of $-4$.\n* Choice D ($6$): same slip as C but with the sign also lost.\n\n**Test Day Takeaway:** Find the scaling factor from the variable coefficients, then apply it to every term — including the constant — to read off the unknown.",
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
    explanation: "**SAT Pattern: Find Constant for Identical Equations**\n\n**The correct answer is $60$.**\n\n**The Fast Way (~10s):** Equation 2 is $3$ times equation 1 ($2 \\to 6$, $5 \\to 15$), so the constant must also triple: $3 \\cdot 20 = 60$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means equation 2 is a multiple of equation 1.\nStep 2: The $x$-coefficient goes from $2$ to $6$, a factor of $3$; the $y$-coefficient confirms it ($5 \\to 15$).\nStep 3: Apply the same factor to the constant: $3 \\cdot 20 = 60$, so $k = 60$. $\\checkmark$\n\n**Common Mistakes:** Reporting $20$ by forgetting to scale the constant; using only the $x$-ratio without confirming the $y$-ratio; slipping on $3 \\cdot 20$.\n\n**Test Day Takeaway:** When the variable coefficients scale by a factor, the constant must scale by that same factor for the lines to be identical.",
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
    explanation: "**SAT Pattern: Basic Function Notation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $f(0) = 3(0) + 8 = 8$.\n\n**The Full Solution:**\nStep 1: $f(0)$ means substitute $x = 0$ into the rule.\nStep 2: $f(0) = 3(0) + 8 = 0 + 8 = 8$.\nStep 3: This is the $y$-intercept of $y = 3x + 8$ — the value where the line crosses the $y$-axis. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (0): assumes $f(0)$ is always $0$; that holds only when the function has no constant term.\n* Choice B (3): reports the slope coefficient instead of evaluating.\n* Choice D (11): adds $3 + 8$ as if $x = 1$.\n\n**Test Day Takeaway:** To find $f(0)$, substitute $0$ for the variable. For a linear function, $f(0)$ is just the constant term.",
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
    explanation: "**SAT Pattern: Find x-intercept (Zero of Function)**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~10s):** $-5t + 40 = 0 \\Rightarrow 5t = 40 \\Rightarrow t = 8$.\n\n**The Full Solution:**\nStep 1: Set the output to zero: $-5t + 40 = 0$.\nStep 2: Move the constant: $-5t = -40$.\nStep 3: Divide by $-5$: $t = 8$.\nStep 4: Check: $h(8) = -5(8) + 40 = -40 + 40 = 0$. $\\checkmark$\n\n**Common Mistakes:** Dividing $40$ by $-5$ to get $-8$ (sign error); reporting $40$, the constant; computing $40 - 5 = 35$ instead of dividing.\n\n**Test Day Takeaway:** The value that makes the function zero is its $x$-intercept. Set the rule equal to $0$ and isolate the variable, watching the sign on division.",
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
    explanation: "**SAT Pattern: Break-Even from Profit Function**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Break-even means $P = 0$: $15n - 2400 = 0 \\Rightarrow n = \\frac{2400}{15} = 160$.\n\n**The Full Solution:**\nStep 1: Break even means zero profit, so set $P(n) = 0$: $15n - 2400 = 0$.\nStep 2: Add $2400$: $15n = 2400$.\nStep 3: Divide by $15$: $n = 160$.\nStep 4: Check: $P(160) = 15(160) - 2400 = 2400 - 2400 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (140): an arithmetic slip on $\\frac{2400}{15}$.\n* Choice B (150): another division slip, landing just short of $160$.\n* Choice D (240): divides $2400$ by $10$ instead of by $15$.\n\n**Test Day Takeaway:** Break-even is the point of zero profit. Set $P = 0$ and solve for the input.",
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
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Set $7 - 2k = -3 \\Rightarrow -2k = -10 \\Rightarrow k = 5$.\n\n**The Full Solution:**\nStep 1: $f(k) = -3$ means $7 - 2k = -3$.\nStep 2: Subtract $7$: $-2k = -10$.\nStep 3: Divide by $-2$: $k = 5$.\nStep 4: Check: $f(5) = 7 - 2(5) = 7 - 10 = -3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (2): solves $7 - 2k = 3$ using a positive $3$ instead of $-3$.\n* Choice C ($-5$): flips the sign on the final step.\n* Choice D (10): an arithmetic slip, doubling instead of halving.\n\n**Test Day Takeaway:** When given an output, set the function expression equal to that value and isolate the input. Watch signs as terms cross the equals sign.",
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
    explanation: "**SAT Pattern: Slope from Function Difference**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Slope $= \\frac{f(1) - f(-1)}{1 - (-1)} = \\frac{12}{2} = 6$.\n\n**The Full Solution:**\nStep 1: Slope between two inputs is the change in output over the change in input: $m = \\frac{f(x_2) - f(x_1)}{x_2 - x_1}$.\nStep 2: Here $x_1 = -1$ and $x_2 = 1$, so the run is $1 - (-1) = 2$.\nStep 3: $m = \\frac{f(1) - f(-1)}{2} = \\frac{12}{2} = 6$.\nStep 4: Confirm with $f(x) = mx + b$: $f(1) - f(-1) = (m + b) - (-m + b) = 2m = 12$, so $m = 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (4): divides $12$ by $3$, using the wrong run.\n* Choice C (12): forgets to divide by the run of $2$ and reports the raw difference.\n* Choice D (Cannot be determined): the slope is fully determined — the $b$ terms cancel in the difference.\n\n**Test Day Takeaway:** Slope is the $y$-difference over the $x$-difference. For symmetric inputs $\\pm a$, the run is $2a$, not $1$.",
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
    explanation: "**SAT Pattern: Domain (Denominator Restriction)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** A fraction is undefined where its denominator is zero. Set $x - 4 = 0$ to get $x = 4$, then exclude it: all real numbers except $x = 4$.\n\n**The Full Solution:**\nStep 1: The only thing that can break $f(x) = \\frac{1}{x - 4}$ is division by zero.\nStep 2: Solve $x - 4 = 0 \\Rightarrow x = 4$. That single value is forbidden.\nStep 3: Every other real number gives a defined output, so the domain is all real numbers except $x = 4$.\n\n**Why the wrong answers are tempting:**\n* Choice A: ignores the denominator entirely — but $x = 4$ really does break the function.\n* Choice C: flips the sign of the excluded value; $(x - 4)$ excludes $+4$, not $-4$.\n* Choice D: invents an inequality restriction; nothing here forces $x > 4$.\n\n**Test Day Takeaway:** Domain restrictions come from three places — zero denominators, negative values under even roots, and nonpositive logs. For a fraction, set the denominator equal to zero and exclude that value.",
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
    explanation: "**SAT Pattern: Find Undefined Point (Denominator Zero)**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** Set the denominator to zero: $x + 7 = 0 \\Rightarrow x = -7$.\n\n**The Full Solution:**\nStep 1: $f(x) = \\frac{5}{x + 7}$ is undefined exactly where the denominator equals zero.\nStep 2: Solve $x + 7 = 0 \\Rightarrow x = -7$.\nStep 3: Check: $f(-7) = \\frac{5}{0}$, which is undefined.\n\n**Why the wrong answers are tempting:**\n* Choice A: $x = 0$ gives $f(0) = \\frac{5}{7}$, a perfectly defined value.\n* Choice B: uses the numerator $5$ as the restriction, but the numerator never makes a fraction undefined.\n* Choice C: forgets the sign flip; $x = 7$ gives $\\frac{5}{14}$, which is fine.\n\n**Test Day Takeaway:** The excluded value has the OPPOSITE sign of the constant in the denominator: $(x + 7)$ excludes $x = -7$; $(x - 7)$ excludes $x = +7$.",
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
    explanation: "**SAT Pattern: Domain with Quadratic Denominator**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Solve $x^2 - 9 = 0 \\Rightarrow x = \\pm 3$. Exclude both values.\n\n**The Full Solution:**\nStep 1: $g(x) = \\frac{x + 2}{x^2 - 9}$ is undefined where the denominator is zero.\nStep 2: Factor: $x^2 - 9 = (x - 3)(x + 3)$.\nStep 3: This is zero at $x = 3$ and $x = -3$, so exclude both. The domain is all reals except $x = 3$ and $x = -3$.\n\n**Why the wrong answers are tempting:**\n* Choice A: reads the constant $9$ as the excluded value instead of solving $x^2 = 9$.\n* Choice B: stops after the positive root and misses $x = -3$.\n* Choice D: uses the numerator root $x = -2$, but the numerator never restricts the domain.\n\n**Test Day Takeaway:** $x^2 = 9$ has TWO solutions, $\\pm 3$. A quadratic denominator usually produces more than one excluded value — factor it fully.",
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
    explanation: "**SAT Pattern: Domain with Radical and Denominator**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Two rules stack: the radicand needs $x + 5 \\ge 0$ (so $x \\ge -5$) and the denominator needs $x - 2 \\neq 0$ (so $x \\neq 2$). Combine with AND.\n\n**The Full Solution:**\nStep 1: A square root requires a nonnegative input: $x + 5 \\ge 0 \\Rightarrow x \\ge -5$.\nStep 2: A denominator cannot be zero: $x - 2 \\neq 0 \\Rightarrow x \\neq 2$.\nStep 3: Both must hold, so the domain is $x \\ge -5$ with $x \\neq 2$.\nCheck the boundary: at $x = -5$, $f(-5) = \\frac{\\sqrt{0}}{-7} = 0$, which is defined, so $-5$ stays in.\n\n**Why the wrong answers are tempting:**\n* Choice B: uses $>$ instead of $\\ge$ and wrongly drops $x = -5$, where $f$ equals $0$. It also ignores the $x \\neq 2$ hole.\n* Choice C: gets the radical right but forgets to exclude $x = 2$.\n* Choice D: keeps only $x > 2$, throwing away the entire valid range from $-5$ up to $2$.\n\n**Test Day Takeaway:** Combine ALL restrictions with AND: even roots need $\\ge 0$ inside, and denominators need $\\neq 0$. Watch the boundary — $\\sqrt{0}$ is allowed.",
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
    explanation: "**SAT Pattern: Function Composition (Inner First)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Work inside out: $g(2) = 4 - 3 = 1$, then $f(1) = 2(1) + 1 = 3$.\n\n**The Full Solution:**\nStep 1: $f(g(2))$ means apply $g$ first. $g(2) = 2^2 - 3 = 4 - 3 = 1$.\nStep 2: Feed that into $f$: $f(1) = 2(1) + 1 = 3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): stops at the inner step $g(2) = 1$ and forgets to apply $f$.\n* Choice C ($7$): mishandles the inner step as $g(2) = 3$ (subtracting wrong), then $f(3) = 7$.\n* Choice D ($9$): drops the $-3$ in $g$, so $g(2) = 4$, then $f(4) = 9$.\n\n**Test Day Takeaway:** $f(g(x))$ applies $g$ FIRST, then $f$. Always evaluate composition from the inside out.",
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
    explanation: "**SAT Pattern: Composition with Specific Input**\n\n**The correct answer is $22$.**\n\n**The Fast Way (~10s):** Inside out: $f(5) = 11$, then $g(11) = 22$.\n\n**The Full Solution:**\nStep 1: $g(f(5))$ applies $f$ first. $f(5) = 5 + 6 = 11$.\nStep 2: Apply $g$ to the result: $g(11) = 2(11) = 22$.\n\n**Common Mistakes:** Reporting $11$ (only the inner step); reversing the order to compute $f(g(5)) = f(10) = 16$; or doubling $5$ first as $g(5) = 10$ and getting $16$.\n\n**Test Day Takeaway:** In $g(f(5))$, the INNER function $f$ runs first on $5$, then the OUTER function $g$ runs on that output last.",
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
    explanation: "**SAT Pattern: Function Composition (Expression)**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Substitute $f(x) = x + 4$ into $g$: $g(x + 4) = 3(x + 4) - 2 = 3x + 12 - 2 = 3x + 10$.\n\n**The Full Solution:**\nStep 1: $g(f(x))$ means replace the input of $g$ with $f(x) = x + 4$.\nStep 2: $g(x + 4) = 3(x + 4) - 2$.\nStep 3: Distribute and combine: $3x + 12 - 2 = 3x + 10$.\nCheck at $x = 1$: $f(1) = 5$ and $g(5) = 13$; the formula gives $3(1) + 10 = 13$.\n\n**Why the wrong answers are tempting:**\n* Choice B: forgets to distribute the $3$ across the $+4$, getting $3x + 4 - 2 = 3x + 2$.\n* Choice C: adds $2$ at the end instead of subtracting, landing on $3x + 14$.\n* Choice D: distributes the $3$ but only adds $4$ to the constant ($12 - 2$ mishandled as $6$), landing on $3x + 6$.\n\n**Test Day Takeaway:** For composition, substitute the whole inner expression, then DISTRIBUTE the outer coefficient to every term before combining constants.",
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
    explanation: "**SAT Pattern: Composition of Inverse Functions**\n\n**The correct answer is $17$.**\n\n**The Fast Way (~10s):** $g$ is the inverse of $f$, so $f(g(x)) = x$. For input $17$, the output is $17$.\n\n**The Full Solution:**\nStep 1: $g(17) = \\frac{17 + 3}{5} = \\frac{20}{5} = 4$.\nStep 2: $f(4) = 5(4) - 3 = 20 - 3 = 17$.\nWhy it works: $f(g(x)) = 5 \\cdot \\frac{x + 3}{5} - 3 = (x + 3) - 3 = x$, so composing inverses returns the input unchanged.\n\n**Common Mistakes:** Stopping at $g(17) = 4$; computing $f(17)$ instead of $f(g(17))$; or slipping in the fraction arithmetic at $\\frac{20}{5}$.\n\n**Test Day Takeaway:** When $f$ and $g$ are inverses, $f(g(x)) = g(f(x)) = x$. Spot the inverse pair and the answer is just the input.",
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
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** A shift right by $h$ replaces $x$ with $x - h$. Right $3$ gives $f(x - 3)$.\n\n**The Full Solution:**\nStep 1: Changes inside the parentheses move the graph horizontally, and they act OPPOSITE to the sign.\nStep 2: $f(x - h)$ shifts RIGHT by $h$; $f(x + h)$ shifts LEFT by $h$.\nStep 3: For a right shift of $3$, use $f(x - 3)$.\nCheck: the original point at $x = 0$ now appears at $x = 3$, since $f(3 - 3) = f(0)$ — exactly a shift right by $3$.\n\n**Why the wrong answers are tempting:**\n* Choice A: $f(x) + 3$ is a vertical shift up, not horizontal.\n* Choice B: $f(x) - 3$ is a vertical shift down.\n* Choice C: $f(x + 3)$ shifts LEFT — the opposite direction.\n\n**Test Day Takeaway:** Inside the parentheses means a HORIZONTAL shift in the OPPOSITE direction of the sign; outside means a VERTICAL shift in the SAME direction.",
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
    explanation: "**SAT Pattern: Reflection over Axis**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Reflecting over the $x$-axis flips every output's sign, giving $-f(x)$.\n\n**The Full Solution:**\nStep 1: A reflection over the $x$-axis sends each $y$-value to its negative: $y \\to -y$.\nStep 2: Negating the output of $f$ gives the new function $-f(x)$.\nCheck: if $f(2) = 5$, then the reflected value is $-f(2) = -5$, so $(2, 5) \\to (2, -5)$.\n\n**Why the wrong answers are tempting:**\n* Choice A: $f(-x)$ negates the INPUT — that is a reflection over the $y$-axis, the wrong axis.\n* Choice C: $f(x) - 1$ is a vertical shift, not a reflection.\n* Choice D: $|f(x)|$ folds negative outputs up to positive — it does not flip the whole graph.\n\n**Test Day Takeaway:** Reflect over the $x$-axis with $-f(x)$ (negate the output); reflect over the $y$-axis with $f(-x)$ (negate the input).",
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
    explanation: "**SAT Pattern: Vertex from Transformations**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Vertex form $(x - h)^2 + k$ has vertex $(h, k)$. Here $h = 5$, $k = 3$, so the vertex is $(5, 3)$.\n\n**The Full Solution:**\nStep 1: $f(x) = x^2$ has its vertex at the origin $(0, 0)$.\nStep 2: $(x - 5)^2$ shifts the graph right $5$, and $+ 3$ shifts it up $3$.\nStep 3: The vertex moves to $(0 + 5, 0 + 3) = (5, 3)$.\nCheck: $g(5) = (5 - 5)^2 + 3 = 3$ is the minimum, confirming the vertex at $(5, 3)$.\n\n**Why the wrong answers are tempting:**\n* Choice B: misreads $(x - 5)$ as $h = -5$, but the sign flips.\n* Choice C: flips $k$ to $-3$; the $+3$ shifts up, not down.\n* Choice D: flips both coordinates' signs.\n\n**Test Day Takeaway:** In vertex form $a(x - h)^2 + k$, the vertex is $(h, k)$, and the sign inside the parentheses is OPPOSITE the value of $h$.",
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
    explanation: "**SAT Pattern: y-Intercept After Vertical Shift**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $g(x) = (2x - 1) + 5 = 2x + 4$, so the $y$-intercept is $4$.\n\n**The Full Solution:**\nStep 1: Substitute $f(x) = 2x - 1$ into $g(x) = f(x) + 5$: $g(x) = (2x - 1) + 5 = 2x + 4$.\nStep 2: The $y$-intercept is $g(0) = 2(0) + 4 = 4$.\nCheck: $f(0) = -1$, and shifting up $5$ gives $g(0) = -1 + 5 = 4$.\n\n**Why the wrong answers are tempting:**\n* Choice B: adds $5$ to zero, ignoring that $f$ already has a $y$-intercept of $-1$.\n* Choice C: an arithmetic slip combining $-1$ and $+5$.\n* Choice D: reports $f$'s intercept of $-1$ instead of $g$'s.\n\n**Test Day Takeaway:** A vertical shift adds the same amount to every $y$-value, including the intercept: original $-1$ shifted by $+5$ gives $4$.",
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
    explanation: "**SAT Pattern: Identify Multiple Transformations**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Read $g(x) = -2|x - 1| + 6$ piece by piece: $(x-1)$ shifts right $1$, the $2$ stretches vertically by $2$, the leading $-$ reflects over the $x$-axis, and $+6$ shifts up $6$. That is exactly Choice A.\n\n**The Full Solution:**\nStep 1: The $(x - 1)$ inside the bars is a horizontal shift. Inside changes act opposite to their sign, so this moves the graph RIGHT by $1$.\nStep 2: The coefficient $|-2| = 2 > 1$ stretches the graph vertically by a factor of $2$.\nStep 3: The coefficient is negative, so the graph reflects over the $x$-axis.\nStep 4: The $+6$ outside is a vertical shift UP by $6$.\nStep 5: Check the vertex. $f(x)=|x|$ has its vertex at $(0,0)$; $g$ has its vertex where $x-1=0$, i.e. $x=1$, giving $g(1)=-2(0)+6=6$. Vertex $(1,6)$ confirms right $1$, up $6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: shifts LEFT instead of right and drops the reflection — misreads $(x-1)$ and ignores the negative sign.\n* Choice C: calls the $2$ a compression and reflects over the wrong axis ($y$-axis instead of $x$-axis).\n* Choice D: shifts DOWN $6$ instead of up — wrong sign on the outside constant.\n\n**Test Day Takeaway:** Decompose transformations in order: inside-the-bars shift (horizontal, opposite sign), then the coefficient (stretch if $>1$, reflection if negative), then the outside constant (vertical, same sign).",
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
    explanation: "**SAT Pattern: Line Through Origin**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Through the origin means $b=0$, so $y=mx$. The slope is $\\frac{20}{5}=4$, giving $y=4x$.\n\n**The Full Solution:**\nStep 1: A line through the origin has $y$-intercept $0$, so its equation is $y=mx$.\nStep 2: Slope from $(0,0)$ to $(5,20)$: $m=\\frac{20-0}{5-0}=\\frac{20}{5}=4$.\nStep 3: The equation is $y=4x$. Check: at $x=5$, $y=4(5)=20$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: uses the point's $x$-value ($5$) as the slope.\n* Choice C: uses the point's $y$-value ($20$) as the slope.\n* Choice D: adds a nonzero intercept ($+15$), so the line would not pass through the origin.\n\n**Test Day Takeaway:** \"Through the origin\" forces $y=mx$ with no constant term. Find the slope as $\\frac{\\text{rise}}{\\text{run}}$ between the two given points.",
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
    explanation: "**SAT Pattern: Linear Function from Two Points (y-Intercept Given)**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The point $(0,-2)$ hands you $b=-2$. Slope: $\\frac{10-(-2)}{4-0}=\\frac{12}{4}=3$. So $f(x)=3x-2$.\n\n**The Full Solution:**\nStep 1: Because $x=0$ at the point $(0,-2)$, that $y$-value IS the $y$-intercept: $b=-2$.\nStep 2: Slope between the points: $m=\\frac{10-(-2)}{4-0}=\\frac{12}{4}=3$.\nStep 3: The function is $f(x)=3x-2$. Check: $f(4)=3(4)-2=10$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: uses slope $2$ instead of $3$ — miscomputes the rise.\n* Choice C: flips the intercept sign to $+2$.\n* Choice D: uses the run ($4$) as the slope.\n\n**Test Day Takeaway:** When one point sits on the $y$-axis ($x=0$), its $y$-value is the intercept directly — no algebra needed for $b$.",
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
    explanation: "**SAT Pattern: Linear Extrapolation**\n\n**The correct answer is $38$.**\n\n**The Fast Way (~20s):** Slope $=\\frac{26-10}{7-3}=4$. From $f(7)=26$, step $3$ more units: $26+4(3)=38$.\n\n**The Full Solution:**\nStep 1: Slope from the two given values: $m=\\frac{26-10}{7-3}=\\frac{16}{4}=4$.\nStep 2: From the known point $(7,26)$, advance to $x=10$ — that is $3$ units in $x$, so $y$ rises by $4 \\times 3 = 12$.\nStep 3: $f(10)=26+12=38$. Check by building the line: $10=4(3)+b \\Rightarrow b=-2$, so $f(10)=4(10)-2=38$. $\\checkmark$\n\n**Common Mistakes:** Reporting $40$ by forgetting the intercept and computing $4(10)$ alone; reporting $30$ by advancing only $1$ unit ($26+4$) instead of $3$.\n\n**Test Day Takeaway:** For linear extrapolation, find the slope first, then either build the full equation or step from a known point by slope $\\times$ (number of units).",
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
    explanation: "**SAT Pattern: Find y-Intercept from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Slope $=\\frac{23-11}{5-2}=4$. To reach $x=0$ from $x=2$, step back $2$ units: $f(0)=11-4(2)=3$.\n\n**The Full Solution:**\nStep 1: Slope: $m=\\frac{23-11}{5-2}=\\frac{12}{3}=4$.\nStep 2: Use $f(2)=11$ to solve for $b$: $11=4(2)+b \\Rightarrow b=3$.\nStep 3: $f(0)=b=3$. Check: $f(5)=4(5)+3=23$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): arithmetic slip when stepping back to $x=0$.\n* Choice C ($5$): confuses the answer with a value near the slope ($4$).\n* Choice D ($7$): another arithmetic slip on the intercept.\n\n**Test Day Takeaway:** $f(0)$ is the $y$-intercept. Find the slope, then either solve $b$ from a known point or subtract slope $\\times$ (steps back to $x=0$).",
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
    explanation: "**SAT Pattern: Linear Extrapolation Back to t = 0**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Slope $=\\frac{440-260}{10-4}=30$ members/month. Step back $4$ months from month $4$: $260-30(4)=140$.\n\n**The Full Solution:**\nStep 1: Slope (growth rate): $m=\\frac{440-260}{10-4}=\\frac{180}{6}=30$ members per month.\nStep 2: From month $4$ back to month $0$ is $4$ months, so subtract $30 \\times 4 = 120$: $260-120=140$.\nStep 3: Check forward: $140+30(4)=260$ and $140+30(10)=440$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($120$): steps back $5$ months instead of $4$.\n* Choice C ($180$): arithmetic slip on the rate or the step count.\n* Choice D ($200$): another miscount of the periods back to month $0$.\n\n**Test Day Takeaway:** To extrapolate back to $t=0$, subtract slope $\\times$ (number of periods to zero) from a known value. Count the periods carefully.",
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
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Five extra muffins at $\\$3$ each add $\\$15$. The packaging fee is unchanged, so the new total is $\\$34 + \\$15 = \\$49$.\n\n**The Full Solution:**\nStep 1: The cost equation is $3m + 4 = 34$, so $3m = 30$ and $m = 10$ muffins.\nStep 2: For $m + 5 = 15$ muffins with one packaging fee: total $= 3(15) + 4 = 45 + 4 = \\$49$.\nStep 3: Shortcut without solving for $m$: adding $5$ muffins adds $5 \\cdot \\$3 = \\$15$; the fee does not change, so $\\$34 + \\$15 = \\$49$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$39$): adds the count $5$ as dollars instead of $5 \\cdot \\$3 = \\$15$.\n* Choice C ($\\$53$): adds a second packaging fee as if a new order is placed ($\\$49 + \\$4$).\n* Choice D ($\\$54$): uses the fee $\\$4$ as the per-muffin price: $\\$34 + 5 \\cdot \\$4$.\n\n**Test Day Takeaway:** Linear cost $=$ (rate $\\times$ quantity) $+$ fixed fee. Adding items changes only the rate-times-quantity piece — the fixed fee stays put.",
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
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Four extra shows at $\\$2$ each add $4 \\cdot \\$2 = \\$8$. The subscription is unchanged, so the new bill is $\\$27 + \\$8 = \\$35$.\n\n**The Full Solution:**\nStep 1: The bill equation is $2s + 9 = 27$, so $2s = 18$ and $s = 9$ shows.\nStep 2: For $s + 4 = 13$ shows with one subscription: bill $= 2(13) + 9 = 26 + 9 = \\$35$.\nStep 3: Shortcut without solving for $s$: $4$ more shows add $4 \\cdot \\$2 = \\$8$; the $\\$9$ subscription does not change, so $\\$27 + \\$8 = \\$35$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$31$): adds the count $4$ as dollars instead of $4 \\cdot \\$2 = \\$8$.\n* Choice C ($\\$36$): adds a second monthly subscription on top of the show charges.\n* Choice D ($\\$63$): uses the $\\$9$ subscription as the per-show rate: $\\$27 + 4 \\cdot \\$9$.\n\n**Test Day Takeaway:** When a per-unit charge sits alongside a flat fee, only the per-unit part scales with quantity. Identify which constant is multiplied by the variable.",
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
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $7x + 11$ is $7x - 4$ plus $15$, so the answer is $24 + 15 = 39$.\n\n**The Full Solution:**\nStep 1: From $7x - 4 = 24$, add $4$ to both sides: $7x = 28$.\nStep 2: The question wants $7x + 11$, and you already have $7x = 28$: $28 + 11 = 39$.\nStep 3: Check by solving for $x$: $x = 4$, so $7(4) + 11 = 28 + 11 = 39$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): solves $x = 4$ and reports $x$ instead of $7x + 11$.\n* Choice C ($28$): stops at $7x = 28$ without adding $11$.\n* Choice D ($17$): subtracts $11$ from $28$ instead of adding.\n\n**Test Day Takeaway:** When the question asks for an expression in $x$ rather than $x$ itself, check whether it is just a constant shift from what you already isolated — you can often skip solving for $x$.",
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
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Cross-multiply $\\frac{4x}{15} = \\frac{8}{5}$: $5 \\cdot 4x = 15 \\cdot 8 \\Rightarrow 20x = 120 \\Rightarrow x = 6$. Then $x - 5 = 1$.\n\n**The Full Solution:**\nStep 1: Cross-multiply: $5 \\cdot 4x = 15 \\cdot 8$, so $20x = 120$.\nStep 2: Divide: $x = 6$.\nStep 3: The question asks for $x - 5$, not $x$: $6 - 5 = 1$. Check: $\\frac{4(6)}{15} = \\frac{24}{15} = \\frac{8}{5}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): solves $x = 6$ correctly but forgets to subtract $5$.\n* Choice C ($11$): adds $5$ to $x$ instead of subtracting.\n* Choice D ($19$): keeps $4x = 24$ instead of solving for $x$, then subtracts $5$.\n\n**Test Day Takeaway:** Re-read the final sentence before answering. The question often wants a related quantity like $x - 5$, not the variable itself.",
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
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $g(5) = 4(5) + 7 = 27$, then $g(5) - 9 = 27 - 9 = 18$.\n\n**The Full Solution:**\nStep 1: Evaluate the function at $x = 5$: $g(5) = 4(5) + 7 = 20 + 7 = 27$.\nStep 2: The question asks for $g(5) - 9$, which subtracts $9$ from the output: $27 - 9 = 18$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1$): subtracts $9$ from the input, computing $g(5 - 9) = g(-4) = 4(-4) + 7 = -9$, then slips to $-1$.\n* Choice C ($27$): reports $g(5)$ without subtracting $9$.\n* Choice D ($36$): adds $9$ instead of subtracting.\n\n**Test Day Takeaway:** $g(5) - 9$ subtracts from the OUTPUT; $g(5 - 9) = g(-4)$ subtracts from the INPUT. Watch where the $-9$ sits.",
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
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $6m - 22 = (6m + 14) - 36 = 50 - 36 = 14$. The target expression is $36$ less than the given one.\n\n**The Full Solution:**\nStep 1: From $6m + 14 = 50$, subtract $14$: $6m = 36$.\nStep 2: The question wants $6m - 22$, and you have $6m = 36$: $36 - 22 = 14$.\nStep 3: Check by solving for $m$: $m = 6$, so $6(6) + 14 = 50$ and $6(6) - 22 = 14$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): solves $m = 6$ and reports $m$ instead of $6m - 22$.\n* Choice C ($36$): stops at $6m = 36$ without subtracting $22$.\n* Choice D ($28$): subtracts $22$ from the original total $50$ instead of from $6m$.\n\n**Test Day Takeaway:** When the requested expression shares the variable term with the given equation (both have $6m$), isolate that term and shift the constant — you never need $m$ alone.",
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
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Adding $8$ prints adds $8 \\times \\$0.40 = \\$3.20$ to the cost. The service fee is unchanged, so the new total is $\\$13.00 + \\$3.20 = \\$16.20$.\n\n**The Full Solution:**\nStep 1: Set up the original cost: $0.40p + 5.00 = 13.00$, so $0.40p = 8.00$ and $p = 20$ prints.\nStep 2: An order of $p + 8 = 28$ prints costs $0.40(28) + 5.00 = 11.20 + 5.00 = \\$16.20$.\nStep 3 (shortcut): You never need $p$. Eight more prints add $8 \\times \\$0.40 = \\$3.20$; the single service fee stays the same, so the new total is $\\$13.00 + \\$3.20 = \\$16.20$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$13.40$): adds one print's cost ($\\$0.40$) to the total instead of eight prints' cost.\n* Choice B ($\\$11.20$): gives only the print cost $0.40 \\times 28 = \\$11.20$ and drops the $\\$5$ service fee.\n* Choice D ($\\$53.00$): treats the $\\$5$ service fee as the per-print rate, computing $\\$13 + 8 \\times \\$5 = \\$53$.\n\n**Test Day Takeaway:** When a quantity shifts by a fixed amount, only the per-unit part changes — multiply the change by the rate and add it; flat fees that occur once stay put.",
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
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Scale the right side to denominator $22$: $\\frac{27}{11} = \\frac{54}{22}$, so $9z = 54$ and $z = 6$. Then $2z - 5 = 12 - 5 = 7$.\n\n**The Full Solution:**\nStep 1: Solve $\\frac{9z}{22} = \\frac{27}{11}$. Cross-multiply: $11 \\cdot 9z = 22 \\cdot 27 \\Rightarrow 99z = 594 \\Rightarrow z = 6$.\nStep 2: The question asks for $2z - 5$, not $z$. Substitute: $2(6) - 5 = 12 - 5 = 7$.\nStep 3: Check the original: $\\frac{9(6)}{22} = \\frac{54}{22} = \\frac{27}{11}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): solves for $z = 6$ and reports $z$ instead of $2z - 5$.\n* Choice C ($12$): computes $2z = 12$ but forgets to subtract $5$.\n* Choice D ($17$): adds $5$ to $2z$ instead of subtracting it.\n\n**Test Day Takeaway:** Solve for the variable, then read the question's target again. When the prompt asks for an expression like $2z - 5$, finish the arithmetic — never stop at the variable.",
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
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~10s):** Add $2$ to both sides: $3(x + 4) = 21$. Divide by $3$: $x + 4 = 7$, so $x = 3$.\n\n**The Full Solution:**\nStep 1: $3(x + 4) - 2 = 19$.\nStep 2: Distribute: $3x + 12 - 2 = 19$, so $3x + 10 = 19$.\nStep 3: $3x = 9 \\Rightarrow x = 3$.\nCheck: $3(3 + 4) - 2 = 3(7) - 2 = 21 - 2 = 19$. $\\checkmark$\n\n**Common Mistakes:** Distributing the $3$ to only one term inside the parentheses (writing $3x + 4 - 2$); slipping a sign when combining $+12 - 2 = 10$.\n\n**Test Day Takeaway:** Distribute first, combine like terms second, isolate the variable last — three steps in fixed order.",
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
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~10s):** Distribute and combine: $2x - 10 + 4x = 26 \\Rightarrow 6x = 36 \\Rightarrow x = 6$.\n\n**The Full Solution:**\nStep 1: $2(x - 5) + 4x = 26$.\nStep 2: Distribute: $2x - 10 + 4x = 26$.\nStep 3: Combine like terms: $6x - 10 = 26$, so $6x = 36$ and $x = 6$.\nCheck: $2(6 - 5) + 4(6) = 2(1) + 24 = 2 + 24 = 26$. $\\checkmark$\n\n**Common Mistakes:** Distributing the $2$ only to $x$ and not to $-5$ (writing $2x - 5 + 4x$); combining $2x + 4x$ as $6x^2$ instead of $6x$.\n\n**Test Day Takeaway:** When a variable sits both inside and outside parentheses, distribute first, then gather every like term before isolating.",
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
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Distribute the left side: $10y - 15 = 3y + 6$. Then $7y = 21$, so $y = 3$.\n\n**The Full Solution:**\nStep 1: $5(2y - 3) = 3y + 6 \\Rightarrow 10y - 15 = 3y + 6$.\nStep 2: Move $y$-terms left, constants right: $10y - 3y = 6 + 15$, so $7y = 21$.\nStep 3: $y = 3$.\nCheck: left $= 5(2(3) - 3) = 5(3) = 15$; right $= 3(3) + 6 = 15$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{9}{7}$): moves $-15$ across without flipping its sign, getting $7y = -9$.\n* Choice B ($2$): ignores the $y$ on the right and solves $5(2y - 3) = 6$ instead.\n* Choice D ($21$): solves to $7y = 21$ but reports $21$ instead of dividing by $7$.\n\n**Test Day Takeaway:** With variables on both sides, collect $y$-terms on one side and constants on the other — and flip the sign of every term you move across the equals sign.",
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
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~20s):** Distribute both sides: $14x - 7 + 5 = 12x + 8 \\Rightarrow 14x - 2 = 12x + 8$. Then $2x = 10$, so $x = 5$.\n\n**The Full Solution:**\nStep 1: $7(2x - 1) + 5 = 4(3x + 2)$.\nStep 2: Distribute on each side: $14x - 7 + 5 = 12x + 8$.\nStep 3: Combine the left constants: $14x - 2 = 12x + 8$.\nStep 4: $14x - 12x = 8 + 2 \\Rightarrow 2x = 10 \\Rightarrow x = 5$.\nCheck: left $= 7(2(5) - 1) + 5 = 7(9) + 5 = 68$; right $= 4(3(5) + 2) = 4(17) = 68$. $\\checkmark$\n\n**Common Mistakes:** Distributing $7$ as $14x - 1$ instead of $14x - 7$; combining $-7 + 5$ as $-12$ instead of $-2$; mishandling the sign when moving $-2$ across the equals.\n\n**Test Day Takeaway:** Distribute on both sides first, combine constants on each side, then bring the variable terms together — checking every sign change.",
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
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~20s):** Multiply every term by the LCD $4$: $2(x + 1) + (x + 3) = 20 \\Rightarrow 3x + 5 = 20 \\Rightarrow x = 5$.\n\n**The Full Solution:**\nStep 1: Multiply each term of $\\frac{x + 1}{2} + \\frac{x + 3}{4} = 5$ by the LCD $4$: $2(x + 1) + (x + 3) = 20$.\nStep 2: Distribute and combine: $2x + 2 + x + 3 = 20 \\Rightarrow 3x + 5 = 20$.\nStep 3: $3x = 15 \\Rightarrow x = 5$.\nCheck: $\\frac{5 + 1}{2} + \\frac{5 + 3}{4} = \\frac{6}{2} + \\frac{8}{4} = 3 + 2 = 5$. $\\checkmark$\n\n**Common Mistakes:** Multiplying only the left side by $4$ and leaving the $5$ untouched; failing to distribute the $2$ to both terms of the first numerator; adding the fractions over $2 + 4$ instead of a true common denominator.\n\n**Test Day Takeaway:** When an equation has fractions, multiply every term by the LCD to clear all denominators at once — then it is a plain linear equation.",
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
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Both sides share denominator $5$, so the numerators must be equal: $3x - 1 = x + 11 \\Rightarrow 2x = 12 \\Rightarrow x = 6$.\n\n**The Full Solution:**\nStep 1: Since $\\frac{3x - 1}{5} = \\frac{x + 11}{5}$ have the same denominator, they are equal exactly when $3x - 1 = x + 11$.\nStep 2: $3x - x = 11 + 1 \\Rightarrow 2x = 12 \\Rightarrow x = 6$.\nCheck: $\\frac{3(6) - 1}{5} = \\frac{17}{5}$ and $\\frac{6 + 11}{5} = \\frac{17}{5}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): moves $-1$ across without flipping its sign, solving $3x + 1 = x + 11$.\n* Choice C ($12$): reports the intermediate $2x = 12$ instead of dividing by $2$.\n* Choice D ($4$): ignores the $x$ on the right and solves $3x - 1 = 11$.\n\n**Test Day Takeaway:** When two fractions with equal denominators are set equal, just equate the numerators — no cross-multiplication needed.",
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
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Let $r$ be the red chairs. Then blue $= 3r$ and green $= r + 12$, so $r + 3r + (r + 12) = 5r + 12 = 192$. Thus $5r = 180$ and $r = 36$.\n\n**The Full Solution:**\nStep 1: Let $r$ = number of red chairs. Blue $= 3r$; green $= r + 12$.\nStep 2: Sum all three: $r + 3r + (r + 12) = 5r + 12$.\nStep 3: Set equal to the total: $5r + 12 = 192 \\Rightarrow 5r = 180 \\Rightarrow r = 36$.\nCheck: red $= 36$, blue $= 108$, green $= 48$; total $= 36 + 108 + 48 = 192$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($38$): drops the $+12$ green offset and just divides $192 \\div 5 = 38.4$, rounded down.\n* Choice C ($60$): drops the $\\times 3$ on blue, treating blue $= r$, then solves $3r + 12 = 192$.\n* Choice D ($108$): solves correctly to $r = 36$ but reports the blue count $3 \\times 36 = 108$.\n\n**Test Day Takeaway:** Write every quantity in terms of one variable, sum them, set equal to the total — then re-read the prompt to report the quantity it actually asked for.",
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
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~25s):** Multiply every term by the LCD $8$: $2(2x + 3) - (x - 5) = 32 \\Rightarrow 3x + 11 = 32 \\Rightarrow x = 7$.\n\n**The Full Solution:**\nStep 1: Multiply each term of $\\frac{2x + 3}{4} - \\frac{x - 5}{8} = 4$ by the LCD $8$: $2(2x + 3) - (x - 5) = 32$.\nStep 2: Distribute, watching the negative sign: $4x + 6 - x + 5 = 32$.\nStep 3: Combine: $3x + 11 = 32 \\Rightarrow 3x = 21 \\Rightarrow x = 7$.\nCheck: $\\frac{2(7) + 3}{4} - \\frac{7 - 5}{8} = \\frac{17}{4} - \\frac{2}{8} = \\frac{17}{4} - \\frac{1}{4} = \\frac{16}{4} = 4$. $\\checkmark$\n\n**Common Mistakes:** Distributing the subtracted fraction as $-x - 5$ instead of $-x + 5$; multiplying only one fraction by the LCD; multiplying the numerator of $\\frac{2x + 3}{4}$ by $8$ without letting the $4$ cancel to a factor of $2$.\n\n**Test Day Takeaway:** Clear all denominators by multiplying every term by the LCD, then distribute the minus sign on a subtracted fraction onto both of its terms.",
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
    explanation: "**SAT Pattern: Line from Two Points**\n\n**The correct answer is $1$.**\n\n**The Fast Way (~10s):** With slope $2$, write $y = 2x + b$ and plug in $(3, 7)$: $7 = 6 + b$, so $b = 1$.\n\n**The Full Solution:**\nStep 1: A line with slope $m = 2$ has the form $y = 2x + b$, where $b$ is the $y$-intercept.\nStep 2: Substitute the point $(3, 7)$: $7 = 2(3) + b = 6 + b$.\nStep 3: $b = 1$.\nCheck: the line is $y = 2x + 1$; at $x = 3$, $y = 2(3) + 1 = 7$. $\\checkmark$\n\n**Common Mistakes:** Subtracting in the wrong direction to get $b = 6 - 7 = -1$; reporting the point's $y$-coordinate ($7$) as the intercept.\n\n**Test Day Takeaway:** Given a slope and one point, write $y = mx + b$, substitute the point, and solve for $b$.",
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
    explanation: "**SAT Pattern: Line from Two Points**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~5s):** Slope $= \\frac{12 - 4}{5 - 1} = \\frac{8}{4} = 2$.\n\n**The Full Solution:**\nStep 1: Slope between $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\frac{y_2 - y_1}{x_2 - x_1}$.\nStep 2: Using $(1, 4)$ and $(5, 12)$: $m = \\frac{12 - 4}{5 - 1} = \\frac{8}{4} = 2$.\nCheck: from $(1, 4)$, moving right $4$ to $x = 5$ raises $y$ by $8$ to $12$. $\\checkmark$\n\n```seva-figure\n{\"type\":\"linearGraph\",\"params\":{\"slope\":2,\"yIntercept\":2,\"xRange\":[-2,8],\"yRange\":[-2,14],\"highlightPoints\":[[1,4],[5,12]]},\"caption\":\"From $(1, 4)$ to $(5, 12)$: rise $8$ over run $4$ \u2014 slope $2$.\"}\n```\n\n**Common Mistakes:** Inverting the formula as $\\frac{x_2 - x_1}{y_2 - y_1} = \\frac{4}{8} = 0.5$; mixing point order, e.g. $\\frac{12 - 4}{1 - 5} = -2$.\n\n**Test Day Takeaway:** Slope is rise over run — subtract the $y$-values and $x$-values in the SAME order.",
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
    explanation: "**SAT Pattern: Line from Two Points**\n\n**The correct answer is $-7$.**\n\n**The Fast Way (~15s):** Slope $= \\frac{11-(-1)}{6-2} = \\frac{12}{4} = 3$. Plug $(2,-1)$ into $y=3x+b$: $-1 = 6+b$, so $b=-7$.\n\n**The Full Solution:**\nStep 1: Find the slope from the two points: $m = \\frac{11-(-1)}{6-2} = \\frac{12}{4} = 3$.\nStep 2: Use $y = mx + b$ with one point. Substitute $(2,-1)$: $-1 = 3(2) + b = 6 + b$, so $b = -7$.\n\nThe $y$-intercept is $-7$. Check: $y = 3x - 7$ gives $3(6)-7 = 11$ at $x=6$. $\\checkmark$\n\n**Common Mistakes:** Mishandling the double negative in the numerator ($11-(-1) = 12$, not $10$); solving for $b$ at the wrong point or with a sign slip.\n\n**Test Day Takeaway:** Two points define a line: find the slope first, then substitute either point into $y = mx + b$ and solve for $b$.",
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
    explanation: "**SAT Pattern: Line from Two Points**\n\n**The correct answer is $19$.**\n\n**The Fast Way (~15s):** $g(0)=4$ is the intercept directly. Slope $= \\frac{13-4}{3-0} = 3$, so $g(x)=3x+4$ and $g(5) = 19$.\n\n**The Full Solution:**\nStep 1: A linear function is $g(x) = mx + b$. Since $g(0) = b$, the intercept is $b = 4$.\nStep 2: Find the slope from the two values: $m = \\frac{13-4}{3-0} = \\frac{9}{3} = 3$.\nStep 3: So $g(x) = 3x + 4$. Evaluate: $g(5) = 3(5) + 4 = 19$.\n\nCheck: $g(3) = 3(3)+4 = 13$. $\\checkmark$\n\n**Common Mistakes:** Forgetting that $g(0)$ is the intercept and recomputing it; using $13-4 = 9$ as the slope without dividing by the run of $3$.\n\n**Test Day Takeaway:** In a linear function, $g(0)$ is the $y$-intercept outright. Two values pin down the whole line, so you can evaluate at any new input.",
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
    explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Build $y = -2x + b$, plug $(3,4)$: $4 = -6+b$, so $b=10$. Set $y=0$: $0 = -2x+10 \\Rightarrow x = 5$.\n\n**The Full Solution:**\nStep 1: With slope $-2$ through $(3,4)$, write $y = -2x + b$ and substitute: $4 = -2(3) + b = -6 + b$, so $b = 10$.\nStep 2: The line is $y = -2x + 10$.\nStep 3: The $x$-intercept is where $y = 0$: $0 = -2x + 10 \\Rightarrow 2x = 10 \\Rightarrow x = 5$.\n\nCheck: at $x = 5$, $y = -2(5) + 10 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports the magnitude of the slope instead of solving for the intercept.\n* Choice C ($10$): reports the $y$-intercept $b = 10$ rather than the $x$-intercept.\n* Choice D ($-5$): sign error when solving $2x = 10$.\n\n**Test Day Takeaway:** The $x$-intercept comes from setting $y = 0$; the $y$-intercept from setting $x = 0$. Don't swap them.",
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
    explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Parallel lines share slope, so $m = 3$. Plug $(2,1)$ into $y = 3x + b$: $1 = 6 + b \\Rightarrow b = -5$, giving $y = 3x - 5$.\n\n**The Full Solution:**\nStep 1: The line $y = 3x + 7$ has slope $3$. A parallel line has the same slope, $3$.\nStep 2: Write $y = 3x + b$ and substitute $(2,1)$: $1 = 3(2) + b = 6 + b$, so $b = -5$.\nStep 3: The equation is $y = 3x - 5$, which is Choice A.\n\nCheck: at $(2,1)$, $3(2)-5 = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = 3x + 5$): sign error on the computed intercept.\n* Choice C ($y = -\\frac{1}{3}x + \\frac{5}{3}$): uses the perpendicular slope (negative reciprocal) instead of the parallel slope.\n* Choice D ($y = 3x + 1$): drops in the point's $y$-coordinate as the intercept.\n\n**Test Day Takeaway:** Parallel means same slope; perpendicular means negative-reciprocal slope. Match the slope first, then use the given point to find the new intercept.",
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
    explanation: "**SAT Pattern: Line from Two Points**\n\n**The correct answer is $0$.**\n\n**The Fast Way (~25s):** Perpendicular slope $= -\\frac{1}{2}$. Plug $(4,2)$ into $y = -\\frac{1}{2}x + b$: $2 = -2 + b \\Rightarrow b = 4$. At $x = 8$: $y = -4 + 4 = 0$.\n\n**The Full Solution:**\nStep 1: The given line has slope $2$, so line $\\ell$ has the negative-reciprocal slope $-\\frac{1}{2}$.\nStep 2: Substitute $(4,2)$ into $y = -\\frac{1}{2}x + b$: $2 = -\\frac{1}{2}(4) + b = -2 + b$, so $b = 4$.\nStep 3: Line $\\ell$ is $y = -\\frac{1}{2}x + 4$. Evaluate at $x = 8$: $y = -\\frac{1}{2}(8) + 4 = -4 + 4 = 0$.\n\nCheck: slopes multiply to $-\\frac{1}{2} \\cdot 2 = -1$, confirming perpendicular. $\\checkmark$\n\n**Common Mistakes:** Using the parallel slope $2$ instead of $-\\frac{1}{2}$; taking the reciprocal $\\frac{1}{2}$ without the negative sign; dropping the negative in $-\\frac{1}{2}(8) = -4$.\n\n**Test Day Takeaway:** Perpendicular slope is $-\\frac{1}{m}$. Verify by multiplying the two slopes: the product should be $-1$.",
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
    explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Slope $= \\frac{11-5}{8-2} = 1$. For a linear function, $h(10) - h(-2) = m(10-(-2)) = 1 \\cdot 12 = 12$ — no intercept needed.\n\n**The Full Solution:**\nStep 1: Find the slope: $m = \\frac{11-5}{8-2} = \\frac{6}{6} = 1$.\nStep 2: Find the intercept from $h(2) = 5$: $5 = 1 \\cdot 2 + b \\Rightarrow b = 3$, so $h(x) = x + 3$.\nStep 3: $h(10) = 13$ and $h(-2) = 1$, so $h(10) - h(-2) = 13 - 1 = 12$, which is Choice B.\n\nCheck: $h(8) = 8 + 3 = 11$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): adds the two values, $13 + 1$, instead of subtracting.\n* Choice C ($1$): stops at the slope $m = 1$.\n* Choice D ($10$): arithmetic slip on one of the evaluations.\n\n**Test Day Takeaway:** For a linear $h$, $h(a) - h(b) = m(a-b)$. When you only need a difference, skip the intercept entirely.",
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
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~10s):** The $y$-coefficients are $+1$ and $-1$, so add: $(3x+y)+(x-y) = 11+1 \\Rightarrow 4x = 12 \\Rightarrow x = 3$.\n\n**The Full Solution:**\nStep 1: Adding the equations cancels $y$: $(3x + y) + (x - y) = 11 + 1$, giving $4x = 12$.\nStep 2: Divide: $x = 3$.\n\nCheck: from the second equation, $y = x - 1 = 2$; then $3(3) + 2 = 11$. $\\checkmark$\n\n**Common Mistakes:** Subtracting when the $y$-coefficients are already opposites; reporting $y = 2$ instead of the requested $x$.\n\n**Test Day Takeaway:** When a variable's coefficients are opposites ($+1$ and $-1$), add the equations to eliminate it in one move.",
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
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~10s):** The $x$-coefficients are both $2$, so subtract: $(2x+3y)-(2x-3y) = 17-(-1) \\Rightarrow 6y = 18 \\Rightarrow y = 3$.\n\n**The Full Solution:**\nStep 1: Subtracting eliminates $x$: $(2x + 3y) - (2x - 3y) = 17 - (-1)$, giving $6y = 18$.\nStep 2: Divide: $y = 3$.\n\nCheck: from the first equation, $2x + 9 = 17 \\Rightarrow x = 4$; then $2(4) - 3(3) = -1$. $\\checkmark$\n\n**Common Mistakes:** Adding when the $x$-coefficients match; mishandling $17 - (-1)$ as $16$ instead of $18$.\n\n**Test Day Takeaway:** Equal coefficients call for subtraction; watch the sign when subtracting a negative on the right side.",
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
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Multiply the 2nd equation by $2$: $6x - 2y = 26$. Add to the 1st: $7x = 35 \\Rightarrow x = 5$.\n\n**The Full Solution:**\nStep 1: To eliminate $y$, make its coefficients opposites. The $y$-coefficients are $+2$ and $-1$; multiply the 2nd equation by $2$: $6x - 2y = 26$.\nStep 2: Add to the 1st: $(x + 2y) + (6x - 2y) = 9 + 26$, giving $7x = 35$.\nStep 3: Divide: $x = 5$, which is Choice C.\n\nCheck: from the 1st equation, $5 + 2y = 9 \\Rightarrow y = 2$; then $3(5) - 2 = 13$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): reports $y$ from a miscomputed substitution instead of $x$.\n* Choice B ($4$): a scaling slip that yields $7x = 28$ instead of $35$.\n* Choice D ($35$): stops at $7x = 35$ without dividing by $7$.\n\n**Test Day Takeaway:** When coefficients don't cancel on their own, scale one equation so they do, then add. Pick the variable that's cheaper to eliminate.",
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
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~15s):** Multiply the 1st equation by $2$: $4x + 10y = 32$. Subtract the 2nd: $7y = 14 \\Rightarrow y = 2$.\n\n**The Full Solution:**\nStep 1: The $x$-coefficients are $2$ and $4$; multiply the 1st equation by $2$ to match: $4x + 10y = 32$. Scale the right side too.\nStep 2: Subtract the 2nd equation: $(4x + 10y) - (4x + 3y) = 32 - 18$, giving $7y = 14$.\nStep 3: Divide: $y = 2$.\n\nCheck: from the 1st equation, $2x + 10 = 16 \\Rightarrow x = 3$; then $4(3) + 3(2) = 18$. $\\checkmark$\n\n**Common Mistakes:** Forgetting to scale the right side ($2 \\cdot 16 = 32$, not $16$); adding when you should subtract; reporting $x$ instead of $y$.\n\n**Test Day Takeaway:** Scale one equation so the target variable's coefficients match, then add or subtract to eliminate it.",
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
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Add: $(2x-y)+(x+y) = 5+4 \\Rightarrow 3x = 9 \\Rightarrow x = 3$, so $y = 1$. Then $3x + y = 9 + 1 = 10$.\n\n**The Full Solution:**\nStep 1: Adding eliminates $y$: $(2x - y) + (x + y) = 5 + 4$, giving $3x = 9$, so $x = 3$.\nStep 2: From the 2nd equation, $y = 4 - x = 1$.\nStep 3: Plug into the requested expression: $3x + y = 3(3) + 1 = 10$, which is Choice D.\n\nCheck: $2(3) - 1 = 5$ and $3 + 1 = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): reports the given $x + y = 4$ rather than $3x + y$.\n* Choice B ($3$): stops at $x = 3$.\n* Choice C ($9$): reports $3x = 9$ without adding $y$.\n\n**Test Day Takeaway:** Read the final sentence: it may ask for a combination like $3x + y$. Solve the system fully, then substitute into the expression.",
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
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The $y$-coefficients are $-4$ and $+4$, so add: $8x = 48 \\Rightarrow x = 6$. Then $30 - 4y = 22 \\Rightarrow y = 2$.\n\n**The Full Solution:**\nStep 1: Adding eliminates $y$: $(5x - 4y) + (3x + 4y) = 22 + 26$, giving $8x = 48$, so $x = 6$.\nStep 2: Substitute into the 1st equation: $5(6) - 4y = 22 \\Rightarrow 30 - 4y = 22 \\Rightarrow -4y = -8 \\Rightarrow y = 2$, which is Choice A.\n\nCheck: $3(6) + 4(2) = 18 + 8 = 26$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): reports $x$ instead of the requested $y$.\n* Choice C ($8$): solves $-4y = -8$ but reads off $8$ without dividing by $4$.\n* Choice D ($-2$): sign error in $-4y = -8$, flipping $y$ to $-2$.\n\n**Test Day Takeaway:** When the $y$-coefficients are opposites, add. Then substitute back for the other variable, and confirm which one the question wants.",
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
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~25s):** Make the $y$ terms cancel. Scale the first equation by $3$ and the second by $2$: $9x + 6y = 33$ and $10x - 6y = 24$. Add to get $19x = 57$, so $x = 3$.\n\n**The Full Solution:**\nStep 1: To eliminate $y$, get matching-but-opposite coefficients. The LCM of $2$ and $3$ is $6$.\nStep 2: Multiply the first equation by $3$: $9x + 6y = 33$. Multiply the second by $2$: $10x - 6y = 24$.\nStep 3: Add the equations: the $+6y$ and $-6y$ cancel, leaving $19x = 57 \\Rightarrow x = 3$.\nStep 4: Check by finding $y$: from $3x + 2y = 11$, $9 + 2y = 11 \\Rightarrow y = 1$. In the second equation, $5(3) - 3(1) = 12$. $\\checkmark$\n\n**Common Mistakes:** Scaling only the left side and writing $9x + 6y = 11$ instead of $33$; adding when the signs call for subtracting (or vice versa).\n\n**Test Day Takeaway:** When neither variable already lines up, multiply BOTH whole equations by constants so one variable's coefficients become opposites — then a single addition clears it.",
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
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $6x + 3y = 3(2x + y)$, and you are handed $2x + y = 8$, so $6x + 3y = 3 \\cdot 8 = 24$. No solving needed.\n\n**The Full Solution:**\nStep 1: Factor the target expression: $6x + 3y = 3(2x + y)$.\nStep 2: The first equation already gives $2x + y = 8$, so substitute: $3 \\cdot 8 = 24$.\nStep 3 (longer check): Add the two equations to solve the system. $(2x + y) + (x - y) = 8 + 1 \\Rightarrow 3x = 9 \\Rightarrow x = 3$, then $y = 2$. Now $6(3) + 3(2) = 18 + 6 = 24$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): reports the given $2x + y$ without multiplying by $3$.\n* Choice B ($9$): stops at $3x = 9$ from the elimination step.\n* Choice C ($12$): a mis-scaling — multiplies the wrong piece to land on $12$.\n\n**Test Day Takeaway:** Before grinding through a system, check whether the requested expression is just a multiple of an equation you already have. $6x + 3y = 3(2x + y)$ collapses the whole problem to one multiplication.",
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
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Simplify the left side: $3(4x - 2) + 6 = 12x - 6 + 6 = 12x$. The equation becomes $12x = 12x + k$, which holds for all $x$ only when $k = 0$.\n\n**The Full Solution:**\nStep 1: Distribute and combine on the left: $3(4x - 2) + 6 = 12x - 6 + 6 = 12x$.\nStep 2: Set it against the right side: $12x = 12x + k$.\nStep 3: Infinitely many solutions means the two sides are identical for every $x$. The $x$ terms already match, so the constants must too. The left has constant $0$, forcing $k = 0$.\nStep 4: Check: with $k = 0$ the equation is $12x = 12x$, true for every $x$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-6$): reports the partial constant $-6$ before adding the $+6$ outside the parentheses.\n* Choice C ($6$): a sign flip when matching the constants.\n* Choice D ($-2$): grabs the $-2$ inside the parentheses without distributing the $3$.\n\n**Test Day Takeaway:** Infinitely many solutions means the equation becomes an identity. Simplify each side fully, then match BOTH the coefficient on $x$ and the constant.",
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
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** Expand the left side: $2(5x + 4) - 3 = 10x + 8 - 3 = 10x + 5$. The right side is $10x + b$, so $b = 5$.\n\n**The Full Solution:**\nStep 1: Distribute and combine: $2(5x + 4) - 3 = 10x + 8 - 3 = 10x + 5$.\nStep 2: The equation reads $10x + 5 = 10x + b$.\nStep 3: For infinitely many solutions the sides are identical for every $x$. The $x$ coefficients already match ($10 = 10$), so the constants must match: $b = 5$.\nStep 4: Check: with $b = 5$ both sides equal $10x + 5$. $\\checkmark$\n\n**Common Mistakes:** Computing $8 - 3 = 11$ and reporting $b = 11$; forgetting to distribute the $2$ to the $5x$ term.\n\n**Test Day Takeaway:** Simplify each side first — distribute, then combine constants — and only then match the coefficient and the constant separately.",
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
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The second equation's coefficients are $2\\times$ the first ($6 = 2 \\cdot 3$, $10 = 2 \\cdot 5$). For one line, the constant scales the same way: $m = 2 \\cdot 9 = 18$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the two equations are the same line — one is a scalar multiple of the other.\nStep 2: Multiply the first equation by $2$: $2(3x + 5y) = 2 \\cdot 9 \\Rightarrow 6x + 10y = 18$.\nStep 3: Compare with $6x + 10y = m$. The coefficients already match, so $m = 18$.\nStep 4: Check: at $m = 18$ both equations reduce to $3x + 5y = 9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): reports the original constant without scaling by $2$.\n* Choice C ($27$): uses the wrong multiplier ($3 \\cdot 9$).\n* Choice D ($3$): divides instead of multiplies.\n\n**Test Day Takeaway:** Same line means all three of $a$, $b$, $c$ in $ax + by = c$ scale by one factor. Read the multiplier off the coefficients, then apply it to the constant.",
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
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**The correct answer is $-4$.**\n\n**The Fast Way (~20s):** The second equation's coefficients are $-\\frac{1}{2}$ times the first ($2 = -\\frac{1}{2}(-4)$, $-3 = -\\frac{1}{2}(6)$). So $c = -\\frac{1}{2}(8) = -4$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means one equation is a scalar multiple of the other.\nStep 2: Find the multiplier from the $x$-coefficients: $2 = k(-4) \\Rightarrow k = -\\frac{1}{2}$. Confirm on $y$: $-\\frac{1}{2}(6) = -3$. $\\checkmark$\nStep 3: Apply the same factor to the constant: $c = -\\frac{1}{2}(8) = -4$.\nStep 4: Check: multiplying $2x - 3y = -4$ by $-2$ gives $-4x + 6y = 8$, identical to the first equation. $\\checkmark$\n\n**Common Mistakes:** Using $\\frac{1}{2}$ instead of $-\\frac{1}{2}$ and getting $c = 4$; scaling the constant by $2$ instead of $-\\frac{1}{2}$.\n\n**Test Day Takeaway:** When the coefficients flip sign between the two equations, the multiplier is negative — and the constant must scale by that same negative factor.",
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
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Simplify both sides. Left: $4(x - 2) + 3 = 4x - 5$. Right: $2(2x - k) = 4x - 2k$. The $x$ terms match, so match constants: $-2k = -5 \\Rightarrow k = \\frac{5}{2}$.\n\n**The Full Solution:**\nStep 1: Distribute the left: $4(x - 2) + 3 = 4x - 8 + 3 = 4x - 5$.\nStep 2: Distribute the right: $2(2x - k) = 4x - 2k$.\nStep 3: Infinitely many solutions means the sides are identical. The $x$ coefficients agree ($4 = 4$), so set the constants equal: $-5 = -2k \\Rightarrow k = \\frac{5}{2}$.\nStep 4: Check: with $k = \\frac{5}{2}$, the right side is $4x - 5$, matching the left. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{5}{2}$): mishandles the negatives in $-5 = -2k$ and flips the sign.\n* Choice C ($4$): grabs the coefficient $4$ instead of solving for $k$.\n* Choice D ($5$): reports $5$ before dividing by $2$.\n\n**Test Day Takeaway:** When both sides have parentheses, distribute both and collect like terms before matching. Never compare un-simplified forms.",
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
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~10s):** Distribute: $\\frac{1}{2}(6x + 8) = 3x + 4$. The right side is $3x + c$, so $c = 4$.\n\n**The Full Solution:**\nStep 1: Distribute the $\\frac{1}{2}$ to each term: $\\frac{1}{2}(6x) + \\frac{1}{2}(8) = 3x + 4$.\nStep 2: The equation becomes $3x + 4 = 3x + c$.\nStep 3: For infinitely many solutions the constants must match, so $c = 4$.\nStep 4: Check: both sides equal $3x + 4$. $\\checkmark$\n\n**Common Mistakes:** Forgetting to halve the constant and reporting $c = 8$; halving only the $6x$ term and leaving $6x + 4$.\n\n**Test Day Takeaway:** A fraction outside the parentheses hits EVERY term inside — $\\frac{1}{2}(6x + 8) = 3x + 4$, not $6x + 4$.",
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
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The constants give the multiplier: $\\frac{12}{4} = 3$. So the second equation is $3\\times$ the first: $3m = 6 \\Rightarrow m = 2$ and $n = 3 \\cdot 2 = 6$. Then $m \\cdot n = 12$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means one equation is a scalar multiple of the other. Read the multiplier from the constants: $12 \\div 4 = 3$.\nStep 2: Scale the first equation by $3$: $3(mx + 2y) = 3 \\cdot 4 \\Rightarrow 3mx + 6y = 12$.\nStep 3: Match against $6x + ny = 12$. Coefficient on $x$: $3m = 6 \\Rightarrow m = 2$. Coefficient on $y$: $n = 6$.\nStep 4: Product: $m \\cdot n = 2 \\cdot 6 = 12$.\nStep 5: Check: the equations are $2x + 2y = 4$ and $6x + 6y = 12$; dividing the second by $3$ gives the first. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): adds $m + n$ instead of multiplying.\n* Choice C ($6$): reports $n = 6$ alone and drops $m$.\n* Choice D ($4$): uses the constant $4$ directly.\n\n**Test Day Takeaway:** With two unknown coefficients, find the single scalar from the cleanest pair (often the constants), then solve each coefficient one at a time.",
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
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**The correct answer is $-8$.**\n\n**The Fast Way (~30s):** Expand: $a(x - 4) + 7 = ax - 4a + 7$. Match the $x$ terms: $a = 5$. Match constants: $b = -4a + 7 = -20 + 7 = -13$. Sum: $a + b = -8$.\n\n**The Full Solution:**\nStep 1: Distribute the left side: $a(x - 4) + 7 = ax - 4a + 7$.\nStep 2: Set it against $5x + b$. Infinitely many solutions requires BOTH the coefficient and the constant to match.\nStep 3: Coefficients: $a = 5$.\nStep 4: Constants: $-4a + 7 = b$. With $a = 5$, $b = -20 + 7 = -13$.\nStep 5: Sum: $a + b = 5 + (-13) = -8$.\nStep 6: Check: $5(x - 4) + 7 = 5x - 20 + 7 = 5x - 13$, identical to $5x - 13$. $\\checkmark$\n\n**Common Mistakes:** Matching only the coefficient and stopping at $a = 5$; computing $-4(5) = -20$ but forgetting the $+7$; adding as $5 + 13 = 18$ instead of $5 + (-13)$.\n\n**Test Day Takeaway:** When the parameter sits in both the coefficient and the constant, solve the coefficient first, then substitute to get the second parameter. Two unknowns need two matching conditions.",
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
    explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Substitute $x = 4$: $f(4) = 3(4) + 7 = 12 + 7 = 19$.\n\n**The Full Solution:**\nStep 1: Replace $x$ with $4$ in $f(x) = 3x + 7$: $f(4) = 3(4) + 7$.\nStep 2: Multiply first, then add: $12 + 7 = 19$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($11$): adds the constant to the input directly ($4 + 7$) instead of multiplying first.\n* Choice C ($12$): stops at $3 \\cdot 4$ and forgets the $+7$.\n* Choice D ($21$): multiplies $3 \\cdot 7$, ignoring the input entirely.\n\n**Test Day Takeaway:** Plug the input in everywhere $x$ appears, then simplify in order — multiplication before addition.",
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
    explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~10s):** Substitute $x = 3$: $g(3) = 10 - 2(3) = 10 - 6 = 4$.\n\n**The Full Solution:**\nStep 1: Replace $x$ with $3$ in $g(x) = 10 - 2x$: $g(3) = 10 - 2(3)$.\nStep 2: Multiply first: $2(3) = 6$. Then subtract: $10 - 6 = 4$.\n\n**Common Mistakes:** Subtracting before multiplying — $(10 - 2)(3) = 24$; concatenating to get $10 - 23 = -13$; adding instead of subtracting for $16$.\n\n**Test Day Takeaway:** Order of operations holds inside a function too: in $10 - 2x$, multiply $2x$ before subtracting from $10$.",
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
    explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Substitute $x=-2$: $h(-2)=(-2)^2-5(-2)+2=4+10+2=16$.\n\n**The Full Solution:**\nStep 1: Replace every $x$ with $-2$, keeping parentheses: $h(-2)=(-2)^2-5(-2)+2$.\nStep 2: $(-2)^2=4$ (a negative squared is positive).\nStep 3: $-5(-2)=+10$ (negative times negative is positive).\nStep 4: Add: $4+10+2=16$. This is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-12$): mis-squares as $(-2)^2=-4$ and drops the sign on the middle term, landing at $-4-10+2=-12$.\n* Choice C ($8$): mishandles the middle term as $-5(-2)=-10$, then over-corrects elsewhere — a sign-bookkeeping slip.\n* Choice D ($-4$): treats $-5(-2)$ as $-10$, giving $4-10+2=-4$.\n\n**Test Day Takeaway:** When the input is negative, wrap it in parentheses everywhere before simplifying. Two negatives turn positive, and here that happens twice.",
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
    explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $17$.**\n\n**The Fast Way (~10s):** $f(4)=2^4+1=16+1=17$.\n\n**The Full Solution:**\nStep 1: Substitute $x=4$: $f(4)=2^4+1$.\nStep 2: $2^4=2\\cdot 2\\cdot 2\\cdot 2=16$.\nStep 3: Add the constant: $16+1=17$.\n\n**Common Mistakes:** Computing $2\\cdot 4=8$ instead of $2^4=16$ (multiplying instead of exponentiating); treating $+1$ as $\\times 1$ and reporting $16$.\n\n**Test Day Takeaway:** In $2^x$ the base sits below the exponent: it means $x$ copies of $2$ multiplied. Don't confuse $2^x$ with $x^2$.",
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
    explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** For a linear $f(x)=mx+b$, $f(7)-f(3)=m(7-3)=5\\cdot 4=20$. This is choice A.\n\n**The Full Solution:**\nStep 1: $f(7)=5(7)-2=35-2=33$.\nStep 2: $f(3)=5(3)-2=15-2=13$.\nStep 3: Subtract: $f(7)-f(3)=33-13=20$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($18$): computes $f(7-3)=f(4)=5(4)-2=18$, but $f(7)-f(3)\\neq f(7-3)$.\n* Choice C ($33$): stops at $f(7)=33$ and forgets to subtract $f(3)$.\n* Choice D ($15$): uses $5(3)=15$ without finishing the function or the subtraction.\n\n**Test Day Takeaway:** $f(a)-f(b)\\neq f(a-b)$. For a linear function, the difference equals the slope times the change in input: $m(a-b)$.",
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
    explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $72$.**\n\n**The Fast Way (~15s):** $f(5)-f(3)=3\\cdot 2^5-3\\cdot 2^3=96-24=72$.\n\n**The Full Solution:**\nStep 1: $f(5)=3\\cdot 2^5=3\\cdot 32=96$.\nStep 2: $f(3)=3\\cdot 2^3=3\\cdot 8=24$.\nStep 3: Subtract: $96-24=72$.\nCleaner: factor out $3\\cdot 2^3$: $f(5)-f(3)=3\\cdot 2^3(2^2-1)=24\\cdot 3=72$.\n\n**Common Mistakes:** Computing $f(5-3)=f(2)=12$ instead of subtracting the two outputs; dropping the leading $3$ and getting $2^5-2^3=24$; applying $3\\cdot 2^5$ as $(3\\cdot 2)^5$.\n\n**Test Day Takeaway:** For $f(x)=a\\cdot b^x$, evaluate the power $b^x$ first (PEMDAS), then multiply by $a$. Differences like $f(5)-f(3)$ can be computed term by term.",
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
    explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $f(-2)=(2(-2)-1)^2-5=(-5)^2-5=25-5=20$. This is choice A.\n\n**The Full Solution:**\nStep 1: Substitute $x=-2$ inside the parentheses first: $2(-2)-1=-4-1=-5$.\nStep 2: Square it: $(-5)^2=25$.\nStep 3: Subtract the trailing $5$: $25-5=20$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($25$): stops at $(-5)^2=25$ and forgets to subtract the outside $-5$.\n* Choice C ($4$): an arithmetic slip inside the parentheses that throws off the square.\n* Choice D ($-4$): drops the sign when squaring, treating $(-5)^2$ as negative.\n\n**Test Day Takeaway:** Work nested expressions from the inside out: parentheses, then the exponent, then the addition or subtraction. The $-5$ outside applies only after the squaring.",
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
    explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $1200$.**\n\n**The Fast Way (~15s):** $f(0)=800\\cdot(0.5)^0=800\\cdot 1=800$ and $f(1)=800\\cdot 0.5=400$, so the sum is $1200$.\n\n**The Full Solution:**\nStep 1: $f(0)=800\\cdot(0.5)^0=800\\cdot 1=800$ (any nonzero base to the zero power is $1$).\nStep 2: $f(1)=800\\cdot(0.5)^1=800\\cdot 0.5=400$.\nStep 3: Add: $800+400=1200$.\n\n**Common Mistakes:** Treating $(0.5)^0$ as $0$ and getting $f(0)=0$; computing $f(0+1)=f(1)=400$ instead of summing the two outputs.\n\n**Test Day Takeaway:** Any nonzero base raised to the $0$ power equals $1$, so $f(0)=a\\cdot b^0=a$ — the leading coefficient — every time.",
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
    explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $V(t)=50+8t$, the coefficient of $t$ is the rate of change: $8$ liters added per minute. This is choice B.\n\n**The Full Solution:**\nStep 1: The model has the form $V(t)=b+mt$ with $b=50$ and $m=8$.\nStep 2: The slope $m=8$ is the rate: each additional minute adds $8$ liters.\nStep 3: So $8$ represents the number of liters added each minute.\n\n**Why the wrong answers are tempting:**\n* Choice A: that is the constant $50$, the volume before filling begins, not the slope.\n* Choice C: treats $8$ as an input $t=8$ rather than a per-minute rate.\n* Choice D: inverts the rate (that would be $\\frac{1}{8}$ minute per liter).\n\n**Test Day Takeaway:** In $y=b+mx$, the coefficient of the variable is always the per-unit rate of change; the constant is the starting value.",
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
    explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $C(m)=25+0.10m$, the coefficient of $m$ is the rate: $\\$0.10$ per minute. This is choice B.\n\n**The Full Solution:**\nStep 1: The model has the form $C(m)=b+km$ with $b=25$ and $k=0.10$.\nStep 2: The slope $0.10$ is the marginal cost: each additional minute adds $\\$0.10$.\nStep 3: Check: at $m=10$, $C=25+1=\\$26$, which is $\\$1$ for $10$ minutes, confirming $\\$0.10$ per minute.\n\n**Why the wrong answers are tempting:**\n* Choice A: that is the constant $25$, the fixed fee, not the slope.\n* Choice C: inverts the rate ($10$ minutes per dollar).\n* Choice D: misreads the decimal $0.10$ as a percent discount.\n\n**Test Day Takeaway:** In a cost function, the coefficient of the variable is the marginal cost per unit and the constant is the fixed fee you pay regardless of usage.",
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
    explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~10s):** The coefficient of $t$ in $f(t)=85+12t$ is the rate, so the temperature rises $12$ degrees each minute.\n\n**The Full Solution:**\nStep 1: The model has the form $f(t)=b+mt$ with $b=85$ and $m=12$.\nStep 2: The slope $m=12$ is the per-minute change.\nStep 3: Check: $f(0)=85$ and $f(1)=85+12=97$, a $12$-degree rise in one minute.\n\n**Common Mistakes:** Reporting $85$ (the initial temperature, not the rate); reporting $97$ (the temperature after one minute, not the change).\n\n**Test Day Takeaway:** \"Per minute\" is the coefficient of $t$ — its units are already output per input, so it is the rate of change directly.",
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
    explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $T(t)=200-15t$, the coefficient of $t$ is $-15$, so the pie cools $15$ degrees each minute. This is choice B.\n\n**The Full Solution:**\nStep 1: The model has the form $T(t)=b+mt$ with $b=200$ and $m=-15$.\nStep 2: A negative slope means $T$ decreases as $t$ increases — the pie cools.\nStep 3: The magnitude $15$ is the cooling rate: $T(0)=200$ and $T(1)=185$, a $15$-degree drop per minute.\n\n**Why the wrong answers are tempting:**\n* Choice A: that is the constant $200$, the temperature when removed, not the slope.\n* Choice C: flips the direction — the negative slope means cooling, not warming.\n* Choice D: inverts the rate instead of reading it directly.\n\n**Test Day Takeaway:** A negative slope in context $\\Rightarrow$ the quantity is decreasing. Its magnitude $|m|$ is the rate of decrease per unit time.",
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
    explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $S(w)=1200+75w$, the coefficient of $w$ is the rate: $\\$75$ deposited per week. This is choice B.\n\n**The Full Solution:**\nStep 1: The model has the form $S(w)=b+mw$ with $b=1200$ and $m=75$.\nStep 2: The slope $75$ is the per-week change.\nStep 3: Check: $S(0)=\\$1200$ and $S(1)=\\$1275$, an increase of $\\$75$ in one week.\n\n**Why the wrong answers are tempting:**\n* Choice A: that is the constant $1200$, the initial balance, not the slope.\n* Choice C: the total deposited depends on $w$; $75$ is the rate, not a running total.\n* Choice D: inverts the rate instead of reading it directly.\n\n**Test Day Takeaway:** In a balance model of the form (initial) $+$ (rate) $\\times$ (time), the coefficient of time is always the per-unit change.",
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
    explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $D(t)=60t+8$, the constant $8$ is the value of $D$ at $t=0$ — the distance already traveled when timing started. This is choice B.\n\n**The Full Solution:**\nStep 1: The model has the form $D(t)=mt+b$ with slope $m=60$ and intercept $b=8$.\nStep 2: At $t=0$, $D(0)=60(0)+8=8$, so $8$ is the starting distance — the car was already $8$ miles along.\nStep 3: The $60$ (not $8$) is the speed in miles per hour.\n\n**Why the wrong answers are tempting:**\n* Choice A: that describes the slope $60$, the speed, not the constant $8$.\n* Choice C: treats $8$ as an input $t=8$ rather than the intercept.\n* Choice D: inverts $8$ as if it were a rate, but it is a fixed distance.\n\n**Test Day Takeaway:** In $f(t)=mt+b$, the slope $m$ is the rate and the constant $b$ is the starting value — and $b$ keeps that role even when it is written after the slope term.",
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
    explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**The correct answer is $1800$.**\n\n**The Fast Way (~10s):** In $V(y) = 24000 - 1800y$, the coefficient of $y$ is $-1800$, so the value drops by $\\$1800$ each year. The decrease is $1800$.\n\n**The Full Solution:**\nStep 1: The model has the form $V(y) = b + my$ with intercept $b = 24000$ and slope $m = -1800$.\nStep 2: The slope is the per-year change. Since it is negative, the value falls; each year it drops by $|m| = 1800$ dollars.\nStep 3: Confirm with two points: $V(0) = 24000$ and $V(1) = 24000 - 1800 = 22200$, a $\\$1800$ drop in one year. $\\checkmark$\n\n**Common Mistakes:** Reporting $-1800$ (the question asks \"by how many dollars,\" a positive amount); reporting $24000$ (the starting value, not the rate); reporting $22200$ (the value at $y=1$, not the change).\n\n**Test Day Takeaway:** \"Decreases by how many\" wants the magnitude of the slope as a positive number. The minus sign in the model tells you the direction; don't carry it into the answer.",
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
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Both equations equal $y$, so set them equal: $2x + 1 = 3x - 4 \\Rightarrow 5 = x$.\n\n**The Full Solution:**\nStep 1: Since each equation is already solved for $y$, the right-hand sides are equal: $2x + 1 = 3x - 4$.\nStep 2: Collect $x$ on one side: $1 + 4 = 3x - 2x$, so $5 = x$.\nStep 3: Check: at $x = 5$, $y = 2(5) + 1 = 11$ and $y = 3(5) - 4 = 11$. Both agree. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($11$): reports $y$ instead of $x$.\n* Choice C ($-5$): drops the sign when isolating $x$.\n* Choice D ($1$): grabs the constant from the first equation instead of solving.\n\n**Test Day Takeaway:** When both equations are in the form $y = \\ldots$, set the right-hand sides equal — no extra substitution variable needed.",
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
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~15s):** Substitute $y = x + 4$ into $2x + y = 13$: $2x + (x + 4) = 13 \\Rightarrow 3x = 9 \\Rightarrow x = 3$.\n\n**The Full Solution:**\nStep 1: The first equation already isolates $y$, so replace $y$ in the second equation: $2x + (x + 4) = 13$.\nStep 2: Combine: $3x + 4 = 13 \\Rightarrow 3x = 9 \\Rightarrow x = 3$.\nStep 3: Check: $y = 3 + 4 = 7$, and $2(3) + 7 = 13$. $\\checkmark$\n\n**Common Mistakes:** Solving for $y$ ($y = 7$) instead of $x$; adding instead of subtracting the $4$ to get $3x = 17$.\n\n**Test Day Takeaway:** Substitution means replacing every occurrence of the isolated variable with its equivalent expression, then solving the single-variable equation that remains.",
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
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Substitute $x = 2y - 5$ into $3x + y = 6$: $3(2y - 5) + y = 6 \\Rightarrow 7y - 15 = 6 \\Rightarrow y = 3$.\n\n**The Full Solution:**\nStep 1: The first equation gives $x$ in terms of $y$, so substitute it into the second: $3(2y - 5) + y = 6$.\nStep 2: Distribute and combine: $6y - 15 + y = 6 \\Rightarrow 7y - 15 = 6$.\nStep 3: Solve: $7y = 21 \\Rightarrow y = 3$.\nStep 4: Check: $x = 2(3) - 5 = 1$, and $3(1) + 3 = 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): reports $x$ instead of $y$.\n* Choice C ($5$): grabs the magnitude of the constant $-5$.\n* Choice D ($-3$): drops the sign when distributing $3(2y - 5)$.\n\n**Test Day Takeaway:** When one equation gives a variable in terms of the other, substitute into the remaining equation and distribute carefully — the sign on the constant matters.",
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
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~30s):** Let $s$ = small and $\\ell$ = large. Then $s + \\ell = 12$ and $3s + 7\\ell = 56$. Substitute $s = 12 - \\ell$: $3(12 - \\ell) + 7\\ell = 56 \\Rightarrow 36 + 4\\ell = 56 \\Rightarrow \\ell = 5$.\n\n**The Full Solution:**\nStep 1: Set up two equations. Count: $s + \\ell = 12$. Cost: $3s + 7\\ell = 56$.\nStep 2: From the count equation, $s = 12 - \\ell$. Substitute into the cost equation: $3(12 - \\ell) + 7\\ell = 56$.\nStep 3: Simplify: $36 - 3\\ell + 7\\ell = 56 \\Rightarrow 36 + 4\\ell = 56 \\Rightarrow 4\\ell = 20 \\Rightarrow \\ell = 5$.\nStep 4: Check: $s = 7$, so $7 + 5 = 12$ and $3(7) + 7(5) = 21 + 35 = 56$. $\\checkmark$\n\n**Common Mistakes:** Swapping the prices ($7s + 3\\ell = 56$) and getting $\\ell = 7$; solving for $s = 7$ and reporting the small count instead of the large count.\n\n**Test Day Takeaway:** Two-quantity word problems need two equations — a count and a total-cost. Solve by substitution, then re-read to confirm which quantity is asked for.",
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
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Substitute $y = 4x - 1$ into $2x + 3y = 11$: $2x + 3(4x - 1) = 11 \\Rightarrow 14x = 14 \\Rightarrow x = 1$, then $y = 3$, so $x + y = 4$.\n\n**The Full Solution:**\nStep 1: Substitute $y = 4x - 1$ into the second equation: $2x + 3(4x - 1) = 11$.\nStep 2: Distribute and combine: $2x + 12x - 3 = 11 \\Rightarrow 14x = 14 \\Rightarrow x = 1$.\nStep 3: Back-substitute: $y = 4(1) - 1 = 3$, so $x + y = 1 + 3 = 4$.\nStep 4: Check: $2(1) + 3(3) = 2 + 9 = 11$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): reports $x$ instead of $x + y$.\n* Choice C ($3$): reports $y$ instead of $x + y$.\n* Choice D ($-2$): computes $x - y$ instead of $x + y$.\n\n**Test Day Takeaway:** After finding $(x, y)$, re-read the question. The SAT often asks for a combination like $x + y$ or $xy$, not the individual values.",
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
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~15s):** Substitute $b = a + 2$ into $3a + b = 14$: $3a + (a + 2) = 14 \\Rightarrow 4a = 12 \\Rightarrow a = 3$.\n\n**The Full Solution:**\nStep 1: The second equation isolates $b$, so substitute into the first: $3a + (a + 2) = 14$.\nStep 2: Combine: $4a + 2 = 14 \\Rightarrow 4a = 12 \\Rightarrow a = 3$.\nStep 3: Check: $b = 3 + 2 = 5$, and $3(3) + 5 = 14$. $\\checkmark$\n\n**Common Mistakes:** Reporting $b = 5$ instead of $a$; mishandling the $+2$ as $3a - a - 2 = 14$ and getting $a = 8$.\n\n**Test Day Takeaway:** When one equation already isolates a variable, substitute its expression directly — faster and cleaner than elimination.",
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
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Substitute $y = x - 1$ into $x^2 - y = 7$: $x^2 - (x - 1) = 7 \\Rightarrow x^2 - x - 6 = 0 \\Rightarrow (x - 3)(x + 2) = 0$. With $x > 0$, take $x = 3$.\n\n**The Full Solution:**\nStep 1: Substitute $y = x - 1$ into the second equation: $x^2 - (x - 1) = 7$.\nStep 2: Simplify: $x^2 - x + 1 = 7 \\Rightarrow x^2 - x - 6 = 0$.\nStep 3: Factor: $(x - 3)(x + 2) = 0$, so $x = 3$ or $x = -2$.\nStep 4: The constraint $x > 0$ selects $x = 3$. Check: $y = 2$ and $3^2 - 2 = 9 - 2 = 7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-2$): the other root, which violates $x > 0$.\n* Choice C ($2$): reports $y$ instead of $x$.\n* Choice D ($4$): a factoring slip such as $(x - 4)(x + 1)$.\n\n**Test Day Takeaway:** For a linear-quadratic system, substitute the linear equation into the quadratic. Expect two solutions and use the stated constraint to pick the valid one.",
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
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~25s):** Substitute $y = x - 1$ into $2x + 3y = 12$: $2x + 3(x - 1) = 12 \\Rightarrow 5x - 3 = 12 \\Rightarrow x = 3$, then $y = 2$, so $xy = 3 \\cdot 2 = 6$.\n\n**The Full Solution:**\nStep 1: Substitute $y = x - 1$ into the first equation: $2x + 3(x - 1) = 12$.\nStep 2: Distribute and combine: $2x + 3x - 3 = 12 \\Rightarrow 5x = 15 \\Rightarrow x = 3$.\nStep 3: Back-substitute: $y = 3 - 1 = 2$, so $xy = (3)(2) = 6$.\nStep 4: Check: $2(3) + 3(2) = 6 + 6 = 12$. $\\checkmark$\n\n**Common Mistakes:** Reporting $x + y = 5$ or $x - y = 1$ instead of the product $xy$; forgetting to distribute the $3$ across $(x - 1)$.\n\n**Test Day Takeaway:** \"Value of $xy$\" wants the product — solve for $x$ and $y$ separately, then multiply.",
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
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** No solution means parallel lines, which means equal slopes. Match slopes: $k + 1 = 4 \\Rightarrow k = 3$.\n\n**The Full Solution:**\nStep 1: Two lines have no solution exactly when they are parallel — equal slopes but different intercepts.\nStep 2: Line 1 has slope $4$; line 2 has slope $k + 1$. Set them equal: $k + 1 = 4 \\Rightarrow k = 3$.\nStep 3: Confirm the intercepts differ: $1 \\neq 5$, so the lines are parallel and distinct (truly no solution, not coincident). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): matches the slope but forgets to subtract the $+1$.\n* Choice C ($-3$): a sign flip when isolating $k$.\n* Choice D ($5$): matches the $y$-intercept, which is irrelevant to the slope condition.\n\n**Test Day Takeaway:** No solution = equal slopes + different intercepts. The slope condition pins the parameter; the intercept check rules out \"infinitely many.\"",
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
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~10s):** No solution means parallel lines, so the slopes match: $k = 2$.\n\n**The Full Solution:**\nStep 1: For no solution, the slopes must be equal while the intercepts differ.\nStep 2: Line 1 has slope $2$; line 2 has slope $k$. Set equal: $k = 2$.\nStep 3: Confirm the intercepts differ: $-3 \\neq 7$, so the lines are parallel and distinct. $\\checkmark$\n\n**Common Mistakes:** Reporting an intercept ($-3$ or $7$); flipping the sign to get $k = -2$.\n\n**Test Day Takeaway:** When both equations are in slope-intercept form $y = mx + b$, just match the $m$ values, then confirm the $b$ values differ for \"no solution.\"",
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
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Match the coefficient ratios. From $x$: $\\frac{4}{2} = 2$. For $y$: $\\frac{k}{3} = 2 \\Rightarrow k = 6$. Constants: $\\frac{5}{9} \\neq 2$, confirming no solution.\n\n**The Full Solution:**\nStep 1: A linear system has no solution when the $x$- and $y$-coefficients are proportional (parallel) but the constants break that same proportion.\nStep 2: Ratio of $x$-coefficients: $\\frac{4}{2} = 2$. Set the $y$-coefficient ratio equal: $\\frac{k}{3} = 2 \\Rightarrow k = 6$.\nStep 3: Check the constants: $\\frac{5}{9} \\neq 2$, so the lines are parallel-distinct. With $k = 6$, the second equation is $4x + 6y = 5$, while doubling the first gives $4x + 6y = 18$ — the contradiction $18 = 5$ confirms no solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): uses the $y$-coefficient $3$ directly without scaling by the ratio.\n* Choice C ($-6$): a sign flip during the ratio match.\n* Choice D ($\\frac{5}{3}$): uses the constant ratio, which doesn't apply to the coefficient match.\n\n**Test Day Takeaway:** For \"no solution\" in standard form, find the multiplier from the $x$-coefficients and apply it to the $y$-coefficients; then verify the constants don't follow the same ratio.",
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
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~15s):** No solution means parallel lines: the $x$ and $y$ coefficients scale by the same factor while the constants do not. The $y$-coefficients go $-2 \\to -4$, a factor of $2$, so $k = 2 \\cdot 5 = 10$.\n\n**The Full Solution:**\nStep 1: For no solution, the coefficient ratios match but the constant ratio differs. Set $\\dfrac{k}{5} = \\dfrac{-4}{-2}$.\nStep 2: The right side is $\\dfrac{-4}{-2} = 2$ (two negatives cancel), so $\\dfrac{k}{5} = 2 \\Rightarrow k = 10$.\nStep 3: Confirm the constants break the pattern: $\\dfrac{25}{10} = 2.5 \\neq 2$, so the lines are parallel and distinct. At $k = 10$ the second equation is $10x - 4y = 25$, while doubling the first gives $10x - 4y = 20$ — the contradiction $20 = 25$ confirms no solution.\n\n**Common Mistakes:** Setting $\\dfrac{k}{5} = \\dfrac{25}{10} = 2.5$ gives $k = 12.5$, the infinitely-many-solutions case, not no-solution. Mishandling the $\\dfrac{-4}{-2}$ as a negative is a sign slip; reporting $25$ grabs a right-side constant.\n\n**Test Day Takeaway:** No solution = same coefficient ratio, different constant ratio. Two negatives in the coefficient ratio cancel to a positive — never drop them.",
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
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** No solution means equal slopes. In standard form $ax+by=c$, the slope is $-\\dfrac{a}{b}$. Match $-\\dfrac{3}{m} = -\\dfrac{6}{-4} = \\dfrac{3}{2}$, so $m = -2$, choice A.\n\n**The Full Solution:**\nStep 1: Slope of $3x + my = 12$ is $-\\dfrac{3}{m}$. Slope of $6x - 4y = 7$ is $-\\dfrac{6}{-4} = \\dfrac{3}{2}$.\nStep 2: Parallel lines have equal slopes: $-\\dfrac{3}{m} = \\dfrac{3}{2}$.\nStep 3: Cross-multiply: $-6 = 3m \\Rightarrow m = -2$.\nStep 4: Check the constants differ so the lines aren't identical. With $m = -2$, line 1 is $3x - 2y = 12$ ($y$-intercept $-6$); line 2 has $y$-intercept $-\\dfrac{7}{4}$. Different intercepts confirm no solution.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): dropped the negative sign when matching slopes.\n* Choice C ($-4$): copied the $y$-coefficient of line 2 instead of solving for $m$.\n* Choice D ($6$): copied the $x$-coefficient of line 2.\n\n**Test Day Takeaway:** In $ax+by=c$ the slope is $-\\dfrac{a}{b}$. The leading negative matters when you set two slopes equal — keep it.",
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
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $1$.**\n\n**The Fast Way (~15s):** No solution means the coefficients scale by one factor while the constants don't. The $y$-coefficients go $2 \\to 8$, a factor of $4$, so $a = \\dfrac{4}{4} = 1$.\n\n**The Full Solution:**\nStep 1: For no solution, match the coefficient ratios: $\\dfrac{a}{4} = \\dfrac{2}{8}$.\nStep 2: The right side is $\\dfrac{2}{8} = \\dfrac{1}{4}$, so $\\dfrac{a}{4} = \\dfrac{1}{4} \\Rightarrow a = 1$.\nStep 3: Confirm the constants don't match. With $a = 1$, line 1 is $x + 2y = 5$. Line 2 is $4x + 8y = 11 = 4(x + 2y)$, so $x + 2y = \\dfrac{11}{4} \\neq 5$. Parallel and distinct, so no solution.\n\n**Common Mistakes:** Inverting the ratio to solve $\\dfrac{4}{a} = 4$ gives $a = \\dfrac{1}{4}$ — wrong setup. Skipping the constant check could mistake this for the infinitely-many case. Forgetting to reduce $\\dfrac{2}{8}$ first invites arithmetic slips.\n\n**Test Day Takeaway:** When one equation already has clean coefficients, match the easier ratio (here the $y$-coefficients), then carry that factor to the unknown.",
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
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Setting slopes equal gives $-\\dfrac{k}{4} = -\\dfrac{3}{k} \\Rightarrow k^2 = 12 \\Rightarrow k = \\pm 2\\sqrt{3} \\approx \\pm 3.46$. Neither value is a positive integer, so no positive integer makes the system have no solution — choice C.\n\n**The Full Solution:**\nStep 1: Slope of $kx + 4y = 9$ is $-\\dfrac{k}{4}$. Slope of $3x + ky = 12$ is $-\\dfrac{3}{k}$.\nStep 2: Parallel lines have equal slopes: $-\\dfrac{k}{4} = -\\dfrac{3}{k}$.\nStep 3: Cross-multiply: $k \\cdot k = 4 \\cdot 3 \\Rightarrow k^2 = 12 \\Rightarrow k = \\pm 2\\sqrt{3}$.\nStep 4: $2\\sqrt{3} \\approx 3.46$ is irrational, so no integer $k$ satisfies the slope condition. For any positive integer $k$, the slopes differ and the system has a unique solution. The question asks for a positive integer, and none exists.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2\\sqrt{3}$): the real slope-match value, but it isn't a positive integer as the question requires.\n* Choice B ($\\sqrt{12}$): the same value $2\\sqrt{3}$ written as a radical — still not an integer.\n* Choice D ($6$): an integer near $\\sqrt{12}$, but $6^2 = 36 \\neq 12$, so it fails.\n\n**Test Day Takeaway:** When the parameter sits in both coefficient slots, the slope condition becomes $k^2 = \\text{constant}$. Solve, then check whether the result meets the required form — \"none of these\" is sometimes the answer.",
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
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~10s):** Two lines never intersect exactly when they are parallel — same slope. $L_2$ has slope $3$, so $m = 3$.\n\n**The Full Solution:**\nStep 1: Write both lines. $L_1: y = mx + 5$ through $(0, 5)$. $L_2: y = 3x - 2$ through $(0, -2)$.\nStep 2: Lines never intersect when they are parallel and distinct — equal slopes, different $y$-intercepts.\nStep 3: The intercepts ($5$ and $-2$) already differ, so the lines are distinct. Setting slopes equal gives $m = 3$.\nStep 4: Check: with $m = 3$, $L_1: y = 3x + 5$ and $L_2: y = 3x - 2$. Subtracting gives $0 = 7$, a contradiction — they never meet.\n\n**Common Mistakes:** Reporting $5$ or $-2$ (the intercepts). Using $m = -\\dfrac{1}{3}$, the perpendicular slope, which makes the lines cross at one point. Computing $5 - (-2) = 7$ is irrelevant arithmetic.\n\n**Test Day Takeaway:** \"Never intersect,\" \"do not intersect,\" and \"no point in common\" all mean parallel and distinct. Match the slopes; the differing intercepts guarantee no solution.",
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
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Slope $= \\dfrac{11 - 2}{4 - 1} = \\dfrac{9}{3} = 3$, choice A.\n\n**The Full Solution:**\nStep 1: Apply the slope formula $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$ with $(1, 2)$ and $(4, 11)$.\nStep 2: $m = \\dfrac{11 - 2}{4 - 1} = \\dfrac{9}{3} = 3$.\nStep 3: Check: from $(1, 2)$, moving $3$ units right and rising $3$ each time reaches $y = 2 + 3 \\cdot 3 = 11$ at $x = 4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): stopped at the rise without dividing by the run.\n* Choice C ($\\dfrac{1}{3}$): flipped the formula to run over rise.\n* Choice D ($13$): added $4 + 9$ instead of forming the ratio.\n\n**Test Day Takeaway:** Slope is rise over run: $\\dfrac{\\Delta y}{\\Delta x}$. Subtract $y$'s on top, $x$'s on the bottom, in the same order.",
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
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**The correct answer is $-2$.**\n\n**The Fast Way (~10s):** Slope $= \\dfrac{-3 - 5}{4 - 0} = \\dfrac{-8}{4} = -2$.\n\n**The Full Solution:**\nStep 1: Apply $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$ with $(0, 5)$ and $(4, -3)$.\nStep 2: $m = \\dfrac{-3 - 5}{4 - 0} = \\dfrac{-8}{4} = -2$.\nStep 3: Check: from $(0, 5)$ with slope $-2$, after $4$ units of $x$, $y = 5 - 2 \\cdot 4 = -3$.\n\n**Common Mistakes:** Dropping the negative and reporting $2$. Computing $\\dfrac{5 - 3}{4} = 0.5$ by ignoring the sign of $-3$. Either reversal in order is fine if applied to both coordinates, but mixing the order is what causes errors.\n\n**Test Day Takeaway:** A negative slope falls from left to right. Grid-in answers accept the negative sign — enter it.",
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
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Slope $= \\dfrac{8 - 5}{8 - 2} = \\dfrac{3}{6} = \\dfrac{1}{2}$, choice A.\n\n**The Full Solution:**\nStep 1: Apply $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$ with $(2, 5)$ and $(8, 8)$.\nStep 2: $m = \\dfrac{8 - 5}{8 - 2} = \\dfrac{3}{6}$.\nStep 3: Reduce: $\\dfrac{3}{6} = \\dfrac{1}{2}$.\nStep 4: Check: from $(2, 5)$ with slope $\\dfrac{1}{2}$, after $6$ units of $x$, $y = 5 + \\dfrac{1}{2} \\cdot 6 = 8$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): flipped the ratio to $\\dfrac{6}{3}$.\n* Choice C ($3$): reported the rise instead of the slope.\n* Choice D ($6$): reported the run instead of the slope.\n\n**Test Day Takeaway:** Always reduce the slope to lowest terms — $\\dfrac{3}{6}$, $\\dfrac{4}{8}$, and $\\dfrac{5}{10}$ all equal $\\dfrac{1}{2}$.",
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
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**The correct answer is $-1$.**\n\n**The Fast Way (~10s):** Slope $= \\dfrac{-1 - 7}{5 - (-3)} = \\dfrac{-8}{8} = -1$.\n\n**The Full Solution:**\nStep 1: Apply $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$ with $(-3, 7)$ and $(5, -1)$.\nStep 2: Numerator: $-1 - 7 = -8$. Denominator: $5 - (-3) = 5 + 3 = 8$.\nStep 3: $m = \\dfrac{-8}{8} = -1$.\nStep 4: Check with the line $y = -x + 4$: at $x = -3$, $y = 7$; at $x = 5$, $y = -1$. Both points fit.\n\n**Common Mistakes:** Treating $5 - (-3)$ as $5 - 3 = 2$ drops the double negative; the run is $8$. A sign slip on the numerator flips the answer to $+1$. Using a denominator of $2$ gives $-4$.\n\n**Test Day Takeaway:** Subtracting a negative adds: $a - (-b) = a + b$. Negative coordinates widen the run, so handle the signs deliberately.",
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
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Both points have $y = 7$, so the line is horizontal: slope $= \\dfrac{0}{8} = 0$, choice A.\n\n**The Full Solution:**\nStep 1: Apply $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$ with $(2, 7)$ and $(10, 7)$.\nStep 2: $m = \\dfrac{7 - 7}{10 - 2} = \\dfrac{0}{8} = 0$.\nStep 3: The equation is $y = 7$ for every $x$ — a horizontal line with slope $0$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($7$): mistook the constant $y$-value for the slope.\n* Choice C (undefined): confused a horizontal line (slope $0$) with a vertical one.\n* Choice D ($8$): reported the run.\n\n**Test Day Takeaway:** Equal $y$-values give a horizontal line, slope $0$. Equal $x$-values give a vertical line, slope undefined. Don't swap them.",
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
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~10s):** Slope $= \\dfrac{19 - 3}{6 - (-2)} = \\dfrac{16}{8} = 2$.\n\n**The Full Solution:**\nStep 1: Apply $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$ with $(-2, 3)$ and $(6, 19)$.\nStep 2: Numerator: $19 - 3 = 16$. Denominator: $6 - (-2) = 6 + 2 = 8$.\nStep 3: $m = \\dfrac{16}{8} = 2$.\nStep 4: Check with $y = 2x + 7$: at $x = -2$, $y = 3$; at $x = 6$, $y = 19$. Both points fit.\n\n**Common Mistakes:** Treating $6 - (-2)$ as $6 - 2 = 4$ drops the negative; the run is $8$. Reversing only the numerator gives $-2$. Misreducing $\\dfrac{16}{8}$ to $1$ is an arithmetic slip.\n\n**Test Day Takeaway:** $a - (-b) = a + b$. A negative coordinate enlarges the difference — never shrink it.",
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
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~20s):** Set the slope formula to the given slope: $3 = \\dfrac{11 - k}{5 - 2} = \\dfrac{11 - k}{3}$, so $11 - k = 9 \\Rightarrow k = 2$.\n\n**The Full Solution:**\nStep 1: With points $(2, k)$ and $(5, 11)$ and slope $3$, write $3 = \\dfrac{11 - k}{5 - 2} = \\dfrac{11 - k}{3}$.\nStep 2: Multiply both sides by $3$ to clear the fraction: $9 = 11 - k$.\nStep 3: Solve: $k = 11 - 9 = 2$.\nStep 4: Check: slope from $(2, 2)$ to $(5, 11)$ is $\\dfrac{11 - 2}{5 - 2} = \\dfrac{9}{3} = 3$.\n\n**Common Mistakes:** A sign error gives $11 - k = -9 \\Rightarrow k = 20$. Forgetting to multiply the whole numerator by $3$ leaves a wrong equation. Reporting $11$ or $9$ stops at an intermediate value, not $k$.\n\n**Test Day Takeaway:** When a coordinate is unknown but the slope is given, plug into the slope formula and clear the fraction by multiplying by the run first.",
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
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Add $7$ to both sides to get $5x = 25$, then divide by $5$ to get $x = 5$.\n\n**The Full Solution:**\nStep 1: Undo the subtraction. $5x - 7 = 18 \\Rightarrow 5x = 25$.\nStep 2: Undo the multiplication. Divide by $5$: $x = 5$.\nStep 3: Check. $5(5) - 7 = 25 - 7 = 18$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($25$): stops at $5x = 25$ and forgets to divide by $5$.\n* Choice C ($\\frac{11}{5}$): subtracts $7$ instead of adding, giving $5x = 11$.\n* Choice D ($\\frac{18}{5}$): divides $18$ by $5$ before dealing with the $-7$.\n\n**Test Day Takeaway:** Undo the addition or subtraction first, then the multiplication or division. Substitute back to confirm.",
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
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~5s):** Subtract $4$ to get $3x = 18$, then divide by $3$ to get $x = 6$.\n\n**The Full Solution:**\nStep 1: Undo the addition. $3x + 4 = 22 \\Rightarrow 3x = 18$.\nStep 2: Undo the multiplication. Divide by $3$: $x = 6$.\nStep 3: Check. $3(6) + 4 = 18 + 4 = 22$. $\\checkmark$\n\n**Common Mistakes:** Stopping at $3x = 18$ and gridding $18$; adding $4$ instead of subtracting to get $3x = 26$ and $x = \\frac{26}{3}$; dividing $22$ by $3$ before handling the $+4$.\n\n**Test Day Takeaway:** Inverse operations, in order — clear the constant first, then divide by the coefficient.",
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
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Add $3$ to get $\\frac{x}{4} = 8$, then multiply by $4$ to get $x = 32$.\n\n**The Full Solution:**\nStep 1: Undo the subtraction. $\\frac{x}{4} - 3 = 5 \\Rightarrow \\frac{x}{4} = 8$.\nStep 2: Undo the division. Multiply both sides by $4$: $x = 32$.\nStep 3: Check. $\\frac{32}{4} - 3 = 8 - 3 = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): stops at $\\frac{x}{4} = 8$ instead of solving for $x$.\n* Choice C ($\\frac{1}{2}$): divides by $4$ instead of multiplying.\n* Choice D ($2$): computes $\\frac{8}{4} = 2$, the wrong step.\n\n**Test Day Takeaway:** The inverse of \"divide by $4$\" is \"multiply by $4$.\" $\\frac{x}{a} = b \\Rightarrow x = ab$.",
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
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**The correct answer is $-3$.**\n\n**The Fast Way (~10s):** Subtract $7$ to get $-2x = 6$, then divide by $-2$ to get $x = -3$.\n\n**The Full Solution:**\nStep 1: Undo the addition. $7 - 2x = 13 \\Rightarrow -2x = 6$.\nStep 2: Divide by $-2$. Since the coefficient is negative, the result is negative: $x = -3$.\nStep 3: Check. $7 - 2(-3) = 7 + 6 = 13$. $\\checkmark$\n\n**Common Mistakes:** Dropping the negative when dividing and gridding $3$; forgetting to subtract $7$ first and getting $x = -6.5$.\n\n**Test Day Takeaway:** Dividing by a negative coefficient keeps the sign. $-2x = 6 \\Rightarrow x = -3$ — expect a negative answer.",
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
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Divide both sides by $4$ to get $x + 2 = 7$, then subtract $2$ to get $x = 5$.\n\n**The Full Solution:**\nStep 1: Clear the outside coefficient. Divide by $4$: $4(x + 2) = 28 \\Rightarrow x + 2 = 7$.\nStep 2: Subtract $2$: $x = 5$.\nStep 3: Check. $4(5 + 2) = 4 \\cdot 7 = 28$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($7$): stops at $x + 2 = 7$ and reports that.\n* Choice C ($6.5$): divides $26$ by $4$ after a slip.\n* Choice D ($26$): computes $28 - 2 = 26$, ignoring the coefficient.\n\n**Test Day Takeaway:** When a coefficient sits outside parentheses, divide first to clear it — it skips the distribution step.",
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
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~10s):** Multiply by $3$ to get $2x + 1 = 15$, subtract $1$ to get $2x = 14$, then divide by $2$ to get $x = 7$.\n\n**The Full Solution:**\nStep 1: Clear the fraction. Multiply both sides by $3$: $\\frac{2x + 1}{3} = 5 \\Rightarrow 2x + 1 = 15$.\nStep 2: Subtract $1$: $2x = 14$.\nStep 3: Divide by $2$: $x = 7$.\nStep 4: Check. $\\frac{2(7) + 1}{3} = \\frac{15}{3} = 5$. $\\checkmark$\n\n**Common Mistakes:** Distributing the $3$ only onto $2x$; stopping at $2x = 14$ and gridding $14$; dividing by $3$ instead of multiplying.\n\n**Test Day Takeaway:** When the whole left side is divided by a number, multiply both sides by that number first to clear the fraction, then solve the linear equation that remains.",
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
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Add $5$ to get $\\frac{3}{4}x = 12$, then multiply by the reciprocal $\\frac{4}{3}$: $x = 12 \\cdot \\frac{4}{3} = 16$.\n\n**The Full Solution:**\nStep 1: Undo the subtraction. $\\frac{3}{4}x - 5 = 7 \\Rightarrow \\frac{3}{4}x = 12$.\nStep 2: Multiply by the reciprocal of $\\frac{3}{4}$, which is $\\frac{4}{3}$: $x = 12 \\cdot \\frac{4}{3} = \\frac{48}{3} = 16$.\nStep 3: Check. $\\frac{3}{4}(16) - 5 = 12 - 5 = 7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): stops at $\\frac{3}{4}x = 12$ and reports the right side.\n* Choice C ($\\frac{16}{3}$): multiplies $12$ by $\\frac{1}{3}$ (ignoring the $4$) instead of by $\\frac{4}{3}$.\n* Choice D ($9$): treats $\\frac{3}{4}$ of something as $12 - 3$, a guess from misreading the coefficient.\n\n**Test Day Takeaway:** To clear a fractional coefficient like $\\frac{3}{4}$, multiply by its reciprocal $\\frac{4}{3}$ — not just by $4$.",
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
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**The correct answer is $-14$.**\n\n**The Fast Way (~15s):** Subtract $4$ to get $\\frac{x - 6}{5} = -4$, multiply by $5$ to get $x - 6 = -20$, then add $6$ to get $x = -14$.\n\n**The Full Solution:**\nStep 1: Undo the outside constant. $\\frac{x - 6}{5} + 4 = 0 \\Rightarrow \\frac{x - 6}{5} = -4$.\nStep 2: Clear the fraction. Multiply by $5$: $x - 6 = -20$.\nStep 3: Add $6$: $x = -14$.\nStep 4: Check. $\\frac{-14 - 6}{5} + 4 = \\frac{-20}{5} + 4 = -4 + 4 = 0$. $\\checkmark$\n\n**Common Mistakes:** Setting the fraction equal to $+4$ instead of $-4$; stopping at $x - 6 = -20$ and gridding $-20$.\n\n**Test Day Takeaway:** Peel from the outside in — clear the constant outside the fraction, then the fraction itself, then the inside constant.",
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
    explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** The given slope is $2 = \\frac{2}{1}$. The negative reciprocal is $-\\frac{1}{2}$.\n\n**The Full Solution:**\nStep 1: Read the slope. In $y = 2x + 3$, the slope is $2$.\nStep 2: A perpendicular slope is the negative reciprocal: flip $\\frac{2}{1}$ to $\\frac{1}{2}$ and change the sign to get $-\\frac{1}{2}$.\nStep 3: Check. $2 \\cdot \\left(-\\frac{1}{2}\\right) = -1$, which confirms perpendicularity. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{1}{2}$): flips the slope but forgets to change the sign.\n* Choice C ($-2$): changes the sign but does not flip.\n* Choice D ($2$): repeats the original slope, which is parallel, not perpendicular.\n\n**Test Day Takeaway:** Perpendicular slope = negative reciprocal: flip the fraction and change the sign — both moves.",
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
    explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~5s):** The negative reciprocal of $-\\frac{1}{3}$ is $3$: flip to $-3$, change the sign to $+3$.\n\n**The Full Solution:**\nStep 1: Read the slope. The given line $y = -\\frac{1}{3}x + 5$ has slope $-\\frac{1}{3}$.\nStep 2: Take the negative reciprocal. Flipping $-\\frac{1}{3}$ gives $-3$; changing the sign gives $3$.\nStep 3: Check. $\\left(-\\frac{1}{3}\\right) \\cdot 3 = -1$. $\\checkmark$\n\n**Common Mistakes:** Reporting $-3$ (forgetting that flipping a negative and negating yields a positive); reporting $\\frac{1}{3}$ (only flipping the magnitude); reporting $-\\frac{1}{3}$ (the original slope).\n\n**Test Day Takeaway:** Both the sign and the fraction flip. The negative reciprocal of $-\\frac{1}{3}$ is $+3$.",
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
    explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Perpendicular slope is $-\\frac{1}{3}$, and passing through $(0, 4)$ makes the $y$-intercept $4$: $y = -\\frac{1}{3}x + 4$.\n\n**The Full Solution:**\nStep 1: Find the perpendicular slope. The given line $y = 3x - 7$ has slope $3$, so the negative reciprocal is $-\\frac{1}{3}$.\nStep 2: Find the intercept. The point $(0, 4)$ has $x = 0$, so it sits on the $y$-axis — the $y$-intercept is $4$.\nStep 3: Assemble. $y = -\\frac{1}{3}x + 4$.\nStep 4: Check. At $x = 0$, $y = 4$, and slope $-\\frac{1}{3}$ is perpendicular to $3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = 3x + 4$): keeps the original slope $3$ instead of the perpendicular slope.\n* Choice C ($y = \\frac{1}{3}x + 4$): drops the negative sign on the slope.\n* Choice D ($y = -\\frac{1}{3}x - 7$): reuses the original line's intercept $-7$ instead of $4$.\n\n**Test Day Takeaway:** A point $(0, b)$ gives the $y$-intercept directly — just pair it with the slope in slope-intercept form.",
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
    explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $\\frac{5}{2}$.**\n\n**The Fast Way (~15s):** Standard form $Ax + By = C$ has slope $-\\frac{A}{B} = -\\frac{2}{5}$. The negative reciprocal is $\\frac{5}{2}$.\n\n**The Full Solution:**\nStep 1: Find the given slope. Solve $2x + 5y = 10$ for $y$: $5y = -2x + 10 \\Rightarrow y = -\\frac{2}{5}x + 2$, so the slope is $-\\frac{2}{5}$.\nStep 2: Take the negative reciprocal: flip $-\\frac{2}{5}$ to $-\\frac{5}{2}$, change the sign to $\\frac{5}{2}$.\nStep 3: Check. $\\left(-\\frac{2}{5}\\right) \\cdot \\frac{5}{2} = -1$. $\\checkmark$\n\n**Common Mistakes:** Reporting $-\\frac{2}{5}$ (the given slope, not the perpendicular one); reporting $-\\frac{5}{2}$ (flipping but not changing the sign); using slope $+\\frac{A}{B}$ instead of $-\\frac{A}{B}$.\n\n**Test Day Takeaway:** From $Ax + By = C$, the slope is $-\\frac{A}{B}$. Then take the negative reciprocal for the perpendicular slope.",
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
    explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The given slope is $-2$, so the perpendicular slope is $\\frac{1}{2}$. Plug the point $(4,1)$ into $y=\\frac{1}{2}x+b$: $1=2+b$, so $b=-1$. The $y$-intercept is $-1$.\n\n**The Full Solution:**\nStep 1: The line $y=-2x+5$ has slope $-2$. Perpendicular slopes are negative reciprocals, so line $\\ell$ has slope $\\frac{1}{2}$.\nStep 2: Use point-slope through $(4,1)$: $y-1=\\frac{1}{2}(x-4)$.\nStep 3: Distribute and solve for $y$: $y-1=\\frac{1}{2}x-2 \\Rightarrow y=\\frac{1}{2}x-1$.\nStep 4: The $y$-intercept is $-1$, matching Choice A. Check: at $x=4$, $y=2-1=1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): copies the original line's $y$-intercept instead of building the new line.\n* Choice C ($1$): reports the $y$-coordinate of the given point, not the intercept.\n* Choice D ($3$): an arithmetic slip on $\\frac{1}{2}(-4)+1$.\n\n**Test Day Takeaway:** Perpendicular slope is the negative reciprocal. Then push the given point through point-slope form and isolate $y$ to read off the intercept.",
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
    explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~20s):** The negative reciprocal of $-\\frac{1}{4}$ is $4$. Through the origin the line is $y=4x$, so at $x=2$, $y=8$.\n\n**The Full Solution:**\nStep 1: Line $k$ is perpendicular to a slope of $-\\frac{1}{4}$, so its slope is $4$.\nStep 2: \"Passes through the origin\" means the $y$-intercept is $0$, so the equation is $y=4x$.\nStep 3: At $x=2$: $y=4\\cdot 2=8$.\n\n**Common Mistakes:** Using the original slope and getting $y=-\\frac{1}{4}(2)=-\\frac{1}{2}$; stopping at the slope $4$ instead of evaluating at $x=2$.\n\n**Test Day Takeaway:** \"Through the origin\" forces $b=0$, so the equation is just $y=mx$. Find the perpendicular slope, then plug in the requested $x$.",
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
    explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Rewrite $4x-3y=12$ as $y=\\frac{4}{3}x-4$, so its slope is $\\frac{4}{3}$ and the perpendicular slope is $-\\frac{3}{4}$. Through $(2,-1)$: $-1=-\\frac{3}{4}(2)+b \\Rightarrow b=\\frac{1}{2}$.\n\n**The Full Solution:**\nStep 1: Solve for $y$: $4x-3y=12 \\Rightarrow -3y=-4x+12 \\Rightarrow y=\\frac{4}{3}x-4$. The slope is $\\frac{4}{3}$.\nStep 2: The perpendicular slope is $-\\frac{3}{4}$.\nStep 3: Point-slope through $(2,-1)$: $y+1=-\\frac{3}{4}(x-2)$.\nStep 4: Expand: $y+1=-\\frac{3}{4}x+\\frac{3}{2} \\Rightarrow y=-\\frac{3}{4}x+\\frac{1}{2}$.\nStep 5: The $y$-intercept is $\\frac{1}{2}$, which is Choice A. Check: at $x=2$, $y=-\\frac{3}{2}+\\frac{1}{2}=-1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{1}{2}$): a sign error when combining $\\frac{3}{2}-1$.\n* Choice C ($-4$): reuses the original line's $y$-intercept.\n* Choice D ($\\frac{3}{2}$): stops at the constant $\\frac{3}{2}$ before subtracting the $1$.\n\n**Test Day Takeaway:** Put the standard-form line into $y=mx+b$ first to read its slope cleanly, then build the perpendicular line through the given point and watch the fraction arithmetic.",
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
    explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $\\frac{7}{2}$.**\n\n**The Fast Way (~10s):** Perpendicular slopes are negative reciprocals: flip $-\\frac{2}{7}$ and negate to get $\\frac{7}{2}$.\n\n**The Full Solution:**\nStep 1: Perpendicular slopes multiply to $-1$: $k\\cdot\\left(-\\frac{2}{7}\\right)=-1$.\nStep 2: Solve: $-\\frac{2k}{7}=-1 \\Rightarrow 2k=7 \\Rightarrow k=\\frac{7}{2}$.\nStep 3: Check: $\\frac{7}{2}\\cdot\\left(-\\frac{2}{7}\\right)=-1$. $\\checkmark$\n\n**Common Mistakes:** Reporting $-\\frac{7}{2}$ (flipping but forgetting to negate); reporting $-\\frac{2}{7}$ or $\\frac{2}{7}$ (just restating the given slope or its absolute value).\n\n**Test Day Takeaway:** Perpendicular slope $=$ negative reciprocal: flip the fraction and change the sign. Equivalently, $m_1\\cdot m_2=-1$.",
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
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way:** Add $7$ to both sides: $x=12+7=19$.\n\n**The Full Solution:** Undo the $-7$ by adding $7$: $x-7=12 \\Rightarrow x=19$. Check: $19-7=12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): subtracts $7$ instead of adding it.\n* Choice C ($-5$): subtracts and drops the sign.\n* Choice D ($84$): multiplies $12$ and $7$ instead of adding.\n\n**Test Day Takeaway:** Undo subtraction with addition. Move the constant to the other side by reversing its operation.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-186', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $x + 9 = 4$?',
    correctAnswer: '-5',
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**The correct answer is $-5$.**\n\n**The Fast Way:** Subtract $9$ from both sides: $x=4-9=-5$.\n\n**The Full Solution:** Undo the $+9$ by subtracting $9$: $x+9=4 \\Rightarrow x=4-9=-5$. Check: $-5+9=4$. $\\checkmark$\n\n**Common Mistakes:** Reporting $5$ (dropping the negative sign); reporting $13$ (adding $9$ instead of subtracting).\n\n**Test Day Takeaway:** Undo addition with subtraction. A negative result is perfectly valid.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-187', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $5x = 35$?',
    choices: [{ id: 'A', text: '$7$' }, { id: 'B', text: '$30$' }, { id: 'C', text: '$40$' }, { id: 'D', text: '$175$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way:** Divide both sides by $5$: $x=\\frac{35}{5}=7$.\n\n**The Full Solution:** Undo the multiplication by $5$ with division: $5x=35 \\Rightarrow x=7$. Check: $5\\cdot 7=35$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($30$): subtracts $5$ instead of dividing.\n* Choice C ($40$): adds $5$ instead of dividing.\n* Choice D ($175$): multiplies $35$ by $5$ instead of dividing.\n\n**Test Day Takeaway:** Undo multiplication with division. Divide both sides by the coefficient.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-188', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $\\dfrac{x}{6} = 4$?',
    correctAnswer: '24',
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**The correct answer is $24$.**\n\n**The Fast Way:** Multiply both sides by $6$: $x=4\\cdot 6=24$.\n\n**The Full Solution:** Undo the division by $6$ with multiplication: $\\frac{x}{6}=4 \\Rightarrow x=24$. Check: $\\frac{24}{6}=4$. $\\checkmark$\n\n**Common Mistakes:** Reporting $\\frac{4}{6}$ (dividing instead of multiplying); reporting $10$ (adding $6$ instead).\n\n**Test Day Takeaway:** Undo division with multiplication. Multiply both sides by the denominator.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-189', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $-3x = 21$?',
    choices: [{ id: 'A', text: '$-7$' }, { id: 'B', text: '$7$' }, { id: 'C', text: '$-63$' }, { id: 'D', text: '$18$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way:** Divide both sides by $-3$: $x=\\frac{21}{-3}=-7$.\n\n**The Full Solution:** Undo the multiplication by $-3$ with division: $-3x=21 \\Rightarrow x=-7$. Check: $-3\\cdot(-7)=21$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($7$): drops the negative sign when dividing.\n* Choice C ($-63$): multiplies by $-3$ instead of dividing.\n* Choice D ($18$): subtracts $3$ instead of dividing.\n\n**Test Day Takeaway:** Dividing a positive by a negative gives a negative: $\\frac{+21}{-3}=-7$. Keep the sign rules straight.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-190', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $\\dfrac{2}{3}x = 18$?',
    correctAnswer: '27',
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**The correct answer is $27$.**\n\n**The Fast Way:** Multiply both sides by the reciprocal $\\frac{3}{2}$: $x=18\\cdot\\frac{3}{2}=27$.\n\n**The Full Solution:** To undo the coefficient $\\frac{2}{3}$, multiply by its reciprocal $\\frac{3}{2}$: $\\frac{2}{3}x=18 \\Rightarrow x=18\\cdot\\frac{3}{2}=27$. Check: $\\frac{2}{3}(27)=18$. $\\checkmark$\n\n**Common Mistakes:** Reporting $12$ (multiplying by $\\frac{2}{3}$ instead of its reciprocal); reporting $36$ (multiplying by $2$ but forgetting to divide by $3$).\n\n**Test Day Takeaway:** To clear a fractional coefficient, multiply both sides by its reciprocal.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-191', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $x + \\dfrac{3}{4} = \\dfrac{5}{2}$?',
    choices: [{ id: 'A', text: '$\\dfrac{7}{4}$' }, { id: 'B', text: '$\\dfrac{13}{4}$' }, { id: 'C', text: '$\\dfrac{2}{4}$' }, { id: 'D', text: '$\\dfrac{15}{8}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way:** $x=\\frac{5}{2}-\\frac{3}{4}=\\frac{10}{4}-\\frac{3}{4}=\\frac{7}{4}$.\n\n**The Full Solution:**\nStep 1: Subtract $\\frac{3}{4}$ from both sides: $x=\\frac{5}{2}-\\frac{3}{4}$.\nStep 2: Use a common denominator of $4$: $\\frac{5}{2}=\\frac{10}{4}$.\nStep 3: Subtract: $x=\\frac{10-3}{4}=\\frac{7}{4}$, which is Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{13}{4}$): adds $\\frac{3}{4}$ instead of subtracting it.\n* Choice C ($\\frac{2}{4}$): subtracts numerators and denominators directly without a common denominator.\n* Choice D ($\\frac{15}{8}$): multiplies the fractions instead of subtracting.\n\n**Test Day Takeaway:** To add or subtract fractions, convert to a common denominator first, then combine the numerators.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-192', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $-\\dfrac{x}{4} = -3$?',
    correctAnswer: '12',
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**The correct answer is $12$.**\n\n**The Fast Way:** Multiply both sides by $-4$: $x=(-3)(-4)=12$.\n\n**The Full Solution:** The coefficient on $x$ is $-\\frac{1}{4}$, so multiply both sides by $-4$: $-\\frac{x}{4}=-3 \\Rightarrow x=(-3)(-4)=12$. Check: $-\\frac{12}{4}=-3$. $\\checkmark$\n\n**Common Mistakes:** Reporting $-12$ (clearing the fraction but losing one of the negatives); reporting $-1.5$ (mixing up multiplication and division).\n\n**Test Day Takeaway:** Two negatives multiply to a positive. Multiply by the full reciprocal, including its sign.",
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
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Both equations are already solved for $y$, so set the right sides equal: $3x - 1 = x + 5 \\Rightarrow 2x = 6 \\Rightarrow x = 3$.\n\n**The Full Solution:**\nStep 1: Since $y = 3x - 1$ and $y = x + 5$, the two right-hand sides must be equal: $3x - 1 = x + 5$.\nStep 2: Subtract $x$ from both sides: $2x - 1 = 5$. Add $1$: $2x = 6$. Divide: $x = 3$.\nStep 3: Check by finding $y$ in each: $y = 3(3) - 1 = 8$ and $y = 3 + 5 = 8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): that is the $y$-value, not the $x$ the question asks for.\n* Choice C ($-3$): a sign slip when moving $x$ across the equals sign.\n* Choice D ($0$): stopping before fully isolating $x$.\n\n**Test Day Takeaway:** When both equations are in $y = \\ldots$ form, set the right sides equal directly — no substitution work needed.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-system-by-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-194', domain: 'algebra', skills: ['substitution-method'], difficulty: 'easy', type: 'fill-in',
    question: 'If $y = 2x + 3$ and $y = 5x$, what is the value of $x$?',
    correctAnswer: '1',
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**The correct answer is $1$.**\n\n**The Fast Way (~15s):** Both expressions equal $y$, so $2x + 3 = 5x \\Rightarrow 3 = 3x \\Rightarrow x = 1$.\n\n**The Full Solution:**\nStep 1: Set the right sides equal: $2x + 3 = 5x$.\nStep 2: Subtract $2x$ from both sides: $3 = 3x$. Divide by $3$: $x = 1$.\nStep 3: Check: $y = 5(1) = 5$ and $y = 2(1) + 3 = 5$. $\\checkmark$\n\n**Common Mistakes:** Reporting $5$ (that is $y$, not $x$); reporting $3$ (stopping at the intermediate step $3 = 3x$).\n\n**Test Day Takeaway:** Two expressions equal to the same $y$ can be set equal to each other, then isolate $x$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-system-by-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-195', domain: 'algebra', skills: ['substitution-method'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The system of equations $y = 4x - 7$ and $y = -2x + 5$ has solution $(x, y)$. What is the value of $y$?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$-1$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Set the right sides equal: $4x - 7 = -2x + 5 \\Rightarrow 6x = 12 \\Rightarrow x = 2$. Then $y = -2(2) + 5 = 1$.\n\n**The Full Solution:**\nStep 1: Both equations equal $y$, so $4x - 7 = -2x + 5$.\nStep 2: Add $2x$ to both sides: $6x - 7 = 5$. Add $7$: $6x = 12$. Divide: $x = 2$.\nStep 3: Substitute to get $y$: $y = 4(2) - 7 = 1$. Confirm in the other equation: $-2(2) + 5 = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): that is the $x$-value, but the question asks for $y$.\n* Choice C ($-1$): a sign error when evaluating $y$.\n* Choice D ($3$): an arithmetic slip in the final substitution.\n\n**Test Day Takeaway:** After solving for $x$, re-read the question — here it asks for $y$, so substitute back before answering.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-system-by-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-196', domain: 'algebra', skills: ['substitution-method'], difficulty: 'medium', type: 'fill-in',
    question: 'If $y = -x + 10$ and $y = 3x - 6$, what is the value of $x$?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~15s):** Both expressions equal $y$, so $-x + 10 = 3x - 6 \\Rightarrow 16 = 4x \\Rightarrow x = 4$.\n\n**The Full Solution:**\nStep 1: Set the right sides equal: $-x + 10 = 3x - 6$.\nStep 2: Add $x$ to both sides: $10 = 4x - 6$. Add $6$: $16 = 4x$. Divide: $x = 4$.\nStep 3: Check: $y = -4 + 10 = 6$ and $y = 3(4) - 6 = 6$. $\\checkmark$\n\n**Common Mistakes:** Reporting $6$ (that is $y$, not $x$); a sign error giving $x = -4$.\n\n**Test Day Takeaway:** Gather all $x$ terms on one side and constants on the other, watching every sign as you move terms.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-system-by-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-197', domain: 'algebra', skills: ['substitution-method'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For the system $y = \\dfrac{1}{2}x + 4$ and $y = 2x - 2$, what is the value of $x + y$?',
    choices: [{ id: 'A', text: '$10$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$6$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Set the right sides equal: $\\frac{1}{2}x + 4 = 2x - 2 \\Rightarrow 6 = \\frac{3}{2}x \\Rightarrow x = 4$. Then $y = 2(4) - 2 = 6$, so $x + y = 10$.\n\n**The Full Solution:**\nStep 1: Both equations equal $y$, so $\\frac{1}{2}x + 4 = 2x - 2$.\nStep 2: Multiply every term by $2$ to clear the fraction: $x + 8 = 4x - 4$.\nStep 3: Solve: $12 = 3x \\Rightarrow x = 4$. Then $y = 2(4) - 2 = 6$, so $x + y = 4 + 6 = 10$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): that is $x$ alone, not the requested sum.\n* Choice C ($6$): that is $y$ alone.\n* Choice D ($8$): an arithmetic slip in the sum or in solving for $x$.\n\n**Test Day Takeaway:** When asked for $x + y$, solve the system fully, then add. Clearing fractions first keeps the algebra clean.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-system-by-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-198', domain: 'algebra', skills: ['substitution-method'], difficulty: 'medium', type: 'fill-in',
    question: 'The lines $y = 3x + 2$ and $y = -x + 10$ intersect at point $(a, b)$. What is the value of $b$?',
    correctAnswer: '8',
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~20s):** The lines meet where their $y$-values match: $3x + 2 = -x + 10 \\Rightarrow 4x = 8 \\Rightarrow x = 2$. Then $b = 3(2) + 2 = 8$.\n\n**The Full Solution:**\nStep 1: At the intersection both equations give the same $y$, so $3x + 2 = -x + 10$.\nStep 2: Add $x$ to both sides: $4x + 2 = 10$. Subtract $2$: $4x = 8$. Divide: $x = 2$.\nStep 3: Find $b$, the shared $y$-value: $b = 3(2) + 2 = 8$. Confirm: $-2 + 10 = 8$. $\\checkmark$\n\n**Common Mistakes:** Reporting $2$ (that is $a$, the $x$-coordinate); reporting $10$ (the $y$-intercept of the second line).\n\n**Test Day Takeaway:** The intersection of two lines is the system's solution; the question's $b$ is the $y$-value at the shared $x$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-system-by-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-199', domain: 'algebra', skills: ['substitution-method'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The system of equations $y = ax + 5$ and $y = 3x + b$ has the solution $(2, 11)$. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$8$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The point $(2, 11)$ satisfies both equations. From the first, $11 = 2a + 5 \\Rightarrow a = 3$. From the second, $11 = 6 + b \\Rightarrow b = 5$. So $a + b = 8$.\n\n**The Full Solution:**\nStep 1: Plug $(2, 11)$ into $y = ax + 5$: $11 = a(2) + 5 \\Rightarrow 2a = 6 \\Rightarrow a = 3$.\nStep 2: Plug $(2, 11)$ into $y = 3x + b$: $11 = 3(2) + b \\Rightarrow 11 = 6 + b \\Rightarrow b = 5$.\nStep 3: Add the parameters: $a + b = 3 + 5 = 8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): that is $b$ alone.\n* Choice C ($11$): that is the given $y$-value, not $a + b$.\n* Choice D ($3$): that is $a$ alone.\n\n**Test Day Takeaway:** When the solution point is given and the parameters are unknown, substitute the point into each equation and solve for one unknown at a time.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-system-by-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-200', domain: 'algebra', skills: ['substitution-method'], difficulty: 'hard', type: 'fill-in',
    question: 'The system $y = kx - 2$ and $y = -2x + 6$ has solution $(2, 2)$. What is the value of $k$?',
    correctAnswer: '2',
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~15s):** The point $(2, 2)$ lies on $y = kx - 2$, so $2 = 2k - 2 \\Rightarrow 2k = 4 \\Rightarrow k = 2$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 2$ and $y = 2$ into the equation with the parameter: $2 = k(2) - 2$.\nStep 2: Add $2$ to both sides: $4 = 2k$. Divide by $2$: $k = 2$.\nStep 3: Confirm $(2, 2)$ also fits the second equation: $-2(2) + 6 = 2$. $\\checkmark$\n\n**Common Mistakes:** Reporting $4$ (stopping at $2k = 4$ without dividing); substituting into the equation that has no $k$.\n\n**Test Day Takeaway:** The solution point satisfies both equations — choose the one containing the unknown parameter and substitute.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-system-by-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 9/3: slope-as-rate-of-change-in-context (8 items) =====
  // 5 test occurrences across M2Easy variants.
  { id: 'bank-alg-201', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A linear model $\\hat{y} = 0.4x + 12$ predicts a person\'s weekly cost in dollars from $x$ miles driven. By how much does the predicted cost increase for each additional mile driven?',
    choices: [{ id: 'A', text: '$\\$0.40$' }, { id: 'B', text: '$\\$12$' }, { id: 'C', text: '$\\$12.40$' }, { id: 'D', text: '$\\$0.04$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** In $\\hat{y} = 0.4x + 12$, the slope $0.4$ is the predicted change in cost per additional mile, so the cost rises by $\\$0.40$ per mile.\n\n**The Full Solution:**\nStep 1: The model has the form $\\hat{y} = mx + b$ with $m = 0.4$ and $b = 12$.\nStep 2: The slope $m$ gives the change in $\\hat{y}$ for each one-unit increase in $x$ (one mile).\nStep 3: So each extra mile adds $0.4$ dollars $= \\$0.40$ to the predicted cost.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$12$): that is the intercept — the cost at $0$ miles, not the per-mile rate.\n* Choice C ($\\$12.40$): that is $\\hat{y}(1)$, the total predicted cost at $1$ mile.\n* Choice D ($\\$0.04$): a misplaced decimal point on the slope.\n\n**Test Day Takeaway:** In $\\hat{y} = mx + b$, the slope $m$ is the per-unit predicted change in $y$; the intercept $b$ is the starting value.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-as-rate-of-change-in-context', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-202', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'easy', type: 'fill-in',
    question: 'A linear model predicting MPG from vehicle weight is $\\hat{y} = -0.005x + 50$. By how much does the predicted MPG decrease for each additional pound of weight?',
    correctAnswer: '0.005',
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $0.005$.**\n\n**The Fast Way (~10s):** In $\\hat{y} = -0.005x + 50$, the slope is $-0.005$. The predicted MPG drops by $0.005$ for each additional pound.\n\n**The Full Solution:**\nStep 1: The model is in $\\hat{y} = mx + b$ form with slope $m = -0.005$.\nStep 2: A negative slope means MPG decreases as weight rises; the size of that decrease per pound is $|{-0.005}| = 0.005$.\n\n**Common Mistakes:** Answering $-0.005$ (the question asks how much it decreases, which is the positive magnitude); reading the intercept $50$ instead of the slope.\n\n**Test Day Takeaway:** \"By how much does it decrease\" asks for the magnitude of the slope — report the size, not the sign.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-as-rate-of-change-in-context', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-203', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The scatterplot shows plant height (in centimeters) versus days of growth, along with the line of best fit $\\hat{y} = 2.5x + 4$. What does the slope of $2.5$ represent?',
    diagram: { type: 'scatterplot', params: { points: [[1,8],[2,7],[3,13],[4,14],[5,15],[6,21],[7,19],[8,26],[9,25],[10,30]], xMin: 0, xMax: 10, yMin: 0, yMax: 32, xGridStep: 1, yGridStep: 4, xLabelStep: 2, yLabelStep: 8, xLabel: 'Days of growth', yLabel: 'Plant height (cm)', bestFitLine: { slope: 2.5, intercept: 4 } } },
    choices: [{ id: 'A', text: 'The predicted growth in centimeters per day' }, { id: 'B', text: 'The initial height in centimeters' }, { id: 'C', text: 'The number of days to grow $1$ cm' }, { id: 'D', text: 'The total height after $4$ days' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** In $\\hat{y} = 2.5x + 4$, the slope $2.5$ is the predicted change in height per day, i.e. the predicted growth in centimeters per day.\n\n**The Full Solution:**\nStep 1: With $x$ in days and $\\hat{y}$ in centimeters, the slope carries units of cm per day.\nStep 2: The slope $2.5$ therefore means the plant is predicted to grow $2.5$ cm for each additional day.\n\n**Why the wrong answers are tempting:**\n* Choice B: the initial height is the intercept $4$, not the slope.\n* Choice C: this inverts the rate — $2.5$ is cm per day, not days per cm.\n* Choice D: a total after $4$ days has no connection to the slope.\n\n**Test Day Takeaway:** Slope is the rate of change of the response variable per one-unit change in the predictor — here, centimeters per day.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-as-rate-of-change-in-context', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-204', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'medium', type: 'fill-in',
    question: 'The scatterplot shows test scores versus hours studied for a group of students. The line of best fit is $\\hat{y} = 4.2x + 60$. By how many points does the predicted score increase for each additional hour studied?',
    diagram: { type: 'scatterplot', params: { points: [[1,62],[2,72],[3,68],[4,80],[5,78],[6,89],[7,85],[8,96],[9,95],[10,100]], xMin: 0, xMax: 10, yMin: 50, yMax: 110, xGridStep: 1, yGridStep: 5, xLabelStep: 2, yLabelStep: 10, xLabel: 'Hours studied', yLabel: 'Test score', bestFitLine: { slope: 4.2, intercept: 60 } } },
    correctAnswer: '4.2',
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $4.2$.**\n\n**The Fast Way (~10s):** In $\\hat{y} = 4.2x + 60$, the slope $4.2$ is the predicted point increase per additional hour studied.\n\n**The Full Solution:**\nStep 1: With $x$ in hours studied and $\\hat{y}$ the predicted score, the slope gives points per hour.\nStep 2: The slope $4.2$ means each additional study hour adds a predicted $4.2$ points.\n\n**Common Mistakes:** Answering $60$ (the intercept — the predicted score at $0$ hours); confusing the slope with a total score.\n\n**Test Day Takeaway:** The per-unit predicted change is always the slope coefficient, not the intercept.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-as-rate-of-change-in-context', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-205', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A best-fit line $\\hat{y} = -3x + 100$ predicts a population in thousands, where $x$ is years since 2020. What does $-3$ represent?',
    choices: [{ id: 'A', text: 'The population decreases by $3{,}000$ per year' }, { id: 'B', text: 'The population in 2020 is $100{,}000$' }, { id: 'C', text: 'The population increases by $3{,}000$ per year' }, { id: 'D', text: 'The population reaches zero in $3$ years' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The slope is the change in $\\hat{y}$ per one-unit increase in $x$. Here $\\hat{y}$ is in thousands and $x$ is years, so a slope of $-3$ means the population falls by $3$ thousand, or $3{,}000$, each year.\n\n**The Full Solution:**\nStep 1: In $\\hat{y}=-3x+100$, the coefficient of $x$ is the slope, $-3$.\nStep 2: The slope tells you how $\\hat{y}$ changes for each $+1$ in $x$. Since $x$ is years since 2020, that is a change per year.\nStep 3: The negative sign means a decrease, and the units of $\\hat{y}$ are thousands, so the predicted population drops by $3{,}000$ per year.\n\n**Why the wrong answers are tempting:**\n* Choice B ($100{,}000$ in 2020): that is the $y$-intercept ($100$ thousand at $x=0$), not the slope.\n* Choice C (increases by $3{,}000$): ignores the negative sign on the slope.\n* Choice D (reaches zero in $3$ years): misreads $-3$ as a time rather than a rate.\n\n**Test Day Takeaway:** Slope is the change in the predicted value per one-unit change in the input. Track the sign (up or down) and the units of $y$ — if $y$ is in thousands, scale the slope to thousands.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-as-rate-of-change-in-context', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-206', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'medium', type: 'fill-in',
    question: 'A linear model for the cost of producing $x$ widgets is $\\hat{C} = 8x + 200$. By how many dollars does the predicted cost increase per additional widget?',
    correctAnswer: '8',
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~10s):** In $\\hat{C}=8x+200$, the slope $8$ is the cost added per one more widget — the marginal cost. So the predicted cost rises by $\\$8$ per additional widget.\n\n**The Full Solution:**\nStep 1: The coefficient of $x$ in $\\hat{C}=8x+200$ is the slope, $8$.\nStep 2: Slope = change in $\\hat{C}$ per $+1$ in $x$. Each extra widget adds $\\$8$ to the predicted cost.\n\n**Common Mistakes:** Reporting $200$ (the fixed cost, or $y$-intercept) instead of the per-widget rate.\n\n**Test Day Takeaway:** For a cost model $C=mx+b$, the slope $m$ is the marginal (per-unit) cost and the intercept $b$ is the fixed cost.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-as-rate-of-change-in-context', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-207', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The scatterplot below shows the relationship between $x$ and $y$. The equation of the line of best fit is $\\hat{y} = -0.25x + 80$. Which of the following best describes the meaning of $-0.25$?',
    diagram: { type: 'scatterplot', params: { points: [[0,82],[5,77],[10,79],[15,75],[20,76],[25,72],[30,73],[35,69],[40,68]], xMin: 0, xMax: 40, yMin: 60, yMax: 90, xGridStep: 5, yGridStep: 5, xLabelStep: 10, yLabelStep: 5, bestFitLine: { slope: -0.25, intercept: 80 } } },
    choices: [{ id: 'A', text: 'For each additional unit of $x$, $y$ is predicted to decrease by $0.25$ units.' }, { id: 'B', text: 'The minimum value of $y$ is $-0.25$.' }, { id: 'C', text: 'For each additional unit of $y$, $x$ is predicted to decrease by $0.25$ units.' }, { id: 'D', text: '$y$ equals $-0.25$ when $x = 1$.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The slope $-0.25$ is the predicted change in $y$ for each one-unit increase in $x$. Negative means $y$ goes down, so $y$ is predicted to decrease by $0.25$ for each additional unit of $x$.\n\n**The Full Solution:**\nStep 1: In $\\hat{y}=-0.25x+80$, the coefficient of $x$ is the slope, $-0.25$.\nStep 2: Slope describes how $y$ responds to $x$: per $+1$ in $x$, $\\hat{y}$ changes by $-0.25$, a decrease of $0.25$ units.\n\n**Why the wrong answers are tempting:**\n* Choice B (minimum of $y$ is $-0.25$): confuses the slope with a $y$-value; a line has no minimum.\n* Choice C (per unit of $y$, $x$ decreases by $0.25$): swaps the roles of $x$ and $y$. Slope runs from $x$ to $y$, not the reverse.\n* Choice D ($y=-0.25$ when $x=1$): plugging in $x=1$ gives $\\hat{y}=79.75$, not $-0.25$; this misreads slope as an output value.\n\n**Test Day Takeaway:** Slope is the change in $y$ per one-unit change in $x$ — direction is from $x$ to $y$, with the sign telling you increase or decrease.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-as-rate-of-change-in-context', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-208', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'hard', type: 'fill-in',
    question: 'A best-fit line $\\hat{y} = 1.6x + 5$ models monthly revenue (in thousands) versus ad spend (in thousands). By how many dollars does revenue rise for each additional dollar of ad spend?',
    correctAnswer: '1.6',
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $1.6$.**\n\n**The Fast Way (~15s):** The slope $1.6$ is in (thousands of revenue) per (thousands of ad spend). Because both axes use the same scale unit, the thousands cancel: revenue rises $\\$1.6$ for each $\\$1$ of ad spend.\n\n**The Full Solution:**\nStep 1: In $\\hat{y}=1.6x+5$, the slope is $1.6$, the change in revenue per one-unit change in ad spend.\nStep 2: One unit of $x$ is one thousand dollars of ad spend, and one unit of $y$ is one thousand dollars of revenue.\nStep 3: A slope of $\\frac{1.6 \\text{ thousand}}{1 \\text{ thousand}}=1.6$, so each $\\$1$ of ad spend adds $\\$1.6$ of revenue.\n\n**Common Mistakes:** Reporting $1{,}600$ by scaling only one axis to dollars; or reporting $5$, which is the $y$-intercept (fixed revenue), not the rate.\n\n**Test Day Takeaway:** When both axes share the same scaled unit, the slope is a pure ratio — it holds at the dollar level just as at the thousands level.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-as-rate-of-change-in-context', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 9/4: reading-slope-intercept-form (8 items) =====
  // 5 test occurrences across M2Easy variants.
  { id: 'bank-alg-209', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the slope of the line $y = -4x + 9$?',
    choices: [{ id: 'A', text: '$-4$' }, { id: 'B', text: '$9$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$\\dfrac{9}{4}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** In $y=mx+b$, the slope $m$ is the coefficient of $x$, taken with its sign. Here that coefficient is $-4$.\n\n**The Full Solution:**\nStep 1: Match $y=-4x+9$ to $y=mx+b$: $m=-4$, $b=9$.\nStep 2: The slope is $m=-4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): that is $b$, the $y$-intercept, not the slope.\n* Choice C ($4$): drops the negative sign on the slope.\n* Choice D ($\\frac{9}{4}$): the $x$-intercept (set $y=0$: $x=\\frac{9}{4}$), not the slope.\n\n**Test Day Takeaway:** In $y=mx+b$, the slope is the signed coefficient of $x$ and the $y$-intercept is the constant $b$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reading-slope-intercept-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-210', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'easy', type: 'fill-in',
    question: 'What is the $y$-intercept of the line $y = 7x - 3$?',
    correctAnswer: '-3',
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**The correct answer is $-3$.**\n\n**The Fast Way (~5s):** In $y=mx+b$, the $y$-intercept is the constant term $b$. Here $b=-3$.\n\n**The Full Solution:**\nStep 1: Match $y=7x-3$ to $y=mx+b$: $m=7$, $b=-3$.\nStep 2: The $y$-intercept is $b=-3$ (the value of $y$ when $x=0$).\n\n**Common Mistakes:** Reporting $7$ (the slope) instead of the intercept, or dropping the negative sign to write $3$.\n\n**Test Day Takeaway:** In $y=mx+b$, the constant $b$ is the $y$-intercept — keep its sign.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reading-slope-intercept-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-211', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In the equation $y = \\dfrac{2}{3}x + 5$, what is the value of the slope?',
    choices: [{ id: 'A', text: '$\\dfrac{2}{3}$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$\\dfrac{3}{2}$' }, { id: 'D', text: '$\\dfrac{2}{5}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** In $y=mx+b$, the slope is the coefficient of $x$. Here that is $\\frac{2}{3}$.\n\n**The Full Solution:**\nStep 1: Match $y=\\frac{2}{3}x+5$ to $y=mx+b$: $m=\\frac{2}{3}$, $b=5$.\nStep 2: The slope is $m=\\frac{2}{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): that is the $y$-intercept $b$, not the slope.\n* Choice C ($\\frac{3}{2}$): flips the fraction — that would be a perpendicular-style move, not the slope.\n* Choice D ($\\frac{2}{5}$): mixes the numerator of the slope with the intercept.\n\n**Test Day Takeaway:** A slope can be a fraction; read the coefficient of $x$ exactly as written — don't invert it.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reading-slope-intercept-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-212', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'medium', type: 'fill-in',
    question: 'What is the slope of the line $y = -\\dfrac{x}{5} + 8$?',
    correctAnswer: '-1/5',
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**The correct answer is $-\\frac{1}{5}$.**\n\n**The Fast Way (~10s):** Rewrite $-\\frac{x}{5}$ as $-\\frac{1}{5}x$. The coefficient of $x$ is the slope, $-\\frac{1}{5}$.\n\n**The Full Solution:**\nStep 1: $\\frac{x}{5}$ means $\\frac{1}{5}x$, so $-\\frac{x}{5}=-\\frac{1}{5}x$.\nStep 2: Now $y=-\\frac{1}{5}x+8$ matches $y=mx+b$ with $m=-\\frac{1}{5}$.\nStep 3: The slope is $-\\frac{1}{5}$.\n\n**Common Mistakes:** Writing $-5$ by treating the $5$ as the coefficient, or dropping the negative sign to get $\\frac{1}{5}$.\n\n**Test Day Takeaway:** A variable over a number is a fractional coefficient: $\\frac{x}{5}=\\frac{1}{5}x$. Carry the sign through.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reading-slope-intercept-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-213', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In which of the following equations is the slope $-2$ and the $y$-intercept $5$?',
    choices: [{ id: 'A', text: '$y = -2x + 5$' }, { id: 'B', text: '$y = 5x - 2$' }, { id: 'C', text: '$y = 2x - 5$' }, { id: 'D', text: '$y = -5x + 2$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** You want $y=mx+b$ with $m=-2$ and $b=5$. Plug in: $y=-2x+5$, which is Choice A.\n\n**The Full Solution:**\nStep 1: Slope-intercept form is $y=mx+b$, where $m$ is the slope and $b$ is the $y$-intercept.\nStep 2: Set $m=-2$ (coefficient of $x$) and $b=5$ (constant): $y=-2x+5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($y=5x-2$): swaps the slope and intercept ($m=5$, $b=-2$).\n* Choice C ($y=2x-5$): drops the negative on the slope and the positive on the intercept.\n* Choice D ($y=-5x+2$): swaps slope and intercept with $-5$ and $2$.\n\n**Test Day Takeaway:** Map directly: the coefficient of $x$ is the slope, the lone constant is the $y$-intercept — match both, signs included.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reading-slope-intercept-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-214', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'medium', type: 'fill-in',
    question: 'What is the $y$-intercept of the line $y = \\dfrac{3}{4}x$?',
    correctAnswer: '0',
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**The correct answer is $0$.**\n\n**The Fast Way (~5s):** Write $y=\\frac{3}{4}x$ as $y=\\frac{3}{4}x+0$. With no constant term, $b=0$, so the $y$-intercept is $0$.\n\n**The Full Solution:**\nStep 1: Compare $y=\\frac{3}{4}x$ to $y=mx+b$. There is no constant, so $b=0$.\nStep 2: The $y$-intercept is $0$ — the line passes through the origin $(0,0)$. Check: at $x=0$, $y=\\frac{3}{4}(0)=0$.\n\n**Common Mistakes:** Reporting $\\frac{3}{4}$ (the slope) as the intercept, or assuming a missing constant means \"no intercept\" rather than $0$.\n\n**Test Day Takeaway:** No constant term in $y=mx+b$ means $b=0$: the line goes through the origin.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reading-slope-intercept-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-215', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the $xy$-plane, line $\\ell$ is graphed by the equation $2y = 6x + 10$. Line $m$ is the reflection of line $\\ell$ across the $x$-axis. What is the slope of line $m$?',
    choices: [{ id: 'A', text: '$-3$' }, { id: 'B', text: '$-\\dfrac{1}{3}$' }, { id: 'C', text: '$\\dfrac{1}{3}$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Slope of a Reflected Line**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Put $\\ell$ in slope form: $2y=6x+10 \\Rightarrow y=3x+5$, slope $3$. Reflecting across the $x$-axis flips the sign of every $y$, which flips the sign of the slope. So line $m$ has slope $-3$.\n\n**The Full Solution:**\nStep 1: Divide $2y=6x+10$ by $2$: $y=3x+5$. The slope of $\\ell$ is $3$.\nStep 2: A reflection across the $x$-axis sends $(x,y)$ to $(x,-y)$. If $(x,y)$ satisfies $y=3x+5$, the image satisfies $-y=3x+5$, i.e. $y=-3x-5$.\nStep 3: The slope of $m$ is $-3$.\n\nCheck with points: $(0,5)$ and $(1,8)$ on $\\ell$ reflect to $(0,-5)$ and $(1,-8)$; slope $=\\frac{-8-(-5)}{1-0}=-3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{1}{3}$): applies the perpendicular rule (negative reciprocal) instead of reflection.\n* Choice C ($\\frac{1}{3}$): takes the reciprocal of the slope, losing the sign change.\n* Choice D ($3$): leaves the slope of $\\ell$ unchanged, forgetting that reflection across the $x$-axis flips its sign.\n\n**Test Day Takeaway:** Reflecting a line across the $x$-axis negates every $y$, so the slope negates: $m'=-m$. This is not the same as the perpendicular slope (negative reciprocal).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-from-rearranged-form', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-216', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the $xy$-plane, line $\\ell$ has equation $y - 2x = 5$. Line $m$ is perpendicular to $\\ell$ and passes through the origin. What is the $y$-coordinate of the point where lines $\\ell$ and $m$ intersect?',
    choices: [{ id: 'A', text: '$-2$' }, { id: 'B', text: '$0$' }, { id: 'C', text: '$1$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Perpendicular Line + Intersection**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Line $\\ell$ is $y=2x+5$, slope $2$, so line $m$ (perpendicular, through the origin) has slope $-\\frac{1}{2}$: $y=-\\frac{1}{2}x$. Set equal: $-\\frac{1}{2}x=2x+5 \\Rightarrow -\\frac{5}{2}x=5 \\Rightarrow x=-2$. Then $y=-\\frac{1}{2}(-2)=1$.\n\n**The Full Solution:**\nStep 1: Rewrite $\\ell$: $y-2x=5 \\Rightarrow y=2x+5$. Slope of $\\ell$ is $2$.\nStep 2: Perpendicular slopes are negative reciprocals, so $m$ has slope $-\\frac{1}{2}$.\nStep 3: $m$ passes through the origin: $y=-\\frac{1}{2}x$.\nStep 4: Set the equations equal: $-\\frac{1}{2}x=2x+5$, so $-\\frac{5}{2}x=5$ and $x=-2$.\nStep 5: Substitute $x=-2$: $y=-\\frac{1}{2}(-2)=1$ (or $y=2(-2)+5=1$).\n\nCheck: $(-2,1)$ is on $\\ell$ since $1-2(-2)=5$, and on $m$ since $1=-\\frac{1}{2}(-2)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): the $x$-coordinate of the intersection, not the $y$-coordinate the question asks for.\n* Choice B ($0$): the $y$-value at the origin, where $m$ starts — but the intersection is elsewhere.\n* Choice D ($5$): the $y$-intercept of $\\ell$ (value at $x=0$), confusing \"intercept\" with the intersection point.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals. Build the perpendicular through the origin as $y=(\\text{slope})x$, set the two equations equal to find the intersection, then report the coordinate actually requested.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-from-rearranged-form', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-217', domain: 'algebra', skills: ['perpendicular-negative-reciprocal'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the slope of a line perpendicular to $y = 4x - 1$?',
    choices: [{ id: 'A', text: '$-\\dfrac{1}{4}$' }, { id: 'B', text: '$\\dfrac{1}{4}$' }, { id: 'C', text: '$-4$' }, { id: 'D', text: '$4$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Perpendicular slopes are negative reciprocals. The given slope is $4$, so flip it to $\\frac{1}{4}$ and negate: $-\\frac{1}{4}$.\n\n**The Full Solution:**\nStep 1: Read the slope of $y = 4x - 1$ straight off the equation: $m = 4$.\nStep 2: A perpendicular line has slope $-\\frac{1}{m} = -\\frac{1}{4}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{1}{4}$): reciprocated but forgot to negate.\n* Choice C ($-4$): negated but forgot to flip the fraction.\n* Choice D ($4$): returned the original slope — that is a parallel line, not perpendicular.\n\n**Test Day Takeaway:** Perpendicular means flip and negate. Both operations, every time.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'perpendicular-slope', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-218', domain: 'algebra', skills: ['perpendicular-negative-reciprocal'], difficulty: 'easy', type: 'fill-in',
    question: 'A line has slope $-\\dfrac{2}{5}$. What is the slope of a perpendicular line?',
    correctAnswer: '5/2',
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $\\frac{5}{2}$.**\n\n**The Fast Way (~10s):** Flip $-\\frac{2}{5}$ to $-\\frac{5}{2}$, then negate: $\\frac{5}{2}$.\n\n**The Full Solution:**\nStep 1: The perpendicular slope is the negative reciprocal of $-\\frac{2}{5}$.\nStep 2: Reciprocal of $-\\frac{2}{5}$ is $-\\frac{5}{2}$; negating gives $\\frac{5}{2}$.\n\n**Common Mistakes:** Leaving the sign negative ($-\\frac{5}{2}$) by reciprocating without negating; or negating only ($\\frac{2}{5}$) without flipping.\n\n**Test Day Takeaway:** Two negatives cancel — a negative original slope produces a positive perpendicular slope.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'perpendicular-slope', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-219', domain: 'algebra', skills: ['perpendicular-negative-reciprocal'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In the $xy$-plane, line $p$ has the equation $2x + 5y = 10$. Line $q$ is perpendicular to line $p$ and passes through the point $(2, -1)$. What is the $y$-intercept of line $q$?',
    choices: [{ id: 'A', text: '$-6$' }, { id: 'B', text: '$-1$' }, { id: 'C', text: '$\\dfrac{9}{5}$' }, { id: 'D', text: '$4$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Perpendicular Line Through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Slope of $p$ is $-\\frac{A}{B} = -\\frac{2}{5}$, so $q$ has slope $\\frac{5}{2}$. Plug $(2, -1)$ into $y = \\frac{5}{2}x + b$: $-1 = 5 + b \\Rightarrow b = -6$.\n\n**The Full Solution:**\nStep 1: Rewrite $2x + 5y = 10$ as $y = -\\frac{2}{5}x + 2$, so line $p$ has slope $-\\frac{2}{5}$.\nStep 2: Line $q$ is perpendicular, so its slope is the negative reciprocal: $\\frac{5}{2}$.\nStep 3: Use the point $(2, -1)$ in $y = mx + b$: $-1 = \\frac{5}{2}(2) + b = 5 + b \\Rightarrow b = -6$.\nStep 4: Check: at $x = 2$, $y = \\frac{5}{2}(2) - 6 = 5 - 6 = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-1$): reports the $y$-coordinate of the given point, confusing \"passes through\" with \"$y$-intercept.\"\n* Choice C ($\\frac{9}{5}$): uses the slope of $p$ instead of the perpendicular slope.\n* Choice D ($4$): drops the negative on the perpendicular slope, using $-\\frac{5}{2}$ to get $-1 = -5 + b \\Rightarrow b = 4$.\n\n**Test Day Takeaway:** Standard form $Ax + By = C$ has slope $-\\frac{A}{B}$. Flip and negate for perpendicular, then plug the point into $y = mx + b$ to solve for $b$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'perpendicular-slope', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-220', domain: 'algebra', skills: ['perpendicular-negative-reciprocal'], difficulty: 'medium', type: 'fill-in',
    question: 'If a line has slope $\\dfrac{3}{7}$, what is the slope of a line perpendicular to it?',
    correctAnswer: '-7/3',
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $-\\frac{7}{3}$.**\n\n**The Fast Way (~10s):** Flip $\\frac{3}{7}$ to $\\frac{7}{3}$, then negate: $-\\frac{7}{3}$.\n\n**The Full Solution:**\nStep 1: The perpendicular slope is the negative reciprocal of $\\frac{3}{7}$.\nStep 2: Reciprocal is $\\frac{7}{3}$; negating gives $-\\frac{7}{3}$.\n\n**Common Mistakes:** Reporting $\\frac{7}{3}$ (flipped but not negated) or $-\\frac{3}{7}$ (negated but not flipped).\n\n**Test Day Takeaway:** Perpendicular slope is two moves — flip the fraction and change the sign.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'perpendicular-slope', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-221', domain: 'algebra', skills: ['perpendicular-negative-reciprocal'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A line has slope $-6$. What is the slope of any line perpendicular to it?',
    choices: [{ id: 'A', text: '$\\dfrac{1}{6}$' }, { id: 'B', text: '$-\\dfrac{1}{6}$' }, { id: 'C', text: '$6$' }, { id: 'D', text: '$-6$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The negative reciprocal of $-6$ is $-\\frac{1}{-6} = \\frac{1}{6}$.\n\n**The Full Solution:**\nStep 1: Write $-6$ as $-\\frac{6}{1}$ and take the reciprocal: $-\\frac{1}{6}$.\nStep 2: Negate it: $\\frac{1}{6}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{1}{6}$): reciprocated but kept the original negative sign instead of negating.\n* Choice C ($6$): negated $-6$ without reciprocating.\n* Choice D ($-6$): returned the original slope — a parallel line.\n\n**Test Day Takeaway:** Reciprocate, then negate. Two negatives give a positive.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'perpendicular-slope', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-222', domain: 'algebra', skills: ['perpendicular-negative-reciprocal'], difficulty: 'medium', type: 'fill-in',
    question: 'Two lines are perpendicular. If one has slope $\\dfrac{1}{8}$, what is the slope of the other?',
    correctAnswer: '-8',
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $-8$.**\n\n**The Fast Way (~10s):** Flip $\\frac{1}{8}$ to $8$, then negate: $-8$.\n\n**The Full Solution:**\nStep 1: The perpendicular slope is the negative reciprocal of $\\frac{1}{8}$.\nStep 2: Reciprocal of $\\frac{1}{8}$ is $8$; negating gives $-8$.\n\n**Common Mistakes:** Reporting $8$ (forgot the sign) or $-\\frac{1}{8}$ (negated without flipping).\n\n**Test Day Takeaway:** A tiny slope pairs with a steep perpendicular slope, and the sign flips.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'perpendicular-slope', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-223', domain: 'algebra', skills: ['perpendicular-negative-reciprocal'], difficulty: 'hard', type: 'multiple-choice',
    question: 'If two lines are perpendicular and one has slope $m$ where $m > 0$, which expression gives the slope of the other line?',
    choices: [{ id: 'A', text: '$-\\dfrac{1}{m}$' }, { id: 'B', text: '$\\dfrac{1}{m}$' }, { id: 'C', text: '$-m$' }, { id: 'D', text: '$m$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Perpendicular slopes are negative reciprocals, so the other slope is $-\\frac{1}{m}$.\n\n**The Full Solution:**\nStep 1: Two perpendicular slopes multiply to $-1$: their product is $m \\cdot (\\text{other}) = -1$.\nStep 2: Solve for the other slope: $-\\frac{1}{m}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{1}{m}$): reciprocated but dropped the negative sign.\n* Choice C ($-m$): negated but did not reciprocate.\n* Choice D ($m$): the original slope — a parallel line.\n\n**Test Day Takeaway:** The perpendicular slope of $m$ is always $-\\frac{1}{m}$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'perpendicular-slope', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-224', domain: 'algebra', skills: ['perpendicular-negative-reciprocal'], difficulty: 'hard', type: 'fill-in',
    question: 'If lines $\\ell_1$ and $\\ell_2$ are perpendicular and the product of their slopes is $k$, what is the value of $k$?',
    correctAnswer: '-1',
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $-1$.**\n\n**The Fast Way (~10s):** For perpendicular lines, the slopes are negative reciprocals, so $m_1 \\cdot m_2 = -1$. Thus $k = -1$.\n\n**The Full Solution:**\nStep 1: If $\\ell_2$ is perpendicular to $\\ell_1$, then $m_2 = -\\frac{1}{m_1}$.\nStep 2: Their product is $m_1 \\cdot \\left(-\\frac{1}{m_1}\\right) = -1$, so $k = -1$.\n\n**Common Mistakes:** Answering $1$ (forgetting the negative) or $0$ (confusing perpendicular with a degenerate case).\n\n**Test Day Takeaway:** Perpendicular slopes always multiply to $-1$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'perpendicular-slope', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 10/2: parallel-line-through-a-point (7 items) =====
  // Bank has 1 existing item; adding 7 more.
  { id: 'bank-alg-225', domain: 'algebra', skills: ['writing-parallel-equation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A line is parallel to $y = 3x + 5$ and passes through $(0, -2)$. What is its equation?',
    choices: [{ id: 'A', text: '$y = 3x - 2$' }, { id: 'B', text: '$y = -3x - 2$' }, { id: 'C', text: '$y = 5x - 2$' }, { id: 'D', text: '$y = 3x + 5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Parallel means the same slope, $3$. The point $(0, -2)$ sits on the $y$-axis, so the intercept is $-2$: $y = 3x - 2$.\n\n**The Full Solution:**\nStep 1: A line parallel to $y = 3x + 5$ keeps slope $3$.\nStep 2: The point $(0, -2)$ has $x = 0$, so it is the $y$-intercept: $b = -2$.\nStep 3: The equation is $y = 3x - 2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = -3x - 2$): negated the slope — that would be a different, non-parallel line.\n* Choice C ($y = 5x - 2$): used the original $y$-intercept ($5$) as the slope.\n* Choice D ($y = 3x + 5$): copied the original equation and ignored the new point.\n\n**Test Day Takeaway:** Parallel lines share a slope. A point on the $y$-axis gives the intercept directly.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-line-through-a-point', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-226', domain: 'algebra', skills: ['writing-parallel-equation'], difficulty: 'easy', type: 'fill-in',
    question: 'A line is parallel to $y = 2x - 7$ and passes through $(0, 4)$. What is the $y$-intercept of the parallel line?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~10s):** The point $(0, 4)$ lies on the $y$-axis, so its $y$-value is the intercept: $4$.\n\n**The Full Solution:**\nStep 1: A parallel line keeps slope $2$, but the question asks only for the intercept.\nStep 2: Since $x = 0$ at $(0, 4)$, that point is the $y$-intercept: $b = 4$.\n\n**Common Mistakes:** Reporting the slope $2$ instead of the intercept, or computing $b$ as if the point were off the axis.\n\n**Test Day Takeaway:** When a point has $x = 0$, its $y$-coordinate is the $y$-intercept — no work needed.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-line-through-a-point', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-227', domain: 'algebra', skills: ['writing-parallel-equation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In the $xy$-plane, a line parallel to $y = -\\dfrac{1}{2}x + 3$ passes through $(4, 1)$. What is the $y$-intercept of this line?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$-3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Parallel keeps slope $-\\frac{1}{2}$. Plug $(4, 1)$ into $y = -\\frac{1}{2}x + b$: $1 = -2 + b \\Rightarrow b = 3$.\n\n**The Full Solution:**\nStep 1: A line parallel to $y = -\\frac{1}{2}x + 3$ keeps slope $-\\frac{1}{2}$.\nStep 2: Use the point $(4, 1)$ in $y = mx + b$: $1 = -\\frac{1}{2}(4) + b = -2 + b$.\nStep 3: Solve: $b = 3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): reports the $y$-coordinate of the point instead of solving for $b$.\n* Choice C ($5$): adds the coordinates ($4 + 1$) instead of substituting into the line.\n* Choice D ($-3$): flips the slope sign to $+\\frac{1}{2}$, then mis-arithmetic.\n\n**Test Day Takeaway:** Keep the parallel slope, plug the point into $y = mx + b$, and solve for $b$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-line-through-a-point', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-228', domain: 'algebra', skills: ['writing-parallel-equation'], difficulty: 'medium', type: 'fill-in',
    question: 'A line is parallel to $y = 4x + 1$ and passes through $(2, -3)$. What is its $y$-intercept?',
    correctAnswer: '-11',
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**The correct answer is $-11$.**\n\n**The Fast Way (~15s):** Parallel keeps slope $4$. Plug $(2, -3)$ into $y = 4x + b$: $-3 = 8 + b \\Rightarrow b = -11$.\n\n**The Full Solution:**\nStep 1: A line parallel to $y = 4x + 1$ keeps slope $4$.\nStep 2: Use the point $(2, -3)$: $-3 = 4(2) + b = 8 + b$.\nStep 3: Solve: $b = -11$.\n\n**Common Mistakes:** Forgetting to subtract $8$ and reporting $-3$, or sign-slipping to get $-5$.\n\n**Test Day Takeaway:** Same slope, then plug the point into $y = mx + b$ to find $b$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-line-through-a-point', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-229', domain: 'algebra', skills: ['writing-parallel-equation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A line parallel to $2x - 3y = 6$ passes through $(3, 0)$. Which equation describes this line?',
    choices: [{ id: 'A', text: '$y = \\dfrac{2}{3}x - 2$' }, { id: 'B', text: '$y = -\\dfrac{2}{3}x - 2$' }, { id: 'C', text: '$y = \\dfrac{3}{2}x - 2$' }, { id: 'D', text: '$y = \\dfrac{2}{3}x + 3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** In standard form, slope $= -\\frac{A}{B} = -\\frac{2}{-3} = \\frac{2}{3}$. Parallel means same slope. Plug $(3, 0)$ into $y = \\frac{2}{3}x + b$: $0 = \\frac{2}{3}(3) + b = 2 + b$, so $b = -2$.\n\n**The Full Solution:**\nStep 1: Find the slope of $2x - 3y = 6$. Solve for $y$: $-3y = -2x + 6 \\Rightarrow y = \\frac{2}{3}x - 2$, so the slope is $\\frac{2}{3}$.\nStep 2: A parallel line keeps that slope. Write $y = \\frac{2}{3}x + b$.\nStep 3: Force it through $(3, 0)$: $0 = \\frac{2}{3}(3) + b = 2 + b \\Rightarrow b = -2$.\nStep 4: The line is $y = \\frac{2}{3}x - 2$, which is Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = -\\frac{2}{3}x - 2$): flips the sign of the slope — that is the perpendicular-style mistake, not the parallel rule.\n* Choice C ($y = \\frac{3}{2}x - 2$): swaps numerator and denominator, giving the reciprocal of the correct slope.\n* Choice D ($y = \\frac{2}{3}x + 3$): uses the point's $x$-coordinate as the $y$-intercept instead of solving for $b$.\n\n**Test Day Takeaway:** From $Ax + By = C$, the slope is $-\\frac{A}{B}$. Parallel lines share that slope; substitute the given point to find the intercept.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-line-through-a-point', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-230', domain: 'algebra', skills: ['writing-parallel-equation'], difficulty: 'medium', type: 'fill-in',
    question: 'A line is parallel to $y = -5x + 12$ and passes through $(1, 2)$. What is the $y$-intercept of this line?',
    correctAnswer: '7',
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~15s):** Parallel keeps the slope $-5$. Plug $(1, 2)$ into $y = -5x + b$: $2 = -5(1) + b \\Rightarrow b = 7$. The $y$-intercept is $7$.\n\n**The Full Solution:**\nStep 1: A line parallel to $y = -5x + 12$ has slope $-5$, so $y = -5x + b$.\nStep 2: Substitute $(1, 2)$: $2 = -5(1) + b = -5 + b \\Rightarrow b = 7$.\nStep 3: The $y$-intercept is $b = 7$.\n\n**Common Mistakes:** Reporting $-5$ (the slope, not the intercept) or $12$ (the intercept of the original line, not the new one).\n\n**Test Day Takeaway:** Parallel lines share a slope. Carry that slope to $y = mx + b$ and solve for $b$ using the given point.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-line-through-a-point', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-231', domain: 'algebra', skills: ['writing-parallel-equation'], difficulty: 'hard', type: 'fill-in',
    question: 'Line $\\ell$ is parallel to the line $y = -3x + 7$ and passes through the point $(-2, 5)$. What is the value of $y$ when $x = 0$ on line $\\ell$?',
    correctAnswer: '-1',
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**The correct answer is $-1$.**\n\n**The Fast Way (~20s):** Parallel keeps the slope $-3$. The value of $y$ at $x = 0$ is just the $y$-intercept $b$. Plug in $(-2, 5)$: $5 = -3(-2) + b = 6 + b \\Rightarrow b = -1$.\n\n**The Full Solution:**\nStep 1: Line $\\ell$ is parallel to $y = -3x + 7$, so its slope is $-3$: $y = -3x + b$.\nStep 2: It passes through $(-2, 5)$: $5 = -3(-2) + b = 6 + b \\Rightarrow b = -1$.\nStep 3: \"$y$ when $x = 0$\" is the $y$-intercept, which is $b = -1$.\n\n**Common Mistakes:** Sign-slipping $-3(-2)$ as $-6$ and getting $b = 11$; or reading $7$ off the original line instead of solving for the new intercept.\n\n**Test Day Takeaway:** \"The value of $y$ when $x = 0$\" is the $y$-intercept. Find the slope, fit the point, and the intercept falls out.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-line-through-a-point', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 10/3: matching-coefficients (8 items) =====
  { id: 'bank-alg-232', domain: 'algebra', skills: ['distributive-property'], difficulty: 'easy', type: 'multiple-choice',
    question: 'For all $x$, $(x + 2)(x + 5) = x^2 + ax + 10$. What is the value of $a$?',
    choices: [{ id: 'A', text: '$7$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$2$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** For $(x + p)(x + q)$, the middle coefficient is $p + q$. Here $2 + 5 = 7$, so $a = 7$.\n\n**The Full Solution:**\nStep 1: Expand $(x + 2)(x + 5) = x^2 + 5x + 2x + 10 = x^2 + 7x + 10$.\nStep 2: Match against $x^2 + ax + 10$. The middle term gives $a = 7$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($10$): reports the constant term ($2 \\cdot 5$) instead of the middle coefficient.\n* Choice C ($5$): reports just one factor constant.\n* Choice D ($2$): reports the other factor constant.\n\n**Test Day Takeaway:** $(x + p)(x + q) = x^2 + (p + q)x + pq$. The middle coefficient is the sum of the two constants.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'matching-coefficients', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-233', domain: 'algebra', skills: ['distributive-property'], difficulty: 'easy', type: 'fill-in',
    question: 'What value of $b$ satisfies the equation $(x + 3)(x - 4) = x^2 + bx - 12$?',
    correctAnswer: '-1',
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**The correct answer is $-1$.**\n\n**The Fast Way (~10s):** The middle coefficient is the sum of the factor constants: $3 + (-4) = -1$, so $b = -1$.\n\n**The Full Solution:**\nStep 1: Expand $(x + 3)(x - 4) = x^2 - 4x + 3x - 12 = x^2 - x - 12$.\nStep 2: Match against $x^2 + bx - 12$. The middle term gives $b = -1$.\n\n**Common Mistakes:** Dropping the negative and answering $1$, or summing magnitudes to get $7$ instead of $3 + (-4)$.\n\n**Test Day Takeaway:** In $(x + p)(x + q)$, the middle coefficient is $p + q$ — keep the signs.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'matching-coefficients', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-234', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What value of $a$ satisfies the equation $(2x + 3)(x + 4) = 2x^2 + ax + 12$?',
    choices: [{ id: 'A', text: '$11$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$12$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** FOIL the outer and inner products: $2x \\cdot 4 + 3 \\cdot x = 8x + 3x = 11x$, so $a = 11$.\n\n**The Full Solution:**\nStep 1: Expand $(2x + 3)(x + 4) = 2x^2 + 8x + 3x + 12 = 2x^2 + 11x + 12$.\nStep 2: Match against $2x^2 + ax + 12$. The middle term gives $a = 11$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): uses only the outer product ($2x \\cdot 4$) and forgets the inner product.\n* Choice C ($3$): uses only the inner product ($3 \\cdot x$) and forgets the outer product.\n* Choice D ($12$): reports the constant term ($3 \\cdot 4$) instead of the middle coefficient.\n\n**Test Day Takeaway:** With a non-monic leading factor, FOIL fully — the middle coefficient combines both the outer and the inner products.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'matching-coefficients', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-235', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'fill-in',
    question: 'What value of $a$ satisfies the equation $(3x - 2)(x + a) = 3x^2 + 7x - 6$?',
    correctAnswer: '3',
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~15s):** Match the constant term first: $-2 \\cdot a = -6 \\Rightarrow a = 3$. Verify the middle: $3a - 2 = 9 - 2 = 7$. $\\checkmark$\n\n**The Full Solution:**\nStep 1: Expand $(3x - 2)(x + a) = 3x^2 + 3ax - 2x - 2a = 3x^2 + (3a - 2)x - 2a$.\nStep 2: Match against $3x^2 + 7x - 6$. The constant gives $-2a = -6 \\Rightarrow a = 3$.\nStep 3: Check the middle term: $3(3) - 2 = 7$, which matches. $\\checkmark$\n\n**Common Mistakes:** Solving the middle equation $3a - 2 = 7$ alone is fine ($a = 3$), but answering $-3$ from a sign slip on $-2a = -6$ is the usual trap.\n\n**Test Day Takeaway:** Match one term to get a single equation, then verify with a second term to confirm.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'matching-coefficients', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-236', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For all $x$, $(hx + 3)(x + j) = 2x^2 + 11x + 12$. What is the value of $h + j$?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Leading term: $h \\cdot 1 = 2 \\Rightarrow h = 2$. Constant term: $3 \\cdot j = 12 \\Rightarrow j = 4$. So $h + j = 6$.\n\n**The Full Solution:**\nStep 1: Expand $(hx + 3)(x + j) = hx^2 + hjx + 3x + 3j = hx^2 + (hj + 3)x + 3j$.\nStep 2: Match against $2x^2 + 11x + 12$. Leading: $h = 2$. Constant: $3j = 12 \\Rightarrow j = 4$.\nStep 3: $h + j = 2 + 4 = 6$, which is Choice A. (Check middle: $hj + 3 = 8 + 3 = 11$. $\\checkmark$)\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): reports just $j$ and forgets to add $h$.\n* Choice C ($11$): returns the middle coefficient instead of $h + j$.\n* Choice D ($5$): a mis-combination of $h$ and $j$ (e.g., $j + 1$ or $hj - 3$) instead of $h + j$.\n\n**Test Day Takeaway:** With two unknowns, match the leading and constant terms separately for two clean one-step equations.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'matching-coefficients', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-237', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'fill-in',
    question: 'What value of $k$ satisfies the equation $(x + 5)^2 = x^2 + kx + 25$?',
    correctAnswer: '10',
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~10s):** A perfect square $(x + a)^2 = x^2 + 2ax + a^2$. With $a = 5$, the middle coefficient is $2(5) = 10$, so $k = 10$.\n\n**The Full Solution:**\nStep 1: Expand $(x + 5)^2 = x^2 + 10x + 25$.\nStep 2: Match against $x^2 + kx + 25$. The middle term gives $k = 10$.\n\n**Common Mistakes:** Answering $25$ (the constant, $a^2$) or $5$ (just $a$, forgetting the factor of $2$).\n\n**Test Day Takeaway:** For $(x + a)^2$, the middle coefficient is $2a$ and the constant is $a^2$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'matching-coefficients', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-238', domain: 'algebra', skills: ['distributive-property'], difficulty: 'hard', type: 'multiple-choice',
    question: 'For all values of $x$, $(2x + a)(3x + b) = 6x^2 + 13x + 6$, where $a$ and $b$ are positive integers. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$7$' }, { id: 'D', text: '$13$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Matching Coefficients with Integer Constraints**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** FOIL gives $ab = 6$ and $2b + 3a = 13$. Among positive-integer pairs with $ab = 6$, only $(a, b) = (3, 2)$ gives $2(2) + 3(3) = 13$. So $a + b = 5$.\n\n**The Full Solution:**\nStep 1: Expand $(2x + a)(3x + b) = 6x^2 + 2bx + 3ax + ab = 6x^2 + (2b + 3a)x + ab$.\nStep 2: Match against $6x^2 + 13x + 6$: the constant gives $ab = 6$ and the middle gives $2b + 3a = 13$.\nStep 3: List positive-integer pairs with $ab = 6$: $(1, 6), (2, 3), (3, 2), (6, 1)$.\nStep 4: Test the middle constraint:\n$\\quad (1, 6)$: $2(6) + 3(1) = 15 \\neq 13$.\n$\\quad (2, 3)$: $2(3) + 3(2) = 12 \\neq 13$.\n$\\quad (3, 2)$: $2(2) + 3(3) = 13$. $\\checkmark$\n$\\quad (6, 1)$: $2(1) + 3(6) = 20 \\neq 13$.\nStep 5: So $a = 3$, $b = 2$, and $a + b = 5$. Verify: $(2x + 3)(3x + 2) = 6x^2 + 13x + 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): reports $ab$ (the constant term) instead of $a + b$.\n* Choice C ($7$): assumes a $(2, 5)$-style split, which would need $ab = 10$, not $6$ — mis-factors the constant.\n* Choice D ($13$): reports the middle coefficient itself.\n\n**Test Day Takeaway:** When a factorization is pinned to positive integers, list the factor pairs of the constant term, then filter them through the middle-coefficient equation.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'matching-coefficients', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-239', domain: 'algebra', skills: ['distributive-property'], difficulty: 'hard', type: 'fill-in',
    question: 'What value of $a$ satisfies the equation $(x - 3)(x + a) = x^2 + 2x - 15$?',
    correctAnswer: '5',
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** Match the constant term: $-3 \\cdot a = -15 \\Rightarrow a = 5$. Verify the middle: $a - 3 = 2$. $\\checkmark$\n\n**The Full Solution:**\nStep 1: Expand $(x - 3)(x + a) = x^2 + ax - 3x - 3a = x^2 + (a - 3)x - 3a$.\nStep 2: Match against $x^2 + 2x - 15$. The constant gives $-3a = -15 \\Rightarrow a = 5$.\nStep 3: Check the middle term: $a - 3 = 5 - 3 = 2$, which matches. $\\checkmark$\n\n**Common Mistakes:** Solving the middle equation $a - 3 = 2$ also gives $a = 5$, so both routes agree; the trap is a sign slip on $-3a = -15$ landing on $-5$.\n\n**Test Day Takeaway:** Match one term to isolate the unknown, then confirm with a second term so a sign error can't slip through.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'matching-coefficients', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 11/2: parallel-lines-no-solution (8 items) =====
  // Conceptually identical to no-solution-condition; distinct slug per test bundles.
  { id: 'bank-alg-240', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'easy', type: 'multiple-choice',
    question: 'For what value of $k$ does the system $y = 3x + 2$ and $y = 3x + k$ have NO solution? (Choose any value that satisfies.)',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$2$' }, { id: 'C', text: 'No value works' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** A system has no solution when the lines are parallel but distinct: same slope, different intercept. Both lines have slope $3$, so any $k \\neq 2$ works. Choice A, $k = 5$, qualifies.\n\n**The Full Solution:**\nStep 1: $y = 3x + 2$ and $y = 3x + k$ already share the slope $3$, so the lines are parallel.\nStep 2: Parallel lines never intersect unless they are the same line. They coincide only when the intercepts match, i.e. $k = 2$.\nStep 3: For no solution, the intercepts must differ: $k \\neq 2$. Among the choices, $k = 5$ satisfies this.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): matches the first line's intercept, producing the same line — infinitely many solutions, not none.\n* Choice C (No value works): wrong — every $k \\neq 2$ gives no solution.\n* Choice D ($3$): copies the slope into the intercept slot — slope/intercept confusion.\n\n**Test Day Takeaway:** No solution means parallel and distinct: equal slopes, unequal intercepts.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-lines-no-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-241', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'easy', type: 'fill-in',
    question: 'For what value of $c$ does the system $y = 4x + 7$ and $y = cx + 1$ have no solution?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~10s):** Two lines have no solution when they are parallel — same slope, different intercept. The slope of the first line is $4$, so set $c=4$. The intercepts ($7$ and $1$) already differ, so the system is genuinely parallel.\n\n**The Full Solution:**\nStep 1: Both equations are in slope-intercept form. No solution means the lines never meet, which requires equal slopes.\nStep 2: The first slope is $4$ and the second is $c$, so $c=4$.\nStep 3: Check the intercepts: $7 \\neq 1$, so the lines are parallel but not identical — exactly the no-solution case.\n\n**Common Mistakes:** Choosing a $c$ that also matches the intercept would give the *same* line (infinitely many solutions), not zero. Here the intercepts already differ, so any $c=4$ works.\n\n**Test Day Takeaway:** No solution means parallel: match the slopes, then confirm the intercepts differ.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-lines-no-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-242', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For what value of $c$ does $2x + 3y = 5$ and $cx + 9y = 12$ have no solution?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$12$' }, { id: 'D', text: '$\\dfrac{12}{5}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** For no solution, the $x$ and $y$ coefficients must be in the same ratio while the constants are not. The $y$-coefficients give $\\frac{9}{3}=3$, so the $x$-coefficients must match it: $\\frac{c}{2}=3 \\Rightarrow c=6$. That is choice A.\n\n**The Full Solution:**\nStep 1: Two lines in standard form are parallel when $\\frac{c}{2}=\\frac{9}{3}$ (proportional coefficients).\nStep 2: $\\frac{9}{3}=3$, so $\\frac{c}{2}=3 \\Rightarrow c=6$.\nStep 3: Confirm the constants break the proportion: $\\frac{12}{5}=2.4 \\neq 3$, so the lines are parallel and distinct — no solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): copies the $y$-coefficient of the first equation into the $c$ slot — coefficient confusion.\n* Choice C ($12$): copies the constant from the second equation instead of solving the ratio.\n* Choice D ($\\frac{12}{5}$): uses the constant ratio $\\frac{12}{5}$, which sets the lines identical, not parallel.\n\n**Test Day Takeaway:** Match the coefficient ratios for no solution, then verify the constants do not match that same ratio.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-lines-no-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-243', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'fill-in',
    question: 'For what value of $k$ does $5x - 2y = 4$ and $kx - 6y = 15$ have no solution?',
    correctAnswer: '15',
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~15s):** Match the coefficient ratios. The $y$-coefficients give $\\frac{-6}{-2}=3$, so set the $x$-coefficients equal to it: $\\frac{k}{5}=3 \\Rightarrow k=15$.\n\n**The Full Solution:**\nStep 1: No solution requires the $x$ and $y$ coefficients to be proportional: $\\frac{k}{5}=\\frac{-6}{-2}$.\nStep 2: The negatives cancel: $\\frac{-6}{-2}=3$.\nStep 3: So $\\frac{k}{5}=3 \\Rightarrow k=15$. The constants $4$ and $15$ are not in that ratio, so the lines stay parallel and distinct.\n\n**Common Mistakes:** Keeping the negative sign and writing $k=-15$; the matching negative signs in the $y$-coefficients cancel to a positive ratio.\n\n**Test Day Takeaway:** Standard-form slope is $-\\frac{A}{B}$, but matching coefficient ratios directly works too — just track the signs.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-lines-no-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-244', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For what value of $c$ does $2x + 3y = 5$ and $4x + cy = 9$ have no solution?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$\\dfrac{6}{5}$' }, { id: 'D', text: '$2$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Match the coefficient ratios. The $x$-coefficients give $\\frac{4}{2}=2$, so the $y$-coefficients must match: $\\frac{c}{3}=2 \\Rightarrow c=6$. That is choice A.\n\n**The Full Solution:**\nStep 1: No solution means the coefficients are proportional: $\\frac{4}{2}=\\frac{c}{3}$.\nStep 2: $\\frac{4}{2}=2$, so $\\frac{c}{3}=2 \\Rightarrow c=6$.\nStep 3: Check the constants: $\\frac{9}{5}=1.8 \\neq 2$, so the lines are parallel but distinct — no solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): keeps the original $y$-coefficient, producing a different slope (a unique solution, not no solution).\n* Choice C ($\\frac{6}{5}$): blends the constant ratio with the coefficient ratio.\n* Choice D ($2$): reports the ratio $\\frac{4}{2}=2$ itself rather than the $c$ it implies.\n\n**Test Day Takeaway:** Find the $c$ that makes the slopes match, then confirm the constants differ to rule out identical lines.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-lines-no-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-245', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'fill-in',
    question: 'For what value of $m$ does $3x + my = 12$ and $6x - 4y = 7$ have no solution?',
    correctAnswer: '-2',
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**The correct answer is $-2$.**\n\n**The Fast Way (~15s):** Compare slopes in $-\\frac{A}{B}$ form. The first line's slope is $-\\frac{3}{m}$; the second's is $-\\frac{6}{-4}=\\frac{3}{2}$. Set them equal: $-\\frac{3}{m}=\\frac{3}{2} \\Rightarrow m=-2$.\n\n**The Full Solution:**\nStep 1: Standard-form slope is $-\\frac{A}{B}$. Line 1: $-\\frac{3}{m}$. Line 2: $-\\frac{6}{-4}=\\frac{3}{2}$.\nStep 2: No solution requires equal slopes: $-\\frac{3}{m}=\\frac{3}{2}$.\nStep 3: Cross-multiply: $-3 \\cdot 2 = 3m \\Rightarrow -6=3m \\Rightarrow m=-2$.\n\n**Common Mistakes:** Dropping the sign and getting $m=2$; the negative on $-\\frac{3}{m}$ must equal the positive $\\frac{3}{2}$, which forces $m$ negative.\n\n**Test Day Takeaway:** Convert standard form to slope $-\\frac{A}{B}$ and set the slopes equal — sign tracking is where these go wrong.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-lines-no-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-246', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The system $y = 2x + 5$ and $y = 2x + a$ has no solution. Which condition must $a$ satisfy?',
    choices: [{ id: 'A', text: '$a \\ne 5$' }, { id: 'B', text: '$a = 5$' }, { id: 'C', text: '$a = 2$' }, { id: 'D', text: '$a > 5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Both lines already have slope $2$, so they are automatically parallel. No solution requires the intercepts to differ: $a \\neq 5$. That is choice A.\n\n**The Full Solution:**\nStep 1: The slopes are both $2$, so the lines are parallel no matter what $a$ is.\nStep 2: Parallel lines have no solution only when they are distinct — different intercepts.\nStep 3: The first intercept is $5$, so the second must not equal it: $a \\neq 5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($a=5$): makes the equations identical, giving infinitely many solutions, not zero.\n* Choice C ($a=2$): mistakes the slope ($2$) for the intercept condition.\n* Choice D ($a>5$): too restrictive — any $a \\neq 5$ works, including values below $5$.\n\n**Test Day Takeaway:** Parallel and distinct equals no solution. Once the slopes match, the answer is \"intercepts not equal\" — not a single value.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-lines-no-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-247', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'hard', type: 'fill-in',
    question: 'For the system $ax + 4y = 8$ and $6x + 12y = 20$ to have NO solution, what is the value of $a$?',
    correctAnswer: '2',
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~15s):** Match the coefficient ratios. The $y$-coefficients give $\\frac{12}{4}=3$, so the $x$-coefficients must match: $\\frac{6}{a}=3 \\Rightarrow a=2$. The constants do not match the ratio, so the lines stay parallel.\n\n**The Full Solution:**\nStep 1: No solution requires proportional coefficients: $\\frac{6}{a}=\\frac{12}{4}$.\nStep 2: $\\frac{12}{4}=3$, so $\\frac{6}{a}=3 \\Rightarrow a=2$.\nStep 3: Check the constants break the proportion: $\\frac{20}{8}=2.5 \\neq 3$, so the lines are parallel and distinct — no solution. $\\checkmark$\n\n**Common Mistakes:** Forgetting the constant check; if $\\frac{20}{8}$ had equaled $3$, the lines would be identical (infinitely many solutions) rather than parallel.\n\n**Test Day Takeaway:** Match the coefficient ratios for no solution, then confirm the constants do not also fit that ratio.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-lines-no-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 11/3: two-equation-system-from-a-word-problem (8 items) =====
  { id: 'bank-alg-248', domain: 'algebra', skills: ['word-problem-to-equation', 'setting-up-systems'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A class has $25$ students. There are $7$ more girls than boys. How many girls are in the class?',
    choices: [{ id: 'A', text: '$16$' }, { id: 'B', text: '$9$' }, { id: 'C', text: '$18$' }, { id: 'D', text: '$25$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Let $g$ be girls and $b$ boys. Then $g+b=25$ and $g-b=7$. Add the equations: $2g=32 \\Rightarrow g=16$. That is choice A.\n\n**The Full Solution:**\nStep 1: Total: $g+b=25$. Difference (\"$7$ more girls than boys\"): $g-b=7$.\nStep 2: Add the two equations so $b$ cancels: $2g=32$.\nStep 3: $g=16$ girls (and $b=9$ boys, which checks: $16-9=7$). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): the number of boys — solved correctly but reports the wrong variable.\n* Choice C ($18$): adds $7$ to half the total ($11+7$), an overshoot shortcut.\n* Choice D ($25$): the total class size, ignoring the boys/girls split.\n\n**Test Day Takeaway:** Two unknowns need two equations — usually a total and a relationship. Add or subtract to eliminate, then answer the variable the question actually asks for.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'two-equation-system-from-a-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-249', domain: 'algebra', skills: ['word-problem-to-equation', 'setting-up-systems'], difficulty: 'easy', type: 'fill-in',
    question: 'The sum of two numbers is $30$. One number is twice the other. What is the larger number?',
    correctAnswer: '20',
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~15s):** Let the smaller number be $x$; the larger is $2x$. Then $x+2x=30 \\Rightarrow 3x=30 \\Rightarrow x=10$, so the larger is $2x=20$.\n\n**The Full Solution:**\nStep 1: \"One number is twice the other\" gives the larger as $2x$ when the smaller is $x$.\nStep 2: Their sum is $30$: $x+2x=30$.\nStep 3: $3x=30 \\Rightarrow x=10$, so the larger number is $2(10)=20$.\n\n**Common Mistakes:** Reporting $10$ (the smaller number) instead of the larger; the question asks for the larger.\n\n**Test Day Takeaway:** Substitute the relationship into the total to collapse two unknowns into one, then return the value actually requested.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'two-equation-system-from-a-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-250', domain: 'algebra', skills: ['word-problem-to-equation', 'setting-up-systems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Joaquin scored a total of $86$ points across $14$ basketball games. He scored $5$ points in some of the games and $7$ points in each of the others. In how many games did he score $5$ points?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$10$' }, { id: 'D', text: '$4$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Let $f$ be the count of $5$-point games and $s$ the count of $7$-point games. Then $f+s=14$ and $5f+7s=86$. Substitute $s=14-f$: $5f+7(14-f)=86 \\Rightarrow -2f=-12 \\Rightarrow f=6$. That is choice A.\n\n**The Full Solution:**\nStep 1: Count equation: $f+s=14$. Points equation: $5f+7s=86$.\nStep 2: From the count equation, $s=14-f$. Substitute: $5f+7(14-f)=86$.\nStep 3: $5f+98-7f=86 \\Rightarrow -2f=-12 \\Rightarrow f=6$ five-point games (and $s=8$, which checks: $5(6)+7(8)=30+56=86$). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): the number of $7$-point games — the other variable, mis-labeled.\n* Choice C ($10$): comes from a mis-set-up points equation.\n* Choice D ($4$): an arithmetic slip in the substitution that drops a factor.\n\n**Test Day Takeaway:** Count problems need a count equation plus a value/score equation. Substitute one into the other, then report the variable the question names.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'two-equation-system-from-a-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-251', domain: 'algebra', skills: ['word-problem-to-equation', 'setting-up-systems'], difficulty: 'medium', type: 'fill-in',
    question: 'A shop sells small drinks for $\\$2$ and large drinks for $\\$5$. On Monday, $40$ drinks were sold for a total of $\\$140$. How many large drinks were sold?',
    correctAnswer: '20',
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~20s):** Let $s$ be small drinks and $\\ell$ large. Then $s+\\ell=40$ and $2s+5\\ell=140$. Substitute $s=40-\\ell$: $2(40-\\ell)+5\\ell=140 \\Rightarrow 80+3\\ell=140 \\Rightarrow \\ell=20$.\n\n**The Full Solution:**\nStep 1: Count equation: $s+\\ell=40$. Revenue equation: $2s+5\\ell=140$ (dollars).\nStep 2: From the count, $s=40-\\ell$. Substitute into revenue: $2(40-\\ell)+5\\ell=140$.\nStep 3: $80-2\\ell+5\\ell=140 \\Rightarrow 3\\ell=60 \\Rightarrow \\ell=20$ large drinks (and $s=20$, which checks: $2(20)+5(20)=40+100=140$). $\\checkmark$\n\n**Common Mistakes:** Solving for $\\ell$ (large) is the target; here $s$ also comes out to $20$, so confirm you are reporting large, not small. A sign slip on $-2\\ell+5\\ell$ produces a wrong count.\n\n**Test Day Takeaway:** Define each variable, write a count equation and a money equation, then substitute and solve for the quantity asked.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'two-equation-system-from-a-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-252', domain: 'algebra', skills: ['word-problem-to-equation', 'setting-up-systems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A father is three times as old as his son. In $12$ years, the father will be twice as old as the son. How old is the son now?',
    choices: [{ id: 'A', text: '$12$' }, { id: 'B', text: '$24$' }, { id: 'C', text: '$36$' }, { id: 'D', text: '$6$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Let the son's current age be $s$; the father is $3s$. In $12$ years: $3s+12=2(s+12)$. Solve: $3s+12=2s+24 \\Rightarrow s=12$. That is choice A.\n\n**The Full Solution:**\nStep 1: Now: father $=3s$, son $=s$.\nStep 2: In $12$ years, add $12$ to each age, and the father is twice the son: $3s+12=2(s+12)$.\nStep 3: $3s+12=2s+24 \\Rightarrow s=12$ (check: now $36$ and $12$; in $12$ years $48$ and $24$, and $48=2 \\cdot 24$). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($24$): the son's age in $12$ years ($s+12$), not his age now.\n* Choice C ($36$): the father's current age, not the son's.\n* Choice D ($6$): a half-step error that fails to add $12$ to both ages.\n\n**Test Day Takeaway:** Age problems need expressions for NOW and LATER; add the same time to every age, then translate the future comparison into one equation.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'two-equation-system-from-a-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-253', domain: 'algebra', skills: ['word-problem-to-equation', 'setting-up-systems'], difficulty: 'medium', type: 'fill-in',
    question: 'The perimeter of a rectangle is $30$ inches. The length is $3$ inches more than the width. What is the length, in inches?',
    correctAnswer: '9',
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~20s):** Perimeter $2(l+w)=30$ gives $l+w=15$. Since $l=w+3$, the width and length differ by $3$ and sum to $15$, so $l=9$, $w=6$.\n\n**The Full Solution:**\nStep 1: Translate the perimeter: $2(l+w)=30 \\Rightarrow l+w=15$.\nStep 2: Translate the relationship: \"length is $3$ more than width\" means $l=w+3$.\nStep 3: Substitute: $(w+3)+w=15 \\Rightarrow 2w=12 \\Rightarrow w=6$, so $l=6+3=9$.\n\n**Common Mistakes:** Reporting the width $6$ instead of the length; forgetting to divide the perimeter by $2$ and working from $l+w=30$.\n\n**Test Day Takeaway:** Rectangle problems pair a perimeter equation with a dimension relationship — set up both, then substitute one into the other.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'two-equation-system-from-a-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-254', domain: 'algebra', skills: ['word-problem-to-equation', 'setting-up-systems'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A coin jar contains nickels and dimes worth a total of $\\$3.20$. If there are $42$ coins in total, how many nickels are in the jar?',
    choices: [{ id: 'A', text: '$20$' }, { id: 'B', text: '$22$' }, { id: 'C', text: '$16$' }, { id: 'D', text: '$30$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Count: $n+d=42$. Value (in cents): $5n+10d=320$. Substitute $d=42-n$: $5n+10(42-n)=320 \\Rightarrow -5n=-100 \\Rightarrow n=20$.\n\n**The Full Solution:**\nStep 1: Let $n$ be nickels, $d$ dimes. The count equation is $n+d=42$.\nStep 2: Convert dollars to cents to avoid decimals: $5n+10d=320$.\nStep 3: From the count, $d=42-n$. Substitute: $5n+10(42-n)=320$.\nStep 4: $5n+420-10n=320 \\Rightarrow -5n=-100 \\Rightarrow n=20$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($22$): the number of dimes ($d=42-20=22$) — solved correctly but reported the wrong coin.\n* Choice C ($16$): comes from a value slip; ignores that each dime is worth $10$ cents.\n* Choice D ($30$): uses only the count constraint and never applies the value total.\n\n**Test Day Takeaway:** Multiply coin equations through by $100$ (or work in cents) to clear decimals, then track which variable the question actually asks for.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'two-equation-system-from-a-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-255', domain: 'algebra', skills: ['word-problem-to-equation', 'setting-up-systems'], difficulty: 'hard', type: 'fill-in',
    question: 'A movie theater sells adult tickets for $\\$12$ and child tickets for $\\$8$. For a Saturday show, $80$ tickets were sold for a total of $\\$840$. How many adult tickets were sold?',
    correctAnswer: '50',
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**The correct answer is $50$.**\n\n**The Fast Way (~25s):** Count: $a+c=80$. Revenue: $12a+8c=840$. Substitute $c=80-a$: $12a+8(80-a)=840 \\Rightarrow 4a=200 \\Rightarrow a=50$.\n\n**The Full Solution:**\nStep 1: Let $a$ be adult tickets, $c$ child tickets. Then $a+c=80$.\nStep 2: Revenue: $12a+8c=840$.\nStep 3: From the count, $c=80-a$. Substitute: $12a+8(80-a)=840$.\nStep 4: $12a+640-8a=840 \\Rightarrow 4a=200 \\Rightarrow a=50$.\n\n**Common Mistakes:** Reporting the child-ticket count $30$ instead of the adult count; dropping the $\\$8$ child price and solving $12a=840$.\n\n**Test Day Takeaway:** Ticket problems give one count equation and one money equation — substitute the count relationship into the money equation in a single move.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'two-equation-system-from-a-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 11/4: solve-for-a-combination (8 items) =====
  { id: 'bank-alg-256', domain: 'algebra', skills: ['elimination-method'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $2x + 3y = 17$ and $x + 4y = 11$, what is the value of $x + y$?',
    choices: [{ id: 'A', text: '$8$' }, { id: 'B', text: '$11$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Solve the system fully and add. From $x+4y=11$, $x=11-4y$; sub into $2x+3y=17$: $22-5y=17 \\Rightarrow y=1$, $x=7$. So $x+y=8$.\n\n**The Full Solution:**\nStep 1: Solve equation 2 for $x$: $x=11-4y$.\nStep 2: Substitute into equation 1: $2(11-4y)+3y=17 \\Rightarrow 22-5y=17 \\Rightarrow y=1$.\nStep 3: Back-substitute: $x=11-4(1)=7$.\nStep 4: Add: $x+y=7+1=8$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($11$): the right side of equation 2 — confuses $x+y$ with $x+4y=11$.\n* Choice C ($5$): a sign slip during substitution yields $y=-1$, $x=6$, and a wrong sum.\n* Choice D ($3$): reports $x-y=7-1=6$ miscomputed, or otherwise mixes up the requested combination — the question asks for $x+y$, not a difference.\n\n**Test Day Takeaway:** When asked for a combination, solve the system fully, then compute exactly the expression requested — don't report a single variable or a given constant.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-a-combination', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-257', domain: 'algebra', skills: ['elimination-method'], difficulty: 'easy', type: 'fill-in',
    question: 'If $a + b = 10$ and $a - b = 4$, what is the value of $2a + 3b$?',
    correctAnswer: '23',
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**The correct answer is $23$.**\n\n**The Fast Way (~15s):** Add the equations: $2a=14 \\Rightarrow a=7$. Subtract: $2b=6 \\Rightarrow b=3$. Then $2a+3b=14+9=23$.\n\n**The Full Solution:**\nStep 1: Add $a+b=10$ and $a-b=4$ to eliminate $b$: $2a=14 \\Rightarrow a=7$.\nStep 2: Subtract to eliminate $a$: $2b=6 \\Rightarrow b=3$.\nStep 3: Evaluate the target: $2(7)+3(3)=14+9=23$.\n\n**Common Mistakes:** Computing $a+b=10$ or $a-b=4$ and stopping; forgetting to weight $b$ by $3$ when evaluating $2a+3b$.\n\n**Test Day Takeaway:** When the two equations are $a+b$ and $a-b$, add to get $2a$ and subtract to get $2b$ — the fastest route to any combination of $a$ and $b$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-a-combination', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-258', domain: 'algebra', skills: ['elimination-method'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $3x + 5y = 20$ and $x + y = 6$, what is the value of $2x + 4y$?',
    choices: [{ id: 'A', text: '$14$' }, { id: 'B', text: '$20$' }, { id: 'C', text: '$12$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Subtract equation 2 from equation 1: $(3x+5y)-(x+y)=20-6$, which gives exactly $2x+4y=14$ — no need to solve for $x$ or $y$.\n\n**The Full Solution:**\nStep 1: The target $2x+4y$ matches the difference of the left sides: $(3x+5y)-(x+y)=2x+4y$.\nStep 2: So subtract the right sides too: $20-6=14$.\nStep 3: Therefore $2x+4y=14$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($20$): the right side of equation 1 — uses $3x+5y$ directly instead of forming the combination.\n* Choice C ($12$): doubles equation 2 to get $2x+2y=12$, the wrong combination.\n* Choice D ($8$): mis-combines the equations instead of cleanly subtracting equation 2 from equation 1.\n\n**Test Day Takeaway:** Before solving, check whether adding or subtracting the equations lands the target combination directly — it often saves the full solve.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-a-combination', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-259', domain: 'algebra', skills: ['elimination-method'], difficulty: 'medium', type: 'fill-in',
    question: 'If $x + 2y = 10$ and $3x + 6y = c$, where the system has infinitely many solutions, what is the value of $c$?',
    correctAnswer: '30',
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~15s):** For infinitely many solutions the two equations are the same line. Equation 2 is $3$ times equation 1: $3(x+2y)=3(10)$, so $c=30$.\n\n**The Full Solution:**\nStep 1: $3x+6y$ is exactly $3(x+2y)$, so equation 2 is a scalar multiple of equation 1 on the left side.\nStep 2: For the system to have infinitely many solutions, the right sides must scale by the same factor: $c=3\\cdot 10$.\nStep 3: $c=30$.\n\n**Common Mistakes:** Leaving the constant unscaled at $10$; scaling by the wrong factor (e.g. using $6$ instead of $3$).\n\n**Test Day Takeaway:** Infinitely many solutions means one equation is a scalar multiple of the other — apply the same multiplier to the constant that you applied to the coefficients.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-a-combination', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-260', domain: 'algebra', skills: ['elimination-method'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $4a - 3b = 11$ and $2a + b = 7$, what is the value of $6a - 2b$?',
    choices: [{ id: 'A', text: '$18$' }, { id: 'B', text: '$22$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$14$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Add the equations: $(4a-3b)+(2a+b)=11+7$, which gives $6a-2b=18$ — exactly the target.\n\n**The Full Solution:**\nStep 1: Add the left sides: $(4a-3b)+(2a+b)=6a-2b$, which is the requested expression.\nStep 2: Add the right sides: $11+7=18$.\nStep 3: Therefore $6a-2b=18$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($22$): double-counts equation 2 (adds $2a+b$ twice) instead of adding each once.\n* Choice C ($11$): the right side of equation 1 — reports $4a-3b$ rather than the combination.\n* Choice D ($14$): mis-combines the constants, e.g. subtracting instead of straight addition.\n\n**Test Day Takeaway:** When the target combination equals the sum of the two left sides, the answer is just the sum of the two right sides — add the equations.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-a-combination', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-261', domain: 'algebra', skills: ['elimination-method'], difficulty: 'medium', type: 'fill-in',
    question: 'If $3x + 2y = 15$ and $x + 3y = 13$, what is the value of $4x + 5y$?',
    correctAnswer: '28',
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**The correct answer is $28$.**\n\n**The Fast Way (~15s):** The target $4x+5y$ is the sum of the two left sides: $(3x+2y)+(x+3y)=4x+5y$. So add the right sides: $15+13=28$.\n\n**The Full Solution:**\nStep 1: Check the coefficients: $3+1=4$ for $x$ and $2+3=5$ for $y$, matching the target $4x+5y$.\nStep 2: Add the equations: $(3x+2y)+(x+3y)=15+13$.\nStep 3: This gives $4x+5y=28$.\n\n**Common Mistakes:** Solving the full system unnecessarily and arithmetic-slipping; subtracting the equations instead of adding.\n\n**Test Day Takeaway:** Compare the target's coefficients to the sum (or difference) of the system's coefficients — when they match, combine the equations directly instead of solving.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-a-combination', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-262', domain: 'algebra', skills: ['elimination-method'], difficulty: 'hard', type: 'multiple-choice',
    question: 'If $5x + 2y = 18$ and $3x + 2y = 10$, what is the value of $x + y$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$1$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Subtract: $(5x+2y)-(3x+2y)=18-10 \\Rightarrow 2x=8 \\Rightarrow x=4$. Back-substitute into $3x+2y=10$: $12+2y=10 \\Rightarrow y=-1$. So $x+y=3$.\n\n**The Full Solution:**\nStep 1: The $y$ terms match, so subtract the equations to eliminate $y$: $2x=8 \\Rightarrow x=4$.\nStep 2: Substitute $x=4$ into $3x+2y=10$: $12+2y=10 \\Rightarrow 2y=-2 \\Rightarrow y=-1$.\nStep 3: Add: $x+y=4+(-1)=3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): the difference of the right sides ($18-10$), which equals $2x$, not $x+y$.\n* Choice C ($4$): reports $x$ alone and stops before back-substituting for $y$.\n* Choice D ($1$): reports $|y|$, dropping the negative sign on $y=-1$.\n\n**Test Day Takeaway:** Eliminate the matching variable, find one unknown, then back-substitute for the other before computing the requested combination.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-a-combination', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-263', domain: 'algebra', skills: ['elimination-method'], difficulty: 'hard', type: 'fill-in',
    question: 'If $2x - y = 5$ and $x + 3y = 6$, what is the value of $3x + 2y$?',
    correctAnswer: '11',
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~15s):** The target $3x+2y$ is the sum of the left sides: $(2x-y)+(x+3y)=3x+2y$. So add the right sides: $5+6=11$.\n\n**The Full Solution:**\nStep 1: Add the equations: $(2x-y)+(x+3y)=5+6$.\nStep 2: The left side combines to $3x+2y$, matching the target.\nStep 3: Therefore $3x+2y=11$.\n\n**Common Mistakes:** Solving the full system and arithmetic-slipping; subtracting instead of adding and getting $x-4y$.\n\n**Test Day Takeaway:** When the target combination equals the sum of the left sides, the answer is the sum of the right sides — add the equations.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-a-combination', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 11/5: same-line-infinitely-many-solutions (8 items) =====
  { id: 'bank-alg-264', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The system $2x + 5y = 9$ and $8x + 20y = a$ has infinitely many solutions. What is the value of $a$?',
    choices: [{ id: 'A', text: '$36$' }, { id: 'B', text: '$9$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$45$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Infinitely many solutions means the two equations are the same line. Equation 2 is $4$ times equation 1 ($8x+20y=4(2x+5y)$), so $a=4\\cdot 9=36$.\n\n**The Full Solution:**\nStep 1: Compare coefficients: $8\\div 2=4$ and $20\\div 5=4$, so the left side of equation 2 is $4$ times equation 1.\nStep 2: For the lines to coincide (infinitely many solutions), the constant must scale by the same factor.\nStep 3: $a=4\\cdot 9=36$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): leaves the constant unchanged instead of scaling it by $4$.\n* Choice C ($4$): reports the scale factor itself rather than $4\\cdot 9$.\n* Choice D ($45$): scales by $5$ instead of $4$.\n\n**Test Day Takeaway:** Infinitely many solutions = same line = scalar multiple. Find the multiplier from the coefficients, then apply it to the constant.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-265', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'easy', type: 'fill-in',
    question: 'If $3x + 7y = c$ and $6x + 14y = 16$ have infinitely many solutions, what is the value of $c$?',
    correctAnswer: '8',
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~10s):** The second equation is exactly $2$ times the first: $6x+14y=2(3x+7y)$. So the constant must scale the same way: $c=\\frac{16}{2}=8$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the two equations describe the same line, so one is a scalar multiple of the other.\nStep 2: Compare $x$-coefficients: $\\frac{6}{3}=2$, and $y$-coefficients: $\\frac{14}{7}=2$. The scalar is $2$.\nStep 3: Apply that scalar to the constant: $2c=16 \\Rightarrow c=8$.\n\n**Common Mistakes:** Reporting $16$ (forgetting to undo the scale factor on the constant), or dividing the wrong direction and getting $32$.\n\n**Test Day Takeaway:** Same line means every term scales by the same factor. Find the scalar from the coefficients, then apply it to the constant.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-266', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For the system $2x - 3y = 5$ and $-6x + 9y = c$ to have infinitely many solutions, what is the value of $c$?',
    choices: [{ id: 'A', text: '$-15$' }, { id: 'B', text: '$15$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$-5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Multiply the first equation by $-3$: $-3(2x-3y)=-6x+9y$, matching the second equation's left side. So $c=-3\\cdot 5=-15$, which is choice A.\n\n**The Full Solution:**\nStep 1: For infinitely many solutions the equations must be the same line, so the second is a scalar multiple of the first.\nStep 2: $x$-coefficients: $\\frac{-6}{2}=-3$, and $y$-coefficients: $\\frac{9}{-3}=-3$. The scalar is $-3$.\nStep 3: Apply it to the constant: $c=-3\\cdot 5=-15$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($15$): drops the negative sign of the scalar, computing $3\\cdot 5$ instead of $-3\\cdot 5$.\n* Choice C ($5$): leaves the original constant unchanged, ignoring the scaling entirely.\n* Choice D ($-5$): flips just the sign of the original constant rather than applying the full $-3$ scalar.\n\n**Test Day Takeaway:** A negative scalar multiplies every term, the constant included. Watch the sign on the constant.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-267', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'medium', type: 'fill-in',
    question: 'If $kx + 3y = 9$ and $4x + 6y = 18$ have infinitely many solutions, what is the value of $k$?',
    correctAnswer: '2',
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~15s):** The clean ratio is the $y$-coefficients: $\\frac{6}{3}=2$, so the scalar is $2$. Match the $x$-coefficient: $\\frac{4}{k}=2 \\Rightarrow k=2$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the equations are the same line, so the second is a scalar multiple of the first.\nStep 2: Use a term with no unknown to find the scalar. The $y$-coefficients give $\\frac{6}{3}=2$; the constants confirm it: $\\frac{18}{9}=2$.\nStep 3: Apply the scalar to the $x$-coefficient: $2k=4 \\Rightarrow k=2$.\n\n**Common Mistakes:** Reporting $8$ by computing $4\\cdot 2$ instead of $\\frac{4}{2}$, or copying the second equation's coefficient $4$ directly.\n\n**Test Day Takeaway:** Find the scalar from a term you fully know, then back out the unknown coefficient.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-268', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For what value of $b$ does $5x + by = 10$ and $10x + 4y = 20$ have infinitely many solutions?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$10$' }, { id: 'D', text: '$\\dfrac{1}{2}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The second equation is $2$ times the first ($\\frac{10}{5}=2$, $\\frac{20}{10}=2$). So $2b=4 \\Rightarrow b=2$, which is choice A.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the same line, so the second equation is a scalar multiple of the first.\nStep 2: The $x$-coefficients give the scalar: $\\frac{10}{5}=2$. The constants confirm it: $\\frac{20}{10}=2$.\nStep 3: The $y$-coefficient must scale the same way: $2b=4 \\Rightarrow b=2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): copies the second equation's $y$-coefficient directly, forgetting to divide by the scalar.\n* Choice C ($10$): copies the constant from the first equation as the coefficient.\n* Choice D ($\\frac{1}{2}$): uses the reciprocal of the scalar instead of dividing $4$ by $2$.\n\n**Test Day Takeaway:** The scalar from the $x$-coefficients applies to every term, so divide the matching term by it to recover an unknown.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-269', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'medium', type: 'fill-in',
    question: 'If $3x - 4y = c$ and $9x - 12y = 21$ are equivalent (same line), what is the value of $c$?',
    correctAnswer: '7',
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~10s):** The second equation is $3$ times the first: $9x-12y=3(3x-4y)$. So $3c=21 \\Rightarrow c=\\frac{21}{3}=7$.\n\n**The Full Solution:**\nStep 1: \"Equivalent\" / same line means one equation is a scalar multiple of the other.\nStep 2: The coefficients give the scalar: $\\frac{9}{3}=3$ and $\\frac{-12}{-4}=3$.\nStep 3: Apply it to the constant: $3c=21 \\Rightarrow c=7$.\n\n**Common Mistakes:** Reporting $21$ (forgetting to undo the scaling) or multiplying instead of dividing to get $63$.\n\n**Test Day Takeaway:** \"Equivalent equations\" is the same-line condition: every term, constant included, scales by the same factor.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-270', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The system $ax + 5y = b$ and $4x + 10y = 18$ has infinitely many solutions. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$11$' }, { id: 'B', text: '$9$' }, { id: 'C', text: '$13$' }, { id: 'D', text: '$22$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The $y$-coefficients give the scalar: $\\frac{10}{5}=2$. So $2a=4 \\Rightarrow a=2$ and $2b=18 \\Rightarrow b=9$, giving $a+b=11$, which is choice A.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the same line, so the second equation is a scalar multiple of the first.\nStep 2: The $y$-coefficients fix the scalar: $\\frac{10}{5}=2$.\nStep 3: Apply it to both unknowns. $x$: $2a=4 \\Rightarrow a=2$. Constant: $2b=18 \\Rightarrow b=9$.\nStep 4: Add: $a+b=2+9=11$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): reports $b$ alone, forgetting to add $a$.\n* Choice C ($13$): adds the second equation's $x$-coefficient $4$ to $b=9$ instead of using $a=2$.\n* Choice D ($22$): doubles the correct sum, re-applying the scalar to the final answer.\n\n**Test Day Takeaway:** With two unknowns, find the scalar once, then apply it to each term separately before combining.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-271', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'hard', type: 'fill-in',
    question: 'For the system $x + ay = 4$ and $3x - 6y = 12$ to have infinitely many solutions, what is the value of $a$?',
    correctAnswer: '-2',
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**The correct answer is $-2$.**\n\n**The Fast Way (~15s):** The constants give the cleanest scalar: $\\frac{12}{4}=3$. Match the $y$-coefficient: $3a=-6 \\Rightarrow a=-2$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the same line, so the second equation is a scalar multiple of the first.\nStep 2: Use the constants to find the scalar: $\\frac{12}{4}=3$. The $x$-coefficients confirm it: $\\frac{3}{1}=3$.\nStep 3: Apply the scalar to the $y$-coefficient: $3a=-6 \\Rightarrow a=-2$.\n\n**Common Mistakes:** Dropping the negative and reporting $2$, or using the wrong scalar and getting $-\\frac{6}{1}=-6$.\n\n**Test Day Takeaway:** Pull the scalar from the cleanest fully-known ratio, then solve for the unknown coefficient. Keep the sign.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 11/1: vertex-form-to-standard-form (8 items) =====
  // Convert vertex form to standard, ask for coefficient sum or specific value.
  { id: 'bank-alg-272', domain: 'algebra', skills: ['distributive-property', 'converting-quadratic-forms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = (x - 2)^2 + 3$. Which of the following expresses $f(x)$ in standard form $ax^2 + bx + c$?',
    choices: [{ id: 'A', text: '$x^2 - 4x + 7$' }, { id: 'B', text: '$x^2 + 4x + 7$' }, { id: 'C', text: '$x^2 - 4x + 3$' }, { id: 'D', text: '$x^2 - 2x + 3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Expand $(x-2)^2=x^2-4x+4$, then add the $3$: $x^2-4x+7$, which is choice A.\n\n**The Full Solution:**\nStep 1: Square the binomial using $(x-h)^2=x^2-2hx+h^2$ with $h=2$: $x^2-4x+4$.\nStep 2: Add the vertical shift $+3$ to the constant: $4+3=7$.\nStep 3: The standard form is $x^2-4x+7$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($x^2+4x+7$): sign error on the middle term, using $+2h$ instead of $-2h$.\n* Choice C ($x^2-4x+3$): forgets to add the $h^2=4$ from the square, keeping only the $+3$.\n* Choice D ($x^2-2x+3$): multiplies the cross term once instead of twice, turning $-4x$ into $-2x$, and drops $h^2$.\n\n**Test Day Takeaway:** $(x-h)^2=x^2-2hx+h^2$. The middle coefficient is $-2h$, and don't forget the $h^2$ term before adding the shift.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-273', domain: 'algebra', skills: ['distributive-property', 'converting-quadratic-forms'], difficulty: 'easy', type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = (x + 3)^2 - 5$. What is the constant term in standard form?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~10s):** Only the constant matters. $(x+3)^2$ contributes $3^2=9$; the $-5$ shift gives $9-5=4$.\n\n**The Full Solution:**\nStep 1: Expand $(x+3)^2=x^2+6x+9$ using $(x+h)^2=x^2+2hx+h^2$ with $h=3$.\nStep 2: Add the $-5$: $x^2+6x+9-5=x^2+6x+4$.\nStep 3: The constant term is $4$.\n\n**Common Mistakes:** Reporting $-5$ (using only the shift and ignoring $h^2$), or $14$ from $9+5$ instead of $9-5$.\n\n**Test Day Takeaway:** The constant of $(x-h)^2+k$ in standard form is $h^2+k$, not just $k$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-274', domain: 'algebra', skills: ['distributive-property', 'converting-quadratic-forms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 2(x - 3)^2 + 1$. What is the coefficient of $x$ when $f(x)$ is written in standard form?',
    choices: [{ id: 'A', text: '$-12$' }, { id: 'B', text: '$-6$' }, { id: 'C', text: '$6$' }, { id: 'D', text: '$12$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Square first, then distribute the $2$: $2(x-3)^2=2(x^2-6x+9)=2x^2-12x+18$. The $x$-coefficient is $-12$, which is choice A.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x-3)^2=x^2-6x+9$.\nStep 2: Distribute the leading coefficient $2$ to every term: $2x^2-12x+18$.\nStep 3: The coefficient of $x$ is $-12$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-6$): forgets to distribute the $2$, reporting the coefficient inside the parentheses.\n* Choice C ($6$): drops the sign of the middle term.\n* Choice D ($12$): distributes correctly but drops the negative sign.\n\n**Test Day Takeaway:** Square the binomial first, then distribute the leading coefficient to all three terms. The middle term picks up that factor too.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-275', domain: 'algebra', skills: ['distributive-property', 'converting-quadratic-forms'], difficulty: 'medium', type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = (x - 5)^2 + 3$. When $f(x)$ is rewritten in the form $x^2 + bx + c$, what is the value of $b + c$?',
    correctAnswer: '18',
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is $18$.**\n\n**The Fast Way (~15s):** Expand $(x-5)^2+3=x^2-10x+28$. Then $b+c=-10+28=18$.\n\n**The Full Solution:**\nStep 1: Square: $(x-5)^2=x^2-10x+25$.\nStep 2: Add the $+3$ to the constant: $x^2-10x+28$, so $b=-10$ and $c=28$.\nStep 3: Sum: $b+c=-10+28=18$.\n\n**Common Mistakes:** Forgetting the $+3$ and using $c=25$ to get $15$, or sign-slipping on $b$ and reporting $38$.\n\n**Test Day Takeaway:** Expand fully, identify each coefficient by name, then combine. The constant is $h^2+k$, not just $k$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-276', domain: 'algebra', skills: ['distributive-property', 'converting-quadratic-forms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Function $f$ is given by $f(x) = a(x - 4)^2 - 7$. If $f(2) = 5$, what is the value of $a + b + c$ when $f$ is in standard form $ax^2 + bx + c$?',
    choices: [{ id: 'A', text: '$20$' }, { id: 'B', text: '$41$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$-3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** In standard form $ax^2+bx+c$, the sum $a+b+c$ equals $f(1)$. First find $a$ from $f(2)=5$: $a(2-4)^2-7=5 \\Rightarrow 4a-7=5 \\Rightarrow a=3$. Then $f(1)=3(1-4)^2-7=27-7=20$, which is choice A.\n\n**The Full Solution:**\nStep 1: Use the given point to solve for $a$. $f(2)=a(2-4)^2-7=4a-7$, and this equals $5$, so $4a=12 \\Rightarrow a=3$.\nStep 2: Recognize the shortcut: substituting $x=1$ into $ax^2+bx+c$ gives $a+b+c$, so $a+b+c=f(1)$.\nStep 3: Evaluate $f(1)=3(1-4)^2-7=3(9)-7=27-7=20$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($41$): plugs $x=2$ into the standard form, computing $f(2)=4a+2b+c$ instead of $f(1)$.\n* Choice C ($3$): reports $a$ alone, stopping after solving for the leading coefficient.\n* Choice D ($-3$): sign error when solving $4a-7=5$, landing on $a=-3$.\n\n**Test Day Takeaway:** $a+b+c=f(1)$ for any quadratic in standard form. No expansion needed once you have the function.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-277', domain: 'algebra', skills: ['distributive-property', 'converting-quadratic-forms'], difficulty: 'medium', type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = -(x + 1)^2 + 6$. What is the constant term in standard form?',
    correctAnswer: '5',
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** Only the constant matters. The squared term contributes $-(1)^2 = -1$, and the $+6$ stays, so the constant is $-1 + 6 = 5$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x+1)^2 = x^2 + 2x + 1$.\nStep 2: Distribute the leading $-1$: $-(x^2 + 2x + 1) = -x^2 - 2x - 1$.\nStep 3: Add the $+6$: $f(x) = -x^2 - 2x + 5$. The constant term is $5$.\n\n**Common Mistakes:** Reporting $6$ (forgetting that expanding the square adds $-1$ to the constant); reporting $-1$ (dropping the $+6$ entirely).\n\n**Test Day Takeaway:** When converting vertex form to standard form, the constant is $a \\cdot h^2$ plus $k$ with the sign of $a$ applied — distribute the leading sign through every term.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-278', domain: 'algebra', skills: ['distributive-property', 'converting-quadratic-forms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 3(x - 2)^2 + k$, where $k$ is a constant. When $f(x)$ is rewritten in standard form, the result is $3x^2 - 12x + 17$. What is the value of $k$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$17$' }, { id: 'C', text: '$12$' }, { id: 'D', text: '$-12$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Expand $3(x-2)^2 = 3x^2 - 12x + 12$. Adding $k$ gives a constant of $12 + k$, which must equal the $17$ in standard form: $12 + k = 17 \\Rightarrow k = 5$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x-2)^2 = x^2 - 4x + 4$.\nStep 2: Distribute the $3$: $3x^2 - 12x + 12$.\nStep 3: Add $k$: the standard form is $3x^2 - 12x + (12 + k)$.\nStep 4: Match the constants: $12 + k = 17 \\Rightarrow k = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($17$): copies the standard-form constant straight to $k$ — it forgets the expansion already supplies $+12$.\n* Choice C ($12$): reports the expansion constant $3 \\cdot 2^2 = 12$ as $k$ — that piece is not $k$.\n* Choice D ($-12$): reports the middle coefficient $-12$ as $k$ — wrong slot.\n\n**Test Day Takeaway:** Expand the vertex term fully first, then match the constant terms — $k$ is the difference between the target constant and what the expansion already produces.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-279', domain: 'algebra', skills: ['distributive-property', 'converting-quadratic-forms'], difficulty: 'hard', type: 'fill-in',
    question: 'The function $f$ is defined by $f(x) = 2(x - 3)^2 - 5$. What is the value of $f(x)$ at $x = 5$?',
    correctAnswer: '3',
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~15s):** No need to expand — substitute directly: $f(5) = 2(5-3)^2 - 5 = 2(4) - 5 = 3$.\n\n**The Full Solution:**\nStep 1: Plug $x = 5$ into the vertex form: $f(5) = 2(5-3)^2 - 5$.\nStep 2: Simplify inside the parentheses: $5 - 3 = 2$, so $(2)^2 = 4$.\nStep 3: Finish: $2(4) - 5 = 8 - 5 = 3$.\n\n**Common Mistakes:** Squaring before subtracting (order of operations: the parentheses come first); forgetting to multiply by $2$ and reporting $4 - 5 = -1$.\n\n**Test Day Takeaway:** To evaluate a function at a point, substitute the value as-is — converting to standard form just adds work.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 12/5: identifying-identity-contradiction-equations (8 items) =====
  { id: 'bank-alg-280', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which of the following equations has infinitely many solutions?',
    choices: [{ id: 'A', text: '$3(x + 2) = 3x + 6$' }, { id: 'B', text: '$3(x + 2) = 3x + 5$' }, { id: 'C', text: '$3(x + 2) = 5$' }, { id: 'D', text: '$3(x + 2) = 0$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** An equation has infinitely many solutions only when both sides simplify to the identical expression. Choice A: $3(x+2) = 3x + 6$ becomes $3x + 6 = 3x + 6$ — true for every $x$.\n\n**The Full Solution:**\nStep 1: Distribute the left side in each option: $3(x+2) = 3x + 6$.\nStep 2: Choice A compares $3x + 6$ to $3x + 6$ — an identity, so infinitely many solutions.\n\n**Why the wrong answers are tempting:**\n* Choice B: $3x + 6 = 3x + 5$ subtracts to $6 = 5$, a contradiction — no solution, not infinitely many.\n* Choice C: $3x + 6 = 5 \\Rightarrow x = -\\frac{1}{3}$ — one unique solution.\n* Choice D: $3x + 6 = 0 \\Rightarrow x = -2$ — one unique solution.\n\n**Test Day Takeaway:** Infinitely many solutions means the two sides are the same expression after simplifying — same $x$-coefficient and same constant.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'identifying-identity-contradiction-equations', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-281', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'easy', type: 'fill-in',
    question: 'For what value of $k$ does $4(x - 1) + 5 = 4x + k$ have infinitely many solutions?',
    correctAnswer: '1',
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**The correct answer is $1$.**\n\n**The Fast Way (~15s):** Simplify the left side: $4(x-1) + 5 = 4x - 4 + 5 = 4x + 1$. For an identity, the right side $4x + k$ must match, so $k = 1$.\n\n**The Full Solution:**\nStep 1: Distribute: $4(x-1) = 4x - 4$.\nStep 2: Combine constants: $4x - 4 + 5 = 4x + 1$.\nStep 3: Match against $4x + k$. The $x$-terms already agree, so set the constants equal: $k = 1$.\n\n**Common Mistakes:** Reporting $5$ or $-4$ instead of combining them to $+1$.\n\n**Test Day Takeaway:** Infinitely many solutions requires both coefficients and constants to match — simplify each side fully, then match the constant.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'identifying-identity-contradiction-equations', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-282', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following equations has no solution?',
    choices: [{ id: 'A', text: '$2(x + 3) = 2x + 5$' }, { id: 'B', text: '$2(x + 3) = 2x + 6$' }, { id: 'C', text: '$2(x + 3) = 0$' }, { id: 'D', text: '$2(x + 3) = x + 5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** No solution happens when the $x$-terms cancel but the constants disagree. Choice A: $2(x+3) = 2x + 5$ becomes $2x + 6 = 2x + 5 \\Rightarrow 6 = 5$, which is false — no solution.\n\n**The Full Solution:**\nStep 1: Distribute the left side: $2(x+3) = 2x + 6$.\nStep 2: Choice A sets $2x + 6 = 2x + 5$; subtracting $2x$ leaves $6 = 5$, a contradiction.\n\n**Why the wrong answers are tempting:**\n* Choice B: $2x + 6 = 2x + 6$ is an identity — infinitely many solutions, not no solution.\n* Choice C: $2x + 6 = 0 \\Rightarrow x = -3$ — one unique solution.\n* Choice D: $2x + 6 = x + 5 \\Rightarrow x = -1$ — one unique solution.\n\n**Test Day Takeaway:** No solution means the variable terms cancel and the leftover constants disagree — that produces a false statement like $6 = 5$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'identifying-identity-contradiction-equations', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-283', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'fill-in',
    question: 'For what value of $k$ does $3(x + 4) - 2 = 3x + k$ have infinitely many solutions?',
    correctAnswer: '10',
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~15s):** Simplify the left side: $3(x+4) - 2 = 3x + 12 - 2 = 3x + 10$. For an identity against $3x + k$, the constants must match, so $k = 10$.\n\n**The Full Solution:**\nStep 1: Distribute: $3(x+4) = 3x + 12$.\nStep 2: Combine constants: $3x + 12 - 2 = 3x + 10$.\nStep 3: Match against $3x + k$: the $x$-coefficients already agree, so $k = 10$.\n\n**Common Mistakes:** Reporting $12$ (forgetting to subtract the $2$) or $14$ (adding instead of subtracting).\n\n**Test Day Takeaway:** Distribute and combine like terms before matching — the constant on the left after full simplification is the value $k$ must equal.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'identifying-identity-contradiction-equations', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-284', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In the equation $a(2x - 3) = 10x + b$, $a$ and $b$ are constants. The equation has infinitely many solutions. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$-20$' }, { id: 'B', text: '$-15$' }, { id: 'C', text: '$-10$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Identity / Contradiction — Match Coefficients**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Infinitely many solutions means the two sides are the same linear expression. Expand the left: $a(2x-3) = 2ax - 3a$. Match the $x$-coefficient: $2a = 10 \\Rightarrow a = 5$. Match the constant: $-3a = b \\Rightarrow b = -15$. So $a + b = 5 + (-15) = -10$.\n\n**The Full Solution:**\nStep 1: For the equation to hold for every $x$, both sides must be identical as polynomials.\nStep 2: Expand the left side: $a(2x-3) = 2ax - 3a$.\nStep 3: Match $x$-coefficients: $2a = 10 \\Rightarrow a = 5$.\nStep 4: Match constants: $-3a = b \\Rightarrow b = -3(5) = -15$.\nStep 5: $a + b = 5 + (-15) = -10$. Check: $5(2x-3) = 10x - 15$, and the right side is $10x + (-15)$ — identical. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-20$): mishandles the constant and lands on $b = -20$, adding an extra term that isn't there.\n* Choice B ($-15$): reports $b$ alone and stops before adding $a$.\n* Choice D ($5$): reports $a$ alone and stops before adding $b$.\n\n**Test Day Takeaway:** Infinitely many solutions means identical polynomials — match coefficients term by term, then re-read whether the question wants a value, a sum, or a product.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'identifying-identity-contradiction-equations', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-285', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'fill-in',
    question: 'For the equation $2(3x + 1) = 6x + a$ to have NO solution, what is the value $a$ cannot equal?',
    correctAnswer: '2',
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~15s):** Simplify the left side: $2(3x+1) = 6x + 2$. If $a = 2$ the equation is $6x + 2 = 6x + 2$, an identity with infinitely many solutions — so $a = 2$ is the one value that prevents \"no solution.\"\n\n**The Full Solution:**\nStep 1: Distribute: $2(3x+1) = 6x + 2$.\nStep 2: Compare with $6x + a$. The $x$-terms already match, so the equation hinges on the constants.\nStep 3: No solution requires the constants to disagree, i.e. $a \\neq 2$. When $a = 2$ the sides are identical (infinitely many solutions), so $a$ cannot equal $2$ for no solution.\n\n**Common Mistakes:** Answering $0$ or $6$ by misreading which constant must match; reporting the coefficient $6$ instead of the constant $2$.\n\n**Test Day Takeaway:** The single value that makes both sides identical is exactly the value excluded when you want \"no solution.\"",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'identifying-identity-contradiction-equations', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-286', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'hard', type: 'multiple-choice',
    question: 'For the equation $k(x + 3) + 7 = 4x + 13$ to have NO solution, what is the value of $k$?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$13$' }, { id: 'C', text: '$2$' }, { id: 'D', text: 'Any value works' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** No solution needs the $x$-terms to match while the constants differ. Left side: $k(x+3) + 7 = kx + 3k + 7$. Match $x$-coefficients: $k = 4$. Check the constants stay unequal: $3(4) + 7 = 19 \\neq 13$. So $k = 4$.\n\n**The Full Solution:**\nStep 1: Expand the left side: $k(x+3) + 7 = kx + 3k + 7$.\nStep 2: For the $x$-terms to cancel against $4x$, set $k = 4$.\nStep 3: Confirm the constants disagree: with $k = 4$, the left constant is $3(4) + 7 = 19$, and the right is $13$. Since $19 \\neq 13$, the equation has no solution.\n\n**Why the wrong answers are tempting:**\n* Choice B ($13$): copies the right-side constant as $k$ — value confusion.\n* Choice C ($2$): a value that makes the equation true for some specific $x$ rather than canceling the $x$-terms.\n* Choice D (Any value): wrong — only $k = 4$ forces no solution; any other $k$ gives a unique $x$.\n\n**Test Day Takeaway:** No solution requires the $x$-coefficients to match AND the constants to disagree — match the coefficient first, then verify the constants don't.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'identifying-identity-contradiction-equations', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-287', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'hard', type: 'fill-in',
    question: 'For the equation $a(x - 2) + 5 = 3x + b$ to have infinitely many solutions, what is the value of $a + b$?',
    correctAnswer: '2',
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~20s):** Infinitely many solutions means identical sides. Expand the left: $a(x-2) + 5 = ax - 2a + 5$. Match $x$-coefficients: $a = 3$. Match constants: $-2(3) + 5 = -1 = b$. So $a + b = 3 + (-1) = 2$.\n\n**The Full Solution:**\nStep 1: Expand the left side: $a(x-2) + 5 = ax - 2a + 5$.\nStep 2: Match the $x$-coefficient with $3x$: $a = 3$.\nStep 3: Match the constant with $b$: $-2a + 5 = b \\Rightarrow -6 + 5 = -1 = b$.\nStep 4: $a + b = 3 + (-1) = 2$.\n\n**Common Mistakes:** Reporting $a = 3$ or $b = -1$ alone instead of their sum; sign-slipping on $-2a + 5$ to get $b = 11$.\n\n**Test Day Takeaway:** Identity means both the coefficient and the constant must match — solve in two steps, then add exactly what the question asks for.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'identifying-identity-contradiction-equations', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 12/6: absolute-value-equation (8 items) =====
  { id: 'bank-alg-288', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the solution set of $|x| = 5$?',
    choices: [{ id: 'A', text: '$\\{-5, 5\\}$' }, { id: 'B', text: '$\\{5\\}$' }, { id: 'C', text: '$\\{0\\}$' }, { id: 'D', text: '$\\{-5\\}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $|x| = 5$ means $x$ is $5$ units from zero, so $x = 5$ or $x = -5$. The solution set is $\\{-5, 5\\}$.\n\n**The Full Solution:**\nStep 1: Absolute value measures distance from zero, so $|x| = 5$ splits into two cases.\nStep 2: $x = 5$ or $x = -5$, giving the set $\\{-5, 5\\}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\{5\\}$): keeps only the positive branch — forgets the negative solution.\n* Choice C ($\\{0\\}$): misreads the equation; $|x| = 5$ is satisfied at distance $5$, not at $0$.\n* Choice D ($\\{-5\\}$): keeps only the negative branch — forgets the positive solution.\n\n**Test Day Takeaway:** For $|x| = k$ with a positive $k$, there are always two solutions, $x = \\pm k$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'absolute-value-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-289', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'fill-in',
    question: 'How many solutions does the equation $|x| = 0$ have?',
    correctAnswer: '1',
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**The correct answer is $1$.**\n\n**The Fast Way (~5s):** $|x|$ measures distance from $0$, and only $x=0$ sits zero away from $0$, so there is exactly one solution.\n\n**The Full Solution:**\nStep 1: $|x|=0$ means the distance from $x$ to $0$ is $0$.\nStep 2: The only number whose distance from $0$ is $0$ is $0$ itself, so $x=0$.\nStep 3: That is a single value, so the equation has $1$ solution.\n\n**Common Mistakes:** Answering $2$ by reflexively applying the \"$|x|=k$ gives two solutions\" rule — that rule needs $k>0$; when $k=0$ the two cases collapse into one.\n\n**Test Day Takeaway:** $|x|=k$ has $2$ solutions when $k>0$, exactly $1$ when $k=0$, and $0$ when $k<0$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'absolute-value-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-290', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the sum of solutions of $|x - 3| = 7$?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$14$' }, { id: 'D', text: '$0$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The two solutions of $|x-h|=k$ are symmetric about $h$, so their sum is $2h=2(3)=6$.\n\n**The Full Solution:**\nStep 1: Split into two cases: $x-3=7$ or $x-3=-7$.\nStep 2: Solve each: $x=10$ or $x=-4$.\nStep 3: Add: $10+(-4)=6$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($10$): reports only the larger solution instead of the sum of both.\n* Choice C ($14$): doubles the constant $7$ rather than the center $h=3$.\n* Choice D ($0$): assumes the solutions are symmetric about $0$, but they are symmetric about $h=3$.\n\n**Test Day Takeaway:** The two solutions of $|x-h|=k$ sum to $2h$ because they sit equal distances on either side of $h$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'absolute-value-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-291', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'fill-in',
    question: 'What is the positive solution of $|2x - 6| = 8$?',
    correctAnswer: '7',
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~15s):** $|2x-6|=8$ gives $2x-6=\\pm 8$. The positive root comes from $2x-6=8 \\Rightarrow x=7$.\n\n**The Full Solution:**\nStep 1: Split into two cases: $2x-6=8$ or $2x-6=-8$.\nStep 2: First case: $2x=14 \\Rightarrow x=7$.\nStep 3: Second case: $2x=-2 \\Rightarrow x=-1$. The positive solution is $7$.\n\n**Common Mistakes:** Reporting $-1$ by ignoring the word \"positive,\" or solving only one branch and missing that there are two.\n\n**Test Day Takeaway:** Always split an absolute-value equation into both cases, then filter by what the question actually asks for.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'absolute-value-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-292', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'How many real solutions does $|x + 4| = -3$ have?',
    choices: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$2$' }, { id: 'D', text: 'Infinite' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $|x+4|$ is a distance, so it is always $\\ge 0$ and can never equal $-3$. There are $0$ solutions.\n\n**The Full Solution:**\nStep 1: An absolute value outputs the distance from $0$, which is never negative.\nStep 2: Setting it equal to $-3$ asks for a distance of $-3$, which is impossible.\nStep 3: No value of $x$ works, so the equation has $0$ real solutions.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): treats the negative right side as if it yields one solution.\n* Choice C ($2$): blindly applies the \"$|x|=k$ gives two solutions\" rule without checking that $k$ must be $\\ge 0$.\n* Choice D (Infinite): confuses \"no solutions\" with an identity true for all $x$.\n\n**Test Day Takeaway:** An absolute value is never negative — $|...|=k$ with $k<0$ has zero solutions, no algebra needed.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'absolute-value-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-293', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'fill-in',
    question: 'If $|x - 5| = 12$, what is the greater of the two solutions?',
    correctAnswer: '17',
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**The correct answer is $17$.**\n\n**The Fast Way (~10s):** The larger solution of $|x-h|=k$ is $h+k=5+12=17$.\n\n**The Full Solution:**\nStep 1: Split into two cases: $x-5=12$ or $x-5=-12$.\nStep 2: Solve each: $x=17$ or $x=-7$.\nStep 3: The greater of the two is $17$.\n\n**Common Mistakes:** Reporting $-7$ by reading \"greater\" as the more negative value, or stopping at one branch.\n\n**Test Day Takeaway:** For $|x-h|=k$, the solutions are $h+k$ and $h-k$; the greater one is $h+k$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'absolute-value-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-294', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'If $|3x + 1| = 10$ and $x < 0$, what is the value of $x$?',
    choices: [{ id: 'A', text: '$-\\dfrac{11}{3}$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$\\dfrac{11}{3}$' }, { id: 'D', text: '$-3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $|3x+1|=10$ gives $3x+1=\\pm 10$. The constraint $x<0$ picks the negative branch: $3x+1=-10 \\Rightarrow x=-\\frac{11}{3}$.\n\n**The Full Solution:**\nStep 1: Split into two cases: $3x+1=10$ or $3x+1=-10$.\nStep 2: First case: $3x=9 \\Rightarrow x=3$. Second case: $3x=-11 \\Rightarrow x=-\\frac{11}{3}$.\nStep 3: Only $x=-\\frac{11}{3}$ satisfies $x<0$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): the positive-branch solution, which violates the $x<0$ constraint.\n* Choice C ($\\frac{11}{3}$): the correct magnitude but wrong sign — ignores that the answer must be negative.\n* Choice D ($-3$): negates the positive solution instead of solving the negative branch.\n\n**Test Day Takeaway:** Solve both absolute-value cases, then keep only the solution that fits the stated constraint.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'absolute-value-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-alg-295', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'fill-in',
    question: 'The equation $|x + 4| + 3 = 10$ has two solutions. What is the product of those solutions?',
    correctAnswer: '-33',
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**The correct answer is $-33$.**\n\n**The Fast Way (~15s):** Isolate first: $|x+4|=7$, so $x=3$ or $x=-11$. Product: $3 \\cdot (-11)=-33$.\n\n**The Full Solution:**\nStep 1: Isolate the absolute value: subtract $3$ to get $|x+4|=7$.\nStep 2: Split into two cases: $x+4=7$ or $x+4=-7$.\nStep 3: Solve each: $x=3$ or $x=-11$. Multiply: $3 \\cdot (-11)=-33$.\n\n**Common Mistakes:** Splitting before isolating (using $|x+4|=10$) gives $x=6$ or $x=-14$ and the wrong product; multiplying the wrong pair or dropping a sign also misses $-33$.\n\n**Test Day Takeaway:** Isolate the absolute value completely before splitting into the two cases.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'absolute-value-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 15: top 2x patterns (concise items) =====
  // linear-equation-with-variables-on-both-sides
  { id: 'bank-alg-296', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $3x + 5 = 5x - 7$?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$-1$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$\\dfrac{3}{2}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Collect $x$'s and constants: $5+7=5x-3x \\Rightarrow 12=2x \\Rightarrow x=6$.\n\n**The Full Solution:**\nStep 1: Subtract $3x$ from both sides: $5=2x-7$.\nStep 2: Add $7$: $12=2x$.\nStep 3: Divide by $2$: $x=6$. Check: $3(6)+5=23$ and $5(6)-7=23$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-1$): a sign slip when moving terms, writing $-2x=12$ and then mis-arithmetic.\n* Choice C ($2$): combines the constants as $5-7=-2$ and divides by the wrong coefficient.\n* Choice D ($\\frac{3}{2}$): drops the $-7$ during rearrangement, producing a corrupted setup.\n\n**Test Day Takeaway:** With variables on both sides, gather all $x$ terms on one side and all constants on the other, then divide. Subtract from the larger-coefficient side to keep $x$ positive.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-297', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $4x - 3 = 2x + 9$?',
    correctAnswer: '6',
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~10s):** Collect $x$'s and constants: $4x-2x=9+3 \\Rightarrow 2x=12 \\Rightarrow x=6$.\n\n**The Full Solution:**\nStep 1: Subtract $2x$ from both sides: $2x-3=9$.\nStep 2: Add $3$: $2x=12$.\nStep 3: Divide by $2$: $x=6$. Check: $4(6)-3=21$ and $2(6)+9=21$. $\\checkmark$\n\n**Common Mistakes:** Subtracting the larger $x$-coefficient first flips the sign to $-2x=-12$; a careless student then reports $-6$.\n\n**Test Day Takeaway:** Move all $x$'s to one side and all constants to the other; subtract the smaller $x$-coefficient first to keep the leading coefficient positive.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-298', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $7 - 2x = x + 4$?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$-1$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Collect $x$'s on the right: $7-4=x+2x \\Rightarrow 3=3x \\Rightarrow x=1$.\n\n**The Full Solution:**\nStep 1: Add $2x$ to both sides: $7=3x+4$.\nStep 2: Subtract $4$: $3=3x$.\nStep 3: Divide by $3$: $x=1$. Check: $7-2(1)=5$ and $1+4=5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-1$): a sign error on the final isolation, reporting $x=-1$ instead of $x=1$.\n* Choice C ($11$): adds the constants $7+4$ without ever solving for $x$.\n* Choice D ($3$): reports the constant difference $7-4=3$ without combining the $x$ terms.\n\n**Test Day Takeaway:** With variables on both sides, isolate $x$ before reporting — a leftover constant is never the answer.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-299', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'fill-in',
    question: 'In the equation $\\dfrac{x + 5}{3} = \\dfrac{x - 1}{a}$, $a$ is a positive integer constant. If $x = 13$ is the solution to the equation, what is the value of $a$?',
    correctAnswer: '2',
    explanation: "**SAT Pattern: Parameter Inference from a Linear Equation**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~15s):** Plug in $x=13$: the left side is $\\frac{18}{3}=6$ and the right side is $\\frac{12}{a}$. Set equal: $6=\\frac{12}{a} \\Rightarrow a=2$.\n\n**The Full Solution:**\nStep 1: Since $x=13$ is a solution, substituting it must make both sides equal.\nStep 2: Left side: $\\frac{13+5}{3}=\\frac{18}{3}=6$. Right side: $\\frac{13-1}{a}=\\frac{12}{a}$.\nStep 3: Solve $6=\\frac{12}{a} \\Rightarrow a=\\frac{12}{6}=2$. Check: with $a=2$, cross-multiplying $\\frac{x+5}{3}=\\frac{x-1}{2}$ gives $2(x+5)=3(x-1) \\Rightarrow x=13$. $\\checkmark$\n\n**Common Mistakes:** Trying to solve the symbolic equation for $x$ first instead of substituting the known solution; computing $\\frac{a}{12}$ and reporting a reciprocal.\n\n**Test Day Takeaway:** When a parameter and a known solution both appear, substitute the solution to reduce the problem to a single equation in the parameter.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-300', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $5(x - 2) = 3x + 8$?',
    choices: [{ id: 'A', text: '$9$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$-1$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute: $5x-10=3x+8$. Subtract $3x$ and add $10$: $2x=18 \\Rightarrow x=9$.\n\n**The Full Solution:**\nStep 1: Distribute the $5$: $5x-10=3x+8$.\nStep 2: Subtract $3x$: $2x-10=8$.\nStep 3: Add $10$: $2x=18$, so $x=9$. Check: $5(9-2)=35$ and $3(9)+8=35$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): a sign error after a faulty distribution of the $-2$.\n* Choice C ($-1$): mishandles the constants, writing $2x=-2$ instead of $2x=18$.\n* Choice D ($3$): only multiplies the first term, treating $5(x-2)$ as $5x-2$.\n\n**Test Day Takeaway:** Distribute the coefficient through both terms inside the parentheses, then collect $x$'s on one side and constants on the other.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-301', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $3(x + 4) = 5(x - 2)$?',
    correctAnswer: '11',
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~15s):** Distribute both sides to $3x+12=5x-10$, then collect: $22=2x$, so $x=11$.\n\n**The Full Solution:**\nStep 1: Distribute: $3(x+4)=3x+12$ and $5(x-2)=5x-10$, giving $3x+12=5x-10$.\nStep 2: Subtract $3x$ from both sides: $12=2x-10$.\nStep 3: Add $10$: $22=2x$.\nStep 4: Divide by $2$: $x=11$.\n\nVerification: $3(11+4)=45$ and $5(11-2)=45$. $\\checkmark$\n\n**Test Day Takeaway:** Distribute first, then collect the variable on the side with the larger coefficient (subtract the smaller $x$-term) to keep the coefficient positive.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-302', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the equation $\\dfrac{ax + 5}{6} - \\dfrac{x - 3}{4} = \\dfrac{x + b}{12}$, $a$ and $b$ are constants. The equation is true for all values of $x$. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$19$' }, { id: 'D', text: '$21$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Polynomial Identity with Rational Expressions**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** Clear the denominators by multiplying by $12$: $2(ax+5)-3(x-3)=x+b$. Expand to $(2a-3)x+19=x+b$. Matching gives $2a-3=1\\Rightarrow a=2$ and $b=19$, so $a+b=21$.\n\n**The Full Solution:**\nStep 1: \"True for all values of $x$\" means the equation is an identity — both sides must be the same expression.\nStep 2: Multiply every term by the LCD $12$: $2(ax+5)-3(x-3)=x+b$.\nStep 3: Distribute carefully: $2ax+10-3x+9=x+b$, which collects to $(2a-3)x+19=x+b$.\nStep 4: Match one equation per power of $x$. The $x$-coefficient gives $2a-3=1\\Rightarrow a=2$; the constant gives $b=19$.\nStep 5: $a+b=2+19=21$.\n\nVerification: with $a=2,\\ b=19$, the left side equals $\\frac{2(2x+5)-3(x-3)}{12}=\\frac{x+19}{12}$, matching the right side. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): a sign slip on $-3(x-3)$ (treating it as $-3x-9$) corrupts the constant, then a further arithmetic error lands on $0$.\n* Choice B ($2$): reports $a$ alone and forgets to add $b$.\n* Choice C ($19$): reports $b$ alone and forgets to add $a$.\n\n**Test Day Takeaway:** A polynomial identity yields one equation per power of $x$. Clear denominators with the LCD, then match the $x$-coefficient and the constant separately — and mind the sign on a distributed negative.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-303', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $2(3x - 1) - 4 = 5x + 3$?',
    correctAnswer: '9',
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~15s):** Simplify the left side to $6x-6$, set it equal to $5x+3$, and subtract $5x$: $x-6=3$, so $x=9$.\n\n**The Full Solution:**\nStep 1: Distribute on the left: $2(3x-1)-4=6x-2-4$.\nStep 2: Combine the constants: $6x-6$, so the equation is $6x-6=5x+3$.\nStep 3: Subtract $5x$: $x-6=3$.\nStep 4: Add $6$: $x=9$.\n\nVerification: $2(3\\cdot9-1)-4=48$ and $5(9)+3=48$. $\\checkmark$\n\n**Test Day Takeaway:** Simplify each side fully — distribute and combine like terms — before moving variables across the equals sign.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  // linear-equation-with-distribution
  { id: 'bank-alg-304', domain: 'algebra', skills: ['distributive-property'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $3(x + 4) = 27$, what is the value of $x + 4$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$9$' }, { id: 'C', text: '$13$' }, { id: 'D', text: '$23$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Shifted-Output Linear**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** The question asks for $(x+4)$, which is already grouped. Divide both sides by $3$: $x+4=\\frac{27}{3}=9$.\n\n**The Full Solution:**\nStep 1: The equation $3(x+4)=27$ has the asked quantity $(x+4)$ grouped on the left.\nStep 2: Divide both sides by $3$ to release it: $x+4=9$. No need to solve for $x$ on its own.\n\nVerification: $x+4=9$ gives $x=5$, and $3(5+4)=27$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): solves all the way to $x=5$ and reports $x$ instead of the requested $x+4$.\n* Choice C ($13$): finds $x+4=9$ correctly, then adds $4$ a second time.\n* Choice D ($23$): subtracts $4$ from $27$ instead of dividing by $3$ — wrong inverse operation.\n\n**Test Day Takeaway:** When the question asks for a grouped expression like $x+4$, isolate that expression directly. You often never need the value of $x$ itself.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-305', domain: 'algebra', skills: ['distributive-property'], difficulty: 'easy', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $4(2x - 1) = 28$?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~10s):** Divide both sides by $4$ first: $2x-1=7$, then $2x=8$, so $x=4$.\n\n**The Full Solution:**\nStep 1: Divide both sides by $4$: $2x-1=7$.\nStep 2: Add $1$: $2x=8$.\nStep 3: Divide by $2$: $x=4$.\n\nVerification: $4(2\\cdot4-1)=4\\cdot7=28$. $\\checkmark$\n\n**Test Day Takeaway:** When the right side is divisible by the outer coefficient, divide before distributing to keep the numbers clean.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-306', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The equation $5(x - a) = 25$ has solution $x = 3$, where $a$ is a constant. What is the value of $a$?',
    choices: [{ id: 'A', text: '$-5$' }, { id: 'B', text: '$-2$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Solve for a Parameter Given a Solution**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Substitute $x=3$: $5(3-a)=25\\Rightarrow 3-a=5\\Rightarrow a=-2$.\n\n**The Full Solution:**\nStep 1: The solution $x=3$ satisfies the equation, so substitute it: $5(3-a)=25$.\nStep 2: Divide both sides by $5$: $3-a=5$.\nStep 3: Solve for $a$: $-a=2$, so $a=-2$.\n\nVerification: with $a=-2$, $5(3-(-2))=5(5)=25$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): takes $\\frac{25}{5}=5$ then sign-flips it without finishing the algebra.\n* Choice C ($2$): subtracts in the wrong direction, computing $a=5-3$ instead of $3-a=5$.\n* Choice D ($5$): reports the quotient $\\frac{25}{5}=5$ as if it were $a$.\n\n**Test Day Takeaway:** Given an equation with a parameter and a known solution, substitute the solution and solve for the parameter. Watch the subtraction direction: $3-a$ is not $a-3$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-307', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $5(x - 2) + 3 = 18$?',
    correctAnswer: '5',
    explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~10s):** Subtract the outside $3$ first: $5(x-2)=15\\Rightarrow x-2=3\\Rightarrow x=5$.\n\n**The Full Solution:**\nStep 1: Subtract $3$ from both sides: $5(x-2)=15$.\nStep 2: Divide by $5$: $x-2=3$.\nStep 3: Add $2$: $x=5$.\n\nVerification: $5(5-2)+3=15+3=18$. $\\checkmark$\n\n**Test Day Takeaway:** When a constant sits outside the parentheses, undo it first, then divide. The grouped structure stays intact for a clean isolate.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-308', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In the equation $k(x + 2) - 3 = 4x + c$, $k$ and $c$ are constants. For what value of $k$ does the equation have exactly one solution for $x$, regardless of the value of $c$?',
    choices: [{ id: 'A', text: 'Any value of $k$ except $4$' }, { id: 'B', text: '$k = 4$ only' }, { id: 'C', text: '$k = 0$ only' }, { id: 'D', text: '$k = -4$ only' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Equation with Distribution (Solution-Count Condition)**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Distribute and collect: $(k-4)x=c-2k+3$. A single linear coefficient gives exactly one solution as long as it is nonzero, so $k\\neq4$ — any value except $4$.\n\n**The Full Solution:**\nStep 1: Distribute the $k$: $kx+2k-3=4x+c$.\nStep 2: Gather $x$-terms and constants: $(k-4)x=c-2k+3$.\nStep 3: Read off the solution count by the coefficient $(k-4)$.\n$\\quad$ If $k-4\\neq0$: divide to get the unique $x=\\frac{c-2k+3}{k-4}$ — one solution for every $c$.\n$\\quad$ If $k-4=0$ (i.e. $k=4$): the equation collapses to $0=c-5$, which is either no solution or infinitely many, depending on $c$.\nStep 4: For exactly one solution regardless of $c$, require $k-4\\neq0$, so $k$ is any value except $4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($k=4$ only): this is the value that kills the coefficient — the opposite of one solution.\n* Choice C ($k=0$ only): one specific value works, but so does every $k\\neq4$, so it is too narrow.\n* Choice D ($k=-4$ only): same misread — a single value instead of the full condition.\n\n**Test Day Takeaway:** For $ax=b$: one solution iff $a\\neq0$; infinitely many iff $a=0$ and $b=0$; no solution iff $a=0$ and $b\\neq0$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-309', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $2(3x + 1) - 5 = 9$?',
    correctAnswer: '2',
    explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~10s):** Add $5$ to recover the bracket: $2(3x+1)=14\\Rightarrow 3x+1=7\\Rightarrow 3x=6\\Rightarrow x=2$.\n\n**The Full Solution:**\nStep 1: Distribute the $2$: $6x+2-5=9$.\nStep 2: Combine the constants: $6x-3=9$.\nStep 3: Add $3$: $6x=12$.\nStep 4: Divide by $6$: $x=2$.\n\nVerification: $2(3\\cdot2+1)-5=14-5=9$. $\\checkmark$\n\n**Test Day Takeaway:** Distribute first or isolate the bracket first — both reach $x=2$. Pick whichever keeps the arithmetic cleanest.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-310', domain: 'algebra', skills: ['distributive-property'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the equation $a(x + 5) - 2(x - 3) = 4x + c$, $a$ and $c$ are constants. If the equation has infinitely many solutions, what is the value of $a + c$?',
    choices: [{ id: 'A', text: '$42$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$36$' }, { id: 'D', text: '$30$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Simplify the left side to $(a-2)x+(5a+6)$. Infinitely many solutions means it must equal $4x+c$ term for term: $a-2=4\\Rightarrow a=6$ and $5a+6=c\\Rightarrow c=36$, so $a+c=42$.\n\n**The Full Solution:**\nStep 1: Distribute and combine on the left: $a(x+5)-2(x-3)=ax+5a-2x+6=(a-2)x+(5a+6)$.\nStep 2: The right side is $4x+c$.\nStep 3: Infinitely many solutions makes the equation an identity, so match coefficients and constants separately.\n$\\quad$ $x$-coefficient: $a-2=4\\Rightarrow a=6$.\n$\\quad$ Constant: $5a+6=c\\Rightarrow 5(6)+6=c\\Rightarrow c=36$.\nStep 4: $a+c=6+36=42$.\n\nVerification: with $a=6,\\ c=36$, the left side is $6(x+5)-2(x-3)=4x+36$, matching the right side. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): reports $a$ alone, stopping before computing $c$.\n* Choice C ($36$): reports $c$ alone, stopping before computing $a$.\n* Choice D ($30$): a sign error on the constant (using $5a-6=c$, so $c=24$) lands on $a+c=30$.\n\n**Test Day Takeaway:** Infinitely many solutions means the two sides are the same expression. Match the $x$-coefficient and the constant separately, then combine what the question asks for.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-311', domain: 'algebra', skills: ['distributive-property'], difficulty: 'hard', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $4(x + 3) = 2(x + 10) + 4$?',
    correctAnswer: '6',
    explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~15s):** Distribute both sides to $4x+12=2x+24$, then $2x=12$, so $x=6$.\n\n**The Full Solution:**\nStep 1: Distribute: $4(x+3)=4x+12$ and $2(x+10)=2x+20$.\nStep 2: Combine the right side: $2x+20+4=2x+24$, so $4x+12=2x+24$.\nStep 3: Subtract $2x$: $2x+12=24$.\nStep 4: Subtract $12$: $2x=12$, so $x=6$.\n\nVerification: $4(6+3)=36$ and $2(6+10)+4=36$. $\\checkmark$\n\n**Test Day Takeaway:** Distribute on both sides, then combine constants on each side, then balance. Taking it one move at a time stops sign errors before they start.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  // combining-like-terms (2x)
  { id: 'bank-alg-312', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What value of $a$ satisfies the equation $3a + 5a - 2a = 24$?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$24$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Combining Like Terms — Solve for the Variable**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Add the coefficients: $3+5-2=6$, so $6a=24$ and $a=4$.\n\n**The Full Solution:**\nStep 1: All three terms on the left are like terms, so combine their coefficients: $3a+5a-2a=(3+5-2)a=6a$.\nStep 2: The equation is $6a=24$.\nStep 3: Divide by $6$: $a=4$.\n\nVerification: $3(4)+5(4)-2(4)=12+20-8=24$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): reports the combined coefficient ($6a$) instead of solving for $a$.\n* Choice C ($3$): drops the $-2a$ term, using $8a=24$ to get $a=3$.\n* Choice D ($24$): copies the right-hand number as the answer.\n\n**Test Day Takeaway:** When like terms sit on one side and a number on the other, add the coefficients into a single term first, then divide.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-313', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'fill-in',
    question: 'In the simplified form of $4y - 7y + 2y$, what is the coefficient of $y$?',
    correctAnswer: '-1',
    explanation: "**SAT Pattern: Combining Like Terms**\n\n**The correct answer is $-1$.**\n\n**The Fast Way (~5s):** All three terms are $y$-terms, so just add the coefficients: $4 - 7 + 2 = -1$.\n\n**The Full Solution:**\nStep 1: $4y$, $-7y$, and $2y$ are like terms — same variable, same power.\nStep 2: Add the numeric coefficients: $4 - 7 + 2 = -1$.\nStep 3: The expression simplifies to $-y$, so the coefficient of $y$ is $-1$.\n\nCheck with $y = 1$: $4 - 7 + 2 = -1$, matching $-1(1)$.\n\n**Common Mistakes:** Reporting $1$ (dropping the sign); reporting $9$ (adding $4 + 2 + 7$ without the minus); answering $-y$ instead of the numeric coefficient $-1$.\n\n**Test Day Takeaway:** A coefficient is just the number in front of the variable, sign included. The variable itself is not part of the answer.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-314', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which expression is equivalent to $(3x - 2) + (4x + 5)$?',
    choices: [{ id: 'A', text: '$7x + 3$' }, { id: 'B', text: '$7x - 7$' }, { id: 'C', text: '$x + 3$' }, { id: 'D', text: '$12x$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Combining Like Terms**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Add the $x$-coefficients ($3 + 4 = 7$) and the constants ($-2 + 5 = 3$): $7x + 3$.\n\n**The Full Solution:**\nStep 1: Drop the parentheses — both are added, so no sign changes: $3x - 2 + 4x + 5$.\nStep 2: Group like terms: $(3x + 4x) + (-2 + 5)$.\nStep 3: Combine: $7x + 3$, which is choice A.\n\nCheck with $x = 1$: $(3 - 2) + (4 + 5) = 10$ and $7(1) + 3 = 10$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($7x - 7$): right $x$-coefficient, but computed the constants as $-2 - 5 = -7$ instead of $-2 + 5 = 3$.\n* Choice C ($x + 3$): right constant, but subtracted the $x$-coefficients ($4 - 3 = 1$) instead of adding.\n* Choice D ($12x$): collapsed everything into one $x$-term, dropping the constant entirely.\n\n**Test Day Takeaway:** When two parenthesized sums are added, the parentheses come off cleanly — then combine variables with variables and constants with constants.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-315', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'fill-in',
    question: 'In the simplified form of $2x^2 + 3x - x^2 + 4x$, what is the coefficient of $x$?',
    correctAnswer: '7',
    explanation: "**SAT Pattern: Combining Like Terms**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~10s):** Add only the $x$-coefficients (not the $x^2$ ones): $3 + 4 = 7$.\n\n**The Full Solution:**\nStep 1: Group by power. The $x^2$ terms: $2x^2 - x^2 = x^2$.\nStep 2: The $x$ terms: $3x + 4x = 7x$.\nStep 3: The simplified expression is $x^2 + 7x$, so the coefficient of $x$ is $7$.\n\nCheck with $x = 1$: $2 + 3 - 1 + 4 = 8$ and $1 + 7 = 8$.\n\n**Common Mistakes:** Reporting $1$ (the $x^2$ coefficient by mistake); merging $x^2$ and $x$ terms because both contain $x$.\n\n**Test Day Takeaway:** $x^2$ and $x$ are not like terms — different powers never combine. Group each power separately before reading off a coefficient.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-316', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For all values of $x$, $a(x - 2) - 3(x + 4) = 2x - 22$, where $a$ is a constant. What is the value of $a$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$-3$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Parameter Inference (Identity)**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Expand the left side to $(a - 3)x - (2a + 12)$ and match $2x - 22$. The $x$-coefficient gives $a - 3 = 2 \\Rightarrow a = 5$, choice A.\n\n**The Full Solution:**\nStep 1: Because the equation holds for all $x$, both sides are identical as polynomials. Expand the left side: $a(x - 2) - 3(x + 4) = ax - 2a - 3x - 12 = (a - 3)x - (2a + 12)$.\nStep 2: Match the $x$-coefficient with the right side $2x - 22$: $a - 3 = 2 \\Rightarrow a = 5$.\nStep 3: Confirm with the constant: $-(2a + 12) = -22 \\Rightarrow 2a + 12 = 22 \\Rightarrow a = 5$. Both conditions agree.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): copies the $x$-coefficient $2$ from the right side without solving for $a$.\n* Choice C ($-3$): pulls $a$ from the $-3$ on the second bracket — wrong number entirely.\n* Choice D ($3$): solves the $x$-equation but takes a sign error on the constant check and lands at $3$.\n\n**Test Day Takeaway:** \"For all values of $x$\" signals an identity. Expand both sides, then match the $x$-coefficient and the constant term separately.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-317', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'fill-in',
    question: 'In the simplified form of $4(2x - 1) - 3(x + 2)$, what is the constant term?',
    correctAnswer: '-10',
    explanation: "**SAT Pattern: Combining Like Terms**\n\n**The correct answer is $-10$.**\n\n**The Fast Way (~10s):** Only the distributed constants matter: $4 \\cdot (-1) = -4$ and $-3 \\cdot 2 = -6$, so $-4 - 6 = -10$.\n\n**The Full Solution:**\nStep 1: Distribute the $4$: $4(2x - 1) = 8x - 4$.\nStep 2: Distribute the $-3$: $-3(x + 2) = -3x - 6$.\nStep 3: Combine: $(8x - 3x) + (-4 - 6) = 5x - 10$. The constant term is $-10$.\n\nCheck with $x = 1$: $4(1) - 3(3) = -5$ and $5(1) - 10 = -5$.\n\n**Common Mistakes:** Reporting $2$ or $-2$ (forgetting the $-3$ flips the sign on the $+2$); including the $5x$ term — the question asks only for the constant.\n\n**Test Day Takeaway:** The constant term has no variable. After distributing, combine only the number-only terms — watch the sign each negative multiplier creates.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-318', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'For all values of $x$, $a(x^2 + 3x) - (x^2 - 5x) = 3x^2 + bx$, where $a$ and $b$ are constants. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$21$' }, { id: 'B', text: '$17$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Polynomial Identity with Two Parameters**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Expand the left side to $(a - 1)x^2 + (3a + 5)x$. Match: $a - 1 = 3 \\Rightarrow a = 4$, then $b = 3(4) + 5 = 17$, so $a + b = 21$, choice A.\n\n**The Full Solution:**\nStep 1: Expand: $a(x^2 + 3x) - (x^2 - 5x) = ax^2 + 3ax - x^2 + 5x = (a - 1)x^2 + (3a + 5)x$.\nStep 2: Match the $x^2$-coefficient with $3x^2 + bx$: $a - 1 = 3 \\Rightarrow a = 4$.\nStep 3: Match the $x$-coefficient: $b = 3a + 5 = 3(4) + 5 = 17$.\nStep 4: $a + b = 4 + 17 = 21$.\n\nCheck with $a = 4$: $4(x^2 + 3x) - (x^2 - 5x) = 3x^2 + 17x$, matching the right side.\n\n**Why the wrong answers are tempting:**\n* Choice B ($17$): reports $b$ alone, stopping one step short of $a + b$.\n* Choice C ($4$): reports $a$ alone, stopping one step short.\n* Choice D ($5$): a setup slip that lands on $b = 1$, then adds $4 + 1$.\n\n**Test Day Takeaway:** A polynomial identity gives one equation per power of $x$. Match coefficients of $x^2$ and $x$ separately, then finish the arithmetic the question asks for.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-alg-319', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'fill-in',
    question: 'In the simplified form of $3(x^2 - 2x) - 2(x^2 + 4)$, what is the coefficient of $x^2$?',
    correctAnswer: '1',
    explanation: "**SAT Pattern: Combining Like Terms**\n\n**The correct answer is $1$.**\n\n**The Fast Way (~10s):** Only the $x^2$ terms matter: $3 - 2 = 1$.\n\n**The Full Solution:**\nStep 1: Distribute: $3(x^2 - 2x) - 2(x^2 + 4) = 3x^2 - 6x - 2x^2 - 8$.\nStep 2: Group by power. The $x^2$ terms: $3x^2 - 2x^2 = x^2$, coefficient $1$.\nStep 3: The full simplification is $x^2 - 6x - 8$, so the coefficient of $x^2$ is $1$.\n\nCheck with $x = 1$: $3(1 - 2) - 2(1 + 4) = -13$ and $1 - 6 - 8 = -13$.\n\n**Common Mistakes:** Reporting $5$ (adding $3 + 2$ instead of subtracting); reporting $-6$ or $-8$ (reading the wrong power's coefficient).\n\n**Test Day Takeaway:** A coefficient question targets one power only. Distribute, group by power, then read off the requested coefficient.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  // ─── SOLVE FOR INPUT FROM OUTPUT (bank-alg-320..326) ──────────────────────
  // Granularity principle: inverse evaluation (given f(a)=c, find a) is a
  // DISTINCT method from direct evaluation. Items pin "solve an equation"
  // not "substitute and compute."
  { id: 'bank-alg-320', domain: 'algebra', skills: ['function-notation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 2x + 5$. For what value of $x$ does $f(x) = 13$?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$9$' }, { id: 'C', text: '$13$' }, { id: 'D', text: '$31$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Set $2x + 5 = 13 \\Rightarrow 2x = 8 \\Rightarrow x = 4$, choice A.\n\n**The Full Solution:**\nStep 1: $f(x) = 13$ means the output equals $13$, so set the rule equal to it: $2x + 5 = 13$.\nStep 2: Subtract $5$: $2x = 8$.\nStep 3: Divide by $2$: $x = 4$.\n\nCheck: $f(4) = 2(4) + 5 = 13$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): evaluated $f(2) = 9$ — confused input with output.\n* Choice C ($13$): returned the given output without solving for $x$.\n* Choice D ($31$): computed $2(13) + 5$ — substituted the output where the input goes.\n\n**Test Day Takeaway:** \"What is $x$ when $f(x) = c$\" means solve an equation. Substitute to go input $\\to$ output; solve to go output $\\to$ input.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-input-from-output', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-321', domain: 'algebra', skills: ['function-notation'], difficulty: 'easy', type: 'fill-in',
    question: 'The function $g$ is defined by $g(x) = 3x - 7$. If $g(a) = 8$, what is the value of $a$?',
    correctAnswer: '5',
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~10s):** $3a - 7 = 8 \\Rightarrow 3a = 15 \\Rightarrow a = 5$.\n\n**The Full Solution:**\nStep 1: $g(a) = 8$ means input $a$ gives output $8$, so set $3a - 7 = 8$.\nStep 2: Add $7$: $3a = 15$.\nStep 3: Divide by $3$: $a = 5$.\n\nCheck: $g(5) = 3(5) - 7 = 8$.\n\n**Common Mistakes:** Reporting $8$ (the output, not the input); reporting $1$ (computing $8 - 7$ and ignoring the $3$); reporting $3$ (subtracting without dividing).\n\n**Test Day Takeaway:** $g(a) = c$ is just a linear equation in $a$. Undo the operations in reverse: add the constant back, then divide by the coefficient.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-input-from-output', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-322', domain: 'algebra', skills: ['function-notation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = -4x + 12$. If $f(a) = -8$, what is the value of $a$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$-5$' }, { id: 'C', text: '$1$' }, { id: 'D', text: '$-1$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $-4a + 12 = -8 \\Rightarrow -4a = -20 \\Rightarrow a = 5$, choice A.\n\n**The Full Solution:**\nStep 1: $f(a) = -8$ means set the rule equal to $-8$: $-4a + 12 = -8$.\nStep 2: Subtract $12$: $-4a = -20$.\nStep 3: Divide by $-4$: $a = 5$.\n\nCheck: $f(5) = -4(5) + 12 = -20 + 12 = -8$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-5$): divided $-20$ by $4$ but kept the minus, missing that a negative divided by a negative is positive.\n* Choice C ($1$): a botched setup that never isolates $a$ correctly.\n* Choice D ($-1$): dropped a sign while moving the $12$, then divided wrong.\n\n**Test Day Takeaway:** A negative coefficient flips the sign when you divide. Track the sign at every step — $-20 \\div (-4) = +5$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-input-from-output', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-323', domain: 'algebra', skills: ['function-notation'], difficulty: 'medium', type: 'fill-in',
    question: 'A tank drains according to $V(t) = 240 - 12t$, where $V$ is the volume in gallons remaining after $t$ minutes. At what time, in minutes, does the volume reach $60$ gallons?',
    correctAnswer: '15',
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~10s):** $240 - 12t = 60 \\Rightarrow 12t = 180 \\Rightarrow t = 15$.\n\n**The Full Solution:**\nStep 1: Volume is the output, time is the input. Set $V(t) = 60$: $240 - 12t = 60$.\nStep 2: Subtract $240$: $-12t = -180$.\nStep 3: Divide by $-12$: $t = 15$ minutes.\n\nCheck: $V(15) = 240 - 12(15) = 240 - 180 = 60$.\n\n**Common Mistakes:** Reporting $60$ (the output volume); reporting $180$ (stopping before the divide); reporting $20$ (dividing $240$ by $12$ and ignoring the $60$).\n\n**Test Day Takeaway:** In a word problem, label which variable is input and which is output. \"When does $V$ reach $60$\" means solve for the time $t$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'solve-for-input-from-output', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-324', domain: 'algebra', skills: ['function-notation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The table below shows three values of a linear function $f$. For what value of $x$ does $f(x) = 29$?',
    diagram: { type: 'dataTable', params: { headers: ['x', 'f(x)'], rows: [['-2', '-7'], ['1', '5'], ['4', '17']] } },
    choices: [{ id: 'A', text: '$7$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$29$' }, { id: 'D', text: '$12$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** From the table, slope $= \\frac{5 - (-7)}{1 - (-2)} = \\frac{12}{3} = 4$, and $f(x) = 4x + 1$. Set $4x + 1 = 29 \\Rightarrow x = 7$, choice A.\n\n**The Full Solution:**\nStep 1: Recover the line. Slope $= \\frac{5 - (-7)}{1 - (-2)} = \\frac{12}{3} = 4$. Using point $(1, 5)$: $5 = 4(1) + b \\Rightarrow b = 1$, so $f(x) = 4x + 1$.\nStep 2: Solve for the input that gives $29$: $4x + 1 = 29 \\Rightarrow 4x = 28 \\Rightarrow x = 7$.\n\nCheck: $f(7) = 4(7) + 1 = 29$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): divided $\\frac{29}{4} \\approx 7.25$ and rounded up, skipping the subtraction of the intercept.\n* Choice C ($29$): returned the target output itself — confused input with output.\n* Choice D ($12$): reported a change in output ($29 - 17$) rather than the input value.\n\n**Test Day Takeaway:** For a linear function given as a table: find the slope, then the intercept, then solve for the requested input.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-input-from-output', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-325', domain: 'algebra', skills: ['function-notation'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = x^2 - 9$. If $f(a) = 16$ and $a > 0$, what is the value of $a$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$7$' }, { id: 'D', text: '$25$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Set the output equal to $16$: $a^2 - 9 = 16$, so $a^2 = 25$ and $a = 5$ (the positive root).\n\n**The Full Solution:**\nStep 1: $f(a) = 16$ means $a^2 - 9 = 16$.\nStep 2: Add $9$ to both sides: $a^2 = 25$.\nStep 3: Take the square root: $a = \\pm 5$. The condition $a > 0$ picks $a = 5$.\nCheck: $f(5) = 5^2 - 9 = 25 - 9 = 16$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): takes $\\sqrt{16}$ directly instead of first solving for $a^2$.\n* Choice C ($7$): computes $16 - 9$, treating the problem as a forward evaluation.\n* Choice D ($25$): stops at $a^2 = 25$ and forgets the square root.\n\n**Test Day Takeaway:** Reversing a quadratic gives two inputs ($\\pm$). Solve for the squared term first, then apply the sign constraint the question states.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-input-from-output', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-326', domain: 'algebra', skills: ['function-notation'], difficulty: 'hard', type: 'fill-in',
    question: 'The functions $f$ and $g$ are defined by $f(x) = 2x + 3$ and $g(x) = f(x) - 7$. For what value of $x$ does $g(x) = 0$?',
    correctAnswer: '2',
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~10s):** $g(x) = (2x + 3) - 7 = 2x - 4$. Set $2x - 4 = 0$, so $x = 2$.\n\n**The Full Solution:**\nStep 1: Build $g$ from $f$: $g(x) = f(x) - 7 = (2x + 3) - 7 = 2x - 4$.\nStep 2: Solve $g(x) = 0$: $2x - 4 = 0 \\Rightarrow 2x = 4 \\Rightarrow x = 2$.\nCheck: $f(2) = 2(2) + 3 = 7$, so $g(2) = 7 - 7 = 0$. $\\checkmark$\n\n**Common Mistakes:** Reporting $0$ (the target output, not the input); reporting $-2$ (sign slip when isolating $x$); reporting $5$ (solving $f(x) = 7$ but never subtracting the $7$).\n\n**Test Day Takeaway:** When one function is defined through another, substitute and simplify FIRST, then solve. Keep input and output straight.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-input-from-output', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  // ─── LINEAR COST EQUATION SETUP (bank-alg-327..333) ───────────────────────
  // Granularity principle: SINGLE-variable linear cost setup (fixed fee +
  // per-unit), NOT a 2-variable system. Previously mis-aliased into
  // two-equation-system-from-a-word-problem pool. Now its own pattern.
  { id: 'bank-alg-327', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A gym charges a $\\$30$ joining fee plus $\\$15$ per month. Which equation models the total cost $C$ for $m$ months of membership?',
    choices: [{ id: 'A', text: '$C = 15m + 30$' }, { id: 'B', text: '$C = 30m + 15$' }, { id: 'C', text: '$C = 45m$' }, { id: 'D', text: '$C = 30 - 15m$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The $\\$15$ per month scales with $m$ (the slope); the $\\$30$ joining fee is paid once (the constant). Total: $C = 15m + 30$.\n\n**The Full Solution:**\nStep 1: A linear cost is $C = (\\text{per-unit rate})(\\text{quantity}) + (\\text{fixed fee})$.\nStep 2: The rate is $\\$15$ per month on $m$ months, and the one-time fee is $\\$30$.\nStep 3: $C = 15m + 30$.\nCheck: at $m = 0$, $C = 30$ (just the joining fee); at $m = 4$, $C = 60 + 30 = 90$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($C = 30m + 15$): swaps the monthly rate and the one-time fee.\n* Choice C ($C = 45m$): adds the two amounts and multiplies both by $m$, charging the joining fee every month.\n* Choice D ($C = 30 - 15m$): subtracts, which would make cost shrink over time.\n\n**Test Day Takeaway:** \"Joining\" / \"setup\" / \"one-time\" is the constant; \"per month\" is the slope on the variable. Combine with $+$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-cost-equation-setup', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-328', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'easy', type: 'fill-in',
    question: 'A printing service charges a $\\$8$ setup fee plus $\\$0.25$ per page. The total cost of an order with $p$ pages is $\\$23$. What is the value of $p$?',
    correctAnswer: '60',
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**The correct answer is $60$.**\n\n**The Fast Way (~10s):** $0.25p + 8 = 23 \\Rightarrow 0.25p = 15 \\Rightarrow p = 60$.\n\n**The Full Solution:**\nStep 1: Total $=$ (per-page rate)(pages) $+$ setup fee: $0.25p + 8 = 23$.\nStep 2: Subtract the $\\$8$ setup fee: $0.25p = 15$.\nStep 3: Divide by $0.25$: $p = 60$.\nCheck: $0.25(60) + 8 = 15 + 8 = 23$. $\\checkmark$\n\n**Common Mistakes:** Reporting $23$ (the total cost); reporting $15$ (stopping before dividing); reporting $92$ (dividing $23$ by $0.25$ without removing the fee first).\n\n**Test Day Takeaway:** Subtract the fixed fee from the total BEFORE dividing by the per-unit rate.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'linear-cost-equation-setup', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-329', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A car rental company charges a flat $\\$25$ insurance fee plus $\\$0.40$ per mile driven. Sara\'s total bill was $\\$73$. How many miles did she drive?',
    choices: [{ id: 'A', text: '$120$' }, { id: 'B', text: '$182.5$' }, { id: 'C', text: '$48$' }, { id: 'D', text: '$245$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $0.40m + 25 = 73 \\Rightarrow 0.40m = 48 \\Rightarrow m = 120$.\n\n**The Full Solution:**\nStep 1: Total $=$ (per-mile rate)(miles) $+$ insurance fee: $0.40m + 25 = 73$.\nStep 2: Subtract the $\\$25$ fee: $0.40m = 48$.\nStep 3: Divide by $0.40$: $m = 120$.\nCheck: $0.40(120) + 25 = 48 + 25 = 73$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($182.5$): computes $\\frac{73}{0.40}$, ignoring the insurance fee entirely.\n* Choice C ($48$): stops at $0.40m = 48$ before dividing.\n* Choice D ($245$): arithmetic slip from a mis-set-up equation.\n\n**Test Day Takeaway:** Cost $=$ rate $\\times$ quantity $+$ fixed fee. To find the quantity, subtract the fee FIRST, then divide.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'linear-cost-equation-setup', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-330', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'medium', type: 'fill-in',
    question: 'A photographer charges a $\\$120$ session fee plus $\\$15$ per printed photo. A client\'s total bill is $\\$255$. How many photos were printed?',
    correctAnswer: '9',
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~10s):** $15p + 120 = 255 \\Rightarrow 15p = 135 \\Rightarrow p = 9$.\n\n**The Full Solution:**\nStep 1: Total $=$ (per-photo rate)(photos) $+$ session fee: $15p + 120 = 255$.\nStep 2: Subtract the $\\$120$ session fee: $15p = 135$.\nStep 3: Divide by $15$: $p = 9$.\nCheck: $15(9) + 120 = 135 + 120 = 255$. $\\checkmark$\n\n**Common Mistakes:** Reporting $17$ (dividing $255$ by $15$ without subtracting the fee); reporting $135$ (stopping before dividing); reporting $255$ (the total bill).\n\n**Test Day Takeaway:** Same routine each time: subtract the fixed fee, then divide by the rate. Never divide the total directly.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'linear-cost-equation-setup', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-331', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A taxi charges $\\$3.50$ as a base fare plus $\\$2.25$ per mile. Which equation correctly represents the total fare $F$ for a ride of $m$ miles?',
    choices: [{ id: 'A', text: '$F = 2.25m + 3.50$' }, { id: 'B', text: '$F = 3.50m + 2.25$' }, { id: 'C', text: '$F = (2.25 + 3.50)m$' }, { id: 'D', text: '$F = 2.25 + 3.50m$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** The $\\$2.25$ per mile is the slope on $m$; the $\\$3.50$ base fare is the constant. So $F = 2.25m + 3.50$.\n\n**The Full Solution:**\nStep 1: The base fare ($\\$3.50$) is paid no matter the distance — the constant term.\nStep 2: The per-mile rate ($\\$2.25$) scales with the miles $m$ — the coefficient of $m$.\nStep 3: $F = 2.25m + 3.50$.\nCheck: at $m = 0$ (boarding), $F = 3.50$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($F = 3.50m + 2.25$): swaps the base fare and the per-mile rate.\n* Choice C ($F = (2.25 + 3.50)m$): adds the rates and charges the base fare on every mile.\n* Choice D ($F = 2.25 + 3.50m$): same swap as B, just reordered.\n\n**Test Day Takeaway:** Identify the constant (base/fixed/initial) and the slope (per-unit rate) before writing the equation, then attach the slope to the variable.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-cost-equation-setup', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-332', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A storage facility charges $\\$45$ per month for a standard unit plus a one-time $\\$80$ insurance fee. Maria paid a total of $\\$485$ over the duration of her rental. How many months did she rent the unit?',
    choices: [{ id: 'A', text: '$9$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$405$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $45m + 80 = 485 \\Rightarrow 45m = 405 \\Rightarrow m = 9$.\n\n**The Full Solution:**\nStep 1: Total $=$ (monthly rate)(months) $+$ one-time fee: $45m + 80 = 485$.\nStep 2: Subtract the $\\$80$ insurance fee: $45m = 405$.\nStep 3: Divide by $45$: $m = 9$.\nCheck: $45(9) + 80 = 405 + 80 = 485$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($10$): ignores the one-time fee and divides the total directly: $\\frac{485}{45} \\approx 10.8$, rounded down.\n* Choice C ($11$): same omission of the fee, rounded up instead.\n* Choice D ($405$): reports the rent subtotal ($45 \\cdot 9 = 405$) instead of the number of months — stopping one step early.\n\n**Test Day Takeaway:** When the answer should be a whole count (months, days), subtract any one-time fee first. A messy decimal usually signals the fee was left in.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'linear-cost-equation-setup', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-333', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'hard', type: 'fill-in',
    question: 'A cleaning service charges a fixed travel fee plus an hourly rate of $\\$35$ per hour. A 3-hour job costs $\\$135$. What is the fixed travel fee, in dollars?',
    correctAnswer: '30',
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~10s):** The known part is $35(3) = 105$, so $105 + f = 135 \\Rightarrow f = 30$.\n\n**The Full Solution:**\nStep 1: Let $f$ be the fixed travel fee. Cost $=$ (hourly rate)(hours) $+$ travel fee: $35h + f = \\text{total}$.\nStep 2: For the 3-hour job: $35(3) + f = 135 \\Rightarrow 105 + f = 135$.\nStep 3: Subtract $105$: $f = 30$.\nCheck: $35(3) + 30 = 105 + 30 = 135$. $\\checkmark$\n\n**Common Mistakes:** Reporting $135$ (the total cost); reporting $105$ (the hourly-rate portion, not the fee); subtracting in the wrong place and landing on $45$.\n\n**Test Day Takeaway:** When the fixed fee is the unknown, the rate $\\times$ quantity piece is fully known — compute it, then subtract from the total to isolate the fee.",
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
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Small $= m$, medium $= 2m$, large $= m + 4$. Total: $m + 2m + (m + 4) = 4m + 4 = 64 \\Rightarrow 4m = 60 \\Rightarrow m = 15$.\n\n**The Full Solution:**\nStep 1: Let $m$ be the number of small pastries. Then medium $= 2m$ and large $= m + 4$.\nStep 2: Sum to the total: $m + 2m + (m + 4) = 64$.\nStep 3: Combine like terms: $4m + 4 = 64$.\nStep 4: Subtract $4$, then divide by $4$: $4m = 60 \\Rightarrow m = 15$.\nCheck: $15 + 30 + 19 = 64$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($18$): arithmetic slip after a mis-combined equation.\n* Choice C ($22$): divides the total by $3$ and ignores the $+4$ offset.\n* Choice D ($25$): comes from an incorrect setup that drops or mishandles a term.\n\n**Test Day Takeaway:** Combine the variable terms ($m + 2m + m = 4m$), move the constant offset to the total side, then divide.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'word-problem-to-multi-step-linear', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-335', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'medium', type: 'fill-in',
    question: 'A factory produces three sizes of metal pins: small, medium, and large. The number of medium pins is $3$ times the number $n$ of small pins. The number of large pins is $25$ fewer than the number of small pins. If the total number of pins produced is $200$, what is the number of small pins?',
    correctAnswer: '45',
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**The correct answer is $45$.**\n\n**The Fast Way (~20s):** Small $= n$, medium $= 3n$, large $= n - 25$. Total: $n + 3n + (n - 25) = 5n - 25 = 200 \\Rightarrow 5n = 225 \\Rightarrow n = 45$.\n\n**The Full Solution:**\nStep 1: Let $n$ be the number of small pins. Then medium $= 3n$ and large $= n - 25$.\nStep 2: Sum to the total: $n + 3n + (n - 25) = 200$.\nStep 3: Combine like terms: $5n - 25 = 200$.\nStep 4: Add $25$, then divide by $5$: $5n = 225 \\Rightarrow n = 45$.\nCheck: small $= 45$, medium $= 135$, large $= 20$; $45 + 135 + 20 = 200$. $\\checkmark$\n\n**Common Mistakes:** Reporting $135$ (the medium count); reporting $40$ from $\\frac{200}{5}$ (forgetting the $-25$ adjustment); reporting $20$ (the large count).\n\n**Test Day Takeaway:** Define one variable, write every quantity in terms of it, sum to the total. The $-25$ moves to the other side before you divide.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'word-problem-to-multi-step-linear', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-336', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A shop sells three sizes of t-shirt: small, medium, and large. The number of medium shirts sold is $4$ times the number $s$ of small shirts. The number of large shirts sold is $15$ more than the number of small shirts. If a total of $147$ shirts were sold, what is the value of $s$?',
    choices: [{ id: 'A', text: '$22$' }, { id: 'B', text: '$25$' }, { id: 'C', text: '$30$' }, { id: 'D', text: '$33$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Small $= s$, medium $= 4s$, large $= s + 15$. Total: $s + 4s + (s + 15) = 6s + 15 = 147 \\Rightarrow 6s = 132 \\Rightarrow s = 22$.\n\n**The Full Solution:**\nStep 1: Let $s$ be the number of small shirts. Then medium $= 4s$ and large $= s + 15$.\nStep 2: Sum to the total: $s + 4s + (s + 15) = 147$.\nStep 3: Combine like terms: $6s + 15 = 147$.\nStep 4: Subtract $15$, then divide by $6$: $6s = 132 \\Rightarrow s = 22$.\nCheck: $22 + 88 + 37 = 147$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($25$): ignores the $+15$ offset and divides the total directly: $\\frac{147}{6} \\approx 24.5$, rounded up.\n* Choice C ($30$): miscounts the coefficient — divides $147$ by $5$ (treating large as just $s$): $\\frac{147}{5} \\approx 29.4$, rounded to $30$.\n* Choice D ($33$): divides the adjusted total $147 - 15 = 132$ by $4$ (the medium coefficient alone) instead of by $6$.\n\n**Test Day Takeaway:** The coefficient on the variable counts every term that uses it ($1 + 4 + 1 = 6$). Strip the constant offset off the total before dividing.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'word-problem-to-multi-step-linear', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-337', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'medium', type: 'fill-in',
    question: 'In a class, the number of girls is $5$ more than twice the number $b$ of boys. The class has $35$ students total. How many boys are in the class?',
    correctAnswer: '10',
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~15s):** Let $b$ be the boys, so girls $= 2b + 5$. The two groups make up the class: $b + (2b + 5) = 35 \\Rightarrow 3b = 30 \\Rightarrow b = 10$.\n\n**The Full Solution:**\nStep 1: Let $b =$ number of boys. \"$5$ more than twice the number of boys\" means girls $= 2b + 5$.\nStep 2: Boys and girls total $35$: $b + (2b + 5) = 35$.\nStep 3: Combine and solve: $3b + 5 = 35 \\Rightarrow 3b = 30 \\Rightarrow b = 10$.\n\nCheck: $10$ boys and $2(10) + 5 = 25$ girls give $10 + 25 = 35$. $\\checkmark$\n\n**Common Mistakes:** Reporting $25$ (the girls count, not the boys); subtracting the $5$ first and splitting, landing on $15$; dropping the $+5$ entirely.\n\n**Test Day Takeaway:** \"$X$ more than twice $Y$\" translates to $2Y + X$. Add the parts, set them equal to the total, then solve for the variable the question actually asks for.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'word-problem-to-multi-step-linear', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-338', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A library has three types of media: books, magazines, and DVDs. The number of magazines is one-third the number $b$ of books. The number of DVDs is $50$ more than the number of magazines. If the library has $950$ items in total, how many books does it have?',
    choices: [{ id: 'A', text: '$540$' }, { id: 'B', text: '$510$' }, { id: 'C', text: '$300$' }, { id: 'D', text: '$580$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Books $= b$, magazines $= \\frac{b}{3}$, DVDs $= \\frac{b}{3} + 50$. Sum them: $b + \\frac{b}{3} + \\frac{b}{3} + 50 = 950$, so $\\frac{5b}{3} = 900 \\Rightarrow b = 540$, choice A.\n\n**The Full Solution:**\nStep 1: Let $b =$ books. Magazines are one-third the books: $\\frac{b}{3}$. DVDs are $50$ more than magazines: $\\frac{b}{3} + 50$.\nStep 2: The three counts total $950$: $b + \\frac{b}{3} + \\frac{b}{3} + 50 = 950$.\nStep 3: Combine the $b$ terms: $b + \\frac{2b}{3} = \\frac{3b}{3} + \\frac{2b}{3} = \\frac{5b}{3}$. So $\\frac{5b}{3} + 50 = 950$.\nStep 4: $\\frac{5b}{3} = 900 \\Rightarrow b = 540$.\n\nCheck: books $= 540$, magazines $= 180$, DVDs $= 230$, and $540 + 180 + 230 = 950$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($510$): the result of an off-by-a-constant slip when clearing the fraction.\n* Choice C ($300$): solves for the combined magazine-plus-DVD base instead of the book count $b$.\n* Choice D ($580$): forgets to subtract the $50$ before isolating $b$.\n\n**Test Day Takeaway:** With fractional coefficients, combine everything over a common denominator first ($b + \\frac{b}{3} + \\frac{b}{3} = \\frac{5b}{3}$), move the lone constant to the other side, then solve.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'word-problem-to-multi-step-linear', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-339', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A printing shop produces three sizes of poster: large, medium, and small. During one shift, the number of medium posters is $3$ times the number $L$ of large posters, and the number of small posters is $20$ fewer than the number of medium posters. If a total of $260$ posters are produced, what is the value of $L$?',
    choices: [{ id: 'A', text: '$40$' }, { id: 'B', text: '$60$' }, { id: 'C', text: '$45$' }, { id: 'D', text: '$80$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Large $= L$, medium $= 3L$, small $= 3L - 20$. Total: $L + 3L + (3L - 20) = 260 \\Rightarrow 7L - 20 = 260 \\Rightarrow 7L = 280 \\Rightarrow L = 40$, choice A.\n\n**The Full Solution:**\nStep 1: Let $L =$ large posters. Medium is $3$ times large: $3L$. Small is $20$ fewer than medium: $3L - 20$.\nStep 2: The three sizes total $260$: $L + 3L + (3L - 20) = 260$.\nStep 3: Combine: $7L - 20 = 260 \\Rightarrow 7L = 280 \\Rightarrow L = 40$.\n\nCheck: $40 + 120 + 100 = 260$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($60$): divides $260 \\div 5$ instead of by $7$, miscounting the coefficient on $L$.\n* Choice C ($45$): comes from mis-setting the small-poster relationship and dividing by the wrong constant.\n* Choice D ($80$): doubles a correct intermediate value, a setup-then-arithmetic slip.\n\n**Test Day Takeaway:** Track the chain of relationships precisely. \"Small is $20$ fewer than medium\" means small $= 3L - 20$, not $L - 20$ — the $-20$ attaches to the medium expression, not to $L$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'word-problem-to-multi-step-linear', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-340', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'hard', type: 'fill-in',
    question: 'A bookstore sells three types of items: paperback books, hardback books, and audio CDs. The number of paperback books is $4$ times the number $h$ of hardback books. The number of audio CDs is $20$ less than the number of hardback books. The total number of items is $280$. How many hardback books are in the store?',
    correctAnswer: '50',
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**The correct answer is $50$.**\n\n**The Fast Way (~20s):** Hardbacks $= h$, paperbacks $= 4h$, CDs $= h - 20$. Total: $h + 4h + (h - 20) = 280 \\Rightarrow 6h - 20 = 280 \\Rightarrow 6h = 300 \\Rightarrow h = 50$.\n\n**The Full Solution:**\nStep 1: Let $h =$ hardbacks. Paperbacks are $4$ times hardbacks: $4h$. CDs are $20$ less than hardbacks: $h - 20$.\nStep 2: The three counts total $280$: $h + 4h + (h - 20) = 280$.\nStep 3: Combine: $6h - 20 = 280 \\Rightarrow 6h = 300 \\Rightarrow h = 50$.\n\nCheck: hardbacks $= 50$, paperbacks $= 200$, CDs $= 30$, and $50 + 200 + 30 = 280$. $\\checkmark$\n\n**Common Mistakes:** Reporting $200$ (the paperback count) or $30$ (the CD count) instead of the hardback count; dropping the $-20$ and landing on a non-integer near $46.67$.\n\n**Test Day Takeaway:** \"$X$ less than $Y$\" means $Y - X$. After solving, sanity-check that the count is a positive whole number — item counts can't be fractional or negative.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'word-problem-to-multi-step-linear', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-alg-341', domain: 'algebra', skills: ['word-problem-to-equation'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Sara works two jobs. At her morning job, she earns $\\$12$ per hour. At her afternoon job, she earns $\\$18$ per hour. Last week she worked a total of $30$ hours and earned $\\$420$. How many hours did Sara work at her morning job?',
    choices: [{ id: 'A', text: '$20$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$15$' }, { id: 'D', text: '$25$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Let $m$ be morning hours, so afternoon $= 30 - m$. Earnings: $12m + 18(30 - m) = 420 \\Rightarrow 12m + 540 - 18m = 420 \\Rightarrow -6m = -120 \\Rightarrow m = 20$, choice A.\n\n**The Full Solution:**\nStep 1: Let $m =$ morning hours. The two jobs total $30$ hours, so afternoon $= 30 - m$.\nStep 2: Total earnings: $12m + 18(30 - m) = 420$.\nStep 3: Expand and solve: $12m + 540 - 18m = 420 \\Rightarrow -6m = -120 \\Rightarrow m = 20$.\n\nCheck: morning $= 20$ hours, afternoon $= 10$ hours, and $12(20) + 18(10) = 240 + 180 = 420$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($10$): the afternoon hours ($30 - 20$) — the right work, but the wrong variable reported.\n* Choice C ($15$): assumes a half-and-half split ($\\frac{30}{2}$), ignoring the difference in wages.\n* Choice D ($25$): swaps the two rates, solving $18m + 12(30 - m) = 420$ instead.\n\n**Test Day Takeaway:** When two amounts sum to a known total, write one as (total minus the other) and substitute into the second equation. That collapses everything to a single unknown.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'word-problem-to-multi-step-linear', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  // ── linear-cost-model (5 questions, batch 2026-05-13) ─────────────────────
  // Pattern: build f(x) from a verbal description (base + per-unit; flat
  // period + hourly after; etc.). Aligns to Bluebook M2-Hard Q22 (window
  // repair piecewise) and Q3 (popsicles function-from-description).
  { id: 'bank-alg-342', domain: 'algebra', skills: ['linear-functions', 'word-problems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A taxi service charges a $\\$3.50$ base fare plus $\\$2.40$ per mile driven. Which function $f$ gives the total cost, in dollars, of a taxi ride of $m$ miles?',
    choices: [{ id: 'A', text: '$f(m) = 2.40m$' }, { id: 'B', text: '$f(m) = 2.40m + 3.50$' }, { id: 'C', text: '$f(m) = 3.50m + 2.40$' }, { id: 'D', text: '$f(m) = 5.90m$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Linear Cost Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The per-mile rate $\\$2.40$ is the slope and the $\\$3.50$ base fare is the constant, so $f(m) = 2.40m + 3.50$, choice B.\n\n**The Full Solution:**\nTotal cost $=$ (per-mile rate)(miles) $+$ (base fare). The $\\$2.40$ multiplies the variable $m$ (it accumulates with distance), so it is the slope. The $\\$3.50$ is paid once regardless of distance, so it is the constant term.\n\n$f(m) = 2.40m + 3.50$.\n\nCheck: at $m = 0$, $f = 3.50$ — the base fare alone. At $m = 10$, $f = 24 + 3.50 = 27.50$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: drops the base fare, stopping one step early.\n* Choice C: swaps the coefficients, using $3.50$ as the per-mile rate. At $m = 0$ it would give $2.40$, not the true $3.50$.\n* Choice D: adds the two numbers ($3.50 + 2.40 = 5.90$) and treats the sum as a single per-mile rate, losing the structure.\n\n**Test Day Takeaway:** \"Base/flat/fixed/one-time\" is the $y$-intercept; \"per [unit]\" is the slope. Build $f(x) = (\\text{per-unit rate}) \\cdot x + (\\text{base})$.",
    calculatorAllowed: true, tags: ['build-function'], sourceStyleRef: 'linear-cost-model', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-343', domain: 'algebra', skills: ['linear-functions', 'word-problems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A copy shop charges a fixed $\\$0.80$ setup fee plus $\\$0.07$ per page for self-service copies. The total cost is also subject to a $\\$0.04$-per-page surcharge for color copies. For a color print job, which function $f$ gives the total cost, in dollars, of $p$ color copies?',
    choices: [{ id: 'A', text: '$f(p) = 0.11p + 0.80$' }, { id: 'B', text: '$f(p) = 0.07p + 0.04$' }, { id: 'C', text: '$f(p) = 0.91p$' }, { id: 'D', text: '$f(p) = 0.80p + 0.11$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Cost Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Two per-page charges add into one slope: $0.07 + 0.04 = 0.11$. The $\\$0.80$ setup fee is the intercept, so $f(p) = 0.11p + 0.80$, choice A.\n\n**The Full Solution:**\nStep 1: Both the base copy rate ($\\$0.07$) and the color surcharge ($\\$0.04$) are charged per page, so they combine into a single per-page slope: $0.07 + 0.04 = 0.11$.\nStep 2: The $\\$0.80$ setup fee is paid once regardless of page count, so it is the $y$-intercept.\n\n$f(p) = 0.11p + 0.80$.\n\nCheck: at $p = 0$, $f = 0.80$ — just the setup. At $p = 10$, $f = 1.10 + 0.80 = 1.90$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: uses $0.07$ as the slope and $0.04$ as the intercept, dropping the setup fee and ignoring the surcharge in the rate.\n* Choice C: sums all three numbers ($0.07 + 0.04 + 0.80 = 0.91$) into a single per-page rate.\n* Choice D: swaps roles, putting $0.80$ on $p$ and the combined per-page rate as the constant.\n\n**Test Day Takeaway:** When several charges apply to the same unit, add them into one slope. One-time charges (setup, signup, base) stay as the intercept.",
    calculatorAllowed: true, tags: ['build-function'], sourceStyleRef: 'linear-cost-model', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-344', domain: 'algebra', skills: ['linear-functions', 'word-problems'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A plumber charges $\\$180$ for the first two hours of any service call plus an hourly rate for each additional hour. The total cost for a $5$-hour service call is $\\$330$. Which function $f$ gives the total cost, in dollars, for a service call of $x$ hours, where $x \\geq 2$?',
    choices: [{ id: 'A', text: '$f(x) = 50x + 80$' }, { id: 'B', text: '$f(x) = 50x + 180$' }, { id: 'C', text: '$f(x) = 66x$' }, { id: 'D', text: '$f(x) = 66x + 180$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Cost Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The hourly rate is $\\frac{330 - 180}{5 - 2} = \\frac{150}{3} = \\$50$ per extra hour. For $x \\ge 2$: $f(x) = 180 + 50(x - 2) = 50x + 80$, choice A.\n\n**The Full Solution:**\nStep 1: A flat $\\$180$ covers the first $2$ hours, plus $r$ dollars for each hour beyond that: $f(x) = 180 + r(x - 2)$.\nStep 2: Use the data point $f(5) = 330$: $180 + r(3) = 330 \\Rightarrow 3r = 150 \\Rightarrow r = 50$.\nStep 3: Simplify: $f(x) = 180 + 50(x - 2) = 180 + 50x - 100 = 50x + 80$.\n\nCheck: $f(2) = 100 + 80 = 180$ (the flat rate, no extra hours) and $f(5) = 250 + 80 = 330$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: keeps $180$ as the intercept without subtracting the $2$ included hours, giving $f(2) = 280 \\neq 180$.\n* Choice C: averages $\\frac{330}{5} = 66$ as a uniform hourly rate, ignoring the flat period.\n* Choice D: combines both errors — the averaged rate plus the full flat fee, double-counting.\n\n**Test Day Takeaway:** When a flat fee covers the first $k$ units, write $f(x) = (\\text{flat}) + r(x - k)$ for $x \\ge k$. The $x - k$ removes the units already paid for; expand to get $f(x) = rx + (\\text{flat} - rk)$.",
    calculatorAllowed: true, tags: ['build-function', 'piecewise-linear'], sourceStyleRef: 'linear-cost-model', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-345', domain: 'algebra', skills: ['linear-functions', 'word-problems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A streaming-music subscription costs $\\$9.99$ per month, plus a one-time signup fee of $\\$15$. Which function $f$ gives the total amount paid, in dollars, after $m$ months of subscription?',
    choices: [{ id: 'A', text: '$f(m) = 15m + 9.99$' }, { id: 'B', text: '$f(m) = 9.99m$' }, { id: 'C', text: '$f(m) = 9.99m + 15$' }, { id: 'D', text: '$f(m) = 24.99m$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Linear Cost Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The $\\$9.99$ monthly cost is the slope and the one-time $\\$15$ signup is the intercept, so $f(m) = 9.99m + 15$, choice C.\n\n**The Full Solution:**\nThe signup fee is paid once, independent of how many months pass, so it is the $y$-intercept. The monthly subscription recurs every month, so it is the slope on $m$.\n\n$f(m) = 9.99m + 15$.\n\nCheck: at $m = 0$ (signup day), $f = 15$. After $1$ month, $f = 9.99 + 15 = 24.99$. After $12$ months, $f = 119.88 + 15 = 134.88$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: swaps the coefficients. It happens to match at $m = 1$ ($24.99$), but at $m = 12$ it gives $189.99 \\neq 134.88$.\n* Choice B: forgets the signup fee, stopping one step early.\n* Choice D: adds the signup and monthly amounts into a single per-month charge.\n\n**Test Day Takeaway:** In subscription problems, the recurring per-month (or per-week) fee is the slope and the signup/activation fee is the intercept. Keep them separate.",
    calculatorAllowed: true, tags: ['build-function'], sourceStyleRef: 'linear-cost-model', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-346', domain: 'algebra', skills: ['linear-functions', 'word-problems'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A solar-panel installation has a fixed upfront cost of $\\$8{,}400$ and generates approximately $\\$1{,}050$ in savings per year of operation. Which function $f$ gives the net cost (still-to-recoup amount), in dollars, after $y$ years of operation?',
    choices: [{ id: 'A', text: '$f(y) = 8{,}400 - 1{,}050y$' }, { id: 'B', text: '$f(y) = 1{,}050y - 8{,}400$' }, { id: 'C', text: '$f(y) = 8{,}400 + 1{,}050y$' }, { id: 'D', text: '$f(y) = 1{,}050y + 8{,}400$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Cost Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Net cost starts at the full $\\$8{,}400$ and shrinks by $\\$1{,}050$ each year as savings recover it, so the slope is negative: $f(y) = 8{,}400 - 1{,}050y$, choice A.\n\n**The Full Solution:**\nStep 1: At $y = 0$, nothing has been recouped, so the net cost is the full $\\$8{,}400$ — that is the intercept.\nStep 2: Each year of operation saves $\\$1{,}050$, reducing the still-to-recoup amount, so the slope is $-1{,}050$.\n\n$f(y) = 8{,}400 - 1{,}050y$.\n\nCheck: $f(0) = 8{,}400$. $f(8) = 8{,}400 - 8{,}400 = 0$ (an $8$-year payback). $f(10) = 8{,}400 - 10{,}500 = -2{,}100$, meaning the system has saved $\\$2{,}100$ beyond its cost. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: flips the roles, treating savings as the starting amount and the upfront cost as the deduction.\n* Choice C: makes the slope positive, implying the net cost grows each year — the opposite of payback.\n* Choice D: combines both sign errors at once.\n\n**Test Day Takeaway:** Watch direction. An amount \"still owed\" or \"still to recoup\" decreases as savings accumulate, so its slope is negative. \"Total accumulated savings\" would increase — same data, opposite sign.",
    calculatorAllowed: true, tags: ['build-function'], sourceStyleRef: 'linear-cost-model', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  // ── inequality-word-problem-floor (5 questions, batch 2026-05-13) ─────────
  // Pattern: real-world constraint (budget, capacity, etc.) translates to an
  // inequality; find max/min count. Aligns to Bluebook M2-Hard Q14 (candles
  // with budget + minimum quantity).
  { id: 'bank-alg-347', domain: 'algebra', skills: ['inequalities', 'word-problems', 'systems-of-equations'], difficulty: 'hard', type: 'fill-in',
    question: 'A conference planner has a budget of $\\$1{,}500$ to purchase notebooks. To qualify for bulk discount pricing, the planner must purchase a minimum of $150$ notebooks total. If basic notebooks cost $\\$6$ each and premium notebooks cost $\\$13$ each, what is the maximum number of premium notebooks the planner can purchase while staying within the budget and qualifying for the discount?',
    correctAnswer: '85',
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**The correct answer is $85$.**\n\n**The Fast Way (~45s):** To maximize premium $p$, hit the $150$-notebook floor with the cheapest filler, so basic $= 150 - p$. Budget: $6(150 - p) + 13p \\le 1500 \\Rightarrow 900 + 7p \\le 1500 \\Rightarrow p \\le 85.71$. The floor of that is $85$.\n\n**The Full Solution:**\nStep 1: Let $b =$ basic and $p =$ premium notebooks. The floor is $b + p \\ge 150$ and the budget is $6b + 13p \\le 1500$.\nStep 2: To push $p$ as high as possible, spend as little as possible on everything else: buy exactly $150$ total, all non-premium ones basic. So $b = 150 - p$ (any extra notebooks just waste budget).\nStep 3: Substitute into the budget: $6(150 - p) + 13p \\le 1500 \\Rightarrow 900 - 6p + 13p \\le 1500 \\Rightarrow 7p \\le 600 \\Rightarrow p \\le 85.71\\ldots$.\nStep 4: Since $p$ must be a whole number, the maximum is $p = 85$.\n\nCheck: with $p = 85$, $b = 65$. Total $= 150 \\ge 150$, and $6(65) + 13(85) = 390 + 1105 = 1495 \\le 1500$. Try $p = 86$: $6(64) + 13(86) = 384 + 1118 = 1502 > 1500$ — over budget. $\\checkmark$\n\n**Common Mistakes:** Reporting $115$ (from $\\frac{1500}{13}$, ignoring the floor); reporting $150$ (treating the floor as the answer); reporting $86$ (rounding up past the budget); reporting $65$ (the basic count, not premium).\n\n**Test Day Takeaway:** With a budget plus a minimum-total floor, maximize one quantity by filling the rest with the cheaper option at exactly the floor. Solve the single-variable inequality, then take the floor of the decimal.",
    calculatorAllowed: true, tags: ['constraint-optimization'], sourceStyleRef: 'inequality-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-348', domain: 'algebra', skills: ['inequalities', 'word-problems'], difficulty: 'medium', type: 'fill-in',
    question: 'A photographer is uploading photos to a cloud storage service. Each standard photo uses $4$ MB, and each high-resolution photo uses $11$ MB. If the photographer has $2{,}000$ MB of free storage remaining and must upload exactly $30$ standard photos for a client, what is the maximum number of high-resolution photos that can also be uploaded without exceeding the free storage?',
    correctAnswer: '170',
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**The correct answer is $170$.**\n\n**The Fast Way (~25s):** The $30$ standard photos use $30 \\times 4 = 120$ MB, leaving $2{,}000 - 120 = 1{,}880$ MB. Then $\\frac{1{,}880}{11} = 170.9$, so at most $170$ high-res photos fit.\n\n**The Full Solution:**\nStep 1: Let $h =$ high-resolution photos. The required standard photos use a fixed $4(30) = 120$ MB.\nStep 2: Total storage must stay within $2{,}000$ MB: $120 + 11h \\le 2{,}000$.\nStep 3: Solve: $11h \\le 1{,}880 \\Rightarrow h \\le 170.9\\ldots$.\nStep 4: Since $h$ must be a whole number, the maximum is $h = 170$.\n\nCheck: $120 + 11(170) = 120 + 1{,}870 = 1{,}990 \\le 2{,}000$. Try $h = 171$: $120 + 1{,}881 = 2{,}001 > 2{,}000$ — over the limit. $\\checkmark$\n\n**Common Mistakes:** Reporting $181$ (dividing $\\frac{2{,}000}{11}$ without subtracting the standard usage first); reporting $171$ (rounding up past the limit); reporting $30$ (the standard count).\n\n**Test Day Takeaway:** Subtract any fixed, already-committed usage before solving for the remaining variable, then take the floor. \"Maximum that fits\" always rounds down.",
    calculatorAllowed: true, tags: ['constraint-optimization'], sourceStyleRef: 'inequality-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-349', domain: 'algebra', skills: ['inequalities', 'word-problems', 'systems-of-equations'], difficulty: 'hard', type: 'fill-in',
    question: 'A school is purchasing chairs for a new auditorium. The total budget is $\\$4{,}800$. To take advantage of a vendor rebate, the school must purchase at least $250$ chairs. Standard chairs cost $\\$15$ each and padded chairs cost $\\$22$ each. What is the maximum number of padded chairs the school can purchase while staying within the budget and qualifying for the rebate?',
    correctAnswer: '150',
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**The correct answer is $150$.**\n\n**The Fast Way (~45s):** To buy the most padded chairs, hit the rebate floor exactly with the cheaper standard chairs: $s+p=250$, so $s=250-p$. Budget: $15(250-p)+22p \\le 4800 \\Rightarrow 3750+7p \\le 4800 \\Rightarrow p \\le 150$.\n\n**The Full Solution:**\nStep 1: Let $s$ = standard chairs and $p$ = padded chairs. Two constraints: rebate floor $s+p \\ge 250$ and budget $15s+22p \\le 4800$.\nStep 2: Every chair beyond $250$ wastes money, so to maximize the pricier padded chairs, set the total at exactly the floor: $s=250-p$.\nStep 3: Substitute into the budget: $15(250-p)+22p \\le 4800 \\Rightarrow 3750+7p \\le 4800 \\Rightarrow 7p \\le 1050 \\Rightarrow p \\le 150$.\nStep 4: Check $p=150$, $s=100$: cost $=15(100)+22(150)=1500+3300=4800$, exactly the budget. $p=151$ gives $4807 > 4800$, which fails. $\\checkmark$\n\n**Common Mistakes:** Reporting $218$ from $\\frac{4800}{22}$ (ignores the rebate floor); reporting $100$ (the standard-chair count, not the padded); reporting $250$ (the floor itself).\n\n**Test Day Takeaway:** With a budget cap and a minimum-quantity floor, fill to the floor exactly with the cheaper item to leave the most money for the pricier one, then solve the single-variable inequality and floor the result.",
    calculatorAllowed: true, tags: ['constraint-optimization'], sourceStyleRef: 'inequality-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-350', domain: 'algebra', skills: ['inequalities', 'word-problems'], difficulty: 'medium', type: 'fill-in',
    question: 'A bookstore is restocking its shelves. The store has $\\$840$ to spend on new inventory. Each new paperback costs $\\$8$ and each new hardcover costs $\\$21$. If the store buys exactly $45$ paperbacks, what is the maximum number of hardcovers the store can buy without exceeding the budget?',
    correctAnswer: '22',
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**The correct answer is $22$.**\n\n**The Fast Way (~20s):** Paperbacks cost $45 \\times 8 = 360$. That leaves $840-360=480$ for hardcovers. $\\frac{480}{21} \\approx 22.86$, so at most $22$.\n\n**The Full Solution:**\nStep 1: Let $h$ = hardcovers. The fixed paperback spend is $8(45)=360$.\nStep 2: Budget: $360+21h \\le 840 \\Rightarrow 21h \\le 480 \\Rightarrow h \\le 22.857\\ldots$\nStep 3: $h$ must be a whole number, so take the floor: $h=22$.\nStep 4: Check: $360+21(22)=360+462=822 \\le 840$. Trying $23$ gives $843 > 840$, which fails. $\\checkmark$\n\n**Common Mistakes:** Reporting $40$ from $\\frac{840}{21}$ (forgets to subtract the paperback spend first); reporting $23$ (rounds up past the budget).\n\n**Test Day Takeaway:** Subtract the fixed spend first, then divide, then take the floor. Rounding up breaks the budget.",
    calculatorAllowed: true, tags: ['constraint-optimization'], sourceStyleRef: 'inequality-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-351', domain: 'algebra', skills: ['inequalities', 'word-problems'], difficulty: 'hard', type: 'fill-in',
    question: 'A summer camp\'s catering budget for one day is $\\$650$. To honor a contract, the caterer must serve at least $80$ total meals. A vegetarian meal costs the caterer $\\$5.50$ and a non-vegetarian meal costs $\\$8.25$. What is the maximum number of non-vegetarian meals the caterer can serve while staying within the budget and meeting the contract minimum?',
    correctAnswer: '76',
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**The correct answer is $76$.**\n\n**The Fast Way (~45s):** To serve the most non-vegetarian meals, hit the contract floor exactly with the cheaper vegetarian meals: $v+n=80$, so $v=80-n$. Budget: $5.50(80-n)+8.25n \\le 650 \\Rightarrow 440+2.75n \\le 650 \\Rightarrow n \\le 76.36$. Floor: $76$.\n\n**The Full Solution:**\nStep 1: Let $v$ = vegetarian and $n$ = non-vegetarian meals. Constraints: contract floor $v+n \\ge 80$ and budget $5.50v+8.25n \\le 650$.\nStep 2: To maximize the pricier non-vegetarian meals, meet the floor exactly: $v=80-n$.\nStep 3: Substitute: $5.50(80-n)+8.25n \\le 650 \\Rightarrow 440+2.75n \\le 650 \\Rightarrow 2.75n \\le 210 \\Rightarrow n \\le 76.36\\ldots$\nStep 4: Take the floor: $n=76$. Check $n=76$, $v=4$: cost $=5.50(4)+8.25(76)=22+627=649 \\le 650$. Trying $n=77$ gives $651.75 > 650$, which fails. $\\checkmark$\n\n**Common Mistakes:** Reporting $78$ from $\\frac{650}{8.25}$ (ignores the floor — and $0+78=78<80$ fails it anyway); reporting $80$ (the floor itself); reporting $77$ (rounds up past the budget).\n\n**Test Day Takeaway:** With decimal prices, set the floor at equality, solve for the single variable, and floor the decimal. Verify the next integer up actually fails.",
    calculatorAllowed: true, tags: ['constraint-optimization'], sourceStyleRef: 'inequality-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  // ── inequality-word-problem-floor MC variants (5 questions, batch 2026-05-13) ──
  // Pattern: budget + minimum-quantity optimization, MC form. Complements the
  // existing 6 fill-in items; distractors cover named trap classes (floor-as-answer,
  // budget/expensive cap ignoring floor, off-by-one round-up, wrong variable).
  { id: 'bank-alg-352', domain: 'algebra', skills: ['inequalities', 'word-problems', 'systems-of-equations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A garden nursery has a budget of $\\$1{,}080$ to purchase plants for spring sales. To qualify for a grower-network discount, the nursery must order a minimum of $120$ plants total. Basic vegetable starts cost $\\$6$ each and flowering ornamentals cost $\\$11$ each. What is the maximum number of flowering ornamentals the nursery can order while staying within the budget and qualifying for the discount?',
    choices: [{ id: 'A', text: '$73$' }, { id: 'B', text: '$72$' }, { id: 'C', text: '$98$' }, { id: 'D', text: '$120$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** To order the most flowering ornamentals, hit the discount floor exactly with the cheaper basics: $v+f=120$, so $v=120-f$. Budget: $6(120-f)+11f \\le 1080 \\Rightarrow 720+5f \\le 1080 \\Rightarrow f \\le 72$.\n\n**The Full Solution:**\nStep 1: Let $v$ = basic starts and $f$ = flowering ornamentals. Constraints: discount floor $v+f \\ge 120$ and budget $6v+11f \\le 1080$.\nStep 2: Extra plants beyond $120$ only waste budget, so to maximize the pricier flowering ornamentals, set $v=120-f$.\nStep 3: Substitute: $6(120-f)+11f \\le 1080 \\Rightarrow 720+5f \\le 1080 \\Rightarrow 5f \\le 360 \\Rightarrow f \\le 72$.\nStep 4: Check $f=72$, $v=48$: cost $=6(48)+11(72)=288+792=1080$, exactly the budget. Trying $f=73$ gives $1085 > 1080$, which fails. So $f=72$, choice B. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($73$): off-by-one — adds one more and skips the check, but $73$ exceeds the budget by $\\$5$.\n* Choice C ($98$): divides $\\frac{1080}{11} \\approx 98$ as if every plant were flowering, ignoring the $120$-plant floor (and $0+98=98<120$ fails it).\n* Choice D ($120$): reports the minimum total as if it were the maximum of one type.\n\n**Test Day Takeaway:** To maximize the more expensive option, set the total to the floor exactly, solve, and verify the next integer up fails.",
    calculatorAllowed: true, tags: ['constraint-optimization'], sourceStyleRef: 'inequality-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-353', domain: 'algebra', skills: ['inequalities', 'word-problems', 'systems-of-equations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'An event planner organizing a music festival has a budget of $\\$1{,}750$ for stage lighting. To qualify for a rental-company discount, the planner must rent a minimum of $200$ light fixtures total. String-light strands cost $\\$7$ each and spotlight units cost $\\$13$ each. What is the maximum number of spotlight units the planner can rent while staying within the budget and qualifying for the discount?',
    choices: [{ id: 'A', text: '$59$' }, { id: 'B', text: '$58$' }, { id: 'C', text: '$134$' }, { id: 'D', text: '$200$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** To rent the most spotlights, hit the discount floor exactly with the cheaper string strands: $r+s=200$, so $r=200-s$. Budget: $7(200-s)+13s \\le 1750 \\Rightarrow 1400+6s \\le 1750 \\Rightarrow s \\le 58.33$. Floor: $58$.\n\n**The Full Solution:**\nStep 1: Let $r$ = string strands and $s$ = spotlight units. Constraints: discount floor $r+s \\ge 200$ and budget $7r+13s \\le 1750$.\nStep 2: To maximize the pricier spotlights, set the total at the floor: $r=200-s$.\nStep 3: Substitute: $7(200-s)+13s \\le 1750 \\Rightarrow 1400+6s \\le 1750 \\Rightarrow 6s \\le 350 \\Rightarrow s \\le 58.33\\ldots$\nStep 4: Take the floor: $s=58$. Check $s=58$, $r=142$: cost $=7(142)+13(58)=994+754=1748 \\le 1750$. Trying $s=59$ gives $1754 > 1750$, which fails. So choice B. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($59$): rounds the decimal $58.33$ up, exceeding the budget by $\\$4$.\n* Choice C ($134$): divides $\\frac{1750}{13} \\approx 134$ as if all spending went to spotlights, ignoring the floor (and $0+134=134<200$ fails it).\n* Choice D ($200$): reports the minimum-total constraint as the max of one type.\n\n**Test Day Takeaway:** With a decimal boundary, floor the result — never round up — and confirm the floor-plus-one fails the budget.",
    calculatorAllowed: true, tags: ['constraint-optimization'], sourceStyleRef: 'inequality-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-354', domain: 'algebra', skills: ['inequalities', 'word-problems', 'systems-of-equations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A bakery is preparing for a wedding-season weekend. The owner has a budget of $\\$1{,}320$ to produce baked items for sale. To qualify for a bulk-flour discount, the bakery must produce a minimum of $100$ baked items total. Cupcakes cost the bakery $\\$8$ each to produce and specialty cakes cost $\\$20$ each. What is the maximum number of specialty cakes the bakery can produce while staying within the budget and qualifying for the discount?',
    choices: [{ id: 'A', text: '$44$' }, { id: 'B', text: '$43$' }, { id: 'C', text: '$57$' }, { id: 'D', text: '$100$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** To produce the most specialty cakes, hit the discount floor exactly with the cheaper cupcakes: $c+s=100$, so $c=100-s$. Budget: $8(100-s)+20s \\le 1320 \\Rightarrow 800+12s \\le 1320 \\Rightarrow s \\le 43.33$. Floor: $43$.\n\n**The Full Solution:**\nStep 1: Let $c$ = cupcakes and $s$ = specialty cakes. Constraints: discount floor $c+s \\ge 100$ and budget $8c+20s \\le 1320$.\nStep 2: To maximize the pricier specialty cakes, set the total at the floor: $c=100-s$.\nStep 3: Substitute: $8(100-s)+20s \\le 1320 \\Rightarrow 800+12s \\le 1320 \\Rightarrow 12s \\le 520 \\Rightarrow s \\le 43.33\\ldots$\nStep 4: Take the floor: $s=43$. Check $s=43$, $c=57$: cost $=8(57)+20(43)=456+860=1316 \\le 1320$. Trying $s=44$ gives $1328 > 1320$, which fails. So choice B. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($44$): rounds the decimal up, exceeding the budget by $\\$8$.\n* Choice C ($57$): reports cupcakes ($100-43$) instead of the specialty cakes the question asks for.\n* Choice D ($100$): treats the minimum-total constraint as the maximum of one type.\n\n**Test Day Takeaway:** When asked for the maximum of the pricier option, the answer is rarely the floor. Solve, floor the decimal, and confirm the variable you report matches what was asked.",
    calculatorAllowed: true, tags: ['constraint-optimization'], sourceStyleRef: 'inequality-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-355', domain: 'algebra', skills: ['inequalities', 'word-problems', 'systems-of-equations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A pharmacy has a budget of $\\$432$ to stock adhesive bandages for the upcoming summer season. To qualify for a wholesale discount, the pharmacy must order a minimum of $80$ packages total. Regular bandage packages cost $\\$3.20$ each and waterproof bandage packages cost $\\$6.40$ each. What is the maximum number of waterproof bandage packages the pharmacy can order while staying within the budget and qualifying for the discount?',
    choices: [{ id: 'A', text: '$56$' }, { id: 'B', text: '$55$' }, { id: 'C', text: '$67$' }, { id: 'D', text: '$80$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** To order the most waterproof packages, hit the discount floor exactly with the cheaper regular packages: $r+w=80$, so $r=80-w$. Budget: $3.20(80-w)+6.40w \\le 432 \\Rightarrow 256+3.20w \\le 432 \\Rightarrow w \\le 55$.\n\n**The Full Solution:**\nStep 1: Let $r$ = regular packages and $w$ = waterproof packages. Constraints: discount floor $r+w \\ge 80$ and budget $3.20r+6.40w \\le 432$.\nStep 2: To maximize the pricier waterproof packages, set the total at the floor: $r=80-w$.\nStep 3: Substitute: $3.20(80-w)+6.40w \\le 432 \\Rightarrow 256+3.20w \\le 432 \\Rightarrow 3.20w \\le 176 \\Rightarrow w \\le 55$.\nStep 4: Check $w=55$, $r=25$: cost $=3.20(25)+6.40(55)=80+352=432$, exactly the budget. Trying $w=56$ gives $435.20 > 432$, which fails. So choice B. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($56$): adds one more, exceeding the budget by $\\$3.20$.\n* Choice C ($67$): floors $\\frac{432}{6.40}=67.5$ as if all spending went to waterproof, ignoring the floor (and $0+67=67<80$ fails it).\n* Choice D ($80$): treats the minimum-total constraint as the maximum.\n\n**Test Day Takeaway:** When the inequality lands on an exact integer, you can't floor any further — but still verify the next integer up exceeds the budget so you know the boundary itself is the answer.",
    calculatorAllowed: true, tags: ['constraint-optimization'], sourceStyleRef: 'inequality-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  { id: 'bank-alg-356', domain: 'algebra', skills: ['inequalities', 'word-problems', 'systems-of-equations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A pet supply store has a budget of $\\$1{,}840$ to purchase toys for an end-of-summer sale. To qualify for a manufacturer discount, the store must order a minimum of $180$ toys total. Small toys cost $\\$7.50$ each and plush toys cost $\\$13.20$ each. What is the maximum number of plush toys the store can order while staying within the budget and qualifying for the discount?',
    choices: [{ id: 'A', text: '$86$' }, { id: 'B', text: '$85$' }, { id: 'C', text: '$95$' }, { id: 'D', text: '$180$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** To order the most plush toys, hit the discount floor exactly with the cheaper small toys: $s+p=180$, so $s=180-p$. Budget: $7.50(180-p)+13.20p \\le 1840 \\Rightarrow 1350+5.70p \\le 1840 \\Rightarrow p \\le 85.96$. Floor: $85$.\n\n**The Full Solution:**\nStep 1: Let $s$ = small toys and $p$ = plush toys. Constraints: discount floor $s+p \\ge 180$ and budget $7.50s+13.20p \\le 1840$.\nStep 2: To maximize the pricier plush toys, set the total at the floor: $s=180-p$.\nStep 3: Substitute: $7.50(180-p)+13.20p \\le 1840 \\Rightarrow 1350+5.70p \\le 1840 \\Rightarrow 5.70p \\le 490 \\Rightarrow p \\le 85.96\\ldots$\nStep 4: Take the floor: $p=85$. Check $p=85$, $s=95$: cost $=7.50(95)+13.20(85)=712.50+1122=1834.50 \\le 1840$. Trying $p=86$ gives $1840.20 > 1840$, over by just $\\$0.20$, which fails. So choice B. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($86$): rounds the decimal $85.96$ up; the check shows it just clears the budget.\n* Choice C ($95$): reports small toys ($180-85$) instead of plush.\n* Choice D ($180$): treats the minimum-total constraint as the maximum of one type.\n\n**Test Day Takeaway:** A decimal just barely above an integer (like $85.96$) tempts you to round up. Always floor, then verify the next integer up exceeds the budget — even by pennies, it fails.",
    calculatorAllowed: true, tags: ['constraint-optimization'], sourceStyleRef: 'inequality-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-13' },

  // ─── H.E. ONE-VARIABLE LINEAR INEQUALITY (bank-alg-357..364) ──────────────
  { id: 'bank-alg-357', domain: 'algebra', skills: ['inequalities'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which of the following is the solution set of the inequality $3x + 5 > 11$?',
    choices: [{ id: 'A', text: '$x > 2$' }, { id: 'B', text: '$x \\geq 2$' }, { id: 'C', text: '$x > 6$' }, { id: 'D', text: '$x < 2$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $3x+5>11 \\Rightarrow 3x>6 \\Rightarrow x>2$.\n\n**The Full Solution:** Subtract $5$ from both sides to get $3x>6$, then divide by $3$. Dividing by a positive number keeps the direction, so $x>2$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($x \\ge 2$): swaps the strict $>$ for inclusive $\\ge$.\n* Choice C ($x>6$): forgets to divide by $3$.\n* Choice D ($x<2$): flips the direction even though no negative was involved.\n\n**Test Day Takeaway:** The inequality direction stays the same when you add, subtract, multiply, or divide by a positive number.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-variable-linear-inequality', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-358', domain: 'algebra', skills: ['inequalities'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which of the following is the solution to $-2x + 7 \\leq 1$?',
    choices: [{ id: 'A', text: '$x \\leq 3$' }, { id: 'B', text: '$x \\geq 3$' }, { id: 'C', text: '$x \\leq -3$' }, { id: 'D', text: '$x \\geq -3$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $-2x+7 \\le 1 \\Rightarrow -2x \\le -6$; divide by $-2$ and flip: $x \\ge 3$.\n\n**The Full Solution:**\nStep 1: Subtract $7$: $-2x \\le -6$.\nStep 2: Divide by $-2$. Dividing by a negative flips the inequality, giving $x \\ge 3$, which is choice B.\nStep 3: Check $x=4$: $-2(4)+7=-1 \\le 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x \\le 3$): forgets to flip the direction when dividing by a negative.\n* Choices C and D ($x \\le -3$, $x \\ge -3$): sign errors on the $-6$.\n\n**Test Day Takeaway:** Always flip the inequality sign when you multiply or divide both sides by a negative number.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-variable-linear-inequality', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-359', domain: 'algebra', skills: ['inequalities'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following is the solution to $5(x - 3) < 2x + 6$?',
    choices: [{ id: 'A', text: '$x < 3$' }, { id: 'B', text: '$x < 7$' }, { id: 'C', text: '$x > 3$' }, { id: 'D', text: '$x > 7$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $5(x-3)<2x+6 \\Rightarrow 5x-15<2x+6 \\Rightarrow 3x<21 \\Rightarrow x<7$.\n\n**The Full Solution:**\nStep 1: Distribute the left side: $5x-15<2x+6$.\nStep 2: Subtract $2x$ and add $15$: $3x<21$.\nStep 3: Divide by $3$ (positive, so no flip): $x<7$, which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x<3$): mishandles the constant terms after distributing.\n* Choice C ($x>3$) and Choice D ($x>7$): flip the direction even though the coefficient is positive.\n\n**Test Day Takeaway:** Distribute first, collect like terms, then divide. The direction holds when the dividing coefficient is positive.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-variable-linear-inequality', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-360', domain: 'algebra', skills: ['inequalities'], difficulty: 'medium', type: 'fill-in',
    question: 'What is the least integer value of $x$ that satisfies the inequality $4x + 9 > 25$?',
    correctAnswer: '5',
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~10s):** $4x+9>25 \\Rightarrow 4x>16 \\Rightarrow x>4$. The least integer greater than $4$ is $5$.\n\n**The Full Solution:**\nStep 1: Subtract $9$: $4x>16$.\nStep 2: Divide by $4$ (positive, no flip): $x>4$.\nStep 3: A strict $>$ excludes $4$ itself, so the smallest integer that works is $5$.\n\n**Common Mistakes:** Reporting $4$ (treats $>$ as $\\ge$ and includes the boundary).\n\n**Test Day Takeaway:** A strict inequality $>$ excludes the boundary value, so the least integer solution is the next whole number above it.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-variable-linear-inequality', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

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
    explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Slope $= \\frac{12 - 3}{5 - 2} = \\frac{9}{3} = 3$. Using $(2, 3)$: $3 = 3(2) + b \\Rightarrow b = -3$, so $y = 3x - 3$.\n\n**The Full Solution:**\nStep 1: Slope $m = \\frac{12 - 3}{5 - 2} = \\frac{9}{3} = 3$.\nStep 2: Substitute a point to find $b$. Using $(2, 3)$: $3 = 3(2) + b \\Rightarrow 3 = 6 + b \\Rightarrow b = -3$.\nStep 3: The equation is $y = 3x - 3$.\nCheck the other point: at $x = 5$, $y = 3(5) - 3 = 12$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = 3x + 3$): correct slope but flips the sign of the intercept.\n* Choice C ($y = \\frac{1}{3}x + 3$): inverts the slope (run over rise) and misreads the intercept.\n* Choice D ($y = 9x - 15$): uses the raw rise of $9$ as the slope, forgetting to divide by the run of $3$.\n\n**Test Day Takeaway:** Find the slope first, then plug in either point to solve for $b$. Confirm by checking that the other point satisfies your equation.",
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
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The first line has slope $\\frac{9 - 3}{4 - 1} = 2$, so $y = 2x + 1$. Set equal to the second line: $2x + 1 = -x + 10 \\Rightarrow 3x = 9 \\Rightarrow x = 3$, $y = 7$. Intersection $(3, 7)$.\n\n**The Full Solution:**\nStep 1: Slope through $(1, 3)$ and $(4, 9)$ is $\\frac{9 - 3}{4 - 1} = \\frac{6}{3} = 2$.\nStep 2: Point-slope from $(1, 3)$: $y - 3 = 2(x - 1) \\Rightarrow y = 2x + 1$.\nStep 3: Set the two lines equal: $2x + 1 = -x + 10 \\Rightarrow 3x = 9 \\Rightarrow x = 3$.\nStep 4: $y = 2(3) + 1 = 7$. The intersection is $(3, 7)$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($(2, 8)$): satisfies the second line but not the first, so it is not the intersection.\n* Choice C ($(4, 6)$): mistakes a given point of the first line for the intersection.\n* Choice D ($(5, 5)$): mis-solves the resulting system.\n\n**Test Day Takeaway:** For an intersection, first write both lines explicitly (build the first from its two points), then solve by substitution.",
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
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $m=\\frac{17-5}{8-2}=\\frac{12}{6}=2$.\n\n**The Full Solution:**\nStep 1: Slope is $\\frac{\\text{change in }y}{\\text{change in }x}=\\frac{y_2-y_1}{x_2-x_1}$.\nStep 2: Using $(2,5)$ and $(8,17)$: $m=\\frac{17-5}{8-2}=\\frac{12}{6}=2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{1}{2}$): flips the fraction to run over rise.\n* Choice C ($12$): reports only the rise ($17-5$).\n* Choice D ($6$): reports only the run ($8-2$).\n\n**Test Day Takeaway:** Slope is change in $y$ over change in $x$. Keep the same point first in both the numerator and denominator.",
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
    calculatorAllowed: true, tags: [], sourceStyleRef: 'chained-percent-relationship', authoredBy: 'performsat-engine', createdAt: '2026-05-22' }
];
