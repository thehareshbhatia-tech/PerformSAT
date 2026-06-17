// Practice questions for Statistics module
// Questions are organized by SECTION (question type)

export const statisticsQuestions = {
  // Section: Mean
  "Mean": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the mean of the data set: 4, 8, 6, 5, 9, 2, 8?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "6" },
        { id: "C", text: "7" },
        { id: "D", text: "8" }
      ],
      correctAnswer: "B",
      hint: "Add all the numbers together, then divide by how many numbers there are.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Add the seven values to get $42$, then divide by $7$: $\\frac{42}{7}=6$.\n\n**The Full Solution:**\nStep 1: The mean is the sum divided by the count: $\\text{mean}=\\frac{\\sum x_i}{n}$.\nStep 2: Add: $4+8+6+5+9+2+8=42$.\nStep 3: There are $7$ values, so $\\frac{42}{7}=6$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): miscounting as $8$ values and computing $\\frac{40}{8}=5$ — there are $7$ values, not $8$.\n* Choice C ($7$): an addition slip (treating the sum as $49$) gives $\\frac{49}{7}=7$.\n* Choice D ($8$): reporting the most frequent value ($8$ appears twice) — that is the mode, not the mean.\n\n**Test Day Takeaway:** Mean is always total $\\div$ count. Recount your data points before dividing — an off-by-one in $n$ is the most common slip.",
      skills: ["calculate-mean"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The mean of 5 numbers is 12. If one number is removed and the new mean is 10, what number was removed?",
      choices: [
        { id: "A", text: "10" },
        { id: "B", text: "12" },
        { id: "C", text: "20" },
        { id: "D", text: "22" }
      ],
      correctAnswer: "C",
      hint: "Find the original total sum and the new total sum. The removed number is the difference between them.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** Convert means to sums: $5\\times 12=60$ before, $4\\times 10=40$ after. The removed number is the drop: $60-40=20$.\n\n**The Full Solution:**\nStep 1: Sum equals mean times count, so the original five numbers sum to $5\\times 12=60$.\nStep 2: After removing one, the four remaining numbers sum to $4\\times 10=40$.\nStep 3: The removed value is the difference: $60-40=20$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): reporting the new mean instead of the removed value.\n* Choice B ($12$): assuming the removed number equals the original mean — but removing $12$ leaves a sum of $48$ and a mean of $\\frac{48}{4}=12$, not $10$.\n* Choice D ($22$): an arithmetic slip such as $60-38=22$ from mis-multiplying $4\\times 10$.\n\n**Test Day Takeaway:** For \"what changed\" mean problems, work in totals: $\\text{sum}=\\text{mean}\\times\\text{count}$. The removed (or added) value is the difference of the two sums.",
      skills: ["calculate-mean"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A student's test scores are 85, 90, 78, and 92. What score on the fifth test gives a mean of 88?",
      choices: [
        { id: "A", text: "88" },
        { id: "B", text: "90" },
        { id: "C", text: "95" },
        { id: "D", text: "100" }
      ],
      correctAnswer: "C",
      hint: "Set up an equation where the sum of all five scores divided by 5 equals 88, then solve for the unknown score.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** A mean of $88$ over $5$ tests needs a total of $88\\times 5=440$. The first four sum to $345$, so the fifth must be $440-345=95$.\n\n**The Full Solution:**\nStep 1: Write the mean equation: $\\frac{85+90+78+92+x}{5}=88$.\nStep 2: The known scores sum to $85+90+78+92=345$, so $\\frac{345+x}{5}=88$.\nStep 3: Multiply by $5$: $345+x=440$.\nStep 4: Solve: $x=440-345=95$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($88$): assuming the fifth score equals the target mean — but the four known scores average $86.25$, below $88$, so the fifth must be higher.\n* Choice B ($90$): a sum slip; $\\frac{345+90}{5}=87$, which misses $88$.\n* Choice D ($100$): using a wrong known sum (e.g. $340$) to get $440-340=100$.\n\n**Test Day Takeaway:** To hit a target average, find the required total first ($\\text{mean}\\times n$), then subtract what you already have. The missing piece is total needed minus total so far.",
      skills: ["calculate-mean"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If 10 is added to each value in a data set, the mean:",
      choices: [
        { id: "A", text: "Stays the same" },
        { id: "B", text: "Increases by 10" },
        { id: "C", text: "Increases by 100" },
        { id: "D", text: "Doubles" }
      ],
      correctAnswer: "B",
      hint: "Think about what happens to the sum when you add the same number to every value.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Adding the same constant to every value slides the whole data set by that amount, so the mean slides too: it increases by $10$.\n\n**The Full Solution:**\nStep 1: Let the values be $x_1,\\ldots,x_n$ with mean $\\bar{x}$. The new values are $x_1+10,\\ldots,x_n+10$.\nStep 2: The new mean is $\\frac{(x_1+10)+\\cdots+(x_n+10)}{n}=\\frac{\\sum x_i + 10n}{n}=\\bar{x}+10$.\nStep 3: So the mean increases by exactly $10$.\n\n**Why the wrong answers are tempting:**\n* Choice A (stays the same): true only if you add $0$ — adding $10$ to every value must move the center.\n* Choice C (increases by $100$): confusing the rise in the total sum ($10n$) with the rise in the mean; dividing by $n$ gives $10$, not $10n$.\n* Choice D (doubles): doubling would require multiplying each value by $2$; adding shifts, multiplying scales.\n\n**Test Day Takeaway:** Add a constant $c$ to every value and the mean (and median) shift by $c$; the spread is unchanged. Multiplying by $c$ scales the mean by $c$.",
      skills: ["calculate-mean"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A class of 20 students has a mean score of 75. A class of 30 students has a mean score of 80. What is the combined mean?",
      choices: [
        { id: "A", text: "77" },
        { id: "B", text: "77.5" },
        { id: "C", text: "78" },
        { id: "D", text: "78.5" }
      ],
      correctAnswer: "C",
      hint: "Calculate the total sum of scores for each class, add them together, then divide by the total number of students.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** Weight by size, not by count of groups: $\\frac{20\\cdot 75 + 30\\cdot 80}{20+30}=\\frac{3{,}900}{50}=78$.\n\n**The Full Solution:**\nStep 1: Find each class's total score: $20\\times 75=1{,}500$ and $30\\times 80=2{,}400$.\nStep 2: Add the totals and divide by the total number of students: $\\frac{1{,}500+2{,}400}{20+30}=\\frac{3{,}900}{50}$.\nStep 3: $\\frac{3{,}900}{50}=78$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($77$): a division or total slip in computing $\\frac{3{,}900}{50}$.\n* Choice B ($77.5$): the classic trap — the unweighted average $\\frac{75+80}{2}$, which ignores that the larger class pulls the mean toward $80$.\n* Choice D ($78.5$): an arithmetic slip such as using a total of $3{,}925$ instead of $3{,}900$.\n\n**Test Day Takeaway:** To combine group means, use $\\frac{n_1\\bar{x}_1+n_2\\bar{x}_2}{n_1+n_2}$. Averaging the two means directly is only valid when the groups are the same size.",
      skills: ["calculate-mean", "weighted-mean"]
    }
  ],

  // Section: Median
  "Median": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the median of: 3, 7, 9, 2, 5?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "5.2" },
        { id: "C", text: "7" },
        { id: "D", text: "9" }
      ],
      correctAnswer: "A",
      hint: "First arrange the numbers in order from smallest to largest, then find the middle value.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** Sort to $2,3,5,7,9$. With $5$ values, the middle one is the median: $5$.\n\n**The Full Solution:**\nStep 1: Order the data: $2,3,5,7,9$.\nStep 2: With $n=5$ (odd), the median sits at position $\\frac{n+1}{2}=3$.\nStep 3: The $3$rd value is $5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($5.2$): computing the mean $\\frac{2+3+5+7+9}{5}=\\frac{26}{5}=5.2$ instead of the median.\n* Choice C ($7$): taking the middle of the unsorted list $3,7,9,2,5$ — always sort first.\n* Choice D ($9$): picking the maximum (or the last value in the original list), not the center.\n\n**Test Day Takeaway:** Always sort before finding a median. For odd $n$, the median is the single value at position $\\frac{n+1}{2}$.",
      skills: ["find-median"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "What is the median of: 4, 8, 2, 10, 6, 12?",
      choices: [
        { id: "A", text: "6" },
        { id: "B", text: "7" },
        { id: "C", text: "8" },
        { id: "D", text: "9" }
      ],
      correctAnswer: "B",
      hint: "With an even number of values, find the two middle numbers and calculate their average.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Sort to $2,4,6,8,10,12$. With an even count, average the two middle values: $\\frac{6+8}{2}=7$.\n\n**The Full Solution:**\nStep 1: Order the data: $2,4,6,8,10,12$.\nStep 2: With $n=6$ (even), the median is the average of the $3$rd and $4$th values.\nStep 3: Those are $6$ and $8$, so the median is $\\frac{6+8}{2}=\\frac{14}{2}=7$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): taking only the $3$rd value and forgetting to average with the $4$th.\n* Choice C ($8$): taking only the $4$th value — the same omission from the other side.\n* Choice D ($9$): averaging the wrong pair, such as the $4$th and $5$th values $\\frac{8+10}{2}=9$.\n\n**Test Day Takeaway:** For an even number of values, the median is the mean of the two center values — never just one of them.",
      skills: ["find-median"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If outliers are present in data, which measure of center is more reliable?",
      choices: [
        { id: "A", text: "Mean" },
        { id: "B", text: "Median" },
        { id: "C", text: "Mode" },
        { id: "D", text: "Range" }
      ],
      correctAnswer: "B",
      hint: "Consider which measure focuses on the middle position rather than using all values in a calculation.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** The median depends only on the middle position, so a lone extreme value barely moves it. With outliers present, the median is the more reliable center.\n\n**The Full Solution:**\nStep 1: Consider $\\{1,2,3,4,100\\}$. The mean is $\\frac{110}{5}=22$, dragged far up by the outlier $100$.\nStep 2: The median is $3$, the middle value, which still represents the bulk of the data.\nStep 3: Replacing $100$ with $1{,}000$ pushes the mean to $202$ but leaves the median at $3$ — the median resists outliers, so it is the more reliable measure of center here.\n\n**Why the wrong answers are tempting:**\n* Choice A (Mean): the mean uses every value, so a single extreme value distorts it the most — the opposite of reliable.\n* Choice C (Mode): unaffected by outliers, but it tracks frequency, not center; a data set may have no mode or one far from the middle.\n* Choice D (Range): not a measure of center at all — it measures spread, and it is maximally sensitive to outliers.\n\n**Test Day Takeaway:** When data are skewed or contain outliers, trust the median over the mean. The mean follows extreme values; the median holds its ground.",
      skills: ["find-median"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A data set has 15 values. After ordering, which position(s) contain the median?",
      choices: [
        { id: "A", text: "7th position" },
        { id: "B", text: "8th position" },
        { id: "C", text: "7th and 8th positions" },
        { id: "D", text: "7.5th position" }
      ],
      correctAnswer: "B",
      hint: "For an odd number of values n, the median is at position (n+1)/2.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** For odd $n$, the median position is $\\frac{n+1}{2}=\\frac{16}{2}=8$, so it is a single value at the $8$th position.\n\n**The Full Solution:**\nStep 1: $n=15$ is odd, so the median is one value, not an average of two.\nStep 2: Position is $\\frac{n+1}{2}=\\frac{15+1}{2}=8$.\nStep 3: The median is the value in the $8$th position once the data are sorted.\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$th): using $\\frac{n}{2}=7.5$ and rounding down — the odd-$n$ rule is $\\frac{n+1}{2}$, which gives $8$.\n* Choice C ($7$th and $8$th): that is the even-$n$ rule (average two middles); $15$ is odd, so there is exactly one middle.\n* Choice D ($7.5$th): again using $\\frac{n}{2}=7.5$ — but positions are whole numbers, so $7.5$th cannot be a data position.\n\n**Test Day Takeaway:** For odd $n$, the median is at position $\\frac{n+1}{2}$ (a single value); for even $n$, average positions $\\frac{n}{2}$ and $\\frac{n}{2}+1$.",
      skills: ["find-median"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The data set 10, 12, 15, 18, 22, x has a median of 16. What is x?",
      choices: [
        { id: "A", text: "14" },
        { id: "B", text: "16" },
        { id: "C", text: "17" },
        { id: "D", text: "20" }
      ],
      correctAnswer: "C",
      hint: "The median of 6 values is the average of the 3rd and 4th values. Consider where x would fit in the ordered list.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** With $6$ values, the median averages the $3$rd and $4$th. Placing $x$ between $15$ and $18$ makes $15$ the $3$rd value, so $\\frac{15+x}{2}=16$ gives $x=17$.\n\n**The Full Solution:**\nStep 1: With $n=6$ (even), median $=\\frac{\\text{3rd}+\\text{4th}}{2}=16$.\nStep 2: The known values sort to $10,12,15,18,22$. For the median to be $16$, $x$ must land between $15$ and $18$, giving the order $10,12,15,x,18,22$ with $15$ third and $x$ fourth.\nStep 3: Solve $\\frac{15+x}{2}=16\\Rightarrow 15+x=32\\Rightarrow x=17$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): then the order is $10,12,14,15,18,22$ and the median is $\\frac{14+15}{2}=14.5$, not $16$.\n* Choice B ($16$): assuming $x$ equals the median; the order is $10,12,15,16,18,22$ with median $\\frac{15+16}{2}=15.5$.\n* Choice D ($20$): then the order is $10,12,15,18,20,22$ and the median is $\\frac{15+18}{2}=16.5$, not $16$.\n\n**Test Day Takeaway:** In a solve-for-the-unknown median problem, first decide where the unknown lands in the sorted order — that fixes which two values you average.",
      skills: ["find-median"]
    }
  ],

  // Section: Mode
  "Mode": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the mode of: 2, 4, 4, 5, 7, 4, 8?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "4" },
        { id: "C", text: "5" },
        { id: "D", text: "7" }
      ],
      correctAnswer: "B",
      hint: "Count how many times each number appears. The mode is the number that appears most often.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Scan for the value that repeats most: $4$ appears three times, every other value once. The mode is $4$.\n\n**The Full Solution:**\nStep 1: The mode is the most frequent value.\nStep 2: Tally: $2$ once, $4$ three times, $5$ once, $7$ once, $8$ once.\nStep 3: $4$ has the highest frequency, so the mode is $4$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): picking the smallest value — mode is about frequency, not size.\n* Choice C ($5$): this is the median of the sorted set, not the mode.\n* Choice D ($7$): guessing a central-looking value instead of counting occurrences.\n\n**Test Day Takeaway:** The mode is decided by frequency, not magnitude or position — count how often each value appears and take the most common.",
      skills: ["find-mode"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A data set is: 1, 2, 3, 4, 5. What is the mode?",
      choices: [
        { id: "A", text: "1" },
        { id: "B", text: "3" },
        { id: "C", text: "5" },
        { id: "D", text: "No mode" }
      ],
      correctAnswer: "D",
      hint: "Check if any value appears more frequently than the others.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~10s):** Every value $1,2,3,4,5$ appears exactly once, so nothing repeats — there is no mode.\n\n**The Full Solution:**\nStep 1: Tally each value: $1,2,3,4,5$ each occur once.\nStep 2: A mode requires some value to appear more often than the rest.\nStep 3: Since all frequencies are equal at $1$, the data set has no mode.\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): picking the smallest value — being first or smallest does not make a value the mode.\n* Choice B ($3$): this is the median of $\\{1,2,3,4,5\\}$, not the mode.\n* Choice C ($5$): picking the largest value — magnitude does not determine the mode.\n\n**Test Day Takeaway:** When all values appear equally often, there is no mode. \"No mode\" is not the same as \"the mode is $0$.\"",
      skills: ["find-mode"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The data set 3, 5, 5, 7, 9, 9 is:",
      choices: [
        { id: "A", text: "Unimodal" },
        { id: "B", text: "Bimodal" },
        { id: "C", text: "Trimodal" },
        { id: "D", text: "Has no mode" }
      ],
      correctAnswer: "B",
      hint: "Count how many different values appear most frequently. 'Bi' means two, 'uni' means one.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Tally the values: $5$ appears twice and $9$ appears twice, and nothing beats two. Two values tie for the top frequency, so the set is bimodal.\n\n**The Full Solution:**\nStep 1: Count each value: $3$ once, $5$ twice, $7$ once, $9$ twice.\nStep 2: The highest frequency is $2$, and it is shared by both $5$ and $9$.\nStep 3: Two distinct values tie for the most frequent, so the set has two modes — bimodal.\n\n**Why the wrong answers are tempting:**\n* Choice A (Unimodal): you spotted that $5$ repeats but stopped before noticing $9$ also repeats. Check every value.\n* Choice C (Trimodal): three values would need to tie at the top. Here only $5$ and $9$ do; $3$ and $7$ appear once.\n* Choice D (Has no mode): \"no mode\" means every value is equally frequent. These frequencies are not all equal, so modes exist.\n\n**Test Day Takeaway:** The number of modes equals the number of distinct values that share the single highest frequency — one is unimodal, two is bimodal, three or more is multimodal.",
      skills: ["find-mode"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "For which type of data is mode the only appropriate measure of center?",
      choices: [
        { id: "A", text: "Continuous data" },
        { id: "B", text: "Categorical data" },
        { id: "C", text: "Ratio data" },
        { id: "D", text: "All types" }
      ],
      correctAnswer: "B",
      hint: "Think about which type of data cannot be added or averaged, like colors or names.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Categorical data is labels you cannot add or order — you can count the most common category but cannot compute a mean or a median. Mode is the only measure of center that survives.\n\n**The Full Solution:**\nStep 1: Picture categorical data such as favorite colors: red, blue, blue, green, blue.\nStep 2: A \"mean color\" is meaningless and a \"median color\" requires ordering that does not exist for unordered labels.\nStep 3: Only the mode applies: blue is the most common category. So mode is the only appropriate measure of center.\n\n**Why the wrong answers are tempting:**\n* Choice A (Continuous data): height or temperature supports mean and median, which are usually preferred; mode is not the only option.\n* Choice C (Ratio data): weight or distance has a true zero and supports all arithmetic, so mean and median both work.\n* Choice D (All types): mode can be used everywhere, but it is the *only* option only for categorical data — for numerical data the better measures also apply.\n\n**Test Day Takeaway:** Categorical data supports only the mode; ordinal adds the median; interval and ratio data add the mean.",
      skills: ["find-mode"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "If a new value equal to the current mode is added to a data set, the mode:",
      choices: [
        { id: "A", text: "Changes" },
        { id: "B", text: "Stays the same" },
        { id: "C", text: "Becomes undefined" },
        { id: "D", text: "Doubles" }
      ],
      correctAnswer: "B",
      hint: "Adding another copy of the most frequent value makes it even more frequent. Does that change which value is most common?",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Adding another copy of the mode just raises its lead. It is still the most frequent value, so the mode stays the same.\n\n**The Full Solution:**\nStep 1: Say the mode is $m$ with frequency $f$; every other value has frequency $\\le f$.\nStep 2: Add one more $m$. Its frequency becomes $f+1$, while all others are still $\\le f$.\nStep 3: Since $f+1 > f$, the value $m$ is still the most frequent — the mode is unchanged.\n\n**Why the wrong answers are tempting:**\n* Choice A (Changes): the mode would change only if some *other* value overtook it. Adding more of the mode does the opposite.\n* Choice C (Becomes undefined): the mode disappears only when all frequencies tie. Reinforcing the top value makes it more clearly defined, not less.\n* Choice D (Doubles): this confuses the mode (which value is most common) with its count. The count rises by $1$, but the mode value itself does not double.\n\n**Test Day Takeaway:** The mode is a value, not a count — adding more copies of it strengthens it but never changes which value it is.",
      skills: ["find-mode"]
    }
  ],

  // Section: Range
  "Range": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the range of: 15, 8, 22, 11, 19?",
      choices: [
        { id: "A", text: "7" },
        { id: "B", text: "11" },
        { id: "C", text: "14" },
        { id: "D", text: "22" }
      ],
      correctAnswer: "C",
      hint: "Find the largest and smallest values, then subtract the smallest from the largest.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Range is largest minus smallest: $22-8=14$.\n\n**The Full Solution:**\nStep 1: Find the maximum: $22$.\nStep 2: Find the minimum: $8$.\nStep 3: Subtract: $\\text{Range} = 22 - 8 = 14$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): comes from subtracting the wrong pair, such as $15-8$. Range uses the absolute max and min, not adjacent values.\n* Choice B ($11$): a stray difference like $19-8$, or mistaking a single value for the range.\n* Choice D ($22$): that is just the maximum value, not a difference.\n\n**Test Day Takeaway:** $\\text{Range} = x_{\\max} - x_{\\min}$. You do not need to sort — just grab the biggest and smallest values.",
      skills: ["range-calculation"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Data set A has range 10. If each value is multiplied by 3, what is the new range?",
      choices: [
        { id: "A", text: "10" },
        { id: "B", text: "13" },
        { id: "C", text: "30" },
        { id: "D", text: "1000" }
      ],
      correctAnswer: "C",
      hint: "When you multiply each value by a number, the distance between the max and min is also multiplied by that same number.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Multiplying every value by a constant multiplies the range by that constant: $3 \\times 10 = 30$.\n\n**The Full Solution:**\nStep 1: Let the original max be $M$ and min be $m$, so $M - m = 10$.\nStep 2: After multiplying by $3$, the new max is $3M$ and the new min is $3m$.\nStep 3: New range $= 3M - 3m = 3(M-m) = 3 \\times 10 = 30$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): the range is unchanged only when you *add* a constant, not when you multiply.\n* Choice B ($13$): comes from adding $3$ instead of multiplying — and adding to every value would actually leave the range at $10$.\n* Choice D ($1{,}000$): that is $10^3$, from cubing rather than multiplying by $3$.\n\n**Test Day Takeaway:** For $y = cx$, $\\text{Range}(y) = |c| \\times \\text{Range}(x)$. Multiplication scales spread; addition leaves it alone.",
      skills: ["range-calculation"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A data set has minimum 5 and maximum 23. If a value of 30 is added, how does the range change?",
      choices: [
        { id: "A", text: "Increases by 7" },
        { id: "B", text: "Increases by 12" },
        { id: "C", text: "Decreases by 7" },
        { id: "D", text: "Stays the same" }
      ],
      correctAnswer: "A",
      hint: "Calculate the original range, then the new range with 30 as the maximum. Find the difference.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** The new value $30$ sits above the old max $23$, so the range grows by exactly $30 - 23 = 7$.\n\n**The Full Solution:**\nStep 1: Original range $= 23 - 5 = 18$.\nStep 2: Since $30 > 23$, the new maximum is $30$ and the minimum stays $5$, so the new range $= 30 - 5 = 25$.\nStep 3: Change in range $= 25 - 18 = 7$, an increase.\n\n**Why the wrong answers are tempting:**\n* Choice B (Increases by $12$): comes from a slip like $30 - 18$. The change is new range minus old range: $25 - 18 = 7$.\n* Choice C (Decreases by $7$): a value beyond the current max can only stretch the range, never shrink it.\n* Choice D (Stays the same): the range is unchanged only if the new value lands between the current min and max. Here $30 > 23$, so it sets a new max.\n\n**Test Day Takeaway:** A new data point changes the range only if it falls outside the current min–max. If $x_{\\text{new}} > x_{\\max}$, the range grows by $x_{\\text{new}} - x_{\\max}$.",
      skills: ["range-calculation"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Which measure is most affected by outliers?",
      choices: [
        { id: "A", text: "Median" },
        { id: "B", text: "Mode" },
        { id: "C", text: "Range" },
        { id: "D", text: "Interquartile range" }
      ],
      correctAnswer: "C",
      hint: "Consider which measure depends entirely on the extreme values in the data set.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Range uses only the two most extreme values, so a single outlier — which by definition is an extreme — moves it the most.\n\n**The Full Solution:**\nStep 1: $\\text{Range} = x_{\\max} - x_{\\min}$, built entirely from the extremes.\nStep 2: An outlier instantly becomes the new max or min, so it directly inflates the range.\nStep 3: Example: $\\{10, 12, 14, 16, 18\\}$ has range $8$; adding an outlier of $100$ jumps the range to $100 - 10 = 90$.\n\n**Why the wrong answers are tempting:**\n* Choice A (Median): the median depends on position, not magnitude, so one extreme value barely moves it.\n* Choice B (Mode): the mode tracks frequency, not size — an outlier appearing once does not change the most common value.\n* Choice D (Interquartile range): the IQR uses $Q_3 - Q_1$, interior values that ignore the extreme tails, so it is resistant by design.\n\n**Test Day Takeaway:** Range is the least resistant to outliers because it lives on the extremes; median, mode, and IQR are resistant.",
      skills: ["range-calculation"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "If 5 is added to every value in a data set, the range:",
      choices: [
        { id: "A", text: "Increases by 5" },
        { id: "B", text: "Decreases by 5" },
        { id: "C", text: "Stays the same" },
        { id: "D", text: "Doubles" }
      ],
      correctAnswer: "C",
      hint: "If both the maximum and minimum increase by the same amount, what happens to the difference between them?",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Adding a constant shifts every value — including the max and min — by the same amount, so the gap between them is unchanged.\n\n**The Full Solution:**\nStep 1: Let the original max be $M$ and min be $m$, so range $= M - m$.\nStep 2: After adding $5$, the new max is $M+5$ and the new min is $m+5$.\nStep 3: New range $= (M+5) - (m+5) = M - m$, the original range.\n\n**Why the wrong answers are tempting:**\n* Choice A (Increases by $5$): adding a constant shifts the center (mean, median) by $5$, but spread is unaffected.\n* Choice B (Decreases by $5$): wrong direction, and the range does not change at all.\n* Choice D (Doubles): that is the effect of multiplying every value by $2$. Addition shifts; only multiplication scales the range.\n\n**Test Day Takeaway:** For $y = x + c$, $\\text{Range}(y) = \\text{Range}(x)$. A constant shift moves measures of center but never measures of spread.",
      skills: ["range-calculation"]
    }
  ],

  // Section: Standard Deviation
  "Standard Deviation": [
    {
      id: 1,
      difficulty: "easy",
      question: "Standard deviation measures:",
      choices: [
        { id: "A", text: "The center of the data" },
        { id: "B", text: "The spread of the data" },
        { id: "C", text: "The highest value" },
        { id: "D", text: "The most common value" }
      ],
      correctAnswer: "B",
      hint: "Standard deviation tells you how far, on average, values are from the mean.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Standard deviation reports the typical distance of values from the mean — it is a measure of spread.\n\n**The Full Solution:**\nStep 1: Standard deviation is $\\sigma = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n}}$, built from each value's distance to the mean.\nStep 2: A small $\\sigma$ means values cluster tightly; a large $\\sigma$ means they are widely scattered.\nStep 3: So it quantifies how spread out the data is around the center.\n\n**Why the wrong answers are tempting:**\n* Choice A (The center of the data): that describes mean, median, or mode. SD measures distance *from* the center, not the center itself.\n* Choice C (The highest value): that is the maximum; SD uses all values, not just the extreme.\n* Choice D (The most common value): that is the mode, a frequency idea, not a spread idea.\n\n**Test Day Takeaway:** Mean, median, and mode measure center; standard deviation, range, and IQR measure spread.",
      skills: ["standard-deviation-concept"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If all values in a data set are the same, the standard deviation is:",
      choices: [
        { id: "A", text: "1" },
        { id: "B", text: "The value itself" },
        { id: "C", text: "0" },
        { id: "D", text: "Undefined" }
      ],
      correctAnswer: "C",
      hint: "If there is no variation in the data, how much spread is there from the mean?",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Identical values means zero spread, so the standard deviation is $0$.\n\n**The Full Solution:**\nStep 1: If every value equals $k$, the mean is also $k$.\nStep 2: Each deviation is $x_i - \\bar{x} = k - k = 0$.\nStep 3: $\\sigma = \\sqrt{\\frac{\\sum 0^2}{n}} = \\sqrt{0} = 0$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): $1$ is the SD of standardized z-scores, not of identical values; there is no reason SD defaults to $1$.\n* Choice B (The value itself): that confuses SD with the mean. The mean is $k$, but the spread is $0$.\n* Choice D (Undefined): population SD is defined for any $n \\ge 1$; identical values give a perfectly well-defined SD of $0$.\n\n**Test Day Takeaway:** $\\sigma = 0$ exactly when all values are identical — that is the smallest SD can ever be, since SD is always $\\ge 0$.",
      skills: ["standard-deviation-concept"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Data set A: 10, 10, 10, 10. Data set B: 5, 10, 10, 15. Which has larger standard deviation?",
      choices: [
        { id: "A", text: "Data set A" },
        { id: "B", text: "Data set B" },
        { id: "C", text: "They are equal" },
        { id: "D", text: "Cannot determine" }
      ],
      correctAnswer: "B",
      hint: "Compare how spread out each data set is. One has no variation while the other has values farther from the mean.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Set A is all $10$s, so its spread is $0$. Set B has values pulled away from its mean, so any spread beats $0$ — B is larger.\n\n**The Full Solution:**\nStep 1: Set A $\\{10,10,10,10\\}$ has no variation, so $\\sigma_A = 0$.\nStep 2: Set B $\\{5,10,10,15\\}$ has mean $\\frac{5+10+10+15}{4} = 10$, with squared deviations $25, 0, 0, 25$.\nStep 3: $\\sigma_B = \\sqrt{\\frac{25+0+0+25}{4}} = \\sqrt{12.5} \\approx 3.54 > 0 = \\sigma_A$, so set B has the larger standard deviation.\n\n**Why the wrong answers are tempting:**\n* Choice A (Data set A): a set with zero variation cannot have a larger SD than any set that actually spreads out.\n* Choice C (They are equal): both share the mean $10$, but equal means do not force equal spread — center and spread are independent.\n* Choice D (Cannot determine): all values are given, and any variation already guarantees a larger SD than the constant set.\n\n**Test Day Takeaway:** Two data sets can share a mean yet differ in spread — compare standard deviations by how far the values stray from that shared mean.",
      skills: ["standard-deviation-concept"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If 10 is added to every value in a data set, the standard deviation:",
      choices: [
        { id: "A", text: "Increases by 10" },
        { id: "B", text: "Decreases by 10" },
        { id: "C", text: "Stays the same" },
        { id: "D", text: "Is multiplied by 10" }
      ],
      correctAnswer: "C",
      hint: "Adding a constant shifts all values and the mean by the same amount. Do the distances from the mean change?",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Adding a constant moves every value and the mean by the same amount, so each distance from the mean — and therefore the SD — is unchanged.\n\n**The Full Solution:**\nStep 1: The original mean is $\\bar{x}$; after adding $10$, the new mean is $\\bar{x} + 10$.\nStep 2: Each new deviation is $(x_i + 10) - (\\bar{x} + 10) = x_i - \\bar{x}$ — the $10$s cancel.\nStep 3: Since the deviations are identical, $\\sigma_{\\text{new}} = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n}} = \\sigma_{\\text{original}}$.\n\n**Why the wrong answers are tempting:**\n* Choice A (Increases by $10$): the *mean* increases by $10$, but the SD measures distances from the mean, which do not change.\n* Choice B (Decreases by $10$): wrong direction, and SD is never negative, so subtracting $10$ from a small SD is impossible.\n* Choice D (Is multiplied by $10$): that happens when values are *multiplied* by $10$. Addition shifts; only multiplication scales.\n\n**Test Day Takeaway:** For $y = x + c$, $\\sigma_y = \\sigma_x$; for $y = cx$, $\\sigma_y = |c| \\cdot \\sigma_x$. Shifting leaves spread alone; scaling stretches it.",
      skills: ["standard-deviation-concept"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "If every value in a data set is multiplied by 2, the standard deviation:",
      choices: [
        { id: "A", text: "Stays the same" },
        { id: "B", text: "Is multiplied by 2" },
        { id: "C", text: "Is multiplied by 4" },
        { id: "D", text: "Is divided by 2" }
      ],
      correctAnswer: "B",
      hint: "Multiplying values stretches the distances between them and from the mean by the same factor.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Multiplying every value by a constant $c$ multiplies the spread by $|c|$, so multiplying by $2$ multiplies the standard deviation by $2$.\n\n**The Full Solution:**\nStep 1: Standard deviation measures distance from the mean. If each value $x_i$ becomes $2x_i$, the mean $\\bar{x}$ becomes $2\\bar{x}$.\nStep 2: Each deviation scales the same way: $2x_i - 2\\bar{x} = 2(x_i - \\bar{x})$. Every distance from the mean doubles.\nStep 3: So $\\sigma_{\\text{new}} = \\sqrt{\\frac{\\sum [2(x_i-\\bar{x})]^2}{n}} = \\sqrt{4 \\cdot \\frac{\\sum (x_i-\\bar{x})^2}{n}} = 2\\sigma$.\n\nQuick check with $\\{1,3,5\\}$: $\\sigma = \\sqrt{\\frac{8}{3}} \\approx 1.63$. After doubling, $\\{2,6,10\\}$ gives $\\sigma = \\sqrt{\\frac{32}{3}} \\approx 3.27 = 2 \\times 1.63$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (stays the same): true only for *adding* a constant, which shifts the data without stretching it. Multiplying stretches the spread.\n* Choice C (multiplied by $4$): confuses standard deviation with variance. The variance scales by $2^2 = 4$, but the SD is the square root of variance, so it scales by $2$. This is the classic trap.\n* Choice D (divided by $2$): would apply to multiplying by $\\frac{1}{2}$, not by $2$. Multiplying by $2$ widens the spread.\n\n**Test Day Takeaway:** For $y = cx$, standard deviation scales by $|c|$ and variance scales by $c^2$. Adding a constant leaves both unchanged.",
      skills: ["standard-deviation-concept"]
    }
  ],

  // Section: Margin of Error
  "Margin of Error": [
    {
      id: 1,
      difficulty: "easy",
      question: "A poll reports 45% support with a margin of error of ±3%. What is the confidence interval?",
      choices: [
        { id: "A", text: "42% to 48%" },
        { id: "B", text: "45% to 48%" },
        { id: "C", text: "42% to 45%" },
        { id: "D", text: "43% to 47%" }
      ],
      correctAnswer: "A",
      hint: "Subtract the margin of error to find the lower bound, and add it to find the upper bound.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~5s):** The interval is the estimate plus and minus the margin of error: $45\\% - 3\\% = 42\\%$ and $45\\% + 3\\% = 48\\%$.\n\n**The Full Solution:**\nStep 1: A confidence interval centers on the estimate and extends by the margin of error in both directions.\nStep 2: Lower bound: $45\\% - 3\\% = 42\\%$.\nStep 3: Upper bound: $45\\% + 3\\% = 48\\%$. The interval is $42\\%$ to $48\\%$, matching Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($45\\%$ to $48\\%$): only adds the margin and forgets to subtract. The $\\pm$ means you go both ways.\n* Choice C ($42\\%$ to $45\\%$): only subtracts the margin and forgets to add — the mirror error of B.\n* Choice D ($43\\%$ to $47\\%$): uses $\\pm 2\\%$ instead of $\\pm 3\\%$, misreading the margin.\n\n**Test Day Takeaway:** A confidence interval is always estimate $\\pm$ margin of error — apply the margin in *both* directions.",
      skills: ["margin-of-error"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If sample size increases (all else equal), the margin of error:",
      choices: [
        { id: "A", text: "Increases" },
        { id: "B", text: "Decreases" },
        { id: "C", text: "Stays the same" },
        { id: "D", text: "Cannot be determined" }
      ],
      correctAnswer: "B",
      hint: "Think about whether surveying more people makes your estimate more or less precise.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** In $E = z^* \\cdot \\frac{\\sigma}{\\sqrt{n}}$, a bigger $n$ grows the denominator, so the margin of error shrinks.\n\n**The Full Solution:**\nStep 1: The margin of error is $E = z^* \\cdot \\frac{\\sigma}{\\sqrt{n}}$.\nStep 2: As $n$ increases, $\\sqrt{n}$ increases, so $\\frac{\\sigma}{\\sqrt{n}}$ gets smaller — and $E$ decreases.\nStep 3: Sanity check: $n=100$ gives $\\sqrt{n}=10$; $n=400$ gives $\\sqrt{n}=20$. The denominator doubled, halving $E$.\n\n**Why the wrong answers are tempting:**\n* Choice A (increases): reverses the relationship. More data means more precision, not less.\n* Choice C (stays the same): if sample size did not matter, no one would ever survey large groups. It does matter.\n* Choice D (cannot be determined): the formula fully determines it — with everything else fixed, larger $n$ always shrinks $E$.\n\n**Test Day Takeaway:** Margin of error is inversely proportional to $\\sqrt{n}$: more people surveyed means a tighter, more precise estimate.",
      skills: ["margin-of-error"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A survey of 400 people has a margin of error of 5%. To halve the margin of error, you need approximately:",
      choices: [
        { id: "A", text: "800 people" },
        { id: "B", text: "1,200 people" },
        { id: "C", text: "1,600 people" },
        { id: "D", text: "2,000 people" }
      ],
      correctAnswer: "C",
      hint: "Margin of error is related to the square root of sample size. To halve the margin, you need to quadruple the sample.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** Since $E \\propto \\frac{1}{\\sqrt{n}}$, halving $E$ means doubling $\\sqrt{n}$, which means quadrupling $n$: $400 \\times 4 = 1{,}600$.\n\n**The Full Solution:**\nStep 1: The margin of error satisfies $E \\propto \\frac{1}{\\sqrt{n}}$.\nStep 2: To cut $E$ in half, set $\\frac{\\sqrt{400}}{\\sqrt{n_{\\text{new}}}} = \\frac{1}{2}$, so $\\sqrt{n_{\\text{new}}} = 2\\sqrt{400} = 2 \\times 20 = 40$.\nStep 3: Square it: $n_{\\text{new}} = 40^2 = 1{,}600$, which is Choice C.\n\nCheck: $\\frac{1}{\\sqrt{1600}} = \\frac{1}{40}$, exactly half of $\\frac{1}{\\sqrt{400}} = \\frac{1}{20}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($800$): doubles $n$, but that only shrinks $E$ by a factor of $\\sqrt{2} \\approx 1.41$, not $2$.\n* Choice B ($1{,}200$): triples $n$, shrinking $E$ by $\\sqrt{3} \\approx 1.73$ — close but not half.\n* Choice D ($2{,}000$): multiplies $400$ by the $5\\%$ margin, which has nothing to do with the formula.\n\n**Test Day Takeaway:** To shrink the margin of error by a factor of $k$, multiply the sample size by $k^2$ — the square-root law of sampling.",
      skills: ["margin-of-error"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Two polls show: Poll A: 52% ± 4%, Poll B: 48% ± 4%. Can we conclude which candidate is ahead?",
      choices: [
        { id: "A", text: "Yes, candidate A is ahead" },
        { id: "B", text: "Yes, candidate B is ahead" },
        { id: "C", text: "No, the intervals overlap" },
        { id: "D", text: "No, need more information" }
      ],
      correctAnswer: "C",
      hint: "Calculate each confidence interval and check if they share any common values.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** Poll A spans $[48\\%, 56\\%]$ and Poll B spans $[44\\%, 52\\%]$. They overlap on $[48\\%, 52\\%]$, so no winner can be declared.\n\n**The Full Solution:**\nStep 1: Poll A's interval: $52\\% \\pm 4\\% = [48\\%, 56\\%]$.\nStep 2: Poll B's interval: $48\\% \\pm 4\\% = [44\\%, 52\\%]$.\nStep 3: The intervals share the range $[48\\%, 52\\%]$. Both candidates could truly sit at $50\\%$, so the lead is not statistically significant — Choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A (A is ahead): relies only on the point estimate $52\\%$, ignoring that A's true support could be as low as $48\\%$ while B's could be as high as $52\\%$.\n* Choice B (B is ahead): backwards — B's point estimate ($48\\%$) is below A's, so even a naive read would not favor B.\n* Choice D (need more information): we already have both estimates and margins; the overlap *is* the conclusion.\n\n**Test Day Takeaway:** When two confidence intervals overlap, the difference is not statistically significant — you cannot conclude one is ahead.",
      skills: ["margin-of-error"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "What does a 95% confidence level mean?",
      choices: [
        { id: "A", text: "95% of the population was sampled" },
        { id: "B", text: "The result is 95% accurate" },
        { id: "C", text: "If repeated many times, 95% of intervals would contain the true value" },
        { id: "D", text: "There's a 95% chance the sample is random" }
      ],
      correctAnswer: "C",
      hint: "Think about what would happen if you repeated this survey many times with different samples.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** A confidence level describes the method, not one interval: repeat the sampling many times and about $95\\%$ of the intervals built will capture the true value.\n\n**The Full Solution:**\nStep 1: The $95\\%$ is the long-run success rate of the *procedure*, not a property of any single interval.\nStep 2: Picture $100$ independent surveys, each producing an interval. About $95$ would contain the true population value and about $5$ would miss it.\nStep 3: Once a specific interval is computed, the true value is either inside it or not — the $95\\%$ refers to how often the method succeeds across repetitions. That is exactly Choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($95\\%$ of the population sampled): confuses confidence level with sampling fraction. A sample of $1{,}000$ from millions can still carry $95\\%$ confidence.\n* Choice B ($95\\%$ accurate): vague and wrong; the level is not a per-result accuracy figure.\n* Choice D ($95\\%$ chance the sample is random): randomness is a design choice, not something a confidence level measures.\n\n**Test Day Takeaway:** A $95\\%$ confidence level means that in repeated sampling, $95\\%$ of the intervals constructed would contain the true parameter — it is about the method, not a single interval.",
      skills: ["margin-of-error"]
    }
  ]
};
