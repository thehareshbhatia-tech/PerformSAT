export const dimensionalAnalysisLessonTabs = {
  1: {
    moduleId: 'dimensional-analysis',
    title: 'Dimensional Analysis',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Dimensional analysis converts between units by multiplying by fractions equal to $1$, guaranteeing the value stays unchanged while the unit transforms.',
        blocks: [
          {
            type: 'formula',
            label: 'Unit-Cancellation Principle',
            content: '$$\\text{Start unit} \\times \\frac{\\text{Target unit}}{\\text{Start unit}} = \\text{Target unit}$$',
          },
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Conversion Factor',
                formula: '$\\frac{5{,}280 \\text{ ft}}{1 \\text{ mi}} = 1$',
                note: 'Numerator and denominator are equal in different units',
              },
              {
                label: 'Inverted Factor',
                formula: '$\\frac{1 \\text{ mi}}{5{,}280 \\text{ ft}} = 1$',
                note: 'Same relationship, flipped orientation',
              },
            ],
          },
          {
            type: 'text',
            content: 'Two equal quantities form a ratio of $1$. Because $1$ mile $= 5{,}280$ feet, the fraction $\\frac{5{,}280 \\text{ ft}}{1 \\text{ mi}}$ equals $1$. Multiplying any measurement by this fraction rewrites its unit without altering its size. Chaining several such fractions bridges any pair of units.',
          },
          {
            type: 'keyInsight',
            content: 'Orientation removes all guesswork about multiplying vs. dividing: place the **unwanted unit** where it will cancel (numerator against denominator). The arithmetic follows automatically.',
          },
          {
            type: 'trapCard',
            title: 'Conversion Fraction Oriented Backwards',
            wrong: 'Converting $3$ miles to feet: $3 \\text{ mi} \\times \\frac{1 \\text{ mi}}{5{,}280 \\text{ ft}} = \\frac{3}{5{,}280}$ — miles multiply instead of canceling.',
            correction: 'Place miles in the **denominator** so they cancel the miles in the numerator: $3 \\text{ mi} \\times \\frac{5{,}280 \\text{ ft}}{1 \\text{ mi}} = 15{,}840$ ft.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Convert $3$ miles to feet.',
            steps: [
              {
                label: 'Set up',
                content: '$3 \\text{ mi} \\times \\frac{5{,}280 \\text{ ft}}{1 \\text{ mi}}$',
              },
              {
                label: 'Cancel',
                content: 'mi in the numerator and mi in the denominator cancel',
              },
              {
                label: 'Compute',
                content: '$3 \\times 5{,}280 = 15{,}840$',
              },
              {
                label: 'Answer',
                content: '$15{,}840$ feet',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A hose delivers water at $5$ gallons per minute. Express this rate in quarts per hour. ($1$ gallon $= 4$ quarts)',
            answer: '$\\frac{5 \\text{ gal}}{1 \\text{ min}} \\times \\frac{4 \\text{ qt}}{1 \\text{ gal}} \\times \\frac{60 \\text{ min}}{1 \\text{ hr}} = 5 \\times 4 \\times 60 = 1{,}200$ quarts per hour.',
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'dimensional-analysis',
    title: 'Simple Dimensional Analysis',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Simple dimensional analysis uses one or two conversion factors in a single multiplication chain.',
        blocks: [
          {
            type: 'formula',
            label: 'Two-Factor Chain',
            content: '$$\\text{value} \\times \\frac{\\text{middle unit}}{\\text{start unit}} \\times \\frac{\\text{target unit}}{\\text{middle unit}} = \\text{result in target unit}$$',
          },
          {
            type: 'text',
            content: 'A one-step conversion multiplies by a single fraction: $\\text{given} \\times \\frac{\\text{new unit}}{\\text{old unit}}$. A two-step conversion chains two fractions through an intermediate unit. Every fraction equals $1$, so only the unit changes — the value stays the same.',
          },
          {
            type: 'keyInsight',
            content: 'Before multiplying, verify that every unit marked for elimination appears once in a numerator and once in a denominator. If any unit survives on the wrong side, a fraction is flipped or missing.',
          },
          {
            type: 'trapCard',
            title: 'Factor Pointing the Wrong Way',
            wrong: 'Converting $5$ km to meters: $5 \\times \\frac{1 \\text{ km}}{1{,}000 \\text{ m}} = 0.005$ — the answer shrank instead of growing.',
            correction: 'km must cancel, so km belongs in the denominator: $5 \\text{ km} \\times \\frac{1{,}000 \\text{ m}}{1 \\text{ km}} = 5{,}000$ m. Moving from a larger unit to a smaller unit always produces a bigger number.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Convert $7$ feet to inches.',
            steps: [
              {
                label: 'Set up',
                content: '$7 \\text{ ft} \\times \\frac{12 \\text{ in}}{1 \\text{ ft}}$',
              },
              {
                label: 'Cancel',
                content: 'ft cancels, leaving inches',
              },
              {
                label: 'Compute',
                content: '$7 \\times 12 = 84$',
              },
              {
                label: 'Answer',
                content: '$84$ inches',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Convert $7$ feet to inches.',
            answer: '$84$ inches',
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'dimensional-analysis',
    title: 'Squared & Cubic Units',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Converting area or volume units requires raising the linear conversion factor to the same power as the unit dimension.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Length',
                formula: '$1 \\text{ ft} = 12 \\text{ in}$',
                note: 'Factor: $12$',
              },
              {
                label: 'Area',
                formula: '$1 \\text{ ft}^2 = 144 \\text{ in}^2$',
                note: 'Factor: $12^2 = 144$',
              },
              {
                label: 'Volume',
                formula: '$1 \\text{ ft}^3 = 1{,}728 \\text{ in}^3$',
                note: 'Factor: $12^3 = 1{,}728$',
              },
            ],
          },
          {
            type: 'text',
            content: 'A length conversion applies the factor once. An area conversion (length $\\times$ length) applies it **twice** — both dimensions change. A volume conversion (length $\\times$ length $\\times$ length) applies it **three times**. The factor is raised to the power of the unit dimension.',
          },
          {
            type: 'keyInsight',
            content: '$1 \\text{ ft}^2$ represents a $1 \\text{ ft} \\times 1 \\text{ ft}$ square. Each side converts to $12$ inches, so the area becomes $12 \\times 12 = 144 \\text{ in}^2$, not $12 \\text{ in}^2$. The same reasoning extends to cubes: $12 \\times 12 \\times 12 = 1{,}728$.',
          },
          {
            type: 'trapCard',
            title: 'Applying the Linear Factor to a Squared Unit',
            wrong: 'Converting $3 \\text{ m}^2$ to $\\text{cm}^2$: $3 \\times 100 = 300 \\text{ cm}^2$ — the student used the linear factor $100$ instead of $100^2$.',
            correction: 'Square the factor for area: $3 \\times 100^2 = 3 \\times 10{,}000 = 30{,}000 \\text{ cm}^2$. For volume, cube it: $100^3 = 1{,}000{,}000$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'steps',
            title: 'Squared / Cubed Unit Conversion',
            items: [
              'Identify the **linear** conversion factor (e.g., $1$ m $= 100$ cm)',
              'Determine the dimension: $n = 2$ for area, $n = 3$ for volume',
              'Raise the factor to the $n$th power: $100^2 = 10{,}000$ for area; $100^3 = 1{,}000{,}000$ for volume',
              'Multiply (to smaller units) or divide (to larger units) by the powered factor',
            ],
          },
          {
            type: 'steps',
            title: 'Squared / Cubed Unit Conversion',
            items: [
              'Identify the **linear** conversion factor (e.g., $1$ m $= 100$ cm)',
              'Determine the dimension: $n = 2$ for area, $n = 3$ for volume',
              'Raise the factor to the $n$th power: $100^2 = 10{,}000$ for area; $100^3 = 1{,}000{,}000$ for volume',
              'Multiply (to smaller units) or divide (to larger units) by the powered factor',
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A fish tank holds $2 \\text{ ft}^3$ of water. How many cubic inches is that?',
            answer: '$1 \\text{ ft} = 12 \\text{ in}$, so $1 \\text{ ft}^3 = 12^3 = 1{,}728 \\text{ in}^3$. Therefore $2 \\times 1{,}728 = 3{,}456 \\text{ in}^3$.',
          },
        ],
      },
    },
  },

  4: {
    moduleId: 'dimensional-analysis',
    title: 'Squared Units Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Squared-unit conversion squares the linear factor because area spans two length dimensions.',
        blocks: [
          {
            type: 'formula',
            label: 'Squared-Unit Rule',
            content: '$$A \\;\\text{(large unit)}^2 \\times (\\text{linear factor})^2 = A \\;\\text{(small unit)}^2$$',
          },
          {
            type: 'text',
            content: 'Area measures length $\\times$ length. Converting each dimension multiplies the factor in **twice**, which is equivalent to squaring the linear conversion factor.',
          },
          {
            type: 'keyInsight',
            content: 'Visualize $1 \\text{ yd}^2$ as a $1 \\text{ yd} \\times 1 \\text{ yd}$ square. Each side converts to $3$ feet: $3 \\text{ ft} \\times 3 \\text{ ft} = 9 \\text{ ft}^2$. The factor $3$ appears twice — once per side.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Square the Factor',
            wrong: 'Converting $8 \\text{ ft}^2$ to $\\text{in}^2$: $8 \\times 12 = 96 \\text{ in}^2$ — the student multiplied by $12$ instead of $12^2 = 144$.',
            correction: 'Each of the two length dimensions converts by $12$, so the combined factor is $12^2 = 144$: $8 \\times 144 = 1{,}152 \\text{ in}^2$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Convert $5 \\text{ ft}^2$ to square inches.',
            steps: [
              {
                label: 'Linear factor',
                content: '$1$ ft $= 12$ in',
              },
              {
                label: 'Square',
                content: '$12^2 = 144$',
              },
              {
                label: 'Multiply',
                content: '$5 \\times 144 = 720$',
              },
              {
                label: 'Answer',
                content: '$720 \\text{ in}^2$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Convert $5 \\text{ ft}^2$ to square inches.',
            answer: '$720 \\text{ in}^2$',
          },
        ],
      },
    },
  },

  5: {
    moduleId: 'dimensional-analysis',
    title: 'Multi-Step Squared Units',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'When no single factor connects two squared (or cubed) units, chain multiple linear conversions and raise each to the power of the unit dimension.',
        blocks: [
          {
            type: 'formula',
            label: 'Multi-Step Squared Chain',
            content: '$$A \\text{ in}^2 \\times \\left(\\frac{1 \\text{ ft}}{12 \\text{ in}}\\right)^{\\!2} \\times \\left(\\frac{1 \\text{ yd}}{3 \\text{ ft}}\\right)^{\\!2} = A \\times \\frac{1}{144} \\times \\frac{1}{9} \\text{ yd}^2$$',
          },
          {
            type: 'text',
            content: 'Converting $\\text{in}^2 \\to \\text{yd}^2$ requires two intermediate steps — inches to feet, then feet to yards — with each factor squared. Alternatively, combine the linear factors first ($1$ yd $= 36$ in) and square the combined factor once.',
          },
          {
            type: 'keyInsight',
            content: 'Two approaches reach the same result. Chain approach: square each factor separately and multiply ($\\frac{1}{144} \\times \\frac{1}{9} = \\frac{1}{1{,}296}$). Combine approach: $1$ yd $= 36$ in $\\Rightarrow$ $36^2 = 1{,}296$. The second is often faster for mental math.',
          },
          {
            type: 'trapCard',
            title: 'Squaring Only One Link in the Chain',
            wrong: 'Converting $\\text{in}^2 \\to \\text{yd}^2$: student squares the in-to-ft factor ($144$) but leaves the ft-to-yd factor at $3$ instead of $9$.',
            correction: 'Every factor in the chain must be raised to the same power. For area, square **all** links: $\\frac{1}{12^2} \\times \\frac{1}{3^2} = \\frac{1}{144} \\times \\frac{1}{9} = \\frac{1}{1{,}296}$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Convert $1{,}296 \\text{ in}^2$ to square yards.',
            steps: [
              {
                label: 'Linear chain',
                content: '$1$ yd $= 3$ ft $= 36$ in',
              },
              {
                label: 'Square combined factor',
                content: '$1 \\text{ yd}^2 = 36^2 = 1{,}296 \\text{ in}^2$',
              },
              {
                label: 'Divide',
                content: '$\\frac{1{,}296}{1{,}296} = 1$',
              },
              {
                label: 'Answer',
                content: '$1 \\text{ yd}^2$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Convert $1{,}296 \\text{ in}^2$ to square yards.',
            answer: '$1 \\text{ yd}^2$',
          },
        ],
      },
    },
  },
};
