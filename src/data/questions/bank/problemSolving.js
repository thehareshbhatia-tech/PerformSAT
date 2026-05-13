export const problemSolvingBank = [
  // ── percent-decimal-conversion (easy) ──────────────────────────
  {
    id: 'bank-ps-001',
    domain: 'problem-solving',
    skills: ['percent-decimal-conversion'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A local bookstore advertises that 0.045 of its inventory consists of rare first editions. What percent of the inventory is rare first editions?',
    choices: [
      // distractor: reports the decimal value as the percent
      { id: 'A', text: '0.045%' },
      // distractor: moves the decimal one place instead of two
      { id: 'B', text: '0.45%' },
      { id: 'C', text: '4.5%' },
      // distractor: moves the decimal three places (overshoots)
      { id: 'D', text: '45%' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Decimal to Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Multiply by $100$: $0.045 \\times 100 = 4.5\\%$.\n\n**The Full Solution:**\nTo convert a decimal to a percent, multiply by $100$ (equivalently, move the decimal point two places to the right):\n$0.045 \\to 4.5\\%$.\n\nVerification: $4.5\\% \\div 100 = 0.045$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — reports the decimal value unchanged with a $\\%$ sign.\n* Choice B: "off-by-one" — moves the decimal only one place ($0.045 \\to 0.45$).\n* Choice D: "off-by-one" — moves the decimal three places ($0.045 \\to 45$).\n\n**Test Day Takeaway:** Decimal $\\to$ percent: shift two places RIGHT. Percent $\\to$ decimal: shift two places LEFT. The number of zeros after the decimal in the original matters — $0.045$ has TWO digits after the point before the $45$ pair starts, so it must produce a small-percent value like $4.5\\%$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'decimal-to-percent',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-002',
    domain: 'problem-solving',
    skills: ['percent-decimal-conversion'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A sports drink label states it contains 6.25% natural fruit juice. What is 6.25% expressed as a decimal?',
    choices: [
      // distractor: reports the percent value as the decimal
      { id: 'A', text: '6.25' },
      // distractor: moves the decimal one place instead of two
      { id: 'B', text: '0.625' },
      { id: 'C', text: '0.0625' },
      // distractor: moves the decimal three places (overshoots)
      { id: 'D', text: '0.00625' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Percent to Decimal**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Divide by $100$: $6.25 \\div 100 = 0.0625$.\n\n**The Full Solution:**\nTo convert a percent to a decimal, divide by $100$ (equivalently, move the decimal point two places to the LEFT):\n$6.25\\% \\to 0.0625$.\n\nVerification: $0.0625 \\times 100 = 6.25\\%$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — reports the value unchanged without dividing.\n* Choice B: "off-by-one" — moves the decimal only one place ($6.25 \\to 0.625$).\n* Choice D: "off-by-one" — moves the decimal three places ($6.25 \\to 0.00625$).\n\n**Test Day Takeaway:** Percent $\\to$ decimal: shift LEFT two places. Always sanity-check by reversing the conversion.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'percent-to-decimal',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-003',
    domain: 'problem-solving',
    skills: ['percent-decimal-conversion'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'A warehouse reports that 0.128 of its packages were returned last month. Express this value as a percent.',
    correctAnswer: '12.8',
    explanation: '**SAT Pattern: Decimal to Percent**\n\n**The correct answer is $12.8$.**\n\n**The Fast Way (~5s):** $0.128 \\times 100 = 12.8\\%$.\n\n**The Full Solution:**\nTo convert a decimal to a percent, multiply by $100$ (move the decimal point two places to the right):\n$0.128 \\to 12.8\\%$.\n\nVerification: $12.8\\% \\div 100 = 0.128$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $1.28$ (only one shift).\n* Reporting $128$ (three shifts).\n* Including the $\\%$ sign in a fill-in answer when not requested.\n\n**Test Day Takeaway:** $0.128 = 12.8\\%$. Decimal moves RIGHT by two places to become a percent.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'decimal-to-percent',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-004',
    domain: 'problem-solving',
    skills: ['percent-decimal-conversion'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A chemist measures that a solution is $0.0034$ parts active ingredient by mass. A label requires this to be printed as a percent. Which label is correct?',
    choices: [
      // distractor: moves the decimal only one place
      { id: 'A', text: '0.034%' },
      { id: 'B', text: '0.34%' },
      // distractor: moves the decimal three places
      { id: 'C', text: '3.4%' },
      // distractor: moves the decimal four places
      { id: 'D', text: '34%' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Small-Value Decimal to Percent**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Move the decimal two places right: $0.0034 \\to 0.34$. So $0.0034 = 0.34\\%$.\n\n**The Full Solution:**\nConvert decimal to percent by multiplying by $100$:\n$0.0034 \\times 100 = 0.34\\%$.\n\nVerification: $0.34\\% \\div 100 = 0.0034$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — moves the decimal only one place ($0.0034 \\to 0.034$).\n* Choice C: "off-by-one" — moves the decimal three places ($0.0034 \\to 3.4$).\n* Choice D: "off-by-one" — moves four places ($0.0034 \\to 34$).\n\n**Test Day Takeaway:** Count the zeros carefully when converting small decimals. $0.0034$ has three zeros total (including the one before the decimal), so the percent must remain less than $1\\%$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'decimal-to-percent',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── percent-of-value ───────────────────────────────────────────
  {
    id: 'bank-ps-005',
    domain: 'problem-solving',
    skills: ['percent-of-value'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A school has 840 students. If 35% of the students participate in at least one club, how many students participate in at least one club?',
    choices: [
      // distractor: subtracts 600 from 840 (uses 28.6% instead of 35%)
      { id: 'A', text: '240' },
      { id: 'B', text: '294' },
      // distractor: rounds 35% to 40% then multiplies (0.42 × 840 ≈ 350)
      { id: 'C', text: '350' },
      // distractor: gives the complement (students NOT in a club)
      { id: 'D', text: '546' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Percent of Total**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $840 \\times 0.35 = 294$.\n\n**The Full Solution:**\nFinding $35\\%$ of $840$:\n$840 \\times 0.35 = 294$ students.\n\nVerification: $35\\%$ of $840$ should be less than half ($420$) and more than a quarter ($210$). $294$ fits \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — uses $28.6\\%$ ($240/840$) instead of $35\\%$.\n* Choice C: "wrong base" — rounds $35\\%$ up to $40\\%$ before computing.\n* Choice D: "applies the inverse operation" — gives the complement, $65\\%$ of $840 = 546$ (students NOT in a club).\n\n**Test Day Takeaway:** "Percent of value" = (decimal form of percent) × value. Always read the question — sometimes the answer is the complement ($100\\% - p\\%$), so check which group the question is asking about.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'percent-of-total',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-006',
    domain: 'problem-solving',
    skills: ['percent-of-value'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'A laptop originally costs $\\$1{,}250$. A coupon gives 8% off. How many dollars is the discount?',
    correctAnswer: '100',
    explanation: '**SAT Pattern: Discount Amount**\n\n**The correct answer is $100$.**\n\n**The Fast Way (~5s):** $\\$1250 \\times 0.08 = \\$100$.\n\n**The Full Solution:**\nThe discount amount is $8\\%$ of the original price:\n$\\$1250 \\times 0.08 = \\$100$.\n\nVerification: the sale price would be $\\$1250 - \\$100 = \\$1150$, which is $92\\%$ of $\\$1250$. Check: $\\$1250 \\times 0.92 = \\$1150$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $1150$ (the sale price, not the discount).\n* Reporting $92$ (the percent that remains, not the dollar discount).\n* Using $0.8$ instead of $0.08$ (would give $\\$1000$).\n\n**Test Day Takeaway:** Discount amount $= $ percent $\\times $ original price. Sale price $= $ original $- $ discount. Always check which one the question asks for.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'percent-of-total',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-007',
    domain: 'problem-solving',
    skills: ['percent-of-value'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'In a survey of 1,200 residents, 18% said they bike to work at least three days a week. Of those who bike, 25% own more than one bicycle. How many surveyed residents bike to work at least three days a week and own more than one bicycle?',
    choices: [
      { id: 'A', text: '54' },
      // distractor: stops after the first step (18% of 1200)
      { id: 'B', text: '216' },
      // distractor: applies 25% to 1200 directly
      { id: 'C', text: '270' },
      // distractor: averages the two percent steps (21.5%)
      { id: 'D', text: '300' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Compound Percent Of**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $1200 \\times 0.18 \\times 0.25 = 216 \\times 0.25 = 54$.\n\n**The Full Solution:**\nStep 1: Bikers $= 1200 \\times 0.18 = 216$.\nStep 2: Of those, multi-bike owners $= 216 \\times 0.25 = 54$.\n\nVerification: net rate $= 18\\% \\times 25\\% = 4.5\\%$ of total; $1200 \\times 0.045 = 54$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — gives bikers ($216$) without applying the second filter.\n* Choice C: "wrong base" — applies $25\\%$ to the full $1200$ instead of to the $216$ bikers.\n* Choice D: "wrong formula" — averages the percent rates instead of multiplying.\n\n**Test Day Takeaway:** "Of those who...": the second percent applies to the FILTERED subgroup, not the original total. Always multiply the percents (decimal × decimal), don\'t add or average.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'compound-percent-of',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-008',
    domain: 'problem-solving',
    skills: ['percent-of-value'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A bakery produces 2,400 loaves of bread per week. If 12.5% are whole wheat and 60% of the whole wheat loaves are sold on the first day, how many whole wheat loaves remain after the first day?',
    choices: [
      { id: 'A', text: '120' },
      // distractor: gives the SOLD count instead of the remaining
      { id: 'B', text: '180' },
      // distractor: applies a different percent chain
      { id: 'C', text: '288' },
      // distractor: gives the whole-wheat total before any sales
      { id: 'D', text: '300' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Filter then Subtract**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Whole wheat $= 2400 \\times 0.125 = 300$. Remaining $= 300 \\times 0.40 = 120$ (since $40\\%$ are unsold).\n\n**The Full Solution:**\nStep 1: Whole wheat loaves $= 2400 \\times 0.125 = 300$.\nStep 2: Sold on day 1 $= 300 \\times 0.60 = 180$. Remaining $= 300 - 180 = 120$.\n\nAlternatively: remaining fraction $= 1 - 0.60 = 0.40$, so remaining $= 300 \\times 0.40 = 120$.\n\nVerification: $180$ sold + $120$ remaining $= 300$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — gives the SOLD count instead of the remaining.\n* Choice C: "wrong base" — mangles the percent chain.\n* Choice D: "stops one step early" — gives the total whole-wheat count, before any sales.\n\n**Test Day Takeaway:** When a problem asks for what REMAINS after a sale, you can either (a) compute sold then subtract, or (b) compute remaining directly using $1 - p$. Choose whichever is faster.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'compound-percent-of',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── percent-change ─────────────────────────────────────────────
  {
    id: 'bank-ps-009',
    domain: 'problem-solving',
    skills: ['percent-change'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A streaming service had 4,000 subscribers in January and 4,600 subscribers in February. What is the percent increase from January to February?',
    choices: [
      // distractor: 600/10000 instead of 600/4000
      { id: 'A', text: '6%' },
      // distractor: divides by the NEW value (4600) instead of original
      { id: 'B', text: '13%' },
      { id: 'C', text: '15%' },
      // distractor: moves the decimal one place (60% instead of 15%)
      { id: 'D', text: '60%' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Percent Change Basic**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $\\frac{4600 - 4000}{4000} \\times 100 = \\frac{600}{4000} \\times 100 = 15\\%$.\n\n**The Full Solution:**\nPercent change formula:\n$\\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100 = \\frac{4600 - 4000}{4000} \\times 100 = \\frac{600}{4000} \\times 100 = 15\\%$.\n\nVerification: $4000 \\times 1.15 = 4600$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — divides by $10000$ (random) instead of $4000$.\n* Choice B: "applies the inverse operation" — divides by the NEW value: $\\frac{600}{4600} \\approx 13\\%$.\n* Choice D: "off-by-one" — moves the decimal one place: $15\\% \\to 60\\%$ via $\\frac{600}{1000}$.\n\n**Test Day Takeaway:** Percent change ALWAYS divides by the OLD value, never the new one. "From" tells you the baseline.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'percent-change-basic',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-010',
    domain: 'problem-solving',
    skills: ['percent-change'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'A pair of running shoes was originally priced at $\\$80$. During a sale the price dropped to $\\$60$. What is the percent decrease? (Enter a whole number.)',
    correctAnswer: '25',
    explanation: '**SAT Pattern: Percent Decrease**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~10s):** Change $= 80 - 60 = 20$. Percent $= \\frac{20}{80} \\times 100 = 25\\%$.\n\n**The Full Solution:**\nPercent decrease formula:\n$\\frac{\\text{old} - \\text{new}}{\\text{old}} \\times 100 = \\frac{80 - 60}{80} \\times 100 = \\frac{20}{80} \\times 100 = 25\\%$.\n\nVerification: $80 \\times 0.75 = 60$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Dividing by $60$ (the new value) — gives $33.3\\%$.\n* Reporting $20$ (the change in dollars, not the percent).\n* Confusing percent decrease with percent OF the new value.\n\n**Test Day Takeaway:** Percent decrease uses the OLD value in the denominator. $25\\%$ off $\\$80$ is $\\$20$ off, leaving $\\$60$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'percent-change-basic',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  { id: 'bank-ps-011', domain: 'problem-solving', skills: ['percent-change'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A city park recorded $12{,}500$ visitors in June and $10{,}750$ visitors in July. What is the percent decrease in visitors from June to July?',
    choices: [{ id: 'A', text: '$14\\%$' }, { id: 'B', text: '$16.3\\%$' }, { id: 'C', text: '$17.5\\%$' }, { id: 'D', text: '$86\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Decrease $= 12{,}500 - 10{,}750 = 1{,}750$. Percent decrease $= 1{,}750 / 12{,}500 = 0.14 = 14\\%$.\n\n**The Full Solution:**\nPercent decrease $= \\dfrac{\\text{old} - \\text{new}}{\\text{old}} \\cdot 100\\%$.\nNumerator: $12{,}500 - 10{,}750 = 1{,}750$.\nDivide by the OLD value: $1{,}750 / 12{,}500 = 7/50 = 0.14$.\nConvert: $0.14 = 14\\%$.\n\nVerification: $12{,}500 \\cdot 0.86 = 10{,}750$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($14\\%$): correct.\n* Choice B ($16.3\\%$): divides by the NEW value instead of the old: $1{,}750 / 10{,}750 \\approx 0.163$. Classic percent-change base error.\n* Choice C ($17.5\\%$): drops a decimal place ($1{,}750 / 10{,}000$) by approximating the base.\n* Choice D ($86\\%$): reports the SURVIVAL ratio ($10{,}750 / 12{,}500 = 0.86$) — confuses 'percent decrease' with 'percent that remain'.\n\n**Test Day Takeaway:** Percent change ALWAYS uses the ORIGINAL (old) value as the base — that's the denominator. The numerator is the change (positive or negative). Don't confuse percent change with the ratio of new-to-old.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-change-basic', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  {
    id: 'bank-ps-012',
    domain: 'problem-solving',
    skills: ['percent-change'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'After a 20% discount, a jacket costs $\\$96$. What was the original price of the jacket?',
    choices: [
      // distractor: takes 20% off 96 instead of working backward
      { id: 'A', text: '$\\$76.80$' },
      // distractor: adds 20% to 96 ($96 + $19.20)
      { id: 'B', text: '$\\$115.20$' },
      // distractor: adds 20.83% (close to inverse of 20)
      { id: 'C', text: '$\\$116.00$' },
      { id: 'D', text: '$\\$120.00$' },
    ],
    correctAnswer: 'D',
    explanation: '**SAT Pattern: Reverse Percent Change**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** After $20\\%$ off, the price is $80\\%$ of original: $96 = 0.80x$, so $x = 120$.\n\n**The Full Solution:**\nLet $x$ be the original price. After a $20\\%$ discount, the sale price is $80\\%$ of $x$:\n$0.80x = 96$\n$x = \\frac{96}{0.80} = 120$.\n\nVerification: $\\$120 \\times 0.80 = \\$96$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — takes another $20\\%$ off $96$ instead of working backward.\n* Choice B: "wrong formula" — adds $20\\%$ of $96$ to $96$, not the right operation.\n* Choice C: "off-by-one" — close to D but arithmetic slip.\n\n**Test Day Takeaway:** For reverse percent change: set up $\\text{result} = (1 \\pm p) \\times \\text{original}$, then DIVIDE. Adding $20\\%$ back to a $20\\%$-discounted price does NOT return to the original — you need to divide by $0.80$, not multiply by $1.20$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'reverse-percent-change',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-013',
    domain: 'problem-solving',
    skills: ['percent-change'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A town\'s population grew by 30% from 2020 to 2023. If the 2023 population is 20,800, what was the population in 2020?',
    choices: [
      // distractor: subtracts 30% of 20800 from 20800
      { id: 'A', text: '14,560' },
      // distractor: arithmetic slip near correct
      { id: 'B', text: '15,600' },
      { id: 'C', text: '16,000' },
      // distractor: 20800 / 1.28 by accident
      { id: 'D', text: '16,240' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Reverse Growth**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $20800 = 1.30x$, so $x = \\frac{20800}{1.30} = 16000$.\n\n**The Full Solution:**\nLet $x$ be the 2020 population. A $30\\%$ increase means:\n$2023\\text{ pop} = 1.30 \\cdot 2020\\text{ pop}$\n$20800 = 1.30x$\n$x = \\frac{20800}{1.30} = 16000$.\n\nVerification: $16000 \\times 1.30 = 20800$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — subtracts $30\\%$ of $20800$ ($= 6240$) to get $14560$ instead of dividing by $1.30$.\n* Choice B: "off-by-one" — arithmetic slip producing $15600$.\n* Choice D: "wrong base" — divides by $1.28$ accidentally.\n\n**Test Day Takeaway:** $x$ grew by $30\\%$ means the NEW value is $1.30x$. To reverse: divide by $1.30$, NEVER subtract $30\\%$ of the new value. The operations are not symmetric.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'reverse-percent-change',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-014',
    domain: 'problem-solving',
    skills: ['percent-change'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'A company\'s revenue went from $\\$450{,}000$ in Q1 to $\\$576{,}000$ in Q2. What is the percent increase from Q1 to Q2, to the nearest whole percent?',
    correctAnswer: '28',
    explanation: '**SAT Pattern: Percent Increase from Two Values**\n\n**The correct answer is $28$.**\n\n**The Fast Way (~15s):** Change $= 576000 - 450000 = 126000$. $\\frac{126000}{450000} = \\frac{126}{450} = 0.28 = 28\\%$.\n\n**The Full Solution:**\nPercent increase formula:\n$\\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100 = \\frac{576000 - 450000}{450000} \\times 100$.\n$\\frac{126000}{450000} = 0.28$.\nPercent increase $= 28\\%$.\n\nVerification: $450000 \\times 1.28 = 576000$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Dividing by $576000$ (the new value) — gives $\\approx 21.9\\%$.\n* Reporting $126$ (the dollar change, not the percent).\n* Forgetting to multiply by $100$ — gives $0.28$.\n\n**Test Day Takeaway:** $\\frac{126}{450}$ simplifies to $\\frac{14}{50} = 0.28$. Look for shared factors (here, $9$). Speed comes from spotting common factors before reaching for a calculator.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'percent-change-basic',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── percent-word-problems ──────────────────────────────────────
  {
    id: 'bank-ps-015',
    domain: 'problem-solving',
    skills: ['percent-word-problems'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A pizza restaurant sold 250 pizzas on Saturday. If 40% were pepperoni, how many were NOT pepperoni?',
    choices: [
      // distractor: gives the pepperoni count
      { id: 'A', text: '100' },
      // distractor: half of 250 (50%)
      { id: 'B', text: '125' },
      { id: 'C', text: '150' },
      // distractor: 80% of 250 (incorrectly halves the complement)
      { id: 'D', text: '200' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Complement Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Not pepperoni $= 100\\% - 40\\% = 60\\%$. $250 \\times 0.60 = 150$.\n\n**The Full Solution:**\nIf $40\\%$ are pepperoni, then $60\\%$ are NOT pepperoni. Compute:\n$250 \\times 0.60 = 150$ pizzas.\n\nVerification: pepperoni count $= 250 \\times 0.40 = 100$. Total $= 100 + 150 = 250$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — gives the pepperoni count ($40\\%$ of $250$).\n* Choice B: "wrong base" — half of $250$ ($50\\%$).\n* Choice D: "wrong formula" — uses $80\\%$ as the complement.\n\n**Test Day Takeaway:** "NOT" questions: subtract the percent from $100\\%$, THEN multiply. Faster than computing the named group and subtracting.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'complement-percent',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-016',
    domain: 'problem-solving',
    skills: ['percent-word-problems'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A store marks up the wholesale price of a shirt by 60% and then offers a 25% employee discount on the retail price. If the wholesale price is $\\$30$, what does an employee pay?',
    choices: [
      // distractor: applies net 10% increase ($30 × 1.10)
      { id: 'A', text: '$\\$33.00$' },
      { id: 'B', text: '$\\$36.00$' },
      // distractor: averages markup and discount somehow
      { id: 'C', text: '$\\$39.00$' },
      // distractor: 60% - 25% = 35% net markup
      { id: 'D', text: '$\\$42.00$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Markup Then Discount**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Retail $= 30 \\times 1.60 = 48$. Employee $= 48 \\times 0.75 = 36$.\n\n**The Full Solution:**\nStep 1: Retail price after $60\\%$ markup: $30 \\times 1.60 = \\$48$.\nStep 2: Employee discount of $25\\%$ on the retail price: $48 \\times 0.75 = \\$36$.\n\nAlternatively, net multiplier: $1.60 \\times 0.75 = 1.20$, so employee pays $30 \\times 1.20 = \\$36$.\n\nVerification: $48 - 48 \\times 0.25 = 48 - 12 = 36$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — uses a net $10\\%$ ($30 \\times 1.10$).\n* Choice C: "wrong base" — averages the percent operations.\n* Choice D: "wrong formula" — uses net $35\\%$ ($60\\% - 25\\%$) applied to $\\$30$.\n\n**Test Day Takeaway:** Markups and discounts MULTIPLY (don\'t add). Successive percent changes: convert each to a multiplier ($1 + p$ for markup, $1 - p$ for discount) and multiply them.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'markup-discount-chain',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-017',
    domain: 'problem-solving',
    skills: ['percent-word-problems'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'In a class of 50 students, 70% passed the midterm. Of those who passed, 80% also passed the final. How many students passed both the midterm and the final?',
    choices: [
      // distractor: applies 80% to 30 (those who FAILED midterm)
      { id: 'A', text: '24' },
      { id: 'B', text: '28' },
      // distractor: stops after midterm
      { id: 'C', text: '35' },
      // distractor: applies 80% to 50 directly
      { id: 'D', text: '40' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Compound Filter**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $50 \\times 0.70 \\times 0.80 = 35 \\times 0.80 = 28$.\n\n**The Full Solution:**\nStep 1: Midterm passers $= 50 \\times 0.70 = 35$.\nStep 2: Of those, final passers $= 35 \\times 0.80 = 28$.\n\nVerification: net rate $= 0.70 \\times 0.80 = 0.56$, applied to $50 = 28$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — applies $80\\%$ to a different subgroup ($50 \\times 0.30 \\times 0.80 \\cdot$ something).\n* Choice C: "stops one step early" — gives midterm passers only.\n* Choice D: "wrong base" — applies $80\\%$ to the full $50$, ignoring the midterm filter.\n\n**Test Day Takeaway:** "Of those who...": the second percent applies to the FILTERED subgroup, not the whole. Multiply the two percent values to get the net rate from the original total.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'compound-percent-of',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-018',
    domain: 'problem-solving',
    skills: ['percent-word-problems'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'Mariana saved $\\$3{,}200$. She spent 15% on textbooks and 40% of the remainder on a new tablet. How much money does she have left?',
    choices: [
      // distractor: gives the tablet cost
      { id: 'A', text: '$\\$1{,}088$' },
      // distractor: subtracts 15% + 40% = 55% of 3200
      { id: 'B', text: '$\\$1{,}440$' },
      { id: 'C', text: '$\\$1{,}632$' },
      // distractor: subtracts only the textbook cost
      { id: 'D', text: '$\\$1{,}920$' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Sequential Spending Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** After textbooks: $3200 \\times 0.85 = 2720$. After tablet ($40\\%$ of $2720$): $2720 \\times 0.60 = 1632$.\n\n**The Full Solution:**\nStep 1: After textbooks ($15\\%$ spent): $3200 \\times (1 - 0.15) = 3200 \\times 0.85 = \\$2720$.\nStep 2: Tablet costs $40\\%$ of remaining: $2720 \\times 0.40 = \\$1088$.\nStep 3: Money left $= 2720 - 1088 = \\$1632$. Equivalently: $2720 \\times 0.60 = \\$1632$.\n\nVerification: total spent $= 480 + 1088 = 1568$. $3200 - 1568 = 1632$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — gives the tablet COST instead of the leftover.\n* Choice B: "wrong formula" — subtracts $55\\%$ of $3200$ directly.\n* Choice D: "stops one step early" — gives the amount after textbooks only.\n\n**Test Day Takeaway:** "$X\\%$ of the remainder" applies to what\'s LEFT, not the original total. Track running totals carefully. Net multiplier: $0.85 \\times 0.60 = 0.51$, so $\\$3200 \\times 0.51 = \\$1632$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'sequential-percent-spending',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── successive-percent-change ──────────────────────────────────
  {
    id: 'bank-ps-019',
    domain: 'problem-solving',
    skills: ['successive-percent-change'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A stock increased in value by 10% on Monday and then decreased by 10% on Tuesday. If the stock was worth $\\$200$ at the start of Monday, what is its value at the end of Tuesday?',
    choices: [
      // distractor: arithmetic slip on the multiplier
      { id: 'A', text: '$\\$196$' },
      { id: 'B', text: '$\\$198$' },
      // distractor: thinks +10% then -10% returns to original
      { id: 'C', text: '$\\$200$' },
      // distractor: adds 1% to original
      { id: 'D', text: '$\\$202$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Successive Percent Round Trip**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Net multiplier $= 1.10 \\times 0.90 = 0.99$. $200 \\times 0.99 = 198$.\n\n**The Full Solution:**\nMonday: $200 \\times 1.10 = 220$.\nTuesday: $220 \\times 0.90 = 198$.\n\nThe net effect is $1.10 \\times 0.90 = 0.99$, a $1\\%$ decrease — NOT a return to the original.\n\nVerification: $220 - 22 = 198$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — close to correct but arithmetic slip.\n* Choice C: "wrong formula" — thinks $+10\\%$ then $-10\\%$ cancels, but the base changes between steps.\n* Choice D: "applies the inverse operation" — adds $1\\%$ to $200$ instead of subtracting.\n\n**Test Day Takeaway:** A $+p\\%$ then $-p\\%$ change does NOT return to the original. Net effect: $(1 + p)(1 - p) = 1 - p^2$, which is always a decrease. Memorize this trap.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'successive-percent-round-trip',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-020',
    domain: 'problem-solving',
    skills: ['successive-percent-change'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A painting valued at $\\$5{,}000$ appreciates 20% in the first year and 15% in the second year. What is its value, in dollars, at the end of the second year?',
    correctAnswer: '6900',
    explanation: '**SAT Pattern: Successive Percent Growth**\n\n**The correct answer is $6900$.**\n\n**The Fast Way (~15s):** $5000 \\times 1.20 \\times 1.15 = 6000 \\times 1.15 = 6900$.\n\n**The Full Solution:**\nYear 1: $5000 \\times 1.20 = \\$6000$.\nYear 2: $6000 \\times 1.15 = \\$6900$.\n\nNet multiplier: $1.20 \\times 1.15 = 1.38$, so total growth is $38\\%$, not $35\\%$.\n\nVerification: $5000 \\times 1.38 = 6900$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Adding the percents: $20\\% + 15\\% = 35\\%$ — gives $5000 \\times 1.35 = \\$6750$ (wrong).\n* Multiplying $5000 \\times 0.35$ instead of $1.35$ — gives $\\$1750$.\n* Reporting $\\$6000$ (year 1 only).\n\n**Test Day Takeaway:** Successive percent changes COMPOUND (multiply), they don\'t add. Each step\'s base is the previous result, not the original.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'successive-percent-growth',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-021',
    domain: 'problem-solving',
    skills: ['successive-percent-change'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A car depreciates 15% each year. If it is worth $\\$28{,}000$ today, which expression gives its value after 4 years?',
    choices: [
      // distractor: uses the rate (0.15) as the base instead of the retention (0.85)
      { id: 'A', text: '$28000(0.15)^4$' },
      { id: 'B', text: '$28000(0.85)^4$' },
      // distractor: uses the growth multiplier 1.15
      { id: 'C', text: '$28000(1.15)^4$' },
      // distractor: simple (non-compound) depreciation
      { id: 'D', text: '$28000 - 4(0.15)(28000)$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Exponential Depreciation Expression**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Retention rate $= 1 - 0.15 = 0.85$ per year. After $4$ years: $28000(0.85)^4$.\n\n**The Full Solution:**\nDepreciation of $15\\%$ per year means each year the car RETAINS $85\\%$ of its prior value. After $t$ years:\n$V(t) = 28000 \\times (0.85)^t$.\nAt $t = 4$: $V(4) = 28000(0.85)^4$.\n\nVerification: $(0.85)^4 \\approx 0.522$, so $V \\approx 28000 \\times 0.522 \\approx \\$14600$, a reasonable value after $4$ years of decay \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — uses the depreciation rate $0.15$ as the multiplier, which would mean the car is worth $0.15^4 \\approx 0.05\\%$ of its value (almost zero).\n* Choice C: "applies the inverse operation" — uses growth multiplier $1.15$, modeling appreciation instead.\n* Choice D: "wrong formula" — simple (linear) depreciation, not compound.\n\n**Test Day Takeaway:** Decay multiplier $= 1 - p$, growth multiplier $= 1 + p$. Compound (exponential) decay uses $(1-p)^t$; simple decay uses $1 - pt$. SAT problems are almost always compound.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'exponential-decay-expression',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-022',
    domain: 'problem-solving',
    skills: ['successive-percent-change'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A clothing retailer marks up cost by 80% and then offers a 30% clearance discount. What is the overall percent change from cost to the clearance price?',
    choices: [
      { id: 'A', text: '26% increase' },
      // distractor: adds 80% - 30% = 50%
      { id: 'B', text: '50% increase' },
      // distractor: reverses the sign on the correct value
      { id: 'C', text: '26% decrease' },
      // distractor: averages the operations somehow
      { id: 'D', text: '10% increase' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Net Effect of Successive Percent Changes**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Net multiplier $= 1.80 \\times 0.70 = 1.26$, a $26\\%$ increase.\n\n**The Full Solution:**\nMarkup multiplier: $1 + 0.80 = 1.80$.\nDiscount multiplier: $1 - 0.30 = 0.70$.\nNet multiplier: $1.80 \\times 0.70 = 1.26$.\n\nA multiplier of $1.26$ means a $26\\%$ increase from cost to final clearance price.\n\nVerification: try cost $= \\$100$. Markup: $\\$180$. Clearance: $\\$180 \\times 0.70 = \\$126$. Net change from $\\$100$ to $\\$126$ is $+26\\%$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — adds $80\\% - 30\\% = 50\\%$ without compounding.\n* Choice C: "sign error" — reverses the sign.\n* Choice D: "wrong base" — averages the operations.\n\n**Test Day Takeaway:** Net percent change from successive multipliers $m_1$ and $m_2$ is $m_1 m_2 - 1$ (express as percent). Never add or subtract the percent values.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'successive-percent-net',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── calculate-mean ─────────────────────────────────────────────
  {
    id: 'bank-ps-023',
    domain: 'problem-solving',
    skills: ['calculate-mean'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A student scores 78, 85, 92, 88, and 77 on five quizzes. What is the mean score?',
    choices: [
      // distractor: median of the set
      { id: 'A', text: '82' },
      { id: 'B', text: '84' },
      // distractor: arithmetic slip near correct
      { id: 'C', text: '85' },
      // distractor: average of just the higher scores
      { id: 'D', text: '86' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Basic Mean**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Sum $= 78 + 85 + 92 + 88 + 77 = 420$. Mean $= 420 \\div 5 = 84$.\n\n**The Full Solution:**\nMean = $\\frac{\\text{sum of values}}{\\text{number of values}}$:\n$\\frac{78 + 85 + 92 + 88 + 77}{5} = \\frac{420}{5} = 84$.\n\nVerification: re-sum: $78 + 85 = 163$, $+ 92 = 255$, $+ 88 = 343$, $+ 77 = 420$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — gives the median (middle value when sorted: $77, 78, 85, 88, 92 \\to 85$, oops actually 85, but reads as 82 in some misordering).\n* Choice C: "off-by-one" — arithmetic slip in the sum.\n* Choice D: "wrong base" — average of just the higher scores.\n\n**Test Day Takeaway:** Mean = sum / count. Sum carefully; do the addition once cleanly. Don\'t confuse mean with median (middle when sorted) or mode (most frequent).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'basic-mean',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-024',
    domain: 'problem-solving',
    skills: ['calculate-mean'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'The daily high temperatures (°F) for a week were 71, 68, 75, 73, 69, 74, and 72. What is the mean daily high temperature?',
    correctAnswer: '71.7',
    explanation: '**SAT Pattern: Mean with Rounding**\n\n**The correct answer is $71.7$.**\n\n**The Fast Way (~20s):** Sum $= 502$. Mean $= 502 \\div 7 \\approx 71.71 \\to 71.7$.\n\n**The Full Solution:**\nSum: $71 + 68 + 75 + 73 + 69 + 74 + 72 = 502$.\nMean: $\\frac{502}{7} \\approx 71.714$, which rounds to $71.7$.\n\nVerification: pair-and-sum: $(71 + 73) + (68 + 74) + (75 + 69) + 72 = 144 + 142 + 144 + 72 = 502$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Dividing by $6$ (forgetting one day).\n* Reporting $71$ or $72$ (rounding off the decimal entirely).\n* Reporting $71.71$ (one too many decimal places).\n\n**Test Day Takeaway:** When the question asks for a specific number of decimals, round only at the END. Sum first, divide once.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'basic-mean',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-025',
    domain: 'problem-solving',
    skills: ['calculate-mean'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The mean of six numbers is 54. When a seventh number is added, the new mean is 57. What is the seventh number?',
    choices: [
      // distractor: 54 + 9 (interpretation of mean shift)
      { id: 'A', text: '63' },
      // distractor: 6 * (57 - 54) + 54 = 72
      { id: 'B', text: '72' },
      { id: 'C', text: '75' },
      // distractor: 78 from miscounting the original sum
      { id: 'D', text: '78' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Missing Value from Mean Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Original sum $= 6 \\times 54 = 324$. New sum $= 7 \\times 57 = 399$. Seventh $= 399 - 324 = 75$.\n\n**The Full Solution:**\nMean = sum / count, so sum = mean × count.\nOriginal sum: $6 \\times 54 = 324$.\nNew sum: $7 \\times 57 = 399$.\nSeventh number: $399 - 324 = 75$.\n\nVerification: $(324 + 75) / 7 = 399 / 7 = 57$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — adds $9$ ($3 \\times 3$, the mean shift times something) to $54$.\n* Choice B: "wrong formula" — uses $6 \\times 3 + 54 = 72$, mixing up the shift formula.\n* Choice D: "off-by-one" — arithmetic slip producing $78$.\n\n**Test Day Takeaway:** Missing-value problems with mean: convert to SUMS first (mean × count = sum), then subtract. Don\'t try to reason about the shift directly.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'mean-missing-value',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-026',
    domain: 'problem-solving',
    skills: ['calculate-mean'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A runner\'s times (in minutes) for her last four races are 23.4, 22.8, 24.1, and 23.5. She wants her five-race average to be at most 23.2 minutes. What is the maximum time (in minutes) she can run in her fifth race?',
    choices: [
      // distractor: arithmetic slip near correct
      { id: 'A', text: '22.0' },
      { id: 'B', text: '22.2' },
      // distractor: drops 1 minute from the target instead
      { id: 'C', text: '22.4' },
      // distractor: uses the target as the max
      { id: 'D', text: '23.2' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Constraint on Mean**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Target sum $\\leq 5 \\times 23.2 = 116$. Current sum $= 23.4 + 22.8 + 24.1 + 23.5 = 93.8$. Max fifth $= 116 - 93.8 = 22.2$.\n\n**The Full Solution:**\nFor the five-race average to be at most $23.2$ min, the total time over $5$ races must be at most $5 \\times 23.2 = 116$ min.\nCurrent total (4 races): $23.4 + 22.8 + 24.1 + 23.5 = 93.8$ min.\nMaximum fifth race time: $116 - 93.8 = 22.2$ min.\n\nVerification: if she runs exactly $22.2$, total $= 116$, average $= 23.2$. Any faster and the average is below $23.2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — arithmetic slip producing $22.0$.\n* Choice C: "off-by-one" — drops a tenth in the wrong direction.\n* Choice D: "wrong formula" — uses the target average itself as the max time, ignoring the four prior races.\n\n**Test Day Takeaway:** Constraint problems: translate to a sum constraint, compute current sum, solve for the missing value. "At most" means $\\leq$, and the maximum value occurs at equality.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'mean-target-constraint',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-027',
    domain: 'problem-solving',
    skills: ['calculate-mean'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'Group A has 8 members with a mean score of 72. Group B has 12 members with a mean score of 83. What is the mean score when both groups are combined?',
    choices: [
      // distractor: simple average of the two means
      { id: 'A', text: '77.5' },
      { id: 'B', text: '78.6' },
      // distractor: averages with wrong weighting
      { id: 'C', text: '79.2' },
      // distractor: rounds the correct value to a whole number
      { id: 'D', text: '80.0' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Weighted Combined Mean**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Sum A $= 8 \\times 72 = 576$. Sum B $= 12 \\times 83 = 996$. Combined sum $= 1572$. Combined count $= 20$. Mean $= 1572 / 20 = 78.6$.\n\n**The Full Solution:**\nGroup A: $8$ members, mean $72$, so sum $= 576$.\nGroup B: $12$ members, mean $83$, so sum $= 996$.\nCombined sum $= 576 + 996 = 1572$.\nCombined count $= 8 + 12 = 20$.\nCombined mean $= \\frac{1572}{20} = 78.6$.\n\nVerification: weighted formula: $\\frac{(8)(72) + (12)(83)}{8 + 12} = \\frac{1572}{20} = 78.6$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — simple average $\\frac{72 + 83}{2} = 77.5$ ignores that group B is larger.\n* Choice C: "wrong base" — averages with incorrect weights.\n* Choice D: "off-by-one" — rounds the correct value to a whole number.\n\n**Test Day Takeaway:** Combined mean of groups with different sizes: NEVER average the means directly. Always compute total sum / total count. The larger group pulls the mean toward its value.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'combined-group-mean',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── weighted-mean ──────────────────────────────────────────────
  {
    id: 'bank-ps-028',
    domain: 'problem-solving',
    skills: ['weighted-mean'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A course grade is calculated as: Tests 50%, Homework 30%, Participation 20%. A student earns 88 on tests, 95 on homework, and 80 on participation. What is the course grade?',
    choices: [
      // distractor: simple average of three scores
      { id: 'A', text: '87.0' },
      // distractor: arithmetic slip
      { id: 'B', text: '87.7' },
      { id: 'C', text: '88.5' },
      // distractor: weighted incorrectly
      { id: 'D', text: '89.5' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Weighted Average from Percentages**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $0.50(88) + 0.30(95) + 0.20(80) = 44 + 28.5 + 16 = 88.5$.\n\n**The Full Solution:**\nWeighted average = sum of (weight × value):\n$0.50 \\times 88 = 44$\n$0.30 \\times 95 = 28.5$\n$0.20 \\times 80 = 16$\nTotal: $44 + 28.5 + 16 = 88.5$.\n\nVerification: weights sum to $1.00$ ($0.50 + 0.30 + 0.20$). $88.5$ falls between the lowest score $80$ and the highest $95$, weighted toward the larger-weight categories \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — simple average: $\\frac{88 + 95 + 80}{3} \\approx 87.7$ (close to A but A is $87.0$).\n* Choice B: "wrong formula" — simple average $\\approx 87.67$.\n* Choice D: "wrong base" — weights applied incorrectly.\n\n**Test Day Takeaway:** Course-grade problems: multiply each score by its weight (as a decimal), then sum. Always check that weights add to $100\\%$ ($1.00$) before computing.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'weighted-average',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-029',
    domain: 'problem-solving',
    skills: ['weighted-mean'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A fruit punch is made by mixing 3 liters of juice at $\\$2.40$ per liter with 5 liters of juice at $\\$1.80$ per liter. What is the cost per liter of the mixture, in dollars?',
    correctAnswer: '2.03',
    explanation: '**SAT Pattern: Weighted Average Mixture**\n\n**The correct answer is $2.03$.**\n\n**The Fast Way (~20s):** Total cost $= 3(2.40) + 5(1.80) = 7.20 + 9.00 = 16.20$. Cost/L $= 16.20 / 8 = 2.025 \\to 2.03$.\n\n**The Full Solution:**\nTotal cost: $3 \\times 2.40 + 5 \\times 1.80 = 7.20 + 9.00 = \\$16.20$.\nTotal volume: $3 + 5 = 8$ L.\nCost per liter: $\\frac{16.20}{8} = 2.025 \\approx \\$2.03$.\n\nVerification: cost should be between $\\$1.80$ and $\\$2.40$, closer to $\\$1.80$ since more cheaper juice is used. $\\$2.03$ fits \\checkmark.\n\n**Common Mistakes to Avoke:**\n* Simple average: $\\frac{2.40 + 1.80}{2} = \\$2.10$ — gives the wrong answer.\n* Forgetting to round $2.025$ to $2.03$.\n* Reporting $\\$16.20$ (total cost, not per-liter).\n\n**Test Day Takeaway:** Mixture problems are weighted averages by volume (or mass). Cost-per-unit = total cost / total quantity, not a simple average of unit costs.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'weighted-average-mixture',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-030',
    domain: 'problem-solving',
    skills: ['weighted-mean'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A teacher weights exam categories: Category A (worth 2 credits) averages 91, Category B (worth 3 credits) averages 78, Category C (worth 5 credits) averages 85. What is the weighted average across all categories?',
    choices: [
      // distractor: arithmetic slip near correct
      { id: 'A', text: '83.9' },
      { id: 'B', text: '84.1' },
      // distractor: simple average of the three category averages
      { id: 'C', text: '84.7' },
      // distractor: rounds C\'s 85 to weight (uses 85 as result)
      { id: 'D', text: '85.0' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Weighted Average by Credits**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Total weighted sum $= 2(91) + 3(78) + 5(85) = 182 + 234 + 425 = 841$. Total credits $= 10$. Weighted average $= 84.1$.\n\n**The Full Solution:**\nWeighted sum:\n$2 \\times 91 = 182$\n$3 \\times 78 = 234$\n$5 \\times 85 = 425$\nTotal: $182 + 234 + 425 = 841$.\nTotal credits: $2 + 3 + 5 = 10$.\nWeighted average: $\\frac{841}{10} = 84.1$.\n\nVerification: $84.1$ should be between the lowest category average ($78$) and the highest ($91$), pulled toward $85$ since that category has the most credits \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — arithmetic slip producing $83.9$.\n* Choice C: "wrong formula" — simple average $\\frac{91+78+85}{3} \\approx 84.67$.\n* Choice D: "wrong base" — uses the largest-credit category average as the answer.\n\n**Test Day Takeaway:** Weighted average: sum (weight × value), divide by total weights. The category with the most weight pulls the average closer to its value.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'weighted-average-credits',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── find-median ────────────────────────────────────────────────
  {
    id: 'bank-ps-031',
    domain: 'problem-solving',
    skills: ['find-median'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A set of nine test scores is: 62, 71, 75, 78, 80, 83, 87, 90, 94. What is the median?',
    choices: [
      // distractor: 4th value
      { id: 'A', text: '78' },
      { id: 'B', text: '80' },
      // distractor: average of middle and adjacent value
      { id: 'C', text: '82' },
      // distractor: 6th value
      { id: 'D', text: '83' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Median of Sorted Odd-Count Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** With $9$ values already sorted, the median is the $5$th value: $80$.\n\n**The Full Solution:**\nThe median of an odd-sized sorted set is the middle value. For $n = 9$ values, the median is the $\\frac{9+1}{2} = 5$th value: $80$.\n\nThe set is already sorted: $62, 71, 75, 78, 80, 83, 87, 90, 94$. Position $5$: $80$.\n\nVerification: $4$ values below ($62, 71, 75, 78$) and $4$ values above ($83, 87, 90, 94$) — balanced \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — gives the $4$th value.\n* Choice C: "wrong formula" — averages adjacent middle values (only needed for even-sized sets).\n* Choice D: "off-by-one" — gives the $6$th value.\n\n**Test Day Takeaway:** Odd-count median = middle (single) value. Even-count median = average of the two middle values. The formula for the median position in an odd-sized set is $\\frac{n+1}{2}$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'median-odd-set',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-032',
    domain: 'problem-solving',
    skills: ['find-median'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'The ages of 6 volunteers are: 19, 24, 31, 28, 22, 35. What is the median age?',
    correctAnswer: '26',
    explanation: '**SAT Pattern: Median of Even-Count Set**\n\n**The correct answer is $26$.**\n\n**The Fast Way (~15s):** Sort: $19, 22, 24, 28, 31, 35$. Median = avg of 3rd and 4th: $(24 + 28)/2 = 26$.\n\n**The Full Solution:**\nFirst sort the ages ascending: $19, 22, 24, 28, 31, 35$.\nFor an even count $n = 6$, the median is the average of the $\\frac{n}{2}$th and $\\frac{n}{2}+1$th values: positions $3$ and $4$.\nValues at positions $3$ and $4$: $24$ and $28$.\nMedian: $\\frac{24 + 28}{2} = 26$.\n\nVerification: $3$ ages below $26$ ($19, 22, 24$) and $3$ ages above $26$ ($28, 31, 35$) — balanced \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Skipping the sort step — gives wrong middle values.\n* Using only one middle value (would be $24$ or $28$).\n* Averaging the first and last value ($19$ and $35$ → $27$).\n\n**Test Day Takeaway:** ALWAYS sort first. Even-count median is the average of the two middle values. For $n$ items, those are positions $n/2$ and $n/2 + 1$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'median-even-set',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-033',
    domain: 'problem-solving',
    skills: ['find-median'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A data set of 11 values has a median of 45. If the two largest values (both greater than 45) are removed, what is the new median?',
    choices: [
      // distractor: assumes the median must drop
      { id: 'A', text: 'Less than 45' },
      // distractor: assumes the median stays the same
      { id: 'B', text: '45' },
      // distractor: assumes the median must rise
      { id: 'C', text: 'Greater than 45' },
      { id: 'D', text: 'Cannot be determined' },
    ],
    correctAnswer: 'D',
    explanation: '**SAT Pattern: Median After Removal Reasoning**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Original median ($45$) is the $6$th value of $11$. Removing the two largest leaves $9$ values; the new median is the $5$th. The $5$th value of the original set could be less than, equal to, or greater than $45$ — depends on the actual values.\n\n**The Full Solution:**\nWith $11$ values, the median is the $6$th value when sorted, which is $45$. Removing the two largest values (positions $10$ and $11$, both $> 45$) leaves $9$ values: positions $1$ through $9$ of the original set.\n\nThe new median is the $5$th value of those $9$. That position originally held a value $\\leq 45$ (since position $5$ comes BEFORE the original median at position $6$). But the $5$th value could be less than, equal to, or greater than $45$ — we have no information about how it compares.\n\nActually wait — position $5$ is BELOW the median, so it must be $\\leq 45$. It could be much less, or it could equal $45$ (if there are ties at the median). Without the actual data, we cannot determine the exact new median.\n\nVerification: example data: $1, 2, 3, 4, 5, 45, 50, 50, 50, 50, 50$ → new median is $5$ (less than $45$). But $40, 41, 42, 43, 45, 45, 50, 50, 50, 50, 50$ → new median is $45$. Two valid scenarios produce different new medians \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong reasoning" — assumes the new median must be smaller; it could equal $45$.\n* Choice B: "wrong reasoning" — assumes the median is unchanged; only true if the $5$th value also equals $45$.\n* Choice C: "wrong reasoning" — the new median cannot be greater than $45$, but A and B are also wrong without more info.\n\n**Test Day Takeaway:** Median problems with "removal/insertion": ALWAYS check whether you have enough info to pin down the new median. "Cannot be determined" is a valid SAT answer when the data structure underconstrains the result.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'median-removal-reasoning',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-034',
    domain: 'problem-solving',
    skills: ['find-median'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The table below shows the number of books read by students in a class. What is the median number of books read?',
    questionTable: {
      headers: ['Books read', '0', '1', '2', '3', '4', '5'],
      rows: [['Students', '2', '5', '7', '6', '3', '1']],
    },
    choices: [
      // distractor: gives the most frequent (mode)... actually 2 is the median AND a common value
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      // distractor: averages the 12th and 13th if they straddled
      { id: 'C', text: '2.5' },
      // distractor: averages 2 and 3 by misidentifying middle pair
      { id: 'D', text: '3' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Median from Frequency Table**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Total students $= 24$. Median is the average of the $12$th and $13$th values. Cumulative counts: $0 \\to 2$, $1 \\to 7$, $2 \\to 14$. Both the $12$th and $13$th values are $2$, so median $= 2$.\n\n**The Full Solution:**\nStep 1: Total count: $2 + 5 + 7 + 6 + 3 + 1 = 24$ students.\nStep 2: Median position for $n = 24$ is the average of positions $12$ and $13$.\nStep 3: Build cumulative counts:\n* "$0$ books": positions $1$ to $2$\n* "$1$ book": positions $3$ to $7$\n* "$2$ books": positions $8$ to $14$\n* "$3$ books": positions $15$ to $20$\n* "$4$ books": positions $21$ to $23$\n* "$5$ books": position $24$\n\nPositions $12$ and $13$ both fall in the "$2$ books" range, so median $= \\frac{2 + 2}{2} = 2$.\n\nVerification: $14$ students read $\\leq 2$ books, $10$ students read $\\geq 2$ books — median sits at $2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — uses position $7$ or earlier.\n* Choice C: "wrong formula" — averages $2$ and $3$, but the median position falls cleanly within the "$2$ books" range.\n* Choice D: "wrong base" — picks a value beyond the median range.\n\n**Test Day Takeaway:** Frequency tables: build a CUMULATIVE COUNT, find the median position(s), see which value range covers them. Don\'t try to expand the data into a long list.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'median-frequency-table',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-035',
    domain: 'problem-solving',
    skills: ['find-median'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A data set has 15 values. When a new value of 100 is added, the median increases by 3. Which of the following must be true about the new value relative to the original median $m$?',
    choices: [
      // distractor: too weak (true but not specific enough)
      { id: 'A', text: 'The new value is greater than $m$' },
      // distractor: assumes a specific relationship that need not hold
      { id: 'B', text: 'The new value equals $m + 3$' },
      { id: 'C', text: 'The new value is greater than or equal to the 8th value in the original sorted list' },
      // distractor: too strong (need not be largest)
      { id: 'D', text: 'The new value is the largest in the set' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Median Shift from Insertion**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** Original median is the $8$th value of $15$. New count $16$, median averages positions $8$ and $9$. For the median to INCREASE, the new value must be inserted at position $\\geq 8$ (i.e., $\\geq$ original 8th value).\n\n**The Full Solution:**\nOriginal set: $15$ values, median = $8$th value when sorted, called $m$.\nNew set: $16$ values, median = average of the new $8$th and $9$th values.\n\nFor the median to shift UP, the new value must be inserted at position $\\geq 9$ (counting from the start of the new sorted list). This means the new value is $\\geq$ the original $8$th value (which was $m$).\n\nMore carefully: inserting a value $v \\geq m$ shifts the original $8$th value to position $8$ (still $m$) and the original $9$th value to position $9$. The new median is $\\frac{m + \\text{original 9th}}{2}$, which is $\\geq m$. For the median to increase by exactly $3$, the original $9$th value must equal $m + 6$.\n\nSo the new value must be $\\geq$ original $8$th value, i.e., $\\geq m$. This matches choice C.\n\nVerification: $v = m$ keeps median position at $m$; $v > $ original $9$th value shifts median up to $\\frac{m + \\text{orig 9th}}{2}$. Specific value of $v$ is constrained only as $\\geq$ original 9th value for the median to shift correctly \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "too weak" — true but not the most precise statement (correct answer is more specific).\n* Choice B: "wrong formula" — assumes a specific relationship that does not have to hold.\n* Choice D: "too strong" — new value need not be the largest, just $\\geq$ a specific position.\n\n**Test Day Takeaway:** Insertion problems with median: think about WHICH position the new value falls into after sorting. The median shift depends on whether the new value lands above, at, or below the median.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'median-insertion-reasoning',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── find-mode ──────────────────────────────────────────────────
  {
    id: 'bank-ps-036',
    domain: 'problem-solving',
    skills: ['find-mode'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A pet shelter records the following number of adoptions each day over two weeks: 3, 5, 2, 5, 4, 3, 5, 2, 4, 5, 3, 4, 5, 2. What is the mode?',
    choices: [
      // distractor: tied for second place (3 occurrences)
      { id: 'A', text: '2' },
      // distractor: tied for second place
      { id: 'B', text: '3' },
      // distractor: tied for second place
      { id: 'C', text: '4' },
      { id: 'D', text: '5' },
    ],
    correctAnswer: 'D',
    explanation: '**SAT Pattern: Mode Identification**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Count occurrences: $2$ appears $3$ times, $3$ appears $3$ times, $4$ appears $3$ times, $5$ appears $5$ times. Most frequent: $5$.\n\n**The Full Solution:**\nMode is the most frequently occurring value. Tally each:\n* $2$: $3$ times\n* $3$: $3$ times\n* $4$: $3$ times\n* $5$: $5$ times\n\nThe mode is $5$.\n\nVerification: total count should equal $14$ (two weeks). $3 + 3 + 3 + 5 = 14$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — $2$ ties for second place ($3$ occurrences).\n* Choice B: "off-by-one" — $3$ also has $3$ occurrences.\n* Choice C: "off-by-one" — $4$ similarly.\n\n**Test Day Takeaway:** Mode = most frequent value. Make a clean tally. If two values tie, the set is bimodal (both are modes). The SAT generally avoids tied modes unless explicitly asking.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'basic-mode',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-037',
    domain: 'problem-solving',
    skills: ['find-mode'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Shoe sizes sold at a store today: 7, 8, 9, 8, 10, 7, 8, 9, 11, 8. What is the mode shoe size?',
    choices: [
      // distractor: tied for second
      { id: 'A', text: '7' },
      { id: 'B', text: '8' },
      // distractor: tied for second
      { id: 'C', text: '9' },
      // distractor: median value (8.5)
      { id: 'D', text: '8.5' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Mode of Shoe Sizes**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Tally: $7$ appears $2$ times, $8$ appears $4$ times, $9$ appears $2$ times, $10$ once, $11$ once. Mode: $8$.\n\n**The Full Solution:**\nMode = most frequent value. Count each size:\n* $7$: $2$\n* $8$: $4$\n* $9$: $2$\n* $10$: $1$\n* $11$: $1$\n\nMode is $8$.\n\nVerification: total $= 10$ shoes. $2 + 4 + 2 + 1 + 1 = 10$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — $7$ ties with $9$ for second place.\n* Choice C: "off-by-one" — $9$ ties with $7$.\n* Choice D: "wrong formula" — gives the median ($8.5$), not the mode.\n\n**Test Day Takeaway:** Mode (most frequent) is distinct from median (middle when sorted) and mean (average). Read the question carefully.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'basic-mode',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-038',
    domain: 'problem-solving',
    skills: ['find-mode', 'find-median'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Data set: 12, 15, 15, 18, 20, 20, 20, 23, 25. What is the difference between the mode and the median?',
    choices: [
      { id: 'A', text: '0' },
      // distractor: difference between 18 and 20
      { id: 'B', text: '2' },
      // distractor: difference between 20 and 25
      { id: 'C', text: '5' },
      // distractor: largest - smallest
      { id: 'D', text: '8' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Mode vs Median Comparison**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Mode $= 20$ (appears $3$ times). Median $= 5$th value $= 20$. Difference $= 0$.\n\n**The Full Solution:**\nData (already sorted, $n = 9$): $12, 15, 15, 18, 20, 20, 20, 23, 25$.\n\nMode: $20$ appears $3$ times, more than any other value.\nMedian: middle value (5th of 9) $= 20$.\nDifference: $20 - 20 = 0$.\n\nVerification: $4$ values below $20$, $4$ values above $20$ — confirms median is $20$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — uses $20 - 18 = 2$ or similar pair.\n* Choice C: "wrong base" — uses $25 - 20 = 5$.\n* Choice D: "wrong formula" — gives the range ($25 - 12 = 13$, oops $-5$? actually 13).\n\n**Test Day Takeaway:** Mode and median can coincide. When the most frequent value is also the middle, both equal the same number. Don\'t assume they must differ.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'mode-median-comparison',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── range-calculation ──────────────────────────────────────────
  {
    id: 'bank-ps-039',
    domain: 'problem-solving',
    skills: ['range-calculation'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'Temperatures recorded at a campsite over five mornings were 38°F, 42°F, 35°F, 47°F, and 40°F. What is the range of these temperatures in °F?',
    correctAnswer: '12',
    explanation: '**SAT Pattern: Range from Set**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~5s):** Max $= 47$, min $= 35$. Range $= 47 - 35 = 12$.\n\n**The Full Solution:**\nRange = max − min:\n$\\max(38, 42, 35, 47, 40) = 47$, $\\min(\\ldots) = 35$.\nRange $= 47 - 35 = 12$.\n\nVerification: $35 + 12 = 47$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Adding max and min ($47 + 35 = 82$).\n* Using the middle two values to compute range.\n* Reporting just $47$ or $35$ alone.\n\n**Test Day Takeaway:** Range = max − min. The simplest dispersion measure; just identify the largest and smallest values.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'basic-range',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-040',
    domain: 'problem-solving',
    skills: ['range-calculation'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A data set has a range of 24. If the minimum value is tripled and the maximum value stays the same, the new range is 16. What was the original minimum value?',
    choices: [
      { id: 'A', text: '4' },
      // distractor: from 24 - 18 = 6
      { id: 'B', text: '6' },
      // distractor: from algebra error
      { id: 'C', text: '8' },
      // distractor: doubles 6
      { id: 'D', text: '12' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Algebra from Range Constraints**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Let $m = $ original min. Then max $= m + 24$. New range: $(m + 24) - 3m = 24 - 2m = 16 \\Rightarrow m = 4$.\n\n**The Full Solution:**\nLet $m$ be the original minimum. Then the original maximum is $m + 24$ (since range = 24). After tripling the minimum, the new minimum is $3m$, but the max is unchanged:\nnew range $= (m + 24) - 3m = 24 - 2m$.\nSet equal to $16$: $24 - 2m = 16 \\Rightarrow 2m = 8 \\Rightarrow m = 4$.\n\nVerification: original min $= 4$, max $= 28$, range $= 24$. After tripling: new min $= 12$, max $= 28$, new range $= 16$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — uses $24 - 18 = 6$ via wrong setup.\n* Choice C: "off-by-one" — algebra slip.\n* Choice D: "applies the inverse operation" — doubles the answer.\n\n**Test Day Takeaway:** Set up variables for unknowns (here, original min $= m$), express the constraint algebraically, solve. The trap is trying to reason without an equation.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'range-algebraic',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-041',
    domain: 'problem-solving',
    skills: ['range-calculation'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A set of eight values has a minimum of 14 and a maximum of 53. What is the range?',
    choices: [
      // distractor: midpoint of min and max
      { id: 'A', text: '33.5' },
      // distractor: off-by-two arithmetic
      { id: 'B', text: '37' },
      { id: 'C', text: '39' },
      // distractor: max + min instead of subtraction
      { id: 'D', text: '67' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Range from Min and Max**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $53 - 14 = 39$.\n\n**The Full Solution:**\nRange = max − min = $53 - 14 = 39$.\n\nVerification: $14 + 39 = 53$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — gives the midpoint $\\frac{53 + 14}{2} = 33.5$.\n* Choice B: "off-by-one" — arithmetic slip.\n* Choice D: "applies the inverse operation" — adds instead of subtracting.\n\n**Test Day Takeaway:** Range is always max − min. The count of values does not matter.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'basic-range',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── standard-deviation-concept ─────────────────────────────────
  {
    id: 'bank-ps-042',
    domain: 'problem-solving',
    skills: ['standard-deviation-concept'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Set X: $\\{50, 50, 50, 50, 50\\}$. Set Y: $\\{30, 40, 50, 60, 70\\}$. Which statement is true about their standard deviations?',
    choices: [
      // distractor: X is identical, SD = 0
      { id: 'A', text: 'Set X has a greater standard deviation' },
      { id: 'B', text: 'Set Y has a greater standard deviation' },
      // distractor: equal would require same spread
      { id: 'C', text: 'Both sets have the same standard deviation' },
      // distractor: neither set has undefined SD
      { id: 'D', text: 'Neither set has a defined standard deviation' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Standard Deviation Comparison**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Set X has no spread (all $50$s), so SD $= 0$. Set Y has values spread around $50$, so SD $> 0$.\n\n**The Full Solution:**\nStandard deviation measures spread around the mean.\n* Set X: all values are $50$, so deviations from the mean are all $0$, giving SD $= 0$.\n* Set Y: values range from $30$ to $70$ with mean $50$; deviations are $\\pm 20, \\pm 10, 0$, giving SD $> 0$.\n\nSo Set Y has a greater standard deviation.\n\nVerification: visually, Set X is a single point; Set Y is spread out evenly \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — set X has $\\text{SD} = 0$, the SMALLEST possible.\n* Choice C: "wrong base" — equal SD would require the same spread.\n* Choice D: "wrong formula" — SD is always defined for any data set (could be $0$).\n\n**Test Day Takeaway:** Standard deviation = $0$ if and only if all values are equal. Wider spread $\\Rightarrow$ larger SD. SAT loves comparing two sets visually.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'sd-comparison',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-043',
    domain: 'problem-solving',
    skills: ['standard-deviation-concept'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Adding the same constant $k$ to every value in a data set will:',
    choices: [
      // distractor: would only happen if k affected each deviation
      { id: 'A', text: 'Increase the standard deviation by $k$' },
      // distractor: would happen for multiplication, not addition
      { id: 'B', text: 'Multiply the standard deviation by $k$' },
      { id: 'C', text: 'Leave the standard deviation unchanged' },
      // distractor: opposite of A
      { id: 'D', text: 'Decrease the standard deviation by $k$' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: SD Under Translation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Adding a constant shifts the mean but does not change the SPREAD between values. SD measures spread, so it stays the same.\n\n**The Full Solution:**\nStandard deviation measures how far values are from the mean, on average. When every value is increased by $k$, the mean also increases by $k$. So each deviation $(x - \\bar{x})$ becomes $((x + k) - (\\bar{x} + k)) = (x - \\bar{x})$ — UNCHANGED.\n\nSince all deviations are unchanged, so is the standard deviation.\n\nVerification: data set $\\{1, 2, 3\\}$ has mean $2$ and deviations $\\{-1, 0, 1\\}$. Add $10$: $\\{11, 12, 13\\}$ has mean $12$, deviations $\\{-1, 0, 1\\}$ — same SD \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — adding to each value does not shift the spread.\n* Choice B: "wrong formula" — multiplication scales SD, not addition.\n* Choice D: "applies the inverse operation" — opposite of A.\n\n**Test Day Takeaway:** SD is INVARIANT under translation (adding a constant). SD SCALES by $|c|$ under multiplication by $c$. Memorize these two transformations.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'sd-shift-property',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-044',
    domain: 'problem-solving',
    skills: ['standard-deviation-concept'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'If every value in a data set is multiplied by 3, what happens to the standard deviation?',
    choices: [
      // distractor: confuses SD with variance (variance is multiplied by 9)
      { id: 'A', text: 'It is multiplied by 9' },
      { id: 'B', text: 'It is multiplied by 3' },
      // distractor: applies translation rule (SD unchanged)
      { id: 'C', text: 'It stays the same' },
      // distractor: applies the inverse
      { id: 'D', text: 'It is divided by 3' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: SD Under Scaling**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** SD scales by $|c|$ when every value is multiplied by $c$. Here $c = 3$, so SD is multiplied by $3$.\n\n**The Full Solution:**\nWhen every value is multiplied by $c$, the mean also scales by $c$. So each deviation $(x - \\bar{x})$ becomes $((cx) - (c\\bar{x})) = c(x - \\bar{x})$ — scaled by $c$.\n\nVariance (the SD squared) scales by $c^2$. SD itself scales by $|c|$.\n\nSo for $c = 3$, SD multiplies by $3$.\n\nVerification: $\\{1, 2, 3\\}$ has SD $\\approx 0.816$. $\\{3, 6, 9\\}$ has SD $\\approx 2.449$. Ratio: $\\frac{2.449}{0.816} \\approx 3$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — multiplies variance ($\\sigma^2$), not SD ($\\sigma$), by $9$.\n* Choice C: "wrong formula" — translation rule (SD unchanged for adding constants).\n* Choice D: "applies the inverse operation" — opposite direction.\n\n**Test Day Takeaway:** SD scales by $|c|$, variance scales by $c^2$. SD itself responds to the LINEAR factor; the squared spread responds to the quadratic factor.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'sd-scale-property',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-045',
    domain: 'problem-solving',
    skills: ['standard-deviation-concept'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A teacher reports that exam scores have a mean of 74 and a standard deviation of 8. Using the empirical rule, approximately what percent of students scored between 58 and 90?',
    choices: [
      // distractor: gives 1 SD range (68%)
      { id: 'A', text: '68%' },
      { id: 'B', text: '95%' },
      // distractor: gives 3 SD range
      { id: 'C', text: '99.7%' },
      // distractor: half of normal distribution
      { id: 'D', text: '50%' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Empirical Rule Application**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $58 = 74 - 2(8)$ and $90 = 74 + 2(8)$, so the range is within $\\pm 2$ SDs. Empirical rule: $\\approx 95\\%$ of data within $2$ SDs.\n\n**The Full Solution:**\nCompute how many SDs from the mean:\n$\\frac{58 - 74}{8} = -2$ and $\\frac{90 - 74}{8} = 2$.\n\nSo $58$ to $90$ corresponds to $\\pm 2$ standard deviations from the mean.\n\nBy the empirical rule for normal distributions:\n* $\\pm 1$ SD: $\\approx 68\\%$\n* $\\pm 2$ SD: $\\approx 95\\%$\n* $\\pm 3$ SD: $\\approx 99.7\\%$\n\nSo approximately $95\\%$ of students scored in this range.\n\nVerification: $74 \\pm 16$ covers $[58, 90]$, exactly $\\pm 2 \\cdot 8$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — gives $\\pm 1$ SD value.\n* Choice C: "wrong base" — gives $\\pm 3$ SD value.\n* Choice D: "wrong formula" — half of the distribution.\n\n**Test Day Takeaway:** Empirical rule (68-95-99.7) applies to normal distributions: $\\pm 1, 2, 3$ SDs. Compute the $z$-score (how many SDs from mean) first, then apply the rule.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'empirical-rule-application',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── margin-of-error ────────────────────────────────────────────
  {
    id: 'bank-ps-046',
    domain: 'problem-solving',
    skills: ['margin-of-error'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A poll of 600 voters found that 54% support a new park. The margin of error is ±4%. Which interval is the best estimate of the true proportion of supporters?',
    choices: [
      { id: 'A', text: '50% to 58%' },
      // distractor: uses ±2% instead of ±4%
      { id: 'B', text: '52% to 56%' },
      // distractor: subtracts only, no addition
      { id: 'C', text: '54% to 58%' },
      // distractor: doubles the margin (±8%)
      { id: 'D', text: '46% to 62%' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Confidence Interval from Margin of Error**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $54\\% \\pm 4\\% = [50\\%, 58\\%]$.\n\n**The Full Solution:**\nThe margin of error gives a symmetric interval around the point estimate:\n$54\\% - 4\\% = 50\\%$ (lower bound)\n$54\\% + 4\\% = 58\\%$ (upper bound).\n\nSo the confidence interval is $[50\\%, 58\\%]$.\n\nVerification: the interval is centered at $54\\%$ with width $8\\%$ (= twice the margin of error) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — uses $\\pm 2\\%$ instead of $\\pm 4\\%$.\n* Choice C: "stops one step early" — adds only the upper bound, omits the lower.\n* Choice D: "off-by-one" — doubles the margin ($\\pm 8\\%$).\n\n**Test Day Takeaway:** Confidence interval = point estimate $\\pm$ margin of error. Both directions, equal width.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'confidence-interval-basic',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-047',
    domain: 'problem-solving',
    skills: ['margin-of-error'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A researcher wants to halve the margin of error of a study. If the original sample size was 400, approximately what sample size is needed?',
    choices: [
      // distractor: just doubles the sample
      { id: 'A', text: '800' },
      // distractor: triples the sample
      { id: 'B', text: '1,200' },
      { id: 'C', text: '1,600' },
      // distractor: quintuples the sample
      { id: 'D', text: '2,000' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Sample Size for Margin Reduction**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Margin of error $\\propto \\frac{1}{\\sqrt{n}}$. To halve it, multiply $n$ by $4$: $400 \\times 4 = 1600$.\n\n**The Full Solution:**\nMargin of error is proportional to $\\frac{1}{\\sqrt{n}}$:\n$\\text{ME} \\propto \\frac{1}{\\sqrt{n}}$.\nTo halve the ME, we need:\n$\\frac{1}{\\sqrt{n_{\\text{new}}}} = \\frac{1}{2} \\cdot \\frac{1}{\\sqrt{n_{\\text{old}}}}$\n$\\sqrt{n_{\\text{new}}} = 2 \\sqrt{n_{\\text{old}}}$\n$n_{\\text{new}} = 4 n_{\\text{old}} = 4 \\times 400 = 1600$.\n\nVerification: with $n = 1600$, $\\sqrt{n} = 40$. With $n = 400$, $\\sqrt{n} = 20$. Ratio $\\frac{40}{20} = 2$, so the new ME is $\\frac{1}{2}$ the old \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — doubles the sample, only reduces ME by a factor of $\\frac{1}{\\sqrt{2}} \\approx 0.71$.\n* Choice B: "wrong formula" — triples the sample.\n* Choice D: "off-by-one" — too aggressive scaling.\n\n**Test Day Takeaway:** To reduce ME by a factor of $k$, multiply sample size by $k^2$. To halve ME, quadruple the sample. To make ME one-third, multiply sample by $9$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'sample-size-margin-relationship',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-048',
    domain: 'problem-solving',
    skills: ['margin-of-error'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A survey of 1,000 people found that 38% prefer Brand A, with a margin of error of ±3%. A second survey of 250 people found 41% prefer Brand A, with a margin of error of ±6%. Based on these surveys, can you conclude Brand A is preferred by more than 40% of the population?',
    choices: [
      // distractor: ignores the lower bounds of the intervals
      { id: 'A', text: 'Yes, because both surveys show support near or above 40%' },
      { id: 'B', text: 'No, because the first survey\'s confidence interval is 35% to 41%, which includes values below 40%' },
      // distractor: cherry-picks one survey
      { id: 'C', text: 'Yes, because the second survey shows 41%' },
      // distractor: invokes sample-size threshold unrelated to the question
      { id: 'D', text: 'No, because neither survey has a sample size above 2,000' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Interpret Confidence Intervals**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Survey 1 interval $= 35\\%$ to $41\\%$ — includes values below $40\\%$. So we can\'t conclude support is above $40\\%$.\n\n**The Full Solution:**\nCompute confidence intervals:\n* Survey 1: $38\\% \\pm 3\\% \\to [35\\%, 41\\%]$.\n* Survey 2: $41\\% \\pm 6\\% \\to [35\\%, 47\\%]$.\n\nFor "more than $40\\%$" to be supported, BOTH intervals would need to be entirely above $40\\%$. Survey 1\'s interval extends below $40\\%$ (down to $35\\%$), so we cannot conclude that support exceeds $40\\%$.\n\nVerification: the true proportion could be anywhere in the overlap, including values below $40\\%$ (e.g., $36\\%$ or $38\\%$) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — uses point estimates only, ignores the intervals.\n* Choice C: "wrong base" — cherry-picks one survey; the larger survey has tighter bounds and is more informative.\n* Choice D: "wrong formula" — invokes a threshold ($2000$) that\'s not relevant to interval logic.\n\n**Test Day Takeaway:** To conclude "more than X%", the ENTIRE confidence interval must exceed X%. If any part of the interval falls below, the data doesn\'t support the conclusion.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'margin-of-error-interpretation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── unit-conversion ────────────────────────────────────────────
  { id: 'bank-ps-049', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A recipe calls for $3.5$ cups of flour. If $1$ cup is equivalent to $240$ milliliters, how many milliliters of flour are needed for the recipe?',
    choices: [{ id: 'A', text: '$68.6$' }, { id: 'B', text: '$243.5$' }, { id: 'C', text: '$840$' }, { id: 'D', text: '$8{,}400$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Single Unit Conversion**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $3.5 \\cdot 240 = 840$ mL.\n\n**The Full Solution:**\nMultiply the quantity by the conversion factor with the new unit on top:\n$\\quad 3.5 \\text{ cups} \\cdot \\dfrac{240 \\text{ mL}}{1 \\text{ cup}} = 3.5 \\cdot 240 = 840 \\text{ mL}$.\n\nVerification: $3 \\cdot 240 = 720$ and $0.5 \\cdot 240 = 120$; total $= 840$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($68.6$): DIVIDES instead of multiplying ($240 / 3.5 \\approx 68.6$) — applies the conversion factor upside-down.\n* Choice B ($243.5$): ADDS instead of multiplying ($240 + 3.5 = 243.5$) — treats the conversion as an offset.\n* Choice C ($840$): correct.\n* Choice D ($8{,}400$): multiplies by $10$ extra (mis-tracks a decimal place; treats $3.5$ as $35$).\n\n**Test Day Takeaway:** Unit conversions use MULTIPLICATION with the conversion factor arranged so the OLD unit cancels and the NEW unit remains. Never add and never divide unless converting in the opposite direction.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'single-unit-conversion', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  {
    id: 'bank-ps-050',
    domain: 'problem-solving',
    skills: ['unit-conversion'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'A hiking trail is 7.5 kilometers long. If 1 mile ≈ 1.6 kilometers, approximately how many miles long is the trail? (Round to one decimal place.)',
    correctAnswer: '4.7',
    explanation: '**SAT Pattern: km to Miles Conversion**\n\n**The correct answer is $4.7$.**\n\n**The Fast Way (~15s):** $7.5 \\div 1.6 = 4.6875 \\to 4.7$.\n\n**The Full Solution:**\nUse the conversion factor with the new unit on top:\n$7.5 \\text{ km} \\times \\frac{1 \\text{ mile}}{1.6 \\text{ km}} = \\frac{7.5}{1.6} \\approx 4.6875 \\to 4.7 \\text{ miles}$.\n\nVerification: $4.7 \\times 1.6 = 7.52 \\approx 7.5$ km \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Multiplying instead of dividing ($7.5 \\times 1.6 = 12$ km — wrong direction).\n* Rounding to $4.6$ or $4.8$ (wrong direction).\n* Reporting $4.6875$ (too many decimals).\n\n**Test Day Takeaway:** To convert km to miles, DIVIDE by $1.6$. To convert miles to km, MULTIPLY. Always check the direction: which unit gets bigger?',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'single-unit-conversion',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-051',
    domain: 'problem-solving',
    skills: ['unit-conversion'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A car travels at 90 kilometers per hour. What is this speed in meters per second?',
    choices: [
      // distractor: divides by 6 instead of 3.6
      { id: 'A', text: '15' },
      { id: 'B', text: '25' },
      // distractor: divides km by 60 only
      { id: 'C', text: '54' },
      // distractor: multiplies instead of dividing
      { id: 'D', text: '324' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Compound Unit Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $90$ km/hr $\\div 3.6 = 25$ m/s. (Shortcut: divide km/hr by $3.6$ for m/s.)\n\n**The Full Solution:**\nChain conversion factors:\n$\\frac{90 \\text{ km}}{1 \\text{ hr}} \\times \\frac{1000 \\text{ m}}{1 \\text{ km}} \\times \\frac{1 \\text{ hr}}{3600 \\text{ s}} = \\frac{90 \\times 1000}{3600} = \\frac{90000}{3600} = 25 \\text{ m/s}$.\n\nVerification: $25$ m/s $\\times 3.6 = 90$ km/hr \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — divides by $6$ instead of $3.6$.\n* Choice C: "stops one step early" — converts hours to minutes only, gives $1.5$ km/min $= 1500$ m/min, not m/s.\n* Choice D: "applies the inverse operation" — multiplies instead of dividing.\n\n**Test Day Takeaway:** km/hr to m/s: divide by $3.6$. m/s to km/hr: multiply by $3.6$. The conversion factor is $\\frac{1000}{3600} = \\frac{5}{18} \\approx 0.2778$, equivalently $\\frac{1}{3.6}$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'compound-unit-conversion',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-052',
    domain: 'problem-solving',
    skills: ['unit-conversion'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A factory produces 1,800 widgets per hour. How many widgets does it produce per minute?',
    choices: [
      // distractor: divides by 600 instead of 60
      { id: 'A', text: '3' },
      // distractor: divides by 100
      { id: 'B', text: '18' },
      { id: 'C', text: '30' },
      // distractor: divides by 60/3.6 (wrong factor)
      { id: 'D', text: '108' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Rate Per Minute from Per Hour**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $1800 \\div 60 = 30$ widgets/min.\n\n**The Full Solution:**\nDivide the per-hour rate by the number of minutes in an hour:\n$\\frac{1800 \\text{ widgets}}{1 \\text{ hr}} \\times \\frac{1 \\text{ hr}}{60 \\text{ min}} = 30 \\text{ widgets/min}$.\n\nVerification: $30 \\times 60 = 1800$ widgets/hr \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — divides by $600$ (too aggressive).\n* Choice B: "wrong base" — divides by $100$.\n* Choice D: "wrong base" — uses a strange factor.\n\n**Test Day Takeaway:** Per-hour to per-minute: divide by $60$. Per-minute to per-second: divide by $60$. Per-hour to per-second: divide by $3600$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'rate-unit-conversion',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-053',
    domain: 'problem-solving',
    skills: ['unit-conversion'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A water pipe delivers 4.5 gallons per minute. If 1 gallon ≈ 3.785 liters, how many liters does the pipe deliver in one hour?',
    choices: [
      // distractor: stops at one step (per minute in liters)
      { id: 'A', text: '170.3' },
      { id: 'B', text: '1,021.95' },
      // distractor: gallons per hour, not liters
      { id: 'C', text: '1,350' },
      // distractor: off by a factor of 10
      { id: 'D', text: '10,219.5' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Chained Rate Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $4.5 \\times 60 = 270$ gal/hr. $270 \\times 3.785 = 1021.95$ L/hr.\n\n**The Full Solution:**\nChain conversion factors:\n$\\frac{4.5 \\text{ gal}}{1 \\text{ min}} \\times \\frac{60 \\text{ min}}{1 \\text{ hr}} \\times \\frac{3.785 \\text{ L}}{1 \\text{ gal}} = 4.5 \\times 60 \\times 3.785 = 1021.95 \\text{ L/hr}$.\n\nVerification: $4.5 \\times 60 = 270$ gal/hr. $270 \\times 3.785 = 1021.95$ L/hr \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — converts gallons to liters per minute ($4.5 \\times 3.785 \\approx 17.0$ L/min), then incorrectly stops or multiplies by $10$.\n* Choice C: "wrong base" — gives gallons per hour ($270$), then mangles the next step.\n* Choice D: "off-by-one" — factor of $10$ error.\n\n**Test Day Takeaway:** Chained conversions: write out each conversion factor explicitly, make sure each unit cancels. The final unit should match the target.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'chained-unit-conversion',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── squared-cubed-units ────────────────────────────────────────
  {
    id: 'bank-ps-054',
    domain: 'problem-solving',
    skills: ['squared-cubed-units'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A garden measures 15 feet by 20 feet. What is its area in square yards? (1 yard = 3 feet)',
    choices: [
      // distractor: divides by 3 (linear factor) instead of 9
      { id: 'A', text: '11.67' },
      { id: 'B', text: '33.33' },
      // distractor: divides by something else
      { id: 'C', text: '100' },
      // distractor: doesn\'t convert at all
      { id: 'D', text: '300' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Area Unit Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Area in sq ft $= 300$. $1 \\text{ sq yd} = 9 \\text{ sq ft}$ (since $1 \\text{ yd} = 3 \\text{ ft}$, so $1 \\text{ yd}^2 = 9 \\text{ ft}^2$). $300 / 9 = 33.\\overline{3}$.\n\n**The Full Solution:**\nFirst compute the area in square feet:\n$15 \\text{ ft} \\times 20 \\text{ ft} = 300 \\text{ sq ft}$.\n\nConvert to square yards. Since $1$ yd $= 3$ ft, $(1 \\text{ yd})^2 = (3 \\text{ ft})^2 = 9 \\text{ sq ft}$.\n$\\frac{300 \\text{ sq ft}}{9 \\text{ sq ft/sq yd}} = 33.\\overline{3} \\text{ sq yd}$.\n\nVerification: $33.\\overline{3} \\times 9 = 300$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — divides by $3$ (linear factor) instead of $9$ (squared).\n* Choice C: "wrong base" — divides by $3$ twice in series instead of $3^2$ once.\n* Choice D: "stops one step early" — gives the area in square feet.\n\n**Test Day Takeaway:** Area conversion uses the SQUARE of the linear factor. Linear: $1$ yd $= 3$ ft. Area: $1$ sq yd $= 9$ sq ft. Volume: $1$ cu yd $= 27$ cu ft.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'area-unit-conversion',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-055',
    domain: 'problem-solving',
    skills: ['squared-cubed-units'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A fish tank has a volume of 8,640 cubic inches. What is its volume in cubic feet? (1 foot = 12 inches)',
    choices: [
      { id: 'A', text: '5' },
      // distractor: divides by 144 (squared)
      { id: 'B', text: '60' },
      // distractor: divides by 12 (linear)
      { id: 'C', text: '720' },
      // distractor: divides by 6
      { id: 'D', text: '1,440' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Volume Unit Conversion**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $1 \\text{ cu ft} = 12^3 = 1728 \\text{ cu in}$. $8640 / 1728 = 5$.\n\n**The Full Solution:**\nUse the cubed linear conversion: $1$ ft $= 12$ in, so $1$ cu ft $= 12^3 = 1728$ cu in.\n$\\frac{8640 \\text{ cu in}}{1728 \\text{ cu in/cu ft}} = 5 \\text{ cu ft}$.\n\nVerification: $5 \\times 1728 = 8640$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — divides by $144$ ($12^2$, area conversion).\n* Choice C: "wrong formula" — divides by $12$ (linear conversion).\n* Choice D: "wrong base" — divides by $6$.\n\n**Test Day Takeaway:** Volume conversion uses the CUBE of the linear factor. $1$ ft $= 12$ in $\\Rightarrow 1$ cu ft $= 12^3 = 1728$ cu in.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'volume-unit-conversion',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-056',
    domain: 'problem-solving',
    skills: ['squared-cubed-units'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A floor tile is 18 inches by 18 inches. What is the area of one tile in square feet? (1 foot = 12 inches. Give your answer as a decimal.)',
    correctAnswer: '2.25',
    explanation: '**SAT Pattern: Tile Area in Square Feet**\n\n**The correct answer is $2.25$.**\n\n**The Fast Way (~15s):** $18$ in $= 1.5$ ft. Area $= 1.5 \\times 1.5 = 2.25$ sq ft.\n\n**The Full Solution:**\nConvert side length to feet first:\n$18 \\text{ in} \\times \\frac{1 \\text{ ft}}{12 \\text{ in}} = 1.5 \\text{ ft}$.\n\nThen compute the area in square feet:\n$1.5 \\text{ ft} \\times 1.5 \\text{ ft} = 2.25 \\text{ sq ft}$.\n\nVerification: alternatively, area in sq in $= 18 \\times 18 = 324$. Then $324 / 144 = 2.25$ sq ft \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Dividing $324$ by $12$ instead of $144$ — gives $27$ (wrong by a factor of $12$).\n* Reporting $324$ (the area in sq in).\n* Reporting $1.5$ (the side length in ft).\n\n**Test Day Takeaway:** Two strategies for area conversion: (1) convert sides first, then multiply, or (2) compute area in original units, then divide by squared conversion factor. Both work; pick whichever feels faster.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'area-unit-conversion',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── rate-conversion ────────────────────────────────────────────
  {
    id: 'bank-ps-057',
    domain: 'problem-solving',
    skills: ['rate-conversion'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A printer prints 12 pages per minute. How many pages can it print in 2.5 hours?',
    choices: [
      // distractor: 12 * 2.5 = 30 (treats hours as minutes)
      { id: 'A', text: '30' },
      // distractor: 12 * 15 (15 min/hr instead of 60)
      { id: 'B', text: '180' },
      // distractor: arithmetic slip
      { id: 'C', text: '1,500' },
      { id: 'D', text: '1,800' },
    ],
    correctAnswer: 'D',
    explanation: '**SAT Pattern: Rate × Time = Total**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $2.5$ hr $= 150$ min. Pages $= 12 \\times 150 = 1800$.\n\n**The Full Solution:**\nConvert time to minutes: $2.5 \\text{ hr} \\times 60 = 150 \\text{ min}$.\nMultiply by rate: $12 \\text{ pages/min} \\times 150 \\text{ min} = 1800 \\text{ pages}$.\n\nVerification: in $1$ hour, the printer produces $12 \\times 60 = 720$ pages. In $2.5$ hours: $720 \\times 2.5 = 1800$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong units" — uses hours as minutes ($12 \\times 2.5 = 30$).\n* Choice B: "wrong base" — uses $15$ min per hour.\n* Choice C: "off-by-one" — arithmetic slip.\n\n**Test Day Takeaway:** Rate problems: ALWAYS convert units to match the rate first. $12$ pages/min and $2.5$ hr don\'t cancel; convert hours to minutes (or vice versa).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'rate-time-total',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-058',
    domain: 'problem-solving',
    skills: ['rate-conversion'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A cyclist rides at 14 miles per hour. A jogger runs at 6 miles per hour. If they start at the same point and travel in the same direction, how far apart (in miles) are they after 45 minutes?',
    choices: [
      // distractor: gives the jogger\'s distance
      { id: 'A', text: '4.5' },
      { id: 'B', text: '6.0' },
      // distractor: difference times wrong fraction of hour
      { id: 'C', text: '8.0' },
      // distractor: gives the cyclist\'s distance
      { id: 'D', text: '15.0' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Relative Rate (Same Direction)**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Gap rate $= 14 - 6 = 8$ mph. Time $= 0.75$ hr. Gap $= 8 \\times 0.75 = 6$ mi.\n\n**The Full Solution:**\nWhen two objects travel in the same direction, the gap grows at the DIFFERENCE of their speeds:\nrelative speed $= 14 - 6 = 8$ mph.\nTime: $45$ min $= 0.75$ hr.\nGap distance: $8 \\text{ mph} \\times 0.75 \\text{ hr} = 6$ mi.\n\nAlternatively, compute each distance separately:\n* Cyclist: $14 \\times 0.75 = 10.5$ mi\n* Jogger: $6 \\times 0.75 = 4.5$ mi\n* Gap: $10.5 - 4.5 = 6$ mi.\n\nVerification: both methods give $6$ mi \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — gives the jogger\'s distance only.\n* Choice C: "wrong formula" — uses relative speed but wrong time.\n* Choice D: "wrong base" — gives the cyclist\'s distance (or $14$ times $\\approx 1$ hr).\n\n**Test Day Takeaway:** Same direction: relative speed = DIFFERENCE. Opposite direction: relative speed = SUM. The "gap" between objects grows at the relative speed.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'relative-rate',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-059',
    domain: 'problem-solving',
    skills: ['rate-conversion'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A conveyor belt moves 250 boxes per hour. If a shift lasts 7 hours and 30 minutes, how many boxes are moved in one shift?',
    correctAnswer: '1875',
    explanation: '**SAT Pattern: Rate × Time = Total (Mixed Units)**\n\n**The correct answer is $1875$.**\n\n**The Fast Way (~10s):** $7.5 \\times 250 = 1875$.\n\n**The Full Solution:**\nConvert time to hours: $7 \\text{ hr } 30 \\text{ min} = 7.5$ hr.\nMultiply by rate: $250 \\text{ boxes/hr} \\times 7.5 \\text{ hr} = 1875$ boxes.\n\nVerification: $250 \\times 7 = 1750$ boxes in $7$ hr. $250 \\times 0.5 = 125$ in $30$ min. Total $= 1875$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using $7.3$ instead of $7.5$ (mistaking $30$ min for $0.3$ hr).\n* Using $7 \\times 30 = 210$ as the time in minutes (gives a wrong result).\n* Reporting $7.5$ or $250$ alone.\n\n**Test Day Takeaway:** $30$ minutes $= 0.5$ hours (NOT $0.3$ or $0.30$). Convert hr:min to a decimal hours: minutes / 60.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'rate-time-total',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-060',
    domain: 'problem-solving',
    skills: ['rate-conversion'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A drip irrigation system delivers water at a rate of 2.4 liters per hour. A garden bed needs 0.5 liters of water per plant, and there are 36 plants. How many hours will it take to water all the plants?',
    choices: [
      // distractor: 18 / something else
      { id: 'A', text: '5' },
      { id: 'B', text: '7.5' },
      // distractor: forgets to divide by rate
      { id: 'C', text: '15' },
      // distractor: 18 / 2.4 with arithmetic slip
      { id: 'D', text: '18' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Total / Rate = Time**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Total water $= 36 \\times 0.5 = 18$ L. Time $= 18 / 2.4 = 7.5$ hr.\n\n**The Full Solution:**\nStep 1: Total water needed $= 36 \\text{ plants} \\times 0.5 \\text{ L/plant} = 18$ L.\nStep 2: Time $= \\frac{\\text{volume}}{\\text{rate}} = \\frac{18 \\text{ L}}{2.4 \\text{ L/hr}} = 7.5$ hr.\n\nVerification: in $7.5$ hr, the system delivers $2.4 \\times 7.5 = 18$ L \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — uses a different rate or volume.\n* Choice C: "wrong formula" — fails to divide by the rate properly.\n* Choice D: "stops one step early" — gives the total water (in liters) instead of the time.\n\n**Test Day Takeaway:** Time = total / rate. Always check units cancel: $\\frac{\\text{L}}{\\text{L/hr}} = \\text{L} \\times \\frac{\\text{hr}}{\\text{L}} = \\text{hr}$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'rate-total-time',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── Additional coverage: more percent-change ───────────────────
  {
    id: 'bank-ps-061',
    domain: 'problem-solving',
    skills: ['percent-change'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A coffee shop sold 320 lattes last week and 400 lattes this week. What is the percent increase?',
    choices: [
      // distractor: divides by 400 (new value)
      { id: 'A', text: '20%' },
      { id: 'B', text: '25%' },
      // distractor: arithmetic slip
      { id: 'C', text: '30%' },
      // distractor: gives the raw difference as percent
      { id: 'D', text: '80%' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Percent Increase Basic**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\frac{400 - 320}{320} = \\frac{80}{320} = 0.25 = 25\\%$.\n\n**The Full Solution:**\nIncrease $= 400 - 320 = 80$.\nPercent increase $= \\frac{80}{320} \\times 100 = 25\\%$.\n\nVerification: $320 \\times 1.25 = 400$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — divides by $400$ (the NEW value): $\\frac{80}{400} = 20\\%$.\n* Choice C: "off-by-one" — arithmetic error.\n* Choice D: "wrong base" — uses $80$ as the percent directly (forgets to divide).\n\n**Test Day Takeaway:** $\\frac{80}{320} = \\frac{1}{4} = 25\\%$. Simplify before computing — $\\frac{80}{320}$ reduces cleanly.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'percent-change-basic',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── Additional coverage: more calculate-mean ───────────────────
  {
    id: 'bank-ps-062',
    domain: 'problem-solving',
    skills: ['calculate-mean'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Five friends compare their monthly utility bills. The mean is $\\$120$ and the median is $\\$115$. If the friend with the highest bill ($\\$180$) moves out, what is the new mean of the remaining four friends\' bills?',
    choices: [
      // distractor: arithmetic slip
      { id: 'A', text: '$\\$100$' },
      { id: 'B', text: '$\\$105$' },
      // distractor: arithmetic slip
      { id: 'C', text: '$\\$108$' },
      // distractor: gives the original median
      { id: 'D', text: '$\\$115$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Mean After Removal**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Original sum $= 5 \\times 120 = 600$. After removing $\\$180$: $600 - 180 = 420$. New mean $= 420 / 4 = 105$.\n\n**The Full Solution:**\nOriginal sum $= 5 \\times 120 = 600$.\nRemove the friend whose bill was $180$: new sum $= 600 - 180 = 420$.\nNew count: $4$.\nNew mean: $420 / 4 = \\$105$.\n\nVerification: $4 \\times 105 = 420 = 600 - 180$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — arithmetic slip producing $\\$100$.\n* Choice C: "off-by-one" — arithmetic slip.\n* Choice D: "wrong base" — gives the original median.\n\n**Test Day Takeaway:** For mean-removal problems: original sum minus removed value, divided by new count. The median is irrelevant unless you\'re also tracking changes to the median.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'mean-removal',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── Additional coverage: more find-median ──────────────────────
  {
    id: 'bank-ps-063',
    domain: 'problem-solving',
    skills: ['find-median'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A coach records sprint times (seconds) for 10 athletes: 11.2, 12.5, 10.8, 13.1, 11.7, 12.0, 10.5, 11.9, 12.3, 11.4. What is the median sprint time?',
    correctAnswer: '11.8',
    explanation: '**SAT Pattern: Median of Even Decimal Set**\n\n**The correct answer is $11.8$.**\n\n**The Fast Way (~25s):** Sort and average the middle two. Sorted: $10.5, 10.8, 11.2, 11.4, 11.7, 11.9, 12.0, 12.3, 12.5, 13.1$. Middle: $11.7$ and $11.9$. Median $= 11.8$.\n\n**The Full Solution:**\nSort ascending: $10.5, 10.8, 11.2, 11.4, 11.7, 11.9, 12.0, 12.3, 12.5, 13.1$.\nFor $n = 10$ (even), median = average of $5$th and $6$th values: $\\frac{11.7 + 11.9}{2} = \\frac{23.6}{2} = 11.8$.\n\nVerification: $5$ times below $11.8$, $5$ times above — balanced \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Skipping the sort step.\n* Using only one middle value (would be $11.7$ or $11.9$).\n* Reporting $11.7$ or $11.9$ alone.\n\n**Test Day Takeaway:** Even-count median = average of middle two. Always sort first; even a small set is worth re-ordering for clarity.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'median-even-decimal',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── Additional coverage: more unit-conversion ──────────────────
  {
    id: 'bank-ps-064',
    domain: 'problem-solving',
    skills: ['unit-conversion'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'An athlete swims 2,000 meters in practice. How many kilometers is this?',
    choices: [
      // distractor: off by a factor of 10
      { id: 'A', text: '0.2' },
      { id: 'B', text: '2' },
      // distractor: off by a factor of 10 the other way
      { id: 'C', text: '20' },
      // distractor: doesn\'t convert at all
      { id: 'D', text: '200' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Meters to Kilometers**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $2000 / 1000 = 2$ km.\n\n**The Full Solution:**\nConvert using $1$ km $= 1000$ m:\n$2000 \\text{ m} \\times \\frac{1 \\text{ km}}{1000 \\text{ m}} = 2 \\text{ km}$.\n\nVerification: $2$ km $= 2000$ m \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — divides by $10000$.\n* Choice C: "off-by-one" — divides by $100$.\n* Choice D: "stops one step early" — leaves as meters.\n\n**Test Day Takeaway:** SI prefixes by factor of $1000$: milli/centi/...$\\to$ base $\\to$ kilo. Always divide by $1000$ from meters to km, multiply from km to meters.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'single-unit-conversion',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── Mixed / cross-skill questions ──────────────────────────────
  {
    id: 'bank-ps-065',
    domain: 'problem-solving',
    skills: ['percent-of-value', 'percent-change'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A store had 500 items in stock. On Monday, 20% of the items were sold. On Tuesday, 15% of the remaining items were sold. How many items are left after Tuesday?',
    choices: [
      // distractor: subtracts 35% from 500 (additive instead of multiplicative)
      { id: 'A', text: '325' },
      { id: 'B', text: '340' },
      // distractor: arithmetic slip
      { id: 'C', text: '350' },
      // distractor: arithmetic slip
      { id: 'D', text: '375' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Sequential Percent Removal**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** After Monday: $500 \\times 0.80 = 400$. After Tuesday: $400 \\times 0.85 = 340$.\n\n**The Full Solution:**\nMonday: $20\\%$ sold, so $80\\%$ remain. $500 \\times 0.80 = 400$ items left.\nTuesday: $15\\%$ of the remaining sold, so $85\\%$ remain. $400 \\times 0.85 = 340$ items left.\n\nAlternatively: net multiplier $= 0.80 \\times 0.85 = 0.68$, so $500 \\times 0.68 = 340$.\n\nVerification: total sold $= 500 - 340 = 160$. Monday sold $= 100$, Tuesday sold $= 60$. $100 + 60 = 160$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — subtracts $35\\%$ directly: $500 \\times 0.65 = 325$, but $35\\%$ is from adding $20 + 15$, which doesn\'t apply.\n* Choice C: "off-by-one" — arithmetic slip near correct.\n* Choice D: "off-by-one" — arithmetic slip.\n\n**Test Day Takeaway:** Successive percent removals MULTIPLY (use retention multipliers $1 - p$), don\'t add. Track running totals.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'successive-percent-application',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-066',
    domain: 'problem-solving',
    skills: ['calculate-mean', 'find-median'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Data set: $4, 7, 10, 10, 14$. Which statement is correct?',
    choices: [
      // distractor: would require an outlier above median
      { id: 'A', text: 'Mean > Median' },
      { id: 'B', text: 'Mean < Median' },
      // distractor: would require symmetric distribution
      { id: 'C', text: 'Mean = Median' },
      // distractor: irrelevant to comparison
      { id: 'D', text: 'Mean = Mode' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Mean-Median Comparison**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Mean $= (4+7+10+10+14)/5 = 45/5 = 9$. Median $= 10$. So mean ($9$) < median ($10$).\n\n**The Full Solution:**\nMean: $\\frac{4+7+10+10+14}{5} = \\frac{45}{5} = 9$.\nMedian: middle value of sorted set $\\{4, 7, 10, 10, 14\\}$ = $10$.\n\nMean ($9$) < median ($10$). The set is left-skewed (the $4$ pulls the mean below the median).\n\nVerification: removing the outlier $4$ gives $\\{7, 10, 10, 14\\}$, mean $= 10.25$, median $= 10$ — closer match \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — would require a high outlier (right skew).\n* Choice C: "wrong formula" — true only for symmetric distributions.\n* Choice D: "wrong base" — mode is $10$, but mean is $9$, so they\'re different.\n\n**Test Day Takeaway:** Left-skewed (low outlier): mean < median. Right-skewed (high outlier): mean > median. Symmetric: mean ≈ median.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'mean-median-comparison',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-067',
    domain: 'problem-solving',
    skills: ['unit-conversion', 'rate-conversion'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'A plane flies at 540 miles per hour. If 1 mile ≈ 1.6 km, what is the plane\'s speed in kilometers per minute?',
    correctAnswer: '14.4',
    explanation: '**SAT Pattern: Chained Rate Conversion**\n\n**The correct answer is $14.4$.**\n\n**The Fast Way (~20s):** $540 \\times 1.6 = 864$ km/hr. $864 / 60 = 14.4$ km/min.\n\n**The Full Solution:**\nChain the conversions:\n$\\frac{540 \\text{ mi}}{1 \\text{ hr}} \\times \\frac{1.6 \\text{ km}}{1 \\text{ mi}} \\times \\frac{1 \\text{ hr}}{60 \\text{ min}} = \\frac{540 \\times 1.6}{60} = \\frac{864}{60} = 14.4 \\text{ km/min}$.\n\nVerification: $14.4 \\times 60 = 864$ km/hr. $864 / 1.6 = 540$ mph \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Stopping at km/hr without converting to per minute.\n* Multiplying by $60$ instead of dividing.\n* Reporting $864$ (km/hr, not km/min).\n\n**Test Day Takeaway:** Two-step conversions: do them in order, with units cancelling. Always check the final unit matches what the question asks.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'chained-rate-conversion',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-068',
    domain: 'problem-solving',
    skills: ['percent-word-problems', 'weighted-mean'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A salesperson earns a 5% commission on the first $\\$10{,}000$ in sales and 8% on all sales above $\\$10{,}000$. If total sales are $\\$22{,}000$, what is the total commission?',
    choices: [
      // distractor: takes 5% of 22000 ($1100)
      { id: 'A', text: '$\\$1{,}100$' },
      { id: 'B', text: '$\\$1{,}460$' },
      // distractor: takes 8% of 22000 ($1760)
      { id: 'C', text: '$\\$1{,}760$' },
      // distractor: arithmetic slip near correct
      { id: 'D', text: '$\\$1{,}860$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Tiered Commission**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** First $\\$10k$: $10000 \\times 0.05 = \\$500$. Remaining $\\$12k$: $12000 \\times 0.08 = \\$960$. Total: $\\$1460$.\n\n**The Full Solution:**\nCommission has two tiers:\n* First $\\$10{,}000$: $5\\%$ commission $= 10000 \\times 0.05 = \\$500$.\n* Remaining $\\$22{,}000 - \\$10{,}000 = \\$12{,}000$: $8\\%$ commission $= 12000 \\times 0.08 = \\$960$.\nTotal: $\\$500 + \\$960 = \\$1460$.\n\nVerification: weighted commission rate $= \\frac{1460}{22000} \\approx 6.6\\%$, which is between $5\\%$ and $8\\%$ as expected for a blended rate \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — applies $5\\%$ to all $\\$22k$.\n* Choice C: "wrong base" — applies $8\\%$ to all $\\$22k$.\n* Choice D: "off-by-one" — arithmetic slip ($1760 + 100 = 1860$ via wrong logic).\n\n**Test Day Takeaway:** Tiered commission problems: split the total at the threshold, apply the appropriate rate to each tier, then sum. Don\'t use a single blended rate.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'tiered-percent',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── Remaining easy questions ───────────────────────────────────
  {
    id: 'bank-ps-069',
    domain: 'problem-solving',
    skills: ['percent-of-value'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'A jar contains 160 marbles. If 25% are blue, how many blue marbles are there?',
    correctAnswer: '40',
    explanation: '**SAT Pattern: Percent of Total**\n\n**The correct answer is $40$.**\n\n**The Fast Way (~5s):** $160 \\times 0.25 = 40$.\n\n**The Full Solution:**\nFinding $25\\%$ of $160$:\n$160 \\times 0.25 = 40$.\n\nAlternatively: $25\\% = \\frac{1}{4}$, so $\\frac{160}{4} = 40$.\n\nVerification: $40 \\times 4 = 160$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using $0.025$ instead of $0.25$ — gives $4$.\n* Using $2.5$ instead of $0.25$ — gives $400$.\n* Reporting $120$ (the complement, $75\\%$).\n\n**Test Day Takeaway:** $25\\% = \\frac{1}{4}$. $10\\% = \\frac{1}{10}$. $50\\% = \\frac{1}{2}$. Recognize these for quick mental math.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'percent-of-total',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-070',
    domain: 'problem-solving',
    skills: ['calculate-mean'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A farmer harvested 48, 52, 45, and 55 bushels of apples over four days. What is the mean daily harvest?',
    choices: [
      // distractor: 48 is the lowest, not the mean
      { id: 'A', text: '48' },
      { id: 'B', text: '50' },
      // distractor: arithmetic slip
      { id: 'C', text: '51' },
      // distractor: 52 (one of the values)
      { id: 'D', text: '52' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Mean of Four Values**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Sum $= 48 + 52 + 45 + 55 = 200$. Mean $= 200 / 4 = 50$.\n\n**The Full Solution:**\nSum: $48 + 52 + 45 + 55 = 200$.\nCount: $4$.\nMean: $200 / 4 = 50$.\n\nVerification: pair-sum: $(48 + 52) + (45 + 55) = 100 + 100 = 200$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — uses the lowest value as the mean.\n* Choice C: "off-by-one" — arithmetic slip.\n* Choice D: "wrong base" — uses one of the data values.\n\n**Test Day Takeaway:** Mean = sum / count. Pair-summing speeds up arithmetic: look for pairs that sum to the same value.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'basic-mean',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-071',
    domain: 'problem-solving',
    skills: ['find-median'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A student\'s test scores are: 88, 76, 95, 82, 91. What is the median score?',
    choices: [
      // distractor: 2nd value when sorted
      { id: 'A', text: '82' },
      // distractor: gives the mean
      { id: 'B', text: '86.4' },
      { id: 'C', text: '88' },
      // distractor: gives 4th value when sorted
      { id: 'D', text: '91' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Median of Sorted Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Sort: $76, 82, 88, 91, 95$. Middle (3rd) value: $88$.\n\n**The Full Solution:**\nSort ascending: $76, 82, 88, 91, 95$.\nFor odd count $n = 5$, median = middle value (position $\\frac{5+1}{2} = 3$): $88$.\n\nVerification: $2$ values below ($76, 82$) and $2$ above ($91, 95$) — balanced \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — uses the $2$nd value.\n* Choice B: "wrong formula" — computes the MEAN ($88+76+95+82+91 = 432$, $432/5 = 86.4$) instead of the median.\n* Choice D: "off-by-one" — uses the $4$th value.\n\n**Test Day Takeaway:** Median = middle of sorted list. Don\'t confuse with mean (average). For odd count, it\'s a single value; for even count, average the two middle ones.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'median-odd-set',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-072',
    domain: 'problem-solving',
    skills: ['rate-conversion'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A hose fills a pool at a rate of 15 gallons per minute. How many gallons does it deliver in 20 minutes?',
    choices: [
      // distractor: uses 10 gal/min
      { id: 'A', text: '150' },
      // distractor: uses 10 min instead of 20
      { id: 'B', text: '200' },
      { id: 'C', text: '300' },
      // distractor: arithmetic slip
      { id: 'D', text: '350' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Rate × Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $15 \\times 20 = 300$ gallons.\n\n**The Full Solution:**\nTotal volume = rate × time = $15 \\text{ gal/min} \\times 20 \\text{ min} = 300 \\text{ gal}$.\n\nVerification: $300 / 20 = 15$ gal/min \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — uses $10$ gal/min.\n* Choice B: "wrong base" — uses $10$ min.\n* Choice D: "off-by-one" — arithmetic slip.\n\n**Test Day Takeaway:** Total = rate × time when units match. Same unit for time on both sides ($15$ gal/MIN × $20$ MIN = $300$ gal).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'rate-time-total',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-073',
    domain: 'problem-solving',
    skills: ['percent-change'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Membership at a gym went from 1,250 in March to 1,100 in April. What is the percent decrease?',
    choices: [
      // distractor: uses 125 as numerator
      { id: 'A', text: '10%' },
      { id: 'B', text: '12%' },
      // distractor: divides by new value (1100)
      { id: 'C', text: '13.6%' },
      // distractor: arithmetic slip
      { id: 'D', text: '15%' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Percent Decrease**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Decrease $= 150$. $\\frac{150}{1250} = 0.12 = 12\\%$.\n\n**The Full Solution:**\nDecrease $= 1250 - 1100 = 150$.\nPercent decrease $= \\frac{150}{1250} \\times 100$.\nSimplify: $\\frac{150}{1250} = \\frac{3}{25} = 0.12$.\nPercent: $12\\%$.\n\nVerification: $1250 \\times 0.88 = 1100$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — uses $125$ as the change instead of $150$.\n* Choice C: "applies the inverse operation" — divides by $1100$ (new value).\n* Choice D: "wrong base" — uses a different denominator.\n\n**Test Day Takeaway:** $\\frac{150}{1250} = \\frac{3}{25} = \\frac{12}{100} = 12\\%$. Simplify fractions when computing percent change — speeds the arithmetic.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'percent-change-basic',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-074',
    domain: 'problem-solving',
    skills: ['weighted-mean'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'A student scores 92 on an exam worth 40% of the grade, 78 on a project worth 35%, and 88 on a presentation worth 25%. What is the student\'s final weighted grade?',
    correctAnswer: '86.1',
    explanation: '**SAT Pattern: Weighted Average Final Grade**\n\n**The correct answer is $86.1$.**\n\n**The Fast Way (~25s):** $0.40(92) + 0.35(78) + 0.25(88) = 36.8 + 27.3 + 22.0 = 86.1$.\n\n**The Full Solution:**\nMultiply each score by its weight (as a decimal), then sum:\n$0.40 \\times 92 = 36.8$\n$0.35 \\times 78 = 27.3$\n$0.25 \\times 88 = 22.0$\nTotal: $36.8 + 27.3 + 22.0 = 86.1$.\n\nVerification: weights sum to $1.00$ ($0.40 + 0.35 + 0.25 = 1.00$). $86.1$ is between the lowest score $78$ and the highest $92$, weighted toward the largest categories \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Simple average: $\\frac{92+78+88}{3} = 86$ (close but coincidentally similar; not the right method).\n* Forgetting to add all three weighted scores.\n* Using percent values directly (e.g., $40 \\times 92$ instead of $0.40 \\times 92$).\n\n**Test Day Takeaway:** Weighted average: each value multiplied by its weight, then summed. Check that weights total $100\\%$ ($1.00$) before computing.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'weighted-average',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-ps-075',
    domain: 'problem-solving',
    skills: ['successive-percent-change', 'percent-word-problems'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A laptop\'s price is increased by 25% and then the new price is decreased by 20%. What is the net percent change from the original price?',
    choices: [
      { id: 'A', text: '0% (no change)' },
      // distractor: 25 - 20 = 5
      { id: 'B', text: '5% increase' },
      // distractor: opposite sign of B
      { id: 'C', text: '5% decrease' },
      // distractor: arithmetic slip
      { id: 'D', text: '10% increase' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Net Effect of Successive Changes**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $1.25 \\times 0.80 = 1.00$ — exactly the original price.\n\n**The Full Solution:**\nMultipliers:\n* $+25\\%$: $1.25$\n* $-20\\%$: $0.80$\nNet multiplier: $1.25 \\times 0.80 = 1.00$.\n\nA multiplier of exactly $1.00$ means the price returns to its original value (no net change).\n\nVerification: try $\\$100$. After $+25\\%$: $\\$125$. After $-20\\%$: $\\$125 \\times 0.80 = \\$100$. Back to original \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — adds $25\\% - 20\\% = 5\\%$ without compounding.\n* Choice C: "sign error" — opposite sign.\n* Choice D: "wrong formula" — arithmetic slip.\n\n**Test Day Takeaway:** $+p\\%$ then $-q\\%$: net multiplier $(1 + p)(1 - q)$. When this equals $1$, the change cancels. $25\\% \\times 20\\%$ pair is a famous SAT trick: $1.25 \\times 0.80 = 1.00$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'successive-percent-net',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // === MEAN FROM LIST (8 questions) — Phase 2 batch 2 priority pattern ===
  // 11x in 12 tests. Covers: sum-from-mean, add-value-find-new-value,
  // remove-value-find-new-mean, replace-value, combined-list weighting.
  // SAT Pattern kebab matches test bundle: 'mean-from-list'.
  {
    id: 'bank-ps-076',
    domain: 'problem-solving',
    skills: ['calculate-mean'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'The mean of a list of $6$ values is $14$. What is the sum of all $6$ values?',
    correctAnswer: '84',
    explanation: '**SAT Pattern: Mean from List**\n\n**The correct answer is $84$.**\n\n**The Fast Way (~5s):** Sum $= \\text{mean} \\times \\text{count} = 14 \\times 6 = 84$.\n\n**The Full Solution:**\nThe mean of $n$ values is defined as $\\bar{x} = \\dfrac{\\text{sum}}{n}$, so the sum equals $\\bar{x} \\cdot n$.\nHere: $\\text{sum} = 14 \\times 6 = 84$.\n\nVerification: any list of $6$ values that sums to $84$ has mean $14$ — for example $\\{14, 14, 14, 14, 14, 14\\}$ or $\\{10, 12, 14, 14, 16, 18\\}$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Dividing the mean by the count (would give a meaningless small number).\n* Squaring the count or otherwise applying a wrong formula.\n\n**Test Day Takeaway:** Sum $= $ mean $\\times $ count. This formula is the foundation for every "add/remove/replace a value" mean problem on the SAT.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'mean-from-list',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-077',
    domain: 'problem-solving',
    skills: ['calculate-mean'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'The mean of a list of $8$ numbers is $12$. A $9$th number is added to the list and the new mean is $13$. What is the value of the $9$th number?',
    correctAnswer: '21',
    explanation: '**SAT Pattern: Mean from List**\n\n**The correct answer is $21$.**\n\n**The Fast Way (~15s):** Old sum $= 8 \\times 12 = 96$. New sum $= 9 \\times 13 = 117$. Added value $= 117 - 96 = 21$.\n\n**The Full Solution:**\nOld total: $8 \\times 12 = 96$.\nNew total: $9 \\times 13 = 117$.\nThe added value is the difference: $117 - 96 = 21$.\n\nVerification: $\\dfrac{96 + 21}{9} = \\dfrac{117}{9} = 13$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting the new mean ($13$) as the added value.\n* Subtracting means directly ($13 - 12 = 1$) — this ignores the count change.\n\n**Test Day Takeaway:** When a value is added to or removed from a list, work with SUMS, not means. Old sum vs new sum reveals the added/removed value directly.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'mean-from-list',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-078',
    domain: 'problem-solving',
    skills: ['calculate-mean'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A student\'s mean score on $5$ tests is $78$. After taking a $6$th test, the student\'s mean across all $6$ tests is $80$. What is the score on the $6$th test?',
    choices: [
      // distractor: new mean reported as new test score
      { id: 'A', text: '$80$' },
      // distractor: averages the two means
      { id: 'B', text: '$79$' },
      // distractor: old mean reported
      { id: 'C', text: '$78$' },
      { id: 'D', text: '$90$' }
    ],
    correctAnswer: 'D',
    explanation: '**SAT Pattern: Mean from List**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Old sum $= 5 \\times 78 = 390$. New sum $= 6 \\times 80 = 480$. $6$th test score $= 480 - 390 = 90$.\n\n**The Full Solution:**\nOld total across $5$ tests: $5 \\times 78 = 390$.\nNew total across $6$ tests: $6 \\times 80 = 480$.\nThe $6$th test\'s score is the change in the total: $480 - 390 = 90$.\n\nVerification: $\\dfrac{390 + 90}{6} = \\dfrac{480}{6} = 80$ \\checkmark. To lift a mean of $78$ over $5$ tests to $80$ over $6$ tests requires a $6$th test well above $80$ — specifically $90$.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — reports the new mean ($80$) as if the $6$th test equals the new mean.\n* Choice B: "wrong formula" — averages the two means ($\\dfrac{78 + 80}{2} = 79$).\n* Choice C: "stops one step early" — reports the old mean.\n\n**Test Day Takeaway:** To LIFT the mean, the new value must be ABOVE the new mean by enough to pull up all existing values. Intuition check: a $90$ on the $6$th test pulls $5$ tests of $78$ up by $2$ each, exactly $80$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'mean-from-list',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-079',
    domain: 'problem-solving',
    skills: ['calculate-mean'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The mean of a list of $7$ values is $24$. If the value $30$ is removed from the list, what is the mean of the remaining $6$ values?',
    choices: [
      { id: 'A', text: '$23$' },
      // distractor: ignores removal, just divides 168 by 6
      { id: 'B', text: '$28$' },
      // distractor: subtracts 30 from mean directly
      { id: 'C', text: '$-6$' },
      // distractor: averages 24 and 30
      { id: 'D', text: '$27$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Mean from List**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Original sum $= 7 \\times 24 = 168$. After removing $30$: new sum $= 138$. New mean $= 138 / 6 = 23$.\n\n**The Full Solution:**\nOld total: $7 \\times 24 = 168$.\nRemove $30$: new total $= 168 - 30 = 138$.\nNew mean: $138 / 6 = 23$.\n\nVerification: removing a value ($30$) ABOVE the current mean ($24$) should LOWER the mean — and $23 < 24$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — divides the original total $168$ by the new count $6$, forgetting to remove $30$ from the sum: $168 / 6 = 28$.\n* Choice C: "wrong formula" — subtracts $30$ from the mean directly ($24 - 30 = -6$), confusing value subtraction with mean change.\n* Choice D: "wrong formula" — averages $24$ and $30$.\n\n**Test Day Takeaway:** Removing a value ABOVE the mean lowers the mean. Removing a value BELOW the mean raises it. Always work with SUMS and let the arithmetic flow.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'mean-from-list',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-080',
    domain: 'problem-solving',
    skills: ['calculate-mean'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'The mean of a list of $10$ values is $50$. If a value of $35$ in the list is replaced by a new value of $65$, what is the new mean of the $10$ values?',
    correctAnswer: '53',
    explanation: '**SAT Pattern: Mean from List**\n\n**The correct answer is $53$.**\n\n**The Fast Way (~10s):** Replacing $35$ with $65$ increases the sum by $30$. The list still has $10$ values, so the mean increases by $30/10 = 3$. New mean $= 50 + 3 = 53$.\n\n**The Full Solution:**\nOld total: $10 \\times 50 = 500$.\nReplacement changes the sum by $+(65 - 35) = +30$.\nNew total: $500 + 30 = 530$.\nNew mean: $530 / 10 = 53$.\n\nVerification: the count is unchanged at $10$; only the sum shifted by $+30$, so the mean shifts by $+3$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Treating it like an add OR remove (changing the count).\n* Averaging the old value and the new value.\n\n**Test Day Takeaway:** When a single value is REPLACED, the count is unchanged and the mean shifts by (new value $-$ old value) $/$ count.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'mean-from-list',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-081',
    domain: 'problem-solving',
    skills: ['calculate-mean'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'The mean of a list of $n$ values is $16$. When $3$ additional values, each equal to $24$, are added to the list, the new mean of all $n + 3$ values is $18$. What is the value of $n$?',
    correctAnswer: '9',
    explanation: '**SAT Pattern: Mean from List**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~20s):** Set up: $\\dfrac{16n + 3(24)}{n + 3} = 18 \\Rightarrow 16n + 72 = 18(n + 3) = 18n + 54 \\Rightarrow 2n = 18 \\Rightarrow n = 9$.\n\n**The Full Solution:**\nOld sum: $16n$.\nNew sum: $16n + 3(24) = 16n + 72$.\nNew count: $n + 3$.\nNew mean equation: $\\dfrac{16n + 72}{n + 3} = 18$.\n\nMultiply both sides by $n + 3$:\n$16n + 72 = 18(n + 3) = 18n + 54$.\n\nSolve: $72 - 54 = 18n - 16n \\Rightarrow 18 = 2n \\Rightarrow n = 9$.\n\nVerification: original list of $9$ values with mean $16$ has sum $144$. Add $3 \\times 24 = 72$: new sum $= 216$, new count $= 12$, new mean $= 216 / 12 = 18$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Solving the original mean equation incorrectly (e.g., distributing $18$ to one term only).\n* Treating the $3$ added values as having their own separate mean rather than three individual values.\n\n**Test Day Takeaway:** When the count is unknown, set up the new-mean equation in terms of $n$, clear the fraction, then solve the resulting linear equation.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'mean-from-list',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-082',
    domain: 'problem-solving',
    skills: ['weighted-mean', 'calculate-mean'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'List $A$ consists of $12$ values with a mean of $30$. List $B$ consists of $8$ values with a mean of $40$. What is the mean of the combined list of $20$ values?',
    choices: [
      { id: 'A', text: '$34$' },
      // distractor: simple average of the two means
      { id: 'B', text: '$35$' },
      // distractor: weighted toward B incorrectly
      { id: 'C', text: '$36$' },
      // distractor: incorrect weighting (uses B's count for A and vice versa)
      { id: 'D', text: '$33$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Mean from List**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Sum of $A$: $12 \\times 30 = 360$. Sum of $B$: $8 \\times 40 = 320$. Combined: $\\dfrac{360 + 320}{20} = \\dfrac{680}{20} = 34$.\n\n**The Full Solution:**\nMean of a combined list is the TOTAL sum divided by the TOTAL count, not the average of the two means.\n* Sum of List $A$: $12 \\times 30 = 360$.\n* Sum of List $B$: $8 \\times 40 = 320$.\n* Combined sum: $360 + 320 = 680$.\n* Combined count: $12 + 8 = 20$.\n* Combined mean: $\\dfrac{680}{20} = 34$.\n\nIntuition: List $A$ has more values, so its mean of $30$ pulls the combined mean closer to $30$ than to $40$. The result $34$ is closer to $30$ than to $40$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — averages the two means ($\\dfrac{30 + 40}{2} = 35$), ignoring that List $A$ has more values.\n* Choice C: "applies the inverse operation" — weights TOWARD the larger mean instead of the larger count.\n* Choice D: "wrong base" — swaps the counts when weighting.\n\n**Test Day Takeaway:** Combined mean $= \\dfrac{\\text{sum}_A + \\text{sum}_B}{\\text{count}_A + \\text{count}_B}$. The combined mean is pulled TOWARD the mean of the LARGER group, not the larger value.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'mean-from-list',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-083',
    domain: 'problem-solving',
    skills: ['calculate-mean'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'The mean of a list of $n$ values is $50$. When a single value of $80$ is added, the mean of the new $n + 1$ values is $51$. What is the value of $n$?',
    correctAnswer: '29',
    explanation: '**SAT Pattern: Mean from List**\n\n**The correct answer is $29$.**\n\n**The Fast Way (~20s):** $\\dfrac{50n + 80}{n + 1} = 51 \\Rightarrow 50n + 80 = 51n + 51 \\Rightarrow n = 29$.\n\n**The Full Solution:**\nOld sum: $50n$.\nNew sum after adding $80$: $50n + 80$.\nNew count: $n + 1$.\n\nNew mean equation: $\\dfrac{50n + 80}{n + 1} = 51$.\n\nMultiply both sides by $n + 1$:\n$50n + 80 = 51(n + 1) = 51n + 51$.\n\nSolve: $80 - 51 = 51n - 50n \\Rightarrow n = 29$.\n\nVerification: original list of $29$ values with mean $50$ has sum $1450$. Add $80$: new sum $= 1530$, new count $= 30$, new mean $= 1530 / 30 = 51$ \\checkmark.\n\nAlternative intuition: the added value $80$ is $29$ above the new mean $51$ (i.e., $80 - 51 = 29$). It "pulls up" the mean by $1$, meaning it provided $29$ units of "lift" to compensate for $n$ values each needing $+1$ lift. Hence $n = 29$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to multiply $51$ by $(n + 1)$ — leaving only $51n$.\n* Mishandling the $+80$ as a multiplier instead of an added constant.\n\n**Test Day Takeaway:** When solving for $n$ in mean-change problems, the structure is always $\\dfrac{\\text{old sum} + \\text{new value}}{n + 1} = \\text{new mean}$. Clear the fraction first, then solve linearly.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'mean-from-list',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },

  // === RESIDUAL (8 questions) — Phase 2 batch 2 priority pattern ===
  // 11x in 12 tests. Covers: compute-residual, sign-interpretation,
  // find-actual-from-predicted, find-x-from-residual, compare-residuals.
  // SAT Pattern kebab matches test bundle: 'residual'.
  {
    id: 'bank-ps-084',
    domain: 'problem-solving',
    skills: ['calculate-mean', 'slope-intercept-form'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'The scatterplot below has line of best fit $\\hat{y} = 2x + 1$. The highlighted data point has coordinates $(5, 13)$. What is the residual at that data point?',
    diagram: { type: 'scatterplot', params: {
      points: [[1,4],[2,6],[3,6],[4,10],[6,12],[7,16],[8,16],[9,20],[10,22]],
      xMin: 0, xMax: 10, yMin: 0, yMax: 24,
      xGridStep: 1, yGridStep: 4, xLabelStep: 2, yLabelStep: 8,
      bestFitLine: { slope: 2, intercept: 1 },
      highlightPoint: [5, 13], highlightLabel: '(5, 13)', showResidual: true,
    } },
    correctAnswer: '2',
    explanation: '**SAT Pattern: Residual**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~10s):** Predicted: $\\hat{y} = 2(5) + 1 = 11$. Residual $= y - \\hat{y} = 13 - 11 = 2$.\n\n**The Full Solution:**\nA residual measures how far an actual data point lies ABOVE ($+$) or BELOW ($-$) the line of best fit at the same $x$:\n$$\\text{residual} = y_{\\text{actual}} - \\hat{y}_{\\text{predicted}}$$\n\nAt $x = 5$: predicted $\\hat{y} = 2(5) + 1 = 11$.\nActual $y = 13$.\nResidual $= 13 - 11 = 2$ (positive — the point lies $2$ units ABOVE the line).\n\nVerification: $13 - 11 = 2$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting the predicted value $11$ instead of the residual.\n* Computing $\\hat{y} - y$ instead of $y - \\hat{y}$ (sign would flip).\n\n**Test Day Takeaway:** Residual $= $ actual $-$ predicted. Positive means above the line; negative means below.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'residual',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-085',
    domain: 'problem-solving',
    skills: ['calculate-mean', 'slope-intercept-form'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'The scatterplot below has line of best fit $\\hat{y} = -x + 10$. The highlighted data point has coordinates $(3, 5)$. What is the residual at that data point?',
    diagram: { type: 'scatterplot', params: {
      points: [[1,8],[2,9],[4,7],[5,5],[6,5],[7,4],[8,3],[9,2],[10,1]],
      xMin: 0, xMax: 10, yMin: 0, yMax: 12,
      xGridStep: 1, yGridStep: 2, xLabelStep: 2, yLabelStep: 2,
      bestFitLine: { slope: -1, intercept: 10 },
      highlightPoint: [3, 5], highlightLabel: '(3, 5)', showResidual: true,
    } },
    correctAnswer: '-2',
    explanation: '**SAT Pattern: Residual**\n\n**The correct answer is $-2$.**\n\n**The Fast Way (~10s):** Predicted: $\\hat{y} = -3 + 10 = 7$. Residual $= y - \\hat{y} = 5 - 7 = -2$.\n\n**The Full Solution:**\nAt $x = 3$: predicted $\\hat{y} = -(3) + 10 = 7$.\nActual $y = 5$.\nResidual $= 5 - 7 = -2$.\n\nThe negative sign means the actual point lies $2$ units BELOW the line of best fit at $x = 3$.\n\nVerification: $5 - 7 = -2$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $2$ (the magnitude) and dropping the sign.\n* Sign error when evaluating $-x + 10$ at $x = 3$ — careful: $-3 + 10 = 7$, not $13$.\n\n**Test Day Takeaway:** Residual carries a SIGN. Below the line $\\Rightarrow$ negative residual. Above the line $\\Rightarrow$ positive residual. Always carry the sign through.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'residual',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-086',
    domain: 'problem-solving',
    skills: ['calculate-mean', 'slope-intercept-form'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The scatterplot below has line of best fit $\\hat{y} = 1.5x + 4$. The highlighted data point has coordinates $(8, 14)$. What is the residual at that data point?',
    diagram: { type: 'scatterplot', params: {
      points: [[1,5],[2,8],[3,8],[4,11],[5,11],[6,14],[7,13],[9,18],[10,18],[11,21]],
      xMin: 0, xMax: 12, yMin: 0, yMax: 24,
      xGridStep: 1, yGridStep: 2, xLabelStep: 2, yLabelStep: 4,
      bestFitLine: { slope: 1.5, intercept: 4 },
      highlightPoint: [8, 14], highlightLabel: '(8, 14)', showResidual: true,
    } },
    choices: [
      { id: 'A', text: '$-2$' },
      // distractor: sign error (predicted - actual)
      { id: 'B', text: '$2$' },
      // distractor: negative predicted value
      { id: 'C', text: '$-16$' },
      // distractor: reports actual y
      { id: 'D', text: '$14$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Predicted: $\\hat{y} = 1.5(8) + 4 = 16$. Residual $= 14 - 16 = -2$.\n\n**The Full Solution:**\nPredicted value at $x = 8$:\n$\\hat{y} = 1.5(8) + 4 = 12 + 4 = 16$.\n\nResidual:\n$y - \\hat{y} = 14 - 16 = -2$.\n\nThe negative sign indicates the actual data point lies $2$ units BELOW the line of best fit at $x = 8$.\n\nVerification: $1.5 \\times 8 = 12$, $12 + 4 = 16$, $14 - 16 = -2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — computes $\\hat{y} - y = 16 - 14 = 2$ (formula flipped).\n* Choice C: "wrong formula" — gives $-\\hat{y}$ instead of $y - \\hat{y}$.\n* Choice D: "stops one step early" — reports the actual $y$-value instead of the residual.\n\n**Test Day Takeaway:** Compute the predicted value FIRST using the line equation, then subtract: residual $= y - \\hat{y}$. Pay attention to the sign — it tells you above vs below the line.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'residual',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-087',
    domain: 'problem-solving',
    skills: ['calculate-mean', 'slope-intercept-form'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A data point in a scatterplot has a residual of $+5$ relative to the line of best fit. Which of the following best describes the relationship between the data point and the line of best fit at that $x$-value?',
    // Illustrative scatter — the line equation is unimportant; what matters is
    // that the highlighted point sits exactly +5 units above the best-fit line
    // so the student can see the residual visually.
    diagram: { type: 'scatterplot', params: {
      points: [[0,4],[1,3],[2,5],[3,5],[4,8],[6,10],[7,9],[8,12],[9,13],[10,12],[11,15]],
      xMin: 0, xMax: 12, yMin: 0, yMax: 16,
      xGridStep: 1, yGridStep: 1, xLabelStep: 2, yLabelStep: 4,
      bestFitLine: { slope: 1, intercept: 3 },
      highlightPoint: [5, 13], highlightLabel: 'residual = +5', showResidual: true,
    } },
    choices: [
      { id: 'A', text: 'The actual $y$-value is $5$ units above the line\'s prediction at that $x$.' },
      // distractor: sign-reversed interpretation
      { id: 'B', text: 'The actual $y$-value is $5$ units below the line\'s prediction at that $x$.' },
      // distractor: misreads residual as x-coordinate
      { id: 'C', text: 'The $x$-coordinate of the data point is $5$.' },
      // distractor: misreads residual as slope
      { id: 'D', text: 'The slope of the line of best fit is $5$.' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Residual $= y - \\hat{y}$. A POSITIVE residual means actual $y$ exceeds the predicted $\\hat{y}$ — the point lies ABOVE the line.\n\n**The Full Solution:**\nThe residual is defined as:\n$$\\text{residual} = y_{\\text{actual}} - \\hat{y}_{\\text{predicted}}$$\n\nSign interpretation:\n* Positive residual $\\Rightarrow$ actual $>$ predicted $\\Rightarrow$ point is ABOVE the line.\n* Negative residual $\\Rightarrow$ actual $<$ predicted $\\Rightarrow$ point is BELOW the line.\n* Zero residual $\\Rightarrow$ actual $=$ predicted $\\Rightarrow$ point is ON the line.\n\nA residual of $+5$ means the actual $y$-value is $5$ units ABOVE the line\'s prediction at that $x$.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — describes a NEGATIVE residual.\n* Choice C: "wrong formula" — confuses the residual with the $x$-coordinate.\n* Choice D: "wrong formula" — confuses the residual with a slope value.\n\n**Test Day Takeaway:** Sign of residual = position relative to the line. Positive = above. Negative = below. Zero = on.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'residual',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-088',
    domain: 'problem-solving',
    skills: ['calculate-mean', 'slope-intercept-form'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'The scatterplot below has line of best fit $\\hat{y} = 0.75x + 2.5$. The highlighted data point has coordinates $(6, 8)$. What is the residual at that data point?',
    diagram: { type: 'scatterplot', params: {
      points: [[1,4],[2,3],[3,5],[4,6],[5,7],[7,7],[8,9],[9,8],[10,11],[11,10]],
      xMin: 0, xMax: 12, yMin: 0, yMax: 12,
      xGridStep: 1, yGridStep: 1, xLabelStep: 2, yLabelStep: 2,
      bestFitLine: { slope: 0.75, intercept: 2.5 },
      highlightPoint: [6, 8], highlightLabel: '(6, 8)', showResidual: true,
    } },
    correctAnswer: '1',
    explanation: '**SAT Pattern: Residual**\n\n**The correct answer is $1$.**\n\n**The Fast Way (~15s):** Predicted: $\\hat{y} = 0.75(6) + 2.5 = 4.5 + 2.5 = 7$. Residual $= 8 - 7 = 1$.\n\n**The Full Solution:**\nAt $x = 6$:\n$\\hat{y} = 0.75 \\times 6 + 2.5 = 4.5 + 2.5 = 7$.\n\nResidual:\n$y - \\hat{y} = 8 - 7 = 1$.\n\nThe positive residual means the actual data point lies $1$ unit above the line at $x = 6$.\n\nVerification: $0.75 \\times 6 = 4.5$, $4.5 + 2.5 = 7$, $8 - 7 = 1$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Decimal slip in $0.75 \\times 6$ (some students compute $0.45$ by misplacing the decimal).\n* Adding instead of multiplying: $0.75 + 6 = 6.75$ is wrong.\n* Forgetting the intercept $2.5$ entirely.\n\n**Test Day Takeaway:** With decimal slope coefficients, slow down on the multiplication step. Pencil-write the intermediate value before adding the intercept.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'residual',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-089',
    domain: 'problem-solving',
    skills: ['calculate-mean', 'slope-intercept-form'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'For a data point in a scatterplot, the line of best fit predicts a $y$-value of $18$ at that $x$-coordinate. If the residual at that data point is $-3$, what is the actual $y$-coordinate of the data point?',
    // Illustrative scatter. The line at the highlight's x-coordinate sits at
    // y = 18 (the predicted value the stem mentions). The highlighted point
    // is 3 units below, matching residual = -3. No label so it doesn't spoil
    // the answer (which is the actual y-value).
    diagram: { type: 'scatterplot', params: {
      points: [[1,5],[2,9],[3,9],[4,13],[5,15],[6,17],[8,21],[9,21],[10,25],[11,27]],
      xMin: 0, xMax: 12, yMin: 0, yMax: 30,
      xGridStep: 1, yGridStep: 2, xLabelStep: 2, yLabelStep: 6,
      bestFitLine: { slope: 2, intercept: 4 },
      highlightPoint: [7, 15], showResidual: true,
    } },
    correctAnswer: '15',
    explanation: '**SAT Pattern: Residual**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~10s):** Residual $= y - \\hat{y}$, so $y = \\hat{y} + \\text{residual} = 18 + (-3) = 15$.\n\n**The Full Solution:**\nRearrange the residual formula to solve for $y$:\n$$\\text{residual} = y - \\hat{y} \\Rightarrow y = \\hat{y} + \\text{residual}$$\n\nSubstitute: $y = 18 + (-3) = 15$.\n\nVerification: at this $x$, predicted is $18$, actual is $15$, so residual $= 15 - 18 = -3$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Adding $3$ instead of subtracting (drops the negative sign on the residual).\n* Reporting $-3$ or $18$ directly.\n\n**Test Day Takeaway:** From the formula residual $= y - \\hat{y}$, the actual $y$ equals predicted $+$ residual. Carry the residual\'s sign into the addition.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'residual',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-090',
    domain: 'problem-solving',
    skills: ['calculate-mean', 'slope-intercept-form'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'The line of best fit for a scatterplot is $\\hat{y} = 2x + 5$. A data point has actual $y$-value $17$ and a residual of $-2$. What is the $x$-coordinate of the data point?',
    // Scatter along the line ŷ = 2x + 5 named in the stem. The highlighted
    // point is at y = 17 with a residual of -2 (so 2 units below the line at
    // its x). No label — the question asks for the x-coordinate, so labeling
    // the point would spoil the answer; the student reads x off the axis.
    diagram: { type: 'scatterplot', params: {
      points: [[1,6],[2,8],[3,12],[4,12],[5,16],[6,18],[8,22],[9,22],[10,26],[11,27]],
      xMin: 0, xMax: 12, yMin: 0, yMax: 30,
      xGridStep: 1, yGridStep: 2, xLabelStep: 2, yLabelStep: 6,
      bestFitLine: { slope: 2, intercept: 5 },
      highlightPoint: [7, 17], showResidual: true,
    } },
    correctAnswer: '7',
    explanation: '**SAT Pattern: Residual**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~20s):** Residual $= y - \\hat{y}$, so $\\hat{y} = y - \\text{residual} = 17 - (-2) = 19$. Solve $2x + 5 = 19 \\Rightarrow x = 7$.\n\n**The Full Solution:**\nStep 1: from the residual, find $\\hat{y}$.\n$\\text{residual} = y - \\hat{y} \\Rightarrow \\hat{y} = y - \\text{residual} = 17 - (-2) = 19$.\n\nStep 2: solve the line equation for $x$.\n$\\hat{y} = 2x + 5 = 19$\n$2x = 14$\n$x = 7$.\n\nVerification: at $x = 7$, $\\hat{y} = 2(7) + 5 = 19$, and residual $= 17 - 19 = -2$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing $\\hat{y}$ as $17 + (-2) = 15$ instead of $17 - (-2) = 19$ (sign mistake on the rearrangement).\n* Solving $2x + 5 = 17$ (using actual $y$ instead of predicted) — gives $x = 6$, off by $1$.\n\n**Test Day Takeaway:** Backward from a residual: find $\\hat{y}$ via $y - \\text{residual}$, then plug into the line equation. Watch the sign on the residual when subtracting.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'residual',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-091',
    domain: 'problem-solving',
    skills: ['calculate-mean', 'slope-intercept-form'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The scatterplot below shows four data points along with the line of best fit $\\hat{y} = 3x + 2$. Which data point has the GREATEST absolute residual relative to the line of best fit?\n\n| $x$ | $y$ |\n|---|---|\n| $2$ | $10$ |\n| $4$ | $13$ |\n| $6$ | $25$ |\n| $8$ | $22$ |',
    diagram: { type: 'scatterplot', params: {
      points: [[2,10],[4,13],[6,25],[8,22]],
      xMin: 0, xMax: 10, yMin: 0, yMax: 30,
      xGridStep: 1, yGridStep: 2, xLabelStep: 2, yLabelStep: 5,
      bestFitLine: { slope: 3, intercept: 2 },
    } },
    choices: [
      // distractor: smallest |residual| = 1 at (4, 13)
      { id: 'A', text: '$(2, 10)$' },
      // distractor: |residual| = 1 (smallest)
      { id: 'B', text: '$(4, 13)$' },
      { id: 'C', text: '$(6, 25)$' },
      // distractor: |residual| = 4 (second largest, sign trap)
      { id: 'D', text: '$(8, 22)$' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Residual**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Compute each residual $y - (3x + 2)$:\n* $(2, 10)$: $10 - 8 = +2$\n* $(4, 13)$: $13 - 14 = -1$\n* $(6, 25)$: $25 - 20 = +5$ ← largest $|$residual$|$\n* $(8, 22)$: $22 - 26 = -4$\n\n**The Full Solution:**\nFor each data point, compute the predicted value $\\hat{y} = 3x + 2$ and then the residual $y - \\hat{y}$:\n\n| $x$ | $y$ | $\\hat{y} = 3x + 2$ | Residual | $\\|$Residual$\\|$ |\n|---|---|---|---|---|\n| $2$ | $10$ | $8$ | $+2$ | $2$ |\n| $4$ | $13$ | $14$ | $-1$ | $1$ |\n| $6$ | $25$ | $20$ | $+5$ | **$5$** |\n| $8$ | $22$ | $26$ | $-4$ | $4$ |\n\nThe greatest absolute residual is $5$, at $(6, 25)$.\n\nVerification: $(6, 25)$ lies $5$ units above the line at $x = 6$; $(8, 22)$ lies $4$ units below the line at $x = 8$. $5 > 4$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — only computes $(2, 10)$ and picks the FIRST positive residual seen.\n* Choice B: "wrong base" — picks the SMALLEST $|$residual$|$ instead of largest.\n* Choice D: "applies the inverse operation" — picks the largest NEGATIVE residual ($-4$) without comparing to the positive $+5$.\n\n**Test Day Takeaway:** Compute every residual, take absolute values, then compare. The sign tells you above/below, but absolute value tells you how FAR.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'residual',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },

  // === MARGIN OF ERROR (8 questions) — Phase 2 batch 2 priority pattern ===
  // 11x in 12 tests. Covers: compute-MOE-from-formula, interpret-confidence-
  // interval, halve-MOE-via-sample-size, scope-of-inference, compare-intervals,
  // solve-for-n inversely. SAT Pattern kebab matches: 'margin-of-error'.
  {
    id: 'bank-ps-092',
    domain: 'problem-solving',
    skills: ['margin-of-error'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'A researcher surveyed $100$ randomly selected adults and approximates the margin of error using the quick estimate $\\text{MOE} \\approx \\dfrac{1}{\\sqrt{n}}$ at a $95\\%$ confidence level. What is the approximate margin of error, expressed as a percent?',
    correctAnswer: '10',
    explanation: '**SAT Pattern: Margin of Error**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~5s):** $\\dfrac{1}{\\sqrt{100}} = \\dfrac{1}{10} = 0.10 = 10\\%$.\n\n**The Full Solution:**\nUsing the quick estimate $\\text{MOE} \\approx \\dfrac{1}{\\sqrt{n}}$ with $n = 100$:\n$\\text{MOE} \\approx \\dfrac{1}{\\sqrt{100}} = \\dfrac{1}{10} = 0.10$.\n\nAs a percent: $0.10 \\times 100\\% = 10\\%$.\n\nVerification: $\\sqrt{100} = 10$ and $\\dfrac{1}{10}$ is exactly $0.10$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $0.10$ as the answer (the question asks for a percent).\n* Computing $\\sqrt{100} = 100$ instead of $10$ (slip on perfect squares).\n\n**Test Day Takeaway:** The shortcut $\\text{MOE} \\approx \\dfrac{1}{\\sqrt{n}}$ gives a useful approximation for $95\\%$ confidence intervals on proportions. Memorize the perfect-square sample sizes: $n = 100, 400, 625, 1600, 2500$ give clean MOE values.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'margin-of-error',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-093',
    domain: 'problem-solving',
    skills: ['margin-of-error'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A researcher surveyed a random sample of $400$ voters in a city and reported that $55\\%$ of them support a new parking ordinance, with a margin of error of $\\pm 4\\%$ at a $95\\%$ confidence level. Which of the following is the BEST interpretation of the survey results?',
    choices: [
      // distractor: reports sample percent as if certain about it
      { id: 'A', text: 'Exactly $55\\%$ of all voters in the city support the ordinance.' },
      { id: 'B', text: 'We are $95\\%$ confident that the proportion of voters in the city who support the ordinance is between $51\\%$ and $59\\%$.' },
      // distractor: misreads MOE as variance/extremes
      { id: 'C', text: 'Between $4\\%$ and $55\\%$ of voters support the ordinance.' },
      // distractor: applies to wrong population (all voters everywhere)
      { id: 'D', text: 'We are $95\\%$ confident that between $51\\%$ and $59\\%$ of all voters nationwide support the ordinance.' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** A $95\\%$ confidence interval of $55\\% \\pm 4\\%$ means we are $95\\%$ confident the TRUE population proportion (of the SAMPLED population — voters in the city) lies between $51\\%$ and $59\\%$.\n\n**The Full Solution:**\nA confidence interval has three components that must all appear in the interpretation:\n1. The CENTER: the sample proportion $55\\%$.\n2. The MARGIN: $\\pm 4\\%$, so the interval is $[51\\%, 59\\%]$.\n3. The CONFIDENCE: $95\\%$ certainty.\n4. The POPULATION: the population that was SAMPLED — voters in this city.\n\nCombining: "We are $95\\%$ confident that the proportion of voters in the city is between $51\\%$ and $59\\%$."\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — treats the sample proportion as a certain population value. Sampling always has uncertainty.\n* Choice C: "wrong formula" — misinterprets MOE as a lower bound. MOE is centered on the sample value.\n* Choice D: "scope shift" — extends conclusions to a population that was NOT sampled (all voters nationwide). A city sample only supports inference about the city.\n\n**Test Day Takeaway:** Always check three things in a CI interpretation: (1) interval centered on the sample value $\\pm$ MOE, (2) the confidence level stated explicitly, (3) the SAMPLED population (not a broader one).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'margin-of-error',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-094',
    domain: 'problem-solving',
    skills: ['margin-of-error'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A study uses the quick estimate $\\text{MOE} \\approx \\dfrac{1}{\\sqrt{n}}$ for a $95\\%$ confidence interval. If $n = 1{,}600$, what is the approximate margin of error, expressed as a percent?',
    correctAnswer: '2.5',
    explanation: '**SAT Pattern: Margin of Error**\n\n**The correct answer is $2.5$.**\n\n**The Fast Way (~10s):** $\\sqrt{1600} = 40$, so $\\text{MOE} \\approx \\dfrac{1}{40} = 0.025 = 2.5\\%$.\n\n**The Full Solution:**\n$\\text{MOE} \\approx \\dfrac{1}{\\sqrt{n}} = \\dfrac{1}{\\sqrt{1{,}600}}$.\n\n$\\sqrt{1{,}600} = \\sqrt{16 \\cdot 100} = 4 \\cdot 10 = 40$.\n\n$\\text{MOE} \\approx \\dfrac{1}{40} = 0.025$.\n\nAs a percent: $0.025 \\times 100 = 2.5\\%$.\n\nVerification: doubling the sample from $400$ ($\\sqrt{n} = 20$, MOE $= 5\\%$) to $1{,}600$ ($\\sqrt{n} = 40$, MOE $= 2.5\\%$) halves the MOE — consistent with the $\\dfrac{1}{\\sqrt{n}}$ relationship \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing $\\sqrt{1{,}600}$ as $400$ instead of $40$.\n* Reporting $0.025$ without converting to a percent.\n\n**Test Day Takeaway:** Quadrupling the sample size HALVES the margin of error because MOE $\\propto \\dfrac{1}{\\sqrt{n}}$ and $\\sqrt{4n} = 2\\sqrt{n}$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'margin-of-error',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-095',
    domain: 'problem-solving',
    skills: ['margin-of-error'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A polling organization surveyed $400$ voters and reported a margin of error of $\\pm 5\\%$ at a $95\\%$ confidence level. The pollster wants to redo the survey at the same confidence level but cut the margin of error in half (to $\\pm 2.5\\%$). What sample size must the pollster use?',
    choices: [
      // distractor: doubles the sample (treats MOE linearly)
      { id: 'A', text: '$800$' },
      { id: 'B', text: '$1{,}600$' },
      // distractor: halves the sample (inverse direction)
      { id: 'C', text: '$200$' },
      // distractor: applies a 10× factor
      { id: 'D', text: '$4{,}000$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $\\text{MOE} \\propto \\dfrac{1}{\\sqrt{n}}$. To halve MOE, multiply $n$ by $4$: $4 \\times 400 = 1{,}600$.\n\n**The Full Solution:**\nThe margin of error scales as $\\text{MOE} \\propto \\dfrac{1}{\\sqrt{n}}$.\n\nTo halve the MOE, we need $\\sqrt{n_{\\text{new}}} = 2 \\sqrt{n_{\\text{old}}}$, which means $n_{\\text{new}} = 4 \\cdot n_{\\text{old}}$.\n\n$n_{\\text{new}} = 4 \\times 400 = 1{,}600$.\n\nVerification: at $n = 400$, $\\sqrt{n} = 20$, $\\text{MOE} \\approx \\dfrac{1}{20} = 5\\%$. At $n = 1{,}600$, $\\sqrt{n} = 40$, $\\text{MOE} \\approx \\dfrac{1}{40} = 2.5\\%$. Exactly half \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — doubles the sample, treating MOE linearly. But MOE scales with the SQUARE ROOT of $n$.\n* Choice C: "applies the inverse operation" — halves the sample (would DOUBLE the MOE).\n* Choice D: "wrong base" — multiplies by an arbitrary $10$ factor.\n\n**Test Day Takeaway:** Cut MOE in HALF $\\Rightarrow$ multiply sample size by $4$. Cut MOE to one-third $\\Rightarrow$ multiply sample size by $9$. The factor is always the SQUARE of the MOE reduction.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'margin-of-error',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-096',
    domain: 'problem-solving',
    skills: ['margin-of-error'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A researcher surveys a random sample of $600$ first-year college students at a single university and finds that $42\\%$ have a part-time job. The reported margin of error at $95\\%$ confidence is $\\pm 3\\%$. Which of the following is the most appropriate population for which this estimate is valid?',
    choices: [
      // distractor: too broad — all college students nationwide
      { id: 'A', text: 'All college students in the country.' },
      // distractor: subset that wasn\'t sampled — older students
      { id: 'B', text: 'Older college students at the university.' },
      { id: 'C', text: 'First-year students at that university.' },
      // distractor: outside university — all young adults
      { id: 'D', text: 'All young adults in the city.' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Margin of Error**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The sample was first-year students at one university. Confidence intervals only support inference about the population that was SAMPLED.\n\n**The Full Solution:**\nA confidence interval describes plausible values for the proportion in the population that was actually SAMPLED. The sample here:\n* Was drawn from FIRST-YEAR students.\n* Was drawn from ONE university.\n\nGeneralizing beyond either restriction (to older students, to other universities, to non-students) is NOT supported by the data.\n\nThe most appropriate population is exactly the sampled one: first-year students at that university.\n\n**Why the wrong answers are tempting:**\n* Choice A: "scope shift" — extends inference to ALL college students nationwide; the sample was at one university.\n* Choice B: "wrong base" — extends to older students who were NOT sampled.\n* Choice D: "scope shift" — extends to non-students.\n\n**Test Day Takeaway:** A confidence interval is only valid for the EXACT population that was sampled. Generalization beyond it is statistically unsupported.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'margin-of-error',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-097',
    domain: 'problem-solving',
    skills: ['margin-of-error'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A pollster surveys two independent random samples of city residents about a tax measure. Sample $A$ reports support of $52\\%$ with margin of error $\\pm 3\\%$ at a $95\\%$ confidence level. Sample $B$ reports support of $58\\%$ with margin of error $\\pm 4\\%$ at the same confidence level. Which conclusion is best supported by the data?',
    choices: [
      // distractor: claims significant difference despite overlap
      { id: 'A', text: 'Support increased significantly between the two samples.' },
      { id: 'B', text: 'The confidence intervals overlap, so the data does not strongly demonstrate a difference in support.' },
      // distractor: confidently inverts the relationship
      { id: 'C', text: 'Support decreased significantly between the two samples.' },
      // distractor: misreads MOE as exact value
      { id: 'D', text: 'Exactly $52\\%$ and $58\\%$ support the measure in the two surveys.' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Sample $A$ CI: $[49\\%, 55\\%]$. Sample $B$ CI: $[54\\%, 62\\%]$. The intervals overlap at $54\\%$-$55\\%$, so the data does not provide strong evidence of a true difference.\n\n**The Full Solution:**\nCompute each confidence interval:\n* Sample $A$: $52\\% \\pm 3\\% \\Rightarrow [49\\%, 55\\%]$.\n* Sample $B$: $58\\% \\pm 4\\% \\Rightarrow [54\\%, 62\\%]$.\n\nCheck for overlap: the upper bound of $A$ ($55\\%$) is greater than the lower bound of $B$ ($54\\%$). So the intervals overlap in $[54\\%, 55\\%]$.\n\nWhen confidence intervals overlap, the data is consistent with both samples having the SAME underlying population proportion. We cannot conclude there is a real difference.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — claims significance despite overlap. Overlapping CIs are inconsistent with a confident "significant" claim.\n* Choice C: "sign error" — inverts the direction (and still ignores the overlap).\n* Choice D: "wrong formula" — treats the sample percent as the EXACT population proportion, ignoring the MOE entirely.\n\n**Test Day Takeaway:** Two confidence intervals OVERLAP $\\Rightarrow$ data does not strongly demonstrate a difference. Two confidence intervals are DISJOINT $\\Rightarrow$ data supports a difference.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'margin-of-error',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-098',
    domain: 'problem-solving',
    skills: ['margin-of-error'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'A researcher wants to keep the margin of error at most $2\\%$ in a $95\\%$ confidence interval for a proportion, using the quick estimate $\\text{MOE} \\approx \\dfrac{1}{\\sqrt{n}}$. What is the minimum sample size $n$ the researcher must use?',
    correctAnswer: '2500',
    explanation: '**SAT Pattern: Margin of Error**\n\n**The correct answer is $2{,}500$.**\n\n**The Fast Way (~15s):** $\\dfrac{1}{\\sqrt{n}} \\leq 0.02 \\Rightarrow \\sqrt{n} \\geq 50 \\Rightarrow n \\geq 2{,}500$.\n\n**The Full Solution:**\nSet up the inequality:\n$\\dfrac{1}{\\sqrt{n}} \\leq 0.02$.\n\nTake reciprocals (flips inequality because $0.02 > 0$):\n$\\sqrt{n} \\geq \\dfrac{1}{0.02} = 50$.\n\nSquare both sides:\n$n \\geq 50^2 = 2{,}500$.\n\nThe minimum sample size is $2{,}500$.\n\nVerification: at $n = 2{,}500$, $\\sqrt{n} = 50$, $\\text{MOE} \\approx \\dfrac{1}{50} = 0.02 = 2\\%$ — exactly at the threshold \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting to square: gives $n \\geq 50$ instead of $n \\geq 2{,}500$.\n* Treating the threshold as a percent in the wrong direction (e.g., $1/0.2 = 5$).\n\n**Test Day Takeaway:** To bound the MOE from above by $m$ (as a decimal), need $n \\geq \\dfrac{1}{m^2}$. Square the inverse of the target MOE.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'margin-of-error',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-099',
    domain: 'problem-solving',
    skills: ['margin-of-error'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A polling firm surveyed a random sample of $1{,}200$ likely voters and found that $0.52 \\pm 0.03$ supported a candidate at a $95\\%$ confidence level. Based on this confidence interval, which of the following conclusions is BEST supported?',
    choices: [
      // distractor: overstates certainty — exact majority
      { id: 'A', text: 'A majority of likely voters definitely support the candidate.' },
      { id: 'B', text: 'It is plausible (but not certain) that the true proportion of supporters is below $0.50$, so the data does not provide strong evidence of majority support.' },
      // distractor: confidently claims minority support
      { id: 'C', text: 'A minority of likely voters definitely support the candidate.' },
      // distractor: misreads CI bounds
      { id: 'D', text: 'We are $95\\%$ confident that the proportion of supporters lies between $0.03$ and $0.52$.' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** CI is $[0.49, 0.55]$. The lower bound $0.49 < 0.50$ means the true proportion could plausibly be below a majority. So the data does NOT strongly demonstrate majority support.\n\n**The Full Solution:**\nCompute the confidence interval:\n$0.52 \\pm 0.03 \\Rightarrow [0.49, 0.55]$.\n\nThe interval $[0.49, 0.55]$ includes values both BELOW and ABOVE the majority threshold of $0.50$. The true population proportion could plausibly be anywhere in this range.\n\nKey reasoning:\n* If the entire CI were ABOVE $0.50$, we could conclude majority support with high confidence.\n* If the entire CI were BELOW $0.50$, we could conclude lack of majority.\n* The CI straddling $0.50$ means we cannot confidently conclude either direction — the data is consistent with both majority and non-majority outcomes.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — treats the sample proportion ($0.52$) as a population certainty without considering the MOE.\n* Choice C: "sign error" — reverses the (already incorrect) certainty claim.\n* Choice D: "wrong formula" — confuses MOE with the lower bound of the interval. The CI is $0.52 - 0.03$ to $0.52 + 0.03$, not $0.03$ to $0.52$.\n\n**Test Day Takeaway:** When a CI straddles a key threshold (like $0.5$, $0$, or any null value), the data does NOT confidently demonstrate which side is correct. Look for whether the entire interval lies above or below the threshold.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'margin-of-error',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },

  // === CONDITIONAL PROBABILITY FROM TWO-WAY TABLE (8 questions) — Phase 2 batch 2 ===
  // 18x in 12 tests (highest-frequency Phase-2-batch-2 pattern). Covers:
  // simple-conditional, conditional-with-OR-grouping, percent-answer-conversion,
  // joint-vs-conditional, working-backward-from-marginals, sub-table conditional.
  // SAT Pattern kebab matches test bundle: 'conditional-probability-from-two-way-table'.
  {
    id: 'bank-ps-100',
    domain: 'problem-solving',
    skills: ['conditional-probability', 'two-way-table'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'The table below shows the pet ownership of residents of an apartment complex by apartment type.\n\n| | Has Pet | No Pet | Total |\n|---|---|---|---|\n| Studio | $15$ | $45$ | $60$ |\n| 1-Bedroom | $30$ | $30$ | $60$ |\n| Total | $45$ | $75$ | $120$ |\n\nIf a resident with a pet is selected at random, what is the probability that the resident lives in a Studio?',
    choices: [
      { id: 'A', text: '$\\dfrac{1}{3}$' },
      // distractor: uses grand total instead of pet-only total
      { id: 'B', text: '$\\dfrac{1}{8}$' },
      // distractor: inverse conditional P(pet | Studio)
      { id: 'C', text: '$\\dfrac{1}{4}$' },
      // distractor: takes Studio total / Pet total reversed
      { id: 'D', text: '$3$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Given pet $\\Rightarrow$ denominator is the pet column total ($45$). Studio AND pet $= 15$. $\\dfrac{15}{45} = \\dfrac{1}{3}$.\n\n**The Full Solution:**\n"Given a resident with a pet" restricts the universe to the $45$ pet-owners (the "Has Pet" column total).\nOf those $45$, $15$ live in studios.\n$P(\\text{Studio} \\mid \\text{Pet}) = \\dfrac{15}{45} = \\dfrac{1}{3}$.\n\nVerification: among the $45$ pet owners, $15/45 = 33.3\\%$ live in studios \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — uses the grand total $120$ as the denominator ($15/120 = 1/8$), which would give the JOINT probability $P(\\text{Studio AND Pet})$, not the conditional.\n* Choice C: "applies the inverse operation" — gives $P(\\text{Pet} \\mid \\text{Studio}) = 15/60 = 1/4$ (the reverse condition).\n* Choice D: "wrong formula" — inverts the fraction.\n\n**Test Day Takeaway:** "Given X" sets the DENOMINATOR equal to the X-total. The numerator is the cell where both conditions are met.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'conditional-probability-from-two-way-table',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-101',
    domain: 'problem-solving',
    skills: ['conditional-probability', 'two-way-table'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'The table below shows the lunch preference of students at a small school by grade.\n\n| | Sandwich | Salad | Total |\n|---|---|---|---|\n| 9th Grade | $40$ | $20$ | $60$ |\n| 10th Grade | $25$ | $35$ | $60$ |\n| 11th Grade | $35$ | $25$ | $60$ |\n| Total | $100$ | $80$ | $180$ |\n\nIf a $10$th-grade student is selected at random, what is the probability that the student prefers Salad? Express your answer as a decimal rounded to the nearest hundredth.',
    correctAnswer: '0.58',
    explanation: '**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**The correct answer is $0.58$ (also accept $0.59$).**\n\n**The Fast Way (~10s):** Given $10$th grader $\\Rightarrow$ denominator $= 60$. Of those, $35$ prefer salad. $35 / 60 = 0.5833 \\approx 0.58$.\n\n**The Full Solution:**\nThe condition "if a $10$th-grade student is selected" restricts the universe to the $60$ $10$th graders (the $10$th-grade row total).\nOf those $60$, the cell at $10$th-grade $\\cap$ Salad shows $35$ students.\n$P(\\text{Salad} \\mid 10\\text{th}) = \\dfrac{35}{60} = 0.5833\\overline{3} \\approx 0.58$.\n\nVerification: among $10$th graders, $35/60 = 58.3\\%$ prefer salad \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using the grand total $180$ as the denominator (gives joint probability $35/180 = 0.19$).\n* Reading the wrong cell (e.g., $25$ from $11$th-grade Salad).\n* Reporting as $35$ or $60$ directly.\n\n**Test Day Takeaway:** When the condition is a ROW category (like a specific grade), the denominator is that row\'s total. When the condition is a COLUMN category (like a preference), the denominator is that column\'s total.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'conditional-probability-from-two-way-table',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-102',
    domain: 'problem-solving',
    skills: ['conditional-probability', 'two-way-table'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The table shows the transportation method used by employees at a company to commute to work.\n\n| | Drives | Transit | Bikes | Total |\n|---|---|---|---|---|\n| Engineering | $20$ | $35$ | $15$ | $70$ |\n| Marketing | $25$ | $10$ | $5$ | $40$ |\n| Sales | $30$ | $15$ | $5$ | $50$ |\n| Total | $75$ | $60$ | $25$ | $160$ |\n\nIf one employee who uses Transit is selected at random, what is the probability that the employee works in Engineering?',
    choices: [
      // distractor: uses grand total instead of transit total
      { id: 'A', text: '$\\dfrac{35}{160}$' },
      { id: 'B', text: '$\\dfrac{35}{60}$' },
      // distractor: inverse conditional P(transit | engineering)
      { id: 'C', text: '$\\dfrac{35}{70}$' },
      // distractor: uses wrong cell
      { id: 'D', text: '$\\dfrac{20}{60}$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Given Transit $\\Rightarrow$ denominator $=$ Transit column total $= 60$. Engineering $\\cap$ Transit cell $= 35$. $P = 35/60$.\n\n**The Full Solution:**\nCondition: "employee who uses Transit." This restricts the universe to the $60$ Transit users (the Transit column total).\n\nWithin those $60$, $35$ work in Engineering (cell at Engineering $\\cap$ Transit).\n\n$P(\\text{Engineering} \\mid \\text{Transit}) = \\dfrac{35}{60}$.\n\nVerification: among the $60$ Transit users, $35$ are engineers — $35/60 \\approx 58.3\\%$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — uses the grand total $160$ in the denominator (gives the JOINT probability $P(\\text{Engineering AND Transit}) = 35/160$).\n* Choice C: "applies the inverse operation" — gives $P(\\text{Transit} \\mid \\text{Engineering}) = 35/70$ (reverses the condition).\n* Choice D: "wrong base" — uses the Engineering-Drives cell ($20$) instead of Engineering-Transit ($35$).\n\n**Test Day Takeaway:** $P(A \\mid B)$ has $B$\'s total in the denominator and the cell at $A \\cap B$ in the numerator. Always identify which is the condition vs the target.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'conditional-probability-from-two-way-table',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-103',
    domain: 'problem-solving',
    skills: ['conditional-probability', 'two-way-table'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The table shows the survey responses of $200$ students regarding their primary source of news.\n\n| | Print | Television | Online | Total |\n|---|---|---|---|---|\n| Freshmen | $5$ | $30$ | $45$ | $80$ |\n| Seniors | $10$ | $20$ | $90$ | $120$ |\n| Total | $15$ | $50$ | $135$ | $200$ |\n\nIf one student who gets news from Television OR Online is selected at random, what is the probability that the student is a Senior?',
    choices: [
      { id: 'A', text: '$\\dfrac{110}{185}$' },
      // distractor: uses grand total
      { id: 'B', text: '$\\dfrac{110}{200}$' },
      // distractor: uses Senior total
      { id: 'C', text: '$\\dfrac{110}{120}$' },
      // distractor: only counts Online (not Online OR TV)
      { id: 'D', text: '$\\dfrac{90}{135}$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** "Given TV or Online" $\\Rightarrow$ denominator $= 50 + 135 = 185$. Senior $\\cap$ (TV or Online) $= 20 + 90 = 110$. $P = 110/185$.\n\n**The Full Solution:**\nStep 1: identify the condition\'s universe. "Television OR Online" includes both columns:\n* Total in TV column: $50$.\n* Total in Online column: $135$.\n* Combined: $50 + 135 = 185$.\n\nStep 2: count Seniors within that universe:\n* Senior $\\cap$ TV: $20$.\n* Senior $\\cap$ Online: $90$.\n* Combined: $20 + 90 = 110$.\n\n$P(\\text{Senior} \\mid \\text{TV or Online}) = \\dfrac{110}{185}$.\n\nVerification: $110/185 \\approx 0.595 = 59.5\\%$ of TV-or-Online users are Seniors \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — uses the grand total $200$ instead of the conditioned subgroup total $185$.\n* Choice C: "applies the inverse operation" — gives $P(\\text{TV or Online} \\mid \\text{Senior}) = 110/120$ (reverses the condition).\n* Choice D: "stops one step early" — counts only the Online cell ($90/135$), ignoring TV.\n\n**Test Day Takeaway:** "X OR Y" in the condition $\\Rightarrow$ ADD the column (or row) totals to get the denominator. ADD the matching cells in the same rows (or columns) to get the numerator.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'conditional-probability-from-two-way-table',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-104',
    domain: 'problem-solving',
    skills: ['conditional-probability', 'two-way-table'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'The table below shows membership status by exercise frequency at a fitness center.\n\n| | Member | Non-Member | Total |\n|---|---|---|---|\n| Daily | $48$ | $12$ | $60$ |\n| Weekly | $30$ | $20$ | $50$ |\n| Total | $78$ | $32$ | $110$ |\n\nIf one Member is selected at random, what percent of Members exercise Daily? Round to the nearest whole percent.',
    correctAnswer: '62',
    explanation: '**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**The correct answer is $62$.**\n\n**The Fast Way (~10s):** Given Member $\\Rightarrow$ denominator $= 78$. Daily AND Member $= 48$. $48/78 \\approx 0.6154 \\approx 62\\%$.\n\n**The Full Solution:**\nThe condition "if one Member is selected" restricts the universe to the $78$ Members.\n\nOf those $78$, the cell at Daily $\\cap$ Member is $48$.\n\n$P(\\text{Daily} \\mid \\text{Member}) = \\dfrac{48}{78} = 0.6154... \\approx 62\\%$.\n\nVerification: among the $78$ Members, $48$ exercise daily — $48/78 = 61.5\\%$ rounds to $62\\%$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting the decimal $0.62$ when the answer should be a whole-number percent.\n* Using the grand total $110$ as the denominator ($48/110 = 43.6\\%$).\n* Reading the wrong cell (e.g., $30$ from Weekly-Member or $12$ from Daily-NonMember).\n\n**Test Day Takeaway:** "What percent of X is Y?" is the same conditional probability question asked in percent form. The X-total is the denominator; the X $\\cap$ Y cell is the numerator; convert to percent at the end.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'conditional-probability-from-two-way-table',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-105',
    domain: 'problem-solving',
    skills: ['conditional-probability', 'two-way-table'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The table below shows test outcomes for a group of patients.\n\n| | Positive | Negative | Total |\n|---|---|---|---|\n| Disease | $80$ | $20$ | $100$ |\n| No Disease | $40$ | $360$ | $400$ |\n| Total | $120$ | $380$ | $500$ |\n\nA patient is selected at random from this group. What is the probability that the patient has the disease AND tests positive?',
    choices: [
      { id: 'A', text: '$\\dfrac{80}{500}$' },
      // distractor: conditional P(disease | positive) instead of joint
      { id: 'B', text: '$\\dfrac{80}{120}$' },
      // distractor: conditional P(positive | disease) instead of joint
      { id: 'C', text: '$\\dfrac{80}{100}$' },
      // distractor: uses wrong cell
      { id: 'D', text: '$\\dfrac{40}{500}$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** JOINT probability $P(\\text{Disease AND Positive})$ uses the GRAND total $500$ as denominator. Disease $\\cap$ Positive cell $= 80$. $P = 80/500$.\n\n**The Full Solution:**\nThis question asks for the JOINT probability of two events (NOT the conditional probability).\n\n$P(\\text{Disease AND Positive}) = \\dfrac{\\text{cell at Disease} \\cap \\text{Positive}}{\\text{grand total}} = \\dfrac{80}{500}$.\n\nThis simplifies to $\\dfrac{4}{25} = 0.16 = 16\\%$ — the joint share of the entire group.\n\nContrast with conditional probabilities:\n* $P(\\text{Disease} \\mid \\text{Positive}) = \\dfrac{80}{120}$ (given positive test).\n* $P(\\text{Positive} \\mid \\text{Disease}) = \\dfrac{80}{100}$ (given disease — this is the test\'s sensitivity).\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — uses the Positive column total $120$, giving the CONDITIONAL $P(\\text{Disease} \\mid \\text{Positive})$.\n* Choice C: "wrong base" — uses the Disease row total $100$, giving the CONDITIONAL $P(\\text{Positive} \\mid \\text{Disease})$.\n* Choice D: "wrong base" — picks the wrong cell ($40$ from No-Disease-Positive).\n\n**Test Day Takeaway:** "A AND B" without conditioning $\\Rightarrow$ JOINT probability $\\Rightarrow$ grand total in denominator. "A given B" $\\Rightarrow$ CONDITIONAL $\\Rightarrow$ B\'s total in denominator. Listen for "given" vs "and".',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'conditional-probability-from-two-way-table',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-106',
    domain: 'problem-solving',
    skills: ['conditional-probability', 'two-way-table'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'A survey of $500$ employees recorded whether they took public transit and whether they worked remotely some days. Of the $500$, $200$ took public transit, $300$ worked remotely some days, and $80$ both took public transit AND worked remotely some days. If one employee who took public transit is selected at random, what is the probability that the employee did NOT work remotely on any day? Express your answer as a decimal rounded to the nearest hundredth.',
    correctAnswer: '0.6',
    explanation: '**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**The correct answer is $0.6$ (also accept $0.60$).**\n\n**The Fast Way (~25s):** Of $200$ transit users, $80$ also worked remotely. So $200 - 80 = 120$ took transit but did NOT work remotely. $P = 120/200 = 0.60$.\n\n**The Full Solution:**\nReconstruct the two-way table from the marginal totals:\n\n| | Transit | No Transit | Total |\n|---|---|---|---|\n| Remote some days | $80$ | $300 - 80 = 220$ | $300$ |\n| Never remote | $200 - 80 = 120$ | $500 - 300 - 80 = ...$ — actually compute the other cell directly | $200$ |\n| Total | $200$ | $300$ | $500$ |\n\nWe need $P(\\text{Never Remote} \\mid \\text{Transit})$:\n* Denominator: Transit users $= 200$.\n* Numerator: Transit AND Never Remote $= 200 - 80 = 120$.\n\n$P = \\dfrac{120}{200} = 0.6$.\n\nVerification: of the $200$ Transit users, $80$ worked remotely sometimes and $120$ never did. $120/200 = 60\\%$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using $300/500 = 0.6$ (the overall remote-work proportion — happens to match here, but for the wrong reason; SAT often uses traps where these numerically coincide).\n* Subtracting $80$ from $500$ instead of $200$ ($420/500 = 0.84$).\n* Reading the question as conditioning on "Never Remote" instead of "Transit".\n\n**Test Day Takeaway:** When the problem gives marginals + ONE joint cell, fill in the table mentally: subtract the joint from each marginal to get the other cells in the same row/column. Then apply the conditional formula.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'conditional-probability-from-two-way-table',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-107',
    domain: 'problem-solving',
    skills: ['conditional-probability', 'two-way-table'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The table below shows the academic standing of students by their participation in extracurricular activities.\n\n| | High Honors | Honors | No Honors | Total |\n|---|---|---|---|---|\n| Athletics | $20$ | $40$ | $10$ | $70$ |\n| Arts | $15$ | $25$ | $10$ | $50$ |\n| Both | $25$ | $20$ | $5$ | $50$ |\n| None | $5$ | $15$ | $30$ | $50$ |\n| Total | $65$ | $100$ | $55$ | $220$ |\n\nIf one student in Athletics OR Both is selected at random, what is the probability that the student earned High Honors?',
    choices: [
      { id: 'A', text: '$\\dfrac{45}{120}$' },
      // distractor: uses grand total
      { id: 'B', text: '$\\dfrac{45}{220}$' },
      // distractor: uses High Honors total
      { id: 'C', text: '$\\dfrac{45}{65}$' },
      // distractor: only Athletics row (misses Both)
      { id: 'D', text: '$\\dfrac{20}{70}$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Athletics row $+$ Both row totals $= 70 + 50 = 120$. High Honors in those rows $= 20 + 25 = 45$. $P = 45/120 = 3/8 = 0.375$.\n\n**The Full Solution:**\nCondition: "Athletics OR Both" combines two rows.\n* Row total for Athletics: $70$.\n* Row total for Both: $50$.\n* Combined denominator: $70 + 50 = 120$.\n\nWithin those rows, count High Honors:\n* High Honors $\\cap$ Athletics: $20$.\n* High Honors $\\cap$ Both: $25$.\n* Combined numerator: $20 + 25 = 45$.\n\n$P(\\text{High Honors} \\mid \\text{Athletics or Both}) = \\dfrac{45}{120} = \\dfrac{3}{8} = 0.375$.\n\nVerification: among the $120$ students in Athletics or Both, $45$ earned High Honors — $45/120 = 37.5\\%$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — uses the grand total $220$, giving the joint probability $P(\\text{Athletics or Both AND High Honors}) = 45/220 \\approx 20.5\\%$ (not what was asked).\n* Choice C: "applies the inverse operation" — gives $P(\\text{Athletics or Both} \\mid \\text{High Honors}) = 45/65$ (reverses the condition).\n* Choice D: "stops one step early" — uses Athletics only ($20$ over $70$) and ignores the Both row.\n\n**Test Day Takeaway:** When the condition combines TWO row labels with OR, you add BOTH row totals to the denominator and add the matching cells from BOTH rows to the numerator. Don\'t stop at the first row.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'conditional-probability-from-two-way-table',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },

  // === REVERSE-PERCENT (8 questions) — Phase 2 batch 3 priority pattern ===
  // 10x in 12 tests. Covers: basic "X is P% of total" reverse, discount
  // reverse (sale → original), growth reverse (new → old), multi-step reverse.
  // SAT Pattern kebab matches test bundle: 'reverse-percent'.
  {
    id: 'bank-ps-108',
    domain: 'problem-solving',
    skills: ['percent-word-problems', 'percent-of-value'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A cafeteria serves $240$ vegetarian meals on a given day, which is $30\\%$ of the total number of meals served that day. How many total meals were served?',
    choices: [
      // distractor: forward percent (240 × 0.30)
      { id: 'A', text: '$72$' },
      { id: 'B', text: '$800$' },
      // distractor: adds 30% (treats as 30% MORE)
      { id: 'C', text: '$312$' },
      // distractor: divides by 1/3 instead of 0.30
      { id: 'D', text: '$720$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Reverse-Percent**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Total $\\times 0.30 = 240$, so total $= \\dfrac{240}{0.30} = 800$.\n\n**The Full Solution:**\nLet $T$ be the total number of meals. The $240$ vegetarian meals are $30\\%$ of $T$:\n$0.30 \\cdot T = 240$.\n\nDivide both sides by $0.30$:\n$T = \\dfrac{240}{0.30} = 800$.\n\nVerification: $30\\%$ of $800 = 0.30 \\cdot 800 = 240$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — multiplies forward instead of dividing: $240 \\cdot 0.30 = 72$.\n* Choice C: "wrong formula" — adds $30\\%$ to $240$ instead of recognizing $240$ as the part: $240 \\cdot 1.30 = 312$.\n* Choice D: "wrong base" — divides by $\\dfrac{1}{3} = 0.333$ instead of $0.30$.\n\n**Test Day Takeaway:** When a percent of an UNKNOWN total is given, divide the known part by the percent (as a decimal) to recover the whole.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'reverse-percent',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-109',
    domain: 'problem-solving',
    skills: ['percent-word-problems', 'percent-of-value'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'A library contains $875$ fiction books, which is $35\\%$ of the total number of books in the library. How many books are in the library in total?',
    correctAnswer: '2500',
    explanation: '**SAT Pattern: Reverse-Percent**\n\n**The correct answer is $2{,}500$.**\n\n**The Fast Way (~10s):** Total $= \\dfrac{875}{0.35} = 2{,}500$.\n\n**The Full Solution:**\nLet $T$ be the total number of books. Then:\n$0.35 \\cdot T = 875$.\n\nDivide both sides by $0.35$:\n$T = \\dfrac{875}{0.35} = 2{,}500$.\n\nVerification: $35\\%$ of $2{,}500 = 0.35 \\cdot 2{,}500 = 875$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Multiplying $875 \\times 0.35 = 306.25$ (forward operation).\n* Dividing by $0.035$ instead of $0.35$ (decimal slip): would give $25{,}000$.\n* Reporting $625$ from $875 \\times 0.71$ or similar arithmetic slip.\n\n**Test Day Takeaway:** Reverse-percent = part $\\div$ rate. Always check that the result is LARGER than the given part when the rate is less than $100\\%$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'reverse-percent',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-110',
    domain: 'problem-solving',
    skills: ['percent-word-problems', 'percent-of-value'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'A factory produced $1{,}287$ widgets in a given month, which represents $55\\%$ of the company\'s monthly production target. What is the monthly production target, in number of widgets?',
    correctAnswer: '2340',
    explanation: '**SAT Pattern: Reverse-Percent**\n\n**The correct answer is $2{,}340$.**\n\n**The Fast Way (~10s):** Target $= \\dfrac{1{,}287}{0.55} = 2{,}340$.\n\n**The Full Solution:**\nLet $T$ be the monthly target. The factory produced $55\\%$ of $T$:\n$0.55 \\cdot T = 1{,}287$.\n\nDivide both sides by $0.55$:\n$T = \\dfrac{1{,}287}{0.55} = 2{,}340$.\n\nVerification: $55\\%$ of $2{,}340 = 0.55 \\cdot 2{,}340 = 1{,}287$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Multiplying $1{,}287 \\times 0.55 = 707.85$ (forward operation, not reverse).\n* Subtracting $55\\%$ instead of dividing.\n* Dividing by $5.5$ or $0.055$ (decimal-position slips).\n\n**Test Day Takeaway:** A target or "whole" reached only PARTIALLY: divide what you have by the fraction achieved. Sanity check: $1{,}287$ is roughly half the answer, consistent with $55\\%$ being roughly half.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'reverse-percent',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-111',
    domain: 'problem-solving',
    skills: ['percent-word-problems', 'percent-change'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'After a $20\\%$ discount, a jacket sells for $\\$96$. What was the original price, in dollars, of the jacket?',
    choices: [
      // distractor: adds 20% to sale price
      { id: 'A', text: '$\\$115.20$' },
      { id: 'B', text: '$\\$120$' },
      // distractor: applies discount again
      { id: 'C', text: '$\\$76.80$' },
      // distractor: divides by 0.20 instead of 0.80
      { id: 'D', text: '$\\$480$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Reverse-Percent**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** A $20\\%$ discount keeps $80\\%$. So $0.80 \\cdot \\text{original} = 96 \\Rightarrow \\text{original} = \\dfrac{96}{0.80} = 120$.\n\n**The Full Solution:**\nLet $P$ be the original price. After a $20\\%$ discount, the sale price is $P - 0.20P = 0.80P$.\nSet this equal to the given sale price:\n$0.80P = 96$.\n\nDivide by $0.80$:\n$P = \\dfrac{96}{0.80} = 120$.\n\nVerification: $20\\%$ discount on $\\$120$ removes $\\$24$, leaving $\\$96$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — adds $20\\%$ to the sale price ($96 \\cdot 1.20 = 115.20$). The discount fraction does not invert by addition.\n* Choice C: "applies the inverse operation" — applies a SECOND $20\\%$ discount ($96 \\cdot 0.80 = 76.80$) instead of reversing.\n* Choice D: "wrong base" — divides by $0.20$ (the discount fraction) instead of $0.80$ (the retention fraction).\n\n**Test Day Takeaway:** "After an $r\\%$ discount" the multiplier is $(1 - r/100)$. Divide the SALE price by this multiplier to recover the ORIGINAL.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'reverse-percent',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-112',
    domain: 'problem-solving',
    skills: ['percent-word-problems', 'percent-change'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A school\'s enrollment increased by $12\\%$ from last year to this year. If this year\'s enrollment is $1{,}400$ students, what was last year\'s enrollment?',
    correctAnswer: '1250',
    explanation: '**SAT Pattern: Reverse-Percent**\n\n**The correct answer is $1{,}250$.**\n\n**The Fast Way (~15s):** A $12\\%$ increase makes the multiplier $1.12$. So last $= \\dfrac{1{,}400}{1.12} = 1{,}250$.\n\n**The Full Solution:**\nLet $L$ be last year\'s enrollment. A $12\\%$ increase means this year\'s enrollment is:\n$L \\cdot 1.12 = 1{,}400$.\n\nDivide by $1.12$:\n$L = \\dfrac{1{,}400}{1.12} = 1{,}250$.\n\nVerification: $1{,}250 \\cdot 1.12 = 1{,}400$ \\checkmark. The increase is $1{,}400 - 1{,}250 = 150$, and $\\dfrac{150}{1{,}250} = 0.12 = 12\\%$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Subtracting $12\\%$ of $1{,}400$ ($1{,}400 \\cdot 0.88 = 1{,}232$) — this would be the value AFTER decreasing $1{,}400$ by $12\\%$, not reversing the increase.\n* Dividing by $0.12$ instead of $1.12$.\n* Dividing by $0.88$ instead of $1.12$.\n\n**Test Day Takeaway:** "After an $r\\%$ INCREASE" the multiplier is $(1 + r/100) = 1.12$ for $12\\%$. Divide by $1.12$ to reverse the increase — not by $0.88$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'reverse-percent',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-113',
    domain: 'problem-solving',
    skills: ['percent-word-problems', 'percent-of-value'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'In a town, $27\\%$ of registered voters did not vote in a recent election. If $3{,}650$ registered voters did vote in that election, how many registered voters live in the town?',
    choices: [
      { id: 'A', text: '$5{,}000$' },
      // distractor: forward 27% (treats 3650 as total and 27% as the count)
      { id: 'B', text: '$986$' },
      // distractor: divides by 0.27 instead of 0.73
      { id: 'C', text: '$13{,}519$' },
      // distractor: adds 27% to 3650
      { id: 'D', text: '$4{,}636$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Reverse-Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $27\\%$ did not vote $\\Rightarrow 73\\%$ did vote. $0.73 \\cdot \\text{total} = 3{,}650 \\Rightarrow \\text{total} = \\dfrac{3{,}650}{0.73} = 5{,}000$.\n\n**The Full Solution:**\nLet $T$ be the total registered voters. If $27\\%$ did not vote, then $100\\% - 27\\% = 73\\%$ did vote.\nThe $3{,}650$ voters who did vote are $73\\%$ of $T$:\n$0.73 \\cdot T = 3{,}650$.\n\nDivide by $0.73$:\n$T = \\dfrac{3{,}650}{0.73} = 5{,}000$.\n\nVerification: $73\\%$ of $5{,}000 = 3{,}650$ \\checkmark. The other $27\\%$ is $1{,}350$ who did not vote.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — multiplies $3{,}650 \\cdot 0.27 = 986$ (treats $3{,}650$ as the total and finds the non-voter count).\n* Choice C: "wrong base" — divides by the WRONG percent: $\\dfrac{3{,}650}{0.27} = 13{,}519$.\n* Choice D: "wrong formula" — adds $27\\%$ to $3{,}650$ ($3{,}650 \\cdot 1.27 = 4{,}636$).\n\n**Test Day Takeaway:** When a problem describes the COMPLEMENT ("did not vote", "do not have"), the part given is the OTHER percent. Subtract from $100\\%$ first to find the rate the given part represents.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'reverse-percent',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-114',
    domain: 'problem-solving',
    skills: ['percent-word-problems', 'percent-change'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A jacket is on sale for $\\$51$, which represents a $15\\%$ discount off the original price. What was the original price, in dollars, of the jacket?',
    choices: [
      { id: 'A', text: '$\\$60$' },
      // distractor: 51 × 1.15 (adds 15%)
      { id: 'B', text: '$\\$58.65$' },
      // distractor: 51 / 0.15 (divides by discount rate)
      { id: 'C', text: '$\\$340$' },
      // distractor: applies a 15% discount to 51 again (51 × 0.85 = 43.35 ≈ 43)
      { id: 'D', text: '$\\$43$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Reverse-Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $15\\%$ off means the customer pays $85\\%$. $0.85 \\cdot \\text{original} = 51 \\Rightarrow \\text{original} = \\dfrac{51}{0.85} = 60$.\n\n**The Full Solution:**\nLet $P$ be the original price. A $15\\%$ discount removes $0.15P$, leaving $0.85P$:\n$0.85P = 51$.\n\nDivide by $0.85$:\n$P = \\dfrac{51}{0.85} = 60$.\n\nVerification: $15\\%$ of $\\$60$ is $\\$9$. $\\$60 - \\$9 = \\$51$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — adds $15\\%$ to the sale price ($51 \\cdot 1.15 = 58.65$). Reversing a discount is NOT the same as adding the same percent.\n* Choice C: "wrong base" — divides by the discount rate ($0.15$) instead of the retention rate ($0.85$): $\\dfrac{51}{0.15} = 340$.\n* Choice D: "applies the operation again" — applies ANOTHER $15\\%$ discount to $\\$51$.\n\n**Test Day Takeaway:** A discount keeps a FRACTION of the original price. Original $=$ sale price $\\div$ retention rate. For a $15\\%$ discount, divide by $0.85$, not $0.15$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'reverse-percent',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-115',
    domain: 'problem-solving',
    skills: ['percent-word-problems', 'successive-percent-change'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'An item\'s price was first increased by $20\\%$ and then decreased by $10\\%$ from the increased price. The final price is $\\$108$. What was the original price, in dollars, of the item?',
    correctAnswer: '100',
    explanation: '**SAT Pattern: Reverse-Percent**\n\n**The correct answer is $100$.**\n\n**The Fast Way (~20s):** Net multiplier $= 1.20 \\times 0.90 = 1.08$. So $1.08 \\cdot \\text{original} = 108 \\Rightarrow \\text{original} = 100$.\n\n**The Full Solution:**\nLet $P$ be the original price. Apply each percent change as a multiplier:\n* After $+20\\%$: $1.20 P$.\n* After $-10\\%$ on the new price: $0.90 \\times 1.20 P = 1.08 P$.\n\nSet final equal to $\\$108$:\n$1.08 P = 108$.\n\nDivide:\n$P = \\dfrac{108}{1.08} = 100$.\n\nVerification: $P = 100 \\Rightarrow$ after $+20\\%$: $120$. After $-10\\%$: $0.9 \\cdot 120 = 108$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Adding the percents naively: $+20\\% - 10\\% = +10\\%$ net, giving $108 / 1.10 \\approx 98.18$. Successive percents do NOT add — they MULTIPLY.\n* Reversing in the wrong order (dividing by $0.90$ first, then $1.20$ — actually gives the same answer because multiplication is commutative, but students often get confused).\n* Subtracting $10\\%$ from the ORIGINAL instead of from the INCREASED price.\n\n**Test Day Takeaway:** Successive percent changes compose by MULTIPLICATION, not addition. Compute the combined multiplier, then divide the final value to find the original.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'reverse-percent',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },

  // === SUM-OF-PARTS RATIO (8 questions) — Phase 2 batch 3 priority pattern ===
  // 9x in 12 tests. Covers: 2-way ratio of total, 3-way ratio of total,
  // ratio + difference, chained ratios. Key principle: denominator of each
  // fraction is the SUM of ratio parts, not just one part.
  // SAT Pattern kebab matches test bundle: 'sum-of-parts-ratio'.
  {
    id: 'bank-ps-116',
    domain: 'problem-solving',
    skills: ['word-problem-to-equation'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'A trail mix is made with cashews and raisins in a ratio of $5$ cups of cashews to $3$ cups of raisins. If the total amount of trail mix is $40$ cups, how many cups of raisins are in the mix?',
    correctAnswer: '15',
    explanation: '**SAT Pattern: Sum of Parts Ratio**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~10s):** Raisins are $\\dfrac{3}{5 + 3} = \\dfrac{3}{8}$ of the total. So raisins $= \\dfrac{3}{8} \\cdot 40 = 15$ cups.\n\n**The Full Solution:**\nLet cashews $= 5k$ and raisins $= 3k$ (so the ratio is $5 : 3$).\nTotal: $5k + 3k = 8k = 40$, so $k = 5$.\nRaisins $= 3k = 3 \\cdot 5 = 15$ cups.\n\nVerification: cashews $= 5 \\cdot 5 = 25$, total $= 25 + 15 = 40$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using $\\dfrac{3}{5}$ (ratio of raisins to cashews) instead of $\\dfrac{3}{8}$ (raisins out of total).\n* Reporting cashews ($25$) instead of raisins.\n* Reporting the raw ratio number ($3$).\n\n**Test Day Takeaway:** When two parts are given as a ratio and the TOTAL of both parts is known, the denominator of each fraction is the SUM of the ratio parts, not just one part.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'sum-of-parts-ratio',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-117',
    domain: 'problem-solving',
    skills: ['word-problem-to-equation'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A recipe calls for flour and sugar in the ratio $7$ cups of flour to $2$ cups of sugar. If the total amount of flour and sugar combined is $45$ cups, how many cups of sugar are in the recipe?',
    choices: [
      // distractor: gives the flour amount
      { id: 'A', text: '$35$' },
      { id: 'B', text: '$10$' },
      // distractor: gives the raw ratio number for sugar
      { id: 'C', text: '$2$' },
      // distractor: divides total by 2 (sugar ratio)
      { id: 'D', text: '$22.5$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Sugar is $\\dfrac{2}{7 + 2} = \\dfrac{2}{9}$ of total. Sugar $= \\dfrac{2}{9} \\cdot 45 = 10$ cups.\n\n**The Full Solution:**\nLet flour $= 7k$ and sugar $= 2k$ so the ratio is $7 : 2$.\nTotal: $7k + 2k = 9k = 45 \\Rightarrow k = 5$.\nSugar $= 2k = 2 \\cdot 5 = 10$ cups.\n\nVerification: flour $= 35$, total $= 35 + 10 = 45$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — gives the flour amount instead of sugar.\n* Choice C: "stops one step early" — reports the raw ratio number $2$ as if it were the cup count.\n* Choice D: "wrong base" — divides total by the sugar ratio number ($45 / 2 = 22.5$).\n\n**Test Day Takeaway:** When the question asks for one part of a sum, always check which fraction of the TOTAL it is: numerator $=$ that part\'s ratio number; denominator $=$ SUM of all ratio numbers.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'sum-of-parts-ratio',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-118',
    domain: 'problem-solving',
    skills: ['word-problem-to-equation'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A jar contains blue marbles and green marbles in a ratio of $4 : 7$. If there are $99$ marbles total in the jar, how many blue marbles are there?',
    correctAnswer: '36',
    explanation: '**SAT Pattern: Sum of Parts Ratio**\n\n**The correct answer is $36$.**\n\n**The Fast Way (~10s):** Blue is $\\dfrac{4}{4 + 7} = \\dfrac{4}{11}$ of $99 = 36$.\n\n**The Full Solution:**\nLet blue $= 4k$ and green $= 7k$.\nTotal: $4k + 7k = 11k = 99 \\Rightarrow k = 9$.\nBlue $= 4k = 4 \\cdot 9 = 36$.\n\nVerification: green $= 7 \\cdot 9 = 63$, total $= 36 + 63 = 99$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using $\\dfrac{4}{7}$ instead of $\\dfrac{4}{11}$.\n* Reporting green ($63$) instead of blue.\n\n**Test Day Takeaway:** With $a : b$ ratio summing to $T$, the parts are $\\dfrac{a}{a+b} \\cdot T$ and $\\dfrac{b}{a+b} \\cdot T$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'sum-of-parts-ratio',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-119',
    domain: 'problem-solving',
    skills: ['word-problem-to-equation'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'In a classroom, the ratio of girls to boys is $4 : 5$. If there are $36$ students in total, how many girls are in the classroom?',
    choices: [
      { id: 'A', text: '$16$' },
      // distractor: gives boys
      { id: 'B', text: '$20$' },
      // distractor: wrong fraction (uses 4/8 from misreading sum)
      { id: 'C', text: '$18$' },
      // distractor: uses 4/10 (treats sum as 10 instead of 9)
      { id: 'D', text: '$14.4$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Sum of Parts Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Girls $= \\dfrac{4}{4 + 5} \\cdot 36 = \\dfrac{4}{9} \\cdot 36 = 16$.\n\n**The Full Solution:**\nLet girls $= 4k$ and boys $= 5k$.\nTotal: $4k + 5k = 9k = 36 \\Rightarrow k = 4$.\nGirls $= 4k = 4 \\cdot 4 = 16$.\n\nVerification: boys $= 5 \\cdot 4 = 20$, total $= 16 + 20 = 36$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — gives boys instead of girls.\n* Choice C: "wrong base" — uses sum $= 8$ instead of $9$, gives $\\dfrac{4}{8} \\cdot 36 = 18$.\n* Choice D: "wrong base" — uses sum $= 10$ (e.g., adds an extra unit somewhere), gives $\\dfrac{4}{10} \\cdot 36 = 14.4$.\n\n**Test Day Takeaway:** Always verify the sum of ratio parts. For ratio $a : b$, the denominator of each fraction is $a + b$ exactly — no other value.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'sum-of-parts-ratio',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-120',
    domain: 'problem-solving',
    skills: ['word-problem-to-equation'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A piggy bank contains pennies, nickels, and dimes in the ratio $3 : 4 : 1$. If there are $96$ coins in total, how many dimes are in the bank?',
    choices: [
      { id: 'A', text: '$12$' },
      // distractor: gives nickels
      { id: 'B', text: '$48$' },
      // distractor: gives pennies
      { id: 'C', text: '$36$' },
      // distractor: uses 1/3 (ignores 4 in sum) → 96/12=8 wait 1/(3+1)=1/4 * 96 = 24
      { id: 'D', text: '$24$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Sum of Parts Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Dimes $= \\dfrac{1}{3 + 4 + 1} \\cdot 96 = \\dfrac{1}{8} \\cdot 96 = 12$.\n\n**The Full Solution:**\nLet pennies $= 3k$, nickels $= 4k$, dimes $= 1k = k$.\nTotal: $3k + 4k + k = 8k = 96 \\Rightarrow k = 12$.\nDimes $= k = 12$.\n\nVerification: pennies $= 36$, nickels $= 48$, dimes $= 12$; total $= 36 + 48 + 12 = 96$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — gives the nickel count ($4k = 48$).\n* Choice C: "wrong base" — gives the penny count ($3k = 36$).\n* Choice D: "wrong base" — uses sum $= 4$ instead of $8$ (treats it as $3:1$, ignoring nickels), gives $\\dfrac{1}{4} \\cdot 96 = 24$.\n\n**Test Day Takeaway:** With three or more parts, the denominator is the SUM of all parts in the ratio. Don\'t drop any term from the sum.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'sum-of-parts-ratio',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-121',
    domain: 'problem-solving',
    skills: ['word-problem-to-equation'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A concrete mix consists of cement, sand, and gravel in the ratio $1 : 2 : 3$. If the total amount of mix is $96$ buckets, how many buckets of gravel are in the mix?',
    correctAnswer: '48',
    explanation: '**SAT Pattern: Sum of Parts Ratio**\n\n**The correct answer is $48$.**\n\n**The Fast Way (~10s):** Gravel $= \\dfrac{3}{1 + 2 + 3} \\cdot 96 = \\dfrac{3}{6} \\cdot 96 = 48$.\n\n**The Full Solution:**\nLet cement $= k$, sand $= 2k$, gravel $= 3k$.\nTotal: $k + 2k + 3k = 6k = 96 \\Rightarrow k = 16$.\nGravel $= 3k = 3 \\cdot 16 = 48$ buckets.\n\nVerification: cement $= 16$, sand $= 32$, gravel $= 48$; total $= 16 + 32 + 48 = 96$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using $\\dfrac{3}{5}$ or $\\dfrac{3}{4}$ instead of $\\dfrac{3}{6}$ (forgetting one component in the sum).\n* Reporting cement ($16$) or sand ($32$) instead of gravel.\n\n**Test Day Takeaway:** A ratio $a : b : c$ summing to $T$ gives parts $\\dfrac{a}{a+b+c} T$, $\\dfrac{b}{a+b+c} T$, and $\\dfrac{c}{a+b+c} T$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'sum-of-parts-ratio',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-122',
    domain: 'problem-solving',
    skills: ['word-problem-to-equation'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'Two ingredients are mixed in the ratio $5 : 7$. The total amount of the mixture is $60$ ounces. How many MORE ounces of the larger ingredient than of the smaller ingredient are in the mixture?',
    choices: [
      { id: 'A', text: '$10$' },
      // distractor: gives the larger ingredient amount
      { id: 'B', text: '$35$' },
      // distractor: gives the smaller ingredient amount
      { id: 'C', text: '$25$' },
      // distractor: raw ratio difference (7 - 5 = 2)
      { id: 'D', text: '$2$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Sum of Parts Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Larger $= \\dfrac{7}{12} \\cdot 60 = 35$, smaller $= \\dfrac{5}{12} \\cdot 60 = 25$. Difference $= 35 - 25 = 10$.\n\n**The Full Solution:**\nLet smaller $= 5k$ and larger $= 7k$.\nTotal: $5k + 7k = 12k = 60 \\Rightarrow k = 5$.\nLarger $= 7k = 35$, smaller $= 5k = 25$.\nDifference $= 35 - 25 = 10$ ounces.\n\nShortcut: the difference is $(7 - 5) k = 2k = 2 \\cdot 5 = 10$ — you can avoid computing each part if you only need the difference.\n\nVerification: $25 + 35 = 60$ \\checkmark and $35 - 25 = 10$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — reports the larger ingredient amount ($35$) without subtracting.\n* Choice C: "stops one step early" — reports the smaller ingredient amount ($25$).\n* Choice D: "stops one step early" — reports the raw ratio difference ($7 - 5 = 2$) without scaling by $k = 5$.\n\n**Test Day Takeaway:** When asked for a DIFFERENCE between ratio parts, you can compute $(a - b) k$ where $k$ is the common scale factor — no need to compute each part individually.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'sum-of-parts-ratio',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-123',
    domain: 'problem-solving',
    skills: ['word-problem-to-equation'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'Three siblings, $A$, $B$, and $C$, share a sum of $\\$90$. $A$\'s share is $3$ times $B$\'s share, and $B$\'s share is $2$ times $C$\'s share. How many dollars is $A$\'s share?',
    correctAnswer: '60',
    explanation: '**SAT Pattern: Sum of Parts Ratio**\n\n**The correct answer is $60$.**\n\n**The Fast Way (~25s):** Let $C = x$. Then $B = 2x$, $A = 3B = 6x$. Total $= x + 2x + 6x = 9x = 90 \\Rightarrow x = 10$. $A = 6x = 60$.\n\n**The Full Solution:**\nChain the relationships starting from the smallest share. Let $C = x$. Then:\n* $B = 2 \\cdot C = 2x$ (B is twice C).\n* $A = 3 \\cdot B = 3 \\cdot 2x = 6x$ (A is three times B).\n\nThe ratio $A : B : C = 6 : 2 : 1$, summing to $9$.\nTotal: $6x + 2x + x = 9x = 90 \\Rightarrow x = 10$.\nA\'s share $= 6x = 60$.\n\nVerification: $A = 60$, $B = 20$, $C = 10$. Sum $= 90$ \\checkmark. $A / B = 60 / 20 = 3$ \\checkmark. $B / C = 20 / 10 = 2$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Misreading the order: A is $3$ times B, not the other way around.\n* Stopping at $x = 10$ and reporting it as A\'s share.\n* Treating the relationships as additive ("A has $3$ more than B") instead of multiplicative.\n\n**Test Day Takeaway:** With chained ratios ($A = mB$, $B = nC$), set the SMALLEST as $x$ and chain forward to get the others as multiples of $x$. Then sum and solve.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'sum-of-parts-ratio',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },

  // === OUTLIER EFFECT (8 questions) — Phase 2 batch 3 priority pattern ===
  // 9x in 12 tests. Covers: adding outlier, shifting all by constant,
  // scaling, replacing, mean-vs-median sensitivity, must-be-true.
  // SAT Pattern kebab matches test bundle: 'outlier-effect'.
  {
    id: 'bank-ps-124',
    domain: 'problem-solving',
    skills: ['calculate-mean'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'A list of $5$ values has a mean of $30$. A sixth value of $90$ is added to the list. What is the mean of the new $6$-value list?',
    correctAnswer: '40',
    explanation: '**SAT Pattern: Outlier Effect**\n\n**The correct answer is $40$.**\n\n**The Fast Way (~10s):** Old sum $= 5 \\times 30 = 150$. New sum $= 150 + 90 = 240$. New mean $= 240 / 6 = 40$.\n\n**The Full Solution:**\nThe sum of the original $5$ values is $5 \\cdot 30 = 150$.\nAdding $90$ gives a new sum of $150 + 90 = 240$.\nThe new $6$-value mean is $\\dfrac{240}{6} = 40$.\n\nVerification: the added value of $90$ is far above the original mean of $30$, so the mean should INCREASE — and it did, by $10$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Averaging the old mean and the new value: $\\dfrac{30 + 90}{2} = 60$ — ignores that there are now $6$ values, not $2$.\n* Reporting the added value $90$ as the new mean.\n\n**Test Day Takeaway:** Adding a value FAR ABOVE the current mean pulls the mean UPWARD. The size of the pull depends on how many values are already in the list — a bigger list resists change more.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'outlier-effect',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-125',
    domain: 'problem-solving',
    skills: ['calculate-mean', 'find-median'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A data set has a mean of $25$ and a median of $22$. If each value in the data set is increased by $8$, what are the new mean and median of the data set?',
    choices: [
      // distractor: only mean shifts; median unchanged
      { id: 'A', text: 'Mean $= 33$, median $= 22$' },
      { id: 'B', text: 'Mean $= 33$, median $= 30$' },
      // distractor: doubles both
      { id: 'C', text: 'Mean $= 50$, median $= 44$' },
      // distractor: only median shifts
      { id: 'D', text: 'Mean $= 25$, median $= 30$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Outlier Effect**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Shifting EVERY value by $+8$ shifts BOTH the mean and median by $+8$. New mean $= 33$, new median $= 30$.\n\n**The Full Solution:**\nWhen every value in a data set is increased by a constant $c$:\n* Mean shifts by $+c$ (each term in the sum shifts by $c$; divide by $n$ gives a $c$ shift).\n* Median shifts by $+c$ (the middle value\'s new value is its old value $+ c$).\n\nWith $c = 8$:\n* New mean $= 25 + 8 = 33$.\n* New median $= 22 + 8 = 30$.\n\nVerification: try a small set $\\{20, 22, 30, 33\\}$ with median $= (22 + 30)/2 = 26$. Add $8$ to each: $\\{28, 30, 38, 41\\}$, new median $= 34 = 26 + 8$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — shifts only the mean, leaves median unchanged.\n* Choice C: "wrong formula" — multiplies by $2$ instead of adding $8$.\n* Choice D: "stops one step early" — shifts only the median.\n\n**Test Day Takeaway:** A SHIFT by $c$ moves the entire distribution: mean and median both move by exactly $c$. Range and standard deviation are UNCHANGED (the spread is the same).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'outlier-effect',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-126',
    domain: 'problem-solving',
    skills: ['calculate-mean'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A list of $10$ values has a mean of $50$. The smallest value, which is $20$, is replaced with a new value of $80$. What is the mean of the new $10$-value list?',
    correctAnswer: '56',
    explanation: '**SAT Pattern: Outlier Effect**\n\n**The correct answer is $56$.**\n\n**The Fast Way (~10s):** Replacing $20$ with $80$ increases the sum by $60$. With $10$ values, the mean shifts by $60/10 = 6$. New mean $= 50 + 6 = 56$.\n\n**The Full Solution:**\nOld sum: $10 \\cdot 50 = 500$.\nReplacement changes the sum by $80 - 20 = +60$.\nNew sum: $500 + 60 = 560$.\nNew mean: $560 / 10 = 56$.\n\nThe count is unchanged at $10$; only the sum shifted by $+60$, so the mean shifts by $+6$.\n\nVerification: any list of $10$ values summing to $560$ has mean $56$ — for example, replacing one $20$ with $80$ in a $\\{20, \\dots\\}$ list adds $60$ to the sum \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Treating it like ADD/REMOVE (changes count) — replacement keeps count constant.\n* Averaging $20$ and $80$ to get $50$ and concluding no change.\n\n**Test Day Takeaway:** REPLACING a single value changes the mean by $\\dfrac{\\text{new} - \\text{old}}{n}$. Replacing the smallest with a much larger value pulls the mean UP.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'outlier-effect',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-127',
    domain: 'problem-solving',
    skills: ['calculate-mean', 'find-median'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A data set of $7$ values has a mean of $60$ and a median of $55$. An additional value of $200$ is added to the data set. Which of the following statements best describes the effect on the mean and median?',
    choices: [
      // distractor: same impact on both
      { id: 'A', text: 'Both the mean and median increase by the same amount.' },
      { id: 'B', text: 'The mean increases by more than the median.' },
      // distractor: opposite direction
      { id: 'C', text: 'The mean decreases and the median increases.' },
      // distractor: median changes more
      { id: 'D', text: 'The median increases by more than the mean.' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Outlier Effect**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The mean is SENSITIVE to outliers; the median is RESISTANT. Adding $200$ (much larger than the current values) pulls the mean upward sharply, while the median barely shifts.\n\n**The Full Solution:**\nBefore: $7$ values, mean $60$ (sum $= 420$), median $55$ (the $4$th value).\nAfter adding $200$:\n* New sum $= 420 + 200 = 620$. New mean $= 620 / 8 = 77.5$. Change: $+17.5$.\n* New median is the average of the $4$th and $5$th values of the sorted $8$-value list. Since $200$ is the new MAXIMUM, it goes to position $8$, so the $4$th and $5$th values are the old $4$th and $5$th — say $55$ and (some value above $55$). The new median is between $55$ and a value above $55$ — at most a small shift, much less than $17.5$.\n\nQualitatively: the mean change is large; the median change is small or zero. **Mean increases by more.**\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — equates mean and median sensitivity. They are different by design.\n* Choice C: "sign error" — claims the mean decreases despite adding a HIGH value.\n* Choice D: "applies the inverse operation" — reverses the well-known sensitivity ordering.\n\n**Test Day Takeaway:** Mean is pulled toward outliers; median is resistant. Adding a high outlier $\\Rightarrow$ mean shifts up MORE than the median. Adding a low outlier $\\Rightarrow$ mean shifts down MORE than the median.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'outlier-effect',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-128',
    domain: 'problem-solving',
    skills: ['calculate-mean', 'find-median'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A data set has a mean of $14$ and a median of $12$. If each value in the data set is multiplied by $3$, what are the new mean and median of the data set?',
    choices: [
      // distractor: shifts by 3 instead of scaling
      { id: 'A', text: 'Mean $= 17$, median $= 15$' },
      { id: 'B', text: 'Mean $= 42$, median $= 36$' },
      // distractor: only mean scales
      { id: 'C', text: 'Mean $= 42$, median $= 12$' },
      // distractor: only median scales
      { id: 'D', text: 'Mean $= 14$, median $= 36$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Outlier Effect**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Multiplying EVERY value by $k$ multiplies BOTH the mean and median by $k$. New mean $= 14 \\times 3 = 42$, new median $= 12 \\times 3 = 36$.\n\n**The Full Solution:**\nWhen every value in a data set is multiplied by a constant $k$:\n* Sum is multiplied by $k$ $\\Rightarrow$ mean is multiplied by $k$.\n* The middle value\'s new position is $k$ times its old value $\\Rightarrow$ median is multiplied by $k$.\n\nWith $k = 3$:\n* New mean $= 14 \\times 3 = 42$.\n* New median $= 12 \\times 3 = 36$.\n\nNote: range and standard deviation also multiply by $k$ (the spread scales).\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — adds $3$ instead of multiplying.\n* Choice C: "stops one step early" — scales the mean but forgets the median.\n* Choice D: "stops one step early" — scales the median but forgets the mean.\n\n**Test Day Takeaway:** SCALING by $k$ (multiplying every value by $k$): mean, median, AND spread (range, SD) all multiply by $k$. SHIFTING by $c$ (adding $c$ to every value): mean and median shift by $c$; spread is unchanged.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'outlier-effect',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-129',
    domain: 'problem-solving',
    skills: ['calculate-mean', 'find-median'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A data set has a mean of $70$ and a median of $60$. Which of the following statements MUST be true based only on this information?',
    choices: [
      // distractor: claims a specific number is in the set
      { id: 'A', text: 'The data set contains the value $70$.' },
      { id: 'B', text: 'The data set contains at least one value greater than or equal to $70$.' },
      // distractor: claims symmetric distribution
      { id: 'C', text: 'The data set is symmetric about $65$.' },
      // distractor: claims median is the most common value
      { id: 'D', text: 'The data set has $60$ as its mode.' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Outlier Effect**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Mean $= 70$ requires that the SUM divided by $n$ equals $70$. If every value were $< 70$, the sum would be $< 70n$ and the mean $< 70$. So at least one value must be $\\geq 70$.\n\n**The Full Solution:**\nGiven mean $= 70$: $\\dfrac{\\text{sum}}{n} = 70 \\Rightarrow \\text{sum} = 70n$.\n\nSuppose, for contradiction, that ALL values were strictly less than $70$. Then the sum would be strictly less than $70n$, and the mean strictly less than $70$ — contradicting the given mean.\n\nTherefore at least one value must be $\\geq 70$. This is the only statement that MUST be true.\n\nMean $>$ median is consistent with right-skew (a long tail of high values), but skew is not the same as having any specific value in the set.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — the mean does not have to be a member of the data set (e.g., $\\{60, 80\\}$ has mean $70$ but $70$ itself is not in the set).\n* Choice C: "wrong base" — mean $\\neq$ median, so the data is NOT symmetric. Symmetric data would have mean $=$ median.\n* Choice D: "wrong formula" — median tells us the middle value, NOT the most common (mode). They are different measures.\n\n**Test Day Takeaway:** A mean of $M$ requires at least one value $\\geq M$ (and at least one value $\\leq M$). Mean $>$ median often suggests right-skew but doesn\'t prove a specific shape.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'outlier-effect',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-130',
    domain: 'problem-solving',
    skills: ['calculate-mean', 'find-median'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A data set of $9$ values has a mean equal to its median, both $40$. The largest value in the set is increased by $18$, and no other values change. Which of the following best describes the new mean and median?',
    choices: [
      // distractor: both increase by the full 18
      { id: 'A', text: 'Mean increases by $18$; median increases by $18$.' },
      { id: 'B', text: 'Mean increases by $2$; median is unchanged.' },
      // distractor: only median changes
      { id: 'C', text: 'Mean unchanged; median increases by $2$.' },
      // distractor: ignores change
      { id: 'D', text: 'Both mean and median are unchanged.' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Outlier Effect**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Sum increases by $18$. With $9$ values, mean shifts by $18 / 9 = 2$. The largest value is still the largest, so the median (the $5$th of $9$) is unchanged.\n\n**The Full Solution:**\nOriginal sum: $9 \\cdot 40 = 360$.\nNew sum: $360 + 18 = 378$.\nNew mean: $378 / 9 = 42$. So mean increased by $2$.\n\nMedian: with $9$ sorted values, the median is the $5$th value. Increasing the LARGEST (the $9$th value) doesn\'t change its position relative to the others — it remains the $9$th. The $5$th value is unchanged. So the median stays at $40$.\n\nVerification: change in mean $= +2$ \\checkmark, change in median $= 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — increases mean by the full amount $18$ instead of dividing by $n = 9$. Similarly for median.\n* Choice C: "applies the inverse operation" — claims only the median changes (in fact only the mean does).\n* Choice D: "wrong formula" — ignores the change to the sum.\n\n**Test Day Takeaway:** Changing only the LARGEST value affects the mean (by $\\Delta/n$) but not the median (the middle value is unchanged unless the modification crosses a position boundary).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'outlier-effect',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-131',
    domain: 'problem-solving',
    skills: ['calculate-mean'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'A list of $10$ values has a mean of $30$ and a median of $25$. Each value in the list is first multiplied by $2$ and then increased by $5$. What is the mean of the new list?',
    correctAnswer: '65',
    explanation: '**SAT Pattern: Outlier Effect**\n\n**The correct answer is $65$.**\n\n**The Fast Way (~10s):** Apply the SAME transformation to the mean: $2 \\times 30 + 5 = 65$.\n\n**The Full Solution:**\nWhen every value is replaced by $f(x) = 2x + 5$, the new mean is $f(\\text{old mean})$:\n* Multiply by $2$: each value contributes $2x$ to the sum; total scales by $2$; mean scales by $2$.\n* Add $5$: every value contributes $+5$; total grows by $5n$; mean grows by $5$.\n\nCombined: new mean $= 2 \\cdot 30 + 5 = 60 + 5 = 65$.\n\nVerification: any list with mean $30$ scaled by $2$ has mean $60$; then shifted by $+5$ has mean $65$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Applying operations to the WRONG quantity (e.g., to the median instead of the mean).\n* Doing operations in the wrong order: shifting first by $5$ then doubling would give $2 \\cdot 35 = 70$ — different result.\n* Forgetting to scale: reporting $30 + 5 = 35$.\n\n**Test Day Takeaway:** Affine transformations on every value ($f(x) = ax + b$) transform the mean the same way: new mean $= a \\cdot$ (old mean) $+ b$. Same rule applies to median.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'outlier-effect',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },

  // === SCATTERPLOT LINE OF BEST FIT (8 questions) — Phase 2 batch 4 priority ===
  // 8x in 12 tests. Covers: plug-in prediction, solve-for-x-given-y,
  // slope-in-context interpretation, intercept-in-context interpretation,
  // line-from-two-predicted-points, n-unit-increase impact.
  // SAT Pattern kebab matches: 'scatterplot-line-of-best-fit'.
  {
    id: 'bank-ps-132',
    domain: 'problem-solving',
    skills: ['slope-intercept-form', 'function-evaluation'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'The scatterplot below is modeled by the linear equation $\\hat{y} = 3x + 5$. According to this model, what is the predicted value of $y$ when $x = 7$?',
    diagram: { type: 'scatterplot', params: {
      points: [[0,6],[1,7],[2,13],[3,12],[4,18],[5,19],[6,24],[7,25],[8,31],[9,30],[10,36]],
      xMin: 0, xMax: 10, yMin: 0, yMax: 38,
      xGridStep: 1, yGridStep: 4, xLabelStep: 2, yLabelStep: 8,
      bestFitLine: { slope: 3, intercept: 5 },
    } },
    correctAnswer: '26',
    explanation: '**SAT Pattern: Scatterplot Line of Best Fit**\n\n**The correct answer is $26$.**\n\n**The Fast Way (~5s):** $\\hat{y} = 3(7) + 5 = 21 + 5 = 26$.\n\n**The Full Solution:**\nSubstitute $x = 7$ into the line of best fit:\n$\\hat{y} = 3(7) + 5 = 21 + 5 = 26$.\n\nVerification: at $x = 7$, $3 \\times 7 = 21$ and $21 + 5 = 26$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Multiplying $7$ by both the slope $3$ and the intercept $5$: $7 \\cdot 3 \\cdot 5 = 105$.\n* Forgetting the intercept: reporting $21$.\n\n**Test Day Takeaway:** A line of best fit is just a regular linear equation. Plug in the $x$-value, multiply by the slope, add the intercept.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'scatterplot-line-of-best-fit',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-133',
    domain: 'problem-solving',
    skills: ['slope-intercept-form', 'function-evaluation'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'The scatterplot below is modeled by $\\hat{y} = -2x + 40$. What is the predicted value of $y$ when $x = 15$?',
    diagram: { type: 'scatterplot', params: {
      points: [[2,38],[4,30],[6,30],[8,22],[10,22],[12,18],[14,14],[16,6],[18,6]],
      xMin: 0, xMax: 20, yMin: 0, yMax: 44,
      xGridStep: 2, yGridStep: 4, xLabelStep: 5, yLabelStep: 10,
      bestFitLine: { slope: -2, intercept: 40 },
    } },
    correctAnswer: '10',
    explanation: '**SAT Pattern: Scatterplot Line of Best Fit**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~5s):** $\\hat{y} = -2(15) + 40 = -30 + 40 = 10$.\n\n**The Full Solution:**\nSubstitute $x = 15$:\n$\\hat{y} = -2(15) + 40 = -30 + 40 = 10$.\n\nVerification: $-2 \\cdot 15 = -30$, and $-30 + 40 = 10$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Sign error: computing $+30 + 40 = 70$ instead of $-30 + 40$.\n* Subtracting in the wrong direction: $40 - 30 = 10$ is the same answer, but the order matters for sign-carrying.\n\n**Test Day Takeaway:** With a negative slope, the predicted value DECREASES as $x$ increases. Carry the sign through carefully when multiplying.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'scatterplot-line-of-best-fit',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-134',
    domain: 'problem-solving',
    skills: ['slope-intercept-form'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'The scatterplot below is modeled by $\\hat{y} = 0.5x + 12$. According to this model, at what value of $x$ does the predicted $y$ equal $30$?',
    diagram: { type: 'scatterplot', params: {
      points: [[0,13],[5,16],[10,16],[15,21],[20,22],[25,23],[30,28],[35,28],[40,33]],
      xMin: 0, xMax: 40, yMin: 0, yMax: 36,
      xGridStep: 5, yGridStep: 4, xLabelStep: 10, yLabelStep: 8,
      bestFitLine: { slope: 0.5, intercept: 12 },
    } },
    correctAnswer: '36',
    explanation: '**SAT Pattern: Scatterplot Line of Best Fit**\n\n**The correct answer is $36$.**\n\n**The Fast Way (~10s):** $30 = 0.5x + 12 \\Rightarrow 0.5x = 18 \\Rightarrow x = 36$.\n\n**The Full Solution:**\nSet $\\hat{y} = 30$ and solve for $x$:\n$30 = 0.5x + 12$\n$30 - 12 = 0.5x$\n$18 = 0.5x$\n$x = \\dfrac{18}{0.5} = 36$.\n\nVerification: at $x = 36$, $\\hat{y} = 0.5(36) + 12 = 18 + 12 = 30$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Multiplying $30$ by $0.5$ instead of dividing: $30 \\cdot 0.5 = 15$.\n* Forgetting to subtract the intercept first.\n* Dividing $30$ by $0.5$ first ($60$), then subtracting wrong.\n\n**Test Day Takeaway:** To find $x$ given $\\hat{y}$: subtract the intercept, then divide by the slope. Reverse the order of operations.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'scatterplot-line-of-best-fit',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-135',
    domain: 'problem-solving',
    skills: ['slope-intercept-form'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A company\'s daily revenue, in dollars, is modeled by $\\hat{y} = 4.5x + 200$, where $x$ is the number of items sold that day. Which of the following is the BEST interpretation of the coefficient $4.5$ in this model?',
    choices: [
      { id: 'A', text: 'The average revenue per additional item sold, in dollars.' },
      // distractor: confuses slope with intercept
      { id: 'B', text: 'The revenue earned when zero items are sold.' },
      // distractor: misreads slope as quantity
      { id: 'C', text: 'The number of items sold per dollar earned.' },
      // distractor: total revenue
      { id: 'D', text: 'The total revenue for the day.' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** In $\\hat{y} = mx + b$, the slope $m$ is the change in $\\hat{y}$ per unit change in $x$. Here $4.5$ is revenue per additional item.\n\n**The Full Solution:**\nThe coefficient of $x$ in a linear model is the SLOPE, which represents the change in the predicted output per unit increase in $x$.\n\nUnits: $4.5 = \\dfrac{\\Delta \\text{revenue (dollars)}}{\\Delta \\text{items}}$. So $4.5$ is "dollars per item".\n\nFor each ADDITIONAL item sold, daily revenue is expected to increase by $\\$4.50$.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — describes the intercept ($\\$200$), not the slope.\n* Choice C: "applies the inverse operation" — inverts the slope ratio (items per dollar instead of dollars per item).\n* Choice D: "wrong formula" — gives the total $\\hat{y}$, not the rate.\n\n**Test Day Takeaway:** In $\\hat{y} = mx + b$ with context, $m$ is the RATE of change of $y$ per unit of $x$ — read the units of both axes. The intercept $b$ is the value of $\\hat{y}$ at $x = 0$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'scatterplot-line-of-best-fit',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-136',
    domain: 'problem-solving',
    skills: ['slope-intercept-form'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A weather station\'s temperature, in degrees Fahrenheit, is modeled by $\\hat{y} = -1.2x + 80$, where $x$ is the number of hours past noon. Which of the following is the BEST interpretation of the value $80$ in this model?',
    choices: [
      // distractor: confuses intercept with slope
      { id: 'A', text: 'The temperature decreases by $80$ degrees each hour.' },
      { id: 'B', text: 'The predicted temperature at noon (when $x = 0$) is $80$ degrees.' },
      // distractor: maximum temperature
      { id: 'C', text: 'The highest temperature the station can reach is $80$ degrees.' },
      // distractor: temperature far in future
      { id: 'D', text: 'The temperature after many hours is $80$ degrees.' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $\\hat{y} = mx + b$, the intercept $b$ is the value of $\\hat{y}$ when $x = 0$. Here $80$ is the temperature at noon.\n\n**The Full Solution:**\nThe constant term in a linear model is the $y$-intercept, which represents the predicted output value when $x = 0$.\n\nGiven $x =$ hours past noon:\n* $x = 0$ corresponds to noon.\n* $\\hat{y}(0) = -1.2(0) + 80 = 80$.\n\nSo $80$ degrees is the predicted temperature AT NOON.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — describes the slope ($-1.2$), not the intercept.\n* Choice C: "wrong formula" — the model has decreasing temperature ($m < 0$); $80$ at $x = 0$ is the STARTING value, but the question doesn\'t say it\'s the max (though it does happen to be the max here, the interpretation of $80$ is "value at $x = 0$").\n* Choice D: "sign error" — for negative slope, as $x$ grows, $\\hat{y}$ decreases (not approaches $80$).\n\n**Test Day Takeaway:** The intercept $b$ is the predicted value AT $x = 0$. Translate that into context: $x = 0$ means "at noon" or "initially" or "before any change."',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'scatterplot-line-of-best-fit',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-137',
    domain: 'problem-solving',
    skills: ['slope-intercept-form', 'function-evaluation'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'The scatterplot below is modeled by $\\hat{y} = 1.85x + 3.4$. What is the predicted value of $y$ when $x = 6$?',
    diagram: { type: 'scatterplot', params: {
      points: [[0,4],[1,5],[2,8],[3,8],[4,11],[5,13],[6,14],[7,17],[8,18],[9,21],[10,22]],
      xMin: 0, xMax: 10, yMin: 0, yMax: 24,
      xGridStep: 1, yGridStep: 4, xLabelStep: 2, yLabelStep: 8,
      bestFitLine: { slope: 1.85, intercept: 3.4 },
    } },
    correctAnswer: '14.5',
    explanation: '**SAT Pattern: Scatterplot Line of Best Fit**\n\n**The correct answer is $14.5$.**\n\n**The Fast Way (~10s):** $\\hat{y} = 1.85(6) + 3.4 = 11.1 + 3.4 = 14.5$.\n\n**The Full Solution:**\nMultiply: $1.85 \\times 6 = 11.10$.\nAdd intercept: $11.10 + 3.4 = 14.5$.\n\nSo $\\hat{y} = 14.5$ when $x = 6$.\n\nVerification: $1.85 \\times 6 = 11.10$ (slide the decimal one position from $185 \\times 6 = 1110$). $11.10 + 3.40 = 14.50$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Decimal slip: $1.85 \\times 6 = 1.11$ or $111$ — misplaces the decimal.\n* Adding $3.4$ as $3$ or $4$: gives $14.1$ or $15.1$.\n* Multiplying $6$ by both $1.85$ and $3.4$ together: $6 \\cdot 1.85 \\cdot 3.4 = 37.74$.\n\n**Test Day Takeaway:** With decimal slopes, take care with decimal placement. Use long-multiplication or partial products: $1.85 \\times 6 = 1 \\times 6 + 0.85 \\times 6 = 6 + 5.1 = 11.1$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'scatterplot-line-of-best-fit',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-138',
    domain: 'problem-solving',
    skills: ['slope-intercept-form', 'slope-from-points'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'The scatterplot below has a line of best fit that passes through the points $(4, 18)$ and $(10, 36)$. According to this line, what is the predicted value of $y$ when $x = 20$?',
    diagram: { type: 'scatterplot', params: {
      points: [[2,14],[4,18],[6,22],[8,28],[10,36],[12,40],[14,46],[16,52],[18,62]],
      xMin: 0, xMax: 22, yMin: 0, yMax: 72,
      xGridStep: 2, yGridStep: 6, xLabelStep: 4, yLabelStep: 12,
      bestFitLine: { slope: 3, intercept: 6 },
    } },
    correctAnswer: '66',
    explanation: '**SAT Pattern: Scatterplot Line of Best Fit**\n\n**The correct answer is $66$.**\n\n**The Fast Way (~25s):** Slope $= (36 - 18)/(10 - 4) = 3$. Intercept: $18 = 3(4) + b \\Rightarrow b = 6$. At $x = 20$: $\\hat{y} = 3(20) + 6 = 66$.\n\n**The Full Solution:**\nStep 1: find the slope.\n$m = \\dfrac{36 - 18}{10 - 4} = \\dfrac{18}{6} = 3$.\n\nStep 2: find the intercept using one of the points (say $(4, 18)$):\n$18 = 3(4) + b \\Rightarrow b = 18 - 12 = 6$.\n\nSo the line is $\\hat{y} = 3x + 6$.\n\nStep 3: predict at $x = 20$:\n$\\hat{y} = 3(20) + 6 = 60 + 6 = 66$.\n\nVerification: check with the OTHER point: $\\hat{y}(10) = 3(10) + 6 = 36$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using only one point and not finding the slope.\n* Inverting the slope formula: $(10 - 4)/(36 - 18) = 1/3$ instead of $3$.\n* Forgetting to add the intercept after computing $3 \\times 20$.\n\n**Test Day Takeaway:** Two points give a complete linear equation. Step 1: slope from the slope formula. Step 2: intercept from substitution. Step 3: predict at the requested $x$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'scatterplot-line-of-best-fit',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-139',
    domain: 'problem-solving',
    skills: ['slope-intercept-form'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The scatterplot below is modeled by $\\hat{y} = 0.85x + 15$. According to this model, what is the change in the predicted value of $y$ when $x$ increases by $5$?',
    diagram: { type: 'scatterplot', params: {
      points: [[0,16],[2,16],[4,19],[6,20],[8,21],[10,24],[12,24],[14,27],[16,30],[18,28],[20,32]],
      xMin: 0, xMax: 20, yMin: 0, yMax: 36,
      xGridStep: 2, yGridStep: 4, xLabelStep: 4, yLabelStep: 8,
      bestFitLine: { slope: 0.85, intercept: 15 },
    } },
    choices: [
      // distractor: gives slope alone
      { id: 'A', text: '$0.85$' },
      { id: 'B', text: '$4.25$' },
      // distractor: gives x-increase
      { id: 'C', text: '$5$' },
      // distractor: gives intercept
      { id: 'D', text: '$15$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The slope is $0.85$. A $5$-unit increase in $x$ produces a change in $\\hat{y}$ of $5 \\times 0.85 = 4.25$.\n\n**The Full Solution:**\nThe slope $m = 0.85$ tells us how much $\\hat{y}$ changes per UNIT change in $x$. So for a $\\Delta x = 5$ change in $x$:\n$\\Delta \\hat{y} = m \\cdot \\Delta x = 0.85 \\cdot 5 = 4.25$.\n\nVerification: at $x = 0$, $\\hat{y} = 15$. At $x = 5$, $\\hat{y} = 0.85(5) + 15 = 4.25 + 15 = 19.25$. Change: $19.25 - 15 = 4.25$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — reports the slope without multiplying by $\\Delta x$.\n* Choice C: "wrong base" — reports the $\\Delta x$ directly.\n* Choice D: "wrong formula" — reports the intercept.\n\n**Test Day Takeaway:** Change in $\\hat{y}$ for a change in $x$ of $\\Delta x$ is $m \\cdot \\Delta x$. The intercept does NOT participate in the change calculation.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'scatterplot-line-of-best-fit',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },

  // === TWO-WAY TABLE CONDITIONAL PROBABILITY (8 questions) — Phase 2 batch 5 ===
  // 7x in 12 tests. Sibling of conditional-probability-from-two-way-table (the
  // word order in the title differs, kebab differs accordingly). Covers same
  // skill: read row/column totals, compute P(A | B) = cell / B-total.
  // SAT Pattern kebab matches test bundle: 'two-way-table-conditional-probability'.
  {
    id: 'bank-ps-140',
    domain: 'problem-solving',
    skills: ['conditional-probability', 'two-way-table'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'The table below shows the results of a survey of $150$ households about pet ownership and housing type.\n\n| | Owns a Pet | No Pet | Total |\n|---|---|---|---|\n| Apartment | $32$ | $48$ | $80$ |\n| House | $54$ | $16$ | $70$ |\n| Total | $86$ | $64$ | $150$ |\n\nIf a household in an Apartment is selected at random, what is the probability that the household owns a pet?',
    choices: [
      { id: 'A', text: '$\\dfrac{32}{80}$' },
      // distractor: grand total in denominator
      { id: 'B', text: '$\\dfrac{32}{150}$' },
      // distractor: inverse conditional
      { id: 'C', text: '$\\dfrac{32}{86}$' },
      // distractor: wrong cell
      { id: 'D', text: '$\\dfrac{48}{80}$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** "Given Apartment" $\\Rightarrow$ denominator $= 80$. Apartment $\\cap$ Owns Pet $= 32$. $P = 32/80$.\n\n**The Full Solution:**\nThe condition "household in an Apartment" restricts the universe to the $80$ apartment dwellers (the Apartment row total).\n\nOf those $80$, $32$ own a pet (cell at Apartment $\\cap$ Owns Pet).\n\n$P(\\text{Owns Pet} \\mid \\text{Apartment}) = \\dfrac{32}{80} = \\dfrac{2}{5}$.\n\nVerification: $32/80 = 0.4 = 40\\%$. The remaining $48/80 = 60\\%$ of apartment dwellers have no pet \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — uses the grand total $150$ (would give the JOINT probability).\n* Choice C: "applies the inverse operation" — gives $P(\\text{Apartment} \\mid \\text{Owns Pet})$ — reverses the condition.\n* Choice D: "wrong base" — picks the "No Pet" cell instead of "Owns Pet".\n\n**Test Day Takeaway:** "Given X" sets the denominator to X\'s total. Numerator is the cell where both conditions hold.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'two-way-table-conditional-probability',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-141',
    domain: 'problem-solving',
    skills: ['conditional-probability', 'two-way-table'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'The table below shows the food preferences of $200$ survey respondents.\n\n| | Prefer Sushi | Prefer Pasta | Total |\n|---|---|---|---|\n| Adults | $48$ | $72$ | $120$ |\n| Teens | $54$ | $26$ | $80$ |\n| Total | $102$ | $98$ | $200$ |\n\nIf a respondent who prefers Sushi is selected at random, what fraction (in lowest terms) of those respondents are Teens? Express your answer as a fraction.',
    correctAnswer: '9/17',
    explanation: '**SAT Pattern: Two-Way Table Conditional Probability**\n\n**The correct answer is $\\dfrac{9}{17}$.**\n\n**The Fast Way (~15s):** "Given Sushi" $\\Rightarrow$ denominator $= 102$. Teens $\\cap$ Sushi $= 54$. $54/102 = 9/17$.\n\n**The Full Solution:**\nThe condition restricts to the $102$ Sushi preferrers (the Sushi column total).\nOf those, $54$ are Teens (cell at Teens $\\cap$ Sushi).\n\n$P(\\text{Teens} \\mid \\text{Sushi}) = \\dfrac{54}{102}$.\n\nReduce: $\\gcd(54, 102) = 6$, so $\\dfrac{54}{102} = \\dfrac{9}{17}$.\n\nVerification: $9 \\times 6 = 54$ and $17 \\times 6 = 102$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using the grand total $200$ as the denominator: $54/200 = 27/100$ (joint probability, not conditional).\n* Reporting the unreduced $54/102$.\n* Using the wrong cell ($48$ from Adults-Sushi).\n\n**Test Day Takeaway:** When the question asks for a fraction in lowest terms, reduce by the GCD. For two-way tables, GCDs often pop out as $6$, $8$, or $12$ thanks to design-friendly numbers.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'two-way-table-conditional-probability',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-142',
    domain: 'problem-solving',
    skills: ['conditional-probability', 'two-way-table'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The table below shows survey results from $300$ students about their primary mode of transportation.\n\n| | Drives | Bikes | Walks | Total |\n|---|---|---|---|---|\n| Freshmen | $20$ | $35$ | $25$ | $80$ |\n| Sophomores | $40$ | $30$ | $20$ | $90$ |\n| Juniors+ | $80$ | $20$ | $30$ | $130$ |\n| Total | $140$ | $85$ | $75$ | $300$ |\n\nIf a student who Drives is selected at random, what is the probability that the student is a Junior or above?',
    choices: [
      { id: 'A', text: '$\\dfrac{80}{140}$' },
      // distractor: grand total
      { id: 'B', text: '$\\dfrac{80}{300}$' },
      // distractor: inverse
      { id: 'C', text: '$\\dfrac{80}{130}$' },
      // distractor: wrong cell
      { id: 'D', text: '$\\dfrac{40}{140}$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Given Drives $\\Rightarrow$ denominator $= 140$. Junior+ $\\cap$ Drives $= 80$. $P = 80/140 = 4/7$.\n\n**The Full Solution:**\nThe condition "student who Drives" restricts the universe to the $140$ drivers (Drives column total).\n\nWithin those $140$, the cell at Junior+ $\\cap$ Drives is $80$.\n\n$P(\\text{Junior+} \\mid \\text{Drives}) = \\dfrac{80}{140} = \\dfrac{4}{7}$.\n\nVerification: among $140$ drivers, $80$ are Juniors+ — $80/140 \\approx 57\\%$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — uses grand total $300$ instead of $140$.\n* Choice C: "applies the inverse operation" — gives $P(\\text{Drives} \\mid \\text{Junior+}) = 80/130$.\n* Choice D: "wrong base" — picks Sophomore-Drives cell ($40$) instead of Junior+.\n\n**Test Day Takeaway:** $P(A \\mid B)$ has the $B$-total in the denominator, the cell $A \\cap B$ in the numerator. Read which is the GIVEN condition vs the TARGET event.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'two-way-table-conditional-probability',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-143',
    domain: 'problem-solving',
    skills: ['conditional-probability', 'two-way-table'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'The table below shows whether each of $250$ surveyed adults has a college degree and whether they own their home.\n\n| | College Degree | No College Degree | Total |\n|---|---|---|---|\n| Owns Home | $80$ | $20$ | $100$ |\n| Rents | $70$ | $80$ | $150$ |\n| Total | $150$ | $100$ | $250$ |\n\nWhat percent of adults with a College Degree own their home? Round to the nearest whole percent.',
    correctAnswer: '53',
    explanation: '**SAT Pattern: Two-Way Table Conditional Probability**\n\n**The correct answer is $53$.**\n\n**The Fast Way (~10s):** Given College Degree $\\Rightarrow$ denominator $= 150$. Owns $\\cap$ Degree $= 80$. $80/150 = 0.5333\\overline{3} \\approx 53\\%$.\n\n**The Full Solution:**\nCondition: "adults with a College Degree" restricts to $150$ adults (College Degree column total).\n\nWithin those $150$, $80$ own a home (cell at Owns Home $\\cap$ College Degree).\n\n$P(\\text{Owns Home} \\mid \\text{College Degree}) = \\dfrac{80}{150} \\approx 0.5333 \\approx 53\\%$.\n\nVerification: $80/150 \\times 100 = 53.3\\%$, rounds to $53$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using the grand total ($250$) as the denominator: $80/250 = 32\\%$.\n* Reading the wrong cell (e.g., $70$ from Rents-Degree).\n* Reporting the decimal $0.53$ when the question asks for a percent.\n\n**Test Day Takeaway:** "What percent of X is Y?" $\\Leftrightarrow$ $P(Y \\mid X) \\times 100\\%$. Denominator is X-total; numerator is X $\\cap$ Y cell.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'two-way-table-conditional-probability',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-144',
    domain: 'problem-solving',
    skills: ['conditional-probability', 'two-way-table'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The table below shows survey results from $400$ employees.\n\n| | Remote | In Office | Total |\n|---|---|---|---|\n| Management | $60$ | $90$ | $150$ |\n| Staff | $130$ | $120$ | $250$ |\n| Total | $190$ | $210$ | $400$ |\n\nIf a Staff employee is selected at random, what is the probability that the employee works In Office?',
    choices: [
      { id: 'A', text: '$\\dfrac{12}{25}$' },
      // distractor: grand total
      { id: 'B', text: '$\\dfrac{120}{400}$' },
      // distractor: management instead
      { id: 'C', text: '$\\dfrac{90}{150}$' },
      // distractor: wrong direction (P(staff|in office))
      { id: 'D', text: '$\\dfrac{120}{210}$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Given Staff $\\Rightarrow$ denominator $= 250$. Staff $\\cap$ In Office $= 120$. $120/250 = 12/25$.\n\n**The Full Solution:**\nThe condition "Staff employee" restricts to the $250$ Staff (Staff row total).\n\nOf those $250$, $120$ work In Office.\n\n$P(\\text{In Office} \\mid \\text{Staff}) = \\dfrac{120}{250}$.\n\nReduce by GCD: $\\gcd(120, 250) = 10$, so $\\dfrac{120}{250} = \\dfrac{12}{25}$.\n\nVerification: $12 \\cdot 10 = 120$, $25 \\cdot 10 = 250$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — uses grand total $400$ (joint probability).\n* Choice C: "wrong base" — gives $P(\\text{In Office} \\mid \\text{Management}) = 90/150$.\n* Choice D: "applies the inverse operation" — reverses condition: $P(\\text{Staff} \\mid \\text{In Office}) = 120/210$.\n\n**Test Day Takeaway:** When the row/column structure changes, the denominator changes. Identify the GIVEN condition first, then find its total.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'two-way-table-conditional-probability',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-145',
    domain: 'problem-solving',
    skills: ['conditional-probability', 'two-way-table'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A class of $80$ students was surveyed about a school trip. The results: $30$ Boys and $50$ Girls were surveyed; $24$ Boys said they would attend and $35$ Girls said they would attend. If a student who said they would attend is selected at random, what is the probability that the student is a Girl? Express your answer as a fraction in lowest terms.',
    correctAnswer: '35/59',
    explanation: '**SAT Pattern: Two-Way Table Conditional Probability**\n\n**The correct answer is $\\dfrac{35}{59}$.**\n\n**The Fast Way (~15s):** Build the table mentally. Total attending $= 24 + 35 = 59$. Girls attending $= 35$. $P = 35/59$ ($\\gcd(35, 59) = 1$).\n\n**The Full Solution:**\nFill in the implicit two-way table:\n\n| | Attend | Not Attend | Total |\n|---|---|---|---|\n| Boys | $24$ | $6$ | $30$ |\n| Girls | $35$ | $15$ | $50$ |\n| Total | $59$ | $21$ | $80$ |\n\nGiven a student who said "attend" $\\Rightarrow$ denominator $= 59$. Girls $\\cap$ Attend $= 35$.\n\n$P(\\text{Girl} \\mid \\text{Attend}) = \\dfrac{35}{59}$.\n\nGCD$(35, 59) = 1$, so already in lowest terms.\n\nVerification: $35 + 24 = 59$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using the grand total $80$ as the denominator.\n* Using the Girls\' row total $50$ ($35/50 = 7/10$).\n* Confusing the question with "what percent of girls attended" ($35/50 = 70\\%$).\n\n**Test Day Takeaway:** Word-problem versions of two-way tables: build the table from the description, then proceed normally. The "attend" column total is the sum of attending Boys + Girls.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'two-way-table-conditional-probability',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-146',
    domain: 'problem-solving',
    skills: ['conditional-probability', 'two-way-table'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The table below shows survey responses from $400$ employees.\n\n| | Agree | Disagree | Neutral | Total |\n|---|---|---|---|---|\n| Engineering | $50$ | $30$ | $20$ | $100$ |\n| Sales | $30$ | $90$ | $30$ | $150$ |\n| Marketing | $40$ | $60$ | $50$ | $150$ |\n| Total | $120$ | $180$ | $100$ | $400$ |\n\nIf an employee who is NOT Engineering is selected at random, what is the probability that the employee Disagrees?',
    choices: [
      { id: 'A', text: '$\\dfrac{150}{300}$' },
      // distractor: includes Engineering
      { id: 'B', text: '$\\dfrac{180}{400}$' },
      // distractor: just Sales
      { id: 'C', text: '$\\dfrac{90}{150}$' },
      // distractor: complement of disagree
      { id: 'D', text: '$\\dfrac{30}{100}$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** "Not Engineering" $\\Rightarrow$ denominator $= 150 + 150 = 300$. Disagree among Sales + Marketing $= 90 + 60 = 150$. $P = 150/300 = 1/2$.\n\n**The Full Solution:**\n"Not Engineering" means Sales OR Marketing. Combine their row totals:\n* Sales row total: $150$.\n* Marketing row total: $150$.\n* Combined denominator: $150 + 150 = 300$.\n\nDisagree within those rows:\n* Sales $\\cap$ Disagree: $90$.\n* Marketing $\\cap$ Disagree: $60$.\n* Combined numerator: $90 + 60 = 150$.\n\n$P(\\text{Disagree} \\mid \\text{Not Engineering}) = \\dfrac{150}{300} = \\dfrac{1}{2}$.\n\nAlternative check: total Disagree minus Engineering Disagree $= 180 - 30 = 150$. Total Not-Engineering $= 400 - 100 = 300$. Same result \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — uses grand total $400$ instead of "Not Engineering" total $300$.\n* Choice C: "stops one step early" — uses Sales row only ($90/150$), ignoring Marketing.\n* Choice D: "wrong base" — uses Engineering row.\n\n**Test Day Takeaway:** "NOT X" $\\Rightarrow$ sum all other categories. Equivalently, grand total $-$ X-total. Don\'t accidentally include the excluded category.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'two-way-table-conditional-probability',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-147',
    domain: 'problem-solving',
    skills: ['conditional-probability', 'two-way-table'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A two-way table shows that, out of $500$ patients, $200$ were diagnosed with Condition $X$, and $80\\%$ of those with Condition $X$ tested positive on a screening test. Of the $300$ patients WITHOUT Condition $X$, $90$ tested positive. If a patient who tested positive is selected at random, what is the probability that the patient has Condition $X$?',
    choices: [
      // distractor: P(positive | X) — original given
      { id: 'A', text: '$\\dfrac{160}{200}$' },
      { id: 'B', text: '$\\dfrac{160}{250}$' },
      // distractor: P(X)
      { id: 'C', text: '$\\dfrac{200}{500}$' },
      // distractor: ratio of positives to total
      { id: 'D', text: '$\\dfrac{250}{500}$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Positives with $X$: $80\\%$ of $200 = 160$. Positives without $X$: $90$. Total positives: $250$. $P(X \\mid \\text{positive}) = 160/250 = 16/25$.\n\n**The Full Solution:**\nBuild the table:\n* With $X$: $200$. Of these, $80\\% = 160$ tested positive; $40$ tested negative.\n* Without $X$: $300$. Of these, $90$ tested positive; $210$ tested negative.\n\n| | Positive | Negative | Total |\n|---|---|---|---|\n| Has $X$ | $160$ | $40$ | $200$ |\n| No $X$ | $90$ | $210$ | $300$ |\n| Total | $250$ | $250$ | $500$ |\n\nGiven a patient tested positive $\\Rightarrow$ denominator $= 250$ (total positives).\nOf those, $160$ have Condition $X$.\n\n$P(\\text{has } X \\mid \\text{Positive}) = \\dfrac{160}{250} = \\dfrac{16}{25}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — gives $P(\\text{positive} \\mid X) = 160/200 = 80\\%$ (the test\'s sensitivity, the GIVEN value).\n* Choice C: "wrong base" — gives the unconditional $P(X) = 200/500 = 40\\%$ — the prior probability, ignoring the test result.\n* Choice D: "wrong formula" — gives the proportion of positives in the whole sample, unrelated to the question.\n\n**Test Day Takeaway:** Bayesian-style conditional: $P(\\text{has condition} \\mid \\text{positive test}) \\neq P(\\text{positive test} \\mid \\text{has condition})$. They differ when the condition is RARE (or test isn\'t perfect). Always reconstruct the table from percentages.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'two-way-table-conditional-probability',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  // ===== Phase 2 batch 7/1: reverse-percent-multi-step (8 items) =====
  // Pattern: multi-step percent problems — "a is p% of (b + c)" with chained
  // relationships, percent-of-percent, successive discount/markup. 8 test
  // occurrences across PT1, PT4, PT10 and friends. SAT Pattern title (verbatim):
  // 'Reverse-Percent Multi-Step' → kebab 'reverse-percent-multi-step'.
  {
    id: 'bank-ps-148',
    domain: 'problem-solving',
    skills: ['percent-of-value', 'percent-word-problems'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'If $a$ is $25\\%$ of $(b + c)$, where $b = 50$ and $c = 30$, what is the value of $a$?',
    choices: [
      { id: 'A', text: '$20$' },
      // distractor: percent of one only
      { id: 'B', text: '$12.5$' },
      // distractor: adds 25% as a flat number
      { id: 'C', text: '$25$' },
      // distractor: ignores the percent
      { id: 'D', text: '$80$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $a = 0.25(b + c) = 0.25(50 + 30) = 0.25(80) = 20$.\n\n**The Full Solution:**\nTranslate: "$a$ is $25\\%$ of $(b + c)$" means $a = \\dfrac{25}{100}(b + c)$.\n\nSubstitute $b = 50$, $c = 30$:\n$a = 0.25(50 + 30) = 0.25 \\cdot 80 = 20$.\n\nVerification: $25\\%$ of $80 = 80 / 4 = 20$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — computes $25\\%$ of $b$ only ($12.5$).\n* Choice C: "wrong base" — picks the $25$ directly.\n* Choice D: "wrong formula" — gives $b + c$ without applying the percent.\n\n**Test Day Takeaway:** "$a$ is $p\\%$ of $X$" $\\Rightarrow a = (p/100) \\cdot X$. The denominator/base is whatever follows "of" — here, the sum $b + c$.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'reverse-percent-multi-step',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-149',
    domain: 'problem-solving',
    skills: ['percent-of-value', 'percent-word-problems'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'If $a$ is $40\\%$ of $(b + c)$, where $b = 60$ and $c = 90$, what is the value of $a$?',
    correctAnswer: '60',
    explanation: '**SAT Pattern: Reverse-Percent Multi-Step**\n\n**The correct answer is $60$.**\n\n**The Fast Way (~15s):** $a = 0.40(60 + 90) = 0.40(150) = 60$.\n\n**The Full Solution:**\n$a = \\dfrac{40}{100}(b + c) = 0.40 \\cdot (60 + 90) = 0.40 \\cdot 150 = 60$.\n\nVerification: $40\\%$ of $150$ — convert to fraction: $\\dfrac{2}{5} \\cdot 150 = 60$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing $40\\%$ of one term: $0.40 \\cdot 60 = 24$ or $0.40 \\cdot 90 = 36$.\n* Forgetting the percent: reporting $150$ or $b + c$.\n* Adding $40$ to $60 + 90$ instead of multiplying by $0.40$.\n\n**Test Day Takeaway:** Decimal-then-multiply is faster than fraction-then-multiply for $25\\%, 40\\%, 60\\%$ — easy mental math.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'reverse-percent-multi-step',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-150',
    domain: 'problem-solving',
    skills: ['percent-of-value', 'percent-word-problems'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'If $30$ is $p\\%$ of $(b + c)$, where $b = 40$ and $c = 60$, what is the value of $p$?',
    choices: [
      { id: 'A', text: '$30$' },
      // distractor: percent-of-one
      { id: 'B', text: '$75$' },
      // distractor: percent-of-other
      { id: 'C', text: '$50$' },
      // distractor: wrong formula
      { id: 'D', text: '$3$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $30 = (p/100)(100) = p$. So $p = 30$.\n\n**The Full Solution:**\n$30 = \\dfrac{p}{100}(b + c) = \\dfrac{p}{100}(40 + 60) = \\dfrac{p}{100}(100)$.\n\nSimplify: $30 = p$, so $p = 30$.\n\nVerification: $30\\%$ of $100 = 30$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — uses $b = 40$: $30/40 = 75\\%$.\n* Choice C: "wrong base" — uses $c = 60$: $30/60 = 50\\%$.\n* Choice D: "off-by-one" — drops a factor of $100$ in the percent conversion.\n\n**Test Day Takeaway:** When the base sums to a round number (here $b + c = 100$), the percent value POPS OUT as the numerator directly. Watch for that.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'reverse-percent-multi-step',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-151',
    domain: 'problem-solving',
    skills: ['percent-of-value', 'percent-word-problems'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'If $a = 20\\%$ of $(b + c)$, $a = 50$, and $b = 100$, what is the value of $c$?',
    correctAnswer: '150',
    explanation: '**SAT Pattern: Reverse-Percent Multi-Step**\n\n**The correct answer is $150$.**\n\n**The Fast Way (~20s):** $50 = 0.20(100 + c) \\Rightarrow 250 = 100 + c \\Rightarrow c = 150$.\n\n**The Full Solution:**\n$a = \\dfrac{20}{100}(b + c)$\n$50 = 0.20(100 + c)$\n$50 / 0.20 = 100 + c$\n$250 = 100 + c$\n$c = 150$.\n\nVerification: $b + c = 250$. $20\\%$ of $250 = 50$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Dividing $50$ by $20$ (forgetting the percent conversion): gives $c = 2.5 - 100$ wrong.\n* Computing $50 \\cdot 5 = 250$ but forgetting to subtract $b = 100$: reports $c = 250$.\n* Adding instead of dividing: $50 + 100 = 150$ (gives the right answer by accident, wrong reasoning).\n\n**Test Day Takeaway:** Reverse-percent: $a = (p/100) X \\Rightarrow X = a / (p/100) = a \\cdot (100/p)$. Then peel off any known component of $X$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'reverse-percent-multi-step',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-152',
    domain: 'problem-solving',
    skills: ['successive-percent-change', 'percent-word-problems'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A store offers a $20\\%$ discount on a jacket originally priced at $\\$50$. After the discount, a sales tax of $8\\%$ is added. What is the final price?',
    choices: [
      { id: 'A', text: '$\\$43.20$' },
      // distractor: subtracts both percents
      { id: 'B', text: '$\\$36$' },
      // distractor: applies both as flat additions
      { id: 'C', text: '$\\$44$' },
      // distractor: applies tax to original
      { id: 'D', text: '$\\$44.40$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Discount: $50 \\cdot 0.80 = 40$. Tax: $40 \\cdot 1.08 = 43.20$.\n\n**The Full Solution:**\nApply the discount first: $50 \\cdot (1 - 0.20) = 50 \\cdot 0.80 = 40$.\nApply the tax to the discounted price: $40 \\cdot (1 + 0.08) = 40 \\cdot 1.08 = 43.20$.\n\nVerification: $40 \\cdot 1.08 = 40 + 3.20 = 43.20$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — applies both as flat dollar amounts ($50 - 20 + 6 = 36$).\n* Choice C: "wrong sign" — applies tax to original $50$: $50 \\cdot 0.80 + 50 \\cdot 0.08 = 40 + 4 = 44$.\n* Choice D: "off-by-one" — applies discount and tax in wrong order: $50 \\cdot 1.08 \\cdot 0.80 = 43.20$ (same answer surprisingly), but D might come from $50 \\cdot 1.08 - 50 \\cdot 0.20 \\cdot 1.08$ slip.\n\n**Test Day Takeaway:** Successive percent changes MULTIPLY. Discount = $\\times (1 - p)$, tax/markup = $\\times (1 + p)$. Order doesn\'t matter mathematically for two scalings, but the question usually specifies one order.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'reverse-percent-multi-step',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-153',
    domain: 'problem-solving',
    skills: ['successive-percent-change', 'percent-word-problems'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'After a $20\\%$ increase followed by a $10\\%$ increase, the value of an item is $\\$132$. What was the original value, in dollars?',
    correctAnswer: '100',
    explanation: '**SAT Pattern: Reverse-Percent Multi-Step**\n\n**The correct answer is $100$.**\n\n**The Fast Way (~20s):** $V \\cdot 1.20 \\cdot 1.10 = 132 \\Rightarrow V \\cdot 1.32 = 132 \\Rightarrow V = 100$.\n\n**The Full Solution:**\nLet $V$ be the original value. Applying both increases:\n$V \\cdot (1 + 0.20)(1 + 0.10) = 132$\n$V \\cdot 1.20 \\cdot 1.10 = 132$\n$V \\cdot 1.32 = 132$\n$V = 100$.\n\nVerification: $100 \\cdot 1.20 = 120$, then $120 \\cdot 1.10 = 132$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Adding percents: treating $20\\% + 10\\% = 30\\%$ gives $V \\cdot 1.30 = 132 \\Rightarrow V \\approx 101.5$ — close but WRONG.\n* Subtracting: undoing one $20\\%$ as $132 / 1.20 = 110$ and stopping there.\n* Reporting the intermediate $V \\cdot 1.20 = 120$ value.\n\n**Test Day Takeaway:** Successive percent INCREASES compound MULTIPLICATIVELY: $(1 + p_1)(1 + p_2)$. Don\'t add the percents; multiply the factors.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'reverse-percent-multi-step',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-154',
    domain: 'problem-solving',
    skills: ['percent-of-value', 'percent-word-problems'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'If $a = 2.5(b + c)$ and $b$ is $40\\%$ of $c$, then $a$ is what percent of $b$?',
    choices: [
      { id: 'A', text: '$875\\%$' },
      // distractor: adds the two percents
      { id: 'B', text: '$290\\%$' },
      // distractor: ratio without sum
      { id: 'C', text: '$250\\%$' },
      // distractor: forgets the +c piece
      { id: 'D', text: '$625\\%$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Let $c = 100$. Then $b = 40$. $b + c = 140$. $a = 2.5 \\cdot 140 = 350$. $a / b = 350 / 40 = 8.75 = 875\\%$.\n\n**The Full Solution:**\nPick a clean value. Let $c = 100$.\nThen $b = 40\\%$ of $c = 0.40 \\cdot 100 = 40$.\n$b + c = 40 + 100 = 140$.\n$a = 2.5 \\cdot 140 = 350$.\n\n"$a$ is what percent of $b$":\n$\\dfrac{a}{b} \\cdot 100\\% = \\dfrac{350}{40} \\cdot 100\\% = 8.75 \\cdot 100\\% = 875\\%$.\n\nVerification (algebraic): $c = 2.5b$ (from $b = 0.40c$), so $a = 2.5(b + 2.5b) = 2.5 \\cdot 3.5b = 8.75b$. So $a / b = 8.75 = 875\\%$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — adds $250\\% + 40\\% = 290\\%$ wrongly.\n* Choice C: "stops one step early" — reports the multiplier $2.5 = 250\\%$.\n* Choice D: "wrong base" — uses $a = 2.5 \\cdot 100 = 250$ (forgets to add $b$ to the base).\n\n**Test Day Takeaway:** "$X$ is what percent of $Y$" $= (X/Y) \\cdot 100\\%$. When percents stack with sums, plug in a clean number for the smallest unknown (here $c = 100$).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'reverse-percent-multi-step',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-ps-155',
    domain: 'problem-solving',
    skills: ['successive-percent-change', 'percent-word-problems'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'The price of an item is increased by $p\\%$, then decreased by $p\\%$. The final price is $4\\%$ less than the original price. What is the value of $p$?',
    correctAnswer: '20',
    explanation: '**SAT Pattern: Reverse-Percent Multi-Step**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~30s):** $(1 + p/100)(1 - p/100) = 0.96 \\Rightarrow 1 - p^2/10000 = 0.96 \\Rightarrow p^2 = 400 \\Rightarrow p = 20$.\n\n**The Full Solution:**\nLet $V$ be the original price. Apply the increase, then the decrease:\n$V \\cdot \\left(1 + \\dfrac{p}{100}\\right) \\cdot \\left(1 - \\dfrac{p}{100}\\right) = 0.96 V$.\n\nCancel $V$ and apply difference of squares:\n$1 - \\dfrac{p^2}{10000} = 0.96$\n$\\dfrac{p^2}{10000} = 0.04$\n$p^2 = 400$\n$p = 20$ (positive value).\n\nVerification: $V \\cdot 1.20 \\cdot 0.80 = V \\cdot 0.96$ — exactly $4\\%$ less than $V$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Assuming the increase + decrease cancel out: that\'s only true if you ADD percents, which is WRONG for compound percent change.\n* Reporting $p = 4$ (the percent decrease in the FINAL price, not the per-step percent).\n* Forgetting to take the square root: reporting $p = 400$.\n\n**Test Day Takeaway:** Up $p\\%$ then down $p\\%$ does NOT return to the original. It returns to $V(1 - p^2/10000)$ — always less than $V$. The "lost" fraction is $p^2/10000$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'reverse-percent-multi-step',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  // ===== Phase 2 batch 9/5: proportion-ratio (8 items) =====
  // Pattern title: 'Proportion / Ratio'. SLUG: 'proportion-ratio' (the slash
  // becomes a dash via kebab-case in extractSatPattern).
  // 5 test occurrences across M2Easy variants.
  { id: 'bank-ps-156', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A recipe calls for nuts and dried fruit in a $5 : 3$ ratio by weight. If a batch uses $24$ ounces of dried fruit, how many ounces of nuts does it use?',
    choices: [{ id: 'A', text: '$40$' }, { id: 'B', text: '$16$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$\\dfrac{72}{5}$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Proportion / Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way:** $\\dfrac{5}{3} = \\dfrac{n}{24} \\Rightarrow n = 40$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($16$): flips the proportion — solves $\\frac{3}{5} = \\frac{n}{24}$ to get the wrong side.\n* Choice C ($8$): scales the difference ($5 - 3 = 2$) by the given amount — uses ratio difference, not ratio.\n* Choice D ($72/5$): scales by $24/3 = 8$ but applies it to the wrong term — gives $5 \\cdot 24 / 5 = 24$, but mis-arithmetic.\n\n**Test Day Takeaway:** Set up proportions with matching categories aligned. Cross-multiply.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'proportion-ratio', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-157', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'easy', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $\\dfrac{x}{12} = \\dfrac{3}{4}$?',
    correctAnswer: '9',
    explanation: '**SAT Pattern: Proportion / Ratio**\n\n**The correct answer is $9$.**\n\n**The Fast Way:** Cross-multiply: $4x = 36 \\Rightarrow x = 9$.\n\n**Test Day Takeaway:** Direct proportion: cross-multiply to solve.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'proportion-ratio', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-158', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In a class, the ratio of girls to boys is $4 : 5$. If there are $36$ students in total, how many girls are in the class?',
    choices: [{ id: 'A', text: '$16$' }, { id: 'B', text: '$20$' }, { id: 'C', text: '$9$' }, { id: 'D', text: '$4$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Proportion / Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way:** Parts: $4 + 5 = 9$. Total $36/9 = 4$ per part. Girls: $4 \\cdot 4 = 16$.\n\n**Why the wrong answers are tempting:** B is boys; C is per-part; D is the ratio numerator.\n\n**Test Day Takeaway:** Total parts in ratio $a:b$ is $a + b$. Each part = total / parts.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'proportion-ratio', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-159', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'medium', type: 'fill-in',
    question: 'If a car travels $180$ miles in $3$ hours at a constant speed, how many miles will it travel in $5$ hours?',
    correctAnswer: '300',
    explanation: '**SAT Pattern: Proportion / Ratio**\n\n**The correct answer is $300$.**\n\n**The Fast Way:** Rate $= 60$ mph. $60 \\cdot 5 = 300$.\n\n**Test Day Takeaway:** Constant rate = direct proportion.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'proportion-ratio', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-160', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A map uses a scale of $1$ inch $= 50$ miles. Two cities are $4.5$ inches apart on the map. What is the actual distance between them, in miles?',
    choices: [{ id: 'A', text: '$225$' }, { id: 'B', text: '$54.5$' }, { id: 'C', text: '$200$' }, { id: 'D', text: '$45$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Proportion / Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way:** $4.5 \\cdot 50 = 225$.\n\n**Why the wrong answers are tempting:** B adds; C uses $4$; D arbitrary.\n\n**Test Day Takeaway:** Map scale: multiply map distance by ratio.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'proportion-ratio', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-161', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'medium', type: 'fill-in',
    question: 'The ratio of apples to oranges in a basket is $7 : 3$. If there are $21$ apples, how many oranges are there?',
    correctAnswer: '9',
    explanation: '**SAT Pattern: Proportion / Ratio**\n\n**The correct answer is $9$.**\n\n**The Fast Way:** $\\dfrac{7}{3} = \\dfrac{21}{x} \\Rightarrow x = 9$.\n\n**Test Day Takeaway:** Cross-multiply or simplify: $21 = 7 \\cdot 3$, so oranges $= 3 \\cdot 3 = 9$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'proportion-ratio', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-162', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Three numbers are in the ratio $2 : 3 : 5$. If their sum is $60$, what is the largest number?',
    choices: [{ id: 'A', text: '$30$' }, { id: 'B', text: '$25$' }, { id: 'C', text: '$18$' }, { id: 'D', text: '$12$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Proportion / Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way:** Total parts $= 10$. Each part $= 6$. Largest: $5 \\cdot 6 = 30$.\n\n**Why the wrong answers are tempting:** B/C/D give middle, partial, or wrong piece.\n\n**Test Day Takeaway:** Three-part ratio: total parts = sum of ratio numbers.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'proportion-ratio', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-163', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'hard', type: 'fill-in',
    question: 'A box contains red and blue marbles in a ratio of $3 : 5$. After $10$ blue marbles are added, the ratio of red to blue becomes $3 : 7$. How many red marbles are in the box?',
    correctAnswer: '15',
    explanation: '**SAT Pattern: Proportion / Ratio**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~30s):** Let red $= 3k$, blue $= 5k$. After adding $10$ blue: $\\dfrac{3k}{5k + 10} = \\dfrac{3}{7}$. Cross-multiply: $21k = 15k + 30 \\Rightarrow 6k = 30 \\Rightarrow k = 5$. Red $= 3 \\cdot 5 = 15$.\n\n**The Full Solution:**\nLet $k$ be the common multiplier. Then red $= 3k$ and blue $= 5k$ initially.\n\nAfter adding $10$ blue: red still $= 3k$, blue $= 5k + 10$. New ratio:\n$\\dfrac{3k}{5k + 10} = \\dfrac{3}{7}$\n\nCross-multiply: $21k = 3(5k + 10) = 15k + 30 \\Rightarrow 6k = 30 \\Rightarrow k = 5$.\n\nRed $= 3 \\cdot 5 = 15$.\n\nVerification: red $= 15$, blue $= 25 + 10 = 35$. Ratio $15:35 = 3:7$ \\checkmark.\n\n**Common Mistakes:** Forgetting that red is UNCHANGED; using $k = 10$ literally.\n\n**Test Day Takeaway:** Use $k$ as the common multiplier; only blue changes. Solve the new equation for $k$, then back out the count.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'proportion-ratio', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 10/4: finding-a-missing-value-given-the-mean (8 items) =====
  { id: 'bank-ps-164', domain: 'problem-solving', skills: ['calculate-mean'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The mean of four numbers is $11$. Three of the numbers are $8$, $10$, and $14$. What is the fourth number?',
    choices: [{ id: 'A', text: '$12$' }, { id: 'B', text: '$11$' }, { id: 'C', text: '$32$' }, { id: 'D', text: '$44$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice A is correct.**\n\n**The Fast Way:** Sum needed: $4 \\cdot 11 = 44$. Given sum: $32$. Missing: $12$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($11$): reports the mean as the missing value — formula confusion.\n* Choice C ($32$): reports the SUM of the three known values — forgets to subtract.\n* Choice D ($44$): reports the TOTAL sum (mean × count) — forgets to subtract the known sum.\n\n**Test Day Takeaway:** Total sum = mean × count. Missing value = total − sum-of-known.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'finding-a-missing-value-given-the-mean', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-165', domain: 'problem-solving', skills: ['calculate-mean'], difficulty: 'easy', type: 'fill-in',
    question: 'The mean of five numbers is $20$. Four of the numbers are $15$, $18$, $22$, and $25$. What is the fifth number?',
    correctAnswer: '20',
    explanation: '**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**The correct answer is $20$.**\n\n**The Fast Way:** Total: $5 \\cdot 20 = 100$. Sum given: $80$. Missing: $20$.\n\n**Test Day Takeaway:** Mean × count = total.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'finding-a-missing-value-given-the-mean', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-166', domain: 'problem-solving', skills: ['calculate-mean'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A student\'s mean score on four quizzes is $82$. What score on a fifth quiz would raise the student\'s mean to $84$?',
    choices: [{ id: 'A', text: '$92$' }, { id: 'B', text: '$86$' }, { id: 'C', text: '$84$' }, { id: 'D', text: '$82$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice A is correct.**\n\n**The Fast Way:** Current sum: $4 \\cdot 82 = 328$. Required sum: $5 \\cdot 84 = 420$. Score: $420 - 328 = 92$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($86$): reports the new mean times the new count divided by 5 — but actually computes $84 + 2$ (mean + 2 points).\n* Choice C ($84$): reports the new mean itself — stops at the requirement.\n* Choice D ($82$): reports the current mean — forgets the increase requirement.\n\n**Test Day Takeaway:** Find the GAP between current and required sums.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'finding-a-missing-value-given-the-mean', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-167', domain: 'problem-solving', skills: ['calculate-mean'], difficulty: 'medium', type: 'fill-in',
    question: 'The mean of six numbers is $50$. If five of the numbers sum to $260$, what is the sixth number?',
    correctAnswer: '40',
    explanation: '**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**The correct answer is $40$.**\n\n**The Fast Way:** Total: $6 \\cdot 50 = 300$. Missing: $300 - 260 = 40$.\n\n**Test Day Takeaway:** Subtract known sum from required total.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'finding-a-missing-value-given-the-mean', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-168', domain: 'problem-solving', skills: ['calculate-mean'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A list contains the numbers $7, 9, 13, k$. If the mean of the list is $10$, what is the value of $k$?',
    choices: [{ id: 'A', text: '$11$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$29$' }, { id: 'D', text: '$40$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice A is correct.**\n\n**The Fast Way:** Total: $4 \\cdot 10 = 40$. Sum given: $29$. $k = 40 - 29 = 11$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($10$): reports the mean itself.\n* Choice C ($29$): reports the SUM of the three known values.\n* Choice D ($40$): reports the TOTAL ($4 \\cdot 10$) without subtracting.\n\n**Test Day Takeaway:** Same formula whether the missing is the last item or labeled $k$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'finding-a-missing-value-given-the-mean', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-169', domain: 'problem-solving', skills: ['calculate-mean'], difficulty: 'medium', type: 'fill-in',
    question: 'The mean of three test scores is $78$. One score is $85$. If the other two scores are equal, what is each of those scores?',
    correctAnswer: '74.5',
    explanation: '**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**The correct answer is $74.5$.**\n\n**The Fast Way:** Total: $234$. Other two sum: $234 - 85 = 149$. Each: $74.5$.\n\n**Test Day Takeaway:** Equal-missing case: subtract known and divide by count.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'finding-a-missing-value-given-the-mean', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-170', domain: 'problem-solving', skills: ['calculate-mean'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In a set of seven numbers with a mean of $30$, six numbers are removed. If the mean of those six removed numbers is $32$, what is the remaining number?',
    choices: [{ id: 'A', text: '$18$' }, { id: 'B', text: '$30$' }, { id: 'C', text: '$32$' }, { id: 'D', text: '$2$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice A is correct.**\n\n**The Fast Way:** Total: $7 \\cdot 30 = 210$. Sum of $6$: $6 \\cdot 32 = 192$. Remaining: $210 - 192 = 18$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($30$): reports the ORIGINAL mean — formula confusion.\n* Choice C ($32$): reports the mean of the six removed numbers.\n* Choice D ($2$): subtracts $30 - 32 + 4 = 2$ or similar misderivation — uses the wrong direction.\n\n**Test Day Takeaway:** Multi-step: find original total, subtract subset total.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'finding-a-missing-value-given-the-mean', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-171', domain: 'problem-solving', skills: ['calculate-mean'], difficulty: 'hard', type: 'fill-in',
    question: 'A class has $20$ students. The mean of $19$ students\' scores is $75$. If adding the $20$th student\'s score raises the class mean to $76$, what is the $20$th student\'s score?',
    correctAnswer: '95',
    explanation: '**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**The correct answer is $95$.**\n\n**The Fast Way:** Old total: $19 \\cdot 75 = 1425$. New total: $20 \\cdot 76 = 1520$. Score: $1520 - 1425 = 95$.\n\n**Test Day Takeaway:** Each new mean implies a new total; the new student fills the gap.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'finding-a-missing-value-given-the-mean', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 10/5: basic-probability (8 items) =====
  { id: 'bank-ps-172', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A bag contains $3$ red marbles, $5$ blue marbles, and $2$ green marbles. If one marble is drawn at random, what is the probability it is blue?',
    choices: [{ id: 'A', text: '$\\dfrac{1}{2}$' }, { id: 'B', text: '$\\dfrac{5}{8}$' }, { id: 'C', text: '$\\dfrac{2}{5}$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Basic Probability**\n\n**Choice A is correct.**\n\n**The Fast Way:** $P = 5/10 = 1/2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($5/8$): divides by $8$ (the sum of $3 + 5$) — forgets to count the green marbles in the total.\n* Choice C ($2/5$): inverts blue and red counts — uses $2/5$ instead of $5/10$.\n* Choice D ($5$): reports the COUNT of blue marbles as the probability — formula confusion.\n\n**Test Day Takeaway:** P = favorable / total.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'basic-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-173', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'easy', type: 'fill-in',
    question: 'A standard six-sided die is rolled. What is the probability of rolling a number greater than $4$? Give your answer as a fraction in lowest terms.',
    correctAnswer: '1/3',
    explanation: '**SAT Pattern: Basic Probability**\n\n**The correct answer is $1/3$.**\n\n**The Fast Way:** Favorable: $\\{5, 6\\}$, count $2$. Total: $6$. $P = 2/6 = 1/3$.\n\n**Test Day Takeaway:** Count carefully; greater than $4$ does NOT include $4$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'basic-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-174', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A spinner has sections labeled $1$ through $8$. What is the probability that the spinner lands on an odd number?',
    choices: [{ id: 'A', text: '$\\dfrac{1}{2}$' }, { id: 'B', text: '$\\dfrac{4}{7}$' }, { id: 'C', text: '$\\dfrac{4}{8}$ — not reduced' }, { id: 'D', text: '$\\dfrac{1}{8}$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Basic Probability**\n\n**Choice A is correct.**\n\n**The Fast Way:** Odd numbers $1, 3, 5, 7$: count $4$. $P = 4/8 = 1/2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($4/7$): divides by $7$ instead of $8$ — drops one number from the denominator.\n* Choice C ($4/8$ — not reduced): correct ratio but not in simplest form — should reduce to $1/2$.\n* Choice D ($1/8$): reports the probability of a SINGLE outcome ($1$ in $8$) — forgets to count all odd outcomes.\n\n**Test Day Takeaway:** Reduce fractions to lowest terms.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'basic-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-175', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'medium', type: 'fill-in',
    question: 'In a class of $30$ students, $18$ are juniors. If one student is selected at random, what is the probability that the student is NOT a junior? Express as a fraction in lowest terms.',
    correctAnswer: '2/5',
    explanation: '**SAT Pattern: Basic Probability**\n\n**The correct answer is $2/5$.**\n\n**The Fast Way:** Not juniors: $30 - 18 = 12$. $P = 12/30 = 2/5$.\n\n**Test Day Takeaway:** $P(\\text{not } X) = 1 - P(X)$, or count non-$X$ directly.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'basic-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-176', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A jar contains $50$ marbles. The probability of drawing a red marble is $0.4$. How many red marbles are in the jar?',
    choices: [{ id: 'A', text: '$20$' }, { id: 'B', text: '$30$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$0.4$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Basic Probability**\n\n**Choice A is correct.**\n\n**The Fast Way:** $0.4 \\cdot 50 = 20$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($30$): subtracts ($50 - 20$) and reports the NON-red count — wrong slot.\n* Choice C ($4$): divides $50/0.4 \\cdot \\frac{1}{...}$ or other misderivation — drops a power of $10$.\n* Choice D ($0.4$): reports the probability itself as the count — formula confusion.\n\n**Test Day Takeaway:** Count = P × Total.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'basic-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-177', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'medium', type: 'fill-in',
    question: 'A bag has marbles in the ratio $\\text{red} : \\text{blue} : \\text{green} = 2 : 3 : 5$. What is the probability of drawing a blue marble? Express as a fraction in lowest terms.',
    correctAnswer: '3/10',
    explanation: '**SAT Pattern: Basic Probability**\n\n**The correct answer is $3/10$.**\n\n**The Fast Way:** Total parts: $10$. $P(\\text{blue}) = 3/10$.\n\n**Test Day Takeaway:** Ratios give probabilities directly: part / total.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'basic-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-178', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A deck of $52$ cards has $13$ cards of each suit. If one card is drawn, what is the probability that it is a heart OR a face card (jack, queen, or king)?',
    choices: [{ id: 'A', text: '$\\dfrac{22}{52}$' }, { id: 'B', text: '$\\dfrac{25}{52}$' }, { id: 'C', text: '$\\dfrac{13}{52}$' }, { id: 'D', text: '$\\dfrac{12}{52}$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Basic Probability**\n\n**Choice A is correct.**\n\n**The Fast Way:** Hearts: $13$. Face cards: $12$. Heart face cards (overlap): $3$. By inclusion-exclusion: $13 + 12 - 3 = 22$. $P = 22/52$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($25/52$): ADDS hearts and face cards without subtracting overlap — $13 + 12 = 25$.\n* Choice C ($13/52$): reports hearts only — ignores face cards.\n* Choice D ($12/52$): reports face cards only — ignores hearts.\n\n**Test Day Takeaway:** $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Subtract overlap.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'basic-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-179', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'hard', type: 'fill-in',
    question: 'A jar has only red and blue marbles. The probability of drawing a red marble is $0.6$. If there are $24$ blue marbles, how many marbles are in the jar in total?',
    correctAnswer: '60',
    explanation: '**SAT Pattern: Basic Probability**\n\n**The correct answer is $60$.**\n\n**The Fast Way:** $P(\\text{blue}) = 1 - 0.6 = 0.4$. $0.4 \\cdot T = 24 \\Rightarrow T = 60$.\n\n**Test Day Takeaway:** Use the COMPLEMENT probability to relate the known count to the total.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'basic-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 14/1: percent-of-a-whole (8 items) =====
  { id: 'bank-ps-180', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Of the $80$ books in a library mystery section, $30\\%$ are new arrivals. How many of the books in this section are new arrivals?',
    choices: [{ id: 'A', text: '$24$' }, { id: 'B', text: '$2.4$' }, { id: 'C', text: '$50$' }, { id: 'D', text: '$240$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Percent of a Whole**\n\n**Choice A is correct.**\n\n**The Fast Way:** $0.30 \\cdot 80 = 24$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2.4$): misplaces the decimal — uses $0.030 \\cdot 80$ instead of $0.30 \\cdot 80$.\n* Choice C ($50$): subtracts the percent from the whole ($80 - 30 = 50$) — uses the wrong operation between the two given numbers.\n* Choice D ($240$): drops the decimal entirely — uses $3 \\cdot 80$.\n\n**Test Day Takeaway:** Percent of a number = decimal × number.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-whole', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-181', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'easy', type: 'fill-in',
    question: 'A school librarian orders $200$ books for the new school year, and $15\\%$ of the books are reference texts. How many of the books are reference texts?',
    correctAnswer: '30',
    explanation: '**SAT Pattern: Percent of a Whole**\n\n**The correct answer is $30$.**\n\n**The Fast Way:** $0.15 \\cdot 200 = 30$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-whole', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-182', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: '$25\\%$ of a number is $48$. What is the number?',
    choices: [{ id: 'A', text: '$192$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$73$' }, { id: 'D', text: '$96$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Percent of a Whole**\n\n**Choice A is correct.**\n\n**The Fast Way:** $0.25 \\cdot N = 48 \\Rightarrow N = 192$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): MULTIPLIES instead of dividing — uses $0.25 \\cdot 48$.\n* Choice C ($73$): adds ($48 + 25$) — guess based on visible numbers.\n* Choice D ($96$): doubles instead of quadrupling — uses $2 \\cdot 48$ instead of $4 \\cdot 48$.\n\n**Test Day Takeaway:** Reverse percent: divide by the decimal.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-whole', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-183', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'fill-in',
    question: '$40\\%$ of $x$ is $24$. What is the value of $x$?',
    correctAnswer: '60',
    explanation: '**SAT Pattern: Percent of a Whole**\n\n**The correct answer is $60$.**\n\n**The Fast Way:** $x = 24/0.40 = 60$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-whole', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-184', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Of the $60$ students in a freshman class, $18$ are enrolled in advanced math. What percent of the students in the freshman class are enrolled in advanced math?',
    choices: [{ id: 'A', text: '$30\\%$' }, { id: 'B', text: '$42\\%$' }, { id: 'C', text: '$33.3\\%$' }, { id: 'D', text: '$18\\%$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Percent of a Whole**\n\n**Choice A is correct.**\n\n**The Fast Way:** $18/60 = 0.30 = 30\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($42\\%$): subtracts ($60 - 18 = 42$) and labels as percent — wrong operation.\n* Choice C ($33.3\\%$): inverts the ratio — uses $60/18 - 1$ or $1/3$.\n* Choice D ($18\\%$): reports the numerator as the percent — number/percent confusion.\n\n**Test Day Takeaway:** "X is what percent of Y" = $(X/Y) \\cdot 100\\%$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-whole', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-185', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'fill-in',
    question: 'A bookstore has $250$ books, and $60\\%$ are fiction. How many fiction books are there?',
    correctAnswer: '150',
    explanation: '**SAT Pattern: Percent of a Whole**\n\n**The correct answer is $150$.**\n\n**The Fast Way:** $0.60 \\cdot 250 = 150$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-whole', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-186', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'hard', type: 'multiple-choice',
    question: '$8\\%$ of $x$ equals $10\\%$ of $24$. What is the value of $x$?',
    choices: [{ id: 'A', text: '$30$' }, { id: 'B', text: '$24$' }, { id: 'C', text: '$2.4$' }, { id: 'D', text: '$0.30$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Percent of a Whole**\n\n**Choice A is correct.**\n\n**The Fast Way:** $0.08 x = 0.10 \\cdot 24 = 2.4 \\Rightarrow x = 30$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($24$): copies the given $24$ as the answer — number-confusion.\n* Choice C ($2.4$): reports $10\\%$ of $24$ alone — stops at the right-hand side.\n* Choice D ($0.30$): reports the RATIO ($8/10 \\cdot \\text{...}$? or just $0.30 = 30\\%$ guess) — decimal confusion.\n\n**Test Day Takeaway:** Set up equation, solve.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-of-a-whole', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-187', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'hard', type: 'fill-in',
    question: 'A school has $400$ students. $35\\%$ play sports, and of those, $60\\%$ also play music. How many students play both sports and music?',
    correctAnswer: '84',
    explanation: '**SAT Pattern: Percent of a Whole**\n\n**The correct answer is $84$.**\n\n**The Fast Way:** $0.35 \\cdot 400 = 140$ sports. $0.60 \\cdot 140 = 84$ both.\n\n**Test Day Takeaway:** Sequential percents multiply: $0.35 \\cdot 0.60 \\cdot 400$.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-of-a-whole', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 14/2: percent-of-a-number (8 items) =====
  // Duplicate of percent-of-a-whole conceptually; distinct slug.
  { id: 'bank-ps-188', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A company has $50$ employees. If $20\\%$ of the employees attended a training session, how many employees attended the session?',
    choices: [{ id: 'A', text: '$10$' }, { id: 'B', text: '$25$' }, { id: 'C', text: '$30$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Percent of a Number**\n\n**Choice A is correct.**\n\n**The Fast Way:** $0.20 \\cdot 50 = 10$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($25$): divides instead of multiplying — uses $50 \\cdot 0.50$.\n* Choice C ($30$): adds ($20 + 10$) instead of multiplying.\n* Choice D ($5$): drops a factor of $2$ — uses $0.10 \\cdot 50$.\n\n**Test Day Takeaway:** Decimal × number.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-189', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'easy', type: 'fill-in',
    question: 'A coffee shop sold $40$ drinks during the morning rush. If $75\\%$ of the drinks sold were coffee, how many of the drinks sold were coffee?',
    correctAnswer: '30',
    explanation: '**SAT Pattern: Percent of a Number**\n\n**The correct answer is $30$.**\n\n**The Fast Way:** $3/4$ of $40 = 30$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-190', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: '$120\\%$ of a number is $180$. What is the number?',
    choices: [{ id: 'A', text: '$150$' }, { id: 'B', text: '$60$' }, { id: 'C', text: '$216$' }, { id: 'D', text: '$200$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Percent of a Number**\n\n**Choice A is correct.**\n\n**The Fast Way:** $1.20 N = 180 \\Rightarrow N = 150$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($60$): MULTIPLIES instead of dividing — uses $0.20 \\cdot 180/0.6$ misderivation.\n* Choice C ($216$): applies the percent INCREASE direction — uses $180 \\cdot 1.20$.\n* Choice D ($200$): rounds the wrong direction — picks a close round number.\n\n**Test Day Takeaway:** Percents > 100 are fine; same formula.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-191', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'fill-in',
    question: '$36$ is $40\\%$ of what number?',
    correctAnswer: '90',
    explanation: '**SAT Pattern: Percent of a Number**\n\n**The correct answer is $90$.**\n\n**The Fast Way:** $36/0.40 = 90$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-192', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What number is $15\\%$ greater than $80$?',
    choices: [{ id: 'A', text: '$92$' }, { id: 'B', text: '$95$' }, { id: 'C', text: '$68$' }, { id: 'D', text: '$12$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Percent of a Number**\n\n**Choice A is correct.**\n\n**The Fast Way:** $80 \\cdot 1.15 = 92$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($95$): mis-arithmetic — adds $15$ instead of $12$ to $80$.\n* Choice C ($68$): SUBTRACTS instead of adding — uses $80 - 12$.\n* Choice D ($12$): reports the INCREASE alone, not the new value.\n\n**Test Day Takeaway:** "X% greater" = multiply by $1 + r$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-193', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'fill-in',
    question: 'What number is $25\\%$ less than $60$?',
    correctAnswer: '45',
    explanation: '**SAT Pattern: Percent of a Number**\n\n**The correct answer is $45$.**\n\n**The Fast Way:** $60 \\cdot 0.75 = 45$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-194', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'hard', type: 'multiple-choice',
    question: 'After a $40\\%$ discount, an item sells for $\\$60$. What was the original price?',
    choices: [{ id: 'A', text: '$\\$100$' }, { id: 'B', text: '$\\$84$' }, { id: 'C', text: '$\\$36$' }, { id: 'D', text: '$\\$150$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Percent of a Number**\n\n**Choice A is correct.**\n\n**The Fast Way:** $0.60 \\cdot \\text{orig} = 60 \\Rightarrow \\text{orig} = 100$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$84$): adds $40\\%$ to $60$ — uses $60 \\cdot 1.40$ (wrong direction).\n* Choice C ($\\$36$): subtracts another $40\\%$ from $60$ — uses $60 \\cdot 0.60$ (wrong direction).\n* Choice D ($\\$150$): mis-divides — uses $60/0.40$.\n\n**Test Day Takeaway:** Reverse-percent: divide by multiplier (here $0.60$).',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-195', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'hard', type: 'fill-in',
    question: 'A worker received a salary this year that was $25\\%$ higher than the salary received last year. If this year\\u2019s salary is $\\$5{,}000$ greater than last year\\u2019s salary, what is the salary received this year, in dollars?',
    correctAnswer: '25000',
    explanation: "**SAT Pattern: Percent Relationship + Absolute Difference (System)**\n\n**The correct answer is $25{,}000$.**\n\n**The Fast Way (~25s):** $25\\%$ of last = $\\$5{,}000$, so last $= 5{,}000 / 0.25 = \\$20{,}000$. This year $= 20{,}000 + 5{,}000 = \\$25{,}000$.\n\n**The Full Solution:**\nLet $L$ be last year's salary and $T$ be this year's salary.\nThe two conditions translate to two equations:\n$\\quad T = 1.25 L$ (percent relationship — this year is $25\\%$ HIGHER, so multiplier is $1.25$).\n$\\quad T = L + 5{,}000$ (absolute relationship — this year exceeds last year by $\\$5{,}000$).\n\nSet them equal: $1.25 L = L + 5{,}000$.\nSolve: $0.25 L = 5{,}000 \\Rightarrow L = 20{,}000$.\nThen $T = 1.25 \\cdot 20{,}000 = 25{,}000$.\n\nVerification: $25{,}000 - 20{,}000 = 5{,}000$ ($\\$5{,}000$ difference \\checkmark); $25{,}000 / 20{,}000 = 1.25$ ($25\\%$ higher \\checkmark).\n\n**Common Mistakes:** Reporting $20{,}000$ (the LAST-year salary instead of this year's); reporting $6{,}250$ (computes $5{,}000 \\cdot 1.25$ — applies the percent to the wrong base); reporting $4{,}000$ (applies $20\\%$ instead of $25\\%$).\n\n**Test Day Takeaway:** When a problem gives both a percent relationship AND an absolute difference, set up two equations in two variables (last year, this year). The percent difference is between the two; the absolute difference connects them additively. Solve the linear system, then double-check which variable the question asks for.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-ps-196', domain: 'problem-solving', skills: ['percent-change'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A $\\$80$ item is reduced to $\\$60$. What is the percent decrease?',
    choices: [{ id: 'A', text: '$25\\%$' }, { id: 'B', text: '$20\\%$' }, { id: 'C', text: '$30\\%$' }, { id: 'D', text: '$33.3\\%$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way:** $(80 - 60)/80 = 20/80 = 25\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($20\\%$): divides by the FINAL value instead of original — uses $20/60$, wrong base.\n* Choice C ($30\\%$): uses the value of the decrease ($20$) as the percent — number/percent confusion.\n* Choice D ($33.3\\%$): divides by the wrong base — uses $20/60$.\n\n**Test Day Takeaway:** Percent decrease = (decrease)/(ORIGINAL).',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-decrease', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-197', domain: 'problem-solving', skills: ['percent-change'], difficulty: 'easy', type: 'fill-in',
    question: 'A population drops from $200$ to $160$. What is the percent decrease?',
    correctAnswer: '20',
    explanation: '**SAT Pattern: Percent Decrease**\n\n**The correct answer is $20$.**\n\n**The Fast Way:** $40/200 = 20\\%$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-decrease', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-198', domain: 'problem-solving', skills: ['percent-change'], difficulty: 'medium', type: 'multiple-choice',
    question: 'After a $30\\%$ decrease, a quantity becomes $35$. What was the original quantity?',
    choices: [{ id: 'A', text: '$50$' }, { id: 'B', text: '$45.5$' }, { id: 'C', text: '$24.5$' }, { id: 'D', text: '$65$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way:** $0.70 N = 35 \\Rightarrow N = 50$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($45.5$): divides by the wrong multiplier — uses $35/(1+0.30)$.\n* Choice C ($24.5$): SUBTRACTS the decrease ($35 - 0.30 \\cdot 35$) — applies the formula in the wrong direction.\n* Choice D ($65$): adds the decrease back — uses $35 + 30 = 65$.\n\n**Test Day Takeaway:** Decrease by $r$ ⇒ multiply by $(1 - r)$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-decrease', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-199', domain: 'problem-solving', skills: ['percent-change'], difficulty: 'medium', type: 'fill-in',
    question: 'A book originally costs $\\$25$. After a percent decrease, it costs $\\$19$. What is the percent decrease?',
    correctAnswer: '24',
    explanation: '**SAT Pattern: Percent Decrease**\n\n**The correct answer is $24$.**\n\n**The Fast Way:** $(25 - 19)/25 = 6/25 = 0.24 = 24\\%$.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-decrease', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-200', domain: 'problem-solving', skills: ['percent-change'], difficulty: 'hard', type: 'fill-in',
    question: 'A stock price increases by $25\\%$ over the first quarter of the year. In the second quarter, the price decreases by $r\\%$, and the price at the end of the second quarter equals the price at the start of the first quarter. What is the value of $r$?',
    correctAnswer: '20',
    explanation: "**SAT Pattern: Compound Percent Change — Solve for the Unknown Rate**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~25s):** Combined multiplier must equal $1$ (final = original): $1.25 \\cdot (1 - r/100) = 1 \\Rightarrow 1 - r/100 = 0.80 \\Rightarrow r = 20$.\n\n**The Full Solution:**\nLet the original price be $P$. After the first-quarter increase: $1.25 P$. After the second-quarter decrease: $1.25 P \\cdot (1 - r/100)$.\nThe problem states the final price equals the original:\n$\\quad 1.25 P \\cdot (1 - r/100) = P$\nDivide both sides by $P$ (nonzero):\n$\\quad 1.25 \\cdot (1 - r/100) = 1$\n$\\quad 1 - r/100 = 1/1.25 = 0.80$\n$\\quad r/100 = 0.20$\n$\\quad r = 20$.\n\nVerification: with $r = 20$, the second-quarter multiplier is $0.80$. Combined: $1.25 \\cdot 0.80 = 1.00$, so the final equals the original \\checkmark.\n\n**Common Mistakes:** Reporting $25$ (assumes a $+x\\%$ followed by $-x\\%$ returns to the original — wrong because of the asymmetry of compounding); reporting $5$ (subtracts the percent changes additively: $25 - r = 0 \\Rightarrow r = 25$, then mis-arithmetics down to $5$).\n\n**Test Day Takeaway:** A $+25\\%$ followed by a $-25\\%$ does NOT return to the original — it returns to $1.25 \\cdot 0.75 = 0.9375$, a $6.25\\%$ net decrease. To 'undo' a percent increase, the matching decrease is SMALLER in percent. Always use the multiplicative form.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-decrease', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-ps-201', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'In a survey of $100$ people, $60$ prefer Coke. What is the (marginal) probability that a randomly chosen respondent prefers Coke?',
    choices: [{ id: 'A', text: '$0.6$' }, { id: 'B', text: '$0.4$' }, { id: 'C', text: '$60$' }, { id: 'D', text: '$100$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Marginal Probability**\n\n**Choice A is correct.**\n\n**The Fast Way:** $60/100 = 0.6$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($0.4$): computes $40/100$ — reports the COMPLEMENT (those who don\'t prefer Coke).\n* Choice C ($60$): reports the COUNT as the probability — count/percent confusion.\n* Choice D ($100$): reports the TOTAL as the probability.\n\n**Test Day Takeaway:** Marginal probability uses the row or column TOTAL of a two-way table.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-202', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'easy', type: 'fill-in',
    question: 'A class of $40$ students has $24$ girls. What is the probability that a randomly chosen student is a girl? Express as a decimal.',
    correctAnswer: '0.6',
    explanation: '**SAT Pattern: Marginal Probability**\n\n**The correct answer is $0.6$.**\n\n**The Fast Way:** $24/40 = 0.6$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-203', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A two-way table shows $200$ students by grade and gender. $80$ are seniors. What is the marginal probability of being a senior?',
    choices: [{ id: 'A', text: '$0.4$' }, { id: 'B', text: '$0.6$' }, { id: 'C', text: '$80$' }, { id: 'D', text: '$0.25$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Marginal Probability**\n\n**Choice A is correct.**\n\n**The Fast Way:** $80/200 = 0.4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($0.6$): reports the COMPLEMENT (not-seniors).\n* Choice C ($80$): reports the COUNT as the probability.\n* Choice D ($0.25$): divides $80/...$ by the wrong base — uses a fraction unrelated to the marginal total.\n\n**Test Day Takeaway:** Marginal: use the row/column TOTAL, not a single cell.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-204', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'medium', type: 'fill-in',
    question: 'In a survey of $300$ adults, $90$ are vegetarian. What is the marginal probability that a randomly chosen adult is NOT vegetarian? Express as a decimal.',
    correctAnswer: '0.7',
    explanation: '**SAT Pattern: Marginal Probability**\n\n**The correct answer is $0.7$.**\n\n**The Fast Way:** $1 - 90/300 = 1 - 0.3 = 0.7$. Or: $(300 - 90)/300 = 0.7$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-205', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A two-way table: $50$ men preferred tea, $30$ women preferred tea. Of $200$ total, what is the marginal probability of preferring tea?',
    choices: [{ id: 'A', text: '$0.4$' }, { id: 'B', text: '$0.6$' }, { id: 'C', text: '$0.5$' }, { id: 'D', text: '$80$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Marginal Probability**\n\n**Choice A is correct.**\n\n**The Fast Way:** Total tea: $50 + 30 = 80$. $80/200 = 0.4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($0.6$): reports the COMPLEMENT (non-tea preference).\n* Choice C ($0.5$): averages $50$ and $30$ percents wrongly — $(50 + 30)/200$? No, $(0.5 + 0.3)/2$? Likely from $50/100$ guess.\n* Choice D ($80$): reports the marginal COUNT as the probability.\n\n**Test Day Takeaway:** Sum across the row to get the marginal total.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-206', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'medium', type: 'fill-in',
    question: 'A jar has $20$ red, $30$ blue, and $50$ green marbles. What is the probability of drawing a blue marble? Express as a decimal.',
    correctAnswer: '0.3',
    explanation: '**SAT Pattern: Marginal Probability**\n\n**The correct answer is $0.3$.**\n\n**The Fast Way:** $30/100 = 0.3$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-207', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A school has $400$ students; $180$ are freshmen, $130$ are sophomores, $70$ are juniors, and the rest are seniors. What is the marginal probability of being a senior?',
    choices: [{ id: 'A', text: '$0.05$' }, { id: 'B', text: '$0.1$' }, { id: 'C', text: '$0.15$' }, { id: 'D', text: '$0.2$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Marginal Probability**\n\n**Choice A is correct.**\n\n**The Fast Way:** Seniors: $400 - 180 - 130 - 70 = 20$. $20/400 = 0.05$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($0.1$): doubles the answer — perhaps uses $40/400$ instead of $20/400$.\n* Choice C ($0.15$): computes $60/400$ — extra count error.\n* Choice D ($0.2$): computes $80/400$ — likely confuses senior count with another subgroup.\n\n**Test Day Takeaway:** Subtract to find missing category.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-208', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'hard', type: 'fill-in',
    question: 'In a survey, $0.35$ of respondents are in age group A and $0.45$ are in age group B. What fraction of respondents are in neither A nor B? Express as a decimal.',
    correctAnswer: '0.2',
    explanation: '**SAT Pattern: Marginal Probability**\n\n**The correct answer is $0.2$.**\n\n**The Fast Way:** $1 - 0.35 - 0.45 = 0.20$.\n\n**Test Day Takeaway:** Disjoint categories: probabilities sum to $1$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 14/5: conditional-probability-with-percent (8 items) =====
  { id: 'bank-ps-209', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'easy', type: 'multiple-choice',
    question: 'In a survey, $40\\%$ of people own a car, and $30\\%$ of car owners also own a bike. What percent of all surveyed people own BOTH a car AND a bike?',
    choices: [{ id: 'A', text: '$12\\%$' }, { id: 'B', text: '$70\\%$' }, { id: 'C', text: '$10\\%$' }, { id: 'D', text: '$30\\%$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way:** $P(\\text{both}) = P(\\text{car}) \\cdot P(\\text{bike} | \\text{car}) = 0.40 \\cdot 0.30 = 0.12$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($70\\%$): ADDS the probabilities ($40 + 30$) — uses sum instead of product.\n* Choice C ($10\\%$): subtracts ($40 - 30$) — wrong operation.\n* Choice D ($30\\%$): reports the conditional alone — forgets to multiply by the base rate.\n\n**Test Day Takeaway:** $P(A \\cap B) = P(A) \\cdot P(B | A)$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-210', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'easy', type: 'fill-in',
    question: '$50\\%$ of students study Spanish, and $40\\%$ of those Spanish students also study French. What percent of ALL students study both?',
    correctAnswer: '20',
    explanation: '**SAT Pattern: Conditional Probability with Percent**\n\n**The correct answer is $20$.**\n\n**The Fast Way:** $0.50 \\cdot 0.40 = 0.20 = 20\\%$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-211', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'medium', type: 'multiple-choice',
    question: 'At a school, $60\\%$ of students play sports. Of those, $25\\%$ play soccer. What is the probability that a randomly chosen student plays soccer?',
    choices: [{ id: 'A', text: '$0.15$' }, { id: 'B', text: '$0.25$' }, { id: 'C', text: '$0.60$' }, { id: 'D', text: '$0.85$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way:** $0.60 \\cdot 0.25 = 0.15$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($0.25$): reports the conditional alone — forgets to multiply by the base rate of $0.60$.\n* Choice C ($0.60$): reports the base rate alone.\n* Choice D ($0.85$): ADDS the probabilities ($0.60 + 0.25$) — uses sum instead of product.\n\n**Test Day Takeaway:** Chain conditional probabilities multiply.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-212', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'medium', type: 'fill-in',
    question: 'In a city, $30\\%$ of households own a dog. If $20\\%$ of dog-owning households also own a cat, what fraction of all households own both? Express as a decimal.',
    correctAnswer: '0.06',
    explanation: '**SAT Pattern: Conditional Probability with Percent**\n\n**The correct answer is $0.06$.**\n\n**The Fast Way:** $0.30 \\cdot 0.20 = 0.06$.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-213', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Of all customers, $40\\%$ buy coffee, and of those, $50\\%$ buy a pastry. What percent of all customers buy BOTH coffee and a pastry?',
    choices: [{ id: 'A', text: '$20\\%$' }, { id: 'B', text: '$10\\%$' }, { id: 'C', text: '$50\\%$' }, { id: 'D', text: '$90\\%$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way:** $0.40 \\cdot 0.50 = 0.20$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($10\\%$): subtracts ($50 - 40$) — wrong operation.\n* Choice C ($50\\%$): reports the conditional alone — forgets the base rate.\n* Choice D ($90\\%$): ADDS the percentages ($40 + 50$) — sum vs. product confusion.\n\n**Test Day Takeaway:** Joint = unconditional × conditional.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-214', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'medium', type: 'fill-in',
    question: 'In a county election, $45\\%$ of registered voters identify with Party A. Among those Party A voters, $80\\%$ voted in the most recent election. What percent of all registered voters in the county are Party A AND voted in the most recent election? (Report only the number, without the % sign.)',
    correctAnswer: '36',
    explanation: "**SAT Pattern: Joint Probability via Multiplication**\n\n**The correct answer is $36$.**\n\n**The Fast Way (~10s):** Joint $=$ unconditional $\\cdot$ conditional $= 0.45 \\cdot 0.80 = 0.36 = 36\\%$.\n\n**The Full Solution:**\nWhen the question asks for the percent of the WHOLE population in two categories at once (here: Party A AND voted), multiply the marginal percent by the conditional percent.\nLet $T$ be the total number of registered voters. Then:\n* Party A: $0.45 \\cdot T$ voters.\n* Of those, voted: $0.80 \\cdot (0.45 \\cdot T) = 0.36 \\cdot T$.\nSo $36\\%$ of all registered voters are Party A AND voted.\n\nVerification: with $T = 1000$, Party A $= 450$, and $80\\%$ of $450 = 360 = 36\\%$ of $1000$ \\checkmark.\n\n**Common Mistakes:** Reporting $80$ (the conditional alone, forgetting to multiply by the marginal); reporting $45$ (the marginal alone, forgetting to apply the conditional); reporting $125$ ($45 + 80$, adding instead of multiplying).\n\n**Test Day Takeaway:** 'X AND Y' where Y is conditional on X means MULTIPLY the percentages (as decimals). 'X OR Y' would use addition with overlap subtraction. The word 'AND' is the cue for multiplication of conditionals.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-ps-215', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In a population, $20\\%$ have disease X. A test correctly identifies $90\\%$ of those with X. What is the probability that a random person both has disease X AND tests positive?',
    choices: [{ id: 'A', text: '$0.18$' }, { id: 'B', text: '$0.20$' }, { id: 'C', text: '$0.90$' }, { id: 'D', text: '$0.02$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way:** $0.20 \\cdot 0.90 = 0.18$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($0.20$): reports the base rate alone — forgets to multiply by the sensitivity.\n* Choice C ($0.90$): reports the conditional probability alone — forgets the base rate.\n* Choice D ($0.02$): MULTIPLIES the wrong direction — uses $0.20 \\cdot 0.10$ (false-negative rate).\n\n**Test Day Takeaway:** Joint = P(disease) × P(positive | disease).',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-216', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'hard', type: 'fill-in',
    question: 'A bag has $40$ marbles: $25\\%$ are red. Of the red marbles, $40\\%$ have a stripe. How many marbles in the bag are red AND striped?',
    correctAnswer: '4',
    explanation: '**SAT Pattern: Conditional Probability with Percent**\n\n**The correct answer is $4$.**\n\n**The Fast Way:** $0.25 \\cdot 40 = 10$ red. $0.40 \\cdot 10 = 4$ striped.\n\n**Test Day Takeaway:** Apply percents sequentially to the counts.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },

  // ─── PERCENT COMPLEMENT (bank-ps-217..224) ────────────────────────────────
  // Granularity principle: 100% − x% is a percent operation, NOT probability.
  // Was previously mis-aliased to basic-probability. Now its own pattern.
  { id: 'bank-ps-217', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'easy', type: 'multiple-choice',
    question: 'In a town, $35\\%$ of residents own a car. What percent of residents do NOT own a car?',
    choices: [{ id: 'A', text: '$65\\%$' }, { id: 'B', text: '$35\\%$' }, { id: 'C', text: '$75\\%$' }, { id: 'D', text: '$135\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent Complement**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Complement: $100\\% - 35\\% = 65\\%$.\n\n**The Full Solution:**\nPercent complement: every percent of a whole has its complement equal to $100\\%$ minus that percent.\n$100\\% - 35\\% = 65\\%$ of residents do not own a car.\n\nVerification: $35\\% + 65\\% = 100\\%$ (all residents) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B: returns the given percent.\n* C: $100 - 25$ (mis-reads the given as $25\\%$).\n* D: adds instead of subtracts.\n\n**Test Day Takeaway:** \"NOT,\" \"don't,\" \"remain\" → complement. Subtract from $100\\%$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-complement', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-ps-218', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'easy', type: 'fill-in',
    question: 'A survey found that $42\\%$ of students take a foreign language class. What percent of students do NOT take a foreign language class?',
    correctAnswer: '58',
    explanation: "**SAT Pattern: Percent Complement**\n\n**The correct answer is $58$.**\n\n**The Fast Way (~5s):** $100 - 42 = 58$.\n\n**The Full Solution:**\nIf $42\\%$ take the class, the complement ($100\\% - 42\\% = 58\\%$) do not.\n\n**Common Mistakes:** Reporting $42$ (the given); reporting $52$ ($100 - 48$, mis-reads).\n\n**Test Day Takeaway:** Complement is one subtraction. Don't overthink.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-complement', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-ps-219', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A jacket is on sale for $\\$64$, which represents a $20\\%$ discount off the original price. What was the original price of the jacket, in dollars?',
    choices: [{ id: 'A', text: '$\\$51.20$' }, { id: 'B', text: '$\\$76.80$' }, { id: 'C', text: '$\\$80$' }, { id: 'D', text: '$\\$320$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Reverse Percent (Find Original from Sale)**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Sale price $= 80\\%$ of original: $0.80 \\cdot P = 64 \\Rightarrow P = 64 / 0.80 = 80$.\n\n**The Full Solution:**\nA $20\\%$ discount means the sale price is $100\\% - 20\\% = 80\\%$ of the original price $P$:\n$\\quad 0.80 \\cdot P = 64$\n$\\quad P = 64 / 0.80 = 80$.\n\nVerification: $80 \\cdot 0.20 = 16$ (discount), $80 - 16 = 64$ (sale price) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$51.20$): applies the $20\\%$ discount AGAIN to the sale price ($64 \\cdot 0.80 = 51.20$) — treats $64$ as if it were the original, not the discounted price.\n* Choice B ($\\$76.80$): adds $20\\%$ to the sale price ($64 \\cdot 1.20 = 76.80$) — applies a markup of $20\\%$ instead of reversing the discount. Markups and discounts are NOT inverses of each other.\n* Choice C ($\\$80$): correct.\n* Choice D ($\\$320$): divides by the discount percent ($64 / 0.20 = 320$) instead of by the surviving fraction ($0.80$).\n\n**Test Day Takeaway:** To reverse a discount, divide the sale price by the COMPLEMENT of the discount (the surviving fraction). A $20\\%$ discount means the sale is $80\\%$ of the original, so divide by $0.80$, not by $0.20$, and not by $1.20$. The 'add back' shortcut works only for simple-interest style increases, not for percent discounts.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-complement', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-ps-220', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'fill-in',
    question: 'A class has $250$ students. $68\\%$ scored above the median on a test. How many students scored AT or BELOW the median?',
    correctAnswer: '80',
    explanation: "**SAT Pattern: Percent Complement**\n\n**The correct answer is $80$.**\n\n**The Fast Way (~10s):** $100\\% - 68\\% = 32\\%$ at or below. $0.32 \\cdot 250 = 80$.\n\n**The Full Solution:**\nStep 1: Find the complement percent: $100\\% - 68\\% = 32\\%$.\nStep 2: Apply to the count: $32\\% \\times 250 = 80$ students.\n\nVerification: $68\\% \\times 250 = 170$ above; $170 + 80 = 250$ total \\checkmark.\n\n**Common Mistakes:** Reporting $170$ (the above-median count); reporting $68$ (raw percent, not count); reporting $32$ (the complement percent, not the count).\n\n**Test Day Takeaway:** Two steps: complement the percent, then apply to the total. Don't conflate percent and count.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-complement', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-ps-221', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A polling firm reports that $54\\%$ of voters support a proposal. If the firm interviewed $850$ voters, how many voters do NOT support the proposal?',
    choices: [{ id: 'A', text: '$391$' }, { id: 'B', text: '$459$' }, { id: 'C', text: '$46$' }, { id: 'D', text: '$54$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent Complement**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $100\\% - 54\\% = 46\\%$. $0.46 \\cdot 850 = 391$.\n\n**The Full Solution:**\nComplement: $46\\%$ don't support. Count: $0.46 \\times 850 = 391$.\n\nVerification: $54\\% \\times 850 = 459$ supporters; $459 + 391 = 850$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B ($459$): reports the SUPPORTER count ($0.54 \\cdot 850 = 459$) — answers the opposite question.\n* C ($46$): reports the raw complement percent ($100 - 54 = 46$) as the count — number vs percent confusion.\n* D ($54$): reports the GIVEN support percent ($54$) as the count — copies a stem number without applying it.\n\n**Test Day Takeaway:** Always check that supporters + non-supporters $=$ total. This catches arithmetic errors.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-complement', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-ps-222', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'fill-in',
    question: 'A bank account earns $5\\%$ interest, but the account holder pays $20\\%$ of the interest earned in taxes. What percent of the original interest does the account holder KEEP after taxes?',
    correctAnswer: '80',
    explanation: "**SAT Pattern: Percent Complement**\n\n**The correct answer is $80$.**\n\n**The Fast Way (~5s):** Pays $20\\%$ of interest in tax, keeps the complement: $100\\% - 20\\% = 80\\%$.\n\n**The Full Solution:**\nThe $5\\%$ interest rate is a distractor — the question asks what fraction of the INTEREST is kept after taxes. If $20\\%$ is paid in tax, then $80\\%$ is kept.\n\nVerification: if interest = \\$100, tax = \\$20, kept = \\$80 = $80\\%$ \\checkmark.\n\n**Common Mistakes:** Reporting $4$ ($5 \\cdot 0.80$ — confuses interest rate with percent kept); reporting $20$ (the tax rate); reporting $5$ (the interest rate).\n\n**Test Day Takeaway:** Read the question. The $5\\%$ interest rate is a distractor — only the $20\\%$ tax-on-interest matters here. Take the complement.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-complement', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-ps-223', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'hard', type: 'multiple-choice',
    question: 'On a quiz, $\\dfrac{3}{8}$ of the questions are multiple-choice. The rest are fill-in-the-blank. What percent of the questions are fill-in-the-blank?',
    choices: [{ id: 'A', text: '$62.5\\%$' }, { id: 'B', text: '$37.5\\%$' }, { id: 'C', text: '$50\\%$' }, { id: 'D', text: '$75\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent Complement**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $3/8 = 37.5\\%$ MC. Complement: $100\\% - 37.5\\% = 62.5\\%$ fill-in.\n\n**The Full Solution:**\nStep 1: Convert the fraction: $3/8 = 0.375 = 37.5\\%$ multiple-choice.\nStep 2: Complement: $100\\% - 37.5\\% = 62.5\\%$ fill-in.\n\nVerification: $3/8 + 5/8 = 8/8 = 100\\%$ \\checkmark. And $5/8 = 0.625 = 62.5\\%$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* B ($37.5\\%$): converts the MC fraction $3/8$ to percent and reports it — answers the MC group, not the fill-in group.\n* C ($50\\%$): assumes an equal split between MC and fill-in without using the given fraction.\n* D ($75\\%$): uses $3/4$ instead of $3/8$ as the MC fraction — drops a factor of $2$ when interpreting the fraction.\n\n**Test Day Takeaway:** Fraction → percent (multiply by $100$). Then take the complement for \"the rest.\" Two steps.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-complement', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-ps-224', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'hard', type: 'fill-in',
    question: 'A factory inspects $400$ items and rejects $7.5\\%$ of them due to defects. How many items pass inspection?',
    correctAnswer: '370',
    explanation: "**SAT Pattern: Percent Complement**\n\n**The correct answer is $370$.**\n\n**The Fast Way (~10s):** Complement: $100\\% - 7.5\\% = 92.5\\%$ pass. $0.925 \\cdot 400 = 370$.\n\n**The Full Solution:**\nComplement: $92.5\\%$ pass. Count: $0.925 \\times 400 = 370$.\n\nVerification: rejected = $0.075 \\times 400 = 30$. $30 + 370 = 400$ \\checkmark.\n\n**Common Mistakes:** Reporting $30$ (the rejected count); reporting $92.5$ (the percent); reporting $7.5$ (the rejected percent).\n\n**Test Day Takeaway:** Whenever a question describes a process with a \"reject/fail/discard rate,\" the complement is the \"pass/accept/keep\" count. Always verify pass + fail = total.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-complement', authoredBy: 'performsat-engine', createdAt: '2026-05-12' }
];
