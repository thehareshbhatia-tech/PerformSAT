// Practice questions for Percents module
// Questions are organized by SECTION (question type)

export const percentsQuestions = {
  // Section: Percent Fundamentals
  "Percent Fundamentals": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is $6\\%$ of $m$?",
      choices: [
        // distractor: divides 6 by 1,000 instead of 100
        { id: "A", text: "$0.006m$" },
        { id: "B", text: "$0.06m$" },
        // distractor: moves the decimal point only one place, which is 60%
        { id: "C", text: "$0.6m$" },
        // distractor: drops the percent sign without dividing by 100
        { id: "D", text: "$6m$" }
      ],
      correctAnswer: "B",
      hint: "A percent counts hundredths, so the decimal point moves two places to the left.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $6\\% = \\frac{6}{100} = 0.06$, so $6\\%$ of $m$ is $0.06m$.\n\n**The Full Solution:**\nStep 1: The word percent means per hundred, so $6\\%$ is the fraction $\\frac{6}{100}$.\nStep 2: Dividing $6$ by $100$ moves the decimal point two places to the left: $6\\% = 0.06$.\nStep 3: So $6\\%$ of $m$ is $0.06m$. Check with $m = 200$: $0.06(200) = 12$, and $12$ is $6$ hundredths of $200$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.006m$): divides by $1{,}000$, moving the decimal point three places.\n* Choice C ($0.6m$): moves the decimal point only one place, which is $60\\%$ of $m$.\n* Choice D ($6m$): drops the percent sign without dividing at all; that is $600\\%$ of $m$.\n\n**Test Day Takeaway:** Taking a percent of a quantity means multiplying by the percent divided by $100$: $p\\%$ of $m$ is $\\frac{p}{100}m$.",
      skills: ["percent-decimal-conversion"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$9$ is $p\\%$ of $200$. What is the value of $p$?",
      choices: [
        // distractor: computes 9/200 = 0.045 and never multiplies by 100
        { id: "A", text: "$0.045$" },
        // distractor: multiplies 0.045 by 10 instead of 100
        { id: "B", text: "$0.45$" },
        { id: "C", text: "$4.5$" },
        // distractor: multiplies 0.045 by 1,000 instead of 100
        { id: "D", text: "$45$" }
      ],
      correctAnswer: "C",
      hint: "Write the statement as an equation, then multiply the decimal by $100$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** $\\frac{9}{200} = 0.045$, and $0.045 \\times 100 = 4.5$, so $p = 4.5$.\n\n**The Full Solution:**\nStep 1: The statement means $9 = \\frac{p}{100}(200)$, or $\\frac{9}{200} = \\frac{p}{100}$.\nStep 2: $\\frac{9}{200} = 0.045$, and a decimal becomes a percent when it is multiplied by $100$: $0.045 \\times 100 = 4.5$.\nStep 3: So $p = 4.5$. Check: $4.5\\%$ of $200$ is $0.045 \\times 200 = 9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.045$): stops at the decimal $\\frac{9}{200}$; that is the fraction, not the number of hundredths.\n* Choice B ($0.45$): moves the decimal point only one place.\n* Choice D ($45$): moves the decimal point three places, multiplying by $1{,}000$.\n\n**Test Day Takeaway:** Percent and decimal differ by exactly two decimal places; check the size of the answer against a benchmark such as $5\\%$ of $200 = 10$.",
      skills: ["percent-decimal-conversion"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The table shows the proportion of the students at a school who chose each of four after-school activities. Each student chose exactly one activity. What percent of the students chose music or drama?",
      diagram: { type: "dataTable", params: { headers: ["Activity", "Proportion of students"], rows: [["Art", "0.35"], ["Music", "0.28"], ["Sports", "0.25"], ["Drama", "0.12"]] } },
      choices: [
        // distractor: adds the proportions to get 0.40 and writes a percent sign after 0.4 without multiplying by 100
        { id: "A", text: "$0.4\\%$" },
        // distractor: multiplies 0.40 by 10 instead of 100
        { id: "B", text: "$4\\%$" },
        // distractor: uses only the proportion for music, 0.28, and leaves out drama
        { id: "C", text: "$28\\%$" },
        { id: "D", text: "$40\\%$" }
      ],
      correctAnswer: "D",
      hint: "Add the two proportions first, then convert the sum to a percent once.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** $0.28+0.12=0.40$, and $0.40 \\times 100 = 40$, so $40\\%$ of the students chose music or drama.\n\n**The Full Solution:**\nStep 1: Read the two proportions from the table: music is $0.28$ and drama is $0.12$.\nStep 2: Each student chose exactly one activity, so the two groups do not overlap, and the proportion who chose music or drama is $0.28+0.12=0.40$.\nStep 3: Convert to a percent by multiplying by $100$: $0.40 \\times 100 = 40$, so the answer is $40\\%$. Check: the four proportions sum to $0.35+0.28+0.25+0.12=1$, and art and sports together make up the other $60\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.4\\%$): writes a percent sign after the decimal $0.4$ without multiplying by $100$.\n* Choice B ($4\\%$): multiplies by $10$ instead of $100$, shifting the decimal point only one place.\n* Choice C ($28\\%$): uses music alone and forgets to add the drama students.\n\n**Test Day Takeaway:** Do the arithmetic with the decimals, then convert to a percent once at the end; mixing the two mid-problem is what produces factor-of-$100$ misses.",
      skills: ["percent-decimal-conversion"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The number of members of a hiking club increased by $35\\%$ from $2022$ to $2023$. If the number of members in $2023$ is $k$ times the number of members in $2022$, what is the value of $k$?",
      choices: [
        // distractor: gives the increase as a decimal, 0.35, without adding it to the original amount
        { id: "A", text: "$0.35$" },
        // distractor: subtracts 35% instead of adding it, which would describe a 35% decrease
        { id: "B", text: "$0.65$" },
        { id: "C", text: "$1.35$" },
        // distractor: writes the percent 35 without converting it to a decimal or adding the original amount
        { id: "D", text: "$35$" }
      ],
      correctAnswer: "C",
      hint: "An increase of $35\\%$ means the new amount is $100\\% + 35\\%$ of the old amount.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** A $35\\%$ increase makes the new amount $100\\% + 35\\% = 135\\%$ of the old amount, and $135\\% = 1.35$.\n\n**The Full Solution:**\nStep 1: Let $m$ be the number of members in $2022$. The increase is $35\\%$ of $m$, or $0.35m$.\nStep 2: The number of members in $2023$ is $m + 0.35m = 1.35m$.\nStep 3: So the number in $2023$ is $1.35$ times the number in $2022$, and $k = 1.35$.\n\nCheck: If the club had $80$ members in $2022$, it gained $0.35(80) = 28$ members, for $108$ in all, and $1.35(80) = 108$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.35$): is the increase alone; the original members must be added back.\n* Choice B ($0.65$): is the multiplier for a $35\\%$ decrease, not an increase.\n* Choice D ($35$): uses the percent as a whole number and leaves out the original amount.\n\n**Test Day Takeaway:** An increase of $p\\%$ multiplies an amount by $1 + \\frac{p}{100}$; a decrease of $p\\%$ multiplies it by $1 - \\frac{p}{100}$.",
      skills: ["percent-decimal-conversion"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A shelf holds only hardcover and paperback books. The number of hardcover books is $\\frac{3}{5}$ of the number of paperback books, and $p\\%$ of the books on the shelf are hardcover. What is the value of $p$?",
      choices: [
        // distractor: uses the difference share 2/8
        { id: "A", text: "$25$" },
        { id: "B", text: "$37.5$" },
        // distractor: treats 3/5 as the share of the total
        { id: "C", text: "$60$" },
        // distractor: reports the paperback share
        { id: "D", text: "$62.5$" }
      ],
      correctAnswer: "B",
      hint: "Choose a convenient number of paperback books so the fraction comes out whole, then build the total.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** Take $5$ paperbacks and $3$ hardcovers; the total is $8$, and $\\frac{3}{8} = 37.5\\%$.\n\n**The Full Solution:**\nStep 1: Let the number of paperback books be $5k$ for some positive integer $k$. Then the number of hardcover books is $\\frac{3}{5}(5k) = 3k$.\nStep 2: The total number of books is $5k + 3k = 8k$, so the hardcover share of the total is $\\frac{3k}{8k} = \\frac{3}{8}$.\nStep 3: As a percent, $\\frac{3}{8} = 0.375 = 37.5\\%$, so $p = 37.5$. Check with $k = 10$: $50$ paperbacks and $30$ hardcovers out of $80$ books, and $\\frac{30}{80} = 37.5\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($25$): reports $\\frac{2}{8}$, the share by which the paperbacks outnumber the hardcovers, instead of the hardcover share.\n* Choice C ($60$): treats $\\frac{3}{5}$ itself as the share of the TOTAL, but it is the share of the paperbacks only.\n* Choice D ($62.5$): reports the paperback share $\\frac{5}{8}$ of the total rather than the hardcover share.\n\n**Test Day Takeaway:** When one group is described as a fraction of ANOTHER group, the total is the sum of the parts, never the denominator of the given fraction.",
      skills: ["percent-decimal-conversion"]
    }
  ],

  // Section: Percent Of Questions
  "Percent Of Questions": [
    {
      id: 1,
      difficulty: "easy",
      question: "A theater has $340$ seats, and $45\\%$ of the seats are in the balcony. How many seats are in the balcony?",
      choices: [
        { id: "A", text: "$153$" },
        // distractor: reports the complement
        { id: "B", text: "$187$" },
        // distractor: subtracts 45 as a count
        { id: "C", text: "$295$" },
        // distractor: multiplies by 4.5
        { id: "D", text: "$1{,}530$" }
      ],
      correctAnswer: "A",
      hint: "Turn the percent into a decimal, then multiply it by the total number of seats.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** $0.45 \\times 340 = 153$.\n\n**The Full Solution:**\nStep 1: Finding a percent OF a quantity means multiplying, so write $45\\%$ as the decimal $0.45$.\nStep 2: Multiply: $0.45 \\times 340 = 153$.\nStep 3: So $153$ seats are in the balcony. Check the size: $45\\%$ is a little under half, and $153$ is a little under half of $340$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($187$): computes $340 - 153$, the number of seats that are NOT in the balcony.\n* Choice C ($295$): subtracts $45$ from $340$, treating the percent as a count of seats.\n* Choice D ($1{,}530$): multiplies by $4.5$ instead of $0.45$, misplacing the decimal point.\n\n**Test Day Takeaway:** A percent of a total is always smaller than the total when the percent is under $100$, so a quick size check catches decimal-point slips.",
      skills: ["percent-of-value", "percent-word-problems"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Of the birds tagged at a refuge, $65\\%$ are songbirds. If $91$ of the tagged birds are songbirds, how many birds were tagged?",
      choices: [
        // distractor: reports the non-songbirds
        { id: "A", text: "$49$" },
        { id: "B", text: "$140$" },
        // distractor: adds the percent as a count
        { id: "C", text: "$156$" },
        // distractor: divides by the complement
        { id: "D", text: "$260$" }
      ],
      correctAnswer: "B",
      hint: "The $91$ birds are a part, not the whole, so divide rather than multiply.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $91 \\div 0.65 = 140$.\n\n**The Full Solution:**\nStep 1: Let $n$ be the number of tagged birds. The statement says $0.65n = 91$.\nStep 2: Divide both sides by $0.65$: $n = \\frac{91}{0.65} = 140$.\nStep 3: So there are $140$ tagged birds. Check: $0.65 \\times 140 = 91$, and the remaining $49$ birds are $35\\%$ of $140$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($49$): reports $140 - 91$, the number of tagged birds that are not songbirds.\n* Choice C ($156$): adds $65$ to $91$, treating the percent as a count of birds.\n* Choice D ($260$): divides by $0.35$, using the percent of birds that are NOT songbirds.\n\n**Test Day Takeaway:** When the part is given and the whole is missing, divide the part by the decimal form of its percent.",
      skills: ["percent-of-value", "percent-word-problems"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The price of a jacket is \\$72. During a sale, the price of the jacket is reduced by $35\\%$. What is the sale price, in dollars, of the jacket?",
      choices: [
        // distractor: reports the amount of the discount, 0.35 x 72 = 25.20, instead of the sale price
        { id: "A", text: "$25.20$" },
        // distractor: subtracts 35 from 72, treating 35 percent as 35 dollars
        { id: "B", text: "$37$" },
        { id: "C", text: "$46.80$" },
        // distractor: increases the price by 35% instead of reducing it
        { id: "D", text: "$97.20$" }
      ],
      correctAnswer: "C",
      hint: "The sale price is the part of the original price that remains after the reduction.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** After a $35\\%$ reduction, $65\\%$ of the price remains: $0.65 \\times 72 = 46.80$.\n\n**The Full Solution:**\nStep 1: A reduction of $35\\%$ leaves $100\\% - 35\\% = 65\\%$ of the original price.\nStep 2: Write the percent as a decimal and multiply: $0.65 \\times 72 = 46.8$.\nStep 3: The sale price is $\\$46.80$. Check: the discount is $0.35 \\times 72 = 25.20$, and $72 - 25.20 = 46.80$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($25.20$): is the amount of the discount, not the price after the discount.\n* Choice B ($37$): subtracts $35$ from $72$, treating the percent as a number of dollars.\n* Choice D ($97.20$): multiplies by $1.35$, increasing the price instead of reducing it.\n\n**Test Day Takeaway:** Read whether the question wants the CHANGE or the NEW amount; for a decrease of $p\\%$, the new amount is $(1 - \\frac{p}{100})$ times the original.",
      skills: ["percent-of-value", "percent-word-problems"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The table shows the number of students at a school by grade level and by whether the student takes a world language course. What percent of the grade 11 students take a world language course?",
      diagram: { type: "twoWayTable", params: { headers: ["", "Takes a world language course", "Does not take a world language course", "Total"], rows: [["Grade 11", "84", "36", "120"], ["Grade 12", "56", "74", "130"], ["Total", "140", "110", "250"]] } },
      choices: [
        // distractor: uses the students who do not take a course
        { id: "A", text: "$30\\%$" },
        // distractor: divides by the school total
        { id: "B", text: "$33.6\\%$" },
        // distractor: divides by the column total
        { id: "C", text: "$60\\%$" },
        { id: "D", text: "$70\\%$" }
      ],
      correctAnswer: "D",
      hint: "The whole in this comparison is the number of grade 11 students, not the number of students at the school.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~25s):** $\\frac{84}{120} = 0.7$, so $70\\%$ of the grade 11 students take a world language course.\n\n**The Full Solution:**\nStep 1: The question restricts attention to grade 11, so the whole is that row's total, $120$ students.\nStep 2: The part is the grade 11 students who take a world language course, $84$.\nStep 3: Divide and convert: $\\frac{84}{120} = 0.7 = 70\\%$. Check: the other $36$ grade 11 students are $30\\%$, and $70 + 30 = 100$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($30\\%$): uses the $36$ grade 11 students who do NOT take a world language course.\n* Choice B ($33.6\\%$): divides $84$ by the school total of $250$ instead of by the grade 11 total.\n* Choice C ($60\\%$): divides $84$ by the column total of $140$, comparing grade 11 to all language students.\n\n**Test Day Takeaway:** In a two-way table, the phrase after \"of\" names the denominator; here it is the grade 11 row, so the row total is the whole.",
      skills: ["percent-of-value", "percent-word-problems"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "At a nursery, $20\\%$ of the seedlings are maple and the rest are oak. There are $600$ more oak seedlings than maple seedlings. How many seedlings are at the nursery?",
      choices: [
        // distractor: divides the difference by 0.8
        { id: "A", text: "$750$" },
        // distractor: reports the oak count
        { id: "B", text: "$800$" },
        { id: "C", text: "$1{,}000$" },
        // distractor: divides the difference by 0.2
        { id: "D", text: "$3{,}000$" }
      ],
      correctAnswer: "C",
      hint: "Write both counts as percents of the total; their difference is a percent of the total too.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~35s):** Oak exceeds maple by $80\\% - 20\\% = 60\\%$ of the total, so the total is $600 \\div 0.6 = 1{,}000$.\n\n**The Full Solution:**\nStep 1: Let $n$ be the total number of seedlings. Maple accounts for $0.2n$ and oak for the remaining $0.8n$.\nStep 2: The stated difference gives $0.8n - 0.2n = 600$, so $0.6n = 600$.\nStep 3: Divide: $n = 1{,}000$. Check: $200$ maple and $800$ oak seedlings differ by $600$, and $200$ is $20\\%$ of $1{,}000$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($750$): divides the difference by $0.8$, treating $600$ as the number of oak seedlings.\n* Choice B ($800$): reports the number of oak seedlings rather than the total.\n* Choice D ($3{,}000$): divides the difference by $0.2$, treating $600$ as the number of maple seedlings.\n\n**Test Day Takeaway:** Translate every quantity into the same variable before using a comparison sentence; the difference of two percents of the same total is itself a percent of that total.",
      skills: ["percent-of-value", "percent-word-problems"]
    }
  ],

  // Section: Percent Change Questions
  "Percent Change Questions": [
    {
      id: 1,
      difficulty: "easy",
      question: "The number of daily riders on a bus route increased from $400$ to $500$, an increase of $p\\%$. What is the value of $p$?",
      choices: [
        // distractor: divides the change by the new value, 100/500
        { id: "A", text: "$20$" },
        { id: "B", text: "$25$" },
        // distractor: reports the original as a percent of the new value, 400/500
        { id: "C", text: "$80$" },
        // distractor: reports the new value as a percent of the original instead of the increase
        { id: "D", text: "$125$" }
      ],
      correctAnswer: "B",
      hint: "A percent change always compares the change to the original amount.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The rise is $100$, and $\\frac{100}{400} = 25\\%$.\n\n**The Full Solution:**\nStep 1: Find the change: $500 - 400 = 100$ riders.\nStep 2: Percent increase is $\\frac{\\text{change}}{\\text{original}}$, so divide by the earlier value: $\\frac{100}{400} = 0.25$.\nStep 3: Convert: $0.25 = 25\\%$, so $p = 25$. Check: increasing $400$ by $25\\%$ adds $100$ riders and lands on $500$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): divides the change by the NEW value, $\\frac{100}{500}$.\n* Choice C ($80$): reports the original as a percent of the new value, $\\frac{400}{500}$.\n* Choice D ($125$): reports the new value as a percent of the original instead of the increase; the increase is the part above $100\\%$.\n\n**Test Day Takeaway:** Percent change divides by the STARTING value, and an answer above $100\\%$ for a modest rise is a signal you reported the ratio, not the change.",
      skills: ["percent-change"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The table shows the number of nesting pairs of a bird species counted at a nature reserve in four different years. What was the percent decrease in the number of nesting pairs from 2018 to 2022?",
      diagram: { type: "dataTable", params: { headers: ["Year", "Number of nesting pairs"], rows: [["2018", "640"], ["2020", "576"], ["2022", "512"], ["2024", "480"]] } },
      choices: [
        // distractor: uses the 2020 row
        { id: "A", text: "$10\\%$" },
        { id: "B", text: "$20\\%$" },
        // distractor: divides by the later count
        { id: "C", text: "$25\\%$" },
        // distractor: reports the ratio, not the decrease
        { id: "D", text: "$80\\%$" }
      ],
      correctAnswer: "B",
      hint: "The base of a percent decrease is the earlier count in the comparison.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** The drop is $640 - 512 = 128$, and $\\frac{128}{640} = 20\\%$.\n\n**The Full Solution:**\nStep 1: Read the two counts named in the question: $640$ pairs in 2018 and $512$ pairs in 2022.\nStep 2: Find the decrease: $640 - 512 = 128$ pairs.\nStep 3: Divide by the 2018 count and convert: $\\frac{128}{640} = 0.2 = 20\\%$. Check: $80\\%$ of $640$ is $512$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($10\\%$): uses the 2020 count of $576$, reading the wrong row of the table.\n* Choice C ($25\\%$): divides the decrease by the 2022 count instead of the 2018 count.\n* Choice D ($80\\%$): reports the 2022 count as a percent of the 2018 count rather than the decrease.\n\n**Test Day Takeaway:** Two rows must be identified before any arithmetic; then divide the change by the earlier of the two.",
      skills: ["percent-change"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The price of a bicycle was \\$500. The price was increased by $20\\%$, and then the new price was decreased by $15\\%$. What was the final price, in dollars, of the bicycle?",
      choices: [
        // distractor: applies only the 15% decrease to the original price
        { id: "A", text: "$425$" },
        { id: "B", text: "$510$" },
        // distractor: combines the changes into a single 5% increase of the original price
        { id: "C", text: "$525$" },
        // distractor: applies only the 20% increase
        { id: "D", text: "$600$" }
      ],
      correctAnswer: "B",
      hint: "Apply the decrease to the increased price, not to the original price.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** Multiply by $1.20$ and then by $0.85$: $500(1.20)(0.85) = 510$.\n\n**The Full Solution:**\nStep 1: After the $20\\%$ increase, the price is $500(1.20) = 600$ dollars.\nStep 2: The $15\\%$ decrease is taken from $600$: $600(0.85) = 510$ dollars.\nStep 3: So the final price is $510$ dollars.\n\nCheck: $15\\%$ of $600$ is $90$, and $600 - 90 = 510$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($425$): takes $15\\%$ off the original $500$ and ignores the increase.\n* Choice C ($525$): treats $+20\\%$ then $-15\\%$ as a net $+5\\%$; the decrease applies to a larger amount, so the net change is only $+2\\%$.\n* Choice D ($600$): stops after the increase.\n\n**Test Day Takeaway:** Successive percent changes multiply: use one multiplier per change, each applied to the current amount.",
      skills: ["percent-change", "successive-percent-change"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "After a $12\\%$ increase, a gym's monthly fee is \\$56. What was the monthly fee, in dollars, before the increase?",
      choices: [
        // distractor: treats 12 percent as 12 dollars
        { id: "A", text: "$44$" },
        // distractor: takes 12 percent off the new fee
        { id: "B", text: "$49.28$" },
        { id: "C", text: "$50$" },
        // distractor: increases again instead of reversing
        { id: "D", text: "$62.72$" }
      ],
      correctAnswer: "C",
      hint: "The new fee is $112\\%$ of the old one, so undo the increase by dividing.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** $56 \\div 1.12 = 50$.\n\n**The Full Solution:**\nStep 1: Let $f$ be the fee before the increase. Raising it by $12\\%$ multiplies it by $1.12$, so $1.12f = 56$.\nStep 2: Divide both sides by $1.12$: $f = \\frac{56}{1.12} = 50$.\nStep 3: The earlier fee was $\\$50$. Check: $12\\%$ of $50$ is $6$, and $50 + 6 = 56$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($44$): subtracts $12$ from $56$, treating the percent as a number of dollars.\n* Choice B ($49.28$): takes $12\\%$ off the NEW fee, but the $12\\%$ was computed from the old fee.\n* Choice D ($62.72$): applies the increase a second time instead of reversing it.\n\n**Test Day Takeaway:** Undoing a percent increase is division by $1 + r$, never subtraction of the same percent from the new amount.",
      skills: ["percent-change"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A price was increased by $p\\%$, and the new price was then decreased by $p\\%$. The final price was $84\\%$ of the original price. What is the value of $p$?",
      choices: [
        // distractor: halves the net drop
        { id: "A", text: "$8$" },
        // distractor: treats the pair as one decrease
        { id: "B", text: "$16$" },
        { id: "C", text: "$40$" },
        // distractor: reports the given percent
        { id: "D", text: "$84$" }
      ],
      correctAnswer: "C",
      hint: "Multiply the two scale factors together and set the product equal to $0.84$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~40s):** $\\left(1 + \\frac{p}{100}\\right)\\left(1 - \\frac{p}{100}\\right) = 1 - \\frac{p^2}{10{,}000} = 0.84$, so $p^2 = 1{,}600$ and $p = 40$.\n\n**The Full Solution:**\nStep 1: Increasing by $p\\%$ multiplies by $1 + \\frac{p}{100}$; decreasing the result by $p\\%$ multiplies by $1 - \\frac{p}{100}$.\nStep 2: The product of those two factors is a difference of squares: $1 - \\frac{p^2}{10{,}000}$. Set it equal to $0.84$.\nStep 3: Then $\\frac{p^2}{10{,}000} = 0.16$, so $p^2 = 1{,}600$ and $p = 40$ (a percent change is positive here). Check with a starting value of $100$: $100(1.4) = 140$, and $140(0.6) = 84$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): halves the net $16$-point drop, as if the two steps each contributed half of it.\n* Choice B ($16$): treats the whole process as a single decrease and solves $1 - \\frac{p}{100} = 0.84$.\n* Choice D ($84$): reports the given final percent as the value of $p$.\n\n**Test Day Takeaway:** Equal-size increases and decreases never cancel; multiplying the scale factors leaves $1 - \\frac{p^2}{10{,}000}$, always less than $1$.",
      skills: ["percent-change", "successive-percent-change"]
    }
  ],

  // Section: Percent Model Questions
  "Percent Model Questions": [
    {
      id: 1,
      difficulty: "easy",
      question: "The bar graph shows the number of visitors to a museum on each of five days. On Thursday, $15\\%$ of the visitors bought a guidebook. How many of Thursday's visitors bought a guidebook?",
      diagram: { type: "barChart", params: { data: [{ label: "Mon", value: 120 }, { label: "Tue", value: 160 }, { label: "Wed", value: 200 }, { label: "Thu", value: 240 }, { label: "Fri", value: 280 }], xAxisLabel: "Day", yAxisLabel: "Number of visitors", yMax: 320, yStep: 40 } },
      choices: [
        { id: "A", text: "$36$" },
        // distractor: reads Friday's bar
        { id: "B", text: "$42$" },
        // distractor: reports the complement
        { id: "C", text: "$204$" },
        // distractor: multiplies by 1.5
        { id: "D", text: "$360$" }
      ],
      correctAnswer: "A",
      hint: "Read Thursday's bar first, then apply the percent to that number only.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** Thursday's bar is at $240$, and $0.15 \\times 240 = 36$.\n\n**The Full Solution:**\nStep 1: Read the height of the Thursday bar: $240$ visitors.\nStep 2: Write the percent as a decimal and multiply: $0.15 \\times 240$.\nStep 3: $0.15 \\times 240 = 36$ visitors bought a guidebook. Check: $10\\%$ of $240$ is $24$ and $5\\%$ is $12$, and $24 + 12 = 36$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($42$): applies the percent to Friday's $280$ visitors, reading the neighboring bar.\n* Choice C ($204$): reports the $85\\%$ of Thursday's visitors who did NOT buy a guidebook.\n* Choice D ($360$): multiplies by $1.5$ instead of $0.15$, misplacing the decimal point.\n\n**Test Day Takeaway:** Identify the exact bar the question names before computing; neighboring bars are built to catch a quick glance.",
      skills: ["percent-word-problems", "percent-of-value"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A solution has a mass of $300$ grams, and $8\\%$ of its mass is salt. What is the mass, in grams, of the salt in the solution?",
      choices: [
        // distractor: writes 8% as 0.008 instead of 0.08
        { id: "A", text: "$2.4$" },
        { id: "B", text: "$24$" },
        // distractor: divides 300 by 8 instead of multiplying by 0.08
        { id: "C", text: "$37.5$" },
        // distractor: finds the mass of the rest of the solution, 300 - 24
        { id: "D", text: "$276$" }
      ],
      correctAnswer: "B",
      hint: "Write $8\\%$ as a decimal and multiply.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** $8\\%$ of $300$ is $0.08(300) = 24$.\n\n**The Full Solution:**\nStep 1: Write the percent as a decimal: $8\\% = 0.08$.\nStep 2: Multiply by the total mass: $0.08(300) = 24$.\nStep 3: So the solution contains $24$ grams of salt.\n\nCheck: $\\frac{24}{300} = 0.08 = 8\\%$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2.4$): uses $0.008$ for $8\\%$, which is $0.8\\%$.\n* Choice C ($37.5$): divides $300$ by $8$ instead of finding $8$ hundredths of $300$.\n* Choice D ($276$): is the mass of the part of the solution that is not salt.\n\n**Test Day Takeaway:** Read $p\\%$ of $N$ as $\\frac{p}{100} \\cdot N$.",
      skills: ["percent-word-problems", "percent-of-value"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A salesperson earns a commission of $4\\%$ of his total sales. Last month, his total sales were $v$ dollars and his commission was \\$1,380. What is the value of $v$?",
      choices: [
        // distractor: multiplies the commission by 0.04 instead of dividing by it
        { id: "A", text: "$55.20$" },
        // distractor: divides by 0.4 rather than 0.04
        { id: "B", text: "$3{,}450$" },
        // distractor: multiplies the commission by 4
        { id: "C", text: "$5{,}520$" },
        { id: "D", text: "$34{,}500$" }
      ],
      correctAnswer: "D",
      hint: "The commission is a small part of a large whole, so the answer must be much larger than the commission.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~25s):** $1{,}380 \\div 0.04 = 34{,}500$.\n\n**The Full Solution:**\nStep 1: The salesperson's total sales were $v$ dollars, and $4\\%$ of $v$ is the commission, so $0.04v = 1{,}380$.\nStep 2: Divide both sides by $0.04$: $v = \\frac{1{,}380}{0.04} = 34{,}500$.\nStep 3: His total sales were $\\$34{,}500$, so $v = 34{,}500$. Check: $4\\%$ of $34{,}500$ is $0.04 \\times 34{,}500 = 1{,}380$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($55.20$): multiplies the commission by $0.04$ instead of dividing by it.\n* Choice B ($3{,}450$): divides by $0.4$ rather than $0.04$, misplacing the decimal point.\n* Choice C ($5{,}520$): multiplies the commission by $4$, treating the percent as a whole-number factor.\n\n**Test Day Takeaway:** A part that is only a few percent of the whole means the whole is many times larger; check the order of magnitude before choosing.",
      skills: ["percent-word-problems", "percent-of-value"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The table shows the amount of water stored in each of four reservoirs and the percent of the reservoir's capacity that this amount represents. What is the capacity, in millions of gallons, of the Cedar reservoir?",
      diagram: { type: "dataTable", params: { headers: ["Reservoir", "Water stored (millions of gallons)", "Percent of capacity"], rows: [["Alder", "63", "45%"], ["Birch", "88", "55%"], ["Cedar", "96", "40%"], ["Dunn", "72", "60%"]] } },
      choices: [
        // distractor: multiplies instead of dividing
        { id: "A", text: "$38.4$" },
        // distractor: reports the unused capacity
        { id: "B", text: "$144$" },
        // distractor: divides by the empty percent
        { id: "C", text: "$160$" },
        { id: "D", text: "$240$" }
      ],
      correctAnswer: "D",
      hint: "The stored amount is a part of the capacity, so divide it by the decimal form of its percent.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~25s):** Cedar's $96$ million gallons is $40\\%$ of capacity, so the capacity is $96 \\div 0.4 = 240$.\n\n**The Full Solution:**\nStep 1: Read Cedar's row: $96$ million gallons stored, which is $40\\%$ of its capacity.\nStep 2: Let $c$ be the capacity. Then $0.40c = 96$.\nStep 3: Divide: $c = \\frac{96}{0.40} = 240$ million gallons. Check: $40\\%$ of $240$ is $96$, and the remaining $144$ million gallons is the $60\\%$ that is empty. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($38.4$): multiplies $96$ by $0.40$ instead of dividing by it.\n* Choice B ($144$): reports how much more water the reservoir could hold, not the capacity.\n* Choice C ($160$): divides by $0.60$, the percent of the capacity that is EMPTY.\n\n**Test Day Takeaway:** Read the percent's owner carefully: $40\\%$ of capacity means the capacity is the denominator, so the stored amount gets divided.",
      skills: ["percent-word-problems", "percent-of-value"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A store's price for a jacket is $50\\%$ greater than the store's cost. During a sale, the price of the jacket is reduced by $20\\%$. The sale price is $p\\%$ of the store's cost. What is the value of $p$?",
      choices: [
        // distractor: takes 80% of the 50% markup alone, 0.80(50), instead of 80% of the whole price
        { id: "A", text: "$40$" },
        { id: "B", text: "$120$" },
        // distractor: adds and subtracts the percents, 100 + 50 - 20
        { id: "C", text: "$130$" },
        // distractor: uses the price before the sale
        { id: "D", text: "$150$" }
      ],
      correctAnswer: "B",
      hint: "Let the cost be $c$ and write each change as a multiplier.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~40s):** The sale price is $c(1.50)(0.80) = 1.20c$, which is $120\\%$ of the cost.\n\n**The Full Solution:**\nStep 1: Let the store's cost be $c$. A price $50\\%$ greater than $c$ is $1.50c$.\nStep 2: Reducing that price by $20\\%$ leaves $80\\%$ of it: $0.80(1.50c) = 1.20c$.\nStep 3: Since $1.20c = \\frac{120}{100}c$, the sale price is $120\\%$ of the cost, so $p = 120$.\n\nCheck: If the cost is \\$100, the price is \\$150, and $20\\%$ of \\$150 is \\$30, so the sale price is \\$120. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($40$): applies the $20\\%$ reduction only to the $50\\%$ markup.\n* Choice C ($130$): combines the percents by adding and subtracting, but the $20\\%$ is taken from the larger price.\n* Choice D ($150$): is the price before the sale as a percent of the cost.\n\n**Test Day Takeaway:** Chain percent changes by multiplying: $1.50 \\times 0.80 = 1.20$, then read the product as a percent.",
      skills: ["percent-word-problems", "percent-of-value"]
    }
  ]
};
