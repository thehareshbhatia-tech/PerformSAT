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
      explanation: "**Choice B is correct.** The mean is the sum of all values divided by the count.\n\n**Step 1:** Add all values: $4 + 8 + 6 + 5 + 9 + 2 + 8 = 42$\n\n**Step 2:** Divide by the number of values: $$\\text{Mean} = \\frac{42}{7} = 6$$\n\n**Verification:** $6 \\times 7 = 42$ confirms the total.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: partial_calculation] You may get $5$ by miscounting the number of values as $8$ or making an addition error ($40 \\div 8 = 5$). Always recount your data points.\n\u2022 Choice C: [TRAP: arithmetic_slip] Getting $7$ results from an addition error such as computing the sum as $49$ instead of $42$. Double-check each addition step.\n\u2022 Choice D: [TRAP: partial_calculation] Choosing $8$ (the largest repeated value) suggests confusing the mode with the mean. The mode is the most frequent value; the mean requires division.\n\n**Key concept:** $\\text{Mean} = \\frac{\\sum x_i}{n}$ where $n$ is the number of data points.\n\n**Calculator tip:** On Desmos, type mean(4, 8, 6, 5, 9, 2, 8) to verify instantly.",
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
      explanation: "**Choice C is correct.** Use the relationship between mean, count, and sum to find the removed number.\n\n**Step 1:** Find the original total sum: $$\\text{Original sum} = 5 \\times 12 = 60$$\n\n**Step 2:** Find the new total sum after removal: $$\\text{New sum} = 4 \\times 10 = 40$$\n\n**Step 3:** The removed number is the difference: $$60 - 40 = 20$$\n\n**Verification:** If we remove $20$ from a set summing to $60$, the remaining $4$ numbers sum to $40$, giving mean $= 40 \\div 4 = 10$.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: partial_calculation] Choosing $10$ (the new mean) confuses the mean of the remaining set with the removed value. The removed number must be larger than the original mean to bring the average down.\n\u2022 Choice B: [TRAP: partial_calculation] Choosing $12$ (the original mean) assumes the removed number equals the mean. This would leave sum $= 48$, giving mean $= 48/4 = 12$, not $10$.\n\u2022 Choice D: [TRAP: arithmetic_slip] Getting $22$ could result from computing $60 - 38 = 22$, likely from an error like $4 \\times 10 = 38$ or using $3$ instead of $4$ remaining values.\n\n**Key concept:** $\\text{Sum} = \\text{Mean} \\times n$. When a value is removed, the removed value $= \\text{Old sum} - \\text{New sum}$.\n\n**Calculator tip:** No calculator needed here -- this is pure algebra with the mean formula.",
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
      explanation: "**Choice C is correct.** Set up an equation using the mean formula and solve for the unknown fifth score.\n\n**Step 1:** Write the mean equation with unknown $x$: $$\\frac{85 + 90 + 78 + 92 + x}{5} = 88$$\n\n**Step 2:** Simplify the known sum: $85 + 90 + 78 + 92 = 345$, so: $$\\frac{345 + x}{5} = 88$$\n\n**Step 3:** Multiply both sides by $5$: $$345 + x = 440$$\n\n**Step 4:** Solve: $$x = 440 - 345 = 95$$\n\n**Verification:** $(85 + 90 + 78 + 92 + 95) \\div 5 = 440 \\div 5 = 88$.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: partial_calculation] Choosing $88$ assumes the needed score equals the target mean. But the current average of the four scores is $345/4 = 86.25$, which is below $88$, so the fifth score must exceed $88$ to pull the mean up.\n\u2022 Choice B: [TRAP: arithmetic_slip] Getting $90$ could result from a sum error like $345 + 90 = 435$, then $435/5 = 87$, not $88$. This does not produce the target mean.\n\u2022 Choice D: [TRAP: arithmetic_slip] Getting $100$ suggests a calculation error such as computing the existing sum as $340$ instead of $345$, leading to $440 - 340 = 100$.\n\n**Key concept:** To find a missing value given a target mean: $x = (\\text{target mean} \\times n) - \\text{sum of known values}$.\n\n**Calculator tip:** On Desmos, compute 88*5 - (85+90+78+92) to get the answer directly.",
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
      explanation: "**Choice B is correct.** Adding a constant to every data value shifts the mean by that same constant.\n\n**Step 1:** Let the original data be $x_1, x_2, \\ldots, x_n$ with mean $\\bar{x}$. The new data values are $(x_1 + 10), (x_2 + 10), \\ldots, (x_n + 10)$.\n\n**Step 2:** Compute the new mean: $$\\text{New mean} = \\frac{(x_1 + 10) + (x_2 + 10) + \\cdots + (x_n + 10)}{n} = \\frac{\\sum x_i + 10n}{n} = \\bar{x} + 10$$\n\n**Verification:** Example -- data $\\{2, 4, 6\\}$ has mean $4$. Adding $10$: $\\{12, 14, 16\\}$ has mean $14 = 4 + 10$.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: reversed_operation] The mean stays the same only when the same constant is added and subtracted (net zero change), or when we add $0$. Adding $10$ to every value clearly increases all values.\n\u2022 Choice C: [TRAP: partial_calculation] Getting \"increases by $100$\" confuses the total sum increase ($10n$) with the mean increase. The sum increases by $10n$, but dividing by $n$ gives an increase of $10$ for the mean.\n\u2022 Choice D: [TRAP: reversed_operation] Doubling the mean would require multiplying each value by $2$, not adding $10$. Addition shifts; multiplication scales.\n\n**Key concept:** For a linear transformation $y = x + c$: $\\bar{y} = \\bar{x} + c$. Adding a constant shifts the mean by that constant.\n\n**Calculator tip:** Test with a small data set in Desmos: mean(2,4,6) vs. mean(12,14,16) to see the shift.",
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
      explanation: "**Choice C is correct.** This is a weighted mean problem -- you cannot simply average $75$ and $80$ because the groups have different sizes.\n\n**Step 1:** Find total scores for each class:\n$$\\text{Class 1 total} = 20 \\times 75 = 1{,}500$$\n$$\\text{Class 2 total} = 30 \\times 80 = 2{,}400$$\n\n**Step 2:** Compute the combined mean:\n$$\\text{Combined mean} = \\frac{1{,}500 + 2{,}400}{20 + 30} = \\frac{3{,}900}{50} = 78$$\n\n**Verification:** The combined mean ($78$) is between $75$ and $80$, and closer to $80$ because the larger group ($n = 30$) has the higher mean. This makes sense.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: arithmetic_slip] Getting $77$ could result from a computation error in the division, such as rounding $3{,}900/50$ incorrectly or using the wrong total.\n\u2022 Choice B: [TRAP: partial_calculation] Getting $77.5$ is the classic trap -- this is the simple (unweighted) average: $(75 + 80)/2 = 77.5$. This ignores that the class of $30$ should have more influence than the class of $20$.\n\u2022 Choice D: [TRAP: arithmetic_slip] Getting $78.5$ could come from a slight miscalculation, such as computing the total as $3{,}925$ instead of $3{,}900$.\n\n**Key concept:** $$\\text{Weighted mean} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2}$$. Never average the means directly unless the group sizes are equal.\n\n**Calculator tip:** On Desmos, compute (20*75 + 30*80)/(20+30) to confirm the weighted mean.",
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
      explanation: "**Choice A is correct.** The median is the middle value of an ordered data set.\n\n**Step 1:** Arrange the data in ascending order: $$2, 3, 5, 7, 9$$\n\n**Step 2:** With $n = 5$ (odd), the median is at position $\\frac{n+1}{2} = \\frac{6}{2} = 3$rd value.\n\n**Step 3:** The 3rd value is $5$.\n\n**Verification:** Two values ($2, 3$) are below $5$ and two values ($7, 9$) are above $5$. The median correctly splits the data.\n\n**Why other choices are incorrect:**\n\u2022 Choice B: [TRAP: partial_calculation] Getting $5.2$ means you calculated the mean $(2+3+5+7+9)/5 = 26/5 = 5.2$ instead of the median. The mean uses all values; the median uses only position.\n\u2022 Choice C: [TRAP: reversed_operation] Choosing $7$ suggests picking the middle value from the original unordered list ($3, 7, 9, 2, 5$) without sorting first. Always sort before finding the median.\n\u2022 Choice D: [TRAP: reversed_operation] Choosing $9$ (the maximum) suggests confusing the median with the largest value, or perhaps picking the last value in the original list.\n\n**Key concept:** For odd $n$: Median $= x_{(n+1)/2}$ after sorting. Always sort the data first.\n\n**Calculator tip:** On Desmos, type median(3, 7, 9, 2, 5) to verify.",
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
      explanation: "**Choice B is correct.** For an even number of data points, the median is the average of the two middle values.\n\n**Step 1:** Sort the data: $$2, 4, 6, 8, 10, 12$$\n\n**Step 2:** With $n = 6$ (even), the median is the average of the $\\frac{n}{2} = 3$rd and $\\frac{n}{2}+1 = 4$th values.\n\n**Step 3:** The 3rd value is $6$ and the 4th value is $8$: $$\\text{Median} = \\frac{6 + 8}{2} = \\frac{14}{2} = 7$$\n\n**Verification:** Three values ($2, 4, 6$) are at or below $7$ and three values ($8, 10, 12$) are at or above $7$.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: partial_calculation] Choosing $6$ means you took only the 3rd value without averaging it with the 4th. For even $n$, you must average the two middle values.\n\u2022 Choice C: [TRAP: partial_calculation] Choosing $8$ means you took only the 4th value without averaging it with the 3rd. Same error as Choice A but from the other side.\n\u2022 Choice D: [TRAP: arithmetic_slip] Getting $9$ could result from averaging the wrong pair, such as $8$ and $10$ (the 4th and 5th values) instead of the 3rd and 4th.\n\n**Key concept:** For even $n$: $$\\text{Median} = \\frac{x_{n/2} + x_{n/2+1}}{2}$$ after sorting.\n\n**Calculator tip:** On Desmos, type median(4, 8, 2, 10, 6, 12) for instant verification.",
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
      explanation: "**Choice B is correct.** The median is resistant (robust) to outliers because it depends only on the position of the middle value, not on extreme values.\n\n**Step 1:** Consider the data set $\\{1, 2, 3, 4, 100\\}$. The mean $= 110/5 = 22$, which is heavily distorted by the outlier $100$.\n\n**Step 2:** The median $= 3$ (the middle value), which accurately represents the center of most of the data regardless of the outlier.\n\n**Verification:** Changing $100$ to $1{,}000$ would shift the mean to $202$ but the median would remain $3$. This confirms the median's resistance to outliers.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: reversed_operation] The mean is the measure most affected by outliers. It uses every data value in its calculation, so one extreme value can drastically pull it in that direction.\n\u2022 Choice C: [TRAP: partial_calculation] While the mode is technically unaffected by outliers (it only counts frequency), it doesn't reliably measure the center of numerical data. A data set may have no mode, or the mode may be far from the center.\n\u2022 Choice D: [TRAP: reversed_operation] The range is not a measure of center at all -- it measures spread. Furthermore, the range is maximally sensitive to outliers since it uses only the minimum and maximum.\n\n**Key concept:** The median is a resistant measure of center. On the SAT, when data contains outliers or is heavily skewed, prefer the median over the mean.\n\n**Calculator tip:** Test in Desmos: compare mean(1,2,3,4,100) vs. median(1,2,3,4,100) to see the difference.",
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
      explanation: "**Choice B is correct.** For an odd number of values, the median is the single middle value.\n\n**Step 1:** Identify that $n = 15$ is odd, so the median is a single value (not an average of two).\n\n**Step 2:** Apply the position formula: $$\\text{Median position} = \\frac{n + 1}{2} = \\frac{15 + 1}{2} = \\frac{16}{2} = 8$$\n\n**Step 3:** The median is the value at the 8th position in the sorted data.\n\n**Verification:** With 8th position as median, there are $7$ values below it and $7$ values above it: $7 + 1 + 7 = 15$ total.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: arithmetic_slip] Getting the 7th position likely comes from using the wrong formula $n/2 = 15/2 = 7.5$, then rounding down to $7$. The correct formula for odd $n$ is $(n+1)/2$.\n\u2022 Choice C: [TRAP: reversed_operation] The 7th and 8th positions would be correct if $n$ were even (like $n = 14$), where you average the two middle values. Since $n = 15$ is odd, there is exactly one middle value.\n\u2022 Choice D: [TRAP: partial_calculation] \"7.5th position\" results from using $n/2 = 15/2 = 7.5$ without applying the correct formula. There is no 7.5th position in a data set -- positions are whole numbers.\n\n**Key concept:** For odd $n$: median is at position $\\frac{n+1}{2}$. For even $n$: median is the average of positions $\\frac{n}{2}$ and $\\frac{n}{2}+1$.\n\n**Calculator tip:** Quick mental check: $(n+1)/2$ always gives a whole number when $n$ is odd.",
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
      explanation: "**Choice C is correct.** With $6$ values, the median is the average of the 3rd and 4th values. We need to determine where $x$ falls in the sorted order.\n\n**Step 1:** With $n = 6$ (even), the median $= \\frac{\\text{3rd value} + \\text{4th value}}{2} = 16$.\n\n**Step 2:** The known sorted values (without $x$) are: $10, 12, 15, 18, 22$. For the median to be $16$, $x$ must fall between $15$ and $18$ so that the sorted set is $10, 12, 15, x, 18, 22$, making $x$ the 4th value.\n\n**Step 3:** With $15$ as the 3rd value and $x$ as the 4th value: $$\\frac{15 + x}{2} = 16$$ $$15 + x = 32$$ $$x = 17$$\n\n**Verification:** Sorted data: $10, 12, 15, 17, 18, 22$. Median $= (15 + 17)/2 = 32/2 = 16$.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: reversed_operation] If $x = 14$, the sorted set is $10, 12, 14, 15, 18, 22$, giving median $= (14+15)/2 = 14.5$, not $16$. This places $x$ as the 3rd value instead of the 4th.\n\u2022 Choice B: [TRAP: partial_calculation] Choosing $x = 16$ (the median value) gives sorted set $10, 12, 15, 16, 18, 22$ and median $= (15+16)/2 = 15.5$, not $16$. The value of $x$ is not necessarily equal to the median.\n\u2022 Choice D: [TRAP: arithmetic_slip] If $x = 20$, sorted set is $10, 12, 15, 18, 20, 22$ and median $= (15+18)/2 = 16.5$, not $16$. This results from placing $x$ after $18$ instead of between $15$ and $18$.\n\n**Key concept:** When solving for an unknown in a median problem, first determine where the unknown must be positioned in the sorted order, then set up the equation.\n\n**Calculator tip:** Test each answer choice by inserting it into the list and computing median() in Desmos.",
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
      explanation: "**Choice B is correct.** The mode is the value that occurs most frequently in a data set.\n\n**Step 1:** Count the frequency of each value:\n- $2$: appears $1$ time\n- $4$: appears $3$ times\n- $5$: appears $1$ time\n- $7$: appears $1$ time\n- $8$: appears $1$ time\n\n**Step 2:** The value $4$ has the highest frequency ($3$ times), so $\\text{Mode} = 4$.\n\n**Verification:** No other value appears more than once, confirming $4$ is the only mode.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: reversed_operation] Choosing $2$ (the minimum value) confuses the mode with the smallest value. The mode is about frequency, not magnitude.\n\u2022 Choice C: [TRAP: partial_calculation] Choosing $5$ (the median of the sorted data) confuses mode with median. These are different measures of center.\n\u2022 Choice D: [TRAP: reversed_operation] Choosing $7$ may result from picking a middle-looking value from the unsorted list. The mode requires counting occurrences, not estimating the center.\n\n**Key concept:** The mode is the only measure of center based on frequency rather than arithmetic. A data set can have one mode (unimodal), multiple modes (bimodal, multimodal), or no mode at all.\n\n**Calculator tip:** Desmos does not have a built-in mode function, so tally frequencies manually or use a frequency table.",
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
      explanation: "**Choice D is correct.** When every value appears with equal frequency, there is no mode.\n\n**Step 1:** Count frequencies: each value ($1, 2, 3, 4, 5$) appears exactly once.\n\n**Step 2:** Since no value appears more frequently than any other, the data set has no mode.\n\n**Verification:** For a mode to exist, at least one value must appear more often than the others. Here all frequencies are $1$, so no mode exists.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: reversed_operation] Choosing $1$ (the minimum) confuses mode with the smallest value. Appearing first or being smallest does not make a value the mode.\n\u2022 Choice B: [TRAP: partial_calculation] Choosing $3$ (the middle value) confuses the mode with the median. The median of $\\{1,2,3,4,5\\}$ is indeed $3$, but that is not the mode.\n\u2022 Choice C: [TRAP: reversed_operation] Choosing $5$ (the maximum) confuses mode with the largest value. Frequency, not magnitude, determines the mode.\n\n**Key concept:** A data set has no mode when all values occur with equal frequency. Do not confuse \"no mode\" with \"mode is zero\" -- these are different concepts.\n\n**Calculator tip:** When checking for mode, create a quick tally. If all tallies are equal, the answer is \"no mode.\"",
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
      explanation: "**Choice B is correct.** The data set has two values that share the highest frequency, making it bimodal.\n\n**Step 1:** Count the frequency of each value:\n- $3$: appears $1$ time\n- $5$: appears $2$ times\n- $7$: appears $1$ time\n- $9$: appears $2$ times\n\n**Step 2:** The highest frequency is $2$, shared by both $5$ and $9$. Since two distinct values tie for the highest frequency, the data is bimodal (modes are $5$ and $9$).\n\n**Verification:** No value appears $3$ or more times, confirming $2$ is the maximum frequency, shared by exactly two values.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: partial_calculation] \"Unimodal\" means exactly one mode. If you only noticed that $5$ appears twice without checking $9$, you might incorrectly call it unimodal. Always check all values.\n\u2022 Choice C: [TRAP: arithmetic_slip] \"Trimodal\" means three modes. Only two values ($5$ and $9$) share the highest frequency. The values $3$ and $7$ each appear only once.\n\u2022 Choice D: [TRAP: reversed_operation] \"No mode\" applies when all values appear equally often. Here, $5$ and $9$ appear twice while $3$ and $7$ appear once, so modes do exist.\n\n**Key concept:** Unimodal = $1$ mode, Bimodal = $2$ modes, Multimodal = $3$+ modes. Count all values that share the maximum frequency.\n\n**Calculator tip:** Organize data in a frequency table to quickly identify all modes.",
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
      explanation: "**Choice B is correct.** Categorical (qualitative) data consists of labels or categories that cannot be added, subtracted, or averaged, so mode is the only meaningful measure of center.\n\n**Step 1:** Consider categorical data like favorite colors: $\\{\\text{red, blue, blue, green, blue}\\}$. You cannot compute a \"mean color\" or find a \"median color.\"\n\n**Step 2:** The mode (blue, appearing $3$ times) is the only measure that makes sense -- it tells you the most common category.\n\n**Verification:** Try computing mean of $\\{\\text{red, blue, green}\\}$ -- it is mathematically impossible. Median requires ordering, which is not meaningful for unordered categories.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: reversed_operation] Continuous data (like height or temperature) can use mean, median, and mode. In fact, mean and median are typically preferred for continuous data because mode may not be unique or informative.\n\u2022 Choice C: [TRAP: reversed_operation] Ratio data (like weight or distance) has a true zero point and supports all arithmetic operations. Mean and median are both appropriate and often preferred.\n\u2022 Choice D: [TRAP: partial_calculation] While mode can be used with all data types, it is not the only appropriate measure for numerical data. The question asks where mode is the only option.\n\n**Key concept:** Categorical data supports only mode. Ordinal data supports mode and median. Interval/ratio data supports mode, median, and mean.\n\n**Calculator tip:** No calculator needed -- this is a conceptual question about data types and appropriate statistics.",
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
      explanation: "**Choice B is correct.** Adding another instance of the mode increases its frequency, reinforcing it as the most common value.\n\n**Step 1:** Suppose the data set has mode $= m$ with frequency $f$. All other values have frequency $\\leq f$.\n\n**Step 2:** After adding another $m$, the mode's frequency becomes $f + 1$, while all other values still have frequency $\\leq f$.\n\n**Step 3:** Since $f + 1 > f$, $m$ is still the most frequent value. The mode remains $m$.\n\n**Verification:** Example: $\\{1, 2, 2, 3\\}$ has mode $= 2$ (frequency $2$). Adding another $2$: $\\{1, 2, 2, 2, 3\\}$ still has mode $= 2$ (frequency $3$).\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: reversed_operation] The mode would change only if a different value overtook the current mode in frequency. Adding more of the current mode does the opposite -- it strengthens the mode's lead.\n\u2022 Choice C: [TRAP: reversed_operation] The mode becomes undefined only when all values have equal frequency. Adding more of the mode makes its frequency strictly greater than others, so the mode is more clearly defined, not less.\n\u2022 Choice D: [TRAP: percent_confusion] \"Doubles\" confuses the mode (which value is most common) with its frequency (how many times it appears). The mode is a value, not a count. The mode value stays the same even though its count increases by $1$.\n\n**Key concept:** The mode is the value with the highest frequency. Adding more occurrences of the mode strengthens it but does not change which value it is.\n\n**Calculator tip:** No calculator needed -- this is a conceptual reasoning question about how mode behaves under data changes.",
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
      explanation: "**Choice C is correct.** The range is the difference between the maximum and minimum values.\n\n**Step 1:** Identify the maximum: $\\max = 22$\n\n**Step 2:** Identify the minimum: $\\min = 8$\n\n**Step 3:** Calculate: $$\\text{Range} = \\max - \\min = 22 - 8 = 14$$\n\n**Verification:** The range $14$ correctly represents the total spread from the smallest to the largest value in the data set.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: arithmetic_slip] Getting $7$ could result from subtracting consecutive values (like $19 - 12$ or $15 - 8$) instead of the true max minus min. Always identify the absolute largest and smallest values.\n\u2022 Choice B: [TRAP: partial_calculation] Choosing $11$ (the minimum value or possibly $19 - 8 = 11$) confuses the minimum value with the range, or subtracts the wrong pair. Range requires $\\max - \\min$, not an arbitrary difference.\n\u2022 Choice D: [TRAP: reversed_operation] Choosing $22$ (the maximum value) confuses the range with the largest data point. The range is a difference, not a single value.\n\n**Key concept:** $\\text{Range} = x_{\\max} - x_{\\min}$. You do not need to sort the data -- just find the largest and smallest values.\n\n**Calculator tip:** On Desmos, compute max(15,8,22,11,19) - min(15,8,22,11,19) to find the range.",
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
      explanation: "**Choice C is correct.** Multiplying every value by a constant multiplies the range by that same constant.\n\n**Step 1:** Let the original data have $\\max = M$ and $\\min = m$, so $\\text{Range} = M - m = 10$.\n\n**Step 2:** After multiplying each value by $3$: $\\text{New max} = 3M$, $\\text{New min} = 3m$.\n\n**Step 3:** $$\\text{New range} = 3M - 3m = 3(M - m) = 3 \\times 10 = 30$$\n\n**Verification:** Example: if data is $\\{5, 15\\}$ (range $= 10$), multiplying by $3$ gives $\\{15, 45\\}$ (range $= 30$).\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: reversed_operation] The range stays the same only when a constant is added or subtracted, not when values are multiplied. Multiplication scales the spread.\n\u2022 Choice B: [TRAP: arithmetic_slip] Getting $13$ suggests adding $3$ to the range instead of multiplying. Adding $3$ to each value would leave the range unchanged at $10$, not change it to $13$.\n\u2022 Choice D: [TRAP: arithmetic_slip] Getting $1{,}000$ suggests cubing instead of multiplying: $10^3 = 1{,}000$. The range is multiplied by the constant ($\\times 3$), not raised to its power.\n\n**Key concept:** For the transformation $y = cx$: $\\text{Range}(y) = |c| \\times \\text{Range}(x)$. Multiplication scales spread; addition does not.\n\n**Calculator tip:** Test with a simple example in Desmos: max(6,9,15)-min(6,9,15) vs. max(18,27,45)-min(18,27,45).",
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
      explanation: "**Choice A is correct.** Adding a value above the current maximum increases the range by the difference between the new and old maximum.\n\n**Step 1:** Calculate the original range: $$\\text{Original range} = 23 - 5 = 18$$\n\n**Step 2:** After adding $30$, the new maximum is $30$ (since $30 > 23$) and the minimum is still $5$: $$\\text{New range} = 30 - 5 = 25$$\n\n**Step 3:** The change in range: $$25 - 18 = 7$$\n\n**Verification:** The range increased by $30 - 23 = 7$, which equals the amount the new value exceeds the old maximum. This makes sense because only the maximum changed.\n\n**Why other choices are incorrect:**\n\u2022 Choice B: [TRAP: arithmetic_slip] Getting $12$ could result from computing $30 - 18 = 12$ (subtracting the original range from the new value) or from other arithmetic errors. The correct calculation is new range minus old range: $25 - 18 = 7$.\n\u2022 Choice C: [TRAP: reversed_operation] The range cannot decrease when you add a value that is outside the current min-max interval. Adding $30 > 23$ extends the range; it does not shrink it.\n\u2022 Choice D: [TRAP: reversed_operation] The range stays the same only when the new value falls between the current minimum and maximum ($5 \\leq \\text{new value} \\leq 23$). Since $30 > 23$, it creates a new maximum.\n\n**Key concept:** Adding a data point affects the range only if it is below the current min or above the current max. If $x_{\\text{new}} > x_{\\max}$, range increases by $x_{\\text{new}} - x_{\\max}$.\n\n**Calculator tip:** No calculator needed -- just compare old and new extremes.",
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
      explanation: "**Choice C is correct.** The range is the most sensitive to outliers because it is calculated using only the two most extreme values.\n\n**Step 1:** The range formula is $\\text{Range} = x_{\\max} - x_{\\min}$. An outlier, by definition, is an extreme value -- so it directly becomes the new max or min.\n\n**Step 2:** Example: $\\{10, 12, 14, 16, 18\\}$ has range $= 8$. Adding an outlier of $100$: range $= 100 - 10 = 90$. A single outlier increased the range by more than $10\\times$.\n\n**Verification:** The median changes from $14$ to $14$ (unchanged with $6$ values, median $= (14+16)/2 = 15$ but still near center). The mode is unaffected. The IQR barely changes. Only the range is drastically affected.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: reversed_operation] The median is resistant to outliers. It depends on position (the middle value), not magnitude. One extreme value does not shift the middle position significantly.\n\u2022 Choice B: [TRAP: reversed_operation] The mode counts frequency, not magnitude. An outlier appearing once does not affect which value is most common.\n\u2022 Choice D: [TRAP: partial_calculation] The interquartile range ($\\text{IQR} = Q_3 - Q_1$) uses the 25th and 75th percentiles, which are interior values. By design, the IQR ignores the extreme $25\\%$ on each end, making it resistant to outliers.\n\n**Key concept:** Resistance to outliers: Mode and Median are resistant. Mean is somewhat affected. Range is most affected. IQR is resistant by design.\n\n**Calculator tip:** No calculator needed -- this is conceptual. Remember: range uses extremes, IQR uses quartiles.",
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
      explanation: "**Choice C is correct.** Adding a constant to every value shifts all data points equally, leaving the range unchanged.\n\n**Step 1:** Let the original data have $\\max = M$ and $\\min = m$. Original range $= M - m$.\n\n**Step 2:** After adding $5$ to each value: $\\text{New max} = M + 5$, $\\text{New min} = m + 5$.\n\n**Step 3:** $$\\text{New range} = (M + 5) - (m + 5) = M - m = \\text{Original range}$$\n\n**Verification:** Example: $\\{2, 7\\}$ has range $= 5$. After adding $5$: $\\{7, 12\\}$ has range $= 12 - 7 = 5$. Unchanged.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: percent_confusion] \"Increases by $5$\" confuses the effect of adding a constant on spread versus center. Adding a constant shifts the mean and median by $5$, but the range (a measure of spread) is unaffected.\n\u2022 Choice B: [TRAP: sign_error] \"Decreases by $5$\" reverses the supposed effect. Even if the range did change (it doesn't), a positive addition would not decrease spread.\n\u2022 Choice D: [TRAP: reversed_operation] \"Doubles\" would apply if each value were multiplied by $2$. Addition shifts data; multiplication scales it. Only multiplication changes the range.\n\n**Key concept:** For the transformation $y = x + c$: $\\text{Range}(y) = \\text{Range}(x)$. Adding a constant affects measures of center (mean, median) but not measures of spread (range, SD, IQR).\n\n**Calculator tip:** Verify in Desmos: max(3,7,10)-min(3,7,10) equals max(8,12,15)-min(8,12,15) (both $= 7$).",
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
      explanation: "**Choice B is correct.** Standard deviation quantifies how spread out data values are around the mean.\n\n**Step 1:** The standard deviation (SD) measures the average distance of each data point from the mean: $$\\sigma = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n}}$$\n\n**Step 2:** A small SD means data points cluster tightly around the mean. A large SD means data points are widely dispersed.\n\n**Verification:** Data set $\\{9, 10, 11\\}$ has a small SD (values near the mean of $10$). Data set $\\{1, 10, 19\\}$ has a large SD (values far from the mean of $10$). Both have the same mean but very different spreads.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: reversed_operation] \"Center of the data\" describes the mean, median, or mode -- not standard deviation. SD measures how far values are from the center, not the center itself.\n\u2022 Choice C: [TRAP: reversed_operation] \"The highest value\" describes the maximum. Standard deviation uses all values in its calculation, not just the extreme.\n\u2022 Choice D: [TRAP: reversed_operation] \"The most common value\" describes the mode. Mode is about frequency; standard deviation is about dispersion around the mean.\n\n**Key concept:** Standard deviation is the most commonly used measure of spread. On the SAT, know that SD measures variability/dispersion, while mean/median/mode measure center.\n\n**Calculator tip:** On Desmos, type stdev(data) or stdevp(data) to compute sample or population standard deviation.",
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
      explanation: "**Choice C is correct.** When all values are identical, there is zero spread, so the standard deviation is $0$.\n\n**Step 1:** If all values equal some constant $k$, the mean is also $k$: $\\bar{x} = k$.\n\n**Step 2:** Every deviation from the mean is $0$: $x_i - \\bar{x} = k - k = 0$ for all $i$.\n\n**Step 3:** $$\\sigma = \\sqrt{\\frac{\\sum(0)^2}{n}} = \\sqrt{\\frac{0}{n}} = \\sqrt{0} = 0$$\n\n**Verification:** Example: $\\{5, 5, 5, 5\\}$ has mean $= 5$. Each deviation $= 0$, so $\\text{SD} = 0$.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: arithmetic_slip] SD $= 1$ is the standard deviation of standardized (z-score) data, not of identical values. There is no reason for SD to default to $1$.\n\u2022 Choice B: [TRAP: reversed_operation] Confusing SD with the mean. If all values are $5$, the mean is $5$ but the SD is $0$. The value of the data points does not determine the spread.\n\u2022 Choice D: [TRAP: reversed_operation] SD is undefined only when $n = 0$ (no data) or, for sample SD, when $n = 1$. A set of identical values (with $n \\geq 2$) has a well-defined SD of $0$.\n\n**Key concept:** $\\sigma = 0$ if and only if all data values are identical. This is the minimum possible standard deviation -- SD is always $\\geq 0$.\n\n**Calculator tip:** Verify: stdevp(7, 7, 7, 7) in Desmos returns $0$.",
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
      explanation: "**Choice B is correct.** Data set B has values spread away from the mean, while data set A has no variation at all.\n\n**Step 1:** Data set A: $\\{10, 10, 10, 10\\}$. All values are identical, so $\\sigma_A = 0$.\n\n**Step 2:** Data set B: $\\{5, 10, 10, 15\\}$. Mean $= (5+10+10+15)/4 = 40/4 = 10$.\n\nDeviations: $(5-10)^2 = 25$, $(10-10)^2 = 0$, $(10-10)^2 = 0$, $(15-10)^2 = 25$.\n\n$$\\sigma_B = \\sqrt{\\frac{25 + 0 + 0 + 25}{4}} = \\sqrt{\\frac{50}{4}} = \\sqrt{12.5} \\approx 3.54$$\n\n**Step 3:** $\\sigma_B \\approx 3.54 > 0 = \\sigma_A$, so data set B has the larger standard deviation.\n\n**Verification:** Both data sets have the same mean ($10$), but B has values that deviate from the mean while A does not.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: reversed_operation] Data set A has zero variation -- all values are $10$. It is impossible for a set with no variation to have a larger SD than a set with any variation.\n\u2022 Choice C: [TRAP: partial_calculation] Both sets have the same mean ($10$), but equal means do not imply equal standard deviations. Mean measures center; SD measures spread. These are independent properties.\n\u2022 Choice D: [TRAP: partial_calculation] We absolutely can determine this -- we have all the data. Additionally, any set with variation has SD $> 0$, which is greater than the SD of a constant set ($0$).\n\n**Key concept:** Standard deviation measures spread around the mean. Two data sets can have identical means but very different standard deviations.\n\n**Calculator tip:** On Desmos, compare stdevp(10,10,10,10) vs. stdevp(5,10,10,15).",
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
      explanation: "**Choice C is correct.** Adding a constant to every value shifts all data points and the mean by the same amount, leaving the deviations (and thus the SD) unchanged.\n\n**Step 1:** Let the original data have mean $\\bar{x}$. After adding $10$, the new mean is $\\bar{x} + 10$.\n\n**Step 2:** Each new deviation: $(x_i + 10) - (\\bar{x} + 10) = x_i - \\bar{x}$ (the constant cancels).\n\n**Step 3:** Since all deviations are identical to the originals: $$\\sigma_{\\text{new}} = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n}} = \\sigma_{\\text{original}}$$\n\n**Verification:** Data $\\{2, 4, 6\\}$: mean $= 4$, $\\sigma = \\sqrt{(4+0+4)/3} = \\sqrt{8/3} \\approx 1.63$. After adding $10$: $\\{12, 14, 16\\}$: mean $= 14$, $\\sigma = \\sqrt{(4+0+4)/3} \\approx 1.63$. Same SD.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: percent_confusion] \"Increases by $10$\" confuses the effect on the mean with the effect on the SD. The mean increases by $10$, but the SD (which measures distances from the mean) is unaffected.\n\u2022 Choice B: [TRAP: sign_error] \"Decreases by $10$\" not only gets the direction wrong but misunderstands the fundamental principle. SD can never be negative, and subtracting $10$ from a small SD would yield a negative value, which is impossible.\n\u2022 Choice D: [TRAP: reversed_operation] \"Multiplied by $10$\" describes what happens to SD when values are multiplied by $10$, not when $10$ is added. Addition shifts; multiplication scales.\n\n**Key concept:** For $y = x + c$: $\\sigma_y = \\sigma_x$ (SD unchanged). For $y = cx$: $\\sigma_y = |c| \\cdot \\sigma_x$ (SD scaled). This is a critical SAT distinction.\n\n**Calculator tip:** Verify in Desmos: stdevp(2,4,6) equals stdevp(12,14,16).",
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
      explanation: "**Choice B is correct.** Multiplying every value by a constant multiplies the standard deviation by the absolute value of that constant.\n\n**Step 1:** Let the original data have mean $\\bar{x}$ and SD $\\sigma$. After multiplying each value by $2$, the new mean is $2\\bar{x}$.\n\n**Step 2:** Each new deviation: $2x_i - 2\\bar{x} = 2(x_i - \\bar{x})$.\n\n**Step 3:** $$\\sigma_{\\text{new}} = \\sqrt{\\frac{\\sum[2(x_i - \\bar{x})]^2}{n}} = \\sqrt{\\frac{4\\sum(x_i - \\bar{x})^2}{n}} = 2\\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n}} = 2\\sigma$$\n\n**Verification:** Data $\\{1, 3, 5\\}$: mean $= 3$, deviations $= -2, 0, 2$, $\\sigma = \\sqrt{(4+0+4)/3} = \\sqrt{8/3} \\approx 1.63$.\nAfter $\\times 2$: $\\{2, 6, 10\\}$: mean $= 6$, deviations $= -4, 0, 4$, $\\sigma = \\sqrt{(16+0+16)/3} = \\sqrt{32/3} \\approx 3.27 = 2 \\times 1.63$.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: reversed_operation] SD stays the same only when a constant is added or subtracted. Multiplication by $2$ stretches the data, doubling all distances from the mean.\n\u2022 Choice C: [TRAP: partial_calculation] Multiplied by $4$ confuses SD with variance. The variance $\\sigma^2$ is multiplied by $2^2 = 4$, but the standard deviation $\\sigma$ (the square root of variance) is multiplied by $2$. This is a very common SAT trap.\n\u2022 Choice D: [TRAP: sign_error] Dividing by $2$ would apply if values were multiplied by $\\frac{1}{2}$, not by $2$. Multiplying by $2$ doubles the spread, not halves it.\n\n**Key concept:** For $y = cx$: $\\sigma_y = |c| \\cdot \\sigma_x$ and $\\text{Var}(y) = c^2 \\cdot \\text{Var}(x)$. Do not confuse SD with variance when applying scaling rules.\n\n**Calculator tip:** Verify in Desmos: stdevp(1,3,5) vs. stdevp(2,6,10) -- the second should be exactly double the first.",
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
      explanation: "**Choice A is correct.** The confidence interval is formed by subtracting and adding the margin of error to the estimate.\n\n**Step 1:** Compute the lower bound: $$45\\% - 3\\% = 42\\%$$\n\n**Step 2:** Compute the upper bound: $$45\\% + 3\\% = 48\\%$$\n\n**Step 3:** The confidence interval is $42\\%$ to $48\\%$.\n\n**Verification:** The interval is centered at $45\\%$ and extends $3\\%$ in each direction. Width $= 48\\% - 42\\% = 6\\% = 2 \\times 3\\%$.\n\n**Why other choices are incorrect:**\n\u2022 Choice B: [TRAP: partial_calculation] The interval $45\\%$ to $48\\%$ only adds the margin of error to the upper end. The $\\pm$ symbol means you must also subtract from the lower end. This gives only the upper half of the interval.\n\u2022 Choice C: [TRAP: partial_calculation] The interval $42\\%$ to $45\\%$ only subtracts the margin of error from the lower end. Same error as Choice B but in the opposite direction -- this gives only the lower half.\n\u2022 Choice D: [TRAP: arithmetic_slip] The interval $43\\%$ to $47\\%$ uses $\\pm 2\\%$ instead of $\\pm 3\\%$. This could result from misreading the margin of error or a subtraction error.\n\n**Key concept:** $$\\text{Confidence interval} = \\text{estimate} \\pm \\text{margin of error} = [\\hat{p} - E, \\, \\hat{p} + E]$$\n\n**Calculator tip:** Simple arithmetic -- compute $45 - 3$ and $45 + 3$ to get the bounds.",
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
      explanation: "**Choice B is correct.** Increasing the sample size decreases the margin of error because larger samples provide more precise estimates.\n\n**Step 1:** The margin of error formula is: $$E = z^* \\cdot \\frac{\\sigma}{\\sqrt{n}}$$\n\n**Step 2:** As $n$ increases, $\\sqrt{n}$ increases, making the fraction $\\frac{\\sigma}{\\sqrt{n}}$ smaller. Therefore $E$ decreases.\n\n**Step 3:** Intuitively, surveying more people captures more of the population's variability, leading to a more precise estimate.\n\n**Verification:** If $n = 100$, then $\\sqrt{n} = 10$. If $n = 400$, then $\\sqrt{n} = 20$. The denominator doubled, so the margin of error is halved.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: reversed_operation] The margin of error decreases, not increases, with larger samples. More data means more precision, not less. This reverses the fundamental relationship.\n\u2022 Choice C: [TRAP: partial_calculation] If sample size did not affect the margin of error, there would be no reason to ever survey more than a handful of people. Larger $n$ always improves precision.\n\u2022 Choice D: [TRAP: partial_calculation] The relationship is fully determined by the formula. With all else equal (confidence level and population variability fixed), larger $n$ always means smaller margin of error.\n\n**Key concept:** $E \\propto \\frac{1}{\\sqrt{n}}$. The margin of error is inversely proportional to the square root of the sample size. This is why polling organizations seek large samples.\n\n**Calculator tip:** Compare $1/\\sqrt{100}$ vs. $1/\\sqrt{400}$ on Desmos to see the relationship.",
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
      explanation: "**Choice C is correct.** Because the margin of error is proportional to $1/\\sqrt{n}$, halving the margin of error requires quadrupling the sample size.\n\n**Step 1:** The margin of error relationship: $E \\propto \\frac{1}{\\sqrt{n}}$.\n\n**Step 2:** To halve $E$: $$\\frac{E}{2} \\propto \\frac{1}{\\sqrt{n_{\\text{new}}}}$$\n\nSetting up the ratio: $$\\frac{1/\\sqrt{n_{\\text{new}}}}{1/\\sqrt{400}} = \\frac{1}{2}$$\n\n$$\\frac{\\sqrt{400}}{\\sqrt{n_{\\text{new}}}} = \\frac{1}{2} \\implies \\sqrt{n_{\\text{new}}} = 2\\sqrt{400} = 2 \\times 20 = 40$$\n\n$$n_{\\text{new}} = 40^2 = 1{,}600$$\n\n**Verification:** $E \\propto 1/\\sqrt{n}$. Original: $1/\\sqrt{400} = 1/20$. New: $1/\\sqrt{1600} = 1/40$. Indeed, $1/40$ is half of $1/20$.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: partial_calculation] Doubling the sample to $800$ seems intuitive but only reduces the margin of error by a factor of $\\sqrt{2} \\approx 1.41$, not $2$. The relationship involves a square root, not a linear proportion.\n\u2022 Choice B: [TRAP: arithmetic_slip] Getting $1{,}200$ ($= 400 \\times 3$) tripling the sample would reduce the margin by factor $\\sqrt{3} \\approx 1.73$, close to but not exactly half.\n\u2022 Choice D: [TRAP: arithmetic_slip] Getting $2{,}000$ ($= 400 \\times 5$) could result from multiplying by the original margin of error percentage ($5$), which is not how the formula works.\n\n**Key concept:** To reduce the margin of error by a factor of $k$, you must multiply the sample size by $k^2$. This is the \"square root law\" of sampling: $$\\frac{E_1}{E_2} = \\sqrt{\\frac{n_2}{n_1}}$$\n\n**Calculator tip:** On Desmos, set up $1/\\sqrt{n}$ as a function and verify that $n = 1600$ gives half the value of $n = 400$.",
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
      explanation: "**Choice C is correct.** When confidence intervals overlap, we cannot conclude a statistically significant difference between the candidates.\n\n**Step 1:** Compute Poll A's confidence interval: $$52\\% \\pm 4\\% = [48\\%, \\, 56\\%]$$\n\n**Step 2:** Compute Poll B's confidence interval: $$48\\% \\pm 4\\% = [44\\%, \\, 52\\%]$$\n\n**Step 3:** The intervals overlap in the range $[48\\%, 52\\%]$. This means the true values could be equal or even reversed from what the point estimates suggest.\n\n**Verification:** It is possible that both candidates truly have $50\\%$ support -- this value falls within both confidence intervals. Therefore, we cannot conclude who is truly ahead.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: partial_calculation] While the point estimate for A ($52\\%$) is higher than B ($48\\%$), the margin of error means A's true support could be as low as $48\\%$ and B's could be as high as $52\\%$. The point estimates alone do not tell the full story.\n\u2022 Choice B: [TRAP: reversed_operation] Candidate B's point estimate ($48\\%$) is actually lower than A's ($52\\%$). Even if you could draw a conclusion, it would not favor B.\n\u2022 Choice D: [TRAP: partial_calculation] We actually have enough information -- we have both point estimates and margins of error. The overlap of the intervals is itself the conclusion: the difference is not statistically significant.\n\n**Key concept:** When two confidence intervals overlap, the difference between the estimates is not statistically significant. On the SAT, overlapping intervals $\\Rightarrow$ cannot conclude a difference.\n\n**Calculator tip:** Sketch the two intervals on a number line to visualize the overlap. If they share any region, the answer is inconclusive.",
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
      explanation: "**Choice C is correct.** A $95\\%$ confidence level means that if we repeated the sampling procedure many times, approximately $95\\%$ of the resulting confidence intervals would contain the true population parameter.\n\n**Step 1:** The confidence level describes the long-run reliability of the method, not any single interval. It answers: \"How often does this procedure produce an interval that captures the truth?\"\n\n**Step 2:** Imagine conducting $100$ independent surveys, each producing a confidence interval. About $95$ of those intervals would contain the true population value, and about $5$ would not.\n\n**Step 3:** Crucially, once a specific interval is calculated, the true value either is or is not in it -- the $95\\%$ refers to the method's success rate across many repetitions.\n\n**Verification:** This interpretation is consistent with the frequentist definition of probability: the long-run proportion of successes in repeated identical experiments.\n\n**Why other choices are incorrect:**\n\u2022 Choice A: [TRAP: percent_confusion] The confidence level has nothing to do with the proportion of the population sampled. A survey of $1{,}000$ people from a population of millions samples far less than $1\\%$, yet can have a $95\\%$ confidence level.\n\u2022 Choice B: [TRAP: percent_confusion] \"$95\\%$ accurate\" is a vague, misleading interpretation. The confidence level does not mean each individual result is $95\\%$ correct -- it describes the success rate of the interval-construction method over many repetitions.\n\u2022 Choice D: [TRAP: reversed_operation] Randomness of the sample is a design choice (random sampling methods), not something measured by a confidence level. Confidence level addresses interval reliability, not sampling quality.\n\n**Key concept:** A $95\\%$ confidence level means: in repeated sampling, $95\\%$ of the constructed intervals will capture the true parameter. This is one of the most commonly misinterpreted concepts on the SAT.\n\n**Calculator tip:** No calculator needed -- this is a conceptual interpretation question. Memorize the correct definition of confidence level for the SAT.",
      skills: ["margin-of-error"]
    }
  ]
};
