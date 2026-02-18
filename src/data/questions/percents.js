// Practice questions for Percents module
// Questions are organized by SECTION (question type)

export const percentsQuestions = {
  // Section: Percent Fundamentals
  "Percent Fundamentals": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is 25% expressed as a decimal?",
      choices: [
        { id: "A", text: "0.025" },
        { id: "B", text: "0.25" },
        { id: "C", text: "2.5" },
        { id: "D", text: "25" }
      ],
      correctAnswer: "B",
      hint: "Remember that 'percent' means 'per hundred.' To convert a percent to a decimal, think about how many hundredths it represents.",
      explanation: "**Choice B is correct.** To convert a percent to a decimal, divide by 100 (equivalently, move the decimal point two places to the left).\n\n**Step 1:** Write the percent as a fraction over 100.\n$$25\\% = \\frac{25}{100}$$\n\n**Step 2:** Perform the division.\n$$\\frac{25}{100} = 0.25$$\n\n**Verification:** Convert back: $0.25 \\times 100 = 25\\%$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: arithmetic_slip] $0.025$ is $2.5\\%$, not $25\\%$. This results from moving the decimal point three places left instead of two — a common slip when students confuse the \"divide by 100\" rule.\n• Choice C: [TRAP: reversed_operation] $2.5$ results from moving the decimal one place to the right instead of two places to the left. This reverses the operation — multiplying by 10 instead of dividing by 100.\n• Choice D: [TRAP: percent_confusion] $25$ simply drops the percent sign without performing any conversion. The percent symbol means \"÷ 100,\" so it cannot just be removed.\n\n**Key concept:** To convert between percents and decimals: $\\text{Decimal} = \\frac{\\text{Percent}}{100}$ and $\\text{Percent} = \\text{Decimal} \\times 100$.\n\n**Calculator tip:** On Desmos, you can type `25/100` to confirm the decimal conversion, or use the percent key if available.",
      skills: ['percent-decimal-conversion']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Express 0.375 as a percent.",
      choices: [
        { id: "A", text: "0.375%" },
        { id: "B", text: "3.75%" },
        { id: "C", text: "37.5%" },
        { id: "D", text: "375%" }
      ],
      correctAnswer: "C",
      hint: "Converting a decimal to a percent is the reverse of converting a percent to a decimal. Think about what operation undoes division by 100.",
      explanation: "**Choice C is correct.** To convert a decimal to a percent, multiply by 100 (equivalently, move the decimal point two places to the right).\n\n**Step 1:** Multiply the decimal by 100.\n$$0.375 \\times 100 = 37.5$$\n\n**Step 2:** Attach the percent symbol.\n$$0.375 = 37.5\\%$$\n\n**Verification:** Convert back: $37.5\\% = 37.5 \\div 100 = 0.375$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: percent_confusion] $0.375\\%$ simply tacks on a percent sign without performing any conversion. This would actually equal $0.00375$ as a decimal — far smaller than the original value.\n• Choice B: [TRAP: partial_calculation] $3.75\\%$ results from moving the decimal only one place to the right instead of two. Students who partially complete the conversion often land here.\n• Choice D: [TRAP: arithmetic_slip] $375\\%$ results from moving the decimal three places to the right instead of two. This would mean $0.375$ is greater than $3$, which makes no sense since $0.375 < 1$.\n\n**Key concept:** $\\text{Percent} = \\text{Decimal} \\times 100$. A quick sense-check: any decimal less than 1 must convert to a percent less than 100%.\n\n**Calculator tip:** In Desmos, type `0.375 * 100` to verify. You can also check by entering `37.5/100` to confirm it returns $0.375$.",
      skills: ['percent-decimal-conversion']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "What is the following fraction expressed as a percent?",
      questionFormula: { fraction: { numerator: "3", denominator: "5" } },
      choices: [
        { id: "A", text: "35%" },
        { id: "B", text: "53%" },
        { id: "C", text: "60%" },
        { id: "D", text: "65%" }
      ],
      correctAnswer: "C",
      hint: "First convert the fraction to a decimal by dividing the numerator by the denominator, then convert that decimal to a percent.",
      explanation: "**Choice C is correct.** Convert the fraction to a decimal first, then to a percent.\n\n**Step 1:** Divide the numerator by the denominator.\n$$\\frac{3}{5} = 3 \\div 5 = 0.6$$\n\n**Step 2:** Multiply by 100 to convert to a percent.\n$$0.6 \\times 100 = 60\\%$$\n\n**Verification:** $60\\%$ of $5 = 0.60 \\times 5 = 3$ ✓ — the numerator checks out.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: percent_confusion] $35\\%$ comes from simply placing the digits 3 and 5 next to each other as \"35.\" A fraction is a division operation, not a concatenation of its digits.\n• Choice B: [TRAP: reversed_operation] $53\\%$ likely comes from reversing the fraction and computing $\\frac{5}{3} \\approx 1.67$, then misreading or truncating. Some students confuse which number goes on top.\n• Choice D: [TRAP: arithmetic_slip] $65\\%$ is close to the correct answer but results from a careless arithmetic error — perhaps adding 5 instead of correctly computing the division.\n\n**Key concept:** $\\frac{a}{b} = a \\div b$, then multiply by 100 to get a percent. Equivalently: $\\frac{a}{b} \\times 100\\%$.\n\n**Calculator tip:** In Desmos, type `3/5 * 100` to get the percent directly, or just `3/5` to see the decimal $0.6$.",
      skills: ['percent-decimal-conversion']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Which value is the greatest?",
      questionFormula: { text: "45%, 0.4, or ", fraction: { numerator: "2", denominator: "5" } },
      choices: [
        { id: "A", text: "45%" },
        { id: "B", text: "0.4" },
        { id: "C", fraction: { numerator: "2", denominator: "5" } },
        { id: "D", text: "They are all equal" }
      ],
      correctAnswer: "A",
      hint: "To compare values in different forms, convert them all to the same form. Try converting everything to decimals first.",
      explanation: "**Choice A is correct.** To compare values in different forms, convert everything to the same form (decimals work best).\n\n**Step 1:** Convert $45\\%$ to a decimal.\n$$45\\% = \\frac{45}{100} = 0.45$$\n\n**Step 2:** $0.4$ is already a decimal: $0.4 = 0.40$.\n\n**Step 3:** Convert $\\frac{2}{5}$ to a decimal.\n$$\\frac{2}{5} = 2 \\div 5 = 0.40$$\n\n**Step 4:** Compare all three values.\n$$0.45 > 0.40 = 0.40$$\n\n**Verification:** $45\\% = 0.45$ and the other two both equal $0.40$, so $45\\%$ is the greatest. ✓\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: percent_confusion] $0.4 = 0.40$, which is less than $0.45$. Students who think $45\\%$ equals $0.045$ (dividing by 1000 instead of 100) would incorrectly conclude that $0.4$ is larger.\n• Choice C: [TRAP: percent_confusion] $\\frac{2}{5} = 0.40$, which is equal to $0.4$ but still less than $0.45$. This is a distractor for students who miscompute the fraction.\n• Choice D: [TRAP: partial_calculation] The two non-percent values are indeed equal ($0.4 = \\frac{2}{5}$), which tempts students into thinking all three are equal. But $45\\%$ = $0.45 \\neq 0.40$.\n\n**Key concept:** When comparing mixed formats, convert all values to decimals: $\\text{percent} \\div 100$, $\\text{fraction} = \\text{numerator} \\div \\text{denominator}$.\n\n**Calculator tip:** In Desmos, enter each value on a separate line: `45/100`, `0.4`, and `2/5` — then compare the outputs directly.",
      skills: ['percent-decimal-conversion']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "What percent of 200 is 50?",
      choices: [
        { id: "A", text: "4%" },
        { id: "B", text: "25%" },
        { id: "C", text: "40%" },
        { id: "D", text: "250%" }
      ],
      correctAnswer: "B",
      hint: "Set up the equation: (unknown percent) × 200 = 50. Solve for the unknown by dividing, then convert to a percent.",
      explanation: "**Choice B is correct.** Translate the English into an equation using the structure: \"what percent\" = unknown, \"of\" = multiply, \"is\" = equals.\n\n**Step 1:** Set up the equation. Let $x$ be the unknown percent.\n$$\\frac{x}{100} \\times 200 = 50$$\n\n**Step 2:** Simplify and solve.\n$$2x = 50$$\n$$x = 25$$\n\nSo the answer is $25\\%$.\n\n**Verification:** $25\\%$ of $200 = 0.25 \\times 200 = 50$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] $4\\%$ comes from computing $\\frac{200}{50} = 4$ and interpreting it as $4\\%$. This reverses the division — you need $\\frac{50}{200}$, not $\\frac{200}{50}$.\n• Choice C: [TRAP: partial_calculation] $40\\%$ may come from confusing $\\frac{50}{200}$ with $\\frac{80}{200}$ or from a misremembering of the calculation. Some students mistakenly compute $200 - 50 = 150$ and then get lost.\n• Choice D: [TRAP: reversed_operation] $250\\%$ comes from computing $\\frac{50}{200} \\times 1000$ or from computing $\\frac{200}{50} \\times 100 = 400$ then misrecording. This fundamentally reverses which number is the part and which is the whole.\n\n**Key concept:** The percent formula: $\\frac{\\text{Part}}{\\text{Whole}} \\times 100 = \\text{Percent}$. Here: $\\frac{50}{200} \\times 100 = 25\\%$.\n\n**Calculator tip:** In Desmos, type `50/200 * 100` to get the percent directly.",
      skills: ['percent-decimal-conversion']
    }
  ],

  // Section: Percent Of Questions
  "Percent Of Questions": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is 30% of 80?",
      choices: [
        { id: "A", text: "24" },
        { id: "B", text: "26.67" },
        { id: "C", text: "50" },
        { id: "D", text: "110" }
      ],
      correctAnswer: "A",
      hint: "The word 'of' in math means multiply. Convert the percent to a decimal first, then multiply by the whole amount.",
      explanation: "**Choice A is correct.** The word \"of\" in percent problems means multiply.\n\n**Step 1:** Convert the percent to a decimal.\n$$30\\% = 0.30$$\n\n**Step 2:** Multiply by the whole.\n$$0.30 \\times 80 = 24$$\n\n**Verification:** $\\frac{24}{80} \\times 100 = 30\\%$ ✓\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: reversed_operation] $26.67$ comes from computing $\\frac{80}{3} \\approx 26.67$, which divides 80 by 3 instead of multiplying 80 by $0.30$. Students confuse \"30% of 80\" with \"80 divided by 3.\"\n• Choice C: [TRAP: partial_calculation] $50$ may result from adding $80 - 30 = 50$ or some other misapplication. Subtracting the percent value from the whole is a common conceptual error.\n• Choice D: [TRAP: percent_confusion] $110 = 80 + 30$. This adds the percent number to the whole, treating $30\\%$ as if it were the number $30$. Remember: $30\\%$ means $0.30$, not $30$.\n\n**Key concept:** $\\text{Percent of a number} = \\frac{\\text{Percent}}{100} \\times \\text{Number}$. The word \"of\" always signals multiplication.\n\n**Calculator tip:** In Desmos, type `0.30 * 80` or equivalently `30/100 * 80` for a quick calculation.",
      skills: ['percent-of-value', 'percent-word-problems']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If 40% of a number is 28, what is the number?",
      choices: [
        { id: "A", text: "11.2" },
        { id: "B", text: "68" },
        { id: "C", text: "70" },
        { id: "D", text: "112" }
      ],
      correctAnswer: "C",
      hint: "Let the unknown number be x. Write an equation: 0.40 × x = 28, then solve for x by dividing both sides.",
      explanation: "**Choice C is correct.** Set up an equation where the unknown is the whole.\n\n**Step 1:** Translate the problem into an equation. Let $x$ be the unknown number.\n$$0.40 \\times x = 28$$\n\n**Step 2:** Solve for $x$ by dividing both sides by $0.40$.\n$$x = \\frac{28}{0.40} = 70$$\n\n**Verification:** $40\\%$ of $70 = 0.40 \\times 70 = 28$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] $11.2 = 0.40 \\times 28$. This multiplies 28 by $0.40$ instead of dividing. The student applied the percent to the part instead of solving for the whole.\n• Choice B: [TRAP: percent_confusion] $68 = 28 + 40$. This adds the percent number (40) to the given value, treating $40\\%$ as the integer $40$. Percents represent ratios, not additive values.\n• Choice D: [TRAP: arithmetic_slip] $112 = 28 \\times 4$. This comes from multiplying by 4 instead of dividing by $0.40$. While $\\frac{1}{0.40} = 2.5$, the student may have confused $40\\%$ with $25\\%$ (which would require multiplying by 4).\n\n**Key concept:** When you know the percent and the part, find the whole: $\\text{Whole} = \\frac{\\text{Part}}{\\text{Percent as decimal}}$.\n\n**Calculator tip:** In Desmos, type `28 / 0.40` to solve directly. Always double-check by computing `0.40 * 70` to verify.",
      skills: ['percent-of-value', 'percent-word-problems']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A shirt originally costs $60. If it is 15% off, what is the discount amount?",
      choices: [
        { id: "A", text: "$4" },
        { id: "B", text: "$9" },
        { id: "C", text: "$45" },
        { id: "D", text: "$51" }
      ],
      correctAnswer: "B",
      hint: "The discount amount is the percent off applied to the original price. Find 15% of the original price.",
      explanation: "**Choice B is correct.** The discount amount is the percent off applied to the original price.\n\n**Step 1:** Convert the percent to a decimal.\n$$15\\% = 0.15$$\n\n**Step 2:** Multiply by the original price to find the discount.\n$$\\text{Discount} = 0.15 \\times 60 = \\$9$$\n\n**Verification:** Sale price = $60 - 9 = \\$51$. Also: $85\\%$ of $60 = 0.85 \\times 60 = \\$51$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: arithmetic_slip] $\\$4$ does not correspond to any standard calculation with these numbers. This may result from a multiplication error such as computing $0.15 \\times 60$ incorrectly or confusing $15\\%$ with a different percentage.\n• Choice C: [TRAP: percent_confusion] $\\$45 = 60 - 15$ results from subtracting the percent number directly from the price, treating $15\\%$ as $\\$15$. The actual sale price is $\\$51$ (not $\\$45$), and the question asks for the discount amount, not the sale price. This double error — wrong operation and answering the wrong question — is a common percent trap.\n• Choice D: [TRAP: partial_calculation] $\\$51 = 60 - 9$ is the final sale price, not the discount amount. The question specifically asks \"what is the discount amount,\" so students who compute everything correctly but answer the wrong question land here.\n\n**Key concept:** $\\text{Discount Amount} = \\text{Percent Off} \\times \\text{Original Price}$. Read carefully: are you asked for the discount or the sale price?\n\n**Calculator tip:** In Desmos, type `0.15 * 60` for the discount. For the sale price, type `60 - 0.15 * 60` or `0.85 * 60`.",
      skills: ['percent-of-value', 'percent-word-problems']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In a class of 25 students, 60% are girls. How many boys are in the class?",
      choices: [
        { id: "A", text: "10" },
        { id: "B", text: "15" },
        { id: "C", text: "20" },
        { id: "D", text: "40" }
      ],
      correctAnswer: "A",
      hint: "If 60% are girls, what percent are boys? Remember that the total must equal 100%.",
      explanation: "**Choice A is correct.** Since 60% are girls, the remaining 40% must be boys.\n\n**Step 1:** Find the percent that are boys.\n$$100\\% - 60\\% = 40\\%$$\n\n**Step 2:** Calculate 40% of 25.\n$$0.40 \\times 25 = 10$$\n\n**Verification:** Girls = $0.60 \\times 25 = 15$. Boys = $25 - 15 = 10$. Total = $15 + 10 = 25$ ✓\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: partial_calculation] $15$ is the number of girls ($60\\%$ of $25$), not boys. This is the most common trap — students correctly compute $60\\%$ of $25$ but forget the question asks for boys, not girls.\n• Choice C: [TRAP: arithmetic_slip] $20$ might come from computing $80\\%$ of $25$ or from a subtraction error like $25 - 5 = 20$. Always recheck which percent applies to which group.\n• Choice D: [TRAP: percent_confusion] $40$ cannot be the answer since there are only 25 students total. This may result from confusing $40\\%$ with the number $40$, or from computing $25 + 15 = 40$.\n\n**Key concept:** When a problem gives you one group's percent, the complement is $100\\% - \\text{given percent}$. Always check: does your answer make sense relative to the total?\n\n**Calculator tip:** In Desmos, compute both groups: `0.60 * 25` for girls and `0.40 * 25` for boys. Verify they sum to 25.",
      skills: ['percent-of-value', 'percent-word-problems']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A store sold 120 items on Monday. If this represents 24% of their weekly sales, what were the total weekly sales?",
      choices: [
        { id: "A", text: "28.8 items" },
        { id: "B", text: "144 items" },
        { id: "C", text: "500 items" },
        { id: "D", text: "576 items" }
      ],
      correctAnswer: "C",
      hint: "You know that 24% of the total equals 120. Set up an equation with the total as the unknown and solve for it.",
      explanation: "**Choice C is correct.** Monday's sales (120 items) represent 24% of the weekly total. We need to find the whole.\n\n**Step 1:** Set up the equation. Let $x$ = total weekly sales.\n$$0.24 \\times x = 120$$\n\n**Step 2:** Solve for $x$.\n$$x = \\frac{120}{0.24} = 500$$\n\n**Verification:** $24\\%$ of $500 = 0.24 \\times 500 = 120$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] $28.8 = 0.24 \\times 120$. This multiplies the part by the percent instead of dividing. The student found \"24% of 120\" instead of solving \"24% of what = 120.\" This is the classic reversed-operation trap in percent problems.\n• Choice B: [TRAP: partial_calculation] $144 = 120 + 24$. This adds the percent number to the given value, treating $24\\%$ as the integer $24$. Percents are ratios, not additive quantities.\n• Choice D: [TRAP: arithmetic_slip] $576 = 120 \\times 4.8$. This may come from dividing by $\\frac{24}{100}$ incorrectly, perhaps computing $120 \\times \\frac{100}{24}$ with a calculator error, or from accidentally computing $120 \\div 0.024$ (moving the decimal one place too far).\n\n**Key concept:** $\\text{Whole} = \\frac{\\text{Part}}{\\text{Percent (as decimal)}}$. When the part and percent are known, always divide to find the whole.\n\n**Calculator tip:** In Desmos, type `120 / 0.24`. A useful sanity check: since $24\\%$ is roughly $\\frac{1}{4}$, the total should be roughly $120 \\times 4 = 480$ — close to $500$.",
      skills: ['percent-of-value', 'percent-word-problems']
    }
  ],

  // Section: Percent Change Questions
  "Percent Change Questions": [
    {
      id: 1,
      difficulty: "easy",
      question: "A price increases from $80 to $100. What is the percent increase?",
      choices: [
        { id: "A", text: "20%" },
        { id: "B", text: "25%" },
        { id: "C", text: "80%" },
        { id: "D", text: "125%" }
      ],
      correctAnswer: "B",
      hint: "Use the percent change formula: (change ÷ original) × 100. First find how much the price changed, then divide by the starting value.",
      explanation: "**Choice B is correct.** Use the percent change formula with the original value as the denominator.\n\n**Step 1:** Find the amount of change.\n$$\\text{Change} = 100 - 80 = \\$20$$\n\n**Step 2:** Divide by the original value and multiply by 100.\n$$\\text{Percent increase} = \\frac{20}{80} \\times 100 = 25\\%$$\n\n**Verification:** $80 \\times 1.25 = 100$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: percent_confusion] $20\\%$ comes from seeing the $\\$20$ change and assuming it equals $20\\%$. But percent change depends on the original value — $\\$20$ out of $\\$80$ is $25\\%$, not $20\\%$. Confusing absolute change with percent change is extremely common.\n• Choice C: [TRAP: reversed_operation] $80\\%$ comes from $\\frac{80}{100} \\times 100 = 80\\%$, which divides the original by the new value. Percent change always uses the original in the denominator, not the new value.\n• Choice D: [TRAP: partial_calculation] $125\\%$ comes from $\\frac{100}{80} \\times 100 = 125\\%$. This computes what the new value is as a percent of the original, not the percent increase. The increase is $125\\% - 100\\% = 25\\%$.\n\n**Key concept:** $$\\text{Percent Change} = \\frac{\\text{New} - \\text{Original}}{\\text{Original}} \\times 100$$\nThe denominator is always the **original** (starting) value.\n\n**Calculator tip:** In Desmos, type `(100 - 80) / 80 * 100` to compute the percent increase in one step.",
      skills: ['percent-change']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A population decreases from 500 to 400. What is the percent decrease?",
      choices: [
        { id: "A", text: "10%" },
        { id: "B", text: "20%" },
        { id: "C", text: "25%" },
        { id: "D", text: "100%" }
      ],
      correctAnswer: "B",
      hint: "Percent decrease uses the same formula as percent increase: (change ÷ original) × 100. The original is always the starting value.",
      explanation: "**Choice B is correct.** Apply the percent change formula using the original (starting) value as the denominator.\n\n**Step 1:** Find the amount of decrease.\n$$\\text{Decrease} = 500 - 400 = 100$$\n\n**Step 2:** Divide by the original and multiply by 100.\n$$\\text{Percent decrease} = \\frac{100}{500} \\times 100 = 20\\%$$\n\n**Verification:** $500 \\times 0.80 = 400$ ✓ (A $20\\%$ decrease means you retain $80\\%$.)\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: arithmetic_slip] $10\\%$ may come from computing $\\frac{100}{500} = 0.2$ and then misreading $0.2$ as $10\\%$ instead of $20\\%$. Converting $0.2$ to a percent requires multiplying by 100.\n• Choice C: [TRAP: reversed_operation] $25\\%$ comes from $\\frac{100}{400} \\times 100 = 25\\%$, which uses the new value ($400$) as the denominator instead of the original ($500$). Percent decrease always references the starting value.\n• Choice D: [TRAP: percent_confusion] $100\\%$ comes from seeing the change of $100$ and confusing it with $100\\%$. A decrease of $100\\%$ would mean the population dropped to zero!\n\n**Key concept:** $$\\text{Percent Decrease} = \\frac{\\text{Original} - \\text{New}}{\\text{Original}} \\times 100$$\nAlways divide by the original. A $20\\%$ decrease means the new value is $80\\%$ of the original.\n\n**Calculator tip:** In Desmos, type `(500 - 400) / 500 * 100` for a direct calculation. Sanity check: $\\frac{100}{500} = \\frac{1}{5} = 0.2 = 20\\%$.",
      skills: ['percent-change']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A stock increases by 20% one year and decreases by 20% the next year. If it started at $100, what is its final value?",
      choices: [
        { id: "A", text: "$96" },
        { id: "B", text: "$100" },
        { id: "C", text: "$104" },
        { id: "D", text: "$120" }
      ],
      correctAnswer: "A",
      hint: "Work through each change step by step. After the increase, find the new value, then apply the decrease to that new value, not the original.",
      explanation: "**Choice A is correct.** Apply each percent change sequentially — the second change applies to the result of the first, not the original.\n\n**Step 1:** Apply the 20% increase to $100.\n$$\\$100 \\times 1.20 = \\$120$$\n\n**Step 2:** Apply the 20% decrease to the new value of $120.\n$$\\$120 \\times 0.80 = \\$96$$\n\n**Verification:** Using multipliers: $100 \\times 1.20 \\times 0.80 = 100 \\times 0.96 = 96$ ✓\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: percent_confusion] $\\$100$ assumes that a $20\\%$ increase followed by a $20\\%$ decrease \"cancels out\" and returns to the original. This is the most common misconception in successive percent change. The percents are applied to different bases ($100$ vs. $120$), so they do not cancel.\n• Choice C: [TRAP: reversed_operation] $\\$104$ may come from incorrectly computing $100 \\times 1.20 \\times 0.80$ with an arithmetic error, or from applying the decrease before the increase to a different base.\n• Choice D: [TRAP: partial_calculation] $\\$120$ is only the value after the first year's increase. This answer ignores the second year's decrease entirely — the student stopped too early.\n\n**Key concept:** Successive percent changes multiply: $\\text{Final} = \\text{Original} \\times (1 + r_1) \\times (1 + r_2)$. A $+20\\%$ then $-20\\%$ gives $1.20 \\times 0.80 = 0.96$, which is a net $4\\%$ decrease. Equal percent increases and decreases never cancel.\n\n**Calculator tip:** In Desmos, type `100 * 1.20 * 0.80` to compute both changes in one line. You can generalize: `100 * (1 + 0.20) * (1 - 0.20)` clearly shows the structure.",
      skills: ['percent-change', 'successive-percent-change']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A shirt's price was reduced by 30% to $35. What was the original price?",
      choices: [
        { id: "A", text: "$45.50" },
        { id: "B", text: "$50" },
        { id: "C", text: "$65" },
        { id: "D", text: "$105" }
      ],
      correctAnswer: "B",
      hint: "If the price was reduced by 30%, the sale price represents 70% of the original. Set up an equation where 70% of the original equals $35.",
      explanation: "**Choice B is correct.** A 30% reduction means the sale price is 70% of the original.\n\n**Step 1:** Express the relationship algebraically. Let $P$ = original price.\n$$P \\times (1 - 0.30) = 35$$\n$$0.70P = 35$$\n\n**Step 2:** Solve for $P$.\n$$P = \\frac{35}{0.70} = 50$$\n\n**Verification:** $30\\%$ of $50 = 15$. Sale price: $50 - 15 = 35$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] $\\$45.50 = 35 \\times 1.30$. This increases $35$ by $30\\%$ instead of recognizing that $35$ is $70\\%$ of the original. \"Reduced by 30%\" means you pay 70%, so you divide by $0.70$, not multiply by $1.30$.\n• Choice C: [TRAP: percent_confusion] $\\$65 = 35 + 30$. This adds the percent number ($30$) directly to the sale price as if it were a dollar amount. A $30\\%$ discount is not a $\\$30$ discount unless the original price happens to be $\\$100$.\n• Choice D: [TRAP: reversed_operation] $\\$105 = 35 \\times 3$. This may come from misinterpreting \"30% off\" as \"the price is $\\frac{1}{3}$ of the original,\" leading to $35 \\times 3 = 105$. But $30\\% \\neq \\frac{1}{3}$; $30\\% = \\frac{3}{10}$.\n\n**Key concept:** When working backward from a discounted price: $\\text{Original} = \\frac{\\text{Sale Price}}{1 - \\text{Discount Rate}}$. A $30\\%$ off sale means you pay $70\\%$, so divide by $0.70$.\n\n**Calculator tip:** In Desmos, type `35 / 0.70`. To verify, type `50 * 0.70` and confirm you get $35$.",
      skills: ['percent-change']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "If a number is increased by 50% and then decreased by 50%, the final result is what percent of the original?",
      choices: [
        { id: "A", text: "25%" },
        { id: "B", text: "50%" },
        { id: "C", text: "75%" },
        { id: "D", text: "100%" }
      ],
      correctAnswer: "C",
      hint: "Try picking a simple starting number like 100. Apply the 50% increase first, then apply the 50% decrease to your new value.",
      explanation: "**Choice C is correct.** Use a convenient starting value and apply each percent change to the running total.\n\n**Step 1:** Let the original number be $100$ (choosing 100 makes percent calculations easy).\n\n**Step 2:** Increase by 50%.\n$$100 \\times 1.50 = 150$$\n\n**Step 3:** Decrease the result by 50%.\n$$150 \\times 0.50 = 75$$\n\n**Step 4:** Express as a percent of the original.\n$$\\frac{75}{100} \\times 100 = 75\\%$$\n\n**Verification:** Using multipliers directly: $1.50 \\times 0.50 = 0.75 = 75\\%$ of the original ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: arithmetic_slip] $25\\%$ is the amount lost, not the amount remaining. The result is $75\\%$ of the original, meaning $25\\%$ was lost. Students who compute the net loss instead of the final value end up here.\n• Choice B: [TRAP: partial_calculation] $50\\%$ may come from thinking the $50\\%$ decrease is the final answer, or from averaging the two changes ($+50\\%$ and $-50\\%$ average to $0\\%$... but that is not how successive percent changes work).\n• Choice D: [TRAP: percent_confusion] $100\\%$ assumes the changes cancel: $+50\\% - 50\\% = 0\\%$ change. This additive reasoning is incorrect because each percent change applies to a different base. The $50\\%$ decrease applies to $150$, not $100$.\n\n**Key concept:** Successive percent changes are multiplicative, not additive:\n$$\\text{Net multiplier} = (1 + r_1)(1 + r_2) = 1.50 \\times 0.50 = 0.75$$\nThis represents a net $25\\%$ decrease, not $0\\%$. In general, $(1 + r)(1 - r) = 1 - r^2$, so equal increases and decreases always produce a net loss.\n\n**Calculator tip:** In Desmos, type `1.50 * 0.50` to find the combined multiplier. Or try `(1 + 0.50) * (1 - 0.50)` to see the algebraic structure: $1 - 0.50^2 = 1 - 0.25 = 0.75$.",
      skills: ['percent-change', 'successive-percent-change']
    }
  ],

  // Section: Percent Model Questions
  "Percent Model Questions": [
    {
      id: 1,
      difficulty: "easy",
      question: "A survey found that 35% of 400 respondents prefer product A. How many respondents prefer product A?",
      choices: [
        { id: "A", text: "35" },
        { id: "B", text: "114" },
        { id: "C", text: "140" },
        { id: "D", text: "365" }
      ],
      correctAnswer: "C",
      hint: "This is a 'percent of' problem. Convert 35% to a decimal and multiply by the total number of respondents.",
      explanation: "**Choice C is correct.** This is a direct \"percent of\" calculation.\n\n**Step 1:** Convert the percent to a decimal.\n$$35\\% = 0.35$$\n\n**Step 2:** Multiply by the total number of respondents.\n$$0.35 \\times 400 = 140$$\n\n**Verification:** $\\frac{140}{400} \\times 100 = 35\\%$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: percent_confusion] $35$ confuses the percent with the count. $35\\%$ does not mean $35$ people — it means $35$ out of every $100$, so for $400$ respondents you need $35 \\times 4 = 140$.\n• Choice B: [TRAP: arithmetic_slip] $114$ does not correspond to a clean calculation with these numbers. This likely results from a multiplication error (e.g., computing $0.35 \\times 400$ incorrectly as $0.285 \\times 400$).\n• Choice D: [TRAP: reversed_operation] $365 = 400 - 35$. This subtracts the percent number from the total, treating $35\\%$ as the integer $35$. This gives the complement minus 1, which has no mathematical meaning here.\n\n**Key concept:** $\\text{Part} = \\frac{\\text{Percent}}{100} \\times \\text{Whole}$. Quick mental math: $35\\%$ of $400$ = $35 \\times 4 = 140$ (since $\\frac{400}{100} = 4$).\n\n**Calculator tip:** In Desmos, type `0.35 * 400`. For mental math: $10\\%$ of $400 = 40$, so $35\\% = 3 \\times 40 + \\frac{1}{2} \\times 40 = 120 + 20 = 140$.",
      skills: ['percent-word-problems', 'percent-of-value']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In a solution, 15% is acid and the rest is water. If there are 120 mL of water, how much acid is there?",
      choices: [
        { id: "A", text: "18 mL" },
        { id: "B", text: "21.18 mL" },
        { id: "C", text: "102 mL" },
        { id: "D", text: "138 mL" }
      ],
      correctAnswer: "B",
      hint: "If acid is 15% of the solution, then water must be 85%. Use the water amount to find the total solution first, then calculate the acid.",
      explanation: "**Choice B is correct.** Since acid is 15% of the total, water is 85%. Use the water amount to find the total, then the acid.\n\n**Step 1:** Determine water's percentage.\n$$\\text{Water} = 100\\% - 15\\% = 85\\%$$\n\n**Step 2:** Find the total solution volume.\n$$0.85 \\times \\text{Total} = 120$$\n$$\\text{Total} = \\frac{120}{0.85} \\approx 141.18 \\text{ mL}$$\n\n**Step 3:** Calculate the acid amount.\n$$\\text{Acid} = 0.15 \\times 141.18 \\approx 21.18 \\text{ mL}$$\n\n**Verification:** $21.18 + 120 = 141.18$ total, and $\\frac{21.18}{141.18} \\approx 0.15 = 15\\%$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: percent_confusion] $18 = 0.15 \\times 120$. This computes $15\\%$ of the water, not $15\\%$ of the total solution. The acid percentage refers to the total solution, not just the water portion.\n• Choice C: [TRAP: reversed_operation] $102 = 120 - 18$. This subtracts $15\\%$ of water from the water amount, which has no meaningful interpretation in this problem.\n• Choice D: [TRAP: partial_calculation] $138 = 120 + 18$. This adds $15\\%$ of water to the water amount, essentially computing $115\\%$ of the water. But the acid is $15\\%$ of the total solution, not $15\\%$ of the water.\n\n**Key concept:** When given a component amount and its complementary percent, first find the total: $\\text{Total} = \\frac{\\text{Component}}{\\text{Component's percent as decimal}}$. Then compute the other component.\n\n**Calculator tip:** In Desmos, compute the full chain: `0.15 * (120 / 0.85)`. Or equivalently: `120 * (15/85)` since $\\frac{\\text{acid}}{\\text{water}} = \\frac{15}{85}$.",
      skills: ['percent-word-problems', 'percent-of-value']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A salesperson earns a 6% commission on sales. If they earn $450 in commission, what were their total sales?",
      choices: [
        { id: "A", text: "$27" },
        { id: "B", text: "$2,700" },
        { id: "C", text: "$7,500" },
        { id: "D", text: "$75,000" }
      ],
      correctAnswer: "C",
      hint: "Commission equals the percent rate times total sales. Set up the equation: 6% × (total sales) = $450, then solve for total sales.",
      explanation: "**Choice C is correct.** Commission equals the rate times total sales. Solve for total sales.\n\n**Step 1:** Set up the equation. Let $S$ = total sales.\n$$0.06 \\times S = 450$$\n\n**Step 2:** Solve for $S$.\n$$S = \\frac{450}{0.06} = 7{,}500$$\n\n**Verification:** $6\\%$ of $\\$7{,}500 = 0.06 \\times 7{,}500 = \\$450$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] $\\$27 = 0.06 \\times 450$. This computes $6\\%$ of the commission instead of dividing. The student applied the percent to the wrong quantity — the commission is the result of applying $6\\%$, not the base.\n• Choice B: [TRAP: partial_calculation] $\\$2{,}700 = 450 \\times 6$. This multiplies the commission by the integer $6$ instead of dividing by the decimal $0.06$. Dividing by $0.06$ is equivalent to multiplying by $\\frac{100}{6} \\approx 16.67$, not by $6$. Students who forget to convert the percent to a decimal before using it in division end up here.\n• Choice D: [TRAP: arithmetic_slip] $\\$75{,}000 = \\frac{450}{0.006}$. This results from using $0.006$ instead of $0.06$ — the student moved the decimal one place too far when converting $6\\%$ to a decimal.\n\n**Key concept:** $\\text{Commission} = \\text{Rate} \\times \\text{Sales}$, so $\\text{Sales} = \\frac{\\text{Commission}}{\\text{Rate}}$. When dividing by a small decimal like $0.06$, the result should be much larger than the dividend.\n\n**Calculator tip:** In Desmos, type `450 / 0.06`. Sanity check: $6\\%$ is roughly $\\frac{1}{17}$, so sales $\\approx 450 \\times 17 \\approx 7{,}650$ — close to $7{,}500$.",
      skills: ['percent-word-problems', 'percent-of-value']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A tank is 40% full and contains 240 gallons of water. What is the total capacity of the tank?",
      choices: [
        { id: "A", text: "96 gallons" },
        { id: "B", text: "360 gallons" },
        { id: "C", text: "600 gallons" },
        { id: "D", text: "960 gallons" }
      ],
      correctAnswer: "C",
      hint: "The 240 gallons represents 40% of the tank's total capacity. Set up an equation to find what number 240 is 40% of.",
      explanation: "**Choice C is correct.** 240 gallons is the part, 40% is the rate — solve for the whole (total capacity).\n\n**Step 1:** Set up the equation. Let $C$ = total capacity.\n$$0.40 \\times C = 240$$\n\n**Step 2:** Solve for $C$.\n$$C = \\frac{240}{0.40} = 600$$\n\n**Verification:** $40\\%$ of $600 = 0.40 \\times 600 = 240$ gallons ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] $96 = 0.40 \\times 240$. This computes $40\\%$ of $240$ instead of dividing by $0.40$. The student treated $240$ as the whole, but $240$ is the part (the water currently in the tank).\n• Choice B: [TRAP: partial_calculation] $360 = 240 + 120$ or equivalently $240 \\times 1.5$. This might come from adding $\\frac{240}{2}$ to $240$, confused reasoning about \"the remaining $60\\%$.\" The error is computing $60\\%$ of $240 = 144$ incorrectly or using a wrong approach altogether.\n• Choice D: [TRAP: arithmetic_slip] $960 = 240 \\times 4$. This multiplies by $4$ instead of dividing by $0.40$ (which equals multiplying by $2.5$). The student may have confused $40\\%$ with $25\\%$, where dividing by $0.25$ does equal multiplying by $4$.\n\n**Key concept:** $\\text{Whole} = \\frac{\\text{Part}}{\\text{Rate}}$. When you know the part and the percent, divide to find the whole. Quick check: $40\\%$ is $\\frac{2}{5}$, so the whole = $240 \\times \\frac{5}{2} = 600$.\n\n**Calculator tip:** In Desmos, type `240 / 0.40`. Alternative: since $40\\% = \\frac{2}{5}$, type `240 * 5 / 2` for the same result.",
      skills: ['percent-word-problems', 'percent-of-value']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A test has 80 questions. To pass, you need at least 75%. What is the minimum number of questions you must answer correctly?",
      choices: [
        { id: "A", text: "55" },
        { id: "B", text: "60" },
        { id: "C", text: "75" },
        { id: "D", text: "80" }
      ],
      correctAnswer: "B",
      hint: "Find 75% of the total number of questions. This gives you the minimum number of correct answers needed to pass.",
      explanation: "**Choice B is correct.** The minimum number of correct answers is 75% of the total questions.\n\n**Step 1:** Convert the passing threshold to a decimal.\n$$75\\% = 0.75$$\n\n**Step 2:** Multiply by the total number of questions.\n$$0.75 \\times 80 = 60$$\n\n**Verification:** $\\frac{60}{80} = 0.75 = 75\\%$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: arithmetic_slip] $55$ does not result from a standard calculation with $75\\%$ and $80$. It may come from a multiplication error or from confusing this with a different threshold (e.g., roughly $69\\%$). Always double-check: $\\frac{55}{80} = 68.75\\% \\neq 75\\%$.\n• Choice C: [TRAP: percent_confusion] $75$ confuses the percent with the count. The passing rate is $75\\%$, not $75$ questions. On an $80$-question test, $75$ correct would be $\\frac{75}{80} = 93.75\\%$ — well above the threshold.\n• Choice D: [TRAP: percent_confusion] $80$ is the total number of questions, representing $100\\%$. You need $75\\%$, not $100\\%$, to pass. This answer confuses the total with the threshold.\n\n**Key concept:** $\\text{Minimum correct} = \\text{Required percent (as decimal)} \\times \\text{Total questions}$. When this yields a whole number, that is your exact minimum. If it yields a non-integer, round up (since you cannot answer a fractional question correctly).\n\n**Calculator tip:** In Desmos, type `0.75 * 80`. Quick mental math: $75\\% = \\frac{3}{4}$, so $\\frac{3}{4} \\times 80 = 60$.",
      skills: ['percent-word-problems', 'percent-of-value']
    }
  ]
};
