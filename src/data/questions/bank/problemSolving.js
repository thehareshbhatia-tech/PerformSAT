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
    explanation: "**SAT Pattern: Decimal to Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Multiply by $100$ (shift the decimal two places right): $0.045 \\to 4.5\\%$.\n\n**The Full Solution:**\nStep 1: To turn a decimal into a percent, multiply by $100$.\nStep 2: $0.045 \\times 100 = 4.5\\%$.\nStep 3: Check by reversing: $4.5\\% \\div 100 = 0.045$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.045\\%$): leaves the decimal unchanged and just tacks on a $\\%$ sign — no shift at all.\n* Choice B ($0.45\\%$): shifts only one place right instead of two.\n* Choice D ($45\\%$): shifts three places right instead of two.\n\n**Test Day Takeaway:** Decimal to percent means shift two places RIGHT. A small decimal like $0.045$ must land on a small percent like $4.5\\%$.",
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
    explanation: "**SAT Pattern: Percent to Decimal**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Divide by $100$ (shift the decimal two places left): $6.25\\% \\to 0.0625$.\n\n**The Full Solution:**\nStep 1: To turn a percent into a decimal, divide by $100$.\nStep 2: $6.25 \\div 100 = 0.0625$.\nStep 3: Check by reversing: $0.0625 \\times 100 = 6.25\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6.25$): leaves the number unchanged — no division at all.\n* Choice B ($0.625$): shifts only one place left instead of two.\n* Choice D ($0.00625$): shifts three places left instead of two.\n\n**Test Day Takeaway:** Percent to decimal means shift two places LEFT. Always sanity-check by multiplying back by $100$.",
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
    explanation: "**SAT Pattern: Decimal to Percent**\n\n**The correct answer is $12.8$.**\n\n**The Fast Way (~5s):** Multiply by $100$: $0.128 \\times 100 = 12.8\\%$.\n\n**The Full Solution:**\nStep 1: To turn a decimal into a percent, multiply by $100$ (shift two places right).\nStep 2: $0.128 \\times 100 = 12.8\\%$.\nStep 3: Check by reversing: $12.8\\% \\div 100 = 0.128$. $\\checkmark$\n\n**Common Mistakes:** Reporting $1.28$ (only one shift) or $128$ (three shifts); including a $\\%$ sign in a fill-in answer that asks only for the number.\n\n**Test Day Takeaway:** $0.128 = 12.8\\%$. Decimal to percent shifts the point two places RIGHT.",
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
    explanation: "**SAT Pattern: Small-Value Decimal to Percent**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Multiply by $100$ (shift two places right): $0.0034 \\to 0.34$, so $0.0034 = 0.34\\%$.\n\n**The Full Solution:**\nStep 1: Convert decimal to percent by multiplying by $100$.\nStep 2: $0.0034 \\times 100 = 0.34\\%$.\nStep 3: Check by reversing: $0.34\\% \\div 100 = 0.0034$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.034\\%$): shifts only one place right instead of two.\n* Choice C ($3.4\\%$): shifts three places right instead of two.\n* Choice D ($34\\%$): shifts four places right instead of two.\n\n**Test Day Takeaway:** With small decimals, count the leading zeros carefully. Since $0.0034$ is well below $0.01$, its percent must stay below $1\\%$.",
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
    explanation: "**SAT Pattern: Percent of Total**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $840 \\times 0.35 = 294$.\n\n**The Full Solution:**\nStep 1: \"Percent of a value\" means multiply the value by the decimal form of the percent.\nStep 2: $35\\% = 0.35$, so $840 \\times 0.35 = 294$ students.\nStep 3: Sanity check: $35\\%$ sits between a quarter ($210$) and a half ($420$), and $294$ lands there. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($240$): not $35\\%$ of $840$; corresponds to about $28.6\\%$.\n* Choice C ($350$): rounds $35\\%$ up toward $40\\%$ before multiplying.\n* Choice D ($546$): the complement — $65\\%$ of $840$, i.e. the students NOT in a club.\n\n**Test Day Takeaway:** Percent of a value = decimal form of the percent $\\times$ value. Read which group is asked for, since the trap is often the complement, $100\\% - p$.",
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
    explanation: "**SAT Pattern: Discount Amount**\n\n**The correct answer is $100$.**\n\n**The Fast Way (~5s):** $8\\%$ of $\\$1{,}250$ is $1250 \\times 0.08 = \\$100$.\n\n**The Full Solution:**\nStep 1: The discount is $8\\%$ of the original price.\nStep 2: $\\$1{,}250 \\times 0.08 = \\$100$.\nStep 3: Check: the sale price is $\\$1{,}250 - \\$100 = \\$1{,}150$, which is $92\\%$ of $\\$1{,}250$. And $1250 \\times 0.92 = 1150$. $\\checkmark$\n\n**Common Mistakes:** Reporting $1150$ (the sale price, not the discount); reporting $92$ (the percent remaining); using $0.8$ instead of $0.08$, which gives $\\$1{,}000$.\n\n**Test Day Takeaway:** Discount amount $=$ percent $\\times$ original price; sale price $=$ original $-$ discount. Confirm which one the question wants.",
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
    explanation: "**SAT Pattern: Compound Percent Of**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Multiply the percents straight through: $1200 \\times 0.18 \\times 0.25 = 54$.\n\n**The Full Solution:**\nStep 1: Bikers $= 1200 \\times 0.18 = 216$.\nStep 2: Of those, multi-bike owners $= 216 \\times 0.25 = 54$.\nStep 3: Check via the net rate: $0.18 \\times 0.25 = 0.045$, and $1200 \\times 0.045 = 54$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($216$): stops at the biker count without applying the second filter.\n* Choice C ($270$): applies $25\\%$ to the full $1{,}200$ instead of to the $216$ bikers.\n* Choice D ($300$): averages the two rates instead of multiplying them.\n\n**Test Day Takeaway:** \"Of those who...\" means the second percent acts on the FILTERED subgroup. Multiply the decimals through; never add or average percents.",
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
    explanation: "**SAT Pattern: Filter then Subtract**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Whole wheat $= 2400 \\times 0.125 = 300$. Unsold are $40\\%$: $300 \\times 0.40 = 120$.\n\n**The Full Solution:**\nStep 1: Whole wheat loaves $= 2400 \\times 0.125 = 300$.\nStep 2: Sold on day 1 $= 300 \\times 0.60 = 180$, so remaining $= 300 - 180 = 120$.\nStep 3: Or directly: remaining fraction $= 1 - 0.60 = 0.40$, so $300 \\times 0.40 = 120$. Check: $180 + 120 = 300$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($180$): the number SOLD, not the number remaining.\n* Choice C ($288$): comes from mishandling the percent chain.\n* Choice D ($300$): the total whole-wheat count, before any sales.\n\n**Test Day Takeaway:** For \"what remains\" after a sale, either subtract the sold count or multiply by $1 - p$ directly. Pick whichever is faster.",
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
    explanation: "**SAT Pattern: Percent Change Basic**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $\\frac{4600 - 4000}{4000} \\times 100 = \\frac{600}{4000} \\times 100 = 15\\%$.\n\n**The Full Solution:**\nStep 1: Percent change $= \\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$.\nStep 2: $\\dfrac{4600 - 4000}{4000} \\times 100 = \\dfrac{600}{4000} \\times 100 = 15\\%$.\nStep 3: Check: $4000 \\times 1.15 = 4600$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6\\%$): divides by an incorrect base of $10{,}000$ instead of $4000$.\n* Choice B ($13\\%$): divides by the NEW value: $\\frac{600}{4600} \\approx 13\\%$.\n* Choice D ($60\\%$): divides by $1000$ instead of $4000$, shifting the decimal one place.\n\n**Test Day Takeaway:** Percent change ALWAYS divides by the OLD value. The word \"from\" marks the baseline that goes in the denominator.",
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
    explanation: "**SAT Pattern: Percent Decrease**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~10s):** Change $= 80 - 60 = 20$, so $\\frac{20}{80} \\times 100 = 25\\%$.\n\n**The Full Solution:**\nStep 1: Percent decrease $= \\dfrac{\\text{old} - \\text{new}}{\\text{old}} \\times 100$.\nStep 2: $\\dfrac{80 - 60}{80} \\times 100 = \\dfrac{20}{80} \\times 100 = 25\\%$.\nStep 3: Check: $80 \\times 0.75 = 60$. $\\checkmark$\n\n**Common Mistakes:** Dividing by $60$ (the new value) gives $33.3\\%$; reporting $20$ (the dollar change, not the percent).\n\n**Test Day Takeaway:** Percent decrease uses the OLD value in the denominator. $25\\%$ off $\\$80$ is $\\$20$ off, leaving $\\$60$.",
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
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Decrease $= 12{,}500 - 10{,}750 = 1{,}750$, so $\\frac{1750}{12500} = 0.14 = 14\\%$.\n\n**The Full Solution:**\nStep 1: Percent decrease $= \\dfrac{\\text{old} - \\text{new}}{\\text{old}} \\times 100$.\nStep 2: Numerator: $12{,}500 - 10{,}750 = 1{,}750$.\nStep 3: Divide by the OLD value: $\\dfrac{1750}{12500} = \\dfrac{7}{50} = 0.14 = 14\\%$. Check: $12{,}500 \\times 0.86 = 10{,}750$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($16.3\\%$): divides by the NEW value: $\\frac{1750}{10750} \\approx 0.163$ — the classic base error.\n* Choice C ($17.5\\%$): approximates the base as $10{,}000$, dropping a decimal place.\n* Choice D ($86\\%$): reports the survival ratio $\\frac{10750}{12500} = 0.86$ — the percent that REMAIN, not the decrease.\n\n**Test Day Takeaway:** Percent change always uses the ORIGINAL value as the base in the denominator. Don't confuse the decrease with the new-to-old ratio.",
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
    explanation: "**SAT Pattern: Reverse Percent Change**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** After $20\\%$ off, $\\$96$ is $80\\%$ of the original: $96 = 0.80x \\Rightarrow x = 120$.\n\n**The Full Solution:**\nStep 1: Let $x$ be the original price. A $20\\%$ discount leaves $80\\%$ of $x$.\nStep 2: $0.80x = 96$.\nStep 3: $x = \\dfrac{96}{0.80} = 120$. Check: $\\$120 \\times 0.80 = \\$96$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$76.80$): takes another $20\\%$ off $\\$96$ instead of working backward.\n* Choice B ($\\$115.20$): adds $20\\%$ of $\\$96$ onto $\\$96$ — the wrong operation.\n* Choice C ($\\$116.00$): close to D but from an arithmetic slip on the division.\n\n**Test Day Takeaway:** For reverse percent change, set up result $= (1 \\pm p) \\times$ original, then DIVIDE. Adding $20\\%$ back to a $20\\%$-discounted price does not restore the original — divide by $0.80$, not multiply by $1.20$.",
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
    explanation: "**SAT Pattern: Reverse Growth**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** A $30\\%$ increase makes the new value $1.30$ times the old, so $20{,}800 = 1.30x \\Rightarrow x = \\frac{20{,}800}{1.30} = 16{,}000$.\n\n**The Full Solution:**\nStep 1: Let $x$ be the 2020 population. Growing by $30\\%$ means $2023 = 1.30x$.\nStep 2: $20{,}800 = 1.30x \\Rightarrow x = \\frac{20{,}800}{1.30} = 16{,}000$.\nStep 3: Check: $16{,}000 \\times 1.30 = 20{,}800$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($14{,}560$): subtracted $30\\%$ of $20{,}800$ instead of dividing by $1.30$ — these are not inverse operations.\n* Choice B ($15{,}600$): an arithmetic slip in the division.\n* Choice D ($16{,}240$): divided by the wrong factor (roughly $1.28$).\n\n**Test Day Takeaway:** A $p\\%$ increase makes the new value $(1+p)$ times the old. To reverse it, DIVIDE by $(1+p)$ — never subtract $p\\%$ of the new value.",
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
    explanation: "**SAT Pattern: Percent Increase from Two Values**\n\n**The correct answer is $28$.**\n\n**The Fast Way (~15s):** Change $= 576{,}000 - 450{,}000 = 126{,}000$. Then $\\frac{126{,}000}{450{,}000} = 0.28 = 28\\%$.\n\n**The Full Solution:**\nStep 1: Percent increase $= \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$.\nStep 2: $\\frac{576{,}000 - 450{,}000}{450{,}000} \\times 100 = \\frac{126{,}000}{450{,}000} \\times 100 = 0.28 \\times 100 = 28$.\nStep 3: Check: $450{,}000 \\times 1.28 = 576{,}000$. $\\checkmark$\n\n**Common Mistakes:** Dividing by $576{,}000$ (the new value) gives $\\approx 21.9$; reporting $126$ (the dollar change, not the percent); forgetting to multiply by $100$ and writing $0.28$.\n\n**Test Day Takeaway:** Percent change always divides by the ORIGINAL value, not the new one. Look for shared factors — $\\frac{126}{450}$ reduces to $\\frac{14}{50} = 0.28$ before you reach for a calculator.",
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
    explanation: "**SAT Pattern: Complement Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Not pepperoni $= 100\\% - 40\\% = 60\\%$, so $250 \\times 0.60 = 150$.\n\n**The Full Solution:**\nStep 1: If $40\\%$ are pepperoni, then $60\\%$ are not.\nStep 2: $250 \\times 0.60 = 150$ pizzas.\nStep 3: Check: pepperoni $= 250 \\times 0.40 = 100$, and $100 + 150 = 250$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($100$): the pepperoni count ($40\\%$ of $250$), the opposite group.\n* Choice B ($125$): used $50\\%$ instead of the $60\\%$ complement.\n* Choice D ($200$): used $80\\%$ as the complement instead of $60\\%$.\n\n**Test Day Takeaway:** For \"NOT\" questions, subtract the given percent from $100\\%$ first, THEN multiply. It is faster than finding the named group and subtracting.",
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
    explanation: "**SAT Pattern: Markup Then Discount**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Retail $= 30 \\times 1.60 = 48$, then employee pays $48 \\times 0.75 = \\$36$.\n\n**The Full Solution:**\nStep 1: Mark up the \\$30 wholesale by $60\\%$: $30 \\times 1.60 = \\$48$ retail.\nStep 2: Apply the $25\\%$ employee discount to the retail price: $48 \\times 0.75 = \\$36$.\nStep 3: Check with one multiplier: $1.60 \\times 0.75 = 1.20$, so $30 \\times 1.20 = \\$36$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$33.00$): treated the net change as $+10\\%$ ($30 \\times 1.10$).\n* Choice C ($\\$39.00$): averaged the two percent operations instead of chaining them.\n* Choice D ($\\$42.00$): subtracted $25\\%$ from $60\\%$ to get a net $+35\\%$ on \\$30.\n\n**Test Day Takeaway:** Successive percent changes MULTIPLY, not add. Convert each to a multiplier ($1+p$ for a markup, $1-p$ for a discount) and multiply.",
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
    explanation: "**SAT Pattern: Compound Filter**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $50 \\times 0.70 \\times 0.80 = 35 \\times 0.80 = 28$.\n\n**The Full Solution:**\nStep 1: Midterm passers $= 50 \\times 0.70 = 35$.\nStep 2: Of those, final passers $= 35 \\times 0.80 = 28$.\nStep 3: Check the net rate: $0.70 \\times 0.80 = 0.56$, and $50 \\times 0.56 = 28$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): applied $80\\%$ to the wrong subgroup.\n* Choice C ($35$): stopped at the midterm passers and skipped the final filter.\n* Choice D ($40$): applied $80\\%$ to all $50$ students, ignoring the midterm filter.\n\n**Test Day Takeaway:** \"Of those who...\" means the second percent applies to the FILTERED subgroup, not the whole. Multiply the two rates to get the fraction of the original total.",
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
    explanation: "**SAT Pattern: Sequential Spending Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** After textbooks: $3{,}200 \\times 0.85 = 2{,}720$. The tablet takes $40\\%$ of that, leaving $60\\%$: $2{,}720 \\times 0.60 = \\$1{,}632$.\n\n**The Full Solution:**\nStep 1: Spending $15\\%$ on textbooks leaves $3{,}200 \\times 0.85 = \\$2{,}720$.\nStep 2: The tablet costs $40\\%$ of the remaining \\$2{,}720: $2{,}720 \\times 0.40 = \\$1{,}088$.\nStep 3: Money left $= 2{,}720 - 1{,}088 = \\$1{,}632$ (equivalently $2{,}720 \\times 0.60 = \\$1{,}632$). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$1{,}088$): reported the tablet's COST instead of what is left.\n* Choice B ($\\$1{,}440$): subtracted a combined $55\\%$ of \\$3{,}200 directly.\n* Choice D ($\\$1{,}920$): stopped after the textbooks step.\n\n**Test Day Takeaway:** \"$X\\%$ of the remainder\" applies to what is LEFT, not the original total. Chain multipliers: $0.85 \\times 0.60 = 0.51$, so $\\$3{,}200 \\times 0.51 = \\$1{,}632$.",
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
    explanation: "**SAT Pattern: Successive Percent Round Trip**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Net multiplier $= 1.10 \\times 0.90 = 0.99$, so $200 \\times 0.99 = 198$.\n\n**The Full Solution:**\nStep 1: Monday: $200 \\times 1.10 = 220$.\nStep 2: Tuesday: $220 \\times 0.90 = 198$.\nStep 3: The net effect is $1.10 \\times 0.90 = 0.99$ — a $1\\%$ decrease, not a return to \\$200. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$196$): an arithmetic slip near the correct value.\n* Choice C ($\\$200$): assumed $+10\\%$ then $-10\\%$ cancels, but the base changes between steps.\n* Choice D ($\\$202$): added $1\\%$ to \\$200 instead of subtracting.\n\n**Test Day Takeaway:** A $+p\\%$ then $-p\\%$ change does NOT return to the original. The net is $(1+p)(1-p) = 1 - p^2$, always a small decrease.",
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
    explanation: "**SAT Pattern: Successive Percent Growth**\n\n**The correct answer is $6900$.**\n\n**The Fast Way (~15s):** $5{,}000 \\times 1.20 \\times 1.15 = 6{,}000 \\times 1.15 = 6{,}900$.\n\n**The Full Solution:**\nStep 1: Year 1: $5{,}000 \\times 1.20 = \\$6{,}000$.\nStep 2: Year 2: $6{,}000 \\times 1.15 = \\$6{,}900$.\nStep 3: Check the net multiplier: $1.20 \\times 1.15 = 1.38$, so $5{,}000 \\times 1.38 = 6{,}900$. $\\checkmark$\n\n**Common Mistakes:** Adding the rates to $35\\%$ gives $5{,}000 \\times 1.35 = 6{,}750$; multiplying $5{,}000 \\times 0.35$ gives $1{,}750$; reporting $6{,}000$ (year 1 only).\n\n**Test Day Takeaway:** Successive percent changes COMPOUND (multiply), they don't add. Each year's base is the previous result, not the original.",
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
    explanation: "**SAT Pattern: Exponential Depreciation Expression**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Losing $15\\%$ per year means retaining $0.85$ each year, so after $4$ years the value is $28{,}000(0.85)^4$.\n\n**The Full Solution:**\nStep 1: Depreciating $15\\%$ a year means the car keeps $1 - 0.15 = 0.85$ of its value each year.\nStep 2: After $t$ years, $V(t) = 28{,}000 \\times (0.85)^t$.\nStep 3: At $t = 4$: $V(4) = 28{,}000(0.85)^4$, which matches Choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($28{,}000(0.15)^4$): used the loss rate $0.15$ as the multiplier, which would erase nearly all the value.\n* Choice C ($28{,}000(1.15)^4$): used a growth multiplier $1.15$, modeling appreciation, not depreciation.\n* Choice D ($28{,}000 - 4(0.15)(28{,}000)$): linear (simple) depreciation, not compound.\n\n**Test Day Takeaway:** A decay multiplier is $1 - p$; growth is $1 + p$. Compound decay uses $(1-p)^t$; SAT depreciation problems are almost always compound.",
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
    explanation: "**SAT Pattern: Net Effect of Successive Percent Changes**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Net multiplier $= 1.80 \\times 0.70 = 1.26$, a $26\\%$ increase.\n\n**The Full Solution:**\nStep 1: An $80\\%$ markup is a multiplier of $1 + 0.80 = 1.80$.\nStep 2: A $30\\%$ discount is a multiplier of $1 - 0.30 = 0.70$.\nStep 3: Net $= 1.80 \\times 0.70 = 1.26$, which is a $26\\%$ increase. Check with cost $= \\$100$: markup to \\$180, clearance $180 \\times 0.70 = \\$126$, a $+26\\%$ change. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($50\\%$ increase): added $80\\% - 30\\% = 50\\%$ instead of compounding.\n* Choice C ($26\\%$ decrease): right magnitude, wrong sign — $1.26 > 1$, so it is an increase.\n* Choice D ($10\\%$ increase): averaged the two operations.\n\n**Test Day Takeaway:** The net change from multipliers $m_1$ and $m_2$ is $m_1 m_2 - 1$ as a percent. Never add or subtract the percent values.",
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
    explanation: "**SAT Pattern: Basic Mean**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Sum $= 78 + 85 + 92 + 88 + 77 = 420$, so mean $= \\frac{420}{5} = 84$.\n\n**The Full Solution:**\nStep 1: Mean $= \\frac{\\text{sum of values}}{\\text{number of values}}$.\nStep 2: $\\frac{78 + 85 + 92 + 88 + 77}{5} = \\frac{420}{5} = 84$.\nStep 3: Re-sum to confirm: $78 + 85 = 163$, $+92 = 255$, $+88 = 343$, $+77 = 420$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($82$): undercounts the sum.\n* Choice C ($85$): the median (middle value when the scores are sorted), not the mean.\n* Choice D ($86$): an arithmetic slip that overcounts the sum.\n\n**Test Day Takeaway:** Mean $=$ sum $\\div$ count. Add once, cleanly, and don't confuse the mean with the median (middle when sorted) or mode (most frequent).",
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
    explanation: "**SAT Pattern: Mean with Rounding**\n\n**The correct answer is $71.7$.**\n\n**The Fast Way (~20s):** Sum $= 502$, so mean $= \\frac{502}{7} \\approx 71.71$, which rounds to $71.7$.\n\n**The Full Solution:**\nStep 1: Sum the seven values: $71 + 68 + 75 + 73 + 69 + 74 + 72 = 502$.\nStep 2: Divide by $7$: $\\frac{502}{7} \\approx 71.714$.\nStep 3: Round to the tenths place: $71.7$. Check by pairing: $(71+73) + (68+74) + (75+69) + 72 = 144 + 142 + 144 + 72 = 502$. $\\checkmark$\n\n**Common Mistakes:** Dividing by $6$ (forgetting a day); reporting $71$ or $72$ (dropping the decimal entirely); reporting $71.71$ (one too many decimal places).\n\n**Test Day Takeaway:** Sum first, divide once, and round only at the END to the requested place.",
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
    explanation: "**SAT Pattern: Single Unit Conversion**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Each cup is $240$ mL, so $3.5 \\times 240 = 840$ mL.\n\n**The Full Solution:**\nStep 1: Set up the conversion factor with the new unit (mL) on top so cups cancel: $3.5 \\text{ cups} \\cdot \\dfrac{240 \\text{ mL}}{1 \\text{ cup}}$.\nStep 2: Multiply: $3.5 \\times 240 = 840$ mL.\n\nCheck: $3 \\times 240 = 720$ and $0.5 \\times 240 = 120$, and $720 + 120 = 840$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($68.6$): divides instead of multiplying ($240 \\div 3.5 \\approx 68.6$) — the conversion factor is flipped.\n* Choice B ($243.5$): adds instead of multiplying ($240 + 3.5$) — treats the conversion as an offset.\n* Choice D ($8{,}400$): slips a decimal, multiplying by $35$ instead of $3.5$.\n\n**Test Day Takeaway:** A single unit conversion is multiplication by a fraction arranged so the old unit cancels and the new unit survives. Going from a smaller unit (cups) to a larger count (mL), the number gets bigger.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'single-unit-conversion', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  {
    id: 'bank-ps-050',
    domain: 'problem-solving',
    skills: ['unit-conversion'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'A hiking trail is 7.5 kilometers long. If 1 mile ≈ 1.6 kilometers, approximately how many miles long is the trail? (Round to one decimal place.)',
    correctAnswer: '4.7',
    explanation: "**SAT Pattern: km to Miles Conversion**\n\n**The correct answer is $4.7$.**\n\n**The Fast Way (~15s):** Miles are bigger than km, so divide: $7.5 \\div 1.6 = 4.6875 \\to 4.7$.\n\n**The Full Solution:**\nStep 1: Use the factor with miles on top so km cancel: $7.5 \\text{ km} \\times \\dfrac{1 \\text{ mile}}{1.6 \\text{ km}} = \\dfrac{7.5}{1.6}$.\nStep 2: $\\dfrac{7.5}{1.6} = 4.6875$.\nStep 3: Round to one decimal place: $4.6875 \\to 4.7$.\n\nCheck: $4.7 \\times 1.6 = 7.52 \\approx 7.5$ km. $\\checkmark$\n\n**Common Mistakes:** Multiplying instead of dividing ($7.5 \\times 1.6 = 12$, the wrong direction); rounding to $4.6$ or $4.8$; reporting the unrounded $4.6875$.\n\n**Test Day Takeaway:** To convert km to miles, divide by $1.6$; to convert miles to km, multiply. Check the direction by asking which unit is larger — fewer of the larger unit.",
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
    explanation: "**SAT Pattern: Compound Unit Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** To turn km/hr into m/s, divide by $3.6$: $90 \\div 3.6 = 25$ m/s.\n\n**The Full Solution:**\nStep 1: Chain the conversion factors so km and hr cancel: $\\dfrac{90 \\text{ km}}{1 \\text{ hr}} \\times \\dfrac{1000 \\text{ m}}{1 \\text{ km}} \\times \\dfrac{1 \\text{ hr}}{3600 \\text{ s}}$.\nStep 2: Combine the numbers: $\\dfrac{90 \\times 1000}{3600} = \\dfrac{90000}{3600} = 25$ m/s.\n\nCheck: $25 \\times 3.6 = 90$ km/hr. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): divides by $6$ instead of $3.6$ — uses the wrong combined factor.\n* Choice C ($54$): scales by $0.6$ ($90 \\times 0.6$) — a partial, mis-built factor that never converts both units.\n* Choice D ($324$): multiplies by $3.6$ instead of dividing — the inverse operation.\n\n**Test Day Takeaway:** km/hr $\\to$ m/s: divide by $3.6$. The full factor is $\\dfrac{1000}{3600} = \\dfrac{5}{18} = \\dfrac{1}{3.6}$. Reverse it (multiply by $3.6$) to go from m/s back to km/hr.",
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
    explanation: "**SAT Pattern: Rate Per Minute from Per Hour**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** There are $60$ minutes in an hour, so $1800 \\div 60 = 30$ widgets/min.\n\n**The Full Solution:**\nStep 1: Set up the factor so hours cancel: $\\dfrac{1800 \\text{ widgets}}{1 \\text{ hr}} \\times \\dfrac{1 \\text{ hr}}{60 \\text{ min}}$.\nStep 2: Divide: $\\dfrac{1800}{60} = 30$ widgets/min.\n\nCheck: $30 \\times 60 = 1800$ widgets/hr. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): divides by $600$ — overshoots by a factor of $10$.\n* Choice B ($18$): divides by $100$ instead of $60$.\n* Choice D ($108$): uses a made-up factor; no clean operation on $1800$ produces it.\n\n**Test Day Takeaway:** Per-hour to per-minute: divide by $60$. Per-minute to per-second: divide by $60$. Per-hour to per-second: divide by $3600$.",
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
    explanation: "**SAT Pattern: Chained Rate Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $4.5 \\times 60 = 270$ gal/hr, then $270 \\times 3.785 = 1021.95$ L/hr.\n\n**The Full Solution:**\nStep 1: Chain the factors so min and gal cancel, leaving L/hr: $\\dfrac{4.5 \\text{ gal}}{1 \\text{ min}} \\times \\dfrac{60 \\text{ min}}{1 \\text{ hr}} \\times \\dfrac{3.785 \\text{ L}}{1 \\text{ gal}}$.\nStep 2: Multiply through: $4.5 \\times 60 \\times 3.785 = 270 \\times 3.785 = 1021.95$ L/hr.\n\nCheck: $270$ gal/hr times $3.785$ L/gal gives $1021.95$ L/hr. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($170.3$): stops one step early at liters per minute ($4.5 \\times 3.785 \\approx 17.0$), then slips a decimal.\n* Choice C ($1{,}350$): rounds $3.785$ up to $5$ L/gal, giving $270 \\times 5 = 1350$ — a too-coarse conversion factor.\n* Choice D ($10{,}219.5$): correct chain but with a factor-of-$10$ decimal error.\n\n**Test Day Takeaway:** For chained conversions, write every factor explicitly and confirm each unit cancels. The leftover unit must match the target before you trust the number.",
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
    explanation: "**SAT Pattern: Area Unit Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Area $= 15 \\times 20 = 300$ sq ft. Since $1$ sq yd $= 9$ sq ft, $\\dfrac{300}{9} = 33.\\overline{3}$.\n\n**The Full Solution:**\nStep 1: Find the area in square feet: $15 \\text{ ft} \\times 20 \\text{ ft} = 300$ sq ft.\nStep 2: Square the linear factor. Since $1$ yd $= 3$ ft, $(1 \\text{ yd})^2 = (3 \\text{ ft})^2 = 9$ sq ft.\nStep 3: Divide: $\\dfrac{300 \\text{ sq ft}}{9 \\text{ sq ft per sq yd}} = 33.\\overline{3}$ sq yd.\n\nCheck: $33.\\overline{3} \\times 9 = 300$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($11.67$): adds the two sides first ($15 + 20 = 35$), then divides by the linear factor $3$ ($\\dfrac{35}{3} \\approx 11.67$) — wrong on both the area step and the squared factor.\n* Choice C ($100$): divides by $3$ (the linear factor) instead of $9$ (the squared factor).\n* Choice D ($300$): stops at the area in square feet without converting.\n\n**Test Day Takeaway:** Area conversion uses the square of the linear factor: $1$ yd $= 3$ ft, so $1$ sq yd $= 9$ sq ft. Volume uses the cube: $1$ cu yd $= 27$ cu ft.",
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
    explanation: "**SAT Pattern: Volume Unit Conversion**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $1$ cu ft $= 12^3 = 1728$ cu in, so $\\dfrac{8640}{1728} = 5$.\n\n**The Full Solution:**\nStep 1: Cube the linear factor. Since $1$ ft $= 12$ in, $1$ cu ft $= 12^3 = 1728$ cu in.\nStep 2: Divide: $\\dfrac{8640 \\text{ cu in}}{1728 \\text{ cu in per cu ft}} = 5$ cu ft.\n\nCheck: $5 \\times 1728 = 8640$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($60$): divides by $144 = 12^2$ — applies the area factor to a volume.\n* Choice C ($720$): divides by $12$ — applies the linear factor only.\n* Choice D ($1{,}440$): divides by $6$ — a made-up factor.\n\n**Test Day Takeaway:** Volume conversion uses the cube of the linear factor: $1$ ft $= 12$ in $\\Rightarrow 1$ cu ft $= 12^3 = 1728$ cu in.",
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
    explanation: "**SAT Pattern: Tile Area in Square Feet**\n\n**The correct answer is $2.25$.**\n\n**The Fast Way (~15s):** $18$ in $= 1.5$ ft, so area $= 1.5 \\times 1.5 = 2.25$ sq ft.\n\n**The Full Solution:**\nStep 1: Convert the side length to feet: $18 \\text{ in} \\times \\dfrac{1 \\text{ ft}}{12 \\text{ in}} = 1.5$ ft.\nStep 2: Square it for the area: $1.5 \\times 1.5 = 2.25$ sq ft.\n\nCheck: in square inches the area is $18 \\times 18 = 324$; dividing by $144$ (the squared factor) gives $\\dfrac{324}{144} = 2.25$. $\\checkmark$\n\n**Common Mistakes:** Dividing $324$ by $12$ instead of $144$ (gives $27$); reporting $324$ (the area in square inches); reporting $1.5$ (the side length, not the area).\n\n**Test Day Takeaway:** Two routes to an area conversion: convert the sides first, then multiply, or compute the area in original units and divide by the squared factor. Both give $2.25$ sq ft.",
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
    explanation: "**SAT Pattern: Rate × Time = Total**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $2.5$ hr $= 150$ min, so pages $= 12 \\times 150 = 1800$.\n\n**The Full Solution:**\nStep 1: Match the units to the rate (pages per minute) by converting the time: $2.5 \\text{ hr} \\times 60 = 150$ min.\nStep 2: Multiply rate by time: $12 \\text{ pages/min} \\times 150 \\text{ min} = 1800$ pages.\n\nCheck: in $1$ hour the printer makes $12 \\times 60 = 720$ pages, and $720 \\times 2.5 = 1800$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($30$): multiplies $12$ by $2.5$, treating hours as minutes.\n* Choice B ($180$): uses $15$ minutes per hour instead of $60$.\n* Choice C ($1{,}500$): right method, arithmetic slip on the multiplication.\n\n**Test Day Takeaway:** Before applying rate $\\times$ time, convert the time so its unit matches the rate. Here $12$ pages/min needs minutes, so turn $2.5$ hr into $150$ min first.",
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
    explanation: "**SAT Pattern: Relative Rate (Same Direction)**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Same direction means the gap grows at the difference: $14 - 6 = 8$ mph over $0.75$ hr gives $8 \\times 0.75 = 6$ mi.\n\n**The Full Solution:**\nStep 1: Two objects moving the same way separate at the difference of their speeds: $14 - 6 = 8$ mph.\nStep 2: Convert time: $45$ min $= 0.75$ hr.\nStep 3: Gap $= 8 \\text{ mph} \\times 0.75 \\text{ hr} = 6$ mi.\n\nOr compute each distance: cyclist $14 \\times 0.75 = 10.5$ mi, jogger $6 \\times 0.75 = 4.5$ mi, gap $10.5 - 4.5 = 6$ mi. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4.5$): the jogger's distance alone, not the gap.\n* Choice C ($8.0$): uses the relative speed but forgets to scale by the $0.75$-hr time.\n* Choice D ($15.0$): adds the speeds (opposite-direction rule) and scales, or reports the cyclist's full-hour distance.\n\n**Test Day Takeaway:** Same direction $\\to$ relative speed is the difference; opposite directions $\\to$ the sum. The gap between them grows at that relative speed.",
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
    explanation: "**SAT Pattern: Rate × Time = Total (Mixed Units)**\n\n**The correct answer is $1875$.**\n\n**The Fast Way (~10s):** $7$ hr $30$ min $= 7.5$ hr, so $250 \\times 7.5 = 1875$ boxes.\n\n**The Full Solution:**\nStep 1: Convert the shift to decimal hours: $30$ min $= \\dfrac{30}{60} = 0.5$ hr, so the shift is $7.5$ hr.\nStep 2: Multiply rate by time: $250 \\text{ boxes/hr} \\times 7.5 \\text{ hr} = 1875$ boxes.\n\nCheck: $250 \\times 7 = 1750$ in the first $7$ hr, plus $250 \\times 0.5 = 125$ in the last half hour, totaling $1875$. $\\checkmark$\n\n**Common Mistakes:** Writing $30$ min as $0.3$ hr and using $7.3$; multiplying $7 \\times 30$ to get a bogus \"$210$ minutes\"; reporting $7.5$ or $250$ alone.\n\n**Test Day Takeaway:** Convert hr:min to decimal hours by dividing the minutes by $60$ — so $30$ min $= 0.5$ hr, never $0.3$.",
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
    explanation: "**SAT Pattern: Total / Rate = Time**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Total water $= 36 \\times 0.5 = 18$ L, so time $= \\dfrac{18}{2.4} = 7.5$ hr.\n\n**The Full Solution:**\nStep 1: Find the total water needed: $36 \\text{ plants} \\times 0.5 \\text{ L/plant} = 18$ L.\nStep 2: Divide by the delivery rate: $\\text{time} = \\dfrac{18 \\text{ L}}{2.4 \\text{ L/hr}} = 7.5$ hr.\n\nCheck: in $7.5$ hr the system delivers $2.4 \\times 7.5 = 18$ L. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): divides $18$ by $3.6$ or otherwise uses the wrong rate.\n* Choice C ($15$): divides plant count by rate ($\\dfrac{36}{2.4}$), skipping the $0.5$ L/plant step.\n* Choice D ($18$): reports the total liters of water, not the time.\n\n**Test Day Takeaway:** Time $= \\dfrac{\\text{total}}{\\text{rate}}$. Confirm units cancel: $\\dfrac{\\text{L}}{\\text{L/hr}} = \\text{L} \\times \\dfrac{\\text{hr}}{\\text{L}} = \\text{hr}$.",
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
    explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Build each interval. Sample $A$: $52\\% \\pm 3\\% = [49\\%, 55\\%]$. Sample $B$: $58\\% \\pm 4\\% = [54\\%, 62\\%]$. They overlap on $[54\\%, 55\\%]$, so the data does not strongly demonstrate a difference.\n\n**The Full Solution:**\nStep 1: Turn each estimate into a confidence interval. Sample $A$ gives $52\\% \\pm 3\\% \\Rightarrow [49\\%, 55\\%]$. Sample $B$ gives $58\\% \\pm 4\\% \\Rightarrow [54\\%, 62\\%]$.\nStep 2: Check for overlap. The top of $A$ ($55\\%$) exceeds the bottom of $B$ ($54\\%$), so the intervals share $[54\\%, 55\\%]$.\nStep 3: Overlapping intervals are consistent with both samples coming from the SAME true proportion, so you cannot claim a real difference. Choice B states exactly this.\n\n**Why the wrong answers are tempting:**\n* Choice A: claims a significant increase, but overlapping intervals cannot support a confident \"significant\" claim.\n* Choice C: inverts the direction to a decrease, and still ignores the overlap.\n* Choice D: treats the sample percents as exact population values, ignoring the margin of error entirely.\n\n**Test Day Takeaway:** Overlapping confidence intervals $\\Rightarrow$ no strong evidence of a difference. Disjoint intervals $\\Rightarrow$ the data supports a difference.",
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
    explanation: "**SAT Pattern: Margin of Error**\n\n**The correct answer is $2{,}500$.**\n\n**The Fast Way (~15s):** $\\dfrac{1}{\\sqrt{n}} \\le 0.02 \\Rightarrow \\sqrt{n} \\ge 50 \\Rightarrow n \\ge 2{,}500$.\n\n**The Full Solution:**\nStep 1: Set up the bound. \"At most $2\\%$\" means $\\dfrac{1}{\\sqrt{n}} \\le 0.02$.\nStep 2: Take reciprocals. Since both sides are positive, the inequality flips: $\\sqrt{n} \\ge \\dfrac{1}{0.02} = 50$.\nStep 3: Square both sides: $n \\ge 50^2 = 2{,}500$. The minimum sample size is $2{,}500$.\nCheck: at $n = 2{,}500$, $\\sqrt{n} = 50$ and $\\text{MOE} \\approx \\dfrac{1}{50} = 0.02 = 2\\%$, exactly at the threshold. $\\checkmark$\n\n**Common Mistakes:** Forgetting to square and reporting $n = 50$; mishandling the decimal and dividing by $0.2$ instead of $0.02$ to get $5$.\n\n**Test Day Takeaway:** To force $\\text{MOE} \\le m$ when $\\text{MOE} \\approx \\dfrac{1}{\\sqrt{n}}$, you need $n \\ge \\dfrac{1}{m^2}$ — square the reciprocal of the target.",
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
    explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The interval is $0.52 \\pm 0.03 = [0.49, 0.55]$. Its lower end $0.49 < 0.50$, so the true proportion could plausibly be below a majority — the data does not strongly demonstrate majority support.\n\n**The Full Solution:**\nStep 1: Build the interval: $0.52 \\pm 0.03 \\Rightarrow [0.49, 0.55]$.\nStep 2: Compare it to the majority threshold $0.50$. The interval contains values both below ($0.49$) and above ($0.55$) $0.50$.\nStep 3: Because the interval straddles $0.50$, the data is consistent with both majority and non-majority support. You cannot confidently conclude either way, which is exactly what Choice B says.\n\n**Why the wrong answers are tempting:**\n* Choice A: treats the sample proportion $0.52$ as a certainty and ignores that the interval dips below $0.50$.\n* Choice C: reverses A's overconfident claim to the other direction.\n* Choice D: confuses the margin of error with the lower bound — the interval is $0.49$ to $0.55$, not $0.03$ to $0.52$.\n\n**Test Day Takeaway:** When a confidence interval straddles a key threshold (such as $0.50$ or $0$), the data does not confidently establish which side is true. Ask whether the WHOLE interval lies above or below the threshold.",
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
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** \"Given a pet\" makes the denominator the Has-Pet total, $45$. The Studio-and-pet cell is $15$. $\\dfrac{15}{45} = \\dfrac{1}{3}$.\n\n**The Full Solution:**\nStep 1: The phrase \"a resident with a pet\" restricts the pool to the $45$ pet owners (the Has-Pet column total).\nStep 2: Of those $45$, the Studio row shows $15$.\nStep 3: $P(\\text{Studio} \\mid \\text{Pet}) = \\dfrac{15}{45} = \\dfrac{1}{3}$, which is Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{1}{8}$): uses the grand total $120$ as the denominator ($\\frac{15}{120}$), giving the JOINT probability, not the conditional.\n* Choice C ($\\frac{1}{4}$): computes the reverse condition $P(\\text{Pet} \\mid \\text{Studio}) = \\frac{15}{60}$.\n* Choice D ($3$): flips the correct fraction upside down.\n\n**Test Day Takeaway:** \"Given X\" sets the DENOMINATOR to X's total; the numerator is the cell where both conditions meet.",
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
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**The correct answer is $0.58$.**\n\n**The Fast Way (~10s):** \"Given a $10$th grader\" makes the denominator $60$. Of those, $35$ prefer salad. $\\dfrac{35}{60} = 0.583\\ldots \\approx 0.58$.\n\n**The Full Solution:**\nStep 1: \"A $10$th-grade student\" restricts the pool to the $60$ tenth graders (the $10$th-grade row total).\nStep 2: The $10$th-grade Salad cell shows $35$.\nStep 3: $P(\\text{Salad} \\mid 10\\text{th}) = \\dfrac{35}{60} = 0.5833\\ldots$, which rounds to $0.58$.\n\n**Common Mistakes:** Using the grand total $180$ as the denominator ($\\frac{35}{180} = 0.19$); reading the wrong Salad cell, such as $25$ from $11$th grade; reporting a raw count like $35$ or $60$.\n\n**Test Day Takeaway:** When the condition is a ROW label, the row total is the denominator; when it is a COLUMN label, the column total is the denominator.",
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
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Given Transit\" makes the denominator the Transit column total, $60$. The Engineering-and-Transit cell is $35$. $P = \\dfrac{35}{60}$.\n\n**The Full Solution:**\nStep 1: \"An employee who uses Transit\" restricts the pool to the $60$ Transit users (the Transit column total).\nStep 2: Within those $60$, the Engineering row shows $35$ Transit users.\nStep 3: $P(\\text{Engineering} \\mid \\text{Transit}) = \\dfrac{35}{60}$, which is Choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{35}{160}$): uses the grand total $160$, giving the JOINT probability instead of the conditional.\n* Choice C ($\\frac{35}{70}$): reverses the condition to $P(\\text{Transit} \\mid \\text{Engineering})$, using the Engineering row total $70$.\n* Choice D ($\\frac{20}{60}$): keeps the right denominator but pulls the Engineering-Drives cell ($20$) instead of Engineering-Transit ($35$).\n\n**Test Day Takeaway:** $P(A \\mid B)$ puts B's total in the denominator and the $A \\cap B$ cell in the numerator. Pin down which label is the condition before you divide.",
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
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** \"Given TV or Online\" makes the denominator $50 + 135 = 185$. Seniors in those two columns: $20 + 90 = 110$. $P = \\dfrac{110}{185}$.\n\n**The Full Solution:**\nStep 1: The condition \"Television OR Online\" combines both columns: $50 + 135 = 185$ students.\nStep 2: Count Seniors within that pool: Senior-TV is $20$ and Senior-Online is $90$, so $20 + 90 = 110$.\nStep 3: $P(\\text{Senior} \\mid \\text{TV or Online}) = \\dfrac{110}{185}$, which is Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{110}{200}$): uses the grand total $200$ instead of the conditioned subgroup total $185$.\n* Choice C ($\\frac{110}{120}$): reverses the condition to $P(\\text{TV or Online} \\mid \\text{Senior})$, using the Senior row total $120$.\n* Choice D ($\\frac{90}{135}$): stops at the Online column and forgets to add the TV counts.\n\n**Test Day Takeaway:** \"X OR Y\" in the condition means ADD the two column (or row) totals for the denominator and ADD the matching cells for the numerator.",
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
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**The correct answer is $62$.**\n\n**The Fast Way (~10s):** \"Given Member\" makes the denominator $78$. Daily-and-Member is $48$. $\\dfrac{48}{78} \\approx 0.6154 \\approx 62\\%$.\n\n**The Full Solution:**\nStep 1: \"If one Member is selected\" restricts the pool to the $78$ Members (the Member column total).\nStep 2: Of those $78$, the Daily row shows $48$.\nStep 3: $P(\\text{Daily} \\mid \\text{Member}) = \\dfrac{48}{78} = 0.6154\\ldots$, which is $61.5\\%$, rounding to $62$.\n\n**Common Mistakes:** Reporting the decimal $0.62$ instead of the whole-number percent; using the grand total $110$ as the denominator ($\\frac{48}{110} \\approx 44\\%$); reading the wrong cell, such as $30$ from Weekly-Member or $12$ from Daily-NonMember.\n\n**Test Day Takeaway:** \"What percent of X is Y?\" is the same conditional question in percent form — X's total is the denominator, the $X \\cap Y$ cell is the numerator, and you convert to percent at the end.",
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
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** \"Disease AND Positive\" is a JOINT probability, so the denominator is the grand total $500$. The Disease-Positive cell is $80$. $P = \\dfrac{80}{500}$.\n\n**The Full Solution:**\nStep 1: The word \"AND\" with no \"given\" signals a JOINT probability over the entire group.\nStep 2: The numerator is the Disease-and-Positive cell: $80$. The denominator is the grand total: $500$.\nStep 3: $P(\\text{Disease AND Positive}) = \\dfrac{80}{500} = \\dfrac{4}{25} = 0.16$, which is Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{80}{120}$): uses the Positive column total $120$, giving the CONDITIONAL $P(\\text{Disease} \\mid \\text{Positive})$.\n* Choice C ($\\frac{80}{100}$): uses the Disease row total $100$, giving the CONDITIONAL $P(\\text{Positive} \\mid \\text{Disease})$.\n* Choice D ($\\frac{40}{500}$): keeps the grand total but grabs the No-Disease-Positive cell ($40$).\n\n**Test Day Takeaway:** \"A AND B\" with no conditioning is JOINT, so the grand total is the denominator. \"A given B\" is CONDITIONAL, so B's total is the denominator. Listen for \"and\" versus \"given.\"",
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
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**The correct answer is $0.6$.**\n\n**The Fast Way (~25s):** Of the $200$ transit users, $80$ also worked remotely, so $200 - 80 = 120$ took transit but never worked remotely. $\\dfrac{120}{200} = 0.6$.\n\n**The Full Solution:**\nStep 1: The condition is \"an employee who took public transit,\" so the denominator is $200$.\nStep 2: Among those $200$, the joint cell \"transit AND remote\" is $80$. The rest, $200 - 80 = 120$, took transit but never worked remotely.\nStep 3: $P(\\text{Never Remote} \\mid \\text{Transit}) = \\dfrac{120}{200} = 0.6$.\n\n**Common Mistakes:** Reporting $\\frac{300}{500} = 0.6$ (the overall remote rate) — it matches numerically here but is the wrong reasoning; subtracting $80$ from $500$ instead of $200$, giving $\\frac{420}{500} = 0.84$; conditioning on \"Never Remote\" instead of \"Transit.\"\n\n**Test Day Takeaway:** When you are given marginal totals plus one joint cell, subtract the joint cell from the relevant marginal to fill the other cells, then apply the conditional formula.",
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
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** \"Athletics OR Both\" makes the denominator $70 + 50 = 120$. High Honors in those two rows: $20 + 25 = 45$. $P = \\dfrac{45}{120}$.\n\n**The Full Solution:**\nStep 1: The condition combines two rows. Athletics total is $70$, Both total is $50$, so the denominator is $70 + 50 = 120$.\nStep 2: Count High Honors within those rows: $20$ from Athletics and $25$ from Both, giving $20 + 25 = 45$.\nStep 3: $P(\\text{High Honors} \\mid \\text{Athletics or Both}) = \\dfrac{45}{120} = \\dfrac{3}{8} = 0.375$, which is Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{45}{220}$): uses the grand total $220$, giving the JOINT probability instead of the conditional.\n* Choice C ($\\frac{45}{65}$): reverses the condition to $P(\\text{Athletics or Both} \\mid \\text{High Honors})$, using the High Honors total $65$.\n* Choice D ($\\frac{20}{70}$): stops at the Athletics row and ignores the Both row entirely.\n\n**Test Day Takeaway:** When the condition joins two row labels with OR, add BOTH row totals to the denominator and add the matching cells from BOTH rows to the numerator. Do not stop at the first row.",
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
    explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $240$ is $30\\%$ of the total, so total $= \\dfrac{240}{0.30} = 800$.\n\n**The Full Solution:**\nStep 1: Let $T$ be the total meals. The $240$ vegetarian meals are $30\\%$ of $T$: $0.30 \\cdot T = 240$.\nStep 2: Divide both sides by $0.30$: $T = \\dfrac{240}{0.30} = 800$.\nCheck: $0.30 \\cdot 800 = 240$. $\\checkmark$ Choice B is correct.\n\n**Why the wrong answers are tempting:**\n* Choice A ($72$): multiplies forward instead of dividing, $240 \\cdot 0.30 = 72$.\n* Choice C ($312$): adds $30\\%$ onto $240$, treating $240$ as the base, $240 \\cdot 1.30 = 312$.\n* Choice D ($720$): divides by $\\frac{1}{3}$ instead of $0.30$.\n\n**Test Day Takeaway:** When a percent of an UNKNOWN total is given, divide the known part by the percent as a decimal to recover the whole.",
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
    // Scatter along ŷ = 4.5x + 200. Axis labels reinforce the business
    // context the stem references; the slope's "+4.50 per item" appears
    // visually as the rise/run, which anchors choice A.
    diagram: { type: 'scatterplot', params: {
      points: [[2,212],[4,215],[6,228],[8,238],[10,242],[12,252],[14,260],[16,275],[18,278],[20,290],[22,300],[24,305],[26,318],[28,320]],
      xMin: 0, xMax: 30, yMin: 0, yMax: 400,
      xGridStep: 2, yGridStep: 50, xLabelStep: 5, yLabelStep: 100,
      xLabel: 'Items sold', yLabel: 'Daily revenue ($)',
      bestFitLine: { slope: 4.5, intercept: 200 },
    } },
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
    // Scatter along ŷ = -1.2x + 80 — negative slope, intercept = 80°F at
    // x = 0 (noon). The y-intercept is what choice B describes; the chart
    // makes it visible by anchoring the line at (0, 80) on the y-axis.
    diagram: { type: 'scatterplot', params: {
      points: [[0,80],[1,80],[2,78],[3,77],[5,73],[6,74],[8,71],[9,68],[11,66],[12,67],[14,62],[16,61],[18,57],[19,58]],
      xMin: 0, xMax: 20, yMin: 50, yMax: 90,
      xGridStep: 1, yGridStep: 2, xLabelStep: 4, yLabelStep: 10,
      xLabel: 'Hours past noon', yLabel: 'Temperature (°F)',
      bestFitLine: { slope: -1.2, intercept: 80 },
    } },
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
    question: 'Out of $500$ patients, $200$ were diagnosed with Condition $X$, and $80\\%$ of those with Condition $X$ tested positive on a screening test. Of the $300$ patients WITHOUT Condition $X$, $90$ tested positive. If a patient who tested positive is selected at random, what is the probability that the patient has Condition $X$?',
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
    question: 'The two-way table below shows $200$ students by class year and gender. What is the marginal probability of selecting a senior?',
    diagram: { type: 'twoWayTable', params: { headers: ['', 'Male', 'Female', 'Total'], rows: [['Seniors', '42', '38', '80'], ['Juniors', '60', '60', '120'], ['Total', '102', '98', '200']] } },
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
    question: 'The two-way table below shows preferences of $200$ adults. What is the marginal probability of preferring tea?',
    diagram: { type: 'twoWayTable', params: { headers: ['', 'Tea', 'Coffee', 'Total'], rows: [['Men', '50', '60', '110'], ['Women', '30', '60', '90'], ['Total', '80', '120', '200']] } },
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
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-complement', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  // ─── CHAINED PERCENT RELATIONSHIP (bank-ps-225..232) ──────────────────────
  // Pure-algebraic chained percent: "a is X% of b, b is Y% of c, find a/c."
  // Distinct method from `compound-percent-of` (count-anchored) — students
  // freeze without a concrete count to anchor on. See
  // docs/CB_QUESTION_TYPE_AUDIT_2026-05-16.md §B1. CB precedent: PT11-M2-Q21.
  { id: 'bank-ps-225', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $a$ is $20\\%$ of $b$, and $b$ is $50\\%$ of $c$, then $a$ is what percent of $c$?',
    choices: [{ id: 'A', text: '$10\\%$' }, { id: 'B', text: '$30\\%$' }, { id: 'C', text: '$40\\%$' }, { id: 'D', text: '$70\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Multiply the two percents (as decimals): $0.20 \\cdot 0.50 = 0.10 = 10\\%$.\n\n**The Full Solution:**\nFrom the two given relationships:\n$\\quad a = 0.20 \\cdot b$\n$\\quad b = 0.50 \\cdot c$\nSubstitute the second into the first:\n$\\quad a = 0.20 \\cdot (0.50 \\cdot c) = 0.10 \\cdot c$\nSo $a$ is $10\\%$ of $c$.\n\nVerification: pick $c = 100$. Then $b = 50$ and $a = 20\\%$ of $50 = 10$. Check: $a/c = 10/100 = 10\\%$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B ($30\\%$): SUBTRACTS the two percents ($50 - 20 = 30$). The relationship between $a$ and $c$ is multiplicative, not subtractive.\n* Choice C ($40\\%$): divides the two percents ($20/50 = 0.40$). This finds $a/b$, not $a/c$.\n* Choice D ($70\\%$): ADDS the two percents ($20 + 50 = 70$). Tempting because addition feels like 'combining.' But chained percents multiply.\n\n**Test Day Takeaway:** When two percent relationships chain through a middle variable, MULTIPLY the percents (as decimals). The middle variable cancels in the substitution.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'chained-percent-relationship', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-226', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'easy', type: 'multiple-choice',
    question: '$x$ is $40\\%$ of $y$, and $y$ is $25\\%$ of $z$. What is $x$ as a percent of $z$?',
    choices: [{ id: 'A', text: '$10\\%$' }, { id: 'B', text: '$15\\%$' }, { id: 'C', text: '$65\\%$' }, { id: 'D', text: '$160\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $0.40 \\cdot 0.25 = 0.10 = 10\\%$.\n\n**The Full Solution:**\n$x = 0.40 \\cdot y$ and $y = 0.25 \\cdot z$, so $x = 0.40 \\cdot 0.25 \\cdot z = 0.10 \\cdot z$.\n\nVerification: $z = 200 \\Rightarrow y = 50 \\Rightarrow x = 20$. Check: $20/200 = 10\\%$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B ($15\\%$): SUBTRACTS ($40 - 25 = 15$) — wrong operation.\n* Choice C ($65\\%$): ADDS ($40 + 25 = 65$) — also wrong operation; chained percents are NOT additive.\n* Choice D ($160\\%$): reverses the ratio ($40/25 = 1.60$). This would describe $z$ in terms of $y$, not $x$ in terms of $z$.\n\n**Test Day Takeaway:** Chained percents multiply. The middle variable cancels by substitution.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'chained-percent-relationship', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-227', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'medium', type: 'fill-in',
    question: 'If $a$ is $45\\%$ of $b$, and $b$ is $15\\%$ of $c$, what is $a$ as a percent of $c$? (Report only the number, without the % sign.)',
    correctAnswer: '6.75',
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**The correct answer is $6.75$.**\n\n**The Fast Way (~10s):** $0.45 \\cdot 0.15 = 0.0675 = 6.75\\%$.\n\n**The Full Solution:**\nFrom $a = 0.45 b$ and $b = 0.15 c$:\n$\\quad a = 0.45 \\cdot (0.15 c) = 0.0675 \\cdot c$\nSo $a$ is $6.75\\%$ of $c$.\n\nVerification: $c = 1000 \\Rightarrow b = 150 \\Rightarrow a = 45\\%$ of $150 = 67.5$. Check: $67.5/1000 = 6.75\\%$ \\checkmark.\n\n**Common Mistakes:**\n* Reporting $60$ ($45 + 15$ — sum trap).\n* Reporting $30$ ($45 - 15$ — subtraction trap).\n* Reporting $3$ ($45 / 15 = 3$ — wrong operation).\n* Reporting $67.5$ — confuses $a$ as percent of $c$ with $a$ as a NUMBER when $c = 1000$. Re-read the question stem.\n\n**Test Day Takeaway:** Chained percents always multiply. Convert each percent to a decimal first, multiply, then convert back to a percent.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'chained-percent-relationship', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-228', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'medium', type: 'multiple-choice',
    question: '$p$ is $80\\%$ of $q$, and $q$ is $25\\%$ less than $r$. What is $p$ as a percent of $r$?',
    choices: [{ id: 'A', text: '$55\\%$' }, { id: 'B', text: '$60\\%$' }, { id: 'C', text: '$100\\%$' }, { id: 'D', text: '$105\\%$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $25\\%$ less than $r$ means $q = 0.75 r$. So $p = 0.80 \\cdot 0.75 \\cdot r = 0.60 r = 60\\%$ of $r$.\n\n**The Full Solution:**\nStep 1: Translate '$q$ is $25\\%$ less than $r$' into a percent OF $r$:\n$\\quad q = r - 0.25 r = 0.75 r$ (i.e., $q$ is $75\\%$ of $r$).\nStep 2: Substitute into $p = 0.80 q$:\n$\\quad p = 0.80 \\cdot 0.75 \\cdot r = 0.60 r$.\nSo $p$ is $60\\%$ of $r$.\n\nVerification: pick $r = 100$. Then $q = 75$ and $p = 80\\%$ of $75 = 60$. Check: $p/r = 60/100 = 60\\%$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($55\\%$): SUBTRACTS the percents ($80 - 25 = 55$). The two percents are not in the same direction — one is a multiplier, the other is a 'less than'.\n* Choice C ($100\\%$): treats '$25\\%$ less than' as '$25\\%$ greater than' — computes $0.80 \\cdot 1.25 = 1.00 = 100\\%$. The word 'less' was misread as 'more'.\n* Choice D ($105\\%$): ADDS the percents ($80 + 25 = 105$) — wrong operation.\n\n**Test Day Takeaway:** '$X\\%$ less than' $\\Rightarrow$ multiplier is $(1 - X/100)$. '$X\\%$ greater than' $\\Rightarrow$ multiplier is $(1 + X/100)$. The sign of the comparison flips the multiplier.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'chained-percent-relationship', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-229', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'At an outdoor concert, $65\\%$ of attendees are students. Of those students, $30\\%$ are music majors. What percent of all attendees are student music majors?',
    choices: [{ id: 'A', text: '$19.5\\%$' }, { id: 'B', text: '$30\\%$' }, { id: 'C', text: '$35\\%$' }, { id: 'D', text: '$95\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** \"Of those students\" means the second percent is a fraction of the first. Multiply: $0.65 \\times 0.30 = 0.195 = 19.5\\%$.\n\n**The Full Solution:**\nStep 1: Let total attendance be $T$. Students make up $65\\%$, so students $= 0.65T$.\nStep 2: Of those students, $30\\%$ are music majors: $0.30 \\cdot (0.65T) = 0.195T$.\nStep 3: That is $19.5\\%$ of all attendees.\n\nCheck with $T = 1000$: students $= 650$, student music majors $= 0.30 \\cdot 650 = 195$, and $\\frac{195}{1000} = 19.5\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($30\\%$): reports the conditional rate alone, forgetting it applies only to the $65\\%$ who are students.\n* Choice C ($35\\%$): subtracts the percents ($65 - 30$) — wrong operation.\n* Choice D ($95\\%$): adds the percents ($65 + 30$) — that would answer \"students OR music majors,\" not \"student music majors.\"\n\n**Test Day Takeaway:** When a percent is taken \"of those\" already counted, multiply the percents as decimals — never add or subtract.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'chained-percent-relationship', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-230', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'medium', type: 'fill-in',
    question: 'If $m$ is $50\\%$ of $n$, and $n$ is $20\\%$ greater than $p$, then $m$ is what percent of $p$? (Report only the number, without the % sign.)',
    correctAnswer: '60',
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**The correct answer is $60$.**\n\n**The Fast Way (~10s):** \"$20\\%$ greater than $p$\" means $n = 1.20p$. Then $m = 0.50 \\cdot 1.20p = 0.60p$, so $m$ is $60\\%$ of $p$.\n\n**The Full Solution:**\nStep 1: $m$ is $50\\%$ of $n \\Rightarrow m = 0.50n$.\nStep 2: \"$n$ is $20\\%$ greater than $p$\" $\\Rightarrow n = p + 0.20p = 1.20p$.\nStep 3: Substitute: $m = 0.50 \\cdot 1.20p = 0.60p = 60\\%$ of $p$.\n\nCheck with $p = 100$: $n = 120$, $m = 0.50 \\cdot 120 = 60$, and $\\frac{60}{100} = 60\\%$. $\\checkmark$\n\n**Common Mistakes:** Reporting $40$ by reading \"$20\\%$ greater than\" as \"$80\\%$ of.\" Reporting $70$ by adding the percents ($50 + 20$), or $30$ by subtracting them.\n\n**Test Day Takeaway:** \"$X\\%$ greater than\" means multiply by $\\left(1 + \\frac{X}{100}\\right)$ — keep the leading $1$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'chained-percent-relationship', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-231', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Suppose $x = 0.18 z$ and $x$ is $60\\%$ of $y$. What percent of $z$ is $y$?',
    choices: [{ id: 'A', text: '$10.8\\%$' }, { id: 'B', text: '$30\\%$' }, { id: 'C', text: '$42\\%$' }, { id: 'D', text: '$78\\%$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $x$ is $60\\%$ of $y$ means $x = 0.60y$, so $y = \\frac{x}{0.60}$. Substitute $x = 0.18z$: $y = \\frac{0.18z}{0.60} = 0.30z = 30\\%$ of $z$.\n\n**The Full Solution:**\nThis chain runs in two directions: $x$ in terms of $z$, and $x$ in terms of $y$. Solve for $y$ in terms of $z$.\nStep 1: From $x = 0.60y$, divide to get $y = \\frac{x}{0.60}$.\nStep 2: Substitute $x = 0.18z$: $y = \\frac{0.18}{0.60} \\cdot z = 0.30z$.\nStep 3: So $y$ is $30\\%$ of $z$.\n\nCheck with $z = 100$: $x = 18$, $y = \\frac{18}{0.60} = 30$, and $\\frac{30}{100} = 30\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($10.8\\%$): multiplies $0.18 \\cdot 0.60$ as if this were a forward chain. But $x$ is $60\\%$ of $y$, so $y > x$ — the answer must exceed $18\\%$.\n* Choice C ($42\\%$): subtracts the percents ($60 - 18$) — wrong operation.\n* Choice D ($78\\%$): adds the percents ($60 + 18$) — wrong operation.\n\n**Test Day Takeaway:** When the chain runs in opposite directions, divide instead of multiply. Sanity-check direction: \"$x$ is $60\\%$ of $y$\" forces $y$ to be larger than $x$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'chained-percent-relationship', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-232', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'hard', type: 'fill-in',
    question: 'In a state population, Region A makes up $24\\%$ of all residents. Region B is $40\\%$ of Region A, and Region C is $75\\%$ of Region B. Region C is what percent of the state population? (Report only the number, without the % sign.)',
    correctAnswer: '7.2',
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**The correct answer is $7.2$.**\n\n**The Fast Way (~15s):** Each \"is X% of the previous\" multiplies down the chain. Multiply all three as decimals: $0.24 \\times 0.40 \\times 0.75 = 0.072 = 7.2\\%$.\n\n**The Full Solution:**\nLet $S$ be the state population.\nStep 1: Region A $= 0.24S$.\nStep 2: Region B $= 0.40 \\cdot (0.24S) = 0.096S$.\nStep 3: Region C $= 0.75 \\cdot (0.096S) = 0.072S$, which is $7.2\\%$ of the state.\n\nCheck with $S = 10{,}000$: A $= 2400$, B $= 960$, C $= 720$, and $\\frac{720}{10{,}000} = 7.2\\%$. $\\checkmark$\n\n**Common Mistakes:** Reporting $9.6$ by stopping at Region B. Reporting $139$ by adding the three percents. Reporting $72$ by misplacing a decimal.\n\n**Test Day Takeaway:** A multi-step nested-percent chain multiplies all the decimals. Pick a round population like $10{,}000$ to sanity-check the count.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'chained-percent-relationship', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── STATISTICAL CLAIMS: OBSERVATIONAL VS EXPERIMENTAL (bank-ps-233..240) ─
  // First CB skill Q.G. ('statistical-claims') pool. Tests whether students
  // distinguish: random ASSIGNMENT supports causal claims; absence of
  // random assignment supports only ASSOCIATION. See audit §B2.
  { id: 'bank-ps-233', domain: 'problem-solving', skills: ['observational-vs-experimental', 'causation-vs-association'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A researcher surveys $500$ college students and finds that students who get $8$ or more hours of sleep per night have higher GPAs on average. Which conclusion is best supported by the study?',
    choices: [
      { id: 'A', text: 'Sleeping $8$ or more hours per night causes higher GPAs.' },
      { id: 'B', text: 'There is an association between sleep and GPA, but causation cannot be established.' },
      { id: 'C', text: 'Higher GPAs cause students to sleep more.' },
      { id: 'D', text: 'Sleep and GPA are independent.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice B is correct.**\n\n**The Key Distinction:** This is an observational study — the researcher surveyed students but did not assign them to sleep amounts. Without random assignment, a lurking variable (more organized students may both sleep more and study more) could drive the higher GPAs. So the data supports association, not causation.\n\n**Why the wrong answers are tempting:**\n* Choice A: leaps to causation from a correlational survey. Observational data shows association only.\n* Choice C: also a causal claim, just reversed. Observational data can't establish the direction of causation either.\n* Choice D: contradicts the data, which shows a clear positive association.\n\n**Test Day Takeaway:** Only randomized experiments support causal conclusions. Surveys and observational tracking show association only.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'observational-vs-experimental', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-234', domain: 'problem-solving', skills: ['observational-vs-experimental', 'causation-vs-association'], difficulty: 'easy', type: 'multiple-choice',
    question: 'In a study of $200$ plants, the plants were randomly assigned to one of two fertilizers — Fertilizer A or Fertilizer B. After eight weeks, plants in the Fertilizer A group were on average taller than plants in the Fertilizer B group. Which conclusion is best supported by the study?',
    choices: [
      { id: 'A', text: 'Fertilizer A causes greater plant growth than Fertilizer B in plants like those studied.' },
      { id: 'B', text: 'There is an association between fertilizer choice and plant height, but causation cannot be established.' },
      { id: 'C', text: 'Plants in Fertilizer A would have grown taller even without any fertilizer.' },
      { id: 'D', text: 'Fertilizer B prevents plants from growing.' },
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice A is correct.**\n\n**The Key Distinction:** This is an experiment — plants were randomly assigned to Fertilizer A or B. Random assignment balances lurking variables on average, so an outcome difference supports a causal claim for the studied population (plants like these).\n\n**Why the wrong answers are tempting:**\n* Choice B: applies the observational-only rule, but random assignment makes a causal claim defensible here.\n* Choice C: speculates beyond the data — there is no no-fertilizer control group.\n* Choice D: overinterprets the result, which shows A taller than B, not that B is harmful.\n\n**Test Day Takeaway:** Random assignment $\\Rightarrow$ a causal claim is defensible; random sampling without assignment $\\Rightarrow$ association only. Don't blur the two senses of \"random.\"",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'observational-vs-experimental', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-235', domain: 'problem-solving', skills: ['observational-vs-experimental', 'causation-vs-association'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A nutritionist tracks $1{,}000$ adults over $5$ years using self-reported dietary surveys. Adults who reported eating more fish had lower rates of heart disease at the end of the study. The nutritionist concludes that fish consumption causes lower heart disease rates. What is the strongest critique of this conclusion?',
    choices: [
      { id: 'A', text: 'The study should have included children.' },
      { id: 'B', text: 'This is an observational study without random assignment, so confounding variables (e.g., overall healthier lifestyles among fish eaters) could explain the association.' },
      { id: 'C', text: 'Five years is too short to study heart disease.' },
      { id: 'D', text: 'A sample of $1{,}000$ adults is too small to draw any conclusion.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice B is correct.**\n\n**The Key Distinction:** Self-reported tracking with no random assignment is observational. Confounding variables — fish eaters may also exercise more or eat more vegetables — can produce a spurious correlation, so concluding fish \"causes\" lower heart disease overreaches.\n\n**Why the wrong answers are tempting:**\n* Choice A: a scope critique (omitting children), but not the strongest one — the central flaw is the causal leap.\n* Choice C: speculative; $5$ years is reasonable for tracking heart-disease incidence.\n* Choice D: $1{,}000$ adults is a large sample for epidemiological work. Sample size isn't the limiting issue.\n\n**Test Day Takeaway:** The tell of a faulty observational-to-causal jump is the word \"causes\" (or \"leads to,\" \"results in\"). The safe conclusion is always \"there is an association between X and Y.\"",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'observational-vs-experimental', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-236', domain: 'problem-solving', skills: ['observational-vs-experimental', 'causation-vs-association'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Researchers randomly divided $400$ patients with chronic pain into two groups. One group received a new drug; the other received a placebo. Patients did not know which group they were in. After eight weeks, the drug group reported significantly less pain than the placebo group. Which conclusion is best supported?',
    choices: [
      { id: 'A', text: 'There is an association between the drug and pain reduction, but causation cannot be inferred.' },
      { id: 'B', text: 'The drug reduces pain in patients similar to those in this study.' },
      { id: 'C', text: 'The drug eliminates pain entirely for everyone.' },
      { id: 'D', text: 'The placebo caused increased pain.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice B is correct.**\n\n**The Key Distinction:** This is a randomized controlled trial — patients were randomly assigned to drug or placebo and were blinded. RCTs are the gold standard for causal inference, so the drug-reduces-pain claim is supported, with the scope limited to patients similar to those studied.\n\n**Why the wrong answers are tempting:**\n* Choice A: applies the observational-only rule, but this is an experiment, so causation is supported.\n* Choice C: overgeneralizes — \"significantly less\" is not \"eliminates,\" and \"everyone\" exceeds the studied group.\n* Choice D: reverses the framing. The drug group did better; the placebo group wasn't made worse.\n\n**Test Day Takeaway:** Signal words \"randomly assigned,\" \"control group,\" \"placebo,\" and \"blinded\" mark an experiment — causation is supported within the studied population.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'observational-vs-experimental', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-237', domain: 'problem-solving', skills: ['observational-vs-experimental', 'causation-vs-association'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A study compared two schools: School A and School B. Students at School A scored higher on a standardized math test than students at School B. The researchers did not randomly assign students to schools. Which conclusion is best supported?',
    choices: [
      { id: 'A', text: 'School A is more effective at teaching math than School B.' },
      { id: 'B', text: 'There is an association between school attended and math score, but causation cannot be established.' },
      { id: 'C', text: 'School A and School B are equally effective.' },
      { id: 'D', text: 'Math ability causes students to attend School A.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice B is correct.**\n\n**The Key Distinction:** No random assignment — students self-selected into School A or B. Those groups may differ in family income, motivation, or prior preparation, any of which could explain the score gap. So only association is defensible.\n\n**Why the wrong answers are tempting:**\n* Choice A: causal language (\"more effective at teaching\") is the trap; observational data shows the gap, not its cause.\n* Choice C: contradicts the observed gap.\n* Choice D: speculative reverse causation, unsupported by the data.\n\n**Test Day Takeaway:** School, hospital, and city comparisons are almost always observational. Without an intervention plus random assignment, only association can be claimed.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'observational-vs-experimental', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-238', domain: 'problem-solving', skills: ['observational-vs-experimental', 'causation-vs-association'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following study designs would allow a researcher to most defensibly conclude that a new teaching method CAUSES higher student test scores?',
    choices: [
      { id: 'A', text: 'Surveying $1{,}000$ teachers and comparing average test scores from those who already use the new method against those who do not.' },
      { id: 'B', text: 'Comparing average test scores in schools that adopted the new method against schools that did not adopt it.' },
      { id: 'C', text: 'Randomly assigning teachers to either the new teaching method or the standard method, then comparing student test scores after one semester.' },
      { id: 'D', text: 'Tracking test scores over five years in schools that adopted the method.' },
    ],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice C is correct.**\n\n**The Key Distinction:** Only random assignment supports a causal claim. Choice C is the only design that randomly assigns teachers to a method, which balances lurking variables (teacher experience, school context, student demographics) on average.\n\n**Why the wrong answers are tempting:**\n* Choice A: observational — teachers already using the method are self-selected (likely more motivated), so the comparison is confounded.\n* Choice B: observational at the school level — adopting schools likely differ from non-adopting schools in other ways.\n* Choice D: longitudinal but still observational, with no control group and no random assignment.\n\n**Test Day Takeaway:** \"Randomly assigned\" is the signal of an experiment. \"Compared,\" \"tracked,\" and \"surveyed\" without random assignment are observational.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'observational-vs-experimental', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-239', domain: 'problem-solving', skills: ['observational-vs-experimental', 'causation-vs-association'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A pharmaceutical study randomly assigned $600$ patients with high cholesterol to receive a low, medium, or high dose of a new drug, or a placebo. After three months, higher doses were associated with greater reductions in cholesterol, in a dose-response pattern. Which conclusion is best supported?',
    choices: [
      { id: 'A', text: 'Within the studied population, increasing the dose of this drug causes greater cholesterol reduction.' },
      { id: 'B', text: 'Causation cannot be inferred because the study lacked a randomized control group.' },
      { id: 'C', text: 'The drug reduces cholesterol equally at every dose.' },
      { id: 'D', text: 'The placebo had no effect on cholesterol.' },
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice A is correct.**\n\n**The Key Distinction:** Random assignment combined with a dose-response pattern is the strongest possible signal of a causal effect. Random assignment supports the causal claim, and the dose-response (more drug $\\Rightarrow$ more reduction) makes coincidental confounding implausible. The claim is correctly limited to the studied population.\n\n**Why the wrong answers are tempting:**\n* Choice B: factually wrong — the study does have a randomized placebo control and random assignment across doses.\n* Choice C: contradicts the dose-response finding (higher doses gave greater reductions).\n* Choice D: unsupported — the placebo group sets the baseline; nothing says it had zero effect.\n\n**Test Day Takeaway:** Random assignment plus a dose-response pattern puts a causal claim on its firmest footing.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'observational-vs-experimental', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-240', domain: 'problem-solving', skills: ['observational-vs-experimental', 'causation-vs-association'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A researcher analyzes census data and finds that cities with more public parks per capita have lower obesity rates. Based on this analysis alone, which of the following is the most defensible conclusion?',
    choices: [
      { id: 'A', text: 'Building more parks would reduce obesity in any city.' },
      { id: 'B', text: 'Parks cause people to be less obese.' },
      { id: 'C', text: 'Cities with more parks per capita tend to have lower obesity rates, though causation cannot be established without an experimental study.' },
      { id: 'D', text: 'There is no relationship between parks and obesity in the cities studied.' },
    ],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice C is correct.**\n\n**The Key Distinction:** Analyzing existing census data is observational. Cities with more parks per capita likely differ in wealth, walkability, climate, and demographics — any of which could affect obesity. The cleanest defensible claim is association, not causation.\n\n**Why the wrong answers are tempting:**\n* Choice A: a policy claim (\"building more parks would reduce\") leaps from association to an intervention effect — a double jump.\n* Choice B: a direct causal claim with no experimental support.\n* Choice D: contradicts the observed correlation.\n\n**Test Day Takeaway:** When a study uses only existing records or census data, bound the conclusion to association. \"Tends to\" and \"is associated with\" are safe; \"causes,\" \"would reduce,\" and \"leads to\" overreach.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'observational-vs-experimental', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── STATISTICAL CLAIMS: SCOPE OF INFERENCE (bank-ps-241..248) ────────────
  // Tests whether students identify the correct POPULATION the conclusion
  // applies to. Random sampling lets the result generalize to the sampled
  // population, not beyond it. Self-selection and non-response are the
  // most common scope-of-inference threats.
  { id: 'bank-ps-241', domain: 'problem-solving', skills: ['scope-of-inference', 'sampling-and-generalization'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A high school surveyed $300$ randomly selected ninth-grade students and found that $62\\%$ of those surveyed prefer online learning. To which population does this estimate most appropriately generalize?',
    choices: [
      { id: 'A', text: 'All students nationwide.' },
      { id: 'B', text: 'All high schoolers in the school district.' },
      { id: 'C', text: 'Ninth-grade students at the surveyed school.' },
      { id: 'D', text: 'All college freshmen.' },
    ],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice C is correct.**\n\n**The Key Rule:** A random sample lets you generalize ONLY to the population that was sampled from. The sample was randomly drawn from ninth-graders at this school, so the inference applies to that population.\n\n**Why the wrong answers are tempting:**\n* Choice A: extrapolates far beyond the sampled population. No data on students outside this school.\n* Choice B: includes other grades and other schools — not sampled.\n* Choice D: completely different population.\n\n**Test Day Takeaway:** Track exactly WHO was sampled. The conclusion applies to that group, not a broader one.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scope-of-inference', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-242', domain: 'problem-solving', skills: ['scope-of-inference', 'sampling-and-generalization'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A pollster randomly sampled $500$ registered voters in the city of Springfield and found that $54\\%$ of those sampled support a new public-park proposal. Which group does this estimate most defensibly apply to?',
    choices: [
      { id: 'A', text: 'Registered voters in Springfield.' },
      { id: 'B', text: 'All adults in Springfield.' },
      { id: 'C', text: 'All registered voters in the state.' },
      { id: 'D', text: 'All park users in Springfield.' },
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice A is correct.**\n\n**The Key Rule:** Inference generalizes only to the SAMPLED population. The sample is registered voters in Springfield, so the conclusion applies to that exact group.\n\n**Why the wrong answers are tempting:**\n* Choice B: 'all adults' is broader than 'registered voters' — adults who are NOT registered weren't sampled and may differ in opinions.\n* Choice C: extrapolates to the state level — different population.\n* Choice D: park users are not voters and weren't sampled.\n\n**Test Day Takeaway:** 'Registered voters' is a NARROWER group than 'adults' or 'residents.' Don't expand the population beyond what was sampled.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scope-of-inference', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-243', domain: 'problem-solving', skills: ['scope-of-inference', 'sampling-and-generalization'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A company asked its $50{,}000$ customers to fill out an online satisfaction survey. Of the $4{,}000$ customers who responded, $70\\%$ rated the service positively. Which is the most likely reason this result may not generalize to all $50{,}000$ customers?',
    choices: [
      { id: 'A', text: 'The sample size of $4{,}000$ is too small.' },
      { id: 'B', text: 'The $46{,}000$ customers who did not respond may differ systematically from those who did — non-response bias.' },
      { id: 'C', text: 'Satisfaction ratings are difficult to measure accurately.' },
      { id: 'D', text: 'A $70\\%$ satisfaction rate is too high to be believable.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice B is correct.**\n\n**The Key Rule:** When response is VOLUNTARY (and the response rate is well below $100\\%$), the responders are SELF-SELECTED — they may differ systematically from non-responders. This is non-response bias, the dominant threat to generalization in self-reported surveys.\n\n**Why the wrong answers are tempting:**\n* Choice A: $4{,}000$ is a large sample by any standard for inference about a $50{,}000$-customer population. The issue isn't sample size; it's WHO responded.\n* Choice C: a generic skepticism that doesn't address the specific scope-of-inference issue.\n* Choice D: subjective judgment, not a methodological flaw.\n\n**Test Day Takeaway:** Voluntary response (online surveys, opt-in panels, reviews) almost always over-represents people with strong opinions — usually very positive OR very negative.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scope-of-inference', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-244', domain: 'problem-solving', skills: ['scope-of-inference', 'sampling-and-generalization'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A medical research team conducted a study at a single urban hospital. They randomly sampled $400$ adult patients from this hospital and found that a new blood-pressure drug reduced systolic pressure in $80\\%$ of patients in the sample. To which population can the conclusion most defensibly apply?',
    choices: [
      { id: 'A', text: 'All adults with high blood pressure.' },
      { id: 'B', text: 'Adult patients of this urban hospital.' },
      { id: 'C', text: 'All urban-hospital patients nationwide.' },
      { id: 'D', text: 'All adults nationwide.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice B is correct.**\n\n**The Key Rule:** Random sample from ONE hospital's patients $\\Rightarrow$ inference about that hospital's patient population. Patients at one urban hospital may differ from patients at other hospitals (demographics, severity, prior treatments).\n\n**Why the wrong answers are tempting:**\n* Choice A: 'all adults with high blood pressure' is far broader than the sampled hospital's patients.\n* Choice C: 'urban hospitals nationwide' is broader than the one studied; other urban hospitals may serve different populations.\n* Choice D: 'all adults nationwide' is the broadest population — the largest overreach.\n\n**Test Day Takeaway:** When a study is conducted at one site, the inference is limited to that site's population. Multi-site studies generalize more broadly.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scope-of-inference', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-245', domain: 'problem-solving', skills: ['scope-of-inference', 'sampling-and-generalization'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A researcher emailed a satisfaction survey to a panel of $200$ PerformSAT users who had VOLUNTARILY signed up to receive product feedback requests. Of these, $75\\%$ rated the product highly. Which is the strongest reason this result may not generalize to all PerformSAT users?',
    choices: [
      { id: 'A', text: 'The sample of $200$ users is too small for any inference.' },
      { id: 'B', text: 'Users who voluntarily signed up for a feedback panel likely have different opinions of the product than typical users — self-selection bias.' },
      { id: 'C', text: 'A $75\\%$ approval rating is too high to be believable.' },
      { id: 'D', text: 'Email is an unreliable mode of contact.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice B is correct.**\n\n**The Key Rule:** Voluntary signup panels are SELF-SELECTED. Volunteers are systematically different from non-volunteers (more engaged, often more positive). The sample is not representative of all users.\n\n**Why the wrong answers are tempting:**\n* Choice A: $200$ is a viable sample size in many contexts. Sample size isn't the dominant issue here.\n* Choice C: subjective complaint about the value, not a methodological critique.\n* Choice D: implausible — email reliability isn't a scope issue.\n\n**Test Day Takeaway:** 'Volunteered,' 'signed up,' or 'opted in' should immediately raise the self-selection flag. Random sampling is the corrective.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scope-of-inference', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-246', domain: 'problem-solving', skills: ['scope-of-inference', 'sampling-and-generalization'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A researcher randomly sampled $600$ high school students from California and reported that $40\\%$ said they read for pleasure daily, with a margin of error of $\\pm 4\\%$ at $95\\%$ confidence. Which is the most appropriate conclusion?',
    choices: [
      { id: 'A', text: 'Approximately $40\\%$ of California high school students read for pleasure daily; the survey is $95\\%$ confident this is within $\\pm 4\\%$ of the true rate.' },
      { id: 'B', text: 'Exactly $40\\%$ of all California high school students read daily.' },
      { id: 'C', text: 'Approximately $40\\%$ of all U.S. high school students read for pleasure daily.' },
      { id: 'D', text: 'Schools should encourage students to read more.' },
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice A is correct.**\n\n**The Key Rule:** A random sample with a stated margin of error supports an inference WITH UNCERTAINTY: the true value lies in the interval around the sample estimate at the stated confidence level, for the population that was sampled.\n\n**Why the wrong answers are tempting:**\n* Choice B: treats the sample percentage as the EXACT population value — drops the margin of error.\n* Choice C: extrapolates beyond California to the entire U.S. — no data on other states.\n* Choice D: a policy recommendation, not a statistical conclusion.\n\n**Test Day Takeaway:** Two things to nail: (1) the SAMPLED population, and (2) the margin-of-error window. Never drop either.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scope-of-inference', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-247', domain: 'problem-solving', skills: ['scope-of-inference', 'sampling-and-generalization'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A polling firm randomly sampled $800$ adults across just two states, Iowa and Nebraska, and asked about a federal policy. $58\\%$ of those sampled supported the policy. Which conclusion is most appropriate?',
    choices: [
      { id: 'A', text: 'Approximately $58\\%$ of adults nationwide support the policy.' },
      { id: 'B', text: 'Approximately $58\\%$ of adults in Iowa and Nebraska support the policy, within the margin of error.' },
      { id: 'C', text: 'Approximately $58\\%$ of adults in any Midwestern state support the policy.' },
      { id: 'D', text: 'Iowans and Nebraskans support different aspects of the policy.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice B is correct.**\n\n**The Key Rule:** Random sample from Iowa AND Nebraska supports inference about adults in those two states combined. Other states may differ.\n\n**Why the wrong answers are tempting:**\n* Choice A: 'nationwide' is far broader than the sampled population. Two states are not representative of the nation.\n* Choice C: 'any Midwestern state' is also broader — Iowa and Nebraska are not a random sample of Midwestern states.\n* Choice D: the data is aggregated across both states; no sub-group conclusions are supported.\n\n**Test Day Takeaway:** Identify the EXACT sampled population. 'Sampled from X and Y' generalizes only to X and Y combined, not to states 'similar to X and Y.'",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scope-of-inference', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-248', domain: 'problem-solving', skills: ['scope-of-inference', 'sampling-and-generalization'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A psychology professor recruited $100$ students from her introductory class to participate in a memory study. Within this group, she RANDOMLY ASSIGNED students to two memory techniques. Technique A produced higher recall scores. Which is the most defensible conclusion?',
    choices: [
      { id: 'A', text: 'Technique A produces higher recall than the other technique, in students similar to those in this introductory class. Generalization to other populations is not supported.' },
      { id: 'B', text: 'Technique A produces higher recall than the other technique for everyone.' },
      { id: 'C', text: 'There is an association between technique and recall, but causation cannot be inferred.' },
      { id: 'D', text: 'Technique A would not work outside of laboratory settings.' },
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice A is correct.**\n\n**The Key Rule:** This study mixes two design choices: (1) random ASSIGNMENT supports causal inference within the studied group, and (2) the sample was a CONVENIENCE sample (students recruited from one introductory class), so generalization is bounded to that population. Choice A correctly threads both.\n\n**Why the wrong answers are tempting:**\n* Choice B: causal claim is fine for the studied population, but 'for everyone' overgeneralizes from a convenience sample.\n* Choice C: applies the observational rule to an experiment. Random assignment DOES support causation.\n* Choice D: speculative claim with no data support.\n\n**Test Day Takeaway:** Random ASSIGNMENT and random SAMPLING are DIFFERENT decisions. Random assignment $\\Rightarrow$ causal claim WITHIN sampled group. Random sampling $\\Rightarrow$ generalization to the broader population. A study can have one without the other — and the conclusion must reflect which is present.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scope-of-inference', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── PERCENT GREATER THAN / LESS THAN (bank-ps-249..256) ──────────────────
  // Verbal framing translation: "y is X% greater than z" → y = (1 + X/100)·z;
  // "y is X% less than z" → y = (1 − X/100)·z. Distinct from percent-decrease
  // (compute change from two given numbers). See audit §B3.
  { id: 'bank-ps-249', domain: 'problem-solving', skills: ['percent-of-value', 'percent-change'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $a$ is $30\\%$ greater than $40$, what is the value of $a$?',
    choices: [{ id: 'A', text: '$12$' }, { id: 'B', text: '$28$' }, { id: 'C', text: '$52$' }, { id: 'D', text: '$70$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Multiplier for '$30\\%$ greater than' is $1 + 0.30 = 1.30$. So $a = 1.30 \\cdot 40 = 52$.\n\n**The Full Solution:**\n'$30\\%$ greater than $40$' means $a$ is $40$ plus $30\\%$ of $40$:\n$\\quad a = 40 + 0.30 \\cdot 40 = 40 + 12 = 52$.\nEquivalently, $a$ is $130\\%$ of $40$: $a = 1.30 \\cdot 40 = 52$.\n\nVerification: $52 - 40 = 12$, and $12/40 = 0.30 = 30\\%$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): reports the INCREASE amount ($30\\%$ of $40 = 12$), not the new value.\n* Choice B ($28$): subtracts $30\\%$ of $40$ from $40$ — uses 'less than' direction instead of 'greater than'.\n* Choice D ($70$): treats $30\\%$ as the literal number $30$ and adds: $40 + 30 = 70$. The word 'percent' is required to convert.\n\n**Test Day Takeaway:** '$X\\%$ greater than $V$' $\\Rightarrow$ multiply $V$ by $(1 + X/100)$. Don't drop the leading $1$ (which represents the original value), and don't treat the percent as a raw number.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-greater-than-less-than', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-250', domain: 'problem-solving', skills: ['percent-of-value', 'percent-change'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The value of $y$ is $20\\%$ less than $80$. What is the value of $y$?',
    choices: [{ id: 'A', text: '$16$' }, { id: 'B', text: '$60$' }, { id: 'C', text: '$64$' }, { id: 'D', text: '$96$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Multiplier for '$20\\%$ less than' is $1 - 0.20 = 0.80$. So $y = 0.80 \\cdot 80 = 64$.\n\n**The Full Solution:**\n$y = 80 - 0.20 \\cdot 80 = 80 - 16 = 64$. Equivalently, $y$ is $80\\%$ of $80$: $0.80 \\cdot 80 = 64$.\n\nVerification: $80 - 64 = 16$, and $16/80 = 0.20 = 20\\%$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A ($16$): reports the DECREASE amount ($20\\%$ of $80 = 16$), not the resulting value.\n* Choice B ($60$): treats $20\\%$ as the literal number $20$ and subtracts: $80 - 20 = 60$.\n* Choice D ($96$): uses 'greater than' direction instead of 'less than': $80 \\cdot 1.20 = 96$.\n\n**Test Day Takeaway:** '$X\\%$ less than $V$' $\\Rightarrow$ multiply $V$ by $(1 - X/100)$. The result is $V$ minus a fraction of $V$ — always smaller than $V$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-greater-than-less-than', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-251', domain: 'problem-solving', skills: ['percent-of-value', 'percent-change'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $p$ is $40\\%$ greater than $q$, which of the following expresses $p$ in terms of $q$?',
    choices: [
      { id: 'A', text: '$p = 0.40q$' },
      { id: 'B', text: '$p = 1.40q$' },
      { id: 'C', text: '$p = q + 40$' },
      { id: 'D', text: '$p = 0.60q$' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** '$40\\%$ greater than $q$' $\\Rightarrow$ multiplier $= 1.40$, so $p = 1.40q$.\n\n**The Full Solution:**\n$p$ is $q$ plus $40\\%$ of $q$:\n$\\quad p = q + 0.40q = 1.40q$\nEquivalently, $p$ is $140\\%$ of $q$.\n\nVerification: if $q = 10$, then $p$ should be $40\\%$ greater $= 14 = 1.40 \\cdot 10$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: drops the leading $1$ — gives $40\\%$ OF $q$, which would be smaller than $q$, not greater.\n* Choice C: treats the percent as a literal number — wrong unit.\n* Choice D: uses 'less than' direction (multiplier $0.60$).\n\n**Test Day Takeaway:** Always include the leading $1$ for '$X\\%$ greater than': $(1 + X/100)V$. The $1$ keeps the original; the $X/100$ adds the increase.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-greater-than-less-than', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-252', domain: 'problem-solving', skills: ['percent-of-value', 'percent-change'], difficulty: 'medium', type: 'fill-in',
    question: 'If $m$ is $15\\%$ less than $n$, and $n = 200$, what is the value of $m$?',
    correctAnswer: '170',
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**The correct answer is $170$.**\n\n**The Fast Way (~5s):** Multiplier $= 1 - 0.15 = 0.85$. So $m = 0.85 \\cdot 200 = 170$.\n\n**The Full Solution:**\n$m = n - 0.15 n = 0.85 n = 0.85 \\cdot 200 = 170$.\n\nVerification: $200 - 170 = 30$, and $30/200 = 0.15 = 15\\%$ \\checkmark.\n\n**Common Mistakes:**\n* Reporting $30$ ($15\\%$ of $200$ — the decrease amount, not the resulting value).\n* Reporting $185$ ($200 - 15$ — treats percent as literal number).\n* Reporting $230$ ($200 \\cdot 1.15$ — wrong direction).\n\n**Test Day Takeaway:** '$X\\%$ less than $V$' $\\Rightarrow$ multiplier is $(1 - X/100)$. Always less than $1$, always shrinks the value.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-greater-than-less-than', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-253', domain: 'problem-solving', skills: ['percent-of-value', 'percent-change'], difficulty: 'medium', type: 'multiple-choice',
    question: '$x$ is $25\\%$ greater than $y$. Then $y$ is what percent LESS than $x$?',
    choices: [{ id: 'A', text: '$20\\%$' }, { id: 'B', text: '$25\\%$' }, { id: 'C', text: '$30\\%$' }, { id: 'D', text: '$75\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** \"$x$ is $25\\%$ greater than $y$\" means $x=1.25y$, so $y=\\frac{x}{1.25}=0.80x$. Sitting at $80\\%$ of $x$, $y$ is $100\\%-80\\%=20\\%$ less than $x$.\n\n**The Full Solution:**\nStep 1: Translate the statement: $x=1.25y$.\nStep 2: Solve for $y$ in terms of $x$: $y=\\frac{x}{1.25}=0.80x$, so $y$ is $80\\%$ of $x$.\nStep 3: \"$y$ is what percent less than $x$\" uses $x$ as the reference: $100\\%-80\\%=20\\%$.\nCheck with numbers: let $y=100$, then $x=125$; the gap is $25$, and $\\frac{25}{125}=0.20=20\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($25\\%$): assumes \"$25\\%$ greater\" and \"$25\\%$ less\" are mirror operations — they aren't, because the reference value switches from $y$ to $x$.\n* Choice C ($30\\%$): a guessed value with no clean derivation.\n* Choice D ($75\\%$): subtracts $25$ from $100$, confusing \"percent less\" with a leftover fraction.\n\n**Test Day Takeaway:** \"Percent greater than $y$\" and \"percent less than $x$\" are not symmetric — the denominators differ. Convert one quantity in terms of the other, then take the gap over the new reference.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-greater-than-less-than', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-254', domain: 'problem-solving', skills: ['percent-of-value', 'percent-change'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $z$ is $60\\%$ less than $w$, what fraction of $w$ is $z$?',
    choices: [
      { id: 'A', text: '$\\dfrac{2}{5}$' },
      { id: 'B', text: '$\\dfrac{3}{5}$' },
      { id: 'C', text: '$\\dfrac{8}{5}$' },
      { id: 'D', text: '$\\dfrac{5}{2}$' },
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** \"$60\\%$ less than $w$\" means $z=(1-0.60)w=0.40w=\\frac{2}{5}w$.\n\n**The Full Solution:**\nStep 1: A decrease of $60\\%$ leaves a multiplier of $1-0.60=0.40$.\nStep 2: As a fraction, $0.40=\\frac{40}{100}=\\frac{2}{5}$, so $z=\\frac{2}{5}w$.\nCheck: let $w=5$, then $z=2$; the gap is $3$, and $\\frac{3}{5}=0.60=60\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{3}{5}$): reports $0.60$ as a fraction — but that's the amount removed, not the part that survives.\n* Choice C ($\\frac{8}{5}$): uses the \"greater than\" direction, $1+0.60=1.60$.\n* Choice D ($\\frac{5}{2}$): the reciprocal — that expresses $w$ in terms of $z$, the reverse of what's asked.\n\n**Test Day Takeaway:** \"Fraction of $w$\" is the surviving multiplier itself. A $60\\%$ decrease leaves $40\\%=\\frac{2}{5}$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-greater-than-less-than', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-255', domain: 'problem-solving', skills: ['percent-of-value', 'percent-change'], difficulty: 'hard', type: 'multiple-choice',
    question: 'If $x$ is $150\\%$ greater than $40$, what is the value of $x$?',
    choices: [{ id: 'A', text: '$60$' }, { id: 'B', text: '$100$' }, { id: 'C', text: '$140$' }, { id: 'D', text: '$190$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"$150\\%$ greater than\" has multiplier $1+1.50=2.50$, so $x=2.50\\cdot 40=100$.\n\n**The Full Solution:**\nStep 1: \"$150\\%$ greater than $40$\" means $40$ plus $150\\%$ of $40$: $x=40+1.50\\cdot 40=40+60=100$.\nStep 2: Equivalently, $x$ is $250\\%$ of $40$: $x=2.50\\cdot 40=100$.\nCheck: the gap is $100-40=60$, and $\\frac{60}{40}=1.50=150\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($60$): reports the increase alone ($150\\%$ of $40$), not the resulting value.\n* Choice C ($140$): mis-computes the increase, landing short of the full $2.50$ multiplier.\n* Choice D ($190$): double-counts by adding the original, the increase, and an extra percent term.\n\n**Test Day Takeaway:** For a percent above $100\\%$, the result more than doubles. \"$150\\%$ greater\" means multiply by $2.50$, not $1.50$ — keep the leading $1$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-greater-than-less-than', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-256', domain: 'problem-solving', skills: ['percent-of-value', 'percent-change'], difficulty: 'hard', type: 'fill-in',
    question: "A company's monthly revenue grew from $\\$80{,}000$ to $\\$140{,}000$ over five years. The new revenue is what percent greater than the original revenue? (Report only the number, without the % sign.)",
    correctAnswer: '75',
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**The correct answer is $75$.**\n\n**The Fast Way (~10s):** Increase $=140-80=60$ (in thousands); percent greater $=\\frac{60}{80}=0.75=75\\%$.\n\n**The Full Solution:**\n\"Percent greater than\" puts the original value in the denominator:\n$$\\frac{\\text{new}-\\text{original}}{\\text{original}}\\cdot 100=\\frac{140{,}000-80{,}000}{80{,}000}\\cdot 100=\\frac{60{,}000}{80{,}000}\\cdot 100=75\\%.$$\nCheck: $80{,}000\\cdot 1.75=140{,}000$. $\\checkmark$\n\n**Common Mistakes:** Reporting $60$ (the raw increase, not a percent); reporting $42.86$ from $\\frac{60}{140}$ (wrong denominator — the new value); reporting $175$, which is the multiplier $\\frac{140}{80}$ as a percent, not the \"percent greater than.\"\n\n**Test Day Takeaway:** \"$X$ is what percent greater than $Y$\" $\\Rightarrow \\frac{X-Y}{Y}\\cdot 100$. The original goes in the denominator; the multiplier $\\frac{X}{Y}$ and the percent greater differ by exactly $100\\%$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-greater-than-less-than', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── COMPOUND PERCENT OF — TIER-1 PROMOTION (bank-ps-257..261) ────────────
  // Existing 3 items + 5 new = 8 (Tier-1 threshold). Count-anchored flavor:
  // 'N people, X% are A, of those Y% are also B → count of A AND B.' Distinct
  // from chained-percent-relationship (no count anchor; pure algebraic).
  { id: 'bank-ps-257', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A school has $480$ students. $25\\%$ are ninth-graders. Of those ninth-graders, $40\\%$ play a sport. How many ninth-graders play a sport?',
    choices: [{ id: 'A', text: '$48$' }, { id: 'B', text: '$72$' }, { id: 'C', text: '$120$' }, { id: 'D', text: '$192$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Compound Percent Of**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $0.25\\cdot 480\\cdot 0.40=120\\cdot 0.40=48$.\n\n**The Full Solution:**\nStep 1: Ninth-graders $=0.25\\cdot 480=120$.\nStep 2: Of those, sport players $=0.40\\cdot 120=48$.\nCheck: the net rate is $0.25\\cdot 0.40=0.10$, and $0.10\\cdot 480=48$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($72$): splits the percents the wrong way ($0.15\\cdot 480$).\n* Choice C ($120$): stops at the ninth-grade count, forgetting the sport filter.\n* Choice D ($192$): applies the $40\\%$ to the whole school ($0.40\\cdot 480$), ignoring the ninth-grade filter.\n\n**Test Day Takeaway:** \"Of those\" means the second percent acts on the filtered subgroup, not the original total. Multiply the two rates together against the total — fewer arithmetic slips.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'compound-percent-of', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-258', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A factory inspects $800$ items. $5\\%$ fail inspection. Of the failed items, $30\\%$ can be repaired. How many of the inspected items can be repaired?',
    choices: [{ id: 'A', text: '$12$' }, { id: 'B', text: '$24$' }, { id: 'C', text: '$40$' }, { id: 'D', text: '$240$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Compound Percent Of**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $0.05\\cdot 800\\cdot 0.30=40\\cdot 0.30=12$.\n\n**The Full Solution:**\nStep 1: Failed items $=0.05\\cdot 800=40$.\nStep 2: Of those, repairable $=0.30\\cdot 40=12$.\nCheck: the net rate is $0.05\\cdot 0.30=0.015$, and $0.015\\cdot 800=12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($24$): mis-arithmetic, doubling the correct count.\n* Choice C ($40$): stops at the failure count, forgetting the repair rate.\n* Choice D ($240$): applies $30\\%$ to all $800$ items, ignoring the failure filter.\n\n**Test Day Takeaway:** Track which subset each percent applies to. Compound percents multiply, and the second rate operates on the surviving subset — never the original count.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'compound-percent-of', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-259', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A coffee shop has $1{,}200$ customers per day on average. $45\\%$ of them order a drink, and of those drink orders, $60\\%$ also order food. How many customers per day order BOTH a drink and food?',
    choices: [{ id: 'A', text: '$126$' }, { id: 'B', text: '$324$' }, { id: 'C', text: '$540$' }, { id: 'D', text: '$720$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Compound Percent Of**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $0.45\\cdot 1{,}200\\cdot 0.60=540\\cdot 0.60=324$.\n\n**The Full Solution:**\nStep 1: Drink orders $=0.45\\cdot 1{,}200=540$.\nStep 2: Of those, food orders $=0.60\\cdot 540=324$.\nCheck: the net rate is $0.45\\cdot 0.60=0.27$, and $0.27\\cdot 1{,}200=324$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($126$): applies the percents in the wrong order or subtracts them.\n* Choice C ($540$): stops at the drink-order count.\n* Choice D ($720$): applies $60\\%$ to all $1{,}200$ customers ($0.60\\cdot 1{,}200$), ignoring the drink filter.\n\n**Test Day Takeaway:** \"Both $X$ and $Y$\" where $Y$ is conditional on $X$ means multiply the rates — never add. Adding would describe \"$X$ or $Y$.\"",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'compound-percent-of', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-260', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'medium', type: 'fill-in',
    question: 'An online survey received $5{,}000$ responses. $30\\%$ of respondents were first-time users. Of those first-time users, $20\\%$ rated the product $5$ stars. How many first-time users rated the product $5$ stars?',
    correctAnswer: '300',
    explanation: "**SAT Pattern: Compound Percent Of**\n\n**The correct answer is $300$.**\n\n**The Fast Way (~10s):** $0.30\\cdot 5{,}000\\cdot 0.20=1{,}500\\cdot 0.20=300$.\n\n**The Full Solution:**\nStep 1: First-time users $=0.30\\cdot 5{,}000=1{,}500$.\nStep 2: Of those, $5$-star ratings $=0.20\\cdot 1{,}500=300$.\nCheck: the net rate is $0.30\\cdot 0.20=0.06$, and $0.06\\cdot 5{,}000=300$. $\\checkmark$\n\n**Common Mistakes:** Reporting $1{,}500$ (stopping at first-time users); reporting $1{,}000$ from $0.20\\cdot 5{,}000$ (applying the $5$-star rate to all responses); reporting $30$ by dropping a zero in the multiplication.\n\n**Test Day Takeaway:** When two percent filters chain, keep track of which population each applies to. The second rate's denominator is the result of the first filter, not the original count.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'compound-percent-of', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-261', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A box contains $240$ candies. Two-thirds of the candies are chocolate, and $25\\%$ of the chocolate candies contain nuts. How many candies in the box are chocolate AND contain nuts?',
    choices: [{ id: 'A', text: '$20$' }, { id: 'B', text: '$40$' }, { id: 'C', text: '$60$' }, { id: 'D', text: '$160$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Compound Percent Of**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\frac{2}{3}\\cdot 240\\cdot 0.25=160\\cdot 0.25=40$.\n\n**The Full Solution:**\nStep 1: Chocolate candies $=\\frac{2}{3}\\cdot 240=160$.\nStep 2: Of those, with nuts $=0.25\\cdot 160=40$.\nCheck: the net rate is $\\frac{2}{3}\\cdot 0.25=\\frac{1}{6}$, and $\\frac{240}{6}=40$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): divides the chocolate count by $8$ instead of multiplying by $0.25$.\n* Choice C ($60$): applies $25\\%$ to all $240$ candies ($0.25\\cdot 240$), ignoring the chocolate filter.\n* Choice D ($160$): stops at the chocolate count.\n\n**Test Day Takeaway:** When one \"percent\" arrives as a fraction like $\\frac{2}{3}$, convert consistently — pick fractions or decimals and stay with that choice through both steps.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'compound-percent-of', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── PROBABILITY WITHOUT REPLACEMENT (bank-ps-262..269) ───────────────────
  // Sequential probabilities where the population shrinks. Distinct from
  // with-replacement because the second draw's denominator is N-1, not N.
  { id: 'bank-ps-262', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A bag contains $5$ red marbles and $3$ blue marbles. Two marbles are drawn at random without replacement. What is the probability that both marbles are red?',
    choices: [{ id: 'A', text: '$\\dfrac{5}{14}$' }, { id: 'B', text: '$\\dfrac{25}{64}$' }, { id: 'C', text: '$\\dfrac{5}{8}$' }, { id: 'D', text: '$\\dfrac{1}{2}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Probability Without Replacement**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $P(\\text{both red})=\\frac{5}{8}\\cdot\\frac{4}{7}=\\frac{20}{56}=\\frac{5}{14}$.\n\n**The Full Solution:**\nStep 1: First draw — $5$ red of $8$ total, so $P(R_1)=\\frac{5}{8}$.\nStep 2: Second draw — one red is gone, leaving $4$ red of $7$ total, so $P(R_2\\mid R_1)=\\frac{4}{7}$.\nStep 3: Multiply the dependent events: $\\frac{5}{8}\\cdot\\frac{4}{7}=\\frac{20}{56}=\\frac{5}{14}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{25}{64}$): treats the draws as with replacement, $\\left(\\frac{5}{8}\\right)^2$.\n* Choice C ($\\frac{5}{8}$): just the first-draw probability.\n* Choice D ($\\frac{1}{2}$): adds rather than multiplies, or another arithmetic slip.\n\n**Test Day Takeaway:** Without replacement, both the total and the favorable count drop by $1$ on the second draw — then multiply the two probabilities.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'probability-without-replacement', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-263', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A drawer holds $6$ pencils and $4$ pens. Two items are pulled out at random without replacement. What is the probability that the first item is a pencil and the second is a pen?',
    choices: [{ id: 'A', text: '$\\dfrac{4}{15}$' }, { id: 'B', text: '$\\dfrac{6}{25}$' }, { id: 'C', text: '$\\dfrac{2}{5}$' }, { id: 'D', text: '$\\dfrac{12}{45}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Probability Without Replacement**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $P(\\text{pencil then pen})=\\frac{6}{10}\\cdot\\frac{4}{9}=\\frac{24}{90}=\\frac{4}{15}$.\n\n**The Full Solution:**\nStep 1: First draw — $6$ pencils of $10$ items, so $P(\\text{pencil})=\\frac{6}{10}$.\nStep 2: Second draw — a pencil is gone, leaving $4$ pens of $9$ items, so $P(\\text{pen})=\\frac{4}{9}$.\nStep 3: Multiply: $\\frac{6}{10}\\cdot\\frac{4}{9}=\\frac{24}{90}=\\frac{4}{15}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{6}{25}$): treats the draws as with replacement, $\\frac{6}{10}\\cdot\\frac{4}{10}$.\n* Choice C ($\\frac{2}{5}$): only $P(\\text{pencil})$, ignoring the second draw.\n* Choice D ($\\frac{12}{45}$): an unsimplified arithmetic miss with the wrong denominator.\n\n**Test Day Takeaway:** Order matters for \"first this, then that\" — multiply the conditional probabilities in sequence, shrinking the pool after each draw.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'probability-without-replacement', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-264', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A deck contains $4$ aces among $52$ cards. Two cards are drawn at random without replacement. What is the probability that both cards are aces?',
    choices: [{ id: 'A', text: '$\\dfrac{1}{169}$' }, { id: 'B', text: '$\\dfrac{1}{221}$' }, { id: 'C', text: '$\\dfrac{1}{13}$' }, { id: 'D', text: '$\\dfrac{4}{52}$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Probability Without Replacement**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $\\frac{4}{52}\\cdot\\frac{3}{51}=\\frac{12}{2652}=\\frac{1}{221}$.\n\n**The Full Solution:**\nStep 1: First ace — $4$ aces of $52$, so $P(A_1)=\\frac{4}{52}=\\frac{1}{13}$.\nStep 2: Second ace — $3$ aces left of $51$ cards, so $P(A_2\\mid A_1)=\\frac{3}{51}=\\frac{1}{17}$.\nStep 3: Multiply: $\\frac{1}{13}\\cdot\\frac{1}{17}=\\frac{1}{221}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{169}$): treats the draws as with replacement, $\\left(\\frac{1}{13}\\right)^2$.\n* Choice C ($\\frac{1}{13}$): just $P(\\text{first ace})$.\n* Choice D ($\\frac{4}{52}$): the same first-draw marginal, unsimplified.\n\n**Test Day Takeaway:** Two aces without replacement is $\\frac{4\\cdot 3}{52\\cdot 51}$, not $\\left(\\frac{4}{52}\\right)^2$ — drop both the favorable count and the total by $1$ on the second draw.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'probability-without-replacement', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-265', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'medium', type: 'fill-in',
    question: 'A box contains $8$ marbles, of which $3$ are red. Two marbles are drawn at random without replacement. What is the probability that NEITHER of them is red? Express your answer as a fraction in lowest terms.',
    correctAnswer: '5/14',
    explanation: "**SAT Pattern: Probability Without Replacement**\n\n**The correct answer is $\\dfrac{5}{14}$.**\n\n**The Fast Way (~10s):** Track the non-red marbles. There are $5$ of them out of $8$, then $4$ out of $7$: $\\dfrac{5}{8} \\cdot \\dfrac{4}{7} = \\dfrac{20}{56} = \\dfrac{5}{14}$.\n\n**The Full Solution:**\nStep 1: \"Neither is red\" means both draws come from the $5$ non-red marbles.\nStep 2: First draw not red: $\\dfrac{5}{8}$.\nStep 3: After removing one non-red marble, $4$ non-red remain out of $7$ total, so the second draw not red is $\\dfrac{4}{7}$.\nStep 4: Multiply: $\\dfrac{5}{8} \\cdot \\dfrac{4}{7} = \\dfrac{20}{56} = \\dfrac{5}{14}$.\n\n**Common Mistakes:** Reporting $\\dfrac{15}{56}$ comes from using $\\dfrac{5}{8} \\cdot \\dfrac{3}{7}$ (mixing in the red count). Reporting $\\dfrac{5}{16}$ comes from squaring $\\dfrac{5}{8}$ as if the marble were replaced.\n\n**Test Day Takeaway:** For \"neither A,\" count the NOT-A items and apply without-replacement to those: numerator and denominator each drop by $1$ on the second draw. Always reduce the final fraction.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'probability-without-replacement', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-266', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A class has $12$ students, $5$ of whom are seniors. The teacher randomly selects $2$ different students to be hall monitors. What is the probability that both monitors are seniors?',
    choices: [{ id: 'A', text: '$\\dfrac{5}{33}$' }, { id: 'B', text: '$\\dfrac{25}{144}$' }, { id: 'C', text: '$\\dfrac{5}{12}$' }, { id: 'D', text: '$\\dfrac{1}{6}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Probability Without Replacement**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Two draws, both seniors: $\\dfrac{5}{12} \\cdot \\dfrac{4}{11} = \\dfrac{20}{132} = \\dfrac{5}{33}$, which is choice A.\n\n**The Full Solution:**\nStep 1: First monitor is a senior: $\\dfrac{5}{12}$.\nStep 2: One senior is now used up, so $4$ seniors remain out of $11$ students: $\\dfrac{4}{11}$.\nStep 3: Multiply: $\\dfrac{5}{12} \\cdot \\dfrac{4}{11} = \\dfrac{20}{132}$. Since $\\gcd(20,132)=4$, this reduces to $\\dfrac{5}{33}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\dfrac{25}{144}$): squares $\\dfrac{5}{12}$ — that is the WITH-replacement answer, but the monitors must be different students.\n* Choice C ($\\dfrac{5}{12}$): the probability of just one senior on a single draw, not two.\n* Choice D ($\\dfrac{1}{6}$): a rough estimate, not the exact product.\n\n**Test Day Takeaway:** Choosing distinct people for roles is without replacement: drop both the favorable count and the total by $1$ on each successive pick, then multiply.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'probability-without-replacement', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-267', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A jar contains $4$ green and $6$ yellow marbles. Three marbles are drawn at random without replacement. What is the probability that ALL THREE are yellow?',
    choices: [{ id: 'A', text: '$\\dfrac{1}{6}$' }, { id: 'B', text: '$\\dfrac{1}{3}$' }, { id: 'C', text: '$\\dfrac{27}{125}$' }, { id: 'D', text: '$\\dfrac{1}{120}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Probability Without Replacement**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Three yellow in a row: $\\dfrac{6}{10} \\cdot \\dfrac{5}{9} \\cdot \\dfrac{4}{8} = \\dfrac{120}{720} = \\dfrac{1}{6}$, which is choice A.\n\n**The Full Solution:**\nStep 1: First draw yellow: $\\dfrac{6}{10}$ (6 yellow of 10 total).\nStep 2: Second draw yellow: $\\dfrac{5}{9}$ (one yellow gone, $5$ of $9$ left).\nStep 3: Third draw yellow: $\\dfrac{4}{8}$ (now $4$ of $8$ left).\nStep 4: Multiply: $\\dfrac{6}{10} \\cdot \\dfrac{5}{9} \\cdot \\dfrac{4}{8} = \\dfrac{120}{720} = \\dfrac{1}{6}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\dfrac{1}{3}$): only multiplies two draws instead of three.\n* Choice C ($\\dfrac{27}{125}$): treats the draws as WITH replacement, using $\\left(\\dfrac{6}{10}\\right)^3$ form with bad arithmetic.\n* Choice D ($\\dfrac{1}{120}$): an unrelated division error.\n\n**Test Day Takeaway:** Three sequential draws without replacement multiply three fractions, each with numerator and denominator one smaller than the last: $\\dfrac{N}{T} \\cdot \\dfrac{N-1}{T-1} \\cdot \\dfrac{N-2}{T-2}$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'probability-without-replacement', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-268', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A bag contains $4$ red, $3$ green, and $5$ blue marbles ($12$ total). Three marbles are drawn at random one at a time without replacement. What is the probability that the three marbles drawn are one red, one green, and one blue (in any order)?',
    choices: [{ id: 'A', text: '$\\dfrac{3}{11}$' }, { id: 'B', text: '$\\dfrac{1}{22}$' }, { id: 'C', text: '$\\dfrac{60}{1320}$' }, { id: 'D', text: '$\\dfrac{1}{6}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Probability Without Replacement**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Count favorable ordered sequences: $3! \\cdot (4 \\cdot 3 \\cdot 5) = 6 \\cdot 60 = 360$. Total ordered draws: $12 \\cdot 11 \\cdot 10 = 1320$. So $P = \\dfrac{360}{1320} = \\dfrac{3}{11}$, choice A.\n\n**The Full Solution:**\nStep 1: There is one red, one green, one blue, drawn in some order. The three colors can be arranged in $3! = 6$ orders.\nStep 2: For each order, the count of ways is $4 \\cdot 3 \\cdot 5 = 60$ (one of each color). Favorable total: $6 \\cdot 60 = 360$.\nStep 3: Total ordered draws of $3$ from $12$: $12 \\cdot 11 \\cdot 10 = 1320$.\nStep 4: $P = \\dfrac{360}{1320}$. Since $\\gcd(360,1320)=120$, this reduces to $\\dfrac{3}{11}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\dfrac{1}{22}$): the result of dividing by a wrong total.\n* Choice C ($\\dfrac{60}{1320}$): forgets to multiply by the $3!$ orderings — this is the probability of one specific order like R, then G, then B.\n* Choice D ($\\dfrac{1}{6}$): unrelated arithmetic.\n\n**Test Day Takeaway:** \"In any order\" means multiply the one-of-each count by the number of orderings, $3! = 6$ for three distinct slots.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'probability-without-replacement', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-269', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'hard', type: 'fill-in',
    question: 'A box has $10$ cards, of which $4$ are winners. Three cards are drawn at random without replacement. What is the probability that EXACTLY one is a winner? Express your answer as a decimal rounded to the nearest hundredth.',
    correctAnswer: '0.5',
    explanation: "**SAT Pattern: Probability Without Replacement**\n\n**The correct answer is $0.5$.**\n\n**The Fast Way (~25s):** Use combinations: $P = \\dfrac{\\binom{4}{1}\\binom{6}{2}}{\\binom{10}{3}} = \\dfrac{4 \\cdot 15}{120} = \\dfrac{60}{120} = 0.5$.\n\n**The Full Solution:**\nStep 1: Choose $1$ winner from $4$: $\\binom{4}{1} = 4$.\nStep 2: Choose $2$ non-winners from $6$: $\\binom{6}{2} = 15$.\nStep 3: Total ways to choose any $3$ from $10$: $\\binom{10}{3} = 120$.\nStep 4: $P = \\dfrac{4 \\cdot 15}{120} = \\dfrac{60}{120} = 0.5$.\n\nCheck by ordered draws: one specific arrangement W-L-L is $\\dfrac{4}{10} \\cdot \\dfrac{6}{9} \\cdot \\dfrac{5}{8} = \\dfrac{1}{6}$, and the winner can sit in $\\binom{3}{1} = 3$ positions, so $3 \\cdot \\dfrac{1}{6} = 0.5$. $\\checkmark$\n\n**Common Mistakes:** Reporting $0.4$ uses the single-draw marginal $\\dfrac{4}{10}$. Reporting $0.06$ forgets to multiply by the $3$ positions for the winner. Reporting $0.20$ is an arithmetic slip.\n\n**Test Day Takeaway:** \"Exactly one winner in $n$ draws\" is a combinations count: $\\dfrac{\\binom{W}{1}\\binom{L}{\\,n-1}}{\\binom{T}{n}}$, where $W$, $L$, $T$ are winners, losers, and total.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'probability-without-replacement', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── Q.G. STATISTICAL CLAIMS — HEALTHY PUSH (bank-ps-270..273) ────────────
  // 2 obs-vs-exp + 2 scope-of-inference items to lift Q.G. from 16 → 20
  // (healthy CB-skill threshold).
  { id: 'bank-ps-270', domain: 'problem-solving', skills: ['observational-vs-experimental', 'causation-vs-association'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A study tracks the daily exercise habits of $300$ adults over $6$ months and finds that adults who report exercising daily also report fewer headaches. Which conclusion is best supported by the study?',
    choices: [
      { id: 'A', text: 'Daily exercise causes a reduction in headaches.' },
      { id: 'B', text: 'There is an association between daily exercise and fewer headaches, but causation cannot be established.' },
      { id: 'C', text: 'Frequent headaches cause adults to exercise less.' },
      { id: 'D', text: 'Exercise and headache frequency are unrelated.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice B is correct.**\n\n**The Key Distinction:** This is an observational study — adults are tracked, not randomly assigned to exercise or no-exercise groups. With no random assignment, confounding variables (overall health, age, diet, sleep) could drive both the exercise and the lower headache rate. So the data supports an association but cannot establish that exercise causes the reduction. That is exactly what choice B says.\n\n**Why the wrong answers are tempting:**\n* Choice A: states a causal claim, which observational data cannot support.\n* Choice C: reverse-direction causation — also a causal claim, equally unsupported.\n* Choice D: contradicts the observed association the study reported.\n\n**Test Day Takeaway:** \"Tracks habits\" and \"finds an association\" signal an OBSERVATIONAL study. Causation requires random assignment to treatment groups.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'observational-vs-experimental', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-271', domain: 'problem-solving', skills: ['observational-vs-experimental', 'causation-vs-association'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A pharmaceutical company plans a study to determine whether a new drug reduces cholesterol in adults with elevated cholesterol. Which study design would provide the STRONGEST evidence of a causal effect?',
    choices: [
      { id: 'A', text: 'Survey $500$ adults with elevated cholesterol about whether they take the drug.' },
      { id: 'B', text: 'Track $1{,}000$ adults who began taking the drug five years ago and compare their current cholesterol to a database average.' },
      { id: 'C', text: 'Randomly assign $400$ adults to receive either the drug or a placebo for $12$ weeks, double-blind, and compare cholesterol changes.' },
      { id: 'D', text: 'Compare drug users and non-users in a hospital database for the past decade.' },
    ],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice C is correct.**\n\n**The Key Distinction:** The strongest causal evidence comes from a randomized, controlled, double-blind experiment. Choice C randomly assigns adults to drug or placebo: random assignment balances confounders across groups on average, the placebo isolates the drug's true effect, and double-blinding removes placebo and observer bias. Only choice C has all of these.\n\n**Why the wrong answers are tempting:**\n* Choice A: a survey is observational and dominated by self-selection bias.\n* Choice B: tracking existing users with a database average is observational and has no real control group.\n* Choice D: a database comparison of users vs non-users is observational, with confounders such as baseline cholesterol and lifestyle differences.\n\n**Test Day Takeaway:** RCT signal words — \"randomly assigned,\" \"placebo,\" \"control group,\" \"double-blind\" — together mark the gold standard for causal inference.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'observational-vs-experimental', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-272', domain: 'problem-solving', skills: ['scope-of-inference', 'sampling-and-generalization'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A research team conducted a phone poll among $1{,}500$ registered voters in one city who use landline telephones. They reported that $52\\%$ of those polled support a new city ordinance. To which population does this estimate most defensibly apply?',
    choices: [
      { id: 'A', text: 'All adults in the city.' },
      { id: 'B', text: 'Registered voters in the city who use landlines.' },
      { id: 'C', text: 'All registered voters in the state.' },
      { id: 'D', text: 'Future voters in the city.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice B is correct.**\n\n**The Key Rule:** An estimate generalizes only to the population that was actually sampled. Here the sample is registered voters in this one city who use landline telephones, so that exact group is the defensible scope — which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: too broad — adults who are not registered, or who do not use landlines, were never in the sampling frame.\n* Choice C: too broad geographically — only one city was polled, not the whole state.\n* Choice D: future voters are not the polled group, and even current voters' opinions can shift over time.\n\n**Test Day Takeaway:** \"Landline-only\" sampling systematically excludes cell-phone-only households. Generalize only to the precise group that could have been selected.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scope-of-inference', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-273', domain: 'problem-solving', skills: ['scope-of-inference', 'sampling-and-generalization'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A research team randomly selected $400$ middle-aged adults from a large suburb and tracked their cardiovascular health and weekly exercise habits for $3$ years. They found that weekly exercise was associated with better cardiovascular outcomes. Which conclusion is the strongest scope-of-inference statement?',
    choices: [
      { id: 'A', text: 'All adults nationwide who exercise weekly have better cardiovascular health.' },
      { id: 'B', text: 'Middle-aged adults in the studied suburb who exercise weekly tend to have better cardiovascular health — and only an association, not causation.' },
      { id: 'C', text: 'Children and teenagers in this suburb benefit from weekly exercise.' },
      { id: 'D', text: 'Weekly exercise causes better cardiovascular health for everyone in this suburb.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice B is correct.**\n\n**The Key Rule:** Two separate questions decide the conclusion. Random SAMPLING from middle-aged adults in one suburb sets the population scope to that group. The absence of random ASSIGNMENT to exercise vs no-exercise means the result is an association, not a proven cause. Choice B threads both: it limits the claim to middle-aged adults in the studied suburb and calls it an association only.\n\n**Why the wrong answers are tempting:**\n* Choice A: extrapolates beyond the sampled suburb AND asserts causation.\n* Choice C: switches to a completely different population (children and teens) never sampled.\n* Choice D: makes a causal claim without random assignment to support it.\n\n**Test Day Takeaway:** Random sampling sets who the result applies to; random assignment licenses a causal claim. They are independent, and the conclusion must match exactly what the study has.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scope-of-inference', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── Q.F. CONFIDENCE INTERVAL INTERPRETATION (bank-ps-274..281) ───────────
  // Distinct from margin-of-error: focuses on CORRECTLY INTERPRETING the CI as
  // a probabilistic statement about the population, with the right scope.
  { id: 'bank-ps-274', domain: 'problem-solving', skills: ['margin-of-error'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A poll of $400$ city residents found that $58\\%$ support a proposed ordinance, with a margin of error of $\\pm 4\\%$ at a $95\\%$ confidence level. Which of the following best interprets the result?',
    choices: [
      { id: 'A', text: 'Exactly $58\\%$ of all city residents support the ordinance.' },
      { id: 'B', text: 'There is a $95\\%$ probability that any individual city resident supports the ordinance.' },
      { id: 'C', text: 'We are $95\\%$ confident that the proportion of city residents who support the ordinance is between $54\\%$ and $62\\%$.' },
      { id: 'D', text: 'Between $54$ and $62$ residents support the ordinance.' },
    ],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Build the interval: $58\\% \\pm 4\\% = [54\\%, 62\\%]$. The correct reading is that we are $95\\%$ confident the TRUE population proportion lies in this range — choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A: treats the sample value $58\\%$ as the exact population value, ignoring the margin of error.\n* Choice B: confuses a confidence interval with the probability that a single individual supports the ordinance.\n* Choice D: reports counts of residents instead of a proportion.\n\n**Test Day Takeaway:** A confidence interval is a statement about the POPULATION proportion; the $95\\%$ describes the long-run reliability of the method, not the chance about any one person.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'confidence-interval-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-275', domain: 'problem-solving', skills: ['margin-of-error'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A survey of $500$ randomly selected high school students estimates that $42\\%$ play a varsity sport, with a margin of error of $\\pm 3\\%$ at a $95\\%$ confidence level. Which of the following is the $95\\%$ confidence interval for the proportion of all high school students who play a varsity sport in the population sampled?',
    choices: [{ id: 'A', text: '$[39\\%, 42\\%]$' }, { id: 'B', text: '$[39\\%, 45\\%]$' }, { id: 'C', text: '$[42\\%, 45\\%]$' }, { id: 'D', text: '$[40\\%, 44\\%]$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Interval $=$ estimate $\\pm$ margin of error $= 42\\% \\pm 3\\% = [39\\%, 45\\%]$, which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($[39\\%, 42\\%]$): only subtracts the margin of error, leaving out the upper side.\n* Choice C ($[42\\%, 45\\%]$): only adds the margin of error, leaving out the lower side.\n* Choice D ($[40\\%, 44\\%]$): uses $\\pm 2\\%$ instead of the given $\\pm 3\\%$.\n\n**Test Day Takeaway:** A confidence interval is the point estimate $\\pm$ margin of error — symmetric on both sides, so subtract AND add.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'confidence-interval-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-276', domain: 'problem-solving', skills: ['margin-of-error'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A polling firm reports that $52\\%$ of voters surveyed favor a proposal, with a margin of error of $\\pm 3\\%$ at a $95\\%$ confidence level. Based on the data, which conclusion is most defensible?',
    choices: [
      { id: 'A', text: 'A majority of voters in the sampled population favor the proposal.' },
      { id: 'B', text: 'The data does NOT strongly demonstrate majority support, because the confidence interval includes proportions below $50\\%$.' },
      { id: 'C', text: 'Exactly half of all voters favor the proposal.' },
      { id: 'D', text: 'There is a $3\\%$ chance the survey is wrong.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The interval is $52\\% \\pm 3\\% = [49\\%, 55\\%]$. Because the lower bound $49\\%$ sits below $50\\%$, the data is consistent with the true proportion being a non-majority, so majority support cannot be claimed confidently — choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: treats the sample value $52\\%$ as definitive and ignores the margin of error, even though the interval dips under $50\\%$.\n* Choice C: contradicts the data, which centers at $52\\%$.\n* Choice D: misreads the $95\\%$ confidence level as a $3\\%$ per-survey error rate.\n\n**Test Day Takeaway:** When a confidence interval straddles a meaningful threshold such as $50\\%$, the data cannot pin down which side of the threshold the true value is on.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'confidence-interval-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-277', domain: 'problem-solving', skills: ['margin-of-error'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A national survey of randomly sampled adults estimates the average daily screen time at $4.2$ hours, with a $95\\%$ confidence interval of $[3.9, 4.5]$ hours. Which statement is best supported?',
    choices: [
      { id: 'A', text: 'Every adult spends between $3.9$ and $4.5$ hours per day on screens.' },
      { id: 'B', text: 'We are $95\\%$ confident the average daily screen time for all adults in the population sampled lies between $3.9$ and $4.5$ hours.' },
      { id: 'C', text: 'There is a $95\\%$ chance the next adult surveyed will report between $3.9$ and $4.5$ hours.' },
      { id: 'D', text: 'The average daily screen time has been increasing.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** A confidence interval is a statement about the unknown population average, not about any single person or any future draw. Only Choice B keeps that scope.\n\n**The Full Solution:**\nStep 1: The $95\\%$ CI of $[3.9, 4.5]$ estimates where the true population mean daily screen time lies, with $95\\%$ confidence.\nStep 2: Match the wording. Choice B says exactly that — the average for all adults in the sampled population is between $3.9$ and $4.5$ hours.\n\n**Why the wrong answers are tempting:**\n* Choice A: applies the interval to every individual adult — wrong scope; the CI bounds the mean, not each person.\n* Choice C: turns the CI into a prediction about the next single respondent.\n* Choice D: claims a trend, but there is no time-series data to support change over time.\n\n**Test Day Takeaway:** A confidence interval estimates where a population parameter (a mean or proportion) lies. It never makes a guarantee about an individual or a single future observation.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'confidence-interval-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-278', domain: 'problem-solving', skills: ['margin-of-error'], difficulty: 'medium', type: 'fill-in',
    question: 'A study reports that a random sample of $600$ residents has an average commute time of $32$ minutes, with a $95\\%$ confidence interval of $[30, 34]$ minutes. What is the margin of error, in minutes, of this interval?',
    correctAnswer: '2',
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~5s):** The margin of error is half the interval width: $\\frac{34 - 30}{2} = 2$ minutes.\n\n**The Full Solution:**\nStep 1: A symmetric CI is $\\text{point estimate} \\pm \\text{MOE}$, so its full width is $2 \\cdot \\text{MOE}$.\nStep 2: Width $= 34 - 30 = 4$, so $\\text{MOE} = \\frac{4}{2} = 2$ minutes. The point estimate $32$ confirms it: $32 \\pm 2 = [30, 34]$. $\\checkmark$\n\n**Common Mistakes:** Reporting $4$ gives the full width instead of the half-width; reporting $30$ or $34$ just restates a bound.\n\n**Test Day Takeaway:** MOE is the half-width of a symmetric CI. Interval width $= 2 \\cdot \\text{MOE}$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'confidence-interval-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-279', domain: 'problem-solving', skills: ['margin-of-error'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A poll of $1{,}000$ randomly sampled adults reports support for a policy at $47\\% \\pm 3\\%$ at a $95\\%$ confidence level. If a different poll using the SAME methodology and sample size reports $51\\% \\pm 3\\%$, which conclusion is most appropriate?',
    choices: [
      { id: 'A', text: 'The two polls give significantly different results; support has changed.' },
      { id: 'B', text: 'The two confidence intervals overlap, so the polls are consistent with the same true proportion.' },
      { id: 'C', text: 'The first poll must be wrong.' },
      { id: 'D', text: 'The second poll proves majority support.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Build both intervals: $47\\% \\pm 3\\% = [44\\%, 50\\%]$ and $51\\% \\pm 3\\% = [48\\%, 54\\%]$. They overlap on $[48\\%, 50\\%]$, so both polls are consistent with the same true proportion.\n\n**The Full Solution:**\nStep 1: Each sample percentage carries a $\\pm 3\\%$ margin, giving two intervals: $[44\\%, 50\\%]$ and $[48\\%, 54\\%]$.\nStep 2: Because the intervals share $[48\\%, 50\\%]$, a single true proportion in that range could produce both results. The difference is within sampling noise.\n\n**Why the wrong answers are tempting:**\n* Choice A: treats the point estimates ($47\\%$ vs $51\\%$) as definitive and ignores that their intervals overlap.\n* Choice C: there is no methodological evidence that either poll is in error.\n* Choice D: the second poll's lower bound is $51\\% - 3\\% = 48\\% < 50\\%$, so majority support is not established.\n\n**Test Day Takeaway:** Two polls \"agree\" when their confidence intervals overlap. A gap in sample percentages smaller than the margin of error is not a statistically significant difference.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'confidence-interval-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-280', domain: 'problem-solving', skills: ['margin-of-error'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A randomized study of $500$ patients reports that a drug reduces symptom severity by $2.4$ points on a $10$-point scale, with a $95\\%$ confidence interval of $[1.8, 3.0]$. Which interpretation is most defensible?',
    choices: [
      { id: 'A', text: 'The drug reduces severity by exactly $2.4$ points for every patient.' },
      { id: 'B', text: 'We are $95\\%$ confident that the average reduction in symptom severity in the studied population is between $1.8$ and $3.0$ points.' },
      { id: 'C', text: 'There is a $5\\%$ chance the drug has no effect.' },
      { id: 'D', text: 'The drug works only for $95\\%$ of patients.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The CI bounds the average reduction in the studied population, with $95\\%$ confidence. Only Choice B states that scope correctly.\n\n**The Full Solution:**\nStep 1: The $95\\%$ CI of $[1.8, 3.0]$ estimates where the true mean reduction across the studied population lies.\nStep 2: Choice B reads it as exactly that — a confidence statement about the population average reduction.\n\n**Why the wrong answers are tempting:**\n* Choice A: treats the sample mean $2.4$ as the exact effect for every patient — a CI bounds the average, not each case.\n* Choice C: reinterprets $95\\%$ confidence as a $5\\%$ \"no effect\" probability, confusing it with a hypothesis-test result.\n* Choice D: misreads $95\\%$ confidence as a per-patient success rate.\n\n**Test Day Takeaway:** Confidence applies to the population parameter (here, the average reduction), never to an individual patient or a \"success rate.\"",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'confidence-interval-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-281', domain: 'problem-solving', skills: ['margin-of-error'], difficulty: 'hard', type: 'fill-in',
    question: 'A poll reports a $95\\%$ confidence interval of $[42\\%, 50\\%]$ for the proportion of voters supporting a candidate. What is the point estimate (the sample proportion)? Report as a percentage without the % sign.',
    correctAnswer: '46',
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**The correct answer is $46$.**\n\n**The Fast Way (~5s):** The point estimate sits at the midpoint of a symmetric CI: $\\frac{42 + 50}{2} = 46\\%$.\n\n**The Full Solution:**\nStep 1: A confidence interval is symmetric around its point estimate, so $\\text{point} = \\frac{\\text{lower} + \\text{upper}}{2}$.\nStep 2: $\\frac{42 + 50}{2} = 46\\%$. Check the margin: $\\text{MOE} = \\frac{50 - 42}{2} = 4$, and $46 \\pm 4 = [42, 50]$. $\\checkmark$\n\n**Common Mistakes:** Reporting a bound ($42$ or $50$) instead of the center; forgetting to divide the sum by $2$.\n\n**Test Day Takeaway:** For a symmetric CI, the point estimate is the midpoint of the interval and the MOE is its half-width.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'confidence-interval-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── Q.F. SAMPLE SIZE FOR MARGIN REDUCTION (bank-ps-282..289) ─────────────
  // Cutting MOE in half requires quadrupling sample size (sqrt(n) relation).
  { id: 'bank-ps-282', domain: 'problem-solving', skills: ['margin-of-error'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A poll of $400$ voters has a margin of error of $\\pm 5\\%$. To cut the margin of error in HALF (to $\\pm 2.5\\%$), approximately how many voters should the next poll survey, assuming the same methodology?',
    choices: [{ id: 'A', text: '$200$' }, { id: 'B', text: '$800$' }, { id: 'C', text: '$1{,}600$' }, { id: 'D', text: '$2{,}000$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** MOE scales as $\\frac{1}{\\sqrt{n}}$. Halving the MOE means doubling $\\sqrt{n}$, which quadruples $n$: $4 \\cdot 400 = 1{,}600$.\n\n**The Full Solution:**\nStep 1: Margin of error is proportional to $\\frac{1}{\\sqrt{n}}$. To shrink MOE by a factor of $k$, multiply $n$ by $k^2$.\nStep 2: Cutting MOE in half is $k = 2$, so $n$ scales by $2^2 = 4$: new $n = 4 \\cdot 400 = 1{,}600$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($200$): halves $n$, which would increase the MOE.\n* Choice B ($800$): doubles $n$, shrinking MOE only by $\\frac{1}{\\sqrt{2}} \\approx 0.71$, not by half.\n* Choice D ($2{,}000$): a larger number with no basis in the $\\frac{1}{\\sqrt{n}}$ relation.\n\n**Test Day Takeaway:** To cut MOE by a factor of $k$, multiply the sample size by $k^2$. The scaling is quadratic because MOE depends on $\\frac{1}{\\sqrt{n}}$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'sample-size-for-margin-reduction', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-283', domain: 'problem-solving', skills: ['margin-of-error'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A study with sample size $n$ has a margin of error of $\\pm 4\\%$. If a new study uses sample size $4n$, what is the new margin of error?',
    choices: [{ id: 'A', text: '$\\pm 1\\%$' }, { id: 'B', text: '$\\pm 2\\%$' }, { id: 'C', text: '$\\pm 4\\%$' }, { id: 'D', text: '$\\pm 16\\%$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** MOE scales as $\\frac{1}{\\sqrt{n}}$. Quadrupling $n$ multiplies the MOE by $\\frac{1}{\\sqrt{4}} = \\frac{1}{2}$, so $4\\% \\to 2\\%$.\n\n**The Full Solution:**\nStep 1: $n \\to 4n$ makes $\\sqrt{n} \\to \\sqrt{4n} = 2\\sqrt{n}$.\nStep 2: MOE is divided by $2$: $\\frac{4\\%}{2} = 2\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\pm 1\\%$): divides MOE by $4$, using linear scaling instead of the square-root rule.\n* Choice C ($\\pm 4\\%$): assumes the MOE does not change.\n* Choice D ($\\pm 16\\%$): multiplies by $4$ — the wrong direction entirely.\n\n**Test Day Takeaway:** MOE scales as $\\frac{1}{\\sqrt{n}}$, so $n \\to 4n$ halves the MOE. Never scale it linearly.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'sample-size-for-margin-reduction', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-284', domain: 'problem-solving', skills: ['margin-of-error'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A pollster surveyed $900$ people and got a margin of error of $\\pm 3.3\\%$. The next survey requires a margin of error of $\\pm 1.1\\%$ at the same confidence level. Approximately how many people should be surveyed?',
    choices: [{ id: 'A', text: '$2{,}700$' }, { id: 'B', text: '$3{,}600$' }, { id: 'C', text: '$8{,}100$' }, { id: 'D', text: '$10{,}800$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The MOE shrinks by a factor of $\\frac{3.3}{1.1} = 3$. Sample size scales by $3^2 = 9$: new $n = 9 \\cdot 900 = 8{,}100$.\n\n**The Full Solution:**\nStep 1: MOE is proportional to $\\frac{1}{\\sqrt{n}}$. To reduce MOE by a factor of $3$, multiply $n$ by $3^2 = 9$.\nStep 2: New $n = 9 \\cdot 900 = 8{,}100$. Check: $\\sqrt{8100} = 90 = 3 \\cdot \\sqrt{900}$, so the MOE drops to one-third. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2{,}700$): triples $n$, shrinking MOE only by $\\sqrt{3} \\approx 1.73$, not by $3$.\n* Choice B ($3{,}600$): quadruples $n$ — too small for a factor-of-$3$ reduction.\n* Choice D ($10{,}800$): a larger number with no basis in the scaling rule.\n\n**Test Day Takeaway:** To cut MOE by a factor of $k$, multiply $n$ by $k^2$. A factor of $3$ means $n \\times 9$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'sample-size-for-margin-reduction', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-285', domain: 'problem-solving', skills: ['margin-of-error'], difficulty: 'medium', type: 'fill-in',
    question: 'A research team wants to reduce its survey margin of error from $\\pm 6\\%$ to $\\pm 2\\%$ at the same confidence level. By what factor must they increase the sample size?',
    correctAnswer: '9',
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~5s):** MOE shrinks by a factor of $\\frac{6}{2} = 3$, so the sample size must scale by $3^2 = 9$.\n\n**The Full Solution:**\nStep 1: MOE is proportional to $\\frac{1}{\\sqrt{n}}$, so reducing MOE by a factor of $k$ requires multiplying $n$ by $k^2$.\nStep 2: Here $k = \\frac{6}{2} = 3$, so the factor is $3^2 = 9$.\n\n**Common Mistakes:** Reporting $3$ uses linear scaling instead of the square root; reporting $4$ confuses this with squaring the new MOE; reporting $6$ or $2$ just restates an MOE value.\n\n**Test Day Takeaway:** Dividing MOE by $k$ means multiplying $n$ by $k^2$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'sample-size-for-margin-reduction', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-286', domain: 'problem-solving', skills: ['margin-of-error'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A poll with $200$ respondents has a margin of error of $\\pm 7\\%$. If a follow-up survey uses $1{,}800$ respondents, approximately what is the new margin of error?',
    choices: [{ id: 'A', text: '$\\pm 0.8\\%$' }, { id: 'B', text: '$\\pm 1.6\\%$' }, { id: 'C', text: '$\\pm 2.3\\%$' }, { id: 'D', text: '$\\pm 3.5\\%$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $\\frac{1800}{200} = 9$, so $\\sqrt{n}$ multiplies by $3$ and the MOE divides by $3$: $\\frac{7\\%}{3} \\approx 2.3\\%$.\n\n**The Full Solution:**\nStep 1: The sample size grows by a factor of $\\frac{1800}{200} = 9$.\nStep 2: MOE scales as $\\frac{1}{\\sqrt{n}}$, so it divides by $\\sqrt{9} = 3$: new MOE $= \\frac{7\\%}{3} \\approx 2.33\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\pm 0.8\\%$): divides MOE by $9$, using linear scaling.\n* Choice B ($\\pm 1.6\\%$): roughly half of A — still based on the wrong scaling.\n* Choice D ($\\pm 3.5\\%$): halves the MOE, as if $n$ had only quadrupled.\n\n**Test Day Takeaway:** Scaling $n$ by $9$ scales MOE by $\\frac{1}{3}$, not by $\\frac{1}{9}$. Take the square root of the sample-size factor.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'sample-size-for-margin-reduction', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-287', domain: 'problem-solving', skills: ['margin-of-error'], difficulty: 'medium', type: 'fill-in',
    question: 'A survey of $100$ randomly selected adults yields a margin of error of $\\pm 10\\%$. A new survey with $400$ respondents is conducted under the same methodology. What is the new margin of error, as a percent?',
    correctAnswer: '5',
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~5s):** $\\frac{400}{100} = 4$, so MOE divides by $\\sqrt{4} = 2$: new MOE $= \\frac{10\\%}{2} = 5\\%$.\n\n**The Full Solution:**\nStep 1: The sample size quadruples: $\\frac{400}{100} = 4$.\nStep 2: MOE scales as $\\frac{1}{\\sqrt{n}}$, so it divides by $\\sqrt{4} = 2$: $\\frac{10\\%}{2} = 5\\%$.\n\n**Common Mistakes:** Reporting $2.5$ divides the MOE by $4$ (linear scaling); reporting $10$ forgets to apply the scaling; reporting $40$ multiplies instead of divides.\n\n**Test Day Takeaway:** Quadrupling $n$ halves the MOE, because MOE depends on $\\frac{1}{\\sqrt{n}}$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'sample-size-for-margin-reduction', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-288', domain: 'problem-solving', skills: ['margin-of-error'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A research team wants to triple the precision (i.e., reduce the margin of error by a factor of $3$) of their estimate. By what factor must they scale the sample size?',
    choices: [{ id: 'A', text: '$\\sqrt{3}$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$6$' }, { id: 'D', text: '$9$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** Reducing MOE by a factor of $3$ requires scaling $n$ by $3^2 = 9$.\n\n**The Full Solution:**\nStep 1: MOE is proportional to $\\frac{1}{\\sqrt{n}}$, so reducing it by a factor of $k$ means multiplying $n$ by $k^2$.\nStep 2: Here $k = 3$, so $n$ scales by $3^2 = 9$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\sqrt{3}$): inverts the relation — this is how $\\sqrt{n}$ would change for a different scenario, not the sample-size factor.\n* Choice B ($3$): uses linear scaling instead of squaring.\n* Choice C ($6$): doubles $3$, unrelated to the $k^2$ rule.\n\n**Test Day Takeaway:** Reducing MOE by a factor of $k$ always requires multiplying the sample size by $k^2$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'sample-size-for-margin-reduction', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-289', domain: 'problem-solving', skills: ['margin-of-error'], difficulty: 'hard', type: 'fill-in',
    question: 'A pollster currently has a $95\\%$ margin of error of $\\pm 4\\%$ using a sample of $625$ adults. To achieve a margin of error of $\\pm 1\\%$ at the same confidence level, how many additional adults must be surveyed beyond the original $625$?',
    correctAnswer: '9375',
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**The correct answer is $9375$.**\n\n**The Fast Way (~15s):** Margin of error scales like $\\frac{1}{\\sqrt{n}}$, so cutting it by a factor of $4$ (from $\\pm 4\\%$ to $\\pm 1\\%$) needs $n$ to grow by $4^2=16$. New $n=16 \\cdot 625 = 10{,}000$, and the question asks for the additional adults: $10{,}000 - 625 = 9375$.\n\n**The Full Solution:**\nStep 1: For a fixed confidence level, $\\text{MOE} \\propto \\frac{1}{\\sqrt{n}}$.\nStep 2: To shrink the margin by a factor of $\\frac{4}{1}=4$, multiply $n$ by $4^2=16$.\nStep 3: New sample size: $16 \\cdot 625 = 10{,}000$.\nStep 4: \"Additional\" means the increase, not the total: $10{,}000 - 625 = 9375$.\n\n**Common Mistakes:** Reporting $10{,}000$ gives the new total size, not the addition. Reporting $2500$ scales $n$ by $4$ instead of $16$, forgetting that $n$ is under the square root.\n\n**Test Day Takeaway:** Margin of error is tied to $\\frac{1}{\\sqrt{n}}$, so to cut it by a factor of $k$ you multiply the sample size by $k^2$. Then check whether the question wants the new total or just the increase.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'sample-size-for-margin-reduction', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── Q.A. UNIT CONVERSION (bank-ps-290..297) ──────────────────────────────
  // Convert between units using conversion factors. Multi-step chains common.
  { id: 'bank-ps-290', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A scientist measures a distance of $4{,}200$ centimeters. How many meters is this? ($1$ meter = $100$ centimeters.)',
    choices: [{ id: 'A', text: '$0.042$' }, { id: 'B', text: '$4.2$' }, { id: 'C', text: '$42$' }, { id: 'D', text: '$420{,}000$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $100$ cm make a meter, so divide: $\\frac{4200}{100} = 42$ meters.\n\n**The Full Solution:**\nStep 1: Multiply by the conversion factor so centimeters cancel: $4200 \\text{ cm} \\cdot \\frac{1 \\text{ m}}{100 \\text{ cm}}$.\nStep 2: $\\frac{4200}{100} = 42$ meters, which is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.042$): divided by $10^5$ — far too many zeros.\n* Choice B ($4.2$): divided by $1000$ — off by one place.\n* Choice D ($420{,}000$): multiplied by $100$ instead of dividing.\n\n**Test Day Takeaway:** Write the conversion as a fraction and cancel units. Centimeters on top cancels centimeters on the bottom, leaving meters.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'unit-conversion', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-291', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A recipe calls for $480$ grams of flour. How many kilograms is this? ($1$ kg = $1{,}000$ g.)',
    choices: [{ id: 'A', text: '$0.048$' }, { id: 'B', text: '$0.48$' }, { id: 'C', text: '$4.8$' }, { id: 'D', text: '$48$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $1000$ g make a kilogram, so divide: $\\frac{480}{1000} = 0.48$ kg.\n\n**The Full Solution:**\nStep 1: Multiply by the conversion factor so grams cancel: $480 \\text{ g} \\cdot \\frac{1 \\text{ kg}}{1000 \\text{ g}}$.\nStep 2: $\\frac{480}{1000} = 0.48$ kg, which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.048$): divided by $10{,}000$ — off by one place.\n* Choice C ($4.8$): divided by $100$ — off by one place.\n* Choice D ($48$): divided by $10$ only.\n\n**Test Day Takeaway:** A larger unit gives a smaller number. Since $480$ g is well under $1$ kg, the answer must be less than $1$ — which rules out C and D immediately.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'unit-conversion', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-292', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A car travels at $60$ miles per hour. What is its speed in feet per second? ($1$ mile = $5{,}280$ feet; $1$ hour = $3{,}600$ seconds.)',
    choices: [{ id: 'A', text: '$60$' }, { id: 'B', text: '$88$' }, { id: 'C', text: '$316{,}800$' }, { id: 'D', text: '$5{,}280$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Chain the factors so units cancel: $60 \\cdot \\frac{5280}{3600} = \\frac{316800}{3600} = 88$ ft/s.\n\n**The Full Solution:**\nStep 1: Convert miles to feet and hours to seconds at once: $60 \\frac{\\text{mi}}{\\text{hr}} \\cdot \\frac{5280 \\text{ ft}}{1 \\text{ mi}} \\cdot \\frac{1 \\text{ hr}}{3600 \\text{ s}}$.\nStep 2: Miles and hours cancel, leaving $\\frac{60 \\cdot 5280}{3600}$ ft/s.\nStep 3: $\\frac{316800}{3600} = 88$ ft/s, which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($60$): kept the number from mph without converting.\n* Choice C ($316{,}800$): multiplied by $5280$ but forgot to divide by $3600$.\n* Choice D ($5280$): converted only miles to feet.\n\n**Test Day Takeaway:** Set up chained conversions so each unit cancels. The factor with the unit you want to remove goes wherever it cancels — miles on the bottom, seconds on the bottom of the final factor.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'unit-conversion', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-293', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'medium', type: 'fill-in',
    question: 'A liquid has a density of $1.2$ grams per cubic centimeter. What is the density in kilograms per cubic meter? ($1$ kg = $1000$ g; $1$ m$^3$ = $10^6$ cm$^3$.)',
    correctAnswer: '1200',
    explanation: "**SAT Pattern: Unit Conversion**\n\n**The correct answer is $1200$.**\n\n**The Fast Way (~15s):** Mass grows by $\\frac{1}{1000}$ kg per g and volume by $10^6$ cm³ per m³, so $1.2 \\cdot \\frac{10^6}{1000} = 1.2 \\cdot 10^3 = 1200$ kg/m³.\n\n**The Full Solution:**\nStep 1: Convert grams to kilograms and cm³ to m³ together: $1.2 \\frac{\\text{g}}{\\text{cm}^3} \\cdot \\frac{1 \\text{ kg}}{1000 \\text{ g}} \\cdot \\frac{10^6 \\text{ cm}^3}{1 \\text{ m}^3}$.\nStep 2: Grams and cm³ cancel, leaving $1.2 \\cdot \\frac{10^6}{1000}$ in kg/m³.\nStep 3: $1.2 \\cdot 10^3 = 1200$ kg/m³.\n\n**Common Mistakes:** Reporting $1.2$ converts the mass but forgets the volume unit. Reporting $0.0012$ divides by $10^6$ instead of multiplying.\n\n**Test Day Takeaway:** When a unit is raised to a power, like cm³, its conversion factor is raised to that same power. Since $1$ m $=100$ cm, $1$ m³ $=100^3=10^6$ cm³.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'unit-conversion', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-294', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A printer uses $0.05$ liters of ink per page. How many milliliters of ink does it use for $250$ pages? ($1$ L = $1{,}000$ mL.)',
    choices: [{ id: 'A', text: '$12.5$' }, { id: 'B', text: '$125$' }, { id: 'C', text: '$1{,}250$' }, { id: 'D', text: '$12{,}500$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Total ink is $0.05 \\cdot 250 = 12.5$ L; convert with $1000$ mL per L: $12.5 \\cdot 1000 = 12{,}500$ mL.\n\n**The Full Solution:**\nStep 1: Find the total ink in liters: $0.05 \\frac{\\text{L}}{\\text{page}} \\cdot 250 \\text{ pages} = 12.5$ L.\nStep 2: Convert to milliliters: $12.5 \\text{ L} \\cdot \\frac{1000 \\text{ mL}}{1 \\text{ L}} = 12{,}500$ mL, which is choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A ($12.5$): stopped at liters without converting.\n* Choice B ($125$): divided by $1000$ instead of multiplying somewhere.\n* Choice C ($1250$): off by one factor of $10$.\n\n**Test Day Takeaway:** Two steps in order — compute the quantity in the given units first, then convert. Mixing the two invites an off-by-a-power slip.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'unit-conversion', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-295', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A field has an area of $0.5$ square miles. How many square feet is this? ($1$ mile = $5{,}280$ feet.)',
    choices: [{ id: 'A', text: '$2{,}640$' }, { id: 'B', text: '$2{,}640{,}000$' }, { id: 'C', text: '$13{,}939{,}200$' }, { id: 'D', text: '$27{,}878{,}400$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Squared units need a squared factor: $1 \\text{ mi}^2 = 5280^2 \\text{ ft}^2 = 27{,}878{,}400$ ft², so $0.5 \\cdot 27{,}878{,}400 = 13{,}939{,}200$ ft².\n\n**The Full Solution:**\nStep 1: Since $1$ mi $=5280$ ft, square both sides: $1 \\text{ mi}^2 = 5280^2 \\text{ ft}^2 = 27{,}878{,}400$ ft².\nStep 2: Scale by the area: $0.5 \\text{ mi}^2 \\cdot 27{,}878{,}400 \\frac{\\text{ft}^2}{\\text{mi}^2} = 13{,}939{,}200$ ft², which is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2640$): treated this as a length and halved $5280$ — no squaring at all.\n* Choice B ($2{,}640{,}000$): applied only part of the factor instead of squaring it.\n* Choice D ($27{,}878{,}400$): squared correctly but forgot to multiply by the $0.5$.\n\n**Test Day Takeaway:** Convert area with the squared conversion factor: $1$ mi² $=(5280)^2$ ft², not $5280$ ft². The same rule applies to cm³ and any other power of a unit.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'unit-conversion', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-296', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'hard', type: 'fill-in',
    question: 'A pump delivers water at a constant rate of $2.4$ cubic feet per minute. How many gallons does it deliver in $1$ hour? ($1$ cubic foot $= 7.48$ gallons.)',
    correctAnswer: '1077.12',
    explanation: "**SAT Pattern: Unit Conversion**\n\n**The correct answer is $1077.12$.**\n\n**The Fast Way (~15s):** Run it over an hour and convert volume: $2.4 \\cdot 60 \\cdot 7.48 = 1077.12$ gallons.\n\n**The Full Solution:**\nStep 1: Chain the factors so units cancel: $2.4 \\frac{\\text{ft}^3}{\\text{min}} \\cdot \\frac{60 \\text{ min}}{1 \\text{ hr}} \\cdot \\frac{7.48 \\text{ gal}}{1 \\text{ ft}^3} \\cdot 1 \\text{ hr}$.\nStep 2: Minutes and ft³ cancel, leaving gallons: $2.4 \\cdot 60 \\cdot 7.48$.\nStep 3: $144 \\cdot 7.48 = 1077.12$ gallons.\n\n**Common Mistakes:** Reporting $144$ stops at cubic feet ($2.4 \\cdot 60$) without converting to gallons. Reporting $17.952$ converts the volume but forgets the $60$-minute time factor ($2.4 \\cdot 7.48$). Reporting $179.52$ is that same slip with a misplaced decimal — ten times too large.\n\n**Test Day Takeaway:** Chain conversion factors one unit at a time and confirm the leftover unit matches what the question asks — here, gallons, not cubic feet.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'unit-conversion', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-297', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A factory produces $3$ widgets per second. How many widgets does it produce in a $40$-hour work week?',
    choices: [{ id: 'A', text: '$7{,}200$' }, { id: 'B', text: '$72{,}000$' }, { id: 'C', text: '$432{,}000$' }, { id: 'D', text: '$432{,}000{,}000$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Per second to per week: $3 \\cdot 3600 \\cdot 40 = 432{,}000$ widgets.\n\n**The Full Solution:**\nStep 1: Convert seconds to hours: $3 \\frac{\\text{widgets}}{\\text{s}} \\cdot \\frac{3600 \\text{ s}}{1 \\text{ hr}} = 10{,}800$ widgets per hour.\nStep 2: Multiply by the $40$-hour week: $10{,}800 \\cdot 40 = 432{,}000$ widgets, which is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($7200$): used $3 \\cdot 40 \\cdot 60$, converting per minute instead of per second.\n* Choice B ($72{,}000$): missing one factor of $10$.\n* Choice D ($432{,}000{,}000$): an extra factor of $1000$ slipped into the time conversion.\n\n**Test Day Takeaway:** For per-second rates, remember $3600$ seconds per hour. Build the chain per second $\\to$ per hour $\\to$ per week and watch for a dropped or doubled time factor.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'unit-conversion', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── Q.A. MIXTURE PROBLEMS (bank-ps-298..305) ─────────────────────────────
  // Combine two solutions/alloys of different concentrations to reach a target.
  { id: 'bank-ps-298', domain: 'problem-solving', skills: ['ratios'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A $10$-liter container holds a mixture that is $40\\%$ saltwater. How many liters of saltwater are in the container?',
    choices: [{ id: 'A', text: '$0.4$' }, { id: 'B', text: '$2.5$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$6$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Mixture Problems**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $40\\%$ of $10$ liters is $0.40 \\cdot 10 = 4$ liters of saltwater.\n\n**The Full Solution:**\nStep 1: The component amount is the percent (as a decimal) times the total: $0.40 \\cdot 10$.\nStep 2: $0.40 \\cdot 10 = 4$ liters, which is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.4$): dropped a decimal place, computing $40\\%$ of $1$ instead of $10$.\n* Choice B ($2.5$): divided $10$ by $4$ instead of multiplying by $0.40$.\n* Choice D ($6$): found the other $60\\%$ (the non-saltwater portion).\n\n**Test Day Takeaway:** \"$X\\%$ of the total\" means multiply the percent as a decimal by the total amount. Confirm you reported the component the question asked about.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'mixture-problems', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-299', domain: 'problem-solving', skills: ['ratios'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A solution contains $30$ grams of salt dissolved in $120$ grams of water. What is the concentration of salt by mass, as a percent of the total solution?',
    choices: [{ id: 'A', text: '$20\\%$' }, { id: 'B', text: '$25\\%$' }, { id: 'C', text: '$30\\%$' }, { id: 'D', text: '$80\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Mixture Problems**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Concentration is part over whole: $\\frac{30}{30+120} = \\frac{30}{150} = 0.20 = 20\\%$.\n\n**The Full Solution:**\nStep 1: The total solution mass is salt plus water: $30 + 120 = 150$ g.\nStep 2: Concentration by mass is salt over total: $\\frac{30}{150} = 0.20 = 20\\%$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($25\\%$): divided salt by water, $\\frac{30}{120}$, instead of by the total.\n* Choice C ($30\\%$): reported the salt mass as if it were already a percent.\n* Choice D ($80\\%$): gave the water concentration, $\\frac{120}{150}$.\n\n**Test Day Takeaway:** Concentration uses the whole mixture as the denominator — salt plus water — never just one other component.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'mixture-problems', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-300', domain: 'problem-solving', skills: ['ratios'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A chemist combines $4$ liters of a $20\\%$ acid solution with $6$ liters of a $50\\%$ acid solution. What is the acid concentration of the resulting mixture, as a percent?',
    choices: [{ id: 'A', text: '$30\\%$' }, { id: 'B', text: '$35\\%$' }, { id: 'C', text: '$38\\%$' }, { id: 'D', text: '$70\\%$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Mixture Problems**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Add the acid, not the percents: $0.20 \\cdot 4 + 0.50 \\cdot 6 = 0.8 + 3 = 3.8$ L of acid in $10$ L total, so $\\frac{3.8}{10} = 38\\%$.\n\n**The Full Solution:**\nStep 1: Acid from each solution: $0.20 \\cdot 4 = 0.8$ L and $0.50 \\cdot 6 = 3$ L.\nStep 2: Total acid is $0.8 + 3 = 3.8$ L; total volume is $4 + 6 = 10$ L.\nStep 3: Resulting concentration: $\\frac{3.8}{10} = 0.38 = 38\\%$, which is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($30\\%$): averaged the percents $\\frac{20+50}{2}$, which only works when the volumes are equal.\n* Choice B ($35\\%$): landed partway between the simple average and the correct weighted value.\n* Choice D ($70\\%$): added the two percents instead of mixing.\n\n**Test Day Takeaway:** Mix concentrations with a weighted average: $\\frac{c_1 V_1 + c_2 V_2}{V_1 + V_2}$. Equal volumes reduce to the plain average; unequal volumes pull toward the larger volume's concentration.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'mixture-problems', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-301', domain: 'problem-solving', skills: ['ratios'], difficulty: 'medium', type: 'fill-in',
    question: 'A baker mixes $200$ grams of $10\\%$-sugar dough with $300$ grams of $25\\%$-sugar dough. What is the sugar concentration of the resulting dough, as a percent? (Report only the number, without the % sign.)',
    correctAnswer: '19',
    explanation: "**SAT Pattern: Mixture Problems**\n\n**The correct answer is $19$.**\n\n**The Fast Way (~10s):** Total sugar is $0.10 \\cdot 200 + 0.25 \\cdot 300 = 20 + 75 = 95$ g in $500$ g of dough, so concentration $= \\frac{95}{500} = 0.19 = 19\\%$.\n\n**The Full Solution:**\nStep 1: Find the sugar mass in each batch. The first contributes $0.10 \\cdot 200 = 20$ g; the second contributes $0.25 \\cdot 300 = 75$ g.\nStep 2: Add: total sugar $= 20 + 75 = 95$ g, total dough $= 200 + 300 = 500$ g.\nStep 3: Divide: $\\frac{95}{500} = 0.19$, so the concentration is $19\\%$. Report $19$.\n\n**Common Mistakes:** Reporting $17.5$ averages the two percents without weighting by mass. Reporting $35$ just adds $10$ and $25$ — concentrations don't add.\n\n**Test Day Takeaway:** Weighted concentration $= \\frac{\\text{total solute mass}}{\\text{total mass}}$. Convert each percent to a decimal, multiply by its mass, then sum — never average the percents.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'mixture-problems', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-302', domain: 'problem-solving', skills: ['ratios'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A lab technician has a $30\\%$ saline solution. They want to dilute it to a $20\\%$ saline solution by adding pure water. How many milliliters of water should be added to $200$ mL of the $30\\%$ solution?',
    choices: [{ id: 'A', text: '$50$' }, { id: 'B', text: '$100$' }, { id: 'C', text: '$150$' }, { id: 'D', text: '$200$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Mixture Problems**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The salt amount is fixed: $0.30 \\cdot 200 = 60$ mL. After diluting to $20\\%$, $60 = 0.20 \\cdot V_{\\text{new}} \\Rightarrow V_{\\text{new}} = 300$ mL, so water added $= 300 - 200 = 100$ mL.\n\n**The Full Solution:**\nStep 1: Adding pure water changes the total volume but not the salt. Salt $= 0.30 \\cdot 200 = 60$ mL.\nStep 2: At $20\\%$, that same $60$ mL of salt must be $20\\%$ of the new volume: $V_{\\text{new}} = \\frac{60}{0.20} = 300$ mL.\nStep 3: Water added $= 300 - 200 = 100$ mL.\n\n**Why the wrong answers are tempting:**\n* Choice A ($50$): halves the correct water amount, often from a mis-set-up dilution ratio.\n* Choice C ($150$): overshoots the new volume to $350$ mL, which would give a weaker solution.\n* Choice D ($200$): doubles the volume to $400$ mL, which gives $15\\%$, not $20\\%$.\n\n**Test Day Takeaway:** In a dilution, the solute amount stays constant. Hold the solute fixed, solve for the new total volume, then subtract the original volume to get the water added.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'mixture-problems', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-303', domain: 'problem-solving', skills: ['ratios'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A coffee shop sells a custom blend with $40\\%$ Colombian beans and the rest Brazilian. If a shipment contains $50$ pounds of pre-mixed beans, how many pounds of Brazilian beans are in the shipment?',
    choices: [{ id: 'A', text: '$20$' }, { id: 'B', text: '$25$' }, { id: 'C', text: '$30$' }, { id: 'D', text: '$40$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Mixture Problems**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Brazilian is the rest: $100\\% - 40\\% = 60\\%$ of $50 = 0.60 \\cdot 50 = 30$ lbs.\n\n**The Full Solution:**\nStep 1: The blend is $40\\%$ Colombian, so the remaining $60\\%$ is Brazilian.\nStep 2: $0.60 \\cdot 50 = 30$ pounds.\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): $0.40 \\cdot 50$ — that's the Colombian amount, not Brazilian.\n* Choice B ($25$): half of $50$ — assumes a $50/50$ split.\n* Choice D ($40$): reports the Colombian percent as a pound count.\n\n**Test Day Takeaway:** When two components' percents sum to $100\\%$, get the unlisted one with the complement: $(100\\% - \\text{given})$ of the total.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'mixture-problems', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-304', domain: 'problem-solving', skills: ['ratios'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A chemist has $10$ L of a $10\\%$ acid solution. How many liters of pure acid must they add to make the mixture $40\\%$ acid?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$6$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Mixture Problems**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Start with $0.10 \\cdot 10 = 1$ L of acid. Adding $x$ L of pure acid makes acid $1 + x$ in total $10 + x$. Set $\\frac{1 + x}{10 + x} = 0.40 \\Rightarrow 1 + x = 4 + 0.40x \\Rightarrow 0.60x = 3 \\Rightarrow x = 5$.\n\n**The Full Solution:**\nStep 1: Initial acid $= 0.10 \\cdot 10 = 1$ L.\nStep 2: Pure acid adds to BOTH the acid and the total: new acid $= 1 + x$, new total $= 10 + x$.\nStep 3: Require $40\\%$ acid: $\\frac{1 + x}{10 + x} = 0.40$.\nStep 4: Solve: $1 + x = 0.40(10 + x) = 4 + 0.40x \\Rightarrow 0.60x = 3 \\Rightarrow x = 5$ L.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): treats the total as fixed at $10$ L, ignoring that pure acid raises the denominator.\n* Choice B ($4$): an arithmetic slip on $0.60x = 3$.\n* Choice D ($6$): overshoots, solving a mis-set equation.\n\n**Test Day Takeaway:** When you add PURE solute, both the numerator (solute) and the denominator (total) grow by $x$. Build $\\frac{\\text{old solute} + x}{\\text{old total} + x}$ before solving.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'mixture-problems', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-305', domain: 'problem-solving', skills: ['ratios'], difficulty: 'hard', type: 'fill-in',
    question: 'A mixture is created by combining a $25\\%$ alcohol solution with a $60\\%$ alcohol solution to make $14$ liters of a $40\\%$ alcohol solution. How many liters of the $60\\%$ solution are in the mixture?',
    correctAnswer: '6',
    explanation: "**SAT Pattern: Mixture Problems**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~20s):** Let $x$ be the liters of $60\\%$ solution; the rest, $14 - x$, is $25\\%$. Balance the alcohol: $0.25(14 - x) + 0.60x = 0.40 \\cdot 14 \\Rightarrow 0.35x = 2.1 \\Rightarrow x = 6$.\n\n**The Full Solution:**\nStep 1: Let $x$ = volume of the $60\\%$ solution, so $14 - x$ is the $25\\%$ solution.\nStep 2: Alcohol balance: $0.25(14 - x) + 0.60x = 0.40 \\cdot 14$.\nStep 3: Expand: $3.5 - 0.25x + 0.60x = 5.6 \\Rightarrow 3.5 + 0.35x = 5.6$.\nStep 4: Solve: $0.35x = 2.1 \\Rightarrow x = 6$ liters.\nStep 5: Check: $8$ L at $25\\%$ gives $2$ L alcohol, $6$ L at $60\\%$ gives $3.6$ L; $2 + 3.6 = 5.6 = 40\\%$ of $14$. $\\checkmark$\n\n**Common Mistakes:** Reporting $8$ solves for the $25\\%$ volume instead of the $60\\%$ volume. Mixing up which percent multiplies $x$ flips the equation.\n\n**Test Day Takeaway:** Write one balance equation for the solute: (percent $\\times$ volume) of each part equals (target percent $\\times$ total). Let $x$ be the volume the question asks for so you don't have to convert at the end.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'mixture-problems', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── Q.C. BOX PLOT INTERPRETATION (bank-ps-306..313) ─────────────────────
  // Reading min/max/quartiles from a box plot. SAT staple for descriptive stats.
  { id: 'bank-ps-306', domain: 'problem-solving', skills: ['find-median'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The box plot below displays test scores from a class. What is the interquartile range (IQR)?',
    diagram: { type: 'boxPlot', params: { min: 48, q1: 66, median: 72, q3: 84, max: 96, xLabel: 'Test score', xGridStep: 5, xLabelStep: 10 } },
    choices: [{ id: 'A', text: '$12$' }, { id: 'B', text: '$18$' }, { id: 'C', text: '$24$' }, { id: 'D', text: '$48$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** IQR $= Q_3 - Q_1 = 84 - 66 = 18$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): $84 - 72$, using the median instead of $Q_1$.\n* Choice C ($24$): $72 - 48$, median minus the minimum.\n* Choice D ($48$): max minus min — that's the range, not the IQR.\n\n**Test Day Takeaway:** IQR $= Q_3 - Q_1$, the width of the box. Don't confuse it with the range (max $-$ min).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'box-plot-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-307', domain: 'problem-solving', skills: ['find-median'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The box plot below shows the monthly rainfall (in inches) in a city. What is the median monthly rainfall, in inches?',
    diagram: { type: 'boxPlot', params: { min: 1.5, q1: 3.1, median: 4.2, q3: 5.8, max: 7.9, xLabel: 'Rainfall (in)', xMin: 1, xMax: 8, xGridStep: 0.5, xLabelStep: 1 } },
    choices: [{ id: 'A', text: '$3.1$' }, { id: 'B', text: '$4.2$' }, { id: 'C', text: '$4.7$' }, { id: 'D', text: '$5.8$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** The median is the line inside the box, read directly as $4.2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3.1$): reads $Q_1$, the left edge of the box.\n* Choice C ($4.7$): averages $Q_1$ and $Q_3$, which need not equal the median.\n* Choice D ($5.8$): reads $Q_3$, the right edge of the box.\n\n**Test Day Takeaway:** A box plot marks five values — min, $Q_1$, median, $Q_3$, max. The median is the line dividing the box, not an edge.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'box-plot-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-308', domain: 'problem-solving', skills: ['find-median'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The box plot below summarizes student scores. Which statement must be true based on the box plot?',
    diagram: { type: 'boxPlot', params: { min: 50, q1: 65, median: 73, q3: 82, max: 95, xLabel: 'Score', xGridStep: 5, xLabelStep: 10 } },
    choices: [
      { id: 'A', text: 'The mean score is $73$.' },
      { id: 'B', text: 'Exactly $25\\%$ of students scored above $82$.' },
      { id: 'C', text: 'No student scored below $50$.' },
      { id: 'D', text: 'At least half the class scored above $73$.' },
    ],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The left whisker ends at the minimum, $50$, so the lowest score is $50$ — no student scored below $50$ must be true.\n\n**Why the wrong answers are tempting:**\n* Choice A: a box plot shows the median, not the mean, so the mean isn't pinned to $73$.\n* Choice B: quartile cutoffs are approximate and ties at $82$ can shift the count off exactly $25\\%$.\n* Choice D: with ties at the median $73$, fewer than half could land strictly above it.\n\n**Test Day Takeaway:** The min and max are exact bounds, so \"no value below the min\" is always safe. Quartile percentages are approximate and can break on ties — be wary of \"exactly\" and \"at least half.\"",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'box-plot-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-309', domain: 'problem-solving', skills: ['find-median'], difficulty: 'medium', type: 'fill-in',
    question: 'The box plot below shows the daily customer counts at a café. What is the range of customer counts?',
    diagram: { type: 'boxPlot', params: { min: 32, q1: 48, median: 60, q3: 74, max: 90, xLabel: 'Daily customers', xGridStep: 10, xLabelStep: 10 } },
    correctAnswer: '58',
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**The correct answer is $58$.**\n\n**The Fast Way (~3s):** Range $= \\text{max} - \\text{min} = 90 - 32 = 58$.\n\n**Common Mistakes:** Reporting $26$ gives the IQR ($Q_3 - Q_1$) instead of the range. Reporting $60$ reads the median; reporting $90$ or $32$ stops at a single bound.\n\n**Test Day Takeaway:** Range $= \\text{max} - \\text{min}$; IQR $= Q_3 - Q_1$. They are different measures of spread — match the word to the formula.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'box-plot-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-310', domain: 'problem-solving', skills: ['find-median'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The box plots below summarize test scores from Class A and Class B. Which statement is best supported by the plots?',
    diagram: { type: 'boxPlot', params: {
      distributions: [
        { label: 'Class A', min: 50, q1: 60, median: 75, q3: 90, max: 95 },
        { label: 'Class B', min: 50, q1: 68, median: 75, q3: 82, max: 95 },
      ],
      xMin: 45, xMax: 100, xGridStep: 5, xLabelStep: 10, xLabel: 'Test score',
    } },
    choices: [
      { id: 'A', text: 'Class A has higher overall scores.' },
      { id: 'B', text: 'Class A has more spread in the middle $50\\%$ of scores.' },
      { id: 'C', text: 'Class B has more students.' },
      { id: 'D', text: 'Class A has a higher mean.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** A wider box means a larger IQR, which is exactly the spread of the middle $50\\%$ of the data. Class A's wider box supports more middle spread.\n\n**Why the wrong answers are tempting:**\n* Choice A: equal medians mean neither class is \"higher\" overall.\n* Choice C: a box plot shows positions, not how many students were measured.\n* Choice D: the mean is not displayed on a box plot.\n\n**Test Day Takeaway:** The box width is the IQR — spread of the central half. A wider box says nothing about the overall level (higher/lower) or the sample size.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'box-plot-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-311', domain: 'problem-solving', skills: ['find-median'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The box plot below summarizes $50$ data points. Approximately how many data points are between $30$ and $55$?',
    diagram: { type: 'boxPlot', params: { min: 18, q1: 30, median: 40, q3: 55, max: 75, xLabel: 'Value', xGridStep: 5, xLabelStep: 10 } },
    choices: [{ id: 'A', text: '$12$' }, { id: 'B', text: '$25$' }, { id: 'C', text: '$30$' }, { id: 'D', text: '$50$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** The box spans $Q_1$ to $Q_3$, the middle $50\\%$. Here $30$ to $55$ is that box, so $0.50 \\cdot 50 = 25$ points fall in it.\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): one quartile is $25\\%$ of $50$, about $12.5$ — only half the box.\n* Choice C ($30$): a loose overestimate, not tied to the $50\\%$ rule.\n* Choice D ($50$): all the data, the full min-to-max span.\n\n**Test Day Takeaway:** From $Q_1$ to $Q_3$ is always the middle $50\\%$ of the data, so multiply the total count by $0.50$ regardless of the actual values.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'box-plot-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-312', domain: 'problem-solving', skills: ['find-median'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The box plot below shows a distribution where the upper whisker is longer than the lower whisker and the median sits closer to Q1 than to Q3. Which statement is best supported by the box plot?',
    diagram: { type: 'boxPlot', params: { min: 20, q1: 30, median: 36, q3: 55, max: 95, xLabel: 'Value', xGridStep: 5, xLabelStep: 10 } },
    choices: [
      { id: 'A', text: 'The mean is less than the median.' },
      { id: 'B', text: 'The mean is approximately equal to the median.' },
      { id: 'C', text: 'The mean is greater than the median.' },
      { id: 'D', text: 'There are more data points above the median than below.' },
    ],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** A longer upper whisker with the median near $Q_1$ signals right-skew. The long upper tail pulls the mean above the median, so mean $>$ median.\n\n**Why the wrong answers are tempting:**\n* Choice A: mean $<$ median is left-skew, the opposite picture (long lower tail).\n* Choice B: mean $\\approx$ median holds only for symmetric distributions.\n* Choice D: the median always splits the data $50/50$ by count, regardless of skew.\n\n**Test Day Takeaway:** Right-skew (long upper tail) $\\Rightarrow$ mean $>$ median. Left-skew $\\Rightarrow$ mean $<$ median. Symmetric $\\Rightarrow$ mean $\\approx$ median. The mean chases the tail.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'box-plot-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-313', domain: 'problem-solving', skills: ['find-median'], difficulty: 'hard', type: 'fill-in',
    question: 'The box plot below summarizes $20$ data values. Using the standard rule that an outlier is any value MORE than $1.5 \\cdot \\text{IQR}$ above Q3 or below Q1, what is the upper threshold above which a value would be considered an outlier?',
    diagram: { type: 'boxPlot', params: { min: 5, q1: 12, median: 18, q3: 25, max: 34, xLabel: 'Value', xGridStep: 5, xLabelStep: 5 } },
    correctAnswer: '44.5',
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**The correct answer is $44.5$.**\n\n**The Fast Way (~10s):** Read $Q_1=12$ and $Q_3=25$ off the box. Then $\\text{IQR}=25-12=13$, and the upper fence is $Q_3+1.5 \\cdot \\text{IQR}=25+1.5(13)=25+19.5=44.5$.\n\n**The Full Solution:**\nStep 1: The box ends mark the quartiles: $Q_1=12$, $Q_3=25$. The interquartile range is $\\text{IQR}=Q_3-Q_1=25-12=13$.\nStep 2: The standard upper outlier fence is $Q_3+1.5 \\cdot \\text{IQR}$.\nStep 3: Substitute: $25+1.5(13)=25+19.5=44.5$. Any value above $44.5$ is an outlier.\n\n**Common Mistakes:** Reporting $34$ (the maximum whisker value, not the fence); reporting $38$ by using $1 \\cdot \\text{IQR}$ instead of $1.5$; reporting $25$ (that is just $Q_3$).\n\n**Test Day Takeaway:** Outlier fences sit at $Q_3+1.5 \\cdot \\text{IQR}$ (upper) and $Q_1-1.5 \\cdot \\text{IQR}$ (lower). Find the IQR first, then push $1.5$ of it past the relevant quartile.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'box-plot-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── Q.C. STANDARD DEVIATION COMPARISON (bank-ps-314..321) ───────────────
  // Compare spreads of two data sets via standard deviation reasoning.
  { id: 'bank-ps-314', domain: 'problem-solving', skills: ['standard-deviation-concept'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Two data sets have the same mean. Data set A: $\\{8, 9, 10, 11, 12\\}$. Data set B: $\\{1, 5, 10, 15, 19\\}$. Which statement is best supported?',
    choices: [
      { id: 'A', text: 'Both sets have the same standard deviation.' },
      { id: 'B', text: 'Set A has a larger standard deviation than Set B.' },
      { id: 'C', text: 'Set B has a larger standard deviation than Set A.' },
      { id: 'D', text: 'Standard deviation cannot be compared without computing it.' },
    ],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Both sets center on a mean of $10$. Set A's values hug it ($8, 9, 10, 11, 12$); Set B's fling out far ($1, 5, 10, 15, 19$). More spread means a larger standard deviation, so Set B wins.\n\n**The Full Solution:**\nStep 1: Both sets have the same mean of $10$, so the comparison is purely about spread.\nStep 2: Set A's values stay within $2$ of the mean; Set B's reach $9$ away from it.\nStep 3: Standard deviation measures average distance from the mean, so the visibly wider Set B has the larger value. That is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A: ignores the obvious difference in spread.\n* Choice B: backwards — A is the tighter set, not the wider one.\n* Choice D: a numeric computation is not required when one set is clearly more spread out than the other.\n\n**Test Day Takeaway:** Standard deviation tracks how far data sit from the mean. When means match, just compare spread by eye: wider spread $\\Rightarrow$ larger standard deviation.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'standard-deviation-comparison', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-315', domain: 'problem-solving', skills: ['standard-deviation-concept'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A class\'s exam scores are tightly clustered between $78$ and $82$. Another class\'s scores range from $45$ to $98$. Which class has the LARGER standard deviation?',
    choices: [
      { id: 'A', text: 'The first class.' },
      { id: 'B', text: 'The second class.' },
      { id: 'C', text: 'Both classes have the same standard deviation.' },
      { id: 'D', text: 'Cannot be determined.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Wider spread means a larger standard deviation. The second class ranges from $45$ to $98$ while the first barely moves from $78$ to $82$, so the second class has the larger SD.\n\n**The Full Solution:**\nStep 1: The first class is tightly clustered in a $4$-point band ($78$ to $82$).\nStep 2: The second class spans a $53$-point range ($45$ to $98$).\nStep 3: Standard deviation grows with spread, so the second class's far-flung scores give it the larger standard deviation. That is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: the first class is the tight one, so it has the smaller SD.\n* Choice C: their spreads are clearly different, so the SDs cannot be equal.\n* Choice D: the spread difference is obvious, so it can be determined.\n\n**Test Day Takeaway:** When one data set is visibly more spread out than another, it has the larger standard deviation — no arithmetic needed.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'standard-deviation-comparison', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-316', domain: 'problem-solving', skills: ['standard-deviation-concept'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Two data sets have the same number of values. Set A has range $10$; Set B has range $30$. If both sets have similar shape (no extreme outliers), which is most likely true?',
    choices: [
      { id: 'A', text: 'Set A has a larger standard deviation.' },
      { id: 'B', text: 'Set B has a larger standard deviation.' },
      { id: 'C', text: 'Standard deviations are equal.' },
      { id: 'D', text: 'Set A has a larger mean.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** With similar distribution shapes, a larger range signals a larger standard deviation. Set B's range of $30$ triples Set A's range of $10$, so Set B has the larger SD.\n\n**The Full Solution:**\nStep 1: Both sets have the same number of values and similar shape, so range is a fair proxy for spread.\nStep 2: Set B's range ($30$) is three times Set A's range ($10$).\nStep 3: Greater spread means greater standard deviation, so Set B has the larger SD. That is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: backwards — the narrower set (A) has the smaller spread.\n* Choice C: equal range would be needed for equal SD; here the ranges differ.\n* Choice D: range describes spread, not the mean, so it says nothing about which mean is larger.\n\n**Test Day Takeaway:** When two data sets share a shape, range and standard deviation move together — the wider range points to the larger SD.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'standard-deviation-comparison', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-317', domain: 'problem-solving', skills: ['standard-deviation-concept'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Data set X: all $20$ values equal $50$. Data set Y: values are $40, 50, 60$ in equal proportions. Which statement is best supported?',
    choices: [
      { id: 'A', text: 'X and Y have the same standard deviation.' },
      { id: 'B', text: 'X has a larger standard deviation.' },
      { id: 'C', text: 'Y has a larger standard deviation.' },
      { id: 'D', text: 'Standard deviation does not apply when all values are the same.' },
    ],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Every value in Set X equals $50$, so there is zero spread and $\\text{SD}=0$. Set Y's values ($40, 50, 60$) vary, so its SD is greater than $0$. Therefore Y > X, choice C.\n\n**The Full Solution:**\nStep 1: All $20$ values of Set X are identical, so each equals the mean. With no deviation from the mean, $\\text{SD}=0$.\nStep 2: Set Y's values differ from their mean of $50$, so its standard deviation is positive.\nStep 3: A positive SD beats a zero SD, so Set Y has the larger standard deviation. That is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A: equal SD would require equal spread, but only X has zero spread.\n* Choice B: X is the constant set, so it has the smaller (zero) SD, not the larger.\n* Choice D: standard deviation is perfectly well defined for identical values — it equals $0$.\n\n**Test Day Takeaway:** A data set with all identical values has $\\text{SD}=0$. Any spread at all makes the standard deviation positive.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'standard-deviation-comparison', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-318', domain: 'problem-solving', skills: ['standard-deviation-concept'], difficulty: 'medium', type: 'fill-in',
    question: "A data set's values are all multiplied by $5$. The original standard deviation was $4$. What is the new standard deviation?",
    correctAnswer: '20',
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~5s):** Multiplying every value by $5$ multiplies the standard deviation by $5$: $4 \\cdot 5 = 20$.\n\n**The Full Solution:**\nStep 1: For the scaled set $X'=5X$, the standard deviation scales by the same factor: $\\text{SD}(X')=5 \\cdot \\text{SD}(X)$.\nStep 2: Substitute the original SD: $5 \\cdot 4 = 20$.\n\n**Common Mistakes:** Reporting $4$ (assuming scaling leaves SD unchanged); reporting $25$ (squaring the factor as if scaling variance, which is $5^2 \\cdot \\text{SD}$).\n\n**Test Day Takeaway:** Multiplying every value by a constant multiplies the standard deviation by the same constant. Adding a constant (shifting) leaves SD unchanged.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'standard-deviation-comparison', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-319', domain: 'problem-solving', skills: ['standard-deviation-concept'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A data set has mean $20$ and standard deviation $5$. Each value is increased by $10$. What are the new mean and standard deviation?',
    choices: [
      { id: 'A', text: 'Mean $20$, SD $5$' },
      { id: 'B', text: 'Mean $30$, SD $5$' },
      { id: 'C', text: 'Mean $30$, SD $15$' },
      { id: 'D', text: 'Mean $200$, SD $50$' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Adding $10$ to every value slides the mean up by $10$ to $30$ but leaves the spread — and so the standard deviation — untouched at $5$. That is mean $30$, SD $5$, choice B.\n\n**The Full Solution:**\nStep 1: A shift adds the same amount to every value, so the mean moves by that amount: $20+10=30$.\nStep 2: Shifting moves all values together, so the distances from the mean are unchanged, leaving $\\text{SD}=5$.\nStep 3: New mean $30$, new SD $5$. That is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: the mean must shift by $10$, not stay at $20$.\n* Choice C: shifting does not change the standard deviation, so SD stays $5$, not $15$.\n* Choice D: that treats the change as multiplication by $10$ instead of addition of $10$.\n\n**Test Day Takeaway:** Adding a constant shifts the mean by that constant and leaves SD unchanged. Multiplying scales both the mean and SD by the same factor.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'standard-deviation-comparison', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-320', domain: 'problem-solving', skills: ['standard-deviation-concept'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Two data sets have the same mean and same range. Set A is approximately uniformly distributed; Set B has most values near the mean with a few far away (a bell-shape with outliers). Which set most likely has a LARGER standard deviation?',
    choices: [
      { id: 'A', text: 'Set A.' },
      { id: 'B', text: 'Set B.' },
      { id: 'C', text: 'Same SD.' },
      { id: 'D', text: 'Cannot be determined.' },
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Same mean and same range, so the difference is how the values fill that range. Set A spreads evenly, keeping most values far from the mean; Set B piles up near the mean. Larger average distance means larger SD, so Set A wins, choice A.\n\n**The Full Solution:**\nStep 1: Standard deviation is the average distance of values from the mean (technically the root-mean-square deviation).\nStep 2: A uniform Set A scatters values evenly across the whole range, so a large fraction sit far from the center.\nStep 3: A bell-shaped Set B concentrates most values close to the mean, with only a few far out, so its typical distance from the mean is smaller.\nStep 4: Smaller typical distance gives Set B the smaller SD, so Set A has the larger standard deviation. That is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B: the few far-away values raise B's SD a little, but the crowd near the mean keeps its average squared deviation lower than A's.\n* Choice C: matching range does not force matching SD — how the values fill the range matters.\n* Choice D: a sound inference is available here, so it is not undetermined.\n\n**Test Day Takeaway:** Standard deviation reflects typical distance from the mean. For a fixed range, an evenly spread (uniform) set has a larger SD than a center-heavy (bell-shaped) one.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'standard-deviation-comparison', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-321', domain: 'problem-solving', skills: ['standard-deviation-concept'], difficulty: 'hard', type: 'fill-in',
    question: 'A data set has SD $6$. Each value is first multiplied by $2$, then $5$ is added to every value. What is the resulting standard deviation?',
    correctAnswer: '12',
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~10s):** Only multiplication affects standard deviation. Multiplying by $2$ takes SD from $6$ to $6 \\cdot 2 = 12$; adding $5$ changes nothing. Final SD is $12$.\n\n**The Full Solution:**\nStep 1: A linear transformation $X'=aX+b$ gives $\\text{SD}(X')=|a| \\cdot \\text{SD}(X)$ — the shift $b$ drops out.\nStep 2: Here $a=2$ and $b=5$, so $\\text{SD}=|2| \\cdot 6 = 12$.\n\n**Common Mistakes:** Reporting $17$ (adding the shift of $5$ to the SD); reporting $11$ (adding $5$ to the original $6$ before scaling).\n\n**Test Day Takeaway:** Under $X'=aX+b$, the standard deviation scales by $|a|$ only. Translation by $b$ has zero effect.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'standard-deviation-comparison', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── Q.D. INTERPRET SLOPE OF BEST FIT LINE (bank-ps-322..329) ─────────────
  // Slope of best-fit line in CONTEXT: predicted change in y per unit x.
  { id: 'bank-ps-322', domain: 'problem-solving', skills: ['slope-from-points', 'scatterplots'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The scatterplot shows the cost (in dollars) of a taxi ride versus distance (in miles), along with the line of best fit $\\hat{y} = 2.50 x + 3$. What does the slope of $2.50$ represent in this context?',
    diagram: { type: 'scatterplot', params: { points: [[1,6],[2,7],[3,11],[4,12],[5,16],[6,17],[7,20],[8,24],[9,25],[10,27]], xMin: 0, xMax: 10, yMin: 0, yMax: 30, xGridStep: 1, yGridStep: 5, xLabelStep: 2, yLabelStep: 5, xLabel: 'Distance (miles)', yLabel: 'Cost (dollars)', bestFitLine: { slope: 2.5, intercept: 3 } } },
    choices: [
      { id: 'A', text: 'The flat fee for any taxi ride.' },
      { id: 'B', text: 'The predicted increase in cost (in dollars) per additional mile.' },
      { id: 'C', text: 'The total cost for $2.5$ miles.' },
      { id: 'D', text: 'The number of miles per dollar.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Slope is the rise per one unit of run. With cost in dollars on the $y$-axis and distance in miles on the $x$-axis, the slope $2.50$ is the predicted dollar increase per additional mile, choice B.\n\n**The Full Solution:**\nStep 1: In $\\hat{y}=2.50x+3$, the coefficient $2.50$ is the slope.\nStep 2: Slope measures the change in $\\hat{y}$ (cost, dollars) for a $1$-unit change in $x$ (distance, miles).\nStep 3: So each extra mile adds a predicted \\$$2.50$ to the fare. That is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: the flat fee is the $y$-intercept of $3$, the cost at $0$ miles, not the slope.\n* Choice C: this confuses the slope value with a total output; \\$$2.50$ is a per-mile rate, not the cost of a $2.5$-mile ride.\n* Choice D: miles per dollar would be the reciprocal of the slope, $\\frac{1}{2.50}$.\n\n**Test Day Takeaway:** In $\\hat{y}=mx+b$, the slope $m$ is the predicted change in $y$ per one-unit increase in $x$ — and the units come straight from the axes.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-slope-of-best-fit', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-323', domain: 'problem-solving', skills: ['slope-from-points', 'scatterplots'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The scatterplot models plant height (cm) versus days of growth. The line of best fit is $\\hat{y} = 1.8 x + 5$. What does the slope mean in this context?',
    diagram: { type: 'scatterplot', params: { points: [[1,7],[2,9],[3,11],[4,11],[5,13],[6,16],[7,17],[8,20],[9,21],[10,23]], xMin: 0, xMax: 10, yMin: 0, yMax: 25, xGridStep: 1, yGridStep: 5, xLabelStep: 2, yLabelStep: 5, xLabel: 'Days of growth', yLabel: 'Plant height (cm)', bestFitLine: { slope: 1.8, intercept: 5 } } },
    choices: [
      { id: 'A', text: 'The plant grows $1.8$ cm per day on average.' },
      { id: 'B', text: 'The plant starts at $1.8$ cm.' },
      { id: 'C', text: 'The plant reaches $5$ cm after $1.8$ days.' },
      { id: 'D', text: 'The plant reaches its maximum height in $1.8$ days.' },
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Slope is the predicted change in $y$ per one-unit increase in $x$. With height in cm and growth in days, the slope $1.8$ means the plant grows $1.8$ cm per day on average, choice A.\n\n**The Full Solution:**\nStep 1: In $\\hat{y}=1.8x+5$, the slope is $1.8$.\nStep 2: Slope reads as the change in predicted height (cm) for each additional day.\nStep 3: So the model predicts $1.8$ cm of growth per day. That is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B: the starting height is the $y$-intercept of $5$, not the slope.\n* Choice C: this mixes the slope and the intercept rather than reading the rate.\n* Choice D: a line of best fit has no maximum; it rises at a constant rate forever.\n\n**Test Day Takeaway:** Read slope as \"per one unit of $x$, $y$ changes by the slope.\" The intercept is the starting value at $x=0$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-slope-of-best-fit', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-324', domain: 'problem-solving', skills: ['slope-from-points', 'scatterplots'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The scatterplot tracks the time (in minutes) a student spends studying versus their test score. The line of best fit is $\\hat{y} = 0.6 x + 50$. According to this model, for every additional hour of study, the predicted score increases by approximately how many points?',
    diagram: { type: 'scatterplot', params: { points: [[10,55],[20,63],[30,67],[40,75],[50,78],[60,87],[70,91],[80,99],[90,103],[100,111]], xMin: 0, xMax: 110, yMin: 40, yMax: 115, xGridStep: 10, yGridStep: 10, xLabelStep: 20, yLabelStep: 20, xLabel: 'Time studied (minutes)', yLabel: 'Test score', bestFitLine: { slope: 0.6, intercept: 50 } } },
    choices: [{ id: 'A', text: '$0.6$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$36$' }, { id: 'D', text: '$60$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The slope $0.6$ is points per minute. One hour is $60$ minutes, so per hour the score rises by $0.6 \\cdot 60 = 36$ points, choice C.\n\n**The Full Solution:**\nStep 1: In $\\hat{y}=0.6x+50$, with $x$ in minutes, the slope means $0.6$ predicted points per minute of study.\nStep 2: The question asks per hour, and $1$ hour $=60$ minutes.\nStep 3: Multiply the per-minute rate by $60$: $0.6 \\cdot 60 = 36$ points. That is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A: $0.6$ is the gain per minute, not per hour.\n* Choice B: $6$ does not correspond to any correct unit conversion of the slope.\n* Choice D: $60$ is the number of minutes in an hour, not the score increase.\n\n**Test Day Takeaway:** When the question's unit differs from the model's unit, convert. A per-minute slope must be multiplied by $60$ to get the per-hour change.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-slope-of-best-fit', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-325', domain: 'problem-solving', skills: ['slope-from-points', 'scatterplots'], difficulty: 'medium', type: 'fill-in',
    question: 'A best-fit line $\\hat{y} = -2.5 x + 80$ models the temperature (°F) inside a house $x$ hours after the heater shut off. By how many degrees does the predicted temperature drop EVERY $4$ HOURS, according to this model?',
    correctAnswer: '10',
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~10s):** The slope $-2.5$ means the temperature drops $2.5^\\circ$F each hour. Over $4$ hours: $2.5 \\times 4 = 10$ degrees.\n\n**The Full Solution:**\nStep 1: In $\\hat{y} = -2.5x + 80$, the slope $-2.5$ is the change in predicted temperature per hour.\nStep 2: For a $4$-hour span, scale the slope by $\\Delta x = 4$: change $= -2.5 \\times 4 = -10^\\circ$F.\nStep 3: The question asks for the size of the drop, so report $10$.\n\n**Common Mistakes:** Reporting $-10$ when the question asks for the magnitude of the drop; reporting $2.5$ (the per-hour rate, not the per-$4$-hour change); reporting $80$ (the $y$-intercept, not a rate).\n\n**Test Day Takeaway:** A negative slope means $y$ decreases. To get the total change over $\\Delta x$ units, multiply the slope by $\\Delta x$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-slope-of-best-fit', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-326', domain: 'problem-solving', skills: ['slope-from-points', 'scatterplots'], difficulty: 'medium', type: 'multiple-choice',
    question: "The scatterplot tracks a city's population (in thousands) versus year. The best-fit line is $\\hat{y} = 4.2 x + 150$, where $x$ is years since $2000$. Which statement best interprets the slope?",
    diagram: { type: 'scatterplot', params: { points: [[2,158],[4,166],[6,178],[8,180],[10,193],[12,199],[14,210],[16,215],[18,224],[20,235]], xMin: 0, xMax: 22, yMin: 140, yMax: 245, xGridStep: 2, yGridStep: 10, xLabelStep: 4, yLabelStep: 20, xLabel: 'Years since 2000', yLabel: 'Population (thousands)', bestFitLine: { slope: 4.2, intercept: 150 } } },
    choices: [
      { id: 'A', text: 'The population was $4.2$ thousand in $2000$.' },
      { id: 'B', text: 'The predicted population increases by $4.2$ thousand per year.' },
      { id: 'C', text: 'The population reached $150$ thousand in $4.2$ years.' },
      { id: 'D', text: 'The population doubles every $4.2$ years.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The slope $4.2$ is the predicted change in $y$ per unit of $x$. With $y$ in thousands and $x$ in years, that is a predicted increase of $4.2$ thousand per year.\n\n**The Full Solution:**\nStep 1: In $\\hat{y} = 4.2x + 150$, the slope $4.2$ is attached to $x$ (years since $2000$).\nStep 2: Slope = change in predicted population per one-year increase in $x$.\nStep 3: Since population is measured in thousands, the slope reads as $+4.2$ thousand per year, matching B.\n\n**Why the wrong answers are tempting:**\n* Choice A: $150$ is the $y$-intercept (population in $2000$), not the slope, and the slope is not $4.2$ thousand at $x=0$.\n* Choice C: this misreads $4.2$ as a time span instead of a rate.\n* Choice D: a linear model has constant change, not doubling; \"doubles every $4.2$ years\" describes exponential growth.\n\n**Test Day Takeaway:** State a slope with its units: \"[slope] units of $y$ per one unit of $x$.\"",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-slope-of-best-fit', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-327', domain: 'problem-solving', skills: ['slope-from-points', 'scatterplots'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A model predicts the weight of a kitten in pounds based on age in weeks: $\\hat{y} = 0.25 x + 1$. According to the model, what is the predicted weight at $12$ weeks?',
    choices: [{ id: 'A', text: '$0.25$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$13$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Substitute $x = 12$: $\\hat{y} = 0.25(12) + 1 = 3 + 1 = 4$.\n\n**The Full Solution:**\nStep 1: The model is $\\hat{y} = 0.25x + 1$, with $x$ in weeks.\nStep 2: Plug in $x = 12$: $0.25 \\times 12 = 3$.\nStep 3: Add the intercept: $3 + 1 = 4$ pounds, matching C.\n\n**Why the wrong answers are tempting:**\n* Choice A: $0.25$ is just the slope.\n* Choice B: $3$ is $0.25 \\times 12$ with the intercept dropped.\n* Choice D: $13$ comes from using $12 + 1$ and ignoring the slope $0.25$.\n\n**Test Day Takeaway:** For a prediction, substitute the $x$ value and compute the whole expression — never report the slope alone as the predicted $y$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-slope-of-best-fit', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-328', domain: 'problem-solving', skills: ['slope-from-points', 'scatterplots'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A study models gas mileage (mpg) as a function of vehicle weight (in pounds): $\\hat{y} = -0.005 x + 35$. According to this model, an increase of $1{,}000$ pounds in vehicle weight is associated with what change in predicted gas mileage?',
    choices: [
      { id: 'A', text: 'An increase of $5$ mpg.' },
      { id: 'B', text: 'A decrease of $5$ mpg.' },
      { id: 'C', text: 'An increase of $0.5$ mpg.' },
      { id: 'D', text: 'A decrease of $0.5$ mpg.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Change in $\\hat{y}$ = slope $\\times \\Delta x = -0.005 \\times 1000 = -5$, a decrease of $5$ mpg.\n\n**The Full Solution:**\nStep 1: In $\\hat{y} = -0.005x + 35$, the slope $-0.005$ is the change in mpg per pound.\nStep 2: For a $1{,}000$-pound increase, scale by $\\Delta x = 1000$: $-0.005 \\times 1000 = -5$.\nStep 3: The negative sign means mileage drops, so a decrease of $5$ mpg, matching B.\n\n**Why the wrong answers are tempting:**\n* Choice A: an increase ignores the negative slope.\n* Choice C: an increase has the sign wrong and the size off by a factor of $10$.\n* Choice D: a decrease of $0.5$ drops a decimal place ($-0.005 \\times 1000 = -5$, not $-0.5$).\n\n**Test Day Takeaway:** The sign of the slope gives the direction; its magnitude times $\\Delta x$ gives the size. Here $0.005 \\times 1000 = 5$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-slope-of-best-fit', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-329', domain: 'problem-solving', skills: ['slope-from-points', 'scatterplots'], difficulty: 'hard', type: 'fill-in',
    question: 'The scatterplot of plant height (in cm) versus age (in days) has a best-fit line passing through the points $(10, 8)$ and $(40, 32)$. What is the slope of the line of best fit, in cm per day?',
    diagram: { type: 'scatterplot', params: { points: [[5,5],[12,11],[18,15],[22,19],[28,22],[33,27],[37,30],[42,33],[46,38],[50,41]], xMin: 0, xMax: 55, yMin: 0, yMax: 45, xGridStep: 5, yGridStep: 5, xLabelStep: 10, yLabelStep: 10, xLabel: 'Age (days)', yLabel: 'Plant height (cm)', bestFitLine: { slope: 0.8, intercept: 0 } } },
    correctAnswer: '0.8',
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**The correct answer is $0.8$.**\n\n**The Fast Way (~10s):** $m = \\frac{32 - 8}{40 - 10} = \\frac{24}{30} = 0.8$ cm per day.\n\n**The Full Solution:**\nStep 1: Slope is rise over run: $\\frac{\\Delta y}{\\Delta x}$.\nStep 2: Using $(10, 8)$ and $(40, 32)$: $\\Delta y = 32 - 8 = 24$, $\\Delta x = 40 - 10 = 30$.\nStep 3: $m = \\frac{24}{30} = 0.8$ cm per day.\n\n**Common Mistakes:** Reporting $1.25$ (the reciprocal, days per cm); reporting $24$ or $30$ (a single difference instead of the ratio).\n\n**Test Day Takeaway:** Slope $= \\frac{\\text{change in } y}{\\text{change in } x}$. Keep the points in the same order in numerator and denominator, and read the unit as \"[$y$-unit] per [$x$-unit].\"",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-slope-of-best-fit', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── Q.D. INTERPRET INTERCEPT OF BEST FIT LINE (bank-ps-330..337) ─────────
  // Y-intercept of best-fit = predicted y-value when x = 0; may or may not be meaningful.
  { id: 'bank-ps-330', domain: 'problem-solving', skills: ['slope-from-points', 'scatterplots'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A best-fit line models the total cost of a phone plan (dollars) as a function of minutes used: $\\hat{y} = 0.05 x + 20$. What does the y-intercept of $20$ represent?',
    choices: [
      { id: 'A', text: 'The predicted total cost when $0$ minutes are used (the flat fee).' },
      { id: 'B', text: 'The cost per minute.' },
      { id: 'C', text: 'The maximum number of minutes allowed.' },
      { id: 'D', text: 'The total number of customers.' },
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The $y$-intercept is the predicted cost when $x = 0$. With $0$ minutes used, $\\hat{y} = 20$, the flat fee.\n\n**The Full Solution:**\nStep 1: In $\\hat{y} = 0.05x + 20$, the constant $20$ is the value of $\\hat{y}$ at $x = 0$.\nStep 2: $x = 0$ means zero minutes used, so the $\\$20$ is the cost before any per-minute charge — the flat fee, matching A.\n\n**Why the wrong answers are tempting:**\n* Choice B: the cost per minute is the slope $0.05$, not the intercept.\n* Choice C: the model gives no maximum minutes; $20$ is a dollar amount, not a minute count.\n* Choice D: number of customers is unrelated to this equation.\n\n**Test Day Takeaway:** The $y$-intercept of $\\hat{y} = mx + b$ is the predicted $y$ when $x = 0$ — in context, the starting value or fixed component.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-intercept-of-best-fit', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-331', domain: 'problem-solving', skills: ['slope-from-points', 'scatterplots'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A best-fit line for a savings account balance over time is $\\hat{y} = 50 x + 200$, where $y$ is the balance in dollars and $x$ is months since opening. What does the $200$ represent?',
    choices: [
      { id: 'A', text: 'The monthly deposit.' },
      { id: 'B', text: 'The initial deposit (balance at month $0$).' },
      { id: 'C', text: 'The balance after $200$ months.' },
      { id: 'D', text: 'The maximum balance.' },
    ],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** At $x = 0$ months, $\\hat{y} = 200$ — the balance when the account opens, the initial deposit.\n\n**The Full Solution:**\nStep 1: In $\\hat{y} = 50x + 200$, the constant $200$ is the value of $\\hat{y}$ at $x = 0$.\nStep 2: $x = 0$ is the opening month, so $\\$200$ is the balance at month $0$, the initial deposit, matching B.\n\n**Why the wrong answers are tempting:**\n* Choice A: the monthly deposit is the slope $50$, not the intercept.\n* Choice C: the balance after $200$ months would require substituting $x = 200$, not reading the intercept.\n* Choice D: nothing in a line of this form gives a maximum balance.\n\n**Test Day Takeaway:** $y$-intercept = starting value at $x = 0$; slope = the per-unit change.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-intercept-of-best-fit', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-332', domain: 'problem-solving', skills: ['slope-from-points', 'scatterplots'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A best-fit line for the temperature (°F) in a city over the day is $\\hat{y} = -0.3 x + 75$, where $x$ is hours after noon. What does the $75$ represent?',
    choices: [
      { id: 'A', text: 'The predicted temperature at noon (when $x = 0$).' },
      { id: 'B', text: 'The temperature drop per hour.' },
      { id: 'C', text: 'The temperature at midnight.' },
      { id: 'D', text: 'The highest temperature of the day.' },
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** At $x = 0$ (noon), $\\hat{y} = 75$, the predicted temperature at noon.\n\n**The Full Solution:**\nStep 1: In $\\hat{y} = -0.3x + 75$, the constant $75$ is the value of $\\hat{y}$ at $x = 0$.\nStep 2: $x$ is hours after noon, so $x = 0$ is noon itself; the predicted temperature there is $75^\\circ$F, matching A.\n\n**Why the wrong answers are tempting:**\n* Choice B: the per-hour drop is the slope $-0.3$, not the intercept.\n* Choice C: midnight is $x = 12$, not $x = 0$, so it is not the intercept.\n* Choice D: the highest temperature is not read directly off the $y$-intercept.\n\n**Test Day Takeaway:** The $y$-intercept is the predicted $y$ when $x = 0$. Tie the meaning to what $x = 0$ represents in context.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-intercept-of-best-fit', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-333', domain: 'problem-solving', skills: ['slope-from-points', 'scatterplots'], difficulty: 'medium', type: 'fill-in',
    question: "A model for a tree's height (in feet) as a function of years since planting is $\\hat{y} = 0.7 x + 3$. According to the model, what was the tree's height (in feet) when it was planted?",
    correctAnswer: '3',
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~5s):** Planting is $x = 0$, so $\\hat{y} = 0.7(0) + 3 = 3$ feet.\n\n**The Full Solution:**\nStep 1: The model is $\\hat{y} = 0.7x + 3$, with $x$ in years since planting.\nStep 2: At planting, $x = 0$, leaving $\\hat{y} = 3$ feet — the $y$-intercept.\n\n**Common Mistakes:** Reporting $0.7$ (the slope) or $3.7$ (adding one year's growth to the intercept) instead of evaluating at $x = 0$.\n\n**Test Day Takeaway:** Plug $x = 0$ into the model to get the predicted starting value.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-intercept-of-best-fit', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-334', domain: 'problem-solving', skills: ['slope-from-points', 'scatterplots'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A best-fit line models the relationship between a person\'s age (years) and their hourly wage (dollars): $\\hat{y} = 0.4 x + 8$. The y-intercept value of $8$ is best interpreted as:',
    choices: [
      { id: 'A', text: 'The hourly wage of someone at age $0$ — likely an EXTRAPOLATION outside the data range, with no realistic meaning.' },
      { id: 'B', text: 'The wage increases by $\\$8$ per year.' },
      { id: 'C', text: 'A person at age $8$ earns the minimum wage.' },
      { id: 'D', text: 'Someone earning $\\$8$ per hour is $0$ years old.' },
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The $y$-intercept $8$ is the predicted wage at $x = 0$ (age $0$), but a newborn earning a wage has no real-world meaning — this is extrapolation beyond the data range.\n\n**The Full Solution:**\nStep 1: In $\\hat{y} = 0.4x + 8$, the constant $8$ is the predicted hourly wage at $x = 0$, i.e., age $0$.\nStep 2: Age $0$ is a newborn, far outside any realistic age for earning wages, so the intercept is a mathematical artifact, not a meaningful value.\nStep 3: This is extrapolation — applying the model where the data does not support it — which is exactly what A describes.\n\n**Why the wrong answers are tempting:**\n* Choice B: an increase of $\\$0.4$ per year is the slope, not the intercept (and B misstates it as $\\$8$).\n* Choice C: this confuses the intercept with the value of the model at a specific nonzero $x$.\n* Choice D: this reverses the interpretation, reading the wage as the input instead of the output at $x = 0$.\n\n**Test Day Takeaway:** The $y$-intercept is the predicted value at $x = 0$. When $x = 0$ falls outside the realistic data range, that prediction may have no meaningful interpretation — it is extrapolation.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-intercept-of-best-fit', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-335', domain: 'problem-solving', skills: ['slope-from-points', 'scatterplots'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A gym charges a monthly fee plus a per-visit charge. The best-fit line for total cost over a month vs number of visits is $\\hat{y} = 5 x + 30$. What is the monthly base fee?',
    choices: [{ id: 'A', text: '$\\$5$' }, { id: 'B', text: '$\\$30$' }, { id: 'C', text: '$\\$35$' }, { id: 'D', text: '$\\$150$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** At $0$ visits, total cost = $y$-intercept = $\\$30$, the monthly base fee.\n\n**The Full Solution:**\nStep 1: In $\\hat{y} = 5x + 30$, $x$ is the number of visits and the constant $30$ is the value at $x = 0$.\nStep 2: Zero visits means only the fixed monthly fee is charged, so the base fee is $\\$30$, matching B.\n\n**Why the wrong answers are tempting:**\n* Choice A: $\\$5$ is the slope, the per-visit charge.\n* Choice C: $\\$35$ adds one visit's charge to the base fee.\n* Choice D: $\\$150$ comes from multiplying $5 \\times 30$, which has no meaning here.\n\n**Test Day Takeaway:** A fixed fee is the $y$-intercept (cost at zero usage); the variable rate is the slope.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-intercept-of-best-fit', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-336', domain: 'problem-solving', skills: ['slope-from-points', 'scatterplots'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The scatterplot of car value (in thousands of dollars) versus years since purchase has a best-fit line passing through $(0, 24)$ and $(8, 0)$. Which of the following best describes the $y$-intercept?',
    diagram: { type: 'scatterplot', params: { points: [[0,23],[1,22],[2,18],[3,15],[4,13],[5,9],[6,7],[7,4],[8,1]], xMin: 0, xMax: 10, yMin: 0, yMax: 27, xGridStep: 1, yGridStep: 3, xLabelStep: 2, yLabelStep: 6, xLabel: 'Years since purchase', yLabel: 'Car value ($1000s)', bestFitLine: { slope: -3, intercept: 24 } } },
    choices: [
      { id: 'A', text: 'The car was worth $24$ thousand dollars at year $0$ (the year of purchase).' },
      { id: 'B', text: 'The car loses $3$ thousand dollars per year.' },
      { id: 'C', text: 'The car will be worth $0$ in year $24$.' },
      { id: 'D', text: 'The car is currently worth $\\$8{,}000$.' },
    ],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The point $(0, 24)$ is the $y$-intercept: at $x = 0$ (year of purchase) the model predicts the car was worth $24$ thousand dollars.\n\n**The Full Solution:**\nStep 1: A best-fit line through $(0, 24)$ and $(8, 0)$ has $y$-intercept $24$ at $x = 0$.\nStep 2: $x$ is years since purchase, so $x = 0$ is the purchase year; the predicted value there is $24$ thousand dollars, matching A.\n\n**Why the wrong answers are tempting:**\n* Choice B: a loss of $3$ thousand per year is the slope $\\frac{0 - 24}{8 - 0} = -3$, not the intercept.\n* Choice C: \"worth $0$ in year $24$\" reverses the intercept with the $x$-intercept; the value hits $0$ at $x = 8$, not $24$.\n* Choice D: $\\$8{,}000$ misuses the $x$-coordinate $8$ as a dollar amount.\n\n**Test Day Takeaway:** The point $(0, b)$ on a best-fit line is the $y$-intercept — the predicted $y$ at $x = 0$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-intercept-of-best-fit', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-337', domain: 'problem-solving', skills: ['slope-from-points', 'scatterplots'], difficulty: 'hard', type: 'fill-in',
    question: 'A best-fit line passes through $(4, 18)$ and $(10, 30)$. What is the y-intercept of this line?',
    correctAnswer: '10',
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~15s):** Slope = $(30 - 18)/(10 - 4) = 12/6 = 2$. Using $(4, 18)$: $18 = 2 \\cdot 4 + b \\Rightarrow b = 18 - 8 = 10$.\n\n**Common Mistakes:**\n* Reporting $2$: reports the slope.\n* Reporting $18$ or $30$: reports a given y-value.\n\n**Test Day Takeaway:** From two points: compute slope, then use a point to solve for $b$ in $y = mx + b$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-intercept-of-best-fit', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── Q.F. healthy-push tail (bank-ps-338..340) ────────────────────────────
  { id: 'bank-ps-338', domain: 'problem-solving', skills: ['margin-of-error'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A researcher reports the sample mean of a daily commute time as $42$ minutes with a $95\\%$ margin of error of $\\pm 3$ minutes. The $95\\%$ confidence interval is best described as:',
    choices: [{ id: 'A', text: 'The range $[39, 45]$ minutes contains the population mean with $95\\%$ confidence.' }, { id: 'B', text: '$95\\%$ of commuters take between $39$ and $45$ minutes.' }, { id: 'C', text: 'The next person sampled will commute for $42$ minutes.' }, { id: 'D', text: 'The error in the survey is $\\pm 3$ minutes.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Margin of Error**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** CI = $42 \\pm 3 = [39, 45]$. The interpretation is about the POPULATION MEAN, not individuals.\n\n**Test Day Takeaway:** CI = point estimate $\\pm$ MOE. The interval bounds the population PARAMETER, not individual observations.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'margin-of-error', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-339', domain: 'problem-solving', skills: ['margin-of-error'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A poll of $250$ adults reports $63\\%$ favor an issue with margin of error $\\pm 6\\%$ at $95\\%$ confidence. If a second poll of $4{,}000$ adults uses the same methodology, what is the approximate new MOE?',
    choices: [{ id: 'A', text: '$\\pm 0.4\\%$' }, { id: 'B', text: '$\\pm 1.5\\%$' }, { id: 'C', text: '$\\pm 3\\%$' }, { id: 'D', text: '$\\pm 6\\%$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $n$ multiplies by $4000/250 = 16$, so MOE divides by $\\sqrt{16} = 4$: $6/4 = 1.5\\%$.\n\n**Test Day Takeaway:** MOE scales as $1/\\sqrt{n}$. $n \\cdot 16 \\Rightarrow$ MOE / $4$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'sample-size-for-margin-reduction', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-340', domain: 'problem-solving', skills: ['margin-of-error'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A polling firm reports a $95\\%$ confidence interval of $[44\\%, 56\\%]$ for the proportion of voters supporting a candidate. Based on this CI, which statement is most defensible?',
    choices: [{ id: 'A', text: 'A majority of the population definitely supports the candidate.' }, { id: 'B', text: 'A majority of the population definitely opposes the candidate.' }, { id: 'C', text: 'The data is consistent with the true proportion being a non-majority OR a majority.' }, { id: 'D', text: 'The survey has $50\\%$ accuracy.' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** CI $[44\\%, 56\\%]$ straddles $50\\%$, so the data does NOT conclusively place the true proportion above or below the majority threshold.\n\n**Test Day Takeaway:** When the CI crosses a meaningful threshold (like $50\\%$), the data is INCONSISTENT with a definitive claim on either side. Report both possibilities.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'confidence-interval-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── Q.D. healthy-push tail (bank-ps-341..342) ────────────────────────────
  { id: 'bank-ps-341', domain: 'problem-solving', skills: ['slope-from-points', 'scatterplots'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The scatterplot has a line of best fit with equation $\\hat{y} = -1.5 x + 60$, where $x$ is the day number and $y$ is the count of widgets remaining. Approximately when does the model predict the count will reach $0$?',
    diagram: { type: 'scatterplot', params: { points: [[2,56],[5,53],[8,49],[12,42],[16,35],[20,29],[24,24],[28,18],[32,11],[36,5]], xMin: 0, xMax: 42, yMin: 0, yMax: 65, xGridStep: 4, yGridStep: 10, xLabelStep: 8, yLabelStep: 20, xLabel: 'Day', yLabel: 'Widgets remaining', bestFitLine: { slope: -1.5, intercept: 60 } } },
    choices: [{ id: 'A', text: '$\\text{day } 0$' }, { id: 'B', text: '$\\text{day } 40$' }, { id: 'C', text: '$\\text{day } 60$' }, { id: 'D', text: '$\\text{day } 90$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Set $\\hat{y} = 0$: $-1.5x + 60 = 0 \\Rightarrow x = 40$.\n\n**Test Day Takeaway:** To find when a quantity reaches zero in a linear model: set $\\hat{y} = 0$ and solve for $x$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-slope-of-best-fit', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-342', domain: 'problem-solving', skills: ['slope-from-points', 'scatterplots'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The scatterplot shows weight (in pounds) versus age (in years) for a sample of dogs. The line of best fit has a positive slope of $1.2$ pounds per year. A specific dog on the scatterplot at age $5$ years and weight $24$ pounds has a residual of $+2$. What is the predicted weight from the line, in pounds?',
    diagram: { type: 'scatterplot', params: { points: [[1,18],[2,18],[3,19],[4,21],[5,24],[6,23],[7,25],[8,27],[9,28],[10,29]], xMin: 0, xMax: 11, yMin: 14, yMax: 32, xGridStep: 1, yGridStep: 2, xLabelStep: 2, yLabelStep: 4, xLabel: 'Age (years)', yLabel: 'Weight (lb)', bestFitLine: { slope: 1.2, intercept: 16 }, highlightPoint: [5, 24], highlightLabel: '(5, 24)', showResidual: true } },
    choices: [{ id: 'A', text: '$20$' }, { id: 'B', text: '$22$' }, { id: 'C', text: '$24$' }, { id: 'D', text: '$26$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Residual $=$ observed $-$ predicted. $+2 = 24 - \\text{predicted} \\Rightarrow \\text{predicted} = 22$.\n\n**Test Day Takeaway:** Residual = actual $y$ $-$ predicted $y$. Positive residual = observed value is ABOVE the line of best fit.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'residual', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── Q.C. MODE FROM LIST (bank-ps-343..348) — top-up to ≥8 ────────────────
  // Already have 2 (Mode Identification, Mode of Shoe Sizes); aliases land
  // them under `mode-from-list`. Adding 6 more for the Tier-1 threshold.
  { id: 'bank-ps-343', domain: 'problem-solving', skills: ['find-mode'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The dot plot below shows the number of pages read each day for one week. What is the mode?',
    diagram: { type: 'dotPlot', params: { data: [{ value: 7, count: 1 }, { value: 9, count: 2 }, { value: 12, count: 3 }, { value: 14, count: 1 }], xMin: 5, xMax: 16, xLabel: 'Pages read' } },
    choices: [{ id: 'A', text: '$7$' }, { id: 'B', text: '$9$' }, { id: 'C', text: '$12$' }, { id: 'D', text: '$14$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Mode from List**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Count occurrences: $12$ appears $3$ times; everything else $\\leq 2$. Mode $= 12$.\n\n**Why the wrong answers are tempting:**\n* A: smallest value (confuses mode with minimum).\n* B: second-most-frequent ($9$ appears twice).\n* D: largest value (confuses mode with maximum).\n\n**Test Day Takeaway:** Mode = the value that appears MOST OFTEN. Just tally.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'mode-from-list', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-344', domain: 'problem-solving', skills: ['find-mode'], difficulty: 'easy', type: 'fill-in',
    question: 'A bowler\'s scores in $9$ games were: $185, 200, 165, 200, 180, 200, 175, 190, 200$. What is the mode of these scores?',
    correctAnswer: '200',
    explanation: "**SAT Pattern: Mode from List**\n\n**The correct answer is $200$.**\n\n**The Fast Way (~5s):** $200$ appears $4$ times; every other score appears once. Mode $= 200$.\n\n**Test Day Takeaway:** Mode is the value with the highest frequency, not the average or middle.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'mode-from-list', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-345', domain: 'problem-solving', skills: ['find-mode'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The frequency table below shows the number of siblings reported by students in a class. What is the mode of the number of siblings?',
    diagram: { type: 'dataTable', params: { headers: ['Siblings', 'Frequency'], rows: [['0', '4'], ['1', '9'], ['2', '11'], ['3', '5'], ['4', '2']] } },
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Mode from List**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Pick the row with the largest frequency: $11$. The corresponding sibling count is $2$.\n\n**Why the wrong answers are tempting:**\n* A: second-highest frequency row ($9$, for $1$ sibling).\n* C: reports the frequency itself instead of the value with that frequency.\n* D: random other value.\n\n**Test Day Takeaway:** In a frequency table, mode = value (left column) with the highest frequency (right column). Don't confuse the value with its count.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'mode-from-list', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-346', domain: 'problem-solving', skills: ['find-mode'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The data set $\\{5, 8, 8, 10, 12, x\\}$ has a single mode of $8$. Which of the following must be the value of $x$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$10$' }, { id: 'D', text: '$12$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Mode from List**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Currently $8$ appears twice and every other value once. If $x$ equals any existing value other than $8$ (e.g., $x = 5$), that value also reaches count $2$ — tying $8$, so the mode is no longer single. Only $x = 8$ pushes $8$'s count to $3$, keeping it as the single mode.\n\n**Why the wrong answers are tempting:**\n* A, C, D: each creates a tie with $8$ at count $2$, producing two modes.\n\n**Test Day Takeaway:** For a list to have a SINGLE mode at value $m$, $m$ must appear STRICTLY more often than every other value.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'mode-from-list', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-347', domain: 'problem-solving', skills: ['find-mode'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The dot plot below displays the number of hours $10$ students spent on homework on one night. What is the mode?',
    diagram: { type: 'dotPlot', params: { data: [{ value: 1, count: 1 }, { value: 2, count: 3 }, { value: 3, count: 4 }, { value: 4, count: 2 }], xMin: 0, xMax: 5, xLabel: 'Hours of homework' } },
    choices: [{ id: 'A', text: '$2$ hours' }, { id: 'B', text: '$3$ hours' }, { id: 'C', text: '$4$ hours' }, { id: 'D', text: '$10$ hours' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Mode from List**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Tallest stack of dots = mode. $3$ hr has $4$ dots, the most.\n\n**Why the wrong answers are tempting:**\n* A: second-tallest stack ($3$ dots).\n* C: reports the count instead of the value.\n* D: total number of students.\n\n**Test Day Takeaway:** In a dot plot, mode = value above which the column of dots is TALLEST.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'mode-from-list', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-348', domain: 'problem-solving', skills: ['find-mode'], difficulty: 'hard', type: 'fill-in',
    question: 'The dot plot below shows the values of a data set. After one occurrence of the mode is removed, what is the new mode?',
    diagram: { type: 'dotPlot', params: { data: [{ value: 3, count: 1 }, { value: 7, count: 2 }, { value: 10, count: 3 }, { value: 12, count: 4 }, { value: 15, count: 1 }], xMin: 2, xMax: 16, xLabel: 'Value' } },
    correctAnswer: '10',
    explanation: "**SAT Pattern: Mode from List**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~15s):** Original mode is $12$ (count $4$). Remove one $12$: counts become $3:1, 7:2, 10:3, 12:3, 15:1$. New modes are $10$ and $12$ tied at $3$. If a single answer is required, $10$ (lower) is conventional. The intended answer is $10$.\n\n**Test Day Takeaway:** When a value is removed, all counts adjust. Re-tally to find the new mode. Watch for ties.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'mode-from-list', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  // ─── Q.C. SCALING A DATA SET BY A CONSTANT (bank-ps-349..356) ─────────────
  // Effect of multiplying or adding a constant to every value on mean/SD/median/range.
  { id: 'bank-ps-349', domain: 'problem-solving', skills: ['data-analysis'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A data set has a mean of $20$. If each value in the data set is multiplied by $3$, what is the mean of the new data set?',
    choices: [{ id: 'A', text: '$20$' }, { id: 'B', text: '$23$' }, { id: 'C', text: '$60$' }, { id: 'D', text: '$120$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Multiplying every value by $k$ multiplies the mean by $k$. New mean $= 20 \\cdot 3 = 60$.\n\n**Why the wrong answers are tempting:**\n* A: \"doesn't change\" — confuses scaling by $\\times$ with adding $0$.\n* B: adds $3$ instead of multiplying.\n* D: multiplies by $6$ — doubles the operation.\n\n**Test Day Takeaway:** If every value is $\\times k$: mean $\\times k$, SD $\\times |k|$, median $\\times k$, range $\\times |k|$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scaling-a-data-set', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-350', domain: 'problem-solving', skills: ['data-analysis'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A data set has a standard deviation of $4$. If $10$ is added to every value, what is the new standard deviation?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$14$' }, { id: 'C', text: '$40$' }, { id: 'D', text: 'Cannot be determined' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Adding a constant SHIFTS every value but doesn't change the spread. SD is unchanged: $4$.\n\n**Why the wrong answers are tempting:**\n* B: adds $10$ to SD (wrong — addition shifts mean, not SD).\n* C: multiplies SD by the constant.\n* D: \"can't tell\" — but you CAN tell: SD is shift-invariant.\n\n**Test Day Takeaway:** Adding a constant: mean shifts by the constant, but SD/range stay the SAME (spread is preserved).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scaling-a-data-set', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-351', domain: 'problem-solving', skills: ['data-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The mean of a data set is $50$ and the standard deviation is $6$. Each value is multiplied by $2$. What are the new mean and standard deviation?',
    choices: [{ id: 'A', text: 'Mean $50$, SD $6$' }, { id: 'B', text: 'Mean $52$, SD $8$' }, { id: 'C', text: 'Mean $100$, SD $6$' }, { id: 'D', text: 'Mean $100$, SD $12$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Both mean and SD scale by the multiplier: mean $= 50 \\cdot 2 = 100$; SD $= 6 \\cdot 2 = 12$.\n\n**Why the wrong answers are tempting:**\n* A: \"no change\" trap.\n* B: adds $2$ instead of multiplying.\n* C: scales mean only, leaves SD alone (treats SD as shift-invariant — wrong for multiplication).\n\n**Test Day Takeaway:** Multiplying every value by $k$: BOTH mean and SD multiply by $|k|$ (SD is always non-negative).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scaling-a-data-set', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-352', domain: 'problem-solving', skills: ['data-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Temperatures recorded in degrees Celsius have a mean of $20$ and a range of $15$. The data is converted to degrees Fahrenheit using $F = 1.8C + 32$. What is the range in Fahrenheit?',
    choices: [{ id: 'A', text: '$15$' }, { id: 'B', text: '$27$' }, { id: 'C', text: '$32$' }, { id: 'D', text: '$59$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Range responds only to the multiplier ($1.8$), not the shift ($+32$). New range $= 1.8 \\cdot 15 = 27$.\n\n**Why the wrong answers are tempting:**\n* A: thinks range is unchanged.\n* C: applies only the $+32$.\n* D: converts the value $15$ as a temperature: $1.8 \\cdot 15 + 32 = 59$.\n\n**Test Day Takeaway:** Linear transformation $aX + b$: range and SD scale by $|a|$; the $+b$ is irrelevant to spread.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scaling-a-data-set', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-353', domain: 'problem-solving', skills: ['data-analysis'], difficulty: 'medium', type: 'fill-in',
    question: 'A data set has a median of $18$. If each value is multiplied by $-2$, what is the median of the new data set?',
    correctAnswer: '-36',
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**The correct answer is $-36$.**\n\n**The Fast Way (~5s):** Median scales by the multiplier (sign included): $18 \\cdot (-2) = -36$.\n\n**Test Day Takeaway:** Median behaves like mean for linear scaling: median $\\to a \\cdot$ median $+ b$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scaling-a-data-set', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-354', domain: 'problem-solving', skills: ['data-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A data set has mean $\\bar{x} = 30$ and standard deviation $s = 5$. Each value $x_i$ is transformed using $y_i = (x_i - 30)/5$. What are the mean and standard deviation of the new data set $\\{y_i\\}$?',
    choices: [{ id: 'A', text: 'Mean $0$, SD $0$' }, { id: 'B', text: 'Mean $0$, SD $1$' }, { id: 'C', text: 'Mean $30$, SD $1$' }, { id: 'D', text: 'Mean $0$, SD $5$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Shift first: subtracting $30$ centers the mean at $0$. Then divide by $5$: SD scales by $1/5$, giving new SD $= 5/5 = 1$. New mean = $(30 - 30)/5 = 0$.\n\n**Test Day Takeaway:** $(X - \\bar{x})/s$ is the **z-score transform** — always produces mean $0$, SD $1$. This is how standard scores are built.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scaling-a-data-set', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-355', domain: 'problem-solving', skills: ['data-analysis'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A data set has standard deviation $4$. A new data set is created by multiplying each value by $-3$ and then adding $7$. What is the standard deviation of the new data set?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$12$' }, { id: 'D', text: '$19$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** New SD $= |{-3}| \\cdot 4 = 12$. The $+7$ shift is irrelevant.\n\n**Why the wrong answers are tempting:**\n* A: ignores the multiplier.\n* B: \"adds $7-4$\" — doesn't apply.\n* D: includes the $+7$: $12 + 7 = 19$ — wrong, $+7$ doesn't affect SD.\n\n**Test Day Takeaway:** SD always uses ABSOLUTE value of the multiplier ($|a|$), and ignores the additive shift.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scaling-a-data-set', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-356', domain: 'problem-solving', skills: ['data-analysis'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The original data set $\\{x_1, x_2, \\ldots, x_n\\}$ has mean $\\bar{x}$ and standard deviation $s$. A new data set is formed by $y_i = 4x_i - 5$ for each $i$. Which expression gives the variance of $\\{y_i\\}$?',
    choices: [{ id: 'A', text: '$s^2 - 5$' }, { id: 'B', text: '$4s^2 - 5$' }, { id: 'C', text: '$4s^2$' }, { id: 'D', text: '$16s^2$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** SD scales by $|a| = 4$, so SD$_y = 4s$. Variance $= $ SD$^2 = (4s)^2 = 16s^2$.\n\n**Why the wrong answers are tempting:**\n* A: subtracts the $-5$ from variance (additive shift is irrelevant).\n* B: scales variance by $a$ instead of $a^2$.\n* C: forgets to square the multiplier.\n\n**Test Day Takeaway:** Variance scales by $a^2$ (not $|a|$). Sigma $\\to |a|\\sigma$; sigma² $\\to a^2 \\sigma^2$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scaling-a-data-set', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  // ─── Q.A. DISTANCE = RATE × TIME (bank-ps-357..360) — top-up to ≥8 ────────
  // Existing 4 (Average Rate Over Time, Rate × Time = Total ×2, Total / Rate = Time, Rate × Time) plus 4 here.
  { id: 'bank-ps-357', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A car travels at a constant speed of $55$ miles per hour. How far does it travel in $3$ hours?',
    choices: [{ id: 'A', text: '$18.3$ miles' }, { id: 'B', text: '$55$ miles' }, { id: 'C', text: '$165$ miles' }, { id: 'D', text: '$275$ miles' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $d = rt = 55 \\cdot 3 = 165$ miles.\n\n**Why the wrong answers are tempting:**\n* A: divides instead of multiplies ($55 \\div 3$).\n* B: reports the rate.\n* D: $55 \\cdot 5$ — wrong time value.\n\n**Test Day Takeaway:** $d = rt$. Multiply rate and time when units match (mph × hr → miles).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-rate-time', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-358', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'medium', type: 'fill-in',
    question: 'A train travels $360$ miles at a constant speed of $80$ miles per hour. How long, in hours, does the trip take?',
    correctAnswer: '4.5',
    explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**The correct answer is $4.5$.**\n\n**The Fast Way (~5s):** $t = d/r = 360/80 = 4.5$ hr.\n\n**Test Day Takeaway:** Rearrange $d = rt$ to solve for $t$: divide distance by rate.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-rate-time', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-359', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A cyclist rides for $90$ minutes at a constant speed of $14$ miles per hour. How many miles does the cyclist ride?',
    choices: [{ id: 'A', text: '$9.3$' }, { id: 'B', text: '$15.5$' }, { id: 'C', text: '$21$' }, { id: 'D', text: '$1{,}260$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Convert $90$ min $= 1.5$ hr. $d = 14 \\cdot 1.5 = 21$ miles.\n\n**Why the wrong answers are tempting:**\n* A: $14 / 1.5$ — wrong operation.\n* B: $14 + 1.5$ — wrong operation.\n* D: $14 \\cdot 90$ — keeps minutes; units mismatch.\n\n**Test Day Takeaway:** Match units before multiplying. mph × hr → miles; mph × min → must convert min to hr first.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-rate-time', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-360', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Cars A and B start at the same point and drive in opposite directions on a straight road. Car A travels at $50$ mph and Car B travels at $60$ mph. After $4$ hours, how far apart are the two cars?',
    choices: [{ id: 'A', text: '$10$ miles' }, { id: 'B', text: '$200$ miles' }, { id: 'C', text: '$240$ miles' }, { id: 'D', text: '$440$ miles' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Distances $= 50 \\cdot 4 = 200$ and $60 \\cdot 4 = 240$. Opposite directions $\\Rightarrow$ distances add: $200 + 240 = 440$.\n\n**Why the wrong answers are tempting:**\n* A: difference of rates.\n* B: only Car A's distance.\n* C: only Car B's distance.\n\n**Test Day Takeaway:** Opposite directions $\\Rightarrow$ ADD distances. Same direction $\\Rightarrow$ SUBTRACT to find the gap.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-rate-time', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  // ─── Q.A. AVERAGE RATE (bank-ps-361..367) — total/total ────────────────────
  // Distinct from rate × time: avg rate = (total distance) / (total time) when rates vary.
  { id: 'bank-ps-361', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A car travels $120$ miles at $60$ mph and then $180$ miles at $45$ mph. What is the average speed, in mph, for the entire trip?',
    choices: [{ id: 'A', text: '$45$' }, { id: 'B', text: '$50$' }, { id: 'C', text: '$52.5$' }, { id: 'D', text: '$60$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Average Rate**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Time$_1 = 120/60 = 2$ hr. Time$_2 = 180/45 = 4$ hr. Total distance $300$, total time $6$. Average $= 300/6 = 50$ mph.\n\n**Why the wrong answers are tempting:**\n* A: lowest rate.\n* C: arithmetic mean of $60$ and $45$ — wrong because time at each rate isn't equal.\n* D: highest rate.\n\n**Test Day Takeaway:** Average rate = (TOTAL distance) / (TOTAL time), NOT the average of the two rates.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'average-rate', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-362', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'medium', type: 'fill-in',
    question: 'A runner completes $5$ miles in $30$ minutes, then walks $1$ mile in $20$ minutes. What was her average rate for the entire $6$-mile distance, in miles per hour?',
    correctAnswer: '7.2',
    explanation: "**SAT Pattern: Average Rate**\n\n**The correct answer is $7.2$.**\n\n**The Fast Way (~15s):** Total distance $= 6$ miles. Total time $= 50$ min $= 5/6$ hr. Average $= 6 \\div (5/6) = 36/5 = 7.2$ mph.\n\n**Test Day Takeaway:** Convert minutes to hours BEFORE dividing for mph. Total/total — not weighted by anything else.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'average-rate', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-363', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A truck driver drove $2$ hours at $50$ mph and $3$ hours at $60$ mph. What was the truck\'s average speed, in mph, for the entire trip?',
    choices: [{ id: 'A', text: '$50$' }, { id: 'B', text: '$55$' }, { id: 'C', text: '$56$' }, { id: 'D', text: '$60$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Average Rate**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Distance $= 50 \\cdot 2 + 60 \\cdot 3 = 100 + 180 = 280$. Total time $= 5$. Average $= 280/5 = 56$.\n\n**Why the wrong answers are tempting:**\n* A: lowest rate.\n* B: arithmetic mean ($(50+60)/2 = 55$) — wrong because times aren't equal.\n* D: highest rate.\n\n**Test Day Takeaway:** Total distance / total time. The arithmetic mean of rates only equals average rate when each rate is held for the same time.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'average-rate', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-364', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A boat travels upstream at $8$ mph and returns the same distance downstream at $12$ mph. What is the average speed of the round trip, in mph?',
    choices: [{ id: 'A', text: '$9.6$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$10.5$' }, { id: 'D', text: '$11$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Average Rate**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Let one-way distance $= d$. Time up $= d/8$, time down $= d/12$. Total time $= d/8 + d/12 = (3d + 2d)/24 = 5d/24$. Total distance $= 2d$. Average $= 2d / (5d/24) = 48/5 = 9.6$ mph.\n\n**The harmonic mean shortcut:** For equal DISTANCES at two rates $r_1, r_2$, average $= 2r_1 r_2 / (r_1 + r_2) = 2 \\cdot 8 \\cdot 12 / 20 = 192/20 = 9.6$.\n\n**Why the wrong answers are tempting:**\n* B: arithmetic mean ($20/2$).\n* C: random in-between value.\n* D: closer to higher rate.\n\n**Test Day Takeaway:** Round-trip at two rates: use harmonic mean $2r_1 r_2 / (r_1 + r_2)$, not arithmetic mean. The slower leg takes longer, dragging the average down.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'average-rate', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-365', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'medium', type: 'fill-in',
    question: 'A factory produced $480$ widgets in the first $4$ hours of a shift and $200$ widgets in the next $2$ hours. What was the factory\'s average production rate over the $6$-hour period, in widgets per hour?',
    correctAnswer: '113.33',
    explanation: "**SAT Pattern: Average Rate**\n\n**The correct answer is $113.33$ (or $113.\\overline{3}$).**\n\n**The Fast Way (~10s):** Total widgets $= 680$. Total hours $= 6$. Average $= 680/6 \\approx 113.33$.\n\n**Test Day Takeaway:** Production rate problems use the same total/total formula as speed problems.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'average-rate', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-366', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A traveler drove $40$ miles at an average of $20$ mph and then $60$ miles at an average of $30$ mph. What was the average speed for the entire $100$-mile trip?',
    choices: [{ id: 'A', text: '$24$ mph' }, { id: 'B', text: '$25$ mph' }, { id: 'C', text: '$26$ mph' }, { id: 'D', text: '$28$ mph' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Average Rate**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Time$_1 = 40/20 = 2$ hr. Time$_2 = 60/30 = 2$ hr. Total time $= 4$. Average $= 100/4 = 25$ mph.\n\n**Why the wrong answers are tempting:**\n* A: between the two rates but biased low.\n* C: arithmetic mean ($25$ would be A or B; $26$ is wrong-side bias).\n* D: too close to the higher rate.\n\n**Test Day Takeaway:** Always compute total time before dividing. With equal times, average happens to equal arithmetic mean.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'average-rate', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-367', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A pump fills $300$ gallons of water in $20$ minutes during the morning and $180$ gallons in $15$ minutes during the afternoon. What is the average pumping rate, in gallons per minute, over the combined $35$ minutes?',
    choices: [{ id: 'A', text: '$12$' }, { id: 'B', text: '$13.7$' }, { id: 'C', text: '$15$' }, { id: 'D', text: '$24$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Average Rate**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Total water $= 480$ gal. Total time $= 35$ min. Average $= 480/35 \\approx 13.7$ gpm.\n\n**Test Day Takeaway:** Average rate = total quantity / total time, regardless of how the quantity broke down.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'average-rate', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  // ─── Q.A. SIMPLE INTEREST (bank-ps-368..375) — A = P(1 + rt) linear growth ─
  // Distinct from compound-interest (P(1+r)^t exponential).
  { id: 'bank-ps-368', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Marcus deposits $\\$2{,}000$ into a savings account that earns simple interest at an annual rate of $4\\%$. How much interest, in dollars, does the account earn in $3$ years?',
    choices: [{ id: 'A', text: '$80$' }, { id: 'B', text: '$160$' }, { id: 'C', text: '$240$' }, { id: 'D', text: '$2{,}240$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Simple Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Simple interest $I = Prt = 2000 \\cdot 0.04 \\cdot 3 = 240$.\n\n**Why the wrong answers are tempting:**\n* A: interest for $1$ year only ($Pr$).\n* B: forgets the rate is annual and divides by $1.5$.\n* D: total balance ($P + I$), not interest alone.\n\n**Test Day Takeaway:** Simple interest formula: $I = P \\cdot r \\cdot t$. Total balance: $A = P(1 + rt)$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'simple-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-369', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A $\\$5{,}000$ loan accrues simple interest at $6\\%$ annually. What is the total balance owed after $4$ years if no payments are made?',
    choices: [{ id: 'A', text: '$\\$1{,}200$' }, { id: 'B', text: '$\\$5{,}300$' }, { id: 'C', text: '$\\$6{,}200$' }, { id: 'D', text: '$\\$26{,}000$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Simple Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $A = P(1 + rt) = 5000(1 + 0.06 \\cdot 4) = 5000(1.24) = 6200$.\n\n**Why the wrong answers are tempting:**\n* A: interest only ($I = 1200$).\n* B: $1$ year of interest.\n* D: wrong formula (multiplied principal by $5.2$ somehow).\n\n**Test Day Takeaway:** Total = principal + interest. $A = P + Prt = P(1 + rt)$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'simple-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-370', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'medium', type: 'fill-in',
    question: 'A bond is purchased for $\\$8{,}000$ and earns simple interest at an annual rate of $r\\%$. After $5$ years, the bond has earned $\\$1{,}800$ in interest. What is the value of $r$?',
    correctAnswer: '4.5',
    explanation: "**SAT Pattern: Simple Interest**\n\n**The correct answer is $4.5$.**\n\n**The Fast Way (~15s):** $I = Prt \\Rightarrow 1800 = 8000 \\cdot (r/100) \\cdot 5 \\Rightarrow 1800 = 400r \\Rightarrow r = 4.5$.\n\n**Test Day Takeaway:** When the rate is unknown, solve $r = I/(Pt)$. Watch the percent vs decimal — answer fields usually want the percent value.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'simple-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-371', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'medium', type: 'multiple-choice',
    question: 'An investment of $P$ dollars at simple annual interest rate $r$ grows to $A$ dollars after $t$ years. Which expression gives the total amount $A$?',
    choices: [{ id: 'A', text: '$P(1 + r)^t$' }, { id: 'B', text: '$P + rt$' }, { id: 'C', text: '$P(1 + rt)$' }, { id: 'D', text: '$P \\cdot r \\cdot t$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Simple Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $A = P + I = P + Prt = P(1 + rt)$.\n\n**Why the wrong answers are tempting:**\n* A: compound interest formula — DIFFERENT model.\n* B: missing the principal factor.\n* D: interest only, not total.\n\n**Test Day Takeaway:** SIMPLE = linear in $t$. COMPOUND = exponential in $t$. Don't confuse $P(1+rt)$ with $P(1+r)^t$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'simple-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-372', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A $\\$1{,}500$ deposit earns simple interest at $3.5\\%$ per year. After how many years will the account balance be $\\$1{,}815$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$6$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Simple Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Interest earned $= 1815 - 1500 = 315$. $315 = 1500 \\cdot 0.035 \\cdot t \\Rightarrow t = 315/52.5 = 6$ years.\n\n**Test Day Takeaway:** Subtract principal first to isolate interest, then solve for time.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'simple-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-373', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'hard', type: 'fill-in',
    question: 'A savings account is opened with $\\$P$ dollars and earns simple interest at $5\\%$ per year. After $10$ years, the balance is $\\$3{,}000$. What was the initial deposit, in dollars?',
    correctAnswer: '2000',
    explanation: "**SAT Pattern: Simple Interest**\n\n**The correct answer is $2000$.**\n\n**The Fast Way (~10s):** Simple interest over $10$ years at $5\\%$ multiplies the principal by $1 + (0.05)(10) = 1.5$. So $3000 = 1.5P \\Rightarrow P = 2000$.\n\n**The Full Solution:**\nStep 1: Simple-interest balance is $A = P(1 + rt)$, where $r = 0.05$ and $t = 10$.\nStep 2: $1 + rt = 1 + (0.05)(10) = 1.5$.\nStep 3: $3000 = 1.5P \\Rightarrow P = \\frac{3000}{1.5} = 2000$.\n\n**Common Mistakes:** Computing the interest forward instead of back-solving (e.g. landing near $4500$ by treating $\\$3{,}000$ as the deposit); dropping the $1+$ and dividing by $0.5$ to get $6000$.\n\n**Test Day Takeaway:** Given the final balance under simple interest, back-solve with $P = \\dfrac{A}{1 + rt}$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'simple-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-374', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A $\\$10{,}000$ investment grows under simple interest to $\\$13{,}500$ in $7$ years. The same principal at the same annual rate under COMPOUND interest would grow to which range?',
    choices: [{ id: 'A', text: 'Less than $\\$13{,}500$' }, { id: 'B', text: 'Exactly $\\$13{,}500$' }, { id: 'C', text: 'Between $\\$13{,}500$ and $\\$15{,}000$' }, { id: 'D', text: 'Greater than $\\$15{,}000$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Simple Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Find the rate from the simple-interest fact: $13500 = 10000(1 + 7r) \\Rightarrow r = 0.05$. Then compound it: $10000(1.05)^7 \\approx 14{,}070$, which lands between $\\$13{,}500$ and $\\$15{,}000$.\n\n**The Full Solution:**\nStep 1: Solve for the annual rate. $13500 = 10000(1 + 7r) \\Rightarrow 1.35 = 1 + 7r \\Rightarrow r = \\frac{0.35}{7} = 0.05$ ($5\\%$).\nStep 2: Apply the same rate compounded annually: $10000(1.05)^{7}$.\nStep 3: $1.05^{7} \\approx 1.407$, so the balance is $\\approx 10000 \\cdot 1.407 = 14{,}070$. That falls in the range $\\$13{,}500$ to $\\$15{,}000$.\n\n**Why the wrong answers are tempting:**\n* Choice A (less than $\\$13{,}500$): compound interest never trails simple interest once $t > 1$ — it pulls ahead.\n* Choice B (exactly $\\$13{,}500$): would only hold if interest never earned interest, i.e. simple interest.\n* Choice D (greater than $\\$15{,}000$): overshoots — at $5\\%$ over $7$ years the compounding edge is modest, only about $\\$570$ above the simple result.\n\n**Test Day Takeaway:** For $t > 1$, compound interest always beats simple interest at the same rate, and the gap widens over time because each year's interest itself earns interest.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'simple-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-375', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Maria invests $\\$P$ at a simple annual interest rate of $r$. After $t$ years, the balance is $A$. Which equation correctly expresses $r$ in terms of $A$, $P$, and $t$?',
    choices: [{ id: 'A', text: '$r = \\dfrac{A - P}{Pt}$' }, { id: 'B', text: '$r = \\dfrac{A}{Pt}$' }, { id: 'C', text: '$r = \\dfrac{A}{P} - t$' }, { id: 'D', text: '$r = \\dfrac{A - P}{t}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Simple Interest**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** From $A = P + Prt$, the interest earned is $A - P = Prt$. Divide by $Pt$ to isolate the rate: $r = \\dfrac{A - P}{Pt}$.\n\n**The Full Solution:**\nStep 1: Simple-interest balance: $A = P + Prt$.\nStep 2: Subtract the principal to get just the interest: $A - P = Prt$.\nStep 3: Divide both sides by $Pt$: $r = \\dfrac{A - P}{Pt}$.\n\n**Why the wrong answers are tempting:**\n* Choice B: treats $A$ as the interest itself, skipping the $A - P$ subtraction of the principal.\n* Choice C: invents $\\frac{A}{P} - t$, which doesn't follow from any valid rearrangement.\n* Choice D: forgets to divide by the principal, dividing only by $t$.\n\n**Test Day Takeaway:** To isolate the rate, peel off the principal first ($A - P$), then divide by $Pt$. The interest is the growth above the principal, not the whole balance.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'simple-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  // === TIER 0 BANK GROWTH (2026-05-21): 3 problem-solving patterns @ 3 items → @ 5 items ===

  { id: 'bank-ps-376', domain: 'problem-solving', skills: ['calculate-mean'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The mean of $6$ values is $12$. After a $7$th value is added to the list, the mean of all $7$ values is $14$. What is the value of the $7$th number?',
    choices: [{ id: 'A', text: '$26$' }, { id: 'B', text: '$14$' }, { id: 'C', text: '$28$' }, { id: 'D', text: '$2$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Mean from List**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Convert each mean to a sum. Original sum is $6 \\cdot 12 = 72$; new sum is $7 \\cdot 14 = 98$. The $7$th value is the difference: $98 - 72 = 26$.\n\n**The Full Solution:**\nStep 1: Use mean $\\times$ count $=$ sum. Original total: $6 \\cdot 12 = 72$.\nStep 2: After adding the new value, total: $7 \\cdot 14 = 98$.\nStep 3: The added value is whatever closed the gap: $98 - 72 = 26$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($14$): assumes the new value equals the new mean.\n* Choice C ($28$): multiplies the mean gap ($14 - 12 = 2$) by $14$ instead of working with sums.\n* Choice D ($2$): reports the difference of the two means without scaling by the count.\n\n**Test Day Takeaway:** For added or removed values, work in sums: convert each mean to a total (mean $\\times$ count), and the difference of the totals IS the added or removed value.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'mean-from-list', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-377', domain: 'problem-solving', skills: ['calculate-mean'], difficulty: 'medium', type: 'multiple-choice',
    question: 'List $A$ consists of $10$ values with a mean of $50$. List $B$ consists of $15$ values with a mean of $80$. If the two lists are combined into one list of $25$ values, what is the mean of the combined list?',
    choices: [{ id: 'A', text: '$68$' }, { id: 'B', text: '$65$' }, { id: 'C', text: '$130$' }, { id: 'D', text: '$60$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Mean from List**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Add the sums, not the means. $10 \\cdot 50 = 500$ and $15 \\cdot 80 = 1200$, so the combined mean is $\\dfrac{500 + 1200}{25} = \\dfrac{1700}{25} = 68$.\n\n**The Full Solution:**\nStep 1: Sum of List $A$: $10 \\cdot 50 = 500$.\nStep 2: Sum of List $B$: $15 \\cdot 80 = 1200$.\nStep 3: Combined sum $= 500 + 1200 = 1700$ over $25$ values, so the mean is $\\dfrac{1700}{25} = 68$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($65$): averages the two means as $\\frac{50 + 80}{2}$, which only works when the lists have equal counts.\n* Choice C ($130$): adds the two means and never divides.\n* Choice D ($60$): under-weights the larger list — the answer must lean toward $80$ since List $B$ has more values.\n\n**Test Day Takeaway:** Combining means is NOT averaging the means unless the counts match. Turn each mean into a sum, add the sums, and divide by the COMBINED count.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'mean-from-list', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-378', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'easy', type: 'multiple-choice',
    question: 'In a poll of registered voters, $62\\%$ said they favor a new transportation proposal. What percent of those polled did NOT favor the proposal?',
    choices: [{ id: 'A', text: '$38\\%$' }, { id: 'B', text: '$62\\%$' }, { id: 'C', text: '$28\\%$' }, { id: 'D', text: '$48\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent Complement**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Favor and \"did not favor\" must total $100\\%$, so $100\\% - 62\\% = 38\\%$.\n\n**The Full Solution:**\nStep 1: The two groups (favor, did not favor) partition everyone polled, so their percents sum to $100\\%$.\nStep 2: $100\\% - 62\\% = 38\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($62\\%$): returns the given \"favor\" percent unchanged.\n* Choice C ($28\\%$): subtracts from $90\\%$ instead of $100\\%$.\n* Choice D ($48\\%$): mis-reads $62$ as $52$, or subtracts from a wrong total.\n\n**Test Day Takeaway:** Words like \"did NOT,\" \"do not,\" or \"remaining\" signal a complement — subtract the given percent from $100\\%$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-complement', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-379', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'At a concert venue, $\\dfrac{5}{8}$ of the seats are filled. What percent of the seats are NOT filled?',
    choices: [{ id: 'A', text: '$37.5\\%$' }, { id: 'B', text: '$62.5\\%$' }, { id: 'C', text: '$40\\%$' }, { id: 'D', text: '$3\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent Complement**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Filled is $\\frac{5}{8} = 62.5\\%$, so unfilled is $100\\% - 62.5\\% = 37.5\\%$. Or skip straight to the complement fraction: $\\frac{3}{8} = 37.5\\%$.\n\n**The Full Solution:**\nStep 1: Unfilled fraction $= 1 - \\frac{5}{8} = \\frac{3}{8}$.\nStep 2: Convert: $\\frac{3}{8} = 0.375 = 37.5\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($62.5\\%$): returns the FILLED percent instead of the unfilled.\n* Choice C ($40\\%$): rounds $\\frac{3}{8}$ to $\\frac{2}{5} = 40\\%$, which isn't exact.\n* Choice D ($3\\%$): reads the numerator $3$ of $\\frac{3}{8}$ as a percent and drops the denominator.\n\n**Test Day Takeaway:** For a \"what percent is NOT\" question, find the complementary fraction ($1 - \\frac{5}{8} = \\frac{3}{8}$) and convert it, or convert the given fraction and subtract from $100\\%$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-complement', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-380', domain: 'problem-solving', skills: ['slope-intercept-form'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A linear model relating monthly advertising spend, $x$ (in thousands of dollars), to revenue, $y$ (in thousands of dollars), is given by $\\hat{y} = 0.6x + 12$. According to this model, what is the predicted revenue when the advertising spend is $\\$20{,}000$?',
    choices: [{ id: 'A', text: '$\\$24{,}000$' }, { id: 'B', text: '$\\$12{,}000$' }, { id: 'C', text: '$\\$26{,}000$' }, { id: 'D', text: '$\\$120{,}000$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Both axes are in thousands, so $\\$20{,}000$ means $x = 20$. Then $\\hat{y} = 0.6(20) + 12 = 24$, i.e. $\\$24{,}000$.\n\n**The Full Solution:**\nStep 1: Match the input to the variable's unit: $x$ is in thousands of dollars, so $\\$20{,}000$ gives $x = 20$.\nStep 2: Substitute into the model: $\\hat{y} = 0.6(20) + 12 = 12 + 12 = 24$.\nStep 3: $\\hat{y}$ is also in thousands, so $24$ means $\\$24{,}000$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$12{,}000$): returns the $y$-intercept — the predicted revenue at $\\$0$ spend.\n* Choice C ($\\$26{,}000$): adds the raw $x$-value to the intercept ($12 + 20 + \\dots$) without applying the slope.\n* Choice D ($\\$120{,}000$): plugs in $x = 200$, ignoring the \"thousands\" unit on $x$.\n\n**Test Day Takeaway:** Substitute the input into the model, and keep the units aligned — when axes are in thousands, convert the dollar figure to thousands before plugging in.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'scatterplot-line-of-best-fit', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-381', domain: 'problem-solving', skills: ['slope-intercept-form'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A study models the average resting heart rate $\\hat{y}$ (in beats per minute) of adults as a function of age $x$ (in years) using $\\hat{y} = -0.3x + 78$. Which of the following is the BEST interpretation of the coefficient $-0.3$ in this model?',
    choices: [{ id: 'A', text: 'For each additional year of age, the predicted resting heart rate decreases by $0.3$ beats per minute.' }, { id: 'B', text: 'For each additional beat per minute, the predicted age decreases by $0.3$ years.' }, { id: 'C', text: 'The predicted resting heart rate at age $0$ is $-0.3$ beats per minute.' }, { id: 'D', text: 'For each additional year of age, the predicted resting heart rate decreases by $30$ beats per minute.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** In $\\hat{y} = mx + b$, the slope $m$ is the predicted change in $y$ per one-unit increase in $x$. Here $m = -0.3$, so each extra year of age predicts a $0.3$ bpm decrease.\n\n**The Full Solution:**\nStep 1: Identify the slope: in $\\hat{y} = -0.3x + 78$, the coefficient on $x$ is $-0.3$.\nStep 2: A slope is the change in the response ($\\hat{y}$, heart rate) per one-unit increase in the predictor ($x$, age).\nStep 3: The sign is negative, so the predicted heart rate decreases by $0.3$ bpm for each additional year — Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B: swaps the roles of $x$ and $y$ — slope describes change in the response per unit of the predictor, not the reverse.\n* Choice C: confuses the slope with the $y$-intercept (which is $78$, the predicted rate at age $0$).\n* Choice D: reads $-0.3$ as $-30$, off by a factor of $100$.\n\n**Test Day Takeaway:** Slope $=$ predicted change in the $y$-variable per ONE unit increase in the $x$-variable; the sign carries the direction, with negative meaning a decrease.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'scatterplot-line-of-best-fit', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // === TIER 1 BANK GROWTH (2026-05-21): problem-solving patterns @ 4 items → @ 10 items ===

  // --- basic-probability (4 → 10) ---
  { id: 'bank-ps-382', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A bag contains $4$ red marbles and $6$ blue marbles. If one marble is selected at random, what is the probability that it is red?',
    choices: [{ id: 'A', text: '$\\dfrac{2}{5}$' }, { id: 'B', text: '$\\dfrac{4}{6}$' }, { id: 'C', text: '$\\dfrac{2}{3}$' }, { id: 'D', text: '$\\dfrac{1}{4}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $P(\\text{red}) = \\dfrac{4}{4 + 6} = \\dfrac{4}{10} = \\dfrac{2}{5}$.\n\n**The Full Solution:**\nStep 1: Favorable outcomes (red) $= 4$.\nStep 2: Total outcomes $= 4 + 6 = 10$.\nStep 3: $P(\\text{red}) = \\dfrac{4}{10} = \\dfrac{2}{5}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{4}{6}$): divides red by blue, using the wrong denominator instead of the total.\n* Choice C ($\\frac{2}{3}$): the simplified form of red over blue ($\\frac{4}{6}$), same error.\n* Choice D ($\\frac{1}{4}$): an unrelated fraction not built from the counts.\n\n**Test Day Takeaway:** Probability $=$ favorable $\\div$ TOTAL outcomes — never favorable $\\div$ unfavorable.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'basic-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-383', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A standard deck has $52$ cards, of which $13$ are hearts. If one card is drawn at random, what is the probability that it is a heart?',
    choices: [{ id: 'A', text: '$\\dfrac{1}{4}$' }, { id: 'B', text: '$\\dfrac{13}{39}$' }, { id: 'C', text: '$\\dfrac{4}{13}$' }, { id: 'D', text: '$\\dfrac{1}{52}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $\\dfrac{13}{52} = \\dfrac{1}{4}$, since $13$ divides into $52$ four times.\n\n**The Full Solution:**\nStep 1: Favorable outcomes (hearts) $= 13$; total cards $= 52$.\nStep 2: $P(\\text{heart}) = \\dfrac{13}{52}$.\nStep 3: Simplify by the common factor $13$: $\\dfrac{13}{52} = \\dfrac{1}{4}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{13}{39}$): uses hearts over non-hearts ($52 - 13 = 39$) instead of the total.\n* Choice C ($\\frac{4}{13}$): inverts the simplified fraction.\n* Choice D ($\\frac{1}{52}$): treats it as drawing one specific card rather than any of $13$ hearts.\n\n**Test Day Takeaway:** Build the ratio favorable $\\div$ total, then simplify — $\\frac{13}{52}$ shares a factor of $13$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'basic-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-384', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A fair six-sided die is rolled once. What is the probability that the result is greater than $4$?',
    choices: [{ id: 'A', text: '$\\dfrac{1}{3}$' }, { id: 'B', text: '$\\dfrac{1}{6}$' }, { id: 'C', text: '$\\dfrac{2}{3}$' }, { id: 'D', text: '$\\dfrac{4}{6}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** \"Greater than $4$\" means $\\{5, 6\\}$ — two outcomes out of six, so $\\dfrac{2}{6} = \\dfrac{1}{3}$.\n\n**The Full Solution:**\nStep 1: Outcomes greater than $4$ on a die are $\\{5, 6\\}$ — that is $2$ favorable outcomes.\nStep 2: Total outcomes $= 6$.\nStep 3: $P = \\dfrac{2}{6} = \\dfrac{1}{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{1}{6}$): counts only one favorable outcome.\n* Choice C ($\\frac{2}{3}$): gives the complement, $P(\\le 4) = \\frac{4}{6}$, simplified.\n* Choice D ($\\frac{4}{6}$): the unsimplified complement, $P(\\le 4)$.\n\n**Test Day Takeaway:** \"Greater than $4$\" excludes $4$ itself — count only $\\{5, 6\\}$. Watch whether the boundary value is included.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'basic-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-385', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A jar contains $3$ red, $5$ green, and $7$ blue marbles. If one marble is selected at random, what is the probability that it is green?',
    choices: [{ id: 'A', text: '$\\dfrac{1}{3}$' }, { id: 'B', text: '$\\dfrac{5}{12}$' }, { id: 'C', text: '$\\dfrac{5}{7}$' }, { id: 'D', text: '$\\dfrac{1}{5}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Total marbles $= 3+5+7 = 15$, so $P(\\text{green}) = \\frac{5}{15} = \\frac{1}{3}$.\n\n**The Full Solution:**\nStep 1: Probability is $\\frac{\\text{favorable}}{\\text{total}}$. Add every color to get the total: $3+5+7 = 15$.\nStep 2: Green marbles are the favorable outcomes: $5$.\nStep 3: $P(\\text{green}) = \\frac{5}{15} = \\frac{1}{3}$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{5}{12}$): divides by $12$, leaving out one color.\n* Choice C ($\\frac{5}{7}$): compares green to blue instead of to the whole jar.\n* Choice D ($\\frac{1}{5}$): inverts the favorable count instead of dividing by the total.\n\n**Test Day Takeaway:** The denominator of a probability is ALL outcomes, including the ones you are not choosing.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'basic-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-386', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A class of $10$ students includes $4$ who wear glasses. If one student is selected at random, what is the probability that the selected student does NOT wear glasses?',
    choices: [{ id: 'A', text: '$\\dfrac{3}{5}$' }, { id: 'B', text: '$\\dfrac{2}{5}$' }, { id: 'C', text: '$\\dfrac{1}{10}$' }, { id: 'D', text: '$\\dfrac{6}{4}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $10-4 = 6$ students do not wear glasses, so $P = \\frac{6}{10} = \\frac{3}{5}$. By complement: $1-\\frac{4}{10} = \\frac{3}{5}$.\n\n**The Full Solution:**\nStep 1: Of $10$ students, $4$ wear glasses, so $10-4 = 6$ do not.\nStep 2: $P(\\text{no glasses}) = \\frac{6}{10} = \\frac{3}{5}$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{2}{5}$): this is $\\frac{4}{10}$, the probability of wearing glasses — the opposite event.\n* Choice C ($\\frac{1}{10}$): picks a single student instead of all non-glasses-wearers.\n* Choice D ($\\frac{6}{4}$): inverts the ratio, giving a value greater than $1$ (impossible for a probability).\n\n**Test Day Takeaway:** \"Does NOT\" signals the complement: $P(\\text{not}) = 1 - P(\\text{does})$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'basic-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-387', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A class has $30$ students. $18$ study Spanish, $12$ study French, and $5$ study both. If a student is chosen at random, what is the probability the student studies Spanish OR French?',
    choices: [{ id: 'A', text: '$\\dfrac{5}{6}$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$\\dfrac{1}{2}$' }, { id: 'D', text: '$\\dfrac{2}{3}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Inclusion-exclusion: $|S \\cup F| = 18+12-5 = 25$, so $P = \\frac{25}{30} = \\frac{5}{6}$.\n\n**The Full Solution:**\nStep 1: Adding $18$ Spanish and $12$ French double-counts the $5$ who study both, so subtract the overlap: $18+12-5 = 25$.\nStep 2: $25$ of $30$ students study at least one language: $P = \\frac{25}{30} = \\frac{5}{6}$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): assumes every one of the $30$ students studies a language; only $25$ do.\n* Choice C ($\\frac{1}{2}$): a stray $\\frac{15}{30}$ with no basis in the counts.\n* Choice D ($\\frac{2}{3}$): equals $\\frac{20}{30}$ — subtracts the overlap twice ($18+12-5-5$).\n\n**Test Day Takeaway:** For \"A OR B,\" add the counts and SUBTRACT the overlap once, or you double-count the students in both groups.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'basic-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- conditional-probability-with-percent (4 → 10) ---
  { id: 'bank-ps-388', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'easy', type: 'multiple-choice',
    question: 'In a survey of $100$ people, $60$ said they own a pet. Of those who own a pet, $75\\%$ own a dog. How many people surveyed own a dog?',
    choices: [{ id: 'A', text: '$45$' }, { id: 'B', text: '$60$' }, { id: 'C', text: '$75$' }, { id: 'D', text: '$25$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $75\\%$ of the $60$ pet owners own a dog: $60 \\times 0.75 = 45$.\n\n**The Full Solution:**\nStep 1: The $75\\%$ applies only to pet owners, not all $100$ people. Start from $60$.\nStep 2: $60 \\times 0.75 = 45$ people own a dog, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($60$): stops at the number of pet owners.\n* Choice C ($75$): copies the percent as if it were a count.\n* Choice D ($25$): computes $100-75$, mixing up the percent with a count.\n\n**Test Day Takeaway:** \"$P\\%$ of $Q$\" means $Q \\times \\frac{P}{100}$ — apply the percent to the correct base.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-389', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A school has $200$ students. $30\\%$ are seniors, and $40\\%$ of seniors play a sport. How many seniors play a sport?',
    choices: [{ id: 'A', text: '$24$' }, { id: 'B', text: '$60$' }, { id: 'C', text: '$80$' }, { id: 'D', text: '$70$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Seniors: $200 \\times 0.30 = 60$. Of those, athletes: $60 \\times 0.40 = 24$.\n\n**The Full Solution:**\nStep 1: First find the seniors: $30\\%$ of $200$ is $200 \\times 0.30 = 60$.\nStep 2: The $40\\%$ applies to seniors only, so $60 \\times 0.40 = 24$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($60$): stops at the senior count.\n* Choice C ($80$): computes $200 \\times 0.40$, applying the second percent to everyone.\n* Choice D ($70$): adds the percents ($30+40$) instead of multiplying through.\n\n**Test Day Takeaway:** Stack percentages by multiplying them in sequence; never add percents.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-390', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In a sample of $500$ households, $65\\%$ have internet access. Of those with internet, $80\\%$ subscribe to a streaming service. How many households in the sample subscribe to a streaming service?',
    choices: [{ id: 'A', text: '$260$' }, { id: 'B', text: '$325$' }, { id: 'C', text: '$400$' }, { id: 'D', text: '$208$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Internet households: $500 \\times 0.65 = 325$. Streaming: $325 \\times 0.80 = 260$.\n\n**The Full Solution:**\nStep 1: $65\\%$ of $500$ have internet: $500 \\times 0.65 = 325$.\nStep 2: The $80\\%$ applies only to that subset: $325 \\times 0.80 = 260$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($325$): stops at the internet count.\n* Choice C ($400$): computes $500 \\times 0.80$, applying the second percent to the full sample.\n* Choice D ($208$): applies the $80\\%$ a second time ($260 \\times 0.80 = 208$) instead of stopping at $260$.\n\n**Test Day Takeaway:** \"Of those who...\" is the conditional flag — multiply the second percent by the SUBSET, not the original total.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-391', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A store has $800$ customers. $25\\%$ are loyalty members. Of the loyalty members, $60\\%$ shop weekly. How many of the store\'s customers are loyalty members who shop weekly?',
    choices: [{ id: 'A', text: '$120$' }, { id: 'B', text: '$200$' }, { id: 'C', text: '$480$' }, { id: 'D', text: '$340$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Chain the percents: $800 \\times 0.25 \\times 0.60 = 120$.\n\n**The Full Solution:**\nStep 1: Loyalty members: $800 \\times 0.25 = 200$.\nStep 2: Of those, weekly shoppers: $200 \\times 0.60 = 120$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($200$): stops at the loyalty-member count.\n* Choice C ($480$): computes $800 \\times 0.60$, applying the second percent to all customers.\n* Choice D ($340$): adds rather than multiplies the layers.\n\n**Test Day Takeaway:** Two conditional layers multiply together: total $\\times p_1 \\times p_2$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-392', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A company has $150$ employees. $40\\%$ work remotely. Of the remote employees, $70\\%$ have employer-provided laptops. How many of the company\'s employees are remote workers with employer-provided laptops?',
    choices: [{ id: 'A', text: '$42$' }, { id: 'B', text: '$60$' }, { id: 'C', text: '$105$' }, { id: 'D', text: '$110$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $150 \\times 0.40 \\times 0.70 = 42$.\n\n**The Full Solution:**\nStep 1: Remote employees: $150 \\times 0.40 = 60$.\nStep 2: Of those, with employer laptops: $60 \\times 0.70 = 42$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($60$): stops at the remote-worker count.\n* Choice C ($105$): computes $150 \\times 0.70$, applying the second percent to all employees.\n* Choice D ($110$): adds instead of multiplying the layers.\n\n**Test Day Takeaway:** Each conditional layer multiplies through — find the subset first, then apply the next percent.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-393', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In a city, $40\\%$ of voters are registered as independents. Of registered independents, $55\\%$ voted in the most recent primary. If $1{,}100$ independents voted in the primary, how many total registered voters are in the city?',
    choices: [{ id: 'A', text: '$5{,}000$' }, { id: 'B', text: '$2{,}000$' }, { id: 'C', text: '$10{,}000$' }, { id: 'D', text: '$2{,}750$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The voters who hit both conditions are $0.40 \\times 0.55 = 0.22$ of the total. So $0.22\\,T = 1100 \\Rightarrow T = \\frac{1100}{0.22} = 5000$.\n\n**The Full Solution:**\nStep 1: Independents who voted are $40\\%$ of $55\\%$ of the total: $0.40 \\times 0.55\\,T = 0.22\\,T$.\nStep 2: Set that equal to the known count: $0.22\\,T = 1100$.\nStep 3: Solve: $T = \\frac{1100}{0.22} = 5000$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2000$): divides by $0.55$ only, skipping the independent fraction.\n* Choice C ($10000$): divides $1100$ by $0.11$, halving the combined rate.\n* Choice D ($2750$): divides by $0.40$ only, skipping the turnout rate.\n\n**Test Day Takeaway:** When you are given the end count and asked for the start, combine the percents, then DIVIDE.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- finding-a-missing-value-given-the-mean (4 → 10) ---
  { id: 'bank-ps-394', domain: 'problem-solving', skills: ['calculate-mean'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The mean of $5$ numbers is $14$. Four of the numbers are $10$, $12$, $15$, and $18$. What is the fifth number?',
    choices: [{ id: 'A', text: '$15$' }, { id: 'B', text: '$14$' }, { id: 'C', text: '$55$' }, { id: 'D', text: '$70$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Total must be $5 \\times 14 = 70$. The four given numbers sum to $55$, so the fifth is $70-55 = 15$.\n\n**The Full Solution:**\nStep 1: Mean $\\times$ count $=$ sum, so the five numbers total $5 \\times 14 = 70$.\nStep 2: The given four sum to $10+12+15+18 = 55$.\nStep 3: The missing number is $70-55 = 15$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($14$): copies the mean instead of solving for the missing value.\n* Choice C ($55$): returns the sum of the four given numbers.\n* Choice D ($70$): returns the required total of all five.\n\n**Test Day Takeaway:** Convert the mean to a total ($n \\times \\bar{x}$) first, then subtract the known sum to isolate the unknown.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'finding-a-missing-value-given-the-mean', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-395', domain: 'problem-solving', skills: ['calculate-mean'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The mean of $7$ numbers is $20$. Six of the numbers sum to $130$. What is the seventh number?',
    choices: [{ id: 'A', text: '$10$' }, { id: 'B', text: '$20$' }, { id: 'C', text: '$140$' }, { id: 'D', text: '$13$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Total must be $7 \\times 20 = 140$. The six known numbers sum to $130$, so the seventh is $140-130 = 10$.\n\n**The Full Solution:**\nStep 1: Mean $\\times$ count $=$ sum: $7 \\times 20 = 140$.\nStep 2: The other six already sum to $130$.\nStep 3: The seventh number is $140-130 = 10$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($20$): copies the mean.\n* Choice C ($140$): returns the total of all seven.\n* Choice D ($13$): computes $\\frac{130}{10}$, an unrelated quotient.\n\n**Test Day Takeaway:** When the sum of the others is handed to you, subtract it directly from $n \\times \\bar{x}$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'finding-a-missing-value-given-the-mean', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-396', domain: 'problem-solving', skills: ['calculate-mean'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A student\'s mean score on four quizzes is $85$. The first three scores are $80$, $92$, and $78$. What is the fourth score?',
    choices: [{ id: 'A', text: '$90$' }, { id: 'B', text: '$85$' }, { id: 'C', text: '$83$' }, { id: 'D', text: '$95$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Total must be $4 \\times 85 = 340$. The first three sum to $250$, so the fourth is $340-250 = 90$.\n\n**The Full Solution:**\nStep 1: Mean $\\times$ count $=$ sum: $4 \\times 85 = 340$.\nStep 2: The given three sum to $80+92+78 = 250$.\nStep 3: The fourth score is $340-250 = 90$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($85$): copies the mean.\n* Choice C ($83$): arithmetic slip on the known sum.\n* Choice D ($95$): overshoots the subtraction.\n\n**Test Day Takeaway:** Turn the mean into a total first, then subtract the known scores to find the missing one.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'finding-a-missing-value-given-the-mean', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-397', domain: 'problem-solving', skills: ['calculate-mean'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The mean of $6$ numbers is $12$. After one of the numbers is removed, the mean of the remaining $5$ numbers is $14$. What is the value of the removed number?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$70$' }, { id: 'D', text: '$10$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Original sum: $72$. New sum: $70$. Removed: $72 - 70 = 2$.\n\n**Why the wrong answers are tempting:**\n* B: copies the mean.\n* C: returns new sum.\n* D: $70 - 60$.\n\n**Test Day Takeaway:** Removed value = (original sum) − (new sum). Both come from mean × count.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'finding-a-missing-value-given-the-mean', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-398', domain: 'problem-solving', skills: ['calculate-mean'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A set of $8$ numbers has a mean of $25$. After a $9$th number is added, the mean becomes $26$. What is the value of the $9$th number?',
    choices: [{ id: 'A', text: '$34$' }, { id: 'B', text: '$26$' }, { id: 'C', text: '$200$' }, { id: 'D', text: '$50$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Original sum: $8 \\times 25 = 200$. New sum: $9 \\times 26 = 234$. Added value: $234 - 200 = 34$.\n\n**Why the wrong answers are tempting:**\n* B: copies the new mean.\n* C: returns the original sum.\n* D: $200/4$.\n\n**Test Day Takeaway:** Added value = (new sum) − (old sum).',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'finding-a-missing-value-given-the-mean', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-399', domain: 'problem-solving', skills: ['calculate-mean'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A set of $n$ numbers has mean $30$. When the value $60$ is added to the set, the new mean is $33$. What is the value of $n$?',
    choices: [{ id: 'A', text: '$9$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Old sum $= 30n$. New sum $= 30n + 60 = 33(n + 1)$. So $30n + 60 = 33n + 33 \\Rightarrow 3n = 27 \\Rightarrow n = 9$.\n\n**Why the wrong answers are tempting:**\n* B/C: off-by-one when setting up the new count.\n* D: $27/9$.\n\n**Test Day Takeaway:** Set up sum-equations for old and new, equate.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'finding-a-missing-value-given-the-mean', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- marginal-probability (4 → 10) ---
  { id: 'bank-ps-400', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A survey of $200$ students found that $120$ play a sport and $80$ do not. If a student is selected at random, what is the probability that the student plays a sport?',
    choices: [{ id: 'A', text: '$\\dfrac{3}{5}$' }, { id: 'B', text: '$\\dfrac{2}{5}$' }, { id: 'C', text: '$\\dfrac{3}{2}$' }, { id: 'D', text: '$\\dfrac{1}{3}$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Marginal Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $120/200 = 3/5$.\n\n**Why the wrong answers are tempting:**\n* B: gives $P(\\text{does not})$.\n* C: inverts.\n* D: $120/360$ or similar.\n\n**Test Day Takeaway:** Marginal probability = (count in the category) / (TOTAL).',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-401', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'In a workplace of $300$ employees, $180$ take public transit to work and $120$ drive. If an employee is selected at random, what is the probability that the employee drives?',
    choices: [{ id: 'A', text: '$\\dfrac{2}{5}$' }, { id: 'B', text: '$\\dfrac{3}{5}$' }, { id: 'C', text: '$\\dfrac{2}{3}$' }, { id: 'D', text: '$\\dfrac{1}{2}$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Marginal Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $120/300 = 2/5$.\n\n**Why the wrong answers are tempting:**\n* B: gives $P(\\text{transit})$.\n* C/D: random fractions.\n\n**Test Day Takeaway:** Identify the category of interest, divide by the TOTAL.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-402', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Of $500$ households surveyed, $250$ own a pet, $200$ have a yard, and $150$ have both. If a household is selected at random, what is the probability that it owns a pet?',
    choices: [{ id: 'A', text: '$\\dfrac{1}{2}$' }, { id: 'B', text: '$\\dfrac{2}{5}$' }, { id: 'C', text: '$\\dfrac{3}{10}$' }, { id: 'D', text: '$\\dfrac{3}{5}$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Marginal Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $250/500 = 1/2$.\n\n**Why the wrong answers are tempting:**\n* B: gives $P(\\text{yard})$.\n* C: $P(\\text{both})$.\n* D: random.\n\n**Test Day Takeaway:** "Owns a pet" is the row marginal — divide that row count by the GRAND TOTAL. Ignore the overlap details for a marginal question.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-403', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Of $400$ voters surveyed, $240$ are women and $160$ are men. If a voter is selected at random, what is the probability that the voter is a man?',
    choices: [{ id: 'A', text: '$\\dfrac{2}{5}$' }, { id: 'B', text: '$\\dfrac{3}{5}$' }, { id: 'C', text: '$\\dfrac{2}{3}$' }, { id: 'D', text: '$\\dfrac{4}{5}$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Marginal Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $160/400 = 2/5$.\n\n**Why the wrong answers are tempting:**\n* B: $P(\\text{woman})$.\n* C: $160/240$.\n* D: random.\n\n**Test Day Takeaway:** Marginal probability ignores subcategories.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-404', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'easy', type: 'multiple-choice',
    question: '$250$ students were asked about lunch: $100$ buy school lunch and $150$ bring lunch from home. If a student is selected at random, what is the probability that the student buys school lunch?',
    choices: [{ id: 'A', text: '$\\dfrac{2}{5}$' }, { id: 'B', text: '$\\dfrac{3}{5}$' }, { id: 'C', text: '$\\dfrac{2}{3}$' }, { id: 'D', text: '$\\dfrac{1}{2}$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Marginal Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $100/250 = 2/5$.\n\n**Why the wrong answers are tempting:**\n* B: gives the other category.\n* C: $100/150$.\n* D: random.\n\n**Test Day Takeaway:** Always divide by the GRAND TOTAL for marginal probability.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-405', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A class of $30$ students includes $18$ who take Spanish and $15$ who take French. If $12$ students take neither language, what is the probability that a randomly chosen student takes ONLY Spanish?',
    choices: [{ id: 'A', text: '$\\dfrac{1}{10}$' }, { id: 'B', text: '$\\dfrac{3}{5}$' }, { id: 'C', text: '$\\dfrac{1}{2}$' }, { id: 'D', text: '$\\dfrac{1}{3}$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Marginal Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** At least one language: $30 - 12 = 18$. By inclusion-exclusion: $18 + 15 -$ both $= 18 \\Rightarrow$ both $= 15$. So only Spanish $= 18 - 15 = 3$. Probability: $3/30 = 1/10$.\n\n**Why the wrong answers are tempting:**\n* B: $P(\\text{Spanish})$.\n* C: $P(\\text{Spanish or French})/30$.\n* D: random.\n\n**Test Day Takeaway:** "Only Spanish" = Spanish $-$ both. Compute the overlap first.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- percent-decrease (4 → 10) ---
  { id: 'bank-ps-406', domain: 'problem-solving', skills: ['percent-change'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A price dropped from $\\$50$ to $\\$35$. What is the percent decrease?',
    choices: [{ id: 'A', text: '$30\\%$' }, { id: 'B', text: '$15\\%$' }, { id: 'C', text: '$70\\%$' }, { id: 'D', text: '$50\\%$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Decrease: $50 - 35 = 15$. Percent: $15/50 = 0.30 = 30\\%$.\n\n**Why the wrong answers are tempting:**\n* B: returns the raw decrease.\n* C: $35/50$ (the remaining fraction).\n* D: copies the original.\n\n**Test Day Takeaway:** % decrease = (original $-$ new) / ORIGINAL × $100$.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-decrease', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-407', domain: 'problem-solving', skills: ['percent-change'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A town\'s population dropped from $1{,}200$ to $900$ in one year. What is the percent decrease?',
    choices: [{ id: 'A', text: '$25\\%$' }, { id: 'B', text: '$75\\%$' }, { id: 'C', text: '$33\\%$' }, { id: 'D', text: '$300\\%$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $300/1200 = 0.25 = 25\\%$.\n\n**Why the wrong answers are tempting:**\n* B: $900/1200$.\n* C: $300/900$ (uses new instead of original).\n* D: $300$ unscaled.\n\n**Test Day Takeaway:** Divide by ORIGINAL, not by new.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-decrease', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-408', domain: 'problem-solving', skills: ['percent-change'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A jacket priced at $\\$80$ is on sale for $\\$60$. By what percent has the price been reduced?',
    choices: [{ id: 'A', text: '$25\\%$' }, { id: 'B', text: '$20\\%$' }, { id: 'C', text: '$75\\%$' }, { id: 'D', text: '$33\\%$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $20/80 = 25\\%$.\n\n**Why the wrong answers are tempting:**\n* B: returns the raw decrease.\n* C: $60/80$.\n* D: $20/60$.\n\n**Test Day Takeaway:** Always check: the percent should be relative to the LARGER (original) price.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-decrease', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-409', domain: 'problem-solving', skills: ['percent-change'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A value dropped from $500$ to $425$. What is the percent decrease?',
    choices: [{ id: 'A', text: '$15\\%$' }, { id: 'B', text: '$85\\%$' }, { id: 'C', text: '$17.6\\%$' }, { id: 'D', text: '$75\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The drop is $500-425=75$, and percent decrease divides by the original: $\\frac{75}{500}=0.15=15\\%$.\n\n**The Full Solution:**\nStep 1: Find the change: $500-425=75$.\nStep 2: Divide by the ORIGINAL value: $\\frac{75}{500}=0.15$.\nStep 3: Convert to a percent: $0.15=15\\%$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($85\\%$): computed $\\frac{425}{500}$ — the fraction that remains, not the fraction lost.\n* Choice C ($17.6\\%$): divided by the new value $\\frac{75}{425}$ instead of the original.\n* Choice D ($75\\%$): mistook the raw decrease of $75$ for the percent.\n\n**Test Day Takeaway:** Percent change always divides the change by the ORIGINAL amount, never the new amount.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-decrease', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-410', domain: 'problem-solving', skills: ['percent-change'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A factory reduced its output from $2{,}400$ units per day to $2{,}040$ units per day. What is the percent decrease in daily output?',
    choices: [{ id: 'A', text: '$15\\%$' }, { id: 'B', text: '$17.6\\%$' }, { id: 'C', text: '$85\\%$' }, { id: 'D', text: '$36\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The drop is $2400-2040=360$, so the percent decrease is $\\frac{360}{2400}=0.15=15\\%$.\n\n**The Full Solution:**\nStep 1: Find the change: $2400-2040=360$ units.\nStep 2: Divide by the ORIGINAL output: $\\frac{360}{2400}=0.15$.\nStep 3: Convert: $0.15=15\\%$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($17.6\\%$): divided by the new value $\\frac{360}{2040}$ instead of the original.\n* Choice C ($85\\%$): computed $\\frac{2040}{2400}$ — the fraction that remains, not the fraction lost.\n* Choice D ($36\\%$): dropped a decimal place from the raw change.\n\n**Test Day Takeaway:** For percent decrease, put the original (the bigger, earlier number) in the denominator every time.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-decrease', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-411', domain: 'problem-solving', skills: ['percent-change'], difficulty: 'hard', type: 'multiple-choice',
    question: 'An asset\'s value decreased by $20\\%$ from year 1 to year 2, then decreased by another $25\\%$ from year 2 to year 3. What is the total percent decrease from year 1 to year 3?',
    choices: [{ id: 'A', text: '$40\\%$' }, { id: 'B', text: '$45\\%$' }, { id: 'C', text: '$50\\%$' }, { id: 'D', text: '$30\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Chain the multipliers: a $20\\%$ drop keeps $0.80$, a $25\\%$ drop keeps $0.75$, so $0.80\\times0.75=0.60$ remains. The total decrease is $1-0.60=0.40=40\\%$.\n\n**The Full Solution:**\nStep 1: A $20\\%$ decrease multiplies the value by $1-0.20=0.80$.\nStep 2: A further $25\\%$ decrease multiplies by $1-0.25=0.75$.\nStep 3: Combined factor: $0.80\\times0.75=0.60$, so $60\\%$ remains.\nStep 4: Total decrease: $1-0.60=0.40=40\\%$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($45\\%$): simply added the two percents, $20+25$, ignoring that the second cut applies to a smaller base.\n* Choice C ($50\\%$): a round guess with no basis in the multipliers.\n* Choice D ($30\\%$): averaged the two percents.\n\n**Test Day Takeaway:** Successive percent changes multiply as decimal factors; they never add.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-decrease', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- percent-of-a-number (4 → 10) ---
  { id: 'bank-ps-412', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is $35\\%$ of $80$?',
    choices: [{ id: 'A', text: '$28$' }, { id: 'B', text: '$56$' }, { id: 'C', text: '$45$' }, { id: 'D', text: '$2.8$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Convert and multiply: $0.35\\times80=28$.\n\n**The Full Solution:**\nStep 1: Write $35\\%$ as the decimal $0.35$.\nStep 2: Multiply by $80$: $0.35\\times80=28$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($56$): used $0.70$ ($70\\%$), doubling the percent.\n* Choice C ($45$): subtracted $80-35$ instead of taking a percent.\n* Choice D ($2.8$): used $0.035$ — a misplaced decimal point.\n\n**Test Day Takeaway:** \"$X\\%$ of $Y$\" means $\\frac{X}{100}\\times Y$ — convert the percent to a decimal first.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-413', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is $12\\%$ of $250$?',
    choices: [{ id: 'A', text: '$30$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$300$' }, { id: 'D', text: '$238$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $0.12\\times250=30$.\n\n**The Full Solution:**\nStep 1: Write $12\\%$ as $0.12$.\nStep 2: Multiply by $250$: $0.12\\times250=30$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): a misplaced decimal — used $0.012$.\n* Choice C ($300$): dropped the decimal entirely, treating $12\\%$ as $1.2$.\n* Choice D ($238$): subtracted $250-12$ instead of taking a percent.\n\n**Test Day Takeaway:** A quick check: $10\\%$ of $250$ is $25$, and $2\\%$ more adds $5$, giving $30$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-414', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is $6\\%$ of $\\$45$?',
    choices: [{ id: 'A', text: '$\\$2.70$' }, { id: 'B', text: '$\\$27.00$' }, { id: 'C', text: '$\\$0.27$' }, { id: 'D', text: '$\\$42.30$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $0.06\\times45=2.70$, so the answer is $\\$2.70$.\n\n**The Full Solution:**\nStep 1: Write $6\\%$ as $0.06$.\nStep 2: Multiply by $\\$45$: $0.06\\times45=2.70$, which is choice A, $\\$2.70$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$27.00$): a decimal slip — multiplied by $10$.\n* Choice C ($\\$0.27$): a decimal slip the other way — divided by $10$.\n* Choice D ($\\$42.30$): computed $\\$45-\\$2.70$, the amount left after the percent.\n\n**Test Day Takeaway:** Track the decimal carefully — $6\\%=0.06$, not $0.6$ or $0.006$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-415', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is $110\\%$ of $80$?',
    choices: [{ id: 'A', text: '$88$' }, { id: 'B', text: '$8.8$' }, { id: 'C', text: '$72$' }, { id: 'D', text: '$880$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $1.10\\times80=88$.\n\n**The Full Solution:**\nStep 1: Write $110\\%$ as $1.10$.\nStep 2: Multiply by $80$: $1.10\\times80=88$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($8.8$): a misplaced decimal — used $0.11$.\n* Choice C ($72$): subtracted $10\\%$ of $80$ instead of adding the extra.\n* Choice D ($880$): forgot to convert, treating $110\\%$ as the factor $11$.\n\n**Test Day Takeaway:** A percent above $100\\%$ produces a result larger than the original number.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-416', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is $0.5\\%$ of $4{,}000$?',
    choices: [{ id: 'A', text: '$20$' }, { id: 'B', text: '$200$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$2{,}000$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $0.5\\%=0.005$, so $0.005\\times4000=20$.\n\n**The Full Solution:**\nStep 1: Convert $0.5\\%$ to a decimal by dividing by $100$: $0.5\\div100=0.005$.\nStep 2: Multiply by $4000$: $0.005\\times4000=20$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($200$): used $0.05$ ($5\\%$) instead of $0.005$.\n* Choice C ($2$): a decimal slip one place too far.\n* Choice D ($2000$): used $0.5$ ($50\\%$) instead of $0.5\\%$.\n\n**Test Day Takeaway:** $0.5\\%\\neq0.5$ — to turn a percent into a decimal, divide by $100$, so $0.5\\%=0.005$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-417', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'On a survey of $250$ students, $24\\%$ chose option A and $16\\%$ chose option B. How many more students chose A than B?',
    choices: [{ id: 'A', text: '$20$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$60$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** A is $8\\%$ more of the total than B, so $(0.24-0.16)\\times250=0.08\\times250=20$.\n\n**The Full Solution:**\nStep 1: Students choosing A: $0.24\\times250=60$.\nStep 2: Students choosing B: $0.16\\times250=40$.\nStep 3: Difference: $60-40=20$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($10$): half of the correct difference.\n* Choice C ($8$): reported the difference in percents ($24-16$) instead of in counts.\n* Choice D ($60$): gave the count for option A alone, not the difference.\n\n**Test Day Takeaway:** \"How many more X than Y\" asks for a difference of counts — take the percent difference of the total, or subtract the two counts.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- percent-of-a-whole (4 → 10) ---
  { id: 'bank-ps-418', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'easy', type: 'multiple-choice',
    question: '$42$ is what percent of $84$?',
    choices: [{ id: 'A', text: '$50\\%$' }, { id: 'B', text: '$200\\%$' }, { id: 'C', text: '$42\\%$' }, { id: 'D', text: '$84\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $\\frac{42}{84}=\\frac{1}{2}=50\\%$.\n\n**The Full Solution:**\nStep 1: \"What percent of $84$\" puts $84$ in the denominator: $\\frac{42}{84}$.\nStep 2: Simplify: $\\frac{42}{84}=0.50$.\nStep 3: Convert: $0.50=50\\%$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($200\\%$): inverted the ratio to $\\frac{84}{42}$.\n* Choice C ($42\\%$): copied the part instead of computing the ratio.\n* Choice D ($84\\%$): copied the whole instead of computing the ratio.\n\n**Test Day Takeaway:** \"$A$ is what percent of $B$\" means $\\frac{A}{B}\\times100$ — the \"of\" number goes in the denominator.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-whole', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-419', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'easy', type: 'multiple-choice',
    question: '$18$ is what percent of $60$?',
    choices: [{ id: 'A', text: '$30\\%$' }, { id: 'B', text: '$3\\%$' }, { id: 'C', text: '$42\\%$' }, { id: 'D', text: '$300\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $\\frac{18}{60}=0.30=30\\%$.\n\n**The Full Solution:**\nStep 1: \"What percent of $60$\" puts $60$ in the denominator: $\\frac{18}{60}$.\nStep 2: Divide: $\\frac{18}{60}=0.30$.\nStep 3: Convert: $0.30=30\\%$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3\\%$): a decimal slip — used $0.03$.\n* Choice C ($42\\%$): took the complement, $60-18=42$, as a percent.\n* Choice D ($300\\%$): inverted the ratio to roughly $\\frac{60}{18}$.\n\n**Test Day Takeaway:** The number after \"of\" is the whole and belongs in the denominator.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-whole', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-420', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'easy', type: 'multiple-choice',
    question: '$15$ is what percent of $25$?',
    choices: [{ id: 'A', text: '$60\\%$' }, { id: 'B', text: '$40\\%$' }, { id: 'C', text: '$15\\%$' }, { id: 'D', text: '$166\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $\\frac{15}{25}=\\frac{3}{5}=60\\%$.\n\n**The Full Solution:**\nStep 1: \"What percent of $25$\" puts $25$ in the denominator: $\\frac{15}{25}$.\nStep 2: Simplify by dividing top and bottom by $5$: $\\frac{15}{25}=\\frac{3}{5}$.\nStep 3: Convert: $\\frac{3}{5}=0.60=60\\%$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($40\\%$): took the complement, $\\frac{25-15}{25}=\\frac{10}{25}$.\n* Choice C ($15\\%$): copied the part instead of computing the ratio.\n* Choice D ($166\\%$): inverted the ratio to $\\frac{25}{15}$.\n\n**Test Day Takeaway:** Simplify the fraction first — $\\frac{3}{5}$ is instantly $60\\%$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-whole', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-421', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A student answered $27$ of $30$ quiz questions correctly. What percent of the quiz questions did the student answer correctly?',
    choices: [{ id: 'A', text: '$90\\%$' }, { id: 'B', text: '$27\\%$' }, { id: 'C', text: '$10\\%$' }, { id: 'D', text: '$3\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $\\frac{27}{30} = 0.90 = 90\\%$.\n\n**The Full Solution:**\nStep 1: The part is the number answered correctly, $27$; the whole is the total number of questions, $30$.\nStep 2: Divide: $\\frac{27}{30} = 0.90$.\nStep 3: Convert to a percent: $0.90 = 90\\%$, choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($27\\%$): copies the part, $27$, as a percent.\n* Choice C ($10\\%$): the percent missed ($\\frac{3}{30}$), not the percent correct.\n* Choice D ($3\\%$): copies the difference, $30 - 27 = 3$, as a percent.\n\n**Test Day Takeaway:** Percent correct $= \\frac{\\text{part}}{\\text{whole}} \\times 100$. The whole is the total count, not the part.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-whole', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-422', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Of $80$ items sold by a shop, $60$ were defective and were returned. What percent of the items sold were NOT defective?',
    choices: [{ id: 'A', text: '$25\\%$' }, { id: 'B', text: '$75\\%$' }, { id: 'C', text: '$20\\%$' }, { id: 'D', text: '$60\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Non-defective count is $80 - 60 = 20$, so $\\frac{20}{80} = 25\\%$.\n\n**The Full Solution:**\nStep 1: \"NOT defective\" is the complement: $80 - 60 = 20$ items.\nStep 2: Take that part over the whole: $\\frac{20}{80} = \\frac{1}{4}$.\nStep 3: Convert: $\\frac{1}{4} = 25\\%$, choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($75\\%$): the percent that WERE defective, $\\frac{60}{80}$ — answered the wrong question.\n* Choice C ($20\\%$): used the raw count $20$ as a percent instead of dividing by $80$.\n* Choice D ($60\\%$): copies the defective count, $60$, as a percent.\n\n**Test Day Takeaway:** When a question says \"NOT,\" find the complementary count first, then take its percent of the whole.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-whole', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-423', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A jacket is sold at $60\\%$ off its original price of $\\$120$. The sale price is what percent of the original?',
    choices: [{ id: 'A', text: '$40\\%$' }, { id: 'B', text: '$60\\%$' }, { id: 'C', text: '$48\\%$' }, { id: 'D', text: '$72\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** \"$60\\%$ off\" means you pay $100\\% - 60\\% = 40\\%$ of the original, choice A.\n\n**The Full Solution:**\nStep 1: A discount of $60\\%$ removes $60\\%$ of the price, leaving the rest.\nStep 2: Remaining fraction: $100\\% - 60\\% = 40\\%$.\nStep 3: Check with the numbers: $40\\%$ of $\\$120$ is $\\$48$, and $\\frac{\\$48}{\\$120} = 40\\%$, choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($60\\%$): copies the discount instead of the fraction paid.\n* Choice C ($48\\%$): mistakes the sale price in dollars ($\\$48$) for a percent.\n* Choice D ($72\\%$): adds rather than subtracts, $60\\% + 12\\%$ style error.\n\n**Test Day Takeaway:** \"$X\\%$ off\" leaves $(100 - X)\\%$ of the original price.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-whole', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- proportion-ratio (4 → 10) ---
  { id: 'bank-ps-424', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $3$ apples cost $\\$5$, what is the cost of $12$ apples at the same rate?',
    choices: [{ id: 'A', text: '$\\$20$' }, { id: 'B', text: '$\\$15$' }, { id: 'C', text: '$\\$25$' }, { id: 'D', text: '$\\$60$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Proportion Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $12$ apples is $\\frac{12}{3} = 4$ times as many, so the cost is $4 \\times \\$5 = \\$20$, choice A.\n\n**The Full Solution:**\nStep 1: Find the scale between known and unknown: $\\frac{12}{3} = 4$.\nStep 2: The cost scales by the same factor: $4 \\times \\$5 = \\$20$, choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$15$): multiplied the apple count $3$ by $5$ instead of scaling.\n* Choice C ($\\$25$): used $5 \\times 5$ — wrong factor.\n* Choice D ($\\$60$): multiplied $12 \\times 5$, ignoring that $5$ is the price of $3$ apples.\n\n**Test Day Takeaway:** Find the scale between the known and unknown quantities, then multiply the price by that same scale.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'proportion-ratio', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-425', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A car travels at $60$ miles per hour. Approximately how many feet per second is this rate? (Use $1$ mile $= 5{,}280$ feet.)',
    choices: [{ id: 'A', text: '$88$' }, { id: 'B', text: '$60$' }, { id: 'C', text: '$5{,}280$' }, { id: 'D', text: '$30$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Proportion Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $60 \\cdot \\frac{5280 \\text{ ft}}{1 \\text{ mi}} \\cdot \\frac{1 \\text{ hr}}{3600 \\text{ s}} = \\frac{316{,}800}{3600} = 88$ ft/s, choice A.\n\n**The Full Solution:**\nStep 1: Start with $60$ miles per hour.\nStep 2: Convert miles to feet: $60 \\times 5{,}280 = 316{,}800$ feet per hour.\nStep 3: Convert hours to seconds: $\\frac{316{,}800}{3600} = 88$ feet per second, choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($60$): copies the miles-per-hour value without converting.\n* Choice C ($5{,}280$): copies the feet-per-mile conversion factor.\n* Choice D ($30$): half of the mph value — an unjustified shortcut.\n\n**Test Day Takeaway:** Chain conversion factors so the unwanted units cancel: $\\frac{\\text{mi}}{\\text{hr}} \\cdot \\frac{\\text{ft}}{\\text{mi}} \\cdot \\frac{\\text{hr}}{\\text{s}}$ leaves $\\frac{\\text{ft}}{\\text{s}}$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'proportion-ratio', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-426', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $4$ pounds of coffee make $80$ cups of coffee, how many cups can be made from $10$ pounds at the same rate?',
    choices: [{ id: 'A', text: '$200$' }, { id: 'B', text: '$320$' }, { id: 'C', text: '$160$' }, { id: 'D', text: '$50$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Proportion Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Each pound makes $\\frac{80}{4} = 20$ cups, so $10 \\times 20 = 200$, choice A.\n\n**The Full Solution:**\nStep 1: Find the per-pound rate: $\\frac{80 \\text{ cups}}{4 \\text{ lb}} = 20$ cups per pound.\nStep 2: Scale to $10$ pounds: $10 \\times 20 = 200$ cups, choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($320$): computed $80 \\times 4$ — multiplied the cups by the pounds instead of finding the rate.\n* Choice C ($160$): used $20 \\times 8$ — wrong number of pounds.\n* Choice D ($50$): used $10 \\times 5$ — invented a rate of $5$ cups per pound.\n\n**Test Day Takeaway:** Find the per-unit rate first ($\\frac{80}{4} = 20$ cups per pound), then multiply by the new amount.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'proportion-ratio', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-427', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A recipe calls for $2$ cups of flour to make $12$ cookies. How many cups of flour are needed to make $30$ cookies at the same ratio?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$15$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Proportion Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Set up $\\frac{2}{12} = \\frac{x}{30}$, so $x = \\frac{2 \\times 30}{12} = 5$, choice A.\n\n**The Full Solution:**\nStep 1: Write the proportion of flour to cookies: $\\frac{2}{12} = \\frac{x}{30}$.\nStep 2: Cross-multiply: $12x = 2 \\times 30 = 60$.\nStep 3: Solve: $x = \\frac{60}{12} = 5$ cups, choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): computed $\\frac{30}{5}$ — a stray division that ignores the ratio.\n* Choice C ($3$): added $2 + 1$, a mis-arithmetic shortcut.\n* Choice D ($15$): computed $\\frac{30}{2}$, forgetting the $12$-cookie base.\n\n**Test Day Takeaway:** Cross-multiply a proportion: $\\frac{a}{b} = \\frac{c}{d} \\Rightarrow ad = bc$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'proportion-ratio', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-428', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A car traveled $270$ miles in $5$ hours. At the same average rate, how many miles would the car travel in $8$ hours?',
    choices: [{ id: 'A', text: '$432$' }, { id: 'B', text: '$378$' }, { id: 'C', text: '$540$' }, { id: 'D', text: '$216$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Proportion Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Rate is $\\frac{270}{5} = 54$ mph, so $54 \\times 8 = 432$ miles, choice A.\n\n**The Full Solution:**\nStep 1: Find the average rate: $\\frac{270 \\text{ mi}}{5 \\text{ hr}} = 54$ mph.\nStep 2: Distance $=$ rate $\\times$ time: $54 \\times 8 = 432$ miles, choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($378$): an arithmetic slip, $54 \\times 7$ instead of $\\times 8$.\n* Choice C ($540$): computed $270 \\times 2$, treating $8$ hours as double $5$.\n* Choice D ($216$): computed $54 \\times 4$ — wrong number of hours.\n\n**Test Day Takeaway:** Distance $=$ rate $\\times$ time. Find the constant rate first, then scale by the new time.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'proportion-ratio', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-429', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A printer prints $90$ pages in $12$ minutes. At this rate, how many minutes will it take to print $270$ pages?',
    choices: [{ id: 'A', text: '$36$' }, { id: 'B', text: '$30$' }, { id: 'C', text: '$45$' }, { id: 'D', text: '$24$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Proportion Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $270$ pages is $\\frac{270}{90} = 3$ times as many, so $3 \\times 12 = 36$ minutes, choice A.\n\n**The Full Solution:**\nStep 1: Find the scale between the new and known job: $\\frac{270}{90} = 3$.\nStep 2: Time scales by the same factor: $3 \\times 12 = 36$ minutes, choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($30$): under-scaled the time, multiplying by $2.5$ instead of $3$.\n* Choice C ($45$): over-scaled, multiplying $12$ by $3.75$.\n* Choice D ($24$): multiplied $12$ by $2$, treating $270$ as double $90$.\n\n**Test Day Takeaway:** Scale the time by the same factor as the work: triple the pages means triple the minutes.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'proportion-ratio', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- residual (4 → 10) ---
  { id: 'bank-ps-430', domain: 'problem-solving', skills: ['calculate-mean', 'slope-intercept-form'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A linear model predicts $\\hat{y} = 4x + 3$. At $x = 5$, the actual observed value of $y$ is $28$. What is the value of $y - \\hat{y}$ at $x = 5$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$-5$' }, { id: 'C', text: '$23$' }, { id: 'D', text: '$28$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Predicted $\\hat{y} = 4(5) + 3 = 23$, so the residual is $28 - 23 = 5$, choice A.\n\n**The Full Solution:**\nStep 1: Plug $x = 5$ into the model: $\\hat{y} = 4(5) + 3 = 23$.\nStep 2: Residual $= y - \\hat{y} = 28 - 23 = 5$, choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-5$): computed $\\hat{y} - y$, reversing the subtraction order.\n* Choice C ($23$): stopped at the predicted value $\\hat{y}$.\n* Choice D ($28$): returned the observed value $y$ instead of the difference.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted. A positive residual means the model under-predicted.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'residual', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-431', domain: 'problem-solving', skills: ['calculate-mean', 'slope-intercept-form'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A linear model is given by $\\hat{y} = -2x + 10$. At $x = 3$, the observed value of $y$ is $2$. What is the value of $y - \\hat{y}$ at $x = 3$?',
    choices: [{ id: 'A', text: '$-2$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$-4$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Predicted $\\hat{y} = -2(3) + 10 = 4$, so $y - \\hat{y} = 2 - 4 = -2$, choice A.\n\n**The Full Solution:**\nStep 1: Plug $x = 3$ into the model: $\\hat{y} = -2(3) + 10 = 4$.\nStep 2: Residual $= y - \\hat{y} = 2 - 4 = -2$, choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): dropped the negative sign on the result.\n* Choice C ($4$): returned the predicted value $\\hat{y}$.\n* Choice D ($-4$): computed $\\hat{y} - y$, reversing the subtraction.\n\n**Test Day Takeaway:** A negative residual means the observed value sits BELOW the model's prediction.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'residual', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-432', domain: 'problem-solving', skills: ['calculate-mean', 'slope-intercept-form'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A linear model is given by $\\hat{y} = 1.5x + 8$. At $x = 10$, the actual observed value is $y = 20$. What is the value of $y - \\hat{y}$?',
    choices: [{ id: 'A', text: '$-3$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$23$' }, { id: 'D', text: '$15$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Predicted $\\hat{y} = 1.5(10) + 8 = 23$, so $y - \\hat{y} = 20 - 23 = -3$, choice A.\n\n**The Full Solution:**\nStep 1: Plug $x = 10$ into the model: $\\hat{y} = 1.5(10) + 8 = 15 + 8 = 23$.\nStep 2: Residual $= y - \\hat{y} = 20 - 23 = -3$, choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): dropped the negative sign on the result.\n* Choice C ($23$): stopped at the predicted value $\\hat{y}$.\n* Choice D ($15$): used only $1.5 \\times 10$, dropping the constant $+8$.\n\n**Test Day Takeaway:** Compute $\\hat{y}$ in full first, then subtract it from the observed $y$ — and keep the sign.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'residual', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-433', domain: 'problem-solving', skills: ['calculate-mean', 'slope-intercept-form'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A model predicts $\\hat{y} = 17$ at $x = 4$. The actual observed value at $x = 4$ is $y = 22$. What is the value of $y - \\hat{y}$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$-5$' }, { id: 'C', text: '$17$' }, { id: 'D', text: '$22$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~3s):** $y - \\hat{y} = 22 - 17 = 5$.\n\n**Why the wrong answers are tempting:**\n* B: swaps order.\n* C: returns $\\hat{y}$.\n* D: returns $y$.\n\n**Test Day Takeaway:** Always actual MINUS predicted.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'residual', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-434', domain: 'problem-solving', skills: ['calculate-mean', 'slope-intercept-form'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For a particular data point, $y - \\hat{y} = -8$ where the observed value is $y = 22$. What is the value of $\\hat{y}$ at that point?',
    choices: [{ id: 'A', text: '$30$' }, { id: 'B', text: '$14$' }, { id: 'C', text: '$-8$' }, { id: 'D', text: '$22$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $\\hat{y} = y - (y - \\hat{y}) = 22 - (-8) = 30$.\n\n**Why the wrong answers are tempting:**\n* B: $y + (y - \\hat{y})$ direction wrong.\n* C/D: copies the given values.\n\n**Test Day Takeaway:** Rearrange: $\\hat{y} = y - $ residual.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'residual', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-435', domain: 'problem-solving', skills: ['calculate-mean', 'slope-intercept-form'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A linear model passes through the data values such that at $x = 2$, $\\hat{y} = 7$ and the actual $y = 5$. The model predicts $\\hat{y} = 10$ at $x = 4$, and the actual is $y = 11$. What is the sum of the two values of $y - \\hat{y}$?',
    choices: [{ id: 'A', text: '$-1$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$-3$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** At $x = 2$: $5 - 7 = -2$. At $x = 4$: $11 - 10 = 1$. Sum: $-1$.\n\n**Why the wrong answers are tempting:**\n* B: drops a sign.\n* C: adds absolute values.\n* D: subtracts absolute values.\n\n**Test Day Takeaway:** Track signs through each computation; sum them at the end.',
    calculatorAllowed: false, tags: [], sourceStyleRef: 'residual', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- reverse-percent (4 → 10) ---
  { id: 'bank-ps-436', domain: 'problem-solving', skills: ['percent-word-problems', 'percent-of-value'], difficulty: 'easy', type: 'multiple-choice',
    question: 'After a $20\\%$ discount, an item costs $\\$40$. What was the original price?',
    choices: [{ id: 'A', text: '$\\$50$' }, { id: 'B', text: '$\\$48$' }, { id: 'C', text: '$\\$60$' }, { id: 'D', text: '$\\$32$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Reverse Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $0.80 \\times \\text{original} = 40 \\Rightarrow \\text{original} = 40/0.80 = 50$.\n\n**Why the wrong answers are tempting:**\n* B: $40 \\times 1.20$ (wrong direction).\n* C: $40 + 20$.\n* D: $40 - 8$.\n\n**Test Day Takeaway:** "$X\\%$ off" leaves $(100 - X)\\%$ of original. Divide by that decimal to undo the discount.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-437', domain: 'problem-solving', skills: ['percent-word-problems', 'percent-of-value'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A bill including $25\\%$ tax totals $\\$75$. What was the bill before tax was added?',
    choices: [{ id: 'A', text: '$\\$60$' }, { id: 'B', text: '$\\$56$' }, { id: 'C', text: '$\\$50$' }, { id: 'D', text: '$\\$93.75$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Reverse Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $1.25 \\times \\text{original} = 75 \\Rightarrow \\text{original} = 75/1.25 = 60$.\n\n**Why the wrong answers are tempting:**\n* B: $75 - 19$.\n* C: $75 - 25$.\n* D: $75 \\times 1.25$ (wrong direction).\n\n**Test Day Takeaway:** Tax adds; divide by $(1 + r)$ to undo.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-438', domain: 'problem-solving', skills: ['percent-word-problems', 'percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A town\'s population grew by $15\\%$ to reach $11{,}500$ this year. What was the population last year?',
    choices: [{ id: 'A', text: '$10{,}000$' }, { id: 'B', text: '$9{,}775$' }, { id: 'C', text: '$13{,}225$' }, { id: 'D', text: '$9{,}500$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Reverse Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $1.15 \\times \\text{previous} = 11500 \\Rightarrow \\text{previous} = 11500/1.15 = 10000$.\n\n**Why the wrong answers are tempting:**\n* B: subtracts $15\\%$ from the new value.\n* C: $11500 \\times 1.15$.\n* D: $11500 - 2000$.\n\n**Test Day Takeaway:** Growth → divide by $(1 + r)$ to undo.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-439', domain: 'problem-solving', skills: ['percent-word-problems', 'percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'After a $30\\%$ increase, a value becomes $\\$260$. What was the original value?',
    choices: [{ id: 'A', text: '$\\$200$' }, { id: 'B', text: '$\\$182$' }, { id: 'C', text: '$\\$338$' }, { id: 'D', text: '$\\$230$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Reverse Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $260/1.30 = 200$.\n\n**Why the wrong answers are tempting:**\n* B: $260 \\times 0.70$.\n* C: $260 \\times 1.30$.\n* D: $260 - 30$.\n\n**Test Day Takeaway:** Compute via the multiplicative factor — never just add/subtract the rate to the final.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-440', domain: 'problem-solving', skills: ['percent-word-problems', 'percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'An account balance increased by $8\\%$ over the year to reach $\\$5{,}400$. What was the balance at the start of the year?',
    choices: [{ id: 'A', text: '$\\$5{,}000$' }, { id: 'B', text: '$\\$4{,}968$' }, { id: 'C', text: '$\\$5{,}832$' }, { id: 'D', text: '$\\$4{,}500$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Reverse Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $5400/1.08 = 5000$.\n\n**Why the wrong answers are tempting:**\n* B: $5400 - 8\\%$.\n* C: $5400 \\times 1.08$.\n* D: $5400 - 900$.\n\n**Test Day Takeaway:** When the rate is stated as a growth percent, the factor to divide by is $(1 + r)$.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-441', domain: 'problem-solving', skills: ['percent-word-problems', 'percent-of-value'], difficulty: 'hard', type: 'multiple-choice',
    question: 'After applying a $20\\%$ discount and then adding $8\\%$ sales tax, an item cost $\\$108$. What was the original price?',
    choices: [{ id: 'A', text: '$\\$125$' }, { id: 'B', text: '$\\$120$' }, { id: 'C', text: '$\\$135$' }, { id: 'D', text: '$\\$108$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Reverse Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $0.80 \\times 1.08 \\times \\text{original} = 108 \\Rightarrow 0.864 \\times \\text{original} = 108 \\Rightarrow \\text{original} = 125$.\n\n**Why the wrong answers are tempting:**\n* B: ignores tax.\n* C: ignores discount.\n* D: copies the final.\n\n**Test Day Takeaway:** Chain multiplicative factors, then divide once at the end.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- reverse-percent-multi-step (4 → 10) ---
  { id: 'bank-ps-442', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'An item is discounted $25\\%$, then discounted an additional $10\\%$ off the new price. After both discounts, the final price is $\\$54$. What was the original price?',
    choices: [{ id: 'A', text: '$\\$80$' }, { id: 'B', text: '$\\$72$' }, { id: 'C', text: '$\\$96$' }, { id: 'D', text: '$\\$66$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Reverse Percent Multi-Step**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $0.75 \\times 0.90 \\times \\text{original} = 54 \\Rightarrow 0.675 \\times \\text{original} = 54 \\Rightarrow \\text{original} = 80$.\n\n**Why the wrong answers are tempting:**\n* B/C/D: skip or misapply one factor.\n\n**Test Day Takeaway:** Multiply the two factors together, then divide the final by the product.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-percent-multi-step', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-443', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'An item is marked up $50\\%$, then discounted $20\\%$ off the marked-up price. After both changes, the price is $\\$108$. What was the original price?',
    choices: [{ id: 'A', text: '$\\$90$' }, { id: 'B', text: '$\\$120$' }, { id: 'C', text: '$\\$72$' }, { id: 'D', text: '$\\$135$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Reverse Percent Multi-Step**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $1.50 \\times 0.80 \\times \\text{original} = 108 \\Rightarrow 1.20 \\times \\text{original} = 108 \\Rightarrow \\text{original} = 90$.\n\n**Why the wrong answers are tempting:**\n* B/C/D: misapply or skip one factor.\n\n**Test Day Takeaway:** $1.50 \\times 0.80 = 1.20$ — equivalent to a single $20\\%$ markup overall.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-percent-multi-step', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-444', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A stock rose $20\\%$ one year and then fell $25\\%$ the next year. After both changes, the price is $\\$90$. What was the original price?',
    choices: [{ id: 'A', text: '$\\$100$' }, { id: 'B', text: '$\\$95$' }, { id: 'C', text: '$\\$120$' }, { id: 'D', text: '$\\$75$' }],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Reverse Percent Multi-Step**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $1.20 \\times 0.75 \\times \\text{original} = 90 \\Rightarrow 0.90 \\times \\text{original} = 90 \\Rightarrow \\text{original} = 100$.\n\n**Why the wrong answers are tempting:**\n* B/C/D: skip or misapply the factors.\n\n**Test Day Takeaway:** A rise and fall of equal percent do NOT cancel — there\'s always a net loss.',
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-percent-multi-step', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-445', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A salary increased by $10\\%$ at the start of one year, then by $8\\%$ at the start of the next year. After both raises, the salary is $\\$59{,}400$. What was the original salary?',
    choices: [{ id: 'A', text: '$\\$50{,}000$' }, { id: 'B', text: '$\\$54{,}000$' }, { id: 'C', text: '$\\$45{,}000$' }, { id: 'D', text: '$\\$48{,}500$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Reverse Percent Multi-Step**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Two raises compound: multiply by $1.10$ then $1.08$. So $1.10 \\times 1.08 = 1.188$ times the original equals $59{,}400$, and $\\frac{59{,}400}{1.188} = 50{,}000$.\n\n**The Full Solution:**\nStep 1: A $10\\%$ raise multiplies by $1.10$; an $8\\%$ raise multiplies by $1.08$.\nStep 2: Combine the factors: $1.10 \\times 1.08 = 1.188$.\nStep 3: Solve $1.188 \\cdot \\text{orig} = 59{,}400 \\Rightarrow \\text{orig} = \\frac{59{,}400}{1.188} = 50{,}000$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$54{,}000$): divided by only one factor, $\\frac{59{,}400}{1.10}$.\n* Choice C ($\\$45{,}000$): subtracted percents ($18\\%$) and worked backward incorrectly.\n* Choice D ($\\$48{,}500$): an arithmetic slip on the division.\n\n**Test Day Takeaway:** Successive percent raises multiply. Build the combined factor first, then divide the final amount by it to undo the increases.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-percent-multi-step', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-446', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A value increased by $10\\%$ each year for two consecutive years. After both increases, the value is $\\$363$. What was the original value?',
    choices: [{ id: 'A', text: '$\\$300$' }, { id: 'B', text: '$\\$330$' }, { id: 'C', text: '$\\$303$' }, { id: 'D', text: '$\\$290$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Reverse Percent Multi-Step**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Same rate twice means square the factor: $1.10^2 = 1.21$. Then $\\frac{363}{1.21} = 300$.\n\n**The Full Solution:**\nStep 1: A $10\\%$ increase multiplies by $1.10$ each year.\nStep 2: Two years: $1.10^2 = 1.21$.\nStep 3: Solve $1.21 \\cdot \\text{orig} = 363 \\Rightarrow \\text{orig} = \\frac{363}{1.21} = 300$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$330$): used only one year's growth, $\\frac{363}{1.10}$.\n* Choice C ($\\$303$): worked backward with $1.20$ instead of $1.21$, an arithmetic slip.\n* Choice D ($\\$290$): a rough estimate that ignores compounding.\n\n**Test Day Takeaway:** Two equal-rate periods square the growth factor. Divide the final value by $1.10^2$, not by $1.20$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-percent-multi-step', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-447', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'hard', type: 'multiple-choice',
    question: 'After a $20\\%$ discount and then a $15\\%$ sales tax, an item cost $\\$46$. What was the original price?',
    choices: [{ id: 'A', text: '$\\$50$' }, { id: 'B', text: '$\\$56.10$' }, { id: 'C', text: '$\\$48$' }, { id: 'D', text: '$\\$46$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Reverse Percent Multi-Step**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Discount then tax: $0.80 \\times 1.15 = 0.92$. So $\\frac{46}{0.92} = 50$, giving $\\$50$.\n\n**The Full Solution:**\nStep 1: A $20\\%$ discount multiplies by $0.80$; a $15\\%$ tax multiplies by $1.15$.\nStep 2: Combine: $0.80 \\times 1.15 = 0.92$.\nStep 3: Solve $0.92 \\cdot \\text{orig} = 46 \\Rightarrow \\text{orig} = \\frac{46}{0.92} = 50$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$56.10$): multiplied $46 \\times 1.22$ instead of dividing.\n* Choice C ($\\$48$): divided by $0.96$, treating the changes as additive ($-20\\% + 15\\% = -5\\%$).\n* Choice D ($\\$46$): copied the final price, forgetting to undo anything.\n\n**Test Day Takeaway:** Chain the factors as $(1 - d)(1 + t)$, then divide the final price by that single product to recover the original.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-percent-multi-step', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- sum-of-parts-ratio (4 → 10) ---
  { id: 'bank-ps-448', domain: 'problem-solving', skills: ['word-problem-to-equation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A total of $240$ items are divided between two groups in a ratio of $3 : 5$. How many items are in the LARGER group?',
    choices: [{ id: 'A', text: '$150$' }, { id: 'B', text: '$90$' }, { id: 'C', text: '$120$' }, { id: 'D', text: '$80$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Sum-of-Parts Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $3 + 5 = 8$ parts; each part $= \\frac{240}{8} = 30$. The larger group is $5 \\times 30 = 150$.\n\n**The Full Solution:**\nStep 1: Add the ratio numbers: $3 + 5 = 8$ total parts.\nStep 2: Divide the total by parts: $\\frac{240}{8} = 30$ items per part.\nStep 3: The larger group holds $5$ parts: $5 \\times 30 = 150$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($90$): the smaller group, $3 \\times 30$.\n* Choice C ($120$): split the total in half instead of by ratio.\n* Choice D ($80$): unrelated to the part value.\n\n**Test Day Takeaway:** Divide the total by the sum of the ratio parts to get the per-part amount, then multiply by the number of parts you want.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'sum-of-parts-ratio', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-449', domain: 'problem-solving', skills: ['word-problem-to-equation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A collection of $180$ marbles is divided between two friends in a ratio of $2 : 7$. How many marbles does the friend with the SMALLER share receive?',
    choices: [{ id: 'A', text: '$40$' }, { id: 'B', text: '$140$' }, { id: 'C', text: '$90$' }, { id: 'D', text: '$20$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Sum-of-Parts Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $2 + 7 = 9$ parts; each $= \\frac{180}{9} = 20$. The smaller share is $2 \\times 20 = 40$.\n\n**The Full Solution:**\nStep 1: Total parts: $2 + 7 = 9$.\nStep 2: Per part: $\\frac{180}{9} = 20$ marbles.\nStep 3: The smaller share is $2$ parts: $2 \\times 20 = 40$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($140$): the larger share, $7 \\times 20$.\n* Choice C ($90$): half of $180$, ignoring the ratio.\n* Choice D ($20$): stopped at the per-part amount.\n\n**Test Day Takeaway:** Total parts equals the sum of the ratio numbers. Find the per-part value first, then scale to the share you need.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'sum-of-parts-ratio', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-450', domain: 'problem-solving', skills: ['word-problem-to-equation'], difficulty: 'medium', type: 'multiple-choice',
    question: '$600$ acres of land are divided among three farmers in a ratio of $1 : 2 : 3$. How many acres does the farmer with the SMALLEST share receive?',
    choices: [{ id: 'A', text: '$100$' }, { id: 'B', text: '$200$' }, { id: 'C', text: '$300$' }, { id: 'D', text: '$150$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Sum-of-Parts Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $1 + 2 + 3 = 6$ parts; each $= \\frac{600}{6} = 100$. The smallest share is $1 \\times 100 = 100$.\n\n**The Full Solution:**\nStep 1: Add the ratio numbers: $1 + 2 + 3 = 6$ total parts.\nStep 2: Per part: $\\frac{600}{6} = 100$ acres.\nStep 3: The smallest share is $1$ part: $1 \\times 100 = 100$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($200$): the middle share, $2 \\times 100$.\n* Choice C ($300$): the largest share, $3 \\times 100$.\n* Choice D ($150$): divided by $4$ instead of $6$.\n\n**Test Day Takeaway:** Three-way ratios use the same method. Sum all parts, divide the total, then multiply by the part you want.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'sum-of-parts-ratio', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-451', domain: 'problem-solving', skills: ['word-problem-to-equation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Two partners agree to split a $\\$4{,}500$ profit in a ratio of $4 : 5$. How much does the partner with the LARGER share receive?',
    choices: [{ id: 'A', text: '$\\$2{,}500$' }, { id: 'B', text: '$\\$2{,}000$' }, { id: 'C', text: '$\\$2{,}250$' }, { id: 'D', text: '$\\$3{,}600$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Sum-of-Parts Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $4 + 5 = 9$ parts; each $= \\frac{4{,}500}{9} = 500$. The larger share is $5 \\times 500 = 2{,}500$, so $\\$2{,}500$.\n\n**The Full Solution:**\nStep 1: Total parts: $4 + 5 = 9$.\nStep 2: Per part: $\\frac{4{,}500}{9} = 500$.\nStep 3: The larger share is $5$ parts: $5 \\times 500 = 2{,}500$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$2{,}000$): the smaller share, $4 \\times 500$.\n* Choice C ($\\$2{,}250$): half the profit, ignoring the ratio.\n* Choice D ($\\$3{,}600$): unrelated to the part value.\n\n**Test Day Takeaway:** For the larger share, multiply the bigger ratio number by the per-part amount, not the total by a half.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'sum-of-parts-ratio', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-452', domain: 'problem-solving', skills: ['word-problem-to-equation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A $60$-inch board is cut into two pieces in a ratio of $1 : 4$. How long, in inches, is the LONGER piece?',
    choices: [{ id: 'A', text: '$48$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$45$' }, { id: 'D', text: '$15$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Sum-of-Parts Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $1 + 4 = 5$ parts; each $= \\frac{60}{5} = 12$. The longer piece is $4 \\times 12 = 48$.\n\n**The Full Solution:**\nStep 1: Total parts: $1 + 4 = 5$.\nStep 2: Per part: $\\frac{60}{5} = 12$ inches.\nStep 3: The longer piece is $4$ parts: $4 \\times 12 = 48$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): the shorter piece, $1 \\times 12$.\n* Choice C ($45$): three-fourths of $60$, a wrong split.\n* Choice D ($15$): one-fourth of $60$, ignoring that parts sum to $5$.\n\n**Test Day Takeaway:** A cut in ratio $a : b$ makes $a + b$ parts. Divide the whole by that sum before scaling to either piece.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'sum-of-parts-ratio', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-453', domain: 'problem-solving', skills: ['word-problem-to-equation'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Three siblings share an inheritance in a ratio of $3 : 4 : 5$. The youngest sibling receives $\\$9{,}000$. What is the total amount of the inheritance?',
    choices: [{ id: 'A', text: '$\\$36{,}000$' }, { id: 'B', text: '$\\$27{,}000$' }, { id: 'C', text: '$\\$45{,}000$' }, { id: 'D', text: '$\\$24{,}000$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Sum-of-Parts Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The youngest is $3$ parts $= \\$9{,}000$, so each part $= \\$3{,}000$. Total is $3 + 4 + 5 = 12$ parts: $12 \\times 3{,}000 = 36{,}000$, so $\\$36{,}000$.\n\n**The Full Solution:**\nStep 1: The smallest ratio number, $3$, is the youngest's share: $3 \\cdot \\text{(per part)} = 9{,}000$.\nStep 2: Per part $= \\frac{9{,}000}{3} = 3{,}000$.\nStep 3: Total parts $= 3 + 4 + 5 = 12$, so total $= 12 \\times 3{,}000 = 36{,}000$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$27{,}000$): $9{,}000 \\times 3$, multiplying the youngest's amount by its own ratio number.\n* Choice C ($\\$45{,}000$): $9{,}000 \\times 5$, used the largest ratio number by mistake.\n* Choice D ($\\$24{,}000$): scaled by $\\frac{8}{3}$ instead of using all $12$ parts.\n\n**Test Day Takeaway:** Given one known share, divide it by its ratio number to get the per-part value, then multiply by the total parts.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'sum-of-parts-ratio', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // === DIFFICULT-QUESTIONS PDF BATCH (2026-05-22) — 9 problem-solving items reskinned ===

  { id: 'bank-ps-454', domain: 'problem-solving', skills: ['percent-change', 'successive-percent-change'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Two data sets of $30$ integers each are summarized in the histograms shown. For each of the histograms, the first interval represents the frequency of integers greater than or equal to $10$, but less than $20$. The second interval represents the frequency of integers greater than or equal to $20$, but less than $30$, and so on. If the histograms are identical, what is the smallest possible difference between the mean of data set A and the mean of data set B?',
    choices: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$10$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Grouped Data — Smallest Possible Mean Difference**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** A histogram fixes only how many values fall in each interval, not the exact values. Identical histograms let you pick the same integers in both data sets, making the means equal: the smallest possible difference is $0$.\n\n**The Full Solution:**\nStep 1: Each bar gives a frequency for a $10$-wide interval, not specific numbers.\nStep 2: Within an interval, the actual integers are free to vary, so a single histogram corresponds to many possible data sets and many possible means.\nStep 3: Because the two histograms are identical, choose the same underlying integers for both. Then the two means are identical, and their difference is $0$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): assumes the data sets must differ by at least one unit.\n* Choice C ($5$): uses an interval midpoint gap rather than the freedom to match values.\n* Choice D ($10$): the interval width, which bounds the largest difference, not the smallest.\n\n**Test Day Takeaway:** Grouped frequencies pin down a range of possible means, not one value. Identical histograms can always be filled with identical data, so the minimum mean difference is $0$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'mean-from-list', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-ps-455', domain: 'problem-solving', skills: ['percent-change', 'percent-word-problems'], difficulty: 'hard', type: 'fill-in',
    question: 'The regular price of a shirt at a store is $\\$14.40$. The sale price of the shirt is $75\\%$ less than the regular price, and the sale price is $20\\%$ greater than the store\'s cost for the shirt. What was the store\'s cost, in dollars, for the shirt?',
    correctAnswer: '3',
    explanation: "**SAT Pattern: Markup–Discount Chain**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~30s):** \"$75\\%$ less\" means keep $25\\%$: sale $= 14.40 \\times 0.25 = 3.60$. The sale is $20\\%$ above cost, so cost $= \\frac{3.60}{1.20} = 3.00$, giving $\\$3$.\n\n**The Full Solution:**\nStep 1: Sale price is $75\\%$ less than $\\$14.40$, so it is $25\\%$ of it: $14.40 \\times 0.25 = 3.60$.\nStep 2: The sale price is $20\\%$ greater than cost: $3.60 = \\text{cost} \\times 1.20$.\nStep 3: Solve: $\\text{cost} = \\frac{3.60}{1.20} = 3$, so the store's cost is $\\$3$.\n\n**Common Mistakes:** Multiplying $3.60 \\times 1.20$ instead of dividing (lands near $\\$4.32$); or using $0.75$ as the discount factor instead of $0.25$, since \"$75\\%$ less\" keeps a quarter, not three-quarters.\n\n**Test Day Takeaway:** Chain each percent change as its own step. \"$p\\%$ less\" multiplies by $1 - \\frac{p}{100}$; \"$p\\%$ greater than cost\" means cost $\\times \\left(1 + \\frac{p}{100}\\right)$, so solve for cost by dividing.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'markup-discount-chain', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-ps-456', domain: 'problem-solving', skills: ['proportion-setup'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A recent poll showed that $512$ people supported Maya and $298$ supported Jordan, out of $810$ voters polled at random. According to the poll, if $8{,}910$ people vote in the election, by how many votes would Maya be expected to win?',
    choices: [{ id: 'A', text: '$214$' }, { id: 'B', text: '$1{,}605$' }, { id: 'C', text: '$2{,}354$' }, { id: 'D', text: '$5{,}632$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Poll Scaling — Margin of Victory**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The election is $\\frac{8{,}910}{810} = 11$ times the poll. Maya's poll margin is $512 - 298 = 214$, so the expected margin is $11 \\times 214 = 2{,}354$.\n\n**The Full Solution:**\nStep 1: Find the scaling factor: $\\frac{8{,}910}{810} = 11$.\nStep 2: Find the margin in the poll: $512 - 298 = 214$ votes.\nStep 3: Scale the margin: $11 \\times 214 = 2{,}354$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($214$): the poll-level margin with no scaling applied.\n* Choice B ($1{,}605$): scaled the wrong difference or used a wrong factor.\n* Choice D ($5{,}632$): scaled Maya's count ($512 \\times 11$) instead of the margin.\n\n**Test Day Takeaway:** When the full vote keeps the poll's proportions, scale the margin (the difference) by the same factor. You do not need each candidate's scaled count to find the win margin.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'proportion-setup', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-ps-457', domain: 'problem-solving', skills: ['calculate-mean'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The table shows an original data set of the number of eggs found in five nests of a type of sea turtle.\n\n| Nest | Number of eggs |\n|---|---|\n| A | $158$ |\n| B | $152$ |\n| C | $161$ |\n| D | $145$ |\n| E | $149$ |\n\nA sixth nest with $128$ eggs is added to create a new data set. Which of the following correctly compares the means of the two data sets?',
    choices: [{ id: 'A', text: 'The mean of the original data set is greater than the mean of the new data set.' }, { id: 'B', text: 'The mean of the original data set is less than the mean of the new data set.' }, { id: 'C', text: 'The means of both data sets are equal.' }, { id: 'D', text: 'There is not enough information to compare the means.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Mean Comparison after Adding a Value**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** You don't need the new mean's exact value. The original mean is $153$, and the added nest has only $128$ eggs. A new value below the current mean always pulls the mean down, so the original mean is greater.\n\n**The Full Solution:**\nStep 1: Find the original mean. The five values sum to $158+152+161+145+149=765$, so the mean is $\\frac{765}{5}=153$.\nStep 2: Compare the new value to that mean: $128<153$.\nStep 3: Adding a value below the mean drags the average down, so the new mean is less than $153$. Therefore the original mean is greater than the new mean, which is Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B: reverses the direction — this would be true only if the added value were greater than $153$.\n* Choice C: assumes adding any sixth value leaves the mean unchanged, ignoring that $128$ differs from $153$.\n* Choice D: claims you can't tell, but the comparison is fully determined once you know the new value sits below the mean.\n\n**Test Day Takeaway:** Adding a value below the current mean lowers the mean; adding one above it raises it. You can compare without computing the new mean.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'combined-group-mean', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-ps-458', domain: 'problem-solving', skills: ['proportion-setup', 'rate-conversion'], difficulty: 'hard', type: 'fill-in',
    question: 'For an electric field passing through a flat surface perpendicular to it, the electric flux of the electric field through the surface is the product of the electric field\'s strength and the area of the surface. A certain flat surface consists of two adjacent squares, where the side length, in meters, of the larger square is $4$ times the side length, in meters, of the smaller square. An electric field with strength $23.00$ volts per meter passes uniformly through this surface, which is perpendicular to the electric field. If the total electric flux of the electric field through this surface is $6{,}256$ volts $\\cdot$ meters, what is the electric flux, in volts $\\cdot$ meters, of the electric field through the larger square?',
    correctAnswer: '5888',
    explanation: "**SAT Pattern: Proportional Area — Recover Side, Then Apply**\n\n**The correct answer is $5888$.**\n\n**The Fast Way (~40s):** Flux $=$ field strength $\\times$ area. With smaller side $s$, total area is $(4s)^2+s^2=17s^2$, so $23\\cdot 17s^2=6256\\Rightarrow s^2=16$. The larger square has area $16s^2=256$, and its flux is $23\\cdot 256=5888$.\n\n**The Full Solution:**\nStep 1: Let the smaller side be $s$ meters. The larger side is $4s$, so the larger area is $(4s)^2=16s^2$ and the smaller area is $s^2$.\nStep 2: Total area $=16s^2+s^2=17s^2$. Total flux $=23\\cdot 17s^2=391s^2$.\nStep 3: Set this equal to the given flux: $391s^2=6256\\Rightarrow s^2=\\frac{6256}{391}=16$.\nStep 4: Larger-square area $=16s^2=16(16)=256$ square meters.\nStep 5: Larger-square flux $=23\\cdot 256=5888$.\n\n**Common Mistakes:** Reporting the total flux $6256$ instead of the larger square's share; treating the $4{:}1$ side ratio as the area ratio (the area ratio is $16{:}1$).\n\n**Test Day Takeaway:** Squaring the side ratio gives the area ratio. Flux splits across pieces in proportion to area, so recover the side first, then apply the field strength to the piece you want.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'rate-conversion', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-ps-459', domain: 'problem-solving', skills: ['successive-percent-change'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In $2010$, Marisol earned $22\\%$ more than in $2009$, and in $2011$ Marisol earned $8\\%$ more than in $2010$. If Marisol earned $y$ times as much in $2011$ as in $2009$, what is the value of $y$?',
    choices: [{ id: 'A', text: '$0.3000$' }, { id: 'B', text: '$1.0176$' }, { id: 'C', text: '$1.3000$' }, { id: 'D', text: '$1.3176$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Successive Percent Change**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Each percent increase becomes a multiplier. A $22\\%$ rise is $\\times 1.22$ and an $8\\%$ rise is $\\times 1.08$, so the two-year factor is $1.22\\times 1.08=1.3176$.\n\n**The Full Solution:**\nStep 1: Let the $2009$ earnings be $E$. After a $22\\%$ increase, $2010$ earnings are $1.22E$.\nStep 2: After a further $8\\%$ increase, $2011$ earnings are $1.08\\cdot(1.22E)=1.3176E$.\nStep 3: Since $2011$ is $y$ times $2009$, $y=1.3176$, which is Choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.3000$): the leftover decimal $1.3176-1.0176$ or a stray subtraction — not a valid growth factor.\n* Choice B ($1.0176$): multiplies $1.22\\times 0.08$ or otherwise mishandles the second factor.\n* Choice C ($1.3000$): adds the percents ($22\\%+8\\%=30\\%\\Rightarrow 1.30$) instead of multiplying the factors.\n\n**Test Day Takeaway:** Successive percent changes multiply their growth factors; they don't add. Convert each change to $1\\pm r$ first.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'successive-percent-application', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-ps-460', domain: 'problem-solving', skills: ['squared-cubed-units', 'unit-conversion'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The speed of a vehicle is increasing at a rate of $9.8$ meters per second squared. What is this rate, in **miles per minute squared**, rounded to the nearest tenth? (Use $1$ mile $=1{,}609$ meters.)',
    choices: [{ id: 'A', text: '$0.4$' }, { id: 'B', text: '$21.9$' }, { id: 'C', text: '$263.1$' }, { id: 'D', text: '$295.7$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Chained Unit Conversion — Squared Time**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Convert meters to miles once and seconds to minutes twice, since the time unit is squared: $9.8\\cdot\\frac{1}{1609}\\cdot 60^2=\\frac{9.8\\times 3600}{1609}\\approx 21.9$.\n\n**The Full Solution:**\nStep 1: Start from $9.8\\,\\frac{\\text{m}}{\\text{s}^2}$ and multiply by conversion factors that cancel units.\nStep 2: Meters to miles: $\\times\\frac{1\\,\\text{mi}}{1609\\,\\text{m}}$.\nStep 3: Seconds to minutes, squared: $1\\,\\text{min}=60\\,\\text{s}$, so $\\frac{1}{\\text{s}^2}=\\frac{60^2}{\\text{min}^2}=\\frac{3600}{\\text{min}^2}$.\nStep 4: Combine: $\\frac{9.8\\times 3600}{1609}=\\frac{35280}{1609}\\approx 21.93$, which rounds to $21.9$, Choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.4$): converts time only once instead of squaring, undercounting by a factor of $60$.\n* Choice C ($263.1$): multiplies by $1609$ in the wrong place, scaling the result far too large.\n* Choice D ($295.7$): multiplies by $1609$ instead of dividing while still squaring the time factor.\n\n**Test Day Takeaway:** When a unit is squared, its conversion factor is squared too. Per second squared needs the seconds-to-minutes factor applied twice.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'chained-unit-conversion', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-ps-461', domain: 'problem-solving', skills: ['percent-decimal-conversion', 'percent-change'], difficulty: 'hard', type: 'fill-in',
    question: 'The number $a$ is $120\\%$ greater than the number $b$. The number $b$ is $80\\%$ less than $65$. What is the value of $a$?',
    correctAnswer: '28.6',
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**The correct answer is $28.6$.**\n\n**The Fast Way (~25s):** Find $b$ first: $80\\%$ less than $65$ is $65\\times 0.20=13$. Then $a$ is $120\\%$ greater than $b$, meaning $\\times 2.20$: $a=2.20\\times 13=28.6$.\n\n**The Full Solution:**\nStep 1: \"$b$ is $80\\%$ less than $65$\" means $b=65(1-0.80)=65\\times 0.20=13$.\nStep 2: \"$a$ is $120\\%$ greater than $b$\" means $a=b(1+1.20)=2.20\\,b$.\nStep 3: Substitute: $a=2.20\\times 13=28.6$.\n\n**Common Mistakes:** Reading \"$120\\%$ greater\" as $\\times 1.20$ instead of $\\times 2.20$; reading \"$80\\%$ less\" as $\\times 0.80$ instead of $\\times 0.20$.\n\n**Test Day Takeaway:** Translate each percent phrase into one multiplicative factor — \"greater\" is $1+r$, \"less\" is $1-r$ — then chain the multiplications.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'chained-percent-relationship', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-ps-462', domain: 'problem-solving', skills: ['percent-change', 'system-solution-types'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In a survey conducted at a local university, the table shows the results of how $810$ randomly selected students would vote for candidates Maya or Jordan for student council president. If $8{,}910$ students at the university vote in the election, by how many votes would Maya be expected to win? Use Maya $=512$, Jordan $=298$.',
    choices: [{ id: 'A', text: '$214$' }, { id: 'B', text: '$2{,}354$' }, { id: 'C', text: '$5{,}632$' }, { id: 'D', text: '$3{,}278$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Poll Scaling — Margin of Victory (Variant)**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The full vote is $11$ times the poll ($\\frac{8910}{810}=11$). Scale the poll margin: Maya leads by $512-298=214$, so the projected margin is $11\\times 214=2354$.\n\n**The Full Solution:**\nStep 1: Find the scaling factor from the poll size to the full electorate: $\\frac{8910}{810}=11$.\nStep 2: Find the poll margin: Maya $512$ minus Jordan $298$ gives $214$ votes.\nStep 3: Because the poll is representative, scale the margin by the same factor: $11\\times 214=2354$, which is Choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($214$): the poll margin without scaling up to the full electorate.\n* Choice C ($5{,}632$): scales only Maya's count ($11\\times 512$) instead of the margin.\n* Choice D ($3{,}278$): scales only Jordan's count ($11\\times 298$) instead of the margin.\n\n**Test Day Takeaway:** For a representative poll, multiply the margin (the difference) by the population scaling factor — scaling each candidate separately and subtracting gives the same result, but scaling the margin directly is faster.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'proportion-setup', authoredBy: 'performsat-engine', createdAt: '2026-05-22' }
];
