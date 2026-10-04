// Practice questions for Statistics module
// Questions are organized by SECTION (question type)

export const statisticsQuestions = {
  // Section: Mean
  "Mean": [
    {
      id: 1,
      difficulty: "easy",
      question: "The dot plot shows the number of birds recorded at each of $8$ feeding stations during a one-hour count. What is the mean number of birds recorded per station?",
      diagram: { type: "dotPlot", params: { data: [{ value: 2, count: 3 }, { value: 4, count: 2 }, { value: 6, count: 2 }, { value: 10, count: 1 }], xMin: 1, xMax: 11, xLabel: "Number of birds" } },
      choices: [
        // distractor: reports the value with the tallest stack of dots, which is the mode, not the mean.
        { id: "A", text: "$2$" },
        // distractor: reports the median, the average of the fourth and fifth ordered values.
        { id: "B", text: "$4$" },
        { id: "C", text: "$4.5$" },
        // distractor: divides the total by $4$, the number of distinct values marked with dots, instead of by the $8$ dots.
        { id: "D", text: "$9$" }
      ],
      correctAnswer: "C",
      hint: "Every dot is one station, so the total number of dots is the number you divide by.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** The dots give $2, 2, 2, 4, 4, 6, 6, 10$. The sum is $36$, and $\\frac{36}{8} = 4.5$.\n\n**The Full Solution:**\nStep 1: Read one value for each dot: $2, 2, 2, 4, 4, 6, 6, 10$. That is $8$ values, one per station.\nStep 2: Add them: $3(2) + 2(4) + 2(6) + 10 = 6 + 8 + 12 + 10 = 36$.\nStep 3: Divide by the number of stations: $\\frac{36}{8} = 4.5$. Check: $4.5$ lies above the cluster at $2$ because the single station with $10$ birds pulls the average up. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports the value with the tallest stack of dots, which is the mode, not the mean.\n* Choice B ($4$): reports the median, the average of the fourth and fifth ordered values.\n* Choice D ($9$): divides the total by $4$, the number of distinct values marked with dots, instead of by the $8$ dots.\n\n**Test Day Takeaway:** On a dot plot the divisor is the number of dots, not the number of labeled positions. Count the stacks fully before dividing.",
      skills: ["calculate-mean"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$14, 9, 17, 11, 14$\nWhat is the mean of the data shown?",
      choices: [
        // distractor: reports the range, $17 - 9 = 8$, instead of the mean.
        { id: "A", text: "$8$" },
        { id: "B", text: "$13$" },
        // distractor: reports $14$, the value that appears twice and also sits in the middle of the ordered list; that is the mode and the median, not the mean.
        { id: "C", text: "$14$" },
        // distractor: adds the values correctly but divides $65$ by $4$ instead of by the $5$ values.
        { id: "D", text: "$16.25$" }
      ],
      correctAnswer: "B",
      hint: "Add all five values, then divide by the number of values.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The sum is $14 + 9 + 17 + 11 + 14 = 65$, and $\\frac{65}{5} = 13$.\n\n**The Full Solution:**\nStep 1: Count the values: there are $5$ of them.\nStep 2: Add them: $14 + 9 + 17 + 11 + 14 = 65$.\nStep 3: Divide the sum by the number of values: $\\frac{65}{5} = 13$. Check: $5(13) = 65$, so five values averaging $13$ give the same total. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): reports the range, $17 - 9 = 8$, instead of the mean.\n* Choice C ($14$): reports $14$, the value that appears twice and also sits in the middle of the ordered list; that is the mode and the median, not the mean.\n* Choice D ($16.25$): adds the values correctly but divides $65$ by $4$ instead of by the $5$ values.\n\n**Test Day Takeaway:** The mean is the sum divided by the count of values. Count every value, including repeats, before dividing.",
      skills: ["calculate-mean"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "$9, 14, 6, 17, 11, k$\nThe mean of the data set shown is $12$. What is the value of $k$?",
      choices: [
        // distractor: uses $5$ values instead of $6$, computing $5(12) - 57 = 3$.
        { id: "A", text: "$3$" },
        // distractor: reports the mean of the five known values, $\frac{57}{5} = 11.4$.
        { id: "B", text: "$11.4$" },
        // distractor: assumes the missing value must equal the mean.
        { id: "C", text: "$12$" },
        { id: "D", text: "$15$" }
      ],
      correctAnswer: "D",
      hint: "Six values with a mean of 12 must have a particular total.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~25s):** The six values must total $6(12) = 72$. The five known values total $57$, so $k = 72 - 57 = 15$.\n\n**The Full Solution:**\nStep 1: There are $6$ values with a mean of $12$, so their sum is $6(12) = 72$.\nStep 2: The known values add to $9 + 14 + 6 + 17 + 11 = 57$.\nStep 3: So $57 + k = 72$, and $k = 15$. Check: $\\frac{9 + 14 + 6 + 17 + 11 + 15}{6} = \\frac{72}{6} = 12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): uses $5$ values instead of $6$, computing $5(12) - 57 = 3$.\n* Choice B ($11.4$): reports the mean of the five known values, $\\frac{57}{5} = 11.4$.\n* Choice C ($12$): assumes the missing value must equal the mean.\n\n**Test Day Takeaway:** Convert a given mean into a total (mean times count), then subtract what you know. Count the unknown as one of the values.",
      skills: ["calculate-mean"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A data set of $12$ numbers has a mean of $4.5$. After one number is removed, the mean of the remaining numbers is $4.2$. What is the value of the removed number?",
      choices: [
        // distractor: subtracts the two means, $4.5 - 4.2 = 0.3$, instead of the two totals.
        { id: "A", text: "$0.3$" },
        // distractor: multiplies both means by $12$, computing $12(4.5) - 12(4.2) = 3.6$.
        { id: "B", text: "$3.6$" },
        { id: "C", text: "$7.8$" },
        // distractor: reports the total of the remaining $11$ numbers, $11(4.2) = 46.2$.
        { id: "D", text: "$46.2$" }
      ],
      correctAnswer: "C",
      hint: "Work with totals, not means.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** The totals are $12(4.5) = 54$ and $11(4.2) = 46.2$, so the removed number is $54 - 46.2 = 7.8$.\n\n**The Full Solution:**\nStep 1: The original $12$ numbers add to $12(4.5) = 54$.\nStep 2: The remaining $11$ numbers add to $11(4.2) = 46.2$.\nStep 3: The removed number is the difference of the totals: $54 - 46.2 = 7.8$. Check: $\\frac{54 - 7.8}{11} = \\frac{46.2}{11} = 4.2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.3$): subtracts the two means, $4.5 - 4.2 = 0.3$, instead of the two totals.\n* Choice B ($3.6$): multiplies both means by $12$, computing $12(4.5) - 12(4.2) = 3.6$.\n* Choice D ($46.2$): reports the total of the remaining $11$ numbers, $11(4.2) = 46.2$.\n\n**Test Day Takeaway:** When a value is added or removed, compare TOTALS (mean times count), each with its own count. Means cannot be subtracted directly.",
      skills: ["calculate-mean"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Class A has $25$ students with a mean quiz score of $78$. Classes A and B together have $40$ students with a mean quiz score of $81$. What is the mean quiz score of class B?",
      choices: [
        // distractor: divides class B’s total, $1{,}290$, by all $40$ students instead of by the $15$ students in class B.
        { id: "A", text: "$32.25$" },
        // distractor: swaps the class sizes, treating class A as having $15$ students and class B as having $25$, which gives $\frac{3{,}240 - 15(78)}{25} = 82.8$.
        { id: "B", text: "$82.8$" },
        // distractor: averages the two class means as if the classes were the same size, solving $\frac{78 + m}{2} = 81$ to get $m = 84$.
        { id: "C", text: "$84$" },
        { id: "D", text: "$86$" }
      ],
      correctAnswer: "D",
      hint: "Turn each mean into a total, and find how many students are in class B.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~40s):** All $40$ students scored $40(81) = 3{,}240$ points and class A scored $25(78) = 1{,}950$, so the $15$ students in class B scored $1{,}290$, a mean of $\\frac{1{,}290}{15} = 86$.\n\n**The Full Solution:**\nStep 1: The combined total is $40(81) = 3{,}240$, and class A’s total is $25(78) = 1{,}950$.\nStep 2: Class B has $40 - 25 = 15$ students, and their total is $3{,}240 - 1{,}950 = 1{,}290$.\nStep 3: Class B’s mean is $\\frac{1{,}290}{15} = 86$. Check: $\\frac{25(78) + 15(86)}{40} = \\frac{1{,}950 + 1{,}290}{40} = \\frac{3{,}240}{40} = 81$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($32.25$): divides class B’s total, $1{,}290$, by all $40$ students instead of by the $15$ students in class B.\n* Choice B ($82.8$): swaps the class sizes, treating class A as having $15$ students and class B as having $25$, which gives $\\frac{3{,}240 - 15(78)}{25} = 82.8$.\n* Choice C ($84$): averages the two class means as if the classes were the same size, solving $\\frac{78 + m}{2} = 81$ to get $m = 84$.\n\n**Test Day Takeaway:** A combined mean is a weighted average, so the larger group pulls it toward its own mean. Work with totals and the correct count for each group.",
      skills: ["calculate-mean", "weighted-mean"]
    }
  ],

  // Section: Median
  "Median": [
    {
      id: 1,
      difficulty: "easy",
      question: "$14, 9, 21, 17, 12, 28, 16, 19, 11$\nWhat is the median of the data shown?",
      choices: [
        // distractor: reports the least value, which is first in the ordered list, not in the middle.
        { id: "A", text: "$9$" },
        // distractor: takes the fifth value in the order the data are listed, $12$, without first putting the values in order.
        { id: "B", text: "$12$" },
        { id: "C", text: "$16$" },
        // distractor: averages the least and greatest values, $\frac{9 + 28}{2} = 18.5$; that is the midrange, not the median.
        { id: "D", text: "$18.5$" }
      ],
      correctAnswer: "C",
      hint: "Put the values in order before looking for the middle one.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** In order the values are $9, 11, 12, 14, 16, 17, 19, 21, 28$; the fifth of the $9$ values is $16$.\n\n**The Full Solution:**\nStep 1: Order the values from least to greatest: $9, 11, 12, 14, 16, 17, 19, 21, 28$.\nStep 2: With $9$ values, the median is the $\\frac{9 + 1}{2} = 5$th value in the ordered list.\nStep 3: The fifth ordered value is $16$. Check: four values ($9, 11, 12, 14$) are less than $16$ and four values ($17, 19, 21, 28$) are greater. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): reports the least value, which is first in the ordered list, not in the middle.\n* Choice B ($12$): takes the fifth value in the order the data are listed, $12$, without first putting the values in order.\n* Choice D ($18.5$): averages the least and greatest values, $\\frac{9 + 28}{2} = 18.5$; that is the midrange, not the median.\n\n**Test Day Takeaway:** The median is the middle of the ORDERED list. Sort first; the middle of the list as printed means nothing.",
      skills: ["find-median"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The table shows the height, in centimeters, of each of $8$ saplings. What is the median of the heights, in centimeters?",
      diagram: { type: "dataTable", params: { headers: ["Sapling", "1", "2", "3", "4", "5", "6", "7", "8"], rows: [["Height (cm)", "34", "41", "28", "37", "45", "30", "39", "44"]] } },
      choices: [
        // distractor: reports only the lower of the two middle values instead of averaging them.
        { id: "A", text: "$37$" },
        // distractor: computes the mean of the eight heights, $\frac{298}{8}$, rather than the median.
        { id: "B", text: "$37.25$" },
        { id: "C", text: "$38$" },
        // distractor: averages the fourth and fifth entries as the table lists them, $\frac{37 + 45}{2}$, without ordering first.
        { id: "D", text: "$41$" }
      ],
      correctAnswer: "C",
      hint: "With an even number of values, two of them sit in the middle after ordering.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** Ordered, the middle two heights are $37$ and $39$, so the median is $\\frac{37 + 39}{2} = 38$.\n\n**The Full Solution:**\nStep 1: Order the heights: $28,\\ 30,\\ 34,\\ 37,\\ 39,\\ 41,\\ 44,\\ 45$.\nStep 2: With an even count of $8$ values, the median is the average of the fourth and fifth ordered values, $37$ and $39$.\nStep 3: Median $= \\frac{37 + 39}{2} = 38$ centimeters. Check: exactly four heights lie below $38$ and four lie above it. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($37$): reports only the lower of the two middle values instead of averaging them.\n* Choice B ($37.25$): computes the mean of the eight heights, $\\frac{298}{8}$, rather than the median.\n* Choice D ($41$): averages the fourth and fifth entries as the table lists them, $\\frac{37 + 45}{2}$, without ordering first.\n\n**Test Day Takeaway:** For an even count the median is the average of the two middle ordered values, so it need not be one of the listed values.",
      skills: ["find-median"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The wind speed, in kilometers per hour, at a weather station was recorded on each of $27$ days. The table shows each recorded speed and the number of days on which it occurred. What is the median of the $27$ recorded speeds?",
      diagram: { type: "dataTable", params: { headers: ["Wind speed (km/h)", "Number of days"], rows: [["11", "8"], ["13", "2"], ["16", "5"], ["19", "3"], ["22", "6"], ["25", "3"]] } },
      choices: [
        // distractor: reports the median of the day counts in the second column, $\frac{3 + 5}{2}$, instead of the median of the speeds.
        { id: "A", text: "$4$" },
        // distractor: reports the speed recorded on the most days, which is the mode.
        { id: "B", text: "$11$" },
        { id: "C", text: "$16$" },
        // distractor: takes the median of the six speeds listed, $\frac{16 + 19}{2}$, treating each row as a single value instead of as many days.
        { id: "D", text: "$17.5$" }
      ],
      correctAnswer: "C",
      hint: "Count the days as you move down the table until you reach the fourteenth one.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~40s):** With $27$ days the median is the $14$th ordered speed. Running totals of $8, 10, 15$ show the $14$th day falls in the $16$ row.\n\n**The Full Solution:**\nStep 1: There are $27$ recorded speeds, an odd count, so the median is the $14$th value in order.\nStep 2: Accumulate the day counts from the least speed up: $8$ days at $11$, then $8 + 2 = 10$ days through $13$, then $10 + 5 = 15$ days through $16$.\nStep 3: Days $11$ through $15$ in order all recorded $16$ kilometers per hour, so the $14$th value is $16$. Check: only $10$ days recorded a speed below $16$, and the five days at $16$ fill positions $11$ through $15$, which includes the $14$th. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): reports the median of the day counts in the second column, $\\frac{3 + 5}{2}$, instead of the median of the speeds.\n* Choice B ($11$): reports the speed recorded on the most days, which is the mode.\n* Choice D ($17.5$): takes the median of the six speeds listed, $\\frac{16 + 19}{2}$, treating each row as a single value instead of as many days.\n\n**Test Day Takeaway:** A frequency table lists each value once but represents it many times. Add the counts to locate the middle position before reading a median.",
      skills: ["find-median"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "$5, 9, 12, 12, 16, 21, 27, 34$\nIf the two greatest values are removed from the data set shown, by how much does the median decrease?",
      choices: [
        // distractor: assumes that removing extreme values never changes the median, but removing two values from one end shifts the middle.
        { id: "A", text: "$0$" },
        { id: "B", text: "$2$" },
        // distractor: uses $16$, the fifth value, as the original median instead of averaging the fourth and fifth values, and computes $16 - 12 = 4$.
        { id: "C", text: "$4$" },
        // distractor: reports the original median, $14$, instead of the amount it decreases.
        { id: "D", text: "$14$" }
      ],
      correctAnswer: "B",
      hint: "With an even number of values, average the two middle values.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** The original median is $\\frac{12 + 16}{2} = 14$. Without $27$ and $34$, the median is $\\frac{12 + 12}{2} = 12$, a decrease of $2$.\n\n**The Full Solution:**\nStep 1: The $8$ values are already in order, so the median is the average of the fourth and fifth values: $\\frac{12 + 16}{2} = 14$.\nStep 2: Removing $27$ and $34$ leaves $5, 9, 12, 12, 16, 21$; the median is the average of the third and fourth values, $\\frac{12 + 12}{2} = 12$.\nStep 3: The median decreases by $14 - 12 = 2$. Check: in the new data set three values lie at or below $12$ and three lie at or above it. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): assumes that removing extreme values never changes the median, but removing two values from one end shifts the middle.\n* Choice C ($4$): uses $16$, the fifth value, as the original median instead of averaging the fourth and fifth values, and computes $16 - 12 = 4$.\n* Choice D ($14$): reports the original median, $14$, instead of the amount it decreases.\n\n**Test Day Takeaway:** Removing values from one end shifts the middle of the list. Recount the positions and recompute the median each time the data set changes.",
      skills: ["find-median"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "$9, 13, 18, 27, 31, x$\nThe median of the data set shown is $21$. What is the value of $x$?",
      choices: [
        // distractor: pairs $x$ with $27$ as the two middle values, solving $\frac{x + 27}{2} = 21$, but $x = 15$ would make $15$ and $18$ the middle values.
        { id: "A", text: "$15$" },
        // distractor: assumes the unknown value equals the median; with $x = 21$ the median is $\frac{18 + 21}{2} = 19.5$.
        { id: "B", text: "$21$" },
        { id: "C", text: "$24$" },
        // distractor: pairs $x$ with $13$, solving $\frac{13 + x}{2} = 21$, but $x = 29$ would make $18$ and $27$ the middle values.
        { id: "D", text: "$29$" }
      ],
      correctAnswer: "C",
      hint: "Decide which two values must sit in the middle for the median to be 21.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~45s):** The median $21$ lies between $18$ and $27$, so the middle values must be $18$ and $x$: $\\frac{18 + x}{2} = 21$, so $x = 24$.\n\n**The Full Solution:**\nStep 1: With $6$ values, the median is the average of the third and fourth ordered values.\nStep 2: If $x \\le 18$ the median is at most $18$, and if $x \\ge 27$ it is $\\frac{18 + 27}{2} = 22.5$. For a median of $21$, $x$ must lie between $18$ and $27$, so the middle values are $18$ and $x$.\nStep 3: Solve $\\frac{18 + x}{2} = 21$: $18 + x = 42$, so $x = 24$. Check: the ordered data $9, 13, 18, 24, 27, 31$ have median $\\frac{18 + 24}{2} = 21$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): pairs $x$ with $27$ as the two middle values, solving $\\frac{x + 27}{2} = 21$, but $x = 15$ would make $15$ and $18$ the middle values.\n* Choice B ($21$): assumes the unknown value equals the median; with $x = 21$ the median is $\\frac{18 + 21}{2} = 19.5$.\n* Choice D ($29$): pairs $x$ with $13$, solving $\\frac{13 + x}{2} = 21$, but $x = 29$ would make $18$ and $27$ the middle values.\n\n**Test Day Takeaway:** An unknown value can land anywhere in the ordered list. Find where it must sit for the given median, then solve, and confirm by reordering.",
      skills: ["find-median"]
    }
  ],

  // Section: Mode
  "Mode": [
    {
      id: 1,
      difficulty: "easy",
      question: "A survey asked each of $55$ households how many vehicles it owns. The bar graph shows the number of households that gave each response. What is the mode of the numbers of vehicles owned?",
      diagram: { type: "barChart", params: { data: [{ label: "0", value: 4 }, { label: "1", value: 17 }, { label: "2", value: 23 }, { label: "3", value: 9 }, { label: "4", value: 2 }], xAxisLabel: "Number of vehicles", yAxisLabel: "Number of households", yMax: 25, yStep: 5 } },
      choices: [
        // distractor: reads the second-tallest bar instead of the tallest.
        { id: "A", text: "$1$" },
        { id: "B", text: "$2$" },
        // distractor: reports the greatest response shown on the axis rather than the most frequent one.
        { id: "C", text: "$4$" },
        // distractor: reports the height of the tallest bar, which is how often the mode occurs, not the mode itself.
        { id: "D", text: "$23$" }
      ],
      correctAnswer: "B",
      hint: "The mode is a response, not a bar height.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The tallest bar sits above $2$ vehicles, so $2$ is the response given most often.\n\n**The Full Solution:**\nStep 1: The horizontal axis lists the possible responses and each bar height is the number of households giving that response.\nStep 2: The bar heights are $4$, $17$, $23$, $9$, and $2$ households for $0$, $1$, $2$, $3$, and $4$ vehicles.\nStep 3: The greatest height, $23$, occurs above $2$ vehicles, so the mode is $2$ vehicles. Check: $4 + 17 + 23 + 9 + 2 = 55$ households, matching the survey size. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): reads the second-tallest bar instead of the tallest.\n* Choice C ($4$): reports the greatest response shown on the axis rather than the most frequent one.\n* Choice D ($23$): reports the height of the tallest bar, which is how often the mode occurs, not the mode itself.\n\n**Test Day Takeaway:** The mode is a data value. On a bar graph read across to the axis label under the tallest bar, never up to its height.",
      skills: ["find-mode"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$7, 2, 9, 2, 5, 9, 9, 4, 6$\nWhat is the mode of the data shown?",
      choices: [
        // distractor: picks $2$, which also repeats, but $2$ occurs only twice while $9$ occurs three times.
        { id: "A", text: "$2$" },
        // distractor: reports how many times the mode occurs, $3$, instead of the value that occurs most often.
        { id: "B", text: "$3$" },
        // distractor: reports the median, the fifth value of the ordered list $2, 2, 4, 5, 6, 7, 9, 9, 9$.
        { id: "C", text: "$6$" },
        { id: "D", text: "$9$" }
      ],
      correctAnswer: "D",
      hint: "Count how many times each value occurs.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~15s):** The value $9$ occurs $3$ times, more than any other value, so the mode is $9$.\n\n**The Full Solution:**\nStep 1: Count each value: $2$ occurs $2$ times, $9$ occurs $3$ times, and $4$, $5$, $6$, and $7$ each occur once.\nStep 2: The greatest frequency is $3$, and only the value $9$ has it.\nStep 3: So the mode is $9$. Check: the frequencies $2 + 3 + 1 + 1 + 1 + 1 = 9$ account for all $9$ values. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): picks $2$, which also repeats, but $2$ occurs only twice while $9$ occurs three times.\n* Choice B ($3$): reports how many times the mode occurs, $3$, instead of the value that occurs most often.\n* Choice C ($6$): reports the median, the fifth value of the ordered list $2, 2, 4, 5, 6, 7, 9, 9, 9$.\n\n**Test Day Takeaway:** The mode is a VALUE from the data set, the one with the greatest frequency; the frequency itself is not the answer.",
      skills: ["find-mode"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In a data set of $20$ values, the value $5$ occurs $6$ times, the value $8$ occurs $6$ times, and no other value occurs more than $3$ times. Which of the following is true about the mode of the data set?",
      choices: [
        // distractor: breaks the tie by choosing the smaller value, but the definition of mode does not favor smaller values.
        { id: "A", text: "The only mode is $5$." },
        // distractor: breaks the tie by choosing the larger value, which the definition of mode does not do either.
        { id: "B", text: "The only mode is $8$." },
        { id: "C", text: "The data set has two modes, $5$ and $8$." },
        // distractor: treats a tie for the greatest frequency as no mode; a data set has no mode only when every value occurs the same number of times.
        { id: "D", text: "The data set has no mode." }
      ],
      correctAnswer: "C",
      hint: "Compare the highest frequency in the data set with how many values reach it.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** The greatest frequency is $6$, and two values reach it, so both $5$ and $8$ are modes.\n\n**The Full Solution:**\nStep 1: The mode is the value or values occurring most frequently.\nStep 2: The greatest frequency in this data set is $6$, since every other value occurs at most $3$ times.\nStep 3: Both $5$ and $8$ occur $6$ times, so the data set has two modes, $5$ and $8$. Check: no value occurs more than $6$ times, so neither can be excluded. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: breaks the tie by choosing the smaller value, but the definition of mode does not favor smaller values.\n* Choice B: breaks the tie by choosing the larger value, which the definition of mode does not do either.\n* Choice D: treats a tie for the greatest frequency as no mode; a data set has no mode only when every value occurs the same number of times.\n\n**Test Day Takeaway:** A tie for the highest frequency produces more than one mode. Only a data set with no repeats at all, or with every value equally frequent, has no mode.",
      skills: ["find-mode"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The paint color of each of $200$ cars in a parking lot was recorded. Which of the following measures of center can be determined from these data?",
      choices: [
        // distractor: the mean requires arithmetic on the values, which categorical labels do not support.
        { id: "A", text: "The mean only" },
        // distractor: the median requires an order on the values, and paint colors have no least-to-greatest order.
        { id: "B", text: "The median only" },
        { id: "C", text: "The mode only" },
        // distractor: assumes every measure of center applies to every data set, but only the mode applies to categorical data.
        { id: "D", text: "The mean, the median, and the mode" }
      ],
      correctAnswer: "C",
      hint: "Ask which of the three measures needs the data to be numbers you can order or add.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** Colors cannot be added or ordered, so only the most frequent color, the mode, can be found.\n\n**The Full Solution:**\nStep 1: The mean requires adding the values and dividing, which is impossible for color names.\nStep 2: The median requires arranging the values from least to greatest, and colors have no numerical order.\nStep 3: The mode requires only counting how often each value occurs, which works for colors, so the mode alone can be determined. Check: reporting that red occurs most often is meaningful, while an average color is not. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: the mean requires arithmetic on the values, which categorical labels do not support.\n* Choice B: the median requires an order on the values, and paint colors have no least-to-greatest order.\n* Choice D: assumes every measure of center applies to every data set, but only the mode applies to categorical data.\n\n**Test Day Takeaway:** Categorical data supports only the mode. Mean and median require values you can add or order.",
      skills: ["find-mode"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A data set of $15$ integers has exactly one mode, $24$, which occurs $4$ times. The value $19$ occurs $3$ times. If one more $19$ is added, which of the following is true about the mode of the new data set?",
      choices: [
        // distractor: keeps $24$ as the only mode, overlooking that $19$ now occurs as often as $24$ does.
        { id: "A", text: "The only mode is $24$." },
        // distractor: assumes the value just added becomes the only mode, but $19$ only ties $24$; it does not pass it.
        { id: "B", text: "The only mode is $19$." },
        { id: "C", text: "The data set has two modes, $19$ and $24$." },
        // distractor: treats a tie for the greatest frequency as no mode; both tied values are modes.
        { id: "D", text: "The data set has no mode." }
      ],
      correctAnswer: "C",
      hint: "Update the frequency of 19 and compare it with the frequency of 24.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~35s):** After the addition, $19$ occurs $3 + 1 = 4$ times, the same as $24$, and no other value occurs more than $3$ times, so both are modes.\n\n**The Full Solution:**\nStep 1: Since $24$ is the only mode and occurs $4$ times, every other value in the original data set occurs at most $3$ times.\nStep 2: Adding one $19$ raises its frequency from $3$ to $4$; the frequency of $24$ stays $4$, and every other frequency stays at most $3$.\nStep 3: The greatest frequency is $4$, reached by both $19$ and $24$, so the new data set has two modes, $19$ and $24$. Check: the new data set has $16$ values, and no value occurs more than $4$ times. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (The only mode is $24$.): keeps $24$ as the only mode, overlooking that $19$ now occurs as often as $24$ does.\n* Choice B (The only mode is $19$.): assumes the value just added becomes the only mode, but $19$ only ties $24$; it does not pass it.\n* Choice D (The data set has no mode.): treats a tie for the greatest frequency as no mode; both tied values are modes.\n\n**Test Day Takeaway:** After values are added, recount the frequencies. A tie for the greatest frequency gives more than one mode, not a new single mode and not no mode.",
      skills: ["find-mode"]
    }
  ],

  // Section: Range
  "Range": [
    {
      id: 1,
      difficulty: "easy",
      question: "The high temperatures, in degrees Fahrenheit, in a town on $6$ days were $62$, $55$, $71$, $59$, $74$, and $64$. What is the range of these temperatures, in degrees Fahrenheit?",
      choices: [
        // distractor: subtracts the second-least temperature, $74 - 59 = 15$, instead of the least.
        { id: "A", text: "$15$" },
        { id: "B", text: "$19$" },
        // distractor: reports the median, $\frac{62 + 64}{2} = 63$, a measure of center rather than spread.
        { id: "C", text: "$63$" },
        // distractor: reports the greatest temperature without subtracting the least.
        { id: "D", text: "$74$" }
      ],
      correctAnswer: "B",
      hint: "Find the greatest and least values first.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The greatest temperature is $74$ and the least is $55$, so the range is $74 - 55 = 19$.\n\n**The Full Solution:**\nStep 1: Find the greatest temperature: $74$.\nStep 2: Find the least temperature: $55$.\nStep 3: Subtract: $74 - 55 = 19$ degrees Fahrenheit. Check: every temperature lies between $55$ and $74$, a span of $19$ degrees. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): subtracts the second-least temperature, $74 - 59 = 15$, instead of the least.\n* Choice C ($63$): reports the median, $\\frac{62 + 64}{2} = 63$, a measure of center rather than spread.\n* Choice D ($74$): reports the greatest temperature without subtracting the least.\n\n**Test Day Takeaway:** Range = greatest value minus least value. Scan the whole list for both extremes; they are rarely the first and last values printed.",
      skills: ["range-calculation"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The box plot summarizes the mass, in grams, of each of $45$ river stones collected from a streambed. What is the interquartile range, in grams, of the masses?",
      diagram: { type: "boxPlot", params: { min: 22, q1: 31, median: 38, q3: 47, max: 58, xLabel: "Mass (g)", xMin: 20, xMax: 60, xGridStep: 5, xLabelStep: 10 } },
      choices: [
        // distractor: subtracts the first quartile from the median, $38 - 31$, covering only the left half of the box.
        { id: "A", text: "$7$" },
        // distractor: subtracts the median from the third quartile, $47 - 38$, covering only the right half of the box.
        { id: "B", text: "$9$" },
        { id: "C", text: "$16$" },
        // distractor: subtracts the whisker ends, $58 - 22$, which is the range rather than the interquartile range.
        { id: "D", text: "$36$" }
      ],
      correctAnswer: "C",
      hint: "The interquartile range is the width of the box itself.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** The box runs from $31$ to $47$ grams, so the interquartile range is $47 - 31 = 16$.\n\n**The Full Solution:**\nStep 1: A box plot marks five values: the minimum and maximum at the whisker ends, the quartiles at the box edges, and the median inside the box.\nStep 2: The interquartile range is the third quartile minus the first quartile, so it uses only the two box edges, $47$ and $31$.\nStep 3: Interquartile range $= 47 - 31 = 16$ grams. Check: the middle half of the $45$ masses lies inside a $16$-gram-wide box. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): subtracts the first quartile from the median, $38 - 31$, covering only the left half of the box.\n* Choice B ($9$): subtracts the median from the third quartile, $47 - 38$, covering only the right half of the box.\n* Choice D ($36$): subtracts the whisker ends, $58 - 22$, which is the range rather than the interquartile range.\n\n**Test Day Takeaway:** Box edges give the interquartile range; whisker ends give the range. Decide which two marks the question wants before subtracting.",
      skills: ["range-calculation"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A data set of $12$ values has a minimum of $14$ and a maximum of $53$. If $9$ is added to the data set, what is the range of the new data set?",
      choices: [
        // distractor: reports $14 - 9$, the amount the minimum dropped, instead of the new range.
        { id: "A", text: "$5$" },
        // distractor: keeps the original range, assuming an added value cannot change it.
        { id: "B", text: "$39$" },
        { id: "C", text: "$44$" },
        // distractor: adds the new value to the original range, $39 + 9$, instead of subtracting it from the maximum.
        { id: "D", text: "$48$" }
      ],
      correctAnswer: "C",
      hint: "Decide whether the new value replaces the old minimum, the old maximum, or neither.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** The new value $9$ is below $14$, so the minimum becomes $9$ while the maximum stays $53$: the range is $53 - 9 = 44$.\n\n**The Full Solution:**\nStep 1: The original range is $53 - 14 = 39$.\nStep 2: Since $9 < 14$, the new value becomes the least value of the data set; the greatest value is unchanged at $53$.\nStep 3: The new range is $53 - 9 = 44$. Check: $44$ exceeds the original range by exactly $14 - 9 = 5$, the amount the minimum dropped. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): reports $14 - 9$, the amount the minimum dropped, instead of the new range.\n* Choice B ($39$): keeps the original range, assuming an added value cannot change it.\n* Choice D ($48$): adds the new value to the original range, $39 + 9$, instead of subtracting it from the maximum.\n\n**Test Day Takeaway:** A value added outside the current extremes replaces one of them. Recompute maximum minus minimum rather than adjusting the old range by a guess.",
      skills: ["range-calculation"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Data set Q is formed by adding one value to data set P, which has $30$ values. The added value is greater than every value in data set P. Which of the following must be greater for data set Q than for data set P?",
      choices: [
        // distractor: the added value is above every value in P, so the least value of the data set does not move.
        { id: "A", text: "The minimum" },
        // distractor: the median shifts to the sixteenth ordered value, which is at least the old median but can equal it.
        { id: "B", text: "The median" },
        // distractor: one new value cannot outnumber an existing most frequent value, so the mode may be unchanged.
        { id: "C", text: "The mode" },
        { id: "D", text: "The range" }
      ],
      correctAnswer: "D",
      hint: "Ask which measure is guaranteed to change, not merely likely to.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~40s):** The added value raises the maximum and leaves the minimum alone, so the range must grow.\n\n**The Full Solution:**\nStep 1: The added value exceeds every value in data set P, so the maximum of Q is that new value and the minimum of Q equals the minimum of P.\nStep 2: Range equals maximum minus minimum, and only the maximum increased, so the range of Q is strictly greater than the range of P.\nStep 3: No other listed measure is guaranteed to increase. Check: the minimum is unchanged, the median can stay the same when the two central values of P are equal, and the mode need not change at all. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: the added value is above every value in P, so the least value of the data set does not move.\n* Choice B: the median shifts to the sixteenth ordered value, which is at least the old median but can equal it.\n* Choice C: one new value cannot outnumber an existing most frequent value, so the mode may be unchanged.\n\n**Test Day Takeaway:** On a \"must be\" question, look for the measure whose definition forces a change; a measure that merely usually changes is not the answer.",
      skills: ["range-calculation"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A data set has a range of $24$. Each value in the data set is multiplied by $4$, and then $9$ is subtracted from each result. What is the range of the new data set?",
      choices: [
        // distractor: applies only the subtraction to the range, $24 - 9 = 15$, and ignores the multiplication.
        { id: "A", text: "$15$" },
        // distractor: assumes neither operation changes the range, but multiplying every value by $4$ stretches all distances by $4$.
        { id: "B", text: "$24$" },
        // distractor: multiplies the range by $4$ and then also subtracts $9$, but subtracting the same amount from every value does not change the range.
        { id: "C", text: "$87$" },
        { id: "D", text: "$96$" }
      ],
      correctAnswer: "D",
      hint: "Handle the multiplication and the subtraction separately.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~30s):** Multiplying by $4$ multiplies the range by $4$, and subtracting $9$ from every value does not change it: $4(24) = 96$.\n\n**The Full Solution:**\nStep 1: If the least and greatest values are $m$ and $M$, then $M - m = 24$.\nStep 2: The new least and greatest values are $4m - 9$ and $4M - 9$.\nStep 3: The new range is $(4M - 9) - (4m - 9) = 4(M - m) = 4(24) = 96$. Check: with original values $0$ and $24$, the new values are $-9$ and $87$, and $87 - (-9) = 96$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): applies only the subtraction to the range, $24 - 9 = 15$, and ignores the multiplication.\n* Choice B ($24$): assumes neither operation changes the range, but multiplying every value by $4$ stretches all distances by $4$.\n* Choice C ($87$): multiplies the range by $4$ and then also subtracts $9$, but subtracting the same amount from every value does not change the range.\n\n**Test Day Takeaway:** Multiplying every value by a constant multiplies the range by that constant; adding or subtracting a constant moves the data without changing the range.",
      skills: ["range-calculation"]
    }
  ],

  // Section: Standard Deviation
  "Standard Deviation": [
    {
      id: 1,
      difficulty: "easy",
      question: "Which of the following data sets has the least standard deviation?",
      choices: [
        // distractor: looks only at the middle three values, $37$, $38$, and $39$, which are tightly packed, and ignores $32$ and $44$, which lie $6$ from the mean.
        { id: "A", text: "$32, 37, 38, 39, 44$" },
        { id: "B", text: "$35, 36, 38, 40, 41$" },
        // distractor: treats the repeated values as a sign of little spread, but four of its values lie $5$ from the mean.
        { id: "C", text: "$33, 33, 38, 43, 43$" },
        // distractor: picks the data set with the greatest standard deviation, the reverse of what is asked.
        { id: "D", text: "$29, 35, 38, 41, 47$" }
      ],
      correctAnswer: "B",
      hint: "Every list has the same mean. Compare how far the values sit from it.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** Each list is centered at $38$. In choice B every value is within $3$ of $38$, while every other list has values $5$ or more from $38$.\n\n**The Full Solution:**\nStep 1: Each data set is symmetric about $38$, so each has a mean of $38$.\nStep 2: List the distances from $38$: A gives $6, 1, 0, 1, 6$; B gives $3, 2, 0, 2, 3$; C gives $5, 5, 0, 5, 5$; D gives $9, 3, 0, 3, 9$.\nStep 3: Standard deviation measures how far values typically are from the mean, and B keeps its values closest to $38$, so B has the least standard deviation. Check: the sums of squared distances are $74$, $26$, $100$, and $180$, and B has the least. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($32, 37, 38, 39, 44$): looks only at the middle three values, $37$, $38$, and $39$, which are tightly packed, and ignores $32$ and $44$, which lie $6$ from the mean.\n* Choice C ($33, 33, 38, 43, 43$): treats the repeated values as a sign of little spread, but four of its values lie $5$ from the mean.\n* Choice D ($29, 35, 38, 41, 47$): picks the data set with the greatest standard deviation, the reverse of what is asked.\n\n**Test Day Takeaway:** When data sets share a center, the one whose values huddle closest to that center has the least standard deviation. Check the extreme values, not just the middle ones.",
      skills: ["standard-deviation-concept"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Each of the $12$ values in a data set is equal to $47$. What is the standard deviation of the data set?",
      choices: [
        { id: "A", text: "$0$" },
        // distractor: confuses the standard deviation with the number of distinct values in the data set, which is $1$.
        { id: "B", text: "$1$" },
        // distractor: reports the number of values in the data set instead of a measure of spread.
        { id: "C", text: "$12$" },
        // distractor: reports the mean, $47$, instead of the standard deviation.
        { id: "D", text: "$47$" }
      ],
      correctAnswer: "A",
      hint: "Standard deviation measures how far values are from the mean.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** Every value equals the mean, $47$, so no value is any distance from the mean and the standard deviation is $0$.\n\n**The Full Solution:**\nStep 1: The mean of $12$ values that each equal $47$ is $47$.\nStep 2: Each value is $47 - 47 = 0$ from the mean.\nStep 3: With every distance from the mean equal to $0$, the standard deviation is $0$. Check: a data set has no spread at all exactly when all of its values are equal. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): confuses the standard deviation with the number of distinct values in the data set, which is $1$.\n* Choice C ($12$): reports the number of values in the data set instead of a measure of spread.\n* Choice D ($47$): reports the mean, $47$, instead of the standard deviation.\n\n**Test Day Takeaway:** Standard deviation is $0$ exactly when every value is the same. Any variation at all makes it positive.",
      skills: ["standard-deviation-concept"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The dot plots show the distributions of two data sets, each containing $11$ values. The two data sets have the same mean. Which statement comparing the standard deviations of the two data sets is true?",
      diagram: { type: "dotPlot", params: { sets: [{ name: "Data set A", data: [20, 21, 22, 22, 23, 23, 23, 24, 24, 25, 26] }, { name: "Data set B", data: [20, 20, 20, 21, 22, 23, 24, 25, 26, 26, 26] }], xMin: 19, xMax: 27, height: 260, xLabel: "Value" } },
      choices: [
        // distractor: reverses the comparison; data set A is the more tightly clustered of the two.
        { id: "A", text: "The standard deviation of data set A is greater than the standard deviation of data set B." },
        { id: "B", text: "The standard deviation of data set B is greater than the standard deviation of data set A." },
        // distractor: treats equal means as forcing equal spread, but two data sets can share a mean and differ widely in spread.
        { id: "C", text: "The two standard deviations are equal because the two means are equal." },
        // distractor: the plots show every value in both data sets, which is all that is needed to compare spread.
        { id: "D", text: "There is not enough information to compare the two standard deviations." }
      ],
      correctAnswer: "B",
      hint: "Compare how tightly the dots cluster around the shared center, not where that center is.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~35s):** Data set A piles up near $23$, while data set B pushes its dots out to $20$ and $26$, so data set B has the greater spread.\n\n**The Full Solution:**\nStep 1: Both data sets have $11$ values and the same mean, $23$, so the comparison depends only on spread.\nStep 2: In data set A, seven of the eleven dots sit at $22$, $23$, or $24$, within one unit of the mean.\nStep 3: In data set B, six of the eleven dots sit at $20$ or $26$, three units from the mean, so its values are typically farther from the mean and its standard deviation is greater. Check: the two plots share an axis, so the wider footprint of B is a fair comparison. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: reverses the comparison; data set A is the more tightly clustered of the two.\n* Choice C: treats equal means as forcing equal spread, but two data sets can share a mean and differ widely in spread.\n* Choice D: the plots show every value in both data sets, which is all that is needed to compare spread.\n\n**Test Day Takeaway:** When two distributions share a center, standard deviation is decided by clustering. Read the dot plots for how far the dots sit from the center, not for where the center is.",
      skills: ["standard-deviation-concept"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Data set M has a mean of $58$ and a standard deviation of $9$. Data set N is formed by increasing each value in data set M by $12$. What is the standard deviation of data set N?",
      choices: [
        { id: "A", text: "$9$" },
        // distractor: reports the amount added to each value rather than the spread of the new data set.
        { id: "B", text: "$12$" },
        // distractor: adds $12$ to the standard deviation, treating spread the same way as center.
        { id: "C", text: "$21$" },
        // distractor: reports the mean of data set N instead of its standard deviation.
        { id: "D", text: "$70$" }
      ],
      correctAnswer: "A",
      hint: "Picture sliding every dot the same distance along the number line.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~30s):** Adding the same amount to every value slides the whole distribution without stretching it, so the standard deviation stays $9$.\n\n**The Full Solution:**\nStep 1: Each value of N is a value of M plus $12$, and the mean of N is $58 + 12 = 70$.\nStep 2: Each deviation from the mean is unchanged, since $(x + 12) - (58 + 12) = x - 58$.\nStep 3: Standard deviation is built entirely from those deviations, so it is still $9$. Check: the distances between values are unchanged by a shift, so the spread cannot change. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): reports the amount added to each value rather than the spread of the new data set.\n* Choice C ($21$): adds $12$ to the standard deviation, treating spread the same way as center.\n* Choice D ($70$): reports the mean of data set N instead of its standard deviation.\n\n**Test Day Takeaway:** Adding a constant moves the center and leaves the spread alone. Only the mean and median shift by that constant.",
      skills: ["standard-deviation-concept"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Data set A has $20$ values, a mean of $50$, and a standard deviation of $6$. Data set B consists of the $20$ values in data set A and one additional value, $50$. Which of the following correctly compares the standard deviations of data sets A and B?",
      choices: [
        { id: "A", text: "Data set B has a smaller standard deviation than data set A." },
        // distractor: reasons that the mean does not change, so the spread does not either; but the added value lowers the typical distance from the mean.
        { id: "B", text: "Data sets A and B have equal standard deviations." },
        // distractor: assumes adding any value to a data set adds spread, but a value at the mean adds no distance.
        { id: "C", text: "Data set B has a greater standard deviation than data set A." },
        // distractor: assumes the individual values are needed, but the effect of adding a value at the mean is the same for every data set with a positive standard deviation.
        { id: "D", text: "There is not enough information to compare the standard deviations." }
      ],
      correctAnswer: "A",
      hint: "Where does the added value sit relative to the mean, and what does that do to the typical distance from the mean?",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~45s):** The value $50$ equals the mean, so the mean stays $50$ and the new value adds $0$ to the total squared distance while increasing the count. The standard deviation decreases.\n\n**The Full Solution:**\nStep 1: Adding $50$ to a data set whose mean is $50$ keeps the mean at $\\frac{20(50) + 50}{21} = 50$.\nStep 2: The new value is $0$ from the mean, so the sum of the squared distances from the mean stays the same, $20(6^{2}) = 720$, but it is now shared among $21$ values instead of $20$.\nStep 3: A fixed total spread over more values gives a smaller typical distance, so data set B has the smaller standard deviation. Check: $\\sqrt{\\frac{720}{21}} \\approx 5.86 < 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: reasons that the mean does not change, so the spread does not either; but the added value lowers the typical distance from the mean.\n* Choice C: assumes adding any value to a data set adds spread, but a value at the mean adds no distance.\n* Choice D: assumes the individual values are needed, but the effect of adding a value at the mean is the same for every data set with a positive standard deviation.\n\n**Test Day Takeaway:** Adding a value equal to the mean leaves the mean unchanged and lowers the standard deviation; adding a value far from the mean raises it.",
      skills: ["standard-deviation-concept"]
    }
  ],

  // Section: Margin of Error
  "Margin of Error": [
    {
      id: 1,
      difficulty: "easy",
      question: "Based on a random sample of $240$ bottles from a filling line, the mean volume of all bottles from the line is estimated to be $502$ milliliters, with an associated margin of error of $3$ milliliters. Which of the following is the most appropriate conclusion?",
      choices: [
        { id: "A", text: "It is plausible that the mean volume is between $499$ and $505$ milliliters." },
        // distractor: names values below the interval, which the sample gives no support for.
        { id: "B", text: "It is plausible that the mean volume is less than $499$ milliliters." },
        // distractor: names values above the interval, which the sample also gives no support for.
        { id: "C", text: "It is plausible that the mean volume is greater than $505$ milliliters." },
        // distractor: treats the sample estimate as exact, but a margin of error exists precisely because the population value is not pinned down.
        { id: "D", text: "The mean volume is exactly $502$ milliliters." }
      ],
      correctAnswer: "A",
      hint: "The margin of error marks off an interval on both sides of the estimate.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** Plausible values run from $502 - 3$ to $502 + 3$, that is, from $499$ to $505$ milliliters.\n\n**The Full Solution:**\nStep 1: An estimate reported with a margin of error describes an interval of plausible values for the population quantity.\nStep 2: Subtract and add the margin of error: $502 - 3 = 499$ and $502 + 3 = 505$.\nStep 3: So it is plausible that the mean volume of all bottles from the line is between $499$ and $505$ milliliters. Check: the interval is centered at the estimate and is $2(3) = 6$ milliliters wide. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: names values below the interval, which the sample gives no support for.\n* Choice C: names values above the interval, which the sample also gives no support for.\n* Choice D: treats the sample estimate as exact, but a margin of error exists precisely because the population value is not pinned down.\n\n**Test Day Takeaway:** Estimate plus or minus margin of error gives the whole interval of plausible values. Report the interval, not a single number and not a one-sided claim.",
      skills: ["margin-of-error"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A biologist will use a random sample of moths of one species to estimate the mean wing length of the species, with an associated margin of error. Which of the following is the most likely result of using a sample of $600$ moths instead of $150$ moths?",
      choices: [
        { id: "A", text: "A smaller margin of error" },
        // distractor: reverses the relationship; more data narrows the interval rather than widening it.
        { id: "B", text: "A larger margin of error" },
        // distractor: changes the estimate itself, but sample size does not push the estimated mean up.
        { id: "C", text: "A greater estimated mean wing length" },
        // distractor: also changes the estimate rather than the margin of error, and gives no reason a larger sample would lower it.
        { id: "D", text: "A smaller estimated mean wing length" }
      ],
      correctAnswer: "A",
      hint: "More data from the same population pins the estimate down more tightly.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** A larger random sample from the same population generally produces a smaller margin of error.\n\n**The Full Solution:**\nStep 1: The margin of error measures how much the estimate could differ from the true population value.\nStep 2: A larger random sample gives more information about the population, so the estimate is less variable.\nStep 3: Therefore the sample of $600$ moths would most likely give a smaller margin of error than the sample of $150$ moths. Check: sample size affects the width of the interval, not where it is centered. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: reverses the relationship; more data narrows the interval rather than widening it.\n* Choice C: changes the estimate itself, but sample size does not push the estimated mean up.\n* Choice D: also changes the estimate rather than the margin of error, and gives no reason a larger sample would lower it.\n\n**Test Day Takeaway:** Sample size controls the width of the interval, not its center. Larger random sample, smaller margin of error.",
      skills: ["margin-of-error"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A random sample of $800$ residents of a town were asked which of three transit options they prefer. The table shows the number of sampled residents who chose each option. Based on this sample, which of the following is the best estimate of the number of the town’s $26{,}000$ residents who prefer option B?",
      diagram: { type: "dataTable", params: { headers: ["Transit option", "Number of sampled residents"], rows: [["A", "296"], ["B", "344"], ["C", "160"], ["Total", "800"]] } },
      choices: [
        // distractor: reports the number of sampled residents choosing option B rather than the estimate for the town.
        { id: "A", text: "$344$" },
        // distractor: applies option A’s sample proportion, $\frac{296}{800}$, to the town.
        { id: "B", text: "$9{,}620$" },
        { id: "C", text: "$11{,}180$" },
        // distractor: estimates the residents who did not choose option B, $\frac{456}{800}(26{,}000)$.
        { id: "D", text: "$14{,}820$" }
      ],
      correctAnswer: "C",
      hint: "Convert the sample count to a proportion before applying it to the whole town.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~35s):** The sample proportion choosing option B is $\\frac{344}{800} = 0.43$, and $0.43(26{,}000) = 11{,}180$.\n\n**The Full Solution:**\nStep 1: Of the $800$ residents sampled, $344$ chose option B, so the sample proportion is $\\frac{344}{800} = 0.43$.\nStep 2: A random sample is used to estimate the same proportion in the whole population.\nStep 3: Apply the proportion to the town: $0.43(26{,}000) = 11{,}180$ residents. Check: $296 + 344 + 160 = 800$, so the three options account for the entire sample. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($344$): reports the number of sampled residents choosing option B rather than the estimate for the town.\n* Choice B ($9{,}620$): applies option A’s sample proportion, $\\frac{296}{800}$, to the town.\n* Choice D ($14{,}820$): estimates the residents who did not choose option B, $\\frac{456}{800}(26{,}000)$.\n\n**Test Day Takeaway:** To scale a sample result to a population, turn the count into a proportion first, then multiply by the population size.",
      skills: ["margin-of-error"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In a poll of a random sample of likely voters, $51\\%$ preferred candidate Okafor and $49\\%$ preferred candidate Villar, each with an associated margin of error of $3$ percentage points. Which of the following is the most appropriate conclusion?",
      choices: [
        // distractor: treats the $51\%$ estimate as decisive, but values as low as $48\%$ are plausible for Okafor.
        { id: "A", text: "Okafor is preferred by more than half of all likely voters." },
        // distractor: $46\%$ is the lower end of Villar’s interval, so values below it are exactly the ones the poll does not support.
        { id: "B", text: "Villar is preferred by fewer than $46\\%$ of all likely voters." },
        { id: "C", text: "It is plausible that Villar is preferred by more likely voters than Okafor." },
        // distractor: reports the sample percentage as the population percentage, which the margin of error rules out as a conclusion.
        { id: "D", text: "Exactly $51\\%$ of all likely voters prefer Okafor." }
      ],
      correctAnswer: "C",
      hint: "Write out both intervals of plausible values and see whether they overlap.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~40s):** Plausible values run from $48\\%$ to $54\\%$ for Okafor and from $46\\%$ to $52\\%$ for Villar. The intervals overlap, so either candidate could be ahead.\n\n**The Full Solution:**\nStep 1: Okafor’s interval of plausible values is $51\\% \\pm 3\\%$, from $48\\%$ to $54\\%$.\nStep 2: Villar’s interval is $49\\% \\pm 3\\%$, from $46\\%$ to $52\\%$.\nStep 3: The intervals overlap between $48\\%$ and $52\\%$, so a support level for Villar above Okafor’s is plausible. Check: for example, $50\\%$ for Villar and $49\\%$ for Okafor lie inside both intervals. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: treats the $51\\%$ estimate as decisive, but values as low as $48\\%$ are plausible for Okafor.\n* Choice B: $46\\%$ is the lower end of Villar’s interval, so values below it are exactly the ones the poll does not support.\n* Choice D: reports the sample percentage as the population percentage, which the margin of error rules out as a conclusion.\n\n**Test Day Takeaway:** When two estimates come with margins of error, compare the intervals, not the two headline numbers. Overlapping intervals mean no lead can be claimed.",
      skills: ["margin-of-error"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Based on a random sample of residents of a town with $12{,}000$ residents, it is estimated that $68\\%$ of the town’s residents hold a library card, with an associated margin of error of $2.5$ percentage points. Which of the following is the most appropriate conclusion?",
      choices: [
        { id: "A", text: "It is plausible that between $7{,}860$ and $8{,}460$ residents hold a library card." },
        // distractor: names counts below the interval, which correspond to percentages the survey does not support.
        { id: "B", text: "It is plausible that fewer than $7{,}860$ residents hold a library card." },
        // distractor: names counts above the interval, which correspond to percentages above $70.5\%$.
        { id: "C", text: "It is plausible that more than $8{,}460$ residents hold a library card." },
        // distractor: converts the point estimate to a count but reports it as exact, ignoring the margin of error entirely.
        { id: "D", text: "Exactly $8{,}160$ residents hold a library card." }
      ],
      correctAnswer: "A",
      hint: "Turn the two ends of the percentage interval into counts before choosing.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~50s):** Plausible percentages run from $65.5\\%$ to $70.5\\%$; applied to $12{,}000$ residents that is $7{,}860$ to $8{,}460$.\n\n**The Full Solution:**\nStep 1: The interval of plausible percentages is $68\\% \\pm 2.5\\%$, from $65.5\\%$ to $70.5\\%$.\nStep 2: Convert each end to a number of residents: $0.655(12{,}000) = 7{,}860$ and $0.705(12{,}000) = 8{,}460$.\nStep 3: So it is plausible that between $7{,}860$ and $8{,}460$ residents hold a library card. Check: the estimate itself, $0.68(12{,}000) = 8{,}160$, sits at the center of that interval. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: names counts below the interval, which correspond to percentages the survey does not support.\n* Choice C: names counts above the interval, which correspond to percentages above $70.5\\%$.\n* Choice D: converts the point estimate to a count but reports it as exact, ignoring the margin of error entirely.\n\n**Test Day Takeaway:** Convert both endpoints of the percentage interval before answering a count question; converting only the estimate throws away the margin of error.",
      skills: ["margin-of-error"]
    }
  ]
};
