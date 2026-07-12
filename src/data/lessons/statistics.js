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
        { type: "text", content: "The mean is often called the **average**, but let's think about what it really represents. Imagine you have five friends who each have a different number of candies. The mean is the number of candies each person **would** have if you pooled everything together and split it equally. It's a measure of the **center** of your data — a single number that tries to summarize an entire data set." },
        { type: "text", content: "Here's the core idea: **Mean = Sum of all values / Number of values**. This formula is deceptively simple, but the SAT loves to test whether you truly understand it by flipping it around. Instead of giving you the values and asking for the mean, the SAT often gives you the mean and asks you to work **backward** to find a missing value, the total sum, or the number of data points." },
        { type: "text", content: "Think of the mean formula as a **three-part equation**: Mean x Count = Sum. If you know any two of these three pieces, you can always find the third. This rearrangement is the key to roughly 80% of SAT mean questions. For example, if 6 students have a mean score of 85, their total sum must be 6 x 85 = 510. If a 7th student joins and the new mean is 84, the new total is 7 x 84 = 588, so the 7th student scored 588 - 510 = 78." },
        { type: "list", items: [
          "**Given mean + count, find sum**: Multiply mean by count",
          "**Given mean + sum, find count**: Divide sum by mean",
          "**Given values with one missing + mean**: Set up the equation Sum / Count = Mean and solve for the missing value"
        ]},
        { type: "text", content: "**Common SAT trap:** Students sometimes confuse the mean with the median. The mean uses **every** value in the calculation (which makes it sensitive to extreme values), while the median only cares about position. When an SAT question says \"average,\" it means the mean — but watch out for problems that test whether you know the difference between the two." },
        { type: "text", content: "**SAT Strategy:** When a problem says something like \"the average of five numbers is 12,\" immediately translate that into **the sum of those five numbers is 60**. This restatement unlocks most mean problems and makes the algebra much cleaner." }
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
        { type: "text", content: "Here's an analogy to build your intuition: imagine four friends sitting in a coffee shop, each earning about $50,000 a year. Their average income is $50,000. Now Jeff Bezos walks in. Suddenly the \"average\" income in the room is in the billions. Did everyone get richer? Of course not — but the mean **acts** like they did, because it factors in every single value, no matter how extreme." },
        { type: "text", content: "**Golden Rule:** An outlier pulls the mean in its direction, like a magnet dragging a compass needle. The farther away the outlier is from the rest of the data, the stronger the pull." },
        { type: "list", items: [
          "A **high outlier** increases the mean — it adds a disproportionately large value to the sum",
          "A **low outlier** decreases the mean — it drags the sum down",
          "The **median**, by contrast, barely moves — it only cares about position, not value",
          "The more data points you have, the **less impact** a single outlier has on the mean"
        ]},
        { type: "text", content: "This is why the mean is described as **not resistant** (or \"sensitive\") to outliers. The median, on the other hand, is called **resistant** — you could replace the highest value with a trillion and the median wouldn't budge, because it only depends on which value sits in the middle position." },
        { type: "text", content: "**How the SAT tests this:** The SAT loves to describe a data set and then ask what happens to the mean and/or median when an outlier is added or removed. The classic question pattern is: \"Data set A has a mean of 15 and a median of 14. If the largest value is removed, which measure changes more?\" The answer is almost always the **mean**, because removing an extreme value changes the sum significantly while the median shifts by at most one position." },
        { type: "text", content: "**SAT Trap:** Some students assume that if the mean and median are different, there must be outliers. That's not always true — the mean and median can differ for any skewed distribution. But when the SAT mentions that the mean is **much larger** than the median, that's a strong signal the data is **right-skewed** (pulled by high outliers). When the mean is **much smaller** than the median, the data is **left-skewed** (pulled by low outliers)." },
        { type: "text", content: "**Quick decision guide for SAT questions:** If a problem asks which measure of center \"best represents\" a data set with outliers, choose the **median**. If the data is symmetric with no outliers, the mean and median will be approximately equal, and either works." }
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
        { type: "text", content: "Think of the median like a **physical balance point by position**, not by weight. If you line up all your data values from smallest to largest and walk to the exact middle, the value you're standing on is the median. It doesn't care how extreme the values at the ends are — it only cares about **which value occupies the center seat**." },
        { type: "text", content: "There are two cases to remember. If you have an **odd** number of values, the median is simply the middle value — the one at position (n+1)/2. If you have an **even** number of values, there's no single middle value, so the median is the **average of the two middle values** at positions n/2 and (n/2 + 1). For example, in the set {2, 5, 8, 12}, the median is (5 + 8) / 2 = 6.5." },
        { type: "text", content: "Unlike the mean, the median is **resistant to outliers** because it only depends on the middle position, not the total sum of all values. You could change the largest value from 100 to 10,000,000 and the median wouldn't change at all. This makes the median a better measure of \"typical\" when data has extreme values — like home prices in a neighborhood or salaries at a company." },
        { type: "text", content: "**How the SAT tests median:** The most common pattern is giving you an ordered data set and asking for the median — straightforward if you count carefully. But the trickier version gives you a data set and asks how the median changes when a value is **added** or **removed**. Think carefully: adding a value below the current median pushes the median position up by half a spot (it shifts slightly higher in position but might pick a different value), while adding a value above does the opposite." },
        { type: "list", items: [
          "**Always sort first** — the median requires data in order from least to greatest",
          "**Odd count**: median is the single middle value",
          "**Even count**: median is the average of the two middle values",
          "**Resistant to outliers**: extreme values don't move the median"
        ]},
        { type: "text", content: "**SAT Trap:** A common mistake is forgetting to sort the data before finding the median. If the data is given as {7, 2, 9, 1, 5}, students sometimes pick 9 (the middle of the list as written). But you must sort first: {1, 2, 5, 7, 9} — the median is **5**. The SAT occasionally presents unsorted data specifically to catch this error." }
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
        { type: "text", content: "Frequency tables are one of the SAT's favorite ways to present data because they compress a large data set into a compact format. Instead of listing every individual value, the table tells you **how many times** each value appears. Your job is to mentally \"expand\" the table back into a sorted list and then find the middle value — but you don't actually have to write out the whole list. You just need to **count your way to the middle position**." },
        { type: "text", content: "Here's the step-by-step process: First, add up the frequency column to get the **total number of data points (N)**. Then figure out which position(s) the median occupies: for odd N, it's position (N+1)/2; for even N, it's positions N/2 and (N/2 + 1). Finally, use a **running total** (cumulative frequency) as you go down the table to find which value those positions fall into." },
        { type: "text", content: "**Pro Tip:** When N is even, the median is the average of the values at positions N/2 and (N/2 + 1). If both positions fall in the same row of the frequency table, the median is simply that row's value. If they fall in different rows, average the two different values." },
        { type: "text", content: "Let's say a frequency table shows: Value 2 appears 4 times, Value 3 appears 6 times, Value 5 appears 3 times, Value 7 appears 2 times. That's 15 data points total (odd), so the median is at position (15+1)/2 = 8. Count through: positions 1-4 are Value 2, positions 5-10 are Value 3. Position 8 falls in the Value 3 group, so the median is **3**." },
        { type: "list", items: [
          "**Step 1**: Sum all frequencies to get N",
          "**Step 2**: Find the median position(s): (N+1)/2 for odd N, or N/2 and (N/2)+1 for even N",
          "**Step 3**: Build cumulative frequency row by row until you reach the median position",
          "**Step 4**: The value in the row where the cumulative frequency first equals or exceeds the median position IS the median"
        ]},
        { type: "text", content: "**SAT Trap:** Students sometimes use the **frequency** itself as the median instead of the **value**. If Value 4 has a frequency of 10, the median is NOT 10 — the frequency just tells you how many times 4 appears. Always keep straight which column is the **data value** and which is the **count**." },
        { type: "text", content: "**SAT Strategy:** When you see a frequency table on the SAT, immediately write the cumulative frequencies next to each row. This running total lets you pinpoint the median position without expanding the entire data set — a huge time saver." }
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
        { type: "text", content: "The mode is the simplest measure of center to find — just look for whichever value shows up the **most often**. Think of it like a popularity contest: the mode is the most popular value. Unlike the mean or median, the mode doesn't involve any calculation at all — it's pure observation." },
        { type: "text", content: "The mode is especially useful for **categorical data** where calculating a mean or median doesn't make sense. What's the \"average\" favorite color? That question is meaningless. But you can absolutely say that the **mode** favorite color is blue if more people chose blue than any other color. This makes the mode the only measure of center that works for non-numerical data." },
        { type: "text", content: "A data set can have **no mode** (if all values appear equally often), **one mode** (unimodal), **two modes** (bimodal), or **more than two modes** (multimodal). For example, {1, 2, 2, 3, 4, 4} is bimodal with modes 2 and 4. The SAT won't usually ask for multimodal sets, but knowing the vocabulary helps you eliminate wrong answer choices." },
        { type: "list", items: [
          "**Mode** = the value that appears most frequently",
          "**No mode** if all values occur the same number of times",
          "**Bimodal** = two values tie for highest frequency",
          "Works for **categorical and numerical** data — the only measure of center that handles both"
        ]},
        { type: "text", content: "**How the SAT tests mode:** Mode questions are relatively rare on their own, but they show up in comparison questions like \"Which measure of center would change if the value 5 were added to the data set?\" or \"Which data set has a mode greater than its mean?\" The SAT also tests mode indirectly in histogram and dot-plot questions — the tallest bar or the most crowded cluster of dots represents the mode." },
        { type: "text", content: "**SAT Trap:** Don't confuse the mode with the **frequency** of the mode. If the value 7 appears 5 times (more than any other value), the mode is **7**, not 5. The mode is always a data value, never a count." }
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
        { type: "text", content: "The range is the simplest measure of **spread** (also called variability or dispersion). While the mean and median tell you where the center of the data is, the range tells you **how wide** the data stretches. Think of it like measuring the wingspan of your data set — it only looks at the two most extreme values and ignores everything in between." },
        { type: "text", content: "**Range = Maximum value - Minimum value.** That's it — one subtraction. The range gives you a quick snapshot of variability, but it has a major weakness: it's completely determined by just **two values** (the largest and smallest), which means a single outlier can make the range enormous even if 99% of the data is tightly clustered." },
        { type: "example", title: "Example", content: "Data set: 3, 7, 12, 15, 22\n\nRange = 22 − 3 = **19**" },
        { type: "text", content: "Now consider what happens if we change just one value: {3, 7, 12, 15, **100**}. The range jumps to 100 - 3 = **97**. One extreme value completely transformed our sense of how spread out the data is. This is why the range, like the mean, is **not resistant** to outliers." },
        { type: "list", items: [
          "**Larger range** = data is more spread out",
          "**Smaller range** = data is more tightly clustered",
          "**Range = 0** means all values are identical",
          "**Sensitive to outliers** — one extreme value inflates the range dramatically"
        ]},
        { type: "text", content: "**How the SAT tests range:** Range questions are usually part of **comparison problems**. The SAT might show two dot plots or data sets and ask which has a greater range, or ask how the range changes when a value is added or removed. A classic pattern: \"If the maximum value is removed from the data set, which of the following must decrease?\" — the answer is often the range (though be careful: if the second-largest value equals the removed maximum, the range stays the same)." },
        { type: "text", content: "**SAT Trap:** Students sometimes calculate range as max + min instead of max - min. Range is always a **subtraction**. Also, remember that range is always **non-negative** — if you get a negative range, you've subtracted in the wrong direction." }
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
        { type: "text", content: "**Good news:** You will **not** need to calculate standard deviation on the SAT — you just need to understand what it **means** and how to **compare** standard deviations. This is one of those rare topics where conceptual understanding matters more than computation." },
        { type: "text", content: "Think of standard deviation as a measure of **how far, on average, each data point sits from the mean**. If everyone in a class scores between 78 and 82 on a test, the standard deviation is small — the scores are clustered tightly around the mean. But if scores range from 40 to 100, the standard deviation is large — the values are scattered far from the mean. The range only uses two extreme values, but standard deviation accounts for **every** data point's distance from the center." },
        { type: "list", items: [
          "A data set with values **closer together** has a **smaller** standard deviation",
          "A data set with values **spread far apart** has a **larger** standard deviation",
          "If **all values are identical**, the standard deviation is exactly **0**",
          "Standard deviation is **always non-negative** — it can never be negative",
          "Adding a **constant** to every value (e.g., adding 10 to each) does **not** change the standard deviation",
          "**Multiplying** every value by a constant **does** change the standard deviation (it gets multiplied by the same constant)"
        ]},
        { type: "text", content: "Here's a powerful visual shortcut: imagine two dot plots side by side. The one where dots are bunched tightly around the center has the **smaller** standard deviation. The one where dots are scattered widely has the **larger** standard deviation. You don't need to compute anything — just look at how concentrated or spread out the data appears." },
        { type: "text", content: "**How the SAT tests this:** The most common question type shows two data sets (or two histograms/dot plots) and asks which has the greater standard deviation. Don't panic — just eyeball which data set is more spread out. Another pattern: the SAT describes a transformation (like adding 5 to every value) and asks how the standard deviation changes. Remember: **shifting** data doesn't change spread, but **stretching** it does." },
        { type: "text", content: "**SAT Trap:** Students sometimes confuse range with standard deviation. A data set like {1, 50, 50, 50, 50, 99} has a large **range** (98), but most values are clustered near 50, so the standard deviation is moderate. Meanwhile {1, 20, 40, 60, 80, 99} has a similar range but values are spread evenly, giving a **larger** standard deviation. Range only sees the endpoints; standard deviation sees everything." },
        { type: "text", content: "**Key vocabulary for SAT:** When the SAT says data has \"more variability,\" \"greater spread,\" or \"less consistency,\" it means a **larger** standard deviation. When it says data is \"more consistent,\" \"more uniform,\" or \"less variable,\" it means a **smaller** standard deviation." }
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
        { type: "text", content: "Imagine a poll says 60% of voters support a candidate, with a margin of error of ±3%. That means the **true** percentage of all voters who support the candidate is most likely between **57% and 63%**. The margin of error is an honest admission: \"We surveyed a sample, not the entire population, so our answer might be slightly off — here's how far off it could reasonably be.\"" },
        { type: "text", content: "The **confidence interval** is the range you get when you apply the margin of error to your sample statistic: **sample statistic ± margin of error**. If a survey finds a mean of 45 with a margin of error of 4, the confidence interval is **41 to 49**. Any value in that interval is a plausible estimate for the true population parameter." },
        { type: "text", content: "Here's the critical relationship the SAT tests: **sample size and margin of error move in opposite directions**. A bigger sample gives you a **smaller** margin of error (more precision), while a smaller sample gives you a **larger** margin of error (less precision). Think of it like this — if you taste one spoonful of soup, you might not know if it needs salt. If you taste five spoonfuls from different spots, you're much more confident in your judgment." },
        { type: "list", items: [
          "**Larger sample size** → **Smaller** margin of error → **More precise** estimate",
          "**Smaller sample size** → **Larger** margin of error → **Less precise** estimate",
          "The margin of error says nothing about **bias** — a biased survey with a small margin of error is still wrong",
          "Confidence interval = sample statistic ± margin of error"
        ]},
        { type: "text", content: "**How the SAT tests this:** The SAT typically gives you a survey result with a margin of error and asks which conclusions are valid. For example: \"A survey of 500 students found that 35% prefer math, with a margin of error of 4%. Which statement is supported?\" The correct answer will say the true percentage is between 31% and 39%. Wrong answers often state an exact value (\"exactly 35%\") or make claims beyond what the interval supports." },
        { type: "text", content: "**SAT Trap:** Students sometimes think margin of error accounts for all types of error. It does NOT. Margin of error only addresses **random sampling error** — the natural variation from surveying a sample instead of the whole population. It does **not** fix problems like biased questions, non-random sampling, or low response rates. If an SAT problem describes a flawed study design, a small margin of error doesn't make the results trustworthy." },
        { type: "text", content: "**Key takeaway:** The margin of error connects the **sample statistic** to the **true population value** by showing a **reasonable range** where the true value is expected to be. On the SAT, always convert the margin of error into a confidence interval and check whether each answer choice falls inside or outside that interval." }
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
        { type: "text", content: "**Probability** measures how likely an event is to occur. At its core, it answers the question: \"If I could repeat this experiment over and over, what fraction of the time would this outcome happen?\" Probability is always a number between **0** (impossible) and **1** (certain) — nothing less, nothing more." },
        { type: "text", content: "$$P(\\text{event}) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$$" },
        { type: "text", content: "This formula is the foundation of nearly every SAT probability question. The numerator counts **how many outcomes you want** (favorable), and the denominator counts **how many outcomes are possible** (total). The trickiest part is correctly identifying both numbers — and the SAT is very good at making you miscount." },
        { type: "list", items: [
          "**P = 0** means the event is impossible (e.g., rolling a 7 on a standard die)",
          "**P = 1** means the event is certain (e.g., rolling less than 7 on a standard die)",
          "**P = 0.5** means the event is equally likely to happen or not (e.g., flipping heads on a fair coin)",
          "Probability can be expressed as a **fraction, decimal, or percentage** — the SAT uses all three forms"
        ]},
        { type: "example", title: "Example", content: "A bag contains 3 red, 5 blue, and 2 green marbles.\n\nP(blue) = 5/10 = **1/2** or **0.5**" },
        { type: "text", content: "On the SAT, probability questions almost always give you data in a **table** (often a two-way table) and ask you to find the probability of selecting a specific item or category. The key skill is reading the table correctly: make sure you're dividing by the right total. Are they asking about the probability among **all** respondents, or among a specific subgroup? That distinction is the difference between regular probability and conditional probability." },
        { type: "text", content: "**SAT Trap:** The most common mistake is using the **wrong denominator**. If a question asks \"What is the probability that a randomly selected student prefers science?\", your denominator is the **total number of students**. But if it asks \"What is the probability that a randomly selected **female** student prefers science?\", your denominator is only the **number of female students**. Read the question carefully to determine your \"universe\" of possibilities." },
        { type: "text", content: "**SAT Strategy:** Before computing any probability, pause and ask yourself two questions: (1) What group am I selecting from? That gives the denominator. (2) What specific outcome am I looking for within that group? That gives the numerator. Getting these two answers right before you touch a calculator will prevent most errors." }
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
        { type: "text", content: "The **complement** of an event is everything that is NOT the event. Think of it like a light switch — an event either happens or it doesn't. These two possibilities cover **every** outcome, so their probabilities must add up to exactly 1. If there's a 30% chance of rain, there's a 70% chance of no rain, because 30% + 70% = 100%." },
        { type: "text", content: "$$P(\\text{not A}) = 1 - P(A)$$" },
        { type: "text", content: "This simple formula is surprisingly powerful. It lets you solve problems **backwards** — sometimes it's much easier to calculate the probability of what you **don't** want and subtract from 1. For instance, if someone asks \"What's the probability of rolling at least one 6 in four rolls of a die?\" it's messy to count all the ways to get one, two, three, or four sixes. But the complement — no sixes at all — is just one scenario to calculate: (5/6)^4. Then subtract from 1." },
        { type: "text", content: "**SAT Tip:** If a problem asks \"what is the probability that it is NOT X?\" — find P(X) first and subtract from 1. Watch for keywords like \"not,\" \"at least one,\" \"none,\" or \"other than\" — these are signals to consider using the complement." },
        { type: "example", title: "Example", content: "If P(rain) = 0.3, then P(no rain) = 1 − 0.3 = **0.7**" },
        { type: "text", content: "On the SAT, complementary probability often shows up in table-reading problems. A question might ask: \"What is the probability that a randomly selected person does NOT prefer chocolate?\" You could add up every non-chocolate category, or you could find the chocolate fraction and subtract from 1. The complement approach is usually faster and less error-prone — fewer numbers to add means fewer chances to make an arithmetic mistake." },
        { type: "list", items: [
          "**P(A) + P(not A) = 1** — always, without exception",
          "**P(not A) = 1 - P(A)** — the complement formula",
          "Use the complement when counting favorable outcomes directly is complicated",
          "Keywords that signal complement: \"not,\" \"at least one,\" \"none,\" \"other than,\" \"everything except\""
        ]},
        { type: "text", content: "**SAT Trap:** Be careful with the phrase \"at least one.\" The complement of \"at least one\" is \"none.\" So P(at least one) = 1 - P(none). Students often try to compute \"at least one\" directly, which requires adding many cases. The complement shortcut is almost always the smarter path." }
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
        { type: "text", content: "**Conditional probability** asks: what is the probability of event A, **given that** event B has already occurred? In everyday terms, it answers questions like: \"If I **already know** a student plays sports, what's the chance they also play music?\" The \"given\" part shrinks your universe — you're no longer looking at all students, just the sports-playing ones." },
        { type: "text", content: "$$P(A \\mid B) = \\frac{\\text{outcomes in both A and B}}{\\text{outcomes in B}}$$" },
        { type: "text", content: "The vertical bar \"|\" is read as \"given.\" So P(A|B) is \"the probability of A, given B.\" The key insight: **the denominator changes**. In regular probability, the denominator is the grand total. In conditional probability, the denominator is **only the group that satisfies the condition**. Everything else disappears — you're zooming in on a subset of the data." },
        { type: "text", content: "Here's an analogy: imagine a school cafeteria. If you ask \"What fraction of ALL students ordered pizza?\" — that's regular probability (denominator = all students). But if you ask \"What fraction of SENIORS ordered pizza?\" — that's conditional probability (denominator = just seniors). The condition (\"being a senior\") narrows your focus." },
        { type: "example", title: "Example", content: "200 students surveyed: 80 play sports, and of those 80, 30 also play music.\n\nP(music | sports) = 30/80 = **3/8** = **0.375**" },
        { type: "text", content: "Notice that P(music | sports) is NOT the same as P(sports | music). The order matters enormously. P(sports | music) would use the number of music players as the denominator: if 50 total play music and 30 of those also play sports, then P(sports | music) = 30/50 = 0.6. Same numerator, completely different denominator, completely different answer." },
        { type: "list", items: [
          "**\"Given that\"** or **\"among those who\"** = conditional probability — shrink your denominator",
          "**P(A|B) ≠ P(B|A)** — the order of events matters; the denominator changes",
          "In a two-way table, the condition tells you which **row or column total** to use as the denominator",
          "The numerator is always the **overlap** — the cell where both conditions are true"
        ]},
        { type: "text", content: "**SAT Strategy:** When you see \"given that\" or \"among those who...\" in a two-way table problem, immediately find the row or column total for the \"given\" condition. That's your denominator. Then find the specific cell that matches both conditions. That's your numerator. Fraction done." },
        { type: "text", content: "**SAT Trap:** The single biggest mistake is using the **grand total** as the denominator instead of the **conditional group total**. The SAT deliberately places the grand total in an obvious position (bottom-right corner) to tempt you. If the question says \"given that the person is female,\" your denominator is the **female row total**, NOT the grand total. Every time you see the word \"given,\" cross out the grand total in your mind." }
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
        { type: "text", content: "A **two-way table** (also called a contingency table) is one of the most heavily tested data formats on the SAT. It organizes data by **two categorical variables** — one across the rows, one across the columns. Think of it as a grid that answers a question like: \"How do gender and subject preference relate to each other?\" Every cell in the grid tells you the count for a specific combination." },
        { type: "text", content: "Each cell shows the count (or frequency) for a specific combination of categories. The **margins** (the totals along the edges) show row totals, column totals, and the grand total. Understanding the anatomy of this table is everything — the SAT tests whether you can navigate it accurately under pressure." },
        { type: "list", items: [
          "**Joint frequency**: a single cell value (e.g., 30 students who are female AND prefer math) — where a row and column intersect",
          "**Marginal frequency**: a row or column total — the sums along the edges (\"margins\") of the table",
          "**Relative frequency**: a cell value divided by some total — this is where probability comes in",
          "**Grand total**: the total of all data points, found in the bottom-right corner"
        ]},
        { type: "text", content: "Here's the crucial skill: the denominator you use depends entirely on what the question asks. If it asks about **all** respondents, use the grand total. If it says **\"given that\"** or **\"among those who,\"** use the relevant row or column total. This single distinction is the difference between a regular probability and a conditional probability — and the SAT tests this relentlessly." },
        { type: "example", title: "Example", content: "|          | Math | English | Total |\n|----------|------|---------|-------|\n| Female   |  30  |   20    |  50   |\n| Male     |  25  |   25    |  50   |\n| **Total**|  55  |   45    | 100   |\n\nP(Math | Female) = 30/50 = **0.6**\nP(Female | Math) = 30/55 ≈ **0.545**" },
        { type: "text", content: "Notice how the same cell (Female AND Math = 30) produces two completely different probabilities depending on the condition. P(Math | Female) uses the Female row total (50) as the denominator. P(Female | Math) uses the Math column total (55). The SAT loves to include **both** of these as answer choices to see if you pick the right denominator." },
        { type: "text", content: "**SAT Question Patterns:**\n1. **Simple probability**: \"What fraction of all students prefer math?\" → 55/100\n2. **Conditional probability**: \"Among female students, what fraction prefer math?\" → 30/50\n3. **Comparison**: \"Is the proportion of females who prefer math greater than the proportion of males who prefer math?\" → Compare 30/50 vs 25/50\n4. **Association**: \"Is there an association between gender and subject preference?\" → Compare conditional proportions; if they're different, there's an association" },
        { type: "text", content: "**SAT Trap:** When the SAT asks whether there is an **association** (or relationship) between two variables, compare the conditional distributions. If P(Math | Female) equals P(Math | Male), there's **no association** — the variables are independent. If those proportions differ, there IS an association. In our example, 30/50 = 0.6 vs 25/50 = 0.5, so there is a slight association between gender and subject preference." },
        { type: "text", content: "**SAT Strategy:** Before answering any two-way table question, highlight (or mentally note) the **specific row, column, or total** the question is asking about. Write the fraction as numerator/denominator before simplifying. This prevents the most common error: grabbing the wrong number from the table in the pressure of the test." }
      ]
    }
  },
  // Section: Data Displays
  {
    id: 30,
    title: "Box Plots & Histograms",
    type: "lesson",
    duration: "7 min",
    section: "Data Displays",
    hero: {
      tagline: "READING DISTRIBUTIONS",
      subtitle: "Five numbers, four quarters, grouped bins"
    },
    content: {
      blocks: [
        { type: "text", content: "A **box plot** is a five-number picture of a data set: the **minimum**, the **first quartile (Q1)**, the **median**, the **third quartile (Q3)**, and the **maximum**. The rectangle (the \"box\") stretches from Q1 to Q3, a vertical line inside it marks the median, and the two **whiskers** reach out to the smallest and largest values. That is the entire anatomy — five numbers and four segments." },
        { type: "text", content: "The single most important idea is that each of the four segments — the lower whisker, the two halves of the box, and the upper whisker — holds about **25% of the data** by count. This is true no matter how wide or narrow a segment is drawn. A wide segment does not mean more data points; it means that particular quarter of the data is **spread out** over a larger range of values. The box itself (Q1 to Q3) always holds the **middle 50%** of the data." },
        { type: "list", items: [
          "**Minimum** and **maximum**: the ends of the two whiskers",
          "**Q1** and **Q3**: the edges of the box — the 25th and 75th percentile cut points",
          "**Median**: the line inside the box (the 50th percentile)",
          "**IQR = Q3 − Q1**: the width of the box, a measure of spread for the middle 50%",
          "Each of the four segments holds roughly **25%** of the values"
        ]},
        { type: "example", title: "Example", content: "A box plot shows minimum $12$, $Q_1 = 20$, median $= 26$, $Q_3 = 34$, maximum $= 50$.\n\nIQR $= 34 - 20 = $ **14** — and the middle 50% of the data lies between **20 and 34**." },
        { type: "text", content: "A box plot is honest about what it hides. From a box plot alone you **can** read the five numbers, the range (max − min), the IQR, and the skew (whichever side is stretched is the tail). But you **cannot** read the **mean**, the **number of data points**, or any **individual value**. Two data sets can share the exact same box plot yet have completely different means. When a question asks you to compare the means of two box plots, \"cannot be determined\" is sometimes the genuinely correct answer." },
        { type: "text", content: "A **histogram** groups data into equal-width **bins** and draws a bar whose height is the **count (frequency)** of values in that bin. Because the raw values are bundled into bins, a histogram behaves like grouped data: you can find which bin contains the **median** by counting up the frequencies, and you can compare the overall shape of two distributions. But you **cannot** recover each individual value, so you can only **estimate** the mean — never compute it exactly." },
        { type: "list", items: [
          "**Box plot shows**: five-number summary, range, IQR, skew — never the mean or count",
          "**Histogram shows**: the shape and the count in each bin — the median bin, but only an estimate of the mean",
          "**Comparing two box plots**: line up the medians, boxes (IQR), and whisker reach",
          "**Grouped data rule**: exact individual values are lost, so the exact mean is unknowable"
        ]}
      ]
    }
  }
];
