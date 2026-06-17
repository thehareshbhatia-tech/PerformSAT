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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** A percent is a number out of $100$, so $25\\%$ means $\\frac{25}{100}=0.25$. Move the decimal two places left.\n\n**The Full Solution:**\nStep 1: Write the percent as a fraction over $100$: $25\\% = \\frac{25}{100}$.\nStep 2: Divide: $\\frac{25}{100}=0.25$.\nStep 3: Check by converting back: $0.25 \\times 100 = 25\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.025$): moved the decimal three places left instead of two — that is $2.5\\%$.\n* Choice C ($2.5$): moved the decimal one place to the right (multiplied by $10$) instead of two places left.\n* Choice D ($25$): dropped the percent sign without dividing by $100$.\n\n**Test Day Takeaway:** Percent to decimal means divide by $100$ — shift the decimal two places to the left.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Decimal to percent means multiply by $100$, so $0.375 \\times 100 = 37.5$, giving $37.5\\%$.\n\n**The Full Solution:**\nStep 1: To convert a decimal to a percent, move the decimal two places to the right.\nStep 2: $0.375 \\to 37.5$, so $0.375 = 37.5\\%$.\nStep 3: Check by converting back: $37.5\\% = 37.5 \\div 100 = 0.375$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.375\\%$): tacked on a percent sign without multiplying — that value equals $0.00375$.\n* Choice B ($3.75\\%$): moved the decimal only one place right instead of two.\n* Choice D ($375\\%$): moved the decimal three places right instead of two; since $0.375 < 1$, the percent must be under $100\\%$.\n\n**Test Day Takeaway:** Decimal to percent means multiply by $100$ — shift the decimal two places right. Any decimal below $1$ becomes a percent below $100\\%$.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** The fraction is $\\frac{3}{5}$. Divide $3 \\div 5 = 0.6$, then $0.6 \\times 100 = 60\\%$.\n\n**The Full Solution:**\nStep 1: Convert the fraction to a decimal: $\\frac{3}{5}=3 \\div 5 = 0.6$.\nStep 2: Multiply by $100$ to get the percent: $0.6 \\times 100 = 60\\%$.\nStep 3: Check: $60\\%$ of $5$ is $0.60 \\times 5 = 3$, the numerator. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($35\\%$): just wrote the digits $3$ and $5$ side by side — a fraction is a division, not a concatenation.\n* Choice B ($53\\%$): flipped the fraction to $\\frac{5}{3}$ or swapped the digits.\n* Choice D ($65\\%$): a careless arithmetic slip from the correct $60\\%$.\n\n**Test Day Takeaway:** To turn a fraction into a percent, divide top by bottom, then multiply by $100$: $\\frac{a}{b}\\times 100\\%$.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Put everything in decimal form: $45\\% = 0.45$, $0.4 = 0.40$, and $\\frac{2}{5}=0.40$. The largest is $0.45$, which is $45\\%$.\n\n**The Full Solution:**\nStep 1: Convert $45\\%$ to a decimal: $45\\% = \\frac{45}{100}=0.45$.\nStep 2: Note $0.4 = 0.40$.\nStep 3: Convert $\\frac{2}{5}=2 \\div 5 = 0.40$.\nStep 4: Compare: $0.45 > 0.40 = 0.40$, so $45\\%$ is greatest.\n\n**Why the wrong answers are tempting:**\n* Choice B ($0.4$): equals $0.40$, which is less than $0.45$.\n* Choice C ($\\frac{2}{5}$): equals $0.40$, tied with choice B but still below $0.45$.\n* Choice D (all equal): $0.4$ and $\\frac{2}{5}$ are equal, but $45\\% = 0.45 \\neq 0.40$.\n\n**Test Day Takeaway:** To compare mixed forms, convert every value to a decimal first — divide percents by $100$ and divide fraction numerators by denominators.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** \"What percent of $200$ is $50$\" is $\\frac{\\text{part}}{\\text{whole}}=\\frac{50}{200}=\\frac{1}{4}=25\\%$.\n\n**The Full Solution:**\nStep 1: Translate to an equation. Let $x$ be the percent: $\\frac{x}{100}\\times 200 = 50$.\nStep 2: Simplify: $2x = 50$, so $x = 25$.\nStep 3: Check: $25\\%$ of $200$ is $0.25 \\times 200 = 50$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4\\%$): computed $\\frac{200}{50}=4$ — the part and whole are swapped.\n* Choice C ($40\\%$): a miscount of $\\frac{50}{200}$; the true ratio is $\\frac{1}{4}$, not $\\frac{2}{5}$.\n* Choice D ($250\\%$): inverted the ratio to $\\frac{200}{50}$ and scaled, treating the part as the whole.\n\n**Test Day Takeaway:** \"What percent of the whole is the part\" is always $\\frac{\\text{part}}{\\text{whole}}\\times 100$ — the whole follows the word \"of.\"",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** \"Of\" means multiply: $30\\%$ of $80$ is $0.30 \\times 80 = 24$.\n\n**The Full Solution:**\nStep 1: Convert the percent to a decimal: $30\\% = 0.30$.\nStep 2: Multiply by the whole: $0.30 \\times 80 = 24$.\nStep 3: Check: $\\frac{24}{80}\\times 100 = 30\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($26.67$): computed $\\frac{80}{3}$ instead of $0.30 \\times 80$.\n* Choice C ($50$): subtracted $80 - 30 = 50$ instead of taking a percent of $80$.\n* Choice D ($110$): added $80 + 30 = 110$, treating $30\\%$ as the whole number $30$.\n\n**Test Day Takeaway:** The word \"of\" signals multiplication — take a percent of a number by multiplying the decimal form by that number.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $40\\%$ of the number is $28$, so the number is $\\frac{28}{0.40}=70$.\n\n**The Full Solution:**\nStep 1: Let $x$ be the number: $0.40 \\times x = 28$.\nStep 2: Divide both sides by $0.40$: $x = \\frac{28}{0.40}=70$.\nStep 3: Check: $40\\%$ of $70$ is $0.40 \\times 70 = 28$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($11.2$): multiplied $0.40 \\times 28$ instead of dividing — applied the percent to the part.\n* Choice B ($68$): added $28 + 40 = 68$, treating $40\\%$ as the number $40$.\n* Choice D ($112$): multiplied $28 \\times 4$, confusing $40\\%$ with $25\\%$ (whose reciprocal is $4$).\n\n**Test Day Takeaway:** When you know the part and the percent, the whole is $\\frac{\\text{part}}{\\text{percent as a decimal}}$ — divide, don't multiply.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** The discount is the percent off times the original price: $0.15 \\times \\$60 = \\$9$.\n\n**The Full Solution:**\nStep 1: Convert the percent to a decimal: $15\\% = 0.15$.\nStep 2: Multiply by the original price: $0.15 \\times 60 = 9$, so the discount is $\\$9$.\nStep 3: Check: the sale price would be $\\$60 - \\$9 = \\$51$, which is $0.85 \\times 60$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$4$): a multiplication slip — $0.15 \\times 60$ is $9$, not $4$.\n* Choice C ($\\$45$): subtracted $60 - 15$, treating $15\\%$ as $\\$15$.\n* Choice D ($\\$51$): this is the sale price, not the discount the question asks for.\n\n**Test Day Takeaway:** Discount amount equals percent off times the original price. Reread the question — discount and sale price are different targets.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** If $60\\%$ are girls, $40\\%$ are boys: $0.40 \\times 25 = 10$.\n\n**The Full Solution:**\nStep 1: Find the percent of boys: $100\\% - 60\\% = 40\\%$.\nStep 2: Take $40\\%$ of $25$: $0.40 \\times 25 = 10$.\nStep 3: Check: girls $= 0.60 \\times 25 = 15$, and $15 + 10 = 25$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($15$): this is the number of girls ($60\\%$ of $25$), not boys.\n* Choice C ($20$): used $80\\%$ of $25$, or a subtraction slip.\n* Choice D ($40$): treated $40\\%$ as the number $40$ — impossible with only $25$ students.\n\n**Test Day Takeaway:** When one group's percent is given, the other group is $100\\%$ minus that percent — and your answer can't exceed the total.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $120$ items is $24\\%$ of the week, so the total is $\\frac{120}{0.24}=500$.\n\n**The Full Solution:**\nStep 1: Let $x$ be the weekly total: $0.24 \\times x = 120$.\nStep 2: Divide both sides by $0.24$: $x = \\frac{120}{0.24}=500$.\nStep 3: Check: $24\\%$ of $500$ is $0.24 \\times 500 = 120$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($28.8$ items): multiplied $0.24 \\times 120$ instead of dividing — found $24\\%$ of $120$ instead of solving for the whole.\n* Choice B ($144$ items): added $120 + 24 = 144$, treating $24\\%$ as the number $24$.\n* Choice D ($576$ items): divided by $0.024$ instead of $0.24$, slipping the decimal one place.\n\n**Test Day Takeaway:** Part divided by percent (as a decimal) gives the whole. Sanity check: $24\\%$ is near $\\frac{1}{4}$, so the total should be roughly $120 \\times 4$.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Percent change uses the original as the denominator: $\\frac{100-80}{80}=\\frac{20}{80}=25\\%$.\n\n**The Full Solution:**\nStep 1: Find the change: $100 - 80 = 20$.\nStep 2: Divide by the original and multiply by $100$: $\\frac{20}{80}\\times 100 = 25\\%$.\nStep 3: Check: $80 \\times 1.25 = 100$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($20\\%$): mistook the $\\$20$ change for the percent; the increase depends on the original.\n* Choice C ($80\\%$): divided $\\frac{80}{100}$, using the new value as the denominator.\n* Choice D ($125\\%$): computed $\\frac{100}{80}\\times 100$ — that is the new value as a percent of the old, not the increase ($125\\% - 100\\% = 25\\%$).\n\n**Test Day Takeaway:** Percent change is $\\frac{\\text{new} - \\text{original}}{\\text{original}}\\times 100$ — the denominator is always the original value.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Percent decrease uses the original as the denominator: $\\frac{500-400}{500}=\\frac{100}{500}=20\\%$.\n\n**The Full Solution:**\nStep 1: Find the decrease: $500 - 400 = 100$.\nStep 2: Divide by the original and multiply by $100$: $\\frac{100}{500}\\times 100 = 20\\%$.\nStep 3: Check: $500 \\times 0.80 = 400$, so a $20\\%$ drop leaves $80\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($10\\%$): read $\\frac{100}{500}=0.2$ as $10\\%$ instead of $20\\%$.\n* Choice C ($25\\%$): divided $\\frac{100}{400}$, using the new value as the denominator.\n* Choice D ($100\\%$): mistook the change of $100$ for $100\\%$ — that would empty the population.\n\n**Test Day Takeaway:** Percent decrease is $\\frac{\\text{original} - \\text{new}}{\\text{original}}\\times 100$ — always divide by the starting value.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Successive percent changes multiply, so chain the factors: $\\$100 \\times 1.20 \\times 0.80 = \\$96$. A $+20\\%$ then $-20\\%$ nets to $0.96$, a $4\\%$ loss.\n\n**The Full Solution:**\nStep 1: The $20\\%$ increase multiplies by $1.20$: $\\$100 \\times 1.20 = \\$120$.\nStep 2: The $20\\%$ decrease applies to that new value, not the original: $\\$120 \\times 0.80 = \\$96$.\nStep 3: As one chain, $\\$100 \\times 1.20 \\times 0.80 = \\$100 \\times 0.96 = \\$96$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$100$): assumes a $+20\\%$ then $-20\\%$ cancels back to the start. The two changes hit different bases ($\\$100$ vs. $\\$120$), so they never cancel.\n* Choice C ($\\$104$): a stray arithmetic slip that treats the net change as a $4\\%$ gain instead of a $4\\%$ loss.\n* Choice D ($\\$120$): stopped after the first year and forgot to apply the second year's decrease.\n\n**Test Day Takeaway:** Percent changes compound, they do not add. Multiply the factors: $(1+r_1)(1+r_2)$. Equal up-then-down percents always end below the start because $(1+r)(1-r)=1-r^2$.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** A $30\\%$ cut means $\\$35$ is $70\\%$ of the original, so divide: $\\$35 \\div 0.70 = \\$50$.\n\n**The Full Solution:**\nStep 1: Let $P$ be the original price. \"Reduced by $30\\%$\" means the buyer pays $100\\% - 30\\% = 70\\%$: $0.70P = 35$.\nStep 2: Solve: $P = \\frac{35}{0.70} = 50$.\nStep 3: Check: $30\\%$ of $\\$50$ is $\\$15$, and $\\$50 - \\$15 = \\$35$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$45.50$): computed $35 \\times 1.30$, increasing the sale price by $30\\%$ instead of recognizing it as $70\\%$ of the original.\n* Choice C ($\\$65$): added the number $30$ to $35$, treating a $30\\%$ discount as a flat $\\$30$ off.\n* Choice D ($\\$105$): multiplied $35 \\times 3$, misreading \"$30\\%$ off\" as \"one third of the original.\" But $30\\% = \\frac{3}{10}$, not $\\frac{1}{3}$.\n\n**Test Day Takeaway:** To undo a discount, divide the sale price by the fraction the buyer actually paid: $\\text{Original} = \\frac{\\text{Sale}}{1 - \\text{discount rate}}$.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Multiply the factors directly: $1.50 \\times 0.50 = 0.75$, so the result is $75\\%$ of the original.\n\n**The Full Solution:**\nStep 1: Start with $100$ (any base works, but $100$ makes percents read straight off).\nStep 2: Up $50\\%$: $100 \\times 1.50 = 150$.\nStep 3: Down $50\\%$ of that: $150 \\times 0.50 = 75$.\nStep 4: As a percent of the start: $\\frac{75}{100} = 75\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($25\\%$): reported the amount lost rather than the amount remaining.\n* Choice B ($50\\%$): mistook the $50\\%$ decrease itself for the final ratio.\n* Choice D ($100\\%$): added the percents ($+50\\% - 50\\% = 0\\%$) as if the changes cancel. They do not, because the decrease applies to $150$, not $100$.\n\n**Test Day Takeaway:** Successive percent changes are multiplicative. For an up $r$ then down $r$, the net factor is $(1+r)(1-r) = 1 - r^2$, always less than $1$.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** $35\\%$ of $400$ is $0.35 \\times 400 = 140$. Or scale: $\\frac{400}{100} = 4$, so $35 \\times 4 = 140$.\n\n**The Full Solution:**\nStep 1: Convert the percent: $35\\% = 0.35$.\nStep 2: Multiply by the whole: $0.35 \\times 400 = 140$.\nStep 3: Check: $\\frac{140}{400} = 0.35 = 35\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($35$): read the percent as a raw count. $35\\%$ means $35$ per $100$, so over $400$ it is $35 \\times 4 = 140$.\n* Choice B ($114$): an arithmetic slip; no clean operation on $0.35$ and $400$ gives $114$.\n* Choice D ($365$): computed $400 - 35$, subtracting the percent number from the total.\n\n**Test Day Takeaway:** \"Percent of\" means multiply: $\\text{Part} = \\frac{\\text{percent}}{100} \\times \\text{whole}$. Anchor on $10\\%$ for fast mental math ($10\\%$ of $400 = 40$).",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** Acid is $15\\%$, water is $85\\%$. The acid-to-water ratio is $\\frac{15}{85}$, so acid $= 120 \\times \\frac{15}{85} \\approx 21.18$ mL.\n\n**The Full Solution:**\nStep 1: If acid is $15\\%$ of the solution, water is $100\\% - 15\\% = 85\\%$.\nStep 2: Find the total from the water: $0.85 \\times \\text{Total} = 120$, so $\\text{Total} = \\frac{120}{0.85} \\approx 141.18$ mL.\nStep 3: Acid is $15\\%$ of the total: $0.15 \\times 141.18 \\approx 21.18$ mL.\nStep 4: Check: $21.18 + 120 = 141.18$, and $\\frac{21.18}{141.18} \\approx 0.15$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($18$ mL): computed $0.15 \\times 120$, taking $15\\%$ of the water instead of $15\\%$ of the whole solution.\n* Choice C ($102$ mL): subtracted that $18$ from $120$, which has no meaning here.\n* Choice D ($138$ mL): added $18$ to $120$, computing $115\\%$ of the water.\n\n**Test Day Takeaway:** A component's percent refers to the whole, not to another component. Use the known part to recover the total first, then take the percent you want.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** Commission is $6\\%$ of sales, so sales $= \\frac{\\$450}{0.06} = \\$7{,}500$.\n\n**The Full Solution:**\nStep 1: Let $S$ be total sales. The relationship is $0.06 \\times S = 450$.\nStep 2: Solve: $S = \\frac{450}{0.06} = 7{,}500$.\nStep 3: Check: $6\\%$ of $\\$7{,}500 = 0.06 \\times 7{,}500 = \\$450$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$27$): computed $0.06 \\times 450$, applying the rate to the commission instead of dividing by it.\n* Choice B ($\\$2{,}700$): multiplied $450 \\times 6$, forgetting to convert $6\\%$ to the decimal $0.06$ before dividing.\n* Choice D ($\\$75{,}000$): divided by $0.006$ instead of $0.06$, slipping the decimal one place.\n\n**Test Day Takeaway:** When a part is a small percent of an unknown whole, divide: $\\text{Sales} = \\frac{\\text{Commission}}{\\text{Rate}}$. Dividing by a number below $1$ makes the result larger than the part.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $240$ gallons is the $40\\%$ part, so the whole is $\\frac{240}{0.40} = 600$ gallons. Since $40\\% = \\frac{2}{5}$, that is $240 \\times \\frac{5}{2} = 600$.\n\n**The Full Solution:**\nStep 1: Let $C$ be the capacity. The tank holds $40\\%$ of it: $0.40 \\times C = 240$.\nStep 2: Solve: $C = \\frac{240}{0.40} = 600$.\nStep 3: Check: $40\\%$ of $600 = 0.40 \\times 600 = 240$ gallons. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($96$): computed $0.40 \\times 240$, treating $240$ as the whole instead of the part.\n* Choice B ($360$): used $240 \\times 1.5$, a confused attempt at adding back \"the other $60\\%$.\"\n* Choice D ($960$): multiplied $240 \\times 4$, the factor for $25\\%$ ($\\frac{1}{0.25}$), not the $2.5$ that $40\\%$ requires.\n\n**Test Day Takeaway:** Given the part and its percent, divide to find the whole: $\\text{Whole} = \\frac{\\text{Part}}{\\text{Rate}}$. Convert the percent to a fraction ($40\\% = \\frac{2}{5}$) for a quick exact answer.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $75\\% = \\frac{3}{4}$, so the minimum is $\\frac{3}{4} \\times 80 = 60$ questions.\n\n**The Full Solution:**\nStep 1: Convert the threshold: $75\\% = 0.75$.\nStep 2: Multiply by the total: $0.75 \\times 80 = 60$.\nStep 3: Check: $\\frac{60}{80} = 0.75 = 75\\%$, exactly the passing mark. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($55$): no standard operation on $75\\%$ and $80$ gives this; $\\frac{55}{80} = 68.75\\% \\neq 75\\%$.\n* Choice C ($75$): read the percent as a count. $75$ correct on $80$ is $\\frac{75}{80} = 93.75\\%$, far above the cutoff.\n* Choice D ($80$): the total number of questions, which is $100\\%$, not the $75\\%$ needed.\n\n**Test Day Takeaway:** A passing percent is a multiplier on the total: $\\text{Minimum correct} = \\text{percent} \\times \\text{total}$. If the product is not a whole number, round up, since a fractional correct answer is impossible.",
      skills: ['percent-word-problems', 'percent-of-value']
    }
  ]
};
