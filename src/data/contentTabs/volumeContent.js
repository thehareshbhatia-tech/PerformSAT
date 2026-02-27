export const volumeContent = {
  moduleId: 'volume',
  title: 'Volume',
  description: 'Master rectangular prism, cylinder, sphere, cone, and composite solid volume — every formula the SAT reference sheet gives you, and how to wield each one under pressure.',

  sections: {
    coreConcepts: {
      title: 'Core Concepts',
      summary: 'Volume formulas for six solids, the Base Area $\\times$ height pattern, and composite solid logic.',
      blocks: [
        { type: 'heading', content: 'Volume = Base Area $\\times$ Height' },
        { type: 'text', content: 'Every prism and cylinder obeys one principle: **V = (Base Area) $\\times$ height**. A cone is ⅓ of its matching cylinder. A sphere stands alone. The SAT reference sheet gives every formula — your job is matching shape to formula and substituting correctly.' },
        { type: 'formulaGrid', items: [
          { label: 'Rectangular Prism', formula: '$V = lwh$', note: 'length $\\times$ width $\\times$ height' },
          { label: 'Cylinder', formula: '$V = \\pi r^2h$', note: 'circle base $\\times$ height' },
          { label: 'Sphere', formula: '$V = (4/3)\\pi r^3$', note: 'radius cubed, scaled by 4π/3' },
          { label: 'Cone', formula: '$V = (1/3)\\pi r^2h$', note: 'exactly ⅓ of its cylinder' },
          { label: 'Pyramid', formula: '$V = (1/3)Bh$', note: 'B = any polygon base area' },
        ] },
        { type: 'keyInsight', content: 'Cone : Cylinder : Sphere with same r and h = 2r → volume ratio **1 : 3 : 2**. This single relationship answers many SAT comparison questions without computation.' },
        { type: 'heading', content: 'Composite Solids' },
        { type: 'text', content: 'A composite solid combines basic shapes. "Cylinder topped by a hemisphere" → add volumes. "Prism with a cylindrical hole" → subtract. Identify each piece, compute separately, then combine.' },
      ],
    },

    satPatterns: {
      title: 'SAT Patterns',
      summary: 'Four archetypes: plug & compute, reverse solve, scaling/ratio, and composite solid.',
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Volume Prompt Archetypes',
          content: '**Plug & compute**: All dimensions given — pick formula, substitute, simplify. **Reverse solve**: V given, find r or h — isolate, take root. **Scaling**: "Radius doubles, what happens to V?" — use exponents, no full computation. **Composite**: Two shapes — add (silo) or subtract (hole).',
        },
        {
          type: 'iconRow',
          items: [
            { icon: '📦', label: 'Plug & Compute', description: 'All dimensions given — find volume' },
            { icon: '🔄', label: 'Reverse Solve', description: 'Volume given — find a missing dimension' },
            { icon: '⚖️', label: 'Scaling / Ratio', description: 'Dimension changes — what happens to V?' },
            { icon: '📐', label: 'Composite Solid', description: 'Add or subtract two shapes' },
          ],
        },
        {
          type: 'trapCard',
          title: 'Diameter vs. Radius',
          wrong: 'Sphere diameter = 10. Student plugs 10 into V = (4/3)πr³ → gets 4,189 cm³.',
          correction: 'r = 5. V = (4/3)π(125) = 500π/3 ≈ **523.6 cm³**. Halve the diameter before substituting. Circle r in scratch work before computing.',
        },
        {
          type: 'tip',
          content: '**Use ratio approach** when the question asks "what happens to V?" or compares two similar solids — exponent rules only, no π. **Use full computation** when a numeric answer is required or shapes differ (cone vs cylinder).',
        },
      ],
    },

    methods: {
      title: 'Methods',
      summary: 'Step-by-step solving workflows for direct computation, reverse-solve, scaling, and composite decomposition.',
      blocks: [
        { type: 'heading', content: 'Method 1: Direct Formula Application' },
        { type: 'steps', title: 'Workflow', items: [
          'Identify the solid → write its formula from the reference sheet.',
          'Match each variable to the given values. **Halve any diameter.**',
          'Substitute and simplify. Keep π symbolic unless answer choices are decimals.',
        ] },
        { type: 'heading', content: 'Method 2: Reverse-Solve for a Dimension' },
        { type: 'steps', title: 'Workflow', items: [
          'Set the formula equal to the given volume.',
          'Isolate the unknown: divide both sides by constants and π.',
          'For r²: take √. For r³: take ∛. Example: (4/3)πr³ = 288π → r³ = 216 → r = 6.',
        ] },
        { type: 'heading', content: 'Method 3: Scaling Shortcut' },
        { type: 'formula', label: 'Scaling Formula', content: '$V_new / V_old = k_1 \\cdot k_2 \\cdot k_3$', note: 'k values are per-dimension scale factors (use exponents matching the formula)' },
        { type: 'comparison', items: [
          { label: '✓ Correct', content: 'Cylinder radius triples, height unchanged → V_new = 3² $\\times$ 1 $\\times$ V_old = **9V_old**', variant: 'correct' },
          { label: '✗ Mistake', content: 'Student multiplies by 3 instead of 3² — forgot r is **squared** in πr²h', variant: 'wrong' },
        ] },
      ],
    },

    commonTraps: {
      title: 'Common Traps',
      summary: 'The six mistakes that cost the most points on SAT volume questions.',
      blocks: [
        { type: 'trapCard', title: 'Diameter vs. Radius', wrong: 'Sphere diameter = 10. Student plugs 10 into V = (4/3)πr³ → gets 4,189 cm³.', correction: 'r = 5. V = (4/3)π(125) = 500π/3 ≈ **523.6 cm³**. Always halve the diameter.' },
        { type: 'trapCard', title: 'Missing the ⅓ Factor', wrong: 'Cone computed as V = πr²h (cylinder formula).', correction: 'Cone = **(1/3)** πr²h. The ⅓ is the defining difference between cone and cylinder.' },
        { type: 'trapCard', title: 'Linear vs. Cubic Conversion', wrong: '2 ft³ converted as 2 $\\times$ 12 = 24 in³.', correction: '1 ft³ = 12³ = **1,728 in³**. So 2 ft³ = **3,456 in³**. Cube the conversion factor.' },
        { type: 'trapCard', title: 'Hemisphere $\\neq$ Sphere', wrong: 'Problem says "hemisphere"; student uses full V = (4/3)πr³.', correction: 'Hemisphere = **(2/3)πr³** — half of the sphere formula.' },
        { type: 'callout', variant: 'memorize', title: 'Pre-Submit Checklist', content: '**1)** Radius, not diameter? **2)** ⅓ for cones/pyramids? ½ for hemispheres? **3)** Cubed the unit conversion? **4)** Units match answer choices?' },
      ],
    },

    workedExamples: {
      title: 'Worked Examples',
      summary: 'A reverse-solve sphere problem and a composite silo problem, fully worked.',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'A sphere has volume 288π in³. What is the diameter of the sphere, in inches?',
          steps: [
            { label: 'Formula', content: 'V = (4/3)πr³' },
            { label: 'Substitute', content: '(4/3)πr³ = 288π → divide by π → (4/3)r³ = 288' },
            { label: 'Isolate r³', content: 'r³ = 288 $\\times$ (3/4) = **216**' },
            { label: 'Cube root', content: 'r = ∛216 = **6**' },
            { label: 'Answer', content: 'Diameter = 2r = **12 inches**. (Trap: giving 6 — that is the radius.)' },
          ],
        },
        {
          type: 'example',
          difficulty: 'Hard',
          problem: 'A grain silo is a cylinder (r = 6 ft, h = 20 ft) topped by a hemisphere of the same radius. Find the total volume in terms of π.',
          steps: [
            { label: 'Cylinder', content: 'V_cyl = π(6)²(20) = **720π ft³**' },
            { label: 'Hemisphere', content: 'V_hemi = (2/3)π(6)³ = (2/3)(216π) = **144π ft³**' },
            { label: 'Total', content: '720π + 144π = **864π ft³**' },
            { label: 'Verify', content: 'Hemisphere adds ~20% to the cylinder — reasonable for a silo shape.' },
          ],
        },
      ],
    },

    visualModels: {
      title: 'Visual Models',
      summary: 'Mental pictures for shape-formula mapping, the 1:3:2 ratio, and scaling behavior.',
      blocks: [
        { type: 'heading', content: 'Shape ↔ Formula Quick Map' },
        { type: 'iconRow', items: [
          { icon: '📦', label: 'Rect. Prism', description: 'V = lwh' },
          { icon: '🥫', label: 'Cylinder', description: 'V = πr²h' },
          { icon: '🏀', label: 'Sphere', description: 'V = (4/3)πr³' },
          { icon: '🍦', label: 'Cone', description: 'V = (1/3)πr²h' },
        ] },
        { type: 'heading', content: 'The 1 : 3 : 2 Relationship' },
        { type: 'diagramRef', description: 'Three solids with same radius r and height h = 2r. Cone (V = ⅔πr³), cylinder (V = 2πr³), sphere (V = ⁴⁄₃πr³). Volumes in ratio 1 : 3 : 2, shown as stacked bar segments.' },
      ],
    },

    speedStrategy: {
      title: 'Speed & Strategy',
      summary: 'Desmos workflows, scaling shortcuts, and answer-choice hacks for volume questions.',
      blocks: [
        { type: 'strategyCard', title: 'Desmos: Type the Whole Formula', icon: '🖩', timing: '~15s saved', content: 'Enter **(4/3)*pi*6^3** directly. Desmos returns the decimal instantly. If answer choices use π, compute only the coefficient.' },
        { type: 'strategyCard', title: 'Diameter Checkpoint', icon: '🎯', timing: '~5s', content: 'Before substituting, circle the radius in your scratch work. This single habit prevents the #1 volume error.' },
        { type: 'strategyCard', title: 'Scaling Without Computing', icon: '⚡', timing: '~30s saved', content: '"Radius doubles?" → r² quadruples → cylinder volume $\\times$ 4. Never compute both volumes — use the exponent.' },
        { type: 'strategyCard', title: 'Answer-Choice Backwards Check', icon: '🔄', timing: '~10s', content: 'Choices are 36π, 72π, 108π, 144π and you got 226.2? Divide by π ≈ 72 → pick **72π**.' },
        { type: 'tip', content: 'Hard volume questions almost always involve **two shapes** or **solving for a dimension**. If you see neither, re-read — you may have missed something.' },
      ],
    },

    checkpoint: {
      title: 'Checkpoint',
      summary: 'Two SAT-style retrieval questions covering reverse-solve and unit conversion.',
      blocks: [
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'A cone has radius 5 cm and height 12 cm. What is its volume in terms of π?',
          answer: 'V = (1/3)π(25)(12) = (1/3)(300π) = **100π cm³**',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'A rectangular aquarium is 2 ft $\\times$ 1.5 ft $\\times$ 1 ft. How many cubic inches of water can it hold? (1 ft = 12 in)',
          answer: 'V = 2 $\\times$ 1.5 $\\times$ 1 = 3 ft³. Convert: 3 $\\times$ 12³ = 3 $\\times$ 1,728 = **5,184 in³**. (Cube the conversion factor!)',
        },
      ],
    },
  },
};
