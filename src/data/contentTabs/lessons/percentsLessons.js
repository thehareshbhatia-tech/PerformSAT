export const percentsLessonTabs = {

  1: {
    moduleId: 'percents',
    title: 'Introduction to Percents',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Percent literally means "per hundred." Every percent problem reduces to fractions and decimals — master the conversions and the rest follows.',
        blocks: [
          {
            type: 'text',
            content: 'The word **percent** comes from the Latin *per centum* — "for every hundred." So $45\\%$ means $45$ out of every $100$, or $\\frac{45}{100}$, or $0.45$. These three representations are completely interchangeable.',
          },
          {
            type: 'formula',
            label: 'The Percent Identity',
            content: '$$p\\% = \\frac{p}{100}$$',
            note: 'This single fact unlocks every conversion.',
          },
          {
            type: 'table',
            title: 'Converting Between Forms',
            headers: ['From → To', 'Method', 'Example'],
            rows: [
              ['Percent → Decimal', 'Divide by $100$ (move decimal 2 left)', '$35\\% \\to 0.35$'],
              ['Decimal → Percent', 'Multiply by $100$ (move decimal 2 right)', '$0.08 \\to 8\\%$'],
              ['Fraction → Percent', 'Divide numerator by denominator, then $\\times 100$', '$\\frac{3}{8} = 0.375 \\to 37.5\\%$'],
              ['Percent → Fraction', 'Put over $100$ and simplify', '$60\\% = \\frac{60}{100} = \\frac{3}{5}$'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'On the SAT, converting **percent to decimal** is the single most-used micro-skill. Every time you see $p\\%$ in a calculation, your first move should be to replace it with $\\frac{p}{100}$ or $0.0p$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Quick Fraction ↔ Percent Drill',
            items: [
              'Start with the fraction: $\\frac{a}{b}$',
              'Divide: $a \\div b$ to get a decimal',
              'Multiply by $100$ to get a percent',
              'To reverse: divide the percent by $100$, then simplify the fraction',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Decimal-Point Drift',
            wrong: 'Student converts $4\\%$ as $0.4$ instead of $0.04$.',
            correction: 'Move the decimal **two** places left, not one. $4\\% = 0.04$. A quick check: $0.4 = 40\\%$, which is way too large.',
          },
          {
            type: 'trapCard',
            title: 'Fraction → Percent Without ×100',
            wrong: '$\\frac{1}{4} = 0.25$, so the answer is "$0.25\\%$."',
            correction: '$\\frac{1}{4} = 0.25 = 25\\%$. You must multiply the decimal by $100$ to express it as a percent.',
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'Express $\\frac{7}{20}$ as a percent.',
            answer: '$\\frac{7}{20} = 0.35 = 35\\%$',
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'percents',
    title: 'Percent Of Questions',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: '"What is 30% of 200?" is the most common percent question on the SAT. It always translates to multiplication.',
        blocks: [
          {
            type: 'text',
            content: 'Every "percent of" question follows one equation. The word **is** means equals, **of** means multiply, and the percent converts to a decimal:',
          },
          {
            type: 'formula',
            label: 'The Is / Of Equation',
            content: '$$\\text{Part} = \\text{Percent (as decimal)} \\times \\text{Whole}$$',
            note: '"is" = Part,  "of" = × Whole',
          },
          {
            type: 'table',
            title: 'Translation Guide',
            headers: ['English', 'Algebra'],
            rows: [
              ['What **is** $30\\%$ **of** $200$?', '$x = 0.30 \\times 200$'],
              ['$45$ **is** what percent **of** $180$?', '$45 = \\frac{p}{100} \\times 180$'],
              ['$60$ **is** $25\\%$ **of** what?', '$60 = 0.25 \\times w$'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'There are only **three** unknowns that can be asked: the **part**, the **percent**, or the **whole**. Identify which one is missing, plug the other two into $\\text{Part} = \\%_{\\text{decimal}} \\times \\text{Whole}$, and solve.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'What is $15\\%$ of $240$?',
            steps: [
              { label: 'Convert', content: '$15\\% = 0.15$' },
              { label: 'Multiply', content: '$0.15 \\times 240 = 36$' },
              { label: 'Answer', content: '$36$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A shirt normally costs $\\$80$. It is on sale for $\\$52$. What percent discount is this?',
            steps: [
              { label: 'Find discount amount', content: '$80 - 52 = 28$' },
              { label: 'Set up equation', content: '$28 = \\frac{p}{100} \\times 80$' },
              { label: 'Solve', content: '$p = \\frac{28}{80} \\times 100 = 35$' },
              { label: 'Answer', content: '$35\\%$ discount' },
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Wrong "Whole"',
            wrong: '"15 is what percent of 60?" → Student computes $\\frac{60}{15}$ instead of $\\frac{15}{60}$.',
            correction: 'The number after **"of"** is always the **whole** (denominator). Part ÷ Whole: $\\frac{15}{60} = 0.25 = 25\\%$.',
          },
        ],
      },
      speedStrategy: {
        title: 'Speed & Strategy',
        blocks: [
          {
            type: 'strategyCard',
            title: 'Benchmark Percents',
            icon: '⚡',
            timing: '~5s',
            content: 'Memorize: $10\\% =$ divide by $10$; $25\\% = \\frac{1}{4}$; $33.\\overline{3}\\% = \\frac{1}{3}$; $50\\% = \\frac{1}{2}$. Build any percent from these. For $15\\%$: take $10\\%$ and add half of it.',
          },
        ],
      },
    },
  },

  8: {
    moduleId: 'percents',
    title: 'Percent Change',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Percent change measures how much a quantity grew or shrank relative to where it started.',
        blocks: [
          {
            type: 'formula',
            label: 'Percent Change Formula',
            content: '$$\\text{Percent Change} = \\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100$$',
            note: 'Positive result = increase; Negative result = decrease',
          },
          {
            type: 'text',
            content: 'The denominator is always the **original** (old) value — the value *before* the change happened. This is the number-one source of errors on percent-change problems.',
          },
          {
            type: 'comparison',
            items: [
              {
                label: 'Percent Increase',
                variant: 'correct',
                content: 'New > Old → result is positive.\nA price rising from $\\$40$ to $\\$50$:\n$$\\frac{50 - 40}{40} \\times 100 = 25\\%$$',
              },
              {
                label: 'Percent Decrease',
                variant: 'wrong',
                content: 'New < Old → result is negative (report as decrease).\nA price dropping from $\\$50$ to $\\$40$:\n$$\\frac{40 - 50}{50} \\times 100 = -20\\%$$',
              },
            ],
          },
          {
            type: 'keyInsight',
            content: 'Notice: a $\\$40 \\to \\$50$ increase is $25\\%$, but a $\\$50 \\to \\$40$ decrease is only $20\\%$. The same dollar change produces **different** percents because the **base** (denominator) is different. The SAT loves testing this asymmetry.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A town\'s population grew from $12{,}000$ to $15{,}600$. What was the percent increase?',
            steps: [
              { label: 'Find change', content: '$15{,}600 - 12{,}000 = 3{,}600$' },
              { label: 'Divide by old', content: '$\\frac{3{,}600}{12{,}000} = 0.30$' },
              { label: 'Convert', content: '$0.30 \\times 100 = 30\\%$' },
              { label: 'Answer', content: '$30\\%$ increase' },
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Using the New Value as the Base',
            wrong: 'Price goes from $\\$80$ to $\\$100$. Student computes $\\frac{20}{100} = 20\\%$.',
            correction: 'The base is the **original** value: $\\frac{100 - 80}{80} = \\frac{20}{80} = 25\\%$.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Percent Change with Percent Of',
            wrong: '"What percent of 80 is 100?" vs. "What is the percent increase from 80 to 100?" — treated as the same.',
            correction: '"Percent of" gives $\\frac{100}{80} = 125\\%$. "Percent change" gives $\\frac{20}{80} = 25\\%$. They are different questions.',
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'A stock price drops from $\\$150$ to $\\$120$. What is the percent decrease?',
            answer: '$\\frac{150 - 120}{150} \\times 100 = \\frac{30}{150} \\times 100 = 20\\%$ decrease.',
          },
        ],
      },
    },
  },

  13: {
    moduleId: 'percents',
    title: 'Percent Models',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The multiplier model turns percent increases and decreases into a single multiplication — the fastest approach on the SAT.',
        blocks: [
          {
            type: 'text',
            content: 'Instead of calculating a percent and adding/subtracting, use a **multiplier**: one number that accomplishes both steps at once.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Increase by p%', formula: '$\\times (1 + \\frac{p}{100})$', note: '15% increase → ×1.15' },
              { label: 'Decrease by p%', formula: '$\\times (1 - \\frac{p}{100})$', note: '20% decrease → ×0.80' },
              { label: 'Compound Growth', formula: '$A = P(1 + r)^n$', note: 'r = rate per period, n = periods' },
              { label: 'Compound Decay', formula: '$A = P(1 - r)^n$', note: 'r = rate per period, n = periods' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'A $20\\%$ increase followed by a $20\\%$ decrease does **not** return to the original value. Multiplier: $1.20 \\times 0.80 = 0.96$, so you end up $4\\%$ below where you started. The SAT tests this repeatedly.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Compound Percent Change',
            items: [
              'Convert each change to its multiplier: increase by $p\\%$ → $1 + \\frac{p}{100}$, decrease by $p\\%$ → $1 - \\frac{p}{100}$',
              'Multiply all the multipliers together: $M_{\\text{total}} = m_1 \\times m_2 \\times \\cdots$',
              'Apply to the starting value: $\\text{Final} = \\text{Start} \\times M_{\\text{total}}$',
              'To find the net percent change: $(M_{\\text{total}} - 1) \\times 100$',
            ],
          },
          {
            type: 'tip',
            content: 'On Bluebook compound-interest problems, identify $P$ (principal), $r$ (rate per period), and $n$ (number of periods). Plug directly into $A = P(1 + r)^n$. No need to compute year-by-year.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A car loses $15\\%$ of its value each year. If the car is worth $\\$24{,}000$ today, what will it be worth in $3$ years?',
            steps: [
              { label: 'Identify multiplier', content: 'Decrease by $15\\%$ → multiply by $0.85$ each year' },
              { label: 'Set up', content: '$A = 24{,}000 \\times (0.85)^3$' },
              { label: 'Compute', content: '$(0.85)^3 = 0.614125$' },
              { label: 'Multiply', content: '$24{,}000 \\times 0.614125 = 14{,}739$' },
              { label: 'Answer', content: '$\\$14{,}739$' },
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Adding Percents Instead of Multiplying',
            wrong: '25% increase then 25% increase = 50% total increase.',
            correction: 'Multipliers: $1.25 \\times 1.25 = 1.5625$, so the total increase is $56.25\\%$, not $50\\%$. Always multiply, never add.',
          },
        ],
      },
    },
  },
};
