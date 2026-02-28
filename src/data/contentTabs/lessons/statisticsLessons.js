export const statisticsLessonTabs = {

  // ─── SECTION: MEAN ───────────────────────────────────────────────────────────

  1: {
    moduleId: 'statistics',
    title: 'What Is the Mean?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The mean (average) is the sum of all values divided by the count -- the most tested measure of center on the SAT.',
        blocks: [
          {
            type: 'formula',
            label: 'Mean (Average)',
            content: '$$\\bar{x} = \\frac{\\sum x_i}{n}$$',
            note: '$\\sum x_i$ = sum of all values, $n$ = number of values',
          },
          {
            type: 'text',
            content: 'The mean is the **balance point** of a data set. Imagine placing each data value as a weight on a number line -- the mean is where the line would balance perfectly. It uses every value in the data set, which makes it sensitive to extreme values.',
          },
          {
            type: 'keyInsight',
            content: 'The SAT frequently rearranges the formula: if $\\bar{x} = \\frac{\\text{sum}}{n}$, then $\\text{sum} = \\bar{x} \\times n$. When you know the mean and the count, you can recover the total.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'Three Forms of the Mean Formula',
            content: '$\\bar{x} = \\frac{\\text{sum}}{n}$ ... $\\text{sum} = \\bar{x} \\times n$ ... $n = \\frac{\\text{sum}}{\\bar{x}}$. Any two of the three quantities determine the third.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Finding a Missing Value Given the Mean',
            content: 'Recognition cue: "The average of $n$ numbers is $k$. If one number is removed/added..." First move: recover the sum using $\\text{sum} = \\bar{x} \\times n$, then adjust for the added or removed value.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Adding/Removing a Value',
            content: 'Recognition cue: "A new data point is added to the set. What is the new mean?" First move: compute the original sum ($\\bar{x} \\times n$), add the new value, divide by $n + 1$.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Mean of Algebraic Expressions',
            content: 'Recognition cue: "The mean of $2x, 3x + 1, x - 4$ is $10$." First move: add the expressions, divide by the count, set equal to the given mean, and solve for the variable.',
          },
          {
            type: 'trapCard',
            title: 'Using the Wrong Count',
            wrong: 'Five test scores average $82$. A sixth score is added. Student computes the new total as $82 \\times 6 = 492$.',
            correction: 'The original sum is $82 \\times 5 = 410$, not $82 \\times 6$. Use the **original** count with the original mean, then add the new score to get the new sum.',
          },
          {
            type: 'tip',
            content: '**Decision rule:** Given mean + count -> recover sum ($\\bar{x} \\times n$). Given sum + count -> compute mean ($\\frac{\\text{sum}}{n}$). Given mean + sum -> find count ($\\frac{\\text{sum}}{\\bar{x}}$). Identify the two knowns and solve for the third.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Computing the Mean',
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
          {
            type: 'steps',
            title: 'What Happens When a Value Is Added',
            items: [
              'Compute the original sum: $\\text{sum}_{\\text{old}} = \\bar{x}_{\\text{old}} \\times n$',
              'Add the new value: $\\text{sum}_{\\text{new}} = \\text{sum}_{\\text{old}} + x_{\\text{new}}$',
              'Divide by the new count: $\\bar{x}_{\\text{new}} = \\frac{\\text{sum}_{\\text{new}}}{n + 1}$',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Mismatched Count and Mean',
            wrong: 'Using $\\bar{x} \\times (n+1)$ to recover the **original** sum before the new value was added.',
            correction: 'Always pair the **original** mean with the **original** count. The new count applies only after the new value is included.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Update the Count',
            wrong: 'After adding a sixth score, dividing the new sum by $5$ instead of $6$.',
            correction: 'When a value is added, $n$ increases by $1$. When a value is removed, $n$ decreases by $1$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
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
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'The mean of $2x + 1$, $3x - 2$, and $x + 5$ is $12$. Find $x$.',
            steps: [
              { label: 'Sum the expressions', content: '$(2x + 1) + (3x - 2) + (x + 5) = 6x + 4$' },
              { label: 'Set up mean equation', content: '$\\frac{6x + 4}{3} = 12$' },
              { label: 'Solve', content: '$6x + 4 = 36 \\implies 6x = 32 \\implies x = \\frac{16}{3}$' },
            ],
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'statistics',
    title: 'Simple Calculating Mean Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Computing the mean is straightforward: add all values and divide by the count.',
        blocks: [
          {
            type: 'formula',
            label: 'Mean Formula',
            content: '$$\\bar{x} = \\frac{\\sum x_i}{n}$$',
          },
          {
            type: 'text',
            content: 'When a problem gives you a list of numbers and asks for the average, the computation has exactly two steps: find the sum, then divide by how many values there are. Accuracy depends on careful arithmetic -- double-check your addition.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Sum-Recovery Shortcut',
            content: 'If a problem gives you the mean and the count, multiply to recover the sum: $\\text{sum} = \\bar{x} \\times n$. This is the reverse of computing the mean.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Direct Mean Computation',
            content: 'Recognition cue: a small list of numbers with the question "What is the mean?" First move: add the values, divide by the count.',
          },
          {
            type: 'trapCard',
            title: 'Arithmetic Slip',
            wrong: 'For $14, 18, 22, 10, 16$: student gets a sum of $80$ (correct) but divides by $4$ instead of $5$.',
            correction: 'Count the values carefully. There are $5$ values, so $\\bar{x} = \\frac{80}{5} = 16$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Step-by-Step Mean Calculation',
            items: [
              'List all data values',
              'Add them: $14 + 18 + 22 + 10 + 16 = 80$',
              'Count: $n = 5$',
              'Divide: $\\bar{x} = \\frac{80}{5} = 16$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the mean of: $14, 18, 22, 10, 16$.',
            steps: [
              { label: 'Sum', content: '$14 + 18 + 22 + 10 + 16 = 80$' },
              { label: 'Count', content: '$n = 5$' },
              { label: 'Divide', content: '$\\bar{x} = \\frac{80}{5} = 16$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'Find the mean of $7, 12, 5, 20, 16$.',
            answer: '$\\text{Sum} = 7 + 12 + 5 + 20 + 16 = 60$. $\\bar{x} = \\frac{60}{5} = 12$.',
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'statistics',
    title: 'Simple Calculating Mean Example (DESMOS Method)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'DESMOS can compute the mean of a data set instantly using the mean() function on a list.',
        blocks: [
          {
            type: 'text',
            content: 'The DESMOS graphing calculator (available during the SAT) has a built-in statistics function. Enter your data as a list and call `mean()` to get the average without manual arithmetic.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'DESMOS Syntax',
            content: 'Type: $\\text{mean}([14, 18, 22, 10, 16])$ and DESMOS returns $16$. The square brackets define a list.',
          },
          {
            type: 'keyInsight',
            content: 'Using DESMOS for the mean eliminates arithmetic errors entirely. On timed sections, this saves 20-30 seconds per computation.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'When to Use DESMOS for Mean',
            content: 'Recognition cue: any problem that requires computing the mean of a list of numbers. First move: type the list into DESMOS and call mean(). Reserve manual calculation for problems involving variables or missing values.',
          },
          {
            type: 'tip',
            content: 'DESMOS also supports `total()` for summing a list and `length()` for counting elements. If you need intermediate values (e.g., the sum), use `total()` instead of `mean()`.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Using DESMOS to Find the Mean',
            items: [
              'Open the DESMOS calculator on the test interface',
              'Type: $L = [14, 18, 22, 10, 16]$ to store the list',
              'Type: $\\text{mean}(L)$ to compute the mean',
              'Read the result: $16$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Use DESMOS to find the mean of $23, 31, 17, 29, 25$.',
            steps: [
              { label: 'Enter list', content: 'Type $[23, 31, 17, 29, 25]$ into DESMOS' },
              { label: 'Apply function', content: 'Type $\\text{mean}([23, 31, 17, 29, 25])$' },
              { label: 'Read result', content: 'DESMOS returns $25$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'What DESMOS command computes the mean of $4, 8, 15, 16, 23, 42$?',
            answer: '$\\text{mean}([4, 8, 15, 16, 23, 42])$ returns $18$.',
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
        summary: 'An outlier is an extreme value far from the rest -- it pulls the mean toward itself but barely moves the median.',
        blocks: [
          {
            type: 'text',
            content: 'An **outlier** is a data value much larger or smaller than the rest. Because the mean uses every value, one extreme number can shift it dramatically. The **median**, which depends only on position, is far more resistant.',
          },
          {
            type: 'comparison',
            title: 'Mean vs. Median Under Outliers',
            items: [
              { label: 'Data: 2, 3, 4, 5, 6', content: 'Mean = $\\frac{20}{5} = 4$, Median = $4$' },
              { label: 'Data: 2, 3, 4, 5, 100', content: 'Mean = $\\frac{114}{5} = 22.8$, Median = $4$' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'Replacing one value with an outlier moved the mean from $4$ to $22.8$ -- but the median stayed at $4$. When the SAT asks "which measure of center is most appropriate for skewed data?" the answer is almost always **median**.',
          },
          {
            type: 'text',
            content: 'A data set is **skewed right** when the tail stretches toward large values (outlier on the high end). In this case, mean > median. A data set is **skewed left** when the tail stretches toward small values, making mean < median.',
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
            content: 'Recognition cue: the words "most appropriate" paired with a data set containing one extreme value. First move: spot the outlier. If one exists, the answer is **median** (resistant). If the data is roughly symmetric, the answer is **mean**.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: '"How Does Removing the Outlier Affect..."',
            content: 'Recognition cue: a question about what happens to a statistic when an extreme value is removed. First move: removing a high outlier decreases the mean and shrinks the range. The median barely changes.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: '"Mean vs. Median" Ordering',
            content: 'Right-skewed: mean > median. Left-skewed: mean < median. Symmetric: mean $\\approx$ median. The mean is always pulled toward the tail.',
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
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Determining the Effect of an Outlier',
            items: [
              'Identify the outlier (a value far from the cluster)',
              'Compute the mean and median **with** the outlier',
              'Compute the mean and median **without** the outlier',
              'Compare: the mean shifts significantly, the median barely changes',
            ],
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
          {
            type: 'trapCard',
            title: 'Confusing Skew Direction',
            wrong: 'Seeing a right-skewed histogram and concluding mean < median.',
            correction: 'Right-skewed (tail goes right): mean > median. The mean is pulled toward the long tail.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Salaries at a small company (in thousands): $35, 40, 42, 38, 45, 200$. Which measure of center better represents a typical salary?',
            steps: [
              { label: 'Mean', content: '$\\frac{35 + 40 + 42 + 38 + 45 + 200}{6} = \\frac{400}{6} \\approx 66.7$' },
              { label: 'Median', content: 'Sorted: $35, 38, 40, 42, 45, 200$. Median $= \\frac{40 + 42}{2} = 41$' },
              { label: 'Answer', content: 'The median ($41$K) better represents a typical salary. The outlier $200$K pulls the mean far above the cluster.' },
            ],
          },
        ],
      },
    },
  },

  5: {
    moduleId: 'statistics',
    title: 'Outlier Affecting Mean Example #1',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Removing a high outlier decreases the mean; removing a low outlier increases it. The median resists both changes.',
        blocks: [
          {
            type: 'text',
            content: 'When a single extreme value is removed from a data set, the mean moves toward the remaining cluster. The direction depends on whether the outlier is above or below the cluster.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Remove high outlier', formula: '$\\bar{x}_{\\text{new}} < \\bar{x}_{\\text{old}}$', note: 'Mean decreases' },
              { label: 'Remove low outlier', formula: '$\\bar{x}_{\\text{new}} > \\bar{x}_{\\text{old}}$', note: 'Mean increases' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'The **magnitude of the shift** depends on how far the outlier is from the mean and how many data points remain. Larger outlier distance or fewer remaining points = bigger shift.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"What Happens to the Mean When the Outlier Is Removed?"',
            content: 'Recognition cue: a data set with one extreme value and a question about the effect of removing it. First move: note whether the outlier is above or below the cluster. If above, the mean decreases. If below, the mean increases.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Change the Count',
            wrong: 'After removing one value from a 10-element set, student still divides by 10.',
            correction: 'When you remove a value, the new count is $n - 1$. New mean $= \\frac{\\text{old sum} - \\text{outlier}}{n - 1}$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Computing the New Mean After Removing a Value',
            items: [
              'Find the original sum: $\\text{sum} = \\bar{x} \\times n$',
              'Subtract the removed value: $\\text{new sum} = \\text{sum} - x_{\\text{removed}}$',
              'Divide by the new count: $\\bar{x}_{\\text{new}} = \\frac{\\text{new sum}}{n - 1}$',
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
            problem: 'A data set of 8 values has a mean of $30$. If the value $78$ is removed, what is the new mean?',
            steps: [
              { label: 'Original sum', content: '$30 \\times 8 = 240$' },
              { label: 'New sum', content: '$240 - 78 = 162$' },
              { label: 'New mean', content: '$\\frac{162}{7} \\approx 23.1$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'A set of 6 values has mean $25$. If the value $55$ is removed, what is the new mean?',
            answer: 'Original sum $= 25 \\times 6 = 150$. New sum $= 150 - 55 = 95$. New mean $= \\frac{95}{5} = 19$.',
          },
        ],
      },
    },
  },

  6: {
    moduleId: 'statistics',
    title: 'Outlier Affecting Mean Example #2',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Adding an outlier to an existing data set changes the mean by a predictable amount that depends on how far the new value is from the current mean.',
        blocks: [
          {
            type: 'text',
            content: 'When a new value is added to a data set, the mean shifts toward that value. If the new value equals the current mean, the mean stays the same. If the new value is above the mean, the mean increases; if below, the mean decreases.',
          },
          {
            type: 'formula',
            label: 'New Mean After Adding a Value',
            content: '$$\\bar{x}_{\\text{new}} = \\frac{\\bar{x}_{\\text{old}} \\times n + x_{\\text{new}}}{n + 1}$$',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"A New Value Is Added to the Data Set"',
            content: 'Recognition cue: given the current mean and count, plus a new value. First move: recover the original sum ($\\bar{x} \\times n$), add the new value, divide by $n + 1$.',
          },
          {
            type: 'trapCard',
            title: 'Averaging the Old Mean with the New Value',
            wrong: 'Mean is $40$, new value is $60$. Student computes $\\frac{40 + 60}{2} = 50$.',
            correction: 'You cannot average the mean with a single value unless $n = 1$. You must use the full formula: recover the sum, add the new value, divide by $n + 1$.',
          },
          {
            type: 'tip',
            content: 'Quick check: if the new value equals the old mean, the mean is unchanged. If the new value is above the old mean, the new mean increases (but not all the way to the new value).',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Computing the New Mean After Adding a Value',
            items: [
              'Recover the original sum: $\\text{sum} = \\bar{x} \\times n$',
              'Add the new value: $\\text{new sum} = \\text{sum} + x_{\\text{new}}$',
              'Divide by $n + 1$: $\\bar{x}_{\\text{new}} = \\frac{\\text{new sum}}{n + 1}$',
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
            problem: 'A class of 20 students has a mean test score of $72$. A new student joins and scores $97$. What is the new class mean?',
            steps: [
              { label: 'Original sum', content: '$72 \\times 20 = 1440$' },
              { label: 'New sum', content: '$1440 + 97 = 1537$' },
              { label: 'New mean', content: '$\\frac{1537}{21} \\approx 73.2$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'A set of 10 values has mean $50$. A value of $50$ is added. What is the new mean?',
            answer: 'Original sum $= 50 \\times 10 = 500$. New sum $= 500 + 50 = 550$. New mean $= \\frac{550}{11} = 50$. Adding a value equal to the mean leaves the mean unchanged.',
          },
        ],
      },
    },
  },

  7: {
    moduleId: 'statistics',
    title: 'Finding Mean of a Combined Data Set',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'To find the mean of two combined groups, use the weighted average: total sum divided by total count.',
        blocks: [
          {
            type: 'formula',
            label: 'Combined Mean (Weighted Average)',
            content: '$$\\bar{x}_{\\text{combined}} = \\frac{\\bar{x}_1 \\cdot n_1 + \\bar{x}_2 \\cdot n_2}{n_1 + n_2}$$',
            note: '$\\bar{x}_1, n_1$ = mean and count of group 1; $\\bar{x}_2, n_2$ = mean and count of group 2',
          },
          {
            type: 'keyInsight',
            content: 'The combined mean is **not** the average of the two group means (unless the groups are the same size). The larger group pulls the combined mean closer to its own mean.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Weighted vs. Simple Average',
            content: 'If group A ($n = 30$, mean $= 80$) and group B ($n = 10$, mean $= 60$), the combined mean is $\\frac{30 \\cdot 80 + 10 \\cdot 60}{40} = \\frac{3000}{40} = 75$, not $\\frac{80 + 60}{2} = 70$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Two Groups Combined',
            content: 'Recognition cue: "Class A has $n_1$ students with mean $\\bar{x}_1$; Class B has $n_2$ students with mean $\\bar{x}_2$. What is the overall mean?" First move: compute each group\'s sum, add them, divide by total count.',
          },
          {
            type: 'trapCard',
            title: 'Averaging the Two Means',
            wrong: 'Group A mean $= 80$, Group B mean $= 60$. Student computes $\\frac{80 + 60}{2} = 70$.',
            correction: 'This is only correct if both groups have the same size. Use the weighted formula: $\\frac{\\bar{x}_1 \\cdot n_1 + \\bar{x}_2 \\cdot n_2}{n_1 + n_2}$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding the Combined Mean',
            items: [
              'Compute sum of group 1: $S_1 = \\bar{x}_1 \\times n_1$',
              'Compute sum of group 2: $S_2 = \\bar{x}_2 \\times n_2$',
              'Total sum: $S_1 + S_2$',
              'Total count: $n_1 + n_2$',
              'Combined mean: $\\frac{S_1 + S_2}{n_1 + n_2}$',
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
            problem: 'Section 1 has 15 students with a mean score of $84$. Section 2 has 25 students with a mean score of $76$. What is the combined mean?',
            steps: [
              { label: 'Sum 1', content: '$84 \\times 15 = 1260$' },
              { label: 'Sum 2', content: '$76 \\times 25 = 1900$' },
              { label: 'Combined mean', content: '$\\frac{1260 + 1900}{15 + 25} = \\frac{3160}{40} = 79$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'Group A: 10 values, mean $= 90$. Group B: 40 values, mean $= 70$. What is the combined mean?',
            answer: '$\\frac{90 \\times 10 + 70 \\times 40}{10 + 40} = \\frac{900 + 2800}{50} = \\frac{3700}{50} = 74$.',
          },
        ],
      },
    },
  },

  // ─── SECTION: MEDIAN ─────────────────────────────────────────────────────────

  8: {
    moduleId: 'statistics',
    title: 'What Is the Median?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The median is the middle value when data is sorted -- resistant to outliers and the preferred center for skewed distributions.',
        blocks: [
          {
            type: 'text',
            content: 'To find the median: **sort** the data from least to greatest, then locate the middle value. If there is an odd number of values, the median is the single middle value. If even, average the two middle values.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Odd count ($n$)', formula: '$\\text{Median position} = \\frac{n+1}{2}$', note: 'e.g. $n = 7$ -> 4th value' },
              { label: 'Even count ($n$)', formula: '$\\text{Median} = \\frac{x_{n/2} + x_{n/2+1}}{2}$', note: 'Average the two middle values' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'The median only cares about **position**, not magnitude. Changing the largest value from $100$ to $1{,}000{,}000$ does not move the median -- this is why it resists outliers.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"What Is the Median of the Data Set?"',
            content: 'Recognition cue: a list of numbers (sometimes in a table or bar chart). First move: sort from least to greatest, then locate the middle. Odd count -> single middle value. Even count -> average the two middle values.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: '"How Does Adding/Removing a Value Affect the Median?"',
            content: 'Recognition cue: a data set with a specified change. First move: determine the new sorted order and new $n$, then recompute the median position. The median shifts by at most one position.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: '"Mean vs. Median" Comparison',
            content: 'Symmetric data: mean $\\approx$ median. Skewed right: mean > median. Skewed left: mean < median. If a histogram has a long tail, the mean is pulled toward the tail.',
          },
          {
            type: 'trapCard',
            title: 'Forgot to Sort',
            wrong: 'Data: $12, 7, 3, 14, 9$. Student picks the middle of the unsorted list: $3$.',
            correction: 'Sort first: $3, 7, 9, 12, 14$. The median is $9$ (the 3rd value), not $3$.',
          },
          {
            type: 'tip',
            content: 'For even-count data sets, the median is the average of positions $\\frac{n}{2}$ and $\\frac{n}{2} + 1$. On histogram/bar chart questions, add up frequencies to find $n$, then count to the median position.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding the Median from a List',
            items: [
              'Sort the data from least to greatest',
              'Count the number of values $n$',
              'If $n$ is odd: median is the value at position $\\frac{n+1}{2}$',
              'If $n$ is even: median is $\\frac{x_{n/2} + x_{n/2+1}}{2}$',
            ],
          },
          {
            type: 'steps',
            title: 'Finding the Median from a Histogram',
            items: [
              'Add up all bar heights to get total $n$',
              'Find the median position ($\\frac{n+1}{2}$ for odd, or the two middle positions for even)',
              'Count from left to right through the bars until you reach the median position',
              'The bar you land on contains the median value',
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
            wrong: 'Taking the middle value of the unsorted list $12, 7, 3, 14, 9$ -> "the middle is 3."',
            correction: 'Sort first: $3, 7, 9, 12, 14$ -> median is $9$, not $3$.',
          },
          {
            type: 'trapCard',
            title: 'Wrong Position for Even Count',
            wrong: 'For $n = 8$, student takes only the 4th value as the median.',
            correction: 'For even $n$, average the 4th and 5th values: $\\frac{x_4 + x_5}{2}$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the median of: $12, 7, 3, 14, 9$.',
            steps: [
              { label: 'Sort', content: '$3, 7, 9, 12, 14$' },
              { label: 'Find middle', content: '$n = 5$ (odd), median is at position $\\frac{5+1}{2} = 3$' },
              { label: 'Answer', content: 'Median $= 9$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Find the median of: $4, 8, 15, 16, 23, 42$.',
            steps: [
              { label: 'Already sorted', content: '$4, 8, 15, 16, 23, 42$' },
              { label: 'Find two middles', content: '$n = 6$ (even), average the 3rd and 4th values' },
              { label: 'Compute', content: '$\\text{Median} = \\frac{15 + 16}{2} = 15.5$' },
            ],
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
        summary: 'When data is given as a frequency table, use cumulative frequency to locate the median position without listing every data point.',
        blocks: [
          {
            type: 'text',
            content: 'A **frequency table** lists each value and how many times it appears. Instead of writing out every data point, you track running totals -- **cumulative frequency** -- to find the median\'s position.',
          },
          {
            type: 'table',
            headers: ['Value', 'Frequency', 'Cumulative Frequency'],
            rows: [
              ['$0$', '$3$', '$3$'],
              ['$1$', '$5$', '$8$'],
              ['$2$', '$8$', '$16$'],
              ['$3$', '$4$', '$20$'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'Total data points $n = 20$ (even). Median positions: 10th and 11th. Scanning the cumulative frequency column -- both positions fall in the "$2$" row (cumulative 9-16), so the median is $2$.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'Cumulative Frequency Rule',
            content: 'The median falls in the row where the cumulative frequency **first equals or exceeds** the median position.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Frequency Table -> Median',
            content: 'Recognition cue: a table with values and frequencies (or a bar chart). First move: add a cumulative frequency column, find total $n$, compute median position(s), scan the cumulative column.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Bar Chart -> Median',
            content: 'Recognition cue: a bar chart with category labels and bar heights. First move: treat bar heights as frequencies, add them to get $n$, then count from the left bar to locate the median position.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: '"If One More Data Point Is Added..."',
            content: 'Recognition cue: a frequency table plus a new value. First move: increase the frequency of the appropriate row by $1$, update cumulative frequencies, and recompute the median position with $n + 1$.',
          },
          {
            type: 'trapCard',
            title: 'Median of the Frequencies Instead of the Values',
            wrong: 'Frequencies are $3, 5, 8, 4$. Student finds median of $3, 5, 8, 4$ -> $\\frac{5 + 8}{2} = 6.5$.',
            correction: 'The frequencies tell you how many data points have each value. The median is a **data value**, not a frequency. Use cumulative frequency to locate the correct data value.',
          },
          {
            type: 'tip',
            content: 'Running-total scan: add frequencies left to right ($3, 8, 16, 20$). Stop as soon as the cumulative total equals or passes the median position. The value at that row is the median.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Frequency Table -> Median',
            items: [
              'Add a **cumulative frequency** column: running total of frequencies',
              'Find total $n$ (sum of all frequencies)',
              'Compute the median position: $\\frac{n+1}{2}$ for odd $n$, or positions $\\frac{n}{2}$ and $\\frac{n}{2}+1$ for even $n$',
              'Scan the cumulative frequency column to find which value row contains that position',
              'If $n$ is even and the two positions fall in different rows, average those two values',
            ],
          },
          {
            type: 'steps',
            title: 'Building a Frequency Table from Raw Data',
            items: [
              'Sort the data',
              'List each distinct value in the first column',
              'Count occurrences for the frequency column',
              'Compute cumulative frequency as the running total',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Taking the Median of Frequencies',
            wrong: 'Finding the median of $\\{3, 5, 8, 4\\}$ (the frequency column) instead of using them to locate the data value.',
            correction: 'Frequencies tell you how many times each value occurs. Build cumulative frequencies and scan to the median position to find the corresponding **data value**.',
          },
          {
            type: 'trapCard',
            title: 'Off-by-One in Position',
            wrong: 'For $n = 20$, computing median position as $\\frac{20 + 1}{2} = 10.5$ and rounding down to 10.',
            correction: 'For even $n$, the median is the average of the values at positions $\\frac{n}{2} = 10$ and $\\frac{n}{2} + 1 = 11$. Position $10.5$ means average positions 10 and 11.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Test scores: 70 (2 students), 80 (6 students), 90 (5 students), 100 (3 students). Find the median.',
            steps: [
              { label: 'Build table', content: 'Cumulative: $2, 8, 13, 16$ -> total $n = 16$' },
              { label: 'Median positions', content: 'Even $n$: positions $8$ and $9$' },
              { label: 'Locate', content: 'Position 8 -> score 80 (cumulative reaches 8). Position 9 -> score 90 (cumulative reaches 13).' },
              { label: 'Answer', content: 'Median $= \\frac{80 + 90}{2} = 85$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A frequency table shows: value 1 (freq 4), value 2 (freq 7), value 3 (freq 3), value 4 (freq 6). Find the median.',
            steps: [
              { label: 'Cumulative', content: '$4, 11, 14, 20$ -> total $n = 20$' },
              { label: 'Median positions', content: 'Positions $10$ and $11$' },
              { label: 'Locate', content: 'Position 10 -> value 2 (cumulative reaches 11). Position 11 -> value 2 (still in cumulative 11).' },
              { label: 'Answer', content: 'Both positions are in the value-2 row, so median $= 2$' },
            ],
          },
        ],
      },
    },
  },

  10: {
    moduleId: 'statistics',
    title: 'Simple Calculating Median Example #1',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Finding the median requires sorting first, then identifying the middle value based on whether the count is odd or even.',
        blocks: [
          {
            type: 'text',
            content: 'The median is the **middle value** of a sorted list. For an odd count, it is the single center value. For an even count, it is the average of the two center values.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Odd $n$', formula: '$\\text{Median position} = \\frac{n+1}{2}$', note: 'Single middle value' },
              { label: 'Even $n$', formula: '$\\text{Median} = \\frac{x_{n/2} + x_{n/2+1}}{2}$', note: 'Average of two middles' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'Sorting is non-negotiable. The most common error on median problems is reading the middle of the **unsorted** list.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Direct Median Computation',
            content: 'Recognition cue: a small list of numbers and the question "Find the median." First move: sort from least to greatest, count the values, then locate the middle.',
          },
          {
            type: 'trapCard',
            title: 'Picking the Middle of the Unsorted List',
            wrong: 'Data: $8, 3, 12, 5, 10$. Student picks $12$ (the 3rd value in the original order).',
            correction: 'Sort first: $3, 5, 8, 10, 12$. The median is the 3rd value of the sorted list: $8$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding the Median (Odd Count)',
            items: [
              'Sort the values: $3, 5, 8, 10, 12$',
              '$n = 5$ (odd), so the median is at position $\\frac{5+1}{2} = 3$',
              'The 3rd value is $8$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the median of $8, 3, 12, 5, 10$.',
            steps: [
              { label: 'Sort', content: '$3, 5, 8, 10, 12$' },
              { label: 'Position', content: '$n = 5$ -> position $\\frac{6}{2} = 3$' },
              { label: 'Answer', content: 'Median $= 8$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'Find the median of $17, 4, 9, 22, 11, 6, 15$.',
            answer: 'Sorted: $4, 6, 9, 11, 15, 17, 22$. $n = 7$ -> position $4$. Median $= 11$.',
          },
        ],
      },
    },
  },

  11: {
    moduleId: 'statistics',
    title: 'Simple Calculating Median Example #1 (DESMOS Method)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'DESMOS can compute the median instantly using the median() function, eliminating the need to sort manually.',
        blocks: [
          {
            type: 'text',
            content: 'The DESMOS graphing calculator has a built-in $\\text{median}()$ function. Enter the data as a list and DESMOS handles the sorting and position-finding automatically.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'DESMOS Syntax for Median',
            content: 'Type: $\\text{median}([8, 3, 12, 5, 10])$ and DESMOS returns $8$. No manual sorting required.',
          },
          {
            type: 'keyInsight',
            content: 'Using DESMOS eliminates the two most common median errors: forgetting to sort and miscounting the middle position.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'When to Use DESMOS for Median',
            content: 'Recognition cue: a problem that gives a list of numbers and asks for the median. First move: type the list into DESMOS and call $\\text{median}()$. Reserve manual calculation for frequency tables or problems involving variables.',
          },
          {
            type: 'tip',
            content: 'DESMOS also supports $\\text{quartile}(L, p)$ where $p = 1$ gives $Q_1$ and $p = 3$ gives $Q_3$. For median, $\\text{quartile}(L, 2)$ is equivalent to $\\text{median}(L)$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Using DESMOS to Find the Median',
            items: [
              'Open the DESMOS calculator',
              'Type: $L = [8, 3, 12, 5, 10]$',
              'Type: $\\text{median}(L)$',
              'Read the result: $8$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Use DESMOS to find the median of $17, 4, 9, 22, 11, 6, 15$.',
            steps: [
              { label: 'Enter list', content: 'Type $[17, 4, 9, 22, 11, 6, 15]$' },
              { label: 'Apply function', content: 'Type $\\text{median}([17, 4, 9, 22, 11, 6, 15])$' },
              { label: 'Read result', content: 'DESMOS returns $11$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'What DESMOS command finds the median of $2, 9, 4, 7, 1, 6$?',
            answer: '$\\text{median}([2, 9, 4, 7, 1, 6])$ returns $5.5$ (average of $4$ and $7$ after sorting).',
          },
        ],
      },
    },
  },

  12: {
    moduleId: 'statistics',
    title: 'Simple Calculating Median Example #2',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'When a data set has an even number of values, the median is the average of the two middle values after sorting.',
        blocks: [
          {
            type: 'text',
            content: 'With an even count, no single value sits at the center. Instead, the median falls **between** the two middle values, computed as their average.',
          },
          {
            type: 'formula',
            label: 'Even-Count Median',
            content: '$$\\text{Median} = \\frac{x_{n/2} + x_{n/2+1}}{2}$$',
            note: 'where $x$ values are in sorted order',
          },
          {
            type: 'keyInsight',
            content: 'The even-count median may not equal any actual data value. For example, $\\{2, 4, 6, 8\\}$ has median $5$, which does not appear in the set.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Even-Count Median',
            content: 'Recognition cue: a list with an even number of values. First move: sort, find the two middle positions ($\\frac{n}{2}$ and $\\frac{n}{2} + 1$), and average the values at those positions.',
          },
          {
            type: 'trapCard',
            title: 'Taking Only One Middle Value',
            wrong: 'For $\\{3, 7, 12, 18, 25, 30\\}$ ($n = 6$), student takes only the 3rd value ($12$).',
            correction: 'For even $n$, average the 3rd and 4th values: $\\frac{12 + 18}{2} = 15$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding the Median (Even Count)',
            items: [
              'Sort the values: $3, 7, 12, 18, 25, 30$',
              '$n = 6$ (even), so average positions $3$ and $4$',
              '$\\frac{12 + 18}{2} = 15$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the median of $3, 7, 12, 18, 25, 30$.',
            steps: [
              { label: 'Sorted', content: '$3, 7, 12, 18, 25, 30$' },
              { label: 'Two middles', content: 'Positions $3$ and $4$: values $12$ and $18$' },
              { label: 'Average', content: '$\\text{Median} = \\frac{12 + 18}{2} = 15$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'Find the median of $5, 11, 14, 20$.',
            answer: 'Sorted (already): $5, 11, 14, 20$. $n = 4$, average positions $2$ and $3$: $\\frac{11 + 14}{2} = 12.5$.',
          },
        ],
      },
    },
  },

  13: {
    moduleId: 'statistics',
    title: 'Simple Calculating Median Example #2 (DESMOS Method)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'For even-count data sets, DESMOS automatically averages the two middle values when computing the median.',
        blocks: [
          {
            type: 'text',
            content: 'DESMOS handles even-count medians seamlessly. Enter the list and call $\\text{median}()$ -- it sorts, identifies the two middle values, and averages them automatically.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'DESMOS Advantage',
            content: 'For even-count lists, the manual method requires sorting, identifying two positions, and averaging. DESMOS does all three steps in one function call, eliminating position-counting errors.',
          },
          {
            type: 'keyInsight',
            content: 'Combine $\\text{median}()$ with other DESMOS functions for multi-step problems: $\\text{mean}(L) - \\text{median}(L)$ directly computes the difference between mean and median.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'DESMOS for Even-Count Median',
            content: 'Recognition cue: a list with an even number of values. First move: enter the list and call $\\text{median}()$. DESMOS returns the average of the two middle values automatically.',
          },
          {
            type: 'tip',
            content: 'For problems that ask "Is the mean greater than, less than, or equal to the median?", compute both in DESMOS: $\\text{mean}(L)$ and $\\text{median}(L)$, then compare.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'DESMOS Even-Count Median',
            items: [
              'Enter the list: $L = [3, 7, 12, 18, 25, 30]$',
              'Type $\\text{median}(L)$',
              'DESMOS returns $15$ (the average of $12$ and $18$)',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Use DESMOS to find the median of $5, 11, 14, 20$.',
            steps: [
              { label: 'Enter list', content: 'Type $[5, 11, 14, 20]$' },
              { label: 'Apply function', content: 'Type $\\text{median}([5, 11, 14, 20])$' },
              { label: 'Read result', content: 'DESMOS returns $12.5$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'A student enters $\\text{median}([10, 20, 30, 40, 50, 60])$ in DESMOS. What value is returned?',
            answer: 'DESMOS returns $35$. (Average of the 3rd and 4th sorted values: $\\frac{30 + 40}{2} = 35$.)',
          },
        ],
      },
    },
  },

  14: {
    moduleId: 'statistics',
    title: 'Finding Median from Frequency Table',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Use cumulative frequency to locate the median position in a frequency table without expanding every data point.',
        blocks: [
          {
            type: 'text',
            content: 'When data is summarized in a frequency table, build the cumulative frequency column and scan for the row that first reaches or passes the median position. This avoids listing every individual data point.',
          },
          {
            type: 'table',
            headers: ['Score', 'Frequency', 'Cumulative Frequency'],
            rows: [
              ['$60$', '$2$', '$2$'],
              ['$70$', '$5$', '$7$'],
              ['$80$', '$8$', '$15$'],
              ['$90$', '$3$', '$18$'],
              ['$100$', '$2$', '$20$'],
            ],
          },
          {
            type: 'keyInsight',
            content: '$n = 20$ (even). Median positions: $10$ and $11$. Cumulative frequency first passes $10$ at the "$80$" row (cumulative $= 15$). Both positions $10$ and $11$ fall in this row, so the median is $80$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Frequency Table Median',
            content: 'Recognition cue: a table with values and their frequencies. First move: build the cumulative frequency column, find $n$, compute the median position, and scan the cumulative column.',
          },
          {
            type: 'trapCard',
            title: 'Confusing the Value Column with the Frequency Column',
            wrong: 'Student finds the median of the frequency column ($2, 5, 8, 3, 2$) instead of the data values.',
            correction: 'Frequencies tell you the **count** of each value. Use cumulative frequency to identify which **data value** occupies the median position.',
          },
          {
            type: 'tip',
            content: 'When the two median positions fall in **different** rows, average the two corresponding values. When they fall in the **same** row, the median equals that row\'s value (no averaging needed).',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Frequency Table -> Median',
            items: [
              'Add a cumulative frequency column (running total)',
              'Find $n$ (total of all frequencies)',
              'Compute median positions: $\\frac{n}{2}$ and $\\frac{n}{2} + 1$ (even), or $\\frac{n+1}{2}$ (odd)',
              'Scan cumulative frequencies to find which row contains the median position(s)',
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
            problem: 'Scores: 60 (freq 2), 70 (freq 5), 80 (freq 8), 90 (freq 3), 100 (freq 2). Find the median.',
            steps: [
              { label: 'Cumulative', content: '$2, 7, 15, 18, 20$ -> $n = 20$' },
              { label: 'Median positions', content: 'Even: positions $10$ and $11$' },
              { label: 'Locate', content: 'Cumulative first reaches $10$ at score $80$ (cumulative $= 15$). Position $11$ also in this row.' },
              { label: 'Answer', content: 'Median $= 80$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'Value 1 (freq 3), value 2 (freq 4), value 3 (freq 5), value 4 (freq 3). Find the median.',
            answer: 'Cumulative: $3, 7, 12, 15$. $n = 15$ (odd). Position $\\frac{16}{2} = 8$. Cumulative first reaches $8$ at value $3$ (cumulative $= 12$). Median $= 3$.',
          },
        ],
      },
    },
  },

  15: {
    moduleId: 'statistics',
    title: 'Comparing Mean & Median of Two Data Sets',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'When comparing two data sets, compute the mean and median of each separately, then analyze the differences to determine skewness and relative center.',
        blocks: [
          {
            type: 'text',
            content: 'Comparison problems require computing the mean and median for **each** data set independently. The relationship between mean and median within each set reveals its skewness, while the values themselves allow direct comparison.',
          },
          {
            type: 'comparison',
            title: 'Interpreting Mean vs. Median',
            items: [
              { label: 'Mean $\\approx$ Median', content: 'Data is roughly symmetric' },
              { label: 'Mean > Median', content: 'Data is skewed right (high outlier pulls mean up)' },
              { label: 'Mean < Median', content: 'Data is skewed left (low outlier pulls mean down)' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'Two data sets can have the same mean but different medians (or vice versa). Identical means do not guarantee identical distributions.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Side-by-Side Data Set Comparison',
            content: 'Recognition cue: two lists, tables, or dot plots with a question comparing their centers. First move: compute mean and median for each set, then compare.',
          },
          {
            type: 'trapCard',
            title: 'Comparing Means Without Checking Medians',
            wrong: 'Student concludes "Data Set A is larger than Data Set B" based solely on the mean, ignoring a large outlier in Set A.',
            correction: 'Compare **both** mean and median. If the mean is much larger than the median in one set, an outlier is inflating the mean. The median may be a better comparison.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Comparing Two Data Sets',
            items: [
              'Compute the mean of each set: $\\bar{x}_A$ and $\\bar{x}_B$',
              'Compute the median of each set',
              'Compare: which set has a higher center? Which is more symmetric?',
              'If mean $\\neq$ median for a set, note the skew direction and check for outliers',
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
            problem: 'Set A: $10, 12, 14, 16, 18$. Set B: $2, 12, 14, 16, 26$. Compare the mean and median of each set.',
            steps: [
              { label: 'Set A', content: 'Mean $= \\frac{70}{5} = 14$. Median $= 14$. Mean $=$ Median -> symmetric.' },
              { label: 'Set B', content: 'Mean $= \\frac{70}{5} = 14$. Median $= 14$. Mean $=$ Median -> symmetric.' },
              { label: 'Comparison', content: 'Both sets have the same mean and median ($14$), but Set B has more spread (range $24$ vs. $8$).' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'Set X: $5, 5, 5, 5, 30$. Set Y: $8, 9, 10, 11, 12$. Which set has a larger mean? Which has a larger median?',
            answer: 'Set X mean $= \\frac{50}{5} = 10$, median $= 5$. Set Y mean $= \\frac{50}{5} = 10$, median $= 10$. Same mean, but Set Y has a larger median ($10 > 5$). Set X is right-skewed.',
          },
        ],
      },
    },
  },

  // ─── SECTION: MODE ───────────────────────────────────────────────────────────

  16: {
    moduleId: 'statistics',
    title: 'What Is the Mode?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The mode is the most frequently occurring value in a data set -- the only measure of center that works with categorical data.',
        blocks: [
          {
            type: 'text',
            content: 'The **mode** is the value that appears most often. Unlike the mean and median, the mode works with **categorical data** (e.g., favorite color) as well as numerical data.',
          },
          {
            type: 'iconRow',
            items: [
              { icon: '1', label: 'Unimodal', description: 'One mode: {2, 3, 3, 5, 7}' },
              { icon: '2', label: 'Bimodal', description: 'Two modes: {1, 1, 4, 6, 6}' },
              { icon: '0', label: 'No Mode', description: 'All equal freq: {1, 2, 3, 4}' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'The mode is the only measure of center that can appear **more than once** and that works for **non-numerical** data. A question asking "What is the most popular lunch option?" is a mode question.',
          },
          {
            type: 'text',
            content: 'In a histogram or bar chart, the **mode** corresponds to the tallest bar. In a frequency table, it is the value with the highest frequency.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"Which Statement Is True?" -- Compare All Three',
            content: 'Recognition cue: a small data set followed by four statements comparing mean, median, and mode. First move: compute all three quickly. Mean = sum/count, median = middle after sorting, mode = most frequent. Match to the correct statement.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Skew Direction vs. Measure Order',
            content: 'Right-skewed (tail stretches right): mode < median < mean. Left-skewed: mean < median < mode. Symmetric: mean $\\approx$ median $\\approx$ mode.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Categorical Data = Mode Only',
            content: 'Recognition cue: data involves categories (colors, brands, cities) rather than numbers. First move: the mean and median are undefined for categories. The only valid measure of center is the mode.',
          },
          {
            type: 'trapCard',
            title: 'Skew Direction Error',
            wrong: 'Student sees a right-skewed histogram and says mode > mean.',
            correction: 'Right-skewed (tail stretches right): mode < median < mean. Left-skewed: mean < median < mode. The mean is always pulled toward the tail.',
          },
          {
            type: 'tip',
            content: 'The mode is the only measure that can be used on **categorical** data. If the answer choices involve non-numerical data, the answer is mode -- mean and median require numbers.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding the Mode',
            items: [
              'Count how many times each value appears',
              'The value with the highest count is the mode',
              'If two or more values tie for the highest count, the data is **bimodal** (or multimodal)',
              'If every value appears exactly once, there is **no mode**',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Confusing Mode with Largest Value',
            wrong: 'In $\\{3, 7, 7, 12, 12, 12, 15\\}$, student says "the mode is 15 because it is the largest."',
            correction: 'The mode is the most **frequent** value, not the largest. Here $12$ appears $3$ times, so mode $= 12$.',
          },
          {
            type: 'trapCard',
            title: 'Claiming "No Mode" When Ties Exist',
            wrong: 'In $\\{2, 2, 5, 5, 9\\}$, student says "no mode because two values tie."',
            correction: 'The data is **bimodal**: modes are $2$ and $5$. "No mode" applies only when every value has equal frequency.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the mode of $\\{4, 7, 2, 7, 3, 4, 7, 9\\}$.',
            steps: [
              { label: 'Count', content: '$2$: 1 time, $3$: 1 time, $4$: 2 times, $7$: 3 times, $9$: 1 time' },
              { label: 'Answer', content: 'Mode $= 7$ (highest frequency: 3 times)' },
            ],
          },
        ],
      },
    },
  },

  // ─── SECTION: RANGE ──────────────────────────────────────────────────────────

  17: {
    moduleId: 'statistics',
    title: 'What Is the Range?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The range is the simplest measure of spread -- the difference between the maximum and minimum values.',
        blocks: [
          {
            type: 'formula',
            label: 'Range',
            content: '$$\\text{Range} = \\text{max} - \\text{min}$$',
          },
          {
            type: 'text',
            content: 'The range tells you the **total span** of the data. It is easy to compute but very sensitive to outliers -- a single extreme value can inflate the range dramatically.',
          },
          {
            type: 'comparison',
            title: 'Range vs. Other Spread Measures',
            items: [
              { label: 'Range', content: 'Uses only max and min. Very sensitive to outliers.' },
              { label: 'IQR', content: 'Uses middle 50% of data. Resistant to outliers.' },
              { label: 'Standard Deviation', content: 'Uses all values. Sensitive to outliers.' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'Removing a data point only changes the range if that point was the maximum or the minimum. Removing any interior value leaves the range unchanged.',
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
            content: '"The range is $24$ and the maximum is $31$. What is the minimum?" Rearrange: $\\text{min} = \\text{max} - \\text{range} = 31 - 24 = 7$.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: '"How Does Removing a Value Affect the Range?"',
            content: 'Recognition cue: a question about removing one value. First move: check if the removed value is the max or min. If yes, the range shrinks. If no, the range is unchanged.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Range from a Histogram or Dot Plot',
            content: 'Recognition cue: a graphical display. First move: identify the leftmost and rightmost data values with nonzero frequency. Range $= \\text{rightmost} - \\text{leftmost}$.',
          },
          {
            type: 'trapCard',
            title: 'Range Is a Single Number',
            wrong: 'Student writes "the range is from $7$ to $31$" as their answer.',
            correction: 'The range is the **difference**: $31 - 7 = 24$, not the interval. On the SAT, the range is always a single number.',
          },
          {
            type: 'tip',
            content: 'When asked "how does removing a value affect the range?" -- only the max or min matter. Removing the max -> new range $= (\\text{second largest}) - \\text{min}$. Removing any interior value -> range unchanged.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Computing the Range',
            items: [
              'Identify the maximum value in the data set',
              'Identify the minimum value in the data set',
              'Subtract: $\\text{Range} = \\text{max} - \\text{min}$',
            ],
          },
          {
            type: 'steps',
            title: 'Finding Max or Min from the Range',
            items: [
              'If given range and max: $\\text{min} = \\text{max} - \\text{range}$',
              'If given range and min: $\\text{max} = \\text{min} + \\text{range}$',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Range as an Interval',
            wrong: '"The range is $7$ to $31$" -- describing the interval, not the range.',
            correction: 'The range is a **single number**: $31 - 7 = 24$. It is the difference, not the interval.',
          },
          {
            type: 'trapCard',
            title: 'Interior Value Removal Changes Range',
            wrong: 'Removing $15$ from $\\{7, 10, 15, 22, 31\\}$ and claiming the range changes.',
            correction: '$15$ is neither the max nor the min. Range stays $31 - 7 = 24$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'The range of a data set is $18$ and the minimum value is $7$. What is the maximum?',
            steps: [
              { label: 'Formula', content: '$\\text{max} = \\text{min} + \\text{range}$' },
              { label: 'Substitute', content: '$\\text{max} = 7 + 18 = 25$' },
            ],
          },
        ],
      },
    },
  },

  18: {
    moduleId: 'statistics',
    title: 'Simple Calculating Range Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The range is computed by subtracting the smallest value from the largest. Identify max and min, then subtract.',
        blocks: [
          {
            type: 'formula',
            label: 'Range',
            content: '$$\\text{Range} = \\text{max} - \\text{min}$$',
          },
          {
            type: 'text',
            content: 'Computing the range requires scanning the data for the largest and smallest values. With sorted data, these are the first and last values. With unsorted data, check each value carefully.',
          },
          {
            type: 'keyInsight',
            content: 'The range depends on only two values -- everything in between is irrelevant. This makes it fast to compute but poor at describing overall spread.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Direct Range Calculation',
            content: 'Recognition cue: a list of values with the question "What is the range?" First move: find the max, find the min, subtract.',
          },
          {
            type: 'trapCard',
            title: 'Subtracting in the Wrong Order',
            wrong: 'Min $-$ max gives a negative number; student writes the range as $-18$.',
            correction: 'Range is always $\\text{max} - \\text{min}$, which is always non-negative.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Step-by-Step Range Calculation',
            items: [
              'Scan the data for the maximum value',
              'Scan the data for the minimum value',
              'Subtract: max $-$ min',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the range of $\\{23, 7, 45, 12, 31, 8\\}$.',
            steps: [
              { label: 'Max', content: '$45$' },
              { label: 'Min', content: '$7$' },
              { label: 'Range', content: '$45 - 7 = 38$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'Find the range of $\\{-3, 8, 15, -7, 22\\}$.',
            answer: 'Max $= 22$, Min $= -7$. Range $= 22 - (-7) = 29$.',
          },
        ],
      },
    },
  },

  19: {
    moduleId: 'statistics',
    title: 'Comparing Median & Range of Two Data Sets',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Comparing two data sets requires evaluating both center (median) and spread (range) to draw meaningful conclusions about the distributions.',
        blocks: [
          {
            type: 'text',
            content: 'When comparing two data sets, the **median** tells you which set has a higher typical value, while the **range** tells you which set is more spread out. A complete comparison addresses both center and spread.',
          },
          {
            type: 'comparison',
            title: 'What Each Measure Reveals',
            items: [
              { label: 'Median', content: 'Center of the data (typical value). Resistant to outliers.' },
              { label: 'Range', content: 'Total spread of the data (max $-$ min). Sensitive to outliers.' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'Two data sets can have the same median but very different ranges, or the same range but very different medians. Both measures are needed for a complete comparison.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Side-by-Side Comparison',
            content: 'Recognition cue: two dot plots, histograms, or data lists with a question about "which statement is true." First move: compute the median and range for each set, then evaluate each answer choice.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Greater Median with Greater Range',
            wrong: 'Student assumes the data set with the higher median also has the greater range.',
            correction: 'Center and spread are independent. Compute each measure separately: median from the middle position, range from max $-$ min.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Comparing Median and Range',
            items: [
              'Sort each data set (or read values from the graph)',
              'Find each median using the position formula',
              'Find each range: max $-$ min',
              'Compare: which set has a higher median? A larger range?',
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
            problem: 'Class A scores: $62, 70, 75, 80, 88$. Class B scores: $55, 72, 75, 78, 95$. Compare the median and range.',
            steps: [
              { label: 'Medians', content: 'Class A: median $= 75$. Class B: median $= 75$. Same median.' },
              { label: 'Ranges', content: 'Class A: $88 - 62 = 26$. Class B: $95 - 55 = 40$.' },
              { label: 'Comparison', content: 'Both classes have the same median ($75$), but Class B has a larger range ($40 > 26$), indicating more variability.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'Set P: $4, 8, 12, 16, 20$. Set Q: $9, 10, 11, 12, 13$. Which has the greater median? Which has the greater range?',
            answer: 'Set P: median $= 12$, range $= 16$. Set Q: median $= 11$, range $= 4$. Set P has both the greater median and the greater range.',
          },
        ],
      },
    },
  },

  // ─── SECTION: STANDARD DEVIATION ─────────────────────────────────────────────

  20: {
    moduleId: 'statistics',
    title: 'What Is Standard Deviation?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Standard deviation measures how spread out values are around the mean -- larger values mean more spread.',
        blocks: [
          {
            type: 'text',
            content: '**Standard deviation** ($\\sigma$ or $s$) quantifies the typical distance of data points from the mean. A small standard deviation means data clusters tightly around the mean; a large one means data is scattered.',
          },
          {
            type: 'formula',
            label: 'Standard Deviation (sample)',
            content: '$$s = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n-1}}$$',
            note: 'You will NOT need to compute this by hand on the SAT.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'What the SAT Actually Tests',
            content: 'The SAT never asks you to calculate standard deviation. It tests **conceptual understanding**: which data set has a larger or smaller spread, and what happens to the SD when values are added, removed, or transformed.',
          },
          {
            type: 'iconRow',
            items: [
              { icon: '+', label: 'Add constant to all', description: 'SD stays the SAME' },
              { icon: 'x', label: 'Multiply all by $k$', description: 'SD multiplied by $|k|$' },
              { icon: '=', label: 'All values identical', description: 'SD = 0' },
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
            title: '"Which Data Set Has a Larger SD?"',
            content: 'Recognition cue: two data sets side by side, question asks about spread. First move: **do not compute** -- eyeball which data clusters more tightly. The set with values closer to its mean has a smaller SD.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: '"What Happens to SD If Every Value Is Increased by 5?"',
            content: 'Recognition cue: a uniform transformation applied to all data. Adding a constant: SD unchanged. Multiplying by a constant $k$: SD is multiplied by $|k|$.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: '"Which Set Has SD = 0?"',
            content: 'Recognition cue: multiple data sets in the answer choices. First move: SD $= 0$ only when **all values are identical**. Look for the set where every element is the same number.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Range with SD',
            wrong: 'Student sees $\\{48,49,50,51,52\\}$ and $\\{10,30,50,70,90\\}$, both centered at $50$, and says they have the same SD because the means are equal.',
            correction: 'Equal means do not imply equal spread. The first set has values within $2$ of the mean; the second has values within $40$. The second has a much larger SD.',
          },
          {
            type: 'tip',
            content: 'Three rules: (1) Adding a constant to every value does **not** change SD. (2) Multiplying every value by $k$ multiplies SD by $|k|$. (3) Adding a value equal to the mean does not increase SD.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Conceptual SD Comparison (No Calculation Needed)',
            items: [
              'Find the mean of each data set (or note that they are equal)',
              'Examine how far each value is from its mean',
              'The set with values **closer** to the mean has a **smaller** SD',
              'The set with values **farther** from the mean has a **larger** SD',
            ],
          },
          {
            type: 'steps',
            title: 'Effect of Transformations on SD',
            items: [
              'Adding/subtracting a constant $c$ to every value: SD unchanged',
              'Multiplying every value by constant $k$: new SD $= |k| \\times$ old SD',
              'Adding a new value equal to the mean: SD decreases slightly (more data near center)',
              'Adding a new value far from the mean: SD increases',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Adding a Constant Changes SD',
            wrong: 'If every student gets $5$ bonus points, the SD of the scores changes.',
            correction: 'Adding a constant shifts every value equally, so distances from the mean are unchanged. SD stays the same.',
          },
          {
            type: 'trapCard',
            title: 'Larger Range = Larger SD',
            wrong: 'The set with the larger range always has the larger SD.',
            correction: 'Not always. A set like $\\{1, 50, 50, 50, 99\\}$ has range $98$ but most values are near the mean. A set like $\\{1, 20, 50, 80, 99\\}$ has the same range but much larger SD because values are more spread out.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Data set A: $\\{10, 10, 10, 10, 10\\}$. Data set B: $\\{6, 8, 10, 12, 14\\}$. Which has a larger standard deviation?',
            steps: [
              { label: 'Set A', content: 'All values are $10$. Every value is $0$ away from the mean. SD $= 0$.' },
              { label: 'Set B', content: 'Mean $= 10$. Values are $4, 2, 0, 2, 4$ away from the mean. SD $> 0$.' },
              { label: 'Answer', content: 'Set B has the larger standard deviation.' },
            ],
          },
        ],
      },
    },
  },

  21: {
    moduleId: 'statistics',
    title: 'Simple Standard Deviation Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Standard deviation problems on the SAT test conceptual reasoning, not computation. Compare how tightly data clusters around the mean.',
        blocks: [
          {
            type: 'text',
            content: 'To determine which data set has a larger SD without calculating, compare the **distances of each value from the mean**. If most values sit close to the mean, SD is small. If values are spread far from the mean, SD is large.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'Visual Shortcut',
            content: 'On a dot plot or histogram, a **tall, narrow** distribution has a small SD. A **flat, wide** distribution has a large SD.',
          },
          {
            type: 'keyInsight',
            content: 'SD $= 0$ means every value is the same. Any variation at all makes SD positive. The more variation, the larger the SD.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Comparing Two Distributions Visually',
            content: 'Recognition cue: two histograms or dot plots with the same scale. First move: the distribution that appears more tightly clustered has the smaller SD.',
          },
          {
            type: 'trapCard',
            title: 'Same Mean Does Not Mean Same SD',
            wrong: 'Two dot plots both centered at $50$. Student says "same center, so same spread."',
            correction: 'Center (mean) and spread (SD) are independent. Compare how tightly the dots cluster around the center.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Eyeball SD Comparison',
            items: [
              'Identify the mean (or center) of each set',
              'Estimate the typical distance from the mean for each set',
              'The set with smaller typical distance has a smaller SD',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Set A: $\\{48, 49, 50, 51, 52\\}$. Set B: $\\{10, 30, 50, 70, 90\\}$. Both have mean $50$. Which has the larger SD?',
            steps: [
              { label: 'Set A distances', content: 'Values are $2, 1, 0, 1, 2$ from the mean. Typical distance $\\approx 1.6$.' },
              { label: 'Set B distances', content: 'Values are $40, 20, 0, 20, 40$ from the mean. Typical distance $\\approx 28.3$.' },
              { label: 'Answer', content: 'Set B has the much larger SD.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'Set X: $\\{5, 5, 5, 5\\}$. Set Y: $\\{3, 5, 5, 7\\}$. Which has a larger SD?',
            answer: 'Set X: all values identical, SD $= 0$. Set Y: values vary around $5$, SD $> 0$. Set Y has the larger SD.',
          },
        ],
      },
    },
  },

  22: {
    moduleId: 'statistics',
    title: 'Complex Standard Deviation Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Complex SD problems involve transformations (adding, multiplying) or adding/removing values and asking how SD changes.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              { label: 'Add constant $c$', formula: '$\\text{SD}_{\\text{new}} = \\text{SD}_{\\text{old}}$', note: 'SD unchanged' },
              { label: 'Multiply by $k$', formula: '$\\text{SD}_{\\text{new}} = |k| \\cdot \\text{SD}_{\\text{old}}$', note: 'SD scales by $|k|$' },
            ],
          },
          {
            type: 'text',
            content: 'Adding a constant shifts the entire distribution without changing the shape -- every distance from the mean stays the same, so SD is unchanged. Multiplying by a constant stretches or compresses the distribution, scaling SD by $|k|$.',
          },
          {
            type: 'keyInsight',
            content: 'When a new value is added: if it equals the mean, SD decreases slightly (or stays the same if $n$ is large). If it is far from the mean, SD increases. The effect depends on how far the new value is from the current mean.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Adding vs. Adding a Constant',
            content: '"Adding $5$ to every value" (transformation) keeps SD the same. "Adding the value $5$ to the data set" (new data point) changes SD depending on how far $5$ is from the mean.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Transformation Questions',
            content: 'Recognition cue: "If every value is multiplied by $3$..." or "If $10$ is added to each value..." First move: apply the transformation rule. Add constant -> SD same. Multiply by $k$ -> SD $\\times |k|$.',
          },
          {
            type: 'trapCard',
            title: 'Confusing "Add to Each" with "Add a New Value"',
            wrong: '"Adding $5$ to the data set" -- student assumes SD is unchanged because "adding 5 does not change SD."',
            correction: '"Adding $5$ to each value" leaves SD unchanged. "Adding the value $5$ as a new data point" changes SD based on how far $5$ is from the mean.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Analyzing SD After a Transformation',
            items: [
              'Identify the transformation: add/subtract constant, multiply/divide by constant, or add/remove a data point',
              'Apply the rule: add constant -> SD unchanged; multiply by $k$ -> SD $\\times |k|$',
              'For adding/removing a data point: compare the new value to the current mean',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A data set has mean $40$ and SD $= 8$. Every value is multiplied by $3$ and then $7$ is added. What is the new SD?',
            steps: [
              { label: 'Multiply by 3', content: 'New SD $= 3 \\times 8 = 24$' },
              { label: 'Add 7', content: 'Adding a constant does not change SD. SD stays $24$.' },
              { label: 'Answer', content: 'New SD $= 24$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'A data set has SD $= 6$. If every value is divided by $2$ and then $100$ is added, what is the new SD?',
            answer: 'Divide by $2$: SD $= \\frac{6}{2} = 3$. Add $100$: SD unchanged. New SD $= 3$.',
          },
        ],
      },
    },
  },

  // ─── SECTION: MARGIN OF ERROR ────────────────────────────────────────────────

  23: {
    moduleId: 'statistics',
    title: 'What Is Margin of Error?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Margin of error tells how far a sample statistic might be from the true population value -- it shrinks as sample size grows.',
        blocks: [
          {
            type: 'text',
            content: 'When you survey a sample instead of the whole population, your result has uncertainty. The **margin of error** (MOE) gives a range: the true value is likely within $\\pm \\text{MOE}$ of your sample statistic.',
          },
          {
            type: 'formula',
            label: 'Confidence Interval',
            content: '$$\\text{sample statistic} \\pm \\text{MOE}$$',
            note: 'The true population parameter is likely within this range.',
          },
          {
            type: 'formula',
            label: 'Quick MOE Estimate (95% confidence)',
            content: '$$\\text{MOE} \\approx \\frac{1}{\\sqrt{n}}$$',
            note: '$n$ = sample size. Estimates the margin for proportions near $50\\%$.',
          },
          {
            type: 'keyInsight',
            content: 'The key relationship: **larger sample -> smaller MOE**. To cut the margin of error in half, you must quadruple the sample size (because of the $\\sqrt{n}$ in the denominator).',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'Halving the MOE',
            content: 'MOE $\\propto \\frac{1}{\\sqrt{n}}$. To halve MOE: multiply $n$ by $4$. To cut MOE to $\\frac{1}{3}$: multiply $n$ by $9$. The multiplier is always the square of the desired reduction factor.',
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
            type: 'callout',
            variant: 'info',
            title: '"How to Reduce the Margin of Error"',
            content: 'Recognition cue: a question about making a survey more precise. First move: the answer is **increase sample size**. Changing the wording of questions or surveying different demographics does not reduce MOE.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Generalizability of Results',
            content: 'Recognition cue: a survey of one group with a conclusion about a broader group. First move: results only generalize to the **sampled population**. A poll of college students does not represent all adults.',
          },
          {
            type: 'trapCard',
            title: 'Overgeneralizing Beyond the Sample',
            wrong: '"55% of all Americans support the proposal" based on a survey of Ohio voters.',
            correction: 'Survey results only generalize to the **sampled population**. A poll of Ohio voters supports claims about Ohio voters, not all Americans.',
          },
          {
            type: 'tip',
            content: 'To halve the MOE, **quadruple** $n$ (because $\\text{MOE} \\propto \\frac{1}{\\sqrt{n}}$). If the question asks "how should the researcher reduce the margin of error?" the answer is increase sample size.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Interpreting a Confidence Interval',
            items: [
              'Read the sample statistic and MOE from the problem',
              'Compute the interval: $\\text{statistic} - \\text{MOE}$ to $\\text{statistic} + \\text{MOE}$',
              'Evaluate each answer choice: does the claim fall within the interval?',
              'Choose the most cautious answer that stays within the interval and only applies to the sampled population',
            ],
          },
          {
            type: 'steps',
            title: 'Determining Required Sample Size',
            items: [
              'Identify the desired MOE',
              'Use $n \\approx \\frac{1}{\\text{MOE}^2}$ for a quick estimate',
              'To reduce MOE by factor $k$: multiply $n$ by $k^2$',
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
            wrong: '"55% of all voters support the proposal" -- stating the sample result as population fact.',
            correction: 'With MOE of $5\\%$, you can only say the true proportion is **likely between 50% and 60%**. Never claim the exact sample percentage is the population percentage.',
          },
          {
            type: 'trapCard',
            title: 'Doubling $n$ Halves MOE',
            wrong: 'Thinking that doubling the sample size from 400 to 800 cuts MOE in half.',
            correction: 'MOE depends on $\\frac{1}{\\sqrt{n}}$. Doubling $n$ only reduces MOE by a factor of $\\sqrt{2} \\approx 1.41$. To halve MOE, you must **quadruple** $n$.',
          },
          {
            type: 'trapCard',
            title: 'Biased Sample = Invalid Results',
            wrong: 'Surveying only gym members about exercise habits and generalizing to all adults.',
            correction: 'A biased sample does not represent the broader population regardless of size. The sample must be **randomly selected** from the target population.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A poll of 400 voters finds $62\\%$ support a new policy, with a margin of error of $5\\%$. Which is the best interpretation?',
            steps: [
              { label: 'Confidence interval', content: '$62\\% \\pm 5\\% = [57\\%, 67\\%]$' },
              { label: 'Evaluate', content: 'The true proportion of support among the polled population is likely between $57\\%$ and $67\\%$.' },
              { label: 'Best answer', content: 'Choose the statement that says "between $57\\%$ and $67\\%$ of voters in the polled population support the policy."' },
            ],
          },
        ],
      },
    },
  },

  24: {
    moduleId: 'statistics',
    title: 'Simple Margin of Error Example #1',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A confidence interval is built by adding and subtracting the margin of error from the sample statistic.',
        blocks: [
          {
            type: 'formula',
            label: 'Confidence Interval',
            content: '$$[\\hat{p} - \\text{MOE}, \\; \\hat{p} + \\text{MOE}]$$',
            note: '$\\hat{p}$ = sample proportion (or sample mean), MOE = margin of error',
          },
          {
            type: 'text',
            content: 'The confidence interval defines the range of plausible values for the true population parameter. Any claim that falls within this interval is supported by the data; any claim outside it is not.',
          },
          {
            type: 'keyInsight',
            content: 'On the SAT, the correct interpretation is always the **narrowest valid claim**. It must stay within the confidence interval and only apply to the population that was actually sampled.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Building the Interval',
            content: 'Recognition cue: "A survey found $\\hat{p} = 0.45$ with MOE $= 0.03$." First move: interval is $[0.42, 0.48]$. Any answer that claims the true value is in this range for the sampled population is correct.',
          },
          {
            type: 'trapCard',
            title: 'Exact Point Estimate as Fact',
            wrong: '"Exactly $45\\%$ of the population prefers option A."',
            correction: 'The sample proportion $45\\%$ is an estimate. With MOE $= 3\\%$, the true value is plausibly between $42\\%$ and $48\\%$. Never state the point estimate as exact.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Constructing and Interpreting a Confidence Interval',
            items: [
              'Identify $\\hat{p}$ (or $\\bar{x}$) and MOE from the problem',
              'Lower bound: $\\hat{p} - \\text{MOE}$',
              'Upper bound: $\\hat{p} + \\text{MOE}$',
              'The true parameter is plausibly within $[\\text{lower}, \\text{upper}]$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A survey of 500 students finds that $72\\%$ prefer online classes, with a margin of error of $4\\%$. What is the confidence interval?',
            steps: [
              { label: 'Lower bound', content: '$72\\% - 4\\% = 68\\%$' },
              { label: 'Upper bound', content: '$72\\% + 4\\% = 76\\%$' },
              { label: 'Interval', content: 'Between $68\\%$ and $76\\%$ of students in the sampled population prefer online classes.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'A poll finds $58\\%$ approval with MOE $= 3\\%$. Is the claim "at least $54\\%$ approve" supported?',
            answer: 'Interval: $[55\\%, 61\\%]$. The lowest plausible value is $55\\%$, which exceeds $54\\%$. Yes, the claim is supported.',
          },
        ],
      },
    },
  },

  25: {
    moduleId: 'statistics',
    title: 'Simple Margin of Error Example #2',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Increasing sample size reduces the margin of error, making estimates more precise -- but the relationship follows a square-root law.',
        blocks: [
          {
            type: 'formula',
            label: 'MOE and Sample Size',
            content: '$$\\text{MOE} \\propto \\frac{1}{\\sqrt{n}}$$',
            note: 'Doubling $n$ reduces MOE by a factor of $\\sqrt{2} \\approx 1.41$, not $2$.',
          },
          {
            type: 'text',
            content: 'There are diminishing returns to increasing sample size. Going from $n = 100$ to $n = 400$ halves the MOE, but going from $n = 400$ to $n = 1600$ is needed to halve it again.',
          },
          {
            type: 'table',
            headers: ['Sample Size ($n$)', 'Approximate MOE'],
            rows: [
              ['$100$', '$\\frac{1}{\\sqrt{100}} = 0.10 = 10\\%$'],
              ['$400$', '$\\frac{1}{\\sqrt{400}} = 0.05 = 5\\%$'],
              ['$1{,}600$', '$\\frac{1}{\\sqrt{1600}} = 0.025 = 2.5\\%$'],
              ['$10{,}000$', '$\\frac{1}{\\sqrt{10000}} = 0.01 = 1\\%$'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'To reduce MOE by a factor of $k$, multiply $n$ by $k^2$. Halve MOE -> $4 \\times n$. Cut MOE to one-third -> $9 \\times n$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Sample Size and Precision',
            content: 'Recognition cue: "To reduce the margin of error, the researcher should..." First move: the answer is **increase sample size**. Larger $n$ -> smaller MOE.',
          },
          {
            type: 'trapCard',
            title: 'Linear Thinking About Sample Size',
            wrong: 'Student thinks doubling the sample from $400$ to $800$ halves the MOE from $5\\%$ to $2.5\\%$.',
            correction: 'Doubling $n$ reduces MOE by factor $\\sqrt{2} \\approx 1.41$, giving MOE $\\approx 3.5\\%$, not $2.5\\%$. To actually halve MOE, quadruple $n$ to $1{,}600$.',
          },
          {
            type: 'tip',
            content: 'Quick check: $n = 100$ -> MOE $\\approx 10\\%$. $n = 400$ -> MOE $\\approx 5\\%$. $n = 2{,}500$ -> MOE $\\approx 2\\%$. Use these benchmarks to estimate.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding the Required Sample Size',
            items: [
              'Start with the current MOE and $n$',
              'Determine the desired MOE',
              'Compute the reduction factor: $k = \\frac{\\text{old MOE}}{\\text{desired MOE}}$',
              'New sample size: $n_{\\text{new}} = k^2 \\times n_{\\text{old}}$',
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
            problem: 'A researcher surveys $400$ people and gets MOE $= 5\\%$. How many people must be surveyed to achieve MOE $= 2.5\\%$?',
            steps: [
              { label: 'Reduction factor', content: '$k = \\frac{5\\%}{2.5\\%} = 2$' },
              { label: 'New sample size', content: '$n_{\\text{new}} = 2^2 \\times 400 = 4 \\times 400 = 1{,}600$' },
              { label: 'Answer', content: '$1{,}600$ people must be surveyed.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'A survey of $n = 900$ has MOE $= 3.3\\%$. What sample size is needed for MOE $= 1.1\\%$?',
            answer: 'Reduction factor $k = \\frac{3.3}{1.1} = 3$. New $n = 3^2 \\times 900 = 9 \\times 900 = 8{,}100$.',
          },
        ],
      },
    },
  },

};
