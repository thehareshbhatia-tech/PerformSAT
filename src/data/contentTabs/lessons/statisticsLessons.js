export const statisticsLessonTabs = {

  1: {
    moduleId: 'statistics',
    title: 'What Is the Mean?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The mean (average) is the sum of all values divided by the count — the most common measure of center on the SAT.',
        blocks: [
          {
            type: 'formula',
            label: 'Mean (Average)',
            content: '$$\\bar{x} = \\frac{\\sum x_i}{n}$$',
            note: '$\\sum x_i$ = sum of all values, $n$ = number of values',
          },
          {
            type: 'text',
            content: 'The mean is the **balance point** of a data set. Imagine placing each data value as a weight on a number line — the mean is where the line would balance perfectly. It uses every value in the data set, which makes it sensitive to extreme values.',
          },
          {
            type: 'keyInsight',
            content: 'The SAT frequently rearranges the formula: if $\\bar{x} = \\frac{\\text{sum}}{n}$, then $\\text{sum} = \\bar{x} \\times n$. When you know the mean and the count, you can recover the total.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding the Mean',
            items: [
              'Add all data values together to get the **sum**',
              'Count how many values there are to get $n$',
              'Divide: $\\bar{x} = \\frac{\\text{sum}}{n}$',
            ],
          },
          {
            type: 'steps',
            title: 'Finding a Missing Value Given the Mean',
            items: [
              'Multiply the given mean by the total count: $\\text{sum} = \\bar{x} \\times n$',
              'Add the known values',
              'Subtract the known sum from the total sum to find the missing value',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A student\'s first four test scores are 82, 91, 76, and 88. What score does she need on the fifth test to have a mean of 85?',
            steps: [
              { label: 'Target sum', content: '$\\text{sum} = 85 \\times 5 = 425$' },
              { label: 'Current sum', content: '$82 + 91 + 76 + 88 = 337$' },
              { label: 'Missing score', content: '$425 - 337 = 88$' },
            ],
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          { type: 'callout', variant: 'info', title: '"Finding a Missing Value Given the Mean"', content: 'Recognition cue: "The average of $n$ numbers is $k$. If one number is removed/added…" First move: recover the sum using $\\text{sum} = \\bar{x} \\times n$. Then adjust for the added/removed value. This sum-recovery trick is the single most common mean question on the SAT.' },
          { type: 'trapCard', title: 'Using the Wrong Count', wrong: 'Five test scores average $82$. A sixth score is added. Student computes the new total as $82 \\times 6 = 492$.', correction: 'The original sum is $82 \\times 5 = 410$, not $82 \\times 6$. You must use the **original** count with the original mean, then add the new score to get the new sum.' },
          { type: 'tip', content: '**Decision rule:** Given mean + count → recover sum ($\\bar{x} \\times n$). Given sum + count → compute mean ($\\frac{\\text{sum}}{n}$). Given mean + sum → find count ($\\frac{\\text{sum}}{\\bar{x}}$). Identify the two knowns and solve for the third.' },
        ],
      },
    },
  },

  4: {
    moduleId: 'statistics',
    title: 'How Outliers Affect the Mean',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'An outlier is an extreme value far from the rest — it pulls the mean toward itself but barely moves the median.',
        blocks: [
          {
            type: 'text',
            content: 'An **outlier** is a data value much larger or smaller than the rest. Because the mean uses every value, one extreme number can shift it dramatically. The **median**, which depends only on position, is far more resistant.',
          },
          {
            type: 'comparison',
            title: 'Mean vs. Median Under Outliers',
            items: [
              { label: 'Data: 2, 3, 4, 5, 6', content: 'Mean: $\\frac{20}{5} = 4$, Median: $4$' },
              { label: 'Data: 2, 3, 4, 5, **100**', content: 'Mean: $\\frac{114}{5} = 22.8$, Median: $4$' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'Replacing one value with an outlier moved the mean from $4$ to $22.8$ — but the median stayed at $4$. When the SAT asks "which measure of center is most appropriate for skewed data?" the answer is almost always **median**.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"Which Measure Is Most Appropriate?"',
            content: 'Recognition cue: the words "most appropriate" + a data set with one extreme value. First move: spot the outlier. If one exists, the answer is **median** (resistant). If the data is roughly symmetric, the answer is **mean**.',
          },
          {
            type: 'trapCard',
            title: 'Assuming the Mean Is Always Best',
            wrong: 'Student picks "mean" for the set $\\{5, 7, 8, 9, 9, 10, 54\\}$.',
            correction: 'The outlier $54$ inflates the mean to $\\approx 14.6$, which describes no typical value. The median ($9$) is a better center. Choose the median when outliers are present.',
          },
          {
            type: 'tip',
            content: 'When an outlier is **removed**: the mean shifts toward the cluster, the median barely moves, the range shrinks. When a value **equal to the mean** is added: the mean stays the same, the median may shift by one position.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: '"Mean Is Always Best"',
            wrong: 'Assuming the mean is always the right measure of center.',
            correction: 'For **skewed data** or data with outliers, the median is usually more representative. The mean is best for roughly symmetric distributions.',
          },
        ],
      },
    },
  },

  8: {
    moduleId: 'statistics',
    title: 'What Is the Median?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The median is the middle value when data is sorted — resistant to outliers.',
        blocks: [
          {
            type: 'text',
            content: 'To find the median: **sort** the data from least to greatest, then locate the middle value. If there\'s an odd number of values, the median is the single middle value. If even, average the two middle values.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Odd count ($n$)', formula: '$\\text{Median position} = \\frac{n+1}{2}$', note: 'e.g. $n = 7$ → 4th value' },
              { label: 'Even count ($n$)', formula: '$\\text{Median} = \\frac{x_{n/2} + x_{n/2+1}}{2}$', note: 'Average the two middle values' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'The median only cares about **position**, not magnitude. Changing the largest value from 100 to 1,000,000 doesn\'t move the median at all — this is why it resists outliers.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the median of: 12, 7, 3, 14, 9.',
            steps: [
              { label: 'Sort', content: '$3, 7, 9, 12, 14$' },
              { label: 'Find middle', content: '$n = 5$ (odd), so median is the $\\frac{5+1}{2} = 3$rd value' },
              { label: 'Answer', content: 'Median $= 9$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Find the median of: 4, 8, 15, 16, 23, 42.',
            steps: [
              { label: 'Already sorted', content: '$4, 8, 15, 16, 23, 42$' },
              { label: 'Find two middles', content: '$n = 6$ (even), so average the 3rd and 4th values' },
              { label: 'Compute', content: '$\\text{Median} = \\frac{15 + 16}{2} = 15.5$' },
            ],
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          { type: 'callout', variant: 'info', title: '"What Is the Median of the Data Set?"', content: 'Recognition cue: a list of numbers (sometimes in a table or bar chart). First move: sort from least to greatest, then locate the middle. Odd count → single middle value. Even count → average the two middle values.' },
          { type: 'trapCard', title: 'Forgot to Sort', wrong: 'Data: $12, 7, 3, 14, 9$. Student picks the middle value of the unsorted list: $3$.', correction: 'You must **sort first**: $3, 7, 9, 12, 14$. The median is $9$ (the 3rd value), not $3$.' },
          { type: 'tip', content: 'For even-count data sets, the median is the average of positions $\\frac{n}{2}$ and $\\frac{n}{2} + 1$. For odd-count: position $\\frac{n+1}{2}$. On histogram/bar chart questions, add up frequencies to find $n$, then count to the median position.' },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Forgot to Sort',
            wrong: 'Taking the middle value of the unsorted list $12, 7, 3, 14, 9$ → "the middle is 3."',
            correction: 'You **must sort first**: $3, 7, 9, 12, 14$ → median is $9$, not $3$.',
          },
        ],
      },
    },
  },

  9: {
    moduleId: 'statistics',
    title: 'Finding Median from a Frequency Table',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'When data is given as a frequency table, use cumulative frequency to locate the median position.',
        blocks: [
          {
            type: 'text',
            content: 'A **frequency table** lists each value and how many times it appears. Instead of writing out every data point, you track running totals — **cumulative frequency** — to find the median\'s position.',
          },
          {
            type: 'table',
            headers: ['Books Read', 'Frequency', 'Cumulative Frequency'],
            rows: [
              ['$0$', '$3$', '$3$'],
              ['$1$', '$5$', '$8$'],
              ['$2$', '$8$', '$16$'],
              ['$3$', '$4$', '$20$'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'Total data points $n = 20$ (even). Median positions: $\\frac{20}{2} = 10$ and $11$. Scan the cumulative frequency column — both positions fall in the "2 books" row (cumulative 9–16), so the median is $2$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Frequency Table → Median',
            items: [
              'Add a **cumulative frequency** column: running total of frequencies',
              'Find total $n$ (sum of all frequencies)',
              'Compute the median position: $\\frac{n+1}{2}$ for odd $n$, or positions $\\frac{n}{2}$ and $\\frac{n}{2}+1$ for even $n$',
              'Scan the cumulative frequency column to find which value contains that position',
              'If $n$ is even, average the values at the two middle positions',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Test scores: 70 (2 students), 80 (6 students), 90 (5 students), 100 (3 students). Find the median.',
            steps: [
              { label: 'Build table', content: 'Cumulative: $2, 8, 13, 16$ → total $n = 16$' },
              { label: 'Median positions', content: 'Even $n$: positions $8$ and $9$' },
              { label: 'Locate', content: 'Position 8 → score 80 (cumulative reaches 8). Position 9 → score 90 (cumulative reaches 13).' },
              { label: 'Answer', content: 'Median $= \\frac{80 + 90}{2} = 85$' },
            ],
          },
        ],
      },
      speedStrategy: {
        title: 'Speed & Strategy',
        blocks: [
          {
            type: 'strategyCard',
            title: 'Running-Total Scan',
            icon: '⚡',
            timing: '~20s',
            content: 'Don\'t list every data point — just add frequencies as you go ($2, 8, 13, 16$) and stop when you pass the median position. The value you\'re on is the median.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          { type: 'callout', variant: 'info', title: 'Frequency Table → Median', content: 'Recognition cue: a table with values and frequencies (or a bar chart). First move: add a cumulative frequency column, find total $n$, compute median position(s), scan cumulative column to find which value contains that position.' },
          { type: 'trapCard', title: 'Median of the Frequencies Instead of the Values', wrong: 'Frequencies are $3, 5, 8, 4$. Student finds median of $3, 5, 8, 4$ → $\\frac{5+8}{2} = 6.5$.', correction: 'The frequencies tell you how many data points have each value. The median is a **data value**, not a frequency. Use cumulative frequency to locate the correct data value at the median position.' },
          { type: 'tip', content: 'Running-total scan: add frequencies left to right ($3, 8, 16, 20$). Stop as soon as the cumulative total passes the median position. The value you are on at that moment is the median.' },
        ],
      },
    },
  },

  16: {
    moduleId: 'statistics',
    title: 'What Is the Mode?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The mode is the most frequently occurring value in a data set — it can be used with any type of data.',
        blocks: [
          {
            type: 'text',
            content: 'The **mode** is the value that appears most often. Unlike the mean and median, the mode works with **categorical data** (e.g., favorite color) as well as numerical data.',
          },
          {
            type: 'iconRow',
            items: [
              { icon: '1️⃣', label: 'Unimodal', description: 'One mode: {2, 3, 3, 5, 7}' },
              { icon: '2️⃣', label: 'Bimodal', description: 'Two modes: {1, 1, 4, 6, 6}' },
              { icon: '🚫', label: 'No Mode', description: 'All equal freq: {1, 2, 3, 4}' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'The mode is the only measure of center that can appear **more than once** and that works for **non-numerical** data. "What is the most popular lunch option?" is a mode question.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"Which Statement Is True?" — Compare All Three',
            content: 'Recognition cue: a small data set followed by four statements comparing mean, median, and mode. First move: compute all three quickly. Mean = sum/count, median = middle after sorting, mode = most frequent. Then match to the correct statement.',
          },
          {
            type: 'trapCard',
            title: 'Skew Direction vs. Measure Order',
            wrong: 'Student sees a right-skewed histogram and says mode > mean.',
            correction: 'Right-skewed (tail stretches right): mode < median < mean. Left-skewed: mean < median < mode. The mean is pulled toward the tail.',
          },
          {
            type: 'tip',
            content: 'The mode is the only measure that can be used on **categorical** data ("most popular color"). If the answer choices involve non-numerical data, the answer is mode — mean and median require numbers.',
          },
        ],
      },
    },
  },

  17: {
    moduleId: 'statistics',
    title: 'What Is the Range?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The range is the simplest measure of spread — just the difference between the maximum and minimum.',
        blocks: [
          {
            type: 'formula',
            label: 'Range',
            content: '$$\\text{Range} = \\text{max} - \\text{min}$$',
          },
          {
            type: 'text',
            content: 'The range tells you the **total span** of the data. It\'s easy to compute but very sensitive to outliers — a single extreme value can inflate the range dramatically.',
          },
          {
            type: 'comparison',
            title: 'Range vs. Other Spread Measures',
            items: [
              { label: 'Range', content: 'Uses: Only max and min. Sensitivity: Very sensitive' },
              { label: 'IQR', content: 'Uses: Middle 50% of data. Sensitivity: Resistant' },
              { label: 'Standard Deviation', content: 'Uses: All values. Sensitivity: Sensitive' },
            ],
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Reverse-Solve the Range Formula',
            content: '"The range is $24$ and the maximum is $31$. What is the minimum?" — Rearrange: $\\text{min} = \\text{max} - \\text{range} = 31 - 24 = 7$. This is pure formula manipulation — fast and free points.',
          },
          {
            type: 'trapCard',
            title: 'Range Is a Single Number',
            wrong: 'Student writes "the range is from $7$ to $31$" as their answer.',
            correction: 'The range is the **difference** $31 - 7 = 24$, not the interval. On the SAT, the range is always a single number.',
          },
          {
            type: 'tip',
            content: 'When asked "how does removing a value affect the range?" — only the max or min matter. Removing the max → new range = (second largest) − min. Removing any interior value → range is unchanged.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Range ≠ List of Values',
            wrong: '"The range is 7 to 31" — describing the interval, not the range.',
            correction: 'The range is a **single number**: $31 - 7 = 24$. It\'s the difference, not the interval.',
          },
        ],
      },
    },
  },

  20: {
    moduleId: 'statistics',
    title: 'What Is Standard Deviation?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Standard deviation measures how spread out values are around the mean — larger values mean more spread.',
        blocks: [
          {
            type: 'text',
            content: '**Standard deviation** ($\\sigma$ or $s$) quantifies the typical distance of data points from the mean. A small standard deviation means data clusters tightly around the mean; a large one means data is scattered.',
          },
          {
            type: 'formula',
            label: 'Standard Deviation',
            content: '$$s = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n-1}}$$',
            note: 'You will NOT need to compute this by hand on the SAT.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'What You DO Need to Know',
            content: 'The SAT never asks you to calculate standard deviation. Instead, it tests your **conceptual understanding**: which data set has a larger or smaller spread, and what happens to the SD when values are added, removed, or transformed.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"Which Data Set Has a Larger SD?"',
            content: 'Recognition cue: two data sets side by side, question asks about spread. First move: **don\'t compute** — just eyeball which data clusters more tightly. The set with values closer to its mean has a smaller SD.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Range with SD',
            wrong: 'Student sees sets $\\{48,49,50,51,52\\}$ and $\\{10,30,50,70,90\\}$, both centered at $50$, and says they have the same SD because the means are equal.',
            correction: 'Equal means ≠ equal spread. The first set\'s values are within $2$ of the mean; the second\'s are within $40$. The second has a much larger SD.',
          },
          {
            type: 'tip',
            content: 'Three rules for the SAT: (1) Adding a constant to every value does **not** change SD. (2) Multiplying every value by $k$ multiplies SD by $|k|$. (3) Adding a value equal to the mean does not increase SD. You will never compute SD by hand.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'iconRow',
            items: [
              { icon: '➕', label: 'Add constant to all', description: 'SD stays the SAME' },
              { icon: '✖️', label: 'Multiply all by $k$', description: 'SD multiplied by $|k|$' },
              { icon: '🎯', label: 'All values identical', description: 'SD = 0' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'Shifting every value by the same amount (adding $+5$ to each) moves the mean but does **not** change the spread. Scaling every value (multiplying by $2$) scales both the mean **and** the standard deviation.',
          },
        ],
      },
    },
  },

  23: {
    moduleId: 'statistics',
    title: 'What Is Margin of Error?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Margin of error tells you how far a sample statistic might be from the true population value — it shrinks as sample size grows.',
        blocks: [
          {
            type: 'text',
            content: 'When you survey a sample instead of the whole population, your result has uncertainty. The **margin of error** (MOE) gives a range: the true value is likely within $\\pm \\text{MOE}$ of your sample statistic.',
          },
          {
            type: 'formula',
            label: 'Quick Estimate (95% confidence)',
            content: '$$\\text{MOE} \\approx \\frac{1}{\\sqrt{n}}$$',
            note: '$n$ = sample size. This estimates the margin of error for proportions near $50\\%$.',
          },
          {
            type: 'keyInsight',
            content: 'The key relationship: **larger sample → smaller MOE**. To cut the margin of error in half, you must quadruple the sample size (because of the $\\sqrt{n}$ in the denominator).',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"Best Interpretation" = Choose the Most Cautious',
            content: 'Recognition cue: a survey result with a stated margin of error followed by four interpretation choices. First move: compute the confidence interval ($\\text{result} \\pm \\text{MOE}$) and pick the answer that stays within that interval. The correct answer is **always the most cautious claim**.',
          },
          {
            type: 'trapCard',
            title: 'Overgeneralizing Beyond the Sample',
            wrong: '"55% of all Americans support the proposal" based on a survey of Ohio voters.',
            correction: 'Survey results only generalize to the **sampled population**. A poll of Ohio voters supports claims about Ohio voters, not all Americans. The SAT correct answer is always the narrowest valid claim.',
          },
          {
            type: 'tip',
            content: 'To halve the MOE you must **quadruple** $n$ (because $\\text{MOE} \\propto \\frac{1}{\\sqrt{n}}$). If the question asks "how should the researcher reduce the margin of error?" the answer is increase sample size — never "ask different people" or "change the question."',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Certainty Claim',
            wrong: '"55% of all voters support the proposal" — stating the sample result as population fact.',
            correction: 'With MOE of $5\\%$, you can only say the true proportion is **likely between 50% and 60%**. Never claim the exact sample percentage is the population percentage.',
          },
          {
            type: 'trapCard',
            title: 'Doubling $n$ Halves MOE',
            wrong: 'Thinking that doubling the sample size from 400 to 800 cuts MOE in half.',
            correction: 'MOE depends on $\\frac{1}{\\sqrt{n}}$. Doubling $n$ only reduces MOE by a factor of $\\sqrt{2} \\approx 1.41$. To halve MOE, you must **quadruple** $n$.',
          },
        ],
      },
    },
  },

};
