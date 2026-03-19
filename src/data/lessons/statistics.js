export const statisticsLessons = [
  // Section: Mean
  {
    id: 1,
    title: "What is the Mean?",
    type: "lesson",
    duration: "5 min",
    section: "Mean",
    hero: {
      tagline: "THE AVERAGE",
      subtitle: "Add them up, divide by count"
    },
    content: {
      blocks: [
        { type: "meanIntro" },
        { type: "meanFormula" },
        { type: "text", content: "The mean is often called the **average** — it's the value you get when you **add up all the values** and **divide by how many** there are." },
        { type: "text", content: "On the SAT, mean questions often involve finding a missing value when given the mean, or understanding how adding/removing values affects the mean." }
      ]
    }
  },
  { id: 2, title: "Simple Calculating Mean Example", type: "video", duration: "6 min", section: "Mean", videoId: "CLPwCiT26Yw", hero: { tagline: "PRACTICE", subtitle: "Basic mean calculation" } },
  { id: 3, title: "Simple Calculating Mean Example (DESMOS Method)", type: "video", duration: "6 min", section: "Mean", videoId: "PaGkN42IbFk", hero: { tagline: "DESMOS METHOD", subtitle: "Calculator approach" } },
  {
    id: 4,
    title: "How Outliers Affect the Mean",
    type: "lesson",
    duration: "6 min",
    section: "Mean",
    hero: {
      tagline: "OUTLIER ALERT",
      subtitle: "One extreme value changes everything"
    },
    content: {
      blocks: [
        { type: "outlierMeanIntro" },
        { type: "outlierMeanExample" },
        { type: "text", content: "**Golden Rule:** An outlier pulls the mean in its direction." },
        { type: "list", items: [
          "A **high outlier** increases the mean",
          "A **low outlier** decreases the mean"
        ]},
        { type: "text", content: "This is why the mean is considered **sensitive to outliers** — even one extreme value can significantly shift the average." }
      ]
    }
  },
  { id: 5, title: "Outlier Affecting Mean Example #1", type: "video", duration: "8 min", section: "Mean", videoId: "VrM1qUVevf8", hero: { tagline: "OUTLIERS", subtitle: "Impact on mean #1" } },
  { id: 6, title: "Outlier Affecting Mean Example #2", type: "video", duration: "8 min", section: "Mean", videoId: "NVHHjqpKrxA", hero: { tagline: "OUTLIERS", subtitle: "Impact on mean #2" } },
  { id: 7, title: "Finding Mean of a Combined Data Set", type: "video", duration: "10 min", section: "Mean", videoId: "fuxm-h0xAOQ", hero: { tagline: "COMBINED", subtitle: "Merging data sets" } },
  // Section: Median
  {
    id: 8,
    title: "What is the Median?",
    type: "lesson",
    duration: "5 min",
    section: "Median",
    hero: {
      tagline: "THE MIDDLE VALUE",
      subtitle: "Resistant to outliers"
    },
    content: {
      blocks: [
        { type: "medianIntro" },
        { type: "medianSteps" },
        { type: "text", content: "Unlike the mean, the median is **resistant to outliers** because it only depends on the middle position, not the total sum of all values." }
      ]
    }
  },
  {
    id: 9,
    title: "Finding Median from a Frequency Table",
    type: "lesson",
    duration: "6 min",
    section: "Median",
    hero: {
      tagline: "COUNT TO THE MIDDLE",
      subtitle: "Working with frequency tables"
    },
    content: {
      blocks: [
        { type: "medianFrequencyIntro" },
        { type: "medianFrequencySteps" },
        { type: "text", content: "**Pro Tip:** When N is even, the median is the average of the values at positions N/2 and (N/2 + 1)." }
      ]
    }
  },
  { id: 10, title: "Simple Calculating Median Example #1", type: "video", duration: "6 min", section: "Median", videoId: "vQ2i2EqGtT4", hero: { tagline: "PRACTICE", subtitle: "Basic median finding" } },
  { id: 11, title: "Simple Calculating Median Example #1 (DESMOS Method)", type: "video", duration: "6 min", section: "Median", videoId: "QyDRT97bYg0", hero: { tagline: "DESMOS METHOD", subtitle: "Calculator approach" } },
  { id: 12, title: "Simple Calculating Median Example #2", type: "video", duration: "6 min", section: "Median", videoId: "jit5NLKJdGY", hero: { tagline: "PRACTICE", subtitle: "More median examples" } },
  { id: 13, title: "Simple Calculating Median Example #2 (DESMOS Method)", type: "video", duration: "6 min", section: "Median", videoId: "olTnIv_PANA", hero: { tagline: "DESMOS METHOD", subtitle: "More calculator approach" } },
  { id: 14, title: "Finding Median from Frequency Table", type: "video", duration: "8 min", section: "Median", videoId: "pcdZAZ8lQiI", hero: { tagline: "FREQUENCY TABLE", subtitle: "Table-based median" } },
  { id: 15, title: "Comparing Mean & Median of Two Data Sets", type: "video", duration: "10 min", section: "Median", videoId: "Hf8geKrPg00", hero: { tagline: "COMPARISON", subtitle: "Mean vs median" } },
  // Section: Mode
  {
    id: 16,
    title: "What is the Mode?",
    type: "lesson",
    duration: "4 min",
    section: "Mode",
    hero: {
      tagline: "MOST FREQUENT",
      subtitle: "The value that appears most"
    },
    content: {
      blocks: [
        { type: "modeIntro" },
        { type: "modeExamples" },
        { type: "text", content: "The mode is especially useful for **categorical data** where calculating a mean or median doesn't make sense." }
      ]
    }
  },
  // Section: Range
  {
    id: 17,
    title: "What is the Range?",
    type: "lesson",
    duration: "4 min",
    section: "Range",
    hero: {
      tagline: "MAX - MIN",
      subtitle: "The spread of data"
    },
    content: {
      blocks: [
        { type: "rangeIntro" },
        { type: "rangeFormula", notGiven: true },
        { type: "text", content: "The range tells you **how spread out** the data is. A larger range means more variability in the data." },
        { type: "example", title: "Example", content: "Data set: 3, 7, 12, 15, 22\n\nRange = 22 − 3 = **19**" }
      ]
    }
  },
  { id: 18, title: "Simple Calculating Range Example", type: "video", duration: "6 min", section: "Range", videoId: "Ja8KCtWP6JY", hero: { tagline: "PRACTICE", subtitle: "Basic range calculation" } },
  { id: 19, title: "Comparing Median & Range of Two Data Sets", type: "video", duration: "8 min", section: "Range", videoId: "zo3W571N1ag", hero: { tagline: "COMPARISON", subtitle: "Median & range together" } },
  // Section: Standard Deviation
  {
    id: 20,
    title: "What is Standard Deviation?",
    type: "lesson",
    duration: "6 min",
    section: "Standard Deviation",
    hero: {
      tagline: "SPREAD FROM MEAN",
      subtitle: "How clustered is your data?"
    },
    content: {
      blocks: [
        { type: "stdDevIntro" },
        { type: "stdDevVisual" },
        { type: "text", content: "**Good news:** You will **not** need to calculate standard deviation on the SAT — you just need to understand what it **means** and how to **compare** standard deviations." },
        { type: "list", items: [
          "A data set with values **closer together** has a **smaller** standard deviation",
          "A data set with values **spread far apart** has a **larger** standard deviation"
        ]}
      ]
    }
  },
  { id: 21, title: "Simple Standard Deviation Example", type: "video", duration: "8 min", section: "Standard Deviation", videoId: "m3GVIhKeeZY", hero: { tagline: "PRACTICE", subtitle: "Understanding std dev" } },
  { id: 22, title: "Complex Standard Deviation Example", type: "video", duration: "10 min", section: "Standard Deviation", videoId: "rz74TuYvxKs", hero: { tagline: "ADVANCED", subtitle: "Complex std dev problems" } },
  // Section: Margin of Error
  {
    id: 23,
    title: "What is Margin of Error?",
    type: "lesson",
    duration: "7 min",
    section: "Margin of Error",
    hero: {
      tagline: "± THE UNCERTAINTY",
      subtitle: "How confident is your estimate?"
    },
    content: {
      blocks: [
        { type: "marginOfErrorIntro" },
        { type: "marginOfErrorVisual" },
        { type: "marginOfErrorSampleSize" },
        { type: "text", content: "**Key takeaway:** The margin of error connects the **sample statistic** to the **true population value** by showing a **reasonable range** where the true value is expected to be." }
      ]
    }
  },
  { id: 24, title: "Simple Margin of Error Example #1", type: "video", duration: "8 min", section: "Margin of Error", videoId: "ToUn8E5a7Ho", hero: { tagline: "PRACTICE", subtitle: "Basic margin of error" } },
  { id: 25, title: "Simple Margin of Error Example #2", type: "video", duration: "8 min", section: "Margin of Error", videoId: "By4TzkHujmc", hero: { tagline: "PRACTICE", subtitle: "More examples" } },
  // Section: Probability
  {
    id: 26,
    title: "What is Probability?",
    type: "lesson",
    duration: "6 min",
    section: "Probability",
    hero: {
      tagline: "CHANCE & LIKELIHOOD",
      subtitle: "From 0 to 1"
    },
    content: {
      blocks: [
        { type: "text", content: "**Probability** measures how likely an event is to occur. It is always a number between **0** (impossible) and **1** (certain)." },
        { type: "text", content: "$$P(\\text{event}) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$$" },
        { type: "list", items: [
          "**P = 0** means the event cannot happen",
          "**P = 1** means the event is certain",
          "**P = 0.5** means it's equally likely to happen or not"
        ]},
        { type: "text", content: "On the SAT, probability questions usually give you a data set or table and ask you to find the probability of selecting a specific item or category." },
        { type: "example", title: "Example", content: "A bag contains 3 red, 5 blue, and 2 green marbles.\n\nP(blue) = 5/10 = **1/2** or **0.5**" }
      ]
    }
  },
  {
    id: 27,
    title: "Complementary Probability",
    type: "lesson",
    duration: "5 min",
    section: "Probability",
    hero: {
      tagline: "THE COMPLEMENT",
      subtitle: "P(not A) = 1 − P(A)"
    },
    content: {
      blocks: [
        { type: "text", content: "The **complement** of an event is everything that is NOT the event. Their probabilities always add to 1." },
        { type: "text", content: "$$P(\\text{not A}) = 1 - P(A)$$" },
        { type: "text", content: "**SAT Tip:** If a problem asks \"what is the probability that it is NOT X?\" — find P(X) first and subtract from 1." },
        { type: "example", title: "Example", content: "If P(rain) = 0.3, then P(no rain) = 1 − 0.3 = **0.7**" }
      ]
    }
  },
  // Section: Conditional Probability
  {
    id: 28,
    title: "What is Conditional Probability?",
    type: "lesson",
    duration: "7 min",
    section: "Conditional Probability",
    hero: {
      tagline: "GIVEN THAT…",
      subtitle: "Probability with a condition"
    },
    content: {
      blocks: [
        { type: "text", content: "**Conditional probability** asks: what is the probability of event A, **given that** event B has already occurred?" },
        { type: "text", content: "$$P(A \\mid B) = \\frac{\\text{outcomes in both A and B}}{\\text{outcomes in B}}$$" },
        { type: "text", content: "The key word is **\"given\"** — it tells you to restrict your attention to only the rows or columns that match the condition." },
        { type: "example", title: "Example", content: "200 students surveyed: 80 play sports, and of those 80, 30 also play music.\n\nP(music | sports) = 30/80 = **3/8** = **0.375**" },
        { type: "text", content: "**SAT Strategy:** When you see \"given that\" or \"among those who…\", you are looking at conditional probability. Use the restricted total as your denominator." }
      ]
    }
  },
  // Section: Two-Way Tables
  {
    id: 29,
    title: "Reading Two-Way Tables",
    type: "lesson",
    duration: "7 min",
    section: "Two-Way Tables",
    hero: {
      tagline: "ROWS & COLUMNS",
      subtitle: "Organizing categorical data"
    },
    content: {
      blocks: [
        { type: "text", content: "A **two-way table** (also called a contingency table) organizes data by two categorical variables — one across the rows, one across the columns." },
        { type: "text", content: "Each cell shows the count (or frequency) for a specific combination of categories. The **margins** show row totals, column totals, and the grand total." },
        { type: "list", items: [
          "**Joint frequency**: a single cell value (e.g., 30 students who are female AND prefer math)",
          "**Marginal frequency**: a row or column total",
          "**Relative frequency**: a cell divided by the grand total, or by a row/column total"
        ]},
        { type: "text", content: "**SAT Questions** typically ask you to:\n1. Find a probability from the table\n2. Calculate a conditional probability (\"among those who…\")\n3. Compare relative frequencies across groups" },
        { type: "example", title: "Example", content: "|          | Math | English | Total |\n|----------|------|---------|-------|\n| Female   |  30  |   20    |  50   |\n| Male     |  25  |   25    |  50   |\n| **Total**|  55  |   45    | 100   |\n\nP(Math | Female) = 30/50 = **0.6**\nP(Female | Math) = 30/55 ≈ **0.545**" }
      ]
    }
  }
];
