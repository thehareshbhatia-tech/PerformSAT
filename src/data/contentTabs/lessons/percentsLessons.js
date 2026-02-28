export const percentsLessonTabs = {

  // ───────────────────────────────────────────────────────
  // SECTION 1: Percent Fundamentals
  // ───────────────────────────────────────────────────────

  1: {
    moduleId: 'percents',
    title: 'Introduction to Percents',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Percent means "per hundred." Every percent problem reduces to fractions and decimals — master the conversions and the rest follows.',
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
            content: 'Converting **percent to decimal** is the single most-used micro-skill in SAT percent problems. Every time you see $p\\%$ in a calculation, replace it with $\\frac{p}{100}$ or its decimal equivalent before doing anything else.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Conversion Speed',
            content: 'Recognition cue: any problem involving percents in calculations. First move: convert the percent to a decimal — $p\\% = \\frac{p}{100}$. This single step prevents the most common arithmetic errors on percent problems.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'Benchmark Percents',
            content: '$10\\% = \\frac{1}{10}$, $25\\% = \\frac{1}{4}$, $33.\\overline{3}\\% = \\frac{1}{3}$, $50\\% = \\frac{1}{2}$, $75\\% = \\frac{3}{4}$, $20\\% = \\frac{1}{5}$. Build any percent from these anchors.',
          },
          {
            type: 'trapCard',
            title: 'Decimal Point Drift',
            wrong: '$4\\%$ converted as $0.4$ instead of $0.04$.',
            correction: 'Move the decimal **two** places left: $4\\% = 0.04$. Quick check: $0.4 = 40\\%$, which is $10\\times$ too large.',
          },
          {
            type: 'tip',
            content: 'Benchmark shortcut: $10\\%$ of any number = divide by $10$. $1\\%$ = divide by $100$. For $15\\%$: take $10\\%$ and add half of it ($5\\%$).',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Quick Fraction ↔ Percent Conversion',
            items: [
              'Start with the fraction: $\\frac{a}{b}$',
              'Divide: $a \\div b$ to get a decimal',
              'Multiply by $100$ to get a percent',
              'To reverse: divide the percent by $100$, then simplify the fraction',
            ],
          },
          {
            type: 'steps',
            title: 'Building Any Percent from Benchmarks',
            items: [
              'Find $10\\%$ by dividing the number by $10$',
              'Find $1\\%$ by dividing the number by $100$',
              'Combine: $35\\% = 3 \\times 10\\% + 5 \\times 1\\%$',
              'Half-steps: $5\\% = \\frac{1}{2} \\times 10\\%$, $25\\% = \\frac{1}{2} \\times 50\\%$',
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
            correction: 'Move the decimal **two** places left, not one. $4\\% = 0.04$. A quick check: $0.4 = 40\\%$, which is far too large.',
          },
          {
            type: 'trapCard',
            title: 'Fraction → Percent Without ×100',
            wrong: '$\\frac{1}{4} = 0.25$, so the answer is "$0.25\\%$."',
            correction: '$\\frac{1}{4} = 0.25 = 25\\%$. Multiply the decimal by $100$ to express it as a percent.',
          },
          {
            type: 'trapCard',
            title: 'Percent Greater Than 100',
            wrong: 'Student assumes a percent cannot exceed $100\\%$.',
            correction: '$\\frac{5}{4} = 1.25 = 125\\%$. Percents above $100\\%$ represent quantities larger than the whole.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Express $\\frac{7}{20}$ as a percent.',
            steps: [
              { label: 'Divide', content: '$7 \\div 20 = 0.35$' },
              { label: 'Convert', content: '$0.35 \\times 100 = 35\\%$' },
              { label: 'Answer', content: '$35\\%$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A student scored $42$ out of $60$ on a quiz. What percent did the student score?',
            steps: [
              { label: 'Set up fraction', content: '$\\frac{42}{60}$' },
              { label: 'Simplify', content: '$\\frac{42}{60} = \\frac{7}{10} = 0.70$' },
              { label: 'Convert', content: '$0.70 \\times 100 = 70\\%$' },
              { label: 'Answer', content: '$70\\%$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'If $0.6\\%$ of a number is $3$, what is the number?',
            steps: [
              { label: 'Convert percent', content: '$0.6\\% = 0.006$' },
              { label: 'Set up equation', content: '$0.006 \\times n = 3$' },
              { label: 'Solve', content: '$n = \\frac{3}{0.006} = 500$' },
              { label: 'Answer', content: '$500$' },
            ],
          },
        ],
      },
    },
  },

  // ───────────────────────────────────────────────────────
  // SECTION 2: Percent Of Questions
  // ───────────────────────────────────────────────────────

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
            content: '$$\\text{Part} = \\frac{\\text{Percent}}{100} \\times \\text{Whole}$$',
            note: '"is" = Part, "of" = × Whole, "what" = unknown variable',
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
            content: 'There are only **three** unknowns that can be asked: the **part**, the **percent**, or the **whole**. Identify which one is missing, plug the other two into $\\text{Part} = \\frac{\\%}{100} \\times \\text{Whole}$, and solve.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'The Is/Of Translation',
            content: 'Recognition cue: "What is $p\\%$ of $n$?" or "$a$ is what percent of $b$?" First move: translate using **is = equals**, **of = multiply**, **what = unknown**. Set up the equation and solve for the one missing piece.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Three Variants, One Formula',
            content: 'Missing the **part** → multiply. Missing the **percent** → divide part by whole. Missing the **whole** → divide part by percent. Identify which unknown is asked before computing.',
          },
          {
            type: 'trapCard',
            title: 'Swapping Part and Whole',
            wrong: '"$15$ is what percent of $60$?" Student computes $\\frac{60}{15} = 4 = 400\\%$.',
            correction: 'The number after "of" is the **whole** (denominator): $\\frac{15}{60} = 0.25 = 25\\%$. Part ÷ Whole, not Whole ÷ Part.',
          },
          {
            type: 'tip',
            content: 'Decision rule: Missing the part → multiply percent × whole. Missing the percent → divide part by whole. Missing the whole → divide part by percent.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Solving Any "Percent Of" Problem',
            items: [
              'Identify the three quantities: **Part**, **Percent**, **Whole**',
              'Determine which one is unknown',
              'Translate the English into $\\text{Part} = \\frac{\\%}{100} \\times \\text{Whole}$',
              'Solve algebraically for the unknown',
            ],
          },
          {
            type: 'strategyCard',
            title: 'Benchmark Percents for Speed',
            icon: '⚡',
            timing: '~5s',
            content: 'Memorize: $10\\% =$ divide by $10$; $25\\% = \\frac{1}{4}$; $33.\\overline{3}\\% = \\frac{1}{3}$; $50\\% = \\frac{1}{2}$. Build any percent from these.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Wrong "Whole"',
            wrong: '"$15$ is what percent of $60$?" → Student computes $\\frac{60}{15}$ instead of $\\frac{15}{60}$.',
            correction: 'The number after **"of"** is always the **whole** (denominator). Part ÷ Whole: $\\frac{15}{60} = 0.25 = 25\\%$.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Convert Percent to Decimal',
            wrong: '"$20\\%$ of $50$" → $20 \\times 50 = 1000$.',
            correction: 'Convert first: $20\\% = 0.20$. Then $0.20 \\times 50 = 10$.',
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
            problem: '$45$ is what percent of $180$?',
            steps: [
              { label: 'Identify', content: 'Part $= 45$, Whole $= 180$, Percent $= ?$' },
              { label: 'Divide', content: '$\\frac{45}{180} = 0.25$' },
              { label: 'Convert', content: '$0.25 \\times 100 = 25\\%$' },
              { label: 'Answer', content: '$25\\%$' },
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
    },
  },

  3: {
    moduleId: 'percents',
    title: 'Simple Percent Of #1',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Finding the part when the percent and whole are given: multiply the decimal form of the percent by the whole.',
        blocks: [
          {
            type: 'formula',
            label: 'Find the Part',
            content: '$$\\text{Part} = \\frac{p}{100} \\times \\text{Whole}$$',
            note: 'Convert the percent to a decimal first, then multiply.',
          },
          {
            type: 'text',
            content: 'When a problem gives you both the percent and the whole and asks "how much?" or "what is?", you are solving for the **part**. This is the most direct form of the percent-of equation.',
          },
          {
            type: 'keyInsight',
            content: 'The percent always divides by $100$ before multiplying. Skipping this conversion is the single most frequent arithmetic error in percent problems.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"What Is $p\\%$ of $n$?"',
            content: 'Recognition cue: a percent and a whole are both given; the question asks for the result. First move: convert $p\\%$ to $\\frac{p}{100}$ and multiply by $n$.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Divide by 100',
            wrong: '$25\\%$ of $60$ → $25 \\times 60 = 1500$.',
            correction: '$25\\% = 0.25$. Then $0.25 \\times 60 = 15$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding the Part',
            items: [
              'Read the problem and identify the percent ($p$) and whole ($n$)',
              'Convert: $p\\% \\to \\frac{p}{100}$',
              'Multiply: $\\frac{p}{100} \\times n$',
              'Label the answer with proper units if required',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A class has $120$ students. If $40\\%$ are enrolled in AP courses, how many students are in AP courses?',
            steps: [
              { label: 'Convert', content: '$40\\% = 0.40$' },
              { label: 'Multiply', content: '$0.40 \\times 120 = 48$' },
              { label: 'Answer', content: '$48$ students' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'What is $8\\%$ of $\\$250$?',
            steps: [
              { label: 'Convert', content: '$8\\% = 0.08$' },
              { label: 'Multiply', content: '$0.08 \\times 250 = 20$' },
              { label: 'Answer', content: '$\\$20$' },
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
            question: 'What is $12\\%$ of $350$?',
            answer: '$12\\% = 0.12$. $0.12 \\times 350 = 42$.',
          },
          {
            type: 'checkpointQuestion',
            number: 2,
            question: 'A store marks up an item by $75\\%$. If the wholesale cost is $\\$40$, what is the markup amount?',
            answer: '$75\\% = 0.75$. $0.75 \\times 40 = \\$30$.',
          },
        ],
      },
    },
  },

  4: {
    moduleId: 'percents',
    title: 'Simple Percent Of #2',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Finding the whole when the part and percent are given: divide the part by the decimal form of the percent.',
        blocks: [
          {
            type: 'formula',
            label: 'Find the Whole',
            content: '$$\\text{Whole} = \\frac{\\text{Part}}{\\frac{p}{100}} = \\frac{\\text{Part} \\times 100}{p}$$',
            note: 'Rearrange the percent-of equation to isolate the whole.',
          },
          {
            type: 'text',
            content: 'When a problem says "$a$ is $p\\%$ of what number?", you know the part ($a$) and the percent ($p$). Solve for the whole by dividing the part by the percent expressed as a decimal.',
          },
          {
            type: 'keyInsight',
            content: 'Since you are dividing by a number less than $1$ (the decimal percent), the whole will always be **larger** than the part. Use this as a sanity check.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"$a$ Is $p\\%$ of What?"',
            content: 'Recognition cue: a part and a percent are both given; the question asks for the original total. First move: $\\text{Whole} = \\frac{\\text{Part}}{p/100}$.',
          },
          {
            type: 'trapCard',
            title: 'Multiplying Instead of Dividing',
            wrong: '"$30$ is $20\\%$ of what?" → $30 \\times 0.20 = 6$.',
            correction: 'Finding the whole requires **division**: $\\frac{30}{0.20} = 150$. The whole must be larger than the part.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding the Whole',
            items: [
              'Identify the part and the percent from the problem',
              'Convert the percent to a decimal: $p\\% = \\frac{p}{100}$',
              'Divide: $\\text{Whole} = \\frac{\\text{Part}}{\\text{decimal}}$',
              'Verify: $\\text{decimal} \\times \\text{Whole}$ should give back the part',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: '$18$ is $30\\%$ of what number?',
            steps: [
              { label: 'Convert', content: '$30\\% = 0.30$' },
              { label: 'Divide', content: '$\\frac{18}{0.30} = 60$' },
              { label: 'Verify', content: '$0.30 \\times 60 = 18$ ✓' },
              { label: 'Answer', content: '$60$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A donation of $\\$450$ represents $12\\%$ of the fundraising goal. What is the full goal?',
            steps: [
              { label: 'Identify', content: 'Part $= 450$, Percent $= 12\\%$, Whole $= ?$' },
              { label: 'Convert', content: '$12\\% = 0.12$' },
              { label: 'Divide', content: '$\\frac{450}{0.12} = 3{,}750$' },
              { label: 'Answer', content: '$\\$3{,}750$' },
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
            question: '$56$ is $35\\%$ of what number?',
            answer: '$35\\% = 0.35$. $\\frac{56}{0.35} = 160$.',
          },
          {
            type: 'checkpointQuestion',
            number: 2,
            question: 'A tip of $\\$9$ was $15\\%$ of the meal cost. What was the meal cost?',
            answer: '$15\\% = 0.15$. $\\frac{9}{0.15} = \\$60$.',
          },
        ],
      },
    },
  },

  5: {
    moduleId: 'percents',
    title: 'Simple Percent Of #3',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Finding the percent when the part and whole are given: divide the part by the whole, then multiply by 100.',
        blocks: [
          {
            type: 'formula',
            label: 'Find the Percent',
            content: '$$\\text{Percent} = \\frac{\\text{Part}}{\\text{Whole}} \\times 100$$',
            note: 'Always divide part by whole — the number after "of" is the whole.',
          },
          {
            type: 'text',
            content: 'When a problem asks "$a$ is what percent of $b$?", the part is $a$ and the whole is $b$. Divide $a$ by $b$ to get the decimal, then multiply by $100$ to express as a percent.',
          },
          {
            type: 'keyInsight',
            content: 'The number right after the word **"of"** is always the whole (the denominator). Misidentifying the whole is the most common error in this problem type.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"$a$ Is What Percent of $b$?"',
            content: 'Recognition cue: both a part and a whole are given; the question asks for the percent. First move: $\\frac{\\text{Part}}{\\text{Whole}} \\times 100$. The word "of" marks the whole.',
          },
          {
            type: 'trapCard',
            title: 'Flipping the Fraction',
            wrong: '"$12$ is what percent of $48$?" → $\\frac{48}{12} = 4 = 400\\%$.',
            correction: '$\\frac{12}{48} = 0.25 = 25\\%$. The part ($12$) goes in the numerator; the whole ($48$) in the denominator.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding the Percent',
            items: [
              'Identify the part (the "is" value) and the whole (the "of" value)',
              'Divide: $\\frac{\\text{Part}}{\\text{Whole}}$',
              'Multiply by $100$ to convert to percent',
              'Sanity check: if part < whole, answer should be less than $100\\%$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: '$27$ is what percent of $90$?',
            steps: [
              { label: 'Divide', content: '$\\frac{27}{90} = 0.30$' },
              { label: 'Convert', content: '$0.30 \\times 100 = 30\\%$' },
              { label: 'Answer', content: '$30\\%$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Out of $250$ surveyed, $65$ preferred brand A. What percent preferred brand A?',
            steps: [
              { label: 'Identify', content: 'Part $= 65$, Whole $= 250$' },
              { label: 'Divide', content: '$\\frac{65}{250} = 0.26$' },
              { label: 'Convert', content: '$0.26 \\times 100 = 26\\%$' },
              { label: 'Answer', content: '$26\\%$' },
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
            question: '$42$ is what percent of $168$?',
            answer: '$\\frac{42}{168} = 0.25 = 25\\%$.',
          },
          {
            type: 'checkpointQuestion',
            number: 2,
            question: 'A basketball player made $36$ free throws out of $48$ attempts. What percent did the player make?',
            answer: '$\\frac{36}{48} = 0.75 = 75\\%$.',
          },
        ],
      },
    },
  },

  6: {
    moduleId: 'percents',
    title: 'Complex Percent Of',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Complex percent-of problems layer multiple percents, successive operations, or disguised relationships — translate each piece separately, then combine.',
        blocks: [
          {
            type: 'text',
            content: 'A "complex" percent-of problem involves more than one percent operation. Common forms: successive percent-of (percent of a percent), combined quantities (total after tax and tip), or problems where the whole itself is a percent-derived quantity.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Successive Percent Of', formula: '$\\frac{a}{100} \\times \\frac{b}{100} \\times W$', note: '$a\\%$ of $b\\%$ of $W$' },
              { label: 'Tax + Tip on Price', formula: '$P \\times (1 + r_{\\text{tax}}) \\times (1 + r_{\\text{tip}})$', note: 'Apply each multiplier in sequence' },
              { label: 'Percent of a Sum', formula: '$\\frac{p}{100} \\times (A + B)$', note: 'Compute the sum first, then take the percent' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'When two percents are applied in succession, multiply their decimal forms — do not add them. $20\\%$ of $50\\%$ of $n$ is $0.20 \\times 0.50 \\times n = 0.10n$, which is $10\\%$ of $n$, not $70\\%$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Multi-Layer Percent Of',
            content: 'Recognition cue: two or more percent operations chained together, or a word problem with tax, tip, discount applied in sequence. First move: convert each percent to a decimal and multiply them together before applying to the base.',
          },
          {
            type: 'trapCard',
            title: 'Adding Successive Percents',
            wrong: '$30\\%$ of $40\\%$ of $200$ → student adds $30 + 40 = 70\\%$, gets $140$.',
            correction: '$0.30 \\times 0.40 = 0.12$. Then $0.12 \\times 200 = 24$. Successive percents multiply; they do not add.',
          },
          {
            type: 'trapCard',
            title: 'Wrong Order of Operations',
            wrong: 'Compute tax on the discounted price, but student applies tax to the original price first.',
            correction: 'Follow the sequence described in the problem. A $10\\%$ discount then $8\\%$ tax: $P \\times 0.90 \\times 1.08$. Reversing the order gives a different result.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Solving Multi-Step Percent Of Problems',
            items: [
              'Break the problem into individual percent operations',
              'Convert each percent to a decimal',
              'Apply each operation in the order described by the problem',
              'Alternatively, multiply all decimal multipliers first, then apply the single combined multiplier to the base',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A store offers a $20\\%$ discount on a $\\$150$ jacket, then charges $8\\%$ sales tax on the discounted price. What is the final price?',
            steps: [
              { label: 'Discount', content: '$150 \\times 0.80 = 120$' },
              { label: 'Tax', content: '$120 \\times 1.08 = 129.60$' },
              { label: 'Answer', content: '$\\$129.60$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A company reports that $60\\%$ of employees are full-time, and $35\\%$ of full-time employees have advanced degrees. What percent of all employees are full-time with advanced degrees?',
            steps: [
              { label: 'Translate', content: '$35\\%$ of $60\\%$ of all employees' },
              { label: 'Multiply decimals', content: '$0.35 \\times 0.60 = 0.21$' },
              { label: 'Convert', content: '$0.21 = 21\\%$' },
              { label: 'Answer', content: '$21\\%$ of all employees' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A meal costs $\\$85$. A $15\\%$ tip is applied, then $9\\%$ tax is charged on the meal plus tip. What is the total?',
            steps: [
              { label: 'Add tip', content: '$85 \\times 1.15 = 97.75$' },
              { label: 'Add tax', content: '$97.75 \\times 1.09 = 106.5475$' },
              { label: 'Round', content: '$\\$106.55$' },
              { label: 'Combined multiplier check', content: '$1.15 \\times 1.09 = 1.2535$; $85 \\times 1.2535 = 106.5475$ ✓' },
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
            question: 'What is $40\\%$ of $25\\%$ of $600$?',
            answer: '$0.40 \\times 0.25 = 0.10$. Then $0.10 \\times 600 = 60$.',
          },
          {
            type: 'checkpointQuestion',
            number: 2,
            question: 'A laptop priced at $\\$800$ is discounted $15\\%$, then an additional $10\\%$ coupon is applied to the reduced price. What is the final price?',
            answer: '$800 \\times 0.85 \\times 0.90 = 800 \\times 0.765 = \\$612$.',
          },
        ],
      },
    },
  },

  7: {
    moduleId: 'percents',
    title: 'Conceptual Percent Of',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Conceptual percent-of problems test understanding of what percent relationships mean, often without requiring calculation.',
        blocks: [
          {
            type: 'text',
            content: 'These problems ask you to reason about percent relationships rather than compute a specific value. They test whether you understand the structure of $\\text{Part} = \\frac{\\%}{100} \\times \\text{Whole}$ at a deeper level.',
          },
          {
            type: 'comparison',
            items: [
              {
                label: 'Proportional Reasoning',
                variant: 'correct',
                content: 'If $a$ is $p\\%$ of $b$, then $b$ is $\\frac{100}{p} \\times 100\\%$ of $a$.\nExample: $20$ is $25\\%$ of $80$, so $80$ is $400\\%$ of $20$.',
              },
              {
                label: 'Common Misconception',
                variant: 'wrong',
                content: 'If $a$ is $25\\%$ of $b$, then $b$ is $25\\%$ of $a$.\nThis is false. Percent-of is not symmetric.',
              },
            ],
          },
          {
            type: 'keyInsight',
            content: 'If $A$ is $p\\%$ of $B$, then $B = \\frac{A}{p/100} = \\frac{100A}{p}$. The reciprocal relationship means $B$ is $\\frac{100}{p} \\times 100\\%$ of $A$. This asymmetry appears frequently on the SAT.',
          },
          {
            type: 'formula',
            label: 'Reciprocal Percent Relationship',
            content: '$$\\text{If } A = \\frac{p}{100} \\cdot B, \\text{ then } B = \\frac{100}{p} \\cdot A$$',
            note: '$A$ is $p\\%$ of $B$ implies $B$ is $\\frac{10{,}000}{p}\\%$ of $A$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Reversing a Percent Relationship',
            content: 'Recognition cue: "If $x$ is $p\\%$ of $y$, what percent of $x$ is $y$?" First move: from $x = \\frac{p}{100} \\cdot y$, solve for $y = \\frac{100}{p} \\cdot x$. The answer is $\\frac{10{,}000}{p}\\%$.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Percent Relationships Are Not Symmetric',
            content: 'If $A$ is $25\\%$ of $B$, then $B$ is $400\\%$ of $A$, not $75\\%$ or $25\\%$. Always set up the equation rather than guessing the reverse.',
          },
          {
            type: 'trapCard',
            title: 'Assuming Symmetry',
            wrong: '"$a$ is $40\\%$ of $b$" → student concludes "$b$ is $60\\%$ of $a$."',
            correction: '$a = 0.40b$, so $b = \\frac{a}{0.40} = 2.5a = 250\\%$ of $a$. The complement $60\\%$ has no role here.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Analyzing Conceptual Percent Problems',
            items: [
              'Translate the verbal relationship into an equation: $A = \\frac{p}{100} \\cdot B$',
              'Rearrange to express the desired quantity',
              'Convert the coefficient back to a percent',
              'If no numbers are given, substitute simple values (e.g., let $B = 100$) and compute directly',
            ],
          },
          {
            type: 'tip',
            content: 'Plugging in $100$ for the whole is the fastest way to solve conceptual percent problems. If $A$ is $40\\%$ of $B$, let $B = 100$, so $A = 40$. Then $B$ as a percent of $A$: $\\frac{100}{40} \\times 100 = 250\\%$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'If $x$ is $30\\%$ of $y$, then $y$ is what percent of $x$?',
            steps: [
              { label: 'Write equation', content: '$x = 0.30y$' },
              { label: 'Solve for y', content: '$y = \\frac{x}{0.30} = \\frac{10x}{3}$' },
              { label: 'Convert', content: '$\\frac{10}{3} \\approx 3.333$, so $y = 333.\\overline{3}\\%$ of $x$' },
              { label: 'Answer', content: '$333\\frac{1}{3}\\%$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'If $a$ is $p\\%$ of $b$ and $b$ is $q\\%$ of $c$, express $a$ as a percent of $c$.',
            steps: [
              { label: 'First relation', content: '$a = \\frac{p}{100} \\cdot b$' },
              { label: 'Second relation', content: '$b = \\frac{q}{100} \\cdot c$' },
              { label: 'Substitute', content: '$a = \\frac{p}{100} \\cdot \\frac{q}{100} \\cdot c = \\frac{pq}{10{,}000} \\cdot c$' },
              { label: 'Answer', content: '$a$ is $\\frac{pq}{100}\\%$ of $c$' },
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
            question: 'If $m$ is $20\\%$ of $n$, what percent of $m$ is $n$?',
            answer: '$m = 0.20n$, so $n = \\frac{m}{0.20} = 5m$. Therefore $n$ is $500\\%$ of $m$.',
          },
          {
            type: 'checkpointQuestion',
            number: 2,
            question: 'If $a$ is $50\\%$ of $b$, and $b$ is $40\\%$ of $c$, what percent of $c$ is $a$?',
            answer: '$a = 0.50 \\times 0.40 \\times c = 0.20c$. So $a$ is $20\\%$ of $c$.',
          },
        ],
      },
    },
  },

  // ───────────────────────────────────────────────────────
  // SECTION 3: Percent Change Questions
  // ───────────────────────────────────────────────────────

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
            content: '$$\\text{Percent Change} = \\frac{\\text{New} - \\text{Original}}{\\text{Original}} \\times 100$$',
            note: 'Positive result = increase; Negative result = decrease.',
          },
          {
            type: 'text',
            content: 'The denominator is always the **original** (old) value — the value *before* the change happened. This is the most common source of errors on percent-change problems.',
          },
          {
            type: 'comparison',
            items: [
              {
                label: 'Percent Increase',
                variant: 'correct',
                content: 'New > Old → positive result.\nA price rising from $\\$40$ to $\\$50$:\n$$\\frac{50 - 40}{40} \\times 100 = 25\\%$$',
              },
              {
                label: 'Percent Decrease',
                variant: 'wrong',
                content: 'New < Old → negative result (report magnitude).\nA price dropping from $\\$50$ to $\\$40$:\n$$\\frac{40 - 50}{50} \\times 100 = -20\\%$$',
              },
            ],
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Multiplier for Increase', formula: '$(1 + r)$', note: '$r = \\frac{p}{100}$' },
              { label: 'Multiplier for Decrease', formula: '$(1 - r)$', note: '$r = \\frac{p}{100}$' },
              { label: 'Find New from Old', formula: '$\\text{New} = \\text{Old} \\times (1 \\pm r)$', note: '$+$ for increase, $-$ for decrease' },
              { label: 'Find Old from New', formula: '$\\text{Old} = \\frac{\\text{New}}{1 \\pm r}$', note: 'Divide by the multiplier to reverse' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'A $\\$40 \\to \\$50$ increase is $25\\%$, but a $\\$50 \\to \\$40$ decrease is only $20\\%$. The same dollar change produces **different** percents because the base (denominator) changes. This asymmetry is tested repeatedly.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"By What Percent Did It Change?"',
            content: 'Recognition cue: two values (before and after) with a question about percent increase or decrease. First move: $\\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100$. The **Old** value is always the denominator.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: '"After a $p\\%$ Increase, the Value Is..."',
            content: 'Recognition cue: an original value and a percent increase/decrease, asking for the new value. First move: $\\text{New} = \\text{Old} \\times (1 + r)$ for increase or $\\text{Old} \\times (1 - r)$ for decrease.',
          },
          {
            type: 'trapCard',
            title: 'Using New as the Base',
            wrong: 'Price goes from $\\$80$ to $\\$100$. Student computes $\\frac{20}{100} = 20\\%$.',
            correction: 'The denominator must be the **original** value: $\\frac{100 - 80}{80} = \\frac{20}{80} = 25\\%$.',
          },
          {
            type: 'tip',
            content: 'A $25\\%$ increase from $80$ to $100$ is NOT reversed by a $25\\%$ decrease. $100 \\times 0.75 = 75 \\neq 80$. Percent change is asymmetric because the base changes direction-to-direction.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Percent Change Calculation',
            items: [
              'Identify the **original** (before) and **new** (after) values',
              'Compute the difference: $\\text{New} - \\text{Original}$',
              'Divide by the **original**: $\\frac{\\text{difference}}{\\text{Original}}$',
              'Multiply by $100$ to convert to a percent',
              'State whether the result is an increase or decrease',
            ],
          },
          {
            type: 'steps',
            title: 'Using the Multiplier Method',
            items: [
              'For a $p\\%$ increase, the multiplier is $1 + \\frac{p}{100}$',
              'For a $p\\%$ decrease, the multiplier is $1 - \\frac{p}{100}$',
              'To find the new value: $\\text{New} = \\text{Old} \\times \\text{multiplier}$',
              'To find the old value: $\\text{Old} = \\frac{\\text{New}}{\\text{multiplier}}$',
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
            wrong: '"What percent of $80$ is $100$?" vs. "What is the percent increase from $80$ to $100$?" — treated as the same.',
            correction: '"Percent of" gives $\\frac{100}{80} = 125\\%$. "Percent change" gives $\\frac{20}{80} = 25\\%$. Different questions, different answers.',
          },
          {
            type: 'trapCard',
            title: 'Assuming Percent Change Is Reversible',
            wrong: 'A $20\\%$ increase followed by a $20\\%$ decrease returns to the original value.',
            correction: '$100 \\times 1.20 = 120$; $120 \\times 0.80 = 96$. Net result: $4\\%$ decrease, not zero.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A stock price rises from $\\$40$ to $\\$50$. What is the percent increase?',
            steps: [
              { label: 'Find change', content: '$50 - 40 = 10$' },
              { label: 'Divide by original', content: '$\\frac{10}{40} = 0.25$' },
              { label: 'Convert', content: '$0.25 \\times 100 = 25\\%$' },
              { label: 'Answer', content: '$25\\%$ increase' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A town\'s population grew from $12{,}000$ to $15{,}600$. What was the percent increase?',
            steps: [
              { label: 'Find change', content: '$15{,}600 - 12{,}000 = 3{,}600$' },
              { label: 'Divide by original', content: '$\\frac{3{,}600}{12{,}000} = 0.30$' },
              { label: 'Convert', content: '$0.30 \\times 100 = 30\\%$' },
              { label: 'Answer', content: '$30\\%$ increase' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'After a $15\\%$ decrease, a laptop costs $\\$680$. What was the original price?',
            steps: [
              { label: 'Identify multiplier', content: '$15\\%$ decrease → multiplier $= 0.85$' },
              { label: 'Set up equation', content: '$0.85 \\times P = 680$' },
              { label: 'Solve', content: '$P = \\frac{680}{0.85} = 800$' },
              { label: 'Answer', content: '$\\$800$' },
            ],
          },
        ],
      },
    },
  },

  9: {
    moduleId: 'percents',
    title: 'Simple Percent Change',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Simple percent change problems give two values and ask for the percent increase or decrease — apply the formula directly.',
        blocks: [
          {
            type: 'formula',
            label: 'Percent Change',
            content: '$$\\text{Percent Change} = \\frac{\\text{New} - \\text{Original}}{\\text{Original}} \\times 100$$',
            note: 'The original value is always the denominator.',
          },
          {
            type: 'text',
            content: 'In simple percent change problems, both the original and new values are stated explicitly. The task is to compute the percent difference relative to the **original** (starting) value.',
          },
          {
            type: 'keyInsight',
            content: 'Read carefully to determine which value is the **original** and which is the **new**. Time words like "was," "started at," or "before" signal the original; "is now," "became," or "after" signal the new value.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Direct Percent Change',
            content: 'Recognition cue: two explicit values with a question about the percent difference. First move: subtract to find the change, divide by the original, multiply by $100$.',
          },
          {
            type: 'trapCard',
            title: 'Dividing by the Wrong Value',
            wrong: 'Population drops from $500$ to $400$. Student computes $\\frac{100}{400} = 25\\%$.',
            correction: 'The original is $500$: $\\frac{100}{500} = 20\\%$ decrease.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Simple Percent Change',
            items: [
              'Identify which value is the original (before) and which is the new (after)',
              'Compute the absolute change: $|\\text{New} - \\text{Original}|$',
              'Divide by the original: $\\frac{\\text{change}}{\\text{Original}}$',
              'Multiply by $100$ and label as increase or decrease',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A gym had $200$ members last year and $230$ members this year. What is the percent increase?',
            steps: [
              { label: 'Find change', content: '$230 - 200 = 30$' },
              { label: 'Divide by original', content: '$\\frac{30}{200} = 0.15$' },
              { label: 'Convert', content: '$0.15 \\times 100 = 15\\%$' },
              { label: 'Answer', content: '$15\\%$ increase' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A stock drops from $\\$72$ to $\\$63$. What is the percent decrease?',
            steps: [
              { label: 'Find change', content: '$72 - 63 = 9$' },
              { label: 'Divide by original', content: '$\\frac{9}{72} = 0.125$' },
              { label: 'Convert', content: '$0.125 \\times 100 = 12.5\\%$' },
              { label: 'Answer', content: '$12.5\\%$ decrease' },
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
            question: 'A store\'s revenue went from $\\$8{,}000$ to $\\$10{,}000$. What is the percent increase?',
            answer: '$\\frac{10{,}000 - 8{,}000}{8{,}000} \\times 100 = \\frac{2{,}000}{8{,}000} \\times 100 = 25\\%$ increase.',
          },
          {
            type: 'checkpointQuestion',
            number: 2,
            question: 'A lake\'s water level dropped from $45$ feet to $36$ feet. What is the percent decrease?',
            answer: '$\\frac{45 - 36}{45} \\times 100 = \\frac{9}{45} \\times 100 = 20\\%$ decrease.',
          },
        ],
      },
    },
  },

  10: {
    moduleId: 'percents',
    title: 'Complex Percent Change #1',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Successive percent changes require multiplier chaining — never add the percents together.',
        blocks: [
          {
            type: 'text',
            content: 'When a quantity undergoes two or more percent changes in sequence, each change applies to the **result** of the previous change, not to the original value. The correct approach is to multiply the individual multipliers.',
          },
          {
            type: 'formula',
            label: 'Successive Percent Changes',
            content: '$$\\text{Final} = \\text{Start} \\times (1 \\pm r_1) \\times (1 \\pm r_2) \\times \\cdots$$',
            note: 'Use $+r$ for increases, $-r$ for decreases. Each $r$ is the rate as a decimal.',
          },
          {
            type: 'keyInsight',
            content: 'A $20\\%$ increase followed by a $20\\%$ decrease does **not** return to the starting value. The combined multiplier is $1.20 \\times 0.80 = 0.96$, which represents a net $4\\%$ decrease.',
          },
          {
            type: 'table',
            title: 'Common Successive Change Results',
            headers: ['Changes', 'Combined Multiplier', 'Net Effect'],
            rows: [
              ['$+10\\%$ then $+10\\%$', '$1.10 \\times 1.10 = 1.21$', '$+21\\%$ (not $+20\\%$)'],
              ['$+20\\%$ then $-20\\%$', '$1.20 \\times 0.80 = 0.96$', '$-4\\%$ (not $0\\%$)'],
              ['$+50\\%$ then $-50\\%$', '$1.50 \\times 0.50 = 0.75$', '$-25\\%$ (not $0\\%$)'],
              ['$-10\\%$ then $-10\\%$', '$0.90 \\times 0.90 = 0.81$', '$-19\\%$ (not $-20\\%$)'],
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
            title: 'Back-to-Back Percent Changes',
            content: 'Recognition cue: a quantity undergoes two or more percent changes in sequence. First move: convert each change to its multiplier, multiply them together, then apply the single combined multiplier to the start value.',
          },
          {
            type: 'trapCard',
            title: 'Adding Percents',
            wrong: 'A $15\\%$ increase then a $10\\%$ increase = $25\\%$ total increase.',
            correction: '$1.15 \\times 1.10 = 1.265$. The net increase is $26.5\\%$, not $25\\%$.',
          },
          {
            type: 'trapCard',
            title: 'Assuming Equal Increases Cancel Equal Decreases',
            wrong: 'A $30\\%$ increase then a $30\\%$ decrease returns to the original.',
            correction: '$1.30 \\times 0.70 = 0.91$. Net result: $9\\%$ decrease.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Chaining Multipliers',
            items: [
              'Convert each percent change to a multiplier: increase by $p\\%$ → $(1 + \\frac{p}{100})$; decrease by $p\\%$ → $(1 - \\frac{p}{100})$',
              'Multiply all multipliers together to get the combined multiplier $M$',
              'Apply: $\\text{Final} = \\text{Start} \\times M$',
              'To find net percent change: $(M - 1) \\times 100$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A stock rises $25\\%$ in January, then falls $20\\%$ in February. What is the net percent change?',
            steps: [
              { label: 'Multipliers', content: 'January: $1.25$; February: $0.80$' },
              { label: 'Combine', content: '$1.25 \\times 0.80 = 1.00$' },
              { label: 'Net change', content: '$(1.00 - 1) \\times 100 = 0\\%$' },
              { label: 'Answer', content: 'No net change' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A town\'s population increases by $10\\%$ one year, then increases by $15\\%$ the next year. If the original population was $20{,}000$, what is the population after two years?',
            steps: [
              { label: 'Multipliers', content: 'Year 1: $1.10$; Year 2: $1.15$' },
              { label: 'Combine', content: '$1.10 \\times 1.15 = 1.265$' },
              { label: 'Apply', content: '$20{,}000 \\times 1.265 = 25{,}300$' },
              { label: 'Answer', content: '$25{,}300$ (net increase of $26.5\\%$)' },
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
            question: 'A price increases by $40\\%$ then decreases by $25\\%$. What is the net percent change?',
            answer: '$1.40 \\times 0.75 = 1.05$. Net change: $(1.05 - 1) \\times 100 = 5\\%$ increase.',
          },
          {
            type: 'checkpointQuestion',
            number: 2,
            question: 'An investment of $\\$5{,}000$ gains $12\\%$ the first year and loses $8\\%$ the second year. What is the final value?',
            answer: '$5{,}000 \\times 1.12 \\times 0.92 = 5{,}000 \\times 1.0304 = \\$5{,}152$.',
          },
        ],
      },
    },
  },

  11: {
    moduleId: 'percents',
    title: 'Complex Percent Change #2',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Finding an original value before a percent change requires dividing by the multiplier, not subtracting the percent.',
        blocks: [
          {
            type: 'text',
            content: 'Many SAT problems give the **result after** a percent change and ask for the **original** value. The key: divide by the multiplier instead of working backwards with subtraction.',
          },
          {
            type: 'formula',
            label: 'Reversing a Percent Change',
            content: '$$\\text{Original} = \\frac{\\text{Final}}{1 \\pm r}$$',
            note: 'Use $+r$ if the change was an increase; $-r$ if a decrease. $r = \\frac{p}{100}$.',
          },
          {
            type: 'comparison',
            items: [
              {
                label: 'Correct: Divide by Multiplier',
                variant: 'correct',
                content: 'After a $25\\%$ increase, the price is $\\$150$.\n$$\\text{Original} = \\frac{150}{1.25} = 120$$',
              },
              {
                label: 'Wrong: Subtract the Percent',
                variant: 'wrong',
                content: 'After a $25\\%$ increase, the price is $\\$150$.\n$25\\%$ of $150 = 37.50$; $150 - 37.50 = 112.50$ ✗',
              },
            ],
          },
          {
            type: 'keyInsight',
            content: 'Subtracting the percent from the final value uses the **wrong base**. The percent was applied to the original, not to the final value. Division by the multiplier automatically uses the correct base.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"Before the Change, the Value Was..."',
            content: 'Recognition cue: a final value and a percent change are given; the question asks for the original. First move: $\\text{Original} = \\frac{\\text{Final}}{\\text{multiplier}}$.',
          },
          {
            type: 'trapCard',
            title: 'Subtracting the Percent of the Final Value',
            wrong: 'After a $20\\%$ increase, the result is $\\$360$. Student computes $20\\%$ of $360 = 72$, then $360 - 72 = 288$.',
            correction: '$\\text{Original} = \\frac{360}{1.20} = 300$. The $20\\%$ was calculated on the original ($300$), not on the final ($360$).',
          },
          {
            type: 'tip',
            content: 'After a $p\\%$ increase, the final value is $(1 + \\frac{p}{100})$ times the original. To undo: divide by $(1 + \\frac{p}{100})$. After a decrease: divide by $(1 - \\frac{p}{100})$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding the Original Value',
            items: [
              'Determine the percent change and its direction (increase or decrease)',
              'Build the multiplier: $(1 + r)$ for increase, $(1 - r)$ for decrease',
              'Divide the final value by the multiplier: $\\text{Original} = \\frac{\\text{Final}}{\\text{multiplier}}$',
              'Verify: $\\text{Original} \\times \\text{multiplier}$ should equal the final value',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'After a $30\\%$ discount, a television costs $\\$490$. What was the original price?',
            steps: [
              { label: 'Multiplier', content: '$30\\%$ decrease → $1 - 0.30 = 0.70$' },
              { label: 'Divide', content: '$\\frac{490}{0.70} = 700$' },
              { label: 'Verify', content: '$700 \\times 0.70 = 490$ ✓' },
              { label: 'Answer', content: '$\\$700$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A city\'s population is $23{,}460$ after two consecutive years of $10\\%$ growth. What was the population two years ago?',
            steps: [
              { label: 'Combined multiplier', content: 'Two years at $+10\\%$: $(1.10)^2 = 1.21$' },
              { label: 'Divide', content: '$\\frac{23{,}460}{1.21} = 19{,}388.43 \\ldots$' },
              { label: 'Round', content: 'Population $\\approx 19{,}388$' },
              { label: 'Verify', content: '$19{,}388 \\times 1.21 \\approx 23{,}459.5$ ✓' },
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
            question: 'After a $15\\%$ increase, a stock is worth $\\$92$. What was the stock worth before the increase?',
            answer: '$\\frac{92}{1.15} = \\$80$.',
          },
          {
            type: 'checkpointQuestion',
            number: 2,
            question: 'After two successive $20\\%$ decreases, an item costs $\\$256$. What was the original price?',
            answer: 'Combined multiplier: $(0.80)^2 = 0.64$. Original $= \\frac{256}{0.64} = \\$400$.',
          },
        ],
      },
    },
  },

  12: {
    moduleId: 'percents',
    title: 'Complex Percent Change #3',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Percent change between computed quantities — problems where the "original" and "new" values themselves require calculation.',
        blocks: [
          {
            type: 'text',
            content: 'Advanced percent change problems embed the original and new values inside other computations: areas, revenues, combined quantities, or expressions with variables. The percent change formula stays the same — the challenge is extracting the correct values first.',
          },
          {
            type: 'formula',
            label: 'Percent Change (Same Formula, Harder Setup)',
            content: '$$\\text{Percent Change} = \\frac{\\text{New Expression} - \\text{Original Expression}}{\\text{Original Expression}} \\times 100$$',
            note: 'Compute each expression fully before applying the formula.',
          },
          {
            type: 'keyInsight',
            content: 'When dimensions change by a percent, areas and volumes change by **different** percents. If a length increases by $p\\%$, the area of a square with that side increases by exactly $((1 + \\frac{p}{100})^2 - 1) \\times 100\\%$.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Side increases by $r$', formula: 'Area multiplier: $(1+r)^2$', note: '$20\\%$ increase in side → $44\\%$ increase in area' },
              { label: 'Radius increases by $r$', formula: 'Circle area multiplier: $(1+r)^2$', note: 'Area depends on $r^2$' },
              { label: 'Edge increases by $r$', formula: 'Volume multiplier: $(1+r)^3$', note: '$10\\%$ increase in edge → $33.1\\%$ increase in volume' },
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
            title: 'Dimensional Percent Change',
            content: 'Recognition cue: a length, radius, or edge changes by $p\\%$ and the question asks about area or volume change. First move: the multiplier for area is $(1+r)^2$; for volume, $(1+r)^3$. Net percent change: $((1+r)^n - 1) \\times 100$.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Revenue = Price × Quantity',
            content: 'If price increases by $a\\%$ and quantity decreases by $b\\%$, the revenue multiplier is $(1 + \\frac{a}{100})(1 - \\frac{b}{100})$. Compute the product to find net revenue change.',
          },
          {
            type: 'trapCard',
            title: 'Doubling the Percent for Area',
            wrong: 'Side increases $20\\%$, so area increases $40\\%$.',
            correction: 'Area multiplier: $(1.20)^2 = 1.44$. Area increases $44\\%$, not $40\\%$. The doubling shortcut only approximates for small percents.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Percent Change with Computed Quantities',
            items: [
              'Compute (or express) the **original** quantity fully',
              'Apply the percent changes to the relevant variables',
              'Compute (or express) the **new** quantity',
              'Apply the percent change formula: $\\frac{\\text{New} - \\text{Original}}{\\text{Original}} \\times 100$',
            ],
          },
          {
            type: 'tip',
            content: 'For variable problems, assign convenient values. If a side is $s$, let $s = 10$. After a $20\\%$ increase, $s = 12$. Original area $= 100$, new area $= 144$. Percent change: $\\frac{44}{100} = 44\\%$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'The radius of a circle increases by $15\\%$. By what percent does the area increase?',
            steps: [
              { label: 'Area multiplier', content: '$(1.15)^2 = 1.3225$' },
              { label: 'Net change', content: '$(1.3225 - 1) \\times 100 = 32.25\\%$' },
              { label: 'Answer', content: 'The area increases by $32.25\\%$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A company raises prices by $10\\%$ but loses $5\\%$ of its customers. By what percent does revenue change?',
            steps: [
              { label: 'Revenue multiplier', content: '$1.10 \\times 0.95 = 1.045$' },
              { label: 'Net change', content: '$(1.045 - 1) \\times 100 = 4.5\\%$' },
              { label: 'Answer', content: 'Revenue increases by $4.5\\%$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Each edge of a cube increases by $10\\%$. By what percent does the volume increase?',
            steps: [
              { label: 'Volume multiplier', content: '$(1.10)^3 = 1.331$' },
              { label: 'Net change', content: '$(1.331 - 1) \\times 100 = 33.1\\%$' },
              { label: 'Answer', content: 'Volume increases by $33.1\\%$' },
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
            question: 'A square\'s side length decreases by $10\\%$. By what percent does the area decrease?',
            answer: 'Area multiplier: $(0.90)^2 = 0.81$. Area decreases by $(1 - 0.81) \\times 100 = 19\\%$.',
          },
          {
            type: 'checkpointQuestion',
            number: 2,
            question: 'A store raises prices by $25\\%$ and loses $20\\%$ of its customers. What is the net percent change in revenue?',
            answer: '$1.25 \\times 0.80 = 1.00$. Net change: $0\\%$ — revenue stays the same.',
          },
        ],
      },
    },
  },

  // ───────────────────────────────────────────────────────
  // SECTION 4: Percent Model Questions
  // ───────────────────────────────────────────────────────

  13: {
    moduleId: 'percents',
    title: 'Percent Models',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The multiplier model turns percent increases and decreases into a single multiplication — the fastest approach for repeated percent changes.',
        blocks: [
          {
            type: 'text',
            content: 'Instead of calculating a percent and adding/subtracting, use a **multiplier**: one number that accomplishes both steps at once. For **repeated** changes over time, the multiplier is raised to a power.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Increase by $p\\%$', formula: '$\\times (1 + \\frac{p}{100})$', note: '$15\\%$ increase → $\\times 1.15$' },
              { label: 'Decrease by $p\\%$', formula: '$\\times (1 - \\frac{p}{100})$', note: '$20\\%$ decrease → $\\times 0.80$' },
              { label: 'Compound Growth', formula: '$A = P(1 + r)^t$', note: '$P$ = initial, $r$ = rate per period, $t$ = periods' },
              { label: 'Compound Decay', formula: '$A = P(1 - r)^t$', note: '$P$ = initial, $r$ = rate per period, $t$ = periods' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'A $20\\%$ increase followed by a $20\\%$ decrease does **not** return to the original value. Multiplier: $1.20 \\times 0.80 = 0.96$, so the result is $4\\%$ below the starting value.',
          },
          {
            type: 'table',
            title: 'Interpreting the Base of an Exponential',
            headers: ['Base $b$', 'Meaning', 'Rate'],
            rows: [
              ['$b > 1$', 'Growth', 'Rate $= (b - 1) \\times 100\\%$'],
              ['$0 < b < 1$', 'Decay', 'Rate $= (1 - b) \\times 100\\%$'],
              ['$b = 1$', 'No change', 'Rate $= 0\\%$'],
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
            title: '"After $n$ Years at $r\\%$..."',
            content: 'Recognition cue: repeated percent change over time (compound interest, depreciation, population growth). First move: identify $P$ (start), $r$ (rate as decimal), $t$ (periods). Apply $A = P(1 \\pm r)^t$.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: '"What Does the $b$ Represent?"',
            content: 'Recognition cue: an exponential equation $A = P \\cdot b^t$ with a question about interpreting $b$. If $b = 1.08$, the quantity increases by $8\\%$ per period. If $b = 0.75$, it decreases by $25\\%$ per period.',
          },
          {
            type: 'trapCard',
            title: 'Adding Percents Instead of Compounding',
            wrong: '$25\\%$ increase then another $25\\%$ increase. Student says total increase $= 50\\%$.',
            correction: 'Multipliers: $1.25 \\times 1.25 = 1.5625$. Total increase is $56.25\\%$, not $50\\%$. Always multiply, never add.',
          },
          {
            type: 'tip',
            content: 'To extract the **rate** from a multiplier: $b = 1.08$ → growth rate $= b - 1 = 0.08 = 8\\%$. $b = 0.75$ → decay rate $= 1 - b = 0.25 = 25\\%$.',
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
              'For $t$ identical periods: multiplier $= (1 \\pm r)^t$',
              'Apply to the starting value: $\\text{Final} = P \\times (1 \\pm r)^t$',
              'To find the net percent change: $((1 \\pm r)^t - 1) \\times 100$',
            ],
          },
          {
            type: 'steps',
            title: 'Reading an Exponential Model',
            items: [
              'Identify the initial value $P$ (the coefficient in front)',
              'Identify the base $b$ (the number being raised to the power)',
              'Determine direction: $b > 1$ = growth, $b < 1$ = decay',
              'Calculate the rate: growth rate $= b - 1$; decay rate $= 1 - b$',
              'Identify the exponent variable and what it represents (usually time)',
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
            wrong: '$25\\%$ increase then $25\\%$ increase $= 50\\%$ total increase.',
            correction: '$1.25 \\times 1.25 = 1.5625$, so the total increase is $56.25\\%$. Compounding always produces more than simple addition.',
          },
          {
            type: 'trapCard',
            title: 'Confusing the Rate with the Base',
            wrong: 'In $A = 500(1.06)^t$, the growth rate is $1.06$.',
            correction: 'The base is $1.06$; the growth **rate** is $1.06 - 1 = 0.06 = 6\\%$.',
          },
          {
            type: 'trapCard',
            title: 'Wrong Period Count',
            wrong: '$5\\%$ annual growth for $3$ years starting in $2020$, ending in $2023$. Student uses $t = 4$.',
            correction: 'From $2020$ to $2023$ is $3$ years, so $t = 3$. Count the number of complete periods between the start and end dates.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A car depreciates by $15\\%$ per year. If the car is worth $\\$24{,}000$ today, what will it be worth in $3$ years?',
            steps: [
              { label: 'Identify multiplier', content: '$15\\%$ decrease → $\\times 0.85$ each year' },
              { label: 'Set up', content: '$A = 24{,}000 \\times (0.85)^3$' },
              { label: 'Compute', content: '$(0.85)^3 = 0.614125$' },
              { label: 'Multiply', content: '$24{,}000 \\times 0.614125 = 14{,}739$' },
              { label: 'Answer', content: '$\\$14{,}739$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'The function $f(t) = 2{,}400(1.03)^t$ models a savings account where $t$ is the number of years. What is the initial deposit and the annual interest rate?',
            steps: [
              { label: 'Initial value', content: '$P = 2{,}400$ — this is the coefficient' },
              { label: 'Base', content: '$b = 1.03$, which is $> 1$, so growth' },
              { label: 'Rate', content: '$r = 1.03 - 1 = 0.03 = 3\\%$' },
              { label: 'Answer', content: 'Initial deposit: $\\$2{,}400$; annual interest rate: $3\\%$' },
            ],
          },
        ],
      },
    },
  },

  14: {
    moduleId: 'percents',
    title: 'Simple Percent Model',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A simple percent model applies a single repeated percent change over time using $A = P(1 \\pm r)^t$.',
        blocks: [
          {
            type: 'formula',
            label: 'Exponential Growth / Decay',
            content: '$$A = P(1 \\pm r)^t$$',
            note: '$P$ = initial value, $r$ = rate per period (decimal), $t$ = number of periods. Use $+$ for growth, $-$ for decay.',
          },
          {
            type: 'text',
            content: 'In the simplest version, you are given three of the four quantities ($A$, $P$, $r$, $t$) and asked to find the fourth. The most common variant: given $P$, $r$, and $t$, find $A$.',
          },
          {
            type: 'keyInsight',
            content: 'The exponent $t$ must match the **period** of the rate $r$. If $r$ is an annual rate, $t$ must be in years. If $r$ is monthly, $t$ must be in months.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Plug and Compute',
            content: 'Recognition cue: a story problem with an initial value, a percent rate, and a time period. First move: identify $P$, $r$, and $t$, then compute $A = P(1 \\pm r)^t$.',
          },
          {
            type: 'trapCard',
            title: 'Using the Percent Directly as the Base',
            wrong: 'An account grows at $5\\%$ per year. Student writes $A = P(5)^t$.',
            correction: 'The base is $1 + 0.05 = 1.05$, not $5$. The rate must be converted to a decimal and added to $1$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Applying the Model',
            items: [
              'Read the problem and identify $P$ (starting value), $r$ (percent rate as decimal), and $t$ (number of periods)',
              'Determine growth ($+r$) or decay ($-r$)',
              'Build the base: $(1 + r)$ or $(1 - r)$',
              'Compute: $A = P \\times \\text{base}^t$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A $\\$1{,}000$ investment earns $6\\%$ interest per year. What is its value after $5$ years?',
            steps: [
              { label: 'Identify', content: '$P = 1{,}000$, $r = 0.06$, $t = 5$' },
              { label: 'Compute base', content: '$1 + 0.06 = 1.06$' },
              { label: 'Apply', content: '$A = 1{,}000 \\times (1.06)^5 = 1{,}000 \\times 1.3382 = 1{,}338.23$' },
              { label: 'Answer', content: '$\\$1{,}338.23$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A machine loses $12\\%$ of its value each year. It currently costs $\\$50{,}000$. What is its value after $4$ years?',
            steps: [
              { label: 'Identify', content: '$P = 50{,}000$, $r = 0.12$, $t = 4$' },
              { label: 'Compute base', content: '$1 - 0.12 = 0.88$' },
              { label: 'Apply', content: '$A = 50{,}000 \\times (0.88)^4 = 50{,}000 \\times 0.59969 = 29{,}984.77$' },
              { label: 'Answer', content: '$\\approx \\$29{,}985$' },
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
            question: 'A population of $3{,}000$ bacteria grows by $20\\%$ each hour. How many bacteria are there after $3$ hours?',
            answer: '$A = 3{,}000 \\times (1.20)^3 = 3{,}000 \\times 1.728 = 5{,}184$.',
          },
          {
            type: 'checkpointQuestion',
            number: 2,
            question: 'A radioactive substance decays by $8\\%$ per year. If the initial amount is $500$ grams, how much remains after $10$ years?',
            answer: '$A = 500 \\times (0.92)^{10} = 500 \\times 0.4344 \\approx 217.2$ grams.',
          },
        ],
      },
    },
  },

  15: {
    moduleId: 'percents',
    title: 'Complex Percent Model',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Complex percent model problems involve solving for the rate, the time, or the initial value — not just the final amount.',
        blocks: [
          {
            type: 'text',
            content: 'While simple models ask you to compute $A$, complex models require algebraic manipulation of $A = P(1 \\pm r)^t$ to isolate a different variable. The SAT also uses models where the compounding period differs from the time unit in the exponent.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Solve for $P$', formula: '$P = \\frac{A}{(1 \\pm r)^t}$', note: 'Divide both sides by the growth/decay factor' },
              { label: 'Solve for $r$', formula: '$1 \\pm r = \\left(\\frac{A}{P}\\right)^{1/t}$', note: 'Take the $t$-th root of both sides' },
              { label: 'Solve for $t$', formula: '$t = \\frac{\\ln(A/P)}{\\ln(1 \\pm r)}$', note: 'Use logarithms (rarely required on SAT)' },
              { label: 'Different compounding', formula: '$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$', note: '$n$ = compounds per period' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'When the SAT gives $A = 1{,}200(1.005)^{12t}$, the base $1.005$ means $0.5\\%$ growth per month, and $12t$ means $12$ compounding periods per year for $t$ years. The **annual** rate is not $0.5\\%$ but approximately $6.17\\%$ (from $(1.005)^{12} - 1$).',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Interpreting Compound Exponents',
            content: 'Recognition cue: an exponent like $12t$, $4t$, or $\\frac{t}{2}$ in $A = P \\cdot b^{\\text{expression}}$. First move: the coefficient of $t$ in the exponent tells you the number of compounding periods per unit of $t$. The base applies to **each compounding period**.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Monthly Rate with Annual Rate',
            wrong: 'In $A = 500(1.02)^{4t}$, the annual rate is $2\\%$.',
            correction: '$1.02$ is the **quarterly** rate ($2\\%$ per quarter). The annual rate is $(1.02)^4 - 1 = 0.0824 = 8.24\\%$.',
          },
          {
            type: 'tip',
            content: 'To convert a per-period rate to an annual rate: $(1 + r_{\\text{period}})^{n} - 1$ where $n$ = periods per year.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Solving for the Initial Value',
            items: [
              'Write the equation: $A = P(1 \\pm r)^t$',
              'Compute $(1 \\pm r)^t$ first',
              'Divide: $P = \\frac{A}{(1 \\pm r)^t}$',
            ],
          },
          {
            type: 'steps',
            title: 'Interpreting a Given Model',
            items: [
              'Identify $P$ (the coefficient) — this is the initial value',
              'Identify the base — this is the per-period multiplier',
              'Determine the period from the exponent structure (e.g., $12t$ means monthly)',
              'Compute the per-period rate from the base: $r = b - 1$ (growth) or $r = 1 - b$ (decay)',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'The function $V(t) = 18{,}000(0.85)^t$ models a car\'s value in dollars, where $t$ is the number of years after purchase. What was the purchase price, and by what percent does the value decrease each year?',
            steps: [
              { label: 'Initial value', content: '$P = 18{,}000$ (the coefficient)' },
              { label: 'Base', content: '$b = 0.85 < 1$, so this is decay' },
              { label: 'Rate', content: '$r = 1 - 0.85 = 0.15 = 15\\%$ per year' },
              { label: 'Answer', content: 'Purchase price: $\\$18{,}000$; depreciates $15\\%$ per year' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A bank account earns $0.5\\%$ interest per month with an initial deposit of $\\$2{,}000$. Write the model and find the balance after $3$ years.',
            steps: [
              { label: 'Model', content: '$A = 2{,}000(1.005)^{12t}$ where $t$ is in years' },
              { label: 'Substitute $t = 3$', content: '$A = 2{,}000(1.005)^{36}$' },
              { label: 'Compute', content: '$(1.005)^{36} = 1.19668$' },
              { label: 'Multiply', content: '$2{,}000 \\times 1.19668 = 2{,}393.36$' },
              { label: 'Answer', content: '$\\$2{,}393.36$' },
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
            question: 'In the model $P(t) = 8{,}000(1.02)^{4t}$, what is the quarterly growth rate and the approximate annual growth rate?',
            answer: 'Quarterly rate: $2\\%$. Annual rate: $(1.02)^4 - 1 = 1.0824 - 1 = 0.0824 = 8.24\\%$.',
          },
          {
            type: 'checkpointQuestion',
            number: 2,
            question: 'A painting bought for an unknown price is now worth $\\$12{,}000$ after $5$ years of $8\\%$ annual appreciation. What was the purchase price?',
            answer: '$P = \\frac{12{,}000}{(1.08)^5} = \\frac{12{,}000}{1.4693} \\approx \\$8{,}163$.',
          },
        ],
      },
    },
  },

  16: {
    moduleId: 'percents',
    title: 'Conceptual Percent Model #1',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Interpreting what each component of an exponential model means in context — the SAT asks about meaning, not just computation.',
        blocks: [
          {
            type: 'text',
            content: 'On the SAT, you are often given a model like $P(t) = 500(1.06)^t$ and asked what the numbers represent in context. These questions test whether you understand the **structure** of exponential models, not just whether you can plug in values.',
          },
          {
            type: 'table',
            title: 'Anatomy of an Exponential Model',
            headers: ['Component', 'Symbol', 'What It Represents'],
            rows: [
              ['Coefficient', '$P$', 'The initial value at $t = 0$'],
              ['Base', '$b = (1 \\pm r)$', 'The multiplier per period'],
              ['Rate from base', '$r$', 'The percent change per period: $b - 1$ (growth) or $1 - b$ (decay)'],
              ['Exponent', '$t$', 'The number of periods elapsed'],
              ['Output', '$A$', 'The value after $t$ periods'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'The base of the exponential is **not** the growth rate. If $b = 1.06$, the growth rate is $6\\%$, not $106\\%$. If $b = 0.92$, the decay rate is $8\\%$, not $92\\%$. Subtract from $1$ to extract the rate.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"What Does the Number $b$ Represent?"',
            content: 'Recognition cue: a model is given and the question asks about the meaning of a specific number. First move: identify the number\'s role (coefficient = initial value, base = multiplier, exponent = time). State what it means in context.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: '"By What Percent Does the Quantity Change Each Period?"',
            content: 'Recognition cue: a given exponential equation, asking for the rate of change. First move: isolate the base $b$. If $b > 1$: percent increase $= (b - 1) \\times 100$. If $b < 1$: percent decrease $= (1 - b) \\times 100$.',
          },
          {
            type: 'trapCard',
            title: 'Stating the Base as the Rate',
            wrong: 'In $f(t) = 200(1.12)^t$, the growth rate is $1.12$ or $112\\%$.',
            correction: 'The growth **rate** is $1.12 - 1 = 0.12 = 12\\%$. The base $1.12$ is the **multiplier**, not the rate.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Interpreting an Exponential in Context',
            items: [
              'Match the equation to the form $A = P \\cdot b^t$',
              'The coefficient $P$ is the value when $t = 0$ — translate to the starting scenario',
              'The base $b$: if $> 1$, growth at rate $(b-1) \\times 100\\%$ per period; if $< 1$, decay at rate $(1-b) \\times 100\\%$ per period',
              'The exponent variable tells you what unit of time (years, months, hours)',
              'Write a sentence: "The [quantity] starts at $P$ and [increases/decreases] by $r\\%$ every [period]"',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The number of subscribers to a newsletter is modeled by $S(t) = 1{,}200(1.08)^t$, where $t$ is the number of months since launch. What does the $1{,}200$ represent? What does the $1.08$ tell you?',
            steps: [
              { label: '$1{,}200$', content: 'The initial number of subscribers at launch ($t = 0$)' },
              { label: '$1.08$ is the base', content: 'It is the monthly multiplier' },
              { label: 'Rate', content: '$1.08 - 1 = 0.08 = 8\\%$ growth per month' },
              { label: 'Answer', content: 'The newsletter launched with $1{,}200$ subscribers and grows by $8\\%$ each month' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A biologist models a fish population as $P(t) = 4{,}000(0.97)^t$, where $t$ is years. Interpret each component and predict the population trend.',
            steps: [
              { label: 'Initial value', content: '$P(0) = 4{,}000$ fish at the start' },
              { label: 'Base', content: '$0.97 < 1$ → decay' },
              { label: 'Rate', content: '$1 - 0.97 = 0.03 = 3\\%$ annual decline' },
              { label: 'Interpretation', content: 'The population starts at $4{,}000$ and decreases by $3\\%$ each year — the population is declining' },
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
            question: 'In $V(t) = 25{,}000(0.88)^t$, where $t$ is years, what is the initial value and the annual rate of change?',
            answer: 'Initial value: $\\$25{,}000$. Rate: $1 - 0.88 = 0.12 = 12\\%$ decrease per year.',
          },
          {
            type: 'checkpointQuestion',
            number: 2,
            question: 'A model is $N(t) = 600(1.15)^t$. A student claims the quantity increases by $115\\%$ each period. Explain the error.',
            answer: 'The base $1.15$ is the multiplier, not the rate. The quantity increases by $15\\%$ each period ($1.15 - 1 = 0.15$). An increase of $115\\%$ would mean the base is $2.15$.',
          },
        ],
      },
    },
  },

  17: {
    moduleId: 'percents',
    title: 'Conceptual Percent Model #2',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Advanced interpretation: comparing models, equivalent forms, half-life/doubling time, and reading percent change from graphs and tables.',
        blocks: [
          {
            type: 'text',
            content: 'Beyond identifying components of a single model, the SAT asks you to compare two models, rewrite a model in an equivalent form, or extract information from graphs/tables that represent exponential behavior.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Doubling Time', formula: '$P \\cdot 2 = P(1+r)^t \\Rightarrow t = \\frac{\\ln 2}{\\ln(1+r)}$', note: 'Time for quantity to double' },
              { label: 'Half-Life', formula: '$\\frac{P}{2} = P(1-r)^t \\Rightarrow t = \\frac{\\ln 2}{\\ln(\\frac{1}{1-r})}$', note: 'Time for quantity to halve' },
              { label: 'Equivalent Annual Rate', formula: '$(1 + r_{\\text{annual}}) = (1 + r_{\\text{period}})^n$', note: '$n$ = periods per year' },
            ],
          },
          {
            type: 'comparison',
            items: [
              {
                label: 'Comparing Growth Rates',
                variant: 'correct',
                content: 'Model A: $f(t) = 100(1.05)^t$ — grows $5\\%$/year.\nModel B: $g(t) = 80(1.08)^t$ — grows $8\\%$/year.\nModel B grows **faster** but starts lower. Eventually B overtakes A.',
              },
              {
                label: 'Common Error',
                variant: 'wrong',
                content: 'Comparing initial values to determine which "grows more."\nA starts higher, but B\'s rate is faster. The answer depends on the time horizon.',
              },
            ],
          },
          {
            type: 'keyInsight',
            content: 'Two models with the same base but different coefficients differ only in starting value — they grow at the same rate. Two models with the same coefficient but different bases start equally but diverge over time. Rate determines long-term behavior; initial value determines short-term position.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Model Comparison',
            content: 'Recognition cue: two exponential equations and a question about which grows faster or when they are equal. First move: compare bases for rate comparison. For intersection, set the expressions equal and solve.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Rewriting the Model',
            content: 'Recognition cue: "Rewrite to show the [monthly/quarterly/daily] rate" or "express in terms of a different time unit." First move: use $(b)^t = (b^{1/n})^{nt}$ to change the base and exponent while keeping the model equivalent.',
          },
          {
            type: 'trapCard',
            title: 'Comparing Models by Initial Value Alone',
            wrong: '$f(t) = 500(1.03)^t$ always produces larger values than $g(t) = 300(1.10)^t$ because $500 > 300$.',
            correction: 'For small $t$, $f(t) > g(t)$. But $g$ grows faster ($10\\%$ vs. $3\\%$). At $t = \\frac{\\ln(5/3)}{\\ln(1.10/1.03)} \\approx 7.7$ years, they are equal; after that, $g$ dominates.',
          },
          {
            type: 'tip',
            content: 'To rewrite an annual model as monthly: $P(1.06)^t = P(1.06^{1/12})^{12t} = P(1.00487)^{12t}$. The monthly rate is $0.487\\%$, and the exponent becomes $12t$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Rewriting an Exponential in a Different Time Unit',
            items: [
              'Start with $A = P \\cdot b^t$ where $t$ is in the original units (e.g., years)',
              'Decide the new unit (e.g., months): $t_{\\text{years}} = \\frac{t_{\\text{months}}}{12}$',
              'Substitute: $A = P \\cdot b^{t_{\\text{months}}/12} = P \\cdot (b^{1/12})^{t_{\\text{months}}}$',
              'The new base is $b^{1/12}$; the new exponent is $t_{\\text{months}}$',
              'Extract the new per-period rate from the new base',
            ],
          },
          {
            type: 'steps',
            title: 'Finding Doubling Time (Without a Calculator)',
            items: [
              'Use the Rule of 72: doubling time $\\approx \\frac{72}{\\text{percent rate}}$',
              'Example: at $6\\%$ growth, doubling time $\\approx \\frac{72}{6} = 12$ periods',
              'This is an approximation — exact answer requires $\\frac{\\ln 2}{\\ln(1 + r)}$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A population is modeled by $P(t) = 5{,}000(1.12)^t$, where $t$ is in years. Rewrite the model to show the monthly growth rate.',
            steps: [
              { label: 'Current form', content: '$P(t) = 5{,}000(1.12)^t$ with $t$ in years' },
              { label: 'Convert base', content: '$1.12^{1/12} = 1.00949$ (monthly multiplier)' },
              { label: 'Rewrite', content: '$P(m) = 5{,}000(1.00949)^m$ where $m$ is months' },
              { label: 'Monthly rate', content: '$1.00949 - 1 = 0.00949 = 0.949\\%$ per month' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Account A: $f(t) = 10{,}000(1.04)^t$. Account B: $g(t) = 8{,}000(1.07)^t$. Which account has a higher balance at $t = 10$?',
            steps: [
              { label: 'Account A at $t = 10$', content: '$10{,}000 \\times (1.04)^{10} = 10{,}000 \\times 1.4802 = 14{,}802$' },
              { label: 'Account B at $t = 10$', content: '$8{,}000 \\times (1.07)^{10} = 8{,}000 \\times 1.9672 = 15{,}737$' },
              { label: 'Compare', content: '$15{,}737 > 14{,}802$' },
              { label: 'Answer', content: 'Account B has the higher balance at $t = 10$, despite starting with $\\$2{,}000$ less' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A substance decays at $9\\%$ per year. Approximately how many years until half remains?',
            steps: [
              { label: 'Rule of 72', content: '$\\frac{72}{9} = 8$ years (approximation)' },
              { label: 'Exact check', content: '$(0.91)^8 = 0.472$, which is close to $0.5$' },
              { label: 'Answer', content: 'Approximately $8$ years' },
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
            question: 'Rewrite $A = 2{,}000(1.06)^t$ (annual) to show the quarterly growth rate. What is the quarterly rate?',
            answer: '$A = 2{,}000(1.06^{1/4})^{4t} = 2{,}000(1.01467)^{4t}$. Quarterly rate: $1.01467 - 1 = 0.01467 = 1.467\\%$.',
          },
          {
            type: 'checkpointQuestion',
            number: 2,
            question: 'An investment grows at $8\\%$ per year. Using the Rule of 72, approximately how long until it doubles?',
            answer: '$\\frac{72}{8} = 9$ years.',
          },
        ],
      },
    },
  },

};