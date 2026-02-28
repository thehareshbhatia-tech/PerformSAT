export const dimensionalAnalysisLessonTabs = {

  // ─── Lesson 1 (lesson): Dimensional Analysis ───────────────────────────
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
            content: 'If two quantities are equal, their ratio is $1$. For example, $1$ mile $= 5{,}280$ feet means $\\frac{5{,}280 \\text{ ft}}{1 \\text{ mi}} = 1$. Multiplying any quantity by this fraction changes the unit without changing the value. Chain multiple fractions to bridge any two units.',
          },
          {
            type: 'formula',
            label: 'The Core Principle',
            content: '$$\\text{Start unit} \\times \\frac{\\text{Target unit}}{\\text{Start unit}} = \\text{Target unit}$$',
            note: 'The "start unit" cancels, leaving only the target.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Conversion Factor', formula: '$\\frac{5{,}280 \\text{ ft}}{1 \\text{ mi}} = 1$', note: 'Numerator = denominator in different units' },
              { label: 'Inverted Factor', formula: '$\\frac{1 \\text{ mi}}{5{,}280 \\text{ ft}} = 1$', note: 'Same relationship, flipped' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'You don\'t need to memorize whether to multiply or divide. Set up the conversion fraction so the **unwanted unit cancels** (appears in both numerator and denominator). The math takes care of itself.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Multi-Step Rate Conversion',
            content: 'Recognition cue: a speed or rate given in one unit system, question asks for another (e.g., mph to ft/sec). Set up a chain of conversion fractions so every unwanted unit cancels. Each fraction equals $1$.',
          },
          {
            type: 'trapCard',
            title: 'Flipping the Conversion Factor',
            wrong: 'Converting miles to feet: student writes $\\frac{1 \\text{ mi}}{5{,}280 \\text{ ft}}$ — miles don\'t cancel.',
            correction: 'Orient the fraction so the unit to **eliminate** is in the canceling position: $\\frac{5{,}280 \\text{ ft}}{1 \\text{ mi}}$ puts miles in the denominator to cancel miles in the numerator.',
          },
          {
            type: 'tip',
            content: 'Decision rule: identify each unit that must change. Write one conversion fraction per unit change. Multiply the chain — every unwanted unit should cancel, leaving only the target unit.',
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
              'Write the factor as a fraction with the **unwanted** unit in the position that will cancel',
              'Multiply across — units cancel like algebraic variables',
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
          {
            type: 'trapCard',
            title: 'Dropping a Link in the Chain',
            wrong: 'Converting yards to inches: student uses $\\frac{12 \\text{ in}}{1 \\text{ yd}}$, skipping the yard-to-feet step.',
            correction: 'There is no single factor for yards to inches. Chain two factors: $\\frac{3 \\text{ ft}}{1 \\text{ yd}} \\times \\frac{12 \\text{ in}}{1 \\text{ ft}} = \\frac{36 \\text{ in}}{1 \\text{ yd}}$.',
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
              { label: 'Compute', content: '$3 \\times 5{,}280 = 15{,}840$' },
              { label: 'Answer', content: '$15{,}840$ feet' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A car travels at $60$ miles per hour. What is its speed in feet per second?',
            steps: [
              { label: 'Start', content: '$\\frac{60 \\text{ mi}}{1 \\text{ hr}}$' },
              { label: 'Miles to feet', content: '$\\times \\frac{5{,}280 \\text{ ft}}{1 \\text{ mi}}$' },
              { label: 'Hours to seconds', content: '$\\times \\frac{1 \\text{ hr}}{3{,}600 \\text{ sec}}$' },
              { label: 'Compute', content: '$\\frac{60 \\times 5{,}280}{3{,}600} = \\frac{316{,}800}{3{,}600} = 88$' },
              { label: 'Answer', content: '$88$ feet per second' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A factory produces $2{,}400$ widgets per day. Each widget weighs $250$ grams. How many kilograms of widgets does the factory produce per hour?',
            steps: [
              { label: 'Start', content: '$\\frac{2{,}400 \\text{ widgets}}{1 \\text{ day}}$' },
              { label: 'Widgets to grams', content: '$\\times \\frac{250 \\text{ g}}{1 \\text{ widget}} = \\frac{600{,}000 \\text{ g}}{1 \\text{ day}}$' },
              { label: 'Grams to kilograms', content: '$\\times \\frac{1 \\text{ kg}}{1{,}000 \\text{ g}} = \\frac{600 \\text{ kg}}{1 \\text{ day}}$' },
              { label: 'Days to hours', content: '$\\times \\frac{1 \\text{ day}}{24 \\text{ hr}} = \\frac{600}{24} = 25$' },
              { label: 'Answer', content: '$25$ kg per hour' },
            ],
          },
        ],
      },
    },
  },

  // ─── Lesson 2 (video): Simple Dimensional Analysis ─────────────────────
  2: {
    moduleId: 'dimensional-analysis',
    title: 'Simple Dimensional Analysis',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A simple dimensional analysis problem uses one or two conversion factors to move between units in a single chain.',
        blocks: [
          {
            type: 'text',
            content: 'Most single-step conversions require one fraction: $\\text{given} \\times \\frac{\\text{new unit}}{\\text{old unit}}$. Two-step conversions chain two fractions. The key is that every factor equals $1$, so the value never changes — only the unit does.',
          },
          {
            type: 'formula',
            label: 'Single-Factor Conversion',
            content: '$$\\text{value}_{\\text{old}} \\times \\frac{\\text{new unit}}{\\text{old unit}} = \\text{value}_{\\text{new}}$$',
            note: 'Old unit cancels, new unit remains.',
          },
          {
            type: 'formula',
            label: 'Two-Factor Chain',
            content: '$$\\text{value} \\times \\frac{\\text{middle unit}}{\\text{start unit}} \\times \\frac{\\text{target unit}}{\\text{middle unit}} = \\text{result}$$',
            note: 'Start and middle units both cancel.',
          },
          {
            type: 'keyInsight',
            content: 'Before multiplying, check that every unit you want to eliminate appears once in a numerator and once in a denominator. If it doesn\'t, a factor is flipped or missing.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Single-Unit and Two-Unit Conversions',
            content: 'Recognition cue: "How many X are in Y?" or "Convert Z from A-units to B-units." Set up the conversion fraction(s) so the starting unit cancels, then multiply.',
          },
          {
            type: 'trapCard',
            title: 'Using the Wrong Direction',
            wrong: 'Convert $5$ km to meters: student writes $5 \\times \\frac{1 \\text{ km}}{1{,}000 \\text{ m}} = 0.005$.',
            correction: 'km must cancel, so km goes in the denominator: $5 \\text{ km} \\times \\frac{1{,}000 \\text{ m}}{1 \\text{ km}} = 5{,}000$ m.',
          },
          {
            type: 'tip',
            content: 'Sanity check after computing: going from a larger unit to a smaller unit should give a **bigger** number. Going from smaller to larger gives a **smaller** number.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Simple Conversion Procedure',
            items: [
              'Write the given value with its unit',
              'Write the conversion factor as a fraction with the unwanted unit in the denominator',
              'Cancel the common unit',
              'Multiply the remaining numbers to get the answer',
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Chaining Two Factors',
            content: 'If no single factor connects start to target, find an intermediate unit. Example — yards to inches:\n$$5 \\text{ yd} \\times \\frac{3 \\text{ ft}}{1 \\text{ yd}} \\times \\frac{12 \\text{ in}}{1 \\text{ ft}} = 5 \\times 36 = 180 \\text{ in}$$',
          },
          {
            type: 'table',
            title: 'Common One-Step Conversions',
            headers: ['From', 'To', 'Factor'],
            rows: [
              ['km', 'm', '$\\times 1{,}000$'],
              ['m', 'cm', '$\\times 100$'],
              ['ft', 'in', '$\\times 12$'],
              ['hr', 'min', '$\\times 60$'],
              ['min', 'sec', '$\\times 60$'],
              ['lb', 'oz', '$\\times 16$'],
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
            problem: 'Convert $7$ feet to inches.',
            steps: [
              { label: 'Set up', content: '$7 \\text{ ft} \\times \\frac{12 \\text{ in}}{1 \\text{ ft}}$' },
              { label: 'Cancel', content: 'ft cancels' },
              { label: 'Compute', content: '$7 \\times 12 = 84$' },
              { label: 'Answer', content: '$84$ inches' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A runner finishes a race in $4{,}500$ seconds. How many hours is that?',
            steps: [
              { label: 'Set up chain', content: '$4{,}500 \\text{ sec} \\times \\frac{1 \\text{ min}}{60 \\text{ sec}} \\times \\frac{1 \\text{ hr}}{60 \\text{ min}}$' },
              { label: 'Cancel sec and min', content: 'sec cancels with first factor, min cancels with second' },
              { label: 'Compute', content: '$\\frac{4{,}500}{3{,}600} = 1.25$' },
              { label: 'Answer', content: '$1.25$ hours' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Convert $2.5$ miles to yards. ($1$ mile $= 5{,}280$ ft, $1$ yard $= 3$ ft)',
            steps: [
              { label: 'Miles to feet', content: '$2.5 \\text{ mi} \\times \\frac{5{,}280 \\text{ ft}}{1 \\text{ mi}} = 13{,}200 \\text{ ft}$' },
              { label: 'Feet to yards', content: '$13{,}200 \\text{ ft} \\times \\frac{1 \\text{ yd}}{3 \\text{ ft}} = 4{,}400 \\text{ yd}$' },
              { label: 'Answer', content: '$4{,}400$ yards' },
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
            question: 'Convert $36{,}000$ seconds to hours.',
            answer: '$36{,}000 \\text{ sec} \\times \\frac{1 \\text{ min}}{60 \\text{ sec}} \\times \\frac{1 \\text{ hr}}{60 \\text{ min}} = \\frac{36{,}000}{3{,}600} = 10$ hours.',
          },
          {
            type: 'checkpointQuestion',
            number: 2,
            question: 'A pipe delivers water at $3$ gallons per minute. How many quarts per hour is that? ($1$ gallon $= 4$ quarts)',
            answer: '$\\frac{3 \\text{ gal}}{1 \\text{ min}} \\times \\frac{4 \\text{ qt}}{1 \\text{ gal}} \\times \\frac{60 \\text{ min}}{1 \\text{ hr}} = 3 \\times 4 \\times 60 = 720$ quarts per hour.',
          },
        ],
      },
    },
  },

  // ─── Lesson 3 (lesson): Squared & Cubic Units ─────────────────────────
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
              { label: 'Area', formula: '$1 \\text{ ft}^2 = 144 \\text{ in}^2$', note: 'Factor: $12^2 = 144$' },
              { label: 'Volume', formula: '$1 \\text{ ft}^3 = 1{,}728 \\text{ in}^3$', note: 'Factor: $12^3 = 1{,}728$' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'The conversion factor gets **raised to the same power** as the unit. $\\text{ft}^2 \\to \\text{in}^2$: use $12^2 = 144$. $\\text{m}^3 \\to \\text{cm}^3$: use $100^3 = 1{,}000{,}000$. This is why area and volume conversions produce such large numbers.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Why the Factor Is Squared/Cubed',
            content: '$1 \\text{ ft}^2$ means a $1 \\text{ ft} \\times 1 \\text{ ft}$ square. Each side is $12$ inches, so the area is $12 \\times 12 = 144 \\text{ in}^2$, not $12 \\text{ in}^2$. The same reasoning extends to cubes: $1 \\text{ ft}^3 = 12 \\times 12 \\times 12 = 1{,}728 \\text{ in}^3$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Power Rule for Unit Conversion',
            content: 'Recognition cue: converting area ($\\text{ft}^2$ to $\\text{in}^2$) or volume ($\\text{m}^3$ to $\\text{cm}^3$). Find the **linear** conversion factor, then raise it to the same power as the unit dimension. Area: square the factor. Volume: cube it.',
          },
          {
            type: 'trapCard',
            title: 'Using the Linear Factor for Area',
            wrong: '$1 \\text{ ft}^2 = 12 \\text{ in}^2$. Student used $12$ instead of $12^2 = 144$.',
            correction: 'For squared units, square the linear factor: $1 \\text{ ft}^2 = 12^2 \\text{ in}^2 = 144 \\text{ in}^2$. For cubed units, cube it: $1 \\text{ ft}^3 = 12^3 = 1{,}728 \\text{ in}^3$.',
          },
          {
            type: 'tip',
            content: 'Dimensional analysis still works: use the same conversion fraction **twice** for area, **three times** for volume. $5 \\text{ ft}^2 \\times \\frac{12 \\text{ in}}{1 \\text{ ft}} \\times \\frac{12 \\text{ in}}{1 \\text{ ft}} = 5 \\times 144 = 720 \\text{ in}^2$.',
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
            variant: 'info',
            title: 'Alternative: Repeat the Linear Factor',
            content: 'Instead of computing $12^2 = 144$ in your head, chain the conversion fraction $n$ times:\n$$5 \\text{ ft}^2 \\times \\frac{12 \\text{ in}}{1 \\text{ ft}} \\times \\frac{12 \\text{ in}}{1 \\text{ ft}} = 5 \\times 12 \\times 12 = 720 \\text{ in}^2$$\nBoth approaches give the same result.',
          },
          {
            type: 'table',
            title: 'Frequently Tested Conversions',
            headers: ['Linear', 'Squared (Area)', 'Cubed (Volume)'],
            rows: [
              ['$1$ ft $= 12$ in', '$1 \\text{ ft}^2 = 144 \\text{ in}^2$', '$1 \\text{ ft}^3 = 1{,}728 \\text{ in}^3$'],
              ['$1$ m $= 100$ cm', '$1 \\text{ m}^2 = 10{,}000 \\text{ cm}^2$', '$1 \\text{ m}^3 = 1{,}000{,}000 \\text{ cm}^3$'],
              ['$1$ yd $= 3$ ft', '$1 \\text{ yd}^2 = 9 \\text{ ft}^2$', '$1 \\text{ yd}^3 = 27 \\text{ ft}^3$'],
              ['$1$ km $= 1{,}000$ m', '$1 \\text{ km}^2 = 10^6 \\text{ m}^2$', '$1 \\text{ km}^3 = 10^9 \\text{ m}^3$'],
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
            title: 'Confusing "Square Feet" with "Feet Squared"',
            wrong: 'Student treats "$5$ square feet" as "$5$ feet, then squared" = $25$.',
            correction: '"$5$ square feet" means $5 \\text{ ft}^2$ — it is $5$ units of area, not $(5 \\text{ ft})^2$. $5 \\text{ ft}^2 \\neq (5 \\text{ ft})^2$.',
          },
          {
            type: 'trapCard',
            title: 'Dividing Instead of Multiplying (or Vice Versa)',
            wrong: 'Converting $\\text{m}^2$ to $\\text{cm}^2$: student divides by $10{,}000$ instead of multiplying.',
            correction: 'Smaller units produce **larger** numbers. $1 \\text{ m}^2 = 10{,}000 \\text{ cm}^2$, so multiply. Going from $\\text{cm}^2$ to $\\text{m}^2$ requires dividing.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A rectangular garden has an area of $3 \\text{ m}^2$. What is its area in $\\text{cm}^2$?',
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
            problem: 'A fish tank holds $2 \\text{ ft}^3$ of water. How many cubic inches is that?',
            steps: [
              { label: 'Linear factor', content: '$1$ ft $= 12$ in' },
              { label: 'Cube the factor', content: '$1 \\text{ ft}^3 = 12^3 \\text{ in}^3 = 1{,}728 \\text{ in}^3$' },
              { label: 'Multiply', content: '$2 \\times 1{,}728 = 3{,}456$' },
              { label: 'Answer', content: '$3{,}456 \\text{ in}^3$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A plot of land measures $0.5 \\text{ km}^2$. Express its area in $\\text{m}^2$.',
            steps: [
              { label: 'Linear factor', content: '$1$ km $= 1{,}000$ m' },
              { label: 'Square the factor', content: '$1 \\text{ km}^2 = (1{,}000)^2 \\text{ m}^2 = 1{,}000{,}000 \\text{ m}^2$' },
              { label: 'Multiply', content: '$0.5 \\times 1{,}000{,}000 = 500{,}000$' },
              { label: 'Answer', content: '$500{,}000 \\text{ m}^2$' },
            ],
          },
        ],
      },
    },
  },

  // ─── Lesson 4 (video): Squared Units Example ──────────────────────────
  4: {
    moduleId: 'dimensional-analysis',
    title: 'Squared Units Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Converting squared (area) units requires squaring the linear conversion factor. This walkthrough applies the technique to a concrete problem.',
        blocks: [
          {
            type: 'text',
            content: 'Area is measured in **squared** units because it is the product of two lengths. When you convert each length, the conversion factor appears **twice** — once for each dimension.',
          },
          {
            type: 'formula',
            label: 'Squared Unit Conversion',
            content: '$$A \\text{ (large unit)}^2 \\times (\\text{factor})^2 = A \\text{ (small unit)}^2$$',
            note: 'The linear factor is squared.',
          },
          {
            type: 'keyInsight',
            content: 'Think of $1 \\text{ ft}^2$ as a $1 \\text{ ft} \\times 1 \\text{ ft}$ square. Converting each side to inches: $12 \\text{ in} \\times 12 \\text{ in} = 144 \\text{ in}^2$. The factor $12$ is used twice because area has two length dimensions.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Area Conversion',
            content: 'Recognition cue: a measurement in $\\text{ft}^2$, $\\text{m}^2$, $\\text{cm}^2$, etc., needing conversion to a different squared unit. Square the linear conversion factor before multiplying.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Square the Factor',
            wrong: '$8 \\text{ ft}^2 \\times 12 = 96 \\text{ in}^2$.',
            correction: '$8 \\text{ ft}^2 \\times 12^2 = 8 \\times 144 = 1{,}152 \\text{ in}^2$. Each of the two length dimensions is multiplied by $12$.',
          },
          {
            type: 'tip',
            content: 'When in doubt, use dimensional analysis with two identical conversion fractions: $8 \\text{ ft}^2 \\times \\frac{12 \\text{ in}}{1 \\text{ ft}} \\times \\frac{12 \\text{ in}}{1 \\text{ ft}}$. Both ft\'s cancel, leaving $\\text{in}^2$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Squared-Unit Conversion Steps',
            items: [
              'Identify the linear conversion factor between the two length units',
              'Square that factor',
              'Multiply (going to smaller units) or divide (going to larger units) the given area by the squared factor',
              'Verify: converting to smaller units should give a **larger** number',
            ],
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'Key Squared Conversions',
            content: '$1 \\text{ ft}^2 = 144 \\text{ in}^2$ (since $12^2 = 144$)\n$1 \\text{ yd}^2 = 9 \\text{ ft}^2$ (since $3^2 = 9$)\n$1 \\text{ m}^2 = 10{,}000 \\text{ cm}^2$ (since $100^2 = 10{,}000$)',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Convert $5 \\text{ ft}^2$ to square inches.',
            steps: [
              { label: 'Linear factor', content: '$1$ ft $= 12$ in' },
              { label: 'Square it', content: '$12^2 = 144$' },
              { label: 'Multiply', content: '$5 \\times 144 = 720$' },
              { label: 'Answer', content: '$720 \\text{ in}^2$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A room has an area of $150 \\text{ ft}^2$. What is the area in square yards?',
            steps: [
              { label: 'Linear factor', content: '$1$ yd $= 3$ ft, so $1 \\text{ yd}^2 = 9 \\text{ ft}^2$' },
              { label: 'Divide (going to larger unit)', content: '$\\frac{150}{9} = 16.\\overline{6}$' },
              { label: 'Answer', content: '$16.\\overline{6} \\text{ yd}^2$ (or $\\frac{50}{3} \\text{ yd}^2$)' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A rug covers $2.5 \\text{ m}^2$. Express this in $\\text{cm}^2$.',
            steps: [
              { label: 'Linear factor', content: '$1$ m $= 100$ cm' },
              { label: 'Square it', content: '$100^2 = 10{,}000$' },
              { label: 'Multiply', content: '$2.5 \\times 10{,}000 = 25{,}000$' },
              { label: 'Answer', content: '$25{,}000 \\text{ cm}^2$' },
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
            question: 'Convert $10 \\text{ yd}^2$ to square feet.',
            answer: '$1 \\text{ yd}^2 = 3^2 = 9 \\text{ ft}^2$, so $10 \\times 9 = 90 \\text{ ft}^2$.',
          },
          {
            type: 'checkpointQuestion',
            number: 2,
            question: 'A tile is $4 \\text{ m}^2$. How many $\\text{cm}^2$ is that?',
            answer: '$1 \\text{ m}^2 = 100^2 = 10{,}000 \\text{ cm}^2$, so $4 \\times 10{,}000 = 40{,}000 \\text{ cm}^2$.',
          },
        ],
      },
    },
  },

  // ─── Lesson 5 (video): Multi-Step Squared Units ────────────────────────
  5: {
    moduleId: 'dimensional-analysis',
    title: 'Multi-Step Squared Units',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'When no single conversion factor connects two squared units, chain multiple squared conversion factors — applying each one twice because the unit is squared.',
        blocks: [
          {
            type: 'text',
            content: 'A multi-step squared conversion chains two or more linear-to-linear factors, each applied **twice** for area. For example, converting $\\text{in}^2 \\to \\text{yd}^2$ requires inches $\\to$ feet $\\to$ yards, and each step is squared.',
          },
          {
            type: 'formula',
            label: 'Multi-Step Squared Conversion',
            content: '$$A \\text{ in}^2 \\times \\left(\\frac{1 \\text{ ft}}{12 \\text{ in}}\\right)^{\\!2} \\times \\left(\\frac{1 \\text{ yd}}{3 \\text{ ft}}\\right)^{\\!2} = A \\times \\frac{1}{144} \\times \\frac{1}{9} \\text{ yd}^2$$',
            note: 'Each conversion fraction is squared because the unit is squared.',
          },
          {
            type: 'keyInsight',
            content: 'Squaring each conversion fraction separately, then multiplying the results, is equivalent to finding the single combined linear factor and squaring it. Both paths reach the same answer: $1 \\text{ yd} = 36 \\text{ in}$, so $1 \\text{ yd}^2 = 36^2 = 1{,}296 \\text{ in}^2$.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Two Approaches — Same Result',
            content: '**Approach A (chain separately):** Square each factor along the chain.\n$\\left(\\frac{1}{12}\\right)^2 \\times \\left(\\frac{1}{3}\\right)^2 = \\frac{1}{144} \\times \\frac{1}{9} = \\frac{1}{1{,}296}$\n\n**Approach B (combine first):** $1$ yd $= 36$ in, so $1 \\text{ yd}^2 = 36^2 = 1{,}296 \\text{ in}^2$.\n\nBoth give $\\frac{1}{1{,}296}$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Multi-Step Area Conversion',
            content: 'Recognition cue: an area in one unit system needs to be in a different system with no direct factor provided (e.g., $\\text{cm}^2 \\to \\text{km}^2$). Chain the intermediate conversions and square each step.',
          },
          {
            type: 'trapCard',
            title: 'Squaring Only One Step',
            wrong: 'Converting $\\text{in}^2 \\to \\text{yd}^2$: student squares the in-to-ft factor but uses the ft-to-yd factor without squaring.',
            correction: '**Every** conversion factor in the chain must be squared for area (or cubed for volume). Missing even one power gives an answer off by a factor of $3$ (or $12$, etc.).',
          },
          {
            type: 'tip',
            content: 'When a multi-step path feels complicated, combine the linear factors first: $1$ yd $= 3$ ft $= 36$ in. Then square the combined factor once: $36^2 = 1{,}296$. One squaring operation is simpler than two.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Multi-Step Squared-Unit Conversion',
            items: [
              'Identify the chain of linear conversions from start unit to target unit (e.g., in $\\to$ ft $\\to$ yd)',
              '**Option A:** Square each factor separately and multiply: $(\\frac{1}{12})^2 \\times (\\frac{1}{3})^2$',
              '**Option B:** Combine the linear factors into one ($1$ yd $= 36$ in), then square the combined factor ($36^2 = 1{,}296$)',
              'Multiply (or divide) the given area by the combined squared factor',
              'Sanity-check: smaller units $\\to$ larger units means a **smaller** number',
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Cubic Version',
            content: 'The same logic applies to multi-step volume conversions — **cube** each factor instead of squaring. $1 \\text{ yd}^3 = 36^3 \\text{ in}^3 = 46{,}656 \\text{ in}^3$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Convert $1{,}296 \\text{ in}^2$ to square yards.',
            steps: [
              { label: 'Linear chain', content: '$1$ yd $= 3$ ft $= 36$ in' },
              { label: 'Square combined factor', content: '$1 \\text{ yd}^2 = 36^2 \\text{ in}^2 = 1{,}296 \\text{ in}^2$' },
              { label: 'Divide', content: '$\\frac{1{,}296}{1{,}296} = 1$' },
              { label: 'Answer', content: '$1 \\text{ yd}^2$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A field measures $50{,}000 \\text{ cm}^2$. Convert to $\\text{m}^2$.',
            steps: [
              { label: 'Linear factor', content: '$1$ m $= 100$ cm' },
              { label: 'Square the factor', content: '$1 \\text{ m}^2 = 100^2 = 10{,}000 \\text{ cm}^2$' },
              { label: 'Divide (cm² to m²)', content: '$\\frac{50{,}000}{10{,}000} = 5$' },
              { label: 'Answer', content: '$5 \\text{ m}^2$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A surface area is $4 \\text{ yd}^2$. Express it in square inches.',
            steps: [
              { label: 'Combined linear factor', content: '$1$ yd $= 36$ in' },
              { label: 'Square', content: '$1 \\text{ yd}^2 = 36^2 = 1{,}296 \\text{ in}^2$' },
              { label: 'Multiply', content: '$4 \\times 1{,}296 = 5{,}184$' },
              { label: 'Answer', content: '$5{,}184 \\text{ in}^2$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Convert $2 \\text{ yd}^3$ to cubic inches.',
            steps: [
              { label: 'Combined linear factor', content: '$1$ yd $= 36$ in' },
              { label: 'Cube', content: '$1 \\text{ yd}^3 = 36^3 = 46{,}656 \\text{ in}^3$' },
              { label: 'Multiply', content: '$2 \\times 46{,}656 = 93{,}312$' },
              { label: 'Answer', content: '$93{,}312 \\text{ in}^3$' },
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
            question: 'Convert $3{,}888 \\text{ in}^2$ to square yards.',
            answer: '$1 \\text{ yd} = 36 \\text{ in}$, so $1 \\text{ yd}^2 = 36^2 = 1{,}296 \\text{ in}^2$. $\\frac{3{,}888}{1{,}296} = 3 \\text{ yd}^2$.',
          },
          {
            type: 'checkpointQuestion',
            number: 2,
            question: 'A container has a volume of $5 \\text{ yd}^3$. How many cubic feet is that?',
            answer: '$1 \\text{ yd} = 3 \\text{ ft}$, so $1 \\text{ yd}^3 = 3^3 = 27 \\text{ ft}^3$. $5 \\times 27 = 135 \\text{ ft}^3$.',
          },
        ],
      },
    },
  },

};
