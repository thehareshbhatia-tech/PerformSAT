export const statisticsContent = {
  moduleId: 'statistics',
  title: 'Statistics',
  description: 'Master mean, median, mode, range, standard deviation (conceptual), and margin of error — the most heavily tested topic domain on the Digital SAT.',

  sections: {
    coreConcepts: {
      title: 'Core Concepts',
      summary: 'Definitions and intuition for measures of center, spread, and margin of error.',
      blocks: [
        { type: 'heading', content: 'Measures of Center' },
        { type: 'formulaGrid', items: [
          { label: 'Mean', formula: 'x̄ = Σx / n', note: 'sum ÷ count; pulled by every value' },
          { label: 'Median', formula: 'Middle value (ordered)', note: 'position-based; resistant to outliers' },
          { label: 'Mode', formula: 'Most frequent value', note: 'can be none, one, or multiple' },
        ] },
        { type: 'heading', content: 'Measures of Spread' },
        { type: 'formulaGrid', items: [
          { label: 'Range', formula: 'Max − Min', note: 'sensitive to outliers' },
          { label: 'Standard Deviation', formula: 'σ (conceptual only)', note: 'average distance from mean; SAT never asks you to compute it' },
        ] },
        { type: 'keyInsight', content: 'σ = clustering around the mean. Weighted mean: (n₁·x̄₁ + n₂·x̄₂)/(n₁ + n₂). Margin of error: 52% ± 3% → interval [49%, 55%].' },
      ],
    },

    satPatterns: {
      title: 'SAT Patterns',
      summary: 'Recognition cues and decision rules for statistics prompts.',
      blocks: [
        { type: 'callout', variant: 'info', title: 'Statistics Question Types', content: '**Compute mean/median** — list or frequency table; sum ÷ count or cumulative-frequency median. **Effect of changes/outliers** — add/remove a value; which measure shifts more? **Compare data sets** — which has larger mean, σ, or range? **Survey interpretation** — margin of error, valid conclusions; results generalize only to the sampled population.' },
        { type: 'iconRow', items: [
          { icon: '📊', label: 'Compute', description: 'Mean from sum/count; median via cumulative frequency' },
          { icon: '🔀', label: 'Effect of Changes', description: 'Outliers pull mean; median resists' },
          { icon: '📈', label: 'Compare Sets', description: 'Mean, σ, range — conceptual reasoning' },
          { icon: '📋', label: 'Survey', description: 'Margin of error → interval; cautious claims only' },
        ] },
        { type: 'trapCard', title: 'Mean vs. Median', wrong: 'Data: {2, 3, 4, 5, 100}. Student reports "typical value" as mean = 22.8.', correction: 'The mean is pulled by the outlier. For skewed data, **median** (4) better represents the typical value. Use mean when the question explicitly asks for it or when data is symmetric.' },
        { type: 'tip', content: '**Decision rule:** When data has outliers or is skewed, prefer **median** for "typical" or "representative" value. When asked "which measure changes more if we remove X?" — mean shifts; median barely moves. No computation needed.' },
      ],
    },

    methods: {
      title: 'Methods',
      summary: 'Step-by-step procedures for computing mean, finding median, reverse-solving for a missing value, and analyzing outlier effects.',
      blocks: [
        { type: 'heading', content: 'Method 1: Mean from Raw Data or Frequency Table' },
        { type: 'steps', title: 'Workflow', items: [
          'Sum all values (for a frequency table: Σ(value × frequency)).',
          'Count total data points (sum of frequencies for a table).',
          'Divide: x̄ = total sum / n.',
        ] },
        { type: 'heading', content: 'Method 2: Median via Cumulative Frequency' },
        { type: 'steps', title: 'Workflow', items: [
          'Order data (or use the given frequency table\'s natural order).',
          'Build a cumulative frequency column — running total.',
          'Median position: (n+1)/2 for odd n; average of n/2 and n/2+1 for even n.',
          'Scan the cumulative column to find which value contains that position.',
        ] },
        { type: 'heading', content: 'Method 3: Reverse-Mean (Find Missing Value)' },
        { type: 'formula', label: 'Missing Value', content: 'x_missing = (x̄ × n) − Σx_known', note: 'Rearrange the mean definition to isolate the unknown' },
        { type: 'keyInsight', content: 'Outlier impact: mean is pulled by magnitude; median by position. Reverse-mean: need sum = x̄×n, then x = sum − known_sum.' },
      ],
    },

    commonTraps: {
      title: 'Common Traps',
      summary: 'The five most costly statistics mistakes on the Digital SAT.',
      blocks: [
        { type: 'trapCard', title: 'Averaging Averages', wrong: 'Section A mean = 80 (n=15), Section B mean = 90 (n=25). Student says combined mean = 85.', correction: 'Weighted: (15×80 + 25×90)/40 = **86.25**. Always weight by group size.' },
        { type: 'trapCard', title: 'Median Position Error', wrong: '12 values — student takes the 6th as the median.', correction: 'For even n, median = average of the 6th and 7th values.' },
        { type: 'trapCard', title: 'Overgeneralizing Surveys', wrong: '200 California freshmen surveyed → "Most U.S. college students prefer online classes."', correction: 'Results apply only to the **sampled population** — California freshmen, not all U.S. students.' },
        { type: 'trapCard', title: 'Confusing Range and σ', wrong: 'Student picks the set with the largest range as having the largest σ.', correction: 'A set like {1, 50, 50, 50, 99} has large range but moderate σ because most values cluster. σ = average distance from mean, not max minus min.' },
        { type: 'callout', variant: 'memorize', title: 'Trap-Avoidance Checklist', content: '**1)** Weighting group means? **2)** Even/odd n for median? **3)** Generalizing only to the sampled population? **4)** Range ≠ σ?' },
      ],
    },

    workedExamples: {
      title: 'Worked Examples',
      summary: 'A frequency-table median problem and a multi-group outlier-removal problem, fully worked.',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'Books read by students: 0(×2), 1(×5), 2(×8), 3(×7), 4(×3), 5(×1). What is the median?',
          steps: [
            { label: 'Total', content: '2+5+8+7+3+1 = **26** students' },
            { label: 'Position', content: 'n = 26 (even) → median = average of 13th and 14th values.' },
            { label: 'Cumulative', content: '0 books: 2 | 1 book: 7 | 2 books: **15** | 3 books: 22 …' },
            { label: 'Locate', content: 'Both 13th and 14th fall in the "2 books" group (cum freq 7 → 15).' },
            { label: 'Answer', content: 'Median = **2 books**.' },
          ],
        },
        {
          type: 'example',
          difficulty: 'Hard',
          problem: 'Group A (40 people): mean response = 3.2 s. Group B (60 people): mean response = 4.5 s. The slowest person in B (12.1 s) is removed. What is the new overall mean?',
          steps: [
            { label: 'Sums', content: 'A: 40 × 3.2 = 128. B: 60 × 4.5 = 270.' },
            { label: 'Remove outlier', content: 'New B sum = 270 − 12.1 = 257.9. New B count = 59.' },
            { label: 'Combined', content: '(128 + 257.9) / (40 + 59) = 385.9 / 99 ≈ **3.9 s**' },
            { label: 'Insight', content: 'Removing one extreme value dropped the overall mean by ~0.1 s — mean is sensitive to outliers.' },
          ],
        },
      ],
    },

    visualModels: {
      title: 'Visual Models',
      summary: 'Mental pictures for mean vs. median behavior, standard deviation spread, and margin of error intervals.',
      blocks: [
        { type: 'heading', content: 'Mean vs. Median on a Number Line' },
        { type: 'diagramRef', description: 'Number line with data {2,3,4,5,5,6,25}. Median (5) sits at the physical center of points. Mean (≈7.1) is pulled right toward the outlier 25. Arrow shows the direction of pull.' },
        { type: 'iconRow', items: [
          { icon: '⚖️', label: 'Mean', description: 'Balance point — sensitive to outliers' },
          { icon: '🎯', label: 'Median', description: 'Middle position — resistant' },
          { icon: '📏', label: 'Range', description: 'Max−Min — very sensitive' },
          { icon: '📐', label: 'Std Dev', description: 'Avg distance from mean' },
        ] },
      ],
    },

    speedStrategy: {
      title: 'Speed & Strategy',
      summary: 'Desmos arithmetic tricks, conceptual shortcuts for outlier questions, and cumulative frequency speed techniques.',
      blocks: [
        { type: 'strategyCard', title: 'Desmos: Sum and Divide', icon: '🖩', timing: '~10s saved', content: 'Type the mean directly: **(78+85+92+88+97)/5**. For weighted means: **(20*80+30*90)/50**. Let the calculator handle arithmetic.' },
        { type: 'strategyCard', title: 'Outlier Questions: Skip the Math', icon: '🧠', timing: '~45s saved', content: 'When asked "how does removing an outlier affect mean vs. median?" — answer conceptually. Mean shifts toward remaining data; median barely moves. No computation needed.' },
        { type: 'strategyCard', title: 'Cumulative Frequency on Scratch Paper', icon: '📝', timing: '~20s saved', content: 'For frequency-table medians, immediately build a running-total column. Find position (n+1)/2 and scan. Mechanical and fast.' },
        { type: 'strategyCard', title: 'Margin of Error: Build the Interval', icon: '📊', timing: '~15s saved', content: 'Compute estimate ± margin. If the interval crosses 50%, no candidate has a clear lead. If it does not include 50%, the result is statistically meaningful.' },
        { type: 'tip', content: 'Statistics questions reward **conceptual reasoning** over raw computation. Many can be answered without a single calculation if you understand how mean, median, and σ behave.' },
      ],
    },

    checkpoint: {
      title: 'Checkpoint',
      summary: 'Two retrieval questions testing reverse-mean and margin of error interpretation.',
      blocks: [
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'The mean of 8 numbers is 15. If the value 40 is removed, what is the new mean of the remaining 7 numbers? (Round to the nearest tenth.)',
          answer: 'Original sum = 8 × 15 = 120. Remove 40 → new sum = 80. New mean = 80/7 ≈ **11.4**.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'A poll of 400 voters: 48% support a measure, margin of error ±3%. Can we conclude fewer than half support it?',
          answer: 'Interval: [45%, 51%]. Since 51% > 50%, the interval includes majority support — we **cannot** conclude less than half. The result is inconclusive.',
        },
      ],
    },
  },
};
