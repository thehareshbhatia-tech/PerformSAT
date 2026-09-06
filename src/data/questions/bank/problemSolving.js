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
    explanation: "**SAT Pattern: Percent to Decimal**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Divide by $100$, which shifts the decimal point two places to the left: $4.75\\% = 0.0475$.\n\n**The Full Solution:**\nStep 1: The percent sign means \"per $100$,\" so $4.75\\% = \\frac{4.75}{100}$.\nStep 2: Dividing by $100$ moves the decimal point two places to the left: $4.75 \\to 0.0475$.\nStep 3: Check by multiplying back: $0.0475 \\times 100 = 4.75$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.00475$): shifts the decimal point three places to the left, dividing by $1{,}000$ instead of $100$.\n* Choice C ($0.475$): shifts the decimal point only one place to the left (divides by $10$).\n* Choice D ($4.75$): drops the percent sign without dividing by $100$ at all.\n\n**Test Day Takeaway:** Percent to decimal is a two-place shift to the left. A percent under $5\\%$ must become a decimal under $0.05$.",
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
    explanation: "**SAT Pattern: Percent of Total**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $28\\%$ of $1{,}250$ is $0.28 \\times 1{,}250 = 350$.\n\n**The Full Solution:**\nStep 1: \"$28\\%$ of\" a quantity means multiply the quantity by $\\frac{28}{100} = 0.28$.\nStep 2: $0.28 \\times 1{,}250 = 350$.\nStep 3: Check: $10\\%$ of $1{,}250$ is $125$, so $28\\%$ should be a bit under $3 \\times 125 = 375$. $350$ fits. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($35$): uses $0.028$ instead of $0.28$, moving the decimal point one place too far.\n* Choice C ($900$): finds the number of tickets that were not student tickets ($72\\%$ of $1{,}250$).\n* Choice D ($3{,}500$): multiplies by $2.8$ instead of $0.28$, which gives more tickets than were sold.\n\n**Test Day Takeaway:** \"$p\\%$ of $N$\" is $\\frac{p}{100} \\times N$. A quick $10\\%$ benchmark catches any misplaced decimal point.",
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
    explanation: "**SAT Pattern: Compound Percent Of**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Take the percents in order: $0.36 \\times 2{,}500 = 900$ households have a garden, and $0.15 \\times 900 = 135$ of those keep bees.\n\n**The Full Solution:**\nStep 1: The second percent applies to the garden households only, not to all $2{,}500$. First find the garden households: $0.36 \\times 2{,}500 = 900$.\nStep 2: Then take $15\\%$ of that group: $0.15 \\times 900 = 135$.\nStep 3: Check with one combined factor: $0.36 \\times 0.15 = 0.054$, and $0.054 \\times 2{,}500 = 135$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($375$): takes $15\\%$ of all $2{,}500$ households instead of $15\\%$ of the $900$ garden households.\n* Choice C ($900$): stops after the first step and reports the number of households with a garden.\n* Choice D ($1{,}275$): adds the percents ($36\\% + 15\\% = 51\\%$) and takes $51\\%$ of $2{,}500$.\n\n**Test Day Takeaway:** \"Of those\" signals a percent of a subgroup. Multiply the percents as decimals, never add them.",
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
    explanation: "**SAT Pattern: Complement Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The trees that are not apple trees make up $100\\% - 35\\% = 65\\%$, and $0.65 \\times 460 = 299$.\n\n**The Full Solution:**\nStep 1: If $35\\%$ of the trees are apple trees, the remaining $100\\% - 35\\% = 65\\%$ are not.\nStep 2: $0.65 \\times 460 = 299$.\nStep 3: Check: the apple trees number $0.35 \\times 460 = 161$, and $161 + 299 = 460$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($65$): reports the complement percent itself instead of applying it to the $460$ trees.\n* Choice B ($161$): finds the number of apple trees, the group the question excludes.\n* Choice D ($425$): subtracts $35$ trees instead of $35\\%$ of the trees.\n\n**Test Day Takeaway:** \"Not\" flips to the complement: use $100\\% - p\\%$ before multiplying, or subtract the part from the whole.",
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
    explanation: "**SAT Pattern: Compound Filter**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Interviewed: $0.75 \\times 240 = 180$. Offered: $0.35 \\times 180 = 63$.\n\n**The Full Solution:**\nStep 1: Apply the first filter to all applicants: $0.75 \\times 240 = 180$ were interviewed.\nStep 2: Apply the second filter to the interviewed group only: $0.35 \\times 180 = 63$ were offered a fellowship.\nStep 3: Check: the combined fraction is $0.75 \\times 0.35 = 0.2625$, and $0.2625 \\times 240 = 63$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($84$): takes $35\\%$ of all $240$ applicants rather than of the $180$ who were interviewed.\n* Choice C ($117$): finds the interviewed applicants who were not offered a fellowship, $180 - 63$.\n* Choice D ($180$): stops after the first filter and reports the number interviewed.\n\n**Test Day Takeaway:** Each \"of those\" narrows the base. Apply the percents in sequence, each to the group the previous step produced.",
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
    explanation: "**SAT Pattern: Sequential Spending Percent**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Keep the fraction that remains at each stage: $18{,}000 \\times 0.65 \\times 0.80 \\times 0.75 = 7{,}020$.\n\n**The Full Solution:**\nStep 1: After equipment, $100\\% - 35\\% = 65\\%$ remains: $0.65 \\times 18{,}000 = 11{,}700$.\nStep 2: Training takes $20\\%$ of that remainder, leaving $80\\%$: $0.80 \\times 11{,}700 = 9{,}360$. Travel takes $25\\%$ of the new remainder, leaving $75\\%$: $0.75 \\times 9{,}360 = 7{,}020$.\nStep 3: Check by adding the expenses: $6{,}300 + 2{,}340 + 2{,}340 = 10{,}980$, and $18{,}000 - 10{,}980 = 7{,}020$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3{,}600$): adds the percents ($35 + 20 + 25 = 80\\%$) and takes them all from the original grant, leaving $20\\%$ of $18{,}000$; the later percents apply to smaller remainders.\n* Choice C ($9{,}360$): stops after the second expense and omits the travel spending.\n* Choice D ($11{,}700$): stops after the first expense and omits both later expenses.\n\n**Test Day Takeaway:** \"Of the remaining amount\" means each percent uses a new, smaller base. Multiply the remaining fractions; never add the percents.",
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
    explanation: "**SAT Pattern: Median After Removal Reasoning**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Removing values from the low end can only push the middle rightward: the new median is the average of the original $8$th and $9$th values, both at least $62$.\n\n**The Full Solution:**\nStep 1: In the ordered list of $13$ values, the median is the $7$th value, so $v_7 = 62$, every value from $v_1$ to $v_6$ is at most $62$, and every value from $v_8$ to $v_{13}$ is at least $62$.\nStep 2: Removing $v_1, v_2, v_3$ leaves the $10$ values $v_4, \\ldots, v_{13}$. The new median is the mean of the $5$th and $6$th of these, which are $v_8$ and $v_9$.\nStep 3: Since $v_8 \\ge 62$ and $v_9 \\ge 62$, their mean is at least $62$. It equals $62$ only if $v_8 = v_9 = 62$, and it exceeds $62$ otherwise, so \"greater than or equal to $62$\" is the only statement that must hold. Check with $\\{50, 51, 52, 60, 60, 61, 62, 63, 64, 70, 71, 72, 73\\}$: after removal the median is $\\frac{63 + 64}{2} = 63.5 \\ge 62$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (less than $62$): reverses the direction: dropping small values cannot lower the median.\n* Choice B (equal to $62$): assumes the median is unchanged; that happens only if the $8$th and $9$th values both equal $62$, which is not guaranteed.\n* Choice C (less than or equal to $62$): allows decreases that are impossible and rules out the increase that typically occurs.\n\n**Test Day Takeaway:** Track positions, not values: after removing $k$ values from one end, locate the new middle position(s) in the original ordered list and use the inequalities the original median guarantees.",
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
    explanation: "**SAT Pattern: Median from Frequency Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** With $40$ students, the median averages the $20$th and $21$st values, and the running totals are $7$, then $19$, then $30$. Both positions fall in the \"$2$ siblings\" row, so the median is $2$.\n\n**The Full Solution:**\nStep 1: Total $= 7 + 12 + 11 + 6 + 4 = 40$. For an even count, the median is the mean of the $20$th and $21$st values in order.\nStep 2: Build cumulative counts: $0$ siblings covers positions $1$ to $7$; $1$ sibling covers $8$ to $19$; $2$ siblings covers $20$ to $30$; $3$ siblings covers $31$ to $36$; $4$ siblings covers $37$ to $40$.\nStep 3: Positions $20$ and $21$ both lie in the \"$2$ siblings\" row, so the median is $\\frac{2 + 2}{2} = 2$. Check: $19$ students reported fewer than $2$ and $10$ reported more than $2$, so the middle lands on $2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): reports the mode (the row with the largest frequency, $12$) or stops the cumulative count at $19$, one position short.\n* Choice B ($1.5$): averages $1$ and $2$ on the assumption that the $20$th and $21$st values straddle two rows; both actually sit in the $2$ row.\n* Choice D ($12$): reports the largest frequency instead of the value it corresponds to.\n\n**Test Day Takeaway:** For a frequency table, find the median position(s) from the total count, then walk the cumulative frequencies to see which value covers those positions.",
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
    explanation: "**SAT Pattern: Confidence Interval from Margin of Error**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Estimate $\\pm$ margin of error gives the plausible range for the POPULATION: $62\\% - 3.2\\% = 58.8\\%$ to $62\\% + 3.2\\% = 65.2\\%$.\n\n**The Full Solution:**\nStep 1: The sample percent, $62\\%$, is an estimate of the percent of ALL adults in the county. The margin of error describes how far the true population percent plausibly lies from that estimate.\nStep 2: Plausible range $= 62\\% \\pm 3.2\\%$, that is, from $58.8\\%$ to $65.2\\%$.\nStep 3: The conclusion applies to the population (all adults in the county), not to the sample, whose percent is known exactly. Check: $65.2 - 58.8 = 6.4 = 2(3.2)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (exactly $62\\%$): treats a sample estimate as the exact population value; the margin of error exists because the estimate is uncertain.\n* Choice B (the $900$ surveyed): applies the interval to the sample itself, but the sample percent is exactly $62\\%$ and needs no interval.\n* Choice C ($30\\%$ to $94\\%$): uses $32\\%$ as the margin of error, misplacing the decimal point in $3.2\\%$.\n\n**Test Day Takeaway:** Estimate $\\pm$ margin of error is a statement about the population parameter, always phrased as \"plausible,\" never as \"exactly\" and never about the sample.",
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
    explanation: "**SAT Pattern: Rate × Time = Total (Mixed Units)**\n\n**The correct answer is $2000$.**\n\n**The Fast Way (~15s):** $15$ minutes is $\\frac{15}{60} = 0.25$ hour, so the time is $6.25$ hours and the distance is $320 \\times 6.25 = 2{,}000$ meters.\n\n**The Full Solution:**\nStep 1: Convert the time to hours, the unit in the rate: $6$ hours $15$ minutes $= 6 + \\frac{15}{60} = 6.25$ hours.\nStep 2: Distance $=$ rate $\\times$ time $= 320 \\times 6.25 = 2{,}000$ meters.\nStep 3: Check in pieces: $6$ hours gives $1{,}920$ meters, and $15$ minutes (a quarter hour) gives $80$ meters; $1{,}920 + 80 = 2{,}000$. $\\checkmark$\n\n**Common Mistakes:** Entering $1{,}968$ (writing $6$ hours $15$ minutes as $6.15$ hours; $15$ minutes is $0.25$ hour, not $0.15$); entering $1{,}935$ (adding $15$ meters for the $15$ minutes); entering $196{,}800$ (multiplying by $615$).\n\n**Test Day Takeaway:** Minutes become a fraction of an hour by dividing by $60$; \"$6$ hours $15$ minutes\" is $6.25$, never $6.15$.",
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
    id: "bank-ps-061",
    domain: "problem-solving",
    skills: ["percent-change"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A nursery grew $180$ seedlings in its first growing season and $225$ seedlings in its second growing season. The number of seedlings grown in the second season is $p\\%$ greater than the number grown in the first season. What is the value of $p$?",
    choices: [
      // distractor: divides the change by the new count (45/225) instead of the original
      { id: "A", text: "$20$" },
      { id: "B", text: "$25$" },
      // distractor: reports the raw change in seedlings, not a percent
      { id: "C", text: "$45$" },
      // distractor: reports the ratio 225/180 = 1.25 as a percent instead of the increase
      { id: "D", text: "$125$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent Increase Basic**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The increase is $225 - 180 = 45$ seedlings on a base of $180$, and $\\frac{45}{180} = 0.25$, so $p = 25$.\n\n**The Full Solution:**\nStep 1: Percent increase $= \\frac{\\text{new} - \\text{original}}{\\text{original}} \\times 100$. The original is the first-season count, $180$.\nStep 2: The change is $225 - 180 = 45$, so the percent increase is $\\frac{45}{180} \\times 100 = 25$.\nStep 3: Check: $25\\%$ of $180$ is $0.25(180) = 45$, and $180 + 45 = 225$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): divides the $45$-seedling change by the NEW count, $\\frac{45}{225} = 0.20$, instead of by the original count.\n* Choice C ($45$): reports the change in the number of seedlings itself rather than the change as a percent of the original.\n* Choice D ($125$): reports the ratio $\\frac{225}{180} = 1.25$ as a percent; that is what the second season is OF the first, not how much greater it is.\n\n**Test Day Takeaway:** \"Percent greater than\" always divides the change by the starting value, and the answer is the change only, not the whole ratio.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-change-basic",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── Additional coverage: more calculate-mean ───────────────────
  {
    id: "bank-ps-062",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The mean mass of $6$ pumpkins is $8.5$ kilograms. The pumpkin with the greatest mass, $12$ kilograms, is removed from the group. What is the mean mass, in kilograms, of the remaining $5$ pumpkins?",
    choices: [
      // distractor: subtracts 12 but divides by the original count of 6 (39/6)
      { id: "A", text: "$6.5$" },
      { id: "B", text: "$7.8$" },
      // distractor: assumes the mean is unchanged after removal
      { id: "C", text: "$8.5$" },
      // distractor: divides the original total by 5 without removing the 12 (51/5)
      { id: "D", text: "$10.2$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Mean After Removal**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Total mass $= 6(8.5) = 51$ kilograms. Remove $12$: $51 - 12 = 39$, and $\\frac{39}{5} = 7.8$.\n\n**The Full Solution:**\nStep 1: A mean times a count gives a total: the $6$ pumpkins have a combined mass of $6 \\times 8.5 = 51$ kilograms.\nStep 2: Removing the $12$-kilogram pumpkin leaves a combined mass of $51 - 12 = 39$ kilograms shared by $5$ pumpkins.\nStep 3: New mean $= \\frac{39}{5} = 7.8$ kilograms. Check: $5(7.8) + 12 = 39 + 12 = 51 = 6(8.5)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6.5$): subtracts the $12$ kilograms but still divides by the original $6$ pumpkins, $\\frac{39}{6} = 6.5$.\n* Choice C ($8.5$): assumes the mean is unchanged; removing a value above the mean must pull the mean down.\n* Choice D ($10.2$): divides the ORIGINAL total by the new count, $\\frac{51}{5} = 10.2$, forgetting to remove the $12$ kilograms.\n\n**Test Day Takeaway:** Work through the total: mean $\\times$ count, adjust the total, then divide by the NEW count.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "mean-removal",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── Additional coverage: more find-median ──────────────────────
  {
    id: "bank-ps-063",
    domain: "problem-solving",
    skills: ["find-median"],
    difficulty: "medium",
    type: "fill-in",
    question: "The table gives the thickness, in millimeters, of each of $10$ glass samples produced by a machine. What is the median thickness, in millimeters, of the $10$ samples?",
    diagram: { type: "dataTable", params: { headers: ["Sample", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], rows: [["Thickness (mm)", "3.4", "2.9", "3.8", "3.1", "3.6", "2.7", "3.3", "3.9", "3.0", "3.5"]] } },
    correctAnswer: "3.35",
    explanation: "**SAT Pattern: Median of Even Decimal Set**\n\n**The correct answer is $3.35$.**\n\n**The Fast Way (~25s):** Sort the ten values; the median is the mean of the $5$th and $6$th: $\\frac{3.3 + 3.4}{2} = 3.35$.\n\n**The Full Solution:**\nStep 1: Order the thicknesses from least to greatest: $2.7,\\ 2.9,\\ 3.0,\\ 3.1,\\ 3.3,\\ 3.4,\\ 3.5,\\ 3.6,\\ 3.8,\\ 3.9$.\nStep 2: With an even count of $10$ values, the median is the average of the two middle values, the $5$th and $6$th: $3.3$ and $3.4$.\nStep 3: Median $= \\frac{3.3 + 3.4}{2} = \\frac{6.7}{2} = 3.35$. Check: exactly five values ($2.7$ through $3.3$) lie below $3.35$ and five ($3.4$ through $3.9$) lie above it. $\\checkmark$\n\n**Common Mistakes:** Reading the middle of the table in its original order, $\\frac{3.6 + 2.7}{2} = 3.15$, without sorting first; reporting only $3.3$ or $3.4$ instead of their average; or computing the mean, $\\frac{33.2}{10} = 3.32$, which the question does not ask for.\n\n**Test Day Takeaway:** Median means sort first. For an even count, average the two middle values, and note the answer may not be a value in the list.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "median-even-decimal",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── Additional coverage: more unit-conversion ──────────────────
  {
    id: "bank-ps-064",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A runner completes $12$ laps of a loop that is $625$ meters long. What is the total distance, in kilometers, that the runner completes? ($1$ kilometer $= 1{,}000$ meters)",
    choices: [
      // distractor: divides 7,500 by 100,000 (five decimal places)
      { id: "A", text: "$0.075$" },
      // distractor: divides 7,500 by 10,000 (one place too many)
      { id: "B", text: "$0.75$" },
      { id: "C", text: "$7.5$" },
      // distractor: divides by 100 instead of 1,000
      { id: "D", text: "$75$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Meters to Kilometers**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $12 \\times 625 = 7{,}500$ meters, and dividing by $1{,}000$ gives $7.5$ kilometers.\n\n**The Full Solution:**\nStep 1: Total distance in meters: $12 \\times 625 = 7{,}500$ meters.\nStep 2: Convert using $1$ kilometer $= 1{,}000$ meters: $7{,}500 \\text{ m} \\times \\frac{1 \\text{ km}}{1{,}000 \\text{ m}} = 7.5$ kilometers.\nStep 3: Check: $7.5$ kilometers is $7{,}500$ meters, and $\\frac{7{,}500}{625} = 12$ laps. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.075$): moves the decimal five places, dividing $7{,}500$ by $100{,}000$.\n* Choice B ($0.75$): divides by $10{,}000$, one factor of $10$ too many.\n* Choice D ($75$): divides by $100$ instead of $1{,}000$, as if there were $100$ meters in a kilometer.\n\n**Test Day Takeaway:** Kilo- means $1{,}000$; meters to kilometers is always a division by $1{,}000$, three decimal places, no more and no less.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "single-unit-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── Mixed / cross-skill questions ──────────────────────────────
  {
    id: "bank-ps-065",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-change"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A storage tank held $8{,}000$ liters of fuel. During the first week, $15\\%$ of the fuel was used. During the second week, $10\\%$ of the fuel remaining after the first week was used. How many liters of fuel remained in the tank after the second week?",
    choices: [
      // distractor: adds the percents to 25% and removes it all from 8,000 at once
      { id: "A", text: "$6{,}000$" },
      { id: "B", text: "$6{,}120$" },
      // distractor: stops after the first week
      { id: "C", text: "$6{,}800$" },
      // distractor: applies only the 10% to the original 8,000
      { id: "D", text: "$7{,}200$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sequential Percent Removal**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Keep $85\\%$, then keep $90\\%$ of that: $8{,}000(0.85)(0.90) = 6{,}120$ liters.\n\n**The Full Solution:**\nStep 1: After the first week, $100\\% - 15\\% = 85\\%$ of the fuel remains: $8{,}000 \\times 0.85 = 6{,}800$ liters.\nStep 2: The second week removes $10\\%$ of the REMAINING $6{,}800$ liters, so $90\\%$ of it stays: $6{,}800 \\times 0.90 = 6{,}120$ liters.\nStep 3: Check: week two used $6{,}800 - 6{,}120 = 680$ liters, which is $10\\%$ of $6{,}800$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6{,}000$): adds the percents to $25\\%$ and removes it all at once, $8{,}000(0.75)$; but the second $10\\%$ is taken from a smaller amount.\n* Choice C ($6{,}800$): stops after the first week.\n* Choice D ($7{,}200$): applies only the $10\\%$ to the original $8{,}000$ liters and skips the first week entirely.\n\n**Test Day Takeaway:** Successive percents multiply the remaining factors, $(1 - 0.15)(1 - 0.10)$; they never add.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "successive-percent-application",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-066",
    domain: "problem-solving",
    skills: ["calculate-mean", "find-median"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The dot plot shows the number of fish caught by each of $8$ anglers during a fishing tournament. Which of the following statements about the mean and the median of the data set is true?",
    diagram: { type: "dotPlot", params: { data: [{ value: 2, count: 1 }, { value: 3, count: 2 }, { value: 4, count: 3 }, { value: 5, count: 1 }, { value: 11, count: 1 }], xMin: 0, xMax: 12, xLabel: "Number of fish caught" } },
    choices: [
      // distractor: reverses the direction an outlier pulls the mean
      { id: "A", text: "The mean is less than the median." },
      // distractor: assumes a symmetric distribution around the tallest stack
      { id: "B", text: "The mean is equal to the median." },
      // distractor: correct median, but takes it as the mean too (mean is 4.5)
      { id: "C", text: "The mean and the median are both equal to $4$." },
      { id: "D", text: "The mean is greater than the median." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Mean-Median Comparison**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Seven of the values sit at $2$ through $5$ and one sits far out at $11$. That single high value pulls the mean up without moving the median, so mean $>$ median.\n\n**The Full Solution:**\nStep 1: Read the values from the dot plot: $2, 3, 3, 4, 4, 4, 5, 11$.\nStep 2: Median: with $8$ values, average the $4$th and $5$th, $\\frac{4 + 4}{2} = 4$.\nStep 3: Mean: $\\frac{2 + 3 + 3 + 4 + 4 + 4 + 5 + 11}{8} = \\frac{36}{8} = 4.5$. Since $4.5 > 4$, the mean is greater than the median. Check: replacing the $11$ with a $4$ would give a mean of $\\frac{29}{8} \\approx 3.6$, so the $11$ is exactly what lifts the mean above the median. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: reverses the effect of the outlier; a value far ABOVE the rest pulls the mean up, not down.\n* Choice B: assumes the tallest stack is at the center of the data, so the two measures should coincide; the $11$ breaks that symmetry.\n* Choice C: gets the median right ($4$) but takes it as the mean too; the mean is $4.5$.\n\n**Test Day Takeaway:** An extreme value drags the mean toward it and leaves the median alone; a long tail to the right means mean $>$ median.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "mean-median-comparison",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-067",
    domain: "problem-solving",
    skills: ["unit-conversion", "rate-conversion"],
    difficulty: "hard",
    type: "fill-in",
    question: "Water flows through a pipe at a constant rate of $2.4$ liters per second. At this rate, how many cubic meters of water flow through the pipe in $1$ hour? ($1$ cubic meter $= 1{,}000$ liters)",
    correctAnswer: "8.64",
    explanation: "**SAT Pattern: Chained Rate Conversion**\n\n**The correct answer is $8.64$.**\n\n**The Fast Way (~20s):** One hour is $3{,}600$ seconds, so $2.4 \\times 3{,}600 = 8{,}640$ liters, which is $\\frac{8{,}640}{1{,}000} = 8.64$ cubic meters.\n\n**The Full Solution:**\nStep 1: Convert the time unit. $1$ hour $= 60 \\times 60 = 3{,}600$ seconds, so in one hour the pipe delivers $2.4 \\frac{\\text{L}}{\\text{s}} \\times 3{,}600 \\text{ s} = 8{,}640$ liters.\nStep 2: Convert the volume unit: $8{,}640 \\text{ L} \\times \\frac{1 \\text{ m}^3}{1{,}000 \\text{ L}} = 8.64$ cubic meters.\nStep 3: Check with a single chain: $2.4 \\times \\frac{3{,}600}{1{,}000} = 2.4 \\times 3.6 = 8.64$. $\\checkmark$\n\n**Common Mistakes:** Multiplying by $60$ instead of $3{,}600$ (converting to minutes, not hours), which gives $144$ liters, or $0.144$ cubic meters; forgetting to convert liters at all and entering $8{,}640$; or dividing by $60$ somewhere in the chain because \"per second\" feels like it should shrink the number.\n\n**Test Day Takeaway:** Write every conversion as a fraction that cancels a unit, and chain them until only the requested units survive.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "chained-rate-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-068",
    domain: "problem-solving",
    skills: ["percent-word-problems", "weighted-mean"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A state taxes income at a rate of $3\\%$ on the first $\\$40{,}000$ of income and at a rate of $6\\%$ on any income above $\\$40{,}000$. What is the total tax, in dollars, on an income of $\\$65{,}000$?",
    choices: [
      // distractor: applies the 3% rate to the whole income
      { id: "A", text: "$1{,}950$" },
      { id: "B", text: "$2{,}700$" },
      // distractor: applies the 6% rate to the whole income
      { id: "C", text: "$3{,}900$" },
      // distractor: taxes the first tier correctly, then adds 6% of the FULL income (double counts)
      { id: "D", text: "$5{,}100$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Tiered Commission**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $3\\%$ of $40{,}000$ is $1{,}200$; the remaining $65{,}000 - 40{,}000 = 25{,}000$ is taxed at $6\\%$, giving $1{,}500$. Total: $\\$2{,}700$.\n\n**The Full Solution:**\nStep 1: Split the income into tiers: the first $\\$40{,}000$ and the excess, $65{,}000 - 40{,}000 = \\$25{,}000$.\nStep 2: Tax each tier at its own rate: $0.03(40{,}000) = 1{,}200$ and $0.06(25{,}000) = 1{,}500$.\nStep 3: Add: $1{,}200 + 1{,}500 = 2{,}700$. Check: the overall rate is $\\frac{2{,}700}{65{,}000} \\approx 4.2\\%$, which sits between $3\\%$ and $6\\%$ as it must. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1{,}950$): applies the lower rate to the whole income, $0.03(65{,}000)$, ignoring the higher tier.\n* Choice C ($3{,}900$): applies the $6\\%$ rate to the entire $\\$65{,}000$ instead of only to the amount above $\\$40{,}000$.\n* Choice D ($5{,}100$): taxes the first tier correctly ($1{,}200$) but then adds $6\\%$ of the FULL income ($3{,}900$), double-counting the first $\\$40{,}000$.\n\n**Test Day Takeaway:** In a tiered rate, only the portion above the threshold gets the higher rate; subtract the threshold before you multiply.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "tiered-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── Remaining easy questions ───────────────────────────────────
  {
    id: "bank-ps-069",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "easy",
    type: "fill-in",
    question: "An auditorium has $640$ seats. If $35\\%$ of the seats are in the balcony, how many of the seats are in the balcony?",
    correctAnswer: "224",
    explanation: "**SAT Pattern: Percent of Total**\n\n**The correct answer is $224$.**\n\n**The Fast Way (~10s):** $35\\%$ of $640$ is $0.35 \\times 640 = 224$.\n\n**The Full Solution:**\nStep 1: \"$35\\%$ of the seats\" means $\\frac{35}{100}$ of the total, so multiply: $0.35 \\times 640$.\nStep 2: $0.35 \\times 640 = 0.35 \\times 600 + 0.35 \\times 40 = 210 + 14 = 224$.\nStep 3: Check: $\\frac{224}{640} = 0.35$, so $224$ seats is $35\\%$ of the total. $\\checkmark$\n\n**Common Mistakes:** Dividing instead of multiplying, $\\frac{640}{0.35} \\approx 1{,}829$, which is larger than the whole auditorium; reporting the seats NOT in the balcony, $640 - 224 = 416$; or using $3.5$ instead of $0.35$ for $35\\%$.\n\n**Test Day Takeaway:** \"Percent of\" a known total is a multiplication by the decimal form of the percent, and the result must be smaller than the total whenever the percent is under $100$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-of-total",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-070",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The table shows the rainfall, in millimeters, recorded at a weather station in each of four months. What is the mean monthly rainfall, in millimeters, for these four months?",
    diagram: { type: "dataTable", params: { headers: ["Month", "Rainfall (mm)"], rows: [["March", "62"], ["April", "48"], ["May", "75"], ["June", "55"]] } },
    choices: [
      { id: "A", text: "$60$" },
      // distractor: reports the greatest value instead of the mean
      { id: "B", text: "$75$" },
      // distractor: divides the total by 3 instead of 4
      { id: "C", text: "$80$" },
      // distractor: stops at the sum
      { id: "D", text: "$240$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Mean of Four Values**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $62 + 48 + 75 + 55 = 240$, and $\\frac{240}{4} = 60$.\n\n**The Full Solution:**\nStep 1: The mean is the sum of the values divided by the number of values. Read the four rainfall amounts from the table: $62, 48, 75, 55$.\nStep 2: Sum: $62 + 48 = 110$, $75 + 55 = 130$, and $110 + 130 = 240$.\nStep 3: Divide by the $4$ months: $\\frac{240}{4} = 60$ millimeters. Check: the values above $60$ exceed it by $2 + 15 = 17$, and the values below fall short by $12 + 5 = 17$; the deviations balance. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($75$): reports the greatest value in the table rather than the average.\n* Choice C ($80$): divides the $240$ total by $3$ instead of by the $4$ months.\n* Choice D ($240$): stops at the sum and never divides.\n\n**Test Day Takeaway:** Mean $=$ total $\\div$ count; a quick sanity check is that the mean must sit between the smallest and largest values.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "basic-mean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-071",
    domain: "problem-solving",
    skills: ["find-median"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The dot plot shows the number of tomatoes harvested from each of $7$ tomato plants in a garden. What is the median number of tomatoes harvested from these plants?",
    diagram: { type: "dotPlot", params: { data: [{ value: 12, count: 1 }, { value: 14, count: 2 }, { value: 15, count: 1 }, { value: 17, count: 1 }, { value: 18, count: 1 }, { value: 22, count: 1 }], xMin: 10, xMax: 24, xLabel: "Number of tomatoes" } },
    choices: [
      { id: "A", text: "$15$" },
      // distractor: the mean (112/7), not the median
      { id: "B", text: "$16$" },
      // distractor: the midpoint of the range (12+22)/2
      { id: "C", text: "$17$" },
      // distractor: the greatest value
      { id: "D", text: "$22$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Median of Sorted Set**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Seven dots, so the median is the $4$th dot from the left: $12, 14, 14, \\mathbf{15}, 17, 18, 22$.\n\n**The Full Solution:**\nStep 1: A dot plot is already in order. List the values left to right, repeating stacked dots: $12, 14, 14, 15, 17, 18, 22$.\nStep 2: With $7$ values (an odd count), the median is the middle one, position $\\frac{7 + 1}{2} = 4$.\nStep 3: The $4$th value is $15$. Check: three values ($12, 14, 14$) lie below $15$ and three ($17, 18, 22$) lie above it. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($16$): is the mean, $\\frac{112}{7} = 16$, not the median.\n* Choice C ($17$): is the midpoint of the range, $\\frac{12 + 22}{2}$, which ignores how the dots are distributed.\n* Choice D ($22$): is the greatest value.\n\n**Test Day Takeaway:** On a dot plot, count dots from one end to the middle position; a stacked column counts once per dot.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "median-odd-set",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-072",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A photocopier produces $45$ copies per minute. At this rate, how many copies does the photocopier produce in $12$ minutes?",
    choices: [
      // distractor: divides the rate by the time (45/12)
      { id: "A", text: "$3.75$" },
      // distractor: adds 45 + 12
      { id: "B", text: "$57$" },
      { id: "C", text: "$540$" },
      // distractor: factor-of-10 slip (as if 120 minutes)
      { id: "D", text: "$5{,}400$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Rate × Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $45 \\times 12 = 540$ copies.\n\n**The Full Solution:**\nStep 1: A rate in copies per minute times a number of minutes gives copies: $\\frac{45 \\text{ copies}}{1 \\text{ min}} \\times 12 \\text{ min}$.\nStep 2: $45 \\times 12 = 45 \\times 10 + 45 \\times 2 = 450 + 90 = 540$.\nStep 3: Check the units: minutes cancel, leaving copies, and $\\frac{540}{12} = 45$ recovers the rate. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3.75$): divides the rate by the time, $\\frac{45}{12}$, which produces a meaningless unit.\n* Choice B ($57$): adds $45 + 12$ instead of multiplying.\n* Choice D ($5{,}400$): a factor-of-$10$ slip, as if the copier ran for $120$ minutes.\n\n**Test Day Takeaway:** Rate $\\times$ time $=$ amount; let the units cancel to confirm you multiplied the right way.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "rate-time-total",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-073",
    domain: "problem-solving",
    skills: ["percent-change"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The number of bird nests counted at a wetland preserve decreased from $450$ in one year to $360$ in the following year. The number of nests decreased by $p\\%$. What is the value of $p$?",
    choices: [
      { id: "A", text: "$20$" },
      // distractor: divides the drop by the new count (90/360)
      { id: "B", text: "$25$" },
      // distractor: reports the remaining percent (360/450)
      { id: "C", text: "$80$" },
      // distractor: reports the raw number of nests lost
      { id: "D", text: "$90$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The drop is $450 - 360 = 90$ nests out of the original $450$: $\\frac{90}{450} = 0.20$, so $p = 20$.\n\n**The Full Solution:**\nStep 1: Percent decrease $= \\frac{\\text{original} - \\text{new}}{\\text{original}} \\times 100$, with the ORIGINAL count $450$ as the base.\nStep 2: The decrease is $450 - 360 = 90$, and $\\frac{90}{450} = \\frac{1}{5} = 0.20$.\nStep 3: So $p = 20$. Check: $20\\%$ of $450$ is $90$, and $450 - 90 = 360$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($25$): divides the $90$-nest drop by the NEW count, $\\frac{90}{360} = 0.25$.\n* Choice C ($80$): reports what remains, $\\frac{360}{450} = 80\\%$, rather than what was lost.\n* Choice D ($90$): reports the number of nests lost, not the percent.\n\n**Test Day Takeaway:** Percent change uses the starting value as the base every time, whether the quantity rose or fell.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-change-basic",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-074",
    domain: "problem-solving",
    skills: ["weighted-mean"],
    difficulty: "hard",
    type: "fill-in",
    question: "In a chemistry course, the final grade is a weighted average in which quizzes count for $15\\%$, lab reports count for $25\\%$, and exams count for $60\\%$. A student has a quiz average of $90$ and a lab report average of $86$. What is the least exam average the student can have and still earn a final grade of at least $89$?",
    correctAnswer: "90",
    explanation: "**SAT Pattern: Weighted Average Final Grade**\n\n**The correct answer is $90$.**\n\n**The Fast Way (~25s):** Quizzes and labs contribute $0.15(90) + 0.25(86) = 13.5 + 21.5 = 35$ points. The exams must supply $89 - 35 = 54$ points, so $0.60E = 54$ and $E = 90$.\n\n**The Full Solution:**\nStep 1: Write the weighted average with $E$ as the exam average: $0.15(90) + 0.25(86) + 0.60E \\geq 89$.\nStep 2: Evaluate the known terms: $13.5 + 21.5 = 35$, so $35 + 0.60E \\geq 89$, giving $0.60E \\geq 54$.\nStep 3: Divide by $0.60$: $E \\geq \\frac{54}{0.60} = 90$. Check: $0.15(90) + 0.25(86) + 0.60(90) = 13.5 + 21.5 + 54 = 89$. $\\checkmark$\n\n**Common Mistakes:** Averaging the three scores equally, $\\frac{90 + 86 + E}{3} = 89$, which gives $E = 91$; stopping at $0.60E = 54$ and entering $54$; or forgetting that the weights are percents and using $15, 25, 60$ without dividing by $100$.\n\n**Test Day Takeaway:** In a weighted average, each score is multiplied by its weight before adding; solve for the unknown score by isolating its weighted term.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "weighted-average",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-ps-075",
    domain: "problem-solving",
    skills: ["successive-percent-change", "percent-word-problems"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The price of a share of a company's stock decreased by $30\\%$ during one month and then increased by $k\\%$ during the following month. If the price at the end of the two months was $98\\%$ of the price at the start of the two months, what is the value of $k$?",
    choices: [
      // distractor: adds percents: -30 + k = -2
      { id: "A", text: "$28$" },
      // distractor: adds percents and reads 98% as a 2% gain: -30 + k = 2
      { id: "B", text: "$32$" },
      { id: "C", text: "$40$" },
      // distractor: reports the multiplier 1.4 as a percent
      { id: "D", text: "$140$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Net Effect of Successive Changes**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** A $30\\%$ decrease multiplies by $0.70$. For the net factor to be $0.98$, the second factor must be $\\frac{0.98}{0.70} = 1.4$, a $40\\%$ increase.\n\n**The Full Solution:**\nStep 1: Let the starting price be $P$. After a $30\\%$ decrease the price is $0.70P$.\nStep 2: An increase of $k\\%$ multiplies by $\\left(1 + \\frac{k}{100}\\right)$, so the final price is $0.70P\\left(1 + \\frac{k}{100}\\right)$, and this equals $0.98P$.\nStep 3: Divide by $0.70P$: $1 + \\frac{k}{100} = 1.4$, so $\\frac{k}{100} = 0.4$ and $k = 40$. Check: a $\\$100$ share drops to $\\$70$, then rises $40\\%$ to $\\$98$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($28$): adds percents, $-30 + k = -2$; but the $k\\%$ increase is applied to the smaller $\\$70$, so it must be larger than $28$.\n* Choice B ($32$): also adds percents, this time reading \"$98\\%$ of the start\" as a $2\\%$ GAIN, $-30 + k = 2$.\n* Choice D ($140$): reports the multiplier $1.4$ as a percent instead of the percent increase, $40\\%$.\n\n**Test Day Takeaway:** Successive percent changes multiply their factors; solve for an unknown factor by dividing, then convert the factor back to a percent change.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "successive-percent-net",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === MEAN FROM LIST (8 questions) — Phase 2 batch 2 priority pattern ===
  // 11x in 12 tests. Covers: sum-from-mean, add-value-find-new-value,
  // remove-value-find-new-mean, replace-value, combined-list weighting.
  // SAT Pattern kebab matches test bundle: 'mean-from-list'.
  {
    id: "bank-ps-076",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "easy",
    type: "fill-in",
    question: "The mean mass of $9$ packages on a delivery truck is $22$ kilograms. What is the total mass, in kilograms, of the $9$ packages?",
    correctAnswer: "198",
    explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $198$.**\n\n**The Fast Way (~5s):** Total $=$ mean $\\times$ count $= 22 \\times 9 = 198$ kilograms.\n\n**The Full Solution:**\nStep 1: The mean is defined as $\\frac{\\text{total}}{\\text{count}}$, so $\\frac{\\text{total}}{9} = 22$.\nStep 2: Multiply both sides by $9$: total $= 22 \\times 9 = 198$.\nStep 3: Check: $\\frac{198}{9} = 22$. $\\checkmark$\n\n**Common Mistakes:** Dividing instead of multiplying, $\\frac{22}{9} \\approx 2.4$; or adding, $22 + 9 = 31$, neither of which undoes the division in the definition of the mean.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total is the single relationship behind every \"mean of a list\" question; rearrange it for whichever quantity is missing.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "mean-from-list",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-077",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "easy",
    type: "fill-in",
    question: "A list of $5$ numbers has a mean of $30$. When a sixth number is added to the list, the mean of the $6$ numbers is $33$. What is the sixth number?",
    correctAnswer: "48",
    explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $48$.**\n\n**The Fast Way (~10s):** New total minus old total: $6(33) - 5(30) = 198 - 150 = 48$.\n\n**The Full Solution:**\nStep 1: The original $5$ numbers total $5 \\times 30 = 150$.\nStep 2: After the sixth number is added, the $6$ numbers total $6 \\times 33 = 198$.\nStep 3: The sixth number is the difference, $198 - 150 = 48$. Check: $\\frac{150 + 48}{6} = \\frac{198}{6} = 33$. $\\checkmark$\n\n**Common Mistakes:** Answering $33$, assuming the new number equals the new mean; or answering $3$, the change in the mean, which is not the number added. The new number must exceed $33$ to pull five values averaging $30$ up to a mean of $33$.\n\n**Test Day Takeaway:** When a value joins a list, compare totals: (new count)(new mean) $-$ (old count)(old mean) is the value added.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "mean-from-list",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-078",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table shows the frequency of the number of defective parts found in each of $20$ batches inspected at a factory. What is the mean number of defective parts per batch for these $20$ batches?",
    diagram: { type: "dataTable", params: { headers: ["Number of defective parts", "Frequency"], rows: [["0", "6"], ["1", "8"], ["2", "4"], ["3", "2"]] } },
    choices: [
      { id: "A", text: "$1.1$" },
      // distractor: averages the value column (0+1+2+3)/4, ignoring frequencies
      { id: "B", text: "$1.5$" },
      // distractor: averages the frequency column 20/4
      { id: "C", text: "$5$" },
      // distractor: stops at the total number of defective parts
      { id: "D", text: "$22$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Mean from List**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Total defective parts $= 0(6) + 1(8) + 2(4) + 3(2) = 22$, over $20$ batches: $\\frac{22}{20} = 1.1$.\n\n**The Full Solution:**\nStep 1: A frequency table lists each value and how many times it occurs. The total of all values is the sum of each value times its frequency.\nStep 2: Compute: $0 \\times 6 = 0$, $1 \\times 8 = 8$, $2 \\times 4 = 8$, $3 \\times 2 = 6$, and $0 + 8 + 8 + 6 = 22$ defective parts.\nStep 3: The number of batches is $6 + 8 + 4 + 2 = 20$, so the mean is $\\frac{22}{20} = 1.1$. Check: $1.1$ lies between $0$ and $3$ and close to $1$, where most of the frequency sits. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($1.5$): averages the four values in the left column, $\\frac{0 + 1 + 2 + 3}{4}$, ignoring how often each occurs.\n* Choice C ($5$): averages the frequency column, $\\frac{20}{4}$, which is not a number of defective parts.\n* Choice D ($22$): stops at the total number of defective parts and never divides by the $20$ batches.\n\n**Test Day Takeaway:** With a frequency table, multiply each value by its frequency, add, and divide by the SUM of the frequencies, not the number of rows.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "mean-from-list",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-079",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The mean of a list of $10$ values is $36$. If the value $63$ is removed from the list, what is the mean of the remaining $9$ values?",
    choices: [
      // distractor: subtracts 63 but divides by the original 10 (297/10)
      { id: "A", text: "$29.7$" },
      { id: "B", text: "$33$" },
      // distractor: assumes the mean is unchanged
      { id: "C", text: "$36$" },
      // distractor: divides the original total by 9 without removing 63 (360/9)
      { id: "D", text: "$40$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Mean from List**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Total $= 10(36) = 360$; remove $63$ to get $297$; $\\frac{297}{9} = 33$.\n\n**The Full Solution:**\nStep 1: The $10$ values total $10 \\times 36 = 360$.\nStep 2: Removing $63$ leaves a total of $360 - 63 = 297$ for the $9$ remaining values.\nStep 3: New mean $= \\frac{297}{9} = 33$. Check: $9(33) + 63 = 297 + 63 = 360$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($29.7$): subtracts the $63$ but divides by the original $10$ values, $\\frac{297}{10}$.\n* Choice C ($36$): assumes the mean is unchanged; removing a value above the mean must lower it.\n* Choice D ($40$): divides the original total by $9$ without removing the $63$, $\\frac{360}{9}$.\n\n**Test Day Takeaway:** Adjust the total AND the count together; removing a value larger than the mean always pulls the mean down.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "mean-from-list",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-080",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "medium",
    type: "fill-in",
    question: "The mean of a list of $12$ values is $27$. If a value of $15$ in the list is replaced by a value of $51$, what is the mean of the resulting list of $12$ values?",
    correctAnswer: "30",
    explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~10s):** The total rises by $51 - 15 = 36$, so the mean rises by $\\frac{36}{12} = 3$: from $27$ to $30$.\n\n**The Full Solution:**\nStep 1: The original total is $12 \\times 27 = 324$.\nStep 2: Replacing $15$ with $51$ changes the total by $51 - 15 = +36$, so the new total is $324 + 36 = 360$. The count is still $12$.\nStep 3: New mean $= \\frac{360}{12} = 30$. Check: $30 - 27 = 3$, and $3 \\times 12 = 36$, the amount the total changed. $\\checkmark$\n\n**Common Mistakes:** Adding $51$ without removing $15$, $\\frac{324 + 51}{12} = 31.25$; changing the count to $13$, $\\frac{375}{13} \\approx 28.8$; or entering $3$, the change in the mean rather than the new mean.\n\n**Test Day Takeaway:** A replacement changes the total by (new $-$ old) with the count fixed, so the mean shifts by that difference divided by the count.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "mean-from-list",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-081",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "medium",
    type: "fill-in",
    question: "The mean drying time of $12$ paint samples tested in a laboratory is $31$ minutes. Two additional samples, each with a drying time of $x$ minutes, are tested, and the mean drying time of all $14$ samples is $33$ minutes. What is the value of $x$?",
    correctAnswer: "45",
    explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $45$.**\n\n**The Fast Way (~15s):** All $14$ samples total $14(33) = 462$ minutes and the first $12$ total $12(31) = 372$ minutes, so the two new samples add $90$ minutes, or $45$ minutes each.\n\n**The Full Solution:**\nStep 1: Sum $=$ mean $\\times$ count, so the first $12$ samples have a total drying time of $12 \\times 31 = 372$ minutes.\nStep 2: All $14$ samples have a total drying time of $14 \\times 33 = 462$ minutes, so the two new samples account for $462 - 372 = 90$ minutes.\nStep 3: The two new samples have the same drying time, so $x = \\dfrac{90}{2} = 45$.\nCheck: $\\dfrac{372 + 2(45)}{14} = \\dfrac{462}{14} = 33$ minutes. $\\checkmark$\n\n**Common Mistakes:** Reporting $90$, the combined drying time of the two new samples, instead of the drying time of each one; dividing the extra $90$ minutes by all $14$ samples, which gives about $6.43$; keeping the old mean for the new total, $14(31) = 434$, which gives $(434 - 372) \\div 2 = 31$.\n\n**Test Day Takeaway:** Turn every mean into a total before combining lists — totals add, means do not.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "mean-from-list",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-082",
    domain: "problem-solving",
    skills: ["weighted-mean", "calculate-mean"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A materials laboratory tested two batches of cord. Batch P consists of $18$ cords with a mean breaking strength of $46$ newtons, and batch Q consists of $n$ cords with a mean breaking strength of $58$ newtons. The mean breaking strength of all $18 + n$ cords is $54$ newtons. What is the value of $n$?",
    choices: [
      // distractor: inverts the balance: 18 x (58-54)/(54-46) = 9
      { id: "A", text: "$9$" },
      // distractor: uses 52, the average of the two means, as the combined mean
      { id: "B", text: "$18$" },
      // distractor: uses the full spread 58-46 instead of 58-54: 18 x 12/8 = 27
      { id: "C", text: "$27$" },
      { id: "D", text: "$36$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Mean from List**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The combined mean is $8$ above batch P's mean and $4$ below batch Q's mean, so batch Q holds twice as many cords: $n = 2(18) = 36$.\n\n**The Full Solution:**\nStep 1: Totals add, so $18(46) + 58n = 54(18 + n)$.\nStep 2: $828 + 58n = 972 + 54n$, so $4n = 144$.\nStep 3: $n = 36$. Check: $\\dfrac{828 + 58(36)}{18 + 36} = \\dfrac{2{,}916}{54} = 54$ newtons. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): This inverts the balance, computing $18 \\times \\dfrac{58 - 54}{54 - 46} = 9$. The batch farther from the combined mean is the smaller batch, not the larger one.\n* Choice B ($18$): This uses $52$, the average of $46$ and $58$, as the combined mean; equal distances would force equal counts, but the given combined mean is $54$.\n* Choice C ($27$): This uses the full spread $58 - 46 = 12$ in place of $58 - 54 = 4$, giving $18 \\times \\dfrac{12}{8} = 27$.\n\n**Test Day Takeaway:** A combined mean is a weighted mean: the group sizes are inversely proportional to the distances from the combined mean.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "mean-from-list",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-083",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "hard",
    type: "fill-in",
    question: "A list of $20$ measurements has a mean of $74$. Two of the measurements were entered incorrectly: a measurement of $26$ was entered as $62$, and a measurement of $63$ was entered as $47$. What is the mean of the corrected list of $20$ measurements?",
    correctAnswer: "73",
    explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $73$.**\n\n**The Fast Way (~20s):** The two corrections change the total by $(26 - 62) + (63 - 47) = -36 + 16 = -20$, and $-20 \\div 20 = -1$, so the mean drops from $74$ to $73$.\n\n**The Full Solution:**\nStep 1: The list as entered totals $20 \\times 74 = 1{,}480$.\nStep 2: Replacing $62$ with $26$ removes $36$ from the total; replacing $47$ with $63$ adds $16$. The corrected total is $1{,}480 - 36 + 16 = 1{,}460$.\nStep 3: The corrected mean is $\\dfrac{1{,}460}{20} = 73$.\nCheck: the total changed by $-20$ across $20$ values, so the mean changed by $-1$. $\\checkmark$\n\n**Common Mistakes:** Correcting only the first entry, which gives $\\dfrac{1{,}444}{20} = 72.2$; correcting only the second entry, which gives $\\dfrac{1{,}496}{20} = 74.8$; subtracting both differences instead of subtracting one and adding the other, which gives $\\dfrac{1{,}428}{20} = 71.4$.\n\n**Test Day Takeaway:** Work with the change in the total: each corrected entry moves the total by (true value $-$ entered value), and the mean by that amount divided by the count.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "mean-from-list",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },

  // === RESIDUAL (8 questions) — Phase 2 batch 2 priority pattern ===
  // 11x in 12 tests. Covers: compute-residual, sign-interpretation,
  // find-actual-from-predicted, find-x-from-residual, compare-residuals.
  // SAT Pattern kebab matches test bundle: 'residual'.
  {
    id: "bank-ps-084",
    domain: "problem-solving",
    skills: ["calculate-mean", "slope-intercept-form"],
    difficulty: "easy",
    type: "fill-in",
    question: "The scatterplot shows the surface hardness rating $y$ of each of $9$ ceramic tiles after the tile was fired for $x$ hours, along with the line of best fit $\\hat{y} = 3x + 6$. What is the residual for the highlighted data point $(5, 24)$?",
    diagram: { type: "scatterplot", params: { points: [[1, 8], [2, 13], [3, 14], [4, 19], [6, 25], [7, 26], [8, 31], [9, 32]], xMin: 0, xMax: 10, yMin: 0, yMax: 40, xGridStep: 1, yGridStep: 5, xLabelStep: 2, yLabelStep: 10, xLabel: "Firing time (hours)", yLabel: "Hardness rating", bestFitLine: { slope: 3, intercept: 6 }, highlightPoint: [5, 24], highlightLabel: "(5, 24)", showResidual: true } },
    correctAnswer: "3",
    explanation: "**SAT Pattern: Residual**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~10s):** Predicted: $\\hat{y} = 3(5) + 6 = 21$. Residual $= 24 - 21 = 3$.\n\n**The Full Solution:**\nStep 1: A residual is actual minus predicted: $y - \\hat{y}$.\nStep 2: At $x = 5$ the line predicts $\\hat{y} = 3(5) + 6 = 21$.\nStep 3: The tile's actual hardness rating is $24$, so the residual is $24 - 21 = 3$.\nCheck: the highlighted point sits $3$ units above the line on the graph. $\\checkmark$\n\n**Common Mistakes:** Reporting the predicted value $21$ instead of the residual; computing $\\hat{y} - y = 21 - 24 = -3$, which reverses the order; solving $3x + 6 = 24$ for $x$, which gives $6$ and answers a different question.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted; a point above the line has a positive residual.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "residual",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-085",
    domain: "problem-solving",
    skills: ["calculate-mean", "slope-intercept-form"],
    difficulty: "easy",
    type: "fill-in",
    question: "The scatterplot shows the daily output $y$, in kilowatt-hours, of a solar array on each of $9$ days and the number of hours $x$ of cloud cover on that day, along with the line of best fit $\\hat{y} = -4x + 90$. What is the residual for the highlighted data point $(12, 38)$?",
    diagram: { type: "scatterplot", params: { points: [[1, 88], [2, 80], [4, 76], [6, 64], [8, 60], [9, 52], [11, 48], [14, 32]], xMin: 0, xMax: 15, yMin: 0, yMax: 100, xGridStep: 1, yGridStep: 10, xLabelStep: 3, yLabelStep: 20, xLabel: "Cloud cover (hours)", yLabel: "Output (kWh)", bestFitLine: { slope: -4, intercept: 90 }, highlightPoint: [12, 38], highlightLabel: "(12, 38)", showResidual: true } },
    correctAnswer: "-4",
    explanation: "**SAT Pattern: Residual**\n\n**The correct answer is $-4$.**\n\n**The Fast Way (~10s):** Predicted: $\\hat{y} = -4(12) + 90 = 42$. Residual $= 38 - 42 = -4$.\n\n**The Full Solution:**\nStep 1: The residual is the actual value minus the value the line predicts.\nStep 2: At $x = 12$, $\\hat{y} = -48 + 90 = 42$ kilowatt-hours.\nStep 3: The actual output is $38$, so the residual is $38 - 42 = -4$ kilowatt-hours.\nCheck: the highlighted point lies below the line, so a negative residual is expected. $\\checkmark$\n\n**Common Mistakes:** Reporting the predicted value $42$; computing $\\hat{y} - y = 42 - 38 = 4$ and losing the sign; stopping at $-4(12) = -48$ without adding the intercept.\n\n**Test Day Takeaway:** A negative residual means the model overestimates; the point sits below the line.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "residual",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-086",
    domain: "problem-solving",
    skills: ["calculate-mean", "slope-intercept-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The scatterplot shows the length $y$, in centimeters, of each of $10$ icicles and the number of hours $x$ since a storm ended, along with the line of best fit $\\hat{y} = 0.6x + 12.4$. What is the residual for the highlighted data point $(25, 30)$?",
    diagram: { type: "scatterplot", params: { points: [[4, 14], [8, 16], [12, 21], [16, 21], [18, 24], [20, 23], [22, 27], [28, 28], [30, 29]], xMin: 0, xMax: 32, yMin: 0, yMax: 36, xGridStep: 2, yGridStep: 4, xLabelStep: 4, yLabelStep: 8, xLabel: "Hours since storm", yLabel: "Length (cm)", bestFitLine: { slope: 0.6, intercept: 12.4 }, highlightPoint: [25, 30], highlightLabel: "(25, 30)", showResidual: true } },
    choices: [
      // distractor: swaps the coordinates: uses x = 30, then 25 - 30.4
      { id: "A", text: "$-5.4$" },
      // distractor: computes predicted minus actual
      { id: "B", text: "$-2.6$" },
      { id: "C", text: "$2.6$" },
      // distractor: reports the predicted value
      { id: "D", text: "$27.4$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Residual**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $\\hat{y} = 0.6(25) + 12.4 = 27.4$, so the residual is $30 - 27.4 = 2.6$.\n\n**The Full Solution:**\nStep 1: Residual $= y - \\hat{y}$, with $\\hat{y}$ evaluated at the point's $x$-value.\nStep 2: At $x = 25$: $0.6(25) = 15$, and $15 + 12.4 = 27.4$ centimeters.\nStep 3: The actual length is $30$, so the residual is $30 - 27.4 = 2.6$ centimeters.\nCheck: $27.4 + 2.6 = 30$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5.4$): This swaps the coordinates, using $x = 30$ to get $\\hat{y} = 30.4$ and then $25 - 30.4 = -5.4$.\n* Choice B ($-2.6$): This computes predicted minus actual, $27.4 - 30$, reversing the definition.\n* Choice D ($27.4$): This is the predicted length itself, not the gap between the point and the line.\n\n**Test Day Takeaway:** Substitute the point's $x$ into the model first, then subtract in the order actual $-$ predicted.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "residual",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-087",
    domain: "problem-solving",
    skills: ["calculate-mean", "slope-intercept-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The scatterplot shows the monthly water use $y$, in cubic meters, of each of $11$ households and the number of residents $x$ in that household, along with the line of best fit $\\hat{y} = 12x + 6$. For how many of the $11$ data points is the actual monthly water use less than the water use predicted by the line of best fit?",
    diagram: { type: "scatterplot", params: { points: [[1, 14], [1, 22], [2, 30], [2, 34], [3, 38], [3, 46], [4, 50], [4, 58], [5, 62], [5, 70], [6, 80]], xMin: 0, xMax: 7, yMin: 0, yMax: 90, xGridStep: 1, yGridStep: 10, xLabelStep: 1, yLabelStep: 20, xLabel: "Residents", yLabel: "Water use (cubic meters)", bestFitLine: { slope: 12, intercept: 6 } } },
    choices: [
      { id: "A", text: "$4$" },
      // distractor: counts the point that lies exactly on the line as below it
      { id: "B", text: "$5$" },
      // distractor: counts the points above the line instead
      { id: "C", text: "$6$" },
      // distractor: counts the points above the line plus the point on it
      { id: "D", text: "$7$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** \"Actual less than predicted\" means a negative residual, so count only the points strictly below the dashed line: there are $4$.\n\n**The Full Solution:**\nStep 1: For each point, compare $y$ with $\\hat{y} = 12x + 6$. The point is counted only when $y < \\hat{y}$.\nStep 2: The points below the line are $(1, 14)$ with $\\hat{y} = 18$, $(3, 38)$ with $\\hat{y} = 42$, $(4, 50)$ with $\\hat{y} = 54$, and $(5, 62)$ with $\\hat{y} = 66$.\nStep 3: That is $4$ points. The point $(2, 30)$ has $\\hat{y} = 30$, so it lies on the line and its residual is $0$, not negative.\nCheck: $4$ below $+$ $1$ on the line $+$ $6$ above $= 11$ points. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): This counts $(2, 30)$, which sits exactly on the line, as a point below it; a residual of $0$ is not negative.\n* Choice C ($6$): This counts the points above the line, where the model underestimates instead of overestimating.\n* Choice D ($7$): This counts the $6$ points above the line together with the point on it.\n\n**Test Day Takeaway:** Below the line means the model overestimates and the residual is negative; a point on the line has a residual of exactly $0$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "residual",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-088",
    domain: "problem-solving",
    skills: ["calculate-mean", "slope-intercept-form"],
    difficulty: "medium",
    type: "fill-in",
    question: "The scatterplot shows the mass $y$, in grams, of each of $9$ metal castings and the cooling time $x$, in minutes, for that casting, along with the line of best fit $\\hat{y} = 0.45x + 12$. What is the residual for the highlighted data point $(40, 27)$?",
    diagram: { type: "scatterplot", params: { points: [[10, 18], [15, 18], [20, 22], [25, 22], [30, 27], [50, 36], [55, 36], [60, 40]], xMin: 0, xMax: 65, yMin: 0, yMax: 45, xGridStep: 5, yGridStep: 5, xLabelStep: 10, yLabelStep: 10, xLabel: "Cooling time (minutes)", yLabel: "Mass (grams)", bestFitLine: { slope: 0.45, intercept: 12 }, highlightPoint: [40, 27], highlightLabel: "(40, 27)", showResidual: true } },
    correctAnswer: "-3",
    explanation: "**SAT Pattern: Residual**\n\n**The correct answer is $-3$.**\n\n**The Fast Way (~10s):** $\\hat{y} = 0.45(40) + 12 = 30$, so the residual is $27 - 30 = -3$.\n\n**The Full Solution:**\nStep 1: Evaluate the model at $x = 40$: $0.45(40) = 18$.\nStep 2: Add the intercept: $\\hat{y} = 18 + 12 = 30$ grams.\nStep 3: Residual $= y - \\hat{y} = 27 - 30 = -3$ grams.\nCheck: the highlighted point lies below the line, matching the negative sign. $\\checkmark$\n\n**Common Mistakes:** Reporting the predicted mass $30$; computing $\\hat{y} - y = 3$ and losing the sign; forgetting the intercept and computing $27 - 18 = 9$.\n\n**Test Day Takeaway:** Evaluate the whole model, intercept included, before subtracting.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "residual",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-089",
    domain: "problem-solving",
    skills: ["calculate-mean", "slope-intercept-form"],
    difficulty: "medium",
    type: "fill-in",
    question: "The scatterplot shows the number of chirps $y$ per minute produced by a cricket at a temperature of $x$ degrees Celsius, along with the line of best fit $\\hat{y} = 2.5x + 9$. The highlighted data point has $x = 14$ and a residual of $-4$. What is the $y$-value of the highlighted data point?",
    diagram: { type: "scatterplot", params: { points: [[8, 31], [10, 32], [12, 41], [16, 47], [18, 56], [20, 57], [24, 71]], xMin: 0, xMax: 30, yMin: 0, yMax: 90, xGridStep: 2, yGridStep: 10, xLabelStep: 10, yLabelStep: 20, xLabel: "Temperature (degrees Celsius)", yLabel: "Chirps per minute", bestFitLine: { slope: 2.5, intercept: 9 }, highlightPoint: [14, 40], highlightLabel: "residual = -4", showResidual: true } },
    correctAnswer: "40",
    explanation: "**SAT Pattern: Residual**\n\n**The correct answer is $40$.**\n\n**The Fast Way (~15s):** The line predicts $\\hat{y} = 2.5(14) + 9 = 44$, and a residual of $-4$ puts the point $4$ below that: $44 - 4 = 40$.\n\n**The Full Solution:**\nStep 1: Residual $= y - \\hat{y}$, so $y = \\hat{y} + \\text{residual}$.\nStep 2: At $x = 14$: $\\hat{y} = 2.5(14) + 9 = 35 + 9 = 44$ chirps per minute.\nStep 3: $y = 44 + (-4) = 40$ chirps per minute.\nCheck: $40 - 44 = -4$, the given residual. $\\checkmark$\n\n**Common Mistakes:** Adding the residual with the wrong sign, giving $44 + 4 = 48$; reporting the predicted value $44$; substituting the residual for $y$ and solving $2.5x + 9 = -4$, which gives $x = -5.2$.\n\n**Test Day Takeaway:** Rearrange the definition once: actual $=$ predicted $+$ residual, and keep the residual's sign.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "residual",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-090",
    domain: "problem-solving",
    skills: ["calculate-mean", "slope-intercept-form"],
    difficulty: "hard",
    type: "fill-in",
    question: "For the scatterplot shown, $x$ is the curing time, in days, and $y$ is the compressive strength, in megapascals, of a concrete sample. The line of best fit passes through $(0, 7)$ and $(10, 32)$. One of the data points has a $y$-value of $30$ and a residual of $-4.5$. What is the $x$-coordinate of that data point?",
    diagram: { type: "scatterplot", params: { points: [[2, 13], [4, 16], [6, 23], [8, 26], [11, 30], [12, 38], [14, 41], [16, 48]], xMin: 0, xMax: 18, yMin: 0, yMax: 55, xGridStep: 2, yGridStep: 5, xLabelStep: 4, yLabelStep: 10, xLabel: "Curing time (days)", yLabel: "Compressive strength (MPa)", bestFitLine: { slope: 2.5, intercept: 7 } } },
    correctAnswer: "11",
    explanation: "**SAT Pattern: Residual**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~35s):** The line is $\\hat{y} = 2.5x + 7$. A residual of $-4.5$ at $y = 30$ means $\\hat{y} = 34.5$, so $2.5x + 7 = 34.5$ and $x = 11$.\n\n**The Full Solution:**\nStep 1: The line of best fit has slope $\\dfrac{32 - 7}{10 - 0} = 2.5$ and $y$-intercept $7$, so $\\hat{y} = 2.5x + 7$.\nStep 2: Residual $= y - \\hat{y}$ gives $-4.5 = 30 - \\hat{y}$, so $\\hat{y} = 34.5$ megapascals.\nStep 3: Solve $2.5x + 7 = 34.5$: $2.5x = 27.5$, so $x = 11$ days.\nCheck: $2.5(11) + 7 = 34.5$ and $30 - 34.5 = -4.5$. $\\checkmark$\n\n**Common Mistakes:** Treating $30$ as the predicted value and solving $2.5x + 7 = 30$, which gives $9.2$; subtracting the residual instead of adding its opposite, using $\\hat{y} = 25.5$ and getting $7.4$; reporting the predicted value $34.5$ instead of the $x$-coordinate.\n\n**Test Day Takeaway:** Build the line first, convert the residual into a predicted value, and only then solve for $x$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "residual",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-091",
    domain: "problem-solving",
    skills: ["calculate-mean", "slope-intercept-form"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The scatterplot shows the annual maintenance cost $y$, in hundreds of dollars, for each of $12$ machines and the age $x$, in years, of that machine, along with the line of best fit $\\hat{y} = 1.2x + 8$. For which of the following data points does the line of best fit most underestimate the actual annual maintenance cost?",
    diagram: { type: "scatterplot", params: { points: [[1, 10], [3, 14], [5, 13], [6, 16], [8, 24], [10, 19], [12, 23], [14, 28], [16, 26], [18, 30], [19, 22], [20, 31]], xMin: 0, xMax: 22, yMin: 0, yMax: 36, xGridStep: 2, yGridStep: 4, xLabelStep: 4, yLabelStep: 8, xLabel: "Age (years)", yLabel: "Maintenance cost (hundreds of dollars)", bestFitLine: { slope: 1.2, intercept: 8 } } },
    choices: [
      // distractor: smallest predicted value, not the largest underestimate
      { id: "A", text: "$(3, 14)$" },
      { id: "B", text: "$(8, 24)$" },
      // distractor: greatest actual y-value among the choices
      { id: "C", text: "$(14, 28)$" },
      // distractor: greatest residual in absolute value, but the line overestimates there
      { id: "D", text: "$(19, 22)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Underestimating means a positive residual, and the residuals are $2.4$, $6.4$, $3.2$, and $-8.8$; the largest is $6.4$ at $(8, 24)$.\n\n**The Full Solution:**\nStep 1: The line underestimates wherever $y > \\hat{y}$, so compare each point's residual $y - \\hat{y}$.\nStep 2: $\\hat{y}(3) = 11.6$, $\\hat{y}(8) = 17.6$, $\\hat{y}(14) = 24.8$, and $\\hat{y}(19) = 30.8$.\nStep 3: The residuals are $14 - 11.6 = 2.4$, $24 - 17.6 = 6.4$, $28 - 24.8 = 3.2$, and $22 - 30.8 = -8.8$. The greatest positive residual is $6.4$.\nCheck: $(8, 24)$ is the point that sits farthest above the line on the graph. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(3, 14)$): This point has the smallest predicted value, $11.6$; a low prediction is not the same as a large underestimate. Its residual is only $2.4$.\n* Choice C ($(14, 28)$): This has the greatest actual $y$-value of the four, but the line already predicts $24.8$ there, so the miss is just $3.2$.\n* Choice D ($(19, 22)$): This has the largest residual in size, $8.8$, but it is negative: the line overestimates the cost at that point.\n\n**Test Day Takeaway:** \"Underestimates\" fixes the sign: compare positive residuals only, never absolute distances from the line.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "residual",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },

  // === MARGIN OF ERROR (8 questions) — Phase 2 batch 2 priority pattern ===
  // 11x in 12 tests. Covers: compute-MOE-from-formula, interpret-confidence-
  // interval, halve-MOE-via-sample-size, scope-of-inference, compare-intervals,
  // solve-for-n inversely. SAT Pattern kebab matches: 'margin-of-error'.
  {
    id: "bank-ps-092",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "easy",
    type: "fill-in",
    question: "A random sample of $250$ trees in a state forest was selected. Based on the sample, it is estimated that $0.38$ of all the trees in the forest are oaks, with an associated margin of error of $0.05$. What is the greatest value in the interval of plausible values for the proportion of all the trees in the forest that are oaks?",
    correctAnswer: "0.43",
    explanation: "**SAT Pattern: Margin of Error**\n\n**The correct answer is $0.43$.**\n\n**The Fast Way (~10s):** The greatest plausible value is the estimate plus the margin of error: $0.38 + 0.05 = 0.43$.\n\n**The Full Solution:**\nStep 1: An estimate with a margin of error gives an interval of plausible values, estimate $\\pm$ margin of error.\nStep 2: The interval runs from $0.38 - 0.05 = 0.33$ to $0.38 + 0.05 = 0.43$.\nStep 3: The question asks for the greatest plausible value, which is $0.43$.\nCheck: the interval is $0.10$ wide, twice the margin of error. $\\checkmark$\n\n**Common Mistakes:** Reporting $0.33$, the least plausible value; reporting the estimate $0.38$ and ignoring the margin of error; adding the full width of the interval, $2(0.05)$, which gives $0.48$.\n\n**Test Day Takeaway:** Margin of error is added and subtracted once each; the interval's width is twice the margin of error.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "margin-of-error",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-093",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A random sample of $350$ guests at a hotel was surveyed. Based on the sample, it is estimated that $64\\%$ of all guests at the hotel would recommend it, with an associated margin of error of $5\\%$. Which of the following is the most appropriate conclusion based on this estimate and margin of error?",
    choices: [
      { id: "A", text: "It is plausible that between $59\\%$ and $69\\%$ of all guests at the hotel would recommend it." },
      // distractor: treats the sample estimate as an exact population value
      { id: "B", text: "Exactly $64\\%$ of all guests at the hotel would recommend it." },
      // distractor: calls a value outside the interval plausible
      { id: "C", text: "It is plausible that fewer than $59\\%$ of all guests at the hotel would recommend it." },
      // distractor: treats one sample's estimate as reproducible in every sample
      { id: "D", text: "Every random sample of $350$ guests at the hotel would give an estimate of $64\\%$." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Margin of Error**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The plausible interval is $64\\% \\pm 5\\%$, or $59\\%$ to $69\\%$.\n\n**The Full Solution:**\nStep 1: A sample estimate with a margin of error describes an interval of plausible values for the population, not a single value.\nStep 2: Subtracting and adding the margin of error gives $64\\% - 5\\% = 59\\%$ and $64\\% + 5\\% = 69\\%$.\nStep 3: The appropriate conclusion is that the percent for all guests plausibly lies between $59\\%$ and $69\\%$.\nCheck: the estimate $64\\%$ sits at the center of that interval. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: The margin of error exists precisely because the sample estimate is not exact for the whole population.\n* Choice C: Values below $59\\%$ fall outside the interval, so they are the values the data make implausible.\n* Choice D: A different random sample would give a somewhat different estimate; that variability is what the margin of error measures.\n\n**Test Day Takeaway:** Read a margin of error as a range of plausible population values, never as a promise about one number.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "margin-of-error",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-094",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "medium",
    type: "fill-in",
    question: "Based on a random sample of the apartments in a building, the interval of plausible values for the mean daily electricity use of all the apartments in the building is from $84.2$ to $91.8$ kilowatt-hours. What is the margin of error for this estimate, in kilowatt-hours?",
    correctAnswer: "3.8",
    explanation: "**SAT Pattern: Margin of Error**\n\n**The correct answer is $3.8$.**\n\n**The Fast Way (~15s):** The interval is $91.8 - 84.2 = 7.6$ wide, and the margin of error is half of that: $3.8$.\n\n**The Full Solution:**\nStep 1: The interval of plausible values is centered on the estimate and extends one margin of error in each direction.\nStep 2: Its width is therefore twice the margin of error: $91.8 - 84.2 = 7.6$ kilowatt-hours.\nStep 3: The margin of error is $\\dfrac{7.6}{2} = 3.8$ kilowatt-hours.\nCheck: the estimate is the midpoint $88$, and $88 \\pm 3.8$ gives $84.2$ and $91.8$. $\\checkmark$\n\n**Common Mistakes:** Reporting the full width $7.6$; reporting the midpoint $88$, which is the estimate rather than the margin of error; reporting the upper endpoint $91.8$.\n\n**Test Day Takeaway:** Given the endpoints, the estimate is the midpoint and the margin of error is half the width.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "margin-of-error",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-095",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A polling organization surveyed a random sample of $300$ residents of a city and reported a margin of error of $\\pm 6$ percentage points. For this method, the margin of error is inversely proportional to the square root of the sample size. To report a margin of error of $\\pm 3$ percentage points at the same confidence level, how many residents must the organization survey?",
    choices: [
      // distractor: halves the sample size, treating the margin of error as proportional to n
      { id: "A", text: "$150$" },
      // distractor: doubles the sample size, ignoring the square root
      { id: "B", text: "$600$" },
      // distractor: multiplies by 3, the difference 6 - 3 in percentage points
      { id: "C", text: "$900$" },
      { id: "D", text: "$1{,}200$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Margin of Error**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Halving the margin of error requires multiplying the sample size by $2^2 = 4$: $4(300) = 1{,}200$.\n\n**The Full Solution:**\nStep 1: The margin of error satisfies $M = \\dfrac{k}{\\sqrt{n}}$ for some constant $k$, so $\\sqrt{n} = \\dfrac{k}{M}$ and $n = \\dfrac{k^2}{M^2}$.\nStep 2: The margin of error must fall by a factor of $\\dfrac{6}{3} = 2$, so $n$ must grow by a factor of $2^2 = 4$.\nStep 3: $n = 4(300) = 1{,}200$ residents.\nCheck: $\\sqrt{1{,}200} = 2\\sqrt{300}$, so the margin of error is halved. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($150$): This halves the sample size, as if a smaller sample gave a smaller margin of error; the relationship runs the other way.\n* Choice B ($600$): This doubles the sample size, matching the factor $2$ in the margin of error but ignoring the square root.\n* Choice C ($900$): This multiplies by $3$, the difference $6 - 3$ in percentage points, treating a difference as a scale factor.\n\n**Test Day Takeaway:** Margin of error scales with $\\dfrac{1}{\\sqrt{n}}$: to divide it by $k$, multiply the sample size by $k^2$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "margin-of-error",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-096",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A researcher selected a random sample of $180$ of the $2{,}400$ employees at a company and found that $30\\%$ of the employees selected use the company's shuttle service. Which of the following is the largest group to which the results of this sample can be appropriately generalized?",
    choices: [
      // distractor: stops at the sample, which random selection is designed to move beyond
      { id: "A", text: "The $180$ employees selected for the sample" },
      { id: "B", text: "All $2{,}400$ employees at the company" },
      // distractor: extends past the population the sample was drawn from
      { id: "C", text: "All employees at companies in the same city" },
      // distractor: extends to a population that was never sampled
      { id: "D", text: "All adults in the same city" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** A random sample supports conclusions about the population it was drawn from: the $2{,}400$ employees at the company.\n\n**The Full Solution:**\nStep 1: Identify the population that was sampled. The $180$ employees were selected at random from the $2{,}400$ employees at the company.\nStep 2: Random selection makes the sample representative of that population, so the estimate of $30\\%$ generalizes to all $2{,}400$ employees.\nStep 3: No employees of other companies and no non-employees had a chance of being selected, so the results say nothing about them.\nCheck: the largest group the sample represents is the group it was drawn from. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: The $180$ employees are the sample itself; random selection exists so that the result can be extended to the full company.\n* Choice C: Employees at other companies were never in the pool from which the sample was drawn.\n* Choice D: Adults who do not work at the company had no chance of being selected, so the estimate does not describe them.\n\n**Test Day Takeaway:** Conclusions reach exactly as far as the population that was randomly sampled — no farther.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "margin-of-error",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-097",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A random sample of $400$ of the $12{,}000$ members of a professional association was surveyed. Based on the sample, it is estimated that $35\\%$ of all the members attended the annual conference, with an associated margin of error of $4\\%$. Based on this estimate and margin of error, what is the greatest number of the $12{,}000$ members who could plausibly have attended the conference?",
    choices: [
      // distractor: uses the lower endpoint, 31%, of the interval
      { id: "A", text: "$3{,}720$" },
      // distractor: ignores the margin of error and uses 35%
      { id: "B", text: "$4{,}200$" },
      // distractor: increases the estimate by 4% of itself instead of by 4 percentage points
      { id: "C", text: "$4{,}368$" },
      { id: "D", text: "$4{,}680$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Margin of Error**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The greatest plausible percent is $35\\% + 4\\% = 39\\%$, and $0.39(12{,}000) = 4{,}680$.\n\n**The Full Solution:**\nStep 1: The interval of plausible values for the percent of all members who attended is $35\\% \\pm 4\\%$, or $31\\%$ to $39\\%$.\nStep 2: The greatest plausible percent is $39\\%$.\nStep 3: Apply it to the membership: $0.39 \\times 12{,}000 = 4{,}680$ members.\nCheck: $4{,}680 \\div 12{,}000 = 0.39$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3{,}720$): This uses $31\\%$, the least plausible percent, which answers the opposite question.\n* Choice B ($4{,}200$): This uses the estimate $35\\%$ alone and ignores the margin of error.\n* Choice C ($4{,}368$): This raises $4{,}200$ by $4\\%$ of itself rather than by $4$ percentage points of the membership.\n\n**Test Day Takeaway:** Push the percent to the end of its plausible interval first, then convert to a count.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "margin-of-error",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-098",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "hard",
    type: "fill-in",
    question: "For a certain survey method, the margin of error is inversely proportional to the square root of the sample size. A survey of $600$ people that used this method reported a margin of error of $4.2$ percentage points. How many people must be surveyed, using the same method, for the reported margin of error to be $1.4$ percentage points?",
    correctAnswer: "5400",
    explanation: "**SAT Pattern: Margin of Error**\n\n**The correct answer is $5{,}400$.**\n\n**The Fast Way (~25s):** The margin of error must shrink by a factor of $\\dfrac{4.2}{1.4} = 3$, so the sample size grows by $3^2 = 9$: $9(600) = 5{,}400$.\n\n**The Full Solution:**\nStep 1: Inverse proportionality to $\\sqrt{n}$ means $M\\sqrt{n} = k$ for a constant $k$, so $k = 4.2\\sqrt{600}$.\nStep 2: For $M = 1.4$: $1.4\\sqrt{n} = 4.2\\sqrt{600}$, so $\\sqrt{n} = 3\\sqrt{600}$.\nStep 3: Squaring gives $n = 9(600) = 5{,}400$ people.\nCheck: $\\dfrac{4.2\\sqrt{600}}{\\sqrt{5{,}400}} = \\dfrac{4.2}{3} = 1.4$. $\\checkmark$\n\n**Common Mistakes:** Multiplying by $3$ instead of $3^2$, which gives $1{,}800$; dividing by $3$, which gives $200$; using the difference $4.2 - 1.4 = 2.8$ as the scale factor, which gives $1{,}680$.\n\n**Test Day Takeaway:** With $M \\propto \\dfrac{1}{\\sqrt{n}}$, cutting the margin of error to one third of its size costs nine times the sample.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "margin-of-error",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-099",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Two random samples were surveyed about weekly bicycle commuting. For city A, the estimate is that $46\\%$ of all residents commute by bicycle at least once a week, with an associated margin of error of $3.5\\%$. For city B, the estimate is $51\\%$, with an associated margin of error of $3.5\\%$. Which of the following is best supported by these estimates and margins of error?",
    choices: [
      // distractor: treats the higher estimate as settling the comparison even though the intervals overlap
      { id: "A", text: "The percent of residents who commute by bicycle at least once a week is greater in city B than in city A." },
      { id: "B", text: "It is plausible that the percent of residents who commute by bicycle at least once a week is the same in city A as in city B." },
      // distractor: treats the difference of the two estimates as an exact population difference
      { id: "C", text: "The percent of residents who commute by bicycle at least once a week is exactly $5$ percentage points greater in city B than in city A." },
      // distractor: reads a larger estimate as a more precise one, though both margins of error are 3.5%
      { id: "D", text: "The estimate for city B is more precise than the estimate for city A." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** City A's interval is $42.5\\%$ to $49.5\\%$ and city B's is $47.5\\%$ to $54.5\\%$; they overlap between $47.5\\%$ and $49.5\\%$, so equal percents are plausible.\n\n**The Full Solution:**\nStep 1: Build each interval of plausible values: $46\\% \\pm 3.5\\%$ gives $42.5\\%$ to $49.5\\%$; $51\\% \\pm 3.5\\%$ gives $47.5\\%$ to $54.5\\%$.\nStep 2: The intervals share the values from $47.5\\%$ to $49.5\\%$, so a single percent could be plausible for both cities.\nStep 3: With overlapping intervals, the data do not establish that the two cities differ, only that a common value remains plausible.\nCheck: $48\\%$ lies in both intervals. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: City B's estimate is higher, but the overlap means the true percents could be equal or even reversed.\n* Choice C: $51\\% - 46\\% = 5$ percentage points is a difference between two estimates, not an exact population difference.\n* Choice D: Both estimates carry the same margin of error, $3.5\\%$, so neither is more precise; the size of an estimate says nothing about its precision.\n\n**Test Day Takeaway:** Compare two estimates by their intervals: overlapping intervals cannot establish a difference.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "margin-of-error",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },

  // === CONDITIONAL PROBABILITY FROM TWO-WAY TABLE (8 questions) — Phase 2 batch 2 ===
  // 18x in 12 tests (highest-frequency Phase-2-batch-2 pattern). Covers:
  // simple-conditional, conditional-with-OR-grouping, percent-answer-conversion,
  // joint-vs-conditional, working-backward-from-marginals, sub-table conditional.
  // SAT Pattern kebab matches test bundle: 'conditional-probability-from-two-way-table'.
  {
    id: "bank-ps-100",
    domain: "problem-solving",
    skills: ["conditional-probability", "two-way-table"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The table summarizes the $200$ rock samples collected on a field trip by rock type and by whether the sample contains visible crystals. One of the sedimentary samples will be selected at random. What is the probability of selecting a sample that contains visible crystals?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Visible crystals", "No visible crystals", "Total"], rows: [["Igneous", "84", "36", "120"], ["Sedimentary", "24", "56", "80"], ["Total", "108", "92", "200"]] } },
    choices: [
      // distractor: 24/200, divides by all 200 samples
      { id: "A", text: "$\\frac{3}{25}$" },
      // distractor: 24/108, conditions on visible crystals instead of sedimentary
      { id: "B", text: "$\\frac{2}{9}$" },
      { id: "C", text: "$\\frac{3}{10}$" },
      // distractor: 56/80, the complement within the sedimentary row
      { id: "D", text: "$\\frac{7}{10}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Stay in the sedimentary row: $24$ of its $80$ samples contain visible crystals, and $\\dfrac{24}{80} = \\dfrac{3}{10}$.\n\n**The Full Solution:**\nStep 1: \"One of the sedimentary samples\" restricts the sample space to the sedimentary row, whose total is $80$.\nStep 2: Within that row, $24$ samples contain visible crystals.\nStep 3: The probability is $\\dfrac{24}{80} = \\dfrac{3}{10}$.\nCheck: $\\dfrac{3}{10}$ of $80$ is $24$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{25}$): This is $\\dfrac{24}{200}$, dividing by all $200$ samples instead of the $80$ sedimentary ones.\n* Choice B ($\\frac{2}{9}$): This is $\\dfrac{24}{108}$, which conditions on visible crystals and answers \"given visible crystals, what is the probability the sample is sedimentary?\"\n* Choice D ($\\frac{7}{10}$): This is $\\dfrac{56}{80}$, the probability that a sedimentary sample has no visible crystals.\n\n**Test Day Takeaway:** The group named after \"given\" or \"one of the\" supplies the denominator; read that row's total first.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "conditional-probability-from-two-way-table",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-101",
    domain: "problem-solving",
    skills: ["conditional-probability", "two-way-table"],
    difficulty: "easy",
    type: "fill-in",
    question: "The table summarizes the $250$ melons harvested from two fields by field and by ripeness. One of the melons harvested from field B will be selected at random. What is the probability of selecting a melon that is ripe?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Ripe", "Not ripe", "Total"], rows: [["Field A", "96", "64", "160"], ["Field B", "63", "27", "90"], ["Total", "159", "91", "250"]] } },
    correctAnswer: "0.7",
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**The correct answer is $0.7$.**\n\n**The Fast Way (~10s):** Field B holds $90$ melons, $63$ of them ripe: $\\dfrac{63}{90} = 0.7$.\n\n**The Full Solution:**\nStep 1: The selection is made from field B only, so the denominator is that row's total, $90$.\nStep 2: The ripe count in that row is $63$.\nStep 3: The probability is $\\dfrac{63}{90} = \\dfrac{7}{10} = 0.7$.\nCheck: $0.7 \\times 90 = 63$. $\\checkmark$\n\n**Common Mistakes:** Using the grand total and reporting $\\dfrac{63}{250} = 0.252$; using the ripe column total and reporting $\\dfrac{63}{159} \\approx 0.396$; reporting the complement $\\dfrac{27}{90} = 0.3$.\n\n**Test Day Takeaway:** Conditioning on a row means both numbers come from that row — never from the grand total.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "conditional-probability-from-two-way-table",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-102",
    domain: "problem-solving",
    skills: ["conditional-probability", "two-way-table"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table summarizes the $320$ flights scheduled to depart from an airport on one day by aircraft type and by departure status. One of the delayed flights will be selected at random. What is the probability of selecting a flight flown by a regional jet?",
    diagram: { type: "twoWayTable", params: { headers: ["", "On time", "Delayed", "Cancelled", "Total"], rows: [["Regional jet", "96", "42", "12", "150"], ["Narrow-body", "128", "34", "8", "170"], ["Total", "224", "76", "20", "320"]] } },
    choices: [
      // distractor: 42/320, divides by all flights
      { id: "A", text: "$\\frac{21}{160}$" },
      // distractor: 42/150, conditions on regional jet instead of delayed
      { id: "B", text: "$\\frac{7}{25}$" },
      // distractor: 34/76, the narrow-body share of the delayed flights
      { id: "C", text: "$\\frac{17}{38}$" },
      { id: "D", text: "$\\frac{21}{38}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The delayed column totals $76$, of which $42$ are regional jets: $\\dfrac{42}{76} = \\dfrac{21}{38}$.\n\n**The Full Solution:**\nStep 1: The flight is chosen from the delayed flights, so the denominator is the delayed column total, $76$.\nStep 2: Of those, the regional-jet cell holds $42$ flights.\nStep 3: The probability is $\\dfrac{42}{76} = \\dfrac{21}{38}$.\nCheck: $42 + 34 = 76$, so the two aircraft types account for the whole delayed column. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{21}{160}$): This is $\\dfrac{42}{320}$, the probability that a randomly selected flight is both delayed and a regional jet.\n* Choice B ($\\frac{7}{25}$): This is $\\dfrac{42}{150}$, which conditions on regional jets and gives the probability that a regional jet was delayed.\n* Choice C ($\\frac{17}{38}$): This is $\\dfrac{34}{76}$, the probability that a delayed flight was narrow-body — the other part of the same column.\n\n**Test Day Takeaway:** Conditioning on a column makes that column's total the denominator; the row you want supplies the numerator.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "conditional-probability-from-two-way-table",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-103",
    domain: "problem-solving",
    skills: ["conditional-probability", "two-way-table"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table summarizes the $240$ animals admitted to a wildlife rehabilitation center in one year by age group and by outcome. One of the juvenile animals will be selected at random. What is the probability of selecting an animal that was not released?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Released", "Transferred", "Died", "Total"], rows: [["Juvenile", "84", "21", "35", "140"], ["Adult", "60", "15", "25", "100"], ["Total", "144", "36", "60", "240"]] } },
    choices: [
      // distractor: 56/240, divides by all animals admitted
      { id: "A", text: "$\\frac{7}{30}$" },
      { id: "B", text: "$\\frac{2}{5}$" },
      // distractor: 56/96, conditions on the animals that were not released
      { id: "C", text: "$\\frac{7}{12}$" },
      // distractor: 84/140, the released share of the juveniles
      { id: "D", text: "$\\frac{3}{5}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Among the $140$ juveniles, $21 + 35 = 56$ were not released: $\\dfrac{56}{140} = \\dfrac{2}{5}$.\n\n**The Full Solution:**\nStep 1: The animal is chosen from the juveniles, so the denominator is $140$.\nStep 2: \"Not released\" covers two outcomes in that row: transferred, $21$, and died, $35$, for a total of $56$.\nStep 3: The probability is $\\dfrac{56}{140} = \\dfrac{2}{5}$.\nCheck: the released juveniles number $84$, and $\\dfrac{84}{140} = \\dfrac{3}{5}$, the complement of $\\dfrac{2}{5}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{7}{30}$): This is $\\dfrac{56}{240}$, dividing by every animal admitted instead of by the juveniles.\n* Choice C ($\\frac{7}{12}$): This is $\\dfrac{56}{96}$, conditioning on the animals that were not released rather than on the juveniles.\n* Choice D ($\\frac{3}{5}$): This is $\\dfrac{84}{140}$, the probability that a juvenile was released — the complement of what was asked.\n\n**Test Day Takeaway:** A \"not\" in the question adds cells across the given row; it never changes the denominator.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "conditional-probability-from-two-way-table",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-104",
    domain: "problem-solving",
    skills: ["conditional-probability", "two-way-table"],
    difficulty: "medium",
    type: "fill-in",
    question: "The table summarizes the $180$ cheeses entered in a competition by milk type and by award received. One of the cheeses that received an award will be selected at random. What is the probability of selecting a cheese made from goat's milk?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Gold", "Silver", "No award", "Total"], rows: [["Cow", "24", "36", "60", "120"], ["Goat", "15", "15", "30", "60"], ["Total", "39", "51", "90", "180"]] } },
    correctAnswer: "1/3",
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**The correct answer is $\\frac{1}{3}$.**\n\n**The Fast Way (~20s):** Awards total $39 + 51 = 90$ cheeses, of which $15 + 15 = 30$ are goat's milk: $\\dfrac{30}{90} = \\dfrac{1}{3}$.\n\n**The Full Solution:**\nStep 1: \"Received an award\" means gold or silver, so the denominator is $39 + 51 = 90$ cheeses.\nStep 2: The goat's-milk cheeses among those are $15$ gold and $15$ silver, or $30$ cheeses.\nStep 3: The probability is $\\dfrac{30}{90} = \\dfrac{1}{3}$.\nCheck: the awarded cow's-milk cheeses number $24 + 36 = 60$, and $30 + 60 = 90$. $\\checkmark$\n\n**Common Mistakes:** Dividing by all $180$ cheeses, which gives $\\dfrac{30}{180} = \\dfrac{1}{6}$; dividing by the $60$ goat's-milk cheeses, which gives $\\dfrac{30}{60} = \\dfrac{1}{2}$ and answers \"given goat's milk, what is the probability of an award?\"; using only the gold column, which gives $\\dfrac{15}{39}$.\n\n**Test Day Takeaway:** When the given group spans two columns, add those columns for the denominator before reading the numerator.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "conditional-probability-from-two-way-table",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-105",
    domain: "problem-solving",
    skills: ["conditional-probability", "two-way-table"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table summarizes the $500$ soil samples collected in a watershed by land use and by whether the sample's phosphorus level exceeded a threshold. One of the samples whose phosphorus level exceeded the threshold will be selected at random. What is the probability of selecting a sample that was not collected from cropland?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Exceeded", "Did not exceed", "Total"], rows: [["Cropland", "96", "104", "200"], ["Pasture", "60", "90", "150"], ["Woodland", "24", "126", "150"], ["Total", "180", "320", "500"]] } },
    choices: [
      // distractor: 84/500, divides by all samples
      { id: "A", text: "$\\frac{21}{125}$" },
      // distractor: 84/300, divides by every non-cropland sample instead of the exceeding ones
      { id: "B", text: "$\\frac{7}{25}$" },
      { id: "C", text: "$\\frac{7}{15}$" },
      // distractor: 96/180, the cropland share of the exceeding samples
      { id: "D", text: "$\\frac{8}{15}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Of the $180$ samples that exceeded the threshold, $60 + 24 = 84$ came from pasture or woodland: $\\dfrac{84}{180} = \\dfrac{7}{15}$.\n\n**The Full Solution:**\nStep 1: The sample is drawn from the exceeded column, so the denominator is $180$.\nStep 2: \"Not cropland\" means pasture or woodland: $60 + 24 = 84$ samples in that column.\nStep 3: The probability is $\\dfrac{84}{180} = \\dfrac{7}{15}$.\nCheck: the cropland part of the column is $96$, and $84 + 96 = 180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{21}{125}$): This is $\\dfrac{84}{500}$, the probability that a randomly selected sample both exceeded the threshold and was not cropland.\n* Choice B ($\\frac{7}{25}$): This is $\\dfrac{84}{300}$, using all $300$ non-cropland samples as the denominator instead of the exceeding ones.\n* Choice D ($\\frac{8}{15}$): This is $\\dfrac{96}{180}$, the probability that an exceeding sample was cropland — the complement.\n\n**Test Day Takeaway:** Fix the denominator from the \"given\" column first; only then decide which cells in it the \"not\" condition keeps.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "conditional-probability-from-two-way-table",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-106",
    domain: "problem-solving",
    skills: ["conditional-probability", "two-way-table"],
    difficulty: "hard",
    type: "fill-in",
    question: "For the $400$ eggs in a hatchery study, the table summarizes the distribution by incubation batch and by hatch time. One of these eggs will be selected at random. What is the probability of selecting an egg that hatched in $22$ days or fewer, given that the egg was not in batch $2$?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Fewer than 20 days", "20 to 22 days", "More than 22 days", "Total"], rows: [["Batch 1", "40", "60", "20", "120"], ["Batch 2", "15", "85", "30", "130"], ["Batch 3", "25", "95", "30", "150"], ["Total", "80", "240", "80", "400"]] } },
    correctAnswer: "22/27",
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**The correct answer is $\\frac{22}{27}$.**\n\n**The Fast Way (~35s):** Outside batch $2$ there are $120 + 150 = 270$ eggs, and $(40 + 60) + (25 + 95) = 220$ of them hatched in $22$ days or fewer: $\\dfrac{220}{270} = \\dfrac{22}{27}$.\n\n**The Full Solution:**\nStep 1: \"Given that the egg was not in batch $2$\" restricts the sample space to batches $1$ and $3$: $120 + 150 = 270$ eggs.\nStep 2: \"$22$ days or fewer\" covers the first two columns. In batch $1$ that is $40 + 60 = 100$ eggs; in batch $3$ it is $25 + 95 = 120$ eggs, for $220$ in all.\nStep 3: The probability is $\\dfrac{220}{270} = \\dfrac{22}{27}$.\nCheck: the eggs outside batch $2$ that took more than $22$ days number $20 + 30 = 50$, and $220 + 50 = 270$. $\\checkmark$\n\n**Common Mistakes:** Dividing by all $400$ eggs, which gives $\\dfrac{220}{400} = \\dfrac{11}{20}$; including batch $2$ in the numerator as well, which gives $\\dfrac{320}{400} = \\dfrac{4}{5}$; using only the \"$20$ to $22$ days\" column and reporting $\\dfrac{155}{270}$.\n\n**Test Day Takeaway:** Two conditions, two edits: \"not batch $2$\" removes a row, \"$22$ days or fewer\" merges two columns — apply both before dividing.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "conditional-probability-from-two-way-table",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-107",
    domain: "problem-solving",
    skills: ["conditional-probability", "two-way-table"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The table summarizes the results of a study of $450$ grapevines by treatment group and by mildew status at the end of the season. Based on the table, which of the following statements is true?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Infected", "Not infected", "Total"], rows: [["Control", "72", "78", "150"], ["Treatment A", "45", "105", "150"], ["Treatment B", "27", "123", "150"], ["Total", "144", "306", "450"]] } },
    choices: [
      { id: "A", text: "The probability that a vine is infected, given that it received treatment A, is greater than the probability that a vine is infected, given that it received treatment B." },
      // distractor: reverses the condition: 45/144 is in fact greater than 27/144
      { id: "B", text: "The probability that a vine received treatment A, given that it is infected, is less than the probability that it received treatment B, given that it is infected." },
      // distractor: uses the overall not-infected rate 306/450 = 0.68 instead of the control row's 78/150 = 0.52
      { id: "C", text: "The probability that a vine is not infected, given that it was in the control group, is greater than $0.60$." },
      // distractor: assumes the control group has the lowest infection rate, but 72/150 = 0.48 exceeds 45/150 = 0.30
      { id: "D", text: "The probability that a vine is infected, given that it was in the control group, is less than the probability that a vine is infected, given that it received treatment A." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** Each treatment row totals $150$, so compare the infected counts directly: $\\dfrac{45}{150} = 0.30$ for treatment A exceeds $\\dfrac{27}{150} = 0.18$ for treatment B.\n\n**The Full Solution:**\nStep 1: Conditioning on a treatment group means dividing that row's infected count by that row's total.\nStep 2: For treatment A the probability is $\\dfrac{45}{150} = 0.30$; for treatment B it is $\\dfrac{27}{150} = 0.18$.\nStep 3: Since $0.30 > 0.18$, the statement in choice A is true.\nCheck: both treatment rows have the same total, $150$, so the larger infected count gives the larger probability. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: This conditions on \"infected\" instead of on the treatment. Both probabilities share the denominator $144$, and $\\dfrac{45}{144} > \\dfrac{27}{144}$, so the inequality runs the other way.\n* Choice C: The control row gives $\\dfrac{78}{150} = 0.52$, not more than $0.60$; the value $\\dfrac{306}{450} = 0.68$ comes from the whole study, not from the control group.\n* Choice D: The control group has the highest infection rate, $\\dfrac{72}{150} = 0.48$, which is greater than treatment A's $0.30$, not less.\n\n**Test Day Takeaway:** \"Given that it received treatment\" divides by a row total; \"given that it is infected\" divides by a column total — swapping them reverses the comparison.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "conditional-probability-from-two-way-table",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },

  // === REVERSE-PERCENT (8 questions) — Phase 2 batch 3 priority pattern ===
  // 10x in 12 tests. Covers: basic "X is P% of total" reverse, discount
  // reverse (sale → original), growth reverse (new → old), multi-step reverse.
  // SAT Pattern kebab matches test bundle: 'reverse-percent'.
  {
    id: "bank-ps-108",
    domain: "problem-solving",
    skills: ["percent-word-problems", "percent-of-value"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A conference received $320$ early registrations, which was $40\\%$ of all the registrations the conference received. How many registrations did the conference receive in all?",
    choices: [
      // distractor: 0.40(320) = 128, multiplying instead of dividing
      { id: "A", text: "$128$" },
      // distractor: 1.40(320) = 448, increasing the part by 40%
      { id: "B", text: "$448$" },
      // distractor: 480 is the number of registrations that were not early registrations
      { id: "C", text: "$480$" },
      { id: "D", text: "$800$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The part is known and the percent is known, so divide: $\\dfrac{320}{0.40} = 800$.\n\n**The Full Solution:**\nStep 1: Let $t$ be the total number of registrations. Then $0.40t = 320$.\nStep 2: Divide both sides by $0.40$: $t = \\dfrac{320}{0.40} = 800$.\nStep 3: The conference received $800$ registrations in all.\nCheck: $40\\%$ of $800$ is $320$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($128$): This computes $0.40(320)$, taking $40\\%$ of the part instead of solving for the whole.\n* Choice B ($448$): This computes $1.40(320)$, as if the $320$ registrations were to be increased by $40\\%$.\n* Choice C ($480$): This is the number of registrations that were not early registrations, the other $60\\%$ of the total.\n\n**Test Day Takeaway:** \"$320$ is $40\\%$ of what?\" is division: part $\\div$ rate, never part $\\times$ rate.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-109",
    domain: "problem-solving",
    skills: ["percent-word-problems", "percent-of-value"],
    difficulty: "easy",
    type: "fill-in",
    question: "In a shipment of flower bulbs, $234$ of the bulbs are tulip bulbs, which is $65\\%$ of the bulbs in the shipment. How many bulbs are in the shipment?",
    correctAnswer: "360",
    explanation: "**SAT Pattern: Reverse-Percent**\n\n**The correct answer is $360$.**\n\n**The Fast Way (~15s):** $\\dfrac{234}{0.65} = 360$.\n\n**The Full Solution:**\nStep 1: Let $b$ be the number of bulbs in the shipment; then $0.65b = 234$.\nStep 2: Divide both sides by $0.65$: $b = \\dfrac{234}{0.65}$.\nStep 3: $b = 360$ bulbs.\nCheck: $0.65 \\times 360 = 234$. $\\checkmark$\n\n**Common Mistakes:** Multiplying instead of dividing, $0.65(234) = 152.1$; increasing the part by $65\\%$, $1.65(234) = 386.1$; dividing by the other $35\\%$, which gives about $668.57$.\n\n**Test Day Takeaway:** Translate the sentence into one equation, part $=$ rate $\\times$ whole, and solve for the unknown factor.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-110",
    domain: "problem-solving",
    skills: ["percent-word-problems", "percent-of-value"],
    difficulty: "easy",
    type: "fill-in",
    question: "A hiker has walked $8.4$ kilometers of a trail, which is $35\\%$ of the total length of the trail. What is the total length of the trail, in kilometers?",
    correctAnswer: "24",
    explanation: "**SAT Pattern: Reverse-Percent**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~15s):** $\\dfrac{8.4}{0.35} = 24$.\n\n**The Full Solution:**\nStep 1: Let $L$ be the total length, in kilometers. Then $0.35L = 8.4$.\nStep 2: $L = \\dfrac{8.4}{0.35}$.\nStep 3: $L = 24$ kilometers.\nCheck: $35\\%$ of $24$ is $8.4$. $\\checkmark$\n\n**Common Mistakes:** Multiplying instead of dividing, $0.35(8.4) = 2.94$; dividing by the remaining $65\\%$, which gives about $12.92$; adding $35\\%$ to the distance walked, $1.35(8.4) = 11.34$.\n\n**Test Day Takeaway:** A percent of an unknown whole gives a one-step equation; solve it rather than guessing which way to multiply.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-111",
    domain: "problem-solving",
    skills: ["percent-word-problems", "percent-change"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The price of a document scanner was reduced by $25\\%$. After the reduction, the price of the scanner is $\\$63$. What was the price of the scanner, in dollars, before the reduction?",
    choices: [
      // distractor: 63(0.75) = 47.25, applying the discount a second time
      { id: "A", text: "$47.25$" },
      // distractor: 63(1.25) = 78.75, adding 25% of the reduced price
      { id: "B", text: "$78.75$" },
      { id: "C", text: "$84$" },
      // distractor: 63/0.25 = 252, dividing by the discount rate instead of by what remains
      { id: "D", text: "$252$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** After a $25\\%$ reduction the price is $75\\%$ of the original, so the original is $\\dfrac{63}{0.75} = 84$.\n\n**The Full Solution:**\nStep 1: Let $p$ be the original price, in dollars. A $25\\%$ reduction leaves $p - 0.25p = 0.75p$.\nStep 2: $0.75p = 63$, so $p = \\dfrac{63}{0.75}$.\nStep 3: $p = 84$ dollars.\nCheck: $25\\%$ of $84$ is $21$, and $84 - 21 = 63$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($47.25$): This takes another $25\\%$ off the reduced price, $63(0.75)$, moving in the wrong direction.\n* Choice B ($78.75$): This adds $25\\%$ of the reduced price, $63(1.25)$; the discount was $25\\%$ of the original price, which is larger.\n* Choice D ($252$): This divides by $0.25$, the part removed, instead of by $0.75$, the part that remains.\n\n**Test Day Takeaway:** Undo a percent change by dividing by the multiplier that produced it: $1 - r$ for a decrease, $1 + r$ for an increase.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-112",
    domain: "problem-solving",
    skills: ["percent-word-problems", "percent-change"],
    difficulty: "medium",
    type: "fill-in",
    question: "The number of registered volunteers at a park increased by $16\\%$ from last year to this year. This year there are $638$ registered volunteers. How many registered volunteers were there last year?",
    correctAnswer: "550",
    explanation: "**SAT Pattern: Reverse-Percent**\n\n**The correct answer is $550$.**\n\n**The Fast Way (~20s):** This year is $1.16$ times last year, so last year is $\\dfrac{638}{1.16} = 550$.\n\n**The Full Solution:**\nStep 1: Let $v$ be last year's number of registered volunteers. A $16\\%$ increase gives $v + 0.16v = 1.16v$.\nStep 2: $1.16v = 638$, so $v = \\dfrac{638}{1.16}$.\nStep 3: $v = 550$ volunteers.\nCheck: $16\\%$ of $550$ is $88$, and $550 + 88 = 638$. $\\checkmark$\n\n**Common Mistakes:** Taking $16\\%$ off this year's number, $638(0.84) = 535.92$; dividing by the rate itself, $\\dfrac{638}{0.16} = 3{,}987.5$; increasing again, $638(1.16) = 740.08$.\n\n**Test Day Takeaway:** The percent always applies to the earlier value, so the earlier value is what you solve for — dividing, not multiplying.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-113",
    domain: "problem-solving",
    skills: ["percent-word-problems", "percent-of-value"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In a cycling club, $40\\%$ of the members did not renew their membership this year. If $900$ members did renew, how many members did the club have?",
    choices: [
      // distractor: 900(0.6) = 540, multiplying by the renewal rate instead of dividing
      { id: "A", text: "$540$" },
      // distractor: 900(1.4) = 1,260, adding 40% to the renewals
      { id: "B", text: "$1{,}260$" },
      { id: "C", text: "$1{,}500$" },
      // distractor: 900/0.4 = 2,250, dividing by the rate of the members who did not renew
      { id: "D", text: "$2{,}250$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The $900$ renewals are the other $60\\%$, so the club had $\\dfrac{900}{0.60} = 1{,}500$ members.\n\n**The Full Solution:**\nStep 1: If $40\\%$ did not renew, then $100\\% - 40\\% = 60\\%$ did renew.\nStep 2: Let $m$ be the number of members. Then $0.60m = 900$.\nStep 3: $m = \\dfrac{900}{0.60} = 1{,}500$ members.\nCheck: $40\\%$ of $1{,}500$ is $600$, and $1{,}500 - 600 = 900$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($540$): This computes $900(0.60)$, multiplying by the rate instead of dividing by it.\n* Choice B ($1{,}260$): This computes $900(1.40)$, as if the renewals were to be increased by $40\\%$.\n* Choice D ($2{,}250$): This divides by $0.40$, the rate for the members who did not renew, rather than by the rate that matches the $900$.\n\n**Test Day Takeaway:** Match the count you are given to the percent that describes it; here $900$ is $60\\%$, not $40\\%$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-114",
    domain: "problem-solving",
    skills: ["percent-word-problems", "percent-change"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The number of monthly downloads of an app increased by $20\\%$ from 2021 to 2022 and then decreased by $25\\%$ from 2022 to 2024. There were $27{,}000$ monthly downloads in 2024. How many monthly downloads were there in 2021?",
    choices: [
      // distractor: 27,000/1.2 = 22,500, undoing only the increase
      { id: "A", text: "$22{,}500$" },
      // distractor: 27,000(1.2)(0.75) = 24,300, applying both changes forward to the 2024 value
      { id: "B", text: "$24{,}300$" },
      { id: "C", text: "$30{,}000$" },
      // distractor: 27,000/0.75 = 36,000, undoing only the decrease
      { id: "D", text: "$36{,}000$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The two changes multiply the 2021 value by $(1.20)(0.75) = 0.90$, so the 2021 value is $\\dfrac{27{,}000}{0.90} = 30{,}000$.\n\n**The Full Solution:**\nStep 1: Let $d$ be the number of monthly downloads in 2021. The $20\\%$ increase gives $1.20d$ in 2022.\nStep 2: The $25\\%$ decrease gives $0.75(1.20d) = 0.90d$ in 2024, so $0.90d = 27{,}000$.\nStep 3: $d = \\dfrac{27{,}000}{0.90} = 30{,}000$ monthly downloads.\nCheck: $30{,}000 \\to 36{,}000$ after the increase, and $36{,}000 - 9{,}000 = 27{,}000$ after the decrease. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($22{,}500$): This divides by $1.20$ only, undoing the increase but leaving the decrease in place.\n* Choice B ($24{,}300$): This applies both changes forward to the 2024 value instead of undoing them.\n* Choice D ($36{,}000$): This divides by $0.75$ only; $36{,}000$ is the 2022 value, not the 2021 value.\n\n**Test Day Takeaway:** Chain the multipliers first, then divide once — percent changes never add ($+20\\%$ then $-25\\%$ is $-10\\%$, not $-5\\%$).",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-115",
    domain: "problem-solving",
    skills: ["percent-word-problems", "successive-percent-change"],
    difficulty: "hard",
    type: "fill-in",
    question: "A laboratory reduced the volume of a reagent by $30\\%$ and then increased the reduced volume by $40\\%$. The final volume is $294$ milliliters. What was the original volume, in milliliters?",
    correctAnswer: "300",
    explanation: "**SAT Pattern: Reverse-Percent**\n\n**The correct answer is $300$.**\n\n**The Fast Way (~30s):** The two changes multiply the original by $(0.70)(1.40) = 0.98$, so the original is $\\dfrac{294}{0.98} = 300$.\n\n**The Full Solution:**\nStep 1: Let $V$ be the original volume, in milliliters. The $30\\%$ reduction leaves $0.70V$.\nStep 2: Increasing that by $40\\%$ gives $1.40(0.70V) = 0.98V$, so $0.98V = 294$.\nStep 3: $V = \\dfrac{294}{0.98} = 300$ milliliters.\nCheck: $300 \\to 210$ after the reduction, and $210 + 84 = 294$ after the increase. $\\checkmark$\n\n**Common Mistakes:** Treating the net change as $+10\\%$ and computing $\\dfrac{294}{1.10} \\approx 267.27$; applying the changes forward to the final volume, $294(0.70)(1.40) = 288.12$; undoing only the reduction, $\\dfrac{294}{0.70} = 420$.\n\n**Test Day Takeaway:** A $30\\%$ cut followed by a $40\\%$ raise is a $2\\%$ net loss, because the raise applies to the smaller amount.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },

  // === SUM-OF-PARTS RATIO (8 questions) — Phase 2 batch 3 priority pattern ===
  // 9x in 12 tests. Covers: 2-way ratio of total, 3-way ratio of total,
  // ratio + difference, chained ratios. Key principle: denominator of each
  // fraction is the SUM of ratio parts, not just one part.
  // SAT Pattern kebab matches test bundle: 'sum-of-parts-ratio'.
  {
    id: "bank-ps-116",
    domain: "problem-solving",
    skills: ["word-problem-to-equation"],
    difficulty: "easy",
    type: "fill-in",
    question: "In a collection of books, the ratio of the number of paperback books to the number of hardcover books is $7 : 5$. The collection contains $336$ books. How many of the books are hardcover?",
    correctAnswer: "140",
    explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**The correct answer is $140$.**\n\n**The Fast Way (~20s):** The ratio has $7 + 5 = 12$ parts, so one part is $\\dfrac{336}{12} = 28$ books and the hardcovers are $5(28) = 140$.\n\n**The Full Solution:**\nStep 1: Write the counts as $7k$ paperbacks and $5k$ hardcovers, so $7k + 5k = 336$.\nStep 2: $12k = 336$, so $k = 28$.\nStep 3: The number of hardcover books is $5k = 5(28) = 140$.\nCheck: $196 + 140 = 336$, and $196 : 140$ reduces to $7 : 5$. $\\checkmark$\n\n**Common Mistakes:** Reporting $k = 28$, the size of one part, instead of the five parts asked for; reporting $196$, the number of paperbacks; dividing by a single term of the ratio, $\\dfrac{336}{5} = 67.2$.\n\n**Test Day Takeaway:** Add the terms of the ratio to get the number of parts in the whole, then scale up the part you are asked for.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "sum-of-parts-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-117",
    domain: "problem-solving",
    skills: ["word-problem-to-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In a mortar mix, the ratio of the mass of sand to the mass of cement is $3 : 5$. A batch of this mix has a mass of $96$ kilograms. What is the mass, in kilograms, of the sand in the batch?",
    choices: [
      // distractor: 96/8 = 12, the mass of one part
      { id: "A", text: "$12$" },
      { id: "B", text: "$36$" },
      // distractor: 96(3/5) = 57.6, treating 3 : 5 as part to whole
      { id: "C", text: "$57.6$" },
      // distractor: 60 kilograms is the cement, the other part
      { id: "D", text: "$60$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The batch has $3 + 5 = 8$ parts, so one part is $\\dfrac{96}{8} = 12$ kilograms and the sand is $3(12) = 36$ kilograms.\n\n**The Full Solution:**\nStep 1: Write the masses as $3k$ kilograms of sand and $5k$ kilograms of cement, so $3k + 5k = 96$.\nStep 2: $8k = 96$, so $k = 12$.\nStep 3: The sand has mass $3k = 36$ kilograms.\nCheck: $36 + 60 = 96$, and $36 : 60$ reduces to $3 : 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): This is $k$, the mass of a single part, not the three parts of sand.\n* Choice C ($57.6$): This computes $\\dfrac{3}{5}$ of $96$, treating $3 : 5$ as a part-to-whole ratio; the whole is $8$ parts, not $5$.\n* Choice D ($60$): This is the mass of the cement, the $5$-part share.\n\n**Test Day Takeaway:** A ratio compares parts to parts; convert it to a part-to-whole fraction, $\\dfrac{3}{8}$ here, before multiplying.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "sum-of-parts-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-118",
    domain: "problem-solving",
    skills: ["word-problem-to-equation"],
    difficulty: "medium",
    type: "fill-in",
    question: "In a beverage, the ratio of the volume of concentrate to the volume of water is $2 : 9$. A container holds $3.3$ liters of this beverage. How many milliliters of concentrate does the container hold? ($1$ liter $= 1{,}000$ milliliters)",
    correctAnswer: "600",
    explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**The correct answer is $600$.**\n\n**The Fast Way (~25s):** The beverage has $2 + 9 = 11$ parts, so the concentrate is $\\dfrac{2}{11}(3.3) = 0.6$ liters, or $600$ milliliters.\n\n**The Full Solution:**\nStep 1: Write the volumes as $2k$ liters of concentrate and $9k$ liters of water, so $11k = 3.3$ and $k = 0.3$.\nStep 2: The concentrate is $2k = 0.6$ liters.\nStep 3: Convert: $0.6 \\times 1{,}000 = 600$ milliliters.\nCheck: $0.6 + 2.7 = 3.3$ liters, and $0.6 : 2.7$ reduces to $2 : 9$. $\\checkmark$\n\n**Common Mistakes:** Answering $0.6$, the volume in liters, when the question asks for milliliters; using the water term as the whole, $\\dfrac{2}{9}(3.3) \\approx 0.733$ liters, or about $733$ milliliters; reporting one part, $0.3$ liters $= 300$ milliliters.\n\n**Test Day Takeaway:** Finish the ratio work in the given units, then convert once — and check which unit the question asks for.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "sum-of-parts-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-119",
    domain: "problem-solving",
    skills: ["word-problem-to-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A dry mix contains oats, seeds, and dried fruit by mass in the ratio $9 : 4 : 2$, respectively. A package of the mix contains $180$ grams of oats. What is the total mass, in grams, of the mix in the package?",
    choices: [
      // distractor: (180/15)(9) = 108, dividing by the 15 total parts instead of the 9 oat parts
      { id: "A", text: "$108$" },
      // distractor: 120 grams is the seeds and dried fruit together, not the whole package
      { id: "B", text: "$120$" },
      { id: "C", text: "$300$" },
      // distractor: (180/4)(15) = 675, matching the given mass to the wrong term of the ratio
      { id: "D", text: "$675$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The oats are $9$ parts, so one part is $\\dfrac{180}{9} = 20$ grams, and the $9 + 4 + 2 = 15$ parts total $15(20) = 300$ grams.\n\n**The Full Solution:**\nStep 1: Write the masses as $9k$, $4k$, and $2k$ grams. The oats give $9k = 180$, so $k = 20$.\nStep 2: The three parts total $9k + 4k + 2k = 15k$ grams.\nStep 3: $15(20) = 300$ grams.\nCheck: $180 + 80 + 40 = 300$, and $180 : 80 : 40$ reduces to $9 : 4 : 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($108$): This divides $180$ by the $15$ total parts and then multiplies by $9$; the $180$ grams already corresponds to $9$ parts.\n* Choice B ($120$): This is the mass of the seeds and dried fruit, $4k + 2k$, rather than the whole package.\n* Choice D ($675$): This matches the $180$ grams to the $4$-part term, giving $k = 45$ and a total of $675$ grams.\n\n**Test Day Takeaway:** Anchor the unit part on the quantity you are given, then multiply by whichever number of parts the question asks for.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "sum-of-parts-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-120",
    domain: "problem-solving",
    skills: ["word-problem-to-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "At a conservatory, the ratio of the number of ferns to the number of orchids to the number of succulents is $5 : 3 : 7$, respectively. The conservatory has $450$ of these plants in all. How many more succulents than ferns are there?",
    choices: [
      // distractor: 30 is one part, as if the difference were 7 - 5 = 1 part
      { id: "A", text: "$30$" },
      { id: "B", text: "$60$" },
      // distractor: 120 is 4 parts, the gap between the succulents and the orchids
      { id: "C", text: "$120$" },
      // distractor: 210 is the number of succulents, not the difference
      { id: "D", text: "$210$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** There are $5 + 3 + 7 = 15$ parts, so one part is $\\dfrac{450}{15} = 30$ plants, and the succulents exceed the ferns by $7 - 5 = 2$ parts: $2(30) = 60$.\n\n**The Full Solution:**\nStep 1: Write the counts as $5k$ ferns, $3k$ orchids, and $7k$ succulents, so $15k = 450$ and $k = 30$.\nStep 2: There are $7(30) = 210$ succulents and $5(30) = 150$ ferns.\nStep 3: The difference is $210 - 150 = 60$ plants.\nCheck: $150 + 90 + 210 = 450$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($30$): This is one part; the succulents lead the ferns by $2$ parts, not $1$.\n* Choice C ($120$): This is $4$ parts, the gap between the succulents and the orchids rather than the ferns.\n* Choice D ($210$): This is the number of succulents, not how many more there are than ferns.\n\n**Test Day Takeaway:** For a \"how many more\" question, subtract the ratio terms first and multiply that difference by the size of one part.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "sum-of-parts-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
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
  {
    id: "bank-ps-181",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "easy",
    type: "fill-in",
    question: "A greenhouse contains $360$ seedlings, and $35\\%$ of the seedlings are tomato plants. How many of the seedlings are tomato plants?",
    correctAnswer: "126",
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**The correct answer is $126$.**\n\n**The Fast Way (~10s):** $35\\%$ of $360$ is $0.35 \\times 360 = 126$.\n\n**The Full Solution:**\nStep 1: \"$35\\%$ of the seedlings\" means $\\frac{35}{100}$ times the total number of seedlings, $360$.\nStep 2: Convert the percent to a decimal and multiply: $0.35 \\times 360 = 126$.\nStep 3: Check: $10\\%$ of $360$ is $36$, so $35\\%$ is $3.5 \\times 36 = 126$. $\\checkmark$\n\n**Common Mistakes:** Dividing instead of multiplying, $360 \\div 35 \\approx 10.29$; misplacing the decimal and using $0.035 \\times 360 = 12.6$; or computing the complement, $0.65 \\times 360 = 234$, which counts the seedlings that are not tomato plants.\n\n**Test Day Takeaway:** \"$p\\%$ of a whole\" is always $\\frac{p}{100}$ times the whole — convert the percent to a decimal first, then multiply.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-of-a-whole",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-182",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A questionnaire was sent to $k$ employees of a company, and $30\\%$ of these employees returned the questionnaire. If $51$ employees returned the questionnaire, what is the value of $k$?",
    choices: [
      // distractor: multiplies 51 by 0.30 instead of dividing
      { id: "A", text: "$15.3$" },
      // distractor: adds 30 to 51
      { id: "B", text: "$81$" },
      { id: "C", text: "$170$" },
      // distractor: multiplies 51 by 30
      { id: "D", text: "$1{,}530$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $30\\%$ of $k$ is $51$, so $0.30k = 51$ and $k = \\frac{51}{0.30} = 170$.\n\n**The Full Solution:**\nStep 1: Translate the statement: $30\\%$ of the $k$ employees returned the questionnaire, so $0.30k = 51$.\nStep 2: Solve for $k$ by dividing both sides by $0.30$: $k = \\frac{51}{0.30} = 170$.\nStep 3: Check: $30\\%$ of $170$ is $0.30 \\times 170 = 51$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($15.3$): multiplies $51$ by $0.30$ instead of dividing, which finds $30\\%$ of $51$ rather than the whole.\n* Choice B ($81$): adds $30$ to $51$, treating the percent as a count of employees.\n* Choice D ($1{,}530$): multiplies $51$ by $30$, dropping the \"per hundred\" in the percent.\n\n**Test Day Takeaway:** When a percent of an unknown whole is given, set up $\\frac{p}{100} \\cdot (\\text{whole}) = \\text{part}$ and divide — the whole is always larger than the part when $p < 100$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-of-a-whole",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-183",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "medium",
    type: "fill-in",
    question: "In a batch of $x$ metal castings, $16\\%$ of the castings failed a stress test. If $44$ of the castings failed the test, what is the value of $x$?",
    correctAnswer: "275",
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**The correct answer is $275$.**\n\n**The Fast Way (~10s):** $0.16x = 44$, so $x = \\frac{44}{0.16} = 275$.\n\n**The Full Solution:**\nStep 1: \"$16\\%$ of the $x$ castings failed\" translates to $0.16x = 44$.\nStep 2: Divide both sides by $0.16$: $x = \\frac{44}{0.16} = \\frac{4400}{16} = 275$.\nStep 3: Check: $16\\%$ of $275$ is $0.16 \\times 275 = 44$. $\\checkmark$\n\n**Common Mistakes:** Multiplying instead of dividing, $44 \\times 0.16 = 7.04$; dividing by $16$ instead of $0.16$, which gives $2.75$; or multiplying $44 \\times 16 = 704$ by forgetting that a percent is \"per hundred.\"\n\n**Test Day Takeaway:** Part $= \\frac{p}{100} \\times$ whole. If the part and the percent are known, the whole is the part divided by the decimal form of the percent.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-of-a-whole",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-184",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table gives the mass, in kilograms, of each type of material collected during a community recycling drive. The mass of glass collected is $p\\%$ of the total mass collected. What is the value of $p$?",
    diagram: { type: "dataTable", params: { headers: ["Material", "Mass (kg)"], rows: [["Paper", "84"], ["Plastic", "36"], ["Glass", "60"], ["Metal", "20"]] } },
    choices: [
      // distractor: uses the plastic row (36/200)
      { id: "A", text: "$18$" },
      { id: "B", text: "$30$" },
      // distractor: uses the paper row (84/200)
      { id: "C", text: "$42$" },
      // distractor: reports the mass of glass, not a percent
      { id: "D", text: "$60$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Total mass $= 84 + 36 + 60 + 20 = 200$ kilograms. Glass is $\\frac{60}{200} = 0.30$, so $p = 30$.\n\n**The Full Solution:**\nStep 1: The \"whole\" is the total mass: $84 + 36 + 60 + 20 = 200$ kilograms.\nStep 2: The part is the glass row, $60$ kilograms. Percent $= \\frac{\\text{part}}{\\text{whole}} \\times 100 = \\frac{60}{200} \\times 100 = 30$.\nStep 3: Check: $30\\%$ of $200$ is $0.30 \\times 200 = 60$, the glass mass in the table. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($18$): reads the plastic row instead of the glass row, $\\frac{36}{200} = 18\\%$.\n* Choice C ($42$): reads the paper row, $\\frac{84}{200} = 42\\%$.\n* Choice D ($60$): reports the mass of glass in kilograms rather than its percent of the total.\n\n**Test Day Takeaway:** For \"what percent of the total,\" first add every row to get the whole, then divide the one row asked about by that total.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-of-a-whole",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-185",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "medium",
    type: "fill-in",
    question: "A print shop produced $4{,}250$ posters for an event. Of these posters, $72\\%$ were printed in color and the rest were printed in black and white. How many more posters were printed in color than in black and white?",
    correctAnswer: "1870",
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**The correct answer is $1870$.**\n\n**The Fast Way (~15s):** Color is $72\\%$ and black and white is $28\\%$, a gap of $44\\%$. So the difference is $0.44 \\times 4250 = 1870$.\n\n**The Full Solution:**\nStep 1: Color posters: $0.72 \\times 4250 = 3060$.\nStep 2: Black-and-white posters are the rest: $4250 - 3060 = 1190$ (equivalently $0.28 \\times 4250$).\nStep 3: Difference: $3060 - 1190 = 1870$. Check: $1870 = 0.44 \\times 4250$, and $72\\% - 28\\% = 44\\%$. $\\checkmark$\n\n**Common Mistakes:** Stopping at $3060$, the number of color posters, instead of finding the difference; reporting $1190$, the number of black-and-white posters; or subtracting $72$ from $4250$ as though the percent were a count.\n\n**Test Day Takeaway:** When a question asks \"how many more,\" you can subtract the two percents first and take that single percent of the whole — one multiplication instead of two.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-of-a-whole",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-186",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "If $12\\%$ of $y$ is equal to $30\\%$ of $45$, what is $y\\%$ of $200$?",
    choices: [
      // distractor: uses 13.5 (30% of 45) as the percent: 0.135 × 200
      { id: "A", text: "$27$" },
      // distractor: swaps the percents, y = 45 × 0.12 ÷ 0.30 = 18, then 18% of 200
      { id: "B", text: "$36$" },
      // distractor: stops at y = 112.5 without taking y% of 200
      { id: "C", text: "$112.5$" },
      { id: "D", text: "$225$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** $30\\%$ of $45$ is $13.5$, so $0.12y = 13.5$ and $y = 112.5$. Then $y\\%$ of $200$ is $1.125 \\times 200 = 225$.\n\n**The Full Solution:**\nStep 1: Compute the known side: $30\\%$ of $45$ is $0.30 \\times 45 = 13.5$.\nStep 2: Solve $0.12y = 13.5$: $y = \\frac{13.5}{0.12} = 112.5$.\nStep 3: The question asks for $y\\%$ of $200$, not $y$: $\\frac{112.5}{100} \\times 200 = 225$. Check: $12\\%$ of $112.5$ is $13.5$, matching Step 1. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($27$): uses $13.5$ as the percent, computing $13.5\\%$ of $200 = 27$ instead of first solving for $y$.\n* Choice B ($36$): swaps the percents, computing $y = \\frac{45 \\times 0.12}{0.30} = 18$ and then $18\\%$ of $200$.\n* Choice C ($112.5$): correctly finds $y$ but stops there; the question asks for $y\\%$ of $200$.\n\n**Test Day Takeaway:** Read the final ask twice. Hard percent items often solve for a variable and then use it as a percent — a value over $100$ percent is fine and simply means more than the whole.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-of-a-whole",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-187",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "hard",
    type: "fill-in",
    question: "A shipment contains $1{,}200$ light bulbs. Of these bulbs, $45\\%$ are LED bulbs, and $20\\%$ of the bulbs that are not LED bulbs are halogen bulbs. How many of the bulbs in the shipment are halogen bulbs?",
    correctAnswer: "132",
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**The correct answer is $132$.**\n\n**The Fast Way (~20s):** Non-LED bulbs are $55\\%$ of $1200$, which is $660$. Halogen bulbs are $20\\%$ of those: $0.20 \\times 660 = 132$.\n\n**The Full Solution:**\nStep 1: LED bulbs: $0.45 \\times 1200 = 540$, so the bulbs that are not LED number $1200 - 540 = 660$.\nStep 2: The $20\\%$ applies to that $660$, not to the full shipment: $0.20 \\times 660 = 132$.\nStep 3: Check with a single factor: $0.55 \\times 0.20 = 0.11$, and $0.11 \\times 1200 = 132$. $\\checkmark$\n\n**Common Mistakes:** Taking $20\\%$ of all $1200$ bulbs, which gives $240$; applying $20\\%$ to the LED group, $0.20 \\times 540 = 108$; or stopping at $660$, the count of non-LED bulbs.\n\n**Test Day Takeaway:** A percent always acts on a stated base. \"Of the bulbs that are not LED\" changes the base to the complement group — find that group first, then take the percent.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-of-a-whole",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 14/2: percent-of-a-number (8 items) =====
  // Duplicate of percent-of-a-whole conceptually; distinct slug.
  {
    id: "bank-ps-188",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A ferry can carry a maximum of $240$ passengers. On a certain crossing, the number of passengers was $65\\%$ of the maximum. How many passengers were on the ferry during that crossing?",
    choices: [
      { id: "A", text: "$156$" },
      // distractor: subtracts 65 from 240
      { id: "B", text: "$175$" },
      // distractor: reports the maximum capacity
      { id: "C", text: "$240$" },
      // distractor: adds 65 to 240
      { id: "D", text: "$305$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $65\\%$ of $240$ is $0.65 \\times 240 = 156$.\n\n**The Full Solution:**\nStep 1: The number of passengers is $65\\%$ of the maximum, $240$.\nStep 2: Convert and multiply: $0.65 \\times 240 = 156$.\nStep 3: Check: $50\\%$ of $240$ is $120$ and $15\\%$ of $240$ is $36$; $120 + 36 = 156$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($175$): subtracts $65$ from $240$, treating the percent as a number of passengers.\n* Choice C ($240$): reports the maximum capacity instead of $65\\%$ of it.\n* Choice D ($305$): adds $65$ to $240$, again treating the percent as a count.\n\n**Test Day Takeaway:** A percent is never added to or subtracted from a quantity directly — convert it to a decimal and multiply by the base.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-of-a-number",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-189",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "easy",
    type: "fill-in",
    question: "Of the $80$ entries submitted to a photography contest, $45\\%$ were black-and-white photographs. How many of the entries were black-and-white photographs?",
    correctAnswer: "36",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**The correct answer is $36$.**\n\n**The Fast Way (~5s):** $0.45 \\times 80 = 36$.\n\n**The Full Solution:**\nStep 1: The base is the total number of entries, $80$, and the percent is $45\\%$.\nStep 2: Multiply: $\\frac{45}{100} \\times 80 = 36$.\nStep 3: Check: $10\\%$ of $80$ is $8$, so $45\\%$ is $4.5 \\times 8 = 36$. $\\checkmark$\n\n**Common Mistakes:** Computing the complement, $0.55 \\times 80 = 44$ (the color entries); dividing $80 \\div 45 \\approx 1.78$; or misplacing the decimal to get $0.045 \\times 80 = 3.6$.\n\n**Test Day Takeaway:** For a percent of a number, the $10\\%$ benchmark ($\\frac{1}{10}$ of the base) is the fastest mental check — scale it up to the percent you need.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-of-a-number",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-190",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The number of volunteers at a food bank this year is $135\\%$ of the number of volunteers last year. If there are $540$ volunteers this year, how many volunteers were there last year?",
    choices: [
      // distractor: multiplies 540 by 0.65 (subtracts 35% of this year's count)
      { id: "A", text: "$351$" },
      { id: "B", text: "$400$" },
      // distractor: subtracts 35 from 540
      { id: "C", text: "$505$" },
      // distractor: multiplies 540 by 1.35 instead of dividing
      { id: "D", text: "$729$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Let $n$ be last year's number. Then $1.35n = 540$, so $n = \\frac{540}{1.35} = 400$.\n\n**The Full Solution:**\nStep 1: \"This year is $135\\%$ of last year\" means $\\text{this year} = 1.35 \\times \\text{last year}$.\nStep 2: Substitute $540$ and solve: $1.35n = 540$, so $n = \\frac{540}{1.35} = 400$.\nStep 3: Check: $135\\%$ of $400$ is $1.35 \\times 400 = 540$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($351$): subtracts $35\\%$ of $540$ from $540$, but the $35\\%$ is measured against last year's number, not this year's.\n* Choice C ($505$): subtracts $35$ from $540$, treating the percent as a count of volunteers.\n* Choice D ($729$): multiplies by $1.35$ instead of dividing, moving forward in time rather than back.\n\n**Test Day Takeaway:** When the known value is the result of a percent, divide by the decimal form to recover the original — never multiply, and never take the percent of the result.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-of-a-number",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-191",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "medium",
    type: "fill-in",
    question: "A chemist determines that $63$ grams of a certain compound is $28\\%$ of the total mass of a mixture. What is the total mass, in grams, of the mixture?",
    correctAnswer: "225",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**The correct answer is $225$.**\n\n**The Fast Way (~10s):** $0.28m = 63$, so $m = \\frac{63}{0.28} = 225$.\n\n**The Full Solution:**\nStep 1: Let $m$ be the total mass. \"$63$ grams is $28\\%$ of $m$\" gives $0.28m = 63$.\nStep 2: Divide: $m = \\frac{63}{0.28} = \\frac{6300}{28} = 225$.\nStep 3: Check: $28\\%$ of $225$ is $0.28 \\times 225 = 63$. $\\checkmark$\n\n**Common Mistakes:** Multiplying instead of dividing, $63 \\times 0.28 = 17.64$; dividing by $28$ rather than $0.28$, which gives $2.25$; or multiplying $63 \\times 28 = 1764$.\n\n**Test Day Takeaway:** \"Part is $p\\%$ of whole\" is one equation: $\\frac{p}{100} \\cdot \\text{whole} = \\text{part}$. Solve for whichever quantity is missing.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-of-a-number",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-192",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The mass of a scaled-up batch of dough is $16\\%$ greater than the mass of the original batch. If the original batch has a mass of $75$ grams, what is the mass, in grams, of the scaled-up batch?",
    choices: [
      // distractor: reports only the 16% increase (0.16 × 75)
      { id: "A", text: "$12$" },
      { id: "B", text: "$87$" },
      // distractor: adds 16 grams instead of 16%
      { id: "C", text: "$91$" },
      // distractor: multiplies by 1.6 instead of 1.16
      { id: "D", text: "$120$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"$16\\%$ greater\" means multiply by $1.16$: $1.16 \\times 75 = 87$.\n\n**The Full Solution:**\nStep 1: The increase is $16\\%$ of $75$: $0.16 \\times 75 = 12$ grams.\nStep 2: Add the increase to the original: $75 + 12 = 87$ grams.\nStep 3: Check with one factor: $75 \\times 1.16 = 87$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): reports only the increase, $0.16 \\times 75$, not the new mass.\n* Choice C ($91$): adds $16$ grams instead of $16\\%$ of $75$ grams.\n* Choice D ($120$): multiplies by $1.6$ instead of $1.16$, a $60\\%$ increase.\n\n**Test Day Takeaway:** \"$p\\%$ greater than\" a value is $\\left(1 + \\frac{p}{100}\\right)$ times that value — one multiplication, with the $1$ carrying the original amount.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-of-a-number",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-193",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "medium",
    type: "fill-in",
    question: "The mass of a dried apricot is $32\\%$ less than the mass of the fresh apricot it was made from. If a fresh apricot has a mass of $45$ grams, what is the mass, in grams, of the dried apricot made from it?",
    correctAnswer: "30.6",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**The correct answer is $30.6$.**\n\n**The Fast Way (~10s):** \"$32\\%$ less\" keeps $68\\%$: $0.68 \\times 45 = 30.6$.\n\n**The Full Solution:**\nStep 1: A $32\\%$ decrease leaves $100\\% - 32\\% = 68\\%$ of the original mass.\nStep 2: Multiply: $0.68 \\times 45 = 30.6$ grams.\nStep 3: Check: the mass lost is $0.32 \\times 45 = 14.4$ grams, and $45 - 14.4 = 30.6$. $\\checkmark$\n\n**Common Mistakes:** Reporting $14.4$, the mass lost, instead of the mass remaining; subtracting $32$ grams to get $13$; or increasing instead of decreasing, $1.32 \\times 45 = 59.4$.\n\n**Test Day Takeaway:** \"$p\\%$ less than\" a value is $\\left(1 - \\frac{p}{100}\\right)$ times that value. Multiply by what remains, not by what was removed.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-of-a-number",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-194",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The number of subscribers to a newsletter in its second year was $20\\%$ greater than the number in its first year, and the number in its third year was $25\\%$ less than the number in its second year. If the newsletter had $270$ subscribers in its third year, how many subscribers did it have in its first year?",
    choices: [
      // distractor: multiplies 270 by the net factor 0.9 instead of dividing
      { id: "A", text: "$243$" },
      // distractor: undoes the 20% increase by multiplying 360 by 0.8
      { id: "B", text: "$288$" },
      { id: "C", text: "$300$" },
      // distractor: stops at the second-year value, 270 ÷ 0.75
      { id: "D", text: "$360$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Year 3 $=$ Year 1 $\\times 1.20 \\times 0.75 = 0.90 \\times$ Year 1. So Year 1 $= \\frac{270}{0.90} = 300$.\n\n**The Full Solution:**\nStep 1: Let $n$ be the first-year number. Second year: $1.20n$. Third year: $0.75(1.20n) = 0.90n$.\nStep 2: Set $0.90n = 270$ and solve: $n = \\frac{270}{0.90} = 300$.\nStep 3: Check forward: $300 \\times 1.20 = 360$, and $360 \\times 0.75 = 270$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($243$): multiplies $270$ by $0.90$ instead of dividing, running the net change forward a second time.\n* Choice B ($288$): finds the second-year value $360$ correctly but then multiplies by $0.80$ to \"undo\" a $20\\%$ increase; undoing requires dividing by $1.20$.\n* Choice D ($360$): stops at the second-year number, $\\frac{270}{0.75}$.\n\n**Test Day Takeaway:** Chain percent changes as multiplied factors, then divide by the product to go backward. Undoing \"$20\\%$ greater\" means dividing by $1.20$, not multiplying by $0.80$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-of-a-number",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-195",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "hard",
    type: "fill-in",
    question: "The area of field B is $60\\%$ greater than the area of field A, and the area of field B is $2{,}400$ square meters greater than the area of field A. What is the area, in square meters, of field B?",
    correctAnswer: "6400",
    explanation: "**SAT Pattern: Percent Relationship + Absolute Difference (System)**\n\n**The correct answer is $6400$.**\n\n**The Fast Way (~15s):** The $60\\%$ excess equals $2400$ square meters, so $0.60A = 2400$ and $A = 4000$. Then $B = 4000 + 2400 = 6400$.\n\n**The Full Solution:**\nStep 1: Let $A$ be the area of field A. \"$60\\%$ greater\" gives $B = 1.60A$, and the difference gives $B - A = 2400$.\nStep 2: Substitute: $1.60A - A = 0.60A = 2400$, so $A = \\frac{2400}{0.60} = 4000$.\nStep 3: Then $B = 1.60 \\times 4000 = 6400$. Check: $6400 - 4000 = 2400$. $\\checkmark$\n\n**Common Mistakes:** Reporting $4000$, the area of field A, when the question asks for field B; dividing the difference by $1.60$ to get $1500$; or multiplying the difference by $1.60$ to get $3840$.\n\n**Test Day Takeaway:** When a percent relationship and an absolute difference are both given, the difference equals the percent excess of the smaller quantity: $p\\% \\times \\text{smaller} = \\text{difference}$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-of-a-number",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-ps-196",
    domain: "problem-solving",
    skills: ["percent-change"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A thermostat setting is lowered from $75$ degrees Fahrenheit to $60$ degrees Fahrenheit. The setting is decreased by $p\\%$. What is the value of $p$?",
    choices: [
      // distractor: reports the difference in degrees
      { id: "A", text: "$15$" },
      { id: "B", text: "$20$" },
      // distractor: divides the decrease by the new value (15/60)
      { id: "C", text: "$25$" },
      // distractor: reports the remaining percent (60/75)
      { id: "D", text: "$80$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The decrease is $75 - 60 = 15$ degrees, out of the original $75$: $\\frac{15}{75} = 0.20$, so $p = 20$.\n\n**The Full Solution:**\nStep 1: Percent decrease $= \\frac{\\text{original} - \\text{new}}{\\text{original}} \\times 100$.\nStep 2: Substitute: $\\frac{75 - 60}{75} \\times 100 = \\frac{15}{75} \\times 100 = 20$.\nStep 3: Check: $20\\%$ of $75$ is $15$, and $75 - 15 = 60$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): reports the drop in degrees, not the percent.\n* Choice C ($25$): divides the decrease by the new value, $\\frac{15}{60}$, instead of by the original.\n* Choice D ($80$): reports $\\frac{60}{75}$, the percent that remains, rather than the percent removed.\n\n**Test Day Takeaway:** Percent decrease is the change divided by the ORIGINAL value. The denominator is always where you started.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-decrease",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-197",
    domain: "problem-solving",
    skills: ["percent-change"],
    difficulty: "easy",
    type: "fill-in",
    question: "The table gives the number of daily flights at a regional airport in two different years. From 2019 to 2023, the number of daily flights decreased by $p\\%$. What is the value of $p$?",
    diagram: { type: "dataTable", params: { headers: ["Year", "Daily flights"], rows: [["2019", "150"], ["2023", "126"]] } },
    correctAnswer: "16",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**The correct answer is $16$.**\n\n**The Fast Way (~10s):** The decrease is $150 - 126 = 24$ flights, out of $150$: $\\frac{24}{150} = 0.16$, so $p = 16$.\n\n**The Full Solution:**\nStep 1: The original value is the earlier year, $150$; the new value is $126$.\nStep 2: Percent decrease $= \\frac{150 - 126}{150} \\times 100 = \\frac{24}{150} \\times 100 = 16$.\nStep 3: Check: $16\\%$ of $150$ is $24$, and $150 - 24 = 126$. $\\checkmark$\n\n**Common Mistakes:** Reporting $24$, the drop in flights, instead of the percent; dividing by the new value, $\\frac{24}{126} \\approx 19.05$; or reporting $\\frac{126}{150} = 84$, the percent remaining.\n\n**Test Day Takeaway:** In a two-row table, the earlier row is the original. Percent change always divides by that original value.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-decrease",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-198",
    domain: "problem-solving",
    skills: ["percent-change"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The price of a monthly transit pass was reduced by $15\\%$. After the reduction, the price of the pass was $\\$51$. What was the price of the pass, in dollars, before the reduction?",
    choices: [
      // distractor: multiplies 51 by 0.85 (applies the decrease again)
      { id: "A", text: "$43.35$" },
      // distractor: multiplies 51 by 1.15 to undo a decrease
      { id: "B", text: "$58.65$" },
      { id: "C", text: "$60$" },
      // distractor: adds 15 dollars instead of undoing 15%
      { id: "D", text: "$66$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** A $15\\%$ decrease leaves $85\\%$: $0.85x = 51$, so $x = \\frac{51}{0.85} = 60$.\n\n**The Full Solution:**\nStep 1: Let $x$ be the original price. After a $15\\%$ reduction, the price is $(1 - 0.15)x = 0.85x$.\nStep 2: Set $0.85x = 51$ and divide: $x = \\frac{51}{0.85} = 60$.\nStep 3: Check: $15\\%$ of $\\$60$ is $\\$9$, and $60 - 9 = 51$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($43.35$): multiplies $51$ by $0.85$, applying the reduction a second time instead of undoing it.\n* Choice B ($58.65$): multiplies $51$ by $1.15$, but $15\\%$ of the original is not $15\\%$ of the reduced price.\n* Choice D ($66$): adds $\\$15$ rather than undoing a $15\\%$ decrease.\n\n**Test Day Takeaway:** To recover an original price from a discounted price, divide by $\\left(1 - \\frac{p}{100}\\right)$. Multiplying by $\\left(1 + \\frac{p}{100}\\right)$ does not reverse a decrease.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-decrease",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-199",
    domain: "problem-solving",
    skills: ["percent-change"],
    difficulty: "medium",
    type: "fill-in",
    question: "The table gives the capacity, in milliampere-hours, of a laptop battery when it was new and after one year of use. Over that year, the capacity of the battery decreased by $p\\%$. What is the value of $p$?",
    diagram: { type: "dataTable", params: { headers: ["Time", "Capacity (mAh)"], rows: [["New", "4,800"], ["After 1 year", "4,080"]] } },
    correctAnswer: "15",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~10s):** The loss is $4800 - 4080 = 720$ mAh, out of $4800$: $\\frac{720}{4800} = 0.15$, so $p = 15$.\n\n**The Full Solution:**\nStep 1: Original capacity $4800$ mAh; new capacity $4080$ mAh; decrease $= 4800 - 4080 = 720$ mAh.\nStep 2: Percent decrease $= \\frac{720}{4800} \\times 100 = 15$.\nStep 3: Check: $15\\%$ of $4800$ is $720$, and $4800 - 720 = 4080$. $\\checkmark$\n\n**Common Mistakes:** Reporting $720$, the raw loss, instead of the percent; dividing by the new capacity, $\\frac{720}{4080} \\approx 17.65$; or reporting $\\frac{4080}{4800} = 85$, the percent of capacity that remains.\n\n**Test Day Takeaway:** Simplify the ratio before converting: $\\frac{720}{4800} = \\frac{72}{480} = \\frac{3}{20} = 15\\%$. Reducing first avoids decimal slips.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-decrease",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-200",
    domain: "problem-solving",
    skills: ["percent-change"],
    difficulty: "hard",
    type: "fill-in",
    question: "The value of an investment increased by $60\\%$ during its first year. During its second year, the value decreased by $r\\%$. At the end of the second year, the value of the investment was $20\\%$ greater than its value at the start of the first year. What is the value of $r$?",
    correctAnswer: "25",
    explanation: "**SAT Pattern: Compound Percent Change — Solve for the Unknown Rate**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~20s):** $1.60 \\times \\left(1 - \\frac{r}{100}\\right) = 1.20$, so $1 - \\frac{r}{100} = \\frac{1.20}{1.60} = 0.75$ and $r = 25$.\n\n**The Full Solution:**\nStep 1: Let the starting value be $V$. After year one: $1.60V$. After year two: $1.60V\\left(1 - \\frac{r}{100}\\right)$.\nStep 2: The ending value is $20\\%$ greater than $V$, so $1.60\\left(1 - \\frac{r}{100}\\right) = 1.20$. Divide by $1.60$: $1 - \\frac{r}{100} = 0.75$.\nStep 3: So $\\frac{r}{100} = 0.25$ and $r = 25$. Check: $1.60 \\times 0.75 = 1.20$. $\\checkmark$\n\n**Common Mistakes:** Subtracting the percents, $60 - 20 = 40$, as though percent changes add; reporting $75$, the fraction of value retained, instead of the percent removed; or entering $0.25$, the decimal form of the rate, when the question asks for $r$ in percent.\n\n**Test Day Takeaway:** Successive percent changes multiply their factors. Set the product of the factors equal to the net factor and solve — percents never simply add or subtract.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-decrease",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-ps-201",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A garden center has $50$ seed packets on display, and $18$ of these packets are labeled basil. One of the packets will be selected at random. What is the probability of selecting a packet labeled basil?",
    choices: [
      // distractor: divides 18 by 100 instead of by the 50 packets on display
      { id: "A", text: "$\\frac{9}{50}$" },
      { id: "B", text: "$\\frac{9}{25}$" },
      // distractor: forms the odds 18 basil to 32 non-basil instead of a probability
      { id: "C", text: "$\\frac{9}{16}$" },
      // distractor: gives the probability of selecting a packet that is NOT labeled basil
      { id: "D", text: "$\\frac{16}{25}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The probability is the number of basil packets over the total number of packets: $\\frac{18}{50} = \\frac{9}{25}$.\n\n**The Full Solution:**\nStep 1: A probability is $\\frac{\\text{number of favorable outcomes}}{\\text{total number of outcomes}}$. Here $18$ packets are labeled basil and $50$ packets are on display.\nStep 2: Write the ratio: $\\frac{18}{50}$.\nStep 3: Divide the numerator and denominator by $2$: $\\frac{9}{25}$. Check: $\\frac{9}{25} = 0.36$, and $0.36 \\times 50 = 18$ packets. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{9}{50}$): divides $18$ by $100$ rather than by the $50$ packets actually on display.\n* Choice C ($\\frac{9}{16}$): this is $\\frac{18}{32}$, the ratio of basil packets to non-basil packets — odds, not a probability.\n* Choice D ($\\frac{16}{25}$): this is $\\frac{32}{50}$, the probability of selecting a packet that is not labeled basil.\n\n**Test Day Takeaway:** The denominator of a marginal probability is always the whole group, never the leftover part of it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "marginal-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-202",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "easy",
    type: "fill-in",
    question: "Of the $250$ vehicles parked in a downtown garage one morning, $95$ were electric. If one of these vehicles is selected at random, what is the probability of selecting an electric vehicle? Express your answer as a decimal.",
    correctAnswer: "0.38",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**The correct answer is $0.38$.**\n\n**The Fast Way (~15s):** $\\frac{95}{250} = 0.38$.\n\n**The Full Solution:**\nStep 1: The probability of selecting an electric vehicle is the number of electric vehicles divided by the total number of vehicles in the garage.\nStep 2: Substitute the given counts: $\\frac{95}{250}$.\nStep 3: Divide: $95 \\div 250 = 0.38$. Check: $0.38 \\times 250 = 95$. $\\checkmark$\n\n**Common Mistakes:** Dividing the total by the part, $250 \\div 95 \\approx 2.63$, which is greater than $1$ and so cannot be a probability; using the $155$ non-electric vehicles as the denominator, $95 \\div 155 \\approx 0.61$; or reporting the complement, $155 \\div 250 = 0.62$.\n\n**Test Day Takeaway:** A probability is always at most $1$ — a value above $1$ means the part and the whole were divided in the wrong order.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "marginal-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-203",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The two-way table gives the number of visitors to a museum over one weekend, classified by ticket type and day. If one of these visitors is selected at random, what is the probability of selecting a visitor who purchased a student ticket?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Saturday", "Sunday", "Total"], rows: [["Adult", "84", "66", "150"], ["Student", "46", "44", "90"], ["Senior", "30", "30", "60"], ["Total", "160", "140", "300"]] } },
    choices: [
      { id: "A", text: "$\\frac{3}{10}$" },
      // distractor: uses 90 student visitors over the 210 non-student visitors
      { id: "B", text: "$\\frac{3}{7}$" },
      // distractor: reads the adult row instead of the student row
      { id: "C", text: "$\\frac{1}{2}$" },
      // distractor: computes 46/90, the probability of Saturday given a student ticket
      { id: "D", text: "$\\frac{23}{45}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The student row total is $90$ and the grand total is $300$, so the probability is $\\frac{90}{300} = \\frac{3}{10}$.\n\n**The Full Solution:**\nStep 1: A marginal probability uses a row total (or column total) over the grand total, so read the Total column in the Student row: $46 + 44 = 90$.\nStep 2: The grand total is $300$ visitors.\nStep 3: Divide: $\\frac{90}{300} = \\frac{3}{10}$. Check: $\\frac{3}{10}$ of $300$ is $90$ student visitors. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{3}{7}$): this is $\\frac{90}{210}$, student visitors compared with non-student visitors rather than with all visitors.\n* Choice C ($\\frac{1}{2}$): this is $\\frac{150}{300}$, the probability of selecting an adult ticket — the wrong row.\n* Choice D ($\\frac{23}{45}$): this is $\\frac{46}{90}$, the conditional probability of Saturday given that the ticket is a student ticket.\n\n**Test Day Takeaway:** Marginal means \"read the margin\": one total over the grand total. If your denominator is a row total, you have computed a conditional probability instead.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "marginal-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-204",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "medium",
    type: "fill-in",
    question: "The table gives the number of musicians in each section of a community orchestra. If one of these musicians is selected at random, what is the probability of selecting a musician who is not in the strings section? Express your answer as a decimal.",
    diagram: { type: "dataTable", params: { headers: ["Section", "Musicians"], rows: [["Strings", "33"], ["Woodwinds", "15"], ["Brass", "9"], ["Percussion", "3"]] } },
    correctAnswer: "0.45",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**The correct answer is $0.45$.**\n\n**The Fast Way (~25s):** The orchestra has $60$ musicians and $33$ are in strings, so $\\frac{60 - 33}{60} = \\frac{27}{60} = 0.45$.\n\n**The Full Solution:**\nStep 1: Add the sections to get the total: $33 + 15 + 9 + 3 = 60$ musicians.\nStep 2: Count the musicians who are not in strings: $15 + 9 + 3 = 27$.\nStep 3: Divide: $\\frac{27}{60} = 0.45$. Check: $0.45 + \\frac{33}{60} = 0.45 + 0.55 = 1$. $\\checkmark$\n\n**Common Mistakes:** Reporting $\\frac{33}{60} = 0.55$, the probability of selecting a strings musician; dividing the non-strings count by the strings count, $\\frac{27}{33} \\approx 0.82$; or leaving percussion out of the total, giving $\\frac{24}{57} \\approx 0.42$.\n\n**Test Day Takeaway:** For a \"not\" question, either count the remaining categories or subtract from $1$ — the two routes must agree, which is a free check.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "marginal-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-205",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A bicycle shop logged the $200$ repairs it completed last month by frame material and type of service, as summarized in the two-way table. If one of these repairs is selected at random, what is the probability that it was performed on a steel-frame bicycle?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Tune-up", "Wheel repair", "Total"], rows: [["Aluminum", "50", "40", "90"], ["Steel", "40", "30", "70"], ["Carbon", "25", "15", "40"], ["Total", "115", "85", "200"]] } },
    choices: [
      // distractor: reads the carbon row instead of the steel row
      { id: "A", text: "$\\frac{1}{5}$" },
      { id: "B", text: "$\\frac{7}{20}$" },
      // distractor: reads the aluminum row instead of the steel row
      { id: "C", text: "$\\frac{9}{20}$" },
      // distractor: computes 40/70, the probability of a tune-up given a steel frame
      { id: "D", text: "$\\frac{4}{7}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The steel row totals $70$ out of $200$ repairs, so the probability is $\\frac{70}{200} = \\frac{7}{20}$.\n\n**The Full Solution:**\nStep 1: Read the Steel row: $40$ tune-ups and $30$ wheel repairs, for a row total of $70$.\nStep 2: The grand total is $200$ repairs.\nStep 3: Divide and simplify: $\\frac{70}{200} = \\frac{7}{20}$. Check: $\\frac{7}{20} = 0.35$, and $0.35 \\times 200 = 70$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{5}$): this is $\\frac{40}{200}$, the probability of a carbon-frame repair — the wrong row.\n* Choice C ($\\frac{9}{20}$): this is $\\frac{90}{200}$, the probability of an aluminum-frame repair.\n* Choice D ($\\frac{4}{7}$): this is $\\frac{40}{70}$, the probability of a tune-up given a steel frame, which conditions on steel instead of asking for it.\n\n**Test Day Takeaway:** Identify the denominator before the numerator: \"selected at random\" from all repairs means the grand total goes on the bottom.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "marginal-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-206",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "medium",
    type: "fill-in",
    question: "The dot plot summarizes the number of service calls a technician received on each of $20$ days. If one of these days is selected at random, what is the probability that the technician received more than $3$ service calls on that day? Express your answer as a decimal.",
    diagram: { type: "dotPlot", params: { data: [{ value: 1, count: 3 }, { value: 2, count: 5 }, { value: 3, count: 7 }, { value: 4, count: 3 }, { value: 5, count: 2 }], xMin: 0, xMax: 6, xLabel: "Service calls" } },
    correctAnswer: "0.25",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**The correct answer is $0.25$.**\n\n**The Fast Way (~20s):** Days with more than $3$ calls are the $4$s and the $5$s: $3 + 2 = 5$ days, so $\\frac{5}{20} = 0.25$.\n\n**The Full Solution:**\nStep 1: \"More than $3$\" means $4$ or $5$ service calls, so count only the dots above $4$ and above $5$.\nStep 2: There are $3$ dots at $4$ and $2$ dots at $5$, for $5$ favorable days.\nStep 3: Divide by the $20$ days: $\\frac{5}{20} = 0.25$. Check: the five columns hold $3 + 5 + 7 + 3 + 2 = 20$ dots. $\\checkmark$\n\n**Common Mistakes:** Including the $7$ days with exactly $3$ calls, which gives $\\frac{12}{20} = 0.6$ and answers \"$3$ or more\"; counting the two dot columns above $3$ instead of the days they represent, giving $\\frac{2}{5} = 0.4$; or dividing by the number of columns rather than by the $20$ days.\n\n**Test Day Takeaway:** On a dot plot, each dot is one observation — the denominator is the number of dots, not the number of columns.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "marginal-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-207",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The table gives the number of birds observed at a monitoring station for three species. Observations of a fourth species, thrush, are not shown. If one observation from the station is selected at random, the probability of selecting a thrush observation is $0.32$. How many observations were recorded at the station in all?",
    diagram: { type: "dataTable", params: { headers: ["Species", "Observations"], rows: [["Warbler", "186"], ["Sparrow", "142"], ["Finch", "97"]] } },
    choices: [
      // distractor: computes 0.32 x 425, applying the probability to the listed species
      { id: "A", text: "$136$" },
      // distractor: reports the thrush count and stops before finding the total
      { id: "B", text: "$200$" },
      // distractor: reports the observations of the three listed species only
      { id: "C", text: "$425$" },
      { id: "D", text: "$625$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** The three listed species account for $425$ observations, which must be $68\\%$ of the total, so the total is $\\frac{425}{0.68} = 625$.\n\n**The Full Solution:**\nStep 1: Add the listed species: $186 + 142 + 97 = 425$ observations.\nStep 2: Thrush observations are $32\\%$ of the total, so the three listed species make up $100\\% - 32\\% = 68\\%$ of it. Let $n$ be the total: $0.68n = 425$.\nStep 3: Solve: $n = \\frac{425}{0.68} = 625$. Check: the thrush count is $625 - 425 = 200$, and $\\frac{200}{625} = 0.32$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($136$): computes $0.32 \\times 425$, applying the probability to the three listed species instead of to the whole set of observations.\n* Choice B ($200$): this is the number of thrush observations, one step short of the total the question asks for.\n* Choice C ($425$): counts only the three species shown in the table.\n\n**Test Day Takeaway:** When one category is missing, work with its complement: the listed part is $1$ minus the missing probability, and dividing the part by that fraction returns the whole.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "marginal-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-208",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "hard",
    type: "fill-in",
    question: "Each tile in a shipment has exactly one of three finishes: matte, satin, or gloss. The probability that a tile selected at random from the shipment is matte is $0.28$, and the probability that it is satin is $0.37$. If $210$ of the tiles are gloss, how many tiles are in the shipment?",
    correctAnswer: "600",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**The correct answer is $600$.**\n\n**The Fast Way (~35s):** Gloss accounts for $1 - 0.28 - 0.37 = 0.35$ of the shipment, so the shipment holds $\\frac{210}{0.35} = 600$ tiles.\n\n**The Full Solution:**\nStep 1: The three finishes are the only possibilities, so their probabilities sum to $1$: $P(\\text{gloss}) = 1 - 0.28 - 0.37 = 0.35$.\nStep 2: Let $n$ be the number of tiles in the shipment. Then $0.35n = 210$.\nStep 3: Solve: $n = \\frac{210}{0.35} = 600$. Check: $0.28(600) = 168$ matte and $0.37(600) = 222$ satin, and $168 + 222 + 210 = 600$. $\\checkmark$\n\n**Common Mistakes:** Multiplying instead of dividing, $0.35 \\times 210 = 73.5$, which is smaller than the gloss count itself; dividing by the matte probability, $\\frac{210}{0.28} = 750$; or dividing by the combined matte-and-satin probability, $\\frac{210}{0.65} \\approx 323.1$.\n\n**Test Day Takeaway:** When categories are exhaustive, the missing probability is $1$ minus the others — and a count divided by its probability gives the whole.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "marginal-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 14/5: conditional-probability-with-percent (8 items) =====
  {
    id: "bank-ps-209",
    domain: "problem-solving",
    skills: ["conditional-probability"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "At a conference, $60\\%$ of the attendees are attending for the first time. Of those first-time attendees, $25\\%$ registered on site. What percent of all attendees are first-time attendees who registered on site?",
    choices: [
      { id: "A", text: "$15\\%$" },
      // distractor: reports the conditional percent 25% without scaling it to all attendees
      { id: "B", text: "$25\\%$" },
      // distractor: subtracts, 60 - 25
      { id: "C", text: "$35\\%$" },
      // distractor: adds the two percents, 60 + 25
      { id: "D", text: "$85\\%$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $25\\%$ of $60\\%$ is $0.25 \\times 0.60 = 0.15$, or $15\\%$.\n\n**The Full Solution:**\nStep 1: The $25\\%$ is measured within the first-time attendees, not within all attendees, so it must be applied to the $60\\%$.\nStep 2: Multiply the two rates: $0.60 \\times 0.25 = 0.15$.\nStep 3: Convert to a percent: $15\\%$. Check with $100$ attendees: $60$ are first-time, and $25\\%$ of $60$ is $15$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($25\\%$): reports the rate within the first-time group as though it applied to everyone.\n* Choice C ($35\\%$): subtracts the percents, $60 - 25$, but \"of\" signals multiplication.\n* Choice D ($85\\%$): adds the percents, which would exceed the size of the first-time group itself.\n\n**Test Day Takeaway:** A percent of a percent multiplies. Test it on $100$ people — the joint group can never be larger than either group alone.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "conditional-probability-with-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-210",
    domain: "problem-solving",
    skills: ["conditional-probability"],
    difficulty: "easy",
    type: "fill-in",
    question: "At a hospital, $45\\%$ of the nurses work the night shift, and $60\\%$ of the nurses who work the night shift are certified in critical care. What percent of all nurses at the hospital work the night shift and are certified in critical care?",
    correctAnswer: "27",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**The correct answer is $27$.**\n\n**The Fast Way (~15s):** $0.45 \\times 0.60 = 0.27$, or $27\\%$.\n\n**The Full Solution:**\nStep 1: The $60\\%$ describes only the night-shift nurses, so it is applied to the $45\\%$ rather than to all nurses.\nStep 2: Multiply: $0.45 \\times 0.60 = 0.27$.\nStep 3: Write as a percent: $27\\%$. Check with $200$ nurses: $90$ work nights, and $60\\%$ of $90$ is $54$, which is $\\frac{54}{200} = 27\\%$. $\\checkmark$\n\n**Common Mistakes:** Adding the rates for $105$, which is impossible for a percent of a group; subtracting for $15$; or reporting $60$, the rate inside the night-shift group rather than the share of all nurses.\n\n**Test Day Takeaway:** \"Of those\" resets the whole. Multiply the two rates to get back to the original population.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "conditional-probability-with-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-211",
    domain: "problem-solving",
    skills: ["conditional-probability"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In a distribution center, $75\\%$ of the packages are shipped by ground, and $16\\%$ of the packages shipped by ground are marked fragile. If one package is selected at random, what is the probability that it is shipped by ground and marked fragile?",
    choices: [
      // distractor: converts 16% to 0.016 and multiplies
      { id: "A", text: "$0.012$" },
      { id: "B", text: "$0.12$" },
      // distractor: reports the conditional rate within the ground packages
      { id: "C", text: "$0.16$" },
      // distractor: adds 0.75 and 0.16
      { id: "D", text: "$0.91$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $0.75 \\times 0.16 = 0.12$.\n\n**The Full Solution:**\nStep 1: The $16\\%$ is a rate within the ground shipments, so the joint probability is the product of the two rates.\nStep 2: Convert and multiply: $0.75 \\times 0.16 = 0.12$.\nStep 3: Check with $400$ packages: $300$ ship by ground, and $16\\%$ of $300$ is $48$, so $\\frac{48}{400} = 0.12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.012$): writes $16\\%$ as $0.016$; a percent is divided by $100$, so $16\\% = 0.16$.\n* Choice C ($0.16$): reports the rate among ground packages as though it applied to every package.\n* Choice D ($0.91$): adds the two rates, which double counts and produces a probability larger than the ground share itself.\n\n**Test Day Takeaway:** A joint probability is never larger than either of the probabilities that produced it — a quick sanity filter on the choices.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "conditional-probability-with-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-212",
    domain: "problem-solving",
    skills: ["conditional-probability"],
    difficulty: "medium",
    type: "fill-in",
    question: "In a conservatory's orchid collection, $35\\%$ of the orchids are hybrids, and $40\\%$ of the hybrid orchids are in bloom. If one orchid is selected at random from the collection, what is the probability that it is a hybrid orchid that is in bloom? Express your answer as a decimal.",
    correctAnswer: "0.14",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**The correct answer is $0.14$.**\n\n**The Fast Way (~20s):** $0.35 \\times 0.40 = 0.14$.\n\n**The Full Solution:**\nStep 1: The $40\\%$ in-bloom rate is measured only among hybrids, so multiply it by the hybrid share.\nStep 2: Convert both percents to decimals and multiply: $0.35 \\times 0.40 = 0.14$.\nStep 3: Check with $500$ orchids: $175$ are hybrids, $40\\%$ of $175$ is $70$, and $\\frac{70}{500} = 0.14$. $\\checkmark$\n\n**Common Mistakes:** Adding the rates for $0.75$; reporting $0.40$, the rate inside the hybrid group; or dividing, $\\frac{0.40}{0.35} \\approx 1.14$, which is not a possible probability.\n\n**Test Day Takeaway:** Chain the two rates with multiplication, then confirm the result is smaller than both.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "conditional-probability-with-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-213",
    domain: "problem-solving",
    skills: ["conditional-probability"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In a city bike-share program, $30\\%$ of the trips begin downtown. Of the trips that begin downtown, $65\\%$ also end downtown. What percent of all trips both begin and end downtown?",
    choices: [
      // distractor: converts 65% to 0.065 and multiplies
      { id: "A", text: "$1.95\\%$" },
      { id: "B", text: "$19.5\\%$" },
      // distractor: subtracts, 65 - 30
      { id: "C", text: "$35\\%$" },
      // distractor: reports the conditional percent within the downtown starts
      { id: "D", text: "$65\\%$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $0.30 \\times 0.65 = 0.195$, or $19.5\\%$.\n\n**The Full Solution:**\nStep 1: The $65\\%$ applies only to the trips that begin downtown, which are $30\\%$ of all trips.\nStep 2: Multiply the rates: $0.30 \\times 0.65 = 0.195$.\nStep 3: Convert to a percent: $19.5\\%$. Check with $1{,}000$ trips: $300$ begin downtown and $65\\%$ of $300$ is $195$, which is $19.5\\%$ of $1{,}000$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.95\\%$): uses $0.065$ for $65\\%$, shifting the decimal one place too far.\n* Choice C ($35\\%$): subtracts the two percents instead of multiplying them.\n* Choice D ($65\\%$): reports the rate among downtown starts as though it described all trips.\n\n**Test Day Takeaway:** Percent answers that are not whole numbers are normal — do not round a product like $0.195$ to a friendlier value.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "conditional-probability-with-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-214",
    domain: "problem-solving",
    skills: ["conditional-probability"],
    difficulty: "medium",
    type: "fill-in",
    question: "In a regional survey, $62\\%$ of the households have broadband service. Among the households with broadband service, $55\\%$ also subscribe to a streaming service. What percent of all households surveyed have broadband service and subscribe to a streaming service?",
    correctAnswer: "34.1",
    explanation: "**SAT Pattern: Joint Probability via Multiplication**\n\n**The correct answer is $34.1$.**\n\n**The Fast Way (~25s):** $0.62 \\times 0.55 = 0.341$, or $34.1\\%$.\n\n**The Full Solution:**\nStep 1: The $55\\%$ is measured among broadband households, so the joint share is the product of the two rates.\nStep 2: Multiply: $0.62 \\times 0.55 = 0.341$.\nStep 3: Convert to a percent: $34.1\\%$. Check with $1{,}000$ households: $620$ have broadband and $55\\%$ of $620$ is $341$, which is $34.1\\%$ of $1{,}000$. $\\checkmark$\n\n**Common Mistakes:** Adding for $117$, which exceeds $100\\%$; subtracting for $7$; or dividing, $\\frac{55}{62} \\approx 88.7$, which answers a question no one asked.\n\n**Test Day Takeaway:** Joint percent equals the overall rate times the rate measured inside that group — multiply, then sanity-check against the smaller of the two.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "conditional-probability-with-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-ps-215",
    domain: "problem-solving",
    skills: ["conditional-probability"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "At a testing center, $40\\%$ of the applicants take the exam in the morning and the rest take it in the afternoon. Of the morning applicants, $85\\%$ pass, and of the afternoon applicants, $70\\%$ pass. If one applicant is selected at random, what is the probability that the applicant passes the exam?",
    choices: [
      // distractor: keeps only the morning branch, 0.40 x 0.85
      { id: "A", text: "$0.34$" },
      // distractor: keeps only the afternoon branch, 0.60 x 0.70
      { id: "B", text: "$0.42$" },
      { id: "C", text: "$0.76$" },
      // distractor: averages the two pass rates, ignoring the unequal group sizes
      { id: "D", text: "$0.775$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** $0.40(0.85) + 0.60(0.70) = 0.34 + 0.42 = 0.76$.\n\n**The Full Solution:**\nStep 1: An applicant can pass in two disjoint ways: morning and passing, or afternoon and passing. The afternoon share is $1 - 0.40 = 0.60$.\nStep 2: Compute each branch: $0.40 \\times 0.85 = 0.34$ and $0.60 \\times 0.70 = 0.42$.\nStep 3: Add the branches: $0.34 + 0.42 = 0.76$. Check with $100$ applicants: $34$ of the $40$ morning applicants pass and $42$ of the $60$ afternoon applicants pass, for $76$ of $100$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.34$): stops after the morning branch and never adds the afternoon passers.\n* Choice B ($0.42$): stops after the afternoon branch.\n* Choice D ($0.775$): averages $85\\%$ and $70\\%$, which would only be correct if the two groups were the same size; the larger afternoon group pulls the true value below the average.\n\n**Test Day Takeaway:** When a population splits into groups with different rates, weight each rate by its group's share and add — never average the rates.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "conditional-probability-with-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-ps-216",
    domain: "problem-solving",
    skills: ["conditional-probability"],
    difficulty: "hard",
    type: "fill-in",
    question: "A caterer prepared $600$ pastries for an event. Of these pastries, $24\\%$ are filled, and $9\\%$ of all the pastries prepared are both filled and dusted with sugar. How many of the filled pastries are not dusted with sugar?",
    correctAnswer: "90",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**The correct answer is $90$.**\n\n**The Fast Way (~30s):** Both percents are shares of the same $600$ pastries, so the filled-but-not-dusted share is $24\\% - 9\\% = 15\\%$, and $0.15 \\times 600 = 90$.\n\n**The Full Solution:**\nStep 1: Both percents are measured against the whole order, so the filled pastries number $0.24 \\times 600 = 144$ and the pastries that are both filled and dusted number $0.09 \\times 600 = 54$.\nStep 2: Every pastry counted in that $54$ is also filled, so subtract inside the filled group: $144 - 54 = 90$ filled pastries are not dusted.\nStep 3: Check within the filled group: $\\frac{54}{144} = 0.375$, so $62.5\\%$ of the filled pastries are not dusted, and $0.625 \\times 144 = 90$. $\\checkmark$\n\n**Common Mistakes:** Reading the $9\\%$ as a rate among the filled pastries and computing $0.09 \\times 144 = 12.96$, which is not a whole number of pastries; reporting $54$, the filled pastries that are dusted; or reporting $144$, every filled pastry, without removing the dusted ones.\n\n**Test Day Takeaway:** Check which whole each percent is measured against before you combine them. Two percents of the same whole can be subtracted; a percent of a subgroup cannot.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "conditional-probability-with-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },

  // ─── PERCENT COMPLEMENT (bank-ps-217..224) ────────────────────────────────
  // Granularity principle: 100% − x% is a percent operation, NOT probability.
  // Was previously mis-aliased to basic-probability. Now its own pattern.
  {
    id: "bank-ps-217",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "At a research station, $28\\%$ of the rock samples collected are classified as sedimentary. What percent of the rock samples collected are not classified as sedimentary?",
    choices: [
      // distractor: subtracts from 1 instead of 100 and reports the decimal as a percent
      { id: "A", text: "$0.72\\%$" },
      // distractor: repeats the given percent instead of taking its complement
      { id: "B", text: "$28\\%$" },
      // distractor: subtracts from 90 instead of from 100
      { id: "C", text: "$62\\%$" },
      { id: "D", text: "$72\\%$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Percent Complement**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $100\\% - 28\\% = 72\\%$.\n\n**The Full Solution:**\nStep 1: Every sample is either sedimentary or not, so the two percents must add to $100\\%$.\nStep 2: Subtract the given percent from the whole: $100 - 28 = 72$.\nStep 3: Check: $28\\% + 72\\% = 100\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.72\\%$): computes $1 - 0.28 = 0.72$ and labels the decimal as a percent; $0.72$ as a share is $72\\%$.\n* Choice B ($28\\%$): reports the sedimentary share rather than the share that is not sedimentary.\n* Choice C ($62\\%$): subtracts from $90$; the whole group is $100\\%$, not $90\\%$.\n\n**Test Day Takeaway:** Two complementary categories always sum to $100\\%$ — subtract, then add the pair back to confirm.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-complement",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-ps-218",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "easy",
    type: "fill-in",
    question: "At a public library, $64\\%$ of the items checked out during one month were books. What percent of the items checked out that month were not books?",
    correctAnswer: "36",
    explanation: "**SAT Pattern: Percent Complement**\n\n**The correct answer is $36$.**\n\n**The Fast Way (~10s):** $100 - 64 = 36$.\n\n**The Full Solution:**\nStep 1: Each item checked out is either a book or not a book, so the two shares account for all $100\\%$.\nStep 2: Subtract: $100 - 64 = 36$.\nStep 3: Check: $64\\% + 36\\% = 100\\%$. $\\checkmark$\n\n**Common Mistakes:** Reporting $64$, the share that were books; subtracting from $90$ for $26$; or adding to get $164$, which is more than the whole collection of items checked out.\n\n**Test Day Takeaway:** \"Not\" questions are one subtraction from $100\\%$ — the fastest points on the section, so read the category carefully and move on.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-complement",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-ps-219",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A rowing machine is on sale for $\\$276$, which is $20\\%$ off its original price. What was the original price of the rowing machine, in dollars?",
    choices: [
      // distractor: takes another 20% off the sale price
      { id: "A", text: "$220.80$" },
      // distractor: adds 20% of the sale price instead of dividing by 0.80
      { id: "B", text: "$331.20$" },
      { id: "C", text: "$345$" },
      // distractor: divides by 0.20, the discount rate, instead of by 0.80
      { id: "D", text: "$1{,}380$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Reverse Percent (Find Original from Sale)**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The sale price is $80\\%$ of the original, so the original is $\\frac{276}{0.80} = 345$.\n\n**The Full Solution:**\nStep 1: Let $p$ be the original price. A $20\\%$ discount leaves $100\\% - 20\\% = 80\\%$ of $p$, so $0.80p = 276$.\nStep 2: Divide both sides by $0.80$: $p = \\frac{276}{0.80} = 345$.\nStep 3: Check: $20\\%$ of $345$ is $69$, and $345 - 69 = 276$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($220.80$): computes $0.80 \\times 276$, discounting the already-discounted price.\n* Choice B ($331.20$): computes $1.20 \\times 276$; adding $20\\%$ of the smaller sale price does not undo taking $20\\%$ of the larger original price.\n* Choice D ($1{,}380$): divides by $0.20$, the part removed, instead of by $0.80$, the part paid.\n\n**Test Day Takeaway:** Reverse percent divides by the fraction that remains. Always verify by running the discount forward on your answer.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-complement",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-ps-220",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "medium",
    type: "fill-in",
    question: "The table gives the number of trees of each species in a nursery. Of all the trees in the nursery, $56\\%$ are sold before the end of the season. How many of the trees are not sold before the end of the season?",
    diagram: { type: "dataTable", params: { headers: ["Species", "Trees"], rows: [["Maple", "480"], ["Birch", "350"], ["Spruce", "370"], ["Dogwood", "250"]] } },
    correctAnswer: "638",
    explanation: "**SAT Pattern: Percent Complement**\n\n**The correct answer is $638$.**\n\n**The Fast Way (~35s):** The nursery holds $1{,}450$ trees, and $100\\% - 56\\% = 44\\%$ go unsold: $0.44 \\times 1{,}450 = 638$.\n\n**The Full Solution:**\nStep 1: Add the species counts: $480 + 350 + 370 + 250 = 1{,}450$ trees.\nStep 2: The unsold trees are the complement of the $56\\%$ sold: $100 - 56 = 44$, so $44\\%$ are unsold.\nStep 3: Take $44\\%$ of the total: $0.44 \\times 1{,}450 = 638$. Check: $0.56 \\times 1{,}450 = 812$, and $812 + 638 = 1{,}450$. $\\checkmark$\n\n**Common Mistakes:** Reporting $812$, the trees that were sold; subtracting $56$ trees instead of $56\\%$, which gives $1{,}394$; or taking $44\\%$ of a total that omits one species.\n\n**Test Day Takeaway:** Complement first, then multiply once. Computing the sold trees and subtracting works too, but it is an extra step and an extra chance to slip.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-complement",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-ps-221",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table gives the number of passengers who boarded a commuter train at each of four stations one morning. Of all the passengers who boarded, $18\\%$ purchased a ticket on board. How many of these passengers did not purchase a ticket on board?",
    diagram: { type: "dataTable", params: { headers: ["Station", "Passengers"], rows: [["Ashfield", "210"], ["Brookline", "190"], ["Cranmore", "240"], ["Deerpath", "160"]] } },
    choices: [
      // distractor: reports the passengers who did purchase on board
      { id: "A", text: "$144$" },
      { id: "B", text: "$656$" },
      // distractor: subtracts 18 passengers instead of 18% of 800
      { id: "C", text: "$782$" },
      // distractor: reports the total number of passengers who boarded
      { id: "D", text: "$800$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent Complement**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** $800$ passengers boarded, and $100\\% - 18\\% = 82\\%$ did not buy on board: $0.82 \\times 800 = 656$.\n\n**The Full Solution:**\nStep 1: Total the four stations: $210 + 190 + 240 + 160 = 800$ passengers.\nStep 2: Take the complement of the on-board share: $100 - 18 = 82$, so $82\\%$ bought a ticket before boarding.\nStep 3: Multiply: $0.82 \\times 800 = 656$. Check: $0.18 \\times 800 = 144$, and $144 + 656 = 800$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($144$): computes $18\\%$ of $800$, the passengers who did purchase on board — the group the question excludes.\n* Choice C ($782$): subtracts $18$ passengers rather than $18\\%$ of the passengers.\n* Choice D ($800$): reports the total that boarded, ignoring the percent entirely.\n\n**Test Day Takeaway:** Underline the group the question actually wants before you multiply — half of these items hinge on which side of the complement you report.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-complement",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-ps-222",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "medium",
    type: "fill-in",
    question: "A vendor pays the organizer of a craft fair $15\\%$ of the revenue from each sale. Of the revenue the vendor keeps, $20\\%$ goes to materials. What percent of the revenue from each sale does the vendor keep after paying the organizer and the materials cost?",
    correctAnswer: "68",
    explanation: "**SAT Pattern: Percent Complement**\n\n**The correct answer is $68$.**\n\n**The Fast Way (~30s):** The vendor keeps $85\\%$ after the organizer and then $80\\%$ of that: $0.85 \\times 0.80 = 0.68$, or $68\\%$.\n\n**The Full Solution:**\nStep 1: After the organizer's share, the vendor holds $100\\% - 15\\% = 85\\%$ of the revenue.\nStep 2: Materials take $20\\%$ of that $85\\%$, so the vendor keeps $100\\% - 20\\% = 80\\%$ of it: $0.80 \\times 0.85 = 0.68$.\nStep 3: Check with $\\$200$ of revenue: the organizer takes $\\$30$, leaving $\\$170$; materials take $\\$34$, leaving $\\$136$, and $\\frac{136}{200} = 68\\%$. $\\checkmark$\n\n**Common Mistakes:** Subtracting both percents from the whole, $100 - 15 - 20 = 65$, which wrongly applies the second percent to the full revenue; multiplying the two given percents, $0.15 \\times 0.20 = 0.03$, for $3$; or stopping at $85$ after the organizer's share.\n\n**Test Day Takeaway:** Successive cuts multiply their complements. Two $15\\%$-then-$20\\%$ cuts are not a single $35\\%$ cut.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-complement",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-ps-223",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "On a laboratory shelf, $\\dfrac{7}{16}$ of the bottles contain a buffer solution and the rest contain distilled water. What percent of the bottles contain distilled water?",
    choices: [
      // distractor: reports the numerator 9 of 9/16 as the percent
      { id: "A", text: "$9\\%$" },
      // distractor: converts 7/16, the buffer share, to a percent
      { id: "B", text: "$43.75\\%$" },
      { id: "C", text: "$56.25\\%$" },
      // distractor: subtracts 1/16 instead of 7/16
      { id: "D", text: "$93.75\\%$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent Complement**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The water share is $1 - \\frac{7}{16} = \\frac{9}{16}$, and $\\frac{9}{16} = 0.5625$, or $56.25\\%$.\n\n**The Full Solution:**\nStep 1: The bottles are either buffer or water, so the water share is $1 - \\frac{7}{16} = \\frac{16}{16} - \\frac{7}{16} = \\frac{9}{16}$.\nStep 2: Convert the fraction to a decimal: $\\frac{9}{16} = \\frac{9 \\times 6.25}{100} = 0.5625$.\nStep 3: Write as a percent: $56.25\\%$. Check: $\\frac{7}{16} = 43.75\\%$, and $43.75\\% + 56.25\\% = 100\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9\\%$): reads the numerator of $\\frac{9}{16}$ as a percent without dividing by $16$.\n* Choice B ($43.75\\%$): converts $\\frac{7}{16}$, the buffer bottles, instead of the remaining bottles.\n* Choice D ($93.75\\%$): subtracts $\\frac{1}{16}$ from $1$, treating the numerator as $1$.\n\n**Test Day Takeaway:** Complement in fraction form first, then convert once. Sixteenths are worth memorizing: each sixteenth is $6.25\\%$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-complement",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-ps-224",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "hard",
    type: "fill-in",
    question: "The table gives the number of ceramic tiles fired in each of three kilns during one production run. Across the entire run, $6.5\\%$ of the tiles cracked and were discarded. How many of the tiles fired in the run were not discarded?",
    diagram: { type: "dataTable", params: { headers: ["Kiln", "Tiles fired"], rows: [["Kiln 1", "520"], ["Kiln 2", "460"], ["Kiln 3", "420"]] } },
    correctAnswer: "1309",
    explanation: "**SAT Pattern: Percent Complement**\n\n**The correct answer is $1309$.**\n\n**The Fast Way (~40s):** The run fired $1{,}400$ tiles, and $100\\% - 6.5\\% = 93.5\\%$ survived: $0.935 \\times 1{,}400 = 1{,}309$.\n\n**The Full Solution:**\nStep 1: Total the kilns: $520 + 460 + 420 = 1{,}400$ tiles.\nStep 2: Take the complement of the discard rate: $100 - 6.5 = 93.5$, so $93.5\\%$ of the tiles were kept.\nStep 3: Multiply: $0.935 \\times 1{,}400 = 1{,}309$. Check: $0.065 \\times 1{,}400 = 91$ discarded, and $1{,}400 - 91 = 1{,}309$. $\\checkmark$\n\n**Common Mistakes:** Reporting $91$, the discarded tiles; subtracting $6.5$ tiles rather than $6.5\\%$, giving $1{,}393.5$, which is not a whole number of tiles; or reading $6.5\\%$ as $65\\%$ and computing $0.35 \\times 1{,}400 = 490$.\n\n**Test Day Takeaway:** A percent with a decimal point converts the same way as any other: $6.5\\% = 0.065$. Sanity-check the size of your answer against the total.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-complement",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  // ─── CHAINED PERCENT RELATIONSHIP (bank-ps-225..232) ──────────────────────
  // Pure-algebraic chained percent: "a is X% of b, b is Y% of c, find a/c."
  // Distinct method from `compound-percent-of` (count-anchored) — students
  // freeze without a concrete count to anchor on. See
  // docs/CB_QUESTION_TYPE_AUDIT_2026-05-16.md §B1. CB precedent: PT11-M2-Q21.
  {
    id: "bank-ps-225",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "If $r$ is $30\\%$ of $s$ and $s$ is $40\\%$ of $t$, then $r$ is what percent of $t$?",
    choices: [
      // distractor: subtracts the two percents
      { id: "A", text: "$10\\%$" },
      { id: "B", text: "$12\\%$" },
      // distractor: adds the two percents
      { id: "C", text: "$70\\%$" },
      // distractor: divides 30 by 40
      { id: "D", text: "$75\\%$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $r = 0.30(0.40t) = 0.12t$, so $r$ is $12\\%$ of $t$.\n\n**The Full Solution:**\nStep 1: Translate each statement: $r = 0.30s$ and $s = 0.40t$.\nStep 2: Substitute the second equation into the first: $r = 0.30(0.40t) = 0.12t$.\nStep 3: Write the coefficient as a percent: $12\\%$. Check with $t = 100$: $s = 40$ and $r = 0.30(40) = 12$, which is $12\\%$ of $100$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($10\\%$): subtracts, $40 - 30$, but the two percents describe different wholes.\n* Choice C ($70\\%$): adds the percents; $r$ is a part of a part, so it must be smaller than either share.\n* Choice D ($75\\%$): divides $30$ by $40$, comparing the two rates with each other instead of chaining them.\n\n**Test Day Takeaway:** Chained percents multiply. Setting the last variable to $100$ turns the whole chain into arithmetic.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "chained-percent-relationship",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-226",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The number of hardcover titles in a collection is $25\\%$ of the number of paperback titles, and the number of paperback titles is $60\\%$ of the number of audiobook titles. The number of hardcover titles is what percent of the number of audiobook titles?",
    choices: [
      { id: "A", text: "$15\\%$" },
      // distractor: subtracts the two percents
      { id: "B", text: "$35\\%$" },
      // distractor: adds the two percents
      { id: "C", text: "$85\\%$" },
      // distractor: divides 60 by 25
      { id: "D", text: "$240\\%$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $0.25 \\times 0.60 = 0.15$, so the hardcover count is $15\\%$ of the audiobook count.\n\n**The Full Solution:**\nStep 1: Let $a$ be the number of audiobook titles. Then the paperback count is $0.60a$.\nStep 2: The hardcover count is $25\\%$ of that: $0.25(0.60a) = 0.15a$.\nStep 3: Read the coefficient as a percent: $15\\%$. Check with $a = 200$: $120$ paperbacks and $0.25(120) = 30$ hardcovers, and $\\frac{30}{200} = 15\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($35\\%$): subtracts the percents, $60 - 25$, which mixes two different wholes.\n* Choice C ($85\\%$): adds the percents; hardcovers are a slice of a slice and must be smaller than $25\\%$ of the audiobooks.\n* Choice D ($240\\%$): divides $60$ by $25$, reversing the comparison.\n\n**Test Day Takeaway:** Assign the base a friendly value such as $100$ or $200$, walk the chain forward, and read off the ratio.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "chained-percent-relationship",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-227",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "medium",
    type: "fill-in",
    question: "If $u$ is $65\\%$ of $v$ and $v$ is $24\\%$ of $w$, then $u$ is what percent of $w$? (Report only the number, without the percent sign.)",
    correctAnswer: "15.6",
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**The correct answer is $15.6$.**\n\n**The Fast Way (~20s):** $0.65 \\times 0.24 = 0.156$, so $u$ is $15.6\\%$ of $w$.\n\n**The Full Solution:**\nStep 1: Translate: $u = 0.65v$ and $v = 0.24w$.\nStep 2: Substitute: $u = 0.65(0.24w) = 0.156w$.\nStep 3: Convert the coefficient to a percent: $15.6\\%$. Check with $w = 500$: $v = 120$ and $u = 0.65(120) = 78$, and $\\frac{78}{500} = 0.156$. $\\checkmark$\n\n**Common Mistakes:** Adding the percents for $89$; subtracting them for $41$; or dividing $65$ by $24$ for about $270.8$, which would make $u$ larger than $w$ even though $u$ is a part of a part.\n\n**Test Day Takeaway:** Multiply the decimal forms, then move the decimal two places to report a percent — $0.156$ is $15.6\\%$, not $0.156\\%$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "chained-percent-relationship",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-228",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The mass of sample $P$ is $60\\%$ of the mass of sample $Q$, and the mass of sample $Q$ is $30\\%$ less than the mass of sample $R$. The mass of sample $P$ is what percent of the mass of sample $R$?",
    choices: [
      // distractor: multiplies by 0.30 instead of by 0.70
      { id: "A", text: "$18\\%$" },
      // distractor: subtracts 30 from 60
      { id: "B", text: "$30\\%$" },
      { id: "C", text: "$42\\%$" },
      // distractor: adds the two percents
      { id: "D", text: "$90\\%$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** \"$30\\%$ less\" means $Q = 0.70R$, so $P = 0.60(0.70R) = 0.42R$, or $42\\%$.\n\n**The Full Solution:**\nStep 1: Translate the second relationship: a mass $30\\%$ less than $R$ is $100\\% - 30\\% = 70\\%$ of $R$, so $Q = 0.70R$.\nStep 2: Translate the first: $P = 0.60Q$.\nStep 3: Substitute: $P = 0.60(0.70R) = 0.42R$, so $P$ is $42\\%$ of $R$. Check with $R = 200$: $Q = 140$ and $P = 84$, and $\\frac{84}{200} = 42\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($18\\%$): multiplies by $0.30$, the amount removed, instead of by $0.70$, the amount that remains.\n* Choice B ($30\\%$): subtracts the two percents rather than chaining them.\n* Choice D ($90\\%$): adds the percents, which would make $P$ larger than $Q$.\n\n**Test Day Takeaway:** \"$k\\%$ less than\" converts to a multiplier of $1 - \\frac{k}{100}$ before anything else happens.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "chained-percent-relationship",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-229",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "At a film festival, $45\\%$ of the entries are documentaries, and $20\\%$ of the documentary entries were produced outside the country. What percent of all entries are documentaries produced outside the country?",
    choices: [
      { id: "A", text: "$9\\%$" },
      // distractor: reports the rate measured within the documentary entries
      { id: "B", text: "$20\\%$" },
      // distractor: subtracts, 45 - 20
      { id: "C", text: "$25\\%$" },
      // distractor: adds the two percents
      { id: "D", text: "$65\\%$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $0.45 \\times 0.20 = 0.09$, or $9\\%$.\n\n**The Full Solution:**\nStep 1: The $20\\%$ is measured within the documentary entries, which are $45\\%$ of all entries.\nStep 2: Multiply the two rates: $0.45 \\times 0.20 = 0.09$.\nStep 3: Convert to a percent: $9\\%$. Check with $400$ entries: $180$ documentaries, and $20\\%$ of $180$ is $36$, which is $9\\%$ of $400$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($20\\%$): reports the share within the documentaries as though it described all entries.\n* Choice C ($25\\%$): subtracts the percents, $45 - 20$, but the two percents describe different wholes.\n* Choice D ($65\\%$): adds the percents, which exceeds the documentary share itself.\n\n**Test Day Takeaway:** Test the result on a convenient total. If the answer is not smaller than both given percents, the chain was not multiplied.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "chained-percent-relationship",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-230",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "medium",
    type: "fill-in",
    question: "If $g$ is $40\\%$ of $h$ and $h$ is $35\\%$ greater than $k$, then $g$ is what percent of $k$? (Report only the number, without the percent sign.)",
    correctAnswer: "54",
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**The correct answer is $54$.**\n\n**The Fast Way (~25s):** $h = 1.35k$, so $g = 0.40(1.35k) = 0.54k$, or $54\\%$.\n\n**The Full Solution:**\nStep 1: \"$35\\%$ greater than $k$\" means $h = k + 0.35k = 1.35k$.\nStep 2: Substitute into $g = 0.40h$: $g = 0.40(1.35k) = 0.54k$.\nStep 3: Read the coefficient as a percent: $54\\%$. Check with $k = 200$: $h = 270$ and $g = 108$, and $\\frac{108}{200} = 54\\%$. $\\checkmark$\n\n**Common Mistakes:** Using $0.35$ instead of $1.35$, which gives $14$; adding the percents for $75$; or subtracting them for $5$.\n\n**Test Day Takeaway:** \"Greater than\" is a multiplier above $1$: $35\\%$ greater is $\\times 1.35$, never $\\times 0.35$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "chained-percent-relationship",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-231",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "For positive numbers $c$, $d$, and $e$, $c = 0.36d$ and $c$ is $90\\%$ of $e$. What percent of $d$ is $e$?",
    choices: [
      // distractor: multiplies 0.36 by 0.90 instead of dividing
      { id: "A", text: "$32.4\\%$" },
      { id: "B", text: "$40\\%$" },
      // distractor: reports the complement of the correct 40%
      { id: "C", text: "$60\\%$" },
      // distractor: divides 0.90 by 0.36, reversing the ratio
      { id: "D", text: "$250\\%$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** $0.90e = 0.36d$, so $e = \\frac{0.36}{0.90}d = 0.4d$, which is $40\\%$.\n\n**The Full Solution:**\nStep 1: Translate the second statement: $c = 0.90e$.\nStep 2: Set the two expressions for $c$ equal: $0.90e = 0.36d$.\nStep 3: Solve for $e$: $e = \\frac{0.36}{0.90}d = 0.4d$, so $e$ is $40\\%$ of $d$. Check with $d = 100$: $c = 36$, and $\\frac{36}{0.90} = 40 = e$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($32.4\\%$): multiplies, $0.36 \\times 0.90$, but here $e$ is the larger unknown being solved for, so the $90\\%$ divides rather than multiplies.\n* Choice C ($60\\%$): reports $100\\% - 40\\%$, the share of $d$ that $e$ falls short by.\n* Choice D ($250\\%$): computes $\\frac{0.90}{0.36}$, which gives $d$ as a percent of $e$ instead.\n\n**Test Day Takeaway:** When the chain runs backward, isolate the requested variable in the equation rather than guessing whether to multiply or divide.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "chained-percent-relationship",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-232",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "hard",
    type: "fill-in",
    question: "In a forest inventory, hardwood stands make up $36\\%$ of all stands. Oak stands make up $45\\%$ of the hardwood stands, and white oak stands make up $20\\%$ of the oak stands. White oak stands make up what percent of all stands? (Report only the number, without the percent sign.)",
    correctAnswer: "3.24",
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**The correct answer is $3.24$.**\n\n**The Fast Way (~40s):** $0.36 \\times 0.45 \\times 0.20 = 0.0324$, or $3.24\\%$.\n\n**The Full Solution:**\nStep 1: Let $n$ be the total number of stands. Hardwood stands number $0.36n$.\nStep 2: Oak stands are $45\\%$ of the hardwood stands: $0.45(0.36n) = 0.162n$.\nStep 3: White oak stands are $20\\%$ of the oak stands: $0.20(0.162n) = 0.0324n$, or $3.24\\%$ of all stands. Check with $n = 10{,}000$: $3{,}600$ hardwood, $1{,}620$ oak, $324$ white oak, and $\\frac{324}{10{,}000} = 3.24\\%$. $\\checkmark$\n\n**Common Mistakes:** Stopping after two links at $16.2$, the oak share of all stands; skipping the oak step and computing $0.36 \\times 0.20 = 0.072$ for $7.2$; or adding the three percents for $101$.\n\n**Test Day Takeaway:** Each \"of the previous group\" adds one more factor. Multiply all of them before converting to a percent.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "chained-percent-relationship",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── STATISTICAL CLAIMS: OBSERVATIONAL VS EXPERIMENTAL (bank-ps-233..240) ─
  // First CB skill Q.G. ('statistical-claims') pool. Tests whether students
  // distinguish: random ASSIGNMENT supports causal claims; absence of
  // random assignment supports only ASSOCIATION. See audit §B2.
  {
    id: "bank-ps-233",
    domain: "problem-solving",
    skills: ["observational-vs-experimental", "causation-vs-association"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A transit agency surveyed $600$ riders and found that riders who used its mobile ticketing app reported shorter average wait times than riders who bought paper tickets. Riders chose their own ticketing method. Which statement is best supported by these results?",
    choices: [
      // distractor: draws a cause-and-effect conclusion from data with no random assignment
      { id: "A", text: "Using the mobile app causes wait times to decrease for riders in this transit system." },
      { id: "B", text: "There is an association between using the mobile app and reporting a shorter wait time among the riders surveyed." },
      // distractor: asserts a counterfactual outcome for a group that was never treated
      { id: "C", text: "Riders who bought paper tickets would have reported shorter wait times if they had used the mobile app." },
      // distractor: claims no effect, which the data also cannot establish
      { id: "D", text: "Using the mobile app has no effect on the wait times of riders in this transit system." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Riders selected their own ticketing method, so this is an observational study: it supports an association, not causation.\n\n**The Full Solution:**\nStep 1: Identify the design. No rider was assigned to a ticketing method, so the two groups may differ in other ways, such as which stations or times they travel.\nStep 2: Without random assignment, a difference between the groups cannot be attributed to the app itself.\nStep 3: The defensible statement is limited to the observed relationship among the $600$ riders surveyed, which is what Choice B says. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: states cause and effect, which requires random assignment to the ticketing methods.\n* Choice C: predicts what would have happened to the paper-ticket group under a treatment they never received.\n* Choice D: claims the app has no effect; the study cannot rule an effect out any more than it can establish one.\n\n**Test Day Takeaway:** No random assignment means no causal claim — in either direction. Association is the strongest conclusion available.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "observational-vs-experimental",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-234",
    domain: "problem-solving",
    skills: ["observational-vs-experimental", "causation-vs-association"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Researchers randomly assigned $180$ seedlings of the same species to be grown under one of two light schedules. After ten weeks, the seedlings grown under schedule 1 were on average taller than those grown under schedule 2. Which conclusion is best supported by these results?",
    choices: [
      { id: "A", text: "The light schedule likely caused the difference in average height for the seedlings in this study." },
      // distractor: reverses the direction of the design; assignment was random and came first
      { id: "B", text: "Taller seedlings were more likely to be assigned to schedule 1." },
      // distractor: turns a difference in averages into a claim about every individual
      { id: "C", text: "Every seedling grown under schedule 1 was taller than every seedling grown under schedule 2." },
      // distractor: generalizes beyond the species and conditions actually studied
      { id: "D", text: "Schedule 1 would produce taller plants for any species grown in any conditions." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Seedlings were randomly assigned to the light schedules, so this is an experiment and a cause-and-effect conclusion about these seedlings is supported.\n\n**The Full Solution:**\nStep 1: Identify the design. Random assignment to treatments makes this a controlled experiment.\nStep 2: Random assignment makes the two groups similar at the start, so the light schedule is the plausible explanation for the later difference in average height.\nStep 3: The conclusion must stay within the study: these seedlings, of this species, over ten weeks. Choice A does exactly that. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: reverses cause and effect; the seedlings were assigned before any height difference existed.\n* Choice C: a difference in group averages does not mean every individual in one group exceeds every individual in the other.\n* Choice D: extends the result to species and conditions the experiment never included.\n\n**Test Day Takeaway:** Random assignment buys causation, but only for the population and treatments the study actually used.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "observational-vs-experimental",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-235",
    domain: "problem-solving",
    skills: ["observational-vs-experimental", "causation-vs-association"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A public health team followed $2{,}400$ adults for four years, recording each adult's self-reported weekly walking time and measured resting heart rate. Adults who reported more walking time had lower average resting heart rates, and the team concluded that walking lowers resting heart rate. Which statement best identifies the flaw in this conclusion?",
    choices: [
      // distractor: faults the sample size, which is large and not the issue
      { id: "A", text: "The sample of $2{,}400$ adults is too small to detect any relationship between the two variables." },
      // distractor: objects to units, which does not affect the strength of the conclusion
      { id: "B", text: "Resting heart rate should have been recorded in beats per minute rather than as an average." },
      // distractor: swaps one summary statistic for another, which does not create causal evidence
      { id: "C", text: "The team should have reported the median resting heart rate instead of the mean." },
      { id: "D", text: "Because the adults were not randomly assigned to amounts of walking, the data cannot establish cause and effect." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Walking time was reported, not assigned, so the study is observational and cannot support a causal claim.\n\n**The Full Solution:**\nStep 1: Identify the design. The team recorded what the adults already did; no treatment was assigned.\nStep 2: Adults who walk more may differ systematically in other ways — diet, age, or existing fitness — and any of those could explain the lower heart rates.\nStep 3: The conclusion \"walking lowers resting heart rate\" therefore overreaches, which is exactly the flaw Choice D names. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: $2{,}400$ adults over four years is a large study; sample size is not what blocks the causal claim.\n* Choice B: the unit used to record heart rate has no bearing on whether cause and effect can be inferred.\n* Choice C: choosing the median over the mean changes a summary statistic, not the design.\n\n**Test Day Takeaway:** When asked what is wrong with a causal conclusion, look first for the missing random assignment, not for a problem with the numbers.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "observational-vs-experimental",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-236",
    domain: "problem-solving",
    skills: ["observational-vs-experimental", "causation-vs-association"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In a trial, $320$ adults with seasonal allergies were randomly assigned to receive either a new nasal spray or an identical-looking placebo, and neither the participants nor the evaluators knew the assignments. After six weeks, the nasal spray group reported significantly fewer symptom days. Which conclusion is best supported?",
    choices: [
      // distractor: generalizes from seasonal allergies to every type of allergy
      { id: "A", text: "The nasal spray reduces symptom days for adults with any type of allergy." },
      // distractor: reverses the order of assignment and outcome
      { id: "B", text: "Adults with fewer symptom days were more likely to be assigned the nasal spray." },
      { id: "C", text: "The nasal spray likely caused the reduction in symptom days for the adults in this trial." },
      // distractor: asserts an expectation effect that the blinding was designed to remove
      { id: "D", text: "Adults who expected relief reported fewer symptom days than adults who did not." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Random assignment plus blinding makes this a controlled experiment, so a causal conclusion about the participants is supported.\n\n**The Full Solution:**\nStep 1: Identify the design. Participants were randomly assigned to spray or placebo, so the groups started out comparable.\nStep 2: Blinding both participants and evaluators removes expectation as an alternative explanation for the difference.\nStep 3: The remaining explanation for significantly fewer symptom days is the spray itself, for the adults studied. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: the participants all had seasonal allergies, so the result cannot be extended to every type of allergy.\n* Choice B: assignment happened first and at random, so symptom days could not have influenced who received the spray.\n* Choice D: blinding was included precisely so that expectation could not drive the result; the data do not support this claim.\n\n**Test Day Takeaway:** A causal conclusion is only as wide as the group studied — check the population before accepting the boldest choice.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "observational-vs-experimental",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-237",
    domain: "problem-solving",
    skills: ["observational-vs-experimental", "causation-vs-association"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The two-way table summarizes a survey of $250$ employees at two office sites, showing whether each employee commutes by transit. Employees were not assigned to a site. Which conclusion is best supported by these data?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Commutes by transit", "Does not commute by transit", "Total"], rows: [["Site A", "78", "62", "140"], ["Site B", "35", "75", "110"], ["Total", "113", "137", "250"]] } },
    choices: [
      // distractor: claims causation from data with no assignment to sites
      { id: "A", text: "Working at site A causes an employee to commute by transit." },
      // distractor: misreads the totals; 113 of 250 is less than half
      { id: "B", text: "More than half of the employees surveyed commute by transit." },
      // distractor: makes an absolute claim about individuals the survey did not measure
      { id: "C", text: "Every employee at site A has access to transit service." },
      { id: "D", text: "Among the employees surveyed, a greater proportion at site A than at site B commute by transit." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** Site A is $\\frac{78}{140} \\approx 56\\%$ transit and site B is $\\frac{35}{110} \\approx 32\\%$, and with no assignment to sites, comparing proportions is all the data support.\n\n**The Full Solution:**\nStep 1: Compute each site's transit proportion: $\\frac{78}{140} \\approx 0.56$ and $\\frac{35}{110} \\approx 0.32$.\nStep 2: Site A's proportion is larger, so a difference exists among the employees surveyed.\nStep 3: Employees were not assigned to sites, so the statement must stay descriptive rather than causal — which is what Choice D does. Check: $78 + 62 = 140$ and $35 + 75 = 110$, totaling $250$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: employees chose or were hired into their sites, so the difference could come from where they live rather than from the site itself.\n* Choice B: $113$ of $250$ employees commute by transit, which is about $45\\%$ — less than half.\n* Choice C: the survey recorded commuting behavior, not who has access to transit service.\n\n**Test Day Takeaway:** With a table and no random assignment, the safe conclusion compares proportions within the sample and stops there.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "observational-vs-experimental",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-238",
    domain: "problem-solving",
    skills: ["observational-vs-experimental", "causation-vs-association"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A district wants to determine whether a new after-school tutoring program causes an increase in reading scores. Which study design would best support a cause-and-effect conclusion?",
    choices: [
      // distractor: lets students select their own group, so the groups may differ from the start
      { id: "A", text: "Compare the end-of-year reading scores of students who chose to enroll in the program with the scores of students who did not enroll." },
      // distractor: collects opinions rather than outcome data
      { id: "B", text: "Survey teachers in the district about whether they believe the program improves reading scores." },
      { id: "C", text: "Randomly assign student volunteers to either the tutoring program or no tutoring, then compare their end-of-year reading scores." },
      // distractor: has no comparison group, so ordinary growth over the year is not ruled out
      { id: "D", text: "Record the reading scores of the students in the program in September and again in June, then note whether the scores increased." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Only random assignment to a treatment and a control group supports a cause-and-effect conclusion.\n\n**The Full Solution:**\nStep 1: A causal conclusion requires groups that are comparable before the treatment begins.\nStep 2: Random assignment produces comparable groups, so any later difference in scores is attributable to the tutoring.\nStep 3: A control group of students who receive no tutoring is also required, so that normal growth over the school year is accounted for. Choice C has both features. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: students who choose tutoring may already differ in motivation or prior achievement, so the comparison is confounded.\n* Choice B: teacher beliefs are opinions, not measurements of reading scores.\n* Choice D: with no untreated group, an increase could simply reflect a year of ordinary reading growth.\n\n**Test Day Takeaway:** For causation, look for two words in the design: randomly assigned, and a control group.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "observational-vs-experimental",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-239",
    domain: "problem-solving",
    skills: ["observational-vs-experimental", "causation-vs-association"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A researcher selected $80$ households at random from all households in a county that compost food waste and randomly assigned each household to a weekly or a biweekly collection schedule. The two-way table gives the number of these households by collection schedule and by the mass of food waste the household composted in one week. Which of the following is the largest population to which the results of this study can be generalized?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Less than 5 kg", "5 kg or more", "Total"], rows: [["Weekly collection", "12", "30", "42"], ["Biweekly collection", "26", "12", "38"], ["Total", "38", "42", "80"]] } },
    choices: [
      { id: "A", text: "All households in the county that compost food waste" },
      // distractor: widens the population beyond composting households, which were the sampling frame
      { id: "B", text: "All households in the county" },
      // distractor: narrows the population to the sample itself, ignoring the random selection
      { id: "C", text: "The $80$ households in the study" },
      // distractor: extends beyond the county the sample was drawn from
      { id: "D", text: "All households in the state that compost food waste" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** The sample was drawn at random from county households that compost, so that group is the largest population the results describe.\n\n**The Full Solution:**\nStep 1: Identify the sampling frame: all households in the county that compost food waste.\nStep 2: Because the $80$ households were selected at random from that frame, results generalize to it — and no further.\nStep 3: The random assignment to collection schedules supports a causal comparison, but it does not widen the population. Check: $42 + 38 = 80$ households are represented in the table. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: households that do not compost were never eligible for selection, so they are outside the frame.\n* Choice C: restricting the conclusion to the sample discards the benefit of random selection.\n* Choice D: the sample came from one county, so the state as a whole was never represented.\n\n**Test Day Takeaway:** Random selection sets the population; random assignment sets whether causation is available. Read the sampling frame word for word.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "observational-vs-experimental",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-240",
    domain: "problem-solving",
    skills: ["observational-vs-experimental", "causation-vs-association"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A researcher analyzes county-level census data and finds that counties with a higher share of residents holding library cards have lower average commute times. Based on this analysis alone, which of the following is the most defensible conclusion?",
    choices: [
      // distractor: treats an observed association as an intervention that would change outcomes
      { id: "A", text: "Issuing more library cards would reduce average commute times in these counties." },
      // distractor: applies a county-level pattern to individual residents
      { id: "B", text: "A resident who holds a library card has a shorter commute than a resident who does not." },
      { id: "C", text: "Across the counties analyzed, there is an association between the share of residents holding library cards and average commute time." },
      // distractor: asserts causation in the reverse direction, which the data also cannot show
      { id: "D", text: "Average commute time in a county determines how many of its residents obtain library cards." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Census data involve no assignment and no individual-level measurement, so only an association across counties can be claimed.\n\n**The Full Solution:**\nStep 1: Identify the design. The researcher analyzed existing records; nothing was assigned or manipulated.\nStep 2: The unit of analysis is the county, not the resident, so the pattern describes county averages rather than individuals.\nStep 3: Both restrictions leave one defensible statement: an association across the counties analyzed. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: predicts the effect of an intervention, which requires an experiment rather than existing records.\n* Choice B: applies a county-level relationship to individual residents, a comparison the county data never measured.\n* Choice D: reverses the causal direction, but the analysis supports no causal direction at all.\n\n**Test Day Takeaway:** Ask two questions of any records-based study: was anything assigned, and what was the unit measured? Both limit how far the conclusion may travel.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "observational-vs-experimental",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── STATISTICAL CLAIMS: SCOPE OF INFERENCE (bank-ps-241..248) ────────────
  // Tests whether students identify the correct POPULATION the conclusion
  // applies to. Random sampling lets the result generalize to the sampled
  // population, not beyond it. Self-selection and non-response are the
  // most common scope-of-inference threats.
  {
    id: "bank-ps-241",
    domain: "problem-solving",
    skills: ["scope-of-inference", "sampling-and-generalization"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A city library selected $250$ of its adult cardholders at random and asked whether they had used the library's digital lending service in the past month. Of those selected, $38\\%$ said they had. Which of the following is the largest population to which the results of the survey can be generalized?",
    choices: [
      // distractor: extends to residents who were never in the sampling frame (non-cardholders)
      { id: "A", text: "All adult residents of the city" },
      // distractor: stops at the sample itself, ignoring that random selection supports inference to the population
      { id: "B", text: "The $250$ adult cardholders who were selected" },
      // distractor: extends to cardholders of other libraries, who had no chance of selection
      { id: "C", text: "All cardholders of public libraries in the state" },
      { id: "D", text: "All adult cardholders of the city library" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** A random sample supports a conclusion about exactly the group it was drawn from. The $250$ people were selected from the library's adult cardholders, so that is the largest population the $38\\%$ estimate describes.\n\n**The Full Solution:**\nStep 1: Locate the sampling frame. The library selected $250$ people at random from its adult cardholders.\nStep 2: Random selection is what allows a sample statistic to estimate the corresponding value for the population the sample came from, and for no larger group.\nStep 3: That population is all adult cardholders of the city library. Check: every adult cardholder had a chance of being selected, while non-cardholders and cardholders at other libraries had no chance at all. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: adult residents who do not hold a library card were never eligible to be selected, so the sample carries no information about them.\n* Choice B: the $250$ selected cardholders are the sample itself; random selection is precisely what lets the result reach beyond the sample to the population.\n* Choice C: cardholders of other libraries were outside the sampling frame, so the estimate cannot be extended to them.\n\n**Test Day Takeaway:** Find the phrase \"selected at random from ___\"; whatever fills the blank is the largest group the results can describe.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "scope-of-inference",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-242",
    domain: "problem-solving",
    skills: ["scope-of-inference", "sampling-and-generalization"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A quality manager at a bottling plant selected $180$ bottles at random from all the bottles the plant produced on a certain day and measured the fill volume of each. The mean fill volume of the sample was $498$ milliliters. Which of the following is the largest group to which this estimate can be applied?",
    choices: [
      { id: "A", text: "All bottles the plant produced that day" },
      // distractor: extends the one-day sample to production on days that were never sampled
      { id: "B", text: "All bottles the plant produced that year" },
      // distractor: stops at the sample itself instead of the population it was drawn from
      { id: "C", text: "The $180$ bottles that were measured" },
      // distractor: extends to other plants, which were outside the sampling frame
      { id: "D", text: "All bottles produced that day at every plant the company owns" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The bottles were selected at random from that day's production at this plant, so the mean of $498$ milliliters estimates the mean for that day's production at this plant and nothing wider.\n\n**The Full Solution:**\nStep 1: Identify the population that was sampled: all bottles the plant produced on that one day.\nStep 2: Because the $180$ bottles were selected at random from that population, the sample mean is a reasonable estimate of the population mean.\nStep 3: The estimate applies to that population only. Check: a bottle made on a different day, or at a different plant, had no chance of being selected, so the data say nothing about it. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: production on other days was never sampled; conditions such as machine settings could differ from day to day.\n* Choice C: the $180$ measured bottles are the sample, and random selection lets the result generalize past the sample to the day's production.\n* Choice D: bottles from other plants were not in the sampling frame, so the estimate cannot reach them.\n\n**Test Day Takeaway:** The population is the group the sample was drawn from at random, not the group the researcher might wish to describe.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "scope-of-inference",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-243",
    domain: "problem-solving",
    skills: ["scope-of-inference", "sampling-and-generalization"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A university emailed a survey to all of its alumni asking whether they would recommend the university to a prospective student. The table shows how many alumni received the survey and how many responded. Of the alumni who responded, $71\\%$ said they would recommend the university. Which of the following is the most likely reason that $71\\%$ may not be a reliable estimate for all of the university's alumni?",
    questionTable: { headers: ["", "Number of alumni"], rows: [["Received the survey", "12,000"], ["Responded to the survey", "900"]] },
    choices: [
      // distractor: blames sample size; 900 responses is plenty if the respondents were representative
      { id: "A", text: "Fewer than $1{,}000$ alumni responded, so the sample is too small to produce an estimate." },
      // distractor: blames contacting everyone, which is not itself a flaw; the flaw is who chose to answer
      { id: "B", text: "The university emailed all of its alumni instead of selecting a random sample to email." },
      { id: "C", text: "Alumni who chose to respond may differ from alumni who did not respond." },
      // distractor: blames the survey medium rather than the self-selection of respondents
      { id: "D", text: "A survey sent by email cannot measure whether alumni would recommend the university." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Only $900$ of $12{,}000$ alumni answered, and each alumnus decided for themselves whether to answer. When respondents select themselves, the ones who respond can differ systematically from the ones who do not, so the $71\\%$ may not represent all alumni.\n\n**The Full Solution:**\nStep 1: Read the table: $12{,}000$ alumni were contacted, but only $900$ responded, a response rate of $\\frac{900}{12{,}000} = 7.5\\%$.\nStep 2: The $900$ respondents were not selected at random by the university; they chose to participate. Alumni with strong feelings about the university, positive or negative, are typically more likely to respond than alumni who are indifferent.\nStep 3: A sample that selects itself does not support generalization to the whole population, so the $71\\%$ is a reliable description of the respondents only. Check: the concern is who answered, not how many answered. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: a random sample of $900$ would be large enough to estimate a proportion well; the problem is how the $900$ were obtained, not their number.\n* Choice B: emailing every alumnus does not bias the result by itself; the bias enters because response was voluntary.\n* Choice D: the medium of the survey has nothing to do with whether the respondents represent the population.\n\n**Test Day Takeaway:** Voluntary response is a sampling flaw, and a larger number of volunteers never fixes it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "scope-of-inference",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-244",
    domain: "problem-solving",
    skills: ["scope-of-inference", "sampling-and-generalization"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A veterinarian selected $150$ dogs at random from the patient records of her clinic and found that $24\\%$ of the selected dogs were overweight. Which of the following is the largest population to which this result can be generalized?",
    choices: [
      { id: "A", text: "All dogs treated at the clinic" },
      // distractor: widens the population to a different species group (all pets) that was never sampled
      { id: "B", text: "All pets treated at the clinic" },
      // distractor: widens to dogs in the city that are not clinic patients and could not have been selected
      { id: "C", text: "All dogs in the city where the clinic is located" },
      // distractor: stops at the sample rather than the population it was drawn from
      { id: "D", text: "The $150$ dogs whose records were selected" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The $150$ dogs were selected at random from the clinic's dog patients, so the $24\\%$ estimate describes all dogs treated at the clinic.\n\n**The Full Solution:**\nStep 1: The sampling frame is the set of dogs in the clinic's patient records.\nStep 2: Random selection from that set means the sample proportion, $24\\%$, estimates the proportion of overweight dogs among all dogs treated at the clinic.\nStep 3: No larger group is supported. Check: a dog that has never visited the clinic, or a cat treated there, had no chance of being selected. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: cats and other pets were never in the records that were sampled, so the estimate does not extend to them.\n* Choice C: most dogs in the city are not patients of this clinic and could not have been selected.\n* Choice D: the $150$ dogs are the sample; random selection is what allows the result to describe the clinic's dog population.\n\n**Test Day Takeaway:** Generalize to the population that was sampled at random, no wider and no narrower.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "scope-of-inference",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-245",
    domain: "problem-solving",
    skills: ["scope-of-inference", "sampling-and-generalization"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A fitness website displayed a banner inviting visitors to complete a survey about sleep. Of the $320$ visitors who clicked the banner and completed the survey, $65\\%$ reported sleeping fewer than $7$ hours per night. Which of the following is the strongest reason the $65\\%$ figure should not be generalized to all visitors to the website?",
    choices: [
      { id: "A", text: "Visitors chose whether to take the survey, so those who responded may not be representative of all visitors." },
      // distractor: blames sample size, which is adequate if the sample were random
      { id: "B", text: "A sample of $320$ visitors is too small to estimate a percentage for all visitors." },
      // distractor: blames self-report measurement rather than the self-selected sample
      { id: "C", text: "The survey asked about sleep, which cannot be measured by asking people to report it." },
      // distractor: blames the site type; the question asks about generalizing to visitors of this site
      { id: "D", text: "The banner appeared on a fitness website rather than on a medical website." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Nobody selected these $320$ visitors at random; they selected themselves by clicking a banner. A self-selected sample can differ from the population, so the $65\\%$ describes the respondents, not all visitors.\n\n**The Full Solution:**\nStep 1: Identify how the sample was formed. Visitors saw a banner and decided on their own whether to participate.\nStep 2: Visitors who feel they sleep poorly may be more inclined to answer a sleep survey than visitors who sleep well. That would push the sample's percentage above the percentage for all visitors.\nStep 3: Because the sample was not selected at random from all visitors, the $65\\%$ cannot be generalized to all visitors. Check: the flaw lies in who chose to respond, which no larger number of volunteers would repair. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: $320$ is a reasonable sample size; a random sample of $320$ visitors would support an estimate for all visitors.\n* Choice C: self-reported sleep is imperfect, but the question is about generalizing to the population, which depends on how the sample was chosen.\n* Choice D: the population in question is visitors to this website, so the site's subject matter is not the issue.\n\n**Test Day Takeaway:** When participants volunteer, the sample may not represent the population; sample size cannot cure a self-selected sample.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "scope-of-inference",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-246",
    domain: "problem-solving",
    skills: ["scope-of-inference", "sampling-and-generalization"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A transportation agency selected $500$ households at random from the households in a county. Based on the sample, the agency estimated that $46\\%$ of the households in the county own at least one bicycle, with an associated margin of error of $4\\%$. Which of the following is the most appropriate conclusion?",
    choices: [
      // distractor: treats the estimate as the exact population value, ignoring the margin of error
      { id: "A", text: "Exactly $46\\%$ of the households in the county own at least one bicycle." },
      // distractor: applies the interval to the state, a population that was not sampled
      { id: "B", text: "It is plausible that between $42\\%$ and $50\\%$ of the households in the state own at least one bicycle." },
      // distractor: applies the interval to the sample, whose proportion is known to be exactly 46%
      { id: "C", text: "Between $42\\%$ and $50\\%$ of the $500$ households in the sample own at least one bicycle." },
      { id: "D", text: "It is plausible that between $42\\%$ and $50\\%$ of the households in the county own at least one bicycle." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The estimate is $46\\%$ with a margin of error of $4\\%$, so plausible values for the county proportion run from $46 - 4 = 42\\%$ to $46 + 4 = 50\\%$. The sample came from the county, so the conclusion is about the county.\n\n**The Full Solution:**\nStep 1: Form the interval of plausible values: $46\\% \\pm 4\\%$, which is $42\\%$ to $50\\%$.\nStep 2: Decide whom the interval describes. The households were selected at random from the county, so the interval describes the proportion of all households in the county.\nStep 3: The interval is a statement of plausibility, not certainty, and it is about the population, not the sample. Check: the sample's own proportion is known exactly ($46\\%$); only the county's proportion is uncertain. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: the margin of error exists because $46\\%$ is an estimate; the county's true proportion is unlikely to be exactly $46\\%$.\n* Choice B: households outside the county were not sampled, so the interval cannot be extended to the state.\n* Choice C: the sample proportion is not uncertain; the interval expresses uncertainty about the county, not about the $500$ sampled households.\n\n**Test Day Takeaway:** Estimate $\\pm$ margin of error gives a range of plausible values for the population that was randomly sampled.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "scope-of-inference",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-247",
    domain: "problem-solving",
    skills: ["scope-of-inference", "sampling-and-generalization"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "An analyst wanted to estimate the proportion of commuters in a certain state who drive alone to work. The analyst selected $700$ commuters at random from the two counties in the state that contain its largest cities and found that $61\\%$ of those selected drive alone to work. Which of the following is the largest population to which this result can be generalized?",
    choices: [
      // distractor: takes the analyst's stated goal as the population, though only two counties were sampled
      { id: "A", text: "All commuters in the state" },
      // distractor: swaps the sampled counties for a statewide category of city dwellers; the sample also includes non-city commuters in the two counties and excludes city commuters elsewhere
      { id: "B", text: "All commuters in the state who live in a large city" },
      // distractor: stops at the sample instead of the population it was drawn from
      { id: "C", text: "The $700$ commuters who were selected" },
      { id: "D", text: "All commuters in the two counties" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The goal was the whole state, but the random sample came only from two counties. Results generalize to the group actually sampled, so the $61\\%$ describes commuters in those two counties.\n\n**The Full Solution:**\nStep 1: Separate the intended population (commuters in the state) from the sampled population (commuters in the two counties).\nStep 2: Random selection was carried out within the two counties only, so every commuter in those counties had a chance of selection and no commuter elsewhere in the state did.\nStep 3: The largest population the result supports is all commuters in the two counties. Check: commuting patterns in rural counties may differ from those near large cities, so extending the estimate statewide would be unjustified. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: the analyst wanted a statewide estimate, but wanting it does not make the sample representative of the state.\n* Choice B: the selection was made from every commuter in the two counties, whether or not that commuter lives in a large city, and no commuter living in a city elsewhere in the state could be selected; this group is neither the sampled group nor a part of it.\n* Choice C: the $700$ selected commuters are the sample; random selection supports inference to the counties they came from.\n\n**Test Day Takeaway:** When the stated goal is broader than the sampling frame, the frame wins; results reach only the group that was randomly sampled.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "scope-of-inference",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-248",
    domain: "problem-solving",
    skills: ["scope-of-inference", "sampling-and-generalization"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A researcher recruited $90$ adult volunteers at a single community center and randomly assigned each volunteer to one of two stretching routines. After eight weeks, the volunteers assigned to routine 1 showed a greater mean improvement in flexibility than those assigned to routine 2. Which of the following conclusions is best supported by the design of the study?",
    choices: [
      { id: "A", text: "Routine 1 caused greater improvement than routine 2 for these volunteers, but the result may not apply to all adults." },
      // distractor: generalizes to all adults although the participants were volunteers from one center
      { id: "B", text: "Routine 1 causes greater improvement in flexibility than routine 2 for all adults." },
      // distractor: denies causation although treatments were randomly assigned
      { id: "C", text: "Routine 1 is associated with greater improvement, but no cause-and-effect conclusion can be drawn." },
      // distractor: throws out the study; random assignment still supports a causal claim for the participants
      { id: "D", text: "No conclusion can be drawn, because the volunteers were not selected at random from all adults." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Random assignment supports cause and effect; random selection supports generalization. This study has the first but not the second, so the causal claim holds for the participants but cannot be extended to all adults.\n\n**The Full Solution:**\nStep 1: Check for random assignment. Each volunteer was randomly assigned to a routine, which balances other factors between the two groups and allows the difference in improvement to be attributed to the routines.\nStep 2: Check for random selection. The participants were volunteers from one community center, not a random sample of adults, so they may differ from adults in general.\nStep 3: Combine the two: a cause-and-effect conclusion is justified for the $90$ participants, but generalizing that conclusion to all adults is not. Check: choice A states exactly this pairing. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: it keeps the causal claim but wrongly extends it to all adults, ignoring that the volunteers were not randomly selected.\n* Choice C: it treats the study as observational; random assignment is what distinguishes this experiment from an observational study.\n* Choice D: the lack of random selection limits generalization, but it does not erase the causal evidence that random assignment provides.\n\n**Test Day Takeaway:** Two separate questions: Was treatment randomly assigned (causation)? Were participants randomly selected (generalization)? Answer each on its own.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "scope-of-inference",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── PERCENT GREATER THAN / LESS THAN (bank-ps-249..256) ──────────────────
  // Verbal framing translation: "y is X% greater than z" → y = (1 + X/100)·z;
  // "y is X% less than z" → y = (1 − X/100)·z. Distinct from percent-decrease
  // (compute change from two given numbers). See audit §B3.
  {
    id: "bank-ps-249",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-change"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The value of $k$ is $35\\%$ greater than $60$. What is the value of $k$?",
    choices: [
      // distractor: reports 35% of 60, the increase itself, instead of the increased value
      { id: "A", text: "$21$" },
      // distractor: subtracts the 35% instead of adding it (60 - 21)
      { id: "B", text: "$39$" },
      { id: "C", text: "$81$" },
      // distractor: adds 35 as a number of units instead of as a percent (60 + 35)
      { id: "D", text: "$95$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** \"$35\\%$ greater than $60$\" means $60$ plus $35\\%$ of $60$: $60 \\times 1.35 = 81$.\n\n**The Full Solution:**\nStep 1: Translate the phrase. A quantity that is $35\\%$ greater than $60$ equals $60 + 0.35(60)$, which is $(1 + 0.35)(60) = 1.35(60)$.\nStep 2: Compute: $0.35 \\times 60 = 21$, so $k = 60 + 21 = 81$.\nStep 3: Check: $81 - 60 = 21$, and $\\frac{21}{60} = 0.35 = 35\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($21$): $0.35 \\times 60 = 21$ is the amount of the increase, not the value of $k$.\n* Choice B ($39$): $60 - 21 = 39$ is $35\\%$ less than $60$; the sign of the change is reversed.\n* Choice D ($95$): $60 + 35 = 95$ adds $35$ as if it were a number of units rather than a percent of $60$.\n\n**Test Day Takeaway:** \"$p\\%$ greater than $N$\" is $N\\left(1 + \\frac{p}{100}\\right)$; compute the multiplier first, then multiply once.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-greater-than-less-than",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-250",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-change"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The value of $r$ is $45\\%$ less than $120$. What is the value of $r$?",
    choices: [
      // distractor: reports 45% of 120, the decrease itself, instead of the decreased value
      { id: "A", text: "$54$" },
      { id: "B", text: "$66$" },
      // distractor: subtracts 45 as a number of units instead of as a percent (120 - 45)
      { id: "C", text: "$75$" },
      // distractor: adds the 45% instead of subtracting it (120 + 54)
      { id: "D", text: "$174$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"$45\\%$ less than $120$\" keeps $55\\%$ of $120$: $0.55 \\times 120 = 66$.\n\n**The Full Solution:**\nStep 1: Translate the phrase. A quantity that is $45\\%$ less than $120$ equals $120 - 0.45(120) = (1 - 0.45)(120) = 0.55(120)$.\nStep 2: Compute: $0.45 \\times 120 = 54$, so $r = 120 - 54 = 66$.\nStep 3: Check: $120 - 66 = 54$, and $\\frac{54}{120} = 0.45 = 45\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($54$): $0.45 \\times 120 = 54$ is the amount removed, not what remains.\n* Choice C ($75$): $120 - 45 = 75$ subtracts $45$ as a number of units rather than as $45\\%$ of $120$.\n* Choice D ($174$): $120 + 54 = 174$ is $45\\%$ greater than $120$; the direction of the change is reversed.\n\n**Test Day Takeaway:** \"$p\\%$ less than $N$\" is $N\\left(1 - \\frac{p}{100}\\right)$; find what percent remains before multiplying.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-greater-than-less-than",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-251",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-change"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The value of $a$ is $65\\%$ greater than the value of $b$, where $b > 0$. Which of the following expressions represents $a$ in terms of $b$?",
    choices: [
      // distractor: uses 1 - 0.65, which is 65% less than b
      { id: "A", text: "$0.35b$" },
      // distractor: gives 65% of b, dropping the original 100%
      { id: "B", text: "$0.65b$" },
      { id: "C", text: "$1.65b$" },
      // distractor: never converts the percent to a decimal
      { id: "D", text: "$65b$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** \"$65\\%$ greater than $b$\" is all of $b$ plus $65\\%$ more: $b + 0.65b = 1.65b$.\n\n**The Full Solution:**\nStep 1: Write $65\\%$ as the decimal $0.65$. Then $65\\%$ of $b$ is $0.65b$.\nStep 2: A value that is $65\\%$ greater than $b$ is $b$ increased by that amount: $a = b + 0.65b$.\nStep 3: Combine like terms: $a = (1 + 0.65)b = 1.65b$. Check with $b = 100$: $a$ should be $165$, and $1.65(100) = 165$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.35b$): $1 - 0.65 = 0.35$ describes a value $65\\%$ less than $b$, the opposite direction.\n* Choice B ($0.65b$): this is $65\\%$ of $b$, the increase alone, without the original $b$.\n* Choice D ($65b$): treats the percent $65$ as the multiplier without dividing by $100$; this would be $6{,}400\\%$ greater than $b$.\n\n**Test Day Takeaway:** \"Greater than\" adds to $1$; \"of\" does not. $p\\%$ greater than $b$ is $\\left(1 + \\frac{p}{100}\\right)b$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-greater-than-less-than",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-252",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-change"],
    difficulty: "medium",
    type: "fill-in",
    question: "The value of $c$ is $36\\%$ less than the value of $d$. If $d = 425$, what is the value of $c$?",
    correctAnswer: "272",
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**The correct answer is $272$.**\n\n**The Fast Way (~10s):** $36\\%$ less leaves $64\\%$: $0.64 \\times 425 = 272$.\n\n**The Full Solution:**\nStep 1: A value $36\\%$ less than $d$ is $d - 0.36d = 0.64d$.\nStep 2: Substitute $d = 425$: $c = 0.64(425)$.\nStep 3: Compute: $0.64 \\times 425 = 0.64 \\times 400 + 0.64 \\times 25 = 256 + 16 = 272$. Check: $425 - 272 = 153$, and $\\frac{153}{425} = 0.36$. $\\checkmark$\n\n**Common Mistakes:** Entering $153$, which is $36\\%$ of $425$ (the decrease, not the result); entering $389$, from $425 - 36$, which subtracts $36$ as units rather than as a percent; entering $578$, from $1.36 \\times 425$, which increases instead of decreases.\n\n**Test Day Takeaway:** For \"$p\\%$ less than,\" multiply by $1 - \\frac{p}{100}$ in one step rather than computing the decrease and subtracting.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-greater-than-less-than",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-253",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-change"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The value of $m$ is $60\\%$ greater than the value of $n$, where $n > 0$. The value of $n$ is $p\\%$ less than the value of $m$. What is the value of $p$?",
    choices: [
      { id: "A", text: "$37.5$" },
      // distractor: computes 100 - 60 = 40, subtracting the percent from 100
      { id: "B", text: "$40$" },
      // distractor: assumes the percent less equals the percent greater
      { id: "C", text: "$60$" },
      // distractor: reports n as a percent of m (100/1.6) instead of the percent less
      { id: "D", text: "$62.5$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $m = 1.6n$, so $n = \\frac{m}{1.6} = 0.625m$. Then $n$ is $1 - 0.625 = 0.375$, or $37.5\\%$, less than $m$.\n\n**The Full Solution:**\nStep 1: Translate the first sentence: $m = n + 0.60n = 1.6n$.\nStep 2: Express $n$ as a fraction of $m$: $n = \\frac{m}{1.6} = \\frac{10m}{16} = \\frac{5}{8}m = 0.625m$.\nStep 3: The percent less is based on $m$: $\\frac{m - n}{m} = \\frac{m - 0.625m}{m} = 0.375 = 37.5\\%$. Check with $n = 100$: $m = 160$, and $\\frac{160 - 100}{160} = \\frac{60}{160} = 0.375$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($40$): $100 - 60 = 40$ subtracts the percent from $100$, which has no meaning here.\n* Choice C ($60$): assumes the percent less equals the percent greater, but the bases differ: $60$ is $60\\%$ of $100$ yet only $37.5\\%$ of $160$.\n* Choice D ($62.5$): $\\frac{100}{1.6} = 62.5$ is what percent $n$ is OF $m$, not what percent LESS than $m$.\n\n**Test Day Takeaway:** Percent change depends on its base. Going up by $p\\%$ and coming back down are different percents because the base changes.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-greater-than-less-than",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-254",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-change"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The value of $s$ is $85\\%$ less than the value of $t$, where $t > 0$. The value of $s$ is what fraction of the value of $t$?",
    choices: [
      { id: "A", text: "$\\frac{3}{20}$" },
      // distractor: divides the percent kept by the percent removed (15/85)
      { id: "B", text: "$\\frac{3}{17}$" },
      // distractor: uses the percent removed, 85/100, as the fraction kept
      { id: "C", text: "$\\frac{17}{20}$" },
      // distractor: reciprocal of the correct fraction: t as a fraction of s
      { id: "D", text: "$\\frac{20}{3}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Removing $85\\%$ leaves $15\\%$, and $15\\% = \\frac{15}{100} = \\frac{3}{20}$.\n\n**The Full Solution:**\nStep 1: A value $85\\%$ less than $t$ is $t - 0.85t = 0.15t$.\nStep 2: So $s = 0.15t$, which means $\\frac{s}{t} = 0.15$.\nStep 3: Write $0.15$ as a fraction in lowest terms: $\\frac{15}{100} = \\frac{3}{20}$. Check with $t = 20$: $85\\%$ of $20$ is $17$, so $s = 20 - 17 = 3$, and $\\frac{3}{20}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{3}{17}$): $\\frac{15}{85}$ compares the part kept to the part removed instead of to the whole.\n* Choice C ($\\frac{17}{20}$): $\\frac{85}{100}$ is the fraction removed, not the fraction that remains.\n* Choice D ($\\frac{20}{3}$): this is $\\frac{t}{s}$, the reciprocal; the question asks for $s$ as a fraction of $t$.\n\n**Test Day Takeaway:** \"$p\\%$ less\" keeps $(100 - p)\\%$; convert that remaining percent to a fraction over $100$ and reduce.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-greater-than-less-than",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-255",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-change"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The value of $x$ is $p\\%$ greater than $40$, where $p$ is a positive constant. If $x = 160$, what is the value of $p$?",
    choices: [
      // distractor: computes the percent that 40 is less than 160 (120/160), using the wrong base
      { id: "A", text: "$75$" },
      // distractor: reports the difference 160 - 40 as if it were the percent
      { id: "B", text: "$120$" },
      { id: "C", text: "$300$" },
      // distractor: reports the ratio 160/40 as a percent, forgetting to subtract the original 100%
      { id: "D", text: "$400$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $160$ is $4$ times $40$, so the increase is $3$ times $40$, which is $300\\%$ of $40$.\n\n**The Full Solution:**\nStep 1: Translate: $x = 40\\left(1 + \\frac{p}{100}\\right)$. Substitute $x = 160$: $160 = 40\\left(1 + \\frac{p}{100}\\right)$.\nStep 2: Divide by $40$: $4 = 1 + \\frac{p}{100}$, so $\\frac{p}{100} = 3$.\nStep 3: Multiply by $100$: $p = 300$. Check: $300\\%$ of $40$ is $120$, and $40 + 120 = 160$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($75$): $\\frac{160 - 40}{160} = 0.75$ uses $160$ as the base; that is the percent by which $40$ is LESS than $160$.\n* Choice B ($120$): $160 - 40 = 120$ is the increase in units, not the increase as a percent of $40$.\n* Choice D ($400$): $\\frac{160}{40} = 4 = 400\\%$ is what percent $160$ is OF $40$; \"greater than\" requires subtracting the original $100\\%$.\n\n**Test Day Takeaway:** Percent greater $= \\frac{\\text{new} - \\text{original}}{\\text{original}} \\times 100$; the base is always the original value.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-greater-than-less-than",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-256",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-change"],
    difficulty: "hard",
    type: "fill-in",
    question: "The number of public charging ports for electric vehicles in a state was $12{,}500$ in 2020. The number in 2022 was $45\\%$ greater than the number in 2020, and the number in 2024 was $20\\%$ greater than the number in 2022. The number of charging ports in 2024 was what percent greater than the number in 2020?",
    correctAnswer: "74",
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**The correct answer is $74$.**\n\n**The Fast Way (~15s):** Multiply the growth factors: $1.45 \\times 1.20 = 1.74$, so 2024 is $74\\%$ greater than 2020. The $12{,}500$ is not needed.\n\n**The Full Solution:**\nStep 1: 2022 count: $12{,}500 \\times 1.45 = 18{,}125$.\nStep 2: 2024 count: $18{,}125 \\times 1.20 = 21{,}750$.\nStep 3: Percent greater than 2020: $\\frac{21{,}750 - 12{,}500}{12{,}500} = \\frac{9{,}250}{12{,}500} = 0.74$, so $74\\%$. Check: $1.45 \\times 1.20 = 1.74$, and $1.74 - 1 = 0.74$. $\\checkmark$\n\n**Common Mistakes:** Entering $65$, from adding $45 + 20$, which ignores that the second increase applies to a larger base; entering $174$, which is what percent the 2024 number is OF the 2020 number rather than greater than it; entering $9250$, the raw increase in ports instead of the percent.\n\n**Test Day Takeaway:** Successive percent changes multiply their factors; subtract $1$ from the product to get the overall percent change.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-greater-than-less-than",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── COMPOUND PERCENT OF — TIER-1 PROMOTION (bank-ps-257..261) ────────────
  // Existing 3 items + 5 new = 8 (Tier-1 threshold). Count-anchored flavor:
  // 'N people, X% are A, of those Y% are also B → count of A AND B.' Distinct
  // from chained-percent-relationship (no count anchor; pure algebraic).
  {
    id: "bank-ps-257",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A plant nursery has $600$ seedlings. Of these seedlings, $35\\%$ are oak seedlings, and $40\\%$ of the oak seedlings are taller than $1$ meter. How many of the nursery's seedlings are oak seedlings taller than $1$ meter?",
    choices: [
      { id: "A", text: "$84$" },
      // distractor: stops after the first percent: 35% of 600 (all oak seedlings)
      { id: "B", text: "$210$" },
      // distractor: applies the second percent to all 600 seedlings (40% of 600)
      { id: "C", text: "$240$" },
      // distractor: adds the two percents and takes 75% of 600
      { id: "D", text: "$450$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Compound Percent Of**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Chain the percents: $600 \\times 0.35 \\times 0.40 = 84$.\n\n**The Full Solution:**\nStep 1: Oak seedlings: $35\\%$ of $600$ is $0.35 \\times 600 = 210$.\nStep 2: The $40\\%$ applies to the oak seedlings, not to all seedlings: $0.40 \\times 210 = 84$.\nStep 3: Check by combining the percents first: $0.35 \\times 0.40 = 0.14$, and $0.14 \\times 600 = 84$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($210$): this is the number of oak seedlings; the second condition (taller than $1$ meter) was never applied.\n* Choice C ($240$): $0.40 \\times 600$ applies the $40\\%$ to every seedling, but the $40\\%$ refers only to the oak seedlings.\n* Choice D ($450$): $0.75 \\times 600$ adds the percents, but \"of those\" means the percents multiply, not add.\n\n**Test Day Takeaway:** \"$p\\%$ of a group, and $q\\%$ of those\" multiplies: total $\\times \\frac{p}{100} \\times \\frac{q}{100}$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "compound-percent-of",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-258",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A museum's collection contains $1{,}500$ artifacts. The table gives the percent of the collection in each category. If $12\\%$ of the pottery artifacts are currently on display, how many pottery artifacts are currently not on display?",
    questionTable: { headers: ["Category", "Percent of collection"], rows: [["Pottery", "30%"], ["Tools", "25%"], ["Textiles", "20%"], ["Coins", "25%"]] },
    choices: [
      // distractor: reports the pottery artifacts that ARE on display (12% of 450)
      { id: "A", text: "$54$" },
      { id: "B", text: "$396$" },
      // distractor: reports all pottery artifacts, never applying the display condition
      { id: "C", text: "$450$" },
      // distractor: applies the 88% not-on-display rate to the whole collection instead of to pottery
      { id: "D", text: "$1{,}320$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Compound Percent Of**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Pottery is $30\\%$ of $1{,}500$, or $450$ artifacts. If $12\\%$ are on display, $88\\%$ are not: $0.88 \\times 450 = 396$.\n\n**The Full Solution:**\nStep 1: From the table, pottery is $30\\%$ of the collection: $0.30 \\times 1{,}500 = 450$ pottery artifacts.\nStep 2: The $12\\%$ applies to pottery only. On display: $0.12 \\times 450 = 54$.\nStep 3: Not on display: $450 - 54 = 396$. Check: $0.88 \\times 450 = 396$, and $54 + 396 = 450$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($54$): this is the number of pottery artifacts on display; the question asks for those not on display.\n* Choice C ($450$): the total number of pottery artifacts, which ignores the display condition entirely.\n* Choice D ($1{,}320$): $0.88 \\times 1{,}500$ applies the complement to the entire collection, but the $12\\%$ was stated for pottery alone.\n\n**Test Day Takeaway:** Read a table percent as a percent of the stated whole, then apply any later percent to that smaller group; \"not\" means use the complement of the last percent.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "compound-percent-of",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-259",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "On a typical day, $2{,}400$ passengers ride a certain ferry route. Of these passengers, $55\\%$ are commuters, and $30\\%$ of the commuters hold monthly passes. How many of the day's passengers are commuters who do not hold monthly passes?",
    choices: [
      // distractor: reports commuters WITH monthly passes (30% of 1,320)
      { id: "A", text: "$396$" },
      { id: "B", text: "$924$" },
      // distractor: reports all commuters, never applying the pass condition
      { id: "C", text: "$1{,}320$" },
      // distractor: applies the 70% to all passengers instead of to commuters
      { id: "D", text: "$1{,}680$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Compound Percent Of**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Commuters: $0.55 \\times 2{,}400 = 1{,}320$. Without passes: $70\\%$ of those, $0.70 \\times 1{,}320 = 924$.\n\n**The Full Solution:**\nStep 1: Commuters are $55\\%$ of $2{,}400$: $0.55 \\times 2{,}400 = 1{,}320$.\nStep 2: If $30\\%$ of commuters hold passes, then $100\\% - 30\\% = 70\\%$ do not.\nStep 3: Commuters without passes: $0.70 \\times 1{,}320 = 924$. Check: with passes, $0.30 \\times 1{,}320 = 396$, and $396 + 924 = 1{,}320$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($396$): $0.30 \\times 1{,}320$ counts the commuters who DO hold passes.\n* Choice C ($1{,}320$): the total number of commuters; the pass condition was not applied.\n* Choice D ($1{,}680$): $0.70 \\times 2{,}400$ applies the $70\\%$ to all passengers, but the $30\\%$ was a percent of commuters.\n\n**Test Day Takeaway:** Each \"of\" sets a new base. Find the group, then take the percent (or its complement) of that group only.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "compound-percent-of",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-260",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "medium",
    type: "fill-in",
    question: "A scholarship program received $8{,}500$ applications. Of the applicants, $24\\%$ were invited to interview, and $15\\%$ of the applicants who interviewed were awarded a scholarship. How many applicants were awarded a scholarship?",
    correctAnswer: "306",
    explanation: "**SAT Pattern: Compound Percent Of**\n\n**The correct answer is $306$.**\n\n**The Fast Way (~10s):** $8{,}500 \\times 0.24 \\times 0.15 = 306$.\n\n**The Full Solution:**\nStep 1: Applicants invited to interview: $0.24 \\times 8{,}500 = 2{,}040$.\nStep 2: The $15\\%$ applies to those $2{,}040$ interviewees: $0.15 \\times 2{,}040 = 306$.\nStep 3: Check by combining the percents: $0.24 \\times 0.15 = 0.036$, and $0.036 \\times 8{,}500 = 306$. $\\checkmark$\n\n**Common Mistakes:** Entering $2040$, which stops after the interview stage; entering $1275$, from $0.15 \\times 8{,}500$, which applies the $15\\%$ to all applicants instead of to interviewees; entering $3315$, from $0.39 \\times 8{,}500$, which adds the percents instead of multiplying them.\n\n**Test Day Takeaway:** Percents that describe a subgroup multiply; compute the subgroup first, then take the next percent of it.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "compound-percent-of",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-261",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A mosaic is made of $360$ tiles. The table gives the fraction of the tiles made of each material. If $40\\%$ of the glass tiles are blue, how many of the tiles in the mosaic are glass tiles that are not blue?",
    questionTable: { headers: ["Material", "Fraction of tiles"], rows: [["Glass", "$\\frac{5}{8}$"], ["Stone", "$\\frac{1}{4}$"], ["Ceramic", "$\\frac{1}{8}$"]] },
    choices: [
      // distractor: reports the blue glass tiles (40% of 225)
      { id: "A", text: "$90$" },
      { id: "B", text: "$135$" },
      // distractor: applies 40% to all 360 tiles instead of to the glass tiles
      { id: "C", text: "$144$" },
      // distractor: applies the 60% complement to all 360 tiles instead of to the glass tiles
      { id: "D", text: "$216$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Compound Percent Of**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Glass tiles: $\\frac{5}{8}(360) = 225$. Not blue means $60\\%$ of those: $0.60 \\times 225 = 135$.\n\n**The Full Solution:**\nStep 1: From the table, $\\frac{5}{8}$ of the tiles are glass: $\\frac{5}{8} \\times 360 = 225$ glass tiles.\nStep 2: $40\\%$ of the glass tiles are blue, so $60\\%$ of the glass tiles are not blue.\nStep 3: Glass tiles that are not blue: $0.60 \\times 225 = 135$. Check: blue glass tiles are $0.40 \\times 225 = 90$, and $90 + 135 = 225$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($90$): $0.40 \\times 225$ counts the glass tiles that ARE blue.\n* Choice C ($144$): $0.40 \\times 360$ applies the $40\\%$ to every tile, but the percent was stated for glass tiles only.\n* Choice D ($216$): $0.60 \\times 360$ takes the correct complement but applies it to the whole mosaic instead of to the $225$ glass tiles.\n\n**Test Day Takeaway:** A fraction from a table and a percent in the stem are both \"of\" operators; apply them in order to successively smaller groups, using the complement when the question says \"not.\"",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "compound-percent-of",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── PROBABILITY WITHOUT REPLACEMENT (bank-ps-262..269) ───────────────────
  // Sequential probabilities where the population shrinks. Distinct from
  // with-replacement because the second draw's denominator is N-1, not N.
  {
    id: "bank-ps-262",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A bin contains $6$ orange tokens and $4$ purple tokens. Two tokens will be selected at random from the bin, one after the other, without replacement. What is the probability that both tokens selected are orange?",
    choices: [
      // distractor: probability of orange then purple (6/10 times 4/9)
      { id: "A", text: "$\\frac{4}{15}$" },
      { id: "B", text: "$\\frac{1}{3}$" },
      // distractor: with replacement: (6/10)(6/10), never reducing the counts
      { id: "C", text: "$\\frac{9}{25}$" },
      // distractor: stops after the first draw (6/10)
      { id: "D", text: "$\\frac{3}{5}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Probability Without Replacement**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** First orange: $\\frac{6}{10}$. Second orange, with one orange gone: $\\frac{5}{9}$. Multiply: $\\frac{6}{10} \\times \\frac{5}{9} = \\frac{30}{90} = \\frac{1}{3}$.\n\n**The Full Solution:**\nStep 1: There are $6 + 4 = 10$ tokens, so the probability the first token is orange is $\\frac{6}{10}$.\nStep 2: After removing one orange token, $5$ orange tokens remain among $9$ tokens, so the probability the second is orange is $\\frac{5}{9}$.\nStep 3: Multiply the probabilities of the two draws: $\\frac{6}{10} \\times \\frac{5}{9} = \\frac{30}{90} = \\frac{1}{3}$. Check: the number of orange pairs is $\\frac{6 \\times 5}{2} = 15$ out of $\\frac{10 \\times 9}{2} = 45$ pairs, and $\\frac{15}{45} = \\frac{1}{3}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{4}{15}$): $\\frac{6}{10} \\times \\frac{4}{9} = \\frac{24}{90}$ is the probability of orange followed by purple.\n* Choice C ($\\frac{9}{25}$): $\\frac{6}{10} \\times \\frac{6}{10}$ treats the second draw as if the first token were put back.\n* Choice D ($\\frac{3}{5}$): $\\frac{6}{10}$ is the probability of the first draw alone; the second draw was never included.\n\n**Test Day Takeaway:** Without replacement, both the numerator and the denominator drop by $1$ for the second draw when the first draw succeeded.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "probability-without-replacement",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-263",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The table shows the number of seed packets of each type in a box. Two packets will be selected at random from the box, one after the other, without replacement. What is the probability that the first packet selected is tomato and the second packet selected is pepper?",
    diagram: { type: "dataTable", params: { headers: ["Type of seed", "Number of packets"], rows: [["Tomato", "8"], ["Pepper", "5"], ["Squash", "3"]] } },
    choices: [
      // distractor: with replacement: 8/16 times 5/16, never reducing the total
      { id: "A", text: "$\\frac{5}{32}$" },
      { id: "B", text: "$\\frac{1}{6}$" },
      // distractor: uses only the second draw, 5/15
      { id: "C", text: "$\\frac{1}{3}$" },
      // distractor: adds 8/16 + 5/16 instead of multiplying
      { id: "D", text: "$\\frac{13}{16}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Probability Without Replacement**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Total packets: $8 + 5 + 3 = 16$. Tomato first: $\\frac{8}{16}$; pepper second from the remaining $15$: $\\frac{5}{15}$. Product: $\\frac{8}{16} \\times \\frac{5}{15} = \\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$.\n\n**The Full Solution:**\nStep 1: Add the table's counts: $8 + 5 + 3 = 16$ packets. The probability the first packet is tomato is $\\frac{8}{16} = \\frac{1}{2}$.\nStep 2: One packet is gone, leaving $15$; all $5$ pepper packets remain, so the probability the second is pepper is $\\frac{5}{15} = \\frac{1}{3}$.\nStep 3: Multiply: $\\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$. Check: $\\frac{8 \\times 5}{16 \\times 15} = \\frac{40}{240} = \\frac{1}{6}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{5}{32}$): $\\frac{8}{16} \\times \\frac{5}{16} = \\frac{40}{256}$ keeps the denominator at $16$, as if the first packet were replaced.\n* Choice C ($\\frac{1}{3}$): $\\frac{5}{15}$ is the second draw's probability alone; the first draw was dropped.\n* Choice D ($\\frac{13}{16}$): $\\frac{8}{16} + \\frac{5}{16}$ adds the probabilities, which would answer \"tomato OR pepper on a single draw.\"\n\n**Test Day Takeaway:** When the first draw is a different type from the second, only the denominator shrinks for the second draw; the numerator stays at the full count of the second type.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "probability-without-replacement",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-264",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A shipment contains $40$ batteries, $5$ of which are defective. Two batteries will be selected at random from the shipment without replacement. What is the probability that both batteries selected are defective?",
    choices: [
      { id: "A", text: "$\\frac{1}{78}$" },
      // distractor: with replacement: (5/40)(5/40) = 25/1600
      { id: "B", text: "$\\frac{1}{64}$" },
      // distractor: stops after the first draw (5/40)
      { id: "C", text: "$\\frac{1}{8}$" },
      // distractor: adds 5/40 + 5/40 instead of multiplying
      { id: "D", text: "$\\frac{1}{4}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Probability Without Replacement**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $\\frac{5}{40} \\times \\frac{4}{39} = \\frac{1}{8} \\times \\frac{4}{39} = \\frac{4}{312} = \\frac{1}{78}$.\n\n**The Full Solution:**\nStep 1: First draw: $5$ defective out of $40$, so $\\frac{5}{40} = \\frac{1}{8}$.\nStep 2: Second draw, after one defective battery is removed: $4$ defective out of $39$, so $\\frac{4}{39}$.\nStep 3: Multiply: $\\frac{1}{8} \\times \\frac{4}{39} = \\frac{4}{312} = \\frac{1}{78}$. Check: $\\frac{5 \\times 4}{40 \\times 39} = \\frac{20}{1{,}560} = \\frac{1}{78}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{1}{64}$): $\\frac{5}{40} \\times \\frac{5}{40} = \\frac{25}{1{,}600}$ assumes the first battery is returned before the second draw.\n* Choice C ($\\frac{1}{8}$): $\\frac{5}{40}$ is the probability that only the first battery is defective.\n* Choice D ($\\frac{1}{4}$): $\\frac{5}{40} + \\frac{5}{40}$ adds when the two draws must both happen, which calls for multiplying.\n\n**Test Day Takeaway:** \"Both\" means multiply; \"without replacement\" means the second fraction uses one fewer success and one fewer item.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "probability-without-replacement",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-265",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "medium",
    type: "fill-in",
    question: "A bag contains $9$ tickets, $4$ of which are prize tickets. Two tickets will be selected at random from the bag without replacement. What is the probability that neither of the tickets selected is a prize ticket?",
    correctAnswer: "5/18",
    explanation: "**SAT Pattern: Probability Without Replacement**\n\n**The correct answer is $\\frac{5}{18}$.**\n\n**The Fast Way (~10s):** Non-prize tickets: $9 - 4 = 5$. Neither is a prize: $\\frac{5}{9} \\times \\frac{4}{8} = \\frac{20}{72} = \\frac{5}{18}$.\n\n**The Full Solution:**\nStep 1: \"Neither is a prize ticket\" means both tickets are non-prize tickets, of which there are $9 - 4 = 5$.\nStep 2: First draw non-prize: $\\frac{5}{9}$. Second draw non-prize, with one non-prize ticket removed: $\\frac{4}{8}$.\nStep 3: Multiply: $\\frac{5}{9} \\times \\frac{4}{8} = \\frac{20}{72} = \\frac{5}{18}$. Check: the $\\frac{5 \\times 4}{2} = 10$ non-prize pairs out of $\\frac{9 \\times 8}{2} = 36$ total pairs gives $\\frac{10}{36} = \\frac{5}{18}$. $\\checkmark$\n\n**Common Mistakes:** Entering $25/81$, from $\\frac{5}{9} \\times \\frac{5}{9}$, which replaces the first ticket; entering $1/6$, from $\\frac{4}{9} \\times \\frac{3}{8} = \\frac{12}{72}$, which is the probability that BOTH are prize tickets; entering $13/18$, the complement $1 - \\frac{5}{18}$, which is the probability of at least one prize ticket.\n\n**Test Day Takeaway:** Translate \"neither\" into \"both are the other kind,\" then multiply the two shrinking fractions.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "probability-without-replacement",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-266",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table shows the number of volunteers at a food bank by assigned role. Two of the volunteers will be selected at random, without replacement, to attend a training session. What is the probability that neither volunteer selected is a driver?",
    questionTable: { headers: ["Role", "Number of volunteers"], rows: [["Driver", "6"], ["Cook", "4"], ["Sorter", "5"]] },
    choices: [
      // distractor: probability that BOTH are drivers (6/15 times 5/14)
      { id: "A", text: "$\\frac{1}{7}$" },
      { id: "B", text: "$\\frac{12}{35}$" },
      // distractor: with replacement: (9/15)(9/15) = 81/225
      { id: "C", text: "$\\frac{9}{25}$" },
      // distractor: stops after the first draw (9/15)
      { id: "D", text: "$\\frac{3}{5}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Probability Without Replacement**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Total volunteers: $6 + 4 + 5 = 15$; non-drivers: $9$. Neither is a driver: $\\frac{9}{15} \\times \\frac{8}{14} = \\frac{72}{210} = \\frac{12}{35}$.\n\n**The Full Solution:**\nStep 1: From the table, there are $15$ volunteers, of whom $4 + 5 = 9$ are not drivers.\nStep 2: First selection is a non-driver: $\\frac{9}{15}$. Second selection is a non-driver, with one non-driver already chosen: $\\frac{8}{14}$.\nStep 3: Multiply: $\\frac{9}{15} \\times \\frac{8}{14} = \\frac{72}{210} = \\frac{12}{35}$. Check: $\\frac{12}{35} \\approx 0.34$, which is reasonable since a bit more than half the volunteers are non-drivers and both picks must be non-drivers. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{7}$): $\\frac{6}{15} \\times \\frac{5}{14} = \\frac{30}{210}$ is the probability that both volunteers ARE drivers.\n* Choice C ($\\frac{9}{25}$): $\\frac{9}{15} \\times \\frac{9}{15}$ keeps the counts fixed, as if the first volunteer could be selected again.\n* Choice D ($\\frac{3}{5}$): $\\frac{9}{15}$ covers the first selection only.\n\n**Test Day Takeaway:** \"Neither\" is a two-step event: count the \"other\" group from the table, then multiply two fractions that each shrink by $1$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "probability-without-replacement",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-267",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A case holds $10$ bottles of water: $7$ sparkling and $3$ still. Three bottles will be selected at random from the case without replacement. What is the probability that all three bottles selected are sparkling?",
    choices: [
      // distractor: probability that all three are STILL (3/10 times 2/9 times 1/8)
      { id: "A", text: "$\\frac{1}{120}$" },
      { id: "B", text: "$\\frac{7}{24}$" },
      // distractor: with replacement: (7/10)^3
      { id: "C", text: "$\\frac{343}{1000}$" },
      // distractor: stops after the first draw (7/10)
      { id: "D", text: "$\\frac{7}{10}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Probability Without Replacement**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $\\frac{7}{10} \\times \\frac{6}{9} \\times \\frac{5}{8} = \\frac{210}{720} = \\frac{7}{24}$.\n\n**The Full Solution:**\nStep 1: First bottle sparkling: $\\frac{7}{10}$.\nStep 2: Each later draw has one fewer sparkling bottle and one fewer bottle overall: second draw $\\frac{6}{9}$, third draw $\\frac{5}{8}$.\nStep 3: Multiply: $\\frac{7}{10} \\times \\frac{6}{9} \\times \\frac{5}{8} = \\frac{210}{720} = \\frac{7}{24}$. Check: $\\frac{7}{24} \\approx 0.29$, smaller than $\\frac{7}{10}$, as it must be since each extra requirement lowers the probability. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{120}$): $\\frac{3}{10} \\times \\frac{2}{9} \\times \\frac{1}{8} = \\frac{6}{720}$ is the probability that all three are still, the wrong type.\n* Choice C ($\\frac{343}{1000}$): $\\left(\\frac{7}{10}\\right)^3$ keeps every draw at $\\frac{7}{10}$, which requires replacing each bottle.\n* Choice D ($\\frac{7}{10}$): only the first draw was considered.\n\n**Test Day Takeaway:** For $k$ draws without replacement, write $k$ fractions whose numerators and denominators each step down by $1$, then multiply.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "probability-without-replacement",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-268",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The table shows the number of beads of each color in a pouch. Three beads will be selected at random from the pouch, one at a time without replacement. What is the probability that the three beads selected are all different colors?",
    diagram: { type: "dataTable", params: { headers: ["Color", "Number of beads"], rows: [["Amber", "5"], ["Clear", "4"], ["Blue", "3"]] } },
    choices: [
      // distractor: counts one color order only (5/12)(4/11)(3/10)
      { id: "A", text: "$\\frac{1}{22}$" },
      // distractor: multiplies the single-order probability by 3 instead of by 3! = 6
      { id: "B", text: "$\\frac{3}{22}$" },
      // distractor: with replacement: 6 times (5/12)(4/12)(3/12)
      { id: "C", text: "$\\frac{5}{24}$" },
      { id: "D", text: "$\\frac{3}{11}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Probability Without Replacement**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** One specific order, amber then clear then blue, has probability $\\frac{5}{12} \\times \\frac{4}{11} \\times \\frac{3}{10} = \\frac{60}{1{,}320} = \\frac{1}{22}$. Three different colors can come out in $3! = 6$ orders, each with this same probability, so the answer is $6 \\times \\frac{1}{22} = \\frac{6}{22} = \\frac{3}{11}$.\n\n**The Full Solution:**\nStep 1: From the table, there are $5 + 4 + 3 = 12$ beads. For the order amber, clear, blue: $\\frac{5}{12} \\times \\frac{4}{11} \\times \\frac{3}{10} = \\frac{60}{1{,}320}$.\nStep 2: Any other order of the three colors, such as blue, amber, clear, gives the same product $\\frac{3 \\times 5 \\times 4}{12 \\times 11 \\times 10}$ because the numerators are the same three counts and the denominators are the same $12, 11, 10$. There are $3 \\times 2 \\times 1 = 6$ such orders.\nStep 3: Total probability: $6 \\times \\frac{60}{1{,}320} = \\frac{360}{1{,}320} = \\frac{3}{11}$. Check: the number of unordered 3-bead selections is $\\frac{12 \\times 11 \\times 10}{6} = 220$, and one-of-each selections number $5 \\times 4 \\times 3 = 60$; $\\frac{60}{220} = \\frac{3}{11}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{22}$): counts only one order of the three colors; the question does not specify an order.\n* Choice B ($\\frac{3}{22}$): multiplies by $3$, the number of colors, instead of by $3! = 6$, the number of orders.\n* Choice C ($\\frac{5}{24}$): $6 \\times \\frac{5 \\times 4 \\times 3}{12^3} = \\frac{360}{1{,}728}$ keeps the denominator at $12$ for every draw, which assumes replacement.\n\n**Test Day Takeaway:** When no order is specified, compute one order's probability and multiply by the number of orders; without replacement, the denominators still step down $12, 11, 10$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "probability-without-replacement",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-269",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "hard",
    type: "fill-in",
    question: "A tray holds $10$ seedlings, $3$ of which are a dwarf variety. Three seedlings will be selected at random from the tray without replacement. What is the probability that exactly one of the seedlings selected is the dwarf variety?",
    correctAnswer: "21/40",
    explanation: "**SAT Pattern: Probability Without Replacement**\n\n**The correct answer is $\\frac{21}{40}$.**\n\n**The Fast Way (~20s):** One order, dwarf then two non-dwarf: $\\frac{3}{10} \\times \\frac{7}{9} \\times \\frac{6}{8} = \\frac{126}{720}$. The single dwarf can be first, second, or third, so multiply by $3$: $\\frac{378}{720} = \\frac{21}{40}$.\n\n**The Full Solution:**\nStep 1: There are $3$ dwarf and $7$ non-dwarf seedlings. For the order dwarf, non-dwarf, non-dwarf: $\\frac{3}{10} \\times \\frac{7}{9} \\times \\frac{6}{8} = \\frac{126}{720}$.\nStep 2: The orders non-dwarf, dwarf, non-dwarf and non-dwarf, non-dwarf, dwarf have the same product, since each uses numerators $3, 7, 6$ over denominators $10, 9, 8$. There are $3$ positions for the dwarf seedling.\nStep 3: Total: $3 \\times \\frac{126}{720} = \\frac{378}{720} = \\frac{21}{40}$. Check with counting: unordered selections number $\\frac{10 \\times 9 \\times 8}{6} = 120$; selections with exactly one dwarf number $3 \\times \\frac{7 \\times 6}{2} = 63$; $\\frac{63}{120} = \\frac{21}{40}$. $\\checkmark$\n\n**Common Mistakes:** Entering $7/40$, from $\\frac{126}{720}$, which counts only the order in which the dwarf seedling comes first; entering $7/24$, from $\\frac{7}{10} \\times \\frac{6}{9} \\times \\frac{5}{8} = \\frac{210}{720}$, which is the probability of NO dwarf seedling; entering $17/24$, the complement $1 - \\frac{7}{24}$, which is the probability of AT LEAST one dwarf seedling rather than exactly one.\n\n**Test Day Takeaway:** \"Exactly one\" means one success in any position: find one order's probability, then multiply by the number of positions the success can occupy.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "probability-without-replacement",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── Q.G. STATISTICAL CLAIMS — HEALTHY PUSH (bank-ps-270..273) ────────────
  // 2 obs-vs-exp + 2 scope-of-inference items to lift Q.G. from 16 → 20
  // (healthy CB-skill threshold).
  {
    id: "bank-ps-270",
    domain: "problem-solving",
    skills: ["observational-vs-experimental", "causation-vs-association"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A researcher recorded the type of thermostat and the monthly energy bill for each of $400$ households. Households with programmable thermostats had a lower mean monthly energy bill than households without programmable thermostats. Which of the following is the most appropriate conclusion?",
    choices: [
      // distractor: claims causation from an observational study with no random assignment
      { id: "A", text: "Installing a programmable thermostat causes a household's monthly energy bill to decrease." },
      // distractor: predicts the effect of an intervention that was never tested
      { id: "B", text: "Households without programmable thermostats would pay less if they installed one." },
      // distractor: denies any relationship although an association was observed
      { id: "C", text: "Programmable thermostats have no effect on monthly energy bills." },
      { id: "D", text: "For these households, thermostat type is associated with the monthly energy bill, but the study does not show that thermostat type affects the bill." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** The researcher only recorded what households already had; nobody assigned thermostats at random. Without random assignment, the data show an association, not a cause.\n\n**The Full Solution:**\nStep 1: Classify the study. Thermostat type was observed, not assigned, so this is an observational study.\nStep 2: In an observational study, other differences between the groups can explain the result. Households that install programmable thermostats may also have newer insulation, smaller homes, or more attention to energy use.\nStep 3: The appropriate conclusion is limited to an association between thermostat type and energy bill among these households. Check: only random assignment of thermostat type would let the difference in bills be attributed to the thermostats. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: \"causes\" requires an experiment with random assignment, which this study did not have.\n* Choice B: predicting what would happen after installing a thermostat is a causal claim in disguise.\n* Choice C: the study did observe a difference in mean bills; the limitation is about cause, not about whether an association exists.\n\n**Test Day Takeaway:** Observed, not assigned, means association only. Save the word \"causes\" for randomized experiments.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "observational-vs-experimental",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-271",
    domain: "problem-solving",
    skills: ["observational-vs-experimental", "causation-vs-association"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "An education researcher wants to determine whether a $20$-minute daily silent-reading period causes an increase in reading comprehension scores among the fourth-grade students in a certain district. Which of the following study designs would provide the strongest evidence of such a causal effect for the fourth-grade students in the district?",
    choices: [
      // distractor: observational: records an existing habit, so differences may be explained by other variables
      { id: "A", text: "Select $200$ fourth-grade students at random from the district and record, for each student, whether the student already has a daily silent-reading period and what the student's comprehension score is." },
      // distractor: volunteers self-select into the treatment group
      { id: "B", text: "Recruit $200$ fourth-grade students in the district whose families volunteer them for a daily silent-reading period, and compare their comprehension scores with the scores of students who do not participate." },
      // distractor: assignment is by prior score, not at random, and the sample comes from one school
      { id: "C", text: "Select $200$ fourth-grade students at random from one school in the district and assign the silent-reading period to the $100$ of them with the lowest comprehension scores." },
      { id: "D", text: "Select $200$ fourth-grade students at random from the district and randomly assign $100$ of them to a daily silent-reading period and the other $100$ to their usual schedule." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Only a design with random assignment of the treatment supports a causal conclusion, and only a random sample of the district supports applying that conclusion to the district. Choice D is the one design with both.\n\n**The Full Solution:**\nStep 1: A cause-and-effect conclusion requires that the researcher, not the students, decide who receives the reading period, and that this decision be made at random. Random assignment makes the two groups similar on every other variable, so a difference in mean comprehension score can be attributed to the reading period.\nStep 2: A conclusion about all fourth-grade students in the district requires that the students be selected at random from that district.\nStep 3: Check each design: only choice D selects at random from the district and then assigns the treatment at random. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: the random selection is there, but nothing is assigned; students who already read silently may differ from other students in ways (home support, prior skill) that also affect comprehension. This design supports association only.\n* Choice B: the students choose their own group, so the reading group is a self-selected group. Any difference could come from whatever led those families to volunteer.\n* Choice C: assigning the treatment to the $100$ lowest scorers builds a difference between the groups before the study starts, and drawing from one school limits the conclusion to that school.\n\n**Test Day Takeaway:** Random *assignment* buys cause and effect; random *selection* buys generalization. Read every design looking for those two words separately.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "observational-vs-experimental",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-272",
    domain: "problem-solving",
    skills: ["scope-of-inference", "sampling-and-generalization"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A grocery chain selected $300$ shoppers at random from the shoppers who used the chain's mobile app during a certain week and asked each of them whether they would use a proposed self-checkout feature. Of the shoppers selected, $64\\%$ said they would. Which of the following is the largest population to which this result can be generalized?",
    choices: [
      { id: "A", text: "All shoppers who used the chain's mobile app during that week" },
      // distractor: widens the population beyond the group the sample was drawn from
      { id: "B", text: "All shoppers who visited the chain's stores during that week" },
      // distractor: restricts the conclusion to the sample, ignoring that the sample was random
      { id: "C", text: "The $300$ shoppers who were selected" },
      // distractor: generalizes to shoppers at other chains, who were never in the sampling frame
      { id: "D", text: "All shoppers in the country who use a grocery store's mobile app" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** A random sample supports conclusions about the group it was drawn from. The shoppers were drawn from app users that week, so that is the largest population.\n\n**The Full Solution:**\nStep 1: Identify the sampling frame: the shoppers who used the chain's mobile app during that week. The $300$ shoppers were selected at random from that group.\nStep 2: Random selection from a population means the sample is representative of that population, so the $64\\%$ estimate applies to all app users that week.\nStep 3: Check the wider groups: shoppers who visited a store without using the app had no chance of being selected, so nothing in the design supports a claim about them. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: store visitors who never opened the app could not be selected, and app users may differ from them exactly in willingness to use new technology.\n* Choice C: the estimate does apply to the $300$ shoppers, but random selection buys more than that, so this is not the largest population.\n* Choice D: the survey involved one chain's app users; other chains' shoppers were never in the frame.\n\n**Test Day Takeaway:** Find the phrase after \"selected at random from\" — that group, exactly, is the answer.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "scope-of-inference",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-273",
    domain: "problem-solving",
    skills: ["scope-of-inference", "sampling-and-generalization"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A wildlife biologist studied the relationship between the age and the shell length of a certain species of turtle. The biologist selected $120$ turtles at random from all the turtles tagged in a nature reserve. The table shows the information for the $90$ selected turtles whose shell length was at least $12$ centimeters. Which of the following is the largest population to which the results of the study can be generalized?",
    diagram: { type: "twoWayTable", params: { headers: ["Shell length", "Less than 10 years old", "10 years old or more", "Total"], rows: [["12 to 20 centimeters", "34", "11", "45"], ["More than 20 centimeters", "6", "39", "45"], ["Total", "40", "50", "90"]] } },
    choices: [
      // distractor: stops at the subgroup displayed in the table
      { id: "A", text: "The $90$ selected turtles whose shell length was at least $12$ centimeters" },
      { id: "B", text: "All turtles tagged in the reserve" },
      // distractor: stops at the sample instead of the population it represents
      { id: "C", text: "The $120$ selected turtles" },
      // distractor: extends beyond the reserve, where no turtles could have been selected
      { id: "D", text: "All turtles of this species" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The turtles were selected at random from the tagged turtles in the reserve, so the results generalize to all tagged turtles in the reserve. The table is a subgroup of the sample, not the population.\n\n**The Full Solution:**\nStep 1: The population sampled is stated in the design: all turtles tagged in the reserve. The $120$ turtles were selected at random from that population.\nStep 2: Random selection of a reasonable-size sample makes the sample representative, so results from the sample can be applied to the tagged turtles in the reserve.\nStep 3: Check the two directions of error. Reporting the table's $90$ turtles or the $120$ selected turtles is too narrow, because random selection buys more; reporting all turtles of the species is too wide, because untagged turtles and turtles outside the reserve had no chance of selection. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: the table displays only the $90$ turtles with shell length at least $12$ centimeters, so this looks like the studied group; but the generalization is set by how the sample was drawn, not by which rows are shown.\n* Choice C: the $120$ selected turtles are the sample. A sample always describes itself; the point of random selection is that it also describes the population.\n* Choice D: turtles of this species living outside the reserve, or inside it but untagged, were never in the sampling frame.\n\n**Test Day Takeaway:** Generalization is fixed by the sentence containing \"at random from,\" not by whichever subgroup the table happens to display.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "scope-of-inference",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── Q.F. CONFIDENCE INTERVAL INTERPRETATION (bank-ps-274..281) ───────────
  // Distinct from margin-of-error: focuses on CORRECTLY INTERPRETING the CI as
  // a probabilistic statement about the population, with the right scope.
  {
    id: "bank-ps-274",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "An agronomist selected $40$ fields at random from the corn fields in a county and measured the mass of one ear of corn from each selected field. The mean mass for the sample was estimated to be $285$ grams, with an associated margin of error of $12$ grams. Which of the following is the most appropriate conclusion about the mean mass of an ear of corn for all corn fields in the county?",
    choices: [
      { id: "A", text: "It is between $273$ grams and $297$ grams." },
      // distractor: subtracts the margin of error but never adds it, discarding the plausible values above the estimate
      { id: "B", text: "It is between $273$ grams and $285$ grams." },
      // distractor: adds the margin of error but never subtracts it, discarding the plausible values below the estimate
      { id: "C", text: "It is between $285$ grams and $297$ grams." },
      // distractor: takes the values outside the interval as the plausible ones
      { id: "D", text: "It is either less than $273$ grams or greater than $297$ grams." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Plausible values run from estimate minus margin to estimate plus margin: $285 - 12 = 273$ and $285 + 12 = 297$.\n\n**The Full Solution:**\nStep 1: The estimate is $285$ grams and the margin of error is $12$ grams.\nStep 2: The margin of error extends the estimate in both directions, so the plausible values are between $285 - 12 = 273$ grams and $285 + 12 = 297$ grams.\nStep 3: Check: the interval is centered at the estimate, and its half-width is $\\frac{297 - 273}{2} = 12$ grams, the given margin of error. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($273$ to $285$ grams): only the lower half of the interval; the margin of error was subtracted but never added, so this conclusion rules out plausible values above $285$ grams.\n* Choice C ($285$ to $297$ grams): only the upper half; the margin of error was added but never subtracted, so this conclusion rules out plausible values below $285$ grams.\n* Choice D: this names the values the data make *implausible*. The interval itself is the set of plausible values.\n\n**Test Day Takeaway:** A margin of error is a $\\pm$: build the interval by moving the same distance both ways from the estimate.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "confidence-interval-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-275",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A town's planning office surveyed $150$ households selected at random from the households in the town. Based on the survey, the proportion of the town's households that compost food waste is estimated to be $0.36$, with an associated margin of error of $0.05$. Which of the following is the interval of plausible values for the proportion of all households in the town that compost food waste?",
    choices: [
      // distractor: doubles the margin of error before building the interval
      { id: "A", text: "$0.26$ to $0.46$" },
      // distractor: uses the estimate itself as the upper endpoint
      { id: "B", text: "$0.31$ to $0.36$" },
      { id: "C", text: "$0.31$ to $0.41$" },
      // distractor: uses the estimate itself as the lower endpoint
      { id: "D", text: "$0.36$ to $0.41$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $0.36 - 0.05 = 0.31$ and $0.36 + 0.05 = 0.41$.\n\n**The Full Solution:**\nStep 1: The sample proportion is $0.36$ and the margin of error is $0.05$.\nStep 2: The plausible values are the estimate plus or minus the margin of error: from $0.36 - 0.05 = 0.31$ to $0.36 + 0.05 = 0.41$.\nStep 3: Check: the midpoint of $0.31$ and $0.41$ is $0.36$, and the half-width is $0.05$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.26$ to $0.46$): built from $0.36 \\pm 0.10$, doubling the margin of error.\n* Choice B ($0.31$ to $0.36$): the estimate is used as the top of the interval instead of its center.\n* Choice D ($0.36$ to $0.41$): the estimate is used as the bottom of the interval instead of its center.\n\n**Test Day Takeaway:** The estimate is always the midpoint of the interval. If a choice puts the estimate at an endpoint, it is wrong on sight.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "confidence-interval-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-276",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A regional planner surveyed $900$ residents selected at random from the residents of a county. Based on the survey, $47\\%$ of the county's residents would use a proposed bus route at least once each week, with an associated margin of error of $3\\%$. Which of the following conclusions is best supported by these results?",
    choices: [
      // distractor: treats the sample estimate as the exact population value
      { id: "A", text: "Exactly $47\\%$ of the county's residents would use the proposed route at least once each week." },
      // distractor: reaches past the top of the interval
      { id: "B", text: "More than $50\\%$ of the county's residents would use the proposed route at least once each week." },
      { id: "C", text: "It is plausible that between $44\\%$ and $50\\%$ of the county's residents would use the proposed route at least once each week." },
      // distractor: reaches past the bottom of the interval
      { id: "D", text: "Fewer than $44\\%$ of the county's residents would use the proposed route at least once each week." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $47\\% \\pm 3\\%$ gives plausible values from $44\\%$ to $50\\%$, and the only choice that reports that interval is choice C.\n\n**The Full Solution:**\nStep 1: The estimate from the random sample is $47\\%$, with a margin of error of $3\\%$.\nStep 2: The interval of plausible values for the percent of all county residents is $47\\% - 3\\% = 44\\%$ to $47\\% + 3\\% = 50\\%$.\nStep 3: Check the other claims against that interval: $44\\%$ and $50\\%$ are both plausible, so no claim that the true percent is above $50\\%$ or below $44\\%$ is supported, and no single value inside the interval is established as exact. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: $47\\%$ is the sample's value. The margin of error exists precisely because the population value is not known exactly.\n* Choice B: $50\\%$ is the top of the interval, so \"more than $50\\%$\" sits outside the plausible values.\n* Choice D: $44\\%$ is the bottom of the interval, so \"fewer than $44\\%$\" also sits outside it.\n\n**Test Day Takeaway:** Build the interval first, then keep only the choice whose claim stays inside it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "confidence-interval-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-277",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Based on a random sample of $250$ adult sockeye salmon from a river, the mean length of the adult sockeye salmon in that river was estimated with a $95\\%$ confidence interval of $58.4$ centimeters to $61.2$ centimeters. Which of the following statements is best supported by this interval?",
    choices: [
      // distractor: reports the interval's midpoint as an exact population value
      { id: "A", text: "The mean length of the adult sockeye salmon in the river is exactly $59.8$ centimeters." },
      { id: "B", text: "It is plausible that the mean length of the adult sockeye salmon in the river is $60.5$ centimeters." },
      // distractor: applies an interval for the mean to individual fish
      { id: "C", text: "Every adult sockeye salmon in the river has a length between $58.4$ centimeters and $61.2$ centimeters." },
      // distractor: rejects a value that lies inside the interval
      { id: "D", text: "It is not plausible that the mean length of the adult sockeye salmon in the river is $59.0$ centimeters." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** A confidence interval lists the plausible values of the population mean. $60.5$ lies between $58.4$ and $61.2$, so it is plausible.\n\n**The Full Solution:**\nStep 1: The interval $58.4$ to $61.2$ centimeters is an interval of plausible values for the mean length of all adult sockeye salmon in the river.\nStep 2: Test each candidate value against the interval: $60.5$ is inside it, so choice B's claim is supported.\nStep 3: Check the remaining claims. $59.8$ is the midpoint, which is the estimate, not a value the data prove exact; $59.0$ is also inside the interval, so it cannot be called implausible; and the interval describes a mean, not the lengths of individual salmon. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: $\\frac{58.4 + 61.2}{2} = 59.8$ is the sample estimate at the center of the interval, but the interval exists because the population mean is uncertain.\n* Choice C: individual salmon vary far more than their mean does; the interval bounds the mean only.\n* Choice D: $59.0$ is inside the interval, so the data support it rather than rule it out.\n\n**Test Day Takeaway:** \"Plausible\" means inside the interval, and the interval is about a mean, never about every individual.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "confidence-interval-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-278",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "medium",
    type: "fill-in",
    question: "Using a random sample of bats from a colony, a biologist estimated the mean wingspan of the bats in the colony. The resulting $95\\%$ confidence interval was $21.4$ centimeters to $24.6$ centimeters. What is the margin of error, in centimeters, associated with this estimate?",
    correctAnswer: "1.6",
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**The correct answer is $1.6$.**\n\n**The Fast Way (~10s):** The margin of error is half the width of the interval: $\\frac{24.6 - 21.4}{2} = \\frac{3.2}{2} = 1.6$.\n\n**The Full Solution:**\nStep 1: A confidence interval is built as estimate $\\pm$ margin of error, so the estimate sits at the midpoint and the margin of error is the distance from the midpoint to either endpoint.\nStep 2: The width of the interval is $24.6 - 21.4 = 3.2$ centimeters, which equals two margins of error, so the margin of error is $\\frac{3.2}{2} = 1.6$ centimeters.\nStep 3: Check by rebuilding the interval. The midpoint is $\\frac{21.4 + 24.6}{2} = 23$, and $23 \\pm 1.6$ gives $21.4$ to $24.6$. $\\checkmark$\n\n**Common Mistakes:**\n* Reporting $3.2$, the full width of the interval, without halving it.\n* Reporting $23$, which is the estimated mean wingspan (the midpoint), not the margin of error.\n* Reporting an endpoint such as $21.4$ or $24.6$, which are values of the wingspan, not a distance.\n\n**Test Day Takeaway:** Interval to margin of error: subtract the endpoints, then divide by $2$. Estimate to interval: add and subtract the margin.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "confidence-interval-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-279",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Two surveys of residents of the same city were conducted at the same time using the same methodology. Each survey estimated the percent of the city's residents who commute by rail. The table gives the estimate and the associated margin of error for each survey. Which of the following statements is best supported by the data in the table?",
    diagram: { type: "dataTable", params: { headers: ["Survey", "Estimated percent", "Margin of error"], rows: [["Survey 1", "38%", "2%"], ["Survey 2", "41%", "3%"]] } },
    choices: [
      // distractor: reads a change over time into two simultaneous surveys
      { id: "A", text: "The percent of the city's residents who commute by rail increased between the two surveys." },
      // distractor: confuses a larger estimate with a smaller margin of error
      { id: "B", text: "Survey 2 produced the more precise estimate, because its estimated percent is greater." },
      // distractor: compares point estimates while ignoring both margins of error
      { id: "C", text: "Because $41\\%$ is greater than $38\\%$, more than $40\\%$ of the city's residents commute by rail." },
      { id: "D", text: "The intervals of plausible values from the two surveys overlap, so both surveys are consistent with the same percent for the city's residents." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Survey 1 gives $38\\% \\pm 2\\%$, or $36\\%$ to $40\\%$; survey 2 gives $41\\% \\pm 3\\%$, or $38\\%$ to $44\\%$. The intervals share the values from $38\\%$ to $40\\%$, so one percent could produce both estimates.\n\n**The Full Solution:**\nStep 1: Build each interval of plausible values. Survey 1: $38 - 2 = 36$ to $38 + 2 = 40$. Survey 2: $41 - 3 = 38$ to $41 + 3 = 44$.\nStep 2: Compare them. The intervals overlap on $38\\%$ to $40\\%$, so a single population percent in that range is consistent with both surveys.\nStep 3: Check: because the overlap is not empty, the data do not establish that the two surveys are estimating different values, so no claim of a real difference is supported. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: the surveys were conducted at the same time, so there is no before and after to compare; a difference of $3$ percentage points between two estimates is not a change over time.\n* Choice B: precision is measured by the margin of error, and survey 2's margin ($3\\%$) is the larger of the two, so survey 2 is the less precise survey.\n* Choice C: this compares $38\\%$ and $41\\%$ as if both were exact. Since $36\\%$ is plausible from survey 1, the data do not establish that the percent exceeds $40\\%$.\n\n**Test Day Takeaway:** Two estimates differ meaningfully only when their intervals of plausible values do not overlap. Compare intervals, never the point estimates alone.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "confidence-interval-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-280",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In a study, $480$ volunteers with chronic knee pain were randomly assigned either to a new physical therapy protocol or to the standard protocol. The mean reduction in pain score for the new protocol exceeded that for the standard protocol by $1.5$ points, and the $95\\%$ confidence interval for this difference was $0.4$ point to $2.6$ points. Which of the following interpretations is most defensible?",
    choices: [
      // distractor: applies a difference of means to every individual
      { id: "A", text: "The new protocol reduces each volunteer's pain score by $1.5$ points more than the standard protocol does." },
      { id: "B", text: "Because the interval contains only positive values and the volunteers were assigned at random, the data support the conclusion that the new protocol produced a greater mean reduction for volunteers like those in the study." },
      // distractor: confuses random selection with random assignment
      { id: "C", text: "Because the volunteers were not selected at random from all adults with chronic knee pain, no cause-and-effect conclusion is possible for any group." },
      // distractor: treats the top endpoint as a guaranteed minimum and widens the population
      { id: "D", text: "The new protocol produces a mean reduction at least $2.6$ points greater than the standard protocol's for all adults with chronic knee pain." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The whole interval $0.4$ to $2.6$ is positive, so a difference of zero is not plausible; random assignment makes that difference causal; and because the volunteers were not randomly selected, the conclusion stays with volunteers like these.\n\n**The Full Solution:**\nStep 1: Read the interval. Every plausible value of the difference in mean reduction is greater than $0$, so the data support the conclusion that the new protocol did more on average.\nStep 2: Read the design. Volunteers were assigned to protocols at random, which is what licenses a cause-and-effect statement about the protocols.\nStep 3: Check the scope. The volunteers were not selected at random from all adults with chronic knee pain, so the conclusion is limited to people like the study's volunteers, which is exactly what choice B claims. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: $1.5$ points is a difference of group means; individual volunteers vary around it, and many may show more or less.\n* Choice C: random selection controls generalization, not causation. Random assignment was used, so a causal conclusion about the study's participants is supported.\n* Choice D: $2.6$ is the top of the interval, the largest difference still plausible, not a floor, and \"all adults with chronic knee pain\" goes beyond the group studied.\n\n**Test Day Takeaway:** On a randomized study, answer in two parts: the interval decides *whether* there is an effect, the sampling decides *whom* it applies to.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "confidence-interval-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-281",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "hard",
    type: "fill-in",
    question: "A survey of a random sample of households in a town estimated the mean daily water use per household; the resulting $95\\%$ confidence interval was $148$ liters to $172$ liters. A second survey of the town produced the same estimated mean but a margin of error one-fourth as large. What is the upper endpoint, in liters, of the second survey's $95\\%$ confidence interval?",
    correctAnswer: "163",
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**The correct answer is $163$.**\n\n**The Fast Way (~20s):** The first interval has midpoint $160$ and margin of error $12$. One-fourth of $12$ is $3$, so the new upper endpoint is $160 + 3 = 163$.\n\n**The Full Solution:**\nStep 1: Recover the estimate and the margin of error from the first interval. The estimate is the midpoint, $\\frac{148 + 172}{2} = 160$ liters, and the margin of error is half the width, $\\frac{172 - 148}{2} = 12$ liters.\nStep 2: The second survey has the same estimate, $160$ liters, and a margin of error of $\\frac{12}{4} = 3$ liters.\nStep 3: The second interval is $160 \\pm 3$, that is, $157$ to $163$ liters, so its upper endpoint is $163$. Check: its width is $163 - 157 = 6$, one-fourth of the first interval's width of $24$. $\\checkmark$\n\n**Common Mistakes:**\n* Reporting $166$: dividing the interval's *width* of $24$ by $4$ gives $6$, and $160 + 6 = 166$. The margin of error is half the width, not the width.\n* Reporting $160$: stopping at the estimate and forgetting to add the new margin of error.\n* Reporting $157$: giving the lower endpoint of the new interval instead of the upper endpoint.\n* Reporting $43$: dividing the old endpoint $172$ by $4$, which shrinks the whole endpoint instead of the margin of error.\n\n**Test Day Takeaway:** Turn any interval back into estimate $\\pm$ margin before doing anything else: midpoint for the estimate, half-width for the margin.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "confidence-interval-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── Q.F. SAMPLE SIZE FOR MARGIN REDUCTION (bank-ps-282..289) ─────────────
  // Cutting MOE in half requires quadrupling sample size (sqrt(n) relation).
  {
    id: "bank-ps-282",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A polling organization surveyed $250$ members of a professional association, selected at random, and obtained an estimate with a margin of error of $\\pm 6$ percentage points. To obtain an estimate with a margin of error of $\\pm 3$ percentage points using the same methodology, approximately how many members should the organization survey?",
    choices: [
      // distractor: divides the sample size by $2$ because the margin of error is divided by $2$
      { id: "A", text: "$125$" },
      // distractor: doubles the sample size, treating the margin of error as proportional to $\frac{1}{n}$
      { id: "B", text: "$500$" },
      { id: "C", text: "$1{,}000$" },
      // distractor: applies the factor of $4$ twice, multiplying by $16$
      { id: "D", text: "$4{,}000$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Margin of error scales like $\\frac{1}{\\sqrt{n}}$, so halving it requires $2^2 = 4$ times the sample: $4 \\times 250 = 1{,}000$.\n\n**The Full Solution:**\nStep 1: For a fixed confidence level and methodology, the margin of error is proportional to $\\frac{1}{\\sqrt{n}}$, where $n$ is the sample size.\nStep 2: The margin of error must go from $6$ to $3$ percentage points, a factor of $\\frac{1}{2}$. Since the margin depends on $\\sqrt{n}$, $\\sqrt{n}$ must double, so $n$ must be multiplied by $2^2 = 4$.\nStep 3: $4 \\times 250 = 1{,}000$ members. Check: $\\sqrt{1000} \\approx 31.6$ and $\\sqrt{250} \\approx 15.8$, and $\\frac{31.6}{15.8} = 2$, so the margin of error is halved. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($125$): halving the sample size along with the margin of error. A smaller sample makes the margin of error larger, not smaller.\n* Choice B ($500$): doubling the sample, which would work only if the margin of error were proportional to $\\frac{1}{n}$. Doubling $n$ shrinks the margin by a factor of $\\sqrt{2} \\approx 1.41$, not $2$.\n* Choice D ($4{,}000$): $16 \\times 250$, applying the factor of $4$ a second time.\n\n**Test Day Takeaway:** Divide the margin of error by $k$ by multiplying the sample size by $k^2$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "sample-size-for-margin-reduction",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-283",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "An estimate based on a random sample of $n$ employees at a company has a margin of error of $\\pm 6$ percentage points. If a second estimate for the same company uses a random sample of $9n$ employees and the same methodology, which of the following is the margin of error of the second estimate?",
    choices: [
      // distractor: divides by $9$ instead of by $\sqrt{9}$
      { id: "A", text: "$\\pm \\frac{2}{3}$ percentage point" },
      { id: "B", text: "$\\pm 2$ percentage points" },
      // distractor: halves the margin of error regardless of the factor $9$
      { id: "C", text: "$\\pm 3$ percentage points" },
      // distractor: multiplies by $3$ instead of dividing
      { id: "D", text: "$\\pm 18$ percentage points" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Multiplying the sample size by $9$ divides the margin of error by $\\sqrt{9} = 3$: $\\frac{6}{3} = 2$.\n\n**The Full Solution:**\nStep 1: The margin of error is proportional to $\\frac{1}{\\sqrt{n}}$, so replacing $n$ by $9n$ replaces $\\sqrt{n}$ by $\\sqrt{9n} = 3\\sqrt{n}$.\nStep 2: The margin of error is therefore divided by $3$: $\\frac{6}{3} = 2$ percentage points.\nStep 3: Check with the reverse rule: to divide a margin of error by $3$, multiply the sample size by $3^2 = 9$, which is exactly the change described. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\pm \\frac{2}{3}$ percentage point): $\\frac{6}{9}$, dividing by the sample-size factor itself instead of by its square root.\n* Choice C ($\\pm 3$ percentage points): halving the margin of error, which corresponds to multiplying the sample size by $4$, not $9$.\n* Choice D ($\\pm 18$ percentage points): $6 \\times 3$; a larger sample makes an estimate more precise, so the margin of error must go down.\n\n**Test Day Takeaway:** The sample-size factor goes under a square root before it touches the margin of error.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "sample-size-for-margin-reduction",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-284",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A research group ran a pilot survey and one follow-up survey and has planned a second follow-up survey. All three surveys use the same methodology and the same confidence level, differing only in sample size. The table gives the sample size and the margin of error, in percentage points, for each survey. What is the margin of error, in percentage points, for follow-up survey 2?",
    questionTable: { headers: ["Survey", "Sample size", "Margin of error"], rows: [["Pilot", "400", "6.0"], ["Follow-up 1", "900", "4.0"], ["Follow-up 2", "3,600", "?"]] },
    choices: [
      // distractor: divides $6.0$ by the sample-size ratio $9$ instead of by $\sqrt{9} = 3$
      { id: "A", text: "$0.67$" },
      { id: "B", text: "$2.0$" },
      // distractor: pairs the pilot's margin of error with follow-up survey 1's sample size
      { id: "C", text: "$3.0$" },
      // distractor: multiplies by $3$ instead of dividing
      { id: "D", text: "$18.0$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** From the pilot to follow-up survey 2, the sample size is multiplied by $\\frac{3600}{400} = 9$, so the margin of error is divided by $\\sqrt{9} = 3$: $\\frac{6.0}{3} = 2.0$.\n\n**The Full Solution:**\nStep 1: Confirm the rule with the two completed surveys. Going from $400$ to $900$ multiplies the sample size by $\\frac{9}{4}$, so the margin of error is divided by $\\sqrt{\\frac{9}{4}} = \\frac{3}{2}$: $6.0 \\div \\frac{3}{2} = 4.0$, matching the table.\nStep 2: Apply the same rule from the pilot to follow-up survey 2: $\\frac{3600}{400} = 9$, and $\\sqrt{9} = 3$, so the margin of error is $\\frac{6.0}{3} = 2.0$ percentage points.\nStep 3: Check from the other completed row: $\\frac{3600}{900} = 4$, $\\sqrt{4} = 2$, and $\\frac{4.0}{2} = 2.0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.67$): $\\frac{6.0}{9}$, dividing by the sample-size ratio without taking its square root.\n* Choice C ($3.0$): $\\frac{6.0}{2}$, which uses the ratio $\\frac{3600}{900} = 4$ and its square root $2$ but keeps the pilot's margin of error, mixing rows.\n* Choice D ($18.0$): $6.0 \\times 3$; multiplying instead of dividing makes the largest sample the least precise.\n\n**Test Day Takeaway:** When a table gives two complete rows, use them to confirm the $\\frac{1}{\\sqrt{n}}$ rule before extending it to the missing entry.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "sample-size-for-margin-reduction",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-285",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "medium",
    type: "fill-in",
    question: "A survey's margin of error must be reduced from $\\pm 7.5$ percentage points to $\\pm 1.5$ percentage points, with no change in methodology or confidence level. By what factor must the sample size be multiplied?",
    correctAnswer: "25",
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~15s):** The margin of error shrinks by a factor of $\\frac{7.5}{1.5} = 5$, so the sample size must grow by $5^2 = 25$.\n\n**The Full Solution:**\nStep 1: For fixed methodology and confidence level, the margin of error is proportional to $\\frac{1}{\\sqrt{n}}$.\nStep 2: The required margin of error is $\\frac{1.5}{7.5} = \\frac{1}{5}$ of the current one, so $\\sqrt{n}$ must be $5$ times as large.\nStep 3: If $\\sqrt{n}$ is multiplied by $5$, then $n$ is multiplied by $5^2 = 25$. Check: with $n$ replaced by $25n$, the margin of error becomes $\\frac{1}{\\sqrt{25}} = \\frac{1}{5}$ of what it was, and $\\frac{7.5}{5} = 1.5$. $\\checkmark$\n\n**Common Mistakes:**\n* Reporting $5$: this is the factor by which the *margin of error* shrinks, not the factor for the sample size.\n* Reporting $6$: subtracting, $7.5 - 1.5$, treats the relationship as additive.\n* Reporting $\\frac{1}{25}$ or $0.04$: inverting the direction, which would make the sample smaller and the margin of error larger.\n\n**Test Day Takeaway:** Precision costs the square: to make a margin of error $k$ times smaller, make the sample $k^2$ times bigger.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "sample-size-for-margin-reduction",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-286",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A city agency polled $320$ commuters chosen at random and reported a result with a margin of error of $\\pm 5.4$ percentage points. The agency will repeat the poll with $2{,}880$ commuters chosen by the same procedure. Approximately what margin of error should the agency expect for the repeated poll?",
    choices: [
      // distractor: divides by the sample-size ratio $9$ instead of by $\sqrt{9} = 3$
      { id: "A", text: "$\\pm 0.6$ percentage point" },
      { id: "B", text: "$\\pm 1.8$ percentage points" },
      // distractor: halves the margin of error because the sample grew, without using the ratio
      { id: "C", text: "$\\pm 2.7$ percentage points" },
      // distractor: multiplies by $3$ instead of dividing
      { id: "D", text: "$\\pm 16.2$ percentage points" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $\\frac{2880}{320} = 9$, so the margin of error is divided by $\\sqrt{9} = 3$: $\\frac{5.4}{3} = 1.8$.\n\n**The Full Solution:**\nStep 1: With the procedure unchanged, the margin of error is proportional to $\\frac{1}{\\sqrt{n}}$.\nStep 2: The sample size grows by the factor $\\frac{2880}{320} = 9$, so $\\sqrt{n}$ grows by $\\sqrt{9} = 3$ and the margin of error shrinks by the same factor of $3$.\nStep 3: $\\frac{5.4}{3} = 1.8$ percentage points. Check the reverse: to cut a margin of error to one-third, the sample must be $3^2 = 9$ times as large, and $9 \\times 320 = 2{,}880$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\pm 0.6$ percentage point): $\\frac{5.4}{9}$, applying the sample-size ratio directly to the margin of error.\n* Choice C ($\\pm 2.7$ percentage points): $\\frac{5.4}{2}$, halving the margin because the sample is \"much bigger\" instead of computing the ratio.\n* Choice D ($\\pm 16.2$ percentage points): $5.4 \\times 3$; the factor of $3$ is right, but a bigger sample must lower the margin of error.\n\n**Test Day Takeaway:** Take the ratio of the sample sizes first, then square-root it; that number divides the old margin of error.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "sample-size-for-margin-reduction",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-287",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "medium",
    type: "fill-in",
    question: "An estimate of the percent of defective panels in a large shipment, based on $250$ panels chosen at random, has a margin of error of $8$ percentage points. If the estimate is instead based on $4{,}000$ panels chosen at random from the same shipment and computed in the same way, what is the margin of error, in percentage points?",
    correctAnswer: "2",
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~15s):** $\\frac{4000}{250} = 16$ and $\\sqrt{16} = 4$, so the margin of error is $\\frac{8}{4} = 2$ percentage points.\n\n**The Full Solution:**\nStep 1: The margin of error is proportional to $\\frac{1}{\\sqrt{n}}$ when the method and confidence level are unchanged.\nStep 2: The sample size is multiplied by $\\frac{4000}{250} = 16$, so $\\sqrt{n}$ is multiplied by $\\sqrt{16} = 4$ and the margin of error is divided by $4$.\nStep 3: $\\frac{8}{4} = 2$ percentage points. Check: quadrupling precision requires $4^2 = 16$ times the sample, and $16 \\times 250 = 4{,}000$. $\\checkmark$\n\n**Common Mistakes:**\n* Reporting $0.5$: dividing $8$ by the sample-size ratio $16$ instead of by $\\sqrt{16} = 4$.\n* Reporting $4$: halving the margin of error, which corresponds to only quadrupling the sample size.\n* Reporting $32$: multiplying by $4$ instead of dividing, which makes the larger sample less precise.\n\n**Test Day Takeaway:** Sample size up by a factor of $k$ means margin of error down by a factor of $\\sqrt{k}$ — always the square root, never the factor itself.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "sample-size-for-margin-reduction",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-288",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "An estimate based on a random sample of $n$ residents of a city has a margin of error of $m$ percentage points, where $m > 0$. A second estimate, based on a larger random sample of the city's residents and computed by the same method at the same confidence level, has a margin of error of $\\frac{m}{5}$ percentage points. In terms of $n$, how many residents were in the second sample?",
    choices: [
      // distractor: inverts the relationship, shrinking the sample as the margin of error shrinks
      { id: "A", text: "$\\frac{n}{25}$" },
      // distractor: uses the factor $5$ without squaring it
      { id: "B", text: "$5n$" },
      // distractor: doubles the factor $5$ instead of squaring it
      { id: "C", text: "$10n$" },
      { id: "D", text: "$25n$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The margin of error is divided by $5$, and the margin of error varies as $\\frac{1}{\\sqrt{n}}$, so the sample size is multiplied by $5^2 = 25$.\n\n**The Full Solution:**\nStep 1: Write the relationship as $m = \\frac{k}{\\sqrt{n}}$ for some constant $k$ fixed by the method and the confidence level.\nStep 2: Let $N$ be the second sample size. Then $\\frac{m}{5} = \\frac{k}{\\sqrt{N}}$, and substituting $m = \\frac{k}{\\sqrt{n}}$ gives $\\frac{k}{5\\sqrt{n}} = \\frac{k}{\\sqrt{N}}$, so $\\sqrt{N} = 5\\sqrt{n}$.\nStep 3: Squaring both sides gives $N = 25n$. Check with numbers: if $n = 4$ and $k = 2$, then $m = 1$; with $N = 100$, the margin of error is $\\frac{2}{10} = 0.2 = \\frac{m}{5}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{n}{25}$): the factor $25$ is right, but dividing the sample size by it makes the margin of error $5$ times *larger*.\n* Choice B ($5n$): applies the margin-of-error factor straight to $n$; multiplying $n$ by $5$ divides the margin of error by only $\\sqrt{5} \\approx 2.24$.\n* Choice C ($10n$): doubles the factor instead of squaring it; $\\sqrt{10} \\approx 3.16$, not $5$.\n\n**Test Day Takeaway:** Set up $m = \\frac{k}{\\sqrt{n}}$ and solve. In symbols the square is impossible to forget, and the same setup answers every version of this question.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "sample-size-for-margin-reduction",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-289",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "hard",
    type: "fill-in",
    question: "A firm's estimate of the percent of adults who own a pet, based on a random sample of $384$ adults, has a margin of error of $\\pm 4.5$ percentage points. The firm needs an estimate whose margin of error is $\\pm 1.5$ percentage points. If the sampling procedure and confidence level are unchanged, how many more adults must be included in the sample?",
    correctAnswer: "3072",
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**The correct answer is $3{,}072$.**\n\n**The Fast Way (~25s):** The margin of error must shrink by a factor of $\\frac{4.5}{1.5} = 3$, so the sample must grow to $3^2 \\times 384 = 3{,}456$; the question asks for the increase, $3456 - 384 = 3{,}072$.\n\n**The Full Solution:**\nStep 1: The margin of error is proportional to $\\frac{1}{\\sqrt{n}}$, and it must be divided by $\\frac{4.5}{1.5} = 3$.\nStep 2: Dividing the margin of error by $3$ requires multiplying the sample size by $3^2 = 9$, so the required sample size is $9 \\times 384 = 3{,}456$ adults.\nStep 3: The firm already has $384$ adults, so it must add $3456 - 384 = 3{,}072$ more. Check: $8 \\times 384 = 3{,}072$, and adding $8$ times the original sample to the original gives $9$ times it. $\\checkmark$\n\n**Common Mistakes:**\n* Reporting $3{,}456$: that is the required total sample size, not the number of *additional* adults.\n* Reporting $1{,}152$: multiplying $384$ by $3$ instead of by $3^2 = 9$.\n* Reporting $768$: multiplying by $3$ and then subtracting the original, $1152 - 384$, which compounds the missing square with the subtraction.\n* Reporting $9$: giving the factor itself rather than a number of adults.\n\n**Test Day Takeaway:** Square the precision factor to get the new sample size, then reread the question: \"how many more\" means subtract the sample you already have.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "sample-size-for-margin-reduction",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── Q.A. UNIT CONVERSION (bank-ps-290..297) ──────────────────────────────
  // Convert between units using conversion factors. Multi-step chains common.
  {
    id: "bank-ps-290",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A dispensing machine was tested three times. The table gives the volume of liquid, in milliliters, that the machine dispensed in each test. What was the total volume of liquid dispensed in the three tests, in liters? ($1$ liter $= 1{,}000$ milliliters.)",
    questionTable: { headers: ["Test", "Volume dispensed (milliliters)"], rows: [["1", "750"], ["2", "425"], ["3", "825"]] },
    choices: [
      { id: "A", text: "$2$" },
      // distractor: divides the total by $100$
      { id: "B", text: "$20$" },
      // distractor: divides the total by $10$
      { id: "C", text: "$200$" },
      // distractor: reports the total in milliliters without converting
      { id: "D", text: "$2{,}000$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $750 + 425 + 825 = 2{,}000$ milliliters, and $2{,}000 \\div 1{,}000 = 2$ liters.\n\n**The Full Solution:**\nStep 1: Add the three volumes from the table: $750 + 425 + 825 = 2{,}000$ milliliters.\nStep 2: Convert to liters by multiplying by the conversion factor $\\frac{1 \\text{ liter}}{1{,}000 \\text{ milliliters}}$: $2{,}000 \\times \\frac{1}{1{,}000} = 2$ liters.\nStep 3: Check the size of the answer: a liter is a large unit, so the number of liters must be smaller than the number of milliliters, and $2 < 2{,}000$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($20$): $2{,}000 \\div 100$, using a conversion factor of $100$ instead of $1{,}000$.\n* Choice C ($200$): $2{,}000 \\div 10$, moving the decimal point only one place.\n* Choice D ($2{,}000$): the correct total, but still in milliliters; the question asks for liters.\n\n**Test Day Takeaway:** Write the conversion as a fraction with the unwanted unit on the bottom; the units cancel and the direction of the division takes care of itself.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "unit-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-291",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A shipping label lists the mass of a parcel as $3{,}250$ grams. What is the mass of the parcel, in kilograms? ($1$ kilogram $= 1{,}000$ grams.)",
    choices: [
      { id: "A", text: "$3.25$" },
      // distractor: divides by $100$
      { id: "B", text: "$32.5$" },
      // distractor: divides by $10$
      { id: "C", text: "$325$" },
      // distractor: multiplies by $1{,}000$ instead of dividing
      { id: "D", text: "$3{,}250{,}000$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Dividing by $1{,}000$ moves the decimal point three places to the left: $3{,}250 \\to 3.25$ kilograms.\n\n**The Full Solution:**\nStep 1: Multiply by the conversion factor written so that grams cancel: $3{,}250 \\text{ grams} \\times \\frac{1 \\text{ kilogram}}{1{,}000 \\text{ grams}}$.\nStep 2: The grams cancel and the arithmetic is $\\frac{3250}{1000} = 3.25$ kilograms.\nStep 3: Check by converting back: $3.25 \\times 1{,}000 = 3{,}250$ grams. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($32.5$): $\\frac{3250}{100}$, a two-place shift instead of three.\n* Choice C ($325$): $\\frac{3250}{10}$, a one-place shift.\n* Choice D ($3{,}250{,}000$): $3{,}250 \\times 1{,}000$; multiplying moves toward the smaller unit, but a kilogram is the larger unit.\n\n**Test Day Takeaway:** Going to a bigger unit gives a smaller number. Check the direction before touching the decimal point.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "unit-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-292",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A conveyor belt moves at a constant speed of $45$ centimeters per second. What is this speed, in meters per minute? ($1$ meter $= 100$ centimeters; $1$ minute $= 60$ seconds.)",
    choices: [
      // distractor: divides by $60$ instead of multiplying, converting minutes to seconds backwards
      { id: "A", text: "$0.75$" },
      // distractor: uses $1$ meter $= 1{,}000$ centimeters
      { id: "B", text: "$2.7$" },
      { id: "C", text: "$27$" },
      // distractor: converts seconds to minutes but never centimeters to meters
      { id: "D", text: "$2{,}700$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $45 \\times 60 = 2{,}700$ centimeters per minute, and $2{,}700 \\div 100 = 27$ meters per minute.\n\n**The Full Solution:**\nStep 1: Convert the time unit. In one minute the belt moves $45 \\times 60 = 2{,}700$ centimeters, so the speed is $2{,}700$ centimeters per minute.\nStep 2: Convert the length unit: $2{,}700 \\text{ centimeters} \\times \\frac{1 \\text{ meter}}{100 \\text{ centimeters}} = 27$ meters.\nStep 3: Check with one chain of factors: $\\frac{45 \\text{ cm}}{1 \\text{ s}} \\times \\frac{60 \\text{ s}}{1 \\text{ min}} \\times \\frac{1 \\text{ m}}{100 \\text{ cm}} = \\frac{45 \\times 60}{100} = 27$ meters per minute. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.75$): $\\frac{45}{60}$, dividing by $60$; a speed per minute must be larger than the same speed per second, not smaller.\n* Choice B ($2.7$): $\\frac{2700}{1000}$, using the gram-to-kilogram factor $1{,}000$ for centimeters to meters.\n* Choice D ($2{,}700$): the speed in centimeters per minute; the length unit was never converted.\n\n**Test Day Takeaway:** Two units to change means two factors. Write both, cancel, and only then multiply.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "unit-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-293",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "medium",
    type: "fill-in",
    question: "A pipeline transports oil at a constant rate of $1.5$ cubic meters per minute. The table gives two unit conversions. At this rate, how many liters of oil does the pipeline transport in $1$ hour?",
    diagram: { type: "dataTable", params: { headers: ["Quantity", "Conversion"], rows: [["Volume", "1 cubic meter = 1,000 liters"], ["Time", "1 hour = 60 minutes"]] } },
    correctAnswer: "90000",
    explanation: "**SAT Pattern: Unit Conversion**\n\n**The correct answer is $90{,}000$.**\n\n**The Fast Way (~20s):** $1.5 \\times 1{,}000 = 1{,}500$ liters per minute, and $1{,}500 \\times 60 = 90{,}000$ liters in an hour.\n\n**The Full Solution:**\nStep 1: Convert the volume unit using the table: $\\frac{1.5 \\text{ m}^3}{1 \\text{ min}} \\times \\frac{1{,}000 \\text{ liters}}{1 \\text{ m}^3} = \\frac{1{,}500 \\text{ liters}}{1 \\text{ min}}$.\nStep 2: Convert the time unit using the table: $\\frac{1{,}500 \\text{ liters}}{1 \\text{ min}} \\times \\frac{60 \\text{ min}}{1 \\text{ hour}} = 90{,}000$ liters per hour.\nStep 3: Check by converting the rate first: $1.5 \\times 60 = 90$ cubic meters per hour, and $90 \\times 1{,}000 = 90{,}000$ liters. $\\checkmark$\n\n**Common Mistakes:**\n* Reporting $1{,}500$: stopping after the volume conversion and answering per minute instead of per hour.\n* Reporting $90$: converting the time but leaving the answer in cubic meters.\n* Reporting $25$, from $1{,}500 \\div 60$: dividing by $60$ rather than multiplying, which converts an hourly rate to a per-minute rate.\n\n**Test Day Takeaway:** Order does not matter when the conversions are written as fractions, but every unit in the question must appear exactly once as a numerator and once as a denominator.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "unit-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-294",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A machine applies $0.4$ gram of adhesive to each component it assembles. How many kilograms of adhesive does the machine apply to $6{,}000$ components? ($1$ kilogram $= 1{,}000$ grams.)",
    choices: [
      { id: "A", text: "$2.4$" },
      // distractor: divides by $100$ instead of $1{,}000$
      { id: "B", text: "$24$" },
      // distractor: divides by $10$ instead of $1{,}000$
      { id: "C", text: "$240$" },
      // distractor: reports the total in grams without converting
      { id: "D", text: "$2{,}400$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $0.4 \\times 6{,}000 = 2{,}400$ grams, and $2{,}400 \\div 1{,}000 = 2.4$ kilograms.\n\n**The Full Solution:**\nStep 1: Find the total mass in grams: $0.4 \\text{ gram per component} \\times 6{,}000 \\text{ components} = 2{,}400$ grams.\nStep 2: Convert: $2{,}400 \\text{ grams} \\times \\frac{1 \\text{ kilogram}}{1{,}000 \\text{ grams}} = 2.4$ kilograms.\nStep 3: Check by scaling: $1{,}000$ components take $400$ grams, so $6{,}000$ take $2{,}400$ grams, which is $2.4$ kilograms. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($24$): $\\frac{2400}{100}$, a two-place decimal shift instead of three.\n* Choice C ($240$): $\\frac{2400}{10}$, a one-place shift.\n* Choice D ($2{,}400$): the correct total mass, but in grams rather than kilograms.\n\n**Test Day Takeaway:** Do the rate arithmetic first and convert last; converting halfway through is where the stray factors of $10$ come from.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "unit-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-295",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A rectangular plot of land has an area of $0.75$ square kilometer. What is the area of the plot, in square meters? ($1$ kilometer $= 1{,}000$ meters.)",
    choices: [
      // distractor: applies the length factor $1{,}000$ once, as if the area were a length
      { id: "A", text: "$750$" },
      // distractor: doubles the conversion factor instead of squaring it
      { id: "B", text: "$1{,}500$" },
      { id: "C", text: "$750{,}000$" },
      // distractor: cubes the conversion factor, as for a volume
      { id: "D", text: "$750{,}000{,}000$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $1$ square kilometer is $1{,}000^2 = 1{,}000{,}000$ square meters, so $0.75 \\times 1{,}000{,}000 = 750{,}000$ square meters.\n\n**The Full Solution:**\nStep 1: The conversion factor for area is the length factor squared: $1 \\text{ km}^2 = (1{,}000 \\text{ m})^2 = 1{,}000{,}000 \\text{ m}^2$.\nStep 2: Multiply: $0.75 \\text{ km}^2 \\times \\frac{1{,}000{,}000 \\text{ m}^2}{1 \\text{ km}^2} = 750{,}000$ square meters.\nStep 3: Check with a concrete shape. A plot $1{,}000$ meters by $750$ meters has area $750{,}000$ square meters, and its dimensions are $1$ kilometer by $0.75$ kilometer, an area of $0.75$ square kilometer. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($750$): $0.75 \\times 1{,}000$, the factor for a length; a square kilometer is far more than $1{,}000$ square meters.\n* Choice B ($1{,}500$): $0.75 \\times 2{,}000$, doubling the factor rather than squaring it.\n* Choice D ($750{,}000{,}000$): $0.75 \\times 1{,}000^3$, the factor for a volume in cubic units.\n\n**Test Day Takeaway:** Squared units need a squared factor and cubed units a cubed factor. Convert the side length first if you are unsure, then rebuild the area.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "unit-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-296",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "hard",
    type: "fill-in",
    question: "A cargo drone flies at a constant speed of $18$ meters per second. How many kilometers does the drone travel in $45$ minutes? ($1$ kilometer $= 1{,}000$ meters; $1$ minute $= 60$ seconds.)",
    correctAnswer: "48.6",
    explanation: "**SAT Pattern: Unit Conversion**\n\n**The correct answer is $48.6$.**\n\n**The Fast Way (~25s):** $45$ minutes is $2{,}700$ seconds, so the drone travels $18 \\times 2{,}700 = 48{,}600$ meters, or $48.6$ kilometers.\n\n**The Full Solution:**\nStep 1: Convert the time to seconds so it matches the speed: $45 \\text{ minutes} \\times \\frac{60 \\text{ seconds}}{1 \\text{ minute}} = 2{,}700$ seconds.\nStep 2: Multiply speed by time: $\\frac{18 \\text{ meters}}{1 \\text{ second}} \\times 2{,}700 \\text{ seconds} = 48{,}600$ meters.\nStep 3: Convert to kilometers: $48{,}600 \\times \\frac{1 \\text{ km}}{1{,}000 \\text{ m}} = 48.6$ kilometers. Check another way: $18$ meters per second is $\\frac{18 \\times 60}{1000} = 1.08$ kilometers per minute, and $1.08 \\times 45 = 48.6$. $\\checkmark$\n\n**Common Mistakes:**\n* Reporting $48{,}600$: the correct distance, but in meters; the question asks for kilometers.\n* Reporting $0.81$: multiplying $18 \\times 45$ and dividing by $1{,}000$, which treats the $45$ minutes as $45$ seconds.\n* Reporting $810$: the same slip left in meters.\n\n**Test Day Takeaway:** Make the time units match the rate before multiplying, and convert the length only at the end.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "unit-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-297",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Three machines fill bottles at the constant rates given in the table. If all three machines operate simultaneously at these rates, how many bottles do the machines fill in $1$ hour? ($1$ hour $= 3{,}600$ seconds.)",
    diagram: { type: "dataTable", params: { headers: ["Machine", "Filling rate"], rows: [["A", "9 bottles every 4 seconds"], ["B", "5 bottles every 2 seconds"], ["C", "7 bottles every 3 seconds"]] } },
    choices: [
      // distractor: gives the number of bottles filled in $1$ minute
      { id: "A", text: "$425$" },
      // distractor: adds the numerators and the denominators of the three rates
      { id: "B", text: "$8{,}400$" },
      // distractor: omits machine C
      { id: "C", text: "$17{,}100$" },
      { id: "D", text: "$25{,}500$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The rates are $\\frac{9}{4}$, $\\frac{5}{2}$, and $\\frac{7}{3}$ bottles per second, which total $\\frac{85}{12}$ bottles per second; $\\frac{85}{12} \\times 3{,}600 = 25{,}500$.\n\n**The Full Solution:**\nStep 1: Write each machine's rate in bottles per second: machine A gives $\\frac{9}{4} = 2.25$, machine B gives $\\frac{5}{2} = 2.5$, and machine C gives $\\frac{7}{3}$.\nStep 2: Because the machines run at the same time, the combined rate is the sum: $\\frac{9}{4} + \\frac{5}{2} + \\frac{7}{3} = \\frac{27 + 30 + 28}{12} = \\frac{85}{12}$ bottles per second.\nStep 3: Multiply by the number of seconds in an hour: $\\frac{85}{12} \\times 3{,}600 = 85 \\times 300 = 25{,}500$ bottles. Check machine by machine: $2.25 \\times 3{,}600 = 8{,}100$, $2.5 \\times 3{,}600 = 9{,}000$, and $\\frac{7}{3} \\times 3{,}600 = 8{,}400$, and $8{,}100 + 9{,}000 + 8{,}400 = 25{,}500$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($425$): $\\frac{85}{12} \\times 60$, the number of bottles filled in one minute rather than one hour.\n* Choice B ($8{,}400$): from $\\frac{9 + 5 + 7}{4 + 2 + 3} = \\frac{21}{9}$ bottles per second, which adds the rates by adding numerators and denominators.\n* Choice C ($17{,}100$): $(\\frac{9}{4} + \\frac{5}{2}) \\times 3{,}600$, the total for machines A and B only.\n\n**Test Day Takeaway:** Convert every rate to the same per-unit form before adding, then convert the time once at the end.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "unit-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── Q.A. MIXTURE PROBLEMS (bank-ps-298..305) ─────────────────────────────
  // Combine two solutions/alloys of different concentrations to reach a target.
  {
    id: "bank-ps-298",
    domain: "problem-solving",
    skills: ["ratios"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The table gives the volume, in liters, and the percent of juice by volume of the fruit drink in each of two containers. How many liters of juice are in container $1$?",
    questionTable: { headers: ["Container", "Volume (liters)", "Percent juice by volume"], rows: [["1", "15", "20%"], ["2", "9", "35%"]] },
    choices: [
      // distractor: uses $0.02$ for $20\%$
      { id: "A", text: "$0.3$" },
      { id: "B", text: "$3$" },
      // distractor: uses the numbers in container $2$'s row
      { id: "C", text: "$3.15$" },
      // distractor: gives the volume that is not juice
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Mixture Problems**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $20\\%$ of $15$ liters is $0.20 \\times 15 = 3$ liters.\n\n**The Full Solution:**\nStep 1: Read container $1$'s row: the volume is $15$ liters and the drink is $20\\%$ juice by volume.\nStep 2: The volume of juice is that percent of the total volume: $0.20 \\times 15 = 3$ liters.\nStep 3: Check: $3$ liters of juice out of $15$ liters is $\\frac{3}{15} = 0.20$, or $20\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.3$): $0.02 \\times 15$, using $0.02$ for $20\\%$; the decimal form of $20\\%$ is $0.20$.\n* Choice C ($3.15$): $0.35 \\times 9$, which is the juice in container $2$.\n* Choice D ($12$): $15 - 3$, the volume of everything in container $1$ that is not juice.\n\n**Test Day Takeaway:** A percent of a mixture always multiplies that mixture's own total. Pick the row first, then multiply.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "mixture-problems",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-299",
    domain: "problem-solving",
    skills: ["ratios"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A solution is prepared by dissolving $60$ grams of salt in $240$ grams of water. What percent of the mass of the solution is salt?",
    choices: [
      { id: "A", text: "$20\\%$" },
      // distractor: divides by the mass of the water instead of the mass of the solution
      { id: "B", text: "$25\\%$" },
      // distractor: reads the $60$ grams of salt as a percent
      { id: "C", text: "$60\\%$" },
      // distractor: gives the percent of the solution that is water
      { id: "D", text: "$80\\%$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Mixture Problems**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The solution has mass $60 + 240 = 300$ grams, and $\\frac{60}{300} = 0.20$, or $20\\%$.\n\n**The Full Solution:**\nStep 1: The solution is everything in the container, so its mass is $60 + 240 = 300$ grams.\nStep 2: The part that is salt is $60$ grams, so the fraction of the solution that is salt is $\\frac{60}{300} = \\frac{1}{5}$.\nStep 3: Convert to a percent: $\\frac{1}{5} = 0.20 = 20\\%$. Check: $20\\%$ of $300$ grams is $60$ grams of salt, leaving $240$ grams of water. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($25\\%$): $\\frac{60}{240}$, which compares salt to water rather than salt to the whole solution.\n* Choice C ($60\\%$): the $60$ grams of salt read as if it were already a percent.\n* Choice D ($80\\%$): $\\frac{240}{300}$, the percent of the solution that is water.\n\n**Test Day Takeaway:** In a mixture, the denominator is the whole mixture. Add the parts before dividing.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "mixture-problems",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-300",
    domain: "problem-solving",
    skills: ["ratios"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table gives the volume and the acid concentration, by volume, of each of two solutions. The two solutions are combined to form a new solution. What is the acid concentration, by volume, of the new solution?",
    diagram: { type: "dataTable", params: { headers: ["Solution", "Volume (liters)", "Acid concentration"], rows: [["A", "8", "15%"], ["B", "12", "40%"]] } },
    choices: [
      // distractor: pairs each concentration with the other solution's volume
      { id: "A", text: "$25\\%$" },
      // distractor: averages the two concentrations without weighting by volume
      { id: "B", text: "$27.5\\%$" },
      { id: "C", text: "$30\\%$" },
      // distractor: adds the two concentrations
      { id: "D", text: "$55\\%$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Mixture Problems**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Acid: $0.15(8) + 0.40(12) = 1.2 + 4.8 = 6$ liters in $8 + 12 = 20$ liters, so $\\frac{6}{20} = 30\\%$.\n\n**The Full Solution:**\nStep 1: Find the acid contributed by each solution: solution A gives $0.15 \\times 8 = 1.2$ liters, and solution B gives $0.40 \\times 12 = 4.8$ liters.\nStep 2: Total the acid and the volume: $1.2 + 4.8 = 6$ liters of acid in $8 + 12 = 20$ liters of new solution.\nStep 3: The concentration is $\\frac{6}{20} = 0.30$, or $30\\%$. Check: the answer must lie between $15\\%$ and $40\\%$ and closer to $40\\%$, since more of the mixture came from solution B, and $30\\%$ does. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($25\\%$): $\\frac{0.40(8) + 0.15(12)}{20}$, which attaches each concentration to the wrong volume.\n* Choice B ($27.5\\%$): $\\frac{15 + 40}{2}$, the plain average of the concentrations; that is the answer only when the two volumes are equal.\n* Choice D ($55\\%$): $15 + 40$; concentrations of combined solutions are weighted averages, so the result can never exceed the larger concentration.\n\n**Test Day Takeaway:** Track the acid, not the percents: multiply each concentration by its own volume, add, and divide by the total volume.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "mixture-problems",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-301",
    domain: "problem-solving",
    skills: ["ratios"],
    difficulty: "medium",
    type: "fill-in",
    question: "A metallurgist melts together $120$ grams of an alloy that is $8\\%$ tin by mass and $280$ grams of an alloy that is $18\\%$ tin by mass. What percent of the resulting alloy is tin, by mass? (Report the number only, without the percent symbol.)",
    correctAnswer: "15",
    explanation: "**SAT Pattern: Mixture Problems**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~20s):** Tin: $0.08(120) + 0.18(280) = 9.6 + 50.4 = 60$ grams in a $400$-gram alloy, so $\\frac{60}{400} = 0.15$, or $15\\%$.\n\n**The Full Solution:**\nStep 1: A mixture percent is the total amount of the ingredient divided by the total amount of the mixture, so find both totals.\nStep 2: Tin from the first alloy is $0.08(120) = 9.6$ grams, and tin from the second is $0.18(280) = 50.4$ grams, for $9.6 + 50.4 = 60$ grams of tin. The combined mass is $120 + 280 = 400$ grams.\nStep 3: $\\frac{60}{400} = 0.15$, so the resulting alloy is $15\\%$ tin. Check: $15\\%$ lies between $8\\%$ and $18\\%$ and closer to $18\\%$, which matches the larger share of the richer alloy. $\\checkmark$\n\n**Common Mistakes:** Averaging the two percents gives $\\frac{8 + 18}{2} = 13$, which ignores the unequal masses. Pairing each percent with the other alloy's mass gives $\\frac{8(280) + 18(120)}{400} = 11$. Reporting the tin mass, $60$ grams, answers a different question than the percent.\n\n**Test Day Takeaway:** Weight each concentration by its own amount, then divide by the combined amount. The result always lands between the two original percents, nearer the larger batch.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "mixture-problems",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-302",
    domain: "problem-solving",
    skills: ["ratios"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A laboratory has $450$ milliliters of a solution that is $24\\%$ glycerol by volume. How many milliliters of pure water must be added so that the resulting solution is $18\\%$ glycerol by volume?",
    choices: [
      // distractor: takes the difference of the two percents as a percent of the original volume, $0.06(450) = 27$.
      { id: "A", text: "$27$" },
      // distractor: computes $0.18(450) = 81$, the glycerol a $450$-milliliter sample would hold at the target concentration.
      { id: "B", text: "$81$" },
      { id: "C", text: "$150$" },
      // distractor: solves $\frac{108}{0.18} = 600$ correctly but reports the final volume instead of the water added.
      { id: "D", text: "$600$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Mixture Problems**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Adding water leaves the glycerol fixed at $0.24(450) = 108$ milliliters. For $108$ to be $18\\%$ of the final volume, that volume is $\\frac{108}{0.18} = 600$, so $600 - 450 = 150$ milliliters of water are added.\n\n**The Full Solution:**\nStep 1: Water contains no glycerol, so the amount of glycerol never changes: $0.24(450) = 108$ milliliters.\nStep 2: Let $w$ be the milliliters of water added. Then $\\frac{108}{450 + w} = 0.18$, so $108 = 0.18(450 + w) = 81 + 0.18w$.\nStep 3: $27 = 0.18w$, so $w = 150$. Check: the final volume is $600$ milliliters and $\\frac{108}{600} = 0.18$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($27$): takes the difference of the two percents as a percent of the original volume, $0.06(450) = 27$.\n* Choice B ($81$): computes $0.18(450) = 81$, the glycerol a $450$-milliliter sample would hold at the target concentration.\n* Choice D ($600$): solves $\\frac{108}{0.18} = 600$ correctly but reports the final volume instead of the water added.\n\n**Test Day Takeaway:** When pure solvent is added, hold the solute constant and solve for the new total; then subtract the starting volume to answer \"how much was added.\"",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "mixture-problems",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-303",
    domain: "problem-solving",
    skills: ["ratios"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A wildflower seed mix is $45\\%$ clover seed by mass, and the rest is grass seed. A landscaper buys $3$ bags of this mix, each with a mass of $20$ kilograms. What is the total mass, in kilograms, of grass seed in the $3$ bags?",
    choices: [
      // distractor: finds the grass seed in one bag, $0.55(20) = 11$, and stops before accounting for all three bags.
      { id: "A", text: "$11$" },
      // distractor: subtracts the percent number from the total mass, $60 - 45$, mixing a percent with a mass.
      { id: "B", text: "$15$" },
      // distractor: computes $0.45(60) = 27$, the mass of clover seed rather than grass seed.
      { id: "C", text: "$27$" },
      { id: "D", text: "$33$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Mixture Problems**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Grass seed is $100\\% - 45\\% = 55\\%$ of the mix, and the three bags hold $3(20) = 60$ kilograms, so $0.55(60) = 33$ kilograms.\n\n**The Full Solution:**\nStep 1: The mix has only two components, so grass seed makes up $100\\% - 45\\% = 55\\%$ of every bag.\nStep 2: The total mass of mix purchased is $3 \\times 20 = 60$ kilograms.\nStep 3: $0.55(60) = 33$ kilograms of grass seed. Check: the clover seed is $0.45(60) = 27$ kilograms, and $33 + 27 = 60$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($11$): finds the grass seed in one bag, $0.55(20) = 11$, and stops before accounting for all three bags.\n* Choice B ($15$): subtracts the percent number from the total mass, $60 - 45$, mixing a percent with a mass.\n* Choice C ($27$): computes $0.45(60) = 27$, the mass of clover seed rather than grass seed.\n\n**Test Day Takeaway:** In a two-component mix, the second component's percent is $100\\%$ minus the first. Scale to the full amount asked about before applying it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "mixture-problems",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-304",
    domain: "problem-solving",
    skills: ["ratios"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A tank contains $24$ liters of a coolant mixture that is $15\\%$ antifreeze by volume. How many liters of pure antifreeze must be added to the tank so that the resulting mixture is $40\\%$ antifreeze by volume?",
    choices: [
      // distractor: assumes the total volume stays at $24$ liters and solves $3.6 + x = 0.40(24)$, giving $x = 6$.
      { id: "A", text: "$6$" },
      // distractor: computes $0.40(24) = 9.6$ and reports it as the amount to add, ignoring the $3.6$ liters already present.
      { id: "B", text: "$9.6$" },
      { id: "C", text: "$10$" },
      // distractor: reports the final volume of the mixture, $24 + 10 = 34$ liters, instead of the amount added.
      { id: "D", text: "$34$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Mixture Problems**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** With $x$ liters of pure antifreeze added, $\\frac{3.6 + x}{24 + x} = 0.40$. Then $3.6 + x = 9.6 + 0.4x$, so $0.6x = 6$ and $x = 10$.\n\n**The Full Solution:**\nStep 1: The tank starts with $0.15(24) = 3.6$ liters of antifreeze in $24$ liters of mixture.\nStep 2: Pure antifreeze adds to both the antifreeze and the total, so after adding $x$ liters the mixture is $\\frac{3.6 + x}{24 + x}$ antifreeze. Set this equal to $0.40$.\nStep 3: $3.6 + x = 0.40(24 + x) = 9.6 + 0.4x$, so $0.6x = 6$ and $x = 10$. Check: $\\frac{3.6 + 10}{24 + 10} = \\frac{13.6}{34} = 0.40$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): assumes the total volume stays at $24$ liters and solves $3.6 + x = 0.40(24)$, giving $x = 6$.\n* Choice B ($9.6$): computes $0.40(24) = 9.6$ and reports it as the amount to add, ignoring the $3.6$ liters already present.\n* Choice D ($34$): reports the final volume of the mixture, $24 + 10 = 34$ liters, instead of the amount added.\n\n**Test Day Takeaway:** Adding a pure ingredient increases the numerator and the denominator by the same amount. Writing $\\frac{\\text{old amount} + x}{\\text{old total} + x}$ keeps that from slipping.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "mixture-problems",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-305",
    domain: "problem-solving",
    skills: ["ratios"],
    difficulty: "hard",
    type: "fill-in",
    question: "A pharmacist combines a $12\\%$ saline solution with a $30\\%$ saline solution to make $45$ milliliters of a $22\\%$ saline solution. How many milliliters of the $30\\%$ solution does the pharmacist use?",
    correctAnswer: "25",
    explanation: "**SAT Pattern: Mixture Problems**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~30s):** Let $x$ be the milliliters of $30\\%$ solution. Then $0.12(45 - x) + 0.30x = 0.22(45)$, which gives $0.18x = 4.5$ and $x = 25$.\n\n**The Full Solution:**\nStep 1: The two volumes must total $45$ milliliters, so if $x$ milliliters are the $30\\%$ solution, then $45 - x$ milliliters are the $12\\%$ solution.\nStep 2: Salt from each part adds to the salt in the blend: $0.12(45 - x) + 0.30x = 0.22(45) = 9.9$, so $5.4 + 0.18x = 9.9$.\nStep 3: $0.18x = 4.5$, so $x = 25$ milliliters. Check: $0.12(20) + 0.30(25) = 2.4 + 7.5 = 9.9$ milliliters of salt in $45$ milliliters, which is $22\\%$. $\\checkmark$\n\n**Common Mistakes:** Solving the equation correctly but reporting $45 - 25 = 20$, the amount of the $12\\%$ solution. Reporting $0.22(45) = 9.9$, the amount of salt rather than the volume of solution. Weighting by the wrong gap and computing $45 \\cdot \\frac{22 - 12}{30} = 15$ instead of dividing by the full $18$-point spread between the two concentrations.\n\n**Test Day Takeaway:** Name one volume $x$, write the other as (total $- x$), and set the salt from the parts equal to the salt in the blend. Then check which volume the question actually asked for.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "mixture-problems",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── Q.C. BOX PLOT INTERPRETATION (bank-ps-306..313) ─────────────────────
  // Reading min/max/quartiles from a box plot. SAT staple for descriptive stats.
  {
    id: "bank-ps-306",
    domain: "problem-solving",
    skills: ["find-median"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The box plot summarizes the sodium content, in milligrams per serving, of the $28$ canned soups stocked at a market. What is the interquartile range, in milligrams per serving, of the sodium contents?",
    diagram: { type: "boxPlot", params: { min: 200, q1: 380, median: 470, q3: 620, max: 810, xLabel: "Sodium content (mg per serving)", xMin: 150, xMax: 850, xGridStep: 50, xLabelStep: 100 } },
    choices: [
      // distractor: measures only the left half of the box, $470 - 380$, from the first quartile to the median.
      { id: "A", text: "$90$" },
      // distractor: measures only the right half of the box, $620 - 470$, from the median to the third quartile.
      { id: "B", text: "$150$" },
      { id: "C", text: "$240$" },
      // distractor: subtracts the whisker ends, $810 - 200$, which is the range rather than the interquartile range.
      { id: "D", text: "$610$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The interquartile range is the width of the box: $620 - 380 = 240$.\n\n**The Full Solution:**\nStep 1: On a box plot the box runs from the first quartile to the third quartile, and the line inside the box marks the median.\nStep 2: Here $Q_1 = 380$ and $Q_3 = 620$ milligrams per serving.\nStep 3: $\\text{IQR} = Q_3 - Q_1 = 620 - 380 = 240$. Check: the two halves of the box, $90$ and $150$, add to $240$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($90$): measures only the left half of the box, $470 - 380$, from the first quartile to the median.\n* Choice B ($150$): measures only the right half of the box, $620 - 470$, from the median to the third quartile.\n* Choice D ($610$): subtracts the whisker ends, $810 - 200$, which is the range rather than the interquartile range.\n\n**Test Day Takeaway:** IQR is the box, range is the whiskers. Read $Q_3 - Q_1$ off the two edges of the rectangle and ignore the median line.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "box-plot-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-307",
    domain: "problem-solving",
    skills: ["find-median"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The box plot summarizes the one-way commute distances, in kilometers, of the $35$ employees at a firm. What is the median commute distance, in kilometers?",
    diagram: { type: "boxPlot", params: { min: 3, q1: 9, median: 14, q3: 22, max: 31, xLabel: "Commute distance (km)", xMin: 0, xMax: 35, xGridStep: 1, xLabelStep: 5 } },
    choices: [
      // distractor: reads the left edge of the box, the first quartile.
      { id: "A", text: "$9$" },
      { id: "B", text: "$14$" },
      // distractor: averages the two whisker ends, $\frac{3 + 31}{2}$, which is the midrange, not the median.
      { id: "C", text: "$17$" },
      // distractor: reads the right edge of the box, the third quartile.
      { id: "D", text: "$22$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** The median is the line drawn inside the box, at $14$ kilometers.\n\n**The Full Solution:**\nStep 1: A box plot marks five values: the minimum and maximum at the whisker ends, the quartiles at the box edges, and the median as the segment inside the box.\nStep 2: The box runs from $9$ to $22$, and the interior segment sits at $14$.\nStep 3: So the median commute distance is $14$ kilometers. Check: the median must fall between $Q_1 = 9$ and $Q_3 = 22$, and $14$ does. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): reads the left edge of the box, the first quartile.\n* Choice C ($17$): averages the two whisker ends, $\\frac{3 + 31}{2}$, which is the midrange, not the median.\n* Choice D ($22$): reads the right edge of the box, the third quartile.\n\n**Test Day Takeaway:** The median is the interior line, never the box edge and never the midpoint of the whiskers. A box plot shows no mean at all.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "box-plot-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-308",
    domain: "problem-solving",
    skills: ["find-median"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The box plot summarizes the scores of the $40$ applicants who took a road test at a licensing office. Which of the following statements must be true?",
    diagram: { type: "boxPlot", params: { min: 52, q1: 68, median: 77, q3: 86, max: 98, xLabel: "Road test score", xMin: 45, xMax: 100, xGridStep: 5, xLabelStep: 10 } },
    choices: [
      // distractor: reads the median as a mean; a box plot displays no mean, and a skewed data set can have a mean far from $77$.
      { id: "A", text: "The mean score of the $40$ applicants is $77$." },
      { id: "B", text: "At least $20$ of the applicants scored $77$ or higher." },
      // distractor: treats the quartile as an exact count; ties at $86$ can put more or fewer than $10$ scores strictly above it.
      { id: "C", text: "Exactly $10$ of the applicants scored higher than $86$." },
      // distractor: assumes equal spacing, but the box halves and the whiskers have different widths, so the data are not evenly spread.
      { id: "D", text: "The scores are spread evenly between $52$ and $98$." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The median of $40$ scores is $77$, so the upper half of the ordered list — $20$ scores — is at least $77$.\n\n**The Full Solution:**\nStep 1: With $40$ ordered scores, the median $77$ sits between the $20$th and $21$st values, so the $21$st value is at least $77$.\nStep 2: Every score from the $21$st through the $40$th is at least as large as the $21$st, which gives $20$ scores of $77$ or higher.\nStep 3: That is exactly half of $40$, so \"at least $20$\" must be true. Check: this argument uses only the position of the median, so it holds no matter how the scores are distributed. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: reads the median as a mean; a box plot displays no mean, and a skewed data set can have a mean far from $77$.\n* Choice C: treats the quartile as an exact count; ties at $86$ can put more or fewer than $10$ scores strictly above it.\n* Choice D: assumes equal spacing, but the box halves and the whiskers have different widths, so the data are not evenly spread.\n\n**Test Day Takeaway:** \"Must be true\" statements survive only if they follow from the five marked values. Statements about the mean, exact quartile counts, or even spacing do not.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "box-plot-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-309",
    domain: "problem-solving",
    skills: ["find-median"],
    difficulty: "medium",
    type: "fill-in",
    question: "The box plot summarizes the wingspans, in centimeters, of the $46$ gulls banded at a coastal station. By how many centimeters does the range of the wingspans exceed the interquartile range of the wingspans?",
    diagram: { type: "boxPlot", params: { min: 96, q1: 118, median: 129, q3: 143, max: 168, xLabel: "Wingspan (cm)", xMin: 90, xMax: 175, xGridStep: 5, xLabelStep: 10 } },
    correctAnswer: "47",
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**The correct answer is $47$.**\n\n**The Fast Way (~15s):** Range $= 168 - 96 = 72$ and $\\text{IQR} = 143 - 118 = 25$, so the difference is $72 - 25 = 47$.\n\n**The Full Solution:**\nStep 1: The range uses the whisker ends: $168 - 96 = 72$ centimeters.\nStep 2: The interquartile range uses the box edges: $143 - 118 = 25$ centimeters.\nStep 3: The range exceeds the interquartile range by $72 - 25 = 47$ centimeters. Check: that difference is just the two whiskers combined, $(168 - 143) + (118 - 96) = 25 + 22 = 47$. $\\checkmark$\n\n**Common Mistakes:** Reporting $72$ or $25$ answers only half the question. Subtracting in the wrong order gives $-47$. Using the median as an endpoint gives $168 - 129 = 39$, which is a whisker plus half the box rather than either named measure.\n\n**Test Day Takeaway:** Range minus IQR is the total length of the two whiskers. Computing both measures separately, then subtracting, keeps the two spreads from blurring together.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "box-plot-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-310",
    domain: "problem-solving",
    skills: ["find-median"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The box plots summarize the annual snowfall totals, in centimeters, recorded at two mountain stations over the same $30$ years. Which of the following statements is best supported by the box plots?",
    diagram: { type: "boxPlot", params: { distributions: [{ label: "Station R", min: 120, q1: 190, median: 250, q3: 330, max: 420 }, { label: "Station S", min: 150, q1: 235, median: 268, q3: 285, max: 400 }], xMin: 100, xMax: 450, xGridStep: 25, xLabelStep: 50, xLabel: "Annual snowfall (cm)" } },
    choices: [
      // distractor: compares means, which box plots do not display; only the medians and quartiles are shown.
      { id: "A", text: "The mean annual total at Station S is greater than the mean annual total at Station R." },
      { id: "B", text: "In at least $15$ of the years, Station S recorded a total of at least $268$ centimeters." },
      // distractor: reads the two plots as year-by-year pairs, but the overlapping ranges show no such matching.
      { id: "C", text: "Station S recorded a greater total than Station R in every one of the $30$ years." },
      // distractor: reverses the spread comparison: Station S has the narrower box ($50$ versus $140$) and the shorter whisker span.
      { id: "D", text: "The annual totals at Station S are more spread out than the annual totals at Station R." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Station S has median $268$, so half of its $30$ years — at least $15$ of them — had totals of $268$ centimeters or more.\n\n**The Full Solution:**\nStep 1: For Station S the box plot marks $Q_1 = 235$, median $= 268$, and $Q_3 = 285$ centimeters.\nStep 2: The median splits an ordered list of $30$ values into two halves of $15$, and every value in the upper half is at least the median.\nStep 3: So at least $15$ of the $30$ years at Station S had totals of at least $268$ centimeters. Check: this uses only the median's definition, so it holds for any shape of distribution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: compares means, which box plots do not display; only the medians and quartiles are shown.\n* Choice C: reads the two plots as year-by-year pairs, but the overlapping ranges show no such matching.\n* Choice D: reverses the spread comparison: Station S has the narrower box ($50$ versus $140$) and the shorter whisker span.\n\n**Test Day Takeaway:** Two box plots support statements about medians, quartiles, and spread — never about means, counts, or which data set was larger case by case.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "box-plot-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-311",
    domain: "problem-solving",
    skills: ["find-median"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The box plot summarizes the diameters, in millimeters, of the $60$ ball bearings in a production sample. Approximately how many of the $60$ bearings have a diameter greater than $12.4$ millimeters?",
    diagram: { type: "boxPlot", params: { min: 11.2, q1: 11.8, median: 12.1, q3: 12.4, max: 13, xLabel: "Diameter (mm)", xMin: 11, xMax: 13.2, xGridStep: 0.2, xLabelStep: 0.4 } },
    choices: [
      { id: "A", text: "$15$" },
      // distractor: uses the half of the data above the median instead of the quarter above the third quartile, $0.50(60)$.
      { id: "B", text: "$30$" },
      // distractor: gives the $75\%$ of bearings at or below $12.4$ millimeters, the complement of what was asked, $0.75(60)$.
      { id: "C", text: "$45$" },
      // distractor: counts the whole sample, the span from the minimum to the maximum.
      { id: "D", text: "$60$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $12.4$ is the third quartile, and about $25\\%$ of the data lies above $Q_3$, so $0.25(60) = 15$ bearings.\n\n**The Full Solution:**\nStep 1: The right edge of the box is at $12.4$ millimeters, so $12.4$ is the third quartile.\nStep 2: By definition, about three quarters of the values are at most $Q_3$ and about one quarter exceed it.\nStep 3: One quarter of $60$ is $0.25(60) = 15$ bearings. Check: $15$ above $Q_3$ plus $45$ at or below it accounts for all $60$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($30$): uses the half of the data above the median instead of the quarter above the third quartile, $0.50(60)$.\n* Choice C ($45$): gives the $75\\%$ of bearings at or below $12.4$ millimeters, the complement of what was asked, $0.75(60)$.\n* Choice D ($60$): counts the whole sample, the span from the minimum to the maximum.\n\n**Test Day Takeaway:** Each of the four sections of a box plot holds about $25\\%$ of the data. Match the boundary in the question to a quartile, then multiply the total by the right fraction.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "box-plot-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-312",
    domain: "problem-solving",
    skills: ["find-median"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The box plot summarizes the daily water use, in gallons, of $80$ households on a single day. The household with the greatest daily use is then removed from the data set. Which of the following statements about the resulting data set of $79$ households must be true?",
    diagram: { type: "boxPlot", params: { min: 40, q1: 95, median: 115, q3: 150, max: 420, xLabel: "Daily water use (gallons)", xMin: 0, xMax: 450, xGridStep: 25, xLabelStep: 50 } },
    choices: [
      // distractor: the new median is the $40$th ordered value, which can equal $115$ if the $40$th and $41$st values are both $115$, so it need not decrease.
      { id: "A", text: "The median is less than $115$ gallons." },
      { id: "B", text: "The mean is less than the mean of the original data set." },
      // distractor: removing a single extreme value barely moves the quartiles; the interquartile range can stay exactly the same.
      { id: "C", text: "The interquartile range is less than the interquartile range of the original data set." },
      // distractor: dropping the largest value can only shorten the span from minimum to maximum, so the range cannot increase.
      { id: "D", text: "The range is greater than the range of the original data set." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The value removed, $420$ gallons, is far above the center of the data and therefore above the mean. Deleting a value greater than the mean pulls the mean down.\n\n**The Full Solution:**\nStep 1: The maximum, $420$ gallons, sits well beyond $Q_3 = 150$, so it is larger than the mean of the $80$ values.\nStep 2: Removing a value larger than the mean lowers the total by more than one average share, so the new mean of $79$ values is smaller.\nStep 3: Therefore the mean must decrease. Check: no other listed statistic is forced to change, because the quartiles and the median depend on position, not on how extreme the top value is. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: the new median is the $40$th ordered value, which can equal $115$ if the $40$th and $41$st values are both $115$, so it need not decrease.\n* Choice C: removing a single extreme value barely moves the quartiles; the interquartile range can stay exactly the same.\n* Choice D: dropping the largest value can only shorten the span from minimum to maximum, so the range cannot increase.\n\n**Test Day Takeaway:** The mean reacts to every value's size; the median and quartiles react only to position. Deleting an extreme value always moves the mean and often leaves the position-based measures alone.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "box-plot-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-313",
    domain: "problem-solving",
    skills: ["find-median"],
    difficulty: "hard",
    type: "fill-in",
    question: "The box plot summarizes the protein content, in grams, of the $24$ energy bars stocked at a store. A value in a data set is classified as an outlier when it is more than $1.5$ times the interquartile range above the third quartile. For this data set, what is the value of $Q_3 + 1.5 \\cdot \\text{IQR}$, in grams?",
    diagram: { type: "boxPlot", params: { min: 8, q1: 14, median: 16, q3: 20, max: 27, xLabel: "Protein content (g)", xMin: 5, xMax: 32, xGridStep: 1, xLabelStep: 5 } },
    correctAnswer: "29",
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**The correct answer is $29$.**\n\n**The Fast Way (~20s):** $\\text{IQR} = 20 - 14 = 6$, so $Q_3 + 1.5(6) = 20 + 9 = 29$ grams.\n\n**The Full Solution:**\nStep 1: Read the box edges: $Q_1 = 14$ grams and $Q_3 = 20$ grams.\nStep 2: The interquartile range is $Q_3 - Q_1 = 20 - 14 = 6$ grams, so $1.5 \\cdot \\text{IQR} = 1.5(6) = 9$ grams.\nStep 3: The threshold is $Q_3 + 9 = 20 + 9 = 29$ grams. Check: the largest value shown is $27$ grams, which is below $29$, so this data set has no high outlier. $\\checkmark$\n\n**Common Mistakes:** Adding $1.5$ instead of $1.5 \\cdot \\text{IQR}$ gives $21.5$. Multiplying the quartile itself gives $1.5(20) = 30$. Using the range in place of the interquartile range gives $20 + 1.5(27 - 8) = 48.5$.\n\n**Test Day Takeaway:** The outlier rule always multiplies $1.5$ by the interquartile range — the box width — and then adds that product to $Q_3$ (or subtracts it from $Q_1$).",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "box-plot-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── Q.C. STANDARD DEVIATION COMPARISON (bank-ps-314..321) ───────────────
  // Compare spreads of two data sets via standard deviation reasoning.
  {
    id: "bank-ps-314",
    domain: "problem-solving",
    skills: ["standard-deviation-concept"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Data set J: $22$, $24$, $25$, $26$, $28$\n\nData set K: $10$, $18$, $25$, $32$, $40$\n\nThe lists give the values in data set J and data set K. Which statement correctly compares the standard deviation of data set J and the standard deviation of data set K?",
    choices: [
      { id: "A", text: "The standard deviation of data set J is less than the standard deviation of data set K." },
      // distractor: reverses the comparison, perhaps by noticing that J's values are packed close together and reading closeness as large spread.
      { id: "B", text: "The standard deviation of data set J is greater than the standard deviation of data set K." },
      // distractor: concludes that equal means force equal standard deviations, but the mean says nothing about spread.
      { id: "C", text: "The standard deviation of data set J is equal to the standard deviation of data set K." },
      // distractor: applies the all-values-identical case; a standard deviation is $0$ only when every value equals the mean.
      { id: "D", text: "The standard deviation of each data set is $0$." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Both lists center at $25$, but J spans only $22$ to $28$ while K spans $10$ to $40$. Values farther from the mean mean a larger standard deviation, so J's is smaller.\n\n**The Full Solution:**\nStep 1: Each list has five values with the same total, $125$, so both means are $\\frac{125}{5} = 25$.\nStep 2: Standard deviation measures the typical distance from the mean. In J the distances are $3$, $1$, $0$, $1$, $3$; in K they are $15$, $7$, $0$, $7$, $15$.\nStep 3: Every distance in K is at least as large as the matching distance in J, so the standard deviation of J is less than that of K. Check: J's range is $6$ and K's is $30$, consistent with the same ordering. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: reverses the comparison, perhaps by noticing that J's values are packed close together and reading closeness as large spread.\n* Choice C: concludes that equal means force equal standard deviations, but the mean says nothing about spread.\n* Choice D: applies the all-values-identical case; a standard deviation is $0$ only when every value equals the mean.\n\n**Test Day Takeaway:** Compare standard deviations by comparing distances from the center, not by computing anything. The tighter list around the same mean always has the smaller standard deviation.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "standard-deviation-comparison",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-315",
    domain: "problem-solving",
    skills: ["standard-deviation-concept"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In section 1 of a course, all $24$ exam scores are between $79$ and $83$. In section 2 of the same course, all $24$ exam scores are between $46$ and $97$. Which statement about the standard deviations of the two sets of scores is best supported?",
    choices: [
      // distractor: reverses the comparison; section 1's scores are clustered within a $4$-point band, which is the smaller spread.
      { id: "A", text: "The standard deviation of the section 1 scores is greater than the standard deviation of the section 2 scores." },
      { id: "B", text: "The standard deviation of the section 2 scores is greater than the standard deviation of the section 1 scores." },
      // distractor: treats sample size as a measure of spread, but standard deviation depends on how far values sit from the mean.
      { id: "C", text: "The two standard deviations are equal because each section has $24$ scores." },
      // distractor: confuses center with spread; larger typical values do not make a data set more spread out.
      { id: "D", text: "The standard deviation of the section 1 scores is greater because its scores are larger numbers." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Section 1's scores all lie within a $4$-point band; section 2's stretch across $51$ points. The wider spread has the larger standard deviation.\n\n**The Full Solution:**\nStep 1: Standard deviation measures typical distance from the mean, so a data set confined to a narrow interval has a small standard deviation.\nStep 2: Section 1 has range at most $83 - 79 = 4$, so no score sits more than $4$ points from any other.\nStep 3: Section 2 has range up to $97 - 46 = 51$, forcing much larger distances from its mean, so its standard deviation is greater. Check: even the most spread-out set inside a $4$-point band cannot have a standard deviation larger than one containing scores $51$ points apart. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: reverses the comparison; section 1's scores are clustered within a $4$-point band, which is the smaller spread.\n* Choice C: treats sample size as a measure of spread, but standard deviation depends on how far values sit from the mean.\n* Choice D: confuses center with spread; larger typical values do not make a data set more spread out.\n\n**Test Day Takeaway:** Standard deviation answers \"how far from the center,\" not \"how many\" or \"how large.\" A tight interval always beats a wide one.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "standard-deviation-comparison",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-316",
    domain: "problem-solving",
    skills: ["standard-deviation-concept"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Data set F and data set G each consist of $30$ values. The range of data set F is $12$, and the range of data set G is $36$. Neither data set contains an extreme value, and the two distributions have similar shapes. Which statement is best supported?",
    choices: [
      // distractor: reverses the ratio and treats the range as an exact multiplier of the standard deviation; the wider set is G, not F.
      { id: "A", text: "The standard deviation of data set F is $3$ times the standard deviation of data set G." },
      { id: "B", text: "The standard deviation of data set G is greater than the standard deviation of data set F." },
      // distractor: reads a spread statistic as a center statistic; the ranges say nothing about where either data set is centered.
      { id: "C", text: "The mean of data set G is greater than the mean of data set F." },
      // distractor: ignores the ranges entirely; equal sample size does not force equal spread.
      { id: "D", text: "The two data sets have the same standard deviation." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Same shape, same count, but G's values are spread across three times the interval. Wider spread about the mean means the larger standard deviation.\n\n**The Full Solution:**\nStep 1: Both data sets have $30$ values and similar shapes, so the only difference described is how far apart the values sit.\nStep 2: G's values occupy an interval three times as wide as F's, so typical distances from the mean are larger in G.\nStep 3: A larger typical distance from the mean is exactly a larger standard deviation, so G's standard deviation is greater. Check: nothing given locates either mean, so only the spread comparison is supported. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: reverses the ratio and treats the range as an exact multiplier of the standard deviation; the wider set is G, not F.\n* Choice C: reads a spread statistic as a center statistic; the ranges say nothing about where either data set is centered.\n* Choice D: ignores the ranges entirely; equal sample size does not force equal spread.\n\n**Test Day Takeaway:** The range orders standard deviations when the shapes match, but it does not fix the exact ratio, and it never tells you anything about the mean.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "standard-deviation-comparison",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-317",
    domain: "problem-solving",
    skills: ["standard-deviation-concept"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Data set V consists of $18$ values, each equal to $64$. Data set W consists of $18$ values: six values of $58$, six values of $64$, and six values of $70$. Which statement correctly compares data set V and data set W?",
    choices: [
      // distractor: matches the means correctly but assumes equal means force equal spread; V has no spread at all while W does.
      { id: "A", text: "The two data sets have the same mean and the same standard deviation." },
      // distractor: reads the repeated value $64$ as making V both larger and more variable, but every value in V equals the common mean.
      { id: "B", text: "Data set V has the greater mean, and data set V has the greater standard deviation." },
      { id: "C", text: "The two data sets have the same mean, and data set W has the greater standard deviation." },
      // distractor: balances $58$ and $70$ around $64$ correctly yet reports a greater mean for W, when the two means are equal.
      { id: "D", text: "The two data sets have the same standard deviation, and data set W has the greater mean." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** W's values are symmetric about $64$, so both means are $64$. V has zero spread, so W's standard deviation is greater.\n\n**The Full Solution:**\nStep 1: Every value of V is $64$, so the mean of V is $64$ and every distance from the mean is $0$, making the standard deviation of V equal to $0$.\nStep 2: In W the six $58$s and six $70$s balance around $64$, so the mean of W is also $64$.\nStep 3: W has twelve values that sit $6$ away from the mean, so its standard deviation is positive and therefore greater than $0$. Check: same center, different spread. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: matches the means correctly but assumes equal means force equal spread; V has no spread at all while W does.\n* Choice B: reads the repeated value $64$ as making V both larger and more variable, but every value in V equals the common mean.\n* Choice D: balances $58$ and $70$ around $64$ correctly yet reports a greater mean for W, when the two means are equal.\n\n**Test Day Takeaway:** A data set with every value identical has standard deviation $0$ — the smallest possible. Any data set with two different values beats it on spread.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "standard-deviation-comparison",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-318",
    domain: "problem-solving",
    skills: ["standard-deviation-concept"],
    difficulty: "medium",
    type: "fill-in",
    question: "The standard deviation of a data set of lengths measured in centimeters is $3.5$. Each length is converted to millimeters by multiplying it by $10$. What is the standard deviation, in millimeters, of the converted data set?",
    correctAnswer: "35",
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**The correct answer is $35$.**\n\n**The Fast Way (~10s):** Multiplying every value by $10$ multiplies every distance from the mean by $10$, so the standard deviation becomes $10(3.5) = 35$.\n\n**The Full Solution:**\nStep 1: Standard deviation is built from the distances between the values and their mean.\nStep 2: Multiplying every value by $10$ also multiplies the mean by $10$, so each distance from the mean is multiplied by $10$ as well.\nStep 3: The standard deviation therefore scales by the same factor: $10 \\times 3.5 = 35$ millimeters. Check: a spread of $3.5$ centimeters is the same physical spread as $35$ millimeters, so the answer is just the unit conversion. $\\checkmark$\n\n**Common Mistakes:** Adding the factor gives $3.5 + 10 = 13.5$, which is the rule for shifting values, not scaling them. Dividing gives $0.35$, converting in the wrong direction. Leaving the standard deviation at $3.5$ applies the add-a-constant rule, under which the spread does not change.\n\n**Test Day Takeaway:** Multiplying every value by $k$ multiplies the standard deviation by $|k|$; adding a constant to every value leaves it unchanged.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "standard-deviation-comparison",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-319",
    domain: "problem-solving",
    skills: ["standard-deviation-concept"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A data set has a mean of $47$ and a standard deviation of $8$. A new data set is created by subtracting $12$ from each value of the original data set. What are the mean and the standard deviation of the new data set?",
    choices: [
      { id: "A", text: "Mean $35$ and standard deviation $8$" },
      // distractor: shifts the mean correctly but also subtracts $12$ from the standard deviation, producing an impossible negative spread.
      { id: "B", text: "Mean $35$ and standard deviation $-4$" },
      // distractor: leaves the mean unshifted, applying the constant only to the spread rule instead of to the center.
      { id: "C", text: "Mean $47$ and standard deviation $8$" },
      // distractor: adds $12$ instead of subtracting it, shifting the center the wrong way.
      { id: "D", text: "Mean $59$ and standard deviation $8$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Subtracting $12$ from every value slides the whole data set left: the mean drops to $47 - 12 = 35$, and the spacing between values is unchanged, so the standard deviation stays $8$.\n\n**The Full Solution:**\nStep 1: Subtracting the same constant from every value moves each value the same distance in the same direction.\nStep 2: The mean moves with the data: $47 - 12 = 35$.\nStep 3: Every distance from the mean is unchanged, because both the value and the mean dropped by $12$, so the standard deviation remains $8$. Check: a shift relabels the number line without stretching it. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: shifts the mean correctly but also subtracts $12$ from the standard deviation, producing an impossible negative spread.\n* Choice C: leaves the mean unshifted, applying the constant only to the spread rule instead of to the center.\n* Choice D: adds $12$ instead of subtracting it, shifting the center the wrong way.\n\n**Test Day Takeaway:** Adding or subtracting a constant moves the center and leaves every spread measure — standard deviation, range, IQR — exactly the same.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "standard-deviation-comparison",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-320",
    domain: "problem-solving",
    skills: ["standard-deviation-concept"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Data set A and data set B each consist of $200$ values, have the same mean, and have the same range. The values in data set A are spread nearly evenly across the range. In data set B, most values lie in a narrow interval around the mean, with a few values near each end of the range. Which statement is best supported?",
    choices: [
      { id: "A", text: "Data set A has the greater standard deviation." },
      // distractor: reads the few extreme values in B as dominating, but the great majority of B's values sit close to the mean, which pulls its typical distance down.
      { id: "B", text: "Data set B has the greater standard deviation." },
      // distractor: treats the range as if it determined the standard deviation; the range depends only on two values, while the standard deviation depends on all $200$.
      { id: "C", text: "The two data sets have the same standard deviation because they have the same range." },
      // distractor: uses the mean, which fixes the center rather than the spread.
      { id: "D", text: "The two data sets have the same standard deviation because they have the same mean." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Standard deviation is a typical distance from the mean. In A most values sit far from the center; in B most sit close to it, so A's is greater.\n\n**The Full Solution:**\nStep 1: The two data sets share a mean and a range, so the extremes and the center are identical; only the distribution of values between them differs.\nStep 2: In A the values fill the interval evenly, so a large share of them lie near the ends, far from the mean.\nStep 3: In B nearly all values cluster near the mean, and only a handful lie far out, so the average squared distance is smaller and the standard deviation is smaller. Therefore A has the greater standard deviation. Check: the range is set by two values only, so it cannot break the tie — the shape does. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: reads the few extreme values in B as dominating, but the great majority of B's values sit close to the mean, which pulls its typical distance down.\n* Choice C: treats the range as if it determined the standard deviation; the range depends only on two values, while the standard deviation depends on all $200$.\n* Choice D: uses the mean, which fixes the center rather than the spread.\n\n**Test Day Takeaway:** Equal ranges do not settle standard deviation. Ask where the bulk of the data sits: values massed near the mean give the smaller standard deviation.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "standard-deviation-comparison",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-321",
    domain: "problem-solving",
    skills: ["standard-deviation-concept"],
    difficulty: "hard",
    type: "fill-in",
    question: "Data set P has a standard deviation of $9$. Data set Q is created by replacing each value $x$ in data set P with $\\frac{x + 27}{3}$. What is the standard deviation of data set Q?",
    correctAnswer: "3",
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~20s):** $\\frac{x + 27}{3} = \\frac{1}{3}x + 9$. Only the multiplier affects spread, so the standard deviation is $\\frac{1}{3}(9) = 3$.\n\n**The Full Solution:**\nStep 1: Rewrite the transformation in the form $ax + b$: $\\frac{x + 27}{3} = \\frac{1}{3}x + 9$, so $a = \\frac{1}{3}$ and $b = 9$.\nStep 2: Adding the constant $9$ shifts every value equally and leaves all distances from the mean unchanged, so it does not affect the standard deviation.\nStep 3: Multiplying by $\\frac{1}{3}$ multiplies every distance from the mean by $\\frac{1}{3}$, so the standard deviation is $\\frac{1}{3}(9) = 3$. Check: the values are compressed to one third of their former spacing and then slid over, which matches a standard deviation of $3$. $\\checkmark$\n\n**Common Mistakes:** Dividing the shifted standard deviation gives $\\frac{9 + 27}{3} = 12$, which incorrectly runs the constant through the spread. Subtracting the constant gives $9 - 27 = -18$, a negative standard deviation, which is impossible. Leaving the answer as $9$ applies the add-a-constant rule but forgets the division.\n\n**Test Day Takeaway:** Put the transformation in $ax + b$ form first. The standard deviation is multiplied by $|a|$; the $+b$ never touches it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "standard-deviation-comparison",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── Q.D. INTERPRET SLOPE OF BEST FIT LINE (bank-ps-322..329) ─────────────
  // Slope of best-fit line in CONTEXT: predicted change in y per unit x.
  {
    id: "bank-ps-322",
    domain: "problem-solving",
    skills: ["slope-from-points", "scatterplots"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The scatterplot shows the total charge $y$, in dollars, and the number of rides $x$ taken in one month for each of $9$ members of a scooter-share plan, along with the line of best fit $\\hat{y} = 1.75x + 6$. Which of the following is the best interpretation of the slope of the line of best fit?",
    diagram: { type: "scatterplot", params: { points: [[2, 10], [4, 12], [5, 16], [7, 17], [9, 23], [11, 24], [13, 29], [15, 31], [18, 38]], xMin: 0, xMax: 20, yMin: 0, yMax: 45, xGridStep: 2, yGridStep: 5, xLabelStep: 4, yLabelStep: 10, xLabel: "Number of rides", yLabel: "Total charge (dollars)", bestFitLine: { slope: 1.75, intercept: 6 } } },
    choices: [
      // distractor: describes the $y$-intercept, which is $6$, not the slope.
      { id: "A", text: "The estimated total charge for a member who takes no rides is $\\$1.75$." },
      { id: "B", text: "The estimated total charge increases by $\\$1.75$ for each additional ride taken." },
      // distractor: reads the slope as the whole charge and drops the $\$6$ the model adds at $x = 0$.
      { id: "C", text: "The estimated total charge for a member is $\\$1.75$, with no other charges." },
      // distractor: swaps the roles of $x$ and $y$, interpreting the slope as rides per dollar rather than dollars per ride.
      { id: "D", text: "The estimated number of rides increases by $1.75$ for each additional dollar charged." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Slope is the change in $y$ per one-unit change in $x$: dollars per ride. So each additional ride adds an estimated $\\$1.75$ to the charge.\n\n**The Full Solution:**\nStep 1: In $\\hat{y} = 1.75x + 6$, the variable $x$ counts rides and $\\hat{y}$ predicts the total charge in dollars.\nStep 2: The slope $1.75$ carries the units of $y$ over the units of $x$, dollars per ride.\nStep 3: Increasing $x$ by $1$ increases $\\hat{y}$ by $1.75$, so each additional ride raises the predicted charge by $\\$1.75$. Check: at $x = 4$ the model gives $\\$13$; at $x = 5$ it gives $\\$14.75$, a rise of $\\$1.75$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: describes the $y$-intercept, which is $6$, not the slope.\n* Choice C: reads the slope as the whole charge and drops the $\\$6$ the model adds at $x = 0$.\n* Choice D: swaps the roles of $x$ and $y$, interpreting the slope as rides per dollar rather than dollars per ride.\n\n**Test Day Takeaway:** Say the slope's units out loud — \"dollars per ride\" — and the interpretation writes itself: one more ride, $\\$1.75$ more charge.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-slope-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-323",
    domain: "problem-solving",
    skills: ["slope-from-points", "scatterplots"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The scatterplot shows the number of chirps per minute $y$ produced by a cricket at each of $10$ air temperatures $x$, in degrees Fahrenheit, along with the line of best fit $\\hat{y} = 4.2x - 160$. Which of the following is the best interpretation of the slope of the line of best fit?",
    diagram: { type: "scatterplot", params: { points: [[52, 62], [56, 78], [60, 88], [64, 110], [68, 122], [72, 148], [76, 156], [80, 180], [84, 190], [88, 208]], xMin: 45, xMax: 95, yMin: 0, yMax: 240, xGridStep: 5, yGridStep: 20, xLabelStep: 10, yLabelStep: 40, xLabel: "Air temperature (°F)", yLabel: "Chirps per minute", bestFitLine: { slope: 4.2, intercept: -160 } } },
    choices: [
      { id: "A", text: "For each increase of $1$ degree Fahrenheit in air temperature, the predicted number of chirps per minute increases by $4.2$." },
      // distractor: inverts the ratio, reporting degrees per chirp instead of chirps per degree.
      { id: "B", text: "For each increase of $1$ chirp per minute, the predicted air temperature increases by $4.2$ degrees Fahrenheit." },
      // distractor: describes a $y$-intercept, and even then the model's intercept is $-160$, not $4.2$.
      { id: "C", text: "At an air temperature of $0$ degrees Fahrenheit, the predicted number of chirps per minute is $4.2$." },
      // distractor: treats the slope as a constant predicted value, which would require a slope of $0$.
      { id: "D", text: "The predicted number of chirps per minute is $4.2$ at every air temperature." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The slope $4.2$ is measured in chirps per minute per degree Fahrenheit, so one more degree predicts $4.2$ more chirps per minute.\n\n**The Full Solution:**\nStep 1: In $\\hat{y} = 4.2x - 160$, $x$ is the air temperature in degrees Fahrenheit and $\\hat{y}$ predicts chirps per minute.\nStep 2: Slope is $\\frac{\\text{change in } \\hat{y}}{\\text{change in } x}$, so its units are chirps per minute per degree.\nStep 3: Raising $x$ by $1$ raises $\\hat{y}$ by $4.2$, so each additional degree is associated with about $4.2$ more chirps per minute. Check: at $70$ degrees the model predicts $134$ chirps and at $71$ degrees it predicts $138.2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: inverts the ratio, reporting degrees per chirp instead of chirps per degree.\n* Choice C: describes a $y$-intercept, and even then the model's intercept is $-160$, not $4.2$.\n* Choice D: treats the slope as a constant predicted value, which would require a slope of $0$.\n\n**Test Day Takeaway:** The slope always reads \"change in the $y$-quantity per one unit of the $x$-quantity.\" If a choice reverses those two quantities, it is describing the wrong rate.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-slope-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-324",
    domain: "problem-solving",
    skills: ["slope-from-points", "scatterplots"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The scatterplot shows the volume of water $y$, in liters, in a rain barrel $x$ minutes after a steady rain began, for $8$ readings, along with the line of best fit $\\hat{y} = 0.45x + 12$. According to the line of best fit, what is the predicted increase in the volume of water, in liters, during a $20$-minute period?",
    diagram: { type: "scatterplot", params: { points: [[5, 15], [10, 16], [15, 20], [25, 22], [30, 27], [40, 29], [50, 36], [60, 38]], xMin: 0, xMax: 60, yMin: 0, yMax: 45, xGridStep: 5, yGridStep: 5, xLabelStep: 10, yLabelStep: 10, xLabel: "Minutes since rain began", yLabel: "Volume of water (liters)", bestFitLine: { slope: 0.45, intercept: 12 } } },
    choices: [
      // distractor: reports the slope itself, the increase over $1$ minute rather than over $20$ minutes.
      { id: "A", text: "$0.45$" },
      { id: "B", text: "$9$" },
      // distractor: reports the $y$-intercept, the predicted volume at the moment the rain began.
      { id: "C", text: "$12$" },
      // distractor: evaluates the model at $x = 20$, $0.45(20) + 12 = 21$, giving a predicted volume rather than an increase.
      { id: "D", text: "$21$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The slope is $0.45$ liter per minute, so over $20$ minutes the predicted increase is $0.45(20) = 9$ liters.\n\n**The Full Solution:**\nStep 1: A change in the predicted value equals the slope times the change in $x$, and the intercept never enters a change calculation.\nStep 2: Here the slope is $0.45$ liter per minute and the change in $x$ is $20$ minutes.\nStep 3: The predicted increase is $0.45 \\times 20 = 9$ liters. Check: at $x = 30$ the model gives $25.5$ liters and at $x = 50$ it gives $34.5$ liters, a difference of $9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.45$): reports the slope itself, the increase over $1$ minute rather than over $20$ minutes.\n* Choice C ($12$): reports the $y$-intercept, the predicted volume at the moment the rain began.\n* Choice D ($21$): evaluates the model at $x = 20$, $0.45(20) + 12 = 21$, giving a predicted volume rather than an increase.\n\n**Test Day Takeaway:** \"How much does it change\" uses slope $\\times$ change in $x$ only. \"What is the value\" uses the whole equation, intercept included.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-slope-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-325",
    domain: "problem-solving",
    skills: ["slope-from-points", "scatterplots"],
    difficulty: "medium",
    type: "fill-in",
    question: "A linear model predicts the internal temperature $y$, in degrees Fahrenheit, of a packed cooler $x$ hours after it is sealed: $\\hat{y} = 2.4x + 38$. According to this model, by how many degrees Fahrenheit does the predicted internal temperature increase during a $5$-hour period?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~10s):** The slope is $2.4$ degrees per hour, so over $5$ hours the predicted rise is $2.4(5) = 12$ degrees.\n\n**The Full Solution:**\nStep 1: In $\\hat{y} = 2.4x + 38$, the coefficient $2.4$ is the predicted change in temperature for each additional hour.\nStep 2: A change in the predicted value equals the slope times the change in $x$: $2.4 \\times 5$.\nStep 3: The predicted increase is $12$ degrees Fahrenheit. Check: at $x = 2$ the model gives $42.8$ and at $x = 7$ it gives $54.8$, a difference of $12$. $\\checkmark$\n\n**Common Mistakes:** Evaluating the model at $x = 5$ gives $2.4(5) + 38 = 50$, the predicted temperature rather than the increase. Reporting the slope $2.4$ answers for a $1$-hour period. Adding instead of multiplying gives $2.4 + 5 = 7.4$.\n\n**Test Day Takeaway:** An increase over an interval is slope $\\times$ interval length. The intercept belongs only to questions asking for a predicted value.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-slope-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-326",
    domain: "problem-solving",
    skills: ["slope-from-points", "scatterplots"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The scatterplot shows the number of registered electric vehicles $y$, in thousands, in a county in each of $12$ years, where $x$ is the number of years since $2010$, along with the line of best fit $\\hat{y} = 3.6x + 14$. Which of the following is the best interpretation of the slope of the line of best fit?",
    diagram: { type: "scatterplot", params: { points: [[0, 15], [1, 16], [2, 23], [3, 23], [4, 30], [5, 31], [6, 34], [7, 41], [8, 43], [9, 45], [10, 52], [11, 53]], xMin: 0, xMax: 12, yMin: 0, yMax: 60, xGridStep: 1, yGridStep: 5, xLabelStep: 2, yLabelStep: 10, xLabel: "Years since 2010", yLabel: "Registered EVs (thousands)", bestFitLine: { slope: 3.6, intercept: 14 } } },
    choices: [
      // distractor: describes the value at $x = 0$, which the model puts at $14$ thousand, not the slope.
      { id: "A", text: "In $2010$, about $3{,}600$ electric vehicles were registered in the county." },
      { id: "B", text: "The number of registered electric vehicles in the county increased by about $3{,}600$ each year." },
      // distractor: ignores that $y$ is measured in thousands, so it undercounts the yearly increase by a factor of $1{,}000$.
      { id: "C", text: "The number of registered electric vehicles in the county increased by about $3.6$ each year." },
      // distractor: inverts the rate, reading years per thousand vehicles instead of thousands of vehicles per year.
      { id: "D", text: "It took about $3.6$ years for the number of registered electric vehicles in the county to increase by $1{,}000$." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The slope is $3.6$ thousand vehicles per year, and $3.6$ thousand is $3{,}600$ vehicles per year.\n\n**The Full Solution:**\nStep 1: In $\\hat{y} = 3.6x + 14$, $x$ counts years since $2010$ and $\\hat{y}$ predicts registrations in thousands.\nStep 2: The slope gives the predicted change in $\\hat{y}$ for each additional year, so registrations rise by $3.6$ thousand per year.\nStep 3: Converting the unit, $3.6$ thousand $= 3{,}600$ vehicles per year. Check: from $x = 5$ to $x = 6$ the model rises from $32$ to $35.6$ thousand, an increase of $3.6$ thousand. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: describes the value at $x = 0$, which the model puts at $14$ thousand, not the slope.\n* Choice C: ignores that $y$ is measured in thousands, so it undercounts the yearly increase by a factor of $1{,}000$.\n* Choice D: inverts the rate, reading years per thousand vehicles instead of thousands of vehicles per year.\n\n**Test Day Takeaway:** When an axis is labeled \"in thousands,\" convert the slope before interpreting it. The number on the axis is not the number of things.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-slope-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-327",
    domain: "problem-solving",
    skills: ["slope-from-points", "scatterplots"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A linear model predicts the mass $y$, in grams, of a bar of soap after $x$ days of use: $\\hat{y} = -2.8x + 120$. According to this model, what is the predicted mass, in grams, of the bar after $15$ days of use?",
    choices: [
      // distractor: reports $2.8(15) = 42$, the predicted decrease over the $15$ days rather than the remaining mass.
      { id: "A", text: "$42$" },
      { id: "B", text: "$78$" },
      // distractor: subtracts the slope once, $120 - 2.8$, applying the daily loss for a single day.
      { id: "C", text: "$117.2$" },
      // distractor: adds the $42$-gram change instead of subtracting it, treating the negative slope as positive.
      { id: "D", text: "$162$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Substitute $x = 15$: $-2.8(15) + 120 = -42 + 120 = 78$ grams.\n\n**The Full Solution:**\nStep 1: A predicted value comes from substituting into the model, not from the slope alone.\nStep 2: The bar loses $2.8$ grams per day, so over $15$ days it loses $2.8(15) = 42$ grams.\nStep 3: The predicted mass is $120 - 42 = 78$ grams. Check: the model starts at $120$ grams and reaches $0$ at about $x = 43$, so a value of $78$ at day $15$ is reasonable. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($42$): reports $2.8(15) = 42$, the predicted decrease over the $15$ days rather than the remaining mass.\n* Choice C ($117.2$): subtracts the slope once, $120 - 2.8$, applying the daily loss for a single day.\n* Choice D ($162$): adds the $42$-gram change instead of subtracting it, treating the negative slope as positive.\n\n**Test Day Takeaway:** A negative slope means the total change is subtracted from the intercept. Compute slope $\\times x$ first, then decide whether to add or subtract based on the sign.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-slope-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-328",
    domain: "problem-solving",
    skills: ["slope-from-points", "scatterplots"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A linear model relates the fuel use $y$, in liters per $100$ kilometers, of a delivery van to the mass $x$, in kilograms, of its cargo: $\\hat{y} = 0.004x + 9.5$. According to this model, an increase of $500$ kilograms in cargo mass is associated with which of the following changes in predicted fuel use?",
    choices: [
      // distractor: computes the size of the change correctly but reverses its direction; the slope is positive, so fuel use rises.
      { id: "A", text: "A decrease of $2$ liters per $100$ kilometers" },
      { id: "B", text: "An increase of $2$ liters per $100$ kilometers" },
      // distractor: reports the slope, the change for $1$ additional kilogram rather than for $500$.
      { id: "C", text: "An increase of $0.004$ liter per $100$ kilometers" },
      // distractor: evaluates $0.004(500) + 9.5 = 11.5$, a predicted fuel-use level rather than a change in fuel use.
      { id: "D", text: "An increase of $11.5$ liters per $100$ kilometers" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Change in $\\hat{y}$ is slope times change in $x$: $0.004(500) = 2$, and the positive slope makes it an increase.\n\n**The Full Solution:**\nStep 1: The slope $0.004$ is the predicted change in fuel use, in liters per $100$ kilometers, for each additional kilogram of cargo.\nStep 2: For a $500$-kilogram increase, the predicted change is $0.004 \\times 500 = 2$ liters per $100$ kilometers.\nStep 3: Because the slope is positive, heavier cargo predicts more fuel use, so this is an increase of $2$ liters per $100$ kilometers. Check: at $x = 0$ the model predicts $9.5$ and at $x = 500$ it predicts $11.5$, a difference of $2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: computes the size of the change correctly but reverses its direction; the slope is positive, so fuel use rises.\n* Choice C: reports the slope, the change for $1$ additional kilogram rather than for $500$.\n* Choice D: evaluates $0.004(500) + 9.5 = 11.5$, a predicted fuel-use level rather than a change in fuel use.\n\n**Test Day Takeaway:** Scale the slope to the interval the question names, then read the sign of the slope to state the direction. A predicted level and a predicted change are different answers.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-slope-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-329",
    domain: "problem-solving",
    skills: ["slope-from-points", "scatterplots"],
    difficulty: "hard",
    type: "fill-in",
    question: "The scatterplot shows the mass $y$, in kilograms, of a compost pile $x$ weeks after it was started, for $10$ weekly readings. The line of best fit shown passes through the points $(3, 46)$ and $(15, 118)$. According to the line of best fit, what is the predicted mass, in kilograms, of the compost pile $12$ weeks after it was started?",
    diagram: { type: "scatterplot", params: { points: [[1, 32], [3, 49], [5, 55], [6, 67], [8, 73], [10, 90], [11, 91], [13, 109], [15, 115], [16, 127]], xMin: 0, xMax: 18, yMin: 0, yMax: 140, xGridStep: 2, yGridStep: 10, xLabelStep: 4, yLabelStep: 20, xLabel: "Weeks since started", yLabel: "Mass of compost (kg)", bestFitLine: { slope: 6, intercept: 28 } } },
    correctAnswer: "100",
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**The correct answer is $100$.**\n\n**The Fast Way (~35s):** The slope is $\\frac{118 - 46}{15 - 3} = 6$, so $46 = 6(3) + b$ gives $b = 28$ and $\\hat{y} = 6(12) + 28 = 100$ kilograms.\n\n**The Full Solution:**\nStep 1: A predicted value needs the whole equation, so start with the slope from the two given points: $\\frac{118 - 46}{15 - 3} = \\frac{72}{12} = 6$ kilograms per week.\nStep 2: Substitute $(3, 46)$ into $\\hat{y} = 6x + b$: $46 = 6(3) + b = 18 + b$, so $b = 28$ and the line of best fit is $\\hat{y} = 6x + 28$.\nStep 3: At $x = 12$ weeks, $\\hat{y} = 6(12) + 28 = 72 + 28 = 100$ kilograms. Check: the other given point fits, $6(15) + 28 = 118$, and $100$ falls between the week-$11$ and week-$13$ readings on the scatterplot. $\\checkmark$\n\n**Common Mistakes:** Reporting $6$ gives the slope, the weekly gain rather than a mass. Using the slope without the intercept gives $6(12) = 72$. Averaging the two given masses gives $\\frac{46 + 118}{2} = 82$, which is the predicted mass at week $9$, the midpoint of the two given weeks, not at week $12$.\n\n**Test Day Takeaway:** Two points give the slope, one point then gives the intercept, and only the full equation gives a prediction. Confirm the equation on the second point before substituting.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-slope-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── Q.D. INTERPRET INTERCEPT OF BEST FIT LINE (bank-ps-330..337) ─────────
  // Y-intercept of best-fit = predicted y-value when x = 0; may or may not be meaningful.
  {
    id: "bank-ps-330",
    domain: "problem-solving",
    skills: ["slope-from-points", "scatterplots"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A linear model gives the total charge $y$, in dollars, for renting a kayak for $x$ hours: $\\hat{y} = 9x + 14$. Which of the following is the best interpretation of the $y$-intercept of this model?",
    choices: [
      { id: "A", text: "A fixed charge of $\\$14$ applies to the rental before any hourly charge." },
      // distractor: describes the slope, which is $9$ dollars per hour, not the intercept.
      { id: "B", text: "The charge for each hour of the rental is $\\$14$." },
      // distractor: evaluates at $x = 1$, which the model puts at $9(1) + 14 = 23$ dollars, not $14$.
      { id: "C", text: "The total charge for a $1$-hour rental is $\\$14$." },
      // distractor: reads $14$ as a number of hours, but $14$ is a value of $y$ and $y$ is measured in dollars.
      { id: "D", text: "A rental lasts $14$ hours." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The $y$-intercept is the value of $\\hat{y}$ when $x = 0$: $\\hat{y} = 9(0) + 14 = 14$ dollars charged before any hours are counted.\n\n**The Full Solution:**\nStep 1: The $y$-intercept of $\\hat{y} = 9x + 14$ is $14$, the predicted charge when $x = 0$ hours.\nStep 2: In this context $x = 0$ means no hourly time has been billed, so $\\$14$ is charged regardless of the rental length.\nStep 3: That is a fixed charge applied on top of the $\\$9$ per hour. Check: a $2$-hour rental costs $9(2) + 14 = \\$32$, which is the fixed $\\$14$ plus $\\$18$ of hourly charges. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: describes the slope, which is $9$ dollars per hour, not the intercept.\n* Choice C: evaluates at $x = 1$, which the model puts at $9(1) + 14 = 23$ dollars, not $14$.\n* Choice D: reads $14$ as a number of hours, but $14$ is a value of $y$ and $y$ is measured in dollars.\n\n**Test Day Takeaway:** The intercept is the predicted $y$ at $x = 0$, and it carries the units of $y$. In a cost model, that is the fixed part of the bill.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-intercept-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-331",
    domain: "problem-solving",
    skills: ["slope-from-points", "scatterplots"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A linear model gives the volume of water $y$, in gallons, in a tank $x$ minutes after a pump is switched on: $\\hat{y} = 7.5x + 40$. Which of the following is the best interpretation of the value $40$ in this model?",
    choices: [
      // distractor: assigns the intercept the slope's job; the per-minute gain is $7.5$ gallons.
      { id: "A", text: "The tank gains $40$ gallons of water each minute." },
      { id: "B", text: "The tank contained $40$ gallons of water when the pump was switched on." },
      // distractor: reads $40$ as a time, but $40$ is a value of $y$, measured in gallons.
      { id: "C", text: "The tank takes $40$ minutes to fill." },
      // distractor: treats the starting amount as a capacity, though the model shows the volume growing past $40$ gallons.
      { id: "D", text: "The tank holds a maximum of $40$ gallons of water." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** At $x = 0$, the model gives $\\hat{y} = 40$: the tank already held $40$ gallons the moment the pump started.\n\n**The Full Solution:**\nStep 1: The value $40$ is the constant term, so it is the predicted volume when $x = 0$ minutes.\nStep 2: $x = 0$ is the instant the pump is switched on.\nStep 3: So the tank contained $40$ gallons at that instant, and the pump adds $7.5$ gallons per minute after that. Check: after $4$ minutes the model predicts $7.5(4) + 40 = 70$ gallons, which is $40$ gallons plus $30$ gallons pumped in. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: assigns the intercept the slope's job; the per-minute gain is $7.5$ gallons.\n* Choice C: reads $40$ as a time, but $40$ is a value of $y$, measured in gallons.\n* Choice D: treats the starting amount as a capacity, though the model shows the volume growing past $40$ gallons.\n\n**Test Day Takeaway:** Ask what $x = 0$ means in the story. The intercept is the predicted amount at that moment, in the units of $y$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-intercept-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-332",
    domain: "problem-solving",
    skills: ["slope-from-points", "scatterplots"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A linear model gives the concentration $y$, in milligrams per liter, of a medication in a patient's blood $x$ hours after a dose is taken: $\\hat{y} = -1.6x + 20$. Which of the following is the best interpretation of the value $20$ in this model?",
    choices: [
      { id: "A", text: "The predicted concentration at the moment the dose is taken is $20$ milligrams per liter." },
      // distractor: gives the intercept the slope's role; the hourly decrease is $1.6$ milligrams per liter.
      { id: "B", text: "The concentration decreases by $20$ milligrams per liter each hour." },
      // distractor: reads $20$ as a time; setting $\hat{y} = 0$ actually gives $x = 12.5$ hours.
      { id: "C", text: "The predicted concentration reaches $0$ milligrams per liter $20$ hours after the dose." },
      // distractor: reads $20$ as a time again, and the model's greatest predicted concentration occurs at $x = 0$.
      { id: "D", text: "The greatest predicted concentration occurs $20$ hours after the dose." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Substituting $x = 0$ gives $\\hat{y} = 20$, the predicted concentration at the moment the dose is taken.\n\n**The Full Solution:**\nStep 1: The constant term $20$ is the value of $\\hat{y}$ when $x = 0$.\nStep 2: Here $x$ counts hours after the dose, so $x = 0$ is the moment of the dose.\nStep 3: The model therefore predicts a concentration of $20$ milligrams per liter at that moment, falling by $1.6$ milligrams per liter each hour after. Check: at $x = 5$ the model gives $-1.6(5) + 20 = 12$, below the starting value, as a decreasing model requires. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: gives the intercept the slope's role; the hourly decrease is $1.6$ milligrams per liter.\n* Choice C: reads $20$ as a time; setting $\\hat{y} = 0$ actually gives $x = 12.5$ hours.\n* Choice D: reads $20$ as a time again, and the model's greatest predicted concentration occurs at $x = 0$.\n\n**Test Day Takeaway:** A negative slope does not change how the intercept is read. It is still the predicted $y$ at $x = 0$, in the units of $y$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-intercept-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-333",
    domain: "problem-solving",
    skills: ["slope-from-points", "scatterplots"],
    difficulty: "medium",
    type: "fill-in",
    question: "A linear model gives the volume of water $y$, in gallons, remaining in a barrel $x$ days after a leak began: $\\hat{y} = -3.5x + 42$. According to this model, how many gallons of water were in the barrel when the leak began?",
    correctAnswer: "42",
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**The correct answer is $42$.**\n\n**The Fast Way (~10s):** The leak began at $x = 0$, and $\\hat{y} = -3.5(0) + 42 = 42$ gallons.\n\n**The Full Solution:**\nStep 1: The phrase \"when the leak began\" sets $x = 0$, since $x$ counts days after the leak began.\nStep 2: Substituting $x = 0$ into $\\hat{y} = -3.5x + 42$ leaves only the constant term.\nStep 3: The predicted starting volume is $42$ gallons. Check: after $2$ days the model predicts $35$ gallons, which is $42$ gallons minus $2$ days of $3.5$-gallon losses. $\\checkmark$\n\n**Common Mistakes:** Reporting $3.5$ gives the daily loss, the slope, instead of the starting volume. Reporting $38.5$ evaluates at $x = 1$ rather than $x = 0$. Solving $-3.5x + 42 = 0$ gives $12$, the day the model predicts the barrel is empty, which answers a different question.\n\n**Test Day Takeaway:** \"At the start,\" \"originally,\" and \"before any time passed\" all mean $x = 0$, so the answer is the constant term of the model.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-intercept-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-334",
    domain: "problem-solving",
    skills: ["slope-from-points", "scatterplots"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A linear model relates the resale value $y$, in dollars, of a used tractor to the number of hours $x$ the tractor has been operated: $\\hat{y} = -1.2x + 46{,}000$. Which of the following is the best interpretation of the $y$-intercept of this model?",
    choices: [
      { id: "A", text: "The predicted resale value of a tractor that has been operated for $0$ hours is $\\$46{,}000$." },
      // distractor: attaches the intercept to the per-hour rate; the model's hourly decrease is $\$1.20$.
      { id: "B", text: "The predicted resale value decreases by $\\$46{,}000$ for each hour the tractor is operated." },
      // distractor: reads $46{,}000$ as a number of hours; solving $-1.2x + 46{,}000 = 0$ actually gives about $38{,}333$ hours.
      { id: "C", text: "The predicted resale value reaches $\\$0$ after $46{,}000$ hours of operation." },
      // distractor: describes the slope and drops its negative sign, so it reverses the direction of the change.
      { id: "D", text: "The predicted resale value increases by $\\$1.20$ for each hour the tractor is operated." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The $y$-intercept is $\\hat{y}$ at $x = 0$: a tractor with $0$ hours of operation has predicted resale value $\\$46{,}000$.\n\n**The Full Solution:**\nStep 1: In $\\hat{y} = -1.2x + 46{,}000$, the constant $46{,}000$ is the predicted value when $x = 0$.\nStep 2: The variable $x$ counts hours of operation, so $x = 0$ describes a tractor that has not been operated.\nStep 3: The model predicts a resale value of $\\$46{,}000$ for such a tractor, then subtracts $\\$1.20$ for each hour operated. Check: at $x = 1{,}000$ hours the model predicts $46{,}000 - 1{,}200 = \\$44{,}800$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: attaches the intercept to the per-hour rate; the model's hourly decrease is $\\$1.20$.\n* Choice C: reads $46{,}000$ as a number of hours; solving $-1.2x + 46{,}000 = 0$ actually gives about $38{,}333$ hours.\n* Choice D: describes the slope and drops its negative sign, so it reverses the direction of the change.\n\n**Test Day Takeaway:** Intercept answers \"how much at zero\"; slope answers \"how much per unit.\" Match each number to the question it answers before reading the choices.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-intercept-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-335",
    domain: "problem-solving",
    skills: ["slope-from-points", "scatterplots"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A print shop's charge for an order of posters is modeled by $\\hat{y} = 2.4x + 18$, where $y$ is the total charge, in dollars, for an order of $x$ posters. Which of the following best describes the value $18$ in this model?",
    choices: [
      // distractor: describes the slope $2.4$, the per-poster charge.
      { id: "A", text: "The charge for each poster in the order" },
      { id: "B", text: "A one-time charge applied to the order regardless of the number of posters" },
      // distractor: reads $18$ as a count of posters, but $18$ is a value of $y$ and $y$ is measured in dollars.
      { id: "C", text: "The number of posters included in the order at no additional charge" },
      // distractor: evaluates the model at $x = 1$, which gives $2.4(1) + 18 = \$20.40$, not $\$18$.
      { id: "D", text: "The total charge for an order of $1$ poster" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** At $x = 0$ posters the model still charges $\\$18$, so $\\$18$ is a fixed charge that does not depend on the order size.\n\n**The Full Solution:**\nStep 1: The value $18$ is the constant term, so it is the predicted total charge when $x = 0$.\nStep 2: An order of $0$ posters incurs no per-poster charge, so everything left is charge that applies no matter how many posters are ordered.\nStep 3: That makes $\\$18$ a one-time charge on the order, with $\\$2.40$ added per poster. Check: an order of $10$ posters costs $2.4(10) + 18 = \\$42$, which is $\\$24$ of poster charges plus the $\\$18$ fixed amount. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: describes the slope $2.4$, the per-poster charge.\n* Choice C: reads $18$ as a count of posters, but $18$ is a value of $y$ and $y$ is measured in dollars.\n* Choice D: evaluates the model at $x = 1$, which gives $2.4(1) + 18 = \\$20.40$, not $\\$18$.\n\n**Test Day Takeaway:** In a \"fixed fee plus rate\" model, the constant term is the fee and the coefficient is the rate. Test a choice by substituting $x = 0$ and $x = 1$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-intercept-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-336",
    domain: "problem-solving",
    skills: ["slope-from-points", "scatterplots"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The scatterplot shows the value $y$, in thousands of dollars, of each of $9$ used vans and the number of years $x$ since the van was purchased new. The line of best fit shown passes through the points $(0, 27)$ and $(9, 0)$. Which of the following is the best interpretation of the $y$-intercept of the line of best fit?",
    diagram: { type: "scatterplot", params: { points: [[1, 25], [2, 20], [3, 19], [4, 14], [5, 13], [6, 10], [7, 5], [8, 4], [9, 1]], xMin: 0, xMax: 9, yMin: 0, yMax: 30, xGridStep: 1, yGridStep: 5, xLabelStep: 2, yLabelStep: 10, xLabel: "Years since purchased new", yLabel: "Value (thousands of dollars)", bestFitLine: { slope: -3, intercept: 27 } } },
    choices: [
      { id: "A", text: "At the time of purchase, the predicted value of a van is $\\$27{,}000$." },
      // distractor: reports the intercept as a yearly change; the yearly decrease is $\frac{27 - 0}{9 - 0} = 3$ thousand dollars.
      { id: "B", text: "The predicted value of a van decreases by $\\$27{,}000$ each year." },
      // distractor: reads $27$ as a number of years; the second given point shows the predicted value hits $\$0$ at $9$ years.
      { id: "C", text: "The predicted value of a van reaches $\\$0$ after $27$ years." },
      // distractor: ignores that $y$ is measured in thousands of dollars, understating the value by a factor of $1{,}000$.
      { id: "D", text: "At the time of purchase, the predicted value of a van is $\\$27$." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The point $(0, 27)$ is the $y$-intercept, and $y$ is in thousands of dollars, so a van is predicted to be worth $\\$27{,}000$ when new.\n\n**The Full Solution:**\nStep 1: The $y$-intercept is the point where $x = 0$, which the question gives directly as $(0, 27)$.\nStep 2: Here $x$ counts years since purchase, so $x = 0$ describes a van at the time it was purchased new.\nStep 3: Because $y$ is measured in thousands of dollars, the predicted value is $27$ thousand dollars, or $\\$27{,}000$. Check: the second point $(9, 0)$ makes the slope $-3$ thousand dollars per year, and $27 - 3(9) = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: reports the intercept as a yearly change; the yearly decrease is $\\frac{27 - 0}{9 - 0} = 3$ thousand dollars.\n* Choice C: reads $27$ as a number of years; the second given point shows the predicted value hits $\\$0$ at $9$ years.\n* Choice D: ignores that $y$ is measured in thousands of dollars, understating the value by a factor of $1{,}000$.\n\n**Test Day Takeaway:** Read the axis units before interpreting an intercept. \"In thousands\" means the intercept must be multiplied by $1{,}000$ to be stated in dollars.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-intercept-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-337",
    domain: "problem-solving",
    skills: ["slope-from-points", "scatterplots"],
    difficulty: "hard",
    type: "fill-in",
    question: "A linear model $\\hat{y} = mx + b$ relates the depth $y$, in centimeters, of sediment in a lake basin to the number of years $x$ since measurements began. The model predicts $\\hat{y} = 29$ when $x = 6$ and $\\hat{y} = 45$ when $x = 14$. What is the value of $b$?",
    correctAnswer: "17",
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**The correct answer is $17$.**\n\n**The Fast Way (~25s):** The slope is $\\frac{45 - 29}{14 - 6} = 2$, so $b = 29 - 2(6) = 17$.\n\n**The Full Solution:**\nStep 1: Two points determine the model, so first find $m$: $m = \\frac{45 - 29}{14 - 6} = \\frac{16}{8} = 2$ centimeters per year.\nStep 2: Substitute one point into $\\hat{y} = 2x + b$. Using $(6, 29)$: $29 = 2(6) + b = 12 + b$.\nStep 3: $b = 17$ centimeters. Check with the other point: $2(14) + 17 = 28 + 17 = 45$. $\\checkmark$\n\n**Common Mistakes:** Reporting $2$ gives the slope rather than the intercept. Subtracting the $x$-value directly, $29 - 6 = 23$, skips multiplying by the slope. Adding instead of subtracting gives $29 + 12 = 41$.\n\n**Test Day Takeaway:** Find the slope first, then back out $b$ from a single point, and confirm with the other point. Two given points always allow that check.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-intercept-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── Q.F. healthy-push tail (bank-ps-338..340) ────────────────────────────
  {
    id: "bank-ps-338",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A random sample of $600$ residents of a city was surveyed. Based on the sample, the mean number of hours per week a resident spends volunteering is estimated to be $3.4$ hours, with an associated margin of error of $0.3$ hour. Which of the following is the most appropriate conclusion about the mean number of hours per week all residents of the city spend volunteering?",
    choices: [
      { id: "A", text: "It is plausible that the mean is between $3.1$ hours and $3.7$ hours." },
      // distractor: treats the sample estimate as the exact population value, which is what the margin of error exists to rule out.
      { id: "B", text: "The mean is exactly $3.4$ hours." },
      // distractor: applies the interval to individual residents; the interval estimates the population mean, not each person's hours.
      { id: "C", text: "Every resident of the city volunteers between $3.1$ hours and $3.7$ hours per week." },
      // distractor: uses the margin of error on one side only, halving the interval instead of extending it in both directions.
      { id: "D", text: "It is plausible that the mean is between $3.4$ hours and $3.7$ hours." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Margin of Error**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The plausible interval is estimate $\\pm$ margin of error: $3.4 - 0.3 = 3.1$ to $3.4 + 0.3 = 3.7$ hours.\n\n**The Full Solution:**\nStep 1: A margin of error is applied in both directions around the sample estimate.\nStep 2: The lower bound is $3.4 - 0.3 = 3.1$ hours and the upper bound is $3.4 + 0.3 = 3.7$ hours.\nStep 3: The appropriate conclusion is that the mean for all residents plausibly lies between $3.1$ and $3.7$ hours. Check: the interval is centered on $3.4$ and is $2(0.3) = 0.6$ hour wide. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: treats the sample estimate as the exact population value, which is what the margin of error exists to rule out.\n* Choice C: applies the interval to individual residents; the interval estimates the population mean, not each person's hours.\n* Choice D: uses the margin of error on one side only, halving the interval instead of extending it in both directions.\n\n**Test Day Takeaway:** Estimate $\\pm$ margin of error gives a plausible range for the population value — not a guarantee, and never a range for individual members of the population.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "margin-of-error",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-339",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "To estimate the percentage of households in a county that own a bicycle, a random sample of $400$ households was selected, and the estimate had an associated margin of error of $4.8$ percentage points. The study was repeated with a new random sample of $1{,}600$ households from the same county, using the same methods. Which of the following is closest to the margin of error associated with the new estimate?",
    choices: [
      // distractor: divides the margin of error by $4$, the sample-size factor, instead of by $\sqrt{4} = 2$.
      { id: "A", text: "$1.2$ percentage points" },
      { id: "B", text: "$2.4$ percentage points" },
      // distractor: assumes a larger sample leaves the margin of error unchanged.
      { id: "C", text: "$4.8$ percentage points" },
      // distractor: multiplies by $4$, making the margin of error grow when the sample grows.
      { id: "D", text: "$19.2$ percentage points" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The sample size is multiplied by $4$, and the margin of error scales with $\\frac{1}{\\sqrt{n}}$, so it is divided by $\\sqrt{4} = 2$: $\\frac{4.8}{2} = 2.4$.\n\n**The Full Solution:**\nStep 1: With the same methods and population, the margin of error is inversely proportional to $\\sqrt{n}$.\nStep 2: The sample size goes from $400$ to $1{,}600$, a factor of $\\frac{1{,}600}{400} = 4$, so $\\sqrt{n}$ grows by a factor of $2$.\nStep 3: The margin of error is therefore about $\\frac{4.8}{2} = 2.4$ percentage points. Check: to halve a margin of error you need four times the sample, which is exactly the change described. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.2$): divides the margin of error by $4$, the sample-size factor, instead of by $\\sqrt{4} = 2$.\n* Choice C ($4.8$): assumes a larger sample leaves the margin of error unchanged.\n* Choice D ($19.2$): multiplies by $4$, making the margin of error grow when the sample grows.\n\n**Test Day Takeaway:** Margin of error shrinks with the square root of the sample size: four times the data cuts it in half, nine times the data cuts it to a third.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "sample-size-for-margin-reduction",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-340",
    domain: "problem-solving",
    skills: ["margin-of-error"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A random sample of $900$ registered voters in a state was surveyed. Based on the sample, the proportion of all registered voters in the state who support a ballot measure is estimated to be $0.52$, with an associated $95\\%$ confidence interval from $0.49$ to $0.55$. Which of the following statements is best supported by this confidence interval?",
    choices: [
      // distractor: reports the sample estimate as an exact population value, which the width of the interval explicitly denies.
      { id: "A", text: "Exactly $52\\%$ of all registered voters in the state support the ballot measure." },
      // distractor: treats the interval as open at the top, but $0.55$ is the largest plausible proportion, so nothing above $55\%$ is supported.
      { id: "B", text: "It is plausible that more than $55\\%$ of all registered voters in the state support the ballot measure." },
      { id: "C", text: "It is plausible that fewer than half of all registered voters in the state support the ballot measure." },
      // distractor: reads only the center of the interval; because $0.50$ lies inside $[0.49,\ 0.55]$, a minority is still plausible.
      { id: "D", text: "More than half of all registered voters in the state support the ballot measure, because the estimate $0.52$ is greater than $0.50$." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The interval runs from $0.49$ to $0.55$, and $0.49 < 0.50$. Values below one half are inside the interval, so a minority of support is plausible.\n\n**The Full Solution:**\nStep 1: A confidence interval gives the range of plausible values for the population proportion: values inside it are plausible, and values outside it are not supported.\nStep 2: The interval $[0.49,\\ 0.55]$ contains $0.50$, so proportions on both sides of one half are plausible.\nStep 3: In particular $0.49$ is plausible, which means fewer than half of all registered voters supporting the measure cannot be ruled out. Check: an interval that supported a majority claim would have to lie entirely above $0.50$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: reports the sample estimate as an exact population value, which the width of the interval explicitly denies.\n* Choice B: treats the interval as open at the top, but $0.55$ is the largest plausible proportion, so nothing above $55\\%$ is supported.\n* Choice D: reads only the center of the interval; because $0.50$ lies inside $[0.49,\\ 0.55]$, a minority is still plausible.\n\n**Test Day Takeaway:** Check whether the decisive value — here $0.50$ — falls inside the interval. If it does, no claim about which side of it the population lies on is supported.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "confidence-interval-interpretation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── Q.D. healthy-push tail (bank-ps-341..342) ────────────────────────────
  {
    id: "bank-ps-341",
    domain: "problem-solving",
    skills: ["slope-from-points", "scatterplots"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The scatterplot shows the mass $y$, in metric tons, of de-icing salt remaining in a depot on day $x$ of a winter season, for $10$ days, along with the line of best fit $\\hat{y} = -2.4x + 96$. According to the line of best fit, on which day is the predicted mass of salt remaining equal to $0$ metric tons?",
    diagram: { type: "scatterplot", params: { points: [[2, 93], [5, 82], [8, 74], [11, 67], [14, 64], [17, 53], [20, 46], [23, 43], [26, 35], [29, 25]], xMin: 0, xMax: 32, yMin: 0, yMax: 100, xGridStep: 2, yGridStep: 10, xLabelStep: 8, yLabelStep: 20, xLabel: "Day of season", yLabel: "Salt remaining (metric tons)", bestFitLine: { slope: -2.4, intercept: 96 } } },
    choices: [
      { id: "A", text: "$40$" },
      // distractor: divides $96$ by $2$ rather than by the slope's magnitude $2.4$.
      { id: "B", text: "$48$" },
      // distractor: reads the $y$-intercept $96$ as a day number instead of a mass.
      { id: "C", text: "$96$" },
      // distractor: multiplies by the slope, $96 \times 2.4$, instead of dividing by it.
      { id: "D", text: "$230.4$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Set $\\hat{y} = 0$: $0 = -2.4x + 96$, so $2.4x = 96$ and $x = 40$.\n\n**The Full Solution:**\nStep 1: \"Predicted mass equal to $0$\" means substituting $\\hat{y} = 0$ into the line of best fit.\nStep 2: $0 = -2.4x + 96$ gives $2.4x = 96$.\nStep 3: $x = \\frac{96}{2.4} = 40$, so the model predicts the depot is empty on day $40$. Check: the depot starts at $96$ tons and loses $2.4$ tons per day, and $2.4(40) = 96$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($48$): divides $96$ by $2$ rather than by the slope's magnitude $2.4$.\n* Choice C ($96$): reads the $y$-intercept $96$ as a day number instead of a mass.\n* Choice D ($230.4$): multiplies by the slope, $96 \\times 2.4$, instead of dividing by it.\n\n**Test Day Takeaway:** \"When does the model reach $0$\" is an $x$-intercept question: set $\\hat{y} = 0$ and divide the starting value by the per-unit rate.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-slope-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-ps-342",
    domain: "problem-solving",
    skills: ["slope-from-points", "scatterplots"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The scatterplot shows the monthly electricity use $y$, in kilowatt-hours, of a workshop and the number of machines $x$ in operation that month, for $9$ months, along with the line of best fit $\\hat{y} = 145x + 60$. In the month with $6$ machines in operation, the recorded electricity use was $1{,}000$ kilowatt-hours. What is the residual for that month, in kilowatt-hours?",
    diagram: { type: "scatterplot", params: { points: [[2, 340], [3, 520], [4, 610], [5, 800], [6, 1000], [7, 1050], [8, 1240], [9, 1330], [10, 1540]], xMin: 0, xMax: 11, yMin: 0, yMax: 1800, xGridStep: 1, yGridStep: 200, xLabelStep: 2, yLabelStep: 400, xLabel: "Machines in operation", yLabel: "Electricity use (kWh)", bestFitLine: { slope: 145, intercept: 60 } } },
    choices: [
      // distractor: subtracts in the reverse order, predicted minus actual, which flips the sign of the residual.
      { id: "A", text: "$-70$" },
      { id: "B", text: "$70$" },
      // distractor: reports the predicted value $145(6) + 60 = 930$ instead of the difference.
      { id: "C", text: "$930$" },
      // distractor: reports the recorded value, the height of the data point rather than its distance from the line.
      { id: "D", text: "$1{,}000$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Predicted use is $145(6) + 60 = 930$, so the residual is $1{,}000 - 930 = 70$ kilowatt-hours.\n\n**The Full Solution:**\nStep 1: A residual is the actual value minus the value the model predicts at that same $x$.\nStep 2: At $x = 6$ the line of best fit predicts $145(6) + 60 = 870 + 60 = 930$ kilowatt-hours.\nStep 3: The residual is $1{,}000 - 930 = 70$ kilowatt-hours. Check: the point lies above the line on the scatterplot, and a point above the line has a positive residual. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-70$): subtracts in the reverse order, predicted minus actual, which flips the sign of the residual.\n* Choice C ($930$): reports the predicted value $145(6) + 60 = 930$ instead of the difference.\n* Choice D ($1{,}000$): reports the recorded value, the height of the data point rather than its distance from the line.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted, in that order. Above the line is positive, below the line is negative — check the sign against the picture before answering.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "residual",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── Q.C. MODE FROM LIST (bank-ps-343..348) — top-up to ≥8 ────────────────
  // Already have 2 (Mode Identification, Mode of Shoe Sizes); aliases land
  // them under `mode-from-list`. Adding 6 more for the Tier-1 threshold.
  {
    id: "bank-ps-343",
    domain: "problem-solving",
    skills: ["find-mode"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The dot plot shows the number of pieces of mail delivered to a post office box on each of $12$ days. What is the mode of the numbers of pieces of mail delivered?",
    diagram: { type: "dotPlot", params: { data: [{ value: 0, count: 1 }, { value: 1, count: 5 }, { value: 2, count: 2 }, { value: 3, count: 1 }, { value: 4, count: 2 }, { value: 7, count: 1 }], xMin: 0, xMax: 8, xLabel: "Pieces of mail delivered" } },
    choices: [
      { id: "A", text: "$1$" },
      // distractor: reports the median, the average of the $6$th and $7$th dots, $\frac{1 + 2}{2}$.
      { id: "B", text: "$1.5$" },
      // distractor: reports the mean, $\frac{27}{12} = 2.25$.
      { id: "C", text: "$2.25$" },
      // distractor: reports the height of the tallest stack, a frequency rather than the value that repeats.
      { id: "D", text: "$5$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Mode from List**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** The tallest stack of dots sits above $1$, so the mode is $1$.\n\n**The Full Solution:**\nStep 1: On a dot plot each dot is one day, and the value on the axis is what was recorded that day.\nStep 2: The stacks have heights $1$, $5$, $2$, $1$, $2$, and $1$ above the values $0$, $1$, $2$, $3$, $4$, and $7$.\nStep 3: The greatest height, $5$, sits above the value $1$, so the mode is $1$ piece of mail. Check: no other value occurs more than twice. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($1.5$): reports the median, the average of the $6$th and $7$th dots, $\\frac{1 + 2}{2}$.\n* Choice C ($2.25$): reports the mean, $\\frac{27}{12} = 2.25$.\n* Choice D ($5$): reports the height of the tallest stack, a frequency rather than the value that repeats.\n\n**Test Day Takeaway:** The mode is read off the horizontal axis, not the vertical count. Find the tallest stack, then look down at the number under it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "mode-from-list",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-344",
    domain: "problem-solving",
    skills: ["find-mode"],
    difficulty: "easy",
    type: "fill-in",
    question: "The number of rooms occupied at an inn on each of $9$ nights was $23$, $31$, $27$, $31$, $25$, $31$, $29$, $24$, and $28$. What is the mode of these numbers?",
    correctAnswer: "31",
    explanation: "**SAT Pattern: Mode from List**\n\n**The correct answer is $31$.**\n\n**The Fast Way (~10s):** Only $31$ appears more than once — three times — so it is the mode.\n\n**The Full Solution:**\nStep 1: The mode is the value that occurs most often in the list.\nStep 2: Tally the values: $31$ appears three times, and $23$, $24$, $25$, $27$, $28$, and $29$ each appear once.\nStep 3: The most frequent value is $31$ rooms. Check: the three $31$s account for three of the nine nights, more than any other value. $\\checkmark$\n\n**Common Mistakes:** Reporting $3$, the number of times the mode occurs, rather than the value itself. Sorting the list and reporting the middle value gives the median, $28$. Averaging the nine values gives about $27.67$, the mean.\n\n**Test Day Takeaway:** Mode, median, and mean answer three different questions. \"Occurs most often\" is a count of repeats, and the answer is always one of the listed values.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "mode-from-list",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-345",
    domain: "problem-solving",
    skills: ["find-mode"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table shows the number of games won by each member of a chess club during a tournament and the number of members who won that many games. What is the mode of the numbers of games won by the members?",
    diagram: { type: "dataTable", params: { headers: ["Games won", "Number of members"], rows: [["0", "2"], ["1", "9"], ["2", "4"], ["3", "6"], ["4", "5"]] } },
    choices: [
      { id: "A", text: "$1$" },
      // distractor: reports the median of the $26$ values, which falls at $2$ games, rather than the most frequent value.
      { id: "B", text: "$2$" },
      // distractor: reports the largest entry in the "Games won" column instead of the value with the largest frequency.
      { id: "C", text: "$4$" },
      // distractor: reports the largest frequency, the number of members, rather than the number of games those members won.
      { id: "D", text: "$9$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Mode from List**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The largest frequency in the right column is $9$; the value beside it in the left column is $1$ game won.\n\n**The Full Solution:**\nStep 1: In a frequency table the left column lists the values and the right column tells how many times each occurs.\nStep 2: The frequencies are $2$, $9$, $4$, $6$, and $5$, and the greatest of these is $9$.\nStep 3: The frequency $9$ belongs to the row \"$1$ game won,\" so the mode is $1$. Check: no other number of wins was reported by more than $6$ members. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): reports the median of the $26$ values, which falls at $2$ games, rather than the most frequent value.\n* Choice C ($4$): reports the largest entry in the \"Games won\" column instead of the value with the largest frequency.\n* Choice D ($9$): reports the largest frequency, the number of members, rather than the number of games those members won.\n\n**Test Day Takeaway:** Find the biggest frequency, then read across to the value column. Reporting the frequency itself is the single most common slip on frequency-table mode questions.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "mode-from-list",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-346",
    domain: "problem-solving",
    skills: ["find-mode"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The data set $\\{6,\\ 11,\\ 11,\\ 14,\\ 14,\\ x\\}$ has exactly one mode, and that mode is $14$. What is the value of $x$?",
    choices: [
      // distractor: makes $6$, $11$, and $14$ each occur twice, so the data set would have three modes rather than one.
      { id: "A", text: "$6$" },
      // distractor: makes $11$ occur three times, so the single mode would be $11$, not $14$.
      { id: "B", text: "$11$" },
      // distractor: adds a value that occurs once, leaving $11$ and $14$ tied at two occurrences each, so there would be two modes.
      { id: "C", text: "$12$" },
      { id: "D", text: "$14$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Mode from List**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Without $x$, both $11$ and $14$ occur twice. Only $x = 14$ breaks the tie in favor of $14$.\n\n**The Full Solution:**\nStep 1: Count the fixed values: $6$ occurs once, $11$ occurs twice, and $14$ occurs twice.\nStep 2: For $14$ to be the only mode, it must occur strictly more often than every other value, so $14$ must gain the extra occurrence.\nStep 3: Setting $x = 14$ gives three $14$s against two $11$s and one $6$, exactly one mode. Check: any other value of $x$ leaves $11$ tied with $14$ or creates a new tie. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): makes $6$, $11$, and $14$ each occur twice, so the data set would have three modes rather than one.\n* Choice B ($11$): makes $11$ occur three times, so the single mode would be $11$, not $14$.\n* Choice C ($12$): adds a value that occurs once, leaving $11$ and $14$ tied at two occurrences each, so there would be two modes.\n\n**Test Day Takeaway:** \"Exactly one mode\" is a tie-breaking condition. Count the existing occurrences first, then place the unknown where it makes one value strictly most frequent.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "mode-from-list",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-347",
    domain: "problem-solving",
    skills: ["find-mode"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The dot plot shows the number of days each of $15$ hikers spent on a long-distance trail. Which of the following statements about these data is true?",
    diagram: { type: "dotPlot", params: { data: [{ value: 4, count: 1 }, { value: 5, count: 6 }, { value: 6, count: 2 }, { value: 7, count: 3 }, { value: 8, count: 2 }, { value: 12, count: 1 }], xMin: 3, xMax: 13, xLabel: "Days spent on the trail" } },
    choices: [
      { id: "A", text: "The mode is $5$ and the median is $6$." },
      // distractor: swaps the two statistics, reporting the median as the mode and the mode as the median.
      { id: "B", text: "The mode is $6$ and the median is $5$." },
      // distractor: reads the middle of the axis as the mode instead of counting the dots in each stack.
      { id: "C", text: "The mode and the median are both $6$." },
      // distractor: reports the mean, $\frac{95}{15} \approx 6.33$, in place of the median, and still misidentifies the mode.
      { id: "D", text: "The mode is $6$ and the median is $6.33$." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Mode from List**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The tallest stack is above $5$, so the mode is $5$. With $15$ dots, the median is the $8$th, which lands on $6$.\n\n**The Full Solution:**\nStep 1: The stacks have heights $1$, $6$, $2$, $3$, $2$, and $1$ above the values $4$, $5$, $6$, $7$, $8$, and $12$, so the mode is $5$.\nStep 2: With $15$ values, the median is the $8$th value when the data are in order.\nStep 3: The running counts are $1$ (through $4$), $7$ (through $5$), and $9$ (through $6$), so the $8$th value is $6$ and the median is $6$. Check: mode $5$, median $6$ — a right-tailed shape with one hiker at $12$ days. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: swaps the two statistics, reporting the median as the mode and the mode as the median.\n* Choice C: reads the middle of the axis as the mode instead of counting the dots in each stack.\n* Choice D: reports the mean, $\\frac{95}{15} \\approx 6.33$, in place of the median, and still misidentifies the mode.\n\n**Test Day Takeaway:** On a dot plot, the mode is the tallest stack and the median is found by counting dots from one end. They rarely coincide, so compute each one separately.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "mode-from-list",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-348",
    domain: "problem-solving",
    skills: ["find-mode"],
    difficulty: "hard",
    type: "fill-in",
    question: "The dot plot shows the $15$ values in a data set. Three additional values, each equal to $13$, are added to the data set. What is the mode of the resulting data set of $18$ values?",
    diagram: { type: "dotPlot", params: { data: [{ value: 11, count: 2 }, { value: 12, count: 6 }, { value: 13, count: 4 }, { value: 14, count: 3 }], xMin: 10, xMax: 15, xLabel: "Value" } },
    correctAnswer: "13",
    explanation: "**SAT Pattern: Mode from List**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~15s):** The value $13$ goes from $4$ occurrences to $7$, passing the $6$ occurrences of $12$, so the new mode is $13$.\n\n**The Full Solution:**\nStep 1: Read the stacks: $11$ occurs twice, $12$ occurs six times, $13$ occurs four times, and $14$ occurs three times, for $15$ values in all.\nStep 2: Adding three more $13$s raises the count for $13$ to $4 + 3 = 7$ and leaves every other count unchanged.\nStep 3: The counts are now $2$, $6$, $7$, and $3$, so the greatest is $7$ and the mode is $13$. Check: the data set now holds $18$ values, and $2 + 6 + 7 + 3 = 18$. $\\checkmark$\n\n**Common Mistakes:** Reporting $12$ gives the mode of the original data set, before the three values were added. Reporting $7$ gives the new frequency rather than the value. Reporting $14$ gives the greatest value in the data set, which is not the most frequent one.\n\n**Test Day Takeaway:** When values are added or removed, update the tally first and then re-read the largest count. The mode can move even though most of the data never changed.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "mode-from-list",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  // ─── Q.C. SCALING A DATA SET BY A CONSTANT (bank-ps-349..356) ─────────────
  // Effect of multiplying or adding a constant to every value on mean/SD/median/range.
  {
    id: "bank-ps-349",
    domain: "problem-solving",
    skills: ["data-analysis"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The mean of a data set is $34$. Each value in the data set is multiplied by $5$ to create a new data set. What is the mean of the new data set?",
    choices: [
      // distractor: divides by $5$ instead of multiplying, $\frac{34}{5} = 6.8$.
      { id: "A", text: "$6.8$" },
      // distractor: adds $5$ to the mean instead of multiplying, applying the rule for a shift.
      { id: "B", text: "$39$" },
      { id: "C", text: "$170$" },
      // distractor: applies the factor twice, $34 \times 25$, as if the mean scaled by $5^2$.
      { id: "D", text: "$850$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Multiplying every value by $5$ multiplies the mean by $5$: $5(34) = 170$.\n\n**The Full Solution:**\nStep 1: The mean is the sum of the values divided by how many there are.\nStep 2: Multiplying every value by $5$ multiplies the sum by $5$ while leaving the count unchanged.\nStep 3: So the mean is multiplied by $5$: $5 \\times 34 = 170$. Check: for the small set $\\{30, 38\\}$ with mean $34$, the scaled set $\\{150, 190\\}$ has mean $170$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6.8$): divides by $5$ instead of multiplying, $\\frac{34}{5} = 6.8$.\n* Choice B ($39$): adds $5$ to the mean instead of multiplying, applying the rule for a shift.\n* Choice D ($850$): applies the factor twice, $34 \\times 25$, as if the mean scaled by $5^2$.\n\n**Test Day Takeaway:** Multiplying every value by $k$ multiplies the mean, median, range, and standard deviation by $k$. Adding a constant moves only the center.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "scaling-a-data-set",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-350",
    domain: "problem-solving",
    skills: ["data-analysis"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The standard deviation of a data set is $7.5$. Each value in the data set is increased by $12$ to create a new data set. What is the standard deviation of the new data set?",
    choices: [
      { id: "A", text: "$7.5$" },
      // distractor: reports the amount added, treating the shift itself as the new spread.
      { id: "B", text: "$12$" },
      // distractor: adds $12$ to the standard deviation, $7.5 + 12$, applying the shift to the spread as well as the center.
      { id: "C", text: "$19.5$" },
      // distractor: multiplies by $12$, $7.5 \times 12$, using the rule for scaling instead of shifting.
      { id: "D", text: "$90$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Adding the same amount to every value slides the data without stretching it, so the standard deviation is unchanged at $7.5$.\n\n**The Full Solution:**\nStep 1: Standard deviation depends only on the distances between the values and their mean.\nStep 2: Adding $12$ to every value also adds $12$ to the mean, so each distance from the mean is unchanged.\nStep 3: The standard deviation therefore stays $7.5$. Check: the set $\\{2, 6\\}$ and the shifted set $\\{14, 18\\}$ have the same spacing, so the same spread. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): reports the amount added, treating the shift itself as the new spread.\n* Choice C ($19.5$): adds $12$ to the standard deviation, $7.5 + 12$, applying the shift to the spread as well as the center.\n* Choice D ($90$): multiplies by $12$, $7.5 \\times 12$, using the rule for scaling instead of shifting.\n\n**Test Day Takeaway:** Shifts move the center and leave every spread measure alone. Only multiplication changes the standard deviation.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "scaling-a-data-set",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-351",
    domain: "problem-solving",
    skills: ["data-analysis"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A data set has a mean of $28$ and a standard deviation of $4.5$. Each value in the data set is multiplied by $3$ to create a new data set. What are the mean and the standard deviation of the new data set?",
    choices: [
      // distractor: scales the standard deviation but leaves the mean unscaled, as if multiplication moved only the spread.
      { id: "A", text: "Mean $28$ and standard deviation $13.5$" },
      // distractor: scales the mean but leaves the standard deviation unchanged, using the shift rule for the spread.
      { id: "B", text: "Mean $84$ and standard deviation $4.5$" },
      // distractor: adds $3$ to the standard deviation, $4.5 + 3$, instead of multiplying by it.
      { id: "C", text: "Mean $84$ and standard deviation $7.5$" },
      { id: "D", text: "Mean $84$ and standard deviation $13.5$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Multiplying every value by $3$ multiplies both the mean and the standard deviation by $3$: $3(28) = 84$ and $3(4.5) = 13.5$.\n\n**The Full Solution:**\nStep 1: Multiplying every value by $3$ multiplies the sum by $3$, so the mean becomes $3 \\times 28 = 84$.\nStep 2: Each value's distance from the mean is also multiplied by $3$, because both the value and the mean triple.\nStep 3: So the standard deviation becomes $3 \\times 4.5 = 13.5$. Check: tripling stretches the whole picture by a factor of $3$, center and spread alike. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: scales the standard deviation but leaves the mean unscaled, as if multiplication moved only the spread.\n* Choice B: scales the mean but leaves the standard deviation unchanged, using the shift rule for the spread.\n* Choice C: adds $3$ to the standard deviation, $4.5 + 3$, instead of multiplying by it.\n\n**Test Day Takeaway:** Under multiplication by $k$, center and spread both scale by $k$. Under addition of $c$, only the center moves.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "scaling-a-data-set",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-352",
    domain: "problem-solving",
    skills: ["data-analysis"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A set of lengths measured in inches has a mean of $9.6$ inches and a range of $2.5$ inches. Each length is converted to centimeters by multiplying it by $2.54$. What is the range, in centimeters, of the converted lengths?",
    choices: [
      // distractor: leaves the range unchanged, applying the rule for adding a constant rather than for multiplying.
      { id: "A", text: "$2.5$" },
      // distractor: adds the conversion factor, $2.5 + 2.54$, instead of multiplying by it.
      { id: "B", text: "$5.04$" },
      { id: "C", text: "$6.35$" },
      // distractor: converts the mean, $9.6 \times 2.54$, rather than the range.
      { id: "D", text: "$24.384$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The range scales with the values: $2.5 \\times 2.54 = 6.35$ centimeters.\n\n**The Full Solution:**\nStep 1: The range is the maximum minus the minimum.\nStep 2: Multiplying every length by $2.54$ multiplies both the maximum and the minimum by $2.54$, so their difference is multiplied by $2.54$ as well.\nStep 3: The converted range is $2.54 \\times 2.5 = 6.35$ centimeters. Check: a spread of $2.5$ inches is the same physical spread as $6.35$ centimeters. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2.5$): leaves the range unchanged, applying the rule for adding a constant rather than for multiplying.\n* Choice B ($5.04$): adds the conversion factor, $2.5 + 2.54$, instead of multiplying by it.\n* Choice D ($24.384$): converts the mean, $9.6 \\times 2.54$, rather than the range.\n\n**Test Day Takeaway:** A unit conversion is a multiplication, so it scales the range and the standard deviation by the same factor as the values. The mean given in the stem is a decoy.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "scaling-a-data-set",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-353",
    domain: "problem-solving",
    skills: ["data-analysis"],
    difficulty: "medium",
    type: "fill-in",
    question: "The median of a data set is $15$. Each value in the data set is multiplied by $6$ and then decreased by $4$ to create a new data set. What is the median of the new data set?",
    correctAnswer: "86",
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**The correct answer is $86$.**\n\n**The Fast Way (~10s):** The transformation preserves order, so apply it to the median: $6(15) - 4 = 86$.\n\n**The Full Solution:**\nStep 1: Multiplying by a positive number and then subtracting a constant preserves the order of the values, so the value in the middle stays in the middle.\nStep 2: The new median is the transformed old median: apply $6x - 4$ to $x = 15$.\nStep 3: $6(15) - 4 = 90 - 4 = 86$. Check: with the small set $\\{13, 15, 17\\}$, the new set is $\\{74, 86, 98\\}$, whose median is $86$. $\\checkmark$\n\n**Common Mistakes:** Subtracting before multiplying gives $6(15 - 4) = 66$, which reverses the stated order of operations. Applying only the subtraction gives $15 - 4 = 11$. Applying only the multiplication gives $90$.\n\n**Test Day Takeaway:** For an increasing transformation, the median of the new data set is the transformation applied to the old median — carry out the steps in the order the question states.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "scaling-a-data-set",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-354",
    domain: "problem-solving",
    skills: ["data-analysis"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A data set has a mean of $72$ and a standard deviation of $8$. Each value $x$ in the data set is replaced by $\\frac{x - 72}{8}$ to create a new data set. What are the mean and the standard deviation of the new data set?",
    choices: [
      // distractor: assumes that centering the data at $0$ also removes the spread, but dividing by $8$ leaves a standard deviation of $1$, not $0$.
      { id: "A", text: "Mean $0$ and standard deviation $0$" },
      { id: "B", text: "Mean $0$ and standard deviation $1$" },
      // distractor: leaves the mean unshifted, applying the subtraction only to the spread rule.
      { id: "C", text: "Mean $72$ and standard deviation $1$" },
      // distractor: divides the mean by $8$ without subtracting first, $\frac{72}{8} = 9$.
      { id: "D", text: "Mean $9$ and standard deviation $1$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Subtracting $72$ moves the mean to $0$; dividing by $8$ divides the standard deviation by $8$, giving $\\frac{8}{8} = 1$.\n\n**The Full Solution:**\nStep 1: Write the transformation as $\\frac{1}{8}x - 9$, so the multiplier is $\\frac{1}{8}$ and the shift is $-9$.\nStep 2: The mean transforms the same way: $\\frac{72 - 72}{8} = 0$.\nStep 3: The standard deviation is multiplied by $\\frac{1}{8}$ and unaffected by the shift: $\\frac{8}{8} = 1$. Check: subtracting the mean centers the data at $0$, and dividing by the standard deviation rescales the spread to $1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: assumes that centering the data at $0$ also removes the spread, but dividing by $8$ leaves a standard deviation of $1$, not $0$.\n* Choice C: leaves the mean unshifted, applying the subtraction only to the spread rule.\n* Choice D: divides the mean by $8$ without subtracting first, $\\frac{72}{8} = 9$.\n\n**Test Day Takeaway:** Subtracting the mean and dividing by the standard deviation always produces a data set with mean $0$ and standard deviation $1$, whatever the original numbers were.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "scaling-a-data-set",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-355",
    domain: "problem-solving",
    skills: ["data-analysis"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A data set has a standard deviation of $7$. A new data set is created by multiplying each value of the original data set by $-2$ and then adding $11$ to each result. What is the standard deviation of the new data set?",
    choices: [
      // distractor: keeps the negative sign from the multiplier, but a standard deviation is a distance and can never be negative.
      { id: "A", text: "$-14$" },
      // distractor: leaves the standard deviation unchanged, applying the shift rule and ignoring the multiplication.
      { id: "B", text: "$7$" },
      { id: "C", text: "$14$" },
      // distractor: adds the $11$ to the scaled standard deviation, $2(7) + 11$, though a shift does not affect spread.
      { id: "D", text: "$25$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Standard deviation scales by the absolute value of the multiplier and ignores the shift: $|-2| \\cdot 7 = 14$.\n\n**The Full Solution:**\nStep 1: The transformation has the form $-2x + 11$, a multiplication by $-2$ followed by a shift of $11$.\nStep 2: Adding $11$ to every value moves the mean along with the values, so all distances from the mean are unchanged.\nStep 3: Multiplying by $-2$ doubles every distance from the mean and reflects the data, so the standard deviation is $|-2| \\cdot 7 = 14$. Check: reflecting a data set does not change how spread out it is, so only the factor $2$ matters. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-14$): keeps the negative sign from the multiplier, but a standard deviation is a distance and can never be negative.\n* Choice B ($7$): leaves the standard deviation unchanged, applying the shift rule and ignoring the multiplication.\n* Choice D ($25$): adds the $11$ to the scaled standard deviation, $2(7) + 11$, though a shift does not affect spread.\n\n**Test Day Takeaway:** Under $y = ax + b$, the standard deviation becomes $|a|$ times the original. The sign of $a$ and the value of $b$ never appear in the answer.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "scaling-a-data-set",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-356",
    domain: "problem-solving",
    skills: ["data-analysis"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The data set $\\{x_1,\\ x_2,\\ \\ldots,\\ x_n\\}$ has mean $\\bar{x}$ and standard deviation $s$, where $s > 0$. A new data set is created by $y_i = 3x_i + 2$ for each $i$ from $1$ to $n$. Which of the following expressions gives the variance of the new data set?",
    choices: [
      // distractor: scales the variance by $3$ rather than by $3^2$, applying the standard-deviation factor to the variance.
      { id: "A", text: "$3s^{2}$" },
      // distractor: scales the standard deviation by $9$ but never squares it, so it reports a standard deviation, not a variance.
      { id: "B", text: "$9s$" },
      { id: "C", text: "$9s^{2}$" },
      // distractor: adds the shift $2$ to the variance, though adding a constant to every value leaves all spread measures unchanged.
      { id: "D", text: "$9s^{2} + 2$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The multiplier $3$ scales the standard deviation to $3s$, and variance is the square of the standard deviation: $(3s)^2 = 9s^2$.\n\n**The Full Solution:**\nStep 1: Adding $2$ to every value shifts the data and the mean equally, so every distance from the mean is unchanged and the shift cannot affect the variance.\nStep 2: Multiplying every value by $3$ multiplies every distance from the mean by $3$, so the standard deviation of the new data set is $|3| \\cdot s = 3s$.\nStep 3: Variance is the square of the standard deviation, so the new variance is $(3s)^2 = 9s^2$. Check: the original variance is $s^2$, and the new one is $9$ times as large, matching the factor $3^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: scales the variance by $3$ rather than by $3^2$, applying the standard-deviation factor to the variance.\n* Choice B: scales the standard deviation by $9$ but never squares it, so it reports a standard deviation, not a variance.\n* Choice D: adds the shift $2$ to the variance, though adding a constant to every value leaves all spread measures unchanged.\n\n**Test Day Takeaway:** Standard deviation scales by $|a|$; variance, being the square, scales by $a^2$. The constant term $b$ never appears in either.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "scaling-a-data-set",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  // ─── Q.A. DISTANCE = RATE × TIME (bank-ps-357..360) — top-up to ≥8 ────────
  // Existing 4 (Average Rate Over Time, Rate × Time = Total ×2, Total / Rate = Time, Rate × Time) plus 4 here.
  {
    id: "bank-ps-357",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A ferry crosses a lake at a constant speed of $18$ miles per hour. How many miles does the ferry travel in $2.5$ hours?",
    choices: [
      // distractor: divides the speed by the time, $\frac{18}{2.5}$, instead of multiplying.
      { id: "A", text: "$7.2$" },
      // distractor: adds the speed and the time, $18 + 2.5$, combining quantities with different units.
      { id: "B", text: "$20.5$" },
      // distractor: uses only the whole number of hours, $18 \times 2$, dropping the half hour.
      { id: "C", text: "$36$" },
      { id: "D", text: "$45$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Distance $=$ rate $\\times$ time $= 18 \\times 2.5 = 45$ miles.\n\n**The Full Solution:**\nStep 1: At a constant speed, distance is the product of the rate and the time.\nStep 2: The rate is $18$ miles per hour and the time is $2.5$ hours, and the hours cancel to leave miles.\nStep 3: $18 \\times 2.5 = 45$ miles. Check: in $2$ hours the ferry covers $36$ miles and in the extra half hour it covers $9$ more, for $45$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7.2$): divides the speed by the time, $\\frac{18}{2.5}$, instead of multiplying.\n* Choice B ($20.5$): adds the speed and the time, $18 + 2.5$, combining quantities with different units.\n* Choice C ($36$): uses only the whole number of hours, $18 \\times 2$, dropping the half hour.\n\n**Test Day Takeaway:** Check the units before computing: miles per hour times hours gives miles. If the units of your operation do not produce the units asked for, the operation is wrong.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-rate-time",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-358",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "medium",
    type: "fill-in",
    question: "A conveyor belt moves a package a distance of $840$ meters at a constant speed of $1.4$ meters per second. How many minutes does the package take to travel this distance?",
    correctAnswer: "10",
    explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~20s):** $\\frac{840}{1.4} = 600$ seconds, and $\\frac{600}{60} = 10$ minutes.\n\n**The Full Solution:**\nStep 1: Time is distance divided by rate, so the travel time is $\\frac{840 \\text{ meters}}{1.4 \\text{ meters per second}}$.\nStep 2: $\\frac{840}{1.4} = 600$ seconds.\nStep 3: Convert to minutes: $\\frac{600}{60} = 10$ minutes. Check: in $10$ minutes the belt runs $600$ seconds at $1.4$ meters per second, covering $840$ meters. $\\checkmark$\n\n**Common Mistakes:** Reporting $600$ answers in seconds when the question asks for minutes. Multiplying gives $840 \\times 1.4 = 1{,}176$, which has units of meter-seconds per meter and no meaning here. Dividing in the wrong order gives $\\frac{1.4}{840} \\approx 0.00167$.\n\n**Test Day Takeaway:** Compute the time in the units the rate provides, then convert to the unit the question names. The final unit check catches the most expensive slip on rate problems.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-rate-time",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-359",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A cross-country skier travels at a constant speed of $21$ kilometers per hour. How many kilometers does the skier travel in $1$ hour and $20$ minutes?",
    choices: [
      // distractor: divides by the time instead of multiplying, $21 \div \frac{4}{3} = 15.75$.
      { id: "A", text: "$15.75$" },
      // distractor: writes the time as $1.20$ hours, $21 \times 1.2$, treating $20$ minutes as $0.20$ hour.
      { id: "B", text: "$25.2$" },
      { id: "C", text: "$28$" },
      // distractor: rounds the time up to $2$ hours, $21 \times 2$.
      { id: "D", text: "$42$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $20$ minutes is $\\frac{1}{3}$ hour, so the time is $\\frac{4}{3}$ hours and the distance is $21 \\cdot \\frac{4}{3} = 28$ kilometers.\n\n**The Full Solution:**\nStep 1: The rate is given per hour, so the time must be expressed in hours.\nStep 2: $20$ minutes is $\\frac{20}{60} = \\frac{1}{3}$ hour, making the total time $1 + \\frac{1}{3} = \\frac{4}{3}$ hours.\nStep 3: Distance $= 21 \\cdot \\frac{4}{3} = 28$ kilometers. Check: in $1$ hour the skier covers $21$ kilometers and in $20$ minutes another $7$, for $28$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($15.75$): divides by the time instead of multiplying, $21 \\div \\frac{4}{3} = 15.75$.\n* Choice B ($25.2$): writes the time as $1.20$ hours, $21 \\times 1.2$, treating $20$ minutes as $0.20$ hour.\n* Choice D ($42$): rounds the time up to $2$ hours, $21 \\times 2$.\n\n**Test Day Takeaway:** Minutes become hours by dividing by $60$, never by moving a decimal point. $20$ minutes is $\\frac{1}{3}$ hour, not $0.20$ hour.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-rate-time",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-360",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A drone leaves a station and flies due east at a constant speed of $32$ kilometers per hour. A half hour later, a second drone leaves the same station and flies due west at a constant speed of $44$ kilometers per hour. How many kilometers apart are the two drones $2$ hours after the first drone left the station?",
    choices: [
      // distractor: subtracts the two distances, $66 - 64$, as if the drones flew in the same direction.
      { id: "A", text: "$2$" },
      // distractor: reports only the first drone's distance, $32 \times 2$, leaving out the second drone entirely.
      { id: "B", text: "$64$" },
      { id: "C", text: "$130$" },
      // distractor: gives the second drone the full $2$ hours, $32(2) + 44(2)$, ignoring its half-hour later start.
      { id: "D", text: "$152$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The first drone flies $32(2) = 64$ kilometers and the second flies $44(1.5) = 66$ kilometers in opposite directions, so they are $64 + 66 = 130$ kilometers apart.\n\n**The Full Solution:**\nStep 1: The first drone flies for the full $2$ hours: $32 \\times 2 = 64$ kilometers east of the station.\nStep 2: The second drone starts a half hour later, so it flies for $2 - 0.5 = 1.5$ hours: $44 \\times 1.5 = 66$ kilometers west of the station.\nStep 3: Opposite directions means the distances add: $64 + 66 = 130$ kilometers. Check: the station lies between them, $64$ kilometers from one and $66$ from the other. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): subtracts the two distances, $66 - 64$, as if the drones flew in the same direction.\n* Choice B ($64$): reports only the first drone's distance, $32 \\times 2$, leaving out the second drone entirely.\n* Choice D ($152$): gives the second drone the full $2$ hours, $32(2) + 44(2)$, ignoring its half-hour later start.\n\n**Test Day Takeaway:** Give each traveler its own time on the clock, then add distances for opposite directions and subtract for the same direction. A staggered start is the trap this question is built on.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-rate-time",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  // ─── Q.A. AVERAGE RATE (bank-ps-361..367) — total/total ────────────────────
  // Distinct from rate × time: avg rate = (total distance) / (total time) when rates vary.
  {
    id: "bank-ps-361",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A research vessel traveled $30$ nautical miles in $2$ hours and then traveled $75$ nautical miles in $3$ hours. What was the vessel's average speed, in nautical miles per hour, for the entire voyage?",
    choices: [
      // distractor: averages the two leg speeds, $\frac{15 + 25}{2}$, instead of dividing total distance by total time
      { id: "A", text: "$20$" },
      { id: "B", text: "$21$" },
      // distractor: reports the speed of the second leg only, $\frac{75}{3}$
      { id: "C", text: "$25$" },
      // distractor: adds the two leg speeds, $15 + 25$
      { id: "D", text: "$40$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Average Rate**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Total distance is $30 + 75 = 105$ nautical miles and total time is $2 + 3 = 5$ hours, so the average speed is $\\frac{105}{5} = 21$.\n\n**The Full Solution:**\nStep 1: Average speed is total distance divided by total time, not the average of the two speeds.\nStep 2: Total distance $= 30 + 75 = 105$ nautical miles; total time $= 2 + 3 = 5$ hours.\nStep 3: Average speed $= \\frac{105}{5} = 21$ nautical miles per hour. Check: the vessel spent more time on the faster leg ($25$) than on the slower leg ($15$), so the average should sit above the midpoint $20$, and $21$ does. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): averages the two leg speeds, $\\frac{15 + 25}{2}$, instead of dividing total distance by total time\n* Choice C ($25$): reports the speed of the second leg only, $\\frac{75}{3}$\n* Choice D ($40$): adds the two leg speeds, $15 + 25$\n\n**Test Day Takeaway:** Average speed is always $\\frac{\\text{total distance}}{\\text{total time}}$. Averaging the two speeds is correct only when the two times are equal.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "average-rate",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-362",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "medium",
    type: "fill-in",
    question: "A press printed $1{,}400$ sheets during the first $20$ minutes of a run and $1{,}200$ sheets during the next $30$ minutes. What was the press's average rate, in sheets per minute, for the entire $50$-minute run?",
    correctAnswer: "52",
    explanation: "**SAT Pattern: Average Rate**\n\n**The correct answer is $52$.**\n\n**The Fast Way (~20s):** Total sheets $= 1{,}400 + 1{,}200 = 2{,}600$ over $50$ minutes, so the rate is $\\frac{2600}{50} = 52$.\n\n**The Full Solution:**\nStep 1: An average rate over a whole run is the total output divided by the total time.\nStep 2: Total output $= 1{,}400 + 1{,}200 = 2{,}600$ sheets; total time $= 20 + 30 = 50$ minutes.\nStep 3: Average rate $= \\frac{2600}{50} = 52$ sheets per minute. Check: $52 \\times 50 = 2{,}600$. $\\checkmark$\n\n**Common Mistakes:** Averaging the two interval rates, $\\frac{70 + 40}{2} = 55$, which over-weights the shorter interval; dividing the total by the number of intervals, $\\frac{2600}{2} = 1{,}300$; or reporting only the first interval's rate, $\\frac{1400}{20} = 70$.\n\n**Test Day Takeaway:** When two intervals have different lengths, average the totals, not the rates: add all the output, add all the time, then divide once.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "average-rate",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-363",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A survey drone flew along a shoreline at $30$ meters per minute for $12$ minutes and then at $45$ meters per minute for $8$ minutes. What was the drone's average speed, in meters per minute, for the entire flight?",
    choices: [
      { id: "A", text: "$36$" },
      // distractor: averages the two speeds, $\frac{30 + 45}{2}$, without weighting them by the time spent at each speed
      { id: "B", text: "$37.5$" },
      // distractor: divides the total distance by $12$ minutes, the first interval only
      { id: "C", text: "$60$" },
      // distractor: adds the two speeds, $30 + 45$
      { id: "D", text: "$75$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Average Rate**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Distances: $30(12) = 360$ and $45(8) = 360$ meters, a total of $720$ meters in $20$ minutes, so $\\frac{720}{20} = 36$.\n\n**The Full Solution:**\nStep 1: Convert each rate and time into a distance: $30(12) = 360$ meters and $45(8) = 360$ meters.\nStep 2: Total distance $= 360 + 360 = 720$ meters; total time $= 12 + 8 = 20$ minutes.\nStep 3: Average speed $= \\frac{720}{20} = 36$ meters per minute. Check: the drone spent more of the flight at $30$ meters per minute, so the average must fall below the midpoint $37.5$, and $36$ does. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($37.5$): averages the two speeds, $\\frac{30 + 45}{2}$, without weighting them by the time spent at each speed\n* Choice C ($60$): divides the total distance by $12$ minutes, the first interval only\n* Choice D ($75$): adds the two speeds, $30 + 45$\n\n**Test Day Takeaway:** Rate $\\times$ time gives distance. Turn every leg into a distance first, then divide the total distance by the total time.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "average-rate",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-364",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A courier drives from a depot to a delivery site at an average speed of $r$ miles per hour and returns along the same route at an average speed of $2r$ miles per hour. The average speed for the entire round trip is $48$ miles per hour. What is the value of $r$?",
    choices: [
      // distractor: divides $48$ by $3$, treating the average speed as the sum $r + 2r$
      { id: "A", text: "$16$" },
      // distractor: sets $2r = 48$, using the faster leg's speed as the average speed
      { id: "B", text: "$24$" },
      // distractor: averages the two speeds, solving $\frac{r + 2r}{2} = 48$
      { id: "C", text: "$32$" },
      { id: "D", text: "$36$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Average Rate**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** With one-way distance $d$, total time is $\\frac{d}{r} + \\frac{d}{2r} = \\frac{3d}{2r}$, so the average speed is $\\frac{2d}{3d/(2r)} = \\frac{4r}{3}$. Then $\\frac{4r}{3} = 48$ gives $r = 36$.\n\n**The Full Solution:**\nStep 1: Let $d$ be the one-way distance. The round trip covers $2d$ miles.\nStep 2: The outbound leg takes $\\frac{d}{r}$ hours and the return leg takes $\\frac{d}{2r}$ hours, so the total time is $\\frac{2d}{2r} + \\frac{d}{2r} = \\frac{3d}{2r}$ hours.\nStep 3: Average speed $= \\frac{2d}{\\frac{3d}{2r}} = \\frac{4r}{3}$, and $d$ cancels. Setting $\\frac{4r}{3} = 48$ gives $r = 36$. Check: at $36$ and $72$ miles per hour over $72$ miles each way, the times are $2$ and $1$ hours, so $\\frac{144}{3} = 48$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($16$): divides $48$ by $3$, treating the average speed as the sum $r + 2r$\n* Choice B ($24$): sets $2r = 48$, using the faster leg's speed as the average speed\n* Choice C ($32$): averages the two speeds, solving $\\frac{r + 2r}{2} = 48$\n\n**Test Day Takeaway:** For equal distances at two speeds, the average speed depends only on the speeds, never on the distance. Introduce $d$, write the two times, and watch it cancel.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "average-rate",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-365",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "medium",
    type: "fill-in",
    question: "During a $30$-minute test, a filtration unit processed $900$ liters in the first $12$ minutes and $1{,}500$ liters in the remaining $18$ minutes. What was the unit's average processing rate, in liters per minute, for the test?",
    correctAnswer: "80",
    explanation: "**SAT Pattern: Average Rate**\n\n**The correct answer is $80$.**\n\n**The Fast Way (~20s):** Total volume $= 900 + 1{,}500 = 2{,}400$ liters over $30$ minutes, so the rate is $\\frac{2400}{30} = 80$.\n\n**The Full Solution:**\nStep 1: The average processing rate is the total volume processed divided by the total time.\nStep 2: Total volume $= 900 + 1{,}500 = 2{,}400$ liters; total time $= 12 + 18 = 30$ minutes.\nStep 3: Average rate $= \\frac{2400}{30} = 80$ liters per minute. Check: $80 \\times 30 = 2{,}400$. $\\checkmark$\n\n**Common Mistakes:** Averaging the two interval rates, $\\frac{75 + 83.\\overline{3}}{2} \\approx 79.17$, which ignores that the intervals differ in length; dividing the total volume by $2$, giving $1{,}200$; or reporting only the second interval's rate, $\\frac{1500}{18} \\approx 83.33$.\n\n**Test Day Takeaway:** An average rate is one division at the end: total out, total time, divide once.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "average-rate",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-366",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A train covers the first $120$ kilometers of a $300$-kilometer route at an average speed of $80$ kilometers per hour. What constant speed, in kilometers per hour, must the train average over the remaining $180$ kilometers so that its average speed for the entire route is $75$ kilometers per hour?",
    choices: [
      // distractor: solves $\frac{80 + v}{2} = 75$, averaging the two speeds instead of working with times
      { id: "A", text: "$70$" },
      { id: "B", text: "$72$" },
      // distractor: assumes the second leg must be covered at the target average speed
      { id: "C", text: "$75$" },
      // distractor: rounds the first leg's time to $2$ hours, leaving $2$ hours for the second leg: $\frac{180}{2} = 90$
      { id: "D", text: "$90$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Average Rate**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** The whole route must take $\\frac{300}{75} = 4$ hours. The first leg takes $\\frac{120}{80} = 1.5$ hours, leaving $2.5$ hours for $180$ kilometers: $\\frac{180}{2.5} = 72$.\n\n**The Full Solution:**\nStep 1: An average speed of $75$ kilometers per hour over $300$ kilometers means the total time must be $\\frac{300}{75} = 4$ hours.\nStep 2: The first leg uses $\\frac{120}{80} = 1.5$ hours, so the second leg must take $4 - 1.5 = 2.5$ hours.\nStep 3: The required speed is $\\frac{180}{2.5} = 72$ kilometers per hour. Check: $1.5 + 2.5 = 4$ hours for $300$ kilometers, and $\\frac{300}{4} = 75$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($70$): solves $\\frac{80 + v}{2} = 75$, averaging the two speeds instead of working with times\n* Choice C ($75$): assumes the second leg must be covered at the target average speed\n* Choice D ($90$): rounds the first leg's time to $2$ hours, leaving $2$ hours for the second leg: $\\frac{180}{2} = 90$\n\n**Test Day Takeaway:** Target-average problems are time problems: convert the target average into a total time, subtract the time already used, then divide the remaining distance by the remaining time.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "average-rate",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-367",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "For each of the two segments of a light-rail run, the table gives the distance traveled and the time elapsed. What was the train's average speed, in miles per hour, for the entire run?",
    diagram: { type: "dataTable", params: { headers: ["Segment", "Distance (mi)", "Time (min)"], rows: [["1", "8", "10"], ["2", "22", "20"]] } },
    choices: [
      // distractor: reports the first segment's speed, $8$ miles in $10$ minutes
      { id: "A", text: "$48$" },
      // distractor: averages the two segment speeds, $\frac{48 + 66}{2}$, without weighting them by time
      { id: "B", text: "$57$" },
      { id: "C", text: "$60$" },
      // distractor: reports the second segment's speed, $22$ miles in $20$ minutes
      { id: "D", text: "$66$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Average Rate**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Total distance $= 8 + 22 = 30$ miles in $10 + 20 = 30$ minutes, which is $0.5$ hour, so the average speed is $\\frac{30}{0.5} = 60$.\n\n**The Full Solution:**\nStep 1: Add across the table: total distance $= 8 + 22 = 30$ miles and total time $= 10 + 20 = 30$ minutes.\nStep 2: Convert the time to hours: $30$ minutes $= \\frac{30}{60} = 0.5$ hour.\nStep 3: Average speed $= \\frac{30 \\text{ miles}}{0.5 \\text{ hour}} = 60$ miles per hour. Check: at $60$ miles per hour, $30$ miles takes exactly half an hour. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($48$): reports the first segment's speed, $8$ miles in $10$ minutes\n* Choice B ($57$): averages the two segment speeds, $\\frac{48 + 66}{2}$, without weighting them by time\n* Choice D ($66$): reports the second segment's speed, $22$ miles in $20$ minutes\n\n**Test Day Takeaway:** Convert to the requested unit only once, at the end. Add the raw distances and times first, then divide and convert.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "average-rate",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  // ─── Q.A. SIMPLE INTEREST (bank-ps-368..375) — A = P(1 + rt) linear growth ─
  // Distinct from compound-interest (P(1+r)^t exponential).
  {
    id: "bank-ps-368",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A certificate of deposit is opened with a deposit of $\\$4{,}500$ and earns simple interest at an annual rate of $3\\%$. How much interest, in dollars, does the certificate earn in $2$ years?",
    choices: [
      // distractor: uses $1$ year instead of $2$
      { id: "A", text: "$135$" },
      { id: "B", text: "$270$" },
      // distractor: uses $30\%$ instead of $3\%$
      { id: "C", text: "$2{,}700$" },
      // distractor: reports the balance, principal plus interest, instead of the interest alone
      { id: "D", text: "$4{,}770$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Simple Interest**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Simple interest is $I = Prt = 4500(0.03)(2) = 270$.\n\n**The Full Solution:**\nStep 1: Simple interest is $I = Prt$, where $P$ is the principal, $r$ is the annual rate as a decimal, and $t$ is the number of years.\nStep 2: Substitute $P = 4500$, $r = 0.03$, and $t = 2$: $I = 4500(0.03)(2)$.\nStep 3: $4500(0.03) = 135$ dollars per year, and $135(2) = 270$ dollars. Check: $\\$135$ each year for $2$ years is $\\$270$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($135$): uses $1$ year instead of $2$\n* Choice C ($2{,}700$): uses $30\\%$ instead of $3\\%$\n* Choice D ($4{,}770$): reports the balance, principal plus interest, instead of the interest alone\n\n**Test Day Takeaway:** Simple interest is earned on the original principal only, so it is the same dollar amount every year: find one year's interest, then multiply by the number of years.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "simple-interest",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-369",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A business takes out a $3$-year loan at a simple annual interest rate of $5\\%$ and makes no payments during the term of the loan. If the amount borrowed is $\\$6{,}000$, what is the total amount owed, in dollars, at the end of the loan?",
    choices: [
      // distractor: reports only the interest accrued, not the total owed
      { id: "A", text: "$900$" },
      // distractor: adds only $1$ year of interest instead of $3$
      { id: "B", text: "$6{,}300$" },
      { id: "C", text: "$6{,}900$" },
      // distractor: uses $5$ years of interest, confusing the rate with the number of years
      { id: "D", text: "$7{,}500$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Simple Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Interest is $6000(0.05)(3) = 900$, so the total owed is $6000 + 900 = 6900$.\n\n**The Full Solution:**\nStep 1: The amount owed is the principal plus the accrued simple interest: $A = P + Prt$.\nStep 2: The interest is $6000(0.05)(3) = 300(3) = 900$ dollars.\nStep 3: The total owed is $6000 + 900 = 6900$ dollars. Check: $\\$300$ of interest per year for $3$ years is $\\$900$, and $\\$6{,}000 + \\$900 = \\$6{,}900$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($900$): reports only the interest accrued, not the total owed\n* Choice B ($6{,}300$): adds only $1$ year of interest instead of $3$\n* Choice D ($7{,}500$): uses $5$ years of interest, confusing the rate with the number of years\n\n**Test Day Takeaway:** Read the last line of the question: interest earned and total balance differ by the principal. One asks for $Prt$, the other for $P + Prt$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "simple-interest",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-370",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "medium",
    type: "fill-in",
    question: "A municipal bond with a face value of $\\$12{,}000$ pays simple interest at an annual rate of $r\\%$. After $6$ years the bond has paid $\\$2{,}880$ in interest. What is the value of $r$?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: Simple Interest**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~25s):** From $I = Prt$, the annual interest is $\\frac{2880}{6} = 480$ dollars, and $\\frac{480}{12000} = 0.04$, so $r = 4$.\n\n**The Full Solution:**\nStep 1: Simple interest satisfies $I = Prt$. Substituting gives $2880 = 12000 \\cdot r \\cdot 6$, where $r$ is the rate as a decimal.\nStep 2: Divide by $6$ to get the interest earned in one year: $\\frac{2880}{6} = 480$ dollars per year.\nStep 3: Divide by the principal: $r = \\frac{480}{12000} = 0.04$, which is $4\\%$, so the value of $r$ is $4$. Check: $12000(0.04)(6) = 2{,}880$. $\\checkmark$\n\n**Common Mistakes:** Dividing the interest by the principal and stopping: $\\frac{2880}{12000} = 0.24$, which is $rt$, not $r$, and then reporting $24$; leaving the answer as the decimal $0.04$ when the question defines the rate as $r\\%$; or dividing the principal by the interest, $\\frac{12000}{2880} \\approx 4.17$.\n\n**Test Day Takeaway:** Solve $I = Prt$ for the unknown by undoing one factor at a time, then check whether the question wants a decimal or a percent.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "simple-interest",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-371",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "An account is opened with $P$ dollars and earns simple interest at an annual rate of $r$, expressed as a decimal, and no deposits or withdrawals are made. Which expression represents the balance of the account, in dollars, after $t$ years?",
    choices: [
      // distractor: adds the product $rt$ to the principal without scaling it by $P$, so the units are wrong
      { id: "A", text: "$P + rt$" },
      // distractor: gives the interest earned, not the balance, because the principal is never added back
      { id: "B", text: "$Prt$" },
      { id: "C", text: "$P(1 + rt)$" },
      // distractor: is the compound-interest balance; simple interest is never applied to interest already earned
      { id: "D", text: "$P(1 + r)^t$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Simple Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The balance is the principal plus the simple interest: $P + Prt$, and factoring $P$ gives $P(1 + rt)$.\n\n**The Full Solution:**\nStep 1: Simple interest earned over $t$ years is $I = Prt$.\nStep 2: The balance is the principal plus that interest: $A = P + Prt$.\nStep 3: Factor the common $P$: $A = P(1 + rt)$. Check with $P = 1000$, $r = 0.05$, $t = 2$: the interest is $\\$100$ and the balance is $\\$1{,}100$, and $1000(1 + 0.05 \\cdot 2) = 1{,}100$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($P + rt$): adds the product $rt$ to the principal without scaling it by $P$, so the units are wrong\n* Choice B ($Prt$): gives the interest earned, not the balance, because the principal is never added back\n* Choice D ($P(1 + r)^t$): is the compound-interest balance; simple interest is never applied to interest already earned\n\n**Test Day Takeaway:** Test a symbolic answer with easy numbers. Simple interest grows linearly in $t$; only compound interest puts $t$ in an exponent.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "simple-interest",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-372",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A savings certificate earns simple interest at an annual rate of $4\\%$. The certificate is opened with a deposit of $\\$2{,}500$, and after $t$ years the balance is $\\$2{,}800$. What is the value of $t$?",
    choices: [
      // distractor: divides the interest by the principal, $\frac{300}{2500}$, which gives $rt$, not $t$
      { id: "A", text: "$0.12$" },
      { id: "B", text: "$3$" },
      // distractor: divides the whole balance, rather than the interest, by the $\$100$ earned each year
      { id: "C", text: "$28$" },
      // distractor: divides the interest by $4$, the percent, instead of by the $\$100$ of interest earned each year
      { id: "D", text: "$75$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Simple Interest**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The interest is $2800 - 2500 = 300$ dollars, and the account earns $2500(0.04) = 100$ dollars per year, so $t = \\frac{300}{100} = 3$.\n\n**The Full Solution:**\nStep 1: Separate the interest from the balance: $I = 2800 - 2500 = 300$ dollars.\nStep 2: One year of simple interest is $2500(0.04) = 100$ dollars, and that amount repeats every year.\nStep 3: $t = \\frac{300}{100} = 3$ years. Check: $2500 + 100(3) = 2{,}800$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.12$): divides the interest by the principal, $\\frac{300}{2500}$, which gives $rt$, not $t$\n* Choice C ($28$): divides the whole balance, rather than the interest, by the $\\$100$ earned each year\n* Choice D ($75$): divides the interest by $4$, the percent, instead of by the $\\$100$ of interest earned each year\n\n**Test Day Takeaway:** Subtract the principal before you divide. Only the interest tells you how many years have passed.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "simple-interest",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-373",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "hard",
    type: "fill-in",
    question: "An account earns simple interest at an annual rate of $6\\%$, and no deposits or withdrawals are made. After $8$ years the balance is $\\$5{,}550$. What was the initial deposit, in dollars?",
    correctAnswer: "3750",
    explanation: "**SAT Pattern: Simple Interest**\n\n**The correct answer is $3{,}750$.**\n\n**The Fast Way (~30s):** The balance is $P(1 + 0.06 \\cdot 8) = 1.48P$, so $P = \\frac{5550}{1.48} = 3{,}750$.\n\n**The Full Solution:**\nStep 1: A simple-interest balance is $A = P(1 + rt)$, so $5550 = P(1 + 0.06 \\cdot 8)$.\nStep 2: Evaluate the factor: $0.06(8) = 0.48$, so $5550 = 1.48P$.\nStep 3: $P = \\frac{5550}{1.48} = 3750$ dollars. Check: $3750(0.06)(8) = 1{,}800$ in interest, and $3750 + 1800 = 5{,}550$. $\\checkmark$\n\n**Common Mistakes:** Subtracting $48\\%$ of the final balance instead of dividing: $5550 - 0.48(5550) = 2{,}886$; dividing by $1.06$ just once, giving about $5{,}235.85$; or applying compound interest, $\\frac{5550}{1.06^{8}} \\approx 3{,}482.14$.\n\n**Test Day Takeaway:** Working backward from a balance means dividing by $(1 + rt)$, not subtracting the interest percent from the balance.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "simple-interest",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-374",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "An investment of $\\$4{,}000$ earns $8\\%$ simple annual interest. A second investment of $\\$4{,}000$ earns $8\\%$ interest compounded annually. To the nearest dollar, how much greater is the value of the second investment than the value of the first investment after $5$ years?",
    choices: [
      { id: "A", text: "$277$" },
      // distractor: reports one year's interest on $\$4{,}000$
      { id: "B", text: "$320$" },
      // distractor: reports the simple interest earned over the $5$ years
      { id: "C", text: "$1{,}600$" },
      // distractor: reports the compound interest earned, not the difference between the two accounts
      { id: "D", text: "$1{,}877$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Simple Interest**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** Simple: $4000 + 4000(0.08)(5) = 5{,}600$. Compound: $4000(1.08)^5 \\approx 5{,}877.31$. The difference is about $\\$277$.\n\n**The Full Solution:**\nStep 1: The simple-interest value is $4000 + 4000(0.08)(5) = 4000 + 1600 = 5{,}600$ dollars.\nStep 2: The compound value is $4000(1.08)^5 \\approx 4000(1.469328) \\approx 5{,}877.31$ dollars.\nStep 3: The difference is $5877.31 - 5600 = 277.31$, which is $\\$277$ to the nearest dollar. Check: compounding earns $\\$1{,}877$ of interest against $\\$1{,}600$ of simple interest, and $1877 - 1600 = 277$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($320$): reports one year's interest on $\\$4{,}000$\n* Choice C ($1{,}600$): reports the simple interest earned over the $5$ years\n* Choice D ($1{,}877$): reports the compound interest earned, not the difference between the two accounts\n\n**Test Day Takeaway:** Compound interest earns interest on interest, so it always exceeds simple interest at the same rate; the question asks for the gap, not for either balance.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "simple-interest",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-ps-375",
    domain: "problem-solving",
    skills: ["rate-conversion"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "For an account earning simple interest, the balance $A$, in dollars, after $t$ years is given by $A = P(1 + rt)$, where $P$ is the principal, in dollars, and $r$ is the annual interest rate expressed as a decimal. Which equation gives $r$ in terms of $A$, $P$, and $t$?",
    choices: [
      // distractor: divides by $Pt$ without first subtracting the principal, so it uses the balance instead of the interest
      { id: "A", text: "$r = \\dfrac{A}{Pt}$" },
      // distractor: subtracts the principal but never divides by $P$, so it gives dollars per year rather than a rate
      { id: "B", text: "$r = \\dfrac{A - P}{t}$" },
      { id: "C", text: "$r = \\dfrac{A - P}{Pt}$" },
      // distractor: divides by $P$ and then subtracts $t$ instead of dividing by $t$
      { id: "D", text: "$r = \\dfrac{A - P}{P} - t$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Simple Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Expanding gives $A = P + Prt$, so $A - P = Prt$ and $r = \\frac{A - P}{Pt}$.\n\n**The Full Solution:**\nStep 1: Distribute: $A = P + Prt$.\nStep 2: Isolate the interest term by subtracting $P$ from each side: $A - P = Prt$.\nStep 3: Divide each side by $Pt$: $r = \\frac{A - P}{Pt}$. Check with $P = 2000$, $r = 0.03$, $t = 4$: the balance is $\\$2{,}240$, and $\\frac{2240 - 2000}{2000(4)} = \\frac{240}{8000} = 0.03$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($r = \\dfrac{A}{Pt}$): divides by $Pt$ without first subtracting the principal, so it uses the balance instead of the interest\n* Choice B ($r = \\dfrac{A - P}{t}$): subtracts the principal but never divides by $P$, so it gives dollars per year rather than a rate\n* Choice D ($r = \\dfrac{A - P}{P} - t$): divides by $P$ and then subtracts $t$ instead of dividing by $t$\n\n**Test Day Takeaway:** To solve a formula for a variable, strip away the added terms first, then divide by everything multiplying that variable.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "simple-interest",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  // === TIER 0 BANK GROWTH (2026-05-21): 3 problem-solving patterns @ 3 items → @ 5 items ===

  {
    id: "bank-ps-376",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The dot plot shows the number of monarch butterflies tagged at a field station on each of $9$ days. On a $10$th day, $23$ butterflies were tagged. What is the mean number of butterflies tagged per day for all $10$ days?",
    diagram: { type: "dotPlot", params: { data: [{ value: 8, count: 1 }, { value: 11, count: 1 }, { value: 12, count: 1 }, { value: 13, count: 1 }, { value: 14, count: 1 }, { value: 15, count: 1 }, { value: 17, count: 1 }, { value: 18, count: 2 }], xMin: 7, xMax: 19, xLabel: "Butterflies tagged" } },
    choices: [
      // distractor: reports the mean of the first $9$ days and assumes one more value cannot change it
      { id: "A", text: "$14$" },
      { id: "B", text: "$14.9$" },
      // distractor: divides the new total, $149$, by $9$ instead of by $10$
      { id: "C", text: "$16.56$" },
      // distractor: averages the old mean with the new value, $\frac{14 + 23}{2}$, ignoring how many days each represents
      { id: "D", text: "$18.5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Mean from List**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** The $9$ dots sum to $126$, so adding $23$ gives $149$ over $10$ days: $\\frac{149}{10} = 14.9$.\n\n**The Full Solution:**\nStep 1: Read the dots: $8$, $11$, $12$, $13$, $14$, $15$, $17$, $18$, $18$. Their sum is $126$.\nStep 2: Adding the $10$th day gives a new total of $126 + 23 = 149$ butterflies over $10$ days.\nStep 3: The new mean is $\\frac{149}{10} = 14.9$. Check: the first $9$ days average $\\frac{126}{9} = 14$, and one day above that average pulls the mean up slightly, to $14.9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): reports the mean of the first $9$ days and assumes one more value cannot change it\n* Choice C ($16.56$): divides the new total, $149$, by $9$ instead of by $10$\n* Choice D ($18.5$): averages the old mean with the new value, $\\frac{14 + 23}{2}$, ignoring how many days each represents\n\n**Test Day Takeaway:** To add a value to a data set, go back to the sum: recover it from mean $\\times$ count, add the new value, then divide by the new count.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "mean-from-list",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-377",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table summarizes the number of soil samples in each of two groups and the mean mass of the samples in each group. What is the mean mass, in grams, of all $20$ samples?",
    diagram: { type: "dataTable", params: { headers: ["Group", "Number of samples", "Mean mass (g)"], rows: [["A", "12", "6.5"], ["B", "8", "9.0"]] } },
    choices: [
      { id: "A", text: "$7.5$" },
      // distractor: averages the two group means, $\frac{6.5 + 9}{2}$, ignoring that the groups have different sizes
      { id: "B", text: "$7.75$" },
      // distractor: reports the larger group mean
      { id: "C", text: "$9$" },
      // distractor: adds the two group means
      { id: "D", text: "$15.5$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Mean from List**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Total mass $= 12(6.5) + 8(9) = 78 + 72 = 150$ grams over $20$ samples, so the mean is $\\frac{150}{20} = 7.5$.\n\n**The Full Solution:**\nStep 1: Recover each group's total from mean $\\times$ count: group A contributes $12(6.5) = 78$ grams and group B contributes $8(9) = 72$ grams.\nStep 2: The combined total is $78 + 72 = 150$ grams for $12 + 8 = 20$ samples.\nStep 3: The combined mean is $\\frac{150}{20} = 7.5$ grams. Check: the larger group has the smaller mean, so the combined mean must sit below the midpoint $7.75$, and $7.5$ does. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($7.75$): averages the two group means, $\\frac{6.5 + 9}{2}$, ignoring that the groups have different sizes\n* Choice C ($9$): reports the larger group mean\n* Choice D ($15.5$): adds the two group means\n\n**Test Day Takeaway:** Combining two groups means combining totals, not means. The unweighted average of two means is right only when the groups are the same size.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "mean-from-list",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-378",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In a poll of city residents, $38\\%$ preferred option A and $17\\%$ preferred option B. Every other respondent preferred option C. What percent of the respondents preferred option C?",
    choices: [
      { id: "A", text: "$45\\%$" },
      // distractor: reports $38 + 17$, the combined percent for options A and B
      { id: "B", text: "$55\\%$" },
      // distractor: subtracts only the $38\%$ from $100\%$, ignoring option B
      { id: "C", text: "$62\\%$" },
      // distractor: subtracts only the $17\%$ from $100\%$, ignoring option A
      { id: "D", text: "$83\\%$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Percent Complement**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The three options account for all respondents, so option C is $100\\% - 38\\% - 17\\% = 45\\%$.\n\n**The Full Solution:**\nStep 1: Every respondent preferred exactly one of the three options, so the three percents total $100\\%$.\nStep 2: Options A and B together account for $38\\% + 17\\% = 55\\%$.\nStep 3: Option C accounts for $100\\% - 55\\% = 45\\%$. Check: $38 + 17 + 45 = 100$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($55\\%$): reports $38 + 17$, the combined percent for options A and B\n* Choice C ($62\\%$): subtracts only the $38\\%$ from $100\\%$, ignoring option B\n* Choice D ($83\\%$): subtracts only the $17\\%$ from $100\\%$, ignoring option A\n\n**Test Day Takeaway:** When categories are exhaustive and non-overlapping, their percents sum to $100\\%$; subtract the sum of the known parts, not just one of them.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-complement",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-379",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "At a monitoring site, $\\dfrac{9}{25}$ of the water samples collected in one month exceeded the nitrate threshold. What percent of the samples collected did not exceed the threshold?",
    choices: [
      // distractor: subtracts the numerator from the denominator, $25 - 9$, and reports that as a percent
      { id: "A", text: "$16\\%$" },
      // distractor: reports the denominator as a percent
      { id: "B", text: "$25\\%$" },
      // distractor: reports the percent of samples that did exceed the threshold
      { id: "C", text: "$36\\%$" },
      { id: "D", text: "$64\\%$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Percent Complement**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** $\\frac{9}{25} = \\frac{36}{100} = 36\\%$ exceeded, so $100\\% - 36\\% = 64\\%$ did not.\n\n**The Full Solution:**\nStep 1: Convert the fraction to a percent by scaling the denominator to $100$: $\\frac{9}{25} = \\frac{9 \\cdot 4}{25 \\cdot 4} = \\frac{36}{100} = 36\\%$.\nStep 2: Samples either exceeded the threshold or did not, so the two percents total $100\\%$.\nStep 3: The percent that did not exceed the threshold is $100\\% - 36\\% = 64\\%$. Check: $\\frac{16}{25} = \\frac{64}{100}$, and $16$ of the $25$ parts remain. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($16\\%$): subtracts the numerator from the denominator, $25 - 9$, and reports that as a percent\n* Choice B ($25\\%$): reports the denominator as a percent\n* Choice C ($36\\%$): reports the percent of samples that did exceed the threshold\n\n**Test Day Takeaway:** Turn the fraction into a percent first, then take the complement. Subtracting inside the fraction changes what the fraction measures.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-complement",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-380",
    domain: "problem-solving",
    skills: ["slope-intercept-form"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The scatterplot shows the mass, in grams, of each of $8$ seedlings against its age, in days, along with the line of best fit $\\hat{y} = 1.4x + 3$. According to the line of best fit, what is the predicted mass, in grams, of a seedling that is $20$ days old?",
    diagram: { type: "scatterplot", params: { points: [[5, 11], [8, 13], [10, 18], [12, 20], [15, 23], [18, 29], [22, 32], [25, 39]], xMin: 0, xMax: 28, yMin: 0, yMax: 44, xGridStep: 2, yGridStep: 4, xLabelStep: 4, yLabelStep: 8, xLabel: "Age (days)", yLabel: "Mass (g)", bestFitLine: { slope: 1.4, intercept: 3 } } },
    choices: [
      // distractor: evaluates $x + 3$, dropping the slope entirely
      { id: "A", text: "$23$" },
      // distractor: evaluates $1.4x$ and forgets to add the intercept
      { id: "B", text: "$28$" },
      { id: "C", text: "$31$" },
      // distractor: rounds the slope $1.4$ up to $2$ before substituting
      { id: "D", text: "$43$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Substitute $x = 20$: $\\hat{y} = 1.4(20) + 3 = 28 + 3 = 31$.\n\n**The Full Solution:**\nStep 1: The line of best fit predicts $\\hat{y}$ from $x$, where $x$ is the age in days and $\\hat{y}$ is the predicted mass in grams.\nStep 2: Substitute $x = 20$: $\\hat{y} = 1.4(20) + 3$.\nStep 3: $1.4(20) = 28$, so $\\hat{y} = 28 + 3 = 31$ grams. Check: on the plot, the line at $x = 20$ sits between the points near $18$ and $22$ days, whose masses are $29$ and $32$ grams. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($23$): evaluates $x + 3$, dropping the slope entirely\n* Choice B ($28$): evaluates $1.4x$ and forgets to add the intercept\n* Choice D ($43$): rounds the slope $1.4$ up to $2$ before substituting\n\n**Test Day Takeaway:** A prediction from a line of best fit is a substitution: put the given $x$ into the equation and evaluate both terms.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "scatterplot-line-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-381",
    domain: "problem-solving",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The scatterplot shows the mean water temperature, in degrees Celsius, of each of $10$ lakes against the lake's elevation, in hundreds of meters, along with the line of best fit $\\hat{y} = -0.45x + 32$. Which of the following is the best interpretation of the slope of the line of best fit?",
    diagram: { type: "scatterplot", params: { points: [[3, 31], [5, 30], [7, 28], [9, 28], [11, 27], [13, 26], [15, 25], [17, 25], [19, 23], [20, 22]], xMin: 0, xMax: 22, yMin: 20, yMax: 34, xGridStep: 2, yGridStep: 2, xLabelStep: 4, yLabelStep: 4, xLabel: "Elevation (hundreds of m)", yLabel: "Mean water temp. (C)", bestFitLine: { slope: -0.45, intercept: 32 } } },
    choices: [
      { id: "A", text: "For each increase of $100$ meters in elevation, the predicted mean water temperature decreases by $0.45$ degree Celsius." },
      // distractor: keeps the size of the slope but drops its negative sign, reversing the direction of the relationship
      { id: "B", text: "For each increase of $100$ meters in elevation, the predicted mean water temperature increases by $0.45$ degree Celsius." },
      // distractor: describes a value at $x = 0$, which is the role of the intercept, not the slope
      { id: "C", text: "At an elevation of $0$ meters, the predicted mean water temperature is $0.45$ degree Celsius." },
      // distractor: swaps the predictor and the response, describing elevation as a function of temperature
      { id: "D", text: "For each increase of $1$ degree Celsius in mean water temperature, the predicted elevation decreases by $0.45$ hundred meters." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The slope $-0.45$ is the predicted change in $y$ for a one-unit increase in $x$, and one unit of $x$ is $100$ meters of elevation.\n\n**The Full Solution:**\nStep 1: In $\\hat{y} = mx + b$, the slope $m$ gives the predicted change in $\\hat{y}$ for each increase of $1$ in $x$.\nStep 2: Here $m = -0.45$ and $x$ is measured in hundreds of meters, so an increase of $1$ in $x$ means an increase of $100$ meters in elevation.\nStep 3: The negative sign means the predicted mean water temperature falls, by $0.45$ degree Celsius, for each additional $100$ meters. Check: from $x = 3$ to $x = 13$, the line drops from $30.65$ to $26.15$, which is $4.5$ degrees over $10$ units, or $0.45$ per unit. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (For each increase of $100$ meters in elevation, the predicted mean water temperature increases by $0.45$ degree Celsius.): keeps the size of the slope but drops its negative sign, reversing the direction of the relationship\n* Choice C (At an elevation of $0$ meters, the predicted mean water temperature is $0.45$ degree Celsius.): describes a value at $x = 0$, which is the role of the intercept, not the slope\n* Choice D (For each increase of $1$ degree Celsius in mean water temperature, the predicted elevation decreases by $0.45$ hundred meters.): swaps the predictor and the response, describing elevation as a function of temperature\n\n**Test Day Takeaway:** Slope interpretations must name the unit of $x$, the unit of $y$, and the direction. Read the units off the axis labels before writing the sentence.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "scatterplot-line-of-best-fit",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // === TIER 1 BANK GROWTH (2026-05-21): problem-solving patterns @ 4 items → @ 10 items ===

  // --- basic-probability (4 → 10) ---
  {
    id: "bank-ps-382",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A crate holds $20$ tulip bulbs, and $8$ of the bulbs produce yellow flowers. If one bulb is selected at random from the crate, what is the probability that the selected bulb produces a yellow flower?",
    choices: [
      { id: "A", text: "$\\frac{2}{5}$" },
      // distractor: assumes the two outcomes are equally likely rather than counting the bulbs
      { id: "B", text: "$\\frac{1}{2}$" },
      // distractor: gives the probability that the bulb does not produce a yellow flower
      { id: "C", text: "$\\frac{3}{5}$" },
      // distractor: uses $12$, the number of other bulbs, as the denominator instead of the total $20$
      { id: "D", text: "$\\frac{2}{3}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** There are $8$ favorable bulbs out of $20$, so the probability is $\\frac{8}{20} = \\frac{2}{5}$.\n\n**The Full Solution:**\nStep 1: A probability is the number of favorable outcomes divided by the total number of equally likely outcomes.\nStep 2: There are $8$ yellow-flowering bulbs and $20$ bulbs in all, so the probability is $\\frac{8}{20}$.\nStep 3: Simplify by dividing numerator and denominator by $4$: $\\frac{8}{20} = \\frac{2}{5}$. Check: $\\frac{2}{5} = 0.4$, and fewer than half the bulbs are yellow-flowering. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{1}{2}$): assumes the two outcomes are equally likely rather than counting the bulbs\n* Choice C ($\\frac{3}{5}$): gives the probability that the bulb does not produce a yellow flower\n* Choice D ($\\frac{2}{3}$): uses $12$, the number of other bulbs, as the denominator instead of the total $20$\n\n**Test Day Takeaway:** The denominator of a basic probability is always the whole group, never the leftover group.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "basic-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-383",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A spinner is divided into $12$ congruent sectors numbered $1$ through $12$, and the pointer is equally likely to stop on any sector. What is the probability that the pointer stops on a number that is a multiple of $4$?",
    choices: [
      // distractor: counts only one favorable sector
      { id: "A", text: "$\\frac{1}{12}$" },
      // distractor: counts only $8$ and $12$, omitting $4$ itself
      { id: "B", text: "$\\frac{1}{6}$" },
      { id: "C", text: "$\\frac{1}{4}$" },
      // distractor: counts the multiples of $3$ — $3$, $6$, $9$, and $12$ — instead of the multiples of $4$
      { id: "D", text: "$\\frac{1}{3}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The multiples of $4$ from $1$ to $12$ are $4$, $8$, and $12$, so the probability is $\\frac{3}{12} = \\frac{1}{4}$.\n\n**The Full Solution:**\nStep 1: The sectors are congruent, so all $12$ outcomes are equally likely.\nStep 2: List the favorable outcomes: $4$, $8$, and $12$ are the multiples of $4$ in this range, so there are $3$ of them.\nStep 3: The probability is $\\frac{3}{12} = \\frac{1}{4}$. Check: $12 \\div 4 = 3$, confirming that exactly $3$ of the first $12$ integers are multiples of $4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{12}$): counts only one favorable sector\n* Choice B ($\\frac{1}{6}$): counts only $8$ and $12$, omitting $4$ itself\n* Choice D ($\\frac{1}{3}$): counts the multiples of $3$ — $3$, $6$, $9$, and $12$ — instead of the multiples of $4$\n\n**Test Day Takeaway:** Write out the favorable values before counting them; a number is a multiple of itself, so do not skip the first one.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "basic-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-384",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A fair $10$-sided die with faces numbered $1$ through $10$ is rolled once. What is the probability that the number rolled is prime?",
    choices: [
      // distractor: omits $2$, the only even prime
      { id: "A", text: "$\\frac{3}{10}$" },
      { id: "B", text: "$\\frac{2}{5}$" },
      // distractor: counts $1$ as prime, which it is not
      { id: "C", text: "$\\frac{1}{2}$" },
      // distractor: gives the probability that the number rolled is not prime
      { id: "D", text: "$\\frac{3}{5}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The primes from $1$ to $10$ are $2$, $3$, $5$, and $7$, so the probability is $\\frac{4}{10} = \\frac{2}{5}$.\n\n**The Full Solution:**\nStep 1: A prime number has exactly two positive factors, itself and $1$; by that definition $1$ is not prime.\nStep 2: Checking $1$ through $10$, the primes are $2$, $3$, $5$, and $7$, so $4$ of the $10$ faces are favorable.\nStep 3: The probability is $\\frac{4}{10} = \\frac{2}{5}$. Check: the non-primes are $1$, $4$, $6$, $8$, $9$, and $10$, which is $6$ faces, and $4 + 6 = 10$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{10}$): omits $2$, the only even prime\n* Choice C ($\\frac{1}{2}$): counts $1$ as prime, which it is not\n* Choice D ($\\frac{3}{5}$): gives the probability that the number rolled is not prime\n\n**Test Day Takeaway:** List the favorable values explicitly on small ranges. The two traps with primes are counting $1$ and skipping $2$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "basic-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-385",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A rack holds $30$ test tubes: $12$ contain a buffer solution, $10$ contain saline, and $8$ are empty. If one tube is selected at random from the rack, what is the probability that the selected tube contains saline?",
    choices: [
      { id: "A", text: "$\\frac{1}{3}$" },
      // distractor: gives the probability of selecting a tube of buffer solution
      { id: "B", text: "$\\frac{2}{5}$" },
      // distractor: uses only the $20$ filled tubes as the denominator, excluding the empty ones
      { id: "C", text: "$\\frac{1}{2}$" },
      // distractor: gives the probability that the tube does not contain saline
      { id: "D", text: "$\\frac{2}{3}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $10$ of the $30$ tubes contain saline, so the probability is $\\frac{10}{30} = \\frac{1}{3}$.\n\n**The Full Solution:**\nStep 1: The rack holds $12 + 10 + 8 = 30$ tubes, which matches the total given, so every tube is in exactly one category.\nStep 2: The favorable outcomes are the $10$ saline tubes, so the probability is $\\frac{10}{30}$.\nStep 3: Simplify: $\\frac{10}{30} = \\frac{1}{3}$. Check: the three probabilities $\\frac{12}{30}$, $\\frac{10}{30}$, and $\\frac{8}{30}$ sum to $1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{2}{5}$): gives the probability of selecting a tube of buffer solution\n* Choice C ($\\frac{1}{2}$): uses only the $20$ filled tubes as the denominator, excluding the empty ones\n* Choice D ($\\frac{2}{3}$): gives the probability that the tube does not contain saline\n\n**Test Day Takeaway:** Every tube counts in the denominator, including the empty ones; a category you are not asked about is still part of the whole.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "basic-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-386",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table gives the results of a stress test performed on $45$ machine parts. If one of these parts is selected at random, what is the probability that the selected part did not pass the test?",
    diagram: { type: "dataTable", params: { headers: ["Result", "Number of parts"], rows: [["Passed", "18"], ["Did not pass", "27"]] } },
    choices: [
      // distractor: subtracts the two counts, $27 - 18 = 9$, and divides by $45$
      { id: "A", text: "$\\frac{1}{5}$" },
      // distractor: gives the probability that the part did pass the test
      { id: "B", text: "$\\frac{2}{5}$" },
      { id: "C", text: "$\\frac{3}{5}$" },
      // distractor: divides the passing count by the failing count, $\frac{18}{27}$, instead of dividing by the total
      { id: "D", text: "$\\frac{2}{3}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $27$ of the $45$ parts did not pass, so the probability is $\\frac{27}{45} = \\frac{3}{5}$.\n\n**The Full Solution:**\nStep 1: Read the failing count from the table: $27$ parts did not pass, out of $45$ parts tested.\nStep 2: The probability is $\\frac{27}{45}$.\nStep 3: Divide numerator and denominator by $9$: $\\frac{27}{45} = \\frac{3}{5}$. Check: the passing probability is $\\frac{18}{45} = \\frac{2}{5}$, and $\\frac{2}{5} + \\frac{3}{5} = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{5}$): subtracts the two counts, $27 - 18 = 9$, and divides by $45$\n* Choice B ($\\frac{2}{5}$): gives the probability that the part did pass the test\n* Choice D ($\\frac{2}{3}$): divides the passing count by the failing count, $\\frac{18}{27}$, instead of dividing by the total\n\n**Test Day Takeaway:** When a question asks for the complementary category, you can read that category's count straight from the table instead of subtracting.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "basic-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-387",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Of the $80$ plots surveyed in a forest, $46$ contain at least one oak, $38$ contain at least one maple, and $14$ contain at least one of each. If one of these plots is selected at random, what is the probability that the selected plot contains at least one oak or at least one maple?",
    choices: [
      // distractor: gives the probability that the plot contains neither species
      { id: "A", text: "$\\frac{1}{8}$" },
      // distractor: gives the probability that the plot contains both species
      { id: "B", text: "$\\frac{7}{40}$" },
      // distractor: uses only the $46$ plots containing oak, ignoring the maple-only plots
      { id: "C", text: "$\\frac{23}{40}$" },
      { id: "D", text: "$\\frac{7}{8}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** By inclusion-exclusion, $46 + 38 - 14 = 70$ plots contain at least one of the two species, so the probability is $\\frac{70}{80} = \\frac{7}{8}$.\n\n**The Full Solution:**\nStep 1: Adding $46$ and $38$ counts the $14$ plots that contain both species twice, so subtract that overlap once.\nStep 2: The number of plots containing oak or maple is $46 + 38 - 14 = 70$.\nStep 3: The probability is $\\frac{70}{80} = \\frac{7}{8}$. Check: the remaining $80 - 70 = 10$ plots contain neither species, and $\\frac{7}{8} + \\frac{1}{8} = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{8}$): gives the probability that the plot contains neither species\n* Choice B ($\\frac{7}{40}$): gives the probability that the plot contains both species\n* Choice C ($\\frac{23}{40}$): uses only the $46$ plots containing oak, ignoring the maple-only plots\n\n**Test Day Takeaway:** For an \"or\" question with overlap, add the two counts and subtract the overlap once; adding alone always overcounts.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "basic-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- conditional-probability-with-percent (4 → 10) ---
  {
    id: "bank-ps-388",
    domain: "problem-solving",
    skills: ["conditional-probability"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In a survey of $250$ residents, $40\\%$ own a bicycle. Of the residents who own a bicycle, $30\\%$ commute by bicycle at least once a week. How many of the residents surveyed commute by bicycle at least once a week?",
    choices: [
      { id: "A", text: "$30$" },
      // distractor: counts the bicycle owners who do not commute by bicycle, $70\%$ of $100$
      { id: "B", text: "$70$" },
      // distractor: stops after the first step and reports the number of bicycle owners
      { id: "C", text: "$100$" },
      // distractor: applies $70\%$ to all $250$ residents
      { id: "D", text: "$175$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $0.40(250) = 100$ bicycle owners, and $0.30(100) = 30$ of them commute by bicycle.\n\n**The Full Solution:**\nStep 1: Find the size of the subgroup: $40\\%$ of $250$ is $0.40(250) = 100$ bicycle owners.\nStep 2: The second percent applies to that subgroup, not to the whole survey: $30\\%$ of $100$ is $0.30(100) = 30$.\nStep 3: So $30$ residents commute by bicycle at least once a week. Check: $30$ is $12\\%$ of $250$, and $0.40(0.30) = 0.12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($70$): counts the bicycle owners who do not commute by bicycle, $70\\%$ of $100$\n* Choice C ($100$): stops after the first step and reports the number of bicycle owners\n* Choice D ($175$): applies $70\\%$ to all $250$ residents\n\n**Test Day Takeaway:** A percent of a percent applies to the smaller group. Compute the subgroup first, then apply the second percent to it.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "conditional-probability-with-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-389",
    domain: "problem-solving",
    skills: ["conditional-probability"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "At a clinic, $25\\%$ of the visits during one week were follow-up visits, and $60\\%$ of those follow-up visits were booked online. What percent of all the visits that week were follow-up visits booked online?",
    choices: [
      { id: "A", text: "$15\\%$" },
      // distractor: reports the percent of visits that were follow-up visits
      { id: "B", text: "$25\\%$" },
      // distractor: subtracts the two given percents, $60 - 25$
      { id: "C", text: "$35\\%$" },
      // distractor: reports the percent of follow-up visits booked online, which is a percent of the subgroup rather than of all visits
      { id: "D", text: "$60\\%$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Multiply the two rates: $0.25(0.60) = 0.15$, which is $15\\%$.\n\n**The Full Solution:**\nStep 1: Let the total number of visits be $100$ for convenience. Then $25$ of them were follow-up visits.\nStep 2: $60\\%$ of those $25$ visits were booked online: $0.60(25) = 15$ visits.\nStep 3: Those $15$ visits are $15\\%$ of the $100$ total visits. Check: multiplying the rates directly gives $0.25 \\times 0.60 = 0.15 = 15\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($25\\%$): reports the percent of visits that were follow-up visits\n* Choice C ($35\\%$): subtracts the two given percents, $60 - 25$\n* Choice D ($60\\%$): reports the percent of follow-up visits booked online, which is a percent of the subgroup rather than of all visits\n\n**Test Day Takeaway:** To convert \"a percent of a percent\" into a percent of the whole, multiply the two decimals; adding or subtracting them describes nothing.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "conditional-probability-with-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-390",
    domain: "problem-solving",
    skills: ["conditional-probability"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A laboratory tested $1{,}200$ water samples. Of those samples, $30\\%$ came from wells, and $15\\%$ of the well samples contained detectable iron. How many of the samples tested were well samples containing detectable iron?",
    choices: [
      { id: "A", text: "$54$" },
      // distractor: applies $15\%$ to all $1{,}200$ samples instead of to the well samples
      { id: "B", text: "$180$" },
      // distractor: counts the well samples with no detectable iron, $85\%$ of $360$
      { id: "C", text: "$306$" },
      // distractor: reports the number of well samples and stops
      { id: "D", text: "$360$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $0.30(1200) = 360$ well samples, and $0.15(360) = 54$ of them contained detectable iron.\n\n**The Full Solution:**\nStep 1: The well samples number $0.30(1200) = 360$.\nStep 2: The second percent describes only those $360$ samples: $0.15(360) = 54$.\nStep 3: So $54$ samples were well samples containing detectable iron. Check: $0.30(0.15) = 0.045$, and $0.045(1200) = 54$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($180$): applies $15\\%$ to all $1{,}200$ samples instead of to the well samples\n* Choice C ($306$): counts the well samples with no detectable iron, $85\\%$ of $360$\n* Choice D ($360$): reports the number of well samples and stops\n\n**Test Day Takeaway:** Track which group each percent describes. The second percent in a chain almost never applies to the original total.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "conditional-probability-with-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-391",
    domain: "problem-solving",
    skills: ["conditional-probability"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Of the $850$ attendees at a conference, $60\\%$ registered before the deadline. Of the attendees who registered before the deadline, $x\\%$ attended the opening session. If $306$ attendees who registered before the deadline attended the opening session, what is the value of $x$?",
    choices: [
      // distractor: divides $306$ by all $850$ attendees instead of by the $510$ early registrants
      { id: "A", text: "$36$" },
      // distractor: reports $100 - 60$, the percent who registered after the deadline
      { id: "B", text: "$40$" },
      { id: "C", text: "$60$" },
      // distractor: divides $306$ by $340$, the number who did not register early
      { id: "D", text: "$90$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Early registrants: $0.60(850) = 510$. Then $\\frac{306}{510} = 0.6$, so $x = 60$.\n\n**The Full Solution:**\nStep 1: The early registrants number $0.60(850) = 510$.\nStep 2: The $306$ attendees described are a part of that subgroup, so $\\frac{x}{100} = \\frac{306}{510}$.\nStep 3: $\\frac{306}{510} = 0.6$, so $x = 60$. Check: $0.60(510) = 306$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($36$): divides $306$ by all $850$ attendees instead of by the $510$ early registrants\n* Choice B ($40$): reports $100 - 60$, the percent who registered after the deadline\n* Choice D ($90$): divides $306$ by $340$, the number who did not register early\n\n**Test Day Takeaway:** When a count is described as a percent \"of those who...\", the denominator is that subgroup, not the whole population.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "conditional-probability-with-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-392",
    domain: "problem-solving",
    skills: ["conditional-probability"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A polling firm contacted $1{,}500$ households, and $72\\%$ of them responded. Of the households that responded, $25\\%$ completed the full questionnaire. How many households completed the full questionnaire?",
    choices: [
      { id: "A", text: "$270$" },
      // distractor: applies $25\%$ to all $1{,}500$ households
      { id: "B", text: "$375$" },
      // distractor: counts the responding households that did not complete the full questionnaire, $75\%$ of $1{,}080$
      { id: "C", text: "$810$" },
      // distractor: reports the number of households that responded
      { id: "D", text: "$1{,}080$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $0.72(1500) = 1080$ responded, and $0.25(1080) = 270$ completed the questionnaire.\n\n**The Full Solution:**\nStep 1: The responding households number $0.72(1500) = 1080$.\nStep 2: One quarter of those responded fully: $0.25(1080) = 270$.\nStep 3: So $270$ households completed the full questionnaire. Check: $0.72(0.25) = 0.18$, and $0.18(1500) = 270$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($375$): applies $25\\%$ to all $1{,}500$ households\n* Choice C ($810$): counts the responding households that did not complete the full questionnaire, $75\\%$ of $1{,}080$\n* Choice D ($1{,}080$): reports the number of households that responded\n\n**Test Day Takeaway:** Chain percents multiply: the fraction of the whole is the product of the two rates, never their sum.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "conditional-probability-with-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-393",
    domain: "problem-solving",
    skills: ["conditional-probability"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In a county, $40\\%$ of the registered voters are under age $40$. Of the registered voters under age $40$, $30\\%$ voted in the primary. If $2{,}160$ registered voters under age $40$ voted in the primary, how many registered voters are in the county?",
    choices: [
      // distractor: multiplies by $0.40$ instead of dividing, running the chain forward instead of backward
      { id: "A", text: "$864$" },
      // distractor: divides by $0.40$ only, using the wrong percent and stopping after one step
      { id: "B", text: "$5{,}400$" },
      // distractor: reports the number of registered voters under age $40$ and stops
      { id: "C", text: "$7{,}200$" },
      { id: "D", text: "$18{,}000$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** Undo the chain: $\\frac{2160}{0.30} = 7{,}200$ voters under $40$, then $\\frac{7200}{0.40} = 18{,}000$ registered voters.\n\n**The Full Solution:**\nStep 1: Let $N$ be the number of registered voters. The chain forward is $N(0.40)(0.30) = 2160$.\nStep 2: Work backward one factor at a time. The number under age $40$ is $\\frac{2160}{0.30} = 7200$.\nStep 3: Those $7{,}200$ voters are $40\\%$ of the county, so $N = \\frac{7200}{0.40} = 18{,}000$. Check: $0.40(18000) = 7{,}200$ and $0.30(7200) = 2{,}160$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($864$): multiplies by $0.40$ instead of dividing, running the chain forward instead of backward\n* Choice B ($5{,}400$): divides by $0.40$ only, using the wrong percent and stopping after one step\n* Choice C ($7{,}200$): reports the number of registered voters under age $40$ and stops\n\n**Test Day Takeaway:** Reverse a percent chain by dividing in the opposite order, and confirm by running the chain forward on your answer.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "conditional-probability-with-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- finding-a-missing-value-given-the-mean (4 → 10) ---
  {
    id: "bank-ps-394",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The mean of $5$ wind speeds recorded at a monitoring station is $21$ kilometers per hour. The table gives four of the five recorded speeds. What is the fifth recorded speed, in kilometers per hour?",
    diagram: { type: "dataTable", params: { headers: ["Reading", "Speed (km/h)"], rows: [["1", "15"], ["2", "19"], ["3", "24"], ["4", "30"]] } },
    choices: [
      { id: "A", text: "$17$" },
      // distractor: assumes the missing value must equal the mean
      { id: "B", text: "$21$" },
      // distractor: reports the mean of the four given speeds, $\frac{88}{4}$
      { id: "C", text: "$22$" },
      // distractor: subtracts the mean from the sum of the four given speeds, $88 - 21$
      { id: "D", text: "$67$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The five speeds total $5(21) = 105$, and the four listed total $88$, so the fifth is $105 - 88 = 17$.\n\n**The Full Solution:**\nStep 1: Mean $\\times$ count gives the sum: the five speeds total $5(21) = 105$ kilometers per hour.\nStep 2: The four speeds in the table total $15 + 19 + 24 + 30 = 88$.\nStep 3: The fifth speed is $105 - 88 = 17$. Check: $\\frac{15 + 19 + 24 + 30 + 17}{5} = \\frac{105}{5} = 21$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($21$): assumes the missing value must equal the mean\n* Choice C ($22$): reports the mean of the four given speeds, $\\frac{88}{4}$\n* Choice D ($67$): subtracts the mean from the sum of the four given speeds, $88 - 21$\n\n**Test Day Takeaway:** Turn a mean into a sum before doing anything else; missing-value problems are subtraction problems once you have the total.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "finding-a-missing-value-given-the-mean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-395",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The mean of the $8$ values in a data set is $46$. Seven of the values have a sum of $308$. What is the eighth value?",
    choices: [
      // distractor: reports the mean of the seven values, $\frac{308}{7}$
      { id: "A", text: "$44$" },
      // distractor: assumes the eighth value equals the mean of the data set
      { id: "B", text: "$46$" },
      { id: "C", text: "$60$" },
      // distractor: reports the sum of all eight values, stopping after the first step
      { id: "D", text: "$368$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The eight values total $8(46) = 368$, so the eighth value is $368 - 308 = 60$.\n\n**The Full Solution:**\nStep 1: The sum of all eight values is $8(46) = 368$.\nStep 2: Seven of them account for $308$ of that total.\nStep 3: The eighth value is $368 - 308 = 60$. Check: $\\frac{308 + 60}{8} = \\frac{368}{8} = 46$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($44$): reports the mean of the seven values, $\\frac{308}{7}$\n* Choice B ($46$): assumes the eighth value equals the mean of the data set\n* Choice D ($368$): reports the sum of all eight values, stopping after the first step\n\n**Test Day Takeaway:** The mean of a data set is not the value of any one member; recover the total first, then subtract what is accounted for.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "finding-a-missing-value-given-the-mean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-396",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A student's mean score on four lab reports is $88$. The table gives the scores on the first three reports. What is the score on the fourth report?",
    diagram: { type: "dataTable", params: { headers: ["Lab report", "Score"], rows: [["1", "90"], ["2", "81"], ["3", "84"]] } },
    choices: [
      // distractor: multiplies the mean by $3$ instead of $4$ before subtracting, giving $264 - 255$
      { id: "A", text: "$9$" },
      // distractor: reports the mean of the three given scores, $\frac{255}{3}$
      { id: "B", text: "$85$" },
      // distractor: assumes the fourth score equals the mean
      { id: "C", text: "$88$" },
      { id: "D", text: "$97$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The four scores total $4(88) = 352$, and the first three total $255$, so the fourth is $352 - 255 = 97$.\n\n**The Full Solution:**\nStep 1: Convert the mean to a total: the four scores sum to $4(88) = 352$.\nStep 2: Add the three scores in the table: $90 + 81 + 84 = 255$.\nStep 3: The fourth score is $352 - 255 = 97$. Check: $\\frac{90 + 81 + 84 + 97}{4} = \\frac{352}{4} = 88$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): multiplies the mean by $3$ instead of $4$ before subtracting, giving $264 - 255$\n* Choice B ($85$): reports the mean of the three given scores, $\\frac{255}{3}$\n* Choice C ($88$): assumes the fourth score equals the mean\n\n**Test Day Takeaway:** Multiply the mean by the count of all the values, including the unknown one; using the count of the known values is the standard slip.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "finding-a-missing-value-given-the-mean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-397",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The mean of $9$ measurements is $32$. One of the measurements is removed, and the mean of the remaining $8$ measurements is $30$. What is the value of the measurement that was removed?",
    choices: [
      // distractor: reports the difference between the two means, $32 - 30$
      { id: "A", text: "$2$" },
      // distractor: uses $9(30)$ instead of $8(30)$ for the remaining sum, giving $288 - 270$
      { id: "B", text: "$18$" },
      // distractor: assumes the removed measurement equals the original mean
      { id: "C", text: "$32$" },
      { id: "D", text: "$48$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The nine measurements total $9(32) = 288$ and the remaining eight total $8(30) = 240$, so the removed value is $288 - 240 = 48$.\n\n**The Full Solution:**\nStep 1: Before the removal, the sum is $9(32) = 288$.\nStep 2: After the removal, the sum is $8(30) = 240$.\nStep 3: The removed measurement is the difference of the sums: $288 - 240 = 48$. Check: $48$ is well above the original mean of $32$, which is why removing it pulls the mean down. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports the difference between the two means, $32 - 30$\n* Choice B ($18$): uses $9(30)$ instead of $8(30)$ for the remaining sum, giving $288 - 270$\n* Choice C ($32$): assumes the removed measurement equals the original mean\n\n**Test Day Takeaway:** Compare sums, not means. Each mean must be multiplied by its own count before you subtract.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "finding-a-missing-value-given-the-mean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-398",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A data set of $12$ values has a mean of $47$. A $13$th value is added to the data set, and the mean of the $13$ values is $49$. What is the $13$th value?",
    choices: [
      // distractor: reports $12(2)$, the extra amount needed by the original values, rather than the new value itself
      { id: "A", text: "$24$" },
      // distractor: assumes the added value equals the new mean
      { id: "B", text: "$49$" },
      // distractor: adds $12(2) = 24$ to the old mean $47$ instead of to the new mean $49$
      { id: "C", text: "$71$" },
      { id: "D", text: "$73$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The sums are $12(47) = 564$ and $13(49) = 637$, so the added value is $637 - 564 = 73$.\n\n**The Full Solution:**\nStep 1: The original sum is $12(47) = 564$.\nStep 2: The new sum is $13(49) = 637$.\nStep 3: The added value is $637 - 564 = 73$. Check: raising $12$ values by $2$ each requires $24$, and the new value must also supply its own $49$, so $49 + 24 = 73$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): reports $12(2)$, the extra amount needed by the original values, rather than the new value itself\n* Choice B ($49$): assumes the added value equals the new mean\n* Choice C ($71$): adds $12(2) = 24$ to the old mean $47$ instead of to the new mean $49$\n\n**Test Day Takeaway:** A new value must cover its own share of the new mean plus the raise it gives every value already there: new value $=$ new mean $+ n(\\text{change in mean})$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "finding-a-missing-value-given-the-mean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-399",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A data set of $n$ values has a mean of $18$. When the value $46$ is added to the data set, the mean of the resulting $n + 1$ values is $22$. What is the value of $n$?",
    choices: [
      // distractor: reports $22 - 18$, the change in the mean
      { id: "A", text: "$4$" },
      { id: "B", text: "$6$" },
      // distractor: computes $\frac{46 - 18}{22 - 18}$, which counts the new value among the original $n$ values
      { id: "C", text: "$7$" },
      // distractor: reports $46 - 22$ without dividing by the change in the mean
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** Set $18n + 46 = 22(n + 1)$. Then $46 - 22 = 22n - 18n$, so $24 = 4n$ and $n = 6$.\n\n**The Full Solution:**\nStep 1: The original sum is $18n$, so the new sum is $18n + 46$ over $n + 1$ values.\nStep 2: Set the new mean equal to $22$: $18n + 46 = 22(n + 1) = 22n + 22$.\nStep 3: Subtract $18n$ and $22$ from each side: $24 = 4n$, so $n = 6$. Check: six values averaging $18$ sum to $108$; adding $46$ gives $154$ over $7$ values, and $\\frac{154}{7} = 22$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): reports $22 - 18$, the change in the mean\n* Choice C ($7$): computes $\\frac{46 - 18}{22 - 18}$, which counts the new value among the original $n$ values\n* Choice D ($24$): reports $46 - 22$ without dividing by the change in the mean\n\n**Test Day Takeaway:** When the count is unknown, write both sums in terms of $n$ and set the new mean equal to its stated value; the excess of the new value over the new mean, $46 - 22$, is what raises the other $n$ values by $4$ each.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "finding-a-missing-value-given-the-mean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- marginal-probability (4 → 10) ---
  {
    id: "bank-ps-400",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The table summarizes the responses of $240$ commuters, classified by mode of travel and by how often they commute. If one of these commuters is selected at random, what is the probability of selecting a commuter who travels by rail?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Daily", "Less than daily", "Total"], rows: [["Rail", "66", "30", "96"], ["Bus", "84", "60", "144"], ["Total", "150", "90", "240"]] } },
    choices: [
      // distractor: uses only the $66$ rail commuters who commute daily
      { id: "A", text: "$\\frac{11}{40}$" },
      { id: "B", text: "$\\frac{2}{5}$" },
      // distractor: divides the $66$ daily rail commuters by the $150$ daily commuters, a conditional probability
      { id: "C", text: "$\\frac{11}{25}$" },
      // distractor: gives the probability of selecting a bus commuter
      { id: "D", text: "$\\frac{3}{5}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The rail row totals $96$ out of $240$ commuters, so the probability is $\\frac{96}{240} = \\frac{2}{5}$.\n\n**The Full Solution:**\nStep 1: A marginal probability uses a row total or a column total, not a single cell.\nStep 2: The rail row total is $66 + 30 = 96$, and the grand total is $240$.\nStep 3: The probability is $\\frac{96}{240} = \\frac{2}{5}$. Check: the bus row total is $144$, and $\\frac{96}{240} + \\frac{144}{240} = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{11}{40}$): uses only the $66$ rail commuters who commute daily\n* Choice C ($\\frac{11}{25}$): divides the $66$ daily rail commuters by the $150$ daily commuters, a conditional probability\n* Choice D ($\\frac{3}{5}$): gives the probability of selecting a bus commuter\n\n**Test Day Takeaway:** Read the margin, not a cell: \"selecting a commuter who travels by rail\" places no condition on the second variable, so use the whole row over the grand total.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "marginal-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-401",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A greenhouse trial assigned $180$ plants to one of two fertilizer treatments and recorded whether each plant flowered, as summarized in the table. If one of these plants is selected at random, what is the probability of selecting a plant that received treatment B?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Flowered", "Did not flower", "Total"], rows: [["Treatment A", "48", "27", "75"], ["Treatment B", "63", "42", "105"], ["Total", "111", "69", "180"]] } },
    choices: [
      // distractor: uses only the $42$ treatment B plants that did not flower
      { id: "A", text: "$\\frac{7}{30}$" },
      // distractor: uses only the $63$ treatment B plants that flowered
      { id: "B", text: "$\\frac{7}{20}$" },
      // distractor: gives the probability of selecting a plant that received treatment A
      { id: "C", text: "$\\frac{5}{12}$" },
      { id: "D", text: "$\\frac{7}{12}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The treatment B row totals $105$ out of $180$ plants, so the probability is $\\frac{105}{180} = \\frac{7}{12}$.\n\n**The Full Solution:**\nStep 1: The question places no condition on flowering, so the whole treatment B row is favorable.\nStep 2: That row totals $63 + 42 = 105$ plants out of the $180$ in the trial.\nStep 3: The probability is $\\frac{105}{180} = \\frac{7}{12}$, dividing numerator and denominator by $15$. Check: treatment A accounts for $\\frac{75}{180} = \\frac{5}{12}$, and $\\frac{5}{12} + \\frac{7}{12} = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{7}{30}$): uses only the $42$ treatment B plants that did not flower\n* Choice B ($\\frac{7}{20}$): uses only the $63$ treatment B plants that flowered\n* Choice C ($\\frac{5}{12}$): gives the probability of selecting a plant that received treatment A\n\n**Test Day Takeaway:** A single cell answers a joint question; a row or column total answers a marginal one. Match the total to the number of conditions in the question.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "marginal-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-402",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Of the $360$ visitors recorded at a museum on one day, $216$ bought a guidebook and the rest did not. If one of these visitors is selected at random, what is the probability that the selected visitor bought a guidebook?",
    choices: [
      // distractor: gives the probability that the visitor did not buy a guidebook
      { id: "A", text: "$\\frac{2}{5}$" },
      // distractor: assumes the two outcomes are equally likely rather than using the counts
      { id: "B", text: "$\\frac{1}{2}$" },
      { id: "C", text: "$\\frac{3}{5}$" },
      // distractor: divides $144$ by $216$ instead of dividing $216$ by the total $360$
      { id: "D", text: "$\\frac{2}{3}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $216$ of the $360$ visitors bought a guidebook, so the probability is $\\frac{216}{360} = \\frac{3}{5}$.\n\n**The Full Solution:**\nStep 1: The two categories account for every visitor, so $360 - 216 = 144$ visitors did not buy a guidebook.\nStep 2: The favorable count is $216$ and the total is $360$, giving $\\frac{216}{360}$.\nStep 3: Divide numerator and denominator by $72$: $\\frac{216}{360} = \\frac{3}{5}$. Check: $\\frac{144}{360} = \\frac{2}{5}$, and the two probabilities sum to $1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{2}{5}$): gives the probability that the visitor did not buy a guidebook\n* Choice B ($\\frac{1}{2}$): assumes the two outcomes are equally likely rather than using the counts\n* Choice D ($\\frac{2}{3}$): divides $144$ by $216$ instead of dividing $216$ by the total $360$\n\n**Test Day Takeaway:** Confirm that the categories cover the whole group, then put the favorable count over that whole group.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "marginal-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-403",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The table shows the number of concert tickets sold for each of two sections on each of two nights. If one of the $300$ tickets sold is selected at random, what is the probability that the selected ticket was sold for Saturday?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Friday", "Saturday", "Total"], rows: [["Orchestra", "84", "96", "180"], ["Balcony", "56", "64", "120"], ["Total", "140", "160", "300"]] } },
    choices: [
      // distractor: uses only the $96$ orchestra tickets sold for Saturday
      { id: "A", text: "$\\frac{8}{25}$" },
      // distractor: gives the probability that the ticket was sold for Friday
      { id: "B", text: "$\\frac{7}{15}$" },
      { id: "C", text: "$\\frac{8}{15}$" },
      // distractor: divides the $96$ Saturday orchestra tickets by the $160$ Saturday tickets, a conditional probability
      { id: "D", text: "$\\frac{3}{5}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The Saturday column totals $160$ out of $300$ tickets, so the probability is $\\frac{160}{300} = \\frac{8}{15}$.\n\n**The Full Solution:**\nStep 1: The question asks only about the night, so the favorable outcomes fill the entire Saturday column.\nStep 2: That column totals $96 + 64 = 160$ tickets out of $300$ sold.\nStep 3: The probability is $\\frac{160}{300} = \\frac{8}{15}$, dividing both parts by $20$. Check: Friday accounts for $\\frac{140}{300} = \\frac{7}{15}$, and $\\frac{7}{15} + \\frac{8}{15} = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{8}{25}$): uses only the $96$ orchestra tickets sold for Saturday\n* Choice B ($\\frac{7}{15}$): gives the probability that the ticket was sold for Friday\n* Choice D ($\\frac{3}{5}$): divides the $96$ Saturday orchestra tickets by the $160$ Saturday tickets, a conditional probability\n\n**Test Day Takeaway:** Column totals answer questions about the column variable alone; a cell would answer a question naming both variables.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "marginal-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-404",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The table classifies $420$ households by whether the household separates glass for recycling and whether it composts food waste. If one of these households is selected at random, what is the probability that the selected household separates glass for recycling?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Composts", "Does not compost", "Total"], rows: [["Separates glass", "168", "105", "273"], ["Does not separate glass", "42", "105", "147"], ["Total", "210", "210", "420"]] } },
    choices: [
      // distractor: gives the probability that the household does not separate glass
      { id: "A", text: "$\\frac{7}{20}$" },
      // distractor: uses only the $168$ households that both separate glass and compost
      { id: "B", text: "$\\frac{2}{5}$" },
      { id: "C", text: "$\\frac{13}{20}$" },
      // distractor: divides those $168$ households by the $210$ households that compost, a conditional probability
      { id: "D", text: "$\\frac{4}{5}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The glass-separating row totals $273$ out of $420$ households, so the probability is $\\frac{273}{420} = \\frac{13}{20}$.\n\n**The Full Solution:**\nStep 1: Composting is not part of the question, so both cells of the glass-separating row are favorable.\nStep 2: That row totals $168 + 105 = 273$ households out of $420$.\nStep 3: The probability is $\\frac{273}{420} = \\frac{13}{20}$, dividing both parts by $21$. Check: $\\frac{147}{420} = \\frac{7}{20}$ of households do not separate glass, and $\\frac{13}{20} + \\frac{7}{20} = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{7}{20}$): gives the probability that the household does not separate glass\n* Choice B ($\\frac{2}{5}$): uses only the $168$ households that both separate glass and compost\n* Choice D ($\\frac{4}{5}$): divides those $168$ households by the $210$ households that compost, a conditional probability\n\n**Test Day Takeaway:** Ignore the variable the question does not mention by collapsing across it — that is exactly what a row total does.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "marginal-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-405",
    domain: "problem-solving",
    skills: ["probability-basics"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Of the $120$ students in a program, $78$ are enrolled in statistics, $54$ are enrolled in economics, and $18$ are enrolled in neither course. If one of these students is selected at random, what is the probability that the selected student is enrolled in statistics but not in economics?",
    choices: [
      // distractor: gives the probability of being enrolled in economics but not statistics
      { id: "A", text: "$\\frac{1}{5}$" },
      // distractor: gives the probability of being enrolled in both courses
      { id: "B", text: "$\\frac{1}{4}$" },
      { id: "C", text: "$\\frac{2}{5}$" },
      // distractor: uses all $78$ statistics students, including the $30$ who are also enrolled in economics
      { id: "D", text: "$\\frac{13}{20}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** $120 - 18 = 102$ take at least one course, so $78 + 54 - 102 = 30$ take both and $78 - 30 = 48$ take statistics only: $\\frac{48}{120} = \\frac{2}{5}$.\n\n**The Full Solution:**\nStep 1: Since $18$ students take neither course, $120 - 18 = 102$ students take at least one of the two.\nStep 2: By inclusion-exclusion, $78 + 54 - (\\text{both}) = 102$, so the number enrolled in both is $132 - 102 = 30$.\nStep 3: Statistics only is $78 - 30 = 48$ students, so the probability is $\\frac{48}{120} = \\frac{2}{5}$. Check: $48$ statistics only $+$ $24$ economics only $+$ $30$ both $+$ $18$ neither $= 120$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{5}$): gives the probability of being enrolled in economics but not statistics\n* Choice B ($\\frac{1}{4}$): gives the probability of being enrolled in both courses\n* Choice D ($\\frac{13}{20}$): uses all $78$ statistics students, including the $30$ who are also enrolled in economics\n\n**Test Day Takeaway:** \"Enrolled in A but not B\" is the A total minus the overlap. Find the overlap first, using the count enrolled in neither to pin down the union.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "marginal-probability",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- percent-decrease (4 → 10) ---
  {
    id: "bank-ps-406",
    domain: "problem-solving",
    skills: ["percent-change"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "During drying, the mass of a soil sample decreased from $64$ grams to $48$ grams. What was the percent decrease in the mass of the sample?",
    choices: [
      // distractor: reports the raw decrease of $16$ grams as if it were a percent
      { id: "A", text: "$16\\%$" },
      { id: "B", text: "$25\\%$" },
      // distractor: divides the decrease by the new mass, $\frac{16}{48}$, instead of by the original mass
      { id: "C", text: "$33.3\\%$" },
      // distractor: reports the new mass as a percent of the original, $\frac{48}{64}$
      { id: "D", text: "$75\\%$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The decrease is $64 - 48 = 16$ grams, and $\\frac{16}{64} = 0.25$, or $25\\%$.\n\n**The Full Solution:**\nStep 1: Percent decrease is $\\frac{\\text{decrease}}{\\text{original}} \\times 100\\%$.\nStep 2: The decrease is $64 - 48 = 16$ grams and the original mass is $64$ grams.\nStep 3: $\\frac{16}{64} = 0.25 = 25\\%$. Check: $25\\%$ of $64$ is $16$, and $64 - 16 = 48$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($16\\%$): reports the raw decrease of $16$ grams as if it were a percent\n* Choice C ($33.3\\%$): divides the decrease by the new mass, $\\frac{16}{48}$, instead of by the original mass\n* Choice D ($75\\%$): reports the new mass as a percent of the original, $\\frac{48}{64}$\n\n**Test Day Takeaway:** The denominator of a percent change is always the value you started from.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-decrease",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-407",
    domain: "problem-solving",
    skills: ["percent-change"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The table gives a town's annual water use, in millions of liters, for two consecutive years. What was the percent decrease in the town's annual water use from $2022$ to $2023$?",
    diagram: { type: "dataTable", params: { headers: ["Year", "Water use (millions of liters)"], rows: [["2022", "1,250"], ["2023", "1,000"]] } },
    choices: [
      { id: "A", text: "$20\\%$" },
      // distractor: divides the decrease by the later value, $\frac{250}{1000}$
      { id: "B", text: "$25\\%$" },
      // distractor: reports the later value as a percent of the earlier one, $\frac{1000}{1250}$
      { id: "C", text: "$80\\%$" },
      // distractor: reports the raw decrease of $250$ million liters as if it were a percent
      { id: "D", text: "$250\\%$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The decrease is $1250 - 1000 = 250$, and $\\frac{250}{1250} = 0.20$, or $20\\%$.\n\n**The Full Solution:**\nStep 1: Read the two values from the table: $1{,}250$ in $2022$ and $1{,}000$ in $2023$.\nStep 2: The decrease is $1250 - 1000 = 250$ million liters, measured against the $2022$ value.\nStep 3: $\\frac{250}{1250} = 0.2 = 20\\%$. Check: $20\\%$ of $1{,}250$ is $250$, and $1250 - 250 = 1{,}000$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($25\\%$): divides the decrease by the later value, $\\frac{250}{1000}$\n* Choice C ($80\\%$): reports the later value as a percent of the earlier one, $\\frac{1000}{1250}$\n* Choice D ($250\\%$): reports the raw decrease of $250$ million liters as if it were a percent\n\n**Test Day Takeaway:** When a table gives two years, the earlier year is the base. Reversing the base is what turns a $20\\%$ decrease into a $25\\%$ figure.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-decrease",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-408",
    domain: "problem-solving",
    skills: ["percent-change"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The list price of a touring bicycle was reduced from $\\$180$ to $\\$153$. By what percent was the list price reduced?",
    choices: [
      { id: "A", text: "$15\\%$" },
      // distractor: divides the reduction by the new price, $\frac{27}{153}$
      { id: "B", text: "$17.6\\%$" },
      // distractor: reports the raw reduction of $\$27$ as if it were a percent
      { id: "C", text: "$27\\%$" },
      // distractor: reports the new price as a percent of the original, $\frac{153}{180}$
      { id: "D", text: "$85\\%$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The reduction is $180 - 153 = 27$, and $\\frac{27}{180} = 0.15$, or $15\\%$.\n\n**The Full Solution:**\nStep 1: Find the amount of the reduction: $180 - 153 = 27$ dollars.\nStep 2: Compare that reduction to the original price: $\\frac{27}{180}$.\nStep 3: $\\frac{27}{180} = 0.15 = 15\\%$. Check: $10\\%$ of $180$ is $18$ and $5\\%$ is $9$, and $18 + 9 = 27$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($17.6\\%$): divides the reduction by the new price, $\\frac{27}{153}$\n* Choice C ($27\\%$): reports the raw reduction of $\\$27$ as if it were a percent\n* Choice D ($85\\%$): reports the new price as a percent of the original, $\\frac{153}{180}$\n\n**Test Day Takeaway:** Break an awkward percent into friendly pieces to verify it: $15\\% = 10\\% + 5\\%$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-decrease",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-409",
    domain: "problem-solving",
    skills: ["percent-change"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The number of daylight hours recorded at a station fell from $14.4$ hours on one date to $11.7$ hours on a later date. What was the percent decrease in the number of daylight hours?",
    choices: [
      // distractor: reports the raw decrease of $2.7$ hours as if it were a percent
      { id: "A", text: "$2.7\\%$" },
      { id: "B", text: "$18.75\\%$" },
      // distractor: divides the decrease by the later value, $\frac{2.7}{11.7}$
      { id: "C", text: "$23.1\\%$" },
      // distractor: reports the later value as a percent of the earlier one, $\frac{11.7}{14.4}$
      { id: "D", text: "$81.25\\%$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The decrease is $14.4 - 11.7 = 2.7$ hours, and $\\frac{2.7}{14.4} = 0.1875$, or $18.75\\%$.\n\n**The Full Solution:**\nStep 1: The decrease is $14.4 - 11.7 = 2.7$ hours.\nStep 2: Percent decrease compares that drop to the starting value: $\\frac{2.7}{14.4}$.\nStep 3: $\\frac{2.7}{14.4} = 0.1875$, which is $18.75\\%$. Check: $14.4 - 0.1875(14.4) = 14.4 - 2.7 = 11.7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2.7\\%$): reports the raw decrease of $2.7$ hours as if it were a percent\n* Choice C ($23.1\\%$): divides the decrease by the later value, $\\frac{2.7}{11.7}$\n* Choice D ($81.25\\%$): reports the later value as a percent of the earlier one, $\\frac{11.7}{14.4}$\n\n**Test Day Takeaway:** Decimals do not change the method: subtract, divide by the original, convert to a percent, then verify by applying the percent back.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-decrease",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-410",
    domain: "problem-solving",
    skills: ["percent-change"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A laboratory's reagent use in April was $15\\%$ less than its reagent use in March. If the laboratory used $3{,}060$ milliliters of reagent in April, how many milliliters of reagent did it use in March?",
    choices: [
      // distractor: multiplies by $0.85$ instead of dividing, applying the decrease a second time
      { id: "A", text: "$2{,}601$" },
      // distractor: multiplies by $1.15$, treating a $15\%$ decrease as undone by a $15\%$ increase
      { id: "B", text: "$3{,}519$" },
      { id: "C", text: "$3{,}600$" },
      // distractor: divides by $0.15$, the percent of the decrease, instead of by $0.85$
      { id: "D", text: "$20{,}400$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** April is $85\\%$ of March, so March $= \\frac{3060}{0.85} = 3{,}600$ milliliters.\n\n**The Full Solution:**\nStep 1: A $15\\%$ decrease leaves $100\\% - 15\\% = 85\\%$ of the March amount, so $0.85M = 3060$, where $M$ is the March use.\nStep 2: Solve by dividing: $M = \\frac{3060}{0.85}$.\nStep 3: $M = 3600$ milliliters. Check: $0.15(3600) = 540$, and $3600 - 540 = 3{,}060$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2{,}601$): multiplies by $0.85$ instead of dividing, applying the decrease a second time\n* Choice B ($3{,}519$): multiplies by $1.15$, treating a $15\\%$ decrease as undone by a $15\\%$ increase\n* Choice D ($20{,}400$): divides by $0.15$, the percent of the decrease, instead of by $0.85$\n\n**Test Day Takeaway:** When the percent describes the change from the unknown value, write the unknown as the multiplier's input and divide; multiplying moves you the wrong way.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-decrease",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-411",
    domain: "problem-solving",
    skills: ["percent-change"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A machine's daily output decreased by $15\\%$ during the first year and then decreased by $12\\%$ of the reduced amount during the second year. What was the total percent decrease in the machine's daily output over the two years?",
    choices: [
      // distractor: subtracts the two percents, $15 - 12$
      { id: "A", text: "$3\\%$" },
      { id: "B", text: "$25.2\\%$" },
      // distractor: adds the two percents, treating both as percents of the original output
      { id: "C", text: "$27\\%$" },
      // distractor: reports the percent of the original output that remains rather than the percent decrease
      { id: "D", text: "$74.8\\%$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The output is multiplied by $0.85$ and then by $0.88$: $0.85(0.88) = 0.748$, so the decrease is $1 - 0.748 = 0.252$, or $25.2\\%$.\n\n**The Full Solution:**\nStep 1: A $15\\%$ decrease multiplies the output by $0.85$; a further $12\\%$ decrease multiplies the new amount by $0.88$.\nStep 2: Over two years the output is multiplied by $0.85(0.88) = 0.748$, so $74.8\\%$ of the original output remains.\nStep 3: The total decrease is $100\\% - 74.8\\% = 25.2\\%$. Check with an output of $1{,}000$: after year one it is $850$, after year two it is $748$, a drop of $252$, which is $25.2\\%$ of $1{,}000$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3\\%$): subtracts the two percents, $15 - 12$\n* Choice C ($27\\%$): adds the two percents, treating both as percents of the original output\n* Choice D ($74.8\\%$): reports the percent of the original output that remains rather than the percent decrease\n\n**Test Day Takeaway:** Successive percent changes multiply their factors; they never add, because the second percent is taken on a smaller base.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-decrease",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- percent-of-a-number (4 → 10) ---
  {
    id: "bank-ps-412",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A geologist measured a mineral sample with a mass of $60$ grams. If $45\\%$ of the sample's mass is quartz, what is the mass, in grams, of the quartz in the sample?",
    choices: [
      // distractor: subtracts $45$ from $60$ instead of taking $45\%$ of $60$
      { id: "A", text: "$15$" },
      // distractor: uses $40\%$ instead of $45\%$
      { id: "B", text: "$24$" },
      { id: "C", text: "$27$" },
      // distractor: computes $55\%$ of the mass, the part that is not quartz
      { id: "D", text: "$33$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $45\\%$ of $60$ is $0.45(60) = 27$ grams.\n\n**The Full Solution:**\nStep 1: \"$45\\%$ of the sample's mass\" means $\\frac{45}{100}$ times $60$ grams.\nStep 2: Convert the percent to a decimal and multiply: $0.45(60)$.\nStep 3: $0.45(60) = 27$ grams. Check: $10\\%$ of $60$ is $6$, so $40\\%$ is $24$ and $5\\%$ is $3$, and $24 + 3 = 27$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): subtracts $45$ from $60$ instead of taking $45\\%$ of $60$\n* Choice B ($24$): uses $40\\%$ instead of $45\\%$\n* Choice D ($33$): computes $55\\%$ of the mass, the part that is not quartz\n\n**Test Day Takeaway:** \"Percent of\" means multiply. Convert the percent to a decimal first, then multiply by the whole.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-of-a-number",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-413",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A theater has $250$ seats, and $16\\%$ of the seats are in the balcony. How many of the theater's seats are in the balcony?",
    choices: [
      // distractor: misplaces the decimal and computes $1.6\%$ of $250$
      { id: "A", text: "$4$" },
      { id: "B", text: "$40$" },
      // distractor: counts the seats that are not in the balcony, $84\%$ of $250$
      { id: "C", text: "$210$" },
      // distractor: subtracts $16$ from $250$ instead of subtracting $16\%$ of $250$
      { id: "D", text: "$234$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $16\\%$ of $250$ is $0.16(250) = 40$ seats.\n\n**The Full Solution:**\nStep 1: The balcony seats are $16\\%$ of the $250$ total seats.\nStep 2: Convert and multiply: $0.16(250)$.\nStep 3: $0.16(250) = 40$ seats. Check: $\\frac{40}{250} = 0.16$, so $40$ seats is indeed $16\\%$ of the theater. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): misplaces the decimal and computes $1.6\\%$ of $250$\n* Choice C ($210$): counts the seats that are not in the balcony, $84\\%$ of $250$\n* Choice D ($234$): subtracts $16$ from $250$ instead of subtracting $16\\%$ of $250$\n\n**Test Day Takeaway:** Verify a percent-of answer by dividing it back into the whole; the quotient should reproduce the percent.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-of-a-number",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-414",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A contractor's invoice lists a materials cost of $\\$68$, and a sales tax of $6\\%$ is applied to that cost. What is the amount of the sales tax, in dollars?",
    choices: [
      { id: "A", text: "$4.08$" },
      // distractor: computes $60\%$ of the materials cost instead of $6\%$
      { id: "B", text: "$40.80$" },
      // distractor: subtracts $6$ from $68$
      { id: "C", text: "$62$" },
      // distractor: reports the invoice total including the tax rather than the tax itself
      { id: "D", text: "$72.08$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $6\\%$ of $68$ is $0.06(68) = 4.08$ dollars.\n\n**The Full Solution:**\nStep 1: The tax is $6\\%$ of the materials cost, so the tax is $0.06$ times $68$.\nStep 2: $0.06(68) = 4.08$.\nStep 3: The sales tax is $\\$4.08$. Check: $1\\%$ of $68$ is $0.68$, and $6(0.68) = 4.08$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($40.80$): computes $60\\%$ of the materials cost instead of $6\\%$\n* Choice C ($62$): subtracts $6$ from $68$\n* Choice D ($72.08$): reports the invoice total including the tax rather than the tax itself\n\n**Test Day Takeaway:** Compute $1\\%$ by moving the decimal two places, then scale; it makes a decimal slip obvious.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-of-a-number",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-415",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A nursery's seedling count this spring is $115\\%$ of last spring's count of $240$ seedlings. How many seedlings does the nursery have this spring?",
    choices: [
      // distractor: computes only $15\%$ of $240$, the increase, rather than the new count
      { id: "A", text: "$36$" },
      // distractor: computes $85\%$ of $240$, treating the change as a decrease
      { id: "B", text: "$204$" },
      // distractor: adds $15$ to $240$ instead of adding $15\%$ of $240$
      { id: "C", text: "$255$" },
      { id: "D", text: "$276$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** $115\\%$ of $240$ is $1.15(240) = 276$ seedlings.\n\n**The Full Solution:**\nStep 1: A percent greater than $100$ converts to a decimal greater than $1$: $115\\% = 1.15$.\nStep 2: Multiply by the whole: $1.15(240)$.\nStep 3: $1.15(240) = 276$ seedlings. Check: $240 + 0.15(240) = 240 + 36 = 276$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($36$): computes only $15\\%$ of $240$, the increase, rather than the new count\n* Choice B ($204$): computes $85\\%$ of $240$, treating the change as a decrease\n* Choice C ($255$): adds $15$ to $240$ instead of adding $15\\%$ of $240$\n\n**Test Day Takeaway:** A percent over $100$ produces a result larger than the original; the increase alone is the percent above $100$, not the answer.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-of-a-number",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-416",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A solution has a mass of $2{,}400$ grams, and $0.75\\%$ of that mass is dissolved salt. What is the mass, in grams, of the dissolved salt?",
    choices: [
      // distractor: uses $0.075\%$, shifting the decimal one place too far
      { id: "A", text: "$1.8$" },
      { id: "B", text: "$18$" },
      // distractor: uses $7.5\%$ instead of $0.75\%$
      { id: "C", text: "$180$" },
      // distractor: uses $75\%$, dropping the decimal point in the percent entirely
      { id: "D", text: "$1{,}800$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $0.75\\% = 0.0075$, and $0.0075(2400) = 18$ grams.\n\n**The Full Solution:**\nStep 1: Convert the percent to a decimal by dividing by $100$: $0.75\\% = 0.0075$.\nStep 2: Multiply by the total mass: $0.0075(2400)$.\nStep 3: $0.0075(2400) = 18$ grams. Check: $1\\%$ of $2{,}400$ is $24$, so $0.75\\%$ is $\\frac{3}{4}(24) = 18$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.8$): uses $0.075\\%$, shifting the decimal one place too far\n* Choice C ($180$): uses $7.5\\%$ instead of $0.75\\%$\n* Choice D ($1{,}800$): uses $75\\%$, dropping the decimal point in the percent entirely\n\n**Test Day Takeaway:** A percent below $1\\%$ becomes a decimal with two leading zeros; anchor on $1\\%$ of the whole and scale from there.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-of-a-number",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-417",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In a survey of $850$ residents, $36\\%$ selected plan A and $22\\%$ selected plan B. How many more residents selected plan A than selected plan B?",
    choices: [
      // distractor: reports the difference in the percents, $36 - 22$, as a number of residents
      { id: "A", text: "$14$" },
      { id: "B", text: "$119$" },
      // distractor: reports the number of residents who selected plan A
      { id: "C", text: "$306$" },
      // distractor: reports the number of residents who selected either plan, $58\%$ of $850$
      { id: "D", text: "$493$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The gap is $36\\% - 22\\% = 14\\%$ of the residents, and $0.14(850) = 119$.\n\n**The Full Solution:**\nStep 1: Because both percents are taken from the same total, their difference is also a percent of that total: $36\\% - 22\\% = 14\\%$.\nStep 2: Apply that percent to the $850$ residents: $0.14(850)$.\nStep 3: $0.14(850) = 119$ residents. Check directly: $0.36(850) = 306$ and $0.22(850) = 187$, and $306 - 187 = 119$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): reports the difference in the percents, $36 - 22$, as a number of residents\n* Choice C ($306$): reports the number of residents who selected plan A\n* Choice D ($493$): reports the number of residents who selected either plan, $58\\%$ of $850$\n\n**Test Day Takeaway:** Percentage points are not people. Convert the difference in percents into a count before reporting it.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "percent-of-a-number",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- percent-of-a-whole (4 → 10) ---
  {
    id: "bank-ps-418",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A quality inspector examined $84$ welds and found that $21$ of them required rework. What percent of the welds examined required rework?",
    choices: [
      // distractor: divides $84$ by $21$ and reports the ratio $4$ as a percent
      { id: "A", text: "$4\\%$" },
      // distractor: reports the number of welds requiring rework as a percent
      { id: "B", text: "$21\\%$" },
      { id: "C", text: "$25\\%$" },
      // distractor: reports the percent of welds that did not require rework
      { id: "D", text: "$75\\%$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $\\frac{21}{84} = \\frac{1}{4} = 25\\%$.\n\n**The Full Solution:**\nStep 1: \"What percent of\" means divide the part by the whole: $\\frac{21}{84}$.\nStep 2: Simplify: $\\frac{21}{84} = \\frac{1}{4}$.\nStep 3: $\\frac{1}{4} = 0.25 = 25\\%$. Check: $25\\%$ of $84$ is $21$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4\\%$): divides $84$ by $21$ and reports the ratio $4$ as a percent\n* Choice B ($21\\%$): reports the number of welds requiring rework as a percent\n* Choice D ($75\\%$): reports the percent of welds that did not require rework\n\n**Test Day Takeaway:** The number after \"of\" is the whole and belongs in the denominator; reversing the division gives a ratio, not a percent.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-of-a-whole",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-419",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Of the $45$ hours a technician logged in one month, $18$ hours were spent on calibration. What percent of the logged hours were spent on calibration?",
    choices: [
      // distractor: divides $45$ by $18$, reversing the part and the whole
      { id: "A", text: "$2.5\\%$" },
      // distractor: reports the $27$ remaining hours as a percent
      { id: "B", text: "$27\\%$" },
      { id: "C", text: "$40\\%$" },
      // distractor: reports the percent of hours not spent on calibration
      { id: "D", text: "$60\\%$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $\\frac{18}{45} = 0.4 = 40\\%$.\n\n**The Full Solution:**\nStep 1: The part is $18$ hours and the whole is the $45$ logged hours, so compute $\\frac{18}{45}$.\nStep 2: Simplify by dividing both parts by $9$: $\\frac{18}{45} = \\frac{2}{5}$.\nStep 3: $\\frac{2}{5} = 0.4 = 40\\%$. Check: $40\\%$ of $45$ is $18$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2.5\\%$): divides $45$ by $18$, reversing the part and the whole\n* Choice B ($27\\%$): reports the $27$ remaining hours as a percent\n* Choice D ($60\\%$): reports the percent of hours not spent on calibration\n\n**Test Day Takeaway:** Simplify the fraction before converting; $\\frac{2}{5}$ is easier to read as a percent than $\\frac{18}{45}$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-of-a-whole",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-420",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A reservoir holds $1{,}250$ acre-feet of water when full, and it currently holds $875$ acre-feet. The current volume is what percent of the full volume?",
    choices: [
      // distractor: reports the percent of the full volume that is missing
      { id: "A", text: "$30\\%$" },
      // distractor: divides the $375$ acre-foot shortfall by the current volume, $\frac{375}{875}$
      { id: "B", text: "$42.9\\%$" },
      { id: "C", text: "$70\\%$" },
      // distractor: divides the full volume by the current volume, reversing the comparison
      { id: "D", text: "$142.9\\%$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $\\frac{875}{1250} = 0.7 = 70\\%$.\n\n**The Full Solution:**\nStep 1: The full volume, $1{,}250$ acre-feet, follows \"percent of,\" so it is the whole.\nStep 2: Divide the current volume by the full volume: $\\frac{875}{1250}$.\nStep 3: $\\frac{875}{1250} = 0.7 = 70\\%$. Check: $70\\%$ of $1{,}250$ is $875$, and the missing $375$ acre-feet are the other $30\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($30\\%$): reports the percent of the full volume that is missing\n* Choice B ($42.9\\%$): divides the $375$ acre-foot shortfall by the current volume, $\\frac{375}{875}$\n* Choice D ($142.9\\%$): divides the full volume by the current volume, reversing the comparison\n\n**Test Day Takeaway:** A part-of-whole percent is at most $100\\%$; a result above $100\\%$ means the division was reversed.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-of-a-whole",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-421",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A coastal preserve covers $250$ acres, and $185$ of these acres are forested. What percent of the area of the preserve is forested?",
    choices: [
      // distractor: reports the quotient $0.74$ as a percent without multiplying by $100$.
      { id: "A", text: "$0.74\\%$" },
      // distractor: gives the percent of the preserve that is NOT forested.
      { id: "B", text: "$26\\%$" },
      { id: "C", text: "$74\\%$" },
      // distractor: inverts the ratio, dividing the total acreage by the forested acreage.
      { id: "D", text: "$135\\%$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The part over the whole is $\\frac{185}{250}=0.74$, and $0.74\\times 100=74$, so $74\\%$ of the preserve is forested.\n\n**The Full Solution:**\nStep 1: The forested acreage is the part and the full preserve is the whole, so the percent is $\\frac{185}{250}\\times 100$.\nStep 2: $\\frac{185}{250}=\\frac{37}{50}=0.74$.\nStep 3: $0.74\\times 100=74$, so $74\\%$. Check: $74\\%$ of $250$ is $0.74\\times 250=185$ acres. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.74\\%$): reports the quotient $0.74$ as a percent without multiplying by $100$.\n* Choice B ($26\\%$): uses the $65$ unforested acres, giving the percent that is NOT forested.\n* Choice D ($135\\%$): inverts the ratio as $\\frac{250}{185}\\approx 1.35$; a part can never exceed $100\\%$ of its whole.\n\n**Test Day Takeaway:** Percent of a whole is always part divided by whole, then times $100$. If the part is smaller than the whole, the answer must land between $0\\%$ and $100\\%$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-of-a-whole",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-422",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A quality inspector tested $320$ concrete cylinders from a bridge project, and $272$ of these cylinders met the compressive strength standard. What percent of the cylinders tested did NOT meet the standard?",
    choices: [
      { id: "A", text: "$15\\%$" },
      // distractor: divides the $48$ failing cylinders by the $272$ passing ones instead of by all $320$.
      { id: "B", text: "$17.6\\%$" },
      // distractor: reports the count of failing cylinders as if it were a percent.
      { id: "C", text: "$48\\%$" },
      // distractor: gives the percent of cylinders that DID meet the standard.
      { id: "D", text: "$85\\%$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $320-272=48$ cylinders failed, and $\\frac{48}{320}=0.15$, so $15\\%$ did not meet the standard.\n\n**The Full Solution:**\nStep 1: The question asks about the cylinders that did NOT meet the standard, so first find that count: $320-272=48$.\nStep 2: Divide by the total number tested: $\\frac{48}{320}=0.15$.\nStep 3: $0.15\\times 100=15$, so $15\\%$. Check: $15\\%+85\\%=100\\%$, and $85\\%$ of $320$ is $272$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($17.6\\%$): computes $\\frac{48}{272}$, using the passing cylinders as the whole instead of all $320$.\n* Choice C ($48\\%$): reports the raw count of failing cylinders as a percent.\n* Choice D ($85\\%$): finds $\\frac{272}{320}$, the percent that DID meet the standard.\n\n**Test Day Takeaway:** When a stem capitalizes NOT, compute the complement count first, then divide by the original total, never by the other part.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-of-a-whole",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-423",
    domain: "problem-solving",
    skills: ["percent-of-value"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A reservoir has a capacity of $4{,}500$ acre-feet and currently holds $2{,}970$ acre-feet of water. The current volume of water is what percent of the capacity of the reservoir?",
    choices: [
      // distractor: multiplies the quotient by $10$ instead of $100$.
      { id: "A", text: "$6.6\\%$" },
      // distractor: gives the percent of the capacity that is still empty.
      { id: "B", text: "$34\\%$" },
      { id: "C", text: "$66\\%$" },
      // distractor: inverts the ratio, dividing the capacity by the current volume.
      { id: "D", text: "$151.5\\%$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $\\frac{2{,}970}{4{,}500}=0.66$, and $0.66\\times 100=66$, so the reservoir is at $66\\%$ of capacity.\n\n**The Full Solution:**\nStep 1: The current volume is the part and the capacity is the whole, so the percent is $\\frac{2{,}970}{4{,}500}\\times 100$.\nStep 2: $\\frac{2{,}970}{4{,}500}=\\frac{33}{50}=0.66$.\nStep 3: $0.66\\times 100=66$, so $66\\%$. Check: $0.66\\times 4{,}500=2{,}970$ acre-feet. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6.6\\%$): shifts the decimal point only one place, multiplying by $10$ rather than $100$.\n* Choice B ($34\\%$): uses the $1{,}530$ acre-feet of unused capacity, the percent still empty.\n* Choice D ($151.5\\%$): computes $\\frac{4{,}500}{2{,}970}$, dividing the whole by the part.\n\n**Test Day Takeaway:** Identify the whole from the phrase \"percent of.\" Whatever follows \"of\" is the denominator.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "percent-of-a-whole",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- proportion-ratio (4 → 10) ---
  {
    id: "bank-ps-424",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "On a scale drawing of a pedestrian bridge, a length of $3$ centimeters represents an actual length of $8$ meters. What actual length, in meters, is represented by a length of $12$ centimeters on the drawing?",
    choices: [
      // distractor: sets up the proportion with the corresponding quantities crossed, solving $\frac{12}{8}=\frac{3}{x}$.
      { id: "A", text: "$2$" },
      // distractor: multiplies by $\frac{3}{8}$ instead of $\frac{8}{3}$, inverting the scale.
      { id: "B", text: "$4.5$" },
      { id: "C", text: "$32$" },
      // distractor: multiplies $12\times 8$, as if $1$ centimeter represented $8$ meters.
      { id: "D", text: "$96$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Proportion Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $12$ centimeters is $4$ times $3$ centimeters, so the actual length is $4\\times 8=32$ meters.\n\n**The Full Solution:**\nStep 1: Write the proportion with matching units in matching positions: $\\frac{3\\text{ cm}}{8\\text{ m}}=\\frac{12\\text{ cm}}{x\\text{ m}}$.\nStep 2: Cross multiply: $3x=8(12)=96$.\nStep 3: $x=\\frac{96}{3}=32$ meters. Check: $\\frac{12}{32}=\\frac{3}{8}$, the same ratio. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): crosses the quantities, solving $\\frac{12}{8}=\\frac{3}{x}$.\n* Choice B ($4.5$): multiplies $12$ by $\\frac{3}{8}$, using the scale upside down and shrinking instead of enlarging.\n* Choice D ($96$): multiplies $12\\times 8$, treating $8$ meters as the length represented by $1$ centimeter.\n\n**Test Day Takeaway:** Set the proportion up with like units stacked on like units. A drawing length longer than the given one must produce an actual length longer than the given one.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "proportion-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-425",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A pump moves water at a constant rate of $18$ liters per minute. What is this rate, in milliliters per second? (Use $1$ liter $=1{,}000$ milliliters and $1$ minute $=60$ seconds.)",
    choices: [
      // distractor: converts minutes to seconds but never converts liters to milliliters.
      { id: "A", text: "$0.3$" },
      { id: "B", text: "$300$" },
      // distractor: multiplies by $60$ instead of dividing, and skips the liters-to-milliliters step.
      { id: "C", text: "$1{,}080$" },
      // distractor: converts liters to milliliters but leaves the rate per minute.
      { id: "D", text: "$18{,}000$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Proportion Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $18$ liters is $18{,}000$ milliliters, and one minute is $60$ seconds, so the rate is $\\frac{18{,}000}{60}=300$ milliliters per second.\n\n**The Full Solution:**\nStep 1: Write the rate as a fraction and multiply by conversion factors that cancel: $\\frac{18\\text{ L}}{1\\text{ min}}\\cdot\\frac{1{,}000\\text{ mL}}{1\\text{ L}}\\cdot\\frac{1\\text{ min}}{60\\text{ s}}$.\nStep 2: Liters cancel and minutes cancel, leaving $\\frac{18\\times 1{,}000}{60}$ milliliters per second.\nStep 3: $\\frac{18{,}000}{60}=300$. Check: $300$ mL/s for $60$ s is $18{,}000$ mL, which is $18$ liters. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.3$): divides by $60$ but forgets that each liter is $1{,}000$ milliliters.\n* Choice C ($1{,}080$): multiplies by $60$ rather than dividing, and also skips the volume conversion.\n* Choice D ($18{,}000$): converts to milliliters but reports the amount per minute, not per second.\n\n**Test Day Takeaway:** Build a chain of fractions so the unwanted units cancel. A rate per second must be smaller than the same rate per minute.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "proportion-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-426",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A copy machine uses $3$ toner cartridges to print $1{,}200$ pages. At this rate, how many toner cartridges are needed to print $4{,}000$ pages?",
    choices: [
      // distractor: inverts the proportion, computing $\frac{1{,}200\times 3}{4{,}000}$.
      { id: "A", text: "$0.9$" },
      // distractor: finds the scale factor $\frac{4{,}000}{1{,}200}$ and stops there.
      { id: "B", text: "$3.3$" },
      { id: "C", text: "$10$" },
      // distractor: reports pages per cartridge instead of cartridges.
      { id: "D", text: "$400$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Proportion Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** One cartridge prints $\\frac{1{,}200}{3}=400$ pages, so $4{,}000$ pages need $\\frac{4{,}000}{400}=10$ cartridges.\n\n**The Full Solution:**\nStep 1: Write the proportion $\\frac{3\\text{ cartridges}}{1{,}200\\text{ pages}}=\\frac{c}{4{,}000\\text{ pages}}$.\nStep 2: Cross multiply: $1{,}200c=3(4{,}000)=12{,}000$.\nStep 3: $c=\\frac{12{,}000}{1{,}200}=10$ cartridges. Check: $10$ cartridges at $400$ pages each print $4{,}000$ pages. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.9$): flips the proportion, computing $\\frac{1{,}200\\times 3}{4{,}000}$, which shrinks the answer instead of growing it.\n* Choice B ($3.3$): computes $\\frac{4{,}000}{1{,}200}$, the number of $1{,}200$-page batches, and never multiplies by $3$.\n* Choice D ($400$): reports the pages printed per cartridge, answering a different question.\n\n**Test Day Takeaway:** Check the direction before you divide. More pages must require more cartridges, so the answer has to exceed $3$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "proportion-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-427",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A loom produces $12$ meters of fabric every $8$ minutes at a constant rate. At this rate, how many minutes are needed for the loom to produce $30$ meters of fabric?",
    choices: [
      // distractor: reports the scale factor $\frac{30}{12}$ rather than a number of minutes.
      { id: "A", text: "$2.5$" },
      // distractor: times only the extra $18$ meters and forgets the first $8$ minutes.
      { id: "B", text: "$12$" },
      { id: "C", text: "$20$" },
      // distractor: inverts the rate, computing $30\times\frac{12}{8}$.
      { id: "D", text: "$45$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Proportion Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The loom makes $\\frac{12}{8}=1.5$ meters per minute, so $30$ meters take $\\frac{30}{1.5}=20$ minutes.\n\n**The Full Solution:**\nStep 1: Write the proportion $\\frac{12\\text{ m}}{8\\text{ min}}=\\frac{30\\text{ m}}{t\\text{ min}}$.\nStep 2: Cross multiply: $12t=8(30)=240$.\nStep 3: $t=\\frac{240}{12}=20$ minutes. Check: in $20$ minutes at $1.5$ meters per minute the loom makes $30$ meters. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2.5$): computes $\\frac{30}{12}$, the number of $12$-meter runs, and reports it as minutes.\n* Choice B ($12$): times only the additional $30-12=18$ meters, at $\\frac{8}{12}$ minute per meter, and drops the first $8$ minutes.\n* Choice D ($45$): uses $\\frac{12}{8}$ as minutes per meter instead of meters per minute.\n\n**Test Day Takeaway:** Name the rate in words before computing. \"Meters per minute\" and \"minutes per meter\" are reciprocals, and only one of them fits the question asked.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "proportion-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-428",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table gives the mass, in grams, of three samples of the same alloy, along with the volume of each sample. All samples of this alloy have the same density. What is the mass, in grams, of a sample of this alloy with a volume of $25$ cubic centimeters?",
    diagram: { type: "dataTable", params: { headers: ["Volume (cubic centimeters)", "4", "10", "16"], rows: [["Mass (grams)", "33.6", "84.0", "134.4"]] } },
    choices: [
      // distractor: divides the volume by the density instead of multiplying.
      { id: "A", text: "$2.98$" },
      // distractor: adds the masses of the $16$ and $4$ cubic centimeter samples, reaching only $20$ cubic centimeters.
      { id: "B", text: "$168$" },
      { id: "C", text: "$210$" },
      // distractor: treats the mass of the $4$ cubic centimeter sample as the mass of $1$ cubic centimeter.
      { id: "D", text: "$840$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Proportion Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Every row gives the same ratio: $\\frac{33.6}{4}=8.4$ grams per cubic centimeter. So $25$ cubic centimeters has mass $25\\times 8.4=210$ grams.\n\n**The Full Solution:**\nStep 1: Confirm the relationship is proportional: $\\frac{33.6}{4}=8.4$, $\\frac{84.0}{10}=8.4$, and $\\frac{134.4}{16}=8.4$ grams per cubic centimeter.\nStep 2: Mass is that constant times volume: $m=8.4V$.\nStep 3: $m=8.4(25)=210$ grams. Check: $\\frac{210}{25}=8.4$, matching every row of the table. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2.98$): computes $\\frac{25}{8.4}$, dividing by the density instead of multiplying by it.\n* Choice B ($168$): adds the $16$ and $4$ cubic centimeter masses, $134.4+33.6$, which accounts for only $20$ cubic centimeters.\n* Choice D ($840$): multiplies $25\\times 33.6$, treating the first sample's mass as the mass of a single cubic centimeter.\n\n**Test Day Takeaway:** In a proportional table, divide one row pair to get the unit rate, verify it on a second pair, then scale to whatever value the question names.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "proportion-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-429",
    domain: "problem-solving",
    skills: ["unit-conversion"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A storage tank loses $6$ liters of water every $15$ minutes through a leak. At this rate, how many liters of water does the tank lose in $2$ hours?",
    choices: [
      // distractor: uses the per-minute rate $0.4$ but multiplies by $2$ instead of by $120$ minutes.
      { id: "A", text: "$0.8$" },
      // distractor: doubles the $6$ liters, treating $2$ hours as $2$ of the $15$-minute intervals.
      { id: "B", text: "$12$" },
      { id: "C", text: "$48$" },
      // distractor: multiplies $6\times 15=90$ as if that were the hourly loss, then doubles it for the $2$ hours.
      { id: "D", text: "$180$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Proportion Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Two hours is $120$ minutes, which is $\\frac{120}{15}=8$ intervals of $15$ minutes, so the loss is $8\\times 6=48$ liters.\n\n**The Full Solution:**\nStep 1: Convert the time to minutes: $2$ hours $=2(60)=120$ minutes.\nStep 2: Write the proportion $\\frac{6\\text{ L}}{15\\text{ min}}=\\frac{L}{120\\text{ min}}$, so $15L=6(120)=720$.\nStep 3: $L=\\frac{720}{15}=48$ liters. Check: $0.4$ liter per minute for $120$ minutes is $48$ liters. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.8$): finds the per-minute rate $\\frac{6}{15}=0.4$ but multiplies by $2$ instead of by $120$ minutes.\n* Choice B ($12$): doubles $6$, as if $2$ hours were $2$ of the $15$-minute intervals.\n* Choice D ($180$): multiplies $6\\times 15=90$ as if that were the hourly loss, then doubles it for the $2$ hours, using the interval length as a factor instead of dividing by it.\n\n**Test Day Takeaway:** Convert to a single time unit before setting up the proportion. Mixing hours with a per-$15$-minute rate is where these items are lost.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "proportion-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- residual (4 → 10) ---
  {
    id: "bank-ps-430",
    domain: "problem-solving",
    skills: ["calculate-mean", "slope-intercept-form"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A linear model predicts the value of $y$ for a given value of $x$ using $\\hat{y}=6x+11$. For one data point, $x=4$ and the observed value is $y=41$. What is the value of $y-\\hat{y}$ for this data point?",
    choices: [
      // distractor: subtracts in the wrong order, computing $\hat{y}-y$.
      { id: "A", text: "$-6$" },
      { id: "B", text: "$6$" },
      // distractor: drops the constant term, using $\hat{y}=24$.
      { id: "C", text: "$17$" },
      // distractor: reports the predicted value instead of the difference.
      { id: "D", text: "$35$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\hat{y}=6(4)+11=35$, so $y-\\hat{y}=41-35=6$.\n\n**The Full Solution:**\nStep 1: Substitute $x=4$ into the model: $\\hat{y}=6(4)+11$.\nStep 2: $\\hat{y}=24+11=35$.\nStep 3: The difference is observed minus predicted: $41-35=6$. Check: $35+6=41$, the observed value. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): computes $\\hat{y}-y=35-41$, reversing the order of subtraction.\n* Choice C ($17$): uses $\\hat{y}=24$, dropping the constant $11$ from the model.\n* Choice D ($35$): reports the predicted value $\\hat{y}$ rather than the difference asked for.\n\n**Test Day Takeaway:** The difference $y-\\hat{y}$ is always observed minus predicted. A positive value means the observation sits above the model.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "residual",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-431",
    domain: "problem-solving",
    skills: ["calculate-mean", "slope-intercept-form"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "For a certain data set, a linear model is given by $\\hat{y}=-3x+22$. At $x=5$, the observed value of $y$ is $4$. What is the value of $y-\\hat{y}$ at $x=5$?",
    choices: [
      // distractor: drops the negative sign on the slope, using $\hat{y}=37$.
      { id: "A", text: "$-33$" },
      { id: "B", text: "$-3$" },
      // distractor: computes $\hat{y}-y$ instead of $y-\hat{y}$.
      { id: "C", text: "$3$" },
      // distractor: drops the constant term, using $\hat{y}=-15$.
      { id: "D", text: "$19$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\hat{y}=-3(5)+22=7$, so $y-\\hat{y}=4-7=-3$.\n\n**The Full Solution:**\nStep 1: Substitute $x=5$: $\\hat{y}=-3(5)+22$.\nStep 2: $\\hat{y}=-15+22=7$.\nStep 3: $y-\\hat{y}=4-7=-3$. Check: $7+(-3)=4$, the observed value. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-33$): uses $\\hat{y}=3(5)+22=37$, losing the negative sign on the slope.\n* Choice C ($3$): computes $7-4$, subtracting the observed value from the predicted value.\n* Choice D ($19$): uses $\\hat{y}=-15$, dropping the constant $22$, giving $4-(-15)$.\n\n**Test Day Takeaway:** Evaluate the model completely before subtracting. A negative slope makes the sign errors on this item look like reasonable answers.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "residual",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-432",
    domain: "problem-solving",
    skills: ["calculate-mean", "slope-intercept-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The scatterplot shows the concentration $y$, in micrograms per liter, of a dissolved mineral in each of $9$ water samples taken at depth $x$, in meters, along with the line of best fit $\\hat{y}=2x+5$. For the sample taken at a depth of $6$ meters, what is the value of $y-\\hat{y}$?",
    diagram: { type: "scatterplot", params: { points: [[1, 8], [2, 8], [3, 12], [4, 12], [5, 16], [6, 22], [7, 18], [8, 22], [9, 22]], xMin: 0, xMax: 10, yMin: 0, yMax: 28, xGridStep: 1, yGridStep: 2, xLabelStep: 2, yLabelStep: 4, xLabel: "Depth (meters)", yLabel: "Concentration (mcg/L)", bestFitLine: { slope: 2, intercept: 5 } } },
    choices: [
      // distractor: computes $\hat{y}-y$, reversing the order of subtraction.
      { id: "A", text: "$-5$" },
      { id: "B", text: "$5$" },
      // distractor: drops the constant term, using $\hat{y}=12$.
      { id: "C", text: "$10$" },
      // distractor: reports the predicted concentration instead of the residual.
      { id: "D", text: "$17$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** At $x=6$ the plotted point has $y=22$ and the line gives $\\hat{y}=2(6)+5=17$, so the residual is $22-17=5$.\n\n**The Full Solution:**\nStep 1: Read the observed value from the scatterplot at $x=6$: $y=22$ micrograms per liter.\nStep 2: Evaluate the line of best fit at $x=6$: $\\hat{y}=2(6)+5=17$.\nStep 3: The residual is $y-\\hat{y}=22-17=5$. Check: the point sits above the line, so a positive residual is expected. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): computes $17-22$, which would describe a point below the line.\n* Choice C ($10$): uses $\\hat{y}=2(6)=12$, forgetting the $+5$ in the model.\n* Choice D ($17$): reports the predicted value read off the line rather than the gap between the point and the line.\n\n**Test Day Takeaway:** A residual is a vertical gap: point minus line. Its sign tells you which side of the line the observation falls on.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "residual",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-433",
    domain: "problem-solving",
    skills: ["calculate-mean", "slope-intercept-form"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "For one data point in a study, a linear model gives a predicted value of $\\hat{y}=48$, and the observed value at that point is $y=39$. What is the value of $y-\\hat{y}$ for this data point?",
    choices: [
      { id: "A", text: "$-9$" },
      // distractor: computes $\hat{y}-y$, reversing the order of subtraction.
      { id: "B", text: "$9$" },
      // distractor: reports the observed value instead of the difference.
      { id: "C", text: "$39$" },
      // distractor: reports the predicted value instead of the difference.
      { id: "D", text: "$48$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $y-\\hat{y}=39-48=-9$.\n\n**The Full Solution:**\nStep 1: The quantity $y-\\hat{y}$ is the observed value minus the predicted value.\nStep 2: Substitute: $39-48$.\nStep 3: $39-48=-9$. Check: $48+(-9)=39$, the observed value. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): computes $48-39$, subtracting the observed value from the predicted value.\n* Choice C ($39$): reports the observed value on its own.\n* Choice D ($48$): reports the predicted value on its own.\n\n**Test Day Takeaway:** When the observation falls below the model, $y-\\hat{y}$ is negative. Order the subtraction before you touch the numbers.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "residual",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-434",
    domain: "problem-solving",
    skills: ["calculate-mean", "slope-intercept-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A linear model is given by $\\hat{y}=5x+9$. For the data point at $x=8$, the value of $y-\\hat{y}$ is $-6$. What is the observed value of $y$ at $x=8$?",
    choices: [
      // distractor: drops the constant term, using $\hat{y}=40$.
      { id: "A", text: "$34$" },
      { id: "B", text: "$43$" },
      // distractor: reports the predicted value and ignores the difference.
      { id: "C", text: "$49$" },
      // distractor: adds $6$ to the predicted value instead of subtracting it.
      { id: "D", text: "$55$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $\\hat{y}=5(8)+9=49$, and $y=\\hat{y}+(y-\\hat{y})=49-6=43$.\n\n**The Full Solution:**\nStep 1: Evaluate the model at $x=8$: $\\hat{y}=5(8)+9=49$.\nStep 2: Rearrange $y-\\hat{y}=-6$ to $y=\\hat{y}-6$.\nStep 3: $y=49-6=43$. Check: $43-49=-6$, the given difference. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($34$): computes $5(8)-6$, dropping the constant $9$ from the model.\n* Choice C ($49$): reports $\\hat{y}$ and never applies the given difference.\n* Choice D ($55$): adds $6$ instead of subtracting, which would follow from $y-\\hat{y}=+6$.\n\n**Test Day Takeaway:** A negative difference means the observation lies below the model, so subtract from the prediction to recover $y$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "residual",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-435",
    domain: "problem-solving",
    skills: ["calculate-mean", "slope-intercept-form"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The table gives four data points $(x,y)$. For these data, a linear model predicts $\\hat{y}=4x-3$. What is the sum of the four values of $y-\\hat{y}$?",
    diagram: { type: "dataTable", params: { headers: ["x", "1", "3", "6", "9"], rows: [["y", "5", "12", "21", "36"]] } },
    choices: [
      // distractor: computes $\hat{y}-y$ at each point, reversing every subtraction.
      { id: "A", text: "$-10$" },
      // distractor: reports the mean of the four differences instead of their sum.
      { id: "B", text: "$2.5$" },
      { id: "C", text: "$10$" },
      // distractor: adds the four predicted values instead of the four differences.
      { id: "D", text: "$64$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Residual**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The sum of the differences equals the sum of the observed values minus the sum of the predicted values: $(5+12+21+36)-(1+9+21+33)=74-64=10$.\n\n**The Full Solution:**\nStep 1: Evaluate $\\hat{y}=4x-3$ at each $x$: at $x=1$, $\\hat{y}=1$; at $x=3$, $\\hat{y}=9$; at $x=6$, $\\hat{y}=21$; at $x=9$, $\\hat{y}=33$.\nStep 2: Subtract point by point: $5-1=4$, $12-9=3$, $21-21=0$, and $36-33=3$.\nStep 3: Add the four differences: $4+3+0+3=10$. Check: $74-64=10$, the same total. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-10$): computes $\\hat{y}-y$ at every point, negating each difference.\n* Choice B ($2.5$): divides the correct total by $4$, reporting the average difference.\n* Choice D ($64$): adds the four predicted values and stops.\n\n**Test Day Takeaway:** Summing $y-\\hat{y}$ across points is the same as subtracting the total predicted from the total observed, which saves four separate subtractions.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "residual",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- reverse-percent (4 → 10) ---
  {
    id: "bank-ps-436",
    domain: "problem-solving",
    skills: ["percent-word-problems", "percent-of-value"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The price of a jacket after a $35\\%$ discount is $\\$91$. What was the price of the jacket, in dollars, before the discount was applied?",
    choices: [
      // distractor: takes $35\%$ of the discounted price, applying the percent to the wrong base.
      { id: "A", text: "$31.85$" },
      // distractor: multiplies by $0.65$ instead of dividing by it.
      { id: "B", text: "$59.15$" },
      // distractor: adds $35\%$ to the discounted price instead of undoing the discount.
      { id: "C", text: "$122.85$" },
      { id: "D", text: "$140$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Reverse Percent**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** A $35\\%$ discount leaves $65\\%$ of the original, so the original is $\\frac{91}{0.65}=140$ dollars.\n\n**The Full Solution:**\nStep 1: Let $p$ be the price before the discount. Taking $35\\%$ off leaves $65\\%$, so $0.65p=91$.\nStep 2: Divide both sides by $0.65$: $p=\\frac{91}{0.65}$.\nStep 3: $p=140$ dollars. Check: $35\\%$ of $140$ is $49$, and $140-49=91$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($31.85$): computes $0.35\\times 91$, taking the discount off the already-discounted price.\n* Choice B ($59.15$): computes $0.65\\times 91$, multiplying by the retained fraction instead of dividing.\n* Choice C ($122.85$): computes $1.35\\times 91$, adding $35\\%$ of the sale price back on. Adding a percent of the smaller number cannot undo a percent of the larger one.\n\n**Test Day Takeaway:** Percent problems that hand you the ending amount are division problems. Write $(\\text{factor})(\\text{original})=\\text{ending}$ and divide.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-437",
    domain: "problem-solving",
    skills: ["percent-word-problems", "percent-of-value"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A total charge of $\\$280$ includes a $12\\%$ service fee applied to the base charge. What was the base charge, in dollars, before the service fee was added?",
    choices: [
      // distractor: computes $12\%$ of the total, which is the fee on the wrong base.
      { id: "A", text: "$33.60$" },
      // distractor: subtracts $12\%$ of the total instead of dividing by $1.12$.
      { id: "B", text: "$246.40$" },
      { id: "C", text: "$250$" },
      // distractor: adds another $12\%$ to the total.
      { id: "D", text: "$313.60$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Reverse Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The total is $112\\%$ of the base charge, so the base charge is $\\frac{280}{1.12}=250$ dollars.\n\n**The Full Solution:**\nStep 1: Let $b$ be the base charge. Adding a $12\\%$ fee gives $b+0.12b=1.12b$.\nStep 2: Set that equal to the total: $1.12b=280$.\nStep 3: $b=\\frac{280}{1.12}=250$ dollars. Check: $12\\%$ of $250$ is $30$, and $250+30=280$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($33.60$): computes $0.12\\times 280$, the fee measured against the total rather than the base.\n* Choice B ($246.40$): computes $0.88\\times 280$, subtracting $12\\%$ of the larger number.\n* Choice D ($313.60$): computes $1.12\\times 280$, adding the fee a second time instead of removing it.\n\n**Test Day Takeaway:** The fee is a percent of the base, not of the total, so $12\\%$ of $280$ is never the right piece. Divide by $1.12$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-438",
    domain: "problem-solving",
    skills: ["percent-word-problems", "percent-of-value"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table gives the number of students enrolled at each of three campuses of a college this year. Enrollment at the Riverside campus this year is $16\\%$ greater than it was last year. How many students were enrolled at the Riverside campus last year?",
    diagram: { type: "dataTable", params: { headers: ["Campus", "Enrollment this year"], rows: [["Riverside", "2,900"], ["Lakeside", "1,750"], ["Hillcrest", "2,430"]] } },
    choices: [
      // distractor: subtracts $16\%$ of this year's enrollment instead of dividing by $1.16$.
      { id: "A", text: "$2{,}436$" },
      { id: "B", text: "$2{,}500$" },
      // distractor: increases this year's enrollment by $16\%$ instead of undoing the increase.
      { id: "C", text: "$3{,}364$" },
      // distractor: divides by $0.16$ rather than by $1.16$.
      { id: "D", text: "$18{,}125$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Reverse Percent**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Riverside shows $2{,}900$ students this year, which is $116\\%$ of last year's count, so last year had $\\frac{2{,}900}{1.16}=2{,}500$ students.\n\n**The Full Solution:**\nStep 1: Read the Riverside row of the table: $2{,}900$ students this year. The other two campuses are not involved.\nStep 2: Let $L$ be last year's enrollment. A $16\\%$ increase gives $1.16L=2{,}900$.\nStep 3: $L=\\frac{2{,}900}{1.16}=2{,}500$. Check: $16\\%$ of $2{,}500$ is $400$, and $2{,}500+400=2{,}900$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2{,}436$): computes $0.84\\times 2{,}900$, taking $16\\%$ off the larger number.\n* Choice C ($3{,}364$): computes $1.16\\times 2{,}900$, growing this year's figure instead of reversing the growth.\n* Choice D ($18{,}125$): divides by $0.16$, the percent of change, rather than by the growth factor $1.16$.\n\n**Test Day Takeaway:** In a multi-row table, first isolate the one row the percent statement refers to, then divide by $1+r$ to walk the percent change backward.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-439",
    domain: "problem-solving",
    skills: ["percent-word-problems", "percent-of-value"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "After a $45\\%$ increase, the monthly water use at a bottling facility is $319$ kiloliters. What was the monthly water use, in kiloliters, before the increase?",
    choices: [
      // distractor: subtracts $45\%$ of the new amount instead of dividing by $1.45$.
      { id: "A", text: "$175.45$" },
      { id: "B", text: "$220$" },
      // distractor: increases the new amount by another $45\%$.
      { id: "C", text: "$462.55$" },
      // distractor: divides by $0.45$ instead of by $1.45$.
      { id: "D", text: "$708.89$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Reverse Percent**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The new use is $145\\%$ of the old use, so the old use is $\\frac{319}{1.45}=220$ kiloliters.\n\n**The Full Solution:**\nStep 1: Let $w$ be the monthly water use before the increase.\nStep 2: A $45\\%$ increase multiplies by $1.45$, so $1.45w=319$.\nStep 3: $w=\\frac{319}{1.45}=220$ kiloliters. Check: $45\\%$ of $220$ is $99$, and $220+99=319$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($175.45$): computes $0.55\\times 319$, removing $45\\%$ of the new figure rather than of the old one.\n* Choice C ($462.55$): computes $1.45\\times 319$, applying the increase a second time.\n* Choice D ($708.89$): divides by the rate of change $0.45$ instead of the growth factor $1.45$.\n\n**Test Day Takeaway:** \"After a $p\\%$ increase\" means the given number is already the product. Divide by $1+\\frac{p}{100}$, never by $\\frac{p}{100}$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-440",
    domain: "problem-solving",
    skills: ["percent-word-problems", "percent-of-value"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A membership fee increased by $8\\%$ this year, making the fee $\\$378$. By how many dollars did the membership fee increase?",
    choices: [
      { id: "A", text: "$28$" },
      // distractor: takes $8\%$ of the new fee instead of $8\%$ of last year's fee.
      { id: "B", text: "$30.24$" },
      // distractor: reports last year's fee rather than the size of the increase.
      { id: "C", text: "$350$" },
      // distractor: adds another $8\%$ to the new fee.
      { id: "D", text: "$408.24$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Reverse Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Last year's fee is $\\frac{378}{1.08}=350$ dollars, so the increase is $378-350=28$ dollars.\n\n**The Full Solution:**\nStep 1: Let $f$ be last year's fee. An $8\\%$ increase gives $1.08f=378$.\nStep 2: $f=\\frac{378}{1.08}=350$ dollars.\nStep 3: The increase is the difference: $378-350=28$ dollars. Check: $8\\%$ of $350$ is $28$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($30.24$): computes $0.08\\times 378$, taking the percent of this year's fee instead of last year's.\n* Choice C ($350$): reports last year's fee, stopping one step before the question is answered.\n* Choice D ($408.24$): computes $1.08\\times 378$, raising the new fee again.\n\n**Test Day Takeaway:** Percent increases are measured against the earlier amount. Recover that amount by dividing, then subtract to get the increase itself.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-441",
    domain: "problem-solving",
    skills: ["percent-word-problems", "percent-of-value"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A bicycle sells for $\\$286$ after a $12\\%$ discount is applied to its list price. A second bicycle has a list price that is $\\$40$ greater than the list price of the first bicycle. What is the price, in dollars, of the second bicycle after the same $12\\%$ discount is applied?",
    choices: [
      { id: "A", text: "$321.20$" },
      // distractor: reports the list price of the first bicycle.
      { id: "B", text: "$325$" },
      // distractor: adds the full $\$40$ to the discounted price, leaving the extra $\$40$ undiscounted.
      { id: "C", text: "$326$" },
      // distractor: reports the list price of the second bicycle without applying the discount.
      { id: "D", text: "$365$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Reverse Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** The first list price is $\\frac{286}{0.88}=325$, so the second is $365$, and $0.88(365)=321.20$ dollars.\n\n**The Full Solution:**\nStep 1: A $12\\%$ discount leaves $88\\%$ of the list price, so $0.88L=286$ and $L=\\frac{286}{0.88}=325$ dollars.\nStep 2: The second bicycle lists for $325+40=365$ dollars.\nStep 3: Apply the same discount: $0.88(365)=321.20$ dollars. Check: the extra $\\$40$ is also discounted, contributing $0.88(40)=35.20$, and $286+35.20=321.20$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($325$): stops at the first bicycle's list price.\n* Choice C ($326$): adds $\\$40$ straight onto $\\$286$, forgetting that the additional $\\$40$ of list price is discounted too.\n* Choice D ($365$): reports the second list price and never applies the discount.\n\n**Test Day Takeaway:** A difference stated in list prices shrinks by the same factor once the discount is applied. Undo the percent first, adjust, then reapply.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- reverse-percent-multi-step (4 → 10) ---
  {
    id: "bank-ps-442",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The price of a used camera lens is reduced by $30\\%$, and that reduced price is then reduced by $20\\%$. The final price is $\\$196$. What was the price of the lens, in dollars, before the two reductions?",
    choices: [
      // distractor: multiplies by the combined factor $0.56$ instead of dividing by it.
      { id: "A", text: "$109.76$" },
      // distractor: multiplies the final price by $0.70$, reducing it a third time.
      { id: "B", text: "$137.20$" },
      // distractor: undoes only the $30\%$ reduction.
      { id: "C", text: "$280$" },
      { id: "D", text: "$350$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Reverse Percent Multi-Step**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The two reductions multiply to $0.70\\times 0.80=0.56$, so the original price is $\\frac{196}{0.56}=350$ dollars.\n\n**The Full Solution:**\nStep 1: Let $p$ be the original price. A $30\\%$ reduction leaves $0.70p$.\nStep 2: A further $20\\%$ reduction of that leaves $0.80(0.70p)=0.56p$, so $0.56p=196$.\nStep 3: $p=\\frac{196}{0.56}=350$ dollars. Check: $0.70(350)=245$, and $0.80(245)=196$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($109.76$): computes $0.56\\times 196$, multiplying by the combined factor instead of dividing.\n* Choice B ($137.20$): computes $0.70\\times 196$, applying a reduction to the already-final price.\n* Choice C ($280$): computes $\\frac{196}{0.70}$, undoing only the first reduction.\n\n**Test Day Takeaway:** Chained percent changes multiply. Combine the factors into one number, then divide the ending amount by it.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent-multi-step",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-443",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A distributor increases a wholesale price by $40\\%$, and a retailer then reduces that increased price by $15\\%$. After both changes, a retailer charges $\\$238$ for the item. What was the wholesale price, in dollars?",
    choices: [
      // distractor: nets the percents to a single $25\%$ increase instead of multiplying the factors.
      { id: "A", text: "$190.40$" },
      { id: "B", text: "$200$" },
      // distractor: multiplies by the combined factor $1.19$ instead of dividing by it.
      { id: "C", text: "$283.22$" },
      // distractor: multiplies the final price by $1.40$, applying the markup a second time.
      { id: "D", text: "$333.20$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Reverse Percent Multi-Step**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The combined factor is $1.40\\times 0.85=1.19$, so the wholesale price is $\\frac{238}{1.19}=200$ dollars.\n\n**The Full Solution:**\nStep 1: Let $w$ be the wholesale price. A $40\\%$ increase gives $1.40w$.\nStep 2: A $15\\%$ reduction of that gives $0.85(1.40w)=1.19w$, so $1.19w=238$.\nStep 3: $w=\\frac{238}{1.19}=200$ dollars. Check: $1.40(200)=280$, and $280-0.15(280)=238$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($190.40$): treats the changes as $+40\\%-15\\%=+25\\%$ and divides by $1.25$; percents of different bases cannot be added.\n* Choice C ($283.22$): computes $1.19\\times 238$, multiplying by the combined factor instead of dividing.\n* Choice D ($333.20$): computes $1.40\\times 238$, marking up the final price again.\n\n**Test Day Takeaway:** A markup followed by a discount is never the difference of the percents. Multiply $1+r_1$ by $1-r_2$, then divide.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent-multi-step",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-444",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The price of a share of a stock rose $25\\%$ during one quarter and then fell $16\\%$ during the next quarter. At the end of the two quarters, the share is worth $\\$210$. What was the share worth, in dollars, at the start of the two quarters?",
    choices: [
      // distractor: undoes only the $25\%$ rise.
      { id: "A", text: "$168$" },
      // distractor: nets the percents to a single $9\%$ increase instead of multiplying the factors.
      { id: "B", text: "$192.66$" },
      { id: "C", text: "$200$" },
      // distractor: multiplies by the combined factor $1.05$ instead of dividing by it.
      { id: "D", text: "$220.50$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Reverse Percent Multi-Step**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The two quarters multiply to $1.25\\times 0.84=1.05$, so the starting value is $\\frac{210}{1.05}=200$ dollars.\n\n**The Full Solution:**\nStep 1: Let $s$ be the starting value. A $25\\%$ rise gives $1.25s$.\nStep 2: A $16\\%$ fall from there gives $0.84(1.25s)=1.05s$, so $1.05s=210$.\nStep 3: $s=\\frac{210}{1.05}=200$ dollars. Check: $1.25(200)=250$, and $250-0.16(250)=210$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($168$): computes $\\frac{210}{1.25}$, reversing only the first quarter.\n* Choice B ($192.66$): divides by $1.09$, treating $+25\\%$ then $-16\\%$ as a net $+9\\%$.\n* Choice D ($220.50$): computes $1.05\\times 210$, multiplying by the combined factor instead of dividing.\n\n**Test Day Takeaway:** A rise and a fall do not cancel to the difference of the percents, because the fall is taken from a larger base. Multiply the factors first.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent-multi-step",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-445",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A technician's hourly rate increased by $5\\%$ at the start of one year and by $12\\%$ at the start of the next year. The rate after both increases is $\\$47.04$ per hour. What was the hourly rate, in dollars, before the two increases?",
    choices: [
      { id: "A", text: "$40$" },
      // distractor: nets the percents to a single $17\%$ increase instead of multiplying the factors.
      { id: "B", text: "$40.21$" },
      // distractor: undoes only the $5\%$ increase.
      { id: "C", text: "$44.80$" },
      // distractor: multiplies by the combined factor $1.176$ instead of dividing by it.
      { id: "D", text: "$55.32$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Reverse Percent Multi-Step**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The combined factor is $1.05\\times 1.12=1.176$, so the original rate is $\\frac{47.04}{1.176}=40$ dollars per hour.\n\n**The Full Solution:**\nStep 1: Let $r$ be the original hourly rate. After the $5\\%$ raise the rate is $1.05r$.\nStep 2: After the $12\\%$ raise the rate is $1.12(1.05r)=1.176r$, so $1.176r=47.04$.\nStep 3: $r=\\frac{47.04}{1.176}=40$ dollars per hour. Check: $1.05(40)=42$, and $1.12(42)=47.04$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($40.21$): divides by $1.17$, adding the two percents instead of multiplying the factors.\n* Choice C ($44.80$): computes $\\frac{47.04}{1.05}$, reversing only the first raise.\n* Choice D ($55.32$): computes $1.176\\times 47.04$, growing the final rate instead of walking it back.\n\n**Test Day Takeaway:** Two raises compound: $1.05\\times 1.12=1.176$, slightly more than a single $17\\%$ raise. Divide the ending value by the product.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent-multi-step",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-446",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table gives the percent increase in the number of active subscriptions to a service for each of two consecutive years. At the end of the two years there were $10{,}800$ active subscriptions. How many active subscriptions were there at the start of the two years?",
    diagram: { type: "dataTable", params: { headers: ["Year", "Percent increase"], rows: [["Year 1", "25%"], ["Year 2", "8%"]] } },
    choices: [
      { id: "A", text: "$8{,}000$" },
      // distractor: adds the two percents to a single $32\%$ increase instead of multiplying the factors.
      { id: "B", text: "$8{,}181.82$" },
      // distractor: undoes only the Year 1 increase.
      { id: "C", text: "$8{,}640$" },
      // distractor: multiplies by the combined factor $1.35$ instead of dividing by it.
      { id: "D", text: "$14{,}580$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Reverse Percent Multi-Step**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The table gives increases of $25\\%$ then $8\\%$, a combined factor of $1.25\\times 1.08=1.35$, so the starting count is $\\frac{10{,}800}{1.35}=8{,}000$.\n\n**The Full Solution:**\nStep 1: Let $s$ be the number of subscriptions at the start. Year 1 multiplies it by $1.25$.\nStep 2: Year 2 multiplies that result by $1.08$, giving $1.08(1.25s)=1.35s=10{,}800$.\nStep 3: $s=\\frac{10{,}800}{1.35}=8{,}000$. Check: $1.25(8{,}000)=10{,}000$, and $1.08(10{,}000)=10{,}800$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($8{,}181.82$): divides by $1.32$, adding $25\\%$ and $8\\%$ rather than compounding them.\n* Choice C ($8{,}640$): divides by $1.25$ only, ignoring the second year.\n* Choice D ($14{,}580$): computes $1.35\\times 10{,}800$, applying both increases again.\n\n**Test Day Takeaway:** Read each row of the table as a multiplier, take their product, and divide the ending amount by it.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent-multi-step",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-447",
    domain: "problem-solving",
    skills: ["percent-of-value", "percent-word-problems"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A table's list price is reduced by $15\\%$, and an $8\\%$ sales tax is then applied to the reduced price. The total amount paid is $\\$183.60$. How much less than the list price, in dollars, is the total amount paid?",
    choices: [
      // distractor: reports the sales tax, the difference between the total and the reduced price.
      { id: "A", text: "$13.60$" },
      { id: "B", text: "$16.40$" },
      // distractor: reports the discount alone and ignores the tax added back.
      { id: "C", text: "$30$" },
      // distractor: reports the list price rather than the difference asked for.
      { id: "D", text: "$200$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Reverse Percent Multi-Step**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The combined factor is $0.85\\times 1.08=0.918$, so the list price is $\\frac{183.60}{0.918}=200$, and $200-183.60=16.40$ dollars.\n\n**The Full Solution:**\nStep 1: Let $L$ be the list price. The discount leaves $0.85L$, and the tax multiplies that by $1.08$, giving $0.918L=183.60$.\nStep 2: $L=\\frac{183.60}{0.918}=200$ dollars.\nStep 3: The question asks how much less the total is than the list price: $200-183.60=16.40$ dollars. Check: $0.85(200)=170$, and $1.08(170)=183.60$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($13.60$): computes $183.60-170$, the tax paid, not the gap from the list price.\n* Choice C ($30$): computes $0.15(200)$, the discount by itself, ignoring that the tax gives $\\$13.60$ of it back.\n* Choice D ($200$): reports the list price, stopping before the subtraction.\n\n**Test Day Takeaway:** Combine the factors to recover the starting amount, then reread the question. A discount followed by tax leaves a net gap smaller than the discount itself.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "reverse-percent-multi-step",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- sum-of-parts-ratio (4 → 10) ---
  {
    id: "bank-ps-448",
    domain: "problem-solving",
    skills: ["word-problem-to-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A lecture hall has $460$ seats, divided between the front section and the rear section in the ratio $3 : 7$. How many of the seats are in the rear section?",
    choices: [
      // distractor: reports the size of one share instead of the rear section.
      { id: "A", text: "$46$" },
      // distractor: gives the front section, the $3$-part share.
      { id: "B", text: "$138$" },
      // distractor: splits the total evenly instead of in the ratio $3 : 7$.
      { id: "C", text: "$230$" },
      { id: "D", text: "$322$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Sum-of-Parts Ratio**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The ratio has $3+7=10$ parts, so each part is $\\frac{460}{10}=46$ seats, and the rear section holds $7(46)=322$ seats.\n\n**The Full Solution:**\nStep 1: Write the sections as $3k$ and $7k$ seats, so $3k+7k=460$.\nStep 2: $10k=460$, so $k=46$.\nStep 3: The rear section is $7k=7(46)=322$ seats. Check: the front section is $3(46)=138$, and $138+322=460$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($46$): reports $k$, the value of a single part.\n* Choice B ($138$): gives the front section, the smaller of the two shares.\n* Choice C ($230$): halves the total, which would be right only for a $1 : 1$ ratio.\n\n**Test Day Takeaway:** Add the ratio numbers first. Dividing the total by that sum gives one part, and every share is a multiple of it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "sum-of-parts-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-449",
    domain: "problem-solving",
    skills: ["word-problem-to-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A shipment of $306$ kilograms of gravel is split between two work sites so that the amounts are in the ratio $5 : 13$. How many kilograms of gravel go to the site that receives the smaller amount?",
    choices: [
      // distractor: reports the size of one share instead of the smaller amount.
      { id: "A", text: "$17$" },
      { id: "B", text: "$85$" },
      // distractor: splits the shipment evenly instead of in the ratio $5 : 13$.
      { id: "C", text: "$153$" },
      // distractor: gives the larger amount, the $13$-part share.
      { id: "D", text: "$221$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sum-of-Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** There are $5+13=18$ parts, so one part is $\\frac{306}{18}=17$ kilograms, and the smaller site gets $5(17)=85$ kilograms.\n\n**The Full Solution:**\nStep 1: Write the two amounts as $5k$ and $13k$ kilograms, so $5k+13k=306$.\nStep 2: $18k=306$, so $k=17$.\nStep 3: The smaller amount is $5k=5(17)=85$ kilograms. Check: $13(17)=221$, and $85+221=306$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($17$): reports $k$, one part of the ratio, not a site's share.\n* Choice C ($153$): divides the shipment in half, ignoring the ratio.\n* Choice D ($221$): gives the $13$-part share, the larger amount.\n\n**Test Day Takeaway:** The smaller ratio number always names the smaller share. Compute one part, then multiply by the number the question points to.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "sum-of-parts-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-450",
    domain: "problem-solving",
    skills: ["word-problem-to-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A restoration project planted $840$ trees that are oak, maple, and birch in the ratio $2 : 3 : 7$, respectively. How many of the trees planted are birch?",
    choices: [
      // distractor: reports the size of one part instead of the birch count.
      { id: "A", text: "$70$" },
      // distractor: gives the number of oak trees, the $2$-part share.
      { id: "B", text: "$140$" },
      // distractor: gives the number of maple trees, the $3$-part share.
      { id: "C", text: "$210$" },
      { id: "D", text: "$490$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Sum-of-Parts Ratio**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The ratio has $2+3+7=12$ parts, so one part is $\\frac{840}{12}=70$ trees, and the birch count is $7(70)=490$.\n\n**The Full Solution:**\nStep 1: Write the three counts as $2k$, $3k$, and $7k$, so $2k+3k+7k=840$.\nStep 2: $12k=840$, so $k=70$.\nStep 3: Birch trees are the $7$-part share: $7(70)=490$. Check: $140+210+490=840$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($70$): reports $k$ alone.\n* Choice B ($140$): gives the oak count, matching the ratio number $2$.\n* Choice C ($210$): gives the maple count, matching the ratio number $3$.\n\n**Test Day Takeaway:** With three-part ratios the trap is answering for the wrong category. Note which ratio number the question names before you multiply.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "sum-of-parts-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-451",
    domain: "problem-solving",
    skills: ["word-problem-to-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Two contractors split a payment of $\\$7{,}020$ in the ratio $4 : 9$. How much, in dollars, does the contractor with the smaller share receive?",
    choices: [
      // distractor: reports the size of one part instead of a contractor's share.
      { id: "A", text: "$540$" },
      { id: "B", text: "$2{,}160$" },
      // distractor: splits the payment evenly instead of in the ratio $4 : 9$.
      { id: "C", text: "$3{,}510$" },
      // distractor: gives the larger share, the $9$-part amount.
      { id: "D", text: "$4{,}860$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sum-of-Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** There are $4+9=13$ parts, so one part is $\\frac{7{,}020}{13}=540$ dollars, and the smaller share is $4(540)=2{,}160$ dollars.\n\n**The Full Solution:**\nStep 1: Write the shares as $4k$ and $9k$ dollars, so $4k+9k=7{,}020$.\nStep 2: $13k=7{,}020$, so $k=540$.\nStep 3: The smaller share is $4k=4(540)=2{,}160$ dollars. Check: $9(540)=4{,}860$, and $2{,}160+4{,}860=7{,}020$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($540$): reports $k$, the value of one part.\n* Choice C ($3{,}510$): halves the payment, ignoring the $4 : 9$ split.\n* Choice D ($4{,}860$): gives the $9$-part share, the larger payment.\n\n**Test Day Takeaway:** Dividing the total by the sum of the ratio numbers must give a value that fits both shares. Multiply by the ratio number the question asks for.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "sum-of-parts-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-452",
    domain: "problem-solving",
    skills: ["word-problem-to-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A $91$-centimeter length of copper tubing is cut into two pieces whose lengths are in the ratio $2 : 5$. What is the length, in centimeters, of the longer piece?",
    choices: [
      // distractor: reports the size of one part instead of the longer piece.
      { id: "A", text: "$13$" },
      // distractor: gives the shorter piece, the $2$-part length.
      { id: "B", text: "$26$" },
      // distractor: cuts the tubing in half instead of in the ratio $2 : 5$.
      { id: "C", text: "$45.5$" },
      { id: "D", text: "$65$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Sum-of-Parts Ratio**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The ratio has $2+5=7$ parts, so one part is $\\frac{91}{7}=13$ centimeters, and the longer piece is $5(13)=65$ centimeters.\n\n**The Full Solution:**\nStep 1: Write the pieces as $2k$ and $5k$ centimeters, so $2k+5k=91$.\nStep 2: $7k=91$, so $k=13$.\nStep 3: The longer piece is $5k=5(13)=65$ centimeters. Check: $2(13)=26$, and $26+65=91$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($13$): reports $k$, the length of a single part.\n* Choice B ($26$): gives the shorter piece, matching the ratio number $2$.\n* Choice C ($45.5$): halves the tubing, which fits a $1 : 1$ cut, not $2 : 5$.\n\n**Test Day Takeaway:** Two pieces in the ratio $2 : 5$ must add back to the whole. Check your two answers sum to the original length before choosing.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "sum-of-parts-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-ps-453",
    domain: "problem-solving",
    skills: ["word-problem-to-equation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A research grant is divided among three teams in the ratio $4 : 7 : 9$. The team with the smallest share receives $\\$26{,}800$ less than the team with the largest share. What is the total amount, in dollars, of the grant?",
    choices: [
      // distractor: reports the largest team's share rather than the whole grant.
      { id: "A", text: "$48{,}240$" },
      { id: "B", text: "$107{,}200$" },
      // distractor: divides the difference by $4$ instead of by the $5$-part gap.
      { id: "C", text: "$134{,}000$" },
      // distractor: treats the $\$26{,}800$ difference as the value of a single part.
      { id: "D", text: "$536{,}000$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sum-of-Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The gap between the largest and smallest shares is $9-4=5$ parts, so one part is $\\frac{26{,}800}{5}=5{,}360$, and the grant is $20(5{,}360)=107{,}200$ dollars.\n\n**The Full Solution:**\nStep 1: Write the shares as $4k$, $7k$, and $9k$ dollars.\nStep 2: The stated difference is between the largest and smallest: $9k-4k=5k=26{,}800$, so $k=5{,}360$.\nStep 3: The grant is $4k+7k+9k=20k=20(5{,}360)=107{,}200$ dollars. Check: the shares are $21{,}440$, $37{,}520$, and $48{,}240$, whose sum is $107{,}200$ and whose extremes differ by $26{,}800$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($48{,}240$): computes $9k$, the largest team's share, instead of the total.\n* Choice C ($134{,}000$): divides $26{,}800$ by $4$, using the smallest ratio number rather than the $5$-part difference.\n* Choice D ($536{,}000$): multiplies $26{,}800$ by $20$, treating the difference as one part.\n\n**Test Day Takeaway:** When a ratio problem gives a difference instead of a total, convert it to parts first. The difference of two shares is the difference of their ratio numbers times one part.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "sum-of-parts-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // === DIFFICULT-QUESTIONS PDF BATCH (2026-05-22) — 9 problem-solving items reskinned ===

  {
    id: "bank-ps-454",
    domain: "problem-solving",
    skills: ["percent-change", "successive-percent-change"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Two data sets, P and Q, each consist of $24$ integers. The two data sets are summarized by the same histogram, shown, where each interval gives the frequency of the integers from the lower bound through the upper bound of that interval. What is the smallest possible difference between the mean of data set P and the mean of data set Q?",
    diagram: { type: "barChart", params: { data: [{ label: "30-39", value: 6 }, { label: "40-49", value: 8 }, { label: "50-59", value: 7 }, { label: "60-69", value: 3 }], xAxisLabel: "Interval", yAxisLabel: "Frequency", yMax: 10, yStep: 2 } },
    choices: [
      { id: "A", text: "$0$" },
      // distractor: assumes two distinct data sets must have means at least $1$ apart.
      { id: "B", text: "$1$" },
      // distractor: uses half an interval width, the largest gap between a value and its interval's midpoint.
      { id: "C", text: "$5$" },
      // distractor: uses the interval width, which bounds how far apart the means can be, not how close.
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Grouped Data — Smallest Possible Mean Difference**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** A histogram fixes only how many integers land in each interval, not which integers. Identical histograms therefore allow identical data sets, whose means differ by $0$.\n\n**The Full Solution:**\nStep 1: Each bar reports a frequency for a $10$-wide interval, so many different data sets produce the same histogram.\nStep 2: Within an interval, the actual integers are free to vary, which means the mean of a data set is not determined by its histogram.\nStep 3: Because P and Q are summarized by the same histogram, one admissible choice is to give them the same $24$ integers. Their means are then equal, so the smallest possible difference is $0$. Check: no rule forces the two sets to differ, so no positive value can be the minimum. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): assumes the two data sets must differ somewhere, and that the smallest gap between integers forces a gap between means.\n* Choice C ($5$): uses half the interval width, the farthest a value can sit from its interval's midpoint.\n* Choice D ($10$): uses the interval width, which limits how far apart the means could be, not how close together.\n\n**Test Day Takeaway:** Grouped frequencies pin down a range of possible data sets, not one. When a question asks for the smallest possible difference, look for the case that makes the two sets identical.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "mean-from-list",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-ps-455",
    domain: "problem-solving",
    skills: ["percent-change", "percent-word-problems"],
    difficulty: "hard",
    type: "fill-in",
    question: "The regular price of a desk lamp at a store is $\\$62.50$. The clearance price of the lamp is $60\\%$ less than the regular price, and the clearance price is $25\\%$ greater than the store's cost for the lamp. What was the store's cost, in dollars, for the lamp?",
    correctAnswer: "20",
    explanation: "**SAT Pattern: Markup–Discount Chain**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~30s):** \"$60\\%$ less\" keeps $40\\%$: the clearance price is $62.50\\times 0.40=25.00$. That is $1.25$ times the cost, so the cost is $\\frac{25.00}{1.25}=20$ dollars.\n\n**The Full Solution:**\nStep 1: A price $60\\%$ less than the regular price is $100\\%-60\\%=40\\%$ of it: $62.50(0.40)=25.00$ dollars.\nStep 2: The clearance price is $25\\%$ greater than the store's cost $c$, so $25.00=1.25c$.\nStep 3: $c=\\frac{25.00}{1.25}=20$ dollars. Check: $25\\%$ of $20$ is $5$, and $20+5=25.00$, the clearance price. $\\checkmark$\n\n**Common Mistakes:** Multiplying instead of dividing in the last step gives $25.00\\times 1.25=31.25$; treating \"$60\\%$ less\" as a factor of $0.60$ gives a clearance price of $37.50$ and a cost of $30$.\n\n**Test Day Takeaway:** Turn each percent phrase into a single factor: \"$p\\%$ less\" is $1-\\frac{p}{100}$ and \"$p\\%$ greater than the cost\" means the cost is multiplied, so you divide to recover it.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "markup-discount-chain",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-ps-456",
    domain: "problem-solving",
    skills: ["proportion-setup"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In a random sample of $640$ likely voters in a school board election, $377$ said they would vote for Alvarez and the other $263$ said they would vote for Whitfield. If $14{,}080$ people vote in the election and the sample is representative, by how many votes would Alvarez be expected to win?",
    choices: [
      // distractor: reports the margin in the sample without scaling it to the electorate.
      { id: "A", text: "$114$" },
      { id: "B", text: "$2{,}508$" },
      // distractor: scales Whitfield's count instead of the margin.
      { id: "C", text: "$5{,}786$" },
      // distractor: scales Alvarez's count instead of the margin.
      { id: "D", text: "$8{,}294$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Poll Scaling — Margin of Victory**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The election is $\\frac{14{,}080}{640}=22$ times the sample, and Alvarez leads by $377-263=114$ in the sample, so the expected margin is $22(114)=2{,}508$ votes.\n\n**The Full Solution:**\nStep 1: Find the scaling factor from sample to electorate: $\\frac{14{,}080}{640}=22$.\nStep 2: Find Alvarez's margin in the sample: $377-263=114$ votes.\nStep 3: A representative sample scales proportionally, so the expected margin is $22(114)=2{,}508$ votes. Check: $22(377)=8{,}294$ and $22(263)=5{,}786$, and $8{,}294-5{,}786=2{,}508$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($114$): gives the sample margin with no scaling applied.\n* Choice C ($5{,}786$): scales Whitfield's $263$ supporters and reports that count.\n* Choice D ($8{,}294$): scales Alvarez's $377$ supporters and reports that count.\n\n**Test Day Takeaway:** Scaling the difference gives the same answer as scaling each count and subtracting, in one step instead of three.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "proportion-setup",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-ps-457",
    domain: "problem-solving",
    skills: ["calculate-mean"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The table gives the daily peak water level, in centimeters, recorded at each of six monitoring stations along a canal. A seventh station recorded a daily peak water level of $231$ centimeters, and that reading is added to form a new data set of seven levels. Which of the following correctly compares the mean of the original data set with the mean of the new data set?",
    diagram: { type: "dataTable", params: { headers: ["Station", "1", "2", "3", "4", "5", "6"], rows: [["Peak water level (cm)", "212", "205", "198", "221", "209", "215"]] } },
    choices: [
      // distractor: reverses the direction; a value above the mean cannot pull the mean down.
      { id: "A", text: "The mean of the new data set is less than the mean of the original data set." },
      { id: "B", text: "The mean of the new data set is greater than the mean of the original data set." },
      // distractor: assumes any added reading leaves the mean unchanged, which happens only when the reading equals the mean.
      { id: "C", text: "The mean of the new data set is equal to the mean of the original data set." },
      // distractor: treats the comparison as undetermined, though the six listed readings fix the original mean.
      { id: "D", text: "There is not enough information to compare the two means." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Mean Comparison after Adding a Value**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The six original readings average $210$ centimeters, and the added reading of $231$ is above that, so the new mean is greater.\n\n**The Full Solution:**\nStep 1: Add the six original readings: $212+205+198+221+209+215=1{,}260$, so the original mean is $\\frac{1{,}260}{6}=210$ centimeters.\nStep 2: Compare the added reading with that mean: $231>210$.\nStep 3: A value above the current mean raises the mean, so the new mean exceeds $210$. Check: $\\frac{1{,}260+231}{7}=\\frac{1{,}491}{7}=213$ centimeters, which is greater than $210$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: reverses the direction, which would be correct only if the added reading were below $210$.\n* Choice C: would require the added reading to equal the mean exactly, but $231\\neq 210$.\n* Choice D: the six readings determine the original mean, so the comparison is fully decided.\n\n**Test Day Takeaway:** Compare the new value with the existing mean instead of recomputing. Above the mean raises it, below the mean lowers it, equal to it leaves it alone.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "combined-group-mean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-ps-458",
    domain: "problem-solving",
    skills: ["proportion-setup", "rate-conversion"],
    difficulty: "hard",
    type: "fill-in",
    question: "The radiant power a flat panel receives from a perpendicular beam is the product of the beam's intensity and the panel's area. A flat panel consists of two adjacent squares, where the side length of the larger square is $3$ times the side length of the smaller square. A beam of intensity $17.00$ watts per square meter strikes the panel perpendicularly, and the panel receives a total radiant power of $1{,}530$ watts. How much radiant power, in watts, does the larger square receive?",
    correctAnswer: "1377",
    explanation: "**SAT Pattern: Proportional Area — Recover Side, Then Apply**\n\n**The correct answer is $1377$.**\n\n**The Fast Way (~40s):** With smaller side $s$, the panel's area is $(3s)^2+s^2=10s^2$, so $17(10s^2)=1{,}530$ gives $s^2=9$. The larger square has area $9s^2=81$, and $17(81)=1{,}377$ watts.\n\n**The Full Solution:**\nStep 1: Let the smaller square have side $s$ meters. The larger square has side $3s$, so its area is $(3s)^2=9s^2$ and the smaller area is $s^2$.\nStep 2: The total area is $9s^2+s^2=10s^2$, so the total power is $17(10s^2)=170s^2$.\nStep 3: Set that equal to the given total: $170s^2=1{,}530$, so $s^2=9$.\nStep 4: The larger square's area is $9s^2=9(9)=81$ square meters.\nStep 5: Its power is $17(81)=1{,}377$ watts. Check: the smaller square receives $17(9)=153$ watts, and $1{,}377+153=1{,}530$. $\\checkmark$\n\n**Common Mistakes:** Reporting the total $1530$ instead of the larger square's share; treating the $3$ to $1$ side ratio as the area ratio and taking three-fourths of the total, which gives $1147.5$; reporting the smaller square's $153$ watts.\n\n**Test Day Takeaway:** Squaring the side ratio gives the area ratio, so a side ratio of $3$ to $1$ splits the area $9$ to $1$. Recover the side first, then apply the intensity to the piece the question names.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "rate-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-ps-459",
    domain: "problem-solving",
    skills: ["successive-percent-change"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In $2021$, a laboratory spent $16\\%$ more on reagents than it spent in $2020$, and in $2022$ it spent $5\\%$ more on reagents than it spent in $2021$. If the laboratory's $2022$ spending on reagents was $k$ times its $2020$ spending, what is the value of $k$?",
    choices: [
      // distractor: reports the total percent change as a decimal instead of the multiplier.
      { id: "A", text: "$0.2180$" },
      // distractor: adds the two percents rather than multiplying the factors.
      { id: "B", text: "$1.2100$" },
      { id: "C", text: "$1.2180$" },
      // distractor: adds the two growth factors instead of multiplying them.
      { id: "D", text: "$2.2100$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Successive Percent Change**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Each increase becomes a factor: $1.16$ then $1.05$. Their product is $1.16\\times 1.05=1.2180$.\n\n**The Full Solution:**\nStep 1: Let $S$ be the $2020$ spending. A $16\\%$ increase makes the $2021$ spending $1.16S$.\nStep 2: A further $5\\%$ increase makes the $2022$ spending $1.05(1.16S)=1.2180S$.\nStep 3: Since the $2022$ spending is $k$ times the $2020$ spending, $k=1.2180$. Check: starting from $100$, the values are $116$ and then $121.80$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.2180$): reports the $21.8\\%$ total change as a decimal; a multiplier for growth must exceed $1$.\n* Choice B ($1.2100$): adds $16\\%$ and $5\\%$ to get $21\\%$, ignoring that the second increase applies to the already larger $2021$ amount.\n* Choice D ($2.2100$): adds the factors $1.16$ and $1.05$ instead of multiplying them.\n\n**Test Day Takeaway:** Successive percent changes multiply their factors. The compounded result always beats the sum of the percents, but only slightly.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "successive-percent-application",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-ps-460",
    domain: "problem-solving",
    skills: ["squared-cubed-units", "unit-conversion"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The speed of a train is increasing at a constant rate of $2.4$ meters per second squared. What is this rate, in kilometers per minute squared? (Use $1$ kilometer $=1{,}000$ meters and $1$ minute $=60$ seconds.)",
    choices: [
      // distractor: converts meters to kilometers but leaves the time in seconds squared.
      { id: "A", text: "$0.0024$" },
      // distractor: applies the $60$-seconds-per-minute factor once instead of squaring it.
      { id: "B", text: "$0.144$" },
      { id: "C", text: "$8.64$" },
      // distractor: squares the time factor but never converts meters to kilometers.
      { id: "D", text: "$8{,}640$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Chained Unit Conversion — Squared Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Divide once by $1{,}000$ for meters to kilometers and multiply by $60^2$ because the time unit is squared: $\\frac{2.4\\times 3{,}600}{1{,}000}=8.64$.\n\n**The Full Solution:**\nStep 1: Start from $2.4\\,\\frac{\\text{m}}{\\text{s}^2}$ and multiply by conversion factors that cancel the unwanted units.\nStep 2: Meters to kilometers: $\\times\\frac{1\\text{ km}}{1{,}000\\text{ m}}$.\nStep 3: Seconds to minutes, squared: since $1$ minute $=60$ seconds, $\\frac{1}{\\text{s}^2}=\\frac{60^2}{\\text{min}^2}=\\frac{3{,}600}{\\text{min}^2}$.\nStep 4: Combine: $\\frac{2.4\\times 3{,}600}{1{,}000}=\\frac{8{,}640}{1{,}000}=8.64$ kilometers per minute squared. Check: $8.64$ km/min$^2$ is $8{,}640$ m/min$^2$, and dividing by $3{,}600$ returns $2.4$ m/s$^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.0024$): converts the length unit only and leaves the rate per second squared.\n* Choice B ($0.144$): multiplies by $60$ once, treating the squared time unit as if it were linear.\n* Choice D ($8{,}640$): squares the time conversion correctly but reports meters per minute squared.\n\n**Test Day Takeaway:** A squared unit takes its conversion factor squared. Per second squared needs the seconds-to-minutes factor applied twice.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "chained-unit-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-ps-461",
    domain: "problem-solving",
    skills: ["percent-decimal-conversion", "percent-change"],
    difficulty: "hard",
    type: "fill-in",
    question: "The number $p$ is $140\\%$ greater than the number $q$. The number $q$ is $75\\%$ less than $96$. What is the value of $p$?",
    correctAnswer: "57.6",
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**The correct answer is $57.6$.**\n\n**The Fast Way (~25s):** $75\\%$ less than $96$ leaves $25\\%$: $q=96(0.25)=24$. Then $140\\%$ greater means $\\times 2.40$, so $p=2.40(24)=57.6$.\n\n**The Full Solution:**\nStep 1: \"$q$ is $75\\%$ less than $96$\" means $q=96(1-0.75)=96(0.25)$.\nStep 2: $q=24$.\nStep 3: \"$p$ is $140\\%$ greater than $q$\" means $p=q(1+1.40)=2.40q=2.40(24)=57.6$. Check: $57.6-24=33.6$, and $\\frac{33.6}{24}=1.40$, an increase of $140\\%$. $\\checkmark$\n\n**Common Mistakes:** Reading \"$140\\%$ greater\" as a factor of $1.40$ gives $33.6$; reading \"$75\\%$ less\" as a factor of $0.75$ makes $q=72$ and $p=172.8$.\n\n**Test Day Takeaway:** \"Greater than\" is $1+r$ and \"less than\" is $1-r$, where $r$ is the percent written as a decimal. A percent above $100$ more than doubles the number.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "chained-percent-relationship",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-ps-462",
    domain: "problem-solving",
    skills: ["percent-change", "system-solution-types"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The table gives the results of a survey of $450$ residents of a county, selected at random, about a proposed transit levy. If $12{,}600$ residents vote on the levy, how many more residents would be expected to vote in favor of the levy than to vote against it?",
    diagram: { type: "dataTable", params: { headers: ["Response", "Number of residents"], rows: [["In favor", "261"], ["Opposed", "189"]] } },
    choices: [
      // distractor: reports the survey margin without scaling it to the full vote.
      { id: "A", text: "$72$" },
      { id: "B", text: "$2{,}016$" },
      // distractor: scales the number opposed instead of the margin.
      { id: "C", text: "$5{,}292$" },
      // distractor: scales the number in favor instead of the margin.
      { id: "D", text: "$7{,}308$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Poll Scaling — Margin of Victory (Variant)**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The full vote is $\\frac{12{,}600}{450}=28$ times the survey, and the survey margin is $261-189=72$, so the expected margin is $28(72)=2{,}016$.\n\n**The Full Solution:**\nStep 1: Find the scaling factor from the survey to the full vote: $\\frac{12{,}600}{450}=28$.\nStep 2: Read the margin from the table: $261-189=72$ residents.\nStep 3: Because the sample is random and representative, scale the margin by the same factor: $28(72)=2{,}016$. Check: $28(261)=7{,}308$ and $28(189)=5{,}292$, and $7{,}308-5{,}292=2{,}016$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($72$): reports the survey margin, forgetting that $12{,}600$ is far larger than $450$.\n* Choice C ($5{,}292$): scales the $189$ opposed and reports that projected count.\n* Choice D ($7{,}308$): scales the $261$ in favor and reports that projected count.\n\n**Test Day Takeaway:** Scale the difference, not the individual counts. The two approaches agree, but scaling the margin takes one multiplication.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "proportion-setup",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-ps-463",
    domain: "problem-solving",
    skills: ["conditional-probability", "two-way-table"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A laboratory tested $500$ soil samples and classified each sample by pH level and by the field from which it was taken, as shown in the table. If one of the samples from Field A is selected at random, which of the following is closest to the probability that the selected sample has a pH of at least $6.0$?",
    diagram: { type: "twoWayTable", params: { headers: ["pH level", "Field A", "Field B"], rows: [["Less than 6.0", "63", "52"], ["6.0 to 7.0", "96", "84"], ["Above 7.0", "51", "154"]] } },
    choices: [
      // distractor: divides by all $500$ samples, computing a joint probability instead of a conditional one.
      { id: "A", text: "$0.29$" },
      // distractor: gives the complement, the probability the Field A sample has a pH below $6.0$.
      { id: "B", text: "$0.30$" },
      // distractor: conditions on the pH category instead of on Field A.
      { id: "C", text: "$0.38$" },
      { id: "D", text: "$0.70$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Conditioning on Field A makes that column the denominator: $63+96+51=210$. A pH of at least $6.0$ covers the bottom two rows: $96+51=147$. $\\frac{147}{210}=0.70$.\n\n**The Full Solution:**\nStep 1: \"Selected from the samples from Field A\" fixes the denominator as the entire Field A column. The table lists no totals, so add them: $63+96+51=210$.\nStep 2: \"pH of at least $6.0$\" spans TWO rows, $6.0$ to $7.0$ and above $7.0$: $96+51=147$.\nStep 3: The conditional probability is $\\frac{147}{210}=\\frac{7}{10}=0.70$. Check: the remaining $63$ Field A samples give $\\frac{63}{210}=0.30$, and $0.70+0.30=1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.29$): computes $\\frac{147}{500}$, dividing by every sample rather than by the Field A samples.\n* Choice B ($0.30$): computes $\\frac{63}{210}$, the probability of a pH below $6.0$.\n* Choice C ($0.38$): computes $\\frac{147}{385}$, conditioning on pH at least $6.0$ and asking for Field A instead.\n\n**Test Day Takeaway:** The phrase after \"given\" or \"from the\" names the denominator. Sum that row or column yourself when the table omits totals.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "two-way-table-conditional",
    sourceRef: "pilot-m4-table-conditional",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-08-13"
  }
];
