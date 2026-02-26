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
        summary: 'The SAT loves asking which measure is "most appropriate" or how removing an outlier affects the statistics.',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Bluebook Phrasing',
            content: '"A data set contains the values 5, 7, 8, 9, 9, 10, and 54. Which measure of center best describes a typical value?" — The outlier (54) inflates the mean; the **median** is more representative.',
          },
          {
            type: 'tip',
            content: 'If the SAT asks what happens when an outlier is **removed**: the mean moves **toward** the remaining data, the median may shift slightly or stay the same, and the range **decreases**.',
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
        summary: 'Mode questions on the SAT are typically quick — often combined with mean/median for comparison.',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Typical Prompt',
            content: '"For the data set 3, 5, 5, 7, 8, 8, 8, 10, which of the following is true?" — Find all three measures: mean $= 6.75$, median $= 7.5$, mode $= 8$. The SAT checks if you can distinguish them.',
          },
          {
            type: 'tip',
            content: 'When a question asks "which measure has the greatest value?" in a right-skewed data set, the order is usually: mode < median < mean.',
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
            title: 'Bluebook Phrasing',
            content: '"The data set has a range of 24. If the maximum value is 31, what is the minimum value?" — Just rearrange: $\\text{min} = 31 - 24 = 7$.',
          },
          {
            type: 'tip',
            content: 'When the SAT asks "how does removing the outlier affect the range?" — the range **decreases** because the gap between max and min shrinks.',
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
        summary: 'Standard deviation questions are conceptual — compare two data sets or predict the effect of a change.',
        blocks: [
          {
            type: 'table',
            title: 'Comparing Standard Deviations',
            headers: ['Data Set', 'Values', 'Spread'],
            rows: [
              ['A', '$48, 49, 50, 51, 52$', 'Small SD — clustered near 50'],
              ['B', '$10, 30, 50, 70, 90$', 'Large SD — spread far apart'],
            ],
          },
          {
            type: 'tip',
            content: 'Quick rule: adding a value **equal to the mean** never increases the SD. Adding a value **far from the mean** increases it.',
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
        summary: 'SAT questions ask you to interpret confidence intervals and reason about sample size.',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Typical Prompt',
            content: '"A survey of 400 voters found that 55% support the proposal, with a margin of error of 5%. Which of the following is the best interpretation?" — The true proportion is likely between $50\\%$ and $60\\%$. This means the survey **cannot** definitively conclude majority support.',
          },
          {
            type: 'table',
            title: 'Sample Size & MOE',
            headers: ['Sample Size ($n$)', 'Approx. MOE'],
            rows: [
              ['$100$', '$\\frac{1}{\\sqrt{100}} = 10\\%$'],
              ['$400$', '$\\frac{1}{\\sqrt{400}} = 5\\%$'],
              ['$1{,}600$', '$\\frac{1}{\\sqrt{1600}} = 2.5\\%$'],
              ['$10{,}000$', '$\\frac{1}{\\sqrt{10000}} = 1\\%$'],
            ],
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
