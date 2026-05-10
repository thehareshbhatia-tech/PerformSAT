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
      { id: 'A', text: '75' },
      { id: 'B', text: '100' },
      { id: 'C', text: '200' },
      { id: 'D', text: '600' }
    ],
    correctAnswer: 'B',
    explanation: 'Slope = (1800 − 1200)/(9 − 3) = 600/6 = 100. Trap D gives the total rise without dividing by the run.',
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
      { id: 'A', text: '3' },
      { id: 'B', text: '4' },
      { id: 'C', text: '6' },
      { id: 'D', text: '24' }
    ],
    correctAnswer: 'B',
    explanation: 'Slope = (38 − 14)/(8 − 2) = 24/6 = 4. Trap D is the numerator alone (rise without dividing by run).',
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
      { id: 'A', text: '$\\$0.75$' },
      { id: 'B', text: '$\\$1.00$' },
      { id: 'C', text: '$\\$1.21$' },
      { id: 'D', text: '$\\$1.50$' }
    ],
    correctAnswer: 'B',
    explanation: 'Rate = (85 − 45)/(70 − 30) = 40/40 = $1.00 per mile. Trap C divides one cost by one distance (85/70).',
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
    explanation: 'Rate of change = (15 − 24)/(5 − 2) = −9/3 = −3, so the candle shrinks at 3 cm per hour.',
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
      { id: 'A', text: '72' },
      { id: 'B', text: '75' },
      { id: 'C', text: '80' },
      { id: 'D', text: '104' }
    ],
    correctAnswer: 'B',
    explanation: 'Elapsed time = 48 minutes. Rate = (5000 − 1400)/48 = 3600/48 = 75. Trap D divides only 5000 by 48.',
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
      { id: 'A', text: '$w = 12h + 0.75$' },
      { id: 'B', text: '$w = 0.75h + 12$' },
      { id: 'C', text: '$w = 12.75h$' },
      { id: 'D', text: '$w = h + 12.75$' }
    ],
    correctAnswer: 'B',
    explanation: 'Rate (slope) = 0.75, initial amount (intercept) = 12. Trap A swaps slope and intercept.',
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
      { id: 'A', text: '$C = 25m + 40$' },
      { id: 'B', text: '$C = 40m + 25$' },
      { id: 'C', text: '$C = 65m$' },
      { id: 'D', text: '$C = 40m - 25$' }
    ],
    correctAnswer: 'B',
    explanation: 'Monthly rate = 40 (slope), one-time fee = 25 (intercept). Trap A reverses the two values.',
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
      { id: 'A', text: '$y = 9x - 2$' },
      { id: 'B', text: '$y = -2x + 9$' },
      { id: 'C', text: '$y = 2x + 9$' },
      { id: 'D', text: '$y = -2x - 9$' }
    ],
    correctAnswer: 'B',
    explanation: 'Slope-intercept form y = mx + b with m = −2, b = 9. Trap A puts the intercept as the slope.',
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
      { id: 'A', text: 'Total sessions needed' },
      { id: 'B', text: 'Pages read per session' },
      { id: 'C', text: 'Starting page count' },
      { id: 'D', text: 'Final page count' }
    ],
    correctAnswer: 'B',
    explanation: 'The slope −3 means 3 pages are subtracted per session. Trap C confuses slope with the y-intercept 210.',
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
    question: 'Rewrite $4x - 2y = 10$ in slope-intercept form. What are the slope and $y$-intercept?',
    choices: [
      { id: 'A', text: 'slope $= 2$, $y$-intercept $= -5$' },
      { id: 'B', text: 'slope $= -2$, $y$-intercept $= 5$' },
      { id: 'C', text: 'slope $= 4$, $y$-intercept $= -10$' },
      { id: 'D', text: 'slope $= 2$, $y$-intercept $= 5$' }
    ],
    correctAnswer: 'A',
    explanation: '$-2y = -4x + 10 \\Rightarrow y = 2x - 5$. Slope = 2, intercept = −5. Trap D flips the sign of the intercept.',
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
      { id: 'A', text: '2:20 PM' },
      { id: 'B', text: '3:00 PM' },
      { id: 'C', text: '3:20 PM' },
      { id: 'D', text: '4:00 PM' }
    ],
    correctAnswer: 'C',
    explanation: 'Drain rate = (480 − 210)/3 = 90 gal/hr. From 1 PM, time to empty = 210/90 = 7/3 hr = 2 hr 20 min → 3:20 PM. Trap B rounds to a whole hour.',
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
      { id: 'A', text: 'Between hour 6 and 7' },
      { id: 'B', text: 'Between hour 7 and 8' },
      { id: 'C', text: 'Exactly hour 6.5' },
      { id: 'D', text: 'Exactly hour 7.5' }
    ],
    correctAnswer: 'C',
    explanation: 'Rate = (1320 − 120)/10 = 120/hr. Solve 120t + 120 = 900 → t = 780/120 = 6.5. Trap A gives a range that does not pinpoint the answer.',
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
      { id: 'B', text: '$2c + 3(85 - c) = 210$' },
      { id: 'C', text: '$3c + 2c = 210$' },
      { id: 'D', text: '$5c = 210$' }
    ],
    correctAnswer: 'A',
    explanation: 'Revenue = 3c + 2(85 − c). Muffins sold = 85 − c. Trap B swaps the prices for cupcakes and muffins.',
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
      { id: 'B', text: '$0.10t - 35 = 52$' },
      { id: 'C', text: '$35t + 0.10 = 52$' },
      { id: 'D', text: '$35.10t = 52$' }
    ],
    correctAnswer: 'A',
    explanation: 'Fixed cost 35 plus 0.10 per text equals total 52. Trap C treats 35 as the per-text rate.',
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
      { id: 'A', text: '$3.0$' },
      { id: 'B', text: '$3.4$' },
      { id: 'C', text: '$4.0$' },
      { id: 'D', text: '$5.0$' }
    ],
    correctAnswer: 'B',
    explanation: '4500 + 350m = 6200 − 150m → 500m = 1700 → m = 3.4. Trap A only uses the gain of 350.',
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
      { id: 'B', text: '15' },
      { id: 'C', text: '3' },
      { id: 'D', text: '18' }
    ],
    correctAnswer: 'A',
    explanation: '54 + 18m = 270 → 18m = 216 → m = 12. Trap B divides 270 by 18 without subtracting pages already printed.',
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
      { id: 'A', text: '44' },
      { id: 'B', text: '46' },
      { id: 'C', text: '47' },
      { id: 'D', text: '55' }
    ],
    correctAnswer: 'B',
    explanation: 'Weight used = 80 lb. Remaining = 420 lb. 420 ÷ 9 = 46.67, so at most 46. Trap C rounds up instead of down.',
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
      { id: 'A', text: '2' },
      { id: 'B', text: '2.5' },
      { id: 'C', text: '3' },
      { id: 'D', text: '5' }
    ],
    correctAnswer: 'B',
    explanation: '50 + 35h = 55h → 50 = 20h → h = 2.5. Trap D divides 50 by 10 instead of 20.',
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
      { id: 'B', text: '$h = 5w + 3$' },
      { id: 'C', text: '$h = 3w + 8$' },
      { id: 'D', text: '$h = 6w + 2$' }
    ],
    correctAnswer: 'A',
    explanation: 'Slope = (14 − 8)/(3 − 1) = 3. Then 8 = 3(1) + b → b = 5. Trap C uses the first height directly as the intercept.',
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
      { id: 'B', text: '$T = 6h + 58$' },
      { id: 'C', text: '$T = 3h + 64$' },
      { id: 'D', text: '$T = 58h + 3$' }
    ],
    correctAnswer: 'A',
    explanation: 'Slope = (64 − 58)/(2 − 0) = 3 per hour, intercept = 58. Trap B uses the total 6-degree change as the hourly slope.',
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
      { id: 'A', text: '200' },
      { id: 'B', text: '220' },
      { id: 'C', text: '160' },
      { id: 'D', text: '280' }
    ],
    correctAnswer: 'B',
    explanation: 'Slope = (520 − 340)/(5 − 2) = 60. Then 340 = 60(2) + b → b = 220. Trap C subtracts 180 from 340 incorrectly.',
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
      { id: 'B', text: '$f(x) = 3x + 7$' },
      { id: 'C', text: '$f(x) = -3x - 7$' },
      { id: 'D', text: '$f(x) = -3x + 4$' }
    ],
    correctAnswer: 'A',
    explanation: 'Slope = (4 − 13)/(1 − (−2)) = −9/3 = −3. Then 4 = −3(1) + b → b = 7. Trap D uses the y-value at x = 1 as the intercept.',
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
    question: 'If $f(x) = 4x - 7$, what is $f(5)$?',
    choices: [
      { id: 'A', text: '13' },
      { id: 'B', text: '27' },
      { id: 'C', text: '$-3$' },
      { id: 'D', text: '20' }
    ],
    correctAnswer: 'A',
    explanation: 'f(5) = 4(5) − 7 = 20 − 7 = 13. Trap D forgets to subtract 7.',
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
    question: 'If $g(x) = -2x + 15$, what is $g(-3)$?',
    correctAnswer: '21',
    explanation: 'g(−3) = −2(−3) + 15 = 6 + 15 = 21. Common error: computing −2(−3) as −6 instead of +6.',
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
      { id: 'A', text: '8' },
      { id: 'B', text: '10' },
      { id: 'C', text: '11.2' },
      { id: 'D', text: '12.4' }
    ],
    correctAnswer: 'B',
    explanation: '2.50m + 3.00 = 28.00 → 2.50m = 25.00 → m = 10. Trap C divides 28 by 2.50 without subtracting the base fare.',
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
    question: 'If $f(x) = x^2 - 4x + 7$, what is $f(3)$?',
    correctAnswer: '4',
    explanation: 'f(3) = 9 − 12 + 7 = 4. Common error: forgetting to square before subtracting.',
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
    question: 'If $f(x) = 3x - 7$ and $f(a) = f(2a - 5)$, what is $a$?',
    choices: [
      { id: 'A', text: '3' },
      { id: 'B', text: '5' },
      { id: 'C', text: '7' },
      { id: 'D', text: '10' }
    ],
    correctAnswer: 'B',
    explanation: 'Since f is one-to-one (linear with nonzero slope), f(a) = f(2a − 5) implies a = 2a − 5, so a = 5. Trap A incorrectly sets 3a − 7 = 2a − 5.',
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
      { id: 'B', text: '$-\\frac{2}{3}$' },
      { id: 'C', text: '$\\frac{3}{2}$' },
      { id: 'D', text: '$-\\frac{3}{2}$' }
    ],
    correctAnswer: 'A',
    explanation: 'Parallel lines share the same slope, 2/3. Trap D gives the perpendicular slope.',
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
      { id: 'A', text: '$2$' },
      { id: 'B', text: '$-2$' },
      { id: 'C', text: '$\\frac{1}{2}$' },
      { id: 'D', text: '$-\\frac{1}{2}$' }
    ],
    correctAnswer: 'B',
    explanation: 'Slope = (12 − 4)/(−3 − 1) = 8/(−4) = −2. Parallel slope is also −2. Trap C gives the perpendicular slope.',
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
    explanation: 'Rearrange: −4y = −6x + 20 → y = (3/2)x − 5. Slope = 3/2 = 1.5.',
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
      { id: 'B', text: '$y = -5x - 9$' },
      { id: 'C', text: '$y = \\frac{1}{5}x + \\frac{3}{5}$' },
      { id: 'D', text: '$y = 5x - 9$' }
    ],
    correctAnswer: 'A',
    explanation: 'Parallel slope = −5. Through (2, 1): 1 = −5(2) + b → b = 11. Trap D uses slope +5.',
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
      { id: 'B', text: '$y = -\\frac{4}{3}x + 7$' },
      { id: 'C', text: '$y = \\frac{3}{4}x - 5$' },
      { id: 'D', text: '$y = \\frac{4}{3}x + 7$' }
    ],
    correctAnswer: 'A',
    explanation: 'Road: y = (3/4)x − 5, slope 3/4. Parallel through (0, 7): y = (3/4)x + 7. Trap B uses the negative reciprocal.',
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
      { id: 'B', text: '$y = 2x - 1$' },
      { id: 'C', text: '$y = -2x + 1$' },
      { id: 'D', text: '$y = \\frac{1}{2}x - 1$' }
    ],
    correctAnswer: 'A',
    explanation: 'Slope of ℓ = (12 − 4)/(−3 − 1) = −2. Parallel line: y = −2x − 1. Trap D uses the reciprocal of the slope.',
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
      { id: 'A', text: '$4$' },
      { id: 'B', text: '$-4$' },
      { id: 'C', text: '$\\frac{1}{4}$' },
      { id: 'D', text: '$-\\frac{1}{4}$' }
    ],
    correctAnswer: 'D',
    explanation: 'Perpendicular slope = negative reciprocal = −1/4. Trap B negates without taking the reciprocal.',
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
      { id: 'A', text: '$-2$' },
      { id: 'B', text: '$2$' },
      { id: 'C', text: '$\\frac{1}{2}$' },
      { id: 'D', text: '$-\\frac{1}{2}$' }
    ],
    correctAnswer: 'C',
    explanation: 'Slope of m = (−3 − 5)/(3 − (−1)) = −8/4 = −2. Perpendicular = 1/2. Trap B only negates without reciprocal.',
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
    explanation: 'Perpendicular slope = −8/5 = −1.6.',
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
      { id: 'B', text: '$y = \\frac{5}{3}x - 11$' },
      { id: 'C', text: '$y = -\\frac{3}{5}x + \\frac{13}{5}$' },
      { id: 'D', text: '$y = -\\frac{5}{3}x - 11$' }
    ],
    correctAnswer: 'A',
    explanation: 'Perp slope = −5/3. Through (6, −1): −1 = −(5/3)(6) + b → −1 = −10 + b → b = 9. Trap C uses the negative of the original slope instead of the negative reciprocal.',
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
      { id: 'B', text: '$y = -\\frac{1}{3}x - \\frac{2}{3}$' },
      { id: 'C', text: '$y = 3x + 10$' },
      { id: 'D', text: '$y = -3x + 10$' }
    ],
    correctAnswer: 'A',
    explanation: 'Original: y = −(1/3)x + 3, slope −1/3. Perp slope = 3. Through (4, −2): −2 = 3(4) + b → b = −14. Trap D uses −3 as the slope.',
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
    explanation: 'Perp slope = −7/4. Through (4, 2): 2 = −(7/4)(4) + b → 2 = −7 + b → b = 9.',
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
      { id: 'A', text: 'Exactly one' },
      { id: 'B', text: 'Exactly two' },
      { id: 'C', text: 'Infinitely many' },
      { id: 'D', text: 'No solution' }
    ],
    correctAnswer: 'D',
    explanation: 'Same slope (2) but different intercepts → parallel lines, no intersection. Trap C requires identical equations.',
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
      { id: 'A', text: 'No solution' },
      { id: 'B', text: 'Exactly one' },
      { id: 'C', text: 'Exactly two' },
      { id: 'D', text: 'Infinitely many' }
    ],
    correctAnswer: 'B',
    explanation: 'Slopes 3 and −1 are different, so the lines intersect exactly once. Trap D would require identical lines.',
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
      { id: 'B', text: '12' },
      { id: 'C', text: '3' },
      { id: 'D', text: '36' }
    ],
    correctAnswer: 'A',
    explanation: 'Divide the first by 3: 2x − 3y = 4. For identical equations, k = 4. Trap B uses the original right-hand side.',
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
      { id: 'A', text: '$a = 4$, $b = 24$' },
      { id: 'B', text: '$a = 4$, $b = 20$' },
      { id: 'C', text: '$a = 8$, $b = 24$' },
      { id: 'D', text: '$a = 4$, $b \\neq 24$' }
    ],
    correctAnswer: 'D',
    explanation: 'Multiply first by 2: 6x + 2ay = 24. For parallel (no solution): 2a = 8 → a = 4, and b ≠ 24. Trap A makes them identical (infinite solutions).',
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
      { id: 'B', text: '$t + p = 74$, $4t + 6p = 15$' },
      { id: 'C', text: '$t + p = 15$, $6t + 4p = 74$' },
      { id: 'D', text: '$4t + 6p = 15$, $t + p = 74$' }
    ],
    correctAnswer: 'A',
    explanation: 'Count: t + p = 15. Cost: 4t + 6p = 74. Trap C assigns the wrong price to each seed type.',
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
      { id: 'B', text: '$a + c = 2210$, $12a + 7c = 230$' },
      { id: 'C', text: '$12a + 7c = 230$, $a + c = 2210$' },
      { id: 'D', text: '$a + c = 230$, $7a + 12c = 2210$' }
    ],
    correctAnswer: 'A',
    explanation: 'Count: a + c = 230. Revenue: 12a + 7c = 2210. Trap D reverses which ticket costs $12.',
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
      { id: 'B', text: '$x + y = 60$, $40x + 70y = 52$' },
      { id: 'C', text: '$x + y = 52$, $0.40x + 0.70y = 60$' },
      { id: 'D', text: '$x + y = 60$, $0.40x + 0.70y = 52$' }
    ],
    correctAnswer: 'A',
    explanation: 'Volume: x + y = 60. Acid: 0.40x + 0.70y = 0.52 × 60 = 31.2. Trap D forgets to compute 0.52 × 60.',
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
      { id: 'B', text: '$x + y = 200$, $5x + 8y = 30$' },
      { id: 'C', text: '$x + y = 30$, $8x + 5y = 200$' },
      { id: 'D', text: '$5x + 8y = 30$, $x + y = 200$' }
    ],
    correctAnswer: 'A',
    explanation: 'Weight: x + y = 30. Cost: 5x + 8y = 200. Trap C swaps the per-pound costs.',
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
      { id: 'A', text: '2' },
      { id: 'B', text: '3' },
      { id: 'C', text: '5' },
      { id: 'D', text: '8' }
    ],
    correctAnswer: 'B',
    explanation: 'Substitute: 2x + (3x − 1) = 14 → 5x − 1 = 14 → 5x = 15 → x = 3. Trap A guesses without solving.',
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
      { id: 'A', text: '3' },
      { id: 'B', text: '5' },
      { id: 'C', text: '7' },
      { id: 'D', text: '9' }
    ],
    correctAnswer: 'C',
    explanation: 'Set equal: x + 4 = 2x + 1 → x = 3. Then y = 3 + 4 = 7. Trap A gives x instead of y.',
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
    explanation: '3(2y + 5) − 4y = 25 → 6y + 15 − 4y = 25 → 2y = 10 → y = 5.',
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
      { id: 'B', text: '3' },
      { id: 'C', text: '4' },
      { id: 'D', text: '7' }
    ],
    correctAnswer: 'A',
    explanation: 't = 9 − b. Then 3(9 − b) + 5b = 31 → 27 + 2b = 31 → b = 2. Trap D gives tacos, not burritos.',
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
      { id: 'A', text: '4' },
      { id: 'B', text: '6' },
      { id: 'C', text: '8' },
      { id: 'D', text: '10' }
    ],
    correctAnswer: 'C',
    explanation: '3x − 2(½x + 3) = 10 → 3x − x − 6 = 10 → 2x = 16 → x = 8. Trap A forgets to distribute the −2.',
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
    explanation: 'Substitute: x + 2(3x + 1) = 23 → 7x + 2 = 23 → 7x = 21 → x = 3, y = 10. So x + y = 13. Common trap: forgetting to distribute the 2.',
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
      { id: 'A', text: '3' },
      { id: 'B', text: '5' },
      { id: 'C', text: '7' },
      { id: 'D', text: '14' }
    ],
    correctAnswer: 'C',
    explanation: 'Add: 2x = 14 → x = 7. Trap B takes the average of 10 and 4.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'elimination-solve',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-055',
    domain: 'algebra',
    skills: ['elimination-method'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'Solve:\n$x + y = 13$\n$x - y = 5$\nWhat is $y$?',
    correctAnswer: '4',
    explanation: 'Add: 2x = 18 → x = 9. Then 9 + y = 13 → y = 4.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'elimination-solve',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  },
  {
    id: 'bank-alg-056',
    domain: 'algebra',
    skills: ['elimination-method'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Solve:\n$5x + 3y = 33$\n$2x + 3y = 18$\nWhat is $x$?',
    choices: [
      { id: 'A', text: '3' },
      { id: 'B', text: '5' },
      { id: 'C', text: '6' },
      { id: 'D', text: '15' }
    ],
    correctAnswer: 'B',
    explanation: 'Subtract eq 2 from eq 1: 3x = 15 → x = 5. Trap D gives the raw difference 15 without dividing by the coefficient.',
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
      { id: 'A', text: '3' },
      { id: 'B', text: '5' },
      { id: 'C', text: '7' },
      { id: 'D', text: '8' }
    ],
    correctAnswer: 'B',
    explanation: 'Subtract second from first: 8y = 40 → y = 5. Trap A substitutes incorrectly.',
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
      { id: 'A', text: '5' },
      { id: 'B', text: '6' },
      { id: 'C', text: '7' },
      { id: 'D', text: '8' }
    ],
    correctAnswer: 'C',
    explanation: 'Multiply second by 2: 10x − 4y = 28. Add to first: 13x = 52 → x = 4. Then 12 + 4y = 24 → y = 3. So x + y = 7. Trap A gives x − y instead.',
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
      { id: 'A', text: '15' },
      { id: 'B', text: '20' },
      { id: 'C', text: '25' },
      { id: 'D', text: '30' }
    ],
    correctAnswer: 'B',
    explanation: 'g + t = 50 and 2g + 7t = 200. Substitute g = 50 − t: 100 − 2t + 7t = 200 → 5t = 100 → t = 20. Trap D gives goldfish count.',
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
      { id: 'A', text: '$x = 3$ only' },
      { id: 'B', text: '$y = 5$ only' },
      { id: 'C', text: '$(3, 5)$' },
      { id: 'D', text: 'No solution' }
    ],
    correctAnswer: 'C',
    explanation: 'The intersection point is the solution, an ordered pair. Traps A and B give only one coordinate.',
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
      { id: 'A', text: 'One solution' },
      { id: 'B', text: 'Infinitely many solutions' },
      { id: 'C', text: 'No solution' },
      { id: 'D', text: 'Two solutions' }
    ],
    correctAnswer: 'C',
    explanation: 'Parallel (non-intersecting) lines mean the system is inconsistent. Trap B confuses this with overlapping lines.',
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
      { id: 'B', text: '$(3, 1)$' },
      { id: 'C', text: '$(1, 5)$' },
      { id: 'D', text: '$(4, 5)$' }
    ],
    correctAnswer: 'A',
    explanation: 'x + 1 = −2x + 7 → 3x = 6 → x = 2, y = 3. Trap C plugs x = 1 into only the second equation.',
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
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: '2' },
      { id: 'D', text: '3' }
    ],
    correctAnswer: 'C',
    explanation: '|x − 2| = 4 → x = 6 or x = −2. Two intersection points. Trap B considers only x − 2 = 4.',
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
      { id: 'A', text: '$y = 3x + 1$ and $y = 3x + 5$' },
      { id: 'B', text: '$y = 3x + 1$ and $y = -3x + 1$' },
      { id: 'C', text: '$y = 3x + 1$ and $6x - 2y = -2$' },
      { id: 'D', text: '$y = 3x + 1$ and $y = x + 1$' }
    ],
    correctAnswer: 'C',
    explanation: 'Rewrite C: −2y = −6x − 2 → y = 3x + 1, identical to the first equation. Trap A has same slope but different intercepts (no solution).',
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
      { id: 'A', text: '2' },
      { id: 'B', text: '3' },
      { id: 'C', text: '4' },
      { id: 'D', text: '5' }
    ],
    correctAnswer: 'B',
    explanation: 'Simplify eq 2: x + 2y = 5. Multiply by 3: 3x + 6y = 15. So a = 3. Trap C copies the coefficient 4 from eq 2.',
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
      { id: 'B', text: '$12$' },
      { id: 'C', text: '$-6$' },
      { id: 'D', text: '$6$' }
    ],
    correctAnswer: 'A',
    explanation: 'Multiply first by −4: −2x + 4ky = −12. Match with −2x + 12y = c: 4k = 12 → k = 3, c = −12. Trap B drops the negative.',
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
    explanation: 'Multiply first by 3: 6x + 15y = 60. For identical equations, k = 60.',
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
    question: 'If $f(x) = 3x + 8$, what is $f(0)$?',
    choices: [
      { id: 'A', text: '0' },
      { id: 'B', text: '3' },
      { id: 'C', text: '8' },
      { id: 'D', text: '11' }
    ],
    correctAnswer: 'C',
    explanation: 'f(0) = 3(0) + 8 = 8. Trap A assumes f(0) is always 0.',
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
    question: 'If $h(t) = -5t + 40$, what value of $t$ makes $h(t) = 0$?',
    correctAnswer: '8',
    explanation: '0 = −5t + 40 → 5t = 40 → t = 8. Common mistake: dividing 40 by −5 to get −8.',
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
      { id: 'A', text: '140' },
      { id: 'B', text: '150' },
      { id: 'C', text: '160' },
      { id: 'D', text: '240' }
    ],
    correctAnswer: 'C',
    explanation: '15n − 2400 = 0 → n = 160. Trap D divides 2400 by 10 instead of 15.',
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
    question: 'If $f(x) = 7 - 2x$ and $f(k) = -3$, what is $k$?',
    choices: [
      { id: 'A', text: '2' },
      { id: 'B', text: '5' },
      { id: 'C', text: '$-5$' },
      { id: 'D', text: '10' }
    ],
    correctAnswer: 'B',
    explanation: '7 − 2k = −3 → −2k = −10 → k = 5. Trap A solves 7 − 2k = 3 instead of −3.',
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
      { id: 'A', text: '4' },
      { id: 'B', text: '6' },
      { id: 'C', text: '12' },
      { id: 'D', text: 'Cannot be determined' }
    ],
    correctAnswer: 'B',
    explanation: 'Let f(x) = mx + b. Then f(1) − f(−1) = (m + b) − (−m + b) = 2m = 12 → m = 6. Trap C forgets to divide by 2.',
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
      { id: 'A', text: 'All real numbers' },
      { id: 'B', text: 'All real numbers except $x = 4$' },
      { id: 'C', text: 'All real numbers except $x = -4$' },
      { id: 'D', text: '$x > 4$' }
    ],
    correctAnswer: 'B',
    explanation: 'Denominator x − 4 = 0 when x = 4, which must be excluded. Trap C flips the sign.',
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
      { id: 'A', text: '$x = 0$' },
      { id: 'B', text: '$x = 5$' },
      { id: 'C', text: '$x = 7$' },
      { id: 'D', text: '$x = -7$' }
    ],
    correctAnswer: 'D',
    explanation: 'x + 7 = 0 when x = −7. Trap C uses positive 7.',
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
      { id: 'A', text: 'All reals except $x = 9$' },
      { id: 'B', text: 'All reals except $x = 3$' },
      { id: 'C', text: 'All reals except $x = 3$ and $x = -3$' },
      { id: 'D', text: 'All reals except $x = -2$' }
    ],
    correctAnswer: 'C',
    explanation: 'Factor: (x − 3)(x + 3) = 0 → x ≠ ±3. Trap B excludes only the positive root.',
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
      { id: 'B', text: '$x > -5$' },
      { id: 'C', text: '$x \\geq -5$' },
      { id: 'D', text: '$x > 2$' }
    ],
    correctAnswer: 'A',
    explanation: 'Radicand: x + 5 ≥ 0 → x ≥ −5. Denominator: x ≠ 2. Both must hold. Trap C ignores the denominator.',
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
    question: 'If $f(x) = 2x + 1$ and $g(x) = x^2 - 3$, what is $f(g(2))$?',
    choices: [
      { id: 'A', text: '1' },
      { id: 'B', text: '3' },
      { id: 'C', text: '7' },
      { id: 'D', text: '9' }
    ],
    correctAnswer: 'B',
    explanation: 'g(2) = 4 − 3 = 1. f(1) = 2 + 1 = 3. Trap D computes f(2) then g of that.',
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
    question: 'If $f(x) = x + 6$ and $g(x) = 2x$, what is $g(f(5))$?',
    correctAnswer: '22',
    explanation: 'f(5) = 11. g(11) = 22. Common error: computing f(g(5)) = f(10) = 16 instead.',
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
    question: 'If $f(x) = x + 4$ and $g(x) = 3x - 2$, which expression equals $g(f(x))$?',
    choices: [
      { id: 'A', text: '$3x + 10$' },
      { id: 'B', text: '$3x + 2$' },
      { id: 'C', text: '$3x + 14$' },
      { id: 'D', text: '$3x + 6$' }
    ],
    correctAnswer: 'A',
    explanation: 'g(f(x)) = g(x + 4) = 3(x + 4) − 2 = 3x + 12 − 2 = 3x + 10. Trap B fails to distribute 3 into +4.',
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
    explanation: 'g(17) = 20/5 = 4. f(4) = 20 − 3 = 17. These functions are inverses, so f(g(x)) = x.',
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
      { id: 'A', text: '$f(x) + 3$' },
      { id: 'B', text: '$f(x) - 3$' },
      { id: 'C', text: '$f(x + 3)$' },
      { id: 'D', text: '$f(x - 3)$' }
    ],
    correctAnswer: 'D',
    explanation: 'Right shift by 3 → f(x − 3). Trap C shifts left, not right.',
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
      { id: 'A', text: '$f(-x)$' },
      { id: 'B', text: '$-f(x)$' },
      { id: 'C', text: '$f(x) - 1$' },
      { id: 'D', text: '$|f(x)|$' }
    ],
    correctAnswer: 'B',
    explanation: 'Negating the output reflects over the x-axis: −f(x). Trap A reflects over the y-axis.',
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
      { id: 'B', text: '$(-5, 3)$' },
      { id: 'C', text: '$(5, -3)$' },
      { id: 'D', text: '$(-5, -3)$' }
    ],
    correctAnswer: 'A',
    explanation: 'Shift right 5 and up 3 moves the vertex to (5, 3). Trap B gets the horizontal direction wrong.',
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
    question: 'If $g(x) = f(x) + 5$ and $f(x) = 2x - 1$, what is the $y$-intercept of $g$?',
    choices: [
      { id: 'A', text: '4' },
      { id: 'B', text: '5' },
      { id: 'C', text: '6' },
      { id: 'D', text: '$-1$' }
    ],
    correctAnswer: 'A',
    explanation: 'g(x) = 2x − 1 + 5 = 2x + 4. y-intercept = 4. Trap B adds 5 without considering f\'s intercept of −1.',
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
      { id: 'B', text: 'Left 1, vertical stretch by 2, up 6' },
      { id: 'C', text: 'Right 1, vertical compress by 2, reflect over $y$-axis, up 6' },
      { id: 'D', text: 'Right 1, vertical stretch by 2, down 6' }
    ],
    correctAnswer: 'A',
    explanation: 'x − 1 shifts right, factor 2 stretches vertically, negative reflects over x-axis, +6 shifts up. Trap B omits the reflection.',
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
      { id: 'B', text: '$y = 5x$' },
      { id: 'C', text: '$y = 20x$' },
      { id: 'D', text: '$y = x + 15$' }
    ],
    correctAnswer: 'A',
    explanation: 'Through origin so b = 0. Slope = 20/5 = 4. Trap D uses a nonzero intercept.',
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
      { id: 'B', text: '$f(x) = 2x - 2$' },
      { id: 'C', text: '$f(x) = 3x + 2$' },
      { id: 'D', text: '$f(x) = 4x - 2$' }
    ],
    correctAnswer: 'A',
    explanation: 'Slope = (10 − (−2))/(4 − 0) = 12/4 = 3. Intercept = −2. Trap B miscalculates the slope.',
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
    explanation: 'Slope = (26 − 10)/(7 − 3) = 4. f(x) = 4x + b, 10 = 12 + b → b = −2. f(10) = 40 − 2 = 38.',
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
      { id: 'A', text: '1' },
      { id: 'B', text: '3' },
      { id: 'C', text: '5' },
      { id: 'D', text: '7' }
    ],
    correctAnswer: 'B',
    explanation: 'Slope = (23 − 11)/(5 − 2) = 4. Then 11 = 4(2) + b → b = 3. f(0) = 3. Trap A subtracts the slope from the intercept.',
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
      { id: 'A', text: '120' },
      { id: 'B', text: '140' },
      { id: 'C', text: '180' },
      { id: 'D', text: '200' }
    ],
    correctAnswer: 'B',
    explanation: 'Slope = (440 − 260)/(10 − 4) = 30/month. At month 0: 260 − 30(4) = 260 − 120 = 140. Trap A subtracts one extra period.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'linear-extrapolation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28'
  }
];
