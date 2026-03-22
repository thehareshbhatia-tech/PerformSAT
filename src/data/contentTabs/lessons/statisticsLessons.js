export const statisticsLessonTabs = {
  1: {
    moduleId: 'statistics',
    title: 'What is the Mean?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The mean (average) is the sum of all values divided by the count. On the SAT, mean questions often ask you to find a missing value or understand how changes affect the average.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Mean on the SAT → CB tests two patterns: (1) straightforward "find the mean" (just sum and divide), and (2) "find a missing value given the mean" (reverse the formula: missing value = mean × count − sum of known values). Decision rule: if the mean is given and a value is missing, multiply first, then subtract.',
          },
          {
            type: 'formula',
            label: 'Mean Formula',
            content: '$$\\text{Mean} = \\frac{\\text{Sum of all values}}{\\text{Number of values}}$$',
            note: 'Reverse: Sum = Mean × Count. Use this to find missing values.',
          },
          {
            type: 'text',
            content: 'The mean is the most common measure of center on the SAT. It uses every data point in the calculation, which makes it **sensitive to outliers** — one extreme value can shift the mean significantly.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Count All Values',
            wrong: 'Data set: $6, 8, 16, 4, 17, 26, 8, 5, 5, 5$. Student adds to get $100$ but divides by $9$ instead of $10$.',
            correction: 'CB trap: miscounting. There are $10$ values, not $9$. Mean $= 100 \\div 10 = 10$. Decision rule: count the values BEFORE adding. Write the count first, then compute the sum.',
          },
          {
            type: 'strategyCard',
            title: 'Reverse the Mean Formula',
            icon: '🔄',
            timing: '~10s',
            content: 'When given "the mean of $5$ numbers is $12$, and four of them are $8, 10, 14, 15$, what is the fifth?" → Total sum $= 12 \\times 5 = 60$. Known sum $= 8 + 10 + 14 + 15 = 47$. Missing value $= 60 - 47 = 13$. Always start with Sum = Mean × Count.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The mean of $6$ numbers is $15$. Five of the numbers are $12, 18, 9, 20, 14$. What is the sixth number?',
            steps: [
              { label: 'Total sum', content: 'Sum $= 15 \\times 6 = 90$.' },
              { label: 'Known sum', content: '$12 + 18 + 9 + 20 + 14 = 73$.' },
              { label: 'Missing value', content: '$90 - 73 = 17$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A data set has values $6, 8, 16, 4, 17, 26, 8, 5, 5, 5$. What is the mean?',
            answer: 'Sum $= 100$. Count $= 10$. Mean $= 100 \\div 10 = 10$.',
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
        summary: 'From the video: Mean = sum of all data values ÷ quantity of data values. For the set {6, 8, 16, 4, 17, 26, 8, 5, 5, 5}, the sum is 100 and there are 10 values, so the mean is 10.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Simple mean calculation on the SAT → just add all values and divide by the count. From the video: the key is careful arithmetic — don\'t miscount values or make addition errors. Decision rule: write out the sum step by step, count values before dividing.',
          },
          {
            type: 'trapCard',
            title: 'Addition Error with Many Values',
            wrong: 'Student adds $6 + 8 + 16 + 4 + 17 + 26 + 8 + 5 + 5 + 5$ and gets $95$ instead of $100$.',
            correction: 'CB trap: arithmetic slip with long sums. Group values to check: $(6+4) + (8+8) + (5+5+5) + 16 + 17 + 26 = 10 + 16 + 15 + 16 + 17 + 26 = 100$. Decision rule: group into pairs that sum to round numbers.',
          },
          {
            type: 'strategyCard',
            title: 'Grouping Trick for Fast Addition',
            icon: '➕',
            timing: '~8s',
            content: 'From the video: when adding many values, look for pairs that make round numbers: $6 + 4 = 10$, $8 + 8 = 16$, $5 + 5 + 5 = 15$. Then add the groups. This reduces errors and speeds up computation.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the mean of: $6, 8, 16, 4, 17, 26, 8, 5, 5, 5$.',
            steps: [
              { label: 'Count', content: '$10$ values.' },
              { label: 'Sum', content: '$6 + 8 + 16 + 4 + 17 + 26 + 8 + 5 + 5 + 5 = 100$.' },
              { label: 'Divide', content: 'Mean $= 100 \\div 10 = 10$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the mean of $4, 9, 11, 16$.',
            answer: 'Sum $= 40$, Count $= 4$. Mean $= 40/4 = 10$.',
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
        summary: 'From the video: type mean( followed by all values separated by commas) into DESMOS. It returns the answer instantly — no manual arithmetic needed.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'DESMOS mean function → on the digital SAT, type $\\text{mean}(6, 8, 16, 4, 17, 26, 8, 5, 5, 5)$ and DESMOS returns $10$ immediately. Decision rule: for ANY mean calculation, DESMOS is faster and error-free.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting a Value in DESMOS',
            wrong: 'Student types $\\text{mean}(6, 8, 16, 4, 17, 26, 8, 5, 5)$ — missing the last $5$ — and gets the wrong answer.',
            correction: 'CB trap: transcription error. Count your commas: $n$ values need $n - 1$ commas. Double-check the count matches the problem.',
          },
          {
            type: 'strategyCard',
            title: 'DESMOS mean() Function',
            icon: '💻',
            timing: '~5s',
            content: 'From the video: type mean( then enter all values comma-separated, then close ). DESMOS computes instantly. This eliminates all addition and division errors. Use this for every mean question on the digital SAT.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Use DESMOS to find the mean of $3, 7, 12, 8, 20$.',
            steps: [
              { label: 'Type in DESMOS', content: '$\\text{mean}(3, 7, 12, 8, 20)$.' },
              { label: 'Read result', content: 'DESMOS returns $10$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'What would you type into DESMOS to find the mean of $3, 7, 12, 8, 20$?',
            answer: '$\\text{mean}(3, 7, 12, 8, 20)$. DESMOS returns $10$.',
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
        summary: 'An outlier pulls the mean in its direction — high outlier increases the mean, low outlier decreases it. The median is resistant to outliers.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Outlier effect on the SAT → CB tests whether you understand the DIRECTION of the shift without needing to calculate. From the videos: if data set Y is data set X plus one large extra value, the mean of Y > mean of X — you can answer this conceptually in seconds. Decision rule: outlier pulls the mean toward itself; median barely moves.',
          },
          {
            type: 'text',
            content: 'From the video: sea turtle nests had $149, 144, 148, 136, 139$ eggs. Adding a 6th nest with only $121$ eggs (a low outlier) pulls the mean downward. The mean decreases because the new value is below the original mean. You don\'t need to calculate — just know the direction.',
          },
          {
            type: 'trapCard',
            title: 'Assuming Outliers Affect the Median Too',
            wrong: 'Student says both the mean AND median change significantly when one extreme value is added.',
            correction: 'CB trap: applying the outlier rule to the wrong statistic. The mean is sensitive to outliers — it shifts toward the extreme value. The median is RESISTANT — it depends only on the middle position, so one extreme value barely changes it. Decision rule: outlier → mean moves, median stays (approximately).',
          },
          {
            type: 'strategyCard',
            title: 'Conceptual Outlier Answer — No Calculation',
            icon: '🧠',
            timing: '~5s',
            content: 'From the video: when the SAT asks "how does adding [extreme value] affect the mean?" you can answer without computing. Is the new value above the old mean? Mean goes up. Below? Mean goes down. That\'s the answer. Save calculation for verification only.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Data set X: $149, 144, 148, 136, 139$. Data set Y adds the value $121$. How does the mean of Y compare to the mean of X?',
            steps: [
              { label: 'Conceptual check', content: 'The original values are all in the $130$-$150$ range. Adding $121$ (below all values) will pull the mean down.' },
              { label: 'Answer', content: 'Mean of Y < Mean of X. No calculation needed.' },
              { label: 'Verify', content: 'Mean of X $= 716/5 = 143.2$. Mean of Y $= 837/6 = 139.5$ ✓.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A class of $20$ students has a mean test score of $78$. A new student scores $100$. Does the mean increase, decrease, or stay the same?',
            answer: 'The new score ($100$) is above the current mean ($78$), so the mean increases.',
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
        summary: 'From the video: data set Y = data set X plus one additional large value. Since the new value is above the existing mean, it pulls the mean of Y upward. You can reason this without computing.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Outlier comparison on the SAT → from the video: when one data set is another plus an extra value, just check if the extra value is above or below the original mean. Above → new mean is higher. Below → new mean is lower. Decision rule: compare the new value to the old mean — that tells you the direction.',
          },
          {
            type: 'trapCard',
            title: 'Calculating Instead of Reasoning',
            wrong: 'Student spends 2 minutes computing both means when the question only asks which is larger.',
            correction: 'CB trap: wasting time on unnecessary calculation. The question asks for a COMPARISON, not exact values. If the added value is above the old mean, the new mean must be higher. Save time by reasoning directionally.',
          },
          {
            type: 'strategyCard',
            title: 'DESMOS Verification Only',
            icon: '✅',
            timing: '~10s',
            content: 'From the video: use DESMOS to verify your conceptual answer. Type mean(original values) and mean(all values) to confirm. But answer the comparison question first without computing — then check if you\'re unsure.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Set A: $10, 12, 14, 16, 18$. Set B adds $40$ to Set A. Which has a larger mean?',
            steps: [
              { label: 'Mean of A', content: '$70/5 = 14$.' },
              { label: 'Compare', content: '$40 > 14$, so adding it pulls the mean up.' },
              { label: 'Answer', content: 'Set B has the larger mean.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Set A: $4, 7, 9, 12, 8$. Set B: $4, 7, 9, 12, 8, 30$. Which set has the larger mean?',
            answer: 'Mean of A $= 40/5 = 8$. The added value $30 > 8$, so Set B has a larger mean.',
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
        summary: 'From the video: adding a low outlier (121 eggs) to sea turtle nest data pulls the mean downward. The outlier is not massive, so the shift is moderate — but the direction is clear.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Low outlier effect → from the video: when the added value is below all existing data points, the mean drops. The farther below, the bigger the drop. Decision rule: distance of outlier from mean determines the magnitude of the shift.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Decrease with Becoming Negative',
            wrong: 'Student says the mean "decreases" and picks a negative answer, but the mean simply gets smaller while remaining positive.',
            correction: 'CB trap: "decrease" means the number gets smaller, not that it becomes negative. If the original mean is $143$ and a low value is added, the new mean might be $139$ — still positive, just smaller.',
          },
          {
            type: 'strategyCard',
            title: 'Magnitude Check',
            icon: '📏',
            timing: '~5s',
            content: 'From the video: the instructor notes the outlier ($121$) is not dramatically far from the data ($136$-$149$), so the shift is moderate. Bigger gap between outlier and data → bigger shift in mean.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Data: $50, 55, 60, 65$ (mean $= 57.5$). Adding $30$. Does the mean increase or decrease?',
            steps: [
              { label: 'Compare', content: '$30 < 57.5$.' },
              { label: 'Answer', content: 'Mean decreases. New mean $= 260/5 = 52$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Original data: $149, 144, 148, 136, 139$ (mean $\\approx 143$). A 6th value of $121$ is added. Does the mean increase or decrease?',
            answer: '$121 < 143$, so the mean decreases. New mean $= 837/6 = 139.5$.',
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
        summary: 'From the video: to find the mean of a combined data set, recover each group\'s total sum (Sum = Mean × Count), add the sums, then divide by the combined count. You CANNOT simply average the two means.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Combined mean on the SAT → from the video: the #1 trap is averaging the two group means. This only works if the groups are the SAME SIZE. When sizes differ, you must use weighted sums. Decision rule: Sum_A = Mean_A × Count_A, Sum_B = Mean_B × Count_B, Combined Mean = (Sum_A + Sum_B) / (Count_A + Count_B).',
          },
          {
            type: 'trapCard',
            title: 'Averaging the Two Means',
            wrong: 'Group A mean $= 32$, Group B mean $= 62$. Student says combined mean $= (32 + 62)/2 = 47$.',
            correction: 'CB trap: unweighted average. From the video: Group A has $75$ values (Sum $= 2400$), Group B has $50$ values (Sum $= 3100$). Combined mean $= 5500/125 = 44$, NOT $47$. The larger group pulls the combined mean toward its value. Decision rule: ALWAYS recover sums first.',
          },
          {
            type: 'strategyCard',
            title: 'Reverse-Multiply, Add, Divide',
            icon: '✖️',
            timing: '~15s',
            content: 'From the video: (1) Sum_A $= 32 \\times 75 = 2400$. (2) Sum_B $= 62 \\times 50 = 3100$. (3) Total $= 5500$. (4) Combined count $= 125$. (5) Mean $= 5500/125 = 44$. This is the only correct method when group sizes differ.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Class A ($20$ students) has a mean score of $75$. Class B ($30$ students) has a mean score of $85$. What is the combined mean?',
            steps: [
              { label: 'Sum A', content: '$75 \\times 20 = 1500$.' },
              { label: 'Sum B', content: '$85 \\times 30 = 2550$.' },
              { label: 'Combined', content: 'Total $= 4050$, Count $= 50$. Mean $= 4050/50 = 81$.' },
              { label: 'Trap check', content: 'Simple average would give $80$ — wrong because the groups are different sizes.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Group A: mean $= 32$, count $= 75$. Group B: mean $= 62$, count $= 50$. Combined mean?',
            answer: '$2400 + 3100 = 5500$. Combined count $= 125$. Mean $= 5500/125 = 44$.',
          },
        ],
      },
    },
  },

  8: {
    moduleId: 'statistics',
    title: 'What is the Median?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The median is the middle value when data is sorted. It is resistant to outliers — unlike the mean, one extreme value barely changes it.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Median on the SAT → CB tests three things: (1) can you find the median of a sorted list, (2) do you know the even-count rule (average the two middle values), and (3) do you understand that the median resists outliers while the mean doesn\'t. Decision rule: sort first, then find the middle position.',
          },
          {
            type: 'text',
            content: 'For odd $n$: the median is the value at position $\\frac{n+1}{2}$. For even $n$: the median is the average of the values at positions $\\frac{n}{2}$ and $\\frac{n}{2} + 1$. The data MUST be sorted from least to greatest before finding the position.',
          },
          {
            type: 'trapCard',
            title: 'Finding Median of Unsorted Data',
            wrong: 'Data: $8, 3, 12, 5, 7$. Student says the median is $12$ because it\'s "in the middle."',
            correction: 'CB trap: not sorting first. Sort: $3, 5, 7, 8, 12$. The median is $7$ (position $3$ out of $5$). Decision rule: ALWAYS sort before finding the median.',
          },
          {
            type: 'strategyCard',
            title: 'Odd vs Even Count Rule',
            icon: '📊',
            timing: '~8s',
            content: 'Odd count (like $9$ values): median = single middle value at position $5$. Even count (like $10$ values): median = average of values at positions $5$ and $6$. The even-count rule is the most commonly tested version on the SAT.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the median of: $73, 74, 75, 77, 79, 82, 84, 85, 91$.',
            steps: [
              { label: 'Already sorted', content: 'Data is in order ✓.' },
              { label: 'Count', content: '$9$ values (odd), so median is at position $(9+1)/2 = 5$.' },
              { label: 'Answer', content: 'The 5th value is $79$. Median $= 79$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the median of: $3, 4, 5, 5, 7, 8$.',
            answer: '$6$ values (even). Average positions $3$ and $4$: $(5 + 5)/2 = 5$. Median $= 5$.',
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
        summary: 'For frequency tables, use cumulative counting to find which group contains the median position. You don\'t need to list every value — just count through the frequencies.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Frequency table median on the SAT → from the video: use $(n+1)/2$ for odd $n$ to find the median position, then cumulatively add frequencies until you reach or pass that position. The value/range corresponding to that cumulative count contains the median. Decision rule: cumulative count, not raw frequencies.',
          },
          {
            type: 'text',
            content: 'From the video: $17$ restaurants with employees in ranges. Position of median: $(17+1)/2 = 9$th value. Cumulatively add frequencies through each row until you reach or pass $9$. The range where the running total first reaches $9$ contains the median.',
          },
          {
            type: 'trapCard',
            title: 'Using the Frequency Instead of Cumulative Count',
            wrong: 'Student sees a frequency of $5$ in the third row and says the median is in that row, without checking cumulative position.',
            correction: 'CB trap: reading raw frequency instead of cumulative total. You must ADD frequencies row by row. Decision rule: build a running total column.',
          },
          {
            type: 'strategyCard',
            title: 'Cumulative Counting Method',
            icon: '📋',
            timing: '~15s',
            content: 'From the video: (1) Find total $n$. (2) Find median position: $(n+1)/2$ if odd. (3) Add frequencies row by row until your running total reaches the median position. (4) Read the value/range for that row.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Frequency table: 0-9 employees ($3$ restaurants), 10-19 ($4$), 20-29 ($5$), 30-39 ($3$), 40-49 ($2$). What range contains the median?',
            steps: [
              { label: 'Total', content: '$n = 17$.' },
              { label: 'Position', content: '$(17+1)/2 = 9$th value.' },
              { label: 'Cumulative', content: 'Row 1: $3$. Row 2: $7$. Row 3: $12$. Since $7 < 9 \\leq 12$, the 9th value is in Row 3.' },
              { label: 'Answer', content: 'Median is in the $20$-$29$ range.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Frequency table: value $1$ (freq $4$), value $2$ (freq $6$), value $3$ (freq $3$), value $4$ (freq $7$). Find the median.',
            answer: '$n = 20$. Positions $10$ and $11$. Cumulative: $4, 10, 13, 20$. Position $10$ in value $2$, position $11$ in value $3$. Median $= (2+3)/2 = 2.5$.',
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
        summary: 'From the video: arrange all values lowest to greatest, then find the middle value. For 9 values, the median is at position 5. Answer: median = 79.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Simple median on the SAT → from the video: if data is already sorted, skip the arrangement step and go directly to the middle position. Decision rule: check if sorted first — it saves time.',
          },
          {
            type: 'trapCard',
            title: 'Miscounting the Middle Position',
            wrong: 'With $9$ values, student takes the value at position $4$ instead of position $5$.',
            correction: 'CB trap: off-by-one error. For odd $n$, median position $= (n+1)/2$. For $n = 9$: $(9+1)/2 = 5$. Decision rule: always use the formula.',
          },
          {
            type: 'strategyCard',
            title: 'Sorted Data Shortcut',
            icon: '✨',
            timing: '~5s',
            content: 'From the video: if the data is already in order, go straight to the middle. For odd count, it\'s the single middle value.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the median of sorted data: $5, 8, 12, 15, 20$.',
            steps: [
              { label: 'Count', content: '$5$ values (odd).' },
              { label: 'Position', content: '$(5+1)/2 = 3$rd value.' },
              { label: 'Answer', content: 'Median $= 12$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Sorted data: $73, 74, 75, 77, 79, 82, 84, 85, 91$. What is the median?',
            answer: '$9$ values. Position $(9+1)/2 = 5$. The 5th value is $79$.',
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
        summary: 'From the video: type median(73,74,75,77,79,82,84,85,91) directly into DESMOS to get 79 instantly. No sorting or counting needed.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'DESMOS median function → from the video: type $\\text{median}(\\text{values})$ and DESMOS returns the answer. Handles both odd and even counts automatically. Decision rule: for any median question on the digital SAT, DESMOS is the fastest path.',
          },
          {
            type: 'trapCard',
            title: 'Entering Values Out of Order',
            wrong: 'Student worries about entering values in sorted order in DESMOS.',
            correction: 'Not a trap: DESMOS handles sorting internally. You can enter values in any order and it still computes the correct median.',
          },
          {
            type: 'strategyCard',
            title: 'DESMOS median() Function',
            icon: '💻',
            timing: '~5s',
            content: 'From the video: type median( then all values separated by commas, then ). DESMOS handles sorting and position-finding automatically.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Use DESMOS: $\\text{median}(15, 8, 22, 3, 11)$.',
            steps: [
              { label: 'Type', content: '$\\text{median}(15, 8, 22, 3, 11)$.' },
              { label: 'Result', content: 'DESMOS returns $11$.' },
              { label: 'Verify', content: 'Sorted: $3, 8, 11, 15, 22$. Middle $= 11$ ✓.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'What do you type in DESMOS to find the median of $8, 3, 12, 5, 7$?',
            answer: '$\\text{median}(8, 3, 12, 5, 7)$. DESMOS returns $7$.',
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
        summary: 'From the video: when there are two numbers in the middle (even count), you must average them. The instructor calls this "the trick." Answer: median = 5.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Even-count median on the SAT → from the video: this is "the trick" — when $n$ is even, there is no single middle value. You average the two middle values. Decision rule: if $n$ is even, find positions $n/2$ and $n/2 + 1$, then average.',
          },
          {
            type: 'trapCard',
            title: 'Picking One Middle Value Instead of Averaging',
            wrong: 'Data: $2, 3, 5, 5, 7, 8$. Student picks $5$ at position $3$ without averaging positions $3$ and $4$.',
            correction: 'CB trap: forgetting the even-count rule. With $6$ values, average positions $3$ and $4$: $(5 + 5)/2 = 5$. When the two middle values differ, the average will be a decimal.',
          },
          {
            type: 'strategyCard',
            title: 'Even Count — Always Average Two',
            icon: '🔢',
            timing: '~8s',
            content: 'From the video: Sort → find two middle positions → average. Even when both middle values are the same, still verify by doing the average.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the median of: $3, 5, 7, 9, 11, 13$.',
            steps: [
              { label: 'Count', content: '$6$ values (even).' },
              { label: 'Middle two', content: 'Positions $3$ and $4$: values $7$ and $9$.' },
              { label: 'Average', content: '$(7 + 9)/2 = 8$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Sorted data: $2, 4, 6, 8, 10, 12$. What is the median?',
            answer: '$6$ values. Positions $3$ and $4$: values $6$ and $8$. Median $= (6 + 8)/2 = 7$.',
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
        summary: 'From the video: DESMOS handles even-count medians automatically — it averages the two middle values for you. Type median(values) and get the answer.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'DESMOS even-count median → DESMOS automatically averages the two middle values when the count is even. No need to remember the rule. Decision rule: use DESMOS for all median questions.',
          },
          {
            type: 'trapCard',
            title: 'Doubting DESMOS on Even Counts',
            wrong: 'Student gets a decimal answer from DESMOS (like $5.5$) and thinks it\'s wrong because "the median should be a whole number."',
            correction: 'The median CAN be a non-integer when $n$ is even and the two middle values differ. Trust the DESMOS result.',
          },
          {
            type: 'strategyCard',
            title: 'DESMOS — One Function for All Cases',
            icon: '💻',
            timing: '~5s',
            content: 'From the video: whether odd or even count, just type median(all values). DESMOS figures out the rest.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Verify $\\text{median}(3, 5, 7, 9, 11, 13) = 8$ by hand.',
            steps: [
              { label: 'Even count', content: '$6$ values. Positions $3$ and $4$: $7$ and $9$.' },
              { label: 'Average', content: '$(7+9)/2 = 8$ ✓.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'DESMOS gives median(2, 4, 6, 8, 10, 12) = 7. Verify by hand.',
            answer: '$6$ values. Positions $3$ and $4$: $6$ and $8$. Average: $(6+8)/2 = 7$ ✓.',
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
        summary: 'From the video: use (n+1)/2 for odd n to find the median position. Cumulatively add frequencies to locate which range holds that position.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Frequency table median on the SAT → from the video: cumulative counting is the key technique. Count through rows until your running total reaches the median position. Decision rule: build a cumulative frequency column.',
          },
          {
            type: 'trapCard',
            title: 'Picking the Row with the Highest Frequency',
            wrong: 'Student picks the range with the most items as the median range.',
            correction: 'CB trap: confusing mode with median. The most frequent range is the MODE, not necessarily where the median falls. Use cumulative counting.',
          },
          {
            type: 'strategyCard',
            title: 'Running Total Technique',
            icon: '📋',
            timing: '~15s',
            content: 'From the video: write the running total next to each row. Find the median position, then locate which row first reaches that cumulative total.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Frequency table: value $10$ (freq $3$), value $20$ (freq $5$), value $30$ (freq $4$). Find the median.',
            steps: [
              { label: 'Total', content: '$n = 12$. Positions $6$ and $7$.' },
              { label: 'Cumulative', content: 'Row 1: $3$. Row 2: $8$. Both positions fall in value $20$.' },
              { label: 'Answer', content: 'Median $= 20$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Frequency table: score $60$ (freq $2$), $70$ (freq $5$), $80$ (freq $8$), $90$ (freq $3$), $100$ (freq $2$). Find the median.',
            answer: '$n = 20$. Positions $10$ and $11$. Cumulative: $2, 7, 15, 18, 20$. Both fall in score $80$. Median $= 80$.',
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
        summary: 'From the video: adding a large outlier increased the mean but left the median unchanged at 17. Both middle positions still fell in the same frequency group.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Mean vs median comparison on the SAT → from the video: adding an outlier changes the mean but can leave the median untouched. The median depends on position, not value. Decision rule: mean always changes with outliers; median might not.',
          },
          {
            type: 'trapCard',
            title: 'Assuming Both Mean and Median Change',
            wrong: 'Student says adding an outlier changes both the mean and the median.',
            correction: 'CB trap: overgeneralizing. From the video: the mean always shifts, but the median only shifts if the middle positions move to a different value group. With large data sets, one extra value rarely changes the median.',
          },
          {
            type: 'strategyCard',
            title: 'Crossing-Out Method for Median',
            icon: '✂️',
            timing: '~12s',
            content: 'From the video: cross out smallest and largest alternately until you reach the middle. This visually identifies the median for small data sets.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Set A: $5, 10, 15, 20, 25$. Set B adds $100$. Compare mean and median changes.',
            steps: [
              { label: 'Mean', content: 'A: $15$. B: $175/6 \\approx 29.2$. Big change.' },
              { label: 'Median', content: 'A: $15$. B: $(15+20)/2 = 17.5$. Small change.' },
              { label: 'Answer', content: 'Mean changed dramatically; median barely moved.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A data set of $70$ values has median $17$. A value of $39$ is added. Does the median change?',
            answer: 'Probably not. The new median position shifts slightly, but with $70+$ values, one addition rarely moves the median.',
          },
        ],
      },
    },
  },

  16: {
    moduleId: 'statistics',
    title: 'What is the Mode?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The mode is the most frequently occurring value. A data set can have one mode, multiple modes, or no mode.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Mode on the SAT → CB rarely asks for the mode directly. When it appears, it\'s usually comparing mean, median, and mode, or involving categorical data. Decision rule: mode = value that appears MOST OFTEN.',
          },
          {
            type: 'text',
            content: 'A data set can be **unimodal** (one mode), **bimodal** (two modes), **multimodal** (three+ modes), or have **no mode** (all values appear equally). The mode is the only measure of center that works for categorical data.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Frequency with Value',
            wrong: 'Data: $3, 5, 5, 7, 7, 7, 9$. Student says the mode is $3$ because $7$ appears $3$ times.',
            correction: 'CB trap: reporting the count instead of the value. The mode is $7$ (the VALUE that appears most), not $3$ (HOW MANY times). Decision rule: mode = the value, not the count.',
          },
          {
            type: 'strategyCard',
            title: 'Mode Identification',
            icon: '🔍',
            timing: '~5s',
            content: 'Scan for repeated values. The value with the highest count is the mode. If all values appear equally, there is no mode.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the mode of: $4, 7, 2, 7, 3, 7, 5, 2, 8$.',
            steps: [
              { label: 'Count repeats', content: '$7$ appears $3$ times, $2$ appears $2$ times, all others once.' },
              { label: 'Answer', content: 'Mode $= 7$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Data: $10, 20, 20, 30, 30, 40$. What is the mode?',
            answer: 'Both $20$ and $30$ appear twice. Bimodal: modes are $20$ and $30$.',
          },
        ],
      },
    },
  },

  17: {
    moduleId: 'statistics',
    title: 'What is the Range?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Range = Maximum − Minimum. It measures total spread. Adding a constant to all values does NOT change the range.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Range on the SAT → CB tests two patterns: (1) basic "find the range" (max − min), and (2) "how does a transformation affect the range?" (adding a constant does NOT change range). Decision rule: range = max − min, unaffected by shifts.',
          },
          {
            type: 'formula',
            label: 'Range Formula',
            content: '$$\\text{Range} = \\text{Maximum} - \\text{Minimum}$$',
            note: 'Not given on the SAT reference sheet.',
          },
          {
            type: 'trapCard',
            title: 'Thinking Range Changes When Adding a Constant',
            wrong: 'Every value increases by $10$. Student says the range increases by $10$.',
            correction: 'CB trap: misapplying transformation rules. Adding a constant shifts every point equally — max and min both increase by $10$, so the difference stays the same. Decision rule: addition changes center, NOT spread.',
          },
          {
            type: 'strategyCard',
            title: 'Max-Min in 3 Seconds',
            icon: '⏱️',
            timing: '~3s',
            content: 'Scan for the largest and smallest values. Subtract. No sorting needed — just find the extremes.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Data: $3, 7, 12, 15, 22$. What is the range?',
            steps: [
              { label: 'Extremes', content: 'Max $= 22$, Min $= 3$.' },
              { label: 'Range', content: '$22 - 3 = 19$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Set A: $5, 8, 12, 15, 20$. Set B adds $10$ to each: $15, 18, 22, 25, 30$. Compare ranges.',
            answer: 'Both have range $= 15$. Adding a constant doesn\'t change the range.',
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
        summary: 'From the video: range = maximum − minimum. For seven scores with max = 52 and min = 23, range = 29.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Range calculation → from the video: pure formula recall. Identify max, identify min, subtract. Decision rule: scan for extremes, subtract, done.',
          },
          {
            type: 'trapCard',
            title: 'Subtracting in the Wrong Order',
            wrong: 'Student computes $23 - 52 = -29$.',
            correction: 'CB trap: negative range. Range is always positive: max MINUS min. $52 - 23 = 29$. Decision rule: larger number first.',
          },
          {
            type: 'strategyCard',
            title: 'Fastest Range Method',
            icon: '⚡',
            timing: '~3s',
            content: 'Don\'t sort. Just find the biggest and smallest. Subtract. One of the fastest SAT questions.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Data: $15, 28, 33, 42, 50$. Find the range.',
            steps: [
              { label: 'Extremes', content: 'Max $= 50$, Min $= 15$.' },
              { label: 'Range', content: '$50 - 15 = 35$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Scores: $23, 34, 41, 29, 52, 38, 47$. What is the range?',
            answer: 'Max $= 52$, Min $= 23$. Range $= 29$.',
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
        summary: 'From the video: when a constant is added to every value, the median changes but the range stays the same. Addition shifts center, not spread.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Transformation effects on the SAT → from the video: adding a constant changes mean and median but NOT range or standard deviation. Decision rule: shifts affect CENTER; spread measures are unchanged.',
          },
          {
            type: 'trapCard',
            title: 'Saying Range Changes Under Addition',
            wrong: 'Set B = Set A + $56$. Student says range of B is $56$ more than range of A.',
            correction: 'CB trap: applying shift to spread. Adding $56$ increases both max and min by $56$. Difference stays the same. Range A = Range B.',
          },
          {
            type: 'strategyCard',
            title: 'Transformation Quick Reference',
            icon: '📝',
            timing: '~5s',
            content: 'Add constant $c$: Mean ± $c$, Median ± $c$, Range SAME, SD SAME. Multiply by $k$: Mean × $k$, Median × $k$, Range × $|k|$, SD × $|k|$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Set A: $3, 7, 12, 18, 25$. Set B adds $10$ to each. Compare median and range.',
            steps: [
              { label: 'Median', content: 'A: $12$. B: $22$ (shifted by $10$).' },
              { label: 'Range', content: 'A: $22$. B: $22$. Unchanged.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Set A: median $40$, range $25$. Set B adds $56$ to each value. Median and range of B?',
            answer: 'Median $= 96$. Range $= 25$ (unchanged).',
          },
        ],
      },
    },
  },

  20: {
    moduleId: 'statistics',
    title: 'What is Standard Deviation?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Standard deviation measures spread from the mean. You will NOT calculate it on the SAT — just compare distributions visually.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Standard deviation on the SAT → CB NEVER asks you to calculate SD. It asks you to COMPARE two data sets. From the video: if two distributions have the same shape but are shifted, their SDs are EQUAL. Decision rule: more clustered = smaller SD, more spread = larger SD.',
          },
          {
            type: 'text',
            content: 'From the video: SD measures how far values are from the mean on average. Closer to mean = small SD. Far from mean = large SD. A data set of all identical values has SD $= 0$.',
          },
          {
            type: 'trapCard',
            title: 'Thinking Shifted Data Has Different SD',
            wrong: 'Set A centered at $10$, Set B centered at $100$. Student says B has larger SD because numbers are bigger.',
            correction: 'CB trap: confusing magnitude with spread. If both sets have the same spread pattern, their SDs are identical. Adding a constant doesn\'t change SD. Decision rule: SD depends on SHAPE, not position.',
          },
          {
            type: 'strategyCard',
            title: 'Visual SD Comparison',
            icon: '👁️',
            timing: '~5s',
            content: 'From the video: for dot plots, look at the shape. More concentrated = smaller SD. More spread = larger SD. Same shape shifted = equal SD. Don\'t calculate — just look.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Class A scores: mostly $78$-$82$. Class B scores: $55$ to $100$. Which has larger SD?',
            steps: [
              { label: 'Compare spread', content: 'A is clustered ($4$-point range). B is widespread ($45$-point range).' },
              { label: 'Answer', content: 'Class B has larger standard deviation.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Set A: $\\{10, 10, 10, 10\\}$. Set B: $\\{8, 9, 11, 12\\}$. Compare SDs.',
            answer: 'Set A: all identical → SD $= 0$. Set B: has spread → SD $> 0$. B has larger SD.',
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
        summary: 'From the video: two dot plots that are shifted copies of each other have EQUAL standard deviations. SD depends on shape/spread, not position.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'SD comparison on the SAT → from the video: if two dot plots have the same SHAPE but different centers, their SDs are equal. Decision rule: look at shape, ignore position on the number line.',
          },
          {
            type: 'trapCard',
            title: 'Higher Values = Higher SD',
            wrong: 'Student says the set centered at $25$ has higher SD than the one centered at $10$.',
            correction: 'CB trap: confusing center with spread. Two shifted copies have the same SD. Decision rule: SD depends on shape, not where it sits.',
          },
          {
            type: 'strategyCard',
            title: 'Same Shape = Same SD',
            icon: '🔄',
            timing: '~5s',
            content: 'From the video: if two dot plots look like identical patterns just slid left or right, their SDs are equal.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Set A: $2, 4, 6, 8, 10$. Set B: $102, 104, 106, 108, 110$. Compare SDs.',
            steps: [
              { label: 'Observe', content: 'B is A shifted by $100$. Same spread pattern.' },
              { label: 'Answer', content: 'Standard deviations are equal.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Set A: {3, 4, 5, 5, 6, 7}. Set B: {13, 14, 15, 15, 16, 17}. Compare SDs.',
            answer: 'B is A shifted right by $10$. Same spread → same SD.',
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
        summary: 'From the video: same median does NOT mean same standard deviation. If one set is more clustered and another more spread out, their SDs differ even if medians match.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Complex SD on the SAT → from the video: equal median tells you nothing about SD. Check the SPREAD independently. Decision rule: evaluate center and spread SEPARATELY.',
          },
          {
            type: 'trapCard',
            title: 'Equal Median Implies Equal SD',
            wrong: 'Both sets have median $15$. Student says their SDs are also equal.',
            correction: 'CB trap: linking unrelated statistics. Median = center, SD = spread. Same center ≠ same spread. Decision rule: check shape/clustering independently.',
          },
          {
            type: 'strategyCard',
            title: 'Crossing-Out Method for Quick Median',
            icon: '✂️',
            timing: '~10s',
            content: 'From the video: eliminate values from both ends working inward to find the center. Then compare spread patterns separately.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Set A: $14, 15, 15, 15, 16$. Set B: $10, 12, 15, 18, 20$. Both have median $15$. Compare SDs.',
            steps: [
              { label: 'Set A', content: 'Values within $1$ of center. Very clustered.' },
              { label: 'Set B', content: 'Values span $10$ units. More spread.' },
              { label: 'Answer', content: 'Set B has larger SD despite same median.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Set A: $\\{10, 14, 15, 15, 16, 20\\}$. Set B: $\\{5, 10, 15, 15, 20, 25\\}$. Same median. Compare SDs.',
            answer: 'A is more clustered (range $10$). B is more spread (range $20$). B has larger SD.',
          },
        ],
      },
    },
  },

  23: {
    moduleId: 'statistics',
    title: 'What is Margin of Error?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Margin of error creates a confidence interval: sample statistic ± margin of error. You cannot say the population value IS the sample statistic — only that it\'s likely within the interval.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Margin of error on the SAT → CB tests whether you can create and interpret a confidence interval. Estimate $\\pm$ MoE $=$ interval. Any value IN the interval is plausible. Decision rule: interval = estimate ± margin.',
          },
          {
            type: 'formula',
            label: 'Confidence Interval',
            content: '$$\\text{Estimate} - \\text{MoE} \\leq \\text{True Value} \\leq \\text{Estimate} + \\text{MoE}$$',
            note: 'The true population value is likely within this range.',
          },
          {
            type: 'trapCard',
            title: 'Saying Population Value IS the Sample Statistic',
            wrong: '"Sample mean is $4.23$, so the population mean is $4.23$."',
            correction: 'CB trap: treating sample as population. The population mean is plausibly between $\\$4.15$ and $\\$4.31$ (with MoE $= \\$0.08$). Always express as a RANGE.',
          },
          {
            type: 'strategyCard',
            title: 'Interval Construction',
            icon: '±',
            timing: '~5s',
            content: 'Read estimate. Read MoE. Subtract for lower bound. Add for upper bound. Check if answer choices fall inside. Done.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '$49\\%$ support a policy, MoE $= 4\\%$. Which is plausible?\n(A) $0.42$ (B) $0.46$ (C) $0.54$ (D) $0.60$',
            steps: [
              { label: 'Interval', content: '$[0.45, 0.53]$.' },
              { label: 'Check', content: '(B) $0.46$ is inside ✓.' },
              { label: 'Answer', content: '**(B)**.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Sample mean: $\\$4.23$, MoE: $\\$0.08$. Is $\\$4.30$ plausible?',
            answer: 'Interval: $[\\$4.15, \\$4.31]$. $\\$4.30$ is inside → yes, plausible.',
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
        summary: 'From the video: proportion estimated at 0.49 with MoE 0.04. Confidence interval = [0.45, 0.53]. Any value in this range is plausible.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Proportion MoE on the SAT → from the video: build the interval, check which answer choices fall inside. Decision rule: in the interval = plausible, outside = not.',
          },
          {
            type: 'trapCard',
            title: 'Confusing MoE with Standard Deviation',
            wrong: 'Student tries to calculate standard deviation when the problem gives margin of error.',
            correction: 'CB trap: wrong concept. MoE creates a confidence interval. SD measures data spread. Different things entirely.',
          },
          {
            type: 'strategyCard',
            title: 'Quick Plausibility Check',
            icon: '✅',
            timing: '~5s',
            content: 'Build interval (± margin), check if answer falls inside. No complex math needed.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Estimate: $0.62$, MoE: $0.03$. Is $0.58$ plausible?',
            steps: [
              { label: 'Interval', content: '$[0.59, 0.65]$.' },
              { label: 'Check', content: '$0.58 < 0.59$, outside.' },
              { label: 'Answer', content: 'Not plausible.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Estimate: $0.49$, MoE: $0.04$. Is $0.54$ plausible?',
            answer: 'Interval: $[0.45, 0.53]$. $0.54 > 0.53$ → NOT plausible.',
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
        summary: 'From the video: mean price $4.23 with MoE $0.08. Plausible range: $4.15 to $4.31. Increasing sample size reduces MoE.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Mean MoE on the SAT → from the video: same process as proportions. Sample mean ± MoE = confidence interval. Larger sample → smaller MoE → narrower interval. Decision rule: build interval, check choices.',
          },
          {
            type: 'trapCard',
            title: 'Claiming Certainty About Population Mean',
            wrong: '"The mean price in Utah is definitely $\\$4.23$."',
            correction: 'CB trap: overstating certainty. A sample gives an ESTIMATE, not certainty. The population mean is plausibly $\\$4.15$ to $\\$4.31$. Never say "definitely" with sample data.',
          },
          {
            type: 'strategyCard',
            title: 'Sample Size and MoE',
            icon: '📏',
            timing: '~3s',
            content: 'Larger sample → smaller MoE → more precise estimate. Common SAT question: "How to reduce MoE?" Answer: increase sample size.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Sample mean: $72$, MoE: $5$. Which are plausible: $65$, $68$, $75$, $80$?',
            steps: [
              { label: 'Interval', content: '$[67, 77]$.' },
              { label: 'Check each', content: '$65$ (no), $68$ (yes), $75$ (yes), $80$ (no).' },
              { label: 'Answer', content: '$68$ and $75$ are plausible.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Sample mean: $\\$4.23$, MoE: $\\$0.08$. Researcher doubles sample size. What happens to MoE?',
            answer: 'MoE decreases. Larger samples produce narrower confidence intervals.',
          },
        ],
      },
    },
  },

  26: {
    moduleId: 'statistics',
    title: 'What is Probability?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Probability = favorable outcomes ÷ total outcomes. Always between 0 and 1. The SAT tests whether you pick the right numerator and denominator.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Probability on the SAT → CB tests whether you identify the correct numerator (favorable) and denominator (total). The most common trap is using the wrong total. Decision rule: "favorable" on top, "total in the relevant group" on the bottom.',
          },
          {
            type: 'formula',
            label: 'Basic Probability',
            content: '$$P(\\text{event}) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$$',
            note: 'Always between $0$ and $1$.',
          },
          {
            type: 'trapCard',
            title: 'Using Grand Total Instead of Relevant Group',
            wrong: '$30$ female math students out of $50$ females, $100$ total students. Student writes $P = 30/100$.',
            correction: 'CB trap: wrong denominator. "Given female" restricts to $50$ females. $P = 30/50 = 0.6$. Decision rule: "given [group]" = denominator is that group\'s size.',
          },
          {
            type: 'strategyCard',
            title: 'Numerator/Denominator ID',
            icon: '🎯',
            timing: '~8s',
            content: 'What event? → count on TOP. What total group? → count on BOTTOM. "Given" or "among" tells you the bottom group. No condition → use grand total.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Bag: $3$ red, $5$ blue, $2$ green. What is $P(\\text{blue})$?',
            steps: [
              { label: 'Favorable', content: '$5$ blue.' },
              { label: 'Total', content: '$3 + 5 + 2 = 10$.' },
              { label: 'Answer', content: '$P = 5/10 = 1/2$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: '$52$-card deck. What is $P(\\text{heart})$?',
            answer: '$13/52 = 1/4 = 0.25$.',
          },
        ],
      },
    },
  },

  27: {
    moduleId: 'statistics',
    title: 'Complementary Probability',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'P(not A) = 1 − P(A). If it\'s easier to find the complement, find that and subtract from 1.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Complement on the SAT → CB asks "probability that it is NOT X." Find $P(X)$ first, subtract from $1$. Especially useful for "at least one" problems. Decision rule: "not" = $1 - P(\\text{event})$.',
          },
          {
            type: 'formula',
            label: 'Complement Rule',
            content: '$$P(\\text{not A}) = 1 - P(A)$$',
            note: '$P(A) + P(\\text{not A}) = 1$ always.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Subtract from 1',
            wrong: '$P(\\text{rain}) = 0.3$. Student says $P(\\text{not rain}) = 0.3$.',
            correction: 'CB trap: reporting the event instead of its complement. $P(\\text{not rain}) = 1 - 0.3 = 0.7$. Decision rule: "not" always means subtract from $1$.',
          },
          {
            type: 'strategyCard',
            title: 'When to Use Complement',
            icon: '🔄',
            timing: '~5s',
            content: '"At least one" = complement of "none." "Not blue" = complement of "blue." Find the simpler probability, subtract from $1$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Bag: $3$ red, $5$ blue, $2$ green. $P(\\text{not blue})$?',
            steps: [
              { label: 'P(blue)', content: '$5/10 = 0.5$.' },
              { label: 'Complement', content: '$1 - 0.5 = 0.5$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Die rolled. $P(\\text{not } 6)$?',
            answer: '$1 - 1/6 = 5/6$.',
          },
        ],
      },
    },
  },

  28: {
    moduleId: 'statistics',
    title: 'What is Conditional Probability?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Conditional probability restricts the sample space. "Given that" or "among those who" tells you to change the denominator to that group\'s total.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Conditional probability on the SAT → CB tests whether you use the RESTRICTED total as the denominator. "P(A given B)" = among group B, how many are also in A? Decision rule: "given B" → denominator = total in B.',
          },
          {
            type: 'formula',
            label: 'Conditional Probability',
            content: '$$P(A \\mid B) = \\frac{\\text{count in both A and B}}{\\text{total in B}}$$',
            note: 'Denominator = size of the "given" group, NOT grand total.',
          },
          {
            type: 'trapCard',
            title: 'Using Grand Total as Denominator',
            wrong: '$200$ students, $80$ play sports, $30$ also play music. $P(\\text{music} \\mid \\text{sports}) = 30/200$.',
            correction: 'CB trap: wrong denominator. "Given sports" restricts to $80$. $P = 30/80 = 3/8 = 0.375$. Decision rule: word after "given" = denominator group.',
          },
          {
            type: 'strategyCard',
            title: 'Two-Way Table Conditional',
            icon: '📊',
            timing: '~10s',
            content: 'Find the "given" group (row or column total). Find the cell satisfying BOTH conditions. Divide. "P(math | female)" → female row total on bottom, female-AND-math cell on top.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '$200$ students: $80$ play sports, $30$ of those also play music. $P(\\text{music} \\mid \\text{sports})$?',
            steps: [
              { label: 'Given group', content: 'Sports: $80$.' },
              { label: 'Both', content: 'Sports AND music: $30$.' },
              { label: 'Answer', content: '$30/80 = 3/8 = 0.375$.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: '$55$ prefer math, $30$ of those are female. $P(\\text{female} \\mid \\text{math})$?',
            answer: '$30/55 \\approx 0.545$.',
          },
        ],
      },
    },
  },

  29: {
    moduleId: 'statistics',
    title: 'Reading Two-Way Tables',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Two-way tables organize data by two categorical variables. The SAT asks for probabilities, conditional probabilities, and relative frequency comparisons from these tables.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'Two-way tables on the SAT → CB tests three things: (1) simple probability (cell ÷ grand total), (2) conditional probability (cell ÷ row/column total), (3) comparing relative frequencies. Decision rule: does the question have a "given" condition? If yes → use row/column total. If no → use grand total.',
          },
          {
            type: 'table',
            title: 'Example Two-Way Table',
            headers: ['', 'Math', 'English', 'Total'],
            rows: [
              ['Female', '$30$', '$20$', '$50$'],
              ['Male', '$25$', '$25$', '$50$'],
              ['**Total**', '$55$', '$45$', '$100$'],
            ],
          },
          {
            type: 'trapCard',
            title: 'Swapping Row and Column Conditions',
            wrong: '$P(\\text{Math} \\mid \\text{Female})$ — student reads $30/55$ instead of $30/50$.',
            correction: 'CB trap: wrong restriction. "Given female" = female ROW total ($50$), not math COLUMN total ($55$). $P = 30/50 = 0.6$. Compare: $P(\\text{Female} \\mid \\text{Math}) = 30/55$. Decision rule: word AFTER the bar ($\\mid$) defines the denominator.',
          },
          {
            type: 'strategyCard',
            title: 'Three Types of Table Probabilities',
            icon: '📋',
            timing: '~10s',
            content: 'Joint: cell ÷ grand total ($30/100 = 0.3$). Marginal: row/column total ÷ grand total ($50/100 = 0.5$). Conditional: cell ÷ row or column total ($30/50 = 0.6$). Identify which type the question asks.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'From the table: find $P(\\text{Female} \\mid \\text{Math})$ and $P(\\text{Math} \\mid \\text{Female})$.',
            steps: [
              { label: 'P(Female | Math)', content: 'Given Math ($55$). Female AND Math $= 30$. $P = 30/55 \\approx 0.545$.' },
              { label: 'P(Math | Female)', content: 'Given Female ($50$). Female AND Math $= 30$. $P = 30/50 = 0.6$.' },
              { label: 'Key', content: 'Different probabilities — the "given" group changes the denominator.' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: '$P(\\text{Male AND English})$? $P(\\text{English} \\mid \\text{Male})$?',
            answer: 'Joint: $25/100 = 0.25$. Conditional: $25/50 = 0.5$.',
          },
        ],
      },
    },
  },
};
