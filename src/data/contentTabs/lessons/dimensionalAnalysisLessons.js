export const dimensionalAnalysisLessonTabs = {

  1: {
    moduleId: 'dimensional-analysis',
    title: 'Dimensional Analysis',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Dimensional analysis converts between units by multiplying by fractions equal to $1$. It is the single most reliable technique for SAT unit-conversion problems.',
        blocks: [
          {
            type: 'text',
            content: 'The idea is simple: if $1$ mile $= 5{,}280$ feet, then $\\frac{5{,}280 \\text{ ft}}{1 \\text{ mi}} = 1$. Multiplying by this fraction changes the unit without changing the quantity. Chain multiple fractions to bridge any two units.',
          },
          {
            type: 'formula',
            label: 'The Core Principle',
            content: '$$\\text{Start unit} \\times \\frac{\\text{Target unit}}{\\text{Start unit}} = \\text{Target unit}$$',
            note: 'The "start unit" cancels, leaving only the target.',
          },
          {
            type: 'keyInsight',
            content: 'You don\'t need to memorize whether to multiply or divide. Just set up the conversion fraction so the **unwanted unit cancels** (appears in both numerator and denominator). The math takes care of itself.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Unit Conversion Procedure',
            items: [
              'Write the starting quantity with its unit as a fraction: $\\frac{\\text{value}}{1}$',
              'Identify a conversion factor connecting the starting unit to the target (or an intermediate unit)',
              'Write the factor as a fraction with the **unwanted** unit in the position that will cancel (if it\'s in the numerator of the start, put it in the denominator of the factor)',
              'Multiply across — units cancel like variables',
              'If the target isn\'t reached yet, chain another conversion factor and repeat',
            ],
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'Common Conversions on the SAT',
            content: '$1$ hour $= 60$ min $= 3{,}600$ sec\n$1$ mile $= 5{,}280$ ft\n$1$ km $= 1{,}000$ m\n$1$ kg $= 1{,}000$ g\n$1$ gallon $= 4$ quarts\n$1$ foot $= 12$ inches',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Convert $3$ miles to feet.',
            steps: [
              { label: 'Set up', content: '$3 \\text{ mi} \\times \\frac{5{,}280 \\text{ ft}}{1 \\text{ mi}}$' },
              { label: 'Cancel miles', content: 'mi cancels, leaving feet' },
              { label: 'Compute', content: '$3 \\times 5{,}280 = 15{,}840$ ft' },
              { label: 'Answer', content: '$15{,}840$ feet' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A car travels at $60$ miles per hour. What is its speed in feet per second?',
            steps: [
              { label: 'Start', content: '$\\frac{60 \\text{ mi}}{1 \\text{ hr}}$' },
              { label: 'Miles → feet', content: '$\\times \\frac{5{,}280 \\text{ ft}}{1 \\text{ mi}}$' },
              { label: 'Hours → seconds', content: '$\\times \\frac{1 \\text{ hr}}{3{,}600 \\text{ sec}}$' },
              { label: 'Compute', content: '$\\frac{60 \\times 5{,}280}{3{,}600} = \\frac{316{,}800}{3{,}600} = 88$' },
              { label: 'Answer', content: '$88$ feet per second' },
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Flipping the Conversion Factor',
            wrong: 'To convert miles to feet, student writes $\\frac{1 \\text{ mi}}{5{,}280 \\text{ ft}}$ — miles don\'t cancel.',
            correction: 'Orient the fraction so the unit you want to **eliminate** is in the position that cancels: $\\frac{5{,}280 \\text{ ft}}{1 \\text{ mi}}$ puts miles in the denominator to cancel the miles in the numerator.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Convert Both Units in a Rate',
            wrong: 'Converting mph to ft/sec: student converts miles to feet but forgets to convert hours to seconds.',
            correction: 'Rates have units in **both** numerator and denominator. You need a conversion factor for each unit that must change.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          { type: 'callout', variant: 'info', title: 'Multi-Step Rate Conversion', content: 'Recognition cue: a speed or rate in one unit system, question asks for it in another (e.g., mph to ft/sec). First move: set up a chain of conversion fractions so that unwanted units cancel. Each fraction equals $1$.' },
          { type: 'trapCard', title: 'Flipping the Conversion Factor', wrong: 'Converting miles to feet: student writes $\\frac{1 \\text{ mi}}{5{,}280 \\text{ ft}}$ — miles don\'t cancel.', correction: 'Orient the fraction so the unit to **eliminate** is in the canceling position: $\\frac{5{,}280 \\text{ ft}}{1 \\text{ mi}}$ puts miles in the denominator.' },
          { type: 'tip', content: '**Decision rule:** Identify each unit that must change. Write one conversion fraction per unit change. Multiply the chain — every unwanted unit should cancel, leaving only the target unit.' },
        ],
      },
    },
  },

  3: {
    moduleId: 'dimensional-analysis',
    title: 'Squared & Cubic Units',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Area uses squared units and volume uses cubed units. Converting between them requires squaring or cubing the linear conversion factor — a step students frequently forget.',
        blocks: [
          {
            type: 'text',
            content: 'When you convert a **length**, you multiply by the factor once. When you convert an **area** (length $\\times$ length), you must apply the factor **twice** — because both dimensions change. For **volume** (length $\\times$ length $\\times$ length), apply it **three times**.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Length', formula: '$1 \\text{ ft} = 12 \\text{ in}$', note: 'Factor: 12' },
              { label: 'Area', formula: '$1 \\text{ ft}^2 = 144 \\text{ in}^2$', note: 'Factor: 12² = 144' },
              { label: 'Volume', formula: '$1 \\text{ ft}^3 = 1{,}728 \\text{ in}^3$', note: 'Factor: 12³ = 1,728' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'The conversion factor gets **raised to the same power** as the unit. $\\text{ft}^2 \\to \\text{in}^2$: use $12^2 = 144$. $\\text{m}^3 \\to \\text{cm}^3$: use $100^3 = 1{,}000{,}000$. This is why area and volume conversions produce such large numbers.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Converting Squared/Cubed Units',
            items: [
              'Find the **linear** conversion factor (e.g., $1$ m $= 100$ cm)',
              'Determine the dimension: area ($n = 2$) or volume ($n = 3$)',
              'Raise the conversion factor to the $n$th power: $100^2 = 10{,}000$ for area, $100^3 = 1{,}000{,}000$ for volume',
              'Multiply or divide the given value by that powered factor',
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Dimensional Analysis Still Works',
            content: 'You can also chain fractions. For $5 \\text{ ft}^2$ to $\\text{in}^2$:\n$$5 \\text{ ft}^2 \\times \\frac{12 \\text{ in}}{1 \\text{ ft}} \\times \\frac{12 \\text{ in}}{1 \\text{ ft}} = 5 \\times 144 = 720 \\text{ in}^2$$\nThe key: you use the **same** conversion fraction **twice** because the unit is squared.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A rectangular garden has an area of $3$ square meters. What is its area in square centimeters?',
            steps: [
              { label: 'Linear factor', content: '$1$ m $= 100$ cm' },
              { label: 'Square the factor', content: '$1 \\text{ m}^2 = (100)^2 \\text{ cm}^2 = 10{,}000 \\text{ cm}^2$' },
              { label: 'Multiply', content: '$3 \\times 10{,}000 = 30{,}000$' },
              { label: 'Answer', content: '$30{,}000 \\text{ cm}^2$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A fish tank holds $2$ cubic feet of water. How many cubic inches is that?',
            steps: [
              { label: 'Linear factor', content: '$1$ ft $= 12$ in' },
              { label: 'Cube the factor', content: '$1 \\text{ ft}^3 = 12^3 \\text{ in}^3 = 1{,}728 \\text{ in}^3$' },
              { label: 'Multiply', content: '$2 \\times 1{,}728 = 3{,}456$' },
              { label: 'Answer', content: '$3{,}456 \\text{ in}^3$' },
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Using the Linear Factor for Area/Volume',
            wrong: '$1 \\text{ ft}^2 = 12 \\text{ in}^2$. Student used $12$ instead of $12^2 = 144$.',
            correction: 'The conversion factor must be raised to the **same power** as the unit: squared for area ($12^2 = 144$), cubed for volume ($12^3 = 1{,}728$).',
          },
          {
            type: 'trapCard',
            title: 'Confusing Square Feet with Feet Squared',
            wrong: 'Student treats "$5$ square feet" as "$5$ feet, then squared" = $25$.',
            correction: '"$5$ square feet" means $5 \\text{ ft}^2$ — it\'s $5$ units of area, not $5$ feet being squared. $5 \\text{ ft}^2 \\neq (5 \\text{ ft})^2$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          { type: 'callout', variant: 'info', title: 'Power Rule for Unit Conversion', content: 'Recognition cue: converting area (ft² to in²) or volume (m³ to cm³). First move: find the **linear** conversion factor, then raise it to the same power as the unit dimension. Area → square the factor. Volume → cube it.' },
          { type: 'trapCard', title: 'Using the Linear Factor for Area', wrong: '$1 \\text{ ft}^2 = 12 \\text{ in}^2$. Student used $12$ instead of $12^2 = 144$.', correction: 'For squared units, square the linear factor: $1 \\text{ ft}^2 = 12^2 \\text{ in}^2 = 144 \\text{ in}^2$. For cubed units, cube it: $1 \\text{ ft}^3 = 12^3 = 1{,}728 \\text{ in}^3$.' },
          { type: 'tip', content: 'Dimensional analysis still works: use the same conversion fraction **twice** for area, **three times** for volume. $5 \\text{ ft}^2 \\times \\frac{12 \\text{ in}}{1 \\text{ ft}} \\times \\frac{12 \\text{ in}}{1 \\text{ ft}} = 5 \\times 144 = 720 \\text{ in}^2$.' },
        ],
      },
    },
  },
};
