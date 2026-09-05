export const problemSolvingBank = [
  // ── percent-decimal-conversion (easy) ──────────────────────────
  {
    id: "bank-ps-001",
    domain: "problem-solving",
    skills: ["percent-decimal-conversion"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In a survey of a wetland, $0.072$ of the total surveyed area was found to be open water. What percent of the surveyed area was open water?",
    choices: [
      // distractor: shifts the decimal point one place to the left, dividing by $10$ instead of multiplying by $100$.
      { id: "A", text: "$0.0072\\%$" },
      // distractor: attaches a percent sign to the decimal without multiplying by $100$.
      { id: "B", text: "$0.072\\%$" },
      // distractor: shifts the decimal point only one place to the right (multiplies by $10$, not $100$).
      { id: "C", text: "$0.72\\%$" },
      { id: "D", text: "$7.2\\%$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Decimal to Percent**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** Multiply by $100$, which shifts the decimal point two places to the right: $0.072 \\times 100 = 7.2$, so $7.2\\%$.\n\n**The Full Solution:**\nStep 1: A percent is a number of parts per $100$, so a decimal is converted to a percent by multiplying by $100$.\nStep 2: $0.072 \\times 100 = 7.2$, so $0.072$ is $7.2\\%$.\nStep 3: Check by reversing: $7.2\\% = \\frac{7.2}{100} = 0.072$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.0072\\%$): shifts the decimal point one place to the left, dividing by $10$ instead of multiplying by $100$.\n* Choice B ($0.072\\%$): attaches a percent sign to the decimal without multiplying by $100$.\n* Choice C ($0.72\\%$): shifts the decimal point only one place to the right (multiplies by $10$, not $100$).\n\n**Test Day Takeaway:** Decimal to percent is a two-place shift to the right. A decimal near $0.07$ must land near $7\\%$, not $0.7\\%$ or $70\\%$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "decimal-to-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-002",
    domain: "problem-solving",
    skills: ["percent-decimal-conversion"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A bottle of vinegar is labeled as $4.75\\%$ acetic acid by volume. Which of the following is $4.75\\%$ written as a decimal?",
    choices: [
      // distractor: shifts the decimal point three places to the left, dividing by $1{,}000$ instead of $100$.
      { id: "A", text: "$0.00475$" },
      { id: "B", text: "$0.0475$" },
      // distractor: shifts the decimal point only one place to the left (divides by $10$).
      { id: "C", text: "$0.475$" },
      // distractor: drops the percent sign without dividing by $100$ at all.
      { id: "D", text: "$4.75$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent to Decimal**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Divide by $100$, which shifts the decimal point two places to the left: $4.75\\% = 0.0475$.\n\n**The Full Solution:**\nStep 1: The percent sign means \\\"per $100$,\\\" so $4.75\\% = \\frac{4.75}{100}$.\nStep 2: Dividing by $100$ moves the decimal point two places to the left: $4.75 \\to 0.0475$.\nStep 3: Check by multiplying back: $0.0475 \\times 100 = 4.75$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.00475$): shifts the decimal point three places to the left, dividing by $1{,}000$ instead of $100$.\n* Choice C ($0.475$): shifts the decimal point only one place to the left (divides by $10$).\n* Choice D ($4.75$): drops the percent sign without dividing by $100$ at all.\n\n**Test Day Takeaway:** Percent to decimal is a two-place shift to the left. A percent under $5\\%$ must become a decimal under $0.05$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-to-decimal",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-003",
    domain: "problem-solving",
    skills: ["percent-decimal-conversion"],
    difficulty: "easy",
    type: "fill-in",
    question: "In a germination trial, $0.186$ of the seeds that were planted sprouted within one week. What percent of the seeds that were planted sprouted within one week?",
    correctAnswer: "18.6",
    explanation: "**SAT Pattern: Decimal to Percent**\n\n**The correct answer is $18.6$.**\n\n**The Fast Way (~5s):** Multiply by $100$: $0.186 \\times 100 = 18.6$, so $18.6\\%$ of the seeds sprouted.\n\n**The Full Solution:**\nStep 1: A decimal is converted to a percent by multiplying by $100$ (moving the decimal point two places to the right).\nStep 2: $0.186 \\times 100 = 18.6$.\nStep 3: Check: $18.6\\% = \\frac{18.6}{100} = 0.186$, the original decimal. $\\checkmark$\n\n**Common Mistakes:** Entering $1.86$ (moving the decimal point only one place); entering $0.186$ (forgetting to convert at all); entering $186$ (moving it three places).\n\n**Test Day Takeaway:** Read the decimal, shift two places right, and enter only the number: $0.186$ becomes $18.6$, with no percent sign in the answer box.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "decimal-to-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-004",
    domain: "problem-solving",
    skills: ["percent-decimal-conversion"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A researcher reports that the proportion of a fish population carrying a particular gene variant is $0.0042$. Which of the following is this proportion expressed as a percent?",
    choices: [
      // distractor: attaches a percent sign without moving the decimal point.
      { id: "A", text: "$0.0042\\%$" },
      // distractor: moves the decimal point only one place to the right.
      { id: "B", text: "$0.042\\%$" },
      { id: "C", text: "$0.42\\%$" },
      // distractor: moves the decimal point three places, treating $0.0042$ as if it were $0.042$.
      { id: "D", text: "$4.2\\%$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Small-Value Decimal to Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Multiply by $100$: $0.0042 \\times 100 = 0.42$, so the proportion is $0.42\\%$.\n\n**The Full Solution:**\nStep 1: To express a proportion as a percent, multiply by $100$, which moves the decimal point exactly two places to the right.\nStep 2: $0.0042 \\to 0.042 \\to 0.42$, so the proportion is $0.42\\%$. The leading zeros are what make this easy to miscount.\nStep 3: Check: $0.42\\% = \\frac{0.42}{100} = 0.0042$. $\\checkmark$ (Also reasonable: $0.0042$ is a little less than $\\frac{1}{200} = 0.5\\%$.)\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.0042\\%$): attaches a percent sign without moving the decimal point.\n* Choice B ($0.042\\%$): moves the decimal point only one place to the right.\n* Choice D ($4.2\\%$): moves the decimal point three places, treating $0.0042$ as if it were $0.042$.\n\n**Test Day Takeaway:** Leading zeros do not change the rule: count exactly two places to the right. Sanity-check against a benchmark such as $0.005 = 0.5\\%$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "decimal-to-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── percent-of-value ───────────────────────────────────────────
  {
    id: "bank-ps-005",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A total of $1{,}250$ tickets were sold for a festival. Of these tickets, $28\\%$ were student tickets. How many student tickets were sold?",
    choices: [
      // distractor: uses $0.028$ instead of $0.28$, moving the decimal point one place too far.
      { id: "A", text: "$35$" },
      { id: "B", text: "$350$" },
      // distractor: finds the number of tickets that were not student tickets ($72\%$ of $1{,}250$).
      { id: "C", text: "$900$" },
      // distractor: multiplies by $2.8$ instead of $0.28$, which gives more tickets than were sold.
      { id: "D", text: "$3{,}500$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent of Total**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $28\\%$ of $1{,}250$ is $0.28 \\times 1{,}250 = 350$.\n\n**The Full Solution:**\nStep 1: \\\"$28\\%$ of\\\" a quantity means multiply the quantity by $\\frac{28}{100} = 0.28$.\nStep 2: $0.28 \\times 1{,}250 = 350$.\nStep 3: Check: $10\\%$ of $1{,}250$ is $125$, so $28\\%$ should be a bit under $3 \\times 125 = 375$. $350$ fits. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($35$): uses $0.028$ instead of $0.28$, moving the decimal point one place too far.\n* Choice C ($900$): finds the number of tickets that were not student tickets ($72\\%$ of $1{,}250$).\n* Choice D ($3{,}500$): multiplies by $2.8$ instead of $0.28$, which gives more tickets than were sold.\n\n**Test Day Takeaway:** \\\"$p\\%$ of $N$\\\" is $\\frac{p}{100} \\times N$. A quick $10\\%$ benchmark catches any misplaced decimal point.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-of-total",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-006",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "easy",
    type: "fill-in",
    question: "A sewing machine has a list price of $\\$640$. During a sale, the price is reduced by $15\\%$ of the list price. By how many dollars is the price reduced?",
    correctAnswer: "96",
    explanation: "**SAT Pattern: Discount Amount**\n\n**The correct answer is $96$.**\n\n**The Fast Way (~10s):** The reduction is $15\\%$ of $640$: $0.15 \\times 640 = 96$ dollars.\n\n**The Full Solution:**\nStep 1: The question asks for the amount of the reduction, not the sale price, so compute $15\\%$ of the list price.\nStep 2: $0.15 \\times 640 = 96$.\nStep 3: Check with a benchmark: $10\\%$ of $640$ is $64$ and $5\\%$ is $32$, and $64 + 32 = 96$. $\\checkmark$\n\n**Common Mistakes:** Entering $544$ (the sale price $640 - 96$, when the question asks for the reduction); entering $9.6$ (using $0.015$ instead of $0.15$); entering $625$ (subtracting $15$ dollars instead of $15$ percent).\n\n**Test Day Takeaway:** Read what the question asks for: the discount amount is $\\frac{p}{100} \\times \\text{price}$; the sale price is what remains after subtracting it.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-of-total",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-007",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Of the $2{,}500$ households surveyed in a county, $36\\%$ have a vegetable garden. Of the households that have a vegetable garden, $15\\%$ also keep bees. How many of the surveyed households have a vegetable garden and keep bees?",
    choices: [
      { id: "A", text: "$135$" },
      // distractor: takes $15\%$ of all $2{,}500$ households instead of $15\%$ of the $900$ garden households.
      { id: "B", text: "$375$" },
      // distractor: stops after the first step and reports the number of households with a garden.
      { id: "C", text: "$900$" },
      // distractor: adds the percents ($36\% + 15\% = 51\%$) and takes $51\%$ of $2{,}500$.
      { id: "D", text: "$1{,}275$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Compound Percent Of**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Take the percents in order: $0.36 \\times 2{,}500 = 900$ households have a garden, and $0.15 \\times 900 = 135$ of those keep bees.\n\n**The Full Solution:**\nStep 1: The second percent applies to the garden households only, not to all $2{,}500$. First find the garden households: $0.36 \\times 2{,}500 = 900$.\nStep 2: Then take $15\\%$ of that group: $0.15 \\times 900 = 135$.\nStep 3: Check with one combined factor: $0.36 \\times 0.15 = 0.054$, and $0.054 \\times 2{,}500 = 135$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($375$): takes $15\\%$ of all $2{,}500$ households instead of $15\\%$ of the $900$ garden households.\n* Choice C ($900$): stops after the first step and reports the number of households with a garden.\n* Choice D ($1{,}275$): adds the percents ($36\\% + 15\\% = 51\\%$) and takes $51\\%$ of $2{,}500$.\n\n**Test Day Takeaway:** \\\"Of those\\\" signals a percent of a subgroup. Multiply the percents as decimals, never add them.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "compound-percent-of",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-008",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A ceramics studio produced $640$ pieces last month. Of these pieces, $37.5\\%$ were glazed, and $40\\%$ of the glazed pieces were sold at a fair. How many of the glazed pieces were not sold at the fair?",
    choices: [
      // distractor: reports the number of glazed pieces that were sold rather than the number that were not sold.
      { id: "A", text: "$96$" },
      { id: "B", text: "$144$" },
      // distractor: stops at the number of glazed pieces and never applies the $40\%$.
      { id: "C", text: "$240$" },
      // distractor: applies the $60\%$ unsold share to all $640$ pieces instead of to the $240$ glazed pieces.
      { id: "D", text: "$384$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Filter then Subtract**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Glazed pieces: $0.375 \\times 640 = 240$. The $60\\%$ not sold: $0.60 \\times 240 = 144$.\n\n**The Full Solution:**\nStep 1: Filter to the glazed pieces: $0.375 \\times 640 = 240$.\nStep 2: Of these, $40\\%$ were sold, so $0.40 \\times 240 = 96$ were sold and $240 - 96 = 144$ were not.\nStep 3: Check: the unsold share is $100\\% - 40\\% = 60\\%$, and $0.60 \\times 240 = 144$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($96$): reports the number of glazed pieces that were sold rather than the number that were not sold.\n* Choice C ($240$): stops at the number of glazed pieces and never applies the $40\\%$.\n* Choice D ($384$): applies the $60\\%$ unsold share to all $640$ pieces instead of to the $240$ glazed pieces.\n\n**Test Day Takeaway:** Filter first, then subtract (or use the complement percent) within the filtered group. Reread the last sentence to see which group and which share the question wants.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "compound-percent-of",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── percent-change ─────────────────────────────────────────────
  {
    id: "bank-ps-009",
    domain: "problem-solving",
    skills: ["percent-change"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "At a seabird colony, there were $320$ nesting pairs one year and $368$ nesting pairs the following year. By what percent did the number of nesting pairs increase from the first year to the second year?",
    choices: [
      { id: "A", text: "$15\\%$" },
      // distractor: reports the change in the number of pairs, $48$, as if it were a percent.
      { id: "B", text: "$48\\%$" },
      // distractor: computes $\frac{320}{368} \approx 0.87$, the original as a percent of the new value.
      { id: "C", text: "$87\\%$" },
      // distractor: computes $\frac{368}{320} = 1.15$, the new value as a percent of the original, instead of the change.
      { id: "D", text: "$115\\%$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Percent Change Basic**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The increase is $368 - 320 = 48$ pairs, and $\\frac{48}{320} = 0.15$, so $15\\%$.\n\n**The Full Solution:**\nStep 1: Percent increase $= \\frac{\\text{new} - \\text{original}}{\\text{original}} \\times 100\\%$.\nStep 2: The change is $368 - 320 = 48$, so the percent increase is $\\frac{48}{320} \\times 100\\% = 15\\%$.\nStep 3: Check: $15\\%$ of $320$ is $48$, and $320 + 48 = 368$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($48\\%$): reports the change in the number of pairs, $48$, as if it were a percent.\n* Choice C ($87\\%$): computes $\\frac{320}{368} \\approx 0.87$, the original as a percent of the new value.\n* Choice D ($115\\%$): computes $\\frac{368}{320} = 1.15$, the new value as a percent of the original, instead of the change.\n\n**Test Day Takeaway:** Percent change always divides the change by the original value. The ratio new/original gives the multiplier, not the percent change.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-change-basic",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-010",
    domain: "problem-solving",
    skills: ["percent-change"],
    difficulty: "easy",
    type: "fill-in",
    question: "A block of ice had a mass of $750$ grams. After several hours, the block had a mass of $615$ grams. By what percent did the mass of the block decrease?",
    correctAnswer: "18",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**The correct answer is $18$.**\n\n**The Fast Way (~10s):** The mass fell by $750 - 615 = 135$ grams, and $\\frac{135}{750} = 0.18$, so the decrease is $18\\%$.\n\n**The Full Solution:**\nStep 1: Percent decrease $= \\frac{\\text{original} - \\text{new}}{\\text{original}} \\times 100\\%$.\nStep 2: The decrease is $750 - 615 = 135$ grams, so the percent decrease is $\\frac{135}{750} \\times 100\\% = 18\\%$.\nStep 3: Check: $18\\%$ of $750$ is $0.18 \\times 750 = 135$, and $750 - 135 = 615$. $\\checkmark$\n\n**Common Mistakes:** Entering about $22$ (dividing $135$ by the new mass $615$, which gives $0.2195\\ldots$); entering $82$ (the percent of the original mass that remains, $\\frac{615}{750}$); entering $135$ (the decrease in grams, not a percent).\n\n**Test Day Takeaway:** Divide the decrease by the ORIGINAL amount. If the result is the fraction remaining rather than the fraction lost, subtract it from $100\\%$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-change-basic",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-011",
    domain: "problem-solving",
    skills: ["percent-change"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table gives the number of active accounts at a credit union at the end of each of two years. By what percent did the number of active accounts decrease from the end of 2021 to the end of 2022?",
    questionTable: { headers: ["Year", "Active accounts"], rows: [["2021", "14,400"], ["2022", "12,600"]] },
    choices: [
      // distractor: converts the decimal $0.125$ to a percent by moving the decimal point only one place.
      { id: "A", text: "$1.25\\%$" },
      { id: "B", text: "$12.5\\%$" },
      // distractor: divides the decrease by the 2022 count, $\frac{1{,}800}{12{,}600} \approx 0.143$, instead of by the original 2021 count.
      { id: "C", text: "$14.3\\%$" },
      // distractor: reports $\frac{12{,}600}{14{,}400}$, the percent of accounts that remained, not the percent decrease.
      { id: "D", text: "$87.5\\%$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The decrease is $14{,}400 - 12{,}600 = 1{,}800$ accounts, and $\\frac{1{,}800}{14{,}400} = 0.125$, so $12.5\\%$.\n\n**The Full Solution:**\nStep 1: Percent decrease $= \\frac{\\text{original} - \\text{new}}{\\text{original}} \\times 100\\%$, with the 2021 count as the original.\nStep 2: The decrease is $14{,}400 - 12{,}600 = 1{,}800$, so the percent decrease is $\\frac{1{,}800}{14{,}400} = \\frac{1}{8} = 0.125$, or $12.5\\%$.\nStep 3: Check: $12.5\\%$ of $14{,}400$ is $\\frac{14{,}400}{8} = 1{,}800$, and $14{,}400 - 1{,}800 = 12{,}600$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.25\\%$): converts the decimal $0.125$ to a percent by moving the decimal point only one place.\n* Choice C ($14.3\\%$): divides the decrease by the 2022 count, $\\frac{1{,}800}{12{,}600} \\approx 0.143$, instead of by the original 2021 count.\n* Choice D ($87.5\\%$): reports $\\frac{12{,}600}{14{,}400}$, the percent of accounts that remained, not the percent decrease.\n\n**Test Day Takeaway:** With a table, identify which row is the original (earlier) value before dividing. Percent decrease uses the earlier value as the denominator.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-change-basic",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-ps-012",
    domain: "problem-solving",
    skills: ["percent-change"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "After a $35\\%$ discount, the price of a camera lens is $\\$247$. What was the price of the lens, in dollars, before the discount?",
    choices: [
      // distractor: multiplies the sale price by $0.65$, applying the discount a second time instead of undoing it.
      { id: "A", text: "$160.55$" },
      // distractor: adds $35\%$ of the sale price ($247 \times 1.35$); $35\%$ of the smaller sale price is less than the discount that was taken.
      { id: "B", text: "$333.45$" },
      { id: "C", text: "$380$" },
      // distractor: divides by $0.35$, the discount rate, instead of by $0.65$, the fraction that remains.
      { id: "D", text: "$705.71$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Reverse Percent Change**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The sale price is $65\\%$ of the original, so original $= \\frac{247}{0.65} = 380$.\n\n**The Full Solution:**\nStep 1: Let $p$ be the original price. A $35\\%$ discount leaves $100\\% - 35\\% = 65\\%$ of $p$, so $0.65p = 247$.\nStep 2: Divide: $p = \\frac{247}{0.65} = 380$.\nStep 3: Check: $35\\%$ of $380$ is $133$, and $380 - 133 = 247$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($160.55$): multiplies the sale price by $0.65$, applying the discount a second time instead of undoing it.\n* Choice B ($333.45$): adds $35\\%$ of the sale price ($247 \\times 1.35$); $35\\%$ of the smaller sale price is less than the discount that was taken.\n* Choice D ($705.71$): divides by $0.35$, the discount rate, instead of by $0.65$, the fraction that remains.\n\n**Test Day Takeaway:** To undo a percent decrease, divide by $(1 - \\text{rate})$. Adding the same percent back never returns to the original.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent-change",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-013",
    domain: "problem-solving",
    skills: ["percent-change"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The number of members of a hiking club increased by $45\\%$ from 2019 to 2022 and then increased by $25\\%$ from 2022 to 2024. The club had $2{,}610$ members in 2024. How many members did the club have in 2019?",
    choices: [
      { id: "A", text: "$1{,}440$" },
      // distractor: adds the percents and divides once by $1.70$, which gives about $1{,}535$; successive increases multiply, so the true factor is $1.45 \times 1.25 = 1.8125$.
      { id: "B", text: "$1{,}535$" },
      // distractor: undoes only the $45\%$ increase, $\frac{2{,}610}{1.45}$, and ignores the $25\%$ increase.
      { id: "C", text: "$1{,}800$" },
      // distractor: undoes only the $25\%$ increase and reports the 2022 membership.
      { id: "D", text: "$2{,}088$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Reverse Growth**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Undo the growth in reverse order by dividing: $\\frac{2{,}610}{1.25} = 2{,}088$ members in 2022, and $\\frac{2{,}088}{1.45} = 1{,}440$ members in 2019.\n\n**The Full Solution:**\nStep 1: Let $m$ be the 2019 membership. Two increases multiply: $m \\times 1.45 \\times 1.25 = 2{,}610$.\nStep 2: Divide out each growth factor: $\\frac{2{,}610}{1.25} = 2{,}088$ (the 2022 count), then $\\frac{2{,}088}{1.45} = 1{,}440$.\nStep 3: Check forward: $1{,}440 \\times 1.45 = 2{,}088$, and $2{,}088 \\times 1.25 = 2{,}610$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($1{,}535$): adds the percents and divides once by $1.70$, which gives about $1{,}535$; successive increases multiply, so the true factor is $1.45 \\times 1.25 = 1.8125$.\n* Choice C ($1{,}800$): undoes only the $45\\%$ increase, $\\frac{2{,}610}{1.45}$, and ignores the $25\\%$ increase.\n* Choice D ($2{,}088$): undoes only the $25\\%$ increase and reports the 2022 membership.\n\n**Test Day Takeaway:** Each percent increase is a multiplication by $(1 + \\text{rate})$; to go backward, divide by every factor, one at a time.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent-change",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-014",
    domain: "problem-solving",
    skills: ["percent-change"],
    difficulty: "hard",
    type: "fill-in",
    question: "A rectangular solar array measured $12$ meters by $8$ meters. The array was expanded so that it now measures $15$ meters by $11$ meters. To the nearest whole percent, by what percent did the area of the array increase?",
    correctAnswer: "72",
    explanation: "**SAT Pattern: Percent Increase from Two Values**\n\n**The correct answer is $72$.**\n\n**The Fast Way (~30s):** Areas: $12 \\times 8 = 96$ and $15 \\times 11 = 165$. Percent increase $= \\frac{165 - 96}{96} = \\frac{69}{96} \\approx 0.719$, or $72\\%$.\n\n**The Full Solution:**\nStep 1: The question compares AREAS, so compute both: original $12 \\times 8 = 96$ square meters; new $15 \\times 11 = 165$ square meters.\nStep 2: Percent increase $= \\frac{\\text{new} - \\text{original}}{\\text{original}} \\times 100\\% = \\frac{69}{96} \\times 100\\% = 71.875\\%$.\nStep 3: Round to the nearest whole percent: $72$. Check: $96 \\times 1.72 \\approx 165.1$, matching the new area. $\\checkmark$\n\n**Common Mistakes:** Entering $63$ (adding the percent increases of the two dimensions, $25\\% + 37.5\\% = 62.5\\%$; percent changes of dimensions do not add to the percent change of the area); entering $42$ (dividing $69$ by the new area $165$); entering $69$ (the change in area rather than the percent).\n\n**Test Day Takeaway:** When the question asks about a derived quantity such as area, compute that quantity before and after, then apply $\\frac{\\text{change}}{\\text{original}}$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-change-basic",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── percent-word-problems ──────────────────────────────────────
  {
    id: "bank-ps-015",
    domain: "problem-solving",
    skills: ["percent-word-problems"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "An orchard has $460$ trees, and $35\\%$ of the trees are apple trees. How many of the trees in the orchard are not apple trees?",
    choices: [
      // distractor: reports the complement percent itself instead of applying it to the $460$ trees.
      { id: "A", text: "$65$" },
      // distractor: finds the number of apple trees, the group the question excludes.
      { id: "B", text: "$161$" },
      { id: "C", text: "$299$" },
      // distractor: subtracts $35$ trees instead of $35\%$ of the trees.
      { id: "D", text: "$425$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Complement Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The trees that are not apple trees make up $100\\% - 35\\% = 65\\%$, and $0.65 \\times 460 = 299$.\n\n**The Full Solution:**\nStep 1: If $35\\%$ of the trees are apple trees, the remaining $100\\% - 35\\% = 65\\%$ are not.\nStep 2: $0.65 \\times 460 = 299$.\nStep 3: Check: the apple trees number $0.35 \\times 460 = 161$, and $161 + 299 = 460$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($65$): reports the complement percent itself instead of applying it to the $460$ trees.\n* Choice B ($161$): finds the number of apple trees, the group the question excludes.\n* Choice D ($425$): subtracts $35$ trees instead of $35\\%$ of the trees.\n\n**Test Day Takeaway:** \\\"Not\\\" flips to the complement: use $100\\% - p\\%$ before multiplying, or subtract the part from the whole.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "complement-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-016",
    domain: "problem-solving",
    skills: ["percent-word-problems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A bicycle shop buys a helmet for $\\$40$ and marks up this cost by $75\\%$ to set the regular price. During a sale, the regular price is reduced by $20\\%$. What is the sale price of the helmet, in dollars?",
    choices: [
      // distractor: subtracts both percents from the cost ($40 \times 0.55$), treating the markup as a decrease.
      { id: "A", text: "$22$" },
      { id: "B", text: "$56$" },
      // distractor: nets the percents to $+55\%$ and applies $1.55$ to the cost; the $20\%$ is taken off the larger regular price, not the cost.
      { id: "C", text: "$62$" },
      // distractor: stops at the regular price and never applies the sale discount.
      { id: "D", text: "$70$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Markup Then Discount**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Regular price: $40 \\times 1.75 = 70$. Sale price: $70 \\times 0.80 = 56$.\n\n**The Full Solution:**\nStep 1: A $75\\%$ markup multiplies the cost by $1.75$: regular price $= 40 \\times 1.75 = 70$ dollars.\nStep 2: A $20\\%$ reduction multiplies by $0.80$: sale price $= 70 \\times 0.80 = 56$ dollars.\nStep 3: Check with one combined factor: $1.75 \\times 0.80 = 1.40$, and $40 \\times 1.40 = 56$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($22$): subtracts both percents from the cost ($40 \\times 0.55$), treating the markup as a decrease.\n* Choice C ($62$): nets the percents to $+55\\%$ and applies $1.55$ to the cost; the $20\\%$ is taken off the larger regular price, not the cost.\n* Choice D ($70$): stops at the regular price and never applies the sale discount.\n\n**Test Day Takeaway:** Chain percent changes as multipliers in order: $\\times 1.75$ then $\\times 0.80$. Percents that apply to different bases cannot be added or subtracted.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "markup-discount-chain",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-017",
    domain: "problem-solving",
    skills: ["percent-word-problems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A total of $240$ people applied to a fellowship program. Of the applicants, $75\\%$ were invited to an interview, and $35\\%$ of those interviewed were offered a fellowship. How many of the applicants were offered a fellowship?",
    choices: [
      { id: "A", text: "$63$" },
      // distractor: takes $35\%$ of all $240$ applicants rather than of the $180$ who were interviewed.
      { id: "B", text: "$84$" },
      // distractor: finds the interviewed applicants who were not offered a fellowship, $180 - 63$.
      { id: "C", text: "$117$" },
      // distractor: stops after the first filter and reports the number interviewed.
      { id: "D", text: "$180$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Compound Filter**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Interviewed: $0.75 \\times 240 = 180$. Offered: $0.35 \\times 180 = 63$.\n\n**The Full Solution:**\nStep 1: Apply the first filter to all applicants: $0.75 \\times 240 = 180$ were interviewed.\nStep 2: Apply the second filter to the interviewed group only: $0.35 \\times 180 = 63$ were offered a fellowship.\nStep 3: Check: the combined fraction is $0.75 \\times 0.35 = 0.2625$, and $0.2625 \\times 240 = 63$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($84$): takes $35\\%$ of all $240$ applicants rather than of the $180$ who were interviewed.\n* Choice C ($117$): finds the interviewed applicants who were not offered a fellowship, $180 - 63$.\n* Choice D ($180$): stops after the first filter and reports the number interviewed.\n\n**Test Day Takeaway:** Each \\\"of those\\\" narrows the base. Apply the percents in sequence, each to the group the previous step produced.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "compound-percent-of",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-018",
    domain: "problem-solving",
    skills: ["percent-word-problems"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A research grant of $\\$18{,}000$ was awarded to a laboratory. The laboratory spent $35\\%$ of the grant on equipment, then $20\\%$ of the remaining amount on training, and then $25\\%$ of what still remained on travel. How many dollars of the grant remained after these three expenses?",
    choices: [
      // distractor: adds the percents ($35 + 20 + 25 = 80\%$) and takes them all from the original grant, leaving $20\%$ of $18{,}000$; the later percents apply to smaller remainders.
      { id: "A", text: "$3{,}600$" },
      { id: "B", text: "$7{,}020$" },
      // distractor: stops after the second expense and omits the travel spending.
      { id: "C", text: "$9{,}360$" },
      // distractor: stops after the first expense and omits both later expenses.
      { id: "D", text: "$11{,}700$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sequential Spending Percent**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Keep the fraction that remains at each stage: $18{,}000 \\times 0.65 \\times 0.80 \\times 0.75 = 7{,}020$.\n\n**The Full Solution:**\nStep 1: After equipment, $100\\% - 35\\% = 65\\%$ remains: $0.65 \\times 18{,}000 = 11{,}700$.\nStep 2: Training takes $20\\%$ of that remainder, leaving $80\\%$: $0.80 \\times 11{,}700 = 9{,}360$. Travel takes $25\\%$ of the new remainder, leaving $75\\%$: $0.75 \\times 9{,}360 = 7{,}020$.\nStep 3: Check by adding the expenses: $6{,}300 + 2{,}340 + 2{,}340 = 10{,}980$, and $18{,}000 - 10{,}980 = 7{,}020$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3{,}600$): adds the percents ($35 + 20 + 25 = 80\\%$) and takes them all from the original grant, leaving $20\\%$ of $18{,}000$; the later percents apply to smaller remainders.\n* Choice C ($9{,}360$): stops after the second expense and omits the travel spending.\n* Choice D ($11{,}700$): stops after the first expense and omits both later expenses.\n\n**Test Day Takeaway:** \\\"Of the remaining amount\\\" means each percent uses a new, smaller base. Multiply the remaining fractions; never add the percents.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "sequential-percent-spending",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── successive-percent-change ──────────────────────────────────
  {
    id: "bank-ps-019",
    domain: "problem-solving",
    skills: ["successive-percent-change"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The water level in a reservoir rose by $20\\%$ during the spring and then fell by $20\\%$ during the summer. If the water level was $45$ feet at the start of the spring, what was the water level, in feet, at the end of the summer?",
    choices: [
      // distractor: applies the $20\%$ fall to the original $45$ feet instead of to the $54$-foot spring level.
      { id: "A", text: "$36$" },
      { id: "B", text: "$43.2$" },
      // distractor: assumes a $20\%$ rise and a $20\%$ fall cancel; they do not, because the fall is taken from a larger base.
      { id: "C", text: "$45$" },
      // distractor: stops after the spring rise and ignores the summer fall.
      { id: "D", text: "$54$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Successive Percent Round Trip**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $45 \\times 1.20 = 54$ after the rise, and $54 \\times 0.80 = 43.2$ after the fall.\n\n**The Full Solution:**\nStep 1: A $20\\%$ rise multiplies by $1.20$: $45 \\times 1.20 = 54$ feet at the end of spring.\nStep 2: A $20\\%$ fall multiplies the NEW level by $0.80$: $54 \\times 0.80 = 43.2$ feet.\nStep 3: Check with the combined factor: $1.20 \\times 0.80 = 0.96$, and $45 \\times 0.96 = 43.2$. The net change is a $4\\%$ decrease. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($36$): applies the $20\\%$ fall to the original $45$ feet instead of to the $54$-foot spring level.\n* Choice C ($45$): assumes a $20\\%$ rise and a $20\\%$ fall cancel; they do not, because the fall is taken from a larger base.\n* Choice D ($54$): stops after the spring rise and ignores the summer fall.\n\n**Test Day Takeaway:** Up $p\\%$ then down $p\\%$ never returns to the start: the combined factor is $(1 + r)(1 - r) = 1 - r^2$, always slightly less than $1$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "successive-percent-round-trip",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-020",
    domain: "problem-solving",
    skills: ["successive-percent-change"],
    difficulty: "medium",
    type: "fill-in",
    question: "An account was opened with $\\$8{,}000$. The value of the account increased by $12\\%$ during the first year and then increased by $5\\%$ during the second year. What was the value of the account, in dollars, at the end of the second year?",
    correctAnswer: "9408",
    explanation: "**SAT Pattern: Successive Percent Growth**\n\n**The correct answer is $9408$.**\n\n**The Fast Way (~15s):** Multiply by each growth factor in turn: $8{,}000 \\times 1.12 = 8{,}960$, then $8{,}960 \\times 1.05 = 9{,}408$.\n\n**The Full Solution:**\nStep 1: A $12\\%$ increase multiplies by $1.12$: $8{,}000 \\times 1.12 = 8{,}960$ dollars after the first year.\nStep 2: The $5\\%$ increase applies to the new value: $8{,}960 \\times 1.05 = 9{,}408$ dollars after the second year.\nStep 3: Check with one combined factor: $1.12 \\times 1.05 = 1.176$, and $8{,}000 \\times 1.176 = 9{,}408$. $\\checkmark$\n\n**Common Mistakes:** Entering $9{,}360$ (adding the percents to get $17\\%$ and computing $8{,}000 \\times 1.17$; the second increase acts on $8{,}960$, not $8{,}000$); entering $8{,}960$ (stopping after the first year); entering $448$ (reporting only the second-year gain, $0.05 \\times 8{,}960$).\n\n**Test Day Takeaway:** Successive percent increases multiply: $(1.12)(1.05) = 1.176$, a $17.6\\%$ total gain, not $17\\%$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "successive-percent-growth",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-021",
    domain: "problem-solving",
    skills: ["successive-percent-change"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The value of a piece of manufacturing equipment decreases by $12\\%$ every $3$ years. The equipment is worth $\\$45{,}000$ today. Which of the following expressions gives the value of the equipment, in dollars, $t$ years from today?",
    choices: [
      // distractor: uses the rate of decrease, $0.12$, as the base instead of the fraction that remains, $0.88$.
      { id: "A", text: "$45{,}000(0.12)^{\\frac{t}{3}}$" },
      // distractor: uses exponent $3t$, which applies the $12\%$ drop three times per year instead of once every three years.
      { id: "B", text: "$45{,}000(0.88)^{3t}$" },
      // distractor: uses a growth factor of $1.12$, which makes the value increase instead of decrease.
      { id: "C", text: "$45{,}000(1.12)^{\\frac{t}{3}}$" },
      { id: "D", text: "$45{,}000(0.88)^{\\frac{t}{3}}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Exponential Depreciation Expression**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Each $3$-year period multiplies the value by $1 - 0.12 = 0.88$, and $t$ years contain $\\frac{t}{3}$ such periods, so the value is $45{,}000(0.88)^{t/3}$.\n\n**The Full Solution:**\nStep 1: A $12\\%$ decrease leaves $88\\%$ of the value, so the decay factor per period is $0.88$.\nStep 2: The period is $3$ years, not $1$ year. In $t$ years the number of periods is $\\frac{t}{3}$, so the exponent is $\\frac{t}{3}$.\nStep 3: Value $= 45{,}000(0.88)^{t/3}$. Check: at $t = 3$ the exponent is $1$ and the value is $45{,}000 \\times 0.88 = 39{,}600$, exactly one $12\\%$ drop. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($45{,}000(0.12)^{\\frac{t}{3}}$): uses the rate of decrease, $0.12$, as the base instead of the fraction that remains, $0.88$.\n* Choice B ($45{,}000(0.88)^{3t}$): uses exponent $3t$, which applies the $12\\%$ drop three times per year instead of once every three years.\n* Choice C ($45{,}000(1.12)^{\\frac{t}{3}}$): uses a growth factor of $1.12$, which makes the value increase instead of decrease.\n\n**Test Day Takeaway:** Exponential change is $\\text{initial} \\times (\\text{factor})^{\\text{number of periods}}$. When the period is $k$ years, the exponent is $\\frac{t}{k}$; test it with $t = k$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "exponential-decay-expression",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-022",
    domain: "problem-solving",
    skills: ["successive-percent-change"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A retailer sets the regular price of an item $60\\%$ above the retailer's cost for the item. During a clearance sale, the regular price is reduced by $35\\%$. The clearance price is what percent greater than the retailer's cost?",
    choices: [
      { id: "A", text: "$4\\%$" },
      // distractor: subtracts the percents, $60\% - 35\%$; the $35\%$ is taken from the larger regular price, so it removes more than $35$ points of markup.
      { id: "B", text: "$25\\%$" },
      // distractor: applies the $35\%$ reduction only to the $60\%$ markup ($0.65 \times 60\%$) instead of to the whole regular price.
      { id: "C", text: "$39\\%$" },
      // distractor: reports the multiplier $1.04$ as a percent instead of the change, which is $1.04 - 1 = 0.04$.
      { id: "D", text: "$104\\%$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Net Effect of Successive Percent Changes**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Combined factor: $1.60 \\times 0.65 = 1.04$, so the clearance price is $4\\%$ above cost.\n\n**The Full Solution:**\nStep 1: Let the cost be $c$. The regular price is $1.60c$, and a $35\\%$ reduction leaves $65\\%$ of that: clearance price $= 0.65(1.60c) = 1.04c$.\nStep 2: A multiplier of $1.04$ means the clearance price is $4\\%$ greater than the cost.\nStep 3: Check with $c = 100$: regular price $160$, reduction $56$, clearance price $104$, which is $4\\%$ above $100$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($25\\%$): subtracts the percents, $60\\% - 35\\%$; the $35\\%$ is taken from the larger regular price, so it removes more than $35$ points of markup.\n* Choice C ($39\\%$): applies the $35\\%$ reduction only to the $60\\%$ markup ($0.65 \\times 60\\%$) instead of to the whole regular price.\n* Choice D ($104\\%$): reports the multiplier $1.04$ as a percent instead of the change, which is $1.04 - 1 = 0.04$.\n\n**Test Day Takeaway:** Multiply the factors, then subtract $1$: $(1.60)(0.65) - 1 = 0.04$. Percents applied to different bases never simply add or subtract.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "successive-percent-net",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── calculate-mean ─────────────────────────────────────────────
  {
    id: "bank-ps-023",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The dot plot shows the number of seedlings that sprouted in each of $10$ trays in a greenhouse. What is the mean number of seedlings per tray?",
    diagram: { type: "dotPlot", params: { data: [{ value: 2, count: 1 }, { value: 3, count: 2 }, { value: 4, count: 3 }, { value: 5, count: 1 }, { value: 6, count: 2 }, { value: 8, count: 1 }], xMin: 1, xMax: 9, xLabel: "Number of seedlings" } },
    choices: [
      // distractor: reports the mode (the tallest stack) or the median, not the mean.
      { id: "A", text: "$4$" },
      { id: "B", text: "$4.5$" },
      // distractor: reports the range, $8 - 2$.
      { id: "C", text: "$6$" },
      // distractor: divides the sum by $6$, the number of distinct values on the axis, instead of by the $10$ dots.
      { id: "D", text: "$7.5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Basic Mean**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Read the dots: $2, 3, 3, 4, 4, 4, 5, 6, 6, 8$. The sum is $45$, and $\\frac{45}{10} = 4.5$.\n\n**The Full Solution:**\nStep 1: Each dot is one tray. Listing the values: $2, 3, 3, 4, 4, 4, 5, 6, 6, 8$, a total of $10$ trays.\nStep 2: Sum $= 2 + 6 + 12 + 5 + 12 + 8 = 45$.\nStep 3: Mean $= \\frac{45}{10} = 4.5$. Check: $4.5$ sits between the middle values $4$ and the larger values $5$ through $8$ that pull the mean above the mode. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): reports the mode (the tallest stack) or the median, not the mean.\n* Choice C ($6$): reports the range, $8 - 2$.\n* Choice D ($7.5$): divides the sum by $6$, the number of distinct values on the axis, instead of by the $10$ dots.\n\n**Test Day Takeaway:** On a dot plot, count every dot in the total and in the divisor: repeated values count each time they appear.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "basic-mean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-024",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "easy",
    type: "fill-in",
    question: "The dot plot shows the daily rainfall, in millimeters, recorded at a weather station on each of $7$ days. What is the mean daily rainfall, in millimeters, for these $7$ days? Round your answer to the nearest tenth.",
    diagram: { type: "dotPlot", params: { data: [{ value: 12, count: 1 }, { value: 13, count: 2 }, { value: 15, count: 1 }, { value: 16, count: 1 }, { value: 18, count: 1 }, { value: 20, count: 1 }], xMin: 10, xMax: 22, xLabel: "Rainfall (mm)" } },
    correctAnswer: "15.3",
    explanation: "**SAT Pattern: Mean with Rounding**\n\n**The correct answer is $15.3$.**\n\n**The Fast Way (~20s):** Values: $12, 13, 13, 15, 16, 18, 20$. Sum $= 107$, and $\\frac{107}{7} = 15.28\\ldots \\approx 15.3$.\n\n**The Full Solution:**\nStep 1: Read one value per dot: $12, 13, 13, 15, 16, 18, 20$ (the $13$ appears twice).\nStep 2: Sum $= 12 + 26 + 15 + 16 + 18 + 20 = 107$.\nStep 3: Mean $= \\frac{107}{7} = 15.2857\\ldots$, which rounds to $15.3$. Check: $7 \\times 15.3 = 107.1$, within rounding of $107$. $\\checkmark$\n\n**Common Mistakes:** Entering $15$ (the median, the middle dot); entering $13$ (the mode); entering $17.8$ (dividing by $6$, the number of distinct values, instead of $7$ dots); entering $15.28$ or $15.29$ (not rounding to the tenth as instructed).\n\n**Test Day Takeaway:** Sum every dot, divide by the number of dots, and round only at the end to the precision the question names.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "basic-mean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-025",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A biologist recorded the masses of $8$ frogs, and the mean mass was $62$ grams. After the mass of a ninth frog was recorded, the mean mass of the $9$ frogs was $64$ grams. What is the mass, in grams, of the ninth frog?",
    choices: [
      // distractor: assumes the added value equals the new mean; a value equal to the new mean would not have raised the mean from $62$.
      { id: "A", text: "$64$" },
      // distractor: adds the $8 \times 2 = 16$ extra grams to the old mean ($62$) instead of to the new mean ($64$).
      { id: "B", text: "$78$" },
      { id: "C", text: "$80$" },
      // distractor: multiplies the $2$-gram shift by $9$ (the new count) instead of by the $8$ original values.
      { id: "D", text: "$82$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Missing Value from Mean Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Convert both means to totals: $8 \\times 62 = 496$ before and $9 \\times 64 = 576$ after. The ninth frog is the difference, $576 - 496 = 80$ grams.\n\n**The Full Solution:**\nStep 1: Mean $\\times$ count $=$ sum. Before: $8 \\times 62 = 496$ grams.\nStep 2: After: $9 \\times 64 = 576$ grams. The ninth mass is $576 - 496 = 80$ grams.\nStep 3: Check with the shift shortcut: the new frog must supply the new mean ($64$) plus $2$ extra grams for each of the $8$ original frogs: $64 + 8 \\times 2 = 80$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($64$): assumes the added value equals the new mean; a value equal to the new mean would not have raised the mean from $62$.\n* Choice B ($78$): adds the $8 \\times 2 = 16$ extra grams to the old mean ($62$) instead of to the new mean ($64$).\n* Choice D ($82$): multiplies the $2$-gram shift by $9$ (the new count) instead of by the $8$ original values.\n\n**Test Day Takeaway:** Convert every mean to a sum. The new value is (new sum) $-$ (old sum), or equivalently new mean $+$ (old count)(shift).",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "mean-missing-value",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-026",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table shows a swimmer's times, in seconds, for the first $4$ trials of an event. The swimmer wants the mean time for $5$ trials to be at most $31.8$ seconds. What is the greatest possible time, in seconds, for the fifth trial?",
    questionTable: { headers: ["Trial", "Time (seconds)"], rows: [["1", "32.1"], ["2", "31.7"], ["3", "32.4"], ["4", "31.9"]] },
    choices: [
      { id: "A", text: "$30.9$" },
      // distractor: subtracts the current shortfall ($32.025 - 31.8 = 0.225$) from the target only once, giving about $31.6$, instead of making up the shortfall for all four earlier trials.
      { id: "B", text: "$31.6$" },
      // distractor: assumes the fifth trial only needs to equal the target mean; since the first four average above $31.8$, the fifth must be faster than $31.8$.
      { id: "C", text: "$31.8$" },
      // distractor: reports the current mean of the four trials, rounded, rather than solving for the fifth trial.
      { id: "D", text: "$32.0$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Constraint on Mean**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Five trials at a mean of $31.8$ allow a total of $5 \\times 31.8 = 159$ seconds. The first four total $128.1$, so the fifth can be at most $159 - 128.1 = 30.9$.\n\n**The Full Solution:**\nStep 1: A mean of at most $31.8$ over $5$ trials means the total is at most $5 \\times 31.8 = 159$ seconds.\nStep 2: The first four trials total $32.1 + 31.7 + 32.4 + 31.9 = 128.1$ seconds.\nStep 3: The fifth time $x$ must satisfy $128.1 + x \\le 159$, so $x \\le 30.9$. Check: $\\frac{128.1 + 30.9}{5} = \\frac{159}{5} = 31.8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($31.6$): subtracts the current shortfall ($32.025 - 31.8 = 0.225$) from the target only once, giving about $31.6$, instead of making up the shortfall for all four earlier trials.\n* Choice C ($31.8$): assumes the fifth trial only needs to equal the target mean; since the first four average above $31.8$, the fifth must be faster than $31.8$.\n* Choice D ($32.0$): reports the current mean of the four trials, rounded, rather than solving for the fifth trial.\n\n**Test Day Takeaway:** Turn a target mean into a target total: (target mean)(count). Subtract what is already banked to bound the remaining value.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "mean-target-constraint",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-027",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Sample A consists of $15$ measurements of the caffeine content, in milligrams, of a beverage and has a mean of $42$ milligrams. Sample B consists of $25$ measurements of the same beverage. When the two samples are combined, the $40$ measurements have a mean of $48$ milligrams. What is the mean caffeine content, in milligrams, of sample B?",
    choices: [
      // distractor: divides sample B's sum, $1{,}290$, by all $40$ measurements instead of by the $25$ in sample B.
      { id: "A", text: "$32.25$" },
      { id: "B", text: "$51.6$" },
      // distractor: treats the samples as equal in size and solves $\frac{42 + x}{2} = 48$; the combined mean is a weighted mean, not a simple average.
      { id: "C", text: "$54$" },
      // distractor: swaps the sample sizes, using $25$ for sample A and $15$ for sample B.
      { id: "D", text: "$58$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Weighted Combined Mean**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Combined sum $40 \\times 48 = 1{,}920$; sample A's sum $15 \\times 42 = 630$. Sample B's sum is $1{,}290$, so its mean is $\\frac{1{,}290}{25} = 51.6$.\n\n**The Full Solution:**\nStep 1: Convert each mean to a sum. Combined: $40 \\times 48 = 1{,}920$ mg. Sample A: $15 \\times 42 = 630$ mg.\nStep 2: Sample B's sum is $1{,}920 - 630 = 1{,}290$ mg, so its mean is $\\frac{1{,}290}{25} = 51.6$ mg.\nStep 3: Check with weights: $\\frac{15(42) + 25(51.6)}{40} = \\frac{630 + 1{,}290}{40} = 48$. $\\checkmark$ (Also, $48$ lies closer to $51.6$ than to $42$, as it should with B the larger sample.)\n\n**Why the wrong answers are tempting:**\n* Choice A ($32.25$): divides sample B's sum, $1{,}290$, by all $40$ measurements instead of by the $25$ in sample B.\n* Choice C ($54$): treats the samples as equal in size and solves $\\frac{42 + x}{2} = 48$; the combined mean is a weighted mean, not a simple average.\n* Choice D ($58$): swaps the sample sizes, using $25$ for sample A and $15$ for sample B.\n\n**Test Day Takeaway:** A combined mean is a weighted mean. Work in sums: (combined sum) $-$ (known sum) $=$ (unknown sum), then divide by the unknown group's own count.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "combined-group-mean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── weighted-mean ──────────────────────────────────────────────
  {
    id: "bank-ps-028",
    domain: "problem-solving",
    skills: ["weighted-mean"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table shows the weight of each component of a certification exam and a candidate's score on each component. The overall score is the weighted mean of the component scores. What is the candidate's overall score?",
    questionTable: { headers: ["Component", "Weight", "Score"], rows: [["Written", "45%", "82"], ["Practical", "35%", "90"], ["Oral", "20%", "75"]] },
    choices: [
      // distractor: omits the oral component, adding only $36.9 + 31.5$.
      { id: "A", text: "$68.4$" },
      // distractor: takes the simple average $\frac{82 + 90 + 75}{3}$, ignoring the weights.
      { id: "B", text: "$82.3$" },
      { id: "C", text: "$83.4$" },
      // distractor: swaps the $45\%$ and $35\%$ weights, applying $0.45$ to the practical score and $0.35$ to the written score.
      { id: "D", text: "$84.2$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Weighted Average from Percentages**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Multiply each score by its weight and add: $0.45(82) + 0.35(90) + 0.20(75) = 36.9 + 31.5 + 15 = 83.4$.\n\n**The Full Solution:**\nStep 1: Convert the weights to decimals: $0.45$, $0.35$, $0.20$. They sum to $1$, so no further division is needed.\nStep 2: Weighted contributions: $0.45 \\times 82 = 36.9$; $0.35 \\times 90 = 31.5$; $0.20 \\times 75 = 15$.\nStep 3: Overall score $= 36.9 + 31.5 + 15 = 83.4$. Check: the result lies between the lowest score ($75$) and the highest ($90$), closest to the heavily weighted $82$ and $90$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($68.4$): omits the oral component, adding only $36.9 + 31.5$.\n* Choice B ($82.3$): takes the simple average $\\frac{82 + 90 + 75}{3}$, ignoring the weights.\n* Choice D ($84.2$): swaps the $45\\%$ and $35\\%$ weights, applying $0.45$ to the practical score and $0.35$ to the written score.\n\n**Test Day Takeaway:** A weighted mean is $\\sum (\\text{weight} \\times \\text{score})$ when the weights sum to $100\\%$. Match each weight to its own row.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "weighted-average",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-029",
    domain: "problem-solving",
    skills: ["weighted-mean"],
    difficulty: "medium",
    type: "fill-in",
    question: "A grocer makes a mixture by combining $5$ kilograms of almonds that cost $\\$9.60$ per kilogram with $3$ kilograms of cashews that cost $\\$12.80$ per kilogram. What is the cost per kilogram, in dollars, of the mixture?",
    correctAnswer: "10.8",
    explanation: "**SAT Pattern: Weighted Average Mixture**\n\n**The correct answer is $10.8$.**\n\n**The Fast Way (~20s):** Total cost $= 5(9.60) + 3(12.80) = 48 + 38.40 = 86.40$ dollars for $8$ kilograms, so $\\frac{86.40}{8} = 10.80$ dollars per kilogram.\n\n**The Full Solution:**\nStep 1: Cost per kilogram of the mixture $= \\frac{\\text{total cost}}{\\text{total mass}}$, a mean weighted by mass.\nStep 2: Total cost $= 5 \\times 9.60 + 3 \\times 12.80 = 48.00 + 38.40 = 86.40$ dollars; total mass $= 5 + 3 = 8$ kilograms.\nStep 3: $\\frac{86.40}{8} = 10.80$ dollars per kilogram. Check: the result is between $9.60$ and $12.80$ and closer to $9.60$, since almonds make up more of the mixture. $\\checkmark$\n\n**Common Mistakes:** Entering $11.2$ (averaging the two prices, $\\frac{9.60 + 12.80}{2}$, without weighting by the $5$ and $3$ kilograms); entering $86.4$ (the total cost rather than the cost per kilogram); entering $43.2$ (dividing the total cost by $2$ ingredients instead of $8$ kilograms).\n\n**Test Day Takeaway:** Mixture price per unit $= \\frac{\\text{total cost}}{\\text{total amount}}$; the answer must fall between the two prices, nearer the larger share.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "weighted-average-mixture",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-030",
    domain: "problem-solving",
    skills: ["weighted-mean"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The table shows the number of credits and the grade points for each of three courses a student completed. The student's grade point average for these courses is the mean of the grade points weighted by credits. If the student's grade point average for these courses is $3.32$, what is the value of $x$?",
    questionTable: { headers: ["Course", "Credits", "Grade points"], rows: [["Biology", "4", "3.5"], ["Chemistry", "3", "x"], ["Statistics", "3", "3.0"]] },
    choices: [
      // distractor: divides the missing $10.2$ weighted points by $4$ (Biology's credits) instead of by Chemistry's $3$ credits.
      { id: "A", text: "$2.55$" },
      // distractor: assumes the unknown course simply equals the overall average; with unequal weights and unequal grades, it does not.
      { id: "B", text: "$3.32$" },
      { id: "C", text: "$3.4$" },
      // distractor: ignores the credits and solves $\frac{3.5 + x + 3.0}{3} = 3.32$, which treats all three courses as equally weighted.
      { id: "D", text: "$3.46$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Weighted Average by Credits**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Total credits $= 10$, so total weighted points $= 10 \\times 3.32 = 33.2$. Biology and Statistics contribute $4(3.5) + 3(3.0) = 23$, so $3x = 10.2$ and $x = 3.4$.\n\n**The Full Solution:**\nStep 1: A credit-weighted GPA is $\\frac{\\sum(\\text{credits} \\times \\text{grade points})}{\\sum \\text{credits}}$. Total credits $= 4 + 3 + 3 = 10$.\nStep 2: Set up the equation: $\\frac{4(3.5) + 3x + 3(3.0)}{10} = 3.32$, so $14 + 3x + 9 = 33.2$ and $3x = 10.2$.\nStep 3: $x = 3.4$. Check: $\\frac{14 + 10.2 + 9}{10} = \\frac{33.2}{10} = 3.32$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2.55$): divides the missing $10.2$ weighted points by $4$ (Biology's credits) instead of by Chemistry's $3$ credits.\n* Choice B ($3.32$): assumes the unknown course simply equals the overall average; with unequal weights and unequal grades, it does not.\n* Choice D ($3.46$): ignores the credits and solves $\\frac{3.5 + x + 3.0}{3} = 3.32$, which treats all three courses as equally weighted.\n\n**Test Day Takeaway:** When the weighted mean is given and one value is missing, multiply the mean by the total weight to get the total, subtract the known contributions, and divide by the missing value's OWN weight.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "weighted-average-credits",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── find-median ────────────────────────────────────────────────
  {
    id: "bank-ps-031",
    domain: "problem-solving",
    skills: ["find-median"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The dot plot shows the lengths, in centimeters, of $11$ fish caught during a survey of a stream. What is the median length, in centimeters, of the fish?",
    diagram: { type: "dotPlot", params: { data: [{ value: 14, count: 1 }, { value: 15, count: 3 }, { value: 16, count: 1 }, { value: 17, count: 1 }, { value: 19, count: 1 }, { value: 20, count: 2 }, { value: 21, count: 1 }, { value: 22, count: 1 }], xMin: 13, xMax: 23, xLabel: "Length (cm)" } },
    choices: [
      // distractor: reports the mode, the tallest stack, instead of the middle value.
      { id: "A", text: "$15$" },
      { id: "B", text: "$17$" },
      // distractor: computes the mean, $\frac{194}{11}$, rather than the median.
      { id: "C", text: "$17.6$" },
      // distractor: averages the smallest and largest values, $\frac{14 + 22}{2}$, which is the midrange, not the median.
      { id: "D", text: "$18$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Median of Sorted Odd-Count Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** With $11$ dots, the median is the $6$th dot counting from the left. Counting: $14, 15, 15, 15, 16, \\mathbf{17}$, so the median is $17$.\n\n**The Full Solution:**\nStep 1: A dot plot is already in order. For an odd number of values, $n = 11$, the median is the $\\frac{11 + 1}{2} = 6$th value.\nStep 2: Count dots from the left: $14$ (1), $15$ (2, 3, 4), $16$ (5), $17$ (6). The $6$th value is $17$.\nStep 3: Check: five dots lie to the left of $17$ ($14, 15, 15, 15, 16$) and five lie to the right ($19, 20, 20, 21, 22$). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): reports the mode, the tallest stack, instead of the middle value.\n* Choice C ($17.6$): computes the mean, $\\frac{194}{11}$, rather than the median.\n* Choice D ($18$): averages the smallest and largest values, $\\frac{14 + 22}{2}$, which is the midrange, not the median.\n\n**Test Day Takeaway:** For an odd count $n$, the median is the $\\frac{n+1}{2}$th value in order; on a dot plot, count dots from one end, counting each dot in a stack separately.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "median-odd-set",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-032",
    domain: "problem-solving",
    skills: ["find-median"],
    difficulty: "easy",
    type: "fill-in",
    question: "The dot plot shows the number of customers served at a kiosk during each of $8$ one-hour periods. What is the median number of customers served per one-hour period?",
    diagram: { type: "dotPlot", params: { data: [{ value: 3, count: 1 }, { value: 5, count: 2 }, { value: 6, count: 1 }, { value: 8, count: 1 }, { value: 9, count: 2 }, { value: 12, count: 1 }], xMin: 2, xMax: 13, xLabel: "Customers served" } },
    correctAnswer: "7",
    explanation: "**SAT Pattern: Median of Even-Count Set**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~15s):** With $8$ dots, the median is the average of the $4$th and $5$th dots: $6$ and $8$. Median $= \\frac{6 + 8}{2} = 7$.\n\n**The Full Solution:**\nStep 1: For an even count, $n = 8$, the median is the mean of the two middle values, the $4$th and $5$th in order.\nStep 2: Count from the left: $3$ (1), $5$ (2, 3), $6$ (4), $8$ (5). The middle values are $6$ and $8$.\nStep 3: Median $= \\frac{6 + 8}{2} = 7$. Check: three dots lie below $6$ and three lie above $8$, so the middle pair is correct. $\\checkmark$\n\n**Common Mistakes:** Entering $6$ or $8$ (picking one of the two middle values instead of averaging them); entering $5$ or $9$ (a mode; the data have two); entering $7.125$ (the mean, $\\frac{57}{8}$). Note that the median need not be a value in the data set.\n\n**Test Day Takeaway:** Even count: average the two middle values. The median of $8$ values is the mean of the $4$th and $5$th and may not appear in the data.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "median-even-set",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-033",
    domain: "problem-solving",
    skills: ["find-median"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A data set consists of $13$ values and has a median of $62$. The $3$ smallest values in the data set, each of which is less than $62$, are removed. Which of the following must be true about the median of the remaining $10$ values?",
    choices: [
      // distractor: reverses the direction: dropping small values cannot lower the median.
      { id: "A", text: "It is less than $62$." },
      // distractor: assumes the median is unchanged; that happens only if the $8$th and $9$th values both equal $62$, which is not guaranteed.
      { id: "B", text: "It is equal to $62$." },
      // distractor: allows decreases that are impossible and rules out the increase that typically occurs.
      { id: "C", text: "It is less than or equal to $62$." },
      { id: "D", text: "It is greater than or equal to $62$." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Median After Removal Reasoning**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Removing values from the low end can only push the middle rightward: the new median is the average of the original $8$th and $9$th values, both at least $62$.\n\n**The Full Solution:**\nStep 1: In the ordered list of $13$ values, the median is the $7$th value, so $v_7 = 62$, every value from $v_1$ to $v_6$ is at most $62$, and every value from $v_8$ to $v_{13}$ is at least $62$.\nStep 2: Removing $v_1, v_2, v_3$ leaves the $10$ values $v_4, \\ldots, v_{13}$. The new median is the mean of the $5$th and $6$th of these, which are $v_8$ and $v_9$.\nStep 3: Since $v_8 \\ge 62$ and $v_9 \\ge 62$, their mean is at least $62$. It equals $62$ only if $v_8 = v_9 = 62$, and it exceeds $62$ otherwise, so \\\"greater than or equal to $62$\\\" is the only statement that must hold. Check with $\\{50, 51, 52, 60, 60, 61, 62, 63, 64, 70, 71, 72, 73\\}$: after removal the median is $\\frac{63 + 64}{2} = 63.5 \\ge 62$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (less than $62$): reverses the direction: dropping small values cannot lower the median.\n* Choice B (equal to $62$): assumes the median is unchanged; that happens only if the $8$th and $9$th values both equal $62$, which is not guaranteed.\n* Choice C (less than or equal to $62$): allows decreases that are impossible and rules out the increase that typically occurs.\n\n**Test Day Takeaway:** Track positions, not values: after removing $k$ values from one end, locate the new middle position(s) in the original ordered list and use the inequalities the original median guarantees.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "median-removal-reasoning",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-034",
    domain: "problem-solving",
    skills: ["find-median"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table shows the number of siblings reported by each of $40$ students in a survey. What is the median number of siblings for the $40$ students?",
    questionTable: { headers: ["Number of siblings", "Number of students"], rows: [["0", "7"], ["1", "12"], ["2", "11"], ["3", "6"], ["4", "4"]] },
    choices: [
      // distractor: reports the mode (the row with the largest frequency, $12$) or stops the cumulative count at $19$, one position short.
      { id: "A", text: "$1$" },
      // distractor: averages $1$ and $2$ on the assumption that the $20$th and $21$st values straddle two rows; both actually sit in the $2$ row.
      { id: "B", text: "$1.5$" },
      { id: "C", text: "$2$" },
      // distractor: reports the largest frequency instead of the value it corresponds to.
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Median from Frequency Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** With $40$ students, the median averages the $20$th and $21$st values, and the running totals are $7$, then $19$, then $30$. Both positions fall in the \\\"$2$ siblings\\\" row, so the median is $2$.\n\n**The Full Solution:**\nStep 1: Total $= 7 + 12 + 11 + 6 + 4 = 40$. For an even count, the median is the mean of the $20$th and $21$st values in order.\nStep 2: Build cumulative counts: $0$ siblings covers positions $1$ to $7$; $1$ sibling covers $8$ to $19$; $2$ siblings covers $20$ to $30$; $3$ siblings covers $31$ to $36$; $4$ siblings covers $37$ to $40$.\nStep 3: Positions $20$ and $21$ both lie in the \\\"$2$ siblings\\\" row, so the median is $\\frac{2 + 2}{2} = 2$. Check: $19$ students reported fewer than $2$ and $10$ reported more than $2$, so the middle lands on $2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): reports the mode (the row with the largest frequency, $12$) or stops the cumulative count at $19$, one position short.\n* Choice B ($1.5$): averages $1$ and $2$ on the assumption that the $20$th and $21$st values straddle two rows; both actually sit in the $2$ row.\n* Choice D ($12$): reports the largest frequency instead of the value it corresponds to.\n\n**Test Day Takeaway:** For a frequency table, find the median position(s) from the total count, then walk the cumulative frequencies to see which value covers those positions.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "median-frequency-table",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-035",
    domain: "problem-solving",
    skills: ["find-median"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A meteorologist recorded $9$ wind speeds, in kilometers per hour, and found that their median was $40$. After a tenth wind speed was recorded, the median of the $10$ wind speeds was $43$. Which of the following must be true about the tenth wind speed?",
    choices: [
      // distractor: assumes the added value equals the new median; a value of $43$ would give a median of $\frac{40 + 43}{2} = 41.5$.
      { id: "A", text: "It is equal to $43$." },
      // distractor: is possible but not necessary; the tenth value can be any number greater than $46$ if the original $6$th value is $46$.
      { id: "B", text: "It is equal to $46$." },
      { id: "C", text: "It is at least $46$." },
      // distractor: rules out larger values that also work, such as the $w = 90$ example.
      { id: "D", text: "It is at most $46$." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Median Shift from Insertion**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Adding one value to $9$ makes the median the average of the $5$th and $6$th values. The $5$th is still $40$, so the $6$th must be $46$; the new value is either that $46$ or something even larger.\n\n**The Full Solution:**\nStep 1: In the original ordered list, the median is the $5$th value: $v_5 = 40$. With $10$ values, the median is the mean of the $5$th and $6$th values.\nStep 2: If the new value $w$ were less than $40$, the $5$th and $6$th values of the new list would be $v_4$ and $v_5$, both at most $40$, giving a median of at most $40$, not $43$. So $w \\ge 40$, and the new $5$th value stays $v_5 = 40$.\nStep 3: Then $\\frac{40 + (\\text{new 6th value})}{2} = 43$, so the new $6$th value is $46$. That $6$th value is the smaller of $w$ and $v_6$. Either $w = 46$ (with $v_6 \\ge 46$) or $v_6 = 46$ and $w > 46$. In every case $w \\ge 46$. Check: original $\\{30, 32, 35, 38, 40, 46, 50, 55, 60\\}$ with $w = 90$ gives new middle values $40$ and $46$, median $43$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (equal to $43$): assumes the added value equals the new median; a value of $43$ would give a median of $\\frac{40 + 43}{2} = 41.5$.\n* Choice B (equal to $46$): is possible but not necessary; the tenth value can be any number greater than $46$ if the original $6$th value is $46$.\n* Choice D (at most $46$): rules out larger values that also work, such as the $w = 90$ example.\n\n**Test Day Takeaway:** With an even count the median averages two middle values. Pin down the one that is known, solve for the other, and remember that the inserted value can be anything at or beyond that boundary.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "median-insertion-reasoning",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── find-mode ──────────────────────────────────────────────────
  {
    id: "bank-ps-036",
    domain: "problem-solving",
    skills: ["find-mode"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The dot plot shows the number of eggs collected from a henhouse on each of $15$ mornings. What is the mode of the data?",
    diagram: { type: "dotPlot", params: { data: [{ value: 2, count: 1 }, { value: 3, count: 2 }, { value: 4, count: 3 }, { value: 5, count: 3 }, { value: 6, count: 5 }, { value: 7, count: 1 }], xMin: 1, xMax: 8, xLabel: "Eggs collected" } },
    choices: [
      // distractor: reports the smallest value (the shortest stack), not the most frequent one.
      { id: "A", text: "$2$" },
      // distractor: computes the mean, $\frac{72}{15}$, rather than the mode.
      { id: "B", text: "$4.8$" },
      // distractor: reports the height of the tallest stack ($5$ dots) instead of the value beneath it, or reports the median.
      { id: "C", text: "$5$" },
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Mode Identification**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** The mode is the value with the tallest stack of dots. The stack above $6$ has $5$ dots, more than any other, so the mode is $6$.\n\n**The Full Solution:**\nStep 1: The mode is the value that occurs most often. On a dot plot, that is the tallest column.\nStep 2: Column heights: $2$ has $1$ dot, $3$ has $2$, $4$ has $3$, $5$ has $3$, $6$ has $5$, $7$ has $1$.\nStep 3: The tallest column is above $6$, so the mode is $6$. Check: the heights add to $1 + 2 + 3 + 3 + 5 + 1 = 15$, matching the $15$ mornings. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports the smallest value (the shortest stack), not the most frequent one.\n* Choice B ($4.8$): computes the mean, $\\frac{72}{15}$, rather than the mode.\n* Choice C ($5$): reports the height of the tallest stack ($5$ dots) instead of the value beneath it, or reports the median.\n\n**Test Day Takeaway:** Mode is read off the axis under the tallest stack; the stack's height is a count, never the answer.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "basic-mode",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-037",
    domain: "problem-solving",
    skills: ["find-mode"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The bar graph shows the number of pairs of shoes of each size sold at a store on one day. What is the mode of the shoe sizes sold?",
    diagram: { type: "barChart", params: { data: [{ label: "6", value: 2 }, { label: "7", value: 8 }, { label: "8", value: 5 }, { label: "9", value: 7 }, { label: "10", value: 4 }, { label: "11", value: 3 }], xAxisLabel: "Shoe size", yAxisLabel: "Pairs sold", yMax: 10, yStep: 2 } },
    choices: [
      { id: "A", text: "$7$" },
      // distractor: reports the height of the tallest bar ($8$ pairs) instead of the size on the horizontal axis; $8$ is also the median size, not the mode.
      { id: "B", text: "$8$" },
      // distractor: picks the second-tallest bar ($7$ pairs).
      { id: "C", text: "$9$" },
      // distractor: reports the largest shoe size rather than the most frequently sold size.
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Mode of Shoe Sizes**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** The mode is the size with the tallest bar. The bar for size $7$ reaches $8$ pairs, the highest, so the mode is $7$.\n\n**The Full Solution:**\nStep 1: Each bar's height is the number of pairs sold of that size; the mode is the size sold most often, the tallest bar.\nStep 2: Bar heights: size $6$: $2$; size $7$: $8$; size $8$: $5$; size $9$: $7$; size $10$: $4$; size $11$: $3$.\nStep 3: The tallest bar is size $7$ with $8$ pairs, so the mode is $7$. Check: no other bar reaches $8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): reports the height of the tallest bar ($8$ pairs) instead of the size on the horizontal axis; $8$ is also the median size, not the mode.\n* Choice C ($9$): picks the second-tallest bar ($7$ pairs).\n* Choice D ($11$): reports the largest shoe size rather than the most frequently sold size.\n\n**Test Day Takeaway:** On a bar graph of counts, the mode is the CATEGORY under the tallest bar. Read the label on the horizontal axis, not the height.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "basic-mode",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-038",
    domain: "problem-solving",
    skills: ["find-mode", "find-median"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The dot plot shows the number of points a basketball player scored in each of $13$ games. What is the value of the mode of the data minus the median of the data?",
    diagram: { type: "dotPlot", params: { data: [{ value: 4, count: 1 }, { value: 5, count: 3 }, { value: 7, count: 1 }, { value: 8, count: 2 }, { value: 10, count: 1 }, { value: 12, count: 4 }, { value: 13, count: 1 }], xMin: 3, xMax: 14, xLabel: "Points scored" } },
    choices: [
      // distractor: subtracts the mean, $\frac{113}{13} \approx 8.7$, from the mode instead of the median.
      { id: "A", text: "$3.3$" },
      { id: "B", text: "$4$" },
      // distractor: uses the second-tallest stack, $5$, as if it were the median: $12 - 5$.
      { id: "C", text: "$7$" },
      // distractor: computes the range, $13 - 4$, instead of mode minus median.
      { id: "D", text: "$9$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Mode vs Median Comparison**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The mode is the tallest stack, $12$ points, and the median is the $7$th of the $13$ dots, which is $8$. The difference is $12 - 8 = 4$.\n\n**The Full Solution:**\nStep 1: The mode is the value with the most dots: $12$ has $4$ dots, more than any other value.\nStep 2: For $13$ values, the median is the $7$th in order. Counting from the left: $4$ (1), $5$ (2, 3, 4), $7$ (5), $8$ (6, 7). The median is $8$.\nStep 3: Mode $-$ median $= 12 - 8 = 4$. Check: six dots lie below the $7$th dot and six lie above it ($10, 12, 12, 12, 12, 13$). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3.3$): subtracts the mean, $\\frac{113}{13} \\approx 8.7$, from the mode instead of the median.\n* Choice C ($7$): uses the second-tallest stack, $5$, as if it were the median: $12 - 5$.\n* Choice D ($9$): computes the range, $13 - 4$, instead of mode minus median.\n\n**Test Day Takeaway:** Mode comes from stack height; median comes from dot position. Find each separately, then subtract in the order the question states.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "mode-median-comparison",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── range-calculation ──────────────────────────────────────────
  {
    id: "bank-ps-039",
    domain: "problem-solving",
    skills: ["range-calculation"],
    difficulty: "easy",
    type: "fill-in",
    question: "The dot plot shows the masses, in kilograms, of $9$ packages. What is the range, in kilograms, of the masses of the packages?",
    diagram: { type: "dotPlot", params: { data: [{ value: 2, count: 1 }, { value: 3, count: 2 }, { value: 5, count: 1 }, { value: 6, count: 3 }, { value: 8, count: 1 }, { value: 11, count: 1 }], xMin: 1, xMax: 12, xLabel: "Mass (kg)" } },
    correctAnswer: "9",
    explanation: "**SAT Pattern: Range from Set**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~5s):** Range $=$ largest $-$ smallest $= 11 - 2 = 9$.\n\n**The Full Solution:**\nStep 1: The range of a data set is the difference between its maximum and minimum values.\nStep 2: On the dot plot, the leftmost dot is at $2$ and the rightmost dot is at $11$.\nStep 3: Range $= 11 - 2 = 9$ kilograms. Check: every dot lies between $2$ and $11$, a span of $9$. $\\checkmark$\n\n**Common Mistakes:** Entering $11$ (the maximum alone, without subtracting the minimum); entering $6$ (the mode or median); entering $5.6$ (the mean, $\\frac{50}{9}$).\n\n**Test Day Takeaway:** Range uses only the two extreme dots: rightmost minus leftmost. Stack heights and middle values are irrelevant.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "basic-range",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-040",
    domain: "problem-solving",
    skills: ["range-calculation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A data set has a range of $36$. If the maximum value of the data set is doubled and the minimum value is unchanged, the range of the new data set is $84$. What is the maximum value of the original data set?",
    choices: [
      // distractor: reports the minimum value instead of the maximum.
      { id: "A", text: "$12$" },
      // distractor: halves the new range, $\frac{84}{2}$, as if doubling the maximum doubled the range.
      { id: "B", text: "$42$" },
      { id: "C", text: "$48$" },
      // distractor: reports the doubled maximum, $2M$, instead of the original maximum.
      { id: "D", text: "$96$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Algebra from Range Constraints**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Doubling the maximum adds one more copy of it to the range: $84 - 36 = 48$, so the maximum is $48$.\n\n**The Full Solution:**\nStep 1: Let $M$ be the maximum and $m$ the minimum. Range: $M - m = 36$.\nStep 2: After doubling the maximum: $2M - m = 84$. Subtract the first equation from the second: $(2M - m) - (M - m) = 84 - 36$, so $M = 48$.\nStep 3: Then $m = 48 - 36 = 12$. Check: $2(48) - 12 = 96 - 12 = 84$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): reports the minimum value instead of the maximum.\n* Choice B ($42$): halves the new range, $\\frac{84}{2}$, as if doubling the maximum doubled the range.\n* Choice D ($96$): reports the doubled maximum, $2M$, instead of the original maximum.\n\n**Test Day Takeaway:** Write the range as $M - m$ for each situation and subtract the equations; the unchanged minimum cancels, leaving the maximum.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "range-algebraic",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-041",
    domain: "problem-solving",
    skills: ["range-calculation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The box plot summarizes the lengths, in millimeters, of the leaves in a sample taken from a shrub. What is the range, in millimeters, of the lengths of the leaves in the sample?",
    diagram: { type: "boxPlot", params: { min: 38, q1: 47, median: 55, q3: 63, max: 82, xLabel: "Length (mm)", xMin: 30, xMax: 90, xGridStep: 5, xLabelStep: 10 } },
    choices: [
      // distractor: subtracts the first quartile from the median, $55 - 47$, the width of the left half of the box.
      { id: "A", text: "$8$" },
      // distractor: subtracts the box edges, $63 - 47$, which is the interquartile range, not the range.
      { id: "B", text: "$16$" },
      // distractor: subtracts the median from the maximum, $82 - 55$, using the wrong lower value.
      { id: "C", text: "$27$" },
      { id: "D", text: "$44$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Range from Min and Max**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Range $=$ maximum $-$ minimum. The whiskers end at $82$ and $38$, so the range is $82 - 38 = 44$.\n\n**The Full Solution:**\nStep 1: A box plot marks five values: minimum (left whisker end), first quartile (left edge of the box), median (line in the box), third quartile (right edge), and maximum (right whisker end).\nStep 2: The range uses only the two extremes: minimum $= 38$ and maximum $= 82$.\nStep 3: Range $= 82 - 38 = 44$ millimeters. Check: the box ($47$ to $63$) and both whiskers all lie within a $44$-millimeter span. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): subtracts the first quartile from the median, $55 - 47$, the width of the left half of the box.\n* Choice B ($16$): subtracts the box edges, $63 - 47$, which is the interquartile range, not the range.\n* Choice C ($27$): subtracts the median from the maximum, $82 - 55$, using the wrong lower value.\n\n**Test Day Takeaway:** Range is whisker end to whisker end; the box edges give the interquartile range. Read the extremes, not the quartiles.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "basic-range",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── standard-deviation-concept ─────────────────────────────────
  {
    id: "bank-ps-042",
    domain: "problem-solving",
    skills: ["standard-deviation-concept"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table gives the values in two data sets, A and B. Which of the following statements about the two data sets is true?",
    questionTable: { headers: ["Data set", "Values"], rows: [["A", "14, 15, 15, 16, 16, 16, 17, 17, 18"], ["B", "8, 11, 13, 16, 16, 16, 19, 21, 24"]] },
    choices: [
      { id: "A", text: "The standard deviation of data set A is less than the standard deviation of data set B." },
      // distractor: reverses the comparison; the tightly clustered set has the smaller standard deviation.
      { id: "B", text: "The standard deviation of data set A is greater than the standard deviation of data set B." },
      // distractor: confuses center with spread; equal means say nothing about equal standard deviations.
      { id: "C", text: "The standard deviations of data set A and data set B are equal because the means of the two data sets are equal." },
      // distractor: is false, since both means equal $16$.
      { id: "D", text: "The mean of data set A is greater than the mean of data set B." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Both sets have mean $16$, but set A's values all sit within $2$ of $16$ while set B's values reach as far as $8$ from $16$. More spread means a larger standard deviation, so A's is smaller.\n\n**The Full Solution:**\nStep 1: Compute the means. Set A: $\\frac{14 + 15 + 15 + 16 + 16 + 16 + 17 + 17 + 18}{9} = \\frac{144}{9} = 16$. Set B: $\\frac{8 + 11 + 13 + 16 + 16 + 16 + 19 + 21 + 24}{9} = \\frac{144}{9} = 16$. The means are equal.\nStep 2: Standard deviation measures how far values typically lie from the mean. Set A's distances from $16$ are $2, 1, 1, 0, 0, 0, 1, 1, 2$; set B's are $8, 5, 3, 0, 0, 0, 3, 5, 8$.\nStep 3: Every nonzero distance in set B exceeds the corresponding distance in set A, so set B is more spread out and has the larger standard deviation. Check: set A spans $14$ to $18$; set B spans $8$ to $24$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (greater): reverses the comparison; the tightly clustered set has the smaller standard deviation.\n* Choice C (equal): confuses center with spread; equal means say nothing about equal standard deviations.\n* Choice D (mean of A greater): is false, since both means equal $16$.\n\n**Test Day Takeaway:** Standard deviation is about spread around the mean, independent of the mean's value. Compare distances from the center; no formula is needed.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "sd-comparison",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-043",
    domain: "problem-solving",
    skills: ["standard-deviation-concept"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A scale used to record the masses, in grams, of $40$ samples was later found to read $12$ grams too low for every sample. The recorded masses have a mean of $74$ grams and a standard deviation of $7.5$ grams. After $12$ grams is added to each recorded mass to correct it, what are the mean and the standard deviation of the corrected masses?",
    choices: [
      // distractor: assumes the correction changes nothing; the center does shift by $12$ grams.
      { id: "A", text: "Mean $74$ grams; standard deviation $7.5$ grams" },
      // distractor: applies the $12$-gram shift to the standard deviation instead of to the mean.
      { id: "B", text: "Mean $74$ grams; standard deviation $19.5$ grams" },
      // distractor: shifts the mean correctly but also adds $12$ to the standard deviation, which measures spread and does not move.
      { id: "C", text: "Mean $86$ grams; standard deviation $19.5$ grams" },
      { id: "D", text: "Mean $86$ grams; standard deviation $7.5$ grams" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: SD Under Translation**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Adding $12$ to every value slides the whole data set up by $12$: the mean becomes $74 + 12 = 86$, and the spread is unchanged, so the standard deviation stays $7.5$.\n\n**The Full Solution:**\nStep 1: If every value increases by the same constant $c$, the sum increases by $40c$ and the mean increases by exactly $c$: new mean $= 74 + 12 = 86$ grams.\nStep 2: Standard deviation depends only on each value's distance from the mean. Each value and the mean both rise by $12$, so every distance is unchanged, and the standard deviation stays $7.5$ grams.\nStep 3: Check with a mini example: $\\{1, 2, 3\\}$ has mean $2$ and distances $1, 0, 1$; adding $12$ gives $\\{13, 14, 15\\}$ with mean $14$ and the same distances $1, 0, 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (mean $74$; SD $7.5$): assumes the correction changes nothing; the center does shift by $12$ grams.\n* Choice B (mean $74$; SD $19.5$): applies the $12$-gram shift to the standard deviation instead of to the mean.\n* Choice C (mean $86$; SD $19.5$): shifts the mean correctly but also adds $12$ to the standard deviation, which measures spread and does not move.\n\n**Test Day Takeaway:** Adding a constant to every value shifts measures of center (mean, median) by that constant and leaves measures of spread (standard deviation, range) unchanged.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "sd-shift-property",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-044",
    domain: "problem-solving",
    skills: ["standard-deviation-concept"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The temperatures, in degrees Fahrenheit, of $25$ samples have a mean of $68$ and a standard deviation of $9$. Each temperature is converted to degrees Celsius using the formula $C = \\frac{5}{9}(F - 32)$. Which of the following gives the mean and the standard deviation, in degrees Celsius, of the converted temperatures?",
    choices: [
      { id: "A", text: "Mean $20$; standard deviation $5$" },
      // distractor: leaves the standard deviation unchanged; that is correct for the subtraction of $32$ but not for the multiplication by $\frac{5}{9}$.
      { id: "B", text: "Mean $20$; standard deviation $9$" },
      // distractor: multiplies the mean by $\frac{5}{9}$ without first subtracting $32$, giving $\frac{5}{9}(68) \approx 37.8$.
      { id: "C", text: "Mean $37.8$; standard deviation $5$" },
      // distractor: combines both errors: no subtraction for the mean and no scaling for the standard deviation.
      { id: "D", text: "Mean $37.8$; standard deviation $9$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: SD Under Scaling**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The mean follows the full formula: $\\frac{5}{9}(68 - 32) = 20$. The standard deviation ignores the shift and follows only the scale factor: $\\frac{5}{9} \\times 9 = 5$.\n\n**The Full Solution:**\nStep 1: The conversion is a linear change: subtract $32$, then multiply by $\\frac{5}{9}$. The mean undergoes both steps: $\\frac{5}{9}(68 - 32) = \\frac{5}{9}(36) = 20$.\nStep 2: Subtracting $32$ from every value does not change the spread. Multiplying every value by $\\frac{5}{9}$ multiplies every distance from the mean by $\\frac{5}{9}$, so the standard deviation becomes $\\frac{5}{9} \\times 9 = 5$.\nStep 3: Check with two values one standard deviation apart in Fahrenheit, $68$ and $77$: they convert to $20$ and $25$, which are $5$ apart. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (mean $20$; SD $9$): leaves the standard deviation unchanged; that is correct for the subtraction of $32$ but not for the multiplication by $\\frac{5}{9}$.\n* Choice C (mean $37.8$; SD $5$): multiplies the mean by $\\frac{5}{9}$ without first subtracting $32$, giving $\\frac{5}{9}(68) \\approx 37.8$.\n* Choice D (mean $37.8$; SD $9$): combines both errors: no subtraction for the mean and no scaling for the standard deviation.\n\n**Test Day Takeaway:** Under $y = a x + b$, the mean transforms fully ($a \\bar{x} + b$) but the standard deviation only scales ($|a| \\cdot s$); shifts never touch spread.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "sd-scale-property",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-045",
    domain: "problem-solving",
    skills: ["standard-deviation-concept"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The lengths of the adult beetles of a certain species are approximately normally distributed with a mean of $12.0$ millimeters and a standard deviation of $1.5$ millimeters. Approximately what percent of these beetles have lengths between $10.5$ millimeters and $15.0$ millimeters?",
    choices: [
      // distractor: counts only the portion above the mean (from $12.0$ to $15.0$) and omits the $34\%$ below it.
      { id: "A", text: "$47.5\\%$" },
      // distractor: treats the interval as $\pm 1$ standard deviation, although the upper endpoint is $2$ standard deviations above the mean.
      { id: "B", text: "$68\\%$" },
      { id: "C", text: "$81.5\\%$" },
      // distractor: treats the interval as $\pm 2$ standard deviations, although the lower endpoint is only $1$ standard deviation below the mean.
      { id: "D", text: "$95\\%$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Empirical Rule Application**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $10.5$ is $1$ standard deviation below the mean and $15.0$ is $2$ standard deviations above it. Add the two halves, $\\frac{68\\%}{2} = 34\\%$ below the mean and $\\frac{95\\%}{2} = 47.5\\%$ above it, for about $81.5\\%$.\n\n**The Full Solution:**\nStep 1: Express the endpoints in standard deviations: $\\frac{10.5 - 12.0}{1.5} = -1$ and $\\frac{15.0 - 12.0}{1.5} = +2$. The interval is not symmetric about the mean.\nStep 2: By the empirical rule, about $68\\%$ of values lie within $1$ standard deviation of the mean and about $95\\%$ lie within $2$. By symmetry, from the mean to $1$ standard deviation below holds $\\frac{68\\%}{2} = 34\\%$, and from the mean to $2$ standard deviations above holds $\\frac{95\\%}{2} = 47.5\\%$.\nStep 3: Add the two pieces: $34\\% + 47.5\\% = 81.5\\%$. Check: the answer must lie between $68\\%$ (a $\\pm 1$ interval) and $95\\%$ (a $\\pm 2$ interval). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($47.5\\%$): counts only the portion above the mean (from $12.0$ to $15.0$) and omits the $34\\%$ below it.\n* Choice B ($68\\%$): treats the interval as $\\pm 1$ standard deviation, although the upper endpoint is $2$ standard deviations above the mean.\n* Choice D ($95\\%$): treats the interval as $\\pm 2$ standard deviations, although the lower endpoint is only $1$ standard deviation below the mean.\n\n**Test Day Takeaway:** Convert each endpoint to a number of standard deviations, then split the empirical-rule percents at the mean ($34\\%$, $13.5\\%$, $2.35\\%$ per band) and add the bands the interval covers.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "empirical-rule-application",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── margin-of-error ────────────────────────────────────────────
  {
    id: "bank-ps-046",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A random sample of $900$ adults in a county was surveyed, and $62\\%$ of those surveyed reported getting news primarily from online sources, with an associated margin of error of $3.2\\%$. Which of the following is the most appropriate conclusion based on this survey?",
    choices: [
      // distractor: treats a sample estimate as the exact population value; the margin of error exists because the estimate is uncertain.
      { id: "A", text: "Exactly $62\\%$ of all adults in the county get news primarily from online sources." },
      // distractor: applies the interval to the sample itself, but the sample percent is exactly $62\%$ and needs no interval.
      { id: "B", text: "It is plausible that between $58.8\\%$ and $65.2\\%$ of the $900$ adults surveyed get news primarily from online sources." },
      // distractor: uses $32\%$ as the margin of error, misplacing the decimal point in $3.2\%$.
      { id: "C", text: "It is plausible that between $30\\%$ and $94\\%$ of all adults in the county get news primarily from online sources." },
      { id: "D", text: "It is plausible that between $58.8\\%$ and $65.2\\%$ of all adults in the county get news primarily from online sources." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Confidence Interval from Margin of Error**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Estimate $\\pm$ margin of error gives the plausible range for the POPULATION: $62\\% - 3.2\\% = 58.8\\%$ to $62\\% + 3.2\\% = 65.2\\%$.\n\n**The Full Solution:**\nStep 1: The sample percent, $62\\%$, is an estimate of the percent of ALL adults in the county. The margin of error describes how far the true population percent plausibly lies from that estimate.\nStep 2: Plausible range $= 62\\% \\pm 3.2\\%$, that is, from $58.8\\%$ to $65.2\\%$.\nStep 3: The conclusion applies to the population (all adults in the county), not to the sample, whose percent is known exactly. Check: $65.2 - 58.8 = 6.4 = 2(3.2)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (exactly $62\\%$): treats a sample estimate as the exact population value; the margin of error exists because the estimate is uncertain.\n* Choice B (the $900$ surveyed): applies the interval to the sample itself, but the sample percent is exactly $62\\%$ and needs no interval.\n* Choice C ($30\\%$ to $94\\%$): uses $32\\%$ as the margin of error, misplacing the decimal point in $3.2\\%$.\n\n**Test Day Takeaway:** Estimate $\\pm$ margin of error is a statement about the population parameter, always phrased as \\\"plausible,\\\" never as \\\"exactly\\\" and never about the sample.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "confidence-interval-basic",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-047",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "For a survey that uses a random sample, the margin of error is inversely proportional to the square root of the sample size. A survey with a sample size of $250$ had a margin of error of $6\\%$. To reduce the margin of error to $2\\%$, approximately what sample size would be needed?",
    choices: [
      // distractor: divides the sample size by $3$; a smaller sample makes the margin of error larger, not smaller.
      { id: "A", text: "$83$" },
      // distractor: multiplies the sample size by $3$, forgetting that the margin of error depends on the square root of $n$, so $n$ must grow by $3^2$.
      { id: "B", text: "$750$" },
      // distractor: multiplies by the original margin of error, $6$, rather than by the squared ratio $\left(\frac{6}{2}\right)^2 = 9$.
      { id: "C", text: "$1{,}500$" },
      { id: "D", text: "$2{,}250$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Cutting the margin of error to $\\frac{1}{3}$ of its value requires $3^2 = 9$ times the sample size: $9 \\times 250 = 2{,}250$.\n\n**The Full Solution:**\nStep 1: Inversely proportional to the square root means $E = \\frac{k}{\\sqrt{n}}$ for some constant $k$. From the first survey, $k = 6\\sqrt{250}$.\nStep 2: Set $\\frac{6\\sqrt{250}}{\\sqrt{n}} = 2$, so $\\sqrt{n} = 3\\sqrt{250}$ and $n = 9 \\times 250 = 2{,}250$.\nStep 3: Check: $\\frac{\\sqrt{2{,}250}}{\\sqrt{250}} = \\sqrt{9} = 3$, so the margin of error is divided by $3$: $\\frac{6\\%}{3} = 2\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($83$): divides the sample size by $3$; a smaller sample makes the margin of error larger, not smaller.\n* Choice B ($750$): multiplies the sample size by $3$, forgetting that the margin of error depends on the square root of $n$, so $n$ must grow by $3^2$.\n* Choice C ($1{,}500$): multiplies by the original margin of error, $6$, rather than by the squared ratio $\\left(\\frac{6}{2}\\right)^2 = 9$.\n\n**Test Day Takeaway:** To divide a margin of error by a factor $f$, multiply the sample size by $f^2$. Halving needs $4\\times$; cutting to a third needs $9\\times$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "sample-size-margin-relationship",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-048",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table shows the results of two surveys, each of a different random sample of commuters in a city, that estimated the percent of commuters in the city who use public transit. Based on both surveys, which of the following is a plausible value for the percent of all commuters in the city who use public transit?",
    questionTable: { headers: ["Survey", "Sample size", "Estimate", "Margin of error"], rows: [["1", "400", "47%", "5%"], ["2", "1,600", "52%", "2.5%"]] },
    choices: [
      // distractor: lies within survey 1's range but below survey 2's lower bound of $49.5\%$.
      { id: "A", text: "$45\\%$" },
      { id: "B", text: "$51\\%$" },
      // distractor: lies within survey 2's range but above survey 1's upper bound of $52\%$.
      { id: "C", text: "$54\\%$" },
      // distractor: adds survey 1's $5\%$ margin to survey 2's estimate; it is outside both ranges.
      { id: "D", text: "$57\\%$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Confidence Intervals**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Survey 1 gives a plausible range of $42\\%$ to $52\\%$; survey 2 gives $49.5\\%$ to $54.5\\%$. Only $51\\%$ lies in both ranges.\n\n**The Full Solution:**\nStep 1: Each survey's plausible range is its estimate $\\pm$ its margin of error. Survey 1: $47\\% \\pm 5\\%$, or $42\\%$ to $52\\%$. Survey 2: $52\\% \\pm 2.5\\%$, or $49.5\\%$ to $54.5\\%$.\nStep 2: A value consistent with BOTH surveys must lie in the overlap of the two ranges: $49.5\\%$ to $52\\%$.\nStep 3: Of the choices, only $51\\%$ falls in $49.5\\%$ to $52\\%$. Check: $51$ is within $5$ of $47$ and within $2.5$ of $52$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($45\\%$): lies within survey 1's range but below survey 2's lower bound of $49.5\\%$.\n* Choice C ($54\\%$): lies within survey 2's range but above survey 1's upper bound of $52\\%$.\n* Choice D ($57\\%$): adds survey 1's $5\\%$ margin to survey 2's estimate; it is outside both ranges.\n\n**Test Day Takeaway:** Each survey yields an interval; a value supported by two surveys must sit in the intersection of their intervals. Larger samples give tighter intervals.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "margin-of-error-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── unit-conversion ────────────────────────────────────────────
  {
    id: "bank-ps-049",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A bag of birdseed has a mass of $3.75$ kilograms. If $1$ kilogram is approximately equal to $2.2$ pounds, approximately what is the mass of the bag of birdseed, in pounds?",
    choices: [
      // distractor: divides by $2.2$ instead of multiplying, which would convert pounds to kilograms.
      { id: "A", text: "$1.70$" },
      // distractor: adds $2.2$ to $3.75$ instead of multiplying.
      { id: "B", text: "$5.95$" },
      { id: "C", text: "$8.25$" },
      // distractor: multiplies by $22$ instead of $2.2$, a misplaced decimal point.
      { id: "D", text: "$82.5$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Single Unit Conversion**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Each kilogram is $2.2$ pounds, so $3.75$ kilograms is $3.75 \\times 2.2 = 8.25$ pounds.\n\n**The Full Solution:**\nStep 1: Set up the conversion so that kilograms cancel: $3.75 \\text{ kg} \\times \\frac{2.2 \\text{ lb}}{1 \\text{ kg}}$.\nStep 2: $3.75 \\times 2.2 = 8.25$ pounds.\nStep 3: Check: a pound is smaller than a kilogram, so the number of pounds should be larger than $3.75$, and $8.25$ is a little more than double. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.70$): divides by $2.2$ instead of multiplying, which would convert pounds to kilograms.\n* Choice B ($5.95$): adds $2.2$ to $3.75$ instead of multiplying.\n* Choice D ($82.5$): multiplies by $22$ instead of $2.2$, a misplaced decimal point.\n\n**Test Day Takeaway:** Write the conversion factor as a fraction with the unit to cancel in the denominator; converting to a smaller unit must make the number bigger.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "single-unit-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-ps-050",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "easy",
    type: "fill-in",
    question: "A road race course is $12.8$ kilometers long. If $1$ mile is approximately equal to $1.6$ kilometers, approximately how many miles long is the course?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: km to Miles Conversion**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~10s):** Every $1.6$ kilometers is one mile, so $\\frac{12.8}{1.6} = 8$ miles.\n\n**The Full Solution:**\nStep 1: Multiply by a factor that cancels kilometers: $12.8 \\text{ km} \\times \\frac{1 \\text{ mi}}{1.6 \\text{ km}}$.\nStep 2: $\\frac{12.8}{1.6} = 8$ miles.\nStep 3: Check: $8$ miles $\\times 1.6 = 12.8$ kilometers. A mile is longer than a kilometer, so the mile count should be smaller than $12.8$. $\\checkmark$\n\n**Common Mistakes:** Entering $20.48$ (multiplying by $1.6$, which converts miles to kilometers, the wrong direction); entering $11.2$ (subtracting $1.6$ instead of dividing); entering $14.4$ (adding $1.6$).\n\n**Test Day Takeaway:** Converting to a LARGER unit divides; the count must shrink. Check direction with the size of the units before computing.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "single-unit-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-051",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The tip of a wind turbine blade moves at a speed of $252$ kilometers per hour. What is this speed in meters per second?",
    choices: [
      // distractor: divides by $3{,}600$ seconds but never multiplies by $1{,}000$ meters per kilometer.
      { id: "A", text: "$0.07$" },
      // distractor: converts hours to minutes only ($\div 60$) and leaves the distance in kilometers.
      { id: "B", text: "$4.2$" },
      { id: "C", text: "$70$" },
      // distractor: converts kilometers to meters but hours only to minutes ($\div 60$ instead of $\div 3{,}600$).
      { id: "D", text: "$4{,}200$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Compound Unit Conversion**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Convert both units: $252 \\times \\frac{1{,}000 \\text{ m}}{1 \\text{ km}} \\times \\frac{1 \\text{ h}}{3{,}600 \\text{ s}} = \\frac{252{,}000}{3{,}600} = 70$ meters per second.\n\n**The Full Solution:**\nStep 1: Kilometers per hour has two units to convert: kilometers to meters ($\\times 1{,}000$) and hours to seconds ($\\div 3{,}600$).\nStep 2: $\\frac{252 \\text{ km}}{1 \\text{ h}} \\times \\frac{1{,}000 \\text{ m}}{1 \\text{ km}} \\times \\frac{1 \\text{ h}}{3{,}600 \\text{ s}} = \\frac{252{,}000}{3{,}600} \\frac{\\text{m}}{\\text{s}} = 70$ meters per second.\nStep 3: Check with the shortcut: dividing km/h by $3.6$ gives m/s, and $\\frac{252}{3.6} = 70$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.07$): divides by $3{,}600$ seconds but never multiplies by $1{,}000$ meters per kilometer.\n* Choice B ($4.2$): converts hours to minutes only ($\\div 60$) and leaves the distance in kilometers.\n* Choice D ($4{,}200$): converts kilometers to meters but hours only to minutes ($\\div 60$ instead of $\\div 3{,}600$).\n\n**Test Day Takeaway:** A rate has two units; convert each with its own factor and let the units cancel. From km/h to m/s, multiply by $1{,}000$ and divide by $3{,}600$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "compound-unit-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-052",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A pump moves water at a constant rate of $2{,}520$ liters per hour. At this rate, how many liters of water does the pump move in $15$ minutes?",
    choices: [
      // distractor: stops at the per-minute rate and never multiplies by the $15$ minutes.
      { id: "A", text: "$42$" },
      // distractor: divides the hourly amount by $15$ instead of converting to minutes and multiplying.
      { id: "B", text: "$168$" },
      { id: "C", text: "$630$" },
      // distractor: multiplies the hourly rate by $15$ minutes without converting the rate to per-minute.
      { id: "D", text: "$37{,}800$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Rate Per Minute from Per Hour**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Per minute: $\\frac{2{,}520}{60} = 42$ liters. In $15$ minutes: $42 \\times 15 = 630$ liters.\n\n**The Full Solution:**\nStep 1: Convert the rate to liters per minute: $\\frac{2{,}520 \\text{ L}}{60 \\text{ min}} = 42$ liters per minute.\nStep 2: Multiply by the time: $42 \\times 15 = 630$ liters.\nStep 3: Check: $15$ minutes is $\\frac{1}{4}$ of an hour, and $\\frac{2{,}520}{4} = 630$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($42$): stops at the per-minute rate and never multiplies by the $15$ minutes.\n* Choice B ($168$): divides the hourly amount by $15$ instead of converting to minutes and multiplying.\n* Choice D ($37{,}800$): multiplies the hourly rate by $15$ minutes without converting the rate to per-minute.\n\n**Test Day Takeaway:** Match the time units before multiplying: convert the rate to per-minute (or the time to hours), then rate $\\times$ time.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "rate-unit-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-053",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A printing press uses ink at a constant rate of $0.35$ ounces per minute. If $1$ ounce is approximately equal to $29.6$ milliliters, approximately how many liters of ink does the press use during an $8$-hour shift?",
    choices: [
      // distractor: computes the amount for $1$ hour ($0.35 \times 60 \times 29.6 \div 1{,}000$) and forgets the $8$ hours.
      { id: "A", text: "$0.62$" },
      { id: "B", text: "$4.97$" },
      // distractor: divides the milliliters by $100$ instead of $1{,}000$ when converting to liters.
      { id: "C", text: "$49.7$" },
      // distractor: stops at milliliters and never converts to liters.
      { id: "D", text: "$4{,}973$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Chained Rate Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The shift uses $0.35 \\times 60 \\times 8 = 168$ ounces, which is $168 \\times 29.6 = 4{,}972.8$ milliliters. Dividing by $1{,}000$ gives about $4.97$ liters.\n\n**The Full Solution:**\nStep 1: Convert the time: $8$ hours $\\times 60 = 480$ minutes. Ounces used: $0.35 \\times 480 = 168$ ounces.\nStep 2: Convert to milliliters: $168 \\times 29.6 = 4{,}972.8$ milliliters.\nStep 3: Convert to liters: $\\frac{4{,}972.8}{1{,}000} = 4.9728 \\approx 4.97$ liters. Check the chain as one product: $0.35 \\times 480 \\times \\frac{29.6}{1{,}000} \\approx 4.97$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.62$): computes the amount for $1$ hour ($0.35 \\times 60 \\times 29.6 \\div 1{,}000$) and forgets the $8$ hours.\n* Choice C ($49.7$): divides the milliliters by $100$ instead of $1{,}000$ when converting to liters.\n* Choice D ($4{,}973$): stops at milliliters and never converts to liters.\n\n**Test Day Takeaway:** Chain the factors so every unit cancels except the one requested: minutes $\\to$ hours, ounces $\\to$ milliliters $\\to$ liters. Write the units and cross them off.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "chained-unit-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── squared-cubed-units ────────────────────────────────────────
  {
    id: "bank-ps-054",
    domain: "problem-solving",
    skills: ["squared-cubed-units"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A rectangular mural is $9$ feet wide and $16$ feet long. What is the area of the mural in square yards? ($1$ yard $= 3$ feet)",
    choices: [
      { id: "A", text: "$16$" },
      // distractor: divides the square feet by $3$ instead of by $3^2 = 9$, converting only one dimension.
      { id: "B", text: "$48$" },
      // distractor: reports the area in square feet without converting.
      { id: "C", text: "$144$" },
      // distractor: multiplies by $3$ instead of dividing by $9$.
      { id: "D", text: "$432$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Area Unit Conversion**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Area $= 9 \\times 16 = 144$ square feet. One square yard is $3 \\times 3 = 9$ square feet, so $\\frac{144}{9} = 16$ square yards.\n\n**The Full Solution:**\nStep 1: Area in square feet: $9 \\times 16 = 144$.\nStep 2: Since $1$ yard $= 3$ feet, $1$ square yard $= 3^2 = 9$ square feet. Divide: $\\frac{144}{9} = 16$ square yards.\nStep 3: Check by converting the sides first: $9$ feet $= 3$ yards and $16$ feet $= \\frac{16}{3}$ yards, and $3 \\times \\frac{16}{3} = 16$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($48$): divides the square feet by $3$ instead of by $3^2 = 9$, converting only one dimension.\n* Choice C ($144$): reports the area in square feet without converting.\n* Choice D ($432$): multiplies by $3$ instead of dividing by $9$.\n\n**Test Day Takeaway:** Square units convert with the SQUARE of the length factor: $1 \\text{ yd}^2 = 9 \\text{ ft}^2$. Converting the side lengths first avoids the trap.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "area-unit-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-055",
    domain: "problem-solving",
    skills: ["squared-cubed-units"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A contractor will fill a rectangular trench that is $15$ feet long, $4$ feet wide, and $3$ feet deep with concrete. Concrete is sold only in whole cubic yards. What is the least number of cubic yards of concrete the contractor must buy to fill the trench? ($1$ yard $= 3$ feet)",
    choices: [
      // distractor: drops the fractional part of $\frac{20}{3}$ instead of rounding up; $6$ cubic yards fills only $162$ of the $180$ cubic feet.
      { id: "A", text: "$6$" },
      { id: "B", text: "$7$" },
      // distractor: divides by $3^2 = 9$, the area factor, instead of the volume factor $3^3 = 27$.
      { id: "C", text: "$20$" },
      // distractor: divides by $3$, the length factor, converting only one of the three dimensions.
      { id: "D", text: "$60$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Volume Unit Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The trench holds $15 \\times 4 \\times 3 = 180$ cubic feet, and $1$ cubic yard is $27$ cubic feet, so $\\frac{180}{27} = \\frac{20}{3}$, about $6.67$ cubic yards. Whole cubic yards only means buying $7$.\n\n**The Full Solution:**\nStep 1: Volume in cubic feet: $15 \\times 4 \\times 3 = 180$ cubic feet.\nStep 2: A cube with $1$-yard edges has $3$-foot edges, so $1 \\text{ yd}^3 = 3^3 = 27 \\text{ ft}^3$. Convert: $\\frac{180}{27} = \\frac{20}{3} \\approx 6.67$ cubic yards.\nStep 3: Concrete is sold only in whole cubic yards, and $6$ is not enough, so the contractor must buy $7$. Check: $6 \\times 27 = 162 < 180$, while $7 \\times 27 = 189 \\ge 180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): drops the fractional part of $\\frac{20}{3}$ instead of rounding up; $6$ cubic yards fills only $162$ of the $180$ cubic feet.\n* Choice C ($20$): divides by $3^2 = 9$, the area factor, instead of the volume factor $3^3 = 27$.\n* Choice D ($60$): divides by $3$, the length factor, converting only one of the three dimensions.\n\n**Test Day Takeaway:** Cubic units convert with the CUBE of the length factor ($1 \\text{ yd}^3 = 27 \\text{ ft}^3$), and a purchase in whole units always rounds UP, never to the nearest.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "volume-unit-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-056",
    domain: "problem-solving",
    skills: ["squared-cubed-units"],
    difficulty: "medium",
    type: "fill-in",
    question: "A rectangular ceramic tile measures $9$ inches by $24$ inches. What is the area of the tile in square feet? ($1$ foot $= 12$ inches)",
    correctAnswer: "1.5",
    explanation: "**SAT Pattern: Tile Area in Square Feet**\n\n**The correct answer is $1.5$.**\n\n**The Fast Way (~15s):** Convert the sides first: $9$ inches $= 0.75$ foot and $24$ inches $= 2$ feet. Area $= 0.75 \\times 2 = 1.5$ square feet.\n\n**The Full Solution:**\nStep 1: Convert each side to feet: $\\frac{9}{12} = 0.75$ foot and $\\frac{24}{12} = 2$ feet.\nStep 2: Area $= 0.75 \\times 2 = 1.5$ square feet.\nStep 3: Check by converting the area instead: $9 \\times 24 = 216$ square inches, and $1$ square foot $= 12^2 = 144$ square inches, so $\\frac{216}{144} = 1.5$. $\\checkmark$\n\n**Common Mistakes:** Entering $18$ (dividing $216$ square inches by $12$ instead of by $144$); entering $216$ (leaving the area in square inches); entering $0.75$ or $2$ (reporting one converted side length instead of the area). Both methods, sides first or area first, must agree.\n\n**Test Day Takeaway:** Either convert each length before multiplying, or divide the area by the SQUARE of the length factor ($144$, not $12$).",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "area-unit-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── rate-conversion ────────────────────────────────────────────
  {
    id: "bank-ps-057",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A machine fills bottles at a constant rate of $18$ bottles per minute. How many bottles does the machine fill in $1.5$ hours?",
    choices: [
      // distractor: multiplies $18$ by $1.5$ without converting hours to minutes.
      { id: "A", text: "$27$" },
      // distractor: uses $15$ minutes instead of $90$ for $1.5$ hours.
      { id: "B", text: "$270$" },
      // distractor: computes the bottles filled in $1$ hour and ignores the extra half hour.
      { id: "C", text: "$1{,}080$" },
      { id: "D", text: "$1{,}620$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Rate × Time = Total**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $1.5$ hours is $90$ minutes, and $18 \\times 90 = 1{,}620$ bottles.\n\n**The Full Solution:**\nStep 1: The rate is per minute, so express the time in minutes: $1.5 \\times 60 = 90$ minutes.\nStep 2: Total $=$ rate $\\times$ time $= 18 \\times 90 = 1{,}620$ bottles.\nStep 3: Check: $18$ per minute is $1{,}080$ per hour, and $1.5$ hours gives $1{,}080 + 540 = 1{,}620$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($27$): multiplies $18$ by $1.5$ without converting hours to minutes.\n* Choice B ($270$): uses $15$ minutes instead of $90$ for $1.5$ hours.\n* Choice C ($1{,}080$): computes the bottles filled in $1$ hour and ignores the extra half hour.\n\n**Test Day Takeaway:** Before multiplying rate by time, put the time in the rate's unit: $1.5$ hours must become $90$ minutes for a per-minute rate.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "rate-time-total",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-058",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Two boats leave a dock at the same time and travel in the same direction along a straight canal. One boat travels at a constant speed of $22$ miles per hour, and the other travels at a constant speed of $14$ miles per hour. How many miles apart are the boats after $1.5$ hours?",
    choices: [
      // distractor: reports the difference in speeds, in miles per hour, without multiplying by the $1.5$ hours.
      { id: "A", text: "$8$" },
      { id: "B", text: "$12$" },
      // distractor: reports the distance the slower boat traveled rather than the gap between the boats.
      { id: "C", text: "$21$" },
      // distractor: adds the speeds, $22 + 14 = 36$, as if the boats moved in opposite directions.
      { id: "D", text: "$54$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Relative Rate (Same Direction)**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Same direction, so the gap grows at the difference of the speeds: $22 - 14 = 8$ miles per hour. After $1.5$ hours the gap is $8 \\times 1.5 = 12$ miles.\n\n**The Full Solution:**\nStep 1: Distances after $1.5$ hours: faster boat $22 \\times 1.5 = 33$ miles; slower boat $14 \\times 1.5 = 21$ miles.\nStep 2: The distance between them is $33 - 21 = 12$ miles.\nStep 3: Check with the relative speed: $(22 - 14) \\times 1.5 = 8 \\times 1.5 = 12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): reports the difference in speeds, in miles per hour, without multiplying by the $1.5$ hours.\n* Choice C ($21$): reports the distance the slower boat traveled rather than the gap between the boats.\n* Choice D ($54$): adds the speeds, $22 + 14 = 36$, as if the boats moved in opposite directions.\n\n**Test Day Takeaway:** Same direction: separation rate is the difference of the speeds; opposite directions: the sum. Then multiply by time.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "relative-rate",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-059",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "medium",
    type: "fill-in",
    question: "A road crew paves at a constant rate of $320$ meters per hour. How many meters does the crew pave in $6$ hours $15$ minutes?",
    correctAnswer: "2000",
    explanation: "**SAT Pattern: Rate × Time = Total (Mixed Units)**\n\n**The correct answer is $2000$.**\n\n**The Fast Way (~15s):** $15$ minutes is $\\frac{15}{60} = 0.25$ hour, so the time is $6.25$ hours and the distance is $320 \\times 6.25 = 2{,}000$ meters.\n\n**The Full Solution:**\nStep 1: Convert the time to hours, the unit in the rate: $6$ hours $15$ minutes $= 6 + \\frac{15}{60} = 6.25$ hours.\nStep 2: Distance $=$ rate $\\times$ time $= 320 \\times 6.25 = 2{,}000$ meters.\nStep 3: Check in pieces: $6$ hours gives $1{,}920$ meters, and $15$ minutes (a quarter hour) gives $80$ meters; $1{,}920 + 80 = 2{,}000$. $\\checkmark$\n\n**Common Mistakes:** Entering $1{,}968$ (writing $6$ hours $15$ minutes as $6.15$ hours; $15$ minutes is $0.25$ hour, not $0.15$); entering $1{,}935$ (adding $15$ meters for the $15$ minutes); entering $196{,}800$ (multiplying by $615$).\n\n**Test Day Takeaway:** Minutes become a fraction of an hour by dividing by $60$; \\\"$6$ hours $15$ minutes\\\" is $6.25$, never $6.15$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "rate-time-total",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-060",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A photocopier prints at a constant rate of $45$ pages per minute. How many minutes does the photocopier take to print $150$ copies of a $24$-page report?",
    choices: [
      // distractor: converts the $80$ minutes to hours, although the question asks for minutes.
      { id: "A", text: "$1.33$" },
      // distractor: computes $\frac{24 \times 45}{150}$, mixing up which quantities are multiplied and divided.
      { id: "B", text: "$7.2$" },
      // distractor: divides the total pages by $60$ minutes instead of by the rate of $45$ pages per minute.
      { id: "C", text: "$60$" },
      { id: "D", text: "$80$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Total / Rate = Time**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Total pages: $150 \\times 24 = 3{,}600$. Time $= \\frac{3{,}600}{45} = 80$ minutes.\n\n**The Full Solution:**\nStep 1: Find the total work: $150$ copies $\\times 24$ pages each $= 3{,}600$ pages.\nStep 2: Time $= \\frac{\\text{total}}{\\text{rate}} = \\frac{3{,}600 \\text{ pages}}{45 \\text{ pages per minute}} = 80$ minutes.\nStep 3: Check: $45 \\times 80 = 3{,}600$ pages. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.33$): converts the $80$ minutes to hours, although the question asks for minutes.\n* Choice B ($7.2$): computes $\\frac{24 \\times 45}{150}$, mixing up which quantities are multiplied and divided.\n* Choice C ($60$): divides the total pages by $60$ minutes instead of by the rate of $45$ pages per minute.\n\n**Test Day Takeaway:** Time $= \\frac{\\text{total amount}}{\\text{rate}}$. Build the total first (copies $\\times$ pages), then divide by the rate, and report in the unit asked.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "rate-total-time",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
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
    explanation: "**SAT Pattern: Percent Increase Basic**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Percent increase divides the change by the ORIGINAL value: $\\frac{400-320}{320}=\\frac{80}{320}=\\frac{1}{4}=25\\%$.\n\n**The Full Solution:**\nStep 1: Find the increase: $400-320=80$ lattes.\nStep 2: Divide by the original amount, $320$: $\\frac{80}{320}=0.25$.\nStep 3: Convert to a percent: $0.25=25\\%$, choice B.\n\nCheck: $320\\times 1.25=400$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($20\\%$): divides by the NEW value, $\\frac{80}{400}=20\\%$ — percent change always uses the starting amount as the base.\n* Choice C ($30\\%$): a rounding or arithmetic slip on $\\frac{80}{320}$.\n* Choice D ($80\\%$): reports the raw increase of $80$ as the percent, skipping the division.\n\n**Test Day Takeaway:** Percent change $=\\frac{\\text{new}-\\text{old}}{\\text{old}}$. The denominator is always the original value, never the new one.",
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
    explanation: "**SAT Pattern: Mean After Removal**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Work with the total, not individual bills. Original total $=5\\times 120=600$. Drop the $\\$180$ bill: $600-180=420$. New mean $=\\frac{420}{4}=\\$105$.\n\n**The Full Solution:**\nStep 1: Mean $\\times$ count gives the sum: $5\\times 120=600$.\nStep 2: Removing the friend with the $\\$180$ bill leaves a total of $600-180=420$.\nStep 3: Four friends remain, so the new mean is $\\frac{420}{4}=\\$105$, choice B.\n\nCheck: $4\\times 105=420=600-180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$100$): an arithmetic slip — $\\frac{420}{4}$ is $105$, not $100$.\n* Choice C ($\\$108$): another arithmetic slip near the correct value.\n* Choice D ($\\$115$): repeats the given median, which plays no role here.\n\n**Test Day Takeaway:** Convert means to totals before adding or removing values: total $=$ mean $\\times$ count. The median is a distractor unless the question asks about it.",
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
    explanation: "**SAT Pattern: Median of Even Decimal Set**\n\n**The correct answer is $11.8$.**\n\n**The Fast Way (~25s):** With $10$ values, sort and average the two middle ones. Sorted, the $5$th and $6$th values are $11.7$ and $11.9$, so the median is $\\frac{11.7+11.9}{2}=11.8$.\n\n**The Full Solution:**\nStep 1: Sort ascending: $10.5,\\ 10.8,\\ 11.2,\\ 11.4,\\ 11.7,\\ 11.9,\\ 12.0,\\ 12.3,\\ 12.5,\\ 13.1$.\nStep 2: For an even count ($n=10$), the median is the average of the $5$th and $6$th entries: $11.7$ and $11.9$.\nStep 3: $\\frac{11.7+11.9}{2}=\\frac{23.6}{2}=11.8$.\n\nCheck: five values fall below $11.8$ and five above — balanced. $\\checkmark$\n\n**Common Mistakes:** Skipping the sort and reading off the unsorted middle; reporting just $11.7$ or $11.9$ instead of their average.\n\n**Test Day Takeaway:** For an even number of values, the median is the average of the two middle entries — and you must sort first.",
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
    explanation: "**SAT Pattern: Meters to Kilometers**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** There are $1000$ meters in a kilometer, so $\\frac{2000}{1000}=2$ km, choice B.\n\n**The Full Solution:**\nStep 1: Use the conversion $1$ km $=1000$ m.\nStep 2: $2000\\text{ m}\\times\\frac{1\\text{ km}}{1000\\text{ m}}=2$ km.\n\nCheck: $2$ km $=2\\times 1000=2000$ m. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.2$): divided by $10000$ instead of $1000$.\n* Choice C ($20$): divided by only $100$.\n* Choice D ($200$): divided by $10$, leaving too many meters in the count.\n\n**Test Day Takeaway:** Going from a smaller unit (meters) to a larger one (kilometers) means dividing. The factor between meters and kilometers is $1000$.",
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
    explanation: "**SAT Pattern: Sequential Percent Removal**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Track what REMAINS, not what's sold. Monday leaves $80\\%$: $500\\times 0.80=400$. Tuesday leaves $85\\%$ of that: $400\\times 0.85=340$, choice B.\n\n**The Full Solution:**\nStep 1: Monday sells $20\\%$, so $80\\%$ remain: $500\\times 0.80=400$ items.\nStep 2: Tuesday sells $15\\%$ of the $400$ remaining, so $85\\%$ remain: $400\\times 0.85=340$ items.\nStep 3: Or chain the multipliers: $500\\times 0.80\\times 0.85=500\\times 0.68=340$.\n\nCheck: total sold $=500-340=160$; that's $100$ Monday $+60$ Tuesday. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($325$): adds the percents ($20\\%+15\\%=35\\%$) and removes $35\\%$ at once: $500\\times 0.65=325$. Successive percents do not add.\n* Choice C ($350$): an arithmetic slip near the correct value.\n* Choice D ($375$): treats Tuesday's $15\\%$ as applying to the original $500$ rather than the remaining $400$.\n\n**Test Day Takeaway:** Successive percent changes MULTIPLY their retention factors ($1-p$); they never simply add.",
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
    explanation: "**SAT Pattern: Mean-Median Comparison**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Mean $=\\frac{4+7+10+10+14}{5}=\\frac{45}{5}=9$; the median (middle of the sorted set) is $10$. So mean $<$ median, choice B.\n\n```seva-figure\n{\"type\":\"dotPlot\",\"params\":{\"data\":[{\"value\":4,\"count\":1},{\"value\":7,\"count\":1},{\"value\":10,\"count\":2},{\"value\":14,\"count\":1}],\"xMin\":3,\"xMax\":15},\"caption\":\"The data set, sorted onto a number line.\"}\n```\n\n**The Full Solution:**\nStep 1: Add and average: $4+7+10+10+14=45$, so mean $=\\frac{45}{5}=9$.\nStep 2: The set is already sorted; the middle of five values is $10$, the median.\nStep 3: Compare: $9<10$, so mean $<$ median.\n\nThe low value $4$ pulls the mean down below the median — a left-skewed set.\n\n**Why the wrong answers are tempting:**\n* Choice A (Mean $>$ Median): would need a high outlier dragging the mean up; here the outlier is low.\n* Choice C (Mean $=$ Median): only holds for symmetric data, not this set.\n* Choice D (Mean $=$ Mode): the mode is $10$ but the mean is $9$, so they differ.\n\n**Test Day Takeaway:** A low outlier pulls the mean below the median (left skew); a high outlier pulls it above (right skew). Compute both and compare.",
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
    explanation: "**SAT Pattern: Chained Rate Conversion**\n\n**The correct answer is $14.4$.**\n\n**The Fast Way (~20s):** Convert miles to km, then hours to minutes: $540\\times 1.6=864$ km/hr, then $\\frac{864}{60}=14.4$ km/min.\n\n**The Full Solution:**\nStep 1: Convert the distance unit: $540$ mph $\\times\\ 1.6=864$ km/hr.\nStep 2: Convert the time unit. There are $60$ minutes in an hour, so divide: $\\frac{864}{60}=14.4$ km/min.\n\nChained: $\\frac{540\\text{ mi}}{1\\text{ hr}}\\times\\frac{1.6\\text{ km}}{1\\text{ mi}}\\times\\frac{1\\text{ hr}}{60\\text{ min}}=14.4$ km/min.\n\nCheck: $14.4\\times 60=864$ km/hr, and $\\frac{864}{1.6}=540$ mph. $\\checkmark$\n\n**Common Mistakes:** Stopping at $864$ (km/hr, not km/min); multiplying by $60$ instead of dividing, since a minute is smaller than an hour.\n\n**Test Day Takeaway:** In a chained conversion, set up factors so units cancel, and confirm the final unit matches what's asked. Going to a smaller time unit means dividing.",
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
    explanation: "**SAT Pattern: Tiered Commission**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Split at the $\\$10{,}000$ threshold. First tier: $10{,}000\\times 0.05=\\$500$. Second tier: the remaining $\\$12{,}000$ at $8\\%$ is $12{,}000\\times 0.08=\\$960$. Total $=\\$1{,}460$, choice B.\n\n**The Full Solution:**\nStep 1: The first $\\$10{,}000$ earns $5\\%$: $10{,}000\\times 0.05=\\$500$.\nStep 2: Sales above the threshold: $22{,}000-10{,}000=\\$12{,}000$, earning $8\\%$: $12{,}000\\times 0.08=\\$960$.\nStep 3: Add the tiers: $500+960=\\$1{,}460$.\n\nCheck: the blended rate $\\frac{1460}{22000}\\approx 6.6\\%$ lies between $5\\%$ and $8\\%$, as a mix should. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$1{,}100$): applies $5\\%$ to all $\\$22{,}000$, ignoring the higher tier.\n* Choice C ($\\$1{,}760$): applies $8\\%$ to all $\\$22{,}000$, ignoring the lower tier.\n* Choice D ($\\$1{,}860$): an arithmetic slip on top of a tier error.\n\n**Test Day Takeaway:** For tiered rates, split the amount at each threshold, apply the matching rate to each slice, then sum. Never apply one rate to the whole.",
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
    explanation: "**SAT Pattern: Percent of Total**\n\n**The correct answer is $40$.**\n\n**The Fast Way (~5s):** $25\\%=\\frac{1}{4}$, so $\\frac{160}{4}=40$ blue marbles.\n\n**The Full Solution:**\nStep 1: \"$25\\%$ of $160$\" means multiply: $160\\times 0.25$.\nStep 2: $160\\times 0.25=40$, or equivalently $\\frac{160}{4}=40$.\n\nCheck: $40\\times 4=160$, so $40$ is exactly one-quarter. $\\checkmark$\n\n**Common Mistakes:** Using $0.025$ instead of $0.25$ (gives $4$); using $2.5$ instead of $0.25$ (gives $400$); reporting $120$, the $75\\%$ that are not blue.\n\n**Test Day Takeaway:** Memorize the friendly fractions: $25\\%=\\frac{1}{4}$, $50\\%=\\frac{1}{2}$, $10\\%=\\frac{1}{10}$. They turn percent-of problems into fast division.",
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
    explanation: "**SAT Pattern: Mean of Four Values**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Pair the values: $(48+52)+(45+55)=100+100=200$. Mean $=\\frac{200}{4}=50$, choice B.\n\n**The Full Solution:**\nStep 1: Add all four: $48+52+45+55=200$.\nStep 2: Divide by the count, $4$: $\\frac{200}{4}=50$.\n\nCheck: pairing into $100+100=200$ confirms the sum. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($48$): reports the lowest data value instead of the average.\n* Choice C ($51$): an arithmetic slip on the sum or the division.\n* Choice D ($52$): reports one of the data values rather than the mean.\n\n**Test Day Takeaway:** Mean $=\\frac{\\text{sum}}{\\text{count}}$. Pairing numbers that add to the same total speeds up the sum.",
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
    explanation: "**SAT Pattern: Median of Sorted Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Sort: $76,\\ 82,\\ 88,\\ 91,\\ 95$. With five values, the median is the middle one: $88$, choice C.\n\n```seva-figure\n{\"type\":\"dotPlot\",\"params\":{\"data\":[{\"value\":76,\"count\":1},{\"value\":82,\"count\":1},{\"value\":88,\"count\":1},{\"value\":91,\"count\":1},{\"value\":95,\"count\":1}],\"xMin\":75,\"xMax\":96},\"caption\":\"The data set, sorted onto a number line.\"}\n```\n\n**The Full Solution:**\nStep 1: Sort ascending: $76,\\ 82,\\ 88,\\ 91,\\ 95$.\nStep 2: For an odd count ($n=5$), the median sits at position $\\frac{5+1}{2}=3$: the $3$rd value, $88$.\n\nCheck: two scores below ($76,82$) and two above ($91,95$) — balanced. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($82$): the $2$nd value, one slot short of the middle.\n* Choice B ($86.4$): the MEAN ($\\frac{432}{5}=86.4$), not the median.\n* Choice D ($91$): the $4$th value, one slot past the middle.\n\n**Test Day Takeaway:** Median is the middle of the SORTED list, not the average. For an odd count it's a single value; for an even count, average the two middle entries.",
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
    explanation: "**SAT Pattern: Rate × Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Amount $=$ rate $\\times$ time $=15\\times 20=300$ gallons, choice C.\n\n**The Full Solution:**\nStep 1: The hose delivers $15$ gallons each minute for $20$ minutes.\nStep 2: Multiply, since the minutes cancel: $15\\ \\frac{\\text{gal}}{\\text{min}}\\times 20\\text{ min}=300$ gallons.\n\nCheck: $\\frac{300}{20}=15$ gal/min returns the given rate. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($150$): used a rate of $10$ gal/min instead of $15$.\n* Choice B ($200$): used $10$ minutes instead of $20$.\n* Choice D ($350$): an arithmetic slip past the correct product.\n\n**Test Day Takeaway:** Total $=$ rate $\\times$ time when the time units match. Check that the unit in the rate (per minute) lines up with the time given (minutes).",
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
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The drop is $1250 - 1100 = 150$, and $\\frac{150}{1250} = \\frac{3}{25} = 12\\%$.\n\n**The Full Solution:**\nStep 1: Find the change. $1250 - 1100 = 150$ fewer members.\nStep 2: Divide by the ORIGINAL value (March): $\\frac{150}{1250}$.\nStep 3: Simplify: $\\frac{150}{1250} = \\frac{3}{25} = 0.12 = 12\\%$.\n\nCheck: $1250 \\times 0.88 = 1100$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($10\\%$): uses $125$ as the change instead of the actual $150$.\n* Choice C ($13.6\\%$): divides by the NEW value $1100$ instead of the original.\n* Choice D ($15\\%$): an arithmetic slip on the denominator.\n\n**Test Day Takeaway:** Percent change always divides by the ORIGINAL amount: $\\frac{\\text{change}}{\\text{original}}$. Simplifying the fraction first ($\\frac{150}{1250}=\\frac{3}{25}$) makes the percent obvious.",
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
    explanation: "**SAT Pattern: Weighted Average Final Grade**\n\n**The correct answer is $86.1$.**\n\n**The Fast Way (~25s):** Multiply each score by its weight and add: $0.40(92) + 0.35(78) + 0.25(88) = 36.8 + 27.3 + 22.0 = 86.1$.\n\n**The Full Solution:**\nStep 1: Convert each weight to a decimal and multiply by its score.\n$0.40 \\times 92 = 36.8$\n$0.35 \\times 78 = 27.3$\n$0.25 \\times 88 = 22.0$\nStep 2: Add the weighted pieces: $36.8 + 27.3 + 22.0 = 86.1$.\n\nCheck: the weights sum to $0.40 + 0.35 + 0.25 = 1.00$, and $86.1$ falls between the lowest score $78$ and the highest $92$. $\\checkmark$\n\n**Common Mistakes:** Taking the plain average $\\frac{92+78+88}{3} = 86$ (ignores the weights); using whole-number percents like $40 \\times 92$ instead of the decimal $0.40 \\times 92$.\n\n**Test Day Takeaway:** A weighted average is each value times its weight, summed. Confirm the weights total $1.00$ before you trust the result.",
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
    explanation: "**SAT Pattern: Net Effect of Successive Changes**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Multiply the multipliers: $1.25 \\times 0.80 = 1.00$, so the price ends exactly where it started — no change.\n\n**The Full Solution:**\nStep 1: A $25\\%$ increase multiplies by $1.25$.\nStep 2: A $20\\%$ decrease multiplies by $0.80$.\nStep 3: Apply both: net multiplier $= 1.25 \\times 0.80 = 1.00$. A multiplier of $1$ means the price is unchanged.\n\nCheck: start at $\\$100$. After $+25\\%$: $\\$125$. After $-20\\%$: $\\$125 \\times 0.80 = \\$100$. Back to start. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($5\\%$ increase): adds the percents ($25\\% - 20\\% = 5\\%$) instead of compounding the multipliers.\n* Choice C ($5\\%$ decrease): same additive error with the sign flipped.\n* Choice D ($10\\%$ increase): an arithmetic guess that ignores the actual product.\n\n**Test Day Takeaway:** Stack percent changes as a PRODUCT of multipliers, never a sum: $(1+p)(1-q)$. The $+25\\%$ then $-20\\%$ pair is a classic — it lands exactly back at the start.",
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
    explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $84$.**\n\n**The Fast Way (~5s):** Sum $= \\text{mean} \\times \\text{count} = 14 \\times 6 = 84$.\n\n**The Full Solution:**\nStep 1: The mean is $\\bar{x} = \\frac{\\text{sum}}{n}$, so rearranging gives $\\text{sum} = \\bar{x} \\times n$.\nStep 2: Substitute: $\\text{sum} = 14 \\times 6 = 84$.\n\nCheck: any six values summing to $84$ have mean $\\frac{84}{6} = 14$. $\\checkmark$\n\n**Common Mistakes:** Dividing instead of multiplying ($\\frac{14}{6}$); using the wrong count.\n\n**Test Day Takeaway:** Sum $=$ mean $\\times$ count. This is the foundation of every add, remove, or replace-a-value mean problem.",
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
    explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $21$.**\n\n**The Fast Way (~15s):** Old sum $= 8 \\times 12 = 96$; new sum $= 9 \\times 13 = 117$. The added value is the gap: $117 - 96 = 21$.\n\n**The Full Solution:**\nStep 1: Convert each mean to a sum. Old total $= 8 \\times 12 = 96$.\nStep 2: New total $= 9 \\times 13 = 117$.\nStep 3: The $9$th number is the difference between the totals: $117 - 96 = 21$.\n\nCheck: $\\frac{96 + 21}{9} = \\frac{117}{9} = 13$. $\\checkmark$\n\n**Common Mistakes:** Reporting the new mean $13$ as the added value; subtracting the means directly ($13 - 12 = 1$), which ignores the change in count.\n\n**Test Day Takeaway:** When a value is added to or removed from a list, work with SUMS. Old sum vs. new sum hands you the added value directly.",
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
    explanation: "**SAT Pattern: Mean from List**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Old sum $= 5 \\times 78 = 390$; new sum $= 6 \\times 80 = 480$. The $6$th score is $480 - 390 = 90$.\n\n**The Full Solution:**\nStep 1: Old total over $5$ tests: $5 \\times 78 = 390$.\nStep 2: New total over $6$ tests: $6 \\times 80 = 480$.\nStep 3: The $6$th score is the change in total: $480 - 390 = 90$.\n\nCheck: $\\frac{390 + 90}{6} = \\frac{480}{6} = 80$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($80$): assumes the new score equals the new mean.\n* Choice B ($79$): averages the two means, $\\frac{78 + 80}{2}$.\n* Choice C ($78$): stops at the old mean.\n\n**Test Day Takeaway:** To LIFT a mean, the new value must sit above the new mean by enough to raise every existing value too. Always convert means to sums first.",
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
    explanation: "**SAT Pattern: Mean from List**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Original sum $= 7 \\times 24 = 168$. Remove $30$: new sum $= 138$. New mean $= \\frac{138}{6} = 23$.\n\n**The Full Solution:**\nStep 1: Old total: $7 \\times 24 = 168$.\nStep 2: Take out the removed value: $168 - 30 = 138$.\nStep 3: Divide by the new count of $6$: $\\frac{138}{6} = 23$.\n\nCheck: removing a value ($30$) ABOVE the mean ($24$) must pull the mean down, and $23 < 24$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($28$): divides the original total $168$ by $6$ without removing $30$ from the sum.\n* Choice C ($-6$): subtracts $30$ from the mean directly, $24 - 30$.\n* Choice D ($27$): averages $24$ and $30$.\n\n**Test Day Takeaway:** Removing a value above the mean lowers it; removing one below raises it. Update the SUM, then divide by the new count.",
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
    explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $53$.**\n\n**The Fast Way (~10s):** Swapping $35$ for $65$ adds $30$ to the sum across $10$ values, so the mean rises by $\\frac{30}{10} = 3$: new mean $= 50 + 3 = 53$.\n\n**The Full Solution:**\nStep 1: Old total: $10 \\times 50 = 500$.\nStep 2: A replacement changes the sum by new minus old: $65 - 35 = +30$.\nStep 3: New total $= 500 + 30 = 530$, and new mean $= \\frac{530}{10} = 53$.\n\nCheck: the count stays $10$; only the sum shifts by $+30$, so the mean shifts by $+3$. $\\checkmark$\n\n**Common Mistakes:** Treating a replacement as an add or remove (which would change the count); averaging the old and new values.\n\n**Test Day Takeaway:** A REPLACEMENT keeps the count fixed and shifts the mean by $\\frac{\\text{new} - \\text{old}}{\\text{count}}$.",
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
    explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~20s):** Set $\\frac{16n + 3(24)}{n + 3} = 18$. Then $16n + 72 = 18n + 54 \\Rightarrow 2n = 18 \\Rightarrow n = 9$.\n\n**The Full Solution:**\nStep 1: Old sum is $16n$; adding three $24$'s gives new sum $16n + 72$ over $n + 3$ values.\nStep 2: Set the new mean equal to $18$: $\\frac{16n + 72}{n + 3} = 18$.\nStep 3: Clear the fraction: $16n + 72 = 18(n + 3) = 18n + 54$.\nStep 4: Solve: $72 - 54 = 18n - 16n \\Rightarrow 18 = 2n \\Rightarrow n = 9$.\n\nCheck: $9$ values at mean $16$ sum to $144$; add $72$ for a total of $216$ over $12$ values, and $\\frac{216}{12} = 18$. $\\checkmark$\n\n**Common Mistakes:** Distributing $18$ to only one term inside $18(n+3)$; treating the three added $24$'s as one separate average instead of three individual values.\n\n**Test Day Takeaway:** With an unknown count, write the new-mean equation in terms of $n$, clear the fraction, then solve the linear equation.",
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
    explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $29$.**\n\n**The Fast Way (~20s):** Set $\\frac{50n + 80}{n + 1} = 51$. Then $50n + 80 = 51n + 51 \\Rightarrow n = 29$.\n\n**The Full Solution:**\nStep 1: Old sum is $50n$; after adding $80$ the new sum is $50n + 80$ over $n + 1$ values.\nStep 2: Set the new mean equal to $51$: $\\frac{50n + 80}{n + 1} = 51$.\nStep 3: Clear the fraction: $50n + 80 = 51(n + 1) = 51n + 51$.\nStep 4: Solve: $80 - 51 = 51n - 50n \\Rightarrow n = 29$.\n\nCheck: $29$ values at mean $50$ sum to $1450$; add $80$ for $1530$ over $30$ values, and $\\frac{1530}{30} = 51$. $\\checkmark$\n\n**Common Mistakes:** Multiplying only $51n$ and forgetting the $+51$ from $51(n+1)$; treating the $+80$ as a multiplier rather than an added constant.\n\n**Test Day Takeaway:** Mean-change problems for $n$ follow the template $\\frac{\\text{old sum} + \\text{new value}}{n + 1} = \\text{new mean}$. Clear the fraction first, then solve linearly.",
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
    explanation: "**SAT Pattern: Mean from List**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Sum of $A$: $12 \\times 30 = 360$; sum of $B$: $8 \\times 40 = 320$. Combined mean $= \\frac{360 + 320}{20} = \\frac{680}{20} = 34$.\n\n**The Full Solution:**\nStep 1: The combined mean is the TOTAL sum over the TOTAL count, not the average of the two means.\nStep 2: Sum of $A = 12 \\times 30 = 360$; sum of $B = 8 \\times 40 = 320$.\nStep 3: Combined sum $= 360 + 320 = 680$ over $12 + 8 = 20$ values.\nStep 4: Combined mean $= \\frac{680}{20} = 34$.\n\nCheck: $A$ has more values, so the result is pulled toward $A$'s mean of $30$, and $34$ is closer to $30$ than to $40$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($35$): averages the two means, $\\frac{30 + 40}{2}$, ignoring that $A$ is larger.\n* Choice C ($36$): weights toward the larger MEAN instead of the larger COUNT.\n* Choice D ($33$): swaps the counts when weighting.\n\n**Test Day Takeaway:** Combined mean $= \\frac{\\text{sum}_A + \\text{sum}_B}{\\text{count}_A + \\text{count}_B}$. It always leans toward the mean of the group with MORE values.",
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
    explanation: "**SAT Pattern: Residual**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~10s):** Predicted value: $\\hat{y} = 2(5) + 1 = 11$. Residual $= y - \\hat{y} = 13 - 11 = 2$.\n\n**The Full Solution:**\nStep 1: A residual is actual minus predicted: $\\text{residual} = y - \\hat{y}$.\nStep 2: Plug $x = 5$ into the model: $\\hat{y} = 2(5) + 1 = 11$.\nStep 3: The actual value is $y = 13$, so the residual is $13 - 11 = 2$. The positive sign means the point sits $2$ units above the line.\n\nCheck: $13 - 11 = 2$. $\\checkmark$\n\n**Common Mistakes:** Reporting the predicted value $11$ instead of the residual; computing $\\hat{y} - y$ and getting $-2$.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted. Positive sits above the line; negative sits below.",
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
    explanation: "**SAT Pattern: Residual**\n\n**The correct answer is $-2$.**\n\n**The Fast Way (~10s):** Predict at $x=3$: $\\hat{y}=-(3)+10=7$. Residual $=y-\\hat{y}=5-7=-2$.\n\n**The Full Solution:**\nStep 1: Plug $x=3$ into the line of best fit: $\\hat{y}=-(3)+10=7$.\nStep 2: Subtract the prediction from the actual value: residual $=y-\\hat{y}=5-7=-2$.\n\nThe negative sign means the point sits $2$ units below the line at $x=3$.\n\n**Common Mistakes:** Reporting $2$ and dropping the sign; mis-evaluating $-3+10$ as $13$ instead of $7$.\n\n**Test Day Takeaway:** A residual carries a sign. Below the line means negative; above the line means positive. Compute $\\hat{y}$ first, then subtract.",
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
    explanation: "**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Predict at $x=8$: $\\hat{y}=1.5(8)+4=16$. Residual $=14-16=-2$, which is choice A.\n\n**The Full Solution:**\nStep 1: Evaluate the line of best fit at $x=8$: $\\hat{y}=1.5(8)+4=12+4=16$.\nStep 2: Subtract: residual $=y-\\hat{y}=14-16=-2$.\n\nThe negative sign tells you the point lies $2$ units below the line at $x=8$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): flipped the formula and computed $\\hat{y}-y=16-14=2$.\n* Choice C ($-16$): reported $-\\hat{y}$ instead of $y-\\hat{y}$.\n* Choice D ($14$): stopped at the actual $y$-value and never subtracted the prediction.\n\n**Test Day Takeaway:** Always compute the predicted value from the line first, then use residual $=y-\\hat{y}$. The sign tells you above versus below the line.",
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
    explanation: "**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Residual $=y-\\hat{y}$. A positive residual means actual $y$ exceeds the prediction, so the point sits above the line — choice A.\n\n**The Full Solution:**\nStep 1: The residual is defined as $y-\\hat{y}$ (actual minus predicted).\nStep 2: A residual of $+5$ means $y-\\hat{y}=+5$, so $y$ is $5$ units greater than the line's prediction at that $x$.\n\nA point above the line is exactly \"the actual $y$-value is $5$ units above the line's prediction at that $x$.\"\n\n**Why the wrong answers are tempting:**\n* Choice B: describes a negative residual — that would be a point below the line.\n* Choice C: confuses the residual with the $x$-coordinate; the residual is a vertical distance, not an $x$-value.\n* Choice D: confuses the residual with the slope; a residual is about one point, not the line's steepness.\n\n**Test Day Takeaway:** The sign of a residual gives the point's position relative to the line: positive is above, negative is below, zero is on the line.",
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
    explanation: "**SAT Pattern: Residual**\n\n**The correct answer is $1$.**\n\n**The Fast Way (~15s):** Predict at $x=6$: $\\hat{y}=0.75(6)+2.5=4.5+2.5=7$. Residual $=8-7=1$.\n\n**The Full Solution:**\nStep 1: Evaluate the line at $x=6$: $\\hat{y}=0.75(6)+2.5=4.5+2.5=7$.\nStep 2: Subtract: residual $=y-\\hat{y}=8-7=1$.\n\nThe positive result means the point lies $1$ unit above the line at $x=6$.\n\n**Common Mistakes:** A decimal slip on $0.75\\times 6$ (getting $0.45$); adding instead of multiplying ($0.75+6=6.75$); dropping the intercept $2.5$.\n\n**Test Day Takeaway:** With a decimal slope, slow down on the multiplication and write the intermediate value before adding the intercept.",
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
    explanation: "**SAT Pattern: Residual**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~10s):** From residual $=y-\\hat{y}$, solve $y=\\hat{y}+\\text{residual}=18+(-3)=15$.\n\n**The Full Solution:**\nStep 1: Rearrange the definition: residual $=y-\\hat{y}$ gives $y=\\hat{y}+\\text{residual}$.\nStep 2: Substitute the predicted value $18$ and residual $-3$: $y=18+(-3)=15$.\n\nCheck: with predicted $18$ and actual $15$, residual $=15-18=-3$. $\\checkmark$\n\n**Common Mistakes:** Adding $3$ instead of $-3$ (dropping the negative); reporting $18$ or $-3$ directly without solving.\n\n**Test Day Takeaway:** Actual $y$ equals predicted plus residual. Carry the residual's sign into the addition.",
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
    explanation: "**SAT Pattern: Residual**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~20s):** From residual $=y-\\hat{y}$, the prediction is $\\hat{y}=y-\\text{residual}=17-(-2)=19$. Solve $2x+5=19\\Rightarrow x=7$.\n\n**The Full Solution:**\nStep 1: Find the predicted value. Residual $=y-\\hat{y}$, so $\\hat{y}=y-\\text{residual}=17-(-2)=19$.\nStep 2: Set the line equal to the prediction and solve: $2x+5=19\\Rightarrow 2x=14\\Rightarrow x=7$.\n\nCheck: at $x=7$, $\\hat{y}=2(7)+5=19$, and residual $=17-19=-2$. $\\checkmark$\n\n**Common Mistakes:** Computing $\\hat{y}=17+(-2)=15$ instead of $17-(-2)=19$ (sign slip on the rearrangement); solving $2x+5=17$ with the actual $y$ instead of the prediction, which gives $x=6$.\n\n**Test Day Takeaway:** Working backward from a residual: find $\\hat{y}=y-\\text{residual}$, then substitute into the line equation. Subtracting a negative residual adds.",
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
    explanation: "**SAT Pattern: Residual**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Compute residual $=y-(3x+2)$ for each point and compare magnitudes:\n* $(2,10)$: $10-8=+2$\n* $(4,13)$: $13-14=-1$\n* $(6,25)$: $25-20=+5$ — largest in absolute value\n* $(8,22)$: $22-26=-4$\n\nThe greatest absolute residual, $5$, is at $(6,25)$ — choice C.\n\n**The Full Solution:**\nStep 1: For each point, predict $\\hat{y}=3x+2$, then take residual $=y-\\hat{y}$.\nStep 2: $(2,10)\\to 10-8=2$; $(4,13)\\to 13-14=-1$; $(6,25)\\to 25-20=5$; $(8,22)\\to 22-26=-4$.\nStep 3: Compare absolute values: $2,\\,1,\\,5,\\,4$. The largest is $5$ at $(6,25)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(2,10)$): residual $+2$ — picks the first positive residual rather than the largest.\n* Choice B ($(4,13)$): residual $-1$ — that is the smallest absolute residual, not the largest.\n* Choice D ($(8,22)$): residual $-4$ — large, but $|-4|=4<5$, so it loses to $(6,25)$.\n\n**Test Day Takeaway:** \"Greatest residual\" means greatest in absolute value. Compute every residual, take absolute values, then compare. The sign only tells you above versus below.",
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
    explanation: "**SAT Pattern: Margin of Error**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~5s):** $\\text{MOE}\\approx\\dfrac{1}{\\sqrt{100}}=\\dfrac{1}{10}=0.10=10\\%$.\n\n**The Full Solution:**\nStep 1: Apply the estimate with $n=100$: $\\text{MOE}\\approx\\dfrac{1}{\\sqrt{100}}=\\dfrac{1}{10}=0.10$.\nStep 2: Convert to a percent: $0.10\\times 100=10\\%$.\n\nSo the margin of error is about $10$ percent.\n\n**Common Mistakes:** Reporting $0.10$ when the question asks for a percent; using $\\sqrt{100}=100$ instead of $10$.\n\n**Test Day Takeaway:** The shortcut $\\text{MOE}\\approx\\dfrac{1}{\\sqrt{n}}$ gives a quick $95\\%$-confidence estimate. Know the clean cases: $n=100,400,1600,2500$ give tidy values.",
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
    explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** A $95\\%$ interval of $55\\%\\pm 4\\%$ runs from $51\\%$ to $59\\%$, and the inference applies to the sampled group — voters in this city. That is choice B.\n\n**The Full Solution:**\nStep 1: Build the interval: $55\\%\\pm 4\\%$ gives $[51\\%,\\,59\\%]$.\nStep 2: State it with the confidence level and the correct population: we are $95\\%$ confident the true proportion of city voters supporting the ordinance lies between $51\\%$ and $59\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A: treats $55\\%$ as a certain, exact population value — sampling always carries uncertainty.\n* Choice C: misreads the interval as $4\\%$ to $55\\%$; the interval is centered on $55\\%$, not bounded below by the margin.\n* Choice D: extends the conclusion to all voters nationwide, but only city voters were sampled.\n\n**Test Day Takeaway:** A confidence-interval interpretation needs three things: the interval (sample value $\\pm$ MOE), the stated confidence level, and the population that was actually sampled.",
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
    explanation: "**SAT Pattern: Margin of Error**\n\n**The correct answer is $2.5$.**\n\n**The Fast Way (~10s):** $\\sqrt{1{,}600}=40$, so $\\text{MOE}\\approx\\dfrac{1}{40}=0.025=2.5\\%$.\n\n**The Full Solution:**\nStep 1: $\\sqrt{1{,}600}=\\sqrt{16\\cdot 100}=4\\cdot 10=40$.\nStep 2: $\\text{MOE}\\approx\\dfrac{1}{40}=0.025$.\nStep 3: Convert to a percent: $0.025\\times 100=2.5\\%$.\n\nCheck: at $n=400$, $\\sqrt{n}=20$ and MOE $=5\\%$; quadrupling $n$ to $1{,}600$ doubles $\\sqrt{n}$ to $40$ and halves the MOE to $2.5\\%$. $\\checkmark$\n\n**Common Mistakes:** Computing $\\sqrt{1{,}600}=400$ instead of $40$; reporting $0.025$ without converting to a percent.\n\n**Test Day Takeaway:** Quadrupling the sample size halves the margin of error, because $\\text{MOE}\\propto\\dfrac{1}{\\sqrt{n}}$ and $\\sqrt{4n}=2\\sqrt{n}$.",
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
    explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Since $\\text{MOE}\\propto\\dfrac{1}{\\sqrt{n}}$, halving the MOE requires quadrupling $n$: $4\\times 400=1{,}600$, which is choice B.\n\n**The Full Solution:**\nStep 1: To halve the MOE, you need $\\sqrt{n_{\\text{new}}}=2\\sqrt{n_{\\text{old}}}$, which means $n_{\\text{new}}=4\\,n_{\\text{old}}$.\nStep 2: $n_{\\text{new}}=4\\times 400=1{,}600$.\n\nCheck: at $n=400$, $\\text{MOE}\\approx\\dfrac{1}{20}=5\\%$; at $n=1{,}600$, $\\text{MOE}\\approx\\dfrac{1}{40}=2.5\\%$ — exactly half. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($800$): doubles $n$, treating MOE as linear in $n$; but MOE depends on $\\sqrt{n}$, so doubling $n$ only cuts MOE by a factor of $\\sqrt{2}$.\n* Choice C ($200$): halves $n$, which would double the MOE.\n* Choice D ($4{,}000$): scales by an arbitrary factor of $10$.\n\n**Test Day Takeaway:** To cut the margin of error by a factor, multiply the sample size by the square of that factor: half the MOE means $4\\times$ the sample; one-third the MOE means $9\\times$.",
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
    explanation: "**SAT Pattern: Margin of Error**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The sample was first-year students at one university, and a confidence interval only supports inference about the population that was actually sampled — choice C.\n\n**The Full Solution:**\nStep 1: Identify the sampled population. The sample was drawn from first-year students at a single university.\nStep 2: A confidence interval estimates the proportion only for that exact group. Extending beyond it — to older students, other universities, or non-students — is unsupported.\n\nThe valid population is exactly the sampled one: first-year students at that university.\n\n**Why the wrong answers are tempting:**\n* Choice A: extends to all college students nationwide, far beyond a one-university sample.\n* Choice B: extends to older students who were never sampled.\n* Choice D: extends to all young adults in the city, including non-students.\n\n**Test Day Takeaway:** A confidence interval is valid only for the exact population that was sampled. Any broader generalization is statistically unsupported.",
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
    explanation: "**SAT Pattern: Reverse-Percent**\n\n**The correct answer is $2{,}500$.**\n\n**The Fast Way (~10s):** The $875$ fiction books are $35\\%$ of the whole, so divide: total $= \\dfrac{875}{0.35} = 2{,}500$.\n\n**The Full Solution:**\nStep 1: Let $T$ be the total number of books. The fiction count is $35\\%$ of $T$, so $0.35\\,T = 875$.\nStep 2: Divide both sides by $0.35$: $T = \\dfrac{875}{0.35} = 2{,}500$.\nStep 3: Check: $35\\%$ of $2{,}500$ is $0.35 \\cdot 2{,}500 = 875$ $\\checkmark$.\n\n**Common Mistakes:** Multiplying $875 \\cdot 0.35 = 306.25$ (the forward operation) instead of dividing; dividing by $0.035$ for $25{,}000$ from a decimal slip.\n\n**Test Day Takeaway:** Reverse-percent $=$ part $\\div$ rate. When the rate is below $100\\%$, the total must be larger than the given part.",
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
    explanation: "**SAT Pattern: Reverse-Percent**\n\n**The correct answer is $2{,}340$.**\n\n**The Fast Way (~10s):** The $1{,}287$ widgets are $55\\%$ of the target, so target $= \\dfrac{1{,}287}{0.55} = 2{,}340$.\n\n**The Full Solution:**\nStep 1: Let $T$ be the monthly target. The output is $55\\%$ of $T$, so $0.55\\,T = 1{,}287$.\nStep 2: Divide both sides by $0.55$: $T = \\dfrac{1{,}287}{0.55} = 2{,}340$.\nStep 3: Check: $0.55 \\cdot 2{,}340 = 1{,}287$ $\\checkmark$.\n\n**Common Mistakes:** Multiplying $1{,}287 \\cdot 0.55 = 707.85$ (forward operation); dividing by $5.5$ or $0.055$ from a decimal-position slip.\n\n**Test Day Takeaway:** A target reached only partially: divide the amount achieved by the fraction achieved. Sanity check that $1{,}287$ is roughly half of $2{,}340$, matching the \"roughly half\" feel of $55\\%$.",
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
    explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** A $20\\%$ discount keeps $80\\%$, so $0.80 \\cdot \\text{original} = 96 \\Rightarrow \\text{original} = \\dfrac{96}{0.80} = 120$, choice B.\n\n**The Full Solution:**\nStep 1: Let $P$ be the original price. After a $20\\%$ discount, the sale price is $P - 0.20P = 0.80P$.\nStep 2: Set $0.80P = 96$.\nStep 3: Divide by $0.80$: $P = \\dfrac{96}{0.80} = 120$.\nStep 4: Check: $20\\%$ of $\\$120$ is $\\$24$, and $\\$120 - \\$24 = \\$96$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$115.20$): adds $20\\%$ to the sale price ($96 \\cdot 1.20$). Reversing a discount is not the same as adding back the same percent.\n* Choice C ($\\$76.80$): applies a second $20\\%$ discount ($96 \\cdot 0.80$) instead of reversing.\n* Choice D ($\\$480$): divides by the discount fraction $0.20$ instead of the retention fraction $0.80$.\n\n**Test Day Takeaway:** After an $r\\%$ discount the multiplier is $1 - \\dfrac{r}{100}$. Divide the sale price by that multiplier to recover the original.",
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
    explanation: "**SAT Pattern: Reverse-Percent**\n\n**The correct answer is $1{,}250$.**\n\n**The Fast Way (~15s):** A $12\\%$ increase gives a multiplier of $1.12$, so last year $= \\dfrac{1{,}400}{1.12} = 1{,}250$.\n\n**The Full Solution:**\nStep 1: Let $L$ be last year's enrollment. A $12\\%$ increase makes this year $L \\cdot 1.12 = 1{,}400$.\nStep 2: Divide by $1.12$: $L = \\dfrac{1{,}400}{1.12} = 1{,}250$.\nStep 3: Check: $1{,}250 \\cdot 1.12 = 1{,}400$, and the gain is $\\dfrac{150}{1{,}250} = 0.12 = 12\\%$ $\\checkmark$.\n\n**Common Mistakes:** Decreasing $1{,}400$ by $12\\%$ ($1{,}400 \\cdot 0.88 = 1{,}232$) instead of reversing the increase; dividing by $0.12$ or by $0.88$ rather than $1.12$.\n\n**Test Day Takeaway:** After an $r\\%$ increase the multiplier is $1 + \\dfrac{r}{100}$. To reverse a $12\\%$ increase, divide by $1.12$ — not by $0.88$.",
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
    explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** If $27\\%$ did not vote, $73\\%$ did. So $0.73 \\cdot \\text{total} = 3{,}650 \\Rightarrow \\text{total} = \\dfrac{3{,}650}{0.73} = 5{,}000$, choice A.\n\n**The Full Solution:**\nStep 1: Let $T$ be the total registered voters. The complement of $27\\%$ is $100\\% - 27\\% = 73\\%$, the share that did vote.\nStep 2: The $3{,}650$ voters are $73\\%$ of $T$, so $0.73\\,T = 3{,}650$.\nStep 3: Divide by $0.73$: $T = \\dfrac{3{,}650}{0.73} = 5{,}000$.\nStep 4: Check: $73\\%$ of $5{,}000 = 3{,}650$, leaving $27\\%$ or $1{,}350$ non-voters $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($986$): multiplies $3{,}650 \\cdot 0.27$, treating $3{,}650$ as the total and finding non-voters.\n* Choice C ($13{,}519$): divides by the wrong rate, $\\dfrac{3{,}650}{0.27}$.\n* Choice D ($4{,}636$): adds $27\\%$ to $3{,}650$ ($3{,}650 \\cdot 1.27$).\n\n**Test Day Takeaway:** When the problem names the complement (\"did not vote\"), the given part belongs to the other share. Subtract from $100\\%$ first to find the rate the part represents.",
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
    explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** A $15\\%$ discount means the buyer pays $85\\%$, so $0.85 \\cdot \\text{original} = 51 \\Rightarrow \\text{original} = \\dfrac{51}{0.85} = 60$, choice A.\n\n**The Full Solution:**\nStep 1: Let $P$ be the original price. A $15\\%$ discount removes $0.15P$, leaving $0.85P$.\nStep 2: Set $0.85P = 51$.\nStep 3: Divide by $0.85$: $P = \\dfrac{51}{0.85} = 60$.\nStep 4: Check: $15\\%$ of $\\$60$ is $\\$9$, and $\\$60 - \\$9 = \\$51$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$58.65$): adds $15\\%$ to the sale price ($51 \\cdot 1.15$). Reversing a discount is not adding the same percent back.\n* Choice C ($\\$340$): divides by the discount rate $0.15$ instead of the retention rate $0.85$.\n* Choice D ($\\$43$): applies another $15\\%$ discount to $\\$51$.\n\n**Test Day Takeaway:** A discount keeps a fraction of the original. Original $=$ sale price $\\div$ retention rate; for a $15\\%$ discount, divide by $0.85$, not $0.15$.",
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
    explanation: "**SAT Pattern: Reverse-Percent**\n\n**The correct answer is $100$.**\n\n**The Fast Way (~20s):** The net multiplier is $1.20 \\times 0.90 = 1.08$, so $1.08 \\cdot \\text{original} = 108 \\Rightarrow \\text{original} = \\dfrac{108}{1.08} = 100$.\n\n**The Full Solution:**\nStep 1: Let $P$ be the original price. After $+20\\%$ the price is $1.20P$.\nStep 2: A $-10\\%$ on that new price multiplies again: $0.90 \\cdot 1.20P = 1.08P$.\nStep 3: Set $1.08P = 108$ and divide: $P = \\dfrac{108}{1.08} = 100$.\nStep 4: Check: $100 \\to 1.20 \\cdot 100 = 120 \\to 0.90 \\cdot 120 = 108$ $\\checkmark$.\n\n**Common Mistakes:** Adding the percents to get a net $+10\\%$ and dividing $108$ by $1.10 \\approx 98.18$ — successive percents multiply, not add; applying the $-10\\%$ to the original instead of the increased price.\n\n**Test Day Takeaway:** Successive percent changes compose by multiplication. Build the combined multiplier, then divide the final value to recover the original.",
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
    explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~10s):** Raisins are $\\dfrac{3}{5+3} = \\dfrac{3}{8}$ of the mix, so raisins $= \\dfrac{3}{8} \\cdot 40 = 15$ cups.\n\n**The Full Solution:**\nStep 1: Write the parts as multiples: cashews $= 5k$, raisins $= 3k$, matching the $5 : 3$ ratio.\nStep 2: The total is $5k + 3k = 8k = 40$, so $k = 5$.\nStep 3: Raisins $= 3k = 3 \\cdot 5 = 15$ cups.\nStep 4: Check: cashews $= 25$, total $= 25 + 15 = 40$ $\\checkmark$.\n\n**Common Mistakes:** Using $\\dfrac{3}{5}$ (raisins to cashews) instead of $\\dfrac{3}{8}$ (raisins out of the total); reporting cashews ($25$) or the raw ratio number ($3$).\n\n**Test Day Takeaway:** When the total of both parts is known, each part's fraction has the sum of the ratio numbers as its denominator, not a single part.",
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
    explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Sugar is $\\dfrac{2}{7+2} = \\dfrac{2}{9}$ of the total, so sugar $= \\dfrac{2}{9} \\cdot 45 = 10$ cups, choice B.\n\n**The Full Solution:**\nStep 1: Write flour $= 7k$ and sugar $= 2k$, matching the $7 : 2$ ratio.\nStep 2: The total is $7k + 2k = 9k = 45$, so $k = 5$.\nStep 3: Sugar $= 2k = 2 \\cdot 5 = 10$ cups.\nStep 4: Check: flour $= 35$, total $= 35 + 10 = 45$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($35$): reports the flour amount instead of sugar.\n* Choice C ($2$): stops at the raw ratio number $2$ as if it were a cup count.\n* Choice D ($22.5$): divides the total by the sugar ratio number ($45 \\div 2$).\n\n**Test Day Takeaway:** For one part of a sum, the numerator is that part's ratio number and the denominator is the sum of all ratio numbers.",
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
    explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**The correct answer is $36$.**\n\n**The Fast Way (~10s):** Blue is $\\dfrac{4}{4+7} = \\dfrac{4}{11}$ of the jar, so blue $= \\dfrac{4}{11} \\cdot 99 = 36$.\n\n**The Full Solution:**\nStep 1: Write blue $= 4k$ and green $= 7k$, matching the $4 : 7$ ratio.\nStep 2: The total is $4k + 7k = 11k = 99$, so $k = 9$.\nStep 3: Blue $= 4k = 4 \\cdot 9 = 36$.\nStep 4: Check: green $= 63$, total $= 36 + 63 = 99$ $\\checkmark$.\n\n**Common Mistakes:** Using $\\dfrac{4}{7}$ instead of $\\dfrac{4}{11}$; reporting green ($63$) instead of blue.\n\n**Test Day Takeaway:** With ratio $a : b$ summing to $T$, the parts are $\\dfrac{a}{a+b} \\cdot T$ and $\\dfrac{b}{a+b} \\cdot T$.",
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
    explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Girls are $\\dfrac{4}{4+5} = \\dfrac{4}{9}$ of the class, so girls $= \\dfrac{4}{9} \\cdot 36 = 16$, choice A.\n\n**The Full Solution:**\nStep 1: Write girls $= 4k$ and boys $= 5k$, matching the $4 : 5$ ratio.\nStep 2: The total is $4k + 5k = 9k = 36$, so $k = 4$.\nStep 3: Girls $= 4k = 4 \\cdot 4 = 16$.\nStep 4: Check: boys $= 20$, total $= 16 + 20 = 36$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($20$): reports boys instead of girls.\n* Choice C ($18$): uses a denominator of $8$ instead of $9$, giving $\\dfrac{4}{8} \\cdot 36$.\n* Choice D ($14.4$): uses a denominator of $10$, giving $\\dfrac{4}{10} \\cdot 36$.\n\n**Test Day Takeaway:** For ratio $a : b$, the denominator of each part's fraction is exactly $a + b$ — verify that sum before dividing.",
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
    explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Dimes are $\\dfrac{1}{3+4+1} = \\dfrac{1}{8}$ of the coins, so dimes $= \\dfrac{1}{8} \\cdot 96 = 12$, choice A.\n\n**The Full Solution:**\nStep 1: Write pennies $= 3k$, nickels $= 4k$, dimes $= 1k = k$, matching $3 : 4 : 1$.\nStep 2: The total is $3k + 4k + k = 8k = 96$, so $k = 12$.\nStep 3: Dimes $= k = 12$.\nStep 4: Check: pennies $= 36$, nickels $= 48$, dimes $= 12$, total $= 96$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($48$): reports the nickel count $4k$.\n* Choice C ($36$): reports the penny count $3k$.\n* Choice D ($24$): uses a denominator of $4$ (treating it as $3 : 1$ and dropping the nickels), giving $\\dfrac{1}{4} \\cdot 96$.\n\n**Test Day Takeaway:** With three or more parts, the denominator is the sum of every ratio number — don't drop a term.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'sum-of-parts-ratio',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: "bank-ps-121",
    domain: "problem-solving",
    skills: ["word-problem-to-equation"],
    difficulty: "medium",
    type: "fill-in",
    question: "A jeweler's alloy contains gold, silver, and copper by mass in the ratio $15 : 3 : 2$, respectively. A bar of this alloy has a mass of $360$ grams. How many grams of silver does the bar contain?",
    correctAnswer: "54",
    explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**The correct answer is $54$.**\n\n**The Fast Way (~15s):** The ratio has $15 + 3 + 2 = 20$ parts, so one part is $360 \\div 20 = 18$ grams. Silver is $3$ parts: $3(18) = 54$ grams.\n\n**The Full Solution:**\nStep 1: Add the ratio numbers to get the total number of parts: $15 + 3 + 2 = 20$.\nStep 2: The whole bar, $360$ grams, is spread over $20$ parts, so one part is $\\frac{360}{20} = 18$ grams.\nStep 3: Silver accounts for $3$ parts: $3 \\times 18 = 54$ grams. Check: gold is $15 \\times 18 = 270$ grams and copper is $2 \\times 18 = 36$ grams, and $270 + 54 + 36 = 360$. $\\checkmark$\n\n**Common Mistakes:** Dividing $360$ by the silver number $3$ to get $120$; reporting one part, $18$, instead of three parts; adding only $15 + 3 = 18$ parts (dropping copper), which gives $20$ grams per part and $60$ grams of silver.\n\n**Test Day Takeaway:** Total $\\div$ (sum of the ratio parts) gives the size of one part; then multiply by the number of parts the question actually asks about.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "sum-of-parts-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-122",
    domain: "problem-solving",
    skills: ["word-problem-to-equation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A nursery plants red, yellow, and white tulip bulbs in the ratio $5 : 3 : 2$, respectively. The nursery plants $90$ more red bulbs than white bulbs. How many of the bulbs planted are not yellow?",
    choices: [
      // distractor: the yellow count, 3 parts x 30 = 90 (also equal to the given difference), when the question asks for bulbs that are NOT yellow
      { id: "A", text: "$90$" },
      // distractor: the red count alone (5 parts), dropping the white bulbs
      { id: "B", text: "$150$" },
      { id: "C", text: "$210$" },
      // distractor: the total of all 10 parts, never removing the yellow bulbs
      { id: "D", text: "$300$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Red minus white is $5 - 2 = 3$ parts, and that difference is $90$ bulbs, so one part is $30$. Not yellow means red plus white, $5 + 2 = 7$ parts: $7(30) = 210$.\n\n**The Full Solution:**\nStep 1: Let one part be $k$ bulbs. Then red $= 5k$, yellow $= 3k$, white $= 2k$.\nStep 2: The difference between red and white is given: $5k - 2k = 90$, so $3k = 90$ and $k = 30$.\nStep 3: The bulbs that are not yellow are the red and white ones: $5k + 2k = 7k = 7(30) = 210$. Check: red $= 150$, white $= 60$, and $150 - 60 = 90$. $\\checkmark$ Yellow $= 90$, and the total $150 + 90 + 60 = 300$ minus the $90$ yellow bulbs is $210$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($90$): This is the number of yellow bulbs, $3k = 90$ (it happens to equal the given difference), but the question asks for the bulbs that are *not* yellow.\n* Choice B ($150$): This is the red count alone, $5k$; it leaves out the $60$ white bulbs.\n* Choice D ($300$): This is the total of all three colors, $10k$; the $90$ yellow bulbs were never removed.\n\n**Test Day Takeaway:** When a ratio problem gives a difference instead of a total, set the difference of the parts equal to it to find one part, then reread exactly which parts the question wants.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "sum-of-parts-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-123",
    domain: "problem-solving",
    skills: ["word-problem-to-equation"],
    difficulty: "hard",
    type: "fill-in",
    question: "A blended fertilizer contains three components, P, Q, and R. The ratio of the mass of P to the mass of Q is $3 : 2$, and the ratio of the mass of Q to the mass of R is $4 : 5$. If the blend has a total mass of $450$ grams, how many grams of R does it contain?",
    correctAnswer: "150",
    explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**The correct answer is $150$.**\n\n**The Fast Way (~25s):** Rewrite the ratios so Q matches: $P : Q = 6 : 4$ and $Q : R = 4 : 5$, so $P : Q : R = 6 : 4 : 5$, which is $15$ parts. One part is $450 \\div 15 = 30$ grams, and R is $5(30) = 150$ grams.\n\n**The Full Solution:**\nStep 1: Q is $2$ in the first ratio and $4$ in the second, so scale the first ratio by $2$: $P : Q = 6 : 4$. Now both ratios give Q as $4$.\nStep 2: Combine: $P : Q : R = 6 : 4 : 5$. The total is $6 + 4 + 5 = 15$ parts, so one part is $\\frac{450}{15} = 30$ grams.\nStep 3: R is $5$ parts: $5 \\times 30 = 150$ grams. Check: $P = 180$, $Q = 120$, $R = 150$, and $180 + 120 + 150 = 450$. $\\checkmark$ Also $180 : 120 = 3 : 2$ and $120 : 150 = 4 : 5$. $\\checkmark$\n\n**Common Mistakes:** Splicing the ratios into $3 : 2 : 5$ without matching Q, which gives $45$ grams per part and $R = 225$; using $3 : 4 : 5$, which gives $37.5$ grams per part and $R = 187.5$; reporting P ($180$) or Q ($120$) instead of R.\n\n**Test Day Takeaway:** Two ratios that share a quantity must be scaled so the shared quantity has the same number in both before you combine them into one three-part ratio.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "sum-of-parts-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },

  // === OUTLIER EFFECT (8 questions) — Phase 2 batch 3 priority pattern ===
  // 9x in 12 tests. Covers: adding outlier, shifting all by constant,
  // scaling, replacing, mean-vs-median sensitivity, must-be-true.
  // SAT Pattern kebab matches test bundle: 'outlier-effect'.
  {
    id: "bank-ps-124",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "easy",
    type: "fill-in",
    question: "The dot plot shows the number of eggs counted in each of $8$ bird nests. A ninth nest containing $13$ eggs is added to the data set. What is the mean number of eggs per nest for the $9$ nests?",
    diagram: { type: "dotPlot", params: { data: [{ value: 2, count: 1 }, { value: 3, count: 2 }, { value: 4, count: 3 }, { value: 5, count: 1 }, { value: 7, count: 1 }], xMin: 1, xMax: 8, xLabel: "Number of eggs" } },
    correctAnswer: "5",
    explanation: "**SAT Pattern: Outlier Effect**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** The $8$ nests hold $2 + 3 + 3 + 4 + 4 + 4 + 5 + 7 = 32$ eggs. Adding $13$ gives $45$ eggs in $9$ nests, so the mean is $\\frac{45}{9} = 5$.\n\n**The Full Solution:**\nStep 1: Read the dot plot by column height: one nest with $2$ eggs, two with $3$, three with $4$, one with $5$, one with $7$. The sum is $2 + 6 + 12 + 5 + 7 = 32$.\nStep 2: Add the ninth nest: the new sum is $32 + 13 = 45$, and the new count is $9$.\nStep 3: Mean $= \\frac{45}{9} = 5$. Check: the original mean was $\\frac{32}{8} = 4$; adding a value above the mean must raise it, and $5 > 4$. $\\checkmark$\n\n**Common Mistakes:** Dividing $45$ by $8$ (forgetting the count grew to $9$) gives $5.625$; averaging the old mean with the new value, $\\frac{4 + 13}{2} = 8.5$; counting each column once instead of by its height ($2 + 3 + 4 + 5 + 7 = 21$, then $\\frac{34}{9} \\approx 3.78$).\n\n**Test Day Takeaway:** Adding a value changes both the sum and the count: new mean $= \\dfrac{\\text{old sum} + \\text{new value}}{\\text{old count} + 1}$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "outlier-effect",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-125",
    domain: "problem-solving",
    skills: ["calculate-mean", "find-median"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The recorded masses, in grams, of $12$ rock samples have a mean of $37$ and a median of $40$. The scale used read $4$ grams too high, so each recorded mass is decreased by $4$. What are the mean and the median of the corrected masses?",
    choices: [
      // distractor: treats the correction as leaving both statistics unchanged
      { id: "A", text: "Mean $37$, median $40$" },
      // distractor: shifts the median but not the mean; the mean is built from every value, so it shifts too
      { id: "B", text: "Mean $37$, median $36$" },
      // distractor: shifts the mean but not the median; the middle values move with everything else
      { id: "C", text: "Mean $33$, median $40$" },
      { id: "D", text: "Mean $33$, median $36$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Subtracting the same $4$ from every value slides the whole data set down by $4$: the mean becomes $37 - 4 = 33$ and the median becomes $40 - 4 = 36$.\n\n**The Full Solution:**\nStep 1: The mean is the sum divided by $12$. Each of the $12$ values drops by $4$, so the sum drops by $48$ and the mean drops by $\\frac{48}{12} = 4$, to $33$.\nStep 2: Subtracting a constant does not change the order of the values, so the two middle values are still the two middle values; each drops by $4$, so their average, the median, drops by $4$, to $36$.\nStep 3: Check with a tiny example: $\\{1, 2, 9\\}$ has mean $4$ and median $2$; subtracting $4$ gives $\\{-3, -2, 5\\}$ with mean $0$ and median $-2$, both exactly $4$ lower. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (mean $37$, median $40$): Treats the correction as cosmetic; every value moved, so the summary statistics move with them.\n* Choice B (mean $37$, median $36$): Shifts the median but not the mean, yet the mean is computed from every value and every value dropped.\n* Choice C (mean $33$, median $40$): Shifts the mean but not the median; the middle values dropped by $4$ like all the others.\n\n**Test Day Takeaway:** Adding or subtracting a constant to every value shifts the mean and the median by that constant; measures of spread (range, standard deviation) do not change.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "outlier-effect",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-126",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "medium",
    type: "fill-in",
    question: "The mean mass of $8$ shipping crates is $45$ kilograms. One crate with a mass of $12$ kilograms is removed and replaced by a crate with a mass of $60$ kilograms. What is the mean mass, in kilograms, of the $8$ crates after the replacement?",
    correctAnswer: "51",
    explanation: "**SAT Pattern: Outlier Effect**\n\n**The correct answer is $51$.**\n\n**The Fast Way (~15s):** Swapping $12$ for $60$ raises the total by $48$ kilograms, spread over the same $8$ crates: the mean rises by $\\frac{48}{8} = 6$, to $51$.\n\n**The Full Solution:**\nStep 1: The original total is $8 \\times 45 = 360$ kilograms.\nStep 2: Remove the $12$-kilogram crate and add the $60$-kilogram crate: $360 - 12 + 60 = 408$ kilograms. The count is still $8$.\nStep 3: New mean $= \\frac{408}{8} = 51$. Check: the change in total, $60 - 12 = 48$, divided by $8$ crates is $6$, and $45 + 6 = 51$. $\\checkmark$\n\n**Common Mistakes:** Dividing $408$ by $9$ (as if a crate were added) gives $45.33$, or by $7$ (as if one were only removed) gives $58.29$; adding $60$ without removing $12$ gives $\\frac{420}{8} = 52.5$; adding the full $48$ to the mean gives $93$.\n\n**Test Day Takeaway:** A replacement changes the sum by (new $-$ old) and leaves the count alone; divide that change by $n$ to get the change in the mean.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "outlier-effect",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-127",
    domain: "problem-solving",
    skills: ["calculate-mean", "find-median"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The dot plot shows the number of service calls a technician completed on each of $7$ days. A value of $19$, for an eighth day, is added to the data set. How do the mean and the median of the $8$-day data set compare with those of the $7$-day data set?",
    diagram: { type: "dotPlot", params: { data: [{ value: 3, count: 1 }, { value: 4, count: 2 }, { value: 5, count: 1 }, { value: 6, count: 2 }, { value: 7, count: 1 }], xMin: 2, xMax: 8, xLabel: "Service calls completed" } },
    choices: [
      { id: "A", text: "The mean increased by more than the median increased." },
      // distractor: reverses the sizes; the median only moves to the average of two middle values (5 to 5.5) while the mean jumps 1.75
      { id: "B", text: "The median increased by more than the mean increased." },
      // distractor: the median does move, from 5 to 5.5, because the count goes from odd to even
      { id: "C", text: "The mean increased, and the median did not change." },
      // distractor: an outlier never moves the mean and the median equally
      { id: "D", text: "The mean and the median increased by the same amount." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The $7$ values are $3, 4, 4, 5, 6, 6, 7$: sum $35$, mean $5$, median $5$. With $19$ added, the mean is $\\frac{54}{8} = 6.75$ and the median is $\\frac{5 + 6}{2} = 5.5$. The mean rose $1.75$; the median rose only $0.5$.\n\n**The Full Solution:**\nStep 1: Read the plot: $3, 4, 4, 5, 6, 6, 7$. Sum $= 35$, so the mean is $\\frac{35}{7} = 5$; the median is the 4th of the $7$ ordered values, $5$.\nStep 2: New data set: $3, 4, 4, 5, 6, 6, 7, 19$. Sum $= 54$, so the mean is $\\frac{54}{8} = 6.75$, an increase of $1.75$.\nStep 3: With $8$ values the median is the average of the 4th and 5th values: $\\frac{5 + 6}{2} = 5.5$, an increase of $0.5$. Check: $19$ is far above every other value, and an extreme value pulls the mean much more than the median. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: Reverses the sizes. The median can only move to the average of the two middle values, from $5$ to $5.5$, while the mean absorbs the whole $19$.\n* Choice C: The median does change, from $5$ to $5.5$, because the count went from odd ($7$) to even ($8$) and the median is now an average of two values.\n* Choice D: An outlier never moves the mean and the median by the same amount; here $1.75$ versus $0.5$.\n\n**Test Day Takeaway:** A high outlier drags the mean a lot and the median a little or not at all; when the count changes parity, recompute the median as the average of the two middle values.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "outlier-effect",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-128",
    domain: "problem-solving",
    skills: ["calculate-mean", "find-median"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A data set gives the completion time, in minutes, of each of $40$ entrants in a race. The mean of the data set is $24$ and the median is $30$. If each time is converted to seconds, what are the mean and the median of the converted data set?",
    choices: [
      // distractor: forgets that converting units changes every value
      { id: "A", text: "Mean $24$, median $30$" },
      // distractor: adds 60 to each statistic instead of multiplying by 60
      { id: "B", text: "Mean $84$, median $90$" },
      // distractor: converts the mean but leaves the median in minutes
      { id: "C", text: "Mean $1{,}440$, median $30$" },
      { id: "D", text: "Mean $1{,}440$, median $1{,}800$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Converting minutes to seconds multiplies every value by $60$, so both the mean and the median are multiplied by $60$: $24(60) = 1{,}440$ and $30(60) = 1{,}800$.\n\n**The Full Solution:**\nStep 1: The mean is the sum divided by $40$. Multiplying every value by $60$ multiplies the sum by $60$, so the mean becomes $60 \\times 24 = 1{,}440$ seconds.\nStep 2: Multiplying by a positive constant preserves the order, so the two middle values stay in the middle; each is multiplied by $60$, so the median becomes $60 \\times 30 = 1{,}800$ seconds.\nStep 3: Check with a tiny example in minutes: $\\{1, 2, 6\\}$ has mean $3$ and median $2$; in seconds, $\\{60, 120, 360\\}$ has mean $180 = 3(60)$ and median $120 = 2(60)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (mean $24$, median $30$): Keeps the minute values, but every time was rescaled, so every summary statistic was too.\n* Choice B (mean $84$, median $90$): Adds $60$ rather than multiplying by $60$; a conversion factor multiplies.\n* Choice C (mean $1{,}440$, median $30$): Converts the mean but leaves the median in minutes; the median is one of the data values (or an average of two), so it converts as well.\n\n**Test Day Takeaway:** Multiplying every value by $c$ multiplies the mean, the median, the range, and the standard deviation by $c$; adding a constant shifts only the center.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "outlier-effect",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-129",
    domain: "problem-solving",
    skills: ["calculate-mean", "find-median"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A data set of $25$ values has a mean of $18$ and a median of $24$. Based only on this information, which of the following statements must be true?",
    choices: [
      // distractor: a median of 24 means at least 13 values are 24 or more, so at most 12 (fewer than half) can be below 18
      { id: "A", text: "More than half of the values in the data set are less than $18$." },
      // distractor: values above 24 are allowed as long as the 13th ordered value stays 24
      { id: "B", text: "No value in the data set is greater than $24$." },
      // distractor: the median can equal the maximum when 24 is repeated many times
      { id: "C", text: "The greatest value in the data set is greater than $24$." },
      { id: "D", text: "At least one value in the data set is less than $18$." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** If no value were below $18$, the mean would be at least $18$, with equality only if every value were exactly $18$, which would force the median to be $18$, not $24$. So some value must be less than $18$.\n\n**The Full Solution:**\nStep 1: The sum of the values is $25 \\times 18 = 450$. Suppose every value were $18$ or more; then the sum would be at least $450$, with equality only if all $25$ values were $18$. That data set has median $18$, contradicting the given median of $24$. Therefore at least one value is less than $18$: choice D must be true.\nStep 2: Test the other choices with a concrete data set that fits the givens: thirteen values of $24$ (sum $312$) plus twelve values of $11.5$ (sum $138$). The sum is $450$, so the mean is $18$, and the 13th ordered value is $24$, so the median is $24$.\nStep 3: In that set only $12$ of $25$ values are below $18$ (not more than half), so A fails; the greatest value is $24$, so C fails. For B, change the largest $24$ to $30$ and lower one $11.5$ to $5.5$: the sum is still $450$ and thirteen values are still at least $24$, so the median is still $24$, but now a value exceeds $24$, so B fails. Check: only D survived every test. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: A median of $24$ means at least $13$ of the $25$ values are $24$ or more, so at most $12$ can be below $18$; that is never more than half.\n* Choice B: Nothing caps the largest value; the median only fixes the middle of the ordered list.\n* Choice C: The median can equal the maximum when $24$ is repeated many times, as in the example above.\n\n**Test Day Takeaway:** For \"must be true\" statistics questions, build one small data set that matches the givens and attack each choice with it; a single counterexample eliminates a choice.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "outlier-effect",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-130",
    domain: "problem-solving",
    skills: ["calculate-mean", "find-median"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A data set of $15$ values has a mean of $52$ and a median of $52$. The least value in the data set is decreased by $30$, the greatest value is increased by $45$, and no other values change. What are the mean and the median of the resulting data set?",
    choices: [
      { id: "A", text: "Mean $53$, median $52$" },
      // distractor: assumes the median moves with the mean, but only the two extremes changed
      { id: "B", text: "Mean $53$, median $53$" },
      // distractor: assumes the two changes cancel; they net to +15, not 0
      { id: "C", text: "Mean $52$, median $52$" },
      // distractor: adds the net change 15 to the mean without dividing by 15
      { id: "D", text: "Mean $67$, median $52$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The sum changes by $-30 + 45 = +15$, spread over $15$ values, so the mean rises by $1$, to $53$. The least value is still the least and the greatest is still the greatest, so the middle value is untouched: the median stays $52$.\n\n**The Full Solution:**\nStep 1: Original sum $= 15 \\times 52 = 780$. New sum $= 780 - 30 + 45 = 795$. New mean $= \\frac{795}{15} = 53$.\nStep 2: With $15$ values, the median is the 8th value in order. Decreasing the least value keeps it the least, and increasing the greatest keeps it the greatest, so the order of the list and its 8th value are unchanged: the median is still $52$.\nStep 3: Check: the mean moved by $\\frac{+15}{15} = +1$, from $52$ to $53$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (mean $53$, median $53$): Assumes the median drifts with the mean; but only the two end values changed, and the 8th value never moved.\n* Choice C (mean $52$, median $52$): Assumes the decrease and increase cancel; they net to $+15$, not $0$.\n* Choice D (mean $67$, median $52$): Adds the net change of $15$ directly to the mean instead of dividing it by the $15$ values.\n\n**Test Day Takeaway:** Changing the extremes alters the mean by (net change) $\\div n$ and leaves the median alone as long as the extremes stay the extremes.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "outlier-effect",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-131",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "hard",
    type: "fill-in",
    question: "A data set of $20$ values has a mean of $60$. The two least values, $12$ and $18$, are removed from the data set, and then each of the remaining values is increased by $3$. What is the mean of the resulting data set?",
    correctAnswer: "68",
    explanation: "**SAT Pattern: Outlier Effect**\n\n**The correct answer is $68$.**\n\n**The Fast Way (~20s):** The sum drops from $1{,}200$ to $1{,}170$ over $18$ values, a mean of $65$; adding $3$ to every value adds $3$ to the mean: $68$.\n\n**The Full Solution:**\nStep 1: Original sum $= 20 \\times 60 = 1{,}200$. Removing $12$ and $18$ leaves a sum of $1{,}200 - 30 = 1{,}170$ over $18$ values.\nStep 2: Mean after removal $= \\frac{1{,}170}{18} = 65$.\nStep 3: Increasing every value by $3$ increases the mean by $3$: $65 + 3 = 68$. Check: removing two below-average values must raise the mean ($60 \\to 65$), and a uniform shift of $+3$ then adds exactly $3$. $\\checkmark$\n\n**Common Mistakes:** Dividing $1{,}170$ by $20$ instead of $18$ gives $58.5$ and then $61.5$; stopping at $65$ and forgetting the increase; adding $3$ to the sum only once, $\\frac{1{,}173}{18} \\approx 65.17$, instead of to each of the $18$ values.\n\n**Test Day Takeaway:** Handle the removal first (the sum and the count both change), then the shift (the mean moves by the same constant as every value).",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "outlier-effect",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },

  // === SCATTERPLOT LINE OF BEST FIT (8 questions) — Phase 2 batch 4 priority ===
  // 8x in 12 tests. Covers: plug-in prediction, solve-for-x-given-y,
  // slope-in-context interpretation, intercept-in-context interpretation,
  // line-from-two-predicted-points, n-unit-increase impact.
  // SAT Pattern kebab matches: 'scatterplot-line-of-best-fit'.
  {
    id: "bank-ps-132",
    domain: "problem-solving",
    skills: ["slope-intercept-form", "function-evaluation"],
    difficulty: "easy",
    type: "fill-in",
    question: "The scatterplot shows the height $y$, in centimeters, of each of $10$ seedlings $x$ weeks after planting, along with the line of best fit $\\hat{y} = 2.5x + 4$. According to the line of best fit, what is the predicted height, in centimeters, of a seedling $8$ weeks after planting?",
    diagram: { type: "scatterplot", params: { points: [[1, 7], [2, 8], [3, 12], [4, 13], [5, 17], [6, 18], [7, 22], [8, 23], [9, 27], [10, 28]], xMin: 0, xMax: 10, yMin: 0, yMax: 32, xGridStep: 1, yGridStep: 4, xLabelStep: 2, yLabelStep: 8, xLabel: "Weeks since planting", yLabel: "Height (cm)", bestFitLine: { slope: 2.5, intercept: 4 } } },
    correctAnswer: "24",
    explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~10s):** Substitute $x = 8$ into the line: $\\hat{y} = 2.5(8) + 4 = 20 + 4 = 24$.\n\n**The Full Solution:**\nStep 1: A predicted value comes from the line of best fit, not from a plotted point.\nStep 2: Substitute $x = 8$: $2.5 \\times 8 = 20$, then $20 + 4 = 24$ centimeters.\nStep 3: Check against the graph: at $x = 8$ the line passes through about $24$, and the actual data point $(8, 23)$ sits just below it. $\\checkmark$\n\n**Common Mistakes:** Reading the data point at $x = 8$, which is $23$, instead of the line's value; adding the numbers, $2.5 + 4 + 8 = 14.5$; substituting $8$ for $y$ and solving for $x$, which gives $1.6$.\n\n**Test Day Takeaway:** \"According to the line of best fit\" means substitute into the equation; the actual dot at that $x$ answers a different question (the residual).",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "scatterplot-line-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-133",
    domain: "problem-solving",
    skills: ["slope-intercept-form", "function-evaluation"],
    difficulty: "easy",
    type: "fill-in",
    question: "The scatterplot shows a laptop battery's remaining charge $y$, as a percent, after $x$ hours of use, along with the line of best fit $\\hat{y} = -12x + 98$. According to the line of best fit, what is the predicted remaining charge, as a percent, after $5$ hours of use?",
    diagram: { type: "scatterplot", params: { points: [[0, 96], [1, 88], [2, 72], [3, 64], [4, 48], [5, 40], [6, 24], [7, 16]], xMin: 0, xMax: 8, yMin: 0, yMax: 100, xGridStep: 1, yGridStep: 10, xLabelStep: 1, yLabelStep: 20, xLabel: "Hours of use", yLabel: "Charge (%)", bestFitLine: { slope: -12, intercept: 98 } } },
    correctAnswer: "38",
    explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**The correct answer is $38$.**\n\n**The Fast Way (~10s):** $\\hat{y} = -12(5) + 98 = -60 + 98 = 38$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 5$ into the equation: $-12 \\times 5 = -60$.\nStep 2: Add the intercept: $-60 + 98 = 38$ percent.\nStep 3: Check the sign and the graph: the slope is negative, so the charge falls $12$ points per hour, and the plotted point at $x = 5$ is $(5, 40)$, close to the line's $38$. $\\checkmark$\n\n**Common Mistakes:** Dropping the negative sign and computing $12(5) + 98 = 158$, which is impossible for a percent; reading the data point $40$ instead of the line's value; subtracting the slope once, $98 - 12 = 86$, instead of five times.\n\n**Test Day Takeaway:** A negative slope subtracts; multiply the slope by the full $x$-value before adding the intercept.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "scatterplot-line-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-134",
    domain: "problem-solving",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "fill-in",
    question: "The scatterplot shows the number of minutes $x$ each of $11$ customers spent in a store and the amount $y$, in dollars, each spent, with the line of best fit $\\hat{y} = 0.4x + 9$. For what value of $x$ does the line of best fit predict an amount spent of $\\$25$?",
    diagram: { type: "scatterplot", params: { points: [[5, 12], [10, 11], [15, 16], [20, 18], [25, 17], [30, 22], [35, 24], [40, 23], [45, 28], [50, 30], [55, 32]], xMin: 0, xMax: 60, yMin: 0, yMax: 40, xGridStep: 5, yGridStep: 5, xLabelStep: 10, yLabelStep: 10, xLabel: "Minutes in store", yLabel: "Amount spent (dollars)", bestFitLine: { slope: 0.4, intercept: 9 } } },
    correctAnswer: "40",
    explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**The correct answer is $40$.**\n\n**The Fast Way (~15s):** Set $\\hat{y} = 25$: $0.4x + 9 = 25$, so $0.4x = 16$ and $x = 40$.\n\n**The Full Solution:**\nStep 1: The output is given, so solve the model backward. Set $0.4x + 9 = 25$.\nStep 2: Subtract $9$ from both sides: $0.4x = 16$.\nStep 3: Divide by $0.4$: $x = \\frac{16}{0.4} = 40$ minutes. Check: $0.4(40) + 9 = 16 + 9 = 25$. $\\checkmark$ On the plot the line passes near $(40, 25)$, with the data point $(40, 23)$ just below. $\\checkmark$\n\n**Common Mistakes:** Substituting $25$ for $x$ instead of $y$, which gives $\\hat{y} = 19$; dividing by $0.4$ before subtracting $9$, which gives $62.5 - 9 = 53.5$; multiplying $16$ by $0.4$ instead of dividing, which gives $6.4$.\n\n**Test Day Takeaway:** When the predicted value is given, undo the equation in reverse order: subtract the intercept, then divide by the slope.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "scatterplot-line-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-135",
    domain: "problem-solving",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The scatterplot shows the width $x$, in millimeters, and the mass $y$, in grams, of each of $11$ crab shells. The line of best fit is $\\hat{y} = 1.8x - 30$. Which of the following is the best interpretation of the slope of the line of best fit in this context?",
    diagram: { type: "scatterplot", params: { points: [[32, 30], [38, 36], [44, 52], [45, 50], [50, 58], [55, 72], [60, 74], [66, 92], [72, 98], [78, 108], [80, 116]], xMin: 30, xMax: 80, yMin: 0, yMax: 120, xGridStep: 5, yGridStep: 10, xLabelStep: 10, yLabelStep: 20, xLabel: "Width (mm)", yLabel: "Mass (g)", bestFitLine: { slope: 1.8, intercept: -30 } } },
    choices: [
      // distractor: swaps the variables; the slope is grams per millimeter, not millimeters per gram
      { id: "A", text: "For every increase of $1$ gram in mass, the predicted width increases by $1.8$ millimeters." },
      // distractor: describes the y-intercept, and the intercept here is -30, not 1.8
      { id: "B", text: "The predicted mass of a shell with a width of $0$ millimeters is $1.8$ grams." },
      // distractor: ignores the intercept; the model is 1.8x - 30, not 1.8x
      { id: "C", text: "The mass of each shell is predicted to be $1.8$ times its width." },
      { id: "D", text: "For every increase of $1$ millimeter in width, the predicted mass increases by $1.8$ grams." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** The slope is $\\dfrac{\\text{change in } \\hat{y}}{\\text{change in } x} = 1.8$ grams per millimeter: each additional millimeter of width predicts $1.8$ more grams of mass.\n\n**The Full Solution:**\nStep 1: In $\\hat{y} = mx + b$, the slope $m$ is the change in the predicted $y$ for each $1$-unit increase in $x$.\nStep 2: Here $x$ is width in millimeters and $y$ is mass in grams, so $m = 1.8$ means $1.8$ grams of predicted mass per $1$ millimeter of width.\nStep 3: Check with the equation: $x = 50$ gives $\\hat{y} = 60$, and $x = 51$ gives $\\hat{y} = 61.8$, an increase of exactly $1.8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: Swaps the variables; a change of $1$ gram corresponds to about $\\frac{1}{1.8} \\approx 0.56$ millimeters, not $1.8$.\n* Choice B: Describes the $y$-intercept, the predicted value at $x = 0$, and that intercept is $-30$, not $1.8$.\n* Choice C: Ignores the intercept; the predicted mass is $1.8x - 30$, so it is not simply $1.8$ times the width.\n\n**Test Day Takeaway:** Slope means \"units of $y$ per one unit of $x$\"; the intercept is the predicted $y$ when $x = 0$. Match the direction of the variables before choosing.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "scatterplot-line-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-136",
    domain: "problem-solving",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The scatterplot shows the temperature $y$, in degrees Celsius, of a water sample $x$ minutes after it was removed from a heater, with the line of best fit $\\hat{y} = -2.4x + 85$. Which of the following is the best interpretation of the $y$-intercept of the line of best fit?",
    diagram: { type: "scatterplot", params: { points: [[0, 86], [3, 80], [6, 68], [9, 66], [12, 54], [15, 50], [18, 44], [21, 32], [24, 30], [27, 22], [30, 12]], xMin: 0, xMax: 30, yMin: 0, yMax: 100, xGridStep: 3, yGridStep: 10, xLabelStep: 6, yLabelStep: 20, xLabel: "Minutes after removal", yLabel: "Temperature (°C)", bestFitLine: { slope: -2.4, intercept: 85 } } },
    choices: [
      // distractor: confuses the intercept with the slope; the rate is 2.4 degrees per minute
      { id: "A", text: "The temperature of the sample is predicted to decrease by $85$ degrees Celsius each minute." },
      // distractor: treats 85 as a time; setting y = 0 gives x about 35.4 minutes
      { id: "B", text: "The sample is predicted to reach $0$ degrees Celsius $85$ minutes after removal." },
      { id: "C", text: "The predicted temperature of the sample at the moment it was removed from the heater is $85$ degrees Celsius." },
      // distractor: reads the intercept as the value at x = 1; at x = 1 the prediction is 82.6
      { id: "D", text: "The predicted temperature of the sample $1$ minute after removal is $85$ degrees Celsius." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The $y$-intercept is the predicted $y$ when $x = 0$, and $x = 0$ is the moment of removal: the predicted temperature then is $85$ degrees Celsius.\n\n**The Full Solution:**\nStep 1: In $\\hat{y} = -2.4x + 85$, the constant $85$ is the value of $\\hat{y}$ at $x = 0$.\nStep 2: In this context $x = 0$ means zero minutes after removal, that is, the instant the sample left the heater.\nStep 3: Check: substituting $x = 0$ gives $\\hat{y} = 85$, and the plotted point $(0, 86)$ agrees closely. $\\checkmark$ The rate of cooling, $2.4$ degrees per minute, is the slope, a separate quantity.\n\n**Why the wrong answers are tempting:**\n* Choice A: Describes a slope, and the slope here is $-2.4$, not $-85$.\n* Choice B: Treats $85$ as a time. Setting $\\hat{y} = 0$ gives $x = \\frac{85}{2.4} \\approx 35.4$ minutes, and in any case the intercept is a temperature, not a time.\n* Choice D: Reads the intercept as the value at $x = 1$; at $x = 1$ the prediction is $-2.4 + 85 = 82.6$.\n\n**Test Day Takeaway:** The $y$-intercept is the prediction at $x = 0$; translate \"$x = 0$\" into the starting moment of the context.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "scatterplot-line-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-137",
    domain: "problem-solving",
    skills: ["slope-intercept-form", "function-evaluation"],
    difficulty: "medium",
    type: "fill-in",
    question: "The scatterplot shows the number of coats of sealant $x$ on each of $11$ wood samples and the time $y$, in hours, until water penetrated each sample, with the line of best fit $\\hat{y} = 2.75x + 6.5$. What is the predicted time, in hours, for a sample with $4$ coats?",
    diagram: { type: "scatterplot", params: { points: [[0, 6], [1, 10], [1, 9], [2, 12], [2, 13], [3, 15], [3, 14], [4, 18], [5, 20], [5, 21], [6, 23]], xMin: 0, xMax: 7, yMin: 0, yMax: 28, xGridStep: 1, yGridStep: 2, xLabelStep: 1, yLabelStep: 4, xLabel: "Coats of sealant", yLabel: "Time (hours)", bestFitLine: { slope: 2.75, intercept: 6.5 } } },
    correctAnswer: "17.5",
    explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**The correct answer is $17.5$.**\n\n**The Fast Way (~10s):** $\\hat{y} = 2.75(4) + 6.5 = 11 + 6.5 = 17.5$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 4$ into the line: $2.75 \\times 4 = 11$.\nStep 2: Add the intercept: $11 + 6.5 = 17.5$ hours.\nStep 3: Check against the plot: the data point at $x = 4$ is $(4, 18)$, just above the line's $17.5$. $\\checkmark$\n\n**Common Mistakes:** Adding instead of multiplying, $2.75 + 4 + 6.5 = 13.25$; reading the dot at $x = 4$ ($18$ hours) rather than the line; forgetting the intercept and answering $11$.\n\n**Test Day Takeaway:** Multiply the slope by $x$ first, then add the intercept, and keep decimals exact: $17.5$, not $18$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "scatterplot-line-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-138",
    domain: "problem-solving",
    skills: ["slope-intercept-form", "slope-from-points"],
    difficulty: "hard",
    type: "fill-in",
    question: "The scatterplot shows the age $x$, in years, and the trunk circumference $y$, in centimeters, of each of $12$ pine trees. The line of best fit passes through the points $(3, 21)$ and $(9, 45)$. According to the line of best fit, what is the predicted circumference, in centimeters, of a pine tree that is $15$ years old?",
    diagram: { type: "scatterplot", params: { points: [[2, 18], [3, 20], [4, 27], [5, 28], [6, 34], [7, 36], [8, 43], [9, 44], [10, 50], [11, 52], [12, 58], [14, 64]], xMin: 0, xMax: 16, yMin: 0, yMax: 80, xGridStep: 1, yGridStep: 10, xLabelStep: 2, yLabelStep: 20, xLabel: "Age (years)", yLabel: "Circumference (cm)", bestFitLine: { slope: 4, intercept: 9 } } },
    correctAnswer: "69",
    explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**The correct answer is $69$.**\n\n**The Fast Way (~20s):** The slope is $\\frac{45 - 21}{9 - 3} = 4$ centimeters per year. From $(9, 45)$, six more years add $6(4) = 24$: $45 + 24 = 69$.\n\n**The Full Solution:**\nStep 1: Slope from the two given points: $\\frac{45 - 21}{9 - 3} = \\frac{24}{6} = 4$.\nStep 2: Find the intercept using $(3, 21)$: $21 = 4(3) + b$, so $b = 9$ and $\\hat{y} = 4x + 9$.\nStep 3: Substitute $x = 15$: $\\hat{y} = 4(15) + 9 = 69$. Check: from $(9, 45)$, moving $15 - 9 = 6$ years at $4$ per year gives $45 + 24 = 69$. $\\checkmark$\n\n**Common Mistakes:** Inverting the slope to $\\frac{6}{24} = 0.25$, which leads to $0.25(15) + 20.25 = 24$; using $\\hat{y} = 4x$ with no intercept, which gives $60$; estimating by eye beyond the last plotted point $(14, 64)$ instead of using the line.\n\n**Test Day Takeaway:** Two points on the line give the slope, then the intercept, then the prediction; never eyeball a value that lies past the plotted data.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "scatterplot-line-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-139",
    domain: "problem-solving",
    skills: ["slope-intercept-form"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The scatterplot shows the number of visitors $x$, in hundreds, to a museum and the museum shop's sales $y$, in hundreds of dollars, for $12$ days, with the line of best fit $\\hat{y} = 0.65x + 21$. According to the line of best fit, when the number of visitors increases by $1{,}200$, by how many hundreds of dollars do predicted sales increase?",
    diagram: { type: "scatterplot", params: { points: [[10, 26], [14, 32], [18, 30], [22, 37], [24, 39], [26, 36], [30, 42], [34, 41], [38, 47], [42, 46], [46, 52], [50, 54]], xMin: 0, xMax: 60, yMin: 0, yMax: 60, xGridStep: 5, yGridStep: 5, xLabelStep: 10, yLabelStep: 10, xLabel: "Visitors (hundreds)", yLabel: "Sales (hundreds of dollars)", bestFitLine: { slope: 0.65, intercept: 21 } } },
    choices: [
      // distractor: the slope alone, which is the increase per 100 visitors, not per 1,200
      { id: "A", text: "$0.65$" },
      { id: "B", text: "$7.8$" },
      // distractor: the intercept, which cancels in any difference of predictions
      { id: "C", text: "$21$" },
      // distractor: uses a change in x of 1,200 instead of 12, ignoring that x is in hundreds
      { id: "D", text: "$780$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $x$ is in hundreds, so $1{,}200$ visitors is a change of $12$ in $x$. The change in $\\hat{y}$ is slope $\\times$ change in $x$: $0.65(12) = 7.8$ hundred dollars.\n\n**The Full Solution:**\nStep 1: Convert the change to the model's units: $1{,}200$ visitors $= 12$ hundreds, so $\\Delta x = 12$.\nStep 2: For a linear model, $\\Delta \\hat{y} = m \\cdot \\Delta x = 0.65 \\times 12 = 7.8$; the intercept $21$ cancels when two predictions are subtracted.\nStep 3: Check with two actual predictions: $x = 40$ gives $0.65(40) + 21 = 47$, and $x = 52$ gives $0.65(52) + 21 = 54.8$; the difference is $7.8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.65$): The slope by itself is the increase per $1$ unit of $x$, that is, per $100$ visitors, not per $1{,}200$.\n* Choice C ($21$): The intercept plays no role in a change; it cancels when predictions are subtracted.\n* Choice D ($780$): Uses $\\Delta x = 1{,}200$ instead of $12$, ignoring that $x$ is measured in hundreds.\n\n**Test Day Takeaway:** Read the units on both axes; a change in the prediction is slope $\\times \\Delta x$, and $\\Delta x$ must be expressed in the model's units.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "scatterplot-line-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },

  // === TWO-WAY TABLE CONDITIONAL PROBABILITY (8 questions) — Phase 2 batch 5 ===
  // 7x in 12 tests. Sibling of conditional-probability-from-two-way-table (the
  // word order in the title differs, kebab differs accordingly). Covers same
  // skill: read row/column totals, compute P(A | B) = cell / B-total.
  // SAT Pattern kebab matches test bundle: 'two-way-table-conditional-probability'.
  {
    id: "bank-ps-140",
    domain: "problem-solving",
    skills: ["conditional-probability", "two-way-table"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The table summarizes the $180$ bicycles in a shop's inventory by frame material and frame size. If one of the large bicycles is selected at random, what is the probability that it has an aluminum frame?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Aluminum", "Steel", "Total"], rows: [["Small", "48", "32", "80"], ["Large", "75", "25", "100"], ["Total", "123", "57", "180"]] } },
    choices: [
      // distractor: 25/100, the probability of steel given large (the complement)
      { id: "A", text: "$\\frac{1}{4}$" },
      // distractor: 75/180, divides by all bicycles instead of the large ones
      { id: "B", text: "$\\frac{5}{12}$" },
      // distractor: 75/123, conditions on aluminum instead of large (P(large | aluminum))
      { id: "C", text: "$\\frac{25}{41}$" },
      { id: "D", text: "$\\frac{3}{4}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Restrict to the Large row: $75$ of its $100$ bicycles are aluminum, so the probability is $\\frac{75}{100} = \\frac{3}{4}$.\n\n**The Full Solution:**\nStep 1: \"One of the large bicycles is selected\" means the sample space is the Large row, whose total is $100$.\nStep 2: Within that row, the aluminum count is $75$.\nStep 3: Probability $= \\frac{75}{100} = \\frac{3}{4}$. Check: $\\frac{3}{4}$ of $100$ is $75$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{4}$): This is $\\frac{25}{100}$, the probability that a large bicycle has a steel frame, the complement of what was asked.\n* Choice B ($\\frac{5}{12}$): This is $\\frac{75}{180}$, dividing by the grand total instead of the $100$ large bicycles.\n* Choice C ($\\frac{25}{41}$): This is $\\frac{75}{123}$, conditioning on aluminum instead of large; it answers \"given aluminum, what is the probability of large?\"\n\n**Test Day Takeaway:** The \"given\" group is the denominator; find that row or column total first, then take the matching cell as the numerator.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "two-way-table-conditional-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-141",
    domain: "problem-solving",
    skills: ["conditional-probability", "two-way-table"],
    difficulty: "easy",
    type: "fill-in",
    question: "The table shows the germination results for $240$ seeds of two varieties. If one of the seeds that did not germinate is selected at random, what is the probability that it is an heirloom seed?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Germinated", "Did not germinate", "Total"], rows: [["Heirloom", "84", "36", "120"], ["Hybrid", "96", "24", "120"], ["Total", "180", "60", "240"]] } },
    correctAnswer: "3/5",
    explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**The correct answer is $\\frac{3}{5}$.**\n\n**The Fast Way (~10s):** Of the $60$ seeds that did not germinate, $36$ are heirloom: $\\frac{36}{60} = \\frac{3}{5}$.\n\n**The Full Solution:**\nStep 1: The condition \"did not germinate\" restricts the sample space to that column, whose total is $60$.\nStep 2: The heirloom entry in that column is $36$.\nStep 3: Probability $= \\frac{36}{60} = \\frac{3}{5}$, which can also be entered as $0.6$. Check: $\\frac{3}{5}$ of $60$ is $36$. $\\checkmark$\n\n**Common Mistakes:** Dividing by the heirloom total, $\\frac{36}{120} = \\frac{3}{10}$, which is the probability that an heirloom seed failed to germinate (the condition reversed); dividing by all $240$ seeds to get $\\frac{3}{20}$; taking the hybrid entry, $\\frac{24}{60} = \\frac{2}{5}$, the complement.\n\n**Test Day Takeaway:** Find the row or column named after the \"given\" condition; its total is the denominator, and the cell inside it is the numerator.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "two-way-table-conditional-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-142",
    domain: "problem-solving",
    skills: ["conditional-probability", "two-way-table"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table shows the distribution of $320$ library loans by format and by the age group of the borrower. If a loan that is not a print loan is selected at random, what is the probability that the borrower is in the $18$ to $64$ age group?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Print", "Audio", "E-book", "Total"], rows: [["Under 18", "40", "14", "26", "80"], ["18 to 64", "50", "36", "84", "170"], ["65 and over", "30", "12", "28", "70"], ["Total", "120", "62", "138", "320"]] } },
    choices: [
      // distractor: 120/320, divides by the grand total instead of the 200 non-print loans
      { id: "A", text: "$\\frac{3}{8}$" },
      // distractor: 84/200, counts only e-book loans and forgets the audio loans
      { id: "B", text: "$\\frac{21}{50}$" },
      { id: "C", text: "$\\frac{3}{5}$" },
      // distractor: 120/170, conditions on the age group instead (P(not print | 18 to 64))
      { id: "D", text: "$\\frac{12}{17}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Non-print loans are audio plus e-book: $62 + 138 = 200$. Of these, the $18$ to $64$ row has $36 + 84 = 120$, so the probability is $\\frac{120}{200} = \\frac{3}{5}$.\n\n**The Full Solution:**\nStep 1: The condition \"not a print loan\" combines the Audio and E-book columns. Their totals are $62$ and $138$, so the denominator is $200$ (equivalently, $320 - 120 = 200$).\nStep 2: In the $18$ to $64$ row, the non-print entries are $36$ (audio) and $84$ (e-book): $36 + 84 = 120$.\nStep 3: Probability $= \\frac{120}{200} = \\frac{3}{5}$. Check: $\\frac{3}{5}$ of $200$ is $120$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{8}$): This is $\\frac{120}{320}$, dividing by every loan instead of only the non-print loans.\n* Choice B ($\\frac{21}{50}$): This is $\\frac{84}{200}$, counting only the e-book loans and forgetting that audio loans are also non-print.\n* Choice D ($\\frac{12}{17}$): This is $\\frac{120}{170}$, conditioning on the age group; it answers \"given $18$ to $64$, what is the probability the loan is not print?\"\n\n**Test Day Takeaway:** A \"not X\" condition means adding the other columns (or subtracting X from the total) before you form the fraction.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "two-way-table-conditional-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-143",
    domain: "problem-solving",
    skills: ["conditional-probability", "two-way-table"],
    difficulty: "medium",
    type: "fill-in",
    question: "The table shows the $200$ volunteers at a food bank by shift and by team. If a volunteer who is not on the delivery team is selected at random, what is the probability that the volunteer works the morning shift?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Morning", "Evening", "Total"], rows: [["Sorting", "44", "36", "80"], ["Delivery", "20", "40", "60"], ["Intake", "26", "34", "60"], ["Total", "90", "110", "200"]] } },
    correctAnswer: "1/2",
    explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**The correct answer is $\\frac{1}{2}$.**\n\n**The Fast Way (~15s):** Not delivery means sorting or intake: $80 + 60 = 140$ volunteers. Their morning entries are $44 + 26 = 70$, so the probability is $\\frac{70}{140} = \\frac{1}{2}$.\n\n**The Full Solution:**\nStep 1: The condition excludes the Delivery row, leaving the Sorting and Intake rows with a combined total of $80 + 60 = 140$ (or $200 - 60 = 140$).\nStep 2: The morning entries in those two rows are $44$ and $26$, a total of $70$.\nStep 3: Probability $= \\frac{70}{140} = \\frac{1}{2}$, which can also be entered as $0.5$. Check: half of $140$ is $70$. $\\checkmark$\n\n**Common Mistakes:** Ignoring the condition and using the Morning column total, $\\frac{90}{200} = \\frac{9}{20}$; dividing $70$ by all $200$ volunteers to get $\\frac{7}{20}$; using the excluded Delivery row, $\\frac{20}{60} = \\frac{1}{3}$.\n\n**Test Day Takeaway:** Cross out the excluded row, then read both the denominator and the numerator from what remains.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "two-way-table-conditional-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-144",
    domain: "problem-solving",
    skills: ["conditional-probability", "two-way-table"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table shows the $360$ passengers on a ferry crossing by ticket type and by whether the passenger brought a vehicle aboard. If a passenger who brought a vehicle is selected at random, what is the probability that the passenger holds a premium ticket?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Vehicle", "No vehicle", "Total"], rows: [["Standard", "96", "144", "240"], ["Premium", "54", "66", "120"], ["Total", "150", "210", "360"]] } },
    choices: [
      // distractor: 54/360, divides by all passengers
      { id: "A", text: "$\\frac{3}{20}$" },
      { id: "B", text: "$\\frac{9}{25}$" },
      // distractor: 54/120, conditions on premium instead of vehicle (P(vehicle | premium))
      { id: "C", text: "$\\frac{9}{20}$" },
      // distractor: 96/150, the standard-ticket share of vehicle passengers, the complement
      { id: "D", text: "$\\frac{16}{25}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The Vehicle column has $150$ passengers, $54$ of whom hold premium tickets: $\\frac{54}{150} = \\frac{9}{25}$.\n\n**The Full Solution:**\nStep 1: \"A passenger who brought a vehicle\" restricts the sample space to the Vehicle column, total $150$.\nStep 2: The premium entry in that column is $54$.\nStep 3: Probability $= \\frac{54}{150}$; divide numerator and denominator by $6$ to get $\\frac{9}{25}$. Check: $\\frac{9}{25} = 0.36$, and $0.36 \\times 150 = 54$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{20}$): This is $\\frac{54}{360}$, dividing by all passengers rather than the $150$ with vehicles.\n* Choice C ($\\frac{9}{20}$): This is $\\frac{54}{120}$, conditioning on premium ticket holders; it answers the reversed question, \"given premium, what is the probability of a vehicle?\"\n* Choice D ($\\frac{16}{25}$): This is $\\frac{96}{150}$, the standard-ticket share of the vehicle passengers, the complement of the answer.\n\n**Test Day Takeaway:** \"Given\" names the column (or row) that becomes the whole; the two easiest traps are the reversed condition and the grand total.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "two-way-table-conditional-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-145",
    domain: "problem-solving",
    skills: ["conditional-probability", "two-way-table"],
    difficulty: "medium",
    type: "fill-in",
    question: "Of $150$ applicants to a training program, $90$ applied online and the rest applied by mail. Of those, $63$ online applicants and $27$ mail applicants were accepted. If an accepted applicant is selected at random, what is the probability that the applicant applied by mail?",
    correctAnswer: "3/10",
    explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**The correct answer is $\\frac{3}{10}$.**\n\n**The Fast Way (~15s):** Accepted applicants total $63 + 27 = 90$, and $27$ of them applied by mail: $\\frac{27}{90} = \\frac{3}{10}$.\n\n**The Full Solution:**\nStep 1: Organize the counts as a two-way table: online $90$ ($63$ accepted, $27$ not), mail $150 - 90 = 60$ ($27$ accepted, $33$ not).\nStep 2: The condition \"accepted\" makes the denominator the accepted total, $63 + 27 = 90$.\nStep 3: The mail entry among the accepted is $27$, so the probability is $\\frac{27}{90} = \\frac{3}{10}$, or $0.3$. Check: $0.3 \\times 90 = 27$. $\\checkmark$\n\n**Common Mistakes:** Dividing by the mail total, $\\frac{27}{60} = \\frac{9}{20}$, which is the probability that a mail applicant was accepted (condition reversed); dividing by all $150$ applicants to get $\\frac{9}{50}$; ignoring the condition and answering $\\frac{60}{150} = \\frac{2}{5}$.\n\n**Test Day Takeaway:** When the data come as prose, sketch the two-way table first; the \"given\" group's total is the denominator.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "two-way-table-conditional-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-146",
    domain: "problem-solving",
    skills: ["conditional-probability", "two-way-table"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The table shows the nitrate level of each of $500$ water samples collected at three sites along a river. If a sample whose nitrate level is not low is selected at random, what is the probability that the sample was collected downstream?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Low", "Moderate", "High", "Total"], rows: [["Upstream", "110", "50", "20", "180"], ["Midstream", "70", "60", "40", "170"], ["Downstream", "30", "50", "70", "150"], ["Total", "210", "160", "130", "500"]] } },
    choices: [
      // distractor: 120/500, divides by all samples
      { id: "A", text: "$\\frac{6}{25}$" },
      { id: "B", text: "$\\frac{12}{29}$" },
      // distractor: 70/130, uses only the High column and drops the Moderate samples
      { id: "C", text: "$\\frac{7}{13}$" },
      // distractor: 120/150, conditions on downstream instead (P(not low | downstream))
      { id: "D", text: "$\\frac{4}{5}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Not low means moderate or high: $160 + 130 = 290$ samples. Downstream contributes $50 + 70 = 120$ of them, so the probability is $\\frac{120}{290} = \\frac{12}{29}$.\n\n**The Full Solution:**\nStep 1: The condition \"not low\" combines the Moderate and High columns: $160 + 130 = 290$, or $500 - 210 = 290$. That is the denominator.\nStep 2: In the Downstream row, the moderate and high entries are $50$ and $70$: $50 + 70 = 120$.\nStep 3: Probability $= \\frac{120}{290} = \\frac{12}{29}$. Check: $12 \\times 10 = 120$ and $29 \\times 10 = 290$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{6}{25}$): This is $\\frac{120}{500}$, dividing by every sample instead of only the $290$ that are not low.\n* Choice C ($\\frac{7}{13}$): This is $\\frac{70}{130}$, using only the High column; \"not low\" also includes the moderate samples.\n* Choice D ($\\frac{4}{5}$): This is $\\frac{120}{150}$, conditioning on downstream; it answers \"given downstream, what is the probability the level is not low?\"\n\n**Test Day Takeaway:** For a \"not\" condition, build the denominator from every column that qualifies, then pull the same columns from the row the question asks about.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "two-way-table-conditional-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-147",
    domain: "problem-solving",
    skills: ["conditional-probability", "two-way-table"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A quality inspector tests $400$ circuit boards. Of these, $120$ boards have a defect, and $90\\%$ of the boards with a defect fail the test. Of the $280$ boards without a defect, $42$ fail the test. If a board that failed the test is selected at random, what is the probability that it does not have a defect?",
    choices: [
      // distractor: 42/400, divides by all boards
      { id: "A", text: "$\\frac{21}{200}$" },
      // distractor: 42/280, the probability that a non-defective board fails (condition reversed)
      { id: "B", text: "$\\frac{3}{20}$" },
      { id: "C", text: "$\\frac{7}{25}$" },
      // distractor: 108/150, the probability that a failed board IS defective, the complement
      { id: "D", text: "$\\frac{18}{25}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Failed boards: $0.9(120) + 42 = 108 + 42 = 150$. Of those, $42$ have no defect: $\\frac{42}{150} = \\frac{7}{25}$.\n\n**The Full Solution:**\nStep 1: Fill in the table. Defective boards that fail: $90\\%$ of $120$ is $0.9 \\times 120 = 108$. Non-defective boards that fail: $42$ (given).\nStep 2: The condition \"failed the test\" makes the denominator the total number of failures: $108 + 42 = 150$.\nStep 3: The numerator is the failed boards without a defect, $42$: $\\frac{42}{150} = \\frac{7}{25}$. Check: $\\frac{7}{25} = 0.28$, and $0.28 \\times 150 = 42$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{21}{200}$): This is $\\frac{42}{400}$, dividing by all boards instead of only those that failed.\n* Choice B ($\\frac{3}{20}$): This is $\\frac{42}{280}$, the probability that a non-defective board fails; the condition runs the wrong way.\n* Choice D ($\\frac{18}{25}$): This is $\\frac{108}{150}$, the probability that a failed board is defective, the complement of what was asked.\n\n**Test Day Takeaway:** Convert every percent into a count, total the \"given\" group, and keep the direction of the condition straight: given failed, not given defective.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "two-way-table-conditional-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 7/1: reverse-percent-multi-step (8 items) =====
  // Pattern: multi-step percent problems — "a is p% of (b + c)" with chained
  // relationships, percent-of-percent, successive discount/markup. 8 test
  // occurrences across PT1, PT4, PT10 and friends. SAT Pattern title (verbatim):
  // 'Reverse-Percent Multi-Step' → kebab 'reverse-percent-multi-step'.
  {
    id: "bank-ps-148",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In a greenhouse, the number of tomato plants is $35\\%$ of the combined number of pepper plants and cucumber plants. There are $140$ pepper plants and $80$ cucumber plants. How many tomato plants are in the greenhouse?",
    choices: [
      // distractor: 35% of the 80 cucumber plants only
      { id: "A", text: "$28$" },
      // distractor: 35% of the 140 pepper plants only
      { id: "B", text: "$49$" },
      { id: "C", text: "$77$" },
      // distractor: adds 35% to 220 (a 35% increase, 220 + 77) instead of taking 35% of it
      { id: "D", text: "$297$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Combine first: $140 + 80 = 220$. Then $35\\%$ of $220$ is $0.35 \\times 220 = 77$.\n\n**The Full Solution:**\nStep 1: The percent is taken of the *combined* number, so add: $140 + 80 = 220$.\nStep 2: Convert $35\\%$ to a decimal: $0.35$.\nStep 3: Multiply: $0.35 \\times 220 = 77$ tomato plants. Check: $10\\%$ of $220$ is $22$, so $35\\%$ is $3.5 \\times 22 = 77$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($28$): $35\\%$ of the $80$ cucumber plants alone.\n* Choice B ($49$): $35\\%$ of the $140$ pepper plants alone.\n* Choice D ($297$): $220 + 77$, increasing the combined count by $35\\%$ instead of taking $35\\%$ of it.\n\n**Test Day Takeaway:** \"$p\\%$ of the combined number\" means add the pieces first, then multiply by $\\frac{p}{100}$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reverse-percent-multi-step",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-149",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "easy",
    type: "fill-in",
    question: "The mass of salt dissolved in solution X is $45\\%$ of the combined mass of salt dissolved in solutions Y and Z. Solution Y contains $130$ grams of salt and solution Z contains $70$ grams of salt. How many grams of salt are dissolved in solution X?",
    correctAnswer: "90",
    explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**The correct answer is $90$.**\n\n**The Fast Way (~10s):** $130 + 70 = 200$ grams combined; $45\\%$ of $200$ is $0.45 \\times 200 = 90$ grams.\n\n**The Full Solution:**\nStep 1: The percent applies to the combined mass, so add: $130 + 70 = 200$.\nStep 2: Write $45\\%$ as $0.45$.\nStep 3: Multiply: $0.45 \\times 200 = 90$ grams. Check: half of $200$ is $100$, and $45\\%$ is slightly less than half, so $90$ is reasonable. $\\checkmark$\n\n**Common Mistakes:** Taking $45\\%$ of only $130$ ($58.5$) or only $70$ ($31.5$); subtracting to get $200 - 90 = 110$; adding to get $200 + 90 = 290$ as if X were $45\\%$ more than Y and Z together.\n\n**Test Day Takeaway:** Identify exactly what the percent is \"of\"; here it is the sum, so combine before multiplying.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reverse-percent-multi-step",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-150",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In a survey, $36$ respondents chose option A, $64$ chose option B, and $16$ chose option C. The number of respondents who chose option A is $p\\%$ of the number who chose option B or option C. What is the value of $p$?",
    choices: [
      // distractor: the decimal 36/80 = 0.45, never converted to a percent
      { id: "A", text: "$0.45$" },
      { id: "B", text: "$45$" },
      // distractor: 36/64 as a percent, ignoring the option C respondents
      { id: "C", text: "$56.25$" },
      // distractor: 36/16 as a percent, ignoring the option B respondents
      { id: "D", text: "$225$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** B or C is $64 + 16 = 80$ respondents. $\\frac{36}{80} = 0.45$, so $p = 45$.\n\n**The Full Solution:**\nStep 1: The base of the percent is \"B or C\": $64 + 16 = 80$.\nStep 2: Translate: $36 = \\frac{p}{100} \\times 80$, so $\\frac{p}{100} = \\frac{36}{80} = 0.45$.\nStep 3: Multiply by $100$: $p = 45$. Check: $45\\%$ of $80$ is $0.45 \\times 80 = 36$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.45$): The decimal form of the ratio; the question asks for $p$ in \"$p\\%$\", which requires multiplying by $100$.\n* Choice C ($56.25$): $\\frac{36}{64} \\times 100$, using only option B as the base and forgetting option C.\n* Choice D ($225$): $\\frac{36}{16} \\times 100$, using only option C as the base.\n\n**Test Day Takeaway:** Build the base first (\"B or C\" means add), then $p = \\frac{\\text{part}}{\\text{base}} \\times 100$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reverse-percent-multi-step",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-151",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "medium",
    type: "fill-in",
    question: "A school's drama club has $63$ members, which is $30\\%$ of the combined membership of the school's band and choir. The band has $140$ members. How many members does the choir have?",
    correctAnswer: "70",
    explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**The correct answer is $70$.**\n\n**The Fast Way (~15s):** The combined membership is $\\frac{63}{0.30} = 210$, so the choir has $210 - 140 = 70$ members.\n\n**The Full Solution:**\nStep 1: Let $c$ be the choir's membership. Then $0.30(140 + c) = 63$.\nStep 2: Divide by $0.30$: $140 + c = 210$.\nStep 3: Subtract $140$: $c = 70$. Check: $0.30(140 + 70) = 0.30(210) = 63$. $\\checkmark$\n\n**Common Mistakes:** Reporting the combined total $210$ without subtracting the band; taking $30\\%$ of $140$ to get $42$; subtracting the club instead of the band, $210 - 63 = 147$.\n\n**Test Day Takeaway:** Undo the percent first (divide by $\\frac{p}{100}$) to recover the whole, then remove the known piece.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent-multi-step",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-152",
    domain: "problem-solving",
    skills: ["successive-percent-change", "percent-word-problems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The regular price of a monitor is $\\$240$. The monitor is marked down by $15\\%$, and then a $7\\%$ sales tax is applied to the marked-down price. What is the final cost of the monitor, in dollars?",
    choices: [
      // distractor: stops after the markdown (240 x 0.85) and never applies the tax
      { id: "A", text: "$204$" },
      { id: "B", text: "$218.28$" },
      // distractor: nets the percents to -8% and computes 240 x 0.92
      { id: "C", text: "$220.80$" },
      // distractor: applies the 7% tax to the regular price (240 x 1.07) and skips the markdown
      { id: "D", text: "$256.80$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Chain the multipliers: $240 \\times 0.85 \\times 1.07 = 218.28$.\n\n**The Full Solution:**\nStep 1: A $15\\%$ markdown leaves $85\\%$ of the price: $240 \\times 0.85 = 204$ dollars.\nStep 2: A $7\\%$ tax on the marked-down price adds $204 \\times 0.07 = 14.28$ dollars, giving $204 + 14.28 = 218.28$, or equivalently $204 \\times 1.07$.\nStep 3: Check: the combined multiplier is $0.85 \\times 1.07 = 0.9095$, and $240 \\times 0.9095 = 218.28$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($204$): The marked-down price before tax; the tax step was skipped.\n* Choice C ($220.80$): Subtracts the percents, $-15\\% + 7\\% = -8\\%$, and computes $240 \\times 0.92$; successive percents multiply, they do not add.\n* Choice D ($256.80$): Applies the tax to the regular price, $240 \\times 1.07$, and never applies the markdown.\n\n**Test Day Takeaway:** Each percent change is its own multiplier ($1 - 0.15$, then $1 + 0.07$); multiply them in order, never add the percents.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent-multi-step",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-153",
    domain: "problem-solving",
    skills: ["successive-percent-change", "percent-word-problems"],
    difficulty: "medium",
    type: "fill-in",
    question: "The number of bats in a colony increased by $25\\%$ from year $1$ to year $2$ and then decreased by $12\\%$ from year $2$ to year $3$. If the colony had $176$ bats in year $3$, how many bats did it have in year $1$?",
    correctAnswer: "160",
    explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**The correct answer is $160$.**\n\n**The Fast Way (~15s):** The two changes multiply to $1.25 \\times 0.88 = 1.1$, so year $3$ is $1.1$ times year $1$: $\\frac{176}{1.1} = 160$.\n\n**The Full Solution:**\nStep 1: Let $n$ be the year-$1$ count. A $25\\%$ increase gives $1.25n$ in year $2$.\nStep 2: A $12\\%$ decrease multiplies by $0.88$: year $3$ is $0.88(1.25n) = 1.1n$.\nStep 3: Set $1.1n = 176$, so $n = 160$. Check: $160 \\times 1.25 = 200$, and $200 \\times 0.88 = 176$. $\\checkmark$\n\n**Common Mistakes:** Netting the percents to $+13\\%$ and computing $\\frac{176}{1.13} \\approx 155.75$; reversing the changes by multiplying $176$ by $0.75$ and $1.12$ to get $147.84$; dividing by $1.25$ only, which gives $140.8$.\n\n**Test Day Takeaway:** To reverse successive percent changes, divide the final amount by the product of the multipliers; never subtract the percents or apply them backward.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent-multi-step",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-154",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Positive numbers $x$, $y$, and $z$ satisfy $x = 1.5(y + z)$, and $z$ is $25\\%$ of $y$. What percent of $y$ is $x$?",
    choices: [
      // distractor: drops z entirely and uses x = 1.5y
      { id: "A", text: "$150\\%$" },
      { id: "B", text: "$187.5\\%$" },
      // distractor: misreads 'z is 25% of y' as z = 1.25y, giving x = 1.5(2.25y)
      { id: "C", text: "$337.5\\%$" },
      // distractor: expresses x as a percent of z instead of y (1.875 / 0.25)
      { id: "D", text: "$750\\%$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $z = 0.25y$, so $y + z = 1.25y$ and $x = 1.5(1.25y) = 1.875y$, which is $187.5\\%$ of $y$.\n\n**The Full Solution:**\nStep 1: Translate the percent: $z = 0.25y$.\nStep 2: Substitute into the first equation: $x = 1.5(y + 0.25y) = 1.5(1.25y) = 1.875y$.\nStep 3: As a percent, $1.875 = 187.5\\%$. Check with $y = 100$: $z = 25$, $x = 1.5(125) = 187.5$, and $187.5$ is $187.5\\%$ of $100$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($150\\%$): Drops $z$ and uses $x = 1.5y$; the $25\\%$ contribution of $z$ is lost.\n* Choice C ($337.5\\%$): Misreads \"$z$ is $25\\%$ of $y$\" as \"$z$ is $25\\%$ more than $y$,\" using $z = 1.25y$ and $x = 1.5(2.25y)$.\n* Choice D ($750\\%$): Expresses $x$ as a percent of $z$ rather than of $y$: $\\frac{1.875y}{0.25y} = 7.5$.\n\n**Test Day Takeaway:** Write every relationship as a multiple of one variable, then read \"what percent of $y$\" as the coefficient of $y$ times $100$; plugging in $y = 100$ is a fast check.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent-multi-step",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-155",
    domain: "problem-solving",
    skills: ["successive-percent-change", "percent-word-problems"],
    difficulty: "hard",
    type: "fill-in",
    question: "The number of subscribers to a newsletter decreased by $20\\%$ during its first year and then increased by $q\\%$ during its second year. At the end of the second year, the number of subscribers was $4\\%$ greater than at the start of the first year. What is the value of $q$?",
    correctAnswer: "30",
    explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~15s):** The multipliers must satisfy $0.8 \\times \\left(1 + \\frac{q}{100}\\right) = 1.04$, so $1 + \\frac{q}{100} = 1.3$ and $q = 30$.\n\n**The Full Solution:**\nStep 1: Let the starting count be $n$. After a $20\\%$ decrease there are $0.8n$ subscribers.\nStep 2: After a $q\\%$ increase there are $0.8n\\left(1 + \\frac{q}{100}\\right)$, and this equals $1.04n$. Divide by $0.8n$: $1 + \\frac{q}{100} = 1.3$.\nStep 3: So $\\frac{q}{100} = 0.3$ and $q = 30$. Check with $n = 100$: $100 \\to 80 \\to 80 \\times 1.3 = 104$, which is $4\\%$ more than $100$. $\\checkmark$\n\n**Common Mistakes:** Adding the percents, $20 + 4 = 24$, which ignores that the increase acts on the smaller base of $80$; solving $0.8q = 1.04$ and reporting $1.3$ (or $130$); subtracting $0.8$ from $1.04$ to get $0.24$ and answering $24$.\n\n**Test Day Takeaway:** A percent increase after a decrease acts on the reduced amount; set the product of the multipliers equal to the overall multiplier and solve.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent-multi-step",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 9/5: proportion-ratio (8 items) =====
  // Pattern title: 'Proportion / Ratio'. SLUG: 'proportion-ratio' (the slash
  // becomes a dash via kebab-case in extractSatPattern).
  // 5 test occurrences across M2Easy variants.
  {
    id: "bank-ps-156",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A paint mixture uses blue paint and white paint in the ratio $2 : 7$ by volume. If a batch of the mixture contains $28$ liters of white paint, how many liters of blue paint does it contain?",
    choices: [
      // distractor: 28/7 = 4 is the size of one part; blue is two parts
      { id: "A", text: "$4$" },
      { id: "B", text: "$8$" },
      // distractor: halves the white amount (28/2), pairing the wrong ratio number with 28
      { id: "C", text: "$14$" },
      // distractor: inverts the ratio, 28 x 7/2
      { id: "D", text: "$98$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** White is $7$ parts and equals $28$ liters, so one part is $4$ liters; blue is $2$ parts, $2(4) = 8$ liters.\n\n**The Full Solution:**\nStep 1: Set up the proportion $\\frac{\\text{blue}}{\\text{white}} = \\frac{2}{7} = \\frac{b}{28}$.\nStep 2: Cross-multiply: $7b = 56$, so $b = 8$.\nStep 3: Check: $\\frac{8}{28} = \\frac{2}{7}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): The size of one part, $28 \\div 7$; blue is two parts, so this needs to be doubled.\n* Choice C ($14$): Divides $28$ by $2$, pairing the blue ratio number with the white amount.\n* Choice D ($98$): Inverts the ratio, computing $28 \\times \\frac{7}{2}$; blue is the smaller quantity, so the answer must be less than $28$.\n\n**Test Day Takeaway:** Match each ratio number to its own quantity, find the value of one part, and sanity-check which quantity should be larger.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "proportion-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-157",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "easy",
    type: "fill-in",
    question: "For what value of $w$ is the proportion $\\dfrac{14}{w} = \\dfrac{35}{45}$ true?",
    correctAnswer: "18",
    explanation: "**SAT Pattern: Proportion / Ratio**\n\n**The correct answer is $18$.**\n\n**The Fast Way (~10s):** Simplify the right side to $\\frac{7}{9}$; since $14 = 2(7)$, $w = 2(9) = 18$.\n\n**The Full Solution:**\nStep 1: Cross-multiply: $14 \\times 45 = 35w$, so $630 = 35w$.\nStep 2: Divide both sides by $35$: $w = \\frac{630}{35} = 18$.\nStep 3: Check: $\\frac{14}{18} = \\frac{7}{9}$ and $\\frac{35}{45} = \\frac{7}{9}$. $\\checkmark$\n\n**Common Mistakes:** Cross-multiplying the wrong pair, $14 \\times 35 = 45w$, which gives $w \\approx 10.89$; simplifying $\\frac{35}{45}$ to $\\frac{7}{9}$ and answering $9$ without scaling up to match $14$; reasoning additively ($45 - 35 = 10$, so $w = 14 + 10 = 24$).\n\n**Test Day Takeaway:** In a proportion, the products of the diagonals are equal; or reduce one side and scale it to match the known numerator.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "proportion-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-158",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A printer prints $45$ pages in $3.6$ minutes at a constant rate. At this rate, how many pages does the printer print in $8$ minutes?",
    choices: [
      // distractor: the unit rate in pages per minute (45/3.6), not the total for 8 minutes
      { id: "A", text: "$12.5$" },
      // distractor: inverts the proportion, 45 x 3.6/8
      { id: "B", text: "$20.25$" },
      { id: "C", text: "$100$" },
      // distractor: multiplies 45 by 3.6, never dividing by the time
      { id: "D", text: "$162$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Unit rate: $\\frac{45}{3.6} = 12.5$ pages per minute. In $8$ minutes: $12.5 \\times 8 = 100$ pages.\n\n**The Full Solution:**\nStep 1: Write the proportion $\\frac{45 \\text{ pages}}{3.6 \\text{ min}} = \\frac{p \\text{ pages}}{8 \\text{ min}}$.\nStep 2: Cross-multiply: $3.6p = 360$, so $p = 100$.\nStep 3: Check: $8$ minutes is $\\frac{8}{3.6} = \\frac{20}{9}$ times as long, and $45 \\times \\frac{20}{9} = 100$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12.5$): The rate in pages per minute; the question asks for the total over $8$ minutes.\n* Choice B ($20.25$): Inverts the proportion, $45 \\times \\frac{3.6}{8}$; more time must mean more pages, not fewer.\n* Choice D ($162$): Multiplies $45$ by $3.6$, mixing pages and minutes without forming a rate.\n\n**Test Day Takeaway:** Find the unit rate (quantity per one unit of time), then multiply by the new time; check that the direction of change makes sense.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "proportion-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-159",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "medium",
    type: "fill-in",
    question: "A pump moves $84$ liters of water in $6$ minutes at a constant rate. At this rate, how many liters of water does the pump move in $11$ minutes?",
    correctAnswer: "154",
    explanation: "**SAT Pattern: Proportion / Ratio**\n\n**The correct answer is $154$.**\n\n**The Fast Way (~10s):** $\\frac{84}{6} = 14$ liters per minute, so $11$ minutes moves $14 \\times 11 = 154$ liters.\n\n**The Full Solution:**\nStep 1: Compute the unit rate: $84 \\div 6 = 14$ liters per minute.\nStep 2: Multiply by the new time: $14 \\times 11 = 154$ liters.\nStep 3: Check by proportion: $\\frac{84}{6} = \\frac{154}{11}$ because $84 \\times 11 = 924$ and $6 \\times 154 = 924$. $\\checkmark$\n\n**Common Mistakes:** Adding the extra $5$ minutes to the liters, $84 + 5 = 89$; inverting the proportion, $84 \\times \\frac{6}{11} \\approx 45.8$; multiplying $84 \\times 11 = 924$ and forgetting to divide by $6$.\n\n**Test Day Takeaway:** Constant rate means liters and minutes scale together; get the per-minute rate first and the rest is one multiplication.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "proportion-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-160",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "On a blueprint, a length of $2$ centimeters represents an actual length of $5$ meters. A wall is $11$ centimeters long on the blueprint. What is the actual length of the wall, in meters?",
    choices: [
      // distractor: inverts the scale, 11 x 2/5
      { id: "A", text: "$4.4$" },
      // distractor: multiplies 11 by 2, the blueprint side of the scale
      { id: "B", text: "$22$" },
      { id: "C", text: "$27.5$" },
      // distractor: multiplies 11 by 5 without dividing by 2
      { id: "D", text: "$55$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Each centimeter represents $\\frac{5}{2} = 2.5$ meters, so $11$ centimeters represents $11 \\times 2.5 = 27.5$ meters.\n\n**The Full Solution:**\nStep 1: Set up the proportion $\\frac{2 \\text{ cm}}{5 \\text{ m}} = \\frac{11 \\text{ cm}}{L \\text{ m}}$.\nStep 2: Cross-multiply: $2L = 55$, so $L = 27.5$.\nStep 3: Check: $27.5 \\div 11 = 2.5$ meters per centimeter, matching $5 \\div 2 = 2.5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4.4$): Inverts the scale, computing $11 \\times \\frac{2}{5}$; a blueprint shrinks reality, so the actual length must be the larger number.\n* Choice B ($22$): Multiplies $11$ by $2$, the blueprint side of the scale, instead of converting to meters.\n* Choice D ($55$): Multiplies by $5$ but never divides by $2$; the scale is $5$ meters per $2$ centimeters, not per $1$.\n\n**Test Day Takeaway:** Convert a scale to \"actual units per one drawing unit\" before multiplying, and confirm the direction (drawing to actual should enlarge).",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "proportion-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-161",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "medium",
    type: "fill-in",
    question: "In a wetland sanctuary, the ratio of the number of herons to the number of egrets is $5 : 9$. If there are $63$ egrets in the sanctuary, how many herons are there?",
    correctAnswer: "35",
    explanation: "**SAT Pattern: Proportion / Ratio**\n\n**The correct answer is $35$.**\n\n**The Fast Way (~10s):** Egrets are $9$ parts and equal $63$, so one part is $7$; herons are $5$ parts, $5(7) = 35$.\n\n**The Full Solution:**\nStep 1: Write the proportion $\\frac{\\text{herons}}{\\text{egrets}} = \\frac{5}{9} = \\frac{h}{63}$.\nStep 2: Cross-multiply: $9h = 315$, so $h = 35$.\nStep 3: Check: $\\frac{35}{63}$ reduces (divide by $7$) to $\\frac{5}{9}$. $\\checkmark$\n\n**Common Mistakes:** Inverting the ratio, $63 \\times \\frac{9}{5} = 113.4$, which is not even a whole number of birds; reporting one part, $7$; dividing $63$ by $5$ to get $12.6$.\n\n**Test Day Takeaway:** Pair the known quantity with its own ratio number to find one part, then scale to the other quantity; a non-integer count of animals signals an inverted ratio.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "proportion-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-162",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The ratio of $a$ to $b$ is $3 : 4$, and the ratio of $b$ to $c$ is $6 : 5$. If $a + c = 152$, what is the value of $b$?",
    choices: [
      // distractor: reports a (9 parts x 8) instead of b
      { id: "A", text: "$72$" },
      // distractor: chains the ratios as 3 : 4 : 5 without matching b; then a + c = 8 parts gives 19 per part and b = 4(19) = 76
      { id: "B", text: "$76$" },
      // distractor: reports c (10 parts x 8) instead of b
      { id: "C", text: "$80$" },
      { id: "D", text: "$96$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Make $b$ match: $a : b = 9 : 12$ and $b : c = 12 : 10$, so $a : b : c = 9 : 12 : 10$. Then $a + c = 19$ parts $= 152$, one part is $8$, and $b = 12(8) = 96$.\n\n**The Full Solution:**\nStep 1: $b$ is $4$ in the first ratio and $6$ in the second; the least common multiple is $12$. Scale $3 : 4$ by $3$ to get $9 : 12$, and $6 : 5$ by $2$ to get $12 : 10$.\nStep 2: Let one part be $k$: $a = 9k$, $b = 12k$, $c = 10k$. Then $a + c = 19k = 152$, so $k = 8$.\nStep 3: $b = 12k = 96$. Check: $a = 72$ and $c = 80$ give $72 + 80 = 152$. $\\checkmark$ Also $72 : 96 = 3 : 4$ and $96 : 80 = 6 : 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($72$): This is $a = 9k$, the wrong variable.\n* Choice B ($76$): Chains the ratios as $3 : 4 : 5$ without matching $b$; then $a + c = 8$ parts gives $19$ per part and $b = 4(19) = 76$, but $4 : 5$ is not the given ratio of $b$ to $c$.\n* Choice C ($80$): This is $c = 10k$, the wrong variable.\n\n**Test Day Takeaway:** Two ratios that share a variable must be rescaled so that variable has the same number in both before combining; then translate the given sum into parts.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "proportion-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-163",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "hard",
    type: "fill-in",
    question: "At a company, the ratio of the number of full-time employees to the number of part-time employees is $8 : 3$. After $12$ additional part-time employees are hired and no other changes are made, the ratio becomes $2 : 1$. How many full-time employees does the company have?",
    correctAnswer: "96",
    explanation: "**SAT Pattern: Proportion / Ratio**\n\n**The correct answer is $96$.**\n\n**The Fast Way (~20s):** Let full-time $= 8k$ and part-time $= 3k$. After hiring, $\\frac{8k}{3k + 12} = 2$, so $8k = 6k + 24$, $k = 12$, and full-time $= 8(12) = 96$.\n\n**The Full Solution:**\nStep 1: Represent the original counts with one variable: full-time $8k$, part-time $3k$.\nStep 2: After $12$ part-time hires, the part-time count is $3k + 12$ and the ratio is $2 : 1$: $8k = 2(3k + 12)$, so $8k = 6k + 24$ and $2k = 24$, giving $k = 12$.\nStep 3: Full-time employees: $8k = 96$. Check: part-time was $36$ and is now $48$, and $96 : 48 = 2 : 1$. $\\checkmark$\n\n**Common Mistakes:** Setting the new ratio as $\\frac{8k}{3k + 12} = \\frac{1}{2}$ (inverted), which gives a fractional $k$; solving for $k = 12$ and reporting $12$ instead of $8k$; adding the $12$ hires to both groups; reporting the part-time count, $36$ or $48$.\n\n**Test Day Takeaway:** Express both quantities with one multiplier, apply the change to only the quantity that changed, and set up the new ratio; finish by reporting the quantity actually asked for.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "proportion-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 10/4: finding-a-missing-value-given-the-mean (8 items) =====
  {
    id: "bank-ps-164",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The table gives the mass, in grams, of each of five mineral samples. The mean mass of the five samples is $16$ grams. What is the value of $n$?",
    diagram: { type: "dataTable", params: { headers: ["Sample", "Mass (grams)"], rows: [["A", "12"], ["B", "15"], ["C", "21"], ["D", "9"], ["E", "n"]] } },
    choices: [
      // distractor: uses 4 x 16 = 64 for the total (counting four samples), then 64 - 57 = 7
      { id: "A", text: "$7$" },
      // distractor: the mean of the four known masses, 57/4
      { id: "B", text: "$14.25$" },
      // distractor: repeats the given mean
      { id: "C", text: "$16$" },
      { id: "D", text: "$23$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Five samples with mean $16$ have total mass $5(16) = 80$. The four known masses sum to $12 + 15 + 21 + 9 = 57$, so $n = 80 - 57 = 23$.\n\n**The Full Solution:**\nStep 1: Mean $= \\frac{\\text{sum}}{\\text{count}}$, so the sum is mean $\\times$ count: $16 \\times 5 = 80$ grams.\nStep 2: Add the known masses from the table: $12 + 15 + 21 + 9 = 57$ grams.\nStep 3: $n = 80 - 57 = 23$. Check: $\\frac{12 + 15 + 21 + 9 + 23}{5} = \\frac{80}{5} = 16$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): Uses $4 \\times 16 = 64$ as the total, counting only four samples, and then $64 - 57 = 7$.\n* Choice B ($14.25$): The mean of the four known masses, $\\frac{57}{4}$; the fifth value must pull the mean up to $16$, so it is larger than that.\n* Choice C ($16$): Repeats the mean; the missing value equals the mean only when the other values already average $16$, and $\\frac{57}{4} \\neq 16$.\n\n**Test Day Takeaway:** Missing-value problems are sum problems: total $=$ mean $\\times$ count, then subtract what you know.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "finding-a-missing-value-given-the-mean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-165",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "easy",
    type: "fill-in",
    question: "The mean of six numbers is $31$. Five of the numbers are $27$, $30$, $33$, $35$, and $40$. What is the sixth number?",
    correctAnswer: "21",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**The correct answer is $21$.**\n\n**The Fast Way (~10s):** Total $= 6(31) = 186$; the five known numbers sum to $165$; the sixth is $186 - 165 = 21$.\n\n**The Full Solution:**\nStep 1: The sum of all six numbers is $6 \\times 31 = 186$.\nStep 2: Add the five given numbers: $27 + 30 + 33 + 35 + 40 = 165$.\nStep 3: Sixth number $= 186 - 165 = 21$. Check: $\\frac{165 + 21}{6} = \\frac{186}{6} = 31$. $\\checkmark$\n\n**Common Mistakes:** Using $5 \\times 31 = 155$ as the total, which gives $155 - 165 = -10$; answering the mean of the five known numbers, $33$; assuming the sixth number must equal the mean, $31$.\n\n**Test Day Takeaway:** Multiply the mean by the full count (including the unknown) to get the total, then subtract the known values.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "finding-a-missing-value-given-the-mean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-166",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A runner's mean time for $5$ races is $42.6$ minutes. What time, in minutes, would the runner need in a sixth race for the mean time of all $6$ races to be $42$ minutes?",
    choices: [
      // distractor: 42 - 0.6 x 6, multiplying the per-race excess by 6 races instead of the 5 existing races
      { id: "A", text: "$38.4$" },
      { id: "B", text: "$39$" },
      // distractor: 42 - 0.6, subtracting the excess only once
      { id: "C", text: "$41.4$" },
      // distractor: the target mean itself, which would leave the mean above 42
      { id: "D", text: "$42$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Six races at a mean of $42$ total $252$ minutes; five races at $42.6$ total $213$; the sixth must be $252 - 213 = 39$ minutes.\n\n**The Full Solution:**\nStep 1: Current total: $5 \\times 42.6 = 213$ minutes.\nStep 2: Required total for a mean of $42$ over $6$ races: $6 \\times 42 = 252$ minutes.\nStep 3: Sixth race: $252 - 213 = 39$ minutes. Check: $\\frac{213 + 39}{6} = \\frac{252}{6} = 42$. $\\checkmark$ Alternatively, each of the $5$ races is $0.6$ above the target, an excess of $3$ minutes, so the sixth race must be $3$ below the target: $42 - 3 = 39$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($38.4$): Computes $42 - 0.6 \\times 6$, charging the excess to six races when only five races are above the target.\n* Choice C ($41.4$): Subtracts the $0.6$ excess only once instead of five times.\n* Choice D ($42$): Running exactly the target time leaves the total excess of $3$ minutes in place, so the mean would stay above $42$.\n\n**Test Day Takeaway:** Work with totals: (new mean)(new count) $-$ (old mean)(old count) is the value needed.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "finding-a-missing-value-given-the-mean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-167",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "medium",
    type: "fill-in",
    question: "The mean of $8$ values is $27.5$. Seven of the values have a sum of $187$. What is the eighth value?",
    correctAnswer: "33",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**The correct answer is $33$.**\n\n**The Fast Way (~10s):** Total $= 8(27.5) = 220$; eighth value $= 220 - 187 = 33$.\n\n**The Full Solution:**\nStep 1: Sum of all $8$ values: $8 \\times 27.5 = 220$.\nStep 2: The seven known values contribute $187$.\nStep 3: Eighth value $= 220 - 187 = 33$. Check: $\\frac{187 + 33}{8} = \\frac{220}{8} = 27.5$. $\\checkmark$\n\n**Common Mistakes:** Using $7 \\times 27.5 = 192.5$ as the total, which gives $5.5$; answering the mean of the seven known values, $\\frac{187}{7} \\approx 26.71$; dividing $220$ by $8$ again and reporting $27.5$.\n\n**Test Day Takeaway:** When a sum of the known values is given directly, the problem is one subtraction after computing mean $\\times$ count.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "finding-a-missing-value-given-the-mean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-168",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The numbers of applications a department received on $6$ days were $4$, $6$, $6$, $8$, $11$, and $k$. If the mean of these six numbers is $8$, what is the value of $k$?",
    choices: [
      // distractor: 5 x 8 - 35, counting only the five known days
      { id: "A", text: "$5$" },
      // distractor: repeats the mean
      { id: "B", text: "$8$" },
      { id: "C", text: "$13$" },
      // distractor: the total sum 6 x 8, not the missing value
      { id: "D", text: "$48$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Six values with mean $8$ sum to $48$. The known values sum to $4 + 6 + 6 + 8 + 11 = 35$, so $k = 48 - 35 = 13$.\n\n**The Full Solution:**\nStep 1: Total $=$ mean $\\times$ count $= 8 \\times 6 = 48$.\nStep 2: Known sum: $4 + 6 + 6 + 8 + 11 = 35$.\nStep 3: $k = 48 - 35 = 13$. Check: $\\frac{35 + 13}{6} = \\frac{48}{6} = 8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): Uses $5 \\times 8 = 40$ as the total, counting only the five known days, then $40 - 35 = 5$.\n* Choice B ($8$): Repeats the mean; the known values average $7$, so $k$ must be above $8$ to pull the mean up.\n* Choice D ($48$): The total of all six values, not the sixth value itself.\n\n**Test Day Takeaway:** The unknown must be counted in the total; use the full count when multiplying by the mean.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "finding-a-missing-value-given-the-mean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-169",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "medium",
    type: "fill-in",
    question: "The mean of four measurements is $9.2$. Two of the measurements are $8.6$ and $10.4$, and the other two measurements are equal to each other. What is the value of each of the other two measurements?",
    correctAnswer: "8.9",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**The correct answer is $8.9$.**\n\n**The Fast Way (~15s):** Total $= 4(9.2) = 36.8$; the two known values sum to $19$; the two equal values share $36.8 - 19 = 17.8$, so each is $8.9$.\n\n**The Full Solution:**\nStep 1: Sum of all four measurements: $4 \\times 9.2 = 36.8$.\nStep 2: Let each unknown measurement be $m$. Then $8.6 + 10.4 + 2m = 36.8$, so $2m = 17.8$.\nStep 3: $m = 8.9$. Check: $\\frac{8.6 + 10.4 + 8.9 + 8.9}{4} = \\frac{36.8}{4} = 9.2$. $\\checkmark$\n\n**Common Mistakes:** Reporting $17.8$, the combined value of the two unknowns, instead of each one; using three measurements, $3(9.2) - 19 = 8.6$; subtracting only one of the known values from the total.\n\n**Test Day Takeaway:** Two equal unknowns contribute $2m$ to the sum; solve for the pair, then halve.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "finding-a-missing-value-given-the-mean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-170",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A data set of $12$ values has a mean of $45$. When $4$ of the values are removed, the mean of the remaining $8$ values is $51$. What is the mean of the $4$ values that were removed?",
    choices: [
      // distractor: the difference between the two given means, 51 - 45
      { id: "A", text: "$6$" },
      { id: "B", text: "$33$" },
      // distractor: subtracts that difference from the original mean, 45 - 6
      { id: "C", text: "$39$" },
      // distractor: the sum of the four removed values, never divided by 4
      { id: "D", text: "$132$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Total of all $12$: $540$. Total of the remaining $8$: $408$. The removed $4$ sum to $132$, so their mean is $\\frac{132}{4} = 33$.\n\n**The Full Solution:**\nStep 1: Original sum $= 12 \\times 45 = 540$.\nStep 2: Remaining sum $= 8 \\times 51 = 408$, so the removed values sum to $540 - 408 = 132$.\nStep 3: Mean of the removed values $= \\frac{132}{4} = 33$. Check: removing values that average $33$, below the old mean of $45$, must raise the mean of what is left, and $51 > 45$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): The difference between the two means, $51 - 45$; means do not subtract to give a third mean.\n* Choice C ($39$): Subtracts that difference from $45$; the actual gap is larger because $4$ values must offset the $6$-point rise of $8$ values ($8 \\times 6 = 48 = 4 \\times 12$).\n* Choice D ($132$): The sum of the removed values, not their mean.\n\n**Test Day Takeaway:** Convert every mean to a total, subtract totals, then divide by the count of the group you are asked about.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "finding-a-missing-value-given-the-mean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-171",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "hard",
    type: "fill-in",
    question: "A data set has a mean of $20$. When the value $56$ is added to the data set, the mean of the new data set is $23$. How many values were in the original data set?",
    correctAnswer: "11",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~15s):** With $n$ original values, $20n + 56 = 23(n + 1)$, so $20n + 56 = 23n + 23$, $33 = 3n$, and $n = 11$.\n\n**The Full Solution:**\nStep 1: Let $n$ be the original count; the original sum is $20n$.\nStep 2: After adding $56$, there are $n + 1$ values with sum $20n + 56$ and mean $23$: $\\frac{20n + 56}{n + 1} = 23$, so $20n + 56 = 23n + 23$.\nStep 3: $56 - 23 = 3n$, so $3n = 33$ and $n = 11$. Check: $11 \\times 20 = 220$; $220 + 56 = 276$; $\\frac{276}{12} = 23$. $\\checkmark$\n\n**Common Mistakes:** Computing $\\frac{56 - 20}{3} = 12$, which is the new count $n + 1$, not the original count; forgetting to add $1$ to the count and solving $20n + 56 = 23n$, which gives $n \\approx 18.67$; dividing $56$ by $23$.\n\n**Test Day Takeaway:** When the count is unknown, write both sums in terms of $n$ and remember that adding a value raises the count by $1$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "finding-a-missing-value-given-the-mean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 10/5: basic-probability (8 items) =====
  {
    id: "bank-ps-172",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A raffle drum contains $40$ tickets, of which $15$ are marked as prize tickets. If one ticket is drawn at random, what is the probability that it is not a prize ticket?",
    choices: [
      // distractor: 15/40, the probability of a prize ticket (the complement)
      { id: "A", text: "$\\frac{3}{8}$" },
      // distractor: 15/25, the ratio of prize to non-prize tickets, not a probability
      { id: "B", text: "$\\frac{3}{5}$" },
      { id: "C", text: "$\\frac{5}{8}$" },
      // distractor: 25/15, inverted; a probability cannot exceed 1
      { id: "D", text: "$\\frac{5}{3}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Non-prize tickets: $40 - 15 = 25$. Probability $= \\frac{25}{40} = \\frac{5}{8}$.\n\n**The Full Solution:**\nStep 1: Count the favorable outcomes: tickets that are not prize tickets, $40 - 15 = 25$.\nStep 2: The total number of equally likely outcomes is $40$.\nStep 3: Probability $= \\frac{25}{40} = \\frac{5}{8}$. Check: $P(\\text{prize}) = \\frac{15}{40} = \\frac{3}{8}$, and $\\frac{3}{8} + \\frac{5}{8} = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{8}$): The probability of drawing a prize ticket, $\\frac{15}{40}$; the question asks for the complement.\n* Choice B ($\\frac{3}{5}$): $\\frac{15}{25}$, the ratio of prize tickets to non-prize tickets; a probability's denominator is the total, $40$.\n* Choice D ($\\frac{5}{3}$): $\\frac{25}{15}$, the inverted ratio; a probability can never exceed $1$.\n\n**Test Day Takeaway:** Probability $= \\dfrac{\\text{favorable}}{\\text{total}}$; for \"not,\" either count the rest or subtract from $1$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "basic-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-173",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "easy",
    type: "fill-in",
    question: "A spinner is divided into $10$ equal sectors numbered $1$ through $10$. If the spinner is spun once, what is the probability that it lands on a sector numbered with a prime number?",
    correctAnswer: "2/5",
    explanation: "**SAT Pattern: Basic Probability**\n\n**The correct answer is $\\frac{2}{5}$.**\n\n**The Fast Way (~10s):** The primes from $1$ to $10$ are $2, 3, 5, 7$: four of ten sectors, so $\\frac{4}{10} = \\frac{2}{5}$.\n\n**The Full Solution:**\nStep 1: List the primes among $1$ through $10$: $2, 3, 5, 7$. ($1$ is not prime; $4, 6, 8, 9, 10$ are composite.)\nStep 2: Favorable sectors: $4$. Total equally likely sectors: $10$.\nStep 3: Probability $= \\frac{4}{10} = \\frac{2}{5}$, which can also be entered as $0.4$. Check: $4$ favorable out of $10$ is $40\\%$. $\\checkmark$\n\n**Common Mistakes:** Counting $1$ as prime, which gives $\\frac{5}{10} = \\frac{1}{2}$; counting $9$ as prime; counting the odd numbers instead of the primes, also $\\frac{5}{10}$.\n\n**Test Day Takeaway:** For a probability over numbered outcomes, list the favorable numbers explicitly; $1$ is not prime and $2$ is.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "basic-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-174",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A jar contains $30$ tokens numbered $1$ through $30$. If one token is drawn at random, what is the probability that the number on the token is a multiple of $4$?",
    choices: [
      { id: "A", text: "$\\frac{7}{30}$" },
      // distractor: assumes exactly one-fourth of the tokens are multiples of 4; 30/4 = 7.5 is not a count
      { id: "B", text: "$\\frac{1}{4}$" },
      // distractor: 8/30, counting eight multiples (including 0 or 32)
      { id: "C", text: "$\\frac{4}{15}$" },
      // distractor: 23/30, the complement
      { id: "D", text: "$\\frac{23}{30}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Multiples of $4$ from $1$ to $30$: $4, 8, 12, 16, 20, 24, 28$, seven of them. Probability $= \\frac{7}{30}$.\n\n**The Full Solution:**\nStep 1: The largest multiple of $4$ that is at most $30$ is $28 = 4 \\times 7$, so there are $7$ multiples of $4$.\nStep 2: Total equally likely outcomes: $30$.\nStep 3: Probability $= \\frac{7}{30}$, already in lowest terms. Check: listing $4, 8, 12, 16, 20, 24, 28$ confirms seven values. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{1}{4}$): Assumes exactly one-fourth of the tokens qualify, but $\\frac{30}{4} = 7.5$ is not a whole number of tokens; the count must be found by listing or by $\\lfloor 30/4 \\rfloor = 7$.\n* Choice C ($\\frac{4}{15}$): $\\frac{8}{30}$, counting eight multiples, which requires including $0$ or $32$, neither of which is in the jar.\n* Choice D ($\\frac{23}{30}$): The probability of *not* drawing a multiple of $4$.\n\n**Test Day Takeaway:** Count favorable outcomes exactly (divide and round down, or list them); \"one in every four\" is only approximate when the total is not a multiple of $4$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "basic-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-175",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "medium",
    type: "fill-in",
    question: "A shipment contains $48$ light bulbs, of which $30$ are LED bulbs and the rest are halogen bulbs. If one bulb is selected at random, what is the probability that it is a halogen bulb?",
    correctAnswer: "3/8",
    explanation: "**SAT Pattern: Basic Probability**\n\n**The correct answer is $\\frac{3}{8}$.**\n\n**The Fast Way (~10s):** Halogen bulbs: $48 - 30 = 18$. Probability $= \\frac{18}{48} = \\frac{3}{8}$.\n\n**The Full Solution:**\nStep 1: Find the favorable count: $48 - 30 = 18$ halogen bulbs.\nStep 2: The total is $48$ bulbs.\nStep 3: Probability $= \\frac{18}{48}$; divide numerator and denominator by $6$ to get $\\frac{3}{8}$, or $0.375$. Check: $\\frac{3}{8}$ of $48$ is $18$. $\\checkmark$\n\n**Common Mistakes:** Answering the LED probability, $\\frac{30}{48} = \\frac{5}{8}$; dividing by the LED count, $\\frac{18}{30} = \\frac{3}{5}$; leaving the fraction as $\\frac{18}{48}$ is accepted, but $\\frac{30}{18}$ (inverted) is not a probability.\n\n**Test Day Takeaway:** \"The rest\" means subtract from the total first; the denominator is always the whole group.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "basic-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-176",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Each of the $275$ cars in a parking garage is on level $1$, level $2$, or level $3$. If one of these cars is chosen at random, the probability that it is on level $1$ is $0.36$ and the probability that it is on level $2$ is $0.4$. How many cars are on level $3$?",
    choices: [
      { id: "A", text: "$66$" },
      // distractor: the level-1 count, 0.36 x 275
      { id: "B", text: "$99$" },
      // distractor: the level-2 count, 0.4 x 275
      { id: "C", text: "$110$" },
      // distractor: the cars on levels 1 and 2 combined, 0.76 x 275
      { id: "D", text: "$209$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $P(\\text{level } 3) = 1 - 0.36 - 0.4 = 0.24$, and $0.24 \\times 275 = 66$.\n\n**The Full Solution:**\nStep 1: The three levels account for every car, so the probabilities sum to $1$: $P(\\text{level } 3) = 1 - 0.36 - 0.40 = 0.24$.\nStep 2: Convert the probability to a count: $0.24 \\times 275 = 66$ cars.\nStep 3: Check by counting the other levels: level $1$ has $0.36 \\times 275 = 99$ cars and level $2$ has $0.40 \\times 275 = 110$ cars; $99 + 110 + 66 = 275$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($99$): The number of cars on level $1$.\n* Choice C ($110$): The number of cars on level $2$.\n* Choice D ($209$): The number of cars on levels $1$ and $2$ together, $0.76 \\times 275$; the question asks for the remaining cars.\n\n**Test Day Takeaway:** Probabilities over a complete set of categories add to $1$; find the missing probability first, then multiply by the total.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "basic-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-177",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "medium",
    type: "fill-in",
    question: "A bin contains only small, medium, and large bolts, in the ratio $3 : 4 : 8$, respectively. If one bolt is selected at random, what is the probability that it is a large bolt?",
    correctAnswer: "8/15",
    explanation: "**SAT Pattern: Basic Probability**\n\n**The correct answer is $\\frac{8}{15}$.**\n\n**The Fast Way (~10s):** The ratio has $3 + 4 + 8 = 15$ parts, and large bolts are $8$ of them: $\\frac{8}{15}$.\n\n**The Full Solution:**\nStep 1: A ratio gives relative counts: for some $k$, there are $3k$ small, $4k$ medium, and $8k$ large bolts.\nStep 2: Total $= 15k$; favorable (large) $= 8k$.\nStep 3: Probability $= \\frac{8k}{15k} = \\frac{8}{15}$. Check: with $k = 1$, $8$ of $15$ bolts are large. $\\checkmark$\n\n**Common Mistakes:** Dividing by the other parts only, $\\frac{8}{7}$, which exceeds $1$; answering $\\frac{1}{3}$ because there are three sizes; using $\\frac{8}{12}$ by leaving out the small bolts.\n\n**Test Day Takeaway:** A probability from a ratio is (the part's number) over (the sum of all the parts); the actual counts cancel.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "basic-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-178",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Each face of a fair $20$-sided die is labeled with a different integer from $1$ through $20$. If the die is rolled once, what is the probability that the result is a multiple of $3$ or a multiple of $4$?",
    choices: [
      // distractor: 5/20, multiples of 4 only
      { id: "A", text: "$\\frac{1}{4}$" },
      // distractor: 6/20, multiples of 3 only
      { id: "B", text: "$\\frac{3}{10}$" },
      { id: "C", text: "$\\frac{1}{2}$" },
      // distractor: 6 + 5 = 11 without removing the double-counted 12
      { id: "D", text: "$\\frac{11}{20}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Multiples of $3$: $3, 6, 9, 12, 15, 18$ (six). Multiples of $4$: $4, 8, 12, 16, 20$ (five). The number $12$ is in both lists, so there are $6 + 5 - 1 = 10$ favorable faces: $\\frac{10}{20} = \\frac{1}{2}$.\n\n**The Full Solution:**\nStep 1: Count multiples of $3$ from $1$ to $20$: $\\lfloor 20/3 \\rfloor = 6$. Count multiples of $4$: $\\lfloor 20/4 \\rfloor = 5$.\nStep 2: Multiples of both $3$ and $4$ are multiples of $12$: only $12$ itself, so $1$ overlap. Favorable $= 6 + 5 - 1 = 10$.\nStep 3: Probability $= \\frac{10}{20} = \\frac{1}{2}$. Check by listing: $3, 4, 6, 8, 9, 12, 15, 16, 18, 20$ is ten distinct faces. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{4}$): Counts only the five multiples of $4$.\n* Choice B ($\\frac{3}{10}$): Counts only the six multiples of $3$.\n* Choice D ($\\frac{11}{20}$): Adds $6 + 5$ without subtracting the face $12$, which was counted twice.\n\n**Test Day Takeaway:** For \"A or B,\" count A, count B, and subtract the overlap (here the multiples of the least common multiple); listing the outcomes is a reliable check.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "basic-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-179",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "hard",
    type: "fill-in",
    question: "A bag contains only green chips and yellow chips. If one chip is selected at random, the probability that it is green is $0.35$. If the bag contains $39$ yellow chips, how many green chips does it contain?",
    correctAnswer: "21",
    explanation: "**SAT Pattern: Basic Probability**\n\n**The correct answer is $21$.**\n\n**The Fast Way (~15s):** Yellow chips are $1 - 0.35 = 0.65$ of the bag, so the total is $\\frac{39}{0.65} = 60$ and the green chips number $60 - 39 = 21$.\n\n**The Full Solution:**\nStep 1: Only two colors, so $P(\\text{yellow}) = 1 - 0.35 = 0.65$.\nStep 2: Let $T$ be the total: $0.65T = 39$, so $T = 60$.\nStep 3: Green chips $= T - 39 = 21$, or directly $0.35 \\times 60 = 21$. Check: $\\frac{21}{60} = 0.35$. $\\checkmark$\n\n**Common Mistakes:** Multiplying the given count by the green probability, $0.35 \\times 39 = 13.65$, which pairs the wrong color with the wrong probability; reporting the total, $60$, instead of the green chips; dividing $39$ by $0.35$ to get about $111.4$.\n\n**Test Day Takeaway:** Match each count to its own probability; the known count and its probability give the total, and the total gives everything else.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "basic-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 14/1: percent-of-a-whole (8 items) =====
  {
    id: "bank-ps-180",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A shipment of $250$ ceramic tiles includes glazed tiles and unglazed tiles. If $36\\%$ of the tiles are glazed, how many of the tiles in the shipment are glazed?",
    choices: [
      // distractor: the percent itself, treated as a count
      { id: "A", text: "$36$" },
      { id: "B", text: "$90$" },
      // distractor: the unglazed tiles, 64% of 250
      { id: "C", text: "$160$" },
      // distractor: 250 - 36, subtracting the percent as if it were a count
      { id: "D", text: "$214$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $36\\%$ of $250$ is $0.36 \\times 250 = 90$.\n\n**The Full Solution:**\nStep 1: Convert the percent to a decimal: $36\\% = 0.36$.\nStep 2: Multiply by the whole: $0.36 \\times 250 = 90$ glazed tiles.\nStep 3: Check: $10\\%$ of $250$ is $25$, so $36\\%$ is $3.6 \\times 25 = 90$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($36$): Reads the percent as a number of tiles; $36\\%$ of $250$ is not $36$ because the whole is not $100$.\n* Choice C ($160$): The number of unglazed tiles, $64\\%$ of $250$.\n* Choice D ($214$): Subtracts the percent from the total, $250 - 36$, mixing a percent with a count.\n\n**Test Day Takeaway:** Percent of a whole is (percent as a decimal) $\\times$ (whole); the percent is never a count on its own unless the whole is $100$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-of-a-whole",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  { id: 'bank-ps-181', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'easy', type: 'fill-in',
    question: 'A school librarian orders $200$ books for the new school year, and $15\\%$ of the books are reference texts. How many of the books are reference texts?',
    correctAnswer: '30',
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~10s):** $15\\%$ of $200$ is $0.15 \\times 200 = 30$.\n\n**The Full Solution:**\nStep 1: \"$15\\%$ of the books\" means multiply the total by $0.15$.\nStep 2: $0.15 \\times 200 = 30$ reference texts.\n\n**Common Mistakes:** Reading $15\\%$ as $15$ books outright; or computing $200 - 0.15 \\times 200 = 170$ (the non-reference count).\n\n**Test Day Takeaway:** \"$p\\%$ of $N$\" always means $\\frac{p}{100} \\times N$ — convert the percent to a decimal and multiply.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-whole', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-182', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: '$25\\%$ of a number is $48$. What is the number?',
    choices: [{ id: 'A', text: '$192$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$73$' }, { id: 'D', text: '$96$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $25\\%$ is $\\frac{1}{4}$, so the number is $4 \\times 48 = 192$.\n\n**The Full Solution:**\nStep 1: \"$25\\%$ of $N$ is $48$\" sets up $0.25N = 48$.\nStep 2: Divide by $0.25$: $N = \\frac{48}{0.25} = 192$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): multiplied instead of dividing — computed $0.25 \\times 48$.\n* Choice C ($73$): added the visible numbers, $48 + 25$.\n* Choice D ($96$): doubled $48$ instead of quadrupling it.\n\n**Test Day Takeaway:** To undo \"$p\\%$ of $N$,\" divide by the decimal — finding the whole means dividing, not multiplying.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-whole', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-183', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'fill-in',
    question: '$40\\%$ of $x$ is $24$. What is the value of $x$?',
    correctAnswer: '60',
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**The correct answer is $60$.**\n\n**The Fast Way (~15s):** $0.40x = 24$, so $x = \\frac{24}{0.40} = 60$.\n\n**The Full Solution:**\nStep 1: \"$40\\%$ of $x$ is $24$\" becomes $0.40x = 24$.\nStep 2: Divide both sides by $0.40$: $x = \\frac{24}{0.40} = 60$.\n\n**Common Mistakes:** Multiplying to get $0.40 \\times 24 = 9.6$; or stopping at $24$ without solving for the whole.\n\n**Test Day Takeaway:** When the part is known and the whole is missing, divide the part by the decimal percent.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-whole', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-184', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Of the $60$ students in a freshman class, $18$ are enrolled in advanced math. What percent of the students in the freshman class are enrolled in advanced math?',
    choices: [{ id: 'A', text: '$30\\%$' }, { id: 'B', text: '$42\\%$' }, { id: 'C', text: '$33.3\\%$' }, { id: 'D', text: '$18\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $\\frac{18}{60} = 0.30 = 30\\%$.\n\n**The Full Solution:**\nStep 1: \"What percent of $60$ is $18$\" means $\\frac{18}{60}$.\nStep 2: $\\frac{18}{60} = 0.30$, which is $30\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($42\\%$): used the leftover count $60 - 18 = 42$ as a percent — wrong operation.\n* Choice C ($33.3\\%$): inverted the ratio to $\\frac{60}{18} - 1$, or confused it with $\\frac{1}{3}$.\n* Choice D ($18\\%$): reported the part itself as the percent.\n\n**Test Day Takeaway:** \"$X$ is what percent of $Y$\" equals $\\frac{X}{Y} \\times 100\\%$ — the whole goes on the bottom.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-whole', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-185', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'fill-in',
    question: 'A bookstore has $250$ books, and $60\\%$ are fiction. How many fiction books are there?',
    correctAnswer: '150',
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**The correct answer is $150$.**\n\n**The Fast Way (~10s):** $60\\%$ of $250$ is $0.60 \\times 250 = 150$.\n\n**The Full Solution:**\nStep 1: \"$60\\%$ are fiction\" means multiply the total by $0.60$.\nStep 2: $0.60 \\times 250 = 150$ fiction books.\n\n**Common Mistakes:** Computing the non-fiction count $250 - 150 = 100$; or misplacing the decimal to get $15$.\n\n**Test Day Takeaway:** \"$p\\%$ of $N$\" is $\\frac{p}{100} \\times N$ — convert and multiply.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-whole', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-186', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'hard', type: 'multiple-choice',
    question: '$8\\%$ of $x$ equals $10\\%$ of $24$. What is the value of $x$?',
    choices: [{ id: 'A', text: '$30$' }, { id: 'B', text: '$24$' }, { id: 'C', text: '$2.4$' }, { id: 'D', text: '$0.30$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $10\\%$ of $24$ is $2.4$, so $0.08x = 2.4 \\Rightarrow x = \\frac{2.4}{0.08} = 30$.\n\n**The Full Solution:**\nStep 1: Translate both sides: $0.08x = 0.10 \\times 24$.\nStep 2: The right side is $0.10 \\times 24 = 2.4$.\nStep 3: Divide by $0.08$: $x = \\frac{2.4}{0.08} = 30$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($24$): copied the given $24$ as the answer.\n* Choice C ($2.4$): stopped at $10\\%$ of $24$ without solving for $x$.\n* Choice D ($0.30$): kept a decimal/place-value slip instead of dividing fully.\n\n**Test Day Takeaway:** Translate each percent phrase into a decimal product, set the two sides equal, then solve for the unknown.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-of-a-whole', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-187', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'hard', type: 'fill-in',
    question: 'A school has $400$ students. $35\\%$ play sports, and of those, $60\\%$ also play music. How many students play both sports and music?',
    correctAnswer: '84',
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**The correct answer is $84$.**\n\n**The Fast Way (~20s):** Chain the percents: $0.35 \\times 0.60 \\times 400 = 0.21 \\times 400 = 84$.\n\n**The Full Solution:**\nStep 1: $35\\%$ play sports: $0.35 \\times 400 = 140$ students.\nStep 2: $60\\%$ of those also play music: $0.60 \\times 140 = 84$ students.\n\n**Common Mistakes:** Adding the percents to use $95\\%$ of $400$; or applying $60\\%$ to the full $400$ to get $240$ instead of to the $140$ sports players.\n\n**Test Day Takeaway:** \"Of those\" means the second percent applies to the first result — sequential percents multiply.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-of-a-whole', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 14/2: percent-of-a-number (8 items) =====
  // Duplicate of percent-of-a-whole conceptually; distinct slug.
  { id: 'bank-ps-188', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A company has $50$ employees. If $20\\%$ of the employees attended a training session, how many employees attended the session?',
    choices: [{ id: 'A', text: '$10$' }, { id: 'B', text: '$25$' }, { id: 'C', text: '$30$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $20\\%$ of $50$ is $0.20 \\times 50 = 10$.\n\n**The Full Solution:**\nStep 1: \"$20\\%$ of the employees\" means multiply $50$ by $0.20$.\nStep 2: $0.20 \\times 50 = 10$ employees attended.\n\n**Why the wrong answers are tempting:**\n* Choice B ($25$): used $50\\%$ of $50$ instead of $20\\%$.\n* Choice C ($30$): added $20 + 10$ instead of multiplying.\n* Choice D ($5$): used $10\\%$ of $50$, dropping a factor of $2$.\n\n**Test Day Takeaway:** \"$p\\%$ of $N$\" is just the decimal times the number — $0.20 \\times 50$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-189', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'easy', type: 'fill-in',
    question: 'A coffee shop sold $40$ drinks during the morning rush. If $75\\%$ of the drinks sold were coffee, how many of the drinks sold were coffee?',
    correctAnswer: '30',
    explanation: "**SAT Pattern: Percent of a Number**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~10s):** $75\\%$ is $\\frac{3}{4}$, and $\\frac{3}{4}$ of $40$ is $30$.\n\n**The Full Solution:**\nStep 1: \"$75\\%$ of the drinks\" means multiply $40$ by $0.75$ (or $\\frac{3}{4}$).\nStep 2: $\\frac{3}{4} \\times 40 = 30$ coffees.\n\n**Common Mistakes:** Computing the non-coffee count $40 - 30 = 10$; or using $\\frac{1}{4}$ by mistake.\n\n**Test Day Takeaway:** Memorize the friendly fractions: $75\\% = \\frac{3}{4}$ turns the arithmetic into a quick mental step.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-190', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: '$120\\%$ of a number is $180$. What is the number?',
    choices: [{ id: 'A', text: '$150$' }, { id: 'B', text: '$60$' }, { id: 'C', text: '$216$' }, { id: 'D', text: '$200$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $1.20N = 180$, so $N = \\frac{180}{1.20} = 150$.\n\n**The Full Solution:**\nStep 1: \"$120\\%$ of $N$ is $180$\" becomes $1.20N = 180$.\nStep 2: Divide by $1.20$: $N = \\frac{180}{1.20} = 150$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($60$): mis-derived by multiplying instead of dividing.\n* Choice C ($216$): multiplied forward, $180 \\times 1.20$, instead of reversing.\n* Choice D ($200$): picked a nearby round number rather than dividing.\n\n**Test Day Takeaway:** Percents above $100$ use the same rule — divide the part by the decimal, even when the decimal exceeds $1$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-191', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'fill-in',
    question: '$36$ is $40\\%$ of what number?',
    correctAnswer: '90',
    explanation: "**SAT Pattern: Percent of a Number**\n\n**The correct answer is $90$.**\n\n**The Fast Way (~15s):** $0.40N = 36$, so $N = \\frac{36}{0.40} = 90$.\n\n**The Full Solution:**\nStep 1: \"$36$ is $40\\%$ of $N$\" becomes $0.40N = 36$.\nStep 2: Divide by $0.40$: $N = \\frac{36}{0.40} = 90$.\n\n**Common Mistakes:** Multiplying to get $0.40 \\times 36 = 14.4$; or treating $36$ as the whole instead of the part.\n\n**Test Day Takeaway:** \"$X$ is $p\\%$ of what\" means divide $X$ by the decimal — the missing whole is always the bigger number here.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-192', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What number is $15\\%$ greater than $80$?',
    choices: [{ id: 'A', text: '$92$' }, { id: 'B', text: '$95$' }, { id: 'C', text: '$68$' }, { id: 'D', text: '$12$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** \"$15\\%$ greater\" multiplies by $1.15$: $80 \\times 1.15 = 92$.\n\n**The Full Solution:**\nStep 1: $15\\%$ of $80$ is $0.15 \\times 80 = 12$.\nStep 2: Add the increase to the original: $80 + 12 = 92$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($95$): added $15$ to $80$ instead of $15\\%$ of $80$.\n* Choice C ($68$): subtracted the increase, $80 - 12$, instead of adding it.\n* Choice D ($12$): reported the increase alone, not the new total.\n\n**Test Day Takeaway:** \"$p\\%$ greater than\" means multiply by $1 + \\frac{p}{100}$ — one step gives the new value.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-193', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'fill-in',
    question: 'What number is $25\\%$ less than $60$?',
    correctAnswer: '45',
    explanation: "**SAT Pattern: Percent of a Number**\n\n**The correct answer is $45$.**\n\n**The Fast Way (~10s):** $25\\%$ less means keep $75\\%$: $60 \\times 0.75 = 45$.\n\n**The Full Solution:**\nStep 1: \"$25\\%$ less than $60$\" subtracts $25\\%$ of $60$ from $60$.\nStep 2: $25\\%$ of $60$ is $0.25 \\times 60 = 15$, so $60 - 15 = 45$. Equivalently, $60 \\times (1 - 0.25) = 60 \\times 0.75 = 45$.\n\n**Common Mistakes:** Reporting $15$ (the amount removed, not what's left); reporting $75$ (adding $25\\%$ instead of subtracting).\n\n**Test Day Takeaway:** \"$p\\%$ less than $N$\" equals $N \\times (1 - \\frac{p}{100})$ — fold the subtraction into a single multiplier.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-194', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'hard', type: 'multiple-choice',
    question: 'After a $40\\%$ discount, an item sells for $\\$60$. What was the original price?',
    choices: [{ id: 'A', text: '$\\$100$' }, { id: 'B', text: '$\\$84$' }, { id: 'C', text: '$\\$36$' }, { id: 'D', text: '$\\$150$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** A $40\\%$ discount leaves $60\\%$ of the original, so $0.60 \\cdot \\text{orig} = 60 \\Rightarrow \\text{orig} = \\frac{60}{0.60} = \\$100$.\n\n**The Full Solution:**\nStep 1: After a $40\\%$ discount, the sale price is $100\\% - 40\\% = 60\\%$ of the original price.\nStep 2: Let the original price be $x$. Then $0.60x = 60$.\nStep 3: Divide: $x = \\frac{60}{0.60} = 100$. Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$84$): adds $40\\%$ to the sale price — uses $60 \\times 1.40$, the wrong direction.\n* Choice C ($\\$36$): takes $60\\%$ of the sale price — uses $60 \\times 0.60$, discounting again instead of reversing.\n* Choice D ($\\$150$): divides by the discount rate instead of the remaining fraction — uses $\\frac{60}{0.40}$.\n\n**Test Day Takeaway:** To reverse a discount, divide the sale price by the fraction that remains ($1 - $ discount rate), not by the discount rate itself.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-195', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'hard', type: 'fill-in',
    question: 'A worker received a salary this year that was $25\\%$ higher than the salary received last year. If this year\\u2019s salary is $\\$5{,}000$ greater than last year\\u2019s salary, what is the salary received this year, in dollars?',
    correctAnswer: '25000',
    explanation: "**SAT Pattern: Percent Relationship + Absolute Difference (System)**\n\n**The correct answer is $25{,}000$.**\n\n**The Fast Way (~25s):** The $\\$5{,}000$ raise IS the $25\\%$ increase, so last year $= \\frac{5{,}000}{0.25} = \\$20{,}000$, and this year $= 20{,}000 + 5{,}000 = \\$25{,}000$.\n\n**The Full Solution:**\nStep 1: Let $L$ be last year's salary and $T$ this year's. This year is $25\\%$ higher: $T = 1.25L$.\nStep 2: This year exceeds last year by $\\$5{,}000$: $T = L + 5{,}000$.\nStep 3: Set equal: $1.25L = L + 5{,}000 \\Rightarrow 0.25L = 5{,}000 \\Rightarrow L = 20{,}000$.\nStep 4: Then $T = 1.25 \\times 20{,}000 = 25{,}000$. Check: $25{,}000 - 20{,}000 = 5{,}000$ $\\checkmark$ and $\\frac{25{,}000}{20{,}000} = 1.25$ $\\checkmark$.\n\n**Common Mistakes:** Reporting $20{,}000$ (last year's salary, not this year's); reporting $6{,}250$ (applying $1.25$ to the $\\$5{,}000$ difference instead of to last year's salary).\n\n**Test Day Takeaway:** When a problem gives both a percent relationship and a dollar difference, set up two equations in two variables, solve, then confirm which one the question asks for.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-ps-196', domain: 'problem-solving', skills: ['percent-change'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A $\\$80$ item is reduced to $\\$60$. What is the percent decrease?',
    choices: [{ id: 'A', text: '$25\\%$' }, { id: 'B', text: '$20\\%$' }, { id: 'C', text: '$30\\%$' }, { id: 'D', text: '$33.3\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $\\frac{80 - 60}{80} = \\frac{20}{80} = 0.25 = 25\\%$.\n\n**The Full Solution:**\nStep 1: Percent decrease $= \\frac{\\text{decrease}}{\\text{original}}$.\nStep 2: The decrease is $80 - 60 = 20$, and the original is $80$.\nStep 3: $\\frac{20}{80} = 0.25 = 25\\%$. Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($20\\%$): reports the raw decrease ($20$) as the percent — number/percent confusion.\n* Choice C ($30\\%$): a stray value matching neither the correct ratio nor a common base error.\n* Choice D ($33.3\\%$): divides by the final value instead of the original — uses $\\frac{20}{60}$.\n\n**Test Day Takeaway:** Percent change always divides by the ORIGINAL value, never the new one.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-decrease', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-197', domain: 'problem-solving', skills: ['percent-change'], difficulty: 'easy', type: 'fill-in',
    question: 'A population drops from $200$ to $160$. What is the percent decrease?',
    correctAnswer: '20',
    explanation: "**SAT Pattern: Percent Decrease**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~10s):** Decrease is $200 - 160 = 40$, so $\\frac{40}{200} = 0.20 = 20\\%$.\n\n**The Full Solution:**\nStep 1: Percent decrease $= \\frac{\\text{decrease}}{\\text{original}}$.\nStep 2: The decrease is $200 - 160 = 40$; the original is $200$.\nStep 3: $\\frac{40}{200} = 0.20$, which is $20\\%$.\n\n**Common Mistakes:** Reporting $25$ (dividing by the final value $160$ instead of the original $200$); reporting $40$ (giving the raw drop instead of the percent).\n\n**Test Day Takeaway:** Percent decrease $= \\frac{\\text{drop}}{\\text{original}}$ — always divide by the starting amount.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-decrease', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-198', domain: 'problem-solving', skills: ['percent-change'], difficulty: 'medium', type: 'multiple-choice',
    question: 'After a $30\\%$ decrease, a quantity becomes $35$. What was the original quantity?',
    choices: [{ id: 'A', text: '$50$' }, { id: 'B', text: '$45.5$' }, { id: 'C', text: '$24.5$' }, { id: 'D', text: '$65$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** A $30\\%$ decrease leaves $70\\%$, so $0.70N = 35 \\Rightarrow N = \\frac{35}{0.70} = 50$.\n\n**The Full Solution:**\nStep 1: After a $30\\%$ decrease, the result is $100\\% - 30\\% = 70\\%$ of the original.\nStep 2: Let $N$ be the original: $0.70N = 35$.\nStep 3: Divide: $N = \\frac{35}{0.70} = 50$. Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($45.5$): multiplies $35$ by $1.30$ instead of dividing by $0.70$ — uses $35 \\times 1.30$, treating the decrease as a forward increase.\n* Choice C ($24.5$): subtracts $30\\%$ of $35$ from $35$ — applies the decrease to the result instead of reversing it.\n* Choice D ($65$): adds the $30$ back onto $35$ — uses $35 + 30$.\n\n**Test Day Takeaway:** A decrease by $r$ multiplies the original by $(1 - r)$; to reverse it, divide the result by $(1 - r)$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-decrease', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-199', domain: 'problem-solving', skills: ['percent-change'], difficulty: 'medium', type: 'fill-in',
    question: 'A book originally costs $\\$25$. After a percent decrease, it costs $\\$19$. What is the percent decrease?',
    correctAnswer: '24',
    explanation: "**SAT Pattern: Percent Decrease**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~10s):** $\\frac{25 - 19}{25} = \\frac{6}{25} = 0.24 = 24\\%$.\n\n**The Full Solution:**\nStep 1: Percent decrease $= \\frac{\\text{decrease}}{\\text{original}}$.\nStep 2: The decrease is $25 - 19 = 6$; the original is $25$.\nStep 3: $\\frac{6}{25} = 0.24$, which is $24\\%$.\n\n**Common Mistakes:** Reporting $6$ (the raw price drop instead of the percent); dividing by $19$ instead of $25$ and getting about $32\\%$.\n\n**Test Day Takeaway:** Divide the dollar drop by the ORIGINAL price to get the percent decrease.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-decrease', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-200', domain: 'problem-solving', skills: ['percent-change'], difficulty: 'hard', type: 'fill-in',
    question: 'A stock price increases by $25\\%$ over the first quarter of the year. In the second quarter, the price decreases by $r\\%$, and the price at the end of the second quarter equals the price at the start of the first quarter. What is the value of $r$?',
    correctAnswer: '20',
    explanation: "**SAT Pattern: Compound Percent Change — Solve for the Unknown Rate**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~25s):** The two quarters must multiply back to $1$: $1.25 \\cdot (1 - \\frac{r}{100}) = 1 \\Rightarrow 1 - \\frac{r}{100} = 0.80 \\Rightarrow r = 20$.\n\n**The Full Solution:**\nStep 1: Let $P$ be the starting price. After a $25\\%$ increase: $1.25P$.\nStep 2: After a $r\\%$ decrease: $1.25P \\cdot (1 - \\frac{r}{100})$.\nStep 3: The end price equals the start: $1.25P \\cdot (1 - \\frac{r}{100}) = P$.\nStep 4: Divide by $P$: $1.25(1 - \\frac{r}{100}) = 1 \\Rightarrow 1 - \\frac{r}{100} = \\frac{1}{1.25} = 0.80$.\nStep 5: So $\\frac{r}{100} = 0.20$ and $r = 20$. Check: $1.25 \\times 0.80 = 1.00$ $\\checkmark$.\n\n**Common Mistakes:** Reporting $25$ (assuming a $-25\\%$ undoes a $+25\\%$ — it doesn't, because of compounding); reporting $5$ (subtracting the rates additively).\n\n**Test Day Takeaway:** Chain percent changes as multipliers. To undo a $+p\\%$ increase, the matching decrease is smaller than $p\\%$ — always solve with the multiplicative form.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-decrease', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-ps-201', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'In a survey of $100$ people, $60$ prefer Coke. What is the (marginal) probability that a randomly chosen respondent prefers Coke?',
    choices: [{ id: 'A', text: '$0.6$' }, { id: 'B', text: '$0.4$' }, { id: 'C', text: '$60$' }, { id: 'D', text: '$100$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $\\frac{60}{100} = 0.6$.\n\n**The Full Solution:**\nStep 1: A marginal probability is the favorable count over the total.\nStep 2: $60$ of the $100$ respondents prefer Coke, so $\\frac{60}{100} = 0.6$. Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($0.4$): computes $\\frac{40}{100}$ — the complement, those who don't prefer Coke.\n* Choice C ($60$): reports the count itself, not a probability.\n* Choice D ($100$): reports the total, not a probability.\n\n**Test Day Takeaway:** A probability is always a count divided by the total — a number between $0$ and $1$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-202', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'easy', type: 'fill-in',
    question: 'A class of $40$ students has $24$ girls. What is the probability that a randomly chosen student is a girl? Express as a decimal.',
    correctAnswer: '0.6',
    explanation: "**SAT Pattern: Marginal Probability**\n\n**The correct answer is $0.6$.**\n\n**The Fast Way (~10s):** $\\frac{24}{40} = 0.6$.\n\n**The Full Solution:**\nStep 1: Probability of a girl $= \\frac{\\text{girls}}{\\text{total students}}$.\nStep 2: $\\frac{24}{40} = 0.6$.\n\n**Common Mistakes:** Reporting $0.4$ (the fraction of boys, $\\frac{16}{40}$); reporting $24$ (the count instead of the decimal probability).\n\n**Test Day Takeaway:** Marginal probability is the favorable count over the grand total — divide, then read it as a decimal between $0$ and $1$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-203', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The two-way table below shows $200$ students by class year and gender. What is the marginal probability of selecting a senior?',
    diagram: { type: 'twoWayTable', params: { headers: ['', 'Male', 'Female', 'Total'], rows: [['Seniors', '42', '38', '80'], ['Juniors', '60', '60', '120'], ['Total', '102', '98', '200']] } },
    choices: [{ id: 'A', text: '$0.4$' }, { id: 'B', text: '$0.6$' }, { id: 'C', text: '$80$' }, { id: 'D', text: '$0.25$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** There are $80$ seniors out of $200$ students: $\\frac{80}{200} = 0.4$.\n\n**The Full Solution:**\nStep 1: The marginal probability of a senior uses the seniors' row/column total over the grand total.\nStep 2: With $80$ seniors out of $200$ students, $\\frac{80}{200} = 0.4$. Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($0.6$): reports the complement — students who are not seniors.\n* Choice C ($80$): reports the senior count, not a probability.\n* Choice D ($0.25$): divides by the wrong base, using a number unrelated to the $200$ total.\n\n**Test Day Takeaway:** For a marginal probability, use the row or column TOTAL over the grand total — not a single interior cell.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-204', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'medium', type: 'fill-in',
    question: 'In a survey of $300$ adults, $90$ are vegetarian. What is the marginal probability that a randomly chosen adult is NOT vegetarian? Express as a decimal.',
    correctAnswer: '0.7',
    explanation: "**SAT Pattern: Marginal Probability**\n\n**The correct answer is $0.7$.**\n\n**The Fast Way (~10s):** $90$ of $300$ are vegetarian, so the rest are $\\frac{300 - 90}{300} = \\frac{210}{300} = 0.7$.\n\n**The Full Solution:**\nStep 1: The probability of vegetarian is $\\frac{90}{300} = 0.3$.\nStep 2: NOT vegetarian is the complement: $1 - 0.3 = 0.7$. Equivalently, $\\frac{300 - 90}{300} = \\frac{210}{300} = 0.7$.\n\n**Common Mistakes:** Reporting $0.3$ (the vegetarian fraction, forgetting the \"NOT\"); reporting $210$ (the count instead of the decimal probability).\n\n**Test Day Takeaway:** \"NOT\" probability is $1$ minus the event's probability — subtract from $1$, or divide the leftover count by the total.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-205', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The two-way table below shows preferences of $200$ adults. What is the marginal probability of preferring tea?',
    diagram: { type: 'twoWayTable', params: { headers: ['', 'Tea', 'Coffee', 'Total'], rows: [['Men', '50', '60', '110'], ['Women', '30', '60', '90'], ['Total', '80', '120', '200']] } },
    choices: [{ id: 'A', text: '$0.4$' }, { id: 'B', text: '$0.6$' }, { id: 'C', text: '$0.5$' }, { id: 'D', text: '$80$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** A marginal probability is one category's total over the grand total. Tea total is $50+30=80$, so $\\frac{80}{200}=0.4$.\n\n**The Full Solution:**\nStep 1: The marginal total for \"tea\" sums every cell in the tea row: $50+30=80$.\nStep 2: Divide by the grand total of $200$ adults: $\\frac{80}{200}=0.4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($0.6$): the complement — the probability of NOT preferring tea, $1-0.4$.\n* Choice C ($0.5$): a guess from splitting the table in half rather than using the real counts.\n* Choice D ($80$): the marginal count itself, reported as if it were the probability — divide by the total to make it a probability.\n\n**Test Day Takeaway:** A marginal probability is always (row or column total) $\\div$ (grand total). Sum across the row first, then divide.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-206', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'medium', type: 'fill-in',
    question: 'A jar has $20$ red, $30$ blue, and $50$ green marbles. What is the probability of drawing a blue marble? Express as a decimal.',
    correctAnswer: '0.3',
    explanation: "**SAT Pattern: Marginal Probability**\n\n**The correct answer is $0.3$.**\n\n**The Fast Way (~10s):** Probability of blue is blue count over total: $\\frac{30}{20+30+50}=\\frac{30}{100}=0.3$.\n\n**The Full Solution:**\nStep 1: The total number of marbles is $20+30+50=100$.\nStep 2: There are $30$ blue marbles, so $P(\\text{blue})=\\frac{30}{100}=0.3$.\n\n**Common Mistakes:** Forgetting to add all three colors for the denominator (e.g., using $\\frac{30}{20+30}$); reporting the count $30$ instead of the decimal $0.3$.\n\n**Test Day Takeaway:** Probability of one outcome is its count divided by the total number of equally likely outcomes.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-207', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A school has $400$ students; $180$ are freshmen, $130$ are sophomores, $70$ are juniors, and the rest are seniors. What is the marginal probability of being a senior?',
    choices: [{ id: 'A', text: '$0.05$' }, { id: 'B', text: '$0.1$' }, { id: 'C', text: '$0.15$' }, { id: 'D', text: '$0.2$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Seniors are whoever is left: $400-180-130-70=20$. Then $\\frac{20}{400}=0.05$.\n\n**The Full Solution:**\nStep 1: The four classes must sum to $400$. Subtract the three known classes to find seniors: $400-180-130-70=20$.\nStep 2: Divide the senior count by the total: $\\frac{20}{400}=0.05$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($0.1$): used a senior count of $40$ instead of $20$ — a subtraction slip that doubles the answer.\n* Choice C ($0.15$): used a count of $60$, leaving out only two classes instead of three.\n* Choice D ($0.2$): used a count of $80$, confusing the senior group with a different subtotal.\n\n**Test Day Takeaway:** When one category is \"the rest,\" subtract the known categories from the total first, then divide.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-208', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'hard', type: 'fill-in',
    question: 'In a survey, $0.35$ of respondents are in age group A and $0.45$ are in age group B. What fraction of respondents are in neither A nor B? Express as a decimal.',
    correctAnswer: '0.2',
    explanation: "**SAT Pattern: Marginal Probability**\n\n**The correct answer is $0.2$.**\n\n**The Fast Way (~10s):** A and B are disjoint, so \"neither\" is everything left over: $1-0.35-0.45=0.20$.\n\n**The Full Solution:**\nStep 1: Every respondent falls into A, B, or neither, and these are non-overlapping, so the three fractions add to $1$.\nStep 2: Solve for \"neither\": $1-0.35-0.45=0.20$.\n\n**Common Mistakes:** Adding $0.35+0.45=0.80$ and stopping (that is the A-or-B fraction, not \"neither\"); subtracting only one of the two groups.\n\n**Test Day Takeaway:** For disjoint categories that cover everyone, all the probabilities sum to $1$; the leftover category is $1$ minus the rest.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  // ===== Phase 2 batch 14/5: conditional-probability-with-percent (8 items) =====
  { id: 'bank-ps-209', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'easy', type: 'multiple-choice',
    question: 'In a survey, $40\\%$ of people own a car, and $30\\%$ of car owners also own a bike. What percent of all surveyed people own BOTH a car AND a bike?',
    choices: [{ id: 'A', text: '$12\\%$' }, { id: 'B', text: '$70\\%$' }, { id: 'C', text: '$10\\%$' }, { id: 'D', text: '$30\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** \"Both\" chains the two percents: $P(\\text{both})=0.40\\cdot0.30=0.12=12\\%$.\n\n**The Full Solution:**\nStep 1: $40\\%$ own a car, so the base rate is $P(\\text{car})=0.40$.\nStep 2: The $30\\%$ is conditional — among car owners — so $P(\\text{bike}\\mid\\text{car})=0.30$.\nStep 3: $P(\\text{both})=P(\\text{car})\\cdot P(\\text{bike}\\mid\\text{car})=0.40\\cdot0.30=0.12=12\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($70\\%$): added the percents ($40+30$) instead of multiplying.\n* Choice C ($10\\%$): subtracted ($40-30$) — wrong operation entirely.\n* Choice D ($30\\%$): reported the conditional alone, ignoring that it only applies to the $40\\%$ who own a car.\n\n**Test Day Takeaway:** $P(A\\cap B)=P(A)\\cdot P(B\\mid A)$ — when a percent is \"of those,\" multiply it against the base rate.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-210', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'easy', type: 'fill-in',
    question: '$50\\%$ of students study Spanish, and $40\\%$ of those Spanish students also study French. What percent of ALL students study both?',
    correctAnswer: '20',
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~10s):** The $40\\%$ applies only to the Spanish students, so multiply: $0.50\\cdot0.40=0.20=20\\%$.\n\n**The Full Solution:**\nStep 1: $P(\\text{Spanish})=0.50$ is the base rate.\nStep 2: $P(\\text{French}\\mid\\text{Spanish})=0.40$ is conditional on studying Spanish.\nStep 3: $P(\\text{both})=0.50\\cdot0.40=0.20$, which is $20\\%$ of all students.\n\n**Common Mistakes:** Reporting $40$ (the conditional alone) or $90$ (adding $50+40$ instead of multiplying).\n\n**Test Day Takeaway:** \"Of those\" signals a conditional percent — multiply it by the base rate to get the share of the whole group.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-211', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'medium', type: 'multiple-choice',
    question: 'At a school, $60\\%$ of students play sports. Of those, $25\\%$ play soccer. What is the probability that a randomly chosen student plays soccer?',
    choices: [{ id: 'A', text: '$0.15$' }, { id: 'B', text: '$0.25$' }, { id: 'C', text: '$0.60$' }, { id: 'D', text: '$0.85$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** A random student plays soccer only if they both play sports and then play soccer: $0.60\\cdot0.25=0.15$.\n\n**The Full Solution:**\nStep 1: $P(\\text{sports})=0.60$ is the base rate.\nStep 2: $P(\\text{soccer}\\mid\\text{sports})=0.25$ applies only within the sports group.\nStep 3: $P(\\text{soccer})=0.60\\cdot0.25=0.15$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($0.25$): the conditional alone — ignores that only $60\\%$ play sports in the first place.\n* Choice C ($0.60$): the base rate alone — stops before applying the soccer fraction.\n* Choice D ($0.85$): added the probabilities ($0.60+0.25$) instead of multiplying.\n\n**Test Day Takeaway:** Chained conditional probabilities multiply: narrow from the whole group down through each \"of those\" step.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-212', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'medium', type: 'fill-in',
    question: 'In a city, $30\\%$ of households own a dog. If $20\\%$ of dog-owning households also own a cat, what fraction of all households own both? Express as a decimal.',
    correctAnswer: '0.06',
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**The correct answer is $0.06$.**\n\n**The Fast Way (~10s):** The cat percent applies only to dog owners, so multiply: $0.30\\cdot0.20=0.06$.\n\n**The Full Solution:**\nStep 1: $P(\\text{dog})=0.30$ is the base rate.\nStep 2: $P(\\text{cat}\\mid\\text{dog})=0.20$ is conditional on owning a dog.\nStep 3: $P(\\text{both})=0.30\\cdot0.20=0.06$.\n\n**Common Mistakes:** Reporting $0.20$ (the conditional alone) or $0.50$ (adding $0.30+0.20$ instead of multiplying).\n\n**Test Day Takeaway:** When the second percent is \"of those,\" multiply it by the base rate to get the joint fraction.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-213', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Of all customers, $40\\%$ buy coffee, and of those, $50\\%$ buy a pastry. What percent of all customers buy BOTH coffee and a pastry?',
    choices: [{ id: 'A', text: '$20\\%$' }, { id: 'B', text: '$10\\%$' }, { id: 'C', text: '$50\\%$' }, { id: 'D', text: '$90\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The pastry percent applies only to coffee buyers, so multiply: $0.40\\cdot0.50=0.20=20\\%$.\n\n**The Full Solution:**\nStep 1: $P(\\text{coffee})=0.40$ is the base rate.\nStep 2: $P(\\text{pastry}\\mid\\text{coffee})=0.50$ is conditional on buying coffee.\nStep 3: $P(\\text{both})=0.40\\cdot0.50=0.20=20\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($10\\%$): subtracted ($50-40$) — wrong operation.\n* Choice C ($50\\%$): the conditional alone, ignoring the $40\\%$ base rate.\n* Choice D ($90\\%$): added the percents ($40+50$) instead of multiplying.\n\n**Test Day Takeaway:** Joint percent $=$ unconditional percent $\\times$ conditional percent — multiply, never add.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-214', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'medium', type: 'fill-in',
    question: 'In a county election, $45\\%$ of registered voters identify with Party A. Among those Party A voters, $80\\%$ voted in the most recent election. What percent of all registered voters in the county are Party A AND voted in the most recent election? (Report only the number, without the % sign.)',
    correctAnswer: '36',
    explanation: "**SAT Pattern: Joint Probability via Multiplication**\n\n**The correct answer is $36$.**\n\n**The Fast Way (~10s):** Joint $=$ unconditional $\\cdot$ conditional $=0.45\\cdot0.80=0.36=36\\%$.\n\n**The Full Solution:**\nStep 1: $45\\%$ of all voters are Party A, so $P(\\text{Party A})=0.45$.\nStep 2: The $80\\%$ is conditional — among Party A voters — so $P(\\text{voted}\\mid\\text{Party A})=0.80$.\nStep 3: The share of the whole population that is both is $0.45\\cdot0.80=0.36=36\\%$.\n\nVerification: with $1000$ voters, Party A $=450$, and $80\\%$ of $450=360$, which is $36\\%$ of $1000$. $\\checkmark$\n\n**Common Mistakes:** Reporting $80$ (the conditional alone), $45$ (the marginal alone), or $125$ ($45+80$, adding instead of multiplying).\n\n**Test Day Takeaway:** \"X AND Y\" where Y is conditional on X means MULTIPLY the percentages as decimals — \"AND\" is the cue for multiplication.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-ps-215', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In a population, $20\\%$ have disease X. A test correctly identifies $90\\%$ of those with X. What is the probability that a random person both has disease X AND tests positive?',
    choices: [{ id: 'A', text: '$0.18$' }, { id: 'B', text: '$0.20$' }, { id: 'C', text: '$0.90$' }, { id: 'D', text: '$0.02$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** \"Has X AND tests positive\" chains the two rates: $0.20\\cdot0.90=0.18$.\n\n**The Full Solution:**\nStep 1: $P(\\text{disease X})=0.20$ is the base rate in the population.\nStep 2: The test correctly flags $90\\%$ of those with X, so $P(\\text{positive}\\mid X)=0.90$.\nStep 3: $P(X \\text{ and positive})=0.20\\cdot0.90=0.18$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($0.20$): the base rate alone — forgets to apply the test's detection rate.\n* Choice C ($0.90$): the conditional alone — forgets only $20\\%$ have the disease.\n* Choice D ($0.02$): multiplied by the false-negative rate $0.10$ instead of the $0.90$ detection rate.\n\n**Test Day Takeaway:** Joint $=P(\\text{disease})\\cdot P(\\text{positive}\\mid\\text{disease})$ — multiply the base rate by the conditional rate that matches the event.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },
  { id: 'bank-ps-216', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'hard', type: 'fill-in',
    question: 'A bag has $40$ marbles: $25\\%$ are red. Of the red marbles, $40\\%$ have a stripe. How many marbles in the bag are red AND striped?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~15s):** Apply the percents to the counts in order: $25\\%$ of $40$ is $10$ red, then $40\\%$ of $10$ is $4$ striped.\n\n**The Full Solution:**\nStep 1: Red marbles: $0.25\\cdot40=10$.\nStep 2: The stripe percent applies only to the red marbles: $0.40\\cdot10=4$.\n\n**Common Mistakes:** Reporting $10$ (the red count, stopping before applying the stripe rate); multiplying $0.25\\cdot0.40\\cdot40$ as decimals but mis-rounding; or applying $40\\%$ to all $40$ marbles instead of just the red ones.\n\n**Test Day Takeaway:** When a percent is \"of those,\" apply it to the running count from the previous step, not to the original total.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-11' },

  // ─── PERCENT COMPLEMENT (bank-ps-217..224) ────────────────────────────────
  // Granularity principle: 100% − x% is a percent operation, NOT probability.
  // Was previously mis-aliased to basic-probability. Now its own pattern.
  { id: 'bank-ps-217', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'easy', type: 'multiple-choice',
    question: 'In a town, $35\\%$ of residents own a car. What percent of residents do NOT own a car?',
    choices: [{ id: 'A', text: '$65\\%$' }, { id: 'B', text: '$35\\%$' }, { id: 'C', text: '$75\\%$' }, { id: 'D', text: '$135\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent Complement**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Owners and non-owners must total $100\\%$, so non-owners $= 100\\% - 35\\% = 65\\%$.\n\n**The Full Solution:**\nStep 1: Every resident either owns a car or does not, so the two groups sum to $100\\%$.\nStep 2: $100\\% - 35\\% = 65\\%$ do not own a car.\n\nCheck: $35\\% + 65\\% = 100\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($35\\%$): copies the given percent instead of taking the complement.\n* Choice C ($75\\%$): subtracts from $100$ but mis-reads the given as $25\\%$.\n* Choice D ($135\\%$): adds to $100\\%$ instead of subtracting — a percent of a whole can't exceed $100\\%$ here.\n\n**Test Day Takeaway:** \"NOT,\" \"don't,\" or \"remaining\" means complement — subtract the given percent from $100\\%$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-complement', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-ps-218', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'easy', type: 'fill-in',
    question: 'A survey found that $42\\%$ of students take a foreign language class. What percent of students do NOT take a foreign language class?',
    correctAnswer: '58',
    explanation: "**SAT Pattern: Percent Complement**\n\n**The correct answer is $58$.**\n\n**The Fast Way (~5s):** Complement: $100 - 42 = 58$.\n\n**The Full Solution:**\nEvery student either takes the class or does not, so the two groups sum to $100\\%$. If $42\\%$ take it, then $100\\% - 42\\% = 58\\%$ do not.\n\n**Common Mistakes:** Reporting $42$ (the given percent); reporting $52$ (subtracting a mis-read $48$ from $100$).\n\n**Test Day Takeaway:** A complement is one subtraction from $100\\%$. Don't overthink it.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-complement', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-ps-219', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A jacket is on sale for $\\$64$, which represents a $20\\%$ discount off the original price. What was the original price of the jacket, in dollars?',
    choices: [{ id: 'A', text: '$\\$51.20$' }, { id: 'B', text: '$\\$76.80$' }, { id: 'C', text: '$\\$80$' }, { id: 'D', text: '$\\$320$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Reverse Percent (Find Original from Sale)**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** A $20\\%$ discount leaves $80\\%$, so the sale price is $80\\%$ of the original $P$: $0.80P = 64 \\Rightarrow P = \\frac{64}{0.80} = 80$.\n\n**The Full Solution:**\nStep 1: A $20\\%$ discount means the buyer pays $100\\% - 20\\% = 80\\%$ of the original price.\nStep 2: $0.80 \\cdot P = 64$.\nStep 3: $P = \\frac{64}{0.80} = 80$.\n\nCheck: $20\\%$ of $\\$80$ is $\\$16$, and $\\$80 - \\$16 = \\$64$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$51.20$): discounts $\\$64$ again ($64 \\cdot 0.80$), treating the sale price as the original.\n* Choice B ($\\$76.80$): marks $\\$64$ up by $20\\%$ ($64 \\cdot 1.20$); a markup does not undo a discount.\n* Choice D ($\\$320$): divides by the discount rate ($\\frac{64}{0.20}$) instead of by the surviving fraction $0.80$.\n\n**Test Day Takeaway:** To reverse a discount, divide the sale price by the surviving fraction (the complement of the discount), not by the discount rate.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-complement', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },
  { id: 'bank-ps-220', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'fill-in',
    question: 'A class has $250$ students. $68\\%$ scored above the median on a test. How many students scored AT or BELOW the median?',
    correctAnswer: '80',
    explanation: "**SAT Pattern: Percent Complement**\n\n**The correct answer is $80$.**\n\n**The Fast Way (~10s):** At or below the median is the complement: $100\\% - 68\\% = 32\\%$, and $0.32 \\cdot 250 = 80$.\n\n**The Full Solution:**\nStep 1: Take the complement of the percent: $100\\% - 68\\% = 32\\%$.\nStep 2: Apply it to the count: $0.32 \\cdot 250 = 80$ students.\n\nCheck: $0.68 \\cdot 250 = 170$ above; $170 + 80 = 250$. $\\checkmark$\n\n**Common Mistakes:** Reporting $170$ (the above-median count); reporting $68$ (the given percent, not a count); reporting $32$ (the complement percent, not the count).\n\n**Test Day Takeaway:** Two moves — complement the percent, then multiply by the total. Don't stop at the percent.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-complement', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-ps-221', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A polling firm reports that $54\\%$ of voters support a proposal. If the firm interviewed $850$ voters, how many voters do NOT support the proposal?',
    choices: [{ id: 'A', text: '$391$' }, { id: 'B', text: '$459$' }, { id: 'C', text: '$46$' }, { id: 'D', text: '$54$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent Complement**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Non-supporters are the complement: $100\\% - 54\\% = 46\\%$, and $0.46 \\cdot 850 = 391$.\n\n**The Full Solution:**\nStep 1: Complement the percent: $100\\% - 54\\% = 46\\%$ do not support.\nStep 2: Apply to the count: $0.46 \\cdot 850 = 391$.\n\nCheck: $0.54 \\cdot 850 = 459$ supporters; $459 + 391 = 850$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($459$): the supporter count ($0.54 \\cdot 850$) — answers the opposite question.\n* Choice C ($46$): the complement percent reported as a count.\n* Choice D ($54$): the given support percent reported as a count.\n\n**Test Day Takeaway:** Confirm supporters $+$ non-supporters $=$ total to catch a wrong-group or percent-vs-count slip.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-complement', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-ps-222', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'fill-in',
    question: 'A bank account earns $5\\%$ interest, but the account holder pays $20\\%$ of the interest earned in taxes. What percent of the original interest does the account holder KEEP after taxes?',
    correctAnswer: '80',
    explanation: "**SAT Pattern: Percent Complement**\n\n**The correct answer is $80$.**\n\n**The Fast Way (~5s):** If $20\\%$ of the interest goes to tax, the complement is kept: $100\\% - 20\\% = 80\\%$.\n\n**The Full Solution:**\nThe question asks what fraction of the interest is kept after taxes. Paying $20\\%$ in tax leaves $100\\% - 20\\% = 80\\%$. The $5\\%$ interest rate never enters the calculation — it is a distractor.\n\nCheck: on $\\$100$ of interest, tax is $\\$20$ and kept is $\\$80 = 80\\%$. $\\checkmark$\n\n**Common Mistakes:** Reporting $20$ (the tax rate); reporting $5$ (the interest rate); reporting $4$ (combining $5\\%$ with the $80\\%$ kept).\n\n**Test Day Takeaway:** Identify which percent the question is asking about, then complement it — ignore numbers planted only to distract.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-complement', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-ps-223', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'hard', type: 'multiple-choice',
    question: 'On a quiz, $\\dfrac{3}{8}$ of the questions are multiple-choice. The rest are fill-in-the-blank. What percent of the questions are fill-in-the-blank?',
    choices: [{ id: 'A', text: '$62.5\\%$' }, { id: 'B', text: '$37.5\\%$' }, { id: 'C', text: '$50\\%$' }, { id: 'D', text: '$75\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent Complement**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $\\frac{3}{8} = 37.5\\%$ are multiple-choice, so fill-in is the complement: $100\\% - 37.5\\% = 62.5\\%$.\n\n**The Full Solution:**\nStep 1: Convert the fraction to a percent: $\\frac{3}{8} = 0.375 = 37.5\\%$ multiple-choice.\nStep 2: The rest are fill-in: $100\\% - 37.5\\% = 62.5\\%$.\n\nCheck: $\\frac{3}{8} + \\frac{5}{8} = 1$, and $\\frac{5}{8} = 0.625 = 62.5\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($37.5\\%$): the multiple-choice percent, not the fill-in group.\n* Choice C ($50\\%$): assumes an even split instead of using $\\frac{3}{8}$.\n* Choice D ($75\\%$): treats the fraction as $\\frac{3}{4}$ rather than $\\frac{3}{8}$.\n\n**Test Day Takeaway:** Convert the fraction to a percent first, then take the complement for \"the rest.\"",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-complement', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },

  { id: 'bank-ps-224', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'hard', type: 'fill-in',
    question: 'A factory inspects $400$ items and rejects $7.5\\%$ of them due to defects. How many items pass inspection?',
    correctAnswer: '370',
    explanation: "**SAT Pattern: Percent Complement**\n\n**The correct answer is $370$.**\n\n**The Fast Way (~10s):** Passing is the complement of rejected: $100\\% - 7.5\\% = 92.5\\%$, and $0.925 \\cdot 400 = 370$.\n\n**The Full Solution:**\nStep 1: Complement the reject rate: $100\\% - 7.5\\% = 92.5\\%$ pass.\nStep 2: Apply to the count: $0.925 \\cdot 400 = 370$.\n\nCheck: rejected $= 0.075 \\cdot 400 = 30$; $30 + 370 = 400$. $\\checkmark$\n\n**Common Mistakes:** Reporting $30$ (the rejected count); reporting $92.5$ (the pass percent, not the count); reporting $7.5$ (the reject percent).\n\n**Test Day Takeaway:** A \"reject/fail/discard rate\" makes the complement the \"pass/accept/keep\" count — then verify pass $+$ fail $=$ total.",
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
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Multiply the percents as decimals: $0.20 \\cdot 0.50 = 0.10 = 10\\%$.\n\n**The Full Solution:**\nStep 1: Write the relationships: $a = 0.20b$ and $b = 0.50c$.\nStep 2: Substitute the second into the first: $a = 0.20(0.50c) = 0.10c$, so $a$ is $10\\%$ of $c$.\n\nCheck: let $c = 100$. Then $b = 50$ and $a = 0.20 \\cdot 50 = 10$, so $\\frac{a}{c} = \\frac{10}{100} = 10\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($30\\%$): subtracts the percents ($50 - 20$); the chain is multiplicative.\n* Choice C ($40\\%$): divides ($\\frac{20}{50}$), which gives $\\frac{a}{b}$, not $\\frac{a}{c}$.\n* Choice D ($70\\%$): adds the percents ($20 + 50$); chained percents don't add.\n\n**Test Day Takeaway:** When percents chain through a middle variable, multiply them as decimals — the middle variable cancels in the substitution.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'chained-percent-relationship', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-226', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'easy', type: 'multiple-choice',
    question: '$x$ is $40\\%$ of $y$, and $y$ is $25\\%$ of $z$. What is $x$ as a percent of $z$?',
    choices: [{ id: 'A', text: '$10\\%$' }, { id: 'B', text: '$15\\%$' }, { id: 'C', text: '$65\\%$' }, { id: 'D', text: '$160\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Multiply the percents as decimals: $0.40 \\cdot 0.25 = 0.10 = 10\\%$.\n\n**The Full Solution:**\nStep 1: Write the relationships: $x = 0.40y$ and $y = 0.25z$.\nStep 2: Substitute: $x = 0.40(0.25z) = 0.10z$, so $x$ is $10\\%$ of $z$.\n\nCheck: let $z = 200$. Then $y = 50$ and $x = 0.40 \\cdot 50 = 20$, so $\\frac{x}{z} = \\frac{20}{200} = 10\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($15\\%$): subtracts ($40 - 25$) — wrong operation.\n* Choice C ($65\\%$): adds ($40 + 25$); chained percents are not additive.\n* Choice D ($160\\%$): reverses the ratio ($\\frac{40}{25}$), describing $z$ in terms of $y$, not $x$ in terms of $z$.\n\n**Test Day Takeaway:** Chained percents multiply; the middle variable cancels by substitution.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'chained-percent-relationship', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-227', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'medium', type: 'fill-in',
    question: 'If $a$ is $45\\%$ of $b$, and $b$ is $15\\%$ of $c$, what is $a$ as a percent of $c$? (Report only the number, without the % sign.)',
    correctAnswer: '6.75',
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**The correct answer is $6.75$.**\n\n**The Fast Way (~10s):** Multiply the percents as decimals: $0.45 \\cdot 0.15 = 0.0675 = 6.75\\%$.\n\n**The Full Solution:**\nStep 1: Write the relationships: $a = 0.45b$ and $b = 0.15c$.\nStep 2: Substitute: $a = 0.45(0.15c) = 0.0675c$, so $a$ is $6.75\\%$ of $c$. Report $6.75$.\n\nCheck: let $c = 1000$. Then $b = 150$ and $a = 0.45 \\cdot 150 = 67.5$, so $\\frac{a}{c} = \\frac{67.5}{1000} = 6.75\\%$. $\\checkmark$\n\n**Common Mistakes:** Reporting $60$ ($45 + 15$, sum trap); reporting $30$ ($45 - 15$, subtraction trap); reporting $67.5$ (the value of $a$ when $c = 1000$, not the percent asked for).\n\n**Test Day Takeaway:** Convert each percent to a decimal, multiply, then convert back — chained percents always multiply.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'chained-percent-relationship', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-228', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'medium', type: 'multiple-choice',
    question: '$p$ is $80\\%$ of $q$, and $q$ is $25\\%$ less than $r$. What is $p$ as a percent of $r$?',
    choices: [{ id: 'A', text: '$55\\%$' }, { id: 'B', text: '$60\\%$' }, { id: 'C', text: '$100\\%$' }, { id: 'D', text: '$105\\%$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"$25\\%$ less than $r$\" means $q = 0.75r$, so $p = 0.80 \\cdot 0.75 \\cdot r = 0.60r = 60\\%$ of $r$.\n\n**The Full Solution:**\nStep 1: Turn \"$q$ is $25\\%$ less than $r$\" into a percent of $r$: $q = r - 0.25r = 0.75r$.\nStep 2: Substitute into $p = 0.80q$: $p = 0.80(0.75r) = 0.60r$, so $p$ is $60\\%$ of $r$.\n\nCheck: let $r = 100$. Then $q = 75$ and $p = 0.80 \\cdot 75 = 60$, so $\\frac{p}{r} = \\frac{60}{100} = 60\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($55\\%$): subtracts the percents ($80 - 25$); they are not in the same direction.\n* Choice C ($100\\%$): reads \"less\" as \"more\" and uses $0.80 \\cdot 1.25 = 1.00$.\n* Choice D ($105\\%$): adds the percents ($80 + 25$) — wrong operation.\n\n**Test Day Takeaway:** \"$X\\%$ less than\" gives the multiplier $\\left(1 - \\frac{X}{100}\\right)$; \"$X\\%$ greater than\" gives $\\left(1 + \\frac{X}{100}\\right)$. Convert the comparison to a multiplier before chaining.",
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
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** A random sample only justifies a claim about the group it was drawn from. The sample was ninth-graders at this one school, so the estimate generalizes to exactly that group: Choice C.\n\n**The Full Solution:**\nStep 1: Identify who was actually sampled — $300$ randomly selected ninth-grade students at this school.\nStep 2: A random sample supports inference about the population it was drawn from, and no wider. That population is \"ninth-grade students at the surveyed school.\"\nStep 3: Choice C names that population precisely.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"all students nationwide\" extends to schools and grades that were never sampled — a huge overreach.\n* Choice B: \"all high schoolers in the district\" pulls in other grades and other schools that weren't part of the sample.\n* Choice D: \"all college freshmen\" is an entirely different population with no connection to the data.\n\n**Test Day Takeaway:** Pin down exactly WHO was randomly sampled. The conclusion applies to that group and never to a broader one.",
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
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The estimate generalizes only to the population that was sampled. The sample is registered voters in Springfield, so the conclusion applies to that exact group: Choice A.\n\n**The Full Solution:**\nStep 1: Identify the sampled population — $500$ randomly sampled registered voters in Springfield.\nStep 2: Random sampling supports inference about that population and nothing wider.\nStep 3: Choice A restates that population without expanding it.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"all adults in Springfield\" is broader than \"registered voters\" — unregistered adults were never sampled and may hold different views.\n* Choice C: \"all registered voters in the state\" extrapolates beyond the city that was sampled.\n* Choice D: \"all park users\" is a different group that was never surveyed; park users need not be voters.\n\n**Test Day Takeaway:** \"Registered voters\" is NARROWER than \"adults\" or \"residents.\" Never widen the population beyond what was actually sampled.",
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
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Only $4{,}000$ of $50{,}000$ customers chose to respond. When response is voluntary, responders may differ systematically from non-responders — non-response bias, Choice B.\n\n**The Full Solution:**\nStep 1: The survey was sent to all $50{,}000$, but the $4{,}000$ who answered self-selected.\nStep 2: The $46{,}000$ who stayed silent could feel differently about the service, so the responding group need not represent everyone.\nStep 3: That gap between responders and non-responders is exactly non-response bias — Choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: $4{,}000$ is a large sample for a $50{,}000$-person population; size is not the problem, WHO responded is.\n* Choice C: generic skepticism about measuring satisfaction — it doesn't address generalization at all.\n* Choice D: a subjective opinion about the value, not a methodological flaw.\n\n**Test Day Takeaway:** Voluntary response (online surveys, opt-in panels, reviews) over-represents people with strong opinions. A low response rate flags non-response bias, not small sample size.",
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
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** A random sample from one hospital's patients $\\Rightarrow$ inference about that hospital's patients. That is Choice B.\n\n**The Full Solution:**\nStep 1: Identify the sampled population — $400$ adult patients randomly drawn from a single urban hospital.\nStep 2: The inference is bounded to the population that was sampled: adult patients of this urban hospital.\nStep 3: Patients elsewhere may differ in demographics, severity, or prior treatment, so the result cannot be pushed wider. Choice B fits exactly.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"all adults with high blood pressure\" is far broader than this hospital's patients.\n* Choice C: \"all urban-hospital patients nationwide\" assumes other urban hospitals serve the same population — they may not.\n* Choice D: \"all adults nationwide\" is the broadest claim and the largest overreach.\n\n**Test Day Takeaway:** A single-site study generalizes only to that site's population. Multi-site sampling is what earns a broader claim.",
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
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The panel members VOLUNTARILY signed up, so they self-selected. Volunteers differ systematically from typical users — self-selection bias, Choice B.\n\n**The Full Solution:**\nStep 1: The $200$ users were not randomly drawn; they opted in to a feedback panel.\nStep 2: People who choose to give feedback tend to be more engaged and often more positive than the general user base.\nStep 3: That systematic difference between volunteers and everyone else is self-selection bias — Choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: $200$ is a workable sample size; the flaw is how the sample was formed, not its size.\n* Choice C: a subjective complaint about the $75\\%$ figure, not a methodological critique.\n* Choice D: email reliability has nothing to do with whether the sample represents all users.\n\n**Test Day Takeaway:** \"Volunteered,\" \"signed up,\" or \"opted in\" should immediately trigger the self-selection flag. Random sampling is the fix.",
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
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** A random sample with a margin of error supports an estimate WITH uncertainty, for the population sampled. That is Choice A: about $40\\%$ of California high schoolers, within $\\pm 4\\%$ at $95\\%$ confidence.\n\n**The Full Solution:**\nStep 1: The sample is $600$ randomly chosen California high school students — the population is California high schoolers.\nStep 2: A margin of error means the true rate is estimated to lie inside an interval ($40\\% \\pm 4\\%$) at the stated confidence, not pinned to an exact number.\nStep 3: Choice A keeps both the right population and the margin-of-error window.\n\n**Why the wrong answers are tempting:**\n* Choice B: claims \"exactly $40\\%$\" — drops the margin of error and treats the sample value as the precise population value.\n* Choice C: extrapolates from California to the whole U.S. with no data on other states.\n* Choice D: a policy recommendation, not a statistical conclusion.\n\n**Test Day Takeaway:** Nail two things: the SAMPLED population and the margin-of-error window. Drop neither.",
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
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** A random sample drawn from Iowa AND Nebraska supports a claim about adults in those two states combined — within the margin of error. That is Choice B.\n\n**The Full Solution:**\nStep 1: The $800$ adults were sampled across exactly two states, Iowa and Nebraska.\nStep 2: Inference is bounded to the population sampled: adults in those two states.\nStep 3: A polling estimate carries uncertainty, so \"approximately $58\\%$, within the margin of error\" is the precise phrasing. Choice B matches.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"nationwide\" is far broader; two states do not represent the whole country.\n* Choice C: \"any Midwestern state\" overreaches — Iowa and Nebraska are not a random sample of Midwestern states.\n* Choice D: the data is pooled across both states, so no sub-group or per-aspect claim is supported.\n\n**Test Day Takeaway:** \"Sampled from X and Y\" generalizes only to X and Y combined — never to states \"similar to\" them.",
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
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Random ASSIGNMENT inside the group earns a causal claim; a CONVENIENCE sample (one intro class) bounds generalization. Choice A is the only option that threads both.\n\n**The Full Solution:**\nStep 1: The $100$ students were recruited from one introductory class — a convenience sample, not a random sample of any broader population.\nStep 2: Within that group, students were RANDOMLY ASSIGNED to techniques, which controls for confounders and supports a causal conclusion.\nStep 3: So the defensible claim is causal but limited: Technique A produces higher recall in students like those in this class, and no further. Choice A states exactly this.\n\n**Why the wrong answers are tempting:**\n* Choice B: the causal claim is fine, but \"for everyone\" overgeneralizes from a convenience sample.\n* Choice C: this is the rule for OBSERVATIONAL studies — but random assignment DOES license causation, so \"causation cannot be inferred\" is wrong here.\n* Choice D: a speculative claim with no supporting data.\n\n**Test Day Takeaway:** Random ASSIGNMENT and random SAMPLING are different decisions. Assignment $\\Rightarrow$ causal claim within the studied group; sampling $\\Rightarrow$ generalization to a broader population. Match the conclusion to which one is present.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scope-of-inference', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── PERCENT GREATER THAN / LESS THAN (bank-ps-249..256) ──────────────────
  // Verbal framing translation: "y is X% greater than z" → y = (1 + X/100)·z;
  // "y is X% less than z" → y = (1 − X/100)·z. Distinct from percent-decrease
  // (compute change from two given numbers). See audit §B3.
  { id: 'bank-ps-249', domain: 'problem-solving', skills: ['percent-of-value', 'percent-change'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $a$ is $30\\%$ greater than $40$, what is the value of $a$?',
    choices: [{ id: 'A', text: '$12$' }, { id: 'B', text: '$28$' }, { id: 'C', text: '$52$' }, { id: 'D', text: '$70$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** \"$30\\%$ greater than\" means multiply by $1.30$. So $a = 1.30 \\cdot 40 = 52$ — Choice C.\n\n**The Full Solution:**\nStep 1: \"$30\\%$ greater than $40$\" is $40$ plus $30\\%$ of $40$: $a = 40 + 0.30 \\cdot 40 = 40 + 12 = 52$.\nStep 2: Equivalently, $a$ is $130\\%$ of $40$: $a = 1.30 \\cdot 40 = 52$.\nStep 3: Check: $52 - 40 = 12$, and $\\frac{12}{40} = 0.30 = 30\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): reports the increase ($30\\%$ of $40$), not the new value.\n* Choice B ($28$): subtracts the $12$ instead of adding it — used \"less than\" by mistake.\n* Choice D ($70$): treats the percent as the raw number $30$ and adds: $40 + 30 = 70$.\n\n**Test Day Takeaway:** \"$X\\%$ greater than $V$\" $\\Rightarrow$ multiply $V$ by $\\left(1 + \\frac{X}{100}\\right)$. Keep the leading $1$ (the original value), and convert the percent to a decimal.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-greater-than-less-than', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-250', domain: 'problem-solving', skills: ['percent-of-value', 'percent-change'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The value of $y$ is $20\\%$ less than $80$. What is the value of $y$?',
    choices: [{ id: 'A', text: '$16$' }, { id: 'B', text: '$60$' }, { id: 'C', text: '$64$' }, { id: 'D', text: '$96$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** \"$20\\%$ less than\" means multiply by $0.80$. So $y = 0.80 \\cdot 80 = 64$ — Choice C.\n\n**The Full Solution:**\nStep 1: \"$20\\%$ less than $80$\" is $80$ minus $20\\%$ of $80$: $y = 80 - 0.20 \\cdot 80 = 80 - 16 = 64$.\nStep 2: Equivalently, $y$ is $80\\%$ of $80$: $0.80 \\cdot 80 = 64$.\nStep 3: Check: $80 - 64 = 16$, and $\\frac{16}{80} = 0.20 = 20\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($16$): reports the decrease ($20\\%$ of $80$), not the resulting value.\n* Choice B ($60$): treats the percent as the raw number $20$ and subtracts: $80 - 20 = 60$.\n* Choice D ($96$): used \"greater than\" instead of \"less than\": $80 \\cdot 1.20 = 96$.\n\n**Test Day Takeaway:** \"$X\\%$ less than $V$\" $\\Rightarrow$ multiply $V$ by $\\left(1 - \\frac{X}{100}\\right)$. The result is always smaller than $V$.",
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
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** \"$40\\%$ greater than $q$\" means multiply $q$ by $1.40$, so $p = 1.40q$ — Choice B.\n\n**The Full Solution:**\nStep 1: $p$ is $q$ plus $40\\%$ of $q$: $p = q + 0.40q = 1.40q$.\nStep 2: Equivalently, $p$ is $140\\%$ of $q$.\nStep 3: Check with $q = 10$: $40\\%$ greater than $10$ is $14 = 1.40 \\cdot 10$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($p = 0.40q$): drops the leading $1$ — this is $40\\%$ OF $q$, which is smaller than $q$, not greater.\n* Choice C ($p = q + 40$): treats the percent as a raw number added on, ignoring that the increase scales with $q$.\n* Choice D ($p = 0.60q$): uses the \"less than\" multiplier ($1 - 0.40$).\n\n**Test Day Takeaway:** Always keep the leading $1$ for \"$X\\%$ greater than\": $p = \\left(1 + \\frac{X}{100}\\right)q$. The $1$ holds the original; the $\\frac{X}{100}$ adds the increase.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-greater-than-less-than', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-252', domain: 'problem-solving', skills: ['percent-of-value', 'percent-change'], difficulty: 'medium', type: 'fill-in',
    question: 'If $m$ is $15\\%$ less than $n$, and $n = 200$, what is the value of $m$?',
    correctAnswer: '170',
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**The correct answer is $170$.**\n\n**The Fast Way (~5s):** \"$15\\%$ less than\" means multiply by $0.85$. So $m = 0.85 \\cdot 200 = 170$.\n\n**The Full Solution:**\nStep 1: $m = n - 0.15n = 0.85n$.\nStep 2: Substitute $n = 200$: $m = 0.85 \\cdot 200 = 170$.\nStep 3: Check: $200 - 170 = 30$, and $\\frac{30}{200} = 0.15 = 15\\%$. $\\checkmark$\n\n**Common Mistakes:** Reporting $30$ (the $15\\%$ decrease amount, not the resulting value); reporting $185$ (treating the percent as the raw number $15$: $200 - 15$); reporting $230$ (using the \"greater than\" multiplier $1.15$).\n\n**Test Day Takeaway:** \"$X\\%$ less than $V$\" $\\Rightarrow$ multiply $V$ by $\\left(1 - \\frac{X}{100}\\right)$. That multiplier is always less than $1$, so the value shrinks.",
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
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~15s):** Find the slope, then back out $b$. Slope $=\\frac{30-18}{10-4}=\\frac{12}{6}=2$. Plug $(4,18)$ into $y=2x+b$: $18=2(4)+b\\Rightarrow b=10$.\n\n**The Full Solution:**\nStep 1: Two points define the line. Compute the slope: $m=\\frac{30-18}{10-4}=\\frac{12}{6}=2$.\nStep 2: The $y$-intercept is the value of $b$ in $y=mx+b$. Substitute either point — use $(4,18)$: $18=2(4)+b$.\nStep 3: Solve: $18=8+b\\Rightarrow b=10$. Check with $(10,30)$: $2(10)+10=30$. $\\checkmark$\n\n**Common Mistakes:** Reporting $2$ (that is the slope, not the intercept); reporting $18$ or $30$ (those are given $y$-values at $x=4$ and $x=10$, not at $x=0$).\n\n**Test Day Takeaway:** From two points, find the slope first, then substitute one point into $y=mx+b$ to solve for the intercept $b$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-intercept-of-best-fit', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── Q.F. healthy-push tail (bank-ps-338..340) ────────────────────────────
  { id: 'bank-ps-338', domain: 'problem-solving', skills: ['margin-of-error'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A researcher reports the sample mean of a daily commute time as $42$ minutes with a $95\\%$ margin of error of $\\pm 3$ minutes. The $95\\%$ confidence interval is best described as:',
    choices: [{ id: 'A', text: 'The range $[39, 45]$ minutes contains the population mean with $95\\%$ confidence.' }, { id: 'B', text: '$95\\%$ of commuters take between $39$ and $45$ minutes.' }, { id: 'C', text: 'The next person sampled will commute for $42$ minutes.' }, { id: 'D', text: 'The error in the survey is $\\pm 3$ minutes.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Margin of Error**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The interval is $42\\pm 3=[39,45]$, and a confidence interval is a statement about the **population mean**, not individuals. Only choice A says that.\n\n**The Full Solution:**\nStep 1: Build the interval: estimate $\\pm$ margin of error $=42\\pm 3=[39,45]$ minutes.\nStep 2: Read what a $95\\%$ confidence interval claims: with $95\\%$ confidence, the interval captures the true population mean.\nStep 3: Choice A states exactly this — the range $[39,45]$ contains the population mean with $95\\%$ confidence.\n\n**Why the wrong answers are tempting:**\n* Choice B: applies the interval to individual commuters (\"$95\\%$ of commuters\"). A CI bounds the mean, not the spread of individuals.\n* Choice C: predicts one future observation; a CI says nothing about a single next value.\n* Choice D: restates the margin of error but ignores the interval and what it estimates.\n\n**Test Day Takeaway:** A confidence interval is estimate $\\pm$ margin of error, and it bounds the population **parameter** (the mean or proportion) — never individual observations.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'margin-of-error', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-339', domain: 'problem-solving', skills: ['margin-of-error'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A poll of $250$ adults reports $63\\%$ favor an issue with margin of error $\\pm 6\\%$ at $95\\%$ confidence. If a second poll of $4{,}000$ adults uses the same methodology, what is the approximate new MOE?',
    choices: [{ id: 'A', text: '$\\pm 0.4\\%$' }, { id: 'B', text: '$\\pm 1.5\\%$' }, { id: 'C', text: '$\\pm 3\\%$' }, { id: 'D', text: '$\\pm 6\\%$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Margin of error scales as $\\frac{1}{\\sqrt{n}}$. The sample grows by a factor of $\\frac{4000}{250}=16$, so the MOE shrinks by $\\sqrt{16}=4$: $\\frac{6\\%}{4}=1.5\\%$.\n\n**The Full Solution:**\nStep 1: With the same methodology, MOE depends on sample size as MOE $\\propto \\frac{1}{\\sqrt{n}}$.\nStep 2: The size multiplier is $\\frac{4000}{250}=16$.\nStep 3: Dividing $n$'s effect through the square root, the MOE divides by $\\sqrt{16}=4$. So new MOE $=\\frac{6\\%}{4}=1.5\\%$, choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\pm 0.4\\%$): divided by $16$ instead of by $\\sqrt{16}$ — forgot the square root.\n* Choice C ($\\pm 3\\%$): halved the MOE, as if $n$ only quadrupled.\n* Choice D ($\\pm 6\\%$): left the MOE unchanged, ignoring the larger sample.\n\n**Test Day Takeaway:** Quadrupling the sample halves the margin of error. In general, multiply $n$ by $k$ and the MOE divides by $\\sqrt{k}$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'sample-size-for-margin-reduction', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-340', domain: 'problem-solving', skills: ['margin-of-error'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A polling firm reports a $95\\%$ confidence interval of $[44\\%, 56\\%]$ for the proportion of voters supporting a candidate. Based on this CI, which statement is most defensible?',
    choices: [{ id: 'A', text: 'A majority of the population definitely supports the candidate.' }, { id: 'B', text: 'A majority of the population definitely opposes the candidate.' }, { id: 'C', text: 'The data is consistent with the true proportion being a non-majority OR a majority.' }, { id: 'D', text: 'The survey has $50\\%$ accuracy.' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The interval $[44\\%,56\\%]$ straddles $50\\%$, so the data supports a true proportion that could be a minority **or** a majority. That is choice C.\n\n**The Full Solution:**\nStep 1: A $95\\%$ confidence interval gives the plausible range for the true proportion: from $44\\%$ to $56\\%$.\nStep 2: Check whether the majority threshold $50\\%$ lies inside the interval. Since $44\\% < 50\\% < 56\\%$, it does.\nStep 3: Because both non-majority values (below $50\\%$) and majority values (above $50\\%$) are inside the interval, no definitive claim about majority support holds. Choice C is the defensible statement.\n\n**Why the wrong answers are tempting:**\n* Choice A: claims a definite majority, but values below $50\\%$ are still plausible.\n* Choice B: claims definite opposition, but values above $50\\%$ are still plausible.\n* Choice D: \"$50\\%$ accuracy\" misreads the interval as an accuracy rate.\n\n**Test Day Takeaway:** When a confidence interval crosses a meaningful threshold (like $50\\%$), the data cannot rule out either side — report both possibilities as consistent.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'confidence-interval-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── Q.D. healthy-push tail (bank-ps-341..342) ────────────────────────────
  { id: 'bank-ps-341', domain: 'problem-solving', skills: ['slope-from-points', 'scatterplots'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The scatterplot has a line of best fit with equation $\\hat{y} = -1.5 x + 60$, where $x$ is the day number and $y$ is the count of widgets remaining. Approximately when does the model predict the count will reach $0$?',
    diagram: { type: 'scatterplot', params: { points: [[2,56],[5,53],[8,49],[12,42],[16,35],[20,29],[24,24],[28,18],[32,11],[36,5]], xMin: 0, xMax: 42, yMin: 0, yMax: 65, xGridStep: 4, yGridStep: 10, xLabelStep: 8, yLabelStep: 20, xLabel: 'Day', yLabel: 'Widgets remaining', bestFitLine: { slope: -1.5, intercept: 60 } } },
    choices: [{ id: 'A', text: '$\\text{day } 0$' }, { id: 'B', text: '$\\text{day } 40$' }, { id: 'C', text: '$\\text{day } 60$' }, { id: 'D', text: '$\\text{day } 90$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"Count reaches $0$\" means $\\hat{y}=0$. Set $-1.5x+60=0\\Rightarrow x=40$, so day $40$.\n\n**The Full Solution:**\nStep 1: The count remaining is $\\hat{y}$, so \"reaches $0$\" means setting $\\hat{y}=0$.\nStep 2: Solve $-1.5x+60=0\\Rightarrow 1.5x=60\\Rightarrow x=40$.\nStep 3: At $x=40$ the model predicts $0$ widgets remaining, choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A (day $0$): reports the starting day instead of solving for the zero.\n* Choice C (day $60$): uses the intercept value $60$ as the day, ignoring the slope.\n* Choice D (day $90$): divides $60$ by something other than $1.5$, or mishandles the slope.\n\n**Test Day Takeaway:** To find when a linear model hits a specific value, substitute that value for $\\hat{y}$ and solve for $x$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'interpret-slope-of-best-fit', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-ps-342', domain: 'problem-solving', skills: ['slope-from-points', 'scatterplots'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The scatterplot shows weight (in pounds) versus age (in years) for a sample of dogs. The line of best fit has a positive slope of $1.2$ pounds per year. A specific dog on the scatterplot at age $5$ years and weight $24$ pounds has a residual of $+2$. What is the predicted weight from the line, in pounds?',
    diagram: { type: 'scatterplot', params: { points: [[1,18],[2,18],[3,19],[4,21],[5,24],[6,23],[7,25],[8,27],[9,28],[10,29]], xMin: 0, xMax: 11, yMin: 14, yMax: 32, xGridStep: 1, yGridStep: 2, xLabelStep: 2, yLabelStep: 4, xLabel: 'Age (years)', yLabel: 'Weight (lb)', bestFitLine: { slope: 1.2, intercept: 16 }, highlightPoint: [5, 24], highlightLabel: '(5, 24)', showResidual: true } },
    choices: [{ id: 'A', text: '$20$' }, { id: 'B', text: '$22$' }, { id: 'C', text: '$24$' }, { id: 'D', text: '$26$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Residual $=$ observed $-$ predicted. So $+2=24-\\text{predicted}\\Rightarrow \\text{predicted}=22$, choice B.\n\n**The Full Solution:**\nStep 1: The residual is defined as observed value minus the value the line predicts: residual $=$ observed $-$ predicted.\nStep 2: Substitute the given numbers: $+2=24-\\text{predicted}$.\nStep 3: Solve: predicted $=24-2=22$ pounds, choice B. (The slope $1.2$ is a distractor — you don't need it.)\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): subtracted twice the residual, or used $24-4$.\n* Choice C ($24$): reported the observed weight instead of the predicted one.\n* Choice D ($26$): added the residual instead of subtracting — used $24+2$ and got the sign backward.\n\n**Test Day Takeaway:** Residual $=$ observed $-$ predicted. A positive residual means the point sits **above** the line, so the line's prediction is **lower** than the observed value.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'residual', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── Q.C. MODE FROM LIST (bank-ps-343..348) — top-up to ≥8 ────────────────
  // Already have 2 (Mode Identification, Mode of Shoe Sizes); aliases land
  // them under `mode-from-list`. Adding 6 more for the Tier-1 threshold.
  { id: 'bank-ps-343', domain: 'problem-solving', skills: ['find-mode'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The dot plot below shows the number of pages read each day for one week. What is the mode?',
    diagram: { type: 'dotPlot', params: { data: [{ value: 7, count: 1 }, { value: 9, count: 2 }, { value: 12, count: 3 }, { value: 14, count: 1 }], xMin: 5, xMax: 16, xLabel: 'Pages read' } },
    choices: [{ id: 'A', text: '$7$' }, { id: 'B', text: '$9$' }, { id: 'C', text: '$12$' }, { id: 'D', text: '$14$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Mode from List**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** The mode is the tallest stack. The value $12$ has $3$ dots; every other value has at most $2$. Mode $=12$, choice C.\n\n**The Full Solution:**\nStep 1: In a dot plot, the mode is the value with the most dots above it.\nStep 2: Tally the stacks: $12$ has the tallest column ($3$ dots), and no other value reaches $3$.\nStep 3: So the mode is $12$, choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): the smallest value — confuses mode with minimum.\n* Choice B ($9$): the second-most-frequent value ($2$ dots), not the most frequent.\n* Choice D ($14$): the largest value — confuses mode with maximum.\n\n**Test Day Takeaway:** Mode $=$ the value that appears most often. In a dot plot, that is simply the tallest stack of dots.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'mode-from-list', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-344', domain: 'problem-solving', skills: ['find-mode'], difficulty: 'easy', type: 'fill-in',
    question: 'A bowler\'s scores in $9$ games were: $185, 200, 165, 200, 180, 200, 175, 190, 200$. What is the mode of these scores?',
    correctAnswer: '200',
    explanation: "**SAT Pattern: Mode from List**\n\n**The correct answer is $200$.**\n\n**The Fast Way (~5s):** Scan for the repeated value: $200$ shows up $4$ times; every other score appears once. Mode $=200$.\n\n```seva-figure\n{\"type\":\"dotPlot\",\"params\":{\"data\":[{\"value\":165,\"count\":1},{\"value\":175,\"count\":1},{\"value\":180,\"count\":1},{\"value\":185,\"count\":1},{\"value\":190,\"count\":1},{\"value\":200,\"count\":4}],\"xMin\":164,\"xMax\":201},\"caption\":\"The data set, sorted onto a number line.\"}\n```\n\n**The Full Solution:**\nStep 1: The mode is the value with the highest frequency.\nStep 2: Tally: $200$ appears at positions $2$, $4$, $6$, and $9$ — four times. All other scores ($185,165,180,175,190$) appear exactly once.\nStep 3: The most frequent score is $200$.\n\n**Common Mistakes:** Averaging the scores (that gives the mean, not the mode); reporting the middle value after sorting (that is the median).\n\n**Test Day Takeaway:** Mode $=$ the value with the highest frequency — not the average and not the middle.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'mode-from-list', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-345', domain: 'problem-solving', skills: ['find-mode'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The frequency table below shows the number of siblings reported by students in a class. What is the mode of the number of siblings?',
    diagram: { type: 'dataTable', params: { headers: ['Siblings', 'Frequency'], rows: [['0', '4'], ['1', '9'], ['2', '11'], ['3', '5'], ['4', '2']] } },
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Mode from List**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Find the row with the largest frequency ($11$), then read the **value** in that row: $2$ siblings. Choice B.\n\n**The Full Solution:**\nStep 1: In a frequency table, the mode is the value (left column) whose frequency (right column) is largest.\nStep 2: The biggest frequency is $11$.\nStep 3: The sibling count paired with frequency $11$ is $2$, so the mode is $2$, choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): the second-highest frequency row (frequency $9$, for $1$ sibling).\n* Choice C ($11$): reports the frequency itself instead of the value that occurs that many times.\n* Choice D ($5$): an unrelated value from the table.\n\n**Test Day Takeaway:** In a frequency table, the mode is the value with the highest frequency — read across to the value column, never report the count itself.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'mode-from-list', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-346', domain: 'problem-solving', skills: ['find-mode'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The data set $\\{5, 8, 8, 10, 12, x\\}$ has a single mode of $8$. Which of the following must be the value of $x$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$10$' }, { id: 'D', text: '$12$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Mode from List**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Right now $8$ appears twice and everything else once. To keep a **single** mode, $8$ must stay strictly the most frequent — so $x$ must be another $8$. Choice B.\n\n**The Full Solution:**\nStep 1: Count the existing set $\\{5,8,8,10,12\\}$: $8$ has count $2$; each of $5,10,12$ has count $1$.\nStep 2: If $x$ equals any value other than $8$ (say $x=5$), that value rises to count $2$, tying $8$ — now there are two modes, violating \"single mode of $8$.\"\nStep 3: Only $x=8$ raises $8$'s count to $3$, leaving it strictly ahead of every other value. So $x=8$, choice B.\n\n**Why the wrong answers are tempting:**\n* Choices A ($5$), C ($10$), D ($12$): each ties that value with $8$ at count $2$, creating two modes rather than a single mode.\n\n**Test Day Takeaway:** For a list to have a single mode $m$, $m$ must appear strictly more often than every other value — a tie kills uniqueness.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'mode-from-list', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-347', domain: 'problem-solving', skills: ['find-mode'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The dot plot below displays the number of hours $10$ students spent on homework on one night. What is the mode?',
    diagram: { type: 'dotPlot', params: { data: [{ value: 1, count: 1 }, { value: 2, count: 3 }, { value: 3, count: 4 }, { value: 4, count: 2 }], xMin: 0, xMax: 5, xLabel: 'Hours of homework' } },
    choices: [{ id: 'A', text: '$2$ hours' }, { id: 'B', text: '$3$ hours' }, { id: 'C', text: '$4$ hours' }, { id: 'D', text: '$10$ hours' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Mode from List**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** The mode is the tallest column of dots. The value $3$ hours has $4$ dots, more than any other. Choice B.\n\n**The Full Solution:**\nStep 1: In a dot plot, the mode is the value above which the dots stack highest.\nStep 2: Compare columns: $3$ hours has $4$ dots, the most of any value.\nStep 3: So the mode is $3$ hours, choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$ hours): the second-tallest stack ($3$ dots), not the tallest.\n* Choice C ($4$ hours): reports the dot count ($4$) as if it were the value.\n* Choice D ($10$ hours): the total number of students, not a mode.\n\n**Test Day Takeaway:** In a dot plot, the mode is the value with the tallest column of dots — read the value on the axis, not the height of the stack.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'mode-from-list', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-348', domain: 'problem-solving', skills: ['find-mode'], difficulty: 'hard', type: 'fill-in',
    question: 'The dot plot below shows the values of a data set. After one occurrence of the mode is removed, what is the new mode?',
    diagram: { type: 'dotPlot', params: { data: [{ value: 3, count: 1 }, { value: 7, count: 2 }, { value: 10, count: 3 }, { value: 12, count: 4 }, { value: 15, count: 1 }], xMin: 2, xMax: 16, xLabel: 'Value' } },
    correctAnswer: '10',
    explanation: "**SAT Pattern: Mode from List**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~15s):** The original mode is $12$ (count $4$). Remove one $12$ and its count drops to $3$, tying $10$ (count $3$). With a tie, take the lower value: $10$.\n\n**The Full Solution:**\nStep 1: Read the dot plot counts: $3\\!:\\!1$, $7\\!:\\!2$, $10\\!:\\!3$, $12\\!:\\!4$, $15\\!:\\!1$. The original mode is $12$.\nStep 2: Remove one occurrence of the mode: $12$'s count falls from $4$ to $3$.\nStep 3: New counts are $10\\!:\\!3$ and $12\\!:\\!3$ tied for the most. When a single answer is required, the convention is the lower tied value, so the new mode is $10$.\n\n**Common Mistakes:** Reporting $12$ (still tied, but not the conventional lower value); forgetting to re-tally after removing the value and re-reporting the original mode.\n\n**Test Day Takeaway:** After removing a value, re-tally every count before naming the new mode — and on a tie, report the lower value.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'mode-from-list', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  // ─── Q.C. SCALING A DATA SET BY A CONSTANT (bank-ps-349..356) ─────────────
  // Effect of multiplying or adding a constant to every value on mean/SD/median/range.
  { id: 'bank-ps-349', domain: 'problem-solving', skills: ['data-analysis'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A data set has a mean of $20$. If each value in the data set is multiplied by $3$, what is the mean of the new data set?',
    choices: [{ id: 'A', text: '$20$' }, { id: 'B', text: '$23$' }, { id: 'C', text: '$60$' }, { id: 'D', text: '$120$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Multiplying every value by $k$ multiplies the mean by $k$. New mean $= 20 \\times 3 = 60$, choice C.\n\n**The Full Solution:**\nStep 1: The mean is a linear average of the values, so any factor applied to every value factors straight out of the mean.\nStep 2: Scale by $3$: new mean $= 3 \\times 20 = 60$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): treats $\\times 3$ like adding $0$ — the mean does not stay fixed under multiplication.\n* Choice B ($23$): adds $3$ instead of multiplying.\n* Choice D ($120$): multiplies by $6$, doubling the operation.\n\n**Test Day Takeaway:** Multiply every value by $k$ and the mean, median, and range all multiply by $k$ (SD by $|k|$).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scaling-a-data-set', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-350', domain: 'problem-solving', skills: ['data-analysis'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A data set has a standard deviation of $4$. If $10$ is added to every value, what is the new standard deviation?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$14$' }, { id: 'C', text: '$40$' }, { id: 'D', text: 'Cannot be determined' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Adding a constant shifts every value but leaves the spread alone. The SD stays $4$, choice A.\n\n**The Full Solution:**\nStep 1: Standard deviation measures how far values sit from the mean. Adding $10$ moves every value and the mean by the same $10$.\nStep 2: The distances from the mean are unchanged, so the SD is unchanged: $4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($14$): adds $10$ to the SD — addition shifts the mean, not the spread.\n* Choice C ($40$): multiplies the SD by $10$, which is what multiplication would do, not addition.\n* Choice D (Cannot be determined): you can tell — SD is shift-invariant.\n\n**Test Day Takeaway:** Add a constant and the mean shifts by it, but SD and range stay the same — the spread is preserved.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scaling-a-data-set', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-351', domain: 'problem-solving', skills: ['data-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The mean of a data set is $50$ and the standard deviation is $6$. Each value is multiplied by $2$. What are the new mean and standard deviation?',
    choices: [{ id: 'A', text: 'Mean $50$, SD $6$' }, { id: 'B', text: 'Mean $52$, SD $8$' }, { id: 'C', text: 'Mean $100$, SD $6$' }, { id: 'D', text: 'Mean $100$, SD $12$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Multiplying every value by $2$ scales both the mean and the SD by $2$: mean $= 50 \\times 2 = 100$, SD $= 6 \\times 2 = 12$, choice D.\n\n**The Full Solution:**\nStep 1: The mean scales by the multiplier: $2 \\times 50 = 100$.\nStep 2: The SD scales by the absolute value of the multiplier: $|2| \\times 6 = 12$.\n\n**Why the wrong answers are tempting:**\n* Choice A (Mean $50$, SD $6$): the \"no change\" trap — that is what adding $0$ would do, not multiplying.\n* Choice B (Mean $52$, SD $8$): adds $2$ instead of multiplying.\n* Choice C (Mean $100$, SD $6$): scales the mean but leaves the SD fixed, treating SD as shift-invariant — wrong for multiplication.\n\n**Test Day Takeaway:** Multiply every value by $k$ and BOTH the mean and the SD multiply by $|k|$ (SD is never negative).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scaling-a-data-set', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-352', domain: 'problem-solving', skills: ['data-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Temperatures recorded in degrees Celsius have a mean of $20$ and a range of $15$. The data is converted to degrees Fahrenheit using $F = 1.8C + 32$. What is the range in Fahrenheit?',
    choices: [{ id: 'A', text: '$15$' }, { id: 'B', text: '$27$' }, { id: 'C', text: '$32$' }, { id: 'D', text: '$59$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Range depends only on the multiplier $1.8$, not the shift $+32$. New range $= 1.8 \\times 15 = 27$, choice B.\n\n**The Full Solution:**\nStep 1: Range is max minus min. Under $F = 1.8C + 32$, the $+32$ adds to both max and min and cancels in the subtraction.\nStep 2: Only the $1.8$ factor survives: new range $= 1.8 \\times 15 = 27$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): assumes the range is unchanged, ignoring the $1.8$ scale.\n* Choice C ($32$): applies only the $+32$ shift, which does not affect spread.\n* Choice D ($59$): converts $15$ as if it were a temperature reading: $1.8 \\times 15 + 32 = 59$. Range is a spread, not a value.\n\n**Test Day Takeaway:** For a linear transformation $aX + b$, range and SD scale by $|a|$; the $+b$ never touches spread.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scaling-a-data-set', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-353', domain: 'problem-solving', skills: ['data-analysis'], difficulty: 'medium', type: 'fill-in',
    question: 'A data set has a median of $18$. If each value is multiplied by $-2$, what is the median of the new data set?',
    correctAnswer: '-36',
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**The correct answer is $-36$.**\n\n**The Fast Way (~5s):** The median scales by the multiplier, sign and all: $18 \\times (-2) = -36$.\n\n**The Full Solution:**\nStep 1: Multiplying every value by $-2$ moves the middle value to $-2$ times its original position.\nStep 2: New median $= -2 \\times 18 = -36$.\n\n**Common Mistakes:** Reporting $36$ (dropping the negative sign — the median follows the sign of the multiplier); reporting $16$ by subtracting $2$ instead of multiplying.\n\n**Test Day Takeaway:** Under $aX + b$, the median transforms exactly like the mean: median $\\to a \\cdot \\text{median} + b$, sign included.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scaling-a-data-set', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-354', domain: 'problem-solving', skills: ['data-analysis'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A data set has mean $\\bar{x} = 30$ and standard deviation $s = 5$. Each value $x_i$ is transformed using $y_i = (x_i - 30)/5$. What are the mean and standard deviation of the new data set $\\{y_i\\}$?',
    choices: [{ id: 'A', text: 'Mean $0$, SD $0$' }, { id: 'B', text: 'Mean $0$, SD $1$' }, { id: 'C', text: 'Mean $30$, SD $1$' }, { id: 'D', text: 'Mean $0$, SD $5$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The transform $y_i = \\frac{x_i - 30}{5}$ subtracts the mean (centering it at $0$) then divides by the SD (scaling spread to $1$). New mean $0$, new SD $1$, choice B.\n\n**The Full Solution:**\nStep 1: Subtracting $30$ shifts the mean to $30 - 30 = 0$; the SD is unchanged by this shift, still $5$.\nStep 2: Dividing by $5$ scales the SD by $\\frac{1}{5}$: new SD $= \\frac{5}{5} = 1$. The mean also divides by $5$: $\\frac{0}{5} = 0$.\n\n**Why the wrong answers are tempting:**\n* Choice A (Mean $0$, SD $0$): correctly centers the mean but wrongly zeroes the SD — dividing by $5$ shrinks the spread to $1$, not $0$.\n* Choice C (Mean $30$, SD $1$): forgets the subtraction shifts the mean to $0$.\n* Choice D (Mean $0$, SD $5$): forgets to divide the SD by $5$.\n\n**Test Day Takeaway:** $\\frac{X - \\bar{x}}{s}$ is the z-score transform — it always produces mean $0$ and SD $1$. That is how standardized scores are built.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scaling-a-data-set', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-355', domain: 'problem-solving', skills: ['data-analysis'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A data set has standard deviation $4$. A new data set is created by multiplying each value by $-3$ and then adding $7$. What is the standard deviation of the new data set?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$12$' }, { id: 'D', text: '$19$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** SD scales by the absolute value of the multiplier and ignores the shift. New SD $= |-3| \\times 4 = 12$, choice C.\n\n**The Full Solution:**\nStep 1: Multiplying every value by $-3$ scales the spread by $|-3| = 3$: $3 \\times 4 = 12$.\nStep 2: Adding $7$ shifts every value equally and does not change the spread, so it drops out.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): ignores the multiplier entirely.\n* Choice B ($5$): comes from combining $7$ and $4$ in some way — neither operation gives $5$.\n* Choice D ($19$): tacks the $+7$ onto the scaled SD ($12 + 7$) — the additive shift never affects SD.\n\n**Test Day Takeaway:** SD always uses the absolute value of the multiplier, $|a|$, and ignores any additive shift.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scaling-a-data-set', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-356', domain: 'problem-solving', skills: ['data-analysis'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The original data set $\\{x_1, x_2, \\ldots, x_n\\}$ has mean $\\bar{x}$ and standard deviation $s$. A new data set is formed by $y_i = 4x_i - 5$ for each $i$. Which expression gives the variance of $\\{y_i\\}$?',
    choices: [{ id: 'A', text: '$s^2 - 5$' }, { id: 'B', text: '$4s^2 - 5$' }, { id: 'C', text: '$4s^2$' }, { id: 'D', text: '$16s^2$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** SD scales by $|a| = 4$, so SD$_y = 4s$. Variance is SD squared: $(4s)^2 = 16s^2$, choice D.\n\n**The Full Solution:**\nStep 1: Under $y_i = 4x_i - 5$, the SD scales by $|4| = 4$ and the $-5$ shift is irrelevant to spread: SD$_y = 4s$.\nStep 2: Variance is the square of the SD: $(4s)^2 = 16s^2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($s^2 - 5$): subtracts the $-5$ from the variance — the additive shift does not affect spread.\n* Choice B ($4s^2 - 5$): scales variance by $a$ and keeps the shift, doubly wrong.\n* Choice C ($4s^2$): scales variance by $a$ instead of $a^2$ — forgets to square the multiplier.\n\n**Test Day Takeaway:** SD scales by $|a|$, so variance scales by $a^2$: $\\sigma \\to |a|\\sigma$ and $\\sigma^2 \\to a^2 \\sigma^2$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'scaling-a-data-set', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  // ─── Q.A. DISTANCE = RATE × TIME (bank-ps-357..360) — top-up to ≥8 ────────
  // Existing 4 (Average Rate Over Time, Rate × Time = Total ×2, Total / Rate = Time, Rate × Time) plus 4 here.
  { id: 'bank-ps-357', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A car travels at a constant speed of $55$ miles per hour. How far does it travel in $3$ hours?',
    choices: [{ id: 'A', text: '$18.3$ miles' }, { id: 'B', text: '$55$ miles' }, { id: 'C', text: '$165$ miles' }, { id: 'D', text: '$275$ miles' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $d = rt = 55 \\times 3 = 165$ miles, choice C.\n\n**The Full Solution:**\nStep 1: At constant speed, distance is rate times time.\nStep 2: $d = 55 \\times 3 = 165$ miles.\n\n**Why the wrong answers are tempting:**\n* Choice A ($18.3$ miles): divides instead of multiplying, $55 \\div 3$.\n* Choice B ($55$ miles): reports the rate instead of computing the distance.\n* Choice D ($275$ miles): uses $55 \\times 5$ — wrong time value.\n\n**Test Day Takeaway:** $d = rt$. When the units match (mph with hours), just multiply rate by time.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-rate-time', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-358', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'medium', type: 'fill-in',
    question: 'A train travels $360$ miles at a constant speed of $80$ miles per hour. How long, in hours, does the trip take?',
    correctAnswer: '4.5',
    explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**The correct answer is $4.5$.**\n\n**The Fast Way (~5s):** Rearrange $d = rt$ to $t = \\frac{d}{r} = \\frac{360}{80} = 4.5$ hours.\n\n**The Full Solution:**\nStep 1: Distance equals rate times time, so time equals distance divided by rate.\nStep 2: $t = \\frac{360}{80} = 4.5$ hours.\n\n**Common Mistakes:** Multiplying $360 \\times 80$ instead of dividing; dividing rate by distance ($\\frac{80}{360}$) and getting a fraction under $1$.\n\n**Test Day Takeaway:** Rearrange $d = rt$ to solve for what you need — for time, divide distance by rate.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-rate-time', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-359', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A cyclist rides for $90$ minutes at a constant speed of $14$ miles per hour. How many miles does the cyclist ride?',
    choices: [{ id: 'A', text: '$9.3$' }, { id: 'B', text: '$15.5$' }, { id: 'C', text: '$21$' }, { id: 'D', text: '$1{,}260$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Convert $90$ minutes to $1.5$ hours, then $d = rt = 14 \\times 1.5 = 21$ miles, choice C.\n\n**The Full Solution:**\nStep 1: The rate is in miles per hour, so the time must be in hours: $90$ min $= \\frac{90}{60} = 1.5$ hr.\nStep 2: $d = 14 \\times 1.5 = 21$ miles.\n\n**Why the wrong answers are tempting:**\n* Choice A ($9.3$): divides, $14 \\div 1.5$ — wrong operation.\n* Choice B ($15.5$): adds, $14 + 1.5$ — wrong operation.\n* Choice D ($1{,}260$): uses $14 \\times 90$, keeping minutes so the units do not match.\n\n**Test Day Takeaway:** Match units before multiplying. With mph you need hours, so convert minutes first.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-rate-time', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-360', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Cars A and B start at the same point and drive in opposite directions on a straight road. Car A travels at $50$ mph and Car B travels at $60$ mph. After $4$ hours, how far apart are the two cars?',
    choices: [{ id: 'A', text: '$10$ miles' }, { id: 'B', text: '$200$ miles' }, { id: 'C', text: '$240$ miles' }, { id: 'D', text: '$440$ miles' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Each car's distance is $50 \\times 4 = 200$ and $60 \\times 4 = 240$. Driving apart in opposite directions, the distances add: $200 + 240 = 440$ miles, choice D.\n\n**The Full Solution:**\nStep 1: Car A travels $50 \\times 4 = 200$ miles; Car B travels $60 \\times 4 = 240$ miles.\nStep 2: They start together and move in opposite directions, so the gap is the sum: $200 + 240 = 440$ miles.\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$ miles): takes the difference of the rates instead of the distances.\n* Choice B ($200$ miles): counts only Car A's distance.\n* Choice C ($240$ miles): counts only Car B's distance.\n\n**Test Day Takeaway:** Opposite directions $\\Rightarrow$ ADD the distances. Same direction $\\Rightarrow$ subtract to find the gap.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-rate-time', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  // ─── Q.A. AVERAGE RATE (bank-ps-361..367) — total/total ────────────────────
  // Distinct from rate × time: avg rate = (total distance) / (total time) when rates vary.
  { id: 'bank-ps-361', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A car travels $120$ miles at $60$ mph and then $180$ miles at $45$ mph. What is the average speed, in mph, for the entire trip?',
    choices: [{ id: 'A', text: '$45$' }, { id: 'B', text: '$50$' }, { id: 'C', text: '$52.5$' }, { id: 'D', text: '$60$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Average Rate**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Average speed is total distance over total time, not the average of the two speeds. The first leg takes $\\frac{120}{60}=2$ hr and the second $\\frac{180}{45}=4$ hr, so the average is $\\frac{300}{6}=50$ mph.\n\n**The Full Solution:**\nStep 1: Find each leg's time. Leg 1: $\\frac{120}{60}=2$ hr. Leg 2: $\\frac{180}{45}=4$ hr.\nStep 2: Total distance $=120+180=300$ miles; total time $=2+4=6$ hr.\nStep 3: Average speed $=\\frac{300}{6}=50$ mph.\n\n**Why the wrong answers are tempting:**\n* Choice A ($45$): just the slower rate, ignoring the time spent at each.\n* Choice C ($52.5$): the arithmetic mean $\\frac{60+45}{2}$ — only valid if equal time is spent at each speed, which is not the case here.\n* Choice D ($60$): just the faster rate.\n\n**Test Day Takeaway:** Average rate $=\\frac{\\text{total distance}}{\\text{total time}}$, never the plain average of the rates unless the times at each rate are equal.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'average-rate', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-362', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'medium', type: 'fill-in',
    question: 'A runner completes $5$ miles in $30$ minutes, then walks $1$ mile in $20$ minutes. What was her average rate for the entire $6$-mile distance, in miles per hour?',
    correctAnswer: '7.2',
    explanation: "**SAT Pattern: Average Rate**\n\n**The correct answer is $7.2$.**\n\n**The Fast Way (~15s):** Total distance is $6$ miles and total time is $50$ min $=\\frac{5}{6}$ hr, so the average rate is $6\\div\\frac{5}{6}=\\frac{36}{5}=7.2$ mph.\n\n**The Full Solution:**\nStep 1: Total distance $=5+1=6$ miles. Total time $=30+20=50$ minutes.\nStep 2: Convert to hours: $50$ min $=\\frac{50}{60}=\\frac{5}{6}$ hr.\nStep 3: Average rate $=6\\div\\frac{5}{6}=6\\cdot\\frac{6}{5}=\\frac{36}{5}=7.2$ mph.\n\n**Common Mistakes:** Forgetting to convert minutes to hours and reporting $\\frac{6}{50}$ in miles per minute; or averaging the two leg speeds instead of using total over total.\n\n**Test Day Takeaway:** Convert minutes to hours before dividing for mph, then use $\\frac{\\text{total distance}}{\\text{total time}}$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'average-rate', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-363', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A truck driver drove $2$ hours at $50$ mph and $3$ hours at $60$ mph. What was the truck\'s average speed, in mph, for the entire trip?',
    choices: [{ id: 'A', text: '$50$' }, { id: 'B', text: '$55$' }, { id: 'C', text: '$56$' }, { id: 'D', text: '$60$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Average Rate**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Distance $=50\\cdot2+60\\cdot3=100+180=280$ miles over $5$ hr, so the average is $\\frac{280}{5}=56$ mph.\n\n**The Full Solution:**\nStep 1: Distance for each leg: $50\\cdot2=100$ miles and $60\\cdot3=180$ miles.\nStep 2: Total distance $=280$ miles; total time $=2+3=5$ hr.\nStep 3: Average speed $=\\frac{280}{5}=56$ mph.\n\n**Why the wrong answers are tempting:**\n* Choice A ($50$): just the slower rate.\n* Choice B ($55$): the arithmetic mean $\\frac{50+60}{2}$ — wrong because the truck spent more time at the higher rate, pulling the average up.\n* Choice D ($60$): just the faster rate.\n\n**Test Day Takeaway:** Average rate $=\\frac{\\text{total distance}}{\\text{total time}}$. The plain mean of two rates equals the average only when each rate is held for the same amount of time.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'average-rate', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-364', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A boat travels upstream at $8$ mph and returns the same distance downstream at $12$ mph. What is the average speed of the round trip, in mph?',
    choices: [{ id: 'A', text: '$9.6$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$10.5$' }, { id: 'D', text: '$11$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Average Rate**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Equal distance at two rates means use the harmonic mean: $\\frac{2r_1r_2}{r_1+r_2}=\\frac{2\\cdot8\\cdot12}{8+12}=\\frac{192}{20}=9.6$ mph.\n\n**The Full Solution:**\nStep 1: Let the one-way distance be $d$. Time upstream $=\\frac{d}{8}$, time downstream $=\\frac{d}{12}$.\nStep 2: Total time $=\\frac{d}{8}+\\frac{d}{12}=\\frac{3d+2d}{24}=\\frac{5d}{24}$; total distance $=2d$.\nStep 3: Average speed $=\\frac{2d}{\\frac{5d}{24}}=2d\\cdot\\frac{24}{5d}=\\frac{48}{5}=9.6$ mph.\n\n**Why the wrong answers are tempting:**\n* Choice B ($10$): the arithmetic mean $\\frac{8+12}{2}$ — wrong because the slower leg takes longer, dragging the average below $10$.\n* Choice C ($10.5$): an arbitrary value between the two rates, biased toward the mean.\n* Choice D ($11$): biased toward the faster rate, the opposite of what happens.\n\n**Test Day Takeaway:** For equal distances at two rates, the average is the harmonic mean $\\frac{2r_1r_2}{r_1+r_2}$, which always lands below the arithmetic mean because the slow leg dominates the time.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'average-rate', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-365', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'medium', type: 'fill-in',
    question: 'A factory produced $480$ widgets in the first $4$ hours of a shift and $200$ widgets in the next $2$ hours. What was the factory\'s average production rate over the $6$-hour period, in widgets per hour?',
    correctAnswer: '113.33',
    explanation: "**SAT Pattern: Average Rate**\n\n**The correct answer is $113.33$ (or $113.\\overline{3}$).**\n\n**The Fast Way (~10s):** Total widgets $=480+200=680$ over $6$ hr, so the average rate is $\\frac{680}{6}\\approx113.33$ widgets per hour.\n\n**The Full Solution:**\nStep 1: Total output $=480+200=680$ widgets.\nStep 2: Total time $=4+2=6$ hours.\nStep 3: Average production rate $=\\frac{680}{6}=113.\\overline{3}\\approx113.33$ widgets per hour.\n\n**Common Mistakes:** Averaging the two period rates ($120$ wph and $100$ wph) to get $110$ instead of using total over total; that simple average is wrong because the two periods are different lengths.\n\n**Test Day Takeaway:** Production-rate problems use the same $\\frac{\\text{total quantity}}{\\text{total time}}$ formula as speed problems.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'average-rate', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-366', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A traveler drove $40$ miles at an average of $20$ mph and then $60$ miles at an average of $30$ mph. What was the average speed for the entire $100$-mile trip?',
    choices: [{ id: 'A', text: '$24$ mph' }, { id: 'B', text: '$25$ mph' }, { id: 'C', text: '$26$ mph' }, { id: 'D', text: '$28$ mph' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Average Rate**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Both legs take the same time: $\\frac{40}{20}=2$ hr and $\\frac{60}{30}=2$ hr. Total $\\frac{100}{4}=25$ mph.\n\n**The Full Solution:**\nStep 1: Leg 1 time $=\\frac{40}{20}=2$ hr; leg 2 time $=\\frac{60}{30}=2$ hr.\nStep 2: Total distance $=100$ miles; total time $=2+2=4$ hr.\nStep 3: Average speed $=\\frac{100}{4}=25$ mph.\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): an in-between value biased toward the slower rate.\n* Choice C ($26$): an in-between value biased toward the faster rate.\n* Choice D ($28$): too close to the higher rate, ignoring the equal time split.\n\n**Test Day Takeaway:** Always compute total time before dividing. Here the times happen to be equal, so the average coincidentally equals the mean of $20$ and $30$ — but compute it, never assume it.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'average-rate', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-367', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A pump fills $300$ gallons of water in $20$ minutes during the morning and $180$ gallons in $15$ minutes during the afternoon. What is the average pumping rate, in gallons per minute, over the combined $35$ minutes?',
    choices: [{ id: 'A', text: '$12$' }, { id: 'B', text: '$13.7$' }, { id: 'C', text: '$15$' }, { id: 'D', text: '$24$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Average Rate**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Total water $=300+180=480$ gal over $35$ min, so the average is $\\frac{480}{35}\\approx13.7$ gallons per minute.\n\n**The Full Solution:**\nStep 1: Total volume pumped $=300+180=480$ gallons.\nStep 2: Total time $=20+15=35$ minutes.\nStep 3: Average rate $=\\frac{480}{35}\\approx13.71\\approx13.7$ gpm.\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): the afternoon rate $\\frac{180}{15}$ alone.\n* Choice C ($15$): the morning rate $\\frac{300}{20}$ alone.\n* Choice D ($24$): added the two leg rates instead of using total over total.\n\n**Test Day Takeaway:** Average rate $=\\frac{\\text{total quantity}}{\\text{total time}}$, regardless of how the quantity broke down across the intervals.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'average-rate', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  // ─── Q.A. SIMPLE INTEREST (bank-ps-368..375) — A = P(1 + rt) linear growth ─
  // Distinct from compound-interest (P(1+r)^t exponential).
  { id: 'bank-ps-368', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Marcus deposits $\\$2{,}000$ into a savings account that earns simple interest at an annual rate of $4\\%$. How much interest, in dollars, does the account earn in $3$ years?',
    choices: [{ id: 'A', text: '$80$' }, { id: 'B', text: '$160$' }, { id: 'C', text: '$240$' }, { id: 'D', text: '$2{,}240$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Simple Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Simple interest is $I=Prt=2000\\cdot0.04\\cdot3=240$ dollars.\n\n**The Full Solution:**\nStep 1: Identify the parts: principal $P=\\$2{,}000$, rate $r=4\\%=0.04$ per year, time $t=3$ years.\nStep 2: Apply $I=Prt=2000\\cdot0.04\\cdot3$.\nStep 3: $2000\\cdot0.04=80$, and $80\\cdot3=240$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($80$): interest for $1$ year only ($Pr$), forgetting to multiply by $3$.\n* Choice B ($160$): interest for $2$ years, stopping one year short.\n* Choice D ($2{,}240$): the total balance $P+I$, not the interest alone.\n\n**Test Day Takeaway:** Simple interest is $I=P\\cdot r\\cdot t$; the total balance is $A=P(1+rt)$. The question asks which one.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'simple-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-369', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A $\\$5{,}000$ loan accrues simple interest at $6\\%$ annually. What is the total balance owed after $4$ years if no payments are made?',
    choices: [{ id: 'A', text: '$\\$1{,}200$' }, { id: 'B', text: '$\\$5{,}300$' }, { id: 'C', text: '$\\$6{,}200$' }, { id: 'D', text: '$\\$26{,}000$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Simple Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total owed is $A=P(1+rt)=5000(1+0.06\\cdot4)=5000(1.24)=\\$6{,}200$.\n\n**The Full Solution:**\nStep 1: Interest $I=Prt=5000\\cdot0.06\\cdot4=1200$ dollars.\nStep 2: The balance is principal plus interest: $A=5000+1200=6200$.\nStep 3: So the total owed after $4$ years is $\\$6{,}200$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$1{,}200$): only the interest, not the total owed.\n* Choice B ($\\$5{,}300$): one year of interest added ($5000+300$).\n* Choice D ($\\$26{,}000$): multiplied principal by $5.2$ by mishandling the rate as a whole number.\n\n**Test Day Takeaway:** \"Total balance owed\" means $A=P+Prt=P(1+rt)$ — add the interest back to the principal.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'simple-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-370', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'medium', type: 'fill-in',
    question: 'A bond is purchased for $\\$8{,}000$ and earns simple interest at an annual rate of $r\\%$. After $5$ years, the bond has earned $\\$1{,}800$ in interest. What is the value of $r$?',
    correctAnswer: '4.5',
    explanation: "**SAT Pattern: Simple Interest**\n\n**The correct answer is $4.5$.**\n\n**The Fast Way (~15s):** From $I=Prt$, set $1800=8000\\cdot\\frac{r}{100}\\cdot5=400r$, so $r=4.5$.\n\n**The Full Solution:**\nStep 1: Write $I=Prt$ with the rate as $\\frac{r}{100}$: $1800=8000\\cdot\\frac{r}{100}\\cdot5$.\nStep 2: Simplify the right side: $8000\\cdot\\frac{5}{100}=400$, so $1800=400r$.\nStep 3: Divide: $r=\\frac{1800}{400}=4.5$.\n\n**Common Mistakes:** Leaving the answer as a decimal $0.045$ when the field asks for the percent value $r$; or forgetting the time factor of $5$ and getting $r=22.5$.\n\n**Test Day Takeaway:** When the rate is unknown, solve $r=\\frac{I}{Pt}$. Watch whether the field wants the percent value or the decimal.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'simple-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-371', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'medium', type: 'multiple-choice',
    question: 'An investment of $P$ dollars at simple annual interest rate $r$ grows to $A$ dollars after $t$ years. Which expression gives the total amount $A$?',
    choices: [{ id: 'A', text: '$P(1 + r)^t$' }, { id: 'B', text: '$P + rt$' }, { id: 'C', text: '$P(1 + rt)$' }, { id: 'D', text: '$P \\cdot r \\cdot t$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Simple Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Simple interest is linear, so the total is principal plus interest: $A=P+Prt=P(1+rt)$.\n\n**The Full Solution:**\nStep 1: Simple interest earned over $t$ years is $I=Prt$.\nStep 2: The total amount is principal plus that interest: $A=P+Prt$.\nStep 3: Factor out $P$: $A=P(1+rt)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($P(1+r)^t$): the compound interest formula — a different model, exponential in $t$.\n* Choice B ($P+rt$): drops the principal factor on the interest term.\n* Choice D ($P\\cdot r\\cdot t$): just the interest, not the total amount.\n\n**Test Day Takeaway:** Simple interest is linear in $t$: $A=P(1+rt)$. Compound interest is exponential: $A=P(1+r)^t$. Don't swap them.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'simple-interest', authoredBy: 'performsat-engine', createdAt: '2026-05-18' },

  { id: 'bank-ps-372', domain: 'problem-solving', skills: ['rate-conversion'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A $\\$1{,}500$ deposit earns simple interest at $3.5\\%$ per year. After how many years will the account balance be $\\$1{,}815$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$6$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Simple Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Interest earned is $1815-1500=315$. Then $315=1500\\cdot0.035\\cdot t=52.5t$, so $t=6$ years.\n\n**The Full Solution:**\nStep 1: Isolate the interest: $I=1815-1500=315$ dollars.\nStep 2: Apply $I=Prt$: $315=1500\\cdot0.035\\cdot t$.\nStep 3: Since $1500\\cdot0.035=52.5$, solve $t=\\frac{315}{52.5}=6$ years.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): solved using half the interest, or stopped early.\n* Choice B ($5$): rounding error or using a wrong interest figure.\n* Choice D ($8$): forgot to subtract the principal and used the full balance as interest.\n\n**Test Day Takeaway:** Subtract the principal first to isolate the interest, then solve $I=Prt$ for the unknown.",
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
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Mean times count gives each total. Start: $6 \\times 12 = 72$. After removal: $5 \\times 14 = 70$. The removed number is $72 - 70 = 2$.\n\n**The Full Solution:**\nStep 1: The sum of the original $6$ numbers is $6 \\times 12 = 72$.\nStep 2: The sum of the remaining $5$ numbers is $5 \\times 14 = 70$.\nStep 3: Removing the number dropped the sum by $72 - 70 = 2$, so the removed number is $2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): copies the original mean instead of computing the difference of sums.\n* Choice C ($70$): stops at the new sum and forgets to subtract from the old sum.\n* Choice D ($10$): subtracts $60$ from $70$, mixing up which totals to compare.\n\n**Test Day Takeaway:** Removed value $=$ (original sum) $-$ (new sum), and each sum is mean $\\times$ count.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'finding-a-missing-value-given-the-mean', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-398', domain: 'problem-solving', skills: ['calculate-mean'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A set of $8$ numbers has a mean of $25$. After a $9$th number is added, the mean becomes $26$. What is the value of the $9$th number?',
    choices: [{ id: 'A', text: '$34$' }, { id: 'B', text: '$26$' }, { id: 'C', text: '$200$' }, { id: 'D', text: '$50$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Each total is mean $\\times$ count. Old sum: $8 \\times 25 = 200$. New sum: $9 \\times 26 = 234$. The added number is $234 - 200 = 34$.\n\n**The Full Solution:**\nStep 1: The sum of the original $8$ numbers is $8 \\times 25 = 200$.\nStep 2: After adding the $9$th number the sum is $9 \\times 26 = 234$.\nStep 3: The new number is the increase: $234 - 200 = 34$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($26$): copies the new mean instead of the difference of sums.\n* Choice C ($200$): stops at the original sum.\n* Choice D ($50$): comes from $\\frac{200}{4}$, an unrelated split of the old sum.\n\n**Test Day Takeaway:** Added value $=$ (new sum) $-$ (old sum).",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'finding-a-missing-value-given-the-mean', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-399', domain: 'problem-solving', skills: ['calculate-mean'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A set of $n$ numbers has mean $30$. When the value $60$ is added to the set, the new mean is $33$. What is the value of $n$?',
    choices: [{ id: 'A', text: '$9$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Old sum is $30n$. Adding $60$ makes the new sum $30n + 60$, spread over $n+1$ values at mean $33$: $30n + 60 = 33(n+1) \\Rightarrow 3n = 27 \\Rightarrow n = 9$.\n\n**The Full Solution:**\nStep 1: With mean $30$, the sum of the $n$ numbers is $30n$.\nStep 2: After adding $60$, there are $n+1$ numbers with mean $33$, so the sum is $33(n+1)$ and also $30n + 60$.\nStep 3: Set them equal: $30n + 60 = 33n + 33$. Then $27 = 3n$, so $n = 9$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($10$): counts the new total $n+1$ as $n$, an off-by-one in the count.\n* Choice C ($11$): another count slip, using $n+1$ where $n$ belongs.\n* Choice D ($3$): comes from $\\frac{27}{9}$, dividing the wrong two numbers.\n\n**Test Day Takeaway:** Write sum $=$ mean $\\times$ count for the old set and the new set, then equate.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'finding-a-missing-value-given-the-mean', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- marginal-probability (4 → 10) ---
  { id: 'bank-ps-400', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A survey of $200$ students found that $120$ play a sport and $80$ do not. If a student is selected at random, what is the probability that the student plays a sport?',
    choices: [{ id: 'A', text: '$\\dfrac{3}{5}$' }, { id: 'B', text: '$\\dfrac{2}{5}$' }, { id: 'C', text: '$\\dfrac{3}{2}$' }, { id: 'D', text: '$\\dfrac{1}{3}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $\\frac{120}{200} = \\frac{3}{5}$.\n\n**The Full Solution:**\nStep 1: $120$ of the $200$ students play a sport.\nStep 2: Probability $= \\frac{120}{200} = \\frac{3}{5}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{2}{5}$): gives $P(\\text{does not play})$, using the $80$ who do not.\n* Choice C ($\\frac{3}{2}$): flips the fraction, putting the larger count on top.\n* Choice D ($\\frac{1}{3}$): divides by an incorrect total instead of $200$.\n\n**Test Day Takeaway:** Marginal probability $=$ (count in the category) $\\div$ (total).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-401', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'In a workplace of $300$ employees, $180$ take public transit to work and $120$ drive. If an employee is selected at random, what is the probability that the employee drives?',
    choices: [{ id: 'A', text: '$\\dfrac{2}{5}$' }, { id: 'B', text: '$\\dfrac{3}{5}$' }, { id: 'C', text: '$\\dfrac{2}{3}$' }, { id: 'D', text: '$\\dfrac{1}{2}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $\\frac{120}{300} = \\frac{2}{5}$.\n\n**The Full Solution:**\nStep 1: $120$ of the $300$ employees drive.\nStep 2: Probability $= \\frac{120}{300} = \\frac{2}{5}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{3}{5}$): gives $P(\\text{transit})$, using the $180$ who take public transit.\n* Choice C ($\\frac{2}{3}$): an unrelated fraction not built from the totals.\n* Choice D ($\\frac{1}{2}$): assumes a half-and-half split, ignoring the actual counts.\n\n**Test Day Takeaway:** Identify the category of interest, then divide by the total.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-402', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Of $500$ households surveyed, $250$ own a pet, $200$ have a yard, and $150$ have both. If a household is selected at random, what is the probability that it owns a pet?',
    choices: [{ id: 'A', text: '$\\dfrac{1}{2}$' }, { id: 'B', text: '$\\dfrac{2}{5}$' }, { id: 'C', text: '$\\dfrac{3}{10}$' }, { id: 'D', text: '$\\dfrac{3}{5}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $\\frac{250}{500} = \\frac{1}{2}$.\n\n**The Full Solution:**\nStep 1: $250$ of the $500$ households own a pet.\nStep 2: Probability $= \\frac{250}{500} = \\frac{1}{2}$. The yard and \"both\" counts are irrelevant for this marginal question.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{2}{5}$): gives $P(\\text{yard})$ from $\\frac{200}{500}$.\n* Choice C ($\\frac{3}{10}$): gives $P(\\text{both})$ from $\\frac{150}{500}$.\n* Choice D ($\\frac{3}{5}$): an unrelated fraction not built from the pet count.\n\n**Test Day Takeaway:** \"Owns a pet\" is a row marginal — divide that count by the grand total and ignore the overlap details.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-403', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Of $400$ voters surveyed, $240$ are women and $160$ are men. If a voter is selected at random, what is the probability that the voter is a man?',
    choices: [{ id: 'A', text: '$\\dfrac{2}{5}$' }, { id: 'B', text: '$\\dfrac{3}{5}$' }, { id: 'C', text: '$\\dfrac{2}{3}$' }, { id: 'D', text: '$\\dfrac{4}{5}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $\\frac{160}{400} = \\frac{2}{5}$.\n\n**The Full Solution:**\nStep 1: $160$ of the $400$ voters are men.\nStep 2: Probability $= \\frac{160}{400} = \\frac{2}{5}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{3}{5}$): gives $P(\\text{woman})$ from $\\frac{240}{400}$.\n* Choice C ($\\frac{2}{3}$): comes from $\\frac{160}{240}$, dividing men by women instead of by the total.\n* Choice D ($\\frac{4}{5}$): an unrelated fraction not built from the totals.\n\n**Test Day Takeaway:** Marginal probability divides by the grand total, ignoring subcategories.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-404', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'easy', type: 'multiple-choice',
    question: '$250$ students were asked about lunch: $100$ buy school lunch and $150$ bring lunch from home. If a student is selected at random, what is the probability that the student buys school lunch?',
    choices: [{ id: 'A', text: '$\\dfrac{2}{5}$' }, { id: 'B', text: '$\\dfrac{3}{5}$' }, { id: 'C', text: '$\\dfrac{2}{3}$' }, { id: 'D', text: '$\\dfrac{1}{2}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $\\frac{100}{250} = \\frac{2}{5}$.\n\n**The Full Solution:**\nStep 1: $100$ of the $250$ students buy school lunch.\nStep 2: Probability $= \\frac{100}{250} = \\frac{2}{5}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{3}{5}$): gives the other category, the $150$ who bring lunch from home.\n* Choice C ($\\frac{2}{3}$): comes from $\\frac{100}{150}$, dividing one group by the other instead of by the total.\n* Choice D ($\\frac{1}{2}$): assumes an even split, ignoring the actual counts.\n\n**Test Day Takeaway:** Always divide by the grand total for a marginal probability.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-405', domain: 'problem-solving', skills: ['probability-basics'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A class of $30$ students includes $18$ who take Spanish and $15$ who take French. If $12$ students take neither language, what is the probability that a randomly chosen student takes ONLY Spanish?',
    choices: [{ id: 'A', text: '$\\dfrac{1}{10}$' }, { id: 'B', text: '$\\dfrac{3}{5}$' }, { id: 'C', text: '$\\dfrac{1}{2}$' }, { id: 'D', text: '$\\dfrac{1}{3}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** At least one language: $30 - 12 = 18$. By inclusion-exclusion, $18 + 15 - \\text{both} = 18$, so both $= 15$. Only Spanish $= 18 - 15 = 3$, giving $\\frac{3}{30} = \\frac{1}{10}$.\n\n**The Full Solution:**\nStep 1: Of the $30$ students, $12$ take neither, so $30 - 12 = 18$ take at least one language.\nStep 2: Spanish plus French minus the overlap equals that $18$: $18 + 15 - \\text{both} = 18$, so both $= 15$.\nStep 3: Only Spanish $=$ Spanish $-$ both $= 18 - 15 = 3$.\nStep 4: Probability $= \\frac{3}{30} = \\frac{1}{10}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{3}{5}$): gives $P(\\text{Spanish})$ from $\\frac{18}{30}$, not the \"only Spanish\" group.\n* Choice C ($\\frac{1}{2}$): uses the $15$ in some language over $30$, mishandling the overlap.\n* Choice D ($\\frac{1}{3}$): an unrelated fraction not built from the corrected counts.\n\n**Test Day Takeaway:** \"Only Spanish\" $=$ Spanish $-$ both, so find the overlap first using inclusion-exclusion.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'marginal-probability', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- percent-decrease (4 → 10) ---
  { id: 'bank-ps-406', domain: 'problem-solving', skills: ['percent-change'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A price dropped from $\\$50$ to $\\$35$. What is the percent decrease?',
    choices: [{ id: 'A', text: '$30\\%$' }, { id: 'B', text: '$15\\%$' }, { id: 'C', text: '$70\\%$' }, { id: 'D', text: '$50\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Drop $= 50 - 35 = 15$, and $\\frac{15}{50} = 0.30 = 30\\%$.\n\n**The Full Solution:**\nStep 1: The price fell by $\\$50 - \\$35 = \\$15$.\nStep 2: Divide by the original: $\\frac{15}{50} = 0.30$.\nStep 3: That is a $30\\%$ decrease.\n\n**Why the wrong answers are tempting:**\n* Choice B ($15\\%$): reports the raw dollar drop as a percent.\n* Choice C ($70\\%$): gives $\\frac{35}{50}$, the fraction remaining, not the fraction lost.\n* Choice D ($50\\%$): copies the original price as if it were the percent.\n\n**Test Day Takeaway:** Percent decrease $= \\frac{\\text{original} - \\text{new}}{\\text{original}} \\times 100$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-decrease', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-407', domain: 'problem-solving', skills: ['percent-change'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A town\'s population dropped from $1{,}200$ to $900$ in one year. What is the percent decrease?',
    choices: [{ id: 'A', text: '$25\\%$' }, { id: 'B', text: '$75\\%$' }, { id: 'C', text: '$33\\%$' }, { id: 'D', text: '$300\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Drop $= 1200 - 900 = 300$, and $\\frac{300}{1200} = 0.25 = 25\\%$.\n\n**The Full Solution:**\nStep 1: The population fell by $1{,}200 - 900 = 300$.\nStep 2: Divide by the original: $\\frac{300}{1200} = 0.25$.\nStep 3: That is a $25\\%$ decrease.\n\n**Why the wrong answers are tempting:**\n* Choice B ($75\\%$): gives $\\frac{900}{1200}$, the fraction remaining, not the fraction lost.\n* Choice C ($33\\%$): uses $\\frac{300}{900}$, dividing by the new value instead of the original.\n* Choice D ($300\\%$): leaves the drop of $300$ unscaled.\n\n**Test Day Takeaway:** Divide the change by the original value, never by the new value.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-decrease', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-408', domain: 'problem-solving', skills: ['percent-change'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A jacket priced at $\\$80$ is on sale for $\\$60$. By what percent has the price been reduced?',
    choices: [{ id: 'A', text: '$25\\%$' }, { id: 'B', text: '$20\\%$' }, { id: 'C', text: '$75\\%$' }, { id: 'D', text: '$33\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Drop $= 80 - 60 = 20$, and $\\frac{20}{80} = 0.25 = 25\\%$.\n\n**The Full Solution:**\nStep 1: The price fell by $\\$80 - \\$60 = \\$20$.\nStep 2: Divide by the original: $\\frac{20}{80} = 0.25$.\nStep 3: That is a $25\\%$ reduction.\n\n**Why the wrong answers are tempting:**\n* Choice B ($20\\%$): reports the raw dollar drop as a percent.\n* Choice C ($75\\%$): gives $\\frac{60}{80}$, the fraction of the price remaining.\n* Choice D ($33\\%$): uses $\\frac{20}{60}$, dividing by the new price instead of the original.\n\n**Test Day Takeaway:** The percent is always relative to the larger original price.",
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
    explanation: "**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** A residual is actual minus predicted: $y - \\hat{y} = 22 - 17 = 5$.\n\n**The Full Solution:**\nStep 1: The observed value is $y = 22$ and the model's prediction is $\\hat{y} = 17$.\nStep 2: Subtract in that order: $22 - 17 = 5$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-5$): subtracted in the wrong direction, $\\hat{y} - y$.\n* Choice C ($17$): reports the predicted value $\\hat{y}$ instead of the residual.\n* Choice D ($22$): reports the observed value $y$ instead of the residual.\n\n**Test Day Takeaway:** A residual is always actual minus predicted: $y - \\hat{y}$. A positive residual means the point sits above the model's line.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'residual', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-434', domain: 'problem-solving', skills: ['calculate-mean', 'slope-intercept-form'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For a particular data point, $y - \\hat{y} = -8$ where the observed value is $y = 22$. What is the value of $\\hat{y}$ at that point?',
    choices: [{ id: 'A', text: '$30$' }, { id: 'B', text: '$14$' }, { id: 'C', text: '$-8$' }, { id: 'D', text: '$22$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Rearrange $y - \\hat{y} = -8$ into $\\hat{y} = y - (y - \\hat{y}) = 22 - (-8) = 30$.\n\n**The Full Solution:**\nStep 1: The residual equation is $y - \\hat{y} = -8$ with $y = 22$.\nStep 2: Substitute: $22 - \\hat{y} = -8$.\nStep 3: Solve: $-\\hat{y} = -8 - 22 = -30$, so $\\hat{y} = 30$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($14$): computed $22 + (-8)$, adding the residual instead of subtracting it.\n* Choice C ($-8$): copies the residual itself.\n* Choice D ($22$): copies the observed value $y$.\n\n**Test Day Takeaway:** A negative residual means the prediction sat above the actual value, so $\\hat{y}$ is larger than $y$. Plug into $y - \\hat{y} = \\text{residual}$ and solve.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'residual', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-435', domain: 'problem-solving', skills: ['calculate-mean', 'slope-intercept-form'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A linear model passes through the data values such that at $x = 2$, $\\hat{y} = 7$ and the actual $y = 5$. The model predicts $\\hat{y} = 10$ at $x = 4$, and the actual is $y = 11$. What is the sum of the two values of $y - \\hat{y}$?',
    choices: [{ id: 'A', text: '$-1$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$-3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Each residual is actual minus predicted. At $x = 2$: $5 - 7 = -2$. At $x = 4$: $11 - 10 = 1$. Sum: $-2 + 1 = -1$.\n\n**The Full Solution:**\nStep 1: First point: $y - \\hat{y} = 5 - 7 = -2$.\nStep 2: Second point: $y - \\hat{y} = 11 - 10 = 1$.\nStep 3: Add the two residuals: $-2 + 1 = -1$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): dropped the negative on the first residual, summing $+2 + (-1) = 1$.\n* Choice C ($3$): added the absolute values, $2 + 1$.\n* Choice D ($-3$): used $-2 - 1$, subtracting the second residual instead of adding it.\n\n**Test Day Takeaway:** Carry the sign of each residual through to the end. Above-the-line points give positive residuals, below-the-line points give negative ones.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'residual', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- reverse-percent (4 → 10) ---
  { id: 'bank-ps-436', domain: 'problem-solving', skills: ['percent-word-problems', 'percent-of-value'], difficulty: 'easy', type: 'multiple-choice',
    question: 'After a $20\\%$ discount, an item costs $\\$40$. What was the original price?',
    choices: [{ id: 'A', text: '$\\$50$' }, { id: 'B', text: '$\\$48$' }, { id: 'C', text: '$\\$60$' }, { id: 'D', text: '$\\$32$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Reverse Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** A $20\\%$ discount leaves $80\\%$ of the original, so $0.80 \\times \\text{original} = 40 \\Rightarrow \\text{original} = \\frac{40}{0.80} = 50$, choice A.\n\n**The Full Solution:**\nStep 1: After taking $20\\%$ off, the price is $(100 - 20)\\% = 80\\%$ of the original.\nStep 2: Set up $0.80 \\cdot p = 40$ where $p$ is the original price.\nStep 3: Divide: $p = \\frac{40}{0.80} = \\$50$, choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$48$): computed $40 \\times 1.20$, treating the discount as a markup on the sale price.\n* Choice C ($\\$60$): added $20$ to $40$ instead of working with the percent factor.\n* Choice D ($\\$32$): took another $20\\%$ off the $\\$40$.\n\n**Test Day Takeaway:** \"$X\\%$ off\" leaves $(100 - X)\\%$ of the original. Divide the sale price by that decimal to undo the discount — never just add the rate back.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-437', domain: 'problem-solving', skills: ['percent-word-problems', 'percent-of-value'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A bill including $25\\%$ tax totals $\\$75$. What was the bill before tax was added?',
    choices: [{ id: 'A', text: '$\\$60$' }, { id: 'B', text: '$\\$56$' }, { id: 'C', text: '$\\$50$' }, { id: 'D', text: '$\\$93.75$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Reverse Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Adding $25\\%$ tax multiplies by $1.25$, so $1.25 \\times \\text{original} = 75 \\Rightarrow \\text{original} = \\frac{75}{1.25} = 60$, choice A.\n\n**The Full Solution:**\nStep 1: Tax adds onto the bill, so the total is $(100 + 25)\\% = 125\\%$ of the pre-tax amount.\nStep 2: Set up $1.25 \\cdot b = 75$ where $b$ is the bill before tax.\nStep 3: Divide: $b = \\frac{75}{1.25} = \\$60$, choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$56$): an arbitrary subtraction that doesn't match the tax factor.\n* Choice C ($\\$50$): subtracted $25$ from $75$ instead of dividing by $1.25$.\n* Choice D ($\\$93.75$): computed $75 \\times 1.25$, applying tax in the wrong direction.\n\n**Test Day Takeaway:** Tax adds, so divide the total by $(1 + r)$ to recover the pre-tax amount.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-438', domain: 'problem-solving', skills: ['percent-word-problems', 'percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A town\'s population grew by $15\\%$ to reach $11{,}500$ this year. What was the population last year?',
    choices: [{ id: 'A', text: '$10{,}000$' }, { id: 'B', text: '$9{,}775$' }, { id: 'C', text: '$13{,}225$' }, { id: 'D', text: '$9{,}500$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Reverse Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Growth of $15\\%$ multiplies by $1.15$, so $1.15 \\times \\text{previous} = 11{,}500 \\Rightarrow \\text{previous} = \\frac{11{,}500}{1.15} = 10{,}000$, choice A.\n\n**The Full Solution:**\nStep 1: A $15\\%$ increase makes this year $(100 + 15)\\% = 115\\%$ of last year.\nStep 2: Set up $1.15 \\cdot p = 11{,}500$ where $p$ is last year's population.\nStep 3: Divide: $p = \\frac{11{,}500}{1.15} = 10{,}000$, choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($9{,}775$): took $15\\%$ off the new value, $11{,}500 \\times 0.85$.\n* Choice C ($13{,}225$): computed $11{,}500 \\times 1.15$, growing again instead of undoing.\n* Choice D ($9{,}500$): subtracted a rough $2{,}000$ rather than dividing by $1.15$.\n\n**Test Day Takeaway:** Growth means divide by $(1 + r)$ to step backward. Taking the percent off the new total is not the inverse operation.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-439', domain: 'problem-solving', skills: ['percent-word-problems', 'percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'After a $30\\%$ increase, a value becomes $\\$260$. What was the original value?',
    choices: [{ id: 'A', text: '$\\$200$' }, { id: 'B', text: '$\\$182$' }, { id: 'C', text: '$\\$338$' }, { id: 'D', text: '$\\$230$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Reverse Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** A $30\\%$ increase multiplies by $1.30$, so $\\text{original} = \\frac{260}{1.30} = 200$, choice A.\n\n**The Full Solution:**\nStep 1: After a $30\\%$ increase the value is $(100 + 30)\\% = 130\\%$ of the original.\nStep 2: Set up $1.30 \\cdot v = 260$ where $v$ is the original value.\nStep 3: Divide: $v = \\frac{260}{1.30} = \\$200$, choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$182$): took $30\\%$ off the final value, $260 \\times 0.70$.\n* Choice C ($\\$338$): computed $260 \\times 1.30$, increasing again.\n* Choice D ($\\$230$): subtracted $30$ from $260$ instead of using the factor.\n\n**Test Day Takeaway:** Work through the multiplicative factor: divide by $(1 + r)$ to undo growth. Never add or subtract the raw rate to the final amount.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-440', domain: 'problem-solving', skills: ['percent-word-problems', 'percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'An account balance increased by $8\\%$ over the year to reach $\\$5{,}400$. What was the balance at the start of the year?',
    choices: [{ id: 'A', text: '$\\$5{,}000$' }, { id: 'B', text: '$\\$4{,}968$' }, { id: 'C', text: '$\\$5{,}832$' }, { id: 'D', text: '$\\$4{,}500$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Reverse Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** An $8\\%$ increase multiplies by $1.08$, so $\\text{start} = \\frac{5{,}400}{1.08} = 5{,}000$, choice A.\n\n**The Full Solution:**\nStep 1: An $8\\%$ increase makes the end-of-year balance $(100 + 8)\\% = 108\\%$ of the starting balance.\nStep 2: Set up $1.08 \\cdot s = 5{,}400$ where $s$ is the starting balance.\nStep 3: Divide: $s = \\frac{5{,}400}{1.08} = \\$5{,}000$, choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$4{,}968$): took $8\\%$ off the final, $5{,}400 \\times 0.92$.\n* Choice C ($\\$5{,}832$): computed $5{,}400 \\times 1.08$, growing again.\n* Choice D ($\\$4{,}500$): subtracted an arbitrary $900$ instead of dividing by $1.08$.\n\n**Test Day Takeaway:** When the rate is a growth percent, divide by $(1 + r)$ to recover the starting value.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-441', domain: 'problem-solving', skills: ['percent-word-problems', 'percent-of-value'], difficulty: 'hard', type: 'multiple-choice',
    question: 'After applying a $20\\%$ discount and then adding $8\\%$ sales tax, an item cost $\\$108$. What was the original price?',
    choices: [{ id: 'A', text: '$\\$125$' }, { id: 'B', text: '$\\$120$' }, { id: 'C', text: '$\\$135$' }, { id: 'D', text: '$\\$108$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Reverse Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Chain the factors: a $20\\%$ discount is $\\times 0.80$ and $8\\%$ tax is $\\times 1.08$, so $0.80 \\times 1.08 \\times \\text{original} = 108 \\Rightarrow 0.864 \\times \\text{original} = 108 \\Rightarrow \\text{original} = \\frac{108}{0.864} = 125$, choice A.\n\n**The Full Solution:**\nStep 1: The discount leaves $80\\%$, multiplying by $0.80$.\nStep 2: Tax then adds $8\\%$, multiplying by $1.08$.\nStep 3: Combine: $0.80 \\cdot 1.08 = 0.864$, so $0.864 \\cdot p = 108$.\nStep 4: Divide: $p = \\frac{108}{0.864} = \\$125$, choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$120$): treated the two changes as a single $10\\%$ net reduction, $\\frac{108}{0.90}$, instead of chaining $0.80 \\times 1.08$.\n* Choice C ($\\$135$): undid only the discount, $\\frac{108}{0.80}$, ignoring tax entirely.\n* Choice D ($\\$108$): copies the final price, applying neither factor.\n\n**Test Day Takeaway:** Chain every multiplicative factor into one product, then divide the final price by that product a single time.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- reverse-percent-multi-step (4 → 10) ---
  { id: 'bank-ps-442', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'An item is discounted $25\\%$, then discounted an additional $10\\%$ off the new price. After both discounts, the final price is $\\$54$. What was the original price?',
    choices: [{ id: 'A', text: '$\\$80$' }, { id: 'B', text: '$\\$72$' }, { id: 'C', text: '$\\$96$' }, { id: 'D', text: '$\\$66$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Reverse Percent Multi-Step**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Each discount is a factor: $0.75 \\times 0.90 \\times \\text{original} = 54 \\Rightarrow 0.675 \\times \\text{original} = 54 \\Rightarrow \\text{original} = \\frac{54}{0.675} = 80$, choice A.\n\n**The Full Solution:**\nStep 1: A $25\\%$ discount leaves $75\\%$, multiplying by $0.75$.\nStep 2: The additional $10\\%$ off the new price multiplies by $0.90$.\nStep 3: Combine: $0.75 \\cdot 0.90 = 0.675$, so $0.675 \\cdot p = 54$.\nStep 4: Divide: $p = \\frac{54}{0.675} = \\$80$, choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$72$): applied only the $25\\%$ discount, $\\frac{54}{0.75}$, skipping the second cut.\n* Choice C ($\\$96$): used the $25\\%$ factor for both steps, $\\frac{54}{0.75 \\times 0.75}$, instead of $0.75 \\times 0.90$.\n* Choice D ($\\$66$): mis-combined the two factors and landed short of the true product.\n\n**Test Day Takeaway:** Successive discounts multiply, they don't add. Combine the two factors, then divide the final price by the product.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-percent-multi-step', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-443', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'An item is marked up $50\\%$, then discounted $20\\%$ off the marked-up price. After both changes, the price is $\\$108$. What was the original price?',
    choices: [{ id: 'A', text: '$\\$90$' }, { id: 'B', text: '$\\$120$' }, { id: 'C', text: '$\\$72$' }, { id: 'D', text: '$\\$135$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Reverse Percent Multi-Step**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Chain the factors: $1.50 \\times 0.80 \\times \\text{original} = 108 \\Rightarrow 1.20 \\times \\text{original} = 108 \\Rightarrow \\text{original} = \\frac{108}{1.20} = 90$, choice A.\n\n**The Full Solution:**\nStep 1: A $50\\%$ markup multiplies by $1.50$.\nStep 2: A $20\\%$ discount off the marked-up price multiplies by $0.80$.\nStep 3: Combine: $1.50 \\cdot 0.80 = 1.20$, so $1.20 \\cdot p = 108$.\nStep 4: Divide: $p = \\frac{108}{1.20} = \\$90$, choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$120$): treated the net change as a single $10\\%$ reduction, $\\frac{108}{0.90}$, instead of the true $1.20$ factor.\n* Choice C ($\\$72$): treated the net as a flat $50\\%$ markup, $\\frac{108}{1.50}$, instead of $1.50 \\times 0.80$.\n* Choice D ($\\$135$): undid only the discount, $\\frac{108}{0.80}$, ignoring the markup.\n\n**Test Day Takeaway:** A $50\\%$ markup then $20\\%$ off is $1.50 \\times 0.80 = 1.20$ — a net $20\\%$ markup. Multiply the factors first, then divide once.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'reverse-percent-multi-step', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-ps-444', domain: 'problem-solving', skills: ['percent-of-value', 'percent-word-problems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A stock rose $20\\%$ one year and then fell $25\\%$ the next year. After both changes, the price is $\\$90$. What was the original price?',
    choices: [{ id: 'A', text: '$\\$100$' }, { id: 'B', text: '$\\$95$' }, { id: 'C', text: '$\\$120$' }, { id: 'D', text: '$\\$75$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Reverse Percent Multi-Step**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Chain the factors: $1.20 \\times 0.75 \\times \\text{original} = 90 \\Rightarrow 0.90 \\times \\text{original} = 90 \\Rightarrow \\text{original} = \\frac{90}{0.90} = 100$, choice A.\n\n**The Full Solution:**\nStep 1: A $20\\%$ rise multiplies by $1.20$.\nStep 2: A $25\\%$ fall the next year multiplies by $0.75$.\nStep 3: Combine: $1.20 \\cdot 0.75 = 0.90$, so $0.90 \\cdot p = 90$.\nStep 4: Divide: $p = \\frac{90}{0.90} = \\$100$, choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$95$): assumed the rise and fall nearly cancel, so the original must sit just above the final $\\$90$ — instead of using the factors.\n* Choice C ($\\$120$): undid only the $25\\%$ fall, $\\frac{90}{0.75}$, ignoring the rise.\n* Choice D ($\\$75$): undid only the $20\\%$ rise, $\\frac{90}{1.20}$, ignoring the fall.\n\n**Test Day Takeaway:** A rise and fall of equal-looking percents do not cancel: $1.20 \\times 0.75 = 0.90$ is a net $10\\%$ loss. Always multiply the factors.",
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
    diagram: { type: 'barChart', params: { title: 'Data sets A and B (identical)', data: [{ label: '10–19', value: 8 }, { label: '20–29', value: 10 }, { label: '30–39', value: 7 }, { label: '40–49', value: 5 }], xAxisLabel: 'Value', yAxisLabel: 'Frequency', yMax: 12, yStep: 2 } },
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
    question: 'In a survey conducted at a local university, the table shows the results of how $810$ randomly selected students would vote for candidates Maya or Jordan for student council president. If $8{,}910$ students at the university vote in the election, by how many votes would Maya be expected to win?',
    diagram: { type: 'dataTable', params: { headers: ['Candidate', 'Votes'], rows: [['Maya', '512'], ['Jordan', '298']] } },
    choices: [{ id: 'A', text: '$214$' }, { id: 'B', text: '$2{,}354$' }, { id: 'C', text: '$5{,}632$' }, { id: 'D', text: '$3{,}278$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Poll Scaling — Margin of Victory (Variant)**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The full vote is $11$ times the poll ($\\frac{8910}{810}=11$). Scale the poll margin: Maya leads by $512-298=214$, so the projected margin is $11\\times 214=2354$.\n\n**The Full Solution:**\nStep 1: Find the scaling factor from the poll size to the full electorate: $\\frac{8910}{810}=11$.\nStep 2: Find the poll margin: Maya $512$ minus Jordan $298$ gives $214$ votes.\nStep 3: Because the poll is representative, scale the margin by the same factor: $11\\times 214=2354$, which is Choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($214$): the poll margin without scaling up to the full electorate.\n* Choice C ($5{,}632$): scales only Maya's count ($11\\times 512$) instead of the margin.\n* Choice D ($3{,}278$): scales only Jordan's count ($11\\times 298$) instead of the margin.\n\n**Test Day Takeaway:** For a representative poll, multiply the margin (the difference) by the population scaling factor — scaling each candidate separately and subtracting gives the same result, but scaling the margin directly is faster.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'proportion-setup', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-ps-463', domain: 'problem-solving', skills: ['conditional-probability', 'two-way-table'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A shipping facility processed $400$ packages in one day. The table above classifies the packages by mass and by the delivery zone to which each package was shipped. If one of the packages shipped to Zone 1 is selected at random, which of the following is closest to the probability that the selected package has a mass of at least $1$ kilogram?',
    diagram: { type: 'twoWayTable', params: { headers: ['Mass', 'Zone 1', 'Zone 2'], rows: [['Less than 1 kg', '54', '66'], ['1 kg to 5 kg', '87', '63'], ['More than 5 kg', '41', '89']] } },
    choices: [{ id: 'A', text: '$0.30$' }, { id: 'B', text: '$0.32$' }, { id: 'C', text: '$0.46$' }, { id: 'D', text: '$0.70$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Conditioning on Zone 1 makes that column the denominator: $54 + 87 + 41 = 182$. \"At least $1$ kg\" spans the bottom two rows: $87 + 41 = 128$. $\\frac{128}{182} \\approx 0.703$, closest to $0.70$.\n\n**The Full Solution:**\nStep 1: \"Selected from the packages shipped to Zone 1\" fixes the denominator as the whole Zone 1 column. No total is given in the table, so add it yourself: $54 + 87 + 41 = 182$.\nStep 2: The event \"mass of at least $1$ kilogram\" covers TWO rows — $1$ kg to $5$ kg AND more than $5$ kg: $87 + 41 = 128$.\nStep 3: $P(\\text{mass} \\geq 1 \\text{ kg} \\mid \\text{Zone 1}) = \\frac{128}{182} = \\frac{64}{91} \\approx 0.7033$, which is closest to $0.70$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.30$): the complement, $\\frac{54}{182} \\approx 0.297$ — the probability the Zone 1 package is UNDER $1$ kg.\n* Choice B ($0.32$): $\\frac{128}{400} = 0.32$ — divides by all $400$ packages, computing the joint probability instead of conditioning on Zone 1.\n* Choice C ($0.46$): $\\frac{128}{280} \\approx 0.457$ — conditions on the wrong event, computing $P(\\text{Zone 1} \\mid \\text{mass} \\geq 1\\text{ kg})$ with denominator $150 + 130 = 280$.\n\n**Test Day Takeaway:** In \"given that\" problems the given group is the denominator — and when the table has no totals row, or the event spans several rows, sum every cell the condition covers before dividing.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'two-way-table-conditional', sourceRef: 'pilot-m4-table-conditional', authoredBy: 'seva-cb-craft-pilot', createdAt: '2026-08-13' }
];
