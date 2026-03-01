export const statisticsLessonTabs = {
  1: {
    moduleId: 'statistics',
    title: 'What Is the Mean?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The mean (average) is the sum of all values divided by the count -- the most tested measure of center on the Digital SAT.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Mean',
                formula: '$$\\bar{x} = \\frac{\\text{sum}}{n}$$',
                note: 'sum of all values divided by count',
              },
              {
                label: 'Sum recovery',
                formula: '$$\\text{sum} = \\bar{x} \\times n$$',
                note: 'given mean and count, recover total',
              },
              {
                label: 'Count recovery',
                formula: '$$n = \\frac{\\text{sum}}{\\bar{x}}$$',
                note: 'given sum and mean, find count',
              },
            ],
          },
          {
            type: 'text',
            content: 'The mean is the **balance point** of a data set. Place each value as a weight on a number line and the mean is where the line balances perfectly. Because every value feeds into the sum, a single extreme number shifts the mean toward it.',
          },
          {
            type: 'keyInsight',
            content: 'Any two of the three quantities (mean, sum, count) determine the third. Most SAT mean problems reduce to identifying which two are known and solving for the missing one.',
          },
          {
            type: 'trapCard',
            title: 'Using the Wrong Count',
            wrong: 'Five test scores average $82$. A sixth score of $94$ is added. Student computes the original sum as $82 \\times 6 = 492$.',
            correction: 'The original sum is $82 \\times 5 = 410$, not $82 \\times 6$. Pair the **original** mean with the **original** count, then add the new score and divide by $6$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: `A student's first four test scores are $82, 91, 76$, and $88$. What score does she need on the fifth test to have a mean of $85$?`,
            steps: [
              {
                label: 'Target sum',
                content: '$\\text{sum} = 85 \\times 5 = 425$',
              },
              {
                label: 'Current sum',
                content: '$82 + 91 + 76 + 88 = 337$',
              },
              {
                label: 'Missing score',
                content: '$425 - 337 = \\boxed{88}$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Six quiz scores average $78$. After a seventh quiz, the new mean is $80$. What was the seventh score?',
            answer: 'Original sum $= 78 \\times 6 = 468$. New sum $= 80 \\times 7 = 560$. Seventh score $= 560 - 468 = 92$.',
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'statistics',
    title: 'Simple Calculating Mean Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Computing the mean is two steps: add all values, then divide by the count.',
        blocks: [
          {
            type: 'formula',
            label: 'Mean Formula',
            content: '$$\\bar{x} = \\frac{\\sum x_i}{n}$$',
          },
          {
            type: 'text',
            content: 'When a problem provides a list of numbers and asks for the average, accuracy depends on careful arithmetic. Double-check addition before dividing -- a single misread digit changes the answer.',
          },
          {
            type: 'keyInsight',
            content: 'The mean does not have to equal any value in the data set. For $\\{3, 5, 10\\}$, the mean is $6$, which does not appear in the list.',
          },
          {
            type: 'trapCard',
            title: 'Dividing by the Wrong Number',
            wrong: 'For the data $14, 18, 22, 10, 16$: student gets sum $80$ but divides by $4$ instead of $5$, getting $20$.',
            correction: 'Count the values carefully. There are $5$ numbers, so $\\bar{x} = \\frac{80}{5} = 16$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'For the data $14, 18, 22, 10, 16$: student gets sum $80$ but divides by $4$ instead of $5$, getting $20$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Count the values carefully. There are $5$ numbers, so $\\bar{x} = \\frac{80}{5} = 16$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the mean of $13, 27, 8, 35, 17$.',
            answer: '$\\text{Sum} = 13 + 27 + 8 + 35 + 17 = 100$. $\\bar{x} = \\frac{100}{5} = 20$.',
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'statistics',
    title: 'Simple Calculating Mean Example (DESMOS Method)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'DESMOS computes the mean of any list instantly using the built-in mean() function.',
        blocks: [
          {
            type: 'formula',
            label: 'DESMOS Syntax',
            content: '$$\\text{mean}([14, 18, 22, 10, 16]) = 16$$',
          },
          {
            type: 'text',
            content: 'The DESMOS graphing calculator, available on the Digital SAT, has a built-in $\\text{mean}()$ function. Enter the data as a list inside square brackets and DESMOS returns the average with zero manual arithmetic.',
          },
          {
            type: 'keyInsight',
            content: 'Using DESMOS for the mean eliminates arithmetic errors entirely and saves 20--30 seconds per computation on timed sections.',
          },
          {
            type: 'tip',
            content: 'If a problem gives a list of numbers and asks for the mean, use $\\text{mean}(L)$ in DESMOS. If it gives the mean and asks for a missing value, solve algebraically instead -- DESMOS cannot reverse-solve the mean formula.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A student scores $72, 85, 90, 68, 95$ on five quizzes. Use DESMOS to find the mean score.',
            steps: [
              { label: 'Enter command', content: 'Type $\\text{mean}([72, 85, 90, 68, 95])$ in DESMOS.' },
              { label: 'Result', content: 'DESMOS returns $82$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'What DESMOS command computes the mean of $4, 8, 15, 16, 23, 42$, and what does it return?',
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
      learn: {
        title: 'Learn',
        summary: 'An outlier is an extreme value far from the rest -- it pulls the mean toward itself but barely moves the median.',
        blocks: [
          {
            type: 'text',
            content: 'An **outlier** is a data value much larger or smaller than the rest. Because the mean uses every value in its calculation, one extreme number can shift it dramatically. The **median**, which depends only on the middle position, is far more resistant.',
          },
          {
            type: 'keyInsight',
            content: 'Replacing $6$ with $100$ moved the mean from $4$ to $22.8$ -- but the median stayed at $4$. When a data set contains outliers or is skewed, the median is a better measure of center. Skewed right means mean $>$ median; skewed left means mean $<$ median.',
          },
          {
            type: 'table',
            headers: [
              'Data Set',
              'Mean',
              'Median',
            ],
            rows: [
              [
                '$2, 3, 4, 5, 6$',
                '$\\frac{20}{5} = 4$',
                '$4$',
              ],
              [
                '$2, 3, 4, 5, 100$',
                '$\\frac{114}{5} = 22.8$',
                '$4$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Assuming the Mean Is Always Best',
            wrong: 'Student picks "mean" as the best measure for the set $\\{5, 7, 8, 9, 9, 10, 54\\}$, getting a mean of approximately $14.6$.',
            correction: 'The outlier $54$ inflates the mean far above the cluster. The median is $9$, which represents the typical value. Choose the median when outliers pull the mean away from the data cluster.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Salaries at a small company (in thousands): $35, 40, 42, 38, 45, 200$. Which measure of center better represents a typical salary?',
            steps: [
              {
                label: 'Mean',
                content: '$\\frac{35 + 40 + 42 + 38 + 45 + 200}{6} = \\frac{400}{6} \\approx 66.7$',
              },
              {
                label: 'Median',
                content: 'Sorted: $35, 38, 40, 42, 45, 200$. Median $= \\frac{40 + 42}{2} = 41$',
              },
              {
                label: 'Answer',
                content: 'The median ($41$K) better represents a typical salary. The outlier $200$K pulls the mean far above the cluster.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Data set: $\\{3, 5, 7, 6, 4, 62\\}$. Is the mean or the median a better measure of center? Justify your answer.',
            answer: 'Mean $= \\frac{87}{6} = 14.5$. Median of sorted $\\{3, 4, 5, 6, 7, 62\\} = \\frac{5 + 6}{2} = 5.5$. The outlier $62$ inflates the mean to $14.5$, which exceeds every value except the outlier. The median ($5.5$) better represents the typical value.',
          },
        ],
      },
    },
  },

  5: {
    moduleId: 'statistics',
    title: 'Outlier Affecting Mean Example #1',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Removing an outlier shifts the mean toward the remaining cluster; the direction depends on whether the outlier was above or below.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Remove high outlier',
                formula: '$\\bar{x}_{\\text{new}} < \\bar{x}_{\\text{old}}$',
                note: 'Mean decreases',
              },
              {
                label: 'Remove low outlier',
                formula: '$\\bar{x}_{\\text{new}} > \\bar{x}_{\\text{old}}$',
                note: 'Mean increases',
              },
            ],
          },
          {
            type: 'keyInsight',
            content: 'The shift magnitude depends on how far the outlier is from the mean and how many data points remain. Larger distance or fewer remaining points creates a bigger shift.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Change the Count',
            wrong: 'After removing one value from a $10$-element set, the student computes the new mean by dividing the new sum by $10$ instead of $9$.',
            correction: 'When a value is removed, the count drops by $1$. New mean $= \\frac{\\text{old sum} - \\text{removed value}}{n - 1}$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'After removing one value from a $10$-element set, the student computes the new mean by dividing the new sum by $10$ instead of $9$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'When a value is removed, the count drops by $1$. New mean $= \\frac{\\text{old sum} - \\text{removed value}}{n - 1}$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A set of $8$ values has a mean of $30$. If the value $78$ is removed, what is the new mean?',
            answer: 'Original sum $= 30 \\times 8 = 240$. New sum $= 240 - 78 = 162$. New mean $= \\frac{162}{7} \\approx 23.1$.',
          },
        ],
      },
    },
  },

  6: {
    moduleId: 'statistics',
    title: 'Outlier Affecting Mean Example #2',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Adding a new value shifts the mean toward that value -- and if the value equals the current mean, the mean stays unchanged.',
        blocks: [
          {
            type: 'formula',
            label: 'New Mean After Adding a Value',
            content: '$$\\bar{x}_{\\text{new}} = \\frac{\\bar{x}_{\\text{old}} \\times n + x_{\\text{new}}}{n + 1}$$',
          },
          {
            type: 'keyInsight',
            content: 'If the new value equals the current mean, the mean is unchanged. If the new value is above the mean, the mean increases (but not all the way to the new value). If below, the mean decreases.',
          },
          {
            type: 'trapCard',
            title: 'Averaging the Old Mean with the New Value',
            wrong: 'Mean is $40$ with $n = 5$ values. A new value of $70$ is added. Student computes $\\frac{40 + 70}{2} = 55$ as the new mean.',
            correction: 'Original sum $= 40 \\times 5 = 200$. New sum $= 200 + 70 = 270$. New mean $= \\frac{270}{6} = 45$. Use the full formula; do not average the mean with the new value.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Mean is $40$ with $n = 5$ values. A new value of $70$ is added. Student computes $\\frac{40 + 70}{2} = 55$ as the new mean.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Original sum $= 40 \\times 5 = 200$. New sum $= 200 + 70 = 270$. New mean $= \\frac{270}{6} = 45$. Use the full formula; do not average the mean with the new value.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A set of $10$ values has mean $50$. A value of $50$ is added. What is the new mean?',
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
      learn: {
        title: 'Learn',
        summary: 'The combined mean of two groups is the total sum divided by the total count -- not the average of the two means.',
        blocks: [
          {
            type: 'formula',
            label: 'Combined Mean (Weighted Average)',
            content: '$$\\bar{x}_{\\text{combined}} = \\frac{\\bar{x}_1 \\cdot n_1 + \\bar{x}_2 \\cdot n_2}{n_1 + n_2}$$',
            note: '$\\bar{x}_1, n_1$ = mean and count of group 1; $\\bar{x}_2, n_2$ = mean and count of group 2',
          },
          {
            type: 'keyInsight',
            content: 'The combined mean is **not** the simple average of the two group means unless both groups have the same size. The larger group always pulls the combined mean closer to its own mean.',
          },
          {
            type: 'trapCard',
            title: 'Averaging the Two Means',
            wrong: 'Group A mean $= 80$ ($n = 30$), Group B mean $= 60$ ($n = 10$). Student computes $\\frac{80 + 60}{2} = 70$.',
            correction: 'Combined mean $= \\frac{30 \\times 80 + 10 \\times 60}{40} = \\frac{3000}{40} = 75$. The larger group ($n = 30$) pulls the result closer to $80$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Group A mean $= 80$ ($n = 30$), Group B mean $= 60$ ($n = 10$). Student computes $\\frac{80 + 60}{2} = 70$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Combined mean $= \\frac{30 \\times 80 + 10 \\times 60}{40} = \\frac{3000}{40} = 75$. The larger group ($n = 30$) pulls the result closer to $80$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Section 1 has $15$ students with a mean score of $84$. Section 2 has $25$ students with a mean score of $76$. What is the combined mean?',
            answer: '$\\frac{84 \\times 15 + 76 \\times 25}{15 + 25} = \\frac{1260 + 1900}{40} = \\frac{3160}{40} = 79$.',
          },
        ],
      },
    },
  },

  8: {
    moduleId: 'statistics',
    title: 'What Is the Median?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The median is the middle value of a sorted data set -- resistant to outliers and the preferred center for skewed distributions.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Odd count ($n$)',
                formula: '$\\text{Median position} = \\frac{n + 1}{2}$',
                note: 'e.g. $n = 7$ -> 4th value',
              },
              {
                label: 'Even count ($n$)',
                formula: '$\\text{Median} = \\frac{x_{n/2} + x_{n/2+1}}{2}$',
                note: 'Average the two middle values',
              },
            ],
          },
          {
            type: 'text',
            content: 'To find the median: **sort** the data from least to greatest, then locate the middle value. If there is an odd number of values, the median is the single middle value. If even, average the two middle values.',
          },
          {
            type: 'keyInsight',
            content: 'The median depends only on **position**, not magnitude. Changing the largest value from $100$ to $1{,}000{,}000$ does not move the median. This positional dependence is exactly why the median resists outliers.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Sort First',
            wrong: 'Data: $12, 7, 3, 14, 9$. Student picks the middle of the unsorted list and reports the median as $3$.',
            correction: 'Sort first: $3, 7, 9, 12, 14$. The median is $9$ (3rd value), not $3$. The unsorted middle position is meaningless.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the median of $12, 7, 3, 14, 9$.',
            steps: [
              {
                label: 'Sort',
                content: '$3, 7, 9, 12, 14$',
              },
              {
                label: 'Find position',
                content: '$n = 5$ (odd) -> position $\\frac{5 + 1}{2} = 3$',
              },
              {
                label: 'Answer',
                content: 'Median $= \\boxed{9}$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the median of $21, 6, 14, 33, 18, 9, 27, 11, 25$.',
            answer: 'Sorted: $6, 9, 11, 14, 18, 21, 25, 27, 33$. $n = 9$ (odd) -> position $5$. Median $= 18$.',
          },
        ],
      },
    },
  },

  9: {
    moduleId: 'statistics',
    title: 'Finding Median from a Frequency Table',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'When data is in a frequency table, use cumulative frequency to locate the median position without listing every data point.',
        blocks: [
          {
            type: 'text',
            content: 'A **frequency table** lists each value and how many times it appears. To find the median, build a **cumulative frequency** column (running total) and scan for the row that first reaches or exceeds the median position.',
          },
          {
            type: 'keyInsight',
            content: 'Total $n = 20$ (even). Median positions: $10$th and $11$th. The cumulative frequency first reaches $10$ at the "$2$" row (cumulative $= 16$). Both positions fall in this row, so the median is $2$. The median falls in the row where cumulative frequency **first equals or exceeds** the median position.',
          },
          {
            type: 'table',
            headers: [
              'Value',
              'Frequency',
              'Cumulative Frequency',
            ],
            rows: [
              [
                '$0$',
                '$3$',
                '$3$',
              ],
              [
                '$1$',
                '$5$',
                '$8$',
              ],
              [
                '$2$',
                '$8$',
                '$16$',
              ],
              [
                '$3$',
                '$4$',
                '$20$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Taking the Median of the Frequencies',
            wrong: 'Frequencies are $3, 5, 8, 4$. Student finds the median of $\\{3, 5, 8, 4\\}$ and reports $\\frac{5 + 8}{2} = 6.5$.',
            correction: 'Frequencies tell you how many data points have each value. The median is a **data value**, not a frequency. Use cumulative frequency to locate which value occupies the median position.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Test scores: $70$ (2 students), $80$ (6 students), $90$ (5 students), $100$ (3 students). Find the median.',
            steps: [
              {
                label: 'Build cumulative',
                content: 'Cumulative: $2, 8, 13, 16$ -> total $n = 16$',
              },
              {
                label: 'Median positions',
                content: 'Even $n$: positions $8$ and $9$',
              },
              {
                label: 'Locate',
                content: 'Position $8$ -> score $80$ (cumulative reaches $8$). Position $9$ -> score $90$ (cumulative reaches $13$).',
              },
              {
                label: 'Answer',
                content: 'Median $= \\frac{80 + 90}{2} = \\boxed{85}$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Value $1$ (freq $4$), value $2$ (freq $7$), value $3$ (freq $3$), value $4$ (freq $6$). Find the median.',
            answer: 'Cumulative: $4, 11, 14, 20$. Total $n = 20$ (even). Positions $10$ and $11$: both fall in the value-$2$ row (cumulative reaches $11$). Median $= 2$.',
          },
        ],
      },
    },
  },

  10: {
    moduleId: 'statistics',
    title: 'Simple Calculating Median Example #1',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The median of an odd-count list is the single middle value after sorting.',
        blocks: [
          {
            type: 'formula',
            label: 'Odd-Count Median Position',
            content: '$$\\text{Median position} = \\frac{n + 1}{2}$$',
          },
          {
            type: 'keyInsight',
            content: 'Sorting is non-negotiable. The most frequent error on median problems is reading the middle value of the **unsorted** list.',
          },
          {
            type: 'trapCard',
            title: 'Picking the Middle of the Unsorted List',
            wrong: 'Data: $8, 3, 12, 5, 10$. Student picks $12$ (the 3rd element in original order) as the median.',
            correction: 'Sort first: $3, 5, 8, 10, 12$. The median is the 3rd sorted value: $8$, not $12$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Data: $8, 3, 12, 5, 10$. Student picks $12$ (the 3rd element in original order) as the median.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Sort first: $3, 5, 8, 10, 12$. The median is the 3rd sorted value: $8$, not $12$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
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
      learn: {
        title: 'Learn',
        summary: 'DESMOS computes the median instantly with its built-in median() function -- no manual sorting needed.',
        blocks: [
          {
            type: 'formula',
            label: 'DESMOS Median Syntax',
            content: '$$\\text{median}([x_1, x_2, \\ldots, x_n])$$',
          },
          {
            type: 'text',
            content: 'The DESMOS graphing calculator has a built-in $\\text{median}()$ function. Enter the data as a list and DESMOS handles sorting and position-finding automatically.',
          },
          {
            type: 'keyInsight',
            content: 'Using DESMOS eliminates the two most common median errors: forgetting to sort and miscounting the middle position.',
          },
          {
            type: 'tip',
            content: 'If a problem provides raw numbers, use $\\text{median}(L)$ in DESMOS. If the data comes in a frequency table, DESMOS cannot directly handle grouped data -- use the cumulative-frequency scan method instead.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the median of $3, 7, 1, 9, 5$ using DESMOS.',
            steps: [
              { label: 'Enter command', content: 'Type $\\text{median}([3, 7, 1, 9, 5])$ in DESMOS.' },
              { label: 'Result', content: 'DESMOS returns $5$. Sorted: $1, 3, 5, 7, 9$ — the middle value is $5$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'What does $\\text{median}([2, 9, 4, 7, 1, 6])$ return in DESMOS?',
            answer: 'DESMOS returns $5.5$. Sorted: $1, 2, 4, 6, 7, 9$. Even count -> $\\frac{4 + 6}{2} = 5.5$.',
          },
        ],
      },
    },
  },

  12: {
    moduleId: 'statistics',
    title: 'Simple Calculating Median Example #2',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'When a data set has an even count, the median is the average of the two middle values after sorting.',
        blocks: [
          {
            type: 'formula',
            label: 'Even-Count Median',
            content: '$$\\text{Median} = \\frac{x_{n/2} + x_{n/2+1}}{2}$$',
            note: 'where $x$ values are in sorted order',
          },
          {
            type: 'keyInsight',
            content: 'The even-count median may not equal any actual data value. For $\\{2, 4, 6, 8\\}$, the median is $5$, which does not appear in the set.',
          },
          {
            type: 'trapCard',
            title: 'Taking Only One Middle Value',
            wrong: 'For $\\{3, 7, 12, 18, 25, 30\\}$ ($n = 6$), student takes only the 3rd value ($12$) and reports median $= 12$.',
            correction: 'For even $n$, average positions $3$ and $4$: $\\frac{12 + 18}{2} = 15$. Both middle values are needed.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'For $\\{3, 7, 12, 18, 25, 30\\}$ ($n = 6$), student takes only the 3rd value ($12$) and reports median $= 12$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'For even $n$, average positions $3$ and $4$: $\\frac{12 + 18}{2} = 15$. Both middle values are needed.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the median of $5, 11, 14, 20, 26, 33, 41, 50$.',
            answer: 'Already sorted. $n = 8$ (even). Average positions $4$ and $5$: $\\frac{20 + 26}{2} = 23$.',
          },
        ],
      },
    },
  },

  13: {
    moduleId: 'statistics',
    title: 'Simple Calculating Median Example #2 (DESMOS Method)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'For even-count lists, DESMOS automatically averages the two middle values when computing the median.',
        blocks: [
          {
            type: 'formula',
            label: 'Mean–Median Comparison in DESMOS',
            content: '$$\\text{mean}(L) - \\text{median}(L)$$',
          },
          {
            type: 'text',
            content: 'DESMOS handles even-count medians seamlessly -- enter the list and call $\\text{median}()$. It sorts, identifies the two middle values, and averages them in a single step.',
          },
          {
            type: 'keyInsight',
            content: 'Combine $\\text{median}()$ with $\\text{mean}()$ for multi-step problems: $\\text{mean}(L) - \\text{median}(L)$ directly computes the difference between mean and median, useful for identifying skew.',
          },
          {
            type: 'tip',
            content: 'If a question asks "Is the mean greater than, less than, or equal to the median?", compute both in DESMOS using $\\text{mean}(L)$ and $\\text{median}(L)$, then compare the two outputs.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Use DESMOS to determine whether the mean or median is greater for the data set $1, 2, 3, 4, 100$.',
            steps: [
              { label: 'Compute both', content: '$\\text{mean}([1,2,3,4,100]) = 22$; $\\text{median}([1,2,3,4,100]) = 3$.' },
              { label: 'Compare', content: 'Mean ($22$) $>$ Median ($3$). The outlier $100$ pulls the mean right, indicating right skew.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A student enters $\\text{median}([10, 20, 30, 40, 50, 60])$ in DESMOS. What value is returned?',
            answer: 'DESMOS returns $35$. Average of the 3rd and 4th sorted values: $\\frac{30 + 40}{2} = 35$.',
          },
        ],
      },
    },
  },

  14: {
    moduleId: 'statistics',
    title: 'Finding Median from Frequency Table',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Cumulative frequency provides a running total that lets you jump straight to the median position in a frequency table.',
        blocks: [
          {
            type: 'keyInsight',
            content: '$n = 20$ (even). Median positions: $10$ and $11$. Cumulative frequency first passes $10$ at the "$80$" row (cumulative $= 15$). Both positions fall in this row, so the median is $80$.',
          },
          {
            type: 'table',
            headers: [
              'Score',
              'Frequency',
              'Cumulative Frequency',
            ],
            rows: [
              [
                '$60$',
                '$2$',
                '$2$',
              ],
              [
                '$70$',
                '$5$',
                '$7$',
              ],
              [
                '$80$',
                '$8$',
                '$15$',
              ],
              [
                '$90$',
                '$3$',
                '$18$',
              ],
              [
                '$100$',
                '$2$',
                '$20$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Confusing the Value Column with the Frequency Column',
            wrong: 'Student finds the median of the frequency column $\\{2, 5, 8, 3, 2\\}$ instead of the data values, reporting $\\frac{5 + 8}{2} = 6.5$.',
            correction: 'Frequencies tell you the **count** of each value. Use cumulative frequency to identify which **data value** occupies the median position.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Student finds the median of the frequency column $\\{2, 5, 8, 3, 2\\}$ instead of the data values, reporting $\\frac{5 + 8}{2} = 6.5$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Frequencies tell you the **count** of each value. Use cumulative frequency to identify which **data value** occupies the median position.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Value $1$ (freq $3$), value $2$ (freq $4$), value $3$ (freq $5$), value $4$ (freq $3$). Find the median.',
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
      learn: {
        title: 'Learn',
        summary: 'Comparing two data sets requires computing the mean and median of each, then analyzing the differences to reveal skewness.',
        blocks: [
          {
            type: 'text',
            content: 'The relationship between mean and median reveals the shape of a distribution. Two data sets can share the same mean but differ in median, or vice versa -- computing both is essential for a complete comparison.',
          },
          {
            type: 'keyInsight',
            content: 'Two data sets with identical means can have very different medians. Identical means do not guarantee identical distributions -- spread and skew can differ dramatically.',
          },
          {
            type: 'table',
            headers: [
              'Relationship',
              'Shape',
            ],
            rows: [
              [
                'Mean $\\approx$ Median',
                'Roughly symmetric',
              ],
              [
                'Mean $>$ Median',
                'Skewed right (tail stretches right)',
              ],
              [
                'Mean $<$ Median',
                'Skewed left (tail stretches left)',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Comparing Means Without Checking Medians',
            wrong: 'Student concludes "Data Set A is larger" based solely on the mean, ignoring that Set A has a high outlier inflating the mean.',
            correction: 'Compare **both** mean and median. If the mean is much larger than the median in one set, an outlier is inflating the mean. The median may give a more accurate comparison.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Student concludes "Data Set A is larger" based solely on the mean, ignoring that Set A has a high outlier inflating the mean.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Compare **both** mean and median. If the mean is much larger than the median in one set, an outlier is inflating the mean. The median may give a more accurate comparison.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Set X: $\\{5, 5, 5, 5, 30\\}$. Set Y: $\\{8, 9, 10, 11, 12\\}$. Which set has the larger mean? Which has the larger median?',
            answer: 'Set X: mean $= \\frac{50}{5} = 10$, median $= 5$. Set Y: mean $= \\frac{50}{5} = 10$, median $= 10$. Same mean, but Set Y has the larger median ($10 > 5$). Set X is right-skewed.',
          },
        ],
      },
    },
  },

  16: {
    moduleId: 'statistics',
    title: 'What Is the Mode?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The mode is the most frequently occurring value -- the only measure of center that works with categorical data.',
        blocks: [
          {
            type: 'text',
            content: 'The **mode** is the value that appears most often. Unlike the mean and median, the mode works with **categorical data** (e.g., favorite color, type of pet) as well as numerical data. A data set can have one mode (unimodal), two modes (bimodal), or no mode at all.',
          },
          {
            type: 'keyInsight',
            content: 'In a histogram or bar chart, the mode corresponds to the **tallest bar**. In a frequency table, it is the value with the highest frequency. The mode is the only measure that can appear more than once and the only one valid for non-numerical data.',
          },
          {
            type: 'table',
            headers: [
              'Type',
              'Example',
              'Mode(s)',
            ],
            rows: [
              [
                'Unimodal',
                '$\\{2, 3, 3, 5, 7\\}$',
                '$3$',
              ],
              [
                'Bimodal',
                '$\\{1, 1, 4, 6, 6\\}$',
                '$1$ and $6$',
              ],
              [
                'No mode',
                '$\\{1, 2, 3, 4\\}$',
                'None (all equal freq)',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Confusing Mode with Largest Value',
            wrong: 'In $\\{3, 7, 7, 12, 12, 12, 15\\}$, student says "the mode is $15$ because it is the largest value."',
            correction: 'The mode is the most **frequent** value, not the largest. Here $12$ appears $3$ times, so mode $= 12$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the mode of $\\{4, 7, 2, 7, 3, 4, 7, 9\\}$.',
            steps: [
              {
                label: 'Count each value',
                content: '$2$: once, $3$: once, $4$: twice, $7$: three times, $9$: once',
              },
              {
                label: 'Answer',
                content: 'Mode $= \\boxed{7}$ (highest frequency: $3$ times)',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Data set: $\\{2, 2, 5, 5, 9\\}$. Is there a mode? If so, what is it?',
            answer: 'Both $2$ and $5$ appear twice, and $9$ appears once. The data is **bimodal** with modes $2$ and $5$. "No mode" applies only when every value has equal frequency.',
          },
        ],
      },
    },
  },

  17: {
    moduleId: 'statistics',
    title: 'What Is the Range?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The range is the simplest measure of spread -- the difference between the maximum and minimum values.',
        blocks: [
          {
            type: 'formula',
            label: 'Range',
            content: '$$\\text{Range} = \\text{max} - \\text{min}$$',
          },
          {
            type: 'text',
            content: 'The range tells you the **total span** of the data. It is fast to compute but very sensitive to outliers -- a single extreme value can inflate the range dramatically. Unlike the IQR (interquartile range), the range depends on only the two most extreme values.',
          },
          {
            type: 'keyInsight',
            content: 'Removing or changing a data point only affects the range if that point is the current maximum or minimum. Removing any interior value leaves the range unchanged.',
          },
          {
            type: 'trapCard',
            title: 'Range as an Interval',
            wrong: 'Student writes "the range is from $7$ to $31$" as their final answer on the test.',
            correction: 'The range is a **single number**: $31 - 7 = 24$, not an interval. On the SAT, the range is always the difference, reported as one value.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'The range of a data set is $18$ and the minimum value is $7$. What is the maximum?',
            steps: [
              {
                label: 'Rearrange',
                content: '$\\text{max} = \\text{min} + \\text{range}$',
              },
              {
                label: 'Substitute',
                content: '$\\text{max} = 7 + 18 = \\boxed{25}$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Data set: $\\{-3, 8, 15, -7, 22\\}$. What is the range?',
            answer: 'Max $= 22$, Min $= -7$. Range $= 22 - (-7) = 29$.',
          },
        ],
      },
    },
  },

  18: {
    moduleId: 'statistics',
    title: 'Simple Calculating Range Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Computing the range requires scanning the data for the maximum and minimum, then subtracting.',
        blocks: [
          {
            type: 'formula',
            label: 'Range',
            content: '$$\\text{Range} = \\text{max} - \\text{min}$$',
          },
          {
            type: 'text',
            content: 'With sorted data, the max and min are the last and first values. With unsorted data, scan each value carefully. Pay special attention to negative numbers -- a negative minimum yields a larger range than expected.',
          },
          {
            type: 'keyInsight',
            content: 'The range depends on only two values. Everything between the maximum and minimum is irrelevant -- this makes the range fast to compute but a poor descriptor of overall spread.',
          },
          {
            type: 'trapCard',
            title: 'Subtracting in the Wrong Order',
            wrong: 'Min $= 7$, Max $= 25$. Student computes $7 - 25 = -18$ and writes the range as $-18$.',
            correction: 'Range is always $\\text{max} - \\text{min}$, which is always non-negative. Here: $25 - 7 = 18$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Min $= 7$, Max $= 25$. Student computes $7 - 25 = -18$ and writes the range as $-18$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Range is always $\\text{max} - \\text{min}$, which is always non-negative. Here: $25 - 7 = 18$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the range of $\\{-5, 3, 17, -12, 8, 21\\}$.',
            answer: 'Max $= 21$, Min $= -12$. Range $= 21 - (-12) = 33$.',
          },
        ],
      },
    },
  },

  19: {
    moduleId: 'statistics',
    title: 'Comparing Median & Range of Two Data Sets',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Comparing two data sets requires evaluating both center (median) and spread (range) to draw complete conclusions.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Median',
                formula: '$\\text{middle value(s) after sorting}$',
                note: 'Measures center',
              },
              {
                label: 'Range',
                formula: '$\\text{max} - \\text{min}$',
                note: 'Measures spread',
              },
            ],
          },
          {
            type: 'text',
            content: 'The **median** reveals which set has a higher typical value, while the **range** reveals which set is more spread out. A complete comparison addresses both center and spread -- they are independent measures.',
          },
          {
            type: 'keyInsight',
            content: 'Two data sets can have the same median but different ranges, or the same range but different medians. Both measures are needed for a complete comparison.',
          },
          {
            type: 'trapCard',
            title: 'Assuming Greater Median Implies Greater Range',
            wrong: 'Student sees Set A has median $15$ and Set B has median $10$, then concludes Set A must also have the greater range.',
            correction: 'Center and spread are independent. Compute each measure separately: median from the middle position, range from max $-$ min.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Student sees Set A has median $15$ and Set B has median $10$, then concludes Set A must also have the greater range.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Center and spread are independent. Compute each measure separately: median from the middle position, range from max $-$ min.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Set P: $\\{4, 8, 12, 16, 20\\}$. Set Q: $\\{9, 10, 11, 12, 13\\}$. Which has the greater median? Which has the greater range?',
            answer: 'Set P: median $= 12$, range $= 16$. Set Q: median $= 11$, range $= 4$. Set P has both the greater median and the greater range.',
          },
        ],
      },
    },
  },

  20: {
    moduleId: 'statistics',
    title: 'What Is Standard Deviation?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Standard deviation measures how spread out values are around the mean -- larger SD means more spread.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Add constant $c$ to all values',
                formula: '$\\text{SD}_{\\text{new}} = \\text{SD}_{\\text{old}}$',
                note: 'SD unchanged',
              },
              {
                label: 'Multiply all values by $k$',
                formula: '$\\text{SD}_{\\text{new}} = |k| \\cdot \\text{SD}_{\\text{old}}$',
                note: 'SD scales by $|k|$',
              },
              {
                label: 'All values identical',
                formula: '$\\text{SD} = 0$',
                note: 'Zero spread',
              },
            ],
          },
          {
            type: 'text',
            content: '**Standard deviation** ($\\sigma$ or $s$) quantifies the typical distance of data points from the mean. A small SD means data clusters tightly around the mean; a large SD means data is scattered far from it. The SAT never requires computing SD by hand -- it tests conceptual understanding only.',
          },
          {
            type: 'keyInsight',
            content: 'Adding a constant shifts every value equally, so distances from the mean stay the same and SD is unchanged. Multiplying by a constant stretches or compresses the distribution, scaling all distances -- and SD -- by $|k|$.',
          },
          {
            type: 'trapCard',
            title: 'Equal Means Imply Equal Spread',
            wrong: 'Student sees $\\{48, 49, 50, 51, 52\\}$ and $\\{10, 30, 50, 70, 90\\}$, both with mean $50$, and says "same mean, so same SD."',
            correction: 'Equal means do not imply equal spread. The first set has values within $2$ of the mean; the second has values within $40$. The second set has a much larger SD.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Data set A: $\\{10, 10, 10, 10, 10\\}$. Data set B: $\\{6, 8, 10, 12, 14\\}$. Which has a larger standard deviation?',
            steps: [
              {
                label: 'Set A',
                content: 'All values are $10$. Every value is $0$ away from the mean. SD $= 0$.',
              },
              {
                label: 'Set B',
                content: 'Mean $= 10$. Distances from mean: $4, 2, 0, 2, 4$. SD $> 0$.',
              },
              {
                label: 'Answer',
                content: 'Set B has the larger standard deviation.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A data set has SD $= 10$. If every value is divided by $5$ and then $100$ is added, what is the new SD?',
            answer: 'Divide by $5$: SD $= \\frac{10}{5} = 2$. Add $100$: SD unchanged. New SD $= 2$.',
          },
        ],
      },
    },
  },

  21: {
    moduleId: 'statistics',
    title: 'Simple Standard Deviation Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'SD problems on the SAT test conceptual reasoning -- compare how tightly data clusters around the mean without calculating.',
        blocks: [
          {
            type: 'formula',
            label: 'Zero-SD Condition',
            content: '$$\\text{SD} = 0 \\iff \\text{all values are identical}$$',
          },
          {
            type: 'text',
            content: 'To compare standard deviations without calculating, examine the **distances from the mean** in each set. A tall, narrow histogram has a small SD; a flat, wide one has a large SD.',
          },
          {
            type: 'keyInsight',
            content: 'SD $= 0$ only when every value in the set is identical. Any variation at all makes SD positive. The greater the variation, the larger the SD.',
          },
          {
            type: 'trapCard',
            title: 'Same Center Does Not Mean Same Spread',
            wrong: 'Two dot plots are both centered at $50$. Student concludes "same center, so same SD" without examining the clustering.',
            correction: 'Center (mean) and spread (SD) are independent. Two sets can share the same mean but have wildly different standard deviations.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Two dot plots are both centered at $50$. Student concludes "same center, so same SD" without examining the clustering.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Center (mean) and spread (SD) are independent. Two sets can share the same mean but have wildly different standard deviations.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Set X: $\\{5, 5, 5, 5\\}$. Set Y: $\\{3, 5, 5, 7\\}$. Which has a larger SD?',
            answer: 'Set X: all identical, SD $= 0$. Set Y: values vary around $5$, SD $> 0$. Set Y has the larger SD.',
          },
        ],
      },
    },
  },

  22: {
    moduleId: 'statistics',
    title: 'Complex Standard Deviation Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Complex SD problems involve transformations or adding/removing values -- apply the transformation rules to determine how SD changes.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Add constant $c$ to each value',
                formula: '$\\text{SD}_{\\text{new}} = \\text{SD}_{\\text{old}}$',
                note: 'Unchanged',
              },
              {
                label: 'Multiply each value by $k$',
                formula: '$\\text{SD}_{\\text{new}} = |k| \\cdot \\text{SD}_{\\text{old}}$',
                note: 'Scales by $|k|$',
              },
            ],
          },
          {
            type: 'text',
            content: '"Adding $5$ **to every** value" (a transformation) keeps SD the same because all distances from the mean are preserved. "Adding **the value** $5$ to the data set" (a new data point) changes SD depending on how far $5$ is from the current mean. These are fundamentally different operations.',
          },
          {
            type: 'keyInsight',
            content: 'When a new value is added: if it equals the mean, SD decreases slightly. If it is far from the mean, SD increases. The farther the new value is from the mean, the larger the increase in SD.',
          },
          {
            type: 'trapCard',
            title: 'Confusing "Add to Each Value" with "Add a New Value"',
            wrong: '"Adding $5$ to the data set" -- student assumes SD is unchanged because "adding a constant does not change SD."',
            correction: '"Adding $5$ to each value" leaves SD unchanged. "Adding the value $5$ as a new data point" changes SD depending on how far $5$ is from the current mean. Read the wording carefully.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '"Adding $5$ to the data set" -- student assumes SD is unchanged because "adding a constant does not change SD."',
            steps: [
              {
                label: 'Correct approach',
                content: '"Adding $5$ to each value" leaves SD unchanged. "Adding the value $5$ as a new data point" changes SD depending on how far $5$ is from the current mean. Read the wording carefully.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A data set has SD $= 6$. Every value is multiplied by $-2$ and then $50$ is subtracted. What is the new SD?',
            answer: 'Multiply by $-2$: SD $= |-2| \\times 6 = 12$. Subtract $50$: SD unchanged. New SD $= 12$.',
          },
        ],
      },
    },
  },

  23: {
    moduleId: 'statistics',
    title: 'What Is Margin of Error?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Margin of error measures the uncertainty in a sample estimate -- it shrinks as sample size grows, following a square-root law.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Confidence interval',
                formula: '$$\\text{sample statistic} \\pm \\text{MOE}$$',
                note: 'True value is plausibly within this range',
              },
              {
                label: 'Quick MOE estimate',
                formula: '$$\\text{MOE} \\approx \\frac{1}{\\sqrt{n}}$$',
                note: 'For proportions near $50\\%$ at $95\\%$ confidence',
              },
              {
                label: 'Halving MOE',
                formula: '$$n_{\\text{new}} = 4 \\times n_{\\text{old}}$$',
                note: 'Quadruple $n$ to halve MOE',
              },
            ],
          },
          {
            type: 'text',
            content: 'When you survey a sample instead of the whole population, your result has uncertainty. The **margin of error** (MOE) defines a range around your sample statistic: the true population value is likely within $\\pm$ MOE of the sample result.',
          },
          {
            type: 'keyInsight',
            content: 'Larger sample -> smaller MOE. But the relationship follows a square-root law: doubling $n$ reduces MOE by only $\\sqrt{2} \\approx 1.41$, not by $2$. To halve the MOE, you must **quadruple** the sample size.',
          },
          {
            type: 'trapCard',
            title: 'Overgeneralizing Beyond the Sample',
            wrong: '"$55\\%$ of all Americans support the proposal" -- but the survey only polled residents of Ohio.',
            correction: 'Survey results generalize only to the **sampled population**. A poll of Ohio voters supports claims about Ohio voters, not all Americans.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A poll of $400$ voters finds $62\\%$ support a new policy, with a margin of error of $5\\%$. Which is the best interpretation?',
            steps: [
              {
                label: 'Confidence interval',
                content: '$62\\% \\pm 5\\% = [57\\%, 67\\%]$',
              },
              {
                label: 'Evaluate',
                content: 'The true proportion of support among the polled population is likely between $57\\%$ and $67\\%$.',
              },
              {
                label: 'Best answer',
                content: 'Choose the statement that says "between $57\\%$ and $67\\%$ of voters in the polled population support the policy."',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A survey finds $72\\%$ support with MOE $= 4\\%$. Is the claim "at least $67\\%$ support the proposal" supported by the data?',
            answer: 'Confidence interval: $[68\\%, 76\\%]$. The lowest plausible value is $68\\%$, which exceeds $67\\%$. Yes, the claim is supported.',
          },
        ],
      },
    },
  },

  24: {
    moduleId: 'statistics',
    title: 'Simple Margin of Error Example #1',
    sections: {
      learn: {
        title: 'Learn',
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
            content: 'The confidence interval defines the range of plausible values for the true population parameter. Any claim within this interval is supported by the data; any claim outside it is not.',
          },
          {
            type: 'keyInsight',
            content: 'On the SAT, the correct interpretation is always the **narrowest valid claim** -- it stays within the confidence interval and applies only to the population that was actually sampled.',
          },
          {
            type: 'trapCard',
            title: 'Treating the Point Estimate as Exact',
            wrong: '"Exactly $45\\%$ of the population prefers option A" -- student treats the sample proportion as the population truth.',
            correction: 'The sample proportion $45\\%$ is an estimate. With MOE $= 3\\%$, the true value is plausibly between $42\\%$ and $48\\%$. State a range, not an exact figure.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '"Exactly $45\\%$ of the population prefers option A" -- student treats the sample proportion as the population truth.',
            steps: [
              {
                label: 'Correct approach',
                content: 'The sample proportion $45\\%$ is an estimate. With MOE $= 3\\%$, the true value is plausibly between $42\\%$ and $48\\%$. State a range, not an exact figure.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
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
      learn: {
        title: 'Learn',
        summary: 'Increasing sample size reduces MOE, but the relationship follows a square-root law with diminishing returns.',
        blocks: [
          {
            type: 'formula',
            label: 'MOE and Sample Size',
            content: '$$\\text{MOE} \\propto \\frac{1}{\\sqrt{n}}$$',
            note: 'Doubling $n$ reduces MOE by a factor of $\\sqrt{2} \\approx 1.41$, not $2$.',
          },
          {
            type: 'keyInsight',
            content: 'There are diminishing returns to increasing sample size. Going from $n = 100$ to $n = 400$ halves the MOE, but going from $n = 400$ to $n = 1{,}600$ is needed to halve it again.',
          },
          {
            type: 'table',
            headers: [
              'Sample Size ($n$)',
              'Approximate MOE',
            ],
            rows: [
              [
                '$100$',
                '$\\frac{1}{\\sqrt{100}} = 10\\%$',
              ],
              [
                '$400$',
                '$\\frac{1}{\\sqrt{400}} = 5\\%$',
              ],
              [
                '$1{,}600$',
                '$\\frac{1}{\\sqrt{1600}} = 2.5\\%$',
              ],
              [
                '$10{,}000$',
                '$\\frac{1}{\\sqrt{10000}} = 1\\%$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Linear Thinking About Sample Size',
            wrong: 'Student thinks doubling the sample from $400$ to $800$ halves the MOE from $5\\%$ to $2.5\\%$.',
            correction: 'Doubling $n$ reduces MOE by factor $\\sqrt{2} \\approx 1.41$, giving MOE $\\approx 3.5\\%$, not $2.5\\%$. To actually halve MOE, quadruple $n$ to $1{,}600$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Student thinks doubling the sample from $400$ to $800$ halves the MOE from $5\\%$ to $2.5\\%$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Doubling $n$ reduces MOE by factor $\\sqrt{2} \\approx 1.41$, giving MOE $\\approx 3.5\\%$, not $2.5\\%$. To actually halve MOE, quadruple $n$ to $1{,}600$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A survey of $n = 900$ has MOE $= 3.3\\%$. What sample size is needed for MOE $= 1.1\\%$?',
            answer: 'Reduction factor $k = \\frac{3.3}{1.1} = 3$. New $n = 3^2 \\times 900 = 9 \\times 900 = 8{,}100$.',
          },
        ],
      },
    },
  },
};
