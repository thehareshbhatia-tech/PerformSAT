export const statisticsContent = {
  moduleId: 'statistics',
  title: 'Statistics',
  description: 'Master mean, median, mode, range, standard deviation (conceptual), and margin of error — the most heavily tested topic domain on the Digital SAT.',
  _isModuleFallback: true,
  sections: {
    learn: {
      title: 'Learn',
      summary: 'Definitions and intuition for measures of center, spread, and margin of error.',
      blocks: [
        {
          type: 'formulaGrid',
          items: [
            {
              label: 'Mean',
              formula: '$\\bar{x} = \\sum x / n$',
              note: 'sum $\\div$ count; pulled by every value',
            },
            {
              label: 'Median',
              formula: 'Middle value (ordered)',
              note: 'position-based; resistant to outliers',
            },
            {
              label: 'Mode',
              formula: 'Most frequent value',
              note: 'can be none, one, or multiple',
            },
          ],
        },
        {
          type: 'formulaGrid',
          items: [
            {
              label: 'Range',
              formula: '$Max - Min$',
              note: 'sensitive to outliers',
            },
            {
              label: 'Standard Deviation',
              formula: '$\\sigma$ (conceptual only)',
              note: 'average distance from mean; SAT never asks you to compute it',
            },
          ],
        },
        {
          type: 'keyInsight',
          content: '$\\sigma$ = clustering around the mean. Weighted mean: (n₁·$\\bar{x}$₁ + n₂·$\\bar{x}$₂)/(n₁ + n₂). Margin of error: 52% ± 3% → interval [49%, 55%].',
        },
        {
          type: 'trapCard',
          title: 'Mean vs. Median',
          wrong: 'Data: {2, 3, 4, 5, 100}. Student reports "typical value" as mean = 22.8.',
          correction: 'The mean is pulled by the outlier. For skewed data, **median** (4) better represents the typical value. Use mean when the question explicitly asks for it or when data is symmetric.',
        },
      ],
    },
    practice: {
      title: 'Practice',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'Books read by students: 0($\\times$2), 1($\\times$5), 2($\\times$8), 3($\\times$7), 4($\\times$3), 5($\\times$1). What is the median?',
          steps: [
            {
              label: 'Total',
              content: '2+5+8+7+3+1 = **26** students',
            },
            {
              label: 'Position',
              content: 'n = 26 (even) → median = average of 13th and 14th values.',
            },
            {
              label: 'Cumulative',
              content: '0 books: 2 | 1 book: 7 | 2 books: **15** | 3 books: 22 …',
            },
            {
              label: 'Locate',
              content: 'Both 13th and 14th fall in the "2 books" group (cum freq 7 → 15).',
            },
            {
              label: 'Answer',
              content: 'Median = **2 books**.',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'The mean of 8 numbers is 15. If the value 40 is removed, what is the new mean of the remaining 7 numbers? (Round to the nearest tenth.)',
          answer: 'Original sum = 8 $\\times$ 15 = 120. Remove 40 → new sum = 80. New mean = 80/7 ≈ **11.4**.',
        },
      ],
    },
  },
};
