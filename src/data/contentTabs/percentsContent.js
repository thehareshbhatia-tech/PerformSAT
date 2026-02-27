export const percentsContent = {
  moduleId: 'percents',
  title: 'Percents & Percent Applications',
  description: 'Percent translation, percent change, successive percents, and repeated-percent models for the Digital SAT.',

  sections: {
    coreConcepts: {
      title: 'Core Concepts',
      summary: 'What percent means, the multiplier idea, successive changes, and the repeated-percent model.',
      blocks: [
        {
          type: 'formula',
          label: 'Fundamental Percent Equation',
          content: '$Part = Percent \\times Whole$',
          note: 'Equivalently: Part / Whole = Percent (as a decimal)',
        },
        {
          type: 'formulaGrid',
          items: [
            { label: 'Percent Increase', formula: '$New = Original \\times (1 + r)$', note: 'r = rate as decimal' },
            { label: 'Percent Decrease', formula: '$New = Original \\times (1 - r)$', note: 'r = rate as decimal' },
            { label: 'Percent Change', formula: '$(New - Old) / Old \\times 100%$', note: 'Always divide by original' },
            { label: 'Successive Changes', formula: '$Final = Original \\times m_1 \\times m_2 \\times …$', note: 'Multiply multipliers; never add percents' },
          ],
        },
        {
          type: 'keyInsight',
          content: 'Every percent change is a single **multiplier**. +25% → $\\times 1.25$. -40% → $\\times 0.60$. Thinking in multipliers unifies increases, decreases, reversals, and chains into one operation.',
        },
        {
          type: 'formula',
          label: 'Repeated Percent Model',
          content: '$A(t) = A_0 \\cdot (1 \\pm r)^t$',
          note: 'Same rate r applied t times; compound interest is a special case',
        },
      ],
    },

    satPatterns: {
      title: 'SAT Patterns',
      summary: 'Four archetypes: percent-of translation, percent change, reverse percent, and layered changes.',
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Percent Prompt Archetypes',
          content: '**Percent-of**: "What percent of A is B?" → B/A. **Percent change**: (New-Old)/Old $\\times$ 100 — divide by original. **Reverse percent**: Final given, original asked — divide by multiplier. **Layered**: Discount then tax — chain multipliers.',
        },
        {
          type: 'iconRow',
          items: [
            { icon: '🔤', label: 'Translation', description: '"What percent of 80 is 24?"' },
            { icon: '📊', label: 'Percent Change', description: '"By what percent did revenue increase?"' },
            { icon: '🔙', label: 'Reverse Percent', description: '"Before the 20% increase, the price was…"' },
            { icon: '🔗', label: 'Layered Changes', description: '"30% off, then 8% tax on the sale price…"' },
          ],
        },
        {
          type: 'trapCard',
          title: 'Reverse Percent: Divide, Don\'t Subtract',
          wrong: 'After a 20% discount the price is \\$64. Student adds 20% back: \\$64 + \\$12.80 = \\$76.80.',
          correction: 'Divide by the multiplier: \\$64 / 0.80 = **\\$80**. The 20% was taken off the original, not off \\$64. Reversing means undoing the multiplication.',
        },
        {
          type: 'tip',
          content: '**Multiplier approach**: Convert each change to (1±r), multiply for forward, divide for reverse. **Formula approach**: Part = Percent $\\times$ Whole for "percent of"; (New-Old)/Old for change. Use multipliers for chained or reverse problems.',
        },
      ],
    },

    methods: {
      title: 'Methods',
      summary: 'Step-by-step solving workflows for every percent problem type.',
      blocks: [
        { type: 'heading', content: 'Method 1: Word-to-Equation Translation' },
        {
          type: 'steps',
          title: 'Solving "percent of" sentences',
          items: [
            'Replace **"what"** with x, **"is"** with =, **"of"** with $\\times$',
            'Convert the percent to a decimal ($\\div$ 100)',
            'Solve the one-variable equation',
          ],
        },
        { type: 'heading', content: 'Method 2: Multiplier Method (Increase / Decrease)' },
        {
          type: 'steps',
          title: 'Single or chained percent changes',
          items: [
            'Convert each change to a multiplier: +r% → (1 + r/100), -r% → (1 - r/100)',
            'Multiply: New = Original $\\times$ m₁ $\\times$ m₂ $\\times$ …',
            'To reverse, **divide** by the multiplier instead of multiplying',
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Multiplier + Percent Change',
          content: 'Forward: multiply by (1 ± r). Reverse: divide. Percent change = (New - Old)/Old $\\times$ 100. Always divide by **original**.',
        },
      ],
    },

    commonTraps: {
      title: 'Common Traps',
      summary: 'The five errors College Board embeds in percent answer choices.',
      blocks: [
        {
          type: 'trapCard',
          title: 'Dividing by the Wrong Base',
          wrong: 'Price went \\$80 → \\$100. Student: (100-80)/100 = 20%.',
          correction: 'Always divide by the **original**: (100-80)/80 = **25%**. The SAT includes 20% as a trap choice.',
        },
        {
          type: 'trapCard',
          title: 'Adding Successive Percents',
          wrong: '+10% then +10% → "that\'s 20% total."',
          correction: '1.10 $\\times$ 1.10 = 1.21 → **21% increase**. Successive percents multiply; they never add.',
        },
        {
          type: 'trapCard',
          title: 'Increase Then Equal Decrease Cancels',
          wrong: '+25% then -25% returns to the original.',
          correction: '1.25 $\\times$ 0.75 = 0.9375 → net **6.25% decrease**. The decrease applies to the larger intermediate value.',
        },
        {
          type: 'trapCard',
          title: 'Reversing by Subtracting',
          wrong: 'After a 20% discount the price is \\$64. Student adds 20%: \\$64 + \\$12.80 = \\$76.80.',
          correction: 'Divide by the multiplier: \\$64 / 0.80 = **\\$80**. The 20% was taken off the original, not off \\$64.',
        },
        {
          type: 'trapCard',
          title: '"Percent of" vs. "Percent More Than"',
          wrong: 'Treating "A is 30% more than B" as A = 0.30B.',
          correction: '"30% **of** B" → A = 0.30B. "30% **more than** B" → A = 1.30B. The word "more" adds 1 to the multiplier.',
        },
      ],
    },

    workedExamples: {
      title: 'Worked Examples',
      summary: 'Full solutions to a Medium reverse-percent problem and a Hard successive-change problem.',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'After a 15% membership increase, a gym has 460 members. How many members did the gym have before the increase?',
          steps: [
            { label: 'Identify multiplier', content: '15% increase → $\\times 1.15$' },
            { label: 'Reverse it', content: 'Original = 460 / 1.15 = **400**' },
            { label: 'Verify', content: '400 $\\times$ 1.15 = 460 ✓' },
          ],
        },
        {
          type: 'example',
          difficulty: 'Hard',
          problem: 'A laptop is 25% off, then 10% sales tax is applied to the sale price. If the original price is \\$800, what is the final cost? What single multiplier converts original price to final cost?',
          steps: [
            { label: 'Discount multiplier', content: '25% off → $\\times 0.75$' },
            { label: 'Tax multiplier', content: '10% tax → $\\times 1.10$' },
            { label: 'Chain them', content: '\\$800 $\\times$ 0.75 $\\times$ 1.10 = \\$800 $\\times$ 0.825 = **\\$660**' },
            { label: 'Single multiplier', content: '0.75 $\\times$ 1.10 = **0.825** — equivalent to a net 17.5% discount' },
          ],
        },
      ],
    },

    visualModels: {
      title: 'Visual Models',
      summary: 'The percent bar, the multiplier number line, and the shrinking/growing box model.',
      blocks: [
        { type: 'heading', content: 'The Multiplier Number Line' },
        {
          type: 'diagramRef',
          description: 'Number line from 0 to 2.0: 0.75 = 25% decrease, 1.00 = no change, 1.20 = 20% increase, 1.50 = 50% increase, 2.00 = doubling. Left of 1 = decrease, right of 1 = increase.',
        },
        { type: 'heading', content: 'Successive Changes: Shrinking/Growing Box' },
        {
          type: 'diagramRef',
          description: 'Box 1: 100 units (original). Box 2: 120 units (+20%). Box 3: 108 units (-10% of 120, not of 100). The 10% decrease removes 12 units, not 10 — showing why successive percents don\'t add.',
        },
        {
          type: 'keyInsight',
          content: 'Every percent change is a multiplication, never an addition. The visual of a box growing then shrinking makes concrete why +20% then -10% yields a net 8% increase (1.20 $\\times$ 0.90 = 1.08), not +10%.',
        },
      ],
    },

    speedStrategy: {
      title: 'Speed & Strategy',
      summary: 'Benchmark fractions, the "use 100" trick, and DESMOS for repeated-percent models.',
      blocks: [
        {
          type: 'strategyCard',
          title: 'Benchmark Fractions for Mental Math',
          icon: '⚡',
          timing: '~5s',
          content: '10% = $\\div$10. 5% = half of 10%. 1% = $\\div$100. 25% = $\\div$4. 20% = $\\div$5. Build any percent from these. Example: 15% of 240 = 10%(24) + 5%(12) = 36.',
        },
        {
          type: 'strategyCard',
          title: 'Plug In 100 for Variables',
          icon: '🔢',
          timing: '~15s',
          content: 'When a percent problem uses only variables, set the original to 100. Every percent directly equals the number. 30% increase on 100 = 130; then 20% decrease = 130 $\\times$ 0.80 = 104. Net: 4% increase.',
        },
        {
          type: 'strategyCard',
          title: 'DESMOS for Growth/Decay',
          icon: '📊',
          timing: '~20s',
          content: 'Type y = a(1+r)^x with given values. Read off any future value on the graph. Intersect with y = target to find when a threshold is reached.',
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Time Budget',
          content: '"Percent of" translation: **15–20s**. Percent change: **30–45s**. Successive or reverse percent: **45–60s**. Over 90s → wrong setup.',
        },
      ],
    },

    checkpoint: {
      title: 'Checkpoint',
      summary: 'Two retrieval questions covering reverse percents and successive changes.',
      blocks: [
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'After a 30% increase, a company has 910 employees. How many did it have before?',
          answer: 'Original $\\times$ 1.30 = 910 → Original = 910 / 1.30 = **700 employees**.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'A town\'s population of 20,000 grows 5% per year. What is the population after 3 years?',
          answer: '20,000 $\\times$ (1.05)³ = 20,000 $\\times$ 1.157625 ≈ **23,153**.',
        },
      ],
    },
  },
};
