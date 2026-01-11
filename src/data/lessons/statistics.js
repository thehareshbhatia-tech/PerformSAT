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
      subtitle: "Add them up, divide by count",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
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
  { id: 2, title: "Simple Calculating Mean Example", type: "video", duration: "6 min", section: "Mean", videoId: "CLPwCiT26Yw" },
  { id: 3, title: "Simple Calculating Mean Example (DESMOS Method)", type: "video", duration: "6 min", section: "Mean", videoId: "PaGkN42IbFk" },
  {
    id: 4,
    title: "How Outliers Affect the Mean",
    type: "lesson",
    duration: "6 min",
    section: "Mean",
    hero: {
      tagline: "OUTLIER ALERT",
      subtitle: "One extreme value changes everything",
      gradient: "linear-gradient(135deg, #f5576c 0%, #f093fb 100%)"
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
  { id: 5, title: "Outlier Affecting Mean Example #1", type: "video", duration: "8 min", section: "Mean", videoId: "VrM1qUVevf8" },
  { id: 6, title: "Outlier Affecting Mean Example #2", type: "video", duration: "8 min", section: "Mean", videoId: "NVHHjqpKrxA" },
  { id: 7, title: "Finding Mean of a Combined Data Set", type: "video", duration: "10 min", section: "Mean", videoId: "fuxm-h0xAOQ" },
  // Section: Median
  {
    id: 8,
    title: "What is the Median?",
    type: "lesson",
    duration: "5 min",
    section: "Median",
    hero: {
      tagline: "THE MIDDLE VALUE",
      subtitle: "Resistant to outliers",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
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
      subtitle: "Working with frequency tables",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    content: {
      blocks: [
        { type: "medianFrequencyIntro" },
        { type: "medianFrequencySteps" },
        { type: "text", content: "**Pro Tip:** When N is even, the median is the average of the values at positions N/2 and (N/2 + 1)." }
      ]
    }
  },
  { id: 10, title: "Simple Calculating Median Example #1", type: "video", duration: "6 min", section: "Median", videoId: "vQ2i2EqGtT4" },
  { id: 11, title: "Simple Calculating Median Example #1 (DESMOS Method)", type: "video", duration: "6 min", section: "Median", videoId: "QyDRT97bYg0" },
  { id: 12, title: "Simple Calculating Median Example #2", type: "video", duration: "6 min", section: "Median", videoId: "jit5NLKJdGY" },
  { id: 13, title: "Simple Calculating Median Example #2 (DESMOS Method)", type: "video", duration: "6 min", section: "Median", videoId: "olTnIv_PANA" },
  { id: 14, title: "Finding Median from Frequency Table", type: "video", duration: "8 min", section: "Median", videoId: "pcdZAZ8lQiI" },
  { id: 15, title: "Comparing Mean & Median of Two Data Sets", type: "video", duration: "10 min", section: "Median", videoId: "Hf8geKrPg00" },
  // Section: Mode
  {
    id: 16,
    title: "What is the Mode?",
    type: "lesson",
    duration: "4 min",
    section: "Mode",
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
    content: {
      blocks: [
        { type: "rangeIntro" },
        { type: "rangeFormula" },
        { type: "text", content: "The range tells you **how spread out** the data is. A larger range means more variability in the data." },
        { type: "example", title: "Example", content: "Data set: 3, 7, 12, 15, 22\n\nRange = 22 − 3 = **19**" }
      ]
    }
  },
  { id: 18, title: "Simple Calculating Range Example", type: "video", duration: "6 min", section: "Range", videoId: "Ja8KCtWP6JY" },
  { id: 19, title: "Comparing Median & Range of Two Data Sets", type: "video", duration: "8 min", section: "Range", videoId: "zo3W571N1ag" },
  // Section: Standard Deviation
  {
    id: 20,
    title: "What is Standard Deviation?",
    type: "lesson",
    duration: "6 min",
    section: "Standard Deviation",
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
  { id: 21, title: "Simple Standard Deviation Example", type: "video", duration: "8 min", section: "Standard Deviation", videoId: "m3GVIhKeeZY" },
  { id: 22, title: "Complex Standard Deviation Example", type: "video", duration: "10 min", section: "Standard Deviation", videoId: "rz74TuYvxKs" },
  // Section: Margin of Error
  {
    id: 23,
    title: "What is Margin of Error?",
    type: "lesson",
    duration: "7 min",
    section: "Margin of Error",
    content: {
      blocks: [
        { type: "marginOfErrorIntro" },
        { type: "marginOfErrorVisual" },
        { type: "marginOfErrorSampleSize" },
        { type: "text", content: "**Key takeaway:** The margin of error connects the **sample statistic** to the **true population value** by showing a **reasonable range** where the true value is expected to be." }
      ]
    }
  },
  { id: 24, title: "Simple Margin of Error Example #1", type: "video", duration: "8 min", section: "Margin of Error", videoId: "ToUn8E5a7Ho" },
  { id: 25, title: "Simple Margin of Error Example #2", type: "video", duration: "8 min", section: "Margin of Error", videoId: "By4TzkHujmc" }
];
