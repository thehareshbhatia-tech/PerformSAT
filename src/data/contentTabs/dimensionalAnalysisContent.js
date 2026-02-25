export const dimensionalAnalysisContent = {
  moduleId: 'dimensional-analysis',
  title: 'Dimensional Analysis',
  description: 'Master unit conversion chains, squared/cubic unit conversions, and rate conversions — among the most predictable free points on the Digital SAT.',

  sections: {
    coreConcepts: {
      title: 'Core Concepts',
      summary: 'The conversion-fraction principle, chain setup, squared/cubic exponent rules, and rate conversion logic.',
      blocks: [
        { type: 'heading', content: 'The Conversion Fraction' },
        { type: 'text', content: 'Any equality (1 ft = 12 in) becomes two fractions that each equal 1: *12 in / 1 ft* or *1 ft / 12 in*. Multiplying by either does not change the quantity — only the unit. Choose whichever **cancels** the unit you want to eliminate.' },
        { type: 'heading', content: 'The Conversion Chain' },
        { type: 'steps', title: 'Chain Setup', items: [
          'Start with the given quantity and its unit.',
          'Identify the target unit.',
          'Arrange conversion fractions so each unwanted unit cancels (appears in opposite position).',
          'Multiply across and simplify — only the target unit should remain.',
        ] },
        { type: 'keyInsight', content: 'Linear × k, area × k², volume × k³. Rates have two units — convert numerator and denominator separately in the chain.' },
      ],
    },

    satPatterns: {
      title: 'SAT Patterns',
      summary: 'Five prompt styles: chain conversions, rate word problems, area/volume units, science context, and conversion-table lookups.',
      blocks: [
        { type: 'heading', content: 'How College Board Tests Unit Conversion' },
        { type: 'iconRow', items: [
          { icon: '🔗', label: 'Chain Conversion', description: 'Multi-step A → B → C conversion' },
          { icon: '⏱️', label: 'Rate Problems', description: 'Speed, cost/unit, density' },
          { icon: '📐', label: 'Squared/Cubic', description: 'Area or volume unit swap' },
          { icon: '🧪', label: 'Science Context', description: 'Concentration, dosage, etc.' },
        ] },
        { type: 'text', content: '**Chain Conversion** (easy-medium): Two conversion factors supplied. Set up the chain, cancel units. Trap: inverting one fraction.' },
        { type: 'text', content: '**Rate Problems** (medium): "150 widgets/hour — how many per minute?" Convert the time unit while the widget unit stays fixed.' },
        { type: 'text', content: '**Squared/Cubic** (medium-hard): "12 ft × 15 ft room — area in square yards?" Requires applying 1 yd = 3 ft **twice**: 1 yd² = 9 ft².' },
        { type: 'callout', variant: 'info', title: 'Factors Are Always Given', content: 'The SAT provides every non-obvious conversion factor in the problem. You never need to memorize that 1 mile = 5,280 ft. Your job: use the given factors correctly.' },
      ],
    },

    methods: {
      title: 'Methods',
      summary: 'Step-by-step procedures for single/multi-step chains, rate conversions, squared/cubic conversions, and label-tracking verification.',
      blocks: [
        { type: 'heading', content: 'Method 1: The Conversion Chain' },
        { type: 'formula', label: 'Chain Template', content: 'Value × (Unit₂/Unit₁) × (Unit₃/Unit₂) = Result in Unit₃', note: 'Each fraction cancels one unit and introduces the next' },
        { type: 'steps', title: 'Workflow', items: [
          'Write starting quantity with its unit.',
          'Set up conversion fractions so each unwanted unit cancels.',
          'Multiply numerators together, denominators together.',
          'Verify only the target unit survives.',
        ] },
        { type: 'heading', content: 'Method 2: Rate Conversion (Two-Unit Chain)' },
        { type: 'steps', title: 'Workflow', items: [
          'Write the rate as a fraction (numerator unit / denominator unit).',
          'Set up a chain for the numerator unit (e.g., miles → feet).',
          'Set up a chain for the denominator unit (e.g., hours → seconds).',
          'Since the denominator unit is already in the denominator of the rate, its conversion fraction goes in the **numerator** to cancel.',
        ] },
        { type: 'heading', content: 'Method 3: Squared/Cubic Conversion' },
        { type: 'steps', title: 'Workflow', items: [
          'Write the linear factor (1 ft = 12 in).',
          'For area: square both sides → 1 ft² = 144 in².',
          'For volume: cube both sides → 1 ft³ = 1,728 in³.',
          'Use the squared/cubed factor in your chain.',
        ] },
      ],
    },

    commonTraps: {
      title: 'Common Traps',
      summary: 'The five conversion errors that cost the most SAT points.',
      blocks: [
        { type: 'trapCard', title: 'Inverted Fraction', wrong: '3 km × (1 km / 1000 m) = 0.003. Dimensionally nonsensical.', correction: '3 km × (**1000 m / 1 km**) = 3,000 m. The km must be in the denominator to cancel.' },
        { type: 'trapCard', title: 'Forgot to Square/Cube', wrong: '5 ft² × 12 = 60 in².', correction: '5 ft² × 12² = 5 × 144 = **720 in²**. Square the factor for area.' },
        { type: 'trapCard', title: 'Rate Denominator Flip', wrong: '30 mi/hr → mi/min: 30 × 60 = 1,800 mi/min.', correction: '30 × (1/60) = **0.5 mi/min**. Fewer minutes per hour → rate per minute is **smaller**.' },
        { type: 'trapCard', title: 'Wrong Target Unit', wrong: 'Problem asks gallons/minute; student gives minutes/gallon.', correction: 'Underline the exact unit requested. If you get the reciprocal, flip your answer.' },
        { type: 'callout', variant: 'memorize', title: 'Sanity-Check Protocol', content: '**1)** Bigger number of smaller units? (Or vice versa?) **2)** All unwanted units canceled? **3)** Remaining unit matches what was asked?' },
      ],
    },

    workedExamples: {
      title: 'Worked Examples',
      summary: 'An area conversion garden problem and a multi-step factory production problem, fully worked.',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'A garden is 18 ft × 24 ft. Topsoil is sold by the square yard. How many square yards are needed? (1 yd = 3 ft)',
          steps: [
            { label: 'Area', content: '18 × 24 = **432 ft²**' },
            { label: 'Convert', content: '1 yd = 3 ft → 1 yd² = 9 ft². So: 432 / 9 = **48 yd²**' },
            { label: 'Check', content: '48 is less than 432 — correct direction (bigger unit → smaller number).' },
          ],
        },
        {
          type: 'example',
          difficulty: 'Hard',
          problem: 'A factory makes 2,400 widgets per 8-hour shift. Each weighs 350 g. Shipping containers hold 500 kg. How many full containers per shift? (1 kg = 1,000 g)',
          steps: [
            { label: 'Total weight', content: '2,400 × 350 = **840,000 g**' },
            { label: 'Convert', content: '840,000 / 1,000 = **840 kg**' },
            { label: 'Containers', content: '840 / 500 = 1.68 → **1 full container** (round down for "full")' },
            { label: 'Trap note', content: '"Full containers" = round **down**. "Containers needed" = round **up**. Read carefully.' },
          ],
        },
      ],
    },

    visualModels: {
      title: 'Visual Models',
      summary: 'Mental diagrams for conversion chains, squared vs. cubed grids, and rate fraction anatomy.',
      blocks: [
        { type: 'heading', content: 'The Chain as a Bridge Diagram' },
        { type: 'diagramRef', description: 'Horizontal chain: [3 km] → ×(1000 m/km) → [3000 m] → ×(100 cm/m) → [300,000 cm]. Canceled units shown crossed out at each step.' },
        { type: 'heading', content: 'Why Area Squares and Volume Cubes' },
        { type: 'diagramRef', description: 'A 1 ft × 1 ft square divided into a 12×12 grid of inch squares (144 cells). Beside it, a 1 ft cube divided into a 12×12×12 grid of inch cubes (1,728 cells).' },
        { type: 'iconRow', items: [
          { icon: '📏', label: 'Small → Big Unit', description: 'Number shrinks' },
          { icon: '📐', label: 'Big → Small Unit', description: 'Number grows' },
          { icon: '⬛', label: 'Area', description: 'Factor squared' },
          { icon: '🧊', label: 'Volume', description: 'Factor cubed' },
        ] },
      ],
    },

    speedStrategy: {
      title: 'Speed & Strategy',
      summary: 'Desmos chain-multiply workflow, units-first writing strategy, and sanity-check direction.',
      blocks: [
        { type: 'strategyCard', title: 'Desmos: One-Line Chain', icon: '🖩', timing: '~15s saved', content: 'Type the entire chain: **45*5280/3600** converts 45 mph to ft/sec in one keystroke. No intermediate rounding.' },
        { type: 'strategyCard', title: 'Write Units First, Numbers Second', icon: '✍️', timing: '~20s saved', content: 'On scratch paper, write the unit chain skeleton first: mi/hr × ft/mi × hr/sec = ft/sec. Verify cancellation. Then fill in the numbers.' },
        { type: 'strategyCard', title: 'Sanity-Check Direction', icon: '🧭', timing: '~5s', content: 'Before computing, predict: should the answer be **bigger** or **smaller**? Converting to a smaller unit → bigger number. If your answer goes the wrong way, you inverted a fraction.' },
        { type: 'strategyCard', title: 'Know Common Squared/Cubed Values', icon: '⚡', timing: '~10s saved', content: '12² = 144, 12³ = 1,728, 3² = 9, 3³ = 27. These four appear constantly on the SAT.' },
        { type: 'tip', content: 'Dimensional analysis questions are **procedural** — the method is identical every time. Practice the chain technique until it is automatic and these become free points.' },
      ],
    },

    checkpoint: {
      title: 'Checkpoint',
      summary: 'Two retrieval questions covering rate conversion and cubic unit conversion.',
      blocks: [
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'Convert 90 km/hr to m/s. (1 km = 1,000 m, 1 hr = 3,600 s)',
          answer: '90 × 1000 / 3600 = 90,000 / 3,600 = **25 m/s**',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'A tank holds 5 ft³ of water. How many cubic inches is that? (1 ft = 12 in)',
          answer: '5 × 12³ = 5 × 1,728 = **8,640 in³**. (Cube the conversion factor!)',
        },
      ],
    },
  },
};
