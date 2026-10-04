export const problemSolvingBank = [
  // ── percent-decimal-conversion (easy) ──────────────────────────
  {
    id: "bank-ps-001",
    domain: "problem-solving",
    skills: ["percent-decimal-conversion"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Which of the following is equivalent to $0.072$?",
    choices: [
      // distractor: shifts the decimal point one place to the left, dividing by $10$ instead of multiplying by $100$.
      { id: "A", text: "$0.0072\\%$" },
      // distractor: attaches a percent sign to the decimal without multiplying by $100$.
      { id: "B", text: "$0.072\\%$" },
      // distractor: shifts the decimal point only one place to the right, multiplying by $10$ instead of $100$.
      { id: "C", text: "$0.72\\%$" },
      { id: "D", text: "$7.2\\%$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Decimal to Percent**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** Multiply by $100$, which shifts the decimal point two places to the right: $0.072 \\times 100 = 7.2$, so $0.072 = 7.2\\%$.\n\n**The Full Solution:**\nStep 1: A percent is a number of parts per $100$, so a decimal is written as a percent by multiplying it by $100$.\nStep 2: $0.072 \\times 100 = 7.2$, so $0.072$ is equivalent to $7.2\\%$.\nStep 3: Check by reversing: $7.2\\% = \\frac{7.2}{100} = 0.072$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.0072\\%$): shifts the decimal point one place to the left, dividing by $10$ instead of multiplying by $100$.\n* Choice B ($0.072\\%$): attaches a percent sign to the decimal without multiplying by $100$.\n* Choice C ($0.72\\%$): shifts the decimal point only one place to the right, multiplying by $10$ instead of $100$.\n\n**Test Day Takeaway:** Decimal to percent is a two-place shift to the right. A decimal near $0.07$ must land near $7\\%$, not $0.7\\%$ or $70\\%$.",
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
    question: "$4.75\\%$ of $x$ is equal to $kx$, where $k$ is a constant. What is the value of $k$?",
    choices: [
      // distractor: shifts the decimal point three places to the left, dividing $4.75$ by $1{,}000$ instead of by $100$.
      { id: "A", text: "$0.00475$" },
      { id: "B", text: "$0.0475$" },
      // distractor: shifts the decimal point only one place to the left, dividing $4.75$ by $10$.
      { id: "C", text: "$0.475$" },
      // distractor: drops the percent sign without dividing by $100$, treating $4.75\%$ of $x$ as $4.75x$.
      { id: "D", text: "$4.75$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent to Decimal**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $4.75\\%$ of $x$ is $\\frac{4.75}{100}x = 0.0475x$, so $k = 0.0475$.\n\n**The Full Solution:**\nStep 1: The percent sign means \"per $100$,\" so $4.75\\% = \\frac{4.75}{100}$.\nStep 2: Dividing by $100$ moves the decimal point two places to the left: $\\frac{4.75}{100} = 0.0475$. So $4.75\\%$ of $x$ is $0.0475x$, and $k = 0.0475$.\nStep 3: Check with $x = 200$: $4.75\\%$ of $200$ is $9.5$, and $0.0475(200) = 9.5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.00475$): shifts the decimal point three places to the left, dividing $4.75$ by $1{,}000$ instead of by $100$.\n* Choice C ($0.475$): shifts the decimal point only one place to the left, dividing $4.75$ by $10$.\n* Choice D ($4.75$): drops the percent sign without dividing by $100$, treating $4.75\\%$ of $x$ as $4.75x$.\n\n**Test Day Takeaway:** Percent to decimal is a two-place shift to the left. A percent under $5\\%$ must become a decimal under $0.05$.",
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
    question: "Of the seeds planted in a garden, $0.186$ sprouted within one week. What percent of the seeds sprouted within one week?",
    correctAnswer: "18.6",
    explanation: "**SAT Pattern: Decimal to Percent**\n\n**The correct answer is $18.6$.**\n\n**The Fast Way (~5s):** Multiply by $100$: $0.186 \\times 100 = 18.6$, so $18.6\\%$ of the seeds sprouted.\n\n**The Full Solution:**\nStep 1: A decimal is written as a percent by multiplying it by $100$, which moves the decimal point two places to the right.\nStep 2: $0.186 \\times 100 = 18.6$, so $18.6\\%$ of the seeds sprouted within one week.\nStep 3: Check: $18.6\\% = \\frac{18.6}{100} = 0.186$, the given decimal ✓\n\n**Common Mistakes:** Entering $1.86$ (moving the decimal point only one place); entering $0.186$ (not converting at all); entering $186$ (moving the decimal point three places).\n\n**Test Day Takeaway:** Shift the decimal point two places to the right and enter only the number: $0.186$ becomes $18.6$, with no percent sign in the answer box.",
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
    question: "$p\\%$ of $500$ is $2.1$. What is the value of $p$?",
    choices: [
      // distractor: computes the fraction $\frac{2.1}{500} = 0.0042$ but never converts it to a percent.
      { id: "A", text: "$0.0042$" },
      // distractor: converts $0.0042$ by multiplying by $10$ instead of $100$, moving the decimal point only one place.
      { id: "B", text: "$0.042$" },
      { id: "C", text: "$0.42$" },
      // distractor: converts $0.0042$ by multiplying by $1{,}000$, moving the decimal point three places instead of two.
      { id: "D", text: "$4.2$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Small-Value Decimal to Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $\\frac{p}{100}(500) = 2.1$ gives $5p = 2.1$, so $p = 0.42$.\n\n**The Full Solution:**\nStep 1: Write the statement as an equation: $\\frac{p}{100} \\cdot 500 = 2.1$, which simplifies to $5p = 2.1$.\nStep 2: Divide by $5$: $p = 0.42$. Equivalently, $\\frac{2.1}{500} = 0.0042$, and $0.0042 \\times 100 = 0.42$.\nStep 3: Check: $0.42\\%$ of $500$ is $0.0042 \\times 500 = 2.1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.0042$): computes the fraction $\\frac{2.1}{500} = 0.0042$ but never converts it to a percent.\n* Choice B ($0.042$): converts $0.0042$ by multiplying by $10$ instead of $100$, moving the decimal point only one place.\n* Choice D ($4.2$): converts $0.0042$ by multiplying by $1{,}000$, moving the decimal point three places instead of two.\n\n**Test Day Takeaway:** A tiny fraction becomes a percent less than $1$: $0.0042$ is $0.42\\%$. Write \"$p\\%$ of\" as $\\frac{p}{100} \\times$ and solve, rather than shifting decimal points by eye.",
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
    question: "What is $28\\%$ of $1{,}250$?",
    choices: [
      // distractor: uses $0.028$ for $28\%$, moving the decimal point three places instead of two.
      { id: "A", text: "$35$" },
      { id: "B", text: "$350$" },
      // distractor: finds $72\%$ of $1{,}250$, the part that remains after the $28\%$ is removed.
      { id: "C", text: "$900$" },
      // distractor: uses $2.8$ for $28\%$, moving the decimal point only one place.
      { id: "D", text: "$3{,}500$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent of Total**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $0.28 \\times 1{,}250 = 350$.\n\n**The Full Solution:**\nStep 1: Write $28\\%$ as a decimal: $28\\% = \\frac{28}{100} = 0.28$.\nStep 2: Multiply: $0.28 \\times 1{,}250 = 350$.\nStep 3: Check with benchmarks: $25\\%$ of $1{,}250$ is $312.5$ and $3\\%$ is $37.5$, and $312.5 + 37.5 = 350$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($35$): uses $0.028$ for $28\\%$, moving the decimal point three places instead of two.\n* Choice C ($900$): finds $72\\%$ of $1{,}250$, the part that remains after the $28\\%$ is removed.\n* Choice D ($3{,}500$): uses $2.8$ for $28\\%$, moving the decimal point only one place.\n\n**Test Day Takeaway:** \"$p\\%$ of a number\" means $\\frac{p}{100}$ times the number. Estimate first: $28\\%$ is a little more than a quarter, and a quarter of $1{,}250$ is about $312$.",
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
    question: "A sewing machine has a regular price of \\$640. During a sale, the regular price is reduced by $15\\%$. By how many dollars is the price reduced?",
    correctAnswer: "96",
    explanation: "**SAT Pattern: Discount Amount**\n\n**The correct answer is $96$.**\n\n**The Fast Way (~10s):** The reduction is $15\\%$ of $640$: $0.15 \\times 640 = 96$ dollars.\n\n**The Full Solution:**\nStep 1: The question asks for the amount of the reduction, not the sale price, so compute $15\\%$ of the regular price.\nStep 2: $0.15 \\times 640 = 96$.\nStep 3: Check with a benchmark: $10\\%$ of $640$ is $64$ and $5\\%$ is $32$, and $64 + 32 = 96$. ✓\n\n**Common Mistakes:** Entering $544$ (the sale price $640 - 96$, when the question asks for the reduction); entering $9.6$ (using $0.015$ instead of $0.15$); entering $625$ (subtracting $15$ dollars instead of $15$ percent).\n\n**Test Day Takeaway:** Read what the question asks for: the discount amount is $\\frac{p}{100} \\times \\text{price}$; the sale price is what remains after subtracting it.",
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
    question: "In a survey of $2{,}500$ households, $36\\%$ have a vegetable garden, and $15\\%$ of those households also keep bees. How many of the surveyed households have a garden and keep bees?",
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
    explanation: "**SAT Pattern: Compound Percent Of**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Take the percents in order: $0.36 \\times 2{,}500 = 900$ households have a garden, and $0.15 \\times 900 = 135$ of those keep bees.\n\n**The Full Solution:**\nStep 1: The second percent applies to the garden households only, not to all $2{,}500$. First find the garden households: $0.36 \\times 2{,}500 = 900$.\nStep 2: Then take $15\\%$ of that group: $0.15 \\times 900 = 135$.\nStep 3: Check with one combined factor: $0.36 \\times 0.15 = 0.054$, and $0.054 \\times 2{,}500 = 135$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($375$): takes $15\\%$ of all $2{,}500$ households instead of $15\\%$ of the $900$ garden households.\n* Choice C ($900$): stops after the first step and reports the number of households with a garden.\n* Choice D ($1{,}275$): adds the percents ($36\\% + 15\\% = 51\\%$) and takes $51\\%$ of $2{,}500$.\n\n**Test Day Takeaway:** \"Of those\" signals a percent of a subgroup. Multiply the percents as decimals, never add them.",
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
    question: "A pottery studio made $640$ pieces last month, and $37.5\\%$ of the pieces were glazed. If $40\\%$ of the glazed pieces were sold, how many of the glazed pieces were not sold?",
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
    explanation: "**SAT Pattern: Filter then Subtract**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Glazed pieces: $0.375 \\times 640 = 240$. The $60\\%$ not sold: $0.60 \\times 240 = 144$.\n\n**The Full Solution:**\nStep 1: Filter to the glazed pieces: $0.375 \\times 640 = 240$.\nStep 2: Of these, $40\\%$ were sold, so $0.40 \\times 240 = 96$ were sold and $240 - 96 = 144$ were not.\nStep 3: Check: the unsold share is $100\\% - 40\\% = 60\\%$, and $0.60 \\times 240 = 144$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($96$): reports the number of glazed pieces that were sold rather than the number that were not sold.\n* Choice C ($240$): stops at the number of glazed pieces and never applies the $40\\%$.\n* Choice D ($384$): applies the $60\\%$ unsold share to all $640$ pieces instead of to the $240$ glazed pieces.\n\n**Test Day Takeaway:** Filter first, then subtract (or use the complement percent) within the filtered group. Reread the last sentence to see which group and which share the question wants.",
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
    question: "$400$ is $p\\%$ greater than $250$. What is the value of $p$?",
    choices: [
      // distractor: divides the increase, $150$, by $400$ instead of by the original value, $250$.
      { id: "A", text: "$37.5$" },
      { id: "B", text: "$60$" },
      // distractor: reports the increase, $400 - 250 = 150$, rather than the increase as a percent of $250$.
      { id: "C", text: "$150$" },
      // distractor: computes $\frac{400}{250} = 1.6$, which shows $400$ is $160\%$ of $250$, not $160\%$ greater than $250$.
      { id: "D", text: "$160$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent Change Basic**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The increase is $400 - 250 = 150$, and $\\frac{150}{250} = 0.6$, so $p = 60$.\n\n**The Full Solution:**\nStep 1: Percent increase $= \\frac{\\text{new} - \\text{original}}{\\text{original}} \\times 100$, and the original value here is $250$.\nStep 2: The increase is $400 - 250 = 150$, and $\\frac{150}{250} \\times 100 = 60$, so $p = 60$.\nStep 3: Check: $60\\%$ of $250$ is $150$, and $250 + 150 = 400$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($37.5$): divides the increase, $150$, by $400$ instead of by the original value, $250$.\n* Choice C ($150$): reports the increase, $400 - 250 = 150$, rather than the increase as a percent of $250$.\n* Choice D ($160$): computes $\\frac{400}{250} = 1.6$, which shows $400$ is $160\\%$ of $250$, not $160\\%$ greater than $250$.\n\n**Test Day Takeaway:** \"Greater than $250$\" puts $250$ in the denominator. A ratio of $1.6$ means $60\\%$ greater, not $160\\%$ greater.",
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
    question: "The mass of a block of ice decreased from $750$ grams to $620$ grams. To the nearest whole number, what is the percent decrease in the mass of the block?",
    correctAnswer: "17",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**The correct answer is $17$.**\n\n**The Fast Way (~15s):** The decrease is $750 - 620 = 130$ grams, and $\\frac{130}{750} \\approx 0.173$, so the mass decreased by about $17\\%$.\n\n**The Full Solution:**\nStep 1: Percent decrease $= \\frac{\\text{original} - \\text{new}}{\\text{original}} \\times 100$, with the original mass $750$ grams.\nStep 2: The decrease is $750 - 620 = 130$ grams, so the percent decrease is $\\frac{130}{750} \\times 100 \\approx 17.33$.\nStep 3: To the nearest whole number, the percent decrease is $17$. Check: $17.33\\%$ of $750$ is about $130$, and $750 - 130 = 620$ ✓\n\n**Common Mistakes:** Entering $21$ (dividing the decrease by the new mass, $\\frac{130}{620} \\approx 0.21$); entering $83$ (computing $\\frac{620}{750}$, the percent of the mass that remains); entering $130$ (the decrease in grams, not as a percent).\n\n**Test Day Takeaway:** Percent change always divides by the starting value. Find the change, divide by the original, then round only at the end.",
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
    question: "The table shows the number of members of a credit union at the end of 2021 and at the end of 2022. By what percent did the number of members decrease from the end of 2021 to the end of 2022?",
    questionTable: { headers: ["Year", "Members"], rows: [["2021", "14,400"], ["2022", "12,600"]] },
    choices: [
      // distractor: converts the decimal $0.125$ to a percent by moving the decimal point only one place.
      { id: "A", text: "$1.25\\%$" },
      { id: "B", text: "$12.5\\%$" },
      // distractor: divides the decrease by the 2022 count, $\frac{1{,}800}{12{,}600} \approx 0.143$, instead of by the original 2021 count.
      { id: "C", text: "$14.3\\%$" },
      // distractor: reports $\frac{12{,}600}{14{,}400}$, the percent of members that remained, not the percent decrease.
      { id: "D", text: "$87.5\\%$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The decrease is $14{,}400 - 12{,}600 = 1{,}800$ members, and $\\frac{1{,}800}{14{,}400} = 0.125$, so $12.5\\%$.\n\n**The Full Solution:**\nStep 1: Percent decrease $= \\frac{\\text{original} - \\text{new}}{\\text{original}} \\times 100\\%$, with the 2021 count as the original.\nStep 2: The decrease is $14{,}400 - 12{,}600 = 1{,}800$, so the percent decrease is $\\frac{1{,}800}{14{,}400} = \\frac{1}{8} = 0.125$, or $12.5\\%$.\nStep 3: Check: $12.5\\%$ of $14{,}400$ is $\\frac{14{,}400}{8} = 1{,}800$, and $14{,}400 - 1{,}800 = 12{,}600$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.25\\%$): converts the decimal $0.125$ to a percent by moving the decimal point only one place.\n* Choice C ($14.3\\%$): divides the decrease by the 2022 count, $\\frac{1{,}800}{12{,}600} \\approx 0.143$, instead of by the original 2021 count.\n* Choice D ($87.5\\%$): reports $\\frac{12{,}600}{14{,}400}$, the percent of members that remained, not the percent decrease.\n\n**Test Day Takeaway:** With a table, identify which row is the original (earlier) value before dividing. Percent decrease uses the earlier value as the denominator.",
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
    question: "$102$ is $15\\%$ less than $x$. What is the value of $x$?",
    choices: [
      // distractor: takes $15\%$ off $102$, computing $0.85 \times 102$, instead of finding the number that $102$ is $85\%$ of.
      { id: "A", text: "$86.7$" },
      // distractor: adds $15\%$ of $102$ to $102$, computing $1.15 \times 102$; the $15\%$ is a percent of $x$, not of $102$.
      { id: "B", text: "$117.3$" },
      { id: "C", text: "$120$" },
      // distractor: divides $102$ by $0.15$, treating $102$ as $15\%$ of $x$ instead of $85\%$ of $x$.
      { id: "D", text: "$680$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Reverse Percent Change**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $102 = 0.85x$, so $x = \\frac{102}{0.85} = 120$.\n\n**The Full Solution:**\nStep 1: \"$15\\%$ less than $x$\" means $x - 0.15x = 0.85x$, so $102 = 0.85x$.\nStep 2: Divide by $0.85$: $x = \\frac{102}{0.85} = 120$.\nStep 3: Check: $15\\%$ of $120$ is $18$, and $120 - 18 = 102$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($86.7$): takes $15\\%$ off $102$, computing $0.85 \\times 102$, instead of finding the number that $102$ is $85\\%$ of.\n* Choice B ($117.3$): adds $15\\%$ of $102$ to $102$, computing $1.15 \\times 102$; the $15\\%$ is a percent of $x$, not of $102$.\n* Choice D ($680$): divides $102$ by $0.15$, treating $102$ as $15\\%$ of $x$ instead of $85\\%$ of $x$.\n\n**Test Day Takeaway:** To undo a percent decrease, divide by the multiplier ($0.85$); never add the same percent back to the smaller number.",
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
    question: "A hiking club's membership increased by $40\\%$ from 2019 to 2022 and then by $15\\%$ from 2022 to 2024. The club had $2{,}500$ members in 2024. Which of the following is closest to the club's membership in 2019?",
    choices: [
      { id: "A", text: "$1{,}553$" },
      // distractor: adds the percents and divides by $1.55$; successive increases multiply, so the combined factor is $1.40 \times 1.15 = 1.61$.
      { id: "B", text: "$1{,}613$" },
      // distractor: undoes only the $40\%$ increase, computing $\frac{2{,}500}{1.40}$, and ignores the $15\%$ increase.
      { id: "C", text: "$1{,}786$" },
      // distractor: undoes only the $15\%$ increase, computing $\frac{2{,}500}{1.15}$, which estimates the 2022 membership.
      { id: "D", text: "$2{,}174$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Reverse Growth**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The two increases multiply the 2019 membership by $1.40 \\times 1.15 = 1.61$, so the 2019 membership was $\\frac{2{,}500}{1.61} \\approx 1{,}553$.\n\n**The Full Solution:**\nStep 1: Let $m$ be the number of members in 2019. A $40\\%$ increase multiplies by $1.40$ and a $15\\%$ increase multiplies by $1.15$, so $1.40 \\times 1.15 \\times m = 2{,}500$.\nStep 2: Since $1.40 \\times 1.15 = 1.61$, $m = \\frac{2{,}500}{1.61} \\approx 1{,}552.8$, which is closest to $1{,}553$.\nStep 3: Check forward: $1{,}553 \\times 1.40 \\approx 2{,}174$, and $2{,}174 \\times 1.15 \\approx 2{,}500$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($1{,}613$): adds the percents and divides by $1.55$; successive increases multiply, so the combined factor is $1.40 \\times 1.15 = 1.61$.\n* Choice C ($1{,}786$): undoes only the $40\\%$ increase, computing $\\frac{2{,}500}{1.40}$, and ignores the $15\\%$ increase.\n* Choice D ($2{,}174$): undoes only the $15\\%$ increase, computing $\\frac{2{,}500}{1.15}$, which estimates the 2022 membership.\n\n**Test Day Takeaway:** Successive percent increases multiply. To go backward, divide by the product of the growth factors, not by $1$ plus the sum of the percents.",
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
    question: "A rectangular garden measures $12$ meters by $8$ meters. The garden is enlarged to measure $15$ meters by $11$ meters, which increases its area by $p\\%$. To the nearest whole number, what is the value of $p$?",
    correctAnswer: "72",
    explanation: "**SAT Pattern: Percent Increase from Two Values**\n\n**The correct answer is $72$.**\n\n**The Fast Way (~30s):** The area goes from $12 \\times 8 = 96$ to $15 \\times 11 = 165$ square meters, an increase of $69$, and $\\frac{69}{96} = 0.71875$, so $p \\approx 72$.\n\n**The Full Solution:**\nStep 1: Find the two areas: originally $12 \\times 8 = 96$ square meters, and after the enlargement $15 \\times 11 = 165$ square meters.\nStep 2: The increase is $165 - 96 = 69$ square meters, so the percent increase is $\\frac{69}{96} \\times 100 = 71.875$.\nStep 3: To the nearest whole number, $p = 72$. Check: $72\\%$ of $96$ is about $69$, and $96 + 69 = 165$ ✓\n\n**Common Mistakes:** Entering $63$ (adding the percent increases of the two sides, $25\\% + 37.5\\%$; area changes by the product of the side factors, $1.25 \\times 1.375 \\approx 1.72$); entering $42$ (dividing the increase by the new area, $\\frac{69}{165}$); entering $30$ (using the perimeters, $40$ and $52$, instead of the areas); entering $172$ (reporting the new area as a percent of the old one).\n\n**Test Day Takeaway:** Compute the two values the question is about (here, areas) before taking the percent change, and always divide by the original value.",
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
    question: "An orchard has $460$ trees, and $35\\%$ of them are apple trees. How many of the trees are not apple trees?",
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
    explanation: "**SAT Pattern: Complement Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The trees that are not apple trees make up $100\\% - 35\\% = 65\\%$, and $0.65 \\times 460 = 299$.\n\n**The Full Solution:**\nStep 1: If $35\\%$ of the trees are apple trees, the remaining $100\\% - 35\\% = 65\\%$ are not.\nStep 2: $0.65 \\times 460 = 299$.\nStep 3: Check: the apple trees number $0.35 \\times 460 = 161$, and $161 + 299 = 460$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($65$): reports the complement percent itself instead of applying it to the $460$ trees.\n* Choice B ($161$): finds the number of apple trees, the group the question excludes.\n* Choice D ($425$): subtracts $35$ trees instead of $35\\%$ of the trees.\n\n**Test Day Takeaway:** \"Not\" flips to the complement: use $100\\% - p\\%$ before multiplying, or subtract the part from the whole.",
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
    question: "A store buys a helmet for \\$40 and sets its regular price $75\\%$ above this cost. During a sale, the regular price is reduced by $20\\%$. What is the sale price, in dollars, of the helmet?",
    choices: [
      // distractor: finds the amount of the discount, $20\%$ of the \$70 regular price, instead of the sale price.
      { id: "A", text: "$14$" },
      { id: "B", text: "$56$" },
      // distractor: nets the percents to $+55\%$ and applies $1.55$ to the cost; the $20\%$ is taken off the larger regular price, not the cost.
      { id: "C", text: "$62$" },
      // distractor: stops at the regular price and never applies the sale discount.
      { id: "D", text: "$70$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Markup Then Discount**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Regular price: $40 \\times 1.75 = 70$. Sale price: $70 \\times 0.80 = 56$.\n\n**The Full Solution:**\nStep 1: A $75\\%$ markup multiplies the cost by $1.75$: regular price $= 40 \\times 1.75 = 70$ dollars.\nStep 2: A $20\\%$ reduction multiplies by $0.80$: sale price $= 70 \\times 0.80 = 56$ dollars.\nStep 3: Check with one combined factor: $1.75 \\times 0.80 = 1.40$, and $40 \\times 1.40 = 56$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): finds the amount of the discount, $0.20 \\times 70 = 14$, instead of the sale price.\n* Choice C ($62$): nets the percents to $+55\\%$ and applies $1.55$ to the cost; the $20\\%$ is taken off the larger regular price, not the cost.\n* Choice D ($70$): stops at the regular price and never applies the sale discount.\n\n**Test Day Takeaway:** Chain percent changes as multipliers in order: $\\times 1.75$ then $\\times 0.80$. Percents that apply to different bases cannot be added or subtracted.",
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
    question: "Of the $240$ people who applied to a summer program, $75\\%$ were interviewed, and $35\\%$ of the people interviewed were offered a place in the program. How many of the applicants were offered a place in the program?",
    choices: [
      { id: "A", text: "$63$" },
      // distractor: takes $35\%$ of all $240$ applicants rather than of the $180$ who were interviewed.
      { id: "B", text: "$84$" },
      // distractor: finds the interviewed applicants who were not offered a place, $180 - 63$.
      { id: "C", text: "$117$" },
      // distractor: stops after the first filter and reports the number interviewed.
      { id: "D", text: "$180$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Compound Filter**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Interviewed: $0.75 \\times 240 = 180$. Offered: $0.35 \\times 180 = 63$.\n\n**The Full Solution:**\nStep 1: Apply the first filter to all applicants: $0.75 \\times 240 = 180$ were interviewed.\nStep 2: Apply the second filter to the interviewed group only: $0.35 \\times 180 = 63$ were offered a place.\nStep 3: Check: the combined fraction is $0.75 \\times 0.35 = 0.2625$, and $0.2625 \\times 240 = 63$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($84$): takes $35\\%$ of all $240$ applicants rather than of the $180$ who were interviewed.\n* Choice C ($117$): finds the interviewed applicants who were not offered a place, $180 - 63$.\n* Choice D ($180$): stops after the first filter and reports the number interviewed.\n\n**Test Day Takeaway:** Each \"of those\" narrows the base. Apply the percents in sequence, each to the group the previous step produced.",
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
    question: "A school received a grant of \\$18,000. The school spent $35\\%$ of the grant on equipment, then $20\\%$ of the remaining amount on training, and then $25\\%$ of what remained after that on travel. How many dollars of the grant were left after these three expenses?",
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
    explanation: "**SAT Pattern: Sequential Spending Percent**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Keep the fraction that remains at each stage: $18{,}000 \\times 0.65 \\times 0.80 \\times 0.75 = 7{,}020$.\n\n**The Full Solution:**\nStep 1: After equipment, $100\\% - 35\\% = 65\\%$ remains: $0.65 \\times 18{,}000 = 11{,}700$.\nStep 2: Training takes $20\\%$ of that remainder, leaving $80\\%$: $0.80 \\times 11{,}700 = 9{,}360$. Travel takes $25\\%$ of the new remainder, leaving $75\\%$: $0.75 \\times 9{,}360 = 7{,}020$.\nStep 3: Check by adding the expenses: $6{,}300 + 2{,}340 + 2{,}340 = 10{,}980$, and $18{,}000 - 10{,}980 = 7{,}020$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3{,}600$): adds the percents ($35 + 20 + 25 = 80\\%$) and takes them all from the original grant, leaving $20\\%$ of $18{,}000$; the later percents apply to smaller remainders.\n* Choice C ($9{,}360$): stops after the second expense and omits the travel spending.\n* Choice D ($11{,}700$): stops after the first expense and omits both later expenses.\n\n**Test Day Takeaway:** \"Of the remaining amount\" means each percent uses a new, smaller base. Multiply the remaining fractions; never add the percents.",
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
    question: "The water level in a reservoir was $45$ feet. The level increased by $20\\%$ and then decreased by $20\\%$, ending at $w$ feet. What is the value of $w$?",
    choices: [
      // distractor: applies the $20\%$ decrease to the original $45$ feet instead of to the increased level of $54$ feet.
      { id: "A", text: "$36$" },
      { id: "B", text: "$43.2$" },
      // distractor: assumes a $20\%$ increase and a $20\%$ decrease cancel; they do not, because the decrease is taken from a larger value.
      { id: "C", text: "$45$" },
      // distractor: stops after the increase and never applies the decrease.
      { id: "D", text: "$54$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Successive Percent Round Trip**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $45 \\times 1.20 = 54$ after the increase, and $54 \\times 0.80 = 43.2$ after the decrease, so $w = 43.2$.\n\n**The Full Solution:**\nStep 1: A $20\\%$ increase multiplies by $1.20$: $45 \\times 1.20 = 54$ feet.\nStep 2: A $20\\%$ decrease multiplies the new level by $0.80$: $54 \\times 0.80 = 43.2$ feet, so $w = 43.2$.\nStep 3: Check with the combined factor: $1.20 \\times 0.80 = 0.96$, and $45 \\times 0.96 = 43.2$, a net decrease of $4\\%$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($36$): applies the $20\\%$ decrease to the original $45$ feet instead of to the increased level of $54$ feet.\n* Choice C ($45$): assumes a $20\\%$ increase and a $20\\%$ decrease cancel; they do not, because the decrease is taken from a larger value.\n* Choice D ($54$): stops after the increase and never applies the decrease.\n\n**Test Day Takeaway:** Up $p\\%$ then down $p\\%$ never returns to the start: the combined factor is $(1 + r)(1 - r) = 1 - r^2$, which is always less than $1$.",
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
    question: "An account was opened with \\$8,000. Its value increased by $12\\%$ during the first year and by $5\\%$ during the second year. What was its value, in dollars, at the end of the second year?",
    correctAnswer: "9408",
    explanation: "**SAT Pattern: Successive Percent Growth**\n\n**The correct answer is $9408$.**\n\n**The Fast Way (~15s):** Multiply by each growth factor in turn: $8{,}000 \\times 1.12 = 8{,}960$, then $8{,}960 \\times 1.05 = 9{,}408$.\n\n**The Full Solution:**\nStep 1: A $12\\%$ increase multiplies by $1.12$: $8{,}000 \\times 1.12 = 8{,}960$ dollars after the first year.\nStep 2: The $5\\%$ increase applies to the new value: $8{,}960 \\times 1.05 = 9{,}408$ dollars after the second year.\nStep 3: Check with one combined factor: $1.12 \\times 1.05 = 1.176$, and $8{,}000 \\times 1.176 = 9{,}408$. ✓\n\n**Common Mistakes:** Entering $9{,}360$ (adding the percents to get $17\\%$ and computing $8{,}000 \\times 1.17$; the second increase acts on $8{,}960$, not $8{,}000$); entering $8{,}960$ (stopping after the first year); entering $448$ (reporting only the second-year gain, $0.05 \\times 8{,}960$).\n\n**Test Day Takeaway:** Successive percent increases multiply: $(1.12)(1.05) = 1.176$, a $17.6\\%$ total gain, not $17\\%$.",
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
    question: "The value of a machine decreases by $12\\%$ every $3$ years. The machine is worth \\$45,000 today. The function $V$ gives the value, in dollars, of the machine $t$ years from today. Which equation defines $V$?",
    choices: [
      // distractor: uses the rate of decrease, $0.12$, as the base instead of the fraction of the value that remains, $0.88$.
      { id: "A", text: "$V(t) = 45{,}000(0.12)^{\\frac{t}{3}}$" },
      // distractor: uses the exponent $3t$, which applies the $12\%$ decrease three times a year instead of once every three years.
      { id: "B", text: "$V(t) = 45{,}000(0.88)^{3t}$" },
      // distractor: uses a growth factor of $1.12$, which makes the value increase instead of decrease.
      { id: "C", text: "$V(t) = 45{,}000(1.12)^{\\frac{t}{3}}$" },
      { id: "D", text: "$V(t) = 45{,}000(0.88)^{\\frac{t}{3}}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Exponential Depreciation Expression**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Each $3$-year period multiplies the value by $1 - 0.12 = 0.88$, and $t$ years contain $\\frac{t}{3}$ such periods, so $V(t) = 45{,}000(0.88)^{\\frac{t}{3}}$.\n\n**The Full Solution:**\nStep 1: A $12\\%$ decrease leaves $88\\%$ of the value, so the factor for each period is $0.88$.\nStep 2: Each period is $3$ years long, so $t$ years contain $\\frac{t}{3}$ periods and the exponent is $\\frac{t}{3}$. With the initial value $45{,}000$, $V(t) = 45{,}000(0.88)^{\\frac{t}{3}}$.\nStep 3: Check: $V(3) = 45{,}000(0.88)^{1} = 39{,}600$, exactly one $12\\%$ decrease after $3$ years ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($V(t) = 45{,}000(0.12)^{\\frac{t}{3}}$): uses the rate of decrease, $0.12$, as the base instead of the fraction of the value that remains, $0.88$.\n* Choice B ($V(t) = 45{,}000(0.88)^{3t}$): uses the exponent $3t$, which applies the $12\\%$ decrease three times a year instead of once every three years.\n* Choice C ($V(t) = 45{,}000(1.12)^{\\frac{t}{3}}$): uses a growth factor of $1.12$, which makes the value increase instead of decrease.\n\n**Test Day Takeaway:** Exponential change is (initial value)(factor)$^{\\text{number of periods}}$. When one period is $k$ years, the exponent is $\\frac{t}{k}$; test the equation at $t = k$.",
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
    question: "$y$ is $60\\%$ greater than $x$, and $z$ is $35\\%$ less than $y$, where $x > 0$. The value of $z$ is $p\\%$ greater than the value of $x$. What is the value of $p$?",
    choices: [
      { id: "A", text: "$4$" },
      // distractor: subtracts the percents, $60 - 35$; the $35\%$ decrease is taken from $y$, which is larger than $x$, so it removes more than $35\%$ of $x$.
      { id: "B", text: "$25$" },
      // distractor: multiplies $0.60$ by $0.65$, applying the decrease only to the $60\%$ increase instead of to all of $y = 1.60x$.
      { id: "C", text: "$39$" },
      // distractor: finds $z = 1.04x$ and reports $z$ as a percent of $x$ instead of the percent by which $z$ is greater than $x$.
      { id: "D", text: "$104$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Net Effect of Successive Percent Changes**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $z = 0.65(1.60x) = 1.04x$, so $z$ is $4\\%$ greater than $x$ and $p = 4$.\n\n**The Full Solution:**\nStep 1: \"$60\\%$ greater than $x$\" gives $y = 1.60x$, and \"$35\\%$ less than $y$\" gives $z = 0.65y$.\nStep 2: Substitute: $z = 0.65(1.60x) = 1.04x$. A multiplier of $1.04$ means $z$ is $4\\%$ greater than $x$, so $p = 4$.\nStep 3: Check with $x = 100$: $y = 160$, $z = 160 - 56 = 104$, which is $4\\%$ greater than $100$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($25$): subtracts the percents, $60 - 35$; the $35\\%$ decrease is taken from $y$, which is larger than $x$, so it removes more than $35\\%$ of $x$.\n* Choice C ($39$): multiplies $0.60$ by $0.65$, applying the decrease only to the $60\\%$ increase instead of to all of $y = 1.60x$.\n* Choice D ($104$): finds $z = 1.04x$ and reports $z$ as a percent of $x$ instead of the percent by which $z$ is greater than $x$.\n\n**Test Day Takeaway:** Multiply the factors, then subtract $1$: $(1.60)(0.65) - 1 = 0.04$. Percents applied to different bases never simply add or subtract.",
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
    explanation: "**SAT Pattern: Basic Mean**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Read the dots: $2, 3, 3, 4, 4, 4, 5, 6, 6, 8$. The sum is $45$, and $\\frac{45}{10} = 4.5$.\n\n**The Full Solution:**\nStep 1: Each dot is one tray. Listing the values: $2, 3, 3, 4, 4, 4, 5, 6, 6, 8$, a total of $10$ trays.\nStep 2: Sum $= 2 + 6 + 12 + 5 + 12 + 8 = 45$.\nStep 3: Mean $= \\frac{45}{10} = 4.5$. Check: the distances from $4.5$ below it ($2.5 + 1.5 + 1.5 + 0.5 + 0.5 + 0.5 = 7$) balance the distances above it ($0.5 + 1.5 + 1.5 + 3.5 = 7$) ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): reports the mode (the tallest stack) or the median, not the mean.\n* Choice C ($6$): reports the range, $8 - 2$.\n* Choice D ($7.5$): divides the sum by $6$, the number of distinct values on the axis, instead of by the $10$ dots.\n\n**Test Day Takeaway:** On a dot plot, count every dot in the total and in the divisor: repeated values count each time they appear.",
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
    question: "The dot plot shows the daily rainfall, in millimeters, at a weather station on each of $7$ days. To the nearest whole number, what is the mean daily rainfall, in millimeters, for these $7$ days?",
    diagram: { type: "dotPlot", params: { data: [{ value: 12, count: 1 }, { value: 13, count: 2 }, { value: 14, count: 1 }, { value: 16, count: 1 }, { value: 19, count: 1 }, { value: 21, count: 1 }], xMin: 10, xMax: 22, xLabel: "Rainfall (mm)" } },
    correctAnswer: "15",
    explanation: "**SAT Pattern: Mean with Rounding**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~20s):** The $7$ values are $12, 13, 13, 14, 16, 19, 21$, with sum $108$, and $\\frac{108}{7} \\approx 15.43$, which rounds to $15$.\n\n**The Full Solution:**\nStep 1: Each dot is one day. Reading the plot gives the $7$ values $12, 13, 13, 14, 16, 19, 21$.\nStep 2: The sum is $12 + 26 + 14 + 16 + 19 + 21 = 108$, so the mean is $\\frac{108}{7} \\approx 15.43$.\nStep 3: To the nearest whole number, the mean is $15$. Check: $15.43$ lies between the least value, $12$, and the greatest value, $21$, and $7 \\times 15.43 \\approx 108$ ✓\n\n**Common Mistakes:** Entering $14$ (the median, the middle of the $7$ values); entering $13$ (the mode, the tallest stack); entering $18$ (dividing $108$ by the $6$ distinct values instead of the $7$ dots); entering $9$ (the range, $21 - 12$).\n\n**Test Day Takeaway:** On a dot plot, every dot is a data value: count repeated values each time they appear, in the sum and in the divisor.",
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
    question: "$52, 57, 60, 63, 68$\nWhen a number $x$ is added to the data set shown, the mean increases by $3$. What is the value of $x$?",
    choices: [
      // distractor: multiplies the new mean by $5$ instead of $6$, computing $5(63) - 300 = 15$; the new data set has $6$ values.
      { id: "A", text: "$15$" },
      // distractor: reports the new mean, $60 + 3$, as the added number.
      { id: "B", text: "$63$" },
      // distractor: adds $3$ for each of the $5$ original values, $60 + 5(3)$, forgetting that $x$ must also raise its own share of the mean.
      { id: "C", text: "$75$" },
      { id: "D", text: "$78$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Missing Value from Mean Shift**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The original sum is $300$, so the mean is $60$; the new mean is $63$, so the new sum is $6 \\times 63 = 378$ and $x = 378 - 300 = 78$.\n\n**The Full Solution:**\nStep 1: The data set shown has $5$ values with sum $52 + 57 + 60 + 63 + 68 = 300$, so its mean is $\\frac{300}{5} = 60$.\nStep 2: After $x$ is added, there are $6$ values with mean $60 + 3 = 63$, so their sum is $6 \\times 63 = 378$.\nStep 3: So $x = 378 - 300 = 78$. Check: $\\frac{300 + 78}{6} = \\frac{378}{6} = 63$, which is $3$ more than $60$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): multiplies the new mean by $5$ instead of $6$, computing $5(63) - 300 = 15$; the new data set has $6$ values.\n* Choice B ($63$): reports the new mean, $60 + 3$, as the added number.\n* Choice C ($75$): adds $3$ for each of the $5$ original values, $60 + 5(3)$, forgetting that $x$ must also raise its own share of the mean.\n\n**Test Day Takeaway:** Work with sums, not means: (new count)(new mean) $-$ (old sum) gives the added value. Remember that the count goes up by one.",
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
    question: "The table shows a swimmer's times, in seconds, for the first $4$ trials of an event. The swimmer wants the mean time for all $5$ trials to be at most $31.8$ seconds. What is the greatest possible time, in seconds, for the fifth trial?",
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
    explanation: "**SAT Pattern: Constraint on Mean**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Five trials at a mean of $31.8$ allow a total of $5 \\times 31.8 = 159$ seconds. The first four total $128.1$, so the fifth can be at most $159 - 128.1 = 30.9$.\n\n**The Full Solution:**\nStep 1: A mean of at most $31.8$ over $5$ trials means the total is at most $5 \\times 31.8 = 159$ seconds.\nStep 2: The first four trials total $32.1 + 31.7 + 32.4 + 31.9 = 128.1$ seconds.\nStep 3: The fifth time $x$ must satisfy $128.1 + x \\le 159$, so $x \\le 30.9$. Check: $\\frac{128.1 + 30.9}{5} = \\frac{159}{5} = 31.8$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($31.6$): subtracts the current shortfall ($32.025 - 31.8 = 0.225$) from the target only once, giving about $31.6$, instead of making up the shortfall for all four earlier trials.\n* Choice C ($31.8$): assumes the fifth trial only needs to equal the target mean; since the first four average above $31.8$, the fifth must be faster than $31.8$.\n* Choice D ($32.0$): reports the current mean of the four trials, rounded, rather than solving for the fifth trial.\n\n**Test Day Takeaway:** Turn a target mean into a target total: (target mean)(count). Subtract what is already banked to bound the remaining value.",
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
    question: "On a quiz, the mean score of the $15$ students in one class was $42$ points, and the mean score of the $25$ students in another class was $m$ points. The mean score of all $40$ students was $48$ points. What is the value of $m$?",
    choices: [
      // distractor: divides the second class's total, $1{,}290$, by all $40$ students instead of by the $25$ students in that class.
      { id: "A", text: "$32.25$" },
      { id: "B", text: "$51.6$" },
      // distractor: treats the classes as equal in size and solves $\frac{42 + m}{2} = 48$; the overall mean is weighted by the class sizes.
      { id: "C", text: "$54$" },
      // distractor: swaps the class sizes, using $25$ students for the first class and $15$ for the second.
      { id: "D", text: "$58$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Weighted Combined Mean**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** All $40$ scores total $40 \\times 48 = 1{,}920$ points and the first class's total $15 \\times 42 = 630$ points, so $m = \\frac{1{,}920 - 630}{25} = 51.6$.\n\n**The Full Solution:**\nStep 1: Convert each mean to a total. All $40$ students: $40 \\times 48 = 1{,}920$ points. First class: $15 \\times 42 = 630$ points.\nStep 2: The second class scored $1{,}920 - 630 = 1{,}290$ points in all, so $m = \\frac{1{,}290}{25} = 51.6$.\nStep 3: Check: $\\frac{15(42) + 25(51.6)}{40} = \\frac{630 + 1{,}290}{40} = \\frac{1{,}920}{40} = 48$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($32.25$): divides the second class's total, $1{,}290$, by all $40$ students instead of by the $25$ students in that class.\n* Choice C ($54$): treats the classes as equal in size and solves $\\frac{42 + m}{2} = 48$; the overall mean is weighted by the class sizes.\n* Choice D ($58$): swaps the class sizes, using $25$ students for the first class and $15$ for the second.\n\n**Test Day Takeaway:** A combined mean is a weighted mean. Work in totals: (combined total) $-$ (known total) $=$ (unknown total), then divide by the unknown group's own count.",
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
    question: "The table shows the weight of each category in a student's course grade and the student's score in each category. The course grade is the weighted mean of the three scores. What is the student's course grade?",
    questionTable: { headers: ["Category", "Weight", "Score"], rows: [["Tests", "45%", "82"], ["Homework", "35%", "90"], ["Project", "20%", "75"]] },
    choices: [
      // distractor: omits the project category, adding only $36.9 + 31.5$.
      { id: "A", text: "$68.4$" },
      // distractor: takes the simple average $\frac{82 + 90 + 75}{3}$, ignoring the weights.
      { id: "B", text: "$82.3$" },
      { id: "C", text: "$83.4$" },
      // distractor: swaps the $45\%$ and $35\%$ weights, applying $0.45$ to the homework score and $0.35$ to the test score.
      { id: "D", text: "$84.2$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Weighted Average from Percentages**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Multiply each score by its weight and add: $0.45(82) + 0.35(90) + 0.20(75) = 36.9 + 31.5 + 15 = 83.4$.\n\n**The Full Solution:**\nStep 1: Convert the weights to decimals: $0.45$, $0.35$, $0.20$. They sum to $1$, so no further division is needed.\nStep 2: Weighted contributions: $0.45 \\times 82 = 36.9$; $0.35 \\times 90 = 31.5$; $0.20 \\times 75 = 15$.\nStep 3: Course grade $= 36.9 + 31.5 + 15 = 83.4$. Check: the result lies between the lowest score ($75$) and the highest ($90$), closest to the heavily weighted $82$ and $90$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($68.4$): omits the project category, adding only $36.9 + 31.5$.\n* Choice B ($82.3$): takes the simple average $\\frac{82 + 90 + 75}{3}$, ignoring the weights.\n* Choice D ($84.2$): swaps the $45\\%$ and $35\\%$ weights, applying $0.45$ to the homework score and $0.35$ to the test score.\n\n**Test Day Takeaway:** A weighted mean is $\\sum (\\text{weight} \\times \\text{score})$ when the weights sum to $100\\%$. Match each weight to its own row.",
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
    question: "A grocer mixes $5$ kilograms of almonds costing \\$9.60 per kilogram with $3$ kilograms of cashews costing \\$12.80 per kilogram. What is the cost per kilogram, in dollars, of the mixture?",
    correctAnswer: "10.8",
    explanation: "**SAT Pattern: Weighted Average Mixture**\n\n**The correct answer is $10.8$.**\n\n**The Fast Way (~20s):** Total cost $= 5(9.60) + 3(12.80) = 48 + 38.40 = 86.40$ dollars for $8$ kilograms, so $\\frac{86.40}{8} = 10.80$ dollars per kilogram.\n\n**The Full Solution:**\nStep 1: Cost per kilogram of the mixture $= \\frac{\\text{total cost}}{\\text{total mass}}$, a mean weighted by mass.\nStep 2: Total cost $= 5 \\times 9.60 + 3 \\times 12.80 = 48.00 + 38.40 = 86.40$ dollars; total mass $= 5 + 3 = 8$ kilograms.\nStep 3: $\\frac{86.40}{8} = 10.80$ dollars per kilogram. Check: the result is between $9.60$ and $12.80$ and closer to $9.60$, since almonds make up more of the mixture. ✓\n\n**Common Mistakes:** Entering $11.2$ (averaging the two prices, $\\frac{9.60 + 12.80}{2}$, without weighting by the $5$ and $3$ kilograms); entering $86.4$ (the total cost rather than the cost per kilogram); entering $43.2$ (dividing the total cost by $2$ ingredients instead of $8$ kilograms).\n\n**Test Day Takeaway:** Mixture price per unit $= \\frac{\\text{total cost}}{\\text{total amount}}$; the answer must fall between the two prices, nearer the larger share.",
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
    question: "The table shows the number of credits and the grade points a student earned in each of three courses. The student's grade point average for these courses, weighted by credits, is $3.32$. What is the value of $x$?",
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
    explanation: "**SAT Pattern: Weighted Average by Credits**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Total credits $= 10$, so total weighted points $= 10 \\times 3.32 = 33.2$. Biology and Statistics contribute $4(3.5) + 3(3.0) = 23$, so $3x = 10.2$ and $x = 3.4$.\n\n**The Full Solution:**\nStep 1: A credit-weighted GPA is $\\frac{\\sum(\\text{credits} \\times \\text{grade points})}{\\sum \\text{credits}}$. Total credits $= 4 + 3 + 3 = 10$.\nStep 2: Set up the equation: $\\frac{4(3.5) + 3x + 3(3.0)}{10} = 3.32$, so $14 + 3x + 9 = 33.2$ and $3x = 10.2$.\nStep 3: $x = 3.4$. Check: $\\frac{14 + 10.2 + 9}{10} = \\frac{33.2}{10} = 3.32$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2.55$): divides the missing $10.2$ weighted points by $4$ (Biology's credits) instead of by Chemistry's $3$ credits.\n* Choice B ($3.32$): assumes the unknown course simply equals the overall average; with unequal weights and unequal grades, it does not.\n* Choice D ($3.46$): ignores the credits and solves $\\frac{3.5 + x + 3.0}{3} = 3.32$, which treats all three courses as equally weighted.\n\n**Test Day Takeaway:** When the weighted mean is given and one value is missing, multiply the mean by the total weight to get the total, subtract the known contributions, and divide by the missing value's OWN weight.",
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
    question: "The dot plot shows the lengths, in centimeters, of $11$ fish. What is the median of the data shown?",
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
    question: "The dot plot shows the number of customers a kiosk served during each of $8$ one-hour periods. What is the median number of customers served per hour?",
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
    question: "A data set of $13$ values has a median of $62$. If the $3$ least values are removed from the data set, which of the following must be true about the median of the remaining $10$ values?",
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
    question: "The table shows how many matches a volleyball player served each number of aces, for $24$ matches in all. What is the median number of aces per match?",
    questionTable: { headers: ["Aces in a match", "Number of matches"], rows: [["0", "3"], ["1", "4"], ["2", "5"], ["3", "8"], ["4", "4"]] },
    choices: [
      // distractor: takes the middle row of the table, $2$, instead of the middle of the $24$ matches.
      { id: "A", text: "$2$" },
      // distractor: reports the mean number of aces, $\frac{54}{24} = 2.25$.
      { id: "B", text: "$2.25$" },
      { id: "C", text: "$2.5$" },
      // distractor: reports the mode, the ace count with the greatest frequency.
      { id: "D", text: "$3$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Median from Frequency Table**\n\n**Choice C is correct.** With $24$ matches, the median averages the $12$th and $13$th values in order, which are $2$ and $3$, giving $2.5$.\n\n**The Fast Way (~50s):** Running totals are $3$, $7$, $12$, $20$, $24$. The $12$th match has $2$ aces and the $13$th has $3$, so the median is $\\frac{2 + 3}{2} = 2.5$.\n\n**The Full Solution:**\n\nStep 1: Locate the middle. For $24$ ordered values, the median is the mean of the $12$th and $13$th values.\n\nStep 2: Build running totals from the frequency column: $3$ matches have $0$ aces (positions $1$ through $3$), $4$ have $1$ ace (positions $4$ through $7$), $5$ have $2$ aces (positions $8$ through $12$), and $8$ have $3$ aces (positions $13$ through $20$).\n\nStep 3: Read off the two middle positions. Position $12$ falls in the $2$-ace group and position $13$ falls in the $3$-ace group, so the median is $\\frac{2 + 3}{2} = 2.5$ aces. Check: $12$ matches recorded $2$ or fewer aces and $12$ recorded $3$ or more, so the median must lie between $2$ and $3$.\n\n**Why the wrong answers are tempting:**\n\n* Choice A ($2$): picks the middle row of the table. A frequency table lists categories, not the data values in order, so the middle row is not the middle match.\n* Choice B ($2.25$): computes the mean, $\\frac{0(3) + 1(4) + 2(5) + 3(8) + 4(4)}{24} = 2.25$, a different measure of center.\n* Choice D ($3$): reports the mode, the ace count that occurs most often.\n\n**Test Day Takeaway:** In a frequency table, run the counts until you pass the middle position: the median lives at a position, never at a row.",
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
    question: "A data set of $9$ values has a median of $40$. A tenth value, $w$, is added to the data set, and the median of the $10$ values is $43$. Which of the following must be true about $w$?",
    choices: [
      // distractor: assumes the added value equals the new median; a value of $43$ would give a median of $\frac{40 + 43}{2} = 41.5$.
      { id: "A", text: "It is equal to $43$." },
      // distractor: is possible but not necessary; the tenth value can be any number greater than $46$ if the original $6$th value is $46$.
      { id: "B", text: "It is equal to $46$." },
      { id: "C", text: "It is at least $46$." },
      // distractor: rules out values greater than $46$, which also work whenever the original $6$th value is $46$.
      { id: "D", text: "It is at most $46$." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Median Shift from Insertion**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Adding one value to $9$ makes the median the average of the $5$th and $6$th values. The $5$th is still $40$, so the $6$th must be $46$; the new value is either that $46$ or something even larger.\n\n**The Full Solution:**\nStep 1: In the original ordered list, the median is the $5$th value: $v_5 = 40$. With $10$ values, the median is the mean of the $5$th and $6$th values.\nStep 2: If the new value $w$ were less than $40$, the $5$th and $6$th values of the new list would be $v_4$ and $v_5$, both at most $40$, giving a median of at most $40$, not $43$. So $w \\ge 40$, and the new $5$th value stays $v_5 = 40$.\nStep 3: Then $\\frac{40 + (\\text{new 6th value})}{2} = 43$, so the new $6$th value is $46$. That $6$th value is the smaller of $w$ and $v_6$. Either $w = 46$ (with $v_6 \\ge 46$) or $v_6 = 46$ and $w > 46$. In every case $w \\ge 46$. Check: original $\\{30, 32, 35, 38, 40, 46, 50, 55, 60\\}$ with $w = 90$ gives new middle values $40$ and $46$, median $43$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (equal to $43$): assumes the added value equals the new median; a value of $43$ would give a median of $\\frac{40 + 43}{2} = 41.5$.\n* Choice B (equal to $46$): is possible but not necessary; the tenth value can be any number greater than $46$ if the original $6$th value is $46$.\n* Choice D (at most $46$): rules out values greater than $46$, which also work whenever the original $6$th value is $46$, as the $w = 90$ example shows.\n\n**Test Day Takeaway:** With an even count the median averages two middle values. Pin down the one that is known, solve for the other, and remember that the inserted value can be anything at or beyond that boundary.",
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
    question: "The bar graph shows the number of pairs of shoes of each size that a store sold on one day. What is the mode of the shoe sizes sold?",
    diagram: { type: "barChart", params: { data: [{ label: "6", value: 2 }, { label: "7", value: 8 }, { label: "8", value: 5 }, { label: "9", value: 7 }, { label: "10", value: 4 }, { label: "11", value: 3 }], xAxisLabel: "Shoe size", yAxisLabel: "Pairs sold", yMax: 10, yStep: 2 } },
    choices: [
      { id: "A", text: "$7$" },
      // distractor: reports the height of the tallest bar ($8$ pairs) instead of the size on the x-axis; $8$ is also the median size, not the mode.
      { id: "B", text: "$8$" },
      // distractor: picks the second-tallest bar ($7$ pairs).
      { id: "C", text: "$9$" },
      // distractor: reports the largest shoe size rather than the most frequently sold size.
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Mode of Shoe Sizes**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** The mode is the size with the tallest bar. The bar for size $7$ reaches $8$ pairs, the highest, so the mode is $7$.\n\n**The Full Solution:**\nStep 1: Each bar's height is the number of pairs sold of that size; the mode is the size sold most often, the tallest bar.\nStep 2: Bar heights: size $6$: $2$; size $7$: $8$; size $8$: $5$; size $9$: $7$; size $10$: $4$; size $11$: $3$.\nStep 3: The tallest bar is size $7$ with $8$ pairs, so the mode is $7$. Check: no other bar reaches $8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): reports the height of the tallest bar ($8$ pairs) instead of the size on the x-axis; $8$ is also the median size, not the mode.\n* Choice C ($9$): picks the second-tallest bar ($7$ pairs).\n* Choice D ($11$): reports the largest shoe size rather than the most frequently sold size.\n\n**Test Day Takeaway:** On a bar graph of counts, the mode is the CATEGORY under the tallest bar. Read the label on the x-axis, not the height.",
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
    question: "The dot plot shows the number of points a basketball player scored in each of $13$ games. How much greater is the mode of the data than the median of the data?",
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
    question: "The dot plot shows the masses, in kilograms, of $9$ packages. What is the range, in kilograms, of the masses?",
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
    question: "$14, 9, 21, 17, 12, t$\nThe range of the $6$ values shown is $15$. Which of the following could be the value of $t$?",
    choices: [
      // distractor: subtracts the range from the minimum, $9 - 15$; that makes the range $21 - (-6) = 27$.
      { id: "A", text: "$-6$" },
      // distractor: takes $t$ to be the range itself; with $t = 15$ the values still run from $9$ to $21$, a range of $12$.
      { id: "B", text: "$15$" },
      { id: "C", text: "$24$" },
      // distractor: adds the range to the maximum, $21 + 15$; that makes the range $36 - 9 = 27$.
      { id: "D", text: "$36$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Algebra from Range Constraints**\n\n**Choice C is correct.** Without $t$, the values run from $9$ to $21$, a range of only $12$, so $t$ must become a new minimum or a new maximum. As a new maximum, $t - 9 = 15$ gives $t = 24$.\n\n**The Fast Way (~25s):** The known values span $9$ to $21$. To stretch the range to $15$, $t$ is either $9 + 15 = 24$ or $21 - 15 = 6$; only $24$ is a choice.\n\n**The Full Solution:**\nStep 1: The five known values have minimum $9$ and maximum $21$, so their range is $21 - 9 = 12$. Since $12 < 15$, $t$ cannot lie between $9$ and $21$; it must be a new extreme.\nStep 2: If $t$ is the new maximum, the minimum stays $9$: $t - 9 = 15$, so $t = 24$. If $t$ is the new minimum, the maximum stays $21$: $21 - t = 15$, so $t = 6$.\nStep 3: Of the choices, only $24$ is possible. Check: the values $9, 12, 14, 17, 21, 24$ have range $24 - 9 = 15$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): subtracts the range from the minimum, $9 - 15$; that makes the range $21 - (-6) = 27$.\n* Choice B ($15$): takes $t$ to be the range itself; with $t = 15$ the values still run from $9$ to $21$, a range of $12$.\n* Choice D ($36$): adds the range to the maximum, $21 + 15$; that makes the range $36 - 9 = 27$.\n\n**Test Day Takeaway:** When an unknown value changes a range, the unknown must be one of the extremes. Pair it with the opposite extreme: new maximum $=$ minimum $+$ range, new minimum $=$ maximum $-$ range.",
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
    question: "The box plot summarizes the lengths, in millimeters, of the leaves in a sample from a shrub. What is the range, in millimeters, of the lengths?",
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
    question: "The table shows the values in data sets A and B. Which of the following correctly compares the standard deviations of the two data sets?",
    questionTable: { headers: ["Data set", "Values"], rows: [["A", "14, 15, 15, 16, 16, 16, 17, 17, 18"], ["B", "8, 11, 13, 16, 16, 16, 19, 21, 24"]] },
    choices: [
      { id: "A", text: "The standard deviation of data set A is less than the standard deviation of data set B." },
      // distractor: reverses the comparison; the tightly clustered set has the smaller standard deviation.
      { id: "B", text: "The standard deviation of data set A is greater than the standard deviation of data set B." },
      // distractor: confuses center with spread; the two data sets have the same mean and median, but not the same spread.
      { id: "C", text: "The standard deviations of data set A and data set B are equal." },
      // distractor: assumes the standard deviations must be computed exactly; the spreads about the shared mean can be compared directly.
      { id: "D", text: "There is not enough information to compare the standard deviations." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Both sets have mean $16$, but set A's values all sit within $2$ of $16$ while set B's values reach as far as $8$ from $16$. More spread means a larger standard deviation, so A's is smaller.\n\n**The Full Solution:**\nStep 1: Compute the means. Set A: $\\frac{14 + 15 + 15 + 16 + 16 + 16 + 17 + 17 + 18}{9} = \\frac{144}{9} = 16$. Set B: $\\frac{8 + 11 + 13 + 16 + 16 + 16 + 19 + 21 + 24}{9} = \\frac{144}{9} = 16$. The means are equal.\nStep 2: Standard deviation measures how far values typically lie from the mean. Set A's distances from $16$ are $2, 1, 1, 0, 0, 0, 1, 1, 2$; set B's are $8, 5, 3, 0, 0, 0, 3, 5, 8$.\nStep 3: Every nonzero distance in set B exceeds the corresponding distance in set A, so set B is more spread out and has the larger standard deviation. Check: set A spans $14$ to $18$; set B spans $8$ to $24$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (greater): reverses the comparison; the tightly clustered set has the smaller standard deviation.\n* Choice C (equal): confuses center with spread; the two data sets have the same mean and median, $16$, but not the same spread.\n* Choice D (not enough information): assumes the standard deviations must be computed exactly; the spreads about the shared mean can be compared directly.\n\n**Test Day Takeaway:** Standard deviation is about spread around the mean, independent of the mean's value. Compare distances from the center; no formula is needed.",
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
    question: "$23, 27, 30, 30, 34, 36$\nA new data set is created by adding $8$ to each of the $6$ values shown. Which of the following correctly compares the new data set with the data set shown?",
    choices: [
      // distractor: assumes adding a constant changes nothing; every value rises by $8$, so the mean rises by $8$.
      { id: "A", text: "The new data set has the same mean and the same standard deviation." },
      { id: "B", text: "The new data set has a greater mean and the same standard deviation." },
      // distractor: attaches the shift to the spread instead of to the center.
      { id: "C", text: "The new data set has the same mean and a greater standard deviation." },
      // distractor: assumes that larger values mean more spread; every value moves by the same amount, so the distances from the mean do not change.
      { id: "D", text: "The new data set has a greater mean and a greater standard deviation." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: SD Under Translation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Adding $8$ to every value slides the whole data set $8$ units up: the mean rises by $8$, and the spread, measured by the standard deviation, does not change.\n\n**The Full Solution:**\nStep 1: The mean of the values shown is $\\frac{23 + 27 + 30 + 30 + 34 + 36}{6} = \\frac{180}{6} = 30$. The new values are $31, 35, 38, 38, 42, 44$, with mean $\\frac{228}{6} = 38 = 30 + 8$, so the mean is greater.\nStep 2: Standard deviation depends only on how far the values lie from the mean. The distances from $30$ in the original set are $7, 3, 0, 0, 4, 6$.\nStep 3: The distances from $38$ in the new set are $7, 3, 0, 0, 4, 6$, the same as before, so the standard deviation is unchanged. Check: the range is $36 - 23 = 13$ before and $44 - 31 = 13$ after. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (same mean, same standard deviation): assumes adding a constant changes nothing; every value rises by $8$, so the mean rises by $8$.\n* Choice C (same mean, greater standard deviation): attaches the shift to the spread instead of to the center.\n* Choice D (greater mean, greater standard deviation): assumes that larger values mean more spread; every value moves by the same amount, so the distances from the mean do not change.\n\n**Test Day Takeaway:** Adding a constant to every value shifts measures of center (mean, median) by that constant and leaves measures of spread (standard deviation, range) unchanged.",
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
    question: "The temperatures of $25$ samples have a mean of $68^{\\circ}\\text{F}$ and a standard deviation of $9^{\\circ}\\text{F}$. Each temperature is converted to degrees Celsius using $C = \\frac{5}{9}(F - 32)$. What are the mean and the standard deviation, in degrees Celsius, of the converted temperatures?",
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
    question: "The lengths, in millimeters, of adult beetles of a certain species are approximately normally distributed with a mean of $12.0$ and a standard deviation of $1.5$. Which of the following is closest to the percent of these beetles with lengths between $10.5$ and $15.0$ millimeters?",
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
    question: "A random sample of $900$ adults in a county were surveyed, and $62\\%$ of them said they get news primarily from online sources. The margin of error for this estimate is $3.2\\%$. Which of the following is the most appropriate conclusion?",
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
    question: "$M = \\frac{k}{\\sqrt{n}}$\nThe given equation models the margin of error $M$, in percent, of a survey with sample size $n$, where $k$ is a constant. If $M = 6$ when $n = 250$, what is the value of $n$ when $M = 2$?",
    choices: [
      // distractor: divides the sample size by $3$; a smaller sample makes the margin of error larger, not smaller.
      { id: "A", text: "$83$" },
      // distractor: multiplies the sample size by $3$, forgetting that $M$ depends on $\sqrt{n}$, so $n$ must grow by $3^2$.
      { id: "B", text: "$750$" },
      // distractor: multiplies the sample size by the original margin of error, $6$, rather than by the squared ratio $\left(\frac{6}{2}\right)^2 = 9$.
      { id: "C", text: "$1{,}500$" },
      { id: "D", text: "$2{,}250$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Cutting $M$ from $6$ to $2$ divides it by $3$, so $\\sqrt{n}$ must be multiplied by $3$ and $n$ by $3^2 = 9$: $9 \\times 250 = 2{,}250$.\n\n**The Full Solution:**\nStep 1: Substitute $M = 6$ and $n = 250$: $6 = \\frac{k}{\\sqrt{250}}$, so $k = 6\\sqrt{250}$.\nStep 2: Substitute $M = 2$: $2 = \\frac{6\\sqrt{250}}{\\sqrt{n}}$, so $\\sqrt{n} = 3\\sqrt{250}$ and $n = 9 \\times 250 = 2{,}250$.\nStep 3: Check: $\\frac{\\sqrt{2{,}250}}{\\sqrt{250}} = \\sqrt{9} = 3$, so $M$ is divided by $3$: $\\frac{6}{3} = 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($83$): divides the sample size by $3$; a smaller sample makes the margin of error larger, not smaller.\n* Choice B ($750$): multiplies the sample size by $3$, forgetting that $M$ depends on $\\sqrt{n}$, so $n$ must grow by $3^2$.\n* Choice C ($1{,}500$): multiplies the sample size by the original margin of error, $6$, rather than by the squared ratio $\\left(\\frac{6}{2}\\right)^2 = 9$.\n\n**Test Day Takeaway:** When $M = \\frac{k}{\\sqrt{n}}$, dividing the margin of error by a factor $f$ requires multiplying the sample size by $f^2$. Halving needs $4$ times the sample; cutting to a third needs $9$ times.",
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
    question: "The table shows the results of two surveys of different random samples of commuters in a city. Each survey estimated the percent of commuters in the city who use public transit. Which of the following is a plausible value for this percent, based on both surveys?",
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
    question: "A bag of birdseed has a mass of $3.75$ kilograms. Which of the following is closest to its mass, in pounds? ($1$ kilogram $\\approx 2.2$ pounds)",
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
    question: "A wolf traveled $72$ kilometers in one night. How many miles did the wolf travel? (Use $1$ mile $= 1.6$ kilometers.)",
    correctAnswer: "45",
    explanation: "**SAT Pattern: km to Miles Conversion**\n\n**The correct answer is $45$.** Dividing by the number of kilometers in a mile gives $\\frac{72}{1.6} = 45$ miles.\n\n**The Fast Way (~20s):** $\\frac{72}{1.6} = \\frac{720}{16} = 45$ miles.\n\n**The Full Solution:**\n\nStep 1: Set up the conversion so kilometers cancel: $72 \\text{ km} \\cdot \\dfrac{1 \\text{ mi}}{1.6 \\text{ km}}$.\n\nStep 2: Divide: $\\frac{72}{1.6} = 45$ miles.\n\nStep 3: Check the direction. A mile is longer than a kilometer, so the number of miles must be smaller than $72$, and $45 < 72$. Check: $45(1.6) = 72$ kilometers.\n\n**Common Mistakes:**\n\n* Multiplying instead of dividing gives $72(1.6) = 115.2$, a number larger than the kilometer count, which cannot be right for the longer unit.\n* Dividing by $1.6$ after mistakenly converting to meters gives $45{,}000$, mixing two conversions.\n* Answering $73.6$ adds $1.6$ rather than using it as a rate.\n\n**Test Day Takeaway:** Before dividing, decide whether the answer should be larger or smaller than the given number: the longer unit always carries the smaller count.",
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
    question: "A rowing team rows a $2{,}000$-meter course in $6$ minutes $40$ seconds. What is the team's average speed, in kilometers per hour?",
    choices: [
      // distractor: stops at kilometers per minute, $\frac{2}{6\frac{2}{3}} = 0.3$, without converting minutes to hours.
      { id: "A", text: "$0.3$" },
      // distractor: reports meters per second, $\frac{2{,}000}{400} = 5$, instead of kilometers per hour.
      { id: "B", text: "$5$" },
      { id: "C", text: "$18$" },
      // distractor: reports meters per minute, $\frac{2{,}000}{6\frac{2}{3}} = 300$, converting neither unit.
      { id: "D", text: "$300$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Compound Unit Conversion**\n\n**Choice C is correct.** The course is $2$ kilometers and the time is $\\frac{400}{3{,}600}$ hour, so the average speed is $2 \\div \\frac{1}{9} = 18$ kilometers per hour.\n\n**The Fast Way (~40s):** $6$ minutes $40$ seconds is $\\frac{1}{9}$ of an hour, and $2$ kilometers in $\\frac{1}{9}$ hour is $18$ kilometers per hour.\n\n**The Full Solution:**\n\nStep 1: Convert the distance. $2{,}000$ meters is $\\frac{2{,}000}{1{,}000} = 2$ kilometers.\n\nStep 2: Convert the time. $6$ minutes $40$ seconds is $400$ seconds, and $\\frac{400}{3{,}600} = \\frac{1}{9}$ hour.\n\nStep 3: Divide distance by time: $\\frac{2 \\text{ km}}{\\frac{1}{9} \\text{ h}} = 2(9) = 18$ kilometers per hour. Check: at $18$ kilometers per hour the team covers $18{,}000$ meters in $3{,}600$ seconds, which is $5$ meters per second, and $5(400) = 2{,}000$ meters.\n\n**Why the wrong answers are tempting:**\n\n* Choice A ($0.3$): converts the distance but leaves the time in minutes, giving kilometers per minute.\n* Choice B ($5$): leaves both units untouched, giving meters per second.\n* Choice D ($300$): converts neither unit, giving meters per minute.\n\n**Test Day Takeaway:** A compound rate needs both units converted: write the target units first, then convert the numerator and denominator one at a time.",
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
    question: "The table shows the airflow, in cubic meters per hour, of each of four fans. If fans $2$ and $3$ run at the same time, how many cubic meters of air do they move per minute?",
    diagram: { type: "dataTable", params: { headers: ["Fan", "Rated airflow (cubic meters per hour)"], rows: [["1", "10,800"], ["2", "13,500"], ["3", "9,000"], ["4", "16,200"]] } },
    choices: [
      // distractor: converts only fan $3$, $\frac{9{,}000}{60} = 150$, and leaves fan $2$ out.
      { id: "A", text: "$150$" },
      // distractor: converts only fan $2$, $\frac{13{,}500}{60} = 225$, and leaves fan $3$ out.
      { id: "B", text: "$225$" },
      { id: "C", text: "$375$" },
      // distractor: adds the two hourly rates, $13{,}500 + 9{,}000 = 22{,}500$, and never divides by $60$ minutes.
      { id: "D", text: "$22{,}500$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Rate Per Minute from Per Hour**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Add the two hourly rates, $13{,}500 + 9{,}000 = 22{,}500$ cubic meters per hour, then divide by $60$: $375$ cubic meters per minute.\n\n**The Full Solution:**\nStep 1: Read the table. Fan $2$ is rated at $13{,}500$ cubic meters per hour and fan $3$ at $9{,}000$ cubic meters per hour.\nStep 2: Combine, then convert. Together they move $22{,}500$ cubic meters per hour, and $1$ hour is $60$ minutes, so the per-minute rate is $\\frac{22{,}500}{60} = 375$.\nStep 3: Check by converting first. Fan $2$ moves $225$ cubic meters per minute and fan $3$ moves $150$; $225 + 150 = 375$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($150$): converts only fan $3$: $\\frac{9{,}000}{60} = 150$. Fan $2$ never enters the sum.\n* Choice B ($225$): converts only fan $2$: $\\frac{13{,}500}{60} = 225$. Fan $3$ never enters the sum.\n* Choice D ($22{,}500$): is the combined rate per HOUR. It skips the division by $60$ minutes.\n\n**Test Day Takeaway:** Convert the units at the very end or at the very start, but do it once. Adding two hourly rates and forgetting the $60$ is the standard slip.",
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
    question: "A printing press uses ink at a constant rate of $0.35$ ounce per minute. Which of the following is closest to the number of liters of ink the press uses in $8$ hours? ($1$ ounce $\\approx 29.6$ milliliters)",
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
    question: "A rectangular mural is $9$ feet by $16$ feet. What is the area, in square yards, of the mural? ($1$ yard $= 3$ feet)",
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
    question: "A rectangular trench is $15$ feet long, $4$ feet wide, and $3$ feet deep. If concrete is sold only in whole cubic yards, what is the least number of cubic yards of concrete needed to fill the trench? ($1$ yard $= 3$ feet)",
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
    explanation: "**SAT Pattern: Volume Unit Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The trench holds $15 \\times 4 \\times 3 = 180$ cubic feet, and $1$ cubic yard is $27$ cubic feet, so $\\frac{180}{27} = \\frac{20}{3}$, about $6.67$ cubic yards. Since only whole cubic yards are sold, $7$ are needed.\n\n**The Full Solution:**\nStep 1: Volume in cubic feet: $15 \\times 4 \\times 3 = 180$ cubic feet.\nStep 2: A cube with $1$-yard edges has $3$-foot edges, so $1 \\text{ yd}^3 = 3^3 = 27 \\text{ ft}^3$. Convert: $\\frac{180}{27} = \\frac{20}{3} \\approx 6.67$ cubic yards.\nStep 3: Concrete is sold only in whole cubic yards, and $6$ is not enough, so $7$ cubic yards are needed. Check: $6 \\times 27 = 162 < 180$, while $7 \\times 27 = 189 \\ge 180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): drops the fractional part of $\\frac{20}{3}$ instead of rounding up; $6$ cubic yards fills only $162$ of the $180$ cubic feet.\n* Choice C ($20$): divides by $3^2 = 9$, the area factor, instead of the volume factor $3^3 = 27$.\n* Choice D ($60$): divides by $3$, the length factor, converting only one of the three dimensions.\n\n**Test Day Takeaway:** Cubic units convert with the CUBE of the length factor ($1 \\text{ yd}^3 = 27 \\text{ ft}^3$), and a purchase in whole units always rounds UP, never to the nearest.",
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
    question: "A floor is covered with $48$ square tiles, each with a side length of $9$ inches, with no gaps or overlaps. What is the area of the floor, in square feet? ($1$ foot $= 12$ inches)",
    correctAnswer: "27",
    explanation: "**SAT Pattern: Tile Area in Square Feet**\n\n**The correct answer is $27$.**\n\n**The Fast Way (~20s):** Each tile is $\\frac{9}{12} = 0.75$ foot on a side, so its area is $0.75^2 = 0.5625$ square foot, and $48$ tiles cover $48 \\times 0.5625 = 27$ square feet.\n\n**The Full Solution:**\nStep 1: Area of one tile in square inches: $9 \\times 9 = 81$. The floor is $48 \\times 81 = 3{,}888$ square inches.\nStep 2: Convert the AREA unit. One foot is $12$ inches, so one square foot is $12 \\times 12 = 144$ square inches.\nStep 3: Divide: $\\frac{3{,}888}{144} = 27$ square feet. Check by converting the side first: $9$ inches $= 0.75$ foot, and $48(0.75)^2 = 27$. ✓\n\n**Common Mistakes:**\n* Dividing by $12$ instead of $144$ gives $324$, which converts a length rather than an area.\n* Multiplying $48$ by the side length, $0.75$ foot, gives $36$, which adds up lengths, not areas.\n* Answering $3{,}888$ reports the area in square inches, the unit the question asks you to leave.\n\n**Test Day Takeaway:** Length converts with $12$, area with $12^2 = 144$. Square the conversion factor whenever the unit is squared.",
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
    question: "A machine fills bottles at a constant rate of $18$ bottles per minute. How many bottles does it fill in $1.5$ hours?",
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
    question: "Two boats leave a dock at the same time and travel in the same direction, one at a constant speed of $22$ miles per hour and the other at $14$ miles per hour. How many miles apart are the boats after $1.5$ hours?",
    choices: [
      // distractor: reports the difference in speeds, in miles per hour, without multiplying by the $1.5$ hours.
      { id: "A", text: "$8$" },
      { id: "B", text: "$12$" },
      // distractor: reports the distance the slower boat traveled rather than the gap between the boats.
      { id: "C", text: "$21$" },
      // distractor: adds the speeds, $22 + 14 = 36$, and multiplies by $1.5$, as if the boats moved in opposite directions.
      { id: "D", text: "$54$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Relative Rate (Same Direction)**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Same direction, so the gap grows at the difference of the speeds: $22 - 14 = 8$ miles per hour. After $1.5$ hours the gap is $8 \\times 1.5 = 12$ miles.\n\n**The Full Solution:**\nStep 1: Distances after $1.5$ hours: faster boat $22 \\times 1.5 = 33$ miles; slower boat $14 \\times 1.5 = 21$ miles.\nStep 2: The distance between them is $33 - 21 = 12$ miles.\nStep 3: Check with the relative speed: $(22 - 14) \\times 1.5 = 8 \\times 1.5 = 12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): reports the difference in speeds, in miles per hour, without multiplying by the $1.5$ hours.\n* Choice C ($21$): reports the distance the slower boat traveled rather than the gap between the boats.\n* Choice D ($54$): adds the speeds, $22 + 14 = 36$, and multiplies by $1.5$, as if the boats moved in opposite directions.\n\n**Test Day Takeaway:** Same direction: separation rate is the difference of the speeds; opposite directions: the sum. Then multiply by time.",
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
    question: "A road crew paves $320$ meters of road per hour. How many meters does the crew pave in $6$ hours $15$ minutes?",
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
    question: "A copier prints $45$ pages per minute. How many minutes does it take the copier to print $150$ copies of a $24$-page report?",
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
    question: "A bakery sold $180$ loaves of bread last week and $225$ loaves this week. The number sold this week is $p\\%$ greater than the number sold last week. What is the value of $p$?",
    choices: [
      // distractor: divides the increase by this week's count (45/225 = 0.20) instead of last week's
      { id: "A", text: "$20$" },
      { id: "B", text: "$25$" },
      // distractor: reports the increase in loaves, 225 - 180 = 45, not a percent
      { id: "C", text: "$45$" },
      // distractor: reports the ratio 225/180 = 1.25 as 125 instead of the percent increase
      { id: "D", text: "$125$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent Increase Basic**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The increase is $225 - 180 = 45$ loaves on a base of $180$, and $\\frac{45}{180} = 0.25$, so $p = 25$.\n\n**The Full Solution:**\nStep 1: A percent increase compares the change with the original amount. The original amount is last week's $180$ loaves.\nStep 2: The change is $225 - 180 = 45$ loaves.\nStep 3: As a percent of the original, $\\frac{45}{180} \\times 100 = 25$, so $p = 25$. Check: $25\\%$ of $180$ is $45$, and $180 + 45 = 225$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): divides the change by this week's count, $\\frac{45}{225} = 0.20$, instead of by last week's count.\n* Choice C ($45$): reports the change in the number of loaves rather than the change as a percent.\n* Choice D ($125$): turns the ratio $\\frac{225}{180} = 1.25$ into $125$. This week's sales are $125\\%$ OF last week's, which is $25\\%$ greater.\n\n**Test Day Takeaway:** \"$p\\%$ greater than\" divides the change by the starting amount; the answer is the change only, not the whole ratio.",
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
    question: "The mean mass of $6$ pumpkins is $8.5$ kilograms. If a pumpkin with a mass of $12$ kilograms is removed, what is the mean mass, in kilograms, of the remaining $5$ pumpkins?",
    choices: [
      // distractor: subtracts 12 from the total but divides by the original count of 6 (39/6 = 6.5)
      { id: "A", text: "$6.5$" },
      { id: "B", text: "$7.8$" },
      // distractor: assumes removing a pumpkin leaves the mean unchanged
      { id: "C", text: "$8.5$" },
      // distractor: divides the original total by 5 without removing the 12 kilograms (51/5 = 10.2)
      { id: "D", text: "$10.2$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Mean After Removal**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The total mass is $6(8.5) = 51$ kilograms. Removing $12$ leaves $39$ kilograms for $5$ pumpkins, and $\\frac{39}{5} = 7.8$.\n\n**The Full Solution:**\nStep 1: Turn the mean into a total: the $6$ pumpkins have a combined mass of $6 \\times 8.5 = 51$ kilograms.\nStep 2: Remove the $12$-kilogram pumpkin: $51 - 12 = 39$ kilograms remain, shared by $5$ pumpkins.\nStep 3: The new mean is $\\frac{39}{5} = 7.8$ kilograms. Check: $5(7.8) + 12 = 39 + 12 = 51 = 6(8.5)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6.5$): removes the $12$ kilograms from the total but still divides by the original $6$ pumpkins, $\\frac{39}{6} = 6.5$.\n* Choice C ($8.5$): assumes the mean does not change. Removing a value greater than the mean must lower the mean.\n* Choice D ($10.2$): divides the original total by the new count, $\\frac{51}{5} = 10.2$, without removing the $12$ kilograms.\n\n**Test Day Takeaway:** Work through the total: mean $\\times$ count, adjust the total, then divide by the NEW count.",
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
    question: "The table shows the thickness, in millimeters, of each of $10$ glass tiles. What is the median thickness, in millimeters, of the $10$ tiles?",
    diagram: { type: "dataTable", params: { headers: ["Tile", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], rows: [["Thickness (mm)", "3.4", "2.9", "3.8", "3.1", "3.6", "2.7", "3.3", "3.9", "3.0", "3.5"]] } },
    correctAnswer: "3.35",
    explanation: "**SAT Pattern: Median of Even Decimal Set**\n\n**The correct answer is 3.35.**\n\n**The Fast Way (~25s):** Sort the ten values; the median is the mean of the $5$th and $6$th values: $\\frac{3.3 + 3.4}{2} = 3.35$.\n\n**The Full Solution:**\nStep 1: Order the thicknesses from least to greatest: $2.7,\\ 2.9,\\ 3.0,\\ 3.1,\\ 3.3,\\ 3.4,\\ 3.5,\\ 3.6,\\ 3.8,\\ 3.9$.\nStep 2: With an even number of values, $10$, the median is the mean of the two middle values, the $5$th and $6$th: $3.3$ and $3.4$.\nStep 3: The median is $\\frac{3.3 + 3.4}{2} = \\frac{6.7}{2} = 3.35$. Check: five values ($2.7$ through $3.3$) are less than $3.35$ and five ($3.4$ through $3.9$) are greater ✓\n\n**Common Mistakes:**\n* $3.15$: averages the two middle entries of the table in its original order, $\\frac{3.6 + 2.7}{2}$, without sorting first.\n* $3.3$ or $3.4$: reports one of the two middle values instead of their mean.\n* $3.32$: computes the mean, $\\frac{33.2}{10}$, which the question does not ask for.\n\n**Test Day Takeaway:** Median means sort first. For an even count, average the two middle values; the median does not have to be a value in the list.",
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
    question: "A runner ran $12$ laps around a $625$-meter track. How many kilometers did the runner run? ($1$ kilometer $= 1{,}000$ meters)",
    choices: [
      // distractor: divides 7,500 by 100,000, moving the decimal point five places
      { id: "A", text: "$0.075$" },
      // distractor: divides 7,500 by 10,000, one factor of 10 too many
      { id: "B", text: "$0.75$" },
      { id: "C", text: "$7.5$" },
      // distractor: divides 7,500 by 100 instead of 1,000
      { id: "D", text: "$75$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Meters to Kilometers**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $12 \\times 625 = 7{,}500$ meters, and dividing by $1{,}000$ gives $7.5$ kilometers.\n\n**The Full Solution:**\nStep 1: Find the total distance in meters: $12 \\times 625 = 7{,}500$ meters.\nStep 2: Convert with $1$ kilometer $= 1{,}000$ meters: $7{,}500 \\text{ m} \\times \\frac{1 \\text{ km}}{1{,}000 \\text{ m}} = 7.5$ kilometers.\nStep 3: Check: $7.5$ kilometers is $7{,}500$ meters, and $\\frac{7{,}500}{625} = 12$ laps ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.075$): divides $7{,}500$ by $100{,}000$, moving the decimal point five places instead of three.\n* Choice B ($0.75$): divides by $10{,}000$, one factor of $10$ too many.\n* Choice D ($75$): divides by $100$ instead of $1{,}000$, as if a kilometer were $100$ meters.\n\n**Test Day Takeaway:** Kilo- means $1{,}000$; converting meters to kilometers is always a division by $1{,}000$.",
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
    question: "A tank held $8{,}000$ liters of water. On Monday, $15\\%$ of the water was used, and on Tuesday, $10\\%$ of the remaining water was used. How many liters of water were left after Tuesday?",
    choices: [
      // distractor: adds the percents to 25% and removes it from 8,000 at once
      { id: "A", text: "$6{,}000$" },
      { id: "B", text: "$6{,}120$" },
      // distractor: stops after Monday
      { id: "C", text: "$6{,}800$" },
      // distractor: applies only the 10% to the original 8,000 liters
      { id: "D", text: "$7{,}200$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sequential Percent Removal**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Keep $85\\%$, then keep $90\\%$ of that: $8{,}000(0.85)(0.90) = 6{,}120$ liters.\n\n**The Full Solution:**\nStep 1: After Monday, $100\\% - 15\\% = 85\\%$ of the water remains: $8{,}000 \\times 0.85 = 6{,}800$ liters.\nStep 2: Tuesday's $10\\%$ is taken from the remaining $6{,}800$ liters, so $90\\%$ of it is left: $6{,}800 \\times 0.90 = 6{,}120$ liters.\nStep 3: Check: on Tuesday $6{,}800 - 6{,}120 = 680$ liters were used, which is $10\\%$ of $6{,}800$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6{,}000$): adds the percents to $25\\%$ and removes it all at once, $8{,}000(0.75)$; but the $10\\%$ is taken from a smaller amount.\n* Choice C ($6{,}800$): stops after Monday.\n* Choice D ($7{,}200$): applies only the $10\\%$ to the original $8{,}000$ liters and skips Monday.\n\n**Test Day Takeaway:** Successive percents multiply the remaining factors, $(1 - 0.15)(1 - 0.10)$; they never add.",
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
    question: "The dot plot shows the number of fish caught by each of $8$ people on a fishing trip. Which of the following correctly compares the mean and the median of the data?",
    diagram: { type: "dotPlot", params: { data: [{ value: 2, count: 1 }, { value: 3, count: 2 }, { value: 4, count: 3 }, { value: 5, count: 1 }, { value: 11, count: 1 }], xMin: 0, xMax: 12, xLabel: "Number of fish caught" } },
    choices: [
      { id: "A", text: "The mean is greater than the median." },
      // distractor: reverses the direction a high outlier pulls the mean
      { id: "B", text: "The mean is less than the median." },
      // distractor: assumes the data are centered on the tallest stack, so the mean and median coincide
      { id: "C", text: "The mean is equal to the median." },
      // distractor: thinks the individual values cannot be read from a dot plot
      { id: "D", text: "There is not enough information to compare the mean and the median." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Mean-Median Comparison**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Seven values sit at $2$ through $5$ and one sits far out at $11$. That high value pulls the mean up without moving the median, so the mean is greater than the median.\n\n**The Full Solution:**\nStep 1: Read the values from the dot plot: $2, 3, 3, 4, 4, 4, 5, 11$.\nStep 2: With $8$ values, the median is the mean of the $4$th and $5$th values: $\\frac{4 + 4}{2} = 4$.\nStep 3: The mean is $\\frac{2 + 3 + 3 + 4 + 4 + 4 + 5 + 11}{8} = \\frac{36}{8} = 4.5$, and $4.5 > 4$. Check: with the $11$ replaced by a $4$, the mean would be $\\frac{29}{8} \\approx 3.6$, so the $11$ is what lifts the mean above the median ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: reverses the effect of the outlier; a value far above the rest pulls the mean up, not down.\n* Choice C: assumes the data are centered on the tallest stack; the value $11$ breaks that symmetry.\n* Choice D: every dot is one data value, so both measures can be computed from the plot.\n\n**Test Day Takeaway:** An extreme value pulls the mean toward it and leaves the median alone; a long tail to the right means the mean is greater than the median.",
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
    question: "Water flows through a pipe at a rate of $2.4$ liters per second. How many cubic meters of water flow through the pipe in $1$ hour? ($1$ cubic meter $= 1{,}000$ liters)",
    correctAnswer: "8.64",
    explanation: "**SAT Pattern: Chained Rate Conversion**\n\n**The correct answer is 8.64.**\n\n**The Fast Way (~20s):** One hour is $3{,}600$ seconds, so $2.4 \\times 3{,}600 = 8{,}640$ liters, which is $\\frac{8{,}640}{1{,}000} = 8.64$ cubic meters.\n\n**The Full Solution:**\nStep 1: Convert the time. $1$ hour $= 60 \\times 60 = 3{,}600$ seconds, so in one hour the pipe delivers $2.4 \\frac{\\text{L}}{\\text{s}} \\times 3{,}600 \\text{ s} = 8{,}640$ liters.\nStep 2: Convert the volume: $8{,}640 \\text{ L} \\times \\frac{1 \\text{ m}^3}{1{,}000 \\text{ L}} = 8.64$ cubic meters.\nStep 3: Check with a single chain: $2.4 \\times \\frac{3{,}600}{1{,}000} = 2.4 \\times 3.6 = 8.64$ ✓\n\n**Common Mistakes:**\n* $0.144$: multiplies by $60$ instead of $3{,}600$, converting to minutes rather than hours.\n* $8{,}640$: converts the time but never converts liters to cubic meters.\n* $0.0024$: divides by $1{,}000$ but never multiplies by the number of seconds in an hour.\n\n**Test Day Takeaway:** Write every conversion as a fraction that cancels a unit, and chain them until only the requested units are left.",
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
    question: "A salesperson earns a $5\\%$ commission on the first $\\$20{,}000$ of her sales each month and an $8\\%$ commission on any sales above $\\$20{,}000$. Last month, her commission was $\\$2{,}200$. What were her total sales, in dollars, last month?",
    choices: [
      // distractor: finds the sales above $20,000 (1,200/0.08) but never adds the first $20,000
      { id: "A", text: "$15{,}000$" },
      // distractor: applies the 8% rate to all sales: 2,200/0.08 = 27,500
      { id: "B", text: "$27{,}500$" },
      { id: "C", text: "$35{,}000$" },
      // distractor: applies the 5% rate to all sales: 2,200/0.05 = 44,000
      { id: "D", text: "$44{,}000$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Tiered Commission**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The first $\\$20{,}000$ earns $0.05(20{,}000) = 1{,}000$, so the other $1{,}200$ came at $8\\%$: $\\frac{1{,}200}{0.08} = 15{,}000$. Total sales: $20{,}000 + 15{,}000 = \\$35{,}000$.\n\n**The Full Solution:**\nStep 1: The full first tier earns $0.05(20{,}000) = \\$1{,}000$. Since the commission was more than $\\$1{,}000$, her sales were above $\\$20{,}000$.\nStep 2: Let $s$ be her total sales. Then $1{,}000 + 0.08(s - 20{,}000) = 2{,}200$, so $0.08(s - 20{,}000) = 1{,}200$ and $s - 20{,}000 = 15{,}000$.\nStep 3: So $s = 35{,}000$. Check: $0.05(20{,}000) + 0.08(15{,}000) = 1{,}000 + 1{,}200 = 2{,}200$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($15{,}000$): finds the sales above $\\$20{,}000$ correctly but forgets to add the first $\\$20{,}000$.\n* Choice B ($27{,}500$): applies the $8\\%$ rate to all sales, $\\frac{2{,}200}{0.08}$, ignoring the lower first tier.\n* Choice D ($44{,}000$): applies the $5\\%$ rate to all sales, $\\frac{2{,}200}{0.05}$, ignoring the higher second tier.\n\n**Test Day Takeaway:** With tiered rates, take the full first tier's earnings out first; only what is left is divided by the higher rate.",
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
    question: "$60$ is $p\\%$ of $250$. What is the value of $p$?",
    correctAnswer: "24",
    explanation: "**SAT Pattern: Percent of Total**\n\n**The correct answer is 24.**\n\n**The Fast Way (~10s):** $\\frac{60}{250} = \\frac{24}{100}$, so $p = 24$.\n\n**The Full Solution:**\nStep 1: \"$60$ is $p\\%$ of $250$\" translates to $60 = \\frac{p}{100}(250)$.\nStep 2: Divide both sides by $250$: $\\frac{p}{100} = \\frac{60}{250} = 0.24$.\nStep 3: Multiply by $100$: $p = 24$. Check: $24\\%$ of $250$ is $0.24(250) = 60$ ✓\n\n**Common Mistakes:**\n* $416.67$ (or $4.17$): divides $250$ by $60$, putting the whole over the part.\n* $0.24$: stops at the decimal and never converts it to a percent.\n* $76$: finds what percent $250 - 60 = 190$ is of $250$, the complement of what is asked.\n\n**Test Day Takeaway:** \"$a$ is $p\\%$ of $b$\" means $\\frac{p}{100} = \\frac{a}{b}$: the number after \"of\" is always the whole.",
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
    question: "The table shows the number of pages each of $4$ students read on Saturday. What is the mean number of pages read per student?",
    diagram: { type: "dataTable", params: { headers: ["Student", "Pages read"], rows: [["Ana", "72"], ["Ben", "49"], ["Carla", "85"], ["Dev", "58"]] } },
    choices: [
      // distractor: reports the median, (58 + 72)/2 = 65, rather than the mean
      { id: "A", text: "$65$" },
      { id: "B", text: "$66$" },
      // distractor: averages only the least and greatest values, (49 + 85)/2 = 67
      { id: "C", text: "$67$" },
      // distractor: divides the total by 3 instead of 4: 264/3 = 88
      { id: "D", text: "$88$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Mean of Four Values**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $72 + 49 + 85 + 58 = 264$, and $\\frac{264}{4} = 66$.\n\n**The Full Solution:**\nStep 1: Add the four values in the table: $72 + 49 + 85 + 58 = 264$ pages.\nStep 2: Count the values: there are $4$ students.\nStep 3: Divide: $\\frac{264}{4} = 66$ pages per student. Check: $4(66) = 264$, the total ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($65$): is the median, the mean of the two middle values $58$ and $72$.\n* Choice C ($67$): averages only the least and greatest values, ignoring the other two students.\n* Choice D ($88$): divides by $3$ instead of $4$, leaving out one student.\n\n**Test Day Takeaway:** The denominator of a mean is the number of values; count the rows before you divide.",
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
    question: "The dot plot shows the number of tomatoes picked from each of $7$ plants in a garden. What is the median of the data shown?",
    diagram: { type: "dotPlot", params: { data: [{ value: 12, count: 1 }, { value: 14, count: 2 }, { value: 15, count: 1 }, { value: 17, count: 1 }, { value: 18, count: 1 }, { value: 22, count: 1 }], xMin: 10, xMax: 24, xLabel: "Number of tomatoes" } },
    choices: [
      { id: "A", text: "$15$" },
      // distractor: computes the mean, 112/7 = 16, not the median
      { id: "B", text: "$16$" },
      // distractor: takes the midpoint of the range, (12 + 22)/2 = 17
      { id: "C", text: "$17$" },
      // distractor: reports the greatest value
      { id: "D", text: "$22$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Median of Sorted Set**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** There are $7$ dots, so the median is the $4$th dot from the left: $12, 14, 14, \\mathbf{15}, 17, 18, 22$.\n\n**The Full Solution:**\nStep 1: A dot plot is already in order. List the values from left to right, one for each dot: $12, 14, 14, 15, 17, 18, 22$.\nStep 2: With $7$ values, the median is the middle value, in position $\\frac{7 + 1}{2} = 4$.\nStep 3: The $4$th value is $15$. Check: three values ($12, 14, 14$) are less than $15$ and three ($17, 18, 22$) are greater ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($16$): is the mean, $\\frac{112}{7} = 16$, not the median.\n* Choice C ($17$): is the midpoint of the range, $\\frac{12 + 22}{2}$, which ignores how the dots are spread.\n* Choice D ($22$): is the greatest value.\n\n**Test Day Takeaway:** On a dot plot, count dots from one end to the middle position; a stack of dots counts once per dot.",
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
    question: "A copier makes $45$ copies per minute. At this rate, how many copies does the copier make in $12$ minutes?",
    choices: [
      // distractor: divides the rate by the time (45/12)
      { id: "A", text: "$3.75$" },
      // distractor: adds 45 + 12 instead of multiplying
      { id: "B", text: "$57$" },
      { id: "C", text: "$540$" },
      // distractor: slips a factor of 10, as if the copier ran for 120 minutes
      { id: "D", text: "$5{,}400$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Rate × Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $45 \\times 12 = 540$ copies.\n\n**The Full Solution:**\nStep 1: A rate in copies per minute times a number of minutes gives copies: $\\frac{45 \\text{ copies}}{1 \\text{ min}} \\times 12 \\text{ min}$.\nStep 2: $45 \\times 12 = 450 + 90 = 540$.\nStep 3: Check the units: minutes cancel, leaving copies, and $\\frac{540}{12} = 45$ copies per minute ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3.75$): divides the rate by the time, $\\frac{45}{12}$, which does not give a number of copies.\n* Choice B ($57$): adds $45 + 12$ instead of multiplying.\n* Choice D ($5{,}400$): slips a factor of $10$, as if the copier ran for $120$ minutes.\n\n**Test Day Takeaway:** Rate $\\times$ time $=$ amount; let the units cancel to confirm you multiplied.",
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
    question: "The number of students enrolled at a school decreased from $640$ last year to $512$ this year. The number of students enrolled decreased by $p\\%$. What is the value of $p$?",
    choices: [
      { id: "A", text: "$20$" },
      // distractor: divides the decrease by this year's enrollment (128/512 = 0.25)
      { id: "B", text: "$25$" },
      // distractor: reports this year's enrollment as a percent of last year's (512/640 = 0.80)
      { id: "C", text: "$80$" },
      // distractor: reports the decrease in students, 640 - 512 = 128, not a percent
      { id: "D", text: "$128$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The decrease is $640 - 512 = 128$ students on a base of $640$: $\\frac{128}{640} = 0.20$, so $p = 20$.\n\n**The Full Solution:**\nStep 1: A percent decrease compares the change with the original amount, last year's $640$ students.\nStep 2: The decrease is $640 - 512 = 128$, and $\\frac{128}{640} = \\frac{1}{5} = 0.20$.\nStep 3: So $p = 20$. Check: $20\\%$ of $640$ is $128$, and $640 - 128 = 512$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($25$): divides the decrease by this year's enrollment, $\\frac{128}{512} = 0.25$.\n* Choice C ($80$): reports this year's enrollment as a percent of last year's, $\\frac{512}{640} = 80\\%$, rather than the decrease.\n* Choice D ($128$): reports the number of students lost, not the percent.\n\n**Test Day Takeaway:** Percent change always uses the starting value as the base, whether the amount went up or down.",
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
    question: "A course grade is calculated as $15\\%$ of the quiz average, $25\\%$ of the lab average, and $60\\%$ of the exam average. A student has a quiz average of $90$ and a lab average of $86$. What is the least exam average that gives a course grade of at least $89$?",
    correctAnswer: "90",
    explanation: "**SAT Pattern: Weighted Average Final Grade**\n\n**The correct answer is 90.**\n\n**The Fast Way (~25s):** Quizzes and labs contribute $0.15(90) + 0.25(86) = 13.5 + 21.5 = 35$ points. The exams must supply $89 - 35 = 54$ points, so $0.60E = 54$ and $E = 90$.\n\n**The Full Solution:**\nStep 1: Let $E$ be the exam average. The course grade is at least $89$ when $0.15(90) + 0.25(86) + 0.60E \\geq 89$.\nStep 2: Evaluate the known terms: $13.5 + 21.5 = 35$, so $35 + 0.60E \\geq 89$ and $0.60E \\geq 54$.\nStep 3: Divide by $0.60$: $E \\geq 90$, so the least exam average is $90$. Check: $0.15(90) + 0.25(86) + 0.60(90) = 13.5 + 21.5 + 54 = 89$ ✓\n\n**Common Mistakes:**\n* $91$: weights the three averages equally, solving $\\frac{90 + 86 + E}{3} = 89$.\n* $54$: stops at $0.60E = 54$ and reports the exam's weighted contribution instead of the exam average.\n* $89$: assumes the exam average must equal the target grade.\n\n**Test Day Takeaway:** In a weighted average, multiply each score by its weight before adding; to find a missing score, isolate its weighted term and then divide by its weight.",
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
    question: "A store decreased the price of a jacket by $30\\%$ and later increased the new price by $k\\%$. The final price was $98\\%$ of the original price. What is the value of $k$?",
    choices: [
      // distractor: adds percents: -30 + k = -2
      { id: "A", text: "$28$" },
      // distractor: adds percents and reads 98% as a 2% gain: -30 + k = 2
      { id: "B", text: "$32$" },
      { id: "C", text: "$40$" },
      // distractor: reports the multiplier 1.4 as 140 instead of the percent increase
      { id: "D", text: "$140$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Net Effect of Successive Changes**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** A $30\\%$ decrease multiplies the price by $0.70$. For the overall factor to be $0.98$, the second factor must be $\\frac{0.98}{0.70} = 1.4$, a $40\\%$ increase.\n\n**The Full Solution:**\nStep 1: Let the original price be $P$. After the $30\\%$ decrease, the price is $0.70P$.\nStep 2: A $k\\%$ increase multiplies by $1 + \\frac{k}{100}$, so $0.70P\\left(1 + \\frac{k}{100}\\right) = 0.98P$.\nStep 3: Divide by $0.70P$: $1 + \\frac{k}{100} = 1.4$, so $k = 40$. Check: a $\\$100$ jacket drops to $\\$70$, and a $40\\%$ increase brings it to $\\$98$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($28$): adds the percents, $-30 + k = -2$; but the $k\\%$ increase is applied to the lower price, so it must be more than $28$.\n* Choice B ($32$): also adds the percents, and reads \"$98\\%$ of the original\" as a $2\\%$ gain, $-30 + k = 2$.\n* Choice D ($140$): reports the multiplier $1.4$ as $140$ instead of the percent increase it represents.\n\n**Test Day Takeaway:** Successive percent changes multiply; solve for the unknown factor by dividing, then convert the factor back to a percent change.",
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
    question: "The mean of a data set of $9$ numbers is $22$. What is the sum of the $9$ numbers?",
    correctAnswer: "198",
    explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is 198.**\n\n**The Fast Way (~5s):** Sum $=$ mean $\\times$ count $= 22 \\times 9 = 198$.\n\n**The Full Solution:**\nStep 1: The mean is the sum divided by the number of values, so $\\frac{\\text{sum}}{9} = 22$.\nStep 2: Multiply both sides by $9$: sum $= 22 \\times 9$.\nStep 3: The sum is $198$. Check: $\\frac{198}{9} = 22$ ✓\n\n**Common Mistakes:**\n* $2.44$: divides the mean by the count, $\\frac{22}{9}$, instead of multiplying.\n* $31$: adds the mean and the count, $22 + 9$.\n* $176$: multiplies by $8$ instead of $9$, miscounting the values.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ sum is the one relationship behind every mean question; rearrange it for whichever quantity is missing.",
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
    question: "$8$, $15$, $23$, $12$, $17$, $11$, $12$\nWhat is the mean of the data shown?",
    correctAnswer: "14",
    explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is 14.**\n\n**The Fast Way (~20s):** $8 + 15 + 23 + 12 + 17 + 11 + 12 = 98$, and $\\frac{98}{7} = 14$.\n\n**The Full Solution:**\nStep 1: Add the values: $8 + 15 + 23 + 12 + 17 + 11 + 12 = 98$.\nStep 2: Count the values. There are $7$, and the repeated $12$ counts twice.\nStep 3: Divide the sum by the count: $\\frac{98}{7} = 14$. Check: $7(14) = 98$, the sum ✓\n\n**Common Mistakes:**\n* $16.33$: divides by $6$, counting the repeated $12$ only once.\n* $12$: reports the median, the middle value of $8, 11, 12, 12, 15, 17, 23$, instead of the mean.\n* $15$: reports the range, $23 - 8$, which measures spread, not center.\n\n**Test Day Takeaway:** Add first, count second, divide once; every listed value counts, including repeats.",
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
    question: "The table shows the frequency of each value in a data set. What is the mean of the data set?",
    diagram: { type: "dataTable", params: { headers: ["Value", "Frequency"], rows: [["0", "6"], ["1", "8"], ["2", "4"], ["3", "2"]] } },
    choices: [
      { id: "A", text: "$1.1$" },
      // distractor: averages the four values (0 + 1 + 2 + 3)/4, ignoring the frequencies
      { id: "B", text: "$1.5$" },
      // distractor: averages the frequency column, 20/4 = 5
      { id: "C", text: "$5$" },
      // distractor: stops at the sum of the data, 22, and never divides by the 20 values
      { id: "D", text: "$22$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Mean from List**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The sum is $0(6) + 1(8) + 2(4) + 3(2) = 22$, and there are $6 + 8 + 4 + 2 = 20$ values, so the mean is $\\frac{22}{20} = 1.1$.\n\n**The Full Solution:**\nStep 1: Each value occurs as many times as its frequency, so the sum of the data is $0 \\times 6 + 1 \\times 8 + 2 \\times 4 + 3 \\times 2 = 0 + 8 + 8 + 6 = 22$.\nStep 2: The number of values is the sum of the frequencies: $6 + 8 + 4 + 2 = 20$.\nStep 3: The mean is $\\frac{22}{20} = 1.1$. Check: $1.1$ lies between $0$ and $3$ and near $1$, the value with the greatest frequency ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($1.5$): averages the four values in the first column, $\\frac{0 + 1 + 2 + 3}{4}$, ignoring how often each occurs.\n* Choice C ($5$): averages the frequency column, $\\frac{20}{4}$, which is not a value in the data set.\n* Choice D ($22$): stops at the sum of the data and never divides by the $20$ values.\n\n**Test Day Takeaway:** With a frequency table, multiply each value by its frequency, add, and divide by the sum of the frequencies, not the number of rows.",
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
    question: "$6.20$, $6.45$, $6.10$, $6.55$, $6.30$, $x$\nThe mean of the data set shown is $6.35$. What is the value of $x$?",
    choices: [
      // distractor: reports the median of the five known values, 6.30
      { id: "A", text: "$6.30$" },
      // distractor: averages only the five known values, 31.60/5 = 6.32
      { id: "B", text: "$6.32$" },
      // distractor: assumes the missing value equals the mean, 6.35
      { id: "C", text: "$6.35$" },
      { id: "D", text: "$6.50$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Mean from List**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The six values sum to $6(6.35) = 38.10$, and the five known values sum to $31.60$, so $x = 38.10 - 31.60 = 6.50$.\n\n**The Full Solution:**\nStep 1: Turn the mean into a sum: six values with a mean of $6.35$ sum to $6(6.35) = 38.10$.\nStep 2: Add the five known values: $6.20+6.45+6.10+6.55+6.30=31.60$.\nStep 3: Subtract: $x = 38.10 - 31.60 = 6.50$. Check: $\\frac{31.60 + 6.50}{6} = \\frac{38.10}{6} = 6.35$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6.30$): is the median of the five known values, not the missing value.\n* Choice B ($6.32$): is the mean of the five known values. The given mean includes $x$.\n* Choice C ($6.35$): assumes the missing value equals the mean, which would be true only if the other five values averaged $6.35$.\n\n**Test Day Takeaway:** Multiply the mean by the full count first; the missing value is the required sum minus the sum of the values you know.",
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
    question: "A data set of $12$ numbers has a mean of $41$. If the number $29$ in the data set is replaced with the number $65$, what is the mean of the new data set?",
    correctAnswer: "44",
    explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is 44.**\n\n**The Fast Way (~20s):** The replacement raises the sum by $65 - 29 = 36$, which raises the mean by $\\frac{36}{12} = 3$: $41 + 3 = 44$.\n\n**The Full Solution:**\nStep 1: Turn the mean into a sum: $12(41) = 492$.\nStep 2: Replace $29$ with $65$: the new sum is $492 - 29 + 65 = 528$, and there are still $12$ numbers.\nStep 3: The new mean is $\\frac{528}{12} = 44$. Check: the sum rose by $36$, and $\\frac{36}{12} = 3$ is exactly the rise in the mean from $41$ to $44$ ✓\n\n**Common Mistakes:**\n* $77$: adds the whole change, $36$, to the mean instead of spreading it over $12$ numbers.\n* $42.85$: adds $65$ as a thirteenth number without removing $29$, computing $\\frac{492 + 65}{13} \\approx 42.85$.\n* $38$: subtracts the change instead of adding it, $41 - 3$.\n\n**Test Day Takeaway:** Replacing one value changes the sum by (new $-$ old) and leaves the count alone, so the mean changes by that difference divided by the count.",
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
    question: "The mean score of $12$ students on a quiz is $31$ points. Two more students each score $x$ points on the quiz, and the mean score of all $14$ students is $33$ points. What is the value of $x$?",
    correctAnswer: "45",
    explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is 45.**\n\n**The Fast Way (~20s):** All $14$ scores total $14(33) = 462$ and the first $12$ total $12(31) = 372$, so the two new scores add $90$ points, or $45$ points each.\n\n**The Full Solution:**\nStep 1: The first $12$ students scored a total of $12 \\times 31 = 372$ points.\nStep 2: All $14$ students scored a total of $14 \\times 33 = 462$ points, so the two new students scored $462 - 372 = 90$ points together.\nStep 3: The two new scores are equal, so $x = \\frac{90}{2} = 45$. Check: $\\frac{372 + 2(45)}{14} = \\frac{462}{14} = 33$ ✓\n\n**Common Mistakes:**\n* $90$: reports the two new students' combined score instead of each score.\n* $6.43$: divides the extra $90$ points by all $14$ students.\n* $33$: assumes each new score equals the new mean, but two scores of $33$ would raise the mean only to $\\frac{372 + 66}{14} \\approx 31.3$.\n\n**Test Day Takeaway:** Turn every mean into a total before combining groups; totals add, means do not.",
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
    question: "Data set A has $18$ values with a mean of $46$. Data set B has $n$ values with a mean of $58$. When the two data sets are combined, the mean of all $18 + n$ values is $54$. What is the value of $n$?",
    choices: [
      // distractor: inverts the balance: 18 x (58 - 54)/(54 - 46) = 9
      { id: "A", text: "$9$" },
      // distractor: assumes equal sizes, which would make the combined mean 52, the average of the two means
      { id: "B", text: "$18$" },
      // distractor: divides the full spread 58 - 46 = 12 by the A gap 54 - 46 = 8 instead of using the B gap 58 - 54 = 4: 18 x 12/8 = 27
      { id: "C", text: "$27$" },
      { id: "D", text: "$36$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Mean from List**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The combined mean is $8$ above data set A's mean and $4$ below data set B's mean, so data set B has twice as many values: $n = 2(18) = 36$.\n\n**The Full Solution:**\nStep 1: Sums add, so $18(46) + 58n = 54(18 + n)$.\nStep 2: Expand: $828 + 58n = 972 + 54n$, so $4n = 144$.\nStep 3: $n = 36$. Check: $\\frac{828 + 58(36)}{18 + 36} = \\frac{2{,}916}{54} = 54$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): inverts the balance, computing $18 \\times \\frac{58 - 54}{54 - 46} = 9$. The data set farther from the combined mean is the smaller one.\n* Choice B ($18$): assumes the data sets are the same size, but then the combined mean would be $52$, the average of $46$ and $58$.\n* Choice C ($27$): divides the full spread $58 - 46 = 12$ by data set A's gap $54 - 46 = 8$ instead of setting up the balance with data set B's gap $58 - 54 = 4$: $18 \\times \\frac{12}{8} = 27$.\n\n**Test Day Takeaway:** A combined mean is a weighted mean: the group sizes are inversely proportional to their distances from the combined mean.",
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
    question: "A list of $20$ measurements has a mean of $74$. Two measurements were recorded incorrectly: $26$ was recorded as $62$, and $63$ was recorded as $47$. What is the mean of the $20$ measurements after both errors are corrected?",
    correctAnswer: "73",
    explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is 73.**\n\n**The Fast Way (~25s):** The corrections change the sum by $(26 - 62) + (63 - 47) = -36 + 16 = -20$, and $\\frac{-20}{20} = -1$, so the mean drops from $74$ to $73$.\n\n**The Full Solution:**\nStep 1: The list as recorded has a sum of $20 \\times 74 = 1{,}480$.\nStep 2: Replacing $62$ with $26$ lowers the sum by $36$; replacing $47$ with $63$ raises it by $16$. The corrected sum is $1{,}480 - 36 + 16 = 1{,}460$.\nStep 3: The corrected mean is $\\frac{1{,}460}{20} = 73$. Check: the sum changed by $-20$ across $20$ values, so the mean changed by $-1$ ✓\n\n**Common Mistakes:**\n* $72.2$: corrects only the first error, $\\frac{1{,}444}{20}$.\n* $74.8$: corrects only the second error, $\\frac{1{,}496}{20}$.\n* $71.4$: lowers the sum for both corrections, $\\frac{1{,}480 - 36 - 16}{20}$, though the second correction raises it.\n\n**Test Day Takeaway:** Track the change in the sum: each correction moves the sum by (true value $-$ recorded value), and the mean by that amount divided by the count.",
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
    question: "The scatterplot shows the daily high temperature $x$, in degrees Fahrenheit, and the number of smoothies $y$ sold at a shop on each of $9$ days. The line of best fit, $y = 1.5x - 96$, is also shown. What is the residual for the data point $(92, 47)$?",
    diagram: { type: "scatterplot", params: { points: [[76, 20], [78, 19], [82, 29], [84, 28], [86, 35], [88, 35], [90, 41], [92, 47], [94, 44]], xMin: 76, xMax: 96, yMin: 0, yMax: 60, xGridStep: 2, xLabelStep: 4, yGridStep: 5, yLabelStep: 10, xLabel: "Daily high temperature (degrees Fahrenheit)", yLabel: "Smoothies sold", bestFitLine: { slope: 1.5, intercept: -96 }, highlightPoint: [92, 47], highlightLabel: "(92, 47)", showResidual: true } },
    correctAnswer: "5",
    explanation: "**SAT Pattern: Residual**\n\n**The correct answer is 5.**\n\n**The Fast Way (~15s):** The line predicts $1.5(92) - 96 = 42$ smoothies, the data point is at $47$, and $47 - 42 = 5$.\n\n**The Full Solution:**\nStep 1: Find the predicted value. Substitute $x = 92$ into $y = 1.5x - 96$: $1.5(92) = 138$, and $138 - 96 = 42$.\nStep 2: The actual value for the data point $(92, 47)$ is $47$.\nStep 3: Residual $=$ actual $-$ predicted $= 47 - 42 = 5$. Check: the point lies above the line, so its residual is positive ✓\n\n**Common Mistakes:**\n* $-5$: subtracts in the wrong order, $42 - 47$; a residual is actual minus predicted.\n* $42$: reports the predicted value instead of the residual.\n* $53$: computes the prediction as $1.5(92 - 96) = -6$, putting the $-96$ inside the parentheses, so $47 - (-6) = 53$.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted. Compute the prediction from the equation, then subtract it from the data value.",
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
    question: "The scatterplot shows the number of hours of rain $x$ and the number of visitors $y$ to a city park on each of $9$ days. The line of best fit, $y = -4x + 90$, is also shown. What is the residual for the data point $(12, 38)$?",
    diagram: { type: "scatterplot", params: { points: [[1, 88], [2, 80], [4, 76], [6, 64], [8, 60], [9, 52], [11, 48], [14, 32]], xMin: 0, xMax: 15, yMin: 0, yMax: 100, xGridStep: 1, yGridStep: 10, xLabelStep: 3, yLabelStep: 20, xLabel: "Hours of rain", yLabel: "Number of visitors", bestFitLine: { slope: -4, intercept: 90 }, highlightPoint: [12, 38], highlightLabel: "(12, 38)", showResidual: true } },
    correctAnswer: "-4",
    explanation: "**SAT Pattern: Residual**\n\n**The correct answer is -4.**\n\n**The Fast Way (~10s):** The line predicts $-4(12) + 90 = 42$ visitors, and $38 - 42 = -4$.\n\n**The Full Solution:**\nStep 1: A residual is the actual $y$-value minus the $y$-value predicted by the line of best fit.\nStep 2: At $x = 12$, the line predicts $y = -48 + 90 = 42$ visitors.\nStep 3: The actual value is $38$, so the residual is $38 - 42 = -4$. Check: the point lies below the line, so its residual is negative ✓\n\n**Common Mistakes:**\n* $4$: subtracts in the wrong order, $42 - 38$, and loses the sign.\n* $42$: reports the predicted value instead of the residual.\n* $86$: stops at $-48$ without adding the $90$, computing $38 - (-48)$.\n\n**Test Day Takeaway:** A negative residual means the line overestimates: the data point lies below the line.",
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
    question: "The scatterplot shows the number of hours $x$ that each of $10$ students practiced piano last month and the number of songs $y$ that each student learned. A line of best fit is also shown. For how many of the $10$ data points is the residual negative?",
    diagram: { type: "scatterplot", params: { points: [[10, 2], [15, 5], [20, 5], [25, 8], [30, 5], [35, 9], [40, 8], [45, 13], [50, 8], [55, 13]], xMin: 0, xMax: 60, yMin: 0, yMax: 16, xGridStep: 5, xLabelStep: 10, yGridStep: 2, yLabelStep: 4, xLabel: "Hours practiced", yLabel: "Songs learned", bestFitLine: { slope: 0.2, intercept: 1 } } },
    choices: [
      // distractor: misses the leftmost point at (10, 2), which lies 1 song below the line
      { id: "A", text: "$3$" },
      { id: "B", text: "$4$" },
      // distractor: counts the point at (20, 5), which lies on the line and has a residual of 0, as negative
      { id: "C", text: "$5$" },
      // distractor: counts the points on or above the line (5 above plus 1 on it) instead
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** A negative residual means the data point lies below the line of best fit. Four points do: at $x = 10$, $30$, $40$, and $50$.\n\n**The Full Solution:**\nStep 1: Residual $=$ actual $-$ predicted, so a residual is negative exactly when the data point lies below the line.\nStep 2: The line passes through $(0, 1)$ and $(50, 11)$, so it predicts $y = 0.2x + 1$. The points $(10, 2)$, $(30, 5)$, $(40, 8)$, and $(50, 8)$ lie below it; $(20, 5)$ lies on it; the other five lie above it.\nStep 3: So $4$ data points have a negative residual. Check: $4$ below $+ 1$ on $+ 5$ above $= 10$ points ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): misses the leftmost point, $(10, 2)$, which lies $1$ song below the line.\n* Choice C ($5$): counts $(20, 5)$, which lies on the line. Its residual is $0$, not negative.\n* Choice D ($6$): counts the points on or above the line, whose residuals are not negative.\n\n**Test Day Takeaway:** Below the line means a negative residual; a point on the line has a residual of $0$ and belongs to neither side.",
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
    question: "The scatterplot shows the number of residents $x$ and the monthly water use $y$, in cubic meters, of each of $11$ households. The line of best fit, $y = 12x + 6$, is also shown. For how many of the $11$ households is the actual water use greater than the water use predicted by the line of best fit?",
    diagram: { type: "scatterplot", params: { points: [[1, 14], [1, 22], [2, 30], [2, 34], [3, 38], [3, 46], [4, 50], [4, 58], [5, 62], [5, 70], [6, 80]], xMin: 0, xMax: 7, yMin: 0, yMax: 90, xGridStep: 1, yGridStep: 10, xLabelStep: 1, yLabelStep: 20, xLabel: "Residents", yLabel: "Water use (cubic meters)", bestFitLine: { slope: 12, intercept: 6 } } },
    choices: [
      // distractor: counts the points below the line, where the actual use is less than predicted
      { id: "A", text: "$4$" },
      // distractor: misses the point (6, 80), which lies only 2 cubic meters above the line
      { id: "B", text: "$5$" },
      { id: "C", text: "$6$" },
      // distractor: also counts the point (2, 30), which lies on the line and has a residual of 0
      { id: "D", text: "$7$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Residual**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** \"Actual greater than predicted\" means a positive residual, so count the points strictly above the line: there are $6$.\n\n**The Full Solution:**\nStep 1: For each data point, compare $y$ with the predicted value $12x + 6$. Count the point only when $y > 12x + 6$.\nStep 2: The points above the line are $(1, 22)$, $(2, 34)$, $(3, 46)$, $(4, 58)$, $(5, 70)$, and $(6, 80)$, where the predicted values are $18$, $30$, $42$, $54$, $66$, and $78$.\nStep 3: That is $6$ households. The point $(2, 30)$ lies on the line, and $(1, 14)$, $(3, 38)$, $(4, 50)$, and $(5, 62)$ lie below it. Check: $6$ above $+ 1$ on $+ 4$ below $= 11$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): counts the points below the line, where the line predicts more water use than the actual use.\n* Choice B ($5$): misses $(6, 80)$, which lies only $2$ cubic meters above the predicted $78$.\n* Choice D ($7$): also counts $(2, 30)$, which lies on the line; its actual and predicted values are equal.\n\n**Test Day Takeaway:** Above the line means the line underestimates and the residual is positive; a point on the line has a residual of exactly $0$.",
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
    question: "The scatterplot shows the length $x$, in days, and the attendance $y$, in hundreds of visitors, of each of $8$ exhibits at a museum. The line of best fit, $y = 0.6x + 4$, is also shown. What is the greatest residual, in hundreds of visitors, of the $8$ data points?",
    diagram: { type: "scatterplot", params: { points: [[10, 11], [15, 12], [20, 18], [25, 18], [30, 23], [35, 24], [40, 31], [45, 30]], xMin: 0, xMax: 50, yMin: 0, yMax: 36, xGridStep: 5, xLabelStep: 10, yGridStep: 1, yLabelStep: 4, xLabel: "Length of exhibit (days)", yLabel: "Attendance (hundreds of visitors)", bestFitLine: { slope: 0.6, intercept: 4 } } },
    correctAnswer: "3",
    explanation: "**SAT Pattern: Residual**\n\n**The correct answer is 3.**\n\n**The Fast Way (~25s):** The point farthest above the line is $(40, 31)$. The line predicts $0.6(40) + 4 = 28$ there, so the residual is $31 - 28 = 3$.\n\n**The Full Solution:**\nStep 1: The greatest residual belongs to the point farthest above the line, so the four points below the line can be set aside.\nStep 2: Check the points above the line. At $x = 10$: $11 - 10 = 1$. At $x = 20$: $18 - 16 = 2$. At $x = 30$: $23 - 22 = 1$. At $x = 40$: $31 - 28 = 3$.\nStep 3: The greatest of these is $3$. Check: each point below the line has a residual of $-1$, which is less than $3$ ✓\n\n**Common Mistakes:**\n* $31$: reports the greatest attendance instead of its distance from the line.\n* $28$: reports the predicted value at $x = 40$ instead of the residual.\n* $-3$: subtracts in the wrong order, predicted minus actual.\n\n**Test Day Takeaway:** The greatest residual is the point farthest above the line; scan the plot, then compute actual minus predicted for the few candidates.",
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
    question: "The scatterplot shows the temperature $x$, in degrees Celsius, and the number of chirps per minute $y$ made by a cricket on each of $7$ evenings. The line of best fit, $y = 2.5x + 9$, is also shown. A new data point with an $x$-value of $14$ is added, and its residual is $-4$. What is the $y$-value of the new data point?",
    diagram: { type: "scatterplot", params: { points: [[8, 31], [10, 32], [12, 41], [16, 47], [18, 56], [20, 57], [24, 71]], xMin: 0, xMax: 30, yMin: 0, yMax: 90, xGridStep: 2, yGridStep: 10, xLabelStep: 10, yLabelStep: 20, xLabel: "Temperature (degrees Celsius)", yLabel: "Chirps per minute", bestFitLine: { slope: 2.5, intercept: 9 } } },
    correctAnswer: "40",
    explanation: "**SAT Pattern: Residual**\n\n**The correct answer is 40.**\n\n**The Fast Way (~15s):** The line predicts $2.5(14) + 9 = 44$, and a residual of $-4$ puts the point $4$ below that: $44 - 4 = 40$.\n\n**The Full Solution:**\nStep 1: Residual $=$ actual $-$ predicted, so actual $=$ predicted $+$ residual.\nStep 2: At $x = 14$, the line predicts $y = 2.5(14) + 9 = 35 + 9 = 44$.\nStep 3: The actual value is $44 + (-4) = 40$. Check: $40 - 44 = -4$, the given residual ✓\n\n**Common Mistakes:**\n* $48$: adds the residual with the wrong sign, $44 + 4$.\n* $44$: reports the predicted value.\n* $31$: drops the intercept, computing $2.5(14) - 4$.\n\n**Test Day Takeaway:** Rearrange the definition once, actual $=$ predicted $+$ residual, and keep the residual's sign.",
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
    question: "The scatterplot shows the number of days $x$ before a play's opening night and the number of tickets $y$ sold on each of $8$ days. The line of best fit, $y = -6x + 128$, is also shown. On a ninth day, $52$ tickets were sold, and the residual for that day is $14$. How many days before opening night was the ninth day?",
    diagram: { type: "scatterplot", params: { points: [[2, 120], [4, 100], [6, 96], [8, 78], [10, 70], [12, 52], [16, 36], [18, 18]], xMin: 0, xMax: 20, yMin: 0, yMax: 140, xGridStep: 2, xLabelStep: 4, yGridStep: 10, yLabelStep: 20, xLabel: "Days before opening night", yLabel: "Tickets sold", bestFitLine: { slope: -6, intercept: 128 } } },
    correctAnswer: "15",
    explanation: "**SAT Pattern: Residual**\n\n**The correct answer is 15.**\n\n**The Fast Way (~30s):** A residual of $14$ means the line predicted $52 - 14 = 38$ tickets, and $-6x + 128 = 38$ gives $x = 15$.\n\n**The Full Solution:**\nStep 1: Residual $=$ actual $-$ predicted, so predicted $=$ actual $-$ residual $= 52 - 14 = 38$ tickets.\nStep 2: The line predicts $38$ tickets where $-6x + 128 = 38$, so $-6x = -90$.\nStep 3: $x = 15$, so the ninth day was $15$ days before opening night. Check: the line predicts $-6(15) + 128 = 38$, and $52 - 38 = 14$, the given residual ✓\n\n**Common Mistakes:**\n* $10.33$: adds the residual instead of subtracting it, solving $-6x + 128 = 66$.\n* $12.67$: ignores the residual and solves $-6x + 128 = 52$.\n* $38$: stops at the predicted number of tickets instead of finding $x$.\n\n**Test Day Takeaway:** Predicted $=$ actual $-$ residual. Find the predicted value first, then solve the line's equation for $x$.",
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
    question: "The scatterplot shows the age $x$, in years, and the annual maintenance cost $y$, in hundreds of dollars, for each of $12$ machines. A line of best fit for the data is also shown, with equation $y = 1.2x + 8$. For which of the following data points does the line of best fit most underestimate the maintenance cost?",
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
    question: "A random sample of $250$ trees in a forest was selected. Based on the sample, it is estimated that $0.38$ of all the trees in the forest are oaks, with an associated margin of error of $0.05$. What is the greatest plausible value for the proportion of trees in the forest that are oaks?",
    correctAnswer: "0.43",
    explanation: "**SAT Pattern: Margin of Error**\n\n**The correct answer is $0.43$.**\n\n**The Fast Way (~10s):** The greatest plausible value is the estimate plus the margin of error: $0.38+0.05=0.43$.\n\n**The Full Solution:**\nStep 1: An estimate with a margin of error gives an interval of plausible values, estimate $\\pm$ margin of error.\nStep 2: The interval runs from $0.38-0.05=0.33$ to $0.38+0.05=0.43$.\nStep 3: The question asks for the greatest plausible value, which is $0.43$.\nCheck: the interval is $0.10$ wide, twice the margin of error. $\\checkmark$\n\n**Common Mistakes:** Reporting $0.33$, the least plausible value; reporting the estimate $0.38$ and ignoring the margin of error; adding the full width of the interval, $2(0.05)$, which gives $0.48$.\n\n**Test Day Takeaway:** Margin of error is added and subtracted once each; the interval's width is twice the margin of error.",
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
    question: "Based on a random sample of $350$ guests at a hotel, it is estimated that $64\\%$ of all guests at the hotel would recommend it, with an associated margin of error of $5\\%$. Which of the following is the most appropriate conclusion?",
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
    question: "Based on a random sample, the plausible values for the mean daily electricity use of the apartments in a building are from $84.2$ to $91.8$ kilowatt-hours. What is the associated margin of error, in kilowatt-hours?",
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
    question: "A library will estimate the mean number of books its members borrow each year. Survey 1 will use a random sample of $150$ members, and survey 2 will use a random sample of $600$ members. If both margins of error are found with the same method, which of the following is most likely true?",
    choices: [
      // distractor: reverses the relationship, as if a larger sample gave a larger margin of error
      { id: "A", text: "The margin of error for survey 1 will be less than the margin of error for survey 2." },
      { id: "B", text: "The margin of error for survey 1 will be greater than the margin of error for survey 2." },
      // distractor: assumes sample size has no effect on the margin of error
      { id: "C", text: "The margins of error for the two surveys will be equal." },
      // distractor: applies the sample-size ratio 600/150 = 4 to the estimate itself
      { id: "D", text: "The estimated mean for survey 2 will be four times the estimated mean for survey 1." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** A larger random sample gives a smaller margin of error, so survey 1, with only $150$ members, will most likely have the greater margin of error.\n\n**The Full Solution:**\nStep 1: A margin of error measures how far a sample estimate may plausibly be from the true value for the whole population.\nStep 2: Estimates from larger random samples vary less from sample to sample, so when margins of error are found with the same method, the larger sample generally has the smaller margin of error.\nStep 3: Survey 2 uses $600$ members and survey 1 uses only $150$, so the margin of error for survey 1 will most likely be greater.\nCheck: a margin of error of this kind is proportional to $\\dfrac{1}{\\sqrt{n}}$, and $\\sqrt{\\dfrac{600}{150}} = \\sqrt{4} = 2$, so survey 2's margin is about half of survey 1's. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: This reverses the relationship; more data makes an estimate more precise, not less.\n* Choice C: The margins would be equal only if sample size had no effect, but sample size is exactly what drives the margin of error.\n* Choice D: Sample size changes how precise the estimate is, not how large it is; there is no reason the mean itself would be four times as great.\n\n**Test Day Takeaway:** Bigger random sample, smaller margin of error; the estimate itself does not grow or shrink with the sample size.",
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
    question: "A random sample of $180$ of the $2{,}400$ employees at a company was surveyed, and $30\\%$ of those surveyed use the company's shuttle. Which of the following is the largest group to which the results of the survey can be generalized?",
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
    explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** A random sample supports conclusions about the population it was drawn from: the $2{,}400$ employees at the company.\n\n**The Full Solution:**\nStep 1: Identify the population that was sampled. The $180$ employees were selected at random from the $2{,}400$ employees at the company.\nStep 2: Random selection makes the sample representative of that population, so the result of $30\\%$ generalizes to all $2{,}400$ employees.\nStep 3: No employees of other companies and no non-employees had a chance of being selected, so the results say nothing about them.\nCheck: the largest group the sample represents is the group it was drawn from. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: The $180$ employees are the sample itself; random selection exists so that the result can be extended to the full company.\n* Choice C: Employees at other companies were never in the pool from which the sample was drawn.\n* Choice D: Adults who do not work at the company had no chance of being selected, so the estimate does not describe them.\n\n**Test Day Takeaway:** Conclusions reach exactly as far as the population that was randomly sampled, and no farther.",
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
    question: "A random sample of $400$ of the $12{,}000$ members of a club was surveyed. It is estimated that $35\\%$ of all members attended the club's annual meeting, with an associated margin of error of $4\\%$. What is the greatest plausible number of members who attended the meeting?",
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
    question: "Based on a random sample of workers in a city, the mean commute time of all workers in the city is estimated to be $31.4$ minutes, and the interval of plausible values is $1.6$ minutes wide. A second random sample gives the same estimate with a margin of error $25\\%$ greater. What is the greatest plausible value, in minutes, for the mean based on the second sample?",
    correctAnswer: "32.4",
    explanation: "**SAT Pattern: Margin of Error**\n\n**The correct answer is $32.4$.**\n\n**The Fast Way (~45s):** A width of $1.6$ means a margin of error of $0.8$; $25\\%$ greater is $1.0$, and $31.4 + 1.0 = 32.4$ minutes.\n\n**The Full Solution:**\nStep 1: The plausible values reach one margin of error on each side of the estimate, so the width is twice the margin of error. The first margin of error is $\\dfrac{1.6}{2} = 0.8$ minute.\nStep 2: A margin of error $25\\%$ greater is $1.25(0.8) = 1.0$ minute.\nStep 3: The second sample's estimate is again $31.4$ minutes, so its greatest plausible value is $31.4 + 1.0 = 32.4$ minutes.\nCheck: the second interval runs from $30.4$ to $32.4$, a width of $2.0$, and $\\dfrac{2.0}{1.6} = 1.25$. $\\checkmark$\n\n**Common Mistakes:**\n* Answering $32.2$ adds the first margin of error, $0.8$, without increasing it.\n* Answering $33.4$ adds the increased width, $1.25(1.6) = 2.0$, treating the width of the interval as its margin of error.\n* Answering $1$ reports the second margin of error instead of the endpoint it produces.\n\n**Test Day Takeaway:** An interval is twice as wide as its margin of error: halve the width first, then scale it, then add it once to the estimate.",
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
    question: "Random samples estimate that $46\\%$ of town A residents and $51\\%$ of town B residents bike to work weekly, each with an associated margin of error of $3.5\\%$. Which of the following is best supported by these estimates?",
    choices: [
      // distractor: treats the higher estimate as settling the comparison even though the intervals overlap
      { id: "A", text: "The percent of residents who bike to work weekly is greater in town B than in town A." },
      { id: "B", text: "It is plausible that the percent of residents who bike to work weekly is the same in town A as in town B." },
      // distractor: treats the difference of the two estimates as an exact population difference
      { id: "C", text: "The percent of residents who bike to work weekly is exactly $5$ percentage points greater in town B than in town A." },
      // distractor: reads a larger estimate as a more precise one, though both margins of error are 3.5%
      { id: "D", text: "The estimate for town B is more precise than the estimate for town A." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Town A's interval is $42.5\\%$ to $49.5\\%$ and town B's is $47.5\\%$ to $54.5\\%$; they overlap between $47.5\\%$ and $49.5\\%$, so equal percents are plausible.\n\n**The Full Solution:**\nStep 1: Build each interval of plausible values: $46\\% \\pm 3.5\\%$ gives $42.5\\%$ to $49.5\\%$; $51\\% \\pm 3.5\\%$ gives $47.5\\%$ to $54.5\\%$.\nStep 2: The intervals share the values from $47.5\\%$ to $49.5\\%$, so a single percent could be plausible for both towns.\nStep 3: With overlapping intervals, the data do not establish that the two towns differ, only that a common value remains plausible.\nCheck: $48\\%$ lies in both intervals. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: Town B's estimate is higher, but the overlap means the true percents could be equal or even reversed.\n* Choice C: $51\\% - 46\\% = 5$ percentage points is a difference between two estimates, not an exact population difference.\n* Choice D: Both estimates carry the same margin of error, $3.5\\%$, so neither is more precise; the size of an estimate says nothing about its precision.\n\n**Test Day Takeaway:** Compare two estimates by their intervals: overlapping intervals cannot establish a difference.",
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
    question: "The table shows the distribution of $200$ rock samples by type and by whether the sample has visible crystals. One of the sedimentary samples will be selected at random. What is the probability of selecting a sample with visible crystals?",
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
    question: "The table shows the distribution of $250$ melons harvested from two fields by field and by ripeness. One of the melons from field B will be selected at random. What is the probability of selecting a melon that is ripe? (Express your answer as a decimal or fraction, not as a percent.)",
    diagram: { type: "twoWayTable", params: { headers: ["", "Ripe", "Not ripe", "Total"], rows: [["Field A", "96", "64", "160"], ["Field B", "63", "27", "90"], ["Total", "159", "91", "250"]] } },
    correctAnswer: "0.7",
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**The correct answer is $0.7$.**\n\n**The Fast Way (~10s):** Field B holds $90$ melons, $63$ of them ripe: $\\dfrac{63}{90} = 0.7$.\n\n**The Full Solution:**\nStep 1: The selection is made from field B only, so the denominator is that row's total, $90$.\nStep 2: The ripe count in that row is $63$.\nStep 3: The probability is $\\dfrac{63}{90} = \\dfrac{7}{10} = 0.7$.\nCheck: $0.7 \\times 90 = 63$. $\\checkmark$\n\n**Common Mistakes:** Using the grand total and reporting $\\dfrac{63}{250} = 0.252$; using the ripe column total and reporting $\\dfrac{63}{159} \\approx 0.396$; reporting the complement $\\dfrac{27}{90} = 0.3$.\n\n**Test Day Takeaway:** Conditioning on a row means both numbers come from that row; neither comes from the grand total.",
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
    question: "The table shows the distribution of $320$ flights scheduled to leave an airport on one day by airline and by status. One of the delayed flights will be selected at random. What is the probability of selecting a flight operated by airline A?",
    diagram: { type: "twoWayTable", params: { headers: ["", "On time", "Delayed", "Cancelled", "Total"], rows: [["Airline A", "96", "42", "12", "150"], ["Airline B", "128", "34", "8", "170"], ["Total", "224", "76", "20", "320"]] } },
    choices: [
      // distractor: 42/320, divides by all flights
      { id: "A", text: "$\\frac{21}{160}$" },
      // distractor: 42/150, conditions on airline A instead of on delayed flights
      { id: "B", text: "$\\frac{7}{25}$" },
      // distractor: 34/76, the airline B share of the delayed flights
      { id: "C", text: "$\\frac{17}{38}$" },
      { id: "D", text: "$\\frac{21}{38}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The delayed column totals $76$, of which $42$ are airline A flights: $\\dfrac{42}{76} = \\dfrac{21}{38}$.\n\n**The Full Solution:**\nStep 1: The flight is chosen from the delayed flights, so the denominator is the delayed column total, $76$.\nStep 2: Of those, the airline A cell holds $42$ flights.\nStep 3: The probability is $\\dfrac{42}{76} = \\dfrac{21}{38}$.\nCheck: $42 + 34 = 76$, so the two airlines account for the whole delayed column. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{21}{160}$): This is $\\dfrac{42}{320}$, the probability that a randomly selected flight is both delayed and operated by airline A.\n* Choice B ($\\frac{7}{25}$): This is $\\dfrac{42}{150}$, which conditions on airline A and gives the probability that an airline A flight was delayed.\n* Choice C ($\\frac{17}{38}$): This is $\\dfrac{34}{76}$, the probability that a delayed flight was operated by airline B, the other part of the same column.\n\n**Test Day Takeaway:** Conditioning on a column makes that column's total the denominator; the row you want supplies the numerator.",
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
    question: "The table shows the outcomes for $240$ dogs that came to an animal shelter last year, by age group. One of the puppies will be selected at random. What is the probability of selecting a dog that was not adopted?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Adopted", "Transferred", "Returned to owner", "Total"], rows: [["Puppy", "84", "21", "35", "140"], ["Adult", "60", "15", "25", "100"], ["Total", "144", "36", "60", "240"]] } },
    choices: [
      // distractor: 56/240, divides by all 240 dogs
      { id: "A", text: "$\\frac{7}{30}$" },
      { id: "B", text: "$\\frac{2}{5}$" },
      // distractor: 56/96, conditions on the dogs that were not adopted
      { id: "C", text: "$\\frac{7}{12}$" },
      // distractor: 84/140, the adopted share of the puppies
      { id: "D", text: "$\\frac{3}{5}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Among the $140$ puppies, $21 + 35 = 56$ were not adopted: $\\dfrac{56}{140} = \\dfrac{2}{5}$.\n\n**The Full Solution:**\nStep 1: The dog is chosen from the puppies, so the denominator is the puppy row's total, $140$.\nStep 2: \"Not adopted\" covers two outcomes in that row: transferred, $21$, and returned to owner, $35$, for a total of $56$.\nStep 3: The probability is $\\dfrac{56}{140} = \\dfrac{2}{5}$.\nCheck: the adopted puppies number $84$, and $\\dfrac{84}{140} = \\dfrac{3}{5}$, the complement of $\\dfrac{2}{5}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{7}{30}$): This is $\\dfrac{56}{240}$, dividing by all $240$ dogs instead of by the puppies.\n* Choice C ($\\frac{7}{12}$): This is $\\dfrac{56}{96}$, conditioning on the dogs that were not adopted rather than on the puppies.\n* Choice D ($\\frac{3}{5}$): This is $\\dfrac{84}{140}$, the probability that a puppy was adopted, the complement of what was asked.\n\n**Test Day Takeaway:** A \"not\" in the question adds cells across the given row; it never changes the denominator.",
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
    question: "The table shows the distribution of $180$ cheeses entered in a contest by type of milk and by award. One of the cheeses that won an award will be selected at random. What is the probability of selecting a cheese made from goat's milk? (Express your answer as a decimal or fraction, not as a percent.)",
    diagram: { type: "twoWayTable", params: { headers: ["", "Gold", "Silver", "No award", "Total"], rows: [["Cow", "24", "36", "60", "120"], ["Goat", "15", "15", "30", "60"], ["Total", "39", "51", "90", "180"]] } },
    correctAnswer: "1/3",
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**The correct answer is $\\frac{1}{3}$.**\n\n**The Fast Way (~20s):** Awards total $39 + 51 = 90$ cheeses, of which $15 + 15 = 30$ are goat's milk: $\\dfrac{30}{90} = \\dfrac{1}{3}$.\n\n**The Full Solution:**\nStep 1: \"Won an award\" means gold or silver, so the denominator is $39 + 51 = 90$ cheeses.\nStep 2: The goat's-milk cheeses among those are $15$ gold and $15$ silver, or $30$ cheeses.\nStep 3: The probability is $\\dfrac{30}{90} = \\dfrac{1}{3}$.\nCheck: the awarded cow's-milk cheeses number $24 + 36 = 60$, and $30 + 60 = 90$. $\\checkmark$\n\n**Common Mistakes:** Dividing by all $180$ cheeses, which gives $\\dfrac{30}{180} = \\dfrac{1}{6}$; dividing by the $60$ goat's-milk cheeses, which gives $\\dfrac{30}{60} = \\dfrac{1}{2}$ and answers \"given goat's milk, what is the probability of an award?\"; using only the gold column, which gives $\\dfrac{15}{39}$.\n\n**Test Day Takeaway:** When the given group spans two columns, add those columns for the denominator before reading the numerator.",
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
    question: "The table shows the distribution of $500$ apples from three orchards by orchard and by whether the apple was bruised. One of the bruised apples will be selected at random. What is the probability of selecting an apple that was not from orchard A?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Bruised", "Not bruised", "Total"], rows: [["Orchard A", "96", "104", "200"], ["Orchard B", "60", "90", "150"], ["Orchard C", "24", "126", "150"], ["Total", "180", "320", "500"]] } },
    choices: [
      // distractor: 84/500, divides by all 500 apples
      { id: "A", text: "$\\frac{21}{125}$" },
      // distractor: 84/300, divides by every apple not from orchard A instead of the bruised ones
      { id: "B", text: "$\\frac{7}{25}$" },
      { id: "C", text: "$\\frac{7}{15}$" },
      // distractor: 96/180, the orchard A share of the bruised apples
      { id: "D", text: "$\\frac{8}{15}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Of the $180$ bruised apples, $60 + 24 = 84$ came from orchard B or orchard C: $\\dfrac{84}{180} = \\dfrac{7}{15}$.\n\n**The Full Solution:**\nStep 1: The apple is chosen from the bruised apples, so the denominator is the bruised column's total, $180$.\nStep 2: \"Not from orchard A\" means orchard B or orchard C: $60 + 24 = 84$ apples in that column.\nStep 3: The probability is $\\dfrac{84}{180} = \\dfrac{7}{15}$.\nCheck: the orchard A part of the column is $96$, and $84 + 96 = 180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{21}{125}$): This is $\\dfrac{84}{500}$, the probability that a randomly selected apple is both bruised and not from orchard A.\n* Choice B ($\\frac{7}{25}$): This is $\\dfrac{84}{300}$, using all $300$ apples not from orchard A as the denominator instead of the bruised apples.\n* Choice D ($\\frac{8}{15}$): This is $\\dfrac{96}{180}$, the probability that a bruised apple was from orchard A, the complement.\n\n**Test Day Takeaway:** Fix the denominator from the \"given\" column first; only then decide which cells in it the \"not\" condition keeps.",
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
    question: "The table shows the distribution of $400$ eggs in a study by batch and by the number of days until hatching. One of these eggs will be selected at random. What is the probability of selecting an egg that hatched in $22$ days or fewer, given that the egg was not in batch $2$? (Express your answer as a decimal or fraction, not as a percent.)",
    diagram: { type: "twoWayTable", params: { headers: ["", "Fewer than 20 days", "20 to 22 days", "More than 22 days", "Total"], rows: [["Batch 1", "40", "60", "20", "120"], ["Batch 2", "15", "85", "30", "130"], ["Batch 3", "25", "95", "30", "150"], ["Total", "80", "240", "80", "400"]] } },
    correctAnswer: "22/27",
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**The correct answer is $\\frac{22}{27}$.**\n\n**The Fast Way (~35s):** Outside batch $2$ there are $120 + 150 = 270$ eggs, and $(40 + 60) + (25 + 95) = 220$ of them hatched in $22$ days or fewer: $\\dfrac{220}{270} = \\dfrac{22}{27}$.\n\n**The Full Solution:**\nStep 1: \"Given that the egg was not in batch $2$\" restricts the sample space to batches $1$ and $3$: $120 + 150 = 270$ eggs.\nStep 2: \"$22$ days or fewer\" covers the first two columns. In batch $1$ that is $40 + 60 = 100$ eggs; in batch $3$ it is $25 + 95 = 120$ eggs, for $220$ in all.\nStep 3: The probability is $\\dfrac{220}{270} = \\dfrac{22}{27}$.\nCheck: the eggs outside batch $2$ that took more than $22$ days number $20 + 30 = 50$, and $220 + 50 = 270$. $\\checkmark$\n\n**Common Mistakes:** Dividing by all $400$ eggs, which gives $\\dfrac{220}{400} = \\dfrac{11}{20}$; including batch $2$ in the numerator as well, which gives $\\dfrac{320}{400} = \\dfrac{4}{5}$; using only the \"$20$ to $22$ days\" column and reporting $\\dfrac{155}{270}$.\n\n**Test Day Takeaway:** Two conditions, two edits: \"not batch $2$\" removes a row, \"$22$ days or fewer\" merges two columns. Apply both before dividing.",
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
    question: "In a study, each of $450$ tomato plants was given spray A, spray B, or no spray. The table shows the results by spray and by whether the plant became diseased. Based on the table, which of the following statements is true?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Diseased", "Not diseased", "Total"], rows: [["No spray", "72", "78", "150"], ["Spray A", "45", "105", "150"], ["Spray B", "27", "123", "150"], ["Total", "144", "306", "450"]] } },
    choices: [
      { id: "A", text: "The probability that a plant is diseased given that it received spray A is greater than the probability that a plant is diseased given that it received spray B." },
      // distractor: reverses the condition: 45/144 is in fact greater than 27/144
      { id: "B", text: "The probability that a plant received spray A given that it is diseased is less than the probability that a plant received spray B given that it is diseased." },
      // distractor: uses the overall not-diseased rate 306/450 = 0.68 instead of the no-spray row's 78/150 = 0.52
      { id: "C", text: "The probability that a plant is not diseased given that it received no spray is greater than $0.60$." },
      // distractor: assumes the no-spray group has the lowest disease rate, but 72/150 = 0.48 exceeds 45/150 = 0.30
      { id: "D", text: "The probability that a plant is diseased given that it received no spray is less than the probability that a plant is diseased given that it received spray A." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** Each spray row totals $150$, so compare the diseased counts directly: $\\dfrac{45}{150} = 0.30$ for spray A exceeds $\\dfrac{27}{150} = 0.18$ for spray B.\n\n**The Full Solution:**\nStep 1: Conditioning on a spray group means dividing that row's diseased count by that row's total.\nStep 2: For spray A the probability is $\\dfrac{45}{150} = 0.30$; for spray B it is $\\dfrac{27}{150} = 0.18$.\nStep 3: Since $0.30>0.18$, the statement in choice A is true.\nCheck: both spray rows have the same total, $150$, so the larger diseased count gives the larger probability. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: This conditions on \"diseased\" instead of on the spray. Both probabilities share the denominator $144$, and $\\dfrac{45}{144} > \\dfrac{27}{144}$, so the inequality runs the other way.\n* Choice C: The no-spray row gives $\\dfrac{78}{150} = 0.52$, not more than $0.60$; the value $\\dfrac{306}{450} = 0.68$ comes from all $450$ plants, not from the no-spray group.\n* Choice D: The no-spray group has the highest disease rate, $\\dfrac{72}{150} = 0.48$, which is greater than spray A's $0.30$, not less.\n\n**Test Day Takeaway:** \"Given that it received a spray\" divides by a row total; \"given that it is diseased\" divides by a column total. Swapping them reverses the comparison.",
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
    question: "A conference received $320$ early registrations, which was $40\\%$ of all its registrations. How many registrations did the conference receive in all?",
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
    question: "$234$ is $65\\%$ of what number?",
    correctAnswer: "360",
    explanation: "**SAT Pattern: Reverse-Percent**\n\n**The correct answer is $360$.**\n\n**The Fast Way (~10s):** $\\dfrac{234}{0.65} = 360$.\n\n**The Full Solution:**\nStep 1: Let $n$ be the number. \"$234$ is $65\\%$ of $n$\" means $0.65n = 234$.\nStep 2: Divide both sides by $0.65$: $n = \\dfrac{234}{0.65}$.\nStep 3: $n = 360$.\nCheck: $0.65 \\times 360 = 234$. $\\checkmark$\n\n**Common Mistakes:** Multiplying instead of dividing, $0.65(234) = 152.1$; increasing $234$ by $65\\%$, $1.65(234) = 386.1$; dividing by the other $35\\%$, which gives about $668.57$.\n\n**Test Day Takeaway:** Translate \"is\" as $=$ and \"of\" as times: part $=$ rate $\\times$ whole, then solve for the whole.",
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
    question: "A hiker has walked $8.4$ kilometers, or $35\\%$ of a trail. What is the length of the trail, in kilometers?",
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
    question: "$125\\%$ of $x$ is $1{,}500$. What is $60\\%$ of $x$?",
    choices: [
      { id: "A", text: "$720$" },
      // distractor: takes 60% of 1,500 instead of 60% of x
      { id: "B", text: "$900$" },
      // distractor: multiplies 1,500 by 1.25 instead of dividing, then takes 60%: 0.6(1.25)(1,500) = 1,125
      { id: "C", text: "$1{,}125$" },
      // distractor: 1,200 is x itself; stops before taking 60%
      { id: "D", text: "$1{,}200$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $x = \\dfrac{1{,}500}{1.25} = 1{,}200$, and $60\\%$ of $1{,}200$ is $720$.\n\n**The Full Solution:**\nStep 1: Write the percent sentence as an equation: $1.25x = 1{,}500$.\nStep 2: Solve for $x$: $x = \\dfrac{1{,}500}{1.25} = 1{,}200$.\nStep 3: Find $60\\%$ of $x$: $0.6(1{,}200) = 720$.\nCheck: $1.25(1{,}200) = 1{,}500$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($900$): This is $60\\%$ of $1{,}500$; the $1{,}500$ is $125\\%$ of $x$, not $x$ itself.\n* Choice C ($1{,}125$): This multiplies $1{,}500$ by $1.25$ instead of dividing, then takes $60\\%$: $0.6(1.25)(1{,}500) = 1{,}125$.\n* Choice D ($1{,}200$): This is the value of $x$; the question asks for $60\\%$ of $x$.\n\n**Test Day Takeaway:** Recover the whole first by dividing by the percent it was given at, then take the new percent of that whole.",
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
    question: "A blood bank collected $468$ units of blood this week, which is $10\\%$ fewer units than it collected last week. How many units of blood did it collect last week?",
    correctAnswer: "520",
    explanation: "**SAT Pattern: Reverse-Percent**\n\n**The correct answer is $520$.**\n\n**The Fast Way (~15s):** $10\\%$ fewer means this week is $90\\%$ of last week, so last week was $\\dfrac{468}{0.9} = 520$ units.\n\n**The Full Solution:**\nStep 1: Let $L$ be the number of units collected last week. This week is $10\\%$ fewer, or $(1 - 0.10)L = 0.9L$.\nStep 2: Set this equal to the amount collected this week: $0.9L = 468$.\nStep 3: Solve: $L = \\dfrac{468}{0.9} = 520$ units.\nCheck: $10\\%$ of $520$ is $52$, and $520 - 52 = 468$ ✓\n\n**Common Mistakes:**\n* Adding $10\\%$ of this week's amount, $468 \\times 1.1 = 514.8$, takes the percent of the new value instead of last week's.\n* Computing $468 \\times 0.9 = 421.2$ removes another $10\\%$ instead of undoing the decrease.\n* Dividing by $1.1$ gives about $425.45$, which treats the change as an increase.\n\n**Test Day Takeaway:** \"$p\\%$ fewer than last week\" is a percent of LAST week; write new $= (1 - p/100) \\times$ old and divide to recover the old value.",
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
    question: "In a cycling club, $40\\%$ of last year's members did not renew their membership this year. If $900$ members did renew, how many members did the club have last year?",
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
    question: "The number of monthly downloads of an app increased by $20\\%$ from 2022 to 2023 and then decreased by $25\\%$ from 2023 to 2024. There were $27{,}000$ monthly downloads in 2024. How many monthly downloads were there in 2022?",
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
    explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The two changes multiply the 2022 value by $(1.20)(0.75) = 0.90$, so the 2022 value is $\\dfrac{27{,}000}{0.90} = 30{,}000$.\n\n**The Full Solution:**\nStep 1: Let $d$ be the number of monthly downloads in 2022. The $20\\%$ increase gives $1.20d$ in 2023.\nStep 2: The $25\\%$ decrease gives $0.75(1.20d) = 0.90d$ in 2024, so $0.90d = 27{,}000$.\nStep 3: $d = \\dfrac{27{,}000}{0.90} = 30{,}000$ monthly downloads.\nCheck: $30{,}000 \\to 36{,}000$ after the increase, and $36{,}000 - 9{,}000 = 27{,}000$ after the decrease. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($22{,}500$): This divides by $1.20$ only, undoing the increase but leaving the decrease in place.\n* Choice B ($24{,}300$): This applies both changes forward to the 2024 value instead of undoing them.\n* Choice D ($36{,}000$): This divides by $0.75$ only; $36{,}000$ is the 2023 value, not the 2022 value.\n\n**Test Day Takeaway:** Chain the multipliers first, then divide once, because percent changes never add ($+20\\%$ then $-25\\%$ is $-10\\%$, not $-5\\%$).",
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
    question: "The price of a bicycle was decreased by $30\\%$, and then the decreased price was increased by $40\\%$. The final price was \\$294. What was the original price, in dollars?",
    correctAnswer: "300",
    explanation: "**SAT Pattern: Reverse-Percent**\n\n**The correct answer is $300$.**\n\n**The Fast Way (~30s):** The two changes multiply the original price by $(0.70)(1.40) = 0.98$, so the original price is $\\dfrac{294}{0.98} = 300$ dollars.\n\n**The Full Solution:**\nStep 1: Let $p$ be the original price, in dollars. The $30\\%$ decrease leaves $0.70p$.\nStep 2: Increasing that by $40\\%$ gives $1.40(0.70p) = 0.98p$, so $0.98p = 294$.\nStep 3: $p = \\dfrac{294}{0.98} = 300$.\nCheck: $300 \\to 210$ after the decrease, and $210 + 84 = 294$ after the increase. $\\checkmark$\n\n**Common Mistakes:** Treating the net change as $+10\\%$ and computing $\\dfrac{294}{1.10} \\approx 267.27$; applying the changes forward to the final price, $294(0.70)(1.40) = 288.12$; undoing only the decrease, $\\dfrac{294}{0.70} = 420$.\n\n**Test Day Takeaway:** A $30\\%$ cut followed by a $40\\%$ raise is a $2\\%$ net loss, because the raise applies to the smaller amount.",
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
    question: "The ratio of blue paint to white paint in a mixture is $2$ to $13$ by volume. How many milliliters of blue paint are in $630$ milliliters of the mixture?",
    correctAnswer: "84",
    explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**The correct answer is $84$.**\n\n**The Fast Way (~15s):** The mixture is $2 + 13 = 15$ parts, so one part is $\\frac{630}{15} = 42$ milliliters and the blue paint is $2 \\times 42 = 84$.\n\n**The Full Solution:**\nStep 1: Count the parts. Blue paint to white paint is $2$ to $13$, so the whole mixture is $2 + 13 = 15$ parts.\nStep 2: Size one part. $\\frac{630}{15} = 42$ milliliters per part.\nStep 3: Take the blue share and check. Blue paint is $2$ parts: $2 \\times 42 = 84$ milliliters. The white paint is $13 \\times 42 = 546$, and $84 + 546 = 630$. ✓\n\n**Common Mistakes:**\n* Dividing by $2$ or by $13$ instead of by $15$ ignores that the ratio describes parts of a whole.\n* Answering $546$ gives the white paint, the other component.\n* Computing $630 \\times \\frac{2}{13}$ uses the blue-to-white ratio instead of the blue-to-total ratio.\n\n**Test Day Takeaway:** In a sum-of-parts ratio, divide the total by the SUM of the ratio numbers, then multiply by the part you want.",
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
    question: "A dry mix contains sand and cement in a mass ratio of $3 : 5$. How many kilograms of sand are in $96$ kilograms of the mix?",
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
    explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The mix has $3 + 5 = 8$ parts, so one part is $\\dfrac{96}{8} = 12$ kilograms and the sand is $3(12) = 36$ kilograms.\n\n**The Full Solution:**\nStep 1: Write the masses as $3k$ kilograms of sand and $5k$ kilograms of cement, so $3k + 5k = 96$.\nStep 2: $8k = 96$, so $k = 12$.\nStep 3: The sand has mass $3k = 36$ kilograms.\nCheck: $36 + 60 = 96$, and $36 : 60$ reduces to $3 : 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): This is $k$, the mass of a single part, not the three parts of sand.\n* Choice C ($57.6$): This computes $\\dfrac{3}{5}$ of $96$, treating $3 : 5$ as a part-to-whole ratio; the whole is $8$ parts, not $5$.\n* Choice D ($60$): This is the mass of the cement, the $5$-part share.\n\n**Test Day Takeaway:** A ratio compares parts to parts; convert it to a part-to-whole fraction, $\\dfrac{3}{8}$ here, before multiplying.",
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
    question: "A drink is made by mixing concentrate and water in a ratio of $2 : 9$ by volume. How many milliliters of concentrate are in $3.3$ liters of the drink? ($1$ liter $= 1{,}000$ milliliters)",
    correctAnswer: "600",
    explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**The correct answer is $600$.**\n\n**The Fast Way (~25s):** The drink has $2 + 9 = 11$ parts, so the concentrate is $\\dfrac{2}{11}(3.3) = 0.6$ liters, or $600$ milliliters.\n\n**The Full Solution:**\nStep 1: Write the volumes as $2k$ liters of concentrate and $9k$ liters of water, so $11k = 3.3$ and $k = 0.3$.\nStep 2: The concentrate is $2k = 0.6$ liters.\nStep 3: Convert: $0.6 \\times 1{,}000 = 600$ milliliters.\nCheck: $0.6 + 2.7 = 3.3$ liters, and $0.6 : 2.7$ reduces to $2 : 9$. $\\checkmark$\n\n**Common Mistakes:** Answering $0.6$, the volume in liters, when the question asks for milliliters; using the water term as the whole, $\\dfrac{2}{9}(3.3) \\approx 0.733$ liters, or about $733$ milliliters; reporting one part, $0.3$ liters $= 300$ milliliters.\n\n**Test Day Takeaway:** Finish the ratio work in the given units, then convert once, and check which unit the question asks for.",
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
    question: "A mix contains oats, seeds, and raisins in the ratio $8 : 5 : 2$ by mass. What is the total mass, in grams, of a bag of this mix that contains $160$ grams of oats?",
    choices: [
      // distractor: 140 grams is the seeds and raisins together, 5k + 2k, not the whole bag
      { id: "A", text: "$140$" },
      { id: "B", text: "$300$" },
      // distractor: (160/5)(15) = 480, matching the 160 grams to the seeds term of the ratio
      { id: "C", text: "$480$" },
      // distractor: (160/2)(15) = 1,200, matching the 160 grams to the raisins term of the ratio
      { id: "D", text: "$1{,}200$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The oats are $8$ parts, so one part is $\\dfrac{160}{8} = 20$ grams, and the $8 + 5 + 2 = 15$ parts total $15(20) = 300$ grams.\n\n**The Full Solution:**\nStep 1: Write the masses as $8k$, $5k$, and $2k$ grams. The oats give $8k = 160$, so $k = 20$.\nStep 2: The three parts total $8k + 5k + 2k = 15k$ grams.\nStep 3: $15(20) = 300$ grams.\nCheck: $160 + 100 + 40 = 300$, and $160 : 100 : 40$ reduces to $8 : 5 : 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($140$): This is the mass of the seeds and raisins, $5k + 2k$, rather than the whole bag.\n* Choice C ($480$): This matches the $160$ grams to the $5$-part term, giving $k = 32$ and a total of $480$ grams.\n* Choice D ($1{,}200$): This matches the $160$ grams to the $2$-part term, giving $k = 80$ and a total of $1{,}200$ grams.\n\n**Test Day Takeaway:** Anchor the size of one part on the quantity you are given, then multiply by whichever number of parts the question asks for.",
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
    question: "A garden has ferns, orchids, and succulents in the ratio $5 : 3 : 7$, respectively. There are $450$ of these plants in all. How many more succulents than ferns are there?",
    choices: [
      // distractor: 30 is the size of one part, not the 7 - 5 = 2 parts by which succulents exceed ferns
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
    question: "A $360$-gram bar of metal is made of gold, silver, and copper in the ratio $15 : 3 : 2$ by mass, respectively. What is the mass, in grams, of the silver in the bar?",
    correctAnswer: "54",
    explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**The correct answer is $54$.**\n\n**The Fast Way (~15s):** The ratio has $15 + 3 + 2 = 20$ parts, so one part is $360 \\div 20 = 18$ grams. Silver is $3$ parts: $3(18) = 54$ grams.\n\n**The Full Solution:**\nStep 1: Add the ratio numbers to get the total number of parts: $15 + 3 + 2 = 20$.\nStep 2: The whole bar, $360$ grams, is spread over $20$ parts, so one part is $\\frac{360}{20} = 18$ grams.\nStep 3: Silver accounts for $3$ parts: $3 \\times 18 = 54$ grams. Check: gold is $15 \\times 18 = 270$ grams and copper is $2 \\times 18 = 36$ grams, and $270 + 54 + 36 = 360$ ✓\n\n**Common Mistakes:**\n* $120$: divides $360$ by the silver number $3$ instead of by the total number of parts.\n* $18$: reports the mass of one part rather than the $3$ parts that are silver.\n* $60$: adds only $15 + 3 = 18$ parts, leaving out copper, so one part looks like $20$ grams.\n\n**Test Day Takeaway:** Total $\\div$ (sum of the ratio parts) gives the size of one part; then multiply by the number of parts the question actually asks about.",
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
    question: "A garden has red, yellow, and white tulips in the ratio $5 : 3 : 2$, respectively. There are $90$ more red tulips than white tulips. How many tulips in the garden are not yellow?",
    choices: [
      // distractor: the yellow count, 3 parts x 30 = 90 (also equal to the given difference), when the question asks for tulips that are NOT yellow
      { id: "A", text: "$90$" },
      // distractor: the red count alone (5 parts), dropping the white tulips
      { id: "B", text: "$150$" },
      { id: "C", text: "$210$" },
      // distractor: the total of all 10 parts, never removing the yellow tulips
      { id: "D", text: "$300$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Red minus white is $5 - 2 = 3$ parts, and that difference is $90$ tulips, so one part is $30$. Not yellow means red plus white, $5 + 2 = 7$ parts: $7(30) = 210$.\n\n**The Full Solution:**\nStep 1: Let one part be $k$ tulips. Then red $= 5k$, yellow $= 3k$, white $= 2k$.\nStep 2: The difference between red and white is given: $5k - 2k = 90$, so $3k = 90$ and $k = 30$.\nStep 3: The tulips that are not yellow are the red and white ones: $5k + 2k = 7k = 7(30) = 210$. Check: red $= 150$, white $= 60$, and $150 - 60 = 90$ ✓ Yellow $= 90$, and the total $150 + 90 + 60 = 300$ minus the $90$ yellow tulips is $210$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($90$): This is the number of yellow tulips, $3k = 90$ (it happens to equal the given difference), but the question asks for the tulips that are *not* yellow.\n* Choice B ($150$): This is the red count alone, $5k$; it leaves out the $60$ white tulips.\n* Choice D ($300$): This is the total of all three colors, $10k$; the $90$ yellow tulips were never removed.\n\n**Test Day Takeaway:** When a ratio problem gives a difference instead of a total, set the difference of the parts equal to it to find one part, then reread exactly which parts the question wants.",
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
    question: "The ratio of $a$ to $b$ is $3$ to $2$, and the ratio of $b$ to $c$ is $4$ to $5$. If $a + b + c = 450$, what is the value of $c$?",
    correctAnswer: "150",
    explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**The correct answer is $150$.**\n\n**The Fast Way (~25s):** Rewrite $3 : 2$ as $6 : 4$ so that $b$ matches in both ratios: $a : b : c = 6 : 4 : 5$, which is $15$ parts. One part is $\\frac{450}{15} = 30$, so $c = 5(30) = 150$.\n\n**The Full Solution:**\nStep 1: The value $b$ is $2$ parts in the first ratio and $4$ parts in the second. Multiply the first ratio by $2$: $a : b = 6 : 4$. Now both ratios give $b$ as $4$ parts.\nStep 2: Combine the ratios: $a : b : c = 6 : 4 : 5$. The total is $6 + 4 + 5 = 15$ parts, and $a + b + c = 450$, so one part is $\\frac{450}{15} = 30$.\nStep 3: The value $c$ is $5$ parts: $c = 5(30) = 150$. Check: $a = 180$ and $b = 120$, so $180 + 120 + 150 = 450$, $\\frac{180}{120} = \\frac{3}{2}$, and $\\frac{120}{150} = \\frac{4}{5}$ ✓\n\n**Common Mistakes:**\n* $225$: joins the ratios as $3 : 2 : 5$ without matching $b$, which gives $10$ parts of $45$.\n* $187.5$: writes $3 : 4 : 5$, using $b$'s number from the second ratio but not scaling $a$, which gives $12$ parts of $37.5$.\n* $180$: finds the parts correctly but reports $a$ instead of $c$.\n\n**Test Day Takeaway:** When two ratios share a quantity, scale one of them so the shared quantity has the same number in both before combining them into a single three-part ratio.",
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
    question: "The dot plot shows the number of eggs in each of $8$ nests. A ninth nest with $13$ eggs is added to the data. What is the mean number of eggs per nest for the $9$ nests?",
    diagram: { type: "dotPlot", params: { data: [{ value: 2, count: 1 }, { value: 3, count: 2 }, { value: 4, count: 3 }, { value: 5, count: 1 }, { value: 7, count: 1 }], xMin: 1, xMax: 8, xLabel: "Number of eggs" } },
    correctAnswer: "5",
    explanation: "**SAT Pattern: Outlier Effect**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** The $8$ nests hold $2 + 3 + 3 + 4 + 4 + 4 + 5 + 7 = 32$ eggs. Adding $13$ gives $45$ eggs in $9$ nests, so the mean is $\\frac{45}{9} = 5$.\n\n**The Full Solution:**\nStep 1: Read the dot plot by column height: one nest with $2$ eggs, two with $3$, three with $4$, one with $5$, one with $7$. The sum is $2 + 6 + 12 + 5 + 7 = 32$.\nStep 2: Add the ninth nest: the new sum is $32 + 13 = 45$, and the new count is $9$.\nStep 3: Mean $= \\frac{45}{9} = 5$. Check: the original mean was $\\frac{32}{8} = 4$; adding a value above the mean must raise it, and $5 > 4$ ✓\n\n**Common Mistakes:**\n* $5.625$: divides $45$ by $8$, forgetting that the count grew to $9$.\n* $8.5$: averages the old mean and the new value, $\\frac{4 + 13}{2}$, as if each counted once.\n* About $3.78$: counts each column once instead of by its height, giving $2 + 3 + 4 + 5 + 7 + 13 = 34$ and $\\frac{34}{9}$.\n\n**Test Day Takeaway:** Adding a value changes both the sum and the count: new mean $= \\dfrac{\\text{old sum} + \\text{new value}}{\\text{old count} + 1}$.",
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
    question: "A data set has a mean of $37$ and a median of $40$. If $4$ is subtracted from each value, what are the new mean and median?",
    choices: [
      // distractor: treats the subtraction as leaving both statistics unchanged
      { id: "A", text: "Mean $37$, median $40$" },
      // distractor: shifts the median but not the mean; the mean is built from every value, so it shifts too
      { id: "B", text: "Mean $37$, median $36$" },
      // distractor: shifts the mean but not the median; the middle values move with everything else
      { id: "C", text: "Mean $33$, median $40$" },
      { id: "D", text: "Mean $33$, median $36$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Subtracting the same $4$ from every value slides the whole data set down by $4$: the mean becomes $37 - 4 = 33$ and the median becomes $40 - 4 = 36$.\n\n**The Full Solution:**\nStep 1: The mean is the sum divided by the number of values, $n$. Each of the $n$ values drops by $4$, so the sum drops by $4n$ and the mean drops by $\\frac{4n}{n} = 4$, to $33$.\nStep 2: Subtracting a constant does not change the order of the values, so the middle value (or the two middle values) stays in the middle and drops by $4$. The median drops by $4$, to $36$.\nStep 3: Check with a small example: $1, 2, 9$ has mean $4$ and median $2$; subtracting $4$ gives $-3, -2, 5$, with mean $0$ and median $-2$, both exactly $4$ lower ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (mean $37$, median $40$): treats the change as cosmetic, but every value moved, so both measures of center move with them.\n* Choice B (mean $37$, median $36$): shifts the median but not the mean, yet the mean is computed from every value and every value dropped.\n* Choice C (mean $33$, median $40$): shifts the mean but not the median; the middle values dropped by $4$ like all the others.\n\n**Test Day Takeaway:** Adding or subtracting a constant from every value shifts the mean and the median by that constant; measures of spread, such as the range and standard deviation, do not change.",
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
    question: "$22$, $25$, $28$, $30$, $31$, $34$, $40$, $86$\nThe list shows the values in a data set. If the value $86$ is removed, by how much does the mean of the data set decrease?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Outlier Effect**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~25s):** The $8$ values sum to $296$, so the mean is $37$. Without $86$, the other $7$ values sum to $210$, so the mean is $30$. The mean decreases by $37 - 30 = 7$.\n\n**The Full Solution:**\nStep 1: Find the original mean: $22 + 25 + 28 + 30 + 31 + 34 + 40 + 86 = 296$, and $\\frac{296}{8} = 37$.\nStep 2: Remove $86$: the remaining sum is $296 - 86 = 210$ and the count is $7$, so the new mean is $\\frac{210}{7} = 30$.\nStep 3: The decrease is $37 - 30 = 7$. Check: $86$ sits $86 - 37 = 49$ above the old mean, and spreading that excess over the $7$ remaining values gives $\\frac{49}{7} = 7$ ✓\n\n**Common Mistakes:**\n* $30$: reports the new mean instead of how much the mean decreased.\n* $10.75$: divides $86$ by $8$, as if removing a value only shrank the sum and not the count.\n* $6.125$: divides the excess, $49$, by the original count of $8$ instead of the $7$ values that remain.\n\n**Test Day Takeaway:** An outlier pulls the mean toward itself; to measure the pull, compute the mean with and without it and subtract, remembering that removing a value changes both the sum and the count.",
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
    question: "The dot plot shows the number of books each of $7$ students read last month. An eighth student, who read $19$ books, is added to the data. Which of the following correctly compares the changes in the mean and the median?",
    diagram: { type: "dotPlot", params: { data: [{ value: 3, count: 1 }, { value: 4, count: 2 }, { value: 5, count: 1 }, { value: 6, count: 2 }, { value: 7, count: 1 }], xMin: 2, xMax: 8, xLabel: "Number of books" } },
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
    explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The $7$ values are $3, 4, 4, 5, 6, 6, 7$: sum $35$, mean $5$, median $5$. With $19$ added, the mean is $\\frac{54}{8} = 6.75$ and the median is $\\frac{5 + 6}{2} = 5.5$. The mean rose $1.75$; the median rose only $0.5$.\n\n**The Full Solution:**\nStep 1: Read the plot: $3, 4, 4, 5, 6, 6, 7$. Sum $= 35$, so the mean is $\\frac{35}{7} = 5$; the median is the 4th of the $7$ ordered values, $5$.\nStep 2: New data set: $3, 4, 4, 5, 6, 6, 7, 19$. Sum $= 54$, so the mean is $\\frac{54}{8} = 6.75$, an increase of $1.75$.\nStep 3: With $8$ values the median is the average of the 4th and 5th values: $\\frac{5 + 6}{2} = 5.5$, an increase of $0.5$. Check: $19$ is far above every other value, and an extreme value pulls the mean much more than the median ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: Reverses the sizes. The median can only move to the average of the two middle values, from $5$ to $5.5$, while the mean absorbs the whole $19$.\n* Choice C: The median does change, from $5$ to $5.5$, because the count went from odd ($7$) to even ($8$) and the median is now an average of two values.\n* Choice D: An outlier never moves the mean and the median by the same amount; here $1.75$ versus $0.5$.\n\n**Test Day Takeaway:** A high outlier drags the mean a lot and the median a little or not at all; when the count changes parity, recompute the median as the average of the two middle values.",
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
    question: "A data set has $30$ values. Twenty-nine of the values are between $10$ and $20$, and the other value is $400$. Which of the following correctly compares the mean and the median of the data set?",
    choices: [
      { id: "A", text: "The mean is greater than the median." },
      // distractor: reverses the pull; a single unusually large value raises the mean above the median, it does not lower it
      { id: "B", text: "The mean is less than the median." },
      // distractor: assumes the two measures of center always agree, which holds only for a symmetric distribution
      { id: "C", text: "The mean is equal to the median." },
      // distractor: treats the comparison as unknowable, but the mean is at least 23 while the median is at most 20
      { id: "D", text: "The comparison cannot be determined from the information given." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The median sits among the $29$ values from $10$ to $20$, so it is at most $20$. The value $400$ pushes the sum so high that the mean is at least $\\frac{29(10) + 400}{30} = 23$. The mean is greater than the median.\n\n**The Full Solution:**\nStep 1: Locate the median. With $30$ values, the median is the average of the $15$th and $16$th values in order. The value $400$ is the greatest, so both middle values are among the $29$ values between $10$ and $20$, and the median is at most $20$.\nStep 2: Find the least possible mean. The sum is smallest when all $29$ other values equal $10$: $29(10) + 400 = 690$, and $\\frac{690}{30} = 23$. So the mean is at least $23$.\nStep 3: Compare: the mean is at least $23$ and the median is at most $20$, so the mean is greater than the median. Check with the opposite extreme: if the $29$ values all equal $20$, the mean is $\\frac{580 + 400}{30} \\approx 32.7$, still above $20$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: describes what a single unusually small value would do. This value is far above the others.\n* Choice C: holds for a symmetric distribution, and one extreme value on one side destroys the symmetry.\n* Choice D: the individual values are unknown, but the bounds in Steps 1 and 2 settle the comparison.\n\n**Test Day Takeaway:** The mean responds to the size of every value, while the median responds only to position, so one extreme value pulls the mean toward itself and leaves the median among the typical values.",
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
    question: "In a data set of $15$ values, the greatest value is increased by $40$. Which of the following must be true?",
    choices: [
      { id: "A", text: "The mean increases and the median is unchanged." },
      // distractor: reverses the two measures; changing one value always changes the sum and therefore the mean
      { id: "B", text: "The mean is unchanged and the median increases." },
      // distractor: assumes the median follows the greatest value, but the median depends only on the eighth value in order
      { id: "C", text: "Both the mean and the median increase." },
      // distractor: assumes an extreme value affects neither measure, though it is part of the sum
      { id: "D", text: "Both the mean and the median are unchanged." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The greatest value stays the greatest, so the eighth value in order, the median, does not move. The sum rises by $40$, so the mean rises by $\\frac{40}{15}$.\n\n**The Full Solution:**\nStep 1: Track the mean. Exactly one value increases by $40$, so the sum increases by $40$ and the mean increases by $\\frac{40}{15} \\approx 2.67$.\nStep 2: Track the median. With $15$ values, the median is the eighth value in increasing order. The changed value was already the greatest and is still the greatest, so the first fourteen values in order are the same as before, and the eighth value is unchanged.\nStep 3: The mean increases and the median is unchanged. Check: the values $10, 11, \\ldots, 24$ have median $17$ and mean $17$; raising $24$ to $64$ leaves the median at $17$ and raises the mean to $\\frac{295}{15} \\approx 19.67$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: has the effects backward. Any change to one value changes the sum, so the mean cannot stay the same.\n* Choice C: assumes the median follows the greatest value, but only the eighth value in order matters, and it did not change.\n* Choice D: treats the change as irrelevant to both measures, but the changed value is part of the sum.\n\n**Test Day Takeaway:** Ask what each statistic depends on: the mean depends on the sum, and the median depends on one position, so stretching a value that is already at an end moves only the mean.",
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
    question: "A data set has $16$ values. When a seventeenth value is added to the data set, the mean increases by $2$. Which of the following must be true about the added value?",
    choices: [
      // distractor: reports the shift in the mean itself rather than how far the new value must sit above the original mean
      { id: "A", text: "It is $2$ greater than the original mean." },
      // distractor: reads the new count, 17, as the distance instead of multiplying it by the shift of 2
      { id: "B", text: "It is $17$ greater than the original mean." },
      // distractor: uses the original count, computing 16(2) = 32 instead of 17(2) = 34
      { id: "C", text: "It is $32$ greater than the original mean." },
      { id: "D", text: "It is $34$ greater than the original mean." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** All $17$ values now average $2$ more than the old mean, so the new value must supply $17(2) = 34$ above the old mean.\n\n**The Full Solution:**\nStep 1: Let $m$ be the original mean. The $16$ original values sum to $16m$.\nStep 2: The new mean is $m + 2$, so the $17$ values sum to $17(m + 2) = 17m + 34$.\nStep 3: Subtract to isolate the added value: $(17m + 34) - 16m = m + 34$, which is $34$ greater than the original mean. Check with $m = 50$: the original sum is $800$, adding $84$ gives $884$, and $\\frac{884}{17} = 52 = 50 + 2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: reports the $2$-unit shift itself. One value must carry the shift for all $17$ values, not just for itself.\n* Choice B: reads the new count, $17$, as the distance instead of multiplying it by the shift of $2$.\n* Choice C: multiplies the shift by the original count, $16(2) = 32$, but the new mean is spread over $17$ values.\n\n**Test Day Takeaway:** When one new value raises a mean by $d$, it must sit $d$ times the new count above the old mean, so multiply by the new count, not the old one.",
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
    question: "A list of $12$ numbers has a mean of $58$. When the number $214$ in the list is replaced with the number $k$, the mean of the list decreases to $52$. What is the value of $k$?",
    correctAnswer: "142",
    explanation: "**SAT Pattern: Outlier Effect**\n\n**The correct answer is $142$.**\n\n**The Fast Way (~30s):** The mean fell by $6$ across $12$ numbers, so the sum fell by $12(6) = 72$. The replacement is $72$ less than $214$: $k = 142$.\n\n**The Full Solution:**\nStep 1: Convert both means into sums: the original sum is $12(58) = 696$, and the new sum is $12(52) = 624$.\nStep 2: Only one number changed, so the change in the sum is the change in that number: $696 - 624 = 72$.\nStep 3: The replacement is $72$ less than the number it replaced: $k = 214 - 72 = 142$. Check: $\\frac{696 - 214 + 142}{12} = \\frac{624}{12} = 52$ ✓\n\n**Common Mistakes:**\n* $208$: subtracts the drop in the mean, $6$, from $214$ instead of the drop in the sum, $72$.\n* $286$: adds $72$ to $214$, moving the number in the wrong direction for a mean that decreased.\n* $72$: reports the change in the sum instead of the new number.\n\n**Test Day Takeaway:** When one value in a list is replaced, the change in the sum, which is the count times the change in the mean, equals the change in that one value.",
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
    question: "The scatterplot shows the relationship between two variables, $x$ and $y$. An equation of the line of best fit shown is $y = 96 - 8x$. Based on the line of best fit, what is the predicted value of $y$ when $x = 7$?",
    diagram: { type: "scatterplot", params: { points: [[1, 92], [2, 76], [3, 74], [4, 60], [5, 58], [6, 44], [7, 42], [8, 34], [9, 22]], xMin: 0, xMax: 10, yMin: 0, yMax: 100, xGridStep: 1, xLabelStep: 2, yGridStep: 10, yLabelStep: 20, xLabel: "x", yLabel: "y", bestFitLine: { slope: -8, intercept: 96 } } },
    correctAnswer: "40",
    explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**The correct answer is $40$.**\n\n**The Fast Way (~15s):** Substitute $x = 7$ into $y = 96 - 8x$: $96 - 56 = 40$.\n\n**The Full Solution:**\nStep 1: The question asks for the value the line of best fit predicts, so use the equation of the line, not the plotted point.\nStep 2: Substitute $x = 7$: $y = 96 - 8(7) = 96 - 56 = 40$.\nStep 3: Check against the scatterplot: the data point with $x = 7$ is at $y = 42$, just above the line at $40$ ✓\n\n**Common Mistakes:**\n* $42$: reads the plotted point, the actual value, instead of the predicted value.\n* $152$: computes $96 + 8(7)$, dropping the minus sign on the slope.\n* $88$: subtracts $8$ only once, $96 - 8$, instead of $8(7)$.\n\n**Test Day Takeaway:** \"Predicted\" means substitute into the equation of the line of best fit; a plotted point is an actual value and answers a different question.",
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
    question: "The scatterplot shows the remaining charge $y$, as a percent, of a laptop battery after $x$ hours of use. An equation of the line of best fit shown is $y = -12x + 98$. Based on the line of best fit, what is the predicted remaining charge, as a percent, after $5$ hours of use?",
    diagram: { type: "scatterplot", params: { points: [[0, 96], [1, 88], [2, 72], [3, 64], [4, 48], [5, 40], [6, 24], [7, 16]], xMin: 0, xMax: 8, yMin: 0, yMax: 100, xGridStep: 1, yGridStep: 10, xLabelStep: 1, yLabelStep: 20, xLabel: "Hours of use", yLabel: "Charge (%)", bestFitLine: { slope: -12, intercept: 98 } } },
    correctAnswer: "38",
    explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**The correct answer is $38$.**\n\n**The Fast Way (~10s):** $y = -12(5) + 98 = -60 + 98 = 38$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 5$ into the equation: $-12 \\times 5 = -60$.\nStep 2: Add the intercept: $-60 + 98 = 38$ percent.\nStep 3: Check the sign and the graph: the slope is negative, so the charge falls $12$ points per hour, and the plotted point at $x = 5$ is $(5, 40)$, close to the line's $38$ ✓\n\n**Common Mistakes:**\n* $158$: drops the negative sign and computes $12(5) + 98$, which is impossible for a percent of charge.\n* $40$: reads the plotted point at $x = 5$ instead of the line's prediction.\n* $86$: subtracts the slope once, $98 - 12$, instead of five times.\n\n**Test Day Takeaway:** A negative slope subtracts; multiply the slope by the full $x$-value before adding the intercept.",
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
    question: "The scatterplot shows the time $x$, in minutes, that each of $11$ customers spent in a store and the amount $y$, in dollars, each customer spent. An equation of the line of best fit shown is $y = 0.4x + 9$. For what value of $x$ does the line of best fit predict an amount spent of \\$25?",
    diagram: { type: "scatterplot", params: { points: [[5, 12], [10, 11], [15, 16], [20, 18], [25, 17], [30, 22], [35, 24], [40, 23], [45, 28], [50, 30], [55, 32]], xMin: 0, xMax: 60, yMin: 0, yMax: 40, xGridStep: 5, yGridStep: 5, xLabelStep: 10, yLabelStep: 10, xLabel: "Minutes in store", yLabel: "Amount spent (dollars)", bestFitLine: { slope: 0.4, intercept: 9 } } },
    correctAnswer: "40",
    explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**The correct answer is $40$.**\n\n**The Fast Way (~15s):** Set $y = 25$: $0.4x + 9 = 25$, so $0.4x = 16$ and $x = 40$.\n\n**The Full Solution:**\nStep 1: The output is given, so solve the model backward. Set $0.4x + 9 = 25$.\nStep 2: Subtract $9$ from both sides: $0.4x = 16$.\nStep 3: Divide by $0.4$: $x = \\frac{16}{0.4} = 40$ minutes. Check: $0.4(40) + 9 = 16 + 9 = 25$, and on the scatterplot the line passes near $(40, 25)$, just above the data point $(40, 23)$ ✓\n\n**Common Mistakes:**\n* $19$: substitutes $25$ for $x$ instead of $y$ and reports the resulting $y$-value.\n* $53.5$: divides by $0.4$ before subtracting $9$, getting $62.5 - 9$.\n* $6.4$: multiplies $16$ by $0.4$ instead of dividing.\n\n**Test Day Takeaway:** When the predicted value is given, undo the equation in reverse order: subtract the intercept, then divide by the slope.",
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
    question: "The scatterplot shows the relationship between two variables, $x$ and $y$. An equation of the line of best fit shown is $y = 2.4x + 15$. Based on the line of best fit, by how much does the predicted value of $y$ increase when $x$ increases from $20$ to $35$?",
    diagram: { type: "scatterplot", params: { points: [[5, 30], [10, 36], [15, 55], [20, 60], [25, 72], [30, 90], [35, 96], [40, 115], [45, 120], [50, 132], [55, 150]], xMin: 0, xMax: 60, yMin: 0, yMax: 160, xGridStep: 5, xLabelStep: 10, yGridStep: 20, yLabelStep: 40, xLabel: "x", yLabel: "y", bestFitLine: { slope: 2.4, intercept: 15 } } },
    choices: [
      // distractor: reports the y-intercept 15, which also equals the change in x, 35 - 20
      { id: "A", text: "$15$" },
      { id: "B", text: "$36$" },
      // distractor: reports the predicted value at x = 20, 2.4(20) + 15 = 63, instead of the change
      { id: "C", text: "$63$" },
      // distractor: reports the predicted value at x = 35, 2.4(35) + 15 = 99, instead of the change
      { id: "D", text: "$99$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** An increase of $15$ in $x$ changes the prediction by the slope times $15$: $2.4(15) = 36$.\n\n**The Full Solution:**\nStep 1: Predict at both values. At $x = 20$: $y = 2.4(20) + 15 = 63$. At $x = 35$: $y = 2.4(35) + 15 = 99$.\nStep 2: Subtract: the predicted value of $y$ increases by $99 - 63 = 36$.\nStep 3: Check with the slope: $2.4$ is the predicted increase in $y$ per $1$-unit increase in $x$, and $2.4(35 - 20) = 36$; the $15$ cancels in the difference ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): is the $y$-intercept, and also the change in $x$, but not the change in the predicted $y$.\n* Choice C ($63$): is the predicted value at $x = 20$, one endpoint rather than the difference.\n* Choice D ($99$): is the predicted value at $x = 35$, the other endpoint.\n\n**Test Day Takeaway:** A change in a linear prediction is the slope times the change in the input; the intercept never appears in a difference.",
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
    question: "The scatterplot shows the temperature $y$, in degrees Celsius, of a pot of water $x$ minutes after it was removed from a stove. An equation of the line of best fit shown is $y = -2.4x + 85$. What is the best interpretation of $85$ in this context?",
    diagram: { type: "scatterplot", params: { points: [[0, 86], [3, 80], [6, 68], [9, 66], [12, 54], [15, 50], [18, 44], [21, 32], [24, 30], [27, 22], [30, 12]], xMin: 0, xMax: 30, yMin: 0, yMax: 100, xGridStep: 3, yGridStep: 10, xLabelStep: 6, yLabelStep: 20, xLabel: "Minutes after removal", yLabel: "Temperature (°C)", bestFitLine: { slope: -2.4, intercept: 85 } } },
    choices: [
      // distractor: confuses the intercept with the slope; the rate is 2.4 degrees per minute
      { id: "A", text: "The temperature of the water is predicted to decrease by $85$ degrees Celsius each minute." },
      // distractor: treats 85 as a time; setting y = 0 gives x about 35.4 minutes
      { id: "B", text: "The water is predicted to reach $0$ degrees Celsius $85$ minutes after it was removed from the stove." },
      { id: "C", text: "The predicted temperature of the water at the moment it was removed from the stove is $85$ degrees Celsius." },
      // distractor: reads the intercept as the value at x = 1; at x = 1 the prediction is 82.6
      { id: "D", text: "The predicted temperature of the water $1$ minute after it was removed from the stove is $85$ degrees Celsius." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The $y$-intercept is the predicted $y$ when $x = 0$, and $x = 0$ is the moment of removal: the predicted temperature of the water then is $85$ degrees Celsius.\n\n**The Full Solution:**\nStep 1: In $y = -2.4x + 85$, the constant $85$ is the predicted value of $y$ when $x = 0$.\nStep 2: In this context $x = 0$ means zero minutes after removal, that is, the moment the water was removed from the stove.\nStep 3: Check: the rate of cooling, $2.4$ degrees per minute, is the slope, a separate quantity, and the plotted point $(0, 86)$ sits close to the line at $85$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: Describes a slope, and the slope here is $-2.4$, not $-85$.\n* Choice B: Treats $85$ as a time. Setting $y = 0$ gives $x = \\frac{85}{2.4} \\approx 35.4$ minutes, and in any case the intercept is a temperature, not a time.\n* Choice D: Reads the intercept as the value at $x = 1$; at $x = 1$ the prediction is $-2.4 + 85 = 82.6$.\n\n**Test Day Takeaway:** The $y$-intercept is the prediction at $x = 0$; translate \"$x = 0$\" into the starting moment of the context.",
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
    question: "The scatterplot shows the number of hours $x$ that each of $11$ students spent studying for a quiz and the score $y$ each student earned on the quiz. An equation of the line of best fit shown is $y = 2.75x + 6.5$. What is the predicted score for a student who spent $4$ hours studying?",
    diagram: { type: "scatterplot", params: { points: [[0, 6], [1, 10], [1, 9], [2, 12], [2, 13], [3, 15], [3, 14], [4, 18], [5, 20], [5, 21], [6, 23]], xMin: 0, xMax: 7, yMin: 0, yMax: 28, xGridStep: 1, yGridStep: 2, xLabelStep: 1, yLabelStep: 4, xLabel: "Hours spent studying", yLabel: "Quiz score", bestFitLine: { slope: 2.75, intercept: 6.5 } } },
    correctAnswer: "17.5",
    explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**The correct answer is $17.5$.**\n\n**The Fast Way (~10s):** $y = 2.75(4) + 6.5 = 11 + 6.5 = 17.5$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 4$ into the equation of the line: $2.75 \\times 4 = 11$.\nStep 2: Add the $y$-intercept: $11 + 6.5 = 17.5$.\nStep 3: Check against the scatterplot: the data point at $x = 4$ is $(4, 18)$, just above the line's $17.5$ ✓\n\n**Common Mistakes:**\n* $13.25$: adds the slope $2.75$, the $4$ hours, and the $y$-intercept $6.5$ instead of multiplying the slope by $4$.\n* $18$: reads the plotted point at $x = 4$ instead of the line's prediction.\n* $11$: multiplies the slope by $4$ but forgets the $y$-intercept.\n\n**Test Day Takeaway:** Multiply the slope by $x$ first, then add the $y$-intercept, and keep the decimal exact: $17.5$, not $18$.",
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
    question: "The scatterplot shows the number of radio ads $x$ run for each of $10$ events and the attendance $y$ at each event. An equation of the line of best fit shown is $y = 2.5x + 18$. What is the least number of radio ads for which the line of best fit predicts an attendance greater than $100$?",
    diagram: { type: "scatterplot", params: { points: [[4, 30], [8, 35], [12, 52], [16, 55], [20, 70], [24, 74], [28, 92], [32, 95], [36, 112], [40, 115]], xMin: 0, xMax: 44, yMin: 0, yMax: 130, xGridStep: 4, xLabelStep: 8, yGridStep: 10, yLabelStep: 20, xLabel: "Radio ads", yLabel: "Attendance", bestFitLine: { slope: 2.5, intercept: 18 } } },
    correctAnswer: "33",
    explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**The correct answer is $33$.**\n\n**The Fast Way (~25s):** Solve $2.5x + 18 > 100$ to get $x > 32.8$, so the least integer is $33$.\n\n**The Full Solution:**\nStep 1: Write the inequality. The predicted attendance exceeds $100$ when $2.5x + 18 > 100$.\nStep 2: Solve. Subtract $18$: $2.5x > 82$. Divide by $2.5$: $x > 32.8$.\nStep 3: Pick the least integer and verify. The least integer greater than $32.8$ is $33$, and $2.5(33) + 18 = 100.5 > 100$, while $2.5(32) + 18 = 98 < 100$ ✓\n\n**Common Mistakes:**\n* Rounding $32.8$ down to $32$ gives a prediction of $98$, which does not exceed $100$.\n* Dividing $100$ by $2.5$ gives $40$, which ignores the intercept $18$.\n* Using the plotted point nearest an attendance of $100$ reads the data instead of the model.\n\n**Test Day Takeaway:** For a \"least integer\" threshold, solve the inequality exactly, then test the integer you choose and the one below it.",
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
    question: "The scatterplot shows the number of visitors $x$, in hundreds, to a museum and the museum shop's sales $y$, in hundreds of dollars, on each of $12$ days. An equation of the line of best fit shown is $y = 0.65x + 21$. Based on the line of best fit, if the number of visitors increases by $1{,}200$, by how many hundreds of dollars do the predicted sales increase?",
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
    explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $x$ is in hundreds, so $1{,}200$ visitors is a change of $12$ in $x$. The change in the predicted $y$ is the slope times the change in $x$: $0.65(12) = 7.8$ hundred dollars.\n\n**The Full Solution:**\nStep 1: Convert the change to the model's units: $1{,}200$ visitors $= 12$ hundreds, so $\\Delta x = 12$.\nStep 2: For a linear model, the change in the predicted $y$ is $0.65 \\times 12 = 7.8$; the intercept $21$ cancels when two predictions are subtracted.\nStep 3: Check with two actual predictions: $x = 40$ gives $0.65(40) + 21 = 47$, and $x = 52$ gives $0.65(52) + 21 = 54.8$; the difference is $54.8 - 47 = 7.8$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.65$): The slope by itself is the increase per $1$ unit of $x$, that is, per $100$ visitors, not per $1{,}200$.\n* Choice C ($21$): The intercept plays no role in a change; it cancels when predictions are subtracted.\n* Choice D ($780$): Uses $\\Delta x = 1{,}200$ instead of $12$, ignoring that $x$ is measured in hundreds.\n\n**Test Day Takeaway:** Read the units on both axes; a change in the prediction is slope $\\times \\Delta x$, and $\\Delta x$ must be expressed in the model's units.",
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
    question: "The table shows the distribution of frame size and frame material for the $180$ bicycles in a store. One of the large bicycles will be selected at random. What is the probability of selecting a bicycle with an aluminum frame?",
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
    explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Restrict to the Large row: $75$ of its $100$ bicycles are aluminum, so the probability is $\\frac{75}{100} = \\frac{3}{4}$.\n\n**The Full Solution:**\nStep 1: \"One of the large bicycles will be selected\" means the sample space is the Large row, whose total is $100$.\nStep 2: Within that row, the aluminum count is $75$.\nStep 3: Probability $= \\frac{75}{100} = \\frac{3}{4}$. Check: $\\frac{3}{4}$ of $100$ is $75$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{4}$): This is $\\frac{25}{100}$, the probability that a large bicycle has a steel frame, the complement of what was asked.\n* Choice B ($\\frac{5}{12}$): This is $\\frac{75}{180}$, dividing by the grand total instead of the $100$ large bicycles.\n* Choice C ($\\frac{25}{41}$): This is $\\frac{75}{123}$, conditioning on aluminum instead of large; it answers \"given aluminum, what is the probability of large?\"\n\n**Test Day Takeaway:** The \"given\" group is the denominator; find that row or column total first, then take the matching cell as the numerator.",
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
    question: "The table shows the results of planting $240$ seeds of two varieties. If one of the seeds that did not germinate is selected at random, what is the probability that it is an heirloom seed? (Express your answer as a decimal or fraction, not as a percent.)",
    diagram: { type: "twoWayTable", params: { headers: ["", "Germinated", "Did not germinate", "Total"], rows: [["Heirloom", "84", "36", "120"], ["Hybrid", "96", "24", "120"], ["Total", "180", "60", "240"]] } },
    correctAnswer: "3/5",
    explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**The correct answer is $\\frac{3}{5}$.**\n\n**The Fast Way (~10s):** Of the $60$ seeds that did not germinate, $36$ are heirloom: $\\frac{36}{60} = \\frac{3}{5}$.\n\n**The Full Solution:**\nStep 1: The condition \"did not germinate\" restricts the sample space to that column, whose total is $60$.\nStep 2: The heirloom entry in that column is $36$.\nStep 3: Probability $= \\frac{36}{60} = \\frac{3}{5}$, which can also be entered as $0.6$. Check: $\\frac{3}{5}$ of $60$ is $36$ ✓\n\n**Common Mistakes:**\n* $\\frac{3}{10}$: divides by the heirloom total, $\\frac{36}{120}$, which is the probability that an heirloom seed did not germinate, the condition reversed.\n* $\\frac{3}{20}$: divides by all $240$ seeds instead of the $60$ that did not germinate.\n* $\\frac{2}{5}$: uses the hybrid entry, $\\frac{24}{60}$, the complement of what was asked.\n\n**Test Day Takeaway:** Find the row or column named after the \"given\" condition; its total is the denominator, and the cell inside it is the numerator.",
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
    question: "The table shows the distribution of $320$ library loans by format and by the age group of the borrower. One of these loans will be selected at random. What is the probability of selecting a loan to a borrower in the $18$ to $64$ age group, given that the loan is not a print loan?",
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
    explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Non-print loans are audio plus e-book: $62 + 138 = 200$. Of these, the $18$ to $64$ row has $36 + 84 = 120$, so the probability is $\\frac{120}{200} = \\frac{3}{5}$.\n\n**The Full Solution:**\nStep 1: The condition \"not a print loan\" combines the Audio and E-book columns. Their totals are $62$ and $138$, so the denominator is $200$ (equivalently, $320 - 120 = 200$).\nStep 2: In the $18$ to $64$ row, the non-print entries are $36$ (audio) and $84$ (e-book): $36 + 84 = 120$.\nStep 3: Probability $= \\frac{120}{200} = \\frac{3}{5}$. Check: $\\frac{3}{5}$ of $200$ is $120$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{8}$): This is $\\frac{120}{320}$, dividing by every loan instead of only the non-print loans.\n* Choice B ($\\frac{21}{50}$): This is $\\frac{84}{200}$, counting only the e-book loans and forgetting that audio loans are also non-print.\n* Choice D ($\\frac{12}{17}$): This is $\\frac{120}{170}$, conditioning on the age group; it answers \"given $18$ to $64$, what is the probability the loan is not print?\"\n\n**Test Day Takeaway:** A \"not X\" condition means adding the other columns (or subtracting X from the total) before you form the fraction.",
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
    question: "The table shows the distribution of $200$ volunteers at a food bank by team and by shift. One of these volunteers will be selected at random. What is the probability of selecting a volunteer who works the morning shift, given that the volunteer is not on the delivery team? (Express your answer as a decimal or fraction, not as a percent.)",
    diagram: { type: "twoWayTable", params: { headers: ["", "Morning", "Evening", "Total"], rows: [["Sorting", "44", "36", "80"], ["Delivery", "20", "40", "60"], ["Intake", "26", "34", "60"], ["Total", "90", "110", "200"]] } },
    correctAnswer: "1/2",
    explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**The correct answer is $\\frac{1}{2}$.**\n\n**The Fast Way (~15s):** Not delivery means sorting or intake: $80 + 60 = 140$ volunteers. Their morning entries are $44 + 26 = 70$, so the probability is $\\frac{70}{140} = \\frac{1}{2}$.\n\n**The Full Solution:**\nStep 1: The condition excludes the Delivery row, leaving the Sorting and Intake rows with a combined total of $80 + 60 = 140$ (or $200 - 60 = 140$).\nStep 2: The morning entries in those two rows are $44$ and $26$, a total of $70$.\nStep 3: Probability $= \\frac{70}{140} = \\frac{1}{2}$, which can also be entered as $0.5$. Check: half of $140$ is $70$ ✓\n\n**Common Mistakes:**\n* $\\frac{9}{20}$: ignores the condition and uses the Morning column, $\\frac{90}{200}$.\n* $\\frac{7}{20}$: divides the $70$ morning volunteers by all $200$ volunteers instead of the $140$ who are not on the delivery team.\n* $\\frac{1}{3}$: uses the excluded Delivery row, $\\frac{20}{60}$.\n\n**Test Day Takeaway:** Cross out the excluded row, then read both the denominator and the numerator from what remains.",
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
    question: "The table shows the distribution of $360$ passengers on a ferry by ticket type and by whether the passenger brought a vehicle. One of these passengers will be selected at random. What is the probability of selecting a passenger with a premium ticket, given that the passenger brought a vehicle?",
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
    explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The Vehicle column has $150$ passengers, $54$ of whom hold premium tickets: $\\frac{54}{150} = \\frac{9}{25}$.\n\n**The Full Solution:**\nStep 1: \"A passenger who brought a vehicle\" restricts the sample space to the Vehicle column, total $150$.\nStep 2: The premium entry in that column is $54$.\nStep 3: Probability $= \\frac{54}{150}$; divide numerator and denominator by $6$ to get $\\frac{9}{25}$. Check: $\\frac{9}{25} = 0.36$, and $0.36 \\times 150 = 54$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{20}$): This is $\\frac{54}{360}$, dividing by all passengers rather than the $150$ with vehicles.\n* Choice C ($\\frac{9}{20}$): This is $\\frac{54}{120}$, conditioning on premium ticket holders; it answers the reversed question, \"given premium, what is the probability of a vehicle?\"\n* Choice D ($\\frac{16}{25}$): This is $\\frac{96}{150}$, the standard-ticket share of the vehicle passengers, the complement of the answer.\n\n**Test Day Takeaway:** \"Given\" names the column (or row) that becomes the whole; the two easiest traps are the reversed condition and the grand total.",
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
    question: "Of $150$ applicants to a program, $90$ applied online and $60$ applied by mail. Of the applicants who were accepted, $63$ applied online and $27$ applied by mail. One of the accepted applicants will be selected at random. What is the probability of selecting an applicant who applied by mail? (Express your answer as a decimal or fraction, not as a percent.)",
    correctAnswer: "3/10",
    explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**The correct answer is $\\frac{3}{10}$.**\n\n**The Fast Way (~15s):** Accepted applicants total $63 + 27 = 90$, and $27$ of them applied by mail: $\\frac{27}{90} = \\frac{3}{10}$.\n\n**The Full Solution:**\nStep 1: Organize the counts as a two-way table: online $90$ ($63$ accepted, $27$ not) and mail $60$ ($27$ accepted, $33$ not).\nStep 2: The condition \"accepted\" makes the denominator the accepted total, $63 + 27 = 90$.\nStep 3: The mail entry among the accepted is $27$, so the probability is $\\frac{27}{90} = \\frac{3}{10}$, or $0.3$. Check: $0.3 \\times 90 = 27$ ✓\n\n**Common Mistakes:**\n* $\\frac{9}{20}$: divides by the mail total, $\\frac{27}{60}$, which is the probability that a mail applicant was accepted, the condition reversed.\n* $\\frac{9}{50}$: divides by all $150$ applicants instead of the $90$ accepted applicants.\n* $\\frac{2}{5}$: ignores the condition and finds the share of all applicants who applied by mail, $\\frac{60}{150}$.\n\n**Test Day Takeaway:** When the data come as prose, sketch the two-way table first; the \"given\" group's total is the denominator.",
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
    question: "The table shows the distribution of $500$ trees in a park by type and by height. One of these trees will be selected at random. What is the probability of selecting a pine tree, given that the tree is at least $20$ feet tall?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Under 20 feet", "20 to 40 feet", "Over 40 feet", "Total"], rows: [["Oak", "110", "50", "20", "180"], ["Maple", "70", "60", "40", "170"], ["Pine", "30", "50", "70", "150"], ["Total", "210", "160", "130", "500"]] } },
    choices: [
      // distractor: 120/500, divides by all trees
      { id: "A", text: "$\\frac{6}{25}$" },
      { id: "B", text: "$\\frac{12}{29}$" },
      // distractor: 70/130, uses only the Over 40 feet column and drops the 20 to 40 feet trees
      { id: "C", text: "$\\frac{7}{13}$" },
      // distractor: 120/150, conditions on pine instead (P(at least 20 feet | pine))
      { id: "D", text: "$\\frac{4}{5}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Trees at least $20$ feet tall are in the last two height columns: $160 + 130 = 290$. Pines contribute $50 + 70 = 120$ of them, so the probability is $\\frac{120}{290} = \\frac{12}{29}$.\n\n**The Full Solution:**\nStep 1: The condition \"at least $20$ feet tall\" combines the $20$ to $40$ feet and Over $40$ feet columns: $160 + 130 = 290$, or $500 - 210 = 290$. That is the denominator.\nStep 2: In the Pine row, the entries in those two columns are $50$ and $70$: $50 + 70 = 120$.\nStep 3: Probability $= \\frac{120}{290} = \\frac{12}{29}$. Check: $12 \\times 10 = 120$ and $29 \\times 10 = 290$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{6}{25}$): This is $\\frac{120}{500}$, dividing by every tree instead of only the $290$ that are at least $20$ feet tall.\n* Choice C ($\\frac{7}{13}$): This is $\\frac{70}{130}$, using only the Over $40$ feet column; trees from $20$ to $40$ feet tall also meet the condition.\n* Choice D ($\\frac{4}{5}$): This is $\\frac{120}{150}$, conditioning on pine; it answers \"given a pine tree, what is the probability it is at least $20$ feet tall?\"\n\n**Test Day Takeaway:** When the condition covers several columns, build the denominator from every column that qualifies, then take the same columns from the row the question asks about.",
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
    question: "Of $400$ light bulbs tested, $160$ were defective. Of the defective bulbs, $85\\%$ failed a quality check, and $36$ of the other bulbs also failed it. One of the bulbs that failed the check will be selected at random. What is the probability of selecting a bulb that is not defective?",
    choices: [
      // distractor: 36/400, divides by all bulbs tested
      { id: "A", text: "$\\frac{9}{100}$" },
      // distractor: 36/240, the probability that a bulb that is not defective fails (condition reversed)
      { id: "B", text: "$\\frac{3}{20}$" },
      { id: "C", text: "$\\frac{9}{43}$" },
      // distractor: 136/172, the probability that a bulb that failed IS defective, the complement
      { id: "D", text: "$\\frac{34}{43}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Failed bulbs: $0.85(160) + 36 = 136 + 36 = 172$. Of those, $36$ are not defective: $\\frac{36}{172} = \\frac{9}{43}$.\n\n**The Full Solution:**\nStep 1: Turn the percent into a count. Defective bulbs that failed: $0.85 \\times 160 = 136$. Bulbs that are not defective number $400 - 160 = 240$, and $36$ of them failed.\nStep 2: The condition \"failed the check\" makes the denominator the total number of failures: $136 + 36 = 172$.\nStep 3: The numerator is the failed bulbs that are not defective, $36$: $\\frac{36}{172} = \\frac{9}{43}$. Check: $\\frac{9}{43} + \\frac{34}{43} = 1$, and $\\frac{34}{43}$ of $172$ is $136$, the defective bulbs that failed ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{9}{100}$): This is $\\frac{36}{400}$, dividing by all bulbs instead of only those that failed.\n* Choice B ($\\frac{3}{20}$): This is $\\frac{36}{240}$, the probability that a bulb that is not defective fails; the condition runs the wrong way.\n* Choice D ($\\frac{34}{43}$): This is $\\frac{136}{172}$, the probability that a failed bulb is defective, the complement of what was asked.\n\n**Test Day Takeaway:** Convert every percent into a count, total the \"given\" group, and keep the direction of the condition straight: given failed, not given defective.",
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
    question: "A garden has $140$ pepper plants and $80$ cucumber plants. The number of tomato plants is $35\\%$ of the total number of pepper and cucumber plants. How many tomato plants are in the garden?",
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
    explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Combine first: $140 + 80 = 220$. Then $35\\%$ of $220$ is $0.35 \\times 220 = 77$.\n\n**The Full Solution:**\nStep 1: The percent is taken of the total number of pepper and cucumber plants, so add: $140 + 80 = 220$.\nStep 2: Convert $35\\%$ to a decimal: $0.35$.\nStep 3: Multiply: $0.35 \\times 220 = 77$ tomato plants. Check: $10\\%$ of $220$ is $22$, so $35\\%$ is $3.5 \\times 22 = 77$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($28$): $35\\%$ of the $80$ cucumber plants alone.\n* Choice B ($49$): $35\\%$ of the $140$ pepper plants alone.\n* Choice D ($297$): $220 + 77$, increasing the combined count by $35\\%$ instead of taking $35\\%$ of it.\n\n**Test Day Takeaway:** \"$p\\%$ of a total\" means add the pieces first, then multiply by $\\frac{p}{100}$.",
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
    question: "The number $n$ is $45\\%$ of the sum of $130$ and $70$. What is the value of $n$?",
    correctAnswer: "90",
    explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**The correct answer is $90$.**\n\n**The Fast Way (~10s):** The sum is $130 + 70 = 200$, and $45\\%$ of $200$ is $0.45(200) = 90$.\n\n**The Full Solution:**\nStep 1: The percent applies to the sum, so add first: $130 + 70 = 200$.\nStep 2: Write $45\\%$ as $0.45$.\nStep 3: Multiply: $n = 0.45(200) = 90$. Check: half of $200$ is $100$, and $45\\%$ is slightly less than half, so $90$ is reasonable ✓\n\n**Common Mistakes:**\n* $58.5$: takes $45\\%$ of $130$ only.\n* $31.5$: takes $45\\%$ of $70$ only.\n* $290$: adds $90$ to the sum, as if $n$ were $45\\%$ greater than $200$.\n\n**Test Day Takeaway:** Identify exactly what the percent is \"of\"; here it is the sum, so combine before multiplying.",
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
    question: "$36$ is $p\\%$ of the sum of $64$ and $16$. What is the value of $p$?",
    choices: [
      // distractor: the decimal 36/80 = 0.45, never converted to a percent
      { id: "A", text: "$0.45$" },
      { id: "B", text: "$45$" },
      // distractor: 36/64 as a percent, leaving 16 out of the sum
      { id: "C", text: "$56.25$" },
      // distractor: 36/16 as a percent, leaving 64 out of the sum
      { id: "D", text: "$225$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The sum is $64 + 16 = 80$. $\\frac{36}{80} = 0.45$, so $p = 45$.\n\n**The Full Solution:**\nStep 1: The percent is taken of the sum: $64 + 16 = 80$.\nStep 2: Translate: $36 = \\frac{p}{100} \\times 80$, so $\\frac{p}{100} = \\frac{36}{80} = 0.45$.\nStep 3: Multiply by $100$: $p = 45$. Check: $45\\%$ of $80$ is $0.45 \\times 80 = 36$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.45$): The decimal form of the ratio; the question asks for $p$ in \"$p\\%$\", which requires multiplying by $100$.\n* Choice C ($56.25$): $\\frac{36}{64} \\times 100$, using only $64$ as the base and leaving $16$ out of the sum.\n* Choice D ($225$): $\\frac{36}{16} \\times 100$, using only $16$ as the base.\n\n**Test Day Takeaway:** Build the base first (here, the sum), then $p = \\frac{\\text{part}}{\\text{base}} \\times 100$.",
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
    question: "The number $63$ is $30\\%$ of the sum of $x$ and $140$. What is the value of $x$?",
    correctAnswer: "70",
    explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**The correct answer is $70$.**\n\n**The Fast Way (~15s):** The sum is $\\frac{63}{0.30} = 210$, so $x = 210 - 140 = 70$.\n\n**The Full Solution:**\nStep 1: Translate the sentence: $0.30(x + 140) = 63$.\nStep 2: Divide both sides by $0.30$: $x + 140 = 210$.\nStep 3: Subtract $140$: $x = 70$. Check: $0.30(70 + 140) = 0.30(210) = 63$ ✓\n\n**Common Mistakes:**\n* $210$: stops at the value of the sum $x + 140$ and never subtracts $140$.\n* $147$: subtracts $63$ instead of $140$ from the sum, computing $210 - 63$.\n* $21$: applies the $30\\%$ to $140$ but not to $x$, solving $x + 42 = 63$.\n\n**Test Day Takeaway:** Undo the percent first by dividing by its decimal form, which recovers the whole sum; then remove the part you know.",
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
    question: "A monitor's regular price of \\$240 is reduced by $15\\%$. Then a $7\\%$ sales tax is applied to the reduced price. What is the final price, in dollars?",
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
    explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Chain the multipliers: $240 \\times 0.85 \\times 1.07 = 218.28$.\n\n**The Full Solution:**\nStep 1: A $15\\%$ reduction leaves $85\\%$ of the price: $240 \\times 0.85 = 204$ dollars.\nStep 2: A $7\\%$ tax on the reduced price adds $204 \\times 0.07 = 14.28$ dollars, giving $204 + 14.28 = 218.28$, or equivalently $204 \\times 1.07$.\nStep 3: Check: the combined multiplier is $0.85 \\times 1.07 = 0.9095$, and $240 \\times 0.9095 = 218.28$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($204$): the reduced price before tax; the tax step was skipped.\n* Choice C ($220.80$): nets the percents, $-15\\% + 7\\% = -8\\%$, and computes $240 \\times 0.92$; successive percents multiply, they do not add.\n* Choice D ($256.80$): applies the tax to the regular price, $240 \\times 1.07$, and never applies the reduction.\n\n**Test Day Takeaway:** Each percent change is its own multiplier ($1 - 0.15$, then $1 + 0.07$); multiply them in order and never add the percents.",
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
    question: "The number of bats in a colony increased by $25\\%$ and then decreased by $12\\%$, to $176$ bats. How many bats were in the colony before the increase?",
    correctAnswer: "160",
    explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**The correct answer is $160$.**\n\n**The Fast Way (~15s):** The two changes multiply to $1.25 \\times 0.88 = 1.1$, so $176$ is $1.1$ times the original count: $\\frac{176}{1.1} = 160$.\n\n**The Full Solution:**\nStep 1: Let $n$ be the original number of bats. A $25\\%$ increase gives $1.25n$ bats.\nStep 2: A $12\\%$ decrease multiplies that by $0.88$: $0.88(1.25n) = 1.1n$.\nStep 3: Set $1.1n = 176$, so $n = 160$. Check: $160 \\times 1.25 = 200$, and $200 \\times 0.88 = 176$ ✓\n\n**Common Mistakes:**\n* About $155.75$: nets the percents to $+13\\%$ and computes $\\frac{176}{1.13}$.\n* $147.84$: reverses the changes by multiplying $176$ by $0.75$ and $1.12$ instead of dividing by $1.25$ and $0.88$.\n* $140.8$: divides by $1.25$ only and ignores the decrease.\n\n**Test Day Takeaway:** To reverse successive percent changes, divide the final amount by the product of the multipliers; never subtract the percents or apply them backward.",
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
    question: "The volume of water in a reservoir decreased by $30\\%$ during a drought and then increased by $30\\%$, reaching $27.3$ million cubic meters. What was the volume, in million cubic meters, before the drought?",
    choices: [
      // distractor: reverses only the increase: 27.3 / 1.3 = 21, leaving the drought untouched
      { id: "A", text: "$21$" },
      // distractor: assumes a 30 percent fall and a 30 percent rise cancel, so the volume never changed
      { id: "B", text: "$27.3$" },
      { id: "C", text: "$30$" },
      // distractor: reverses only the decrease: 27.3 / 0.7 = 39, leaving the later increase untouched
      { id: "D", text: "$39$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The two changes leave $0.7 \\times 1.3 = 0.91$ of the original volume, so the original volume is $\\frac{27.3}{0.91} = 30$.\n\n**The Full Solution:**\nStep 1: Write each change as a factor. A $30\\%$ decrease multiplies by $0.7$; the $30\\%$ increase is taken of the reduced volume, so it multiplies that result by $1.3$.\nStep 2: Let $V$ be the volume before the drought. Then $0.7 \\times 1.3 \\times V = 0.91V = 27.3$.\nStep 3: Solve: $V = \\frac{27.3}{0.91} = 30$ million cubic meters. Check: $30 \\times 0.7 = 21$, and $21 \\times 1.3 = 27.3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($21$): divides by $1.3$ only, which recovers the volume after the drought rather than before it.\n* Choice B ($27.3$): assumes the $30\\%$ decrease and the $30\\%$ increase cancel. They do not: the increase is taken of a smaller amount.\n* Choice D ($39$): divides by $0.7$ only, undoing the decrease but not the increase.\n\n**Test Day Takeaway:** A decrease of $p\\%$ followed by an increase of $p\\%$ never returns to the start: the factors multiply to $1 - \\left(\\frac{p}{100}\\right)^{2}$, which is less than $1$.",
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
    question: "A store decreased the price of a lamp by $20\\%$ and later increased the new price by $q\\%$. The final price was $4\\%$ greater than the original price. What is the value of $q$?",
    correctAnswer: "30",
    explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~20s):** The multipliers must satisfy $0.8\\left(1 + \\frac{q}{100}\\right) = 1.04$, so $1 + \\frac{q}{100} = 1.3$ and $q = 30$.\n\n**The Full Solution:**\nStep 1: Let the original price be $P$. After a $20\\%$ decrease the price is $0.8P$.\nStep 2: After a $q\\%$ increase the price is $0.8P\\left(1 + \\frac{q}{100}\\right)$, and this equals $1.04P$. Divide by $0.8P$: $1 + \\frac{q}{100} = 1.3$.\nStep 3: So $\\frac{q}{100} = 0.3$ and $q = 30$. Check with $P = 100$: $100 \\to 80 \\to 80 \\times 1.3 = 104$, which is $4\\%$ more than $100$ ✓\n\n**Common Mistakes:**\n* $24$: adds the percents, $20 + 4$, ignoring that the increase acts on the smaller price of $0.8P$.\n* $1.3$ or $130$: reports the multiplier $1 + \\frac{q}{100}$ instead of $q$.\n* $4$: assumes the increase only has to produce the final $4\\%$ gain.\n\n**Test Day Takeaway:** A percent increase after a decrease acts on the reduced amount; set the product of the multipliers equal to the overall multiplier and solve.",
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
    question: "In a mixture, the ratio of blue paint to white paint is $2$ to $7$. How many liters of blue paint are mixed with $28$ liters of white paint?",
    choices: [
      // distractor: 28/7 = 4 is the size of one part; blue is two parts
      { id: "A", text: "$4$" },
      { id: "B", text: "$8$" },
      // distractor: divides 28 by the blue term, 2, instead of by the white term, 7
      { id: "C", text: "$14$" },
      // distractor: inverts the ratio, 28 x 7/2
      { id: "D", text: "$98$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** White paint is $7$ parts and equals $28$ liters, so one part is $4$ liters; blue paint is $2$ parts, or $2(4) = 8$ liters.\n\n**The Full Solution:**\nStep 1: Set up the proportion $\\frac{\\text{blue}}{\\text{white}} = \\frac{2}{7} = \\frac{b}{28}$.\nStep 2: Cross multiply: $7b = 56$.\nStep 3: Solve: $b = 8$. Check: $\\frac{8}{28} = \\frac{2}{7}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): the size of one part, $28 \\div 7$; blue paint is two parts.\n* Choice C ($14$): divides $28$ by $2$, the blue term, instead of by $7$, the white term.\n* Choice D ($98$): inverts the ratio, computing $28 \\times \\frac{7}{2}$; blue paint is the smaller amount, so the answer must be less than $28$.\n\n**Test Day Takeaway:** Match each ratio term to its own quantity, find the value of one part, and check which quantity should be larger.",
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
    question: "On a map, $3$ centimeters represents $8$ kilometers. How many kilometers does $12$ centimeters represent on this map?",
    correctAnswer: "32",
    explanation: "**SAT Pattern: Proportion / Ratio**\n\n**The correct answer is $32$.**\n\n**The Fast Way (~10s):** $12$ centimeters is $4$ times $3$ centimeters, so it represents $4(8) = 32$ kilometers.\n\n**The Full Solution:**\nStep 1: Write the scale as a ratio of map distance to actual distance: $\\frac{3 \\text{ cm}}{8 \\text{ km}}$.\nStep 2: Set up the proportion with the unknown distance $x$: $\\frac{3}{8} = \\frac{12}{x}$.\nStep 3: Cross multiply: $3x = 96$, so $x = 32$. Check: $\\frac{12}{32} = \\frac{3}{8}$ ✓\n\n**Common Mistakes:**\n* $4.5$: inverts the proportion, $\\frac{3}{8} = \\frac{x}{12}$, giving fewer kilometers than centimeters.\n* $96$: multiplies $8(12)$ and skips the division by $3$.\n* $17$: treats the scale as a shift, adding $12 - 3 = 9$ to $8$.\n\n**Test Day Takeaway:** Keep matching units on matching sides of a proportion (map with map, actual with actual), and the setup cannot come out inverted.",
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
    question: "In a race, the ratio of the swimming distance to the running distance is $2$ to $9$. If the running distance is $27$ kilometers, what is the swimming distance, in kilometers?",
    choices: [
      // distractor: reports the size of one ratio part, $\frac{27}{9} = 3$, rather than the two parts the swim leg carries
      { id: "A", text: "$3$" },
      { id: "B", text: "$6$" },
      // distractor: divides by the swim term instead of the run term, $\frac{27}{2} = 13.5$
      { id: "C", text: "$13.5$" },
      // distractor: inverts the ratio, computing $27 \cdot \frac{9}{2} = 121.5$
      { id: "D", text: "$121.5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Nine parts make $27$ kilometers, so one part is $3$ kilometers and the swimming distance, two parts, is $6$ kilometers.\n\n**The Full Solution:**\nStep 1: Write the proportion with matching quantities on matching sides: $\\frac{s}{27} = \\frac{2}{9}$.\nStep 2: Cross multiply: $9s = 2(27) = 54$.\nStep 3: Solve: $s = 6$. Check: $\\frac{6}{27} = \\frac{2}{9}$, and the swimming distance is shorter than the running distance, as the ratio requires ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): the size of one ratio part; the swimming distance is two parts.\n* Choice C ($13.5$): divides $27$ by $2$, the swimming term, instead of by $9$, the running term.\n* Choice D ($121.5$): inverts the ratio, computing $27 \\times \\frac{9}{2}$, which makes the swimming distance longer than the running distance.\n\n**Test Day Takeaway:** Line the proportion up by label before you cross multiply, then check the size: the smaller ratio term must give the smaller distance.",
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
    question: "A pump moves water at a constant rate of $84$ liters every $6$ minutes. How many liters does it move in $1.5$ hours?",
    correctAnswer: "1260",
    explanation: "**SAT Pattern: Proportion / Ratio**\n\n**The correct answer is $1{,}260$.**\n\n**The Fast Way (~20s):** The rate is $\\frac{84}{6} = 14$ liters per minute, and $1.5$ hours is $90$ minutes, so the pump moves $14(90) = 1{,}260$ liters.\n\n**The Full Solution:**\nStep 1: Find the unit rate: $84 \\div 6 = 14$ liters per minute.\nStep 2: Convert the time to minutes: $1.5$ hours $= 1.5(60) = 90$ minutes.\nStep 3: Multiply: $14(90) = 1{,}260$ liters. Check by proportion: $\\frac{84}{6} = \\frac{1{,}260}{90}$, since both equal $14$ ✓\n\n**Common Mistakes:**\n* $21$: multiplies the rate by $1.5$ without converting hours to minutes, $14(1.5)$.\n* $126$: multiplies $84$ by $1.5$, treating $84$ liters as the amount moved per hour.\n* $7{,}560$: multiplies $84$ by $90$, treating $84$ liters as the amount moved per minute.\n\n**Test Day Takeaway:** Get the rate in the units the question asks about before you multiply; a time given in hours with a rate given in minutes needs a conversion.",
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
    question: "The ratio of cows to bulls in a herd of elk is $7$ to $3$. The herd has $84$ more cows than bulls. How many bulls are in the herd?",
    choices: [
      // distractor: applies the ratio terms directly to the difference, $\frac{3}{7}(84) = 36$
      { id: "A", text: "$36$" },
      { id: "B", text: "$63$" },
      // distractor: reports the number of cows, $7(21) = 147$, instead of the number of bulls
      { id: "C", text: "$147$" },
      // distractor: reports the whole herd, $10(21) = 210$, instead of the number of bulls
      { id: "D", text: "$210$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The difference of $84$ elk is $7 - 3 = 4$ parts, so one part is $21$ elk and the bulls number $3(21) = 63$.\n\n**The Full Solution:**\nStep 1: Let one part be $x$ elk, so there are $7x$ cows and $3x$ bulls.\nStep 2: Translate the difference: $7x - 3x = 84$, so $4x = 84$ and $x = 21$.\nStep 3: Compute the bulls: $3x = 63$. Check: the cows number $7(21) = 147$, $147 - 63 = 84$, and $\\frac{147}{63} = \\frac{7}{3}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($36$): takes $\\frac{3}{7}$ of the difference, comparing the bulls' term with the cows' term rather than with the $4$-part gap.\n* Choice C ($147$): solves correctly but reports the number of cows.\n* Choice D ($210$): the whole herd, $7(21) + 3(21) = 210$; the question asks only for the bulls.\n\n**Test Day Takeaway:** When a ratio problem gives a difference, the difference equals the difference of the ratio terms; divide by that before you scale up.",
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
    question: "In a park, the ratio of herons to egrets is $5$ to $9$. If there are $63$ egrets, how many herons are there?",
    correctAnswer: "35",
    explanation: "**SAT Pattern: Proportion / Ratio**\n\n**The correct answer is $35$.**\n\n**The Fast Way (~10s):** Egrets are $9$ parts and equal $63$, so one part is $7$; herons are $5$ parts, or $5(7) = 35$.\n\n**The Full Solution:**\nStep 1: Write the proportion $\\frac{\\text{herons}}{\\text{egrets}} = \\frac{5}{9} = \\frac{h}{63}$.\nStep 2: Cross multiply: $9h = 315$.\nStep 3: Solve: $h = 35$. Check: $\\frac{35}{63}$ reduces to $\\frac{5}{9}$ ✓\n\n**Common Mistakes:**\n* $113.4$: inverts the ratio, computing $63 \\times \\frac{9}{5}$, which is not even a whole number of birds.\n* $7$: reports the size of one part instead of five parts.\n* $12.6$: divides $63$ by $5$, pairing the egret count with the herons' term.\n\n**Test Day Takeaway:** Pair the known quantity with its own ratio term to find one part, then scale to the other quantity; a non-integer count of animals signals an inverted ratio.",
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
    question: "On a scale drawing of a rectangular parking lot, the lot measures $6$ centimeters by $9$ centimeters. Each centimeter on the drawing represents $4$ meters. What is the area, in square meters, of the actual parking lot?",
    choices: [
      // distractor: reports the area of the drawn rectangle, 6 x 9 = 54 square centimeters, without applying the scale
      { id: "A", text: "$54$" },
      // distractor: scales the drawn area once, 54 x 4 = 216, instead of scaling each side length
      { id: "B", text: "$216$" },
      { id: "C", text: "$864$" },
      // distractor: scales the drawn area by 4 cubed, 54 x 64 = 3,456, treating area like volume
      { id: "D", text: "$3{,}456$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Lengths scale by $4$, so areas scale by $4^{2} = 16$; the drawn area is $6 \\times 9 = 54$ square centimeters, and $54 \\times 16 = 864$.\n\n**The Full Solution:**\nStep 1: Scale each side. The $6$-centimeter side represents $6 \\times 4 = 24$ meters, and the $9$-centimeter side represents $9 \\times 4 = 36$ meters.\nStep 2: Multiply the actual side lengths: $24 \\times 36 = 864$ square meters.\nStep 3: Check with the area factor: $54 \\times 4^{2} = 54 \\times 16 = 864$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($54$): the area of the rectangle on the drawing, in square centimeters, with the scale never applied.\n* Choice B ($216$): multiplies the drawn area by the length factor once, $54 \\times 4$; area needs the factor twice.\n* Choice D ($3{,}456$): multiplies the drawn area by $4^{3} = 64$, the factor for volume, not area.\n\n**Test Day Takeaway:** When a drawing scales lengths by $k$, areas scale by $k^{2}$ and volumes by $k^{3}$; decide which one the question asks for before multiplying.",
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
    question: "At a company, the ratio of full-time employees to part-time employees is $8$ to $3$. After $12$ more part-time employees are hired, the ratio is $2$ to $1$. How many full-time employees does the company have?",
    correctAnswer: "96",
    explanation: "**SAT Pattern: Proportion / Ratio**\n\n**The correct answer is $96$.**\n\n**The Fast Way (~25s):** With $8k$ full-time and $3k$ part-time employees, $8k = 2(3k + 12)$, so $k = 12$ and there are $8(12) = 96$ full-time employees.\n\n**The Full Solution:**\nStep 1: Represent the original counts with one variable: $8k$ full-time and $3k$ part-time employees.\nStep 2: After the hires there are $3k + 12$ part-time employees and the ratio is $2$ to $1$, so $8k = 2(3k + 12) = 6k + 24$, which gives $2k = 24$ and $k = 12$.\nStep 3: Full-time employees: $8k = 96$. Check: part-time employees go from $36$ to $48$, and $96$ to $48$ is $2$ to $1$ ✓\n\n**Common Mistakes:**\n* $12$: solves for $k$ and reports it instead of $8k$.\n* $36$ or $48$: reports a part-time count instead of the full-time count.\n* A fraction: sets up the inverted ratio $\\frac{8k}{3k + 12} = \\frac{1}{2}$.\n\n**Test Day Takeaway:** Express both quantities with one multiplier, apply the change only to the quantity that changed, and finish by reporting the quantity actually asked for.",
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
    question: "The table shows the mass, in grams, of each of five rock samples. The mean mass of the five samples is $16$ grams. What is the value of $n$?",
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
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Five samples with a mean of $16$ grams have a total mass of $5(16) = 80$ grams. The four known masses sum to $57$ grams, so $n = 80 - 57 = 23$.\n\n**The Full Solution:**\nStep 1: The sum of the masses is the mean times the count: $16 \\times 5 = 80$ grams.\nStep 2: Add the known masses from the table: $12 + 15 + 21 + 9 = 57$ grams.\nStep 3: Subtract: $n = 80 - 57 = 23$. Check: $\\frac{12 + 15 + 21 + 9 + 23}{5} = \\frac{80}{5} = 16$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): uses $4 \\times 16 = 64$ as the total, counting only four samples, and then $64 - 57 = 7$.\n* Choice B ($14.25$): the mean of the four known masses, $\\frac{57}{4}$.\n* Choice C ($16$): repeats the mean; the missing value equals the mean only if the other four values already average $16$, and $\\frac{57}{4} \\neq 16$.\n\n**Test Day Takeaway:** A missing-value problem is a sum problem: total equals mean times count, then subtract what you know.",
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
    question: "$18$, $24$, $21$, $30$, $d$\nThe mean of the data shown is $23$. What is the value of $d$?",
    correctAnswer: "22",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**The correct answer is $22$.**\n\n**The Fast Way (~15s):** Five values with a mean of $23$ sum to $5(23) = 115$, and $18 + 24 + 21 + 30 = 93$, so $d = 115 - 93 = 22$.\n\n**The Full Solution:**\nStep 1: Turn the mean into a total: the sum of the five values is $5(23) = 115$.\nStep 2: Add the four known values: $18 + 24 + 21 + 30 = 93$.\nStep 3: Subtract: $d = 115 - 93 = 22$. Check: $\\frac{18 + 24 + 21 + 30 + 22}{5} = \\frac{115}{5} = 23$ ✓\n\n**Common Mistakes:**\n* $23.25$: averages the four known values, $\\frac{93}{4}$, instead of finding the fifth value.\n* $70$: subtracts the mean from the known sum, $93 - 23$.\n* $-1$: uses $4(23) = 92$ as the total, counting only four values, and then $92 - 93$.\n\n**Test Day Takeaway:** Convert a mean into a sum first; once the required total is written down, the missing value is one subtraction away.",
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
    question: "Ana's mean time for $5$ races is $42.6$ minutes. What time, in minutes, must she run in her sixth race so that her mean time for all $6$ races is $42$ minutes?",
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
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Six races with a mean of $42$ total $252$ minutes, and the first five total $5(42.6) = 213$ minutes, so the sixth race must take $252 - 213 = 39$ minutes.\n\n**The Full Solution:**\nStep 1: Current total: $5 \\times 42.6 = 213$ minutes.\nStep 2: Required total for a mean of $42$ over $6$ races: $6 \\times 42 = 252$ minutes.\nStep 3: Sixth race: $252 - 213 = 39$ minutes. Check: $\\frac{213 + 39}{6} = \\frac{252}{6} = 42$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($38.4$): computes $42 - 0.6 \\times 6$, charging the $0.6$-minute excess to six races when only five races are above the target.\n* Choice C ($41.4$): subtracts the $0.6$-minute excess only once instead of five times.\n* Choice D ($42$): running exactly the target time leaves the $3$ minutes of excess in place, so the mean would stay above $42$.\n\n**Test Day Takeaway:** Work with totals: the new mean times the new count, minus the old mean times the old count, is the value needed.",
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
    question: "An archer's first $n$ arrows scored a mean of $8.4$ points. After one more arrow scored $10$ points, the mean score of all the arrows was $8.6$ points. What is the value of $n$?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~30s):** The last arrow is $1.4$ points above the new mean, and each earlier arrow is $0.2$ point below it, so $n = \\frac{1.4}{0.2} = 7$.\n\n**The Full Solution:**\nStep 1: The first $n$ arrows scored a total of $8.4n$ points.\nStep 2: After one more arrow, the total is $8.4n + 10$ points over $n + 1$ arrows, so $8.4n + 10 = 8.6(n + 1)$.\nStep 3: Solve: $8.4n + 10 = 8.6n + 8.6$, so $1.4 = 0.2n$ and $n = 7$. Check: $7$ arrows at a mean of $8.4$ total $58.8$ points; adding $10$ gives $68.8$ points over $8$ arrows, and $\\frac{68.8}{8} = 8.6$ ✓\n\n**Common Mistakes:**\n* $50$: divides $10$ by $8.6 - 8.4$, ignoring that the new arrow also raises the count.\n* $8$: reports the number of arrows after the last shot rather than before it.\n* $1.4$: stops at the surplus $10 - 8.6$ without dividing by the $0.2$-point shift.\n\n**Test Day Takeaway:** When one new value moves a mean, balance the surplus above the new mean against the shortfalls below it; that ratio is the count.",
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
    question: "$4$, $6$, $6$, $8$, $11$, $k$\nThe mean of these six numbers is $8$. What is the median of the six numbers?",
    choices: [
      // distractor: finds the median of the five known numbers 4, 6, 6, 8, 11 and leaves k out of the list
      { id: "A", text: "$6$" },
      { id: "B", text: "$7$" },
      // distractor: assumes the median of the six numbers equals their mean, 8
      { id: "C", text: "$8$" },
      // distractor: finds k = 13 and reports it instead of the median
      { id: "D", text: "$13$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Six numbers with a mean of $8$ sum to $48$, and the five known numbers sum to $35$, so $k = 13$. In order, $4, 6, 6, 8, 11, 13$ has median $\\frac{6 + 8}{2} = 7$.\n\n**The Full Solution:**\nStep 1: The sum of the six numbers is the mean times the count: $8 \\times 6 = 48$.\nStep 2: The known numbers sum to $4 + 6 + 6 + 8 + 11 = 35$, so $k = 48 - 35 = 13$.\nStep 3: In order the numbers are $4, 6, 6, 8, 11, 13$. With six numbers, the median is the mean of the third and fourth: $\\frac{6 + 8}{2} = 7$. Check: $\\frac{35 + 13}{6} = 8$, and three numbers lie below $7$ and three lie above it ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): the median of the five known numbers; $k$ is part of the data and changes the middle.\n* Choice C ($8$): assumes the median equals the mean. The large value $13$ pulls the mean above the median.\n* Choice D ($13$): the value of $k$, which is only the first step.\n\n**Test Day Takeaway:** Find the missing value from the total first, then reorder the full list before you take a median.",
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
    question: "$8.6$, $10.4$, $a$, $a$\nThe mean of the four numbers shown is $9.2$. What is the value of $a$?",
    correctAnswer: "8.9",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**The correct answer is $8.9$.**\n\n**The Fast Way (~15s):** The four numbers sum to $4(9.2) = 36.8$, the two known numbers sum to $19$, and $2a = 17.8$, so $a = 8.9$.\n\n**The Full Solution:**\nStep 1: The sum of the four numbers is $4 \\times 9.2 = 36.8$.\nStep 2: Write the sum with the unknowns: $8.6 + 10.4 + 2a = 36.8$, so $2a = 17.8$.\nStep 3: Solve: $a = 8.9$. Check: $\\frac{8.6 + 10.4 + 8.9 + 8.9}{4} = \\frac{36.8}{4} = 9.2$ ✓\n\n**Common Mistakes:**\n* $17.8$: reports the combined value $2a$ instead of $a$.\n* $8.6$: uses three numbers in the total, $3(9.2) - 19$.\n* $9.2$: assumes each unknown equals the mean.\n\n**Test Day Takeaway:** Two equal unknowns contribute $2a$ to the sum; solve for the pair, then divide by $2$.",
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
    question: "A data set of $12$ numbers has a mean of $45$. When $4$ of the numbers are removed, the mean of the remaining numbers is $51$. What is the mean of the $4$ numbers that were removed?",
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
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** All $12$ numbers sum to $540$, and the remaining $8$ sum to $408$. The removed $4$ sum to $132$, so their mean is $\\frac{132}{4} = 33$.\n\n**The Full Solution:**\nStep 1: Original sum: $12 \\times 45 = 540$.\nStep 2: Remaining sum: $8 \\times 51 = 408$, so the removed numbers sum to $540 - 408 = 132$.\nStep 3: Mean of the removed numbers: $\\frac{132}{4} = 33$. Check: $\\frac{408 + 132}{12} = \\frac{540}{12} = 45$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): the difference between the two given means, $51 - 45$.\n* Choice C ($39$): subtracts that difference from $45$; the gap is larger because $4$ numbers must offset a $6$-point rise in $8$ numbers.\n* Choice D ($132$): the sum of the removed numbers, not their mean.\n\n**Test Day Takeaway:** Convert every mean to a total, subtract totals, then divide by the count of the group you are asked about.",
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
    question: "A list of numbers has a mean of $20$. When the number $56$ is added to the list, the mean becomes $23$. How many numbers were in the original list?",
    correctAnswer: "11",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~20s):** With $n$ original numbers, $20n + 56 = 23(n + 1)$, so $33 = 3n$ and $n = 11$.\n\n**The Full Solution:**\nStep 1: Let $n$ be the original count; the original sum is $20n$.\nStep 2: After adding $56$, there are $n + 1$ numbers with sum $20n + 56$ and mean $23$: $20n + 56 = 23(n + 1) = 23n + 23$.\nStep 3: Solve: $56 - 23 = 3n$, so $3n = 33$ and $n = 11$. Check: $11 \\times 20 = 220$, $220 + 56 = 276$, and $\\frac{276}{12} = 23$ ✓\n\n**Common Mistakes:**\n* $12$: computes $\\frac{56 - 20}{3}$, which is the new count $n + 1$, not the original count.\n* About $18.67$: forgets to add $1$ to the count and solves $20n + 56 = 23n$.\n* About $2.43$: divides $56$ by $23$.\n\n**Test Day Takeaway:** When the count is unknown, write both sums in terms of $n$ and remember that adding a value raises the count by $1$.",
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
    question: "Of the $40$ tickets in a box, $15$ are winning tickets. If one ticket is selected at random, what is the probability that it is not a winning ticket?",
    choices: [
      // distractor: 15/40, the probability of selecting a winning ticket (the complement)
      { id: "A", text: "$\\frac{3}{8}$" },
      // distractor: 15/25, the ratio of winning tickets to other tickets, not a probability
      { id: "B", text: "$\\frac{3}{5}$" },
      { id: "C", text: "$\\frac{5}{8}$" },
      // distractor: 25/15, an inverted ratio; a probability cannot exceed 1
      { id: "D", text: "$\\frac{5}{3}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** There are $40 - 15 = 25$ tickets that are not winning tickets, so the probability is $\\frac{25}{40} = \\frac{5}{8}$.\n\n**The Full Solution:**\nStep 1: Count the favorable outcomes: $40 - 15 = 25$ tickets are not winning tickets.\nStep 2: The total number of equally likely outcomes is $40$.\nStep 3: Probability: $\\frac{25}{40} = \\frac{5}{8}$. Check: the probability of a winning ticket is $\\frac{15}{40} = \\frac{3}{8}$, and $\\frac{3}{8} + \\frac{5}{8} = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{8}$): the probability of selecting a winning ticket, $\\frac{15}{40}$; the question asks for the complement.\n* Choice B ($\\frac{3}{5}$): $\\frac{15}{25}$, the ratio of winning tickets to other tickets; a probability's denominator is the total, $40$.\n* Choice D ($\\frac{5}{3}$): $\\frac{25}{15}$, an inverted ratio; a probability can never exceed $1$.\n\n**Test Day Takeaway:** Probability is favorable outcomes over total outcomes; for \"not,\" either count the rest or subtract from $1$.",
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
    question: "A spinner has $10$ equal sections numbered $1$ through $10$. If the spinner is spun once, what is the probability that it lands on a prime number? (Express your answer as a decimal or fraction, not as a percent.)",
    correctAnswer: "2/5",
    explanation: "**SAT Pattern: Basic Probability**\n\n**The correct answer is $\\frac{2}{5}$.**\n\n**The Fast Way (~10s):** The primes from $1$ to $10$ are $2, 3, 5, 7$: four of ten sections, so the probability is $\\frac{4}{10} = \\frac{2}{5}$.\n\n**The Full Solution:**\nStep 1: List the primes among $1$ through $10$: $2, 3, 5, 7$. ($1$ is not prime; $4, 6, 8, 9, 10$ are composite.)\nStep 2: There are $4$ favorable sections out of $10$ equally likely sections.\nStep 3: Probability: $\\frac{4}{10} = \\frac{2}{5}$, which can also be entered as $0.4$. Check: $4$ of the $10$ sections is $40\\%$ of the spinner ✓\n\n**Common Mistakes:**\n* $\\frac{1}{2}$: counts $1$ as prime, giving $\\frac{5}{10}$.\n* $\\frac{1}{2}$ again: counts the odd numbers $1, 3, 5, 7, 9$ instead of the primes.\n* $\\frac{3}{10}$: leaves out $2$, the only even prime.\n\n**Test Day Takeaway:** For a probability over numbered outcomes, list the favorable numbers explicitly; $1$ is not prime and $2$ is.",
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
    question: "A jar contains $30$ tokens numbered $1$ through $30$. One token will be selected at random. What is the probability of selecting a token with a number that is a multiple of $4$?",
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
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The multiples of $4$ from $1$ to $30$ are $4, 8, 12, 16, 20, 24, 28$, seven in all, so the probability is $\\frac{7}{30}$.\n\n**The Full Solution:**\nStep 1: The greatest multiple of $4$ that is at most $30$ is $28 = 4 \\times 7$, so $7$ tokens are multiples of $4$.\nStep 2: There are $30$ equally likely tokens.\nStep 3: Probability: $\\frac{7}{30}$, already in lowest terms. Check: the list $4, 8, 12, 16, 20, 24, 28$ has seven numbers ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{1}{4}$): assumes exactly one-fourth of the tokens qualify, but $\\frac{30}{4} = 7.5$ is not a whole number of tokens.\n* Choice C ($\\frac{4}{15}$): $\\frac{8}{30}$, counting eight multiples, which would require $0$ or $32$ to be in the jar.\n* Choice D ($\\frac{23}{30}$): the probability of selecting a token that is not a multiple of $4$.\n\n**Test Day Takeaway:** Count favorable outcomes exactly by listing them or dividing and rounding down; \"one in every four\" is only approximate when the total is not a multiple of $4$.",
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
    question: "Of the $48$ bulbs in a box, $30$ are LED bulbs and the rest are halogen bulbs. One bulb will be selected at random. What is the probability of selecting a halogen bulb? (Express your answer as a decimal or fraction, not as a percent.)",
    correctAnswer: "3/8",
    explanation: "**SAT Pattern: Basic Probability**\n\n**The correct answer is $\\frac{3}{8}$.**\n\n**The Fast Way (~10s):** There are $48 - 30 = 18$ halogen bulbs, so the probability is $\\frac{18}{48} = \\frac{3}{8}$.\n\n**The Full Solution:**\nStep 1: Find the favorable count: $48 - 30 = 18$ halogen bulbs.\nStep 2: The total is $48$ bulbs.\nStep 3: Probability: $\\frac{18}{48} = \\frac{3}{8}$, or $0.375$. Check: $\\frac{3}{8}$ of $48$ is $18$ ✓\n\n**Common Mistakes:**\n* $\\frac{5}{8}$: the probability of selecting an LED bulb, $\\frac{30}{48}$.\n* $\\frac{3}{5}$: divides by the LED count, $\\frac{18}{30}$, instead of by the total.\n* $\\frac{5}{3}$: the inverted ratio $\\frac{30}{18}$, which cannot be a probability.\n\n**Test Day Takeaway:** \"The rest\" means subtract from the total first; the denominator is always the whole group.",
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
    question: "The table shows the number of cars parked on each level of a garage. One of these cars will be selected at random. What is the probability of selecting a car that is not on level $2$?",
    diagram: { type: "dataTable", params: { headers: ["Level", "Number of cars"], rows: [["1", "84"], ["2", "120"], ["3", "96"]] } },
    choices: [
      // distractor: 84/300, counts only the cars on level 1 as not on level 2
      { id: "A", text: "$\\frac{7}{25}$" },
      // distractor: 96/300, counts only the cars on level 3 as not on level 2
      { id: "B", text: "$\\frac{8}{25}$" },
      // distractor: 120/300, the probability that the car IS on level 2
      { id: "C", text: "$\\frac{2}{5}$" },
      { id: "D", text: "$\\frac{3}{5}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** There are $84 + 96 = 180$ cars not on level $2$ out of $84 + 120 + 96 = 300$ cars, so the probability is $\\frac{180}{300} = \\frac{3}{5}$.\n\n**The Full Solution:**\nStep 1: Find the total number of cars: $84 + 120 + 96 = 300$.\nStep 2: Count the cars not on level $2$: $84 + 96 = 180$.\nStep 3: Probability: $\\frac{180}{300} = \\frac{3}{5}$. Check: the probability of level $2$ is $\\frac{120}{300} = \\frac{2}{5}$, and $\\frac{2}{5} + \\frac{3}{5} = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{7}{25}$): $\\frac{84}{300}$, counting only the cars on level $1$; the cars on level $3$ are also not on level $2$.\n* Choice B ($\\frac{8}{25}$): $\\frac{96}{300}$, counting only the cars on level $3$; the cars on level $1$ are also not on level $2$.\n* Choice C ($\\frac{2}{5}$): $\\frac{120}{300}$, the probability that the car is on level $2$.\n\n**Test Day Takeaway:** Add up the whole table for the denominator, and for \"not\" include every category except the one named.",
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
    question: "A bin contains only small, medium, and large bolts, in the ratio $3 : 4 : 8$, respectively. One bolt will be selected at random. What is the probability of selecting a large bolt? (Express your answer as a decimal or fraction, not as a percent.)",
    correctAnswer: "8/15",
    explanation: "**SAT Pattern: Basic Probability**\n\n**The correct answer is $\\frac{8}{15}$.**\n\n**The Fast Way (~10s):** The ratio has $3 + 4 + 8 = 15$ parts, and large bolts are $8$ of them, so the probability is $\\frac{8}{15}$.\n\n**The Full Solution:**\nStep 1: For some positive integer $k$, there are $3k$ small, $4k$ medium, and $8k$ large bolts.\nStep 2: The total is $15k$ bolts, and $8k$ of them are large.\nStep 3: Probability: $\\frac{8k}{15k} = \\frac{8}{15}$. Check: with $k = 1$, $8$ of the $15$ bolts are large ✓\n\n**Common Mistakes:**\n* $\\frac{8}{7}$: divides by the other parts only, which gives a value greater than $1$.\n* $\\frac{1}{3}$: assumes each of the three sizes is equally likely.\n* $\\frac{2}{3}$: uses $\\frac{8}{12}$, leaving the small bolts out of the total.\n\n**Test Day Takeaway:** A probability from a ratio is the part's term over the sum of all the terms; the actual counts cancel.",
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
    question: "A fair $20$-sided die has faces numbered $1$ through $20$. If the die is rolled once, what is the probability of rolling a multiple of $3$ or a multiple of $4$?",
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
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** There are $6$ multiples of $3$ and $5$ multiples of $4$, and $12$ is in both lists, so $6 + 5 - 1 = 10$ faces qualify: $\\frac{10}{20} = \\frac{1}{2}$.\n\n**The Full Solution:**\nStep 1: Multiples of $3$ from $1$ to $20$: $3, 6, 9, 12, 15, 18$ (six). Multiples of $4$: $4, 8, 12, 16, 20$ (five).\nStep 2: A number that is a multiple of both $3$ and $4$ is a multiple of $12$; only $12$ qualifies, so there is $1$ overlap. Favorable faces: $6 + 5 - 1 = 10$.\nStep 3: Probability: $\\frac{10}{20} = \\frac{1}{2}$. Check by listing: $3, 4, 6, 8, 9, 12, 15, 16, 18, 20$ is ten different faces ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{4}$): counts only the five multiples of $4$.\n* Choice B ($\\frac{3}{10}$): counts only the six multiples of $3$.\n* Choice D ($\\frac{11}{20}$): adds $6 + 5$ without subtracting the face $12$, which was counted twice.\n\n**Test Day Takeaway:** For \"A or B,\" count A, count B, and subtract the outcomes counted twice; listing the outcomes is a reliable check.",
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
    question: "A bag contains only green chips and yellow chips. The probability of randomly selecting a green chip from the bag is $0.35$. There are $39$ yellow chips in the bag. How many green chips are in the bag?",
    correctAnswer: "21",
    explanation: "**SAT Pattern: Basic Probability**\n\n**The correct answer is $21$.**\n\n**The Fast Way (~15s):** Yellow chips are $1 - 0.35 = 0.65$ of the bag, so the bag holds $\\frac{39}{0.65} = 60$ chips, and $60 - 39 = 21$ are green.\n\n**The Full Solution:**\nStep 1: There are only two colors, so the probability of selecting a yellow chip is $1 - 0.35 = 0.65$.\nStep 2: Let $T$ be the total number of chips: $0.65T = 39$, so $T = 60$.\nStep 3: Green chips: $60 - 39 = 21$, or $0.35 \\times 60 = 21$. Check: $\\frac{21}{60} = 0.35$ ✓\n\n**Common Mistakes:**\n* $13.65$: multiplies the yellow count by the green probability, $0.35 \\times 39$.\n* $60$: reports the total number of chips instead of the green chips.\n* About $111.4$: divides $39$ by $0.35$, pairing the yellow count with the green probability.\n\n**Test Day Takeaway:** Match each count to its own probability; the known count and its probability give the total, and the total gives everything else.",
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
    question: "Of the $250$ tiles in a shipment, $36\\%$ are glazed. How many tiles in the shipment are glazed?",
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
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $36\\%$ of $250$ is $0.36 \\times 250 = 90$.\n\n**The Full Solution:**\nStep 1: Convert the percent to a decimal: $36\\% = 0.36$.\nStep 2: Multiply by the whole: $0.36 \\times 250 = 90$ glazed tiles.\nStep 3: Check: $10\\%$ of $250$ is $25$, so $36\\%$ is $3.6 \\times 25 = 90$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($36$): reads the percent as a number of tiles; that works only when the whole is $100$.\n* Choice C ($160$): the number of tiles that are not glazed, $64\\%$ of $250$.\n* Choice D ($214$): subtracts the percent from the total, $250 - 36$, mixing a percent with a count.\n\n**Test Day Takeaway:** A percent of a whole is the percent as a decimal times the whole; the percent is a count only when the whole is $100$.",
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
    question: "A questionnaire was sent to $k$ employees, and $30\\%$ of them returned it. If $51$ employees returned the questionnaire, what is the value of $k$?",
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
    question: "$44$ is $16\\%$ of $x$. What is the value of $x$?",
    correctAnswer: "275",
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**The correct answer is $275$.**\n\n**The Fast Way (~10s):** $0.16x = 44$, so $x = \\frac{44}{0.16} = 275$.\n\n**The Full Solution:**\nStep 1: \"$44$ is $16\\%$ of $x$\" translates to $0.16x = 44$.\nStep 2: Divide both sides by $0.16$: $x = \\frac{44}{0.16} = \\frac{4400}{16} = 275$.\nStep 3: Check: $16\\%$ of $275$ is $0.16 \\times 275 = 44$. $\\checkmark$\n\n**Common Mistakes:** Multiplying instead of dividing, $44 \\times 0.16 = 7.04$; dividing by $16$ instead of $0.16$, which gives $2.75$; or multiplying $44 \\times 16 = 704$ by forgetting that a percent is \"per hundred.\"\n\n**Test Day Takeaway:** Part $= \\frac{p}{100} \\times$ whole. If the part and the percent are known, the whole is the part divided by the decimal form of the percent.",
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
    question: "The table shows the mass, in kilograms, of each type of material collected during a community recycling drive. The mass of glass collected is $p\\%$ of the total mass collected. What is the value of $p$?",
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
    question: "A print shop printed $4{,}250$ posters. Of these, $72\\%$ were in color and the rest were in black and white. How many more posters were in color than in black and white?",
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
    question: "The flowers in a garden cover $k$ square feet, which is $12\\%$ of the garden's area. After $54$ square feet of flowers are replaced with grass, the flowers cover $7.5\\%$ of the garden's area. What is the value of $k$?",
    choices: [
      // distractor: reports the flower area left after the change, $0.075(1{,}200) = 90$ square feet
      { id: "A", text: "$90$" },
      { id: "B", text: "$144$" },
      // distractor: divides the replaced area by the starting percent, $\frac{54}{0.12} = 450$
      { id: "C", text: "$450$" },
      // distractor: divides the replaced area by the ending percent, $\frac{54}{0.075} = 720$
      { id: "D", text: "$720$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice B is correct.** The $54$ square feet replaced equal $12\\% - 7.5\\% = 4.5\\%$ of the garden, so the garden is $\\frac{54}{0.045} = 1{,}200$ square feet and $k = 0.12(1{,}200) = 144$.\n\n**The Fast Way (~60s):** The flower share dropped by $4.5$ percentage points, so $54$ square feet is $4.5\\%$ of the garden: $\\frac{54}{0.045} = 1{,}200$ square feet, and $12\\%$ of that is $144$.\n\n**The Full Solution:**\n\nStep 1: Let $G$ be the garden's area, in square feet. The flowers cover $0.12G$ before the change and $0.075G$ after it.\n\nStep 2: The replaced area is the drop in flower area: $0.12G - 0.075G = 54$, so $0.045G = 54$ and $G = 1{,}200$.\n\nStep 3: Compute the original flower area: $k = 0.12(1{,}200) = 144$. Check: after the change, the flowers cover $144 - 54 = 90$ square feet, and $\\frac{90}{1{,}200} = 0.075$, or $7.5\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n\n* Choice A ($90$): is the flower area left after the change, not the original flower area $k$.\n* Choice C ($450$): divides $54$ by $12\\%$, as though the replaced area were $12\\%$ of the garden.\n* Choice D ($720$): divides $54$ by $7.5\\%$, as though the replaced area were $7.5\\%$ of the garden.\n\n**Test Day Takeaway:** When two percents of the same unknown whole are compared, subtract the percents first -- the difference is what the given amount actually represents.",
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
    question: "A ferry can carry $240$ passengers. On one trip, it carried $65\\%$ of this number. How many passengers did it carry on that trip?",
    choices: [
      { id: "A", text: "$156$" },
      // distractor: subtracts 65 from 240
      { id: "B", text: "$175$" },
      // distractor: reports the capacity
      { id: "C", text: "$240$" },
      // distractor: adds 65 to 240
      { id: "D", text: "$305$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $65\\%$ of $240$ is $0.65 \\times 240 = 156$.\n\n**The Full Solution:**\nStep 1: The number of passengers on the trip is $65\\%$ of the capacity, $240$.\nStep 2: Convert and multiply: $0.65 \\times 240 = 156$.\nStep 3: Check: $50\\%$ of $240$ is $120$ and $15\\%$ of $240$ is $36$; $120 + 36 = 156$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($175$): subtracts $65$ from $240$, treating the percent as a number of passengers.\n* Choice C ($240$): reports the capacity instead of $65\\%$ of it.\n* Choice D ($305$): adds $65$ to $240$, again treating the percent as a count.\n\n**Test Day Takeaway:** A percent is never added to or subtracted from a quantity directly — convert it to a decimal and multiply by the base.",
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
    question: "$63$ is $28\\%$ of what number?",
    correctAnswer: "225",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**The correct answer is $225$.**\n\n**The Fast Way (~10s):** $0.28m = 63$, so $m = \\frac{63}{0.28} = 225$.\n\n**The Full Solution:**\nStep 1: Let $m$ be the number. \"$63$ is $28\\%$ of $m$\" gives $0.28m = 63$.\nStep 2: Divide: $m = \\frac{63}{0.28} = \\frac{6300}{28} = 225$.\nStep 3: Check: $28\\%$ of $225$ is $0.28 \\times 225 = 63$. $\\checkmark$\n\n**Common Mistakes:** Multiplying instead of dividing, $63 \\times 0.28 = 17.64$; dividing by $28$ rather than $0.28$, which gives $2.25$; or multiplying $63 \\times 28 = 1764$.\n\n**Test Day Takeaway:** \"Part is $p\\%$ of whole\" is one equation: $\\frac{p}{100} \\cdot \\text{whole} = \\text{part}$. Solve for whichever quantity is missing.",
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
    question: "$x$ is $18\\%$ greater than $150$. What is the value of $x$?",
    choices: [
      // distractor: reports only the 18% increase (0.18 × 150)
      { id: "A", text: "$27$" },
      // distractor: finds the number 18% less than 150 (0.82 × 150)
      { id: "B", text: "$123$" },
      // distractor: adds 18 instead of 18% of 150
      { id: "C", text: "$168$" },
      { id: "D", text: "$177$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** \"$18\\%$ greater\" means multiply by $1.18$: $1.18 \\times 150 = 177$.\n\n**The Full Solution:**\nStep 1: The increase is $18\\%$ of $150$: $0.18 \\times 150 = 27$.\nStep 2: Add the increase to the original value: $150 + 27 = 177$.\nStep 3: Check with one factor: $150 \\times 1.18 = 177$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($27$): reports only the increase, $0.18 \\times 150$, not the new value.\n* Choice B ($123$): subtracts the increase, $150 - 27$, which is $18\\%$ less than $150$.\n* Choice C ($168$): adds $18$ instead of $18\\%$ of $150$.\n\n**Test Day Takeaway:** \"$p\\%$ greater than\" a value is $\\left(1 + \\frac{p}{100}\\right)$ times that value — one multiplication, with the $1$ carrying the original amount.",
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
    question: "A freshly cut log has a mass of $45$ kilograms. After drying, its mass is $32\\%$ less. What is the mass, in kilograms, of the dried log?",
    correctAnswer: "30.6",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**The correct answer is $30.6$.**\n\n**The Fast Way (~10s):** \"$32\\%$ less\" keeps $68\\%$: $0.68 \\times 45 = 30.6$.\n\n**The Full Solution:**\nStep 1: A $32\\%$ decrease leaves $100\\% - 32\\% = 68\\%$ of the original mass.\nStep 2: Multiply: $0.68 \\times 45 = 30.6$ kilograms.\nStep 3: Check: the mass lost is $0.32 \\times 45 = 14.4$ kilograms, and $45 - 14.4 = 30.6$. $\\checkmark$\n\n**Common Mistakes:** Reporting $14.4$, the mass lost, instead of the mass remaining; subtracting $32$ kilograms to get $13$; or increasing instead of decreasing, $1.32 \\times 45 = 59.4$.\n\n**Test Day Takeaway:** \"$p\\%$ less than\" a value is $\\left(1 - \\frac{p}{100}\\right)$ times that value. Multiply by what remains, not by what was removed.",
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
    question: "The number of subscribers to a newsletter increased by $20\\%$ from 2022 to 2023 and then decreased by $25\\%$ from 2023 to 2024. There were $270$ subscribers in 2024. How many subscribers were there in 2022?",
    choices: [
      // distractor: multiplies 270 by the net factor 0.9 instead of dividing
      { id: "A", text: "$243$" },
      // distractor: undoes the 20% increase by multiplying 360 by 0.8
      { id: "B", text: "$288$" },
      { id: "C", text: "$300$" },
      // distractor: stops at the 2023 value, 270 ÷ 0.75
      { id: "D", text: "$360$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The 2024 count is the 2022 count $\\times 1.20 \\times 0.75 = 0.90 \\times$ the 2022 count. So the 2022 count is $\\frac{270}{0.90} = 300$.\n\n**The Full Solution:**\nStep 1: Let $n$ be the number of subscribers in 2022. In 2023 there were $1.20n$, and in 2024 there were $0.75(1.20n) = 0.90n$.\nStep 2: Set $0.90n = 270$ and solve: $n = \\frac{270}{0.90} = 300$.\nStep 3: Check forward: $300 \\times 1.20 = 360$, and $360 \\times 0.75 = 270$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($243$): multiplies $270$ by $0.90$ instead of dividing, running the net change forward a second time.\n* Choice B ($288$): finds the 2023 count $360$ correctly but then multiplies by $0.80$ to \"undo\" a $20\\%$ increase; undoing requires dividing by $1.20$.\n* Choice D ($360$): stops at the 2023 count, $\\frac{270}{0.75}$.\n\n**Test Day Takeaway:** Chain percent changes as multiplied factors, then divide by the product to go backward. Undoing \"$20\\%$ greater\" means dividing by $1.20$, not multiplying by $0.80$.",
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
    question: "The area of field B is $60\\%$ greater than the area of field A and is $2{,}400$ square meters greater than the area of field A. What is the area, in square meters, of field B?",
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
    question: "The number of members in a book club decreased from $75$ to $60$, a decrease of $p\\%$. What is the value of $p$?",
    choices: [
      // distractor: reports the decrease in members
      { id: "A", text: "$15$" },
      { id: "B", text: "$20$" },
      // distractor: divides the decrease by the new value (15/60)
      { id: "C", text: "$25$" },
      // distractor: reports the remaining percent (60/75)
      { id: "D", text: "$80$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The decrease is $75 - 60 = 15$ members, out of the original $75$: $\\frac{15}{75} = 0.20$, so $p = 20$.\n\n**The Full Solution:**\nStep 1: Percent decrease $= \\frac{\\text{original} - \\text{new}}{\\text{original}} \\times 100$.\nStep 2: Substitute: $\\frac{75 - 60}{75} \\times 100 = \\frac{15}{75} \\times 100 = 20$.\nStep 3: Check: $20\\%$ of $75$ is $15$, and $75 - 15 = 60$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): reports the drop in members, not the percent.\n* Choice C ($25$): divides the decrease by the new value, $\\frac{15}{60}$, instead of by the original.\n* Choice D ($80$): reports $\\frac{60}{75}$, the percent that remains, rather than the percent removed.\n\n**Test Day Takeaway:** Percent decrease is the change divided by the ORIGINAL value. The denominator is always where you started.",
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
    question: "The table shows the number of daily flights at a regional airport in two different years. From 2019 to 2023, the number of daily flights decreased by $p\\%$. What is the value of $p$?",
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
    question: "The table shows the capacity, in milliampere-hours, of a laptop battery when it was new and after one year of use. Over that year, the capacity of the battery decreased by $p\\%$. What is the value of $p$?",
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
    question: "The value of a car was $\\$25{,}000$. Over the next two years, its value decreased by $p\\%$ each year, to $\\$16{,}000$. What is the value of $p$?",
    correctAnswer: "20",
    explanation: "**SAT Pattern: Compound Percent Change — Solve for the Unknown Rate**\n\n**The correct answer is $20$.** Two equal decreases give $25{,}000\\left(1 - \\frac{p}{100}\\right)^{2} = 16{,}000$, so $\\left(1 - \\frac{p}{100}\\right)^{2} = 0.64$, $1 - \\frac{p}{100} = 0.8$, and $p = 20$.\n\n**The Fast Way (~40s):** $\\frac{16{,}000}{25{,}000} = 0.64$, and $\\sqrt{0.64} = 0.8$, so each year the car kept $80\\%$ of its value and lost $20\\%$.\n\n**The Full Solution:**\n\nStep 1: Write the model. Each year the value is multiplied by $1 - \\frac{p}{100}$, so after two years it is $25{,}000\\left(1 - \\frac{p}{100}\\right)^{2}$ dollars.\n\nStep 2: Set the model equal to $16{,}000$ and isolate the squared factor: $\\left(1 - \\frac{p}{100}\\right)^{2} = \\frac{16{,}000}{25{,}000} = 0.64$.\n\nStep 3: Take the positive square root and solve: $1 - \\frac{p}{100} = 0.8$, so $p = 20$. Check: $25{,}000(0.8) = 20{,}000$ after one year, and $20{,}000(0.8) = 16{,}000$ after two. $\\checkmark$\n\n**Common Mistakes:**\n\n* Finding the total decrease and halving it gives $\\frac{25{,}000 - 16{,}000}{25{,}000} = 36\\%$, then $18\\%$ per year. Percent changes compound, so they cannot be split evenly.\n* Answering $36$ reports the two-year decrease rather than the yearly rate.\n* Answering $80$ reports the percent of the value kept each year instead of the percent lost.\n\n**Test Day Takeaway:** Equal repeated percent changes mean a squared factor -- divide to isolate it, take the square root, then convert the kept fraction into the change.",
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
    question: "A box holds $50$ seed packets, and $18$ of them are basil. If one packet is selected at random, what is the probability that it is basil?",
    choices: [
      // distractor: divides 18 by 100 instead of by the 50 packets
      { id: "A", text: "$\\frac{9}{50}$" },
      { id: "B", text: "$\\frac{9}{25}$" },
      // distractor: forms the odds 18 basil to 32 non-basil instead of a probability
      { id: "C", text: "$\\frac{9}{16}$" },
      // distractor: gives the probability of selecting a packet that is NOT labeled basil
      { id: "D", text: "$\\frac{16}{25}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The probability is the number of basil packets over the total number of packets: $\\frac{18}{50} = \\frac{9}{25}$.\n\n**The Full Solution:**\nStep 1: A probability is $\\frac{\\text{number of favorable outcomes}}{\\text{total number of outcomes}}$. Here $18$ packets are basil and there are $50$ packets in all.\nStep 2: Write the ratio: $\\frac{18}{50}$.\nStep 3: Divide the numerator and denominator by $2$: $\\frac{9}{25}$. Check: $\\frac{9}{25} = 0.36$, and $0.36 \\times 50 = 18$ packets. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{9}{50}$): divides $18$ by $100$ rather than by the $50$ packets.\n* Choice C ($\\frac{9}{16}$): this is $\\frac{18}{32}$, the ratio of basil packets to non-basil packets — odds, not a probability.\n* Choice D ($\\frac{16}{25}$): this is $\\frac{32}{50}$, the probability of selecting a packet that is not basil.\n\n**Test Day Takeaway:** The denominator of a marginal probability is always the whole group, never the leftover part of it.",
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
    question: "Of the $250$ vehicles in a garage, $95$ are electric. If one of these vehicles is selected at random, what is the probability that it is electric? (Express your answer as a decimal or fraction, not as a percent.)",
    correctAnswer: "0.38",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**The correct answer is $0.38$.**\n\n**The Fast Way (~15s):** $\\frac{95}{250} = 0.38$.\n\n**The Full Solution:**\nStep 1: The probability of selecting an electric vehicle is the number of electric vehicles divided by the total number of vehicles.\nStep 2: Substitute the given counts: $\\frac{95}{250}$.\nStep 3: Divide: $95 \\div 250 = 0.38$. Check: $0.38 \\times 250 = 95$. $\\checkmark$\n\n**Common Mistakes:** Dividing the total by the part, $250 \\div 95 \\approx 2.63$, which is greater than $1$ and so cannot be a probability; using the $155$ non-electric vehicles as the denominator, $95 \\div 155 \\approx 0.61$; or reporting the complement, $155 \\div 250 = 0.62$.\n\n**Test Day Takeaway:** A probability is always at most $1$ — a value above $1$ means the part and the whole were divided in the wrong order.",
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
    question: "The table shows the number of visitors to a museum over one weekend, by ticket type and day. If one of these visitors is selected at random, what is the probability of selecting a visitor who purchased a student ticket?",
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
    question: "The table shows the number of musicians in each section of a community orchestra. If one of these musicians is selected at random, what is the probability of selecting a musician who is not in the strings section? (Express your answer as a decimal or fraction, not as a percent.)",
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
    question: "The table shows the $200$ repairs a bicycle shop completed last month, by frame material and type of service. If one of these repairs is selected at random, what is the probability that it was performed on a steel-frame bicycle?",
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
    question: "The dot plot shows the number of service calls a technician received on each of $20$ days. If one of these days is selected at random, what is the probability that the technician received more than $3$ service calls on that day? (Express your answer as a decimal or fraction, not as a percent.)",
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
    question: "The table shows the number of observations recorded at a monitoring station for three bird species. Observations of a fourth species, thrush, are not shown. If one observation from the station is selected at random, the probability of selecting a thrush observation is $0.32$. How many observations were recorded at the station in all?",
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
    question: "Each tile in a shipment is matte, satin, or gloss. If a tile is selected at random, the probability that it is matte is $0.28$ and the probability that it is satin is $0.37$. If $210$ tiles are gloss, how many tiles are in the shipment?",
    correctAnswer: "600",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**The correct answer is $600$.**\n\n**The Fast Way (~35s):** Gloss accounts for $1 - 0.28 - 0.37 = 0.35$ of the shipment, so the shipment holds $\\frac{210}{0.35} = 600$ tiles.\n\n**The Full Solution:**\nStep 1: Every tile is matte, satin, or gloss, so their probabilities sum to $1$: $P(\\text{gloss}) = 1 - 0.28 - 0.37 = 0.35$.\nStep 2: Let $n$ be the number of tiles in the shipment. Then $0.35n = 210$.\nStep 3: Solve: $n = \\frac{210}{0.35} = 600$. Check: $0.28(600) = 168$ matte and $0.37(600) = 222$ satin, and $168 + 222 + 210 = 600$. $\\checkmark$\n\n**Common Mistakes:** Multiplying instead of dividing, $0.35 \\times 210 = 73.5$, which is smaller than the gloss count itself; dividing by the matte probability, $\\frac{210}{0.28} = 750$; or dividing by the combined matte-and-satin probability, $\\frac{210}{0.65} \\approx 323.1$.\n\n**Test Day Takeaway:** When categories are exhaustive, the missing probability is $1$ minus the others — and a count divided by its probability gives the whole.",
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
    question: "Of the attendees at a conference, $60\\%$ are first-time attendees. Of these, $25\\%$ registered on site. What percent of all the attendees are first-time attendees who registered on site?",
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
    question: "At a hospital, $45\\%$ of the nurses work the night shift, and $60\\%$ of those nurses are certified in critical care. What percent of all the nurses work the night shift and are certified in critical care?",
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
    question: "At a warehouse, $75\\%$ of the packages are shipped by ground, and $16\\%$ of those packages are marked fragile. If one package is selected at random, what is the probability that it is shipped by ground and marked fragile?",
    choices: [
      // distractor: writes 16% as 0.016 before multiplying, giving 0.75 × 0.016 = 0.012
      { id: "A", text: "$0.012$" },
      { id: "B", text: "$0.12$" },
      // distractor: reports 0.16, the fragile rate among ground packages only, as if it applied to every package
      { id: "C", text: "$0.16$" },
      // distractor: adds the two rates, 0.75 + 0.16 = 0.91, instead of multiplying them
      { id: "D", text: "$0.91$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The $16\\%$ is a share of the ground packages, so multiply: $0.75 \\times 0.16 = 0.12$.\n\n**The Full Solution:**\nStep 1: The fragile rate is measured only among packages shipped by ground, so the probability of both is the ground share times that rate.\nStep 2: Convert to decimals and multiply: $0.75 \\times 0.16 = 0.12$.\nStep 3: Check with $400$ packages: $0.75(400) = 300$ ship by ground, $0.16(300) = 48$ of them are fragile, and $\\frac{48}{400} = 0.12$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.012$): writes $16\\%$ as $0.016$. A percent is divided by $100$, so $16\\% = 0.16$.\n* Choice C ($0.16$): reports the fragile rate among ground packages as if it described every package.\n* Choice D ($0.91$): adds the rates. A probability of \"both\" can never exceed either of the probabilities that produce it.\n\n**Test Day Takeaway:** \"Of those\" signals a rate inside a group; multiply it by the group's share to get a share of the whole.",
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
    question: "Of the orchids in a greenhouse, $35\\%$ are hybrids, and $40\\%$ of the hybrids are in bloom. If one orchid is selected at random, what is the probability of selecting a hybrid in bloom? (Express your answer as a decimal or fraction, not as a percent.)",
    correctAnswer: "0.14",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**The correct answer is $0.14$.** Equivalent answers such as $\\frac{7}{50}$ are also correct.\n\n**The Fast Way (~20s):** The $40\\%$ is a share of the hybrids, so multiply: $0.35 \\times 0.40 = 0.14$.\n\n**The Full Solution:**\nStep 1: The in-bloom rate is measured only among hybrids, so the probability of a hybrid in bloom is the hybrid share times that rate.\nStep 2: Convert both percents to decimals and multiply: $0.35 \\times 0.40 = 0.14$.\nStep 3: Check with $500$ orchids: $0.35(500) = 175$ are hybrids, $0.40(175) = 70$ of them are in bloom, and $\\frac{70}{500} = 0.14$ ✓\n\n**Common Mistakes:**\n* $0.4$: reports the in-bloom rate within the hybrid group, not as a share of all orchids.\n* $0.75$: adds the two rates instead of multiplying them.\n* $14$: gives the answer as a percent; the item asks for a decimal or fraction.\n\n**Test Day Takeaway:** A probability of \"a hybrid that is in bloom\" is a share of the whole collection, so it must come out smaller than both $0.35$ and $0.40$.",
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
    question: "Of the trips taken on a city's rental bikes, $30\\%$ begin downtown, and $65\\%$ of those trips also end downtown. What percent of all the trips begin and end downtown?",
    choices: [
      // distractor: misplaces the decimal, computing 0.30 × 0.65 = 0.195 and then dividing by 100 again
      { id: "A", text: "$1.95\\%$" },
      { id: "B", text: "$19.5\\%$" },
      // distractor: subtracts the two percents, 65 − 30 = 35, instead of multiplying
      { id: "C", text: "$35\\%$" },
      // distractor: reports the rate among downtown-starting trips as a share of all trips
      { id: "D", text: "$65\\%$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $0.30 \\times 0.65 = 0.195$, which is $19.5\\%$ of all trips.\n\n**The Full Solution:**\nStep 1: The $65\\%$ is measured among trips that begin downtown, so it must be applied to the $30\\%$ share, not to all trips.\nStep 2: Multiply the decimals: $0.30 \\times 0.65 = 0.195$.\nStep 3: Convert to a percent: $0.195 = 19.5\\%$. Check with $1{,}000$ trips: $300$ begin downtown, $0.65(300) = 195$ of them end downtown, and $\\frac{195}{1{,}000} = 19.5\\%$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.95\\%$): finds $0.195$ and then divides by $100$ a second time while converting.\n* Choice C ($35\\%$): subtracts the percents. Percents taken of different wholes do not combine by addition or subtraction.\n* Choice D ($65\\%$): reports the rate within the downtown-starting trips as if it applied to every trip.\n\n**Test Day Takeaway:** A percent \"of those\" is a percent of a part; multiply it by the part's share before comparing it with the whole.",
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
    question: "Of the households in a town, $62\\%$ have internet service, and $55\\%$ of those households also pay for a streaming service. What percent of the town's households have both?",
    correctAnswer: "34.1",
    explanation: "**SAT Pattern: Joint Probability via Multiplication**\n\n**The correct answer is $34.1$.**\n\n**The Fast Way (~20s):** $0.62 \\times 0.55 = 0.341$, or $34.1\\%$.\n\n**The Full Solution:**\nStep 1: The $55\\%$ is measured among households with internet service, so the share with both is $62\\%$ of the households times that rate.\nStep 2: Multiply the decimals: $0.62 \\times 0.55 = 0.341$.\nStep 3: Convert to a percent: $0.341 = 34.1\\%$. Check with $1{,}000$ households: $620$ have internet, $0.55(620) = 341$ of them stream, and $\\frac{341}{1{,}000} = 34.1\\%$ ✓\n\n**Common Mistakes:**\n* $55$: reports the rate among internet households as a share of all households.\n* $0.341$: stops at the decimal; the question asks for a percent.\n* $117$: adds the two percents, giving a value over $100\\%$.\n\n**Test Day Takeaway:** \"Both\" from a rate inside a group means multiply; the result must be smaller than either percent you started with.",
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
    question: "At a driving school, $40\\%$ of students take morning classes and the rest take evening classes. Of these groups, $85\\%$ and $70\\%$, respectively, passed the test. What is the probability that a randomly selected student passed?",
    choices: [
      // distractor: counts only the morning students who passed, 0.40 × 0.85 = 0.34
      { id: "A", text: "$0.34$" },
      // distractor: counts only the evening students who passed, 0.60 × 0.70 = 0.42
      { id: "B", text: "$0.42$" },
      { id: "C", text: "$0.76$" },
      // distractor: averages the two pass rates, (0.85 + 0.70)/2 = 0.775, ignoring that the groups differ in size
      { id: "D", text: "$0.775$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Weight each pass rate by its group's share: $0.40(0.85) + 0.60(0.70) = 0.34 + 0.42 = 0.76$.\n\n**The Full Solution:**\nStep 1: The rest of the students take evening classes, so the evening share is $1 - 0.40 = 0.60$.\nStep 2: Find each \"group and passed\" probability: morning $0.40 \\times 0.85 = 0.34$; evening $0.60 \\times 0.70 = 0.42$.\nStep 3: The two groups do not overlap, so add: $0.34 + 0.42 = 0.76$. Check with $100$ students: $40(0.85) = 34$ and $60(0.70) = 42$ passed, and $\\frac{76}{100} = 0.76$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.34$): counts the morning students who passed and stops.\n* Choice B ($0.42$): counts the evening students who passed and stops.\n* Choice D ($0.775$): averages $85\\%$ and $70\\%$ as if the groups were the same size; the larger evening group pulls the overall rate toward $70\\%$.\n\n**Test Day Takeaway:** An overall rate built from groups of different sizes is a weighted average: multiply each rate by its group's share, then add.",
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
    question: "Of the pastries at a bakery, $24\\%$ are filled, and $9\\%$ are both filled and topped with sugar. If a filled pastry is selected at random, what is the probability that it is topped with sugar? (Express your answer as a decimal or fraction, not as a percent.)",
    correctAnswer: "3/8",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**The correct answer is $\\frac{3}{8}$.** Equivalent answers such as $0.375$ are also correct.\n\n**The Fast Way (~30s):** Both percents are shares of all the pastries, so among the filled ones the share topped with sugar is $\\frac{9}{24} = \\frac{3}{8}$.\n\n**The Full Solution:**\nStep 1: \"If a filled pastry is selected\" restricts the selection to the filled pastries, so the denominator is the $24\\%$ that are filled.\nStep 2: The pastries that are filled and topped with sugar make up $9\\%$ of all pastries, so the conditional probability is $\\frac{0.09}{0.24}$.\nStep 3: Simplify: $\\frac{0.09}{0.24} = \\frac{9}{24} = \\frac{3}{8}$. Check with $800$ pastries: $192$ are filled, $72$ are filled and topped, and $\\frac{72}{192} = \\frac{3}{8}$ ✓\n\n**Common Mistakes:**\n* $0.09$: reports the share of all pastries that are filled and topped, ignoring that the selection is made only from filled pastries.\n* $0.0216$: multiplies $0.24 \\times 0.09$, treating the $9\\%$ as a rate among the filled pastries.\n* $0.15$: subtracts $9\\%$ from $24\\%$, which gives the share of all pastries that are filled but not topped.\n\n**Test Day Takeaway:** \"Given\" or \"if a filled pastry is selected\" changes the denominator to that group; divide the \"both\" share by the group's share.",
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
    question: "Of the rock samples in a collection, $28\\%$ are sedimentary. What percent of the rock samples are not sedimentary?",
    choices: [
      // distractor: computes 1 − 0.28 = 0.72 and labels the decimal as a percent
      { id: "A", text: "$0.72\\%$" },
      // distractor: repeats the given percent instead of taking its complement
      { id: "B", text: "$28\\%$" },
      { id: "C", text: "$72\\%$" },
      // distractor: adds the percent to 100 instead of subtracting it
      { id: "D", text: "$128\\%$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent Complement**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $100\\% - 28\\% = 72\\%$.\n\n**The Full Solution:**\nStep 1: Every sample either is or is not sedimentary, so the two percents add to $100\\%$.\nStep 2: Subtract the given percent from the whole: $100 - 28 = 72$.\nStep 3: Check: $28\\% + 72\\% = 100\\%$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.72\\%$): computes $1 - 0.28 = 0.72$ and attaches a percent sign; the decimal $0.72$ is $72\\%$.\n* Choice B ($28\\%$): reports the share that is sedimentary.\n* Choice D ($128\\%$): adds instead of subtracting; no part of a collection can be more than $100\\%$ of it.\n\n**Test Day Takeaway:** A category and its complement always total $100\\%$; subtract, then add the pair back to confirm.",
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
    question: "A library lent $1{,}250$ items last month, and $64\\%$ of these items were books. How many of the items were not books?",
    correctAnswer: "450",
    explanation: "**SAT Pattern: Percent Complement**\n\n**The correct answer is $450$.**\n\n**The Fast Way (~15s):** $100\\% - 64\\% = 36\\%$ were not books, and $0.36 \\times 1{,}250 = 450$.\n\n**The Full Solution:**\nStep 1: The items that were not books are the complement of the $64\\%$ that were: $100 - 64 = 36$, so $36\\%$.\nStep 2: Take $36\\%$ of the total: $0.36 \\times 1{,}250 = 450$.\nStep 3: Check: $0.64 \\times 1{,}250 = 800$ books, and $800 + 450 = 1{,}250$ ✓\n\n**Common Mistakes:**\n* $800$: finds the number of books, which is the group the question excludes.\n* $36$: stops at the percent and never applies it to the $1{,}250$ items.\n* $1{,}186$: subtracts $64$ items instead of $64\\%$ of the items.\n\n**Test Day Takeaway:** Take the complement of the percent first, then multiply once by the total.",
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
    question: "A jacket's sale price is $\\$63$, which is $25\\%$ less than its original price of $k$ dollars. What is the value of $k$?",
    choices: [
      // distractor: takes 25% off the sale price, 0.75 × 63 = 47.25, instead of working back to the original
      { id: "A", text: "$47.25$" },
      // distractor: adds 25% of the sale price, 1.25 × 63 = 78.75, but the 25% is a percent of the original price
      { id: "B", text: "$78.75$" },
      { id: "C", text: "$84$" },
      // distractor: divides by 0.25 instead of 0.75, treating 63 as 25% of the original
      { id: "D", text: "$252$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Reverse Percent (Find Original from Sale)**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** A price $25\\%$ less is $75\\%$ of the original, so $0.75k = 63$ and $k = \\frac{63}{0.75} = 84$.\n\n**The Full Solution:**\nStep 1: \"$25\\%$ less than $k$\" means $k - 0.25k = 0.75k$, so $0.75k = 63$.\nStep 2: Divide both sides by $0.75$: $k = \\frac{63}{0.75}$.\nStep 3: Compute: $k = 84$. Check: $25\\%$ of $84$ is $21$, and $84 - 21 = 63$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($47.25$): takes $25\\%$ off the sale price again, moving further from the original instead of back toward it.\n* Choice B ($78.75$): adds $25\\%$ of $63$. The discount is $25\\%$ of the original price, which is larger than $63$, so adding $25\\%$ of $63$ falls short.\n* Choice D ($252$): solves $0.25k = 63$, treating the sale price as the $25\\%$ that was removed.\n\n**Test Day Takeaway:** To undo a percent decrease, divide by the remaining fraction ($1 - 0.25 = 0.75$); never add the same percent back.",
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
    question: "The table shows the number of trees of each species at a nursery. Of these trees, $56\\%$ were sold by the end of the season. How many of the trees were not sold by the end of the season?",
    diagram: { type: "dataTable", params: { headers: ["Species", "Trees"], rows: [["Maple", "480"], ["Birch", "350"], ["Spruce", "370"], ["Dogwood", "250"]] } },
    correctAnswer: "638",
    explanation: "**SAT Pattern: Percent Complement**\n\n**The correct answer is $638$.**\n\n**The Fast Way (~30s):** The nursery has $1{,}450$ trees, and $100\\% - 56\\% = 44\\%$ were not sold: $0.44 \\times 1{,}450 = 638$.\n\n**The Full Solution:**\nStep 1: Add the counts in the table: $480 + 350 + 370 + 250 = 1{,}450$ trees.\nStep 2: The unsold trees are the complement of the $56\\%$ sold: $100 - 56 = 44$, so $44\\%$ were not sold.\nStep 3: Take $44\\%$ of the total: $0.44 \\times 1{,}450 = 638$. Check: $0.56 \\times 1{,}450 = 812$, and $812 + 638 = 1{,}450$ ✓\n\n**Common Mistakes:**\n* $812$: finds the number of trees that were sold.\n* $1{,}394$: subtracts $56$ trees instead of $56\\%$ of the trees.\n* $528$: takes $44\\%$ of a total that leaves out one type, such as $1{,}200$ without the dogwoods.\n\n**Test Day Takeaway:** Total the table first, take the complement of the percent, then multiply once.",
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
    question: "The table shows the number of passengers who boarded a train at each of four stations one morning. Of these passengers, $18\\%$ bought a ticket on board. How many of these passengers did not buy a ticket on board?",
    diagram: { type: "dataTable", params: { headers: ["Station", "Passengers"], rows: [["Ashfield", "210"], ["Brookline", "190"], ["Cranmore", "240"], ["Deerpath", "160"]] } },
    choices: [
      // distractor: finds the passengers who did buy a ticket on board, 0.18 × 800 = 144
      { id: "A", text: "$144$" },
      { id: "B", text: "$656$" },
      // distractor: subtracts 18 passengers instead of 18% of the passengers, 800 − 18 = 782
      { id: "C", text: "$782$" },
      // distractor: reports the total number of passengers without removing anyone
      { id: "D", text: "$800$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent Complement**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $210 + 190 + 240 + 160 = 800$ passengers, and $82\\%$ of them did not buy on board: $0.82 \\times 800 = 656$.\n\n**The Full Solution:**\nStep 1: Add the counts in the table: $210 + 190 + 240 + 160 = 800$ passengers.\nStep 2: The passengers who did not buy on board are the complement of the $18\\%$: $100 - 18 = 82$, so $82\\%$.\nStep 3: Take $82\\%$ of the total: $0.82 \\times 800 = 656$. Check: $0.18 \\times 800 = 144$, and $144 + 656 = 800$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($144$): counts the passengers who did buy a ticket on board.\n* Choice C ($782$): subtracts $18$ passengers instead of $18\\%$ of the passengers.\n* Choice D ($800$): is the total number of passengers, before anyone is removed.\n\n**Test Day Takeaway:** When a percent describes the group the question excludes, use its complement.",
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
    question: "A vendor pays $15\\%$ of each sale to a fair's organizer and then spends $20\\%$ of the remaining amount on materials. What percent of each sale does the vendor keep?",
    correctAnswer: "68",
    explanation: "**SAT Pattern: Percent Complement**\n\n**The correct answer is $68$.**\n\n**The Fast Way (~20s):** The vendor keeps $85\\%$ and then $80\\%$ of that: $0.85 \\times 0.80 = 0.68$, or $68\\%$.\n\n**The Full Solution:**\nStep 1: After paying the organizer, the vendor has $100\\% - 15\\% = 85\\%$ of the sale.\nStep 2: The materials take $20\\%$ of that remaining amount, so the vendor keeps $80\\%$ of it: $0.80 \\times 0.85 = 0.68$.\nStep 3: Convert: $0.68 = 68\\%$. Check with a \\$100 sale: \\$15 to the organizer leaves \\$85, $20\\%$ of \\$85 is \\$17, and $85 - 17 = 68$ ✓\n\n**Common Mistakes:**\n* $65$: subtracts both percents from $100\\%$, but the $20\\%$ is taken from the remaining $85\\%$, not from the whole sale.\n* $17$: reports the materials cost as a percent of the sale instead of what the vendor keeps.\n* $35$: adds the two percents and reports the total paid out.\n\n**Test Day Takeaway:** A percent \"of the remaining amount\" multiplies; keep the complements, $0.85$ and $0.80$, and multiply them.",
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
    question: "Of the tagged fish released into a river, $65\\%$ were detected by sensor $A$. Of the fish not detected by sensor $A$, $40\\%$ were detected by sensor $B$. What percent of the fish released were detected by neither sensor?",
    choices: [
      // distractor: finds the fish detected by sensor B only, 0.35 × 0.40 = 0.14, instead of those detected by neither
      { id: "A", text: "$14\\%$" },
      { id: "B", text: "$21\\%$" },
      // distractor: reports the 35% missed by sensor A without removing the fish that sensor B detected
      { id: "C", text: "$35\\%$" },
      // distractor: reports 60%, the share missed by sensor B within the fish that sensor A missed, as a share of all fish
      { id: "D", text: "$60\\%$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent Complement**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $35\\%$ were missed by sensor $A$, and $60\\%$ of those were also missed by sensor $B$: $0.35 \\times 0.60 = 0.21$, or $21\\%$.\n\n**The Full Solution:**\nStep 1: Sensor $A$ missed $100\\% - 65\\% = 35\\%$ of the fish released.\nStep 2: Sensor $B$ detected $40\\%$ of those, so it missed $100\\% - 40\\% = 60\\%$ of them.\nStep 3: Multiply the two complements: $0.35 \\times 0.60 = 0.21$, or $21\\%$. Check: detected by $A$, $65\\%$; by $B$ only, $0.35(0.40) = 14\\%$; by neither, $21\\%$; and $65 + 14 + 21 = 100$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($14\\%$): finds the fish detected by sensor $B$ alone, which is the complement of the answer within the missed group.\n* Choice C ($35\\%$): stops after sensor $A$ and ignores the fish that sensor $B$ caught.\n* Choice D ($60\\%$): is the share sensor $B$ missed among the fish sensor $A$ missed, not a share of all the fish.\n\n**Test Day Takeaway:** For \"neither,\" chain the complements: multiply what the first step missed by what the second step missed.",
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
    question: "The table shows the number of tiles fired in each of three kilns. Of all these tiles, $6.5\\%$ cracked, and $52$ of the cracked tiles were from kilns $1$ and $2$. How many tiles from kiln $3$ did not crack?",
    diagram: { type: "dataTable", params: { headers: ["Kiln", "Tiles fired"], rows: [["Kiln 1", "520"], ["Kiln 2", "460"], ["Kiln 3", "420"]] } },
    correctAnswer: "381",
    explanation: "**SAT Pattern: Percent Complement**\n\n**The correct answer is $381$.**\n\n**The Fast Way (~45s):** $0.065 \\times 1{,}400 = 91$ tiles cracked, so kiln $3$ had $91 - 52 = 39$ cracked tiles and $420 - 39 = 381$ that did not crack.\n\n**The Full Solution:**\nStep 1: Add the counts in the table: $520 + 460 + 420 = 1{,}400$ tiles, and $6.5\\%$ of them cracked: $0.065 \\times 1{,}400 = 91$.\nStep 2: Kilns $1$ and $2$ account for $52$ cracked tiles, so kiln $3$ had $91 - 52 = 39$ cracked tiles.\nStep 3: The rest of kiln $3$'s tiles did not crack: $420 - 39 = 381$. Check: $52 + 39 = 91$ cracked in all, and $381 + 39 = 420$ ✓\n\n**Common Mistakes:**\n* $39$: finds kiln $3$'s cracked tiles, the group the question excludes.\n* $1{,}309$: finds the tiles from all three kilns that did not crack, $1{,}400 - 91$.\n* $393$: applies $6.5\\%$ to kiln $3$ alone, $420 - 0.065(420) \\approx 393$, ignoring the given count of $52$, so the kilns' crack rates are assumed equal when they are not.\n\n**Test Day Takeaway:** A percent of the whole gives a total count; subtract the parts you are told about to isolate the one group you need, then take its complement.",
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
    question: "The table shows the number of animals of three species tagged during a survey. The number of sea otters tagged was $20\\%$ of the number of harbor seals tagged. The number of sea otters tagged was what percent of the number of sea lions tagged?",
    diagram: { type: "dataTable", params: { headers: ["Species", "Number tagged"], rows: [["Harbor seal", "120"], ["Sea lion", "480"], ["Fur seal", "300"]] } },
    choices: [
      { id: "A", text: "$5\\%$" },
      // distractor: repeats the given percent, which compares otters with harbor seals rather than sea lions
      { id: "B", text: "$20\\%$" },
      // distractor: reports harbor seals as a percent of sea lions, 120/480 = 25%
      { id: "C", text: "$25\\%$" },
      // distractor: adds the two link percents, 20 + 25, instead of multiplying them
      { id: "D", text: "$45\\%$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Sea otters: $0.20 \\times 120 = 24$. Then $\\frac{24}{480} = 0.05$, or $5\\%$.\n\n**The Full Solution:**\nStep 1: Read the table: $120$ harbor seals and $480$ sea lions were tagged.\nStep 2: Find the sea otters: $20\\%$ of $120$ is $0.20 \\times 120 = 24$.\nStep 3: Compare with the sea lions: $\\frac{24}{480} = 0.05 = 5\\%$. Check by chaining the links: $0.20 \\times \\frac{120}{480} = 0.20 \\times 0.25 = 0.05$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($20\\%$): repeats the given percent, which compares otters with harbor seals, not with sea lions.\n* Choice C ($25\\%$): finds harbor seals as a percent of sea lions and stops one link short.\n* Choice D ($45\\%$): adds the two link percents; percents of different wholes multiply.\n\n**Test Day Takeaway:** Change the base one link at a time: a percent of a percent multiplies.",
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
    question: "$24$ is $p\\%$ of $40\\%$ of $150$. What is the value of $p$?",
    choices: [
      // distractor: takes 40% of 24, 0.40 × 24 = 9.6, instead of 40% of 150
      { id: "A", text: "$9.6$" },
      // distractor: skips the 40% link and compares 24 directly with 150, 24/150 = 16%
      { id: "B", text: "$16$" },
      { id: "C", text: "$40$" },
      // distractor: stops at 40% of 150 = 60 and reports that value as p
      { id: "D", text: "$60$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $40\\%$ of $150$ is $60$, and $24$ is $\\frac{24}{60} = 0.40$ of $60$, so $p = 40$.\n\n**The Full Solution:**\nStep 1: Work from the inside out: $40\\%$ of $150$ is $0.40 \\times 150 = 60$.\nStep 2: The equation becomes $24 = \\frac{p}{100}(60)$.\nStep 3: Solve: $\\frac{p}{100} = \\frac{24}{60} = 0.4$, so $p = 40$. Check: $0.40 \\times 0.40 \\times 150 = 24$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($9.6$): applies the $40\\%$ to $24$ instead of to $150$.\n* Choice B ($16$): skips the middle link and finds $24$ as a percent of $150$.\n* Choice D ($60$): stops after the first step and reports $40\\%$ of $150$.\n\n**Test Day Takeaway:** In \"$p\\%$ of $q\\%$ of $N$,\" evaluate the known percent first, then solve for the unknown percent of that result.",
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
    question: "Of the $240$ athletes at a track meet, $r\\%$ entered the long jump. The number who entered the high jump was $30\\%$ of the number who entered the long jump. If $18$ athletes entered the high jump, what is the value of $r$?",
    correctAnswer: "25",
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~30s):** $18$ is $30\\%$ of the long jump count, so $\\frac{18}{0.30} = 60$ entered the long jump, and $\\frac{60}{240} = 25\\%$.\n\n**The Full Solution:**\nStep 1: Let $L$ be the number who entered the long jump. Then $0.30L = 18$, so $L = 60$.\nStep 2: $L$ is $r\\%$ of $240$: $\\frac{r}{100}(240) = 60$.\nStep 3: Solve: $\\frac{r}{100} = \\frac{60}{240} = 0.25$, so $r = 25$. Check: $25\\%$ of $240$ is $60$, and $30\\%$ of $60$ is $18$ ✓\n\n**Common Mistakes:**\n* $7.5$: finds $18$ as a percent of $240$, skipping the long jump link.\n* $60$: stops at the long jump count instead of converting it to a percent of $240$.\n* $5.4$: multiplies $0.30 \\times 18$ instead of dividing $18$ by $0.30$.\n\n**Test Day Takeaway:** Walk the chain backward one link at a time: undo the $30\\%$ by dividing, then compare the result with the total.",
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
    question: "The number $x$ is $60\\%$ of the number $y$, and $y$ is $30\\%$ less than the positive number $z$. The number $x$ is what percent of $z$?",
    choices: [
      // distractor: multiplies by 0.30 instead of 0.70, treating '30% less than' as '30% of'
      { id: "A", text: "$18\\%$" },
      // distractor: subtracts the percents, 60 − 30 = 30
      { id: "B", text: "$30\\%$" },
      { id: "C", text: "$42\\%$" },
      // distractor: adds the percents, 60 + 30 = 90
      { id: "D", text: "$90\\%$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $y = 0.70z$, so $x = 0.60(0.70z) = 0.42z$, which is $42\\%$ of $z$.\n\n**The Full Solution:**\nStep 1: \"$30\\%$ less than $z$\" means $y = z - 0.30z = 0.70z$.\nStep 2: Substitute into $x = 0.60y$: $x = 0.60(0.70z)$.\nStep 3: Multiply: $x = 0.42z$, so $x$ is $42\\%$ of $z$. Check with $z = 100$: $y = 70$ and $x = 0.60(70) = 42$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($18\\%$): uses $y = 0.30z$, reading \"$30\\%$ less than\" as \"$30\\%$ of.\"\n* Choice B ($30\\%$): subtracts the percents instead of combining the multipliers.\n* Choice D ($90\\%$): adds the percents; each percent is taken of a different number, so the multipliers combine by multiplication.\n\n**Test Day Takeaway:** Turn every percent phrase into a multiplier ($60\\%$ of $\\to 0.60$, $30\\%$ less than $\\to 0.70$), then multiply along the chain.",
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
    question: "At a film festival, $45\\%$ of the films shown are documentaries, and $20\\%$ of the documentaries are from other countries. What percent of the films shown are documentaries from other countries?",
    choices: [
      { id: "A", text: "$9\\%$" },
      // distractor: reports the 20% rate among documentaries as a share of all films
      { id: "B", text: "$20\\%$" },
      // distractor: subtracts the percents, 45 − 20 = 25
      { id: "C", text: "$25\\%$" },
      // distractor: adds the percents, 45 + 20 = 65
      { id: "D", text: "$65\\%$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $20\\%$ of $45\\%$ is $0.20 \\times 0.45 = 0.09$, or $9\\%$.\n\n**The Full Solution:**\nStep 1: The $20\\%$ is a share of the documentaries, which are themselves $45\\%$ of the films.\nStep 2: Chain the two shares: $0.20 \\times 0.45 = 0.09$.\nStep 3: Convert: $0.09 = 9\\%$. Check with $200$ films: $90$ are documentaries, and $20\\%$ of $90$ is $18$, which is $\\frac{18}{200} = 9\\%$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($20\\%$): is the share among documentaries, not among all films.\n* Choice C ($25\\%$): subtracts the percents.\n* Choice D ($65\\%$): adds the percents, which would be more films than are documentaries.\n\n**Test Day Takeaway:** A percent of a percent multiplies, and the result is always smaller than both.",
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
    question: "$x$ is $60\\%$ of $y$, and $y$ is $150\\%$ of $z$. If $z = 18$, what is the value of $x$?",
    correctAnswer: "16.2",
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**The correct answer is $16.2$.**\n\n**The Fast Way (~20s):** $x = 0.60(1.50)(18) = 0.90(18) = 16.2$.\n\n**The Full Solution:**\nStep 1: Find $y$: $150\\%$ of $18$ is $1.50 \\times 18 = 27$.\nStep 2: Find $x$: $60\\%$ of $27$ is $0.60 \\times 27 = 16.2$.\nStep 3: Check with the combined multiplier: $0.60 \\times 1.50 = 0.90$, and $0.90 \\times 18 = 16.2$ ✓\n\n**Common Mistakes:**\n* $27$: stops at $y$.\n* $10.8$: skips the $150\\%$ link and takes $60\\%$ of $18$.\n* $7.2$: divides by $1.50$ instead of multiplying, computing $\\frac{0.60(18)}{1.50}$.\n\n**Test Day Takeaway:** A percent over $100\\%$ is a multiplier greater than $1$; multiply the links in order and the base takes care of itself.",
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
    question: "The table shows the number of acres of corn planted in three fields last year. This year, the corn in field A covered $120\\%$ of last year's area and the corn in field B covered $50\\%$ of last year's area. The corn in all three fields covered $80\\%$ of last year's total area. How many acres of corn were planted in field C this year?",
    diagram: { type: "dataTable", params: { headers: ["Field", "Corn (acres)"], rows: [["A", "2.5"], ["B", "6.0"], ["C", "1.5"]] } },
    choices: [
      // distractor: applies the combined 80% factor to field C alone, 0.80 × 1.5 = 1.2
      { id: "A", text: "$1.2$" },
      // distractor: applies field A's 120% factor to field C, 1.20 × 1.5 = 1.8
      { id: "B", text: "$1.8$" },
      { id: "C", text: "$2.0$" },
      // distractor: subtracts the new A and B areas from last year's total of 10 instead of this year's total of 8, 10 − 3 − 3 = 4
      { id: "D", text: "$4.0$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** This year's total is $0.80(10) = 8$ acres; field A has $1.20(2.5) = 3$ and field B has $0.50(6) = 3$, so field C has $8 - 3 - 3 = 2.0$ acres.\n\n**The Full Solution:**\nStep 1: Last year's total from the table: $2.5 + 6.0 + 1.5 = 10$ acres, so this year's total is $0.80 \\times 10 = 8$ acres.\nStep 2: This year's areas for fields A and B: $1.20 \\times 2.5 = 3.0$ acres and $0.50 \\times 6.0 = 3.0$ acres.\nStep 3: Field C has the rest: $8 - 3.0 - 3.0 = 2.0$ acres. Check: $3.0 + 3.0 + 2.0 = 8 = 0.80(10)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.2$): applies the overall $80\\%$ to field C, but the $80\\%$ describes the three fields together.\n* Choice B ($1.8$): applies field A's $120\\%$ to field C.\n* Choice D ($4.0$): subtracts this year's A and B areas from last year's total instead of this year's.\n\n**Test Day Takeaway:** When a percent describes a total, find the new total first, then subtract the parts you know.",
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
    question: "At a tree farm, $36\\%$ of the trees are hardwoods, $45\\%$ of the hardwoods are oaks, and $20\\%$ of the oaks are white oaks. If the farm has $162$ white oaks, how many trees are at the farm?",
    correctAnswer: "5000",
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**The correct answer is $5{,}000$.**\n\n**The Fast Way (~40s):** White oaks are $0.36 \\times 0.45 \\times 0.20 = 0.0324$ of all trees, so the farm has $\\frac{162}{0.0324} = 5{,}000$ trees.\n\n**The Full Solution:**\nStep 1: Chain the three shares: white oaks are $0.20 \\times 0.45 \\times 0.36 = 0.0324$, or $3.24\\%$, of all the trees.\nStep 2: If $T$ is the number of trees, then $0.0324T = 162$.\nStep 3: Solve: $T = \\frac{162}{0.0324} = 5{,}000$. Check: $36\\%$ of $5{,}000$ is $1{,}800$ hardwoods, $45\\%$ of $1{,}800$ is $810$ oaks, and $20\\%$ of $810$ is $162$ ✓\n\n**Common Mistakes:**\n* $810$: undoes only the last link, $\\frac{162}{0.20}$, which is the number of oaks.\n* $1{,}800$: undoes two links, which gives the number of hardwoods.\n* $5.2488$: multiplies $162$ by the chained share instead of dividing.\n\n**Test Day Takeaway:** To work back from the last link of a chain, divide by the product of all the shares (or undo each link in reverse order).",
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
    question: "A city surveyed $600$ bus riders, who each chose how to pay their fare. Riders who paid with a phone app reported shorter average wait times than riders who paid with cash. Which of the following is the most appropriate conclusion?",
    choices: [
      // distractor: draws a cause-and-effect conclusion although the riders were not randomly assigned to a way to pay
      { id: "A", text: "Paying with the phone app causes shorter wait times for the city's bus riders." },
      { id: "B", text: "Among the riders surveyed, paying with the phone app is associated with shorter reported wait times." },
      // distractor: claims to know what would have happened to the cash riders under a payment method they did not use
      { id: "C", text: "Riders who paid with cash would have reported shorter wait times if they had used the phone app." },
      // distractor: claims no effect, which the data cannot establish either
      { id: "D", text: "Paying with the phone app has no effect on the wait times of the city's bus riders." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The riders chose how to pay, so this is an observational study: it shows an association, not cause and effect.\n\n**The Full Solution:**\nStep 1: Identify the design. No rider was assigned a way to pay; each rider chose.\nStep 2: Riders who choose the app may differ from cash riders in other ways, such as which routes or times they ride, so a difference in wait times cannot be credited to the app itself.\nStep 3: The supported statement is limited to the relationship observed among the $600$ riders surveyed, which is Choice B ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: states cause and effect, which requires random assignment to the ways to pay.\n* Choice C: predicts an outcome for riders under a method they never used.\n* Choice D: claims the app has no effect; the study can no more rule an effect out than establish one.\n\n**Test Day Takeaway:** No random assignment means no causal claim in either direction; an association is the strongest conclusion available.",
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
    question: "Researchers randomly assigned $180$ tomato seedlings to grow under one of two light schedules. After ten weeks, the seedlings under schedule 1 were taller, on average, than those under schedule 2. Which conclusion is best supported by these results?",
    choices: [
      { id: "A", text: "The light schedule likely caused the difference in average height for the seedlings in this study." },
      // distractor: ignores that random assignment makes the two groups comparable at the start
      { id: "B", text: "Taller seedlings were more likely to be assigned to schedule 1." },
      // distractor: turns a difference in averages into a claim about every individual seedling
      { id: "C", text: "Every seedling under schedule 1 was taller than every seedling under schedule 2." },
      // distractor: extends the result to all species and conditions, far beyond the tomato seedlings studied
      { id: "D", text: "Schedule 1 would produce taller plants for any species grown in any conditions." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The seedlings were randomly assigned to schedules, so this is an experiment, and the difference in average height can be attributed to the schedule.\n\n**The Full Solution:**\nStep 1: Identify the design. The researchers assigned the schedules at random, which makes the two groups alike, on average, before the treatment.\nStep 2: With comparable groups, a difference in average height after ten weeks can be credited to the light schedule.\nStep 3: The conclusion stays with the seedlings in the study and with averages, which is exactly what Choice A says ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: random assignment is what prevents taller seedlings from being placed in one group.\n* Choice C: a higher average does not mean every individual in one group beat every individual in the other.\n* Choice D: the study used one species under one set of conditions, so it says nothing about all plants.\n\n**Test Day Takeaway:** Random assignment earns a cause-and-effect conclusion, but only about averages and only for the kind of subjects studied.",
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
    question: "A study followed $2{,}400$ adults for four years. Adults who reported walking more each week had lower average resting heart rates, and the researchers concluded that walking lowers resting heart rate. Which of the following best explains why this conclusion is not justified?",
    choices: [
      // distractor: faults the sample size, which is large and is not what blocks the causal claim
      { id: "A", text: "A sample of $2{,}400$ adults is too small to show any relationship between the two variables." },
      // distractor: objects to the units, which have no bearing on whether cause and effect can be inferred
      { id: "B", text: "Resting heart rate should have been recorded in beats per minute rather than as an average." },
      // distractor: swaps one summary statistic for another, which does not change the study's design
      { id: "C", text: "The researchers should have reported the median resting heart rate instead of the mean." },
      { id: "D", text: "The adults were not randomly assigned to amounts of walking, so the study cannot show cause and effect." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The adults chose how much to walk; nothing was assigned, so the study is observational and cannot support a causal claim.\n\n**The Full Solution:**\nStep 1: Identify the design. The researchers recorded what the adults already did; no amount of walking was assigned.\nStep 2: Adults who walk more may also differ in age, diet or overall fitness, and any of those could explain the lower heart rates.\nStep 3: The claim \"walking lowers resting heart rate\" is causal, so it overreaches, which is the flaw Choice D names ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: $2{,}400$ adults followed for four years is a large study; size is not the problem.\n* Choice B: the unit used to record heart rate does not affect whether cause and effect can be inferred.\n* Choice C: switching from the mean to the median changes a summary, not the design.\n\n**Test Day Takeaway:** When a causal conclusion is challenged, look first for missing random assignment, not for a problem with the numbers.",
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
    question: "In a study, $320$ adults with seasonal allergies were randomly assigned to use either a new nasal spray or a placebo spray. After six weeks, the group using the new spray reported significantly fewer days with symptoms. Which of the following is the most appropriate conclusion?",
    choices: [
      // distractor: extends the result to all allergies although only adults with seasonal allergies were studied
      { id: "A", text: "The new spray reduces days with symptoms for people with any type of allergy." },
      // distractor: ignores that random assignment balances the groups before treatment
      { id: "B", text: "Adults with fewer days with symptoms were more likely to be assigned the new spray." },
      { id: "C", text: "The new spray likely caused the reduction in days with symptoms for the adults in this study." },
      // distractor: names expectation as the cause, but the placebo group controls for expectations
      { id: "D", text: "Adults who expected relief reported fewer days with symptoms than adults who did not." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Random assignment to the spray or a placebo makes this an experiment, so a causal conclusion is supported for the adults studied.\n\n**The Full Solution:**\nStep 1: Identify the design. The adults were randomly assigned to the new spray or a placebo, so the groups were comparable at the start.\nStep 2: The placebo group received a spray too, so expectations were similar in both groups, and the difference in days with symptoms can be credited to the new spray.\nStep 3: The adults were not randomly selected from a larger population, so the conclusion stays with the adults in the study, as Choice C says ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: only adults with seasonal allergies were studied, so other allergies are outside the results.\n* Choice B: random assignment is what prevents such a difference in who received the spray.\n* Choice D: both groups used a spray, so expectation of relief cannot explain the difference.\n\n**Test Day Takeaway:** Random assignment supports cause and effect; random selection is what lets a result extend beyond the people studied.",
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
    question: "The table shows the results of a survey of $250$ employees at two office sites. The employees were not assigned to a site. Which of the following is the most appropriate conclusion?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Commutes by transit", "Does not commute by transit", "Total"], rows: [["Site A", "78", "62", "140"], ["Site B", "35", "75", "110"], ["Total", "113", "137", "250"]] } },
    choices: [
      // distractor: claims cause and effect although employees were not assigned to sites
      { id: "A", text: "Working at site A causes an employee to commute by transit." },
      // distractor: misreads the totals; 113 of 250 is less than half
      { id: "B", text: "More than half of the employees surveyed commute by transit." },
      // distractor: makes a claim about every individual that the survey did not measure
      { id: "C", text: "Every employee at site A has access to transit service." },
      { id: "D", text: "Among the employees surveyed, a greater proportion at site A than at site B commute by transit." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Site A: $\\frac{78}{140} \\approx 0.56$; site B: $\\frac{35}{110} \\approx 0.32$. Site A's proportion is greater, and that comparison is all the survey supports.\n\n**The Full Solution:**\nStep 1: Compute each site's proportion of transit commuters: $\\frac{78}{140} \\approx 0.557$ and $\\frac{35}{110} \\approx 0.318$.\nStep 2: The employees chose where to work, so the survey is observational and supports a comparison, not a cause.\nStep 3: Choice D states the comparison for the employees surveyed. Check the table: $78 + 35 = 113$ and $140 + 110 = 250$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: no employee was assigned to a site, so a causal claim is not supported.\n* Choice B: $\\frac{113}{250} = 0.452$, which is less than half.\n* Choice C: the survey asked how employees commute, not whether every one of them has transit service.\n\n**Test Day Takeaway:** Compare groups by proportion, not by raw count, and keep observational conclusions to association.",
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
    question: "A school district wants to know whether a new after-school tutoring program causes higher reading scores. Which of the following study designs is most appropriate for this purpose?",
    choices: [
      // distractor: lets students choose their own group, so the groups may differ from the start
      { id: "A", text: "Compare the reading scores of students who chose to join the program with the scores of students who did not join." },
      // distractor: collects opinions rather than measured outcomes
      { id: "B", text: "Ask teachers in the district whether they believe the program improves reading scores." },
      { id: "C", text: "Randomly assign student volunteers to the program or to no tutoring, then compare their reading scores." },
      // distractor: has no comparison group, so ordinary growth during the year is not ruled out
      { id: "D", text: "Record the reading scores of students in the program in September and again in June." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Only random assignment to the program and to a comparison group supports a cause-and-effect conclusion.\n\n**The Full Solution:**\nStep 1: A causal conclusion needs groups that are alike before the program starts, except for the program itself.\nStep 2: Randomly assigning the volunteers creates such groups, so a later difference in reading scores can be credited to the tutoring.\nStep 3: Choice C is the only design with both random assignment and a comparison group ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: students who choose to join may already be more motivated readers.\n* Choice B: teachers' beliefs are opinions, not measured reading scores.\n* Choice D: scores usually rise over a school year anyway, and without a comparison group that growth cannot be separated from the program.\n\n**Test Day Takeaway:** \"Causes\" in a question calls for an experiment: random assignment plus a comparison group.",
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
    question: "A researcher selected $80$ households at random from all households in a county that compost food waste. Each selected household was randomly assigned a weekly or a biweekly collection schedule. The table shows the number of these households by schedule and by the mass of food waste composted in one week. Which of the following is the largest population to which the results of the study can be generalized?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Less than 5 kg", "5 kg or more", "Total"], rows: [["Weekly collection", "12", "30", "42"], ["Biweekly collection", "26", "12", "38"], ["Total", "38", "42", "80"]] } },
    choices: [
      { id: "A", text: "All households in the county that compost food waste" },
      // distractor: widens the population beyond composting households, which were the only ones that could be selected
      { id: "B", text: "All households in the county" },
      // distractor: narrows the population to the sample itself, ignoring the random selection
      { id: "C", text: "The $80$ households in the study" },
      // distractor: extends beyond the county the sample was drawn from
      { id: "D", text: "All households in the state that compost food waste" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The $80$ households were selected at random from the county's composting households, so that group is the largest population the results describe.\n\n**The Full Solution:**\nStep 1: Identify the population sampled: all households in the county that compost food waste.\nStep 2: The households were selected at random from that population, so the results generalize to it and no further.\nStep 3: The random assignment of schedules supports a causal comparison, but it does not widen the population. Check the table: $42 + 38 = 80$ households ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: households that do not compost could never be selected.\n* Choice C: limiting the results to the sample throws away the benefit of random selection.\n* Choice D: the sample came from one county, so the rest of the state was never represented.\n\n**Test Day Takeaway:** Random selection sets the population; random assignment decides whether cause and effect is supported. Read the sampled population word for word.",
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
    question: "Researchers selected $80$ of the $1{,}400$ apple trees in an orchard at random and randomly assigned half of them to receive a new fertilizer. The fertilized trees produced more apples, on average. Which of the following is the most appropriate conclusion?",
    choices: [
      { id: "A", text: "The fertilizer causes an increase in apple production for trees in this orchard." },
      // distractor: generalizes beyond the orchard the trees were selected from
      { id: "B", text: "The fertilizer causes an increase in apple production for all apple trees." },
      // distractor: denies the random assignment the study actually used
      { id: "C", text: "The fertilizer is associated with higher production, but no cause-and-effect conclusion is possible because the trees were not randomly assigned." },
      // distractor: refuses to generalize even though the trees were selected at random from the orchard
      { id: "D", text: "The fertilizer causes an increase in production for the $80$ trees studied, but no conclusion can be drawn about other trees in the orchard." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Observational vs Experimental Study**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** Random assignment supports cause and effect, and random selection from the orchard's $1{,}400$ trees lets that conclusion extend to the orchard.\n\n**The Full Solution:**\nStep 1: The fertilizer was assigned at random to half of the selected trees, so the study is an experiment and supports a causal conclusion.\nStep 2: The $80$ trees were selected at random from the $1{,}400$ trees in the orchard, so the results generalize to the trees in this orchard.\nStep 3: Combine the two: the fertilizer causes higher production for trees in this orchard, which is Choice A ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: the trees came from one orchard, so apple trees elsewhere were never represented.\n* Choice C: the trees were randomly assigned, so the causal conclusion is available.\n* Choice D: random selection from the orchard is exactly what allows the result to extend past the $80$ trees.\n\n**Test Day Takeaway:** Ask two questions: was the treatment randomly assigned (cause and effect), and was the sample randomly selected (from which population)?",
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
    question: "A city library selected $250$ of its adult cardholders at random, and $38\\%$ of them said they had used the library's e-book service in the past month. Which of the following is the largest population to which the results of the survey can be generalized?",
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
    question: "A bottling plant selected $180$ bottles at random from all the bottles it filled on a certain day. The mean fill volume of the selected bottles was $498$ milliliters. Which of the following is the largest population to which this estimate can be generalized?",
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
    question: "A fitness website invited its visitors to complete a survey about sleep. Of the $320$ visitors who completed the survey, $65\\%$ reported sleeping fewer than $7$ hours per night. Which of the following is the best reason this result should not be generalized to all visitors to the website?",
    choices: [
      { id: "A", text: "Visitors chose whether to take the survey, so those who responded may not be representative of all visitors." },
      // distractor: blames sample size, which is adequate if the sample were random
      { id: "B", text: "A sample of $320$ visitors is too small to estimate a percentage for all visitors." },
      // distractor: blames self-report measurement rather than the self-selected sample
      { id: "C", text: "The survey asked about sleep, which cannot be measured by asking people to report it." },
      // distractor: blames the site type; the question asks about generalizing to visitors of this site
      { id: "D", text: "The survey was offered on a fitness website rather than on a medical website." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Scope of Inference**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Nobody selected these $320$ visitors at random; they chose for themselves whether to respond. A self-selected sample can differ from the population, so the $65\\%$ describes the respondents, not all visitors.\n\n**The Full Solution:**\nStep 1: Identify how the sample was formed. Visitors saw the invitation and decided on their own whether to participate.\nStep 2: Visitors who feel they sleep poorly may be more inclined to answer a sleep survey than visitors who sleep well. That would push the sample's percentage above the percentage for all visitors.\nStep 3: Because the sample was not selected at random from all visitors, the $65\\%$ cannot be generalized to all visitors. Check: the flaw lies in who chose to respond, which no larger number of volunteers would repair. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: $320$ is a reasonable sample size; a random sample of $320$ visitors would support an estimate for all visitors.\n* Choice C: self-reported sleep is imperfect, but the question is about generalizing to the population, which depends on how the sample was chosen.\n* Choice D: the population in question is visitors to this website, so the site's subject matter is not the issue.\n\n**Test Day Takeaway:** When participants volunteer, the sample may not represent the population; sample size cannot cure a self-selected sample.",
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
    question: "A random sample of $500$ households in a county was selected. Based on the sample, it is estimated that $46\\%$ of the households in the county own at least one bicycle, with an associated margin of error of $4\\%$. Which of the following is the most appropriate conclusion?",
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
    question: "To estimate the percentage of commuters in a state who drive alone to work, an analyst selected $700$ commuters at random from the two counties that contain the state's largest cities. Of those selected, $61\\%$ drive alone to work. Which of the following is the largest population to which this result can be generalized?",
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
    question: "A researcher randomly assigned each of $90$ adult volunteers from one community center to one of two stretching routines. After eight weeks, the volunteers assigned to routine 1 showed a greater mean improvement in flexibility than those assigned to routine 2. Which of the following is the most appropriate conclusion?",
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
    question: "What number is $25\\%$ greater than $68$?",
    choices: [
      // distractor: reports the increase alone, $0.25(68) = 17$, instead of the number itself
      { id: "A", text: "$17$" },
      // distractor: takes $25\%$ off instead of adding it, $0.75(68) = 51$
      { id: "B", text: "$51$" },
      { id: "C", text: "$85$" },
      // distractor: adds $25$ instead of $25\%$ of $68$, computing $68 + 25 = 93$
      { id: "D", text: "$93$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**Choice C is correct.** A number $25\\%$ greater than $68$ is $1.25(68) = 85$.\n\n**The Fast Way (~15s):** $25\\%$ of $68$ is $17$, and $68 + 17 = 85$.\n\n**The Full Solution:**\n\nStep 1: Identify the base. The comparison is made against $68$.\n\nStep 2: Translate \"$25\\%$ greater than\" into a factor: $100\\% + 25\\% = 125\\%$, or $1.25$.\n\nStep 3: Multiply: $1.25(68) = 85$. Check: $\\frac{85 - 68}{68} = \\frac{17}{68} = 0.25$, a $25\\%$ increase ✓\n\n**Why the wrong answers are tempting:**\n\n* Choice A ($17$): is $25\\%$ of $68$, the size of the increase rather than the number that is $25\\%$ greater.\n* Choice B ($51$): multiplies by $0.75$, which gives the number $25\\%$ less than $68$, not $25\\%$ greater.\n* Choice D ($93$): adds $25$ itself. The $25$ is a percent, so it must be applied to the base.\n\n**Test Day Takeaway:** \"$p\\%$ greater than\" is one multiplication by $1 + \\frac{p}{100}$; turning the phrase into a factor removes the choice between adding and multiplying.",
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
    question: "This year, a town had $f$ frost-free days, which is $12\\%$ fewer than last year. Which expression represents the number of frost-free days the town had last year?",
    choices: [
      // distractor: applies the decrease a second time instead of undoing it
      { id: "A", text: "$0.88f$" },
      // distractor: applies the $12\%$ to this year's count instead of last year's, multiplying by $1.12$ when undoing the decrease requires dividing by $0.88$
      { id: "B", text: "$1.12f$" },
      { id: "C", text: "$\\frac{f}{0.88}$" },
      // distractor: divides by $1.12$, which undoes a $12\%$ increase rather than a $12\%$ decrease
      { id: "D", text: "$\\frac{f}{1.12}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**Choice C is correct.** This year is $88\\%$ of last year, so $f = 0.88L$ and $L = \\frac{f}{0.88}$.\n\n**The Fast Way (~25s):** \"$12\\%$ fewer\" makes this year's count $0.88$ times last year's, so divide by $0.88$ to go back.\n\n**The Full Solution:**\n\nStep 1: Name last year's count $L$. The comparison is made against $L$, so $L$ is the base.\n\nStep 2: Translate the phrase. \"$12\\%$ fewer than $L$\" means $L - 0.12L = 0.88L$, and that quantity equals $f$: $f = 0.88L$.\n\nStep 3: Solve for $L$: $L = \\frac{f}{0.88}$. Check: if $L = 200$, then $f = 176$, and $\\frac{176}{0.88} = 200$.\n\n**Why the wrong answers are tempting:**\n\n* Choice A ($0.88f$): applies the $12\\%$ decrease to this year's count, moving further away from last year instead of back to it.\n* Choice B ($1.12f$): adds $12\\%$ of this year's count, but the $12\\%$ was measured against last year's count. Reversing the decrease requires dividing by $0.88$, and $\\frac{1}{0.88} \\approx 1.136$, not $1.12$.\n* Choice D ($\\frac{f}{1.12}$): divides, which is the right operation, but by $1.12$; that undoes a $12\\%$ increase, not a $12\\%$ decrease.\n\n**Test Day Takeaway:** Write the sentence as an equation with the base on the right, then solve -- \"fewer than\" always makes the base the divisor, never the multiplier.",
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
    question: "Last year, the price of a museum membership was $x$ dollars. This year, the price is $p\\%$ greater than last year's price. Which expression represents this year's price, in dollars?",
    choices: [
      // distractor: gives only the amount of the increase, $\frac{p}{100}$ of $x$, and never adds it to last year's price
      { id: "A", text: "$\\frac{px}{100}$" },
      // distractor: adds the decimal form of the percent to the price instead of taking that percent of the price
      { id: "B", text: "$x + \\frac{p}{100}$" },
      { id: "C", text: "$x\\left(1 + \\frac{p}{100}\\right)$" },
      // distractor: uses $p$ itself as the decimal growth rate, forgetting to divide the percent by $100$
      { id: "D", text: "$x(1 + p)$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**Choice C is correct.** A price $p\\%$ greater than $x$ is $x$ plus $\\frac{p}{100}$ of $x$, which is $x\\left(1 + \\frac{p}{100}\\right)$.\n\n**The Fast Way (~20s):** \"$p\\%$ greater than $x$\" multiplies $x$ by $1 + \\frac{p}{100}$, so this year's price is $x\\left(1 + \\frac{p}{100}\\right)$.\n\n**The Full Solution:**\n\nStep 1: Identify the base. The comparison is made against last year's price, $x$ dollars.\n\nStep 2: The increase is $p\\%$ of $x$, which is $\\frac{p}{100} \\cdot x$ dollars.\n\nStep 3: Add the increase to the base and factor: $x + \\frac{p}{100}x = x\\left(1 + \\frac{p}{100}\\right)$. Check with $x = 80$ and $p = 25$: the price should be $80 + 20 = 100$ dollars, and $80\\left(1 + \\frac{25}{100}\\right) = 80(1.25) = 100$ ✓\n\n**Why the wrong answers are tempting:**\n\n* Choice A ($\\frac{px}{100}$): is the increase alone. With $x = 80$ and $p = 25$ it gives $20$, the amount the price went up, not the new price.\n* Choice B ($x + \\frac{p}{100}$): adds $0.25$ dollars to an $80$-dollar price when $p = 25$. The percent has to be taken of $x$, not added to it.\n* Choice D ($x(1 + p)$): treats $p$ as a decimal. With $p = 25$ it multiplies the price by $26$.\n\n**Test Day Takeaway:** When the percent is a variable, plug in easy numbers such as $x = 80$ and $p = 25$ and test each expression; only the factor $1 + \\frac{p}{100}$ survives.",
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
    question: "In one season, a hockey team took $612$ shots on goal, and its opponents took $450$. The team's total is $k\\%$ greater than its opponents' total. What is the value of $k$?",
    correctAnswer: "36",
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**The correct answer is $36$.** The difference is $612 - 450 = 162$ shots, and $\\frac{162}{450} = 0.36$, so $k = 36$.\n\n**The Fast Way (~30s):** $\\frac{612}{450} = 1.36$, so the team's total is $136\\%$ of the opponents' and $k = 36$.\n\n**The Full Solution:**\n\nStep 1: Identify the base. The phrase \"greater than its opponents' total\" makes $450$ the base of the comparison.\n\nStep 2: Find the difference: $612 - 450 = 162$ shots.\n\nStep 3: Divide by the base and convert: $\\frac{162}{450} = 0.36$, so $k = 36$. Check: $450(1.36) = 612$ shots.\n\n**Common Mistakes:**\n\n* Dividing by the larger total gives $\\frac{162}{612} \\approx 26.5$, which answers how much less the opponents' total is than the team's.\n* Reporting $136$ gives the team's total as a percent of the opponents' rather than the percent by which it is greater.\n* Reporting $162$ gives the difference in shots, not a percent.\n\n**Test Day Takeaway:** The base of a percent comparison is whatever follows \"than\" -- put that number in the denominator before you divide.",
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
    question: "$m$ is $60\\%$ greater than $n$, where $n > 0$. If $n$ is $p\\%$ less than $m$, what is the value of $p$?",
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
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $m = 1.6n$, so $n = \\frac{m}{1.6} = 0.625m$. Then $n$ is $1 - 0.625 = 0.375$, or $37.5\\%$, less than $m$.\n\n**The Full Solution:**\nStep 1: Translate the first condition: $m = n + 0.60n = 1.6n$.\nStep 2: Express $n$ as a fraction of $m$: $n = \\frac{m}{1.6} = \\frac{10m}{16} = \\frac{5}{8}m = 0.625m$.\nStep 3: The percent less is based on $m$: $\\frac{m - n}{m} = \\frac{m - 0.625m}{m} = 0.375 = 37.5\\%$. Check with $n = 100$: $m = 160$, and $\\frac{160 - 100}{160} = \\frac{60}{160} = 0.375$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($40$): $100 - 60 = 40$ subtracts the percent from $100$, which has no meaning here.\n* Choice C ($60$): assumes the percent less equals the percent greater, but the bases differ: $60$ is $60\\%$ of $100$ yet only $37.5\\%$ of $160$.\n* Choice D ($62.5$): $\\frac{100}{1.6} = 62.5$ is what percent $n$ is OF $m$, not what percent LESS than $m$.\n\n**Test Day Takeaway:** Percent change depends on its base. Going up by $p\\%$ and coming back down are different percents because the base changes.",
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
    question: "A glacier retreated $126$ meters last year, $10\\%$ less than the year before. How many meters did it retreat the year before?",
    choices: [
      // distractor: applies the $10\%$ decrease again, $126(0.90) = 113.4$, instead of undoing it
      { id: "A", text: "$113.4$" },
      // distractor: adds $10$ meters instead of $10\%$, computing $126 + 10 = 136$
      { id: "B", text: "$136$" },
      // distractor: adds $10\%$ to $126$ rather than dividing by $0.90$, giving $138.6$
      { id: "C", text: "$138.6$" },
      { id: "D", text: "$140$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**Choice D is correct.** Last year's retreat is $90\\%$ of the previous year's, so the earlier retreat is $\\frac{126}{0.90} = 140$ meters.\n\n**The Fast Way (~30s):** $126$ is $90\\%$ of the answer, so divide: $\\frac{126}{0.9} = 140$ meters.\n\n**The Full Solution:**\n\nStep 1: Name the earlier retreat $r$. The comparison is made against $r$, so $r$ is the base.\n\nStep 2: Translate \"$10\\%$ less than $r$\": $r - 0.10r = 0.90r$, and that equals $126$ meters.\n\nStep 3: Solve: $0.90r = 126$, so $r = 140$ meters. Check: $10\\%$ of $140$ is $14$, and $140 - 14 = 126$ meters.\n\n**Why the wrong answers are tempting:**\n\n* Choice A ($113.4$): takes another $10\\%$ off $126$, moving in the wrong direction.\n* Choice B ($136$): adds $10$ meters instead of $10\\%$. The $10$ is a percent of the earlier retreat, not a number of meters.\n* Choice C ($138.6$): adds $10\\%$ to $126$. Undoing a $10\\%$ decrease requires dividing by $0.90$, and $\\frac{1}{0.90} \\approx 1.111$, not $1.10$.\n\n**Test Day Takeaway:** Going backwards through a percent change is division, not the opposite percent -- $0.90$ and $1.10$ are not inverses.",
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
    question: "$a$ is $25\\%$ greater than $b$, and $c$ is $12\\%$ less than $a$, where $b > 0$. What percent of $b$ is $c$?",
    choices: [
      // distractor: applies only the $12\%$ decrease, reporting $88\%$ and ignoring that $a$ is $25\%$ greater than $b$
      { id: "A", text: "$88\\%$" },
      { id: "B", text: "$110\\%$" },
      // distractor: combines the two changes by adding and subtracting the percents, $100 + 25 - 12 = 113$
      { id: "C", text: "$113\\%$" },
      // distractor: combines the two changes by adding the percents, $100 + 25 + 12 = 137$
      { id: "D", text: "$137\\%$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**Choice B is correct.** The two changes compose as factors: $c = 0.88a = 0.88(1.25b) = 1.10b$, so $c$ is $110\\%$ of $b$.\n\n**The Fast Way (~30s):** Multiply the factors, not the percents: $1.25(0.88) = 1.10$, which is $110\\%$.\n\n**The Full Solution:**\n\nStep 1: Write $a$ in terms of $b$. A number $25\\%$ greater than $b$ is $a = 1.25b$.\n\nStep 2: Write $c$ in terms of $a$, then $b$. A number $12\\%$ less than $a$ is $c = 0.88a = 0.88(1.25b) = 1.10b$.\n\nStep 3: Compare $c$ with $b$: $\\frac{c}{b} = 1.10$, or $110\\%$. Check: with $b = 200$, $a = 250$ and $c = 250 - 30 = 220$, and $\\frac{220}{200} = 110\\%$ ✓\n\n**Why the wrong answers are tempting:**\n\n* Choice A ($88\\%$): applies the $12\\%$ decrease to $b$. The $12\\%$ is measured against $a$, not $b$.\n* Choice C ($113\\%$): treats the percents as adding and subtracting on a common base of $100$. Successive changes multiply.\n* Choice D ($137\\%$): adds both percents, which would require both changes to be increases on the same base.\n\n**Test Day Takeaway:** Successive percent changes multiply; turn each phrase into a factor and multiply the factors before you convert back to a percent.",
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
    question: "The number of public charging ports in a state was $45\\%$ greater in 2022 than in 2020 and $20\\%$ greater in 2024 than in 2022. The number in 2024 was $p\\%$ greater than the number in 2020. What is the value of $p$?",
    correctAnswer: "74",
    explanation: "**SAT Pattern: Percent Greater Than / Less Than**\n\n**The correct answer is $74$.**\n\n**The Fast Way (~15s):** Multiply the growth factors: $1.45 \\times 1.20 = 1.74$, so the 2024 number is $74\\%$ greater than the 2020 number and $p = 74$.\n\n**The Full Solution:**\nStep 1: Let the 2020 number be $N$. The 2022 number is $45\\%$ greater, so it is $1.45N$.\nStep 2: The 2024 number is $20\\%$ greater than the 2022 number: $1.20(1.45N) = 1.74N$.\nStep 3: Compare with 2020: $\\frac{1.74N - N}{N} = 0.74$, so the 2024 number is $74\\%$ greater and $p = 74$. Check with $N = 100$: 2022 has $145$ ports, 2024 has $145 + 0.20(145) = 145 + 29 = 174$, which is $74$ more than $100$ ✓\n\n**Common Mistakes:** Entering $65$, from adding $45 + 20$, which ignores that the second increase applies to a larger base; entering $174$, which is what percent the 2024 number is OF the 2020 number rather than how much greater it is; entering $1.74$, the growth factor itself instead of the percent increase.\n\n**Test Day Takeaway:** Successive percent changes multiply their factors; subtract $1$ from the product to get the overall percent change. No starting count is needed, because the answer is a ratio.",
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
    question: "A nursery has $600$ seedlings, and $35\\%$ of them are oak. If $40\\%$ of the oak seedlings are taller than $1$ meter, how many oak seedlings are taller than $1$ meter?",
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
    question: "A museum's collection contains $1{,}500$ artifacts. The table shows the percent of the collection in each category. If $12\\%$ of the pottery artifacts are currently on display, how many pottery artifacts are currently not on display?",
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
    question: "Each day, $2{,}400$ passengers ride a ferry. Of these, $55\\%$ are commuters, and $30\\%$ of the commuters have monthly passes. How many of the passengers are commuters without monthly passes?",
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
    explanation: "**SAT Pattern: Compound Percent Of**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Commuters: $0.55 \\times 2{,}400 = 1{,}320$. Without passes: $70\\%$ of those, $0.70 \\times 1{,}320 = 924$.\n\n**The Full Solution:**\nStep 1: Commuters are $55\\%$ of $2{,}400$: $0.55 \\times 2{,}400 = 1{,}320$.\nStep 2: If $30\\%$ of commuters have passes, then $100\\% - 30\\% = 70\\%$ do not.\nStep 3: Commuters without passes: $0.70 \\times 1{,}320 = 924$. Check: with passes, $0.30 \\times 1{,}320 = 396$, and $396 + 924 = 1{,}320$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($396$): $0.30 \\times 1{,}320$ counts the commuters who DO have passes.\n* Choice C ($1{,}320$): the total number of commuters; the pass condition was not applied.\n* Choice D ($1{,}680$): $0.70 \\times 2{,}400$ applies the $70\\%$ to all passengers, but the $30\\%$ was a percent of commuters.\n\n**Test Day Takeaway:** Each \"of\" sets a new base. Find the group, then take the percent (or its complement) of that group only.",
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
    question: "A scholarship program had $8{,}500$ applicants. Of these, $24\\%$ were interviewed, and $15\\%$ of the interviewees won a scholarship. How many applicants won a scholarship?",
    correctAnswer: "306",
    explanation: "**SAT Pattern: Compound Percent Of**\n\n**The correct answer is $306$.**\n\n**The Fast Way (~10s):** $8{,}500 \\times 0.24 \\times 0.15 = 306$.\n\n**The Full Solution:**\nStep 1: Applicants interviewed: $0.24 \\times 8{,}500 = 2{,}040$.\nStep 2: The $15\\%$ applies to those $2{,}040$ interviewees: $0.15 \\times 2{,}040 = 306$.\nStep 3: Check by combining the percents: $0.24 \\times 0.15 = 0.036$, and $0.036 \\times 8{,}500 = 306$. $\\checkmark$\n\n**Common Mistakes:** Entering $2040$, which stops after the interview stage; entering $1275$, from $0.15 \\times 8{,}500$, which applies the $15\\%$ to all applicants instead of to interviewees; entering $3315$, from $0.39 \\times 8{,}500$, which adds the percents instead of multiplying them.\n\n**Test Day Takeaway:** Percents that describe a subgroup multiply; compute the subgroup first, then take the next percent of it.",
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
    question: "A mosaic is made of $360$ tiles. The table shows the fraction of the tiles made of each material. If $40\\%$ of the glass tiles are blue, how many of the tiles in the mosaic are glass tiles that are not blue?",
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
    question: "A bag contains $6$ orange tokens and $4$ purple tokens. If $2$ tokens are selected at random without replacement, what is the probability that both are orange?",
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
    question: "A box contains $40$ batteries, $5$ of which are defective. If $2$ batteries are selected at random from the box without replacement, what is the probability that both are defective?",
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
    question: "A bag contains $9$ tickets, $4$ of which are prize tickets. If $2$ tickets are selected at random from the bag without replacement, what is the probability that neither is a prize ticket? (Express your answer as a decimal or fraction, not as a percent.)",
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
    question: "A case holds $7$ bottles of sparkling water and $3$ bottles of still water. If $3$ bottles are selected at random without replacement, what is the probability that all $3$ are sparkling?",
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
    question: "A drawer contains $3$ red and $7$ black pens. If $3$ pens are selected at random without replacement, what is the probability that exactly $1$ is red? (Express your answer as a decimal or fraction, not as a percent.)",
    correctAnswer: "21/40",
    explanation: "**SAT Pattern: Probability Without Replacement**\n\n**The correct answer is $\\frac{21}{40}$.**\n\n**The Fast Way (~20s):** One order, red then two black: $\\frac{3}{10} \\times \\frac{7}{9} \\times \\frac{6}{8} = \\frac{126}{720}$. The single red pen can be first, second, or third, so multiply by $3$: $\\frac{378}{720} = \\frac{21}{40}$.\n\n**The Full Solution:**\nStep 1: There are $3 + 7 = 10$ pens. For the order red, black, black: $\\frac{3}{10} \\times \\frac{7}{9} \\times \\frac{6}{8} = \\frac{126}{720}$.\nStep 2: The orders black, red, black and black, black, red have the same product, since each uses numerators $3, 7, 6$ over denominators $10, 9, 8$. There are $3$ positions for the red pen.\nStep 3: Total: $3 \\times \\frac{126}{720} = \\frac{378}{720} = \\frac{21}{40}$. Check with counting: unordered selections number $\\frac{10 \\times 9 \\times 8}{6} = 120$; selections with exactly one red pen number $3 \\times \\frac{7 \\times 6}{2} = 63$; $\\frac{63}{120} = \\frac{21}{40}$ ✓\n\n**Common Mistakes:** Entering $7/40$, from $\\frac{126}{720}$, which counts only the order in which the red pen comes first; entering $7/24$, from $\\frac{7}{10} \\times \\frac{6}{9} \\times \\frac{5}{8} = \\frac{210}{720}$, which is the probability of NO red pen; entering $17/24$, the complement $1 - \\frac{7}{24}$, which is the probability of AT LEAST one red pen rather than exactly one.\n\n**Test Day Takeaway:** \"Exactly one\" means one success in any position: find one order's probability, then multiply by the number of positions the success can occupy.",
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
    question: "For each of $400$ households, a researcher recorded whether the household had a programmable thermostat and the household's monthly energy bill. Households with programmable thermostats had a lower mean monthly bill. Which of the following is the most appropriate conclusion?",
    choices: [
      // distractor: claims causation from an observational study with no random assignment
      { id: "A", text: "Installing a programmable thermostat causes a household's monthly energy bill to decrease." },
      // distractor: predicts the effect of an intervention that was never tested
      { id: "B", text: "Households without programmable thermostats would pay less if they installed one." },
      // distractor: denies any relationship although an association was observed
      { id: "C", text: "Programmable thermostats have no effect on monthly energy bills." },
      { id: "D", text: "For these households, thermostat type is associated with the monthly bill, but a cause-and-effect relationship cannot be concluded." }
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
    question: "A researcher wants to determine whether a daily $20$-minute silent-reading period increases the reading comprehension scores of fourth-grade students in a certain district. Which of the following is the most appropriate design for this study?",
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
    question: "A grocery chain selected $300$ shoppers at random from the shoppers who used its mobile app during one week. Of these shoppers, $64\\%$ said they would use a proposed self-checkout feature. Which of the following is the largest population to which this result can be generalized?",
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
    question: "Based on a random sample of ears of corn grown in a county, the mean mass of an ear of corn grown in the county is estimated to be $285$ grams, with an associated margin of error of $12$ grams. Which of the following is the most appropriate conclusion about this mean mass?",
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
    question: "Based on a random sample of households in a town, the proportion of the town's households that compost food waste is estimated to be $0.36$, with an associated margin of error of $0.05$. Which of the following is the interval of plausible values for this proportion?",
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
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $0.36-0.05=0.31$ and $0.36+0.05=0.41$.\n\n**The Full Solution:**\nStep 1: The sample proportion is $0.36$ and the margin of error is $0.05$.\nStep 2: The plausible values are the estimate plus or minus the margin of error: from $0.36-0.05=0.31$ to $0.36+0.05=0.41$.\nStep 3: Check: the midpoint of $0.31$ and $0.41$ is $0.36$, and the half-width is $0.05$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.26$ to $0.46$): built from $0.36 \\pm 0.10$, doubling the margin of error.\n* Choice B ($0.31$ to $0.36$): the estimate is used as the top of the interval instead of its center.\n* Choice D ($0.36$ to $0.41$): the estimate is used as the bottom of the interval instead of its center.\n\n**Test Day Takeaway:** The estimate is always the midpoint of the interval. If a choice puts the estimate at an endpoint, it is wrong on sight.",
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
    question: "Based on a random sample of $900$ residents of a county, it is estimated that $47\\%$ of the county's residents would use a proposed bus route, with an associated margin of error of $3\\%$. Which of the following is the most appropriate conclusion?",
    choices: [
      // distractor: treats the sample estimate as the exact population value
      { id: "A", text: "Exactly $47\\%$ of the county's residents would use the bus route." },
      // distractor: reaches past the top of the interval
      { id: "B", text: "More than $50\\%$ of the county's residents would use the bus route." },
      { id: "C", text: "It is plausible that between $44\\%$ and $50\\%$ of the county's residents would use the bus route." },
      // distractor: reaches past the bottom of the interval
      { id: "D", text: "Fewer than $44\\%$ of the county's residents would use the bus route." }
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
    question: "Based on a random sample of $250$ adult salmon from a river, a $95\\%$ confidence interval for the mean length of the adult salmon in the river is $58.4$ centimeters to $61.2$ centimeters. Which of the following is the most appropriate conclusion?",
    choices: [
      // distractor: reports the interval's midpoint as an exact population value
      { id: "A", text: "The mean length of the adult salmon in the river is exactly $59.8$ centimeters." },
      { id: "B", text: "It is plausible that the mean length of the adult salmon in the river is $60.5$ centimeters." },
      // distractor: applies an interval for the mean to individual fish
      { id: "C", text: "Every adult salmon in the river has a length between $58.4$ centimeters and $61.2$ centimeters." },
      // distractor: rejects a value that lies inside the interval
      { id: "D", text: "It is not plausible that the mean length of the adult salmon in the river is $59.0$ centimeters." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** A confidence interval lists the plausible values of the population mean. $60.5$ lies between $58.4$ and $61.2$, so it is plausible.\n\n**The Full Solution:**\nStep 1: The interval $58.4$ to $61.2$ centimeters is an interval of plausible values for the mean length of all adult salmon in the river.\nStep 2: Test each candidate value against the interval: $60.5$ is inside it, so choice B's claim is supported.\nStep 3: Check the remaining claims. $59.8$ is the midpoint, which is the estimate, not a value the data prove exact; $59.0$ is also inside the interval, so it cannot be called implausible; and the interval describes a mean, not the lengths of individual salmon. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: $\\frac{58.4 + 61.2}{2} = 59.8$ is the sample estimate at the center of the interval, but the interval exists because the population mean is uncertain.\n* Choice C: individual salmon vary far more than their mean does; the interval bounds the mean only.\n* Choice D: $59.0$ is inside the interval, so the data support it rather than rule it out.\n\n**Test Day Takeaway:** \"Plausible\" means inside the interval, and the interval is about a mean, never about every individual.",
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
    question: "A $95\\%$ confidence interval for the mean wingspan of the bats in a colony is $21.4$ centimeters to $24.6$ centimeters. What is the associated margin of error, in centimeters?",
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
    question: "Two surveys of residents of the same city were conducted at the same time using the same method. Each survey estimated the percent of the city's residents who commute by rail. The table shows each estimate and its associated margin of error. Which of the following is the most appropriate conclusion?",
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
    question: "In a study, $480$ volunteers with chronic knee pain were randomly assigned to a new physical therapy protocol or to the standard protocol. The $95\\%$ confidence interval for the difference in mean reduction in pain score (new minus standard) was $0.4$ point to $2.6$ points. Which of the following is the most appropriate conclusion?",
    choices: [
      // distractor: applies a difference of means to every individual volunteer
      { id: "A", text: "The new protocol reduces every volunteer's pain score more than the standard protocol does." },
      { id: "B", text: "For volunteers like those in the study, the new protocol causes a greater mean reduction in pain score than the standard protocol does." },
      // distractor: confuses random selection with random assignment
      { id: "C", text: "Since the volunteers were not selected at random, no cause-and-effect conclusion can be drawn about the protocols." },
      // distractor: treats the top endpoint as a guaranteed minimum and widens the population
      { id: "D", text: "For all adults with chronic knee pain, the new protocol causes a mean reduction at least $2.6$ points greater than the standard protocol does." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The whole interval $0.4$ to $2.6$ is positive, so a difference of zero is not plausible; random assignment makes that difference causal; and because the volunteers were not randomly selected, the conclusion stays with volunteers like these.\n\n**The Full Solution:**\nStep 1: Read the interval. Every plausible value of the difference in mean reduction is greater than $0$, so the data support the conclusion that the new protocol did more on average.\nStep 2: Read the design. Volunteers were assigned to protocols at random, which is what licenses a cause-and-effect statement about the protocols.\nStep 3: Check the scope. The volunteers were not selected at random from all adults with chronic knee pain, so the conclusion is limited to people like the study's volunteers, which is exactly what choice B claims. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: the interval describes a difference of group *means*; individual volunteers vary, and some may have improved less with the new protocol than others did with the standard one.\n* Choice C: random selection controls generalization, not causation. Random assignment was used, so a causal conclusion about volunteers like these is supported.\n* Choice D: $2.6$ is the top of the interval, the largest difference still plausible, not a floor, and \"all adults with chronic knee pain\" goes beyond the group studied.\n\n**Test Day Takeaway:** On a randomized study, answer in two parts: the interval decides *whether* there is an effect, the sampling decides *whom* it applies to.",
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
    question: "A $95\\%$ confidence interval for the mean daily water use per household in a town is $148$ liters to $172$ liters. A second survey of the town produced the same estimated mean but a margin of error one-fourth as large. What is the upper endpoint, in liters, of the second interval?",
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
    question: "A random sample of $180$ people gives an estimate with a margin of error of $6\\%$. What sample size would give a margin of error of $3\\%$?",
    choices: [
      // distractor: halves the sample size because the margin of error is halved, 180/2 = 90
      { id: "A", text: "$90$" },
      // distractor: doubles the sample size, treating the margin of error as proportional to 1/n
      { id: "B", text: "$360$" },
      { id: "C", text: "$720$" },
      // distractor: applies the factor of 4 twice, 16(180) = 2,880
      { id: "D", text: "$2{,}880$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Margin of error scales like $\\frac{1}{\\sqrt{n}}$, so halving it requires $2^2 = 4$ times the sample: $4 \\times 180 = 720$.\n\n**The Full Solution:**\nStep 1: For a fixed method and confidence level, the margin of error is proportional to $\\frac{1}{\\sqrt{n}}$, where $n$ is the sample size.\nStep 2: The margin of error must go from $6\\%$ to $3\\%$, a factor of $\\frac{1}{2}$. Since the margin depends on $\\sqrt{n}$, $\\sqrt{n}$ must double, so $n$ must be multiplied by $2^2 = 4$.\nStep 3: $4 \\times 180 = 720$ people. Check: $\\sqrt{720} = \\sqrt{4 \\times 180} = 2\\sqrt{180}$, so the margin of error is halved. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($90$): halves the sample size along with the margin of error. A smaller sample makes the margin of error larger, not smaller.\n* Choice B ($360$): doubles the sample, which would work only if the margin of error were proportional to $\\frac{1}{n}$. Doubling $n$ shrinks the margin by a factor of $\\sqrt{2} \\approx 1.41$, not $2$.\n* Choice D ($2{,}880$): $16 \\times 180$, applying the factor of $4$ a second time.\n\n**Test Day Takeaway:** Divide the margin of error by $k$ by multiplying the sample size by $k^2$.",
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
    question: "A random sample of size $n$ gives an estimate with a margin of error of $6\\%$. What would the margin of error be for a sample of size $9n$?",
    choices: [
      // distractor: divides by $9$ instead of by $\sqrt{9}$
      { id: "A", text: "$\\frac{2}{3}\\%$" },
      { id: "B", text: "$2\\%$" },
      // distractor: halves the margin of error regardless of the factor $9$
      { id: "C", text: "$3\\%$" },
      // distractor: multiplies by $3$ instead of dividing
      { id: "D", text: "$18\\%$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Multiplying the sample size by $9$ divides the margin of error by $\\sqrt{9} = 3$: $\\frac{6}{3} = 2$.\n\n**The Full Solution:**\nStep 1: The margin of error is proportional to $\\frac{1}{\\sqrt{n}}$, so replacing $n$ by $9n$ replaces $\\sqrt{n}$ by $\\sqrt{9n} = 3\\sqrt{n}$.\nStep 2: The margin of error is therefore divided by $3$: $\\frac{6}{3} = 2$, so the new margin of error is $2\\%$.\nStep 3: Check with the reverse rule: to divide a margin of error by $3$, multiply the sample size by $3^2 = 9$, which is exactly the change described. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{2}{3}\\%$): $\\frac{6}{9}$, dividing by the sample-size factor itself instead of by its square root.\n* Choice C ($3\\%$): halving the margin of error, which corresponds to multiplying the sample size by $4$, not $9$.\n* Choice D ($18\\%$): $6 \\times 3$; a larger sample makes an estimate more precise, so the margin of error must go down.\n\n**Test Day Takeaway:** The sample-size factor goes under a square root before it touches the margin of error.",
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
    question: "Three surveys used the same method and differed only in sample size. The table shows the sample size and the margin of error, in percentage points, for each survey. What is the margin of error, in percentage points, for survey $3$?",
    questionTable: { headers: ["Survey", "Sample size", "Margin of error"], rows: [["1", "400", "6.0"], ["2", "900", "4.0"], ["3", "3,600", "?"]] },
    choices: [
      // distractor: divides $6.0$ by the sample-size ratio $9$ instead of by $\sqrt{9} = 3$
      { id: "A", text: "$0.67$" },
      { id: "B", text: "$2.0$" },
      // distractor: pairs survey 1's margin of error with the ratio of survey 3's sample size to survey 2's
      { id: "C", text: "$3.0$" },
      // distractor: multiplies by $3$ instead of dividing
      { id: "D", text: "$18.0$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** From survey $1$ to survey $3$, the sample size is multiplied by $\\frac{3600}{400} = 9$, so the margin of error is divided by $\\sqrt{9} = 3$: $\\frac{6.0}{3} = 2.0$.\n\n**The Full Solution:**\nStep 1: Confirm the rule with the two completed rows. Going from $400$ to $900$ multiplies the sample size by $\\frac{9}{4}$, so the margin of error is divided by $\\sqrt{\\frac{9}{4}} = \\frac{3}{2}$: $6.0 \\div \\frac{3}{2} = 4.0$, matching the table.\nStep 2: Apply the same rule from survey $1$ to survey $3$: $\\frac{3600}{400} = 9$, and $\\sqrt{9} = 3$, so the margin of error is $\\frac{6.0}{3} = 2.0$ percentage points.\nStep 3: Check from survey $2$: $\\frac{3600}{900} = 4$, $\\sqrt{4} = 2$, and $\\frac{4.0}{2} = 2.0$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.67$): $\\frac{6.0}{9}$, dividing by the sample-size ratio without taking its square root.\n* Choice C ($3.0$): $\\frac{6.0}{2}$, which uses the ratio $\\frac{3600}{900} = 4$ and its square root $2$ but keeps survey $1$'s margin of error, mixing rows.\n* Choice D ($18.0$): $6.0 \\times 3$; multiplying instead of dividing makes the largest sample the least precise.\n\n**Test Day Takeaway:** When a table gives two complete rows, use them to confirm the $\\frac{1}{\\sqrt{n}}$ rule before extending it to the missing entry.",
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
    question: "A survey has a margin of error of $6.3\\%$. If the sample size is multiplied by $k$ and nothing else changes, the margin of error becomes $0.9\\%$. What is the value of $k$?",
    correctAnswer: "49",
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**The correct answer is $49$.**\n\n**The Fast Way (~15s):** The margin of error shrinks by a factor of $\\frac{6.3}{0.9} = 7$, so the sample size must grow by $7^2 = 49$.\n\n**The Full Solution:**\nStep 1: For a fixed method and confidence level, the margin of error is proportional to $\\frac{1}{\\sqrt{n}}$.\nStep 2: The new margin of error is $\\frac{0.9}{6.3} = \\frac{1}{7}$ of the old one, so $\\sqrt{n}$ must be $7$ times as large.\nStep 3: If $\\sqrt{n}$ is multiplied by $7$, then $n$ is multiplied by $7^2 = 49$, so $k = 49$. Check: with $n$ replaced by $49n$, the margin of error becomes $\\frac{1}{\\sqrt{49}} = \\frac{1}{7}$ of what it was, and $\\frac{6.3}{7} = 0.9$ ✓\n\n**Common Mistakes:**\n* Reporting $7$: this is the factor by which the *margin of error* shrinks, not the factor for the sample size.\n* Reporting $5.4$: subtracting, $6.3 - 0.9$, treats the relationship as additive.\n* Reporting $\\frac{1}{49}$: inverting the direction, which would make the sample smaller and the margin of error larger.\n\n**Test Day Takeaway:** Precision costs the square: to make a margin of error $k$ times smaller, make the sample $k^2$ times bigger.",
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
    question: "A poll of $320$ randomly chosen commuters had a margin of error of $5.4\\%$. The poll will be repeated with $2{,}880$ commuters selected by the same method. Which of the following is closest to the margin of error of the new poll?",
    choices: [
      // distractor: divides by the sample-size ratio $9$ instead of by $\sqrt{9} = 3$
      { id: "A", text: "$0.6\\%$" },
      { id: "B", text: "$1.8\\%$" },
      // distractor: halves the margin of error because the sample grew, without using the ratio
      { id: "C", text: "$2.7\\%$" },
      // distractor: multiplies by $3$ instead of dividing
      { id: "D", text: "$16.2\\%$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $\\frac{2880}{320} = 9$, so the margin of error is divided by $\\sqrt{9} = 3$: $\\frac{5.4}{3} = 1.8$.\n\n**The Full Solution:**\nStep 1: With the procedure unchanged, the margin of error is proportional to $\\frac{1}{\\sqrt{n}}$.\nStep 2: The sample size grows by the factor $\\frac{2880}{320} = 9$, so $\\sqrt{n}$ grows by $\\sqrt{9} = 3$ and the margin of error shrinks by the same factor of $3$.\nStep 3: $\\frac{5.4}{3} = 1.8$, so the new margin of error is about $1.8\\%$. Check the reverse: to cut a margin of error to one-third, the sample must be $3^2 = 9$ times as large, and $9 \\times 320 = 2{,}880$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.6\\%$): $\\frac{5.4}{9}$, applying the sample-size ratio directly to the margin of error.\n* Choice C ($2.7\\%$): $\\frac{5.4}{2}$, halving the margin because the sample is \"much bigger\" instead of computing the ratio.\n* Choice D ($16.2\\%$): $5.4 \\times 3$; the factor of $3$ is right, but a bigger sample must lower the margin of error.\n\n**Test Day Takeaway:** Take the ratio of the sample sizes first, then square-root it; that number divides the old margin of error.",
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
    question: "A random sample of $250$ solar panels gives an estimate with a margin of error of $8\\%$. What would the margin of error be, in percent, for a sample of $4{,}000$ panels?",
    correctAnswer: "2",
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~15s):** $\\frac{4000}{250} = 16$ and $\\sqrt{16} = 4$, so the margin of error is $\\frac{8}{4} = 2$ percent.\n\n**The Full Solution:**\nStep 1: The margin of error is proportional to $\\frac{1}{\\sqrt{n}}$ when the method and confidence level are unchanged.\nStep 2: The sample size is multiplied by $\\frac{4000}{250} = 16$, so $\\sqrt{n}$ is multiplied by $\\sqrt{16} = 4$ and the margin of error is divided by $4$.\nStep 3: $\\frac{8}{4} = 2$, so the margin of error is $2\\%$. Check: quadrupling precision requires $4^2 = 16$ times the sample, and $16 \\times 250 = 4{,}000$. $\\checkmark$\n\n**Common Mistakes:**\n* Reporting $0.5$: dividing $8$ by the sample-size ratio $16$ instead of by $\\sqrt{16} = 4$.\n* Reporting $4$: halving the margin of error, which corresponds to only quadrupling the sample size.\n* Reporting $32$: multiplying by $4$ instead of dividing, which makes the larger sample less precise.\n\n**Test Day Takeaway:** Sample size up by a factor of $k$ means margin of error down by a factor of $\\sqrt{k}$ — always the square root, never the factor itself.",
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
    question: "A random sample of size $n$ gives an estimate with a margin of error of $m$. Which of the following is the sample size that, by the same method, gives a margin of error of $\\frac{m}{5}$?",
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
    question: "A random sample of $384$ adults gives an estimate with a margin of error of $4.5\\%$. Using the same method, how many more adults must be sampled to reduce the margin of error to $1.5\\%$?",
    correctAnswer: "3072",
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**The correct answer is $3{,}072$.**\n\n**The Fast Way (~25s):** The margin of error must shrink by a factor of $\\frac{4.5}{1.5} = 3$, so the sample must grow to $3^2 \\times 384 = 3{,}456$; the question asks for the increase, $3456 - 384 = 3{,}072$.\n\n**The Full Solution:**\nStep 1: The margin of error is proportional to $\\frac{1}{\\sqrt{n}}$, and it must be divided by $\\frac{4.5}{1.5} = 3$.\nStep 2: Dividing the margin of error by $3$ requires multiplying the sample size by $3^2 = 9$, so the required sample size is $9 \\times 384 = 3{,}456$ adults.\nStep 3: The sample already has $384$ adults, so $3456 - 384 = 3{,}072$ more adults must be sampled. Check: $8 \\times 384 = 3{,}072$, and adding $8$ times the original sample to the original gives $9$ times it. $\\checkmark$\n\n**Common Mistakes:**\n* Reporting $3{,}456$: that is the required total sample size, not the number of *additional* adults.\n* Reporting $1{,}152$: multiplying $384$ by $3$ instead of by $3^2 = 9$.\n* Reporting $768$: multiplying by $3$ and then subtracting the original, $1152 - 384$, which compounds the missing square with the subtraction.\n* Reporting $9$: giving the factor itself rather than a number of adults.\n\n**Test Day Takeaway:** Square the precision factor to get the new sample size, then reread the question: \"how many more\" means subtract the sample you already have.",
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
    question: "The table shows the volume of liquid, in milliliters, that a machine dispensed in each of three tests. What was the total volume dispensed in the three tests, in liters? ($1$ liter $= 1{,}000$ milliliters)",
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
    question: "$3{,}250$ grams is equivalent to how many kilograms? ($1$ kilogram $= 1{,}000$ grams)",
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
    question: "A conveyor belt moves at $45$ centimeters per second. What is the belt's speed, in meters per minute?",
    choices: [
      // distractor: converts centimeters to meters but never converts seconds to minutes, giving the speed in meters per second
      { id: "A", text: "$0.45$" },
      // distractor: uses $1$ meter $= 1{,}000$ centimeters
      { id: "B", text: "$2.7$" },
      { id: "C", text: "$27$" },
      // distractor: converts seconds to minutes but never centimeters to meters
      { id: "D", text: "$2{,}700$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $45 \\times 60 = 2{,}700$ centimeters per minute, and $2{,}700 \\div 100 = 27$ meters per minute.\n\n**The Full Solution:**\nStep 1: Convert the time unit. In one minute ($60$ seconds) the belt moves $45 \\times 60 = 2{,}700$ centimeters, so the speed is $2{,}700$ centimeters per minute.\nStep 2: Convert the length unit: $2{,}700 \\text{ centimeters} \\times \\frac{1 \\text{ meter}}{100 \\text{ centimeters}} = 27$ meters.\nStep 3: Check with one chain of factors: $\\frac{45 \\text{ cm}}{1 \\text{ s}} \\times \\frac{60 \\text{ s}}{1 \\text{ min}} \\times \\frac{1 \\text{ m}}{100 \\text{ cm}} = \\frac{45 \\times 60}{100} = 27$ meters per minute. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.45$): $\\frac{45}{100}$ converts centimeters to meters but leaves the time in seconds; $0.45$ is the speed in meters per second.\n* Choice B ($2.7$): $\\frac{2700}{1000}$, using the gram-to-kilogram factor $1{,}000$ for centimeters to meters.\n* Choice D ($2{,}700$): the speed in centimeters per minute; the length unit was never converted.\n\n**Test Day Takeaway:** Two units to change means two factors. Write both, cancel, and only then multiply.",
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
    question: "A pipeline carries oil at a constant rate of $1.5$ cubic meters per minute. The table shows two unit conversions. At this rate, how many liters of oil does the pipeline carry in $1$ hour?",
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
    question: "A machine applies $0.4$ gram of glue to each part. How many kilograms of glue does it apply to $6{,}000$ parts?",
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
    explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $0.4 \\times 6{,}000 = 2{,}400$ grams, and $2{,}400 \\div 1{,}000 = 2.4$ kilograms.\n\n**The Full Solution:**\nStep 1: Find the total mass in grams: $0.4 \\text{ gram per part} \\times 6{,}000 \\text{ parts} = 2{,}400$ grams.\nStep 2: Convert: $2{,}400 \\text{ grams} \\times \\frac{1 \\text{ kilogram}}{1{,}000 \\text{ grams}} = 2.4$ kilograms.\nStep 3: Check by scaling: $1{,}000$ parts take $400$ grams, so $6{,}000$ take $2{,}400$ grams, which is $2.4$ kilograms. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($24$): $\\frac{2400}{100}$, a two-place decimal shift instead of three.\n* Choice C ($240$): $\\frac{2400}{10}$, a one-place shift.\n* Choice D ($2{,}400$): the correct total mass, but in grams rather than kilograms.\n\n**Test Day Takeaway:** Do the rate arithmetic first and convert last; converting halfway through is where the stray factors of $10$ come from.",
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
    question: "Concrete is poured at a constant rate of $18$ cubic yards per hour. What is the volume, in cubic feet, of the concrete poured in $25$ minutes? ($1$ cubic yard $= 27$ cubic feet)",
    choices: [
      // distractor: stops at 18(25/60) = 7.5 cubic yards and never converts to cubic feet
      { id: "A", text: "$7.5$" },
      { id: "B", text: "$202.5$" },
      // distractor: reports the hourly rate in cubic feet, 18 x 27 = 486, without scaling to 25 minutes
      { id: "C", text: "$486$" },
      // distractor: multiplies by 27 a second time: 202.5 x 27 = 5,467.5
      { id: "D", text: "$5{,}467.5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $18$ cubic yards per hour is $486$ cubic feet per hour, and $25$ minutes is $\\frac{25}{60}$ of an hour: $486 \\times \\frac{25}{60} = 202.5$.\n\n**The Full Solution:**\nStep 1: Convert the rate. $18 \\times 27 = 486$ cubic feet per hour.\nStep 2: Convert the time. $25$ minutes is $\\frac{25}{60} = \\frac{5}{12}$ of an hour.\nStep 3: Multiply and check. $486 \\times \\frac{5}{12} = 202.5$ cubic feet. Doing it in the other order agrees: $18 \\times \\frac{5}{12} = 7.5$ cubic yards, and $7.5 \\times 27 = 202.5$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7.5$): is the volume in CUBIC YARDS. The question asks for cubic feet.\n* Choice C ($486$): is the rate in cubic feet per hour, with the $25$-minute window never applied.\n* Choice D ($5{,}467.5$): applies the $27$ conversion twice: $202.5 \\times 27$.\n\n**Test Day Takeaway:** Chain conversions one factor at a time and check the units cancel; converting the rate and the time in either order must give the same number.",
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
    question: "A drone flies at a constant speed of $18$ meters per second. How many kilometers does the drone travel in $45$ minutes?",
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
    question: "The table shows the constant rate at which each of three machines fills bottles. If all three machines operate at the same time, how many bottles do they fill in $1$ hour?",
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
    question: "The table shows the volume, in liters, and the percent of juice by volume of the fruit drink in each of two containers. How many liters of juice are in container $1$?",
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
    question: "A seed mix is $7$ parts grass seed and $3$ parts wildflower seed by mass. How many kilograms of wildflower seed are in $60$ kilograms of the mix?",
    choices: [
      { id: "A", text: "$18$" },
      // distractor: divides by the ratio part alone, $\frac{60}{3} = 20$, instead of using the fraction $\frac{3}{10}$
      { id: "B", text: "$20$" },
      // distractor: splits the mix evenly between the two seed types, $\frac{60}{2} = 30$
      { id: "C", text: "$30$" },
      // distractor: reports the grass seed mass, $\frac{7}{10}(60) = 42$
      { id: "D", text: "$42$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Mixture Problems**\n\n**Choice A is correct.** The mix has $7 + 3 = 10$ parts, so wildflower seed is $\\frac{3}{10}$ of the mix: $\\frac{3}{10}(60) = 18$ kilograms.\n\n**The Fast Way (~25s):** Ten parts of $60$ kilograms means $6$ kilograms per part, and wildflower seed takes $3$ parts: $3(6) = 18$ kilograms.\n\n**The Full Solution:**\n\nStep 1: Total the parts. The $7$ parts and $3$ parts divide the mix into $7 + 3 = 10$ equal parts.\n\nStep 2: Find the mass of one part: $\\frac{60}{10} = 6$ kilograms per part.\n\nStep 3: Multiply by the wildflower share: $3(6) = 18$ kilograms. Check: grass seed is $7(6) = 42$ kilograms, and $18 + 42 = 60$ kilograms, with $\\frac{42}{18} = \\frac{7}{3}$.\n\n**Why the wrong answers are tempting:**\n\n* Choice B ($20$): divides the total by the wildflower part $3$ rather than by the $10$ total parts.\n* Choice C ($30$): halves the mix, which would be right only for a $1 : 1$ ratio.\n* Choice D ($42$): reports the grass seed mass, the other term of the ratio.\n\n**Test Day Takeaway:** Convert a ratio into parts of a whole before touching the total -- the denominator is the sum of the ratio terms, never one of them.",
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
    question: "The table shows the volume and the acid concentration, by volume, of each of two solutions. If the two solutions are combined, what is the acid concentration, by volume, of the new solution?",
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
    question: "A $120$-gram nut mix that is $8\\%$ peanuts by mass is combined with a $280$-gram nut mix that is $18\\%$ peanuts by mass. The resulting mixture is $p\\%$ peanuts by mass. What is the value of $p$?",
    correctAnswer: "15",
    explanation: "**SAT Pattern: Mixture Problems**\n\n**The correct answer is 15.**\n\n**The Fast Way (~20s):** Peanuts: $0.08(120) + 0.18(280) = 9.6 + 50.4 = 60$ grams out of $120 + 280 = 400$ grams, and $\\frac{60}{400} = 0.15$, so $p = 15$.\n\n**The Full Solution:**\nStep 1: Find the mass of peanuts in each mix: $0.08(120) = 9.6$ grams and $0.18(280) = 50.4$ grams, for a total of $60$ grams.\nStep 2: Find the mass of the whole mixture: $120 + 280 = 400$ grams.\nStep 3: The fraction that is peanuts is $\\frac{60}{400} = 0.15$, or $15\\%$, so $p = 15$. Check: $15$ lies between $8$ and $18$ and closer to $18$, matching the larger share of the $18\\%$ mix ✓\n\n**Common Mistakes:**\n* $13$: averages the two percents, $\\frac{8 + 18}{2} = 13$, ignoring that the two mixes have different masses.\n* $11$: pairs each percent with the other mix's mass, $\\frac{8(280) + 18(120)}{400} = 11$.\n* $60$: reports the mass of peanuts, in grams, instead of the percent.\n\n**Test Day Takeaway:** Weight each percent by its own amount, add, and divide by the combined amount. The answer must land between the two percents, nearer the larger batch.",
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
    question: "A solution is $24\\%$ glycerol by volume. How many milliliters of water must be added to $450$ milliliters of this solution to produce a solution that is $18\\%$ glycerol by volume?",
    choices: [
      // distractor: takes the drop in percent as a percent of the original volume, 0.06(450) = 27
      { id: "A", text: "$27$" },
      // distractor: computes 0.18(450) = 81, the glycerol 450 milliliters would hold at the new percent, and reports it as the water added
      { id: "B", text: "$81$" },
      { id: "C", text: "$150$" },
      // distractor: solves 108/0.18 = 600 correctly but reports the final volume instead of the water added
      { id: "D", text: "$600$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Mixture Problems**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The glycerol stays at $0.24(450) = 108$ milliliters, and $108$ must be $18\\%$ of the new volume, so the new volume is $\\frac{108}{0.18} = 600$ milliliters; the water added is $600 - 450 = 150$.\n\n**The Full Solution:**\nStep 1: Adding water does not change the amount of glycerol: $0.24(450) = 108$ milliliters.\nStep 2: Let $w$ be the milliliters of water added. Then $108 = 0.18(450 + w)$, so $450 + w = 600$.\nStep 3: Subtract: $w = 150$. Check: $\\frac{108}{600} = 0.18$, or $18\\%$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($27$): takes the $6$-point drop in percent as a percent of the original volume, $0.06(450) = 27$.\n* Choice B ($81$): computes $0.18(450) = 81$, the glycerol that $450$ milliliters would hold at the new percent, and reports it as the water added.\n* Choice D ($600$): finds the final volume correctly but reports it instead of the amount of water added.\n\n**Test Day Takeaway:** When a solution is diluted, the amount of the ingredient is fixed. Divide that amount by the new percent to get the new total, then subtract the starting volume.",
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
    question: "A $60$-kilogram bag of seed mix is $45\\%$ clover seed by mass, and the rest is grass seed. How many kilograms of grass seed are in the bag?",
    choices: [
      // distractor: subtracts the percent from the mass, 60 - 45 = 15, mixing a percent with kilograms
      { id: "A", text: "$15$" },
      // distractor: computes 0.45(60) = 27, the mass of clover seed rather than grass seed
      { id: "B", text: "$27$" },
      { id: "C", text: "$33$" },
      // distractor: reports the percent of grass seed, 55, instead of its mass
      { id: "D", text: "$55$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Mixture Problems**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Grass seed is $100\\% - 45\\% = 55\\%$ of the mix, and $0.55(60) = 33$ kilograms.\n\n**The Full Solution:**\nStep 1: The mix is clover seed and grass seed only, so grass seed makes up $100\\% - 45\\% = 55\\%$ of the mass.\nStep 2: Apply that percent to the bag: $0.55(60) = 33$ kilograms.\nStep 3: So the bag holds $33$ kilograms of grass seed. Check: clover is $0.45(60) = 27$ kilograms, and $27 + 33 = 60$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): subtracts $45$ from $60$, treating a percent as if it were a number of kilograms.\n* Choice B ($27$): finds the clover seed, $0.45(60)$, which is the other part of the mix.\n* Choice D ($55$): stops at the percent of grass seed and reports it as a mass.\n\n**Test Day Takeaway:** Check which part of the mixture the question asks for. If the percent given is for the other part, subtract it from $100\\%$ before multiplying.",
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
    question: "A tank contains $24$ liters of a mixture that is $15\\%$ antifreeze by volume. How many liters of pure antifreeze must be added to the tank to produce a mixture that is $40\\%$ antifreeze by volume?",
    choices: [
      // distractor: keeps the total volume at 24 liters and solves 3.6 + x = 0.40(24), getting 6
      { id: "A", text: "$6$" },
      // distractor: computes 0.40(24) = 9.6 and reports it, ignoring the 3.6 liters of antifreeze already in the tank and the added volume
      { id: "B", text: "$9.6$" },
      { id: "C", text: "$10$" },
      // distractor: finds x = 10 but reports the final volume of the mixture, 24 + 10 = 34
      { id: "D", text: "$34$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Mixture Problems**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** With $x$ liters added, $3.6 + x = 0.40(24 + x)$, so $0.6x = 6$ and $x = 10$.\n\n**The Full Solution:**\nStep 1: The tank already holds $0.15(24) = 3.6$ liters of antifreeze.\nStep 2: Adding $x$ liters of pure antifreeze raises both the antifreeze and the total volume by $x$: $3.6 + x = 0.40(24 + x) = 9.6 + 0.4x$.\nStep 3: Then $0.6x = 6$, so $x = 10$. Check: $\\frac{3.6 + 10}{24 + 10} = \\frac{13.6}{34} = 0.40$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): forgets that the added antifreeze also increases the total volume, solving $3.6 + x = 0.40(24)$.\n* Choice B ($9.6$): computes $40\\%$ of the original $24$ liters and reports it as the amount to add.\n* Choice D ($34$): solves correctly but reports the final volume, $24 + 10$, instead of the amount added.\n\n**Test Day Takeaway:** When a pure ingredient is added, $x$ goes into both the amount of the ingredient and the total. Write the new percent as (old amount $+ x$) over (old total $+ x$).",
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
    question: "A $600$-kilogram mixture that is $23\\%$ salt by mass is made by combining a $15\\%$ salt solution with a $30\\%$ salt solution. How many kilograms of the $15\\%$ solution are used?",
    correctAnswer: "280",
    explanation: "**SAT Pattern: Mixture Problems**\n\n**The correct answer is 280.**\n\n**The Fast Way (~40s):** With $k$ kilograms of the $15\\%$ solution, $0.15k + 0.30(600 - k) = 0.23(600) = 138$, so $180 - 0.15k = 138$ and $k = 280$.\n\n**The Full Solution:**\nStep 1: The mixture contains $0.23(600) = 138$ kilograms of salt. If $k$ kilograms of the $15\\%$ solution are used, then $600 - k$ kilograms of the $30\\%$ solution are used.\nStep 2: Salt from the two solutions: $0.15k + 0.30(600 - k) = 138$, which simplifies to $180 - 0.15k = 138$.\nStep 3: So $0.15k = 42$ and $k = 280$. Check: $0.15(280) + 0.30(320) = 42 + 96 = 138$, and $\\frac{138}{600} = 0.23$ ✓\n\n**Common Mistakes:**\n* $320$: solves for the mass of the $30\\%$ solution, $600 - 280$, instead of the $15\\%$ solution.\n* $300$: splits the $600$ kilograms evenly, which would give a $22.5\\%$ mixture, not $23\\%$.\n* $138$: reports the mass of salt in the mixture instead of the mass of a solution.\n\n**Test Day Takeaway:** Name one amount $k$ and the other $600 - k$, then write one equation for the ingredient. Before answering, confirm which solution the question asks about.",
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
    question: "The box plot summarizes the sodium content, in milligrams per serving, of $28$ canned soups. What is the interquartile range, in milligrams per serving, of the data?",
    diagram: { type: "boxPlot", params: { min: 200, q1: 380, median: 470, q3: 620, max: 810, xLabel: "Sodium content (mg per serving)", xMin: 150, xMax: 850, xGridStep: 50, xLabelStep: 100 } },
    choices: [
      // distractor: measures from the first quartile to the median, 470 - 380 = 90
      { id: "A", text: "$90$" },
      // distractor: measures from the median to the third quartile, 620 - 470 = 150
      { id: "B", text: "$150$" },
      { id: "C", text: "$240$" },
      // distractor: subtracts the minimum from the maximum, 810 - 200 = 610, which is the range
      { id: "D", text: "$610$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The interquartile range is the width of the box: $620 - 380 = 240$.\n\n**The Full Solution:**\nStep 1: The box runs from the first quartile to the third quartile. Here $Q_1 = 380$ and $Q_3 = 620$.\nStep 2: The interquartile range is $Q_3 - Q_1 = 620 - 380$.\nStep 3: So the interquartile range is $240$ milligrams per serving. Check: the two parts of the box, $470 - 380 = 90$ and $620 - 470 = 150$, add to $240$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($90$): measures only the left part of the box, from $Q_1$ to the median.\n* Choice B ($150$): measures only the right part of the box, from the median to $Q_3$.\n* Choice D ($610$): subtracts the whisker ends, $810 - 200$, which gives the range.\n\n**Test Day Takeaway:** The interquartile range is the box; the range is the whiskers. Subtract the two edges of the box and ignore the median line.",
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
    question: "The box plot summarizes the commute distances, in kilometers, of $35$ employees. What is the median of the commute distances, in kilometers?",
    diagram: { type: "boxPlot", params: { min: 3, q1: 9, median: 14, q3: 22, max: 31, xLabel: "Commute distance (km)", xMin: 0, xMax: 35, xGridStep: 1, xLabelStep: 5 } },
    choices: [
      // distractor: reads the left edge of the box, the first quartile
      { id: "A", text: "$9$" },
      { id: "B", text: "$14$" },
      // distractor: averages the minimum and maximum, (3 + 31)/2 = 17, which is the midrange
      { id: "C", text: "$17$" },
      // distractor: reads the right edge of the box, the third quartile
      { id: "D", text: "$22$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** The median is the line inside the box, at $14$.\n\n**The Full Solution:**\nStep 1: A box plot marks five values: the minimum, $Q_1$, the median, $Q_3$, and the maximum.\nStep 2: The median is the vertical line inside the box, which is at $14$ kilometers.\nStep 3: So the median commute distance is $14$ kilometers. Check: $14$ lies between $Q_1 = 9$ and $Q_3 = 22$, as a median must ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): reads the left edge of the box, which is the first quartile.\n* Choice C ($17$): averages the whisker ends, $\\frac{3 + 31}{2} = 17$, which is the midrange, not the median.\n* Choice D ($22$): reads the right edge of the box, which is the third quartile.\n\n**Test Day Takeaway:** On a box plot the median is always the line inside the box. It does not have to be centered between the whiskers or between the box edges.",
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
    question: "The box plot summarizes the scores of $40$ students on a test. Which of the following must be true?",
    diagram: { type: "boxPlot", params: { min: 52, q1: 68, median: 77, q3: 86, max: 98, xLabel: "Test score", xMin: 45, xMax: 100, xGridStep: 5, xLabelStep: 10 } },
    choices: [
      // distractor: reads the median line as the mean; a box plot does not show the mean
      { id: "A", text: "The mean score is $77$." },
      { id: "B", text: "At least $20$ of the students scored $77$ or higher." },
      // distractor: treats the third quartile as an exact count; ties at 86 can change how many scores are strictly above it
      { id: "C", text: "Exactly $10$ of the students scored higher than $86$." },
      // distractor: assumes equal spacing, but the parts of the box and the whiskers have different lengths
      { id: "D", text: "The scores are spread evenly from $52$ to $98$." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The median is $77$, and at least half of the $40$ scores, $20$ scores, are at or above the median.\n\n**The Full Solution:**\nStep 1: The line inside the box shows that the median score is $77$.\nStep 2: With $40$ scores, the median is the average of the $20$th and $21$st scores in order, so the $21$st through $40$th scores, $20$ scores, are each at least $77$.\nStep 3: So at least $20$ students scored $77$ or higher. Check: this holds whether or not some scores equal $77$, because the count of $20$ is a minimum ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: a box plot shows the median, not the mean, and the mean can differ from $77$.\n* Choice C: about a quarter of the scores lie above $Q_3 = 86$, but repeated scores at $86$ can make the count different from exactly $10$.\n* Choice D: the four sections of the plot have different lengths, so the scores are not spread evenly.\n\n**Test Day Takeaway:** A box plot gives medians and quartiles, never means or exact counts. A \"must be true\" choice about a box plot usually says \"at least\" half or a quarter of the data.",
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
    question: "The box plot summarizes the wingspans, in centimeters, of $46$ birds. The range of the wingspans is how many centimeters greater than the interquartile range of the wingspans?",
    diagram: { type: "boxPlot", params: { min: 96, q1: 118, median: 129, q3: 143, max: 168, xLabel: "Wingspan (cm)", xMin: 90, xMax: 175, xGridStep: 5, xLabelStep: 10 } },
    correctAnswer: "47",
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**The correct answer is 47.**\n\n**The Fast Way (~15s):** Range $= 168 - 96 = 72$ and interquartile range $= 143 - 118 = 25$, so the difference is $72 - 25 = 47$.\n\n**The Full Solution:**\nStep 1: The range uses the ends of the whiskers: $168 - 96 = 72$ centimeters.\nStep 2: The interquartile range uses the edges of the box: $143 - 118 = 25$ centimeters.\nStep 3: The difference is $72 - 25 = 47$ centimeters. Check: this equals the two whisker lengths combined, $(118 - 96) + (168 - 143) = 22 + 25 = 47$ ✓\n\n**Common Mistakes:**\n* $72$ or $25$: computes only one of the two measures and stops.\n* $39$: uses the median as an endpoint, computing $168 - 129 = 39$.\n* $-47$: subtracts in the wrong order.\n\n**Test Day Takeaway:** The range minus the interquartile range is the total length of the two whiskers. Compute each measure, then subtract.",
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
    question: "The box plots summarize the annual snowfall, in centimeters, at weather stations R and S over the same $30$ years. Based on the box plots, which of the following must be true?",
    diagram: { type: "boxPlot", params: { distributions: [{ label: "Station R", min: 120, q1: 190, median: 250, q3: 330, max: 420 }, { label: "Station S", min: 150, q1: 235, median: 268, q3: 285, max: 400 }], xMin: 100, xMax: 450, xGridStep: 25, xLabelStep: 50, xLabel: "Annual snowfall (cm)" } },
    choices: [
      // distractor: compares means, which box plots do not show
      { id: "A", text: "The mean annual snowfall at station S is greater than at station R." },
      { id: "B", text: "In at least $15$ of the years, station S had at least $268$ centimeters of snowfall." },
      // distractor: reads the two plots as year-by-year pairs, but a box plot does not match up individual years
      { id: "C", text: "Station S had more snowfall than station R in each of the $30$ years." },
      // distractor: reverses the spread comparison: station S has the narrower box (50 versus 140) and the smaller range
      { id: "D", text: "The annual snowfall amounts at station S are more spread out than at station R." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The median for station S is $268$, so at least half of the $30$ years, $15$ years, had at least $268$ centimeters.\n\n**The Full Solution:**\nStep 1: For station S, the line inside the box is at $268$ centimeters, so the median is $268$.\nStep 2: With $30$ values, the median is the average of the $15$th and $16$th values in order, so the $16$th through $30$th values, $15$ values, are each at least $268$.\nStep 3: So in at least $15$ of the years, station S had at least $268$ centimeters of snowfall. Check: the other choices depend on means, year-by-year pairings, or a reversed spread, none of which the plots support ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: box plots show medians and quartiles, not means.\n* Choice C: the plots summarize each station separately, so they cannot show how the stations compare in any single year.\n* Choice D: station S has the narrower box, $285 - 235 = 50$ versus $330 - 190 = 140$, and the smaller range, $250$ versus $300$, so its amounts are less spread out.\n\n**Test Day Takeaway:** Two box plots can be compared by medians, quartiles and spread, but never year by year or by means. A median always guarantees at least half the data on each side.",
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
    question: "The box plot summarizes the diameters, in millimeters, of $60$ ball bearings. Approximately how many of the ball bearings have a diameter greater than $12.4$ millimeters?",
    diagram: { type: "boxPlot", params: { min: 11.2, q1: 11.8, median: 12.1, q3: 12.4, max: 13, xLabel: "Diameter (mm)", xMin: 11, xMax: 13.2, xGridStep: 0.2, xLabelStep: 0.4 } },
    choices: [
      { id: "A", text: "$15$" },
      // distractor: uses the half of the data above the median, 0.50(60), instead of the quarter above the third quartile
      { id: "B", text: "$30$" },
      // distractor: counts the bearings at or below 12.4 millimeters, 0.75(60), the opposite of what was asked
      { id: "C", text: "$45$" },
      // distractor: counts the whole sample
      { id: "D", text: "$60$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $12.4$ is the third quartile, so about $25\\%$ of the data lie above it: $0.25(60) = 15$.\n\n**The Full Solution:**\nStep 1: The right edge of the box is at $12.4$ millimeters, so $12.4$ is the third quartile.\nStep 2: About $25\\%$ of the values in a data set lie above the third quartile.\nStep 3: So about $0.25(60) = 15$ bearings have a diameter greater than $12.4$ millimeters. Check: about $75\\%$, or $45$ bearings, are at or below $12.4$, and $15 + 45 = 60$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($30$): uses the median, so it counts the half of the data above $12.1$ instead of the quarter above $12.4$.\n* Choice C ($45$): counts the bearings at or below the third quartile, the opposite of what was asked.\n* Choice D ($60$): counts every bearing in the sample.\n\n**Test Day Takeaway:** Each of the four sections of a box plot holds about a quarter of the data. Find which edge the given value sits on, then count the quarters beyond it.",
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
    question: "The box plot summarizes the daily water use, in gallons, of $80$ households. If the greatest value is removed, which of the following must be true for the remaining $79$ values?",
    diagram: { type: "boxPlot", params: { min: 40, q1: 95, median: 115, q3: 150, max: 420, xLabel: "Daily water use (gallons)", xMin: 0, xMax: 450, xGridStep: 25, xLabelStep: 50 } },
    choices: [
      // distractor: the new median is the 40th value, which can equal 115 when the 40th and 41st values are both 115
      { id: "A", text: "Their median is less than $115$ gallons." },
      { id: "B", text: "Their mean is less than the mean of all $80$ values." },
      // distractor: removing one extreme value can leave both quartiles, and so the interquartile range, unchanged
      { id: "C", text: "Their interquartile range is less than that of all $80$ values." },
      // distractor: removing the maximum cannot widen the span from minimum to maximum, so the range cannot increase
      { id: "D", text: "Their range is greater than that of all $80$ values." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The removed value, $420$, is greater than the mean of the data, so taking it out lowers the mean.\n\n**The Full Solution:**\nStep 1: The greatest value is $420$ gallons, the end of the right whisker. The data also include values less than $420$, such as the minimum, $40$, so the mean of the $80$ values is less than $420$.\nStep 2: Removing a value that is greater than the mean always lowers the mean of what remains.\nStep 3: So the mean of the remaining $79$ values must be less than the mean of all $80$ values. Check: the median, quartiles and range can stay the same or shrink, but none of choices A, C or D is guaranteed ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: the original median, $115$, is the average of the $40$th and $41$st values, and the new median is the $40$th value. If both of those values are $115$, the median does not change.\n* Choice C: removing one value at the far end can leave the quartiles where they were, so the interquartile range need not decrease.\n* Choice D: removing the maximum can only shorten the range or leave it the same, never lengthen it.\n\n**Test Day Takeaway:** For a \"must be true\" question, test each choice for a case where it fails. Removing an extreme value always moves the mean, but the median and quartiles may not move at all.",
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
    question: "The box plot summarizes the protein content, in grams, of $24$ energy bars. What is the least possible number of these energy bars that have at least $16$ grams of protein?",
    diagram: { type: "boxPlot", params: { min: 8, q1: 14, median: 16, q3: 20, max: 27, xLabel: "Protein content (g)", xMin: 5, xMax: 32, xGridStep: 1, xLabelStep: 5 } },
    correctAnswer: "12",
    explanation: "**SAT Pattern: Box Plot Interpretation**\n\n**The correct answer is 12.**\n\n**The Fast Way (~40s):** The median, $16$, is the average of the $12$th and $13$th values, so the $13$th value is at least $16$; the $13$th through $24$th values, $12$ bars, are each at least $16$ grams.\n\n**The Full Solution:**\nStep 1: The line inside the box shows that the median protein content is $16$ grams. With $24$ values, the median is the average of the $12$th and $13$th values in order.\nStep 2: Two values with an average of $16$ cannot both be less than $16$, and the $13$th value is the larger one, so the $13$th value is at least $16$. Then the $13$th through $24$th values are all at least $16$: that is $24 - 12 = 12$ bars.\nStep 3: The $12$th value can be less than $16$ (for example, $15$ and $17$ average to $16$), so the count can be exactly $12$. Check: with the $12$th value $15$ and the $13$th value $17$, the median is $\\frac{15 + 17}{2} = 16$ and exactly $12$ bars have at least $16$ grams ✓\n\n**Common Mistakes:**\n* $13$: assumes the median itself is one of the values, so it counts the $12$th value as well.\n* $6$: uses the third quartile, $20$, and counts the top quarter of the data instead of the half at or above the median.\n* $18$: counts the bars with at least $14$ grams, the first quartile, instead of $16$ grams.\n\n**Test Day Takeaway:** With an even number of values, the median is an average of two middle values, so it need not be a data value. For a \"least possible number,\" find the case where the lower middle value falls just below the median.",
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
    question: "Data set J: $22$, $24$, $25$, $26$, $28$\nData set K: $10$, $18$, $25$, $32$, $40$\nWhich data set has the greater standard deviation?",
    choices: [
      // distractor: reverses the comparison, reading the tightly packed values of J as the larger spread
      { id: "A", text: "Data set J" },
      { id: "B", text: "Data set K" },
      // distractor: sees that both data sets have mean 25 and assumes their spreads must match
      { id: "C", text: "The standard deviations are equal." },
      // distractor: assumes the standard deviations must be computed to compare them, but the spread is visible from the lists
      { id: "D", text: "There is not enough information to compare the standard deviations." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Both lists center on $25$, but the values in K lie much farther from $25$ than the values in J, so K has the greater standard deviation.\n\n**The Full Solution:**\nStep 1: Both data sets have a mean of $25$: $\\frac{22 + 24 + 25 + 26 + 28}{5} = 25$ and $\\frac{10 + 18 + 25 + 32 + 40}{5} = 25$.\nStep 2: The values in J are at most $3$ away from $25$. The values in K are as much as $15$ away from $25$.\nStep 3: Standard deviation measures how far values typically lie from the mean, so data set K has the greater standard deviation. Check: the range of J is $6$ and the range of K is $30$, which agrees ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: reverses the comparison; values packed close together have the smaller spread.\n* Choice C: equal means say nothing about spread.\n* Choice D: no calculation is needed; comparing how far the values lie from the common center is enough.\n\n**Test Day Takeaway:** To compare standard deviations, compare how far the values sit from the center. A full calculation is almost never needed on the SAT.",
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
    question: "The $24$ scores in class A range from $79$ to $83$. The $24$ scores in class B range from $46$ to $97$. Which class's scores have the greater standard deviation?",
    choices: [
      // distractor: reverses the comparison; class A's scores all lie within 4 points of one another
      { id: "A", text: "Class A" },
      { id: "B", text: "Class B" },
      // distractor: treats the equal number of scores as equal spread
      { id: "C", text: "The standard deviations are equal." },
      // distractor: assumes the individual scores are needed, but class A's scores cannot be spread as much as class B's
      { id: "D", text: "There is not enough information to compare the standard deviations." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Class A's scores all lie within a $4$-point band, while class B's scores stretch over $51$ points, so class B has the greater standard deviation.\n\n**The Full Solution:**\nStep 1: Every score in class A is between $79$ and $83$, so no score in class A is more than $4$ points from the class mean.\nStep 2: Class B includes a score of $46$ and a score of $97$. These are $51$ points apart, so at least one of them is more than $25$ points from the class mean.\nStep 3: Since class B's scores lie much farther from their mean, class B has the greater standard deviation. Check: a score $25$ points from the mean is impossible in class A ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: reverses the comparison; scores in a narrow band have a small standard deviation.\n* Choice C: the number of scores does not determine the spread.\n* Choice D: the ranges alone settle it, because class A's scores can never be as far from their mean as class B's extreme scores are from theirs.\n\n**Test Day Takeaway:** A narrow range forces a small standard deviation. When one data set's range is many times the other's, the comparison is settled without the individual values.",
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
    question: "The table shows the frequencies of the values in data set F and data set G. Which of the following correctly compares the standard deviations of the two data sets?",
    questionTable: { headers: ["Value", "Frequency in data set F", "Frequency in data set G"], rows: [["$10$", "$1$", "$5$"], ["$20$", "$3$", "$2$"], ["$30$", "$8$", "$2$"], ["$40$", "$3$", "$2$"], ["$50$", "$1$", "$5$"]] },
    choices: [
      // distractor: reads the large frequency of 8 at the value 30 as more spread, when it means more values sit at the center
      { id: "A", text: "The standard deviation of data set F is greater than the standard deviation of data set G." },
      { id: "B", text: "The standard deviation of data set G is greater than the standard deviation of data set F." },
      // distractor: notices the equal means, ranges and sizes and assumes the spreads must match
      { id: "C", text: "The standard deviations of data sets F and G are equal." },
      // distractor: assumes the standard deviations must be computed, but the frequencies show where the values lie
      { id: "D", text: "There is not enough information to compare the standard deviations." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Both data sets are centered at $30$, but F has $8$ of its $16$ values at $30$, while G has $10$ of its $16$ values at the extremes $10$ and $50$. G is more spread out.\n\n**The Full Solution:**\nStep 1: Both data sets have $16$ values and are symmetric about $30$, so each has a mean of $30$.\nStep 2: In data set F, $8$ values equal the mean and only $2$ values are at $10$ or $50$. In data set G, only $2$ values equal the mean and $10$ values are at $10$ or $50$, the farthest values from $30$.\nStep 3: Data set G's values lie farther from the mean overall, so G has the greater standard deviation. Check: the standard deviations are about $9.4$ for F and $16.6$ for G ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: the tall frequency of $8$ at $30$ means more of F's values sit at the center, which makes F's spread smaller, not larger.\n* Choice C: equal means and equal ranges do not force equal standard deviations; the values between the extremes matter.\n* Choice D: a frequency table gives every value, so there is enough information.\n\n**Test Day Takeaway:** In a frequency table, look at where the large frequencies are. Values piled at the center mean a small standard deviation; values piled at the ends mean a large one.",
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
    question: "Data set V: $64$, $64$, $64$, $64$, $64$, $64$\nData set W: $58$, $58$, $64$, $64$, $70$, $70$\nWhich of the following correctly compares data sets V and W?",
    choices: [
      // distractor: matches the means correctly but assumes equal means force equal spread
      { id: "A", text: "The data sets have the same mean and the same standard deviation." },
      { id: "B", text: "The data sets have the same mean, and data set W has the greater standard deviation." },
      // distractor: reverses which measure differs: the means are equal, and only W has any spread
      { id: "C", text: "The data sets have the same standard deviation, and data set W has the greater mean." },
      // distractor: sees the larger values 70 in W and assumes its mean is greater, missing the balancing 58s
      { id: "D", text: "Data set W has the greater mean and the greater standard deviation." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** W's values balance around $64$, so both means are $64$; every value in V equals $64$, so V has no spread, and W has the greater standard deviation.\n\n**The Full Solution:**\nStep 1: The mean of V is $64$, since every value is $64$. The mean of W is $\\frac{2(58) + 2(64) + 2(70)}{6} = \\frac{384}{6} = 64$.\nStep 2: Every value in V equals the mean, so the standard deviation of V is $0$. Four of the values in W are $6$ away from the mean, so the standard deviation of W is greater than $0$.\nStep 3: So the means are equal and W has the greater standard deviation. Check: the range of V is $0$ and the range of W is $12$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: the means are equal, but equal means do not force equal spread.\n* Choice C: reverses which measure differs.\n* Choice D: the $58$s balance the $70$s, so the mean of W is $64$, the same as V.\n\n**Test Day Takeaway:** A data set whose values are all equal has a standard deviation of $0$. Check the center and the spread separately; one can match while the other does not.",
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
    question: "The lengths of $8$ boards have a standard deviation of $3.5$ centimeters. What is this standard deviation in millimeters? ($1$ centimeter $= 10$ millimeters)",
    correctAnswer: "35",
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**The correct answer is 35.**\n\n**The Fast Way (~10s):** Converting multiplies every length by $10$, which multiplies every distance from the mean by $10$, so the standard deviation is $3.5(10) = 35$ millimeters.\n\n**The Full Solution:**\nStep 1: Converting from centimeters to millimeters multiplies each length by $10$, and it also multiplies the mean by $10$.\nStep 2: So each length's distance from the mean is multiplied by $10$, and the standard deviation, which measures those distances, is multiplied by $10$ as well.\nStep 3: The standard deviation is $3.5(10) = 35$ millimeters. Check: two boards $3.5$ centimeters apart are $35$ millimeters apart ✓\n\n**Common Mistakes:**\n* $3.5$: assumes a change of units leaves the standard deviation unchanged.\n* $0.35$: divides by $10$ instead of multiplying, converting in the wrong direction.\n* $350$: multiplies by $100$, the conversion for meters to centimeters.\n\n**Test Day Takeaway:** Multiplying every value by a number multiplies the standard deviation by that number. A unit conversion is just such a multiplication.",
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
    question: "$41, 45, 49, 53, 57$\nIf $6$ is added to each value in the data set shown, how does the standard deviation change?",
    choices: [
      // distractor: reverses the direction of the shift and applies it to the spread
      { id: "A", text: "It decreases by $6$." },
      { id: "B", text: "It does not change." },
      // distractor: applies the shift to the standard deviation the way it applies to the mean
      { id: "C", text: "It increases by $6$." },
      // distractor: treats adding 6 as multiplying by 6
      { id: "D", text: "It is multiplied by $6$." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Adding $6$ to every value moves the whole data set up by $6$; the distances between values, and from the mean, stay the same, so the standard deviation does not change.\n\n**The Full Solution:**\nStep 1: The mean of the original data is $49$. After $6$ is added to each value, the new data set is $47, 51, 55, 59, 63$ with mean $55$.\nStep 2: The distances from the mean are $-8, -4, 0, 4, 8$ in both data sets.\nStep 3: Since the standard deviation depends only on those distances, it does not change. Check: the range is $57 - 41 = 16$ before and $63 - 47 = 16$ after ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: adding a number cannot decrease the spread.\n* Choice C: the mean increases by $6$, but the spread does not.\n* Choice D: multiplying each value by $6$ would multiply the standard deviation by $6$; adding $6$ does not.\n\n**Test Day Takeaway:** Adding the same number to every value shifts the center but not the spread. Only multiplying every value changes the standard deviation.",
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
    question: "Data set A has $10$ values, a mean of $50$, and a standard deviation of $4$. Data set B is created by adding two values, each equal to $50$, to data set A. Which of the following must be true?",
    choices: [
      // distractor: assumes adding values raises the mean, but values equal to the mean leave it at 50
      { id: "A", text: "The mean of data set B is greater than $50$." },
      { id: "B", text: "The standard deviation of data set B is less than $4$." },
      // distractor: reasons that values at the mean add no distance and so change nothing, missing that the count of values grows
      { id: "C", text: "The standard deviation of data set B is equal to $4$." },
      // distractor: assumes more values always means more spread
      { id: "D", text: "The standard deviation of data set B is greater than $4$." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The two new values sit exactly at the mean, adding nothing to the total spread while increasing the number of values, so the typical distance from the mean shrinks.\n\n**The Full Solution:**\nStep 1: Two values equal to $50$ keep the mean at $50$, because their average is the mean.\nStep 2: Each new value is $0$ away from the mean, so the total of the squared distances from the mean is unchanged, but it is now shared among $12$ values instead of $10$.\nStep 3: Spreading the same total over more values lowers the standard deviation, so it is less than $4$. Check: the sum of squared distances is $10(4^{2}) = 160$, and $\\sqrt{\\frac{160}{12}} \\approx 3.65$, which is less than $4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: values equal to the mean do not change the mean.\n* Choice C: the new values add no distance, but they increase the number of values, which lowers the typical distance.\n* Choice D: adding values close to the center makes a data set less spread out, not more.\n\n**Test Day Takeaway:** Adding values at the mean pulls the standard deviation down; adding values far from the mean pushes it up. Ask where the new values sit relative to the center.",
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
    question: "$31, 34, 40, 43, 47, x$\nFor what value of $x$ does the data set shown have the least possible standard deviation?",
    correctAnswer: "39",
    explanation: "**SAT Pattern: Standard Deviation Comparison**\n\n**The correct answer is 39.**\n\n**The Fast Way (~25s):** A new value adds the least spread when it equals the mean of the other values, $\\frac{31 + 34 + 40 + 43 + 47}{5} = \\frac{195}{5} = 39$.\n\n**The Full Solution:**\nStep 1: The standard deviation measures how far values lie from the mean, so the sixth value should add as little distance as possible.\nStep 2: That happens when $x$ equals the mean of the other five values: $\\frac{31 + 34 + 40 + 43 + 47}{5} = \\frac{195}{5} = 39$.\nStep 3: With $x = 39$, the mean of all six values is still $39$, and the new value is $0$ away from it. Check: the sum of squared distances from the mean is $170$ for $x = 39$ and about $170.8$ for $x = 40$ ✓\n\n**Common Mistakes:**\n* $40$: uses the median of the five values instead of the mean.\n* $39.5$: averages the two middle values as if the list had an even number of values.\n* $195$: reports the sum of the five values instead of their mean.\n\n**Test Day Takeaway:** To keep the standard deviation as small as possible, place a new value at the mean of the existing values. It is the mean, not the median, that the standard deviation measures from.",
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
    question: "The scatterplot shows the number of insects in a water sample from each of $9$ sites on a river and each site's distance, in kilometers, downstream from a dam. A line of best fit is also shown. Which of the following is the best interpretation of the slope of the line of best fit?",
    diagram: { type: "scatterplot", params: { points: [[1, 12], [2, 13], [3, 20], [5, 24], [6, 32], [7, 36], [8, 36], [10, 44], [11, 52]], xMin: 0, xMax: 12, yMin: 0, yMax: 60, xGridStep: 1, yGridStep: 5, xLabelStep: 2, yLabelStep: 10, xLabel: "Distance from dam (kilometers)", yLabel: "Insects per sample", bestFitLine: { slope: 4, intercept: 6 } } },
    choices: [
      // distractor: describes the value of the line at 0 kilometers, the y-intercept, not the slope
      { id: "A", text: "The predicted number of insects in a sample taken at the dam" },
      // distractor: describes a total from the data, but the slope is a rate of change in the model
      { id: "B", text: "The total number of insects in the samples from the $9$ sites" },
      // distractor: describes where the line meets the x-axis, which is a distance rather than a change per kilometer
      { id: "C", text: "The distance, in kilometers, from the dam at which the predicted number of insects in a sample is $0$" },
      { id: "D", text: "The predicted increase in the number of insects in a sample for each additional kilometer from the dam" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The slope of a line of best fit is the predicted change in the $y$-variable for each increase of $1$ in the $x$-variable: here, the change in insects per sample for each additional kilometer.\n\n**The Full Solution:**\nStep 1: The $x$-axis shows the distance from the dam, in kilometers, and the $y$-axis shows the number of insects in a sample.\nStep 2: The slope of a line is the change in $y$ divided by the change in $x$, so it gives the change in the predicted number of insects for each increase of $1$ kilometer.\nStep 3: The line rises from left to right, so the slope is the predicted increase in insects per sample for each additional kilometer from the dam. Check: the line goes from about $6$ at $0$ kilometers to about $46$ at $10$ kilometers, a slope of $\\frac{40}{10} = 4$ insects per kilometer ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: this is the $y$-intercept, the value of the line when the distance is $0$.\n* Choice B: a slope is a rate of change in the model, not a total from the data.\n* Choice C: this is the $x$-intercept, a distance, not a change in insects per kilometer.\n\n**Test Day Takeaway:** Slope = change in $y$ for each $1$-unit increase in $x$. Read the axis labels and put the units into that sentence: \"per sample, per kilometer.\"",
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
    question: "The scatterplot shows the $5$-kilometer race times, in minutes, of $11$ runners and the number of training runs each runner completes per week. A line of best fit is also shown. Which of the following is closest to the slope of the line of best fit shown?",
    diagram: { type: "scatterplot", params: { points: [[0, 26], [1, 26], [2, 25], [3, 23], [4, 23], [5, 22], [6, 21], [7, 21], [8, 19], [9, 19], [10, 18]], xMin: 0, xMax: 10, yMin: 0, yMax: 30, xGridStep: 1, yGridStep: 5, xLabelStep: 2, yLabelStep: 10, xLabel: "Training runs per week", yLabel: "5-kilometer time (minutes)", bestFitLine: { slope: -0.8, intercept: 26 } } },
    choices: [
      // distractor: divides the run by the rise, 10/(-8) = -1.25
      { id: "A", text: "$-1.25$" },
      { id: "B", text: "$-0.8$" },
      // distractor: finds the size of the change but drops the negative sign of a falling line
      { id: "C", text: "$0.8$" },
      // distractor: divides the run by the rise and drops the sign, 10/8 = 1.25
      { id: "D", text: "$1.25$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The line falls from about $26$ at $x = 0$ to about $18$ at $x = 10$, so the slope is $\\frac{18 - 26}{10 - 0} = -0.8$.\n\n**The Full Solution:**\nStep 1: Choose two points on the line that are easy to read: about $(0, 26)$ and $(10, 18)$.\nStep 2: Slope $= \\frac{\\text{change in } y}{\\text{change in } x} = \\frac{18 - 26}{10 - 0} = \\frac{-8}{10}$.\nStep 3: So the slope is about $-0.8$. Check: the line falls from left to right, so the slope must be negative ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1.25$): divides the change in $x$ by the change in $y$, $\\frac{10}{-8}$.\n* Choice C ($0.8$): has the right size but the wrong sign for a line that falls from left to right.\n* Choice D ($1.25$): divides the change in $x$ by the change in $y$ and also drops the sign.\n\n**Test Day Takeaway:** Pick two points on the line, not on the data, and divide the change in $y$ by the change in $x$. Then check the sign against the direction of the line.",
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
    question: "The scatterplot shows the volume of water $y$, in liters, in a rain barrel $x$ minutes after a rainfall began. A line of best fit, $y = 0.45x + 12$, is also shown. According to the line of best fit, what is the predicted increase in the volume of water, in liters, over a $20$-minute period?",
    diagram: { type: "scatterplot", params: { points: [[5, 15], [10, 16], [15, 20], [25, 22], [30, 27], [40, 29], [50, 36], [60, 38]], xMin: 0, xMax: 60, yMin: 0, yMax: 45, xGridStep: 5, yGridStep: 5, xLabelStep: 10, yLabelStep: 10, xLabel: "Minutes since rain began", yLabel: "Volume of water (liters)", bestFitLine: { slope: 0.45, intercept: 12 } } },
    choices: [
      // distractor: reports the slope, the predicted increase over 1 minute rather than 20 minutes
      { id: "A", text: "$0.45$" },
      { id: "B", text: "$9$" },
      // distractor: reports the y-intercept, the predicted volume when the rainfall began
      { id: "C", text: "$12$" },
      // distractor: evaluates the model at x = 20, 0.45(20) + 12 = 21, a predicted volume rather than an increase
      { id: "D", text: "$21$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The slope, $0.45$, is the predicted increase per minute, so over $20$ minutes the increase is $0.45(20) = 9$ liters.\n\n**The Full Solution:**\nStep 1: The slope of the line of best fit, $0.45$, is the predicted increase in volume, in liters, for each additional minute.\nStep 2: Over $20$ minutes, the predicted increase is $20$ times as much: $0.45(20) = 9$.\nStep 3: So the predicted increase is $9$ liters. Check: from $x = 10$ to $x = 30$ the model gives $16.5$ and $25.5$, a difference of $9$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.45$): reports the increase over $1$ minute, not $20$ minutes.\n* Choice C ($12$): reports the $y$-intercept, the predicted volume when the rain began.\n* Choice D ($21$): finds the predicted volume after $20$ minutes, $0.45(20) + 12$, instead of the increase.\n\n**Test Day Takeaway:** An increase over $n$ units of $x$ is $n$ times the slope. The $y$-intercept belongs in a predicted value, never in a predicted change.",
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
    question: "The equation $s = 4.5h - 27$ models the snow depth $s$, in centimeters, on a mountain at an elevation of $h$ hundred meters. According to the model, what is the predicted increase in snow depth, in centimeters, for each increase of $200$ meters in elevation?",
    correctAnswer: "9",
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**The correct answer is 9.**\n\n**The Fast Way (~20s):** An increase of $200$ meters is an increase of $2$ in $h$, so the predicted snow depth increases by $4.5(2) = 9$ centimeters.\n\n**The Full Solution:**\nStep 1: The slope, $4.5$, is the predicted increase in snow depth, in centimeters, for each increase of $1$ in $h$, that is, for each $100$ meters of elevation.\nStep 2: Since $h$ is measured in hundreds of meters, an increase of $200$ meters is an increase of $2$ in $h$.\nStep 3: The predicted increase is $4.5(2) = 9$ centimeters. Check: at $h = 10$ the model gives $18$, and at $h = 12$ it gives $27$, a difference of $9$ ✓\n\n**Common Mistakes:**\n* $4.5$: reports the increase for $100$ meters, the slope itself.\n* $900$: multiplies the slope by $200$, ignoring that $h$ is in hundreds of meters.\n* $-18$: evaluates the model at $h = 2$, $4.5(2) - 27$, giving a predicted depth instead of an increase.\n\n**Test Day Takeaway:** Check the units of the input before using the slope. Convert the given change into the model's units, then multiply by the slope.",
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
    question: "The scatterplot shows the number of registered electric vehicles $y$, in thousands, in a county $x$ years after $2010$. A line of best fit, $y = 3.6x + 14$, is also shown. What is the best interpretation of the slope of the line of best fit in this context?",
    diagram: { type: "scatterplot", params: { points: [[0, 15], [1, 16], [2, 23], [3, 23], [4, 30], [5, 31], [6, 34], [7, 41], [8, 43], [9, 45], [10, 52], [11, 53]], xMin: 0, xMax: 12, yMin: 0, yMax: 60, xGridStep: 1, yGridStep: 5, xLabelStep: 2, yLabelStep: 10, xLabel: "Years since 2010", yLabel: "Registered EVs (thousands)", bestFitLine: { slope: 3.6, intercept: 14 } } },
    choices: [
      // distractor: treats the slope as the value at x = 0, which the model puts at 14 thousand
      { id: "A", text: "In $2010$, about $3{,}600$ electric vehicles were registered in the county." },
      { id: "B", text: "The number of registered electric vehicles in the county increased by about $3{,}600$ each year." },
      // distractor: ignores that y is measured in thousands, undercounting the yearly increase by a factor of 1,000
      { id: "C", text: "The number of registered electric vehicles in the county increased by about $3.6$ each year." },
      // distractor: inverts the rate, reading years per thousand vehicles instead of thousands of vehicles per year
      { id: "D", text: "The number of registered electric vehicles in the county increased by about $1{,}000$ every $3.6$ years." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The slope, $3.6$, is the predicted increase in $y$ per year, and $y$ is in thousands, so the model predicts about $3{,}600$ more registered electric vehicles each year.\n\n**The Full Solution:**\nStep 1: The slope of $y = 3.6x + 14$ is $3.6$, the predicted change in $y$ for each increase of $1$ in $x$.\nStep 2: Here $x$ is measured in years and $y$ in thousands of vehicles, so the slope means an increase of $3.6$ thousand vehicles per year.\nStep 3: $3.6$ thousand is $3{,}600$, so the number of registered electric vehicles increased by about $3{,}600$ each year. Check: the model gives $14$ thousand at $x = 0$ and $17.6$ thousand at $x = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: the value at $x = 0$ (the year $2010$) is the $y$-intercept, $14$ thousand, not the slope.\n* Choice C: leaves out the \"thousands\" in the units of $y$.\n* Choice D: inverts the rate; the slope gives vehicles per year, not years per thousand vehicles.\n\n**Test Day Takeaway:** Read the slope as \"units of $y$ per unit of $x$\" and carry any scale in the axis label, such as thousands, into the answer.",
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
    question: "The equation $y = -2.8x + 120$ models the mass $y$, in grams, of a bar of soap after $x$ days of use. According to the model, how many grams does the bar lose in $15$ days?",
    choices: [
      // distractor: reports the slope, the loss over 1 day rather than 15 days
      { id: "A", text: "$2.8$" },
      { id: "B", text: "$42$" },
      // distractor: evaluates the model at x = 15, 120 - 42 = 78, giving the remaining mass instead of the loss
      { id: "C", text: "$78$" },
      // distractor: subtracts one day of loss from the starting mass, 120 - 2.8
      { id: "D", text: "$117.2$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The slope, $-2.8$, means the bar loses $2.8$ grams per day, so in $15$ days it loses $2.8(15) = 42$ grams.\n\n**The Full Solution:**\nStep 1: The slope, $-2.8$, is the predicted change in mass, in grams, for each additional day of use. The negative sign means the mass decreases.\nStep 2: Over $15$ days, the predicted change is $-2.8(15) = -42$ grams.\nStep 3: So the bar loses $42$ grams in $15$ days. Check: the model gives $120$ grams at $x = 0$ and $78$ grams at $x = 15$, and $120 - 78 = 42$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2.8$): reports the loss over $1$ day, not $15$ days.\n* Choice C ($78$): finds the predicted mass after $15$ days instead of the mass lost.\n* Choice D ($117.2$): finds the predicted mass after $1$ day, $120 - 2.8$.\n\n**Test Day Takeaway:** A change over $n$ units of $x$ is $n$ times the slope. The constant term is used only when the question asks for a predicted value.",
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
    question: "The equation $y = 0.004x + 9.5$ models the fuel use $y$, in liters per $100$ kilometers, of a van carrying $x$ kilograms of cargo. According to the model, an increase of how many kilograms of cargo corresponds to an increase of $1$ liter per $100$ kilometers in fuel use?",
    choices: [
      // distractor: reports the slope, the increase in fuel use for 1 kilogram, instead of the cargo needed for an increase of 1
      { id: "A", text: "$0.004$" },
      // distractor: divides 1 by 0.04 instead of 0.004, misplacing the decimal point
      { id: "B", text: "$25$" },
      { id: "C", text: "$250$" },
      // distractor: divides 1 by 0.0004 instead of 0.004, misplacing the decimal point the other way
      { id: "D", text: "$2{,}500$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Each kilogram adds $0.004$ to $y$, so an increase of $1$ in $y$ takes $\\frac{1}{0.004} = 250$ kilograms.\n\n**The Full Solution:**\nStep 1: The slope, $0.004$, is the predicted increase in fuel use, in liters per $100$ kilometers, for each additional kilogram of cargo.\nStep 2: For an increase of $1$ in $y$, the cargo must increase by $k$ kilograms, where $0.004k = 1$.\nStep 3: So $k = \\frac{1}{0.004} = 250$ kilograms. Check: $0.004(250) = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.004$): reports the slope, which is the change in fuel use for $1$ kilogram, not the cargo needed for a change of $1$.\n* Choice B ($25$): computes $\\frac{1}{0.04}$, misplacing the decimal point.\n* Choice D ($2{,}500$): computes $\\frac{1}{0.0004}$, misplacing the decimal point the other way.\n\n**Test Day Takeaway:** The slope gives the change in $y$ per unit of $x$. To find the change in $x$ that produces a given change in $y$, divide the change in $y$ by the slope.",
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
    question: "The scatterplot shows the mass $y$, in kilograms, of a compost pile $x$ weeks after it was started. The line of best fit shown passes through the points $(3, 46)$ and $(15, 118)$. According to the line of best fit, what is the predicted mass, in kilograms, of the pile $12$ weeks after it was started?",
    diagram: { type: "scatterplot", params: { points: [[1, 32], [3, 49], [5, 55], [6, 67], [8, 73], [10, 90], [11, 91], [13, 109], [15, 115], [16, 127]], xMin: 0, xMax: 18, yMin: 0, yMax: 140, xGridStep: 2, yGridStep: 10, xLabelStep: 4, yLabelStep: 20, xLabel: "Weeks since started", yLabel: "Mass of compost (kg)", bestFitLine: { slope: 6, intercept: 28 } } },
    correctAnswer: "100",
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**The correct answer is 100.**\n\n**The Fast Way (~30s):** The slope is $\\frac{118 - 46}{15 - 3} = 6$, and $12$ weeks is $9$ weeks after $x = 3$, so the predicted mass is $46 + 6(9) = 100$ kilograms.\n\n**The Full Solution:**\nStep 1: The slope of the line is $\\frac{118 - 46}{15 - 3} = \\frac{72}{12} = 6$ kilograms per week.\nStep 2: Start from the point $(3, 46)$. From $x = 3$ to $x = 12$ is $9$ weeks, so the predicted mass increases by $6(9) = 54$ kilograms.\nStep 3: The predicted mass is $46 + 54 = 100$ kilograms. Check: the line is $y = 6x + 28$, which gives $6(15) + 28 = 118$ at $x = 15$ and $6(12) + 28 = 100$ at $x = 12$ ✓\n\n**Common Mistakes:**\n* $118$: multiplies the slope by all $12$ weeks and adds it to $46$, treating $(3, 46)$ as if it were the $y$-intercept.\n* $72$: computes $6(12)$ and leaves out the $y$-intercept, $28$.\n* $6$: stops at the slope, the predicted weekly increase.\n\n**Test Day Takeaway:** Find the slope from the two given points, then step from the nearer point to the target $x$-value. Use the actual $y$-intercept, not the first point given.",
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
    question: "The equation $y = 2.4x + 18$ models the height $y$, in centimeters, of a tomato plant $x$ weeks after it was planted. What is the best interpretation of $18$ in this context?",
    choices: [
      { id: "A", text: "The predicted height, in centimeters, of the plant when it was planted" },
      // distractor: interprets the coefficient 2.4, the rate of change, instead of the constant term
      { id: "B", text: "The predicted increase in the height of the plant, in centimeters, each week" },
      // distractor: reads the constant as a value of x rather than as the value of y when x = 0
      { id: "C", text: "The number of weeks after planting at which the predicted height of the plant is $0$ centimeters" },
      // distractor: treats the constant as a maximum, but this model keeps increasing as x increases
      { id: "D", text: "The greatest predicted height, in centimeters, of the plant" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The constant $18$ is the value of $y$ when $x = 0$: the predicted height at $0$ weeks, when the plant was planted.\n\n**The Full Solution:**\nStep 1: In $y = 2.4x + 18$, the constant term $18$ is the $y$-intercept, the value of $y$ when $x = 0$.\nStep 2: Here $x = 0$ means $0$ weeks after the plant was planted, and $y$ is the height in centimeters.\nStep 3: So $18$ is the predicted height, in centimeters, of the plant when it was planted. Check: $2.4(0) + 18 = 18$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: describes $2.4$, the slope, which is the predicted weekly increase in height.\n* Choice C: $18$ is a value of $y$, not of $x$; the model's height is never $0$ for $x \\ge 0$.\n* Choice D: the height in this model increases every week, so it has no greatest value.\n\n**Test Day Takeaway:** The constant term of a linear model is the predicted value of $y$ when $x = 0$. Translate \"$x = 0$\" into the context: the start, the moment of planting.",
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
    question: "A model estimates that the number of books $y$ in a school library $x$ years after $2015$ is $y = 85x + 3{,}400$. Which statement is the best interpretation of $3{,}400$ in this context?",
    choices: [
      // distractor: describes the coefficient $85$, the yearly increase, not the constant term
      { id: "A", text: "The estimated number of books added to the library each year" },
      { id: "B", text: "The estimated number of books in the library in $2015$" },
      // distractor: reads the constant as a number of years, but it carries the units of $y$, a number of books
      { id: "C", text: "The estimated number of years it takes the library to add $85$ books" },
      // distractor: describes the total increase $85x$, which depends on $x$, not the constant term
      { id: "D", text: "The estimated number of books added to the library since $2015$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The constant term is the value of $y$ when $x = 0$, and $x = 0$ is the year $2015$, so $3{,}400$ is the estimated number of books in $2015$.\n\n**The Full Solution:**\nStep 1: In $y = 85x + 3{,}400$, the coefficient $85$ is the change in $y$ for each one-year increase in $x$, and $3{,}400$ is the constant term.\nStep 2: Substitute $x = 0$: $y = 85(0) + 3{,}400 = 3{,}400$. Since $x$ counts years after $2015$, $x = 0$ is $2015$ itself.\nStep 3: So the model estimates $3{,}400$ books in the library in $2015$. Check: at $x = 4$ the model gives $85(4) + 3{,}400 = 3{,}740$ books, which is $3{,}400$ plus four years of growth ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: describes $85$, the yearly increase, which is the coefficient of $x$ rather than the constant term.\n* Choice C: reads $3{,}400$ as a number of years. The constant has the units of $y$, so it counts books.\n* Choice D: the number of books added since $2015$ is $85x$, which changes with $x$; the constant does not.\n\n**Test Day Takeaway:** The constant term of a linear model is the estimate at $x = 0$, in the units of $y$; translate $x = 0$ back into the context (here, the year $2015$) before reading the choices.",
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
    question: "The equation $y = -1.6x + 20$ estimates the concentration $y$, in milligrams per liter, of a medicine in a patient's blood $x$ hours after a dose. Which of the following is the best interpretation of $20$ in this context?",
    choices: [
      { id: "A", text: "The estimated concentration at the moment the dose was taken is $20$ milligrams per liter." },
      // distractor: gives the intercept the slope's role; the hourly decrease is $1.6$ milligrams per liter.
      { id: "B", text: "The estimated concentration decreases by $20$ milligrams per liter each hour." },
      // distractor: reads $20$ as a time; setting $y = 0$ actually gives $x = 12.5$ hours.
      { id: "C", text: "The estimated concentration reaches $0$ milligrams per liter $20$ hours after the dose." },
      // distractor: reads $20$ as a time again, and the model's greatest predicted concentration occurs at $x = 0$.
      { id: "D", text: "The greatest estimated concentration occurs $20$ hours after the dose." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Substituting $x = 0$ gives $y = 20$, the estimated concentration at the moment the dose was taken.\n\n**The Full Solution:**\nStep 1: The constant term $20$ is the value of $y$ when $x = 0$.\nStep 2: Here $x$ counts hours after the dose, so $x = 0$ is the moment of the dose.\nStep 3: The model therefore predicts a concentration of $20$ milligrams per liter at that moment, falling by $1.6$ milligrams per liter each hour after. Check: at $x = 5$ the model gives $-1.6(5) + 20 = 12$, below the starting value, as a decreasing model requires ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: gives the intercept the slope's role; the hourly decrease is $1.6$ milligrams per liter.\n* Choice C: reads $20$ as a time; setting $y = 0$ actually gives $x = 12.5$ hours.\n* Choice D: reads $20$ as a time again, and the model's greatest predicted concentration occurs at $x = 0$.\n\n**Test Day Takeaway:** A negative slope does not change how the intercept is read. It is still the predicted $y$ at $x = 0$, in the units of $y$.",
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
    question: "A model estimates that the volume $y$, in gallons, of water in a barrel $x$ days after a leak began is $y = 42 - 3.5x$. According to the model, what is the volume, in gallons, of water in the barrel when the leak began?",
    correctAnswer: "42",
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**The correct answer is $42$.**\n\n**The Fast Way (~10s):** The leak began at $x = 0$, and $y = 42 - 3.5(0) = 42$ gallons.\n\n**The Full Solution:**\nStep 1: The variable $x$ counts days after the leak began, so \"when the leak began\" means $x = 0$.\nStep 2: Substituting $x = 0$ into $y = 42 - 3.5x$ leaves only the constant term: $y = 42$.\nStep 3: The model estimates $42$ gallons of water when the leak began. Check: after $2$ days the model gives $42 - 3.5(2) = 35$ gallons, which is $42$ gallons minus two daily losses of $3.5$ gallons ✓\n\n**Common Mistakes:** Reporting $3.5$ gives the daily loss, the rate, instead of the starting volume. Reporting $38.5$ evaluates the model at $x = 1$ rather than $x = 0$. Solving $42 - 3.5x = 0$ gives $12$, the day the model estimates the barrel is empty, which answers a different question.\n\n**Test Day Takeaway:** \"When it began,\" \"originally,\" and \"at the start\" all mean $x = 0$, so the answer is the constant term of the model.",
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
    question: "The equation $y = 46{,}000 - 1.2x$ estimates the value $y$, in dollars, of a tractor that has been operated for $x$ hours. Which statement is the best interpretation of the $y$-intercept of the graph of this equation in the $xy$-plane?",
    choices: [
      { id: "A", text: "The estimated value of a tractor that has been operated for $0$ hours is $\\$46{,}000$." },
      // distractor: attaches the intercept to the per-hour rate; the model's hourly decrease is $\$1.20$
      { id: "B", text: "The estimated value decreases by $\\$46{,}000$ for each hour the tractor is operated." },
      // distractor: reads $46{,}000$ as a number of hours; solving $46{,}000 - 1.2x = 0$ actually gives about $38{,}333$ hours
      { id: "C", text: "The estimated value reaches $\\$0$ after $46{,}000$ hours of operation." },
      // distractor: describes the slope and drops its negative sign, so it reverses the direction of the change
      { id: "D", text: "The estimated value increases by $\\$1.20$ for each hour the tractor is operated." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The $y$-intercept is the value of $y$ at $x = 0$: a tractor operated for $0$ hours has an estimated value of $\\$46{,}000$.\n\n**The Full Solution:**\nStep 1: The $y$-intercept of the graph is the point where $x = 0$, so its $y$-value is $46{,}000 - 1.2(0) = 46{,}000$.\nStep 2: The variable $x$ counts hours of operation, so $x = 0$ describes a tractor that has not been operated.\nStep 3: The model estimates a value of $\\$46{,}000$ for such a tractor and subtracts $\\$1.20$ for each hour of operation. Check: at $x = 1{,}000$ hours the model gives $46{,}000 - 1{,}200 = 44{,}800$ dollars, less than the starting value ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: attaches the intercept to the per-hour rate; the model's hourly decrease is $\\$1.20$.\n* Choice C: reads $46{,}000$ as a number of hours; solving $46{,}000 - 1.2x = 0$ actually gives about $38{,}333$ hours.\n* Choice D: describes the slope and drops its negative sign, so it reverses the direction of the change.\n\n**Test Day Takeaway:** The $y$-intercept answers \"how much at zero\"; the slope answers \"how much per unit.\" Match each number to the question it answers before reading the choices.",
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
    question: "The total charge $y$, in dollars, for an order of $x$ posters at a print shop is modeled by $y = 1.75x + 12$. What is the best interpretation of $12$ in this context?",
    choices: [
      // distractor: describes the slope $1.75$, the per-poster charge.
      { id: "A", text: "The charge for each poster in the order" },
      { id: "B", text: "A charge for the order that does not depend on the number of posters" },
      // distractor: reads $12$ as a count of posters, but $12$ is a value of $y$ and $y$ is measured in dollars.
      { id: "C", text: "The number of posters included in the order at no charge" },
      // distractor: evaluates the model at $x = 1$, which gives $1.75(1) + 12 = \$13.75$, not $\$12$.
      { id: "D", text: "The total charge for an order of $1$ poster" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** At $x = 0$ posters the model still charges $\\$12$, so $\\$12$ is a fixed charge that does not depend on the order size.\n\n**The Full Solution:**\nStep 1: The value $12$ is the constant term, so it is the predicted total charge when $x = 0$.\nStep 2: An order of $0$ posters incurs no per-poster charge, so everything left is charge that applies no matter how many posters are ordered.\nStep 3: That makes $\\$12$ a one-time charge on the order, with $\\$1.75$ added per poster. Check: an order of $10$ posters costs $1.75(10) + 12 = \\$29.50$, which is $\\$17.50$ of poster charges plus the $\\$12$ fixed amount ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: describes the slope $1.75$, the per-poster charge.\n* Choice C: reads $12$ as a count of posters, but $12$ is a value of $y$ and $y$ is measured in dollars.\n* Choice D: evaluates the model at $x = 1$, which gives $1.75(1) + 12 = \\$13.75$, not $\\$12$.\n\n**Test Day Takeaway:** In a \"fixed fee plus rate\" model, the constant term is the fee and the coefficient is the rate. Test a choice by substituting $x = 0$ and $x = 1$.",
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
    question: "The scatterplot shows the soil moisture, in percent, of a garden and the number of days since it last rained, on each of $10$ days. A line of best fit is also shown. Which statement is the best interpretation of the $y$-intercept of the line of best fit?",
    diagram: { type: "scatterplot", params: { points: [[0, 33], [1, 33], [2, 29], [4, 27], [5, 23], [7, 21], [8, 17], [10, 15], [11, 11], [13, 9]], xMin: 0, xMax: 14, yMin: 0, yMax: 40, xGridStep: 1, yGridStep: 5, xLabelStep: 2, yLabelStep: 10, xLabel: "Days since last rain", yLabel: "Soil moisture (percent)", bestFitLine: { slope: -2, intercept: 34 } } },
    choices: [
      // distractor: confuses the line's value with a recorded value; the point plotted at $0$ days is at $33$ percent, while the line crosses the $y$-axis at $34$ percent
      { id: "A", text: "The soil moisture, in percent, recorded in the garden on the day it last rained" },
      { id: "B", text: "The soil moisture, in percent, the line predicts for the day it last rained" },
      // distractor: describes the slope of the line, about $-2$ percent per day, not its $y$-intercept
      { id: "C", text: "The predicted change in soil moisture, in percent, for each additional day without rain" },
      // distractor: describes the $x$-intercept, a number of days, rather than the $y$-intercept, a soil moisture
      { id: "D", text: "The number of days without rain after which the predicted soil moisture is $0$ percent" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The $y$-intercept is where $x = 0$ days, the day it last rained, and any value on the line of best fit is a prediction, not a recorded value.\n\n**The Full Solution:**\nStep 1: Translate the input. On the x-axis, $0$ days since it last rained is the day of the rain itself, so the $y$-intercept describes that day.\nStep 2: Translate the output. The y-axis is soil moisture in percent, so the $y$-intercept, about $34$, is a soil moisture, not a number of days.\nStep 3: Separate the line from the data. The data point at $0$ days sits at $33$ percent, while the line crosses the y-axis at $34$ percent, so the $y$-intercept is the soil moisture the line predicts for that day. Check: the line falls about $2$ percentage points per day, which is the slope; the $y$-intercept is a starting level, not a rate ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: names the recorded value. The recorded moisture at $0$ days is $33$ percent, while the line's value there is $34$ percent, so the two are different quantities.\n* Choice C: describes the slope of the line, the change per day, rather than its value at a single input.\n* Choice D: describes where the line would reach $0$ percent, the $x$-intercept, which is measured in days.\n\n**Test Day Takeaway:** Anything read off a line of best fit is a prediction; a choice that says \"recorded\" or \"actual\" describes a data point, not the line.",
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
    question: "A linear model estimates the depth $y$, in centimeters, of sediment in a pond $x$ years after $2010$. The model gives $y = 29$ when $x = 6$ and $y = 45$ when $x = 14$. According to the model, what is the depth in $2010$?",
    correctAnswer: "17",
    explanation: "**SAT Pattern: Interpret Intercept of Best Fit**\n\n**The correct answer is 17.**\n\n**The Fast Way (~35s):** The slope is $\\frac{45 - 29}{14 - 6} = 2$, and going back $6$ years from $(6, 29)$ gives $29 - 2(6) = 17$.\n\n**The Full Solution:**\nStep 1: The year $2010$ is $x = 0$, so the question asks for the $y$-intercept of the line.\nStep 2: Find the slope from the two points: $m = \\frac{45 - 29}{14 - 6} = \\frac{16}{8} = 2$ centimeters per year.\nStep 3: Substitute $(6, 29)$ into $y = 2x + b$: $29 = 2(6) + b$, so $b = 17$. Check: the line $y = 2x + 17$ gives $2(14) + 17 = 45$ at $x = 14$ ✓\n\n**Common Mistakes:**\n* $2$: reports the slope, the yearly increase in depth, instead of the depth in $2010$.\n* $23$: subtracts $6$ from $29$, using the change in $x$ without multiplying it by the slope.\n* $29$: reports the depth at $x = 6$, the year $2016$, as if it were the starting depth.\n\n**Test Day Takeaway:** When a question asks for the model's value at the starting time, find the slope from two points and work back to $x = 0$; the intercept is not one of the given points unless one of them has $x = 0$.",
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
    question: "A random sample of $600$ residents of a city was surveyed. Based on the sample, the mean number of hours per week that residents of the city volunteer is estimated to be $3.4$ hours, with an associated margin of error of $0.3$ hour. Which of the following is the most appropriate conclusion about the mean for all residents of the city?",
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
    explanation: "**SAT Pattern: Margin of Error**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The plausible interval is estimate $\\pm$ margin of error: $3.4 - 0.3 = 3.1$ to $3.4 + 0.3 = 3.7$ hours.\n\n**The Full Solution:**\nStep 1: A margin of error is applied in both directions around the sample estimate.\nStep 2: The lower bound is $3.4 - 0.3 = 3.1$ hours and the upper bound is $3.4 + 0.3 = 3.7$ hours.\nStep 3: The appropriate conclusion is that the mean for all residents plausibly lies between $3.1$ and $3.7$ hours. Check: the interval is centered on $3.4$ and is $2(0.3) = 0.6$ hour wide ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: treats the sample estimate as the exact population value, which is what the margin of error exists to rule out.\n* Choice C: applies the interval to individual residents; the interval estimates the population mean, not each person's hours.\n* Choice D: uses the margin of error on one side only, halving the interval instead of extending it in both directions.\n\n**Test Day Takeaway:** Estimate $\\pm$ margin of error gives a plausible range for the population value. It is not a guarantee, and it is never a range for individual members of the population.",
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
    question: "A random sample of $400$ households in a county was used to estimate the percentage of households that own a bicycle, with an associated margin of error of $4.8$ percentage points. A new random sample of $1{,}600$ households from the county was selected using the same method. Which of the following is closest to the margin of error for the new estimate?",
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
    explanation: "**SAT Pattern: Sample Size for Margin Reduction**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The sample size is multiplied by $4$, and the margin of error scales with $\\frac{1}{\\sqrt{n}}$, so it is divided by $\\sqrt{4} = 2$: $\\frac{4.8}{2} = 2.4$.\n\n**The Full Solution:**\nStep 1: With the same methods and population, the margin of error is inversely proportional to $\\sqrt{n}$.\nStep 2: The sample size goes from $400$ to $1{,}600$, a factor of $\\frac{1{,}600}{400} = 4$, so $\\sqrt{n}$ grows by a factor of $2$.\nStep 3: The margin of error is therefore about $\\frac{4.8}{2} = 2.4$ percentage points. Check: to halve a margin of error you need four times the sample, which is exactly the change described ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.2$): divides the margin of error by $4$, the sample-size factor, instead of by $\\sqrt{4} = 2$.\n* Choice C ($4.8$): assumes a larger sample leaves the margin of error unchanged.\n* Choice D ($19.2$): multiplies by $4$, making the margin of error grow when the sample grows.\n\n**Test Day Takeaway:** Margin of error shrinks with the square root of the sample size: four times the data cuts it in half, nine times the data cuts it to a third.",
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
    question: "Based on a random sample of $900$ registered voters in a state, the proportion of all registered voters in the state who support a ballot measure is estimated to be $0.52$, with a $95\\%$ confidence interval from $0.49$ to $0.55$. Which of the following statements is best supported by this confidence interval?",
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
    explanation: "**SAT Pattern: Confidence Interval Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The interval runs from $0.49$ to $0.55$, and $0.49<0.50$. Values below one half are inside the interval, so a minority of support is plausible.\n\n**The Full Solution:**\nStep 1: A confidence interval gives the range of plausible values for the population proportion: values inside it are plausible, and values outside it are not supported.\nStep 2: The interval $[0.49,\\ 0.55]$ contains $0.50$, so proportions on both sides of one half are plausible.\nStep 3: In particular $0.49$ is plausible, which means fewer than half of all registered voters supporting the measure cannot be ruled out. Check: an interval that supported a majority claim would have to lie entirely above $0.50$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: reports the sample estimate as an exact population value, which the width of the interval explicitly denies.\n* Choice B: treats the interval as open at the top, but $0.55$ is the largest plausible proportion, so nothing above $55\\%$ is supported.\n* Choice D: reads only the center of the interval; because $0.50$ lies inside $[0.49,\\ 0.55]$, a minority is still plausible.\n\n**Test Day Takeaway:** Check whether the decisive value, here $0.50$, falls inside the interval. If it does, no claim about which side of it the population lies on is supported.",
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
    question: "The scatterplot shows the amount of salt $y$, in tons, in a town's storage shed $x$ days after the start of winter. A line of best fit is also shown. Which of the following is the best interpretation of the slope of the line of best fit?",
    diagram: { type: "scatterplot", params: { points: [[2, 93], [5, 89], [8, 78], [11, 74], [14, 64], [17, 59], [20, 48], [23, 44], [26, 33], [29, 29]], xMin: 0, xMax: 32, yMin: 0, yMax: 120, xGridStep: 2, yGridStep: 10, xLabelStep: 8, yLabelStep: 20, xLabel: "Days after start of winter", yLabel: "Salt in shed (tons)", bestFitLine: { slope: -2.5, intercept: 100 } } },
    choices: [
      // distractor: inverts the slope, computing run over rise, $\frac{8}{20} = 0.4$, instead of rise over run
      { id: "A", text: "The predicted amount of salt in the shed decreases by about $0.4$ ton each day." },
      { id: "B", text: "The predicted amount of salt in the shed decreases by about $2.5$ tons each day." },
      // distractor: interprets the $y$-intercept, $100$ tons, instead of the slope
      { id: "C", text: "The predicted amount of salt in the shed at the start of winter is about $100$ tons." },
      // distractor: describes where the line meets the x-axis, $\frac{100}{2.5} = 40$ days, instead of the slope
      { id: "D", text: "The predicted amount of salt in the shed reaches $0$ tons after about $40$ days." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The line falls from $100$ tons at day $0$ to $80$ tons at day $8$, a slope of $\\frac{-20}{8} = -2.5$, so the predicted amount of salt drops by about $2.5$ tons per day.\n\n**The Full Solution:**\nStep 1: Read two points on the line where it crosses grid lines: $(0, 100)$ and $(8, 80)$.\nStep 2: Compute the slope: $\\frac{80 - 100}{8 - 0} = \\frac{-20}{8} = -2.5$ tons per day.\nStep 3: A slope is the change in $y$ for each increase of $1$ in $x$, so the predicted amount of salt decreases by about $2.5$ tons each day. Check: from $(8, 80)$ to $(16, 60)$ the line again drops $20$ tons in $8$ days, $2.5$ tons per day ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.4$ ton): divides the change in days by the change in tons, $\\frac{8}{20} = 0.4$, which is run over rise.\n* Choice C ($100$ tons): describes the $y$-intercept, the predicted amount at the start of winter, not the slope.\n* Choice D ($40$ days): describes where the line would reach $0$ tons, $\\frac{100}{2.5} = 40$, not the slope.\n\n**Test Day Takeaway:** The slope of a line of best fit is a rate: units of $y$ per one unit of $x$. Choose the choice that states a change \"each day,\" and check the number with rise over run.",
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
    question: "The scatterplot shows the electricity use $y$, in kilowatt-hours, of a workshop and the number of machines $x$ in use, for each of $9$ months. The line of best fit shown has equation $y = 145x + 60$. In the month with $6$ machines in use, the electricity use was $1{,}000$ kilowatt-hours. What is the residual, in kilowatt-hours, for that month?",
    diagram: { type: "scatterplot", params: { points: [[2, 340], [3, 520], [4, 610], [5, 800], [6, 1000], [7, 1050], [8, 1240], [9, 1330], [10, 1540]], xMin: 0, xMax: 11, yMin: 0, yMax: 1800, xGridStep: 1, yGridStep: 200, xLabelStep: 2, yLabelStep: 400, xLabel: "Machines in use", yLabel: "Electricity use (kWh)", bestFitLine: { slope: 145, intercept: 60 } } },
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
    explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Predicted use is $145(6) + 60 = 930$, so the residual is $1{,}000 - 930 = 70$ kilowatt-hours.\n\n**The Full Solution:**\nStep 1: A residual is the actual value minus the value the model predicts at that same $x$.\nStep 2: At $x = 6$ the line of best fit predicts $145(6) + 60 = 870 + 60 = 930$ kilowatt-hours.\nStep 3: The residual is $1{,}000 - 930 = 70$ kilowatt-hours. Check: the point lies above the line on the scatterplot, and a point above the line has a positive residual ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-70$): subtracts in the reverse order, predicted minus actual, which flips the sign of the residual.\n* Choice C ($930$): reports the predicted value $145(6) + 60 = 930$ instead of the difference.\n* Choice D ($1{,}000$): reports the recorded value, the height of the data point rather than its distance from the line.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted, in that order. Above the line is positive, below the line is negative. Check the sign against the picture before answering.",
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
    question: "The dot plot shows the number of pieces of mail delivered to a mailbox on each of $12$ days. What is the mode of the data shown?",
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
    explanation: "**SAT Pattern: Mode from List**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** The tallest stack of dots sits above $1$, so the mode is $1$.\n\n**The Full Solution:**\nStep 1: On a dot plot each dot is one day, and the value on the axis is what was recorded that day.\nStep 2: The stacks have heights $1$, $5$, $2$, $1$, $2$, and $1$ above the values $0$, $1$, $2$, $3$, $4$, and $7$.\nStep 3: The greatest height, $5$, sits above the value $1$, so the mode is $1$ piece of mail. Check: no other value occurs more than twice ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($1.5$): reports the median, the average of the $6$th and $7$th dots, $\\frac{1 + 2}{2}$.\n* Choice C ($2.25$): reports the mean, $\\frac{27}{12} = 2.25$.\n* Choice D ($5$): reports the height of the tallest stack, a frequency rather than the value that repeats.\n\n**Test Day Takeaway:** The mode is read off the number line, not the height of a stack. Find the tallest stack, then look down at the number under it.",
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
    question: "$23, 31, 27, 31, 25, 31, 29, 24, 28$\nWhat is the mode of the data shown?",
    correctAnswer: "31",
    explanation: "**SAT Pattern: Mode from List**\n\n**The correct answer is 31.**\n\n**The Fast Way (~10s):** Only $31$ appears more than once, three times, so it is the mode.\n\n**The Full Solution:**\nStep 1: The mode is the value that occurs most often in the data.\nStep 2: Tally the values: $31$ appears three times, and $23$, $24$, $25$, $27$, $28$, and $29$ each appear once.\nStep 3: The most frequent value is $31$. Check: the three $31$s are three of the nine values, and no other value appears twice ✓\n\n**Common Mistakes:**\n* $3$: reports how many times the mode occurs rather than the value itself.\n* $28$: sorts the list and reports the middle value, which is the median.\n* $27.67$: averages the nine values, $\\frac{249}{9} \\approx 27.67$, which is the mean.\n\n**Test Day Takeaway:** Mode, median, and mean answer three different questions; the mode is always one of the listed values, the one that repeats most.",
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
    explanation: "**SAT Pattern: Mode from List**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The largest frequency in the right column is $9$; the value beside it in the left column is $1$ game won.\n\n**The Full Solution:**\nStep 1: In a frequency table the left column lists the values and the right column tells how many times each occurs.\nStep 2: The frequencies are $2$, $9$, $4$, $6$, and $5$, and the greatest of these is $9$.\nStep 3: The frequency $9$ belongs to the row \"$1$ game won,\" so the mode is $1$. Check: no other number of wins was reported by more than $6$ members ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): reports the median of the $26$ values, which falls at $2$ games, rather than the most frequent value.\n* Choice C ($4$): reports the largest entry in the \"Games won\" column instead of the value with the largest frequency.\n* Choice D ($9$): reports the largest frequency, the number of members, rather than the number of games those members won.\n\n**Test Day Takeaway:** Find the biggest frequency, then read across to the value column. Reporting the frequency itself is the single most common slip on frequency-table mode questions.",
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
    question: "$4, 5, 3, 5, 4, 6, k, 4, 5$\nIn the data set shown, $5$ is the only mode. What is the value of $k$?",
    choices: [
      // distractor: makes $3$ appear twice and leaves $4$ and $5$ tied at three each, so there is no single mode
      { id: "A", text: "$3$" },
      // distractor: makes $4$ appear four times, which would make $4$ the only mode instead of $5$
      { id: "B", text: "$4$" },
      { id: "C", text: "$5$" },
      // distractor: makes $6$ appear twice and again leaves $4$ and $5$ tied at three each
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Mode from List**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Without $k$, the values $4$ and $5$ each appear three times. For $5$ to be the only mode, $k$ must be $5$.\n\n**The Full Solution:**\nStep 1: Tally the eight known values: $3$ appears once, $4$ appears three times, $5$ appears three times, and $6$ appears once.\nStep 2: For $5$ to be the only mode, $5$ must occur more often than every other value, so it must beat the three appearances of $4$.\nStep 3: Only $k = 5$ does this: $5$ then appears four times and $4$ three times. Check: $k = 3$ or $k = 6$ leaves $4$ and $5$ tied at three, and $k = 4$ makes $4$ the only mode ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): raises $3$ to two appearances while $4$ and $5$ stay tied at three, so the data set has two modes.\n* Choice B ($4$): gives $4$ four appearances, making $4$ the only mode rather than $5$.\n* Choice D ($6$): raises $6$ to two appearances and leaves the tie between $4$ and $5$ in place.\n\n**Test Day Takeaway:** Tally the known values before placing the unknown; a unique mode has to beat the runner-up, not just tie it.",
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
    explanation: "**SAT Pattern: Mode from List**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The tallest stack is above $5$, so the mode is $5$. With $15$ dots, the median is the $8$th, which lands on $6$.\n\n**The Full Solution:**\nStep 1: The stacks have heights $1$, $6$, $2$, $3$, $2$, and $1$ above the values $4$, $5$, $6$, $7$, $8$, and $12$, so the mode is $5$.\nStep 2: With $15$ values, the median is the $8$th value when the data are in order.\nStep 3: The running counts are $1$ (through $4$), $7$ (through $5$), and $9$ (through $6$), so the $8$th value is $6$ and the median is $6$. Check: mode $5$, median $6$, a right-tailed shape with one hiker at $12$ days ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: swaps the two statistics, reporting the median as the mode and the mode as the median.\n* Choice C: reads the middle of the axis as the mode instead of counting the dots in each stack.\n* Choice D: reports the mean, $\\frac{95}{15} \\approx 6.33$, in place of the median, and still misidentifies the mode.\n\n**Test Day Takeaway:** On a dot plot, the mode is the tallest stack and the median is found by counting dots from one end. They rarely coincide, so compute each one separately.",
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
    question: "The dot plot shows the $15$ values in a data set. Some values, each equal to $13$, are added to the data set so that $13$ is the only mode of the new data set. What is the least possible number of values that were added?",
    diagram: { type: "dotPlot", params: { data: [{ value: 11, count: 2 }, { value: 12, count: 6 }, { value: 13, count: 4 }, { value: 14, count: 3 }], xMin: 10, xMax: 15, xLabel: "Value" } },
    correctAnswer: "3",
    explanation: "**SAT Pattern: Mode from List**\n\n**The correct answer is 3.**\n\n**The Fast Way (~20s):** The value $12$ occurs $6$ times and $13$ occurs $4$ times, so $13$ needs at least $7$ occurrences to be the only mode: $7 - 4 = 3$ values.\n\n**The Full Solution:**\nStep 1: Read the stacks: $11$ occurs twice, $12$ occurs six times, $13$ occurs four times, and $14$ occurs three times, for $15$ values in all.\nStep 2: Adding values equal to $13$ changes only the count for $13$. For $13$ to be the only mode, its count must be greater than $6$, the count for $12$, so it must be at least $7$.\nStep 3: Going from $4$ to $7$ takes $7 - 4 = 3$ added values. Check: with $3$ added, the counts are $2$, $6$, $7$, and $3$, and $13$ is the only mode; with $2$ added, $12$ and $13$ tie at $6$ ✓\n\n**Common Mistakes:** Reporting $2$ makes $13$ tie with $12$ at six occurrences, so $13$ is a mode but not the only mode. Reporting $7$ gives the number of times $13$ must occur rather than the number of values added. Reporting $6$ gives the count for $12$, the current mode.\n\n**Test Day Takeaway:** \"The only mode\" means strictly more occurrences than every other value. Find the current greatest count, add $1$, and subtract the count already there.",
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
    question: "Each value in a data set is multiplied by $3$. Which statement about the new data set is true?",
    choices: [
      // distractor: scales the spread but not the center, as if multiplying moved every value away from a fixed mean
      { id: "A", text: "Its mean is the same as the original mean, and its standard deviation is $3$ times the original standard deviation." },
      { id: "B", text: "Its mean is $3$ times the original mean, and its standard deviation is $3$ times the original standard deviation." },
      // distractor: applies the rule for adding a constant to the standard deviation; multiplying stretches the spread
      { id: "C", text: "Its mean is $3$ times the original mean, and its standard deviation is the same as the original standard deviation." },
      // distractor: assumes that changing every value by the same factor leaves the summary statistics unchanged
      { id: "D", text: "Its mean is the same as the original mean, and its standard deviation is the same as the original standard deviation." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Multiplying every value by $3$ multiplies the mean by $3$ and stretches every distance from the mean by $3$, so the standard deviation is also multiplied by $3$.\n\n**The Full Solution:**\nStep 1: The mean is the sum divided by the count. Multiplying every value by $3$ multiplies the sum by $3$ and leaves the count alone, so the mean is multiplied by $3$.\nStep 2: Each value's distance from the mean is also multiplied by $3$, and the standard deviation measures those distances, so it is multiplied by $3$.\nStep 3: So both statistics are $3$ times the originals. Check: the values $2$ and $4$ have mean $3$ and lie $1$ from the mean; tripled they are $6$ and $12$, with mean $9$ and each $3$ from the mean ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: changes the spread but not the center. Every value moves, so the mean moves too.\n* Choice C: keeps the standard deviation fixed, which is what happens when a constant is added, not multiplied.\n* Choice D: treats the change as if it had no effect on either statistic.\n\n**Test Day Takeaway:** Multiplying every value by $a$ multiplies the mean by $a$ and the standard deviation by $|a|$; adding a constant moves only the mean.",
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
    question: "The mean of $16$ masses is $2.4$ kilograms. What is the mean of the masses, in grams? ($1$ kilogram $= 1{,}000$ grams)",
    choices: [
      // distractor: multiplies by $10$ instead of $1{,}000$
      { id: "A", text: "$24$" },
      // distractor: multiplies by $100$, the factor for meters to centimeters, instead of $1{,}000$
      { id: "B", text: "$240$" },
      { id: "C", text: "$2{,}400$" },
      // distractor: finds the total mass of all $16$ masses in grams, $16(2{,}400)$, instead of the mean
      { id: "D", text: "$38{,}400$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Converting each mass to grams multiplies it by $1{,}000$, so the mean is $2.4 \\times 1{,}000 = 2{,}400$ grams.\n\n**The Full Solution:**\nStep 1: Each mass in grams is $1{,}000$ times the same mass in kilograms.\nStep 2: Multiplying every value in a data set by $1{,}000$ multiplies the mean by $1{,}000$.\nStep 3: The mean is $2.4 \\times 1{,}000 = 2{,}400$ grams. Check: the total is $16 \\times 2.4 = 38.4$ kilograms, or $38{,}400$ grams, and $\\frac{38{,}400}{16} = 2{,}400$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): multiplies by $10$ instead of $1{,}000$.\n* Choice B ($240$): multiplies by $100$, the factor for meters to centimeters.\n* Choice D ($38{,}400$): gives the total mass of the $16$ masses in grams, not the mean.\n\n**Test Day Takeaway:** A unit conversion multiplies every value by the same factor, so the mean converts exactly like a single value; the number of values does not matter.",
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
    question: "A teacher adds $4$ points to each of $20$ test scores. How do the median and range of the scores change?",
    choices: [
      // distractor: adds the $4$ to the range as well, but the two added $4$s cancel when the minimum is subtracted from the maximum
      { id: "A", text: "The median increases by $4$, and the range increases by $4$." },
      { id: "B", text: "The median increases by $4$, and the range is unchanged." },
      // distractor: holds the median fixed and moves the spread, which reverses the effect of adding a constant
      { id: "C", text: "The median is unchanged, and the range increases by $4$." },
      // distractor: assumes adding the same number to every score changes neither statistic
      { id: "D", text: "The median is unchanged, and the range is unchanged." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Adding $4$ to every score slides the whole list up: the median rises by $4$, and the range, a difference of two scores, does not change.\n\n**The Full Solution:**\nStep 1: The scores keep their order, so the middle of the new list is the old middle plus $4$. The median increases by $4$.\nStep 2: The range is the maximum minus the minimum. Both rise by $4$, and $(\\text{max} + 4) - (\\text{min} + 4) = \\text{max} - \\text{min}$.\nStep 3: So the median increases by $4$ and the range is unchanged. Check: the scores $70$, $75$, $90$ have median $75$ and range $20$; after adding $4$ they are $74$, $79$, $94$, with median $79$ and range $20$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: adds $4$ to the range as well, but the $4$ added to the maximum is canceled by the $4$ added to the minimum.\n* Choice C: reverses the two effects; adding a constant moves the center, not the spread.\n* Choice D: ignores that every score, including the middle one, moved up by $4$.\n\n**Test Day Takeaway:** Adding a constant to every value moves each measure of center by that constant and leaves each measure of spread (range, standard deviation) unchanged.",
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
    question: "A data set of lengths, in inches, has a mean of $9.6$ and a range of $2.5$. Each length is multiplied by $2.54$ to convert it to centimeters. What is the new range?",
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
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The range scales with the values: $2.5 \\times 2.54 = 6.35$ centimeters.\n\n**The Full Solution:**\nStep 1: The range is the maximum minus the minimum.\nStep 2: Multiplying every length by $2.54$ multiplies both the maximum and the minimum by $2.54$, so their difference is multiplied by $2.54$ as well.\nStep 3: The converted range is $2.54 \\times 2.5 = 6.35$ centimeters. Check: a spread of $2.5$ inches is the same physical spread as $6.35$ centimeters ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2.5$): leaves the range unchanged, applying the rule for adding a constant rather than for multiplying.\n* Choice B ($5.04$): adds the conversion factor, $2.5 + 2.54$, instead of multiplying by it.\n* Choice D ($24.384$): converts the mean, $9.6 \\times 2.54$, rather than the range.\n\n**Test Day Takeaway:** A unit conversion is a multiplication, so it scales the range and the standard deviation by the same factor as the values. The mean given in the stem is a decoy.",
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
    question: "Each value in a data set with standard deviation $6.4$ is multiplied by a positive constant $k$. The new data set has standard deviation $22.4$. What is the value of $k$?",
    correctAnswer: "3.5",
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**The correct answer is 3.5.**\n\n**The Fast Way (~15s):** Multiplying every value by a positive $k$ multiplies the standard deviation by $k$, so $k = \\frac{22.4}{6.4} = 3.5$.\n\n**The Full Solution:**\nStep 1: Multiplying every value by $k$ multiplies each distance from the mean by $k$, so the new standard deviation is $k$ times the original one.\nStep 2: Write the equation: $6.4k = 22.4$.\nStep 3: Divide: $k = \\frac{22.4}{6.4} = 3.5$. Check: $6.4 \\times 3.5 = 22.4$ ✓\n\n**Common Mistakes:**\n* $16$: subtracts the standard deviations, $22.4 - 6.4$, as if a constant had been added; adding a constant would not change the standard deviation at all.\n* $0.286$: divides in the wrong order, $\\frac{6.4}{22.4}$, which would shrink the spread.\n* $1.87$: takes $\\sqrt{3.5}$, treating the standard deviation as if it were multiplied by $k^{2}$; that is the rule for the variance.\n\n**Test Day Takeaway:** Under multiplication by a positive $k$, the standard deviation scales by exactly $k$, so the ratio of the two standard deviations is the multiplier.",
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
    question: "Each value in a data set with mean $42$ and median $40$ is doubled and increased by $3$. What is the new mean?",
    choices: [
      // distractor: adds $3$ to the mean but never doubles it: $42 + 3 = 45$
      { id: "A", text: "$45$" },
      // distractor: transforms the median instead of the mean: $2(40) + 3 = 83$
      { id: "B", text: "$83$" },
      { id: "C", text: "$87$" },
      // distractor: adds the $3$ before doubling: $2(42 + 3) = 90$, applying the operations in the wrong order
      { id: "D", text: "$90$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Doubling doubles the mean and adding $3$ adds $3$ to it: $2(42) + 3 = 87$.\n\n**The Full Solution:**\nStep 1: Doubling every value doubles the sum and keeps the count, so the mean becomes $2 \\times 42 = 84$.\nStep 2: Adding $3$ to every value adds $3$ to the mean: $84 + 3 = 87$.\nStep 3: The new mean is $87$; the median, $40$, is not needed. Check: the values $40$, $40$, $46$ have mean $42$ and median $40$; they become $83$, $83$, $95$, whose mean is $\\frac{261}{3} = 87$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($45$): adds $3$ but skips the doubling.\n* Choice B ($83$): transforms the median, $2(40) + 3 = 83$, when the question asks for the mean.\n* Choice D ($90$): computes $2(42 + 3)$, adding $3$ before doubling; the values are doubled first.\n\n**Test Day Takeaway:** When every value $x$ becomes $ax + b$, the mean becomes $a(\\text{mean}) + b$, in the same order as the operations.",
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
    question: "A data set of $25$ values has mean $m$ and standard deviation $s$. Each value $v$ in the data set is replaced by $9 - 2v$. Which of the following gives the mean and standard deviation of the new values?",
    choices: [
      // distractor: carries the negative sign into the standard deviation, which can never be negative
      { id: "A", text: "Mean: $9 - 2m$; standard deviation: $-2s$" },
      { id: "B", text: "Mean: $9 - 2m$; standard deviation: $2s$" },
      // distractor: reverses the transformation for the mean, computing $2m - 9$ instead of $9 - 2m$
      { id: "C", text: "Mean: $2m - 9$; standard deviation: $2s$" },
      // distractor: leaves the standard deviation unchanged, treating the factor $-2$ as though it were only a shift
      { id: "D", text: "Mean: $9 - 2m$; standard deviation: $s$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The mean follows the rule itself, $9 - 2m$, while the standard deviation is multiplied by $|-2| = 2$.\n\n**The Full Solution:**\nStep 1: Transform the mean. Each new value is $9 - 2v$, and the mean passes through multiplication and addition, so the new mean is $9 - 2m$.\nStep 2: Transform the spread. Each distance from the mean is multiplied by $-2$, and the standard deviation measures distances, so it is multiplied by $|-2| = 2$, giving $2s$.\nStep 3: Test two values. The values $1$ and $3$ have mean $2$ and lie $1$ from it; they become $7$ and $3$, with mean $5 = 9 - 2(2)$, and each lies $2$ from it, so the spread doubled ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2s$): carries the minus sign into the spread. A standard deviation is a distance and is never negative.\n* Choice C ($2m - 9$): applies the rule backwards; each value becomes $9 - 2v$, not $2v - 9$.\n* Choice D ($s$): leaves the spread unchanged, which is what adding $9$ alone would do. The factor $-2$ stretches it.\n\n**Test Day Takeaway:** When every value $v$ becomes $av + b$, the mean becomes $am + b$ and the standard deviation becomes $|a|s$; the sign disappears from the spread but not from the center.",
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
    question: "Each score $v$ in a list of $28$ scores is replaced by $4v - 7$. The new scores have a mean of $61$ and a standard deviation of $12$. What is the standard deviation of the original scores?",
    choices: [
      { id: "A", text: "$3$" },
      // distractor: undoes the $-7$ on the spread as well: $\frac{12 + 7}{4} = 4.75$
      { id: "B", text: "$4.75$" },
      // distractor: keeps the new standard deviation, ignoring the factor $4$
      { id: "C", text: "$12$" },
      // distractor: adds $7$ back to the standard deviation: $12 + 7 = 19$, treating the shift as if it affected the spread
      { id: "D", text: "$19$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Scaling a Data Set**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Only the factor $4$ changes the spread, so the original standard deviation is $\\frac{12}{4} = 3$.\n\n**The Full Solution:**\nStep 1: Separate the two operations in $4v - 7$: the factor $4$ stretches the data, and subtracting $7$ slides it.\nStep 2: Subtracting $7$ from every score leaves the standard deviation unchanged, so the new standard deviation is $4$ times the original one: $4\\sigma = 12$.\nStep 3: Solve: $\\sigma = \\frac{12}{4} = 3$; the mean of $61$ is not needed. Check: two original scores $3$ apart become new scores $4(3) = 12$ apart, matching the new spread ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($4.75$): computes $\\frac{12 + 7}{4}$, undoing the $-7$ on the spread as well. A shift does not change the spread.\n* Choice C ($12$): keeps the new standard deviation, ignoring the factor $4$.\n* Choice D ($19$): adds the $7$ back, $12 + 7 = 19$, reversing a shift that never affected the spread.\n\n**Test Day Takeaway:** To reverse $av + b$ for a standard deviation, divide by $|a|$ and ignore $b$; only the mean is affected by $b$.",
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
    question: "The table shows the average swimming speeds, in kilometers per hour, of three sea turtles. At its average speed, how many kilometers does turtle B swim in $9$ hours?",
    diagram: { type: "dataTable", params: { headers: ["Turtle", "Average speed (km/h)"], rows: [["A", "2.4"], ["B", "3.5"], ["C", "1.8"]] } },
    choices: [
      // distractor: adds the speed and the time, $3.5 + 9 = 12.5$, instead of multiplying
      { id: "A", text: "$12.5$" },
      // distractor: uses turtle C's speed, $1.8(9) = 16.2$
      { id: "B", text: "$16.2$" },
      // distractor: uses turtle A's speed, $2.4(9) = 21.6$
      { id: "C", text: "$21.6$" },
      { id: "D", text: "$31.5$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Read $3.5$ from the row for turtle B and multiply by $9$: $31.5$ kilometers.\n\n**The Full Solution:**\nStep 1: Read the rate. The table gives turtle B an average speed of $3.5$ kilometers per hour.\nStep 2: Apply distance equals rate times time with $t = 9$ hours: $d = 3.5(9)$.\nStep 3: Multiply: $d = 31.5$ kilometers. Check: $31.5 \\div 9 = 3.5$, the speed in the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($12.5$): adds the rate and the time. Speeds and durations are different quantities and cannot be added.\n* Choice B ($16.2$): multiplies by turtle C's speed of $1.8$ kilometers per hour.\n* Choice C ($21.6$): multiplies by turtle A's speed of $2.4$ kilometers per hour.\n\n**Test Day Takeaway:** Point at the row the question names before you compute; a table with three near-identical rates rewards the reader who checks the label.",
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
    question: "A person walks $840$ meters at a constant speed of $1.4$ meters per second. How many minutes does the walk take?",
    correctAnswer: "10",
    explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~20s):** $\\frac{840}{1.4} = 600$ seconds, and $\\frac{600}{60} = 10$ minutes.\n\n**The Full Solution:**\nStep 1: Time is distance divided by rate, so the travel time is $\\frac{840 \\text{ meters}}{1.4 \\text{ meters per second}}$.\nStep 2: $\\frac{840}{1.4} = 600$ seconds.\nStep 3: Convert to minutes: $\\frac{600}{60} = 10$ minutes. Check: in $10$ minutes, or $600$ seconds, the person walks $600(1.4) = 840$ meters ✓\n\n**Common Mistakes:** Reporting $600$ answers in seconds when the question asks for minutes. Multiplying gives $840 \\times 1.4 = 1{,}176$, which has units of meter-seconds per meter and no meaning here. Dividing in the wrong order gives $\\frac{1.4}{840} \\approx 0.00167$.\n\n**Test Day Takeaway:** Compute the time in the units the rate provides, then convert to the unit the question names. The final unit check catches the most expensive slip on rate problems.",
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
    question: "At a constant speed of $21$ kilometers per hour, how many kilometers does a skier travel in $1$ hour and $20$ minutes?",
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
    explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $20$ minutes is $\\frac{1}{3}$ hour, so the time is $\\frac{4}{3}$ hours and the distance is $21 \\cdot \\frac{4}{3} = 28$ kilometers.\n\n**The Full Solution:**\nStep 1: The rate is given per hour, so the time must be expressed in hours.\nStep 2: $20$ minutes is $\\frac{20}{60} = \\frac{1}{3}$ hour, making the total time $1 + \\frac{1}{3} = \\frac{4}{3}$ hours.\nStep 3: Distance $= 21 \\cdot \\frac{4}{3} = 28$ kilometers. Check: in $1$ hour the skier covers $21$ kilometers and in $20$ minutes another $7$, for $28$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($15.75$): divides by the time instead of multiplying, $21 \\div \\frac{4}{3} = 15.75$.\n* Choice B ($25.2$): writes the time as $1.20$ hours, $21 \\times 1.2$, treating $20$ minutes as $0.20$ hour.\n* Choice D ($42$): rounds the time up to $2$ hours, $21 \\times 2$.\n\n**Test Day Takeaway:** Minutes become hours by dividing by $60$, never by moving a decimal point. $20$ minutes is $\\frac{1}{3}$ hour, not $0.20$ hour.",
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
    question: "A drone leaves a station and flies due east at a constant speed of $32$ kilometers per hour. Half an hour later, a second drone leaves the station and flies due west at $44$ kilometers per hour. How many kilometers apart are the drones $2$ hours after the first drone left?",
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
    explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The first drone flies $32(2) = 64$ kilometers and the second flies $44(1.5) = 66$ kilometers in opposite directions, so they are $64 + 66 = 130$ kilometers apart.\n\n**The Full Solution:**\nStep 1: The first drone flies for the full $2$ hours: $32 \\times 2 = 64$ kilometers east of the station.\nStep 2: The second drone starts a half hour later, so it flies for $2 - 0.5 = 1.5$ hours: $44 \\times 1.5 = 66$ kilometers west of the station.\nStep 3: Opposite directions means the distances add: $64 + 66 = 130$ kilometers. Check: the station lies between them, $64$ kilometers from one and $66$ from the other ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): subtracts the two distances, $66 - 64$, as if the drones flew in the same direction.\n* Choice B ($64$): reports only the first drone's distance, $32 \\times 2$, leaving out the second drone entirely.\n* Choice D ($152$): gives the second drone the full $2$ hours, $32(2) + 44(2)$, ignoring its half-hour later start.\n\n**Test Day Takeaway:** Give each traveler its own time on the clock, then add distances for opposite directions and subtract for the same direction. A staggered start is the trap this question is built on.",
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
    question: "A boat traveled $30$ miles in $2$ hours and then traveled $75$ miles in $3$ hours. What was the boat's average speed, in miles per hour, for the entire trip?",
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
    explanation: "**SAT Pattern: Average Rate**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Total distance is $30 + 75 = 105$ miles and total time is $2 + 3 = 5$ hours, so the average speed is $\\frac{105}{5} = 21$.\n\n**The Full Solution:**\nStep 1: Average speed is total distance divided by total time, not the average of the two speeds.\nStep 2: Total distance $= 30 + 75 = 105$ miles; total time $= 2 + 3 = 5$ hours.\nStep 3: Average speed $= \\frac{105}{5} = 21$ miles per hour. Check: the boat spent more time on the faster leg ($25$) than on the slower leg ($15$), so the average should sit above the midpoint $20$, and $21$ does. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): averages the two leg speeds, $\\frac{15 + 25}{2}$, instead of dividing total distance by total time\n* Choice C ($25$): reports the speed of the second leg only, $\\frac{75}{3}$\n* Choice D ($40$): adds the two leg speeds, $15 + 25$\n\n**Test Day Takeaway:** Average speed is always $\\frac{\\text{total distance}}{\\text{total time}}$. Averaging the two speeds is correct only when the two times are equal.",
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
    question: "A printer printed $1{,}400$ pages in $20$ minutes and then printed $1{,}200$ pages in the next $30$ minutes. What was the printer's average rate, in pages per minute, for the entire $50$ minutes?",
    correctAnswer: "52",
    explanation: "**SAT Pattern: Average Rate**\n\n**The correct answer is $52$.**\n\n**The Fast Way (~20s):** Total pages $= 1{,}400 + 1{,}200 = 2{,}600$ over $20 + 30 = 50$ minutes, so the rate is $\\frac{2{,}600}{50} = 52$.\n\n**The Full Solution:**\nStep 1: An average rate over a whole period is the total output divided by the total time.\nStep 2: Total output $= 1{,}400 + 1{,}200 = 2{,}600$ pages; total time $= 20 + 30 = 50$ minutes.\nStep 3: Average rate $= \\frac{2{,}600}{50} = 52$ pages per minute. Check: $52 \\times 50 = 2{,}600$ ✓\n\n**Common Mistakes:**\n* $55$: averages the two interval rates, $\\frac{70 + 40}{2}$, which over-weights the shorter interval.\n* $1{,}300$: divides the total by the number of intervals, $\\frac{2{,}600}{2}$, instead of by the minutes.\n* $70$: reports only the first interval's rate, $\\frac{1{,}400}{20}$.\n\n**Test Day Takeaway:** When two intervals have different lengths, average the totals, not the rates: add all the output, add all the time, then divide once.",
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
    question: "A cyclist rode at $12$ miles per hour for $3$ hours and then at $18$ miles per hour for $2$ hours. What was the cyclist's average speed, in miles per hour, for the entire ride?",
    choices: [
      { id: "A", text: "$14.4$" },
      // distractor: averages the two speeds, $\frac{12 + 18}{2}$, without weighting them by the time spent at each speed
      { id: "B", text: "$15$" },
      // distractor: divides the total distance, $72$ miles, by $3$ hours, the time of the first part only
      { id: "C", text: "$24$" },
      // distractor: adds the two speeds, $12 + 18$
      { id: "D", text: "$30$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Average Rate**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Distances: $12(3) = 36$ and $18(2) = 36$ miles, a total of $72$ miles in $5$ hours, so $\\frac{72}{5} = 14.4$.\n\n**The Full Solution:**\nStep 1: Turn each rate and time into a distance: $12(3) = 36$ miles and $18(2) = 36$ miles.\nStep 2: Total distance $= 36 + 36 = 72$ miles; total time $= 3 + 2 = 5$ hours.\nStep 3: Average speed $= \\frac{72}{5} = 14.4$ miles per hour. Check: the cyclist spent more time at $12$ miles per hour, so the average must fall below the midpoint $15$, and $14.4$ does ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($15$): averages the two speeds, $\\frac{12 + 18}{2}$, without weighting them by the time spent at each speed.\n* Choice C ($24$): divides the total distance, $72$ miles, by only the $3$ hours of the first part.\n* Choice D ($30$): adds the two speeds, $12 + 18$, which is not an average of anything.\n\n**Test Day Takeaway:** Rate $\\times$ time gives distance. Turn every part of the trip into a distance first, then divide the total distance by the total time.",
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
    question: "Dana drove to a lake at $r$ miles per hour and returned on the same road at $2r$ miles per hour. Her average speed for the round trip was $48$ miles per hour. What is the value of $r$?",
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
    explanation: "**SAT Pattern: Average Rate**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** With one-way distance $d$, total time is $\\frac{d}{r} + \\frac{d}{2r} = \\frac{3d}{2r}$, so the average speed is $\\frac{2d}{3d/(2r)} = \\frac{4r}{3}$. Then $\\frac{4r}{3} = 48$ gives $r = 36$.\n\n**The Full Solution:**\nStep 1: Let $d$ be the one-way distance. The round trip covers $2d$ miles.\nStep 2: The trip to the lake takes $\\frac{d}{r}$ hours and the trip back takes $\\frac{d}{2r}$ hours, so the total time is $\\frac{2d}{2r} + \\frac{d}{2r} = \\frac{3d}{2r}$ hours.\nStep 3: Average speed $= \\frac{2d}{\\frac{3d}{2r}} = \\frac{4r}{3}$, and $d$ cancels. Setting $\\frac{4r}{3} = 48$ gives $r = 36$. Check: at $36$ and $72$ miles per hour over $72$ miles each way, the times are $2$ and $1$ hours, so $\\frac{144}{3} = 48$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($16$): divides $48$ by $3$, treating the average speed as the sum $r + 2r$\n* Choice B ($24$): sets $2r = 48$, using the faster leg's speed as the average speed\n* Choice C ($32$): averages the two speeds, solving $\\frac{r + 2r}{2} = 48$\n\n**Test Day Takeaway:** For equal distances at two speeds, the average speed depends only on the speeds, never on the distance. Introduce $d$, write the two times, and watch it cancel.",
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
    question: "A pump moved $900$ gallons of water in $12$ minutes and then $1{,}500$ gallons in the next $18$ minutes. For these $30$ minutes, what was the pump's average rate, in gallons per minute?",
    correctAnswer: "80",
    explanation: "**SAT Pattern: Average Rate**\n\n**The correct answer is $80$.**\n\n**The Fast Way (~20s):** Total volume $= 900 + 1{,}500 = 2{,}400$ gallons over $30$ minutes, so the rate is $\\frac{2{,}400}{30} = 80$.\n\n**The Full Solution:**\nStep 1: The average pumping rate is the total volume pumped divided by the total time.\nStep 2: Total volume $= 900 + 1{,}500 = 2{,}400$ gallons; total time $= 12 + 18 = 30$ minutes.\nStep 3: Average rate $= \\frac{2{,}400}{30} = 80$ gallons per minute. Check: $80 \\times 30 = 2{,}400$ ✓\n\n**Common Mistakes:**\n* $79.17$: averages the two interval rates, $\\frac{75 + 83.\\overline{3}}{2}$, which ignores that the intervals differ in length.\n* $1{,}200$: divides the total volume by $2$, the number of intervals.\n* $83.33$: reports only the second interval's rate, $\\frac{1{,}500}{18}$.\n\n**Test Day Takeaway:** An average rate is one division at the end: total amount, total time, divide once.",
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
    question: "A train traveled $120$ kilometers at $80$ kilometers per hour. What speed, in kilometers per hour, must the train average over the next $180$ kilometers so that its average speed for all $300$ kilometers is $75$ kilometers per hour?",
    choices: [
      // distractor: solves $\frac{80 + v}{2} = 75$, averaging the two speeds instead of working with times
      { id: "A", text: "$70$" },
      { id: "B", text: "$72$" },
      // distractor: assumes the second part must be covered at the target average speed
      { id: "C", text: "$75$" },
      // distractor: rounds the first part's time to $2$ hours, leaving $2$ hours for the second part: $\frac{180}{2} = 90$
      { id: "D", text: "$90$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Average Rate**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** The whole trip must take $\\frac{300}{75} = 4$ hours. The first part takes $\\frac{120}{80} = 1.5$ hours, leaving $2.5$ hours for $180$ kilometers: $\\frac{180}{2.5} = 72$.\n\n**The Full Solution:**\nStep 1: An average speed of $75$ kilometers per hour over $300$ kilometers means the total time must be $\\frac{300}{75} = 4$ hours.\nStep 2: The first part uses $\\frac{120}{80} = 1.5$ hours, so the second part must take $4 - 1.5 = 2.5$ hours.\nStep 3: The required speed is $\\frac{180}{2.5} = 72$ kilometers per hour. Check: $1.5 + 2.5 = 4$ hours for $300$ kilometers, and $\\frac{300}{4} = 75$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($70$): solves $\\frac{80 + v}{2} = 75$, averaging the two speeds instead of working with times\n* Choice C ($75$): assumes the second part must be covered at the target average speed\n* Choice D ($90$): rounds the first part's time to $2$ hours, leaving $2$ hours for the second part: $\\frac{180}{2} = 90$\n\n**Test Day Takeaway:** Target-average problems are time problems: convert the target average into a total time, subtract the time already used, then divide the remaining distance by the remaining time.",
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
    question: "The table shows the distance Jordan drove and the time it took for each of two parts of a trip. What was Jordan's average speed, in miles per hour, for the entire trip?",
    diagram: { type: "dataTable", params: { headers: ["Part", "Distance (miles)", "Time (minutes)"], rows: [["1", "8", "10"], ["2", "22", "20"]] } },
    choices: [
      // distractor: reports the first part's speed, $8$ miles in $10$ minutes
      { id: "A", text: "$48$" },
      // distractor: averages the speeds of the two parts, $\frac{48 + 66}{2}$, without weighting them by time
      { id: "B", text: "$57$" },
      { id: "C", text: "$60$" },
      // distractor: reports the second part's speed, $22$ miles in $20$ minutes
      { id: "D", text: "$66$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Average Rate**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Total distance $= 8 + 22 = 30$ miles in $10 + 20 = 30$ minutes, which is $0.5$ hour, so the average speed is $\\frac{30}{0.5} = 60$.\n\n**The Full Solution:**\nStep 1: Add across the table: total distance $= 8 + 22 = 30$ miles and total time $= 10 + 20 = 30$ minutes.\nStep 2: Convert the time to hours: $30$ minutes $= \\frac{30}{60} = 0.5$ hour.\nStep 3: Average speed $= \\frac{30 \\text{ miles}}{0.5 \\text{ hour}} = 60$ miles per hour. Check: at $60$ miles per hour, $30$ miles takes exactly half an hour. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($48$): reports the first part's speed, $8$ miles in $10$ minutes\n* Choice B ($57$): averages the speeds of the two parts, $\\frac{48 + 66}{2}$, without weighting them by time\n* Choice D ($66$): reports the second part's speed, $22$ miles in $20$ minutes\n\n**Test Day Takeaway:** Convert to the requested unit only once, at the end. Add the raw distances and times first, then divide and convert.",
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
    question: "$B = 4{,}500 + 180t$\nThe given equation models the balance $B$, in dollars, of a savings account that earns simple interest, $t$ years after the account was opened. What is the best interpretation of $180$ in this context?",
    choices: [
      // distractor: confuses the coefficient of t with the constant term 4,500, which is the balance when t = 0
      { id: "A", text: "The balance, in dollars, when the account was opened" },
      { id: "B", text: "The interest, in dollars, the account earns each year" },
      // distractor: mistakes the yearly interest in dollars for the interest rate; the rate is 180/4,500 = 4%
      { id: "C", text: "The annual interest rate, as a percent" },
      // distractor: describes B, the output of the whole equation, rather than the coefficient 180
      { id: "D", text: "The balance, in dollars, after $t$ years" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Simple Interest**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $180$ is the coefficient of $t$, so the balance grows by $\\$180$ each year: that is the interest the account earns per year.\n\n**The Full Solution:**\nStep 1: At $t = 0$, $B = 4{,}500$, so $4{,}500$ is the balance when the account was opened.\nStep 2: Each time $t$ increases by $1$, $B$ increases by $180$, so the balance grows by $\\$180$ per year.\nStep 3: Under simple interest the balance grows only by the interest earned, so $180$ is the interest, in dollars, the account earns each year. Check: $t = 1$ gives $4{,}680$ and $t = 2$ gives $4{,}860$; each year adds $180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (opening balance): the opening balance is the constant term, $4{,}500$, the value of $B$ when $t = 0$.\n* Choice C (interest rate): $180$ is a number of dollars, not a percent. The rate is $\\frac{180}{4{,}500} = 0.04$, or $4\\%$.\n* Choice D (balance after $t$ years): the balance after $t$ years is $B$ itself, $4{,}500 + 180t$, not the coefficient $180$.\n\n**Test Day Takeaway:** In a linear model, the constant term is the starting value and the coefficient of the time variable is the change per unit of time.",
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
    question: "Ana borrowed $\\$6{,}000$ at a simple annual interest rate of $5\\%$. If she makes no payments, how much will she owe, in dollars, at the end of $3$ years?",
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
    question: "An account earns simple interest at an annual rate of $4.25\\%$. After $3$ years, the account has earned $\\$1{,}530$ in interest. How much money, in dollars, was deposited in the account?",
    correctAnswer: "12000",
    explanation: "**SAT Pattern: Simple Interest**\n\n**The correct answer is $12{,}000$.**\n\n**The Fast Way (~20s):** Three years at $4.25\\%$ pay $12.75\\%$ of the deposit, so the deposit is $\\frac{1{,}530}{0.1275} = 12{,}000$ dollars.\n\n**The Full Solution:**\nStep 1: Write the simple-interest relationship. Interest $=$ deposit $\\times$ rate $\\times$ years, so $1{,}530 = P(0.0425)(3)$.\nStep 2: Combine the rate and the time. $0.0425 \\times 3 = 0.1275$, so $0.1275P = 1{,}530$.\nStep 3: Solve and check. $P = \\frac{1{,}530}{0.1275} = 12{,}000$ dollars. Forward: $4.25\\%$ of $12{,}000$ is $510$ per year, and $3 \\times 510 = 1{,}530$. ✓\n\n**Common Mistakes:**\n* Dividing by $0.0425$ alone gives $36{,}000$, which forgets that the interest accumulated over $3$ years.\n* Multiplying $1{,}530$ by $3$ gives $4{,}590$, which triples the interest instead of dividing by the three years.\n* Treating $4.25$ as a decimal instead of a percent gives $\\frac{1{,}530}{12.75} = 120$, off by a factor of $100$.\n\n**Test Day Takeaway:** For simple interest, rate and time multiply into a single factor. Divide the total interest by that factor to recover the principal.",
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
    question: "A deposit of $P$ dollars earns simple interest at an annual rate of $r$, expressed as a decimal. Which expression gives the balance after $t$ years?",
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
    question: "An account opened with $\\$2{,}500$ earns $4\\%$ simple annual interest. After $t$ years, its balance is $\\$2{,}800$. What is the value of $t$?",
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
    question: "Omar borrowed $\\$18{,}000$ at a simple annual interest rate of $6\\%$. He has made no payments, and he now owes a total of $\\$19{,}890$. For how many months has Omar had the loan?",
    correctAnswer: "21",
    explanation: "**SAT Pattern: Simple Interest**\n\n**The correct answer is $21$.**\n\n**The Fast Way (~30s):** The interest is $\\$1{,}890$, one year costs $\\$1{,}080$, so the loan has run $1.75$ years, which is $21$ months.\n\n**The Full Solution:**\nStep 1: Isolate the interest. Total owed minus principal is $19{,}890 - 18{,}000 = 1{,}890$ dollars of interest.\nStep 2: Find the interest for one year. $6\\%$ of $18{,}000$ is $0.06 \\times 18{,}000 = 1{,}080$ dollars per year.\nStep 3: Convert to months. $\\frac{1{,}890}{1{,}080} = 1.75$ years, and $1.75 \\times 12 = 21$ months. Check: $21$ months of interest is $\\frac{21}{12} \\times 1{,}080 = 1{,}890$. ✓\n\n**Common Mistakes:**\n* Answering $1.75$ gives the time in YEARS; the question asks for months.\n* Dividing the total owed rather than the interest, $\\frac{19{,}890}{1{,}080} = 18.4\\overline{1}$, forgets to subtract the principal first.\n* Using $6\\%$ of the total owed, $1{,}193.40$ per year, applies the rate to the balance instead of the amount borrowed.\n\n**Test Day Takeaway:** Subtract the principal first, divide by ONE year of interest, and read the units the question asks for before you answer.",
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
    question: "Accounts A and B each start with $\\$4{,}000$. Account A earns $8\\%$ simple interest per year, and account B earns $8\\%$ interest compounded annually. To the nearest dollar, how much greater is account B's balance than account A's balance after $5$ years?",
    choices: [
      { id: "A", text: "$277$" },
      // distractor: reports one year's interest on $\$4{,}000$
      { id: "B", text: "$320$" },
      // distractor: reports the simple interest earned over the $5$ years
      { id: "C", text: "$1{,}600$" },
      // distractor: reports the interest account B earns, not the difference between the two balances
      { id: "D", text: "$1{,}877$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Simple Interest**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** Account A: $4000 + 4000(0.08)(5) = 5{,}600$. Account B: $4000(1.08)^5 \\approx 5{,}877.31$. The difference is about $\\$277$.\n\n**The Full Solution:**\nStep 1: Account A's balance is $4000 + 4000(0.08)(5) = 4000 + 1600 = 5{,}600$ dollars.\nStep 2: Account B's balance is $4000(1.08)^5 \\approx 4000(1.469328) \\approx 5{,}877.31$ dollars.\nStep 3: The difference is $5877.31 - 5600 = 277.31$, which is $\\$277$ to the nearest dollar. Check: compounding earns $\\$1{,}877$ of interest against $\\$1{,}600$ of simple interest, and $1877 - 1600 = 277$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($320$): reports one year's interest on $\\$4{,}000$\n* Choice C ($1{,}600$): reports the simple interest earned over the $5$ years\n* Choice D ($1{,}877$): reports the interest account B earns, not the difference between the two balances\n\n**Test Day Takeaway:** Compound interest earns interest on interest, so it always exceeds simple interest at the same rate; the question asks for the gap, not for either balance.",
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
    question: "$A = P(1 + rt)$\nThe given equation gives the balance $A$ of an account after $t$ years, where $P$ is the amount deposited and $r$ is the annual simple interest rate. Which equation correctly expresses $r$ in terms of $A$, $P$, and $t$?",
    choices: [
      // distractor: subtracts P but never divides by P, the factor that multiplies rt after distributing
      { id: "A", text: "$r = \\frac{A - P}{t}$" },
      { id: "B", text: "$r = \\frac{A - P}{Pt}$" },
      // distractor: treats the equation as A = Pt(1 + r), dividing both sides by Pt and then subtracting 1
      { id: "C", text: "$r = \\frac{A}{Pt} - 1$" },
      // distractor: multiplies by t in the last step instead of dividing by t
      { id: "D", text: "$r = \\frac{t(A - P)}{P}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Simple Interest**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Distribute to get $A = P + Prt$, so $A - P = Prt$ and $r = \\frac{A - P}{Pt}$.\n\n**The Full Solution:**\nStep 1: Distribute $P$: $A = P + Prt$.\nStep 2: Subtract $P$ from both sides: $A - P = Prt$.\nStep 3: Divide both sides by $Pt$: $r = \\frac{A - P}{Pt}$. Check: with $P = 1{,}000$, $r = 0.05$, and $t = 2$, the balance is $A = 1{,}000(1.1) = 1{,}100$, and $\\frac{1{,}100 - 1{,}000}{1{,}000(2)} = 0.05$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($r = \\frac{A - P}{t}$): stops after dividing by $t$. The term $Prt$ also carries a factor of $P$, so the test values give $\\frac{100}{2} = 50$, not $0.05$.\n* Choice C ($r = \\frac{A}{Pt} - 1$): divides by $Pt$ as though the equation were $A = Pt(1 + r)$. The test values give $\\frac{1{,}100}{2{,}000} - 1 = -0.45$.\n* Choice D ($r = \\frac{t(A - P)}{P}$): multiplies by $t$ instead of dividing by it. The test values give $\\frac{2(100)}{1{,}000} = 0.2$.\n\n**Test Day Takeaway:** To solve a formula for one variable, distribute first, move every term without that variable to the other side, then divide by its coefficient. Test a choice with easy numbers when in doubt.",
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
    question: "The dot plot shows the number of birds Sam counted at a bird feeder on each of $9$ days. On a $10$th day, Sam counted $23$ birds. What is the mean number of birds Sam counted per day for all $10$ days?",
    diagram: { type: "dotPlot", params: { data: [{ value: 8, count: 1 }, { value: 11, count: 1 }, { value: 12, count: 1 }, { value: 13, count: 1 }, { value: 14, count: 1 }, { value: 15, count: 1 }, { value: 17, count: 1 }, { value: 18, count: 2 }], xMin: 7, xMax: 19, xLabel: "Number of birds" } },
    choices: [
      // distractor: reports the mean of the first $9$ days and assumes one more value cannot change it
      { id: "A", text: "$14$" },
      // distractor: reports the median of the $10$ values, $\frac{14 + 15}{2}$, instead of the mean
      { id: "B", text: "$14.5$" },
      { id: "C", text: "$14.9$" },
      // distractor: averages the old mean with the new value, $\frac{14 + 23}{2}$, ignoring how many days each represents
      { id: "D", text: "$18.5$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Mean from List**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The $9$ dots sum to $126$, so adding $23$ gives $149$ over $10$ days: $\\frac{149}{10} = 14.9$.\n\n**The Full Solution:**\nStep 1: Read the dots: $8$, $11$, $12$, $13$, $14$, $15$, $17$, $18$, $18$. Their sum is $126$.\nStep 2: Adding the $10$th day gives a new total of $126 + 23 = 149$ birds over $10$ days.\nStep 3: The new mean is $\\frac{149}{10} = 14.9$. Check: the first $9$ days average $\\frac{126}{9} = 14$, and one day above that average pulls the mean up slightly, to $14.9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): reports the mean of the first $9$ days and assumes one more value cannot change it\n* Choice B ($14.5$): reports the median of the $10$ values, $\\frac{14 + 15}{2}$, instead of the mean\n* Choice D ($18.5$): averages the old mean with the new value, $\\frac{14 + 23}{2}$, ignoring how many days each represents\n\n**Test Day Takeaway:** To add a value to a data set, go back to the sum: recover it from mean $\\times$ count, add the new value, then divide by the new count.",
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
    question: "The table shows the number of students in each of two classes and the mean score of each class on a quiz. What is the mean quiz score of all $20$ students?",
    diagram: { type: "dataTable", params: { headers: ["Class", "Number of students", "Mean score"], rows: [["A", "12", "6.5"], ["B", "8", "9.0"]] } },
    choices: [
      { id: "A", text: "$7.5$" },
      // distractor: averages the two class means, $\frac{6.5 + 9}{2}$, ignoring that the classes have different sizes
      { id: "B", text: "$7.75$" },
      // distractor: reports the larger class mean
      { id: "C", text: "$9$" },
      // distractor: adds the two class means
      { id: "D", text: "$15.5$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Mean from List**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Total points $= 12(6.5) + 8(9) = 78 + 72 = 150$ for $20$ students, so the mean is $\\frac{150}{20} = 7.5$.\n\n**The Full Solution:**\nStep 1: Recover each class's total from mean $\\times$ count: class A scored $12(6.5) = 78$ points and class B scored $8(9) = 72$ points.\nStep 2: The combined total is $78 + 72 = 150$ points for $12 + 8 = 20$ students.\nStep 3: The combined mean is $\\frac{150}{20} = 7.5$. Check: the larger class has the smaller mean, so the combined mean must sit below the midpoint $7.75$, and $7.5$ does ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($7.75$): averages the two class means, $\\frac{6.5 + 9}{2}$, ignoring that class A has more students.\n* Choice C ($9$): reports the mean of class B alone.\n* Choice D ($15.5$): adds the two class means, $6.5 + 9$, which is not a mean of anything.\n\n**Test Day Takeaway:** Combining two groups means combining totals, not means. The plain average of two means is right only when the groups are the same size.",
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
    question: "Of the students at a school, $38\\%$ walk, $17\\%$ bike, and the rest take a bus. What percent take a bus?",
    choices: [
      { id: "A", text: "$45\\%$" },
      // distractor: reports $38 + 17$, the combined percent of students who walk or bike
      { id: "B", text: "$55\\%$" },
      // distractor: subtracts only the $38\%$ who walk from $100\%$, ignoring the students who bike
      { id: "C", text: "$62\\%$" },
      // distractor: subtracts only the $17\%$ who bike from $100\%$, ignoring the students who walk
      { id: "D", text: "$83\\%$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Percent Complement**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The three groups make up all the students, so the bus riders are $100\\% - 38\\% - 17\\% = 45\\%$.\n\n**The Full Solution:**\nStep 1: Each student walks, bikes, or takes a bus, so the three percents total $100\\%$.\nStep 2: Walkers and bikers together make up $38\\% + 17\\% = 55\\%$ of the students.\nStep 3: The rest, $100\\% - 55\\% = 45\\%$, take a bus. Check: $38 + 17 + 45 = 100$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($55\\%$): reports $38\\% + 17\\%$, the students who walk or bike, which is the part the question does not ask for.\n* Choice C ($62\\%$): subtracts only the $38\\%$ who walk from $100\\%$, so the bikers are still counted as bus riders.\n* Choice D ($83\\%$): subtracts only the $17\\%$ who bike from $100\\%$, so the walkers are still counted as bus riders.\n\n**Test Day Takeaway:** When groups are separate and cover everyone, their percents total $100\\%$; subtract the sum of all the known parts, not just one of them.",
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
    question: "Of the tickets sold for a concert, $\\dfrac{9}{25}$ were sold online and $p\\%$ were not. What is the value of $p$?",
    choices: [
      // distractor: subtracts the numerator from the denominator, $25 - 9$, and reports that as a percent
      { id: "A", text: "$16$" },
      // distractor: reports the denominator as the percent
      { id: "B", text: "$25$" },
      // distractor: finds the percent of tickets that were sold online
      { id: "C", text: "$36$" },
      { id: "D", text: "$64$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Percent Complement**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** $\\frac{9}{25} = \\frac{36}{100} = 36\\%$ were sold online, so $100\\% - 36\\% = 64\\%$ were not, and $p = 64$.\n\n**The Full Solution:**\nStep 1: Convert the fraction to a percent by scaling the denominator to $100$: $\\frac{9}{25} = \\frac{9 \\cdot 4}{25 \\cdot 4} = \\frac{36}{100} = 36\\%$.\nStep 2: Every ticket was either sold online or not, so the two percents total $100\\%$.\nStep 3: The tickets not sold online make up $100\\% - 36\\% = 64\\%$, so $p = 64$. Check: $\\frac{16}{25} = \\frac{64}{100}$, and $9 + 16 = 25$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($16$): subtracts inside the fraction, $25 - 9 = 16$, and reports that count as a percent. Sixteen of the $25$ parts is $64\\%$, not $16\\%$.\n* Choice B ($25$): reports the denominator of the fraction as the percent.\n* Choice C ($36$): converts $\\frac{9}{25}$ correctly but stops there; $36\\%$ is the share sold online, not the share that was not.\n\n**Test Day Takeaway:** Turn the fraction into a percent first, then take the complement. Before you answer, reread which group the question asks about.",
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
    question: "The scatterplot shows the age, in days, and the mass, in grams, of each of $8$ seedlings. An equation of the line of best fit is $y = 1.4x + 3$, where $x$ is the age and $y$ is the mass. Based on the line of best fit, what is the predicted mass, in grams, of a seedling that is $20$ days old?",
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
    explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Substitute $x = 20$: $y = 1.4(20) + 3 = 28 + 3 = 31$.\n\n**The Full Solution:**\nStep 1: The line of best fit predicts $y$ from $x$, where $x$ is the age in days and $y$ is the predicted mass in grams.\nStep 2: Substitute $x = 20$: $y = 1.4(20) + 3$.\nStep 3: $1.4(20) = 28$, so $y = 28 + 3 = 31$ grams. Check: on the plot, the line at $x = 20$ sits between the points near $18$ and $22$ days, whose masses are $29$ and $32$ grams. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($23$): evaluates $x + 3$, dropping the slope entirely\n* Choice B ($28$): evaluates $1.4x$ and forgets to add the intercept\n* Choice D ($43$): rounds the slope $1.4$ up to $2$ before substituting\n\n**Test Day Takeaway:** A prediction from a line of best fit is a substitution: put the given $x$ into the equation and evaluate both terms.",
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
    question: "The scatterplot shows the number of people enrolled in an online course at the end of each of its first $9$ weeks. An equation of the line of best fit is $y = 240 - 10x$, where $x$ is the week number. Based on the line of best fit, how many people are predicted to be enrolled at the end of week $12$?",
    diagram: { type: "scatterplot", params: { points: [[1, 234], [2, 216], [3, 213], [4, 197], [5, 193], [6, 176], [7, 172], [8, 158], [9, 148]], xMin: 0, xMax: 10, yMin: 0, yMax: 260, xGridStep: 1, xLabelStep: 2, yGridStep: 20, yLabelStep: 40, xLabel: "Week", yLabel: "People enrolled", bestFitLine: { slope: -10, intercept: 240 } } },
    choices: [
      { id: "A", text: "$120$" },
      // distractor: subtracts the week number instead of 10 times it: 240 - 12 = 228
      { id: "B", text: "$228$" },
      // distractor: reports the week-0 value 240, the intercept, without advancing 12 weeks
      { id: "C", text: "$240$" },
      // distractor: ignores the negative sign of the slope: 240 + 10(12) = 360
      { id: "D", text: "$360$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Substitute $x = 12$ into $y = 240 - 10x$: $240 - 120 = 120$ people.\n\n**The Full Solution:**\nStep 1: Read the model. The line of best fit is $y = 240 - 10x$, so enrollment starts near $240$ and falls about $10$ people per week.\nStep 2: Substitute the target week. $y = 240 - 10(12) = 240 - 120 = 120$ people.\nStep 3: Check the trend. Week $9$ predicts $150$, and three more weeks at $-10$ each gives $150 - 30 = 120$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($228$): subtracts the week number itself: $240 - 12 = 228$, dropping the factor of $10$.\n* Choice C ($240$): is the value the model gives at week $0$, before any weeks pass.\n* Choice D ($360$): adds $10x$ instead of subtracting it: $240 + 10(12) = 360$. Enrollment is falling, so the prediction must be below $240$.\n\n**Test Day Takeaway:** Week $12$ lies past the plotted data, so the equation is the only tool; substitute and let the slope do the work.",
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
    question: "A bag contains $8$ yellow marbles and $12$ green marbles. What is the probability of selecting a yellow marble at random?",
    choices: [
      { id: "A", text: "$\\frac{2}{5}$" },
      // distractor: assumes the two colors are equally likely instead of counting the marbles
      { id: "B", text: "$\\frac{1}{2}$" },
      // distractor: gives the probability of selecting a green marble
      { id: "C", text: "$\\frac{3}{5}$" },
      // distractor: uses $12$, the number of green marbles, as the denominator instead of the total $20$
      { id: "D", text: "$\\frac{2}{3}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** There are $8$ yellow marbles out of $8 + 12 = 20$, so the probability is $\\frac{8}{20} = \\frac{2}{5}$.\n\n**The Full Solution:**\nStep 1: A probability is the number of favorable outcomes divided by the total number of equally likely outcomes.\nStep 2: The bag holds $8 + 12 = 20$ marbles, and $8$ of them are yellow, so the probability is $\\frac{8}{20}$.\nStep 3: Simplify by dividing numerator and denominator by $4$: $\\frac{8}{20} = \\frac{2}{5}$. Check: the green probability is $\\frac{12}{20} = \\frac{3}{5}$, and $\\frac{2}{5} + \\frac{3}{5} = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{1}{2}$): treats yellow and green as equally likely because there are two colors, ignoring that the bag holds more green marbles.\n* Choice C ($\\frac{3}{5}$): is $\\frac{12}{20}$, the probability of selecting a green marble.\n* Choice D ($\\frac{2}{3}$): divides by the $12$ green marbles instead of by all $20$ marbles.\n\n**Test Day Takeaway:** The denominator of a basic probability is always the whole group, never the leftover group.",
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
    question: "A spinner has $12$ equal sections numbered $1$ through $12$. What is the probability that one spin lands on a multiple of $4$?",
    choices: [
      // distractor: counts only one favorable section
      { id: "A", text: "$\\frac{1}{12}$" },
      // distractor: counts only $8$ and $12$, omitting $4$ itself
      { id: "B", text: "$\\frac{1}{6}$" },
      { id: "C", text: "$\\frac{1}{4}$" },
      // distractor: counts the multiples of $3$ — $3$, $6$, $9$, and $12$ — instead of the multiples of $4$
      { id: "D", text: "$\\frac{1}{3}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The multiples of $4$ from $1$ to $12$ are $4$, $8$, and $12$, so the probability is $\\frac{3}{12} = \\frac{1}{4}$.\n\n**The Full Solution:**\nStep 1: The sections are equal, so all $12$ outcomes are equally likely.\nStep 2: List the favorable outcomes: $4$, $8$, and $12$ are the multiples of $4$ in this range, so there are $3$ of them.\nStep 3: The probability is $\\frac{3}{12} = \\frac{1}{4}$. Check: $12 \\div 4 = 3$, confirming that exactly $3$ of the first $12$ integers are multiples of $4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{12}$): counts only one favorable section\n* Choice B ($\\frac{1}{6}$): counts only $8$ and $12$, omitting $4$ itself\n* Choice D ($\\frac{1}{3}$): counts the multiples of $3$ — $3$, $6$, $9$, and $12$ — instead of the multiples of $4$\n\n**Test Day Takeaway:** Write out the favorable values before counting them; a number is a multiple of itself, so do not skip the first one.",
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
    question: "The table shows the number of pies a bakery sold last week, by flavor and size. One of these pies will be selected at random. What is the probability of selecting a small apple pie?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Small", "Large", "Total"], rows: [["Apple", "54", "66", "120"], ["Cherry", "26", "54", "80"], ["Total", "80", "120", "200"]] } },
    choices: [
      { id: "A", text: "$\\frac{27}{100}$" },
      // distractor: uses all small pies over the grand total, $\frac{80}{200}$, ignoring the flavor
      { id: "B", text: "$\\frac{2}{5}$" },
      // distractor: uses only the apple pies as the denominator, $\frac{54}{120}$, instead of all $200$ pies
      { id: "C", text: "$\\frac{9}{20}$" },
      // distractor: uses only the small pies as the denominator, $\frac{54}{80}$, instead of all $200$ pies
      { id: "D", text: "$\\frac{27}{40}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The small apple cell is $54$ and the table holds $200$ pies, so the probability is $\\frac{54}{200} = \\frac{27}{100}$.\n\n**The Full Solution:**\nStep 1: Find the favorable outcomes: the cell in the apple row and the small column shows $54$ pies.\nStep 2: Find the total: the pie is selected from all $200$ pies, the grand total of the table.\nStep 3: Divide and simplify: $\\frac{54}{200} = \\frac{27}{100}$. Check: $0.27(200) = 54$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{2}{5}$): uses $\\frac{80}{200}$, the probability of selecting any small pie, which ignores the apple condition.\n* Choice C ($\\frac{9}{20}$): uses $\\frac{54}{120}$, the probability that a pie is small given that it is apple. The question does not restrict the selection to apple pies.\n* Choice D ($\\frac{27}{40}$): uses $\\frac{54}{80}$, the probability that a pie is apple given that it is small.\n\n**Test Day Takeaway:** In a two-way table, a selection from all the items puts the grand total in the denominator; a row or column total belongs there only when the question says 'given.'",
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
    question: "A drawer contains $12$ black socks, $10$ white socks, and $8$ gray socks. One sock will be selected at random. What is the probability of selecting a white sock?",
    choices: [
      { id: "A", text: "$\\frac{1}{3}$" },
      // distractor: gives the probability of selecting a black sock
      { id: "B", text: "$\\frac{2}{5}$" },
      // distractor: divides by the $20$ socks that are not white instead of by all $30$ socks
      { id: "C", text: "$\\frac{1}{2}$" },
      // distractor: gives the probability of selecting a sock that is not white
      { id: "D", text: "$\\frac{2}{3}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $10$ of the $12 + 10 + 8 = 30$ socks are white, so the probability is $\\frac{10}{30} = \\frac{1}{3}$.\n\n**The Full Solution:**\nStep 1: Count all the socks: $12 + 10 + 8 = 30$.\nStep 2: The favorable outcomes are the $10$ white socks, so the probability is $\\frac{10}{30}$.\nStep 3: Simplify: $\\frac{10}{30} = \\frac{1}{3}$. Check: $\\frac{12}{30} + \\frac{10}{30} + \\frac{8}{30} = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{2}{5}$): is $\\frac{12}{30}$, the probability of selecting a black sock.\n* Choice C ($\\frac{1}{2}$): is $\\frac{10}{20}$: it compares white socks with the other socks instead of with all $30$ socks.\n* Choice D ($\\frac{2}{3}$): is $\\frac{20}{30}$, the probability of selecting a sock that is not white.\n\n**Test Day Takeaway:** Add every category to get the denominator, including the ones the question does not mention.",
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
    question: "The table shows the results of a swimming test taken by $45$ students. One of these students will be selected at random. What is the probability of selecting a student who did not pass the test?",
    diagram: { type: "dataTable", params: { headers: ["Grade", "Passed", "Did not pass"], rows: [["9", "10", "14"], ["10", "8", "13"]] } },
    choices: [
      // distractor: gives the probability of selecting a student who passed, $\frac{18}{45}$
      { id: "A", text: "$\\frac{2}{5}$" },
      // distractor: uses only the grade 9 row, $\frac{14}{24}$, instead of all $45$ students
      { id: "B", text: "$\\frac{7}{12}$" },
      { id: "C", text: "$\\frac{3}{5}$" },
      // distractor: divides the number who passed by the number who did not, $\frac{18}{27}$, instead of dividing by the total
      { id: "D", text: "$\\frac{2}{3}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $14 + 13 = 27$ of the $45$ students did not pass, so the probability is $\\frac{27}{45} = \\frac{3}{5}$.\n\n**The Full Solution:**\nStep 1: Add the 'Did not pass' column: $14 + 13 = 27$ students.\nStep 2: The student is selected from all $45$ students, so the probability is $\\frac{27}{45}$.\nStep 3: Divide numerator and denominator by $9$: $\\frac{27}{45} = \\frac{3}{5}$. Check: $10 + 8 = 18$ students passed, and $\\frac{18}{45} + \\frac{27}{45} = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{2}{5}$): is $\\frac{18}{45}$, the probability of selecting a student who passed.\n* Choice B ($\\frac{7}{12}$): is $\\frac{14}{24}$, which uses only the grade 9 students.\n* Choice D ($\\frac{2}{3}$): is $\\frac{18}{27}$, a ratio of passed to not passed rather than a probability out of all $45$ students.\n\n**Test Day Takeaway:** When a table splits a group into rows, add down the column you need and divide by the whole group, not by one row.",
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
    question: "Of the $80$ students in a club, $46$ play soccer, $38$ play basketball, and $14$ play both. A student from the club will be selected at random. What is the probability of selecting a student who plays exactly one of these sports?",
    choices: [
      // distractor: gives the probability that the student plays neither sport
      { id: "A", text: "$\\frac{1}{8}$" },
      // distractor: gives the probability that the student plays both sports
      { id: "B", text: "$\\frac{7}{40}$" },
      { id: "C", text: "$\\frac{7}{10}$" },
      // distractor: gives the probability that the student plays at least one of the sports, which still includes the 14 who play both
      { id: "D", text: "$\\frac{7}{8}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Basic Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Soccer only: $46 - 14 = 32$. Basketball only: $38 - 14 = 24$. Exactly one sport: $32 + 24 = 56$, so the probability is $\\frac{56}{80} = \\frac{7}{10}$.\n\n**The Full Solution:**\nStep 1: The $46$ soccer players include the $14$ who play both, so $46 - 14 = 32$ play only soccer.\nStep 2: Likewise, $38 - 14 = 24$ play only basketball, so $32 + 24 = 56$ students play exactly one sport.\nStep 3: The probability is $\\frac{56}{80} = \\frac{7}{10}$. Check: $56$ play exactly one sport, $14$ play both, and $80 - 70 = 10$ play neither, for a total of $56 + 14 + 10 = 80$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{8}$): is $\\frac{10}{80}$, the probability that the student plays neither sport.\n* Choice B ($\\frac{7}{40}$): is $\\frac{14}{80}$, the probability that the student plays both sports.\n* Choice D ($\\frac{7}{8}$): is $\\frac{46 + 38 - 14}{80} = \\frac{70}{80}$, the probability of playing at least one sport. That count still includes the $14$ students who play both.\n\n**Test Day Takeaway:** With overlapping groups, split the counts into 'only' pieces and 'both' before counting; 'exactly one' and 'at least one' differ by the overlap.",
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
    question: "In a survey of $250$ adults, $40\\%$ own a bicycle, and $30\\%$ of the bicycle owners ride it to work. How many of the adults ride a bicycle to work?",
    choices: [
      { id: "A", text: "$30$" },
      // distractor: counts the bicycle owners who do not ride to work, $70\%$ of $100$
      { id: "B", text: "$70$" },
      // distractor: applies $30\%$ to all $250$ adults instead of to the bicycle owners
      { id: "C", text: "$75$" },
      // distractor: stops after the first step and reports the number of bicycle owners
      { id: "D", text: "$100$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $0.40(250) = 100$ bicycle owners, and $0.30(100) = 30$ of them ride to work.\n\n**The Full Solution:**\nStep 1: Find the size of the subgroup: $40\\%$ of $250$ is $0.40(250) = 100$ bicycle owners.\nStep 2: The second percent applies to that subgroup, not to everyone surveyed: $30\\%$ of $100$ is $0.30(100) = 30$.\nStep 3: So $30$ of the adults surveyed ride a bicycle to work. Check: $0.40(0.30) = 0.12$, and $0.12(250) = 30$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($70$): counts the bicycle owners who do not ride to work, $0.70(100) = 70$.\n* Choice C ($75$): applies $30\\%$ to all $250$ adults, $0.30(250) = 75$, but the $30\\%$ describes only the bicycle owners.\n* Choice D ($100$): stops after the first step and reports the number of bicycle owners.\n\n**Test Day Takeaway:** A percent of a percent applies to the smaller group. Compute the subgroup first, then apply the second percent to it.",
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
    question: "Of the books in a library, $25\\%$ are novels, and $60\\%$ of the novels are paperbacks. What percent of the books are paperback novels?",
    choices: [
      { id: "A", text: "$15\\%$" },
      // distractor: reports the percent of the books that are novels
      { id: "B", text: "$25\\%$" },
      // distractor: subtracts the two given percents, $60 - 25$
      { id: "C", text: "$35\\%$" },
      // distractor: reports the percent of the novels that are paperbacks, which is a percent of the subgroup rather than of all the books
      { id: "D", text: "$60\\%$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Multiply the two rates: $0.25(0.60) = 0.15$, which is $15\\%$.\n\n**The Full Solution:**\nStep 1: Suppose the library has $100$ books. Then $25$ of them are novels.\nStep 2: $60\\%$ of those $25$ novels are paperbacks: $0.60(25) = 15$ books.\nStep 3: Those $15$ books are $15\\%$ of the $100$ books. Check: $0.25 \\times 0.60 = 0.15 = 15\\%$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($25\\%$): reports the percent of the books that are novels, before the paperback condition is applied.\n* Choice C ($35\\%$): subtracts the two given percents, $60 - 25$, which describes no group of books.\n* Choice D ($60\\%$): is the percent of the novels that are paperbacks, a percent of the smaller group rather than of all the books.\n\n**Test Day Takeaway:** To turn a percent of a percent into a percent of the whole, multiply the two decimals; adding or subtracting them describes nothing.",
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
    question: "Of $1{,}200$ students, $30\\%$ are in the band, and $15\\%$ of the band members play trumpet. How many band members play trumpet?",
    choices: [
      { id: "A", text: "$54$" },
      // distractor: applies $15\%$ to all $1{,}200$ students instead of to the band members
      { id: "B", text: "$180$" },
      // distractor: counts the band members who do not play trumpet, $85\%$ of $360$
      { id: "C", text: "$306$" },
      // distractor: reports the number of band members and stops
      { id: "D", text: "$360$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $0.30(1{,}200) = 360$ band members, and $0.15(360) = 54$ of them play trumpet.\n\n**The Full Solution:**\nStep 1: The band has $0.30(1{,}200) = 360$ members.\nStep 2: The second percent describes only those $360$ students: $0.15(360) = 54$.\nStep 3: So $54$ band members play trumpet. Check: $0.30(0.15) = 0.045$, and $0.045(1{,}200) = 54$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($180$): applies $15\\%$ to all $1{,}200$ students, $0.15(1{,}200) = 180$, but the $15\\%$ describes only the band.\n* Choice C ($306$): counts the band members who do not play trumpet, $0.85(360) = 306$.\n* Choice D ($360$): reports the number of band members and stops before applying the second percent.\n\n**Test Day Takeaway:** Track which group each percent describes. The second percent in a chain almost never applies to the original total.",
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
    question: "Of the $850$ people at a conference, $60\\%$ registered early. Of the people who registered early, $x\\%$ attended the opening session. A total of $357$ people who registered early attended the opening session. What is the value of $x$?",
    choices: [
      // distractor: finds the percent of early registrants who did not attend, $\frac{510 - 357}{510} = 0.30$
      { id: "A", text: "$30$" },
      // distractor: reports $100 - 60$, the percent of people who did not register early
      { id: "B", text: "$40$" },
      // distractor: divides $357$ by all $850$ people instead of by the $510$ early registrants
      { id: "C", text: "$42$" },
      { id: "D", text: "$70$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Early registrants: $0.60(850) = 510$. Then $\\frac{357}{510} = 0.70$, so $x = 70$.\n\n**The Full Solution:**\nStep 1: Find the size of the subgroup: $0.60(850) = 510$ people registered early.\nStep 2: The $357$ people are part of that subgroup, so $\\frac{x}{100} = \\frac{357}{510}$.\nStep 3: $\\frac{357}{510} = 0.70$, so $x = 70$. Check: $0.70(510) = 357$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($30$): divides $510 - 357 = 153$ by $510$, which is the percent of early registrants who did not attend the opening session.\n* Choice B ($40$): reports $100 - 60$, the percent of people at the conference who did not register early.\n* Choice C ($42$): divides $357$ by all $850$ people. That is the percent of everyone at the conference, not the percent of the early registrants.\n\n**Test Day Takeaway:** \"Of the people who registered early\" names the denominator. Find that subgroup's size first, then divide.",
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
    question: "A survey was sent to $1{,}500$ households, and $72\\%$ of the households responded. Of the households that responded, $25\\%$ answered every question. How many households answered every question?",
    choices: [
      { id: "A", text: "$270$" },
      // distractor: takes $25\%$ of all $1{,}500$ households instead of $25\%$ of the households that responded
      { id: "B", text: "$375$" },
      // distractor: takes $75\%$ of the $1{,}080$ households that responded, the households that did not answer every question
      { id: "C", text: "$810$" },
      // distractor: stops after finding the $1{,}080$ households that responded
      { id: "D", text: "$1{,}080$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** $0.72(1{,}500) = 1{,}080$ responded, and $0.25(1{,}080) = 270$.\n\n**The Full Solution:**\nStep 1: Find the households that responded: $0.72(1{,}500) = 1{,}080$.\nStep 2: Take $25\\%$ of that subgroup: $0.25(1{,}080) = 270$.\nStep 3: Equivalently, $0.72 \\times 0.25 = 0.18$ and $0.18(1{,}500) = 270$. Check: $\\frac{270}{1{,}080} = 0.25$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($375$): takes $25\\%$ of all $1{,}500$ households. The $25\\%$ applies only to the households that responded.\n* Choice C ($810$): takes $75\\%$ of the $1{,}080$ responding households, which counts the households that did not answer every question.\n* Choice D ($1{,}080$): stops after the first step and reports the number of households that responded.\n\n**Test Day Takeaway:** A percent \"of the households that responded\" multiplies the earlier result, not the original total.",
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
    question: "The table shows the distribution of $300$ storms by the weather station that recorded each storm and by whether the storm produced hail. One of these storms will be selected at random. Let $p$ be the probability of selecting a storm that produced hail, given that it was recorded by the inland station, and let $q$ be the probability of selecting a storm recorded by the inland station, given that it produced hail. What is the value of $q - p$?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Produced hail", "No hail", "Total"], rows: [["Coastal station", "18", "132", "150"], ["Inland station", "42", "108", "150"], ["Total", "60", "240", "300"]] } },
    choices: [
      // distractor: reports $p = \frac{42}{150} = 0.28$ instead of $q - p$
      { id: "A", text: "$0.28$" },
      { id: "B", text: "$0.42$" },
      // distractor: reports $q = \frac{42}{60} = 0.70$ instead of $q - p$
      { id: "C", text: "$0.70$" },
      // distractor: adds the two probabilities, $0.70 + 0.28$, instead of subtracting
      { id: "D", text: "$0.98$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** $p = \\frac{42}{150} = 0.28$ and $q = \\frac{42}{60} = 0.70$, so $q - p = 0.42$.\n\n**The Full Solution:**\nStep 1: For $p$, the condition is \"recorded by the inland station,\" so the denominator is the inland total, $150$: $p = \\frac{42}{150} = 0.28$.\nStep 2: For $q$, the condition is \"produced hail,\" so the denominator is the hail total, $60$: $q = \\frac{42}{60} = 0.70$.\nStep 3: Subtract: $q - p = 0.70 - 0.28 = 0.42$. Check: both use the same $42$ storms in the numerator; only the denominators differ ($150$ versus $60$) ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.28$): is the value of $p$ alone.\n* Choice C ($0.70$): is the value of $q$ alone.\n* Choice D ($0.98$): adds the two probabilities instead of subtracting them.\n\n**Test Day Takeaway:** In a conditional probability, the \"given\" group is the denominator. Swapping the condition keeps the numerator and changes the denominator.",
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
    question: "The table shows the number of hours of fog recorded last month at four of the five stations in a weather network. The mean number of hours of fog for all five stations was $148$. How many hours of fog were recorded at the fifth station?",
    diagram: { type: "dataTable", params: { headers: ["Station", "Hours of fog"], rows: [["A", "132"], ["B", "156"], ["C", "141"], ["D", "160"]] } },
    choices: [
      // distractor: multiplies the mean by $4$ instead of $5$, computing $4(148) - 589 = 3$
      { id: "A", text: "$3$" },
      // distractor: finds the mean of the four values shown, $\frac{589}{4}$
      { id: "B", text: "$147.25$" },
      // distractor: reports the given mean instead of the missing value
      { id: "C", text: "$148$" },
      { id: "D", text: "$151$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The five values total $5(148) = 740$, and the four shown total $589$, so the fifth is $740 - 589 = 151$.\n\n**The Full Solution:**\nStep 1: The sum of all five values is the mean times the count: $5(148) = 740$.\nStep 2: The four values in the table add to $132 + 156 + 141 + 160 = 589$.\nStep 3: The fifth station recorded $740 - 589 = 151$ hours. Check: $\\frac{589 + 151}{5} = \\frac{740}{5} = 148$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): uses $4$ stations in place of $5$: $4(148) - 589 = 3$.\n* Choice B ($147.25$): averages only the four values in the table, $\\frac{589}{4} = 147.25$.\n* Choice C ($148$): repeats the mean of all five stations.\n\n**Test Day Takeaway:** To find a missing value from a mean, convert the mean to a total first: total $=$ mean $\\times$ count.",
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
    question: "$41, 52, 38, 47, 50, 46, 34, x$\nThe mean of the $8$ values in the data set shown is $46$. What is the value of $x$?",
    choices: [
      // distractor: finds the mean of the seven known values, $\frac{308}{7}$
      { id: "A", text: "$44$" },
      // distractor: reports the given mean instead of the missing value
      { id: "B", text: "$46$" },
      { id: "C", text: "$60$" },
      // distractor: finds the total of all $8$ values, $8(46)$, and stops
      { id: "D", text: "$368$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The total is $8(46) = 368$, and the seven known values add to $308$, so $x = 368 - 308 = 60$.\n\n**The Full Solution:**\nStep 1: The sum of all $8$ values is $8(46) = 368$.\nStep 2: The seven known values add to $41 + 52 + 38 + 47 + 50 + 46 + 34 = 308$.\nStep 3: So $x = 368 - 308 = 60$. Check: $\\frac{308 + 60}{8} = \\frac{368}{8} = 46$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($44$): averages the seven known values, $\\frac{308}{7} = 44$.\n* Choice B ($46$): repeats the mean of the data set.\n* Choice D ($368$): finds the total of all $8$ values but does not subtract the seven known values.\n\n**Test Day Takeaway:** Mean times count gives the total; subtract what you know to find what is missing.",
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
    question: "The table shows the number of goals a player scored in each of four games, where $g$ is the number of goals scored in game 4. The mean number of goals per game for the four games is $3.5$. What is the value of $g$?",
    diagram: { type: "dataTable", params: { headers: ["Game", "Goals"], rows: [["1", "3"], ["2", "5"], ["3", "4"], ["4", "g"]] } },
    choices: [
      { id: "A", text: "$2$" },
      // distractor: reports the mean as the missing value
      { id: "B", text: "$3.5$" },
      // distractor: finds the mean of the three known games, $\frac{12}{3}$
      { id: "C", text: "$4$" },
      // distractor: finds the total for all four games, $4(3.5)$, and stops
      { id: "D", text: "$14$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The four games total $4(3.5) = 14$ goals, and games 1-3 total $12$, so $g = 2$.\n\n**The Full Solution:**\nStep 1: The total for the four games is $4(3.5) = 14$.\nStep 2: Games 1, 2, and 3 add to $3 + 5 + 4 = 12$.\nStep 3: So $g = 14 - 12 = 2$. Check: $\\frac{3 + 5 + 4 + 2}{4} = \\frac{14}{4} = 3.5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($3.5$): repeats the mean.\n* Choice C ($4$): averages the three known games, $\\frac{12}{3} = 4$.\n* Choice D ($14$): finds the four-game total but does not subtract the known games.\n\n**Test Day Takeaway:** Turn the mean into a total, then subtract the known values.",
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
    question: "The table shows the number of birds a student counted at a feeder on each of the first four days of a study. On day 6, the student counted $6$ more birds than on day 5. If the mean number of birds counted per day for the six days is $25$, how many birds did the student count on day 6?",
    diagram: { type: "dataTable", params: { headers: ["Day", "Number of birds"], rows: [["1", "26"], ["2", "19"], ["3", "22"], ["4", "31"]] } },
    choices: [
      // distractor: solves correctly but reports the day 5 count instead of the day 6 count
      { id: "A", text: "$23$" },
      // distractor: splits the remaining $52$ evenly, $\frac{52}{2}$, ignoring the difference of $6$
      { id: "B", text: "$26$" },
      { id: "C", text: "$29$" },
      // distractor: reports the combined count for days 5 and 6
      { id: "D", text: "$52$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** Six days total $6(25) = 150$; the table totals $98$, so days 5 and 6 total $52$. With $d + (d + 6) = 52$, $d = 23$ and day 6 is $29$.\n\n**The Full Solution:**\nStep 1: The six-day total is $6(25) = 150$, and the four days shown add to $26 + 19 + 22 + 31 = 98$, so days 5 and 6 together total $150 - 98 = 52$.\nStep 2: Let $d$ be the day 5 count. Then $d + (d + 6) = 52$, so $2d = 46$ and $d = 23$.\nStep 3: Day 6 is $23 + 6 = 29$. Check: $\\frac{98 + 23 + 29}{6} = \\frac{150}{6} = 25$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($23$): is the day 5 count; the question asks for day 6.\n* Choice B ($26$): splits $52$ in half, which would make the two days equal instead of $6$ apart.\n* Choice D ($52$): is the combined count for days 5 and 6.\n\n**Test Day Takeaway:** With two missing values, use the total to find their sum, then use the extra condition to split it.",
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
    question: "$63, 71, 58, k, k + 10$\nThe mean of the data set shown is $66$. What is the value of $k$?",
    choices: [
      { id: "A", text: "$64$" },
      // distractor: ignores the $10$ and splits $330 - 192 = 138$ in half
      { id: "B", text: "$69$" },
      // distractor: solves correctly but reports $k + 10$ instead of $k$
      { id: "C", text: "$74$" },
      // distractor: finds $2k = 128$ and does not divide by $2$
      { id: "D", text: "$128$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** The total is $5(66) = 330$, so $192 + 2k + 10 = 330$, which gives $2k = 128$ and $k = 64$.\n\n**The Full Solution:**\nStep 1: The five values total $5(66) = 330$.\nStep 2: The known values add to $63 + 71 + 58 = 192$, so $192 + k + (k + 10) = 330$, or $2k + 202 = 330$.\nStep 3: Then $2k = 128$ and $k = 64$. Check: $63 + 71 + 58 + 64 + 74 = 330$, and $\\frac{330}{5} = 66$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($69$): leaves out the $10$, solving $2k = 138$.\n* Choice C ($74$): is the value of $k + 10$, the fifth value in the list.\n* Choice D ($128$): is the value of $2k$; it still has to be divided by $2$.\n\n**Test Day Takeaway:** Write the total as an equation in $k$ and solve it all the way; check which expression the question asks for.",
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
    question: "The mean mass of $12$ sparrows is $28.5$ grams. When $8$ more sparrows are included, the mean mass of all $20$ sparrows is $26.1$ grams. What is the mean mass, in grams, of the $8$ sparrows that were added?",
    choices: [
      { id: "A", text: "$22.5$" },
      // distractor: assumes the new group's mean is as far below $26.1$ as $28.5$ is above it, ignoring the different group sizes
      { id: "B", text: "$23.7$" },
      // distractor: reports the mean of all $20$ sparrows
      { id: "C", text: "$26.1$" },
      // distractor: averages the two given means, $\frac{28.5 + 26.1}{2}$
      { id: "D", text: "$27.3$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice A is correct.**\n\n**The Fast Way (~50s):** All $20$ birds total $20(26.1) = 522$ grams and the first $12$ total $12(28.5) = 342$ grams, so the $8$ added birds have mean $\\frac{180}{8} = 22.5$.\n\n**The Full Solution:**\nStep 1: The total mass of all $20$ sparrows is $20(26.1) = 522$ grams.\nStep 2: The total mass of the first $12$ sparrows is $12(28.5) = 342$ grams, so the $8$ added sparrows total $522 - 342 = 180$ grams.\nStep 3: Their mean is $\\frac{180}{8} = 22.5$ grams. Check: $\\frac{342 + 8(22.5)}{20} = \\frac{522}{20} = 26.1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($23.7$): treats $26.1$ as the midpoint of the two group means, which is true only when the groups are the same size.\n* Choice C ($26.1$): is the mean of all $20$ sparrows, not of the $8$ that were added.\n* Choice D ($27.3$): averages the two means given in the question, which mixes the combined mean with a group mean.\n\n**Test Day Takeaway:** Means do not add or average across groups of different sizes; totals do. Convert every mean to a total.",
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
    question: "The table shows the distribution of $240$ commuters by type of transportation and by how often they commute. One of these commuters will be selected at random. What is the probability of selecting a commuter who travels by train?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Daily", "Less than daily", "Total"], rows: [["Train", "66", "30", "96"], ["Bus", "84", "60", "144"], ["Total", "150", "90", "240"]] } },
    choices: [
      // distractor: uses only the $66$ train commuters who commute daily
      { id: "A", text: "$\\frac{11}{40}$" },
      { id: "B", text: "$\\frac{2}{5}$" },
      // distractor: divides the $66$ daily train commuters by the $150$ daily commuters
      { id: "C", text: "$\\frac{11}{25}$" },
      // distractor: uses the $144$ bus commuters
      { id: "D", text: "$\\frac{3}{5}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The train total is $96$, so the probability is $\\frac{96}{240} = \\frac{2}{5}$.\n\n**The Full Solution:**\nStep 1: The event is \"travels by train,\" so use the train row total: $66 + 30 = 96$.\nStep 2: The selection is from all $240$ commuters, so the probability is $\\frac{96}{240}$.\nStep 3: $\\frac{96}{240} = \\frac{2}{5}$. Check: $\\frac{96}{240} + \\frac{144}{240} = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{11}{40}$): uses one cell, $66$, instead of the whole train row.\n* Choice C ($\\frac{11}{25}$): is the probability of train given daily commuting, not the probability of train.\n* Choice D ($\\frac{3}{5}$): is the probability of selecting a bus commuter.\n\n**Test Day Takeaway:** For a probability over everyone in the table, use a row or column total over the grand total.",
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
    question: "The table shows the distribution of $180$ plants by type of fertilizer and by whether the plant flowered. If one of these plants is selected at random, what is the probability of selecting a plant that received fertilizer B?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Flowered", "Did not flower", "Total"], rows: [["Fertilizer A", "48", "27", "75"], ["Fertilizer B", "63", "42", "105"], ["Total", "111", "69", "180"]] } },
    choices: [
      // distractor: uses the $42$ plants that received fertilizer B and did not flower
      { id: "A", text: "$\\frac{7}{30}$" },
      // distractor: uses the $63$ plants that received fertilizer B and flowered
      { id: "B", text: "$\\frac{7}{20}$" },
      // distractor: uses the $75$ plants that received fertilizer A
      { id: "C", text: "$\\frac{5}{12}$" },
      { id: "D", text: "$\\frac{7}{12}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Fertilizer B row total: $105$. Probability: $\\frac{105}{180} = \\frac{7}{12}$.\n\n**The Full Solution:**\nStep 1: The event is \"received fertilizer B,\" so use the whole fertilizer B row: $63 + 42 = 105$.\nStep 2: Divide by all $180$ plants: $\\frac{105}{180}$.\nStep 3: $\\frac{105}{180} = \\frac{7}{12}$. Check: $\\frac{75}{180} + \\frac{105}{180} = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{7}{30}$): uses only the fertilizer B plants that did not flower.\n* Choice B ($\\frac{7}{20}$): uses only the fertilizer B plants that flowered.\n* Choice C ($\\frac{5}{12}$): is the probability of selecting a plant that received fertilizer A.\n\n**Test Day Takeaway:** Read the event carefully: \"received fertilizer B\" is a whole row, not one cell.",
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
    question: "Of the $360$ visitors to a museum, $216$ bought a guidebook. One of these visitors will be selected at random. What is the probability of selecting a visitor who bought a guidebook?",
    choices: [
      // distractor: treats the $360$ visitors as the ones who did not buy a guidebook and divides $216$ by $216 + 360$
      { id: "A", text: "$\\frac{3}{8}$" },
      // distractor: gives the probability of selecting a visitor who did not buy a guidebook, $\frac{144}{360}$
      { id: "B", text: "$\\frac{2}{5}$" },
      { id: "C", text: "$\\frac{3}{5}$" },
      // distractor: divides the $144$ visitors who did not buy a guidebook by the $216$ who did
      { id: "D", text: "$\\frac{2}{3}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $\\frac{216}{360} = \\frac{3}{5}$.\n\n**The Full Solution:**\nStep 1: The selection is from all $360$ visitors.\nStep 2: The favorable outcomes are the $216$ visitors who bought a guidebook.\nStep 3: The probability is $\\frac{216}{360} = \\frac{3}{5}$. Check: $\\frac{3}{5}(360) = 216$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{8}$): adds $216$ to $360$ for the denominator, but $360$ already includes the $216$ buyers.\n* Choice B ($\\frac{2}{5}$): is the probability of the opposite event, not buying a guidebook.\n* Choice D ($\\frac{2}{3}$): compares non-buyers to buyers, which is a ratio, not a probability over all visitors.\n\n**Test Day Takeaway:** A probability is favorable outcomes over all outcomes; the \"of the $360$\" total already contains the favorable group.",
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
    question: "The table shows the number of concert tickets sold for two sections on two nights. One of the $300$ tickets will be selected at random. What is the probability of selecting a ticket sold for Saturday?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Friday", "Saturday", "Total"], rows: [["Orchestra", "84", "96", "180"], ["Balcony", "56", "64", "120"], ["Total", "140", "160", "300"]] } },
    choices: [
      // distractor: uses only the $96$ Saturday orchestra tickets
      { id: "A", text: "$\\frac{8}{25}$" },
      // distractor: uses the $140$ Friday tickets
      { id: "B", text: "$\\frac{7}{15}$" },
      { id: "C", text: "$\\frac{8}{15}$" },
      // distractor: uses the $180$ orchestra tickets
      { id: "D", text: "$\\frac{3}{5}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Saturday column total: $160$. Probability: $\\frac{160}{300} = \\frac{8}{15}$.\n\n**The Full Solution:**\nStep 1: The event is \"sold for Saturday,\" so use the Saturday column total: $96 + 64 = 160$.\nStep 2: Divide by all $300$ tickets: $\\frac{160}{300}$.\nStep 3: $\\frac{160}{300} = \\frac{8}{15}$. Check: $\\frac{140}{300} + \\frac{160}{300} = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{8}{25}$): uses one cell, the Saturday orchestra tickets, instead of the column total.\n* Choice B ($\\frac{7}{15}$): is the probability of selecting a Friday ticket.\n* Choice D ($\\frac{3}{5}$): is the probability of selecting an orchestra ticket.\n\n**Test Day Takeaway:** Match the event to a full row or column total before dividing by the grand total.",
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
    question: "The table shows the distribution of $420$ households by whether the household recycles glass and whether it composts food waste. One of these households will be selected at random. What is the probability of selecting a household that recycles glass?",
    diagram: { type: "twoWayTable", params: { headers: ["", "Composts", "Does not compost", "Total"], rows: [["Recycles glass", "168", "105", "273"], ["Does not recycle glass", "42", "105", "147"], ["Total", "210", "210", "420"]] } },
    choices: [
      // distractor: uses the $147$ households that do not recycle glass
      { id: "A", text: "$\\frac{7}{20}$" },
      // distractor: uses only the $168$ households that recycle glass and compost
      { id: "B", text: "$\\frac{2}{5}$" },
      { id: "C", text: "$\\frac{13}{20}$" },
      // distractor: divides $168$ by the $210$ households that compost, a conditional probability
      { id: "D", text: "$\\frac{4}{5}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Recycles glass row total: $273$. Probability: $\\frac{273}{420} = \\frac{13}{20}$.\n\n**The Full Solution:**\nStep 1: The event is \"recycles glass,\" so use that row total: $168 + 105 = 273$.\nStep 2: Divide by all $420$ households: $\\frac{273}{420}$.\nStep 3: $\\frac{273}{420} = \\frac{13}{20}$. Check: $\\frac{273}{420} + \\frac{147}{420} = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{7}{20}$): is the probability of selecting a household that does not recycle glass.\n* Choice B ($\\frac{2}{5}$): uses one cell instead of the whole row.\n* Choice D ($\\frac{4}{5}$): is the probability of recycling glass given that the household composts.\n\n**Test Day Takeaway:** An unconditional probability uses the grand total as the denominator, never a row or column total.",
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
    question: "Of the $120$ students in a program, $78$ take statistics, $54$ take economics, and $18$ take neither course. One of these students will be selected at random. What is the probability of selecting a student who takes statistics but not economics?",
    choices: [
      // distractor: gives the probability of selecting a student who takes economics but not statistics, $\frac{24}{120}$
      { id: "A", text: "$\\frac{1}{5}$" },
      // distractor: gives the probability of selecting a student who takes both courses, $\frac{30}{120}$
      { id: "B", text: "$\\frac{1}{4}$" },
      { id: "C", text: "$\\frac{2}{5}$" },
      // distractor: uses all $78$ statistics students, including the $30$ who also take economics
      { id: "D", text: "$\\frac{13}{20}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~50s):** $120 - 18 = 102$ take at least one course, so $78 + 54 - 102 = 30$ take both and $78 - 30 = 48$ take statistics only: $\\frac{48}{120} = \\frac{2}{5}$.\n\n**The Full Solution:**\nStep 1: Since $18$ students take neither course, $120 - 18 = 102$ students take at least one.\nStep 2: The two course counts add to $78 + 54 = 132$, which counts the students in both courses twice, so $132 - 102 = 30$ take both.\nStep 3: Statistics but not economics: $78 - 30 = 48$, so the probability is $\\frac{48}{120} = \\frac{2}{5}$. Check: $48 + 24 + 30 + 18 = 120$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{5}$): is the economics-only probability, $\\frac{54 - 30}{120}$.\n* Choice B ($\\frac{1}{4}$): is the probability of taking both courses.\n* Choice D ($\\frac{13}{20}$): counts every statistics student, including the $30$ who also take economics.\n\n**Test Day Takeaway:** \"A but not B\" is the A total minus the overlap. Use the \"neither\" count to find the overlap first.",
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
    question: "As a soil sample dried, its mass decreased from $80$ grams to $50$ grams. By what percent did the mass of the sample decrease?",
    choices: [
      // distractor: reports the decrease in grams, $30$, as a percent
      { id: "A", text: "$30\\%$" },
      { id: "B", text: "$37.5\\%$" },
      // distractor: divides the decrease by the new mass, $\frac{30}{50}$
      { id: "C", text: "$60\\%$" },
      // distractor: divides the new mass by the original mass, $\frac{50}{80}$, which is the percent remaining
      { id: "D", text: "$62.5\\%$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $\\frac{80 - 50}{80} = \\frac{30}{80} = 0.375$, a $37.5\\%$ decrease.\n\n**The Full Solution:**\nStep 1: The decrease is $80 - 50 = 30$ grams.\nStep 2: Divide by the original mass: $\\frac{30}{80} = 0.375$.\nStep 3: That is a $37.5\\%$ decrease. Check: $80(1 - 0.375) = 80(0.625) = 50$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($30\\%$): is the decrease in grams, not a percent of anything.\n* Choice C ($60\\%$): divides the decrease by the new mass, $\\frac{30}{50}$, instead of the original mass.\n* Choice D ($62.5\\%$): is the percent of the original mass that remains, $\\frac{50}{80}$.\n\n**Test Day Takeaway:** Percent decrease $= \\frac{\\text{decrease}}{\\text{original}} \\times 100$; the original value is always the denominator.",
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
    question: "The table shows a town's annual water use, in millions of liters, for two consecutive years. What was the percent decrease in the town's annual water use from $2022$ to $2023$?",
    diagram: { type: "dataTable", params: { headers: ["Year", "Water use (millions of liters)"], rows: [["2022", "1,250"], ["2023", "1,000"]] } },
    choices: [
      { id: "A", text: "$20\\%$" },
      // distractor: divides the decrease by the $2023$ value, $\frac{250}{1{,}000}$
      { id: "B", text: "$25\\%$" },
      // distractor: divides the $2023$ value by the $2022$ value, which is the percent remaining
      { id: "C", text: "$80\\%$" },
      // distractor: reports the decrease of $250$ million liters as a percent
      { id: "D", text: "$250\\%$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $\\frac{1{,}250 - 1{,}000}{1{,}250} = \\frac{250}{1{,}250} = 0.20$, a $20\\%$ decrease.\n\n**The Full Solution:**\nStep 1: The decrease is $1{,}250 - 1{,}000 = 250$ million liters.\nStep 2: Divide by the earlier value: $\\frac{250}{1{,}250} = 0.20$.\nStep 3: That is a $20\\%$ decrease. Check: $1{,}250(0.80) = 1{,}000$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($25\\%$): divides by the $2023$ value instead of the $2022$ value.\n* Choice C ($80\\%$): is the $2023$ use as a percent of the $2022$ use, not the decrease.\n* Choice D ($250\\%$): is the decrease in millions of liters, not a percent.\n\n**Test Day Takeaway:** Percent change is measured from the starting value; the earlier year goes in the denominator.",
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
    question: "The price of a bicycle was reduced from \\$250 to \\$160. By what percent was the price reduced?",
    choices: [
      { id: "A", text: "$36\\%$" },
      // distractor: divides the reduction by the new price, $\frac{90}{160}$
      { id: "B", text: "$56.25\\%$" },
      // distractor: divides the new price by the original price, which is the percent of the price that remains
      { id: "C", text: "$64\\%$" },
      // distractor: reports the reduction in dollars, $90$, as a percent
      { id: "D", text: "$90\\%$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $\\frac{250 - 160}{250} = \\frac{90}{250} = 0.36$, so $36\\%$.\n\n**The Full Solution:**\nStep 1: The reduction is $250 - 160 = 90$ dollars.\nStep 2: Divide by the original price: $\\frac{90}{250} = 0.36$.\nStep 3: The price was reduced by $36\\%$. Check: $250(0.64) = 160$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($56.25\\%$): divides the reduction by the new price, $\\frac{90}{160}$, instead of the original price.\n* Choice C ($64\\%$): is the new price as a percent of the original price, $\\frac{160}{250}$.\n* Choice D ($90\\%$): is the reduction in dollars, not a percent.\n\n**Test Day Takeaway:** Find the change, then divide by the original value.",
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
    question: "The number of hours of daylight in a city decreased from $14.5$ hours on one day to $11.6$ hours on a later day. What was the percent decrease in the number of hours of daylight?",
    choices: [
      // distractor: reports the decrease in hours, $2.9$, as a percent
      { id: "A", text: "$2.9\\%$" },
      { id: "B", text: "$20\\%$" },
      // distractor: divides the decrease by the later value, $\frac{2.9}{11.6}$
      { id: "C", text: "$25\\%$" },
      // distractor: divides the later value by the earlier value, which is the percent remaining
      { id: "D", text: "$80\\%$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $\\frac{14.5 - 11.6}{14.5} = \\frac{2.9}{14.5} = 0.2$, so $20\\%$.\n\n**The Full Solution:**\nStep 1: The decrease is $14.5 - 11.6 = 2.9$ hours.\nStep 2: Divide by the earlier value: $\\frac{2.9}{14.5} = 0.2$.\nStep 3: That is a $20\\%$ decrease. Check: $14.5(1 - 0.2) = 14.5(0.8) = 11.6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2.9\\%$): is the decrease in hours, not a percent.\n* Choice C ($25\\%$): divides by the later value, $11.6$, instead of the earlier value: $\\frac{2.9}{11.6} = 0.25$.\n* Choice D ($80\\%$): is the later value as a percent of the earlier value.\n\n**Test Day Takeaway:** Decimals do not change the method: change over original, then convert to a percent.",
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
    question: "A school used $15\\%$ less paper in April than in March. If the school used $3{,}060$ sheets of paper in April, how many sheets of paper did it use in March?",
    choices: [
      // distractor: takes $15\%$ off the April amount, $0.85(3{,}060)$
      { id: "A", text: "$2{,}601$" },
      // distractor: adds $15\%$ to the April amount, $1.15(3{,}060)$, instead of dividing by $0.85$
      { id: "B", text: "$3{,}519$" },
      { id: "C", text: "$3{,}600$" },
      // distractor: divides $3{,}060$ by $0.15$, treating the April amount as the $15\%$ decrease
      { id: "D", text: "$20{,}400$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** April is $85\\%$ of March, so March $= \\frac{3{,}060}{0.85} = 3{,}600$.\n\n**The Full Solution:**\nStep 1: Using $15\\%$ less paper means April's amount is $100\\% - 15\\% = 85\\%$ of March's amount: $0.85m = 3{,}060$.\nStep 2: Divide: $m = \\frac{3{,}060}{0.85}$.\nStep 3: $m = 3{,}600$. Check: $3{,}600 - 0.15(3{,}600) = 3{,}600 - 540 = 3{,}060$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2{,}601$): decreases April's amount by another $15\\%$ instead of working back to March.\n* Choice B ($3{,}519$): adds $15\\%$ of April's amount. The $15\\%$ is a percent of March's amount, so adding it to April's amount does not undo the decrease.\n* Choice D ($20{,}400$): treats $3{,}060$ as $15\\%$ of March, when it is $85\\%$ of March.\n\n**Test Day Takeaway:** To undo a percent decrease, divide by the remaining fraction; adding the same percent back does not return the original.",
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
    question: "The value of a car decreased by $15\\%$ during its first year and then decreased by $12\\%$ during its second year. By what percent did the value of the car decrease over the two years?",
    choices: [
      // distractor: subtracts the two percents, $15 - 12$
      { id: "A", text: "$3\\%$" },
      { id: "B", text: "$25.2\\%$" },
      // distractor: adds the two percents, $15 + 12$, as if both applied to the original value
      { id: "C", text: "$27\\%$" },
      // distractor: computes the remaining fraction, $0.85 \times 0.88$, and reports it as the decrease
      { id: "D", text: "$74.8\\%$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** $0.85 \\times 0.88 = 0.748$ of the value remains, so the decrease is $1 - 0.748 = 0.252$, or $25.2\\%$.\n\n**The Full Solution:**\nStep 1: After the first year, the value is $0.85$ times the original value.\nStep 2: The second decrease applies to that reduced value: $0.85 \\times 0.88 = 0.748$ times the original value.\nStep 3: The total decrease is $1 - 0.748 = 0.252$, or $25.2\\%$. Check with a value of \\$100: $100 \\to 85 \\to 85(0.88) = 74.80$, a drop of \\$25.20 ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3\\%$): subtracts the percents, which has no meaning for successive changes.\n* Choice C ($27\\%$): adds the percents, but the $12\\%$ is taken from a smaller value, so the total decrease is less than $27\\%$.\n* Choice D ($74.8\\%$): is the percent of the original value that remains after two years.\n\n**Test Day Takeaway:** Successive percent changes multiply. Find the final multiplier, then subtract it from $1$.",
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
    question: "What is $45\\%$ of $60$?",
    choices: [
      // distractor: uses $0.045$ for $45\%$, a decimal-place error
      { id: "A", text: "$2.7$" },
      // distractor: subtracts $60 - 45$ instead of finding a percent
      { id: "B", text: "$15$" },
      { id: "C", text: "$27$" },
      // distractor: finds $55\%$ of $60$, the part that is not $45\%$
      { id: "D", text: "$33$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $0.45 \\times 60 = 27$.\n\n**The Full Solution:**\nStep 1: Write $45\\%$ as a decimal: $0.45$.\nStep 2: Multiply: $0.45 \\times 60 = 27$.\nStep 3: Check: $10\\%$ of $60$ is $6$ and $5\\%$ is $3$, so $45\\% = 4(6) + 3 = 27$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2.7$): moves the decimal point one place too far, using $0.045$.\n* Choice B ($15$): subtracts the numbers instead of multiplying.\n* Choice D ($33$): finds the remaining $55\\%$ of $60$.\n\n**Test Day Takeaway:** \"Percent of\" means multiply by the percent written as a decimal.",
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
    question: "A race had $e$ entrants, and $18\\%$ of the entrants registered during the first week. Which expression represents the number of entrants who registered during the first week?",
    choices: [
      // distractor: divides $18$ by $e$ instead of multiplying $e$ by the percent
      { id: "A", text: "$\\frac{18}{e}$" },
      // distractor: divides $e$ by $18$ instead of taking $18\%$ of $e$
      { id: "B", text: "$\\frac{e}{18}$" },
      // distractor: multiplies by $18$ without converting $18\%$ to $0.18$
      { id: "C", text: "$18e$" },
      { id: "D", text: "$0.18e$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** $18\\% = 0.18$, so $18\\%$ of $e$ is $0.18e$.\n\n**The Full Solution:**\nStep 1: \"$18\\%$ of the entrants\" means $18\\%$ of $e$.\nStep 2: Convert the percent: $18\\% = \\frac{18}{100} = 0.18$.\nStep 3: The number who registered during the first week is $0.18e$. Check with $e = 500$: $0.18(500) = 90$, and $\\frac{90}{500} = 18\\%$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{18}{e}$): divides $18$ by $e$, which shrinks as the number of entrants grows.\n* Choice B ($\\frac{e}{18}$): divides $e$ by $18$, which is about $5.6\\%$ of $e$, not $18\\%$.\n* Choice C ($18e$): multiplies by $18$ instead of $0.18$, giving $1{,}800\\%$ of $e$.\n\n**Test Day Takeaway:** $p\\%$ of a quantity $x$ is $\\frac{p}{100}x$; convert the percent before you multiply.",
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
    question: "A sales tax of $6\\%$ is applied to a purchase of \\$68. What is the amount of the sales tax, in dollars?",
    choices: [
      { id: "A", text: "$4.08$" },
      // distractor: uses $0.6$ for $6\%$, a decimal-place error
      { id: "B", text: "$40.80$" },
      // distractor: subtracts $68 - 6$ instead of finding $6\%$ of $68$
      { id: "C", text: "$62$" },
      // distractor: finds the total cost with tax instead of the tax alone
      { id: "D", text: "$72.08$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $0.06 \\times 68 = 4.08$.\n\n**The Full Solution:**\nStep 1: Write $6\\%$ as a decimal: $0.06$.\nStep 2: Multiply by the purchase amount: $0.06 \\times 68 = 4.08$.\nStep 3: The tax is \\$4.08. Check: $1\\%$ of $68$ is $0.68$, and $6(0.68) = 4.08$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($40.80$): uses $0.6$ for $6\\%$, ten times too large.\n* Choice C ($62$): subtracts instead of taking a percent.\n* Choice D ($72.08$): is the total cost, $68 + 4.08$; the question asks for the tax alone.\n\n**Test Day Takeaway:** Read what is asked: the tax is the percent alone; the total is the price plus the tax.",
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
    question: "A nursery had $240$ seedlings last spring. This spring, the nursery has $115\\%$ as many seedlings as it had last spring. How many seedlings does the nursery have this spring?",
    choices: [
      // distractor: finds only the $15\%$ increase, $0.15(240)$
      { id: "A", text: "$36$" },
      // distractor: finds $85\%$ of $240$, treating the change as a decrease
      { id: "B", text: "$204$" },
      // distractor: adds $15$ seedlings instead of $15\%$ of $240$
      { id: "C", text: "$255$" },
      { id: "D", text: "$276$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** $1.15 \\times 240 = 276$.\n\n**The Full Solution:**\nStep 1: $115\\%$ written as a decimal is $1.15$.\nStep 2: Multiply: $1.15 \\times 240 = 276$.\nStep 3: Check: $240 + 0.15(240) = 240 + 36 = 276$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($36$): is the increase alone, not the new total.\n* Choice B ($204$): treats $115\\%$ as a $15\\%$ decrease.\n* Choice C ($255$): adds $15$ seedlings, not $15\\%$ of $240$.\n\n**Test Day Takeaway:** A percent greater than $100$ gives a result greater than the original; $115\\%$ of $x$ is $1.15x$.",
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
    question: "What is $0.75\\%$ of $2{,}400$?",
    choices: [
      // distractor: uses $0.00075$, moving the decimal point one place too far
      { id: "A", text: "$1.8$" },
      { id: "B", text: "$18$" },
      // distractor: uses $0.075$ for $0.75\%$, moving the decimal point one place too few
      { id: "C", text: "$180$" },
      // distractor: uses $0.75$, treating $0.75\%$ as $75\%$
      { id: "D", text: "$1{,}800$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $0.75\\% = 0.0075$, and $0.0075 \\times 2{,}400 = 18$.\n\n**The Full Solution:**\nStep 1: Convert the percent: $0.75\\% = \\frac{0.75}{100} = 0.0075$.\nStep 2: Multiply: $0.0075 \\times 2{,}400 = 18$.\nStep 3: Check: $1\\%$ of $2{,}400$ is $24$, and $\\frac{3}{4}$ of $24$ is $18$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.8$): divides by $1{,}000$ instead of $100$ when converting the percent.\n* Choice C ($180$): divides by $10$ instead of $100$ when converting the percent.\n* Choice D ($1{,}800$): ignores the percent sign and uses $0.75$.\n\n**Test Day Takeaway:** A percent less than $1$ still gets divided by $100$; anchor on $1\\%$ to sanity-check the size.",
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
    question: "A library has $57$ graphic novels, which is $15\\%$ of the books in its teen section. How many books are in the library's teen section?",
    choices: [
      // distractor: finds $15\%$ of $57$ instead of the whole that $57$ is $15\%$ of
      { id: "A", text: "$8.55$" },
      // distractor: increases $57$ by $15\%$, $1.15(57)$
      { id: "B", text: "$65.55$" },
      { id: "C", text: "$380$" },
      // distractor: multiplies $57$ by $15$ instead of dividing by $0.15$
      { id: "D", text: "$855$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $0.15b = 57$, so $b = \\frac{57}{0.15} = 380$.\n\n**The Full Solution:**\nStep 1: Let $b$ be the number of books in the teen section. Then $0.15b = 57$.\nStep 2: Divide: $b = \\frac{57}{0.15}$.\nStep 3: $b = 380$. Check: $0.15(380) = 57$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8.55$): takes $15\\%$ of the part instead of finding the whole.\n* Choice B ($65.55$): increases the part by $15\\%$, which does not reverse a percent.\n* Choice D ($855$): multiplies by $15$ instead of dividing by $0.15$.\n\n**Test Day Takeaway:** When the part and its percent are given, divide the part by the percent as a decimal to find the whole.",
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
    question: "$21$ is $p\\%$ of $84$. What is the value of $p$?",
    choices: [
      // distractor: divides $84$ by $21$ instead of $21$ by $84$
      { id: "A", text: "$4$" },
      // distractor: repeats the part, $21$, as the percent
      { id: "B", text: "$21$" },
      { id: "C", text: "$25$" },
      // distractor: finds the percent of $84$ that is not $21$, $\frac{63}{84}$
      { id: "D", text: "$75$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $\\frac{21}{84} = 0.25$, so $p = 25$.\n\n**The Full Solution:**\nStep 1: Write the statement as an equation: $21 = \\frac{p}{100}(84)$.\nStep 2: Divide: $\\frac{p}{100} = \\frac{21}{84} = 0.25$.\nStep 3: So $p = 25$. Check: $0.25(84) = 21$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): inverts the fraction, computing $\\frac{84}{21}$.\n* Choice B ($21$): uses the part itself as the percent.\n* Choice D ($75$): is the percent of $84$ left over after the $21$.\n\n**Test Day Takeaway:** \"Part is $p\\%$ of whole\" means $\\frac{p}{100} = \\frac{\\text{part}}{\\text{whole}}$.",
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
    question: "$18$ is what percent of $45$?",
    choices: [
      // distractor: divides $45$ by $18$ and reports $2.5$ as a percent
      { id: "A", text: "$2.5\\%$" },
      // distractor: subtracts $45 - 18$ instead of dividing
      { id: "B", text: "$27\\%$" },
      { id: "C", text: "$40\\%$" },
      // distractor: finds the percent of $45$ that is not $18$, $\frac{27}{45}$
      { id: "D", text: "$60\\%$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $\\frac{18}{45} = 0.4$, or $40\\%$.\n\n**The Full Solution:**\nStep 1: The part is $18$ and the whole is $45$.\nStep 2: Divide: $\\frac{18}{45} = \\frac{2}{5} = 0.4$.\nStep 3: Convert to a percent: $40\\%$. Check: $0.40(45) = 18$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2.5\\%$): inverts the fraction, computing $\\frac{45}{18}$.\n* Choice B ($27\\%$): subtracts the numbers instead of dividing.\n* Choice D ($60\\%$): is the remaining part, $27$, as a percent of $45$.\n\n**Test Day Takeaway:** The number after \"of\" is the whole and goes in the denominator.",
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
    question: "Of the $r$ students in a club, $q$ are seniors. Which expression represents the percentage of students in the club who are seniors?",
    choices: [
      // distractor: inverts the fraction and does not multiply by $100$
      { id: "A", text: "$\\frac{r}{q}$" },
      // distractor: gives the fraction of students who are seniors but does not convert it to a percentage
      { id: "B", text: "$\\frac{q}{r}$" },
      // distractor: multiplies by $100$ but inverts the fraction
      { id: "C", text: "$\\frac{100r}{q}$" },
      { id: "D", text: "$\\frac{100q}{r}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The fraction who are seniors is $\\frac{q}{r}$; as a percentage, $\\frac{100q}{r}$.\n\n**The Full Solution:**\nStep 1: The part is $q$ and the whole is $r$, so the fraction of students who are seniors is $\\frac{q}{r}$.\nStep 2: To write a fraction as a percentage, multiply by $100$: $\\frac{100q}{r}$.\nStep 3: Check with $r = 40$ and $q = 10$: $\\frac{100(10)}{40} = 25$, and $10$ is $25\\%$ of $40$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{r}{q}$): puts the whole over the part and leaves the result as a fraction.\n* Choice B ($\\frac{q}{r}$): is the fraction of students who are seniors, not the percentage; with $r = 40$ and $q = 10$ it gives $0.25$, not $25$.\n* Choice C ($\\frac{100r}{q}$): multiplies by $100$ but puts the whole over the part.\n\n**Test Day Takeaway:** Percent $= \\frac{\\text{part}}{\\text{whole}} \\times 100$, even when the part and whole are variables.",
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
    question: "A weather station logged a daily maximum UV index reading on each of the $365$ days last year, and $146$ of those readings were at least $8$. What percent of the year's readings were below $8$?",
    choices: [
      // distractor: reports the percent of readings that were at least $8$, $\frac{146}{365} = 40\%$, the complement of what is asked
      { id: "A", text: "$40\\%$" },
      { id: "B", text: "$60\\%$" },
      // distractor: compares the $219$ lower readings with the $146$ higher ones, $\frac{219}{146} = 150\%$, instead of with all $365$
      { id: "C", text: "$150\\%$" },
      // distractor: divides the total by the lower group, $\frac{365}{219} \approx 166.7\%$, inverting part and whole
      { id: "D", text: "$166.7\\%$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice B is correct.** Readings below $8$ number $365 - 146 = 219$, and $\\frac{219}{365} = 0.60$, or $60\\%$.\n\n**The Fast Way (~30s):** $\\frac{146}{365} = 40\\%$ were at least $8$, so $100 - 40 = 60\\%$ were below $8$.\n\n**The Full Solution:**\n\nStep 1: Count the readings below $8$: $365 - 146 = 219$ readings.\n\nStep 2: Divide by the whole year of readings: $\\frac{219}{365} = 0.60$.\n\nStep 3: Convert to a percent: $0.60(100) = 60\\%$. Check: $40\\% + 60\\% = 100\\%$, and $0.60(365) = 219$ readings.\n\n**Why the wrong answers are tempting:**\n\n* Choice A ($40\\%$): is the percent of readings that were at least $8$, the group the question does not ask about.\n* Choice C ($150\\%$): compares the two groups with each other. A part of a whole can never exceed $100\\%$.\n* Choice D ($166.7\\%$): divides the total by the part, reversing the fraction.\n\n**Test Day Takeaway:** A percent of a whole must land between $0$ and $100$ -- an answer above $100$ means the whole ended up in the numerator.",
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
    question: "For each of four weekdays, the table gives the number of prescriptions a hospital pharmacy actually refilled and the number its staffing model predicted it would refill. On which weekday does the number refilled exceed the predicted number by the greatest amount?",
    diagram: { type: "dataTable", params: { headers: ["Weekday", "Prescriptions refilled", "Prescriptions predicted"], rows: [["Monday", "312", "298"], ["Tuesday", "372", "355"], ["Wednesday", "289", "312"], ["Thursday", "366", "348"]] } },
    choices: [
      // distractor: picks the weekday with the smallest predicted count, 298, instead of the largest excess (14)
      { id: "A", text: "Monday" },
      // distractor: picks the weekday with the largest refilled count, 372, instead of the largest excess (17)
      { id: "B", text: "Tuesday" },
      // distractor: picks the weekday with the largest gap in size, 23, but there the model is greater, not smaller
      { id: "C", text: "Wednesday" },
      { id: "D", text: "Thursday" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Residual**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Subtract predicted from refilled for each row: $14$, $17$, $-23$, $18$. The largest positive value is Thursday.\n\n**The Full Solution:**\nStep 1: Subtract in one direction for every row. Monday: $312 - 298 = 14$. Tuesday: $372 - 355 = 17$. Wednesday: $289 - 312 = -23$. Thursday: $366 - 348 = 18$.\nStep 2: Keep only the rows where the refilled count is the larger one, so the difference is positive: Monday, Tuesday, and Thursday.\nStep 3: Compare those three. $18 > 17 > 14$, so Thursday has the greatest excess. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Monday): has the smallest predicted count, $298$, but its excess is only $14$.\n* Choice B (Tuesday): has the largest number refilled, $372$, but its prediction is high too, so its excess is $17$.\n* Choice C (Wednesday): has the largest gap in size, $23$, but there the model predicts MORE than was refilled — a negative residual.\n\n**Test Day Takeaway:** A \"greatest excess\" question is about the signed difference actual $-$ predicted, not about the biggest number in either column.",
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
    question: "The table gives the number of vehicles, in thousands, recorded at a toll plaza on day $d$ of a study, and a traffic model predicts $p = 0.5d + 21$ thousand vehicles on day $d$. On day $6$, by how many thousand vehicles does the recorded number exceed the number the model predicts?",
    diagram: { type: "dataTable", params: { headers: ["Day (d)", "Vehicles recorded (thousands)"], rows: [["2", "22.9"], ["4", "22.6"], ["6", "24.5"], ["8", "26.2"]] } },
    choices: [
      { id: "A", text: "$0.5$" },
      // distractor: compares the recorded 24.5 with the constant term 21 instead of the full model value: 24.5 - 21 = 3.5
      { id: "B", text: "$3.5$" },
      // distractor: reports the model value 0.5(6) + 21 = 24 rather than the difference
      { id: "C", text: "$24$" },
      // distractor: reports the recorded value 24.5 rather than the difference
      { id: "D", text: "$24.5$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The model gives $0.5(6) + 21 = 24$ and the table records $24.5$, so the excess is $24.5 - 24 = 0.5$ thousand vehicles.\n\n**The Full Solution:**\nStep 1: Evaluate the model at $d = 6$. $p = 0.5(6) + 21 = 3 + 21 = 24$ thousand vehicles.\nStep 2: Read the table at $d = 6$. The recorded count is $24.5$ thousand vehicles.\nStep 3: Subtract actual minus predicted. $24.5 - 24 = 0.5$, and because the result is positive the recorded count really does exceed the prediction. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($3.5$): subtracts the constant term alone: $24.5 - 21 = 3.5$. The model value at $d = 6$ is $24$, not $21$.\n* Choice C ($24$): is the model's prediction for day $6$, not the amount by which the record exceeds it.\n* Choice D ($24.5$): is the recorded count itself, with no comparison to the model.\n\n**Test Day Takeaway:** Evaluate the model at the stated input first; the answer to \"by how much does it exceed\" is always the subtraction, never one of the two values.",
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
    question: "A costume shop's model predicts $f = 3.5g + 12$ yards of fabric for a garment of size $g$, and the table gives the fabric actually used for four garments. For how many of these garments does the fabric used exceed the predicted amount by more than $4$ yards?",
    diagram: { type: "dataTable", params: { headers: ["Garment", "Size (g)", "Fabric used (yards)"], rows: [["W", "4", "31"], ["X", "6", "40"], ["Y", "8", "46"], ["Z", "10", "50"]] } },
    choices: [
      // distractor: counts only the single largest excess, garment X at 7 yards
      { id: "A", text: "$1$" },
      // distractor: counts only the excesses above 5 yards, garments X and Y, using the wrong threshold
      { id: "B", text: "$2$" },
      { id: "C", text: "$3$" },
      // distractor: counts every garment whose use exceeds the prediction at all, including garment Z at 3 yards
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Residual**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Predictions are $26$, $33$, $40$, $47$; the excesses are $5$, $7$, $6$, $3$, and three of them clear $4$ yards.\n\n**The Full Solution:**\nStep 1: Predict for each size. $f = 3.5(4) + 12 = 26$, $f = 3.5(6) + 12 = 33$, $f = 3.5(8) + 12 = 40$, $f = 3.5(10) + 12 = 47$ yards.\nStep 2: Subtract predicted from used. Garment W: $31 - 26 = 5$. Garment X: $40 - 33 = 7$. Garment Y: $46 - 40 = 6$. Garment Z: $50 - 47 = 3$.\nStep 3: Apply the threshold. The excesses greater than $4$ are $5$, $7$, and $6$ — three garments. Garment Z falls short at $3$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): counts only garment X, the single largest excess, instead of every garment that clears $4$ yards.\n* Choice B ($2$): uses a threshold of more than $5$ yards, which keeps only garments X and Y.\n* Choice D ($4$): counts every garment whose use exceeds its prediction, including garment Z, whose excess is only $3$ yards.\n\n**Test Day Takeaway:** A \"how many exceed by more than $k$\" item needs all four residuals computed, then one comparison each — do not stop at the largest.",
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
    question: "A county tuberculosis clinic screened $n$ patients in June, where $n$ is a constant. In July the same clinic screened $1{,}200$ patients, which was $20\\%$ fewer patients than it screened in June. What is the value of $n$?",
    choices: [
      // distractor: takes 20 percent off July instead of reversing it: 1,200 x 0.8 = 960
      { id: "A", text: "$960$" },
      // distractor: divides by 1.2 instead of 0.8: 1,200 / 1.2 = 1,000
      { id: "B", text: "$1{,}000$" },
      // distractor: adds 20 percent of July to July: 1,200 x 1.2 = 1,440, applying the percent to the wrong base
      { id: "C", text: "$1{,}440$" },
      { id: "D", text: "$1{,}500$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Reverse Percent**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** July is $80\\%$ of June, so $n = \\frac{1{,}200}{0.8} = 1{,}500$.\n\n**The Full Solution:**\nStep 1: Translate the percent. \"$20\\%$ fewer than June\" means July equals $100\\% - 20\\% = 80\\%$ of June, so $0.8n = 1{,}200$.\nStep 2: Solve for $n$. Divide both sides by $0.8$: $n = \\frac{1{,}200}{0.8} = 1{,}500$.\nStep 3: Check forward. $20\\%$ of $1{,}500$ is $300$, and $1{,}500 - 300 = 1{,}200$, the July count. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($960$): takes another $20\\%$ off July: $1{,}200 \\times 0.8 = 960$. That moves in the wrong direction.\n* Choice B ($1{,}000$): divides by $1.2$ instead of $0.8$, which reverses an increase rather than a decrease.\n* Choice C ($1{,}440$): computes $1{,}200 \\times 1.2 = 1{,}440$, applying the $20\\%$ to July. The percent is always taken of the ORIGINAL, June.\n\n**Test Day Takeaway:** A percent change is always measured against the original amount. If the new value is given, divide by $1 \\pm r$; never multiply the new value by it.",
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
    question: "A stage-lighting rental house cut its fixture inventory by $20\\%$ during one season and by another $25\\%$ during the next season, finishing with $660$ fixtures. The inventory before the first cut was $m$ fixtures. What is the value of $m$?",
    choices: [
      // distractor: adds the two percents to the final count: 660 x 1.45 = 957
      { id: "A", text: "$957$" },
      // distractor: multiplies by 1.6 instead of dividing by 0.6: 660 x 1.6 = 1,056
      { id: "B", text: "$1{,}056$" },
      { id: "C", text: "$1{,}100$" },
      // distractor: treats the two cuts as one 45 percent cut: 660 / 0.55 = 1,200
      { id: "D", text: "$1{,}200$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Reverse Percent Multi-Step**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The two cuts leave $0.8 \\times 0.75 = 0.6$ of the start, so $m = \\frac{660}{0.6} = 1{,}100$.\n\n**The Full Solution:**\nStep 1: Turn each cut into a retained fraction. A $20\\%$ cut leaves $0.8$ of the inventory; a $25\\%$ cut leaves $0.75$ of what remains.\nStep 2: Multiply the fractions and set up. $0.8 \\times 0.75 = 0.6$, so $0.6m = 660$.\nStep 3: Solve and check. $m = \\frac{660}{0.6} = 1{,}100$. Forward: $1{,}100 \\times 0.8 = 880$, and $880 \\times 0.75 = 660$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($957$): uses $660 \\times 1.45$, adding both percents to the FINAL count instead of reversing them.\n* Choice B ($1{,}056$): uses $660 \\times 1.6$. Multiplying by $1.6$ is not the same as dividing by $0.6$.\n* Choice D ($1{,}200$): treats the cuts as one $45\\%$ cut: $\\frac{660}{0.55} = 1{,}200$. Successive percent changes multiply, they do not add.\n\n**Test Day Takeaway:** Successive percent changes multiply their retained fractions. Two cuts of $20\\%$ and $25\\%$ leave $0.6$, not $0.55$.",
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
    question: "During a morning count at a river crossing, the ratio of northbound vehicles to southbound vehicles was $3$ to $7$, and $84$ more southbound vehicles than northbound vehicles were counted. How many vehicles were counted in all during that morning?",
    choices: [
      // distractor: reports the northbound count alone, 3 parts x 21 = 63
      { id: "A", text: "$63$" },
      // distractor: reports the given difference of 84 vehicles as though it were the total
      { id: "B", text: "$84$" },
      // distractor: reports the southbound count alone, 7 parts x 21 = 147
      { id: "C", text: "$147$" },
      { id: "D", text: "$210$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Sum-of-Parts Ratio**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The gap is $7 - 3 = 4$ parts, so one part is $\\frac{84}{4} = 21$ and the total is $10$ parts, or $210$ vehicles.\n\n**The Full Solution:**\nStep 1: Turn the ratio into parts. Northbound is $3$ parts, southbound is $7$ parts, so southbound exceeds northbound by $7 - 3 = 4$ parts.\nStep 2: Size one part. Those $4$ parts equal $84$ vehicles, so one part is $\\frac{84}{4} = 21$ vehicles.\nStep 3: Total the parts and check. All $3 + 7 = 10$ parts give $10 \\times 21 = 210$ vehicles. Northbound is $63$, southbound is $147$, and $147 - 63 = 84$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($63$): is the northbound count, $3$ parts, not the total.\n* Choice B ($84$): is the given difference itself, restated as if it were the count of all vehicles.\n* Choice C ($147$): is the southbound count, $7$ parts, not the total.\n\n**Test Day Takeaway:** When a ratio comes with a DIFFERENCE, divide by the difference of the ratio numbers to size one part, then multiply by whichever total the question wants.",
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
    question: "At a vaccination campaign, the ratio of first doses administered to booster doses administered is $5$ to $4$, and $n$ doses are administered in all. Which expression gives the number of booster doses administered at the campaign?",
    choices: [
      { id: "A", text: "$\\frac{4n}{9}$" },
      // distractor: divides by the first-dose parts, 5, instead of the total parts, 9
      { id: "B", text: "$\\frac{4n}{5}$" },
      // distractor: gives the first-dose share, 5 parts out of 9, rather than the booster share
      { id: "C", text: "$\\frac{5n}{9}$" },
      // distractor: inverts the fraction, giving more doses than were administered in all
      { id: "D", text: "$\\frac{9n}{4}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Sum-of-Parts Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Boosters are $4$ of the $5 + 4 = 9$ parts, so they number $\\frac{4}{9}$ of $n$, which is $\\frac{4n}{9}$.\n\n**The Full Solution:**\nStep 1: Add the parts. First doses are $5$ parts and boosters are $4$ parts, so the campaign has $9$ parts in all.\nStep 2: Write the booster share. Boosters make up $\\frac{4}{9}$ of every dose given, so with $n$ doses that is $\\frac{4n}{9}$.\nStep 3: Check with a number. If $n = 900$, then $\\frac{4(900)}{9} = 400$ boosters and $\\frac{5(900)}{9} = 500$ first doses; $400 + 500 = 900$ and $500 : 400 = 5 : 4$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{4n}{5}$): divides by $5$, the first-dose parts, instead of by the $9$ total parts.\n* Choice C ($\\frac{5n}{9}$): is the FIRST-dose share. The question asks for boosters.\n* Choice D ($\\frac{9n}{4}$): flips the fraction and would exceed $n$, more boosters than total doses.\n\n**Test Day Takeaway:** A part of a total is (that part) over (the SUM of the parts). If the expression can exceed the total, the fraction is upside down.",
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
    question: "The bar chart groups the finishing times, in seconds, of the $20$ skiers in heat 1 of a slalom race. The $20$ skiers in heat 2 had a mean finishing time of $53.0$ seconds. Based only on the chart, what is the smallest possible value of the difference between the heat 2 mean and the heat 1 mean?",
    diagram: { type: "barChart", params: { data: [{ label: "40-44", value: 3 }, { label: "45-49", value: 6 }, { label: "50-54", value: 8 }, { label: "55-59", value: 3 }], xAxisLabel: "Finishing time (seconds)", yAxisLabel: "Number of skiers", yMax: 10, yStep: 1 } },
    choices: [
      { id: "A", text: "$1.25$" },
      // distractor: uses interval midpoints for heat 1, giving a mean of $49.75$ and a difference of $3.25$
      { id: "B", text: "$3.25$" },
      // distractor: reports the spread of possible heat 1 means, $51.75 - 47.75 = 4.00$, rather than a difference from heat 2
      { id: "C", text: "$4.00$" },
      // distractor: uses the smallest possible heat 1 mean, $47.75$, which makes the difference as large as possible
      { id: "D", text: "$5.25$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Grouped Data — Smallest Possible Mean Difference**\n\n**Choice A is correct.** Heat 1's mean is largest when every skier finishes at the top of its interval, giving $51.75$ seconds, so the smallest possible difference is $53.00-51.75=1.25$ seconds.\n\n**The Fast Way (~70s):** To shrink the gap below $53.00$, push heat 1's mean as high as the chart allows: $\\frac{3(44) + 6(49) + 8(54) + 3(59)}{20} = 51.75$, and $53.00 - 51.75 = 1.25$.\n\n**The Full Solution:**\n\nStep 1: Read the chart. Heat 1 has $3$ skiers in $40$-$44$, $6$ in $45$-$49$, $8$ in $50$-$54$, and $3$ in $55$-$59$, a total of $20$ skiers.\n\nStep 2: Decide which extreme makes the difference small. The heat 2 mean of $53.00$ seconds exceeds every possible heat 1 mean, so the difference shrinks as heat 1's mean grows. Assign each skier the greatest time its interval allows: $\\frac{3(44) + 6(49) + 8(54) + 3(59)}{20} = \\frac{1{,}035}{20} = 51.75$ seconds.\n\nStep 3: Subtract: $53.00 - 51.75 = 1.25$ seconds. Check: the least possible heat 1 mean is $\\frac{3(40) + 6(45) + 8(50) + 3(55)}{20} = 47.75$ seconds, so every possible heat 1 mean lies between $47.75$ and $51.75$, and $53.00$ is above all of them.\n\n**Why the wrong answers are tempting:**\n\n* Choice B ($3.25$): uses midpoints, $\\frac{3(42) + 6(47) + 8(52) + 3(57)}{20} = 49.75$. Midpoints give a typical mean, not the extreme the question asks for.\n* Choice C ($4.00$): reports $51.75-47.75$, the width of the range of possible heat 1 means, rather than a comparison with heat 2.\n* Choice D ($5.25$): uses the smallest possible heat 1 mean, $47.75$, which produces the largest difference, not the smallest.\n\n**Test Day Takeaway:** With grouped data, a smallest-possible question is answered at an endpoint -- decide which end of each interval pushes the answer the direction you need before averaging.",
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
    question: "A trail-running series set next season's race entry fee $30\\%$ above this season's fee, then applied a $15\\%$ early-registration discount to that new fee. A runner who registers early pays \\$110.50. What was this season's entry fee, in dollars?",
    correctAnswer: "100",
    explanation: "**SAT Pattern: Markup–Discount Chain**\n\n**The correct answer is $100$.** The two steps multiply to $1.30(0.85) = 1.105$, so the original fee $f$ satisfies $1.105f = 110.50$ and $f = 100$.\n\n**The Fast Way (~45s):** Combine the factors: $1.30(0.85) = 1.105$, then $f = \\frac{110.50}{1.105} = 100$ dollars.\n\n**The Full Solution:**\n\nStep 1: Write the markup. Raising this season's fee $f$ by $30\\%$ gives a new fee of $1.30f$ dollars.\n\nStep 2: Apply the discount to that new fee. Taking $15\\%$ off leaves $85\\%$, so the early-registration price is $0.85(1.30f) = 1.105f$ dollars.\n\nStep 3: Solve $1.105f = 110.50$, so $f = 100$ dollars. Check: $30\\%$ above $\\$100$ is $\\$130$, and $15\\%$ off $\\$130$ is $\\$130 - \\$19.50 = \\$110.50$.\n\n**Common Mistakes:**\n\n* Treating the two changes as a net $15\\%$ increase gives $\\frac{110.50}{1.15} = 96.09$ dollars. Percent changes applied in sequence multiply; they do not add and subtract.\n* Reversing the operations on the paid amount, computing $110.50(0.70)(1.15) = 88.95$, applies each percent to the wrong base.\n* Answering $130$ reports the marked-up fee rather than this season's fee.\n\n**Test Day Takeaway:** A markup followed by a discount is one multiplication by the product of the two factors -- build that single factor before you solve for anything.",
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
    question: "A strength coach times a weighted sled push and finds the athlete gaining $2.5$ meters per second of speed during each second of the push. That acceleration equals $k$ kilometers per hour squared. What is the value of $k$?",
    choices: [
      // distractor: applies the seconds-to-hours factor once instead of squaring it, $2.5 \cdot 3{,}600 \div 1{,}000 = 9$
      { id: "A", text: "$9$" },
      // distractor: divides by $1{,}000$ twice, squaring the length conversion along with the time conversion, $2.5 \cdot 12.96 = 32.4$
      { id: "B", text: "$32.4$" },
      // distractor: squares nothing and leaves the length in meters, $2.5 \cdot 3{,}600 = 9{,}000$
      { id: "C", text: "$9{,}000$" },
      { id: "D", text: "$32{,}400$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Chained Unit Conversion — Squared Time**\n\n**Choice D is correct.** Converting $2.5$ meters per second squared multiplies by $3{,}600^2$ for the time and divides by $1{,}000$ for the length: $2.5 \\cdot \\frac{3{,}600^2}{1{,}000} = 32{,}400$.\n\n**The Fast Way (~60s):** One meter per second squared is $\\frac{3{,}600^2}{1{,}000} = 12{,}960$ kilometers per hour squared, so $2.5(12{,}960) = 32{,}400$.\n\n**The Full Solution:**\n\nStep 1: Write the rate with its units: $2.5 \\dfrac{\\text{m}}{\\text{s}^2}$.\n\nStep 2: Convert the length. Since $1$ kilometer is $1{,}000$ meters, multiply by $\\dfrac{1 \\text{ km}}{1{,}000 \\text{ m}}$, giving $0.0025 \\dfrac{\\text{km}}{\\text{s}^2}$.\n\nStep 3: Convert the time. Seconds appear squared, so the factor $\\dfrac{3{,}600 \\text{ s}}{1 \\text{ h}}$ is applied twice: $0.0025(3{,}600)(3{,}600) = 32{,}400$ kilometers per hour squared. Check: $32{,}400 \\div 12{,}960 = 2.5$, the original rate.\n\n**Why the wrong answers are tempting:**\n\n* Choice A ($9$): uses $3{,}600$ once instead of twice, $2.5(3{,}600) \\div 1{,}000 = 9$. The seconds unit is squared, so its conversion factor must be squared too.\n* Choice B ($32.4$): squares the length conversion as well, dividing by $1{,}000^2$ and computing $2.5(12.96) = 32.4$. Only the time unit carries an exponent.\n* Choice C ($9{,}000$): converts seconds to hours once and never converts meters to kilometers, $2.5(3{,}600) = 9{,}000$.\n\n**Test Day Takeaway:** Write the unit with its exponent before you convert -- every factor that touches a squared unit gets applied twice.",
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
    question: "A cycling coach records that an athlete's training load in week 2 is $k\\%$ of the load in week 1 and that the load in week 3 is $k\\%$ of the load in week 2. The week 3 load is $56.25\\%$ of the week 1 load. What is the value of $k$?",
    correctAnswer: "75",
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**The correct answer is $75$.** Two equal links compose to $\\left(\\frac{k}{100}\\right)^2 = 0.5625$, so $\\frac{k}{100} = 0.75$ and $k = 75$.\n\n**The Fast Way (~50s):** The same factor is applied twice, so it is $\\sqrt{0.5625} = 0.75$, which is $75\\%$.\n\n**The Full Solution:**\n\nStep 1: Name the week 1 load $L$. The week 2 load is $\\frac{k}{100}L$.\n\nStep 2: Apply the same link again. The week 3 load is $\\frac{k}{100}\\left(\\frac{k}{100}L\\right) = \\left(\\frac{k}{100}\\right)^2 L$.\n\nStep 3: Set that equal to the given comparison and solve: $\\left(\\frac{k}{100}\\right)^2 L = 0.5625L$, so $\\left(\\frac{k}{100}\\right)^2 = 0.5625$ and $\\frac{k}{100} = 0.75$, giving $k = 75$. Check: starting from a load of $100$, week 2 is $75$ and week 3 is $0.75(75) = 56.25$, which is $56.25\\%$ of $100$.\n\n**Common Mistakes:**\n\n* Halving the given percent gives $\\frac{56.25}{2} = 28.125$, which treats two multiplications as if they added.\n* Reading $56.25\\%$ as a single drop and answering $100 - 56.25 = 43.75$ describes the total decrease, not the repeated factor.\n* Averaging $100$ and $56.25$ gives $78.125$, close enough to look right but not a value that squares to $0.5625$.\n\n**Test Day Takeaway:** When the same percent link is applied twice, the overall factor is that decimal squared -- take a square root, never half the percent.",
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
    question: "A public health department screened $600$ samples for a virus at three collection sites. The table summarizes the results by site and by whether the sample tested positive or negative. One of these $600$ samples will be selected at random. What is the probability of selecting a sample that tested positive, given that the sample was not collected at Site 3?",
    diagram: { type: "twoWayTable", params: { headers: ["Site", "Positive", "Negative", "Total"], rows: [["Site 1", "12", "108", "120"], ["Site 2", "27", "153", "180"], ["Site 3", "21", "279", "300"], ["Total", "60", "540", "600"]] } },
    choices: [
      // distractor: divides the 39 positives from Sites 1 and 2 by the grand total 600 instead of the 300 samples not from Site 3
      { id: "A", text: "$\\frac{13}{200}$" },
      // distractor: reports the overall positive rate 60/600, ignoring the condition entirely
      { id: "B", text: "$\\frac{1}{10}$" },
      { id: "C", text: "$\\frac{13}{100}$" },
      // distractor: divides 39 by Site 1s total of 120 instead of the combined 300 from Sites 1 and 2
      { id: "D", text: "$\\frac{13}{40}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Restrict to Sites $1$ and $2$: $120 + 180 = 300$ samples, of which $12 + 27 = 39$ are positive, so the probability is $\\frac{39}{300} = \\frac{13}{100}$.\n\n**The Full Solution:**\nStep 1: Build the restricted group. \"Not collected at Site 3\" keeps Sites $1$ and $2$: $120 + 180 = 300$ samples. That count is the new denominator.\nStep 2: Count the favorable outcomes inside it. Positives from Sites $1$ and $2$ are $12 + 27 = 39$.\nStep 3: Divide and simplify. $\\frac{39}{300} = \\frac{13}{100}$. Check: $13\\%$ of $300$ is $39$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{13}{200}$): divides $39$ by the grand total $600$. Conditioning replaces the denominator with the size of the given group.\n* Choice B ($\\frac{1}{10}$): is $\\frac{60}{600}$, the overall positive rate, which ignores the Site 3 condition.\n* Choice D ($\\frac{13}{40}$): is $\\frac{39}{120}$, using only Site 1 in the denominator instead of Sites 1 and 2 together.\n\n**Test Day Takeaway:** A conditional probability replaces the denominator with the size of the given group. Build that group first, then count inside it.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "two-way-table-conditional",
    sourceRef: "pilot-m4-table-conditional",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-08-13"
  }
];
