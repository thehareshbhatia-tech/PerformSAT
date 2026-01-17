// Practice questions for Statistics module
// Questions are organized by SECTION (question type)

export const statisticsQuestions = {
  // Section: Mean
  "Mean": [
    {
      id: 1,
      question: "What is the mean of the data set: 4, 8, 6, 5, 9, 2, 8?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "6" },
        { id: "C", text: "7" },
        { id: "D", text: "8" }
      ],
      correctAnswer: "B",
      hint: "Add all the numbers together, then divide by how many numbers there are.",
      explanation: "Mean = sum/count = (4 + 8 + 6 + 5 + 9 + 2 + 8)/7 = 42/7 = 6."
    },
    {
      id: 2,
      question: "The mean of 5 numbers is 12. If one number is removed and the new mean is 10, what number was removed?",
      choices: [
        { id: "A", text: "10" },
        { id: "B", text: "12" },
        { id: "C", text: "20" },
        { id: "D", text: "22" }
      ],
      correctAnswer: "C",
      hint: "Find the original total sum and the new total sum. The removed number is the difference between them.",
      explanation: "Original sum = 5 × 12 = 60. New sum = 4 × 10 = 40. Removed number = 60 - 40 = 20."
    },
    {
      id: 3,
      question: "A student's test scores are 85, 90, 78, and 92. What score on the fifth test gives a mean of 88?",
      choices: [
        { id: "A", text: "88" },
        { id: "B", text: "90" },
        { id: "C", text: "95" },
        { id: "D", text: "100" }
      ],
      correctAnswer: "C",
      hint: "Set up an equation where the sum of all five scores divided by 5 equals 88, then solve for the unknown score.",
      explanation: "Need: (85 + 90 + 78 + 92 + x)/5 = 88. So 345 + x = 440. x = 95."
    },
    {
      id: 4,
      question: "If 10 is added to each value in a data set, the mean:",
      choices: [
        { id: "A", text: "Stays the same" },
        { id: "B", text: "Increases by 10" },
        { id: "C", text: "Increases by 100" },
        { id: "D", text: "Doubles" }
      ],
      correctAnswer: "B",
      hint: "Think about what happens to the sum when you add the same number to every value.",
      explanation: "Adding a constant to each value increases the mean by that constant. The mean increases by 10."
    },
    {
      id: 5,
      question: "A class of 20 students has a mean score of 75. A class of 30 students has a mean score of 80. What is the combined mean?",
      choices: [
        { id: "A", text: "77" },
        { id: "B", text: "77.5" },
        { id: "C", text: "78" },
        { id: "D", text: "78.5" }
      ],
      correctAnswer: "C",
      hint: "Calculate the total sum of scores for each class, add them together, then divide by the total number of students.",
      explanation: "Total sum = (20 × 75) + (30 × 80) = 1500 + 2400 = 3900. Combined mean = 3900/50 = 78."
    }
  ],

  // Section: Median
  "Median": [
    {
      id: 1,
      question: "What is the median of: 3, 7, 9, 2, 5?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "5.2" },
        { id: "C", text: "7" },
        { id: "D", text: "9" }
      ],
      correctAnswer: "A",
      hint: "First arrange the numbers in order from smallest to largest, then find the middle value.",
      explanation: "First order the data: 2, 3, 5, 7, 9. The middle value (3rd of 5) is 5."
    },
    {
      id: 2,
      question: "What is the median of: 4, 8, 2, 10, 6, 12?",
      choices: [
        { id: "A", text: "6" },
        { id: "B", text: "7" },
        { id: "C", text: "8" },
        { id: "D", text: "9" }
      ],
      correctAnswer: "B",
      hint: "With an even number of values, find the two middle numbers and calculate their average.",
      explanation: "Order: 2, 4, 6, 8, 10, 12. With 6 values, median = average of 3rd and 4th: (6 + 8)/2 = 7."
    },
    {
      id: 3,
      question: "If outliers are present in data, which measure of center is more reliable?",
      choices: [
        { id: "A", text: "Mean" },
        { id: "B", text: "Median" },
        { id: "C", text: "Mode" },
        { id: "D", text: "Range" }
      ],
      correctAnswer: "B",
      hint: "Consider which measure focuses on the middle position rather than using all values in a calculation.",
      explanation: "The median is resistant to outliers because it only considers the middle value(s), not extreme values."
    },
    {
      id: 4,
      question: "A data set has 15 values. After ordering, which position(s) contain the median?",
      choices: [
        { id: "A", text: "7th position" },
        { id: "B", text: "8th position" },
        { id: "C", text: "7th and 8th positions" },
        { id: "D", text: "7.5th position" }
      ],
      correctAnswer: "B",
      hint: "For an odd number of values n, the median is at position (n+1)/2.",
      explanation: "For n = 15 (odd), median is at position (n+1)/2 = 16/2 = 8th position."
    },
    {
      id: 5,
      question: "The data set 10, 12, 15, 18, 22, x has a median of 16. What is x?",
      choices: [
        { id: "A", text: "14" },
        { id: "B", text: "16" },
        { id: "C", text: "17" },
        { id: "D", text: "20" }
      ],
      correctAnswer: "C",
      hint: "The median of 6 values is the average of the 3rd and 4th values. Consider where x would fit in the ordered list.",
      explanation: "With 6 values, median = average of 3rd and 4th. If median = 16, then (15 + x)/2 = 16 when x is 4th. So 15 + x = 32, x = 17."
    }
  ],

  // Section: Mode
  "Mode": [
    {
      id: 1,
      question: "What is the mode of: 2, 4, 4, 5, 7, 4, 8?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "4" },
        { id: "C", text: "5" },
        { id: "D", text: "7" }
      ],
      correctAnswer: "B",
      hint: "Count how many times each number appears. The mode is the number that appears most often.",
      explanation: "The mode is the value that appears most frequently. 4 appears three times, more than any other value."
    },
    {
      id: 2,
      question: "A data set is: 1, 2, 3, 4, 5. What is the mode?",
      choices: [
        { id: "A", text: "1" },
        { id: "B", text: "3" },
        { id: "C", text: "5" },
        { id: "D", text: "No mode" }
      ],
      correctAnswer: "D",
      hint: "Check if any value appears more frequently than the others.",
      explanation: "When all values appear the same number of times (once each), there is no mode."
    },
    {
      id: 3,
      question: "The data set 3, 5, 5, 7, 9, 9 is:",
      choices: [
        { id: "A", text: "Unimodal" },
        { id: "B", text: "Bimodal" },
        { id: "C", text: "Trimodal" },
        { id: "D", text: "Has no mode" }
      ],
      correctAnswer: "B",
      hint: "Count how many different values appear most frequently. 'Bi' means two, 'uni' means one.",
      explanation: "The data has two modes (5 and 9), each appearing twice. This makes it bimodal."
    },
    {
      id: 4,
      question: "For which type of data is mode the only appropriate measure of center?",
      choices: [
        { id: "A", text: "Continuous data" },
        { id: "B", text: "Categorical data" },
        { id: "C", text: "Ratio data" },
        { id: "D", text: "All types" }
      ],
      correctAnswer: "B",
      hint: "Think about which type of data cannot be added or averaged, like colors or names.",
      explanation: "For categorical data (like favorite color or car brand), mode is the only meaningful measure since you can't calculate a mean or median of categories."
    },
    {
      id: 5,
      question: "If a new value equal to the current mode is added to a data set, the mode:",
      choices: [
        { id: "A", text: "Changes" },
        { id: "B", text: "Stays the same" },
        { id: "C", text: "Becomes undefined" },
        { id: "D", text: "Doubles" }
      ],
      correctAnswer: "B",
      hint: "Adding another copy of the most frequent value makes it even more frequent. Does that change which value is most common?",
      explanation: "Adding another instance of the mode only strengthens it as the most frequent value. The mode stays the same."
    }
  ],

  // Section: Range
  "Range": [
    {
      id: 1,
      question: "What is the range of: 15, 8, 22, 11, 19?",
      choices: [
        { id: "A", text: "7" },
        { id: "B", text: "11" },
        { id: "C", text: "14" },
        { id: "D", text: "22" }
      ],
      correctAnswer: "C",
      hint: "Find the largest and smallest values, then subtract the smallest from the largest.",
      explanation: "Range = maximum - minimum = 22 - 8 = 14."
    },
    {
      id: 2,
      question: "Data set A has range 10. If each value is multiplied by 3, what is the new range?",
      choices: [
        { id: "A", text: "10" },
        { id: "B", text: "13" },
        { id: "C", text: "30" },
        { id: "D", text: "1000" }
      ],
      correctAnswer: "C",
      hint: "When you multiply each value by a number, the distance between the max and min is also multiplied by that same number.",
      explanation: "Multiplying each value by a constant multiplies the range by that constant. New range = 10 × 3 = 30."
    },
    {
      id: 3,
      question: "A data set has minimum 5 and maximum 23. If a value of 30 is added, how does the range change?",
      choices: [
        { id: "A", text: "Increases by 7" },
        { id: "B", text: "Increases by 12" },
        { id: "C", text: "Decreases by 7" },
        { id: "D", text: "Stays the same" }
      ],
      correctAnswer: "A",
      hint: "Calculate the original range, then the new range with 30 as the maximum. Find the difference.",
      explanation: "Original range = 23 - 5 = 18. New range = 30 - 5 = 25. Change = 25 - 18 = 7."
    },
    {
      id: 4,
      question: "Which measure is most affected by outliers?",
      choices: [
        { id: "A", text: "Median" },
        { id: "B", text: "Mode" },
        { id: "C", text: "Range" },
        { id: "D", text: "Interquartile range" }
      ],
      correctAnswer: "C",
      hint: "Consider which measure depends entirely on the extreme values in the data set.",
      explanation: "Range uses only the maximum and minimum, so a single extreme outlier directly affects it."
    },
    {
      id: 5,
      question: "If 5 is added to every value in a data set, the range:",
      choices: [
        { id: "A", text: "Increases by 5" },
        { id: "B", text: "Decreases by 5" },
        { id: "C", text: "Stays the same" },
        { id: "D", text: "Doubles" }
      ],
      correctAnswer: "C",
      hint: "If both the maximum and minimum increase by the same amount, what happens to the difference between them?",
      explanation: "Adding a constant shifts all values by the same amount, so the difference between max and min stays the same."
    }
  ],

  // Section: Standard Deviation
  "Standard Deviation": [
    {
      id: 1,
      question: "Standard deviation measures:",
      choices: [
        { id: "A", text: "The center of the data" },
        { id: "B", text: "The spread of the data" },
        { id: "C", text: "The highest value" },
        { id: "D", text: "The most common value" }
      ],
      correctAnswer: "B",
      hint: "Standard deviation tells you how far, on average, values are from the mean.",
      explanation: "Standard deviation measures how spread out the data values are from the mean."
    },
    {
      id: 2,
      question: "If all values in a data set are the same, the standard deviation is:",
      choices: [
        { id: "A", text: "1" },
        { id: "B", text: "The value itself" },
        { id: "C", text: "0" },
        { id: "D", text: "Undefined" }
      ],
      correctAnswer: "C",
      hint: "If there is no variation in the data, how much spread is there from the mean?",
      explanation: "If all values are identical, there's no variation from the mean, so standard deviation = 0."
    },
    {
      id: 3,
      question: "Data set A: 10, 10, 10, 10. Data set B: 5, 10, 10, 15. Which has larger standard deviation?",
      choices: [
        { id: "A", text: "Data set A" },
        { id: "B", text: "Data set B" },
        { id: "C", text: "They are equal" },
        { id: "D", text: "Cannot determine" }
      ],
      correctAnswer: "B",
      hint: "Compare how spread out each data set is. One has no variation while the other has values farther from the mean.",
      explanation: "Data set A has no variation (all 10s), so SD = 0. Data set B has values spread around 10, so SD > 0."
    },
    {
      id: 4,
      question: "If 10 is added to every value in a data set, the standard deviation:",
      choices: [
        { id: "A", text: "Increases by 10" },
        { id: "B", text: "Decreases by 10" },
        { id: "C", text: "Stays the same" },
        { id: "D", text: "Is multiplied by 10" }
      ],
      correctAnswer: "C",
      hint: "Adding a constant shifts all values and the mean by the same amount. Do the distances from the mean change?",
      explanation: "Adding a constant shifts all values equally, including the mean. The distances from the mean don't change, so SD stays the same."
    },
    {
      id: 5,
      question: "If every value in a data set is multiplied by 2, the standard deviation:",
      choices: [
        { id: "A", text: "Stays the same" },
        { id: "B", text: "Is multiplied by 2" },
        { id: "C", text: "Is multiplied by 4" },
        { id: "D", text: "Is divided by 2" }
      ],
      correctAnswer: "B",
      hint: "Multiplying values stretches the distances between them and from the mean by the same factor.",
      explanation: "Multiplying by a constant scales the spread proportionally. SD is multiplied by 2."
    }
  ],

  // Section: Margin of Error
  "Margin of Error": [
    {
      id: 1,
      question: "A poll reports 45% support with a margin of error of ±3%. What is the confidence interval?",
      choices: [
        { id: "A", text: "42% to 48%" },
        { id: "B", text: "45% to 48%" },
        { id: "C", text: "42% to 45%" },
        { id: "D", text: "43% to 47%" }
      ],
      correctAnswer: "A",
      hint: "Subtract the margin of error to find the lower bound, and add it to find the upper bound.",
      explanation: "Confidence interval = estimate ± margin of error = 45% ± 3% = 42% to 48%."
    },
    {
      id: 2,
      question: "If sample size increases (all else equal), the margin of error:",
      choices: [
        { id: "A", text: "Increases" },
        { id: "B", text: "Decreases" },
        { id: "C", text: "Stays the same" },
        { id: "D", text: "Cannot be determined" }
      ],
      correctAnswer: "B",
      hint: "Think about whether surveying more people makes your estimate more or less precise.",
      explanation: "Larger samples provide more precise estimates, reducing the margin of error."
    },
    {
      id: 3,
      question: "A survey of 400 people has a margin of error of 5%. To halve the margin of error, you need approximately:",
      choices: [
        { id: "A", text: "800 people" },
        { id: "B", text: "1,200 people" },
        { id: "C", text: "1,600 people" },
        { id: "D", text: "2,000 people" }
      ],
      correctAnswer: "C",
      hint: "Margin of error is related to the square root of sample size. To halve the margin, you need to quadruple the sample.",
      explanation: "Margin of error is proportional to 1/√n. To halve it, you need 4 times the sample: 400 × 4 = 1,600."
    },
    {
      id: 4,
      question: "Two polls show: Poll A: 52% ± 4%, Poll B: 48% ± 4%. Can we conclude which candidate is ahead?",
      choices: [
        { id: "A", text: "Yes, candidate A is ahead" },
        { id: "B", text: "Yes, candidate B is ahead" },
        { id: "C", text: "No, the intervals overlap" },
        { id: "D", text: "No, need more information" }
      ],
      correctAnswer: "C",
      hint: "Calculate each confidence interval and check if they share any common values.",
      explanation: "Poll A: 48-56%, Poll B: 44-52%. The intervals overlap (48-52% is in both), so we can't conclude who's truly ahead."
    },
    {
      id: 5,
      question: "What does a 95% confidence level mean?",
      choices: [
        { id: "A", text: "95% of the population was sampled" },
        { id: "B", text: "The result is 95% accurate" },
        { id: "C", text: "If repeated many times, 95% of intervals would contain the true value" },
        { id: "D", text: "There's a 95% chance the sample is random" }
      ],
      correctAnswer: "C",
      hint: "Think about what would happen if you repeated this survey many times with different samples.",
      explanation: "A 95% confidence level means if we repeated the sampling process many times, about 95% of the calculated intervals would contain the true population parameter."
    }
  ]
};
